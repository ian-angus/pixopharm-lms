// ============================================================================
// FlashcardRefreshDialog — review-first AI deck generation for one module.
//
// Mirrors QuizRefreshDialog's contract exactly: ask (replace/add mode, count,
// focus) → running (drop-safe; the draft is staged server-side) → review
// (every proposed card editable inline, per-card ↻ reroll and 👁 student
// preview, Keep ticks on existing cards) → applied (counts + one-click Undo).
// Closing from review discards the staged draft.
// ============================================================================

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import {
  applyFlashcardRefresh,
  discardModuleDraft,
  fetchDraft,
  generateFlashcards,
  revertFlashcardRefresh,
  saveDraftPayload,
  type ApplyFlashcardRefreshResult,
  type DeckCard,
  type DraftPayload,
  type Flashcard,
  type FlashcardType,
  type Module,
} from "@/lib/admin-api";

const TYPE_LABELS: Record<FlashcardType, string> = {
  term_definition: "term ↔ definition",
  brand_generic: "brand ↔ generic",
  drug_stem: "drug stem",
  cloze: "fill the gap",
  calculation: "calculation",
  island_compare: "island comparison",
};

type Phase = "ask" | "running" | "review" | "applied";

interface FlashcardRefreshDialogProps {
  module: Module | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** The module's current deck (for the Keep checklist + add-mode dedupe). */
  existingCards: Flashcard[];
  /** Called after apply or undo so the parent can refetch. */
  onApplied?: () => void;
}

export default function FlashcardRefreshDialog({
  module,
  open,
  onOpenChange,
  existingCards,
  onApplied,
}: FlashcardRefreshDialogProps) {
  const { toast } = useToast();
  const [phase, setPhase] = useState<Phase>("ask");
  const [mode, setMode] = useState<"replace" | "add">("replace");
  // null = Auto (server default 15–25)
  const [count, setCount] = useState<number | null>(null);
  const [instruction, setInstruction] = useState("");
  const [draftId, setDraftId] = useState<string | null>(null);
  const [payload, setPayload] = useState<DraftPayload | null>(null);
  const [dirty, setDirty] = useState(false);
  const [keepIds, setKeepIds] = useState<Set<string>>(new Set());
  const [applyResult, setApplyResult] = useState<ApplyFlashcardRefreshResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [rerolling, setRerolling] = useState<number | null>(null);
  const [previewIdx, setPreviewIdx] = useState<number | null>(null);

  const cards = payload?.cards ?? [];

  const resetAll = () => {
    setPhase("ask");
    setMode("replace");
    setCount(null);
    setInstruction("");
    setDraftId(null);
    setPayload(null);
    setDirty(false);
    setKeepIds(new Set());
    setApplyResult(null);
    setPreviewIdx(null);
  };

  const handleOpenChange = (next: boolean) => {
    if (phase === "running" || busy || rerolling !== null) return;
    // Closing from the review phase would otherwise orphan the staged draft.
    if (!next && phase === "review" && draftId) {
      void discardModuleDraft(draftId).catch(() => {});
    }
    if (!next) resetAll();
    onOpenChange(next);
  };

  const toggleKeep = (id: string) =>
    setKeepIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const setCard = (i: number, patch: Partial<DeckCard>) => {
    if (!payload) return;
    setPayload({ ...payload, cards: cards.map((c, j) => (j === i ? { ...c, ...patch } : c)) });
    setDirty(true);
  };
  const setCardExtra = (i: number, patch: Record<string, unknown>) => {
    const current = cards[i];
    if (!current) return;
    setCard(i, { extra: { ...(current.extra ?? {}), ...patch } });
  };
  const removeCard = (i: number) => {
    if (!payload) return;
    setPayload({ ...payload, cards: cards.filter((_, j) => j !== i) });
    setDirty(true);
    setPreviewIdx(null);
  };

  const handleRun = async () => {
    if (!module) return;
    setPhase("running");
    try {
      const res = await generateFlashcards(module.id, instruction, {
        count: count ?? undefined,
        avoid: mode === "add" ? existingCards.map((c) => c.front) : undefined,
      });
      const row = await fetchDraft(res.draft_id);
      if (!row) throw new Error("Proposal was staged but could not be loaded — try reopening this dialog.");
      setDraftId(res.draft_id);
      setPayload(row.payload);
      setKeepIds(mode === "add" ? new Set(existingCards.map((c) => c.id)) : new Set());
      setPhase("review");
    } catch (err) {
      toast({ title: "Deck generation failed", description: String(err), variant: "destructive" });
      setPhase("ask");
    }
  };

  /** Regenerate one proposed card, keeping the rest untouched. */
  const handleReroll = async (i: number) => {
    if (!module || !payload || rerolling !== null) return;
    const target = cards[i];
    if (!target) return;
    setRerolling(i);
    try {
      const avoidTexts = [
        ...cards.filter((_, j) => j !== i).map((c) => c.front),
        ...existingCards.map((c) => c.front),
      ];
      const res = await generateFlashcards(module.id, instruction, {
        count: 1,
        types: [target.card_type],
        avoid: avoidTexts,
      });
      const row = await fetchDraft(res.draft_id);
      // The mini-draft only exists to carry this one card — discard it.
      void discardModuleDraft(res.draft_id).catch(() => {});
      const fresh = row?.payload?.cards?.[0];
      if (!fresh) throw new Error("The reroll came back empty — try again.");
      setPayload({ ...payload, cards: cards.map((c, j) => (j === i ? fresh : c)) });
      setDirty(true);
    } catch (err) {
      toast({ title: "Reroll failed", description: String(err), variant: "destructive" });
    } finally {
      setRerolling(null);
    }
  };

  const handleApply = async () => {
    if (!draftId || !payload) return;
    setBusy(true);
    try {
      if (dirty) await saveDraftPayload(draftId, payload); // never apply stale edits
      const res = await applyFlashcardRefresh(draftId, [...keepIds]);
      setApplyResult(res);
      setPhase("applied");
      onApplied?.();
      toast({
        title: "Deck updated",
        description: `${res.kept ?? 0} kept · ${res.deleted ?? 0} replaced · ${res.inserted ?? 0} added. Undo is available below.`,
      });
    } catch (err) {
      toast({ title: "Apply failed", description: String(err), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  const handleUndo = async () => {
    if (!draftId) return;
    setBusy(true);
    try {
      await revertFlashcardRefresh(draftId);
      onApplied?.();
      toast({ title: "Reverted", description: "The previous deck is restored (study progress on kept cards survives)." });
      resetAll();
      onOpenChange(false);
    } catch (err) {
      toast({ title: "Undo failed", description: String(err), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  const StudentPreview = ({ c }: { c: DeckCard }) => (
    <div className="rounded-md border bg-muted/40 p-3 space-y-2 text-sm">
      <p className="text-[10px] font-semibold uppercase text-muted-foreground">Student view</p>
      <div className="rounded-xl p-4 text-white" style={{ background: "linear-gradient(150deg, hsl(174,55%,21%), hsl(190,50%,17%))" }}>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[hsl(174,60%,68%)]">{TYPE_LABELS[c.card_type]}</p>
        <p className="mt-1 text-center font-serif text-lg font-bold">{c.front}</p>
        {c.card_type === "calculation" && (
          <p className="mt-1 text-center text-[11px] text-[hsl(190,30%,74%)]">
            student types a number{typeof c.extra?.unit === "string" ? ` (${c.extra.unit})` : ""} before flipping
          </p>
        )}
        <p className="mt-1 text-center text-[10px] text-[hsl(190,30%,74%)]">tap to flip</p>
      </div>
      <div className="rounded-xl border bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[hsl(174,62%,36%)]">Answer</p>
        <p className="mt-1 text-xs">{c.back}</p>
        {c.card_type === "cloze" && typeof c.extra?.answer === "string" && (
          <p className="mt-1 text-xs font-bold text-emerald-700">→ {c.extra.answer}</p>
        )}
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>AI deck ✦ — {module?.title}</DialogTitle>
          <DialogDescription>
            {phase === "review"
              ? "Edit any card, reroll the ones you don't love, tick Keep on existing cards. Nothing changes until you apply."
              : "Proposes study flashcards generated from this module's CURRENT lesson content. Nothing changes until you review and apply."}
          </DialogDescription>
        </DialogHeader>

        {/* ── ASK ──────────────────────────────────────────────────────────── */}
        {(phase === "ask" || phase === "running") && (
          <div className="space-y-3">
            {existingCards.length > 0 && (
              <div className="rounded-lg border p-3">
                <p className="text-xs font-semibold mb-1.5">
                  What should happen to the current {existingCards.length} card{existingCards.length !== 1 ? "s" : ""}?
                </p>
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="radio"
                      name="ai-deck-mode"
                      checked={mode === "replace"}
                      onChange={() => setMode("replace")}
                      disabled={phase === "running"}
                      aria-label="Replace the current deck"
                    />
                    Replace them — you can still tick Keep on individual cards during review
                  </label>
                  <label className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="radio"
                      name="ai-deck-mode"
                      checked={mode === "add"}
                      onChange={() => setMode("add")}
                      disabled={phase === "running"}
                      aria-label="Add to the current deck"
                    />
                    Keep them all — the AI cards are added on top
                  </label>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Label htmlFor="deck-count" className="text-xs">How many cards?</Label>
              <select
                id="deck-count"
                className="h-8 rounded border bg-background px-2 text-xs"
                value={count === null ? "auto" : String(count)}
                onChange={(e) => setCount(e.target.value === "auto" ? null : Number(e.target.value))}
                disabled={phase === "running"}
              >
                <option value="auto">Auto (15–25)</option>
                {[10, 15, 20, 25, 30].map((n) => (
                  <option key={n} value={String(n)}>{n}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="deck-instruction">Focus (optional)</Label>
              <Textarea
                id="deck-instruction"
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
                disabled={phase === "running"}
                rows={2}
                placeholder='e.g. "Lean on the drug interaction tables and island scheduling differences"'
              />
            </div>
            {phase === "running" && (
              <div className="flex items-center gap-3 rounded-lg border bg-muted/50 p-3">
                <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-[hsl(174,62%,32%)] border-t-transparent" />
                <p className="text-xs text-muted-foreground">
                  Opus is writing the deck — usually 1–2 minutes.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── REVIEW ───────────────────────────────────────────────────────── */}
        {phase === "review" && payload && (
          <ScrollArea className="flex-1 min-h-0 pr-3">
            <div className="space-y-4">
              <section>
                <h4 className="text-xs font-semibold mb-2">
                  Proposed cards ({cards.length})
                  {payload.instruction ? (
                    <span className="ml-2 font-normal text-muted-foreground">“{payload.instruction}”</span>
                  ) : null}
                </h4>
                <div className="space-y-2">
                  {cards.map((c, i) => (
                    <div key={i} className="rounded-md border p-3 space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className="bg-[hsl(174,45%,92%)] text-[hsl(174,62%,26%)] border-0 text-[10px]">
                          {TYPE_LABELS[c.card_type]}
                        </Badge>
                        {c.source?.lesson_title && (
                          <span className="text-[10px] text-muted-foreground border border-dashed rounded px-1.5 py-0.5">
                            from: {c.source.lesson_title}
                          </span>
                        )}
                        <span className="ml-auto" />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 text-xs"
                          onClick={() => setPreviewIdx(previewIdx === i ? null : i)}
                        >
                          {previewIdx === i ? "Hide preview" : "👁 Preview"}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 text-xs"
                          disabled={rerolling !== null}
                          title="Regenerate just this card (same type, avoids duplicating the others)"
                          onClick={() => void handleReroll(i)}
                        >
                          {rerolling === i ? "Rerolling…" : "↻ Reroll"}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 text-xs text-red-600"
                          disabled={rerolling !== null}
                          onClick={() => removeCard(i)}
                        >
                          Delete
                        </Button>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div>
                          <p className="text-[10px] font-semibold uppercase text-muted-foreground mb-1">Front</p>
                          <Textarea
                            value={c.front}
                            onChange={(e) => setCard(i, { front: e.target.value })}
                            rows={2}
                            className="text-sm"
                            aria-label={`Card ${i + 1} front`}
                          />
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold uppercase text-muted-foreground mb-1">Back</p>
                          <Textarea
                            value={c.back}
                            onChange={(e) => setCard(i, { back: e.target.value })}
                            rows={2}
                            className="text-sm"
                            aria-label={`Card ${i + 1} back`}
                          />
                        </div>
                      </div>
                      {c.card_type === "cloze" && (
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-muted-foreground shrink-0">Blank answer:</span>
                          <input
                            aria-label={`Card ${i + 1} cloze answer`}
                            value={typeof c.extra?.answer === "string" ? c.extra.answer : ""}
                            onChange={(e) => setCardExtra(i, { answer: e.target.value })}
                            className="h-7 w-full max-w-[220px] rounded border bg-background px-2 text-xs"
                          />
                          {!c.front.includes("___") && (
                            <span className="text-red-600">front needs ___ for the blank</span>
                          )}
                        </div>
                      )}
                      {c.card_type === "calculation" && (
                        <div className="flex items-center gap-2 text-xs flex-wrap">
                          <span className="text-muted-foreground">Answer:</span>
                          <input
                            type="number"
                            aria-label={`Card ${i + 1} numeric answer`}
                            value={typeof c.extra?.answer === "number" ? c.extra.answer : ""}
                            onChange={(e) => setCardExtra(i, { answer: e.target.value === "" ? undefined : Number(e.target.value) })}
                            className="h-7 w-24 rounded border bg-background px-2 text-xs"
                          />
                          <span className="text-muted-foreground">± tolerance:</span>
                          <input
                            type="number"
                            min={0}
                            aria-label={`Card ${i + 1} tolerance`}
                            value={typeof c.extra?.tolerance === "number" ? c.extra.tolerance : 0}
                            onChange={(e) => setCardExtra(i, { tolerance: Math.max(0, Number(e.target.value) || 0) })}
                            className="h-7 w-20 rounded border bg-background px-2 text-xs"
                          />
                          <span className="text-muted-foreground">unit:</span>
                          <input
                            aria-label={`Card ${i + 1} unit`}
                            value={typeof c.extra?.unit === "string" ? c.extra.unit : ""}
                            onChange={(e) => setCardExtra(i, { unit: e.target.value })}
                            className="h-7 w-24 rounded border bg-background px-2 text-xs"
                          />
                        </div>
                      )}
                      {previewIdx === i && <StudentPreview c={c} />}
                    </div>
                  ))}
                </div>
              </section>

              <Separator />

              <section>
                <h4 className="text-xs font-semibold mb-1">
                  Existing cards ({existingCards.length}) — tick <b>Keep</b> to preserve
                </h4>
                <p className="text-[11px] text-muted-foreground mb-2">
                  Unticked cards are replaced (their study history goes with them). Kept cards preserve
                  every student's progress, even through Undo.
                </p>
                <div className="space-y-1.5">
                  {existingCards.map((c) => (
                    <label
                      key={c.id}
                      className="flex items-start gap-2 rounded-md border bg-muted/30 px-2.5 py-2 text-xs cursor-pointer"
                    >
                      <Checkbox
                        checked={keepIds.has(c.id)}
                        onCheckedChange={() => toggleKeep(c.id)}
                        className="mt-0.5"
                      />
                      <span className="flex-1 min-w-0">
                        <span className="block truncate">{c.front}</span>
                        <span className="text-[10px] text-muted-foreground">{TYPE_LABELS[c.card_type]}</span>
                      </span>
                      <span className="shrink-0 text-[10px] font-semibold uppercase text-muted-foreground">
                        {keepIds.has(c.id) ? "Keep" : "Replace"}
                      </span>
                    </label>
                  ))}
                  {existingCards.length === 0 && (
                    <p className="text-[11px] text-muted-foreground italic">No existing cards.</p>
                  )}
                </div>
              </section>
            </div>
          </ScrollArea>
        )}

        {/* ── APPLIED ──────────────────────────────────────────────────────── */}
        {phase === "applied" && applyResult && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-800">Deck updated ✓</p>
            <p className="mt-1 text-xs text-emerald-900">
              {applyResult.kept ?? 0} kept · {applyResult.deleted ?? 0} replaced ·{" "}
              {applyResult.inserted ?? 0} added. The previous deck is snapshotted — Undo restores it
              (and kept cards keep their students' progress).
            </p>
          </div>
        )}

        <DialogFooter>
          {(phase === "ask" || phase === "running") && (
            <>
              <Button variant="outline" disabled={phase === "running"} onClick={() => handleOpenChange(false)}>
                Cancel
              </Button>
              <Button
                disabled={phase === "running"}
                onClick={() => void handleRun()}
                className="gap-2 bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
              >
                {phase === "running" && (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                )}
                {phase === "running"
                  ? "Generating…"
                  : existingCards.length === 0
                  ? "Generate deck ✦"
                  : mode === "add"
                  ? "Generate additions ✦"
                  : "Generate replacement ✦"}
              </Button>
            </>
          )}
          {phase === "review" && (
            <>
              <Button variant="outline" disabled={busy || rerolling !== null} onClick={() => handleOpenChange(false)}>
                Cancel
              </Button>
              <Button
                disabled={busy || rerolling !== null || cards.length === 0}
                onClick={() => void handleApply()}
                className="gap-2 bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
              >
                {busy && <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />}
                Apply — keep {keepIds.size}, replace {existingCards.length - keepIds.size}, add {cards.length}
              </Button>
            </>
          )}
          {phase === "applied" && (
            <>
              <Button variant="outline" disabled={busy} onClick={() => void handleUndo()}>
                Undo — restore previous deck
              </Button>
              <Button onClick={() => handleOpenChange(false)} className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">
                Done
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
