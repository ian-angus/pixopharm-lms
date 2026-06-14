// ============================================================================
// DraftReviewDialog — review, MODIFY, then publish an accreditation enhancement
// draft (the client's "create THESE quiz types → review → modify → save" flow).
//
// The draft lives in module_enhancement_drafts (nothing is live yet). Admin can
// edit the high-value fields here, Save (persists the edited payload), then
// Publish (atomic publish_module_draft RPC promotes it to live, append-only).
// Reviewer-only accreditation artifacts (crosswalk, competency checklist,
// remediation, references) are shown read-only for the QA pass.
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import {
  fetchDraft,
  saveDraftPayload,
  publishModuleDraft,
  discardModuleDraft,
  type DraftPayload,
  type DraftQuestion,
  type DraftObjective,
} from "@/lib/admin-api";

interface DraftReviewDialogProps {
  draftId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Called after a successful publish so the parent can refresh counts. */
  onPublished?: (moduleId: string) => void;
}

const BLOOMS = ["remember", "understand", "apply", "analyze", "evaluate", "create"];

export default function DraftReviewDialog({ draftId, open, onOpenChange, onPublished }: DraftReviewDialogProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [confirmPublish, setConfirmPublish] = useState(false);
  const [payload, setPayload] = useState<DraftPayload | null>(null);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (!open || !draftId) return;
    let cancelled = false;
    setLoading(true);
    setPayload(null);
    setDirty(false);
    setConfirmPublish(false);
    fetchDraft(draftId)
      .then((d) => {
        if (cancelled) return;
        if (!d) {
          toast({ title: "Draft not found", variant: "destructive" });
          onOpenChange(false);
          return;
        }
        if (d.status === "published") {
          toast({ title: "Already published", description: "This draft is already live." });
        }
        setPayload(d.payload);
      })
      .catch((e) => toast({ title: "Failed to load draft", description: String(e), variant: "destructive" }))
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, [open, draftId, toast, onOpenChange]);

  // ---- mutation helpers (all flip `dirty`) ---------------------------------
  const patch = (p: Partial<DraftPayload>) => { setPayload((cur) => (cur ? { ...cur, ...p } : cur)); setDirty(true); };
  const setObjective = (i: number, o: Partial<DraftObjective>) =>
    patch({ learning_objectives: (payload!.learning_objectives ?? []).map((x, j) => (j === i ? { ...x, ...o } : x)) });
  const removeObjective = (i: number) =>
    patch({ learning_objectives: (payload!.learning_objectives ?? []).filter((_, j) => j !== i) });
  const setQuestion = (i: number, q: Partial<DraftQuestion>) =>
    patch({ quiz_questions: (payload!.quiz_questions ?? []).map((x, j) => (j === i ? { ...x, ...q } : x)) });
  const removeQuestion = (i: number) =>
    patch({ quiz_questions: (payload!.quiz_questions ?? []).filter((_, j) => j !== i) });

  const objectiveRefs = (payload?.learning_objectives ?? [])
    .map((o, i) => o.objective_number || `LO${i + 1}`);

  const handleSave = async () => {
    if (!draftId || !payload) return;
    setSaving(true);
    try {
      await saveDraftPayload(draftId, payload);
      setDirty(false);
      toast({ title: "Draft saved", description: "Your edits are stored. Publish when ready." });
    } catch (e) {
      toast({ title: "Save failed", description: String(e), variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const handlePublish = async () => {
    if (!draftId || !payload) return;
    setPublishing(true);
    try {
      if (dirty) await saveDraftPayload(draftId, payload); // never publish stale edits
      const res = await publishModuleDraft(draftId);
      if (res.already_published) {
        toast({ title: "Already published" });
      } else {
        toast({
          title: "Published to module ✓",
          description: `${res.lessons_created ?? 0} lessons, ${res.questions_created ?? 0} questions, ${res.objectives_created ?? 0} objectives now live.`,
        });
      }
      if (res.module_id) onPublished?.(res.module_id);
      onOpenChange(false);
    } catch (e) {
      toast({ title: "Publish failed", description: String(e), variant: "destructive" });
    } finally {
      setPublishing(false);
    }
  };

  const handleDiscard = async () => {
    if (!draftId) return;
    try {
      await discardModuleDraft(draftId);
      toast({ title: "Draft discarded" });
      onOpenChange(false);
    } catch (e) {
      toast({ title: "Discard failed", description: String(e), variant: "destructive" });
    }
  };

  const busy = saving || publishing;

  return (
    <Dialog open={open} onOpenChange={(o) => !busy && onOpenChange(o)}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Review accreditation draft</DialogTitle>
          <DialogDescription>
            {payload
              ? `"${payload.module_title ?? "Module"}" — review and modify before publishing. Nothing is live until you Publish.`
              : "Loading draft…"}
          </DialogDescription>
        </DialogHeader>

        {loading && (
          <div className="flex items-center gap-3 p-6 text-sm text-muted-foreground">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-[hsl(174,62%,32%)] border-t-transparent" />
            Loading draft…
          </div>
        )}

        {payload && (
          <Tabs defaultValue="content" className="flex-1 min-h-0 flex flex-col">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="content">Overview &amp; Objectives</TabsTrigger>
              <TabsTrigger value="lessons">Lessons ({payload.lessons?.length ?? 0})</TabsTrigger>
              <TabsTrigger value="quiz">Quiz ({payload.quiz_questions?.length ?? 0})</TabsTrigger>
              <TabsTrigger value="accred">Accreditation</TabsTrigger>
            </TabsList>

            <ScrollArea className="flex-1 min-h-0 mt-3 pr-3">
              {/* ── OVERVIEW & OBJECTIVES ─────────────────────────────────── */}
              <TabsContent value="content" className="space-y-4 mt-0">
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">Module overview <span className="text-muted-foreground font-normal">(shown to students)</span></Label>
                  <Textarea
                    value={payload.module_overview ?? ""}
                    onChange={(e) => patch({ module_overview: e.target.value })}
                    rows={4}
                    className="text-sm"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">Passing score %</Label>
                    <Input type="number" value={payload.passing_score ?? ""} onChange={(e) => patch({ passing_score: e.target.value === "" ? undefined : Number(e.target.value) })} />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">Attempts</Label>
                    <Input type="number" value={payload.attempts_allowed ?? ""} onChange={(e) => patch({ attempts_allowed: e.target.value === "" ? undefined : Number(e.target.value) })} />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">Seat time (min)</Label>
                    <Input type="number" value={payload.seat_time_minutes ?? ""} onChange={(e) => patch({ seat_time_minutes: e.target.value === "" ? undefined : Number(e.target.value) })} />
                  </div>
                </div>

                <Separator />
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-semibold">Learning objectives</Label>
                  <Button
                    variant="outline" size="sm" className="h-7 text-xs"
                    onClick={() => patch({ learning_objectives: [...(payload.learning_objectives ?? []), { objective_number: `LO${(payload.learning_objectives?.length ?? 0) + 1}`, text: "", blooms_level: "apply" }] })}
                  >+ Add objective</Button>
                </div>
                {(payload.learning_objectives ?? []).map((o, i) => (
                  <div key={i} className="flex items-start gap-2 rounded-md border p-2">
                    <Badge variant="outline" className="mt-1 shrink-0">{o.objective_number || `LO${i + 1}`}</Badge>
                    <div className="flex-1 space-y-1.5">
                      <Textarea value={o.text} onChange={(e) => setObjective(i, { text: e.target.value })} rows={2} className="text-sm" placeholder="Measurable, action-based objective…" />
                      <select
                        value={o.blooms_level ?? "apply"}
                        onChange={(e) => setObjective(i, { blooms_level: e.target.value })}
                        className="h-7 rounded border bg-background px-2 text-xs"
                      >
                        {BLOOMS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-red-600" onClick={() => removeObjective(i)}>Remove</Button>
                  </div>
                ))}
              </TabsContent>

              {/* ── LESSONS (preview; edit content after publish) ─────────── */}
              <TabsContent value="lessons" className="space-y-2 mt-0">
                {payload.create_lessons ? (
                  <p className="text-xs text-muted-foreground">
                    This module had no lessons — these {payload.lessons?.length ?? 0} lessons will be CREATED on publish.
                    Fine-tune individual lesson blocks in the lesson editor after publishing.
                  </p>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    This module already has lessons — they are kept as-is. Publish adds the quiz, objectives and metadata only.
                  </p>
                )}
                {(payload.lessons ?? []).map((l, i) => (
                  <div key={i} className="rounded-md border p-2">
                    <Input
                      value={l.title}
                      onChange={(e) => patch({ lessons: payload.lessons.map((x, j) => (j === i ? { ...x, title: e.target.value } : x)) })}
                      className="text-sm font-medium"
                    />
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      {Array.isArray(l.content) ? l.content.length : 0} content blocks · {l.duration_minutes ?? 25} min
                    </p>
                  </div>
                ))}
              </TabsContent>

              {/* ── QUIZ (review + modify) ────────────────────────────────── */}
              <TabsContent value="quiz" className="space-y-3 mt-0">
                {(payload.quiz_questions ?? []).map((q, i) => (
                  <div key={i} className="rounded-md border p-3 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className="bg-[hsl(174,45%,92%)] text-[hsl(174,62%,26%)] border-0 text-[10px]">{q.question_type.replace(/_/g, " ")}</Badge>
                      <select
                        value={q.objective_ref ?? ""}
                        onChange={(e) => setQuestion(i, { objective_ref: e.target.value || undefined })}
                        className="h-6 rounded border bg-background px-1.5 text-[11px]"
                        title="Linked learning objective"
                      >
                        <option value="">— objective —</option>
                        {objectiveRefs.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                      <span className="ml-auto" />
                      <Button variant="ghost" size="sm" className="h-6 text-xs text-red-600" onClick={() => removeQuestion(i)}>Delete</Button>
                    </div>
                    <Textarea value={q.question} onChange={(e) => setQuestion(i, { question: e.target.value })} rows={2} className="text-sm" />

                    {(q.question_type === "multiple_choice" || q.question_type === "scenario") && Array.isArray(q.options) && (
                      <div className="space-y-1">
                        {(q.options as string[]).map((opt, oi) => (
                          <label key={oi} className="flex items-center gap-2 text-xs">
                            <input
                              type="radio"
                              name={`correct-${i}`}
                              checked={q.correct_answer === oi}
                              onChange={() => setQuestion(i, { correct_answer: oi })}
                            />
                            <Input
                              value={String(opt)}
                              onChange={(e) => setQuestion(i, { options: (q.options as string[]).map((x, j) => (j === oi ? e.target.value : x)) })}
                              className="h-7 text-xs"
                            />
                          </label>
                        ))}
                        <p className="text-[10px] text-muted-foreground">● marks the correct answer</p>
                      </div>
                    )}
                    {q.question_type === "true_false" && (
                      <select
                        value={String((q.question_data as { correct_answer?: boolean } | undefined)?.correct_answer ?? true)}
                        onChange={(e) => setQuestion(i, { question_data: { ...(q.question_data ?? {}), correct_answer: e.target.value === "true" } })}
                        className="h-7 rounded border bg-background px-2 text-xs"
                      >
                        <option value="true">Correct: True</option>
                        <option value="false">Correct: False</option>
                      </select>
                    )}
                    {!["multiple_choice", "scenario", "true_false"].includes(q.question_type) && (
                      <p className="text-[11px] text-muted-foreground italic">
                        Answer data for this type can be fine-tuned in the Quiz Editor after publishing.
                      </p>
                    )}

                    <Textarea
                      value={q.explanation ?? ""}
                      onChange={(e) => setQuestion(i, { explanation: e.target.value })}
                      rows={2}
                      className="text-xs"
                      placeholder="Explanation shown after answering…"
                    />
                  </div>
                ))}
                {payload.case && (
                  <div className="rounded-md border border-amber-200 bg-amber-50 p-3 space-y-1">
                    <p className="text-xs font-semibold text-amber-800">Patient case: {payload.case.title}</p>
                    <p className="text-xs text-amber-900">{payload.case.vignette}</p>
                    <p className="text-[11px] text-amber-700">{payload.case.questions?.length ?? 0} linked scenario questions (publish to edit individually).</p>
                  </div>
                )}
              </TabsContent>

              {/* ── ACCREDITATION (reviewer, read-only) ───────────────────── */}
              <TabsContent value="accred" className="space-y-4 mt-0">
                <ReviewerSection title="Crosswalk (objective → assessment → evidence)">
                  {(payload.crosswalk ?? []).length === 0 ? <Empty /> : (
                    <div className="space-y-1.5">
                      {(payload.crosswalk ?? []).map((r, i) => (
                        <div key={i} className="rounded border p-2 text-[11px] grid grid-cols-2 gap-x-3 gap-y-0.5">
                          {Object.entries(r).map(([k, v]) => (
                            <div key={k}><span className="text-muted-foreground">{k.replace(/_/g, " ")}:</span> {String(v)}</div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </ReviewerSection>
                <ReviewerSection title="Competency checklist">
                  {(payload.competency_checklist ?? []).length === 0 ? <Empty /> : (
                    <ul className="list-disc pl-5 text-xs space-y-1">
                      {(payload.competency_checklist ?? []).map((c, i) => (
                        <li key={i}>{c.item}{c.validation_method ? <span className="text-muted-foreground"> — {c.validation_method}</span> : null}</li>
                      ))}
                    </ul>
                  )}
                </ReviewerSection>
                <ReviewerSection title="Remediation plan">
                  {(payload.remediation_plan ?? []).length === 0 ? <Empty /> : (
                    <ol className="list-decimal pl-5 text-xs space-y-1">
                      {(payload.remediation_plan ?? []).map((s, i) => <li key={i}>{String(s)}</li>)}
                    </ol>
                  )}
                </ReviewerSection>
                <ReviewerSection title="References">
                  {(payload.references ?? []).length === 0 ? <Empty /> : (
                    <ul className="list-disc pl-5 text-xs space-y-1">
                      {(payload.references ?? []).map((s, i) => <li key={i}>{String(s)}</li>)}
                    </ul>
                  )}
                </ReviewerSection>
                <p className="text-[11px] text-muted-foreground">
                  Module code {payload.module_code || "—"} · {payload.delivery_mode || "—"} · modalities: {(payload.modality_tags ?? []).join(", ") || "—"}
                </p>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        )}

        {payload && (
          <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-2.5">
            <Checkbox id="confirm-publish" checked={confirmPublish} onCheckedChange={(c) => setConfirmPublish(c === true)} className="mt-0.5" />
            <Label htmlFor="confirm-publish" className="text-[11px] font-normal leading-relaxed text-amber-800 cursor-pointer">
              I've reviewed this content. Publishing adds it to the live module
              {payload.create_lessons ? " (creating its lessons)" : ""} — students on a published course will see it.
            </Label>
          </div>
        )}

        <DialogFooter className="gap-2 sm:gap-2">
          <Button variant="ghost" className="text-red-600" disabled={busy} onClick={handleDiscard}>Discard</Button>
          <span className="flex-1" />
          <Button variant="outline" disabled={busy || !dirty} onClick={handleSave}>
            {saving ? "Saving…" : dirty ? "Save changes" : "Saved"}
          </Button>
          <Button
            className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)] gap-2"
            disabled={busy || !payload || !confirmPublish}
            onClick={handlePublish}
          >
            {publishing && <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />}
            {publishing ? "Publishing…" : "Publish to module"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function ReviewerSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <h4 className="text-xs font-semibold text-foreground">{title}</h4>
      {children}
    </div>
  );
}

function Empty() {
  return <p className="text-[11px] text-muted-foreground italic">None generated.</p>;
}
