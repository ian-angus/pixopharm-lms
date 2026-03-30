// ============================================================================
// PIXOPHARM LMS — Pharmacology Essentials (I2)
// Full Course Content: 8 Modules, 34 Lessons, ~80 Quiz Questions
// Focus: Caribbean disease landscape, CDAP, NHF, CARICOM standards
// ============================================================================

import type { Module, FullCourse } from '../types';

// ============================================================================
// MODULE 1 — Introduction to Pharmacology: Pharmacokinetics & Pharmacodynamics
// ============================================================================

const module1: Module = {
  id: "m1-intro-pharmacology",
  number: 1,
  title: "Introduction to Pharmacology: Pharmacokinetics & Pharmacodynamics",
  description:
    "Understand the fundamental principles of how drugs move through and act on the human body. This module introduces pharmacokinetics (ADME), pharmacodynamics (drug-receptor interactions), and key concepts like bioavailability, half-life, and therapeutic index — all contextualised with medications commonly dispensed in Caribbean pharmacies.",
  learningObjectives: [
    "Define pharmacokinetics and pharmacodynamics and explain how they differ",
    "Describe the four ADME processes using examples from Caribbean pharmacy practice",
    "Explain drug-receptor interactions including agonism, antagonism, and partial agonism",
    "Calculate and interpret half-life, bioavailability, and therapeutic index values",
    "Apply pharmacokinetic principles to common dispensing scenarios in the Caribbean",
  ],
  lessons: [
    // ── Lesson 1.1 ──
    {
      id: "m1-l1",
      title: "What Is Pharmacology? Core Concepts & Caribbean Context",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "Welcome to Pharmacology" },
        {
          type: "text",
          body: "Pharmacology is the science of how drugs interact with living organisms. For a pharmacy technician working in the Caribbean, pharmacology knowledge is not an academic luxury — it is the foundation that allows you to understand why prescribers choose certain medications, why specific dosing instructions matter, and why some drug combinations are dangerous. Every prescription you handle tells a pharmacological story.",
        },
        {
          type: "text",
          body: "Pharmacology is divided into two major branches. Pharmacokinetics asks the question: 'What does the body do to the drug?' It studies how drugs are absorbed, distributed, metabolised, and excreted. Pharmacodynamics asks the opposite: 'What does the drug do to the body?' It studies how drugs produce their effects at the molecular, cellular, and organ-system level.",
        },
        {
          type: "key-term",
          term: "Pharmacokinetics (PK)",
          definition: "The study of how the body absorbs, distributes, metabolises, and excretes a drug. Often summarised as ADME — Absorption, Distribution, Metabolism, Excretion.",
        },
        {
          type: "key-term",
          term: "Pharmacodynamics (PD)",
          definition: "The study of how a drug produces its effects on the body, including drug-receptor interactions, dose-response relationships, and mechanisms of action.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Why This Matters at the Counter",
          body: "When a patient in Trinidad asks 'Why do I have to take this on an empty stomach?' or a patient in Jamaica asks 'Can I take this with my bush tea?', your pharmacology knowledge helps you give accurate, potentially life-saving answers. Understanding PK and PD transforms you from a label-reader to a medication expert.",
        },
        {
          type: "table",
          caption: "Pharmacokinetics vs Pharmacodynamics at a Glance",
          headers: ["Feature", "Pharmacokinetics", "Pharmacodynamics"],
          rows: [
            ["Key question", "What does the body do to the drug?", "What does the drug do to the body?"],
            ["Focus", "Drug movement through the body", "Drug effects on the body"],
            ["Processes", "ADME (Absorption, Distribution, Metabolism, Excretion)", "Receptor binding, signal transduction, dose-response"],
            ["Clinical relevance", "Determines dosing frequency, route, and timing", "Determines drug selection and therapeutic effect"],
            ["Example", "Amlodipine has a long half-life (~35 hrs) so it is dosed once daily", "Amlodipine blocks L-type calcium channels to lower blood pressure"],
          ],
        },
        {
          type: "text",
          body: "Throughout this course, we will reference medications commonly dispensed in Caribbean pharmacies — amlodipine for hypertension, metformin for diabetes, amoxicillin for infections, and many others that you encounter daily. This is not abstract science; it is the science behind your everyday work.",
        },
        {
          type: "knowledge-check",
          question: "A patient asks: 'Why does my doctor say I must take metformin with food?' Which branch of pharmacology best explains the answer?",
          options: [
            "Pharmacodynamics — because food changes how metformin affects blood sugar",
            "Pharmacokinetics — because food affects how metformin is absorbed in the GI tract",
            "Toxicology — because metformin is toxic on an empty stomach",
            "Pharmacogenomics — because food interacts with the patient's genes",
          ],
          correctIndex: 1,
          explanation: "Taking metformin with food is a pharmacokinetic consideration. Food slows gastric emptying and reduces the GI side effects (nausea, diarrhoea) associated with metformin absorption. It also slightly reduces the rate of absorption, making the drug better tolerated.",
        },
      ],
    },
    // ── Lesson 1.2 ──
    {
      id: "m1-l2",
      title: "ADME: Absorption, Distribution, Metabolism & Excretion",
      duration: "8 min",
      content: [
        { type: "heading", level: 2, text: "The Journey of a Drug Through the Body" },
        {
          type: "text",
          body: "From the moment a patient swallows a tablet at a pharmacy in Bridgetown, Barbados, to the moment that drug is eliminated from their body, it undergoes four major processes: Absorption, Distribution, Metabolism, and Excretion — collectively known as ADME. Understanding these processes explains why drugs are formulated differently, why dosing intervals vary, and why certain patient populations need dose adjustments.",
        },
        { type: "heading", level: 3, text: "Absorption" },
        {
          type: "text",
          body: "Absorption is the process by which a drug moves from its site of administration into the bloodstream. For oral medications — the most common form dispensed in Caribbean pharmacies — absorption occurs primarily in the small intestine. Factors affecting absorption include the drug's solubility, the formulation (tablet vs liquid vs capsule), gastric pH, food in the stomach, and intestinal blood flow.",
        },
        {
          type: "key-term",
          term: "Bioavailability",
          definition: "The fraction of an administered drug that reaches the systemic circulation in unchanged form. Intravenous drugs have 100% bioavailability. Oral drugs have lower bioavailability due to incomplete absorption and first-pass metabolism in the liver.",
        },
        { type: "heading", level: 3, text: "Distribution" },
        {
          type: "text",
          body: "Once in the bloodstream, the drug is distributed to tissues and organs throughout the body. Distribution depends on blood flow to the tissue, the drug's ability to cross cell membranes, and protein binding. Highly protein-bound drugs (like warfarin, which is 99% bound to albumin) have a small free fraction available to produce effects. This is why drug interactions that displace protein-bound drugs can be dangerous.",
        },
        { type: "heading", level: 3, text: "Metabolism (Biotransformation)" },
        {
          type: "text",
          body: "The liver is the primary site of drug metabolism, using enzyme systems — particularly the cytochrome P450 (CYP450) family — to convert drugs into metabolites that are usually more water-soluble and easier to excrete. Some drugs are prodrugs that must be metabolised to their active form (e.g., enalapril is converted to enalaprilat). Others are deactivated by metabolism.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Grapefruit and CYP3A4",
          body: "Grapefruit juice inhibits the CYP3A4 enzyme in the gut wall and liver. This is particularly relevant in the Caribbean where citrus fruits are abundant. Patients on simvastatin, amlodipine, or cyclosporine should be warned about grapefruit interaction. A single glass of grapefruit juice can increase drug levels by 200-400%.",
        },
        { type: "heading", level: 3, text: "Excretion" },
        {
          type: "text",
          body: "Most drugs and their metabolites are excreted by the kidneys in urine. Other routes include bile (faeces), lungs (exhaled gases), sweat, and breast milk. Renal function directly affects drug clearance, which is why elderly patients and those with kidney disease often need lower doses. In the Caribbean, where chronic kidney disease is prevalent (especially in patients with longstanding hypertension and diabetes), dose adjustments are a daily consideration.",
        },
        {
          type: "table",
          caption: "ADME Summary with Caribbean Examples",
          headers: ["Process", "Primary Site", "Key Factor", "Caribbean Example"],
          rows: [
            ["Absorption", "Small intestine (oral)", "Formulation, food, pH", "Metformin taken with food to reduce GI upset and improve tolerability"],
            ["Distribution", "Bloodstream → tissues", "Protein binding, lipid solubility", "Warfarin is 99% protein-bound — displacement interactions are common"],
            ["Metabolism", "Liver (CYP450 enzymes)", "Enzyme induction/inhibition", "Grapefruit juice inhibits CYP3A4, affecting simvastatin levels"],
            ["Excretion", "Kidneys (urine)", "Renal function (GFR)", "Metformin dose reduced in patients with CKD (common in Caribbean diabetics)"],
          ],
        },
        {
          type: "knowledge-check",
          question: "A patient with chronic kidney disease in Jamaica is prescribed gentamicin. Why might the prescriber reduce the dose or extend the dosing interval?",
          options: [
            "Because gentamicin is poorly absorbed in patients with kidney disease",
            "Because the kidneys are the primary route of gentamicin excretion, and impaired renal function slows clearance",
            "Because kidney disease increases gentamicin metabolism in the liver",
            "Because kidney disease reduces gentamicin distribution to infected tissues",
          ],
          correctIndex: 1,
          explanation: "Gentamicin is almost entirely excreted by the kidneys. In patients with impaired renal function, the drug accumulates to potentially toxic levels if the standard dose is used. Dose reduction or extended intervals are necessary to prevent nephrotoxicity and ototoxicity.",
        },
      ],
    },
    // ── Lesson 1.3 ──
    {
      id: "m1-l3",
      title: "Drug-Receptor Interactions: Agonists, Antagonists & Beyond",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "How Drugs Produce Their Effects" },
        {
          type: "text",
          body: "Most drugs produce their effects by binding to specific protein targets in the body called receptors. Think of a receptor as a lock and the drug as a key. Some keys turn the lock and open the door (agonists), some keys fit the lock but do not turn it, blocking other keys from entering (antagonists), and some keys only partially turn the lock (partial agonists).",
        },
        {
          type: "key-term",
          term: "Agonist",
          definition: "A drug that binds to a receptor and activates it, producing a biological response. Example: salbutamol is a beta-2 agonist that relaxes bronchial smooth muscle in asthma.",
        },
        {
          type: "key-term",
          term: "Antagonist",
          definition: "A drug that binds to a receptor but does not activate it, instead blocking the receptor and preventing agonists from binding. Example: atenolol is a beta-1 antagonist (beta-blocker) that blocks adrenaline's effects on the heart.",
        },
        {
          type: "text",
          body: "Understanding agonism and antagonism explains how entire drug classes work. Beta-blockers like atenolol and metoprolol — among the most dispensed medications in Caribbean pharmacies for hypertension — work by antagonising (blocking) beta-1 receptors in the heart, reducing heart rate and contractility. Conversely, salbutamol inhalers for asthma work by agonising (activating) beta-2 receptors in the lungs, causing bronchodilation.",
        },
        {
          type: "table",
          caption: "Drug-Receptor Interaction Types",
          headers: ["Type", "Receptor Effect", "Clinical Example", "Caribbean Relevance"],
          rows: [
            ["Full agonist", "Maximal receptor activation", "Salbutamol (beta-2 agonist for asthma)", "Widely used for asthma management across Caribbean islands"],
            ["Partial agonist", "Sub-maximal activation even at full occupancy", "Buprenorphine (partial opioid agonist)", "Used in opioid dependence programmes in Trinidad"],
            ["Antagonist", "Blocks receptor, no activation", "Atenolol (beta-1 blocker)", "First-line for hypertension — covered by CDAP in Trinidad"],
            ["Inverse agonist", "Reduces constitutive receptor activity below baseline", "Certain antihistamines", "Less commonly encountered in practice"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Recognising Drug Classes by Their Stems",
          body: "Drug name stems help you identify receptor targets: -olol = beta-blocker (atenolol, propranolol), -pril = ACE inhibitor (enalapril, lisinopril), -sartan = ARB (losartan, valsartan), -dipine = calcium channel blocker (amlodipine, nifedipine). Learning these stems makes you faster and more accurate at the dispensing counter.",
        },
        {
          type: "knowledge-check",
          question: "A patient in Barbados uses a salbutamol inhaler for asthma and atenolol tablets for hypertension. How do these two drugs interact at the receptor level?",
          options: [
            "They both activate the same receptor, so their effects are additive",
            "Salbutamol is a beta-2 agonist and atenolol is a beta-1 antagonist — at therapeutic doses they primarily affect different receptor subtypes",
            "Atenolol completely blocks salbutamol's effects, making the inhaler useless",
            "They have no relationship because they are taken by different routes",
          ],
          correctIndex: 1,
          explanation: "Salbutamol primarily targets beta-2 receptors (in the lungs) while atenolol primarily targets beta-1 receptors (in the heart). At standard doses they work on different receptor subtypes. However, non-selective beta-blockers like propranolol can block beta-2 receptors and worsen asthma — which is why cardio-selective agents are preferred in asthmatic patients.",
        },
      ],
    },
    // ── Lesson 1.4 ──
    {
      id: "m1-l4",
      title: "Half-Life, Therapeutic Index & Dosing Implications",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "Putting Pharmacokinetic Numbers to Work" },
        {
          type: "text",
          body: "Two pharmacokinetic parameters have direct implications for how drugs are prescribed and dispensed: half-life and therapeutic index. Understanding these concepts explains why some drugs are taken once daily while others require dosing every 4-6 hours, and why some drugs require regular blood monitoring while others do not.",
        },
        {
          type: "key-term",
          term: "Half-life (t\u00BD)",
          definition: "The time required for the plasma concentration of a drug to decrease by 50%. A drug with a long half-life (e.g., amlodipine, ~35 hours) stays in the body longer and can be dosed less frequently. A drug with a short half-life (e.g., paracetamol, ~2 hours) is cleared quickly and must be dosed more often.",
        },
        {
          type: "key-term",
          term: "Therapeutic Index (TI)",
          definition: "The ratio of the toxic dose to the therapeutic dose (TD50/ED50). A drug with a narrow therapeutic index (NTI) has a small margin between the effective dose and the toxic dose. Examples include warfarin, digoxin, lithium, and phenytoin — all requiring careful monitoring.",
        },
        {
          type: "table",
          caption: "Half-Life and Dosing Frequency of Common Caribbean Medications",
          headers: ["Drug", "Half-Life", "Typical Dosing", "Caribbean Context"],
          rows: [
            ["Amlodipine", "30-50 hours", "Once daily", "Most-dispensed antihypertensive in the Caribbean"],
            ["Metformin", "4-8 hours", "Twice daily", "First-line for diabetes — covered by CDAP and NHF"],
            ["Amoxicillin", "1-1.5 hours", "Three times daily", "Most-dispensed antibiotic in Caribbean pharmacies"],
            ["Atenolol", "6-7 hours", "Once daily", "Long enough half-life for convenient once-daily dosing"],
            ["Paracetamol", "1-4 hours", "Every 4-6 hours", "Most common analgesic — often purchased OTC"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Narrow Therapeutic Index Drugs: Extra Vigilance Required",
          body: "Drugs with a narrow therapeutic index (warfarin, digoxin, lithium, phenytoin, theophylline) require extra care during dispensing. Small changes in dose, formulation, or interacting medications can push the patient from therapeutic to toxic. When dispensing NTI drugs, always verify the dose, check for interactions, and confirm the patient understands their monitoring requirements.",
        },
        {
          type: "text",
          body: "Steady state is reached after approximately 4-5 half-lives of regular dosing. At steady state, the rate of drug administration equals the rate of elimination, and plasma levels remain relatively constant. For amlodipine (half-life ~35 hours), steady state is reached in about 7-8 days. This is why patients with newly prescribed amlodipine may not see the full blood pressure lowering effect for a week or more.",
        },
        {
          type: "knowledge-check",
          question: "A patient starts taking amlodipine 5 mg daily for hypertension. The half-life of amlodipine is approximately 35 hours. When will the drug reach steady-state plasma concentration?",
          options: [
            "After the first dose",
            "After 2 days",
            "After 7-8 days (4-5 half-lives)",
            "After 30 days",
          ],
          correctIndex: 2,
          explanation: "Steady state is achieved after 4-5 half-lives of repeated dosing. For amlodipine with a 35-hour half-life: 4 x 35 = 140 hours (about 6 days) to 5 x 35 = 175 hours (about 7 days). This means the full antihypertensive effect may take a week to develop.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m1-q1",
      question: "Which branch of pharmacology studies how the body absorbs, distributes, metabolises, and excretes a drug?",
      options: ["Pharmacodynamics", "Pharmacokinetics", "Pharmacogenomics", "Toxicology"],
      correctIndex: 1,
      explanation: "Pharmacokinetics (PK) studies what the body does to the drug — the ADME processes. Pharmacodynamics studies what the drug does to the body.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q2",
      question: "A drug has a bioavailability of 40% when taken orally. What does this mean?",
      options: [
        "40% of the drug is excreted unchanged in urine",
        "40% of the administered dose reaches the systemic circulation in active form",
        "The drug is 40% protein-bound in plasma",
        "The drug produces effects for 40% of the dosing interval",
      ],
      correctIndex: 1,
      explanation: "Bioavailability is the fraction of administered drug that reaches systemic circulation unchanged. 40% bioavailability means 60% is lost to incomplete absorption or first-pass metabolism.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q3",
      question: "Why is grapefruit juice a concern for patients taking simvastatin in the Caribbean?",
      options: [
        "Grapefruit increases simvastatin absorption by raising gastric pH",
        "Grapefruit inhibits CYP3A4 enzymes, reducing simvastatin metabolism and dangerously increasing drug levels",
        "Grapefruit causes simvastatin to be excreted faster through the kidneys",
        "Grapefruit has no interaction with simvastatin",
      ],
      correctIndex: 1,
      explanation: "Grapefruit juice inhibits CYP3A4 enzymes in the gut wall and liver. Since simvastatin is extensively metabolised by CYP3A4, inhibition leads to dramatically increased drug levels, raising the risk of rhabdomyolysis.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q4",
      question: "A drug that binds to a receptor and blocks it without activating it is called a(n):",
      options: ["Agonist", "Partial agonist", "Antagonist", "Inverse agonist"],
      correctIndex: 2,
      explanation: "An antagonist binds to a receptor but does not activate it, preventing natural ligands or agonist drugs from binding. Example: atenolol blocks beta-1 receptors.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q5",
      question: "The half-life of metformin is approximately 5 hours. How often must it typically be taken?",
      options: ["Once daily", "Twice daily", "Every 4 hours", "Once weekly"],
      correctIndex: 1,
      explanation: "With a 5-hour half-life, metformin is cleared relatively quickly. Twice-daily dosing maintains effective plasma levels throughout the day. Extended-release formulations allow once-daily dosing.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q6",
      question: "Which of the following drugs has a narrow therapeutic index and requires regular blood monitoring?",
      options: ["Amoxicillin", "Paracetamol", "Warfarin", "Amlodipine"],
      correctIndex: 2,
      explanation: "Warfarin has a very narrow therapeutic index — the difference between an effective dose and a dangerous dose is small. Regular INR monitoring is essential to prevent bleeding or clotting.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m1-q7",
      question: "First-pass metabolism primarily occurs in which organ?",
      options: ["Kidneys", "Lungs", "Liver", "Small intestine"],
      correctIndex: 2,
      explanation: "First-pass metabolism occurs primarily in the liver, where enzymes (especially CYP450) metabolise the drug before it reaches systemic circulation. This reduces the bioavailability of many oral drugs.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q8",
      question: "Steady state for a drug is typically reached after:",
      options: ["1 half-life", "2-3 half-lives", "4-5 half-lives", "10 half-lives"],
      correctIndex: 2,
      explanation: "Steady state — where drug input equals drug elimination — is achieved after approximately 4-5 half-lives of repeated dosing at regular intervals.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q9",
      question: "A patient with severe chronic kidney disease requires a dose adjustment for gentamicin. Which ADME process is impaired?",
      options: ["Absorption", "Distribution", "Metabolism", "Excretion"],
      correctIndex: 3,
      explanation: "Gentamicin is eliminated almost entirely by renal excretion. Chronic kidney disease impairs excretion, causing drug accumulation and potential toxicity unless the dose is reduced or the interval extended.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q10",
      question: "The drug name stem '-olol' indicates the drug belongs to which class?",
      options: ["ACE inhibitors", "Beta-blockers", "Calcium channel blockers", "Angiotensin receptor blockers"],
      correctIndex: 1,
      explanation: "The stem -olol identifies beta-adrenergic blockers: atenolol, propranolol, metoprolol, bisoprolol. These are among the most commonly dispensed antihypertensives in the Caribbean.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 2 — Cardiovascular Medications
// ============================================================================

const module2: Module = {
  id: "m2-cardiovascular",
  number: 2,
  title: "Cardiovascular Medications: Hypertension, Heart Failure & Lipid Management",
  description:
    "Hypertension affects over 30% of the adult Caribbean population and is the region's leading cause of death. This module covers the major drug classes used to manage hypertension, heart failure, and dyslipidaemia, with emphasis on medications covered by Trinidad's CDAP programme and Jamaica's NHF.",
  learningObjectives: [
    "Classify the five major antihypertensive drug classes and explain their mechanisms of action",
    "Identify first-line drug choices for hypertension in Caribbean clinical guidelines",
    "Describe the pharmacology of heart failure medications including ACE inhibitors and diuretics",
    "Compare statin therapies and explain their role in cardiovascular risk reduction",
    "Recognise common adverse effects and drug interactions for cardiovascular medications",
  ],
  lessons: [
    {
      id: "m2-l1",
      title: "ACE Inhibitors & Angiotensin Receptor Blockers (ARBs)",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "Blocking the Renin-Angiotensin System" },
        {
          type: "text",
          body: "The renin-angiotensin-aldosterone system (RAAS) is a hormonal cascade that regulates blood pressure and fluid balance. When blood pressure drops, the kidneys release renin, which converts angiotensinogen to angiotensin I. Angiotensin-converting enzyme (ACE) then converts angiotensin I to angiotensin II — a potent vasoconstrictor that also stimulates aldosterone release, promoting sodium and water retention.",
        },
        {
          type: "key-term",
          term: "ACE Inhibitor",
          definition: "A drug that blocks angiotensin-converting enzyme, preventing the formation of angiotensin II. This results in vasodilation, reduced aldosterone secretion, and decreased blood pressure. Common examples: enalapril, lisinopril, ramipril. Identified by the stem -pril.",
        },
        {
          type: "text",
          body: "ACE inhibitors are among the most prescribed medications in Caribbean pharmacies. Enalapril is covered by Trinidad's CDAP programme and Jamaica's NHF. They are particularly beneficial for patients with diabetes (protecting the kidneys) and heart failure. The most common side effect is a persistent dry cough (affecting 5-20% of patients), caused by accumulation of bradykinin.",
        },
        {
          type: "key-term",
          term: "Angiotensin Receptor Blocker (ARB)",
          definition: "A drug that blocks the angiotensin II type 1 (AT1) receptor directly, preventing angiotensin II from causing vasoconstriction. ARBs do not cause the dry cough associated with ACE inhibitors. Examples: losartan, valsartan, irbesartan. Identified by the stem -sartan.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "ACE Inhibitors and Pregnancy",
          body: "ACE inhibitors and ARBs are CONTRAINDICATED in pregnancy — they can cause foetal renal damage, oligohydramnios, and death. Always verify pregnancy status before dispensing these drugs to women of childbearing age. This is especially important in the Caribbean where family planning access varies across islands.",
        },
        {
          type: "island-comparison",
          title: "RAAS Inhibitor Coverage Across Caribbean Drug Programmes",
          islands: [
            { name: "Trinidad & Tobago", flag: "TT", details: ["CDAP covers enalapril 5mg and 10mg", "Losartan available as alternative for ACE cough", "Free at participating pharmacies with CDAP card"] },
            { name: "Jamaica", flag: "JM", details: ["NHF covers enalapril and losartan", "Part of the NHF drug card benefit", "Available at public hospital pharmacies and participating private pharmacies"] },
            { name: "Barbados", flag: "BB", details: ["Barbados Drug Service covers enalapril", "Formulary-listed ACE inhibitors available at QEH", "Private insurance typically covers both ACEi and ARBs"] },
          ],
        },
        {
          type: "knowledge-check",
          question: "A patient on enalapril complains of a persistent dry cough that is affecting their sleep. What is the most appropriate recommendation?",
          options: [
            "Advise the patient to take a cough suppressant alongside enalapril",
            "Suggest the prescriber switch to an ARB such as losartan, which does not cause cough",
            "Tell the patient the cough will go away on its own after a few weeks",
            "Recommend doubling the dose to overcome the cough",
          ],
          correctIndex: 1,
          explanation: "The dry cough from ACE inhibitors is caused by bradykinin accumulation and does not resolve with continued use. Switching to an ARB (e.g., losartan) provides similar blood pressure control without the cough, as ARBs do not affect bradykinin metabolism.",
        },
      ],
    },
    {
      id: "m2-l2",
      title: "Calcium Channel Blockers & Diuretics",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "Two Pillars of Caribbean Hypertension Management" },
        {
          type: "text",
          body: "Calcium channel blockers (CCBs) and diuretics are the backbone of hypertension treatment in the Caribbean. CCBs like amlodipine are particularly effective in Black patients, who make up the majority of the Caribbean population. Diuretics — especially thiazides like hydrochlorothiazide — are often the cheapest antihypertensive option and are widely available across the region.",
        },
        {
          type: "key-term",
          term: "Calcium Channel Blocker (CCB)",
          definition: "A drug that blocks L-type calcium channels in vascular smooth muscle and/or cardiac muscle, causing vasodilation and reduced blood pressure. Dihydropyridines (e.g., amlodipine, nifedipine) primarily affect blood vessels; non-dihydropyridines (e.g., verapamil, diltiazem) also slow heart rate.",
        },
        {
          type: "text",
          body: "Amlodipine is the most dispensed antihypertensive in many Caribbean pharmacies. Its long half-life (~35 hours) allows once-daily dosing, promoting adherence. Common side effects include peripheral oedema (ankle swelling) — a frequent complaint from patients — headache, and flushing. These are all consequences of vasodilation.",
        },
        {
          type: "table",
          caption: "Diuretic Classes Used in Caribbean Hypertension Management",
          headers: ["Class", "Example", "Site of Action", "Key Concern"],
          rows: [
            ["Thiazide", "Hydrochlorothiazide", "Distal convoluted tubule", "Hypokalaemia, hyperuricaemia (gout risk)"],
            ["Loop", "Furosemide", "Loop of Henle", "Potent — used in heart failure and oedema; risk of dehydration"],
            ["Potassium-sparing", "Spironolactone", "Collecting duct", "Hyperkalaemia risk — do NOT combine with ACEi without monitoring"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Hypokalaemia and Tropical Heat",
          body: "Thiazide and loop diuretics cause potassium loss. In the Caribbean's tropical climate, patients who sweat heavily and take diuretics are at increased risk of dangerous hypokalaemia. Symptoms include muscle weakness, cramps, and cardiac arrhythmias. Counsel patients to eat potassium-rich foods (bananas, coconut water) and stay hydrated.",
        },
        {
          type: "knowledge-check",
          question: "Why are calcium channel blockers like amlodipine particularly recommended for hypertension management in Caribbean populations?",
          options: [
            "They are the cheapest available option",
            "They are more effective in Black patients due to differences in RAAS activity",
            "They have no side effects",
            "They also treat diabetes simultaneously",
          ],
          correctIndex: 1,
          explanation: "Clinical evidence (including the ALLHAT trial) shows that CCBs and diuretics are more effective as first-line monotherapy in Black patients compared to ACE inhibitors and beta-blockers. This is attributed to lower renin levels in Black populations. Caribbean guidelines reflect this evidence.",
        },
      ],
    },
    {
      id: "m2-l3",
      title: "Beta-Blockers & Combination Therapy",
      duration: "6 min",
      content: [
        { type: "heading", level: 2, text: "Slowing the Heart, Protecting the Vessels" },
        {
          type: "text",
          body: "Beta-blockers reduce blood pressure by blocking beta-1 adrenergic receptors in the heart, decreasing heart rate, contractility, and cardiac output. They also reduce renin release from the kidneys. While no longer recommended as first-line monotherapy for uncomplicated hypertension, beta-blockers remain essential for patients with heart failure, post-myocardial infarction, angina, and certain arrhythmias.",
        },
        {
          type: "table",
          caption: "Cardioselective vs Non-Selective Beta-Blockers",
          headers: ["Feature", "Cardioselective (Beta-1)", "Non-Selective (Beta-1 & 2)"],
          rows: [
            ["Examples", "Atenolol, metoprolol, bisoprolol", "Propranolol, carvedilol, labetalol"],
            ["Primary effect", "Heart rate and contractility reduction", "Heart + bronchial smooth muscle + peripheral vessels"],
            ["Asthma risk", "Lower risk at therapeutic doses", "Contraindicated — may trigger bronchospasm"],
            ["Caribbean availability", "Atenolol widely available on CDAP/NHF", "Propranolol commonly used for anxiety, migraine"],
          ],
        },
        {
          type: "text",
          body: "Most patients with moderate to severe hypertension require two or more antihypertensive drugs. The ABCD rule guides combination therapy: A (ACEi/ARB) + C (CCB) or A + D (diuretic) are preferred combinations. Combining ACEi with ARB is generally avoided due to increased risk of hyperkalaemia and renal impairment without additional benefit.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Fixed-Dose Combinations Improve Adherence",
          body: "Single-pill combinations (e.g., amlodipine/valsartan, losartan/hydrochlorothiazide) reduce pill burden and improve adherence. In the Caribbean, where medication adherence is a major challenge, recommending combination tablets when available can significantly improve blood pressure control.",
        },
        {
          type: "knowledge-check",
          question: "A patient with asthma and hypertension needs a beta-blocker for heart failure. Which is the safest choice?",
          options: [
            "Propranolol — because it is the cheapest",
            "A cardioselective beta-blocker like bisoprolol, with close monitoring",
            "Any beta-blocker is safe in asthma",
            "Beta-blockers are absolutely contraindicated in all asthma patients",
          ],
          correctIndex: 1,
          explanation: "Cardioselective beta-blockers (bisoprolol, metoprolol) preferentially block beta-1 receptors and have minimal effect on beta-2 receptors in the airways at therapeutic doses. They can be used cautiously in patients with asthma when the benefit (e.g., heart failure management) outweighs the risk, with close monitoring.",
        },
      ],
    },
    {
      id: "m2-l4",
      title: "Heart Failure Medications",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "Supporting the Failing Heart" },
        {
          type: "text",
          body: "Heart failure is a growing problem in the Caribbean, driven by poorly controlled hypertension, rheumatic heart disease, and cardiomyopathy. Treatment aims to reduce symptoms (congestion, breathlessness), slow disease progression, and reduce mortality. The mainstay medications are ACE inhibitors (or ARBs), beta-blockers, diuretics, and mineralocorticoid receptor antagonists (MRAs).",
        },
        {
          type: "table",
          caption: "Heart Failure Drug Classes and Their Roles",
          headers: ["Drug Class", "Example", "Role in Heart Failure", "Key Monitoring"],
          rows: [
            ["ACE inhibitor", "Enalapril", "Reduces preload and afterload; slows progression", "Renal function, potassium"],
            ["Beta-blocker", "Bisoprolol, carvedilol", "Reduces heart rate; improves survival", "Heart rate, blood pressure"],
            ["Loop diuretic", "Furosemide", "Relieves fluid overload and congestion", "Weight, electrolytes, renal function"],
            ["MRA", "Spironolactone", "Reduces mortality in severe HF", "Potassium (risk of hyperkalaemia)"],
            ["Digoxin", "Lanoxin", "Controls rate in AF; improves symptoms", "Drug levels (NTI), renal function, potassium"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Digoxin: A Narrow Therapeutic Index Drug",
          body: "Digoxin has a very narrow therapeutic index (therapeutic range 0.5-2.0 ng/mL). Toxicity causes nausea, visual disturbances (yellow-green halos), and life-threatening arrhythmias. Hypokalaemia (from diuretics) increases digoxin toxicity risk. In the Caribbean, where furosemide and digoxin are commonly co-prescribed, always flag this interaction.",
        },
        {
          type: "knowledge-check",
          question: "Why is monitoring potassium levels particularly important in a heart failure patient taking both furosemide and digoxin?",
          options: [
            "Furosemide increases potassium, which reduces digoxin absorption",
            "Furosemide causes potassium loss, and hypokalaemia increases the risk of digoxin toxicity",
            "Digoxin causes hyperkalaemia, and furosemide corrects it",
            "There is no interaction between these drugs",
          ],
          correctIndex: 1,
          explanation: "Furosemide (a loop diuretic) causes potassium excretion. Low potassium levels increase digoxin binding to cardiac Na+/K+ ATPase, amplifying its toxic effects on the heart. This combination requires regular monitoring of serum potassium and digoxin levels.",
        },
      ],
    },
    {
      id: "m2-l5",
      title: "Lipid-Lowering Agents: Statins & Beyond",
      duration: "6 min",
      content: [
        { type: "heading", level: 2, text: "Reducing Cardiovascular Risk Through Lipid Management" },
        {
          type: "text",
          body: "Dyslipidaemia is a major cardiovascular risk factor in the Caribbean, often coexisting with hypertension and diabetes. Statins are the cornerstone of lipid-lowering therapy, reducing LDL cholesterol by inhibiting HMG-CoA reductase — the rate-limiting enzyme in cholesterol synthesis in the liver. Atorvastatin and simvastatin are the most commonly dispensed statins in Caribbean pharmacies.",
        },
        {
          type: "key-term",
          term: "Statin",
          definition: "A drug that inhibits HMG-CoA reductase, reducing hepatic cholesterol synthesis and increasing LDL receptor expression. This lowers LDL cholesterol by 30-55% depending on the drug and dose. Examples: atorvastatin, simvastatin, rosuvastatin. Identified by the stem -statin.",
        },
        {
          type: "table",
          caption: "Lipid-Lowering Drug Classes",
          headers: ["Class", "Example", "Primary Effect", "Side Effects"],
          rows: [
            ["Statin", "Atorvastatin", "Lowers LDL 30-55%", "Myalgia, elevated liver enzymes, rhabdomyolysis (rare)"],
            ["Fibrate", "Gemfibrozil", "Lowers triglycerides 25-50%", "GI upset, myopathy risk when combined with statins"],
            ["Ezetimibe", "Ezetimibe", "Lowers LDL 15-20%", "Generally well tolerated; used as add-on to statins"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Statins: Evening Dosing Matters for Some",
          body: "Simvastatin and lovastatin should be taken in the evening because cholesterol synthesis peaks overnight. Atorvastatin and rosuvastatin have long half-lives and can be taken at any time. This is a common counselling point at the dispensing counter.",
        },
        {
          type: "knowledge-check",
          question: "A patient at a Jamaican pharmacy reports new-onset muscle pain after starting simvastatin. What should the pharmacy technician do?",
          options: [
            "Tell the patient muscle pain is normal and will resolve",
            "Advise the patient to take a painkiller and continue simvastatin",
            "Flag the complaint to the pharmacist immediately, as it may indicate myopathy or rhabdomyolysis",
            "Suggest the patient take the simvastatin in the morning instead",
          ],
          correctIndex: 2,
          explanation: "New-onset muscle pain (myalgia) in a patient on a statin may indicate myopathy or, rarely, rhabdomyolysis — a serious condition where muscle breakdown products can cause kidney failure. This must be reported to the pharmacist for clinical assessment and potential CK level testing.",
        },
      ],
    },
  ],
  quiz: [
    { id: "m2-q1", question: "Which antihypertensive class is identified by the drug name stem '-pril'?", options: ["Beta-blockers", "ACE inhibitors", "Calcium channel blockers", "ARBs"], correctIndex: 1, explanation: "The stem -pril identifies ACE inhibitors: enalapril, lisinopril, ramipril, perindopril.", difficulty: "easy", bloomsLevel: "remember" },
    { id: "m2-q2", question: "Which side effect is most characteristic of ACE inhibitors?", options: ["Ankle oedema", "Persistent dry cough", "Bradycardia", "Muscle cramps"], correctIndex: 1, explanation: "ACE inhibitors cause a dry cough in 5-20% of patients due to bradykinin accumulation. Switching to an ARB resolves this.", difficulty: "easy", bloomsLevel: "remember" },
    { id: "m2-q3", question: "Why are CCBs and thiazide diuretics particularly effective as first-line therapy in Caribbean populations?", options: ["They are the cheapest options", "Black patients tend to have lower renin levels, making RAAS blockers less effective as monotherapy", "They have no side effects", "They also lower cholesterol"], correctIndex: 1, explanation: "Clinical evidence shows that CCBs and diuretics are more effective as monotherapy in Black patients due to lower baseline renin-angiotensin system activity. Caribbean guidelines reflect this.", difficulty: "medium", bloomsLevel: "understand" },
    { id: "m2-q4", question: "A patient on hydrochlorothiazide develops muscle cramps and fatigue. Which electrolyte imbalance is most likely?", options: ["Hypernatraemia", "Hyperkalaemia", "Hypokalaemia", "Hypercalcaemia"], correctIndex: 2, explanation: "Thiazide diuretics increase potassium excretion, causing hypokalaemia. Symptoms include muscle cramps, weakness, fatigue, and cardiac arrhythmias.", difficulty: "medium", bloomsLevel: "apply" },
    { id: "m2-q5", question: "Which beta-blocker is CONTRAINDICATED in a patient with active asthma?", options: ["Bisoprolol", "Atenolol", "Propranolol", "Metoprolol"], correctIndex: 2, explanation: "Propranolol is a non-selective beta-blocker that blocks both beta-1 and beta-2 receptors. Beta-2 blockade in the lungs can trigger bronchospasm in asthmatic patients.", difficulty: "medium", bloomsLevel: "apply" },
    { id: "m2-q6", question: "ACE inhibitors are contraindicated in pregnancy because they can cause:", options: ["Gestational diabetes", "Foetal renal damage and oligohydramnios", "Maternal hyperthyroidism", "Neural tube defects"], correctIndex: 1, explanation: "ACE inhibitors (and ARBs) can cause foetal kidney damage, reduced amniotic fluid, skull defects, and foetal death, particularly in the second and third trimesters.", difficulty: "medium", bloomsLevel: "remember" },
    { id: "m2-q7", question: "Why must potassium levels be closely monitored when furosemide and digoxin are co-prescribed?", options: ["Furosemide increases digoxin absorption", "Hypokalaemia from furosemide increases the risk of digoxin toxicity", "Digoxin causes furosemide to stop working", "There is no clinically relevant interaction"], correctIndex: 1, explanation: "Furosemide causes potassium loss. Low potassium amplifies digoxin's effect on cardiac Na+/K+ ATPase, increasing toxicity risk (arrhythmias, nausea, visual disturbances).", difficulty: "hard", bloomsLevel: "analyze" },
    { id: "m2-q8", question: "Simvastatin should be taken in the evening because:", options: ["It causes drowsiness", "Cholesterol synthesis peaks overnight, and simvastatin has a short half-life", "It interacts with breakfast foods", "It must be taken on an empty stomach"], correctIndex: 1, explanation: "Cholesterol synthesis by HMG-CoA reductase is highest at night. Short-acting statins like simvastatin are most effective when taken in the evening to coincide with peak synthesis.", difficulty: "medium", bloomsLevel: "understand" },
    { id: "m2-q9", question: "A fixed-dose combination of amlodipine/valsartan is preferred over separate tablets primarily because it:", options: ["Is cheaper than individual tablets", "Improves adherence by reducing pill burden", "Has fewer side effects", "Is stronger than individual drugs"], correctIndex: 1, explanation: "Fixed-dose combinations reduce pill burden, simplify regimens, and significantly improve adherence — a major challenge in Caribbean hypertension management.", difficulty: "medium", bloomsLevel: "understand" },
    { id: "m2-q10", question: "The drug name stem '-sartan' identifies which drug class?", options: ["Statins", "ACE inhibitors", "Beta-blockers", "Angiotensin receptor blockers (ARBs)"], correctIndex: 3, explanation: "The stem -sartan identifies ARBs: losartan, valsartan, irbesartan, candesartan. These block the AT1 receptor.", difficulty: "easy", bloomsLevel: "remember" },
  ],
};

// ============================================================================
// MODULE 3 — Endocrine & Metabolic Medications
// ============================================================================

const module3: Module = {
  id: "m3-endocrine",
  number: 3,
  title: "Endocrine & Metabolic Medications: Diabetes, Thyroid & Hormonal Therapies",
  description:
    "The Caribbean faces a diabetes epidemic — nearly 15% of adults in Trinidad and Tobago have diabetes. This module covers insulin types, oral hypoglycaemics, thyroid medications, and hormonal therapies, with focus on the drugs most commonly dispensed through CDAP, NHF, and Barbados Drug Service programmes.",
  learningObjectives: [
    "Classify the major insulin types by onset, peak, and duration of action",
    "Compare oral hypoglycaemic drug classes including metformin, sulfonylureas, and SGLT2 inhibitors",
    "Describe the pharmacology of levothyroxine and its dosing considerations",
    "Identify common adverse effects and drug interactions for diabetic medications",
    "Apply knowledge of endocrine pharmacology to dispensing scenarios in Caribbean pharmacies",
  ],
  lessons: [
    {
      id: "m3-l1",
      title: "Insulin Therapy: Types, Storage & Dispensing",
      duration: "8 min",
      content: [
        { type: "heading", level: 2, text: "Understanding Insulin in Caribbean Practice" },
        {
          type: "text",
          body: "Insulin is a life-saving hormone replacement for patients with type 1 diabetes and many patients with advanced type 2 diabetes. In the Caribbean, where diabetes prevalence is among the highest in the Americas, pharmacy technicians dispense insulin daily. Understanding insulin types, storage requirements, and patient counselling points is essential.",
        },
        {
          type: "table",
          caption: "Insulin Types: Onset, Peak, and Duration",
          headers: ["Category", "Example", "Onset", "Peak", "Duration"],
          rows: [
            ["Rapid-acting", "Insulin lispro (Humalog), aspart (NovoRapid)", "10-20 min", "1-3 hours", "3-5 hours"],
            ["Short-acting", "Regular insulin (Humulin R, Actrapid)", "30-60 min", "2-4 hours", "5-8 hours"],
            ["Intermediate-acting", "NPH insulin (Humulin N, Insulatard)", "1-3 hours", "4-12 hours", "12-18 hours"],
            ["Long-acting", "Insulin glargine (Lantus), detemir (Levemir)", "1-2 hours", "No pronounced peak", "18-24+ hours"],
            ["Pre-mixed", "70/30 (NPH/Regular)", "30-60 min", "Dual peaks", "12-18 hours"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Cold Chain Management in Tropical Climates",
          body: "Insulin MUST be stored at 2-8\u00B0C (refrigerator) until opened. Once in use, most insulin pens/vials can be kept at room temperature (below 30\u00B0C) for 28 days. In the Caribbean's tropical heat, 'room temperature' can easily exceed 30\u00B0C. Counsel patients to NEVER leave insulin in a car, in direct sunlight, or near a window. A cool bag with ice packs is recommended for transport.",
        },
        {
          type: "key-term",
          term: "Hypoglycaemia",
          definition: "Abnormally low blood glucose (typically below 4 mmol/L or 70 mg/dL). Symptoms include sweating, trembling, confusion, and in severe cases, loss of consciousness. Insulin-using patients must be counselled on recognising and treating hypoglycaemia with fast-acting carbohydrates.",
        },
        {
          type: "knowledge-check",
          question: "A patient in Trinidad brings their insulin to the pharmacy counter on a hot day. The insulin pen feels warm to the touch. What should you advise?",
          options: [
            "It is fine — insulin is not affected by heat",
            "The insulin may have lost potency if exposed to temperatures above 30\u00B0C for a prolonged period and should be replaced",
            "Put it in the freezer for 30 minutes to cool it down",
            "Shake the pen vigorously to reactivate the insulin",
          ],
          correctIndex: 1,
          explanation: "Insulin degrades when exposed to temperatures above 30\u00B0C. In tropical Caribbean conditions, insulin left in a hot car or bag can lose potency rapidly. The patient should discard the warm pen and use a properly stored replacement. Never freeze insulin.",
        },
      ],
    },
    {
      id: "m3-l2",
      title: "Oral Hypoglycaemics: Metformin, Sulfonylureas & Newer Agents",
      duration: "8 min",
      content: [
        { type: "heading", level: 2, text: "Managing Type 2 Diabetes Without Insulin" },
        {
          type: "text",
          body: "Most patients with type 2 diabetes in the Caribbean begin treatment with lifestyle modifications and metformin, the first-line oral hypoglycaemic worldwide. If metformin alone is insufficient, a second agent is added — commonly a sulfonylurea in the Caribbean due to cost and availability. Newer agents like DPP-4 inhibitors and SGLT2 inhibitors are increasingly available but often at higher cost.",
        },
        {
          type: "key-term",
          term: "Metformin",
          definition: "A biguanide that reduces hepatic glucose production, increases insulin sensitivity, and reduces intestinal glucose absorption. First-line treatment for type 2 diabetes. Does NOT cause hypoglycaemia when used alone. Covered by CDAP (Trinidad) and NHF (Jamaica).",
        },
        {
          type: "table",
          caption: "Oral Hypoglycaemic Drug Classes",
          headers: ["Class", "Example", "Mechanism", "Hypoglycaemia Risk", "Caribbean Availability"],
          rows: [
            ["Biguanide", "Metformin", "Reduces hepatic glucose output", "Low (alone)", "Widely available — CDAP, NHF, Barbados Drug Service"],
            ["Sulfonylurea", "Glibenclamide, glimepiride", "Stimulates insulin secretion from pancreas", "HIGH", "Common second-line agent across Caribbean"],
            ["DPP-4 inhibitor", "Sitagliptin, linagliptin", "Increases incretin hormones", "Low", "Increasingly available; higher cost"],
            ["SGLT2 inhibitor", "Empagliflozin, dapagliflozin", "Blocks renal glucose reabsorption", "Low", "Growing use; cardiovascular and renal benefits"],
            ["Thiazolidinedione", "Pioglitazone", "Increases insulin sensitivity", "Low", "Limited use due to fluid retention concerns"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Metformin and Lactic Acidosis",
          body: "Metformin should be used with caution (or withheld) in patients with significant renal impairment (eGFR <30 mL/min), severe dehydration, or acute illness. In these situations, metformin can accumulate and rarely cause lactic acidosis — a medical emergency. In the Caribbean, where dehydration from heat and gastroenteritis is common, this risk is clinically relevant.",
        },
        {
          type: "case-study",
          title: "Case Study: Hypoglycaemia at a Kingston Market",
          scenario: "A 68-year-old woman taking glibenclamide 5 mg twice daily for diabetes is brought into a Kingston pharmacy by a concerned bystander. She appears confused, sweaty, and trembling. She last ate at 6 AM and it is now 2 PM.",
          questions: [
            "What is the most likely cause of her symptoms?",
            "Why is glibenclamide particularly risky for hypoglycaemia compared to metformin?",
            "What immediate action should be taken in the pharmacy?",
          ],
          discussion: "This patient is likely experiencing hypoglycaemia caused by glibenclamide, a sulfonylurea that stimulates insulin release regardless of blood glucose level. Skipping lunch while on a sulfonylurea is dangerous. Immediate management: give a fast-acting carbohydrate (glucose tablets, juice, or sugar water) and call for medical assistance if the patient does not improve within 15 minutes.",
        },
        {
          type: "knowledge-check",
          question: "Which oral hypoglycaemic is first-line for type 2 diabetes and does NOT cause hypoglycaemia when used alone?",
          options: ["Glibenclamide", "Metformin", "Pioglitazone", "Glimepiride"],
          correctIndex: 1,
          explanation: "Metformin is the global first-line treatment for type 2 diabetes. It works by reducing hepatic glucose production, not by stimulating insulin secretion, so it does not cause hypoglycaemia when used as monotherapy.",
        },
      ],
    },
    {
      id: "m3-l3",
      title: "Thyroid Medications & Hormonal Therapies",
      duration: "6 min",
      content: [
        { type: "heading", level: 2, text: "Managing Thyroid Disorders and Hormonal Conditions" },
        {
          type: "text",
          body: "Thyroid disorders are common in the Caribbean, with hypothyroidism being far more prevalent than hyperthyroidism. Levothyroxine — a synthetic form of the thyroid hormone T4 — is the standard treatment for hypothyroidism and one of the most prescribed medications globally. Proper dispensing requires attention to timing, interactions, and narrow therapeutic dosing.",
        },
        {
          type: "key-term",
          term: "Levothyroxine",
          definition: "A synthetic thyroid hormone (T4) used to treat hypothyroidism. It has a narrow therapeutic window and should be taken on an empty stomach, 30-60 minutes before breakfast, with a full glass of water. Many drugs and foods interfere with its absorption.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Take on an empty stomach, 30-60 minutes before breakfast",
            "Separate from calcium, iron, and antacids by at least 4 hours (they reduce absorption)",
            "Consistent daily timing is essential for stable thyroid levels",
            "Do NOT switch brands without medical supervision (bioavailability varies between manufacturers)",
            "TSH levels should be checked 6-8 weeks after any dose change",
          ],
        },
        {
          type: "text",
          body: "Hormonal therapies dispensed in Caribbean pharmacies include combined oral contraceptives (COCs), progestogen-only pills, injectable contraceptives (Depo-Provera), and hormone replacement therapy (HRT). Pharmacy technicians should be aware of major contraindications: COCs are contraindicated in women over 35 who smoke, those with migraine with aura, and those with a history of venous thromboembolism.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Counselling Point: Levothyroxine and Morning Coffee",
          body: "Many Caribbean patients take their levothyroxine with morning coffee. Caffeine can reduce levothyroxine absorption by up to 30%. Advise patients to wait at least 30 minutes after taking levothyroxine before having coffee — or take it at bedtime as an alternative (with prescriber approval).",
        },
        {
          type: "knowledge-check",
          question: "A patient takes levothyroxine and a calcium supplement. How should these be timed?",
          options: [
            "Take together for convenience",
            "Separate by at least 4 hours — calcium reduces levothyroxine absorption",
            "Take calcium first, then levothyroxine 30 minutes later",
            "Timing does not matter for these two medications",
          ],
          correctIndex: 1,
          explanation: "Calcium forms insoluble complexes with levothyroxine in the gut, significantly reducing absorption. A separation of at least 4 hours is recommended. The same applies to iron supplements and antacids.",
        },
      ],
    },
    {
      id: "m3-l4",
      title: "Diabetic Emergencies & Special Populations",
      duration: "6 min",
      content: [
        { type: "heading", level: 2, text: "When Blood Sugar Goes Critical" },
        {
          type: "text",
          body: "Pharmacy technicians in the Caribbean must recognise the signs of diabetic emergencies because patients experiencing them may walk into the pharmacy before reaching a hospital. The two major emergencies are severe hypoglycaemia (blood glucose critically low) and diabetic ketoacidosis (DKA — blood glucose critically high with ketone production).",
        },
        {
          type: "table",
          caption: "Hypoglycaemia vs Diabetic Ketoacidosis",
          headers: ["Feature", "Hypoglycaemia", "Diabetic Ketoacidosis (DKA)"],
          rows: [
            ["Blood glucose", "Below 4 mmol/L (70 mg/dL)", "Above 14 mmol/L (250 mg/dL)"],
            ["Onset", "Rapid (minutes)", "Gradual (hours to days)"],
            ["Symptoms", "Sweating, trembling, confusion, seizures", "Thirst, frequent urination, nausea, fruity breath, confusion"],
            ["Immediate action", "Fast-acting sugar (glucose tablets, juice)", "Emergency medical referral — IV fluids and insulin needed"],
            ["Common cause", "Missed meal, excess insulin/sulfonylurea", "Insulin omission, infection, illness"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Ramadan and Diabetic Fasting",
          body: "The Caribbean has significant Muslim populations, particularly in Trinidad and Tobago and Guyana. During Ramadan, Muslim patients with diabetes may fast from sunrise to sunset. This dramatically increases the risk of hypoglycaemia (especially with sulfonylureas and insulin) and hyperglycaemia (when breaking fast). Medication timing adjustments are essential — always refer to the pharmacist.",
        },
        {
          type: "knowledge-check",
          question: "A diabetic patient walks into your pharmacy in Grenada appearing confused with sweaty palms. Which emergency is most likely and what should you do first?",
          options: [
            "DKA — give insulin immediately",
            "Hypoglycaemia — give fast-acting carbohydrate (juice or glucose) and monitor",
            "Drug allergy — give an antihistamine",
            "Dehydration — give water and salt",
          ],
          correctIndex: 1,
          explanation: "Confusion with sweating in a diabetic patient strongly suggests hypoglycaemia. The immediate response is to give a fast-acting carbohydrate. If the patient cannot swallow safely, call emergency services. Never give insulin to a hypoglycaemic patient.",
        },
      ],
    },
  ],
  quiz: [
    { id: "m3-q1", question: "Which insulin type has no pronounced peak and lasts 18-24+ hours?", options: ["Regular insulin", "NPH insulin", "Insulin glargine (Lantus)", "Insulin lispro"], correctIndex: 2, explanation: "Glargine is a long-acting basal insulin with a relatively flat pharmacokinetic profile and duration of 18-24+ hours.", difficulty: "easy", bloomsLevel: "remember" },
    { id: "m3-q2", question: "Opened insulin pens in tropical Caribbean conditions should be:", options: ["Kept in the freezer", "Stored below 30\u00B0C and used within 28 days", "Left at room temperature indefinitely", "Returned to the refrigerator after each use"], correctIndex: 1, explanation: "Once opened, insulin can be kept at room temperature (below 30\u00B0C) for up to 28 days. In the Caribbean's heat, patients must take extra care to avoid exposing insulin to high temperatures.", difficulty: "medium", bloomsLevel: "apply" },
    { id: "m3-q3", question: "Metformin is avoided in patients with severe renal impairment because:", options: ["It causes kidney damage", "It accumulates and can cause lactic acidosis", "It loses all effectiveness", "It causes severe hyperglycaemia"], correctIndex: 1, explanation: "Metformin is renally excreted. In severe renal impairment, it accumulates to dangerous levels, increasing the rare but serious risk of lactic acidosis.", difficulty: "medium", bloomsLevel: "understand" },
    { id: "m3-q4", question: "Which oral hypoglycaemic class carries the highest risk of hypoglycaemia?", options: ["Biguanides (metformin)", "Sulfonylureas (glibenclamide)", "DPP-4 inhibitors (sitagliptin)", "SGLT2 inhibitors (empagliflozin)"], correctIndex: 1, explanation: "Sulfonylureas stimulate insulin secretion from the pancreas regardless of blood glucose level, creating significant hypoglycaemia risk, especially if meals are missed.", difficulty: "medium", bloomsLevel: "analyze" },
    { id: "m3-q5", question: "Levothyroxine absorption is significantly reduced by:", options: ["Vitamin D supplements", "Calcium and iron supplements", "Vitamin B12", "Fish oil"], correctIndex: 1, explanation: "Calcium and iron form insoluble complexes with levothyroxine in the GI tract, reducing absorption by 30-40%. Separate by at least 4 hours.", difficulty: "medium", bloomsLevel: "remember" },
    { id: "m3-q6", question: "A fasting diabetic patient during Ramadan is most at risk of:", options: ["Weight gain", "Hypoglycaemia, especially if taking sulfonylureas", "Thyroid dysfunction", "Liver damage"], correctIndex: 1, explanation: "Prolonged fasting while taking insulin or sulfonylureas dramatically increases hypoglycaemia risk. Medication timing must be adjusted during Ramadan.", difficulty: "medium", bloomsLevel: "apply" },
    { id: "m3-q7", question: "SGLT2 inhibitors lower blood glucose by:", options: ["Stimulating insulin secretion", "Reducing hepatic glucose production", "Blocking glucose reabsorption in the kidneys, causing glucosuria", "Increasing insulin sensitivity in muscle"], correctIndex: 2, explanation: "SGLT2 inhibitors block the sodium-glucose co-transporter 2 in the proximal tubule of the kidney, preventing glucose reabsorption and causing it to be excreted in urine.", difficulty: "medium", bloomsLevel: "understand" },
    { id: "m3-q8", question: "A confused, sweating diabetic patient in a pharmacy most likely has:", options: ["Hyperglycaemia", "Hypoglycaemia", "A thyroid storm", "An allergic reaction"], correctIndex: 1, explanation: "Sweating, trembling, and confusion are classic symptoms of hypoglycaemia. Give fast-acting carbohydrate immediately and monitor.", difficulty: "easy", bloomsLevel: "apply" },
    { id: "m3-q9", question: "Combined oral contraceptives are CONTRAINDICATED in:", options: ["Women under 30", "Women over 35 who smoke", "Women with regular menstrual cycles", "Women who exercise regularly"], correctIndex: 1, explanation: "COCs significantly increase the risk of venous thromboembolism and stroke in women over 35 who smoke. This is an absolute contraindication.", difficulty: "medium", bloomsLevel: "remember" },
    { id: "m3-q10", question: "Why should patients NOT switch levothyroxine brands without medical supervision?", options: ["Different brands have different colours", "Bioavailability varies between manufacturers, which can alter thyroid hormone levels", "Some brands contain lactose", "Brand switching is actually perfectly safe"], correctIndex: 1, explanation: "Levothyroxine has a narrow therapeutic index and small differences in bioavailability between manufacturers can cause clinically significant changes in thyroid hormone levels.", difficulty: "hard", bloomsLevel: "analyze" },
  ],
};

// ============================================================================
// MODULE 4 — Anti-Infective Agents
// ============================================================================

const module4: Module = {
  id: "m4-anti-infectives",
  number: 4,
  title: "Anti-Infective Agents: Antibiotics, Antivirals & Antifungals",
  description:
    "Anti-infective medications are among the most frequently dispensed drugs in Caribbean pharmacies. This module covers the major antibiotic classes, antivirals (including ARVs for HIV), and antifungals, with emphasis on appropriate use and the growing threat of antimicrobial resistance in the region.",
  learningObjectives: [
    "Classify major antibiotic families and their mechanisms of action",
    "Identify appropriate and inappropriate antibiotic use in Caribbean practice",
    "Describe the pharmacology of key antiviral agents including ARVs for HIV",
    "Explain the mechanisms of common antifungal drugs used in the Caribbean",
    "Recognise the threat of antimicrobial resistance and the pharmacy technician's role in stewardship",
  ],
  lessons: [
    {
      id: "m4-l1",
      title: "Penicillins, Cephalosporins & Beta-Lactam Antibiotics",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "The Beta-Lactam Family" },
        { type: "text", body: "Beta-lactam antibiotics — including penicillins, cephalosporins, and carbapenems — are the most widely used antibiotics worldwide and in the Caribbean. They work by inhibiting bacterial cell wall synthesis, causing the bacteria to lyse (burst) and die. Amoxicillin, a broad-spectrum penicillin, is the single most dispensed antibiotic in Caribbean pharmacies." },
        { type: "key-term", term: "Beta-lactam ring", definition: "A four-membered ring structure shared by penicillins, cephalosporins, and carbapenems. This ring is essential for antibacterial activity — it binds to penicillin-binding proteins (PBPs) and inhibits cell wall synthesis. Bacteria that produce beta-lactamase enzymes can destroy this ring, causing resistance." },
        {
          type: "table",
          caption: "Common Beta-Lactam Antibiotics in Caribbean Practice",
          headers: ["Drug", "Class", "Spectrum", "Common Caribbean Use"],
          rows: [
            ["Amoxicillin", "Aminopenicillin", "Broad-spectrum gram-positive and some gram-negative", "RTIs, UTIs, otitis media, dental infections"],
            ["Amoxicillin/clavulanate (Augmentin)", "Penicillin + beta-lactamase inhibitor", "Extended spectrum including beta-lactamase producers", "Resistant infections, bite wounds, sinusitis"],
            ["Cephalexin", "1st-gen cephalosporin", "Gram-positive focus", "Skin and soft tissue infections"],
            ["Ceftriaxone", "3rd-gen cephalosporin (IM/IV)", "Broad including many gram-negatives", "Hospital infections, gonorrhoea, meningitis"],
          ],
        },
        { type: "callout", variant: "danger", title: "Penicillin Allergy: Always Ask", body: "Penicillin allergy is one of the most commonly reported drug allergies. Always ask patients about allergies before dispensing any beta-lactam antibiotic. True penicillin allergy (anaphylaxis) contraindicates ALL penicillins and carries a 1-2% cross-reactivity risk with cephalosporins. Document the allergy prominently in the patient record." },
        { type: "knowledge-check", question: "A patient with a documented penicillin allergy (anaphylaxis) needs an antibiotic for a UTI. Which of the following should NOT be dispensed?", options: ["Ciprofloxacin", "Nitrofurantoin", "Cephalexin (with caution)", "Amoxicillin"], correctIndex: 3, explanation: "Amoxicillin is a penicillin and is absolutely contraindicated in patients with documented penicillin anaphylaxis. Cephalosporins carry a small cross-reactivity risk. Non-beta-lactam alternatives like ciprofloxacin or nitrofurantoin are safer choices." },
      ],
    },
    {
      id: "m4-l2",
      title: "Macrolides, Fluoroquinolones & Other Antibiotics",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "Beyond the Beta-Lactams" },
        { type: "text", body: "When beta-lactams are inappropriate (allergy, resistance, or specific pathogen requirements), other antibiotic classes step in. Macrolides (azithromycin, erythromycin), fluoroquinolones (ciprofloxacin, levofloxacin), and others play important roles in Caribbean antibiotic therapy." },
        { type: "key-term", term: "Macrolide", definition: "An antibiotic class that inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit. Examples: azithromycin (Z-pack), erythromycin, clarithromycin. Azithromycin's convenient 3-5 day course makes it popular in Caribbean practice." },
        {
          type: "table",
          caption: "Non-Beta-Lactam Antibiotics in Caribbean Practice",
          headers: ["Class", "Example", "Mechanism", "Key Caribbean Use"],
          rows: [
            ["Macrolide", "Azithromycin", "Protein synthesis inhibition (50S)", "RTIs in penicillin-allergic patients, chlamydia, H. pylori"],
            ["Fluoroquinolone", "Ciprofloxacin", "DNA gyrase/topoisomerase inhibition", "UTIs, gastroenteritis, bone infections"],
            ["Tetracycline", "Doxycycline", "Protein synthesis inhibition (30S)", "Acne, chlamydia, malaria prophylaxis, leptospirosis"],
            ["Aminoglycoside", "Gentamicin", "Protein synthesis inhibition (30S)", "Severe infections (IV/IM), usually hospital-based"],
            ["Nitroimidazole", "Metronidazole", "DNA disruption", "Anaerobic infections, amoebic dysentery, H. pylori"],
          ],
        },
        { type: "callout", variant: "warning", title: "Metronidazole and Alcohol: The Disulfiram Reaction", body: "Metronidazole causes a severe reaction with alcohol — nausea, vomiting, flushing, headache, and tachycardia. This 'disulfiram-like' reaction can occur up to 48 hours after the last dose. In the Caribbean social context where alcohol consumption is common, this counselling point is critical. Always warn patients explicitly." },
        { type: "knowledge-check", question: "A patient is prescribed metronidazole for a dental infection. What is the most important counselling point?", options: ["Take with food only", "Avoid sunlight exposure", "Avoid ALL alcohol during treatment and for 48 hours after completing the course", "Take at bedtime only"], correctIndex: 2, explanation: "Metronidazole causes a disulfiram-like reaction with alcohol: severe nausea, vomiting, flushing, and tachycardia. Patients must avoid alcohol completely during and for 48 hours after treatment." },
      ],
    },
    {
      id: "m4-l3",
      title: "Antivirals, ARVs for HIV & Antifungals",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "Fighting Viruses and Fungi in the Caribbean" },
        { type: "text", body: "The Caribbean has the second-highest HIV prevalence rate in the world outside sub-Saharan Africa. Antiretroviral (ARV) therapy has transformed HIV from a death sentence to a manageable chronic condition. Pharmacy technicians play a key role in dispensing ARVs and supporting adherence. Antifungals are also commonly dispensed for the dermatological fungal infections that thrive in the region's tropical climate." },
        { type: "key-term", term: "Antiretroviral therapy (ART)", definition: "Combination drug therapy for HIV, typically involving 2-3 drugs from different classes to suppress viral replication. Modern regimens use fixed-dose combinations (e.g., tenofovir/emtricitabine/efavirenz or dolutegravir-based regimens) taken as a single daily tablet." },
        {
          type: "table",
          caption: "Common Antifungal Agents in Caribbean Practice",
          headers: ["Drug", "Route", "Spectrum", "Common Caribbean Use"],
          rows: [
            ["Fluconazole", "Oral/IV", "Yeasts (Candida, Cryptococcus)", "Vaginal candidiasis, oral thrush, systemic fungal infections"],
            ["Clotrimazole", "Topical", "Dermatophytes and yeasts", "Athlete's foot, ringworm, vaginal thrush (pessaries)"],
            ["Terbinafine", "Oral/topical", "Dermatophytes", "Onychomycosis (nail fungus), tinea infections"],
            ["Nystatin", "Topical/oral suspension", "Candida species", "Oral thrush (common in immunocompromised patients)"],
          ],
        },
        { type: "callout", variant: "info", title: "ARV Adherence: Greater Than 95% Required", body: "For ARV therapy to effectively suppress HIV, adherence must exceed 95%. Missing even a few doses can allow the virus to develop resistance. Caribbean pharmacies should support adherence through pill reminders, clear counselling, and non-judgemental patient interactions. Confidentiality around HIV status is paramount." },
        { type: "knowledge-check", question: "Why is >95% adherence critical for antiretroviral therapy?", options: ["To prevent side effects", "To reduce cost", "Sub-optimal adherence allows HIV to develop drug resistance, leading to treatment failure", "To keep the medication at room temperature"], correctIndex: 2, explanation: "HIV replicates rapidly and has a high mutation rate. Sub-optimal drug levels (from missed doses) create selective pressure for resistant viral strains, which can lead to treatment failure and limit future drug options." },
      ],
    },
    {
      id: "m4-l4",
      title: "Antimicrobial Resistance: The Caribbean Crisis",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "When Antibiotics Stop Working" },
        { type: "text", body: "Antimicrobial resistance (AMR) is a growing crisis in the Caribbean. Factors driving resistance in the region include over-the-counter antibiotic sales (still permitted in some jurisdictions), incomplete courses of therapy, self-medication with leftover antibiotics, and agricultural antibiotic use. CARPHA (Caribbean Public Health Agency) has identified AMR as a regional health security threat." },
        { type: "key-term", term: "Antimicrobial Resistance (AMR)", definition: "The ability of microorganisms to survive exposure to antimicrobial drugs that would normally kill them or inhibit their growth. Resistant infections are harder and more expensive to treat, lead to longer hospital stays, and increase mortality." },
        {
          type: "list",
          ordered: false,
          items: [
            "Never dispense antibiotics without a valid prescription (even where OTC sales are legal, exercise professional judgement)",
            "Counsel patients to complete the FULL prescribed course, even if they feel better",
            "Advise against saving leftover antibiotics for future use or sharing them with others",
            "Educate patients that antibiotics do NOT treat viral infections (colds, flu, most sore throats)",
            "Support prescriber stewardship by flagging unusual antibiotic choices or durations to the pharmacist",
          ],
        },
        { type: "callout", variant: "danger", title: "The Antibiotic-for-Every-Cold Culture", body: "In many Caribbean communities, there is a deeply ingrained expectation that any illness requires an antibiotic. Patients may become upset when told their cold or flu does not need amoxicillin. Pharmacy technicians are on the front line of antimicrobial stewardship — gently educating patients that antibiotics are ineffective against viruses and can cause harm through resistance development." },
        { type: "knowledge-check", question: "A patient asks you for amoxicillin for their cold without a prescription. What is the most appropriate response?", options: ["Dispense it — a cold might become a bacterial infection", "Explain that antibiotics do not treat viral infections like colds and recommend rest, fluids, and paracetamol for symptoms", "Give a half-course to be safe", "Suggest they buy azithromycin instead"], correctIndex: 1, explanation: "Colds are caused by viruses. Antibiotics are ineffective against viruses and contribute to antimicrobial resistance when used inappropriately. Recommend symptomatic relief and advise the patient to see a doctor if symptoms worsen or persist beyond 10 days." },
      ],
    },
  ],
  quiz: [
    { id: "m4-q1", question: "Amoxicillin works by:", options: ["Inhibiting bacterial protein synthesis", "Inhibiting bacterial cell wall synthesis", "Disrupting bacterial DNA", "Blocking bacterial folic acid synthesis"], correctIndex: 1, explanation: "Amoxicillin is a beta-lactam antibiotic that inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins.", difficulty: "easy", bloomsLevel: "remember" },
    { id: "m4-q2", question: "Which drug causes a severe reaction with alcohol and requires specific counselling?", options: ["Amoxicillin", "Azithromycin", "Metronidazole", "Cephalexin"], correctIndex: 2, explanation: "Metronidazole causes a disulfiram-like reaction with alcohol: severe nausea, vomiting, flushing, and tachycardia.", difficulty: "easy", bloomsLevel: "remember" },
    { id: "m4-q3", question: "A patient with documented penicillin anaphylaxis requires an antibiotic. Which class should be avoided?", options: ["Macrolides", "Fluoroquinolones", "Cephalosporins (used with extreme caution only)", "Tetracyclines"], correctIndex: 2, explanation: "Cephalosporins share structural similarity with penicillins (the beta-lactam ring) and carry a 1-2% cross-reactivity risk. In patients with documented anaphylaxis, cephalosporins should be avoided or used only under medical supervision.", difficulty: "medium", bloomsLevel: "apply" },
    { id: "m4-q4", question: "The minimum adherence rate required for effective ARV therapy is:", options: ["50%", "75%", "95%", "100%"], correctIndex: 2, explanation: "ARV therapy requires >95% adherence to maintain viral suppression and prevent resistance development.", difficulty: "medium", bloomsLevel: "remember" },
    { id: "m4-q5", question: "Which factor is a major driver of antimicrobial resistance in the Caribbean?", options: ["Too many hospitals", "Over-the-counter antibiotic sales and incomplete courses", "Excessive hand washing", "Too few pharmacies"], correctIndex: 1, explanation: "OTC antibiotic availability, incomplete courses, self-medication with leftover antibiotics, and use for viral infections all drive AMR in the Caribbean.", difficulty: "medium", bloomsLevel: "understand" },
    { id: "m4-q6", question: "Fluconazole is most commonly used to treat:", options: ["Bacterial pneumonia", "Candidal (yeast) infections", "Malaria", "Tuberculosis"], correctIndex: 1, explanation: "Fluconazole is an azole antifungal primarily effective against Candida species. It is commonly used for vaginal candidiasis, oral thrush, and systemic fungal infections.", difficulty: "easy", bloomsLevel: "remember" },
    { id: "m4-q7", question: "Azithromycin belongs to which antibiotic class?", options: ["Penicillin", "Cephalosporin", "Macrolide", "Fluoroquinolone"], correctIndex: 2, explanation: "Azithromycin is a macrolide antibiotic that inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit.", difficulty: "easy", bloomsLevel: "remember" },
    { id: "m4-q8", question: "Antibiotics are ineffective against:", options: ["Bacterial pneumonia", "Urinary tract infections", "The common cold (viral)", "Strep throat"], correctIndex: 2, explanation: "The common cold is caused by viruses (rhinoviruses). Antibiotics only work against bacteria and should not be used for viral infections.", difficulty: "easy", bloomsLevel: "understand" },
    { id: "m4-q9", question: "Doxycycline is used for malaria prophylaxis in the Caribbean. It belongs to which class?", options: ["Macrolide", "Beta-lactam", "Tetracycline", "Aminoglycoside"], correctIndex: 2, explanation: "Doxycycline is a tetracycline antibiotic that also has antimalarial activity. It is used for malaria prophylaxis in travellers and for treating various bacterial infections.", difficulty: "easy", bloomsLevel: "remember" },
    { id: "m4-q10", question: "A pharmacy technician's most important role in antimicrobial stewardship is:", options: ["Prescribing antibiotics when needed", "Counselling patients on proper antibiotic use and completing full courses", "Selling antibiotics without prescriptions to increase revenue", "Recommending antibiotics for all sore throats"], correctIndex: 1, explanation: "Pharmacy technicians support stewardship by educating patients on appropriate use, emphasising course completion, and discouraging self-medication with antibiotics.", difficulty: "medium", bloomsLevel: "evaluate" },
  ],
};

// ============================================================================
// MODULE 5 — Tropical & Vector-Borne Diseases
// ============================================================================

const module5: Module = {
  id: "m5-tropical-diseases",
  number: 5,
  title: "Tropical & Vector-Borne Disease Treatments: Dengue, Chikungunya, Zika & Malaria",
  description:
    "The Caribbean is endemic for several vector-borne diseases transmitted by the Aedes aegypti mosquito. This module covers the pharmacological management of dengue, chikungunya, Zika, and malaria — including critical medication safety warnings unique to these conditions.",
  learningObjectives: [
    "Explain why NSAIDs and aspirin are contraindicated in suspected dengue fever",
    "Describe the symptomatic treatment approach for chikungunya and Zika",
    "Identify antimalarial drugs used for prophylaxis and treatment in the Caribbean",
    "Recognise warning signs that require immediate referral in vector-borne diseases",
    "Apply knowledge of tropical disease pharmacology to dispensing scenarios",
  ],
  lessons: [
    {
      id: "m5-l1",
      title: "Dengue Fever: What NOT to Dispense",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "Dengue: The Caribbean's Most Common Vector-Borne Disease" },
        { type: "text", body: "Dengue fever is endemic across the Caribbean, with periodic epidemics causing significant morbidity and mortality. The disease is caused by four serotypes of dengue virus transmitted by Aedes aegypti mosquitoes. Most cases are self-limiting, but severe dengue (dengue haemorrhagic fever) can be fatal. For pharmacy technicians, the critical pharmacological knowledge is what NOT to give." },
        { type: "key-term", term: "Dengue fever", definition: "An acute viral infection transmitted by Aedes aegypti mosquitoes, causing high fever, severe headache, retro-orbital pain, muscle/joint pain ('breakbone fever'), and rash. There is no specific antiviral treatment. Management is supportive: rest, fluids, and paracetamol for fever and pain." },
        { type: "callout", variant: "danger", title: "NEVER Dispense NSAIDs or Aspirin for Suspected Dengue", body: "Aspirin, ibuprofen, diclofenac, and all other NSAIDs are CONTRAINDICATED in dengue because they impair platelet function and increase bleeding risk. Dengue causes thrombocytopenia (low platelet count), and adding an antiplatelet/anti-inflammatory drug can trigger life-threatening haemorrhage. ONLY paracetamol should be used for fever and pain in suspected dengue." },
        {
          type: "table",
          caption: "Dengue Management: Do's and Don'ts",
          headers: ["DO", "DO NOT"],
          rows: [
            ["Give paracetamol for fever and pain", "Give aspirin, ibuprofen, or any NSAID"],
            ["Encourage oral rehydration fluids", "Give IV fluids without medical supervision"],
            ["Monitor for warning signs (abdominal pain, persistent vomiting, bleeding)", "Assume improvement after fever breaks — this is when severe dengue can develop"],
            ["Refer immediately if warning signs appear", "Dismiss a returning patient as 'just dengue'"],
          ],
        },
        { type: "knowledge-check", question: "A patient presents at your pharmacy in Port of Spain with fever, headache, and body aches during dengue season. They ask for ibuprofen. What should you do?", options: ["Dispense ibuprofen as requested", "Offer paracetamol instead and explain that ibuprofen is dangerous in suspected dengue due to bleeding risk", "Give aspirin as an alternative to ibuprofen", "Suggest they take both paracetamol and ibuprofen together"], correctIndex: 1, explanation: "During dengue season, any febrile patient should be assumed to potentially have dengue. NSAIDs (including ibuprofen) and aspirin are contraindicated due to increased bleeding risk. Paracetamol is the only safe analgesic/antipyretic." },
      ],
    },
    {
      id: "m5-l2",
      title: "Chikungunya & Zika: Symptomatic Management",
      duration: "6 min",
      content: [
        { type: "heading", level: 2, text: "Managing the Other Aedes-Borne Viruses" },
        { type: "text", body: "Chikungunya and Zika are also transmitted by Aedes aegypti mosquitoes and have caused major Caribbean epidemics. Like dengue, there are no specific antiviral treatments — management is supportive. Chikungunya is characterised by severe joint pain that can persist for months, while Zika's primary concern is its association with birth defects (microcephaly) in pregnant women." },
        { type: "key-term", term: "Chikungunya", definition: "A viral disease causing fever and severe joint pain (arthralgia) that can last weeks to months. The name means 'that which bends up' in Kimakonde, describing the stooped posture of affected patients. Treatment is symptomatic: paracetamol, NSAIDs (once dengue is excluded), and rest." },
        { type: "text", body: "An important clinical distinction: NSAIDs CAN be used for chikungunya joint pain ONLY if dengue has been ruled out. Since dengue and chikungunya have overlapping symptoms and are transmitted by the same mosquito in the same region, laboratory confirmation may be needed before NSAIDs are safe. In practice, paracetamol is the safest initial choice until dengue is excluded." },
        { type: "callout", variant: "warning", title: "Zika and Pregnancy", body: "Zika virus infection during pregnancy can cause microcephaly and other severe birth defects. There is no specific treatment or vaccine. Prevention through mosquito control is critical. Pregnant women in Caribbean endemic areas should use DEET-based insect repellent (safe in pregnancy), wear long sleeves, and sleep under bed nets." },
        { type: "knowledge-check", question: "When can NSAIDs be safely used for a patient with suspected chikungunya joint pain?", options: ["Immediately upon presentation", "Only after dengue has been ruled out, as NSAIDs are dangerous in dengue", "Never — NSAIDs are always contraindicated in vector-borne diseases", "Only if the patient is also taking paracetamol"], correctIndex: 1, explanation: "NSAIDs are effective for chikungunya arthralgia but contraindicated in dengue. Since the diseases overlap geographically and symptomatically, dengue must be excluded first. Paracetamol is the safe initial choice." },
      ],
    },
    {
      id: "m5-l3",
      title: "Malaria Prophylaxis & Treatment in the Caribbean",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "Malaria: Still a Caribbean Concern" },
        { type: "text", body: "While most Caribbean islands are malaria-free, cases still occur in Haiti, parts of the Dominican Republic, Guyana, and Suriname. Travellers from other Caribbean nations visiting these countries may need prophylaxis. Additionally, Caribbean pharmacists may encounter malaria in patients arriving from Africa or South Asia." },
        {
          type: "table",
          caption: "Antimalarial Drugs Used in Caribbean Practice",
          headers: ["Drug", "Use", "Key Considerations"],
          rows: [
            ["Chloroquine", "Prophylaxis and treatment (where sensitive)", "Still effective in Haiti/DR; resistance widespread in Africa/Asia"],
            ["Atovaquone/proguanil (Malarone)", "Prophylaxis and treatment", "Well tolerated; take with fatty food for absorption; expensive"],
            ["Doxycycline", "Prophylaxis", "Cheap alternative; causes photosensitivity — important in Caribbean sun"],
            ["Artemether/lumefantrine (Coartem)", "Treatment of P. falciparum", "First-line ACT for uncomplicated malaria; take with fatty food"],
          ],
        },
        { type: "callout", variant: "warning", title: "Doxycycline and Caribbean Sun", body: "Doxycycline causes significant photosensitivity. Travellers and workers in the Caribbean taking doxycycline for malaria prophylaxis must use high-SPF sunscreen and protective clothing. Severe sunburn is a common and preventable adverse effect." },
        { type: "knowledge-check", question: "A Trinidadian tourist travelling to Haiti asks about malaria prophylaxis. Which drug is appropriate for chloroquine-sensitive areas like Haiti?", options: ["No prophylaxis needed — the Caribbean is malaria-free", "Chloroquine, started 1-2 weeks before travel", "Artemether/lumefantrine (treatment, not prophylaxis)", "Fluconazole"], correctIndex: 1, explanation: "Haiti still has chloroquine-sensitive P. falciparum malaria. Chloroquine is appropriate for prophylaxis, started 1-2 weeks before travel, continued during the stay, and for 4 weeks after return." },
      ],
    },
    {
      id: "m5-l4",
      title: "Leptospirosis, Gastroenteritis & Other Regional Infections",
      duration: "6 min",
      content: [
        { type: "heading", level: 2, text: "Other Infections of Caribbean Significance" },
        { type: "text", body: "Beyond vector-borne diseases, the Caribbean faces unique infection challenges including leptospirosis (spread through water contaminated with animal urine, especially after flooding), gastroenteritis (common in areas with inconsistent water treatment), and parasitic infections. Understanding the pharmacological treatments helps pharmacy technicians provide better care." },
        { type: "key-term", term: "Leptospirosis", definition: "A bacterial infection (Leptospira species) transmitted through water or soil contaminated with infected animal urine. Common after Caribbean flooding events. Symptoms include high fever, headache, muscle pain, and jaundice. Treated with doxycycline or penicillin." },
        { type: "text", body: "Oral rehydration therapy (ORT) remains the most important pharmacological intervention for gastroenteritis in the Caribbean. ORS packets are among the most dispensed items in Caribbean pharmacies. For parasitic infections, albendazole and mebendazole (anti-helminthics) are used for roundworm, hookworm, and threadworm — infections that remain common in parts of the region." },
        { type: "callout", variant: "tip", title: "After the Floods: Pharmacy Preparedness", body: "Caribbean hurricanes and heavy rains cause flooding that increases leptospirosis risk. Pharmacies should stock doxycycline and ensure ORS availability during and after flood events. Prophylactic doxycycline 200 mg weekly may be recommended for high-risk exposed individuals." },
        { type: "knowledge-check", question: "After major flooding in Trinidad, a construction worker develops fever, muscle pain, and jaundice. Which antibiotic is first-line for suspected leptospirosis?", options: ["Azithromycin", "Ciprofloxacin", "Doxycycline or penicillin", "Fluconazole"], correctIndex: 2, explanation: "Leptospirosis is treated with doxycycline (mild cases) or IV penicillin (severe cases). Post-flood exposure is a classic risk scenario in the Caribbean." },
      ],
    },
  ],
  quiz: [
    { id: "m5-q1", question: "Which medication is the ONLY safe analgesic/antipyretic in suspected dengue fever?", options: ["Ibuprofen", "Aspirin", "Paracetamol", "Diclofenac"], correctIndex: 2, explanation: "Paracetamol is the only safe option. All NSAIDs and aspirin are contraindicated due to increased bleeding risk from dengue-induced thrombocytopenia.", difficulty: "easy", bloomsLevel: "remember" },
    { id: "m5-q2", question: "NSAIDs can be used for chikungunya joint pain ONLY after:", options: ["The patient requests them", "Dengue has been ruled out", "3 days of symptoms", "The fever has resolved"], correctIndex: 1, explanation: "NSAIDs are effective for chikungunya arthralgia but dangerous in dengue. Since both diseases overlap, dengue must be excluded before NSAIDs are used.", difficulty: "medium", bloomsLevel: "apply" },
    { id: "m5-q3", question: "The primary concern with Zika virus infection during pregnancy is:", options: ["Severe joint pain in the mother", "Risk of microcephaly and birth defects in the baby", "Haemorrhagic complications", "Chronic fatigue in the mother"], correctIndex: 1, explanation: "Zika virus infection during pregnancy can cause microcephaly and other severe congenital abnormalities. Prevention through mosquito avoidance is critical for pregnant women.", difficulty: "medium", bloomsLevel: "remember" },
    { id: "m5-q4", question: "Which antimalarial drug causes photosensitivity — a particular concern in the Caribbean?", options: ["Chloroquine", "Doxycycline", "Atovaquone/proguanil", "Mefloquine"], correctIndex: 1, explanation: "Doxycycline causes significant photosensitivity. Caribbean sun exposure makes this a clinically important counselling point for patients using doxycycline for malaria prophylaxis.", difficulty: "medium", bloomsLevel: "remember" },
    { id: "m5-q5", question: "Leptospirosis risk increases significantly in the Caribbean after:", options: ["Drought", "Flooding events", "Cold weather", "Tourism season"], correctIndex: 1, explanation: "Flooding spreads Leptospira-contaminated water from animal urine into populated areas. Post-hurricane and post-flood periods see spikes in leptospirosis cases across the Caribbean.", difficulty: "easy", bloomsLevel: "understand" },
    { id: "m5-q6", question: "Why is dengue fever sometimes called 'breakbone fever'?", options: ["It causes actual bone fractures", "The severe muscle and joint pain feels like bones are breaking", "It affects the skeletal system directly", "It was first described in a bone specialist's clinic"], correctIndex: 1, explanation: "The severe myalgia and arthralgia of dengue are so intense that patients historically described it as feeling like their bones were breaking. The name reflects symptom severity, not actual bone damage.", difficulty: "easy", bloomsLevel: "understand" },
    { id: "m5-q7", question: "Artemether/lumefantrine (Coartem) should be taken with:", options: ["Water only", "An empty stomach", "A fatty meal to improve absorption", "Alcohol to enhance effects"], correctIndex: 2, explanation: "Lumefantrine absorption increases 2-3 fold when taken with a fatty meal. Patients should be counselled to take Coartem with food containing fat.", difficulty: "medium", bloomsLevel: "apply" },
    { id: "m5-q8", question: "The most important pharmacological intervention for gastroenteritis in the Caribbean is:", options: ["Antibiotics for all cases", "Anti-diarrhoeal drugs like loperamide", "Oral rehydration salts (ORS)", "IV fluids at home"], correctIndex: 2, explanation: "Oral rehydration therapy (ORS) is the cornerstone of gastroenteritis management, preventing dehydration which is the primary cause of morbidity and mortality.", difficulty: "easy", bloomsLevel: "remember" },
  ],
};

// ============================================================================
// MODULE 6 — CNS Medications
// ============================================================================

const module6: Module = {
  id: "m6-cns-medications",
  number: 6,
  title: "CNS Medications: Pain Management, Mental Health & Neurological Conditions",
  description:
    "Central nervous system medications encompass analgesics, antidepressants, antipsychotics, and antiepileptics. This module covers their pharmacology with sensitivity to the Caribbean context, where mental health stigma remains a significant barrier to treatment and opioid prescribing patterns differ from North American norms.",
  learningObjectives: [
    "Compare the mechanisms and risks of paracetamol, NSAIDs, and opioid analgesics",
    "Describe the pharmacology of SSRI and SNRI antidepressants",
    "Differentiate between typical and atypical antipsychotics",
    "Identify the major antiepileptic drugs and their monitoring requirements",
    "Address the role of mental health stigma in medication adherence in the Caribbean",
  ],
  lessons: [
    {
      id: "m6-l1",
      title: "Pain Management: Paracetamol, NSAIDs & the WHO Ladder",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "The Analgesic Toolkit" },
        { type: "text", body: "Pain management is one of the most common reasons patients visit a Caribbean pharmacy. The WHO analgesic ladder provides a stepwise approach: Step 1 (mild pain) uses non-opioid analgesics (paracetamol, NSAIDs); Step 2 (moderate pain) adds weak opioids (codeine, tramadol); Step 3 (severe pain) uses strong opioids (morphine, oxycodone)." },
        { type: "key-term", term: "Paracetamol (Acetaminophen)", definition: "The most commonly used analgesic and antipyretic worldwide. Works centrally to reduce pain and fever. Safe at therapeutic doses (max 4g/day in adults) but causes fatal hepatotoxicity in overdose. Has NO anti-inflammatory effect." },
        { type: "callout", variant: "danger", title: "Paracetamol Overdose: A Caribbean Emergency", body: "Paracetamol is available OTC and in dozens of combination products (cold remedies, pain formulas). Accidental overdose occurs when patients take multiple products containing paracetamol without realising it. Hepatotoxicity can be fatal. ALWAYS counsel patients to check ALL their medications for paracetamol content and not exceed 4g daily." },
        {
          type: "table",
          caption: "Common Analgesics in Caribbean Practice",
          headers: ["Drug", "Type", "Max Daily Dose", "Key Risk"],
          rows: [
            ["Paracetamol", "Non-opioid", "4g (adults)", "Hepatotoxicity in overdose"],
            ["Ibuprofen", "NSAID", "1.2g (OTC), 2.4g (Rx)", "GI bleeding, renal impairment"],
            ["Diclofenac", "NSAID", "150 mg", "GI bleeding, cardiovascular risk"],
            ["Codeine", "Weak opioid", "240 mg", "Constipation, dependence, respiratory depression"],
            ["Tramadol", "Weak opioid", "400 mg", "Seizure risk, serotonin syndrome risk"],
          ],
        },
        { type: "knowledge-check", question: "A patient buys paracetamol tablets AND a cold remedy containing paracetamol. What should you flag?", options: ["No concern — different products cannot interact", "Risk of accidental paracetamol overdose from taking both products simultaneously", "The cold remedy will reduce paracetamol effectiveness", "Only a concern if the patient is elderly"], correctIndex: 1, explanation: "Many cold remedies contain paracetamol. Taking additional paracetamol tablets on top can easily exceed the 4g/day maximum, risking fatal liver damage. Always check all products for paracetamol content." },
      ],
    },
    {
      id: "m6-l2",
      title: "Antidepressants: SSRIs, SNRIs & Mental Health in the Caribbean",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "Treating Depression in a Stigmatised Environment" },
        { type: "text", body: "Mental health conditions affect an estimated 1 in 4 Caribbean adults, yet treatment rates remain low due to stigma, limited access to psychiatrists, and cultural attitudes that view depression as a spiritual or personal weakness rather than a medical condition. When patients do receive antidepressants, pharmacy technicians play a crucial role in supporting adherence and providing judgement-free counselling." },
        { type: "key-term", term: "SSRI (Selective Serotonin Reuptake Inhibitor)", definition: "A class of antidepressant that selectively blocks serotonin reuptake in the brain, increasing serotonin availability in the synaptic cleft. Examples: fluoxetine, sertraline, escitalopram. First-line treatment for depression and anxiety disorders." },
        { type: "text", body: "SSRIs take 2-4 weeks to reach full therapeutic effect. This delayed onset is a major reason for non-adherence — patients expect immediate relief and stop taking the medication when they do not feel better in the first few days. Clear counselling at the point of dispensing is essential: 'This medication takes 2-4 weeks to work fully. Do not stop taking it without speaking to your doctor, even if you feel better.'" },
        { type: "callout", variant: "warning", title: "SSRI Discontinuation Syndrome", body: "Abruptly stopping an SSRI can cause discontinuation symptoms: dizziness, nausea, anxiety, 'brain zaps' (electric shock sensations), and irritability. These symptoms are NOT a sign of addiction — they reflect the brain readjusting to the absence of the drug. SSRIs should always be tapered gradually under medical supervision." },
        {
          type: "table",
          caption: "Common Antidepressants in Caribbean Practice",
          headers: ["Drug", "Class", "Key Side Effects", "Notes"],
          rows: [
            ["Fluoxetine (Prozac)", "SSRI", "Nausea, insomnia, sexual dysfunction", "Long half-life; least likely to cause discontinuation syndrome"],
            ["Sertraline (Zoloft)", "SSRI", "GI upset, diarrhoea", "Widely used; generally well tolerated"],
            ["Amitriptyline", "TCA", "Drowsiness, dry mouth, weight gain, cardiac effects", "Used for depression, neuropathic pain, migraine prophylaxis"],
            ["Venlafaxine", "SNRI", "Nausea, hypertension at high doses", "Effective for depression and anxiety; must taper slowly"],
          ],
        },
        { type: "knowledge-check", question: "A patient wants to stop their fluoxetine because 'it is not working' after 5 days. What should you advise?", options: ["Agree — if it has not worked in 5 days, it will not work", "Explain that SSRIs take 2-4 weeks to reach full effect and encourage them to continue as prescribed", "Suggest doubling the dose for faster effect", "Recommend switching to a herbal alternative"], correctIndex: 1, explanation: "SSRIs have a delayed onset of action (2-4 weeks). Patients often need reassurance during this initial period. Stopping prematurely is a common cause of treatment failure." },
      ],
    },
    {
      id: "m6-l3",
      title: "Antipsychotics & Antiepileptics",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "Managing Psychosis and Seizures" },
        { type: "text", body: "Antipsychotics are used to treat schizophrenia, bipolar disorder, and acute psychosis. They are divided into typical (first-generation: haloperidol, chlorpromazine) and atypical (second-generation: risperidone, olanzapine, quetiapine). Atypical antipsychotics generally have fewer movement-related side effects but carry metabolic risks (weight gain, diabetes)." },
        { type: "key-term", term: "Extrapyramidal Symptoms (EPS)", definition: "Movement disorders caused by dopamine receptor blockade in the basal ganglia. Include acute dystonia (sustained muscle contractions), akathisia (restlessness), parkinsonism (tremor, rigidity), and tardive dyskinesia (involuntary facial movements). More common with typical antipsychotics." },
        { type: "text", body: "Antiepileptic drugs (AEDs) include valproate, carbamazepine, phenytoin, and newer agents like levetiracetam and lamotrigine. Many AEDs have narrow therapeutic indices and require blood level monitoring. Phenytoin is particularly challenging due to non-linear pharmacokinetics — small dose increases can cause disproportionate rises in blood levels." },
        { type: "callout", variant: "danger", title: "Valproate and Pregnancy", body: "Sodium valproate is TERATOGENIC — it causes neural tube defects and developmental problems in the foetus. It should NOT be prescribed to women of childbearing potential unless no alternative exists and the patient is on effective contraception. This is a critical dispensing alert in Caribbean practice." },
        {
          type: "table",
          caption: "Key Antiepileptic Drugs",
          headers: ["Drug", "Used For", "Key Monitoring", "Important Warning"],
          rows: [
            ["Valproate", "Epilepsy, bipolar disorder, migraine", "Liver function, blood levels", "Teratogenic — avoid in pregnancy"],
            ["Carbamazepine", "Epilepsy, trigeminal neuralgia", "Blood levels, CBC, liver function", "Enzyme inducer — many drug interactions"],
            ["Phenytoin", "Epilepsy", "Blood levels (narrow TI)", "Non-linear kinetics; small dose changes cause large level changes"],
            ["Levetiracetam", "Epilepsy", "Minimal monitoring", "Fewer interactions; behavioural side effects possible"],
          ],
        },
        { type: "knowledge-check", question: "A young woman with epilepsy controlled on sodium valproate is planning pregnancy. What is the critical concern?", options: ["Valproate causes infertility", "Valproate is teratogenic and can cause neural tube defects in the foetus", "Valproate becomes less effective during pregnancy", "There is no concern"], correctIndex: 1, explanation: "Valproate is one of the most teratogenic commonly prescribed drugs. Women planning pregnancy should be switched to a safer alternative (e.g., lamotrigine or levetiracetam) well before conception, under specialist supervision." },
      ],
    },
    {
      id: "m6-l4",
      title: "Controlled Substances: Opioids & Dispensing Responsibilities",
      duration: "6 min",
      content: [
        { type: "heading", level: 2, text: "Opioids in Caribbean Practice" },
        { type: "text", body: "Unlike North America, the Caribbean has not experienced an opioid epidemic on the same scale. Opioid prescribing is generally more conservative, and strong opioids are typically restricted to hospital settings. However, codeine-containing products are widely available (sometimes OTC) and tramadol prescribing has increased. Understanding controlled substance regulations and appropriate opioid dispensing is essential." },
        { type: "key-term", term: "Opioid", definition: "A class of drugs that bind to opioid receptors (mu, kappa, delta) in the CNS and GI tract to produce analgesia, euphoria, respiratory depression, and constipation. Includes natural opiates (morphine, codeine), semi-synthetic (oxycodone, hydromorphone), and synthetic (tramadol, fentanyl) agents." },
        { type: "text", body: "Key counselling points for opioid dispensing: warn about drowsiness (no driving), constipation (recommend a laxative for regular use), risk of dependence with prolonged use, and the danger of combining opioids with alcohol or benzodiazepines. For codeine products, counsel that codeine is converted to morphine in the body — some patients are 'ultra-rapid metabolisers' who convert more codeine to morphine, increasing the risk of toxicity." },
        { type: "callout", variant: "info", title: "Controlled Substance Record-Keeping", body: "Caribbean pharmacy laws require strict documentation for controlled substances. Every dispensing must be recorded in the controlled drugs register: patient name, prescriber details, drug name, strength, quantity, and date. The pharmacy technician is often responsible for maintaining these records accurately." },
        { type: "knowledge-check", question: "When dispensing tramadol, which drug interaction should be flagged to the pharmacist?", options: ["Tramadol with paracetamol", "Tramadol with an SSRI (risk of serotonin syndrome)", "Tramadol with amlodipine", "Tramadol with metformin"], correctIndex: 1, explanation: "Tramadol has serotonergic activity and combining it with SSRIs or SNRIs increases the risk of serotonin syndrome — a potentially fatal condition characterised by agitation, tremor, hyperthermia, and hyperreflexia." },
      ],
    },
  ],
  quiz: [
    { id: "m6-q1", question: "The maximum daily dose of paracetamol in adults is:", options: ["2g", "3g", "4g", "6g"], correctIndex: 2, explanation: "The maximum is 4g (4,000mg) daily for adults. Exceeding this causes hepatotoxicity.", difficulty: "easy", bloomsLevel: "remember" },
    { id: "m6-q2", question: "SSRIs typically take how long to reach full therapeutic effect?", options: ["24 hours", "3-5 days", "2-4 weeks", "3 months"], correctIndex: 2, explanation: "SSRIs require 2-4 weeks to produce full antidepressant effects. Patients need counselling about this delay to prevent premature discontinuation.", difficulty: "easy", bloomsLevel: "remember" },
    { id: "m6-q3", question: "Which antiepileptic drug is teratogenic and requires careful consideration in women of childbearing age?", options: ["Levetiracetam", "Lamotrigine", "Sodium valproate", "Gabapentin"], correctIndex: 2, explanation: "Valproate is highly teratogenic, causing neural tube defects and developmental problems. Women planning pregnancy should use alternative AEDs.", difficulty: "medium", bloomsLevel: "remember" },
    { id: "m6-q4", question: "Extrapyramidal symptoms are most associated with which type of antipsychotic?", options: ["Atypical (second-generation)", "Typical (first-generation)", "Both equally", "Neither — EPS are caused by SSRIs"], correctIndex: 1, explanation: "Typical antipsychotics like haloperidol block dopamine D2 receptors more potently, causing higher rates of EPS including dystonia, akathisia, and tardive dyskinesia.", difficulty: "medium", bloomsLevel: "understand" },
    { id: "m6-q5", question: "Combining tramadol with an SSRI increases the risk of:", options: ["Liver failure", "Serotonin syndrome", "Kidney damage", "Hypoglycaemia"], correctIndex: 1, explanation: "Tramadol has serotonergic activity. Combining it with SSRIs can precipitate serotonin syndrome (agitation, tremor, hyperthermia).", difficulty: "medium", bloomsLevel: "apply" },
    { id: "m6-q6", question: "A patient buying a cold remedy and separate paracetamol tablets should be warned about:", options: ["Allergic cross-reactivity", "Potential paracetamol overdose from duplicate dosing", "Reduced cold remedy efficacy", "Caffeine interaction"], correctIndex: 1, explanation: "Many cold remedies contain paracetamol. Taking additional paracetamol on top risks exceeding the 4g daily limit and causing hepatotoxicity.", difficulty: "easy", bloomsLevel: "apply" },
    { id: "m6-q7", question: "Phenytoin requires careful dose adjustment because it has:", options: ["Linear pharmacokinetics", "Non-linear (saturation) pharmacokinetics — small dose changes cause large blood level changes", "No side effects", "A very wide therapeutic index"], correctIndex: 1, explanation: "Phenytoin follows zero-order kinetics at therapeutic doses. Once metabolic enzymes are saturated, small dose increases cause disproportionately large rises in blood levels.", difficulty: "hard", bloomsLevel: "analyze" },
    { id: "m6-q8", question: "SSRI discontinuation syndrome includes all of the following EXCEPT:", options: ["Dizziness", "Brain zaps (electric shock sensations)", "Hepatotoxicity", "Anxiety and irritability"], correctIndex: 2, explanation: "SSRI discontinuation causes dizziness, brain zaps, anxiety, nausea, and irritability. It does not cause hepatotoxicity. These symptoms reflect neurochemical readjustment, not organ damage.", difficulty: "medium", bloomsLevel: "understand" },
  ],
};

// ============================================================================
// MODULE 7 — Drug Interactions, Contraindications & Adverse Effects
// ============================================================================

const module7: Module = {
  id: "m7-drug-interactions",
  number: 7,
  title: "Drug Interactions, Contraindications & Adverse Effects",
  description:
    "Drug interactions and adverse effects are a daily concern at the Caribbean dispensing counter. This module covers the most clinically significant drug-drug and drug-food interactions encountered in Caribbean practice, black box warnings, and the pharmacy technician's role in identifying and reporting adverse drug reactions.",
  learningObjectives: [
    "Classify drug interactions as pharmacokinetic or pharmacodynamic",
    "Identify the most common clinically significant drug interactions in Caribbean practice",
    "Describe important drug-food interactions including grapefruit, dairy, and alcohol",
    "Explain the Caribbean adverse drug reaction reporting process",
    "Apply interaction-checking principles to dispensing scenarios",
  ],
  lessons: [
    {
      id: "m7-l1",
      title: "Drug-Drug Interactions: Mechanisms & Clinical Significance",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "When Drugs Affect Each Other" },
        { type: "text", body: "Drug interactions occur when one drug alters the effect of another. In the Caribbean, where many patients take multiple medications for hypertension, diabetes, and high cholesterol simultaneously, interactions are an everyday concern. Interactions can be pharmacokinetic (one drug affects the ADME of another) or pharmacodynamic (drugs have additive, synergistic, or antagonistic effects at the receptor level)." },
        {
          type: "table",
          caption: "High-Risk Drug Interactions Common in Caribbean Pharmacies",
          headers: ["Drug A", "Drug B", "Interaction", "Clinical Consequence"],
          rows: [
            ["Warfarin", "NSAIDs (ibuprofen, diclofenac)", "NSAIDs inhibit platelet function and increase GI bleeding risk", "Life-threatening haemorrhage"],
            ["ACE inhibitor", "Potassium-sparing diuretic (spironolactone)", "Both increase potassium levels", "Dangerous hyperkalaemia"],
            ["Metformin", "Alcohol (excessive)", "Both increase lactate production", "Increased lactic acidosis risk"],
            ["Simvastatin", "Grapefruit juice", "CYP3A4 inhibition increases statin levels", "Increased myopathy/rhabdomyolysis risk"],
            ["SSRI (fluoxetine)", "Tramadol", "Both increase serotonin levels", "Serotonin syndrome risk"],
          ],
        },
        { type: "key-term", term: "Enzyme Induction", definition: "When a drug increases the activity of metabolic enzymes (especially CYP450), causing other drugs to be metabolised faster and reducing their effectiveness. Example: carbamazepine induces CYP3A4, reducing oral contraceptive effectiveness." },
        { type: "key-term", term: "Enzyme Inhibition", definition: "When a drug decreases the activity of metabolic enzymes, causing other drugs to be metabolised slower and increasing their blood levels (potentially to toxic levels). Example: grapefruit juice inhibits CYP3A4." },
        { type: "callout", variant: "warning", title: "Carbamazepine and Oral Contraceptives", body: "Carbamazepine is a potent CYP450 inducer that reduces the effectiveness of oral contraceptives. Women taking carbamazepine need alternative or additional contraception. This interaction is critically important in Caribbean practice, where both drugs are commonly prescribed." },
        { type: "knowledge-check", question: "A patient takes warfarin for atrial fibrillation and asks for ibuprofen for knee pain. What should you do?", options: ["Dispense ibuprofen — there is no interaction", "Flag the interaction to the pharmacist — NSAIDs significantly increase bleeding risk with warfarin", "Give a lower dose of ibuprofen", "Suggest the patient stop warfarin temporarily"], correctIndex: 1, explanation: "NSAIDs inhibit platelet function and can cause GI bleeding. Combined with warfarin's anticoagulant effect, the bleeding risk is dramatically increased. Paracetamol is the safer analgesic for warfarin patients." },
      ],
    },
    {
      id: "m7-l2",
      title: "Drug-Food Interactions & Lifestyle Factors",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "Food, Drink & Drug Safety" },
        { type: "text", body: "Drug-food interactions are particularly relevant in the Caribbean, where tropical fruits (grapefruit, soursop), herbal teas (bush teas), and social alcohol consumption can significantly affect medication safety and efficacy. Pharmacy technicians who understand these interactions provide vital patient counselling at the dispensing counter." },
        {
          type: "table",
          caption: "Important Drug-Food Interactions in Caribbean Context",
          headers: ["Food/Drink", "Drugs Affected", "Effect", "Counselling Point"],
          rows: [
            ["Grapefruit juice", "Simvastatin, amlodipine, cyclosporine", "CYP3A4 inhibition → increased drug levels", "Avoid grapefruit or switch to unaffected drug"],
            ["Dairy products (milk, cheese)", "Tetracyclines, fluoroquinolones", "Calcium chelation → reduced absorption", "Separate by 2-4 hours"],
            ["Alcohol", "Metronidazole, metformin, CNS depressants", "Disulfiram reaction; additive CNS depression", "Avoid alcohol during and after treatment"],
            ["Green leafy vegetables (vitamin K)", "Warfarin", "Vitamin K antagonises warfarin effect", "Maintain consistent intake, not eliminate"],
            ["High-tyramine foods", "MAOIs (phenelzine)", "Hypertensive crisis", "Avoid aged cheese, cured meats, fermented foods"],
          ],
        },
        { type: "text", body: "A unique Caribbean consideration is the widespread use of herbal and traditional remedies alongside prescribed medications. St. John's Wort (used for mild depression) is a potent CYP450 inducer that reduces the effectiveness of oral contraceptives, warfarin, and many other drugs. Patients often do not disclose herbal use unless specifically asked." },
        { type: "callout", variant: "tip", title: "Always Ask About Bush Tea", body: "In Caribbean culture, 'bush tea' (herbal teas made from local plants) is deeply embedded in health practices. Many patients take bush teas alongside their prescription medications without informing their healthcare providers. Always ask: 'Are you taking any herbal remedies, bush teas, or supplements?' This simple question can uncover potentially dangerous interactions." },
        { type: "knowledge-check", question: "A patient on warfarin asks about eating more salads with spinach and kale. What is the correct advice?", options: ["Stop eating all green vegetables immediately", "Eat as much as you want — there is no interaction", "Maintain a consistent weekly intake of vitamin K-rich foods rather than making sudden changes", "Only eat green vegetables on days you skip warfarin"], correctIndex: 2, explanation: "Vitamin K counteracts warfarin. The goal is not to eliminate vitamin K but to maintain consistent intake so warfarin dosing remains stable. Sudden increases or decreases in vitamin K consumption can cause dangerous fluctuations in INR." },
      ],
    },
    {
      id: "m7-l3",
      title: "Adverse Drug Reactions & Pharmacovigilance",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "When Drugs Cause Harm" },
        { type: "text", body: "Adverse drug reactions (ADRs) are unwanted, harmful effects of medications occurring at normal therapeutic doses. ADRs range from mild (nausea, headache) to severe (anaphylaxis, organ damage, death). In the Caribbean, ADR reporting is coordinated through national pharmacovigilance centres and CARPHA at the regional level." },
        { type: "key-term", term: "Type A ADR (Augmented)", definition: "Dose-dependent, predictable reactions related to the drug's known pharmacology. Examples: hypotension from antihypertensives, hypoglycaemia from insulin. These are the most common ADRs and are usually manageable with dose adjustment." },
        { type: "key-term", term: "Type B ADR (Bizarre)", definition: "Dose-independent, unpredictable reactions unrelated to the drug's normal pharmacology. Examples: penicillin anaphylaxis, Stevens-Johnson syndrome. These are rare but potentially fatal and usually require drug discontinuation." },
        { type: "text", body: "Pharmacy technicians should be alert to patients reporting new symptoms after starting a medication. Common signs of ADRs include rash, unexplained bleeding, severe GI symptoms, breathing difficulty, or significant changes in mood or behaviour. All suspected ADRs should be reported to the pharmacist and documented." },
        {
          type: "list",
          ordered: true,
          items: [
            "Listen to the patient's description of the adverse event",
            "Document the suspected drug, dose, timing, and symptoms",
            "Report to the pharmacist for clinical assessment",
            "The pharmacist may submit a report to the national pharmacovigilance centre",
            "In the Caribbean, CARPHA coordinates regional ADR surveillance",
          ],
        },
        { type: "knowledge-check", question: "A patient develops a severe rash 3 days after starting allopurinol. This is most likely which type of ADR?", options: ["Type A (augmented) — related to the drug's normal pharmacology", "Type B (bizarre) — an unpredictable immune-mediated reaction", "Not an ADR — rashes are normal", "A drug-food interaction"], correctIndex: 1, explanation: "Allopurinol-induced severe rash (potentially Stevens-Johnson syndrome) is a Type B ADR — unpredictable, immune-mediated, and unrelated to the drug's urate-lowering mechanism. It requires immediate drug discontinuation and medical attention." },
      ],
    },
    {
      id: "m7-l4",
      title: "Black Box Warnings & High-Alert Medications",
      duration: "6 min",
      content: [
        { type: "heading", level: 2, text: "The Most Dangerous Drug Warnings" },
        { type: "text", body: "Black box warnings (or boxed warnings) are the most serious drug safety warnings issued by regulatory authorities. They highlight risks of death, serious organ damage, or severe adverse effects. While the term 'black box' originates from the US FDA, the warnings apply globally and are relevant to Caribbean prescribing and dispensing practice." },
        {
          type: "table",
          caption: "Key Black Box Warnings Relevant to Caribbean Practice",
          headers: ["Drug/Class", "Warning", "Caribbean Relevance"],
          rows: [
            ["Fluoroquinolones (ciprofloxacin)", "Tendon rupture, peripheral neuropathy, CNS effects", "Widely prescribed in Caribbean; elderly and steroid users at highest risk"],
            ["NSAIDs (all)", "Increased cardiovascular and GI bleeding risk", "Extremely common OTC and Rx use across Caribbean islands"],
            ["Metformin", "Lactic acidosis in renal impairment", "High diabetes prevalence; CKD common in Caribbean diabetics"],
            ["Warfarin", "Major bleeding risk", "Requires INR monitoring; many drug and food interactions"],
            ["Antidepressants (SSRIs)", "Increased suicidality risk in young adults (<25)", "Mental health stigma may delay recognition of warning signs"],
          ],
        },
        { type: "callout", variant: "info", title: "High-Alert Medications (ISMP List)", body: "The Institute for Safe Medication Practices (ISMP) identifies high-alert medications that carry heightened risk of harm when used in error. These include insulin, anticoagulants (warfarin, heparin), opioids, and chemotherapy agents. Extra verification steps should be applied when dispensing these drugs." },
        { type: "knowledge-check", question: "Fluoroquinolone antibiotics carry a black box warning for:", options: ["Liver failure", "Tendon rupture, peripheral neuropathy, and CNS effects", "Renal toxicity", "Bone marrow suppression"], correctIndex: 1, explanation: "Fluoroquinolones can cause tendon rupture (especially Achilles tendon), peripheral neuropathy, and CNS effects. Risk is highest in elderly patients and those taking corticosteroids." },
      ],
    },
  ],
  quiz: [
    { id: "m7-q1", question: "Which interaction is most dangerous when a patient takes warfarin?", options: ["Warfarin + paracetamol", "Warfarin + NSAIDs", "Warfarin + amlodipine", "Warfarin + metformin"], correctIndex: 1, explanation: "NSAIDs inhibit platelet function and can cause GI bleeding, dramatically increasing haemorrhage risk in warfarin patients.", difficulty: "medium", bloomsLevel: "apply" },
    { id: "m7-q2", question: "Grapefruit juice interacts with drugs by:", options: ["Increasing gastric acid production", "Inhibiting CYP3A4 enzymes in the gut and liver", "Increasing renal excretion", "Blocking drug absorption in the stomach"], correctIndex: 1, explanation: "Grapefruit inhibits CYP3A4, slowing the metabolism of drugs like simvastatin and amlodipine, increasing their blood levels potentially to toxic ranges.", difficulty: "medium", bloomsLevel: "understand" },
    { id: "m7-q3", question: "Dairy products reduce the absorption of tetracyclines and fluoroquinolones because:", options: ["They increase gastric pH", "Calcium ions form insoluble chelates with the antibiotics", "They speed up gastric emptying", "They dilute the drug concentration"], correctIndex: 1, explanation: "Calcium (and other divalent cations in dairy) chelates with tetracyclines and fluoroquinolones, forming insoluble complexes that cannot be absorbed.", difficulty: "medium", bloomsLevel: "understand" },
    { id: "m7-q4", question: "St. John's Wort is a potent CYP450 inducer. This means it:", options: ["Increases the blood levels of other drugs", "Decreases the effectiveness of drugs metabolised by CYP450 enzymes", "Has no effect on other medications", "Only affects herbal remedies"], correctIndex: 1, explanation: "Enzyme induction speeds up metabolism of other drugs, reducing their blood levels and effectiveness. St. John's Wort can reduce the effectiveness of oral contraceptives, warfarin, and many other drugs.", difficulty: "medium", bloomsLevel: "analyze" },
    { id: "m7-q5", question: "A Type B adverse drug reaction is:", options: ["Dose-dependent and predictable", "Dose-independent, unpredictable, and often immune-mediated", "Always mild and self-limiting", "Related to the drug's therapeutic effect"], correctIndex: 1, explanation: "Type B (bizarre) ADRs are unpredictable, often immune-mediated, and unrelated to the drug's pharmacological action. Examples include anaphylaxis and Stevens-Johnson syndrome.", difficulty: "medium", bloomsLevel: "understand" },
    { id: "m7-q6", question: "Carbamazepine reduces oral contraceptive effectiveness because it:", options: ["Blocks oestrogen receptors", "Induces CYP450 enzymes that metabolise contraceptive hormones faster", "Causes nausea that reduces absorption", "Increases renal excretion of hormones"], correctIndex: 1, explanation: "Carbamazepine induces CYP3A4 and other enzymes, accelerating the metabolism of ethinylestradiol and progestogens, reducing contraceptive efficacy.", difficulty: "hard", bloomsLevel: "analyze" },
    { id: "m7-q7", question: "The correct advice for warfarin patients regarding vitamin K-rich vegetables is:", options: ["Eliminate all vitamin K foods", "Maintain consistent weekly intake — sudden changes affect INR stability", "Only eat vegetables on warfarin-free days", "Double warfarin dose when eating vegetables"], correctIndex: 1, explanation: "Consistency is key. Patients should maintain a stable intake of vitamin K rather than eliminating it, as warfarin dosing is calibrated to their usual vitamin K consumption.", difficulty: "medium", bloomsLevel: "apply" },
    { id: "m7-q8", question: "ACE inhibitors combined with potassium-sparing diuretics increase the risk of:", options: ["Hypokalaemia", "Hyperkalaemia", "Hypernatraemia", "Hypoglycaemia"], correctIndex: 1, explanation: "Both ACE inhibitors and potassium-sparing diuretics increase potassium retention. Together they can cause dangerous hyperkalaemia.", difficulty: "medium", bloomsLevel: "apply" },
    { id: "m7-q9", question: "In the Caribbean, which organisation coordinates regional ADR surveillance?", options: ["WHO only", "CARPHA (Caribbean Public Health Agency)", "The local police", "Individual hospital pharmacies only"], correctIndex: 1, explanation: "CARPHA coordinates Caribbean regional pharmacovigilance, collecting ADR reports from member states and identifying safety signals across the region.", difficulty: "easy", bloomsLevel: "remember" },
    { id: "m7-q10", question: "A pharmacy technician's role when a patient reports a suspected ADR is to:", options: ["Diagnose the ADR and change the medication", "Document the event and report it to the pharmacist for assessment", "Tell the patient to stop all medications", "Ignore it unless it is life-threatening"], correctIndex: 1, explanation: "Pharmacy technicians should document suspected ADRs and report to the pharmacist. They should not diagnose or change medications independently.", difficulty: "easy", bloomsLevel: "apply" },
  ],
};

// ============================================================================
// MODULE 8 — OTC Medications & Herbal Remedies
// ============================================================================

const module8: Module = {
  id: "m8-otc-herbal",
  number: 8,
  title: "Over-the-Counter Medications & Herbal Remedies Common in the Caribbean",
  description:
    "Caribbean pharmacies dispense a high volume of OTC medications and patients frequently self-medicate with traditional herbal remedies. This module covers common OTC drug classes, the most popular Caribbean herbal remedies, drug-herb interactions, and the pharmacy technician's role in safe self-medication counselling.",
  learningObjectives: [
    "Identify the most commonly purchased OTC medications in Caribbean pharmacies",
    "Describe the traditional herbal remedies most used in the Caribbean and their evidence base",
    "Recognise clinically significant drug-herb interactions",
    "Apply appropriate counselling for patients who use traditional remedies alongside prescriptions",
    "Determine when OTC self-medication is appropriate and when referral is necessary",
  ],
  lessons: [
    {
      id: "m8-l1",
      title: "Common OTC Medications: Analgesics, Antacids & Antihistamines",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "The OTC Counter: Where Most Pharmacy Interactions Begin" },
        { type: "text", body: "In Caribbean pharmacies, OTC sales often exceed prescription volume. Patients self-treat headaches, heartburn, allergies, colds, and minor infections. While many OTC medications are safe when used correctly, the pharmacy technician must identify situations where referral to the pharmacist or a doctor is needed — particularly when OTC medications may interact with existing prescriptions." },
        {
          type: "table",
          caption: "Common OTC Categories in Caribbean Pharmacies",
          headers: ["Category", "Examples", "Key Safety Concern"],
          rows: [
            ["Analgesics", "Paracetamol, ibuprofen, aspirin", "Overdose risk (paracetamol), GI bleeding (NSAIDs), Reye's syndrome (aspirin in children)"],
            ["Antacids/PPIs", "Aluminium hydroxide, omeprazole (now OTC in some markets)", "Calcium absorption interference; long-term PPI risks"],
            ["Antihistamines", "Cetirizine, loratadine (non-sedating), diphenhydramine (sedating)", "Drowsiness (first-gen), anticholinergic effects in elderly"],
            ["Cough/cold", "Dextromethorphan, pseudoephedrine, guaifenesin", "Hypertension risk (pseudoephedrine), abuse potential (DXM)"],
            ["Antidiarrhoeals", "Loperamide, ORS", "Loperamide should NOT be used in bloody diarrhoea or suspected infection"],
          ],
        },
        { type: "callout", variant: "warning", title: "Pseudoephedrine and Hypertension", body: "Pseudoephedrine (found in many cold/sinus products) raises blood pressure. In the Caribbean, where hypertension prevalence exceeds 30%, always ask OTC cold remedy buyers whether they have high blood pressure. Suggest non-decongestant alternatives (saline spray, steam inhalation, antihistamines) for hypertensive patients." },
        { type: "knowledge-check", question: "A patient with known hypertension asks for a pseudoephedrine-containing decongestant. What should you recommend?", options: ["Dispense it — OTC products are safe for everyone", "Suggest a non-decongestant alternative and refer to the pharmacist, as pseudoephedrine can raise blood pressure", "Tell them to take double their blood pressure medication", "Recommend aspirin instead"], correctIndex: 1, explanation: "Pseudoephedrine is a sympathomimetic that raises blood pressure. Hypertensive patients should avoid it. Alternatives include saline nasal sprays, steam inhalation, and antihistamines for allergy-related congestion." },
      ],
    },
    {
      id: "m8-l2",
      title: "Caribbean Herbal Remedies: Soursop, Moringa, Noni & Bush Tea",
      duration: "8 min",
      content: [
        { type: "heading", level: 2, text: "Traditional Medicine Meets Modern Pharmacy" },
        { type: "text", body: "Herbal and traditional remedies are deeply woven into Caribbean healthcare culture. From soursop (graviola) tea in Trinidad to moringa (saijan) in Jamaica, noni juice in Barbados, and countless bush teas prepared by family elders, these remedies are used alongside — and sometimes instead of — prescription medications. A pharmacy technician who understands these remedies can provide safer, more culturally sensitive care." },
        {
          type: "table",
          caption: "Popular Caribbean Herbal Remedies",
          headers: ["Remedy", "Local Names", "Traditional Use", "Evidence & Safety"],
          rows: [
            ["Soursop (Annona muricata)", "Graviola, guanabana, corossol", "Cancer prevention, hypertension, sleep aid", "Limited evidence; may interact with antihypertensives and diabetes meds"],
            ["Moringa (Moringa oleifera)", "Saijan (Trinidad), drumstick tree", "Diabetes, inflammation, nutrition supplement", "Some evidence for blood sugar lowering; may potentiate hypoglycaemics"],
            ["Noni (Morinda citrifolia)", "Noni fruit, Indian mulberry", "Immune boost, pain relief, general wellness", "High potassium content — concern in CKD and ACEi/ARB users"],
            ["Turmeric/Curcumin", "Haldi, turmeric root", "Inflammation, joint pain, digestive health", "Anti-inflammatory properties documented; may increase bleeding risk with anticoagulants"],
            ["Ginger (Zingiber officinale)", "Ginger root, ginger tea", "Nausea, digestion, cold symptoms", "Well-evidenced for nausea; mild antiplatelet effect — caution with warfarin"],
            ["Aloe vera", "Aloe, sinkle bible", "Burns, constipation, skin conditions", "Topical use well-supported; oral use can cause diarrhoea and electrolyte imbalance"],
          ],
        },
        { type: "callout", variant: "info", title: "Never Dismiss Traditional Medicine", body: "Dismissing bush tea or herbal remedies as 'not real medicine' is culturally insensitive and counterproductive. Instead, ask respectful questions about what the patient is taking, explain potential interactions without judgement, and document herbal use in the patient profile. Many patients will hide herbal use if they feel judged." },
        { type: "knowledge-check", question: "A diabetic patient in Jamaica drinks moringa tea daily for 'sugar control' alongside metformin. What is the concern?", options: ["No concern — moringa has no effect on blood sugar", "Moringa may have blood sugar-lowering effects that could add to metformin's action, increasing hypoglycaemia risk", "Moringa blocks metformin absorption", "Moringa causes liver damage"], correctIndex: 1, explanation: "Moringa has documented blood glucose-lowering properties. Combined with metformin, this could potentiate hypoglycaemic effects. The patient should be counselled to monitor blood sugar more frequently and inform their doctor about their moringa use." },
      ],
    },
    {
      id: "m8-l3",
      title: "Drug-Herb Interactions & Safe Counselling",
      duration: "7 min",
      content: [
        { type: "heading", level: 2, text: "When Natural and Prescribed Don't Mix" },
        { type: "text", body: "Drug-herb interactions are a significant but underrecognised safety concern in the Caribbean. Patients often assume that 'natural' means safe and do not consider that herbal products can interact with prescription drugs. St. John's Wort, garlic supplements, ginkgo biloba, and even common foods like grapefruit can cause clinically significant interactions." },
        {
          type: "table",
          caption: "Clinically Significant Drug-Herb Interactions",
          headers: ["Herbal Product", "Interacting Drug", "Effect", "Risk Level"],
          rows: [
            ["St. John's Wort", "Oral contraceptives, warfarin, SSRIs, cyclosporine", "CYP450 induction → reduced drug effectiveness", "HIGH"],
            ["Ginkgo biloba", "Warfarin, aspirin, NSAIDs", "Antiplatelet effect → increased bleeding risk", "MODERATE"],
            ["Garlic supplements", "Warfarin, antiplatelet drugs", "Antiplatelet effect → increased bleeding risk", "MODERATE"],
            ["Kava", "Benzodiazepines, alcohol", "Additive CNS depression → excessive sedation", "HIGH"],
            ["Echinacea", "Immunosuppressants", "Immune stimulation may counteract immunosuppression", "MODERATE"],
          ],
        },
        {
          type: "scenario-simulation",
          title: "Scenario: The Patient Who Takes Everything",
          description: "An elderly patient in Barbados comes to collect their prescriptions for warfarin, amlodipine, and metformin. During counselling, you ask about herbal remedies. They reveal they drink soursop tea, take garlic capsules, and use turmeric supplements daily.",
          nodes: [
            { id: "start", text: "The patient has disclosed garlic capsules and turmeric supplements alongside warfarin. Both have antiplatelet/anticoagulant effects. What is your priority?", choices: [
              { label: "Tell the patient to stop all herbal products immediately", nextNodeId: "too-aggressive", feedback: "This approach is too aggressive and may cause the patient to stop disclosing herbal use in the future.", isOptimal: false },
              { label: "Flag the garlic + warfarin and turmeric + warfarin interactions to the pharmacist for assessment", nextNodeId: "correct", feedback: "Correct! Both garlic and turmeric increase bleeding risk with warfarin. The pharmacist needs to assess this.", isOptimal: true },
              { label: "Ignore it — herbal products are harmless", nextNodeId: "wrong", feedback: "Incorrect. Garlic and turmeric both have clinically documented antiplatelet effects that increase bleeding risk with warfarin.", isOptimal: false },
            ]},
            { id: "correct", text: "Well done. You reported the interaction to the pharmacist, who counselled the patient about the bleeding risk and recommended they discuss their herbal use with their doctor.", isEnd: true, outcome: "success", summary: "Identifying drug-herb interactions and escalating to the pharmacist is the correct approach." },
            { id: "too-aggressive", text: "The patient becomes defensive and says they will not tell the pharmacy about their bush teas in the future.", isEnd: true, outcome: "partial", summary: "While your concern was valid, a less confrontational approach would preserve the patient's trust and willingness to disclose." },
            { id: "wrong", text: "Two weeks later, the patient is admitted to hospital with a GI bleed. The combined effect of warfarin, garlic, and turmeric contributed to excessive anticoagulation.", isEnd: true, outcome: "failure", summary: "Drug-herb interactions can have serious clinical consequences. Always flag potential interactions." },
          ],
        },
        { type: "knowledge-check", question: "St. John's Wort is dangerous when combined with oral contraceptives because it:", options: ["Causes nausea", "Induces CYP450 enzymes, reducing contraceptive hormone levels and risking unplanned pregnancy", "Blocks the hormones from binding to receptors", "Causes the contraceptive to be excreted faster by the kidneys"], correctIndex: 1, explanation: "St. John's Wort is a potent CYP450 inducer that accelerates metabolism of ethinylestradiol and progestogens, significantly reducing their blood levels and contraceptive effectiveness." },
      ],
    },
    {
      id: "m8-l4",
      title: "When to Refer: Recognising Red Flags in Self-Medication",
      duration: "6 min",
      content: [
        { type: "heading", level: 2, text: "The Limits of OTC Treatment" },
        { type: "text", body: "Not every patient who approaches the OTC counter can be safely managed without a doctor. Pharmacy technicians must recognise 'red flag' symptoms that require medical referral. Knowing when to say 'I think you should see a doctor' is as important as knowing which OTC product to recommend." },
        {
          type: "list",
          ordered: false,
          items: [
            "Chest pain or difficulty breathing — refer immediately (potential cardiac or pulmonary emergency)",
            "Blood in stool, urine, or vomit — refer urgently (GI bleeding, UTI, or other serious cause)",
            "Symptoms lasting more than 7-10 days without improvement — refer for diagnosis",
            "High fever (>39\u00B0C / 102\u00B0F) in adults or any fever in children under 3 months — refer",
            "Sudden severe headache ('worst headache of my life') — refer urgently (possible subarachnoid haemorrhage)",
            "Suspected allergic reaction (swelling, hives, difficulty breathing) — refer immediately",
            "Patient already taking 3+ prescription medications — consult pharmacist before recommending OTC",
            "Recurrent symptoms requiring repeated OTC treatment — refer for underlying cause investigation",
          ],
        },
        { type: "callout", variant: "tip", title: "The 'WWHAM' Approach to OTC Counselling", body: "Use WWHAM to structure OTC consultations: Who is the patient? What are the symptoms? How long have they had symptoms? Action already taken? Medications currently taking? This framework ensures you gather enough information to recommend safely or refer appropriately." },
        { type: "knowledge-check", question: "A customer asks for loperamide for diarrhoea that contains blood. What should you do?", options: ["Dispense loperamide — it stops diarrhoea", "Refer to the pharmacist or doctor — bloody diarrhoea is a red flag requiring medical assessment", "Recommend a stronger dose of loperamide", "Suggest they also take an antibiotic"], correctIndex: 1, explanation: "Bloody diarrhoea may indicate bacterial dysentery, inflammatory bowel disease, or other serious conditions. Loperamide is contraindicated in dysentery as it can worsen the infection by preventing pathogen clearance. Medical referral is essential." },
      ],
    },
  ],
  quiz: [
    { id: "m8-q1", question: "Pseudoephedrine should be avoided in patients with:", options: ["Diabetes", "Hypertension", "Asthma", "Hypothyroidism"], correctIndex: 1, explanation: "Pseudoephedrine is a sympathomimetic that raises blood pressure. It should be avoided in hypertensive patients.", difficulty: "easy", bloomsLevel: "remember" },
    { id: "m8-q2", question: "Moringa tea combined with metformin may:", options: ["Reduce metformin's effectiveness", "Potentiate blood sugar lowering, increasing hypoglycaemia risk", "Cause liver damage", "Have no interaction"], correctIndex: 1, explanation: "Moringa has documented hypoglycaemic properties that may add to metformin's effect, increasing the risk of low blood sugar.", difficulty: "medium", bloomsLevel: "apply" },
    { id: "m8-q3", question: "St. John's Wort reduces the effectiveness of oral contraceptives by:", options: ["Blocking oestrogen receptors", "Inducing CYP450 enzymes that metabolise contraceptive hormones faster", "Preventing absorption in the gut", "Causing nausea and vomiting"], correctIndex: 1, explanation: "St. John's Wort is a potent CYP inducer that speeds up metabolism of contraceptive hormones, reducing their blood levels and contraceptive efficacy.", difficulty: "medium", bloomsLevel: "understand" },
    { id: "m8-q4", question: "The WWHAM framework for OTC counselling stands for:", options: ["Who, What, How long, Action taken, Medications", "When, Where, How, Always, Maybe", "Why, Which, How much, Allergies, Method", "Who, Why, History, Amount, Medicine"], correctIndex: 0, explanation: "WWHAM: Who is it for? What are the symptoms? How long? Action already taken? Medications currently taking?", difficulty: "easy", bloomsLevel: "remember" },
    { id: "m8-q5", question: "Loperamide should NOT be used for diarrhoea that:", options: ["Is mild and watery", "Has lasted less than 24 hours", "Contains blood or is accompanied by high fever", "Occurs while travelling"], correctIndex: 2, explanation: "Bloody diarrhoea or diarrhoea with high fever may indicate bacterial dysentery. Loperamide slows gut motility, potentially trapping the pathogen and worsening the infection.", difficulty: "medium", bloomsLevel: "apply" },
    { id: "m8-q6", question: "Garlic supplements increase bleeding risk when taken with:", options: ["Metformin", "Amlodipine", "Warfarin", "Levothyroxine"], correctIndex: 2, explanation: "Garlic has antiplatelet properties that can add to warfarin's anticoagulant effect, increasing the risk of bleeding.", difficulty: "medium", bloomsLevel: "apply" },
    { id: "m8-q7", question: "Which approach to a patient's herbal remedy use is most appropriate?", options: ["Tell them herbal remedies are useless", "Ask respectfully about all herbal and traditional remedies they use, without judgement", "Ignore herbal use entirely", "Insist they stop all herbal products immediately"], correctIndex: 1, explanation: "A non-judgemental, respectful approach encourages disclosure, allows interaction checking, and maintains trust. Dismissing traditional medicine erodes the patient relationship.", difficulty: "easy", bloomsLevel: "evaluate" },
    { id: "m8-q8", question: "A customer reports the 'worst headache of their life' that started suddenly. This is a red flag for:", options: ["A common tension headache", "Migraine", "Possible subarachnoid haemorrhage — urgent medical referral needed", "Sinus congestion"], correctIndex: 2, explanation: "Sudden-onset 'thunderclap' headache is a red flag for subarachnoid haemorrhage, a life-threatening emergency requiring immediate medical evaluation.", difficulty: "medium", bloomsLevel: "apply" },
  ],
};

// ============================================================================
// COURSE EXPORT
// ============================================================================

const pharmacologyCourse: FullCourse = {
  courseId: "pharmacology-essentials",
  title: "Pharmacology Essentials",
  tagline: "How drugs work — from molecules to patients",
  modules: [module1, module2, module3, module4, module5, module6, module7, module8],
};

export default pharmacologyCourse;
