// ============================================================================
// FlashcardStudy — the student study session (Leitner spaced repetition).
//
// Replaces the legacy FlashcardReview/useSpacedRepetition (client-side SM-2
// over an old table). All scheduling now happens server-side via
// record_flashcard_review; this component only renders the queue and reports
// Again/Good/Easy grades (optimistically — the session never blocks on I/O).
//
// Mobile-first per the standing 375–430px rule: tap-anywhere flip, fixed
// bottom grade bar ≥56px tall inside the thumb arc, no horizontal scroll.
// ============================================================================

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  fetchStudyQueue,
  recordFlashcardReview,
  type StudyCard,
} from "@/lib/flashcards-api";
import type { FlashcardType } from "@/lib/admin-api";

const TYPE_LABELS: Record<FlashcardType, string> = {
  term_definition: "Term",
  brand_generic: "Brand ↔ generic",
  drug_stem: "Drug stem",
  cloze: "Fill the gap",
  calculation: "Calculation",
  island_compare: "Island comparison",
};

const FLIP_STYLES = `
  .fc-stage { perspective: 1200px; }
  .fc-card {
    position: relative; width: 100%; height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.45s cubic-bezier(0.4, 0.1, 0.25, 1);
  }
  .fc-card.flipped { transform: rotateY(180deg); }
  .fc-face {
    position: absolute; inset: 0;
    backface-visibility: hidden; -webkit-backface-visibility: hidden;
    border-radius: 20px; padding: 22px 20px;
    display: flex; flex-direction: column; overflow: hidden;
  }
  .fc-back { transform: rotateY(180deg); }
`;

interface FlashcardStudyProps {
  courseDbId: string;
  /** Narrow to one module's deck; omit for a whole-course session. */
  moduleId?: string;
  moduleTitle?: string;
  onClose: () => void;
  /** Offered on the summary screen when studying a single module with a quiz. */
  onTakeQuiz?: () => void;
}

export default function FlashcardStudy({
  courseDbId,
  moduleId,
  moduleTitle,
  onClose,
  onTakeQuiz,
}: FlashcardStudyProps) {
  const [queue, setQueue] = useState<StudyCard[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [calcInput, setCalcInput] = useState("");
  const [streak, setStreak] = useState<number | null>(null);
  // Session stats
  const [reviewedIds] = useState(() => new Set<string>());
  const [promotions, setPromotions] = useState(0);
  const [agains, setAgains] = useState(0);
  const [done, setDone] = useState(false);
  const [boxCounts, setBoxCounts] = useState<Record<string, number>>({});

  const total = useMemo(
    () => (queue ? new Set(queue.map((c) => c.id)).size + reviewedIds.size - queue.filter((c) => reviewedIds.has(c.id)).length : 0),
    // Recomputing on queue changes keeps the "n / total" header honest even
    // after Again re-queues (which don't grow the unique-card total).
    [queue, reviewedIds]
  );

  useEffect(() => {
    let cancelled = false;
    fetchStudyQueue(courseDbId, moduleId)
      .then((cards) => {
        if (cancelled) return;
        setQueue(cards);
        if (cards.length === 0) setDone(true);
      })
      .catch((err) => !cancelled && setLoadError(String(err)));
    return () => {
      cancelled = true;
    };
  }, [courseDbId, moduleId]);

  const card = queue?.[0] ?? null;

  const flip = useCallback(() => {
    if (!flipped && card) setFlipped(true);
  }, [flipped, card]);

  const grade = (g: "again" | "good" | "easy") => {
    if (!card || !queue || !flipped) return;
    reviewedIds.add(card.id);

    // Optimistic local Leitner mirror (server result updates streak later).
    const newBox = g === "again" ? 1 : Math.min(5, card.box + (g === "easy" ? 2 : 1));
    if (newBox > card.box) setPromotions((p) => p + (newBox - card.box));
    if (g === "again") setAgains((a) => a + 1);
    setBoxCounts((prev) => ({ ...prev, [card.id]: newBox }));

    recordFlashcardReview(card.id, g)
      .then((res) => setStreak(res.current_streak))
      .catch(() => {
        /* Optimistic by design: a transient failure never interrupts the
           session; the card simply resurfaces next time it's due. */
      });

    const rest = queue.slice(1);
    if (g === "again") {
      // The card comes back around within this session.
      const requeued: StudyCard = { ...card, box: 1, is_new: false };
      rest.splice(Math.min(2, rest.length), 0, requeued);
    }
    setFlipped(false);
    setCalcInput("");
    if (rest.length === 0) {
      setDone(true);
      setQueue([]);
    } else {
      setQueue(rest);
    }
  };

  // ── Render helpers ─────────────────────────────────────────────────────────

  const renderFront = (c: StudyCard) => {
    if (c.card_type === "cloze") {
      const parts = c.front.split("___");
      return (
        <div className="flex-1 flex flex-col justify-center gap-3 min-h-0 overflow-y-auto">
          <p className="text-lg font-semibold text-center leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
            {parts.map((part, i) => (
              <span key={i}>
                {part}
                {i < parts.length - 1 && (
                  <span className="inline-block min-w-[72px] border-b-2 border-[hsl(174,60%,62%)] align-baseline">&nbsp;</span>
                )}
              </span>
            ))}
          </p>
          <p className="text-center text-xs text-[hsl(190,30%,74%)]">what fills the blank?</p>
        </div>
      );
    }
    return (
      <div className="flex-1 flex flex-col justify-center gap-3 min-h-0 overflow-y-auto">
        <p
          className="font-serif font-bold text-center leading-snug"
          style={{ fontSize: "clamp(20px, 6vw, 30px)", textWrap: "balance" } as React.CSSProperties}
        >
          {c.front}
        </p>
        {c.card_type === "calculation" && (
          <div className="flex items-center justify-center gap-2" onClick={(e) => e.stopPropagation()}>
            <input
              type="number"
              inputMode="decimal"
              value={calcInput}
              onChange={(e) => setCalcInput(e.target.value)}
              placeholder="?"
              aria-label="Your calculated answer"
              className="w-28 rounded-lg border-0 bg-white/95 px-2 py-2 text-center text-lg font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[hsl(174,60%,55%)]"
            />
            {typeof c.extra?.unit === "string" && (
              <span className="text-sm font-bold text-[hsl(174,60%,70%)]">{c.extra.unit}</span>
            )}
          </div>
        )}
        {c.card_type === "calculation" && (
          <p className="text-center text-xs text-[hsl(190,30%,74%)]">type your answer, then tap to check</p>
        )}
      </div>
    );
  };

  const calcVerdict = (c: StudyCard): { ok: boolean; entered: number } | null => {
    if (c.card_type !== "calculation" || calcInput.trim() === "") return null;
    const v = parseFloat(calcInput);
    if (!Number.isFinite(v)) return null;
    const answer = Number(c.extra?.answer ?? NaN);
    const tolerance = Number(c.extra?.tolerance ?? 0);
    return { ok: Math.abs(v - answer) <= tolerance, entered: v };
  };

  // ── Screens ────────────────────────────────────────────────────────────────

  if (loadError) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-3 p-8 text-center">
        <p className="text-sm text-slate-600">Couldn't load your study cards.</p>
        <p className="text-xs text-slate-400 max-w-sm break-words">{loadError}</p>
        <button onClick={onClose} className="mt-2 rounded-lg border px-5 py-2 text-sm font-semibold text-slate-700">
          Back to course
        </button>
      </div>
    );
  }

  if (!queue) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-[hsl(174,62%,32%)] border-t-transparent" />
      </div>
    );
  }

  if (done) {
    const reviewed = reviewedIds.size;
    const dist = [0, 0, 0, 0, 0];
    Object.values(boxCounts).forEach((b) => {
      dist[b - 1]++;
    });
    const max = Math.max(...dist, 1);
    return (
      <div className="flex-1 flex flex-col justify-center gap-4 p-6 max-w-md mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center text-[hsl(174,62%,26%)]">
          {reviewed === 0 ? "All caught up ✓" : "Session complete ✓"}
        </h2>
        {reviewed === 0 ? (
          <p className="text-center text-sm text-slate-600">
            No cards are due right now — the schedule brings them back exactly when your memory needs them.
          </p>
        ) : (
          <>
            <div className="flex gap-2.5">
              {[
                { v: reviewed, l: "cards reviewed" },
                { v: promotions, l: "promotions" },
                { v: agains, l: "sent back" },
              ].map((s) => (
                <div key={s.l} className="flex-1 rounded-xl border bg-white py-3 text-center">
                  <div className="font-serif text-2xl font-bold text-[hsl(174,62%,26%)]">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-wide text-slate-500">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border bg-white p-4">
              <p className="mb-2 text-[10px] uppercase tracking-wide text-slate-500">This session's cards now sit in</p>
              {dist.map((n, i) => (
                <div key={i} className="my-1 flex items-center gap-2 text-xs">
                  <span className="w-11 text-slate-500">Box {i + 1}</span>
                  <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <i className="block h-full rounded-full bg-[hsl(174,62%,36%)]" style={{ width: `${(n / max) * 100}%` }} />
                  </span>
                  <span className="w-4 text-right font-bold text-[hsl(174,62%,26%)]">{n}</span>
                </div>
              ))}
            </div>
          </>
        )}
        {streak !== null && (
          <p className="text-center text-sm font-bold text-amber-600">🔥 {streak}-day streak — see you tomorrow</p>
        )}
        <div className="flex flex-col gap-2">
          {onTakeQuiz && reviewed > 0 && (
            <button
              onClick={onTakeQuiz}
              className="rounded-xl bg-[hsl(174,62%,32%)] px-4 py-3.5 text-sm font-bold text-white hover:bg-[hsl(174,62%,26%)]"
            >
              Take the module quiz →
            </button>
          )}
          <button onClick={onClose} className="rounded-xl border bg-white px-4 py-3.5 text-sm font-bold text-[hsl(174,62%,26%)]">
            Back to course
          </button>
        </div>
      </div>
    );
  }

  const seen = reviewedIds.size;
  const verdict = flipped && card ? calcVerdict(card) : null;

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-slate-50" data-testid="flashcard-study">
      <style>{FLIP_STYLES}</style>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-3 pb-2">
        <button
          onClick={onClose}
          aria-label="Exit study session"
          className="flex h-8 w-8 items-center justify-center rounded-full border bg-white text-slate-500"
        >
          ✕
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-bold text-[hsl(174,62%,26%)]">
            {moduleTitle ? `${moduleTitle} · Study cards` : "Today's study cards"}
          </p>
          <p className="text-[11px] text-slate-500" data-testid="fc-counter">
            {Math.min(seen + 1, total)} / {total}
          </p>
        </div>
        {streak !== null && <span className="text-sm font-bold text-amber-600">🔥 {streak}</span>}
      </div>
      <div className="mx-4 h-1 overflow-hidden rounded-full bg-slate-200">
        <i className="block h-full rounded-full bg-[hsl(174,62%,36%)] transition-all" style={{ width: `${(seen / Math.max(total, 1)) * 100}%` }} />
      </div>

      {/* Card */}
      <div className="fc-stage flex-1 min-h-0 px-4 py-4">
        {card && (
          <div
            className={`fc-card cursor-pointer select-none ${flipped ? "flipped" : ""}`}
            onClick={flip}
            role="button"
            aria-label={flipped ? "Card answer" : "Tap to reveal the answer"}
            data-testid="fc-card"
          >
            <div className="fc-face text-white shadow-xl" style={{ background: "linear-gradient(150deg, hsl(174,55%,21%), hsl(190,50%,17%))" }}>
              <div className="flex items-center justify-between text-[10.5px] font-bold uppercase tracking-wider text-[hsl(174,60%,68%)]">
                <span>{TYPE_LABELS[card.card_type]}</span>
                <span className="rounded-full border border-[hsla(174,60%,70%,0.3)] bg-[hsla(174,60%,70%,0.15)] px-2 py-0.5">
                  Box {card.box}{card.is_new ? " · new" : " · due"}
                </span>
              </div>
              {renderFront(card)}
              <p className="text-center text-xs text-[hsl(190,30%,74%)]">tap card to flip</p>
            </div>
            <div className="fc-face fc-back border bg-white shadow-xl">
              <div className="flex items-center justify-between text-[10.5px] font-bold uppercase tracking-wider text-[hsl(174,62%,36%)]">
                <span>Answer</span>
                <span className="rounded-full border border-[hsl(174,35%,84%)] bg-[hsl(174,45%,96%)] px-2 py-0.5 text-[hsl(174,62%,26%)]">
                  Box {card.box}
                </span>
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto py-3">
                <p className="text-[15px] leading-relaxed text-slate-800">{card.back}</p>
                {card.card_type === "cloze" && typeof card.extra?.answer === "string" && (
                  <p className="mt-2 text-sm">
                    <span className="font-bold text-emerald-700 border-b-2 border-emerald-600">{card.extra.answer}</span>
                  </p>
                )}
                {verdict && (
                  <p className={`mt-2 text-sm font-bold ${verdict.ok ? "text-emerald-700" : "text-red-600"}`}>
                    {verdict.ok ? "✓ Your answer was right" : `✗ You entered ${verdict.entered}${typeof card.extra?.unit === "string" ? ` ${card.extra.unit}` : ""}`}
                  </p>
                )}
              </div>
              {card.source?.lesson_title && (
                <p className="self-start rounded-lg border border-dashed border-[hsl(174,35%,84%)] bg-[hsl(174,45%,96%)] px-2.5 py-1 text-[10.5px] text-slate-500">
                  from: {card.source.lesson_title}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Bottom bar — fixed-height thumb zone */}
      <div className="px-4 pb-4" style={{ paddingBottom: "max(16px, env(safe-area-inset-bottom))" }}>
        {!flipped ? (
          <p className="py-4 text-center text-xs text-slate-500">Tap the card to see the answer</p>
        ) : (
          <div className="flex gap-2.5">
            <button
              onClick={() => grade("again")}
              className="flex min-h-[56px] flex-1 flex-col items-center justify-center rounded-2xl bg-red-600 text-white active:scale-95"
            >
              <span className="text-sm font-extrabold">Again</span>
              <span className="text-[10px] opacity-85">→ Box 1 · retry soon</span>
            </button>
            <button
              onClick={() => grade("good")}
              className="flex min-h-[56px] flex-1 flex-col items-center justify-center rounded-2xl bg-[hsl(174,62%,36%)] text-white active:scale-95"
            >
              <span className="text-sm font-extrabold">Good</span>
              <span className="text-[10px] opacity-85">↑ 1 box</span>
            </button>
            <button
              onClick={() => grade("easy")}
              className="flex min-h-[56px] flex-1 flex-col items-center justify-center rounded-2xl bg-emerald-600 text-white active:scale-95"
            >
              <span className="text-sm font-extrabold">Easy</span>
              <span className="text-[10px] opacity-85">↑ 2 boxes</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
