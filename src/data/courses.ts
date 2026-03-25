// ============================================================================
// PIXOPHARM LMS - Course Catalog Data
// Caribbean Pharmacy Technician Training Program
// ============================================================================

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  modules: string[];
  durationWeeks: number;
  skillLevel: SkillLevel;
  whatYoullLearn: string[];
  icon: string; // Lucide icon name
  color: string; // Tailwind color class for card accent
  prerequisites: string[]; // course IDs
  order: number; // display order in catalog
}

export const courses: Course[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // 1. Foundations of Pharmacy Practice
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "foundations-pharmacy-practice",
    title: "Foundations of Pharmacy Practice",
    slug: "foundations-pharmacy-practice",
    description:
      "Begin your pharmacy career with a comprehensive grounding in how pharmacies operate across the Caribbean. This course covers essential pharmaceutical terminology, the art and science of prescription interpretation, and the legal and ethical frameworks that govern pharmacy practice in the region. You will graduate with the confidence to work in any Caribbean pharmacy setting, from community dispensaries to hospital pharmacies.",
    modules: [
      "Introduction to Pharmacy: History, Roles & the Caribbean Context",
      "Pharmaceutical Terminology & Medical Abbreviations",
      "Understanding Prescription Orders & Label Requirements",
      "Caribbean Pharmacy Law: Licensing, Scope of Practice & Regulations",
      "Ethics in Pharmacy: Confidentiality, Consent & Professional Conduct",
      "Pharmacy Workflow: From Receiving to Dispensing",
      "Health Systems in the Caribbean: Public, Private & Community Pharmacy",
      "Career Pathways for Pharmacy Technicians in the Caribbean",
    ],
    durationWeeks: 6,
    skillLevel: "Beginner",
    whatYoullLearn: [
      "Interpret prescriptions accurately using standard medical abbreviations and pharmaceutical terminology",
      "Navigate Caribbean pharmacy laws including controlled substance regulations and licensing requirements",
      "Apply ethical decision-making frameworks to real-world pharmacy scenarios",
      "Describe the pharmacy technician's role within Caribbean public and private healthcare systems",
      "Execute standard pharmacy workflow procedures from intake through dispensing",
    ],
    icon: "GraduationCap",
    color: "blue",
    prerequisites: [],
    order: 1,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 2. Pharmaceutical Calculations & Dosage
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "pharmaceutical-calculations-dosage",
    title: "Pharmaceutical Calculations & Dosage",
    slug: "pharmaceutical-calculations-dosage",
    description:
      "Master the mathematical skills that underpin safe and accurate pharmacy practice. From ratio-proportion methods and dimensional analysis to pediatric dosing and IV flow rate calculations, this course builds your competence step by step. Every calculation is contextualized with Caribbean pharmaceutical products and real dispensing scenarios so you can apply what you learn on the job immediately.",
    modules: [
      "Pharmacy Math Fundamentals: Fractions, Decimals, Ratios & Percentages",
      "Systems of Measurement & Unit Conversions (Metric, Apothecary, Household)",
      "Dosage Calculations: Oral Solids, Liquids & Injectables",
      "Pediatric & Weight-Based Dosing Calculations",
      "IV Flow Rates, Drip Rates & Infusion Time Calculations",
      "Compounding Calculations: Dilutions, Concentrations & Alligation",
      "Business Math for Pharmacy: Markup, Discount & Inventory Costing",
    ],
    durationWeeks: 8,
    skillLevel: "Beginner",
    whatYoullLearn: [
      "Perform accurate dosage calculations for oral, injectable, and compounded medications",
      "Convert fluently between metric, apothecary, and household measurement systems",
      "Calculate pediatric doses using weight-based and body surface area methods",
      "Determine IV flow rates and infusion times for common clinical scenarios",
      "Apply alligation and dilution formulas used in compounding practice",
    ],
    icon: "Calculator",
    color: "emerald",
    prerequisites: [],
    order: 2,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 3. Dispensing & Medication Management
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "dispensing-medication-management",
    title: "Dispensing & Medication Management",
    slug: "dispensing-medication-management",
    description:
      "Learn the end-to-end dispensing process and the inventory management strategies that keep Caribbean pharmacies running efficiently. This course addresses the unique challenges of Caribbean supply chains, including managing tropical climate storage conditions, handling import logistics, and ensuring continuous medication availability despite island distribution constraints. You will develop the practical skills to maintain accurate stock records and minimize waste from expiry.",
    modules: [
      "The Dispensing Process: Receiving, Verifying & Labeling Prescriptions",
      "Inventory Management Principles for Caribbean Pharmacies",
      "Procurement & Supply Chain: Importing Medications to the Caribbean",
      "Storage, Handling & Cold Chain Management in Tropical Climates",
      "Expiry Date Management & Stock Rotation (FEFO/FIFO Methods)",
      "Controlled Substance Dispensing, Record-Keeping & Reporting",
      "Technology in Dispensing: Barcode Systems, POS & Pharmacy Software",
      "Medication Returns, Recalls & Waste Disposal Procedures",
    ],
    durationWeeks: 7,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Execute the complete dispensing workflow from prescription receipt to patient handoff with zero-error methodology",
      "Manage pharmaceutical inventory using FEFO/FIFO rotation to minimize waste and expired stock",
      "Maintain compliant controlled substance records and reporting documentation",
      "Implement cold chain management protocols suited to Caribbean tropical conditions",
      "Operate pharmacy management software for dispensing, stock control, and procurement",
    ],
    icon: "Pill",
    color: "violet",
    prerequisites: ["foundations-pharmacy-practice"],
    order: 3,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 4. Pharmacology Essentials
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "pharmacology-essentials",
    title: "Pharmacology Essentials",
    slug: "pharmacology-essentials",
    description:
      "Develop a working knowledge of how drugs act in the body and why this matters at the dispensing counter. This course is tailored to the Caribbean disease landscape, with dedicated coverage of medications for hypertension, diabetes, tropical and vector-borne diseases like dengue and chikungunya, and HIV/AIDS. You will learn to identify critical drug interactions and contraindications that directly impact the patients you serve.",
    modules: [
      "Introduction to Pharmacology: Pharmacokinetics & Pharmacodynamics",
      "Cardiovascular Medications: Hypertension, Heart Failure & Lipid Management",
      "Endocrine & Metabolic Medications: Diabetes, Thyroid & Hormonal Therapies",
      "Anti-Infective Agents: Antibiotics, Antivirals & Antifungals",
      "Tropical & Vector-Borne Disease Treatments: Dengue, Chikungunya, Zika & Malaria",
      "CNS Medications: Pain Management, Mental Health & Neurological Conditions",
      "Drug Interactions, Contraindications & Adverse Effects",
      "Over-the-Counter Medications & Herbal Remedies Common in the Caribbean",
    ],
    durationWeeks: 10,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Classify major drug families and explain their mechanisms of action in patient-friendly terms",
      "Identify critical drug interactions and contraindications for the most-dispensed Caribbean medications",
      "Describe first-line treatments for regionally prevalent conditions including hypertension, diabetes, and tropical diseases",
      "Recognize common adverse drug reactions and understand when to escalate to the pharmacist",
      "Advise on OTC medications and traditional herbal remedies with awareness of interaction risks",
    ],
    icon: "HeartPulse",
    color: "rose",
    prerequisites: ["foundations-pharmacy-practice"],
    order: 4,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 5. Caribbean Pharmaceutical Regulations
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "caribbean-pharmaceutical-regulations",
    title: "Caribbean Pharmaceutical Regulations",
    slug: "caribbean-pharmaceutical-regulations",
    description:
      "Navigate the complex regulatory environment that governs pharmaceutical practice across the Caribbean with confidence. From CARICOM harmonization standards and the Caribbean Regulatory System (CRS) to individual island-state pharmacy acts, this course gives you a thorough understanding of the rules that protect patients and shape your professional responsibilities. Special focus is given to controlled substance scheduling, import/export compliance, and pharmacovigilance reporting.",
    modules: [
      "Overview of Caribbean Health Regulatory Bodies & Their Mandates",
      "The CARICOM Regional Standard for Pharmaceuticals (CRS)",
      "National Pharmacy Acts: Comparing Frameworks Across Caribbean States",
      "Controlled Substances: Scheduling, Handling & International Treaty Obligations",
      "Pharmaceutical Import/Export: Licensing, Customs & Quality Assurance",
      "Drug Registration, Marketing Authorization & Generic Substitution Policies",
      "Record-Keeping, Inspection Readiness & Compliance Auditing",
    ],
    durationWeeks: 5,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Explain the role of CARICOM pharmaceutical standards and how they harmonize regulation across member states",
      "Interpret controlled substance schedules and apply correct handling, storage, and documentation procedures",
      "Ensure compliance with pharmaceutical import/export licensing and customs requirements",
      "Prepare a pharmacy for regulatory inspection by maintaining proper records and standard operating procedures",
      "Differentiate between national regulatory frameworks across key Caribbean jurisdictions",
    ],
    icon: "Scale",
    color: "amber",
    prerequisites: ["foundations-pharmacy-practice"],
    order: 5,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 6. AI in Pharmacy Practice
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "ai-in-pharmacy-practice",
    title: "AI in Pharmacy Practice",
    slug: "ai-in-pharmacy-practice",
    description:
      "Stay ahead of the curve by learning how artificial intelligence is transforming pharmacy operations around the world and how these tools can be applied responsibly in the Caribbean context. This forward-looking course covers practical AI applications from inventory demand forecasting and automated drug interaction alerts to AI-assisted patient counseling support. Equal emphasis is placed on ethical guardrails, data privacy considerations under Caribbean data protection laws, and understanding the limitations of AI in clinical decision-making.",
    modules: [
      "Introduction to AI & Machine Learning for Pharmacy Professionals",
      "AI-Powered Inventory Forecasting & Demand Planning",
      "Clinical Decision Support: Automated Drug Interaction & Allergy Checking",
      "AI-Assisted Patient Counseling & Health Information Tools",
      "Data Privacy, Security & Caribbean Data Protection Regulations",
      "Ethical Considerations: Bias, Transparency & the Human-AI Partnership",
      "Evaluating & Implementing AI Tools in Your Pharmacy",
      "The Future of Pharmacy Technology in the Caribbean",
    ],
    durationWeeks: 4,
    skillLevel: "Advanced",
    whatYoullLearn: [
      "Evaluate AI tools for pharmacy use by assessing accuracy, bias, and suitability for Caribbean practice settings",
      "Use AI-based inventory forecasting to reduce stockouts and minimize pharmaceutical waste",
      "Apply automated drug interaction checking systems while understanding their limitations",
      "Ensure patient data privacy and compliance with Caribbean data protection legislation when using AI tools",
      "Articulate the ethical framework for responsible AI adoption in healthcare",
    ],
    icon: "BrainCircuit",
    color: "cyan",
    prerequisites: [
      "foundations-pharmacy-practice",
      "dispensing-medication-management",
    ],
    order: 6,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 7. Patient Care & Communication
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "patient-care-communication",
    title: "Patient Care & Communication",
    slug: "patient-care-communication",
    description:
      "Become the trusted face of your pharmacy by mastering patient-centered communication techniques adapted for the Caribbean's rich cultural and linguistic diversity. This course trains you to counsel patients on medication use, manage sensitive health conversations, and communicate effectively across English, Spanish, French, and Creole-speaking populations. You will develop the cultural competence and health literacy awareness needed to serve every patient who walks through your door.",
    modules: [
      "Principles of Patient-Centered Care in Pharmacy",
      "Medication Counseling Techniques: The Indian Health Service Model & Beyond",
      "Health Literacy: Assessing Understanding & Adapting Communication",
      "Cultural Sensitivity & Competence in Caribbean Healthcare",
      "Multilingual Communication Strategies: English, Spanish, French & Creole",
      "Managing Difficult Conversations: Adherence, Stigma & Chronic Disease",
      "Patient Rights, Informed Consent & Privacy in the Pharmacy Setting",
    ],
    durationWeeks: 5,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Counsel patients on medication use employing the Show-Tell-Ask method and teach-back verification",
      "Assess patient health literacy levels and adapt communication strategies accordingly",
      "Apply cultural competence principles relevant to Caribbean populations with diverse backgrounds",
      "Communicate essential medication information across multiple Caribbean languages using key pharmaceutical phrases",
      "Handle sensitive health conversations around adherence, stigma, and chronic disease management with empathy",
    ],
    icon: "MessageCircleHeart",
    color: "teal",
    prerequisites: ["foundations-pharmacy-practice"],
    order: 7,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 8. Quality Assurance & Safety
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "quality-assurance-safety",
    title: "Quality Assurance & Safety",
    slug: "quality-assurance-safety",
    description:
      "Build the safety-first mindset that prevents medication errors and protects patients. This course covers the full spectrum of quality assurance in pharmacy, from root cause analysis of dispensing errors and near-misses to implementing standard operating procedures and pharmacovigilance reporting. You will learn to create a culture of continuous improvement in your pharmacy and contribute to regional adverse drug reaction monitoring systems.",
    modules: [
      "Medication Safety: Types, Causes & Consequences of Pharmacy Errors",
      "Error Prevention Strategies: Tall Man Lettering, Barcode Verification & Double Checks",
      "Root Cause Analysis & Incident Reporting for Pharmacy Events",
      "Standard Operating Procedures (SOPs): Writing, Implementing & Auditing",
      "Pharmacovigilance: Adverse Drug Reaction Monitoring & Reporting",
      "Quality Control in Compounding & Dispensing",
      "Continuous Quality Improvement (CQI) Programs for Caribbean Pharmacies",
      "Workplace Safety: Hazardous Drug Handling & Infection Control",
    ],
    durationWeeks: 6,
    skillLevel: "Advanced",
    whatYoullLearn: [
      "Identify the most common types of medication errors and implement proven prevention strategies",
      "Conduct root cause analysis on pharmacy incidents and document findings for continuous improvement",
      "Write, implement, and audit standard operating procedures for pharmacy operations",
      "Report adverse drug reactions through proper pharmacovigilance channels and regional monitoring systems",
      "Establish and maintain a Continuous Quality Improvement program in a Caribbean pharmacy setting",
    ],
    icon: "ShieldCheck",
    color: "orange",
    prerequisites: [
      "foundations-pharmacy-practice",
      "dispensing-medication-management",
    ],
    order: 8,
  },
];

// ============================================================================
// Utility helpers
// ============================================================================

/** Total program duration in weeks (sequential estimate) */
export const totalProgramWeeks = courses.reduce(
  (sum, c) => sum + c.durationWeeks,
  0,
);

/** Lookup a course by its ID */
export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

/** Get courses filtered by skill level */
export function getCoursesByLevel(level: SkillLevel): Course[] {
  return courses.filter((c) => c.skillLevel === level);
}

/** Get prerequisite course objects for a given course */
export function getPrerequisites(course: Course): Course[] {
  return course.prerequisites
    .map((id) => getCourseById(id))
    .filter((c): c is Course => c !== undefined);
}

/** Summary statistics for the catalog */
export const catalogStats = {
  totalCourses: courses.length,
  totalModules: courses.reduce((sum, c) => sum + c.modules.length, 0),
  totalWeeks: totalProgramWeeks,
  byLevel: {
    beginner: getCoursesByLevel("Beginner").length,
    intermediate: getCoursesByLevel("Intermediate").length,
    advanced: getCoursesByLevel("Advanced").length,
  },
} as const;
