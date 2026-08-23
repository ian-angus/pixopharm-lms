// ============================================================================
// generate-flashcards — proposes a study DECK for one module, grounded in the
// module's CURRENT lesson content, staged for review.
//
// Input:  { module_id, instruction?, count?, types?, avoid? }
// Output: { draft_id, ... } — written to module_enhancement_drafts with
//         kind='flashcards' (status pending_review) BEFORE the HTTP response,
//         so the known ~150s gateway drop can never lose a result. Nothing
//         touches live flashcards until an admin calls
//         apply_flashcard_refresh(draft_id, keep_ids) — which snapshots the
//         current deck for one-click revert_flashcard_refresh().
//
// Standalone by design (sibling of refresh-quiz): the critical enhance-module
// pipeline stays untouched. Helper duplication is deliberate.
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

const CARD_TYPES = [
  "term_definition", "brand_generic", "drug_stem",
  "cloze", "calculation", "island_compare",
] as const;
type CardType = (typeof CARD_TYPES)[number];

function cardMixForDomain(domainName: string | null): string {
  const d = (domainName ?? "").toLowerCase();
  if (d.includes("calculation") || d.includes("compounding")) {
    return "Emphasise calculation cards (short numeric prompts with answer/tolerance/unit) and cloze cards blanking formula terms; add term_definition for units and processes.";
  }
  if (d.includes("law") || d.includes("regulation")) {
    return "Emphasise island_compare cards (island ↔ statute/schedule differences) and term_definition (legal terms); add cloze on statute names.";
  }
  if (d.includes("clinical") || d.includes("capstone") || d.includes("certification")) {
    return "Emphasise cloze (clinical facts), brand_generic (regionally common brands), and term_definition; include drug_stem where drug classes appear.";
  }
  if (d.includes("foundation") || d.includes("terminology") || d.includes("learning")) {
    return "Emphasise term_definition (from key terms), drug_stem, and brand_generic; add a few cloze cards for abbreviations.";
  }
  return "Use a balanced mix across term_definition, cloze, drug_stem, brand_generic, plus calculation and island_compare where the content supports them.";
}

interface GenCard {
  card_type?: string;
  front?: string;
  back?: string;
  extra?: Record<string, unknown> | null;
  /** 1-based index into the numbered lessons of the grounding digest. */
  lesson_ref?: unknown;
  lesson_id?: string | null;
  source?: Record<string, unknown>;
}

function validateCard(c: GenCard): string | null {
  const t = c.card_type as CardType;
  if (!CARD_TYPES.includes(t)) return `card_type "${c.card_type}" not allowed`;
  if (!c.front || typeof c.front !== "string" || c.front.trim().length < 2 || c.front.length > 300) {
    return "front missing, too short or over 300 chars";
  }
  if (!c.back || typeof c.back !== "string" || c.back.trim().length < 2 || c.back.length > 700) {
    return "back missing, too short or over 700 chars";
  }
  const ex = (c.extra ?? {}) as Record<string, unknown>;
  if (t === "cloze") {
    if (!c.front.includes("___")) return "cloze: front must contain ___ where the blank goes";
    if (typeof ex.answer !== "string" || ex.answer.trim().length === 0) return "cloze: extra.answer must be the blanked word/phrase";
  }
  if (t === "calculation") {
    if (typeof ex.answer !== "number" || !Number.isFinite(ex.answer)) return "calculation: extra.answer must be a finite number";
    if (typeof ex.unit !== "string" || ex.unit.trim().length === 0) return "calculation: extra.unit is required";
    if (ex.tolerance !== undefined && (typeof ex.tolerance !== "number" || !Number.isFinite(ex.tolerance) || ex.tolerance < 0)) {
      return "calculation: extra.tolerance must be a number >= 0";
    }
  }
  return null;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders() });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);
  // The caller-scoped client must NEVER fall back to the service-role key.
  if (!ANTHROPIC_API_KEY || !SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return json({ error: "Missing env vars" }, 500);
  }

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
  console.log(`generate-flashcards: caller_id=${user.id} role=${callerProfile?.role ?? "none"}`);
  if (callerProfile?.role !== "admin") return json({ error: "Forbidden" }, 403);

  try {
    const body = await req.json();
    const module_id: string | undefined = body.module_id;
    if (!module_id) return json({ error: "module_id is required" }, 400);

    const requestedTypes: CardType[] | null = Array.isArray(body.types)
      ? (body.types as unknown[]).filter((t): t is CardType => CARD_TYPES.includes(t as CardType))
      : null;
    if (Array.isArray(body.types) && (!requestedTypes || requestedTypes.length === 0)) {
      return json({ error: `types must be a non-empty subset of: ${CARD_TYPES.join(", ")}` }, 400);
    }

    // Optional exact card count (1 = single-card reroll). Default: 15–25.
    const targetCount: number | null =
      Number.isInteger(body.count) && body.count >= 1 && body.count <= 40 ? body.count : null;
    const avoid: string[] = Array.isArray(body.avoid)
      ? (body.avoid as unknown[]).filter((a): a is string => typeof a === "string" && a.trim().length > 0)
          .slice(0, 60).map((a) => a.trim().slice(0, 200))
      : [];

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

    const withContent = (lessons ?? []).filter(
      (l) => Array.isArray(l.content) && (l.content as unknown[]).length > 0
    );
    if (withContent.length === 0) {
      return json({ error: "This module has no lesson content to ground a deck — enhance it first." }, 400);
    }

    // Same digest as refresh-quiz; key-term blocks are the prime card material.
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
      ? `\nADMIN FOCUS FOR THIS DECK: "${body.instruction.trim()}"`
      : "";

    const avoidSection = avoid.length
      ? `\nDO NOT duplicate or closely paraphrase any of these existing card fronts:\n${avoid.map((a) => `- ${a}`).join("\n")}\n`
      : "";

    const countLine = targetCount
      ? `EXACTLY ${targetCount} card${targetCount === 1 ? "" : "s"}`
      : "15–25 cards";

    const prompt = `${CARIBBEAN_CONTEXT}

You are writing SPACED-REPETITION FLASHCARDS for module "${mod.title}" of the PixoPharm course "${course.title}"${domainName ? ` (curriculum domain "${domainName}")` : ""}.

CURRENT LESSON CONTENT — every card MUST be grounded in this material (never invent facts it doesn't teach). Lessons are numbered; each card must cite its lesson via "lesson_ref":
${grounding}
${focus}${avoidSection}
DECK — produce ${countLine}. ${requestedTypes ? `Use ONLY these card_type values: ${requestedTypes.join(", ")}.` : cardMixForDomain(domainName)}
Every KEY TERM in the content is a prime candidate for a term_definition card. Fronts are prompts a student recalls FROM (short); backs are the full answer with the clinical/regulatory why (max ~2 sentences).

CARD TYPE SCHEMAS (machine-validated — follow EXACTLY):
1. {"card_type":"term_definition","front":"Pharmacokinetics","back":"...definition + why it matters...","lesson_ref":1}
2. {"card_type":"drug_stem","front":"-olol","back":"Beta-blockers — atenolol, metoprolol... clinical note.","lesson_ref":2}
3. {"card_type":"brand_generic","front":"Panadol (common in T&T/Jamaica)","back":"paracetamol (acetaminophen) — counselling note.","lesson_ref":1}
4. {"card_type":"cloze","front":"Sentence with ___ where the missing word goes.","back":"Full sentence + why.","extra":{"answer":"missing word"},"lesson_ref":3}
5. {"card_type":"calculation","front":"500 mg in 250 mL — concentration in mg/mL?","back":"2 mg/mL. Worked reasoning in one sentence.","extra":{"answer":2,"tolerance":0,"unit":"mg/mL"},"lesson_ref":3}
6. {"card_type":"island_compare","front":"Diazepam scheduling: Jamaica vs Trinidad?","back":"Jamaica: ... · Trinidad: ... one-line takeaway.","lesson_ref":4}

Return ONLY valid JSON:
{ "cards": [ ...cards... ] }`;

    const minValid = targetCount !== null ? Math.max(1, targetCount - 2) : 10;
    const maxTok = targetCount !== null && targetCount <= 3 ? 2000 : 6000;

    const collect = (result: Record<string, unknown>) => {
      const raw = Array.isArray(result.cards) ? (result.cards as GenCard[]) : [];
      const valid: GenCard[] = [];
      const rejected: string[] = [];
      const seenFronts = new Set<string>();
      for (const c of raw) {
        if (requestedTypes && !requestedTypes.includes(c.card_type as CardType)) {
          rejected.push(`"${(c.front ?? "?").slice(0, 50)}": type "${c.card_type}" was not requested`);
          continue;
        }
        const err = validateCard(c);
        if (err) { rejected.push(`"${(c.front ?? "?").slice(0, 50)}": ${err}`); continue; }
        const key = c.front!.trim().toLowerCase();
        if (seenFronts.has(key)) { rejected.push(`"${c.front!.slice(0, 50)}": duplicate front`); continue; }
        seenFronts.add(key);
        // Resolve lesson_ref (1-based digest index) → lesson_id + provenance.
        const refNum = Number(c.lesson_ref);
        const lesson = Number.isInteger(refNum) && refNum >= 1 && refNum <= withContent.length
          ? withContent[refNum - 1] : null;
        c.lesson_id = lesson?.id ?? null;
        c.source = { lesson_title: lesson?.title ?? null, lesson_ref: lesson ? refNum : null };
        delete c.lesson_ref;
        valid.push(c);
      }
      return { valid, rejected };
    };

    const totalUsage = { input_tokens: 0, output_tokens: 0 };
    const first = await callOpus(prompt, maxTok);
    totalUsage.input_tokens += first.usage.input_tokens;
    totalUsage.output_tokens += first.usage.output_tokens;
    let { valid, rejected } = collect(first.result);
    if (valid.length < minValid) {
      const feedback = rejected.map((r) => `- ${r}`).join("\n") || "- too few valid cards";
      console.log(`generate-flashcards: retrying; problems:\n${feedback}`);
      const retry = await callOpus(`${prompt}\n\nPREVIOUS ATTEMPT FAILED MACHINE VALIDATION:\n${feedback}\nRegenerate the COMPLETE JSON, fixing these issues. Minimum ${minValid} valid card${minValid === 1 ? "" : "s"}.`, maxTok);
      totalUsage.input_tokens += retry.usage.input_tokens;
      totalUsage.output_tokens += retry.usage.output_tokens;
      ({ valid, rejected } = collect(retry.result));
      if (valid.length < minValid) {
        return json({ error: "AI output failed validation after retry", rejections: rejected.slice(0, 10) }, 502);
      }
    }

    // Stage the proposal (BEFORE responding — connection-drop safe).
    const { data: draftRow, error: draftErr } = await sb
      .from("module_enhancement_drafts")
      .insert({
        module_id,
        kind: "flashcards",
        status: "pending_review",
        payload: {
          module_id,
          module_title: mod.title,
          course_title: course.title,
          domain: domainName,
          instruction: typeof body.instruction === "string" ? body.instruction.trim() : "",
          cards: valid,
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
    if (draftErr || !draftRow) return json({ error: `Failed to save deck proposal: ${draftErr?.message}` }, 500);

    return json({
      target: "flashcards",
      draft_id: draftRow.id,
      cards_count: valid.length,
      types_generated: [...new Set(valid.map((c) => c.card_type))],
      rejected_count: rejected.length,
      model_used: OPUS_MODEL,
      usage: totalUsage,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("generate-flashcards error:", msg);
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
    throw new Error(`Opus output hit max_tokens (${maxTokens}) — the deck proposal was truncated. Try a smaller count.`);
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
