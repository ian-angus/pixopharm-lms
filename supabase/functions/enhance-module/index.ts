import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

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

const OPUS_MODEL = "claude-opus-4-8";
const CALL_TIMEOUT_MS = 300_000;

// Phase 3: the quiz player now renders every type below, including 'numeric'.
const ALLOWED_TYPES = [
  "multiple_choice", "multiple_select", "ordering",
  "matching", "fill_in_blank", "true_false", "scenario", "numeric",
] as const;
type QType = (typeof ALLOWED_TYPES)[number];

// Domain-aware question-type emphasis (D11). Falls back to a balanced mix.
function typeMixForDomain(domainName: string | null): string {
  const d = (domainName ?? "").toLowerCase();
  if (d.includes("calculation") || d.includes("compounding")) {
    return "Emphasise applied problem-solving: at least 2–3 numeric questions where the student computes a value (doses, dilutions, alligation, infusion rates, days' supply) with a realistic tolerance and unit, plus multiple_choice built around worked calculations, ordering (procedure steps), and fill_in_blank (formula terms).";
  }
  if (d.includes("law") || d.includes("regulation")) {
    return "Emphasise matching (island ↔ statute/schedule, drug ↔ schedule class) and ordering (regulatory process steps), plus scenario questions on compliance decisions.";
  }
  if (d.includes("clinical") || d.includes("capstone") || d.includes("certification")) {
    return "Emphasise a case vignette (the \"case\" object) with 2–3 linked scenario questions, plus multiple_select (select-all-that-apply clinical findings).";
  }
  if (d.includes("foundation") || d.includes("terminology") || d.includes("learning")) {
    return "Emphasise fill_in_blank (terminology recall) and matching (term ↔ definition, abbreviation ↔ meaning), plus true_false misconception checks.";
  }
  return "Use a balanced mix: multiple_choice, one multiple_select, one ordering or matching, one fill_in_blank or true_false, and a scenario.";
}

interface GenQuestion {
  question_type?: string;
  question?: string;
  options?: unknown[];
  correct_answer?: unknown;
  question_data?: Record<string, unknown> | null;
  explanation?: string;
  difficulty?: string;
  blooms_level?: string;
  objective_ref?: string; // LOn — accreditation flow links each question to an objective
}

// Validate a generated question against the shapes the quiz player scores with.
// Returns an error string, or null when valid.
function validateQuestion(q: GenQuestion): string | null {
  const t = q.question_type as QType;
  if (!ALLOWED_TYPES.includes(t)) return `question_type "${q.question_type}" not allowed`;
  if (!q.question || typeof q.question !== "string" || q.question.length < 10) return "question text missing/too short";
  if (!q.explanation || typeof q.explanation !== "string" || q.explanation.length < 20) return "explanation missing/too short";
  const qd = (q.question_data ?? {}) as Record<string, unknown>;

  switch (t) {
    case "multiple_choice":
    case "scenario": {
      if (!Array.isArray(q.options) || q.options.length !== 4) return `${t}: options must be exactly 4`;
      const ca = q.correct_answer;
      if (!Number.isInteger(ca) || (ca as number) < 0 || (ca as number) > 3) return `${t}: correct_answer must be 0–3`;
      return null;
    }
    case "multiple_select": {
      if (!Array.isArray(q.options) || q.options.length < 4 || q.options.length > 6) return "multiple_select: options must be 4–6";
      const ci = qd.correct_indices;
      if (!Array.isArray(ci) || ci.length < 2 || ci.length >= q.options.length) return "multiple_select: correct_indices must list 2+ (not all) options";
      if (!ci.every((i) => Number.isInteger(i) && (i as number) >= 0 && (i as number) < q.options!.length)) return "multiple_select: correct_indices out of range";
      return null;
    }
    case "ordering": {
      if (!Array.isArray(q.options) || q.options.length < 3 || q.options.length > 6) return "ordering: options (items) must be 3–6";
      const co = qd.correct_order;
      if (!Array.isArray(co) || co.length !== q.options.length) return "ordering: correct_order must index every option";
      const sorted = [...(co as number[])].sort((a, b) => a - b);
      if (!sorted.every((v, i) => v === i)) return "ordering: correct_order must be a permutation of option indices";
      return null;
    }
    case "matching": {
      const pairs = qd.pairs;
      if (!Array.isArray(pairs) || pairs.length < 3 || pairs.length > 6) return "matching: pairs must be 3–6";
      if (!pairs.every((p) => p && typeof (p as Record<string, unknown>).left === "string" && typeof (p as Record<string, unknown>).right === "string")) return "matching: each pair needs left+right strings";
      return null;
    }
    case "fill_in_blank": {
      const aa = qd.acceptable_answers;
      if (!Array.isArray(aa) || aa.length < 1 || !aa.every((a) => typeof a === "string" && a.length > 0)) return "fill_in_blank: acceptable_answers must be non-empty strings";
      if (!q.question.includes("___")) return "fill_in_blank: question must contain ___ for the blank";
      return null;
    }
    case "true_false": {
      if (typeof qd.correct_answer !== "boolean") return "true_false: question_data.correct_answer must be boolean";
      return null;
    }
    case "numeric": {
      if (typeof qd.answer !== "number" || !Number.isFinite(qd.answer)) return "numeric: question_data.answer must be a finite number";
      if (qd.tolerance !== undefined && (typeof qd.tolerance !== "number" || !Number.isFinite(qd.tolerance) || qd.tolerance < 0)) return "numeric: question_data.tolerance must be a number >= 0";
      if (qd.unit !== undefined && typeof qd.unit !== "string") return "numeric: question_data.unit must be a string";
      return null;
    }
  }
  return "unknown type";
}

function buildInsertRow(q: GenQuestion, moduleId: string, orderIndex: number, caseId: string | null) {
  const t = q.question_type as QType;
  const isChoice = t === "multiple_choice" || t === "scenario";
  return {
    module_id: moduleId,
    question: q.question,
    options: Array.isArray(q.options) ? q.options : (t === "true_false" ? ["True", "False"] : []),
    correct_answer: isChoice ? (q.correct_answer as number) : 0,
    explanation: q.explanation ?? "",
    order_index: orderIndex,
    question_type: t,
    question_data: q.question_data ?? {},
    difficulty: ["easy", "medium", "hard", "expert"].includes(q.difficulty ?? "") ? q.difficulty : "medium",
    blooms_level: ["remember", "understand", "apply", "analyze", "evaluate", "create"].includes(q.blooms_level ?? "") ? q.blooms_level : "apply",
    case_id: caseId,
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders() });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  if (!ANTHROPIC_API_KEY || !SUPABASE_URL || !(SUPABASE_ANON_KEY || SUPABASE_SERVICE_KEY)) {
    return json({ error: "Missing env vars" }, 500);
  }

  // Validate caller is an authenticated admin
  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) return json({ error: "Unauthorized" }, 401);
  const token = authHeader.slice(7);

  // The service-role key in this project no longer bypasses RLS (legacy key was
  // rotated when the project moved to the new API-key system). So instead of relying
  // on service-role, the data client runs AS the authenticated admin who called us —
  // RLS is_admin() then grants access to draft courses and all writes.
  const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY || SUPABASE_SERVICE_KEY, {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: { user }, error: userErr } = await sb.auth.getUser(token);
  if (userErr || !user) return json({ error: "Unauthorized" }, 401);
  const { data: callerProfile } = await sb.from("profiles").select("role").eq("id", user.id).single();
  console.log(`enhance-module: caller_id=${user.id} role=${callerProfile?.role ?? "none"}`);
  if (callerProfile?.role !== "admin") return json({ error: "Forbidden" }, 403);

  try {
    const body = await req.json();
    const module_id: string | undefined = body.module_id;
    // D6: non-destructive by default. "append" fills only empty lessons and adds
    // questions alongside existing ones. "overwrite" is the legacy destructive
    // behaviour and sits behind a confirm dialog in the admin UI.
    const mode: "append" | "overwrite" = body.mode === "overwrite" ? "overwrite" : "append";
    // target "draft" (accreditation flow): generate the full accreditation module and
    // write it ONLY to module_enhancement_drafts for admin review — no live writes.
    // target "live" (default, legacy): write lessons + quiz directly as before.
    const target: "draft" | "live" = body.target === "draft" ? "draft" : "live";
    if (!module_id) return json({ error: "module_id is required" }, 400);

    // Optional admin restriction: only generate these question types.
    // Omitted/empty = the domain-aware default mix.
    const requestedTypes: QType[] | null = Array.isArray(body.types)
      ? (body.types as unknown[]).filter((t): t is QType => ALLOWED_TYPES.includes(t as QType))
      : null;
    if (Array.isArray(body.types) && (!requestedTypes || requestedTypes.length === 0)) {
      return json({ error: `types must be a non-empty subset of: ${ALLOWED_TYPES.join(", ")}` }, 400);
    }

    // ── Fetch module + course + domain context from DB ────────────────────────
    const { data: mod, error: modErr } = await sb
      .from("modules")
      .select("id, title, description, order_index, course_id, courses(title, skill_level, duration_weeks, description, domains(name))")
      .eq("id", module_id)
      .single();

    if (modErr || !mod) return json({ error: `Module not found: ${modErr?.message}` }, 404);

    const course = mod.courses as unknown as {
      title: string; skill_level: string; duration_weeks: number; description: string;
      domains: { name: string } | null;
    };
    const domainName = course?.domains?.name ?? null;

    const { data: lessons, error: lessonErr } = await sb
      .from("lessons")
      .select("id, title, order_index, duration_minutes, content")
      .eq("module_id", module_id)
      .order("order_index");
    if (lessonErr) return json({ error: `Failed to read lessons: ${lessonErr.message}` }, 500);

    // THE 404-ON-EMPTY-MODULE FIX: 116 of 235 modules have zero lesson rows. Instead of
    // bailing out, we ask the model to DESIGN lessons from scratch and create them.
    const existingLessons = lessons ?? [];
    const createLessons = existingLessons.length === 0;
    if (createLessons && target === "live" && mode === "overwrite") {
      // overwrite has nothing to overwrite on an empty module — treat as append.
    }

    const { data: existingQs } = await sb
      .from("quiz_questions")
      .select("id, order_index")
      .eq("module_id", module_id)
      .order("order_index", { ascending: false })
      .limit(1);
    const maxOrder = existingQs?.[0]?.order_index ?? 0;

    const moduleCount = course.duration_weeks ? Math.min(Math.max(Math.round(Number(course.duration_weeks)), 2), 5) : 4;

    // What lesson content does this generation need to produce?
    //  - createLessons: design a fresh set of lessons (empty module).
    //  - existing lessons with gaps (live append): fill only the empty ones.
    //  - existing lessons all filled (live append): QUIZ ONLY (avoids discarded tokens).
    //  - draft on a module that already has lessons: keep them, generate quiz+metadata only.
    const emptyLessonCount = existingLessons.filter(
      (l) => !Array.isArray(l.content) || (l.content as unknown[]).length === 0
    ).length;
    const needLessonContent = createLessons || (target === "live" && mode === "append" && emptyLessonCount > 0)
      || (target === "live" && mode === "overwrite");
    const quizOnly = !needLessonContent;

    const lessonList = createLessons
      ? "  (none yet — DESIGN them, see TASK below)"
      : existingLessons
        .map((l, i) => `  Lesson ${i + 1}: "${l.title}" — target ${l.duration_minutes ?? 25} min`)
        .join("\n");

    const accreditation = target === "draft";

    // ── Build the generation prompt ───────────────────────────────────────────
    const taskLine = createLessons
      ? `TASK — this module has NO lessons yet. DESIGN 3–5 short lessons that fully cover the module topic, following the instructional sequence (Foundational Concepts → Required Information → Common Challenges → Technician Role → Practice Application). For EACH lesson give a title, duration_minutes, and 5–7 content blocks. Then write the INTERACTIVE quiz.`
      : quizOnly
        ? "TASK — every lesson above already has content. Write ONLY an INTERACTIVE quiz for the module (return an empty lessons array)."
        : "TASK — for EACH lesson write rich content (5–7 blocks), then an INTERACTIVE quiz for the module.";

    const basePrompt = `${CARIBBEAN_CONTEXT}

You are writing MODULE ${mod.order_index ?? 1} of ${moduleCount} for the PixoPharm course: "${course.title}" (${course.skill_level} level)${domainName ? `, in the curriculum domain "${domainName}"` : ""}.

MODULE: "${mod.title}"
${mod.description ? `Description: ${mod.description}` : ""}
Applies across ALL CARICOM nations — use specific island comparisons (T&T, Jamaica, Barbados, Guyana, Belize, St. Lucia) throughout.

LESSONS IN THIS MODULE:
${lessonList}

${taskLine}

${quizOnly ? "" : `LESSON CONTENT BLOCKS — use ALL these block types across the lessons:
  {"type":"heading","text":"...","level":2}  — main section heading (required, 1 per lesson)
  {"type":"heading","text":"...","level":3}  — subsection heading
  {"type":"text","body":"3–5 sentence paragraph. Must be clinically accurate, Caribbean-specific, naming real drugs, regulations, and islands."}
  {"type":"callout","title":"...","body":"2–4 sentences","variant":"info"}  — island comparisons, regional clinical facts, regulatory differences
  {"type":"callout","title":"...","body":"...","variant":"warning"}  — patient safety alerts, dispensing errors, compliance warnings
  {"type":"key-term","term":"...","definition":"Precise 1–2 sentence definition with Caribbean clinical context and an example."}
  {"type":"video-placeholder","title":"...","duration":"X min","description":"Specific Caribbean pharmacy scenario this video demonstrates."}`}
${accreditation ? accreditationPromptSection(createLessons) : ""}
QUIZ — produce 6–8 questions ${requestedTypes
      ? `using ONLY these question_type values: ${requestedTypes.join(", ")}. Spread the questions across ${requestedTypes.length > 1 ? "all of them" : "it"}.`
      : `spanning AT LEAST 4 different question_type values.\n${typeMixForDomain(domainName)}`}
Every question MUST have an "explanation" (2–3 sentences citing specific Caribbean regulation or clinical evidence) — it is shown to the student immediately after they answer.${accreditation ? '\nEvery question (standalone AND case) MUST include "objective_ref":"LOn" tying it to one of the learning objectives. Ensure EVERY objective has at least one question.' : ""}

QUESTION TYPE SCHEMAS (follow EXACTLY — these are machine-validated):
1. {"question_type":"multiple_choice","question":"Scenario-grounded question?","options":["A","B","C","D"],"correct_answer":0,"explanation":"...","difficulty":"medium","blooms_level":"apply"}
2. {"question_type":"true_false","question":"Statement to judge.","question_data":{"correct_answer":true},"explanation":"...","difficulty":"easy","blooms_level":"remember"}
3. {"question_type":"multiple_select","question":"Select ALL that apply...","options":["..","..","..","..","..."],"question_data":{"correct_indices":[0,2]},"explanation":"...","difficulty":"hard","blooms_level":"analyze"}
4. {"question_type":"ordering","question":"Arrange the steps in the correct order.","options":["step","step","step","step"],"question_data":{"correct_order":[2,0,3,1]},"explanation":"...","difficulty":"medium","blooms_level":"apply"}
   (options = items as DISPLAYED; correct_order = the option indices in their correct sequence)
5. {"question_type":"matching","question":"Match each item to its pair.","question_data":{"pairs":[{"left":"Jamaica","right":"Dangerous Drugs Act Schedules 1–4"},{"left":"...","right":"..."}]},"explanation":"...","difficulty":"medium","blooms_level":"understand"}
   (3–6 pairs; left[i] correctly matches right[i])
6. {"question_type":"fill_in_blank","question":"Sentence with ___ for the missing term.","question_data":{"acceptable_answers":["term","synonym"],"case_sensitive":false},"explanation":"...","difficulty":"medium","blooms_level":"remember"}
7. {"question_type":"numeric","question":"Calculation question — the student types a number.","question_data":{"answer":12.5,"tolerance":0.1,"unit":"mL"},"explanation":"...","difficulty":"medium","blooms_level":"apply"}
   (answer = the correct numeric value; tolerance = how far off is still accepted, use 0 for exact; unit = optional display label like "mL", "mg", "tablets")
8. scenario questions go INSIDE the optional "case" object (below) and use the multiple_choice schema with "question_type":"scenario". Each must still make sense if read alone (briefly restate the key facts).

Return ONLY valid JSON:
{
${accreditation ? '  "module_overview": "3–5 sentence intro (see ACCREDITATION FORMAT).",\n  "learning_objectives": [ {"objective_number":"LO1","text":"...","blooms_level":"apply"} ],\n  "key_terms": [ {"term":"...","definition":"..."} ],\n  "crosswalk": [ {"standard":"...","objective":"LO1","instructional_content":"...","learning_activity":"didactic","assessment_method":"quiz","evidence":"quiz record"} ],\n  "competency_checklist": [ {"item":"...","validation_method":"..."} ],\n  "remediation_plan": ["step 1","step 2"],\n  "references": ["source actually used"],\n  "passing_score": 80,\n  "attempts_allowed": 3,\n  "seat_time_minutes": 60,\n  "module_code": "PTM-XXX",\n  "delivery_mode": "Online didactic",\n  "modality_tags": ["didactic"],\n' : ""}  "lessons": [
    ${quizOnly ? "" : '{"title": "lesson title' + (createLessons ? '' : ' EXACTLY matching the list above') + '", "duration_minutes": 25, "content": [ ...5-7 blocks... ]}'}
  ],
  "quiz_questions": [ ...4-6 standalone questions, mixed types... ],
  "case": {
    "title": "short case name",
    "vignette": "4–6 sentence Caribbean patient/pharmacy vignette",
    "questions": [ ...2-3 "scenario" questions linked to the vignette... ]
  }
}
${requestedTypes && !requestedTypes.includes("scenario")
      ? 'Do NOT include the "case" object — scenario questions were not requested.'
      : 'The "case" object is OPTIONAL — include it when the domain emphasis calls for case-based assessment, otherwise omit it.'}`;

    // ── Generate with validation + one retry ──────────────────────────────────
    // With an admin type restriction the variety floor adapts to what was asked.
    const minTypes = requestedTypes ? Math.min(3, requestedTypes.length) : 3;
    const passes = (v: { standalone: GenQuestion[]; caseQs: GenQuestion[] }) =>
      v.standalone.length + v.caseQs.length >= 5 && distinctTypes(v) >= minTypes;

    const maxOut = quizOnly ? 6000 : 16000;
    const totalUsage = { input_tokens: 0, output_tokens: 0 };
    const first = await callOpus(basePrompt, maxOut);
    totalUsage.input_tokens += first.usage.input_tokens;
    totalUsage.output_tokens += first.usage.output_tokens;
    let result = first.result;
    let { valid, rejected } = collectQuestions(result, requestedTypes);

    if (!passes(valid)) {
      const feedback = rejected.map((r) => `- ${r.reason}`).join("\n") || "- too few valid questions or too few distinct types";
      console.log(`enhance-module: retrying generation; first pass had ${valid.standalone.length + valid.caseQs.length} valid questions. Rejections:\n${feedback}`);
      const retryPrompt = `${basePrompt}

PREVIOUS ATTEMPT FAILED MACHINE VALIDATION:
${feedback}
Regenerate the COMPLETE JSON, fixing these issues. Minimum 5 valid questions across ${minTypes}+ types.`;
      const retry = await callOpus(retryPrompt, maxOut);
      totalUsage.input_tokens += retry.usage.input_tokens;
      totalUsage.output_tokens += retry.usage.output_tokens;
      result = retry.result;
      ({ valid, rejected } = collectQuestions(result, requestedTypes));
      if (!passes(valid)) {
        return json({
          error: "AI output failed validation after retry",
          rejections: rejected.map((r) => r.reason).slice(0, 10),
        }, 502);
      }
    }

    const generatedLessons = Array.isArray((result as Record<string, unknown>).lessons)
      ? (result as { lessons: { title?: string; duration_minutes?: number; content?: unknown[] }[] }).lessons
      : [];

    // ════════════════════════════════════════════════════════════════════════
    // DRAFT TARGET — write the full accreditation module to staging ONLY.
    // Nothing reaches live lessons/quiz_questions until an admin publishes.
    // ════════════════════════════════════════════════════════════════════════
    if (target === "draft") {
      const acc = extractAccreditation(result as Record<string, unknown>);
      const payload = {
        module_id,
        module_title: mod.title,
        course_title: course.title,
        domain: domainName,
        create_lessons: createLessons,
        ...acc,
        lessons: createLessons
          ? generatedLessons.map((l, i) => ({
              title: l.title ?? `Lesson ${i + 1}`,
              duration_minutes: l.duration_minutes ?? 25,
              content: Array.isArray(l.content) ? l.content : [],
              order_index: i,
            }))
          : [], // existing lessons are kept as-is; publish never overwrites them
        quiz_questions: valid.standalone,
        case: valid.caseQs.length && valid.vignette
          ? { title: valid.caseTitle ?? "Case study", vignette: valid.vignette, questions: valid.caseQs }
          : null,
        generated_at: new Date().toISOString(),
      };

      const { data: draftRow, error: draftErr } = await sb
        .from("module_enhancement_drafts")
        .insert({
          module_id,
          status: "pending_review",
          payload,
          requested_types: requestedTypes ?? [],
          model: OPUS_MODEL,
          tokens_in: totalUsage.input_tokens,
          tokens_out: totalUsage.output_tokens,
          created_by: user.id,
        })
        .select("id")
        .single();
      if (draftErr || !draftRow) return json({ error: `Failed to save draft: ${draftErr?.message}` }, 500);

      return json({
        target: "draft",
        draft_id: draftRow.id,
        create_lessons: createLessons,
        lessons_count: payload.lessons.length,
        questions_count: valid.standalone.length + valid.caseQs.length,
        objectives_count: acc.learning_objectives.length,
        has_case: !!payload.case,
        types_generated: [...new Set([...valid.standalone, ...valid.caseQs].map((q) => q.question_type))],
        rejected_count: rejected.length,
        model_used: OPUS_MODEL,
        usage: totalUsage,
      });
    }

    // ════════════════════════════════════════════════════════════════════════
    // LIVE TARGET — legacy direct write. Append-safe; createLessons INSERTs new rows.
    // ════════════════════════════════════════════════════════════════════════
    let lessonsUpdated = 0;
    let lessonsCreated = 0;
    let lessonsSkipped = 0;

    if (createLessons) {
      // Empty module: INSERT fresh lesson rows (additive — nothing to overwrite).
      for (let i = 0; i < generatedLessons.length; i++) {
        const g = generatedLessons[i];
        if (!Array.isArray(g.content) || g.content.length === 0) continue;
        const { error: insErr } = await sb.from("lessons").insert({
          module_id,
          title: g.title ?? `Lesson ${i + 1}`,
          content: g.content,
          order_index: i,
          duration_minutes: g.duration_minutes ?? 25,
        });
        if (!insErr) lessonsCreated++; else console.log(`enhance-module: lesson insert failed: ${insErr.message}`);
      }
    } else {
      for (let i = 0; i < existingLessons.length; i++) {
        const hasContent = Array.isArray(existingLessons[i].content) && (existingLessons[i].content as unknown[]).length > 0;
        if (mode === "append" && hasContent) { lessonsSkipped++; continue; }

        const generated = generatedLessons.find(
          (l) => l.title?.toLowerCase().trim() === existingLessons[i].title?.toLowerCase().trim()
        ) ?? generatedLessons[i];
        if (!generated?.content?.length) continue;

        const { error: updateErr } = await sb
          .from("lessons")
          .update({
            content: Array.isArray(generated.content) ? generated.content : [],
            duration_minutes: generated.duration_minutes ?? existingLessons[i].duration_minutes ?? 25,
          })
          .eq("id", existingLessons[i].id);
        if (!updateErr) lessonsUpdated++;
      }
    }

    // ── Write quiz ────────────────────────────────────────────────────────────
    if (mode === "overwrite" && !createLessons) {
      await sb.from("quiz_questions").delete().eq("module_id", module_id);
      await sb.from("quiz_cases").delete().eq("module_id", module_id);
    }
    let orderIndex = (mode === "append" || createLessons) ? maxOrder : 0;
    let questionsInserted = 0;

    for (const q of valid.standalone) {
      orderIndex += 1;
      const { error: qErr } = await sb.from("quiz_questions").insert(buildInsertRow(q, module_id, orderIndex, null));
      if (!qErr) questionsInserted++; else console.log(`enhance-module: insert failed: ${qErr.message}`);
    }

    let caseInserted = false;
    if (valid.caseQs.length && valid.vignette) {
      const { data: caseRow, error: caseErr } = await sb
        .from("quiz_cases")
        .insert({ module_id, title: valid.caseTitle ?? "Case study", vignette: valid.vignette, order_index: 1 })
        .select("id")
        .single();
      if (!caseErr && caseRow) {
        caseInserted = true;
        for (const q of valid.caseQs) {
          orderIndex += 1;
          const { error: qErr } = await sb.from("quiz_questions").insert(buildInsertRow(q, module_id, orderIndex, caseRow.id));
          if (!qErr) questionsInserted++; else console.log(`enhance-module: case insert failed: ${qErr.message}`);
        }
      } else {
        console.log(`enhance-module: quiz_cases insert failed: ${caseErr?.message}`);
      }
    }

    return json({
      target: "live",
      mode,
      created_lessons: createLessons,
      lessons_created: lessonsCreated,
      lessons_updated: lessonsUpdated,
      lessons_skipped_existing: lessonsSkipped,
      questions_count: questionsInserted,
      case_created: caseInserted,
      types_generated: [...new Set([...valid.standalone, ...valid.caseQs].map((q) => q.question_type))],
      rejected_count: rejected.length,
      model_used: OPUS_MODEL,
      usage: totalUsage,
    });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("enhance-module error:", msg);
    return json({ error: msg }, 500);
  }
});

// Accreditation prompt block (§1–§12 of the client format), mapped to our model.
function accreditationPromptSection(createLessons: boolean): string {
  return `
ACCREDITATION FORMAT — this is an ACCREDITATION-READY pharmacy technician module (2026 ASHP/ACPE aligned).
In ADDITION to ${createLessons ? "the lessons you design" : "the lessons"} and the quiz, return these fields:
  "module_overview": 3–5 sentence professional intro — why the topic matters to Caribbean pharmacy technician practice, how it fits the diploma, what the learner will be able to do, and whether it is knowledge-, skill-, or competency-based.
  "learning_objectives": 3–5 MEASURABLE, action-based objectives (use Bloom verbs; avoid "understand"). Each {objective_number:"LO1", text, blooms_level}.
  "key_terms": the terms a beginner must know first, each {term, definition} (Caribbean context).
  "crosswalk": one row per objective {standard (accreditation goal), objective:"LOn", instructional_content (lesson/section), learning_activity (didactic|simulation|discussion|assignment), assessment_method (quiz|scenario|checklist), evidence (quiz record|completion report|rubric)}.
  "competency_checklist": observable skills the learner must demonstrate, each {item, validation_method}.
  "remediation_plan": ordered steps a learner follows after an unsuccessful attempt.
  "references": ONLY sources actually reflected in the content (real regulations, formularies, guidelines). Do NOT invent standards.
  "passing_score" (int %), "attempts_allowed" (int), "seat_time_minutes" (int ≈ sum of lesson durations), "module_code" (e.g. "PTM-104"), "delivery_mode", "modality_tags" (subset of didactic/simulation/experiential).
`;
}

// Pull the accreditation fields out of a model result with safe defaults so a
// missing/garbled field never blocks the draft (reviewer can fix on review).
function extractAccreditation(result: Record<string, unknown>) {
  const arr = (v: unknown) => (Array.isArray(v) ? v : []);
  const str = (v: unknown) => (typeof v === "string" ? v : "");
  const intOr = (v: unknown, d: number) => (Number.isFinite(Number(v)) ? Math.round(Number(v)) : d);
  const objectives = arr(result.learning_objectives).map((o, i) => {
    const r = (o ?? {}) as Record<string, unknown>;
    return {
      objective_number: str(r.objective_number) || `LO${i + 1}`,
      text: str(r.text),
      blooms_level: str(r.blooms_level) || "apply",
    };
  }).filter((o) => o.text.length > 0);
  return {
    module_overview: str(result.module_overview),
    learning_objectives: objectives,
    key_terms: arr(result.key_terms),
    crosswalk: arr(result.crosswalk),
    competency_checklist: arr(result.competency_checklist),
    remediation_plan: arr(result.remediation_plan),
    references: arr(result.references),
    passing_score: intOr(result.passing_score, 80),
    attempts_allowed: intOr(result.attempts_allowed, 3),
    seat_time_minutes: intOr(result.seat_time_minutes, 0),
    module_code: str(result.module_code),
    delivery_mode: str(result.delivery_mode) || "Online didactic",
    modality_tags: arr(result.modality_tags).filter((t) => typeof t === "string"),
  };
}

function collectQuestions(result: Record<string, unknown>, requestedTypes: QType[] | null = null) {
  const standaloneRaw = Array.isArray(result.quiz_questions) ? result.quiz_questions as GenQuestion[] : [];
  const caseObj = (result.case ?? null) as { title?: string; vignette?: string; questions?: GenQuestion[] } | null;
  const caseRaw = Array.isArray(caseObj?.questions) ? caseObj!.questions! : [];

  const valid = {
    standalone: [] as GenQuestion[],
    caseQs: [] as GenQuestion[],
    vignette: typeof caseObj?.vignette === "string" && caseObj.vignette.length > 50 ? caseObj.vignette : null,
    caseTitle: caseObj?.title ?? null,
  };
  const rejected: { reason: string }[] = [];

  for (const q of standaloneRaw) {
    if (requestedTypes && !requestedTypes.includes(q.question_type as QType)) {
      rejected.push({ reason: `standalone "${(q.question ?? "?").slice(0, 50)}": type "${q.question_type}" was not requested` });
      continue;
    }
    const err = validateQuestion(q);
    if (err) rejected.push({ reason: `standalone "${(q.question ?? "?").slice(0, 50)}": ${err}` });
    else valid.standalone.push(q);
  }
  for (const q of caseRaw) {
    if (requestedTypes && !requestedTypes.includes("scenario")) {
      rejected.push({ reason: `case "${(q.question ?? "?").slice(0, 50)}": scenario type was not requested` });
      continue;
    }
    if (q.question_type !== "scenario") q.question_type = "scenario";
    const err = validateQuestion(q);
    if (err) rejected.push({ reason: `case "${(q.question ?? "?").slice(0, 50)}": ${err}` });
    else valid.caseQs.push(q);
  }
  if (caseRaw.length && !valid.vignette) {
    rejected.push({ reason: "case: vignette missing or under 50 chars — case questions dropped" });
    valid.caseQs = [];
  }
  return { valid, rejected };
}

function distinctTypes(valid: { standalone: GenQuestion[]; caseQs: GenQuestion[] }): number {
  return new Set([...valid.standalone, ...valid.caseQs].map((q) => q.question_type)).size;
}

async function callOpus(
  prompt: string,
  maxTokens: number,
): Promise<{ result: Record<string, unknown>; modelUsed: string; usage: { input_tokens: number; output_tokens: number } }> {
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
  const usage = {
    input_tokens: Number(aiData.usage?.input_tokens ?? 0),
    output_tokens: Number(aiData.usage?.output_tokens ?? 0),
  };
  const rawText: string = aiData.content?.[0]?.text ?? "{}";

  const cleaned = rawText
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();

  for (const attempt of [cleaned, cleaned.match(/\{[\s\S]*\}/)?.[0] ?? ""]) {
    if (!attempt) continue;
    try {
      return { result: JSON.parse(attempt), modelUsed: OPUS_MODEL, usage };
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
