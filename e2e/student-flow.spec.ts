// ============================================================================
// Spec 4 — Student journey: My Journey renders 8+ stages with courses, the
// homepage catalog is grouped by "Stage N — {domain}" with NO skill-level
// filter buttons, and a course opened from the journey supports navigating
// its lessons in order. Read-only — creates nothing in the DB.
// ============================================================================

import { expect, test } from "@playwright/test";
import { anonClient } from "./helpers/db";
import { signIn } from "./helpers/ui";

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

interface StagePlan {
  stageNames: string[];
  course: { title: string; slug: string };
  lessonTitles: string[];
}

/** Derive the expected journey from the live DB (same queries the app makes). */
async function expectedJourney(): Promise<StagePlan> {
  const db = anonClient();
  const [{ data: domains }, { data: courses }, { data: modules }, { data: lessons }] = await Promise.all([
    db.from("domains").select("id, name, order_index").order("order_index"),
    db.from("courses").select("id, title, slug, domain_id, order").eq("status", "published"),
    db.from("modules").select("id, course_id, order_index"),
    db.from("lessons").select("id, module_id, title, order_index"),
  ]);
  if (!domains || !courses || !modules || !lessons) throw new Error("could not read journey data");

  const coursesByDomain = new Map<string, typeof courses>();
  for (const c of courses) {
    if (!c.domain_id) continue;
    const arr = coursesByDomain.get(c.domain_id) ?? [];
    arr.push(c);
    coursesByDomain.set(c.domain_id, arr);
  }
  const stageNames = domains
    .filter((d) => !d.name.toLowerCase().includes("elective"))
    .filter((d) => (coursesByDomain.get(d.id) ?? []).length > 0)
    .map((d) => d.name);

  // First-stage course with >= 2 lessons in its first module (for lesson nav).
  const lessonsByModule = new Map<string, typeof lessons>();
  for (const l of lessons) {
    const arr = lessonsByModule.get(l.module_id) ?? [];
    arr.push(l);
    lessonsByModule.set(l.module_id, arr);
  }
  const firstStageDomain = domains.find((d) => d.name === stageNames[0])!;
  const stageCourses = (coursesByDomain.get(firstStageDomain.id) ?? []).sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
  for (const course of stageCourses) {
    const courseModules = modules
      .filter((m) => m.course_id === course.id)
      .sort((a, b) => a.order_index - b.order_index);
    if (courseModules.length === 0) continue;
    const firstModuleLessons = (lessonsByModule.get(courseModules[0].id) ?? []).sort(
      (a, b) => a.order_index - b.order_index
    );
    if (firstModuleLessons.length >= 2) {
      return {
        stageNames,
        course: { title: course.title, slug: course.slug },
        lessonTitles: firstModuleLessons.map((l) => l.title),
      };
    }
  }
  throw new Error("no first-stage course with >=2 lessons found");
}

test("journey shows 8+ stages, catalog has Stage sections without level filters, lessons navigate in order", async ({
  page,
}) => {
  const plan = await expectedJourney();
  expect(plan.stageNames.length, "journey must have at least 8 core stages").toBeGreaterThanOrEqual(8);

  await signIn(page);

  // ── My Journey: 8+ stages, each with courses ───────────────────────────
  await page.getByRole("button", { name: "My Journey" }).first().click();
  await expect(page.getByText("▶ Start here")).toBeVisible({ timeout: 30_000 });
  for (const name of plan.stageNames) {
    await expect(page.getByRole("heading", { name, exact: true })).toBeVisible();
  }
  // The first stage lists our chosen course as a clickable entry.
  const courseButton = page.getByRole("button", { name: new RegExp(escapeRegex(plan.course.title)) }).first();
  await expect(courseButton).toBeVisible();

  // ── Homepage catalog: Stage sections, no skill-level filter buttons ────
  await page.goto("/");
  await expect(page.getByText(/Stage 1 — /).first()).toBeVisible({ timeout: 30_000 });
  for (const label of ["Beginner", "Intermediate", "Advanced"]) {
    await expect(page.getByRole("button", { name: label, exact: true })).toHaveCount(0);
  }

  // ── Open the course from the journey and navigate lessons in order ─────
  await page.getByRole("button", { name: "My Journey" }).first().click();
  await expect(page.getByText("▶ Start here")).toBeVisible({ timeout: 30_000 });
  await page.getByRole("button", { name: new RegExp(escapeRegex(plan.course.title)) }).first().click();

  // CoursePlayer overview
  await expect(page.getByRole("heading", { level: 1, name: plan.course.title })).toBeVisible({ timeout: 30_000 });

  // Sidebar lesson buttons navigate without mutating progress.
  const lesson1 = page.getByRole("button", { name: new RegExp(escapeRegex(plan.lessonTitles[0])) }).first();
  await lesson1.click();
  await expect(page.getByText(/Lesson 1 of \d+/)).toBeVisible({ timeout: 30_000 });
  await expect(page.getByRole("heading", { level: 1, name: plan.lessonTitles[0] })).toBeVisible();

  const lesson2 = page.getByRole("button", { name: new RegExp(escapeRegex(plan.lessonTitles[1])) }).first();
  await lesson2.click();
  await expect(page.getByText(/Lesson 2 of \d+/)).toBeVisible({ timeout: 30_000 });
  await expect(page.getByRole("heading", { level: 1, name: plan.lessonTitles[1] })).toBeVisible();
});
