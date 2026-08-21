// ============================================================================
// QuizRefreshDialog — propose a REPLACEMENT quiz grounded in the module's
// current lesson content, review it against the existing questions (tick the
// ones to Keep), apply in one transaction, undo in one click.
//
// PRD docs/AI-CONTENT-REFINEMENT-PRD.md §5.2. Existing questions default to
// REPLACE (owner decision 2026-08-21) — tick Keep to preserve any of them.
// ============================================================================

import { useEffect, useState } from "react";
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
  applyQuizRefresh,
  fetchDraft,
  refreshModuleQuiz,
  revertQuizRefresh,
  saveDraftPayload,
  type ApplyQuizRefreshResult,
  type DraftPayload,
  type DraftQuestion,
  type Module,
  type QuestionType,
  type QuizQuestion,
} from "@/lib/admin-api";

const TYPE_CHOICES: { value: QuestionType; label: string }[] = [
  { value: "multiple_choice", label: "Multiple choice" },
  { value: "true_false", label: "True / false" },
  { value: "multiple_select", label: "Select all" },
  { value: "ordering", label: "Ordering" },
  { value: "matching", label: "Matching" },
  { value: "fill_in_blank", label: "Fill in the blank" },
  { value: "numeric", label: "Calculation" },
  { value: "scenario", label: "Case / scenario" },
];

type Phase = "ask" | "running" | "review" | "applied";

interface QuizRefreshDialogProps {
  module: Module | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** The module's current questions (for the Keep checklist). */
  existingQuestions: QuizQuestion[];
  /** Called after apply or undo so the parent reloads its question list. */
  onApplied?: () => void;
}

export default function QuizRefreshDialog({
  module,
  open,
  onOpenChange,
  existingQuestions,
  onApplied,
}: QuizRefreshDialogProps) {
  const { toast } = useToast();
  const [phase, setPhase] = useState<Phase>("ask");
  const [types, setTypes] = useState<QuestionType[]>([]);
  const [instruction, setInstruction] = useState("");
  const [draftId, setDraftId] = useState<string | null>(null);
  const [payload, setPayload] = useState<DraftPayload | null>(null);
  const [dirty, setDirty] = useState(false);
  const [keepIds, setKeepIds] = useState<Set<string>>(new Set());
  const [applyResult, setApplyResult] = useState<ApplyQuizRefreshResult | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!open) return;
    setPhase("ask");
    setTypes([]);
    setInstruction("");
    setDraftId(null);
    setPayload(null);
    setDirty(false);
    setKeepIds(new Set());
    setApplyResult(null);
    setBusy(false);
  }, [open]);

  const toggleType = (t: QuestionType) =>
    setTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const toggleKeep = (id: string) =>
    setKeepIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const proposed = payload?.quiz_questions ?? [];
  const caseBlock = payload?.case ?? null;
  const proposedTotal = proposed.length + (caseBlock?.questions?.length ?? 0);

  const setProposed = (i: number, patch: Partial<DraftQuestion>) => {
    if (!payload) return;
    setPayload({
      ...payload,
      quiz_questions: proposed.map((q, j) => (j === i ? { ...q, ...patch } : q)),
    });
    setDirty(true);
  };
  const removeProposed = (i: number) => {
    if (!payload) return;
    setPayload({ ...payload, quiz_questions: proposed.filter((_, j) => j !== i) });
    setDirty(true);
  };

  const handleRun = async () => {
    if (!module) return;
    setPhase("running");
    try {
      const res = await refreshModuleQuiz(module.id, types.length ? types : undefined, instruction);
      const row = await fetchDraft(res.draft_id);
      if (!row) throw new Error("Proposal was staged but could not be loaded — try reopening this dialog.");
      setDraftId(res.draft_id);
      setPayload(row.payload);
      setPhase("review");
    } catch (err) {
      toast({ title: "Quiz refresh failed", description: String(err), variant: "destructive" });
      setPhase("ask");
    }
  };

  const handleApply = async () => {
    if (!draftId || !payload) return;
    setBusy(true);
    try {
      if (dirty) await saveDraftPayload(draftId, payload); // never apply stale edits
      const res = await applyQuizRefresh(draftId, [...keepIds]);
      setApplyResult(res);
      setPhase("applied");
      onApplied?.();
      toast({
        title: "Quiz refreshed",
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
      await revertQuizRefresh(draftId);
      onApplied?.();
      toast({ title: "Reverted", description: "The previous question set is fully restored." });
      onOpenChange(false);
    } catch (err) {
      toast({ title: "Undo failed", description: String(err), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  const questionSummary = (q: DraftQuestion): string => {
    if ((q.question_type === "multiple_choice" || q.question_type === "scenario") && Array.isArray(q.options)) {
      return `✓ ${String(q.options[(q.correct_answer as number) ?? 0] ?? "")}`;
    }
    if (q.question_type === "true_false") {
      return `✓ ${String((q.question_data as { correct_answer?: boolean } | undefined)?.correct_answer ?? "")}`;
    }
    return "";
  };

  return (
    <Dialog open={open} onOpenChange={(o) => phase !== "running" && !busy && onOpenChange(o)}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Refresh with AI ✦ — {module?.title}</DialogTitle>
          <DialogDescription>
            {phase === "review"
              ? "The proposal below REPLACES the current quiz. Tick Keep on any existing question you want to survive."
              : "Proposes a replacement question set generated from this module's CURRENT lesson content. Nothing changes until you review and apply."}
          </DialogDescription>
        </DialogHeader>

        {/* ── ASK ──────────────────────────────────────────────────────────── */}
        {(phase === "ask" || phase === "running") && (
          <div className="space-y-3">
            <div className="rounded-lg border p-3">
              <p className="text-xs font-semibold mb-1.5">Question types (optional)</p>
              <p className="text-[11px] text-muted-foreground mb-2">
                Leave all unticked for the recommended mix for this course's domain.
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {TYPE_CHOICES.map((t) => (
                  <label key={t.value} className="flex items-center gap-2 text-xs cursor-pointer">
                    <Checkbox
                      checked={types.includes(t.value)}
                      onCheckedChange={() => toggleType(t.value)}
                      disabled={phase === "running"}
                    />
                    {t.label}
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="refresh-instruction">Focus (optional)</Label>
              <Textarea
                id="refresh-instruction"
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
                disabled={phase === "running"}
                rows={2}
                placeholder='e.g. "Focus on the new cold-chain section and FEFO rotation"'
              />
            </div>
            {phase === "running" && (
              <div className="flex items-center gap-3 rounded-lg border bg-muted/50 p-3">
                <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-[hsl(174,62%,32%)] border-t-transparent" />
                <p className="text-xs text-muted-foreground">
                  Opus is writing the replacement quiz — usually 1–2 minutes.
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
                  Proposed questions ({proposedTotal})
                  {payload.instruction ? (
                    <span className="ml-2 font-normal text-muted-foreground">“{payload.instruction}”</span>
                  ) : null}
                </h4>
                <div className="space-y-2">
                  {proposed.map((q, i) => (
                    <div key={i} className="rounded-md border p-3 space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className="bg-[hsl(174,45%,92%)] text-[hsl(174,62%,26%)] border-0 text-[10px]">
                          {q.question_type.replace(/_/g, " ")}
                        </Badge>
                        <span className="text-[11px] text-emerald-700">{questionSummary(q)}</span>
                        <span className="ml-auto" />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 text-xs text-red-600"
                          onClick={() => removeProposed(i)}
                        >
                          Delete
                        </Button>
                      </div>
                      <Textarea
                        value={q.question}
                        onChange={(e) => setProposed(i, { question: e.target.value })}
                        rows={2}
                        className="text-sm"
                      />
                      {(q.question_type === "multiple_choice" || q.question_type === "scenario") &&
                        Array.isArray(q.options) && (
                          <div className="space-y-1">
                            {(q.options as string[]).map((opt, oi) => (
                              <label key={oi} className="flex items-center gap-2 text-xs">
                                <input
                                  type="radio"
                                  name={`refresh-correct-${i}`}
                                  checked={q.correct_answer === oi}
                                  onChange={() => setProposed(i, { correct_answer: oi })}
                                />
                                <input
                                  value={String(opt)}
                                  onChange={(e) =>
                                    setProposed(i, {
                                      options: (q.options as string[]).map((x, j) => (j === oi ? e.target.value : x)),
                                    })
                                  }
                                  className="h-7 w-full rounded border bg-background px-2 text-xs"
                                />
                              </label>
                            ))}
                            <p className="text-[10px] text-muted-foreground">● marks the correct answer</p>
                          </div>
                        )}
                      <Textarea
                        value={q.explanation ?? ""}
                        onChange={(e) => setProposed(i, { explanation: e.target.value })}
                        rows={2}
                        className="text-xs"
                        placeholder="Explanation shown after answering…"
                      />
                    </div>
                  ))}
                  {caseBlock && (
                    <div className="rounded-md border border-amber-200 bg-amber-50 p-3 space-y-1">
                      <p className="text-xs font-semibold text-amber-800">Patient case: {caseBlock.title}</p>
                      <p className="text-xs text-amber-900">{caseBlock.vignette}</p>
                      <p className="text-[11px] text-amber-700">
                        {caseBlock.questions?.length ?? 0} linked scenario questions (fine-tune in the Quiz
                        editor after applying).
                      </p>
                    </div>
                  )}
                </div>
              </section>

              <Separator />

              <section>
                <h4 className="text-xs font-semibold mb-1">
                  Existing questions ({existingQuestions.length}) — tick <b>Keep</b> to preserve
                </h4>
                <p className="text-[11px] text-muted-foreground mb-2">
                  Unticked questions are replaced. Everything replaced is snapshotted, so Undo restores
                  the full original set.
                </p>
                <div className="space-y-1.5">
                  {existingQuestions.map((q) => (
                    <label
                      key={q.id}
                      className="flex items-start gap-2 rounded-md border bg-muted/30 px-2.5 py-2 text-xs cursor-pointer"
                    >
                      <Checkbox
                        checked={keepIds.has(q.id)}
                        onCheckedChange={() => toggleKeep(q.id)}
                        className="mt-0.5"
                      />
                      <span className="flex-1 min-w-0">
                        <span className="block truncate">{q.question}</span>
                        <span className="text-[10px] text-muted-foreground">
                          {(q.question_type ?? "multiple_choice").replace(/_/g, " ")}
                        </span>
                      </span>
                      <span className="shrink-0 text-[10px] font-semibold uppercase text-muted-foreground">
                        {keepIds.has(q.id) ? "Keep" : "Replace"}
                      </span>
                    </label>
                  ))}
                  {existingQuestions.length === 0 && (
                    <p className="text-[11px] text-muted-foreground italic">No existing questions.</p>
                  )}
                </div>
              </section>
            </div>
          </ScrollArea>
        )}

        {/* ── APPLIED ──────────────────────────────────────────────────────── */}
        {phase === "applied" && applyResult && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-800">Quiz refreshed ✓</p>
            <p className="mt-1 text-xs text-emerald-900">
              {applyResult.kept ?? 0} kept · {applyResult.deleted ?? 0} replaced ·{" "}
              {applyResult.inserted ?? 0} added. The previous set is snapshotted — Undo restores it
              exactly.
            </p>
          </div>
        )}

        <DialogFooter className="gap-2 sm:gap-2">
          {(phase === "ask" || phase === "running") && (
            <>
              <Button variant="outline" disabled={phase === "running"} onClick={() => onOpenChange(false)}>
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
                {phase === "running" ? "Generating…" : "Generate replacement ✦"}
              </Button>
            </>
          )}
          {phase === "review" && (
            <>
              <Button variant="outline" disabled={busy} onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button
                disabled={busy || proposedTotal === 0}
                onClick={() => void handleApply()}
                className="gap-2 bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
              >
                {busy && <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />}
                Apply — keep {keepIds.size}, replace {existingQuestions.length - keepIds.size}, add {proposedTotal}
              </Button>
            </>
          )}
          {phase === "applied" && (
            <>
              <Button variant="outline" disabled={busy} onClick={() => void handleUndo()}>
                Undo
              </Button>
              <Button onClick={() => onOpenChange(false)} className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">
                Close
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
