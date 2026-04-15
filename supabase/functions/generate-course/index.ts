import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

// Caribbean pharmacy knowledge injected into every call
const CARIBBEAN_CONTEXT = `
PLATFORM: PixoPharm LMS — Caribbean pharmacy technician diploma, CARICOM-aligned.

MANDATORY KNOWLEDGE BASE — draw from this in ALL content:
DRUG SCHEDULING (no unified Caribbean system — each island independent):
  - Jamaica: Dangerous Drugs Act Schedules 1–4; Pharmacy Act 1966; Pharmacy Council
  - Trinidad & Tobago: Pharmacy Board of T&T; Dangerous Drugs Ordinance; local formulary
  - Barbados: Pharmacy Act Cap 372D; Barbados Drug Service (BDS) national formulary
  - Guyana: Food & Drugs Act; Georgetown Public Hospital Corporation formulary
  - Belize: Pharmacy Act; Ministry of Health formulary
  - Smaller islands (St. Lucia, Grenada, SVG, Antigua, Dominica): own national Pharmacy Acts
  - Regional: CARICOM Regional Standard (CRS); Caribbean Pharmacopoeia; CARPHA

DISEASE BURDEN: Dengue fever, malaria (endemic Guyana/Belize), leptospirosis, chikungunya,
  Zika virus, HIV (high regional prevalence), sickle cell disease, hypertension (among highest
  rates globally in Jamaica and T&T), type 2 diabetes, asthma, tuberculosis

SUPPLY CHAIN CHALLENGES: Tropical heat (25–35°C year-round), frequent power outages,
  inter-island shipping delays, port customs, small island stock-out risks; FEFO/FIFO essential

TRADITIONAL MEDICINE: Cerasee (Momordica charantia), soursop leaf, fever grass (lemongrass),
  neem, aloe vera, bush tea — widely used, rarely disclosed to healthcare providers;
  significant drug interaction risk (e.g., cerasee + metformin, soursop + CNS drugs)

LANGUAGE: Predominantly English, but Creole, French, Dutch, Spanish present regionally

KEY INSTITUTIONS: CARPHA, PAHO Caribbean office, UWI Faculty of Medical Sciences
  (Cave Hill Barbados, St. Augustine Trinidad), CARIPHA, national pharmacy boards

CLINICAL REALITY: Pharmacy technicians are often first healthcare contact; extremely high
  patient-to-staff ratios; strong role in chronic disease management (HTN, DM, asthma, HIV)
`;

// ── Model config ─────────────────────────────────────────────────────────────
// Phase 1 (outline): Haiku — fast and sufficient; Opus fallback if Haiku overloaded
// Phase 2 (content): Haiku only — reliable within 150s; use enhance-module for Opus upgrade
// enhance-module Edge Function handles per-module Opus calls on demand
const PHASE1_MODELS = ["claude-3-haiku-20240307", "claude-opus-4-6"];
const PHASE2_MODELS = ["claude-3-haiku-20240307"];
const MODEL_MAX_TOKENS: Record<string, number> = {
  "claude-opus-4-6": 8192,
  "claude-3-haiku-20240307": 4096,
};
const CALL_TIMEOUT_MS = 120_000; // 120s per call — Haiku completes in ~15-20s

// ── Main handler ─────────────────────────────────────────────────────────────
Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders() });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  if (!ANTHROPIC_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    const missing = [
      !ANTHROPIC_API_KEY && "ANTHROPIC_API_KEY",
      !SUPABASE_URL && "SUPABASE_URL",
      !SUPABASE_SERVICE_KEY && "SUPABASE_SERVICE_ROLE_KEY",
    ].filter(Boolean).join(", ");
    return json({ error: `Missing env vars: ${missing}` }, 500);
  }

  const sb = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

  try {
    const body = await req.json();
    const { title, skill_level, duration_weeks, jurisdiction, focus_areas, created_by, job_id } = body;

    if (!title || !skill_level || !duration_weeks) {
      return json({ error: "title, skill_level, and duration_weeks are required" }, 400);
    }
    const durationNum = Number(duration_weeks);
    if (!Number.isInteger(durationNum) || durationNum < 1 || durationNum > 26) {
      return json({ error: "duration_weeks must be an integer between 1 and 26" }, 400);
    }

    // ── Idempotency: if this job_id already completed, return existing course ──
    if (job_id) {
      const { data: existing } = await sb
        .from("courses")
        .select("id, slug, status, ai_error")
        .eq("ai_job_id", job_id)
        .maybeSingle();

      if (existing) {
        if (existing.status === "draft" || existing.status === "published") {
          // Already completed — return it
          const { count: mc } = await sb.from("modules").select("id", { count: "exact", head: true }).eq("course_id", existing.id);
          const moduleIds = (await sb.from("modules").select("id").eq("course_id", existing.id)).data?.map(m => m.id) ?? [];
          const { count: lc } = await sb.from("lessons").select("id", { count: "exact", head: true }).in("module_id", moduleIds);
          const { count: qc } = await sb.from("quiz_questions").select("id", { count: "exact", head: true }).in("module_id", moduleIds);
          return json({ course_id: existing.id, course_slug: existing.slug, modules_count: mc ?? 0, lessons_count: lc ?? 0, questions_count: qc ?? 0, model_used: "cached", already_existed: true });
        }
        if (existing.status === "generating") {
          return json({ error: "Course generation already in progress for this job_id. Check your Courses list." }, 409);
        }
        // "failed" — fall through and retry
        await sb.from("courses").delete().eq("id", existing.id);
      }
    }

    const moduleCount = Math.min(Math.max(Math.round(durationNum), 2), 5);
    const lessonsPerModule = durationNum >= 5 ? 2 : 3;
    const jurisdictionText = jurisdiction && jurisdiction !== "All CARICOM"
      ? `PRIMARY jurisdiction: ${jurisdiction}. Reference other CARICOM islands for regulatory comparison.`
      : "Applies across ALL CARICOM nations — use specific island comparisons (T&T, Jamaica, Barbados, Guyana, Belize, St. Lucia) throughout.";
    const focusText = focus_areas ? `\nINSTRUCTOR FOCUS AREAS: ${focus_areas}` : "";

    // ── DB-FIRST: Insert course placeholder before calling Claude ─────────────
    // This means a connection drop cannot silently lose the course.
    // The course will be in the Courses list as "generating" or "failed".
    const initialSlug = `${slugify(title)}-${Date.now().toString(36)}`;

    const { data: course, error: courseErr } = await sb.from("courses").insert({
      title,
      slug: initialSlug,
      description: "",
      skill_level,
      duration_weeks: durationNum,
      icon: "GraduationCap",
      color: "blue",
      what_youll_learn: [],
      prerequisites: [],
      status: "generating",
      order: 999,
      ...(created_by ? { created_by } : {}),
      ...(job_id ? { ai_job_id: job_id } : {}),
    }).select("id, slug").single();

    if (courseErr) throw new Error(`Insert course placeholder: ${courseErr.message}`);

    // Wrap everything from here in a try/catch that marks course as "failed" on error
    try {
      // ── PHASE 1: Lean outline — structure only ──────────────────────────────
      const outlinePrompt = `${CARIBBEAN_CONTEXT}

You are the curriculum director for PixoPharm LMS, the Caribbean's leading pharmacy technician training platform.

Generate a course STRUCTURE OUTLINE (no lesson content yet — only titles and metadata).

COURSE SPECS:
- Title: "${title}"
- Level: ${skill_level}
- Duration: ${duration_weeks} weeks
- ${jurisdictionText}${focusText}
- Modules: EXACTLY ${moduleCount}
- Lessons per module: EXACTLY ${lessonsPerModule}

Return ONLY valid JSON — be CONCISE, no verbose descriptions:
{
  "description": "3 sentence overview mentioning specific Caribbean islands and clinical context",
  "icon": "GraduationCap",
  "color": "blue",
  "what_youll_learn": ["5 specific measurable outcomes starting with action verbs"],
  "modules": [
    {
      "title": "Module title",
      "description": "One sentence.",
      "learning_objectives": ["Objective 1", "Objective 2", "Objective 3"],
      "lessons": [
        {"title": "Lesson title", "duration_minutes": 25}
      ]
    }
  ]
}

ICON options: GraduationCap|BookOpen|Pill|Stethoscope|FlaskConical|Shield|BarChart3|Users|ClipboardList|Award
COLOR options: blue|green|purple|amber|red|teal|orange|slate|violet|rose`;

      const { result: outline } = await callClaude(outlinePrompt, 1500, PHASE1_MODELS);
      if (!Array.isArray(outline.modules) || outline.modules.length === 0) {
        throw new Error("Phase 1: outline missing modules array");
      }

      // Update course with Phase 1 metadata
      const { error: metaErr } = await sb.from("courses").update({
        description: (outline.description as string) ?? "",
        icon: (outline.icon as string) ?? "GraduationCap",
        color: (outline.color as string) ?? "blue",
        what_youll_learn: Array.isArray(outline.what_youll_learn) ? outline.what_youll_learn : [],
      }).eq("id", course.id);
      if (metaErr) console.warn(`Phase 1 metadata update failed: ${metaErr.message}`);

      // ── PHASE 2: Parallel module content generation ─────────────────────────
      // All modules generated concurrently — much faster than sequential.
      // If one module fails, the others still succeed (Promise.allSettled).
      const modulePromises = (outline.modules as ModuleOutline[]).map((mod, mi) => {
        const lessonList = (mod.lessons ?? [])
          .map((l, i) => `  Lesson ${i + 1}: "${l.title}" — target ${l.duration_minutes} min`)
          .join("\n");

        const modulePrompt = `${CARIBBEAN_CONTEXT}

You are writing MODULE ${mi + 1} of ${moduleCount} for the PixoPharm course: "${title}" (${skill_level} level).

MODULE: "${mod.title}"
Learning objectives: ${(mod.learning_objectives ?? []).join("; ")}
${jurisdictionText}${focusText}

LESSONS IN THIS MODULE:
${lessonList}

TASK — for EACH lesson write 4-5 content blocks, then 2 quiz questions for the module.

CONTENT BLOCKS (use these types):
  {"type":"heading","text":"...","level":2}
  {"type":"text","body":"2-4 sentences, Caribbean-specific, real drugs and islands."}
  {"type":"callout","title":"...","body":"1-3 sentences","variant":"info"}
  {"type":"callout","title":"...","body":"...","variant":"warning"}
  {"type":"key-term","term":"...","definition":"1-2 sentences with Caribbean context."}

QUIZ — exactly 2 scenario-based questions, 4 options each, correct_answer 0-based index.

Return ONLY valid JSON:
{
  "lessons": [{"title":"exact title","duration_minutes":25,"content":[...4-5 blocks...]}],
  "quiz_questions": [{"question":"...","options":["A","B","C","D"],"correct_answer":0,"explanation":"...","difficulty":"medium","blooms_level":"apply"}]
}`;

        return callClaude(modulePrompt, 3500, PHASE2_MODELS).then(({ result, modelUsed: mu }) => ({ result, mod, modelUsed: mu }));
      });

      const moduleResults = await Promise.allSettled(modulePromises);

      // ── Save modules, lessons, and questions ──────────────────────────────
      let totalLessons = 0;
      let totalQuestions = 0;
      let phase2ModelUsed = "unknown";

      for (let mi = 0; mi < moduleResults.length; mi++) {
        const modResult = moduleResults[mi];
        const mod = (outline.modules as ModuleOutline[])[mi];

        let lessons: GeneratedLesson[] = [];
        let questions: GeneratedQuestion[] = [];

        if (modResult.status === "fulfilled") {
          const { result: moduleData, modelUsed: mu } = modResult.value;
          if (phase2ModelUsed === "unknown") phase2ModelUsed = mu;
          lessons = Array.isArray(moduleData.lessons) ? moduleData.lessons as GeneratedLesson[] : [];
          questions = Array.isArray(moduleData.quiz_questions) ? moduleData.quiz_questions as GeneratedQuestion[] : [];
        } else {
          console.warn(`Module ${mi + 1} generation failed: ${modResult.reason}`);
        }

        // Fallback: if lessons came back empty, use placeholder
        if (lessons.length === 0) {
          lessons = (mod.lessons ?? []).map((l) => ({
            title: l.title,
            duration_minutes: l.duration_minutes ?? 25,
            content: [
              { type: "heading", text: l.title, level: 2 },
              { type: "text", body: "Content is being reviewed by the PixoPharm curriculum team." },
            ],
          }));
        }

        const { data: moduleRow, error: modErr } = await sb.from("modules").insert({
          course_id: course.id,
          title: mod.title,
          description: mod.description ?? "",
          order_index: mi + 1,
        }).select("id").single();
        if (modErr) throw new Error(`Insert module ${mi + 1}: ${modErr.message}`);

        for (let li = 0; li < lessons.length; li++) {
          const lesson = lessons[li];
          const { error: lessonErr } = await sb.from("lessons").insert({
            module_id: moduleRow.id,
            title: lesson.title,
            content: Array.isArray(lesson.content) ? lesson.content : [],
            order_index: li + 1,
            duration_minutes: lesson.duration_minutes ?? 25,
          });
          if (lessonErr) throw new Error(`Insert lesson ${li + 1} in module ${mi + 1}: ${lessonErr.message}`);
          totalLessons++;
        }

        for (let qi = 0; qi < questions.length; qi++) {
          const q = questions[qi];
          const options = Array.isArray(q.options) && q.options.length === 4 ? q.options : ["A", "B", "C", "D"];
          const correctAnswer = Number.isInteger(q.correct_answer) && q.correct_answer >= 0 && q.correct_answer <= 3
            ? q.correct_answer : 0;
          const { error: qErr } = await sb.from("quiz_questions").insert({
            module_id: moduleRow.id,
            question: q.question,
            options,
            correct_answer: correctAnswer,
            explanation: q.explanation ?? "",
            order_index: qi + 1,
            question_type: "multiple_choice",
            difficulty: q.difficulty ?? "medium",
            blooms_level: q.blooms_level ?? "apply",
          });
          if (qErr) throw new Error(`Insert question ${qi + 1} in module ${mi + 1}: ${qErr.message}`);
          totalQuestions++;
        }
      }

      // ── Mark course as draft (generation complete) ────────────────────────
      const { error: draftErr } = await sb.from("courses").update({ status: "draft" }).eq("id", course.id);
      if (draftErr) throw new Error(`Failed to mark course as draft: ${draftErr.message}`);

      return json({
        course_id: course.id,
        course_slug: course.slug,
        modules_count: moduleResults.length,
        lessons_count: totalLessons,
        questions_count: totalQuestions,
        model_used: phase2ModelUsed,
      });

    } catch (innerErr) {
      // Generation or DB insert failed — mark course as failed so admin can see it
      const errMsg = innerErr instanceof Error ? innerErr.message : String(innerErr);
      console.error("generate-course inner error:", errMsg);
      await sb.from("courses").update({
        status: "failed",
        ai_error: errMsg.slice(0, 500),
      }).eq("id", course.id);
      throw innerErr; // re-throw so outer catch returns 500
    }

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("generate-course error:", msg);
    return json({ error: msg }, 500);
  }
});

// ── Claude caller with per-call timeout: Sonnet 3.5 → Opus 4.6 → Haiku ──────
async function callClaude(
  prompt: string,
  requestedTokens: number,
  models: string[] = PHASE2_MODELS,
): Promise<{ result: Record<string, unknown>; modelUsed: string }> {
  let lastError = "";

  for (const model of models) {
    // Cap to the model's maximum supported output tokens
    const modelCap = MODEL_MAX_TOKENS[model] ?? 4096;
    const maxTokens = Math.min(requestedTokens, modelCap);

    const controller = new AbortController();
    const timer = setTimeout(() => {
      console.warn(`${model}: ${CALL_TIMEOUT_MS}ms timeout — aborting`);
      controller.abort();
    }, CALL_TIMEOUT_MS);

    let resp: Response;
    try {
      resp = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model,
          max_tokens: maxTokens,
          messages: [{ role: "user", content: prompt }],
        }),
        signal: controller.signal,
      });
    } catch (fetchErr) {
      clearTimeout(timer);
      lastError = `${model}: ${fetchErr instanceof Error ? fetchErr.message : String(fetchErr)}`;
      console.warn(`${lastError} — trying fallback`);
      continue;
    }
    clearTimeout(timer);

    // Model unavailable, bad request, rate-limited, overloaded, or transient 5xx — try next model
    if (resp.status === 400 || resp.status === 404 || resp.status === 429 || resp.status === 529 || (resp.status >= 500 && resp.status < 600)) {
      const errText = await resp.text();
      lastError = `${model} (${resp.status}): ${errText.slice(0, 150)}`;
      console.warn(`Model ${model} skipped (${resp.status}), trying fallback.`);
      continue;
    }

    if (!resp.ok) {
      throw new Error(`AI API error (${model}, ${resp.status}): ${(await resp.text()).slice(0, 300)}`);
    }

    const aiData = await resp.json();
    const rawText: string = aiData.content?.[0]?.text ?? "{}";
    const stopReason: string = aiData.stop_reason ?? "";

    // Truncated output — this model didn't have enough tokens; fall back
    if (stopReason === "max_tokens") {
      lastError = `${model}: output truncated at ${maxTokens} tokens`;
      console.warn(`${lastError} — falling back`);
      continue;
    }

    // Strip markdown fences if model wrapped output
    const cleaned = rawText
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```\s*$/i, "")
      .trim();

    // Try full parse, then outermost {} extraction
    for (const attempt of [cleaned, cleaned.match(/\{[\s\S]*\}/)?.[0] ?? ""]) {
      if (!attempt) continue;
      try {
        return { result: JSON.parse(attempt), modelUsed: model };
      } catch {
        continue;
      }
    }

    // JSON unparseable — fall back rather than crash
    lastError = `${model}: unparseable JSON (${cleaned.length} chars): ${cleaned.slice(0, 200)}`;
    console.warn(`${lastError} — falling back`);
  }

  throw new Error(`All models failed. Last error: ${lastError}`);
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface ModuleOutline {
  title: string;
  description?: string;
  learning_objectives?: string[];
  lessons?: { title: string; duration_minutes: number }[];
}

interface GeneratedLesson {
  title: string;
  duration_minutes: number;
  content: Record<string, unknown>[];
}

interface GeneratedQuestion {
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string;
  difficulty?: string;
  blooms_level?: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 60);
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
