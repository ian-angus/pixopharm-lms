// ============================================================================
// PIXOPHARM LMS - Course Catalog Data
// Caribbean Pharmacy Technician Training Program
// 13 Courses | 4 Levels | Aligned to COSTAATT & Caribbean Standards
// Developed by Melyn Management Inc.
// ============================================================================

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Regional";

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  modules: string[];
  durationWeeks: number;
  skillLevel: SkillLevel;
  whatYoullLearn: string[];
  icon: string;
  color: string;
  prerequisites: string[];
  order: number;
}

export const courses: Course[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // BEGINNER LEVEL (3 courses)
  // ──────────────────────────────────────────────────────────────────────────

  // B1: Foundations of Pharmacy Practice
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

  // B2: Pharmaceutical Calculations & Dosage
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

  // B3: Anatomy, Physiology & Medical Terminology
  {
    id: "anatomy-physiology-medical-terminology",
    title: "Anatomy, Physiology & Medical Terminology",
    slug: "anatomy-physiology-medical-terminology",
    description:
      "Build the foundational knowledge of the human body and medical language that every pharmacy technician needs. This course covers body systems, common disease states, and the medical terminology used in prescriptions, patient records, and clinical communication. Special emphasis is placed on conditions prevalent in the Caribbean including cardiovascular disease, diabetes, and tropical infectious diseases.",
    modules: [
      "Medical Terminology: Roots, Prefixes, Suffixes & Drug Name Stems",
      "The Cardiovascular System & Common Conditions",
      "The Respiratory, Digestive & Renal Systems",
      "The Endocrine & Nervous Systems",
      "The Musculoskeletal & Integumentary Systems",
      "The Immune System & Infectious Disease in the Caribbean",
    ],
    durationWeeks: 7,
    skillLevel: "Beginner",
    whatYoullLearn: [
      "Decode medical terminology by identifying roots, prefixes, and suffixes in prescriptions and clinical notes",
      "Describe the major body systems and explain how common diseases affect organ function",
      "Identify Caribbean-prevalent conditions including hypertension, diabetes, sickle cell disease, and tropical infections",
      "Connect body system knowledge to drug classifications and therapeutic uses",
      "Use correct anatomical and medical terminology in professional pharmacy communication",
    ],
    icon: "Stethoscope",
    color: "indigo",
    prerequisites: [],
    order: 3,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // INTERMEDIATE LEVEL (6 courses)
  // ──────────────────────────────────────────────────────────────────────────

  // I1: Dispensing & Medication Management
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
    order: 4,
  },

  // I2: Pharmacology Essentials
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
      "Recognise common adverse drug reactions and understand when to escalate to the pharmacist",
      "Advise on OTC medications and traditional herbal remedies with awareness of interaction risks",
    ],
    icon: "HeartPulse",
    color: "rose",
    prerequisites: ["foundations-pharmacy-practice", "anatomy-physiology-medical-terminology"],
    order: 5,
  },

  // I3: Caribbean Pharmaceutical Regulations
  {
    id: "caribbean-pharmaceutical-regulations",
    title: "Caribbean Pharmaceutical Regulations",
    slug: "caribbean-pharmaceutical-regulations",
    description:
      "Navigate the complex regulatory environment that governs pharmaceutical practice across the Caribbean with confidence. From CARICOM harmonisation standards and the Caribbean Regulatory System (CRS) to individual island-state pharmacy acts, this course gives you a thorough understanding of the rules that protect patients and shape your professional responsibilities. Special focus is given to controlled substance scheduling, import/export compliance, and pharmacovigilance reporting.",
    modules: [
      "Overview of Caribbean Health Regulatory Bodies & Their Mandates",
      "The CARICOM Regional Standard for Pharmaceuticals (CRS)",
      "National Pharmacy Acts: Comparing Frameworks Across Caribbean States",
      "Controlled Substances: Scheduling, Handling & International Treaty Obligations",
      "Pharmaceutical Import/Export: Licensing, Customs & Quality Assurance",
      "Drug Registration, Marketing Authorisation & Generic Substitution Policies",
      "Record-Keeping, Inspection Readiness & Compliance Auditing",
    ],
    durationWeeks: 5,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Explain the role of CARICOM pharmaceutical standards and how they harmonise regulation across member states",
      "Interpret controlled substance schedules and apply correct handling, storage, and documentation procedures",
      "Ensure compliance with pharmaceutical import/export licensing and customs requirements",
      "Prepare a pharmacy for regulatory inspection by maintaining proper records and standard operating procedures",
      "Differentiate between national regulatory frameworks across key Caribbean jurisdictions",
    ],
    icon: "Scale",
    color: "amber",
    prerequisites: ["foundations-pharmacy-practice"],
    order: 6,
  },

  // I4: Patient Care & Communication
  {
    id: "patient-care-communication",
    title: "Patient Care & Communication",
    slug: "patient-care-communication",
    description:
      "Become the trusted face of your pharmacy by mastering patient-centred communication techniques adapted for the Caribbean's rich cultural and linguistic diversity. This course trains you to counsel patients on medication use, manage sensitive health conversations, and communicate effectively across English, Spanish, French, and Creole-speaking populations. You will develop the cultural competence and health literacy awareness needed to serve every patient who walks through your door.",
    modules: [
      "Principles of Patient-Centred Care in Pharmacy",
      "Medication Counseling Techniques: Show-Tell-Ask & Beyond",
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

  // I5: Compounding & Dosage Forms
  {
    id: "compounding-dosage-forms",
    title: "Compounding & Dosage Forms",
    slug: "compounding-dosage-forms",
    description:
      "Develop hands-on competence in pharmaceutical compounding — a skill that is especially valued in Caribbean pharmacies where extemporaneous preparations fill gaps left by commercially unavailable products. This course covers non-sterile compounding of creams, ointments, suspensions, and solutions, with emphasis on paediatric formulations and tropical dermatological preparations. You will learn proper technique, quality control measures, and the regulatory requirements that govern compounding practice in the region.",
    modules: [
      "Introduction to Pharmaceutical Dosage Forms",
      "Non-Sterile Compounding: Creams, Ointments & Suspensions",
      "Compounding Equipment, Techniques & Best Practices",
      "Extemporaneous Preparations & Paediatric Formulations",
      "Quality Control in Compounding: Testing, Documentation & SOPs",
      "Compounding Regulations & Record-Keeping in the Caribbean",
    ],
    durationWeeks: 6,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Identify and describe the major pharmaceutical dosage forms and their routes of administration",
      "Prepare non-sterile compounded products following established formulation protocols",
      "Apply proper compounding techniques using mortar and pestle, ointment slab, and other equipment",
      "Perform quality control checks on compounded preparations including pH, weight variation, and visual inspection",
      "Maintain compliant compounding records as required by Caribbean pharmacy regulations",
    ],
    icon: "FlaskConical",
    color: "purple",
    prerequisites: ["foundations-pharmacy-practice", "pharmaceutical-calculations-dosage"],
    order: 8,
  },

  // I6: Customer Service & Workplace Excellence
  {
    id: "customer-service-workplace-excellence",
    title: "Customer Service & Workplace Excellence",
    slug: "customer-service-workplace-excellence",
    description:
      "Bridge the gap between classroom theory and the reality of working in a busy Caribbean pharmacy. This course prepares you for what COSTAATT and textbooks do not teach — handling irate customers whose medication is out of stock, managing a queue of fifteen people with patience and professionalism, asking the right questions when patients describe symptoms in everyday language, and maintaining your own emotional wellbeing through the pressures of pharmacy shift work. You will build the emotional intelligence, customer service skills, and time management discipline that separate good pharmacy technicians from great ones.",
    modules: [
      "The Caribbean Pharmacy: What Your First Day Really Looks Like",
      "Customer Service Excellence: Building Trust at the Counter",
      "Handling Irate Customers: De-escalation & Conflict Resolution",
      "Emotional Intelligence in the Pharmacy Workplace",
      "Time Management & Prioritisation Under Pressure",
      "Asking the Right Questions: Working with Non-Technical Customers",
      "Stress Management, Self-Care & Preventing Burnout",
    ],
    durationWeeks: 5,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Apply the LEAP method (Listen, Empathise, Ask, Propose) to de-escalate confrontations with upset customers",
      "Manage competing demands during peak pharmacy hours using triage-based prioritisation",
      "Gather accurate medication information from patients who describe symptoms in non-medical language",
      "Recognise and regulate your own emotional responses in high-pressure workplace situations",
      "Implement practical stress management strategies to prevent burnout during pharmacy shift work",
    ],
    icon: "Users",
    color: "pink",
    prerequisites: ["foundations-pharmacy-practice"],
    order: 9,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // ADVANCED LEVEL (3 courses)
  // ──────────────────────────────────────────────────────────────────────────

  // A1: Quality Assurance & Safety
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
      "Establish and maintain a Continuous Quality Improvement programme in a Caribbean pharmacy setting",
    ],
    icon: "ShieldCheck",
    color: "orange",
    prerequisites: ["foundations-pharmacy-practice", "dispensing-medication-management"],
    order: 10,
  },

  // A2: AI in Pharmacy Practice
  {
    id: "ai-in-pharmacy-practice",
    title: "AI in Pharmacy Practice",
    slug: "ai-in-pharmacy-practice",
    description:
      "Stay ahead of the curve by learning how artificial intelligence is transforming pharmacy operations around the world and how these tools can be applied responsibly in the Caribbean context. This forward-looking course covers practical AI applications from inventory demand forecasting and automated drug interaction alerts to AI-assisted patient counselling support. Equal emphasis is placed on ethical guardrails, data privacy considerations under Caribbean data protection laws, and understanding the limitations of AI in clinical decision-making.",
    modules: [
      "Introduction to AI & Machine Learning for Pharmacy Professionals",
      "AI-Powered Inventory Forecasting & Demand Planning",
      "Clinical Decision Support: Automated Drug Interaction & Allergy Checking",
      "AI-Assisted Patient Counselling & Health Information Tools",
      "Data Privacy, Security & Caribbean Data Protection Regulations",
      "Ethical Considerations: Bias, Transparency & the Human-AI Partnership",
      "Evaluating & Implementing AI Tools in Your Pharmacy",
      "The Future of Pharmacy Technology in the Caribbean",
    ],
    durationWeeks: 4,
    skillLevel: "Advanced",
    whatYoullLearn: [
      "Evaluate AI tools for pharmacy use by assessing accuracy, bias, and suitability for Caribbean practice settings",
      "Use AI-based inventory forecasting to reduce stockouts and minimise pharmaceutical waste",
      "Apply automated drug interaction checking systems while understanding their limitations",
      "Ensure patient data privacy and compliance with Caribbean data protection legislation when using AI tools",
      "Articulate the ethical framework for responsible AI adoption in healthcare",
    ],
    icon: "BrainCircuit",
    color: "cyan",
    prerequisites: ["foundations-pharmacy-practice", "dispensing-medication-management"],
    order: 11,
  },

  // A3: Pharmacy Management & Leadership
  {
    id: "pharmacy-management-leadership",
    title: "Pharmacy Management & Leadership",
    slug: "pharmacy-management-leadership",
    description:
      "Advance your career into supervisory and management roles with this comprehensive course on pharmacy business operations, team leadership, and strategic planning. Designed for experienced pharmacy technicians ready to take the next step, this course covers financial management, human resources, regulatory compliance, and the informatics systems that drive modern pharmacy operations. Every module is grounded in Caribbean business realities including island supply chain economics and regional regulatory requirements.",
    modules: [
      "Pharmacy Business Operations & Financial Management",
      "Human Resources: Staffing, Scheduling & Team Development",
      "Leadership Skills for Pharmacy Supervisors",
      "Pharmacy Informatics & Technology Management",
      "Regulatory Compliance & Audit Management",
      "Strategic Planning & Continuous Professional Development",
    ],
    durationWeeks: 5,
    skillLevel: "Advanced",
    whatYoullLearn: [
      "Manage pharmacy budgets, revenue streams, and cost control measures effectively",
      "Lead pharmacy teams through scheduling, performance management, and professional development",
      "Apply leadership principles to common pharmacy workplace challenges and team conflicts",
      "Oversee pharmacy informatics systems including dispensing software and electronic health records",
      "Develop strategic plans for pharmacy growth and continuous professional development",
    ],
    icon: "Building2",
    color: "slate",
    prerequisites: ["dispensing-medication-management", "quality-assurance-safety"],
    order: 12,
  },

  // ──────────────────────────────────────────────────────────────────────────
  // REGIONAL LEVEL (1 course with 4 island-specific modules)
  // ──────────────────────────────────────────────────────────────────────────

  // R1: Caribbean Island Pharmacy Practice
  {
    id: "caribbean-island-pharmacy-practice",
    title: "Caribbean Island Pharmacy Practice",
    slug: "caribbean-island-pharmacy-practice",
    description:
      "Complete your training with island-specific knowledge that prepares you to practise pharmacy in your home country. Each module covers the unique regulatory framework, government drug programmes, hospital pharmacy systems, and supply chain realities of a specific Caribbean island. Whether you are working under Trinidad's CDAP programme, Jamaica's NHF system, Barbados's Drug Service, or Grenada's public health network, this course ensures you are ready for the specific requirements of your local practice environment.",
    modules: [
      "Trinidad & Tobago Pharmacy Practice",
      "Jamaica Pharmacy Practice",
      "Barbados Pharmacy Practice",
      "Grenada Pharmacy Practice",
    ],
    durationWeeks: 4,
    skillLevel: "Regional",
    whatYoullLearn: [
      "Navigate the specific pharmacy registration and licensing requirements of your island jurisdiction",
      "Process prescriptions under local government drug programmes (CDAP, NHF, Barbados Drug Service)",
      "Apply island-specific controlled substance regulations and scheduling requirements",
      "Operate within your local hospital pharmacy and public health dispensing systems",
      "Identify the key supply chain pathways and procurement processes specific to your island",
    ],
    icon: "Globe",
    color: "sky",
    prerequisites: [
      "foundations-pharmacy-practice",
      "caribbean-pharmaceutical-regulations",
    ],
    order: 13,
  },
];

// ============================================================================
// Utility helpers
// ============================================================================

export const totalProgramWeeks = courses.reduce(
  (sum, c) => sum + c.durationWeeks,
  0,
);

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getCoursesByLevel(level: SkillLevel): Course[] {
  return courses.filter((c) => c.skillLevel === level);
}

export function getPrerequisites(course: Course): Course[] {
  return course.prerequisites
    .map((id) => getCourseById(id))
    .filter((c): c is Course => c !== undefined);
}

export const catalogStats = {
  totalCourses: courses.length,
  totalModules: courses.reduce((sum, c) => sum + c.modules.length, 0),
  totalWeeks: totalProgramWeeks,
  byLevel: {
    beginner: getCoursesByLevel("Beginner").length,
    intermediate: getCoursesByLevel("Intermediate").length,
    advanced: getCoursesByLevel("Advanced").length,
    regional: getCoursesByLevel("Regional").length,
  },
} as const;
