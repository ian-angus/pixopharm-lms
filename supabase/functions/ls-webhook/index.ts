// ============================================================================
// ls-webhook — receives Lemon Squeezy webhooks and grants/revokes program access.
//
// Auth is by HMAC signature (NOT a Supabase JWT), so deploy with --no-verify-jwt.
// Flow: read RAW body → verify X-Signature (HMAC-SHA256 of body with the signing
// secret) → pull event_name + meta.custom_data.user_id + order fields → call the
// SECURITY DEFINER RPC apply_ls_order (idempotent grant on order_created, revoke
// on order_refunded). Nothing is trusted until the signature checks out.
// ============================================================================

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const LS_WEBHOOK_SECRET = Deno.env.get("LS_WEBHOOK_SECRET") ?? "";

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);
  if (!LS_WEBHOOK_SECRET) return json({ error: "Webhook not configured (LS_WEBHOOK_SECRET unset)" }, 503);
  if (!SUPABASE_URL || !SERVICE_KEY) return json({ error: "Missing Supabase env" }, 500);

  // 1. RAW body (must verify against the exact bytes Lemon Squeezy signed)
  const raw = await req.text();
  const signature = req.headers.get("X-Signature") ?? "";
  if (!signature || !(await verifySignature(raw, signature, LS_WEBHOOK_SECRET))) {
    return json({ error: "Invalid signature" }, 401);
  }

  // 2. Parse
  let body: LsWebhook;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: "Unparseable body" }, 400);
  }

  const eventName = body.meta?.event_name ?? req.headers.get("X-Event-Name") ?? "unknown";
  const userId = body.meta?.custom_data?.user_id ?? null;
  const order = body.data;
  const orderId = order?.id ?? null;
  const attrs = order?.attributes ?? {};
  const email = (attrs.user_email as string) ?? null;
  const customerId = attrs.customer_id != null ? String(attrs.customer_id) : null;
  const refunded = eventName === "order_refunded" || attrs.refunded === true;

  // Only act on order events; ack everything else so LS doesn't keep retrying.
  if (!eventName.startsWith("order_")) {
    return json({ ok: true, ignored: eventName });
  }

  const eventId = `${eventName}:${orderId ?? "none"}`;

  // 3. Apply via SECURITY DEFINER RPC (service-role client)
  const sb = createClient(SUPABASE_URL, SERVICE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await sb.rpc("apply_ls_order", {
    p_event_id: eventId,
    p_event_name: eventName,
    p_user_id: userId,
    p_email: email,
    p_order_id: orderId ? String(orderId) : null,
    p_customer_id: customerId,
    p_program: (body.meta?.custom_data?.program as string) ?? "diploma",
    p_refunded: refunded,
    p_payload: body as unknown as Record<string, unknown>,
  });
  if (error) {
    console.error("ls-webhook apply_ls_order error:", error.message);
    return json({ error: error.message }, 500);
  }

  console.log(`ls-webhook: ${eventName} order=${orderId} →`, JSON.stringify(data));
  return json({ ok: true, result: data });
});

interface LsWebhook {
  meta?: { event_name?: string; custom_data?: { user_id?: string; program?: string } };
  data?: { id?: string | number; attributes?: Record<string, unknown> };
}

// HMAC-SHA256 hex of `raw` with `secret`, timing-safe compared to `signature`.
async function verifySignature(raw: string, signature: string, secret: string): Promise<boolean> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"],
  );
  const mac = await crypto.subtle.sign("HMAC", key, enc.encode(raw));
  const hex = [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, "0")).join("");
  return timingSafeEqual(hex, signature.toLowerCase().trim());
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
