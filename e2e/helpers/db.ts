// ============================================================================
// Supabase clients + ZZ-E2E-prefixed seeding & cleanup helpers.
//
// SAFETY CONTRACT:
//   - every entity these helpers create carries the "ZZ E2E" prefix
//     (titles/names) and/or a "zz-e2e-" slug
//   - cleanup deletes ONLY by that prefix — never touches seeded content
// ============================================================================

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { ADMIN_EMAIL, ADMIN_PASSWORD, SUPABASE_ANON_KEY, SUPABASE_URL } from "./env";

export const PREFIX = "ZZ E2E";
export const SLUG_PREFIX = "zz-e2e-";

/** The 9 seeded curriculum domains (stable ids) — must never be touched. */
export const SEEDED_DOMAIN_IDS = [
  "d0000000-0000-4000-a000-00000000000a",
  "d0000000-0000-4000-a000-00000000000b",
  "d0000000-0000-4000-a000-00000000000c",
  "d0000000-0000-4000-a000-00000000000d",
  "d0000000-0000-4000-a000-00000000000e",
  "d0000000-0000-4000-a000-00000000000f",
  "d0000000-0000-4000-a000-000000000010",
  "d0000000-0000-4000-a000-000000000011",
  "d0000000-0000-4000-a000-000000000012",
];

/** Known draft course allowed to have domain_id = null (pending D4 merge). */
export const KNOWN_DRAFT_NO_DOMAIN = "59e0c59f-d8d3-43a6-836a-5dcc236dc84d";

export function anonClient(): SupabaseClient {
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/** Client authenticated as the maintenance admin account. */
export async function adminClient(): Promise<SupabaseClient> {
  const client = anonClient();
  const { error } = await client.auth.signInWithPassword({
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
  });
  if (error) throw new Error(`admin sign-in failed: ${error.message}`);
  return client;
}

function fail(op: string, error: { message: string } | null): void {
  if (error) throw new Error(`${op}: ${error.message}`);
}

// ── Seeding ──────────────────────────────────────────────────────────────────

export interface SeededCourse {
  id: string;
  slug: string;
  title: string;
}

export async function seedCourse(
  db: SupabaseClient,
  opts: {
    title: string;
    slug: string;
    status?: "draft" | "published" | "archived";
    domain_id?: string | null;
  }
): Promise<SeededCourse> {
  if (!opts.title.startsWith(PREFIX)) throw new Error(`seedCourse title must start with "${PREFIX}"`);
  if (!opts.slug.startsWith(SLUG_PREFIX)) throw new Error(`seedCourse slug must start with "${SLUG_PREFIX}"`);
  const { data, error } = await db
    .from("courses")
    .insert({
      title: opts.title,
      slug: opts.slug,
      description: "E2E test course — safe to delete.",
      skill_level: "Beginner",
      duration_weeks: 1,
      icon: "GraduationCap",
      color: "blue",
      prerequisites: [],
      what_youll_learn: ["E2E"],
      status: opts.status ?? "draft",
      order: 999,
      domain_id: opts.domain_id ?? null,
    })
    .select("id, slug, title")
    .single();
  fail("seedCourse", error);
  return data as SeededCourse;
}

export async function seedModule(
  db: SupabaseClient,
  courseId: string,
  title: string,
  orderIndex = 1
): Promise<{ id: string; title: string }> {
  if (!title.startsWith(PREFIX)) throw new Error(`seedModule title must start with "${PREFIX}"`);
  const { data, error } = await db
    .from("modules")
    .insert({ course_id: courseId, title, description: "E2E test module", order_index: orderIndex })
    .select("id, title")
    .single();
  fail("seedModule", error);
  return data as { id: string; title: string };
}

export async function seedLesson(
  db: SupabaseClient,
  moduleId: string,
  title: string,
  content: unknown = [],
  orderIndex = 1
): Promise<{ id: string }> {
  if (!title.startsWith(PREFIX)) throw new Error(`seedLesson title must start with "${PREFIX}"`);
  const { data, error } = await db
    .from("lessons")
    .insert({ module_id: moduleId, title, content, order_index: orderIndex, duration_minutes: 5 })
    .select("id")
    .single();
  fail("seedLesson", error);
  return data as { id: string };
}

export async function seedQuizCase(
  db: SupabaseClient,
  moduleId: string,
  title: string,
  vignette: string
): Promise<{ id: string }> {
  if (!title.startsWith(PREFIX)) throw new Error(`seedQuizCase title must start with "${PREFIX}"`);
  const { data, error } = await db
    .from("quiz_cases")
    .insert({ module_id: moduleId, title, vignette, order_index: 1 })
    .select("id")
    .single();
  fail("seedQuizCase", error);
  return data as { id: string };
}

export interface SeedQuestion {
  question: string;
  question_type: string;
  options?: string[];
  correct_answer?: number;
  question_data?: Record<string, unknown>;
  explanation: string;
  order_index: number;
  case_id?: string;
}

export async function seedQuizQuestion(db: SupabaseClient, moduleId: string, q: SeedQuestion): Promise<{ id: string }> {
  if (!q.question.startsWith(PREFIX)) throw new Error(`seedQuizQuestion text must start with "${PREFIX}"`);
  const { data, error } = await db
    .from("quiz_questions")
    .insert({
      module_id: moduleId,
      question: q.question,
      options: q.options ?? [],
      correct_answer: q.correct_answer ?? 0,
      explanation: q.explanation,
      order_index: q.order_index,
      question_type: q.question_type,
      question_data: q.question_data ?? {},
      ...(q.case_id ? { case_id: q.case_id } : {}),
    })
    .select("id")
    .single();
  fail("seedQuizQuestion", error);
  return data as { id: string };
}

// ── Cleanup (prefix-scoped, idempotent, safe to call repeatedly) ────────────

/**
 * Deletes every ZZ-E2E-prefixed entity. Explicit child-first deletes so we do
 * not depend on FK cascade behaviour. Never touches unprefixed rows.
 */
/** Throw on any Supabase error so cleanup/count can't silently no-op. */
function must<T extends { error: { message: string } | null }>(res: T, ctx: string): T {
  if (res.error) throw new Error(`${ctx}: ${res.error.message}`);
  return res;
}

export async function cleanupAllE2EEntities(db: SupabaseClient): Promise<void> {
  // 1. ZZ E2E courses and their full tree
  const { data: courses } = await db.from("courses").select("id, slug").like("title", `${PREFIX}%`);
  const courseIds = (courses ?? []).map((c) => c.id);
  if (courseIds.length > 0) {
    const { data: modules } = await db.from("modules").select("id").in("course_id", courseIds);
    const moduleIds = (modules ?? []).map((m) => m.id);
    if (moduleIds.length > 0) {
      await db.from("quiz_questions").delete().in("module_id", moduleIds);
      await db.from("quiz_cases").delete().in("module_id", moduleIds);
      await db.from("lessons").delete().in("module_id", moduleIds);
      await db.from("modules").delete().in("id", moduleIds);
    }
    await db.from("courses").delete().in("id", courseIds);
  }

  // 2. Stray ZZ E2E modules attached to non-prefixed courses (defensive)
  const { data: strayModules } = await db.from("modules").select("id").like("title", `${PREFIX}%`);
  const strayIds = (strayModules ?? []).map((m) => m.id);
  if (strayIds.length > 0) {
    await db.from("quiz_questions").delete().in("module_id", strayIds);
    await db.from("quiz_cases").delete().in("module_id", strayIds);
    await db.from("lessons").delete().in("module_id", strayIds);
    await db.from("modules").delete().in("id", strayIds);
  }

  // 3. Stray ZZ E2E questions / cases / lessons created on real modules (defensive)
  must(db.from("quiz_questions").delete().like("question", `${PREFIX}%`), "cleanup stray questions");
  must(db.from("quiz_cases").delete().like("title", `${PREFIX}%`), "cleanup stray cases");
  must(db.from("lessons").delete().like("title", `${PREFIX}%`), "cleanup stray lessons");

  // 4. ZZ E2E domains — belt-and-braces: prefix match AND explicit exclusion
  //    of the 9 seeded domain ids, so a mis-seeded name can never nuke real data.
  must(await db.from("domains").delete().like("name", `${PREFIX}%`)
    .not("id", "in", `(${SEEDED_DOMAIN_IDS.join(",")})`), "cleanup domains");

  // 5. Progress rows recorded against zz-e2e-* course slugs (own user only via
  //    RLS). course_progress has NO DELETE policy, so the delete is a no-op —
  //    we additionally BLANK any remaining rows (update IS allowed) so no test
  //    data persists. quiz-types reuses one fixed slug to avoid accumulating
  //    rows.
  await db.from("course_progress").delete().like("course_id", `${SLUG_PREFIX}%`);
  const { data: progressRows } = await db
    .from("course_progress")
    .select("user_id, course_id")
    .like("course_id", `${SLUG_PREFIX}%`);
  for (const row of progressRows ?? []) {
    await db
      .from("course_progress")
      .update({ completed_lessons: [], quiz_scores: {} })
      .eq("user_id", row.user_id)
      .eq("course_id", row.course_id);
  }
}

/** Count of every remaining ZZ-E2E-prefixed row, for final verification. */
export async function countE2EEntities(db: SupabaseClient): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  const tables: Array<[string, string, string]> = [
    ["domains", "name", `${PREFIX}%`],
    ["courses", "title", `${PREFIX}%`],
    ["modules", "title", `${PREFIX}%`],
    ["lessons", "title", `${PREFIX}%`],
    ["quiz_questions", "question", `${PREFIX}%`],
    ["quiz_cases", "title", `${PREFIX}%`],
  ];
  for (const [table, col, pattern] of tables) {
    const { count } = await db.from(table).select("*", { count: "exact", head: true }).like(col, pattern);
    counts[table] = count ?? 0;
  }
  // course_progress rows cannot be deleted under RLS (no DELETE policy); count
  // only rows that still HOLD test data — blanked husk rows are inert.
  const { data: progress } = await db
    .from("course_progress")
    .select("completed_lessons, quiz_scores")
    .like("course_id", `${SLUG_PREFIX}%`);
  counts["course_progress (with data)"] = (progress ?? []).filter(
    (r) =>
      (Array.isArray(r.completed_lessons) && r.completed_lessons.length > 0) ||
      (r.quiz_scores && Object.keys(r.quiz_scores as object).length > 0)
  ).length;
  return counts;
}

/** Fetch all rows of a table (pages past PostgREST's 1000-row cap). */
export async function fetchAllRows<T = Record<string, unknown>>(
  db: SupabaseClient,
  table: string,
  columns: string
): Promise<T[]> {
  const pageSize = 1000;
  const rows: T[] = [];
  for (let from = 0; ; from += pageSize) {
    const { data, error } = await db.from(table).select(columns).range(from, from + pageSize - 1);
    fail(`fetchAllRows(${table})`, error);
    rows.push(...((data ?? []) as T[]));
    if (!data || data.length < pageSize) break;
  }
  return rows;
}
