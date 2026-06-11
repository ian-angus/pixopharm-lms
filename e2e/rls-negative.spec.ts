// ============================================================================
// Spec 3 — RLS negative tests (API-level, bare anon client, no browser).
// Anonymous users must NOT be able to write curriculum tables or read drafts.
// Public reads (domains, published catalog) must keep working.
// ============================================================================

import { expect, test } from "@playwright/test";
import { adminClient, anonClient, cleanupAllE2EEntities, SEEDED_DOMAIN_IDS } from "./helpers/db";

const ts = Date.now();

test.afterAll(async () => {
  // Defensive: if any insert unexpectedly succeeded, remove it with admin rights.
  const db = await adminClient();
  try {
    await cleanupAllE2EEntities(db);
  } finally {
    await db.auth.signOut();
  }
});

test("anon INSERT into domains is rejected", async () => {
  const anon = anonClient();
  const { data, error } = await anon
    .from("domains")
    .insert({ name: `ZZ E2E RLS Domain ${ts}`, order_index: 999 })
    .select();
  expect(error, "anon domain insert must fail").not.toBeNull();
  expect(`${error?.code} ${error?.message}`).toMatch(/42501|row-level security|permission denied|401|403/i);
  expect(data ?? []).toHaveLength(0);
});

test("anon INSERT into courses is rejected", async () => {
  const anon = anonClient();
  const { data, error } = await anon
    .from("courses")
    .insert({
      title: `ZZ E2E RLS Course ${ts}`,
      slug: `zz-e2e-rls-${ts}`,
      description: "",
      skill_level: "Beginner",
      duration_weeks: 1,
      icon: "GraduationCap",
      color: "blue",
      prerequisites: [],
      what_youll_learn: [],
      status: "draft",
      order: 999,
    })
    .select();
  expect(error, "anon course insert must fail").not.toBeNull();
  expect(`${error?.code} ${error?.message}`).toMatch(/42501|row-level security|permission denied|401|403/i);
  expect(data ?? []).toHaveLength(0);
});

test("anon INSERT into quiz_questions is rejected", async () => {
  const anon = anonClient();
  const { data, error } = await anon
    .from("quiz_questions")
    .insert({
      module_id: "00000000-0000-4000-a000-000000000000",
      question: `ZZ E2E RLS question ${ts}`,
      options: ["a", "b", "c", "d"],
      correct_answer: 0,
      explanation: "x",
      order_index: 999,
    })
    .select();
  expect(error, "anon quiz_question insert must fail").not.toBeNull();
  expect(data ?? []).toHaveLength(0);
});

test("anon UPDATE of a seeded domain is rejected (row untouched)", async () => {
  const anon = anonClient();
  const target = SEEDED_DOMAIN_IDS[0];

  const { data: before } = await anon.from("domains").select("name").eq("id", target).single();
  expect(before?.name).toBeTruthy();

  const { data: updated, error } = await anon
    .from("domains")
    .update({ name: `ZZ E2E RLS Renamed ${ts}` })
    .eq("id", target)
    .select();
  // RLS either errors or silently affects 0 rows — both must leave the row untouched.
  if (!error) expect(updated ?? []).toHaveLength(0);

  const { data: after } = await anon.from("domains").select("name").eq("id", target).single();
  expect(after?.name).toBe(before!.name);
  expect(after?.name).not.toContain("ZZ E2E");
});

test("anon SELECT of draft courses returns 0 rows", async () => {
  const anon = anonClient();
  const { data, error } = await anon.from("courses").select("id, status").eq("status", "draft");
  expect(error).toBeNull();
  expect(data ?? []).toHaveLength(0);
});

test("anon SELECT of domains returns at least the 9 seeded domains", async () => {
  const anon = anonClient();
  const { data, error } = await anon.from("domains").select("id");
  expect(error).toBeNull();
  expect((data ?? []).length).toBeGreaterThanOrEqual(9);
  const ids = new Set((data ?? []).map((d) => d.id));
  for (const id of SEEDED_DOMAIN_IDS) {
    expect(ids.has(id), `seeded domain ${id} must be publicly readable`).toBe(true);
  }
});
