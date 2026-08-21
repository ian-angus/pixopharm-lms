# PRD — AI Lesson Refinement + Quiz Refresh

**Status:** DESIGN — awaiting owner approval (Ian, requested 2026-08-21)
**Owner ask:** "If we enhance and then want to refine it we want a way to use the AI to do that. Also we need to refresh the quiz."

---

## 1. Problem

Once a module has content, the AI tooling only offers blunt instruments:

| You want to… | Today's only options |
|---|---|
| Improve an existing lesson ("go deeper", "simplify", "add an island comparison") | Hand-edit in TipTap, or **Overwrite** the whole module (destroys every lesson + the entire quiz) |
| Regenerate a module's quiz after content changed | **Append** (piles new questions on top of stale ones — duplicates accumulate) or **Overwrite** (also nukes the lessons) |

There is no middle gear: *AI, take what's there and make it better.* Enhance is generate-into-empty; Overwrite is scorched earth. Nothing is content-aware and targeted.

## 2. Goals

1. **Refine a single lesson with an instruction.** The AI receives the lesson's current content and a plain-English instruction, and proposes a revised version.
2. **Refresh a module's quiz.** The AI regenerates the question set *grounded in the module's current lesson content*, replacing stale questions — with per-question control over what survives.
3. **One mental model everywhere: AI proposes → you review → apply → undo.** Nothing the AI produces touches live content without an explicit Apply, and every Apply is reversible.
4. In-place UX: both actions live where the admin already is (the new LessonEditorSheet and the QuizEditor) — no page-hopping.

## 3. Non-Goals (this milestone)

- Chat-style iterative editing (each refine is one instruction → one proposal; run again on the result to iterate).
- Batch refine across many lessons/modules at once.
- Automatic quiz refresh triggered by lesson edits (manual button only; a gentle nudge is included — see §5.1 step 6).
- Any student-facing change.

## 4. Design principles (carried over from the accreditation work)

- **Additive, review-gated writes** — same philosophy as `module_enhancement_drafts` → `publish_module_draft`.
- **Connection-drop safe** — results are staged server-side *before* the HTTP response, because this project's Supabase gateway routinely cuts long calls at ~150 s while the function completes anyway.
- **Zero silent data loss** — the previous content is snapshotted at Apply time, giving a one-click Undo and an audit trail.
- **Block-type preservation** — the refine round-trip must preserve ALL 13 content-block types, including the five the TipTap editor cannot handle (`video-placeholder`, `image-placeholder`, `island-comparison`, `case-study`, `scenario-simulation`). This makes AI refine the *safe* way to edit rich lessons — safer than the TipTap editor is today (see the "[unsupported block type]" data-loss issue).

---

## 5. UX workflows

### 5.1 Refine a lesson (LessonEditorSheet)

1. Curriculum → expand course → 📖 on a module → lesson row gains a **✦ Refine with AI** button (next to Edit/Delete).
2. Clicking it opens the **Refine dialog**: a free-text instruction box plus quick-pick chips that fill it:
   - *Go deeper* · *Simplify the language* · *Add a cross-island comparison table* · *Add worked examples* · *Add key terms* · *Tighten & shorten* · *Check clinical accuracy*
3. Run (~1–2 min, spinner, "keep this open" note — but closing is safe, see §8). The proposal is staged server-side.
4. **Review screen** (same dialog): tabbed **Current / Proposed** preview rendered with the real lesson block renderer, plus a summary strip ("18 → 22 blocks · est. 25 min · all block types preserved ✓"). Buttons: **Apply** / **Discard**. If the proposal shrinks the lesson by more than ~60 % and the instruction didn't ask for shortening, an amber warning appears above Apply.
5. **Apply** atomically swaps the lesson content (previous content snapshotted). Toast: "Lesson updated — **Undo**". Undo restores the exact previous content. Lesson row block-count refreshes live.
6. After a successful Apply, a small nudge appears in the sheet: *"Content changed — consider refreshing this module's quiz ✦"* linking to workflow 5.2.
7. A lesson with a pending (unapplied) proposal shows a ✦ badge on its row so staged work is never forgotten — the badge reopens the review screen. (Lesson learned from the module drafts that sat unnoticed since June.)

### 5.2 Refresh a module's quiz (QuizEditor)

1. QuizEditor (☑ on a module row) gains a **Refresh with AI ✦** button beside the existing "Generate with AI" (which stays as the *append* path).
2. Dialog: optional question-type picker (same 8-type checkboxes as everywhere else), optional instruction ("focus on the new cold-chain section"), and a clear statement: *"Proposes a replacement question set generated from the module's **current** lesson content."*
3. Run (~1.5–2.5 min). The proposal is staged server-side.
4. **Review screen**, two lists:
   - **Proposed questions** (editable inline: text, options, correct answer, explanation — same controls as DraftReviewDialog's quiz tab; delete any you don't want).
   - **Existing questions** with a **Keep** checkbox per question (default **unchecked** = will be replaced). Tick the ones you authored by hand or still like.
5. **Apply** runs one transaction: deletes existing questions *not* marked Keep (plus any case vignettes that end up with zero linked questions), inserts the proposed set after the kept ones, renumbers `order_index`. Everything deleted is snapshotted for **Undo**.
6. Toast with question delta ("12 replaced, 2 kept, 8 added — **Undo**") and the module row's quiz count refreshes.

**Student impact note:** `course_progress.quiz_scores` stores `{score, total}` per module — no per-question references — so replacing questions never corrupts existing progress; students simply see the new set on their next attempt/retake.

---

## 6. Architecture

### 6.1 New Edge Function: `refine-lesson`

- Auth: identical pattern to `enhance-module` (forward the admin's JWT; `is_admin()` RLS does the gating; caller role logged).
- Input: `{ lesson_id: uuid, instruction: string }`.
- Reads: the lesson row + its module/course/domain (for the Caribbean context header and domain emphasis).
- Prompt contract (§7) returns the **complete revised block array**.
- Server-side validation: every returned block must match one of the 13 `ContentBlock` shapes (a `validateBlock()` mirroring `validateQuestion()`); unknown types → one retry with rejection feedback → 502 if still invalid. Result must be non-empty.
- Writes a row to `lesson_revision_drafts` (status `pending_review`) **before** returning; response = `{ draft_id, block_counts, est_minutes, usage }`.
- Model `claude-opus-4-8`, `max_tokens` 32k, 300 s internal timeout.

### 6.2 `enhance-module` gains `target: "quiz_refresh"`

Reuses everything that function already has — auth, the 8-type validators, `typeMixForDomain`, the case-vignette machinery — with two differences from the existing draft target:
- The prompt includes the module's **current lesson content** (compacted: headings + text bodies + tables) as grounding, and generates **quiz only** (`lessons: []`, no accreditation sections unless already present).
- The draft row is written with `kind = 'quiz_refresh'` so the UI opens the right review dialog.

### 6.3 Data model (purely additive migration)

```sql
-- New: staged lesson revisions with built-in undo
create table lesson_revision_drafts (
  id               uuid primary key default gen_random_uuid(),
  lesson_id        uuid not null references lessons(id) on delete cascade,
  instruction      text not null,
  status           text not null default 'pending_review'
                     check (status in ('pending_review','applied','reverted','discarded')),
  revised_content  jsonb not null,          -- the AI proposal
  revised_duration integer,
  previous_content jsonb,                   -- snapshot filled at Apply (enables Undo)
  previous_duration integer,
  model text, tokens_in int, tokens_out int,
  created_by uuid references auth.users(id),
  created_at timestamptz default now(), applied_at timestamptz
);
-- RLS: admin-only (is_admin()) for all operations — same as module_enhancement_drafts.

-- Existing table, two additive columns
alter table module_enhancement_drafts add column kind text not null default 'accreditation'
  check (kind in ('accreditation','quiz_refresh'));
alter table module_enhancement_drafts add column previous_payload jsonb;  -- quiz snapshot for Undo
```

### 6.4 RPCs (SECURITY DEFINER, `is_admin()`-gated, idempotent, locked rows)

| RPC | Behaviour |
|---|---|
| `apply_lesson_revision(draft_id)` | Snapshot current `lessons.content`/`duration_minutes` into the draft → update the lesson → status `applied`. Re-apply is a no-op. |
| `revert_lesson_revision(draft_id)` | Restore `previous_content` → status `reverted`. Only valid from `applied`. |
| `apply_quiz_refresh(draft_id, keep_ids uuid[])` | Snapshot the module's full current question set (+ cases) into `previous_payload` → delete questions not in `keep_ids` → delete cases left with zero questions → insert proposed questions after kept ones → status `published`. |
| `revert_quiz_refresh(draft_id)` | Delete the inserted questions, restore the snapshot verbatim. |

### 6.5 Client (`admin-api.ts`)

`refineLesson(lessonId, instruction)` · `fetchLessonRevisions(lessonId)` · `applyLessonRevision(draftId)` · `revertLessonRevision(draftId)` · `discardLessonRevision(draftId)` · `refreshModuleQuiz(moduleId, types?, instruction?)` · `applyQuizRefresh(draftId, keepIds)` · `revertQuizRefresh(draftId)` — thin wrappers, same error-handling conventions as the existing API.

New components: `RefineLessonDialog` (instruction → run → before/after review) inside `LessonEditorSheet`; `QuizRefreshDialog` inside `QuizEditor`.

---

## 7. Prompt contract essentials (refine-lesson)

- Full Caribbean context header (shared constant with enhance-module).
- The lesson's current content as raw JSON blocks + the admin's instruction.
- Hard rules stated to the model, enforced by validation:
  1. Return the **complete** lesson as a JSON block array — never a fragment or a diff.
  2. **Preserve verbatim** any block you were not asked to change — *especially* `video-placeholder`, `image-placeholder`, `island-comparison`, `case-study`, `scenario-simulation` blocks, which must appear in the output byte-identical unless the instruction explicitly targets them.
  3. Only the 13 documented block shapes; depth/quality bar identical to the enhance DEPTH rules (full teaching paragraphs, real drugs/regulations/islands, honest `duration_minutes`).
- Server re-checks rule 2 mechanically: every preservation-class block present in the input must appear in the output (deep-equal), else the run is rejected and retried once with that feedback.

## 8. Failure handling

- **150 s gateway drop (the known cosmetic IDLE_TIMEOUT):** the draft row is the source of truth. On a network error the client polls `lesson_revision_drafts` (or `module_enhancement_drafts`) for a row for this lesson/module created after the invocation started, for up to 3 minutes — exactly the recovery pattern generate-course uses with `ai_job_id`. If found, proceed to review as if the call had returned. The pending ✦ badge (§5.1.7) is the final safety net.
- **Validation failure after retry:** clear error toast, nothing staged or spent beyond the tokens, run again.
- **Apply/Undo conflicts:** RPCs lock the draft row; double-clicks and duplicate applies are no-ops.

## 9. Cost & telemetry

Per-run token usage is stored on the draft row (`tokens_in`/`tokens_out`) exactly like module enhance today. Expected magnitudes: lesson refine ≈ one-third to one-half of a full module enhance (single lesson in + out); quiz refresh ≈ the existing quiz-only enhance path. Both are single Opus calls (plus at most one retry).

## 10. Build phases (each = incremental commits on one branch, one PR)

1. **Migration** — `lesson_revision_drafts`, the two `module_enhancement_drafts` columns, four RPCs. Additive; counts verified unchanged after apply.
2. **`refine-lesson` Edge Function** + block validator + preservation check. Verified live on a ZZ E2E lesson.
3. **`enhance-module` `quiz_refresh` target.** Verified live on a ZZ E2E module.
4. **admin-api wrappers + RefineLessonDialog** in LessonEditorSheet (badge, review, apply, undo).
5. **QuizRefreshDialog** in QuizEditor (keep-checkboxes, apply, undo).
6. **E2E specs** (non-AI parts mocked-free: badge/undo flows exercised against seeded drafts inserted via admin client; one `@ai`-tagged live-generation spec each). Mobile pass 375/430. PR → Coderabbit (manual trigger) → merge.

## 11. Acceptance criteria

- Refine never runs without an instruction; nothing reaches `lessons.content` without Apply; Undo restores the byte-identical previous content.
- A lesson containing all 13 block types survives an unrelated refine instruction with every preservation-class block intact (automated check).
- Quiz refresh with two questions marked Keep results in exactly: kept 2 + proposed N, ordered kept-first; Undo restores the original set exactly; `course_progress` rows untouched.
- Both flows recover after a simulated dropped connection via the draft-polling path.
- Global content counts never decrease except through an explicit Apply, and every Apply has a matching snapshot.

## 12. Open questions for Ian

1. **Quiz refresh default:** existing questions default to *replace* (tick to Keep) — agreed? (Flip to default-Keep if you'd rather opt-in to deletion.)
2. **Refine chips:** happy with the seven proposed quick-picks, or add/remove any?
3. Should **Refine ✦** also appear on the Courses-page lesson rows later, or is the Curriculum sheet + QuizEditor enough for v1? (Doc assumes v1 = the two in-place surfaces only.)
