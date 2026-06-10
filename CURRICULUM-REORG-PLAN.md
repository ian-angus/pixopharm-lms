# Pixopharm Academy — Curriculum Reorg + CRUD Implementation Plan

**Status:** ✅ APPROVED — all decisions D1–D12 confirmed by owner 2026-06-09 · **Created:** 2026-06-08
**Goal:** Ship the domain-based curriculum reorg end-to-end — database → admin organizer (full create/edit/delete of domains, courses, modules with drag-ordering) → student journey with **interactive quizzes** (numeric, drag-and-drop, case-based, cloze; instant feedback + explanations; AI-generated) → marketing site — and fix the AI content pipeline. Everything tested and verified before sign-off.

> How to use this doc: read **§0 Decisions** first and mark your choices / edits. Everything below assumes the recommended defaults; change §0 and I'll adjust the affected phases.

---

## 0. Decisions to confirm (please edit in the morning)

| # | Decision | Recommended | Your call |
|---|----------|-------------|-----------|
| D1 | Domain grouping in the DB | **Option B — real `domains` table** (needed because you create/delete/reorder domains in the UI) | ✅ Confirmed 2026-06-09 |
| D2 | Skill levels (Beginner/Int/Adv) | **Remove from all UI; keep the `skill_level` column (deprecated) for now** so nothing breaks | ✅ Confirmed 2026-06-09 |
| D3 | Drag grain | **Domains, Courses, AND Modules all reorderable** (confirmed) | ✅ Confirmed 2026-06-09 |
| D4 | Cleanup items | **Delete** the duplicate empty "HIV & ART"; **merge** anything useful from the draft "Pharmaceutical Calculations for Caribbean" into "Pharmacy Calculations", then delete it | ✅ Confirmed 2026-06-09 |
| D5 | Clinical disease courses | **Keep as a separate "Clinical Therapeutics (Electives)" track**, not part of the linear path | ✅ Confirmed 2026-06-09 |
| D6 | Enhance behaviour | Confirm dialog **plus build the non-destructive (merge/append) mode in this milestone** — owner upgraded from the confirm-only default | ✅ Confirmed 2026-06-09 — **non-destructive mode NOW** |
| D7 | Enhance model | **Upgrade to `claude-opus-4-8` as part of Phase 0b** (the prompt/schema is being rewritten there anyway; one change, one verification pass) | ✅ Confirmed 2026-06-09 |
| D8 | Where the organizer lives | **New "Curriculum" tab inside the existing React admin** (`AdminDashboard.tsx`), reusing auth + RLS — not a standalone HTML file | ✅ Confirmed 2026-06-09 |
| D9 | Public syllabus page | **Yes** — publish the student-journey diagram as a public page on the marketing site (great for SEO + conversions) | ✅ Confirmed 2026-06-09 |
| D10 | Service-role secret | **Repair the edge-function secret in Phase 0** (needed for future cron/webhook functions); user-triggered functions keep forwarding the admin JWT | ✅ Confirmed 2026-06-09 |
| D11 | Interactive quiz types | **MCQ + numeric/calculation entry + drag-and-drop match/order + case-based scenarios + fill-in-the-blank (cloze)**, all with instant feedback + explanations | ✅ Confirmed 2026-06-09 |
| D12 | Interactive quiz authoring | **AI generates all types** (extend `enhance-module` prompt/schema); admin quiz editor can also hand-author/edit every type | ✅ Confirmed 2026-06-09 |

---

## 1. Current state (verified facts, not assumptions)

- **Hierarchy today:** `courses → modules → lessons → quiz_questions`. `skill_level` lives on `courses`; `courses."order"` is a global integer; `modules.order_index`, `lessons.order_index`, `quiz_questions.order_index` exist.
- **Content inventory:** 27 sequenced diploma courses (skill tiers map exactly to order: Beg 1–7, Int 8–18, Adv 19–27) + ~8 clinical/disease mini-courses (mixed published/draft/archived) + cleanup items. ~206 core modules; ~half of core courses still have **0 lessons** (skeletons).
- **Enhance pipeline:** ✅ **FIXED & verified 2026-06-08** (`enhance-module` v7). Live test returned `200` in 119s, `lessons_updated:3, questions_count:3`. Root cause: the project's `SUPABASE_SERVICE_ROLE_KEY` no longer bypasses RLS (legacy key rotated when the project moved to `sb_publishable_`/secret keys), so edge functions running "as service role" were effectively anonymous and RLS hid draft content → `404 Module not found`. Fix: the function now forwards the **calling admin's JWT**, so `is_admin()` passes.
- **⚠ Latent risk:** any other edge function that assumes `SERVICE_ROLE_KEY` bypasses RLS is also affected. `generate-course` and `analyze-survey` must be audited (Phase 0).
- **RLS model:** `is_admin()` = `EXISTS(select 1 from profiles where id = auth.uid() and role='admin')`. Admin policies already exist for courses/modules/lessons/quiz_questions (INSERT `with_check is_admin()`, UPDATE/DELETE `using is_admin()`, SELECT `published OR is_admin()`). `profiles` is world-readable.
- **Admin auth for testing:** `maintenance@pixopharm.com` (role=admin) — works.
- **Quizzes today:** `quiz_questions` is multiple-choice only (options + correct index + `order_index`); no explanations, no other question types. Enhance generates 3 MCQs per module.

---

## 2. Target architecture

```
Program  (one comprehensive "Caribbean Pharmacy Technician Diploma")
  └─ Domain        ← NEW tier (create/rename/recolour/reorder/delete in admin)
       └─ Course   (the existing "courses"; user reorders within a domain)
            └─ Module      (reorder within a course)
                 └─ Lesson
                      └─ Quiz   ← interactive: MCQ · numeric · match/order · case · cloze
```

- **Sequencing = the student path.** Ordering is explicit at every level: `domains.order_index`, `courses.order` (within domain), `modules.order_index`, `lessons.order_index`.
- Skill tiers become a **recommended order**, never a gate.

---

## 3. Phased delivery (each phase = one PR, Coderabbit + Codex reviewed, then deploy)

| Phase | Title | Outcome | Depends on |
|------|-------|---------|-----------|
| 0 | Edge-function hardening | Enhance fixed (done) + audit/patch `generate-course`, `analyze-survey` for the same RLS issue | — |
| 0b | AI interactive quiz generation | Extend `enhance-module` (and `generate-course`) prompt/schema to emit all interactive question types with explanations | 1 |
| 1 | Database & migration | `domains` table, `courses.domain_id` + ordering, RLS, seed 8 domains, assign all courses + `quiz_questions` interactive-type schema | 0 |
| 2 | Admin Curriculum Organizer (React) | Full CRUD + 3-level drag-ordering, persisted to Supabase + quiz editor for all interactive types | 1 |
| 3 | Student experience | Journey/curriculum page, catalog grouped by domain, course-player order follows new sequence, skill tiers removed + interactive quiz player with instant feedback | 1 |
| 4 | Marketing site | Academy page reflects "one diploma"; public syllabus/journey page | 1,3 |
| 5 | Test, deploy, verify | Playwright E2E + RLS tests green; both Vercel apps deployed & verified | all |

---

## 4. Detailed tasks

### Phase 0 — Edge-function hardening
- [x] `enhance-module`: forward admin JWT (deployed v7, verified; v8 adds role logging).
- [x] Audit `generate-course`: confirmed same broken assumption + **no auth check at all**. Patched: admin-JWT validation + forwarded-JWT data client (same pattern). Deployed v20, verified end-to-end (generated test course → 2 modules + 6 lessons → cleaned up).
- [x] Audit `analyze-survey`: worse — **no auth whatsoever** (anyone could burn Claude credits). Patched: admin-only gate before body parsing + forwarded JWT. Deployed v10, verified (401 unauth / 200 as admin).
- [x] Add a 1-line `console.log` of the resolved role to each function.
- [x] **Repair the edge-function service-role secret (D10):** verified the new `sb_secret_` key bypasses RLS (draft rows visible vs 0 for anon); set it as edge-function secret `SB_SECRET_KEY` for future cron/webhook functions. (Supabase also auto-injects `SUPABASE_SECRET_KEYS` now.) User-triggered functions keep the JWT-forward pattern.
- **Acceptance:** ✅ met 2026-06-09 — all three functions 401 unauthenticated; generate-course end-to-end 200 as admin; secret verified + stored.

### Phase 0b — AI interactive quiz generation *(after Phase 1's schema lands)*
- [ ] Extend the `enhance-module` prompt + response schema: per module emit a **mix of question types** — MCQ, numeric/calculation (answer + tolerance + unit), drag-and-drop match/order (pairs or correct sequence), case-based (shared patient vignette feeding 2–3 linked questions), fill-in-the-blank/cloze — **every question with a 1–2 sentence explanation**.
- [ ] Type mix heuristic by domain: Calculations & Compounding → numeric-heavy; Law/Scheduling → match/order; Clinical Therapeutics + Capstone → case-based; Terminology → cloze; default → MCQ + one interactive.
- [ ] Validate the model output against the new schema server-side; reject/retry malformed payloads so bad JSON never reaches the DB.
- [ ] Apply the same generation upgrade to `generate-course`.
- [ ] **Upgrade the model to `claude-opus-4-8` (D7)** — done here because the prompt/schema is rewritten in this phase anyway; verify output quality in the same pass.
- [ ] **Non-destructive enhance mode (D6):** enhance offers **Append/Merge** (default — keeps existing lessons + quiz, adds new content) and **Overwrite** (current behaviour, gated behind the destructive-action confirm). Merge logic: new lessons appended after existing ones; new quiz questions added alongside existing ones.
- [ ] Keep backward compatibility: plain-MCQ modules continue to work untouched.
- **Acceptance:** enhancing a draft module yields ≥5 questions spanning ≥3 types, each with an explanation, all rows valid against the schema; append mode verifiably preserves pre-existing lessons and questions.

### Phase 1 — Database & migration  *(write as a Supabase migration; back up first via `scripts/db-export.ts`)*
- [ ] `create table domains (id uuid pk default gen_random_uuid(), name text not null, icon text, color text, order_index int not null default 0, created_at timestamptz default now(), updated_at timestamptz default now())`.
- [ ] `alter table courses add column domain_id uuid references domains(id) on delete set null;` (null = "Unsorted").
- [ ] Backfill `courses."order"` to be unique/meaningful within each domain (sequence).
- [ ] **RLS for `domains`:** enable RLS; `SELECT` → `true` (or `published-aware` if you want to hide empty domains from students — recommend public read); `INSERT/UPDATE/DELETE` → `is_admin()`.
- [ ] **Seed the 8 domains + electives** (names/icons/colors from the approved prototype) and **assign every course's `domain_id`** per the mapping below.
- [ ] Apply D4 cleanup (delete dup HIV; resolve calc overlap).
- [ ] **Interactive quiz schema (D11):**
  - `alter table quiz_questions add column question_type text not null default 'mcq' check (question_type in ('mcq','numeric','match','order','cloze','case_mcq'));`
  - `alter table quiz_questions add column payload jsonb;` — type-specific config: MCQ options/correct index live on existing columns; numeric = `{answer, tolerance, unit}`; match = `{pairs:[{left,right}]}`; order = `{items:[…], correct_order:[…]}`; cloze = `{text_with_blanks, answers:[…], accept_variants}`.
  - `alter table quiz_questions add column explanation text;` (shown on answer — instant feedback).
  - `create table quiz_cases (id uuid pk, module_id uuid references modules(id) on delete cascade, vignette text not null, order_index int default 0);` + `alter table quiz_questions add column case_id uuid references quiz_cases(id) on delete set null;` — groups linked case-based questions under one patient vignette.
  - RLS on `quiz_cases`: same pattern as `quiz_questions` (SELECT published-or-admin; writes `is_admin()`).
  - Existing rows untouched (`question_type` defaults to `'mcq'`, `payload`/`explanation` null) — zero-risk for the 833 live questions.
- **Domain → course mapping (from the approved layout):**
  - A 🧭 Foundations & Learning Skills · Foundations of Pharmacy Practice; Medical & Pharmaceutical Terminology; Digital Learning Skills & Study Skills
  - B 🫀 Human Body & Pharmacology · Anatomy, Physiology & Basic Pharmacology; Pharmacology & Body Systems P1; P2
  - C ⚙️ Operations, Systems & Technology · Basic Pharmacy Workflow; Prescription Processing & Workflow; Inventory…Supply Chain; Documentation…Reimbursement; Advanced Pharmacy Systems & Digital Workflow; Technology, Automation & AI
  - D 🧪 Calculations & Compounding · Pharmacy Calculations; Complex Calculations; Basic Compounding Techniques; Sterile & Nonsterile Compounding (Sim)
  - E 💬 Patient Care & Communication · Professionalism, Communication & EI; Applied & Written Communication; Patient & Interprofessional Comm Labs; OTC Medications & Advice Boundaries; Leadership, Teamwork & Problem Solving
  - F 🛡️ Safety, Quality & Public Health · Medication Safety & Error Prevention; Public Health, Pharmacovigilance & QI
  - G ⚖️ Caribbean Law, Ethics & Regulation · Caribbean Pharmacy Law, Ethics & Regulation; Caribbean Regulatory Compliance & Quality Systems; Drug Scheduling & Controlled Substances
  - H 🎓 Capstone & Certification · Capstone Integrated Case Simulation; Caribbean Pharmacy Certification Exam Prep
  - 🩺 Clinical Therapeutics (Electives) · Asthma; Diabetes; Hypertension; HIV; Dengue; Caribbean Island Pharmacy Practice
- **Acceptance:** every non-archived course has a `domain_id`; counts reconcile to pre-migration totals; rollback script exists.

### Phase 2 — Admin Curriculum Organizer (React, in `AdminDashboard.tsx`)
Port the approved prototype (`curriculum-organizer-prototype.html`) into the React admin, backed by Supabase.
- [ ] New **"Curriculum"** tab/route.
- [ ] Data hooks in `src/lib/admin-api.ts`:
  - Domains: `listDomains`, `createDomain`, `updateDomain(name/icon/color)`, `reorderDomains(idsInOrder)`, `deleteDomain(id, reassignTo)`.
  - Courses: `createCourse(domainId)`, `updateCourse(name/status)`, `moveCourse(id, domainId, order)`, `reorderCourses`, `deleteCourse`.
  - Modules: `createModule(courseId)`, `updateModule(title)`, `reorderModules(courseId, idsInOrder)`, `deleteModule`.
  - All are **direct Supabase calls** (admin session → `is_admin()` true → RLS allows). No new edge functions needed for CRUD.
- [ ] Drag-and-drop: domains (columns), courses (cards between/within domains), modules (within a course). Use the prototype's UX; consider `@dnd-kit` for touch + a11y in production.
- [ ] Persistence: optimistic UI + **batched order updates** on drop (update only changed rows). Debounce.
- [ ] Modals: add/edit course (name, status, domain), add/edit module (title); **delete** with confirm; rename/recolour domain.
- [ ] Inline link to **Enhance ✦** per module (now working) with the mode picker (D6): Append/Merge default, Overwrite behind the destructive-action confirm.
- [ ] **Quiz editor (D11/D12):** per-module quiz panel listing questions with type badges; add/edit any type via type-specific forms (MCQ options, numeric answer+tolerance+unit, match pairs, order sequence, cloze blanks, case vignette + linked questions); explanation field on every question; preview-as-student.
- **Acceptance:** every create/edit/delete/reorder persists to Supabase and survives reload; non-admins get RLS-blocked; an admin can author and edit every question type by hand.

### Phase 3 — Student experience
- [ ] **Curriculum / "My Journey" page** in the LMS using the approved student-view design (`curriculum-student-view.html`), data from `domains`+`courses` ordered.
- [ ] **Catalog**: group courses by domain; remove Beginner/Int/Adv filters & badges.
- [ ] **CoursePlayer navigation**: next/prev and progress should follow the new global order (domain → course → module → lesson). Confirm exact component (`CoursePlayer`/`fetchCourseBySlug`) and update the ordering source.
- [ ] Hide/retire skill-level UI everywhere (search for `skill_level` usages).
- [ ] **Interactive quiz player (D11):** renderer per question type — MCQ, numeric input (unit-aware, tolerance check), drag-and-drop match + ordering (reuse `@dnd-kit` from the organizer; keyboard/touch accessible), cloze inputs, case vignette panel with its linked questions in sequence.
- [ ] **Instant feedback:** on submit of each question show correct/incorrect + the explanation before moving on; quiz summary at the end; results persist to the existing progress tracking.
- [ ] Graceful fallback: legacy `'mcq'` rows with null `payload` render exactly as today.
- **Acceptance:** a student sees one ordered path; navigating lessons follows domain/course/module order; no skill-tier labels; all five question types render, score correctly, and show explanations on mobile + desktop.

### Phase 4 — Marketing site (`homepage/`)
- [ ] `src/pages/Academy.tsx`: copy → "one comprehensive Caribbean Pharmacy Technician Diploma"; remove level language.
- [ ] **Public syllabus page** (`/curriculum` or `/academy/syllabus`) = the journey diagram (SEO + conversion). Reuse the student-view design as a React page or static include.
- [ ] Cross-link homepage → syllabus → LMS sign-up.
- **Acceptance:** marketing reflects the new structure; syllabus page live and indexable.

### Phase 5 — Test, deploy, verify (see §5)

---

## 5. Testing & verification plan ("ensure everything works")

**Automated (Playwright, logged in as `maintenance@pixopharm.com`):**
- Admin CRUD: create domain → add course → add module → enhance module → reorder all three levels → reload → assert order persisted (and assert in DB via Supabase query).
- Delete paths: delete module/course/domain (with reassignment) → assert DB state.
- RLS negative test: a non-admin session cannot create/update/delete (expect 401/403/blocked).
- Student flow: open journey page → catalog grouped by domain → open a course → navigate modules/lessons in order.
- Enhance regression: enhance a draft module → 200, lessons populated (≥7 blocks), ≥5 quiz questions spanning ≥3 types, every question has an explanation, payloads validate against the schema.
- Generate-course regression (Phase 0): create a course → modules+lessons saved as draft.
- Interactive quiz player: one spec per question type — answer correctly and incorrectly, assert instant feedback + explanation shown, score recorded; numeric tolerance edge cases; drag-and-drop via keyboard (a11y); legacy MCQ module still plays.
- Admin quiz editor: author one question of each type → reload → student player renders it correctly.

**Manual verification gates:**
- Migration: row counts before/after; no orphaned courses; spot-check 3 domains.
- Deploy: `npx vercel --prod` for `lms/` and `homepage/`; **verify bundle hash changed** (git auto-deploy has silently failed before); load live URLs.
- Edge functions: confirm versions ACTIVE; tail logs for `200`.

**Definition of done:** all Playwright specs green · migration verified · both apps deployed & manually smoke-tested · PRs merged after Coderabbit/Codex review.

---

## 6. Risks & mitigations
- **Service-role secret broken (root of the enhance bug).** Short-term: functions forward the admin JWT (done for enhance). Long-term: set the correct edge-function secret under the new key system, then optionally revert functions to service-role for non-user-triggered jobs (cron/webhooks that have no user JWT). **Action:** confirm in Supabase dashboard which secret edge functions receive.
- **Destructive Enhance** overwrites hand-edited lessons + deletes the module's quiz. Mitigated in this milestone (D6): Append/Merge is the default mode; Overwrite requires the destructive-action confirm.
- **Production data migration.** Always `scripts/db-export.ts` first; ship migration with a tested rollback.
- **Reorder concurrency / large lists.** Batch updates; only write changed rows; add `updated_at`.
- **Course-player ordering regressions.** Cover with the navigation Playwright test before deploy.
- **AI emits malformed interactive payloads.** Server-side schema validation in the edge function with reject/retry; Playwright regression asserts payload validity. Legacy MCQ path untouched as fallback.

## 7. Rollback
- DB: keep the pre-migration export; migration `down` drops `domain_id` + `domains` (data preserved in export).
- App: feature-flag the new "Curriculum" tab; old course-management UI stays until Phase 2 is signed off.

## 8. Rough effort (engineering days)
- P0 ~0.5 (mostly done) · P0b ~2 · P1 ~1.5 · P2 ~3 · P3 ~3 · P4 ~1 · P5 ~2 → **~13 days**, sequenced; P3/P4 can overlap after P1; P0b runs right after P1's migration.
- *(Interactive quizzes add ~3.5 days; non-destructive enhance mode (D6) adds ~1 day to P0b.)*

---

## Appendix — files likely touched
- `lms/supabase/functions/enhance-module/index.ts` (done), `generate-course/index.ts`, `analyze-survey/index.ts`
- `lms/supabase/migrations/00xx_domains.sql` (new) + `00xx_interactive_quiz.sql` (new)
- `lms/src/lib/admin-api.ts` (new CRUD functions, incl. quiz question/case CRUD)
- `lms/src/components/AdminDashboard.tsx` (Curriculum tab + quiz editor)
- `lms/src/components/CoursePlayer*.tsx` + catalog/journey pages + new interactive quiz player components (one renderer per question type)
- `homepage/src/pages/Academy.tsx` + new syllabus page
- Prototypes to port: `lms/curriculum-organizer-prototype.html`, `lms/curriculum-student-view.html`
