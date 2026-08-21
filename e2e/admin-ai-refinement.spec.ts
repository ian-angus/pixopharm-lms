// ============================================================================
// AI content refinement — review/apply/undo flows WITHOUT AI spend.
// Seeds staged drafts directly (the live generation paths were verified
// manually against the deployed functions), then drives the review UI and the
// RPCs, asserting DB state after every step. ZZ E2E prefix contract applies;
// draft rows cascade-delete with their prefixed lesson/module parents.
// ============================================================================

import { expect, test } from "@playwright/test";
import type { SupabaseClient } from "@supabase/supabase-js";
import {
  adminClient,
  cleanupAllE2EEntities,
  seedCourse,
  seedModule,
  seedLesson,
  seedQuizQuestion,
  PREFIX,
  SLUG_PREFIX,
} from "./helpers/db";
import {
  courseCard,
  curriculumColumn,
  expandCourseModules,
  gotoAdminCurriculum,
  signIn,
} from "./helpers/ui";

const COURSE_TITLE = `${PREFIX} Refinement Course`;
const COURSE_SLUG = `${SLUG_PREFIX}refinement-course`;
const MODULE_TITLE = `${PREFIX} Refinement Module`;
const LESSON_TITLE = `${PREFIX} Refinement Lesson`;

const ORIGINAL_CONTENT = [
  { type: "heading", level: 2, text: "Stock Rotation Basics" },
  { type: "text", body: "ZZ E2E ORIGINAL PARAGRAPH about FEFO rotation." },
  { type: "video-placeholder", title: "ZZ E2E Cold Chain Video", duration: "4 min", description: "Fridge tour." },
  { type: "text", body: "Technicians check expiry dates weekly." },
];

const REVISED_CONTENT = [
  { type: "heading", level: 2, text: "Stock Rotation Basics" },
  { type: "text", body: "ZZ E2E REVISED PARAGRAPH with deeper FEFO teaching." },
  { type: "video-placeholder", title: "ZZ E2E Cold Chain Video", duration: "4 min", description: "Fridge tour." },
  { type: "key-term", term: "ZZ E2E FEFO", definition: "First expiry, first out." },
  { type: "text", body: "Technicians check expiry dates weekly." },
];

let db: SupabaseClient;
let moduleId: string;
let lessonId: string;
let keepQuestionId: string;
let replaceQuestionId: string;
let quizDraftId: string;

test.beforeAll(async () => {
  db = await adminClient();
  await cleanupAllE2EEntities(db);
  const course = await seedCourse(db, {
    title: COURSE_TITLE,
    slug: COURSE_SLUG,
    status: "draft",
    domain_id: null,
  });
  const mod = await seedModule(db, course.id, MODULE_TITLE);
  moduleId = mod.id;
  const lesson = await seedLesson(db, moduleId, LESSON_TITLE, ORIGINAL_CONTENT);
  lessonId = lesson.id;

  // Staged lesson revision (as refine-lesson would have written it).
  const { error: revErr } = await db.from("lesson_revision_drafts").insert({
    lesson_id: lessonId,
    instruction: "ZZ E2E deepen the lesson",
    status: "pending_review",
    revised_content: REVISED_CONTENT,
    revised_duration: 12,
    model: "claude-opus-4-8",
  });
  if (revErr) throw new Error(`seed lesson revision: ${revErr.message}`);

  // Existing quiz questions + a staged quiz_refresh draft.
  keepQuestionId = (
    await seedQuizQuestion(db, moduleId, {
      question: `${PREFIX} KEEP ME: cold chain range?`,
      question_type: "multiple_choice",
      options: ["2-8C", "0-4C", "8-15C", "-2-2C"],
      correct_answer: 0,
      explanation: "Cold chain is 2-8C per storage requirements.",
      order_index: 1,
    })
  ).id;
  replaceQuestionId = (
    await seedQuizQuestion(db, moduleId, {
      question: `${PREFIX} REPLACE ME: stale question?`,
      question_type: "multiple_choice",
      options: ["A", "B", "C", "D"],
      correct_answer: 1,
      explanation: "Stale question that should be replaced.",
      order_index: 2,
    })
  ).id;
  const { data: qd, error: qdErr } = await db
    .from("module_enhancement_drafts")
    .insert({
      module_id: moduleId,
      kind: "quiz_refresh",
      status: "pending_review",
      payload: {
        module_id: moduleId,
        module_title: MODULE_TITLE,
        instruction: "ZZ E2E focus",
        quiz_questions: [
          {
            question_type: "multiple_choice",
            question: `${PREFIX} PROPOSED: what does FEFO mean?`,
            options: ["First expiry first out", "First entry first out", "Fastest expiry", "None"],
            correct_answer: 0,
            explanation: "FEFO dispenses the earliest-expiring stock first.",
            difficulty: "easy",
            blooms_level: "remember",
          },
          {
            question_type: "true_false",
            question: `${PREFIX} PROPOSED: insulin can sit at 15C indefinitely.`,
            question_data: { correct_answer: false },
            explanation: "Insulin requires 2-8C storage; excursions need pharmacist assessment.",
            difficulty: "easy",
            blooms_level: "remember",
          },
        ],
        case: null,
        generated_at: "2026-08-21T00:00:00Z",
      },
      requested_types: [],
      model: "claude-opus-4-8",
    })
    .select("id")
    .single();
  if (qdErr || !qd) throw new Error(`seed quiz refresh draft: ${qdErr?.message}`);
  quizDraftId = qd.id;
});

test.afterAll(async () => {
  await cleanupAllE2EEntities(db);
});

async function lessonBlockCount(): Promise<number> {
  const { data, error } = await db.from("lessons").select("content").eq("id", lessonId).single();
  if (error) throw new Error(error.message);
  return Array.isArray(data.content) ? data.content.length : 0;
}

test("pending AI proposal badge opens review; apply and undo round-trip the lesson", async ({ page }) => {
  await signIn(page);
  await gotoAdminCurriculum(page);

  const card = courseCard(curriculumColumn(page, "Unsorted"), COURSE_TITLE);
  await expect(card).toBeVisible();
  await expandCourseModules(card);
  const moduleRow = card.locator('[data-testid="module-row"]').filter({ hasText: MODULE_TITLE });
  await moduleRow.locator('button[title="Edit lessons"]').click();

  const sheet = page.getByRole("dialog").filter({ hasText: `Lessons — ${MODULE_TITLE}` });
  await expect(sheet.getByText(LESSON_TITLE)).toBeVisible();

  // The pending proposal surfaces as the amber badge and opens straight into review.
  await sheet.locator('button[title="Review AI proposal"]').click();
  const dialog = page.getByRole("dialog").filter({ hasText: "Refine with AI ✦" });
  await expect(dialog.getByText("4 → 5 blocks")).toBeVisible();
  await expect(dialog.getByText("ZZ E2E REVISED PARAGRAPH with deeper FEFO teaching.")).toBeVisible();

  // Apply → lesson now has the revised 5 blocks.
  await dialog.getByRole("button", { name: "Apply to lesson" }).click();
  await expect(dialog.getByText("Applied ✓")).toBeVisible();
  await expect.poll(lessonBlockCount).toBe(5);

  // Undo → byte-identical restore of the original 4 blocks.
  await dialog.getByRole("button", { name: "Undo" }).click();
  await expect(dialog).toBeHidden();
  await expect.poll(lessonBlockCount).toBe(4);
  const { data: restored } = await db.from("lessons").select("content").eq("id", lessonId).single();
  expect(restored!.content).toEqual(ORIGINAL_CONTENT);
});

test("quiz refresh dialog opens from the Quiz editor; apply/revert RPCs keep + replace correctly", async ({ page }) => {
  await signIn(page);
  await gotoAdminCurriculum(page);
  const card = courseCard(curriculumColumn(page, "Unsorted"), COURSE_TITLE);
  await expandCourseModules(card);
  const moduleRow = card.locator('[data-testid="module-row"]').filter({ hasText: MODULE_TITLE });
  await moduleRow.locator('button[title="Edit quiz"]').click();

  // The refresh entry point exists in the Quiz editor and cancels cleanly
  // (Generate would spend real AI money, so the generation itself is covered
  // by the manual live verification against the deployed function).
  const quizSheet = page.getByRole("dialog").filter({ hasText: `Quiz — ${MODULE_TITLE}` });
  await quizSheet.getByRole("button", { name: "⟳ Refresh with AI" }).click();
  const refreshDialog = page.getByRole("dialog").filter({ hasText: "Refresh with AI ✦" });
  await expect(refreshDialog.getByText("Question types (optional)")).toBeVisible();
  await refreshDialog.getByRole("button", { name: "Cancel" }).click();
  await expect(refreshDialog).toBeHidden();

  // Apply the seeded proposal via the RPC, keeping only the KEEP question.
  const { data: applyRes, error: applyErr } = await db.rpc("apply_quiz_refresh", {
    p_draft_id: quizDraftId,
    p_keep_ids: [keepQuestionId],
  });
  expect(applyErr).toBeNull();
  expect(applyRes.kept).toBe(1);
  expect(applyRes.inserted).toBe(2);

  const { data: afterApply } = await db
    .from("quiz_questions")
    .select("id, question, order_index")
    .eq("module_id", moduleId)
    .order("order_index");
  expect(afterApply).toHaveLength(3);
  expect(afterApply![0].id).toBe(keepQuestionId);
  expect(afterApply!.some((q) => q.question.startsWith(`${PREFIX} REPLACE ME`))).toBe(false);
  expect(afterApply!.some((q) => q.question.startsWith(`${PREFIX} PROPOSED`))).toBe(true);

  // Revert → the exact original pair, original ids included.
  const { error: revertErr } = await db.rpc("revert_quiz_refresh", { p_draft_id: quizDraftId });
  expect(revertErr).toBeNull();
  const { data: afterRevert } = await db
    .from("quiz_questions")
    .select("id")
    .eq("module_id", moduleId)
    .order("order_index");
  expect(afterRevert!.map((q) => q.id)).toEqual([keepQuestionId, replaceQuestionId]);
});
