import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders() });
  }

  // Fail fast if required env vars are missing
  if (!ANTHROPIC_API_KEY || !SUPABASE_URL || !(SUPABASE_ANON_KEY || SUPABASE_SERVICE_KEY)) {
    const missing = [
      !ANTHROPIC_API_KEY && "ANTHROPIC_API_KEY",
      !SUPABASE_URL && "SUPABASE_URL",
      !(SUPABASE_ANON_KEY || SUPABASE_SERVICE_KEY) && "SUPABASE_ANON_KEY/SUPABASE_SERVICE_ROLE_KEY",
    ].filter(Boolean).join(", ");
    console.error(`analyze-survey: missing env vars: ${missing}`);
    return json({ error: `Missing required environment variables: ${missing}` }, 500);
  }

  // The service-role key in this project no longer bypasses RLS (legacy key
  // rotated to the new API-key system). Run as the calling admin instead —
  // RLS grants survey reads via is_admin(). Also closes the previous hole
  // where this function had no auth check at all.
  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) return json({ error: "Unauthorized" }, 401);
  const token = authHeader.slice(7);

  const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY || SUPABASE_SERVICE_KEY, {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: { user }, error: userErr } = await sb.auth.getUser(token);
  if (userErr || !user) return json({ error: "Unauthorized" }, 401);
  const { data: callerProfile } = await sb.from("profiles").select("role").eq("id", user.id).single();
  console.log(`analyze-survey: caller_id=${user.id} role=${callerProfile?.role ?? "none"}`);
  if (callerProfile?.role !== "admin") return json({ error: "Forbidden — admin only" }, 403);

  try {
    const { course_id } = await req.json();
    if (!course_id) throw new Error("course_id required");

    const { data: rows, error } = await sb
      .from("course_surveys")
      .select("overall_rating,content_clarity,relevance,would_recommend,difficulty,liked_most,to_improve")
      .eq("course_id", course_id);

    if (error) throw error;
    if (!rows || rows.length === 0) {
      return json({ summary: "No responses yet.", recommendations: [] });
    }

    const openTexts = rows
      .filter((r) => r.liked_most || r.to_improve)
      .map((r, i) =>
        `Response ${i + 1}:\n  Liked: ${r.liked_most || "(none)"}\n  Improve: ${r.to_improve || "(none)"}`
      )
      .join("\n\n");

    const avgOverall = (rows.reduce((s, r) => s + r.overall_rating, 0) / rows.length).toFixed(1);
    const avgContentClarity = (rows.reduce((s, r) => s + (r.content_clarity ?? 0), 0) / rows.length).toFixed(1);
    const avgRelevance = (rows.reduce((s, r) => s + (r.relevance ?? 0), 0) / rows.length).toFixed(1);
    const recommendPct = Math.round((rows.filter((r) => r.would_recommend).length / rows.length) * 100);

    const prompt = `You are an education quality analyst for Pixopharm, a Caribbean pharmacy training platform.

Here is student survey data for a course (${rows.length} responses):
- Average overall rating: ${avgOverall}/5
- Average content clarity: ${avgContentClarity}/5
- Average relevance: ${avgRelevance}/5
- Would recommend: ${recommendPct}%
- Difficulty: ${rows.map((r) => r.difficulty).join(", ")}

Open-text feedback:
${openTexts || "(no open-text responses)"}

Provide:
1. A 2-3 sentence theme summary of what students said (common themes, overall sentiment)
2. A list of 3-5 specific, actionable improvement recommendations for the course author

Respond ONLY with valid JSON in this exact format:
{"summary": "...", "recommendations": ["...", "...", "..."]}`;

    const anthropicResp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-3-haiku-20240307",
        max_tokens: 512,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!anthropicResp.ok) {
      const err = await anthropicResp.text();
      throw new Error(`Claude API error (${anthropicResp.status}): ${err}`);
    }

    const aiData = await anthropicResp.json();
    const text = aiData.content?.[0]?.text ?? "{}";

    // Parse JSON from Claude's response — strip markdown fences if present
    const cleaned = text.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim();
    const parsed = JSON.parse(cleaned);

    // Normalize response shape before returning
    const summary = typeof parsed.summary === "string" && parsed.summary.trim()
      ? parsed.summary.trim()
      : "Analysis complete.";
    const recommendations = Array.isArray(parsed.recommendations)
      ? parsed.recommendations
      : [];

    return json({ summary, recommendations });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("analyze-survey error:", msg);
    return json({ summary: `Analysis failed: ${msg}`, recommendations: [] });
  }
});

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
