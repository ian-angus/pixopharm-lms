import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders() });
  }

  if (!ANTHROPIC_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    const missing = [
      !ANTHROPIC_API_KEY && "ANTHROPIC_API_KEY",
      !SUPABASE_URL && "SUPABASE_URL",
      !SUPABASE_SERVICE_KEY && "SUPABASE_SERVICE_ROLE_KEY",
    ].filter(Boolean).join(", ");
    return json({ error: `Missing env vars: ${missing}` }, 500);
  }

  try {
    const body = await req.json();
    const { title, skill_level, duration_weeks, jurisdiction, focus_areas, created_by } = body;

    if (!title || !skill_level || !duration_weeks) {
      return json({ error: "title, skill_level, and duration_weeks are required" }, 400);
    }

    // Determine module count from duration (cap at 6 to stay within token limits)
    const moduleCount = Math.min(Math.max(Math.round(Number(duration_weeks)), 2), 6);
    const lessonsPerModule = duration_weeks >= 5 ? 2 : 3;

    const jurisdictionText = jurisdiction && jurisdiction !== "All CARICOM"
      ? `Target jurisdiction: ${jurisdiction}.`
      : "Applicable across CARICOM (Trinidad, Jamaica, Barbados, Guyana, and other Caribbean nations).";

    const focusText = focus_areas ? `Additional focus: ${focus_areas}.` : "";

    const prompt = `You are a Caribbean pharmacy training curriculum designer for Pixopharm LMS.

Generate a complete pharmacy technician course for the Caribbean region.

Course specs:
- Title: "${title}"
- Skill level: ${skill_level}
- Duration: ${duration_weeks} weeks
- ${jurisdictionText}
- ${focusText}
- Number of modules: ${moduleCount}
- Lessons per module: ${lessonsPerModule}

Requirements:
- All content must be relevant to Caribbean pharmacy practice, regulations, and context
- Content should be practical and scenario-based
- Quiz questions must be multiple-choice with 4 options, realistic distractors, and a clear correct answer
- Lesson content uses 2 content blocks: a heading and a substantive text paragraph (3-4 sentences with Caribbean context)
- Keep text concise but informative

Respond ONLY with valid JSON, no markdown fences. Use this exact structure:
{
  "slug": "url-friendly-slug",
  "description": "2-3 sentence course overview",
  "icon": "one of: GraduationCap|BookOpen|Pill|Stethoscope|FlaskConical|Shield|BarChart3|Users|ClipboardList|Award",
  "color": "one of: blue|green|purple|amber|red|teal|orange|slate|violet|rose",
  "what_youll_learn": ["outcome 1", "outcome 2", "outcome 3", "outcome 4", "outcome 5"],
  "modules": [
    {
      "title": "Module title",
      "description": "One sentence description",
      "lessons": [
        {
          "title": "Lesson title",
          "duration_minutes": 20,
          "content": [
            {"type": "heading", "text": "Section heading", "level": 2},
            {"type": "text", "body": "3-4 sentence paragraph with Caribbean-specific content."}
          ]
        }
      ],
      "quiz_questions": [
        {
          "question": "Question text?",
          "options": ["Option A", "Option B", "Option C", "Option D"],
          "correct_answer": 0,
          "explanation": "Why the correct answer is right."
        }
      ]
    }
  ]
}`;

    // Call Claude
    const anthropicResp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-3-haiku-20240307",
        max_tokens: 4096,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!anthropicResp.ok) {
      const errText = await anthropicResp.text();
      throw new Error(`Claude API error (${anthropicResp.status}): ${errText}`);
    }

    const aiData = await anthropicResp.json();
    const rawText: string = aiData.content?.[0]?.text ?? "{}";

    // Strip markdown fences if present
    const cleaned = rawText
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```\s*$/i, "")
      .trim();

    let courseData: CourseData;
    try {
      courseData = JSON.parse(cleaned);
    } catch (e) {
      throw new Error(`Claude returned invalid JSON: ${cleaned.slice(0, 200)}`);
    }

    // Validate minimum structure
    if (!courseData.modules || !Array.isArray(courseData.modules)) {
      throw new Error("Claude response missing modules array");
    }

    // Save to Supabase
    const sb = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

    // Ensure slug is unique by appending timestamp if needed
    const baseSlug = (courseData.slug ?? slugify(title)).toLowerCase().replace(/[^a-z0-9-]/g, "-");
    const slug = `${baseSlug}-${Date.now().toString(36)}`;

    // Insert course (draft status)
    const { data: course, error: courseErr } = await sb
      .from("courses")
      .insert({
        title,
        slug,
        description: courseData.description ?? "",
        skill_level,
        duration_weeks: Number(duration_weeks),
        icon: courseData.icon ?? "GraduationCap",
        color: courseData.color ?? "blue",
        what_youll_learn: Array.isArray(courseData.what_youll_learn) ? courseData.what_youll_learn : [],
        prerequisites: [],
        status: "draft",
        order: 999,
        ...(created_by ? { created_by } : {}),
      })
      .select("id, slug")
      .single();

    if (courseErr) throw new Error(`Insert course failed: ${courseErr.message}`);

    const courseId = course.id;
    let totalLessons = 0;
    let totalQuestions = 0;

    // Insert modules + lessons + quiz questions
    for (let mi = 0; mi < courseData.modules.length; mi++) {
      const mod = courseData.modules[mi];

      const { data: moduleRow, error: modErr } = await sb
        .from("modules")
        .insert({
          course_id: courseId,
          title: mod.title ?? `Module ${mi + 1}`,
          description: mod.description ?? "",
          order_index: mi,
        })
        .select("id")
        .single();

      if (modErr) throw new Error(`Insert module failed: ${modErr.message}`);

      const moduleId = moduleRow.id;

      // Insert lessons
      const lessons = Array.isArray(mod.lessons) ? mod.lessons : [];
      for (let li = 0; li < lessons.length; li++) {
        const lesson = lessons[li];
        const content = Array.isArray(lesson.content) ? lesson.content : [
          { type: "text", body: "Content coming soon." }
        ];

        const { error: lessonErr } = await sb.from("lessons").insert({
          module_id: moduleId,
          title: lesson.title ?? `Lesson ${li + 1}`,
          content,
          order_index: li,
          duration_minutes: lesson.duration_minutes ?? 20,
        });

        if (lessonErr) throw new Error(`Insert lesson failed: ${lessonErr.message}`);
        totalLessons++;
      }

      // Insert quiz questions
      const questions = Array.isArray(mod.quiz_questions) ? mod.quiz_questions : [];
      for (let qi = 0; qi < questions.length; qi++) {
        const q = questions[qi];
        const { error: qErr } = await sb.from("quiz_questions").insert({
          module_id: moduleId,
          question: q.question ?? "Question text",
          options: Array.isArray(q.options) ? q.options : ["A", "B", "C", "D"],
          correct_answer: typeof q.correct_answer === "number" ? q.correct_answer : 0,
          explanation: q.explanation ?? "",
          order_index: qi,
          question_type: "multiple_choice",
          difficulty: "medium",
          blooms_level: "remember",
        });

        if (qErr) throw new Error(`Insert quiz question failed: ${qErr.message}`);
        totalQuestions++;
      }
    }

    return json({
      course_id: courseId,
      course_slug: slug,
      modules_count: courseData.modules.length,
      lessons_count: totalLessons,
      questions_count: totalQuestions,
    });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("generate-course error:", msg);
    return json({ error: msg }, 500);
  }
});

// ── Types ──────────────────────────────────────────────────────────────────────

interface ContentBlock {
  type: string;
  text?: string;
  body?: string;
  level?: number;
  [key: string]: unknown;
}

interface GeneratedLesson {
  title: string;
  duration_minutes: number;
  content: ContentBlock[];
}

interface GeneratedQuestion {
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string;
}

interface GeneratedModule {
  title: string;
  description: string;
  lessons: GeneratedLesson[];
  quiz_questions: GeneratedQuestion[];
}

interface CourseData {
  slug: string;
  description: string;
  icon: string;
  color: string;
  what_youll_learn: string[];
  modules: GeneratedModule[];
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 60);
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(), "Content-Type": "application/json" },
  });
}
