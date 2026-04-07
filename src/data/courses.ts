// ============================================================================
// PIXOPHARM LMS - Course Catalog Data
// Caribbean Pharmacy Technician Training Program
// Restructured 2026-04 per curriculum review (docx: "Suggested Update")
// 3 Levels: Beginner → Intermediate → Advanced (24 courses)
// Developed by Melyn Management Inc.
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
  icon: string;
  color: string;
  prerequisites: string[];
  order: number;
}

export const courses: Course[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // LEVEL 1 — BEGINNER (7 courses, orders 1–7)
  // ══════════════════════════════════════════════════════════════════════════

  // L1-1: Foundations of Pharmacy Practice
  {
    id: "foundations-pharmacy-practice",
    title: "Foundations of Pharmacy Practice",
    slug: "foundations-pharmacy-practice",
    description:
      "Begin your pharmacy career with a thorough grounding in what pharmacy technicians do, where they work, and how pharmacies operate across the Caribbean. This course covers the history of pharmacy, the full scope of roles in community, hospital, retail, and regulatory settings, and the professional standards that define the technician's responsibilities. You will finish with a clear picture of your career pathway and the foundations needed to progress through the diploma.",
    modules: [
      "History of Pharmacy: From Ancient Remedies to Modern Practice",
      "Roles and Responsibilities of the Pharmacy Technician",
      "Community, Retail, and Chain Pharmacy Settings",
      "Hospital and Institutional Pharmacy Settings",
      "Regulatory and Government Pharmacy Roles",
      "The Healthcare Team: Working with Pharmacists and Clinicians",
      "Pharmacy Workflow: From Receiving to Dispensing",
      "Career Pathways for Pharmacy Technicians in the Caribbean",
    ],
    durationWeeks: 5,
    skillLevel: "Beginner",
    whatYoullLearn: [
      "Describe the full range of pharmacy technician roles across community, hospital, and regulatory settings",
      "Explain the Caribbean pharmacy technician's scope of practice and supervision requirements",
      "Outline the standard pharmacy workflow from prescription receipt through to patient handoff",
      "Identify career progression pathways and continuing education requirements in the region",
      "Distinguish between public, private, and government pharmacy practice in the Caribbean",
    ],
    icon: "GraduationCap",
    color: "blue",
    prerequisites: [],
    order: 1,
  },

  // L1-2: Medical & Pharmaceutical Terminology
  {
    id: "medical-pharmaceutical-terminology",
    title: "Medical & Pharmaceutical Terminology",
    slug: "medical-pharmaceutical-terminology",
    description:
      "Master the language of pharmacy. This course builds your fluency in the medical and pharmaceutical terms, abbreviations, and sig codes that appear on every prescription you will ever process. You will decode Latin-based prescription directions, interpret common medical abbreviations, and understand drug name conventions — brand versus generic, chemical versus USAN names. Caribbean-specific terminology and locally common abbreviations are woven throughout.",
    modules: [
      "Prescription Structure: Reading Every Line with Confidence",
      "Sig Codes and Latin Abbreviations: Dosing Directions Decoded",
      "Drug Name Conventions: Brand, Generic, USAN, and Chemical Names",
      "Medical Abbreviations Used in Prescriptions and Patient Records",
      "Body System Terminology: Common Roots, Prefixes, and Suffixes",
      "Drug Label Requirements and Auxiliary Label Standards",
      "Error-Prone Abbreviations and High-Alert Drug Names",
    ],
    durationWeeks: 4,
    skillLevel: "Beginner",
    whatYoullLearn: [
      "Interpret prescription sig codes and Latin abbreviations accurately in dispensing workflows",
      "Distinguish between brand, generic, and chemical drug names and know when each is used",
      "Apply medical word-building rules (roots, prefixes, suffixes) to decode unfamiliar clinical terms",
      "Recognise error-prone abbreviations and understand why they are flagged by safety bodies",
      "Read and verify drug labels against prescriptions using correct terminology",
    ],
    icon: "BookOpen",
    color: "indigo",
    prerequisites: ["foundations-pharmacy-practice"],
    order: 2,
  },

  // L1-3: Anatomy, Physiology & Basic Pharmacology
  {
    id: "anatomy-physiology-medical-terminology",
    title: "Anatomy, Physiology & Basic Pharmacology",
    slug: "anatomy-physiology-medical-terminology",
    description:
      "Build the body knowledge that every pharmacy technician needs. This course covers the major body systems, the diseases that affect them, and how drugs interact with the body — from how medications are absorbed and metabolised to how they produce their effects. Special emphasis is placed on conditions prevalent in the Caribbean, including hypertension, diabetes, sickle cell disease, and tropical infections, so you can connect anatomy and pharmacology directly to the patients you will serve.",
    modules: [
      "How the Body Works: Cells, Tissues, Organs, and Systems",
      "The Cardiovascular System and Common Conditions",
      "The Respiratory, Digestive, and Renal Systems",
      "The Endocrine and Nervous Systems",
      "The Musculoskeletal and Integumentary Systems",
      "The Immune System and Infectious Disease in the Caribbean",
      "Introduction to Pharmacokinetics: Absorption, Distribution, Metabolism, Excretion",
      "Introduction to Pharmacodynamics: How Drugs Produce Their Effects",
    ],
    durationWeeks: 7,
    skillLevel: "Beginner",
    whatYoullLearn: [
      "Describe the major body systems and explain how common diseases disrupt normal function",
      "Identify Caribbean-prevalent conditions including hypertension, diabetes, sickle cell disease, and tropical infections",
      "Explain the four pharmacokinetic processes and how they determine dosing schedules",
      "Connect drug classifications to their target body systems and mechanisms of action",
      "Use correct anatomical and pharmacological terminology in professional pharmacy communication",
    ],
    icon: "Stethoscope",
    color: "emerald",
    prerequisites: ["foundations-pharmacy-practice"],
    order: 3,
  },

  // L1-4: Professionalism, Communication & Emotional Intelligence
  {
    id: "professionalism-communication-ei",
    title: "Professionalism, Communication & Emotional Intelligence",
    slug: "professionalism-communication-ei",
    description:
      "Pharmacy technicians are the human face of healthcare for many patients — and the way you communicate can make or break a patient's experience. This course develops the professional conduct, communication skills, and emotional intelligence that separate excellent technicians from merely competent ones. You will learn to manage your own emotional responses under pressure, deliver difficult information with empathy, handle irate customers using proven de-escalation techniques, and build the trust that keeps patients coming back.",
    modules: [
      "Professional Standards: Appearance, Punctuality, and Workplace Conduct",
      "Verbal Communication Skills: Clarity, Tone, and Active Listening",
      "Non-Verbal Communication: Body Language, Eye Contact, and Presence",
      "Emotional Intelligence: Self-Awareness and Emotional Regulation",
      "Empathy in Healthcare: Serving Patients with Dignity",
      "De-escalation and Conflict Resolution at the Counter",
      "Written Communication: Notes, Emails, and Handover Documentation",
      "Stress Management and Preventing Burnout in Pharmacy Work",
    ],
    durationWeeks: 5,
    skillLevel: "Beginner",
    whatYoullLearn: [
      "Apply professional conduct standards consistently across all pharmacy interactions",
      "Use active listening techniques to fully understand patient and team communication",
      "Recognise and regulate your own emotional responses in high-pressure situations",
      "De-escalate confrontations with upset patients using the LEAP framework (Listen, Empathise, Ask, Propose)",
      "Communicate sensitively with patients experiencing stigma, chronic illness, or mental health challenges",
    ],
    icon: "HeartHandshake",
    color: "rose",
    prerequisites: ["foundations-pharmacy-practice"],
    order: 4,
  },

  // L1-5: Caribbean Pharmacy Law, Ethics & Regulation
  {
    id: "caribbean-pharmacy-law-ethics",
    title: "Caribbean Pharmacy Law, Ethics & Regulation",
    slug: "caribbean-pharmacy-law-ethics",
    description:
      "Every pharmacy technician in the Caribbean practices within a complex web of national laws, regional standards, and professional ethics codes — and getting it wrong has serious consequences. This course gives you a thorough grounding in the regulatory frameworks that govern your work: from island-specific pharmacy acts and the licensing of technicians to controlled drug handling requirements, patient confidentiality obligations, and the ethical principles that guide decision-making when the rules do not give a clear answer.",
    modules: [
      "Caribbean Pharmacy Governance: National Boards and Their Mandates",
      "Technician Licensing, Scope of Practice, and Supervision Rules",
      "Pharmacy Acts Compared: T&T, Jamaica, Barbados, and Grenada",
      "Prescription-Only vs OTC Drug Classifications in the Caribbean",
      "Controlled and Narcotic Substances: Handling, Storage, and Record-Keeping",
      "Patient Confidentiality, Consent, and Digital Health Records",
      "Ethics in Pharmacy: Frameworks for Difficult Decisions",
      "Documentation Standards and Inspection Readiness",
    ],
    durationWeeks: 5,
    skillLevel: "Beginner",
    whatYoullLearn: [
      "Explain the licensing requirements and scope of practice for pharmacy technicians in at least three Caribbean jurisdictions",
      "Apply the correct controlled substance handling, storage, and documentation procedures",
      "Distinguish between prescription-only and OTC drug classifications under Caribbean law",
      "Uphold patient confidentiality and consent obligations under local data protection legislation",
      "Apply an ethical decision-making framework to real-world pharmacy dilemmas",
    ],
    icon: "Scale",
    color: "amber",
    prerequisites: ["foundations-pharmacy-practice"],
    order: 5,
  },

  // L1-6: Basic Pharmacy Workflow
  {
    id: "basic-pharmacy-workflow",
    title: "Basic Pharmacy Workflow",
    slug: "basic-pharmacy-workflow",
    description:
      "This hands-on course walks you through a real pharmacy day — step by step, task by task. You will learn to receive and triage prescriptions, perform basic accuracy checks, retrieve and count medications, apply labels correctly, and complete the handover to the patient. The emphasis is on building reliable habits and systematic processes that prevent errors from the very beginning. Every workflow is contextualised for Caribbean community and retail pharmacy environments.",
    modules: [
      "A Day in the Pharmacy: Typical Workflows and Shift Structure",
      "Receiving Prescriptions: Intake, Triage, and Initial Checks",
      "Retrieving and Counting Medications: Accuracy Techniques",
      "Labelling Prescriptions: Content, Format, and Verification",
      "Dispensing to Patients: Handover Process and Counselling Handoff",
      "Refill Processing and Repeat Prescription Management",
      "Basic Inventory Awareness: Spotting Low Stock and Expiry Issues",
      "End-of-Shift Procedures: Handover Notes and Closing Tasks",
    ],
    durationWeeks: 4,
    skillLevel: "Beginner",
    whatYoullLearn: [
      "Execute the complete prescription intake process from receipt through initial accuracy checks",
      "Count and retrieve medications accurately using zero-error counting techniques",
      "Produce a correctly formatted dispensing label for common prescription types",
      "Complete a safe and professional patient handover including counselling referral",
      "Identify out-of-stock and near-expiry items during routine dispensing and escalate appropriately",
    ],
    icon: "ClipboardList",
    color: "teal",
    prerequisites: ["foundations-pharmacy-practice", "medical-pharmaceutical-terminology"],
    order: 6,
  },

  // L1-7: Digital Learning Skills & Study Skills
  {
    id: "digital-learning-study-skills",
    title: "Digital Learning Skills & Study Skills",
    slug: "digital-learning-study-skills",
    description:
      "Online learning is a skill — and one that most students are never explicitly taught. This orientation course gives you everything you need to succeed in the Pixopharm diploma programme and in the digital healthcare environment you will enter. You will learn how to study effectively using evidence-based techniques, manage your time around work and family, navigate online pharmacy databases and clinical references, and protect patient data in digital pharmacy systems.",
    modules: [
      "Navigating the Pixopharm Platform: Your Learning Dashboard",
      "Evidence-Based Study Techniques: Active Recall and Spaced Repetition",
      "Time Management for Working Adult Learners",
      "Reading and Retaining Technical Healthcare Material",
      "Using Clinical References: BNF, Micromedex, and Online Drug Databases",
      "Digital Professionalism: Social Media, Patient Privacy, and Online Conduct",
      "Critical Thinking and Source Evaluation for Healthcare Information",
    ],
    durationWeeks: 2,
    skillLevel: "Beginner",
    whatYoullLearn: [
      "Apply spaced repetition and active recall techniques to retain pharmacy content long-term",
      "Create a personalised study schedule that fits around work and family commitments",
      "Navigate online drug databases and clinical reference tools used in Caribbean pharmacies",
      "Apply digital professionalism standards to social media and online healthcare communication",
      "Evaluate online health information for accuracy, bias, and clinical reliability",
    ],
    icon: "Monitor",
    color: "sky",
    prerequisites: [],
    order: 7,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // LEVEL 2 — INTERMEDIATE (10 courses, orders 8–17)
  // ══════════════════════════════════════════════════════════════════════════

  // L2-1: Prescription Processing & Workflow
  {
    id: "dispensing-medication-management",
    title: "Prescription Processing & Workflow",
    slug: "dispensing-medication-management",
    description:
      "Go deep into the prescription dispensing process with a focus on accuracy, clinical flag recognition, and near-miss prevention. This course covers data entry into pharmacy management systems, electronic and paper-based label generation, order verification procedures, and the systematic checks that catch errors before they reach patients. You will work through real dispensing scenarios involving duplicate prescriptions, drug interactions flagged by software, and OTC consultation boundary situations common in Caribbean practice.",
    modules: [
      "Data Entry and Prescription Processing in Pharmacy Management Systems",
      "Label Generation: Electronic and Manual Processes",
      "Clinical Flag Recognition: Drug Interactions, Contraindications, and Dosing Alerts",
      "Order Verification: Pharmacist Check Protocols and Technician Responsibilities",
      "Near-Miss Detection and Error-Catching Techniques",
      "Controlled Substance Dispensing: Step-by-Step Processing and Records",
      "Emergency Supply Procedures and Out-of-Hours Dispensing",
      "Handling Queries: When to Refer Up to the Pharmacist",
    ],
    durationWeeks: 7,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Process prescriptions accurately through a pharmacy management system including data entry and label generation",
      "Identify and escalate clinical flags including drug interactions, dosing errors, and contraindications",
      "Apply order verification protocols and understand the technician's role in the two-check system",
      "Complete controlled substance dispensing records in compliance with Caribbean regulations",
      "Recognise common near-miss patterns and implement personal error-prevention habits",
    ],
    icon: "Pill",
    color: "violet",
    prerequisites: ["foundations-pharmacy-practice", "basic-pharmacy-workflow", "medical-pharmaceutical-terminology"],
    order: 8,
  },

  // L2-2: OTC Medications & Health Advice Boundaries
  {
    id: "otc-medications-health-advice",
    title: "OTC Medications & Health Advice Boundaries",
    slug: "otc-medications-health-advice",
    description:
      "Patients regularly ask pharmacy technicians for advice on over-the-counter products — and knowing what you can appropriately recommend versus when you must refer to the pharmacist is critical for patient safety and legal compliance. This course covers the most commonly requested OTC categories in Caribbean pharmacies, the clinical boundaries of technician advice, and how to use structured questioning (symptom assessment) to gather the information needed without overstepping your scope.",
    modules: [
      "The OTC vs Prescription Boundary in Caribbean Pharmacy Law",
      "Pain and Fever: Analgesics, Antipyretics, and Common Mistakes",
      "Coughs, Colds, and Respiratory OTC Products",
      "Gastrointestinal OTCs: Antacids, Laxatives, and Anti-diarrhoeals",
      "Topical Products: Antiseptics, Antifungals, and Wound Care",
      "Vitamins, Supplements, and Herbal Remedies in the Caribbean",
      "Structured Symptom Assessment: What to Ask and What to Listen For",
      "Knowing When to Refer: Red Flag Symptoms and Mandatory Escalation",
    ],
    durationWeeks: 5,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Identify the legal boundary between technician OTC advice and pharmacist-required consultation in your jurisdiction",
      "Recommend appropriate OTC products for minor ailments using a structured assessment framework",
      "Advise on potential interactions between OTC medications, herbal remedies, and prescription drugs",
      "Recognise red flag symptoms that require immediate referral to the pharmacist or emergency care",
      "Discuss the evidence base and safety profile of common herbal and natural remedies used in the Caribbean",
    ],
    icon: "ShoppingBag",
    color: "orange",
    prerequisites: ["foundations-pharmacy-practice", "anatomy-physiology-medical-terminology"],
    order: 9,
  },

  // L2-3: Pharmacy Calculations
  {
    id: "pharmaceutical-calculations-dosage",
    title: "Pharmacy Calculations",
    slug: "pharmaceutical-calculations-dosage",
    description:
      "Mathematical accuracy is a patient safety issue. This course builds your calculation competence step by step — from basic ratio-proportion methods and unit conversions through to paediatric weight-based dosing, IV flow rates, and compounding alligation. Every problem set uses real Caribbean pharmaceutical products and dispensing scenarios so that you are practising exactly what you will encounter on the job. Calculators are allowed where appropriate, but the emphasis is on understanding the method, not just the answer.",
    modules: [
      "Pharmacy Math Foundations: Fractions, Decimals, Ratios, and Percentages",
      "Systems of Measurement and Unit Conversions: Metric, Apothecary, Household",
      "Dosage Calculations: Oral Solids, Liquids, and Injectables",
      "Paediatric and Weight-Based Dosing Calculations",
      "IV Flow Rates, Drip Rates, and Infusion Time Calculations",
      "Compounding Calculations: Dilutions, Concentrations, and Alligation",
      "Reimbursement and Business Math: Markup, Discount, and Inventory Costing",
      "Calculation Error Prevention: Check Methods and Double Verification",
    ],
    durationWeeks: 8,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Perform accurate dosage calculations for oral, injectable, and compounded medications using multiple methods",
      "Convert fluently between metric, apothecary, and household measurement systems",
      "Calculate paediatric doses using weight-based and body surface area methods",
      "Determine IV flow rates and infusion times for common clinical scenarios",
      "Apply alligation and dilution formulas used in compounding practice",
    ],
    icon: "Calculator",
    color: "cyan",
    prerequisites: ["foundations-pharmacy-practice", "basic-pharmacy-workflow"],
    order: 10,
  },

  // L2-4: Basic Compounding Techniques
  {
    id: "compounding-dosage-forms",
    title: "Basic Compounding Techniques",
    slug: "compounding-dosage-forms",
    description:
      "Pharmaceutical compounding fills critical gaps in Caribbean pharmacies — producing paediatric formulations, dermatological preparations suited to tropical climates, and products simply not available commercially on smaller islands. This course covers the theory and technique of non-sterile compounding including creams, ointments, suspensions, and solutions. You will learn proper equipment use, quality control checks, documentation requirements, and the regulations that govern compounding practice across the region.",
    modules: [
      "Introduction to Pharmaceutical Dosage Forms and Their Properties",
      "Compounding Equipment: Mortars, Pestles, Spatulas, and Balances",
      "Non-Sterile Compounding: Creams, Ointments, and Topical Preparations",
      "Compounding Liquids: Suspensions, Solutions, and Syrups",
      "Extemporaneous Preparations and Paediatric Formulations",
      "Quality Control in Compounding: Visual Inspection, Weight Variation, and pH",
      "Compounding Documentation, SOPs, and Caribbean Regulatory Requirements",
    ],
    durationWeeks: 6,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Identify major pharmaceutical dosage forms and select appropriate compounding methods",
      "Prepare non-sterile compounded products following established formulation protocols",
      "Apply proper compounding techniques using mortar and pestle, ointment slab, and balance equipment",
      "Perform quality control checks on compounded preparations including weight variation and visual inspection",
      "Maintain compliant compounding records as required by Caribbean pharmacy regulations",
    ],
    icon: "FlaskConical",
    color: "purple",
    prerequisites: ["foundations-pharmacy-practice", "pharmaceutical-calculations-dosage"],
    order: 11,
  },

  // L2-5a: Pharmacology, Drug Classes & Body Systems — Part 1
  // (Penn Foster-aligned split: body systems + core drug classes first)
  {
    id: "pharmacology-essentials",
    title: "Pharmacology & Body Systems — Part 1",
    slug: "pharmacology-essentials",
    description:
      "Build the pharmacological foundation you need to understand what every drug in your dispensary actually does. Part 1 focuses on the body systems most affected by the medications Caribbean technicians dispense every day — cardiovascular, respiratory, endocrine, gastrointestinal, and renal — linking anatomy and disease directly to the drug classes that treat them. Every drug group is introduced with its mechanism of action, common examples, key adverse effects, and the dispensing considerations that matter at the counter.",
    modules: [
      "Drug Classification Systems: How Medications Are Named, Grouped, and Identified",
      "Cardiovascular Medications: Antihypertensives, Heart Failure, and Lipid Agents",
      "Respiratory Medications: Asthma, COPD, and Allergy Treatments",
      "Endocrine and Metabolic Medications: Diabetes, Thyroid, and Hormone Therapies",
      "Gastrointestinal Medications: Antacids, Antiemetics, Laxatives, and IBD Drugs",
      "Renal and Urological Medications: Diuretics and Bladder Agents",
      "Drug Forms, Routes of Administration, and Medication Storage",
      "Introduction to Drug Interactions and Adverse Drug Reactions",
    ],
    durationWeeks: 6,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Explain the mechanism of action of major cardiovascular, respiratory, endocrine, and GI drug classes",
      "Identify first-line medications for hypertension, diabetes, asthma, and GORD commonly dispensed in the Caribbean",
      "Connect drug routes of administration and storage requirements to dispensing accuracy",
      "Recognise common drug interactions and adverse effects for core drug families",
      "Use drug classification knowledge to quickly look up unfamiliar medications by therapeutic category",
    ],
    icon: "HeartPulse",
    color: "rose",
    prerequisites: ["anatomy-physiology-medical-terminology", "dispensing-medication-management"],
    order: 12,
  },

  // L2-5b: Pharmacology, Drug Classes & Body Systems — Part 2
  // (Penn Foster-aligned: CNS, immune, tropical diseases, interactions)
  {
    id: "pharmacology-advanced",
    title: "Pharmacology & Body Systems — Part 2",
    slug: "pharmacology-advanced",
    description:
      "Part 2 completes your pharmacological training with the drug classes and disease states that define Caribbean pharmacy practice. Tropical and vector-borne disease treatments, HIV/AIDS therapies, CNS and mental health medications, dermatological agents, and the immune system are all covered in detail. The course concludes with a systematic approach to identifying complex drug interactions, contraindications, and the OTC and herbal remedy landscape unique to the Caribbean — giving you the clinical confidence to flag safety issues before they reach patients.",
    modules: [
      "Musculoskeletal and Integumentary Medications: NSAIDs, Corticosteroids, and Topicals",
      "CNS Medications: Analgesics, Antidepressants, Antipsychotics, and Anxiolytics",
      "Neurological Medications: Anticonvulsants, Parkinson's, and Migraine Treatments",
      "Immune System Medications: Immunosuppressants, Biologics, and Vaccines",
      "Anti-Infective Agents: Antibiotics, Antivirals, and Antifungals in Depth",
      "Tropical and Vector-Borne Disease Treatments: Dengue, Chikungunya, Zika, Malaria, and HIV",
      "Complex Drug Interactions, Contraindications, and High-Risk Combinations",
      "OTC Products and Caribbean Herbal Remedies: Evidence, Safety, and Interactions",
    ],
    durationWeeks: 6,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Describe the drug classes used for CNS conditions, tropical diseases, and immune system disorders",
      "Identify the first-line anti-infective treatments for conditions prevalent in the Caribbean",
      "Explain HIV/AIDS treatment regimens and the pharmacy technician's role in adherence support",
      "Apply a systematic process to identify complex drug interactions and contraindications in dispensing",
      "Advise on the safety profile and interaction risks of common Caribbean herbal remedies",
    ],
    icon: "Microscope",
    color: "pink",
    prerequisites: ["pharmacology-essentials"],
    order: 13,
  },

  // L2-6: Medication Safety & Error Prevention
  {
    id: "medication-safety-error-prevention",
    title: "Medication Safety & Error Prevention",
    slug: "medication-safety-error-prevention",
    description:
      "Medication errors cause preventable patient harm every day — and most are caused not by careless individuals but by predictable systems failures. This course equips you with the mindset, skills, and tools to interrupt error chains before they reach patients. You will study the most common error types in Caribbean dispensing practice, learn to apply proven prevention strategies including Tall Man lettering and barcode verification, and practise incident reporting and root cause analysis using real-world pharmacy scenarios.",
    modules: [
      "Medication Error Types, Causes, and Consequences",
      "Human Factors in Error: Cognitive Bias, Fatigue, and Distraction",
      "High-Alert Medications and LASA Drug Pairs in Caribbean Practice",
      "Tall Man Lettering, Barcode Verification, and Double-Check Protocols",
      "Near-Miss Reporting and Learning from Close Calls",
      "Root Cause Analysis: Investigating Incidents Without Blame",
      "Standard Operating Procedures: Writing and Following Them",
      "Building a Safety Culture in Your Pharmacy Team",
    ],
    durationWeeks: 5,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Identify the most common medication error types and the system factors that contribute to them",
      "Apply Tall Man lettering, barcode checking, and independent double-check procedures in dispensing",
      "Recognise high-alert medications and LASA (look-alike/sound-alike) drug pairs requiring extra caution",
      "Complete a near-miss or incident report accurately and constructively",
      "Conduct a basic root cause analysis of a dispensing error and recommend preventive changes",
    ],
    icon: "ShieldAlert",
    color: "red",
    prerequisites: ["dispensing-medication-management"],
    order: 14,
  },

  // L2-7: Inventory Management, Storage, Cold Chain & Supply Chain
  {
    id: "inventory-management-supply-chain",
    title: "Inventory Management, Storage, Cold Chain & Supply Chain",
    slug: "inventory-management-supply-chain",
    description:
      "Running out of a critical medication in a Caribbean pharmacy is more than an inconvenience — for patients with chronic conditions or tropical disease complications, it can be dangerous. This course covers the full pharmaceutical supply chain from manufacturer to patient, with particular attention to the challenges unique to island-based pharmacy practice: irregular shipping, tropical climate storage demands, cold chain requirements, and the FEFO/FIFO rotation methods that prevent expired stock waste.",
    modules: [
      "Pharmaceutical Supply Chain: From Manufacturer to Dispensing Counter",
      "Procurement Principles: Ordering, Reorder Points, and Economic Order Quantity",
      "Storage Requirements: Temperature, Light, Humidity, and Security",
      "Cold Chain Management in Tropical Climates: Vaccines, Insulins, and Biologics",
      "Stock Rotation: FEFO and FIFO Methods in Practice",
      "Expiry Date Management and Handling of Expired Stock",
      "Controlled Substance Stock Control: Registers, Audits, and Reconciliation",
      "Caribbean Import Logistics and Managing Shortages on Island",
    ],
    durationWeeks: 6,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Apply FEFO and FIFO stock rotation to minimise pharmaceutical waste from expiry",
      "Manage cold chain storage for temperature-sensitive medications in tropical conditions",
      "Maintain controlled substance stock registers and perform reconciliation audits",
      "Calculate reorder points and economic order quantities for a community pharmacy setting",
      "Identify and manage pharmaceutical shortages using alternative sourcing and patient communication strategies",
    ],
    icon: "Package",
    color: "green",
    prerequisites: ["dispensing-medication-management"],
    order: 15,
  },

  // L2-8: Documentation, Record Keeping & Reimbursement Basics
  {
    id: "documentation-record-keeping",
    title: "Documentation, Record Keeping & Reimbursement Basics",
    slug: "documentation-record-keeping",
    description:
      "Good documentation is the backbone of safe pharmacy practice, regulatory compliance, and accurate reimbursement. This course covers every record a pharmacy technician is responsible for maintaining — from dispensing logs and controlled drug registers to patient medication records and insurance claim submissions. You will learn the standards that must be met for a successful regulatory inspection and the reimbursement processes that keep a Caribbean pharmacy financially viable.",
    modules: [
      "Dispensing Records: What to Document, When, and How",
      "Controlled Drug Registers: Mandatory Entries and Audit Trails",
      "Patient Medication Records and Medication History Taking",
      "Electronic Health Records and Pharmacy Information Systems",
      "National Health Programme Documentation: CDAP, NHF, and Barbados Drug Service",
      "Insurance Claims Processing and Third-Party Reimbursement Basics",
      "Regulatory Inspection Readiness: Document Organisation and Retention",
      "Confidentiality in Documentation: GDPR, Data Protection, and Caribbean Law",
    ],
    durationWeeks: 5,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Maintain complete and accurate dispensing records that satisfy Caribbean regulatory requirements",
      "Complete controlled drug register entries correctly for all scheduled substances",
      "Process basic insurance and national health programme claims for common prescription scenarios",
      "Organise pharmacy documentation to be inspection-ready at any time",
      "Handle patient medication records in compliance with local data protection legislation",
    ],
    icon: "FileText",
    color: "slate",
    prerequisites: ["dispensing-medication-management", "caribbean-pharmacy-law-ethics"],
    order: 16,
  },

  // L2-9: Applied & Written Communication
  {
    id: "customer-service-workplace-excellence",
    title: "Applied & Written Communication",
    slug: "customer-service-workplace-excellence",
    description:
      "Strong communication — spoken and written — is the practical skill that makes everything else in pharmacy work. This course focuses on the real-world communication challenges that Caribbean pharmacy technicians face every shift: gathering accurate medication information from patients who describe symptoms in everyday language, handling the full queue of fifteen people with patience, writing clear and professional handover notes, and navigating the multilingual, multicultural reality of Caribbean pharmacy counters.",
    modules: [
      "Communication at the Counter: Speed, Accuracy, and Respect",
      "Asking the Right Questions: Gathering Medication History from Non-Clinical Patients",
      "Queue Management and Prioritisation Under Pressure",
      "Writing Professional Handover Notes and Internal Communication",
      "Multilingual Communication Strategies: English, Spanish, French, and Creole",
      "Digital Communication: Email, Messaging, and Pharmacy Software",
      "Communicating Pricing, Availability, and Delays Without Conflict",
      "Time Management and Prioritisation in a Busy Pharmacy Shift",
    ],
    durationWeeks: 4,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Gather accurate medication information from patients using open and structured questioning techniques",
      "Write clear, professional handover notes and internal documentation",
      "Manage patient queues and competing priorities during peak pharmacy hours",
      "Communicate critical medication information across multiple Caribbean languages using key pharmaceutical phrases",
      "Navigate pricing and stock availability conversations without escalating to conflict",
    ],
    icon: "MessageSquare",
    color: "pink",
    prerequisites: ["foundations-pharmacy-practice", "professionalism-communication-ei"],
    order: 17,
  },

  // L2-10: Patient & Interprofessional Communication Labs
  {
    id: "patient-care-communication",
    title: "Patient & Interprofessional Communication Labs",
    slug: "patient-care-communication",
    description:
      "Communication with patients and healthcare colleagues is a clinical skill — and like all clinical skills, it requires deliberate practice. This simulation-based course puts you through structured communication scenarios: counselling a patient on a new medication, managing a complex chronic disease patient with low health literacy, handling a sensitive conversation about medication non-adherence, and communicating professionally with prescribers and nurses. Caribbean cultural and linguistic diversity is woven through every scenario.",
    modules: [
      "Medication Counselling Technique: Show-Tell-Ask and Teach-Back",
      "Health Literacy Assessment: Adapting Your Communication to the Patient",
      "Chronic Disease Conversations: Adherence, Stigma, and Long-Term Support",
      "Cultural Sensitivity in Caribbean Healthcare Communication",
      "Patient Rights, Informed Consent, and Privacy",
      "Communicating with Prescribers and Nurses: Professional Boundaries",
      "Difficult Conversations: Delivering Bad News and Managing Distress",
      "Interprofessional Teamwork: Your Role in the Healthcare Team",
    ],
    durationWeeks: 5,
    skillLevel: "Intermediate",
    whatYoullLearn: [
      "Counsel patients on new medications using the Show-Tell-Ask method with teach-back verification",
      "Assess patient health literacy and adapt your communication strategy accordingly",
      "Handle sensitive conversations around medication non-adherence and stigmatised conditions with empathy",
      "Communicate professionally with prescribers and nurses within appropriate scope boundaries",
      "Apply cultural competence principles specific to Caribbean patient populations",
    ],
    icon: "MessageCircleHeart",
    color: "teal",
    prerequisites: ["foundations-pharmacy-practice", "professionalism-communication-ei"],
    order: 18,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // LEVEL 3 — ADVANCED (9 courses, orders 19–27)
  // ══════════════════════════════════════════════════════════════════════════

  // L3-1: Sterile & Nonsterile Compounding via Virtual Simulation
  {
    id: "sterile-nonsterile-compounding-simulation",
    title: "Sterile & Nonsterile Compounding via Virtual Simulation",
    slug: "sterile-nonsterile-compounding-simulation",
    description:
      "Sterile compounding demands the highest technical standards in pharmacy practice — and mastering aseptic technique in an online environment requires carefully designed simulation. This advanced course uses virtual sterile room simulations and interactive scenario responses to develop competence in IV admixture preparation, aseptic technique, gowning procedures, and cleanroom management. Nonsterile complex formulations including TPN calculations and concentrated electrolyte dilutions are also covered.",
    modules: [
      "Sterile vs Nonsterile Compounding: USP Standards and Caribbean Requirements",
      "Cleanroom Design, Classification, and Environmental Monitoring",
      "Gowning, Hand Hygiene, and Aseptic Technique in Virtual Simulation",
      "IV Admixture Preparation: Reconstitution, Dilution, and Compatibility",
      "Total Parenteral Nutrition (TPN): Components, Calculations, and Stability",
      "Concentrated Electrolyte Dilutions and High-Risk IV Preparations",
      "Quality Control in Sterile Compounding: Sterility Testing and Beyond-Use Dating",
      "Nonsterile Advanced Formulations: Modified-Release and Specialised Dosage Forms",
    ],
    durationWeeks: 8,
    skillLevel: "Advanced",
    whatYoullLearn: [
      "Describe cleanroom classification standards and demonstrate correct gowning procedure in simulation",
      "Prepare IV admixtures using aseptic technique in a virtual cleanroom environment",
      "Calculate TPN component volumes and verify compatibility before preparation",
      "Apply beyond-use dating rules for sterile and nonsterile preparations under Caribbean compounding regulations",
      "Perform quality control checks appropriate to sterile compounding including visual inspection and sterility verification",
    ],
    icon: "Microscope",
    color: "blue",
    prerequisites: ["compounding-dosage-forms", "pharmaceutical-calculations-dosage"],
    order: 19,
  },

  // L3-2: Complex Calculations
  {
    id: "complex-calculations",
    title: "Complex Calculations",
    slug: "complex-calculations",
    description:
      "Advanced pharmacy practice requires a higher order of mathematical competence — from clinical pharmacokinetic calculations and therapeutic drug monitoring to complex compounding scenarios and multi-ingredient TPN formulations. This course pushes beyond the fundamentals into the calculations that appear in hospital pharmacy, oncology units, and specialist compounding settings. Every problem set is grounded in realistic Caribbean clinical scenarios.",
    modules: [
      "Pharmacokinetic Calculations: Half-Life, Clearance, and Volume of Distribution",
      "Therapeutic Drug Monitoring: Target Levels, Loading Doses, and Adjustments",
      "Renal and Hepatic Dose Adjustment Calculations",
      "Complex IV Calculations: Electrolyte Replacement and Fluid Balance",
      "Oncology Calculations: Body Surface Area, Chemotherapy Dosing",
      "Multi-Component Compounding: TPN and Complex Formulation Math",
      "Paediatric and Neonatal Dose Calculations in Clinical Settings",
      "Calculation Quality Assurance: Error Rates, Verification, and Independent Double Checks",
    ],
    durationWeeks: 6,
    skillLevel: "Advanced",
    whatYoullLearn: [
      "Perform pharmacokinetic calculations for therapeutic drug monitoring and dose individualisation",
      "Calculate renal and hepatic dose adjustments for patients with organ impairment",
      "Determine chemotherapy doses using body surface area for oncology scenarios",
      "Prepare multi-component TPN formulations using accurate mathematical verification",
      "Apply independent double-check methodology to high-stakes calculation scenarios",
    ],
    icon: "Sigma",
    color: "indigo",
    prerequisites: ["pharmaceutical-calculations-dosage", "pharmacology-advanced"],
    order: 20,
  },

  // L3-3: Advanced Pharmacy Systems & Digital Workflow
  {
    id: "advanced-pharmacy-systems-digital",
    title: "Advanced Pharmacy Systems & Digital Workflow",
    slug: "advanced-pharmacy-systems-digital",
    description:
      "Modern pharmacy runs on digital systems — and understanding how these systems work, how they fail, and how to get the most from them is an essential advanced skill. This course covers hospital and retail pharmacy information systems, electronic prescribing workflows, automated dispensing cabinets, barcode verification systems, and the integration of digital tools into clinical decision support. Special attention is given to e-prescribing workflows being adopted across Caribbean health systems.",
    modules: [
      "Pharmacy Information Systems: Architecture, Modules, and Data Flow",
      "Electronic Prescribing in Caribbean Health Systems",
      "Automated Dispensing Cabinets: Operation, Restocking, and Discrepancy Management",
      "Barcode Verification and RFID Systems in Pharmacy",
      "Clinical Decision Support Systems: Drug Interaction and Allergy Checking",
      "System Downtime Procedures: Manual Backup Workflows",
      "Data Quality and Integrity in Pharmacy Information Systems",
      "Interoperability: Pharmacy Systems and Electronic Health Records",
    ],
    durationWeeks: 5,
    skillLevel: "Advanced",
    whatYoullLearn: [
      "Navigate and operate a pharmacy information system including prescribing, dispensing, and stock modules",
      "Manage automated dispensing cabinet workflows including restocking and discrepancy resolution",
      "Configure and interpret clinical decision support alerts for drug interactions and contraindications",
      "Execute downtime procedures to maintain safe dispensing when systems are unavailable",
      "Explain the data quality requirements for safe pharmacy information system operation",
    ],
    icon: "Server",
    color: "cyan",
    prerequisites: ["dispensing-medication-management", "documentation-record-keeping"],
    order: 21,
  },

  // L3-4: Public Health, Pharmacovigilance & Quality Improvement
  {
    id: "quality-assurance-safety",
    title: "Public Health, Pharmacovigilance & Quality Improvement",
    slug: "quality-assurance-safety",
    description:
      "Pharmacy technicians are on the front line of public health — tracking adverse drug reactions, supporting antimicrobial stewardship, and contributing to the continuous quality improvement systems that protect patients. This advanced course covers pharmacovigilance reporting to national and regional ADR monitoring bodies, infection prevention in pharmacy settings, antimicrobial stewardship awareness, and the quality improvement methodologies that leading Caribbean pharmacies use to drive down error rates and improve patient outcomes.",
    modules: [
      "Pharmacovigilance: ADR Monitoring, Reporting, and Regional Surveillance Systems",
      "Adverse Drug Reaction Assessment and Causality Analysis",
      "Antimicrobial Stewardship: The Pharmacy Technician's Role",
      "Infection Prevention and Control in Pharmacy Settings",
      "Vaccine Cold Chain: Storage, Handling, and Documentation",
      "Continuous Quality Improvement (CQI) Methodologies for Caribbean Pharmacies",
      "Root Cause Analysis and Systemic Error Prevention",
      "Quality Assurance in Compounding and Dispensing: Audit and Inspection",
    ],
    durationWeeks: 6,
    skillLevel: "Advanced",
    whatYoullLearn: [
      "Submit adverse drug reaction reports to Caribbean pharmacovigilance authorities correctly and promptly",
      "Explain the pharmacy technician's contribution to antimicrobial stewardship programmes",
      "Maintain vaccine and cold chain storage in compliance with WHO and regional standards",
      "Lead or participate in a Continuous Quality Improvement cycle in a pharmacy setting",
      "Conduct a dispensing audit and present findings with root cause analysis",
    ],
    icon: "ShieldCheck",
    color: "orange",
    prerequisites: ["medication-safety-error-prevention", "dispensing-medication-management"],
    order: 22,
  },

  // L3-5: Caribbean Regulatory Compliance & Quality Systems
  {
    id: "caribbean-pharmaceutical-regulations",
    title: "Caribbean Regulatory Compliance & Quality Systems",
    slug: "caribbean-pharmaceutical-regulations",
    description:
      "Advanced regulatory knowledge separates technicians who simply follow rules from those who understand and champion them. This course goes deep into the CARICOM pharmaceutical regulatory framework, national pharmacy acts, drug registration and marketing authorisation processes, and the quality systems that govern pharmaceutical manufacturing and importation. You will develop the expertise needed for roles in regulatory affairs, quality assurance, and senior pharmacy operations across the Caribbean.",
    modules: [
      "The CARICOM Pharmaceutical Regulatory Landscape: CRS and National Bodies",
      "Drug Registration and Marketing Authorisation in the Caribbean",
      "Import/Export Licensing: Pharmaceutical Customs and Compliance",
      "Generic Substitution Policies and Bioequivalence Standards",
      "Good Distribution Practice (GDP) in Caribbean Supply Chains",
      "Pharmaceutical Inspection: Preparation, Conduct, and Follow-Up",
      "Controlled Substances: International Treaties and Regional Implementation",
      "Regulatory Affairs Career Pathways for Senior Pharmacy Technicians",
    ],
    durationWeeks: 5,
    skillLevel: "Advanced",
    whatYoullLearn: [
      "Explain the CARICOM Regional Standard and how it harmonises pharmaceutical regulation across member states",
      "Navigate the drug registration and marketing authorisation process for at least one Caribbean jurisdiction",
      "Ensure compliance with Good Distribution Practice standards throughout the pharmaceutical supply chain",
      "Prepare a pharmacy for regulatory inspection and manage the inspection process professionally",
      "Apply controlled substance international treaty obligations to day-to-day pharmacy operations",
    ],
    icon: "Building2",
    color: "amber",
    prerequisites: ["caribbean-pharmacy-law-ethics", "inventory-management-supply-chain"],
    order: 23,
  },

  // L3-6: Technology, Automation & AI in Pharmacy
  {
    id: "ai-in-pharmacy-practice",
    title: "Technology, Automation & AI in Pharmacy",
    slug: "ai-in-pharmacy-practice",
    description:
      "Artificial intelligence and automation are reshaping pharmacy faster than any technology since computerised dispensing. This course gives you a grounded, practical understanding of AI applications in pharmacy — from inventory demand forecasting and AI-assisted drug interaction checking to telepharmacy, e-prescribing, and the ethical boundaries of AI in clinical decision-making. Equal weight is given to the limitations of these tools and how to practise safely in a technology-augmented environment.",
    modules: [
      "AI and Machine Learning: What Pharmacy Technicians Need to Know",
      "AI-Powered Inventory Forecasting and Demand Planning",
      "Automated Dispensing and Robotics in Hospital Pharmacy",
      "Clinical Decision Support AI: Capabilities, Limitations, and Safe Use",
      "Telepharmacy and Remote Dispensing in Caribbean Islands",
      "E-Prescribing Systems and Digital Prescription Workflows",
      "Data Privacy, Cybersecurity, and Caribbean Data Protection Law",
      "Ethical AI Use: Bias, Transparency, and the Human-AI Partnership",
    ],
    durationWeeks: 4,
    skillLevel: "Advanced",
    whatYoullLearn: [
      "Evaluate AI tools for pharmacy use by assessing accuracy, bias, and suitability for Caribbean practice",
      "Use AI-based inventory forecasting to reduce stockouts and minimise pharmaceutical waste",
      "Operate telepharmacy and remote dispensing systems safely within regulatory guidelines",
      "Identify the ethical limits of AI in clinical decision-making and maintain human oversight",
      "Ensure patient data privacy when using digital pharmacy tools under Caribbean data protection law",
    ],
    icon: "BrainCircuit",
    color: "violet",
    prerequisites: ["dispensing-medication-management", "advanced-pharmacy-systems-digital"],
    order: 24,
  },

  // L3-7: Leadership, Teamwork, Adaptability & Problem Solving
  {
    id: "pharmacy-management-leadership",
    title: "Leadership, Teamwork, Adaptability & Problem Solving",
    slug: "pharmacy-management-leadership",
    description:
      "Senior pharmacy technicians lead teams, solve operational problems, and adapt to rapid change — and these skills are rarely taught in clinical training. This course develops the leadership capabilities, team management skills, and problem-solving frameworks that enable experienced technicians to step into supervisory and management roles. Every module is contextualised for Caribbean pharmacy realities including island supply chain economics, multicultural team dynamics, and the pressure of public health programmes.",
    modules: [
      "Leadership Styles and When to Apply Each in Pharmacy Settings",
      "Team Building, Motivation, and Performance Management",
      "Conflict Resolution and Difficult Conversations in the Workplace",
      "Pharmacy Business Operations: Budgets, KPIs, and Financial Basics",
      "Strategic Problem Solving: Root Cause to Sustainable Solution",
      "Adaptability and Resilience: Managing Change and Uncertainty",
      "Training and Mentoring Junior Pharmacy Staff",
      "Continuous Professional Development: Planning Your Career Progression",
    ],
    durationWeeks: 5,
    skillLevel: "Advanced",
    whatYoullLearn: [
      "Apply situational leadership principles to manage pharmacy team performance in different scenarios",
      "Resolve team conflicts and difficult workplace situations using structured frameworks",
      "Manage basic pharmacy financial metrics including budget variance and KPI tracking",
      "Design and deliver training for junior pharmacy staff on standard operating procedures",
      "Build a personal CPD plan that meets Caribbean professional registration requirements",
    ],
    icon: "Users",
    color: "slate",
    prerequisites: ["patient-care-communication", "quality-assurance-safety"],
    order: 25,
  },

  // L3-8: Capstone Integrated Case Simulation
  {
    id: "capstone-case-simulation",
    title: "Capstone Integrated Case Simulation",
    slug: "capstone-case-simulation",
    description:
      "The Capstone is where everything comes together. Working through a series of complex, multi-layered pharmacy simulation cases, you will demonstrate the full range of competencies developed across the diploma: clinical reasoning, regulatory knowledge, communication skill, calculation accuracy, and professional judgement. Cases are set in realistic Caribbean pharmacy environments — a busy community pharmacy in Port of Spain, a hospital dispensary in Kingston, a rural island clinic in Grenada. You must navigate each case from start to finish, making and justifying every decision.",
    modules: [
      "Capstone Orientation: Case Methodology and Assessment Criteria",
      "Community Pharmacy Case: A Complex Day in a Caribbean Retail Pharmacy",
      "Hospital Pharmacy Case: IV Admixture, High-Alert Medications, and ADR Reporting",
      "Regulatory Compliance Case: Inspection Preparation and Controlled Drug Discrepancy",
      "Public Health Case: Vaccination Campaign, Cold Chain Failure, and Crisis Response",
      "Communication Case: Challenging Patient, Low Health Literacy, and Interprofessional Conflict",
      "Leadership Case: Understaffed Shift, System Downtime, and Team Performance",
      "Reflective Portfolio: Demonstrating Competency Across the Diploma",
    ],
    durationWeeks: 6,
    skillLevel: "Advanced",
    whatYoullLearn: [
      "Integrate clinical, regulatory, and communication competencies to manage complex real-world pharmacy scenarios",
      "Demonstrate professional judgement under time pressure and competing priorities",
      "Apply the full dispensing workflow including clinical flag escalation, documentation, and patient counselling",
      "Show leadership capability in managing team, system, and patient safety challenges simultaneously",
      "Produce a reflective portfolio evidencing competency across all diploma learning outcomes",
    ],
    icon: "Trophy",
    color: "gold",
    prerequisites: [
      "dispensing-medication-management",
      "medication-safety-error-prevention",
      "caribbean-pharmacy-law-ethics",
      "pharmacology-advanced",
      "pharmacy-management-leadership",
    ],
    order: 26,
  },

  // L3-9: Caribbean Pharmacy Certification Exam Preparation
  // (Penn Foster-aligned: PTCE/ExCPT prep as named final subject)
  {
    id: "caribbean-certification-exam-prep",
    title: "Caribbean Pharmacy Certification Exam Preparation",
    slug: "caribbean-certification-exam-prep",
    description:
      "This final subject prepares you for the pharmacy technician certification examination recognised in your Caribbean jurisdiction — whether that is the PTCE (Pharmacy Technician Certification Exam), the ExCPT, or a nationally administered Caribbean competency assessment. Structured review sessions map every exam domain to content you have studied throughout the diploma. You will practise under timed conditions, identify knowledge gaps, and build the exam confidence needed to pass on your first attempt.",
    modules: [
      "Exam Overview: Domains, Blueprints, and What Examiners Expect",
      "Domain Review 1: Medications — Drug Classes, Interactions, and Brand/Generic Names",
      "Domain Review 2: Federal and Caribbean Pharmacy Law and Regulations",
      "Domain Review 3: Patient Safety and Quality Assurance",
      "Domain Review 4: Order Entry and Processing",
      "Domain Review 5: Pharmacy Inventory Management",
      "Domain Review 6: Pharmacy Billing and Reimbursement",
      "Timed Practice Examinations and Gap Analysis",
    ],
    durationWeeks: 4,
    skillLevel: "Advanced",
    whatYoullLearn: [
      "Identify your personal knowledge gaps across all exam domains using diagnostic practice tests",
      "Apply exam strategy techniques including time management and question elimination",
      "Recall high-frequency drug names, classifications, and interactions tested on certification exams",
      "Demonstrate competency across all six PTCE/ExCPT exam domains under timed conditions",
      "Complete a full-length simulated certification examination with performance feedback",
    ],
    icon: "Award",
    color: "gold",
    prerequisites: [
      "pharmacology-advanced",
      "caribbean-pharmaceutical-regulations",
      "medication-safety-error-prevention",
      "capstone-case-simulation",
    ],
    order: 27,
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
  levels: {
    beginner: getCoursesByLevel("Beginner").length,
    intermediate: getCoursesByLevel("Intermediate").length,
    advanced: getCoursesByLevel("Advanced").length,
  },
};
