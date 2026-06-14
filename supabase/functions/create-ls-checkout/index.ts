// ============================================================================
// create-ls-checkout — creates a Lemon Squeezy checkout for the signed-in user.
//
// Keeps the LS API key server-side. Attaches checkout_data.custom.user_id so the
// ls-webhook can tie the resulting order back to this Supabase user, prefills the
// email, and sets the post-purchase redirect. Returns { url } to redirect to.
// Deploy with JWT verification ON (the caller must be a signed-in user).
// ============================================================================

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const LS_API_KEY = Deno.env.get("LS_API_KEY") ?? "";
const REDIRECT_URL = Deno.env.get("LS_REDIRECT_URL") ?? "https://academy.pixopharm.com/welcome?purchase=success";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors() });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);
  if (!LS_API_KEY) return json({ error: "Checkout not configured (LS_API_KEY unset)" }, 503);

  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) return json({ error: "Unauthorized" }, 401);

  const sb = createClient(SUPABASE_URL, ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: { user }, error: userErr } = await sb.auth.getUser(authHeader.slice(7));
  if (userErr || !user) return json({ error: "Unauthorized" }, 401);

  const body = await req.json().catch(() => ({}));
  const slug = (body.program as string) ?? "diploma";

  // Program → LS store + variant (RLS allows reading active programs)
  const { data: program, error: pErr } = await sb
    .from("programs")
    .select("slug, title, ls_store_id, ls_variant_id, active")
    .eq("slug", slug)
    .single();
  if (pErr || !program) return json({ error: `Program not found: ${slug}` }, 404);
  if (!program.active) return json({ error: "Program is not on sale" }, 409);
  if (!program.ls_store_id || !program.ls_variant_id) {
    return json({ error: "Program has no Lemon Squeezy store/variant configured yet" }, 503);
  }

  // Create the checkout via the LS API
  const resp = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
    method: "POST",
    headers: {
      "Accept": "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      "Authorization": `Bearer ${LS_API_KEY}`,
    },
    body: JSON.stringify({
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            email: user.email ?? undefined,
            custom: { user_id: user.id, program: slug },
          },
          product_options: { redirect_url: REDIRECT_URL },
        },
        relationships: {
          store: { data: { type: "stores", id: String(program.ls_store_id) } },
          variant: { data: { type: "variants", id: String(program.ls_variant_id) } },
        },
      },
    }),
  });

  if (!resp.ok) {
    const text = await resp.text();
    console.error("LS checkout error", resp.status, text.slice(0, 300));
    return json({ error: `Lemon Squeezy error (${resp.status})` }, 502);
  }

  const data = await resp.json();
  const url = data?.data?.attributes?.url as string | undefined;
  if (!url) return json({ error: "No checkout URL returned" }, 502);

  return json({ url });
});

function cors() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
}
function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...cors(), "Content-Type": "application/json" },
  });
}
