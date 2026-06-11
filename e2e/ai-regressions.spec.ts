// ============================================================================
// Spec 6 — AI pipeline regressions. Tagged @ai: SKIPPED by default
// (`pnpm test:e2e` grep-inverts @ai) because each call costs real Claude API
// money and takes ~2 minutes. Run explicitly with `pnpm test:e2e:ai`.
//
// Invokes the edge functions with the admin session's access token via
// supabase.functions.invoke. Full prefix-scoped cleanup even on failure.
// ============================================================================

import { expect, test } from "@playwright/test";
import type { SupabaseClient } from "@supabase/supabase-js";
import { adminClient, cleanupAllE2EEntities, seedCourse, seedLesson, seedModule } from "./helpers/db";

const ts = Date.now();

let db: SupabaseClient;

test.beforeAll(async () => {
  db = await adminClient();
  await cleanupAllE2EEntities(db);
});

test.afterAll(async () => {
  if (!db) return; // beforeAll failed before the client existed
  try {
    await cleanupAllE2EEntities(db);
  } finally {
    await db.auth.signOut();
  }
});

test("@ai enhance-module (append) fills an empty lesson and generates a typed quiz", async () => {
  test.setTimeout(420_000);

  const course = await seedCourse(db, {
    title: `ZZ E2E AI Enhance Course ${ts}`,
    slug: `zz-e2e-ai-enhance-${ts}`,
    status: "draft",
  });
  const mod = await seedModule(db, course.id, `ZZ E2E AI Enhance Module ${ts}`);
  // One EMPTY lesson — append mode fills only empty lessons.
  await seedLesson(db, mod.id, `ZZ E2E AI Enhance Lesson ${ts}`, []);

  const { data, error } = await db.functions.invoke("enhance-module", {
    body: { module_id: mod.id, mode: "append" },
  });
  expect(error, `enhance-module invoke error: ${error?.message}`).toBeNull();
  expect(data?.error, `enhance-module returned error: ${data?.error}`).toBeFalsy();

  // ≥5 questions across ≥3 types, every one with an explanation.
  const { data: questions } = await db
    .from("quiz_questions")
    .select("id, question_type, explanation")
    .eq("module_id", mod.id);
  expect((questions ?? []).length).toBeGreaterThanOrEqual(5);
  const types = new Set((questions ?? []).map((q) => q.question_type ?? "multiple_choice"));
  expect(types.size).toBeGreaterThanOrEqual(3);
  for (const q of questions ?? []) {
    expect((q.explanation ?? "").trim().length, `question ${q.id} must have an explanation`).toBeGreaterThan(0);
  }

  // The empty lesson must have been filled with content blocks.
  const { data: lessons } = await db.from("lessons").select("content").eq("module_id", mod.id);
  const filled = (lessons ?? []).some((l) => Array.isArray(l.content) && l.content.length > 0);
  expect(filled, "append mode must fill the empty lesson").toBe(true);
});

test("@ai generate-course creates course + modules + lessons in the DB", async () => {
  test.setTimeout(420_000);

  const title = `ZZ E2E Gen Course ${ts}`;
  const jobId = `zz-e2e-job-${ts}`;

  const { data, error } = await db.functions.invoke("generate-course", {
    body: {
      title,
      skill_level: "Beginner",
      duration_weeks: 1,
      jurisdiction: "Trinidad and Tobago",
      focus_areas: "E2E smoke test — keep it minimal",
      job_id: jobId,
    },
  });
  expect(error, `generate-course invoke error: ${error?.message}`).toBeNull();
  expect(data?.error, `generate-course returned error: ${data?.error}`).toBeFalsy();

  // Course saved (located via our title prefix / ai_job_id).
  const { data: courses } = await db.from("courses").select("id, title, status, ai_job_id").eq("ai_job_id", jobId);
  expect(courses, "generated course must be retrievable by its job_id").toBeTruthy();
  expect((courses ?? []).length).toBe(1);
  const courseId = courses?.[0]?.id as string;
  expect(courseId).toBeTruthy();

  const { data: modules } = await db.from("modules").select("id").eq("course_id", courseId);
  expect((modules ?? []).length).toBeGreaterThanOrEqual(1);

  const moduleIds = (modules ?? []).map((m) => m.id);
  const { count: lessonCount } = await db
    .from("lessons")
    .select("*", { count: "exact", head: true })
    .in("module_id", moduleIds);
  expect(lessonCount ?? 0).toBeGreaterThanOrEqual(1);
});
