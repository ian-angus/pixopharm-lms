// ============================================================================
// PIXOPHARM LMS — Pharmacology Essentials
// STUB — Will be replaced with full content by build agent
// ============================================================================

import type { Module, FullCourse } from '../types';

const module1: Module = {
  id: "m1-intro-pharmacology",
  number: 1,
  title: "Introduction to Pharmacology: Pharmacokinetics & Pharmacodynamics",
  description: "Understand how drugs move through and act on the human body.",
  learningObjectives: [
    "Define pharmacokinetics and pharmacodynamics",
    "Explain ADME processes with Caribbean medication examples",
  ],
  lessons: [
    {
      id: "m1-l1",
      title: "Introduction to Pharmacology",
      duration: "6 min",
      content: [
        { type: "heading", level: 2, text: "Pharmacology Essentials" },
        { type: "text", body: "Content loading — full course content is being built." },
      ],
    },
  ],
  quiz: [],
};

const pharmacologyCourse: FullCourse = {
  courseId: "pharmacology-essentials",
  title: "Pharmacology Essentials",
  tagline: "How drugs work — from molecules to patients",
  modules: [module1],
};

export default pharmacologyCourse;
