// Sync the 13-course PIXOPHARM catalog to Supabase
// Run: node scripts/sync-supabase.cjs

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://hqyewiroiswmhfghkzhz.supabase.co",
  "sb_publishable_d1GwG2ax6SrW8jW71nIamg_LV1OWpoB"
);

const courses = [
  {
    title: "Foundations of Pharmacy Practice",
    slug: "foundations-pharmacy-practice",
    description: "Begin your pharmacy career with a comprehensive grounding in how pharmacies operate across the Caribbean. This course covers essential pharmaceutical terminology, the art and science of prescription interpretation, and the legal and ethical frameworks that govern pharmacy practice in the region.",
    skill_level: "Beginner",
    duration_weeks: 6,
    icon: "GraduationCap",
    color: "blue",
    prerequisites: [],
    what_youll_learn: [
      "Interpret prescriptions accurately using standard medical abbreviations and pharmaceutical terminology",
      "Navigate Caribbean pharmacy laws including controlled substance regulations and licensing requirements",
      "Apply ethical decision-making frameworks to real-world pharmacy scenarios",
      "Describe the pharmacy technician's role within Caribbean public and private healthcare systems",
      "Execute standard pharmacy workflow procedures from intake through dispensing",
    ],
    status: "published",
    order: 1,
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
  },
  {
    title: "Pharmaceutical Calculations & Dosage",
    slug: "pharmaceutical-calculations-dosage",
    description: "Master the mathematical skills that underpin safe and accurate pharmacy practice. From ratio-proportion methods and dimensional analysis to pediatric dosing and IV flow rate calculations, this course builds your competence step by step.",
    skill_level: "Beginner",
    duration_weeks: 8,
    icon: "Calculator",
    color: "emerald",
    prerequisites: [],
    what_youll_learn: [
      "Perform accurate dosage calculations for oral, injectable, and compounded medications",
      "Convert fluently between metric, apothecary, and household measurement systems",
      "Calculate pediatric doses using weight-based and body surface area methods",
      "Determine IV flow rates and infusion times for common clinical scenarios",
      "Apply alligation and dilution formulas used in compounding practice",
    ],
    status: "published",
    order: 2,
    modules: [
      "Pharmacy Math Fundamentals: Fractions, Decimals, Ratios & Percentages",
      "Systems of Measurement & Unit Conversions (Metric, Apothecary, Household)",
      "Dosage Calculations: Oral Solids, Liquids & Injectables",
      "Pediatric & Weight-Based Dosing Calculations",
      "IV Flow Rates, Drip Rates & Infusion Time Calculations",
      "Compounding Calculations: Dilutions, Concentrations & Alligation",
      "Business Math for Pharmacy: Markup, Discount & Inventory Costing",
    ],
  },
  {
    title: "Anatomy, Physiology & Medical Terminology",
    slug: "anatomy-physiology-medical-terminology",
    description: "Build the foundational knowledge of the human body and medical language that every pharmacy technician needs. Special emphasis is placed on conditions prevalent in the Caribbean including cardiovascular disease, diabetes, and tropical infectious diseases.",
    skill_level: "Beginner",
    duration_weeks: 7,
    icon: "Stethoscope",
    color: "indigo",
    prerequisites: [],
    what_youll_learn: [
      "Decode medical terminology by identifying roots, prefixes, and suffixes in prescriptions and clinical notes",
      "Describe the major body systems and explain how common diseases affect organ function",
      "Identify Caribbean-prevalent conditions including hypertension, diabetes, sickle cell disease, and tropical infections",
      "Connect body system knowledge to drug classifications and therapeutic uses",
      "Use correct anatomical and medical terminology in professional pharmacy communication",
    ],
    status: "published",
    order: 3,
    modules: [
      "Medical Terminology: Roots, Prefixes, Suffixes & Drug Name Stems",
      "The Cardiovascular System & Common Conditions",
      "The Respiratory, Digestive & Renal Systems",
      "The Endocrine & Nervous Systems",
      "The Musculoskeletal & Integumentary Systems",
      "The Immune System & Infectious Disease in the Caribbean",
    ],
  },
  {
    title: "Dispensing & Medication Management",
    slug: "dispensing-medication-management",
    description: "Learn the end-to-end dispensing process and the inventory management strategies that keep Caribbean pharmacies running efficiently. This course addresses the unique challenges of Caribbean supply chains.",
    skill_level: "Intermediate",
    duration_weeks: 7,
    icon: "Pill",
    color: "violet",
    prerequisites: ["foundations-pharmacy-practice"],
    what_youll_learn: [
      "Execute the complete dispensing workflow from prescription receipt to patient handoff",
      "Manage pharmaceutical inventory using FEFO/FIFO rotation to minimize waste",
      "Maintain compliant controlled substance records and reporting documentation",
      "Implement cold chain management protocols suited to Caribbean tropical conditions",
      "Operate pharmacy management software for dispensing, stock control, and procurement",
    ],
    status: "published",
    order: 4,
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
  },
  {
    title: "Pharmacology Essentials",
    slug: "pharmacology-essentials",
    description: "Develop a working knowledge of how drugs act in the body and why this matters at the dispensing counter. This course is tailored to the Caribbean disease landscape, with dedicated coverage of medications for hypertension, diabetes, tropical and vector-borne diseases.",
    skill_level: "Intermediate",
    duration_weeks: 10,
    icon: "HeartPulse",
    color: "rose",
    prerequisites: ["foundations-pharmacy-practice", "anatomy-physiology-medical-terminology"],
    what_youll_learn: [
      "Classify major drug families and explain their mechanisms of action",
      "Identify critical drug interactions and contraindications for the most-dispensed Caribbean medications",
      "Describe first-line treatments for regionally prevalent conditions",
      "Recognise common adverse drug reactions and understand when to escalate",
      "Advise on OTC medications and traditional herbal remedies with awareness of interaction risks",
    ],
    status: "published",
    order: 5,
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
  },
  {
    title: "Caribbean Pharmaceutical Regulations",
    slug: "caribbean-pharmaceutical-regulations",
    description: "Navigate the complex regulatory environment that governs pharmaceutical practice across the Caribbean. From CARICOM harmonisation standards to individual island-state pharmacy acts.",
    skill_level: "Intermediate",
    duration_weeks: 5,
    icon: "Scale",
    color: "amber",
    prerequisites: ["foundations-pharmacy-practice"],
    what_youll_learn: [
      "Explain the role of CARICOM pharmaceutical standards and harmonisation",
      "Interpret controlled substance schedules and apply correct handling procedures",
      "Ensure compliance with pharmaceutical import/export licensing and customs requirements",
      "Prepare a pharmacy for regulatory inspection",
      "Differentiate between national regulatory frameworks across Caribbean jurisdictions",
    ],
    status: "published",
    order: 6,
    modules: [
      "Overview of Caribbean Health Regulatory Bodies & Their Mandates",
      "The CARICOM Regional Standard for Pharmaceuticals (CRS)",
      "National Pharmacy Acts: Comparing Frameworks Across Caribbean States",
      "Controlled Substances: Scheduling, Handling & International Treaty Obligations",
      "Pharmaceutical Import/Export: Licensing, Customs & Quality Assurance",
      "Drug Registration, Marketing Authorisation & Generic Substitution Policies",
      "Record-Keeping, Inspection Readiness & Compliance Auditing",
    ],
  },
  {
    title: "Patient Care & Communication",
    slug: "patient-care-communication",
    description: "Master patient-centred communication techniques adapted for the Caribbean's rich cultural and linguistic diversity. Counsel patients on medication use across English, Spanish, French, and Creole-speaking populations.",
    skill_level: "Intermediate",
    duration_weeks: 5,
    icon: "MessageCircleHeart",
    color: "teal",
    prerequisites: ["foundations-pharmacy-practice"],
    what_youll_learn: [
      "Counsel patients on medication use employing the Show-Tell-Ask method",
      "Assess patient health literacy levels and adapt communication strategies",
      "Apply cultural competence principles relevant to Caribbean populations",
      "Communicate essential medication information across multiple Caribbean languages",
      "Handle sensitive health conversations around adherence, stigma, and chronic disease management",
    ],
    status: "published",
    order: 7,
    modules: [
      "Principles of Patient-Centred Care in Pharmacy",
      "Medication Counseling Techniques: Show-Tell-Ask & Beyond",
      "Health Literacy: Assessing Understanding & Adapting Communication",
      "Cultural Sensitivity & Competence in Caribbean Healthcare",
      "Multilingual Communication Strategies: English, Spanish, French & Creole",
      "Managing Difficult Conversations: Adherence, Stigma & Chronic Disease",
      "Patient Rights, Informed Consent & Privacy in the Pharmacy Setting",
    ],
  },
  {
    title: "Compounding & Dosage Forms",
    slug: "compounding-dosage-forms",
    description: "Develop hands-on competence in pharmaceutical compounding — a skill especially valued in Caribbean pharmacies where extemporaneous preparations fill gaps left by commercially unavailable products.",
    skill_level: "Intermediate",
    duration_weeks: 6,
    icon: "FlaskConical",
    color: "purple",
    prerequisites: ["foundations-pharmacy-practice", "pharmaceutical-calculations-dosage"],
    what_youll_learn: [
      "Identify and describe the major pharmaceutical dosage forms and routes of administration",
      "Prepare non-sterile compounded products following established formulation protocols",
      "Apply proper compounding techniques using mortar and pestle, ointment slab, and equipment",
      "Perform quality control checks on compounded preparations",
      "Maintain compliant compounding records as required by Caribbean pharmacy regulations",
    ],
    status: "published",
    order: 8,
    modules: [
      "Introduction to Pharmaceutical Dosage Forms",
      "Non-Sterile Compounding: Creams, Ointments & Suspensions",
      "Compounding Equipment, Techniques & Best Practices",
      "Extemporaneous Preparations & Paediatric Formulations",
      "Quality Control in Compounding: Testing, Documentation & SOPs",
      "Compounding Regulations & Record-Keeping in the Caribbean",
    ],
  },
  {
    title: "Customer Service & Workplace Excellence",
    slug: "customer-service-workplace-excellence",
    description: "Bridge the gap between classroom theory and the reality of working in a busy Caribbean pharmacy. Handle irate customers, manage queues, and maintain emotional wellbeing through pharmacy shift work pressures.",
    skill_level: "Intermediate",
    duration_weeks: 5,
    icon: "Users",
    color: "pink",
    prerequisites: ["foundations-pharmacy-practice"],
    what_youll_learn: [
      "Apply the LEAP method to de-escalate confrontations with upset customers",
      "Manage competing demands during peak pharmacy hours using triage-based prioritisation",
      "Gather accurate medication information from patients who describe symptoms in non-medical language",
      "Recognise and regulate your own emotional responses in high-pressure workplace situations",
      "Implement practical stress management strategies to prevent burnout",
    ],
    status: "published",
    order: 9,
    modules: [
      "The Caribbean Pharmacy: What Your First Day Really Looks Like",
      "Customer Service Excellence: Building Trust at the Counter",
      "Handling Irate Customers: De-escalation & Conflict Resolution",
      "Emotional Intelligence in the Pharmacy Workplace",
      "Time Management & Prioritisation Under Pressure",
      "Asking the Right Questions: Working with Non-Technical Customers",
      "Stress Management, Self-Care & Preventing Burnout",
    ],
  },
  {
    title: "Quality Assurance & Safety",
    slug: "quality-assurance-safety",
    description: "Build the safety-first mindset that prevents medication errors and protects patients. Cover root cause analysis, SOPs, pharmacovigilance reporting, and continuous quality improvement.",
    skill_level: "Advanced",
    duration_weeks: 6,
    icon: "ShieldCheck",
    color: "orange",
    prerequisites: ["foundations-pharmacy-practice", "dispensing-medication-management"],
    what_youll_learn: [
      "Identify the most common types of medication errors and implement prevention strategies",
      "Conduct root cause analysis on pharmacy incidents",
      "Write, implement, and audit standard operating procedures",
      "Report adverse drug reactions through proper pharmacovigilance channels",
      "Establish a Continuous Quality Improvement programme in a Caribbean pharmacy",
    ],
    status: "published",
    order: 10,
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
  },
  {
    title: "AI in Pharmacy Practice",
    slug: "ai-in-pharmacy-practice",
    description: "Learn how artificial intelligence is transforming pharmacy operations and how these tools can be applied responsibly in the Caribbean context. Covers inventory forecasting, drug interaction alerts, and data privacy.",
    skill_level: "Advanced",
    duration_weeks: 4,
    icon: "BrainCircuit",
    color: "cyan",
    prerequisites: ["foundations-pharmacy-practice", "dispensing-medication-management"],
    what_youll_learn: [
      "Evaluate AI tools for pharmacy use by assessing accuracy, bias, and suitability",
      "Use AI-based inventory forecasting to reduce stockouts and minimise waste",
      "Apply automated drug interaction checking systems while understanding limitations",
      "Ensure patient data privacy and compliance with Caribbean data protection legislation",
      "Articulate the ethical framework for responsible AI adoption in healthcare",
    ],
    status: "published",
    order: 11,
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
  },
  {
    title: "Pharmacy Management & Leadership",
    slug: "pharmacy-management-leadership",
    description: "Advance your career into supervisory and management roles with comprehensive coverage of pharmacy business operations, team leadership, and strategic planning grounded in Caribbean business realities.",
    skill_level: "Advanced",
    duration_weeks: 5,
    icon: "Building2",
    color: "slate",
    prerequisites: ["dispensing-medication-management", "quality-assurance-safety"],
    what_youll_learn: [
      "Manage pharmacy budgets, revenue streams, and cost control measures",
      "Lead pharmacy teams through scheduling, performance management, and development",
      "Apply leadership principles to common pharmacy workplace challenges",
      "Oversee pharmacy informatics systems including dispensing software and EHRs",
      "Develop strategic plans for pharmacy growth and continuous professional development",
    ],
    status: "published",
    order: 12,
    modules: [
      "Pharmacy Business Operations & Financial Management",
      "Human Resources: Staffing, Scheduling & Team Development",
      "Leadership Skills for Pharmacy Supervisors",
      "Pharmacy Informatics & Technology Management",
      "Regulatory Compliance & Audit Management",
      "Strategic Planning & Continuous Professional Development",
    ],
  },
  {
    title: "Caribbean Island Pharmacy Practice",
    slug: "caribbean-island-pharmacy-practice",
    description: "Complete your training with island-specific knowledge covering regulatory frameworks, government drug programmes, hospital pharmacy systems, and supply chain realities for Trinidad & Tobago, Jamaica, Barbados, and Grenada.",
    skill_level: "Regional",
    duration_weeks: 4,
    icon: "Globe",
    color: "sky",
    prerequisites: ["foundations-pharmacy-practice", "caribbean-pharmaceutical-regulations"],
    what_youll_learn: [
      "Navigate the specific pharmacy registration and licensing requirements of your island",
      "Process prescriptions under local government drug programmes (CDAP, NHF, Barbados Drug Service)",
      "Apply island-specific controlled substance regulations and scheduling requirements",
      "Operate within your local hospital pharmacy and public health dispensing systems",
      "Identify the key supply chain pathways and procurement processes specific to your island",
    ],
    status: "published",
    order: 13,
    modules: [
      "Trinidad & Tobago Pharmacy Practice",
      "Jamaica Pharmacy Practice",
      "Barbados Pharmacy Practice",
      "Grenada Pharmacy Practice",
    ],
  },
];

async function syncDatabase() {
  console.log("=== PIXOPHARM Supabase Sync ===\n");

  // Step 1: Delete all existing data (child tables first)
  console.log("1. Deleting existing quiz_questions...");
  const { error: qErr } = await supabase
    .from("quiz_questions")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000");
  if (qErr) console.error("  ERROR:", qErr.message);
  else console.log("  Done.");

  console.log("2. Deleting existing lessons...");
  const { error: lErr } = await supabase
    .from("lessons")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000");
  if (lErr) console.error("  ERROR:", lErr.message);
  else console.log("  Done.");

  console.log("3. Deleting existing modules...");
  const { error: mErr } = await supabase
    .from("modules")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000");
  if (mErr) console.error("  ERROR:", mErr.message);
  else console.log("  Done.");

  console.log("4. Deleting existing courses...");
  const { error: cErr } = await supabase
    .from("courses")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000");
  if (cErr) console.error("  ERROR:", cErr.message);
  else console.log("  Done.");

  console.log("5. Clearing old enrollments...");
  const { error: eErr } = await supabase
    .from("enrollments")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000");
  if (eErr) console.error("  ERROR:", eErr.message);
  else console.log("  Done.");

  console.log("6. Clearing old course_progress...");
  const { error: pErr } = await supabase
    .from("course_progress")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000");
  if (pErr) console.error("  ERROR:", pErr.message);
  else console.log("  Done.");

  // Step 2: Insert 13 new courses
  console.log("\n7. Inserting 13 new courses...");
  for (const course of courses) {
    const { modules: moduleNames, ...courseData } = course;
    const { data: inserted, error: insertErr } = await supabase
      .from("courses")
      .insert(courseData)
      .select()
      .single();

    if (insertErr) {
      console.error(`  ERROR inserting "${course.title}":`, insertErr.message);
      continue;
    }
    console.log(`  ✓ ${course.title} (${inserted.id})`);

    // Step 3: Insert modules for this course
    for (let i = 0; i < moduleNames.length; i++) {
      const { error: modErr } = await supabase.from("modules").insert({
        course_id: inserted.id,
        title: moduleNames[i],
        description: `Module ${i + 1} of ${course.title}`,
        order_index: i + 1,
      });
      if (modErr) {
        console.error(`    ERROR inserting module "${moduleNames[i]}":`, modErr.message);
      }
    }
    console.log(`    → ${moduleNames.length} modules inserted`);
  }

  // Step 4: Verify
  console.log("\n8. Verifying...");
  const { data: finalCourses } = await supabase
    .from("courses")
    .select("id, title, skill_level, order")
    .order("order");
  console.log(`  Courses: ${finalCourses?.length}`);

  const { data: finalModules } = await supabase
    .from("modules")
    .select("id");
  console.log(`  Modules: ${finalModules?.length}`);

  console.log("\n=== Sync complete! ===");
}

syncDatabase().catch(console.error);
