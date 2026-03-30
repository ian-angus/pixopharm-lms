// Sync all lessons and quiz questions from static course files to Supabase
// Run with: npx tsx scripts/sync-lessons-to-supabase.ts

const SUPABASE_URL = process.env.SUPABASE_URL ?? "https://hqyewiroiswmhfghkzhz.supabase.co";
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY;
if (!SUPABASE_SECRET_KEY) {
  console.error("Error: SUPABASE_SECRET_KEY environment variable is required");
  console.error("Usage: SUPABASE_SECRET_KEY=sb_secret_... npx tsx scripts/sync-lessons-to-supabase.ts");
  process.exit(1);
}

const headers = {
  apikey: SUPABASE_SECRET_KEY,
  Authorization: `Bearer ${SUPABASE_SECRET_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

async function supabaseGet(table: string, params = "") {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params}`, { headers });
  if (!res.ok) throw new Error(`GET ${table}: ${res.status} ${await res.text()}`);
  return res.json();
}

async function supabasePost(table: string, rows: any[]) {
  // Batch in chunks of 50 to avoid payload limits
  const chunkSize = 50;
  const results: any[] = [];
  for (let i = 0; i < rows.length; i += chunkSize) {
    const chunk = rows.slice(i, i + chunkSize);
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: "POST",
      headers: { ...headers, Prefer: "return=minimal" },
      body: JSON.stringify(chunk),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`POST ${table} (chunk ${i / chunkSize}): ${res.status} ${text}`);
    }
    results.push(`Inserted ${chunk.length} rows into ${table}`);
  }
  return results;
}

async function supabaseDelete(table: string, filter: string) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${filter}`, {
    method: "DELETE",
    headers,
  });
  if (!res.ok) throw new Error(`DELETE ${table}: ${res.status} ${await res.text()}`);
}

// Import all course files
import foundationsCourse from "../src/data/courses/foundationsCourse";
import calculationsCourse from "../src/data/courses/calculationsCourse";
import anatomyCourse from "../src/data/courses/anatomyCourse";
import dispensingCourse from "../src/data/courses/dispensingCourse";
import pharmacologyCourse from "../src/data/courses/pharmacologyCourse";
import regulationsCourse from "../src/data/courses/regulationsCourse";
import patientCareCourse from "../src/data/courses/patientCareCourse";
import compoundingCourse from "../src/data/courses/compoundingCourse";
import customerServiceCourse from "../src/data/courses/customerServiceCourse";
import qualitySafetyCourse from "../src/data/courses/qualitySafetyCourse";
import aiPharmacyCourse from "../src/data/courses/aiPharmacyCourse";
import managementCourse from "../src/data/courses/managementCourse";
import caribbeanIslandCourse from "../src/data/courses/caribbeanIslandCourse";

const allCourses = [
  foundationsCourse,
  calculationsCourse,
  anatomyCourse,
  dispensingCourse,
  pharmacologyCourse,
  regulationsCourse,
  patientCareCourse,
  compoundingCourse,
  customerServiceCourse,
  qualitySafetyCourse,
  aiPharmacyCourse,
  managementCourse,
  caribbeanIslandCourse,
];

async function main() {
  console.log("=== PIXOPHARM Lesson & Quiz Sync ===\n");

  // 1. Fetch existing courses from Supabase to get UUIDs
  console.log("Fetching courses from Supabase...");
  const courses: any[] = await supabaseGet("courses", "select=id,slug&order=order");
  console.log(`Found ${courses.length} courses`);

  // Build slug -> UUID map
  const courseSlugToId = new Map<string, string>();
  for (const c of courses) {
    courseSlugToId.set(c.slug, c.id);
  }

  // 2. Fetch existing modules from Supabase
  console.log("Fetching modules from Supabase...");
  const modules: any[] = await supabaseGet("modules", "select=id,course_id,order_index,title&order=course_id,order_index");
  console.log(`Found ${modules.length} modules`);

  // Build lookup: courseUUID + orderIndex -> moduleUUID
  const moduleMap = new Map<string, string>();
  for (const m of modules) {
    moduleMap.set(`${m.course_id}:${m.order_index}`, m.id);
  }

  // 3. Clear existing lessons and quiz_questions
  console.log("\nClearing existing lessons and quiz_questions...");
  try {
    // Delete all quiz_questions first (child table)
    await supabaseDelete("quiz_questions", "id=neq.00000000-0000-0000-0000-000000000000");
    console.log("  Cleared quiz_questions");
  } catch (e: any) {
    console.log("  quiz_questions clear:", e.message);
  }
  try {
    await supabaseDelete("lessons", "id=neq.00000000-0000-0000-0000-000000000000");
    console.log("  Cleared lessons");
  } catch (e: any) {
    console.log("  lessons clear:", e.message);
  }

  // 4. Build lesson and quiz rows
  let totalLessons = 0;
  let totalQuizQuestions = 0;
  const allLessonRows: any[] = [];
  const allQuizRows: any[] = [];

  for (const course of allCourses) {
    const courseUUID = courseSlugToId.get(course.courseId);
    if (!courseUUID) {
      console.error(`  SKIP: No Supabase course found for slug "${course.courseId}"`);
      continue;
    }

    console.log(`\nProcessing: ${course.title}`);

    for (const mod of course.modules) {
      // Both mod.number and Supabase order_index are 1-based
      const moduleUUID = moduleMap.get(`${courseUUID}:${mod.number}`);
      if (!moduleUUID) {
        console.error(`  SKIP: No module UUID for ${course.courseId} module ${mod.number} (order_index=${mod.number})`);
        continue;
      }

      // Lessons
      for (let i = 0; i < mod.lessons.length; i++) {
        const lesson = mod.lessons[i];
        // Estimate duration from content blocks (rough: 1 min per 2 blocks)
        const durationMinutes = Math.max(5, Math.round(lesson.content.length / 2) * 5);

        allLessonRows.push({
          module_id: moduleUUID,
          title: lesson.title,
          content: lesson.content, // JSONB — PostgREST handles serialization
          order_index: i,
          duration_minutes: durationMinutes,
        });
        totalLessons++;
      }

      // Quiz questions
      if (mod.quiz) {
        for (let i = 0; i < mod.quiz.length; i++) {
          const q = mod.quiz[i];

          // Map question type
          let questionType = "multiple_choice";
          if (q.type === "multiple-select") questionType = "multiple_select";
          else if (q.type === "ordering") questionType = "ordering";
          else if (q.type === "matching") questionType = "matching";
          else if (q.type === "fill-in-blank") questionType = "fill_in_blank";
          else if (q.type === "true-false") questionType = "true_false";
          else if (q.type === "scenario") questionType = "scenario";

          // Build question_data for non-standard types
          let questionData: any = null;
          if (q.type === "multiple-select" && q.correctIndices) {
            questionData = { correct_indices: q.correctIndices };
          } else if (q.type === "ordering" && q.correctOrder) {
            questionData = { correct_order: q.correctOrder };
          } else if (q.type === "matching" && q.pairs) {
            questionData = { pairs: q.pairs };
          } else if (q.type === "fill-in-blank" && q.acceptableAnswers) {
            questionData = {
              acceptable_answers: q.acceptableAnswers,
              case_sensitive: q.caseSensitive ?? false,
            };
          } else if (q.type === "true-false") {
            questionData = { correct_answer: q.correctAnswer };
          } else if (q.type === "scenario" && q.context) {
            questionData = { context: q.context };
          }

          allQuizRows.push({
            module_id: moduleUUID,
            question: q.question,
            options: q.options ?? [],
            correct_answer: q.correctIndex ?? 0,
            explanation: q.explanation ?? "",
            order_index: i,
            question_type: questionType,
            question_data: questionData ?? null, // JSONB — PostgREST handles serialization
            difficulty: q.difficulty ?? "medium",
            blooms_level: q.bloomsLevel ?? "remember",
          });
          totalQuizQuestions++;
        }
      }

      console.log(`  Module ${mod.number}: ${mod.lessons.length} lessons, ${mod.quiz?.length ?? 0} quiz questions`);
    }
  }

  console.log(`\n=== Totals: ${totalLessons} lessons, ${totalQuizQuestions} quiz questions ===\n`);

  // 5. Insert lessons
  console.log(`Inserting ${totalLessons} lessons...`);
  try {
    const results = await supabasePost("lessons", allLessonRows);
    results.forEach((r) => console.log(`  ${r}`));
    console.log("  Lessons inserted successfully!");
  } catch (e: any) {
    console.error("  LESSON INSERT ERROR:", e.message);
  }

  // 6. Insert quiz questions
  console.log(`\nInserting ${totalQuizQuestions} quiz questions...`);
  try {
    const results = await supabasePost("quiz_questions", allQuizRows);
    results.forEach((r) => console.log(`  ${r}`));
    console.log("  Quiz questions inserted successfully!");
  } catch (e: any) {
    console.error("  QUIZ INSERT ERROR:", e.message);
  }

  // 7. Verify
  console.log("\n=== Verification ===");
  const lessonCount: any[] = await supabaseGet("lessons", "select=id&limit=1&order=id&offset=0");
  const quizCount: any[] = await supabaseGet("quiz_questions", "select=id&limit=1&order=id&offset=0");

  // Get actual counts
  const lessonsAll: any[] = await supabaseGet("lessons", "select=id");
  const quizAll: any[] = await supabaseGet("quiz_questions", "select=id");
  console.log(`Lessons in Supabase: ${lessonsAll.length}`);
  console.log(`Quiz questions in Supabase: ${quizAll.length}`);

  console.log("\n=== SYNC COMPLETE ===");
}

main().catch(console.error);
