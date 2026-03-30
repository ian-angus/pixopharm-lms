import { useState, useMemo } from "react";
import type { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useSpacedRepetition } from "@/hooks/useSpacedRepetition";

// ── Types ────────────────────────────────────────────────────────────────────

interface FlashcardReviewProps {
  user: User;
  courseId: string;
  onClose: () => void;
  /** Optional: pass key-terms from lessons so the component can generate cards */
  keyTerms?: { term: string; definition: string; lessonId?: string }[];
}

// ── Flip animation styles (injected once) ────────────────────────────────────

const flipStyles = `
  .flashcard-container {
    perspective: 1200px;
  }
  .flashcard-inner {
    position: relative;
    width: 100%;
    min-height: 280px;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
  }
  .flashcard-inner.flipped {
    transform: rotateY(180deg);
  }
  .flashcard-front,
  .flashcard-back {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 0.75rem;
  }
  .flashcard-back {
    transform: rotateY(180deg);
  }
`;

// ── Component ────────────────────────────────────────────────────────────────

export default function FlashcardReview({
  user,
  courseId,
  onClose,
  keyTerms,
}: FlashcardReviewProps) {
  const {
    dueCards,
    totalCards,
    dueCount,
    loading,
    reviewCard,
    syncKeyTerms,
  } = useSpacedRepetition(user, courseId);

  const [flipped, setFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionReviewed, setSessionReviewed] = useState(0);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [syncing, setSyncing] = useState(false);

  // The initial count of due cards when the session started
  const [sessionTotal] = useState(() => dueCount);

  // Current card
  const currentCard = dueCards[currentIndex] ?? null;

  // Derive the next review time for the "all caught up" state
  const nextReviewTime = useMemo(() => {
    if (dueCards.length > 0) return null;
    // We don't have future cards in dueCards, so show a generic message
    return null;
  }, [dueCards]);

  // Handle rating
  const handleRate = async (quality: 0 | 1 | 2 | 3 | 4 | 5) => {
    if (!currentCard) return;

    await reviewCard(currentCard.id, quality);
    setSessionReviewed((prev) => prev + 1);
    if (quality >= 3) {
      setSessionCorrect((prev) => prev + 1);
    }
    setFlipped(false);

    // If the card failed (quality < 3), it gets moved to the end of dueCards
    // by the hook, so we don't advance the index. If it passed, it's removed
    // from dueCards, so the same index now points to the next card.
    if (quality >= 3) {
      // Card was removed from array; same index is now the next card
      // If we've gone past the end, session is complete
      if (currentIndex >= dueCards.length - 1) {
        setSessionComplete(true);
      }
    } else {
      // Card moved to end; advance to the next card
      if (currentIndex >= dueCards.length - 1) {
        // Wrap around to the start if failed cards were appended
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };

  // Generate cards from key-terms
  const handleSync = async () => {
    if (!keyTerms || keyTerms.length === 0) return;
    setSyncing(true);
    await syncKeyTerms(courseId, keyTerms);
    setSyncing(false);
  };

  // Reusable color tokens
  const teal = "hsl(174, 62%, 32%)";
  const darkNavy = "hsl(213, 50%, 16%)";
  const fontFamily = "'DM Sans', sans-serif";

  // ── Loading state ────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        style={{ fontFamily }}
      >
        <Card className="w-full max-w-lg mx-4 border-0 shadow-2xl" style={{ backgroundColor: darkNavy }}>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div
              className="h-10 w-10 animate-spin rounded-full border-4 border-t-transparent"
              style={{ borderColor: `${teal} transparent ${teal} ${teal}` }}
            />
            <p className="mt-4 text-white/70 text-sm">Loading flashcards...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ── Empty / All caught up state ──────────────────────────────────────────
  if ((dueCount === 0 && !sessionComplete) || (totalCards === 0 && !sessionComplete)) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        style={{ fontFamily }}
      >
        <style>{flipStyles}</style>
        <Card className="w-full max-w-lg mx-4 border-0 shadow-2xl" style={{ backgroundColor: darkNavy }}>
          <CardContent className="flex flex-col items-center justify-center py-12 px-8 text-center">
            {totalCards === 0 ? (
              <>
                <div className="text-5xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={teal}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">No Flashcards Yet</h2>
                <p className="text-white/60 text-sm mb-6">
                  Generate flashcards from your course lessons to start reviewing with spaced repetition.
                </p>
                {keyTerms && keyTerms.length > 0 && (
                  <Button
                    onClick={handleSync}
                    disabled={syncing}
                    className="mb-4"
                    style={{ backgroundColor: teal, color: "white" }}
                  >
                    {syncing ? "Generating..." : `Generate from Lessons (${keyTerms.length} terms)`}
                  </Button>
                )}
                <Button variant="ghost" onClick={onClose} className="text-white/50 hover:text-white">
                  Close
                </Button>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={teal}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">All Caught Up!</h2>
                <p className="text-white/60 text-sm mb-2">
                  You have reviewed all due flashcards.
                </p>
                <p className="text-white/40 text-xs mb-6">
                  {totalCards} card{totalCards === 1 ? "" : "s"} in your deck
                  {nextReviewTime ? ` -- next review in ${nextReviewTime}` : ""}
                </p>
                <Button variant="ghost" onClick={onClose} className="text-white/50 hover:text-white">
                  Close
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  // ── Session complete state ───────────────────────────────────────────────
  if (sessionComplete) {
    const accuracy =
      sessionReviewed > 0
        ? Math.round((sessionCorrect / sessionReviewed) * 100)
        : 0;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        style={{ fontFamily }}
      >
        <Card className="w-full max-w-lg mx-4 border-0 shadow-2xl" style={{ backgroundColor: darkNavy }}>
          <CardContent className="flex flex-col items-center justify-center py-12 px-8 text-center">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke={teal}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-4">Session Complete!</h2>

            <div className="grid grid-cols-2 gap-4 mb-6 w-full max-w-xs">
              <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                <p className="text-2xl font-bold text-white">{sessionReviewed}</p>
                <p className="text-xs text-white/50">Cards Reviewed</p>
              </div>
              <div className="rounded-lg p-4" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                <p className="text-2xl font-bold" style={{ color: teal }}>
                  {accuracy}%
                </p>
                <p className="text-xs text-white/50">Accuracy</p>
              </div>
            </div>

            <div className="w-full max-w-xs mb-6">
              <div className="flex justify-between text-xs text-white/40 mb-1">
                <span>Correct: {sessionCorrect}</span>
                <span>Needs Review: {sessionReviewed - sessionCorrect}</span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${accuracy}%`,
                    backgroundColor: teal,
                  }}
                />
              </div>
            </div>

            <Button
              onClick={onClose}
              className="w-full max-w-xs"
              style={{ backgroundColor: teal, color: "white" }}
            >
              Done
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ── Active review state ──────────────────────────────────────────────────
  const effectiveSessionTotal = Math.max(sessionTotal, sessionReviewed + dueCards.length);
  const progressPercent =
    effectiveSessionTotal > 0
      ? Math.round((sessionReviewed / effectiveSessionTotal) * 100)
      : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm"
      style={{ fontFamily }}
    >
      <style>{flipStyles}</style>

      {/* Top bar */}
      <div className="w-full max-w-lg mx-4 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Badge
            className="text-xs px-2 py-1"
            style={{ backgroundColor: teal, color: "white", border: "none" }}
          >
            {dueCards.length} card{dueCards.length === 1 ? "" : "s"} remaining
          </Badge>
          {keyTerms && keyTerms.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSync}
              disabled={syncing}
              className="text-white/50 hover:text-white text-xs h-7"
            >
              {syncing ? "Syncing..." : "Generate from Lessons"}
            </Button>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-white/50 hover:text-white h-8 w-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </Button>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-lg mx-4 mb-6">
        <Progress value={progressPercent} className="h-1.5" />
        <p className="text-xs text-white/40 mt-1 text-right">
          {sessionReviewed} / {effectiveSessionTotal} reviewed
        </p>
      </div>

      {/* Flashcard */}
      {currentCard && (
        <div className="w-full max-w-lg mx-4">
          <div
            className="flashcard-container cursor-pointer"
            onClick={() => {
              if (!flipped) setFlipped(true);
            }}
          >
            <div className={`flashcard-inner ${flipped ? "flipped" : ""}`}>
              {/* Front */}
              <div
                className="flashcard-front"
                style={{
                  backgroundColor: darkNavy,
                  borderTop: `4px solid ${teal}`,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                <p className="text-xs uppercase tracking-widest text-white/30 mb-4">
                  Term
                </p>
                <h3 className="text-2xl font-bold text-white text-center leading-relaxed">
                  {currentCard.front}
                </h3>
                <p className="text-xs text-white/30 mt-6">
                  Tap to reveal answer
                </p>
              </div>

              {/* Back */}
              <div
                className="flashcard-back"
                style={{
                  backgroundColor: darkNavy,
                  borderTop: `4px solid ${teal}`,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                <p className="text-xs uppercase tracking-widest text-white/30 mb-4">
                  Definition
                </p>
                <p className="text-lg text-white/90 text-center leading-relaxed max-h-40 overflow-y-auto">
                  {currentCard.back}
                </p>
                <div className="mt-6">
                  <Badge
                    variant="outline"
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.4)", borderColor: "rgba(255,255,255,0.15)" }}
                  >
                    {currentCard.source_type}
                    {currentCard.source_lesson_id
                      ? ` -- Lesson ${currentCard.source_lesson_id}`
                      : ""}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Rating buttons (only visible when flipped) */}
          {flipped && (
            <div className="mt-6 grid grid-cols-4 gap-3">
              <Button
                onClick={() => handleRate(1)}
                className="flex flex-col items-center gap-1 h-auto py-3 text-white border border-white/10 hover:border-red-400/50"
                variant="ghost"
                style={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
              >
                <span className="text-sm font-semibold text-red-400">Again</span>
                <span className="text-[10px] text-white/40">{"<10 min"}</span>
              </Button>
              <Button
                onClick={() => handleRate(3)}
                className="flex flex-col items-center gap-1 h-auto py-3 text-white border border-white/10 hover:border-orange-400/50"
                variant="ghost"
                style={{ backgroundColor: "rgba(251, 146, 60, 0.1)" }}
              >
                <span className="text-sm font-semibold text-orange-400">Hard</span>
                <span className="text-[10px] text-white/40">1 day</span>
              </Button>
              <Button
                onClick={() => handleRate(4)}
                className="flex flex-col items-center gap-1 h-auto py-3 text-white border border-white/10"
                variant="ghost"
                style={{
                  backgroundColor: `${teal}20`,
                  borderColor: `${teal}30`,
                }}
              >
                <span className="text-sm font-semibold" style={{ color: teal }}>
                  Good
                </span>
                <span className="text-[10px] text-white/40">
                  {currentCard.repetitions === 0
                    ? "1 day"
                    : currentCard.repetitions === 1
                    ? "6 days"
                    : `${Math.round(currentCard.interval_days * currentCard.ease_factor)} days`}
                </span>
              </Button>
              <Button
                onClick={() => handleRate(5)}
                className="flex flex-col items-center gap-1 h-auto py-3 text-white border border-white/10 hover:border-blue-400/50"
                variant="ghost"
                style={{ backgroundColor: "rgba(96, 165, 250, 0.1)" }}
              >
                <span className="text-sm font-semibold text-blue-400">Easy</span>
                <span className="text-[10px] text-white/40">
                  {currentCard.repetitions === 0
                    ? "1 day"
                    : currentCard.repetitions === 1
                    ? "6 days"
                    : `${Math.round(currentCard.interval_days * Math.max(1.3, currentCard.ease_factor + 0.1))} days`}
                </span>
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
