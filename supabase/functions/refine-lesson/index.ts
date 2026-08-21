// ============================================================================
// refine-lesson — AI refinement of ONE existing lesson, staged for review.
//
// Input:  { lesson_id, instruction }
// Output: { draft_id, ... } — the proposal is written to lesson_revision_drafts
//         (status pending_review) BEFORE the HTTP response, so the known ~150s
//         gateway drop can never lose a result. Nothing touches lessons.content
//         until an admin calls apply_lesson_revision().
//
// Safety contract (PRD docs/AI-CONTENT-REFINEMENT-PRD.md):
//   - the model receives the CURRENT content and must return the COMPLETE
//     revised block array (all 13 ContentBlock shapes machine-validated)
//   - preservation-class blocks (video-placeholder, image-placeholder,
//     island-comparison, case-study, scenario-simulation) must survive the
//     round-trip VERBATIM unless the instruction targets them — checked
//     mechanically by canonical deep-equality, with one retry.
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

SUPPLY CHAIN CHALLENGES: Tropical heat (25–35°C year-round), frequent power outages,
  inter-island shipping delays, port customs, small island stock-out risks; FEFO/FIFO essential

TRADITIONAL MEDICINE: Cerasee (Momordica charantia), soursop leaf, fever grass (lemongrass),
  neem, aloe vera, bush tea — widely used, rarely disclosed to healthcare providers;
  significant drug interaction risk (e.g., cerasee + metformin, soursop + CNS drugs)

LANGUAGE: Predominantly English, but Creole, French, Dutch, Spanish present regionally

CLINICAL REALITY: Pharmacy technicians are often first healthcare contact; extremely high
  patient-to-staff ratios; strong role in chronic disease management (HTN, DM, asthma, HIV)
`;

// Block types the TipTap editor cannot round-trip — the model must preserve
// these byte-identical unless the instruction explicitly targets them.
const PRESERVE_TYPES = new Set([
  "video-placeholder", "image-placeholder", "island-comparison",
  "case-study", "scenario-simulation",
]);

type Block = Record<string, unknown>;

// ── Validate one block against the 13 ContentBlock shapes ───────────────────
function validateBlock(b: unknown): string | null {
  if (!b || typeof b !== "object") return "block is not an object";
  const block = b as Block;
  const t = block.type;
  const str = (v: unknown) => typeof v === "string" && v.length > 0;
  const strOk = (v: unknown) => v === undefined || typeof v === "string";
  const arr = (v: unknown) => Array.isArray(v);
  switch (t) {
    case "heading":
      return [2, 3, 4].includes(block.level as number) && str(block.text) ? null : "heading: needs level 2|3|4 and text";
    case "text":
      return str(block.body) ? null : "text: needs body";
    case "callout":
      return ["info", "warning", "tip", "danger"].includes(block.variant as string) && str(block.title) && str(block.body)
        ? null : "callout: needs variant info|warning|tip|danger, title, body";
    case "list":
      return arr(block.items) && (block.items as unknown[]).length > 0 && (block.items as unknown[]).every((i) => typeof i === "string")
        ? null : "list: needs non-empty string items";
    case "table": {
      if (!arr(block.headers) || !(block.headers as unknown[]).every((h) => typeof h === "string")) return "table: headers must be strings";
      if (!arr(block.rows) || !(block.rows as unknown[]).every((r) => Array.isArray(r) && r.every((c) => typeof c === "string"))) return "table: rows must be string arrays";
      return null;
    }
    case "island-comparison":
      return str(block.title) && arr(block.islands) ? null : "island-comparison: needs title and islands[]";
    case "key-term":
      return str(block.term) && str(block.definition) ? null : "key-term: needs term and definition";
    case "case-study":
      return str(block.title) && str(block.scenario) && arr(block.questions) && str(block.discussion)
        ? null : "case-study: needs title, scenario, questions[], discussion";
    case "video-placeholder":
      return str(block.title) && strOk(block.duration) && strOk(block.description) ? null : "video-placeholder: needs title";
    case "image-placeholder":
      return str(block.alt) ? null : "image-placeholder: needs alt";
    case "divider":
      return null;
    case "knowledge-check":
      return str(block.question) && arr(block.options) && (block.options as unknown[]).length >= 2 &&
        Number.isInteger(block.correctIndex) && str(block.explanation)
        ? null : "knowledge-check: needs question, options[2+], correctIndex, explanation";
    case "scenario-simulation":
      return str(block.title) && str(block.description) && arr(block.nodes) ? null : "scenario-simulation: needs title, description, nodes[]";
    default:
      return `unknown block type "${String(t)}"`;
  }
}

// Canonical JSON (sorted keys) so key-order differences don't fail preservation.
function canonical(v: unknown): string {
  if (Array.isArray(v)) return "[" + v.map(canonical).join(",") + "]";
  if (v && typeof v === "object") {
    const o = v as Record<string, unknown>;
    return "{" + Object.keys(o).sort().map((k) => JSON.stringify(k) + ":" + canonical(o[k])).join(",") + "}";
  }
  return JSON.stringify(v);
}

/** Preservation-class input blocks missing (verbatim) from the output. */
function missingPreserved(input: Block[], output: Block[]): Block[] {
  const outSet = new Set(output.filter((b) => PRESERVE_TYPES.has(b.type as string)).map(canonical));
  return input.filter((b) => PRESERVE_TYPES.has(b.type as string) && !outSet.has(canonical(b)));
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders() });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);
  // The caller-scoped client must NEVER fall back to the service-role key —
  // require the anon key and fail fast (Coderabbit, PR #25).
  if (!ANTHROPIC_API_KEY || !SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return json({ error: "Missing env vars" }, 500);
  }

  // Validate caller is an authenticated admin (same pattern as enhance-module:
  // the data client runs AS the admin; RLS is_admin() gates all reads/writes).
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
  console.log(`refine-lesson: caller_id=${user.id} role=${callerProfile?.role ?? "none"}`);
  if (callerProfile?.role !== "admin") return json({ error: "Forbidden" }, 403);

  try {
    const body = await req.json();
    const lesson_id: string | undefined = body.lesson_id;
    const instruction: string = typeof body.instruction === "string" ? body.instruction.trim() : "";
    if (!lesson_id) return json({ error: "lesson_id is required" }, 400);
    if (instruction.length < 5) return json({ error: "instruction is required (min 5 chars)" }, 400);

    // ── Lesson + module/course/domain context ────────────────────────────────
    const { data: lesson, error: lErr } = await sb
      .from("lessons")
      .select("id, title, duration_minutes, content, module_id, modules(title, courses(title, domains(name)))")
      .eq("id", lesson_id)
      .single();
    if (lErr || !lesson) return json({ error: `Lesson not found: ${lErr?.message}` }, 404);

    const mod = lesson.modules as unknown as { title: string; courses: { title: string; domains: { name: string } | null } | null };
    const currentBlocks: Block[] = Array.isArray(lesson.content) ? (lesson.content as Block[]) : [];
    if (currentBlocks.length === 0) {
      return json({ error: "This lesson has no content yet — use Enhance to generate it first, then Refine." }, 400);
    }

    const preservedCount = currentBlocks.filter((b) => PRESERVE_TYPES.has(b.type as string)).length;

    const basePrompt = `${CARIBBEAN_CONTEXT}

You are refining ONE lesson of the PixoPharm course "${mod?.courses?.title ?? "Unknown"}"${mod?.courses?.domains?.name ? ` (curriculum domain "${mod.courses.domains.name}")` : ""}, module "${mod?.title ?? ""}".

LESSON: "${lesson.title}" — current target ${lesson.duration_minutes ?? 25} min.

CURRENT CONTENT (JSON array of content blocks — this is the material to refine):
${JSON.stringify(currentBlocks)}

ADMIN'S REFINEMENT INSTRUCTION:
"${instruction}"

RULES (machine-enforced — violations are rejected):
1. Return the COMPLETE revised lesson as a JSON block array. Never a fragment, never a diff, never commentary.
2. PRESERVE VERBATIM every block you were not asked to change — copy it into the output EXACTLY as given. This is ABSOLUTE for these block types unless the instruction explicitly targets them: video-placeholder, image-placeholder, island-comparison, case-study, scenario-simulation. (This lesson contains ${preservedCount} such block${preservedCount === 1 ? "" : "s"}.)
3. Use ONLY these block shapes:
  {"type":"heading","level":2|3|4,"text":"..."}
  {"type":"text","body":"A FULL 4–7 sentence teaching paragraph. Clinically accurate, Caribbean-specific, naming real drugs, doses, regulations and islands."}
  {"type":"callout","variant":"info"|"warning"|"tip"|"danger","title":"...","body":"2–4 sentences"}
  {"type":"list","ordered":true|false,"items":["...","..."]}
  {"type":"table","headers":["..."],"rows":[["..."]]}   (cross-island comparisons use REAL data)
  {"type":"island-comparison","title":"...","description":"...","islands":[{"name":"...","flag":"🇯🇲","details":["..."]}]}
  {"type":"key-term","term":"...","definition":"Precise 1–2 sentence definition with Caribbean clinical context."}
  {"type":"case-study","title":"...","scenario":"...","questions":["..."],"discussion":"..."}
  {"type":"video-placeholder","title":"...","duration":"X min","description":"..."}
  {"type":"image-placeholder","alt":"...","caption":"..."}
  {"type":"divider"}
  {"type":"knowledge-check","question":"...","options":["..."],"correctIndex":0,"explanation":"...","hint":"..."}
  {"type":"scenario-simulation","title":"...","description":"...","nodes":[...]}
4. Content quality bar: full teaching paragraphs, real Caribbean regulations/formularies/drugs, explain mechanisms and the technician's role. Never pad.
5. Set duration_minutes to an HONEST reading/study time for what you actually return (~180–200 words/min).

Return ONLY valid JSON:
{"lesson": {"duration_minutes": <int>, "content": [ ...complete revised block array... ]}}`;

    // ── Generate with validation + one retry ─────────────────────────────────
    const totalUsage = { input_tokens: 0, output_tokens: 0 };

    const attempt = async (prompt: string) => {
      const res = await callOpus(prompt, 32000);
      totalUsage.input_tokens += res.usage.input_tokens;
      totalUsage.output_tokens += res.usage.output_tokens;
      const lessonOut = (res.result as { lesson?: { duration_minutes?: number; content?: unknown[] } }).lesson;
      const blocks: Block[] = Array.isArray(lessonOut?.content) ? (lessonOut!.content as Block[]) : [];
      const problems: string[] = [];
      if (blocks.length === 0) problems.push("content array is empty or missing");
      blocks.forEach((blk, i) => {
        const err = validateBlock(blk);
        if (err) problems.push(`block ${i}: ${err}`);
      });
      const missing = missingPreserved(currentBlocks, blocks);
      if (missing.length > 0) {
        problems.push(`${missing.length} preservation-class block(s) were altered or dropped — they must be copied verbatim: ${missing.map((m) => String(m.type)).join(", ")}`);
      }
      return { blocks, duration: lessonOut?.duration_minutes, problems };
    };

    let out = await attempt(basePrompt);
    if (out.problems.length > 0) {
      console.log(`refine-lesson: retrying; problems:\n${out.problems.join("\n")}`);
      out = await attempt(`${basePrompt}

PREVIOUS ATTEMPT FAILED MACHINE VALIDATION:
${out.problems.map((p) => `- ${p}`).join("\n")}
Regenerate the COMPLETE JSON fixing these issues. Preservation-class blocks must be copied character-for-character from the CURRENT CONTENT above.`);
      if (out.problems.length > 0) {
        return json({ error: "AI output failed validation after retry", problems: out.problems.slice(0, 10) }, 502);
      }
    }

    // Heads-up flag for the reviewer if the lesson shrank sharply without being asked to.
    const shrank = out.blocks.length < currentBlocks.length * 0.4 &&
      !/short|condense|trim|reduce|remove|cut|simpl/i.test(instruction);

    // ── Stage the proposal (BEFORE responding — connection-drop safe) ────────
    const { data: draftRow, error: draftErr } = await sb
      .from("lesson_revision_drafts")
      .insert({
        lesson_id,
        instruction,
        status: "pending_review",
        revised_content: out.blocks,
        revised_duration: Number.isFinite(Number(out.duration)) ? Math.round(Number(out.duration)) : null,
        model: OPUS_MODEL,
        tokens_in: totalUsage.input_tokens,
        tokens_out: totalUsage.output_tokens,
        created_by: user.id,
      })
      .select("id")
      .single();
    if (draftErr || !draftRow) return json({ error: `Failed to save revision: ${draftErr?.message}` }, 500);

    return json({
      draft_id: draftRow.id,
      lesson_id,
      blocks_before: currentBlocks.length,
      blocks_after: out.blocks.length,
      duration_minutes: out.duration ?? null,
      preserved_blocks: preservedCount,
      shrink_warning: shrank,
      model_used: OPUS_MODEL,
      usage: totalUsage,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("refine-lesson error:", msg);
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
    throw new Error(`Opus output hit max_tokens (${maxTokens}) — the revised lesson is too long to return in one response. Try a narrower instruction.`);
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
