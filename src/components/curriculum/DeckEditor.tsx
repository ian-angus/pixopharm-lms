// ============================================================================
// DeckEditor — per-module flashcard deck management in a Sheet.
//
// Mirrors QuizEditor's shape: lists the deck (type badge, front/back preview,
// edit, delete, move up/down), a type-specific add/edit form validated to the
// same rules as the generate-flashcards edge function, and a single "✦ AI
// deck" entry point opening the review-first FlashcardRefreshDialog.
// ============================================================================

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  createFlashcard,
  deleteFlashcard,
  fetchModuleDeck,
  reorderFlashcards,
  updateFlashcard,
  type Flashcard,
  type FlashcardType,
  type Module,
} from "@/lib/admin-api";
import ConfirmDialog from "./ConfirmDialog";
import FlashcardRefreshDialog from "./FlashcardRefreshDialog";

const TYPE_LABELS: Record<FlashcardType, string> = {
  term_definition: "Term ↔ definition",
  brand_generic: "Brand ↔ generic",
  drug_stem: "Drug stem",
  cloze: "Fill the gap",
  calculation: "Calculation",
  island_compare: "Island comparison",
};

const TYPE_BADGE_COLORS: Record<FlashcardType, string> = {
  term_definition: "bg-blue-50 text-blue-700 border-blue-200",
  brand_generic: "bg-cyan-50 text-cyan-700 border-cyan-200",
  drug_stem: "bg-violet-50 text-violet-700 border-violet-200",
  cloze: "bg-amber-50 text-amber-700 border-amber-200",
  calculation: "bg-lime-50 text-lime-700 border-lime-200",
  island_compare: "bg-rose-50 text-rose-700 border-rose-200",
};

interface CardForm {
  card_type: FlashcardType;
  front: string;
  back: string;
  clozeAnswer: string;
  calcAnswer: string;
  calcTolerance: string;
  calcUnit: string;
}

function emptyForm(): CardForm {
  return {
    card_type: "term_definition",
    front: "",
    back: "",
    clozeAnswer: "",
    calcAnswer: "",
    calcTolerance: "0",
    calcUnit: "",
  };
}

function formFromCard(c: Flashcard): CardForm {
  return {
    card_type: c.card_type,
    front: c.front,
    back: c.back,
    clozeAnswer: typeof c.extra?.answer === "string" ? c.extra.answer : "",
    calcAnswer: typeof c.extra?.answer === "number" ? String(c.extra.answer) : "",
    calcTolerance: typeof c.extra?.tolerance === "number" ? String(c.extra.tolerance) : "0",
    calcUnit: typeof c.extra?.unit === "string" ? c.extra.unit : "",
  };
}

/** Same rules the edge function enforces, so hand-authored cards can't drift. */
function validateForm(f: CardForm): string | null {
  if (!f.front.trim()) return "The front (prompt) is required.";
  if (f.front.length > 300) return "The front must be 300 characters or fewer.";
  if (!f.back.trim()) return "The back (answer) is required.";
  if (f.back.length > 700) return "The back must be 700 characters or fewer.";
  if (f.card_type === "cloze") {
    if (!f.front.includes("___")) return "Fill-the-gap cards need ___ (three underscores) in the front where the blank goes.";
    if (!f.clozeAnswer.trim()) return "Enter the word/phrase that fills the blank.";
  }
  if (f.card_type === "calculation") {
    const answer = Number(f.calcAnswer);
    if (!f.calcAnswer.trim() || !Number.isFinite(answer)) return "The calculation answer must be a number.";
    const tol = Number(f.calcTolerance || "0");
    if (!Number.isFinite(tol) || tol < 0) return "Tolerance must be 0 or more.";
    if (!f.calcUnit.trim()) return "Calculation cards need a unit (e.g. mg/mL).";
  }
  return null;
}

function buildExtra(f: CardForm): Record<string, unknown> {
  if (f.card_type === "cloze") return { answer: f.clozeAnswer.trim() };
  if (f.card_type === "calculation") {
    return { answer: Number(f.calcAnswer), tolerance: Number(f.calcTolerance || "0"), unit: f.calcUnit.trim() };
  }
  return {};
}

interface DeckEditorProps {
  module: Module | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Notifies the parent when the card count changes (for card badges). */
  onDeckChanged?: (moduleId: string, cardCount: number) => void;
}

export default function DeckEditor({ module, open, onOpenChange, onDeckChanged }: DeckEditorProps) {
  const { toast } = useToast();
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const [formOpen, setFormOpen] = useState(false);
  const [editingCard, setEditingCard] = useState<Flashcard | null>(null);
  const [form, setForm] = useState<CardForm>(emptyForm());
  const [formError, setFormError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Flashcard | null>(null);

  const moduleId = module?.id ?? null;

  const reloadSeq = useRef(0);
  const reload = useCallback(async () => {
    if (!moduleId) return;
    const seq = ++reloadSeq.current;
    setLoading(true);
    try {
      const deck = await fetchModuleDeck(moduleId);
      if (seq !== reloadSeq.current) return;
      setCards(deck);
      onDeckChanged?.(moduleId, deck.length);
    } catch (err) {
      if (seq !== reloadSeq.current) return;
      toast({ title: "Error loading deck", description: String(err), variant: "destructive" });
    } finally {
      if (seq === reloadSeq.current) setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId]);

  useEffect(() => {
    if (open && moduleId) void reload();
  }, [open, moduleId, reload]);

  const openNewCard = () => {
    setEditingCard(null);
    setForm(emptyForm());
    setFormError(null);
    setFormOpen(true);
  };
  const openEditCard = (c: Flashcard) => {
    setEditingCard(c);
    setForm(formFromCard(c));
    setFormError(null);
    setFormOpen(true);
  };

  const handleSave = async () => {
    if (!moduleId) return;
    const err = validateForm(form);
    if (err) {
      setFormError(err);
      return;
    }
    setSaving(true);
    try {
      const payload = {
        card_type: form.card_type,
        front: form.front.trim(),
        back: form.back.trim(),
        extra: buildExtra(form),
      };
      if (editingCard) {
        await updateFlashcard(editingCard.id, payload);
        toast({ title: "Card updated" });
      } else {
        const maxPos = cards.reduce((m, c) => Math.max(m, c.position), 0);
        await createFlashcard(moduleId, { ...payload, position: maxPos + 1 });
        toast({ title: "Card added" });
      }
      setFormOpen(false);
      await reload();
    } catch (e) {
      toast({ title: "Error saving card", description: String(e), variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteFlashcard(deleteTarget.id);
      toast({ title: "Card deleted" });
      setDeleteTarget(null);
      await reload();
    } catch (e) {
      toast({ title: "Error deleting card", description: String(e), variant: "destructive" });
    }
  };

  const move = async (index: number, dir: -1 | 1) => {
    const target = index + dir;
    if (target < 0 || target >= cards.length) return;
    const next = [...cards];
    [next[index], next[target]] = [next[target], next[index]];
    setCards(next); // optimistic
    try {
      await reorderFlashcards(next.map((c) => c.id));
    } catch (e) {
      toast({ title: "Reorder failed", description: String(e), variant: "destructive" });
      await reload();
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Deck — {module?.title}</SheetTitle>
          <SheetDescription>
            {cards.length} card{cards.length !== 1 ? "s" : ""} · studied with spaced repetition (Leitner boxes)
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h3 className="text-sm font-semibold text-foreground">Cards</h3>
            <div className="flex gap-2 flex-wrap">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setAiOpen(true)}
                title="Generate or refresh the deck with AI — you review the proposal before anything goes live"
                className="border-amber-500/40 text-amber-700 hover:bg-amber-50"
              >
                ✦ AI deck
              </Button>
              <Button size="sm" onClick={openNewCard} className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">
                + Add card
              </Button>
            </div>
          </div>

          {loading ? (
            <p className="text-xs text-muted-foreground">Loading deck…</p>
          ) : cards.length === 0 ? (
            <p className="text-xs text-muted-foreground italic">
              No cards yet. Use ✦ AI deck to propose one from this module's lessons, or add cards by hand.
            </p>
          ) : (
            <div className="space-y-2">
              {cards.map((c, i) => (
                <div key={c.id} className="rounded-lg border bg-white p-3">
                  <div className="flex items-start gap-2">
                    <div className="flex flex-col gap-0.5 shrink-0">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-5 w-5 p-0 text-muted-foreground"
                        aria-label="Move card up"
                        disabled={i === 0}
                        onClick={() => void move(i, -1)}
                      >
                        ↑
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-5 w-5 p-0 text-muted-foreground"
                        aria-label="Move card down"
                        disabled={i === cards.length - 1}
                        onClick={() => void move(i, 1)}
                      >
                        ↓
                      </Button>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <Badge className={`${TYPE_BADGE_COLORS[c.card_type]} border text-[10px]`}>
                          {TYPE_LABELS[c.card_type]}
                        </Badge>
                        {c.source?.lesson_title && (
                          <span className="text-[10px] text-muted-foreground">from: {c.source.lesson_title}</span>
                        )}
                      </div>
                      <p className="mt-1 text-sm font-medium text-foreground">{c.front}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">{c.back}</p>
                    </div>
                    <div className="flex items-center gap-0.5 shrink-0">
                      <Button size="sm" variant="ghost" className="h-7 text-xs" onClick={() => openEditCard(c)}>
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-7 text-xs text-red-600"
                        onClick={() => setDeleteTarget(c)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Card form ─────────────────────────────────────────────────────── */}
        <Dialog open={formOpen} onOpenChange={(o) => !saving && setFormOpen(o)}>
          <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingCard ? "Edit card" : "New card"}</DialogTitle>
              <DialogDescription>
                Front is the prompt students recall from; back is the full answer.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label>Card type</Label>
                <Select
                  value={form.card_type}
                  onValueChange={(v) => setForm((f) => ({ ...f, card_type: v as FlashcardType }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {(Object.keys(TYPE_LABELS) as FlashcardType[]).map((t) => (
                      <SelectItem key={t} value={t}>
                        {TYPE_LABELS[t]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="card-front">Front</Label>
                <Textarea
                  id="card-front"
                  value={form.front}
                  onChange={(e) => setForm((f) => ({ ...f, front: e.target.value }))}
                  rows={2}
                  placeholder={form.card_type === "cloze" ? "Sentence with ___ where the blank goes" : "e.g. -olol"}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="card-back">Back</Label>
                <Textarea
                  id="card-back"
                  value={form.back}
                  onChange={(e) => setForm((f) => ({ ...f, back: e.target.value }))}
                  rows={3}
                  placeholder="The full answer, plus the clinical or regulatory why."
                />
              </div>
              {form.card_type === "cloze" && (
                <div className="space-y-1.5">
                  <Label htmlFor="card-cloze">Word/phrase that fills the blank</Label>
                  <Input
                    id="card-cloze"
                    value={form.clozeAnswer}
                    onChange={(e) => setForm((f) => ({ ...f, clozeAnswer: e.target.value }))}
                  />
                </div>
              )}
              {form.card_type === "calculation" && (
                <div className="grid grid-cols-3 gap-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="card-answer">Answer</Label>
                    <Input
                      id="card-answer"
                      type="number"
                      value={form.calcAnswer}
                      onChange={(e) => setForm((f) => ({ ...f, calcAnswer: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="card-tol">± Tolerance</Label>
                    <Input
                      id="card-tol"
                      type="number"
                      min={0}
                      value={form.calcTolerance}
                      onChange={(e) => setForm((f) => ({ ...f, calcTolerance: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="card-unit">Unit</Label>
                    <Input
                      id="card-unit"
                      value={form.calcUnit}
                      onChange={(e) => setForm((f) => ({ ...f, calcUnit: e.target.value }))}
                      placeholder="mg/mL"
                    />
                  </div>
                </div>
              )}
              {formError && <p className="text-xs text-red-600">{formError}</p>}
            </div>
            <DialogFooter>
              <Button variant="outline" disabled={saving} onClick={() => setFormOpen(false)}>
                Cancel
              </Button>
              <Button
                disabled={saving}
                onClick={() => void handleSave()}
                className="gap-2 bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
              >
                {saving && <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />}
                {editingCard ? "Save changes" : "Add card"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <ConfirmDialog
          open={!!deleteTarget}
          onOpenChange={(o) => !o && setDeleteTarget(null)}
          title="Delete card?"
          description={`"${deleteTarget?.front?.slice(0, 60) ?? ""}" — students' study history for this card is removed too.`}
          confirmLabel="Delete card"
          onConfirm={() => void handleDelete()}
        />

        <FlashcardRefreshDialog
          module={module}
          open={aiOpen}
          onOpenChange={setAiOpen}
          existingCards={cards}
          onApplied={() => void reload()}
        />
      </SheetContent>
    </Sheet>
  );
}
