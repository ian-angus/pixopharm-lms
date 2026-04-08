/**
 * SurveyView — Post-course survey gate.
 *
 * Shown on the certificate screen before the certificate is revealed.
 * Students must complete all 7 questions before receiving their certificate.
 * One response per user per course (enforced by DB UNIQUE constraint).
 */

import { useState } from "react";
import type { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { submitSurvey } from "@/lib/admin-api";

const TEAL = "hsl(174,62%,32%)";
const FONT = "'DM Sans', sans-serif";

// ── Star Rating ───────────────────────────────────────────────────────────────

function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="text-2xl transition-transform hover:scale-110 focus:outline-none"
          aria-label={`${star} star`}
        >
          <span style={{ color: star <= (hover || value) ? "#f59e0b" : "#d1d5db" }}>
            ★
          </span>
        </button>
      ))}
    </div>
  );
}

// ── Pill Option Group ─────────────────────────────────────────────────────────

function PillGroup<T extends string>({
  options,
  value,
  onChange,
}: {
  options: T[];
  value: T | null;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
            value === opt
              ? "bg-[hsl(174,62%,32%)] text-white border-[hsl(174,62%,32%)]"
              : "bg-white text-slate-600 border-slate-200 hover:border-[hsl(174,62%,32%)] hover:text-[hsl(174,62%,32%)]"
          }`}
          style={{ fontFamily: FONT }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

// ── Question Row ──────────────────────────────────────────────────────────────

function Question({
  number,
  label,
  children,
}: {
  number: number;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-3">
        <span
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5"
          style={{ background: TEAL, fontFamily: FONT }}
        >
          {number}
        </span>
        <p className="text-sm font-medium text-slate-700" style={{ fontFamily: FONT }}>
          {label}
        </p>
      </div>
      <div className="pl-9">{children}</div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function SurveyView({
  user,
  courseId,
  courseTitle,
  onComplete,
}: {
  user: User;
  courseId: string;
  courseTitle: string;
  onComplete: () => void;
}) {
  const [overall, setOverall] = useState(0);
  const [clarity, setClarity] = useState(0);
  const [difficulty, setDifficulty] = useState<"Too Easy" | "Just Right" | "Too Hard" | null>(null);
  const [relevance, setRelevance] = useState(0);
  const [recommend, setRecommend] = useState<boolean | null>(null);
  const [likedMost, setLikedMost] = useState("");
  const [toImprove, setToImprove] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValid =
    overall > 0 &&
    clarity > 0 &&
    difficulty !== null &&
    relevance > 0 &&
    recommend !== null;

  const handleSubmit = async () => {
    if (!isValid) return;
    setSubmitting(true);
    setError(null);
    try {
      await submitSurvey({
        user_id: user.id,
        course_id: courseId,
        overall_rating: overall,
        content_clarity: clarity,
        difficulty: difficulty!,
        relevance,
        would_recommend: recommend!,
        liked_most: likedMost.trim(),
        to_improve: toImprove.trim(),
      });
      onComplete();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit survey. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "hsl(174,45%,96%)", border: "2px solid hsl(174,62%,32%,0.3)" }}
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={TEAL} strokeWidth="2">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[hsl(213,50%,16%)]" style={{ fontFamily: FONT }}>
          Almost there — your certificate is ready!
        </h1>
        <p className="text-slate-500 text-sm mt-2" style={{ fontFamily: FONT }}>
          Please take 2 minutes to share your feedback on <strong>{courseTitle}</strong>.
          <br />Your input directly shapes how we improve this course.
        </p>
      </div>

      {/* Survey Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 space-y-6">

          <Question number={1} label="Overall, how would you rate this course?">
            <StarRating value={overall} onChange={setOverall} />
          </Question>

          <Separator />

          <Question number={2} label="How clear and well-organised was the course content?">
            <StarRating value={clarity} onChange={setClarity} />
          </Question>

          <Separator />

          <Question number={3} label="How would you rate the difficulty level?">
            <PillGroup
              options={["Too Easy", "Just Right", "Too Hard"] as const}
              value={difficulty}
              onChange={setDifficulty}
            />
          </Question>

          <Separator />

          <Question number={4} label="How relevant was this course to your day-to-day work?">
            <StarRating value={relevance} onChange={setRelevance} />
          </Question>

          <Separator />

          <Question number={5} label="Would you recommend this course to a colleague?">
            <PillGroup
              options={["Yes", "No"] as const}
              value={recommend === null ? null : recommend ? "Yes" : "No"}
              onChange={(v) => setRecommend(v === "Yes")}
            />
          </Question>

          <Separator />

          <Question number={6} label="What did you like most about this course? (optional)">
            <textarea
              value={likedMost}
              onChange={(e) => setLikedMost(e.target.value)}
              placeholder="e.g. The Caribbean case studies were very relevant to my work..."
              rows={3}
              className="w-full text-sm text-slate-700 border border-slate-200 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[hsl(174,62%,32%)]/30"
              style={{ fontFamily: FONT }}
            />
          </Question>

          <Separator />

          <Question number={7} label="What could be improved? (optional)">
            <textarea
              value={toImprove}
              onChange={(e) => setToImprove(e.target.value)}
              placeholder="e.g. More practice questions on drug interactions..."
              rows={3}
              className="w-full text-sm text-slate-700 border border-slate-200 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[hsl(174,62%,32%)]/30"
              style={{ fontFamily: FONT }}
            />
          </Question>
        </div>

        {/* Submit */}
        <div className="px-6 py-4 bg-slate-50 border-t flex items-center justify-between gap-4">
          {error && (
            <p className="text-sm text-red-600" style={{ fontFamily: FONT }}>{error}</p>
          )}
          {!error && !isValid && (
            <p className="text-xs text-slate-400" style={{ fontFamily: FONT }}>
              Please answer questions 1–5 to continue.
            </p>
          )}
          {!error && isValid && <div />}
          <Button
            onClick={handleSubmit}
            disabled={!isValid || submitting}
            className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)] min-w-[180px]"
          >
            {submitting ? "Submitting…" : "Submit & Get Certificate 🎓"}
          </Button>
        </div>
      </div>
    </div>
  );
}
