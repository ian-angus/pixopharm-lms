// ============================================================================
// PIXOPHARM Admin Tutorial — In-app guide for course management
// Accessible from the admin sidebar as the "Help" page
// ============================================================================

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ── Icons ────────────────────────────────────────────────────────────────────

function IconBook() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
}
function IconLayers() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>;
}
function IconFileText() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>;
}
function IconHelpCircle() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;
}
function IconCheckCircle() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;
}
function IconAlertTriangle() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;
}
function IconZap() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
}
function IconTarget() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
}

// ── Section Component ────────────────────────────────────────────────────────

function Section({
  id,
  title,
  icon,
  children,
  open,
  onToggle,
}: {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <Card className="overflow-hidden">
      <button
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-muted/50 transition-colors"
        onClick={() => onToggle(id)}
      >
        <div className="w-9 h-9 rounded-lg bg-[hsl(174,45%,96%)] text-[hsl(174,62%,32%)] flex items-center justify-center shrink-0">
          {icon}
        </div>
        <span className="flex-1 font-semibold text-foreground">{title}</span>
        <svg
          viewBox="0 0 24 24"
          className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && <div className="px-5 pb-5 space-y-4 border-t">{children}</div>}
    </Card>
  );
}

// ── Step Component ───────────────────────────────────────────────────────────

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-7 h-7 rounded-full bg-[hsl(174,62%,32%)] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
        {n}
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed flex-1">{children}</div>
    </div>
  );
}

// ── Tip Component ────────────────────────────────────────────────────────────

function Tip({ type = "tip", children }: { type?: "tip" | "warning" | "info"; children: React.ReactNode }) {
  const styles = {
    tip: { bg: "bg-emerald-50 border-emerald-200", icon: <IconCheckCircle />, color: "text-emerald-700", label: "Tip" },
    warning: { bg: "bg-amber-50 border-amber-200", icon: <IconAlertTriangle />, color: "text-amber-700", label: "Important" },
    info: { bg: "bg-blue-50 border-blue-200", icon: <IconHelpCircle />, color: "text-blue-700", label: "Good to know" },
  };
  const s = styles[type];
  return (
    <div className={`${s.bg} border rounded-lg px-4 py-3 flex gap-3 items-start`}>
      <div className={`${s.color} shrink-0 mt-0.5`}>{s.icon}</div>
      <div className="text-sm">
        <span className={`font-semibold ${s.color}`}>{s.label}: </span>
        <span className="text-slate-700">{children}</span>
      </div>
    </div>
  );
}

// ── Term/Definition ──────────────────────────────────────────────────────────

function Term({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-2 items-baseline">
      <span className="font-semibold text-sm text-foreground shrink-0 w-32">{term}</span>
      <span className="text-sm text-muted-foreground">{children}</span>
    </div>
  );
}

// ── Main Tutorial Component ──────────────────────────────────────────────────

export default function AdminTutorial() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(["overview"]));

  const toggle = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => {
    setOpenSections(new Set([
      "overview", "hierarchy", "course-lifecycle", "creating-course",
      "modules", "lessons", "quizzes", "students", "analytics",
      "glossary", "shortcuts",
    ]));
  };

  const collapseAll = () => setOpenSections(new Set());

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">Admin Guide</h2>
          <p className="text-sm text-muted-foreground">
            Everything you need to know about managing courses in PIXOPHARM
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={expandAll} className="text-xs text-[hsl(174,62%,32%)] hover:underline">
            Expand all
          </button>
          <span className="text-xs text-muted-foreground">|</span>
          <button onClick={collapseAll} className="text-xs text-muted-foreground hover:underline">
            Collapse all
          </button>
        </div>
      </div>

      {/* Quick Start Card */}
      <Card className="bg-gradient-to-br from-[hsl(174,45%,96%)] to-white border-[hsl(174,62%,32%)]/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <IconZap /> Quick Start
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>To create a complete course, follow these steps in order:</p>
          <ol className="list-decimal list-inside space-y-1 pl-1">
            <li><strong>Create the course</strong> with title, description, and settings</li>
            <li><strong>Add modules</strong> to organise your content into topics</li>
            <li><strong>Add lessons</strong> to each module with the content editor</li>
            <li><strong>Add quiz questions</strong> to test student knowledge</li>
            <li><strong>Publish</strong> when everything is ready for students</li>
          </ol>
        </CardContent>
      </Card>

      {/* ────────────────────────────────────────────────────────────────── */}

      <Section id="overview" title="How the Dashboard Works" icon={<IconTarget />} open={openSections.has("overview")} onToggle={toggle}>
        <p className="text-sm text-muted-foreground">
          The admin dashboard has five pages, accessible from the sidebar on the left:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mt-2">
          <div className="rounded-lg border p-3">
            <p className="font-semibold text-sm">Dashboard</p>
            <p className="text-xs text-muted-foreground">Your home screen. Shows course count, student count, enrolments, completion rates, and recent activity.</p>
          </div>
          <div className="rounded-lg border p-3">
            <p className="font-semibold text-sm">Courses</p>
            <p className="text-xs text-muted-foreground">Where you create, edit, and manage all courses. This is where you will spend most of your time.</p>
          </div>
          <div className="rounded-lg border p-3">
            <p className="font-semibold text-sm">Students</p>
            <p className="text-xs text-muted-foreground">View all registered students, search by name or island, see their progress, and export data to CSV.</p>
          </div>
          <div className="rounded-lg border p-3">
            <p className="font-semibold text-sm">Analytics</p>
            <p className="text-xs text-muted-foreground">Visual reports: which courses are most popular, how students are progressing, average quiz scores, and completion rates.</p>
          </div>
        </div>
        <Tip>You can collapse the sidebar by clicking the arrow at the bottom to give yourself more workspace.</Tip>
      </Section>

      {/* ────────────────────────────────────────────────────────────────── */}

      <Section id="hierarchy" title="How Content is Organised" icon={<IconLayers />} open={openSections.has("hierarchy")} onToggle={toggle}>
        <p className="text-sm text-muted-foreground">
          PIXOPHARM content follows a simple hierarchy. Think of it like a textbook:
        </p>

        <div className="rounded-lg border overflow-hidden mt-2">
          <div className="bg-blue-50 px-4 py-3 border-b">
            <p className="font-semibold text-sm text-blue-900">Course</p>
            <p className="text-xs text-blue-700">The whole subject. Example: &quot;Foundations of Pharmacy Practice&quot;</p>
          </div>
          <div className="bg-violet-50 px-4 py-3 border-b ml-6">
            <p className="font-semibold text-sm text-violet-900">Module</p>
            <p className="text-xs text-violet-700">A chapter within the course. Example: &quot;Caribbean Pharmacy Law&quot;</p>
          </div>
          <div className="bg-emerald-50 px-4 py-3 border-b ml-12">
            <p className="font-semibold text-sm text-emerald-900">Lesson</p>
            <p className="text-xs text-emerald-700">An individual page the student reads. Contains text, images, lists, and interactive elements. Example: &quot;Licensing Requirements by Island&quot;</p>
          </div>
          <div className="bg-amber-50 px-4 py-3 ml-12">
            <p className="font-semibold text-sm text-amber-900">Quiz Questions</p>
            <p className="text-xs text-amber-700">Questions that test the student at the end of each module. Belong to the module, not to individual lessons.</p>
          </div>
        </div>

        <Tip type="info">
          A typical course has 6-8 modules. Each module has 3-5 lessons and 8-12 quiz questions.
        </Tip>
      </Section>

      {/* ────────────────────────────────────────────────────────────────── */}

      <Section id="course-lifecycle" title="Course Status: Draft, Published, Archived" icon={<IconCheckCircle />} open={openSections.has("course-lifecycle")} onToggle={toggle}>
        <p className="text-sm text-muted-foreground">Every course has a status that controls whether students can see it:</p>

        <div className="space-y-3 mt-2">
          <div className="flex items-start gap-3">
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 shrink-0 mt-0.5">Draft</Badge>
            <p className="text-sm text-muted-foreground">
              <strong>Only visible to admins.</strong> Use this while you are still building the course. Students cannot see or enrol in draft courses. New courses start as drafts.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 shrink-0 mt-0.5">Published</Badge>
            <p className="text-sm text-muted-foreground">
              <strong>Visible to everyone.</strong> Students can see, enrol in, and take the course. Only publish when your content is complete and reviewed.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-100 shrink-0 mt-0.5">Archived</Badge>
            <p className="text-sm text-muted-foreground">
              <strong>Hidden from students.</strong> Use this for old courses you no longer offer but want to keep for reference. Existing students lose access.
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-3">
          To change status, click the status dropdown button on any course row (it shows the current status like &quot;Draft&quot; or &quot;Published&quot;) and select the new status. You will be asked to confirm.
        </p>

        <Tip type="warning">
          Publishing a course makes it immediately visible to all students. Always preview your course first using the eye icon button.
        </Tip>
      </Section>

      {/* ────────────────────────────────────────────────────────────────── */}

      <Section id="creating-course" title="Creating and Editing a Course" icon={<IconBook />} open={openSections.has("creating-course")} onToggle={toggle}>
        <p className="text-sm font-semibold text-foreground mb-2">Creating a new course</p>
        <div className="space-y-2">
          <Step n={1}>Go to the <strong>Courses</strong> page and click the green <strong>&quot;New Course&quot;</strong> button.</Step>
          <Step n={2}>Fill in the <strong>Title</strong>. The slug (URL-friendly name) is created automatically. You can edit it if needed.</Step>
          <Step n={3}>Write a <strong>Description</strong> that tells students what the course covers and why it matters.</Step>
          <Step n={4}>Set the <strong>Skill Level</strong> (Beginner, Intermediate, or Advanced) and <strong>Duration</strong> in weeks.</Step>
          <Step n={5}>Choose an <strong>Icon</strong> and <strong>Colour</strong> — these appear on the course card that students see.</Step>
          <Step n={6}>If this course requires students to complete another course first, select it under <strong>Prerequisites</strong>.</Step>
          <Step n={7}>Add <strong>&quot;What You Will Learn&quot;</strong> items — these are the bullet points students see before enrolling. Aim for 4-6 clear learning outcomes.</Step>
          <Step n={8}>Leave status as <strong>Draft</strong> for now. Click <strong>&quot;Create Course&quot;</strong>.</Step>
        </div>

        <p className="text-sm font-semibold text-foreground mt-4 mb-2">Editing an existing course</p>
        <p className="text-sm text-muted-foreground">
          Click the <strong>pencil icon</strong> on any course row to open the edit dialog. All the same fields are available. Click &quot;Save Changes&quot; when done.
        </p>

        <p className="text-sm font-semibold text-foreground mt-4 mb-2">What each field means</p>
        <div className="space-y-2 mt-1">
          <Term term="Title">The course name that students see. Keep it clear and descriptive.</Term>
          <Term term="Slug">The URL-friendly version of the title (e.g., &quot;foundations-pharmacy-practice&quot;). Used internally. Usually you do not need to change this.</Term>
          <Term term="Skill Level">Beginner, Intermediate, or Advanced. Students can filter courses by level on the home page.</Term>
          <Term term="Duration">Estimated time in weeks to complete the course.</Term>
          <Term term="Icon">The symbol shown on the course card. Choose one that represents the subject.</Term>
          <Term term="Colour">The accent colour for the course card.</Term>
          <Term term="Prerequisites">Other courses a student should complete before starting this one.</Term>
          <Term term="What You&apos;ll Learn">Bullet-point learning outcomes shown to students on the course detail page.</Term>
        </div>

        <Tip>You can reorder courses on the home page by changing the &quot;order&quot; value (not shown in the dialog — this is set in the database).</Tip>
      </Section>

      {/* ────────────────────────────────────────────────────────────────── */}

      <Section id="modules" title="Managing Modules" icon={<IconLayers />} open={openSections.has("modules")} onToggle={toggle}>
        <p className="text-sm text-muted-foreground">
          Modules are the chapters of your course. Each module groups related lessons and has its own quiz.
        </p>

        <p className="text-sm font-semibold text-foreground mt-3 mb-2">Adding a module</p>
        <div className="space-y-2">
          <Step n={1}>On the <strong>Courses</strong> page, click on a course row to expand it.</Step>
          <Step n={2}>Click the <strong>&quot;Add Module&quot;</strong> button (top-right of the modules section).</Step>
          <Step n={3}>Enter a <strong>Title</strong> (e.g., &quot;Pharmaceutical Terminology &amp; Medical Abbreviations&quot;).</Step>
          <Step n={4}>Optionally add a <strong>Description</strong> summarising what the module covers.</Step>
          <Step n={5}>Set the <strong>Display Order</strong> number. Module 1 appears first, Module 2 second, and so on.</Step>
          <Step n={6}>Click <strong>&quot;Create Module&quot;</strong>.</Step>
        </div>

        <p className="text-sm text-muted-foreground mt-3">
          To <strong>edit</strong> a module, click the pencil icon on its header. To <strong>delete</strong> a module, click the trash icon.
        </p>

        <Tip type="warning">
          Deleting a module also deletes all its lessons and quiz questions. This cannot be undone.
        </Tip>

        <p className="text-sm text-muted-foreground mt-3">
          Click on a module header to <strong>expand</strong> it and see its lessons and quiz questions inside.
        </p>
      </Section>

      {/* ────────────────────────────────────────────────────────────────── */}

      <Section id="lessons" title="Managing Lessons" icon={<IconFileText />} open={openSections.has("lessons")} onToggle={toggle}>
        <p className="text-sm text-muted-foreground">
          Lessons are the individual pages that students read and learn from. Each lesson contains content blocks — pieces of text, headings, lists, and other elements stacked together.
        </p>

        <p className="text-sm font-semibold text-foreground mt-3 mb-2">Adding a lesson</p>
        <div className="space-y-2">
          <Step n={1}>Expand a course, then expand the module where you want to add the lesson.</Step>
          <Step n={2}>Click the <strong>&quot;Add&quot;</strong> button next to &quot;Lessons&quot;.</Step>
          <Step n={3}>Enter a <strong>Title</strong> for the lesson.</Step>
          <Step n={4}>Set the <strong>Duration</strong> in minutes (how long it takes a student to complete).</Step>
          <Step n={5}>Set the <strong>Display Order</strong> (the position within the module).</Step>
          <Step n={6}>Use the <strong>Content Editor</strong> below to build the lesson content. Add text paragraphs, headings, bullet lists, and other blocks.</Step>
          <Step n={7}>Click <strong>&quot;Create Lesson&quot;</strong>.</Step>
        </div>

        <p className="text-sm font-semibold text-foreground mt-4 mb-2">The Content Editor</p>
        <p className="text-sm text-muted-foreground">
          The content editor lets you build lessons using content blocks. Each block is a piece of content (a paragraph, a heading, a list, etc.). You can add as many blocks as you need and reorder them.
        </p>

        <Tip>
          Keep lessons focused and concise. Aim for 5-7 minutes of reading time per lesson. Students learn better with shorter, focused lessons than long ones.
        </Tip>

        <p className="text-sm text-muted-foreground mt-3">
          To <strong>edit</strong> a lesson, hover over it and click the pencil icon. To <strong>delete</strong>, click the trash icon.
        </p>
      </Section>

      {/* ────────────────────────────────────────────────────────────────── */}

      <Section id="quizzes" title="Managing Quiz Questions" icon={<IconHelpCircle />} open={openSections.has("quizzes")} onToggle={toggle}>
        <p className="text-sm text-muted-foreground">
          Quiz questions test students at the end of each module. Questions belong to the <strong>module</strong>, not to individual lessons. PIXOPHARM supports 7 question types:
        </p>

        <div className="space-y-3 mt-3">
          <div className="rounded-lg border p-3">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs">MC</Badge>
              <p className="font-semibold text-sm">Multiple Choice</p>
            </div>
            <p className="text-xs text-muted-foreground">Student picks ONE correct answer from a list. The most common question type. Use for straightforward fact recall.</p>
          </div>

          <div className="rounded-lg border p-3">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs">MS</Badge>
              <p className="font-semibold text-sm">Multiple Select</p>
            </div>
            <p className="text-xs text-muted-foreground">Student picks ALL correct answers (more than one). Harder than multiple choice. Use when several options apply. Example: &quot;Which of the following are controlled substances in Trinidad?&quot;</p>
          </div>

          <div className="rounded-lg border p-3">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs">T/F</Badge>
              <p className="font-semibold text-sm">True / False</p>
            </div>
            <p className="text-xs text-muted-foreground">Student decides if a statement is true or false. Quick and simple. Use for clear-cut factual statements.</p>
          </div>

          <div className="rounded-lg border p-3">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs">ORD</Badge>
              <p className="font-semibold text-sm">Ordering</p>
            </div>
            <p className="text-xs text-muted-foreground">Student arranges items in the correct sequence. You enter items in the correct order; they are shuffled for the student. Example: &quot;Put these dispensing steps in order.&quot;</p>
          </div>

          <div className="rounded-lg border p-3">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs">MATCH</Badge>
              <p className="font-semibold text-sm">Matching</p>
            </div>
            <p className="text-xs text-muted-foreground">Student matches items in the left column to items in the right column. The right column is shuffled. Example: &quot;Match each drug class to its mechanism of action.&quot;</p>
          </div>

          <div className="rounded-lg border p-3">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs">FIB</Badge>
              <p className="font-semibold text-sm">Fill in the Blank</p>
            </div>
            <p className="text-xs text-muted-foreground">Student types an answer. You provide one or more acceptable answers (e.g., &quot;paracetamol&quot; and &quot;acetaminophen&quot;). You can make it case-sensitive or not.</p>
          </div>

          <div className="rounded-lg border p-3">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs">SCEN</Badge>
              <p className="font-semibold text-sm">Scenario</p>
            </div>
            <p className="text-xs text-muted-foreground">A real-world case study. You write a scenario context (the story), then a question with multiple-choice answers. Tests application of knowledge. Example: &quot;A customer presents a prescription for...&quot;</p>
          </div>
        </div>

        <p className="text-sm font-semibold text-foreground mt-4 mb-2">Adding a quiz question</p>
        <div className="space-y-2">
          <Step n={1}>Expand a course and module. Scroll down past the lessons to the <strong>&quot;Questions&quot;</strong> section.</Step>
          <Step n={2}>Click the <strong>&quot;Add&quot;</strong> button next to &quot;Questions&quot;.</Step>
          <Step n={3}>Select the <strong>Question Type</strong> from the dropdown.</Step>
          <Step n={4}>Optionally set <strong>Difficulty</strong> (Easy, Medium, Hard, Expert) and <strong>Bloom&apos;s Level</strong>.</Step>
          <Step n={5}>Write the <strong>Question</strong> text.</Step>
          <Step n={6}>Fill in the answer options or items depending on the question type. For multiple choice, click the radio button next to the correct answer.</Step>
          <Step n={7}>Write an <strong>Explanation</strong> — this is shown to the student after they answer. Explain WHY the answer is correct.</Step>
          <Step n={8}>Click <strong>&quot;Create Question&quot;</strong>.</Step>
        </div>

        <p className="text-sm font-semibold text-foreground mt-4 mb-2">Difficulty and Bloom&apos;s Level — what are these?</p>
        <p className="text-sm text-muted-foreground">These are optional tags that help you balance your quizzes:</p>
        <div className="space-y-2 mt-2">
          <Term term="Difficulty">How hard the question is. Mix easy, medium, and hard questions in each module quiz. Aim for roughly 30% easy, 50% medium, 20% hard.</Term>
          <Term term="Bloom&apos;s Level">What type of thinking the question requires. &quot;Remember&quot; = recall facts. &quot;Understand&quot; = explain concepts. &quot;Apply&quot; = use knowledge in new situations. &quot;Analyze&quot; and above = higher-order thinking. A good quiz mixes levels.</Term>
        </div>

        <Tip>
          Aim for 8-12 quiz questions per module. Always write an explanation for every question — students learn from feedback even when they get answers right.
        </Tip>
      </Section>

      {/* ────────────────────────────────────────────────────────────────── */}

      <Section id="students" title="Managing Students" icon={<IconTarget />} open={openSections.has("students")} onToggle={toggle}>
        <p className="text-sm text-muted-foreground">
          The Students page shows everyone who has registered on PIXOPHARM. You can:
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2 pl-1">
          <li><strong>Search</strong> by name or island using the search bar</li>
          <li><strong>Sort</strong> by name, progress, or join date using the dropdown</li>
          <li><strong>View details</strong> by clicking a student&apos;s name — shows their enrolled courses, progress per course, lessons completed, and quiz scores</li>
          <li><strong>Export to CSV</strong> by clicking the export button — downloads a spreadsheet of all students</li>
        </ul>

        <p className="text-sm font-semibold text-foreground mt-3 mb-1">Understanding student progress</p>
        <p className="text-sm text-muted-foreground">
          The progress bar and percentage show how much of their enrolled courses a student has completed. It is based on lessons opened and quizzes taken.
        </p>
        <div className="flex items-start gap-3 mt-2">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 shrink-0">Active</Badge>
          <p className="text-sm text-muted-foreground">Student is enrolled in at least one course.</p>
        </div>
        <div className="flex items-start gap-3 mt-1">
          <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-100 shrink-0">Inactive</Badge>
          <p className="text-sm text-muted-foreground">Student registered but is not enrolled in any course.</p>
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────────── */}

      <Section id="analytics" title="Understanding Analytics" icon={<IconZap />} open={openSections.has("analytics")} onToggle={toggle}>
        <p className="text-sm text-muted-foreground">
          The Analytics page gives you a bird&apos;s-eye view of how your platform is performing:
        </p>
        <div className="space-y-2 mt-2">
          <Term term="Total Enrolments">Total number of course enrolments across all students. One student enrolling in 3 courses counts as 3.</Term>
          <Term term="Completion Rate">Percentage of enrolments where the student finished the entire course.</Term>
          <Term term="Avg Quiz Score">The average quiz score across all students and all quizzes.</Term>
          <Term term="Certificates Issued">Number of students who completed a full course (and would receive a certificate).</Term>
          <Term term="Course Popularity">Bar chart showing which courses have the most enrolments. Useful for planning content.</Term>
          <Term term="Progress Distribution">Shows how many students are at 0-25%, 25-50%, 50-75%, and 75-100% progress. If many students are stuck at 0-25%, your courses may need shorter modules or more engaging content.</Term>
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────────── */}

      <Section id="glossary" title="Glossary of Terms" icon={<IconBook />} open={openSections.has("glossary")} onToggle={toggle}>
        <div className="space-y-2">
          <Term term="Course">A complete subject with modules, lessons, and quizzes.</Term>
          <Term term="Module">A chapter within a course. Contains lessons and quiz questions.</Term>
          <Term term="Lesson">A single learning page within a module. Contains text, images, and interactive elements.</Term>
          <Term term="Quiz">The set of questions attached to a module that test student understanding.</Term>
          <Term term="Content Block">A building block inside a lesson — a paragraph, heading, list, image, etc.</Term>
          <Term term="Slug">The URL-friendly version of a title (lowercase, hyphens instead of spaces). Used in web addresses.</Term>
          <Term term="Skill Level">The difficulty tier of a course: Beginner, Intermediate, or Advanced.</Term>
          <Term term="Prerequisites">Courses that should be completed before starting this one.</Term>
          <Term term="Draft">A course status meaning &quot;work in progress&quot; — only admins can see it.</Term>
          <Term term="Published">A course status meaning &quot;live&quot; — students can see and enrol.</Term>
          <Term term="Archived">A course status meaning &quot;retired&quot; — hidden from students but kept for reference.</Term>
          <Term term="Enrolment">When a student signs up for a specific course.</Term>
          <Term term="Bloom&apos;s Level">A framework for categorising questions by thinking depth: Remember, Understand, Apply, Analyse, Evaluate, Create.</Term>
          <Term term="CSV Export">A spreadsheet file format. The student export creates a CSV you can open in Excel or Google Sheets.</Term>
        </div>
      </Section>

      {/* ────────────────────────────────────────────────────────────────── */}

      <Section id="shortcuts" title="Tips and Shortcuts" icon={<IconZap />} open={openSections.has("shortcuts")} onToggle={toggle}>
        <div className="space-y-3">
          <div className="flex gap-3 items-start">
            <kbd className="px-2 py-1 rounded bg-slate-100 text-xs font-mono shrink-0">Esc</kbd>
            <p className="text-sm text-muted-foreground">Press Escape to close any open dialog or exit preview mode.</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-lg shrink-0">👁</span>
            <p className="text-sm text-muted-foreground"><strong>Preview mode:</strong> Click the eye icon on any course to see exactly what students see. Use this before publishing.</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-lg shrink-0">📋</span>
            <p className="text-sm text-muted-foreground"><strong>Hover to reveal:</strong> Edit and delete buttons on lessons and quiz questions appear when you hover your mouse over them.</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-lg shrink-0">📊</span>
            <p className="text-sm text-muted-foreground"><strong>Module badges:</strong> The &quot;M1&quot;, &quot;M2&quot; badges show the display order. The counts (e.g., &quot;3 lessons, 8 quiz questions&quot;) tell you how much content is in each module.</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-lg shrink-0">🎨</span>
            <p className="text-sm text-muted-foreground"><strong>Course card colours:</strong> The left border on each course row shows its status at a glance — green = published, amber = draft, grey = archived.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
