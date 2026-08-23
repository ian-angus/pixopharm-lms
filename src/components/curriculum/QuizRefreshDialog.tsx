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
  discardModuleDraft,
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
  // "replace" proposes a full replacement set; "add" keeps every existing
  // question by default and the proposal extends the quiz.
  const [mode, setMode] = useState<"replace" | "add">("replace");
  // null = Auto (server default 6-8)
  const [count, setCount] = useState<number | null>(null);
  // Index of the proposal currently being rerolled (null = none)
  const [rerolling, setRerolling] = useState<number | null>(null);
  // Which proposal shows the student-view preview ("s0", "c1", … or null)
  const [previewKey, setPreviewKey] = useState<string | null>(null);
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

  // Closing from the review phase would otherwise orphan the staged draft
  // (pending_review forever, tokens unreachable) — discard it instead.
  const handleOpenChange = (o: boolean) => {
    if (o) {
      onOpenChange(true);
      return;
    }
    if (phase === "running" || busy || rerolling !== null) return;
    if (phase === "review" && draftId) {
      void discardModuleDraft(draftId).catch(() => {});
    }
    onOpenChange(false);
  };

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

  const setCaseQ = (i: number, patch: Partial<DraftQuestion>) => {
    if (!payload?.case) return;
    setPayload({
      ...payload,
      case: { ...payload.case, questions: payload.case.questions.map((q, j) => (j === i ? { ...q, ...patch } : q)) },
    });
    setDirty(true);
  };
  const removeCaseQ = (i: number) => {
    if (!payload?.case) return;
    const rest = payload.case.questions.filter((_, j) => j !== i);
    // A case with no questions left is dropped entirely.
    setPayload({ ...payload, case: rest.length ? { ...payload.case, questions: rest } : null });
    setDirty(true);
  };

  /** Regenerate one standalone proposal, keeping the rest untouched. */
  const handleReroll = async (i: number) => {
    if (!module || !payload || rerolling !== null) return;
    const target = proposed[i];
    if (!target) return;
    setRerolling(i);
    try {
      const avoidTexts = [
        ...proposed.filter((_, j) => j !== i).map((q) => q.question),
        ...(caseBlock?.questions ?? []).map((q) => q.question),
        ...existingQuestions.map((q) => q.question),
      ];
      const res = await refreshModuleQuiz(module.id, [target.question_type as QuestionType], instruction, {
        count: 1,
        avoid: avoidTexts,
      });
      const row = await fetchDraft(res.draft_id);
      // The mini-draft only exists to carry this one question — discard it so
      // it never shows up as a pending proposal.
      void discardModuleDraft(res.draft_id).catch(() => {});
      const fresh = row?.payload?.quiz_questions?.[0];
      if (!fresh) throw new Error("The reroll came back empty — try again.");
      // Functional update: edits typed while the reroll was in flight survive.
      // (Deletes are disabled during a reroll, so index i cannot shift.)
      setPayload((current) =>
        current
          ? { ...current, quiz_questions: (current.quiz_questions ?? []).map((q, j) => (j === i ? fresh : q)) }
          : current
      );
      setDirty(true);
    } catch (err) {
      toast({ title: "Reroll failed", description: String(err), variant: "destructive" });
    } finally {
      setRerolling(null);
    }
  };

  const handleRun = async () => {
    if (!module) return;
    setPhase("running");
    try {
      const res = await refreshModuleQuiz(module.id, types.length ? types : undefined, instruction, {
        count: count ?? undefined,
        avoid: mode === "add" ? existingQuestions.map((q) => q.question) : undefined,
      });
      const row = await fetchDraft(res.draft_id);
      if (!row) throw new Error("Proposal was staged but could not be loaded — try reopening this dialog.");
      setDraftId(res.draft_id);
      setPayload(row.payload);
      setKeepIds(mode === "add" ? new Set(existingQuestions.map((q) => q.id)) : new Set());
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

  const StudentPreview = ({ q }: { q: DraftQuestion }) => {
    const qd = (q.question_data ?? {}) as Record<string, unknown>;
    const t = q.question_type;
    return (
      <div className="rounded-md border bg-muted/40 p-3 space-y-2 text-sm">
        <p className="text-[10px] font-semibold uppercase text-muted-foreground">Student view</p>
        <p className="font-medium">{q.question}</p>
        {(t === "multiple_choice" || t === "scenario") && Array.isArray(q.options) && (
          <div className="space-y-1">
            {(q.options as string[]).map((o, i) => (
              <div key={i} className="rounded border bg-background px-3 py-1.5 text-xs">
                {String.fromCharCode(65 + i)}. {o}
              </div>
            ))}
          </div>
        )}
        {t === "multiple_select" && Array.isArray(q.options) && (
          <div className="space-y-1">
            {(q.options as string[]).map((o, i) => (
              <div key={i} className="flex items-center gap-2 rounded border bg-background px-3 py-1.5 text-xs">
                <span className="inline-block h-3.5 w-3.5 shrink-0 rounded-sm border" /> {o}
              </div>
            ))}
            <p className="text-[10px] text-muted-foreground">Students tick every answer that applies.</p>
          </div>
        )}
        {t === "ordering" && Array.isArray(q.options) && (
          <div className="space-y-1">
            {(q.options as string[]).map((o, i) => (
              <div key={i} className="flex items-center gap-2 rounded border bg-background px-3 py-1.5 text-xs">
                <span className="text-muted-foreground">⋮⋮</span> {o}
              </div>
            ))}
            <p className="text-[10px] text-muted-foreground">
              Listed in the correct order here — students see them shuffled and drag to reorder.
            </p>
          </div>
        )}
        {t === "matching" && Array.isArray(qd.pairs) && (
          <div className="space-y-1">
            {(qd.pairs as { left: string; right: string }[]).map((p, i) => (
              <div key={i} className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded border bg-background px-2 py-1.5">{p.left}</div>
                <div className="rounded border bg-background px-2 py-1.5 text-muted-foreground">▼ {p.right}</div>
              </div>
            ))}
            <p className="text-[10px] text-muted-foreground">The right column becomes shuffled dropdowns for students.</p>
          </div>
        )}
        {t === "fill_in_blank" && (
          <div className="text-xs">
            <span className="inline-block w-28 rounded border bg-background px-2 py-1 text-muted-foreground">type answer…</span>
            <p className="mt-1 text-[10px] text-muted-foreground">
              Accepted: {((qd.acceptable_answers as string[] | undefined) ?? []).join(", ")}
            </p>
          </div>
        )}
        {t === "true_false" && (
          <div className="flex gap-2 text-xs">
            <span className="rounded border bg-background px-4 py-1.5">True</span>
            <span className="rounded border bg-background px-4 py-1.5">False</span>
          </div>
        )}
        {t === "numeric" && (
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-block w-24 rounded border bg-background px-2 py-1 text-muted-foreground">0.00</span>
            {typeof qd.unit === "string" && qd.unit ? <span>{qd.unit}</span> : null}
            <span className="text-[10px] text-muted-foreground">tolerance ± {Number(qd.tolerance ?? 0)}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>AI quiz ✦ — {module?.title}</DialogTitle>
          <DialogDescription>
            {phase === "review"
              ? "Only questions ticked Keep survive alongside the proposal. Untick a Keep to replace that question."
              : "Proposes questions generated from this module's CURRENT lesson content. Nothing changes until you review and apply."}
          </DialogDescription>
        </DialogHeader>

        {/* ── ASK ──────────────────────────────────────────────────────────── */}
        {(phase === "ask" || phase === "running") && (
          <div className="space-y-3">
            {existingQuestions.length > 0 && (
              <div className="rounded-lg border p-3">
                <p className="text-xs font-semibold mb-1.5">What should happen to the current {existingQuestions.length} question{existingQuestions.length !== 1 ? "s" : ""}?</p>
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="radio"
                      name="ai-quiz-mode"
                      checked={mode === "replace"}
                      onChange={() => setMode("replace")}
                      disabled={phase === "running"}
                      aria-label="Replace the current quiz"
                    />
                    Replace them — you can still tick Keep on individual questions during review
                  </label>
                  <label className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="radio"
                      name="ai-quiz-mode"
                      checked={mode === "add"}
                      onChange={() => setMode("add")}
                      disabled={phase === "running"}
                      aria-label="Add to the current quiz"
                    />
                    Keep them all — the AI questions are added on top
                  </label>
                </div>
              </div>
            )}
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
            <div className="flex items-center gap-2">
              <Label htmlFor="refresh-count" className="text-xs">How many questions?</Label>
              <select
                id="refresh-count"
                className="h-8 rounded border bg-background px-2 text-xs"
                value={count === null ? "auto" : String(count)}
                onChange={(e) => setCount(e.target.value === "auto" ? null : Number(e.target.value))}
                disabled={phase === "running"}
              >
                <option value="auto">Auto (6–8)</option>
                {[5, 6, 8, 10, 12, 15].map((n) => (
                  <option key={n} value={String(n)}>{n}</option>
                ))}
              </select>
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
                          className="h-6 text-xs"
                          onClick={() => setPreviewKey(previewKey === `s${i}` ? null : `s${i}`)}
                        >
                          {previewKey === `s${i}` ? "Hide preview" : "👁 Preview"}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 text-xs"
                          disabled={rerolling !== null}
                          title="Regenerate just this question (same type, avoids duplicating the others)"
                          onClick={() => void handleReroll(i)}
                        >
                          {rerolling === i ? "Rerolling…" : "↻ Reroll"}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 text-xs text-red-600"
                          disabled={rerolling !== null}
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
                              <div key={oi} className="flex items-center gap-2 text-xs">
                                <input
                                  type="radio"
                                  aria-label={`Mark option ${oi + 1} as correct`}
                                  name={`refresh-correct-${i}`}
                                  checked={q.correct_answer === oi}
                                  onChange={() => setProposed(i, { correct_answer: oi })}
                                />
                                <input
                                  aria-label={`Option ${oi + 1} text`}
                                  value={String(opt)}
                                  onChange={(e) =>
                                    setProposed(i, {
                                      options: (q.options as string[]).map((x, j) => (j === oi ? e.target.value : x)),
                                    })
                                  }
                                  className="h-7 w-full rounded border bg-background px-2 text-xs"
                                />
                              </div>
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
                      {previewKey === `s${i}` && <StudentPreview q={q} />}
                    </div>
                  ))}
                  {caseBlock && (
                    <div className="rounded-md border border-amber-200 bg-amber-50 p-3 space-y-2">
                      <p className="text-xs font-semibold text-amber-800">Patient case: {caseBlock.title}</p>
                      <p className="text-xs text-amber-900">{caseBlock.vignette}</p>
                      {(caseBlock.questions ?? []).map((q, ci) => (
                        <div key={ci} className="rounded-md border border-amber-300 bg-white p-2.5 space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-amber-100 text-amber-800 border-0 text-[10px]">scenario</Badge>
                            <span className="text-[11px] text-emerald-700">{questionSummary(q)}</span>
                            <span className="ml-auto" />
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 text-xs"
                              onClick={() => setPreviewKey(previewKey === `c${ci}` ? null : `c${ci}`)}
                            >
                              {previewKey === `c${ci}` ? "Hide preview" : "👁 Preview"}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 text-xs text-red-600"
                              disabled={rerolling !== null}
                              onClick={() => removeCaseQ(ci)}
                            >
                              Delete
                            </Button>
                          </div>
                          <Textarea
                            value={q.question}
                            onChange={(e) => setCaseQ(ci, { question: e.target.value })}
                            rows={2}
                            className="text-sm"
                          />
                          {Array.isArray(q.options) && (
                            <div className="space-y-1">
                              {(q.options as string[]).map((opt, oi) => (
                                <div key={oi} className="flex items-center gap-2 text-xs">
                                  <input
                                    type="radio"
                                    aria-label={`Mark case option ${oi + 1} as correct`}
                                    name={`refresh-case-correct-${ci}`}
                                    checked={q.correct_answer === oi}
                                    onChange={() => setCaseQ(ci, { correct_answer: oi })}
                                  />
                                  <input
                                    aria-label={`Case option ${oi + 1} text`}
                                    value={String(opt)}
                                    onChange={(e) =>
                                      setCaseQ(ci, {
                                        options: (q.options as string[]).map((x, j) => (j === oi ? e.target.value : x)),
                                      })
                                    }
                                    className="h-7 w-full rounded border bg-background px-2 text-xs"
                                  />
                                </div>
                              ))}
                              <p className="text-[10px] text-muted-foreground">● marks the correct answer</p>
                            </div>
                          )}
                          <Textarea
                            value={q.explanation ?? ""}
                            onChange={(e) => setCaseQ(ci, { explanation: e.target.value })}
                            rows={2}
                            className="text-xs"
                            placeholder="Explanation shown after answering…"
                          />
                          {previewKey === `c${ci}` && <StudentPreview q={q} />}
                        </div>
                      ))}
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
                {phase === "running"
                  ? "Generating…"
                  : existingQuestions.length === 0
                  ? "Generate questions ✦"
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
                disabled={busy || rerolling !== null || proposedTotal === 0}
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
