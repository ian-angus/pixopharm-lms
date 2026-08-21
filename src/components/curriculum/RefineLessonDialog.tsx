// ============================================================================
// RefineLessonDialog — "AI, take this lesson and make it better."
//
// Flow (PRD docs/AI-CONTENT-REFINEMENT-PRD.md): instruction (+ quick chips)
// → refine-lesson stages a proposal → Current/Proposed review rendered with
// the REAL lesson block renderer → Apply (snapshots old content) → Undo.
// Reopening a pending draft (initialDraft) jumps straight to review.
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { RenderContent } from "@/components/CoursePlayer";
import type { ContentBlock } from "@/data/types";
import {
  applyLessonRevision,
  discardLessonRevision,
  fetchLessonRevision,
  refineLesson,
  revertLessonRevision,
  type Lesson,
  type LessonRevision,
} from "@/lib/admin-api";

const CHIPS: { label: string; instruction: string }[] = [
  { label: "Go deeper", instruction: "Go deeper — expand every section into full teaching paragraphs with real Caribbean drugs, doses and regulations." },
  { label: "Simplify", instruction: "Simplify the language for a beginner pharmacy technician trainee without losing clinical accuracy." },
  { label: "Island comparison table", instruction: "Add a cross-island comparison table (Jamaica, Trinidad & Tobago, Barbados, Guyana) with real data relevant to this topic." },
  { label: "Worked examples", instruction: "Add worked examples that walk through realistic Caribbean pharmacy situations step by step." },
  { label: "Key terms", instruction: "Add key-term blocks for the essential vocabulary a beginner must know first." },
  { label: "Tighten", instruction: "Tighten and shorten the lesson without losing substance — remove padding, keep every teaching point." },
  { label: "Check accuracy", instruction: "Check and correct the clinical and regulatory accuracy of every statement, fixing anything wrong or outdated." },
];

type Phase = "ask" | "running" | "review" | "applied";

interface RefineLessonDialogProps {
  lesson: Lesson | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Reopen an existing pending proposal straight into review. */
  initialDraft?: LessonRevision | null;
  /** Called after apply, undo or discard so the parent refreshes. */
  onChanged?: () => void;
}

export default function RefineLessonDialog({
  lesson,
  open,
  onOpenChange,
  initialDraft,
  onChanged,
}: RefineLessonDialogProps) {
  const { toast } = useToast();
  const [phase, setPhase] = useState<Phase>("ask");
  const [instruction, setInstruction] = useState("");
  const [draft, setDraft] = useState<LessonRevision | null>(null);
  const [shrinkWarning, setShrinkWarning] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!open) return;
    setInstruction("");
    setShrinkWarning(false);
    setBusy(false);
    if (initialDraft) {
      setDraft(initialDraft);
      setPhase("review");
    } else {
      setDraft(null);
      setPhase("ask");
    }
  }, [open, initialDraft]);

  const currentBlocks: ContentBlock[] =
    lesson && Array.isArray(lesson.content) ? (lesson.content as ContentBlock[]) : [];
  const proposedBlocks: ContentBlock[] =
    draft && Array.isArray(draft.revised_content) ? (draft.revised_content as ContentBlock[]) : [];

  const handleRun = async () => {
    if (!lesson || instruction.trim().length < 5) return;
    setPhase("running");
    try {
      const res = await refineLesson(lesson.id, instruction.trim());
      setShrinkWarning(res.shrink_warning);
      const row = await fetchLessonRevision(res.draft_id);
      if (!row) throw new Error("Proposal was staged but could not be loaded — reopen via the lesson's ✦ badge.");
      setDraft(row);
      setPhase("review");
    } catch (err) {
      toast({ title: "Refine failed", description: String(err), variant: "destructive" });
      setPhase("ask");
    }
  };

  const handleApply = async () => {
    if (!draft) return;
    setBusy(true);
    try {
      await applyLessonRevision(draft.id);
      setPhase("applied");
      onChanged?.();
      toast({ title: "Lesson updated", description: "The previous version is saved — Undo is available below." });
    } catch (err) {
      toast({ title: "Apply failed", description: String(err), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  const handleUndo = async () => {
    if (!draft) return;
    setBusy(true);
    try {
      await revertLessonRevision(draft.id);
      onChanged?.();
      toast({ title: "Reverted", description: "The lesson is back to its previous version." });
      onOpenChange(false);
    } catch (err) {
      toast({ title: "Undo failed", description: String(err), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  const handleDiscard = async () => {
    if (!draft) {
      onOpenChange(false);
      return;
    }
    setBusy(true);
    try {
      await discardLessonRevision(draft.id);
      onChanged?.();
      toast({ title: "Proposal discarded" });
      onOpenChange(false);
    } catch (err) {
      toast({ title: "Discard failed", description: String(err), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => phase !== "running" && !busy && onOpenChange(o)}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Refine with AI ✦ — {lesson?.title}</DialogTitle>
          <DialogDescription>
            {phase === "review"
              ? "Review the proposal below. Nothing changes until you Apply — and Apply can be undone."
              : "Tell the AI what to improve. It starts from the lesson's current content and proposes a revision for your review."}
          </DialogDescription>
        </DialogHeader>

        {/* ── ASK ──────────────────────────────────────────────────────────── */}
        {(phase === "ask" || phase === "running") && (
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {CHIPS.map((c) => (
                <button
                  key={c.label}
                  type="button"
                  disabled={phase === "running"}
                  onClick={() => setInstruction(c.instruction)}
                  className="rounded-full border border-[hsl(174,62%,32%)]/30 bg-[hsl(174,45%,97%)] px-2.5 py-1 text-[11px] font-medium text-[hsl(174,62%,28%)] hover:bg-[hsl(174,45%,92%)] disabled:opacity-50"
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="refine-instruction">Instruction</Label>
              <Textarea
                id="refine-instruction"
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
                disabled={phase === "running"}
                rows={3}
                placeholder='e.g. "Add a worked days-supply calculation and a warning callout about cerasee–metformin interaction"'
              />
            </div>
            {phase === "running" && (
              <div className="flex items-center gap-3 rounded-lg border bg-muted/50 p-3">
                <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-[hsl(174,62%,32%)] border-t-transparent" />
                <p className="text-xs text-muted-foreground">
                  Opus is rewriting the lesson — usually 1–2 minutes. If the connection drops the
                  proposal is still saved; reopen it from the lesson's ✦ badge.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── REVIEW ───────────────────────────────────────────────────────── */}
        {phase === "review" && draft && (
          <div className="flex-1 min-h-0 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <Badge variant="outline">{currentBlocks.length} → {proposedBlocks.length} blocks</Badge>
              {draft.revised_duration != null && <Badge variant="outline">~{draft.revised_duration} min</Badge>}
              {draft.instruction && (
                <span className="text-muted-foreground truncate max-w-[24rem]" title={draft.instruction}>
                  “{draft.instruction}”
                </span>
              )}
            </div>
            {shrinkWarning && (
              <p className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                ⚠ The proposal is much shorter than the current lesson and you didn't ask for
                shortening — review carefully before applying.
              </p>
            )}
            <Tabs defaultValue="proposed" className="flex-1 min-h-0 flex flex-col">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="current">Current</TabsTrigger>
                <TabsTrigger value="proposed">Proposed ✦</TabsTrigger>
              </TabsList>
              <ScrollArea className="flex-1 min-h-0 mt-2 rounded-md border bg-white px-4">
                <TabsContent value="current" className="py-3">
                  {currentBlocks.map((b, i) => (
                    <RenderContent key={i} block={b} />
                  ))}
                </TabsContent>
                <TabsContent value="proposed" className="py-3">
                  {proposedBlocks.map((b, i) => (
                    <RenderContent key={i} block={b} />
                  ))}
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </div>
        )}

        {/* ── APPLIED ──────────────────────────────────────────────────────── */}
        {phase === "applied" && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-800">Applied ✓</p>
            <p className="mt-1 text-xs text-emerald-900">
              The lesson now shows the refined content. The previous version is snapshotted — Undo
              restores it exactly.
            </p>
          </div>
        )}

        <DialogFooter className="gap-2 sm:gap-2">
          {phase === "review" && (
            <>
              <Button variant="ghost" className="text-red-600" disabled={busy} onClick={() => void handleDiscard()}>
                Discard
              </Button>
              <span className="flex-1" />
              <Button variant="outline" disabled={busy} onClick={() => onOpenChange(false)}>
                Close
              </Button>
              <Button
                disabled={busy}
                onClick={() => void handleApply()}
                className="gap-2 bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
              >
                {busy && <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />}
                Apply to lesson
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
          {(phase === "ask" || phase === "running") && (
            <>
              <Button variant="outline" disabled={phase === "running"} onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button
                disabled={phase === "running" || instruction.trim().length < 5}
                onClick={() => void handleRun()}
                className="gap-2 bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
              >
                {phase === "running" && (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                )}
                {phase === "running" ? "Refining…" : "Generate proposal ✦"}
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
