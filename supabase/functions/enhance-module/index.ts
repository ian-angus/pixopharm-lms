import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

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

const OPUS_MODEL = "claude-opus-4-6";
const CALL_TIMEOUT_MS = 300_000;

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders() });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  if (!ANTHROPIC_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    return json({ error: "Missing env vars" }, 500);
  }

  // Validate caller is an authenticated admin
  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) return json({ error: "Unauthorized" }, 401);
  const token = authHeader.slice(7);

  const sb = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
  const { data: { user }, error: userErr } = await sb.auth.getUser(token);
  if (userErr || !user) return json({ error: "Unauthorized" }, 401);
  const { data: callerProfile } = await sb.from("profiles").select("role").eq("id", user.id).single();
  if (callerProfile?.role !== "admin") return json({ error: "Forbidden" }, 403);

  try {
    const { module_id } = await req.json();
    if (!module_id) return json({ error: "module_id is required" }, 400);

    // ── Fetch module + course context from DB ─────────────────────────────────
    const { data: mod, error: modErr } = await sb
      .from("modules")
      .select("id, title, description, order_index, course_id, courses(title, skill_level, duration_weeks, description)")
      .eq("id", module_id)
      .single();

    if (modErr || !mod) return json({ error: `Module not found: ${modErr?.message}` }, 404);

    const course = mod.courses as { title: string; skill_level: string; duration_weeks: number; description: string };

    const { data: lessons, error: lessonErr } = await sb
      .from("lessons")
      .select("id, title, order_index, duration_minutes")
      .eq("module_id", module_id)
      .order("order_index");

    if (lessonErr || !lessons?.length) return json({ error: "No lessons found for module" }, 404);

    const moduleCount = course.duration_weeks ? Math.min(Math.max(Math.round(Number(course.duration_weeks)), 2), 5) : 4;
    const lessonList = lessons
      .map((l, i) => `  Lesson ${i + 1}: "${l.title}" — target ${l.duration_minutes ?? 25} min`)
      .join("\n");

    // ── Call Opus with full quality prompt ────────────────────────────────────
    const prompt = `${CARIBBEAN_CONTEXT}

You are writing MODULE ${mod.order_index ?? 1} of ${moduleCount} for the PixoPharm course: "${course.title}" (${course.skill_level} level).

MODULE: "${mod.title}"
${mod.description ? `Description: ${mod.description}` : ""}
Applies across ALL CARICOM nations — use specific island comparisons (T&T, Jamaica, Barbados, Guyana, Belize, St. Lucia) throughout.

LESSONS IN THIS MODULE:
${lessonList}

TASK — for EACH lesson write rich content (5–7 blocks), then 3 quiz questions for the module.

LESSON CONTENT BLOCKS — use ALL these block types across the lessons:
  {"type":"heading","text":"...","level":2}  — main section heading (required, 1 per lesson)
  {"type":"heading","text":"...","level":3}  — subsection heading
  {"type":"text","body":"3–5 sentence paragraph. Must be clinically accurate, Caribbean-specific, naming real drugs, regulations, and islands."}
  {"type":"callout","title":"...","body":"2–4 sentences","variant":"info"}  — island comparisons, regional clinical facts, regulatory differences
  {"type":"callout","title":"...","body":"...","variant":"warning"}  — patient safety alerts, dispensing errors, compliance warnings
  {"type":"key-term","term":"...","definition":"Precise 1–2 sentence definition with Caribbean clinical context and an example."}
  {"type":"video-placeholder","title":"...","duration":"X min","description":"Specific Caribbean pharmacy scenario this video demonstrates."}

QUIZ QUESTIONS — exactly 3 questions for this module:
  - Scenario-based: "A technician at a pharmacy in [specific Caribbean location]..."
  - 4 answer options each; realistic distractors based on common errors
  - correct_answer: 0-based index of the correct option
  - explanation: 2–3 sentences citing specific Caribbean regulation or clinical evidence

Return ONLY valid JSON:
{
  "lessons": [
    {
      "title": "exact title matching the lesson list above",
      "duration_minutes": 25,
      "content": [ ...5-7 blocks... ]
    }
  ],
  "quiz_questions": [
    {
      "question": "Scenario-based question?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct_answer": 0,
      "explanation": "Detailed explanation with Caribbean context.",
      "difficulty": "medium",
      "blooms_level": "apply"
    }
  ]
}`;

    const { result, modelUsed } = await callOpus(prompt, 5500);

    const generatedLessons = Array.isArray(result.lessons) ? result.lessons : [];
    const generatedQuestions = Array.isArray(result.quiz_questions) ? result.quiz_questions : [];

    // ── Update lessons in place ───────────────────────────────────────────────
    let lessonsUpdated = 0;
    for (let i = 0; i < lessons.length; i++) {
      const generated = generatedLessons.find(
        (l: { title: string }) => l.title?.toLowerCase().trim() === lessons[i].title?.toLowerCase().trim()
      ) ?? generatedLessons[i];

      if (!generated?.content?.length) continue;

      const { error: updateErr } = await sb
        .from("lessons")
        .update({
          content: Array.isArray(generated.content) ? generated.content : [],
          duration_minutes: generated.duration_minutes ?? lessons[i].duration_minutes ?? 25,
        })
        .eq("id", lessons[i].id);

      if (!updateErr) lessonsUpdated++;
    }

    // ── Replace quiz questions ────────────────────────────────────────────────
    await sb.from("quiz_questions").delete().eq("module_id", module_id);

    let questionsInserted = 0;
    for (let qi = 0; qi < generatedQuestions.length; qi++) {
      const q = generatedQuestions[qi];
      const options = Array.isArray(q.options) && q.options.length === 4 ? q.options : ["A", "B", "C", "D"];
      const correctAnswer = Number.isInteger(q.correct_answer) && q.correct_answer >= 0 && q.correct_answer <= 3
        ? q.correct_answer : 0;
      const { error: qErr } = await sb.from("quiz_questions").insert({
        module_id,
        question: q.question,
        options,
        correct_answer: correctAnswer,
        explanation: q.explanation ?? "",
        order_index: qi + 1,
        question_type: "multiple_choice",
        difficulty: q.difficulty ?? "medium",
        blooms_level: q.blooms_level ?? "apply",
      });
      if (!qErr) questionsInserted++;
    }

    return json({ lessons_updated: lessonsUpdated, questions_count: questionsInserted, model_used: modelUsed });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("enhance-module error:", msg);
    return json({ error: msg }, 500);
  }
});

async function callOpus(
  prompt: string,
  maxTokens: number,
): Promise<{ result: Record<string, unknown>; modelUsed: string }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), CALL_TIMEOUT_MS);

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
        model: OPUS_MODEL,
        max_tokens: maxTokens,
        messages: [{ role: "user", content: prompt }],
      }),
      signal: controller.signal,
    });
  } catch (fetchErr) {
    clearTimeout(timer);
    throw new Error(`Opus fetch error: ${fetchErr instanceof Error ? fetchErr.message : String(fetchErr)}`);
  }
  clearTimeout(timer);

  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error(`Opus API error (${resp.status}): ${errText.slice(0, 300)}`);
  }

  const aiData = await resp.json();
  const rawText: string = aiData.content?.[0]?.text ?? "{}";

  const cleaned = rawText
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();

  for (const attempt of [cleaned, cleaned.match(/\{[\s\S]*\}/)?.[0] ?? ""]) {
    if (!attempt) continue;
    try {
      return { result: JSON.parse(attempt), modelUsed: OPUS_MODEL };
    } catch {
      continue;
    }
  }

  throw new Error(`Opus response unparseable: ${cleaned.slice(0, 200)}`);
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
