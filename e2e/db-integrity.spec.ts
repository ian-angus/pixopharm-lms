// ============================================================================
// Spec 7 — Database integrity (read-only, admin client, no browser).
// Guards the Phase 1-4 curriculum reorganisation invariants.
// ============================================================================

import { expect, test } from "@playwright/test";
import type { SupabaseClient } from "@supabase/supabase-js";
import { adminClient, fetchAllRows, KNOWN_DRAFT_NO_DOMAIN, SEEDED_DOMAIN_IDS } from "./helpers/db";

let db: SupabaseClient;

test.beforeAll(async () => {
  db = await adminClient();
});

test.afterAll(async () => {
  await db.auth.signOut();
});

test("no orphaned modules or quiz questions", async () => {
  const courses = await fetchAllRows<{ id: string }>(db, "courses", "id");
  const modules = await fetchAllRows<{ id: string; course_id: string }>(db, "modules", "id, course_id");
  const questions = await fetchAllRows<{ id: string; module_id: string }>(db, "quiz_questions", "id, module_id");

  const courseIds = new Set(courses.map((c) => c.id));
  const orphanModules = modules.filter((m) => !courseIds.has(m.course_id));
  expect(orphanModules, `orphaned modules: ${orphanModules.map((m) => m.id).join(", ")}`).toHaveLength(0);

  const moduleIds = new Set(modules.map((m) => m.id));
  const orphanQuestions = questions.filter((q) => !moduleIds.has(q.module_id));
  expect(orphanQuestions, `orphaned questions: ${orphanQuestions.map((q) => q.id).join(", ")}`).toHaveLength(0);
});

test("every non-archived course has a domain (except the known pending draft)", async () => {
  const courses = await fetchAllRows<{ id: string; title: string; status: string; domain_id: string | null }>(
    db,
    "courses",
    "id, title, status, domain_id"
  );
  const offenders = courses.filter(
    (c) =>
      c.status !== "archived" &&
      !c.domain_id &&
      c.id !== KNOWN_DRAFT_NO_DOMAIN &&
      !c.title.startsWith("ZZ E2E") // tolerate concurrent test fixtures
  );
  expect(
    offenders,
    `courses missing domain_id: ${offenders.map((c) => `${c.title} (${c.id})`).join(", ")}`
  ).toHaveLength(0);
});

test("quiz question bank has not shrunk (>= 898 questions)", async () => {
  const { count, error } = await db.from("quiz_questions").select("*", { count: "exact", head: true });
  expect(error).toBeNull();
  expect(count ?? 0).toBeGreaterThanOrEqual(898);
});

test("the 9 seeded curriculum domains are present", async () => {
  const { data, error } = await db.from("domains").select("id, name").in("id", SEEDED_DOMAIN_IDS);
  expect(error).toBeNull();
  expect(data ?? []).toHaveLength(9);
});
