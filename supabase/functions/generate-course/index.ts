import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

// Quality standard — shown to Claude as a reference for lesson depth/format
const QUALITY_STANDARD = `
QUALITY STANDARD — every lesson must match this depth and Caribbean specificity:

EXAMPLE LESSON: "Common Medical Abbreviations Used in Caribbean Prescriptions"
[
  {"type":"heading","text":"Abbreviations Used in Caribbean Prescriptions","level":2},
  {"type":"text","body":"Medical abbreviations are shorthand used by prescribers to communicate instructions efficiently. As a pharmacy technician, you must know these instantly — misinterpreting an abbreviation can lead to a serious medication error. Prescribers trained in the UK use British-style abbreviations (BD, TDS, QDS) while US-trained prescribers use American style (BID, TID, QID) — you will encounter both within the same Caribbean facility, sometimes on the same day."},
  {"type":"callout","title":"British vs American Conventions Across the Caribbean","variant":"info","body":"In Trinidad & Tobago and Barbados, British-style abbreviations predominate due to colonial influence. In Jamaica, you encounter a mix depending on where the prescriber trained. In Guyana, both British and North American styles appear. When in doubt, read the full sig in context — never guess on dosing frequency."},
  {"type":"key-term","term":"Sig Code","definition":"From the Latin 'signa' (mark/write). The sig is the prescription directions section. Sig codes are abbreviated Latin-origin instructions telling the dispenser and patient how to administer a medication — e.g., 'BD AC' means twice daily before meals."},
  {"type":"callout","title":"ISMP Dangerous Abbreviations — Never Accept These","variant":"warning","body":"The Institute for Safe Medication Practices identifies these as high-error abbreviations: 'U' (mistaken for 0 — write 'units'), 'IU' (mistaken for IV — write 'international units'), 'QD' (confused with QID — write 'daily'), trailing zeros (write '1 mg' not '1.0 mg'). If a Caribbean prescriber uses these, query before dispensing."},
  {"type":"heading","text":"Regional and Multilingual Prescription Conventions","level":3},
  {"type":"text","body":"Caribbean pharmacies serve a multilingual patient and prescriber base. In French Creole-speaking territories (Martinique, Guadeloupe, Haiti), French abbreviations appear: 'cp' for comprimé (tablet), 'ml/j' for millilitres per day. In Suriname, Dutch conventions apply. St. Maarten/Sint Maarten prescriptions may appear in either French, Dutch, or English depending on which side of the island the prescriber practises. Technicians working in border communities or multi-island pharmacy chains must recognise all conventions."},
  {"type":"video-placeholder","title":"Decoding Five Real Caribbean Prescriptions","duration":"14 min","description":"A senior pharmacy technician at Port of Spain General Hospital walks through five authentic Caribbean prescriptions — including one with dangerous abbreviations and one mixing British and American conventions — demonstrating the exact query process used when clarification is needed."}
]
END EXAMPLE. All lessons must be at least this detailed, this Caribbean-specific, and this clinically accurate.
`;

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

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders() });

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

    const moduleCount = Math.min(Math.max(Math.round(Number(duration_weeks)), 2), 5);
    const lessonsPerModule = Number(duration_weeks) >= 5 ? 2 : 3;
    const jurisdictionText = jurisdiction && jurisdiction !== "All CARICOM"
      ? `PRIMARY jurisdiction: ${jurisdiction}. Reference other CARICOM islands for regulatory comparison.`
      : "Applies across ALL CARICOM nations — use specific island comparisons (T&T, Jamaica, Barbados, Guyana, Belize, St. Lucia) throughout.";
    const focusText = focus_areas ? `\nINSTRUCTOR FOCUS AREAS: ${focus_areas}` : "";

    // ── PHASE 1: Lean outline — structure only, no quiz questions ─────────────
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
  "slug": "url-friendly-lowercase-slug-max-60-chars",
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

    const { result: outline, modelUsed } = await callClaude(outlinePrompt, 2048);
    if (!Array.isArray(outline.modules) || outline.modules.length === 0) {
      throw new Error("Phase 1: outline missing modules array");
    }

    // ── PHASE 2: Rich content + quiz questions per module (sequential) ────────
    const enrichedModules: EnrichedModule[] = [];

    for (let mi = 0; mi < (outline.modules as ModuleOutline[]).length; mi++) {
      const mod = (outline.modules as ModuleOutline[])[mi];
      const lessonList = (mod.lessons ?? [])
        .map((l, i) => `  Lesson ${i + 1}: "${l.title}" — target ${l.duration_minutes} min`)
        .join("\n");

      const modulePrompt = `${CARIBBEAN_CONTEXT}

${QUALITY_STANDARD}

You are writing MODULE ${mi + 1} content for the PixoPharm course: "${title}" (${skill_level} level).

MODULE: "${mod.title}"
Learning objectives: ${(mod.learning_objectives ?? []).join("; ")}
${jurisdictionText}${focusText}

LESSONS IN THIS MODULE:
${lessonList}

TASK — for EACH lesson write:
1. Rich lesson content (6–9 blocks)
2. 5 multiple-choice quiz questions for this module (write all 5 at the end)

LESSON CONTENT BLOCKS — use ALL these types across the lessons:
  {"type":"heading","text":"...","level":2}  — main section (required per lesson)
  {"type":"heading","text":"...","level":3}  — subsection
  {"type":"text","body":"4–6 sentence paragraph. MUST be clinically accurate, Caribbean-specific, name real drugs/regulations/islands."}
  {"type":"callout","title":"...","body":"2–4 sentences","variant":"info"}  — island comparisons, regional facts, clinical tips
  {"type":"callout","title":"...","body":"...","variant":"warning"}  — safety alerts, dispensing errors, compliance warnings
  {"type":"key-term","term":"...","definition":"Precise definition with Caribbean clinical context."}
  {"type":"video-placeholder","title":"...","duration":"X min","description":"Specific Caribbean pharmacy scenario this video shows."}

QUIZ QUESTIONS — 5 questions total for this module:
  - Scenario-based (e.g., "A patient in a Port of Spain pharmacy asks...")
  - 4 options each with realistic distractors
  - correct_answer is the 0-based index of the correct option
  - explanation: 2–3 sentences explaining why correct, why others wrong, citing Caribbean regulation/clinical evidence

Return ONLY valid JSON:
{
  "lessons": [
    {
      "title": "exact title from the lesson list above",
      "duration_minutes": 25,
      "content": [ ...6-9 blocks... ]
    }
  ],
  "quiz_questions": [
    {
      "question": "Scenario-based question text?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct_answer": 0,
      "explanation": "Detailed explanation with Caribbean regulatory/clinical context.",
      "difficulty": "medium",
      "blooms_level": "apply"
    }
  ]
}`;

      const { result: moduleData } = await callClaude(modulePrompt, 4096);
      const lessons = Array.isArray(moduleData.lessons) ? moduleData.lessons as GeneratedLesson[] : [];
      const questions = Array.isArray(moduleData.quiz_questions) ? moduleData.quiz_questions as GeneratedQuestion[] : [];

      enrichedModules.push({
        title: mod.title,
        description: mod.description ?? "",
        lessons: lessons.length > 0 ? lessons : (mod.lessons ?? []).map((l) => ({
          title: l.title,
          duration_minutes: l.duration_minutes ?? 25,
          content: [
            { type: "heading", text: l.title, level: 2 },
            { type: "text", body: "Content being developed by the PixoPharm curriculum team." },
          ],
        })),
        quiz_questions: questions,
      });
    }

    // ── Save to Supabase ───────────────────────────────────────────────────────
    const sb = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
    const baseSlug = ((outline.slug as string) ?? slugify(title)).toLowerCase().replace(/[^a-z0-9-]/g, "-").slice(0, 60);
    const slug = `${baseSlug}-${Date.now().toString(36)}`;

    const { data: course, error: courseErr } = await sb.from("courses").insert({
      title,
      slug,
      description: (outline.description as string) ?? "",
      skill_level,
      duration_weeks: Number(duration_weeks),
      icon: (outline.icon as string) ?? "GraduationCap",
      color: (outline.color as string) ?? "blue",
      what_youll_learn: Array.isArray(outline.what_youll_learn) ? outline.what_youll_learn : [],
      prerequisites: [],
      status: "draft",
      order: 999,
      ...(created_by ? { created_by } : {}),
    }).select("id, slug").single();
    if (courseErr) throw new Error(`Insert course: ${courseErr.message}`);

    let totalLessons = 0;
    let totalQuestions = 0;

    for (let mi = 0; mi < enrichedModules.length; mi++) {
      const mod = enrichedModules[mi];
      const { data: moduleRow, error: modErr } = await sb.from("modules").insert({
        course_id: course.id,
        title: mod.title,
        description: mod.description,
        order_index: mi,
      }).select("id").single();
      if (modErr) throw new Error(`Insert module: ${modErr.message}`);

      for (let li = 0; li < mod.lessons.length; li++) {
        const lesson = mod.lessons[li];
        const { error: lessonErr } = await sb.from("lessons").insert({
          module_id: moduleRow.id,
          title: lesson.title,
          content: Array.isArray(lesson.content) ? lesson.content : [],
          order_index: li,
          duration_minutes: lesson.duration_minutes ?? 25,
        });
        if (lessonErr) throw new Error(`Insert lesson: ${lessonErr.message}`);
        totalLessons++;
      }

      for (let qi = 0; qi < mod.quiz_questions.length; qi++) {
        const q = mod.quiz_questions[qi];
        const { error: qErr } = await sb.from("quiz_questions").insert({
          module_id: moduleRow.id,
          question: q.question,
          options: Array.isArray(q.options) ? q.options : ["A", "B", "C", "D"],
          correct_answer: typeof q.correct_answer === "number" ? q.correct_answer : 0,
          explanation: q.explanation ?? "",
          order_index: qi,
          question_type: "multiple_choice",
          difficulty: q.difficulty ?? "medium",
          blooms_level: q.blooms_level ?? "apply",
        });
        if (qErr) throw new Error(`Insert question: ${qErr.message}`);
        totalQuestions++;
      }
    }

    return json({
      course_id: course.id,
      course_slug: slug,
      modules_count: enrichedModules.length,
      lessons_count: totalLessons,
      questions_count: totalQuestions,
      model_used: modelUsed,
    });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("generate-course error:", msg);
    return json({ error: msg }, 500);
  }
});

// ── Claude caller with Opus 4.6 → Haiku fallback ─────────────────────────────

const MODELS = ["claude-opus-4-6", "claude-3-haiku-20240307"];

async function callClaude(
  prompt: string,
  maxTokens: number
): Promise<{ result: Record<string, unknown>; modelUsed: string }> {
  let lastError = "";

  for (const model of MODELS) {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
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
    });

    if (resp.status === 404 || resp.status === 400) {
      const errText = await resp.text();
      lastError = `${model} (${resp.status}): ${errText.slice(0, 150)}`;
      console.warn(`Model ${model} unavailable, trying fallback. ${lastError}`);
      continue;
    }

    if (!resp.ok) {
      throw new Error(`Claude API error (${model}, ${resp.status}): ${(await resp.text()).slice(0, 300)}`);
    }

    const aiData = await resp.json();
    const rawText: string = aiData.content?.[0]?.text ?? "{}";

    // Strip markdown fences
    const cleaned = rawText
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```\s*$/i, "")
      .trim();

    // Try to parse, then try extracting outermost JSON object
    for (const attempt of [cleaned, cleaned.match(/\{[\s\S]*\}/)?.[0] ?? ""]) {
      if (!attempt) continue;
      try {
        return { result: JSON.parse(attempt), modelUsed: model };
      } catch {
        continue;
      }
    }

    throw new Error(`${model} returned unparseable JSON (${cleaned.length} chars): ${cleaned.slice(0, 400)}`);
  }

  throw new Error(`All models failed. Last: ${lastError}`);
}

// ── Types ──────────────────────────────────────────────────────────────────────

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

interface EnrichedModule {
  title: string;
  description: string;
  lessons: GeneratedLesson[];
  quiz_questions: GeneratedQuestion[];
}

// ── Helpers ────────────────────────────────────────────────────────────────────

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
