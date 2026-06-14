// ============================================================================
// Paywall — shown when a signed-in student without program access opens course
// content. One purchase (the whole diploma) unlocks every course. Redirects to
// the Lemon Squeezy checkout; gracefully degrades to "not on sale yet" before
// the store is configured.
// ============================================================================

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { fetchProgram, startDiplomaCheckout, type Program } from "@/lib/admin-api";

const PERKS = [
  "Every course in the Caribbean Pharmacy Technician Diploma",
  "Interactive quizzes, case studies and spaced-repetition flashcards",
  "Island-specific content across all CARICOM nations",
  "A certificate when you complete the program",
];

export default function Paywall({ user, onExit }: { user: User | null; onExit?: () => void }) {
  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProgram("diploma").then((p) => { setProgram(p); setLoading(false); });
  }, []);

  const price = program && program.price_usd_cents > 0
    ? `US$${(program.price_usd_cents / 100).toFixed(0)}`
    : null;
  const notConfigured = !loading && (!program?.ls_variant_id || !program?.ls_store_id);

  const handleBuy = async () => {
    if (!user) { setError("Please sign in first."); return; }
    setStarting(true);
    setError(null);
    try {
      const url = await startDiplomaCheckout("diploma");
      window.location.href = url;
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setStarting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-12">
      <div className="max-w-lg w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="bg-[hsl(174,62%,32%)] px-7 py-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(174,45%,82%)]">Pixopharm Academy</p>
          <h1 className="mt-1 text-2xl font-bold leading-tight">
            {program?.title ?? "Caribbean Pharmacy Technician Diploma"}
          </h1>
          <p className="mt-2 text-sm text-[hsl(174,45%,90%)]">
            One enrolment unlocks the entire program — study every course at your own pace.
          </p>
        </div>

        <div className="px-7 py-6">
          <ul className="space-y-2.5">
            {PERKS.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 fill-[hsl(174,62%,32%)]">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                {p}
              </li>
            ))}
          </ul>

          {error && <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-xs text-red-700">{error}</p>}

          {notConfigured ? (
            <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              Enrolment opens soon — checkout isn't available just yet. Please check back shortly.
            </div>
          ) : (
            <button
              onClick={handleBuy}
              disabled={starting || loading}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[hsl(174,62%,32%)] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[hsl(174,62%,26%)] disabled:opacity-60"
            >
              {starting && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />}
              {starting ? "Opening checkout…" : price ? `Enrol — ${price}` : "Enrol in the diploma"}
            </button>
          )}

          <p className="mt-3 text-center text-xs text-slate-400">
            Secure checkout by Lemon Squeezy · one-time payment · taxes handled at checkout
          </p>

          {onExit && (
            <button onClick={onExit} className="mt-4 block w-full text-center text-xs text-slate-500 hover:text-slate-700">
              ← Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
