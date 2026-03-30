// ============================================================================
// PIXOPHARM LMS — Course Loader Registry
// Dynamic imports for code-splitting: each course loads on demand
// ============================================================================

import type { FullCourse } from './types';

const courseLoaders: Record<string, () => Promise<{ default: FullCourse }>> = {
  "foundations-pharmacy-practice": () => import("./courses/foundationsCourse"),
  "pharmaceutical-calculations-dosage": () => import("./courses/calculationsCourse"),
  "anatomy-physiology-medical-terminology": () => import("./courses/anatomyCourse"),
  "dispensing-medication-management": () => import("./courses/dispensingCourse"),
  "pharmacology-essentials": () => import("./courses/pharmacologyCourse"),
  "caribbean-pharmaceutical-regulations": () => import("./courses/regulationsCourse"),
  "patient-care-communication": () => import("./courses/patientCareCourse"),
  "compounding-dosage-forms": () => import("./courses/compoundingCourse"),
  "customer-service-workplace-excellence": () => import("./courses/customerServiceCourse"),
  "quality-assurance-safety": () => import("./courses/qualitySafetyCourse"),
  "ai-in-pharmacy-practice": () => import("./courses/aiPharmacyCourse"),
  "pharmacy-management-leadership": () => import("./courses/managementCourse"),
  "caribbean-island-pharmacy-practice": () => import("./courses/caribbeanIslandCourse"),
};

export async function loadCourse(courseId: string): Promise<FullCourse | null> {
  const loader = courseLoaders[courseId];
  if (!loader) return null;
  try {
    const mod = await loader();
    return mod.default;
  } catch {
    return null;
  }
}

export function hasCourseContent(courseId: string): boolean {
  return courseId in courseLoaders;
}
