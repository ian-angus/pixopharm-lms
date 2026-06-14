// ============================================================================
// EnhanceDialog — runs the AI "enhance-module" Edge Function on a module.
//
// Two modes (decision D6 — destructive actions need explicit confirmation):
//   - append   (default, safe): fills only empty lessons and ADDS questions
//   - overwrite (destructive):  replaces lesson content and the whole quiz —
//     gated behind an explicit "I understand" checkbox before Run unlocks.
//
// The Edge Function takes ~2 minutes; we show a spinner while it runs and a
// result summary (lessons updated, questions added, types, case created) when
// it finishes.
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import {
  enhanceModule,
  enhanceModuleDraft,
  type EnhanceModuleResult,
  type EnhanceDraftResult,
  type Module,
  type QuestionType,
} from "@/lib/admin-api";

type EnhanceMode = "append" | "overwrite" | "draft";

const TYPE_CHOICES: { value: QuestionType; label: string }[] = [
  { value: "multiple_choice", label: "Multiple Choice" },
  { value: "true_false", label: "True / False" },
  { value: "multiple_select", label: "Select All" },
  { value: "ordering", label: "Ordering" },
  { value: "matching", label: "Matching" },
  { value: "fill_in_blank", label: "Fill in the Blank" },
  { value: "numeric", label: "Calculation" },
  { value: "scenario", label: "Case / Scenario" },
];

interface EnhanceDialogProps {
  module: Module | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Called after a successful run so the parent can refresh counts. */
  onEnhanced?: (moduleId: string, result: EnhanceModuleResult) => void;
  /** Called when an accreditation draft is ready, so the parent can open review. */
  onDraftReady?: (moduleId: string, draftId: string) => void;
}

export default function EnhanceDialog({ module, open, onOpenChange, onEnhanced, onDraftReady }: EnhanceDialogProps) {
  const { toast } = useToast();
  const [mode, setMode] = useState<EnhanceMode>("draft");
  const [overwriteConfirmed, setOverwriteConfirmed] = useState(false);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<EnhanceModuleResult | null>(null);
  const [draftResult, setDraftResult] = useState<EnhanceDraftResult | null>(null);
  // Question-type control: default = domain-aware mix; custom = explicit subset.
  const [customTypes, setCustomTypes] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<QuestionType[]>([]);

  const reset = () => {
    setMode("draft");
    setOverwriteConfirmed(false);
    setResult(null);
    setDraftResult(null);
    setCustomTypes(false);
    setSelectedTypes([]);
  };

  const toggleType = (t: QuestionType) =>
    setSelectedTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const handleOpenChange = (o: boolean) => {
    if (running) return; // don't allow closing mid-run
    if (!o) reset();
    onOpenChange(o);
  };

  const canRun =
    !running &&
    (mode !== "overwrite" || overwriteConfirmed) &&
    (!customTypes || selectedTypes.length > 0);

  const handleRun = async () => {
    if (!module || !canRun) return;
    setRunning(true);
    setResult(null);
    setDraftResult(null);
    const types = customTypes ? selectedTypes : undefined;
    try {
      if (mode === "draft") {
        const res = await enhanceModuleDraft(module.id, types);
        setDraftResult(res);
        toast({
          title: "Accreditation draft ready",
          description: `"${module.title}" — ${res.lessons_count} lessons, ${res.questions_count} questions, ${res.objectives_count} objectives. Review before publishing.`,
        });
      } else {
        const res = await enhanceModule(module.id, mode, types);
        setResult(res);
        onEnhanced?.(module.id, res);
        toast({
          title: "Module enhanced",
          description: `"${module.title}" — ${res.lessons_updated} lesson${res.lessons_updated !== 1 ? "s" : ""} updated, ${res.questions_count} questions.`,
        });
      }
    } catch (err) {
      toast({ title: "Enhancement failed", description: String(err), variant: "destructive" });
    } finally {
      setRunning(false);
    }
  };

  const openReview = () => {
    if (module && draftResult) {
      onDraftReady?.(module.id, draftResult.draft_id);
      onOpenChange(false);
      reset();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Enhance with AI ✦</DialogTitle>
          <DialogDescription>
            {module ? `"${module.title}" — generate lesson content and an interactive quiz with Opus.` : ""}
          </DialogDescription>
        </DialogHeader>

        {!result && !draftResult && (
          <div className="space-y-4">
            <RadioGroup
              value={mode}
              onValueChange={(v) => {
                setMode(v as EnhanceMode);
                setOverwriteConfirmed(false);
              }}
              disabled={running}
              className="space-y-2"
            >
              <label
                htmlFor="enhance-draft"
                className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                  mode === "draft" ? "border-[hsl(174,62%,32%)] bg-[hsl(174,45%,96%)]" : "border-border"
                }`}
              >
                <RadioGroupItem value="draft" id="enhance-draft" className="mt-0.5" />
                <span>
                  <span className="block text-sm font-semibold text-foreground">Accreditation draft ✦ <span className="font-normal text-[hsl(174,62%,32%)]">recommended</span></span>
                  <span className="block text-xs text-muted-foreground mt-0.5">
                    Generates a full accreditation-format module (overview, learning objectives, crosswalk,
                    competency checklist + quiz) to a draft you review and edit before publishing. Works on
                    empty modules. Nothing goes live until you publish.
                  </span>
                </span>
              </label>
              <label
                htmlFor="enhance-append"
                className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                  mode === "append" ? "border-[hsl(174,62%,32%)] bg-[hsl(174,45%,96%)]" : "border-border"
                }`}
              >
                <RadioGroupItem value="append" id="enhance-append" className="mt-0.5" />
                <span>
                  <span className="block text-sm font-semibold text-foreground">Append (safe)</span>
                  <span className="block text-xs text-muted-foreground mt-0.5">
                    Fills only empty lessons and adds new quiz questions. Existing content is never touched.
                  </span>
                </span>
              </label>
              <label
                htmlFor="enhance-overwrite"
                className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                  mode === "overwrite" ? "border-red-400 bg-red-50" : "border-border"
                }`}
              >
                <RadioGroupItem value="overwrite" id="enhance-overwrite" className="mt-0.5" />
                <span>
                  <span className="block text-sm font-semibold text-foreground">Overwrite (destructive)</span>
                  <span className="block text-xs text-muted-foreground mt-0.5">
                    Replaces all lesson content and deletes + regenerates the entire quiz for this module.
                  </span>
                </span>
              </label>
            </RadioGroup>

            {/* Question-type control (owner request: pick which quiz types get generated) */}
            <div className="space-y-2 rounded-lg border p-3">
              <div className="flex items-start gap-2">
                <Checkbox
                  id="custom-types"
                  checked={customTypes}
                  onCheckedChange={(c) => setCustomTypes(c === true)}
                  disabled={running}
                  className="mt-0.5"
                />
                <Label htmlFor="custom-types" className="text-xs font-normal leading-relaxed cursor-pointer">
                  <span className="font-semibold">Choose question types myself.</span>{" "}
                  Off = the recommended mix for this course's domain (e.g. calculations get numeric
                  problems, clinical courses get a patient case).
                </Label>
              </div>
              {customTypes && (
                <div className="grid grid-cols-2 gap-1.5 pl-6 pt-1">
                  {TYPE_CHOICES.map((t) => (
                    <label key={t.value} className="flex items-center gap-2 text-xs cursor-pointer">
                      <Checkbox
                        checked={selectedTypes.includes(t.value)}
                        onCheckedChange={() => toggleType(t.value)}
                        disabled={running}
                      />
                      {t.label}
                    </label>
                  ))}
                  {selectedTypes.length === 0 && (
                    <p className="col-span-2 text-[11px] text-amber-700">Select at least one type.</p>
                  )}
                </div>
              )}
            </div>

            {mode === "overwrite" && (
              <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3">
                <Checkbox
                  id="overwrite-confirm"
                  checked={overwriteConfirmed}
                  onCheckedChange={(c) => setOverwriteConfirmed(c === true)}
                  disabled={running}
                  className="mt-0.5"
                />
                <Label htmlFor="overwrite-confirm" className="text-xs leading-relaxed text-red-800 font-normal cursor-pointer">
                  I understand this permanently replaces the lesson content and quiz questions in this
                  module. This cannot be undone.
                </Label>
              </div>
            )}

            {running && (
              <div className="flex items-center gap-3 rounded-lg border bg-muted/50 p-3">
                <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-[hsl(174,62%,32%)] border-t-transparent" />
                <p className="text-xs text-muted-foreground">
                  Opus is writing content — this takes about 2 minutes. Keep this dialog open.
                </p>
              </div>
            )}
          </div>
        )}

        {result && (
          <div className="space-y-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-800">Enhancement complete</p>
            <ul className="text-xs text-emerald-900 space-y-1">
              <li>
                <b>{result.lessons_updated}</b> lesson{result.lessons_updated !== 1 ? "s" : ""} updated
                {typeof result.lessons_skipped_existing === "number" &&
                  ` (${result.lessons_skipped_existing} skipped — already had content)`}
              </li>
              <li>
                <b>{result.questions_count}</b> quiz question{result.questions_count !== 1 ? "s" : ""}
              </li>
              {result.case_created && <li>Patient case vignette created</li>}
              <li className="text-emerald-700/70">Model: {result.model_used}</li>
            </ul>
            {result.types_generated && result.types_generated.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {result.types_generated.map((t) => (
                  <Badge key={t} className="bg-emerald-100 text-emerald-800 border-emerald-200 text-[10px]">
                    {t.replace(/_/g, " ")}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        )}

        {draftResult && (
          <div className="space-y-3 rounded-lg border border-[hsl(174,45%,80%)] bg-[hsl(174,45%,96%)] p-4">
            <p className="text-sm font-semibold text-[hsl(174,62%,26%)]">Draft ready for review ✦</p>
            <ul className="text-xs text-[hsl(174,62%,22%)] space-y-1">
              <li><b>{draftResult.lessons_count}</b> lesson{draftResult.lessons_count !== 1 ? "s" : ""}{draftResult.create_lessons ? " (will be created)" : ""}, <b>{draftResult.questions_count}</b> question{draftResult.questions_count !== 1 ? "s" : ""}, <b>{draftResult.objectives_count}</b> objective{draftResult.objectives_count !== 1 ? "s" : ""}</li>
              <li className="text-[hsl(174,62%,26%)]/70">Nothing is live yet — review and edit before publishing.</li>
            </ul>
            {draftResult.types_generated && draftResult.types_generated.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {draftResult.types_generated.map((t) => (
                  <Badge key={t} className="bg-white text-[hsl(174,62%,26%)] border-[hsl(174,45%,80%)] text-[10px]">
                    {t.replace(/_/g, " ")}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        )}

        <DialogFooter>
          <Button variant="outline" disabled={running} onClick={() => handleOpenChange(false)}>
            {result || draftResult ? "Close" : "Cancel"}
          </Button>
          {draftResult && (
            <Button onClick={openReview} className="gap-2 bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">
              Review &amp; publish →
            </Button>
          )}
          {!result && !draftResult && (
            <Button
              onClick={handleRun}
              disabled={!canRun}
              className={`gap-2 ${
                mode === "overwrite"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
              }`}
            >
              {running && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              )}
              {running ? (mode === "draft" ? "Generating…" : "Enhancing…") : mode === "draft" ? "Generate draft ✦" : mode === "overwrite" ? "Overwrite & Enhance ✦" : "Enhance ✦"}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
