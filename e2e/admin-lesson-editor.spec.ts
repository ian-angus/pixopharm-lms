// ============================================================================
// Curriculum Organizer — in-place lesson editor (LessonEditorSheet).
// Seeds a ZZ E2E course + module, then adds / renames / reorders / deletes
// lessons entirely from the Curriculum screen, asserting DB state after each
// step. Runs against the production DB under the ZZ E2E prefix contract.
// ============================================================================

import { expect, test } from "@playwright/test";
import type { SupabaseClient } from "@supabase/supabase-js";
import {
  adminClient,
  cleanupAllE2EEntities,
  seedCourse,
  seedModule,
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

const COURSE_TITLE = `${PREFIX} Lesson Editor Course`;
const COURSE_SLUG = `${SLUG_PREFIX}lesson-editor-course`;
const MODULE_TITLE = `${PREFIX} Lesson Editor Module`;
const LESSON_ONE = `${PREFIX} Lesson One`;
const LESSON_ONE_EDITED = `${PREFIX} Lesson One (edited)`;
const LESSON_TWO = `${PREFIX} Lesson Two`;

let db: SupabaseClient;
let moduleId: string;

test.beforeAll(async () => {
  db = await adminClient();
  await cleanupAllE2EEntities(db);
  const course = await seedCourse(db, {
    title: COURSE_TITLE,
    slug: COURSE_SLUG,
    status: "draft",
    domain_id: null, // lands in the Unsorted column
  });
  const mod = await seedModule(db, course.id, MODULE_TITLE);
  moduleId = mod.id;
});

test.afterAll(async () => {
  await cleanupAllE2EEntities(db);
});

async function dbLessonTitlesInOrder(): Promise<string[]> {
  const { data, error } = await db
    .from("lessons")
    .select("title, order_index")
    .eq("module_id", moduleId)
    .order("order_index", { ascending: true });
  if (error) throw new Error(error.message);
  return (data ?? []).map((l) => l.title as string);
}

test("lessons are added, edited, reordered and deleted in place from the Curriculum screen", async ({
  page,
}) => {
  await signIn(page);
  await gotoAdminCurriculum(page);

  const unsorted = curriculumColumn(page, "Unsorted");
  const card = courseCard(unsorted, COURSE_TITLE);
  await expect(card).toBeVisible();
  await expandCourseModules(card);

  const moduleRow = card
    .locator('[data-testid="module-row"]')
    .filter({ hasText: MODULE_TITLE });
  await expect(moduleRow).toBeVisible();

  // 1. Open the lesson sheet in place.
  await moduleRow.locator('button[title="Edit lessons"]').click();
  const sheet = page.getByRole("dialog").filter({ hasText: `Lessons — ${MODULE_TITLE}` });
  await expect(sheet).toBeVisible();
  await expect(sheet.getByText("No lessons yet")).toBeVisible();

  // 2. Add the first lesson.
  await sheet.getByRole("button", { name: "Add lesson" }).click();
  const newForm = page.getByRole("dialog").filter({ hasText: "New Lesson" });
  await newForm.getByLabel("Title *").fill(LESSON_ONE);
  await newForm.getByRole("button", { name: "Create lesson" }).click();
  await expect(sheet.getByText(LESSON_ONE)).toBeVisible();
  await expect.poll(dbLessonTitlesInOrder).toEqual([LESSON_ONE]);

  // 3. Rename it through the edit dialog.
  await sheet.locator('button[title="Edit lesson"]').first().click();
  const editForm = page.getByRole("dialog").filter({ hasText: "Edit Lesson" });
  await editForm.getByLabel("Title *").fill(LESSON_ONE_EDITED);
  await editForm.getByRole("button", { name: "Save changes" }).click();
  await expect(sheet.getByText(LESSON_ONE_EDITED)).toBeVisible();
  await expect.poll(dbLessonTitlesInOrder).toEqual([LESSON_ONE_EDITED]);

  // 4. Add a second lesson, then move it to the top.
  await sheet.getByRole("button", { name: "Add lesson" }).click();
  const secondForm = page.getByRole("dialog").filter({ hasText: "New Lesson" });
  await secondForm.getByLabel("Title *").fill(LESSON_TWO);
  await secondForm.getByRole("button", { name: "Create lesson" }).click();
  await expect(sheet.getByText(LESSON_TWO)).toBeVisible();

  // Second row's "Move up" (the first row's is disabled).
  await sheet.locator('button[title="Move up"]').nth(1).click();
  await expect.poll(dbLessonTitlesInOrder).toEqual([LESSON_TWO, LESSON_ONE_EDITED]);

  // 5. Delete the (now) first lesson via the confirm dialog.
  await sheet.locator('button[title="Delete lesson"]').first().click();
  await page.getByRole("button", { name: "Delete lesson", exact: true }).click();
  await expect.poll(dbLessonTitlesInOrder).toEqual([LESSON_ONE_EDITED]);

  // 6. Close the sheet — the board is still where we left it, count updated.
  await page.keyboard.press("Escape");
  await expect(sheet).toBeHidden();
  await expect(card).toBeVisible();
  await expect(moduleRow.getByText(/1 lessons/)).toBeVisible();
});
