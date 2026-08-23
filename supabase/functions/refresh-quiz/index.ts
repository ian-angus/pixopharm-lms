// ============================================================================
// refresh-quiz — proposes a REPLACEMENT quiz for one module, grounded in the
// module's CURRENT lesson content, staged for review.
//
// Input:  { module_id, types?, instruction? }
// Output: { draft_id, ... } — written to module_enhancement_drafts with
//         kind='quiz_refresh' (status pending_review) BEFORE the HTTP response,
//         so the known ~150s gateway drop can never lose a result. Nothing
//         touches live quiz_questions until an admin calls
//         apply_quiz_refresh(draft_id, keep_ids) — which snapshots the current
//         set for one-click revert_quiz_refresh().
//
// Standalone by design: the critical enhance-module pipeline stays untouched.
// Helper duplication (context header, validators, Opus caller) mirrors the
// existing duplication between generate-course and enhance-module.
// ============================================================================

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

const OPUS_MODEL = "claude-opus-4-8";
const CALL_TIMEOUT_MS = 300_000;

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

TRADITIONAL MEDICINE: Cerasee (Momordica charantia), soursop leaf, fever grass (lemongrass),
  neem, aloe vera, bush tea — widely used, rarely disclosed to healthcare providers;
  significant drug interaction risk (e.g., cerasee + metformin, soursop + CNS drugs)

CLINICAL REALITY: Pharmacy technicians are often first healthcare contact; extremely high
  patient-to-staff ratios; strong role in chronic disease management (HTN, DM, asthma, HIV)
`;

const ALLOWED_TYPES = [
  "multiple_choice", "multiple_select", "ordering",
  "matching", "fill_in_blank", "true_false", "scenario", "numeric",
] as const;
type QType = (typeof ALLOWED_TYPES)[number];

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
  /** Model-emitted objective_number; resolved server-side to objective_id. */
  objective_ref?: unknown;
  objective_id?: string | null;
}

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

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders() });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);
  // The caller-scoped client must NEVER fall back to the service-role key —
  // require the anon key and fail fast (Coderabbit, PR #25).
  if (!ANTHROPIC_API_KEY || !SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return json({ error: "Missing env vars" }, 500);
  }

  // Validate caller is an authenticated admin (same pattern as enhance-module).
  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) return json({ error: "Unauthorized" }, 401);
  const token = authHeader.slice(7);
  const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: { user }, error: userErr } = await sb.auth.getUser(token);
  if (userErr || !user) return json({ error: "Unauthorized" }, 401);
  const { data: callerProfile } = await sb.from("profiles").select("role").eq("id", user.id).single();
  console.log(`refresh-quiz: caller_id=${user.id} role=${callerProfile?.role ?? "none"}`);
  if (callerProfile?.role !== "admin") return json({ error: "Forbidden" }, 403);

  try {
    const body = await req.json();
    const module_id: string | undefined = body.module_id;
    if (!module_id) return json({ error: "module_id is required" }, 400);

    const requestedTypes: QType[] | null = Array.isArray(body.types)
      ? (body.types as unknown[]).filter((t): t is QType => ALLOWED_TYPES.includes(t as QType))
      : null;
    if (Array.isArray(body.types) && (!requestedTypes || requestedTypes.length === 0)) {
      return json({ error: `types must be a non-empty subset of: ${ALLOWED_TYPES.join(", ")}` }, 400);
    }

    const { data: mod, error: modErr } = await sb
      .from("modules")
      .select("id, title, course_id, courses(title, domains(name))")
      .eq("id", module_id)
      .single();
    if (modErr || !mod) return json({ error: `Module not found: ${modErr?.message}` }, 404);
    const course = mod.courses as unknown as { title: string; domains: { name: string } | null };
    const domainName = course?.domains?.name ?? null;

    const { data: lessons, error: lessonErr } = await sb
      .from("lessons")
      .select("id, title, order_index, content")
      .eq("module_id", module_id)
      .order("order_index");
    if (lessonErr) return json({ error: `Failed to read lessons: ${lessonErr.message}` }, 500);

    // Accreditation modules carry learning objectives — generated questions
    // must link back to them so objective-coverage reporting stays truthful.
    const { data: objectives } = await sb
      .from("learning_objectives")
      .select("id, objective_number, text")
      .eq("module_id", module_id)
      .order("order_index");
    const objList = (objectives ?? []).filter((o) => o.objective_number);

    const withContent = (lessons ?? []).filter(
      (l) => Array.isArray(l.content) && (l.content as unknown[]).length > 0
    );
    if (withContent.length === 0) {
      return json({ error: "This module has no lesson content to ground a quiz refresh — enhance it first." }, 400);
    }

    // Compact grounding: headings, paragraphs, key terms and table headers per
    // lesson, capped so the prompt stays well inside limits.
    const grounding = withContent.map((l, i) => {
      const parts: string[] = [];
      for (const blk of l.content as Record<string, unknown>[]) {
        if (blk.type === "heading" && typeof blk.text === "string") parts.push(`# ${blk.text}`);
        else if (blk.type === "text" && typeof blk.body === "string") parts.push(blk.body as string);
        else if (blk.type === "key-term") parts.push(`KEY TERM ${blk.term}: ${blk.definition}`);
        else if (blk.type === "table" && Array.isArray(blk.headers)) parts.push(`TABLE: ${(blk.headers as string[]).join(" | ")}`);
        else if (blk.type === "callout" && typeof blk.body === "string") parts.push(`${String(blk.title ?? "NOTE")}: ${blk.body}`);
      }
      return `LESSON ${i + 1}: "${l.title}"\n${parts.join("\n").slice(0, 4000)}`;
    }).join("\n\n");

    const focus = typeof body.instruction === "string" && body.instruction.trim()
      ? `\nADMIN FOCUS FOR THIS REFRESH: "${body.instruction.trim()}"`
      : "";

    const objectivesSection = objList.length
      ? `\nLEARNING OBJECTIVES for this module:\n${objList.map((o) => `[${o.objective_number}] ${o.text}`).join("\n")}\nEVERY question object (standalone AND case questions) MUST include "objective_ref" set to the bracketed number of the single objective it best assesses (e.g. "objective_ref":"${objList[0].objective_number}"). Collectively the questions should cover as many of the objectives as the lesson content supports.\n`
      : "";

    const quizPrompt = `${CARIBBEAN_CONTEXT}

You are writing a REPLACEMENT quiz for module "${mod.title}" of the PixoPharm course "${course.title}"${domainName ? ` (curriculum domain "${domainName}")` : ""}.

CURRENT LESSON CONTENT — ground EVERY question in this material (do not test anything it doesn't teach):
${grounding}
${focus}${objectivesSection}
QUIZ — produce 6–8 questions ${requestedTypes
      ? `using ONLY these question_type values: ${requestedTypes.join(", ")}. Spread the questions across ${requestedTypes.length > 1 ? "all of them" : "it"}.`
      : `spanning AT LEAST 4 different question_type values.\n${typeMixForDomain(domainName)}`}
Every question MUST have an "explanation" (2–3 sentences citing specific Caribbean regulation or clinical evidence).

QUESTION TYPE SCHEMAS (follow EXACTLY — these are machine-validated):
1. {"question_type":"multiple_choice","question":"Scenario-grounded question?","options":["A","B","C","D"],"correct_answer":0,"explanation":"...","difficulty":"medium","blooms_level":"apply"}
2. {"question_type":"true_false","question":"Statement to judge.","question_data":{"correct_answer":true},"explanation":"...","difficulty":"easy","blooms_level":"remember"}
3. {"question_type":"multiple_select","question":"Select ALL that apply...","options":["..","..","..","..","..."],"question_data":{"correct_indices":[0,2]},"explanation":"...","difficulty":"hard","blooms_level":"analyze"}
4. {"question_type":"ordering","question":"Arrange the steps in the correct order.","options":["step","step","step","step"],"question_data":{"correct_order":[2,0,3,1]},"explanation":"...","difficulty":"medium","blooms_level":"apply"}
5. {"question_type":"matching","question":"Match each item to its pair.","question_data":{"pairs":[{"left":"...","right":"..."},{"left":"...","right":"..."},{"left":"...","right":"..."}]},"explanation":"...","difficulty":"medium","blooms_level":"understand"}
6. {"question_type":"fill_in_blank","question":"Sentence with ___ for the missing term.","question_data":{"acceptable_answers":["term","synonym"],"case_sensitive":false},"explanation":"...","difficulty":"medium","blooms_level":"remember"}
7. {"question_type":"numeric","question":"Calculation question — the student types a number.","question_data":{"answer":12.5,"tolerance":0.1,"unit":"mL"},"explanation":"...","difficulty":"medium","blooms_level":"apply"}
8. scenario questions go INSIDE the optional "case" object and use the multiple_choice schema with "question_type":"scenario".

Return ONLY valid JSON:
{
  "quiz_questions": [ ...4-6 standalone questions, mixed types... ],
  "case": { "title": "short case name", "vignette": "4–6 sentence Caribbean vignette grounded in the lesson content", "questions": [ ...2-3 "scenario" questions... ] }
}
${requestedTypes && !requestedTypes.includes("scenario")
      ? 'Do NOT include the "case" object — scenario questions were not requested.'
      : 'The "case" object is OPTIONAL — include it when case-based assessment fits, otherwise omit it.'}`;

    const minTypes = requestedTypes ? Math.min(3, requestedTypes.length) : 3;
    const passes = (v: { standalone: GenQuestion[]; caseQs: GenQuestion[] }) =>
      v.standalone.length + v.caseQs.length >= 5 && distinctTypes(v) >= minTypes;

    const totalUsage = { input_tokens: 0, output_tokens: 0 };
    const first = await callOpus(quizPrompt, 8000);
    totalUsage.input_tokens += first.usage.input_tokens;
    totalUsage.output_tokens += first.usage.output_tokens;
    let result = first.result;
    let { valid, rejected } = collectQuestions(result, requestedTypes);
    if (!passes(valid)) {
      const feedback = rejected.map((r) => `- ${r.reason}`).join("\n") || "- too few valid questions or too few distinct types";
      console.log(`refresh-quiz: retrying; problems:\n${feedback}`);
      const retry = await callOpus(`${quizPrompt}\n\nPREVIOUS ATTEMPT FAILED MACHINE VALIDATION:\n${feedback}\nRegenerate the COMPLETE JSON, fixing these issues. Minimum 5 valid questions across ${minTypes}+ types.`, 8000);
      totalUsage.input_tokens += retry.usage.input_tokens;
      totalUsage.output_tokens += retry.usage.output_tokens;
      result = retry.result;
      ({ valid, rejected } = collectQuestions(result, requestedTypes));
      if (!passes(valid)) {
        return json({ error: "AI output failed validation after retry", rejections: rejected.map((r) => r.reason).slice(0, 10) }, 502);
      }
    }

    // Resolve objective_ref → objective_id (soft: an unknown ref stays
    // unlinked rather than failing the refresh).
    const objByNumber = new Map(objList.map((o) => [String(o.objective_number).trim(), o.id]));
    let unlinkedCount = 0;
    for (const q of [...valid.standalone, ...valid.caseQs]) {
      const ref = typeof q.objective_ref === "string" || typeof q.objective_ref === "number"
        ? String(q.objective_ref).trim().replace(/^\[|\]$/g, "")
        : "";
      q.objective_id = objByNumber.get(ref) ?? null;
      if (objList.length && !q.objective_id) unlinkedCount++;
    }
    if (unlinkedCount) console.log(`refresh-quiz: ${unlinkedCount} question(s) had no resolvable objective_ref`);

    // Stage the proposal (BEFORE responding — connection-drop safe).
    const { data: draftRow, error: draftErr } = await sb
      .from("module_enhancement_drafts")
      .insert({
        module_id,
        kind: "quiz_refresh",
        status: "pending_review",
        payload: {
          module_id,
          module_title: mod.title,
          course_title: course.title,
          domain: domainName,
          instruction: typeof body.instruction === "string" ? body.instruction.trim() : "",
          quiz_questions: valid.standalone,
          case: valid.caseQs.length && valid.vignette
            ? { title: valid.caseTitle ?? "Case study", vignette: valid.vignette, questions: valid.caseQs }
            : null,
          generated_at: new Date().toISOString(),
        },
        requested_types: requestedTypes ?? [],
        model: OPUS_MODEL,
        tokens_in: totalUsage.input_tokens,
        tokens_out: totalUsage.output_tokens,
        created_by: user.id,
      })
      .select("id")
      .single();
    if (draftErr || !draftRow) return json({ error: `Failed to save quiz refresh: ${draftErr?.message}` }, 500);

    return json({
      target: "quiz_refresh",
      draft_id: draftRow.id,
      questions_count: valid.standalone.length + valid.caseQs.length,
      has_case: !!(valid.caseQs.length && valid.vignette),
      types_generated: [...new Set([...valid.standalone, ...valid.caseQs].map((q) => q.question_type))],
      rejected_count: rejected.length,
      objectives_in_module: objList.length,
      objectives_unlinked: unlinkedCount,
      model_used: OPUS_MODEL,
      usage: totalUsage,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("refresh-quiz error:", msg);
    return json({ error: msg }, 500);
  }
});

async function callOpus(
  prompt: string,
  maxTokens: number,
): Promise<{ result: Record<string, unknown>; usage: { input_tokens: number; output_tokens: number } }> {
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
  if (aiData.stop_reason === "max_tokens") {
    throw new Error(`Opus output hit max_tokens (${maxTokens}) — the quiz proposal was truncated. Try restricting question types.`);
  }
  const usage = {
    input_tokens: Number(aiData.usage?.input_tokens ?? 0),
    output_tokens: Number(aiData.usage?.output_tokens ?? 0),
  };
  const rawText: string = aiData.content?.[0]?.text ?? "{}";
  const cleaned = rawText.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
  for (const candidate of [cleaned, cleaned.match(/\{[\s\S]*\}/)?.[0] ?? ""]) {
    if (!candidate) continue;
    try {
      return { result: JSON.parse(candidate), usage };
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
