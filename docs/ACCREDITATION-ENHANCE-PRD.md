# PRD — Accreditation-Format Enhance + Quiz Generate/Review/Save

**Status:** In build (branch `feat/accreditation-enhance`)
**Date:** 2026-06-13
**Author:** Ian (client direction) + engineering
**Source format:** `lms/docs/ACCREDITATION-MODULE-FORMAT.md` (client-provided 20-section template, 2026 ASHP/ACPE-aligned)

---

## 1. Problem

Two open problems, one solution:

1. **Enhance hard-fails on half the catalog.** `enhance-module` returns `404 "No lessons found for module"` for any module with zero lesson rows. **116 of 235 modules (49%)** are empty skeletons — including modules inside *published* courses. Root cause: enhance was built to *enrich* existing lessons (it `UPDATE`s lesson rows by title match); it cannot *create* lessons for a bare module.

2. **No accreditation structure.** Generated content is ad-hoc. The client wants every built module to follow the 20-section accreditation-ready format (objectives mapped to assessments, crosswalk, formative+summative plan, passing criteria, remediation, QA evidence).

3. **No review gate on AI quizzes.** The client wants: admin picks "create THESE quiz types," AI generates them, admin **reviews and modifies** before anything is saved/published.

## 2. Goals

- Fix the 404-on-empty-module bug by **generating lessons from scratch** when a module has none.
- Make enhance produce **accreditation-format modules** (content + structured metadata + objectives + crosswalk + formative/summative quizzes).
- Add a **generate → review/edit → publish** workflow so no unreviewed AI content reaches students.
- **Zero data loss** — every DB operation in this feature is additive (INSERT/append/upsert). The destructive "replace" path of the old function is never used by this flow.

## 3. Non-Goals (this milestone)

- Experiential/preceptor site management, learner work uploads, gradebook re-architecture.
- Auto-submitting to an accrediting body. We produce an *exportable accreditation report*; submission is manual.
- Re-running bulk enhance across the whole catalog (separate, owner-gated rollout decision).

## 4. Locked decisions (from brainstorming, 2026-06-13)

| # | Decision | Choice |
|---|----------|--------|
| D1 | Scope of structured metadata | **Full format with new DB fields** (metadata, objectives, crosswalk, passing criteria, remediation, competency checklist) |
| D2 | Audience / surface | **Split** — students see learning objectives + passing criteria; reviewers get crosswalk, competency checklist, instructor/SME notes, version control, and an exportable accreditation report |
| D3 | Save/review flow | **Generate to draft → review/edit → publish.** Nothing live until an admin reviews and publishes |
| D4 | Quiz workflow | **Create THESE quiz types → review → modify → save** (type-picker already exists in EnhanceDialog; per-type editing already exists in QuizEditor; this flow wires generate→review→edit→publish) |

## 5. Data-safety contract (NON-NEGOTIABLE)

Baseline at build start: **34 courses · 235 modules · 418 lessons · 1,911 quiz_questions · 104 quiz_cases · 9 domains · 116 empty modules.**

- Migration is **purely additive**: new tables + one new nullable FK column. No `DROP`, no `ALTER ... TYPE`, no data mutation, no RLS change to existing tables' read paths.
- Generation writes **only** to the new `module_enhancement_drafts` staging table. Live `lessons`/`quiz_questions`/`quiz_cases` are untouched during generation.
- Publish/promote is **insert/append only**: lessons inserted only when the module is empty; quizzes appended at `max(order_index)+1`; metadata/objectives upserted into new tables. The old DELETE-then-insert "replace" mode is **not** called.
- Row counts are re-verified after the migration and after each publish; they must never decrease.

## 6. Architecture

### 6.1 New tables (additive migration)

**`module_enhancement_drafts`** — staging for the review gate.
- `id uuid pk`, `module_id uuid fk modules`, `status text` (`pending_review` | `approved` | `published` | `discarded`), `payload jsonb` (full generated module: metadata, overview, objectives, key_terms, crosswalk, competency_checklist, remediation, references, lessons[], quizzes[], cases[]), `requested_types text[]`, `model text`, `tokens_in int`, `tokens_out int`, `created_by uuid`, `created_at`, `updated_at`, `published_at`. Admin-only RLS.

**Student-facing module fields** — added directly to the `modules` table (AS BUILT — see note): `module_overview text`, `passing_score int`, `attempts_allowed int`, `seat_time_minutes int`. They live on `modules` (not `module_metadata`) because RLS is row-level, not column-level — putting student-safe fields on the already-student-readable `modules` table enforces the split audience without a security-definer view.

**`module_metadata`** — 1:1 with modules; **reviewer-only** (admin RLS). §1/§2/§9/§10 fields the client/accreditor needs but students must not see.
- `module_id uuid pk fk modules`, `module_code text`, `delivery_mode text`, `version text`, `review_date date`, `author text`, `reviewer text`, `crosswalk jsonb`, `competency_checklist jsonb`, `remediation_plan jsonb`, `module_references jsonb` (named `module_references`, not `references`, to avoid the SQL reserved word), `modality_tags text[]`, `instructor_notes text`, `sme_review_notes text`, `created_at`, `updated_at`.

**`learning_objectives`** — 1:many per module; §4.
- `id uuid pk`, `module_id uuid fk modules`, `objective_number text` (LO1…), `text text`, `blooms_level text`, `order_index int`, `created_at`. Student-readable when parent course published.

**`quiz_questions.objective_id`** — new nullable `uuid` FK → `learning_objectives(id)` `ON DELETE SET NULL`. Maps each assessment item to an objective (§4 "each objective linked to an assessment"). Existing rows stay `NULL`.

### 6.2 Edge function — `enhance-module` v16

- New `target` param: `"draft" | "live"`, **default `"live"`** (AS BUILT — keeps the existing Enhance button's behavior unchanged; the `EnhanceDialog` UI defaults its selection to draft). `target:"draft"` generates and writes the result to `module_enhancement_drafts` (status `pending_review`), returns the draft id + token usage, and writes **no** live rows.
- **Empty-module fix:** when the module has no lessons, branch the prompt to *design* ~3–5 lesson titles + content (instead of 404). On the draft path these go into the draft payload; on the live path they are **INSERTed** as new lesson rows (additive). Modules that already have lessons keep the legacy append/overwrite semantics unchanged.
- **Accreditation prompt:** asks for the 20-section structure mapped to our model — overview, learning objectives (LO1…n with Bloom level), key terms, core lessons (content blocks), tables/job-aids, worked scenarios (cases), formative knowledge checks + summative quiz, crosswalk rows, competency checklist, remediation steps, references. Each generated quiz question carries an `objective_ref` (LOn) for later linking.
- Honors `types[]` (already wired) to restrict quiz question types ("create THESE quiz types").
- Per-call fresh JWT (project JWTs expire ~5 min) and Opus 500 retry behavior preserved from v13–v15.

### 6.3 Publish/promote

AS BUILT: an **atomic Postgres `SECURITY DEFINER` RPC `publish_module_draft(p_draft_id uuid)`** (migration `20260613000002`), `is_admin()`-gated, `EXECUTE` revoked from anon/public and granted to `authenticated`. The client calls it via `supabase.rpc(...)`. One transaction = no partial/orphaned state. Steps:
1. `SELECT … FOR UPDATE` the draft (locks against concurrent double-publish); asserts `status = pending_review|approved` (`published` → no-op JSON; `discarded` → error).
2. If module has no lessons → `INSERT` lessons from payload. Never overwrites existing lesson content.
3. `INSERT learning_objectives`, building an `objective_number → id` map.
4. Quiz appended at `max(order_index)+1` with type-correct option/answer normalization; resolves each question's `objective_ref` → `objective_id`. Case (if any) inserted, its scenario questions linked.
5. `UPDATE modules` student fields (overview, passing_score, attempts_allowed, seat_time_minutes); `upsert module_metadata` (reviewer fields).
6. Set draft `status = published`, `published_at = now()`; return inserted counts.

### 6.4 Admin UI

- **EnhanceDialog** (exists, has type-picker): AS BUILT — added an "Accreditation draft ✦ (recommended)" mode (the dialog's default) → calls `enhanceModuleDraft` (v16 `target:"draft"`). On success it hands the `draft_id` to the parent which opens the review surface.
- **`DraftReviewDialog`** (new): tabbed review of the generated module. AS BUILT it uses **its own lightweight inline editors** (not the live-row `QuizEditor`, since draft questions aren't DB rows yet): edit overview/passing criteria, objectives (text + Bloom), question text/explanation, and MC/scenario options + correct answer + objective link; reviewer sections (crosswalk, competency, remediation, references) render read-only. **Save** persists the edited payload (`saveDraftPayload`); **Publish** (with a confirm checkbox) calls `publish_module_draft`; **Discard** marks it discarded. Finer answer-data for non-MC types (matching pairs, correct_indices, etc.) is edited post-publish in the existing live `QuizEditor`.
- **DESCOPED this pass:** the standalone admin "accreditation Export report" (Markdown/printable per module) was *not* built — the reviewer fields are viewable in `DraftReviewDialog` and stored in `module_metadata`, but a one-click export document is a follow-up. The crosswalk/competency/evidence data all exist in the DB ready for it.

### 6.5 Student UI

- CoursePlayer module header shows **Learning Objectives** + **Passing criteria** (score/attempts) + seat time. Crosswalk/competency/notes are NOT shown to students.

## 7. Build order (incremental commits)

1. PRD + branch ✅
2. ✅ Additive migration; counts re-verified.
3. ✅ enhance-module v16 (draft target, empty-module fix, accreditation prompt, types) — deployed.
4. ✅ publish/promote RPC (additive, atomic, idempotent) — deployed.
5. ✅ Admin: EnhanceDialog draft mode + DraftReviewDialog. (Accreditation export report DESCOPED — see §6.4.)
6. ✅ Student: objectives + passing criteria in CoursePlayer.
7. ✅ `tsc --noEmit` + `pnpm build` green; counts re-verified at baseline; progress.md updated; PR #19 opened; Coderabbit review queued.

> **Status: shipped to PR #19** (`feat/accreditation-enhance`, unmerged). All §8 criteria met except the reviewer Export report (descoped, §6.4).

## 8. Acceptance criteria

- ✅ Enhancing an empty module (`dda80bd2-…` "Sig Codes and Latin Abbreviations") produces a draft with lessons + quizzes — **no 404**. (Verified: HTTP 200, 4 lessons + 6 q + 4 objectives.)
- ✅ Generated draft follows the accreditation structure (objectives mapped to quiz questions; crosswalk + competency checklist present).
- ✅ Admin can restrict quiz types, review the generated set, modify, and publish; nothing reaches students before publish.
- ✅ Students see objectives + passing criteria. ⚠️ Reviewer **export report** descoped this pass (data is stored + viewable; one-click export is a follow-up).
- ✅ DB row counts after publish are ≥ baseline for every table (verified: +4 lessons/+6 questions exactly on the test publish, then rolled back to exact baseline).
