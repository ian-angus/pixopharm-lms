// ============================================================================
// PIXOPHARM LMS — Database Export
// Exports all course content from Supabase to db-backup/ as individual JSON files.
// Each lesson gets its own file for granular restore capability.
//
// Usage:
//   SUPABASE_SECRET_KEY=sb_secret_... npx tsx scripts/db-export.ts
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
  console.error("Usage: SUPABASE_SECRET_KEY=sb_secret_... npx tsx scripts/db-export.ts");
  process.exit(1);
}

const headers = {
  apikey: SUPABASE_SECRET_KEY,
  Authorization: `Bearer ${SUPABASE_SECRET_KEY}`,
  "Content-Type": "application/json",
};

const BACKUP_DIR = path.join(__dirname, "..", "db-backup");

// ── Helpers ──────────────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 80);
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

async function supabaseGet(table: string, params = ""): Promise<any[]> {
  // Supabase REST API limits to 1000 rows by default. Paginate to get all.
  const allRows: any[] = [];
  let offset = 0;
  const limit = 1000;

  while (true) {
    const separator = params ? "&" : "";
    const url = `${SUPABASE_URL}/rest/v1/${table}?${params}${separator}limit=${limit}&offset=${offset}`;
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`GET ${table}: ${res.status} ${await res.text()}`);
    const rows = await res.json();
    allRows.push(...rows);
    if (rows.length < limit) break;
    offset += limit;
  }

  return allRows;
}

function writeJson(filePath: string, data: any): void {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("=== PIXOPHARM Database Export ===\n");

  // Clean previous backup
  if (fs.existsSync(BACKUP_DIR)) {
    fs.rmSync(BACKUP_DIR, { recursive: true });
  }
  fs.mkdirSync(BACKUP_DIR, { recursive: true });

  // 1. Fetch all data from Supabase
  console.log("Fetching data from Supabase...");

  const [courses, modules, lessons, quizQuestions] = await Promise.all([
    supabaseGet("courses", "select=*&order=order"),
    supabaseGet("modules", "select=*&order=course_id,order_index"),
    supabaseGet("lessons", "select=*&order=module_id,order_index"),
    supabaseGet("quiz_questions", "select=*&order=module_id,order_index"),
  ]);

  console.log(`  Courses: ${courses.length}`);
  console.log(`  Modules: ${modules.length}`);
  console.log(`  Lessons: ${lessons.length}`);
  console.log(`  Quiz Questions: ${quizQuestions.length}`);

  // 2. Build lookup maps
  const modulesByCourse = new Map<string, any[]>();
  for (const m of modules) {
    const arr = modulesByCourse.get(m.course_id) ?? [];
    arr.push(m);
    modulesByCourse.set(m.course_id, arr);
  }

  const lessonsByModule = new Map<string, any[]>();
  for (const l of lessons) {
    const arr = lessonsByModule.get(l.module_id) ?? [];
    arr.push(l);
    lessonsByModule.set(l.module_id, arr);
  }

  const quizByModule = new Map<string, any[]>();
  for (const q of quizQuestions) {
    const arr = quizByModule.get(q.module_id) ?? [];
    arr.push(q);
    quizByModule.set(q.module_id, arr);
  }

  // 3. Write hierarchical structure
  let totalFiles = 0;

  for (const course of courses) {
    const courseSlug = course.slug;
    const courseDir = path.join(BACKUP_DIR, "courses", courseSlug);

    // Write course metadata (strip timestamps for cleaner diffs)
    const courseData = {
      id: course.id,
      title: course.title,
      slug: course.slug,
      description: course.description,
      skill_level: course.skill_level,
      duration_weeks: course.duration_weeks,
      icon: course.icon,
      color: course.color,
      prerequisites: course.prerequisites ?? [],
      what_youll_learn: course.what_youll_learn ?? [],
      status: course.status,
      order: course.order,
    };
    writeJson(path.join(courseDir, "course.json"), courseData);
    totalFiles++;

    console.log(`\n${course.title} (${courseSlug})`);

    const courseModules = modulesByCourse.get(course.id) ?? [];

    for (const mod of courseModules) {
      const moduleSlug = `${pad(mod.order_index)}-${slugify(mod.title)}`;
      const moduleDir = path.join(courseDir, "modules", moduleSlug);

      // Write module metadata
      const moduleData = {
        id: mod.id,
        course_id: mod.course_id,
        title: mod.title,
        description: mod.description,
        order_index: mod.order_index,
      };
      writeJson(path.join(moduleDir, "module.json"), moduleData);
      totalFiles++;

      // Write individual lesson files
      const modLessons = lessonsByModule.get(mod.id) ?? [];
      for (const lesson of modLessons) {
        const lessonSlug = `${pad(lesson.order_index)}-${slugify(lesson.title)}`;
        const lessonData = {
          id: lesson.id,
          module_id: lesson.module_id,
          title: lesson.title,
          content: lesson.content,
          order_index: lesson.order_index,
          duration_minutes: lesson.duration_minutes,
        };
        writeJson(
          path.join(moduleDir, "lessons", `${lessonSlug}.json`),
          lessonData
        );
        totalFiles++;
      }

      // Write quiz questions (one file per module — questions belong to modules)
      const modQuiz = quizByModule.get(mod.id) ?? [];
      if (modQuiz.length > 0) {
        const quizData = modQuiz.map((q: any) => ({
          id: q.id,
          module_id: q.module_id,
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
        writeJson(path.join(moduleDir, "quiz-questions.json"), quizData);
        totalFiles++;
      }

      console.log(
        `  Module ${mod.order_index}: ${mod.title} — ${modLessons.length} lessons, ${modQuiz.length} quiz questions`
      );
    }
  }

  // 4. Write manifest
  const manifest = {
    exported_at: new Date().toISOString(),
    supabase_url: SUPABASE_URL,
    counts: {
      courses: courses.length,
      modules: modules.length,
      lessons: lessons.length,
      quiz_questions: quizQuestions.length,
      files: totalFiles,
    },
    structure: "courses/{slug}/modules/{order-title}/lessons/{order-title}.json",
    restore_script: "scripts/db-restore.ts",
  };
  writeJson(path.join(BACKUP_DIR, "manifest.json"), manifest);

  console.log(`\n=== Export Complete ===`);
  console.log(`  ${totalFiles} files written to db-backup/`);
  console.log(`  Manifest: db-backup/manifest.json`);
}

main().catch((err) => {
  console.error("Export failed:", err);
  process.exit(1);
});
