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

**`module_metadata`** — 1:1 with modules; §1/§9/§10 accreditation fields.
- `module_id uuid pk fk modules`, `module_code text`, `delivery_mode text`, `seat_time_minutes int`, `version text`, `review_date date`, `author text`, `reviewer text`, `module_overview text`, `crosswalk jsonb`, `competency_checklist jsonb`, `remediation_plan jsonb`, `references jsonb`, `instructor_notes text`, `sme_review_notes text`, `passing_score int`, `attempts_allowed int`, `modality_tags text[]`, `created_at`, `updated_at`. Student-readable: `module_overview`, `passing_score`, `attempts_allowed`, `seat_time_minutes`. Reviewer-only (admin RLS): crosswalk, competency_checklist, notes, version/author/reviewer.

**`learning_objectives`** — 1:many per module; §4.
- `id uuid pk`, `module_id uuid fk modules`, `objective_number text` (LO1…), `text text`, `blooms_level text`, `order_index int`, `created_at`. Student-readable when parent course published.

**`quiz_questions.objective_id`** — new nullable `uuid` FK → `learning_objectives(id)` `ON DELETE SET NULL`. Maps each assessment item to an objective (§4 "each objective linked to an assessment"). Existing rows stay `NULL`.

### 6.2 Edge function — `enhance-module` v16

- New `target: "draft"` (default for accreditation flow). When set, the function generates and writes the result to `module_enhancement_drafts` (status `pending_review`) and returns the draft id + token usage. It does **not** write live rows.
- **Empty-module fix:** when the module has no lessons, branch the prompt to *design* ~3–5 lesson titles + content and include them in the draft (instead of 404). When the module has lessons, enrich-in-place semantics are preserved in the draft payload.
- **Accreditation prompt:** asks for the 20-section structure mapped to our model — overview, learning objectives (LO1…n with Bloom level), key terms, core lessons (content blocks), tables/job-aids, worked scenarios (cases), formative knowledge checks + summative quiz, crosswalk rows, competency checklist, remediation steps, references. Each generated quiz question carries an `objective_ref` (LOn) for later linking.
- Honors `types[]` (already wired) to restrict quiz question types ("create THESE quiz types").
- Per-call fresh JWT (project JWTs expire ~5 min) and Opus 500 retry behavior preserved from v13–v15.

### 6.3 Publish/promote

`publishModuleDraft(draftId)` (admin-api + edge or service-role RPC):
1. Re-reads the draft, asserts `status = pending_review|approved` (idempotent guard against double publish; `published` → no-op).
2. If module empty → `INSERT` lessons from payload. Never overwrites existing lesson content.
3. `INSERT` quiz_cases, then quiz_questions appended at `max(order_index)+1`; resolve each question's `objective_ref` → inserted objective id.
4. `upsert module_metadata`; `INSERT learning_objectives`.
5. Set draft `status = published`, `published_at = now()`.
6. Return inserted counts for the caller to display + verify.

### 6.4 Admin UI

- **EnhanceDialog** (exists, has type-picker): add a "Generate accreditation module (draft)" action → calls v16 `target:"draft"`.
- **Draft Review surface** (new): renders the generated module — overview, objectives, lessons, quizzes (via existing QuizEditor), crosswalk, competency checklist. Admin edits inline, then **Publish** (calls promote) or **Discard**.
- **Reviewer / accreditation view** (new, admin-only): read-only render of §2 crosswalk + §8 assessment plan + §11 evidence + version control, with an **Export** (Markdown/printable) accreditation report per module.

### 6.5 Student UI

- CoursePlayer module header shows **Learning Objectives** + **Passing criteria** (score/attempts) + seat time. Crosswalk/competency/notes are NOT shown to students.

## 7. Build order (incremental commits)

1. PRD + branch ✅
2. Additive migration; re-verify counts.
3. enhance-module v16 (draft target, empty-module fix, accreditation prompt, types).
4. publish/promote (additive).
5. Admin: EnhanceDialog draft action + Draft Review surface + accreditation export.
6. Student: objectives + passing criteria in CoursePlayer.
7. `tsc --noEmit` + `pnpm build` green; re-verify counts; update progress.md; PR; Coderabbit/Codex review.

## 8. Acceptance criteria

- Enhancing an empty module (e.g. `dda80bd2-…` "Sig Codes and Latin Abbreviations") produces a draft with lessons + quizzes — **no 404**.
- Generated draft follows the accreditation structure (objectives mapped to quiz questions; crosswalk + competency checklist present).
- Admin can restrict quiz types, review the generated set, modify, and publish; nothing reaches students before publish.
- Students see objectives + passing criteria; reviewers can export an accreditation report.
- DB row counts after publish are ≥ baseline for every table (never a decrease).
