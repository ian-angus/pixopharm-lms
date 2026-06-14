// ============================================================================
// PIXOPHARM LMS — Admin API
// Supabase query wrappers for all admin CRUD operations.
// ============================================================================

import { supabase } from "@/lib/supabase";

// ── Shared Types ─────────────────────────────────────────────────────────────

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  skill_level: string;
  duration_weeks: number;
  icon: string;
  color: string;
  prerequisites: string[];
  what_youll_learn: string[];
  status: "draft" | "published" | "archived";
  order: number;
  domain_id: string | null;
  created_at: string;
  updated_at: string;
  // Joined counts (populated by specific queries)
  modules_count?: number;
  enrolled_count?: number;
}

export interface Domain {
  id: string;
  name: string;
  icon: string | null;
  color: string | null;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface QuizCase {
  id: string;
  module_id: string;
  title: string | null;
  vignette: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface Module {
  id: string;
  course_id: string;
  title: string;
  description: string;
  order_index: number;
  created_at: string;
  updated_at: string;
  // Joined counts
  lessons_count?: number;
  quiz_count?: number;
}

export interface Lesson {
  id: string;
  module_id: string;
  title: string;
  content: unknown; // JSONB content blocks
  order_index: number;
  duration_minutes: number;
  created_at: string;
  updated_at: string;
}

export type QuestionType =
  | 'multiple_choice'
  | 'multiple_select'
  | 'ordering'
  | 'matching'
  | 'fill_in_blank'
  | 'true_false'
  | 'scenario'
  | 'numeric';

export interface QuizQuestion {
  id: string;
  module_id: string;
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string;
  order_index: number;
  question_type?: QuestionType;
  question_data?: {
    correct_indices?: number[];
    correct_order?: number[];
    pairs?: { left: string; right: string }[];
    acceptable_answers?: string[];
    case_sensitive?: boolean;
    correct_answer?: boolean;
    context?: string;
    // numeric
    answer?: number;
    tolerance?: number;
    unit?: string;
  };
  difficulty?: 'easy' | 'medium' | 'hard' | 'expert';
  blooms_level?: 'remember' | 'understand' | 'apply' | 'analyze' | 'evaluate' | 'create';
  case_id?: string | null;
  created_at: string;
}

export interface StudentProfile {
  id: string;
  full_name: string;
  island: string | null;
  role: string;
  created_at: string;
  updated_at: string;
  // Joined data
  enrollments?: { course_id: string; enrolled_at: string; status: string }[];
  progress?: {
    course_id: string;
    completed_lessons: string[];
    quiz_scores: Record<string, { score: number; total: number }>;
  }[];
}

export interface AnalyticsData {
  total_enrollments: number;
  active_students: number;
  completion_rate: number;
  average_score: number;
  certificates_issued: number;
  course_popularity: { course_id: string; title: string; enrolled: number }[];
  progress_distribution: { bucket: string; count: number }[];
  recent_completions: {
    student_name: string;
    course_title: string;
    completed_at: string;
  }[];
}

// ── Helper ───────────────────────────────────────────────────────────────────

function handleError(error: unknown, context: string): never {
  const message =
    error instanceof Error ? error.message : JSON.stringify(error);
  console.error(`admin-api [${context}]:`, message);
  throw new Error(`${context}: ${message}`);
}

// ============================================================================
// COURSES
// ============================================================================

/** Fetch all courses (admin sees every status). */
export async function fetchCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("order", { ascending: true });

  if (error) handleError(error, "fetchCourses");

  // Fetch module counts per course
  const courseIds = (data ?? []).map((c) => c.id);

  const { data: moduleCounts, error: mcErr } = await supabase
    .from("modules")
    .select("course_id")
    .in("course_id", courseIds);

  if (mcErr) console.warn("Could not fetch module counts:", mcErr);

  // Fetch enrollment counts per course
  const { data: enrollCounts, error: ecErr } = await supabase
    .from("enrollments")
    .select("course_id")
    .in("course_id", courseIds);

  if (ecErr) console.warn("Could not fetch enrollment counts:", ecErr);

  // Build lookup maps
  const modMap = new Map<string, number>();
  (moduleCounts ?? []).forEach((m) => {
    modMap.set(m.course_id, (modMap.get(m.course_id) ?? 0) + 1);
  });

  const enrollMap = new Map<string, number>();
  (enrollCounts ?? []).forEach((e) => {
    enrollMap.set(e.course_id, (enrollMap.get(e.course_id) ?? 0) + 1);
  });

  return (data ?? []).map((c) => ({
    ...c,
    prerequisites: c.prerequisites ?? [],
    what_youll_learn: c.what_youll_learn ?? [],
    modules_count: modMap.get(c.id) ?? 0,
    enrolled_count: enrollMap.get(c.id) ?? 0,
  }));
}

/** Fetch a single course by slug with full module/lesson/quiz tree. */
export async function fetchCourseBySlug(slug: string): Promise<{
  course: Course;
  modules: (Module & { lessons: Lesson[]; quiz_questions: QuizQuestion[]; quiz_cases: QuizCase[] })[];
}> {
  const { data: course, error: cErr } = await supabase
    .from("courses")
    .select("*")
    .eq("slug", slug)
    .single();

  if (cErr) handleError(cErr, "fetchCourseBySlug");
  return fetchCourseTree(course);
}

/** Shared: given a course row, fetch its full module/lesson/quiz tree. */
async function fetchCourseTree(course: Record<string, unknown>): Promise<{
  course: Course;
  modules: (Module & { lessons: Lesson[]; quiz_questions: QuizQuestion[]; quiz_cases: QuizCase[] })[];
}> {
  const courseId = course.id as string;

  const { data: modules, error: mErr } = await supabase
    .from("modules")
    .select("*")
    .eq("course_id", courseId)
    .order("order_index", { ascending: true });

  if (mErr) handleError(mErr, "fetchCourseTree.modules");

  const moduleIds = (modules ?? []).map((m) => m.id);

  const [lessonsRes, quizRes, casesRes] = await Promise.all([
    moduleIds.length > 0
      ? supabase
          .from("lessons")
          .select("*")
          .in("module_id", moduleIds)
          .order("order_index", { ascending: true })
      : Promise.resolve({ data: [], error: null }),
    moduleIds.length > 0
      ? supabase
          .from("quiz_questions")
          .select("*")
          .in("module_id", moduleIds)
          .order("order_index", { ascending: true })
      : Promise.resolve({ data: [], error: null }),
    moduleIds.length > 0
      ? supabase
          .from("quiz_cases")
          .select("*")
          .in("module_id", moduleIds)
          .order("order_index", { ascending: true })
      : Promise.resolve({ data: [], error: null }),
  ]);

  if (lessonsRes.error) console.warn("Could not fetch lessons:", lessonsRes.error);
  if (quizRes.error) console.warn("Could not fetch quiz questions:", quizRes.error);
  if (casesRes.error) console.warn("Could not fetch quiz cases:", casesRes.error);

  const lessonsByModule = new Map<string, Lesson[]>();
  (lessonsRes.data ?? []).forEach((l) => {
    const arr = lessonsByModule.get(l.module_id) ?? [];
    arr.push(l as Lesson);
    lessonsByModule.set(l.module_id, arr);
  });

  const quizByModule = new Map<string, QuizQuestion[]>();
  (quizRes.data ?? []).forEach((q) => {
    const arr = quizByModule.get(q.module_id) ?? [];
    arr.push(q as QuizQuestion);
    quizByModule.set(q.module_id, arr);
  });

  const casesByModule = new Map<string, QuizCase[]>();
  (casesRes.data ?? []).forEach((c) => {
    const arr = casesByModule.get(c.module_id) ?? [];
    arr.push(c as QuizCase);
    casesByModule.set(c.module_id, arr);
  });

  const enrichedModules = (modules ?? []).map((m) => ({
    ...m,
    lessons: lessonsByModule.get(m.id) ?? [],
    quiz_questions: quizByModule.get(m.id) ?? [],
    quiz_cases: casesByModule.get(m.id) ?? [],
    lessons_count: (lessonsByModule.get(m.id) ?? []).length,
    quiz_count: (quizByModule.get(m.id) ?? []).length,
  }));

  return {
    course: {
      ...course,
      prerequisites: (course.prerequisites as string[]) ?? [],
      what_youll_learn: (course.what_youll_learn as string[]) ?? [],
    } as Course,
    modules: enrichedModules,
  };
}

/** Fetch a single course by ID with full module/lesson/quiz tree. */
export async function fetchCourse(id: string): Promise<{
  course: Course;
  modules: (Module & { lessons: Lesson[]; quiz_questions: QuizQuestion[]; quiz_cases: QuizCase[] })[];
}> {
  const { data: course, error: cErr } = await supabase
    .from("courses")
    .select("*")
    .eq("id", id)
    .single();

  if (cErr) handleError(cErr, "fetchCourse");
  return fetchCourseTree(course);
}

/** Create a new course. */
export async function createCourse(
  data: Partial<Omit<Course, "id" | "created_at" | "updated_at">>
): Promise<Course> {
  const { data: course, error } = await supabase
    .from("courses")
    .insert({
      title: data.title ?? "Untitled Course",
      slug: data.slug ?? "",
      description: data.description ?? "",
      skill_level: data.skill_level ?? "Beginner",
      duration_weeks: data.duration_weeks ?? 4,
      icon: data.icon ?? "GraduationCap",
      color: data.color ?? "blue",
      prerequisites: data.prerequisites ?? [],
      what_youll_learn: data.what_youll_learn ?? [],
      status: data.status ?? "draft",
      order: data.order ?? 99,
      domain_id: data.domain_id ?? null,
    })
    .select()
    .single();

  if (error) handleError(error, "createCourse");
  return course as Course;
}

/** Update course fields. */
export async function updateCourse(
  id: string,
  data: Partial<Omit<Course, "id" | "created_at">>
): Promise<Course> {
  const { data: course, error } = await supabase
    .from("courses")
    .update({ ...data, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) handleError(error, "updateCourse");
  return course as Course;
}

/** Delete a course (cascades to modules/lessons via DB). */
export async function deleteCourse(id: string): Promise<void> {
  const { error } = await supabase.from("courses").delete().eq("id", id);
  if (error) handleError(error, "deleteCourse");
}

// ============================================================================
// MODULES
// ============================================================================

/** Create a new module within a course. */
export async function createModule(
  courseId: string,
  data: Partial<Omit<Module, "id" | "course_id" | "created_at" | "updated_at">>
): Promise<Module> {
  const { data: mod, error } = await supabase
    .from("modules")
    .insert({
      course_id: courseId,
      title: data.title ?? "Untitled Module",
      description: data.description ?? "",
      order_index: data.order_index ?? 99,
    })
    .select()
    .single();

  if (error) handleError(error, "createModule");
  return mod as Module;
}

/** Update module fields. */
export async function updateModule(
  id: string,
  data: Partial<Omit<Module, "id" | "course_id" | "created_at">>
): Promise<Module> {
  const { data: mod, error } = await supabase
    .from("modules")
    .update({ ...data, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) handleError(error, "updateModule");
  return mod as Module;
}

/** Delete a module (cascades to lessons via DB). */
export async function deleteModule(id: string): Promise<void> {
  const { error } = await supabase.from("modules").delete().eq("id", id);
  if (error) handleError(error, "deleteModule");
}

// ============================================================================
// LESSONS
// ============================================================================

/** Create a new lesson within a module. */
export async function createLesson(
  moduleId: string,
  data: Partial<Omit<Lesson, "id" | "module_id" | "created_at" | "updated_at">>
): Promise<Lesson> {
  const { data: lesson, error } = await supabase
    .from("lessons")
    .insert({
      module_id: moduleId,
      title: data.title ?? "Untitled Lesson",
      content: data.content ?? [],
      order_index: data.order_index ?? 99,
      duration_minutes: data.duration_minutes ?? 15,
    })
    .select()
    .single();

  if (error) handleError(error, "createLesson");
  return lesson as Lesson;
}

/** Update lesson fields. */
export async function updateLesson(
  id: string,
  data: Partial<Omit<Lesson, "id" | "module_id" | "created_at">>
): Promise<Lesson> {
  const { data: lesson, error } = await supabase
    .from("lessons")
    .update({ ...data, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) handleError(error, "updateLesson");
  return lesson as Lesson;
}

/** Delete a lesson. */
export async function deleteLesson(id: string): Promise<void> {
  const { error } = await supabase.from("lessons").delete().eq("id", id);
  if (error) handleError(error, "deleteLesson");
}

// ============================================================================
// QUIZ QUESTIONS
// ============================================================================

/** Create a new quiz question within a module. */
export async function createQuizQuestion(
  moduleId: string,
  data: Partial<
    Omit<QuizQuestion, "id" | "module_id" | "created_at">
  >
): Promise<QuizQuestion> {
  const insertData: Record<string, unknown> = {
    module_id: moduleId,
    question: data.question ?? "",
    options: data.options ?? ["", "", "", ""],
    correct_answer: data.correct_answer ?? 0,
    explanation: data.explanation ?? "",
    order_index: data.order_index ?? 99,
  };
  if (data.question_type) insertData.question_type = data.question_type;
  if (data.question_data) insertData.question_data = data.question_data;
  if (data.difficulty) insertData.difficulty = data.difficulty;
  if (data.blooms_level) insertData.blooms_level = data.blooms_level;

  const { data: q, error } = await supabase
    .from("quiz_questions")
    .insert(insertData)
    .select()
    .single();

  if (error) handleError(error, "createQuizQuestion");
  return q as QuizQuestion;
}

/** Update quiz question fields. */
export async function updateQuizQuestion(
  id: string,
  data: Partial<Omit<QuizQuestion, "id" | "module_id" | "created_at">>
): Promise<QuizQuestion> {
  const { data: q, error } = await supabase
    .from("quiz_questions")
    .update({ ...data, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) handleError(error, "updateQuizQuestion");
  return q as QuizQuestion;
}

/** Delete a quiz question. */
export async function deleteQuizQuestion(id: string): Promise<void> {
  const { error } = await supabase
    .from("quiz_questions")
    .delete()
    .eq("id", id);
  if (error) handleError(error, "deleteQuizQuestion");
}

// ============================================================================
// STUDENTS
// ============================================================================

/** Fetch all student profiles with their enrollments and progress. */
export async function fetchStudents(): Promise<StudentProfile[]> {
  const { data: profiles, error: pErr } = await supabase
    .from("profiles")
    .select("*")
    .eq("role", "student")
    .order("full_name", { ascending: true });

  if (pErr) handleError(pErr, "fetchStudents");

  const studentIds = (profiles ?? []).map((p) => p.id);
  if (studentIds.length === 0) return [];

  // Fetch enrollments and progress in parallel
  const [enrollRes, progressRes] = await Promise.all([
    supabase
      .from("enrollments")
      .select("user_id, course_id, enrolled_at, status")
      .in("user_id", studentIds),
    supabase
      .from("course_progress")
      .select("user_id, course_id, completed_lessons, quiz_scores")
      .in("user_id", studentIds),
  ]);

  if (enrollRes.error) console.warn("Could not fetch enrollments:", enrollRes.error);
  if (progressRes.error) console.warn("Could not fetch progress:", progressRes.error);

  // Group by student
  const enrollMap = new Map<string, StudentProfile["enrollments"]>();
  (enrollRes.data ?? []).forEach((e) => {
    const arr = enrollMap.get(e.user_id) ?? [];
    arr.push({
      course_id: e.course_id,
      enrolled_at: e.enrolled_at,
      status: e.status ?? "active",
    });
    enrollMap.set(e.user_id, arr);
  });

  const progressMap = new Map<string, StudentProfile["progress"]>();
  (progressRes.data ?? []).forEach((p) => {
    const arr = progressMap.get(p.user_id) ?? [];
    arr.push({
      course_id: p.course_id,
      completed_lessons: p.completed_lessons ?? [],
      quiz_scores: p.quiz_scores ?? {},
    });
    progressMap.set(p.user_id, arr);
  });

  return (profiles ?? []).map((p) => ({
    id: p.id,
    full_name: p.full_name ?? "Unknown",
    island: p.island ?? null,
    role: p.role ?? "student",
    created_at: p.created_at,
    updated_at: p.updated_at,
    enrollments: enrollMap.get(p.id) ?? [],
    progress: progressMap.get(p.id) ?? [],
  }));
}

// ============================================================================
// ANALYTICS
// ============================================================================

/** Fetch aggregate analytics stats. */
export async function fetchAnalytics(): Promise<AnalyticsData> {
  // Fetch all data in parallel
  const [enrollRes, profilesRes, progressRes, coursesRes] = await Promise.all([
    supabase.from("enrollments").select("*"),
    supabase.from("profiles").select("id, full_name").eq("role", "student"),
    supabase.from("course_progress").select("*"),
    supabase.from("courses").select("id, title").eq("status", "published"),
  ]);

  const enrollments = enrollRes.data ?? [];
  const students = profilesRes.data ?? [];
  const progress = progressRes.data ?? [];
  const courses = coursesRes.data ?? [];

  // Total enrollments
  const total_enrollments = enrollments.length;

  // Active students (those with at least one enrollment)
  const uniqueStudentIds = new Set(enrollments.map((e) => e.user_id));
  const active_students = uniqueStudentIds.size;

  // Completion rate: % of enrollments where status is 'completed'
  const completedEnrollments = enrollments.filter(
    (e) => e.status === "completed"
  ).length;
  const completion_rate =
    total_enrollments > 0
      ? Math.round((completedEnrollments / total_enrollments) * 100)
      : 0;

  // Average quiz score across all progress records
  let totalScore = 0;
  let totalQuizzes = 0;
  progress.forEach((p) => {
    const scores = p.quiz_scores ?? {};
    Object.values(scores).forEach((s: unknown) => {
      const score = s as { score: number; total: number };
      if (score.total > 0) {
        totalScore += (score.score / score.total) * 100;
        totalQuizzes += 1;
      }
    });
  });
  const average_score =
    totalQuizzes > 0 ? Math.round(totalScore / totalQuizzes) : 0;

  // Certificates issued (completed enrollments count as certificates)
  const certificates_issued = completedEnrollments;

  // Course popularity
  const courseEnrollCounts = new Map<string, number>();
  enrollments.forEach((e) => {
    courseEnrollCounts.set(
      e.course_id,
      (courseEnrollCounts.get(e.course_id) ?? 0) + 1
    );
  });
  const course_popularity = courses
    .map((c) => ({
      course_id: c.id,
      title: c.title,
      enrolled: courseEnrollCounts.get(c.id) ?? 0,
    }))
    .sort((a, b) => b.enrolled - a.enrolled);

  // Progress distribution (buckets: 0-25%, 26-50%, 51-75%, 76-100%)
  const buckets = { "0-25%": 0, "26-50%": 0, "51-75%": 0, "76-100%": 0 };
  progress.forEach((p) => {
    const completed = (p.completed_lessons ?? []).length;
    // Rough estimate: assume 30 lessons per course (we don't have exact count here)
    const pct = completed > 0 ? Math.min(100, Math.round((completed / 30) * 100)) : 0;
    if (pct <= 25) buckets["0-25%"]++;
    else if (pct <= 50) buckets["26-50%"]++;
    else if (pct <= 75) buckets["51-75%"]++;
    else buckets["76-100%"]++;
  });
  const progress_distribution = Object.entries(buckets).map(([bucket, count]) => ({
    bucket,
    count,
  }));

  // Recent completions (from enrollments with status = completed, sorted by date)
  const studentNameMap = new Map<string, string>();
  students.forEach((s) => studentNameMap.set(s.id, s.full_name ?? "Unknown"));
  const courseNameMap = new Map<string, string>();
  courses.forEach((c) => courseNameMap.set(c.id, c.title));

  const recent_completions = enrollments
    .filter((e) => e.status === "completed")
    .sort(
      (a, b) =>
        new Date(b.updated_at ?? b.enrolled_at).getTime() -
        new Date(a.updated_at ?? a.enrolled_at).getTime()
    )
    .slice(0, 10)
    .map((e) => ({
      student_name: studentNameMap.get(e.user_id) ?? "Unknown",
      course_title: courseNameMap.get(e.course_id) ?? "Unknown",
      completed_at: e.updated_at ?? e.enrolled_at,
    }));

  return {
    total_enrollments,
    active_students,
    completion_rate,
    average_score,
    certificates_issued,
    course_popularity,
    progress_distribution,
    recent_completions,
  };
}

// ============================================================================
// SURVEYS
// ============================================================================

export interface CourseSurveySubmission {
  user_id: string;
  course_id: string;
  overall_rating: number;
  content_clarity: number;
  difficulty: "Too Easy" | "Just Right" | "Too Hard";
  relevance: number;
  would_recommend: boolean;
  liked_most: string;
  to_improve: string;
}

export interface CourseSurveyStats {
  total_responses: number;
  avg_overall: number;
  avg_clarity: number;
  avg_relevance: number;
  recommend_pct: number;
  difficulty: { label: string; count: number; pct: number }[];
  responses: { liked_most: string; to_improve: string; submitted_at: string }[];
}

/** Insert a survey response. Silently succeeds if user already submitted (unique constraint). */
export async function submitSurvey(data: CourseSurveySubmission): Promise<void> {
  const { error } = await supabase.from("course_surveys").insert(data);
  if (error && !error.message.includes("duplicate")) {
    handleError(error, "submitSurvey");
  }
}

/** Returns true if the user has already submitted a survey for this course. */
export async function hasSubmittedSurvey(
  userId: string,
  courseId: string
): Promise<boolean> {
  const { data } = await supabase
    .from("course_surveys")
    .select("id")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .maybeSingle();
  return !!data;
}

/** Fetch aggregated survey stats for a course (admin only). */
export async function fetchSurveyStats(
  courseId: string
): Promise<CourseSurveyStats> {
  const { data, error } = await supabase
    .from("course_surveys")
    .select("overall_rating,content_clarity,relevance,would_recommend,difficulty,liked_most,to_improve,submitted_at")
    .eq("course_id", courseId)
    .order("submitted_at", { ascending: false });

  if (error) handleError(error, "fetchSurveyStats");
  const rows = data ?? [];

  if (rows.length === 0) {
    return {
      total_responses: 0,
      avg_overall: 0,
      avg_clarity: 0,
      avg_relevance: 0,
      recommend_pct: 0,
      difficulty: [
        { label: "Too Easy", count: 0, pct: 0 },
        { label: "Just Right", count: 0, pct: 0 },
        { label: "Too Hard", count: 0, pct: 0 },
      ],
      responses: [],
    };
  }

  const n = rows.length;
  const avg = (field: "overall_rating" | "content_clarity" | "relevance") =>
    Math.round((rows.reduce((s, r) => s + Number(r[field]), 0) / n) * 10) / 10;

  const diffCount = { "Too Easy": 0, "Just Right": 0, "Too Hard": 0 };
  rows.forEach((r) => { diffCount[r.difficulty as keyof typeof diffCount]++; });

  return {
    total_responses: n,
    avg_overall: avg("overall_rating"),
    avg_clarity: avg("content_clarity"),
    avg_relevance: avg("relevance"),
    recommend_pct: Math.round((rows.filter((r) => r.would_recommend).length / n) * 100),
    difficulty: (["Too Easy", "Just Right", "Too Hard"] as const).map((label) => ({
      label,
      count: diffCount[label],
      pct: Math.round((diffCount[label] / n) * 100),
    })),
    responses: rows
      .filter((r) => r.liked_most || r.to_improve)
      .map((r) => ({
        liked_most: r.liked_most,
        to_improve: r.to_improve,
        submitted_at: r.submitted_at,
      })),
  };
}

// ── All-course survey overview (used by Analytics tab) ────────────────────────

export interface SurveyCourseRow {
  course_id: string;
  total_responses: number;
  avg_overall: number;
  avg_clarity: number;
  avg_relevance: number;
  recommend_pct: number;
  difficulty_mode: string;
  responses: {
    overall_rating: number;
    content_clarity: number;
    relevance: number;
    difficulty: string;
    would_recommend: boolean;
    liked_most: string;
    to_improve: string;
    submitted_at: string;
  }[];
}

export interface AllSurveyStats {
  total_responses: number;
  avg_overall: number;
  recommend_pct: number;
  by_course: SurveyCourseRow[];
}

/** Fetch aggregated survey stats across ALL courses for the Analytics tab. */
export async function fetchAllSurveyStats(): Promise<AllSurveyStats> {
  const { data, error } = await supabase
    .from("course_surveys")
    .select(
      "course_id,overall_rating,content_clarity,relevance,would_recommend,difficulty,liked_most,to_improve,submitted_at"
    )
    .order("submitted_at", { ascending: false });

  if (error) handleError(error, "fetchAllSurveyStats");
  const rows = data ?? [];
  if (rows.length === 0) {
    return { total_responses: 0, avg_overall: 0, recommend_pct: 0, by_course: [] };
  }

  // Group by course_id
  const grouped: Record<string, typeof rows> = {};
  for (const row of rows) {
    if (!grouped[row.course_id]) grouped[row.course_id] = [];
    grouped[row.course_id].push(row);
  }

  const meanOf = (arr: typeof rows, field: "overall_rating" | "content_clarity" | "relevance") =>
    Math.round((arr.reduce((s, r) => s + Number(r[field]), 0) / arr.length) * 10) / 10;

  const by_course: SurveyCourseRow[] = Object.entries(grouped)
    .map(([course_id, cRows]) => {
      const difCounts: Record<string, number> = {};
      for (const r of cRows) difCounts[r.difficulty as string] = (difCounts[r.difficulty as string] ?? 0) + 1;
      const difficulty_mode =
        Object.entries(difCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "Just Right";
      return {
        course_id,
        total_responses: cRows.length,
        avg_overall: meanOf(cRows, "overall_rating"),
        avg_clarity: meanOf(cRows, "content_clarity"),
        avg_relevance: meanOf(cRows, "relevance"),
        recommend_pct: Math.round((cRows.filter((r) => r.would_recommend).length / cRows.length) * 100),
        difficulty_mode,
        responses: cRows.map((r) => ({
          overall_rating: r.overall_rating as number,
          content_clarity: r.content_clarity as number,
          relevance: r.relevance as number,
          difficulty: r.difficulty as string,
          would_recommend: r.would_recommend as boolean,
          liked_most: (r.liked_most as string) ?? "",
          to_improve: (r.to_improve as string) ?? "",
          submitted_at: r.submitted_at as string,
        })),
      };
    })
    .sort((a, b) => b.total_responses - a.total_responses);

  const total = rows.length;
  return {
    total_responses: total,
    avg_overall: Math.round((rows.reduce((s, r) => s + Number(r.overall_rating), 0) / total) * 10) / 10,
    recommend_pct: Math.round((rows.filter((r) => r.would_recommend).length / total) * 100),
    by_course,
  };
}

// ============================================================================
// AI COURSE GENERATOR
// ============================================================================

export interface GenerateCourseParams {
  title: string;
  skill_level: "Beginner" | "Intermediate" | "Advanced";
  duration_weeks: number;
  jurisdiction?: string;
  focus_areas?: string;
  created_by?: string;
}

export interface GenerateCourseResult {
  course_id: string;
  course_slug: string;
  modules_count: number;
  lessons_count: number;
  questions_count: number;
  model_used?: string;
}

/**
 * Call the `generate-course` Edge Function to generate a full draft course
 * with Claude and save it to the database.
 */
export async function generateCourse(
  params: GenerateCourseParams
): Promise<GenerateCourseResult> {
  // Generate a unique job_id so the server can detect retries after a dropped
  // connection — if the same job_id is sent again, the server returns the
  // already-completed course instead of creating a duplicate.
  const jobId = crypto.randomUUID();

  const { data, error } = await supabase.functions.invoke("generate-course", {
    body: { ...params, job_id: jobId },
  });

  // Check data.error first — supabase-js sets both data and error on non-2xx responses
  if (data?.error) {
    throw new Error(`generate-course: ${data.error}`);
  }

  if (error) {
    // Network/timeout error — the Edge Function may have completed and saved to DB
    // before the gateway dropped the connection. Check using the job_id we sent.
    const { data: saved } = await supabase
      .from("courses")
      .select("id, slug, status")
      .eq("ai_job_id", jobId)
      .maybeSingle();

    if (saved?.status === "draft" || saved?.status === "published") {
      // Generation completed — return success despite dropped connection
      const moduleIds = (await supabase.from("modules").select("id").eq("course_id", saved.id)).data?.map((m: { id: string }) => m.id) ?? [];
      const { count: mc } = await supabase
        .from("modules")
        .select("id", { count: "exact", head: true })
        .eq("course_id", saved.id);
      const { count: lc } = await supabase
        .from("lessons")
        .select("id", { count: "exact", head: true })
        .in("module_id", moduleIds);
      const { count: qc } = await supabase
        .from("quiz_questions")
        .select("id", { count: "exact", head: true })
        .in("module_id", moduleIds);
      return {
        course_id: saved.id,
        course_slug: saved.slug,
        modules_count: mc ?? 0,
        lessons_count: lc ?? 0,
        questions_count: qc ?? 0,
        model_used: "claude-haiku-20240307",
      };
    }

    if (saved?.status === "generating") {
      throw new Error("Course is still generating — it will appear in your Courses list shortly.");
    }

    handleError(error, "generateCourse");
  }

  return data as GenerateCourseResult;
}

export interface EnhanceModuleResult {
  mode?: "append" | "overwrite";
  lessons_updated: number;
  lessons_skipped_existing?: number;
  questions_count: number;
  case_created?: boolean;
  types_generated?: string[];
  model_used: string;
}

/**
 * Enhance a module with AI-generated lessons + interactive quiz.
 * mode "append" (default, non-destructive): fills only EMPTY lessons and adds
 * questions alongside existing ones. mode "overwrite" replaces lesson content
 * and deletes + regenerates the quiz — gate it behind a confirm dialog (D6).
 * types: optional restriction — only generate these question types. Omitted =
 * the domain-aware default mix.
 */
export async function enhanceModule(
  moduleId: string,
  mode: "append" | "overwrite" = "append",
  types?: QuestionType[]
): Promise<EnhanceModuleResult> {
  const { data, error } = await supabase.functions.invoke("enhance-module", {
    body: { module_id: moduleId, mode, ...(types?.length ? { types } : {}) },
  });
  if (data?.error) throw new Error(`enhance-module: ${data.error}`);

  if (error) {
    // Network/timeout — Opus may have completed and written to DB before gateway cut connection.
    // Check by querying the first lesson: Opus writes 7+ blocks, Haiku writes 4-5.
    const { data: lessons } = await supabase
      .from("lessons")
      .select("id, content")
      .eq("module_id", moduleId);

    const firstBlocks = Array.isArray(lessons?.[0]?.content) ? (lessons![0].content as unknown[]).length : 0;
    if (firstBlocks >= 7) {
      // Enhancement completed server-side despite dropped connection
      const lessonsUpdated = lessons?.filter(
        l => Array.isArray(l.content) && (l.content as unknown[]).length >= 7
      ).length ?? 0;
      const { count: questionsCount } = await supabase
        .from("quiz_questions")
        .select("id", { count: "exact", head: true })
        .eq("module_id", moduleId);
      return { lessons_updated: lessonsUpdated, questions_count: questionsCount ?? 3, model_used: "claude-opus-4-8" };
    }

    handleError(error, "enhanceModule");
  }

  return data as EnhanceModuleResult;
}

// ============================================================================
// ACCREDITATION DRAFT FLOW — generate → review/modify → publish
// enhance-module target:"draft" writes the full accreditation module to the
// module_enhancement_drafts staging table. Nothing reaches live lessons /
// quiz_questions until an admin reviews and calls publishModuleDraft().
// ============================================================================

export interface DraftObjective {
  objective_number?: string;
  text: string;
  blooms_level?: string;
}

export interface DraftQuestion {
  question_type: QuestionType;
  question: string;
  options?: unknown[];
  correct_answer?: number;
  question_data?: Record<string, unknown>;
  explanation?: string;
  difficulty?: string;
  blooms_level?: string;
  objective_ref?: string;
}

export interface DraftLesson {
  title: string;
  duration_minutes?: number;
  content?: unknown[];
  order_index?: number;
}

export interface DraftPayload {
  module_id: string;
  module_title?: string;
  course_title?: string;
  domain?: string | null;
  create_lessons?: boolean;
  module_overview?: string;
  learning_objectives: DraftObjective[];
  key_terms?: { term: string; definition: string }[];
  crosswalk?: Record<string, unknown>[];
  competency_checklist?: { item?: string; validation_method?: string }[];
  remediation_plan?: string[];
  references?: string[];
  passing_score?: number;
  attempts_allowed?: number;
  seat_time_minutes?: number;
  module_code?: string;
  delivery_mode?: string;
  modality_tags?: string[];
  lessons: DraftLesson[];
  quiz_questions: DraftQuestion[];
  case?: { title?: string; vignette: string; questions: DraftQuestion[] } | null;
  generated_at?: string;
}

export type DraftStatus = "pending_review" | "approved" | "published" | "discarded";

export interface ModuleDraft {
  id: string;
  module_id: string;
  status: DraftStatus;
  payload: DraftPayload;
  requested_types: string[];
  model: string | null;
  tokens_in: number | null;
  tokens_out: number | null;
  created_at: string;
  published_at: string | null;
}

export interface EnhanceDraftResult {
  target: "draft";
  draft_id: string;
  create_lessons: boolean;
  lessons_count: number;
  questions_count: number;
  objectives_count: number;
  has_case: boolean;
  types_generated?: string[];
  model_used: string;
  usage?: { input_tokens: number; output_tokens: number };
}

export interface PublishDraftResult {
  draft_id: string;
  module_id?: string;
  already_published?: boolean;
  lessons_created?: number;
  objectives_created?: number;
  questions_created?: number;
  case_created?: boolean;
}

/**
 * Generate an accreditation-format module to the review-gate staging table.
 * Writes NOTHING to live lessons/quiz — returns a draft id to review + publish.
 * types: optional restriction (the "create THESE quiz types" picker).
 */
export async function enhanceModuleDraft(
  moduleId: string,
  types?: QuestionType[]
): Promise<EnhanceDraftResult> {
  const { data, error } = await supabase.functions.invoke("enhance-module", {
    body: { module_id: moduleId, target: "draft", ...(types?.length ? { types } : {}) },
  });
  if (data?.error) throw new Error(`enhance-module: ${data.error}`);
  if (error) handleError(error, "enhanceModuleDraft");
  return data as EnhanceDraftResult;
}

/** Pending (or other-status) drafts for a module, newest first. */
export async function fetchModuleDrafts(
  moduleId: string,
  status: DraftStatus = "pending_review"
): Promise<ModuleDraft[]> {
  const { data, error } = await supabase
    .from("module_enhancement_drafts")
    .select("*")
    .eq("module_id", moduleId)
    .eq("status", status)
    .order("created_at", { ascending: false });
  if (error) handleError(error, "fetchModuleDrafts");
  return (data ?? []) as ModuleDraft[];
}

/** A single draft by id (with full payload). */
export async function fetchDraft(draftId: string): Promise<ModuleDraft | null> {
  const { data, error } = await supabase
    .from("module_enhancement_drafts")
    .select("*")
    .eq("id", draftId)
    .maybeSingle();
  if (error) handleError(error, "fetchDraft");
  return (data as ModuleDraft) ?? null;
}

/** Persist admin edits to a draft payload (the "modify before save" step). */
export async function saveDraftPayload(draftId: string, payload: DraftPayload): Promise<void> {
  const { error } = await supabase
    .from("module_enhancement_drafts")
    .update({ payload, updated_at: new Date().toISOString() })
    .eq("id", draftId);
  if (error) handleError(error, "saveDraftPayload");
}

/** Atomically promote an approved draft to live (additive). Idempotent. */
export async function publishModuleDraft(draftId: string): Promise<PublishDraftResult> {
  const { data, error } = await supabase.rpc("publish_module_draft", { p_draft_id: draftId });
  if (error) handleError(error, "publishModuleDraft");
  return data as PublishDraftResult;
}

/** Mark a draft discarded (kept for audit; never published). */
export async function discardModuleDraft(draftId: string): Promise<void> {
  const { error } = await supabase
    .from("module_enhancement_drafts")
    .update({ status: "discarded", updated_at: new Date().toISOString() })
    .eq("id", draftId);
  if (error) handleError(error, "discardModuleDraft");
}

// ============================================================================
// CURRICULUM ORGANIZER — domains, cross-entity moves, batch reordering
// ============================================================================

/** All domains in display order. */
export async function fetchDomains(): Promise<Domain[]> {
  const { data, error } = await supabase
    .from("domains")
    .select("*")
    .order("order_index", { ascending: true });
  if (error) handleError(error, "fetchDomains");
  return (data ?? []) as Domain[];
}

export async function createDomain(
  data: Partial<Omit<Domain, "id" | "created_at" | "updated_at">>
): Promise<Domain> {
  const { data: domain, error } = await supabase
    .from("domains")
    .insert({
      name: data.name ?? "New Domain",
      icon: data.icon ?? "🗂️",
      color: data.color ?? "#9aa0a6",
      order_index: data.order_index ?? 99,
    })
    .select()
    .single();
  if (error) handleError(error, "createDomain");
  return domain as Domain;
}

export async function updateDomain(
  id: string,
  data: Partial<Pick<Domain, "name" | "icon" | "color" | "order_index">>
): Promise<Domain> {
  const { data: domain, error } = await supabase
    .from("domains")
    .update({ ...data, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) handleError(error, "updateDomain");
  return domain as Domain;
}

/**
 * Delete a domain. Its courses are reassigned to `reassignTo`
 * (another domain id) or left Unsorted (null).
 */
export async function deleteDomain(id: string, reassignTo: string | null = null): Promise<void> {
  const { error: moveErr } = await supabase
    .from("courses")
    .update({ domain_id: reassignTo })
    .eq("domain_id", id);
  if (moveErr) handleError(moveErr, "deleteDomain (reassign)");
  const { error } = await supabase.from("domains").delete().eq("id", id);
  if (error) handleError(error, "deleteDomain");
}

/** Persist a new domain order. Only writes rows whose position changed. */
export async function reorderDomains(orderedIds: string[]): Promise<void> {
  const current = await fetchDomains();
  const updates = orderedIds
    .map((id, i) => ({ id, order_index: i + 1 }))
    .filter((u) => current.find((d) => d.id === u.id)?.order_index !== u.order_index);
  for (const u of updates) {
    const { error } = await supabase
      .from("domains")
      .update({ order_index: u.order_index, updated_at: new Date().toISOString() })
      .eq("id", u.id);
    if (error) handleError(error, "reorderDomains");
  }
}

/** Move a course to a (possibly different) domain at a specific position. */
export async function moveCourse(
  courseId: string,
  domainId: string | null,
  order: number
): Promise<void> {
  const { error } = await supabase
    .from("courses")
    .update({ domain_id: domainId, order, updated_at: new Date().toISOString() })
    .eq("id", courseId);
  if (error) handleError(error, "moveCourse");
}

/** Batch-persist course order within a domain. Pass only changed rows. */
export async function reorderCourses(
  updates: { id: string; order: number }[]
): Promise<void> {
  for (const u of updates) {
    const { error } = await supabase
      .from("courses")
      .update({ order: u.order, updated_at: new Date().toISOString() })
      .eq("id", u.id);
    if (error) handleError(error, "reorderCourses");
  }
}

/** Batch-persist module order within a course. Pass only changed rows. */
export async function reorderModules(
  updates: { id: string; order_index: number }[]
): Promise<void> {
  for (const u of updates) {
    const { error } = await supabase
      .from("modules")
      .update({ order_index: u.order_index, updated_at: new Date().toISOString() })
      .eq("id", u.id);
    if (error) handleError(error, "reorderModules");
  }
}

// ============================================================================
// QUIZ CASES (shared patient vignettes for case-based questions)
// ============================================================================

export async function fetchQuizCases(moduleId: string): Promise<QuizCase[]> {
  const { data, error } = await supabase
    .from("quiz_cases")
    .select("*")
    .eq("module_id", moduleId)
    .order("order_index", { ascending: true });
  if (error) handleError(error, "fetchQuizCases");
  return (data ?? []) as QuizCase[];
}

export async function createQuizCase(
  moduleId: string,
  data: Partial<Pick<QuizCase, "title" | "vignette" | "order_index">>
): Promise<QuizCase> {
  const { data: qcase, error } = await supabase
    .from("quiz_cases")
    .insert({
      module_id: moduleId,
      title: data.title ?? "Case study",
      vignette: data.vignette ?? "",
      order_index: data.order_index ?? 1,
    })
    .select()
    .single();
  if (error) handleError(error, "createQuizCase");
  return qcase as QuizCase;
}

export async function updateQuizCase(
  id: string,
  data: Partial<Pick<QuizCase, "title" | "vignette" | "order_index">>
): Promise<QuizCase> {
  const { data: qcase, error } = await supabase
    .from("quiz_cases")
    .update({ ...data, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) handleError(error, "updateQuizCase");
  return qcase as QuizCase;
}

/** Delete a case; linked questions keep existing but their case_id nulls out. */
export async function deleteQuizCase(id: string): Promise<void> {
  const { error } = await supabase.from("quiz_cases").delete().eq("id", id);
  if (error) handleError(error, "deleteQuizCase");
}
