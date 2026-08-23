// ============================================================================
// flashcards-api — STUDENT-side data access for study decks.
//
// All spaced-repetition math lives server-side (SECURITY DEFINER RPCs from
// migration 20260823000001): the client only fetches queues and reports
// grades. Leitner boxes 1–5 with fixed intervals (now / 1d / 3d / 7d / 21d).
// ============================================================================

import { supabase } from "@/lib/supabase";
import type { FlashcardType, FlashcardExtra } from "@/lib/admin-api";

/** A card as returned by get_due_flashcards (flashcards row + study state). */
export interface StudyCard {
  id: string;
  module_id: string;
  module_title: string;
  card_type: FlashcardType;
  front: string;
  back: string;
  extra: FlashcardExtra;
  source: { lesson_title?: string | null };
  box: number;
  due_at: string;
  is_new: boolean;
}

export interface DeckSummary {
  module_id: string;
  total: number;
  due: number;
  new: number;
}

export interface ReviewResult {
  box: number;
  due_at: string;
  current_streak: number;
  longest_streak: number;
}

/** Per-module deck totals for sidebar badges — one call per course. */
export async function fetchDeckSummaries(courseId: string): Promise<DeckSummary[]> {
  const { data, error } = await supabase.rpc("get_deck_summaries", { p_course_id: courseId });
  if (error) throw new Error(`fetchDeckSummaries: ${error.message}`);
  return (data ?? []) as DeckSummary[];
}

/**
 * Study queue: due cards first (oldest first), then up to 10 never-seen cards.
 * Pass moduleId for a per-module session; omit for the whole course.
 */
export async function fetchStudyQueue(courseId: string, moduleId?: string): Promise<StudyCard[]> {
  const { data, error } = await supabase.rpc("get_due_flashcards", {
    p_course_id: courseId,
    p_module_id: moduleId ?? null,
  });
  if (error) throw new Error(`fetchStudyQueue: ${error.message}`);
  return (data ?? []) as StudyCard[];
}

/** Record a self-grade; the server moves the box, sets due_at, bumps streak. */
export async function recordFlashcardReview(
  cardId: string,
  grade: "again" | "good" | "easy"
): Promise<ReviewResult> {
  const { data, error } = await supabase.rpc("record_flashcard_review", {
    p_card_id: cardId,
    p_grade: grade,
  });
  if (error) throw new Error(`recordFlashcardReview: ${error.message}`);
  return data as ReviewResult;
}

export async function fetchStreak(): Promise<{ current_streak: number; longest_streak: number } | null> {
  const { data, error } = await supabase
    .from("study_streaks")
    .select("current_streak, longest_streak")
    .maybeSingle();
  if (error) throw new Error(`fetchStreak: ${error.message}`);
  return data ?? null;
}
