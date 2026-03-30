// ============================================================================
// PIXOPHARM LMS — Shared Types
// Used by all course data files and the CoursePlayer component
// ============================================================================

// ── Content Block Types ─────────────────────────────────────────────────────

export type ContentBlock =
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "text"; body: string }
  | { type: "callout"; variant: "info" | "warning" | "tip" | "danger"; title: string; body: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | {
      type: "island-comparison";
      title: string;
      description?: string;
      islands: {
        name: string;
        flag: string;
        details: string[];
      }[];
    }
  | { type: "key-term"; term: string; definition: string }
  | {
      type: "case-study";
      title: string;
      scenario: string;
      questions: string[];
      discussion: string;
    }
  | { type: "video-placeholder"; title: string; duration: string; description: string }
  | { type: "image-placeholder"; alt: string; caption?: string }
  | { type: "divider" }
  | {
      type: "knowledge-check";
      question: string;
      options: string[];
      correctIndex: number;
      explanation: string;
      hint?: string;
    }
  | {
      type: "scenario-simulation";
      title: string;
      description: string;
      nodes: ScenarioNode[];
    };

// ── Scenario Simulation Types ─────────────────────────────────────────────

export interface ScenarioChoice {
  label: string;
  nextNodeId: string;
  feedback: string;
  isOptimal?: boolean;
}

export interface ScenarioNode {
  id: string;
  text: string;
  image?: string;
  choices?: ScenarioChoice[];
  isEnd?: boolean;
  outcome?: "success" | "partial" | "failure";
  summary?: string;
}

// ── Quiz Types ──────────────────────────────────────────────────────────────

export type QuestionType =
  | 'multiple_choice'
  | 'multiple_select'
  | 'ordering'
  | 'matching'
  | 'fill_in_blank'
  | 'true_false'
  | 'scenario';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  questionType?: QuestionType;
  questionData?: {
    correct_indices?: number[];
    correct_order?: number[];
    pairs?: { left: string; right: string }[];
    acceptable_answers?: string[];
    case_sensitive?: boolean;
    correct_answer?: boolean;
    context?: string;
  };
  difficulty?: 'easy' | 'medium' | 'hard' | 'expert';
  bloomsLevel?: 'remember' | 'understand' | 'apply' | 'analyze' | 'evaluate' | 'create';
}

// ── Lesson & Module Types ───────────────────────────────────────────────────

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  content: ContentBlock[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  learningObjectives: string[];
  lessons: Lesson[];
  quiz: QuizQuestion[];
}

export interface FullCourse {
  courseId: string;
  title: string;
  tagline: string;
  skillLevel?: string;
  durationWeeks?: number;
  modules: Module[];
}
