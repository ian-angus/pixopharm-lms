// ============================================================================
// PIXOPHARM LMS — Anatomy, Physiology & Medical Terminology (B3)
// Full Course Content: 6 Modules, 24 Lessons, ~65 Quiz Questions
// Focus Islands: Trinidad & Tobago, Jamaica, Barbados, Grenada
// Caribbean disease context: hypertension, diabetes, sickle cell, dengue,
// chikungunya, Zika, tropical dermatoses
// ============================================================================

import type { Module, FullCourse } from '../types';

// ============================================================================
// MODULE 1 — Medical Terminology: Roots, Prefixes, Suffixes & Drug Name Stems
// ============================================================================

const module1: Module = {
  id: "m1-medical-terminology",
  number: 1,
  title: "Medical Terminology: Roots, Prefixes, Suffixes & Drug Name Stems",
  description:
    "Build fluency in the language of medicine. Learn to deconstruct medical terms into their Greek and Latin building blocks, master the drug-name stem system used by pharmacists worldwide, and apply these skills to real Caribbean prescriptions and formulary documents.",
  learningObjectives: [
    "Identify the root, prefix, suffix, and combining vowel in medical terms",
    "Explain the etymological origin of at least 30 common medical word roots",
    "Analyse drug names to determine therapeutic class using INN stems",
    "Describe how medical terminology applies to Caribbean formulary documents and prescription interpretation",
    "Evaluate whether a medical term has been constructed correctly by applying word-building rules",
  ],
  lessons: [
    // ── Lesson 1.1 ──
    {
      id: "m1-l1",
      title: "The Building Blocks of Medical Language",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Why Medical Terminology Matters for Pharmacy Technicians",
        },
        {
          type: "text",
          body: "Every prescription that crosses a pharmacy counter is written in a specialised language. To the untrained eye, terms like 'hepatomegaly', 'tachycardia', or 'subcutaneous' appear intimidating. But medical terminology follows a systematic, logical structure inherited from ancient Greek and Latin. Once you learn the building blocks, you can decode virtually any term — even one you have never encountered before.",
        },
        {
          type: "text",
          body: "For pharmacy technicians in the Caribbean, this skill is not merely academic. You will read prescriptions from physicians trained across different systems — some in the UK tradition, others in North American or Cuban programmes. You will handle formulary documents from the Barbados Drug Service, CDAP (Chronic Disease Assistance Programme) lists in Trinidad, and NHF (National Health Fund) approved medicines in Jamaica. All of these documents rely on precise medical terminology.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The CDAP and NHF Connection",
          body: "Trinidad's CDAP programme and Jamaica's NHF both provide subsidised medications for chronic diseases. Understanding the medical terminology on their formulary lists — terms like 'antihypertensive', 'hypoglycaemic agent', or 'bronchodilator' — is essential for verifying that a patient's prescription matches what is covered under their benefit programme.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Four Components of a Medical Term",
        },
        {
          type: "text",
          body: "Every medical term is assembled from up to four components. Not every term uses all four, but understanding each component is essential.",
        },
        {
          type: "key-term",
          term: "Word Root",
          definition:
            "The core component that carries the fundamental meaning of the term. A medical term must have at least one root. For example, 'cardi' means heart, 'hepat' means liver, and 'ren' means kidney. Some terms have two roots (e.g. 'gastroenteritis' combines 'gastr/o' for stomach and 'enter/o' for intestine).",
        },
        {
          type: "key-term",
          term: "Combining Vowel",
          definition:
            "A vowel (usually 'o', occasionally 'i') inserted between a root and a suffix, or between two roots, to make pronunciation easier. For example, 'cardi/o/logy' uses the combining vowel 'o'. The combining vowel is typically dropped when the suffix begins with a vowel (e.g. 'hepat-itis', not 'hepato-itis').",
        },
        {
          type: "key-term",
          term: "Prefix",
          definition:
            "A word element attached to the beginning of a root to modify its meaning. Prefixes indicate location (sub- = under), quantity (poly- = many), time (post- = after), or negation (a-/an- = without). For example, 'tachy-cardia' means rapid heartbeat, where 'tachy-' modifies 'cardia'.",
        },
        {
          type: "key-term",
          term: "Suffix",
          definition:
            "A word element attached to the end of a root that often indicates a condition, procedure, or speciality. Common suffixes include '-itis' (inflammation), '-ectomy' (surgical removal), '-ology' (study of), and '-pathy' (disease of). For example, 'nephropathy' means disease of the kidney.",
        },
        {
          type: "table",
          caption: "Deconstructing Medical Terms — Worked Examples",
          headers: ["Term", "Prefix", "Root(s)", "Suffix", "Meaning"],
          rows: [
            ["Tachycardia", "tachy- (fast)", "cardi (heart)", "-ia (condition)", "Abnormally fast heart rate"],
            ["Hepatomegaly", "—", "hepat/o (liver)", "-megaly (enlargement)", "Enlargement of the liver"],
            ["Subcutaneous", "sub- (under)", "cutane (skin)", "-ous (pertaining to)", "Under the skin"],
            ["Polyneuropathy", "poly- (many)", "neur/o (nerve)", "-pathy (disease)", "Disease affecting many nerves"],
            ["Endocarditis", "endo- (within)", "card (heart)", "-itis (inflammation)", "Inflammation of inner heart lining"],
            ["Gastroenterology", "—", "gastr/o (stomach) + enter/o (intestine)", "-logy (study of)", "Study of the stomach and intestines"],
          ],
        },
        {
          type: "knowledge-check",
          question: "What is the combining vowel most commonly used in medical terminology?",
          options: [
            "a",
            "e",
            "i",
            "o",
          ],
          correctIndex: 3,
          explanation:
            "The letter 'o' is by far the most common combining vowel in medical terminology. It is inserted between word roots or between a root and suffix to ease pronunciation. Occasionally 'i' is used (e.g. 'lumbosacral'), but 'o' accounts for the vast majority of combining vowels.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Reading Tip: Work Backwards",
          body: "When you encounter an unfamiliar medical term, read it from the suffix back to the prefix. The suffix tells you the general category (condition, procedure, study), the root tells you the body part or system, and the prefix modifies or refines the meaning. For example, 'pericarditis': -itis = inflammation, cardi = heart, peri- = around. So: inflammation around the heart.",
        },
      ],
    },
    // ── Lesson 1.2 ──
    {
      id: "m1-l2",
      title: "Essential Prefixes and Suffixes for Pharmacy",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Mastering the Most Common Prefixes",
        },
        {
          type: "text",
          body: "Prefixes modify the meaning of a medical root. They can indicate location, quantity, size, colour, time, or negation. As a pharmacy technician, you will encounter these prefixes daily — on prescription orders, drug information leaflets, and clinical notes from physicians.",
        },
        {
          type: "table",
          caption: "High-Yield Prefixes for Pharmacy Technicians",
          headers: ["Prefix", "Meaning", "Pharmacy Example", "Context"],
          rows: [
            ["hyper-", "Above / excessive", "Hyperglycaemia", "Elevated blood glucose — extremely common in Caribbean populations"],
            ["hypo-", "Below / deficient", "Hypotension", "Low blood pressure — a side effect of many antihypertensives"],
            ["tachy-", "Fast / rapid", "Tachycardia", "Heart rate above 100 bpm — seen with salbutamol overuse"],
            ["brady-", "Slow", "Bradycardia", "Heart rate below 60 bpm — side effect of beta-blockers"],
            ["anti-", "Against", "Antiemetic", "A drug that prevents nausea and vomiting"],
            ["sub-", "Under / below", "Sublingual", "Under the tongue — route for nitroglycerin tablets"],
            ["intra-", "Within", "Intravenous (IV)", "Within the vein — common hospital administration route"],
            ["poly-", "Many", "Polypharmacy", "Taking many medications simultaneously — common in elderly Caribbean patients"],
            ["dys-", "Difficult / painful", "Dyspnoea", "Difficulty breathing"],
            ["a- / an-", "Without", "Anaemia", "Without adequate red blood cells — linked to sickle cell in the Caribbean"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Critical Suffixes for Pharmacy Practice",
        },
        {
          type: "text",
          body: "Suffixes tell you what category a medical term falls into — whether it describes a condition, a diagnostic procedure, a surgical intervention, or a speciality. Some suffixes are so common in pharmacy that you will use them dozens of times each day.",
        },
        {
          type: "table",
          caption: "Essential Suffixes for Pharmacy Technicians",
          headers: ["Suffix", "Meaning", "Example", "Pharmacy Relevance"],
          rows: [
            ["-itis", "Inflammation", "Dermatitis", "Many prescriptions treat inflammatory conditions"],
            ["-osis", "Abnormal condition", "Thrombosis", "Blood clot formation — treated with anticoagulants"],
            ["-ectomy", "Surgical removal", "Appendectomy", "Post-surgical patients often need pain management"],
            ["-pathy", "Disease", "Nephropathy", "Kidney disease — common complication of uncontrolled diabetes"],
            ["-algia", "Pain", "Neuralgia", "Nerve pain — treated with gabapentin, pregabalin"],
            ["-aemia", "Blood condition", "Anaemia", "Sickle cell anaemia prevalent in Caribbean populations"],
            ["-uria", "Urine condition", "Glycosuria", "Glucose in urine — sign of uncontrolled diabetes"],
            ["-pnoea", "Breathing", "Dyspnoea", "Difficulty breathing — common in asthma and COPD"],
            ["-megaly", "Enlargement", "Hepatomegaly", "Liver enlargement — may indicate disease"],
            ["-scopy", "Visual examination", "Endoscopy", "Requires bowel preparation medications"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Confusing Pairs — Be Careful!",
          body: "Several prefix pairs are dangerously similar and are a common source of medication errors. 'hyper-' (excessive) vs 'hypo-' (deficient) is the most critical: confusing hyperglycaemia with hypoglycaemia could lead to a life-threatening dispensing error. Similarly, watch for 'inter-' (between) vs 'intra-' (within), and 'ante-' (before) vs 'anti-' (against). Always double-check when these prefixes appear on prescriptions.",
        },
        {
          type: "knowledge-check",
          question: "A patient's chart reads 'dysuria'. What does this term mean?",
          options: [
            "Excessive urination",
            "Blood in the urine",
            "Painful or difficult urination",
            "Absence of urination",
          ],
          correctIndex: 2,
          explanation:
            "The prefix 'dys-' means difficult or painful, and the suffix '-uria' relates to urine. Therefore 'dysuria' means painful or difficult urination. This is a common symptom of urinary tract infections (UTIs), which are frequently presented at Caribbean community pharmacies.",
        },
        {
          type: "key-term",
          term: "Polypharmacy",
          definition:
            "The concurrent use of multiple medications by a single patient, typically defined as five or more regular medicines. Polypharmacy is particularly common among elderly Caribbean patients managing multiple chronic conditions such as hypertension, diabetes, and arthritis. It increases the risk of drug interactions and adverse effects.",
        },
      ],
    },
    // ── Lesson 1.3 ──
    {
      id: "m1-l3",
      title: "Body System Root Words: A Complete Reference",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Root Words Organised by Body System",
        },
        {
          type: "text",
          body: "The human body is organised into systems, and medical terminology mirrors this organisation. Each body system has a set of root words that describe its organs, structures, and functions. As a pharmacy technician, your ability to recognise these roots enables you to quickly understand what body system a medication targets, what condition is being treated, and what side effects to watch for.",
        },
        {
          type: "table",
          caption: "Root Words by Body System",
          headers: ["Body System", "Root Word", "Meaning", "Sample Term"],
          rows: [
            ["Cardiovascular", "cardi/o", "Heart", "Cardiovascular"],
            ["Cardiovascular", "angi/o, vas/o", "Blood vessel", "Angioplasty"],
            ["Cardiovascular", "haem/o, hemat/o", "Blood", "Haematology"],
            ["Respiratory", "pulmon/o, pneum/o", "Lung", "Pulmonology"],
            ["Respiratory", "bronch/o", "Bronchial tube", "Bronchitis"],
            ["Digestive", "gastr/o", "Stomach", "Gastroenteritis"],
            ["Digestive", "hepat/o", "Liver", "Hepatotoxicity"],
            ["Digestive", "enter/o", "Intestine", "Enteritis"],
            ["Renal/Urinary", "nephr/o, ren/o", "Kidney", "Nephrology"],
            ["Renal/Urinary", "cyst/o", "Bladder", "Cystitis"],
            ["Endocrine", "aden/o", "Gland", "Adenoma"],
            ["Endocrine", "thyr/o", "Thyroid", "Thyroiditis"],
            ["Nervous", "neur/o", "Nerve", "Neuropathy"],
            ["Nervous", "cephal/o", "Head", "Cephalgia"],
            ["Nervous", "encephal/o", "Brain", "Encephalitis"],
            ["Musculoskeletal", "oste/o", "Bone", "Osteoporosis"],
            ["Musculoskeletal", "arthr/o", "Joint", "Arthritis"],
            ["Musculoskeletal", "my/o", "Muscle", "Myalgia"],
            ["Integumentary", "derm/o, dermat/o", "Skin", "Dermatology"],
            ["Immune", "immun/o", "Immune", "Immunodeficiency"],
            ["Immune", "lymph/o", "Lymphatic", "Lymphadenopathy"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Caribbean Relevance",
          body: "The root words you use most frequently will depend on the disease burden of your community. In the Caribbean, cardiovascular roots (cardi/o, angi/o) and endocrine roots (particularly those related to glucose metabolism like 'glyc/o') appear on prescriptions far more often than in many other regions, reflecting the high prevalence of hypertension and diabetes across CARICOM nations.",
        },
        {
          type: "key-term",
          term: "Combining Form",
          definition:
            "A root word together with its combining vowel, written with a slash to show the join point. For example, 'cardi/o' is the combining form of the root 'cardi'. The combining form is used when building compound terms. You will see combining forms written in drug references and medical dictionaries throughout your career.",
        },
        {
          type: "knowledge-check",
          question: "Which root word relates to the liver?",
          options: [
            "nephr/o",
            "hepat/o",
            "gastr/o",
            "pulmon/o",
          ],
          correctIndex: 1,
          explanation:
            "The root 'hepat/o' refers to the liver. This root appears in many pharmacy-relevant terms: hepatotoxicity (liver damage — a critical drug side effect), hepatitis (inflammation of the liver), and hepatomegaly (enlargement of the liver). Drugs like paracetamol (acetaminophen) can cause hepatotoxicity in overdose, making this root essential knowledge for Caribbean pharmacy technicians.",
        },
      ],
    },
    // ── Lesson 1.4 ──
    {
      id: "m1-l4",
      title: "Drug Name Stems: Decoding What a Medicine Does from Its Name",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The INN Stem System: A Hidden Code in Every Drug Name",
        },
        {
          type: "text",
          body: "Every generic drug name approved by the World Health Organization (WHO) contains a stem — a syllable or group of syllables that indicates the drug's pharmacological class or mechanism of action. This system, managed through the International Nonproprietary Names (INN) programme, means that a pharmacy technician who knows the stem system can determine what a drug does simply by reading its name — even if they have never seen that specific drug before.",
        },
        {
          type: "text",
          body: "This is an extraordinary practical skill. When a new medication appears on the Caribbean market, or when you encounter an unfamiliar generic on a CDAP list or NHF formulary, stem knowledge tells you immediately what drug class you are handling. This knowledge helps prevent dispensing errors, enables better patient counselling, and makes inventory management more intuitive.",
        },
        {
          type: "key-term",
          term: "International Nonproprietary Name (INN)",
          definition:
            "A unique, globally recognised name assigned to every pharmaceutical substance by the WHO. INNs are designed to be distinct, informative, and not confused with existing names. The INN system ensures that atenolol, for example, is called 'atenolol' in Trinidad, Jamaica, Barbados, the UK, India, and everywhere else — facilitating safe international trade and communication.",
        },
        {
          type: "table",
          caption: "Essential Drug Name Stems for Caribbean Pharmacy Practice",
          headers: ["Stem", "Drug Class", "Examples", "Caribbean Relevance"],
          rows: [
            ["-olol", "Beta-adrenergic blockers", "Atenolol, metoprolol, propranolol", "First-line hypertension treatment — CDAP and NHF listed"],
            ["-pril", "ACE inhibitors", "Enalapril, lisinopril, ramipril", "Hypertension and diabetic nephropathy — extremely common Caribbean prescriptions"],
            ["-sartan", "Angiotensin II receptor blockers (ARBs)", "Losartan, valsartan, irbesartan", "Alternative to ACE inhibitors — growing use across CARICOM"],
            ["-dipine", "Calcium channel blockers (dihydropyridine)", "Amlodipine, nifedipine", "High-volume dispensing for hypertension in every Caribbean pharmacy"],
            ["-statin", "HMG-CoA reductase inhibitors", "Atorvastatin, simvastatin, rosuvastatin", "Cholesterol management — frequently co-prescribed with antihypertensives"],
            ["-formin", "Biguanide antidiabetics", "Metformin", "First-line type 2 diabetes treatment — the most dispensed diabetes drug in the Caribbean"],
            ["-gliptin", "DPP-4 inhibitors", "Sitagliptin, linagliptin", "Newer diabetes agents increasingly available on Caribbean formularies"],
            ["-mycin / -micin", "Antibiotics (various subclasses)", "Azithromycin, erythromycin, gentamicin", "High use for respiratory and tropical infections"],
            ["-cillin", "Penicillin-type antibiotics", "Amoxicillin, ampicillin", "First-line antibiotic for many infections across the Caribbean"],
            ["-azole", "Antifungal agents", "Fluconazole, clotrimazole, ketoconazole", "Tropical climate makes fungal infections very common"],
            ["-vir", "Antiviral agents", "Acyclovir, oseltamivir", "Used during dengue supportive care and for herpes/varicella"],
            ["-olone / -sone", "Corticosteroids", "Prednisolone, dexamethasone, hydrocortisone", "Anti-inflammatory use across multiple conditions"],
            ["-prazole", "Proton pump inhibitors", "Omeprazole, pantoprazole, esomeprazole", "Acid reflux management — high OTC and prescription demand"],
            ["-ine (various)", "Context-dependent", "Adrenaline, atropine, morphine", "Legacy names — the '-ine' ending alone is not a reliable stem classifier"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Practical Application",
          body: "Next time you are organising pharmacy shelves, notice how drugs with the same stem share a therapeutic class: all the '-sartans' will be ARBs, all the '-statins' will be cholesterol-lowering agents. This pattern recognition becomes automatic with practice and dramatically reduces the risk of selecting the wrong medication during dispensing.",
        },
        {
          type: "case-study",
          title: "Case Study: The Unfamiliar Generic",
          scenario:
            "A patient presents a prescription at your community pharmacy in San Fernando, Trinidad. The prescription reads 'candesartan 16 mg, one tablet daily'. You have not encountered candesartan before — your pharmacy usually stocks losartan and valsartan. The patient says the doctor switched them from losartan because of a persistent dry cough.",
          questions: [
            "Using drug name stems, what therapeutic class does candesartan belong to?",
            "Why might the physician have switched from losartan to candesartan rather than to an ACE inhibitor like enalapril?",
            "What steps should you take when your pharmacy does not stock a prescribed medication?",
          ],
          discussion:
            "The '-sartan' stem tells you candesartan is an angiotensin II receptor blocker (ARB), the same class as losartan and valsartan. The physician likely kept the patient on an ARB rather than switching to an ACE inhibitor ('-pril') because ACE inhibitors are actually more likely to cause dry cough. Within the ARB class, a switch from losartan to candesartan might be for efficacy or tolerability reasons. The technician should inform the pharmacist, check if candesartan can be ordered from the wholesaler, and discuss a potential therapeutic substitution with the pharmacist if the medication is urgently needed.",
        },
        {
          type: "heading",
          level: 3,
          text: "Stems That Signal Danger",
        },
        {
          type: "text",
          body: "Some drug stems should trigger heightened caution during dispensing because they identify high-alert medication classes. Drugs with the stem '-arin' (anticoagulants like warfarin) require careful dose monitoring. The stem '-sulin' (insulins) identifies medications where dose errors can be rapidly fatal. The stem '-barb' (barbiturates like phenobarbital) identifies controlled substances with abuse potential and narrow therapeutic windows.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "High-Alert Drug Stems",
          body: "When you see these stems, apply extra vigilance: '-arin' (anticoagulants — bleeding risk), '-sulin' (insulins — hypoglycaemia risk), '-barb' (barbiturates — respiratory depression), '-opioid' prefix or '-done'/'-phine' (opioid analgesics — respiratory depression and dependence). These drugs require double-checking of dose, route, frequency, and patient identity.",
        },
        {
          type: "knowledge-check",
          question: "A new prescription arrives for 'olmesartan'. Based on the drug name stem, what class of medication is this?",
          options: [
            "Beta-blocker",
            "ACE inhibitor",
            "Angiotensin II receptor blocker (ARB)",
            "Calcium channel blocker",
          ],
          correctIndex: 2,
          explanation:
            "The '-sartan' stem identifies olmesartan as an angiotensin II receptor blocker (ARB). ARBs are widely used across the Caribbean for hypertension management and are commonly found on CDAP and NHF formulary lists. Other ARBs include losartan, valsartan, irbesartan, and candesartan — all sharing the telltale '-sartan' stem.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m1-q1",
      question: "Which component of a medical term carries its fundamental meaning?",
      options: [
        "Prefix",
        "Suffix",
        "Word root",
        "Combining vowel",
      ],
      correctIndex: 2,
      explanation:
        "The word root is the core component that carries the fundamental meaning of any medical term. Every medical term must contain at least one root. Prefixes and suffixes modify the root, and combining vowels aid pronunciation, but the root is the essential element.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q2",
      question: "What does the prefix 'tachy-' mean?",
      options: [
        "Slow",
        "Fast or rapid",
        "Painful",
        "Large",
      ],
      correctIndex: 1,
      explanation:
        "'Tachy-' means fast or rapid. It appears in terms like 'tachycardia' (rapid heart rate) and 'tachypnoea' (rapid breathing). Its opposite is 'brady-' (slow), as in 'bradycardia' (slow heart rate).",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q3",
      question: "The drug name stem '-pril' identifies which class of medication?",
      options: [
        "Beta-blockers",
        "Calcium channel blockers",
        "ACE inhibitors",
        "Proton pump inhibitors",
      ],
      correctIndex: 2,
      explanation:
        "The '-pril' stem identifies ACE (angiotensin-converting enzyme) inhibitors such as enalapril, lisinopril, and ramipril. These are among the most commonly prescribed antihypertensives in the Caribbean and appear on both CDAP (Trinidad) and NHF (Jamaica) formulary lists.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q4",
      question: "Deconstruct the term 'polyneuropathy'. Select ALL correct components.",
      options: [
        "poly- = many (prefix)",
        "neur/o = nerve (root)",
        "-pathy = disease (suffix)",
        "poly- = painful (prefix)",
        "-pathy = study of (suffix)",
      ],
      correctIndex: 0,
      explanation:
        "Polyneuropathy breaks down as: poly- (many) + neur/o (nerve) + -pathy (disease). It means disease affecting many nerves — a common complication of uncontrolled diabetes in Caribbean populations.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 2],
      },
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m1-q5",
      question: "Place the following steps for decoding an unfamiliar medical term in the correct order.",
      options: [
        "Identify the suffix to determine the general category",
        "Identify the root(s) to determine the body part or system",
        "Identify the prefix to determine any modifiers",
        "Combine all parts to form the complete meaning",
      ],
      correctIndex: 0,
      explanation:
        "The recommended approach is to read a term backwards: (1) identify the suffix for the general category, (2) identify the root(s) for the body part, (3) identify any prefix modifiers, then (4) combine all parts into a complete meaning.",
      questionType: "ordering",
      questionData: {
        correct_order: [0, 1, 2, 3],
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q6",
      question: "Match each drug name stem with its correct drug class.",
      options: [
        "-olol → Beta-blocker",
        "-statin → HMG-CoA reductase inhibitor",
        "-sartan → Angiotensin II receptor blocker",
        "-azole → Antifungal",
      ],
      correctIndex: 0,
      explanation:
        "All matches are correct: -olol identifies beta-blockers (atenolol, metoprolol), -statin identifies HMG-CoA reductase inhibitors (atorvastatin, simvastatin), -sartan identifies ARBs (losartan, valsartan), and -azole identifies antifungal agents (fluconazole, clotrimazole).",
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "-olol", right: "Beta-blocker" },
          { left: "-statin", right: "HMG-CoA reductase inhibitor" },
          { left: "-sartan", right: "Angiotensin II receptor blocker" },
          { left: "-azole", right: "Antifungal agent" },
        ],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q7",
      question: "The combining vowel is typically dropped when the suffix begins with a vowel.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 0,
      explanation:
        "This is true. When a suffix begins with a vowel (e.g. '-itis', '-osis'), the combining vowel is usually dropped: 'hepatitis' not 'hepatoitis'. When a suffix begins with a consonant (e.g. '-scopy'), the combining vowel is retained: 'arthroscopy' not 'arthrscopy'.",
      questionType: "true_false",
      questionData: {
        correct_answer: true,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q8",
      question: "A patient brings in a prescription for 'rosuvastatin 10 mg daily'. They ask you what type of medicine it is. Based on the drug name stem, the correct response is that it is a ________ .",
      options: [
        "cholesterol-lowering medication",
        "blood pressure medication",
        "blood sugar medication",
        "pain medication",
      ],
      correctIndex: 0,
      explanation:
        "The '-statin' stem identifies rosuvastatin as an HMG-CoA reductase inhibitor — a cholesterol-lowering medication. Other statins include atorvastatin, simvastatin, and pravastatin. These are among the most widely prescribed medications globally and are standard on Caribbean formularies.",
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: ["cholesterol-lowering medication", "cholesterol medication", "statin", "HMG-CoA reductase inhibitor"],
        case_sensitive: false,
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q9",
      question: "A physician in Barbados prescribes azithromycin 500 mg for a patient with a respiratory infection. What does the '-mycin' stem tell you about this drug?",
      options: [
        "It is an antifungal agent",
        "It is an antibiotic",
        "It is an antiviral agent",
        "It is an anti-inflammatory agent",
      ],
      correctIndex: 1,
      explanation:
        "The '-mycin' (and '-micin') stem identifies antibiotics. Azithromycin is a macrolide antibiotic commonly prescribed for respiratory tract infections, sexually transmitted infections, and travellers' diarrhoea. It is widely available across Caribbean pharmacies and appears on the Barbados National Drug Formulary.",
      questionType: "scenario",
      questionData: {
        context: "Community pharmacy in Bridgetown, Barbados. A patient presents with a new prescription.",
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q10",
      question: "Which suffix means 'inflammation'?",
      options: [
        "-osis",
        "-itis",
        "-ectomy",
        "-pathy",
      ],
      correctIndex: 1,
      explanation:
        "The suffix '-itis' means inflammation. It is one of the most common suffixes in medicine, appearing in terms like arthritis (inflammation of joints), bronchitis (inflammation of the bronchi), dermatitis (inflammation of the skin), and gastritis (inflammation of the stomach).",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 2 — The Cardiovascular System & Common Conditions
// ============================================================================

const module2: Module = {
  id: "m2-cardiovascular",
  number: 2,
  title: "The Cardiovascular System & Common Conditions",
  description:
    "Examine the anatomy and physiology of the heart, blood vessels, and blood. Understand why the Caribbean has among the highest cardiovascular disease rates in the Americas, and learn the drug classes that pharmacy technicians dispense daily to combat this epidemic.",
  learningObjectives: [
    "Describe the anatomy of the heart including chambers, valves, and the coronary circulation",
    "Explain the cardiac cycle, blood pressure regulation, and electrical conduction system",
    "Identify the major cardiovascular conditions prevalent in Caribbean populations",
    "Analyse how antihypertensive and cardiovascular drug classes act on specific physiological targets",
    "Evaluate the significance of the Caribbean cardiovascular disease burden for pharmacy practice",
  ],
  lessons: [
    // ── Lesson 2.1 ──
    {
      id: "m2-l1",
      title: "Heart Anatomy: Chambers, Valves & the Coronary Circulation",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Human Heart: Structure and Function",
        },
        {
          type: "text",
          body: "The heart is a muscular organ roughly the size of a closed fist, located in the mediastinum — the central compartment of the thoracic cavity. It sits slightly left of the midline, between the lungs, and is enclosed by a double-walled sac called the pericardium. The heart's sole purpose is to pump blood through the circulatory system, delivering oxygen and nutrients to every tissue and removing metabolic waste products.",
        },
        {
          type: "text",
          body: "Understanding cardiac anatomy is essential for pharmacy technicians because the drugs you dispense — beta-blockers, ACE inhibitors, calcium channel blockers, anticoagulants, antiarrhythmics — all target specific structures and processes within the cardiovascular system. Without knowing what these drugs act upon, you cannot appreciate why they work, why they have particular side effects, or why dosing and monitoring matter.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Four Chambers",
        },
        {
          type: "text",
          body: "The heart contains four chambers. The two upper chambers — the right atrium and left atrium — receive blood returning to the heart. The two lower chambers — the right ventricle and left ventricle — pump blood out of the heart. The right side handles deoxygenated blood (pumping it to the lungs for gas exchange), while the left side handles oxygenated blood (pumping it to the rest of the body). The left ventricle has the thickest muscular wall because it must generate enough pressure to push blood through the entire systemic circulation.",
        },
        {
          type: "key-term",
          term: "Myocardium",
          definition:
            "The thick, muscular middle layer of the heart wall, composed of cardiac muscle tissue (cardiomyocytes). The myocardium is responsible for the heart's contractile force. When we speak of a 'myocardial infarction' (heart attack), we mean that a portion of the myocardium has died due to interrupted blood supply. Drugs like beta-blockers reduce myocardial oxygen demand.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Heart Valves",
        },
        {
          type: "text",
          body: "Four valves ensure one-way blood flow through the heart. The tricuspid valve sits between the right atrium and right ventricle. The pulmonary valve guards the exit from the right ventricle to the pulmonary artery. The mitral (bicuspid) valve separates the left atrium from the left ventricle. The aortic valve controls flow from the left ventricle into the aorta. Valve disorders — such as mitral valve prolapse or aortic stenosis — may require long-term anticoagulation therapy with drugs like warfarin, which pharmacy technicians handle regularly.",
        },
        {
          type: "table",
          caption: "Heart Valves Summary",
          headers: ["Valve", "Location", "Type", "Clinical Relevance"],
          rows: [
            ["Tricuspid", "Right atrium → right ventricle", "Atrioventricular (AV)", "Endocarditis risk in IV drug users"],
            ["Pulmonary", "Right ventricle → pulmonary artery", "Semilunar", "Rarely diseased in isolation"],
            ["Mitral (Bicuspid)", "Left atrium → left ventricle", "Atrioventricular (AV)", "Mitral valve prolapse — most common valve disorder"],
            ["Aortic", "Left ventricle → aorta", "Semilunar", "Aortic stenosis — common in elderly patients"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Coronary Circulation",
        },
        {
          type: "text",
          body: "The heart muscle itself requires its own blood supply, delivered by the coronary arteries. The left coronary artery divides into the left anterior descending artery (LAD) and the circumflex artery, supplying the left ventricle and septum. The right coronary artery supplies the right ventricle and the inferior wall of the left ventricle. Blockage of a coronary artery — typically by atherosclerotic plaque — causes myocardial infarction (heart attack). Sublingual nitroglycerin, aspirin, clopidogrel, and statins are all medications used in coronary artery disease that pharmacy technicians must handle with precision.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Caribbean Cardiovascular Burden",
          body: "The Caribbean region has some of the highest cardiovascular disease mortality rates in the Americas. CARPHA data shows that cardiovascular disease is the leading cause of death in Trinidad & Tobago, Jamaica, and Barbados. Contributing factors include high rates of hypertension, diabetes, obesity, sedentary lifestyles, and dietary habits (high salt and processed food intake). This makes cardiovascular medications the highest-volume category in most Caribbean pharmacies.",
        },
        {
          type: "knowledge-check",
          question: "Which heart chamber has the thickest muscular wall?",
          options: [
            "Right atrium",
            "Right ventricle",
            "Left atrium",
            "Left ventricle",
          ],
          correctIndex: 3,
          explanation:
            "The left ventricle has the thickest myocardial wall because it must generate sufficient pressure to pump oxygenated blood through the entire systemic circulation — from the aorta to the capillaries of every organ. The right ventricle only needs to pump blood the short distance to the lungs.",
        },
      ],
    },
    // ── Lesson 2.2 ──
    {
      id: "m2-l2",
      title: "Blood Pressure, the Cardiac Cycle & Electrical Conduction",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Cardiac Cycle: Systole and Diastole",
        },
        {
          type: "text",
          body: "Each heartbeat represents one complete cardiac cycle — a coordinated sequence of contraction (systole) and relaxation (diastole). During systole, the ventricles contract, forcing blood into the pulmonary artery and aorta. During diastole, the ventricles relax and fill with blood from the atria. A normal resting heart rate of 60-100 beats per minute means this cycle repeats about 100,000 times per day.",
        },
        {
          type: "key-term",
          term: "Blood Pressure",
          definition:
            "The force exerted by circulating blood on the walls of blood vessels, measured in millimetres of mercury (mmHg). It is expressed as systolic pressure (during ventricular contraction) over diastolic pressure (during ventricular relaxation). Normal blood pressure is approximately 120/80 mmHg. Persistent readings above 140/90 mmHg indicate hypertension.",
        },
        {
          type: "heading",
          level: 3,
          text: "Blood Pressure Regulation",
        },
        {
          type: "text",
          body: "Blood pressure is determined by two main factors: cardiac output (the volume of blood the heart pumps per minute) and peripheral vascular resistance (the resistance to blood flow in the arterial system). The body regulates blood pressure through multiple mechanisms: the autonomic nervous system (sympathetic stimulation increases heart rate and vasoconstriction), the renin-angiotensin-aldosterone system (RAAS — controls fluid volume and vessel tone), and local factors like nitric oxide (a vasodilator). Antihypertensive drugs target one or more of these regulatory systems.",
        },
        {
          type: "text",
          body: "The renin-angiotensin-aldosterone system (RAAS) is particularly important for Caribbean pharmacy practice because the three most commonly prescribed antihypertensive drug classes — ACE inhibitors (-pril), ARBs (-sartan), and thiazide diuretics — all interact with this system. When the kidneys detect low blood pressure, they release renin, which converts angiotensinogen to angiotensin I. ACE then converts angiotensin I to angiotensin II, a potent vasoconstrictor. ACE inhibitors block this conversion; ARBs block the angiotensin II receptor directly.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Electrical Conduction System",
        },
        {
          type: "text",
          body: "The heart generates its own electrical impulses. The sinoatrial (SA) node, located in the right atrium, acts as the natural pacemaker, initiating each heartbeat at 60-100 impulses per minute. The electrical signal travels through the atria to the atrioventricular (AV) node, which briefly delays the signal (allowing the atria to finish contracting), then passes through the bundle of His and Purkinje fibres to trigger ventricular contraction. Disturbances in this conduction system cause arrhythmias — irregular heart rhythms that may require antiarrhythmic medications such as amiodarone, digoxin, or verapamil.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Hypertension: The 'Silent Killer' in the Caribbean",
          body: "Hypertension often produces no symptoms until it causes organ damage. In the Caribbean, many patients only discover their hypertension when they present with a stroke, heart failure, or kidney disease. PAHO estimates that hypertension prevalence exceeds 30% in most CARICOM nations, with Trinidad & Tobago and Barbados among the worst affected. This is why blood pressure screening at community pharmacies is a critical public health intervention.",
        },
        {
          type: "table",
          caption: "Blood Pressure Classification (JNC/PAHO Guidelines)",
          headers: ["Category", "Systolic (mmHg)", "Diastolic (mmHg)", "Action"],
          rows: [
            ["Normal", "< 120", "< 80", "Reassess in 1-2 years"],
            ["Elevated", "120-129", "< 80", "Lifestyle modification"],
            ["Stage 1 Hypertension", "130-139", "80-89", "Lifestyle modification ± medication"],
            ["Stage 2 Hypertension", "≥ 140", "≥ 90", "Medication + lifestyle modification"],
            ["Hypertensive Crisis", "> 180", "> 120", "Immediate medical attention required"],
          ],
        },
        {
          type: "knowledge-check",
          question: "The renin-angiotensin-aldosterone system (RAAS) is targeted by which of the following drug classes?",
          options: [
            "Beta-blockers and calcium channel blockers",
            "ACE inhibitors and ARBs",
            "Statins and fibrates",
            "Diuretics and anticoagulants",
          ],
          correctIndex: 1,
          explanation:
            "ACE inhibitors (e.g. enalapril, lisinopril) block the enzyme that converts angiotensin I to angiotensin II. ARBs (e.g. losartan, valsartan) block the angiotensin II receptor. Both classes directly target the RAAS pathway. While thiazide diuretics also interact with RAAS indirectly, ACE inhibitors and ARBs are the primary RAAS-targeting drugs.",
        },
      ],
    },
    // ── Lesson 2.3 ──
    {
      id: "m2-l3",
      title: "Hypertension, Heart Failure & Coronary Artery Disease",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Big Three: Cardiovascular Conditions in the Caribbean",
        },
        {
          type: "text",
          body: "Three cardiovascular conditions dominate Caribbean healthcare: hypertension, heart failure, and coronary artery disease. Together, they account for the majority of cardiovascular prescriptions that pass through Caribbean pharmacies. Understanding the pathophysiology of each condition helps pharmacy technicians appreciate why specific drug classes are prescribed, why combination therapy is often necessary, and why medication adherence is literally a life-or-death matter for these patients.",
        },
        {
          type: "heading",
          level: 3,
          text: "Hypertension (High Blood Pressure)",
        },
        {
          type: "text",
          body: "Hypertension is defined as persistently elevated blood pressure (≥ 140/90 mmHg by most Caribbean guidelines, or ≥ 130/80 mmHg by newer ACC/AHA guidelines). It is classified as either primary (essential) hypertension — which accounts for 90-95% of cases and has no identifiable cause — or secondary hypertension, caused by an underlying condition such as renal artery stenosis, pheochromocytoma, or Cushing syndrome. In the Caribbean, primary hypertension is overwhelmingly predominant, driven by genetic predisposition, high-sodium diets, obesity, physical inactivity, and psychosocial stress.",
        },
        {
          type: "island-comparison",
          title: "Hypertension Prevalence Across the Caribbean",
          description:
            "Hypertension rates vary across CARICOM nations but are universally high. This comparison illustrates the scale of the public health challenge that pharmacy technicians help address daily.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Hypertension prevalence estimated at 26-30% of adults (PAHO/CARPHA data)",
                "CDAP provides free antihypertensives: amlodipine, enalapril, atenolol, hydrochlorothiazide",
                "Strong Indo-Trinidadian genetic predisposition contributes to high rates",
                "High dietary salt intake from traditional foods (doubles, pelau, stewed meats)",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Hypertension prevalence among the highest in the Americas at 25-35%",
                "NHF (National Health Fund) subsidises antihypertensives through the individual benefits programme",
                "African-Caribbean genetic factors contribute significantly",
                "Jamaica Health and Lifestyle Survey data drives national policy",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Hypertension prevalence estimated at 30-40% in adults",
                "Barbados Drug Service supplies medications through polyclinics and Queen Elizabeth Hospital",
                "Barbados National Registry of Chronic Non-Communicable Diseases tracks prevalence",
                "Small island size enables relatively good screening coverage",
              ],
            },
            {
              name: "Grenada",
              flag: "🇬🇩",
              details: [
                "Hypertension increasingly recognised as a major health challenge",
                "Limited local pharmaceutical manufacturing — relies on OECS Pharmaceutical Procurement",
                "St. George's University Medical School contributes to local health research",
                "Community health centres are primary access points for medication",
              ],
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Heart Failure",
        },
        {
          type: "text",
          body: "Heart failure occurs when the heart cannot pump blood efficiently enough to meet the body's demands. It is not a sudden event but a chronic, progressive condition — often the end result of years of poorly controlled hypertension or coronary artery disease. In left-sided heart failure, fluid backs up into the lungs (pulmonary oedema), causing dyspnoea. In right-sided heart failure, fluid accumulates in the peripheral tissues, causing oedema in the ankles and legs. Heart failure treatment typically involves ACE inhibitors or ARBs, beta-blockers (specifically carvedilol, bisoprolol, or metoprolol succinate), diuretics (furosemide), and in some cases digoxin or spironolactone.",
        },
        {
          type: "heading",
          level: 3,
          text: "Coronary Artery Disease (CAD)",
        },
        {
          type: "text",
          body: "Coronary artery disease results from atherosclerosis — the buildup of fatty plaques within the coronary arteries that supply blood to the heart muscle. As plaques narrow the arteries, blood flow to the myocardium is reduced, causing angina (chest pain on exertion). If a plaque ruptures and a blood clot forms, it can completely occlude the artery, causing a myocardial infarction (heart attack). Long-term management of CAD includes aspirin (antiplatelet), statins (cholesterol-lowering), beta-blockers, ACE inhibitors, and nitroglycerin (for acute angina relief).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Caribbean Combination",
          body: "Caribbean patients with cardiovascular disease are rarely on a single medication. A typical patient might take: amlodipine 10 mg (calcium channel blocker) + losartan 50 mg (ARB) + hydrochlorothiazide 25 mg (thiazide diuretic) + atorvastatin 20 mg (statin) + aspirin 81 mg (antiplatelet). Understanding why each drug is present — and which body system it targets — is fundamental to safe dispensing.",
        },
        {
          type: "key-term",
          term: "Atherosclerosis",
          definition:
            "A chronic disease characterised by the buildup of fatty plaques (atheromas) within the walls of arteries, leading to narrowing, reduced blood flow, and risk of thrombus formation. Atherosclerosis is the underlying cause of most myocardial infarctions and many strokes. Risk factors highly prevalent in the Caribbean include hypertension, diabetes, hyperlipidaemia, smoking, and obesity.",
        },
        {
          type: "knowledge-check",
          question: "A patient with heart failure is prescribed furosemide. What is the primary purpose of this medication in heart failure?",
          options: [
            "To strengthen the heart muscle contraction",
            "To remove excess fluid from the body",
            "To lower cholesterol levels",
            "To prevent blood clot formation",
          ],
          correctIndex: 1,
          explanation:
            "Furosemide is a loop diuretic. In heart failure, the heart's reduced pumping efficiency causes fluid retention (oedema). Furosemide acts on the kidneys to increase urine output, removing excess fluid and reducing the workload on the heart. It provides symptomatic relief of dyspnoea and peripheral oedema.",
        },
      ],
    },
    // ── Lesson 2.4 ──
    {
      id: "m2-l4",
      title: "Sickle Cell Disease & Blood Disorders in Caribbean Populations",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Sickle Cell Disease: A Caribbean Perspective",
        },
        {
          type: "text",
          body: "Sickle cell disease (SCD) is an inherited blood disorder caused by a mutation in the gene for haemoglobin, the oxygen-carrying protein in red blood cells. In SCD, abnormal haemoglobin S (HbS) causes red blood cells to become rigid and sickle-shaped under low-oxygen conditions. These sickle cells can block small blood vessels (vaso-occlusion), causing severe pain crises, organ damage, and a shortened life expectancy. The sickle cell gene is particularly prevalent in populations of African, Caribbean, and Mediterranean descent.",
        },
        {
          type: "text",
          body: "The Caribbean has one of the highest prevalence rates of sickle cell disease in the world. Approximately 1 in 150 to 1 in 300 births in Jamaica are affected by SCD, and the sickle cell trait (carrier status) affects approximately 10% of the Afro-Caribbean population. This makes sickle cell disease a major clinical reality for Caribbean pharmacy technicians — you will regularly handle prescriptions for hydroxyurea, folic acid, penicillin V prophylaxis, and strong analgesics (including opioids) for pain crisis management.",
        },
        {
          type: "key-term",
          term: "Haemoglobin S (HbS)",
          definition:
            "The abnormal form of haemoglobin found in sickle cell disease. HbS results from a single amino acid substitution (glutamic acid replaced by valine at position 6 of the beta-globin chain). Under low-oxygen conditions, HbS molecules polymerise, distorting the red blood cell into a rigid, sickle shape that obstructs capillary blood flow.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Jamaica: A World Leader in Sickle Cell Research",
          body: "The Sickle Cell Unit at the University of the West Indies, Mona (Jamaica) has been a global leader in SCD research since its founding in 1973 by Professor Graham Serjeant. The Jamaica Sickle Cell Cohort Study — tracking patients from birth — has contributed enormously to understanding the natural history of SCD. Jamaica's newborn screening programme, one of the earliest in the developing world, has significantly improved SCD outcomes through early detection and prophylactic penicillin.",
        },
        {
          type: "table",
          caption: "Medications Commonly Used in Sickle Cell Disease Management",
          headers: ["Medication", "Purpose", "Pharmacy Notes"],
          rows: [
            ["Hydroxyurea", "Reduces frequency and severity of pain crises by increasing foetal haemoglobin (HbF)", "Cytotoxic drug — handle with care; pregnancy category X; regular blood count monitoring required"],
            ["Folic acid 5 mg daily", "Supports red blood cell production to compensate for chronic haemolysis", "Often dispensed continuously; counsel on importance of adherence"],
            ["Penicillin V prophylaxis", "Prevents pneumococcal infections (splenic dysfunction in SCD)", "Critical in children — often continued until at least age 5; missed doses increase infection risk"],
            ["Paracetamol / NSAIDs", "Mild-to-moderate pain during vaso-occlusive episodes", "Avoid exceeding paracetamol 4 g/day; NSAIDs require caution with renal impairment"],
            ["Opioid analgesics (morphine, tramadol)", "Severe vaso-occlusive pain crises", "Controlled substances — strict documentation; patient may have tolerance from chronic use — not necessarily drug-seeking behaviour"],
            ["L-glutamine (Endari)", "Reduces oxidative stress in sickle cells", "Newer therapy; may not yet be widely available on Caribbean formularies"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Stigma Alert: Pain Crisis and Opioids",
          body: "Sickle cell patients presenting at pharmacies during a pain crisis may request strong analgesics, including opioids. Pharmacy staff must not assume drug-seeking behaviour. SCD pain crises are among the most severe pain conditions known to medicine. Patients may have developed physiological tolerance to opioids due to repeated crises — this is not the same as addiction. Treat every sickle cell patient with dignity and urgency.",
        },
        {
          type: "case-study",
          title: "Case Study: Managing Sickle Cell Prescriptions",
          scenario:
            "A 22-year-old woman presents at your pharmacy in Kingston, Jamaica with prescriptions for hydroxyurea 500 mg daily, folic acid 5 mg daily, and penicillin V 250 mg twice daily. She mentions she is thinking about becoming pregnant in the next year. She has sickle cell disease (HbSS) and has been stable on this regimen for two years.",
          questions: [
            "Why is the combination of hydroxyurea, folic acid, and penicillin V appropriate for this patient?",
            "What critical counselling point must be communicated regarding her pregnancy plans and hydroxyurea?",
            "What role does the pharmacy technician play in flagging this issue?",
          ],
          discussion:
            "Hydroxyurea is category X in pregnancy — it is teratogenic and must be discontinued well before conception. The pharmacy technician should flag this immediately to the supervising pharmacist when the patient mentions pregnancy plans. The pharmacist would counsel the patient to use effective contraception while on hydroxyurea and refer her back to her haematologist to discuss pre-conception planning. Folic acid and penicillin V are safe in pregnancy and would likely continue. This case illustrates how attentive listening by pharmacy technicians — even during routine dispensing — can prevent serious harm.",
        },
        {
          type: "knowledge-check",
          question: "Approximately what percentage of the Afro-Caribbean population carries the sickle cell trait?",
          options: [
            "1%",
            "5%",
            "10%",
            "25%",
          ],
          correctIndex: 2,
          explanation:
            "Approximately 10% of the Afro-Caribbean population carries the sickle cell trait (HbAS — one copy of the sickle gene). Carriers are generally asymptomatic but can pass the gene to their children. If both parents are carriers, there is a 25% chance with each pregnancy that the child will have sickle cell disease (HbSS).",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m2-q1",
      question: "How many chambers does the human heart contain?",
      options: ["Two", "Three", "Four", "Five"],
      correctIndex: 2,
      explanation:
        "The human heart has four chambers: the right atrium, right ventricle, left atrium, and left ventricle. The atria receive blood; the ventricles pump blood out of the heart.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q2",
      question: "The mitral valve is located between which two structures?",
      options: [
        "Right atrium and right ventricle",
        "Left atrium and left ventricle",
        "Right ventricle and pulmonary artery",
        "Left ventricle and aorta",
      ],
      correctIndex: 1,
      explanation:
        "The mitral (bicuspid) valve is located between the left atrium and the left ventricle. It prevents backflow of blood from the ventricle into the atrium during systole. The mitral valve is the most commonly affected valve in valvular heart disease.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q3",
      question: "Which physiological system is directly targeted by both ACE inhibitors (-pril) and ARBs (-sartan)?",
      options: [
        "The sympathetic nervous system",
        "The renin-angiotensin-aldosterone system (RAAS)",
        "The arachidonic acid pathway",
        "The hepatic cytochrome P450 system",
      ],
      correctIndex: 1,
      explanation:
        "Both ACE inhibitors and ARBs target the renin-angiotensin-aldosterone system (RAAS). ACE inhibitors block the conversion of angiotensin I to angiotensin II; ARBs block the angiotensin II type 1 receptor. Together, these two drug classes account for a substantial proportion of antihypertensive prescriptions in the Caribbean.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q4",
      question: "In the context of sickle cell disease, hydroxyurea works by:",
      options: [
        "Replacing abnormal haemoglobin S with normal haemoglobin A",
        "Increasing production of foetal haemoglobin (HbF) to reduce sickling",
        "Dissolving blood clots in blocked capillaries",
        "Providing extra iron for haemoglobin production",
      ],
      correctIndex: 1,
      explanation:
        "Hydroxyurea increases the production of foetal haemoglobin (HbF), which does not polymerise like HbS. Higher HbF levels dilute the proportion of HbS in red blood cells, reducing sickling, vaso-occlusion, and the frequency of pain crises. It does not replace HbS or provide iron.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q5",
      question: "A blood pressure reading of 155/98 mmHg would be classified as:",
      options: [
        "Elevated blood pressure",
        "Stage 1 Hypertension",
        "Stage 2 Hypertension",
        "Hypertensive crisis",
      ],
      correctIndex: 2,
      explanation:
        "A reading of 155/98 mmHg (systolic ≥ 140, diastolic ≥ 90) is classified as Stage 2 Hypertension. This typically requires medication in addition to lifestyle modification. In the Caribbean, this classification warrants referral to a physician and is well above the threshold for treatment.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q6",
      question: "The sinoatrial (SA) node is often called the heart's natural pacemaker because it:",
      options: [
        "Is the largest node in the heart",
        "Initiates each electrical impulse that triggers a heartbeat",
        "Prevents arrhythmias from occurring",
        "Regulates blood pressure directly",
      ],
      correctIndex: 1,
      explanation:
        "The SA node, located in the right atrium, spontaneously generates electrical impulses at a rate of 60-100 per minute at rest. This intrinsic automaticity makes it the natural pacemaker of the heart. All other cardiac tissue follows the SA node's rhythm under normal conditions.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q7",
      question: "Which of the following are risk factors for coronary artery disease that are highly prevalent in Caribbean populations? Select ALL that apply.",
      options: [
        "Hypertension",
        "Type 2 diabetes",
        "High dietary salt intake",
        "Hypothermia",
        "Hyperlipidaemia",
      ],
      correctIndex: 0,
      explanation:
        "Hypertension, type 2 diabetes, high dietary salt intake, and hyperlipidaemia are all major risk factors for coronary artery disease and are highly prevalent across the Caribbean. Hypothermia is not a cardiovascular risk factor and is rarely encountered in tropical climates.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 2, 4],
      },
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m2-q8",
      question: "Atherosclerosis is best described as:",
      options: [
        "An inflammation of the heart valves caused by bacterial infection",
        "A buildup of fatty plaques within artery walls leading to narrowing",
        "An inherited condition causing abnormally shaped red blood cells",
        "A rapid, irregular heartbeat originating in the atria",
      ],
      correctIndex: 1,
      explanation:
        "Atherosclerosis is a chronic disease characterised by the buildup of fatty plaques (atheromas) within arterial walls. Over time, these plaques narrow the artery, restrict blood flow, and may rupture, triggering blood clot formation. It is the underlying pathology in most cases of coronary artery disease and many strokes.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q9",
      question: "A sickle cell patient in pain crisis requesting opioid analgesics should be assumed to be drug-seeking.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 1,
      explanation:
        "False. Sickle cell vaso-occlusive crises produce some of the most severe pain known to medicine. Patients may have physiological tolerance to opioids due to repeated crises — this is not addiction. Assuming drug-seeking behaviour is stigmatising, unethical, and can lead to inadequate pain management. Every sickle cell patient should be treated with dignity and clinical urgency.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m2-q10",
      question: "A pharmacy in Port of Spain receives a prescription for a patient: amlodipine 10 mg daily, losartan 50 mg daily, hydrochlorothiazide 25 mg daily, atorvastatin 20 mg daily, and aspirin 81 mg daily. What condition is most likely being managed?",
      options: [
        "Type 1 diabetes",
        "Asthma",
        "Cardiovascular disease with hypertension and hyperlipidaemia",
        "Sickle cell disease",
      ],
      correctIndex: 2,
      explanation:
        "This is a classic cardiovascular combination: amlodipine (calcium channel blocker for BP), losartan (ARB for BP), hydrochlorothiazide (diuretic for BP), atorvastatin (statin for cholesterol), and aspirin (antiplatelet for cardiovascular protection). This polypharmacy regimen is extremely common in Caribbean patients with established cardiovascular disease.",
      questionType: "scenario",
      questionData: {
        context: "Community pharmacy in Port of Spain, Trinidad. A regular patient with multiple chronic conditions.",
      },
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
  ],
};

// ============================================================================
// MODULE 3 — The Respiratory, Digestive & Renal Systems
// ============================================================================

const module3: Module = {
  id: "m3-respiratory-digestive-renal",
  number: 3,
  title: "The Respiratory, Digestive & Renal Systems",
  description:
    "Explore three body systems that pharmacy technicians encounter daily through high-volume medications: inhalers and nebuliser solutions for the respiratory system, PPIs and antacids for the digestive system, and diuretics and renal-dose adjustments for the urinary system. Each system is studied with Caribbean disease patterns and formulary context.",
  learningObjectives: [
    "Describe the anatomy and physiology of the respiratory, digestive, and renal systems",
    "Explain the pathophysiology of asthma, COPD, GORD, peptic ulcer disease, and chronic kidney disease",
    "Identify how common Caribbean medications act on each system",
    "Analyse the relevance of renal function to drug dosing in pharmacy practice",
    "Evaluate the impact of tropical climate on respiratory and gastrointestinal conditions in the Caribbean",
  ],
  lessons: [
    // ── Lesson 3.1 ──
    {
      id: "m3-l1",
      title: "Respiratory Anatomy: Airways, Lungs & Gas Exchange",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Respiratory System: Structure and Function",
        },
        {
          type: "text",
          body: "The respiratory system is responsible for gas exchange — delivering oxygen to the blood and removing carbon dioxide. It consists of the upper respiratory tract (nose, nasal cavity, pharynx, larynx) and the lower respiratory tract (trachea, bronchi, bronchioles, and alveoli within the lungs). Air enters through the nose or mouth, travels down the trachea, which divides into the right and left main bronchi at the carina. Each bronchus subdivides into progressively smaller bronchioles, eventually terminating in clusters of alveoli — tiny air sacs where gas exchange occurs.",
        },
        {
          type: "text",
          body: "The lungs are paired organs located in the thoracic cavity, protected by the rib cage. The right lung has three lobes; the left lung has two lobes (accommodating the heart). The lungs are surrounded by a double-layered membrane called the pleura. Between the alveoli and the pulmonary capillaries lies an extremely thin respiratory membrane (approximately 0.5 micrometres) across which oxygen diffuses into the blood and carbon dioxide diffuses out.",
        },
        {
          type: "key-term",
          term: "Alveoli",
          definition:
            "Microscopic air sacs at the terminal ends of the bronchial tree where gas exchange occurs. Each lung contains approximately 300 million alveoli, providing an enormous surface area (roughly 70 square metres — the size of a tennis court) for efficient oxygen and carbon dioxide exchange. Destruction of alveoli is the hallmark of emphysema (a form of COPD).",
        },
        {
          type: "key-term",
          term: "Bronchospasm",
          definition:
            "Sudden constriction of the smooth muscle in the walls of the bronchioles, causing narrowing of the airways and difficulty breathing. Bronchospasm is the primary mechanism of asthma attacks and is reversed by bronchodilator medications such as salbutamol (albuterol). The term breaks down as: bronch/o (bronchial tube) + spasm (involuntary contraction).",
        },
        {
          type: "callout",
          variant: "info",
          title: "Respiratory Conditions in the Caribbean",
          body: "Asthma prevalence in the Caribbean is among the highest globally. Trinidad & Tobago, Jamaica, and Barbados all report elevated asthma rates, particularly in children. Contributing factors include indoor mould exposure (tropical humidity), outdoor air pollution, and genetic predisposition. Respiratory infections are also common, exacerbated by seasonal dengue outbreaks that can present with respiratory symptoms and complicate differential diagnosis.",
        },
        {
          type: "table",
          caption: "Key Structures of the Respiratory System",
          headers: ["Structure", "Function", "Pharmacy Relevance"],
          rows: [
            ["Nasal cavity", "Warms, humidifies, and filters inhaled air", "Nasal sprays (fluticasone, oxymetazoline) act here"],
            ["Pharynx & Larynx", "Passageway for air; voice production", "Inhaled corticosteroids can cause oral candidiasis — counsel to rinse mouth after use"],
            ["Trachea", "Conducts air to the lungs; lined with ciliated mucosa", "Cilia damaged by smoking — reduces mucociliary clearance"],
            ["Bronchi & Bronchioles", "Branch into smaller airways; smooth muscle controls diameter", "Bronchodilators (salbutamol) relax smooth muscle; anticholinergics (ipratropium) prevent constriction"],
            ["Alveoli", "Site of gas exchange", "Destroyed in emphysema — irreversible; oxygen therapy may be needed"],
          ],
        },
        {
          type: "knowledge-check",
          question: "What is the primary function of the alveoli?",
          options: [
            "To produce mucus that traps inhaled particles",
            "To warm and humidify incoming air",
            "To exchange oxygen and carbon dioxide between air and blood",
            "To generate the sounds used in speech",
          ],
          correctIndex: 2,
          explanation:
            "The alveoli are the sites of gas exchange in the lungs. Oxygen diffuses from the alveolar air into the pulmonary capillary blood, while carbon dioxide diffuses from the blood into the alveolar air for exhalation. This exchange occurs across the extremely thin respiratory membrane.",
        },
      ],
    },
    // ── Lesson 3.2 ──
    {
      id: "m3-l2",
      title: "Asthma, COPD & Respiratory Medications",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Obstructive Airway Diseases: Asthma and COPD",
        },
        {
          type: "text",
          body: "Asthma and chronic obstructive pulmonary disease (COPD) are the two most common chronic respiratory conditions encountered in Caribbean pharmacy practice. Both involve obstruction of airflow, but they differ significantly in their underlying pathophysiology, patient demographics, and treatment approaches.",
        },
        {
          type: "text",
          body: "Asthma is a chronic inflammatory airway disease characterised by reversible bronchospasm, airway inflammation, and mucus hypersecretion. It typically begins in childhood and is triggered by allergens (dust mites, mould, pollen), exercise, cold air, or respiratory infections. In the Caribbean, mould exposure from tropical humidity is a major trigger. Asthma is reversible — with appropriate treatment, airways can return to near-normal function.",
        },
        {
          type: "text",
          body: "COPD, by contrast, is a progressive disease characterised by irreversible airflow limitation. It encompasses two main conditions: chronic bronchitis (persistent inflammation and mucus production in the bronchi) and emphysema (destruction of alveolar walls, reducing gas exchange surface area). COPD is overwhelmingly caused by long-term smoking, though occupational exposures and indoor cooking fumes also contribute. COPD is not reversible — treatment aims to slow progression and manage symptoms.",
        },
        {
          type: "table",
          caption: "Asthma vs COPD Comparison",
          headers: ["Feature", "Asthma", "COPD"],
          rows: [
            ["Age of onset", "Usually childhood/adolescence", "Usually after age 40"],
            ["Primary cause", "Allergic/inflammatory — often genetic", "Smoking (85-90% of cases)"],
            ["Airflow obstruction", "Reversible", "Largely irreversible"],
            ["Key pathology", "Bronchospasm, inflammation, mucus", "Alveolar destruction, chronic inflammation"],
            ["Trigger response", "Episodic — attacks with symptom-free intervals", "Persistent — progressive worsening"],
            ["Key reliever drug", "Salbutamol (SABA)", "Salbutamol + ipratropium"],
            ["Key controller drug", "Inhaled corticosteroid (beclometasone, fluticasone)", "LABA + LAMA ± inhaled corticosteroid"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Respiratory Medications: What You Will Dispense",
        },
        {
          type: "text",
          body: "Respiratory medications are among the highest-volume items in Caribbean pharmacies. They fall into several categories: short-acting beta-2 agonists (SABAs) like salbutamol for acute relief; long-acting beta-2 agonists (LABAs) like salmeterol for maintenance; inhaled corticosteroids (ICS) like beclometasone and fluticasone for inflammation control; anticholinergics like ipratropium and tiotropium; and combination inhalers that combine two or three drug classes in one device.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Inhaler Technique Matters",
          body: "Studies consistently show that up to 70-80% of patients use their inhalers incorrectly, drastically reducing medication delivery to the lungs. While patient counselling on inhaler technique is formally the pharmacist's role, pharmacy technicians who understand how inhalers work can reinforce good technique and identify patients who appear to be struggling. Metered-dose inhalers (MDIs) require a 'slow, steady breath in' with coordination; dry-powder inhalers (DPIs) require a 'fast, deep breath in' — the techniques are opposite.",
        },
        {
          type: "key-term",
          term: "Bronchodilator",
          definition:
            "A medication that relaxes the smooth muscle surrounding the bronchioles, widening the airways and improving airflow. Short-acting bronchodilators (salbutamol) provide quick relief during an asthma attack. Long-acting bronchodilators (salmeterol, formoterol) provide sustained airway opening for maintenance therapy. The term breaks down as: bronch/o (bronchial tube) + dilator (widener).",
        },
        {
          type: "knowledge-check",
          question: "Which statement about COPD is correct?",
          options: [
            "COPD is fully reversible with appropriate treatment",
            "COPD is primarily caused by allergic responses to dust mites",
            "COPD involves irreversible airflow limitation, mainly caused by smoking",
            "COPD typically begins in childhood",
          ],
          correctIndex: 2,
          explanation:
            "COPD is characterised by irreversible airflow limitation and is primarily caused by long-term cigarette smoking (85-90% of cases). Unlike asthma, the lung damage in COPD (particularly alveolar destruction in emphysema) cannot be reversed. Treatment focuses on slowing disease progression, managing symptoms, and preventing exacerbations.",
        },
      ],
    },
    // ── Lesson 3.3 ──
    {
      id: "m3-l3",
      title: "The Digestive System: Anatomy, GORD & Peptic Ulcer Disease",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Gastrointestinal Tract: From Mouth to Anus",
        },
        {
          type: "text",
          body: "The digestive system is a continuous muscular tube (the gastrointestinal tract or GI tract) approximately 9 metres long in adults, extending from the mouth to the anus. Its primary functions are ingestion, mechanical and chemical digestion, absorption of nutrients, and elimination of waste. The major organs include the oral cavity, oesophagus, stomach, small intestine (duodenum, jejunum, ileum), large intestine (caecum, colon, rectum), and anus. Accessory organs — the liver, gallbladder, and pancreas — produce digestive enzymes and bile that are secreted into the GI tract.",
        },
        {
          type: "text",
          body: "For pharmacy technicians, the digestive system is relevant on multiple levels. Many medications are administered orally and must survive the acidic stomach environment to be absorbed in the intestines. Many drugs cause GI side effects (nausea, diarrhoea, constipation). Several common conditions — gastro-oesophageal reflux disease (GORD), peptic ulcer disease, and irritable bowel syndrome — generate a high volume of prescriptions and OTC sales.",
        },
        {
          type: "heading",
          level: 3,
          text: "Gastro-oesophageal Reflux Disease (GORD)",
        },
        {
          type: "text",
          body: "GORD occurs when the lower oesophageal sphincter (LES) — the muscular valve between the oesophagus and stomach — fails to close properly, allowing stomach acid to reflux into the oesophagus. This causes heartburn (a burning sensation behind the sternum), regurgitation, and, if chronic, damage to the oesophageal lining (oesophagitis). GORD is extremely common in the Caribbean, partly due to dietary factors (spicy foods, carbonated drinks, late-night eating) and high obesity rates.",
        },
        {
          type: "key-term",
          term: "Proton Pump Inhibitor (PPI)",
          definition:
            "A class of drugs that irreversibly blocks the hydrogen-potassium ATPase enzyme system (the 'proton pump') in the gastric parietal cells, reducing stomach acid production by up to 90%. PPIs include omeprazole, pantoprazole, esomeprazole, and lansoprazole. They are identified by the drug name stem '-prazole' and are among the most dispensed medication classes in Caribbean pharmacies.",
        },
        {
          type: "heading",
          level: 3,
          text: "Peptic Ulcer Disease",
        },
        {
          type: "text",
          body: "Peptic ulcers are erosions of the mucosal lining of the stomach (gastric ulcer) or duodenum (duodenal ulcer). The two primary causes are infection with Helicobacter pylori (H. pylori) bacteria and chronic use of non-steroidal anti-inflammatory drugs (NSAIDs) such as ibuprofen and diclofenac. In the Caribbean, high NSAID use for chronic pain conditions and musculoskeletal complaints contributes significantly to peptic ulcer prevalence. Treatment of H. pylori involves triple therapy: a PPI plus two antibiotics (typically amoxicillin and clarithromycin).",
        },
        {
          type: "callout",
          variant: "warning",
          title: "NSAID Use in the Caribbean — A Double-Edged Sword",
          body: "NSAIDs like ibuprofen and diclofenac are widely available over the counter in Caribbean pharmacies and are heavily used for pain relief. However, chronic NSAID use is a major cause of peptic ulcers and GI bleeding, and also worsens kidney function and increases cardiovascular risk. Pharmacy technicians should be aware that patients buying NSAIDs regularly may need counselling about safer alternatives — the pharmacist can advise on paracetamol or topical NSAIDs as lower-risk options.",
        },
        {
          type: "table",
          caption: "Common GI Medications in Caribbean Pharmacy Practice",
          headers: ["Drug Class", "Examples", "Mechanism", "Common Use"],
          rows: [
            ["Proton pump inhibitors", "Omeprazole, pantoprazole", "Block gastric proton pump → reduce acid secretion", "GORD, peptic ulcers, H. pylori eradication"],
            ["H2-receptor antagonists", "Ranitidine*, famotidine", "Block histamine H2 receptors → reduce acid secretion", "Mild GORD, acid indigestion (*ranitidine withdrawn in many markets due to NDMA)"],
            ["Antacids", "Aluminium hydroxide, magnesium hydroxide", "Neutralise existing stomach acid directly", "Immediate heartburn relief"],
            ["Antiemetics", "Metoclopramide, ondansetron", "Block dopamine/serotonin receptors in the vomiting centre", "Nausea and vomiting — high demand during dengue season"],
            ["Antidiarrhoeals", "Loperamide", "Reduce gut motility", "Acute diarrhoea — common in tropical settings"],
            ["Oral rehydration salts (ORS)", "WHO-formula ORS", "Replace fluids and electrolytes", "Diarrhoeal illness — a Caribbean pharmacy staple"],
          ],
        },
        {
          type: "knowledge-check",
          question: "What are the two primary causes of peptic ulcer disease?",
          options: [
            "Stress and spicy food",
            "Helicobacter pylori infection and chronic NSAID use",
            "Alcohol consumption and smoking",
            "Paracetamol overdose and dehydration",
          ],
          correctIndex: 1,
          explanation:
            "The two primary causes of peptic ulcer disease are H. pylori infection and chronic NSAID use. While stress, spicy food, alcohol, and smoking may worsen symptoms, they are not primary causes. This distinction is clinically important because treatment involves either H. pylori eradication therapy or NSAID cessation, alongside acid suppression with PPIs.",
        },
      ],
    },
    // ── Lesson 3.4 ──
    {
      id: "m3-l4",
      title: "The Renal System: Kidney Function & Drug Dosing",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Kidneys: Filtration, Regulation & Drug Elimination",
        },
        {
          type: "text",
          body: "The kidneys are paired, bean-shaped organs located retroperitoneally (behind the peritoneum) in the posterior abdominal cavity. Each kidney is approximately 12 cm long and weighs about 150 grams. Despite their small size, the kidneys receive approximately 20-25% of the cardiac output — over a litre of blood per minute flows through them. This massive blood flow enables their primary function: filtering blood to remove waste products, excess fluid, and electrolytes, producing urine for excretion.",
        },
        {
          type: "text",
          body: "Each kidney contains approximately one million functional units called nephrons. Each nephron consists of a glomerulus (a tuft of capillaries where blood is filtered) and a tubular system (proximal tubule, loop of Henle, distal tubule, and collecting duct) where the filtrate is modified — useful substances are reabsorbed, waste products are concentrated, and the final urine is produced. The kidneys also play critical roles in blood pressure regulation (via the RAAS system), red blood cell production (via erythropoietin), calcium metabolism (via vitamin D activation), and acid-base balance.",
        },
        {
          type: "key-term",
          term: "Glomerular Filtration Rate (GFR)",
          definition:
            "The volume of fluid filtered by the glomeruli per unit time, normally approximately 120 mL/min in healthy adults. GFR is the gold standard measure of kidney function and is used to stage chronic kidney disease (CKD). Estimated GFR (eGFR) is calculated from serum creatinine, age, sex, and (in some formulae) ethnicity. Many drug doses must be adjusted when eGFR falls below 60 mL/min — a critical consideration for pharmacy technicians during dispensing.",
        },
        {
          type: "heading",
          level: 3,
          text: "Chronic Kidney Disease in the Caribbean",
        },
        {
          type: "text",
          body: "Chronic kidney disease (CKD) is a growing epidemic in the Caribbean, driven primarily by the twin burdens of diabetes and hypertension — both of which damage the kidneys over time. Diabetic nephropathy (kidney damage from diabetes) is the leading cause of end-stage renal disease (ESRD) across CARICOM nations. Many patients with CKD are unaware of their condition until it is advanced, because early stages are often asymptomatic. This is why pharmacy technicians must be vigilant about renal function when processing prescriptions — drugs that are eliminated by the kidneys may accumulate to toxic levels if the dose is not adjusted for reduced kidney function.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Renal Dosing — A Patient Safety Priority",
          body: "Many commonly dispensed drugs require dose reduction in patients with impaired kidney function. Metformin can cause fatal lactic acidosis if GFR is too low. Digoxin accumulates dangerously in renal impairment. NSAIDs should be avoided in CKD as they further damage the kidneys. Even over-the-counter products like magnesium-containing antacids can cause hypermagnesaemia in renal failure. Always check if a prescription includes a note about the patient's renal function, and alert the pharmacist to any concerns.",
        },
        {
          type: "table",
          caption: "Stages of Chronic Kidney Disease",
          headers: ["Stage", "eGFR (mL/min/1.73m²)", "Description", "Pharmacy Implications"],
          rows: [
            ["Stage 1", "≥ 90", "Normal GFR with evidence of kidney damage", "Standard drug dosing; monitor"],
            ["Stage 2", "60-89", "Mildly decreased GFR", "Most drugs still dosed normally; begin monitoring renal-cleared drugs"],
            ["Stage 3a", "45-59", "Mild-to-moderate decrease", "Dose adjustments begin for many drugs"],
            ["Stage 3b", "30-44", "Moderate-to-severe decrease", "Significant dose reductions needed; metformin dose review required"],
            ["Stage 4", "15-29", "Severe decrease", "Many drugs contraindicated; referral to nephrologist"],
            ["Stage 5", "< 15", "Kidney failure (ESRD)", "Dialysis or transplant; extensive drug adjustments"],
          ],
        },
        {
          type: "knowledge-check",
          question: "Why is glomerular filtration rate (GFR) important in pharmacy practice?",
          options: [
            "It determines which inhaler device a patient should use",
            "It measures how well the liver metabolises drugs",
            "It indicates kidney function and guides dose adjustments for renally-cleared drugs",
            "It predicts a patient's risk of developing asthma",
          ],
          correctIndex: 2,
          explanation:
            "GFR is the standard measure of kidney function. Many drugs are eliminated by the kidneys, and when GFR is reduced (in CKD), these drugs accumulate in the body, potentially reaching toxic levels. Pharmacy practice requires dose adjustments based on GFR to prevent adverse effects — making this a critical number for patient safety.",
        },
      ],
    },
    // ── Lesson 3.5 ──
    {
      id: "m3-l5",
      title: "Diuretics & Renal Drug Classes",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Diuretics: Drugs That Act on the Kidneys",
        },
        {
          type: "text",
          body: "Diuretics are medications that increase urine production by acting on different segments of the nephron. They are among the most commonly prescribed drug classes in the Caribbean, used primarily for hypertension and heart failure. Understanding where in the nephron each diuretic class acts explains both their therapeutic effects and their side effects.",
        },
        {
          type: "table",
          caption: "Diuretic Classes: Mechanism and Side Effects",
          headers: ["Class", "Examples", "Site of Action in Nephron", "Key Side Effects"],
          rows: [
            ["Thiazide diuretics", "Hydrochlorothiazide, indapamide", "Distal convoluted tubule", "Hypokalaemia, hyperglycaemia, hyperuricaemia (gout risk)"],
            ["Loop diuretics", "Furosemide, bumetanide", "Loop of Henle (ascending limb)", "Potent fluid loss, hypokalaemia, ototoxicity at high doses"],
            ["Potassium-sparing diuretics", "Spironolactone, amiloride", "Collecting duct", "Hyperkalaemia — dangerous if combined with ACE inhibitors/ARBs without monitoring"],
            ["Osmotic diuretics", "Mannitol", "Proximal tubule and loop of Henle", "Fluid overload initially; hospital use only"],
          ],
        },
        {
          type: "text",
          body: "Thiazide diuretics (particularly hydrochlorothiazide) are a cornerstone of hypertension treatment in the Caribbean. They are affordable, effective, and appear on every regional formulary. Loop diuretics like furosemide are the go-to drugs for removing excess fluid in heart failure and acute pulmonary oedema. Potassium-sparing diuretics like spironolactone are increasingly used in resistant hypertension and heart failure but require careful monitoring because they can cause dangerously high potassium levels (hyperkalaemia).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Electrolyte Monitoring with Diuretics",
          body: "Thiazide and loop diuretics cause potassium loss in the urine, which can lead to hypokalaemia — potentially causing dangerous cardiac arrhythmias. Many prescribers add potassium chloride supplements or a potassium-sparing diuretic to prevent this. When dispensing a diuretic, always check if the patient also has potassium supplementation or a potassium-sparing agent on their profile. If not, flag the concern to the pharmacist.",
        },
        {
          type: "key-term",
          term: "Hypokalaemia",
          definition:
            "Abnormally low potassium levels in the blood (below 3.5 mmol/L). Potassium is essential for normal cardiac muscle function; hypokalaemia can cause muscle weakness, cardiac arrhythmias, and in severe cases, cardiac arrest. Thiazide and loop diuretics are common causes. The term breaks down as: hypo- (low) + kal (potassium, from Latin 'kalium') + -aemia (blood condition).",
        },
        {
          type: "case-study",
          title: "Case Study: The Diuretic Dilemma",
          scenario:
            "Mrs. Persad, a 68-year-old woman from Chaguanas, Trinidad, takes hydrochlorothiazide 25 mg daily for hypertension and enalapril 10 mg daily. She visits your pharmacy complaining of muscle cramps and weakness. She mentions her doctor recently increased her hydrochlorothiazide dose from 12.5 mg to 25 mg. She is not taking any potassium supplement.",
          questions: [
            "Based on the known side effects of hydrochlorothiazide, what electrolyte imbalance might be causing her symptoms?",
            "What is the interaction concern between hydrochlorothiazide (which depletes potassium) and enalapril (an ACE inhibitor, which can raise potassium)?",
            "What action should the pharmacy technician take?",
          ],
          discussion:
            "Mrs. Persad's symptoms of muscle cramps and weakness are classic signs of hypokalaemia, likely worsened by the hydrochlorothiazide dose increase. While enalapril tends to retain potassium (partially offsetting the thiazide effect), the increased diuretic dose may have tipped the balance toward potassium depletion. The pharmacy technician should alert the supervising pharmacist immediately. The pharmacist may recommend the patient see her doctor for potassium level testing and possible supplementation. This case illustrates why understanding drug mechanisms and their physiological effects is essential for safe pharmacy practice.",
        },
        {
          type: "knowledge-check",
          question: "Which class of diuretics acts on the loop of Henle and is used for acute fluid overload in heart failure?",
          options: [
            "Thiazide diuretics",
            "Potassium-sparing diuretics",
            "Loop diuretics",
            "Osmotic diuretics",
          ],
          correctIndex: 2,
          explanation:
            "Loop diuretics (e.g. furosemide, bumetanide) act on the ascending limb of the loop of Henle. They are the most potent diuretics and are the drugs of choice for acute fluid overload in heart failure, producing rapid and substantial diuresis. Their potency also means they can cause significant electrolyte disturbances.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m3-q1",
      question: "Where does gas exchange occur in the respiratory system?",
      options: [
        "In the trachea",
        "In the bronchi",
        "In the alveoli",
        "In the pharynx",
      ],
      correctIndex: 2,
      explanation:
        "Gas exchange occurs in the alveoli — approximately 300 million microscopic air sacs at the terminal ends of the bronchial tree. Oxygen diffuses from alveolar air into the pulmonary capillaries, while carbon dioxide diffuses in the opposite direction.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q2",
      question: "What is the key difference between asthma and COPD regarding airflow obstruction?",
      options: [
        "Asthma obstruction is irreversible; COPD is reversible",
        "Asthma obstruction is reversible; COPD is largely irreversible",
        "Both are equally reversible with proper treatment",
        "Neither condition involves true airflow obstruction",
      ],
      correctIndex: 1,
      explanation:
        "Asthma involves reversible bronchospasm — with treatment, the airways can return to near-normal function. COPD involves largely irreversible airflow limitation due to structural destruction of lung tissue (emphysema) and chronic inflammation (chronic bronchitis). This distinction is fundamental to treatment strategy.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q3",
      question: "Proton pump inhibitors (PPIs) work by:",
      options: [
        "Neutralising stomach acid after it is produced",
        "Blocking histamine H2 receptors on parietal cells",
        "Irreversibly blocking the hydrogen-potassium ATPase enzyme in gastric parietal cells",
        "Forming a protective coating over the stomach lining",
      ],
      correctIndex: 2,
      explanation:
        "PPIs irreversibly block the hydrogen-potassium ATPase enzyme system (the 'proton pump') in gastric parietal cells, which is the final step of acid secretion. This makes them the most effective acid-suppressing drugs, reducing acid production by up to 90%.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q4",
      question: "Which of the following drugs require dose adjustment in chronic kidney disease? Select ALL that apply.",
      options: [
        "Metformin",
        "Digoxin",
        "Paracetamol (at standard doses)",
        "Gentamicin",
        "Amlodipine",
      ],
      correctIndex: 0,
      explanation:
        "Metformin (risk of lactic acidosis), digoxin (narrow therapeutic window, renally cleared), and gentamicin (nephrotoxic and renally cleared) all require dose adjustment in CKD. Paracetamol at standard doses and amlodipine (hepatically cleared) generally do not require renal dose adjustment.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 3],
      },
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q5",
      question: "The functional unit of the kidney is called the ________.",
      options: [
        "nephron",
        "alveolus",
        "neuron",
        "hepatocyte",
      ],
      correctIndex: 0,
      explanation:
        "The nephron is the functional unit of the kidney. Each kidney contains approximately one million nephrons, each consisting of a glomerulus and a tubular system. The nephron performs the kidney's essential functions: filtration, reabsorption, secretion, and excretion.",
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: ["nephron", "the nephron"],
        case_sensitive: false,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q6",
      question: "A patient with GORD is prescribed omeprazole 20 mg daily. This drug belongs to which class?",
      options: [
        "H2-receptor antagonist",
        "Proton pump inhibitor",
        "Antacid",
        "Antiemetic",
      ],
      correctIndex: 1,
      explanation:
        "Omeprazole is a proton pump inhibitor (PPI), identified by the '-prazole' drug name stem. PPIs are the most effective drugs for treating GORD and peptic ulcer disease, and are among the most frequently dispensed medications in Caribbean pharmacies.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q7",
      question: "A common dangerous side effect of thiazide and loop diuretics is:",
      options: [
        "Hyperglycaemia",
        "Hypokalaemia",
        "Liver failure",
        "Visual disturbances",
      ],
      correctIndex: 1,
      explanation:
        "Both thiazide and loop diuretics promote potassium excretion in the urine, leading to hypokalaemia (low blood potassium). Hypokalaemia can cause muscle cramps, weakness, and dangerous cardiac arrhythmias. This is why potassium monitoring and supplementation are important when dispensing these drugs.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q8",
      question: "Place the following structures in the correct order of airflow during inhalation.",
      options: [
        "Nasal cavity / mouth",
        "Pharynx and larynx",
        "Trachea",
        "Bronchi and bronchioles",
        "Alveoli",
      ],
      correctIndex: 0,
      explanation:
        "Air follows this path during inhalation: nasal cavity/mouth → pharynx and larynx → trachea → bronchi and bronchioles → alveoli. This sequence is important for understanding where inhaled medications are deposited and where they exert their effects.",
      questionType: "ordering",
      questionData: {
        correct_order: [0, 1, 2, 3, 4],
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q9",
      question: "A 55-year-old man in Bridgetown, Barbados with Stage 3b CKD (eGFR 35 mL/min) is prescribed metformin 1000 mg twice daily for type 2 diabetes. What concern should the pharmacy technician flag?",
      options: [
        "No concern — metformin is safe at all kidney function levels",
        "Metformin dose should be reviewed as the risk of lactic acidosis increases with reduced kidney function",
        "Metformin should be replaced with insulin immediately",
        "The patient needs a higher dose of metformin to compensate for reduced kidney clearance",
      ],
      correctIndex: 1,
      explanation:
        "At Stage 3b CKD (eGFR 30-44), metformin dose should be reviewed and typically reduced. Below eGFR 30, metformin is generally contraindicated due to the risk of lactic acidosis — a rare but potentially fatal metabolic complication. The pharmacy technician should flag this for pharmacist review immediately.",
      questionType: "scenario",
      questionData: {
        context: "Community pharmacy in Bridgetown, Barbados. A patient with known CKD presents a new prescription.",
      },
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m3-q10",
      question: "Chronic NSAID use is a primary cause of peptic ulcer disease.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 0,
      explanation:
        "True. Chronic NSAID use (ibuprofen, diclofenac, naproxen, etc.) is one of the two primary causes of peptic ulcer disease, alongside H. pylori infection. NSAIDs inhibit cyclooxygenase (COX) enzymes, reducing prostaglandin production in the stomach lining, which normally protects the mucosa from acid damage. This is a major concern in the Caribbean where OTC NSAID use is very high.",
      questionType: "true_false",
      questionData: {
        correct_answer: true,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 4 — The Endocrine & Nervous Systems
// ============================================================================

const module4: Module = {
  id: "m4-endocrine-nervous",
  number: 4,
  title: "The Endocrine & Nervous Systems",
  description:
    "Understand the two master regulatory systems of the human body: the endocrine system (hormone-based signalling) and the nervous system (electrical and neurotransmitter signalling). Learn why the Caribbean diabetes epidemic makes endocrine pharmacology essential, and how neurological and mental health conditions are managed in the region.",
  learningObjectives: [
    "Describe the anatomy and function of the major endocrine glands and their hormones",
    "Explain the pathophysiology of type 1 and type 2 diabetes mellitus and the drug classes used in treatment",
    "Identify the structural divisions and functional roles of the central and peripheral nervous systems",
    "Analyse how common neurological and psychiatric drug classes (antidepressants, anticonvulsants, analgesics) act on the nervous system",
    "Evaluate the impact of the Caribbean diabetes epidemic on pharmacy practice",
  ],
  lessons: [
    // ── Lesson 4.1 ──
    {
      id: "m4-l1",
      title: "The Endocrine System: Glands, Hormones & Feedback Loops",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Endocrine System: Chemical Messengers",
        },
        {
          type: "text",
          body: "The endocrine system is a network of glands that produce, store, and secrete hormones — chemical messengers that travel through the bloodstream to regulate virtually every bodily function, from metabolism and growth to reproduction and mood. Unlike the nervous system, which sends rapid electrical signals, the endocrine system communicates through slower but longer-lasting hormonal signals. The two systems work together to maintain homeostasis.",
        },
        {
          type: "table",
          caption: "Major Endocrine Glands and Their Hormones",
          headers: ["Gland", "Location", "Key Hormones", "Function"],
          rows: [
            ["Hypothalamus", "Base of brain", "Releasing and inhibiting hormones", "Master regulator — controls pituitary gland"],
            ["Pituitary (anterior)", "Below hypothalamus", "TSH, ACTH, GH, FSH, LH, prolactin", "Stimulates other endocrine glands; 'master gland'"],
            ["Pituitary (posterior)", "Below hypothalamus", "ADH (vasopressin), oxytocin", "Water balance (ADH); uterine contraction and milk ejection (oxytocin)"],
            ["Thyroid", "Anterior neck", "T3, T4 (thyroxine), calcitonin", "Metabolic rate regulation; calcium homeostasis"],
            ["Parathyroids", "Behind thyroid (4 small glands)", "Parathyroid hormone (PTH)", "Raises blood calcium levels"],
            ["Adrenal cortex", "Above kidneys", "Cortisol, aldosterone, androgens", "Stress response; fluid/electrolyte balance; secondary sex hormones"],
            ["Adrenal medulla", "Centre of adrenal glands", "Adrenaline (epinephrine), noradrenaline", "Fight-or-flight response"],
            ["Pancreas (islets of Langerhans)", "Behind stomach", "Insulin (beta cells), glucagon (alpha cells)", "Blood glucose regulation — critical for diabetes management"],
            ["Ovaries", "Female pelvis", "Oestrogen, progesterone", "Female reproductive function; menstrual cycle"],
            ["Testes", "Male scrotum", "Testosterone", "Male reproductive function; muscle mass"],
          ],
        },
        {
          type: "key-term",
          term: "Negative Feedback Loop",
          definition:
            "The primary mechanism by which the endocrine system maintains homeostasis. When a hormone reaches a sufficient level, it signals the gland to stop producing more. For example, when thyroid hormones (T3/T4) rise to adequate levels, the hypothalamus and pituitary reduce TSH secretion, which in turn reduces thyroid hormone production. This self-regulating cycle prevents hormonal excess. Disruption of negative feedback causes endocrine disorders such as hyperthyroidism or Cushing syndrome.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The Thyroid in Caribbean Practice",
          body: "Thyroid disorders, particularly hypothyroidism, are commonly encountered in Caribbean pharmacies. Levothyroxine (synthetic T4) is a high-volume dispensing item. Pharmacy technicians should know that levothyroxine has a narrow therapeutic index, meaning small dose changes can have significant clinical effects. It should be taken on an empty stomach, 30-60 minutes before breakfast, and kept away from calcium, iron, and antacids which reduce absorption.",
        },
        {
          type: "knowledge-check",
          question: "Which gland is often called the 'master gland' because it controls the function of many other endocrine glands?",
          options: [
            "Hypothalamus",
            "Pituitary gland",
            "Thyroid gland",
            "Adrenal gland",
          ],
          correctIndex: 1,
          explanation:
            "The pituitary gland (particularly the anterior pituitary) is called the 'master gland' because it secretes hormones (TSH, ACTH, GH, FSH, LH) that stimulate and regulate other endocrine glands. However, the pituitary itself is controlled by the hypothalamus, which is sometimes called the 'master of the master gland'.",
        },
      ],
    },
    // ── Lesson 4.2 ──
    {
      id: "m4-l2",
      title: "Diabetes Mellitus: The Caribbean Epidemic",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Diabetes in the Caribbean: A Public Health Crisis",
        },
        {
          type: "text",
          body: "Diabetes mellitus is arguably the most consequential chronic disease facing the Caribbean. The International Diabetes Federation (IDF) estimates that diabetes prevalence in the Caribbean ranges from 10% to over 15% of the adult population — significantly higher than the global average. Trinidad & Tobago, Jamaica, and Barbados all face epidemic-level diabetes rates. The consequences are devastating: diabetic nephropathy leading to dialysis, diabetic retinopathy causing blindness, diabetic neuropathy causing amputations, and accelerated cardiovascular disease.",
        },
        {
          type: "text",
          body: "For pharmacy technicians, diabetes generates an enormous volume of daily work. Oral antidiabetic agents, insulin, blood glucose monitoring supplies, and medications for diabetic complications (ACE inhibitors for nephropathy, statins for cardiovascular protection, gabapentin for neuropathic pain) collectively represent the largest medication category in many Caribbean pharmacies.",
        },
        {
          type: "heading",
          level: 3,
          text: "Type 1 vs Type 2 Diabetes",
        },
        {
          type: "text",
          body: "Type 1 diabetes is an autoimmune condition in which the immune system destroys the insulin-producing beta cells of the pancreatic islets. Patients produce little or no insulin and are absolutely dependent on exogenous insulin injections. It typically presents in childhood or adolescence and accounts for approximately 5-10% of all diabetes cases.",
        },
        {
          type: "text",
          body: "Type 2 diabetes is characterised by insulin resistance (the body's cells respond poorly to insulin) and progressive beta cell dysfunction (the pancreas gradually produces less insulin). It is strongly associated with obesity, physical inactivity, and genetic predisposition. Type 2 accounts for 90-95% of all diabetes cases and is the type driving the Caribbean epidemic. It can often be managed initially with lifestyle modification and oral medications, but many patients eventually require insulin as the disease progresses.",
        },
        {
          type: "island-comparison",
          title: "Diabetes Prevalence and Management Across the Caribbean",
          description:
            "Each island faces the diabetes epidemic with different resources and programmes.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Diabetes prevalence estimated at 12-15% of adults — one of the highest in the Americas",
                "CDAP provides free diabetes medications: metformin, glibenclamide, insulin",
                "Indo-Trinidadian population has particularly high genetic susceptibility",
                "Diabetic foot complications and amputations are major healthcare challenges",
                "South-West Regional Health Authority runs dedicated diabetes clinics",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Estimated 10-13% diabetes prevalence in adults",
                "NHF covers metformin, gliclazide, and human insulins",
                "Jamaica Health and Lifestyle Survey provides national surveillance data",
                "Traditional dietary patterns (high starch, sugar-sweetened beverages) are modifiable risk factors",
                "University Hospital of the West Indies leads diabetes research",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Diabetes prevalence estimated at 14-18% of adults",
                "Barbados Drug Service provides diabetes medications through the public system",
                "Diabetic limb amputation rates among the highest in the Western Hemisphere",
                "Queen Elizabeth Hospital has a dedicated diabetes and endocrine unit",
                "National NCD surveillance programme tracks outcomes",
              ],
            },
            {
              name: "Grenada",
              flag: "🇬🇩",
              details: [
                "Growing diabetes burden with limited specialist endocrine resources",
                "General Hospital, St. George's manages most diabetes complications",
                "OECS Pharmaceutical Procurement helps ensure medication availability",
                "Community health centres play a critical role in diabetes screening and medication distribution",
              ],
            },
          ],
        },
        {
          type: "table",
          caption: "Oral Antidiabetic Drug Classes",
          headers: ["Class", "Examples (stem)", "Mechanism", "Caribbean Notes"],
          rows: [
            ["Biguanides", "Metformin (-formin)", "Reduces hepatic glucose production; improves insulin sensitivity", "First-line for type 2 DM across all Caribbean formularies; CDAP and NHF covered"],
            ["Sulphonylureas", "Glibenclamide, gliclazide", "Stimulate pancreatic beta cells to release more insulin", "Affordable; widely available; risk of hypoglycaemia — especially in elderly"],
            ["DPP-4 inhibitors", "Sitagliptin, linagliptin (-gliptin)", "Inhibit DPP-4 enzyme, increasing incretin hormones", "Newer agents; growing Caribbean availability; weight-neutral"],
            ["SGLT2 inhibitors", "Empagliflozin, dapagliflozin (-gliflozin)", "Block glucose reabsorption in kidneys → glucose excreted in urine", "Cardiovascular and renal benefits; emerging on Caribbean formularies"],
            ["Thiazolidinediones", "Pioglitazone (-glitazone)", "Increase insulin sensitivity in muscle and fat tissue", "Less commonly used; fluid retention limits use in heart failure"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Insulin Storage in the Tropics",
          body: "Insulin is a protein that degrades rapidly when exposed to heat. In the Caribbean's tropical climate, proper insulin storage is critical. Unopened insulin must be refrigerated at 2-8°C. Once opened, most insulins can be kept at room temperature (below 30°C) for up to 28 days — but 'room temperature' in a Caribbean home without air conditioning may exceed 30°C. Pharmacy technicians must counsel patients to keep insulin away from direct sunlight, car dashboards, and un-airconditioned spaces. Degraded insulin appears cloudy (if it should be clear) and loses effectiveness.",
        },
        {
          type: "key-term",
          term: "Glycated Haemoglobin (HbA1c)",
          definition:
            "A blood test that reflects average blood glucose levels over the preceding 2-3 months. HbA1c measures the percentage of haemoglobin molecules that have glucose attached. A normal HbA1c is below 5.7%; prediabetes is 5.7-6.4%; diabetes is 6.5% or above. Treatment targets are typically HbA1c below 7% (53 mmol/mol). This test is used by clinicians to assess long-term diabetes control and adjust medications accordingly.",
        },
        {
          type: "knowledge-check",
          question: "Metformin is the first-line medication for type 2 diabetes because it:",
          options: [
            "Stimulates the pancreas to produce more insulin",
            "Replaces the insulin that the body cannot produce",
            "Reduces hepatic glucose production and improves insulin sensitivity",
            "Blocks glucose absorption in the intestines",
          ],
          correctIndex: 2,
          explanation:
            "Metformin (a biguanide) primarily works by reducing hepatic (liver) glucose production and improving insulin sensitivity in peripheral tissues. It does not stimulate insulin secretion or replace insulin. It is first-line because of its efficacy, safety profile, low cost, weight neutrality, and cardiovascular benefits.",
        },
      ],
    },
    // ── Lesson 4.3 ──
    {
      id: "m4-l3",
      title: "The Nervous System: CNS, PNS & Neurotransmitters",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Nervous System: Structural Overview",
        },
        {
          type: "text",
          body: "The nervous system is the body's rapid communication network. It is divided structurally into two parts: the central nervous system (CNS), comprising the brain and spinal cord, and the peripheral nervous system (PNS), comprising all nerves outside the CNS that connect it to the rest of the body. The PNS is further divided into the somatic nervous system (voluntary control of skeletal muscles) and the autonomic nervous system (involuntary control of internal organs).",
        },
        {
          type: "text",
          body: "The autonomic nervous system (ANS) is particularly relevant to pharmacy because many drugs target its two divisions: the sympathetic nervous system ('fight or flight' — increases heart rate, dilates airways, raises blood pressure) and the parasympathetic nervous system ('rest and digest' — slows heart rate, stimulates digestion, constricts pupils). Beta-blockers, for example, block sympathetic stimulation of the heart; anticholinergics block parasympathetic activity.",
        },
        {
          type: "key-term",
          term: "Neurotransmitter",
          definition:
            "A chemical substance released by a nerve cell (neuron) at a synapse to transmit a signal to another cell. Major neurotransmitters include acetylcholine (muscle contraction, parasympathetic function), noradrenaline (sympathetic function, alertness), dopamine (reward, movement), serotonin (mood, sleep, appetite), GABA (inhibition, calm), and glutamate (excitation). Most psychiatric and neurological drugs work by modifying neurotransmitter activity.",
        },
        {
          type: "table",
          caption: "Key Neurotransmitters and Their Drug Connections",
          headers: ["Neurotransmitter", "Primary Functions", "Drug Classes That Affect It", "Examples"],
          rows: [
            ["Serotonin (5-HT)", "Mood, sleep, appetite, pain modulation", "SSRIs, SNRIs, triptans", "Fluoxetine, sertraline, sumatriptan"],
            ["Noradrenaline (NE)", "Alertness, sympathetic tone, blood pressure", "SNRIs, beta-blockers, alpha-agonists", "Venlafaxine, atenolol, clonidine"],
            ["Dopamine", "Reward, motivation, motor control", "Antipsychotics, anti-Parkinsonian drugs", "Haloperidol, levodopa"],
            ["Acetylcholine (ACh)", "Muscle contraction, parasympathetic, memory", "Anticholinergics, cholinesterase inhibitors", "Ipratropium, donepezil"],
            ["GABA", "Inhibitory signalling, anxiety reduction", "Benzodiazepines, gabapentinoids", "Diazepam, gabapentin, pregabalin"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Mental Health in the Caribbean",
          body: "Mental health conditions, including depression and anxiety, are increasingly recognised as significant health burdens across the Caribbean. However, stigma remains a major barrier to treatment. Many patients present to pharmacies for physical symptoms (insomnia, chronic pain, fatigue) without disclosing underlying depression or anxiety. Pharmacy technicians should handle prescriptions for antidepressants and anxiolytics with the same professionalism and confidentiality as any other medication, and never make assumptions about patients based on their prescriptions.",
        },
        {
          type: "knowledge-check",
          question: "The sympathetic nervous system is associated with which response?",
          options: [
            "Rest and digest",
            "Fight or flight",
            "Sleep and recovery",
            "Immune activation",
          ],
          correctIndex: 1,
          explanation:
            "The sympathetic nervous system mediates the 'fight or flight' response — increasing heart rate, dilating airways, raising blood pressure, and diverting blood flow to skeletal muscles. Many cardiovascular drugs (beta-blockers, alpha-blockers) work by modulating sympathetic nervous system activity.",
        },
      ],
    },
    // ── Lesson 4.4 ──
    {
      id: "m4-l4",
      title: "Pain, Epilepsy & Common Neurological Medications",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Neurological Conditions and Their Pharmacotherapy",
        },
        {
          type: "text",
          body: "The nervous system gives rise to a diverse range of conditions that generate significant prescription volume in Caribbean pharmacies. Pain management — from mild headaches to severe neuropathic pain — is the most common reason patients present to pharmacies. Epilepsy (seizure disorders), though less common, requires lifelong medication with narrow therapeutic windows. Depression, anxiety, and insomnia are increasingly treated with pharmaceutical agents across the region.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Pain Pathway and Analgesic Drugs",
        },
        {
          type: "text",
          body: "Pain begins when nociceptors (pain receptors) in peripheral tissues detect damage or potential damage. The pain signal travels via sensory nerves to the spinal cord (dorsal horn), then ascends to the brain (thalamus and cortex) where pain is perceived. Analgesic drugs can intervene at various points along this pathway: NSAIDs and paracetamol act peripherally (and centrally for paracetamol); opioids act centrally in the spinal cord and brain; local anaesthetics block nerve signal transmission; and adjuvant analgesics (gabapentin, amitriptyline) modify pain signalling in the CNS.",
        },
        {
          type: "text",
          body: "The WHO analgesic ladder provides a stepwise approach to pain management: Step 1 (mild pain) — non-opioid analgesics (paracetamol, NSAIDs); Step 2 (moderate pain) — weak opioids (tramadol, codeine) ± non-opioids; Step 3 (severe pain) — strong opioids (morphine, oxycodone) ± non-opioids ± adjuvants. This framework guides prescribing across the Caribbean and is reflected in the medications that pharmacy technicians handle daily.",
        },
        {
          type: "heading",
          level: 3,
          text: "Epilepsy and Anticonvulsant Medications",
        },
        {
          type: "text",
          body: "Epilepsy is a neurological disorder characterised by recurrent seizures — episodes of abnormal, excessive electrical activity in the brain. Seizures may be generalised (affecting the whole brain, as in tonic-clonic 'grand mal' seizures) or focal/partial (affecting one region of the brain). Anticonvulsant medications (also called antiepileptic drugs or AEDs) work by stabilising neuronal membranes, enhancing inhibitory GABA activity, or reducing excitatory glutamate activity. Common AEDs dispensed in the Caribbean include sodium valproate, carbamazepine, phenytoin, levetiracetam, and lamotrigine.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Critical: Anticonvulsant Switching",
          body: "Anticonvulsant medications have narrow therapeutic indices and are not interchangeable between brands or generics without clinical supervision. Switching a patient's carbamazepine or phenytoin between manufacturers can cause breakthrough seizures (if the new product has lower bioavailability) or toxicity (if it has higher bioavailability). In the Caribbean, where drug supply may necessitate manufacturer changes, pharmacy technicians must flag any anticonvulsant brand changes to the pharmacist immediately.",
        },
        {
          type: "key-term",
          term: "Neuropathic Pain",
          definition:
            "Pain caused by damage to or dysfunction of the nervous system itself, rather than by tissue damage. It is often described as burning, shooting, stabbing, or electric shock-like. Diabetic peripheral neuropathy (nerve damage from chronic high blood sugar) is the most common cause in the Caribbean. Standard analgesics (paracetamol, NSAIDs) are generally ineffective; treatment requires adjuvant analgesics like gabapentin, pregabalin, or amitriptyline.",
        },
        {
          type: "table",
          caption: "Common Neurological and Psychiatric Drug Classes",
          headers: ["Class", "Examples", "Primary Indication", "Key Side Effects"],
          rows: [
            ["SSRIs", "Fluoxetine, sertraline, escitalopram", "Depression, anxiety disorders", "Nausea, sexual dysfunction, initial anxiety worsening"],
            ["Tricyclic antidepressants (TCAs)", "Amitriptyline, nortriptyline", "Depression, neuropathic pain, migraine prevention", "Sedation, dry mouth, urinary retention, cardiotoxicity in overdose"],
            ["Gabapentinoids", "Gabapentin, pregabalin", "Neuropathic pain, epilepsy, anxiety", "Drowsiness, dizziness, weight gain"],
            ["Benzodiazepines", "Diazepam, lorazepam, clonazepam", "Anxiety, seizures, muscle spasm, insomnia", "Sedation, dependence, respiratory depression — controlled substances"],
            ["Anticonvulsants", "Sodium valproate, carbamazepine, phenytoin", "Epilepsy, bipolar disorder, neuropathic pain", "Hepatotoxicity (valproate), blood dyscrasias (carbamazepine), narrow therapeutic index (phenytoin)"],
          ],
        },
        {
          type: "knowledge-check",
          question: "Diabetic peripheral neuropathy is best treated with which class of medication?",
          options: [
            "NSAIDs (e.g. ibuprofen)",
            "Proton pump inhibitors (e.g. omeprazole)",
            "Gabapentinoids (e.g. gabapentin, pregabalin)",
            "Thiazide diuretics (e.g. hydrochlorothiazide)",
          ],
          correctIndex: 2,
          explanation:
            "Neuropathic pain, including diabetic peripheral neuropathy, responds poorly to standard analgesics like NSAIDs. First-line treatments include gabapentinoids (gabapentin, pregabalin) and certain antidepressants (amitriptyline, duloxetine). These drugs modify pain signalling in the central nervous system, where neuropathic pain is generated and amplified.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m4-q1",
      question: "Which organ produces insulin?",
      options: [
        "Liver",
        "Thyroid",
        "Pancreas",
        "Adrenal gland",
      ],
      correctIndex: 2,
      explanation:
        "Insulin is produced by the beta cells of the islets of Langerhans in the pancreas. In type 1 diabetes, autoimmune destruction of these beta cells leads to absolute insulin deficiency. In type 2 diabetes, the beta cells progressively fail to produce sufficient insulin to overcome peripheral insulin resistance.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q2",
      question: "What is the key difference between type 1 and type 2 diabetes?",
      options: [
        "Type 1 involves insulin resistance; type 2 involves autoimmune destruction of beta cells",
        "Type 1 involves autoimmune destruction of beta cells; type 2 involves insulin resistance with progressive beta cell failure",
        "Type 1 affects only children; type 2 affects only adults",
        "Type 1 is treated with oral medications; type 2 always requires insulin",
      ],
      correctIndex: 1,
      explanation:
        "Type 1 diabetes is an autoimmune disease that destroys insulin-producing beta cells, requiring lifelong insulin therapy. Type 2 diabetes is characterised by insulin resistance and progressive beta cell dysfunction, initially managed with lifestyle changes and oral medications. Type 2 accounts for 90-95% of diabetes cases and is the predominant type in the Caribbean epidemic.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q3",
      question: "The nervous system is divided into which two structural components?",
      options: [
        "Sympathetic and parasympathetic",
        "Somatic and autonomic",
        "Central nervous system (CNS) and peripheral nervous system (PNS)",
        "Afferent and efferent",
      ],
      correctIndex: 2,
      explanation:
        "The nervous system is structurally divided into the central nervous system (brain and spinal cord) and the peripheral nervous system (all nerves outside the CNS). The PNS is further divided into the somatic (voluntary) and autonomic (involuntary) divisions, with the autonomic division split into sympathetic and parasympathetic branches.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q4",
      question: "Match each neurotransmitter with its primary association.",
      options: [
        "Serotonin → Mood and sleep regulation",
        "Dopamine → Reward and motor control",
        "GABA → Inhibitory signalling and anxiety reduction",
        "Acetylcholine → Muscle contraction and parasympathetic function",
      ],
      correctIndex: 0,
      explanation:
        "All pairings are correct: Serotonin regulates mood and sleep (targeted by SSRIs); Dopamine is involved in reward and motor control (targeted by antipsychotics and anti-Parkinsonian drugs); GABA is the main inhibitory neurotransmitter (targeted by benzodiazepines); Acetylcholine mediates muscle contraction and parasympathetic activity (targeted by anticholinergics).",
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Serotonin", right: "Mood and sleep regulation" },
          { left: "Dopamine", right: "Reward and motor control" },
          { left: "GABA", right: "Inhibitory signalling" },
          { left: "Acetylcholine", right: "Muscle contraction" },
        ],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q5",
      question: "A pharmacy technician in Trinidad notices that a patient's carbamazepine has been supplied by a different manufacturer than usual. Why is this a concern?",
      options: [
        "Different manufacturers use different colours, which confuses patients",
        "Anticonvulsants have narrow therapeutic indices, and bioavailability differences between manufacturers can cause seizure breakthrough or toxicity",
        "It is always illegal to dispense a different manufacturer's product",
        "The new manufacturer may not be CDAP-approved",
      ],
      correctIndex: 1,
      explanation:
        "Anticonvulsant medications have narrow therapeutic indices — the difference between an effective dose and a toxic dose is small. Different manufacturers may have slightly different bioavailability, meaning the amount of drug that reaches the bloodstream can vary. For a drug like carbamazepine, this can be enough to cause breakthrough seizures (if less drug is absorbed) or toxicity (if more is absorbed). This must be flagged to the pharmacist.",
      questionType: "scenario",
      questionData: {
        context: "Community pharmacy in Port of Spain, Trinidad. A routine dispensing situation reveals a manufacturer change.",
      },
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m4-q6",
      question: "Insulin must be stored in the refrigerator (2-8°C) before opening.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 0,
      explanation:
        "True. Unopened insulin must be refrigerated at 2-8°C to maintain its potency. Once opened, most insulin preparations can be kept at room temperature (below 25-30°C) for a limited period (usually up to 28 days). In the Caribbean's tropical climate, ensuring insulin is not exposed to excessive heat is a critical patient safety concern.",
      questionType: "true_false",
      questionData: {
        correct_answer: true,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q7",
      question: "According to the WHO analgesic ladder, what is the first step for treating mild pain?",
      options: [
        "Strong opioids (morphine)",
        "Weak opioids (tramadol, codeine)",
        "Non-opioid analgesics (paracetamol, NSAIDs)",
        "Nerve blocks and anaesthesia",
      ],
      correctIndex: 2,
      explanation:
        "Step 1 of the WHO analgesic ladder recommends non-opioid analgesics (paracetamol, NSAIDs) for mild pain. Step 2 adds weak opioids for moderate pain, and Step 3 uses strong opioids for severe pain. This stepwise approach guides prescribing practice across the Caribbean.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q8",
      question: "Which of the following are risk factors for type 2 diabetes that are highly prevalent in the Caribbean? Select ALL that apply.",
      options: [
        "Obesity",
        "Physical inactivity",
        "Genetic predisposition",
        "High altitude living",
        "Diet high in refined carbohydrates",
      ],
      correctIndex: 0,
      explanation:
        "Obesity, physical inactivity, genetic predisposition, and a diet high in refined carbohydrates are all major risk factors for type 2 diabetes and are highly prevalent across the Caribbean. High altitude living is not a risk factor for diabetes. The combination of these risk factors drives the Caribbean diabetes epidemic.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 2, 4],
      },
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m4-q9",
      question: "The endocrine system maintains hormone balance primarily through:",
      options: [
        "Positive feedback loops that continuously increase hormone levels",
        "Negative feedback loops that regulate hormone production",
        "Random hormone secretion that adjusts over time",
        "Direct electrical signals from the brain",
      ],
      correctIndex: 1,
      explanation:
        "The endocrine system uses negative feedback loops as its primary regulatory mechanism. When a hormone reaches a sufficient level, it signals the producing gland to reduce output. This self-correcting system maintains homeostasis. Positive feedback loops exist (e.g. oxytocin in labour) but are rare and serve specific short-term purposes.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q10",
      question: "An HbA1c result of 8.5% indicates:",
      options: [
        "Normal blood glucose control",
        "Prediabetes",
        "Well-controlled diabetes (within target)",
        "Poorly controlled diabetes (above typical target of < 7%)",
      ],
      correctIndex: 3,
      explanation:
        "An HbA1c of 8.5% indicates poorly controlled diabetes. The typical treatment target is below 7% (53 mmol/mol). An HbA1c of 8.5% means the patient's average blood glucose over the past 2-3 months has been significantly elevated, increasing the risk of diabetic complications. The prescriber may need to intensify treatment.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 5 — The Musculoskeletal & Integumentary Systems
// ============================================================================

const module5: Module = {
  id: "m5-musculoskeletal-integumentary",
  number: 5,
  title: "The Musculoskeletal & Integumentary Systems",
  description:
    "Study the bones, joints, muscles, and skin — systems that generate significant pharmacy workload through pain management, inflammatory conditions, and tropical skin diseases. Learn why osteoporosis, arthritis, and dermatological conditions have unique presentations in Caribbean populations.",
  learningObjectives: [
    "Describe the anatomy and physiology of the musculoskeletal system including bone remodelling and joint structure",
    "Explain the pathophysiology of osteoarthritis, rheumatoid arthritis, gout, and osteoporosis",
    "Identify common integumentary (skin) conditions encountered in Caribbean pharmacy practice, including tropical-specific conditions",
  ],
  lessons: [
    // ── Lesson 5.1 ──
    {
      id: "m5-l1",
      title: "Bones, Joints & Musculoskeletal Conditions",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Musculoskeletal System: Framework and Movement",
        },
        {
          type: "text",
          body: "The musculoskeletal system comprises the bones of the skeleton (206 in an adult), the joints where bones meet, the skeletal muscles that produce movement, and the connective tissues (tendons, ligaments, cartilage) that hold everything together. This system provides structural support, protects internal organs, enables movement, stores minerals (particularly calcium and phosphorus), and houses bone marrow where blood cell production (haematopoiesis) occurs.",
        },
        {
          type: "text",
          body: "Bone is a dynamic, living tissue that is constantly being remodelled. Osteoblasts build new bone, while osteoclasts break down old bone. This balance between formation and resorption is critical: when resorption exceeds formation, bones become weak and porous — a condition called osteoporosis. Hormones (particularly oestrogen, testosterone, parathyroid hormone, and calcitonin), vitamin D, calcium intake, and weight-bearing exercise all influence bone remodelling.",
        },
        {
          type: "key-term",
          term: "Osteoblast",
          definition:
            "A bone-forming cell responsible for synthesising and mineralising new bone tissue. Osteoblasts are stimulated by weight-bearing exercise, growth hormone, and oestrogen. The term breaks down as: oste/o (bone) + blast (immature cell / builder). Drugs like bisphosphonates (alendronate, risedronate) work by inhibiting osteoclasts (bone-resorbing cells), thereby shifting the balance toward osteoblast-driven bone formation.",
        },
        {
          type: "heading",
          level: 3,
          text: "Common Musculoskeletal Conditions",
        },
        {
          type: "text",
          body: "Osteoarthritis (OA) is the most common joint disease worldwide and a major source of pain and disability in Caribbean populations. It involves degeneration of joint cartilage and changes in underlying bone, particularly affecting the knees, hips, hands, and spine. OA is primarily managed with analgesics (paracetamol, NSAIDs), topical treatments, physiotherapy, and in advanced cases, joint replacement surgery. Rheumatoid arthritis (RA) is a different disease — an autoimmune condition causing inflammatory joint destruction, managed with disease-modifying antirheumatic drugs (DMARDs) such as methotrexate.",
        },
        {
          type: "text",
          body: "Gout is a form of inflammatory arthritis caused by the deposition of urate crystals in joints, typically the big toe (first metatarsophalangeal joint). It is strongly associated with high uric acid levels (hyperuricaemia), which can be caused by dietary factors (high-purine foods, alcohol, sugar-sweetened beverages), genetic predisposition, and certain medications (notably thiazide diuretics). Gout is relatively common in the Caribbean, particularly among men, and generates prescriptions for acute treatment (colchicine, NSAIDs, corticosteroids) and long-term urate-lowering therapy (allopurinol, febuxostat).",
        },
        {
          type: "table",
          caption: "Musculoskeletal Drug Classes in Caribbean Practice",
          headers: ["Condition", "Drug Class", "Examples", "Key Notes"],
          rows: [
            ["Osteoarthritis", "Simple analgesics", "Paracetamol", "First-line; safe at standard doses"],
            ["Osteoarthritis / RA", "NSAIDs", "Ibuprofen, diclofenac, naproxen", "GI, renal, and cardiovascular risks with chronic use"],
            ["Rheumatoid arthritis", "DMARDs", "Methotrexate, hydroxychloroquine, sulfasalazine", "Methotrexate requires folic acid supplementation and blood monitoring"],
            ["Gout (acute)", "Anti-inflammatory", "Colchicine, NSAIDs, prednisolone", "Colchicine has narrow therapeutic index — dose carefully"],
            ["Gout (chronic)", "Urate-lowering", "Allopurinol, febuxostat", "Do not start during an acute attack — can worsen flare"],
            ["Osteoporosis", "Bisphosphonates", "Alendronate, risedronate", "Take on empty stomach, remain upright 30 min, with full glass of water"],
            ["Muscle spasm", "Muscle relaxants", "Cyclobenzaprine, baclofen", "Sedation is common; short-term use preferred"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Bisphosphonate Counselling — A Technician's Checklist",
          body: "Bisphosphonates (alendronate, risedronate) for osteoporosis require very specific administration: take first thing in the morning on an empty stomach, with a full glass of plain water (not juice, coffee, or mineral water), remain upright (sitting or standing) for at least 30 minutes, and do not eat, drink, or take other medications during this time. Poor adherence to these instructions dramatically reduces drug absorption and effectiveness.",
        },
        {
          type: "knowledge-check",
          question: "What is the primary cause of gout?",
          options: [
            "Autoimmune destruction of joint cartilage",
            "Degeneration of cartilage from wear and tear",
            "Deposition of urate crystals in joints from high uric acid levels",
            "Bacterial infection of the joint space",
          ],
          correctIndex: 2,
          explanation:
            "Gout is caused by the deposition of monosodium urate crystals in joint tissues, resulting from persistently high blood uric acid levels (hyperuricaemia). This causes acute, intensely painful joint inflammation, most commonly affecting the first metatarsophalangeal joint (big toe). Dietary factors, genetics, and certain medications (thiazide diuretics) contribute to hyperuricaemia.",
        },
      ],
    },
    // ── Lesson 5.2 ──
    {
      id: "m5-l2",
      title: "The Integumentary System: Skin Structure & Function",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Skin: The Body's Largest Organ",
        },
        {
          type: "text",
          body: "The integumentary system — comprising the skin, hair, nails, and associated glands — is the body's largest organ system. The skin alone covers approximately 1.5-2 square metres in an adult and weighs about 3-4 kilograms. It serves as the body's first line of defence against infection, UV radiation, physical trauma, and chemical exposure. It also plays critical roles in temperature regulation, sensation (touch, pain, temperature), vitamin D synthesis, and fluid retention.",
        },
        {
          type: "text",
          body: "The skin has three main layers. The epidermis (outermost layer) is composed of stratified squamous epithelium and contains keratinocytes (which produce the protective protein keratin), melanocytes (which produce the pigment melanin), and Langerhans cells (immune cells). The dermis (middle layer) contains blood vessels, nerve endings, hair follicles, sweat glands, and sebaceous glands, all embedded in a matrix of collagen and elastin fibres. The hypodermis (subcutaneous layer) is composed primarily of adipose tissue and connects the skin to underlying structures.",
        },
        {
          type: "key-term",
          term: "Melanin",
          definition:
            "A pigment produced by melanocytes in the epidermis that gives skin, hair, and eyes their colour. Melanin absorbs ultraviolet (UV) radiation, providing protection against UV-induced DNA damage and skin cancer. Individuals of African and Caribbean descent typically have higher melanin content, which provides greater UV protection but also reduces cutaneous vitamin D synthesis — a clinically relevant consideration in darker-skinned populations.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Melanin and Vitamin D in Caribbean Populations",
          body: "Despite living in a tropical, sun-rich environment, some Caribbean populations show surprisingly high rates of vitamin D insufficiency. Higher melanin content in darker-skinned individuals reduces the efficiency of cutaneous vitamin D synthesis. Additionally, urbanised lifestyles with indoor work and sun avoidance contribute. Pharmacy technicians should be aware that vitamin D supplementation (cholecalciferol) prescriptions are increasingly common across the Caribbean, particularly for patients with osteoporosis, chronic kidney disease, or autoimmune conditions.",
        },
        {
          type: "table",
          caption: "Layers of the Skin",
          headers: ["Layer", "Key Structures", "Functions", "Drug Delivery Relevance"],
          rows: [
            ["Epidermis", "Keratinocytes, melanocytes, Langerhans cells", "Barrier function, UV protection, immune surveillance", "Topical drugs must penetrate this layer; creams and ointments work here"],
            ["Dermis", "Blood vessels, nerves, hair follicles, sweat and sebaceous glands", "Blood supply, sensation, thermoregulation, secretion", "Intradermal injections (e.g. TB test) delivered here"],
            ["Hypodermis", "Adipose tissue, larger blood vessels", "Insulation, shock absorption, energy storage", "Subcutaneous injections (insulin, heparin) delivered here"],
          ],
        },
        {
          type: "knowledge-check",
          question: "Which skin layer must topical medications penetrate to be effective?",
          options: [
            "Hypodermis",
            "Dermis",
            "Epidermis",
            "Subcutaneous tissue",
          ],
          correctIndex: 2,
          explanation:
            "Most topical medications (creams, ointments, lotions) must penetrate the epidermis — the outermost skin layer — to reach their site of action. The epidermis acts as a barrier; the formulation of a topical product (vehicle) is designed to enhance penetration through this barrier. Ointments generally penetrate better than creams due to their occlusive nature.",
        },
      ],
    },
    // ── Lesson 5.3 ──
    {
      id: "m5-l3",
      title: "Tropical Skin Conditions & Dermatological Pharmacy",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Skin Conditions in Tropical Caribbean Climates",
        },
        {
          type: "text",
          body: "The Caribbean's tropical climate — characterised by high temperatures, high humidity, intense UV radiation, and abundant fungal/microbial life — creates a unique spectrum of skin conditions that pharmacy technicians encounter daily. Fungal infections thrive in warm, moist environments. UV exposure drives photoageing and skin cancers (even in darker-skinned individuals). Insect-borne diseases (dengue, chikungunya) often present with characteristic skin rashes. Understanding these conditions helps pharmacy technicians assist patients with appropriate OTC recommendations and recognise presentations that require pharmacist or physician referral.",
        },
        {
          type: "heading",
          level: 3,
          text: "Fungal Skin Infections",
        },
        {
          type: "text",
          body: "Fungal skin infections (dermatophytoses or 'ringworm') are extremely common in the Caribbean. The main types include tinea pedis (athlete's foot — affecting the feet), tinea corporis (ringworm of the body), tinea cruris (jock itch — affecting the groin), and tinea versicolor (pityriasis versicolor — causing hypopigmented or hyperpigmented patches, very common in tropical climates). Treatment involves topical antifungals such as clotrimazole, miconazole, terbinafine cream, or ketoconazole shampoo. Severe or widespread infections may require oral antifungals (fluconazole, terbinafine tablets, griseofulvin).",
        },
        {
          type: "heading",
          level: 3,
          text: "Other Common Tropical Skin Conditions",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Eczema / Atopic dermatitis: Common in Caribbean children; managed with emollients, topical corticosteroids, and antihistamines. Tropical heat and sweating can exacerbate symptoms.",
            "Prickly heat (miliaria): Blocked sweat glands causing an itchy rash; very common in hot, humid conditions. Calamine lotion and cool environments provide relief.",
            "Insect bite reactions: Mosquito bites can cause significant local reactions; topical hydrocortisone and oral antihistamines (cetirizine, loratadine) are frequently dispensed.",
            "Sun-related conditions: Even in darker-skinned individuals, chronic UV exposure causes photoageing and increases skin cancer risk. Sunscreen (SPF 30+) is recommended for all skin types.",
            "Scabies: Caused by the Sarcoptes scabiei mite; outbreaks occur in close-contact settings. Treated with permethrin 5% cream or oral ivermectin.",
            "Cutaneous leishmaniasis: Rare in the Caribbean but reported in some South American border areas; causes skin ulcers.",
          ],
        },
        {
          type: "table",
          caption: "Common Topical Dermatological Medications in Caribbean Pharmacies",
          headers: ["Medication", "Class", "Common Uses", "Notes"],
          rows: [
            ["Clotrimazole cream 1%", "Azole antifungal", "Tinea pedis, tinea corporis, candidiasis", "OTC; apply twice daily for 2-4 weeks"],
            ["Hydrocortisone cream 1%", "Mild corticosteroid", "Eczema, insect bites, mild dermatitis", "OTC; should not be used on the face for prolonged periods"],
            ["Betamethasone valerate 0.1%", "Potent corticosteroid", "Moderate-to-severe eczema, psoriasis", "Prescription only; avoid prolonged use — risk of skin thinning"],
            ["Permethrin cream 5%", "Antiparasitic", "Scabies", "Apply to entire body from neck down; wash off after 8-14 hours"],
            ["Calamine lotion", "Skin protectant", "Prickly heat, mild sunburn, insect bites", "OTC; cooling and soothing; no significant side effects"],
            ["Mupirocin ointment 2%", "Topical antibiotic", "Impetigo, infected wounds", "Prescription; important for treating bacterial skin infections"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Skin Bleaching Products — A Caribbean Concern",
          body: "Skin bleaching (skin lightening) is a significant public health concern across the Caribbean. Products containing hydroquinone, mercury, or high-potency corticosteroids are used cosmetically to lighten skin tone. Mercury-containing products cause nephrotoxicity, neurotoxicity, and skin damage. Prolonged use of potent corticosteroids on the face causes skin atrophy, telangiectasia, and steroid rosacea. Pharmacy technicians should be aware that patients requesting these products may not disclose their true use; education and referral to a dermatologist are appropriate responses.",
        },
        {
          type: "key-term",
          term: "Dermatophyte",
          definition:
            "A type of fungus that infects the skin, hair, or nails by digesting keratin — the structural protein in these tissues. Common dermatophyte genera include Trichophyton, Microsporum, and Epidermophyton. Dermatophyte infections are named by the body site affected: tinea pedis (feet), tinea capitis (scalp), tinea corporis (body), tinea cruris (groin), tinea unguium (nails, also called onychomycosis).",
        },
        {
          type: "knowledge-check",
          question: "Tinea versicolor is particularly common in the Caribbean because:",
          options: [
            "Caribbean populations lack melanin protection",
            "The fungus thrives in the tropical warm, humid climate",
            "Antifungal medications are not available in the region",
            "It is spread by contaminated water supplies",
          ],
          correctIndex: 1,
          explanation:
            "Tinea versicolor (pityriasis versicolor) is caused by Malassezia fungi, which are normal skin commensals but overgrow in warm, humid conditions — exactly the climate of the Caribbean. The infection causes characteristic hypo- or hyperpigmented patches on the trunk and is one of the most common dermatological conditions seen in tropical pharmacies.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m5-q1",
      question: "Which cells are responsible for building new bone tissue?",
      options: [
        "Osteoclasts",
        "Osteoblasts",
        "Chondrocytes",
        "Fibroblasts",
      ],
      correctIndex: 1,
      explanation:
        "Osteoblasts are the bone-forming cells responsible for synthesising and mineralising new bone tissue. Their counterparts, osteoclasts, break down old bone. The balance between osteoblast and osteoclast activity determines bone density — when osteoclast activity dominates, osteoporosis develops.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q2",
      question: "A patient in your Barbados pharmacy is prescribed alendronate 70 mg once weekly. You should advise them to:",
      options: [
        "Take it with food to reduce stomach upset",
        "Take it at bedtime with a glass of milk",
        "Take it first thing in the morning on an empty stomach with plain water and remain upright for 30 minutes",
        "Take it with their other morning medications",
      ],
      correctIndex: 2,
      explanation:
        "Bisphosphonates like alendronate must be taken first thing in the morning on an empty stomach with a full glass of plain water. The patient must remain upright (sitting or standing) for at least 30 minutes and must not eat, drink, or take other medications during this time. Food, beverages (other than water), and medications dramatically reduce absorption.",
      questionType: "scenario",
      questionData: {
        context: "Community pharmacy in Bridgetown, Barbados. A patient receives their first bisphosphonate prescription.",
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q3",
      question: "Tinea pedis is an infection of the:",
      options: [
        "Scalp",
        "Groin",
        "Feet",
        "Nails",
      ],
      correctIndex: 2,
      explanation:
        "Tinea pedis (athlete's foot) is a fungal infection of the feet, commonly affecting the interdigital spaces. The term 'pedis' comes from the Latin 'pes/pedis' meaning foot. It is extremely common in tropical climates and is typically treated with topical antifungals such as clotrimazole or terbinafine cream.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q4",
      question: "Why might some Caribbean individuals with darker skin be at risk for vitamin D insufficiency despite living in a tropical climate?",
      options: [
        "Darker skin is more sensitive to UV damage",
        "Higher melanin content reduces the efficiency of cutaneous vitamin D synthesis",
        "Tropical sunlight does not contain enough UVB radiation",
        "Darker skin absorbs too much vitamin D, leading to deficiency",
      ],
      correctIndex: 1,
      explanation:
        "Melanin absorbs UV radiation, providing protection against UV-induced skin damage. However, this same absorption reduces the amount of UVB radiation reaching the deeper skin layers where vitamin D synthesis occurs. Combined with indoor lifestyles, some darker-skinned Caribbean individuals have suboptimal vitamin D levels despite abundant tropical sunlight.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q5",
      question: "Gout is most commonly associated with which of the following drugs as a contributing factor?",
      options: [
        "Metformin",
        "Thiazide diuretics",
        "Amoxicillin",
        "Omeprazole",
      ],
      correctIndex: 1,
      explanation:
        "Thiazide diuretics (e.g. hydrochlorothiazide) reduce uric acid excretion by the kidneys, leading to hyperuricaemia and increased gout risk. This is a significant drug-disease interaction in the Caribbean, where both hypertension (treated with thiazides) and gout are common. Prescribers may need to consider alternative antihypertensives in gout-prone patients.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m5-q6",
      question: "Place the three main skin layers in order from outermost to innermost.",
      options: [
        "Epidermis",
        "Dermis",
        "Hypodermis (subcutaneous layer)",
      ],
      correctIndex: 0,
      explanation:
        "The skin layers from outermost to innermost are: epidermis (protective barrier containing keratinocytes and melanocytes), dermis (contains blood vessels, nerves, and glands), and hypodermis/subcutaneous layer (adipose tissue for insulation and energy storage).",
      questionType: "ordering",
      questionData: {
        correct_order: [0, 1, 2],
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q7",
      question: "Mercury-containing skin bleaching products can cause serious health effects.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 0,
      explanation:
        "True. Mercury-containing skin bleaching products cause nephrotoxicity (kidney damage), neurotoxicity (nervous system damage), and skin damage. Despite being banned in many jurisdictions, they remain available through informal channels across the Caribbean. Pharmacy technicians should be aware of this public health issue.",
      questionType: "true_false",
      questionData: {
        correct_answer: true,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q8",
      question: "Match each musculoskeletal condition with its primary characteristic.",
      options: [
        "Osteoarthritis → Cartilage degeneration from wear and tear",
        "Rheumatoid arthritis → Autoimmune inflammatory joint destruction",
        "Gout → Urate crystal deposition in joints",
        "Osteoporosis → Reduced bone density from imbalanced remodelling",
      ],
      correctIndex: 0,
      explanation:
        "All matches are correct: Osteoarthritis involves cartilage degeneration; Rheumatoid arthritis is autoimmune-driven; Gout results from urate crystal deposition; Osteoporosis occurs when bone resorption exceeds formation. Each condition requires different pharmacological management.",
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Osteoarthritis", right: "Cartilage degeneration" },
          { left: "Rheumatoid arthritis", right: "Autoimmune inflammatory destruction" },
          { left: "Gout", right: "Urate crystal deposition" },
          { left: "Osteoporosis", right: "Reduced bone density" },
        ],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// MODULE 6 — The Immune System & Infectious Disease in the Caribbean
// ============================================================================

const module6: Module = {
  id: "m6-immune-infectious",
  number: 6,
  title: "The Immune System & Infectious Disease in the Caribbean",
  description:
    "Understand how the immune system defends the body against pathogens, and explore the infectious diseases that define Caribbean public health: dengue, chikungunya, Zika, HIV/AIDS, and tuberculosis. Learn the antimicrobial drug classes that pharmacy technicians handle daily and the critical importance of antimicrobial stewardship in the region.",
  learningObjectives: [
    "Describe the components of innate and adaptive immunity and their roles in defending against infection",
    "Explain the pathophysiology, transmission, and clinical presentation of major Caribbean infectious diseases",
    "Identify the key antimicrobial drug classes (antibiotics, antivirals, antifungals, antiparasitics) and their mechanisms",
    "Analyse the public health significance of antimicrobial resistance in the Caribbean",
    "Evaluate the role of pharmacy technicians in vaccine distribution and antimicrobial stewardship",
  ],
  lessons: [
    // ── Lesson 6.1 ──
    {
      id: "m6-l1",
      title: "Innate & Adaptive Immunity: How the Body Fights Infection",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Immune System: Layers of Defence",
        },
        {
          type: "text",
          body: "The immune system is the body's defence network against pathogens — bacteria, viruses, fungi, and parasites. It operates through two complementary arms: innate (non-specific) immunity, which provides immediate, broad defence; and adaptive (specific) immunity, which mounts targeted responses against specific pathogens and provides immunological memory. Understanding the immune system is essential for pharmacy technicians because many medications — vaccines, immunosuppressants, anti-inflammatory drugs, and antimicrobials — interact with immune function.",
        },
        {
          type: "heading",
          level: 3,
          text: "Innate Immunity: The First Line of Defence",
        },
        {
          type: "text",
          body: "Innate immunity is present from birth and provides immediate, non-specific protection. It includes physical barriers (skin, mucous membranes, cilia in the respiratory tract), chemical barriers (stomach acid, lysozyme in tears, antimicrobial peptides), and cellular components (neutrophils, macrophages, natural killer cells). The inflammatory response — characterised by redness, heat, swelling, and pain — is a hallmark of innate immunity: blood vessels dilate, immune cells rush to the site of infection, and chemical mediators coordinate the defence. Many medications, including NSAIDs and corticosteroids, work by modulating this inflammatory response.",
        },
        {
          type: "heading",
          level: 3,
          text: "Adaptive Immunity: Targeted and Memorable",
        },
        {
          type: "text",
          body: "Adaptive immunity develops over time as the body encounters specific pathogens. It involves two main types of lymphocytes: B lymphocytes (B cells), which produce antibodies (immunoglobulins) that neutralise pathogens and mark them for destruction; and T lymphocytes (T cells), which include helper T cells (coordinate the immune response), cytotoxic T cells (directly kill infected cells), and regulatory T cells (prevent excessive immune responses). The hallmark of adaptive immunity is immunological memory — after encountering a pathogen once, the immune system can mount a faster, stronger response upon re-exposure. This is the principle underlying vaccination.",
        },
        {
          type: "key-term",
          term: "Antibody (Immunoglobulin)",
          definition:
            "A Y-shaped protein produced by B lymphocytes (plasma cells) that binds specifically to an antigen (a foreign substance) on a pathogen. Antibodies neutralise pathogens, activate complement (a cascade of immune proteins), and tag pathogens for destruction by phagocytes. There are five classes: IgG (most abundant; crosses placenta), IgA (found in mucosal secretions), IgM (first antibody produced in an immune response), IgE (involved in allergic reactions and parasitic defence), and IgD (function in B cell activation).",
        },
        {
          type: "key-term",
          term: "Vaccination",
          definition:
            "The administration of a weakened, inactivated, or subunit form of a pathogen (or its toxin) to stimulate adaptive immunity without causing disease. The immune system generates memory B and T cells, enabling a rapid, effective response upon future exposure to the actual pathogen. Vaccines are among the most cost-effective public health interventions; CARPHA and PAHO coordinate vaccination programmes across the Caribbean.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Vaccination Programmes in the Caribbean",
          body: "The Expanded Programme on Immunisation (EPI), coordinated by PAHO/WHO, ensures that Caribbean nations maintain high vaccination coverage for childhood diseases (measles, mumps, rubella, polio, hepatitis B, Haemophilus influenzae type b). Pharmacy technicians may be involved in vaccine storage (maintaining the cold chain at 2-8°C), inventory management, and in some jurisdictions, assisting with vaccine administration under pharmacist supervision. COVID-19 vaccination programmes further expanded the role of pharmacies in Caribbean immunisation efforts.",
        },
        {
          type: "table",
          caption: "Innate vs Adaptive Immunity Comparison",
          headers: ["Feature", "Innate Immunity", "Adaptive Immunity"],
          rows: [
            ["Response speed", "Immediate (minutes to hours)", "Delayed (days to weeks on first exposure)"],
            ["Specificity", "Non-specific — responds to broad pathogen patterns", "Highly specific — targets individual antigens"],
            ["Memory", "No memory — same response every time", "Immunological memory — faster, stronger on re-exposure"],
            ["Key cells", "Neutrophils, macrophages, natural killer cells", "B lymphocytes, T lymphocytes"],
            ["Key molecules", "Complement, cytokines, antimicrobial peptides", "Antibodies (immunoglobulins)"],
            ["Clinical application", "Anti-inflammatory drugs modulate innate responses", "Vaccines stimulate adaptive immune memory"],
          ],
        },
        {
          type: "knowledge-check",
          question: "Which type of immunity provides immunological memory, allowing a faster response upon re-exposure to a pathogen?",
          options: [
            "Innate immunity",
            "Adaptive immunity",
            "Physical barrier immunity",
            "Chemical barrier immunity",
          ],
          correctIndex: 1,
          explanation:
            "Adaptive immunity provides immunological memory through the generation of memory B and T cells. After the first encounter with a pathogen, these memory cells persist and can mount a faster, stronger immune response upon re-exposure — the principle that makes vaccination effective.",
        },
      ],
    },
    // ── Lesson 6.2 ──
    {
      id: "m6-l2",
      title: "Dengue, Chikungunya & Zika: Arboviral Diseases of the Caribbean",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Mosquito-Borne Viral Diseases: The Caribbean Reality",
        },
        {
          type: "text",
          body: "The Caribbean is a hotspot for arboviral diseases — viral infections transmitted by arthropod vectors, primarily the Aedes aegypti and Aedes albopictus mosquitoes. Dengue fever, chikungunya, and Zika virus disease are the three most significant arboviruses in the region, all transmitted by the same mosquito species. The tropical climate, abundant rainfall, and urban environments of Caribbean islands create ideal breeding conditions for Aedes mosquitoes, making these diseases endemic or epidemic threats year-round.",
        },
        {
          type: "text",
          body: "For pharmacy technicians, arboviral diseases generate significant workload during outbreaks: high demand for paracetamol (the primary symptomatic treatment), oral rehydration salts, antiemetics, and insect repellents. Critically, NSAIDs and aspirin are contraindicated in suspected dengue because they increase bleeding risk — a potentially life-threatening error that pharmacy technicians must be vigilant about preventing.",
        },
        {
          type: "table",
          caption: "Comparison of Major Caribbean Arboviral Diseases",
          headers: ["Feature", "Dengue", "Chikungunya", "Zika"],
          rows: [
            ["Vector", "Aedes aegypti / albopictus", "Aedes aegypti / albopictus", "Aedes aegypti / albopictus"],
            ["Incubation", "4-10 days", "3-7 days", "3-14 days"],
            ["Key symptoms", "High fever, severe headache, retro-orbital pain, myalgia, rash", "Fever, severe joint pain (often debilitating and prolonged)", "Often mild: fever, rash, conjunctivitis, joint pain"],
            ["Serious complication", "Dengue haemorrhagic fever / dengue shock syndrome (can be fatal)", "Chronic arthralgia lasting months to years", "Microcephaly and other birth defects in babies of infected pregnant women"],
            ["Treatment", "Supportive: paracetamol, fluids, rest. NO NSAIDs/aspirin", "Supportive: paracetamol, NSAIDs (safe here), fluids", "Supportive: paracetamol, fluids, rest"],
            ["Vaccine", "Dengvaxia (limited use — seropositive individuals only)", "None currently available", "None currently available"],
            ["Caribbean impact", "Endemic across all CARICOM nations; periodic epidemics", "Major epidemic in 2014; now endemic", "2015-2016 epidemic; ongoing transmission"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "CRITICAL: No NSAIDs or Aspirin in Suspected Dengue",
          body: "Dengue can cause thrombocytopenia (low platelet count) and vascular permeability, increasing the risk of haemorrhage. NSAIDs (ibuprofen, diclofenac, naproxen) and aspirin inhibit platelet function and further increase bleeding risk. Giving NSAIDs or aspirin to a dengue patient can precipitate dengue haemorrhagic fever. During dengue season, pharmacy technicians must exercise extra caution when dispensing pain relievers — paracetamol is the ONLY safe analgesic/antipyretic for suspected dengue. This distinction can save lives.",
        },
        {
          type: "case-study",
          title: "Case Study: Dengue Season at the Pharmacy Counter",
          scenario:
            "It is September — peak dengue season in Trinidad. A 35-year-old man comes to your pharmacy in Arima requesting ibuprofen for 'terrible body pain and fever' that started three days ago. He mentions his neighbour was recently diagnosed with dengue. He has no prescription — he wants to buy ibuprofen over the counter. You notice he appears flushed, with visible petechiae (small red spots) on his forearms.",
          questions: [
            "Why is ibuprofen dangerous for this patient?",
            "What OTC medication would be safe and appropriate instead?",
            "What additional action should the pharmacy team take?",
          ],
          discussion:
            "This patient almost certainly has dengue, given the clinical presentation (fever, myalgia, petechiae) during peak season with a known dengue case nearby. Ibuprofen is an NSAID that would inhibit platelet function and dramatically increase his bleeding risk — the petechiae already suggest vascular involvement. Paracetamol is the only safe analgesic/antipyretic. The pharmacy technician should immediately alert the pharmacist, who can counsel the patient on paracetamol use, adequate hydration (oral rehydration salts), and the urgent need to see a doctor for blood tests (platelet count, haematocrit). This case demonstrates how a pharmacy technician's knowledge can prevent a potentially fatal error.",
        },
        {
          type: "key-term",
          term: "Thrombocytopenia",
          definition:
            "An abnormally low platelet count in the blood (below 150,000/μL). Platelets are essential for blood clotting; thrombocytopenia increases the risk of spontaneous bleeding and bruising. Dengue fever commonly causes thrombocytopenia, which is why antiplatelet drugs (aspirin, NSAIDs) are dangerous in dengue patients. The term breaks down as: thromb/o (clot) + cyt/o (cell) + -penia (deficiency).",
        },
        {
          type: "knowledge-check",
          question: "During dengue season in the Caribbean, the ONLY safe over-the-counter analgesic/antipyretic is:",
          options: [
            "Ibuprofen",
            "Aspirin",
            "Paracetamol (acetaminophen)",
            "Diclofenac",
          ],
          correctIndex: 2,
          explanation:
            "Paracetamol is the only safe analgesic and antipyretic for suspected dengue. NSAIDs (ibuprofen, diclofenac, naproxen) and aspirin all inhibit platelet function and increase bleeding risk, which is dangerous in dengue where thrombocytopenia and vascular permeability are already elevated. This is one of the most critical safety points for Caribbean pharmacy practice.",
        },
      ],
    },
    // ── Lesson 6.3 ──
    {
      id: "m6-l3",
      title: "HIV/AIDS, Tuberculosis & Antimicrobial Stewardship",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "HIV/AIDS in the Caribbean",
        },
        {
          type: "text",
          body: "The Caribbean has the second-highest HIV prevalence rate of any region in the world after sub-Saharan Africa. An estimated 330,000 people are living with HIV across the region, with the highest prevalence rates in the Bahamas, Trinidad & Tobago, Jamaica, and Haiti. Antiretroviral therapy (ART) has transformed HIV from a death sentence to a manageable chronic condition, but treatment requires strict medication adherence — typically a combination of 2-3 antiretroviral drugs taken daily for life. Pharmacy technicians play a critical role in ensuring accurate dispensing of ARV regimens and supporting medication adherence.",
        },
        {
          type: "text",
          body: "Modern ART regimens typically use fixed-dose combination tablets containing two or three drugs in a single pill, greatly simplifying adherence. Common regimens include tenofovir/emtricitabine/efavirenz (TLE), tenofovir/lamivudine/dolutegravir (TLD), or abacavir/lamivudine with a third agent. The CARPHA/PAHO HIV treatment guidelines for the Caribbean follow WHO recommendations and are updated regularly. Generic ARVs procured through the Clinton Health Access Initiative (CHAI) and the Global Fund have made treatment more affordable across the region.",
        },
        {
          type: "heading",
          level: 3,
          text: "Tuberculosis",
        },
        {
          type: "text",
          body: "Tuberculosis (TB) remains a public health concern in the Caribbean, particularly in Haiti, the Dominican Republic, and Guyana. TB is caused by Mycobacterium tuberculosis and primarily affects the lungs (pulmonary TB). Treatment requires a prolonged multi-drug regimen: typically isoniazid, rifampicin, pyrazinamide, and ethambutol for 2 months (intensive phase), followed by isoniazid and rifampicin for 4 months (continuation phase) — a total of 6 months minimum. Pharmacy technicians must understand that TB treatment requires strict adherence; incomplete treatment drives drug-resistant TB, which is far more difficult and expensive to treat.",
        },
        {
          type: "heading",
          level: 3,
          text: "Antimicrobial Resistance: A Growing Caribbean Threat",
        },
        {
          type: "text",
          body: "Antimicrobial resistance (AMR) — when bacteria, viruses, fungi, or parasites evolve to resist the drugs designed to kill them — is recognised by WHO as one of the greatest threats to global health. In the Caribbean, AMR is driven by several factors: over-the-counter access to antibiotics (without prescription) in some jurisdictions, incomplete antibiotic courses, inappropriate prescribing, use of antibiotics in agriculture, and limited laboratory capacity for culture and sensitivity testing. CARPHA leads the Caribbean AMR Surveillance Programme, collecting data on resistance patterns across the region.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Antimicrobial Stewardship: The Pharmacy Technician's Role",
          body: "Antimicrobial stewardship means using antimicrobial drugs responsibly to preserve their effectiveness. Pharmacy technicians contribute by: ensuring antibiotics are dispensed only with valid prescriptions (where required by law), counselling patients to complete their full antibiotic course, not dispensing leftover antibiotics for new infections, flagging inappropriate antibiotic prescriptions to the pharmacist, and educating patients that antibiotics do not work against viral infections (colds, flu, most sore throats).",
        },
        {
          type: "key-term",
          term: "Antimicrobial Resistance (AMR)",
          definition:
            "The ability of microorganisms (bacteria, viruses, fungi, parasites) to grow and survive despite the presence of antimicrobial drugs that should kill them or stop their growth. AMR occurs naturally through genetic mutation and horizontal gene transfer, but is accelerated by misuse and overuse of antimicrobials. Methicillin-resistant Staphylococcus aureus (MRSA) and extended-spectrum beta-lactamase (ESBL) producing bacteria are examples of resistant organisms of concern in Caribbean hospitals.",
        },
        {
          type: "table",
          caption: "Major Antimicrobial Drug Classes",
          headers: ["Class", "Examples (stem)", "Mechanism", "Caribbean Use"],
          rows: [
            ["Penicillins", "Amoxicillin (-cillin)", "Inhibit bacterial cell wall synthesis", "First-line for many community infections; CDAP/NHF listed"],
            ["Cephalosporins", "Cephalexin, ceftriaxone (-cef-)", "Inhibit bacterial cell wall synthesis", "Broad-spectrum; hospital and community use"],
            ["Macrolides", "Azithromycin, erythromycin (-mycin)", "Inhibit bacterial protein synthesis", "Respiratory infections; STIs; penicillin allergy alternative"],
            ["Fluoroquinolones", "Ciprofloxacin, levofloxacin (-floxacin)", "Inhibit bacterial DNA replication", "UTIs, severe infections; growing resistance concerns"],
            ["Antiretrovirals", "Tenofovir, dolutegravir, efavirenz", "Various mechanisms targeting HIV replication cycle", "HIV/AIDS management; CARPHA/PAHO-guided regimens"],
            ["Anti-TB drugs", "Isoniazid, rifampicin, pyrazinamide, ethambutol", "Various mechanisms targeting M. tuberculosis", "6-month standard regimen; DOT programmes across Caribbean"],
          ],
        },
        {
          type: "knowledge-check",
          question: "The standard treatment duration for drug-susceptible pulmonary tuberculosis is:",
          options: [
            "2 weeks",
            "6 weeks",
            "6 months minimum",
            "12 months minimum",
          ],
          correctIndex: 2,
          explanation:
            "Standard TB treatment lasts a minimum of 6 months: a 2-month intensive phase with four drugs (isoniazid, rifampicin, pyrazinamide, ethambutol) followed by a 4-month continuation phase with two drugs (isoniazid, rifampicin). Shorter courses risk relapse and the development of drug-resistant TB.",
        },
      ],
    },
    // ── Lesson 6.4 ──
    {
      id: "m6-l4",
      title: "Putting It All Together: The Pharmacy Technician as Health Defender",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Integrating Anatomy, Physiology & Medical Terminology into Practice",
        },
        {
          type: "text",
          body: "Throughout this course, you have built a comprehensive understanding of the human body — from the molecular building blocks of medical terminology to the complex interplay of organ systems. As a pharmacy technician in the Caribbean, this knowledge is not abstract theory; it is the foundation upon which safe, effective pharmacy practice is built. Every prescription you handle involves a drug acting on a specific body system to treat a specific condition. Your ability to understand that relationship — to know what a drug does, why it was prescribed, and what could go wrong — makes you an essential member of the healthcare team.",
        },
        {
          type: "text",
          body: "The Caribbean's unique disease landscape demands that pharmacy technicians possess knowledge beyond what might be required in other regions. You must understand cardiovascular disease because the Caribbean has among the highest hypertension rates in the Americas. You must understand diabetes because it affects up to 15% of the adult population in some CARICOM nations. You must understand arboviral diseases because dengue, chikungunya, and Zika are annual threats. You must understand sickle cell disease because the Caribbean has among the highest prevalence rates in the world. And you must understand antimicrobial resistance because the region faces growing threats from resistant organisms.",
        },
        {
          type: "scenario-simulation",
          title: "Scenario: A Complex Patient at the Pharmacy Counter",
          description:
            "You are a pharmacy technician working the afternoon shift at a busy community pharmacy in Chaguanas, Trinidad. A patient approaches the counter with multiple prescriptions and questions. Navigate this clinical scenario by making the best decisions at each step.",
          nodes: [
            {
              id: "start",
              text: "Mrs. Ramnath, a 62-year-old regular patient, presents three prescriptions: (1) metformin 1000 mg twice daily, (2) amlodipine 10 mg daily, (3) atorvastatin 40 mg daily. She also wants to buy ibuprofen over the counter for knee pain. She mentions she recently had blood tests and her doctor said her 'kidney number was a bit low'. What do you do first?",
              choices: [
                {
                  label: "Process all prescriptions and sell the ibuprofen without comment",
                  nextNodeId: "poor-choice-1",
                  feedback: "Processing everything without considering the clinical information is unsafe. The mention of low kidney function is a critical red flag that should be addressed.",
                  isOptimal: false,
                },
                {
                  label: "Flag the kidney concern to the pharmacist before processing the prescriptions, and hold the ibuprofen request",
                  nextNodeId: "good-choice-1",
                  feedback: "Excellent. Reduced kidney function affects the safety of both metformin and ibuprofen. Alerting the pharmacist is the correct first step.",
                  isOptimal: true,
                },
                {
                  label: "Tell Mrs. Ramnath she cannot have any of her medications until she gets new blood tests",
                  nextNodeId: "poor-choice-2",
                  feedback: "While your concern is valid, refusing to dispense prescribed medications is not the technician's decision to make. This should be escalated to the pharmacist.",
                  isOptimal: false,
                },
              ],
            },
            {
              id: "good-choice-1",
              text: "The pharmacist reviews the situation and calls Mrs. Ramnath's doctor. The doctor confirms her eGFR is 42 mL/min (Stage 3b CKD) and has already adjusted the metformin dose to 500 mg twice daily — but the prescription still says 1000 mg twice daily due to a printing error. The pharmacist corrects the prescription. Now Mrs. Ramnath asks again about the ibuprofen for her knee pain. What do you advise?",
              choices: [
                {
                  label: "Explain that NSAIDs like ibuprofen can worsen kidney function and suggest she speak with the pharmacist about a safer alternative",
                  nextNodeId: "optimal-end",
                  feedback: "Perfect. NSAIDs are nephrotoxic and should be avoided in CKD. Directing her to the pharmacist for a safer alternative (paracetamol, topical NSAID, or referral) is the ideal response.",
                  isOptimal: true,
                },
                {
                  label: "Sell her the ibuprofen — it is an OTC product and she has a right to buy it",
                  nextNodeId: "poor-end-1",
                  feedback: "While ibuprofen is OTC, selling it to a patient with known CKD (eGFR 42) is unsafe. NSAIDs can further damage the kidneys and should be avoided in renal impairment. A pharmacy technician's duty of care extends to OTC sales.",
                  isOptimal: false,
                },
                {
                  label: "Tell her ibuprofen is out of stock to avoid conflict",
                  nextNodeId: "poor-end-2",
                  feedback: "Lying to a patient is never acceptable, even with good intentions. The patient deserves honest, professional communication about why ibuprofen may not be safe for her.",
                  isOptimal: false,
                },
              ],
            },
            {
              id: "optimal-end",
              text: "Mrs. Ramnath thanks you for looking out for her health. The pharmacist recommends paracetamol 1 g four times daily for her knee pain and suggests she ask her doctor about a referral to physiotherapy. Her corrected prescriptions are dispensed safely, and a note is added to her patient profile flagging her CKD status for future dispensing. You have potentially prevented both a metformin overdose and NSAID-induced kidney damage.",
              isEnd: true,
              outcome: "success",
              summary: "Outstanding clinical awareness. You identified a safety concern from a casual patient comment, escalated appropriately to the pharmacist, and helped prevent a potentially dangerous OTC sale. This is exactly the kind of vigilance that makes pharmacy technicians invaluable healthcare professionals.",
            },
            {
              id: "poor-choice-1",
              text: "You dispense all three prescriptions and sell the ibuprofen. Two weeks later, Mrs. Ramnath is admitted to hospital with acute kidney injury. Her eGFR had been 42 mL/min (Stage 3b CKD), but the combination of metformin 1000 mg twice daily (dose too high for her kidney function) and ibuprofen (nephrotoxic) caused further kidney damage. Her metformin also caused lactic acidosis requiring ICU admission.",
              isEnd: true,
              outcome: "failure",
              summary: "This outcome illustrates why pharmacy technicians must listen carefully to patients and flag clinical concerns. The patient mentioned low kidney numbers — this was a critical safety signal. Metformin at the prescribed dose was too high for her CKD, and ibuprofen further damaged her kidneys.",
            },
            {
              id: "poor-choice-2",
              text: "Mrs. Ramnath is upset and leaves without her medications. She goes to another pharmacy that dispenses everything without question. She takes the full metformin dose and buys ibuprofen elsewhere. The outcome is the same: hospitalisation for acute kidney injury. Additionally, she files a complaint about your pharmacy for refusing to dispense her doctor's prescriptions.",
              isEnd: true,
              outcome: "failure",
              summary: "While your instinct to protect the patient was correct, the execution was wrong. The appropriate action was to flag the concern to the supervising pharmacist — not to refuse dispensing unilaterally. The pharmacist has the authority and clinical expertise to contact the prescriber, verify doses, and make dispensing decisions.",
            },
            {
              id: "poor-end-1",
              text: "Mrs. Ramnath takes the ibuprofen regularly for two weeks. Combined with her CKD, the NSAID causes a significant decline in kidney function. Her eGFR drops from 42 to 28 mL/min, pushing her from Stage 3b to Stage 4 CKD and closer to requiring dialysis. Her doctor is alarmed and asks where she obtained ibuprofen despite her kidney condition.",
              isEnd: true,
              outcome: "failure",
              summary: "NSAIDs are nephrotoxic and should be avoided in patients with chronic kidney disease. Even though ibuprofen is available OTC, the pharmacy team has a duty of care to intervene when they know a product is unsafe for a particular patient. The patient's casual mention of 'low kidney numbers' was a critical safety flag.",
            },
            {
              id: "poor-end-2",
              text: "Mrs. Ramnath buys ibuprofen from another shop. She also does not understand why it might be harmful, because no one explained the risk. She takes ibuprofen regularly, further damaging her kidneys. Meanwhile, you have missed an opportunity to educate a patient and potentially prevent harm — and you have compromised your professional integrity by being dishonest.",
              isEnd: true,
              outcome: "failure",
              summary: "Honesty is a cornerstone of pharmacy professionalism. When a product is unsafe for a patient, the correct response is honest communication and referral to the pharmacist — not deception. Patients trust pharmacy teams to be truthful advocates for their health.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Power of Listening",
          body: "The scenario above illustrates a crucial point: patient safety often depends on the pharmacy technician listening to what patients say in casual conversation. A comment like 'my kidney number was a bit low' is not small talk — it is clinically critical information. Train yourself to hear these signals and act on them by flagging concerns to the pharmacist. This vigilance is what elevates pharmacy technicians from dispensers to healthcare professionals.",
        },
        {
          type: "heading",
          level: 3,
          text: "Course Summary: Key Takeaways",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Medical terminology follows a logical system of roots, prefixes, and suffixes — learn the building blocks and you can decode any term",
            "Drug name stems (INN system) reveal what a drug does: -olol (beta-blockers), -pril (ACE inhibitors), -sartan (ARBs), -statin (cholesterol), -formin (metformin)",
            "The cardiovascular system is the #1 medication category in Caribbean pharmacies due to the hypertension and heart disease epidemic",
            "Sickle cell disease has high prevalence in Caribbean populations — handle hydroxyurea, folic acid, and opioid requests with knowledge and compassion",
            "The respiratory system generates high prescription volume through asthma and COPD medications — inhaler technique counselling saves lives",
            "Renal function (GFR) determines whether drugs can be safely dosed — always listen for clues about kidney health",
            "The Caribbean diabetes epidemic means metformin, insulins, and glucose monitoring supplies are daily dispensing staples",
            "Arboviral diseases (dengue, chikungunya, Zika) require specific knowledge — NO NSAIDs/aspirin in suspected dengue",
            "Antimicrobial resistance is a growing Caribbean threat — pharmacy technicians are frontline stewardship advocates",
            "Every piece of anatomy and physiology knowledge you have gained translates directly to safer, more effective patient care",
          ],
        },
        {
          type: "key-term",
          term: "Antimicrobial Stewardship",
          definition:
            "A coordinated programme of interventions designed to improve and measure the appropriate use of antimicrobial agents by promoting the selection of the optimal antimicrobial drug regimen, dose, duration, and route of administration. In pharmacy, stewardship includes dispensing antibiotics only with valid prescriptions, educating patients on completing full courses, and flagging inappropriate prescribing to the pharmacist.",
        },
        {
          type: "knowledge-check",
          question: "A patient in your pharmacy mentions her doctor said her 'kidney number was low'. Which of the following medications should you be most cautious about?",
          options: [
            "Paracetamol 500 mg tablets",
            "Omeprazole 20 mg capsules",
            "Ibuprofen 400 mg tablets",
            "Cetirizine 10 mg tablets",
          ],
          correctIndex: 2,
          explanation:
            "Ibuprofen is an NSAID that is nephrotoxic — it can worsen kidney function in patients with CKD. The patient's mention of a 'low kidney number' (likely referring to a low eGFR) is a critical safety signal. Paracetamol, omeprazole, and cetirizine are generally safe in mild-to-moderate CKD at standard doses, but NSAIDs should be avoided.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m6-q1",
      question: "What is the key difference between innate and adaptive immunity?",
      options: [
        "Innate immunity is specific; adaptive immunity is non-specific",
        "Innate immunity provides immediate, non-specific defence; adaptive immunity provides targeted, memory-based defence",
        "Innate immunity only works against bacteria; adaptive immunity only works against viruses",
        "Innate immunity requires vaccination; adaptive immunity is present from birth",
      ],
      correctIndex: 1,
      explanation:
        "Innate immunity provides immediate, non-specific defence against a broad range of pathogens. Adaptive immunity develops over time, targets specific pathogens with precision, and generates immunological memory for faster responses upon re-exposure. Both systems work together to provide comprehensive immune protection.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q2",
      question: "Which analgesic is contraindicated in suspected dengue fever?",
      options: [
        "Paracetamol",
        "Ibuprofen",
        "Codeine",
        "Tramadol",
      ],
      correctIndex: 1,
      explanation:
        "Ibuprofen (and all NSAIDs, plus aspirin) is contraindicated in suspected dengue because it inhibits platelet function and increases bleeding risk. Dengue already causes thrombocytopenia and vascular permeability — adding NSAIDs can precipitate dengue haemorrhagic fever. Paracetamol is the only safe antipyretic/analgesic for dengue.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q3",
      question: "The Caribbean has the second-highest HIV prevalence rate of any region in the world, after:",
      options: [
        "South-East Asia",
        "Eastern Europe",
        "Sub-Saharan Africa",
        "Central America",
      ],
      correctIndex: 2,
      explanation:
        "The Caribbean has the second-highest HIV prevalence rate globally, after sub-Saharan Africa. This underscores the importance of pharmacy technicians understanding antiretroviral therapy, ensuring accurate dispensing of ARV regimens, and supporting medication adherence in their communities.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q4",
      question: "Standard tuberculosis treatment requires a minimum of 6 months with multiple drugs.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 0,
      explanation:
        "True. Standard TB treatment requires a minimum of 6 months: a 2-month intensive phase with four drugs (isoniazid, rifampicin, pyrazinamide, ethambutol) followed by a 4-month continuation phase with two drugs (isoniazid, rifampicin). Incomplete treatment is the primary driver of drug-resistant TB.",
      questionType: "true_false",
      questionData: {
        correct_answer: true,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q5",
      question: "Which of the following are drivers of antimicrobial resistance in the Caribbean? Select ALL that apply.",
      options: [
        "Over-the-counter access to antibiotics without prescription",
        "Patients not completing their full antibiotic course",
        "Inappropriate prescribing by clinicians",
        "Excessive hand washing",
        "Use of antibiotics in agriculture",
      ],
      correctIndex: 0,
      explanation:
        "OTC antibiotic access, incomplete antibiotic courses, inappropriate prescribing, and agricultural antibiotic use are all recognised drivers of AMR in the Caribbean. Excessive hand washing is not a driver of AMR — in fact, good hand hygiene helps prevent infections and reduces the need for antibiotics.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 2, 4],
      },
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m6-q6",
      question: "Match each arboviral disease with its most distinctive clinical feature.",
      options: [
        "Dengue → Retro-orbital pain and risk of haemorrhagic complications",
        "Chikungunya → Severe, often prolonged joint pain",
        "Zika → Microcephaly risk in babies of infected pregnant women",
      ],
      correctIndex: 0,
      explanation:
        "All matches are correct: Dengue is characterised by retro-orbital pain and risk of haemorrhagic fever; Chikungunya causes severe, often debilitating joint pain that can persist for months; Zika's most serious complication is microcephaly and other birth defects in babies born to infected mothers.",
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Dengue", right: "Retro-orbital pain and haemorrhagic risk" },
          { left: "Chikungunya", right: "Severe, prolonged joint pain" },
          { left: "Zika", right: "Microcephaly risk in pregnancy" },
        ],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q7",
      question: "A patient in your pharmacy asks for amoxicillin to treat a cold. The most appropriate response is:",
      options: [
        "Sell the amoxicillin — colds are serious infections",
        "Explain that colds are caused by viruses, and antibiotics only work against bacteria; suggest they speak with the pharmacist about symptomatic relief",
        "Recommend a stronger antibiotic like ciprofloxacin instead",
        "Refuse to speak to the patient and ignore their request",
      ],
      correctIndex: 1,
      explanation:
        "Colds are caused by viruses and do not respond to antibiotics. Dispensing amoxicillin for a viral infection contributes to antimicrobial resistance. The correct response is to explain that antibiotics are not effective against viruses and to direct the patient to the pharmacist for appropriate symptomatic treatment (paracetamol, decongestants, etc.). This is antimicrobial stewardship in action.",
      questionType: "scenario",
      questionData: {
        context: "Community pharmacy counter. A patient makes an OTC request for an antibiotic.",
      },
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m6-q8",
      question: "Place the following events of the adaptive immune response in the correct order.",
      options: [
        "Pathogen enters the body and is detected by antigen-presenting cells",
        "Antigen is presented to T helper cells",
        "B cells are activated and produce specific antibodies",
        "Memory cells are formed for future rapid response",
      ],
      correctIndex: 0,
      explanation:
        "The adaptive immune response follows this sequence: (1) pathogen entry and detection by antigen-presenting cells (dendritic cells, macrophages), (2) antigen presentation to T helper cells, (3) activation of B cells and antibody production, (4) formation of memory cells for faster future responses. This cascade is the basis for how vaccines work.",
      questionType: "ordering",
      questionData: {
        correct_order: [0, 1, 2, 3],
      },
      difficulty: "hard",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q9",
      question: "All three major Caribbean arboviral diseases (dengue, chikungunya, Zika) are transmitted by the same mosquito genus:",
      options: [
        "Anopheles",
        "Culex",
        "Aedes",
        "Mansonia",
      ],
      correctIndex: 2,
      explanation:
        "Dengue, chikungunya, and Zika are all transmitted primarily by Aedes aegypti mosquitoes (and to a lesser extent Aedes albopictus). This is why vector control measures targeting Aedes mosquitoes — eliminating standing water, using insect repellent, and using bed nets — simultaneously reduce the risk of all three diseases.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q10",
      question: "Vaccines work by stimulating which component of the immune system?",
      options: [
        "Innate immunity only",
        "Adaptive immunity, specifically immunological memory",
        "The inflammatory response only",
        "Physical barrier defences like the skin",
      ],
      correctIndex: 1,
      explanation:
        "Vaccines stimulate adaptive immunity by exposing the immune system to a weakened, inactivated, or subunit form of a pathogen. This triggers the production of memory B and T cells without causing disease. Upon future exposure to the real pathogen, these memory cells mount a rapid, effective immune response. While vaccines may also activate some innate immune responses, their primary mechanism is through adaptive immune memory.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// FULL COURSE ASSEMBLY
// ============================================================================

const anatomyCourse: FullCourse = {
  courseId: "anatomy-physiology-medical-terminology",
  title: "Anatomy, Physiology & Medical Terminology",
  tagline: "Understand the human body and the language of medicine — with Caribbean clinical context",
  modules: [module1, module2, module3, module4, module5, module6],
};

// ── Utility helpers ─────────────────────────────────────────────────────────

export const totalLessons = anatomyCourse.modules.reduce(
  (sum, m) => sum + m.lessons.length,
  0,
);

export const totalQuizQuestions = anatomyCourse.modules.reduce(
  (sum, m) => sum + m.quiz.length,
  0,
);

export default anatomyCourse;
