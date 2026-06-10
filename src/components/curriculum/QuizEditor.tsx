// ============================================================================
// QuizEditor — per-module quiz management in a Sheet.
//
// Lists the module's questions (type / difficulty badges, preview, edit,
// delete), manages shared case vignettes (quiz_cases), and provides an
// add/edit form whose type-specific sub-forms produce EXACTLY the
// question_data shapes that CoursePlayer's QuizView consumes:
//
//   multiple_choice / scenario : options[4] + correct_answer index
//                                (scenario may add question_data.context and
//                                a case_id link to a quiz_cases vignette)
//   multiple_select            : options[4-6] + question_data.correct_indices
//   ordering                   : options stored IN CORRECT ORDER +
//                                question_data.correct_order = identity
//                                permutation [0..n-1]. This is correct because
//                                QuizView shuffles the displayed items itself
//                                at runtime (Fisher-Yates in initOrderItems),
//                                so the student never sees the stored order.
//   matching                   : question_data.pairs [{left, right}] where
//                                left[i] matches right[i] (player shuffles
//                                the right column for display)
//   fill_in_blank              : question text must contain ___ +
//                                question_data.acceptable_answers +
//                                question_data.case_sensitive
//   true_false                 : question_data.correct_answer (boolean)
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
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import {
  createQuizCase,
  createQuizQuestion,
  deleteQuizCase,
  deleteQuizQuestion,
  fetchQuizCases,
  updateQuizCase,
  updateQuizQuestion,
  type Module,
  type QuestionType,
  type QuizCase,
  type QuizQuestion,
} from "@/lib/admin-api";
import ConfirmDialog from "./ConfirmDialog";

// ── Local fetch helper (admin-api has no fetchQuizQuestions(moduleId)) ───────

async function fetchQuizQuestions(moduleId: string): Promise<QuizQuestion[]> {
  const { data, error } = await supabase
    .from("quiz_questions")
    .select("*")
    .eq("module_id", moduleId)
    .order("order_index", { ascending: true });
  if (error) throw new Error(`fetchQuizQuestions: ${error.message}`);
  return (data ?? []) as QuizQuestion[];
}

// ── Constants ────────────────────────────────────────────────────────────────

const TYPE_LABELS: Record<QuestionType, string> = {
  multiple_choice: "Multiple Choice",
  multiple_select: "Select All",
  ordering: "Ordering",
  matching: "Matching",
  fill_in_blank: "Fill in the Blank",
  true_false: "True / False",
  scenario: "Scenario",
};

const TYPE_BADGE_COLORS: Record<QuestionType, string> = {
  multiple_choice: "bg-blue-50 text-blue-700 border-blue-200",
  multiple_select: "bg-cyan-50 text-cyan-700 border-cyan-200",
  ordering: "bg-violet-50 text-violet-700 border-violet-200",
  matching: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
  fill_in_blank: "bg-amber-50 text-amber-700 border-amber-200",
  true_false: "bg-teal-50 text-teal-700 border-teal-200",
  scenario: "bg-rose-50 text-rose-700 border-rose-200",
};

const DIFFICULTY_BADGE_COLORS: Record<string, string> = {
  easy: "bg-emerald-50 text-emerald-700 border-emerald-200",
  medium: "bg-blue-50 text-blue-700 border-blue-200",
  hard: "bg-amber-50 text-amber-700 border-amber-200",
  expert: "bg-red-50 text-red-700 border-red-200",
};

const DIFFICULTIES = ["easy", "medium", "hard", "expert"] as const;
const BLOOMS = ["remember", "understand", "apply", "analyze", "evaluate", "create"] as const;

// ── Question form state ──────────────────────────────────────────────────────

interface QuestionForm {
  question: string;
  question_type: QuestionType;
  options: string[]; // MCQ/scenario (4), multiple_select (4-6), ordering items (3-6, in correct order)
  correctIndex: number; // MCQ/scenario
  correctIndices: number[]; // multiple_select
  pairs: { left: string; right: string }[]; // matching (3-6)
  acceptableAnswers: string; // fill_in_blank — one per line
  caseSensitive: boolean; // fill_in_blank
  boolAnswer: boolean; // true_false
  context: string; // scenario inline context (optional)
  caseId: string; // scenario case link ("none" = unlinked)
  explanation: string;
  difficulty: (typeof DIFFICULTIES)[number];
  blooms: (typeof BLOOMS)[number];
}

function emptyForm(): QuestionForm {
  return {
    question: "",
    question_type: "multiple_choice",
    options: ["", "", "", ""],
    correctIndex: 0,
    correctIndices: [],
    pairs: [
      { left: "", right: "" },
      { left: "", right: "" },
      { left: "", right: "" },
    ],
    acceptableAnswers: "",
    caseSensitive: false,
    boolAnswer: true,
    context: "",
    caseId: "none",
    explanation: "",
    difficulty: "medium",
    blooms: "understand",
  };
}

function formFromQuestion(q: QuizQuestion): QuestionForm {
  const type = q.question_type ?? "multiple_choice";
  const f = emptyForm();
  f.question = q.question;
  f.question_type = type;
  f.explanation = q.explanation ?? "";
  f.difficulty = (q.difficulty as QuestionForm["difficulty"]) ?? "medium";
  f.blooms = (q.blooms_level as QuestionForm["blooms"]) ?? "understand";
  f.caseId = q.case_id ?? "none";
  f.context = q.question_data?.context ?? "";

  switch (type) {
    case "multiple_choice":
    case "scenario":
      f.options = [...(q.options ?? [])];
      while (f.options.length < 4) f.options.push("");
      f.correctIndex = q.correct_answer ?? 0;
      break;
    case "multiple_select":
      f.options = q.options?.length ? [...q.options] : ["", "", "", ""];
      f.correctIndices = [...(q.question_data?.correct_indices ?? [])];
      break;
    case "ordering": {
      // Re-derive the correct order from the stored permutation so the admin
      // always edits items in correct order.
      const opts = q.options ?? [];
      const perm = q.question_data?.correct_order ?? opts.map((_, i) => i);
      f.options = perm.map((idx) => opts[idx] ?? "");
      break;
    }
    case "matching":
      f.pairs = (q.question_data?.pairs ?? []).map((p) => ({ ...p }));
      while (f.pairs.length < 3) f.pairs.push({ left: "", right: "" });
      break;
    case "fill_in_blank":
      f.acceptableAnswers = (q.question_data?.acceptable_answers ?? []).join("\n");
      f.caseSensitive = q.question_data?.case_sensitive ?? false;
      break;
    case "true_false":
      f.boolAnswer = q.question_data?.correct_answer ?? true;
      break;
  }
  return f;
}

function validateForm(f: QuestionForm): string | null {
  if (!f.question.trim()) return "Question text is required.";
  if (!f.explanation.trim()) return "An explanation is required — students see it after answering.";

  switch (f.question_type) {
    case "multiple_choice":
    case "scenario": {
      const opts = f.options.slice(0, 4).map((o) => o.trim());
      if (opts.length !== 4 || opts.some((o) => !o)) return "All 4 answer options are required.";
      if (f.correctIndex < 0 || f.correctIndex > 3) return "Pick the correct answer.";
      return null;
    }
    case "multiple_select": {
      const opts = f.options.map((o) => o.trim());
      if (opts.some((o) => !o)) return "Every option needs text (remove empty ones).";
      if (opts.length < 4 || opts.length > 6) return "Select-all questions need 4–6 options.";
      const valid = f.correctIndices.filter((i) => i >= 0 && i < opts.length);
      if (valid.length < 1) return "Tick at least one correct option.";
      if (valid.length === opts.length) return "At least one option must be incorrect.";
      return null;
    }
    case "ordering": {
      const items = f.options.map((o) => o.trim());
      if (items.some((i) => !i)) return "Every step needs text (remove empty ones).";
      if (items.length < 3 || items.length > 6) return "Ordering questions need 3–6 items.";
      return null;
    }
    case "matching": {
      if (f.pairs.length < 3 || f.pairs.length > 6) return "Matching questions need 3–6 pairs.";
      if (f.pairs.some((p) => !p.left.trim() || !p.right.trim()))
        return "Every pair needs both a left and a right value.";
      return null;
    }
    case "fill_in_blank": {
      if (!f.question.includes("___"))
        return "Fill-in-the-blank questions must contain ___ (three underscores) where the blank goes.";
      const answers = f.acceptableAnswers
        .split("\n")
        .map((a) => a.trim())
        .filter(Boolean);
      if (answers.length === 0) return "Add at least one acceptable answer.";
      return null;
    }
    case "true_false":
      return null;
  }
}

/** Build the persisted payload for create/update from the validated form. */
function buildPayload(f: QuestionForm): Partial<Omit<QuizQuestion, "id" | "module_id" | "created_at">> {
  const base = {
    question: f.question.trim(),
    explanation: f.explanation.trim(),
    question_type: f.question_type,
    difficulty: f.difficulty,
    blooms_level: f.blooms,
    // Explicitly null for non-scenario types so editing a scenario question
    // into another type clears its stale case link.
    case_id: f.question_type === "scenario" && f.caseId !== "none" ? f.caseId : null,
  };

  switch (f.question_type) {
    case "multiple_choice":
      return {
        ...base,
        options: f.options.slice(0, 4).map((o) => o.trim()),
        correct_answer: f.correctIndex,
        question_data: {},
      };
    case "scenario":
      return {
        ...base,
        options: f.options.slice(0, 4).map((o) => o.trim()),
        correct_answer: f.correctIndex,
        question_data: f.context.trim() ? { context: f.context.trim() } : {},
      };
    case "multiple_select": {
      const opts = f.options.map((o) => o.trim());
      const indices = [...new Set(f.correctIndices)].filter((i) => i >= 0 && i < opts.length).sort((a, b) => a - b);
      return {
        ...base,
        options: opts,
        correct_answer: indices[0] ?? 0,
        question_data: { correct_indices: indices },
      };
    }
    case "ordering": {
      // Items are authored in CORRECT order; the player shuffles display order
      // at runtime, so the identity permutation is the correct correct_order.
      const items = f.options.map((o) => o.trim());
      return {
        ...base,
        options: items,
        correct_answer: 0,
        question_data: { correct_order: items.map((_, i) => i) },
      };
    }
    case "matching":
      return {
        ...base,
        options: [],
        correct_answer: 0,
        question_data: {
          pairs: f.pairs.map((p) => ({ left: p.left.trim(), right: p.right.trim() })),
        },
      };
    case "fill_in_blank":
      return {
        ...base,
        options: [],
        correct_answer: 0,
        question_data: {
          acceptable_answers: f.acceptableAnswers
            .split("\n")
            .map((a) => a.trim())
            .filter(Boolean),
          case_sensitive: f.caseSensitive,
        },
      };
    case "true_false":
      return {
        ...base,
        options: [],
        correct_answer: 0,
        question_data: { correct_answer: f.boolAnswer },
      };
  }
}

// ============================================================================
// Component
// ============================================================================

interface QuizEditorProps {
  module: Module | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Notifies the parent when the question count changes (for card badges). */
  onQuizChanged?: (moduleId: string, questionCount: number) => void;
}

export default function QuizEditor({ module, open, onOpenChange, onQuizChanged }: QuizEditorProps) {
  const { toast } = useToast();
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [cases, setCases] = useState<QuizCase[]>([]);
  const [loading, setLoading] = useState(false);

  // Question form dialog
  const [formOpen, setFormOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<QuizQuestion | null>(null);
  const [form, setForm] = useState<QuestionForm>(emptyForm());
  const [formError, setFormError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // Case form dialog
  const [caseFormOpen, setCaseFormOpen] = useState(false);
  const [editingCase, setEditingCase] = useState<QuizCase | null>(null);
  const [caseTitle, setCaseTitle] = useState("");
  const [caseVignette, setCaseVignette] = useState("");
  const [caseSaving, setCaseSaving] = useState(false);

  // Delete confirms
  const [deleteQuestion, setDeleteQuestion] = useState<QuizQuestion | null>(null);
  const [deleteCase, setDeleteCase] = useState<QuizCase | null>(null);

  const moduleId = module?.id ?? null;

  const reloadSeq = useRef(0);
  const reload = useCallback(async () => {
    if (!moduleId) return;
    // Token guard: a stale response (e.g. after rapidly switching modules)
    // must not overwrite the latest module's data.
    const seq = ++reloadSeq.current;
    setLoading(true);
    try {
      const [qs, cs] = await Promise.all([fetchQuizQuestions(moduleId), fetchQuizCases(moduleId)]);
      if (seq !== reloadSeq.current) return;
      setQuestions(qs);
      setCases(cs);
      onQuizChanged?.(moduleId, qs.length);
    } catch (err) {
      if (seq !== reloadSeq.current) return;
      toast({ title: "Error loading quiz", description: String(err), variant: "destructive" });
    } finally {
      if (seq === reloadSeq.current) setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId]);

  useEffect(() => {
    if (open && moduleId) {
      void reload();
    }
  }, [open, moduleId, reload]);

  // ── Question form handlers ─────────────────────────────────────────────────

  const openNewQuestion = () => {
    setEditingQuestion(null);
    setForm(emptyForm());
    setFormError(null);
    setFormOpen(true);
  };

  const openEditQuestion = (q: QuizQuestion) => {
    setEditingQuestion(q);
    setForm(formFromQuestion(q));
    setFormError(null);
    setFormOpen(true);
  };

  const changeType = (type: QuestionType) => {
    // Reset type-specific fields while keeping shared ones (question, explanation, …)
    const next = emptyForm();
    setForm((prev) => ({
      ...next,
      question: prev.question,
      explanation: prev.explanation,
      difficulty: prev.difficulty,
      blooms: prev.blooms,
      question_type: type,
      options:
        type === "ordering"
          ? ["", "", ""]
          : ["", "", "", ""],
    }));
    setFormError(null);
  };

  const saveQuestion = async () => {
    if (!moduleId) return;
    const error = validateForm(form);
    if (error) {
      setFormError(error);
      return;
    }
    setSaving(true);
    try {
      const payload = buildPayload(form);
      if (editingQuestion) {
        await updateQuizQuestion(editingQuestion.id, payload);
      } else {
        const created = await createQuizQuestion(moduleId, {
          ...payload,
          order_index: questions.length + 1,
        });
        // createQuizQuestion does not persist case_id — set it in a follow-up.
        if (payload.case_id) {
          await updateQuizQuestion(created.id, { case_id: payload.case_id });
        }
      }
      setFormOpen(false);
      toast({ title: editingQuestion ? "Question updated" : "Question added" });
      await reload();
    } catch (err) {
      toast({ title: "Error saving question", description: String(err), variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const confirmDeleteQuestion = async () => {
    if (!deleteQuestion) return;
    try {
      await deleteQuizQuestion(deleteQuestion.id);
      toast({ title: "Question deleted" });
      await reload();
    } catch (err) {
      toast({ title: "Error deleting question", description: String(err), variant: "destructive" });
    }
  };

  // ── Case handlers ──────────────────────────────────────────────────────────

  const openNewCase = () => {
    setEditingCase(null);
    setCaseTitle("");
    setCaseVignette("");
    setCaseFormOpen(true);
  };

  const openEditCase = (c: QuizCase) => {
    setEditingCase(c);
    setCaseTitle(c.title ?? "");
    setCaseVignette(c.vignette);
    setCaseFormOpen(true);
  };

  const saveCase = async () => {
    if (!moduleId || !caseVignette.trim()) return;
    setCaseSaving(true);
    try {
      if (editingCase) {
        await updateQuizCase(editingCase.id, { title: caseTitle.trim() || null, vignette: caseVignette.trim() } as Partial<
          Pick<QuizCase, "title" | "vignette" | "order_index">
        >);
      } else {
        await createQuizCase(moduleId, {
          title: caseTitle.trim() || "Case study",
          vignette: caseVignette.trim(),
          order_index: cases.length + 1,
        });
      }
      setCaseFormOpen(false);
      toast({ title: editingCase ? "Case updated" : "Case created" });
      await reload();
    } catch (err) {
      toast({ title: "Error saving case", description: String(err), variant: "destructive" });
    } finally {
      setCaseSaving(false);
    }
  };

  const confirmDeleteCase = async () => {
    if (!deleteCase) return;
    try {
      await deleteQuizCase(deleteCase.id);
      toast({ title: "Case deleted", description: "Linked questions remain but are no longer attached to it." });
      await reload();
    } catch (err) {
      toast({ title: "Error deleting case", description: String(err), variant: "destructive" });
    }
  };

  // ── Render helpers ─────────────────────────────────────────────────────────

  const setOption = (i: number, value: string) =>
    setForm((f) => ({ ...f, options: f.options.map((o, idx) => (idx === i ? value : o)) }));

  const addOption = () => setForm((f) => ({ ...f, options: [...f.options, ""] }));

  const removeOption = (i: number) =>
    setForm((f) => ({
      ...f,
      options: f.options.filter((_, idx) => idx !== i),
      correctIndices: f.correctIndices.filter((c) => c !== i).map((c) => (c > i ? c - 1 : c)),
    }));

  const setPair = (i: number, side: "left" | "right", value: string) =>
    setForm((f) => ({
      ...f,
      pairs: f.pairs.map((p, idx) => (idx === i ? { ...p, [side]: value } : p)),
    }));

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Quiz — {module?.title}</SheetTitle>
            <SheetDescription>
              {questions.length} question{questions.length !== 1 ? "s" : ""} · {cases.length} case
              {cases.length !== 1 ? "s" : ""}
            </SheetDescription>
          </SheetHeader>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <span className="h-6 w-6 animate-spin rounded-full border-2 border-[hsl(174,62%,32%)] border-t-transparent" />
            </div>
          ) : (
            <div className="mt-5 space-y-6">
              {/* ── Case vignettes ──────────────────────────────────────────── */}
              <section>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-foreground">Case vignettes</h3>
                  <Button size="sm" variant="outline" onClick={openNewCase}>
                    + Add case
                  </Button>
                </div>
                {cases.length === 0 ? (
                  <p className="text-xs text-muted-foreground italic">
                    No cases yet. Cases are shared patient vignettes that scenario questions can reference.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {cases.map((c) => (
                      <div key={c.id} className="rounded-lg border bg-muted/30 p-3 flex items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">{c.title || "Case study"}</p>
                          <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{c.vignette}</p>
                        </div>
                        <div className="flex gap-1 shrink-0">
                          <Button size="sm" variant="ghost" className="h-7 px-2" onClick={() => openEditCase(c)}>
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 px-2 text-red-600 hover:text-red-700"
                            onClick={() => setDeleteCase(c)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              <Separator />

              {/* ── Questions ───────────────────────────────────────────────── */}
              <section>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-foreground">Questions</h3>
                  <Button
                    size="sm"
                    onClick={openNewQuestion}
                    className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
                  >
                    + Add question
                  </Button>
                </div>
                {questions.length === 0 ? (
                  <p className="text-xs text-muted-foreground italic">No questions yet.</p>
                ) : (
                  <div className="space-y-2">
                    {questions.map((q, i) => {
                      const type = q.question_type ?? "multiple_choice";
                      return (
                        <div key={q.id} className="rounded-lg border bg-white p-3">
                          <div className="flex items-start gap-2">
                            <span className="text-xs font-bold text-muted-foreground tabular-nums mt-0.5 w-5 shrink-0">
                              {i + 1}.
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-foreground line-clamp-2">{q.question || <em>(no text)</em>}</p>
                              <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                                <Badge className={`text-[10px] border ${TYPE_BADGE_COLORS[type]}`}>
                                  {TYPE_LABELS[type]}
                                </Badge>
                                {q.difficulty && (
                                  <Badge className={`text-[10px] border ${DIFFICULTY_BADGE_COLORS[q.difficulty]}`}>
                                    {q.difficulty}
                                  </Badge>
                                )}
                                {q.case_id && (
                                  <Badge className="text-[10px] border bg-rose-50 text-rose-700 border-rose-200">
                                    📋 {cases.find((c) => c.id === q.case_id)?.title ?? "Case"}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="flex gap-1 shrink-0">
                              <Button size="sm" variant="ghost" className="h-7 px-2" onClick={() => openEditQuestion(q)}>
                                Edit
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-7 px-2 text-red-600 hover:text-red-700"
                                onClick={() => setDeleteQuestion(q)}
                              >
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* ── Question add/edit dialog ─────────────────────────────────────────── */}
      <Dialog open={formOpen} onOpenChange={(o) => !saving && setFormOpen(o)}>
        <DialogContent className="sm:max-w-2xl max-h-[88vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingQuestion ? "Edit question" : "New question"}</DialogTitle>
            <DialogDescription>{module?.title}</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Type / difficulty / blooms */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs">Question type</Label>
                <Select value={form.question_type} onValueChange={(v) => changeType(v as QuestionType)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {(Object.keys(TYPE_LABELS) as QuestionType[]).map((t) => (
                      <SelectItem key={t} value={t}>
                        {TYPE_LABELS[t]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Difficulty</Label>
                <Select
                  value={form.difficulty}
                  onValueChange={(v) => setForm((f) => ({ ...f, difficulty: v as QuestionForm["difficulty"] }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {DIFFICULTIES.map((d) => (
                      <SelectItem key={d} value={d}>
                        {d.charAt(0).toUpperCase() + d.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Bloom's level</Label>
                <Select
                  value={form.blooms}
                  onValueChange={(v) => setForm((f) => ({ ...f, blooms: v as QuestionForm["blooms"] }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {BLOOMS.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b.charAt(0).toUpperCase() + b.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Question text */}
            <div className="space-y-1.5">
              <Label className="text-xs">
                Question text
                {form.question_type === "fill_in_blank" && (
                  <span className="text-muted-foreground font-normal"> — use ___ for the blank</span>
                )}
              </Label>
              <Textarea
                value={form.question}
                onChange={(e) => setForm((f) => ({ ...f, question: e.target.value }))}
                rows={2}
                placeholder={
                  form.question_type === "fill_in_blank"
                    ? "The maximum daily dose of paracetamol for an adult is ___ grams."
                    : "Type the question students will see…"
                }
              />
            </div>

            {/* ── Type-specific sub-forms ─────────────────────────────────── */}
            {(form.question_type === "multiple_choice" || form.question_type === "scenario") && (
              <div className="space-y-1.5">
                <Label className="text-xs">Options — select the correct answer</Label>
                <RadioGroup
                  value={String(form.correctIndex)}
                  onValueChange={(v) => setForm((f) => ({ ...f, correctIndex: Number(v) }))}
                  className="space-y-2"
                >
                  {form.options.slice(0, 4).map((opt, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <RadioGroupItem value={String(i)} id={`opt-correct-${i}`} />
                      <Input
                        value={opt}
                        onChange={(e) => setOption(i, e.target.value)}
                        placeholder={`Option ${String.fromCharCode(65 + i)}`}
                      />
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {form.question_type === "scenario" && (
              <>
                <div className="space-y-1.5">
                  <Label className="text-xs">Linked case vignette</Label>
                  <Select value={form.caseId} onValueChange={(v) => setForm((f) => ({ ...f, caseId: v }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="No case" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No linked case</SelectItem>
                      {cases.map((c) => (
                        <SelectItem key={c.id} value={c.id}>
                          {c.title || "Case study"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {cases.length === 0 && (
                    <p className="text-[11px] text-muted-foreground">
                      No cases exist yet — add one from the quiz panel to share a vignette across questions.
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">
                    Inline scenario context <span className="text-muted-foreground font-normal">(optional)</span>
                  </Label>
                  <Textarea
                    value={form.context}
                    onChange={(e) => setForm((f) => ({ ...f, context: e.target.value }))}
                    rows={2}
                    placeholder="Short case context shown above the question…"
                  />
                </div>
              </>
            )}

            {form.question_type === "multiple_select" && (
              <div className="space-y-1.5">
                <Label className="text-xs">Options (4–6) — tick every correct answer</Label>
                <div className="space-y-2">
                  {form.options.map((opt, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Checkbox
                        checked={form.correctIndices.includes(i)}
                        onCheckedChange={(checked) =>
                          setForm((f) => ({
                            ...f,
                            correctIndices:
                              checked === true
                                ? [...f.correctIndices, i]
                                : f.correctIndices.filter((c) => c !== i),
                          }))
                        }
                      />
                      <Input
                        value={opt}
                        onChange={(e) => setOption(i, e.target.value)}
                        placeholder={`Option ${String.fromCharCode(65 + i)}`}
                      />
                      {form.options.length > 4 && (
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-red-600" onClick={() => removeOption(i)}>
                          ✕
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                {form.options.length < 6 && (
                  <Button variant="outline" size="sm" onClick={addOption}>
                    + Add option
                  </Button>
                )}
              </div>
            )}

            {form.question_type === "ordering" && (
              <div className="space-y-1.5">
                <Label className="text-xs">
                  Steps in the CORRECT order (3–6) — students see them shuffled
                </Label>
                <div className="space-y-2">
                  {form.options.map((opt, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-6 text-xs font-bold text-muted-foreground tabular-nums text-right shrink-0">
                        {i + 1}.
                      </span>
                      <Input value={opt} onChange={(e) => setOption(i, e.target.value)} placeholder={`Step ${i + 1}`} />
                      {form.options.length > 3 && (
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-red-600" onClick={() => removeOption(i)}>
                          ✕
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                {form.options.length < 6 && (
                  <Button variant="outline" size="sm" onClick={addOption}>
                    + Add step
                  </Button>
                )}
              </div>
            )}

            {form.question_type === "matching" && (
              <div className="space-y-1.5">
                <Label className="text-xs">Pairs (3–6) — each left item matches its right item</Label>
                <div className="space-y-2">
                  {form.pairs.map((pair, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Input
                        value={pair.left}
                        onChange={(e) => setPair(i, "left", e.target.value)}
                        placeholder={`Left ${i + 1}`}
                      />
                      <span className="text-muted-foreground text-xs shrink-0">↔</span>
                      <Input
                        value={pair.right}
                        onChange={(e) => setPair(i, "right", e.target.value)}
                        placeholder={`Right ${i + 1}`}
                      />
                      {form.pairs.length > 3 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 text-red-600"
                          onClick={() => setForm((f) => ({ ...f, pairs: f.pairs.filter((_, idx) => idx !== i) }))}
                        >
                          ✕
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                {form.pairs.length < 6 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setForm((f) => ({ ...f, pairs: [...f.pairs, { left: "", right: "" }] }))}
                  >
                    + Add pair
                  </Button>
                )}
              </div>
            )}

            {form.question_type === "fill_in_blank" && (
              <>
                <div className="space-y-1.5">
                  <Label className="text-xs">Acceptable answers — one per line</Label>
                  <Textarea
                    value={form.acceptableAnswers}
                    onChange={(e) => setForm((f) => ({ ...f, acceptableAnswers: e.target.value }))}
                    rows={3}
                    placeholder={"4\nfour\n4 g"}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    id="case-sensitive"
                    checked={form.caseSensitive}
                    onCheckedChange={(c) => setForm((f) => ({ ...f, caseSensitive: c }))}
                  />
                  <Label htmlFor="case-sensitive" className="text-xs font-normal cursor-pointer">
                    Case-sensitive matching
                  </Label>
                </div>
              </>
            )}

            {form.question_type === "true_false" && (
              <div className="space-y-1.5">
                <Label className="text-xs">Correct answer</Label>
                <RadioGroup
                  value={form.boolAnswer ? "true" : "false"}
                  onValueChange={(v) => setForm((f) => ({ ...f, boolAnswer: v === "true" }))}
                  className="flex gap-6"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="true" id="tf-true" />
                    <Label htmlFor="tf-true" className="font-normal cursor-pointer">
                      True
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="false" id="tf-false" />
                    <Label htmlFor="tf-false" className="font-normal cursor-pointer">
                      False
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Explanation */}
            <div className="space-y-1.5">
              <Label className="text-xs">Explanation (shown after answering)</Label>
              <Textarea
                value={form.explanation}
                onChange={(e) => setForm((f) => ({ ...f, explanation: e.target.value }))}
                rows={2}
                placeholder="Why is this the correct answer?"
              />
            </div>

            {formError && (
              <p className="text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                {formError}
              </p>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" disabled={saving} onClick={() => setFormOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={saveQuestion}
              disabled={saving}
              className="gap-2 bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
            >
              {saving && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              )}
              {editingQuestion ? "Save changes" : "Add question"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Case add/edit dialog ─────────────────────────────────────────────── */}
      <Dialog open={caseFormOpen} onOpenChange={(o) => !caseSaving && setCaseFormOpen(o)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingCase ? "Edit case vignette" : "New case vignette"}</DialogTitle>
            <DialogDescription>
              A shared patient scenario that one or more scenario questions can reference.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label className="text-xs">Title</Label>
              <Input
                value={caseTitle}
                onChange={(e) => setCaseTitle(e.target.value)}
                placeholder="e.g. Mrs. Baptiste — hypertension follow-up"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Vignette</Label>
              <Textarea
                value={caseVignette}
                onChange={(e) => setCaseVignette(e.target.value)}
                rows={5}
                placeholder="Describe the patient, presentation, and relevant history…"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" disabled={caseSaving} onClick={() => setCaseFormOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={saveCase}
              disabled={caseSaving || !caseVignette.trim()}
              className="gap-2 bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
            >
              {caseSaving && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              )}
              {editingCase ? "Save changes" : "Create case"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Delete confirms ──────────────────────────────────────────────────── */}
      <ConfirmDialog
        open={!!deleteQuestion}
        onOpenChange={(o) => !o && setDeleteQuestion(null)}
        title="Delete question?"
        description={
          deleteQuestion ? `"${deleteQuestion.question.slice(0, 100)}" will be permanently deleted.` : undefined
        }
        confirmLabel="Delete question"
        onConfirm={confirmDeleteQuestion}
      />
      <ConfirmDialog
        open={!!deleteCase}
        onOpenChange={(o) => !o && setDeleteCase(null)}
        title="Delete case vignette?"
        description={
          deleteCase
            ? `"${deleteCase.title ?? "Case study"}" will be deleted. Questions that reference it stay but lose the link.`
            : undefined
        }
        confirmLabel="Delete case"
        onConfirm={confirmDeleteCase}
      />
    </>
  );
}
