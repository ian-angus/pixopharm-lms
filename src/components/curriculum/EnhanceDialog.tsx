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
import { enhanceModule, type EnhanceModuleResult, type Module } from "@/lib/admin-api";

interface EnhanceDialogProps {
  module: Module | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Called after a successful run so the parent can refresh counts. */
  onEnhanced?: (moduleId: string, result: EnhanceModuleResult) => void;
}

export default function EnhanceDialog({ module, open, onOpenChange, onEnhanced }: EnhanceDialogProps) {
  const { toast } = useToast();
  const [mode, setMode] = useState<"append" | "overwrite">("append");
  const [overwriteConfirmed, setOverwriteConfirmed] = useState(false);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<EnhanceModuleResult | null>(null);

  const reset = () => {
    setMode("append");
    setOverwriteConfirmed(false);
    setResult(null);
  };

  const handleOpenChange = (o: boolean) => {
    if (running) return; // don't allow closing mid-run
    if (!o) reset();
    onOpenChange(o);
  };

  const canRun = !running && (mode === "append" || overwriteConfirmed);

  const handleRun = async () => {
    if (!module || !canRun) return;
    setRunning(true);
    setResult(null);
    try {
      const res = await enhanceModule(module.id, mode);
      setResult(res);
      onEnhanced?.(module.id, res);
      toast({
        title: "Module enhanced",
        description: `"${module.title}" — ${res.lessons_updated} lesson${res.lessons_updated !== 1 ? "s" : ""} updated, ${res.questions_count} questions.`,
      });
    } catch (err) {
      toast({ title: "Enhancement failed", description: String(err), variant: "destructive" });
    } finally {
      setRunning(false);
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

        {!result && (
          <div className="space-y-4">
            <RadioGroup
              value={mode}
              onValueChange={(v) => {
                setMode(v as "append" | "overwrite");
                setOverwriteConfirmed(false);
              }}
              disabled={running}
              className="space-y-2"
            >
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

        <DialogFooter>
          <Button variant="outline" disabled={running} onClick={() => handleOpenChange(false)}>
            {result ? "Close" : "Cancel"}
          </Button>
          {!result && (
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
              {running ? "Enhancing…" : mode === "overwrite" ? "Overwrite & Enhance ✦" : "Enhance ✦"}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
