// ============================================================================
// LessonEditorSheet — per-module lesson management in a Sheet, opened from the
// Curriculum Organizer so admins edit lesson content WITHOUT leaving the board.
//
// Mirrors QuizEditor's pattern: the Sheet lists the module's lessons (title,
// duration, block count) with add / edit / delete / up-down reorder; the edit
// dialog hosts the same TipTapLessonEditor used on the Courses page, so
// content is authored identically everywhere. The module row's lesson count
// refreshes via onLessonsChanged. "Open in Courses view" keeps the old
// full-page path available.
// ============================================================================

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUp, ExternalLink, Pencil, Plus, Trash2 } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import TipTapLessonEditor from "@/components/TipTapLessonEditor";
import type { ContentBlock } from "@/components/TipTapLessonEditor";
import {
  createLesson,
  deleteLesson,
  fetchLessons,
  reorderLessons,
  updateLesson,
  type Lesson,
  type Module,
} from "@/lib/admin-api";
import ConfirmDialog from "./ConfirmDialog";

interface LessonEditorSheetProps {
  module: Module | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Notifies the parent when the lesson count changes (for card badges). */
  onLessonsChanged?: (moduleId: string, lessonCount: number) => void;
  /** Optional escape hatch to the full Courses view for this course. */
  onOpenInCourses?: (courseId: string) => void;
}

export default function LessonEditorSheet({
  module,
  open,
  onOpenChange,
  onLessonsChanged,
  onOpenInCourses,
}: LessonEditorSheetProps) {
  const { toast } = useToast();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(false);

  // Lesson form dialog
  const [formOpen, setFormOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null);
  const [title, setTitle] = useState("");
  const [durationMinutes, setDurationMinutes] = useState(15);
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  const [formError, setFormError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const [deleteTarget, setDeleteTarget] = useState<Lesson | null>(null);

  const moduleId = module?.id ?? null;

  const reloadSeq = useRef(0);
  const reload = useCallback(async () => {
    if (!moduleId) return;
    // Token guard: a stale response (e.g. after rapidly switching modules)
    // must not overwrite the latest module's data. Same pattern as QuizEditor.
    const seq = ++reloadSeq.current;
    setLoading(true);
    try {
      const ls = await fetchLessons(moduleId);
      if (seq !== reloadSeq.current) return;
      setLessons(ls);
      onLessonsChanged?.(moduleId, ls.length);
    } catch (err) {
      if (seq !== reloadSeq.current) return;
      toast({ title: "Error loading lessons", description: String(err), variant: "destructive" });
    } finally {
      if (seq === reloadSeq.current) setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId]);

  useEffect(() => {
    if (open && moduleId) void reload();
  }, [open, moduleId, reload]);

  const blockCount = (l: Lesson) => (Array.isArray(l.content) ? (l.content as unknown[]).length : 0);

  // ── Add / edit ─────────────────────────────────────────────────────────────

  const openNewLesson = () => {
    setEditingLesson(null);
    setTitle("");
    setDurationMinutes(15);
    setBlocks([]);
    setFormError(null);
    setFormOpen(true);
  };

  const openEditLesson = (l: Lesson) => {
    setEditingLesson(l);
    setTitle(l.title);
    setDurationMinutes(l.duration_minutes ?? 15);
    setBlocks(Array.isArray(l.content) ? (l.content as ContentBlock[]) : []);
    setFormError(null);
    setFormOpen(true);
  };

  const saveLesson = async () => {
    if (!moduleId) return;
    if (!title.trim()) {
      // The title sits at the top of a tall dialog — surface the error in the
      // footer too so the button never looks dead (same lesson as AdminDashboard).
      setFormError("A lesson title is required — the Title box is at the top of this dialog.");
      return;
    }
    setSaving(true);
    try {
      const payload = { title: title.trim(), duration_minutes: durationMinutes, content: blocks };
      if (editingLesson) {
        await updateLesson(editingLesson.id, payload);
      } else {
        await createLesson(moduleId, { ...payload, order_index: lessons.length + 1 });
      }
      setFormOpen(false);
      toast({ title: editingLesson ? "Lesson updated" : "Lesson added" });
      await reload();
    } catch (err) {
      toast({ title: "Error saving lesson", description: String(err), variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  // ── Delete ─────────────────────────────────────────────────────────────────

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteLesson(deleteTarget.id);
      toast({ title: "Lesson deleted" });
      await reload();
    } catch (err) {
      toast({ title: "Error deleting lesson", description: String(err), variant: "destructive" });
    }
  };

  // ── Reorder (up/down; list renumbered 1..n, only changed rows persisted) ──

  const moveLesson = async (index: number, dir: "up" | "down") => {
    const to = dir === "up" ? index - 1 : index + 1;
    if (to < 0 || to >= lessons.length) return;
    const prev = lessons;
    const next = [...lessons];
    [next[index], next[to]] = [next[to], next[index]];
    const renumbered = next.map((l, i) => ({ ...l, order_index: i + 1 }));
    setLessons(renumbered);
    const prevOrder = new Map(prev.map((l) => [l.id, l.order_index]));
    const changed = renumbered
      .filter((l) => prevOrder.get(l.id) !== l.order_index)
      .map((l) => ({ id: l.id, order_index: l.order_index }));
    try {
      await reorderLessons(changed);
    } catch (err) {
      setLessons(prev); // rollback on persistence failure
      toast({ title: "Could not save lesson order", description: String(err), variant: "destructive" });
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Lessons — {module?.title}</SheetTitle>
            <SheetDescription>
              {lessons.length} lesson{lessons.length !== 1 ? "s" : ""} · edit content without leaving the
              curriculum board
            </SheetDescription>
          </SheetHeader>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <span className="h-6 w-6 animate-spin rounded-full border-2 border-[hsl(174,62%,32%)] border-t-transparent" />
            </div>
          ) : (
            <div className="mt-5 space-y-4">
              {lessons.length === 0 ? (
                <p className="rounded-lg border border-dashed px-3 py-6 text-center text-sm text-muted-foreground">
                  No lessons yet — add the first one below.
                </p>
              ) : (
                <div className="space-y-1.5">
                  {lessons.map((l, i) => (
                    <div
                      key={l.id}
                      data-testid="lesson-row"
                      className="flex items-center gap-2 rounded-md border bg-white px-2.5 py-2"
                    >
                      <span className="w-5 shrink-0 text-center text-[11px] font-bold text-slate-400 tabular-nums">
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-slate-800">{l.title}</p>
                        <p className="text-[11px] text-slate-400">
                          {l.duration_minutes ?? 15} min · {blockCount(l)} content block
                          {blockCount(l) !== 1 ? "s" : ""}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-0.5">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          title="Move up"
                          disabled={i === 0}
                          onClick={() => void moveLesson(i, "up")}
                        >
                          <ArrowUp className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          title="Move down"
                          disabled={i === lessons.length - 1}
                          onClick={() => void moveLesson(i, "down")}
                        >
                          <ArrowDown className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-slate-600 hover:text-slate-800"
                          title="Edit lesson"
                          onClick={() => openEditLesson(l)}
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-red-500 hover:text-red-600"
                          title="Delete lesson"
                          onClick={() => setDeleteTarget(l)}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <Button
                variant="outline"
                className="w-full justify-center gap-1.5"
                onClick={openNewLesson}
              >
                <Plus className="h-4 w-4" /> Add lesson
              </Button>

              {onOpenInCourses && module && (
                <>
                  <Separator />
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                    onClick={() => {
                      onOpenChange(false);
                      onOpenInCourses(module.course_id);
                    }}
                  >
                    <ExternalLink className="h-3 w-3" /> Open in Courses view
                  </button>
                </>
              )}
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* ── Lesson form dialog (same TipTap editor as the Courses page) ────── */}
      <Dialog open={formOpen} onOpenChange={(o) => !saving && setFormOpen(o)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingLesson ? "Edit Lesson" : "New Lesson"}</DialogTitle>
            <DialogDescription>
              {editingLesson
                ? "Update the lesson details and content."
                : `Add a new lesson to "${module?.title ?? "this module"}".`}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label htmlFor="sheet-lesson-title">Title *</Label>
              <Input
                id="sheet-lesson-title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setFormError(null);
                }}
                placeholder="Lesson title"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="sheet-lesson-duration">Duration (minutes)</Label>
              <Input
                id="sheet-lesson-duration"
                type="number"
                min={1}
                className="w-32"
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(parseInt(e.target.value) || 15)}
              />
            </div>

            <Separator />

            <TipTapLessonEditor blocks={blocks} onChange={setBlocks} />
          </div>

          <DialogFooter className="items-center gap-2 sm:gap-2">
            {formError && (
              <p className="mr-auto text-xs font-medium text-destructive">{formError}</p>
            )}
            <Button variant="outline" disabled={saving} onClick={() => setFormOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => void saveLesson()}
              disabled={saving}
              className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
            >
              {saving && (
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              )}
              {editingLesson ? "Save changes" : "Create lesson"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Delete confirm ─────────────────────────────────────────────────── */}
      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(null)}
        title={`Delete "${deleteTarget?.title ?? ""}"?`}
        description="This permanently deletes the lesson and its content."
        confirmLabel="Delete lesson"
        onConfirm={confirmDelete}
      />
    </>
  );
}
