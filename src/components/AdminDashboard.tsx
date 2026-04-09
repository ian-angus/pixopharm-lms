// ============================================================================
// PIXOPHARM LMS — Admin Dashboard
// Full admin console: Dashboard, Courses, Students, Analytics, Settings
// ============================================================================

import { useState, useEffect, useCallback, useMemo } from "react";
import type { User } from "@supabase/supabase-js";

// ── UI Components ────────────────────────────────────────────────────────────
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Tabs not used in admin dashboard (sidebar nav instead)
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

// ── Tutorial ─────────────────────────────────────────────────────────────────
import AdminTutorial from "@/components/AdminTutorial";

// ── Admin API ────────────────────────────────────────────────────────────────
import { useAdmin } from "@/hooks/useAdmin";
import type { AdminProfile } from "@/hooks/useAdmin";
import {
  fetchCourses,
  fetchCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  createModule,
  updateModule,
  deleteModule,
  createLesson,
  updateLesson,
  deleteLesson,
  createQuizQuestion,
  updateQuizQuestion,
  deleteQuizQuestion,
  fetchStudents,
  fetchAnalytics,
  fetchSurveyStats,
  fetchAllSurveyStats,
  generateCourse,
  enhanceModule,
} from "@/lib/admin-api";
import type {
  Course,
  Module,
  Lesson,
  QuizQuestion,
  QuestionType,
  StudentProfile,
  AnalyticsData,
  CourseSurveyStats,
  AllSurveyStats,
  SurveyCourseRow,
  GenerateCourseResult,
} from "@/lib/admin-api";

// ── CoursePlayer for Preview ─────────────────────────────────────────────────
import CoursePlayer from "@/components/CoursePlayer";

// ── TipTap WYSIWYG Editor (replaces block-by-block ContentBlockEditor) ───────
import TipTapLessonEditor from "@/components/TipTapLessonEditor";
import type { ContentBlock } from "@/components/TipTapLessonEditor";

// ── Dropdown Menu (for status toggle) ───────────────────────────────────────
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// ============================================================================
// TYPES
// ============================================================================

interface AdminDashboardProps {
  user: User;
  onExit: () => void;
}

type AdminPage = "dashboard" | "courses" | "ai-generator" | "students" | "analytics" | "settings" | "help";

// ============================================================================
// SVG ICONS (inline to avoid Lucide dependency bloat)
// ============================================================================

function IconDashboard() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function IconCourses() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
    </svg>
  );
}
function IconStudents() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
function IconAnalytics() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
}
function IconSettings() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}
function IconPlus() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
function IconEdit() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}
function IconTrash() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
    </svg>
  );
}
function IconChevronRight() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
function IconEye() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IconLogOut() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}
function IconHelp() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;
}
function IconAI() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>;
}
function IconAward() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}

// ── Logo (reused from App.tsx) ───────────────────────────────────────────────
function PixopharmLogo({ size = 32 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} fill="none">
      <rect width="40" height="40" rx="8" fill="hsl(174 62% 32%)" />
      <path d="M12 28 L12 14 L20 10 L28 14 L28 22 L20 26 L12 22" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M20 10 L20 26" stroke="white" strokeWidth="1.5" opacity="0.6" />
      <path d="M12 14 L28 14" stroke="white" strokeWidth="1" opacity="0.4" />
      <circle cx="20" cy="18" r="3" fill="white" opacity="0.9" />
      <path d="M18.5 17 L19.5 19 L21.5 16.5" stroke="hsl(174 62% 32%)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ============================================================================
// HELPER: Slug generator
// ============================================================================

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ============================================================================
// HELPER: Status badge variant
// ============================================================================

function statusBadge(status: string) {
  switch (status) {
    case "published":
      return <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-emerald-200">Published</Badge>;
    case "archived":
      return <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-100 border-slate-200">Archived</Badge>;
    default:
      return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">Draft</Badge>;
  }
}

// ============================================================================
// LOADING SKELETONS
// ============================================================================

function StatCardSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <Skeleton className="h-4 w-24" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-16 mb-1" />
        <Skeleton className="h-3 w-32" />
      </CardContent>
    </Card>
  );
}

function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-20" />
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// EMPTY STATES
// ============================================================================

function EmptyState({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <IconCourses />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-md mb-4">{description}</p>
      {action}
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function AdminDashboard({ user, onExit }: AdminDashboardProps) {
  const { isAdmin, loading: adminLoading, profile } = useAdmin(user);
  const { toast } = useToast();

  // ── Navigation State ─────────────────────────────────────────────────────
  const [activePage, setActivePage] = useState<AdminPage>("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // ── Data State ───────────────────────────────────────────────────────────
  const [courses, setCourses] = useState<Course[]>([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [students, setStudents] = useState<StudentProfile[]>([]);
  const [studentsLoading, setStudentsLoading] = useState(true);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(true);

  // ── Course Search & Grouping ─────────────────────────────────────────────
  const [courseSearch, setCourseSearch] = useState("");
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());

  // ── Course Detail State ──────────────────────────────────────────────────
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);
  const [surveyStats, setSurveyStats] = useState<Record<string, CourseSurveyStats>>({});
  const [surveyLoading, setSurveyLoading] = useState<Record<string, boolean>>({});
  const [aiAnalysis, setAiAnalysis] = useState<Record<string, { summary: string; recommendations: string[] } | null>>({});
  const [aiLoading, setAiLoading] = useState<Record<string, boolean>>({});

  // ── Analytics — All-course survey overview ───────────────────────────────
  const [allSurveyStats, setAllSurveyStats] = useState<AllSurveyStats | null>(null);
  const [allSurveyLoading, setAllSurveyLoading] = useState(false);
  const [expandedSurveyCourse, setExpandedSurveyCourse] = useState<string | null>(null);
  const [courseDetail, setCourseDetail] = useState<{
    course: Course;
    modules: (Module & { lessons: Lesson[]; quiz_questions: QuizQuestion[] })[];
  } | null>(null);
  const [courseDetailLoading, setCourseDetailLoading] = useState(false);

  // ── AI Course Generator State ────────────────────────────────────────────
  const [aiGenForm, setAiGenForm] = useState({
    title: "",
    skill_level: "Beginner" as "Beginner" | "Intermediate" | "Advanced",
    duration_weeks: 4,
    jurisdiction: "",
    focus_areas: "",
  });
  const [aiGenLoading, setAiGenLoading] = useState(false);
  const [aiGenResult, setAiGenResult] = useState<GenerateCourseResult | null>(null);
  const [aiGenError, setAiGenError] = useState<string | null>(null);
  const [aiGenModules, setAiGenModules] = useState<{ id: string; title: string }[]>([]);
  const [enhancingModules, setEnhancingModules] = useState<Record<string, "loading" | "done" | "error">>({});

  // ── Dialog State ─────────────────────────────────────────────────────────
  const [showCourseDialog, setShowCourseDialog] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [showModuleDialog, setShowModuleDialog] = useState(false);
  const [editingModule, setEditingModule] = useState<Module | null>(null);
  const [moduleParentCourseId, setModuleParentCourseId] = useState<string>("");
  const [showLessonDialog, setShowLessonDialog] = useState(false);
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null);
  const [lessonParentModuleId, setLessonParentModuleId] = useState<string>("");
  const [showQuizDialog, setShowQuizDialog] = useState(false);
  const [editingQuiz, setEditingQuiz] = useState<QuizQuestion | null>(null);
  const [quizParentModuleId, setQuizParentModuleId] = useState<string>("");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{ type: string; id: string; name: string } | null>(null);

  // ── Status Change Confirmation State ────────────────────────────────────
  const [showStatusDialog, setShowStatusDialog] = useState(false);
  const [statusChangeTarget, setStatusChangeTarget] = useState<{
    courseId: string;
    courseName: string;
    newStatus: "draft" | "published" | "archived";
  } | null>(null);

  // ── Student Detail State ─────────────────────────────────────────────────
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);
  const [studentSearch, setStudentSearch] = useState("");
  const [studentSort, setStudentSort] = useState<"name" | "progress" | "recent">("name");

  // ── Preview State ────────────────────────────────────────────────────────
  const [previewCourseId, setPreviewCourseId] = useState<string | null>(null);

  // ── Form State ───────────────────────────────────────────────────────────
  const [courseForm, setCourseForm] = useState({
    title: "",
    slug: "",
    description: "",
    skill_level: "Beginner",
    duration_weeks: 4,
    icon: "GraduationCap",
    color: "blue",
    prerequisites: [] as string[],
    what_youll_learn: [""],
    status: "draft" as "draft" | "published" | "archived",
    order: 99,
  });
  const [moduleForm, setModuleForm] = useState({
    title: "",
    description: "",
    order_index: 1,
  });
  const [lessonForm, setLessonForm] = useState({
    title: "",
    duration_minutes: 15,
    order_index: 99,
    content: [] as ContentBlock[],
  });
  const [quizForm, setQuizForm] = useState({
    question: "",
    options: ["", "", "", ""],
    correct_answer: 0,
    explanation: "",
    order_index: 99,
    question_type: "multiple_choice" as QuestionType,
    question_data: {} as QuizQuestion["question_data"],
    difficulty: "" as string,
    blooms_level: "" as string,
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // ── Data Loading ─────────────────────────────────────────────────────────

  const loadCourses = useCallback(async () => {
    setCoursesLoading(true);
    try {
      const data = await fetchCourses();
      setCourses(data);
    } catch (err) {
      toast({ title: "Error loading courses", description: String(err), variant: "destructive" });
    } finally {
      setCoursesLoading(false);
    }
  }, [toast]);

  const loadStudents = useCallback(async () => {
    setStudentsLoading(true);
    try {
      const data = await fetchStudents();
      setStudents(data);
    } catch (err) {
      toast({ title: "Error loading students", description: String(err), variant: "destructive" });
    } finally {
      setStudentsLoading(false);
    }
  }, [toast]);

  const loadAnalytics = useCallback(async () => {
    setAnalyticsLoading(true);
    try {
      const data = await fetchAnalytics();
      setAnalytics(data);
    } catch (err) {
      toast({ title: "Error loading analytics", description: String(err), variant: "destructive" });
    } finally {
      setAnalyticsLoading(false);
    }
  }, [toast]);

  const loadCourseDetail = useCallback(
    async (courseId: string) => {
      setCourseDetailLoading(true);
      try {
        const data = await fetchCourse(courseId);
        setCourseDetail(data);
      } catch (err) {
        toast({ title: "Error loading course detail", description: String(err), variant: "destructive" });
      } finally {
        setCourseDetailLoading(false);
      }
    },
    [toast]
  );

  // Load data on mount and page switch
  useEffect(() => {
    if (adminLoading || !isAdmin) return;

    if (activePage === "dashboard" || activePage === "courses") {
      loadCourses();
    }
    if (activePage === "dashboard" || activePage === "students") {
      loadStudents();
    }
    if (activePage === "dashboard" || activePage === "analytics") {
      loadAnalytics();
    }
    if (activePage === "analytics") {
      setAllSurveyLoading(true);
      fetchAllSurveyStats()
        .then(setAllSurveyStats)
        .catch(() => {})
        .finally(() => setAllSurveyLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage, adminLoading, isAdmin]);

  // Load course detail + survey stats when expanding
  useEffect(() => {
    if (expandedCourseId) {
      loadCourseDetail(expandedCourseId);
      // Load survey stats if not already loaded
      const course = courses.find((c) => c.id === expandedCourseId);
      if (course && !surveyStats[course.slug] && !surveyLoading[course.slug]) {
        setSurveyLoading((prev) => ({ ...prev, [course.slug]: true }));
        fetchSurveyStats(course.slug)
          .then((stats) => setSurveyStats((prev) => ({ ...prev, [course.slug]: stats })))
          .catch(() => {})
          .finally(() => setSurveyLoading((prev) => ({ ...prev, [course.slug]: false })));
      }
    } else {
      setCourseDetail(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandedCourseId, loadCourseDetail]);

  // Keyboard shortcut: Escape to close dialogs
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowCourseDialog(false);
        setShowModuleDialog(false);
        setShowLessonDialog(false);
        setShowQuizDialog(false);
        setShowDeleteDialog(false);
        setShowStatusDialog(false);
        setSelectedStudent(null);
        setPreviewCourseId(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // ── Course CRUD Handlers ─────────────────────────────────────────────────

  function openNewCourse() {
    setEditingCourse(null);
    setCourseForm({
      title: "",
      slug: "",
      description: "",
      skill_level: "Beginner",
      duration_weeks: 4,
      icon: "GraduationCap",
      color: "blue",
      prerequisites: [],
      what_youll_learn: [""],
      status: "draft",
      order: courses.length + 1,
    });
    setFormErrors({});
    setShowCourseDialog(true);
  }

  function openEditCourse(course: Course) {
    setEditingCourse(course);
    setCourseForm({
      title: course.title,
      slug: course.slug,
      description: course.description,
      skill_level: course.skill_level,
      duration_weeks: course.duration_weeks,
      icon: course.icon,
      color: course.color,
      prerequisites: course.prerequisites ?? [],
      what_youll_learn: course.what_youll_learn?.length ? course.what_youll_learn : [""],
      status: course.status,
      order: course.order,
    });
    setFormErrors({});
    setShowCourseDialog(true);
  }

  async function handleSaveCourse() {
    // Validate
    const errors: Record<string, string> = {};
    if (!courseForm.title.trim()) errors.title = "Title is required";
    if (!courseForm.slug.trim()) errors.slug = "Slug is required";
    if (!courseForm.description.trim()) errors.description = "Description is required";
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const payload = {
      ...courseForm,
      what_youll_learn: courseForm.what_youll_learn.filter((s) => s.trim()),
    };

    try {
      if (editingCourse) {
        await updateCourse(editingCourse.id, payload);
        toast({ title: "Course updated", description: `"${courseForm.title}" has been updated.` });
      } else {
        await createCourse(payload);
        toast({ title: "Course created", description: `"${courseForm.title}" has been created.` });
      }
      setShowCourseDialog(false);
      loadCourses();
    } catch (err) {
      toast({ title: "Error saving course", description: String(err), variant: "destructive" });
    }
  }

  // ── Module CRUD Handlers ─────────────────────────────────────────────────

  function openNewModule(courseId: string) {
    setEditingModule(null);
    setModuleParentCourseId(courseId);
    const existingCount = courseDetail?.modules.length ?? 0;
    setModuleForm({
      title: "",
      description: "",
      order_index: existingCount + 1,
    });
    setFormErrors({});
    setShowModuleDialog(true);
  }

  function openEditModule(mod: Module) {
    setEditingModule(mod);
    setModuleParentCourseId(mod.course_id);
    setModuleForm({
      title: mod.title,
      description: mod.description ?? "",
      order_index: mod.order_index,
    });
    setFormErrors({});
    setShowModuleDialog(true);
  }

  async function handleSaveModule() {
    const errors: Record<string, string> = {};
    if (!moduleForm.title.trim()) errors.title = "Title is required";
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const payload = { ...moduleForm };

    try {
      if (editingModule) {
        await updateModule(editingModule.id, payload);
        toast({ title: "Module updated", description: `"${moduleForm.title}" has been updated.` });
      } else {
        await createModule(moduleParentCourseId, payload);
        toast({ title: "Module created", description: `"${moduleForm.title}" has been created.` });
      }
      setShowModuleDialog(false);
      if (expandedCourseId) loadCourseDetail(expandedCourseId);
      loadCourses();
    } catch (err) {
      toast({ title: "Error saving module", description: String(err), variant: "destructive" });
    }
  }

  // ── Lesson CRUD Handlers ─────────────────────────────────────────────────

  function openNewLesson(moduleId: string) {
    setEditingLesson(null);
    setLessonParentModuleId(moduleId);
    setLessonForm({ title: "", duration_minutes: 15, order_index: 99, content: [] });
    setFormErrors({});
    setShowLessonDialog(true);
  }

  function openEditLesson(lesson: Lesson) {
    setEditingLesson(lesson);
    setLessonParentModuleId(lesson.module_id);
    const contentBlocks = Array.isArray(lesson.content) ? (lesson.content as ContentBlock[]) : [];
    setLessonForm({
      title: lesson.title,
      duration_minutes: lesson.duration_minutes,
      order_index: lesson.order_index,
      content: contentBlocks,
    });
    setFormErrors({});
    setShowLessonDialog(true);
  }

  async function handleSaveLesson() {
    const errors: Record<string, string> = {};
    if (!lessonForm.title.trim()) errors.title = "Title is required";
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const payload = {
      title: lessonForm.title,
      duration_minutes: lessonForm.duration_minutes,
      order_index: lessonForm.order_index,
      content: lessonForm.content,
    };

    try {
      if (editingLesson) {
        await updateLesson(editingLesson.id, payload);
        toast({ title: "Lesson updated", description: `"${lessonForm.title}" has been updated.` });
      } else {
        await createLesson(lessonParentModuleId, payload);
        toast({ title: "Lesson created", description: `"${lessonForm.title}" has been created.` });
      }
      setShowLessonDialog(false);
      if (expandedCourseId) loadCourseDetail(expandedCourseId);
    } catch (err) {
      toast({ title: "Error saving lesson", description: String(err), variant: "destructive" });
    }
  }

  // ── Quiz CRUD Handlers ───────────────────────────────────────────────────

  function openNewQuiz(moduleId: string) {
    setEditingQuiz(null);
    setQuizParentModuleId(moduleId);
    setQuizForm({
      question: "",
      options: ["", "", "", ""],
      correct_answer: 0,
      explanation: "",
      order_index: 99,
      question_type: "multiple_choice",
      question_data: {},
      difficulty: "",
      blooms_level: "",
    });
    setFormErrors({});
    setShowQuizDialog(true);
  }

  function openEditQuiz(q: QuizQuestion) {
    setEditingQuiz(q);
    setQuizParentModuleId(q.module_id);
    setQuizForm({
      question: q.question,
      options: q.options.length >= 4 ? q.options : [...q.options, ...Array(4 - q.options.length).fill("")],
      correct_answer: q.correct_answer,
      explanation: q.explanation,
      order_index: q.order_index,
      question_type: q.question_type ?? "multiple_choice",
      question_data: q.question_data ?? {},
      difficulty: q.difficulty ?? "",
      blooms_level: q.blooms_level ?? "",
    });
    setFormErrors({});
    setShowQuizDialog(true);
  }

  async function handleSaveQuiz() {
    const errors: Record<string, string> = {};
    if (!quizForm.question.trim()) errors.question = "Question is required";
    const qt = quizForm.question_type;
    // Validate based on question type
    if (qt === "multiple_choice" || qt === "scenario") {
      const filledOptions = quizForm.options.filter((o) => o.trim());
      if (filledOptions.length < 2) errors.options = "At least 2 options are required";
    }
    if (qt === "multiple_select") {
      const filledOptions = quizForm.options.filter((o) => o.trim());
      if (filledOptions.length < 2) errors.options = "At least 2 options are required";
      if (!quizForm.question_data?.correct_indices?.length) errors.correct = "Select at least one correct option";
    }
    if (qt === "ordering") {
      const filledOptions = quizForm.options.filter((o) => o.trim());
      if (filledOptions.length < 2) errors.options = "At least 2 items are required";
    }
    if (qt === "matching") {
      if (!quizForm.question_data?.pairs?.length || quizForm.question_data.pairs.length < 2)
        errors.pairs = "At least 2 pairs are required";
    }
    if (qt === "fill_in_blank") {
      if (!quizForm.question_data?.acceptable_answers?.length || !quizForm.question_data.acceptable_answers.some((a) => a.trim()))
        errors.answers = "At least one acceptable answer is required";
    }
    if (qt === "scenario" && !quizForm.question_data?.context?.trim()) {
      errors.context = "Scenario context is required";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const payload: Record<string, unknown> = {
        question: quizForm.question,
        options: quizForm.options,
        correct_answer: quizForm.correct_answer,
        explanation: quizForm.explanation,
        order_index: quizForm.order_index,
      };
      if (quizForm.question_type !== "multiple_choice") {
        payload.question_type = quizForm.question_type;
      }
      if (quizForm.question_data && Object.keys(quizForm.question_data).length > 0) {
        payload.question_data = quizForm.question_data;
      }
      if (quizForm.difficulty) payload.difficulty = quizForm.difficulty;
      if (quizForm.blooms_level) payload.blooms_level = quizForm.blooms_level;

      if (editingQuiz) {
        await updateQuizQuestion(editingQuiz.id, payload);
        toast({ title: "Quiz question updated" });
      } else {
        await createQuizQuestion(quizParentModuleId, payload);
        toast({ title: "Quiz question created" });
      }
      setShowQuizDialog(false);
      if (expandedCourseId) loadCourseDetail(expandedCourseId);
    } catch (err) {
      toast({ title: "Error saving quiz question", description: String(err), variant: "destructive" });
    }
  }

  // ── Delete Handler ───────────────────────────────────────────────────────

  function confirmDelete(type: string, id: string, name: string) {
    setDeleteTarget({ type, id, name });
    setShowDeleteDialog(true);
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    try {
      switch (deleteTarget.type) {
        case "course":
          await deleteCourse(deleteTarget.id);
          toast({ title: "Course deleted", description: `"${deleteTarget.name}" has been deleted.` });
          setExpandedCourseId(null);
          loadCourses();
          break;
        case "module":
          await deleteModule(deleteTarget.id);
          toast({ title: "Module deleted", description: `"${deleteTarget.name}" has been deleted.` });
          if (expandedCourseId) loadCourseDetail(expandedCourseId);
          loadCourses();
          break;
        case "lesson":
          await deleteLesson(deleteTarget.id);
          toast({ title: "Lesson deleted", description: `"${deleteTarget.name}" has been deleted.` });
          if (expandedCourseId) loadCourseDetail(expandedCourseId);
          break;
        case "quiz":
          await deleteQuizQuestion(deleteTarget.id);
          toast({ title: "Quiz question deleted" });
          if (expandedCourseId) loadCourseDetail(expandedCourseId);
          break;
      }
    } catch (err) {
      toast({ title: "Error deleting", description: String(err), variant: "destructive" });
    } finally {
      setShowDeleteDialog(false);
      setDeleteTarget(null);
    }
  }

  // ── Status Change Handler ───────────────────────────────────────────────

  function requestStatusChange(courseId: string, courseName: string, newStatus: "draft" | "published" | "archived") {
    setStatusChangeTarget({ courseId, courseName, newStatus });
    setShowStatusDialog(true);
  }

  async function handleStatusChange() {
    if (!statusChangeTarget) return;
    try {
      await updateCourse(statusChangeTarget.courseId, { status: statusChangeTarget.newStatus });
      toast({
        title: "Status updated",
        description: `"${statusChangeTarget.courseName}" is now ${statusChangeTarget.newStatus}.`,
      });
      loadCourses();
    } catch (err) {
      toast({ title: "Error changing status", description: String(err), variant: "destructive" });
    } finally {
      setShowStatusDialog(false);
      setStatusChangeTarget(null);
    }
  }

  // ── Course Publish/Unpublish from Dialog ──────────────────────────────

  async function handlePublishToggle() {
    if (!editingCourse) return;
    const newStatus = editingCourse.status === "published" ? "draft" : "published";
    requestStatusChange(editingCourse.id, editingCourse.title, newStatus);
  }

  // ── Student CSV Export ───────────────────────────────────────────────────

  function exportStudentsCSV() {
    const headers = ["Name", "Island", "Enrolled Courses", "Progress %", "Status", "Created"];
    const rows = filteredStudents.map((s) => {
      const enrollCount = s.enrollments?.length ?? 0;
      const avgProgress = getStudentAvgProgress(s);
      const status = enrollCount > 0 ? "Active" : "Inactive";
      return [s.full_name, s.island ?? "N/A", enrollCount, avgProgress, status, s.created_at?.split("T")[0] ?? ""];
    });

    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pixopharm-students-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: "CSV exported", description: `${filteredStudents.length} students exported.` });
  }

  // ── Computed Values ──────────────────────────────────────────────────────

  function getStudentAvgProgress(s: StudentProfile): number {
    if (!s.progress?.length) return 0;
    const total = s.progress.reduce((sum, p) => sum + (p.completed_lessons?.length ?? 0), 0);
    // Rough estimate using 30 lessons per course
    return Math.min(100, Math.round((total / (s.progress.length * 30)) * 100));
  }

  const filteredStudents = useMemo(() => {
    let list = [...students];
    if (studentSearch.trim()) {
      const q = studentSearch.toLowerCase();
      list = list.filter(
        (s) =>
          s.full_name.toLowerCase().includes(q) ||
          (s.island ?? "").toLowerCase().includes(q)
      );
    }
    switch (studentSort) {
      case "progress":
        list.sort((a, b) => getStudentAvgProgress(b) - getStudentAvgProgress(a));
        break;
      case "recent":
        list.sort((a, b) => (b.created_at ?? "").localeCompare(a.created_at ?? ""));
        break;
      default:
        list.sort((a, b) => a.full_name.localeCompare(b.full_name));
    }
    return list;
  }, [students, studentSearch, studentSort]);

  const dashboardStats = useMemo(() => {
    const totalCourses = courses.length;
    const totalStudents = students.length;
    const activeEnrollments = students.reduce((sum, s) => sum + (s.enrollments?.length ?? 0), 0);
    const avgCompletion = analytics?.completion_rate ?? 0;
    return { totalCourses, totalStudents, activeEnrollments, avgCompletion };
  }, [courses, students, analytics]);

  // ── Course groups (filtered + grouped by skill level) ───────────────────
  const COURSE_LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;
  type CourseLevel = (typeof COURSE_LEVELS)[number] | "Other";
  const LEVEL_COLORS: Record<string, string> = {
    Beginner: "hsl(174,62%,32%)",
    Intermediate: "hsl(199,80%,55%)",
    Advanced: "hsl(262,60%,60%)",
    Other: "hsl(40,85%,55%)",
  };

  const courseGroups = useMemo(() => {
    const q = courseSearch.toLowerCase().trim();
    const filtered = q
      ? courses.filter(
          (c) =>
            c.title.toLowerCase().includes(q) ||
            (c.skill_level ?? "").toLowerCase().includes(q)
        )
      : courses;
    const groups: { level: CourseLevel; color: string; courses: typeof filtered }[] =
      COURSE_LEVELS.map((level) => ({
        level,
        color: LEVEL_COLORS[level],
        courses: filtered.filter((c) => c.skill_level === level),
      }));
    const other = filtered.filter(
      (c) => !(COURSE_LEVELS as readonly string[]).includes(c.skill_level ?? "")
    );
    if (other.length > 0) groups.push({ level: "Other", color: LEVEL_COLORS["Other"], courses: other });
    return { groups, total: filtered.length, query: q };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courses, courseSearch]);

  const toggleGroup = (level: string) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev);
      next.has(level) ? next.delete(level) : next.add(level);
      return next;
    });
  };

  // ── Guard: not admin ─────────────────────────────────────────────────────

  if (adminLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="flex flex-col items-center gap-4">
          <PixopharmLogo size={48} />
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You do not have admin privileges to access this page.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button onClick={onExit}>Return to Site</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  // ── Preview Mode ─────────────────────────────────────────────────────────

  if (previewCourseId) {
    return (
      <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {/* Preview Banner */}
        <div className="bg-amber-500 text-white px-4 py-2 flex items-center justify-between text-sm font-medium sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <IconEye />
            <span>ADMIN PREVIEW MODE — Viewing as student</span>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="bg-white text-amber-700 hover:bg-amber-50 border-amber-300"
            onClick={() => setPreviewCourseId(null)}
          >
            Exit Preview
          </Button>
        </div>
        <CoursePlayer user={user} onExit={() => setPreviewCourseId(null)} courseId={previewCourseId} />
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // RENDER
  // ══════════════════════════════════════════════════════════════════════════

  return (
    <div className="min-h-screen bg-background flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Sidebar ────────────────────────────────────────────────────────── */}
      <aside
        className={`${
          sidebarCollapsed ? "w-16" : "w-60"
        } bg-[hsl(213,50%,16%)] text-white flex flex-col transition-all duration-200 shrink-0 sticky top-0 h-screen`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-4 border-b border-white/10">
          <PixopharmLogo size={28} />
          {!sidebarCollapsed && <span className="font-semibold text-sm tracking-tight">Admin Console</span>}
        </div>

        {/* Nav Items */}
        <nav className="flex-1 py-4 space-y-1 px-2">
          {([
            { id: "dashboard" as AdminPage, label: "Dashboard", icon: <IconDashboard /> },
            { id: "courses" as AdminPage, label: "Courses", icon: <IconCourses /> },
            { id: "ai-generator" as AdminPage, label: "AI Generator ✦", icon: <IconAI /> },
            { id: "students" as AdminPage, label: "Students", icon: <IconStudents /> },
            { id: "analytics" as AdminPage, label: "Analytics", icon: <IconAnalytics /> },
            { id: "settings" as AdminPage, label: "Settings", icon: <IconSettings /> },
            { id: "help" as AdminPage, label: "Help & Guide", icon: <IconHelp /> },
          ]).map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activePage === item.id
                  ? "bg-white/15 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.icon}
              {!sidebarCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Collapse Toggle */}
        <div className="p-2 border-t border-white/10">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-full flex items-center justify-center p-2 rounded-lg text-white/40 hover:text-white/80 hover:bg-white/5 transition-colors"
          >
            <svg viewBox="0 0 24 24" className={`w-4 h-4 transition-transform ${sidebarCollapsed ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        </div>
      </aside>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b px-6 py-3 flex items-center justify-between sticky top-0 z-40">
          <h1 className="text-lg font-semibold text-foreground capitalize">{activePage}</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {(profile as AdminProfile | null)?.full_name ?? user.email}
            </span>
            <Button variant="outline" size="sm" onClick={onExit} className="gap-2">
              <IconLogOut />
              Exit Admin
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* A. DASHBOARD OVERVIEW                                          */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activePage === "dashboard" && (
            <div className="space-y-6">
              {/* Welcome */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Welcome back, {(profile as AdminProfile | null)?.full_name?.split(" ")[0] ?? "Admin"}
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Here is what is happening with your courses today.
                </p>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {coursesLoading || studentsLoading ? (
                  <>
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                  </>
                ) : (
                  <>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Total Courses</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-foreground">{dashboardStats.totalCourses}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {courses.filter((c) => c.status === "published").length} published
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Total Students</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-foreground">{dashboardStats.totalStudents}</div>
                        <p className="text-xs text-muted-foreground mt-1">Registered learners</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Active Enrollments</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-foreground">{dashboardStats.activeEnrollments}</div>
                        <p className="text-xs text-muted-foreground mt-1">Across all courses</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Avg Completion Rate</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-foreground">{dashboardStats.avgCompletion}%</div>
                        <Progress value={dashboardStats.avgCompletion} className="mt-2 h-1.5" />
                      </CardContent>
                    </Card>
                  </>
                )}
              </div>

              {/* Quick Actions + Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      className="w-full justify-start gap-2 bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
                      onClick={() => { setActivePage("courses"); setTimeout(openNewCourse, 100); }}
                    >
                      <IconPlus /> Create New Course
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                      onClick={() => setActivePage("students")}
                    >
                      <IconStudents /> View All Students
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                      onClick={() => setActivePage("analytics")}
                    >
                      <IconAnalytics /> View Analytics
                    </Button>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {analyticsLoading ? (
                      <TableSkeleton rows={4} />
                    ) : analytics?.recent_completions.length ? (
                      <div className="space-y-3">
                        {analytics.recent_completions.slice(0, 5).map((c, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                              <IconAward />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{c.student_name}</p>
                              <p className="text-muted-foreground text-xs">
                                Completed "{c.course_title}" on {new Date(c.completed_at).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">No recent completions yet.</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* B. COURSES MANAGEMENT                                          */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activePage === "courses" && (
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground">Course Management</h2>
                  <p className="text-sm text-muted-foreground">{courses.length} course{courses.length !== 1 ? "s" : ""} total</p>
                </div>
                <Button onClick={openNewCourse} className="gap-2 bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">
                  <IconPlus /> New Course
                </Button>
              </div>

              {/* Search */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                  <IconSearch />
                </div>
                <Input
                  placeholder="Search courses by title or level..."
                  value={courseSearch}
                  onChange={(e) => setCourseSearch(e.target.value)}
                  className="pl-9"
                />
              </div>

              {/* Courses grouped by level */}
              {coursesLoading ? (
                <TableSkeleton rows={6} />
              ) : courses.length === 0 ? (
                <EmptyState
                  title="No courses yet"
                  description="Create your first course to get started with the PIXOPHARM LMS."
                  action={
                    <Button onClick={openNewCourse} className="gap-2 bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">
                      <IconPlus /> Create Course
                    </Button>
                  }
                />
              ) : courseGroups.total === 0 ? (
                <div className="text-center py-10 text-muted-foreground text-sm">
                  No courses match &ldquo;{courseSearch}&rdquo;
                </div>
              ) : (
                <div className="space-y-5">
                  {courseGroups.groups
                    .filter((g) => g.courses.length > 0)
                    .map(({ level, color, courses: groupCourses }) => {
                      const isOpen = courseGroups.query ? true : !collapsedGroups.has(level);
                      return (
                        <div key={level}>
                          {/* Level Group Header */}
                          <button
                            onClick={() => toggleGroup(level)}
                            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-muted/60 transition-colors mb-2"
                          >
                            <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
                            <span className="font-semibold text-sm text-foreground">{level}</span>
                            <Badge variant="outline" className="text-xs h-5 px-1.5 font-normal">{groupCourses.length} course{groupCourses.length !== 1 ? "s" : ""}</Badge>
                            <div className="flex-1" />
                            <div className={`transition-transform duration-200 text-muted-foreground ${isOpen ? "rotate-90" : ""}`}>
                              <IconChevronRight />
                            </div>
                          </button>

                          {isOpen && (
                            <div className="space-y-2 pl-1">
                              {groupCourses.map((course) => {
                    const borderColor =
                      course.status === "published"
                        ? "border-l-emerald-500"
                        : course.status === "archived"
                          ? "border-l-gray-400"
                          : "border-l-amber-400";
                    return (
                    <Card key={course.id} className={`overflow-hidden border-l-4 ${borderColor}`}>
                      {/* Course Row */}
                      <div
                        className="flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => setExpandedCourseId(expandedCourseId === course.id ? null : course.id)}
                      >
                        <div className={`transition-transform ${expandedCourseId === course.id ? "rotate-90" : ""}`}>
                          <IconChevronRight />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-sm text-foreground truncate">{course.title}</h3>
                            {statusBadge(course.status)}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {course.skill_level} &middot; {course.duration_weeks} weeks &middot; {course.modules_count ?? 0} modules &middot; {course.enrolled_count ?? 0} enrolled
                          </p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          {/* Status Toggle Dropdown */}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 text-xs gap-1 px-2"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {course.status === "published" ? "Published" : course.status === "archived" ? "Archived" : "Draft"}
                                <svg viewBox="0 0 24 24" className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                                  <polyline points="6 9 12 15 18 9" />
                                </svg>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                              {course.status !== "published" && (
                                <DropdownMenuItem
                                  className="cursor-pointer text-emerald-700"
                                  onClick={() => requestStatusChange(course.id, course.title, "published")}
                                >
                                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                                  Publish
                                </DropdownMenuItem>
                              )}
                              {course.status !== "draft" && (
                                <DropdownMenuItem
                                  className="cursor-pointer text-amber-700"
                                  onClick={() => requestStatusChange(course.id, course.title, "draft")}
                                >
                                  <div className="w-2 h-2 rounded-full bg-amber-400 mr-2" />
                                  Move to Draft
                                </DropdownMenuItem>
                              )}
                              {course.status !== "archived" && (
                                <DropdownMenuItem
                                  className="cursor-pointer text-gray-600"
                                  onClick={() => requestStatusChange(course.id, course.title, "archived")}
                                >
                                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-2" />
                                  Archive
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            title="Preview as Student"
                            onClick={(e) => { e.stopPropagation(); setPreviewCourseId(course.slug); }}
                          >
                            <IconEye />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            onClick={(e) => { e.stopPropagation(); openEditCourse(course); }}
                          >
                            <IconEdit />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                            onClick={(e) => { e.stopPropagation(); confirmDelete("course", course.id, course.title); }}
                          >
                            <IconTrash />
                          </Button>
                        </div>
                      </div>

                      {/* Expanded: Modules & Lessons */}
                      {expandedCourseId === course.id && (
                        <div className="border-t bg-muted/30 px-4 py-4">
                          {courseDetailLoading ? (
                            <TableSkeleton rows={3} />
                          ) : courseDetail ? (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-foreground">Modules</h4>
                                <Button size="sm" variant="outline" className="gap-1 h-7 text-xs" onClick={() => openNewModule(course.id)}>
                                  <IconPlus /> Add Module
                                </Button>
                              </div>

                              {courseDetail.modules.length === 0 ? (
                                <p className="text-sm text-muted-foreground italic">No modules yet. Add one to get started.</p>
                              ) : (
                                courseDetail.modules.map((mod) => (
                                  <ModuleCard
                                    key={mod.id}
                                    mod={mod}
                                    onEditModule={() => openEditModule(mod)}
                                    onDeleteModule={() => confirmDelete("module", mod.id, mod.title)}
                                    onAddLesson={() => openNewLesson(mod.id)}
                                    onEditLesson={openEditLesson}
                                    onDeleteLesson={(l) => confirmDelete("lesson", l.id, l.title)}
                                    onAddQuiz={() => openNewQuiz(mod.id)}
                                    onEditQuiz={openEditQuiz}
                                    onDeleteQuiz={(q) => confirmDelete("quiz", q.id, q.question.slice(0, 40))}
                                  />
                                ))
                              )}
                            </div>
                          ) : (
                            <p className="text-sm text-muted-foreground">Failed to load course details.</p>
                          )}

                          {/* ── Survey Analytics ── */}
                          {(() => {
                            const slug = course.slug;
                            const stats = surveyStats[slug];
                            const loading = surveyLoading[slug];
                            const analysis = aiAnalysis[slug];
                            const analysisLoading = aiLoading[slug];

                            const generateAnalysis = async () => {
                              setAiLoading((prev) => ({ ...prev, [slug]: true }));
                              try {
                                const { supabase: sb } = await import("@/lib/supabase");
                                const { data, error } = await sb.functions.invoke("analyze-survey", {
                                  body: { course_id: slug },
                                });
                                if (error) throw error;
                                setAiAnalysis((prev) => ({ ...prev, [slug]: data ?? { summary: "No data returned.", recommendations: [] } }));
                              } catch {
                                setAiAnalysis((prev) => ({ ...prev, [slug]: { summary: "Analysis unavailable.", recommendations: [] } }));
                              } finally {
                                setAiLoading((prev) => ({ ...prev, [slug]: false }));
                              }
                            };

                            return (
                              <div className="mt-4 border-t pt-4 space-y-4">
                                <div className="flex items-center justify-between">
                                  <h4 className="text-sm font-semibold text-foreground">Survey Feedback</h4>
                                  {stats && stats.total_responses > 0 && !analysis && (
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="h-7 text-xs gap-1"
                                      onClick={generateAnalysis}
                                      disabled={!!analysisLoading}
                                    >
                                      {analysisLoading ? "Analysing…" : "✨ AI Analysis"}
                                    </Button>
                                  )}
                                </div>

                                {loading ? (
                                  <p className="text-xs text-muted-foreground">Loading survey data…</p>
                                ) : !stats || stats.total_responses === 0 ? (
                                  <p className="text-xs text-muted-foreground italic">No survey responses yet.</p>
                                ) : (
                                  <div className="space-y-4">
                                    {/* Stats grid */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                      {[
                                        { label: "Responses", value: stats.total_responses, suffix: "" },
                                        { label: "Overall", value: stats.avg_overall, suffix: " / 5" },
                                        { label: "Clarity", value: stats.avg_clarity, suffix: " / 5" },
                                        { label: "Recommend", value: stats.recommend_pct, suffix: "%" },
                                      ].map(({ label, value, suffix }) => (
                                        <div key={label} className="bg-muted/40 rounded-lg p-3 text-center">
                                          <p className="text-lg font-bold text-foreground">{value}{suffix}</p>
                                          <p className="text-xs text-muted-foreground">{label}</p>
                                        </div>
                                      ))}
                                    </div>

                                    {/* Difficulty distribution */}
                                    <div className="space-y-1">
                                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Difficulty</p>
                                      <div className="flex gap-2">
                                        {stats.difficulty.map((d) => (
                                          <div key={d.label} className="flex-1 text-center bg-muted/30 rounded-lg py-2">
                                            <p className="text-sm font-semibold">{d.pct}%</p>
                                            <p className="text-xs text-muted-foreground">{d.label}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    {/* AI Analysis */}
                                    {analysis && (
                                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                                        <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider">AI Theme Analysis</p>
                                        <p className="text-sm text-slate-700">{analysis.summary}</p>
                                        {analysis.recommendations.length > 0 && (
                                          <ul className="mt-2 space-y-1">
                                            {analysis.recommendations.map((rec, i) => (
                                              <li key={i} className="text-xs text-slate-600 flex gap-2">
                                                <span className="text-blue-500 shrink-0">→</span>{rec}
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </div>
                                    )}

                                    {/* Open-text responses */}
                                    {stats.responses.length > 0 && (
                                      <div className="space-y-2">
                                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Open Responses</p>
                                        <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                                          {stats.responses.map((r, i) => (
                                            <div key={i} className="bg-muted/30 rounded-lg p-3 text-xs space-y-1">
                                              <p className="text-muted-foreground">{new Date(r.submitted_at).toLocaleDateString()}</p>
                                              {r.liked_most && <p><span className="font-medium text-emerald-700">Liked:</span> {r.liked_most}</p>}
                                              {r.to_improve && <p><span className="font-medium text-amber-700">Improve:</span> {r.to_improve}</p>}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })()}
                        </div>
                      )}
                    </Card>
                    );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* C. AI COURSE GENERATOR                                         */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activePage === "ai-generator" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="text-xl font-bold text-foreground">PixoPharm AI Course Generator</h2>
                <p className="text-sm text-muted-foreground">
                  Generate a detailed, Caribbean-specific draft course using the PixoPharm AI generator. Two-phase generation: outline first, then rich lesson content per module. Saved as draft — review and publish when ready.
                </p>
              </div>

              {/* Form */}
              {!aiGenResult && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Course Specifications</CardTitle>
                    <CardDescription>The PixoPharm AI generator creates a two-phase deep course: outline + rich lesson content per module, with Caribbean regulations, clinical detail, callouts, key terms, and island comparisons built in.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {/* Title */}
                    <div className="space-y-1.5">
                      <Label htmlFor="ai-title">Course Title <span className="text-destructive">*</span></Label>
                      <Input
                        id="ai-title"
                        placeholder="e.g. Controlled Substances Management in the Caribbean"
                        value={aiGenForm.title}
                        onChange={(e) => setAiGenForm((f) => ({ ...f, title: e.target.value }))}
                        disabled={aiGenLoading}
                      />
                    </div>

                    {/* Skill Level + Duration row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label>Skill Level <span className="text-destructive">*</span></Label>
                        <Select
                          value={aiGenForm.skill_level}
                          onValueChange={(v) => setAiGenForm((f) => ({ ...f, skill_level: v as "Beginner" | "Intermediate" | "Advanced" }))}
                          disabled={aiGenLoading}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="ai-duration">Duration (weeks) <span className="text-destructive">*</span></Label>
                        <Input
                          id="ai-duration"
                          type="number"
                          min={1}
                          max={12}
                          value={aiGenForm.duration_weeks}
                          onChange={(e) => setAiGenForm((f) => ({ ...f, duration_weeks: Math.max(1, Math.min(12, parseInt(e.target.value) || 1)) }))}
                          disabled={aiGenLoading}
                        />
                      </div>
                    </div>

                    {/* Jurisdiction */}
                    <div className="space-y-1.5">
                      <Label>Target Jurisdiction <span className="text-muted-foreground text-xs">(optional)</span></Label>
                      <Select
                        value={aiGenForm.jurisdiction || "all"}
                        onValueChange={(v) => setAiGenForm((f) => ({ ...f, jurisdiction: v === "all" ? "" : v }))}
                        disabled={aiGenLoading}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="All CARICOM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All CARICOM</SelectItem>
                          <SelectItem value="Trinidad & Tobago">Trinidad & Tobago</SelectItem>
                          <SelectItem value="Jamaica">Jamaica</SelectItem>
                          <SelectItem value="Barbados">Barbados</SelectItem>
                          <SelectItem value="Guyana">Guyana</SelectItem>
                          <SelectItem value="Belize">Belize</SelectItem>
                          <SelectItem value="St. Lucia">St. Lucia</SelectItem>
                          <SelectItem value="Antigua & Barbuda">Antigua & Barbuda</SelectItem>
                          <SelectItem value="The Bahamas">The Bahamas</SelectItem>
                          <SelectItem value="Grenada">Grenada</SelectItem>
                          <SelectItem value="St. Vincent & the Grenadines">St. Vincent & the Grenadines</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Focus Areas */}
                    <div className="space-y-1.5">
                      <Label htmlFor="ai-focus">Focus Areas / Learning Objectives <span className="text-muted-foreground text-xs">(optional)</span></Label>
                      <Textarea
                        id="ai-focus"
                        placeholder="e.g. Emphasise compounding safety, cover CARICOM drug scheduling differences, include case studies from public hospital settings"
                        value={aiGenForm.focus_areas}
                        onChange={(e) => setAiGenForm((f) => ({ ...f, focus_areas: e.target.value }))}
                        disabled={aiGenLoading}
                        rows={3}
                      />
                    </div>

                    {aiGenError && (
                      <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
                        {aiGenError}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex gap-3">
                    <Button
                      onClick={async () => {
                        if (!aiGenForm.title.trim()) {
                          setAiGenError("Course title is required.");
                          return;
                        }
                        setAiGenError(null);
                        setAiGenLoading(true);
                        try {
                          const result = await generateCourse({
                            title: aiGenForm.title.trim(),
                            skill_level: aiGenForm.skill_level,
                            duration_weeks: aiGenForm.duration_weeks,
                            jurisdiction: aiGenForm.jurisdiction || undefined,
                            focus_areas: aiGenForm.focus_areas || undefined,
                            created_by: user.id,
                          });
                          setAiGenResult(result);
                          setEnhancingModules({});
                          // Fetch module list for the Enhance buttons
                          try {
                            const { supabase: sb } = await import("@/lib/supabase");
                            const { data: mods } = await sb
                              .from("modules")
                              .select("id, title")
                              .eq("course_id", result.course_id)
                              .order("order_index");
                            setAiGenModules(mods ?? []);
                          } catch { /* non-critical */ }
                          // Refresh course list so the new draft appears
                          fetchCourses().then(setCourses).catch(() => {});
                          toast({ title: "Course generated!", description: `${result.modules_count} modules, ${result.lessons_count} lessons saved as draft. Enhance modules with Opus below.` });
                        } catch (err) {
                          setAiGenError(err instanceof Error ? err.message : String(err));
                        } finally {
                          setAiGenLoading(false);
                        }
                      }}
                      disabled={aiGenLoading || !aiGenForm.title.trim()}
                      className="flex-1"
                    >
                      {aiGenLoading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                          Generating with PixoPharm AI (Opus)… 90–150 seconds
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <IconAI />
                          Generate Course
                        </span>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {/* Success State */}
              {aiGenResult && (
                <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="text-base text-green-800 dark:text-green-300 flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      Course Generated Successfully
                    </CardTitle>
                    <CardDescription>Saved as draft — enhance modules with Opus AI for richer content, then publish.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="rounded-lg bg-white dark:bg-zinc-900 p-3 border">
                        <div className="text-2xl font-bold text-foreground">{aiGenResult.modules_count}</div>
                        <div className="text-xs text-muted-foreground">Modules</div>
                      </div>
                      <div className="rounded-lg bg-white dark:bg-zinc-900 p-3 border">
                        <div className="text-2xl font-bold text-foreground">{aiGenResult.lessons_count}</div>
                        <div className="text-xs text-muted-foreground">Lessons</div>
                      </div>
                      <div className="rounded-lg bg-white dark:bg-zinc-900 p-3 border">
                        <div className="text-2xl font-bold text-foreground">{aiGenResult.questions_count}</div>
                        <div className="text-xs text-muted-foreground">Quiz Questions</div>
                      </div>
                    </div>

                    {/* Per-module Opus enhancement */}
                    {aiGenModules.length > 0 && (
                      <div className="rounded-lg border bg-white dark:bg-zinc-900 p-3 space-y-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Enhance Modules with Opus AI ✦</p>
                        <p className="text-xs text-muted-foreground">Each enhancement runs a dedicated Opus AI call — 5–7 rich content blocks + 3 quiz questions. Takes ~90s per module.</p>
                        {aiGenModules.map((mod) => {
                          const state = enhancingModules[mod.id];
                          return (
                            <div key={mod.id} className="flex items-center justify-between gap-3 py-1.5 border-b last:border-0">
                              <span className="text-sm text-foreground flex-1 min-w-0 truncate">{mod.title}</span>
                              {state === "done" ? (
                                <span className="text-xs text-green-700 dark:text-green-400 font-medium shrink-0 flex items-center gap-1">
                                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                                  Enhanced
                                </span>
                              ) : state === "error" ? (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-xs h-7 shrink-0 border-red-300 text-red-600"
                                  onClick={async () => {
                                    setEnhancingModules(prev => ({ ...prev, [mod.id]: "loading" }));
                                    try {
                                      await enhanceModule(mod.id);
                                      setEnhancingModules(prev => ({ ...prev, [mod.id]: "done" }));
                                    } catch {
                                      setEnhancingModules(prev => ({ ...prev, [mod.id]: "error" }));
                                    }
                                  }}
                                >
                                  Retry
                                </Button>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-xs h-7 shrink-0"
                                  disabled={state === "loading"}
                                  onClick={async () => {
                                    setEnhancingModules(prev => ({ ...prev, [mod.id]: "loading" }));
                                    try {
                                      await enhanceModule(mod.id);
                                      setEnhancingModules(prev => ({ ...prev, [mod.id]: "done" }));
                                    } catch {
                                      setEnhancingModules(prev => ({ ...prev, [mod.id]: "error" }));
                                    }
                                  }}
                                >
                                  {state === "loading" ? (
                                    <span className="flex items-center gap-1.5">
                                      <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                                      Enhancing…
                                    </span>
                                  ) : "Enhance ✦"}
                                </Button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        Slug: <code className="bg-muted px-1 rounded">{aiGenResult.course_slug}</code>
                      </p>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">
                        PixoPharm AI (Haiku)
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-3">
                    <Button onClick={() => setActivePage("courses")} className="flex-1">
                      View in Courses
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setAiGenResult(null);
                        setAiGenModules([]);
                        setEnhancingModules({});
                        setAiGenForm({ title: "", skill_level: "Beginner", duration_weeks: 4, jurisdiction: "", focus_areas: "" });
                      }}
                    >
                      Generate Another
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {/* Info callout */}
              {!aiGenResult && (
                <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20 dark:border-blue-800">
                  <CardContent className="pt-4">
                    <div className="flex gap-3">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      <div className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
                        <p className="font-medium">PixoPharm AI Course Generator — two-phase deep generation</p>
                        <ul className="text-xs space-y-0.5 text-blue-700 dark:text-blue-400 list-disc list-inside">
                          <li><strong>Phase 1:</strong> Course outline — modules, lesson titles, learning objectives (fast)</li>
                          <li><strong>Phase 2:</strong> All modules generated in parallel — rich lesson content, Caribbean callouts, key terms, safety warnings, video placeholders + 3 scenario-based quiz questions per module</li>
                          <li>Real drug names, real CARICOM regulations, real island comparisons (TT, Jamaica, Barbados, Guyana…)</li>
                          <li>Powered by PixoPharm AI — best available model, automatic fallback if needed</li>
                          <li>Connection-safe — course is saved to your database immediately; if the connection drops, find it in <strong>Courses</strong> with status "generating" or "draft"</li>
                        </ul>
                        <p className="text-xs mt-2 font-medium text-blue-800 dark:text-blue-300">Generation takes 90–150 seconds using Opus AI — keep this tab open until complete. The draft is fully editable with the TipTap editor.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* D. STUDENTS VIEW                                               */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activePage === "students" && (
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h2 className="text-xl font-bold text-foreground">Students</h2>
                  <p className="text-sm text-muted-foreground">{students.length} registered student{students.length !== 1 ? "s" : ""}</p>
                </div>
                <Button variant="outline" size="sm" className="gap-2" onClick={exportStudentsCSV}>
                  <IconDownload /> Export CSV
                </Button>
              </div>

              {/* Search & Sort */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="relative flex-1 min-w-[200px] max-w-sm">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <IconSearch />
                  </div>
                  <Input
                    placeholder="Search students..."
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select value={studentSort} onValueChange={(v) => setStudentSort(v as typeof studentSort)}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Sort by Name</SelectItem>
                    <SelectItem value="progress">Sort by Progress</SelectItem>
                    <SelectItem value="recent">Sort by Recent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Students Table */}
              {studentsLoading ? (
                <TableSkeleton rows={8} />
              ) : filteredStudents.length === 0 ? (
                <EmptyState
                  title={studentSearch ? "No matching students" : "No students yet"}
                  description={studentSearch ? "Try adjusting your search criteria." : "Students will appear here once they sign up."}
                />
              ) : (
                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Island</TableHead>
                        <TableHead className="text-center">Courses</TableHead>
                        <TableHead className="text-center">Progress</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Joined</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredStudents.map((s) => {
                        const enrollCount = s.enrollments?.length ?? 0;
                        const avgProg = getStudentAvgProgress(s);
                        const isActive = enrollCount > 0;
                        return (
                          <TableRow
                            key={s.id}
                            className="cursor-pointer hover:bg-muted/50"
                            onClick={() => setSelectedStudent(s)}
                          >
                            <TableCell className="font-medium">{s.full_name}</TableCell>
                            <TableCell className="text-muted-foreground">{s.island ?? "N/A"}</TableCell>
                            <TableCell className="text-center">{enrollCount}</TableCell>
                            <TableCell className="text-center">
                              <div className="flex items-center gap-2 justify-center">
                                <Progress value={avgProg} className="h-1.5 w-16" />
                                <span className="text-xs text-muted-foreground w-8">{avgProg}%</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant={isActive ? "default" : "secondary"} className={isActive ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100" : ""}>
                                {isActive ? "Active" : "Inactive"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right text-muted-foreground text-sm">
                              {s.created_at ? new Date(s.created_at).toLocaleDateString() : "N/A"}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </Card>
              )}
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* D. ANALYTICS                                                   */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activePage === "analytics" && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-foreground">Analytics</h2>

              {/* ── Survey Feedback Overview ──────────────────────────────── */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">Student Feedback</CardTitle>
                      <CardDescription>Survey responses collected across all completed courses</CardDescription>
                    </div>
                    {allSurveyStats && allSurveyStats.total_responses > 0 && (
                      <div className="flex gap-6 text-right shrink-0">
                        <div>
                          <p className="text-2xl font-bold text-foreground">{allSurveyStats.total_responses}</p>
                          <p className="text-xs text-muted-foreground">Responses</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-foreground">
                            <span className="text-amber-500">★</span> {allSurveyStats.avg_overall}
                          </p>
                          <p className="text-xs text-muted-foreground">Avg Rating</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-foreground">{allSurveyStats.recommend_pct}%</p>
                          <p className="text-xs text-muted-foreground">Recommend</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {allSurveyLoading ? (
                    <p className="text-sm text-muted-foreground py-4 text-center">Loading feedback data…</p>
                  ) : !allSurveyStats || allSurveyStats.total_responses === 0 ? (
                    <div className="py-8 text-center">
                      <p className="text-sm text-muted-foreground">No survey responses yet.</p>
                      <p className="text-xs text-muted-foreground mt-1">Responses appear here once students complete a course and submit feedback.</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-border">
                      {/* Column headers */}
                      <div className="grid grid-cols-[1fr_5rem_6rem_6rem_6rem] gap-3 py-2 px-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        <span>Course</span>
                        <span className="text-right">Resp.</span>
                        <span className="text-right">Overall</span>
                        <span className="text-right">Clarity</span>
                        <span className="text-right">Recommend</span>
                      </div>
                      {allSurveyStats.by_course.map((row: SurveyCourseRow) => {
                        const courseTitle = courses.find((c) => c.slug === row.course_id)?.title ?? row.course_id;
                        const isExpanded = expandedSurveyCourse === row.course_id;
                        return (
                          <div key={row.course_id}>
                            {/* Course summary row */}
                            <button
                              type="button"
                              onClick={() => setExpandedSurveyCourse(isExpanded ? null : row.course_id)}
                              className="w-full grid grid-cols-[1fr_5rem_6rem_6rem_6rem] gap-3 py-3 px-3 text-sm hover:bg-muted/50 transition-colors text-left rounded-md"
                            >
                              <span className="flex items-center gap-2 font-medium text-foreground truncate">
                                <span className={`text-xs transition-transform ${isExpanded ? "rotate-90" : ""}`}>▶</span>
                                <span className="truncate">{courseTitle}</span>
                                <span className="text-xs text-muted-foreground font-normal shrink-0">· {row.difficulty_mode}</span>
                              </span>
                              <span className="text-right text-muted-foreground">{row.total_responses}</span>
                              <span className="text-right">
                                <span className="text-amber-500">★</span> {row.avg_overall}
                              </span>
                              <span className="text-right text-muted-foreground">{row.avg_clarity}</span>
                              <span className={`text-right font-medium ${row.recommend_pct >= 80 ? "text-emerald-600" : row.recommend_pct >= 50 ? "text-amber-600" : "text-red-500"}`}>
                                {row.recommend_pct}%
                              </span>
                            </button>

                            {/* Individual responses (expanded) */}
                            {isExpanded && (
                              <div className="mx-3 mb-3 space-y-2 bg-muted/30 rounded-lg p-3">
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                                  {row.total_responses} Individual {row.total_responses === 1 ? "Response" : "Responses"}
                                </p>
                                {row.responses.map((resp, i) => (
                                  <div key={i} className="bg-background rounded-md border border-border p-3 space-y-1.5">
                                    <div className="flex items-center justify-between gap-3">
                                      <div className="flex items-center gap-3 text-sm flex-wrap">
                                        <span className="font-medium">
                                          {"★".repeat(resp.overall_rating)}{"☆".repeat(5 - resp.overall_rating)}
                                        </span>
                                        <span className="text-muted-foreground text-xs">Clarity: {resp.content_clarity}/5</span>
                                        <span className="text-xs px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600">{resp.difficulty}</span>
                                        {resp.would_recommend
                                          ? <span className="text-xs text-emerald-600 font-medium">✓ Recommends</span>
                                          : <span className="text-xs text-slate-400">✗ Would not recommend</span>
                                        }
                                      </div>
                                      <span className="text-xs text-muted-foreground shrink-0">
                                        {new Date(resp.submitted_at).toLocaleDateString("en-CA")}
                                      </span>
                                    </div>
                                    {resp.liked_most && (
                                      <p className="text-xs text-slate-700">
                                        <span className="font-medium text-slate-500">Liked: </span>{resp.liked_most}
                                      </p>
                                    )}
                                    {resp.to_improve && (
                                      <p className="text-xs text-slate-700">
                                        <span className="font-medium text-slate-500">Improve: </span>{resp.to_improve}
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {analyticsLoading ? (
                  <>
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                  </>
                ) : analytics ? (
                  <>
                    <Card>
                      <CardHeader className="pb-2"><CardDescription>Total Enrollments</CardDescription></CardHeader>
                      <CardContent><div className="text-3xl font-bold">{analytics.total_enrollments}</div></CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2"><CardDescription>Completion Rate</CardDescription></CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">{analytics.completion_rate}%</div>
                        <Progress value={analytics.completion_rate} className="mt-2 h-1.5" />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2"><CardDescription>Avg Quiz Score</CardDescription></CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">{analytics.average_score}%</div>
                        <Progress value={analytics.average_score} className="mt-2 h-1.5" />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2"><CardDescription>Certificates Issued</CardDescription></CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">{analytics.certificates_issued}</div>
                      </CardContent>
                    </Card>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground col-span-4">Analytics data unavailable.</p>
                )}
              </div>

              {/* Course Popularity (CSS bar chart) */}
              {analytics && analytics.course_popularity.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Course Popularity</CardTitle>
                    <CardDescription>Enrollments by course</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analytics.course_popularity.map((cp) => {
                        const maxEnrolled = Math.max(1, ...analytics.course_popularity.map((c) => c.enrolled));
                        const pct = Math.round((cp.enrolled / maxEnrolled) * 100);
                        return (
                          <div key={cp.course_id} className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium text-foreground truncate mr-4">{cp.title}</span>
                              <span className="text-muted-foreground shrink-0">{cp.enrolled} enrolled</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                              <div
                                className="h-2.5 rounded-full transition-all duration-500"
                                style={{ width: `${pct}%`, backgroundColor: "hsl(174 62% 32%)" }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Progress Distribution + Recent Completions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Progress Distribution */}
                {analytics && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Student Progress Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {analytics.progress_distribution.map((b) => {
                          const maxCount = Math.max(1, ...analytics.progress_distribution.map((d) => d.count));
                          const pct = Math.round((b.count / maxCount) * 100);
                          return (
                            <div key={b.bucket} className="space-y-1">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-foreground">{b.bucket}</span>
                                <span className="text-muted-foreground">{b.count} students</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div
                                  className="h-2 rounded-full transition-all duration-500 bg-[hsl(174,62%,32%)]"
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Recent Completions */}
                {analytics && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Recent Completions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {analytics.recent_completions.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No completions yet.</p>
                      ) : (
                        <div className="space-y-3">
                          {analytics.recent_completions.map((c, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm">
                              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs font-bold">
                                {c.student_name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-foreground truncate">{c.student_name}</p>
                                <p className="text-xs text-muted-foreground truncate">{c.course_title}</p>
                              </div>
                              <span className="text-xs text-muted-foreground shrink-0">
                                {new Date(c.completed_at).toLocaleDateString()}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* E. SETTINGS                                                    */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activePage === "settings" && (
            <div className="space-y-6 max-w-2xl">
              <h2 className="text-xl font-bold text-foreground">Settings</h2>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Admin Profile</CardTitle>
                  <CardDescription>Your account information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs text-muted-foreground">Name</Label>
                      <p className="font-medium text-foreground">{profile?.full_name ?? "N/A"}</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Email</Label>
                      <p className="font-medium text-foreground">{user.email ?? "N/A"}</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Role</Label>
                      <p className="font-medium text-foreground capitalize">{profile?.role ?? "N/A"}</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Island</Label>
                      <p className="font-medium text-foreground">{profile?.island ?? "Not set"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Platform Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Courses</span>
                    <span className="font-medium">{courses.length}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Published</span>
                    <span className="font-medium">{courses.filter((c) => c.status === "published").length}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Registered Students</span>
                    <span className="font-medium">{students.length}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platform Version</span>
                    <span className="font-medium">1.0.0</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════════ */}
          {/* F. HELP & GUIDE                                                */}
          {/* ════════════════════════════════════════════════════════════════ */}
          {activePage === "help" && (
            <AdminTutorial />
          )}
        </main>
      </div>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* DIALOGS                                                          */}
      {/* ══════════════════════════════════════════════════════════════════ */}

      {/* ── Course Dialog ─────────────────────────────────────────────── */}
      <Dialog open={showCourseDialog} onOpenChange={setShowCourseDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingCourse ? "Edit Course" : "Create New Course"}</DialogTitle>
            <DialogDescription>
              {editingCourse ? "Update the course details below." : "Fill in the details to create a new course."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            {/* Title */}
            <div className="space-y-1.5">
              <Label htmlFor="course-title">Title *</Label>
              <Input
                id="course-title"
                value={courseForm.title}
                onChange={(e) => {
                  const title = e.target.value;
                  setCourseForm((f) => ({
                    ...f,
                    title,
                    slug: !editingCourse ? slugify(title) : f.slug,
                  }));
                  setFormErrors((e) => ({ ...e, title: "" }));
                }}
                placeholder="e.g., Foundations of Pharmacy Practice"
              />
              {formErrors.title && <p className="text-xs text-destructive">{formErrors.title}</p>}
            </div>

            {/* Slug */}
            <div className="space-y-1.5">
              <Label htmlFor="course-slug">Slug *</Label>
              <Input
                id="course-slug"
                value={courseForm.slug}
                onChange={(e) => {
                  setCourseForm((f) => ({ ...f, slug: e.target.value }));
                  setFormErrors((er) => ({ ...er, slug: "" }));
                }}
                placeholder="foundations-pharmacy-practice"
              />
              {formErrors.slug && <p className="text-xs text-destructive">{formErrors.slug}</p>}
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <Label htmlFor="course-desc">Description *</Label>
              <Textarea
                id="course-desc"
                value={courseForm.description}
                onChange={(e) => {
                  setCourseForm((f) => ({ ...f, description: e.target.value }));
                  setFormErrors((er) => ({ ...er, description: "" }));
                }}
                placeholder="Course description..."
                rows={3}
              />
              {formErrors.description && <p className="text-xs text-destructive">{formErrors.description}</p>}
            </div>

            {/* Skill Level & Duration */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Skill Level</Label>
                <Select
                  value={courseForm.skill_level}
                  onValueChange={(v) => setCourseForm((f) => ({ ...f, skill_level: v }))}
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="course-weeks">Duration (weeks)</Label>
                <Input
                  id="course-weeks"
                  type="number"
                  min={1}
                  value={courseForm.duration_weeks}
                  onChange={(e) => setCourseForm((f) => ({ ...f, duration_weeks: parseInt(e.target.value) || 1 }))}
                />
              </div>
            </div>

            {/* Icon & Color */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Icon</Label>
                <Select value={courseForm.icon} onValueChange={(v) => setCourseForm((f) => ({ ...f, icon: v }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {["GraduationCap", "Calculator", "Pill", "HeartPulse", "Scale", "BrainCircuit", "MessageCircleHeart", "ShieldCheck"].map((i) => (
                      <SelectItem key={i} value={i}>{i}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Color</Label>
                <Select value={courseForm.color} onValueChange={(v) => setCourseForm((f) => ({ ...f, color: v }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {["blue", "emerald", "violet", "rose", "amber", "cyan", "teal", "orange"].map((c) => (
                      <SelectItem key={c} value={c}>
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full bg-${c}-500`} />
                          <span className="capitalize">{c}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="space-y-1.5">
              <Label>Prerequisites</Label>
              <div className="flex flex-wrap gap-1.5">
                {courses
                  .filter((c) => c.id !== editingCourse?.id)
                  .map((c) => {
                    const selected = courseForm.prerequisites.includes(c.id);
                    return (
                      <Badge
                        key={c.id}
                        variant={selected ? "default" : "outline"}
                        className={`cursor-pointer transition-colors ${selected ? "bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]" : "hover:bg-muted"}`}
                        onClick={() => {
                          setCourseForm((f) => ({
                            ...f,
                            prerequisites: selected
                              ? f.prerequisites.filter((p) => p !== c.id)
                              : [...f.prerequisites, c.id],
                          }));
                        }}
                      >
                        {c.title}
                      </Badge>
                    );
                  })}
                {courses.filter((c) => c.id !== editingCourse?.id).length === 0 && (
                  <p className="text-xs text-muted-foreground">No other courses available for prerequisites.</p>
                )}
              </div>
            </div>

            {/* What You'll Learn (dynamic list) */}
            <div className="space-y-1.5">
              <Label>What You Will Learn</Label>
              <div className="space-y-2">
                {courseForm.what_youll_learn.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Input
                      value={item}
                      onChange={(e) => {
                        const arr = [...courseForm.what_youll_learn];
                        arr[idx] = e.target.value;
                        setCourseForm((f) => ({ ...f, what_youll_learn: arr }));
                      }}
                      placeholder={`Learning outcome ${idx + 1}`}
                    />
                    {courseForm.what_youll_learn.length > 1 && (
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-destructive shrink-0"
                        onClick={() => {
                          const arr = courseForm.what_youll_learn.filter((_, i) => i !== idx);
                          setCourseForm((f) => ({ ...f, what_youll_learn: arr }));
                        }}
                      >
                        <IconTrash />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="gap-1 text-xs"
                  onClick={() => setCourseForm((f) => ({ ...f, what_youll_learn: [...f.what_youll_learn, ""] }))}
                >
                  <IconPlus /> Add item
                </Button>
              </div>
            </div>

            {/* Status */}
            <div className="space-y-1.5">
              <Label>Status</Label>
              <Select
                value={courseForm.status}
                onValueChange={(v) => setCourseForm((f) => ({ ...f, status: v as typeof f.status }))}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="flex items-center justify-between sm:justify-between">
            <div>
              {editingCourse && (
                <Button
                  variant="outline"
                  onClick={handlePublishToggle}
                  className={
                    editingCourse.status === "published"
                      ? "text-amber-700 border-amber-300 hover:bg-amber-50"
                      : "text-emerald-700 border-emerald-300 hover:bg-emerald-50"
                  }
                >
                  {editingCourse.status === "published" ? "Unpublish" : "Publish"}
                </Button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={handleSaveCourse} className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">
                {editingCourse ? "Save Changes" : "Create Course"}
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Module Dialog ─────────────────────────────────────────────── */}
      <Dialog open={showModuleDialog} onOpenChange={setShowModuleDialog}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingModule ? "Edit Module" : "Create New Module"}</DialogTitle>
            <DialogDescription>
              {editingModule ? "Update the module details." : "Add a new module to this course."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label htmlFor="module-title">Title *</Label>
              <Input
                id="module-title"
                value={moduleForm.title}
                onChange={(e) => {
                  setModuleForm((f) => ({ ...f, title: e.target.value }));
                  setFormErrors((er) => ({ ...er, title: "" }));
                }}
                placeholder="Module title"
              />
              {formErrors.title && <p className="text-xs text-destructive">{formErrors.title}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="module-desc">Description</Label>
              <Textarea
                id="module-desc"
                value={moduleForm.description}
                onChange={(e) => setModuleForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="Module description"
                rows={2}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="module-order">Display Order</Label>
              <Input
                id="module-order"
                type="number"
                min={1}
                value={moduleForm.order_index}
                onChange={(e) => setModuleForm((f) => ({ ...f, order_index: parseInt(e.target.value) || 1 }))}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSaveModule} className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">
              {editingModule ? "Save Changes" : "Create Module"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Lesson Dialog (with Content Block Editor) ──────────────── */}
      <Dialog open={showLessonDialog} onOpenChange={setShowLessonDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingLesson ? "Edit Lesson" : "Create New Lesson"}</DialogTitle>
            <DialogDescription>
              {editingLesson ? "Update the lesson details and content." : "Add a new lesson with content blocks."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label htmlFor="lesson-title">Title *</Label>
              <Input
                id="lesson-title"
                value={lessonForm.title}
                onChange={(e) => {
                  setLessonForm((f) => ({ ...f, title: e.target.value }));
                  setFormErrors((er) => ({ ...er, title: "" }));
                }}
                placeholder="Lesson title"
              />
              {formErrors.title && <p className="text-xs text-destructive">{formErrors.title}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="lesson-duration">Duration (minutes)</Label>
                <Input
                  id="lesson-duration"
                  type="number"
                  min={1}
                  value={lessonForm.duration_minutes}
                  onChange={(e) => setLessonForm((f) => ({ ...f, duration_minutes: parseInt(e.target.value) || 15 }))}
                  placeholder="15"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lesson-order">Display Order</Label>
                <Input
                  id="lesson-order"
                  type="number"
                  min={1}
                  value={lessonForm.order_index}
                  onChange={(e) => setLessonForm((f) => ({ ...f, order_index: parseInt(e.target.value) || 1 }))}
                />
              </div>
            </div>

            <Separator />

            {/* TipTap WYSIWYG Editor */}
            <TipTapLessonEditor
              blocks={lessonForm.content as ContentBlock[]}
              onChange={(blocks) => setLessonForm((f) => ({ ...f, content: blocks }))}
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSaveLesson} className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">
              {editingLesson ? "Save Changes" : "Create Lesson"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Quiz Question Dialog ──────────────────────────────────────── */}
      <Dialog open={showQuizDialog} onOpenChange={setShowQuizDialog}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingQuiz ? "Edit Quiz Question" : "Create Quiz Question"}</DialogTitle>
            <DialogDescription>
              {editingQuiz ? "Update the quiz question." : "Add a new quiz question to this module."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            {/* Question Type Selector */}
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <Label>Question Type</Label>
                <Select
                  value={quizForm.question_type}
                  onValueChange={(val) => {
                    const qt = val as QuestionType;
                    setQuizForm((f) => ({
                      ...f,
                      question_type: qt,
                      question_data: qt === "true_false" ? { correct_answer: true } :
                        qt === "matching" ? { pairs: [{ left: "", right: "" }, { left: "", right: "" }] } :
                        qt === "fill_in_blank" ? { acceptable_answers: [""] } :
                        qt === "multiple_select" ? { correct_indices: [] } :
                        qt === "ordering" ? { correct_order: [] } :
                        qt === "scenario" ? { context: "" } : {},
                    }));
                  }}
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="multiple_choice">Multiple Choice</SelectItem>
                    <SelectItem value="multiple_select">Multiple Select</SelectItem>
                    <SelectItem value="ordering">Ordering</SelectItem>
                    <SelectItem value="matching">Matching</SelectItem>
                    <SelectItem value="fill_in_blank">Fill in the Blank</SelectItem>
                    <SelectItem value="true_false">True / False</SelectItem>
                    <SelectItem value="scenario">Scenario</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label>Difficulty</Label>
                <Select
                  value={quizForm.difficulty || "_none"}
                  onValueChange={(val) => setQuizForm((f) => ({ ...f, difficulty: val === "_none" ? "" : val }))}
                >
                  <SelectTrigger><SelectValue placeholder="None" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="_none">None</SelectItem>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label>Bloom&apos;s Level</Label>
                <Select
                  value={quizForm.blooms_level || "_none"}
                  onValueChange={(val) => setQuizForm((f) => ({ ...f, blooms_level: val === "_none" ? "" : val }))}
                >
                  <SelectTrigger><SelectValue placeholder="None" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="_none">None</SelectItem>
                    <SelectItem value="remember">Remember</SelectItem>
                    <SelectItem value="understand">Understand</SelectItem>
                    <SelectItem value="apply">Apply</SelectItem>
                    <SelectItem value="analyze">Analyze</SelectItem>
                    <SelectItem value="evaluate">Evaluate</SelectItem>
                    <SelectItem value="create">Create</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Question text */}
            <div className="space-y-1.5">
              <Label htmlFor="quiz-question">Question *</Label>
              <Textarea
                id="quiz-question"
                value={quizForm.question}
                onChange={(e) => {
                  setQuizForm((f) => ({ ...f, question: e.target.value }));
                  setFormErrors((er) => ({ ...er, question: "" }));
                }}
                placeholder="Enter the question..."
                rows={2}
              />
              {formErrors.question && <p className="text-xs text-destructive">{formErrors.question}</p>}
            </div>

            {/* Scenario context textarea */}
            {quizForm.question_type === "scenario" && (
              <div className="space-y-1.5">
                <Label>Scenario Context *</Label>
                <Textarea
                  value={quizForm.question_data?.context ?? ""}
                  onChange={(e) =>
                    setQuizForm((f) => ({
                      ...f,
                      question_data: { ...f.question_data, context: e.target.value },
                    }))
                  }
                  placeholder="Describe the case scenario..."
                  rows={4}
                />
                {formErrors.context && <p className="text-xs text-destructive">{formErrors.context}</p>}
              </div>
            )}

            {/* Multiple Choice: options + radio for correct */}
            {(quizForm.question_type === "multiple_choice" || quizForm.question_type === "scenario") && (
              <div className="space-y-2">
                <Label>Options * <span className="text-xs text-muted-foreground font-normal">(select the correct answer)</span></Label>
                {quizForm.options.map((opt, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="correct-answer"
                      checked={quizForm.correct_answer === idx}
                      onChange={() => setQuizForm((f) => ({ ...f, correct_answer: idx }))}
                      className="accent-[hsl(174,62%,32%)]"
                    />
                    <Input
                      value={opt}
                      onChange={(e) => {
                        const arr = [...quizForm.options];
                        arr[idx] = e.target.value;
                        setQuizForm((f) => ({ ...f, options: arr }));
                        setFormErrors((er) => ({ ...er, options: "" }));
                      }}
                      placeholder={`Option ${idx + 1}`}
                    />
                  </div>
                ))}
                {formErrors.options && <p className="text-xs text-destructive">{formErrors.options}</p>}
              </div>
            )}

            {/* Multiple Select: options + checkboxes for correct ones */}
            {quizForm.question_type === "multiple_select" && (
              <div className="space-y-2">
                <Label>Options * <span className="text-xs text-muted-foreground font-normal">(check all correct answers)</span></Label>
                {quizForm.options.map((opt, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={quizForm.question_data?.correct_indices?.includes(idx) ?? false}
                      onChange={(e) => {
                        const current = quizForm.question_data?.correct_indices ?? [];
                        const next = e.target.checked
                          ? [...current, idx]
                          : current.filter((i) => i !== idx);
                        setQuizForm((f) => ({
                          ...f,
                          question_data: { ...f.question_data, correct_indices: next },
                        }));
                        setFormErrors((er) => ({ ...er, correct: "" }));
                      }}
                      className="accent-[hsl(174,62%,32%)] w-4 h-4"
                    />
                    <Input
                      value={opt}
                      onChange={(e) => {
                        const arr = [...quizForm.options];
                        arr[idx] = e.target.value;
                        setQuizForm((f) => ({ ...f, options: arr }));
                        setFormErrors((er) => ({ ...er, options: "" }));
                      }}
                      placeholder={`Option ${idx + 1}`}
                    />
                  </div>
                ))}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-xs gap-1"
                  onClick={() => setQuizForm((f) => ({ ...f, options: [...f.options, ""] }))}
                >
                  <IconPlus /> Add Option
                </Button>
                {formErrors.options && <p className="text-xs text-destructive">{formErrors.options}</p>}
                {formErrors.correct && <p className="text-xs text-destructive">{formErrors.correct}</p>}
              </div>
            )}

            {/* Ordering: items list (correct order = the order entered) */}
            {quizForm.question_type === "ordering" && (
              <div className="space-y-2">
                <Label>Items <span className="text-xs text-muted-foreground font-normal">(enter in the correct order)</span></Label>
                {quizForm.options.map((opt, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-6 text-center">{idx + 1}.</span>
                    <Input
                      value={opt}
                      onChange={(e) => {
                        const arr = [...quizForm.options];
                        arr[idx] = e.target.value;
                        setQuizForm((f) => ({ ...f, options: arr }));
                        setFormErrors((er) => ({ ...er, options: "" }));
                      }}
                      placeholder={`Item ${idx + 1}`}
                    />
                    {quizForm.options.length > 2 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-destructive"
                        onClick={() => {
                          const arr = quizForm.options.filter((_, i) => i !== idx);
                          setQuizForm((f) => ({ ...f, options: arr }));
                        }}
                      >
                        <IconTrash />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-xs gap-1"
                  onClick={() => setQuizForm((f) => ({ ...f, options: [...f.options, ""] }))}
                >
                  <IconPlus /> Add Item
                </Button>
                {formErrors.options && <p className="text-xs text-destructive">{formErrors.options}</p>}
                <p className="text-xs text-muted-foreground">The correct order is the order you enter them in. They will be shuffled when displayed to the student.</p>
              </div>
            )}

            {/* Matching: pairs editor */}
            {quizForm.question_type === "matching" && (
              <div className="space-y-2">
                <Label>Matching Pairs *</Label>
                <div className="grid grid-cols-[1fr_auto_1fr_auto] gap-2 items-center">
                  <span className="text-xs text-muted-foreground font-semibold">Left</span>
                  <span />
                  <span className="text-xs text-muted-foreground font-semibold">Right</span>
                  <span />
                  {(quizForm.question_data?.pairs ?? []).map((pair, idx) => (
                    <>
                      <Input
                        key={`left-${idx}`}
                        value={pair.left}
                        onChange={(e) => {
                          const pairs = [...(quizForm.question_data?.pairs ?? [])];
                          pairs[idx] = { ...pairs[idx], left: e.target.value };
                          setQuizForm((f) => ({ ...f, question_data: { ...f.question_data, pairs } }));
                          setFormErrors((er) => ({ ...er, pairs: "" }));
                        }}
                        placeholder={`Left ${idx + 1}`}
                      />
                      <span className="text-muted-foreground text-xs text-center">→</span>
                      <Input
                        key={`right-${idx}`}
                        value={pair.right}
                        onChange={(e) => {
                          const pairs = [...(quizForm.question_data?.pairs ?? [])];
                          pairs[idx] = { ...pairs[idx], right: e.target.value };
                          setQuizForm((f) => ({ ...f, question_data: { ...f.question_data, pairs } }));
                          setFormErrors((er) => ({ ...er, pairs: "" }));
                        }}
                        placeholder={`Right ${idx + 1}`}
                      />
                      {(quizForm.question_data?.pairs?.length ?? 0) > 2 && (
                        <Button
                          key={`del-${idx}`}
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-destructive"
                          onClick={() => {
                            const pairs = (quizForm.question_data?.pairs ?? []).filter((_, i) => i !== idx);
                            setQuizForm((f) => ({ ...f, question_data: { ...f.question_data, pairs } }));
                          }}
                        >
                          <IconTrash />
                        </Button>
                      )}
                      {(quizForm.question_data?.pairs?.length ?? 0) <= 2 && <span key={`spacer-${idx}`} />}
                    </>
                  ))}
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-xs gap-1"
                  onClick={() => {
                    const pairs = [...(quizForm.question_data?.pairs ?? []), { left: "", right: "" }];
                    setQuizForm((f) => ({ ...f, question_data: { ...f.question_data, pairs } }));
                  }}
                >
                  <IconPlus /> Add Pair
                </Button>
                {formErrors.pairs && <p className="text-xs text-destructive">{formErrors.pairs}</p>}
                <p className="text-xs text-muted-foreground">The right column will be shuffled when displayed to the student.</p>
              </div>
            )}

            {/* Fill in the Blank: acceptable answers list */}
            {quizForm.question_type === "fill_in_blank" && (
              <div className="space-y-2">
                <Label>Acceptable Answers *</Label>
                {(quizForm.question_data?.acceptable_answers ?? [""]).map((ans, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Input
                      value={ans}
                      onChange={(e) => {
                        const answers = [...(quizForm.question_data?.acceptable_answers ?? [""])];
                        answers[idx] = e.target.value;
                        setQuizForm((f) => ({
                          ...f,
                          question_data: { ...f.question_data, acceptable_answers: answers },
                        }));
                        setFormErrors((er) => ({ ...er, answers: "" }));
                      }}
                      placeholder={`Answer variant ${idx + 1}`}
                    />
                    {(quizForm.question_data?.acceptable_answers?.length ?? 1) > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-destructive"
                        onClick={() => {
                          const answers = (quizForm.question_data?.acceptable_answers ?? []).filter((_, i) => i !== idx);
                          setQuizForm((f) => ({
                            ...f,
                            question_data: { ...f.question_data, acceptable_answers: answers },
                          }));
                        }}
                      >
                        <IconTrash />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-xs gap-1"
                  onClick={() => {
                    const answers = [...(quizForm.question_data?.acceptable_answers ?? []), ""];
                    setQuizForm((f) => ({
                      ...f,
                      question_data: { ...f.question_data, acceptable_answers: answers },
                    }));
                  }}
                >
                  <IconPlus /> Add Variant
                </Button>
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="checkbox"
                    checked={quizForm.question_data?.case_sensitive ?? false}
                    onChange={(e) =>
                      setQuizForm((f) => ({
                        ...f,
                        question_data: { ...f.question_data, case_sensitive: e.target.checked },
                      }))
                    }
                    className="accent-[hsl(174,62%,32%)]"
                  />
                  <span className="text-xs text-muted-foreground">Case sensitive</span>
                </div>
                {formErrors.answers && <p className="text-xs text-destructive">{formErrors.answers}</p>}
              </div>
            )}

            {/* True / False: toggle */}
            {quizForm.question_type === "true_false" && (
              <div className="space-y-2">
                <Label>Correct Answer</Label>
                <div className="flex gap-3">
                  {[true, false].map((val) => (
                    <button
                      key={String(val)}
                      type="button"
                      onClick={() =>
                        setQuizForm((f) => ({
                          ...f,
                          question_data: { ...f.question_data, correct_answer: val },
                        }))
                      }
                      className={`flex-1 px-4 py-3 rounded-lg border-2 text-sm font-bold transition-all ${
                        quizForm.question_data?.correct_answer === val
                          ? "border-[hsl(174,62%,32%)] bg-[hsl(174,45%,96%)] text-[hsl(174,62%,32%)]"
                          : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
                      }`}
                    >
                      {val ? "TRUE" : "FALSE"}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Explanation (shown for all types) */}
            <div className="space-y-1.5">
              <Label htmlFor="quiz-explanation">Explanation</Label>
              <Textarea
                id="quiz-explanation"
                value={quizForm.explanation}
                onChange={(e) => setQuizForm((f) => ({ ...f, explanation: e.target.value }))}
                placeholder="Explain why this is the correct answer..."
                rows={2}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSaveQuiz} className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">
              {editingQuiz ? "Save Changes" : "Create Question"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Delete Confirmation Dialog ────────────────────────────────── */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this {deleteTarget?.type}? This action cannot be undone.
              {deleteTarget?.type === "course" && " All modules and lessons within this course will also be deleted."}
              {deleteTarget?.type === "module" && " All lessons within this module will also be deleted."}
            </DialogDescription>
          </DialogHeader>
          <div className="py-2">
            <p className="text-sm font-medium text-foreground">"{deleteTarget?.name}"</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleDelete}>
              Delete {deleteTarget?.type}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Status Change Confirmation Dialog ────────────────────────── */}
      <Dialog open={showStatusDialog} onOpenChange={setShowStatusDialog}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>
              {statusChangeTarget?.newStatus === "published" ? "Publish Course" : statusChangeTarget?.newStatus === "draft" ? "Unpublish Course" : "Archive Course"}
            </DialogTitle>
            <DialogDescription>
              {statusChangeTarget?.newStatus === "published"
                ? "This will make the course visible to all students. Continue?"
                : statusChangeTarget?.newStatus === "draft"
                  ? "This will hide the course from students. Continue?"
                  : "This will archive the course. Students will no longer be able to access it."}
            </DialogDescription>
          </DialogHeader>
          <div className="py-2">
            <p className="text-sm font-medium text-foreground">"{statusChangeTarget?.courseName}"</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              onClick={handleStatusChange}
              className={
                statusChangeTarget?.newStatus === "published"
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : statusChangeTarget?.newStatus === "draft"
                    ? "bg-amber-600 hover:bg-amber-700"
                    : "bg-gray-600 hover:bg-gray-700"
              }
            >
              {statusChangeTarget?.newStatus === "published" ? "Publish" : statusChangeTarget?.newStatus === "draft" ? "Move to Draft" : "Archive"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Student Detail Dialog ─────────────────────────────────────── */}
      <Dialog open={!!selectedStudent} onOpenChange={(open) => { if (!open) setSelectedStudent(null); }}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Student Details</DialogTitle>
            <DialogDescription>{selectedStudent?.full_name}</DialogDescription>
          </DialogHeader>

          {selectedStudent && (
            <div className="space-y-4 py-2">
              {/* Profile Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <Label className="text-xs text-muted-foreground">Name</Label>
                  <p className="font-medium">{selectedStudent.full_name}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Island</Label>
                  <p className="font-medium">{selectedStudent.island ?? "Not set"}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Joined</Label>
                  <p className="font-medium">{selectedStudent.created_at ? new Date(selectedStudent.created_at).toLocaleDateString() : "N/A"}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Enrolled Courses</Label>
                  <p className="font-medium">{selectedStudent.enrollments?.length ?? 0}</p>
                </div>
              </div>

              <Separator />

              {/* Per-Course Progress */}
              <div>
                <h4 className="text-sm font-semibold mb-3">Course Progress</h4>
                {!selectedStudent.progress?.length ? (
                  <p className="text-sm text-muted-foreground">No course progress data available.</p>
                ) : (
                  <div className="space-y-3">
                    {selectedStudent.progress.map((p) => {
                      const course = courses.find((c) => c.id === p.course_id);
                      const completedCount = p.completed_lessons?.length ?? 0;
                      const pct = Math.min(100, Math.round((completedCount / 30) * 100));
                      const quizEntries = Object.entries(p.quiz_scores ?? {});
                      const avgQuizScore = quizEntries.length > 0
                        ? Math.round(quizEntries.reduce((sum, [, s]) => sum + (s.score / Math.max(1, s.total)) * 100, 0) / quizEntries.length)
                        : 0;

                      return (
                        <Card key={p.course_id} className="p-3">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-medium">{course?.title ?? p.course_id}</h5>
                            <span className="text-xs text-muted-foreground">{pct}% complete</span>
                          </div>
                          <Progress value={pct} className="h-1.5 mb-2" />
                          <div className="flex gap-4 text-xs text-muted-foreground">
                            <span>{completedCount} lessons completed</span>
                            <span>{quizEntries.length} quizzes taken</span>
                            {quizEntries.length > 0 && <span>Avg score: {avgQuizScore}%</span>}
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ============================================================================
// MODULE CARD SUB-COMPONENT
// ============================================================================

interface ModuleCardProps {
  mod: Module & { lessons: Lesson[]; quiz_questions: QuizQuestion[] };
  onEditModule: () => void;
  onDeleteModule: () => void;
  onAddLesson: () => void;
  onEditLesson: (l: Lesson) => void;
  onDeleteLesson: (l: Lesson) => void;
  onAddQuiz: () => void;
  onEditQuiz: (q: QuizQuestion) => void;
  onDeleteQuiz: (q: QuizQuestion) => void;
}

function ModuleCard({
  mod,
  onEditModule,
  onDeleteModule,
  onAddLesson,
  onEditLesson,
  onDeleteLesson,
  onAddQuiz,
  onEditQuiz,
  onDeleteQuiz,
}: ModuleCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border rounded-lg bg-white overflow-hidden">
      {/* Module Header */}
      <div
        className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-muted/30 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className={`transition-transform ${expanded ? "rotate-90" : ""}`}>
          <IconChevronRight />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground">M{mod.order_index}</span>
            <h4 className="text-sm font-medium text-foreground truncate">{mod.title}</h4>
          </div>
          <p className="text-xs text-muted-foreground">
            {mod.lessons?.length ?? 0} lessons &middot; {mod.quiz_questions?.length ?? 0} quiz questions
          </p>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <Button size="sm" variant="ghost" className="h-7 w-7 p-0" onClick={(e) => { e.stopPropagation(); onEditModule(); }}>
            <IconEdit />
          </Button>
          <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-destructive hover:text-destructive" onClick={(e) => { e.stopPropagation(); onDeleteModule(); }}>
            <IconTrash />
          </Button>
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="border-t px-3 py-3 space-y-3">
          {/* Lessons */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Lessons</h5>
              <Button size="sm" variant="ghost" className="h-6 text-xs gap-1 px-2" onClick={onAddLesson}>
                <IconPlus /> Add
              </Button>
            </div>
            {mod.lessons.length === 0 ? (
              <p className="text-xs text-muted-foreground italic">No lessons yet.</p>
            ) : (
              <div className="space-y-1">
                {mod.lessons.map((lesson) => {
                  const contentBlocks = Array.isArray(lesson.content) ? (lesson.content as ContentBlock[]) : [];
                  const firstTextBlock = contentBlocks.find(
                    (b): b is Extract<ContentBlock, { type: "text" }> => b.type === "text"
                  );
                  const contentPreview = firstTextBlock
                    ? firstTextBlock.body.slice(0, 60) + (firstTextBlock.body.length > 60 ? "..." : "")
                    : contentBlocks.length > 0
                      ? `${contentBlocks.length} content block${contentBlocks.length !== 1 ? "s" : ""}`
                      : "No content";
                  return (
                    <div key={lesson.id} className="flex items-start gap-2 px-2 py-1.5 rounded hover:bg-muted/50 group text-sm">
                      <span className="text-muted-foreground text-xs w-4 shrink-0 mt-0.5">{lesson.order_index}.</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="truncate text-foreground font-medium">{lesson.title}</span>
                          <span className="text-xs text-muted-foreground shrink-0">{lesson.duration_minutes} min</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate mt-0.5">{contentPreview}</p>
                      </div>
                      <div className="flex items-center gap-0.5 shrink-0 opacity-0 group-hover:opacity-100">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0"
                          onClick={() => onEditLesson(lesson)}
                        >
                          <IconEdit />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0 text-destructive"
                          onClick={() => onDeleteLesson(lesson)}
                        >
                          <IconTrash />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <Separator />

          {/* Quiz Questions */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Quiz Questions</h5>
              <Button size="sm" variant="ghost" className="h-6 text-xs gap-1 px-2" onClick={onAddQuiz}>
                <IconPlus /> Add
              </Button>
            </div>
            {mod.quiz_questions.length === 0 ? (
              <p className="text-xs text-muted-foreground italic">No quiz questions yet.</p>
            ) : (
              <div className="space-y-1">
                {mod.quiz_questions.map((q, idx) => {
                  const qt = q.question_type ?? "multiple_choice";
                  const typeLabels: Record<string, string> = {
                    multiple_choice: "MC",
                    multiple_select: "MS",
                    ordering: "ORD",
                    matching: "MATCH",
                    fill_in_blank: "FIB",
                    true_false: "T/F",
                    scenario: "SCEN",
                  };
                  const correctOption = qt === "multiple_choice" || qt === "scenario"
                    ? q.options?.[q.correct_answer] ?? ""
                    : qt === "true_false"
                    ? String(q.question_data?.correct_answer ?? "")
                    : qt === "fill_in_blank"
                    ? (q.question_data?.acceptable_answers ?? []).join(" / ")
                    : "";
                  return (
                    <div key={q.id} className="flex items-start gap-2 px-2 py-1.5 rounded hover:bg-muted/50 group text-sm">
                      <span className="text-muted-foreground text-xs w-6 shrink-0 mt-0.5">Q{idx + 1}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-foreground">{q.question}</span>
                          {qt !== "multiple_choice" && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                              {typeLabels[qt] ?? qt}
                            </span>
                          )}
                          {q.difficulty && (
                            <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold border ${
                              q.difficulty === "easy" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                              q.difficulty === "medium" ? "bg-blue-50 text-blue-700 border-blue-200" :
                              q.difficulty === "hard" ? "bg-amber-50 text-amber-700 border-amber-200" :
                              "bg-red-50 text-red-700 border-red-200"
                            }`}>
                              {q.difficulty}
                            </span>
                          )}
                        </div>
                        {correctOption && (
                          <div className="flex items-center gap-1 mt-0.5">
                            <svg viewBox="0 0 24 24" className="w-3 h-3 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span className="text-xs text-emerald-700 truncate">{correctOption}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-0.5 shrink-0 opacity-0 group-hover:opacity-100">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0"
                          onClick={() => onEditQuiz(q)}
                        >
                          <IconEdit />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0 text-destructive"
                          onClick={() => onDeleteQuiz(q)}
                        >
                          <IconTrash />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
