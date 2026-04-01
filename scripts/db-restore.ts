// ============================================================================
// PIXOPHARM LMS — Database Restore
// Restores course content from db-backup/ to Supabase at any granularity.
//
// Usage:
//   # Restore everything (all courses, modules, lessons, quiz questions)
//   SUPABASE_SECRET_KEY=sb_secret_... npx tsx scripts/db-restore.ts
//
//   # Restore a single course (and all its modules/lessons/quiz questions)
//   SUPABASE_SECRET_KEY=sb_secret_... npx tsx scripts/db-restore.ts --course foundations-pharmacy-practice
//
//   # Restore a single module within a course (and its lessons/quiz questions)
//   SUPABASE_SECRET_KEY=sb_secret_... npx tsx scripts/db-restore.ts --course foundations-pharmacy-practice --module 1
//
//   # Restore a single lesson within a module
//   SUPABASE_SECRET_KEY=sb_secret_... npx tsx scripts/db-restore.ts --course foundations-pharmacy-practice --module 1 --lesson 0
// ============================================================================

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUPABASE_URL = process.env.SUPABASE_URL ?? "https://hqyewiroiswmhfghkzhz.supabase.co";
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY;

if (!SUPABASE_SECRET_KEY) {
  console.error("Error: SUPABASE_SECRET_KEY environment variable is required");
  process.exit(1);
}

const headers: Record<string, string> = {
  apikey: SUPABASE_SECRET_KEY,
  Authorization: `Bearer ${SUPABASE_SECRET_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

const BACKUP_DIR = path.join(__dirname, "..", "db-backup");

// ── CLI Args ─────────────────────────────────────────────────────────────────

function parseArgs(): { course?: string; module?: number; lesson?: number } {
  const args: { course?: string; module?: number; lesson?: number } = {};
  const argv = process.argv.slice(2);

  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--course" && argv[i + 1]) {
      args.course = argv[++i];
    } else if (argv[i] === "--module" && argv[i + 1]) {
      args.module = parseInt(argv[++i], 10);
    } else if (argv[i] === "--lesson" && argv[i + 1]) {
      args.lesson = parseInt(argv[++i], 10);
    }
  }

  if (args.lesson !== undefined && args.module === undefined) {
    console.error("Error: --lesson requires --module");
    process.exit(1);
  }
  if (args.module !== undefined && args.course === undefined) {
    console.error("Error: --module requires --course");
    process.exit(1);
  }

  return args;
}

// ── Supabase Helpers ─────────────────────────────────────────────────────────

async function supabaseGet(table: string, params = ""): Promise<any[]> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params}`, { headers });
  if (!res.ok) throw new Error(`GET ${table}: ${res.status} ${await res.text()}`);
  return res.json();
}

async function supabaseUpsert(table: string, rows: any[]): Promise<void> {
  if (rows.length === 0) return;

  const chunkSize = 50;
  for (let i = 0; i < rows.length; i += chunkSize) {
    const chunk = rows.slice(i, i + chunkSize);
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        ...headers,
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify(chunk),
    });
    if (!res.ok) {
      throw new Error(`UPSERT ${table}: ${res.status} ${await res.text()}`);
    }
  }
}

async function supabaseDelete(table: string, filter: string): Promise<void> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${filter}`, {
    method: "DELETE",
    headers,
  });
  if (!res.ok) throw new Error(`DELETE ${table}: ${res.status} ${await res.text()}`);
}

function readJson(filePath: string): any {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

// ── Restore Functions ────────────────────────────────────────────────────────

async function restoreLesson(
  lessonFile: string,
  moduleId: string
): Promise<void> {
  const lesson = readJson(lessonFile);
  // Use the backup's module_id if it matches, otherwise use the provided one
  const row = {
    id: lesson.id,
    module_id: moduleId,
    title: lesson.title,
    content: lesson.content,
    order_index: lesson.order_index,
    duration_minutes: lesson.duration_minutes,
  };

  // Delete existing lesson with this ID, then insert
  try {
    await supabaseDelete("lessons", `id=eq.${lesson.id}`);
  } catch {
    // May not exist, that's fine
  }
  await supabaseUpsert("lessons", [row]);
  console.log(`    Restored lesson: ${lesson.title}`);
}

async function restoreModule(
  moduleDir: string,
  courseId: string,
  opts: { lessonIndex?: number } = {}
): Promise<void> {
  const mod = readJson(path.join(moduleDir, "module.json"));
  const moduleId = mod.id;

  // Restore module metadata
  const moduleRow = {
    id: mod.id,
    course_id: courseId,
    title: mod.title,
    description: mod.description,
    order_index: mod.order_index,
  };
  await supabaseUpsert("modules", [moduleRow]);
  console.log(`  Restored module ${mod.order_index}: ${mod.title}`);

  const lessonsDir = path.join(moduleDir, "lessons");

  // Restore specific lesson or all lessons
  if (opts.lessonIndex !== undefined) {
    // Find the lesson file matching this order_index
    if (fs.existsSync(lessonsDir)) {
      const lessonFiles = fs
        .readdirSync(lessonsDir)
        .filter((f) => f.endsWith(".json"))
        .sort();

      for (const file of lessonFiles) {
        const lesson = readJson(path.join(lessonsDir, file));
        if (lesson.order_index === opts.lessonIndex) {
          await restoreLesson(path.join(lessonsDir, file), moduleId);
          return;
        }
      }
      console.error(`    Lesson with order_index ${opts.lessonIndex} not found in module`);
    }
    return;
  }

  // Restore all lessons
  if (fs.existsSync(lessonsDir)) {
    const lessonFiles = fs
      .readdirSync(lessonsDir)
      .filter((f) => f.endsWith(".json"))
      .sort();

    // Delete existing lessons for this module, then insert all
    try {
      await supabaseDelete("lessons", `module_id=eq.${moduleId}`);
    } catch {
      // May not exist
    }

    const lessonRows: any[] = [];
    for (const file of lessonFiles) {
      const lesson = readJson(path.join(lessonsDir, file));
      lessonRows.push({
        id: lesson.id,
        module_id: moduleId,
        title: lesson.title,
        content: lesson.content,
        order_index: lesson.order_index,
        duration_minutes: lesson.duration_minutes,
      });
    }
    if (lessonRows.length > 0) {
      await supabaseUpsert("lessons", lessonRows);
      console.log(`    Restored ${lessonRows.length} lessons`);
    }
  }

  // Restore quiz questions
  const quizFile = path.join(moduleDir, "quiz-questions.json");
  if (fs.existsSync(quizFile)) {
    const questions = readJson(quizFile);

    // Delete existing quiz questions for this module
    try {
      await supabaseDelete("quiz_questions", `module_id=eq.${moduleId}`);
    } catch {
      // May not exist
    }

    const quizRows = questions.map((q: any) => ({
      id: q.id,
      module_id: moduleId,
      question: q.question,
      options: q.options,
      correct_answer: q.correct_answer,
      explanation: q.explanation,
      order_index: q.order_index,
      question_type: q.question_type,
      question_data: q.question_data,
      difficulty: q.difficulty,
      blooms_level: q.blooms_level,
    }));

    if (quizRows.length > 0) {
      await supabaseUpsert("quiz_questions", quizRows);
      console.log(`    Restored ${quizRows.length} quiz questions`);
    }
  }
}

async function restoreCourse(courseDir: string): Promise<void> {
  const course = readJson(path.join(courseDir, "course.json"));

  // Restore course metadata
  const courseRow = {
    id: course.id,
    title: course.title,
    slug: course.slug,
    description: course.description,
    skill_level: course.skill_level,
    duration_weeks: course.duration_weeks,
    icon: course.icon,
    color: course.color,
    prerequisites: course.prerequisites,
    what_youll_learn: course.what_youll_learn,
    status: course.status,
    order: course.order,
  };
  await supabaseUpsert("courses", [courseRow]);
  console.log(`\nRestored course: ${course.title}`);

  // Restore all modules
  const modulesDir = path.join(courseDir, "modules");
  if (fs.existsSync(modulesDir)) {
    const moduleDirs = fs
      .readdirSync(modulesDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort();

    for (const dir of moduleDirs) {
      await restoreModule(path.join(modulesDir, dir), course.id);
    }
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs();

  if (!fs.existsSync(BACKUP_DIR)) {
    console.error(`Error: Backup directory not found at ${BACKUP_DIR}`);
    console.error("Run db-export.ts first to create a backup.");
    process.exit(1);
  }

  const manifest = readJson(path.join(BACKUP_DIR, "manifest.json"));
  console.log("=== PIXOPHARM Database Restore ===");
  console.log(`Backup from: ${manifest.exported_at}`);
  console.log(`Contains: ${manifest.counts.courses} courses, ${manifest.counts.modules} modules, ${manifest.counts.lessons} lessons, ${manifest.counts.quiz_questions} quiz questions\n`);

  const coursesDir = path.join(BACKUP_DIR, "courses");

  if (args.course) {
    // Restore specific course
    const courseDir = path.join(coursesDir, args.course);
    if (!fs.existsSync(courseDir)) {
      console.error(`Error: Course "${args.course}" not found in backup`);
      console.error("Available courses:", fs.readdirSync(coursesDir).join(", "));
      process.exit(1);
    }

    if (args.module !== undefined) {
      // Restore specific module
      const course = readJson(path.join(courseDir, "course.json"));
      const modulesPath = path.join(courseDir, "modules");
      const moduleDirs = fs
        .readdirSync(modulesPath, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
        .sort();

      // Find module directory matching the order_index
      const targetDir = moduleDirs.find((d) => {
        const mod = readJson(path.join(modulesPath, d, "module.json"));
        return mod.order_index === args.module;
      });

      if (!targetDir) {
        console.error(`Error: Module ${args.module} not found in course "${args.course}"`);
        process.exit(1);
      }

      console.log(`Restoring module ${args.module} from course "${args.course}"...`);
      await restoreModule(path.join(modulesPath, targetDir), course.id, {
        lessonIndex: args.lesson,
      });
    } else {
      // Restore entire course
      console.log(`Restoring course "${args.course}"...`);
      await restoreCourse(courseDir);
    }
  } else {
    // Restore everything
    console.log("Restoring ALL courses...");
    const courseSlugs = fs
      .readdirSync(coursesDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort();

    for (const slug of courseSlugs) {
      await restoreCourse(path.join(coursesDir, slug));
    }
  }

  console.log("\n=== Restore Complete ===");
}

main().catch((err) => {
  console.error("Restore failed:", err);
  process.exit(1);
});
