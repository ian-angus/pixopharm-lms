// ============================================================================
// Spec 2 — Quiz Editor: author one question of each of the 8 types through
// the admin forms, verify the list (type badges) after reload, verify the
// persisted question_data shapes in the DB, delete one, full cleanup.
// ============================================================================

import { expect, test, type Locator, type Page } from "@playwright/test";
import type { SupabaseClient } from "@supabase/supabase-js";
import { adminClient, cleanupAllE2EEntities, seedCourse, seedModule } from "./helpers/db";
import { courseCard, curriculumColumn, expandCourseModules, gotoAdminCurriculum, signIn } from "./helpers/ui";

const ts = Date.now();
const COURSE_TITLE = `ZZ E2E QuizEd Course ${ts}`;
const COURSE_SLUG = `zz-e2e-quized-${ts}`;
const MODULE_TITLE = `ZZ E2E QuizEd Module ${ts}`;

const Q = {
  mc: `ZZ E2E MC question ${ts}?`,
  ms: `ZZ E2E MS question ${ts}?`,
  ord: `ZZ E2E ORD question ${ts}?`,
  match: `ZZ E2E MATCH question ${ts}?`,
  fib: `ZZ E2E FIB question ${ts}: the answer is ___ here.`,
  tf: `ZZ E2E TF question ${ts}.`,
  scen: `ZZ E2E SCEN question ${ts}?`,
  num: `ZZ E2E NUM question ${ts}?`,
};
const EXPLANATION = `ZZ E2E explanation ${ts}.`;

let db: SupabaseClient;
let moduleId: string;

test.beforeAll(async () => {
  db = await adminClient();
  await cleanupAllE2EEntities(db);
  const course = await seedCourse(db, { title: COURSE_TITLE, slug: COURSE_SLUG, status: "draft" });
  const mod = await seedModule(db, course.id, MODULE_TITLE);
  moduleId = mod.id;
});

test.afterAll(async () => {
  if (!db) return; // beforeAll failed before the client existed
  try {
    await cleanupAllE2EEntities(db);
  } finally {
    await db.auth.signOut();
  }
});

// ── Form-driving helpers ─────────────────────────────────────────────────────

function formDialog(page: Page): Locator {
  return page.getByRole("dialog").filter({ hasText: "New question" });
}

async function openQuizEditor(page: Page): Promise<Locator> {
  await gotoAdminCurriculum(page);
  const column = curriculumColumn(page, "Unsorted");
  const card = courseCard(column, COURSE_TITLE);
  await expect(card).toBeVisible({ timeout: 30_000 });
  await expandCourseModules(card);
  const moduleRow = card.locator('[data-testid="module-row"]').filter({ hasText: MODULE_TITLE }).first();
  await moduleRow.hover();
  await moduleRow.locator('button[title="Edit quiz"]').click();
  const sheet = page.getByRole("dialog").filter({ hasText: `Quiz — ${MODULE_TITLE}` });
  await expect(sheet).toBeVisible();
  return sheet;
}

async function startNewQuestion(page: Page, sheet: Locator, typeLabel: string, question: string): Promise<Locator> {
  await sheet.getByRole("button", { name: "+ Add question" }).click();
  const dialog = formDialog(page);
  await expect(dialog).toBeVisible();
  // First combobox in the form = question type
  await dialog.getByRole("combobox").first().click();
  await page.getByRole("option", { name: typeLabel, exact: true }).click();
  await dialog.locator("textarea").first().fill(question);
  return dialog;
}

async function saveQuestion(page: Page, dialog: Locator, question: string, sheet: Locator): Promise<void> {
  await dialog.getByPlaceholder("Why is this the correct answer?").fill(EXPLANATION);
  await dialog.getByRole("button", { name: "Add question", exact: true }).click();
  await expect(dialog).toBeHidden({ timeout: 20_000 });
  await expect(sheet.getByText(question)).toBeVisible({ timeout: 20_000 });
}

// ── Test ─────────────────────────────────────────────────────────────────────

test("author all 8 question types, verify badges + DB shapes, delete one", async ({ page }) => {
  test.setTimeout(300_000);
  await signIn(page);
  let sheet = await openQuizEditor(page);

  // 1. Multiple Choice
  let dialog = await startNewQuestion(page, sheet, "Multiple Choice", Q.mc);
  for (const [i, letter] of ["A", "B", "C", "D"].entries()) {
    await dialog.getByPlaceholder(`Option ${letter}`).fill(`ZZ MC option ${letter}`);
    void i;
  }
  await dialog.locator("#opt-correct-1").click();
  await saveQuestion(page, dialog, Q.mc, sheet);

  // 2. Select All (multiple_select)
  dialog = await startNewQuestion(page, sheet, "Select All", Q.ms);
  for (const letter of ["A", "B", "C", "D"]) {
    await dialog.getByPlaceholder(`Option ${letter}`).fill(`ZZ MS option ${letter}`);
  }
  await dialog.getByRole("checkbox").nth(0).click();
  await dialog.getByRole("checkbox").nth(2).click();
  await saveQuestion(page, dialog, Q.ms, sheet);

  // 3. Ordering
  dialog = await startNewQuestion(page, sheet, "Ordering", Q.ord);
  for (const i of [1, 2, 3]) {
    await dialog.getByPlaceholder(`Step ${i}`).fill(`ZZ step ${i}`);
  }
  await saveQuestion(page, dialog, Q.ord, sheet);

  // 4. Matching
  dialog = await startNewQuestion(page, sheet, "Matching", Q.match);
  for (const i of [1, 2, 3]) {
    await dialog.getByPlaceholder(`Left ${i}`).fill(`ZZ left ${i}`);
    await dialog.getByPlaceholder(`Right ${i}`).fill(`ZZ right ${i}`);
  }
  await saveQuestion(page, dialog, Q.match, sheet);

  // 5. Fill in the Blank
  dialog = await startNewQuestion(page, sheet, "Fill in the Blank", Q.fib);
  await dialog.locator("textarea").nth(1).fill("testanswer\nTest Answer");
  await saveQuestion(page, dialog, Q.fib, sheet);

  // 6. True / False (answer = True, the default — assert the radios exist)
  dialog = await startNewQuestion(page, sheet, "True / False", Q.tf);
  await dialog.locator("#tf-true").click();
  await saveQuestion(page, dialog, Q.tf, sheet);

  // 7. Scenario
  dialog = await startNewQuestion(page, sheet, "Scenario", Q.scen);
  for (const letter of ["A", "B", "C", "D"]) {
    await dialog.getByPlaceholder(`Option ${letter}`).fill(`ZZ SCEN option ${letter}`);
  }
  await dialog.locator("#opt-correct-2").click();
  await saveQuestion(page, dialog, Q.scen, sheet);

  // 8. Calculation (numeric)
  dialog = await startNewQuestion(page, sheet, "Calculation", Q.num);
  await dialog.getByPlaceholder("e.g. 4.5").fill("12.5");
  await dialog.getByPlaceholder("0", { exact: true }).fill("0.5");
  await dialog.getByPlaceholder("e.g. mL, mg, tablets").fill("mL");
  await saveQuestion(page, dialog, Q.num, sheet);

  await expect(sheet.getByText("8 questions")).toBeVisible();

  // ── Reload → all 8 listed with type badges ─────────────────────────────
  await page.reload();
  await expect(page.getByRole("button", { name: "My Journey" }).first()).toBeVisible({ timeout: 20_000 });
  sheet = await openQuizEditor(page);
  await expect(sheet.getByText("8 questions")).toBeVisible({ timeout: 20_000 });
  for (const badge of [
    "Multiple Choice",
    "Select All",
    "Ordering",
    "Matching",
    "Fill in the Blank",
    "True / False",
    "Scenario",
    "Calculation",
  ]) {
    await expect(sheet.getByText(badge, { exact: true })).toBeVisible();
  }

  // ── DB: correct question_data shape per type ───────────────────────────
  const { data: rows } = await db
    .from("quiz_questions")
    .select("question, question_type, options, correct_answer, question_data, explanation")
    .eq("module_id", moduleId);
  expect(rows).toHaveLength(8);
  const byType = new Map((rows ?? []).map((r) => [r.question_type as string, r]));
  const EXPECTED_TYPES = ["multiple_choice", "multiple_select", "ordering", "matching", "fill_in_blank", "true_false", "scenario", "numeric"];
  for (const t of EXPECTED_TYPES) {
    expect(byType.has(t), `DB must contain a ${t} question`).toBe(true);
  }

  const mc = byType.get("multiple_choice")!;
  expect(mc.options).toHaveLength(4);
  expect(mc.correct_answer).toBe(1);

  const ms = byType.get("multiple_select")!;
  expect(ms.options).toHaveLength(4);
  expect(ms.question_data.correct_indices).toEqual([0, 2]);

  const ord = byType.get("ordering")!;
  expect(ord.options).toEqual(["ZZ step 1", "ZZ step 2", "ZZ step 3"]);
  expect(ord.question_data.correct_order).toEqual([0, 1, 2]);

  const match = byType.get("matching")!;
  expect(match.question_data.pairs).toEqual([
    { left: "ZZ left 1", right: "ZZ right 1" },
    { left: "ZZ left 2", right: "ZZ right 2" },
    { left: "ZZ left 3", right: "ZZ right 3" },
  ]);

  const fib = byType.get("fill_in_blank")!;
  expect(fib.question).toContain("___");
  expect(fib.question_data.acceptable_answers).toEqual(["testanswer", "Test Answer"]);

  const tf = byType.get("true_false")!;
  expect(tf.question_data.correct_answer).toBe(true);

  const scen = byType.get("scenario")!;
  expect(scen.options).toHaveLength(4);
  expect(scen.correct_answer).toBe(2);

  const num = byType.get("numeric")!;
  expect(num.question_data.answer).toBe(12.5);
  expect(num.question_data.tolerance).toBe(0.5);
  expect(num.question_data.unit).toBe("mL");

  for (const row of rows ?? []) {
    expect(row.explanation).toBe(EXPLANATION);
  }

  // ── Delete one question (the numeric one) ──────────────────────────────
  const numRow = sheet.locator("div.rounded-lg.border").filter({ hasText: Q.num }).first();
  await numRow.getByRole("button", { name: "Delete", exact: true }).click();
  const confirm = page.getByRole("dialog").filter({ hasText: "Delete question?" });
  await confirm.getByRole("button", { name: "Delete question" }).click();
  await expect(confirm).toBeHidden();
  await expect(sheet.getByText("7 questions")).toBeVisible({ timeout: 20_000 });

  const { count } = await db
    .from("quiz_questions")
    .select("*", { count: "exact", head: true })
    .eq("module_id", moduleId);
  expect(count).toBe(7);
});
