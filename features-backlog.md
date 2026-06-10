# Pixopharm LMS — Feature Backlog

> Documented: 2026-04-08. Build these out one at a time — each is a separate PR branch.

---

## Feature 1: Course Content Protection

**Goal:** Prevent casual theft of course intellectual property.

**Scope:**
- Disable text selection and copy/paste on all lesson content (`user-select: none` + block `copy`/`cut` events)
- Block printing via `@media print { display: none }` on content areas
- Disable right-click context menu on lesson content
- Diagonal watermark overlay showing a **pseudonymous token (short user ID + timestamp)** across all lesson content — screenshots stay traceable server-side without exposing PII in the content itself
- Note: true screen recording prevention is not possible in a browser; watermarking is the effective deterrent

**Affected components:** `CoursePlayer`, lesson content renderer

---

## Feature 2: AI Course Generator

**Goal:** Let admins generate a full, Caribbean-tailored course using Claude with minimal manual effort.

**Admin inputs (form in admin dashboard):**
- Course title / topic (required)
- Skill level: Beginner / Intermediate / Advanced (required)
- Duration in weeks (required)
- Target jurisdiction: e.g. Trinidad, Jamaica, Barbados, All CARICOM (optional)
- Specific focus areas or learning objectives (optional)

**Claude generates (auto-tailored to Caribbean pharmacy context):**
- Full module structure
- Lesson content per module (TipTap-compatible rich text)
- Quiz questions per module with correct answers
- Course description and slug suggestion
- Icon suggestion

**Workflow:**
- Generated course saved to database as **draft** (not visible to students)
- Admin reviews and edits using the existing course/lesson editor
- Admin publishes when satisfied

**Tech:** Claude API (`claude-sonnet-4-6`) called from a Supabase Edge Function

---

## Feature 3: Post-Course Survey & Feedback Analytics

**Goal:** Collect structured student feedback after course completion and surface actionable improvement recommendations.

**Student experience:**
- Survey appears on the **completion/certificate screen** — mandatory before certificate can be downloaded
- Standard training course question set:
  - Overall rating (1–5 stars)
  - Content clarity (1–5 stars)
  - Difficulty level (Too Easy / Just Right / Too Hard)
  - Relevance to your work (1–5 stars)
  - Would you recommend this course? (Yes / No)
  - What did you like most? (open text)
  - What could be improved? (open text)

**Admin dashboard (per course):**
- Average scores for each rated question
- Response rate (completions with survey vs. without)
- Difficulty distribution chart
- All open-text responses listed
- Claude-generated theme summary of open-text feedback
- Claude-generated improvement recommendations based on patterns
- Score trend over time (improving / declining)

**Tech:** New `course_surveys` table in Supabase; Claude API for theme analysis

---

## Feature 4: Stripe Payment Module

**Goal:** Monetise the course catalogue with per-course purchases, a free trial, referral discounts, and full admin price control.

**Free trial:**
- "Get Started" CTA unlocks the **first Beginner course** at no cost (no card required)
- All remaining courses require payment

**Pricing model:**
- Pay-per-course (no subscription)
- Currency: **CAD only**
- Admin sets price per course in the admin dashboard
- Supports coupon codes: percentage or fixed-amount discounts (admin creates/manages)

**Referral programme:**
- Every user gets a unique referral link
- Referred person receives a small discount on their first paid course
- Referring user receives a discount credit applied to their next course purchase
- Admin can view referral activity and discount redemption history

**Admin controls:**
- Set / edit price per course
- Create, pause, and delete coupon codes
- Revenue dashboard: total revenue, per-course breakdown, refunds
- Referral activity log

**Tech:** Stripe Checkout + Webhooks; Supabase `purchases`, `coupons`, `referrals` tables; Supabase Edge Functions for webhook handling

---

## Priority Order (suggested)

| # | Feature | Complexity | Value |
|---|---------|------------|-------|
| 1 | Content Protection | Low | High |
| 2 | AI Course Generator | Medium | High |
| 3 | Post-Course Survey | Medium | Medium |
| 4 | Stripe Payments | High | High |

## Hardening follow-up (from PR #10 review)
- Wrap multi-step curriculum writes (deleteDomain reassign+delete, batch reorders) in a Postgres RPC transaction once multi-admin concurrency becomes real. Currently retry-safe + optimistic-UI rollback; partial reorders self-heal on next drag.
