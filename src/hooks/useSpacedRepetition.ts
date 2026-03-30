import { useState, useEffect, useCallback } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

// ── Types ────────────────────────────────────────────────────────────────────

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  source_type: string;
  source_lesson_id: string | null;
  ease_factor: number;
  interval_days: number;
  repetitions: number;
  next_review: string;
}

export interface UseSpacedRepetitionReturn {
  dueCards: Flashcard[];
  totalCards: number;
  dueCount: number;
  loading: boolean;
  reviewCard: (cardId: string, quality: 0 | 1 | 2 | 3 | 4 | 5) => Promise<void>;
  addCards: (
    cards: {
      front: string;
      back: string;
      sourceType?: string;
      sourceLessonId?: string;
    }[]
  ) => Promise<void>;
  syncKeyTerms: (
    courseId: string,
    keyTerms: { term: string; definition: string; lessonId?: string }[]
  ) => Promise<void>;
  refreshCards: () => Promise<void>;
}

// ── SM-2 Algorithm ───────────────────────────────────────────────────────────

function computeSM2(
  quality: 0 | 1 | 2 | 3 | 4 | 5,
  prevEaseFactor: number,
  prevInterval: number,
  prevRepetitions: number
): { easeFactor: number; intervalDays: number; repetitions: number } {
  // Update ease factor (applies for all quality values)
  const newEaseFactor = Math.max(
    1.3,
    prevEaseFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  if (quality < 3) {
    // Failed: reset to beginning
    return {
      easeFactor: newEaseFactor,
      intervalDays: 0,
      repetitions: 0,
    };
  }

  // Passed: compute new interval
  let newInterval: number;
  if (prevRepetitions === 0) {
    newInterval = 1;
  } else if (prevRepetitions === 1) {
    newInterval = 6;
  } else {
    newInterval = Math.round(prevInterval * newEaseFactor);
  }

  return {
    easeFactor: newEaseFactor,
    intervalDays: newInterval,
    repetitions: prevRepetitions + 1,
  };
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export function useSpacedRepetition(
  user: User | null,
  courseId: string
): UseSpacedRepetitionReturn {
  const [dueCards, setDueCards] = useState<Flashcard[]>([]);
  const [totalCards, setTotalCards] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch all cards for counting, plus due cards for review
  const fetchCards = useCallback(async () => {
    if (!user) {
      setDueCards([]);
      setTotalCards(0);
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      // Get total count
      const { count } = await supabase
        .from("flashcard_reviews")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id)
        .eq("course_id", courseId);

      setTotalCards(count ?? 0);

      // Get due cards (next_review <= now)
      const { data, error } = await supabase
        .from("flashcard_reviews")
        .select(
          "id, front, back, source_type, source_lesson_id, ease_factor, interval_days, repetitions, next_review"
        )
        .eq("user_id", user.id)
        .eq("course_id", courseId)
        .lte("next_review", new Date().toISOString())
        .order("next_review", { ascending: true });

      if (error) {
        console.error("Error fetching flashcards:", error);
      } else {
        setDueCards((data as Flashcard[]) ?? []);
      }
    } catch (err) {
      console.error("Unexpected error fetching flashcards:", err);
    } finally {
      setLoading(false);
    }
  }, [user, courseId]);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  // Review a single card using SM-2
  const reviewCard = useCallback(
    async (cardId: string, quality: 0 | 1 | 2 | 3 | 4 | 5) => {
      const card = dueCards.find((c) => c.id === cardId);
      if (!card) return;

      const { easeFactor, intervalDays, repetitions } = computeSM2(
        quality,
        card.ease_factor,
        card.interval_days,
        card.repetitions
      );

      const now = new Date();
      const nextReview = new Date(now);
      nextReview.setDate(nextReview.getDate() + intervalDays);

      const { error } = await supabase
        .from("flashcard_reviews")
        .update({
          ease_factor: easeFactor,
          interval_days: intervalDays,
          repetitions,
          next_review: nextReview.toISOString(),
          last_review: now.toISOString(),
        })
        .eq("id", cardId);

      if (error) {
        console.error("Error updating flashcard:", error);
        return;
      }

      // Remove card from due list (or keep it if interval is 0 -- will be re-fetched)
      if (intervalDays === 0) {
        // Card failed -- keep it in the queue but move to end
        setDueCards((prev) => {
          const remaining = prev.filter((c) => c.id !== cardId);
          const updated = {
            ...card,
            ease_factor: easeFactor,
            interval_days: intervalDays,
            repetitions,
            next_review: nextReview.toISOString(),
          };
          return [...remaining, updated];
        });
      } else {
        // Card passed -- remove from due list
        setDueCards((prev) => prev.filter((c) => c.id !== cardId));
      }
    },
    [dueCards]
  );

  // Add new flashcards manually
  const addCards = useCallback(
    async (
      cards: {
        front: string;
        back: string;
        sourceType?: string;
        sourceLessonId?: string;
      }[]
    ) => {
      if (!user || cards.length === 0) return;

      const rows = cards.map((c) => ({
        user_id: user.id,
        course_id: courseId,
        front: c.front,
        back: c.back,
        source_type: c.sourceType ?? "key-term",
        source_lesson_id: c.sourceLessonId ?? null,
      }));

      const { error } = await supabase
        .from("flashcard_reviews")
        .insert(rows);

      if (error) {
        console.error("Error adding flashcards:", error);
        return;
      }

      // Refresh to pick up new cards
      await fetchCards();
    },
    [user, courseId, fetchCards]
  );

  // Sync key-terms from course content -- only inserts new ones
  const syncKeyTerms = useCallback(
    async (
      cId: string,
      keyTerms: { term: string; definition: string; lessonId?: string }[]
    ) => {
      if (!user || keyTerms.length === 0) return;

      // Fetch existing card fronts for this course
      const { data: existing, error: fetchError } = await supabase
        .from("flashcard_reviews")
        .select("front")
        .eq("user_id", user.id)
        .eq("course_id", cId);

      if (fetchError) {
        console.error("Error fetching existing flashcards:", fetchError);
        return;
      }

      const existingFronts = new Set(
        (existing ?? []).map((r: { front: string }) => r.front.toLowerCase())
      );

      // Filter to only new terms
      const newTerms = keyTerms.filter(
        (kt) => !existingFronts.has(kt.term.toLowerCase())
      );

      if (newTerms.length === 0) return;

      const rows = newTerms.map((kt) => ({
        user_id: user.id,
        course_id: cId,
        front: kt.term,
        back: kt.definition,
        source_type: "key-term",
        source_lesson_id: kt.lessonId ?? null,
      }));

      const { error: insertError } = await supabase
        .from("flashcard_reviews")
        .insert(rows);

      if (insertError) {
        console.error("Error syncing key terms:", insertError);
        return;
      }

      // Refresh cards list
      await fetchCards();
    },
    [user, fetchCards]
  );

  return {
    dueCards,
    totalCards,
    dueCount: dueCards.length,
    loading,
    reviewCard,
    addCards,
    syncKeyTerms,
    refreshCards: fetchCards,
  };
}
