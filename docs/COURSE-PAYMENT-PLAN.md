# PLAN — Course Payments (whole-program purchase via Lemon Squeezy)

**Status:** In build (branch `feat/course-payments`)
**Date:** 2026-06-13
**Scope:** Academy/LMS only. Consulting payments are a separate later build.

---

## 1. Model (confirmed by client 2026-06-13)

- **No individual course sales.** A student buys the **whole diploma program** in one purchase.
- That purchase **unlocks every published course** in the catalog.
- On **completing the program**, the student earns a **certificate**.
- Payment processor: **Lemon Squeezy** (merchant of record), payout → **Wise (CAD)**. One-time charge, not a subscription.
- Credentials (store ID, variant ID, API key, webhook secret) arrive **after the client registers** the LS store. The code is built now with those as config/secrets; it goes live when the secrets are set.

## 2. Lemon Squeezy onboarding — what the client must do (answer to "does it need phone verification?")

LS verification is **government-ID + KYC/KYB based, not a phone-verification gate.** To activate the store and receive payouts the client must:
1. **Create the store** and **verify identity** — Settings → General → "Verify your identity": provide personal info + **upload a photo of a government-issued ID**. (Re-verification may be requested periodically for AML/regulatory compliance.)
2. Pass LS's **KYC/KYB review** — they review the store + products against their acceptable-use policy. ⚠️ **Confirm pharmacy/medication content is allowed** (courses are low-risk; flag the consulting product separately later).
3. Add **payout details** — bank/Wise account (CAD) and **tax form** (a non-US seller completes a **W-8BEN/W-8BEN-E**, since LS/Stripe is US-based).
4. **Account security** uses 2FA (authenticator/email). A phone number may be requested for security/2FA but the *identity* check is the ID document, not an SMS gate.
> Source: docs.lemonsqueezy.com/help/getting-started/verify-your-identity + activate-your-store.

**What we need from the client once registered:** Store ID, the **Diploma variant ID**, an **API key** (Settings → API), and a **webhook signing secret** (we create the webhook → they paste the secret). Plus the final **price**.

## 3. Architecture

### 3.1 New tables (additive migration)

- **`programs`** — the sellable program(s). Columns: `id`, `slug` (unique, e.g. `diploma`), `title`, `description`, `price_usd_cents`, `ls_store_id`, `ls_variant_id`, `active`, timestamps. Seed one `diploma` row; LS ids null until the client registers. RLS: public read of active programs; admin write.
- **`program_access`** — the entitlement. `id`, `user_id` (fk auth.users), `program` (default `diploma`), `status` (`active|refunded|revoked|comp`), `source` (`lemonsqueezy|comp`), `ls_order_id`, `ls_customer_id`, `granted_at`, `revoked_at`, timestamps, **unique(user_id, program)**. RLS: user reads own; admin all; **writes only via SECURITY DEFINER RPCs** (webhook has no user JWT).
- **`ls_webhook_events`** — idempotency + audit. `id`, `event_id` (unique dedupe key), `event_name`, `ls_order_id`, `payload jsonb`, `status`, `error`, `received_at`. Admin read.
- **`program_certificates`** — `id`, `user_id`, `program`, `certificate_number` (unique), `issued_at`, **unique(user_id, program)**. RLS: user reads own; admin all; issue via RPC.

### 3.2 SECURITY DEFINER RPCs (bypass RLS safely; webhook has no user context)

- **`apply_ls_order(event_id, event_name, user_id, email, order_id, customer_id, program, refunded)`** — idempotent (insert `ls_webhook_events`, skip if seen). `order_created` → upsert `program_access` active. `order_refunded` → set status `refunded`. Returns JSON.
- **`grant_program_access_comp(p_user_id, p_program)`** — `is_admin()`-gated comp grant (for staff/testers/manual sales).
- **`issue_program_certificate(p_user_id, p_program)`** — issues a cert (idempotent) once completion is confirmed.

### 3.3 Edge functions

- **`ls-webhook`** (no JWT; LS calls it): read **raw body**, verify **HMAC-SHA256 `X-Signature`** against `LS_WEBHOOK_SECRET`, parse, pull `meta.event_name` + `meta.custom_data.user_id` + order fields, call `apply_ls_order` via service role. Returns 200 fast; 401 on bad signature. `verify_jwt = false` (custom auth via signature).
- **`create-ls-checkout`** (admin/authed user): takes the signed-in user, calls LS API `POST /v1/checkouts` with `checkout_data.custom.user_id`, `checkout_data.email`, `product_options.redirect_url = <welcome>`, variant from `programs.ls_variant_id`; returns the checkout `url`. Keeps the LS API key server-side. Fallback if no API key: build a hosted URL `…/checkout/buy/{variant}?checkout[custom][user_id]=…&checkout[email]=…`.

### 3.4 Client + UI

- **admin-api:** `getMyProgramAccess()`, `fetchProgram(slug)`, `startDiplomaCheckout()` (calls `create-ls-checkout`, redirects), `grantComp(userId)` (admin), `fetchAccessList()` (admin).
- **Access gate:** a `useProgramAccess()` hook → `{ hasAccess, loading }`. `hasAccess = isAdmin || active program_access`. CoursePlayer content + "Start learning" gated; without access show a **Paywall** ("Unlock the full diploma — $X" → `startDiplomaCheckout()`).
- **Welcome/success page** (`/welcome?purchase=success`): polls `getMyProgramAccess()` for a few seconds (webhook lands within ~1–2s) → "You're in" → into the catalog.
- **Admin:** a small "Program access" panel — comp-grant a user, list who has access. (Lightweight; can grow.)

### 3.5 Access semantics / safety

- **Admins always bypass** the paywall (`is_admin()`).
- Adding the gate must not silently lock current testers: comp-grant is available, and the gate only blocks *non-admin* users without access. No existing data is modified.
- All DB ops additive; no destructive changes. Row counts verified before/after the migration.

## 4. Env / secrets (set after client registers)

Supabase function secrets: `LS_WEBHOOK_SECRET`, `LS_API_KEY`, `LS_STORE_ID`, plus reuse `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` / `SUPABASE_ANON_KEY`. The `programs.ls_variant_id` + price are stored in the DB row (no redeploy to change price). LS dashboard: create product+variant (the Diploma), set `redirect_url`, create a webhook → callback `https://<project>.functions.supabase.co/ls-webhook`, events `order_created`,`order_refunded`, paste the signing secret into `LS_WEBHOOK_SECRET`.

## 5. Build phases (incremental commits)

1. ✅ Plan saved.
2. Additive migration: `programs`, `program_access`, `ls_webhook_events`, `program_certificates` + the 3 RPCs. Apply to prod; verify counts.
3. Edge functions `ls-webhook` + `create-ls-checkout` (env-gated). Deploy.
4. Client helpers + `useProgramAccess` hook + Paywall + CoursePlayer gate + welcome page + admin comp-grant.
5. Verify (`tsc`/`build`, simulate a signed webhook locally, RPC tests), env checklist, progress.md, PR.

> Certificate-on-completion (issue `program_certificates` when all core courses are complete + a certificate view) is a tightly-scoped **follow-up phase** — the table + RPC land in step 2 so it's ready; the completion rule + UI ship next.

## 6. Acceptance criteria

- A simulated **signed** `order_created` with `custom_data.user_id` grants `program_access` active (idempotent on resend); `order_refunded` flips it to `refunded`. Bad signature → 401, no write.
- A non-admin without access sees the paywall; with access (LS or comp) all published courses open. Admins always bypass.
- `create-ls-checkout` returns a valid checkout URL carrying the user_id (verified once real LS creds exist).
- No live data lost; row counts ≥ baseline after the migration.
