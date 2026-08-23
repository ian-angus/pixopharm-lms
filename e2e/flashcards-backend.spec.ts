// ============================================================================
// Flashcards backend round-trip (migration 20260823000001) — pure RPC/DB spec.
//
// Proves against the live database, as the authenticated maintenance admin:
//   1. deck CRUD under RLS
//   2. get_deck_summaries / get_due_flashcards queue shapes
//   3. record_flashcard_review Leitner math (good/easy/again) + streaks
//   4. apply_flashcard_refresh keep/replace + revert_flashcard_refresh,
//      including survival of review state on kept cards across undo
//   5. the manual-edit guard blocking undo
// ============================================================================

import { test, expect } from "@playwright/test";
import type { SupabaseClient } from "@supabase/supabase-js";
import { adminClient, cleanupAllE2EEntities, seedCourse, seedModule, PREFIX, SLUG_PREFIX } from "./helpers/db";

test.describe.configure({ mode: "serial" });

let db: SupabaseClient;
let courseId: string;
let moduleId: string;
const cardIds: string[] = [];

test.beforeAll(async () => {
  db = await adminClient();
  await cleanupAllE2EEntities(db);
  const course = await seedCourse(db, {
    title: `${PREFIX} Flashcards Backend`,
    slug: `${SLUG_PREFIX}flashcards-backend`,
    status: "published",
  });
  courseId = course.id;
  const mod = await seedModule(db, courseId, `${PREFIX} FC Module`);
  moduleId = mod.id;
});

test.afterAll(async () => {
  await cleanupAllE2EEntities(db);
});

test("deck CRUD + summaries + study queue", async () => {
  const cards = [
    { card_type: "term_definition", front: "ZZ E2E term", back: "ZZ definition", position: 1 },
    { card_type: "cloze", front: "ZZ E2E sentence with ___ blank", back: "ZZ full", extra: { answer: "a" }, position: 2 },
    { card_type: "calculation", front: "ZZ E2E 10 in 5?", back: "2", extra: { answer: 2, tolerance: 0, unit: "mg/mL" }, position: 3 },
  ];
  for (const c of cards) {
    const { data, error } = await db.from("flashcards").insert({ ...c, module_id: moduleId }).select("id").single();
    expect(error).toBeNull();
    cardIds.push(data!.id);
  }

  // Constraint: bad card_type is rejected at the table.
  const { error: badType } = await db.from("flashcards").insert({
    module_id: moduleId, card_type: "nope", front: "ZZ x", back: "ZZ y",
  });
  expect(badType).not.toBeNull();

  const { data: summaries } = await db.rpc("get_deck_summaries", { p_course_id: courseId });
  const mine = (summaries as { module_id: string; total: number; due: number; new: number }[])
    .find((s) => s.module_id === moduleId);
  expect(mine).toBeTruthy();
  expect(mine!.total).toBe(3);
  expect(mine!.new).toBe(3);
  expect(mine!.due).toBe(0);

  const { data: queue } = await db.rpc("get_due_flashcards", { p_course_id: courseId, p_module_id: moduleId });
  const q = queue as { id: string; is_new: boolean; box: number }[];
  expect(q.length).toBe(3);
  expect(q.every((c) => c.is_new && c.box === 1)).toBe(true);
});

test("Leitner grading: good→2, easy jumps, again resets and lapses", async () => {
  // New card + good → box 2, due ~1 day out.
  const { data: r1, error: e1 } = await db.rpc("record_flashcard_review", { p_card_id: cardIds[0], p_grade: "good" });
  expect(e1).toBeNull();
  expect((r1 as { box: number }).box).toBe(2);
  expect((r1 as { current_streak: number }).current_streak).toBeGreaterThanOrEqual(1);

  // Same card + easy → box 4 (2 + 2).
  const { data: r2 } = await db.rpc("record_flashcard_review", { p_card_id: cardIds[0], p_grade: "easy" });
  expect((r2 as { box: number }).box).toBe(4);

  // again → back to box 1, due now, lapses recorded.
  const { data: r3 } = await db.rpc("record_flashcard_review", { p_card_id: cardIds[0], p_grade: "again" });
  expect((r3 as { box: number }).box).toBe(1);
  const { data: row } = await db.from("flashcard_reviews").select("reps, lapses, box").eq("card_id", cardIds[0]).single();
  expect(row!.reps).toBe(3);
  expect(row!.lapses).toBe(1);

  // The again-card is due immediately → shows up in the due queue.
  const { data: queue } = await db.rpc("get_due_flashcards", { p_course_id: courseId, p_module_id: moduleId });
  const q = queue as { id: string; is_new: boolean }[];
  expect(q.find((c) => c.id === cardIds[0])?.is_new).toBe(false);

  // Invalid grade rejected.
  const { error: badGrade } = await db.rpc("record_flashcard_review", { p_card_id: cardIds[0], p_grade: "meh" });
  expect(badGrade).not.toBeNull();
});

test("apply keeps/replaces with snapshot; undo restores and preserves kept review state", async () => {
  // Stage a deck draft proposing 2 new cards.
  const { data: draft, error: dErr } = await db
    .from("module_enhancement_drafts")
    .insert({
      module_id: moduleId,
      kind: "flashcards",
      status: "pending_review",
      payload: {
        module_id: moduleId,
        cards: [
          { card_type: "drug_stem", front: "ZZ E2E -olol", back: "ZZ beta blockers" },
          { card_type: "brand_generic", front: "ZZ E2E Panadol", back: "ZZ paracetamol" },
        ],
      },
    })
    .select("id")
    .single();
  expect(dErr).toBeNull();
  const draftId = draft!.id;

  // Keep only card 0 (which has review history).
  const { data: applied, error: aErr } = await db.rpc("apply_flashcard_refresh", {
    p_draft_id: draftId,
    p_keep_ids: [cardIds[0]],
  });
  expect(aErr).toBeNull();
  expect((applied as { kept: number }).kept).toBe(1);
  expect((applied as { deleted: number }).deleted).toBe(2);
  expect((applied as { inserted: number }).inserted).toBe(2);

  // Idempotent second apply.
  const { data: again } = await db.rpc("apply_flashcard_refresh", { p_draft_id: draftId, p_keep_ids: [] });
  expect((again as { already_applied?: boolean }).already_applied).toBe(true);

  // Kept card's review row survived the apply.
  const { data: keptReview } = await db.from("flashcard_reviews").select("reps").eq("card_id", cardIds[0]).maybeSingle();
  expect(keptReview?.reps).toBe(3);

  // Undo: deck back to the original 3 cards, kept-card review intact.
  const { data: reverted, error: rErr } = await db.rpc("revert_flashcard_refresh", { p_draft_id: draftId });
  expect(rErr).toBeNull();
  expect((reverted as { restored: number }).restored).toBe(3);
  const { data: deck } = await db.from("flashcards").select("id").eq("module_id", moduleId);
  expect(deck!.length).toBe(3);
  expect(deck!.map((c) => c.id).sort()).toEqual([...cardIds].sort());
  const { data: reviewAfterUndo } = await db.from("flashcard_reviews").select("reps").eq("card_id", cardIds[0]).maybeSingle();
  expect(reviewAfterUndo?.reps).toBe(3);

  // A reverted draft cannot be re-applied.
  const { error: reapply } = await db.rpc("apply_flashcard_refresh", { p_draft_id: draftId, p_keep_ids: [] });
  expect(reapply).not.toBeNull();
});

test("manual edits after apply block undo", async () => {
  const { data: draft } = await db
    .from("module_enhancement_drafts")
    .insert({
      module_id: moduleId,
      kind: "flashcards",
      status: "pending_review",
      payload: { module_id: moduleId, cards: [{ card_type: "term_definition", front: "ZZ E2E guard", back: "ZZ guard back" }] },
    })
    .select("id")
    .single();
  const { error: aErr } = await db.rpc("apply_flashcard_refresh", { p_draft_id: draft!.id, p_keep_ids: [] });
  expect(aErr).toBeNull();

  // Hand-edit one of the new cards, then attempt undo.
  const { data: newCard } = await db.from("flashcards").select("id").eq("module_id", moduleId).limit(1).single();
  const { error: uErr } = await db.from("flashcards")
    .update({ back: "ZZ manually edited", updated_at: new Date().toISOString() })
    .eq("id", newCard!.id);
  expect(uErr).toBeNull();

  const { error: blocked } = await db.rpc("revert_flashcard_refresh", { p_draft_id: draft!.id });
  expect(blocked).not.toBeNull();
  expect(String(blocked!.message)).toContain("edited after");
});
