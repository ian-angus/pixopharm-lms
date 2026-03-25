import { useState, useEffect, useCallback } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

export interface CompletionState {
  lessons: Set<string>;
  quizScores: Record<string, { score: number; total: number }>;
}

const EMPTY: CompletionState = { lessons: new Set(), quizScores: {} };

export function useProgress(user: User | null, courseId: string) {
  const [completion, setCompletion] = useState<CompletionState>(EMPTY);
  const [loaded, setLoaded] = useState(false);

  // Load progress from Supabase on mount / user change
  useEffect(() => {
    if (!user) {
      // Try localStorage fallback for anonymous users
      const stored = localStorage.getItem(`pixopharm_progress_${courseId}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        setCompletion({
          lessons: new Set(parsed.lessons ?? []),
          quizScores: parsed.quizScores ?? {},
        });
      } else {
        setCompletion(EMPTY);
      }
      setLoaded(true);
      return;
    }

    (async () => {
      const { data, error } = await supabase
        .from("course_progress")
        .select("completed_lessons, quiz_scores")
        .eq("user_id", user.id)
        .eq("course_id", courseId)
        .single();

      if (error && error.code !== "PGRST116") {
        console.error("Failed to load progress:", error);
      }

      if (data) {
        setCompletion({
          lessons: new Set(data.completed_lessons ?? []),
          quizScores: data.quiz_scores ?? {},
        });
      } else {
        setCompletion(EMPTY);
      }
      setLoaded(true);
    })();
  }, [user, courseId]);

  // Persist to Supabase (or localStorage for anon)
  const persist = useCallback(
    async (next: CompletionState) => {
      const lessonsArr = Array.from(next.lessons);

      if (!user) {
        localStorage.setItem(
          `pixopharm_progress_${courseId}`,
          JSON.stringify({ lessons: lessonsArr, quizScores: next.quizScores })
        );
        return;
      }

      const row = {
        user_id: user.id,
        course_id: courseId,
        completed_lessons: lessonsArr,
        quiz_scores: next.quizScores,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from("course_progress")
        .upsert(row, { onConflict: "user_id,course_id" });

      if (error) console.error("Failed to save progress:", error);
    },
    [user, courseId]
  );

  const markLessonComplete = useCallback(
    (lessonId: string) => {
      setCompletion((prev) => {
        const next = { ...prev, lessons: new Set(prev.lessons) };
        next.lessons.add(lessonId);
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const saveQuizScore = useCallback(
    (moduleId: string, score: number, total: number) => {
      setCompletion((prev) => {
        const next = {
          ...prev,
          lessons: new Set(prev.lessons),
          quizScores: { ...prev.quizScores, [moduleId]: { score, total } },
        };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  return { completion, loaded, markLessonComplete, saveQuizScore };
}
