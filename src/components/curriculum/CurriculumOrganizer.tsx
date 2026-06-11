// ============================================================================
// CurriculumOrganizer — board view of the whole curriculum.
//
// Domain columns (in order_index order) + a virtual "Unsorted" column hold
// course cards; each card expands to a lazily-loaded module list. All three
// levels support drag-and-drop via @dnd-kit:
//   - domains  : horizontal reorder (grip in the column header)
//   - courses  : vertical reorder within a column + move across columns
//   - modules  : vertical reorder within their course card (grip per row)
//
// Drops are optimistic: state updates immediately, only changed rows are
// persisted (reorderDomains / moveCourse / reorderCourses / reorderModules),
// and the pre-drag snapshot is restored + a destructive toast is shown when
// persistence fails. Ported from curriculum-organizer-prototype.html.
// ============================================================================

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useDroppable,
  useSensor,
  useSensors,
  type CollisionDetection,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
  type DraggableAttributes,
  type DraggableSyntheticListeners,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  BookOpen,
  ChevronRight,
  GripVertical,
  ListChecks,
  Loader2,
  MoreHorizontal,
  Pencil,
  Plus,
  Sparkles,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

import {
  createCourse,
  createDomain,
  createModule,
  deleteCourse,
  deleteDomain,
  deleteModule,
  fetchCourse,
  fetchCourses,
  fetchDomains,
  moveCourse,
  reorderCourses,
  reorderDomains,
  reorderModules,
  updateCourse,
  updateDomain,
  updateModule,
  type Course,
  type Domain,
  type Module,
} from "@/lib/admin-api";

import ConfirmDialog from "./ConfirmDialog";
import EnhanceDialog from "./EnhanceDialog";
import QuizEditor from "./QuizEditor";

// ── Constants ────────────────────────────────────────────────────────────────

/** The 9 seed domain colors (matches the prototype palette). */
const DOMAIN_COLORS = [
  "#0d8b7e",
  "#c2557a",
  "#4d63c9",
  "#7a59c2",
  "#c8743a",
  "#2f9163",
  "#5a6b7b",
  "#b8893a",
  "#a8497e",
] as const;

const UNSORTED = "unsorted";

const STATUS_PILL: Record<Course["status"], { label: string; cls: string }> = {
  published: { label: "Published", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  draft: { label: "Draft", cls: "bg-amber-50 text-amber-700 border-amber-200" },
  archived: { label: "Archived", cls: "bg-slate-100 text-slate-600 border-slate-200" },
};

// ── ID helpers (typed prefixes keep the three drag levels apart) ─────────────

const domId = (id: string) => `dom:${id}`;
const crsId = (id: string) => `crs:${id}`;
const modId = (id: string) => `mod:${id}`;
const colId = (key: string) => `col:${key}`;
const rawId = (prefixed: string) => prefixed.slice(4);

/** Normalise a course's domain_id into a column key. */
const keyOf = (domainId: string | null | undefined) => domainId ?? UNSORTED;

// ── Small presentational pieces ──────────────────────────────────────────────

function StatusPill({ status }: { status: Course["status"] }) {
  const pill = STATUS_PILL[status] ?? STATUS_PILL.draft;
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-[10.5px] font-semibold", pill.cls)}>
      {pill.label}
    </span>
  );
}

interface SortableHandle {
  attributes: DraggableAttributes;
  listeners: DraggableSyntheticListeners;
  isDragging: boolean;
}

/** Generic sortable wrapper — the render prop receives the drag handle props. */
function Sortable({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: (handle: SortableHandle) => ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      className={cn(className, isDragging && "opacity-40")}
    >
      {children({ attributes, listeners, isDragging })}
    </div>
  );
}

/** Droppable course-list body of a column (also catches drops on empty columns). */
function ColumnBody({ columnKey, children }: { columnKey: string; children: ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({ id: colId(columnKey) });
  return (
    <div
      ref={setNodeRef}
      className={cn(
        "flex flex-col gap-2 px-2.5 pb-1 pt-0.5 min-h-[56px] flex-1 overflow-y-auto rounded-b-xl transition-colors",
        isOver && "bg-teal-50/70"
      )}
    >
      {children}
    </div>
  );
}

// ── Drag snapshot (for rollback on persistence failure) ─────────────────────

interface DragSnapshot {
  domains: Domain[];
  courses: Course[];
  modulesByCourse: Record<string, Module[] | undefined>;
}

// ── Dialog state shapes ──────────────────────────────────────────────────────

interface DomainDialogState {
  open: boolean;
  editing: Domain | null;
  name: string;
  icon: string;
  color: string;
}

interface CourseDialogState {
  open: boolean;
  editing: Course | null;
  domainId: string | null; // target column for new courses
  title: string;
  status: Course["status"];
}

interface ModuleDialogState {
  open: boolean;
  editing: Module | null;
  courseId: string;
  title: string;
}

// ============================================================================
// Main component
// ============================================================================

export default function CurriculumOrganizer({
  onEditCourseContent,
}: {
  /** Jump to the Courses page with this course expanded for lesson editing. */
  onEditCourseContent?: (courseId: string) => void;
} = {}) {
  const { toast } = useToast();

  // ── Data state ─────────────────────────────────────────────────────────────
  const [domains, setDomains] = useState<Domain[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [modulesByCourse, setModulesByCourse] = useState<Record<string, Module[] | undefined>>({});
  const [modulesLoading, setModulesLoading] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  // ── Dialog state ───────────────────────────────────────────────────────────
  const [domainDialog, setDomainDialog] = useState<DomainDialogState>({
    open: false, editing: null, name: "", icon: "💊", color: DOMAIN_COLORS[0],
  });
  const [courseDialog, setCourseDialog] = useState<CourseDialogState>({
    open: false, editing: null, domainId: null, title: "", status: "draft",
  });
  const [moduleDialog, setModuleDialog] = useState<ModuleDialogState>({
    open: false, editing: null, courseId: "", title: "",
  });
  const [savingDialog, setSavingDialog] = useState(false);

  const [domainToDelete, setDomainToDelete] = useState<Domain | null>(null);
  const [reassignTarget, setReassignTarget] = useState<string>(UNSORTED);
  const [courseToDelete, setCourseToDelete] = useState<Course | null>(null);
  const [moduleToDelete, setModuleToDelete] = useState<Module | null>(null);

  const [enhanceTarget, setEnhanceTarget] = useState<Module | null>(null);
  const [quizTarget, setQuizTarget] = useState<Module | null>(null);

  // ── Drag state ─────────────────────────────────────────────────────────────
  const [activeDrag, setActiveDrag] = useState<{ type: "dom" | "crs" | "mod"; id: string } | null>(null);
  const snapshotRef = useRef<DragSnapshot | null>(null);
  // Live lookup for the collision filter (avoids stale closures inside dnd-kit)
  const modulesRef = useRef(modulesByCourse);
  modulesRef.current = modulesByCourse;

  // ── Initial load ───────────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [doms, crs] = await Promise.all([fetchDomains(), fetchCourses()]);
        if (cancelled) return;
        setDomains(doms);
        setCourses(crs);
      } catch (err) {
        if (!cancelled) {
          toast({ title: "Error loading curriculum", description: String(err), variant: "destructive" });
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Derived: courses grouped by column key, preserving array order ─────────
  const coursesByColumn = useMemo(() => {
    const map = new Map<string, Course[]>();
    for (const c of courses) {
      const key = keyOf(c.domain_id);
      const list = map.get(key) ?? [];
      list.push(c);
      map.set(key, list);
    }
    return map;
  }, [courses]);

  const findCourse = (id: string) => courses.find((c) => c.id === id);
  const findCourseOfModule = (moduleId: string): string | undefined =>
    Object.keys(modulesByCourse).find((cid) => modulesByCourse[cid]?.some((m) => m.id === moduleId));

  // ── Lazy module loading ─────────────────────────────────────────────────────
  const loadModules = async (courseId: string) => {
    setModulesLoading((prev) => new Set(prev).add(courseId));
    try {
      const { modules } = await fetchCourse(courseId);
      const mapped: Module[] = modules
        .slice()
        .sort((a, b) => a.order_index - b.order_index)
        .map((m) => ({
          id: m.id,
          course_id: m.course_id,
          title: m.title,
          description: m.description,
          order_index: m.order_index,
          created_at: m.created_at,
          updated_at: m.updated_at,
          lessons_count: m.lessons.length,
          quiz_count: m.quiz_questions.length,
        }));
      setModulesByCourse((prev) => ({ ...prev, [courseId]: mapped }));
      setCourses((prev) => prev.map((c) => (c.id === courseId ? { ...c, modules_count: mapped.length } : c)));
    } catch (err) {
      toast({ title: "Error loading modules", description: String(err), variant: "destructive" });
    } finally {
      setModulesLoading((prev) => {
        const next = new Set(prev);
        next.delete(courseId);
        return next;
      });
    }
  };

  const toggleExpand = (courseId: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(courseId)) {
        next.delete(courseId);
      } else {
        next.add(courseId);
      }
      return next;
    });
    if (!modulesByCourse[courseId] && !modulesLoading.has(courseId)) {
      void loadModules(courseId);
    }
  };

  // ── DnD setup ───────────────────────────────────────────────────────────────
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  /** Only consider droppables that match the active drag level. */
  const collisionDetection: CollisionDetection = (args) => {
    const activeId = String(args.active.id);
    const prefix = activeId.slice(0, 4);
    let containers = args.droppableContainers;
    if (prefix === "dom:") {
      containers = containers.filter((c) => String(c.id).startsWith("dom:"));
    } else if (prefix === "crs:") {
      containers = containers.filter((c) => {
        const id = String(c.id);
        return id.startsWith("crs:") || id.startsWith("col:");
      });
    } else if (prefix === "mod:") {
      // Restrict module drags to siblings within the same course
      const byCourse = modulesRef.current;
      const courseId = Object.keys(byCourse).find((cid) =>
        byCourse[cid]?.some((m) => modId(m.id) === activeId)
      );
      const siblings = new Set((courseId ? byCourse[courseId] ?? [] : []).map((m) => modId(m.id)));
      containers = containers.filter((c) => siblings.has(String(c.id)));
    }
    return closestCorners({ ...args, droppableContainers: containers });
  };

  const handleDragStart = (event: DragStartEvent) => {
    const id = String(event.active.id);
    const type = id.slice(0, 3) as "dom" | "crs" | "mod";
    setActiveDrag({ type, id: rawId(id) });
    snapshotRef.current = {
      domains: domains.map((d) => ({ ...d })),
      courses: courses.map((c) => ({ ...c })),
      modulesByCourse: Object.fromEntries(
        Object.entries(modulesByCourse).map(([k, v]) => [k, v?.map((m) => ({ ...m }))])
      ),
    };
  };

  /** Cross-column course moves preview live while dragging. */
  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;
    const a = String(active.id);
    if (!a.startsWith("crs:")) return;
    const o = String(over.id);

    let targetKey: string | null;
    if (o.startsWith("crs:")) {
      const overCourse = findCourse(rawId(o));
      if (!overCourse) return;
      targetKey = overCourse.domain_id ?? null;
    } else if (o.startsWith("col:")) {
      const k = rawId(o);
      targetKey = k === UNSORTED ? null : k;
    } else {
      return;
    }

    const courseId = rawId(a);
    const activeCourse = findCourse(courseId);
    if (!activeCourse || (activeCourse.domain_id ?? null) === targetKey) return;

    setCourses((prev) => {
      const moving = prev.find((c) => c.id === courseId);
      if (!moving) return prev;
      const next = prev.filter((c) => c.id !== courseId);
      const moved = { ...moving, domain_id: targetKey };
      if (o.startsWith("crs:")) {
        const idx = next.findIndex((c) => c.id === rawId(o));
        next.splice(idx < 0 ? next.length : idx, 0, moved);
      } else {
        next.push(moved);
      }
      return next;
    });
  };

  const rollback = (snapshot: DragSnapshot, err: unknown, what: string) => {
    setDomains(snapshot.domains);
    setCourses(snapshot.courses);
    setModulesByCourse(snapshot.modulesByCourse);
    toast({ title: `Could not save ${what}`, description: String(err), variant: "destructive" });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveDrag(null);
    const snapshot = snapshotRef.current;
    snapshotRef.current = null;
    if (!snapshot) return;

    const a = String(active.id);
    const o = over ? String(over.id) : null;

    // ── Domains: horizontal reorder ──────────────────────────────────────────
    if (a.startsWith("dom:")) {
      if (!o || !o.startsWith("dom:") || a === o) return;
      const oldIndex = domains.findIndex((d) => domId(d.id) === a);
      const newIndex = domains.findIndex((d) => domId(d.id) === o);
      if (oldIndex < 0 || newIndex < 0) return;
      const next = arrayMove(domains, oldIndex, newIndex).map((d, i) => ({ ...d, order_index: i + 1 }));
      setDomains(next);
      reorderDomains(next.map((d) => d.id)).catch((err) => rollback(snapshot, err, "domain order"));
      return;
    }

    // ── Modules: vertical reorder within one course ──────────────────────────
    if (a.startsWith("mod:")) {
      if (!o || !o.startsWith("mod:") || a === o) return;
      const courseId = findCourseOfModule(rawId(a));
      if (!courseId) return;
      const list = modulesByCourse[courseId];
      if (!list || !list.some((m) => modId(m.id) === o)) return; // cross-course → ignore
      const oldIndex = list.findIndex((m) => modId(m.id) === a);
      const newIndex = list.findIndex((m) => modId(m.id) === o);
      if (oldIndex < 0 || newIndex < 0) return;
      const next = arrayMove(list, oldIndex, newIndex).map((m, i) => ({ ...m, order_index: i + 1 }));
      setModulesByCourse((prev) => ({ ...prev, [courseId]: next }));
      const snapOrder = new Map((snapshot.modulesByCourse[courseId] ?? []).map((m) => [m.id, m.order_index]));
      const changed = next
        .filter((m) => snapOrder.get(m.id) !== m.order_index)
        .map((m) => ({ id: m.id, order_index: m.order_index }));
      if (changed.length) {
        reorderModules(changed).catch((err) => rollback(snapshot, err, "module order"));
      }
      return;
    }

    // ── Courses: reorder within a column / move across columns ──────────────
    if (a.startsWith("crs:")) {
      const courseId = rawId(a);
      if (!o) {
        setCourses(snapshot.courses); // dropped outside any target → revert
        return;
      }

      // Within-column position: move the card next to the card it was dropped on.
      let next = courses;
      if (o.startsWith("crs:") && a !== o) {
        const oldIndex = next.findIndex((c) => c.id === courseId);
        const overIndex = next.findIndex((c) => c.id === rawId(o));
        if (oldIndex >= 0 && overIndex >= 0) next = arrayMove(next, oldIndex, overIndex);
      }

      const snapById = new Map(snapshot.courses.map((c) => [c.id, c]));
      const snapCourse = snapById.get(courseId);
      const movedCourse = next.find((c) => c.id === courseId);
      if (!snapCourse || !movedCourse) return;

      // Renumber both affected columns (source + destination).
      const affectedKeys = new Set([keyOf(snapCourse.domain_id), keyOf(movedCourse.domain_id)]);
      const newOrders = new Map<string, number>();
      for (const key of affectedKeys) {
        next.filter((c) => keyOf(c.domain_id) === key).forEach((c, i) => newOrders.set(c.id, i + 1));
      }
      next = next.map((c) => (newOrders.has(c.id) ? { ...c, order: newOrders.get(c.id) ?? c.order } : c));
      setCourses(next);

      const finalCourse = next.find((c) => c.id === courseId);
      if (!finalCourse) return;
      const domainChanged = (snapCourse.domain_id ?? null) !== (finalCourse.domain_id ?? null);
      const orderChanged = snapCourse.order !== finalCourse.order;
      const others = next
        .filter((c) => c.id !== courseId && newOrders.has(c.id) && snapById.get(c.id)?.order !== c.order)
        .map((c) => ({ id: c.id, order: c.order }));

      if (!domainChanged && !orderChanged && others.length === 0) return;

      (async () => {
        if (domainChanged || orderChanged) {
          await moveCourse(courseId, finalCourse.domain_id ?? null, finalCourse.order);
        }
        if (others.length) await reorderCourses(others);
      })().catch((err) => rollback(snapshot, err, "course position"));
    }
  };

  const handleDragCancel = () => {
    setActiveDrag(null);
    const snapshot = snapshotRef.current;
    snapshotRef.current = null;
    if (snapshot) {
      setDomains(snapshot.domains);
      setCourses(snapshot.courses);
      setModulesByCourse(snapshot.modulesByCourse);
    }
  };

  // ── Domain CRUD ─────────────────────────────────────────────────────────────
  const openNewDomain = () =>
    setDomainDialog({ open: true, editing: null, name: "", icon: "💊", color: DOMAIN_COLORS[0] });

  const openEditDomain = (domain: Domain) =>
    setDomainDialog({
      open: true,
      editing: domain,
      name: domain.name,
      icon: domain.icon ?? "💊",
      color: domain.color ?? DOMAIN_COLORS[0],
    });

  const saveDomain = async () => {
    const { editing, name, icon, color } = domainDialog;
    if (!name.trim()) return;
    setSavingDialog(true);
    try {
      if (editing) {
        const updated = await updateDomain(editing.id, { name: name.trim(), icon, color });
        setDomains((prev) => prev.map((d) => (d.id === editing.id ? updated : d)));
      } else {
        const created = await createDomain({
          name: name.trim(),
          icon,
          color,
          // max+1, not length+1 — deletions leave gaps that length would reuse
          order_index: Math.max(0, ...domains.map((d) => d.order_index)) + 1,
        });
        setDomains((prev) => [...prev, created]);
      }
      setDomainDialog((prev) => ({ ...prev, open: false }));
    } catch (err) {
      toast({ title: "Error saving domain", description: String(err), variant: "destructive" });
    } finally {
      setSavingDialog(false);
    }
  };

  const recolorDomain = async (domain: Domain, color: string) => {
    const prev = domain.color;
    setDomains((ds) => ds.map((d) => (d.id === domain.id ? { ...d, color } : d)));
    try {
      await updateDomain(domain.id, { color });
    } catch (err) {
      setDomains((ds) => ds.map((d) => (d.id === domain.id ? { ...d, color: prev } : d)));
      toast({ title: "Error updating colour", description: String(err), variant: "destructive" });
    }
  };

  const confirmDeleteDomain = async () => {
    if (!domainToDelete) return;
    const id = domainToDelete.id;
    const reassign = reassignTarget === UNSORTED ? null : reassignTarget;
    try {
      await deleteDomain(id, reassign);
      setDomains((prev) => prev.filter((d) => d.id !== id));
      setCourses((prev) => prev.map((c) => (c.domain_id === id ? { ...c, domain_id: reassign } : c)));
      toast({ title: "Domain deleted", description: `Courses moved to ${reassign ? "the selected domain" : "Unsorted"}.` });
    } catch (err) {
      toast({ title: "Error deleting domain", description: String(err), variant: "destructive" });
    }
  };

  // ── Course CRUD ─────────────────────────────────────────────────────────────
  const openNewCourse = (domainId: string | null) =>
    setCourseDialog({ open: true, editing: null, domainId, title: "", status: "draft" });

  const openEditCourse = (course: Course) =>
    setCourseDialog({
      open: true,
      editing: course,
      domainId: course.domain_id,
      title: course.title,
      status: course.status,
    });

  const saveCourse = async () => {
    const { editing, domainId, title, status } = courseDialog;
    if (!title.trim()) return;
    setSavingDialog(true);
    try {
      if (editing) {
        const updated = await updateCourse(editing.id, { title: title.trim(), status });
        setCourses((prev) => prev.map((c) => (c.id === editing.id ? { ...c, ...updated, modules_count: c.modules_count } : c)));
      } else {
        const column = coursesByColumn.get(keyOf(domainId)) ?? [];
        const order = Math.max(0, ...column.map((c) => c.order)) + 1;
        const created = await createCourse({ title: title.trim(), status, order, domain_id: domainId });
        setCourses((prev) => [...prev, { ...created, domain_id: domainId, order, modules_count: 0 }]);
      }
      setCourseDialog((prev) => ({ ...prev, open: false }));
    } catch (err) {
      toast({ title: "Error saving course", description: String(err), variant: "destructive" });
    } finally {
      setSavingDialog(false);
    }
  };

  const confirmDeleteCourse = async () => {
    if (!courseToDelete) return;
    const id = courseToDelete.id;
    try {
      await deleteCourse(id);
      setCourses((prev) => prev.filter((c) => c.id !== id));
      setModulesByCourse((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
      toast({ title: "Course deleted" });
    } catch (err) {
      toast({ title: "Error deleting course", description: String(err), variant: "destructive" });
    }
  };

  // ── Module CRUD ─────────────────────────────────────────────────────────────
  const openNewModule = (courseId: string) =>
    setModuleDialog({ open: true, editing: null, courseId, title: "" });

  const openRenameModule = (module: Module) =>
    setModuleDialog({ open: true, editing: module, courseId: module.course_id, title: module.title });

  const saveModule = async () => {
    const { editing, courseId, title } = moduleDialog;
    if (!title.trim()) return;
    setSavingDialog(true);
    try {
      if (editing) {
        const updated = await updateModule(editing.id, { title: title.trim() });
        setModulesByCourse((prev) => ({
          ...prev,
          [courseId]: prev[courseId]?.map((m) => (m.id === editing.id ? { ...m, ...updated } : m)),
        }));
      } else {
        const list = modulesByCourse[courseId] ?? [];
        const created = await createModule(courseId, { title: title.trim(), order_index: list.length + 1 });
        setModulesByCourse((prev) => ({
          ...prev,
          [courseId]: [...(prev[courseId] ?? []), { ...created, lessons_count: 0, quiz_count: 0 }],
        }));
        setCourses((prev) =>
          prev.map((c) => (c.id === courseId ? { ...c, modules_count: (c.modules_count ?? 0) + 1 } : c))
        );
      }
      setModuleDialog((prev) => ({ ...prev, open: false }));
    } catch (err) {
      toast({ title: "Error saving module", description: String(err), variant: "destructive" });
    } finally {
      setSavingDialog(false);
    }
  };

  const confirmDeleteModule = async () => {
    if (!moduleToDelete) return;
    const { id, course_id } = moduleToDelete;
    try {
      await deleteModule(id);
      setModulesByCourse((prev) => ({
        ...prev,
        [course_id]: prev[course_id]?.filter((m) => m.id !== id),
      }));
      setCourses((prev) =>
        prev.map((c) =>
          c.id === course_id ? { ...c, modules_count: Math.max(0, (c.modules_count ?? 1) - 1) } : c
        )
      );
      toast({ title: "Module deleted" });
    } catch (err) {
      toast({ title: "Error deleting module", description: String(err), variant: "destructive" });
    }
  };

  // ── Enhance / Quiz wiring ───────────────────────────────────────────────────
  const handleEnhanced = (moduleId: string) => {
    const courseId = findCourseOfModule(moduleId);
    if (courseId) void loadModules(courseId); // refresh lesson/quiz counts
  };

  const handleQuizChanged = (moduleId: string, questionCount: number) => {
    const courseId = findCourseOfModule(moduleId);
    if (!courseId) return;
    setModulesByCourse((prev) => ({
      ...prev,
      [courseId]: prev[courseId]?.map((m) => (m.id === moduleId ? { ...m, quiz_count: questionCount } : m)),
    }));
  };

  // ── Render helpers ──────────────────────────────────────────────────────────

  const renderModuleRow = (module: Module, index: number) => (
    <Sortable key={module.id} id={modId(module.id)}>
      {({ attributes, listeners }) => (
        <div className="rounded-md border bg-slate-50/80 px-1.5 py-1.5 text-[13px]">
          <div className="flex items-start gap-1.5">
            <button
              type="button"
              {...attributes}
              {...listeners}
              onPointerDown={(e) => {
                e.stopPropagation();
                listeners?.onPointerDown?.(e);
              }}
              className="mt-0.5 cursor-grab touch-none text-slate-300 hover:text-slate-500 shrink-0"
              aria-label={`Reorder module ${module.title}`}
            >
              <GripVertical className="h-3.5 w-3.5" />
            </button>
            <span className="mt-0.5 w-4 text-center text-[10px] font-bold text-slate-400 shrink-0">{index + 1}</span>
            <span className="min-w-0 flex-1 break-words font-medium leading-snug text-slate-700">
              {module.title}
            </span>
          </div>
          <div
            className="mt-1 flex items-center justify-between pl-7"
            onPointerDown={(e) => e.stopPropagation()}
          >
            <span className="text-[10.5px] text-slate-400">
              {module.lessons_count ?? 0} lessons · {module.quiz_count ?? 0} quiz
            </span>
            <div className="flex items-center gap-0.5">
              {onEditCourseContent && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-slate-600 hover:text-slate-800"
                  title="Edit lesson content"
                  onClick={() => onEditCourseContent(module.course_id)}
                >
                  <BookOpen className="h-3.5 w-3.5" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-violet-600 hover:text-violet-700"
                title="Enhance with AI"
                onClick={() => setEnhanceTarget(module)}
              >
                <Sparkles className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-teal-700 hover:text-teal-800"
                title="Edit quiz"
                onClick={() => setQuizTarget(module)}
              >
                <ListChecks className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                title="Rename module"
                onClick={() => openRenameModule(module)}
              >
                <Pencil className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-red-500 hover:text-red-600"
                title="Delete module"
                onClick={() => setModuleToDelete(module)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </Sortable>
  );

  const renderModuleList = (course: Course) => {
    const modules = modulesByCourse[course.id];
    if (modulesLoading.has(course.id) && !modules) {
      return (
        <div className="space-y-1.5 border-t px-2 py-2">
          <Skeleton className="h-7 w-full" />
          <Skeleton className="h-7 w-full" />
        </div>
      );
    }
    return (
      <div className="space-y-1.5 border-t px-2 py-2">
        {modules && modules.length > 0 ? (
          <SortableContext items={modules.map((m) => modId(m.id))} strategy={verticalListSortingStrategy}>
            {modules.map((m, i) => renderModuleRow(m, i))}
          </SortableContext>
        ) : (
          <p className="px-1 py-0.5 text-[11.5px] text-muted-foreground">No modules yet.</p>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="h-7 w-full justify-start gap-1.5 text-[12px] text-muted-foreground"
          onClick={() => openNewModule(course.id)}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <Plus className="h-3.5 w-3.5" /> Add module
        </Button>
      </div>
    );
  };

  const renderCourseCard = (course: Course, index: number, accent: string) => {
    const isExpanded = expanded.has(course.id);
    return (
      <Sortable key={course.id} id={crsId(course.id)}>
        {({ attributes, listeners }) => (
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab touch-none rounded-lg border-l-4 border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            style={{ borderLeftColor: accent }}
          >
            <div className="flex items-start gap-2 p-2.5">
              <span className="mt-0.5 w-5 shrink-0 text-center text-[10px] font-bold text-slate-400">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="break-words leading-snug text-[13px] font-semibold text-slate-800">
                  {course.title}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-1.5">
                  <StatusPill status={course.status} />
                  <span className="text-[10.5px] text-slate-400">
                    {course.modules_count ?? 0} module{(course.modules_count ?? 0) !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>
              <div className="flex shrink-0 items-center" onPointerDown={(e) => e.stopPropagation()}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400" title="Course options">
                      <MoreHorizontal className="h-3.5 w-3.5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => openEditCourse(course)}>
                      <Pencil className="mr-2 h-3.5 w-3.5" /> Edit title & status
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-red-600 focus:text-red-600"
                      onClick={() => setCourseToDelete(course)}
                    >
                      <Trash2 className="mr-2 h-3.5 w-3.5" /> Delete course
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-slate-400"
                  title={isExpanded ? "Hide modules" : "Show modules"}
                  onClick={() => toggleExpand(course.id)}
                >
                  <ChevronRight className={cn("h-3.5 w-3.5 transition-transform", isExpanded && "rotate-90")} />
                </Button>
              </div>
            </div>
            {isExpanded && renderModuleList(course)}
          </div>
        )}
      </Sortable>
    );
  };

  const renderColumnFrame = (domain: Domain | null, seq: number, handle?: SortableHandle) => {
    const key = domain ? domain.id : UNSORTED;
    const list = coursesByColumn.get(key) ?? [];
    const accent = domain?.color ?? "#8a8f98";
    const totalModules = list.reduce((sum, c) => sum + (c.modules_count ?? 0), 0);
    return (
      <div
        className={cn(
          "flex max-h-[calc(100vh-13rem)] w-72 shrink-0 flex-col rounded-xl border bg-white shadow-sm",
          !domain && "border-dashed bg-slate-50/60"
        )}
      >
        <div className="h-1.5 shrink-0 rounded-t-xl" style={{ background: accent }} />
        <div className="flex items-center gap-2 px-2.5 py-2.5">
          {domain && handle ? (
            <button
              type="button"
              {...handle.attributes}
              {...handle.listeners}
              className="cursor-grab touch-none text-slate-300 hover:text-slate-500 shrink-0"
              aria-label={`Reorder domain ${domain.name}`}
            >
              <GripVertical className="h-4 w-4" />
            </button>
          ) : (
            <span className="w-4 shrink-0" />
          )}
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base"
            style={{ background: `${accent}24` }}
          >
            {domain ? domain.icon ?? "🗂️" : "📥"}
          </div>
          <div className="min-w-0 flex-1">
            <p className="break-words leading-snug text-[13.5px] font-bold text-slate-800">
              {domain ? `${seq}. ${domain.name}` : "Unsorted"}
            </p>
            <p className="text-[11px] text-slate-400">
              {list.length} course{list.length !== 1 ? "s" : ""} · {totalModules} module{totalModules !== 1 ? "s" : ""}
            </p>
          </div>
          {domain && (
            <div onPointerDown={(e) => e.stopPropagation()}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400" title="Domain options">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => openEditDomain(domain)}>
                    <Pencil className="mr-2 h-3.5 w-3.5" /> Rename / edit
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <div className="grid grid-cols-9 gap-1 px-2 py-1.5">
                    {DOMAIN_COLORS.map((c) => (
                      <button
                        key={c}
                        type="button"
                        className={cn(
                          "h-4 w-4 rounded-full transition-transform hover:scale-125",
                          domain.color === c && "ring-2 ring-slate-400 ring-offset-1"
                        )}
                        style={{ background: c }}
                        title={c}
                        onClick={() => void recolorDomain(domain, c)}
                      />
                    ))}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-red-600 focus:text-red-600"
                    onClick={() => {
                      setReassignTarget(UNSORTED);
                      setDomainToDelete(domain);
                    }}
                  >
                    <Trash2 className="mr-2 h-3.5 w-3.5" /> Delete domain
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
        <ColumnBody columnKey={key}>
          <SortableContext items={list.map((c) => crsId(c.id))} strategy={verticalListSortingStrategy}>
            {list.map((c, i) => renderCourseCard(c, i, accent))}
          </SortableContext>
          {list.length === 0 && (
            <p className="rounded-lg border border-dashed px-2 py-4 text-center text-[11.5px] text-muted-foreground">
              {domain ? "Drag courses here" : "No unsorted courses"}
            </p>
          )}
        </ColumnBody>
        <Button
          variant="ghost"
          size="sm"
          className="m-2 h-8 shrink-0 justify-start gap-1.5 text-[12.5px] text-muted-foreground"
          onClick={() => openNewCourse(domain ? domain.id : null)}
        >
          <Plus className="h-3.5 w-3.5" /> Add course
        </Button>
      </div>
    );
  };

  // ── Drag overlay content ────────────────────────────────────────────────────
  const renderOverlay = () => {
    if (!activeDrag) return null;
    if (activeDrag.type === "dom") {
      const d = domains.find((x) => x.id === activeDrag.id);
      return d ? (
        <div className="flex w-72 items-center gap-2 rounded-xl border bg-white px-3 py-2.5 shadow-lg">
          <span className="text-base">{d.icon ?? "🗂️"}</span>
          <span className="text-[13.5px] font-bold text-slate-800">{d.name}</span>
        </div>
      ) : null;
    }
    if (activeDrag.type === "crs") {
      const c = findCourse(activeDrag.id);
      return c ? (
        <div
          className="w-64 rounded-lg border border-l-4 bg-white p-2.5 shadow-lg"
          style={{ borderLeftColor: domains.find((d) => d.id === c.domain_id)?.color ?? "#8a8f98" }}
        >
          <p className="truncate text-[13px] font-semibold text-slate-800">{c.title}</p>
          <div className="mt-1">
            <StatusPill status={c.status} />
          </div>
        </div>
      ) : null;
    }
    const courseId = findCourseOfModule(activeDrag.id);
    const m = courseId ? modulesByCourse[courseId]?.find((x) => x.id === activeDrag.id) : undefined;
    return m ? (
      <div className="flex w-56 items-center gap-1.5 rounded-md border bg-white px-2 py-1.5 text-[12.5px] shadow-lg">
        <GripVertical className="h-3.5 w-3.5 text-slate-300" />
        <span className="truncate font-medium text-slate-700">{m.title}</span>
      </div>
    ) : null;
  };

  // ── Render ──────────────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="flex gap-4">
        {[0, 1, 2].map((i) => (
          <Skeleton key={i} className="h-72 w-72 rounded-xl" />
        ))}
      </div>
    );
  }

  const unsortedCount = (coursesByColumn.get(UNSORTED) ?? []).length;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">Curriculum Organizer</h2>
          <p className="text-sm text-muted-foreground">
            {domains.length} domain{domains.length !== 1 ? "s" : ""} · {courses.length} course
            {courses.length !== 1 ? "s" : ""}
            {unsortedCount > 0 ? ` · ${unsortedCount} unsorted` : ""}
          </p>
        </div>
        <Button onClick={openNewDomain} className="gap-2 bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">
          <Plus className="h-4 w-4" /> New Domain
        </Button>
      </div>

      {/* Board */}
      <DndContext
        sensors={sensors}
        collisionDetection={collisionDetection}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <div className="flex items-start gap-4 overflow-x-auto pb-4">
          <SortableContext items={domains.map((d) => domId(d.id))} strategy={horizontalListSortingStrategy}>
            {domains.map((d, i) => (
              <Sortable key={d.id} id={domId(d.id)}>
                {(handle) => renderColumnFrame(d, i + 1, handle)}
              </Sortable>
            ))}
          </SortableContext>

          {/* Virtual "Unsorted" column (courses with domain_id = null) */}
          {renderColumnFrame(null, domains.length + 1)}

          {/* Add-domain affordance */}
          <button
            type="button"
            onClick={openNewDomain}
            className="flex h-40 w-52 shrink-0 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 text-[13px] font-semibold text-slate-400 transition-colors hover:border-teal-600 hover:text-teal-700"
          >
            <Plus className="h-5 w-5" />
            Add domain
          </button>
        </div>

        <DragOverlay>{renderOverlay()}</DragOverlay>
      </DndContext>

      {/* ── Domain create/edit dialog ─────────────────────────────────────── */}
      <Dialog open={domainDialog.open} onOpenChange={(o) => setDomainDialog((p) => ({ ...p, open: o }))}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{domainDialog.editing ? "Edit Domain" : "New Domain"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="domain-name">Name</Label>
              <Input
                id="domain-name"
                value={domainDialog.name}
                onChange={(e) => setDomainDialog((p) => ({ ...p, name: e.target.value }))}
                placeholder="e.g. Pharmacology Foundations"
                autoFocus
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="domain-icon">Icon (emoji)</Label>
              <Input
                id="domain-icon"
                value={domainDialog.icon}
                onChange={(e) => setDomainDialog((p) => ({ ...p, icon: e.target.value }))}
                className="w-24"
                maxLength={4}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Colour</Label>
              <div className="flex flex-wrap gap-2">
                {DOMAIN_COLORS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={cn(
                      "h-7 w-7 rounded-full transition-transform hover:scale-110",
                      domainDialog.color === c && "ring-2 ring-slate-500 ring-offset-2"
                    )}
                    style={{ background: c }}
                    title={c}
                    onClick={() => setDomainDialog((p) => ({ ...p, color: c }))}
                  />
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDomainDialog((p) => ({ ...p, open: false }))}>
              Cancel
            </Button>
            <Button
              onClick={() => void saveDomain()}
              disabled={savingDialog || !domainDialog.name.trim()}
              className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
            >
              {savingDialog && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {domainDialog.editing ? "Save changes" : "Create domain"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Course create/edit dialog ─────────────────────────────────────── */}
      <Dialog open={courseDialog.open} onOpenChange={(o) => setCourseDialog((p) => ({ ...p, open: o }))}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{courseDialog.editing ? "Edit Course" : "New Course"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="course-title">Title</Label>
              <Input
                id="course-title"
                value={courseDialog.title}
                onChange={(e) => setCourseDialog((p) => ({ ...p, title: e.target.value }))}
                placeholder="e.g. Pharmacy Calculations I"
                autoFocus
              />
            </div>
            <div className="space-y-1.5">
              <Label>Status</Label>
              <Select
                value={courseDialog.status}
                onValueChange={(v) => setCourseDialog((p) => ({ ...p, status: v as Course["status"] }))}
              >
                <SelectTrigger className="w-44">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCourseDialog((p) => ({ ...p, open: false }))}>
              Cancel
            </Button>
            <Button
              onClick={() => void saveCourse()}
              disabled={savingDialog || !courseDialog.title.trim()}
              className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
            >
              {savingDialog && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {courseDialog.editing ? "Save changes" : "Create course"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Module create/rename dialog ───────────────────────────────────── */}
      <Dialog open={moduleDialog.open} onOpenChange={(o) => setModuleDialog((p) => ({ ...p, open: o }))}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{moduleDialog.editing ? "Rename Module" : "New Module"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-1.5">
            <Label htmlFor="module-title">Title</Label>
            <Input
              id="module-title"
              value={moduleDialog.title}
              onChange={(e) => setModuleDialog((p) => ({ ...p, title: e.target.value }))}
              placeholder="e.g. Week 1: Introduction"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter" && moduleDialog.title.trim() && !savingDialog) void saveModule();
              }}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setModuleDialog((p) => ({ ...p, open: false }))}>
              Cancel
            </Button>
            <Button
              onClick={() => void saveModule()}
              disabled={savingDialog || !moduleDialog.title.trim()}
              className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
            >
              {savingDialog && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {moduleDialog.editing ? "Save" : "Add module"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Delete domain (with reassign picker) ──────────────────────────── */}
      <ConfirmDialog
        open={!!domainToDelete}
        onOpenChange={(o) => !o && setDomainToDelete(null)}
        title={`Delete "${domainToDelete?.name ?? ""}"?`}
        description="The domain will be removed. Its courses are not deleted — choose where they should go."
        confirmLabel="Delete domain"
        onConfirm={confirmDeleteDomain}
      >
        <div className="space-y-1.5">
          <Label>Move its courses to</Label>
          <Select value={reassignTarget} onValueChange={setReassignTarget}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={UNSORTED}>Unsorted (no domain)</SelectItem>
              {domains
                .filter((d) => d.id !== domainToDelete?.id)
                .map((d) => (
                  <SelectItem key={d.id} value={d.id}>
                    {d.icon ? `${d.icon} ` : ""}{d.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </ConfirmDialog>

      {/* ── Delete course ─────────────────────────────────────────────────── */}
      <ConfirmDialog
        open={!!courseToDelete}
        onOpenChange={(o) => !o && setCourseToDelete(null)}
        title={`Delete "${courseToDelete?.title ?? ""}"?`}
        description="This permanently deletes the course and all of its modules, lessons and quiz questions."
        confirmLabel="Delete course"
        onConfirm={confirmDeleteCourse}
      />

      {/* ── Delete module ─────────────────────────────────────────────────── */}
      <ConfirmDialog
        open={!!moduleToDelete}
        onOpenChange={(o) => !o && setModuleToDelete(null)}
        title={`Delete "${moduleToDelete?.title ?? ""}"?`}
        description="This permanently deletes the module and all of its lessons and quiz questions."
        confirmLabel="Delete module"
        onConfirm={confirmDeleteModule}
      />

      {/* ── AI enhance + quiz editor (existing components) ────────────────── */}
      <EnhanceDialog
        module={enhanceTarget}
        open={!!enhanceTarget}
        onOpenChange={(o) => !o && setEnhanceTarget(null)}
        onEnhanced={handleEnhanced}
      />
      <QuizEditor
        module={quizTarget}
        open={!!quizTarget}
        onOpenChange={(o) => !o && setQuizTarget(null)}
        onQuizChanged={handleQuizChanged}
      />
    </div>
  );
}
