import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  foundationsCourse,
  totalLessons,
  totalQuizQuestions,
} from "@/data/foundationsCourse";
import type {
  Module,
  ContentBlock,
} from "@/data/foundationsCourse";

// ── SVG Icons ───────────────────────────────────────────────────────────────

function IconBack() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}
function IconBook() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
function IconQuiz() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  );
}
function IconCert() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );
}
function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

// ── Types ────────────────────────────────────────────────────────────────────

type View =
  | { page: "overview" }
  | { page: "lesson"; moduleIndex: number; lessonIndex: number }
  | { page: "quiz"; moduleIndex: number }
  | { page: "certificate" };

interface CompletionState {
  lessons: Set<string>;
  quizScores: Record<string, { score: number; total: number }>;
}

// ── Content Renderers ───────────────────────────────────────────────────────

function RenderContent({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      if (block.level === 2)
        return <h2 className="text-2xl font-bold text-[hsl(213,50%,16%)] mt-8 mb-4">{block.text}</h2>;
      if (block.level === 3)
        return <h3 className="text-xl font-semibold text-[hsl(213,50%,16%)] mt-6 mb-3">{block.text}</h3>;
      return <h4 className="text-lg font-semibold text-slate-800 mt-5 mb-2">{block.text}</h4>;

    case "text":
      return <p className="text-slate-700 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{block.body}</p>;

    case "callout": {
      const variants = {
        info: "bg-blue-50 border-blue-300 text-blue-900",
        warning: "bg-amber-50 border-amber-300 text-amber-900",
        tip: "bg-emerald-50 border-emerald-300 text-emerald-900",
        danger: "bg-red-50 border-red-300 text-red-900",
      };
      const icons = { info: "ℹ️", warning: "⚠️", tip: "💡", danger: "🚨" };
      return (
        <div className={`rounded-lg border-l-4 p-4 my-5 ${variants[block.variant]}`}>
          <div className="font-semibold mb-1 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span>{icons[block.variant]}</span> {block.title}
          </div>
          <p className="text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{block.body}</p>
        </div>
      );
    }

    case "list":
      if (block.ordered) {
        return (
          <ol className="list-decimal list-inside space-y-2 my-4 ml-2 text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {block.items.map((item, i) => <li key={i} className="leading-relaxed">{item}</li>)}
          </ol>
        );
      }
      return (
        <ul className="space-y-2 my-4 ml-2 text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[hsl(174,62%,32%)] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div className="my-5 overflow-x-auto">
          {block.caption && (
            <p className="text-sm font-semibold text-slate-600 mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{block.caption}</p>
          )}
          <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-3 py-2.5 text-left font-semibold text-slate-700 border-b border-slate-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2.5 text-slate-600 border-b border-slate-100 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "island-comparison":
      return (
        <div className="my-6 rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-[hsl(213,50%,16%)] px-5 py-3">
            <h4 className="text-white font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{block.title}</h4>
            {block.description && <p className="text-white/70 text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{block.description}</p>}
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {block.islands.map((island, i) => (
              <div key={i} className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{island.flag}</span>
                  <span className="font-semibold text-sm text-slate-800" style={{ fontFamily: "'DM Sans', sans-serif" }}>{island.name}</span>
                </div>
                <ul className="space-y-2">
                  {island.details.map((d, di) => (
                    <li key={di} className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[hsl(174,62%,32%)] shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );

    case "key-term":
      return (
        <div className="my-4 rounded-lg bg-[hsl(174,45%,96%)] border border-[hsl(174,62%,32%)]/20 p-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[hsl(174,62%,32%)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Key Term</span>
          <p className="font-semibold text-slate-800 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{block.term}</p>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{block.definition}</p>
        </div>
      );

    case "case-study":
      return (
        <div className="my-6 rounded-xl border-2 border-[hsl(174,62%,32%)]/30 overflow-hidden">
          <div className="bg-[hsl(174,62%,32%)] px-5 py-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white/80" style={{ fontFamily: "'DM Sans', sans-serif" }}>Case Study</span>
            <h4 className="text-white font-semibold text-sm mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{block.title}</h4>
          </div>
          <div className="p-5">
            <p className="text-sm text-slate-700 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{block.scenario}</p>
            <div className="mb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Discussion Questions</p>
              <ol className="list-decimal list-inside space-y-1.5 text-sm text-slate-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {block.questions.map((q, i) => <li key={i} className="leading-relaxed">{q}</li>)}
              </ol>
            </div>
            <Separator className="my-4" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Discussion</p>
              <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{block.discussion}</p>
            </div>
          </div>
        </div>
      );

    case "video-placeholder":
      return (
        <div className="my-5 rounded-xl bg-slate-900 p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="5 3 19 12 5 21 5 3" fill="white" opacity="0.8" />
            </svg>
          </div>
          <h4 className="text-white font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{block.title}</h4>
          <p className="text-white/60 text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{block.duration} • {block.description}</p>
          <Badge className="mt-3 bg-white/10 text-white/70 border-white/20 text-[10px]">Video Coming Soon</Badge>
        </div>
      );

    case "image-placeholder":
      return (
        <div className="my-5 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <svg viewBox="0 0 24 24" className="w-10 h-10 mx-auto text-slate-400 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <p className="text-sm text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>{block.alt}</p>
          {block.caption && <p className="text-xs text-slate-400 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{block.caption}</p>}
        </div>
      );

    case "divider":
      return <Separator className="my-6" />;

    default:
      return null;
  }
}

// ── Quiz Component ──────────────────────────────────────────────────────────

function QuizView({
  module,
  onComplete,
  existingScore,
}: {
  module: Module;
  onComplete: (score: number, total: number) => void;
  existingScore?: { score: number; total: number };
}) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [scores, setScores] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(!!existingScore);

  const quiz = module.quiz;
  const q = quiz[currentQ];

  if (finished) {
    const score = existingScore?.score ?? scores.filter(Boolean).length;
    const total = existingScore?.total ?? quiz.length;
    const pct = Math.round((score / total) * 100);
    const passed = pct >= 70;

    return (
      <div className="max-w-2xl mx-auto py-12 text-center">
        <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${passed ? "bg-emerald-100" : "bg-amber-100"}`}>
          <span className="text-3xl">{passed ? "🎉" : "📖"}</span>
        </div>
        <h2 className="text-2xl font-bold text-[hsl(213,50%,16%)] mb-2">
          {passed ? "Congratulations!" : "Keep Learning"}
        </h2>
        <p className="text-slate-600 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          You scored <span className="font-bold text-[hsl(213,50%,16%)]">{score}/{total}</span> ({pct}%) on the Module {module.number} quiz.
          {passed
            ? " You've passed this module!"
            : " You need 70% to pass. Review the lessons and try again."}
        </p>
        <Progress value={pct} className="h-3 max-w-xs mx-auto mb-6" />
        {!passed && (
          <Button
            onClick={() => {
              setFinished(false);
              setCurrentQ(0);
              setScores([]);
              setSelected(null);
              setAnswered(false);
            }}
            className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
          >
            Retake Quiz
          </Button>
        )}
      </div>
    );
  }

  const handleSubmit = () => {
    if (selected === null) return;
    setAnswered(true);
  };

  const handleNext = () => {
    const correct = selected === q.correctIndex;
    const newScores = [...scores, correct];
    setScores(newScores);

    if (currentQ < quiz.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      const score = newScores.filter(Boolean).length;
      onComplete(score, quiz.length);
      setFinished(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-sm font-medium text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Question {currentQ + 1} of {quiz.length}
        </span>
        <Progress value={((currentQ + 1) / quiz.length) * 100} className="h-2 flex-1" />
      </div>

      {/* Question */}
      <h3 className="text-lg font-semibold text-[hsl(213,50%,16%)] mb-6">{q.question}</h3>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {q.options.map((opt: string, i: number) => {
          let cls = "border-slate-200 hover:border-[hsl(174,62%,32%)]/50 bg-white";
          if (answered) {
            if (i === q.correctIndex) cls = "border-emerald-500 bg-emerald-50";
            else if (i === selected) cls = "border-red-400 bg-red-50";
          } else if (i === selected) {
            cls = "border-[hsl(174,62%,32%)] bg-[hsl(174,45%,96%)]";
          }

          return (
            <button
              key={i}
              onClick={() => !answered && setSelected(i)}
              disabled={answered}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${cls}`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0 ${
                  answered && i === q.correctIndex
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : answered && i === selected
                    ? "border-red-400 bg-red-400 text-white"
                    : i === selected
                    ? "border-[hsl(174,62%,32%)] bg-[hsl(174,62%,32%)] text-white"
                    : "border-slate-300 text-slate-500"
                }`}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-sm text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>{opt}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <div className={`rounded-lg p-4 mb-6 ${selected === q.correctIndex ? "bg-emerald-50 border border-emerald-200" : "bg-amber-50 border border-amber-200"}`}>
          <p className="text-sm font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {selected === q.correctIndex ? "✓ Correct!" : "✗ Not quite."}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{q.explanation}</p>
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-end">
        {!answered ? (
          <Button
            onClick={handleSubmit}
            disabled={selected === null}
            className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
          >
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNext} className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">
            {currentQ < quiz.length - 1 ? "Next Question →" : "Finish Quiz"}
          </Button>
        )}
      </div>
    </div>
  );
}

// ── Certificate Component ───────────────────────────────────────────────────

function CertificateView({ onBack }: { onBack: () => void }) {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="bg-white rounded-2xl border-2 border-[hsl(174,62%,32%)]/30 overflow-hidden shadow-xl">
        {/* Certificate header */}
        <div className="hero-gradient p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
            <IconCert />
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">Certificate of Completion</h1>
          <p className="text-white/70 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>PIXOPHARM Caribbean Pharmacy Technician Training</p>
        </div>

        {/* Certificate body */}
        <div className="p-10 text-center">
          <p className="text-slate-500 text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>This certifies that</p>
          <p className="text-3xl font-bold text-[hsl(213,50%,16%)] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            [Student Name]
          </p>
          <p className="text-slate-500 text-sm mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>has successfully completed</p>

          <div className="inline-block bg-[hsl(174,45%,96%)] rounded-lg px-6 py-3 mb-6">
            <h2 className="text-xl font-bold text-[hsl(174,62%,32%)]">Foundations of Pharmacy Practice</h2>
            <p className="text-xs text-slate-500 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              8 Modules · {totalLessons} Lessons · {totalQuizQuestions} Assessment Questions
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto my-8">
            <div>
              <p className="text-2xl font-bold text-[hsl(174,62%,32%)]">6</p>
              <p className="text-xs text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Weeks</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[hsl(174,62%,32%)]">Beginner</p>
              <p className="text-xs text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Level</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[hsl(174,62%,32%)]">CARICOM</p>
              <p className="text-xs text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Aligned</p>
            </div>
          </div>

          <Separator className="my-6 max-w-xs mx-auto" />

          <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto mt-6">
            <div>
              <div className="h-px bg-slate-300 mb-2" />
              <p className="text-xs text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Date of Completion</p>
              <p className="text-sm font-medium text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>
            <div>
              <div className="h-px bg-slate-300 mb-2" />
              <p className="text-xs text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Certificate ID</p>
              <p className="text-sm font-medium text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                PXP-FPP-{Math.random().toString(36).substring(2, 8).toUpperCase()}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-8 py-4 text-center border-t">
          <p className="text-xs text-slate-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            This certificate is aligned with CARICOM pharmaceutical standards. Verify at pixopharm.com/verify
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <Button onClick={onBack} variant="outline">← Back to Course</Button>
      </div>
    </div>
  );
}

// ── Main Course Player ──────────────────────────────────────────────────────

export default function CoursePlayer({ onExit }: { onExit: () => void }) {
  const [view, setView] = useState<View>({ page: "overview" });
  const [completion, setCompletion] = useState<CompletionState>({
    lessons: new Set(),
    quizScores: {},
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const course = foundationsCourse;

  // Progress calculation
  const totalItems = course.modules.length + totalLessons; // quizzes + lessons
  const completedItems = completion.lessons.size + Object.keys(completion.quizScores).length;
  const progressPct = Math.round((completedItems / totalItems) * 100);

  const allComplete =
    completion.lessons.size === totalLessons &&
    Object.keys(completion.quizScores).length === course.modules.length &&
    Object.values(completion.quizScores).every((s) => Math.round((s.score / s.total) * 100) >= 70);

  // Mark lesson complete
  const markLessonComplete = (lessonId: string) => {
    setCompletion((prev) => ({
      ...prev,
      lessons: new Set([...prev.lessons, lessonId]),
    }));
  };

  // Save quiz score
  const saveQuizScore = (moduleId: string, score: number, total: number) => {
    setCompletion((prev) => ({
      ...prev,
      quizScores: { ...prev.quizScores, [moduleId]: { score, total } },
    }));
  };

  // Navigation
  const navigateTo = (v: View) => {
    setView(v);
    contentRef.current?.scrollTo(0, 0);
  };

  const goToNextLesson = (moduleIndex: number, lessonIndex: number) => {
    const mod = course.modules[moduleIndex];
    if (lessonIndex < mod.lessons.length - 1) {
      navigateTo({ page: "lesson", moduleIndex, lessonIndex: lessonIndex + 1 });
    } else {
      // Last lesson in module — go to quiz
      navigateTo({ page: "quiz", moduleIndex });
    }
  };

  // Check if module is accessible (previous module quiz passed or first module)
  const isModuleAccessible = (moduleIndex: number) => {
    if (moduleIndex === 0) return true;
    const prevModule = course.modules[moduleIndex - 1];
    const prevScore = completion.quizScores[prevModule.id];
    if (!prevScore) return false;
    return Math.round((prevScore.score / prevScore.total) * 100) >= 70;
  };

  // ── Sidebar ─────────────────────────────────────────────────────────────

  const Sidebar = () => (
    <div className={`${sidebarOpen ? "w-80" : "w-0"} transition-all duration-300 overflow-hidden bg-white border-r border-slate-200 flex-shrink-0`}>
      <ScrollArea className="h-full">
        <div className="p-4">
          {/* Course header */}
          <button onClick={() => navigateTo({ page: "overview" })} className="text-left w-full group mb-4">
            <Badge className="mb-2 bg-blue-50 text-blue-700 border-blue-200 text-[10px]">Beginner · 6 Weeks</Badge>
            <h3 className="text-sm font-bold text-[hsl(213,50%,16%)] group-hover:text-[hsl(174,62%,32%)] transition-colors leading-snug">
              {course.title}
            </h3>
          </button>

          {/* Progress */}
          <div className="mb-5">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Progress</span>
              <span className="font-medium text-[hsl(174,62%,32%)]">{progressPct}%</span>
            </div>
            <Progress value={progressPct} className="h-2" />
          </div>

          <Separator className="mb-4" />

          {/* Module list */}
          <div className="space-y-1">
            {course.modules.map((mod, mi) => {
              const accessible = isModuleAccessible(mi);
              const quizScore = completion.quizScores[mod.id];
              const quizPassed = quizScore && Math.round((quizScore.score / quizScore.total) * 100) >= 70;

              return (
                <div key={mod.id} className="mb-3">
                  {/* Module header */}
                  <div className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs font-semibold ${
                    !accessible ? "text-slate-400" : "text-slate-700"
                  }`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                      quizPassed
                        ? "bg-emerald-500 text-white"
                        : accessible
                        ? "bg-[hsl(174,62%,32%)] text-white"
                        : "bg-slate-200 text-slate-400"
                    }`}>
                      {quizPassed ? "✓" : mi + 1}
                    </span>
                    <span className="truncate">{mod.title}</span>
                  </div>

                  {/* Lessons */}
                  {accessible && (
                    <div className="ml-5 mt-1 space-y-0.5">
                      {mod.lessons.map((lesson, li) => {
                        const isComplete = completion.lessons.has(lesson.id);
                        const isActive =
                          view.page === "lesson" &&
                          view.moduleIndex === mi &&
                          view.lessonIndex === li;

                        return (
                          <button
                            key={lesson.id}
                            onClick={() => navigateTo({ page: "lesson", moduleIndex: mi, lessonIndex: li })}
                            className={`w-full text-left flex items-center gap-2 px-2 py-1.5 rounded text-xs transition-colors ${
                              isActive
                                ? "bg-[hsl(174,45%,96%)] text-[hsl(174,62%,32%)] font-medium"
                                : "text-slate-600 hover:bg-slate-50"
                            }`}
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {isComplete ? (
                              <span className="text-emerald-500"><IconCheck /></span>
                            ) : (
                              <span className="text-slate-400"><IconBook /></span>
                            )}
                            <span className="truncate">{lesson.title}</span>
                            <span className="ml-auto text-[10px] text-slate-400 shrink-0">{lesson.duration}</span>
                          </button>
                        );
                      })}

                      {/* Quiz link */}
                      <button
                        onClick={() => navigateTo({ page: "quiz", moduleIndex: mi })}
                        className={`w-full text-left flex items-center gap-2 px-2 py-1.5 rounded text-xs transition-colors ${
                          view.page === "quiz" && view.moduleIndex === mi
                            ? "bg-[hsl(174,45%,96%)] text-[hsl(174,62%,32%)] font-medium"
                            : quizPassed
                            ? "text-emerald-600"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {quizPassed ? (
                          <span className="text-emerald-500"><IconCheck /></span>
                        ) : (
                          <span className="text-slate-400"><IconQuiz /></span>
                        )}
                        <span>Module Quiz</span>
                        {quizScore && (
                          <span className="ml-auto text-[10px] text-slate-400">{quizScore.score}/{quizScore.total}</span>
                        )}
                      </button>
                    </div>
                  )}

                  {!accessible && (
                    <div className="ml-5 mt-1 flex items-center gap-1.5 text-[10px] text-slate-400 px-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <IconLock /> Complete previous module to unlock
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Certificate */}
          {allComplete && (
            <>
              <Separator className="my-4" />
              <button
                onClick={() => navigateTo({ page: "certificate" })}
                className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-medium hover:bg-emerald-100 transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <IconCert /> View Certificate
              </button>
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  );

  // ── Content Area ────────────────────────────────────────────────────────

  const renderContent = () => {
    // ── Overview ──
    if (view.page === "overview") {
      return (
        <div className="max-w-4xl mx-auto py-8 px-6">
          <div className="mb-8">
            <Badge className="mb-3 bg-blue-50 text-blue-700 border-blue-200">Beginner · 6 Weeks · 8 Modules</Badge>
            <h1 className="text-3xl font-bold text-[hsl(213,50%,16%)] mb-3">{course.title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {course.tagline}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: "Modules", value: course.modules.length },
              { label: "Lessons", value: totalLessons },
              { label: "Quiz Questions", value: totalQuizQuestions },
              { label: "Islands Covered", value: "3" },
            ].map((s) => (
              <Card key={s.label} className="text-center py-4">
                <p className="text-2xl font-bold text-[hsl(174,62%,32%)]">{s.value}</p>
                <p className="text-xs text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</p>
              </Card>
            ))}
          </div>

          {/* Module cards */}
          <h2 className="text-xl font-bold text-[hsl(213,50%,16%)] mb-4">Course Modules</h2>
          <div className="space-y-3">
            {course.modules.map((mod, mi) => {
              const accessible = isModuleAccessible(mi);
              const quizScore = completion.quizScores[mod.id];
              const quizPassed = quizScore && Math.round((quizScore.score / quizScore.total) * 100) >= 70;
              const lessonsComplete = mod.lessons.filter((l) => completion.lessons.has(l.id)).length;

              return (
                <Card
                  key={mod.id}
                  className={`overflow-hidden transition-all ${accessible ? "cursor-pointer hover:shadow-md hover:border-[hsl(174,62%,32%)]/30" : "opacity-60"}`}
                  onClick={() => accessible && navigateTo({ page: "lesson", moduleIndex: mi, lessonIndex: 0 })}
                >
                  <div className="flex items-center gap-4 p-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0 ${
                      quizPassed
                        ? "bg-emerald-100 text-emerald-600"
                        : accessible
                        ? "bg-[hsl(174,45%,96%)] text-[hsl(174,62%,32%)]"
                        : "bg-slate-100 text-slate-400"
                    }`}>
                      {quizPassed ? "✓" : mi + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-[hsl(213,50%,16%)] truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {mod.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {mod.lessons.length} lessons · {mod.quiz.length} quiz questions
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      {quizPassed ? (
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px]">
                          Completed {quizScore.score}/{quizScore.total}
                        </Badge>
                      ) : accessible ? (
                        <div className="text-xs text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {lessonsComplete}/{mod.lessons.length} lessons
                        </div>
                      ) : (
                        <span className="text-slate-400"><IconLock /></span>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Learning objectives */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-[hsl(213,50%,16%)] mb-4">What You'll Learn</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {course.modules.flatMap((m) => m.learningObjectives.slice(0, 1)).map((obj, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <svg viewBox="0 0 20 20" className="w-4 h-4 mt-0.5 fill-[hsl(174,62%,32%)] shrink-0">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  {obj}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // ── Lesson ──
    if (view.page === "lesson") {
      const mod = course.modules[view.moduleIndex];
      const lesson = mod.lessons[view.lessonIndex];
      const isComplete = completion.lessons.has(lesson.id);

      return (
        <div className="max-w-3xl mx-auto py-8 px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <button onClick={() => navigateTo({ page: "overview" })} className="hover:text-[hsl(174,62%,32%)]">Course</button>
            <span>/</span>
            <span>Module {mod.number}</span>
            <span>/</span>
            <span className="text-slate-700 font-medium">{lesson.title}</span>
          </div>

          {/* Lesson header */}
          <div className="mb-8">
            <Badge variant="outline" className="mb-3 text-xs">
              Module {mod.number} · Lesson {view.lessonIndex + 1} of {mod.lessons.length} · {lesson.duration}
            </Badge>
            <h1 className="text-2xl font-bold text-[hsl(213,50%,16%)]">{lesson.title}</h1>
          </div>

          {/* Learning objectives for this module (show on first lesson only) */}
          {view.lessonIndex === 0 && (
            <div className="mb-8 rounded-xl bg-[hsl(174,45%,96%)] border border-[hsl(174,62%,32%)]/20 p-5">
              <h4 className="text-sm font-semibold text-[hsl(174,62%,32%)] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Module {mod.number} Learning Objectives
              </h4>
              <ul className="space-y-2">
                {mod.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <svg viewBox="0 0 20 20" className="w-4 h-4 mt-0.5 fill-[hsl(174,62%,32%)] shrink-0">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Lesson content */}
          {lesson.content.map((block, i) => (
            <RenderContent key={i} block={block} />
          ))}

          {/* Navigation footer */}
          <Separator className="my-8" />
          <div className="flex items-center justify-between">
            <div>
              {view.lessonIndex > 0 && (
                <Button
                  variant="outline"
                  onClick={() => navigateTo({ page: "lesson", moduleIndex: view.moduleIndex, lessonIndex: view.lessonIndex - 1 })}
                >
                  ← Previous Lesson
                </Button>
              )}
            </div>
            <div className="flex items-center gap-3">
              {!isComplete && (
                <Button
                  variant="outline"
                  onClick={() => markLessonComplete(lesson.id)}
                  className="text-emerald-600 border-emerald-200 hover:bg-emerald-50"
                >
                  ✓ Mark Complete
                </Button>
              )}
              {isComplete && (
                <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  ✓ Completed
                </Badge>
              )}
              <Button
                onClick={() => {
                  markLessonComplete(lesson.id);
                  goToNextLesson(view.moduleIndex, view.lessonIndex);
                }}
                className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
              >
                {view.lessonIndex < mod.lessons.length - 1 ? "Next Lesson →" : "Take Module Quiz →"}
              </Button>
            </div>
          </div>
        </div>
      );
    }

    // ── Quiz ──
    if (view.page === "quiz") {
      const mod = course.modules[view.moduleIndex];
      return (
        <div className="max-w-3xl mx-auto py-8 px-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <button onClick={() => navigateTo({ page: "overview" })} className="hover:text-[hsl(174,62%,32%)]">Course</button>
            <span>/</span>
            <span>Module {mod.number}</span>
            <span>/</span>
            <span className="text-slate-700 font-medium">Quiz</span>
          </div>

          <div className="mb-6">
            <Badge variant="outline" className="mb-3 text-xs">Module {mod.number} Assessment</Badge>
            <h1 className="text-2xl font-bold text-[hsl(213,50%,16%)] mb-2">{mod.title}</h1>
            <p className="text-sm text-slate-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Answer {mod.quiz.length} questions. You need 70% to pass and unlock the next module.
            </p>
          </div>

          <QuizView
            module={mod}
            existingScore={completion.quizScores[mod.id]}
            onComplete={(score, total) => saveQuizScore(mod.id, score, total)}
          />

          {/* Next module button */}
          {completion.quizScores[mod.id] &&
            Math.round((completion.quizScores[mod.id].score / completion.quizScores[mod.id].total) * 100) >= 70 && (
              <div className="text-center mt-6">
                {view.moduleIndex < course.modules.length - 1 ? (
                  <Button
                    onClick={() => navigateTo({ page: "lesson", moduleIndex: view.moduleIndex + 1, lessonIndex: 0 })}
                    className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
                  >
                    Start Module {view.moduleIndex + 2}: {course.modules[view.moduleIndex + 1].title} →
                  </Button>
                ) : allComplete ? (
                  <Button
                    onClick={() => navigateTo({ page: "certificate" })}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    🎓 View Your Certificate
                  </Button>
                ) : null}
              </div>
            )}
        </div>
      );
    }

    // ── Certificate ──
    if (view.page === "certificate") {
      return <CertificateView onBack={() => navigateTo({ page: "overview" })} />;
    }

    return null;
  };

  // ── Layout ──────────────────────────────────────────────────────────────

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      {/* Top bar */}
      <div className="h-14 bg-white border-b border-slate-200 flex items-center px-4 gap-3 shrink-0 z-20">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 rounded-md hover:bg-slate-100 text-slate-600">
          {sidebarOpen ? <IconX /> : <IconMenu />}
        </button>
        <Separator orientation="vertical" className="h-6" />
        <button onClick={onExit} className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-[hsl(174,62%,32%)] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <IconBack /> Back to PIXOPHARM
        </button>
        <div className="flex-1" />
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>{progressPct}% complete</span>
          <Progress value={progressPct} className="h-2 w-24" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div ref={contentRef} className="flex-1 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
