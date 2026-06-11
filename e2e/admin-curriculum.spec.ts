// ============================================================================
// Spec 1 — Admin Curriculum Organizer CRUD (UI-driven, DB-verified).
// Creates ZZ E2E domain → course → module, verifies persistence across a
// reload (UI + DB), then deletes module, course and domain (reassign flow)
// and verifies the rows are gone. Cleanup runs even on failure.
// ============================================================================

import { expect, test } from "@playwright/test";
import type { SupabaseClient } from "@supabase/supabase-js";
import { adminClient, cleanupAllE2EEntities } from "./helpers/db";
import {
  courseCard,
  curriculumColumn,
  expandCourseModules,
  gotoAdminCurriculum,
  signIn,
} from "./helpers/ui";

const ts = Date.now();
const DOMAIN_NAME = `ZZ E2E Domain ${ts}`;
const COURSE_TITLE = `ZZ E2E Course ${ts}`;
const MODULE_TITLE = `ZZ E2E Module ${ts}`;

let db: SupabaseClient;

test.beforeAll(async () => {
  db = await adminClient();
  await cleanupAllE2EEntities(db); // start from a clean slate
});

test.afterAll(async () => {
  if (!db) return; // beforeAll failed before the client existed
  try {
    await cleanupAllE2EEntities(db);
  } finally {
    await db.auth.signOut();
  }
});

test("admin can create, persist and delete domain → course → module", async ({ page }) => {
  await signIn(page);
  await gotoAdminCurriculum(page);

  // ── Create domain ──────────────────────────────────────────────────────
  await page.getByRole("button", { name: "New Domain" }).click();
  const domainDialog = page.getByRole("dialog");
  await expect(domainDialog.getByText("New Domain")).toBeVisible();
  await domainDialog.getByLabel("Name").fill(DOMAIN_NAME);
  await domainDialog.getByRole("button", { name: "Create domain" }).click();
  await expect(domainDialog).toBeHidden();

  const column = curriculumColumn(page, DOMAIN_NAME);
  await expect(column).toBeVisible();

  // ── Create course inside the new domain ────────────────────────────────
  await column.getByRole("button", { name: "Add course" }).click();
  const courseDialog = page.getByRole("dialog");
  await expect(courseDialog.getByText("New Course")).toBeVisible();
  await courseDialog.getByLabel("Title").fill(COURSE_TITLE);
  await courseDialog.getByRole("button", { name: "Create course" }).click();
  await expect(courseDialog).toBeHidden();

  const card = courseCard(column, COURSE_TITLE);
  await expect(card).toBeVisible();

  // ── Create module inside the course ────────────────────────────────────
  await expandCourseModules(card);
  await expect(card.getByText("No modules yet.")).toBeVisible();
  await card.getByRole("button", { name: "Add module" }).click();
  const moduleDialog = page.getByRole("dialog");
  await expect(moduleDialog.getByText("New Module")).toBeVisible();
  await moduleDialog.getByLabel("Title").fill(MODULE_TITLE);
  await moduleDialog.getByRole("button", { name: "Add module" }).click();
  await expect(moduleDialog).toBeHidden();
  await expect(card.getByText(MODULE_TITLE)).toBeVisible();

  // ── Reload → everything persisted (UI) ─────────────────────────────────
  await page.reload();
  await expect(page.getByRole("button", { name: "My Journey" }).first()).toBeVisible({ timeout: 20_000 });
  await gotoAdminCurriculum(page);

  const columnAfter = curriculumColumn(page, DOMAIN_NAME);
  await expect(columnAfter).toBeVisible();
  const cardAfter = courseCard(columnAfter, COURSE_TITLE);
  await expect(cardAfter).toBeVisible();
  await expandCourseModules(cardAfter);
  await expect(cardAfter.getByText(MODULE_TITLE)).toBeVisible({ timeout: 20_000 });

  // ── Persisted (DB) ──────────────────────────────────────────────────────
  const { data: domainRow } = await db.from("domains").select("id, name").eq("name", DOMAIN_NAME).single();
  expect(domainRow, "domain row must exist in DB").toBeTruthy();
  expect(domainRow?.name).toBe(DOMAIN_NAME);
  const { data: courseRow } = await db
    .from("courses")
    .select("id, title, domain_id")
    .eq("title", COURSE_TITLE)
    .single();
  expect(courseRow, "course row must exist in DB").toBeTruthy();
  expect(courseRow?.domain_id).toBe(domainRow?.id);
  const { data: moduleRow } = await db
    .from("modules")
    .select("id, title, course_id")
    .eq("title", MODULE_TITLE)
    .single();
  expect(moduleRow, "module row must exist in DB").toBeTruthy();
  expect(moduleRow?.course_id).toBe(courseRow?.id);

  // ── Delete module ───────────────────────────────────────────────────────
  const moduleRowLoc = cardAfter.locator('[data-testid="module-row"]').filter({ hasText: MODULE_TITLE }).first();
  await moduleRowLoc.hover();
  await moduleRowLoc.locator('button[title="Delete module"]').click();
  const confirmModule = page.getByRole("dialog");
  await expect(confirmModule.getByText(`Delete "${MODULE_TITLE}"?`)).toBeVisible();
  await confirmModule.getByRole("button", { name: "Delete module" }).click();
  await expect(confirmModule).toBeHidden();
  await expect(cardAfter.getByText(MODULE_TITLE)).toBeHidden();

  // ── Delete course (dropdown menu) ──────────────────────────────────────
  await cardAfter.locator('button[title="Course options"]').click();
  await page.getByRole("menuitem", { name: "Delete course" }).click();
  const confirmCourse = page.getByRole("dialog");
  await expect(confirmCourse.getByText(`Delete "${COURSE_TITLE}"?`)).toBeVisible();
  await confirmCourse.getByRole("button", { name: "Delete course" }).click();
  await expect(confirmCourse).toBeHidden();
  await expect(courseCard(columnAfter, COURSE_TITLE)).toBeHidden();

  // ── Delete domain (reassign flow — keep default "Unsorted") ────────────
  await columnAfter.locator('button[title="Domain options"]').click();
  await page.getByRole("menuitem", { name: "Delete domain" }).click();
  const confirmDomain = page.getByRole("dialog");
  await expect(confirmDomain.getByText(`Delete "${DOMAIN_NAME}"?`)).toBeVisible();
  // Reassign picker present (defaults to Unsorted)
  await expect(confirmDomain.getByText("Move its courses to")).toBeVisible();
  await confirmDomain.getByRole("button", { name: "Delete domain" }).click();
  await expect(confirmDomain).toBeHidden();
  await expect(curriculumColumn(page, DOMAIN_NAME)).toBeHidden();

  // ── Gone in DB ──────────────────────────────────────────────────────────
  const { data: domains } = await db.from("domains").select("id").eq("name", DOMAIN_NAME);
  expect(domains ?? []).toHaveLength(0);
  const { data: courses } = await db.from("courses").select("id").eq("title", COURSE_TITLE);
  expect(courses ?? []).toHaveLength(0);
  const { data: modules } = await db.from("modules").select("id").eq("title", MODULE_TITLE);
  expect(modules ?? []).toHaveLength(0);
});
