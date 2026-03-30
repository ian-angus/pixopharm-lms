// ============================================================================
// PIXOPHARM LMS — Interactive Learning Content
// Knowledge Checks, Branching Scenarios & Flashcard Decks
// Foundations of Pharmacy Practice — Modules 1–4
// ============================================================================

// ── Knowledge Check Types ────────────────────────────────────────────────────

export interface KnowledgeCheck {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hint?: string;
}

// ── Branching Scenario Types ─────────────────────────────────────────────────

export interface ScenarioChoice {
  label: string;
  nextNodeId: string;
  feedback: string;
  isOptimal?: boolean;
}

export interface ScenarioNode {
  id: string;
  text: string;
  choices?: ScenarioChoice[];
  isEnd?: boolean;
  outcome?: "success" | "partial" | "failure";
  summary?: string;
}

export interface BranchingScenario {
  id: string;
  title: string;
  description: string;
  moduleId: string;
  nodes: ScenarioNode[];
}

// ── Flashcard Types ──────────────────────────────────────────────────────────

export interface FlashcardData {
  front: string;
  back: string;
  moduleId: string;
  lessonId?: string;
}

// ============================================================================
// KNOWLEDGE CHECKS — Inline comprehension questions keyed by lesson ID
// ============================================================================

export const knowledgeChecks: Record<string, KnowledgeCheck[]> = {
  // ── Module 1, Lesson 1: The Evolution of Pharmacy Practice ──────────────
  "m1-l1": [
    {
      question:
        "What does the concept of 'pharmaceutical care' emphasise compared to traditional pharmacy practice?",
      options: [
        "Faster dispensing of prescriptions",
        "A shift from product-centred to patient-centred care",
        "Increased profit margins for pharmacies",
        "Replacing physicians with pharmacists",
      ],
      correctIndex: 1,
      explanation:
        "Pharmaceutical care, coined by Hepler and Strand in 1990, redefined pharmacy as a patient-centred profession focused on achieving therapeutic outcomes that improve quality of life, rather than simply dispensing products.",
      hint: "Think about whose needs should be at the centre of pharmacy practice.",
    },
    {
      question:
        "Why is the Ebers Papyrus significant in the history of pharmacy?",
      options: [
        "It established the first pharmacy licensing laws",
        "It is one of the earliest known pharmaceutical documents, containing over 800 prescriptions",
        "It introduced the modern drug classification system",
        "It was the first Caribbean pharmacy textbook",
      ],
      correctIndex: 1,
      explanation:
        "Dating to approximately 1550 BCE, the Ebers Papyrus is one of the oldest surviving pharmaceutical texts. It documents over 800 prescriptions and remedies from ancient Egypt, demonstrating that systematic drug preparation has existed for millennia.",
      hint: "Consider which ancient civilisation produced this document and how far back it dates.",
    },
    {
      question:
        "Why are pharmacies particularly important as healthcare access points in the Caribbean?",
      options: [
        "Caribbean islands have too many hospitals",
        "Pharmacies are the cheapest businesses to operate",
        "They often serve as the first point of care where patients cannot easily reach a doctor or hospital",
        "Caribbean governments require all citizens to visit pharmacies first",
      ],
      correctIndex: 2,
      explanation:
        "In the Caribbean, especially on smaller islands, pharmacies are often the most accessible healthcare contact point. Geographic isolation, limited hospital infrastructure, and transportation challenges mean many patients turn to their local pharmacy for initial care and health advice.",
    },
  ],

  // ── Module 1, Lesson 2: The Pharmacy Team: Roles & Responsibilities ─────
  "m1-l2": [
    {
      question:
        "In most Caribbean jurisdictions, what is the key limitation on a pharmacy technician's dispensing role?",
      options: [
        "Technicians cannot enter the dispensing area at all",
        "Technicians may prepare medications but the final verification check requires a pharmacist",
        "Technicians can only dispense over-the-counter medications",
        "Technicians must have a PharmD degree to dispense",
      ],
      correctIndex: 1,
      explanation:
        "Across Trinidad & Tobago, Jamaica, and Barbados, pharmacy technicians may assist with prescription preparation, but the final verification check before dispensing to a patient must be performed by a registered pharmacist. This is a critical legal boundary.",
      hint: "The question is about the final step before the medication reaches the patient.",
    },
    {
      question:
        "What distinguishes a pharmacy assistant from a pharmacy technician?",
      options: [
        "Assistants earn higher salaries",
        "Assistants have more training but fewer responsibilities",
        "Assistants perform non-clinical tasks like stocking and cashier duties and cannot handle prescription medications",
        "There is no legal distinction between the two roles",
      ],
      correctIndex: 2,
      explanation:
        "Pharmacy assistants handle operational tasks such as stocking shelves, cashier duties, and answering phones. They cannot handle prescription medications. Pharmacy technicians, by contrast, hold formal certification and assist with prescription data entry, medication preparation, and inventory management under pharmacist supervision.",
    },
    {
      question:
        "What could happen if a pharmacy technician exceeds their legal scope of practice?",
      options: [
        "They receive a verbal warning from their employer",
        "Nothing, as long as no patient is harmed",
        "They could face legal prosecution, even if acting with good intentions",
        "They automatically lose their certification for one year",
      ],
      correctIndex: 2,
      explanation:
        "Performing acts legally reserved for pharmacists — such as independently verifying prescriptions or providing clinical advice — can result in criminal prosecution in Caribbean jurisdictions, regardless of whether the technician's intentions were good. The law defines clear boundaries for patient safety.",
      hint: "Consider the legal warning presented in this lesson about exceeding scope of practice.",
    },
  ],

  // ── Module 1, Lesson 3: Pharmacy in the Caribbean Context ───────────────
  "m1-l3": [
    {
      question:
        "Which of the following is NOT one of the factors that make Caribbean pharmacy practice unique?",
      options: [
        "Tropical climate requiring strict cold chain management",
        "Abundant local pharmaceutical manufacturing capacity",
        "Geographic fragmentation requiring medication import across ocean",
        "Regulatory diversity with each island maintaining its own pharmacy laws",
      ],
      correctIndex: 1,
      explanation:
        "Most Caribbean nations have little or no domestic pharmaceutical manufacturing and rely heavily on imported medications. This dependency creates cost pressures, supply chain vulnerabilities (especially during hurricane season), and cold chain management challenges that are unique to the region.",
      hint: "Think about whether Caribbean islands typically manufacture their own medications.",
    },
    {
      question:
        "What is CARPHA and where is it headquartered?",
      options: [
        "The Caribbean Association of Pharmacists, based in Kingston, Jamaica",
        "The Caribbean Public Health Agency, based in Port of Spain, Trinidad and Tobago",
        "The Caribbean Regulatory System, based in Bridgetown, Barbados",
        "The CARICOM Pharmaceutical Authority, based in Georgetown, Guyana",
      ],
      correctIndex: 1,
      explanation:
        "CARPHA (Caribbean Public Health Agency) is the regional public health body headquartered in Port of Spain, Trinidad and Tobago. It coordinates disease surveillance, laboratory services, pharmaceutical quality assurance, and public health emergency response across the Caribbean.",
    },
    {
      question:
        "What is the purpose of the Caribbean Regulatory System (CRS)?",
      options: [
        "To set a single drug price for all CARICOM islands",
        "To train pharmacy technicians across the region",
        "To harmonise drug registration so a medicine approved in one member state can gain recognition in others",
        "To replace national pharmacy boards with a single regional board",
      ],
      correctIndex: 2,
      explanation:
        "The CRS is a CARICOM initiative working toward mutual recognition of drug registrations across member states. While progress has been gradual, the aim is to reduce duplication in regulatory review and improve medication access throughout the region. Each island still maintains its own regulatory independence.",
      hint: "The word 'harmonise' is key — think about what that means in the context of drug approval.",
    },
  ],

  // ── Module 2, Lesson 1: Roots, Prefixes, Suffixes & Drug Name Stems ────
  "m2-l1": [
    {
      question:
        "A medication ending in '-olol' belongs to which drug class?",
      options: [
        "ACE inhibitors",
        "Beta-blockers",
        "Calcium channel blockers",
        "Proton pump inhibitors",
      ],
      correctIndex: 1,
      explanation:
        "The stem '-olol' identifies beta-blockers (e.g., atenolol, metoprolol, propranolol, bisoprolol). These are among the most commonly dispensed medications in Caribbean pharmacies for hypertension, angina, and heart rate control.",
      hint: "Think about the cardiovascular drug stems table — which stem is associated with heart rate control?",
    },
    {
      question:
        "If a patient presents a prescription for 'fluconazole', the '-azole' suffix immediately tells you this is:",
      options: [
        "An antibiotic for bacterial infections",
        "An antifungal medication",
        "A proton pump inhibitor for acid reflux",
        "A benzodiazepine for anxiety",
      ],
      correctIndex: 1,
      explanation:
        "The '-azole' stem identifies azole antifungal medications. These are particularly high-volume in Caribbean pharmacies because the hot, humid tropical climate creates ideal conditions for fungal infections including oral thrush, skin infections, and vaginal candidiasis.",
    },
    {
      question:
        "What does the medical suffix '-itis' indicate?",
      options: [
        "Surgical removal of an organ",
        "Study of a body system",
        "Inflammation",
        "A blood condition",
      ],
      correctIndex: 2,
      explanation:
        "The suffix '-itis' means inflammation. For example: bronchitis (inflammation of the bronchi), gastritis (inflammation of the stomach), dermatitis (inflammation of the skin), and arthritis (inflammation of the joints).",
      hint: "Think about common conditions like bronchitis and arthritis — what do they have in common?",
    },
    {
      question:
        "Why should the drug name stems '-pam' and '-lam' immediately trigger heightened awareness in a pharmacy technician?",
      options: [
        "These drugs are always prescribed for children and require special dosing",
        "These stems identify benzodiazepines, which are controlled substances requiring special handling in ALL Caribbean jurisdictions",
        "These are the most expensive medications and require insurance pre-approval",
        "These drugs must always be compounded from raw ingredients",
      ],
      correctIndex: 1,
      explanation:
        "The stems '-pam' (e.g., diazepam, lorazepam, clonazepam) and '-lam' (e.g., alprazolam) identify benzodiazepines. These are controlled substances in every Caribbean jurisdiction, requiring special prescribing, dispensing, storage, and record-keeping protocols.",
    },
  ],

  // ── Module 2, Lesson 2: Common Medical Abbreviations ────────────────────
  "m2-l2": [
    {
      question:
        "What does the abbreviation 'AC' mean on a prescription?",
      options: [
        "After completion of the course",
        "After meals (ante cibum — but this is incorrect; AC actually means before meals)",
        "Before meals (ante cibum)",
        "As clinically appropriate",
      ],
      correctIndex: 2,
      explanation:
        "AC stands for 'ante cibum' (Latin for 'before meals'). Its counterpart, PC (post cibum), means 'after meals'. These are among the most commonly used prescription abbreviations in Caribbean pharmacy practice.",
      hint: "The Latin prefix 'ante' means 'before' — where else have you seen this prefix?",
    },
    {
      question:
        "Why is 'QD' listed as a dangerous abbreviation that should not be used?",
      options: [
        "It is not a real Latin abbreviation",
        "It can be easily confused with 'QID' (four times daily), leading to a fourfold dosing error",
        "It is only used in veterinary prescriptions",
        "It was banned by CARICOM in 2020",
      ],
      correctIndex: 1,
      explanation:
        "The abbreviation 'QD' (once daily) can easily be misread as 'QID' (four times daily), potentially causing a patient to take four times the intended dose. ISMP recommends writing 'daily' instead. This type of abbreviation error has caused documented patient harm.",
      hint: "Consider how similar 'QD' looks to another common dosing abbreviation when handwritten quickly.",
    },
    {
      question:
        "In Trinidad and Barbados, prescriptions typically use which abbreviation style for 'twice daily'?",
      options: [
        "BID (American convention)",
        "BD (British convention)",
        "B2D (Caribbean convention)",
        "2x/day (metric convention)",
      ],
      correctIndex: 1,
      explanation:
        "Trinidad & Tobago and Barbados predominantly use British-style abbreviations (BD, TDS, QDS) reflecting their colonial heritage, while Jamaica may use a mix of British and American styles (BID, TID, QID) depending on where the prescriber trained. Being comfortable with both systems is essential.",
    },
  ],

  // ── Module 2, Lesson 3: Reading & Interpreting Sig Codes ────────────────
  "m2-l3": [
    {
      question:
        "How should you translate the sig code '2 caps PO TID PC x 7/7' into patient-friendly language?",
      options: [
        "Take two capsules by injection three times daily for seven weeks",
        "Take two capsules by mouth three times daily after meals for 7 days",
        "Take two capsules under the tongue three times daily before meals for 7 days",
        "Take two capsules by mouth twice daily after meals for 7 hours",
      ],
      correctIndex: 1,
      explanation:
        "Breaking it down: '2 caps' = two capsules, 'PO' = by mouth, 'TID' = three times daily, 'PC' = after meals (post cibum), 'x 7/7' = for 7 days. The Caribbean convention '7/7' means days, not weeks or hours.",
      hint: "Decode each abbreviation individually: PO, TID, PC, and the Caribbean notation x 7/7.",
    },
    {
      question:
        "A prescription has a sig that you cannot fully read because the handwriting is ambiguous. What is the correct action?",
      options: [
        "Dispense the most common dose for that medication",
        "Ask the patient what dose they normally take",
        "Never guess — refer to the pharmacist, who should contact the prescriber for clarification",
        "Use a reference book to determine the standard dose",
      ],
      correctIndex: 2,
      explanation:
        "Never assume or guess when a prescription is ambiguous. The correct procedure is to refer to the pharmacist, who should then contact the prescriber directly for clarification. Document the clarification on the prescription with the prescriber's name, date, and time. Guessing can cause serious patient harm.",
    },
    {
      question:
        "What does 'gtt ii OU QID' mean?",
      options: [
        "Take two tablets by mouth four times daily",
        "Apply two grams to the outer ear four times daily",
        "Instil two drops in both eyes four times daily",
        "Give two units of oxygen four times daily",
      ],
      correctIndex: 2,
      explanation:
        "'gtt' = drops (from Latin 'guttae'), 'ii' = 2 (Roman numeral), 'OU' = both eyes (from Latin 'oculus uterque'), 'QID' = four times daily. This is an ophthalmic prescription for instilling two drops in both eyes four times daily.",
      hint: "'gtt' is an abbreviation for drops, and 'OU' refers to an anatomical location — which one?",
    },
  ],

  // ── Module 3, Lesson 1: Anatomy of a Prescription ──────────────────────
  "m3-l1": [
    {
      question:
        "What does the symbol '℞' (Rx) at the top of a prescription represent?",
      options: [
        "Restricted — indicating a controlled substance",
        "Recipe — a Latin instruction meaning 'take thou', directed at the pharmacist",
        "Refillable — indicating the prescription can be refilled",
        "Registered — confirming the prescriber is registered",
      ],
      correctIndex: 1,
      explanation:
        "The superscription '℞' derives from the Latin word 'recipe' meaning 'take thou' or 'take'. It is an instruction from the prescriber to the pharmacist to prepare and dispense the medication that follows. This symbol has been used on prescriptions for centuries.",
      hint: "Think about the Latin origin — what word does 'Rx' abbreviate?",
    },
    {
      question:
        "Which of these is a red flag that should make you question a prescription's validity?",
      options: [
        "The prescription is printed from a computer system",
        "The prescriber uses standard medical abbreviations",
        "The prescription is written in pencil and has visible alterations without a counter-signature",
        "The prescription includes the prescriber's registration number",
      ],
      correctIndex: 2,
      explanation:
        "Prescriptions written in pencil can be easily altered after being signed. Any alterations or crossed-out information should have the prescriber's counter-signature to confirm the changes were intentional. A prescription in pencil with visible, unsigned alterations is a significant red flag for potential tampering or fraud.",
    },
    {
      question:
        "The 'subscription' element of a prescription refers to:",
      options: [
        "The patient's health insurance information",
        "The prescriber's monthly pharmacy membership",
        "The quantity of medication to be dispensed",
        "The patient's signature acknowledging receipt",
      ],
      correctIndex: 2,
      explanation:
        "The subscription is the part of a prescription that specifies the quantity to dispense. It may appear as '#21' (number symbol) or 'Mitte 21' (Latin for 'send 21'). Understanding each element of a prescription ensures nothing is missed during the verification process.",
    },
  ],

  // ── Module 3, Lesson 2: Label Requirements Across Caribbean Islands ────
  "m3-l2": [
    {
      question:
        "Which Caribbean island specifically requires the NHF (National Health Fund) number on dispensing labels for subsidised medications?",
      options: [
        "Trinidad & Tobago",
        "Barbados",
        "Jamaica",
        "All three islands have an NHF programme",
      ],
      correctIndex: 2,
      explanation:
        "Jamaica's National Health Fund (NHF) provides subsidies for essential medications to qualifying patients with chronic diseases. The NHF number must appear on labels for subsidised medications to enable reimbursement and programme tracking. Trinidad and Barbados have their own separate programmes (CDAP and Drug Service respectively).",
      hint: "NHF is a programme specific to one island — which country created the National Health Fund?",
    },
    {
      question:
        "Which labelling requirement is shared across ALL three Caribbean islands (Trinidad, Jamaica, and Barbados)?",
      options: [
        "NHF beneficiary number",
        "Barbados Drug Service batch tracking number",
        "'Keep out of reach of children' warning",
        "CDAP programme reference number",
      ],
      correctIndex: 2,
      explanation:
        "All three islands require 'Keep out of reach of children' on dispensing labels. While each island has additional unique requirements (NHF number in Jamaica, Drug Service tracking in Barbados), the child safety warning is universal across all Caribbean jurisdictions.",
    },
    {
      question:
        "Why is including storage temperature guidance on labels especially important in the Caribbean?",
      options: [
        "Caribbean pharmacies do not have refrigerators",
        "It is a CARICOM trade requirement for exported medications",
        "The tropical climate with high heat and humidity can degrade medications that require controlled storage conditions",
        "Caribbean patients prefer to store medications outside",
      ],
      correctIndex: 2,
      explanation:
        "The Caribbean's tropical climate presents unique challenges for medication storage. High temperatures and humidity can degrade heat-sensitive medications. Clear storage instructions on labels (e.g., 'Store below 25°C', 'Refrigerate 2-8°C') help patients maintain medication efficacy and safety.",
    },
  ],

  // ── Module 3, Lesson 3: Prescription Verification & Common Errors ──────
  "m3-l3": [
    {
      question:
        "A patient presents a standard (non-controlled) prescription that was written 7 months ago. Can you dispense it?",
      options: [
        "Yes — standard prescriptions never expire",
        "No — standard prescriptions are generally valid for 6 months across Caribbean jurisdictions; this one has expired",
        "Yes — as long as the medication has not been recalled",
        "It depends on whether the patient has been taking the medication before",
      ],
      correctIndex: 1,
      explanation:
        "In Trinidad, Jamaica, and Barbados, standard prescriptions are generally considered valid for 6 months from the date of issue. A prescription older than 6 months is expired and should not be dispensed. The pharmacist can contact the prescriber for a new prescription or, in some cases, provide a small emergency supply.",
    },
    {
      question:
        "In Trinidad & Tobago, within what timeframe must a Schedule II controlled substance prescription be dispensed?",
      options: [
        "Within 6 months, like any standard prescription",
        "Within 72 hours of issue",
        "Within 24 hours of issue",
        "It can be dispensed at any time if the prescriber's signature is valid",
      ],
      correctIndex: 1,
      explanation:
        "In Trinidad & Tobago, controlled substance prescriptions (particularly Schedule II) must typically be dispensed within 72 hours of the date of issue. A prescription presented after this window should not be dispensed without contacting the prescriber for a new prescription.",
      hint: "Controlled substances have much stricter timeframes than standard prescriptions.",
    },
    {
      question:
        "Which step should a pharmacy technician take FIRST when receiving a new prescription?",
      options: [
        "Begin counting out the medication immediately to save time",
        "Check if the medication is in stock before examining the prescription",
        "Verify that the prescription is complete with all required elements present",
        "Ask the patient how long they have been taking the medication",
      ],
      correctIndex: 2,
      explanation:
        "The first step in the technician's verification checklist is confirming that the prescription is complete — all required elements must be present (prescriber information, date, patient details, medication, directions, signature). Processing an incomplete prescription wastes time and creates safety risks.",
    },
  ],

  // ── Module 4, Lesson 1: Overview of Caribbean Pharmacy Legislation ──────
  "m4-l1": [
    {
      question:
        "Why is it dangerous to assume that pharmacy laws you learned on one Caribbean island apply on another?",
      options: [
        "Caribbean islands share identical pharmacy legislation through CARICOM",
        "Each Caribbean island nation has its own separate pharmacy legislation — there is no single 'Caribbean pharmacy law'",
        "Only Trinidad & Tobago and Jamaica share legislation; Barbados is different",
        "Caribbean pharmacy laws are identical because they all derive from British law",
      ],
      correctIndex: 1,
      explanation:
        "Every Caribbean island nation maintains its own distinct pharmacy legislation. While they share a common British colonial legal heritage, each island has adapted its laws to reflect local realities. A drug that is available over the counter on one island may require a prescription — or be entirely restricted — on another.",
      hint: "The lesson emphasised this as 'one of the most important facts' for pharmacy technicians.",
    },
    {
      question:
        "Caribbean pharmacy legislation generally covers which four main areas?",
      options: [
        "Drug pricing, pharmacy hours, staff uniforms, and advertising rules",
        "Who may practise pharmacy, what they may do, how medications are classified, and how the profession is governed",
        "Import duties, export licenses, tax policy, and trade agreements",
        "Hospital design, clinic staffing, ambulance services, and patient transport",
      ],
      correctIndex: 1,
      explanation:
        "Caribbean pharmacy legislation, derived from British colonial legal tradition, generally addresses four key areas: (1) who may practise pharmacy, (2) their permitted scope of practice, (3) how medications are classified and controlled, and (4) how the profession is governed and disciplined.",
    },
  ],

  // ── Module 4, Lesson 2: Trinidad & Tobago Pharmacy Law ──────────────────
  "m4-l2": [
    {
      question:
        "What is the Dangerous Drugs Act (Ch. 11:25) in Trinidad & Tobago?",
      options: [
        "A law regulating the sale of pesticides and agricultural chemicals",
        "The Act governing import, export, supply, and possession of controlled substances",
        "A law establishing penalties for illegal drug manufacturing only",
        "The Act that created the Pharmacy Board of Trinidad and Tobago",
      ],
      correctIndex: 1,
      explanation:
        "The Dangerous Drugs Act (Chapter 11:25) governs the import, export, manufacture, supply, and possession of dangerous drugs (controlled substances) in Trinidad & Tobago. It implements Trinidad's obligations under UN drug conventions and prescribes strict handling requirements for controlled substances.",
      hint: "Consider the name of the Act and what 'dangerous drugs' refers to in legal terms.",
    },
    {
      question:
        "In Trinidad & Tobago, what category describes medications that can be sold without a prescription but only from a pharmacy under pharmacist supervision?",
      options: [
        "General Sale List (GSL)",
        "Prescription-Only Medicines (POM)",
        "Pharmacy-Only Medicines (P)",
        "Over-the-Counter (OTC)",
      ],
      correctIndex: 2,
      explanation:
        "Pharmacy-Only Medicines (P) can be sold without a prescription but must be sold from a pharmacy under a pharmacist's supervision. This middle category sits between Prescription-Only Medicines (which require a prescription) and General Sale List items (which can be sold in retail outlets without pharmacy supervision).",
    },
    {
      question:
        "What is unique about codeine-containing products in Trinidad & Tobago compared to Jamaica?",
      options: [
        "Codeine is completely banned in Trinidad & Tobago",
        "Low-dose codeine compounds may be available as Pharmacy-Only medicines in Trinidad, while ALL codeine products require a prescription in Jamaica",
        "Jamaica allows codeine without any restrictions while Trinidad restricts it",
        "Both islands have identical codeine scheduling",
      ],
      correctIndex: 1,
      explanation:
        "This is a critical regulatory difference. In Trinidad & Tobago, low-dose codeine compounds (e.g., codeine 8mg combined with paracetamol) may be available as Pharmacy-Only medicines without a prescription. In Jamaica, ALL codeine products are prescription-only, reflecting a stricter scheduling approach due to abuse concerns.",
    },
  ],

  // ── Module 4, Lesson 3: Jamaica Pharmacy Law ────────────────────────────
  "m4-l3": [
    {
      question:
        "Since Jamaica's 2015 Dangerous Drugs Amendment, can medical cannabis be dispensed from regular community pharmacies?",
      options: [
        "Yes — any registered pharmacy can dispense cannabis",
        "No — medical cannabis is dispensed through licensed herb houses and dispensaries regulated by the Cannabis Licensing Authority, not regular pharmacies",
        "Yes — but only hospital pharmacies",
        "No — cannabis remains completely illegal in Jamaica",
      ],
      correctIndex: 1,
      explanation:
        "Despite the 2015 decriminalisation of small personal possession and legalisation of medical marijuana, cannabis is NOT dispensed through regular pharmacies in Jamaica. It is available through licensed herb houses and dispensaries regulated by the Cannabis Licensing Authority (CLA). Pharmacy technicians should be aware of patients using cannabis alongside prescribed medications due to potential drug interactions.",
    },
    {
      question:
        "What conditions does Jamaica's National Health Fund (NHF) cover?",
      options: [
        "Only diabetes and hypertension",
        "Any condition requiring medication",
        "15 specified chronic conditions including diabetes, hypertension, arthritis, asthma, and mental health conditions",
        "Only conditions requiring hospital treatment",
      ],
      correctIndex: 2,
      explanation:
        "The NHF covers medications for 15 specified chronic conditions. Patients must be registered NHF beneficiaries with a valid NHF card. Pharmacies submit claims electronically for reimbursement, and generic prescribing is strongly encouraged under the programme.",
      hint: "The NHF is focused on chronic conditions — how many are specified in the programme?",
    },
  ],

  // ── Module 4, Lesson 4: Barbados Pharmacy Law ──────────────────────────
  "m4-l4": [
    {
      question:
        "What is the primary function of the Barbados Drug Service?",
      options: [
        "Prosecuting drug offences and managing the criminal justice system",
        "Registering pharmacists and setting licensing examinations",
        "Central procurement, storage, and distribution of pharmaceuticals for the public health system",
        "Setting retail prices for all medications sold in Barbados",
      ],
      correctIndex: 2,
      explanation:
        "The Barbados Drug Service (under the Ministry of Health and Wellness) centrally procures medications for all public health facilities, maintains the Barbados National Drug Formulary, operates the central pharmaceutical warehouse, and distributes medications to Queen Elizabeth Hospital and polyclinics across the island.",
    },
    {
      question:
        "What legislation governs patient data protection in Barbados and directly affects pharmacy practice?",
      options: [
        "The Freedom of Information Act",
        "The Data Protection Act (enacted 2019)",
        "The Electronic Commerce Act",
        "There is no data protection law in Barbados",
      ],
      correctIndex: 1,
      explanation:
        "Barbados enacted the Data Protection Act in 2019, classifying patient health information (including medication records) as sensitive personal data requiring enhanced protections. Pharmacy technicians must understand their obligations under this Act when handling patient records.",
      hint: "This legislation was enacted relatively recently and specifically addresses sensitive personal data.",
    },
    {
      question:
        "How do Barbados polyclinics deliver pharmacy services to patients?",
      options: [
        "They refer all patients to private pharmacies",
        "Each polyclinic has a pharmacy that dispenses medications at no cost for conditions treated within the public system",
        "They only dispense emergency medications",
        "Patients must pay full price and claim reimbursement later",
      ],
      correctIndex: 1,
      explanation:
        "Barbados operates a network of polyclinics with pharmacies that dispense medications to patients at no cost for conditions treated within the public health system. This decentralised model makes pharmacy technicians essential to the public health infrastructure and ensures medication access across the island.",
    },
  ],

  // ── Module 4, Lesson 5: Comparative Analysis — Drug Scheduling ──────────
  "m4-l5": [
    {
      question:
        "A patient from Trinidad visits a pharmacy in Jamaica and asks to buy a codeine cough syrup without a prescription, saying it's available without a script back home. What is the correct response?",
      options: [
        "Sell it — laws from the patient's home island apply",
        "Sell a small quantity as an exception for Caribbean travellers",
        "Refuse and explain that ALL codeine products require a prescription in Jamaica, regardless of rules on other islands",
        "Accept a Trinidadian prescription as valid in Jamaica",
      ],
      correctIndex: 2,
      explanation:
        "The laws of the island where you are physically dispensing always apply — not the patient's home island. Jamaica classifies ALL codeine products as prescription-only. A Trinidadian prescription is also not valid in Jamaica; the patient would need a prescription from a Jamaica-registered prescriber.",
    },
    {
      question:
        "Why does pseudoephedrine face increasing restrictions across the Caribbean?",
      options: [
        "It causes severe allergic reactions in tropical climates",
        "It is a potential precursor chemical for illicit methamphetamine manufacture",
        "It interacts with all Caribbean bush medicine remedies",
        "CARICOM has banned it as part of a regional harmonisation initiative",
      ],
      correctIndex: 1,
      explanation:
        "Pseudoephedrine, while a legitimate decongestant, can be diverted for use in the illicit manufacture of methamphetamine. All three Caribbean islands have implemented varying degrees of restriction — from purchase record requirements (Trinidad) to pharmacist-only sales with ID requirements (Jamaica) to behind-the-counter access (Barbados).",
      hint: "Think about what pseudoephedrine can be chemically converted into.",
    },
    {
      question:
        "What is the 'golden rule' when uncertain about a drug's current scheduling status?",
      options: [
        "Apply the most restrictive classification from any Caribbean island",
        "Use the classification from the WHO Model List of Essential Medicines",
        "When in doubt, CHECK — verify current scheduling via the government gazette, your pharmacist supervisor, or the national pharmacy board",
        "Dispense based on the patient's stated understanding of the drug's classification",
      ],
      correctIndex: 2,
      explanation:
        "Drug classifications can change through government gazetting, and what was true last year may not be true today. The golden rule is: WHEN IN DOUBT — CHECK. Consult the most recent government gazette, your pharmacist supervisor, or the relevant national pharmacy board before dispensing. Dispensing a controlled substance without proper authorisation is a criminal offence in all three jurisdictions.",
    },
  ],
};

// ============================================================================
// BRANCHING SCENARIOS — Multi-path decision simulations
// ============================================================================

export const branchingScenarios: BranchingScenario[] = [
  // ── Scenario 1: The Suspicious Prescription ─────────────────────────────
  {
    id: "scenario-suspicious-rx",
    title: "The Suspicious Prescription",
    description:
      "A customer brings in a prescription that has several red flags. You must examine it, identify the issues, decide how to handle the situation, and manage the customer interaction — all while following proper Caribbean pharmacy protocols.",
    moduleId: "m3-prescriptions",
    nodes: [
      // START
      {
        id: "start",
        text: "It is 2:30 PM on a busy Wednesday at your community pharmacy in Port of Spain, Trinidad. A young man you have not seen before approaches the counter and hands you a prescription. He is wearing sunglasses indoors and seems impatient, tapping his fingers on the counter. The prescription reads:\n\nDr. R. Mahabir, MBBS\n45 Ariapita Avenue, Woodbrook\nReg #: (smudged / illegible)\n\nDate: Written in pencil, appears to read 12 days ago\n\nPatient: 'J. Smith'\nDOB: Not included\n\n℞ Alprazolam 2mg\nSig: 1 tab PO TID PRN\nMitte: #90\n\nPrescriber signature present but the registration number is illegible.\n\nWhat do you do first?",
        choices: [
          {
            label: "Begin examining the prescription systematically for red flags before doing anything else",
            nextNodeId: "examine-rx",
            feedback:
              "Excellent. A systematic examination is the correct first step. You should verify all elements before processing any prescription, especially one for a controlled substance.",
            isOptimal: true,
          },
          {
            label: "Start entering the prescription into the system while checking it — multitasking saves time on a busy day",
            nextNodeId: "premature-entry",
            feedback:
              "This is risky. Entering data before completing your verification creates momentum toward dispensing. With a controlled substance, you should complete all checks BEFORE beginning any processing.",
          },
          {
            label: "Tell the patient you cannot fill this and ask him to leave",
            nextNodeId: "refuse-immediately",
            feedback:
              "While your instincts may be correct, refusing without completing a proper assessment and without involving the pharmacist is premature and unprofessional. You should examine the prescription, identify specific issues, and involve your supervising pharmacist.",
          },
        ],
      },

      // EXAMINE-RX: Systematic examination
      {
        id: "examine-rx",
        text: "You examine the prescription carefully, mentally running through the technician's verification checklist. You identify multiple issues:\n\n1. The date appears to be written in pencil\n2. The prescriber's registration number is illegible/smudged\n3. No patient date of birth or address included\n4. Alprazolam is a benzodiazepine (-lam suffix) — a CONTROLLED SUBSTANCE under Trinidad's Dangerous Drugs Act\n5. The quantity (#90) with TID dosing is a 30-day supply at the maximum dose of 2mg TID\n6. The patient name 'J. Smith' seems vague — no first name\n\nHow many of these are genuine red flags for a controlled substance prescription?",
        choices: [
          {
            label: "All six are legitimate red flags — each one is a concern",
            nextNodeId: "identify-all-flags",
            feedback:
              "Correct. Every one of these elements is a genuine concern, particularly for a controlled substance prescription. The pencil writing, illegible registration, missing patient details, and the high-dose/high-quantity controlled substance combination together paint a very concerning picture.",
            isOptimal: true,
          },
          {
            label: "Only the controlled substance issues matter — the other things are minor paperwork problems",
            nextNodeId: "miss-some-flags",
            feedback:
              "This is partially correct but dangerously incomplete. While the controlled substance aspect is critical, the other issues are NOT minor. A prescription in pencil can be altered, an illegible registration number cannot be verified, and missing patient details make it impossible to confirm the prescription is for the person presenting it.",
          },
          {
            label: "The main concern is the registration number — if you can verify the prescriber, the rest is fine",
            nextNodeId: "miss-some-flags",
            feedback:
              "While the prescriber verification is important, focusing on just one issue would cause you to miss several other red flags. Each issue needs to be addressed, especially for a controlled substance. A prescription written in pencil, missing patient identification, and the high quantity are all serious concerns.",
          },
        ],
      },

      // PREMATURE-ENTRY: Started processing too soon
      {
        id: "premature-entry",
        text: "You begin entering the prescription details but quickly realise you cannot proceed. The system flags that alprazolam requires controlled substance documentation, the prescriber registration number is illegible, and the patient record cannot be created without a date of birth. Your pharmacist notices you at the computer and asks what you are working on.\n\nWhat do you tell the pharmacist?",
        choices: [
          {
            label: "Show the pharmacist the prescription and explain all the issues you've found",
            nextNodeId: "involve-pharmacist-late",
            feedback:
              "Good — you are now involving the pharmacist, though it would have been better to do so before attempting to process. Your pharmacist will now review the prescription and its red flags.",
          },
          {
            label: "Say it's just a routine prescription and you'll handle it",
            nextNodeId: "conceal-from-pharmacist",
            feedback:
              "This is a serious error. Concealing concerns about a controlled substance prescription from your supervising pharmacist violates your professional obligations and could have legal consequences. A pharmacy technician must ALWAYS escalate concerns about controlled substance prescriptions to the pharmacist.",
          },
        ],
      },

      // REFUSE-IMMEDIATELY: Refused too hastily
      {
        id: "refuse-immediately",
        text: "The patient becomes agitated. 'What do you mean you can't fill it? My doctor wrote it — you have to fill it!' Other customers in the pharmacy are looking over. Your pharmacist hears the commotion and comes to the counter.\n\nYour pharmacist asks you what happened. What do you say?",
        choices: [
          {
            label: "Explain that you found several red flags on the prescription and wanted the pharmacist to review them",
            nextNodeId: "involve-pharmacist-late",
            feedback:
              "Good — you are now involving the pharmacist. However, the confrontation with the patient could have been avoided by examining the prescription quietly and escalating to the pharmacist before saying anything to the patient.",
          },
          {
            label: "Say you just had a 'bad feeling' about the patient and the prescription",
            nextNodeId: "subjective-refusal",
            feedback:
              "A 'bad feeling' is not a professional basis for refusing to process a prescription. While your instincts may be valid, you need to articulate specific, objective concerns — the illegible registration number, pencil writing, missing patient details, and controlled substance issues are all concrete red flags. Subjective feelings of discomfort about a patient's appearance can lead to discriminatory practices.",
          },
        ],
      },

      // IDENTIFY-ALL-FLAGS: Correctly identified all issues
      {
        id: "identify-all-flags",
        text: "You have identified all six red flags. This prescription should not be processed without further investigation. The next step is critical.\n\nWhat do you do with these findings?",
        choices: [
          {
            label: "Bring the prescription to your supervising pharmacist immediately, explaining each red flag you identified",
            nextNodeId: "involve-pharmacist-optimal",
            feedback:
              "Perfect. As a pharmacy technician in Trinidad, you must escalate controlled substance concerns to the supervising pharmacist. You have done your job — identified the issues — and now the pharmacist must make the final decision. This is proper teamwork within scope of practice.",
            isOptimal: true,
          },
          {
            label: "Call the prescriber yourself to verify the prescription before involving the pharmacist",
            nextNodeId: "call-prescriber-alone",
            feedback:
              "While verifying with the prescriber is eventually necessary, calling to verify a prescription — especially a controlled substance — is typically the pharmacist's responsibility, not the technician's. You should escalate to the pharmacist first, who will decide how to proceed. Acting independently on controlled substance issues can exceed your scope of practice.",
          },
          {
            label: "Tell the patient calmly that there are issues with the prescription and ask him to come back with a corrected version",
            nextNodeId: "send-patient-away",
            feedback:
              "This approach has a significant flaw: if the prescription is fraudulent, telling the patient to 'come back with a corrected version' essentially teaches them what to fix. Additionally, making the decision to refuse or request corrections on a controlled substance prescription is the pharmacist's call, not the technician's.",
          },
        ],
      },

      // MISS-SOME-FLAGS: Missed some red flags
      {
        id: "miss-some-flags",
        text: "You have identified some issues but missed others. In pharmacy practice, especially with controlled substances, EVERY red flag matters. Even seemingly minor issues like a pencil-written date or vague patient name can indicate a fraudulent or altered prescription.\n\nDespite missing some flags, you know something is wrong. What is your next step?",
        choices: [
          {
            label: "Take the prescription to your supervising pharmacist and share the concerns you do have",
            nextNodeId: "involve-pharmacist-partial",
            feedback:
              "Good. Even with an incomplete assessment, escalating to the pharmacist is the correct action. Your pharmacist may identify the flags you missed and can make the final determination.",
          },
          {
            label: "Process the prescription but flag it for pharmacist review at final check",
            nextNodeId: "process-with-flag",
            feedback:
              "This is dangerous. A prescription with multiple red flags for a controlled substance should not be processed at all until ALL concerns are resolved. The pharmacist should review the prescription BEFORE any processing begins, not at the final check stage.",
          },
        ],
      },

      // INVOLVE-PHARMACIST-OPTIMAL: Best path — full identification, immediate escalation
      {
        id: "involve-pharmacist-optimal",
        text: "Your pharmacist, Ms. Ali, examines the prescription carefully. She agrees with all your findings and commends your thorough assessment.\n\n'Good catch,' she says. 'Six red flags — every one of them valid. I'm going to attempt to verify this prescriber. If they exist and wrote this prescription, we can work through the issues. If not, we have a bigger problem.'\n\nMs. Ali attempts to verify Dr. R. Mahabir at the Ariapita Avenue address through the Pharmacy Board register and by calling the number associated with that practice. The number is disconnected, and no Dr. R. Mahabir is found at that address in the Board register.\n\nMs. Ali returns to the counter. How should she handle the patient?",
        choices: [
          {
            label: "Inform the patient professionally that the prescription cannot be verified and therefore cannot be filled, without accusing them of anything, and document the incident",
            nextNodeId: "professional-refusal",
            feedback:
              "Excellent. This is the professional, legally sound approach. You are not accusing the patient of fraud — you are stating an objective fact: the prescription cannot be verified. Documentation protects both the pharmacy and the patient.",
            isOptimal: true,
          },
          {
            label: "Confront the patient about the fake prescription and threaten to call the police",
            nextNodeId: "confrontation",
            feedback:
              "While the prescription appears fraudulent, confrontation is dangerous and unprofessional. You do not know the full situation — the patient could become violent, or there could be a legitimate explanation (wrong address, recently relocated practice). The professional approach is to state that the prescription cannot be verified and cannot be filled. Police involvement should be discussed privately with the pharmacist, not threatened at the counter.",
          },
          {
            label: "Offer to fill a non-controlled alternative medication for anxiety instead",
            nextNodeId: "offer-alternative",
            feedback:
              "A pharmacist cannot prescribe alternative medications — that exceeds scope of practice. Additionally, if the prescription is fraudulent, offering alternatives enables drug-seeking behaviour. The correct response is to refuse the unverifiable prescription and document the incident. If the patient has a genuine need, they should see a doctor.",
          },
        ],
      },

      // INVOLVE-PHARMACIST-LATE: Got to pharmacist eventually
      {
        id: "involve-pharmacist-late",
        text: "Your pharmacist, Ms. Ali, reviews the prescription and quickly identifies the same red flags — and some you may have missed. She attempts to verify the prescriber through the Pharmacy Board register and by phone. The prescriber cannot be verified.\n\nMs. Ali tells the patient professionally that the prescription cannot be verified and therefore cannot be dispensed. The patient protests loudly but eventually leaves.\n\nMs. Ali documents the incident in the pharmacy's controlled substance log, noting the patient's appearance, the time, the unverifiable prescription details, and the refusal. She files a report with the Pharmacy Board.\n\nWhat did you learn from this experience?",
        choices: [
          {
            label: "I should have done a complete systematic check before processing or confronting the patient, and escalated to the pharmacist earlier",
            nextNodeId: "end-partial-learning",
            feedback:
              "Correct. The key lessons are: (1) always complete a full systematic check before taking any action, (2) never begin processing a prescription with unresolved red flags, (3) escalate controlled substance concerns to the pharmacist immediately, and (4) let the pharmacist handle patient communication about sensitive refusals.",
            isOptimal: true,
          },
          {
            label: "I should have just refused the prescription on my own — it was clearly fake",
            nextNodeId: "end-wrong-lesson",
            feedback:
              "This takes the wrong lesson. While the prescription did turn out to be unverifiable, a pharmacy technician should not make independent refusal decisions on controlled substance prescriptions. The pharmacist must make the final call. Additionally, 'clearly fake' is a judgement that should only be reached after systematic verification, not based on appearance or instinct.",
          },
        ],
      },

      // CONCEAL-FROM-PHARMACIST: Serious error path
      {
        id: "conceal-from-pharmacist",
        text: "You attempt to handle the prescription independently, but the system will not allow you to process a controlled substance without pharmacist authorization. Your pharmacist eventually sees the prescription and immediately identifies all the red flags.\n\nShe is concerned that you attempted to conceal the issues rather than escalating them. She explains that hiding concerns about controlled substance prescriptions is a serious breach of professional conduct that could have legal consequences for both you and the pharmacy.",
        isEnd: true,
        outcome: "failure",
        summary:
          "Failure: Concealing concerns about a controlled substance prescription from the supervising pharmacist is a serious professional and legal breach. Key lessons: (1) Always escalate controlled substance concerns immediately. (2) Never attempt to process prescriptions with unresolved red flags. (3) Transparency with your supervising pharmacist is not optional — it is a legal requirement. (4) The technician's role is to identify and escalate, not to make independent decisions on controlled substances.",
      },

      // SUBJECTIVE-REFUSAL: Bad basis for refusal
      {
        id: "subjective-refusal",
        text: "Your pharmacist explains that while instincts are valuable, they cannot be the sole basis for refusing to process a prescription. She reviews the prescription and identifies the concrete red flags: pencil writing, illegible registration, missing patient details, and controlled substance issues.\n\n'These are the objective reasons we cannot fill this prescription,' she says. 'Always lead with facts, not feelings. Subjective refusals can expose the pharmacy to discrimination complaints.'\n\nShe handles the patient professionally, citing the unverifiable prescription as the reason for refusal, and documents the incident.",
        isEnd: true,
        outcome: "partial",
        summary:
          "Partial success: Your instincts were correct, but you need to articulate specific, objective red flags rather than relying on subjective feelings. Key lessons: (1) Always identify concrete, documentable concerns. (2) Avoid describing concerns based on patient appearance or demeanour — focus on the prescription itself. (3) Escalate to the pharmacist with specific findings, not vague discomfort. (4) Professional refusals must be based on verifiable facts.",
      },

      // CALL-PRESCRIBER-ALONE: Acted beyond scope
      {
        id: "call-prescriber-alone",
        text: "You call the number on the prescription. It rings but no one answers. You try the Pharmacy Board register but cannot find the prescriber. You are now unsure what to do.\n\nYour pharmacist notices you on the phone and asks what is happening. When you explain, she says: 'I appreciate your initiative, but verifying prescriptions with prescribers — especially for controlled substances — is my responsibility. You did the right thing identifying the red flags, but the next step should have been bringing it to me. In some circumstances, a technician calling about a controlled substance could be misinterpreted.'\n\nShe takes over the verification process.",
        isEnd: true,
        outcome: "partial",
        summary:
          "Partial success: You correctly identified the red flags and your instinct to verify was good, but you exceeded your scope of practice by independently contacting the prescriber about a controlled substance. Key lessons: (1) Technicians identify and escalate — the pharmacist verifies. (2) For controlled substances, always let the pharmacist handle prescriber communication. (3) Know your scope of practice and stay within it, even when your intentions are good.",
      },

      // SEND-PATIENT-AWAY: Gave away information
      {
        id: "send-patient-away",
        text: "The patient asks: 'What kind of issues? Just tell me and I'll get it fixed.' By listing the problems, you have inadvertently told a potentially fraudulent prescription holder exactly what to correct on their next attempt.\n\nYour pharmacist overhears and intervenes. She tells the patient: 'We are unable to fill this prescription at this time. You may wish to consult your prescriber.' She does not provide specifics.\n\nAfterward, your pharmacist explains: 'Never tell someone with a suspicious prescription what the specific problems are. If it's fraudulent, you're teaching them to create a better fake next time. And making the call to refuse or request corrections on a controlled substance prescription is my responsibility, not yours.'",
        isEnd: true,
        outcome: "partial",
        summary:
          "Partial success: You identified issues and tried to handle the situation, but you made two errors: (1) you revealed the specific red flags to a potentially fraudulent presenter, and (2) you acted beyond your scope by making the refusal decision without pharmacist involvement. Key lessons: never detail prescription deficiencies to a suspicious presenter; always escalate controlled substance decisions to the pharmacist.",
      },

      // PROFESSIONAL-REFUSAL: Optimal end
      {
        id: "professional-refusal",
        text: "Ms. Ali approaches the patient calmly and says: 'Sir, we have attempted to verify this prescription and unfortunately we are unable to confirm the prescriber's details. We therefore cannot dispense this medication. You may wish to consult your healthcare provider to obtain a new prescription.'\n\nThe patient protests but eventually leaves. Ms. Ali does not engage in argument or provide specifics about what could not be verified.\n\nShe then documents the incident thoroughly: date, time, patient description, prescription details, verification attempts made, outcome, and her decision. She files a report with the Pharmacy Board of Trinidad and Tobago and retains a copy of the prescription.\n\n'This is exactly how this should work,' she tells you. 'You caught six red flags, escalated immediately, and let me handle the patient interaction. That is professional pharmacy practice.'",
        isEnd: true,
        outcome: "success",
        summary:
          "Success: You demonstrated exemplary pharmacy practice. Key achievements: (1) Systematic prescription examination identifying all six red flags. (2) Immediate escalation to the supervising pharmacist. (3) Correct identification of alprazolam as a controlled substance via the '-lam' drug name stem. (4) Understanding that the pharmacist makes the final decision on controlled substance prescriptions. (5) Professional patient handling without accusation or revealing specific prescription deficiencies. (6) Proper documentation and reporting. This is exactly how a well-trained Caribbean pharmacy technician should handle a suspicious controlled substance prescription.",
      },

      // CONFRONTATION: Dangerous approach
      {
        id: "confrontation",
        text: "The patient becomes hostile and begins shouting. Other customers are alarmed. Security has to be called. The situation escalates unnecessarily.\n\nAfter the patient leaves, your pharmacist explains: 'We never confront or accuse. We state facts — the prescription cannot be verified, so it cannot be filled. If we suspect criminal activity, we document everything and report to the Pharmacy Board and police AFTER the person has left. Confrontation puts staff and other customers at risk and is never the correct approach.'\n\nShe documents the incident and files a police report due to the threatening behaviour.",
        isEnd: true,
        outcome: "partial",
        summary:
          "Partial success: The prescription was correctly not dispensed, but the confrontational approach created a dangerous situation. Key lessons: (1) Never accuse a patient of fraud at the counter. (2) Use neutral language: 'We are unable to verify this prescription.' (3) Report suspected criminal activity after the person leaves, not during the interaction. (4) Patient and staff safety always comes first. (5) Document everything for the Pharmacy Board and law enforcement.",
      },

      // OFFER-ALTERNATIVE: Scope creep
      {
        id: "offer-alternative",
        text: "Your pharmacist immediately corrects you: 'We cannot prescribe alternative medications — that is outside our scope of practice. And if this prescription is fraudulent, offering alternatives enables drug-seeking behaviour.'\n\nShe handles the situation by informing the patient that the prescription cannot be verified and therefore cannot be filled. The patient leaves.\n\nMs. Ali documents the incident and files a report with the Pharmacy Board.",
        isEnd: true,
        outcome: "partial",
        summary:
          "Partial success: The prescription was correctly not dispensed, but offering alternative medications exceeded scope of practice. Key lessons: (1) Pharmacists and technicians do not prescribe — that is the doctor's role. (2) Offering alternatives to a suspected fraudulent presenter enables drug-seeking behaviour. (3) Stick to the objective facts: 'This prescription cannot be verified and therefore cannot be filled.' (4) Always refer patients back to their healthcare provider.",
      },

      // PROCESS-WITH-FLAG: Dangerous processing
      {
        id: "process-with-flag",
        text: "You begin processing the prescription. Fortunately, the pharmacy system requires pharmacist authorisation for alprazolam as a controlled substance. Your pharmacist reviews the prescription at final check and immediately stops the process.\n\n'This prescription should never have reached this stage,' she says firmly. 'You should have brought these red flags to me BEFORE beginning any processing. For controlled substances, we verify everything FIRST. Processing creates momentum toward dispensing and wastes time that should have been spent on verification.'\n\nShe reviews the prescription, identifies all the red flags (including ones you missed), and refuses to dispense after the prescriber cannot be verified.",
        isEnd: true,
        outcome: "failure",
        summary:
          "Failure: Processing a prescription with known red flags, especially for a controlled substance, is a serious error. Key lessons: (1) NEVER begin processing a controlled substance prescription with unresolved concerns. (2) Escalate to the pharmacist BEFORE any data entry or preparation. (3) Relying on the pharmacist's final check as a safety net is not acceptable — the system should never reach that point for flagged prescriptions. (4) Complete all verification before processing begins.",
      },

      // END — Partial learning
      {
        id: "end-partial-learning",
        text: "You take these lessons to heart. In future encounters, you will:\n\n1. Complete a full systematic check of every prescription before taking any action\n2. Identify ALL red flags, not just the obvious ones\n3. Escalate controlled substance concerns to the pharmacist immediately\n4. Allow the pharmacist to handle patient communication about refusals\n5. Document everything thoroughly\n\nYour pharmacist is confident you will handle the next situation better.",
        isEnd: true,
        outcome: "partial",
        summary:
          "Partial success: You eventually reached the correct outcome, but the path included errors that could have been avoided. The most important takeaway is that systematic verification, immediate escalation, and staying within scope of practice are the three pillars of handling suspicious prescriptions.",
      },

      // END — Wrong lesson learned
      {
        id: "end-wrong-lesson",
        text: "Your pharmacist corrects this thinking: 'The lesson is NOT that you should have refused independently. The lesson is that you should have done a full check, escalated to me, and let me handle the refusal. Your job is to identify and escalate — my job is to make the final decision and communicate it to the patient. That is how the pharmacy team functions safely and legally.'",
        isEnd: true,
        outcome: "failure",
        summary:
          "Failure to learn the correct lesson. The pharmacy technician's role is to identify issues and escalate — NOT to make independent refusal decisions on controlled substance prescriptions. The supervising pharmacist bears the legal responsibility and authority for those decisions. Working outside your scope, even with good intentions, can have legal consequences.",
      },
    ],
  },

  // ── Scenario 2: The Medication Error ────────────────────────────────────
  {
    id: "scenario-medication-error",
    title: "The Medication Error",
    description:
      "You discover a potential dispensing error after a prescription has been filled but before the customer picks it up. You must assess the severity, decide who to notify, handle documentation, and manage the customer interaction — all following proper Caribbean pharmacy protocols.",
    moduleId: "m4-pharmacy-law",
    nodes: [
      // START
      {
        id: "start",
        text: "You are a pharmacy technician working the afternoon shift at a busy pharmacy in Kingston, Jamaica. While restocking the prescription pickup shelf, you notice a filled prescription bag for Mrs. Claudette Brown, a regular customer with type 2 diabetes and hypertension.\n\nOut of habit, you glance at the label. It reads:\n\nMetformin 500mg — Take one tablet by mouth twice daily\n\nBut through the clear bag, you can see the tablets inside. They are small, round, and white — but they look different from the metformin 500mg tablets your pharmacy normally stocks. You pull one blister pack partway out and read: 'Glibenclamide 5mg'.\n\nGlibenclamide is a sulfonylurea — a completely different diabetes medication that works by stimulating insulin release and carries a significant risk of hypoglycaemia (dangerously low blood sugar), particularly in elderly patients.\n\nMrs. Brown is 72 years old.\n\nWhat do you do?",
        choices: [
          {
            label: "Immediately remove the bag from the pickup shelf, verify the error by comparing the prescription to the dispensed medication, and alert the pharmacist",
            nextNodeId: "verify-and-alert",
            feedback:
              "Excellent. This is the correct sequence: (1) prevent the error from reaching the patient by removing the bag, (2) verify that an error actually occurred, and (3) alert the pharmacist immediately. Speed and accuracy are both critical here.",
            isOptimal: true,
          },
          {
            label: "Quickly swap the glibenclamide for the correct metformin yourself to fix the error before anyone notices",
            nextNodeId: "silent-fix",
            feedback:
              "This is dangerous and unethical, even though it comes from a place of wanting to fix the problem. Silently correcting a medication error without reporting it means: (1) the root cause is never identified, (2) the pharmacist who made the final check is not informed, (3) no incident report is filed, and (4) systemic issues that caused the error remain unaddressed. The same error could happen again — and next time, no one might catch it.",
          },
          {
            label: "Wait until the pharmacist is free — they look busy right now — and mention it when things calm down",
            nextNodeId: "delay-report",
            feedback:
              "This is a potentially life-threatening error — a 72-year-old patient could receive a medication that causes dangerous hypoglycaemia. Waiting for a convenient moment is unacceptable. Medication errors involving wrong-drug dispensing are always urgent, regardless of how busy the pharmacy is. Every minute the bag sits on the shelf is a minute it could be picked up by the patient or a family member.",
          },
        ],
      },

      // VERIFY-AND-ALERT: Correct initial response
      {
        id: "verify-and-alert",
        text: "You remove the bag from the shelf and take it to the dispensing area. You compare:\n\n- The original prescription: Metformin 500mg, 1 tab PO BD\n- The dispensing label: Metformin 500mg — Take one tablet by mouth twice daily\n- The actual medication in the bag: Glibenclamide 5mg\n\nThis is confirmed: a wrong-drug error. The label says metformin, but glibenclamide was dispensed. You bring the bag and the original prescription to the pharmacist on duty, Mr. Campbell.\n\nMr. Campbell's face becomes serious. 'Thank you for catching this. This is a serious wrong-drug error. Glibenclamide in a 72-year-old patient who was prescribed metformin could cause severe hypoglycaemia.'\n\nHe asks you: 'Has Mrs. Brown picked up the prescription yet?'",
        choices: [
          {
            label: "'No — I caught it while restocking the pickup shelf. The bag has not left the pharmacy.'",
            nextNodeId: "not-dispensed-yet",
            feedback:
              "This is the critical piece of information. The fact that the medication has not reached the patient means the error was caught before harm occurred. This is a 'near miss' — an error that was intercepted before reaching the patient. Near misses are extremely valuable learning opportunities.",
            isOptimal: true,
          },
          {
            label: "'I'm not sure — I didn't check the pickup log. Someone else may have given it out.'",
            nextNodeId: "uncertain-pickup",
            feedback:
              "Uncertainty about whether the patient has already received the medication adds urgency. The pharmacy must immediately determine whether Mrs. Brown has picked up the prescription. If she has, the situation becomes a patient safety emergency requiring immediate contact with the patient.",
          },
        ],
      },

      // SILENT-FIX: Unethical concealment
      {
        id: "silent-fix",
        text: "You swap the glibenclamide for metformin and place the bag back on the shelf. The error has been corrected — but not reported.\n\nTwo weeks later, another patient, Mr. Thomas, receives glibenclamide instead of his prescribed metformin. This time, his daughter picks it up and he takes two doses before experiencing severe hypoglycaemia. He collapses at home and is taken to hospital.\n\nThe investigation reveals a systematic issue: the metformin and glibenclamide stock bottles were placed next to each other on the dispensing shelf, and the labels were similar in design. If your earlier error had been reported, the root cause would have been identified and corrected — the bottles would have been separated, and additional checks would have been implemented.\n\nBecause you concealed the error, the system failure persisted and caused patient harm.",
        isEnd: true,
        outcome: "failure",
        summary:
          "Failure: Silently correcting a medication error without reporting it is a serious professional and ethical breach. Key consequences: (1) The root cause (similar bottle placement) was never addressed. (2) The same error recurred and caused patient harm. (3) The pharmacist who made the final check was not aware of the error and could not learn from it. (4) No incident report was filed, denying the pharmacy system the opportunity to improve. (5) Your concealment contributed directly to a subsequent patient being harmed. Every medication error — including near misses — must be reported, documented, and investigated.",
      },

      // DELAY-REPORT: Dangerous delay
      {
        id: "delay-report",
        text: "While you wait for the pharmacist to become free, Mrs. Brown's daughter arrives at the counter. 'I'm here to pick up my mother's medication — Claudette Brown?'\n\nA pharmacy assistant checks the shelf and hands over the bag with the wrong medication. You watch in horror as the daughter walks toward the door.\n\nWhat do you do?",
        choices: [
          {
            label: "Rush to stop the daughter before she leaves the pharmacy and explain there may be an issue with the prescription",
            nextNodeId: "intercept-at-door",
            feedback:
              "Good — you must act NOW. Every second counts. The medication cannot leave the pharmacy. While this intervention is necessary, this entire situation could have been avoided if you had reported the error immediately instead of waiting.",
          },
          {
            label: "Tell the pharmacist immediately — they can decide how to handle it",
            nextNodeId: "tell-pharmacist-after-handoff",
            feedback:
              "This is too slow. The daughter is walking out the door with a dangerous wrong-drug error. You need to physically stop the handoff NOW, not relay information through the pharmacist. If the medication leaves the pharmacy, the risk of patient harm increases dramatically.",
          },
        ],
      },

      // NOT-DISPENSED-YET: Best path — near miss caught in time
      {
        id: "not-dispensed-yet",
        text: "Mr. Campbell nods with relief. 'Good — this is a near miss, not a dispensed error. But we must treat it with the same seriousness. There are several things we need to do now.'\n\nHe asks you to help with the response. What should happen next?",
        choices: [
          {
            label: "Correct the prescription with the right medication, complete an incident report, investigate the root cause, and review procedures to prevent recurrence",
            nextNodeId: "full-response",
            feedback:
              "Exactly right. A complete response to a near miss includes: (1) immediate correction, (2) formal documentation through an incident report, (3) root cause investigation, and (4) systemic changes to prevent recurrence. Near misses are invaluable because they reveal vulnerabilities without causing patient harm.",
            isOptimal: true,
          },
          {
            label: "Just correct the prescription and move on — since the patient was not harmed, a full investigation is not needed",
            nextNodeId: "minimal-response",
            feedback:
              "Wrong. Near misses MUST be investigated with the same rigour as actual errors. The fact that no harm occurred is fortunate, but the system failure that allowed the error is still present and will cause harm eventually if not addressed. 'No harm, no foul' is a dangerous philosophy in pharmacy.",
          },
          {
            label: "Correct the prescription and file a written complaint about whoever originally dispensed the wrong medication",
            nextNodeId: "blame-response",
            feedback:
              "Filing a complaint focused on blaming an individual misses the point. Medication errors are almost always caused by system failures, not individual incompetence. A blame culture discourages error reporting and makes the pharmacy LESS safe. The correct approach is a non-punitive root cause investigation focused on what went wrong in the SYSTEM.",
          },
        ],
      },

      // UNCERTAIN-PICKUP: Don't know if patient has medication
      {
        id: "uncertain-pickup",
        text: "Mr. Campbell immediately checks the pickup log and the pharmacy management system. Fortunately, the prescription has NOT been picked up — Mrs. Brown's daughter called earlier to say she would collect it this afternoon.\n\nThe medication is still in the pharmacy. Mr. Campbell removes it from the shelf.\n\n'This is a near miss,' he says. 'But the fact that you weren't sure whether it had been picked up is itself a concern. We need to tighten our pickup tracking procedures. Now, let's handle this properly.'",
        choices: [
          {
            label: "Work with the pharmacist to correct the error, document the near miss with a full incident report, and investigate what caused it",
            nextNodeId: "full-response",
            feedback:
              "Correct. Even though there is the additional learning point about pickup tracking, the core response remains the same: correct, document, investigate, and improve.",
            isOptimal: true,
          },
          {
            label: "Correct the medication and suggest better pickup tracking, but skip the formal incident report since no harm was done",
            nextNodeId: "minimal-response",
            feedback:
              "The pickup tracking suggestion is good, but skipping the formal incident report is wrong. All near misses must be formally documented. Without documentation, there is no data to identify patterns, no record for regulatory review, and no basis for systemic improvement.",
          },
        ],
      },

      // FULL-RESPONSE: Comprehensive near-miss response
      {
        id: "full-response",
        text: "Mr. Campbell leads the response. You assist with each step:\n\n1. CORRECT: You dispense the correct metformin 500mg, which Mr. Campbell verifies against the original prescription.\n\n2. DOCUMENT: Mr. Campbell completes a medication incident report including: date and time, medications involved, how the error was discovered, who was involved, and the corrective action taken.\n\n3. INVESTIGATE: Together, you examine the dispensing area. You discover that the metformin 500mg and glibenclamide 5mg stock bottles were placed adjacent to each other on the shelf. Both have similar-looking white labels from the same manufacturer. Under time pressure, it would be easy to grab the wrong bottle.\n\n4. PREVENT: Mr. Campbell implements immediate changes.\n\nWhat changes should be implemented to prevent this type of error?",
        choices: [
          {
            label: "Separate the look-alike bottles (tall-man lettering, shelf separation), add a 'look-alike/sound-alike' warning alert in the system, and implement a barcode scanning verification step",
            nextNodeId: "comprehensive-prevention",
            feedback:
              "Outstanding. This is a multi-layered prevention strategy that addresses the error at multiple points: physical separation on the shelf, visual differentiation through tall-man lettering (e.g., metFORMIN vs gliBENCLamide), system-level alerts, and technology-based verification through barcode scanning. Multiple barriers make future errors much less likely.",
            isOptimal: true,
          },
          {
            label: "Move the glibenclamide to a different shelf location — physical separation should be sufficient",
            nextNodeId: "single-prevention",
            feedback:
              "Physical separation is a good first step but is insufficient on its own. A single prevention measure creates a single point of failure. Effective error prevention requires multiple independent barriers — if one fails, another catches the error. Separation, labelling, system alerts, and verification technology should all work together.",
          },
          {
            label: "Require all staff to be more careful and pay more attention when dispensing",
            nextNodeId: "behavioral-only-prevention",
            feedback:
              "Telling people to 'be more careful' is the least effective error prevention strategy. Human attention is inherently fallible — people will make mistakes regardless of how careful they try to be, especially under time pressure, fatigue, or distraction. Effective prevention relies on SYSTEM changes (separation, labelling, technology, workflows) that make it harder for errors to occur, rather than expecting perfect human performance.",
          },
        ],
      },

      // MINIMAL-RESPONSE: Insufficient follow-up
      {
        id: "minimal-response",
        text: "Mr. Campbell corrects you firmly: 'Every near miss must be formally documented and investigated. Here is why:\n\n1. Near misses reveal the same system failures that cause actual errors — the only difference is luck.\n2. Without documentation, we cannot identify patterns. This might be the third time this has happened — we would never know.\n3. The Pharmacy Council of Jamaica expects incident reporting as part of good pharmacy practice.\n4. Our own quality assurance programme requires it.\n5. If this error recurs and DOES reach a patient, having no record of a prior near miss will be very difficult to explain to regulators.'\n\nHe completes the full incident report and investigation, identifying the look-alike stock bottles as the root cause, and implements corrective measures.",
        isEnd: true,
        outcome: "partial",
        summary:
          "Partial success: You caught the error and ensured correction, but your instinct to skip documentation and investigation was wrong. Key lessons: (1) Near misses require the SAME level of documentation and investigation as actual errors. (2) 'No harm done' is never a reason to skip reporting. (3) Near miss data is the most valuable safety data because it reveals system failures before patients are harmed. (4) Regulatory bodies expect formal incident reporting for all medication errors and near misses.",
      },

      // BLAME-RESPONSE: Blame culture
      {
        id: "blame-response",
        text: "Mr. Campbell stops you. 'We do not operate a blame culture in this pharmacy. Let me explain why.\n\nThe person who made this error is a competent pharmacist who has dispensed thousands of prescriptions correctly. What happened here was not incompetence — it was a system failure. Two look-alike bottles were placed side by side, with similar labels, in a high-pressure environment. Under those conditions, ANY pharmacist could have made this mistake.\n\nIf we blame individuals, people stop reporting errors. If people stop reporting, errors go undetected. If errors go undetected, patients get harmed.\n\nOur investigation focuses on WHAT went wrong in the system, not WHO made the mistake. We change the system to prevent recurrence.'\n\nHe demonstrates the root cause investigation, identifying the adjacent placement of look-alike bottles as the system failure.",
        isEnd: true,
        outcome: "partial",
        summary:
          "Partial success: You caught the error and wanted accountability, but a blame-focused approach undermines patient safety. Key lessons: (1) Medication errors are almost always system failures, not individual failures. (2) A blame culture suppresses error reporting, making the pharmacy LESS safe. (3) Root cause analysis focuses on system factors: layout, labelling, workflow, technology, and workload. (4) A 'just culture' distinguishes between system-induced errors (which require system fixes) and genuinely reckless behaviour (which requires disciplinary action).",
      },

      // INTERCEPT-AT-DOOR: Caught after delay
      {
        id: "intercept-at-door",
        text: "You call out: 'Excuse me! Ms. Brown? Please wait one moment — we need to check something on that prescription.'\n\nThe daughter stops and returns to the counter. You explain that there may be an issue and that the pharmacist needs to review it. Mr. Campbell takes over, identifies the wrong-drug error, apologises to the daughter, and correctly dispenses metformin.\n\nHe then speaks to you privately: 'You did the right thing stopping her, but this near-catastrophe happened because you delayed reporting the error. If she had left the pharmacy, Mrs. Brown could have taken glibenclamide — a sulfonylurea that stimulates insulin release. In a 72-year-old, this could cause severe hypoglycaemia: confusion, collapse, seizures, even death. NEVER delay reporting a medication error. NOTHING is more urgent.'",
        isEnd: true,
        outcome: "partial",
        summary:
          "Partial success: The error was ultimately prevented, but only by a narrow margin. If the daughter had not been intercepted, a 72-year-old patient could have received a wrong medication with life-threatening consequences. Key lessons: (1) NEVER delay reporting a medication error — there is no acceptable reason to wait. (2) Medication safety trumps ALL other priorities, no matter how busy the pharmacy is. (3) Every moment a wrongly dispensed medication sits on the shelf is a moment it could reach the patient. (4) Report immediately, then let the pharmacist determine the response.",
      },

      // TELL-PHARMACIST-AFTER-HANDOFF: Too slow
      {
        id: "tell-pharmacist-after-handoff",
        text: "By the time you reach the pharmacist and explain the situation, the daughter has left the pharmacy with the wrong medication.\n\nMr. Campbell immediately calls Mrs. Brown's phone number on file. Fortunately, the daughter answers before her mother takes any of the medication. She is instructed to return to the pharmacy immediately and NOT to give her mother any tablets.\n\nThe situation is resolved, but it was a dangerously close call. Mr. Campbell is visibly shaken.\n\n'If she had not answered that phone, Mrs. Brown could be in hospital right now — or worse. When you see a medication error about to leave the pharmacy, you must physically stop it. Don't relay the message through me — ACT. You had the authority and the obligation to prevent that bag from leaving.'",
        isEnd: true,
        outcome: "partial",
        summary:
          "Partial success, but only through luck — the daughter answered her phone before the medication was taken. Key lessons: (1) When you see a medication error about to leave the pharmacy, ACT IMMEDIATELY — you have both the authority and the obligation to stop it. (2) Do not rely on indirect communication when a patient safety emergency is unfolding in real time. (3) Direct intervention (physically stopping the handoff) is faster and more reliable than relaying information through a chain. (4) The original error would have been prevented entirely by immediate reporting when the error was first discovered.",
      },

      // COMPREHENSIVE-PREVENTION: Optimal prevention measures
      {
        id: "comprehensive-prevention",
        text: "Mr. Campbell implements all three prevention layers:\n\n1. PHYSICAL: Metformin and glibenclamide are moved to separate shelf sections with clear dividers. A bright 'LOOK-ALIKE ALERT' sticker is placed on both locations.\n\n2. SYSTEM: The pharmacy management software is updated with a 'look-alike/sound-alike' (LASA) alert that triggers whenever either metformin or glibenclamide is dispensed, reminding the dispenser to double-check the medication selected.\n\n3. TECHNOLOGY: A barcode scanning step is added to the dispensing workflow — the technician must scan the stock bottle barcode against the prescription before preparing the medication.\n\nFinally, Mr. Campbell holds a brief team meeting to share the near miss (without blame), explain the new procedures, and encourage everyone to report any similar concerns.\n\nMrs. Brown's daughter arrives and receives the correct metformin without ever knowing about the near miss.\n\nYou have helped make this pharmacy safer for every future patient.",
        isEnd: true,
        outcome: "success",
        summary:
          "Success: You demonstrated exemplary medication safety practice. Key achievements: (1) Spotted the wrong-drug error through vigilance during routine restocking. (2) Verified the error methodically before alerting the pharmacist. (3) Removed the medication from the pickup shelf to prevent patient access. (4) Alerted the pharmacist immediately. (5) Participated in a complete response: correction, documentation, root cause investigation, and multi-layered systemic prevention. (6) Understood that effective error prevention requires system changes (physical, technological, procedural) — not just human vigilance. This is exactly how patient safety culture works in a well-run Caribbean pharmacy.",
      },

      // SINGLE-PREVENTION: Insufficient prevention
      {
        id: "single-prevention",
        text: "Mr. Campbell agrees that physical separation is important but explains it is insufficient on its own.\n\n'What if someone restocking the shelf puts the glibenclamide back in the wrong spot? Physical separation fails. That is why we need multiple barriers: shelf separation AND label alerts AND barcode scanning AND system warnings. If any single barrier fails, the others catch the error.'\n\nHe implements a comprehensive multi-layered prevention strategy: physical separation with colour-coded shelf dividers, tall-man lettering on stock labels (metFORMIN vs gliBENCLamide), a LASA alert in the dispensing software, and a barcode scanning verification step.\n\n'This is the Swiss cheese model of error prevention,' he explains. 'Each barrier has holes, but if you stack enough layers, the holes never align all the way through.'",
        isEnd: true,
        outcome: "partial",
        summary:
          "Partial success: You identified one important prevention measure but did not think comprehensively enough about multi-layered error prevention. Key lessons: (1) Single prevention measures create single points of failure. (2) Effective pharmacy safety uses the 'Swiss cheese model' — multiple independent barriers so that no single failure leads to patient harm. (3) System-level changes (technology, workflow, labelling) are more reliable than human-dependent measures alone. (4) Look-alike/sound-alike (LASA) drug pairs require specific, documented safety measures in every pharmacy.",
      },

      // BEHAVIORAL-ONLY: Weakest prevention
      {
        id: "behavioral-only-prevention",
        text: "Mr. Campbell shakes his head. 'That is the weakest possible response. Let me explain why \"be more careful\" does not work.\n\nHumans are fallible. We get tired, distracted, rushed, and overwhelmed. On a busy Friday afternoon with 50 prescriptions to fill, telling someone to \"pay more attention\" provides zero protection. The pharmacist who made this error is highly competent — they did not make it because they were careless. They made it because the system set them up to fail: two look-alike bottles, side by side, similar labels.\n\nWe cannot change human nature, but we CAN change the system. That is the foundation of patient safety.'\n\nHe implements comprehensive system changes: physical separation, tall-man lettering, LASA software alerts, and barcode scanning verification.",
        isEnd: true,
        outcome: "partial",
        summary:
          "Partial success: You caught the error, which is commendable, but your proposed prevention strategy was fundamentally flawed. Key lessons: (1) 'Be more careful' is the LEAST effective error prevention strategy in healthcare. (2) Human performance is inherently variable — system design must account for this. (3) Effective prevention changes the SYSTEM, not just the PEOPLE: physical layout, labelling, technology, and workflow. (4) The goal is to make it HARD to make errors, not to expect perfect human performance under imperfect conditions.",
      },
    ],
  },
];

// ============================================================================
// FLASHCARD DECKS — Organised by module
// ============================================================================

export const flashcardDecks: Record<string, FlashcardData[]> = {
  // ── Module 1: Introduction to Pharmacy ──────────────────────────────────
  "m1-intro-pharmacy": [
    {
      front: "What is Pharmaceutical Care?",
      back: "The responsible provision of drug therapy for the purpose of achieving definite outcomes that improve a patient's quality of life. Coined by Hepler and Strand (1990), it shifted pharmacy from a product-centred to a patient-centred profession.",
      moduleId: "m1-intro-pharmacy",
      lessonId: "m1-l1",
    },
    {
      front: "What is the Ebers Papyrus?",
      back: "One of the earliest known pharmaceutical documents, dating to approximately 1550 BCE from ancient Egypt. It contains over 800 prescriptions and remedies, demonstrating that systematic drug preparation has existed for millennia.",
      moduleId: "m1-intro-pharmacy",
      lessonId: "m1-l1",
    },
    {
      front: "What was the role of the apothecary in medieval pharmacy?",
      back: "The apothecary was a practitioner who compounded and dispensed medicines, often from a shop that doubled as a clinic for the poor. This role was distinct from physicians. The tradition crossed the Atlantic with European colonisers and blended with indigenous and African healing practices in the Caribbean.",
      moduleId: "m1-intro-pharmacy",
      lessonId: "m1-l1",
    },
    {
      front: "What is the key difference between a pharmacy technician and a pharmacist regarding dispensing?",
      back: "A pharmacy technician may prepare medications and assist with dispensing, but the final verification check before a prescription reaches the patient must be performed by a registered pharmacist in most Caribbean jurisdictions. The technician prepares; the pharmacist verifies.",
      moduleId: "m1-intro-pharmacy",
      lessonId: "m1-l2",
    },
    {
      front: "What is CARPHA?",
      back: "Caribbean Public Health Agency — the regional public health body headquartered in Port of Spain, Trinidad and Tobago. It coordinates disease surveillance, laboratory services, pharmaceutical quality assurance, and public health emergency response across the Caribbean.",
      moduleId: "m1-intro-pharmacy",
      lessonId: "m1-l3",
    },
    {
      front: "What is the Caribbean Regulatory System (CRS)?",
      back: "A CARICOM initiative to harmonise drug registration across member states, enabling a medicine approved in one member state to gain recognition in others. Still a work in progress — each island maintains significant regulatory independence.",
      moduleId: "m1-intro-pharmacy",
      lessonId: "m1-l3",
    },
    {
      front: "What is CARICOM?",
      back: "The Caribbean Community — a regional integration body of 15 member states that drives harmonisation of pharmaceutical standards, trade policy, and public health cooperation across the Caribbean.",
      moduleId: "m1-intro-pharmacy",
      lessonId: "m1-l3",
    },
    {
      front: "What is CAP (Caribbean Association of Pharmacists)?",
      back: "The professional body representing pharmacists across the Caribbean region. CAP advocates for professional standards, promotes continuing education, and works toward elevating pharmacy practice throughout the Caribbean.",
      moduleId: "m1-intro-pharmacy",
      lessonId: "m1-l3",
    },
    {
      front: "Why is bush medicine relevant to modern Caribbean pharmacy practice?",
      back: "The Caribbean has a rich tradition of herbal remedies (e.g., fever grass, soursop, neem) passed down through generations. Pharmacy technicians must understand this heritage because patients may use traditional remedies alongside prescribed medications, creating potential drug interactions. Modern practice acknowledges this heritage while ensuring evidence-based safety.",
      moduleId: "m1-intro-pharmacy",
      lessonId: "m1-l1",
    },
    {
      front: "Name 5 factors that make Caribbean pharmacy practice unique.",
      back: "1. Geographic fragmentation (medications must be imported across ocean)\n2. Tropical climate (strict cold chain management required)\n3. Regulatory diversity (each island has its own pharmacy laws)\n4. Disease landscape (tropical diseases + high NCD prevalence)\n5. Economic constraints (dependency on imported medications, no local manufacturing)\n6. Cultural factors (bush medicine coexists with modern pharmacy)\n7. Multilingual populations",
      moduleId: "m1-intro-pharmacy",
      lessonId: "m1-l3",
    },
  ],

  // ── Module 2: Pharmaceutical Terminology & Abbreviations ────────────────
  "m2-terminology": [
    {
      front: "What does the root 'hepat/o' mean?",
      back: "Liver. Examples: hepatitis (inflammation of the liver), hepatotoxic (toxic to the liver), hepatomegaly (enlarged liver).",
      moduleId: "m2-terminology",
      lessonId: "m2-l1",
    },
    {
      front: "What does the prefix 'hyper-' mean?",
      back: "Above normal / excessive. Examples: hypertension (high blood pressure), hyperglycaemia (high blood sugar), hyperthermia (elevated body temperature).",
      moduleId: "m2-terminology",
      lessonId: "m2-l1",
    },
    {
      front: "What does the suffix '-ectomy' mean?",
      back: "Surgical removal. Examples: appendectomy (removal of appendix), cholecystectomy (removal of gallbladder), mastectomy (removal of breast tissue).",
      moduleId: "m2-terminology",
      lessonId: "m2-l1",
    },
    {
      front: "What drug class does the stem '-pril' identify?",
      back: "ACE inhibitors (e.g., enalapril, lisinopril, ramipril, captopril). Used for hypertension, heart failure, and diabetic kidney protection. One of the most commonly dispensed drug classes in the Caribbean.",
      moduleId: "m2-terminology",
      lessonId: "m2-l1",
    },
    {
      front: "What drug class does the stem '-sartan' identify?",
      back: "Angiotensin II receptor blockers (ARBs) — e.g., losartan, valsartan, irbesartan, telmisartan. Used for hypertension, often prescribed when ACE inhibitors ('-pril') cause cough.",
      moduleId: "m2-terminology",
      lessonId: "m2-l1",
    },
    {
      front: "What drug class does the stem '-statin' identify?",
      back: "HMG-CoA reductase inhibitors (statins) — e.g., atorvastatin, simvastatin, rosuvastatin. Used for high cholesterol and cardiovascular risk reduction.",
      moduleId: "m2-terminology",
      lessonId: "m2-l1",
    },
    {
      front: "What does 'PRN' mean?",
      back: "Pro re nata (Latin) — 'as needed' or 'as the situation arises'. Instructs the patient to take the medication only when symptoms require it, rather than on a fixed schedule.",
      moduleId: "m2-terminology",
      lessonId: "m2-l2",
    },
    {
      front: "What does 'AC' mean on a prescription?",
      back: "Ante cibum (Latin) — 'before meals'. Its counterpart PC (post cibum) means 'after meals'.",
      moduleId: "m2-terminology",
      lessonId: "m2-l2",
    },
    {
      front: "Why is the abbreviation 'U' (for units) considered dangerous?",
      back: "It can be misread as '0' (zero), '4', or 'cc', leading to potential tenfold overdoses. For example, '6U' of insulin could be misread as '60 units'. ISMP recommends always writing out 'units' in full.",
      moduleId: "m2-terminology",
      lessonId: "m2-l2",
    },
    {
      front: "What does the Caribbean notation 'x 7/7' mean on a prescription?",
      back: "For 7 days. This British/Caribbean convention uses the number over 7 to indicate days. Similarly: 5/7 = 5 days, 14/7 = 14 days (2 weeks), 28/7 = 28 days (4 weeks).",
      moduleId: "m2-terminology",
      lessonId: "m2-l3",
    },
    {
      front: "What is a 'sig' on a prescription?",
      back: "Short for 'signa' (Latin for 'write on the label') — the portion of a prescription that tells the patient how to take the medication. The pharmacy technician's critical task is translating these abbreviated instructions into clear, patient-friendly language on the dispensing label.",
      moduleId: "m2-terminology",
      lessonId: "m2-l3",
    },
    {
      front: "What do the abbreviations BD/BID, TDS/TID, and QDS/QID mean?",
      back: "BD/BID = twice daily (bis in die)\nTDS/TID = three times daily (ter in die)\nQDS/QID = four times daily (quater in die)\nBD, TDS, QDS are British conventions used in Trinidad & Barbados. BID, TID, QID are American conventions also seen in Jamaica.",
      moduleId: "m2-terminology",
      lessonId: "m2-l2",
    },
    {
      front: "What drug class does the stem '-azole' identify?",
      back: "Azole antifungal medications — e.g., fluconazole, ketoconazole, clotrimazole, miconazole. Particularly high-volume in Caribbean pharmacies due to the tropical climate favouring fungal infections.",
      moduleId: "m2-terminology",
      lessonId: "m2-l1",
    },
    {
      front: "What drug class do the stems '-pam' and '-lam' identify?",
      back: "Benzodiazepines — e.g., diazepam, lorazepam, clonazepam (-pam) and alprazolam (-lam). CONTROLLED SUBSTANCES in ALL Caribbean jurisdictions. These stems should immediately trigger controlled substance handling protocols.",
      moduleId: "m2-terminology",
      lessonId: "m2-l1",
    },
    {
      front: "What drug class does the stem '-formin' identify?",
      back: "Biguanides — specifically metformin, the first-line treatment for type 2 diabetes worldwide. One of the most commonly dispensed medications in Caribbean pharmacies given the high regional prevalence of diabetes.",
      moduleId: "m2-terminology",
      lessonId: "m2-l1",
    },
  ],

  // ── Module 3: Understanding Prescription Orders & Labels ────────────────
  "m3-prescriptions": [
    {
      front: "What does the superscription '℞' (Rx) mean on a prescription?",
      back: "From Latin 'recipe' meaning 'take thou'. It is an instruction from the prescriber to the pharmacist to prepare and dispense the medication that follows. This symbol has been in use for centuries.",
      moduleId: "m3-prescriptions",
      lessonId: "m3-l1",
    },
    {
      front: "What is the 'inscription' on a prescription?",
      back: "The medication name, strength, and dosage form. Example: 'Amoxicillin 500mg capsules'. This is the core of the prescription — what medication to give the patient.",
      moduleId: "m3-prescriptions",
      lessonId: "m3-l1",
    },
    {
      front: "What is the 'subscription' on a prescription?",
      back: "The quantity of medication to dispense. May appear as '#21' (using the number symbol) or 'Mitte 21' (Latin for 'send 21').",
      moduleId: "m3-prescriptions",
      lessonId: "m3-l1",
    },
    {
      front: "Name 5 red flags on a prescription that should raise concern.",
      back: "1. Prescription written in pencil (easily altered)\n2. Missing or illegible prescriber registration number\n3. Patients requesting specific controlled substances by name and strength\n4. Alterations without prescriber counter-signature\n5. Prescription presented significantly after the date written (especially for controlled substances)\n6. Unverifiable prescriber identity",
      moduleId: "m3-prescriptions",
      lessonId: "m3-l1",
    },
    {
      front: "How long is a standard (non-controlled) prescription valid in Trinidad, Jamaica, and Barbados?",
      back: "6 months from the date of issue in all three jurisdictions. A prescription older than 6 months is expired and should not be dispensed. The pharmacist can contact the prescriber for renewal.",
      moduleId: "m3-prescriptions",
      lessonId: "m3-l3",
    },
    {
      front: "In Trinidad & Tobago, how quickly must a Schedule II controlled substance prescription be dispensed?",
      back: "Within 72 hours of the date of issue. This is much stricter than the 6-month window for standard prescriptions, reflecting the heightened controls around dangerous drugs.",
      moduleId: "m3-prescriptions",
      lessonId: "m3-l3",
    },
    {
      front: "What is the NHF (National Health Fund) in Jamaica?",
      back: "Jamaica's government programme providing subsidies for essential medications to qualifying patients with 15 specified chronic conditions (diabetes, hypertension, arthritis, asthma, mental health, etc.). The NHF number must appear on dispensing labels for subsidised medications.",
      moduleId: "m3-prescriptions",
      lessonId: "m3-l2",
    },
    {
      front: "What is CDAP (Chronic Disease Assistance Programme)?",
      back: "Trinidad & Tobago's government programme providing free medications for specified chronic conditions. CDAP-covered medications are dispensed free of charge to registered patients through participating pharmacies. It is Trinidad's equivalent of Jamaica's NHF.",
      moduleId: "m3-prescriptions",
      lessonId: "m3-l2",
    },
    {
      front: "What must a pharmacy technician do when a prescription is illegible?",
      back: "NEVER guess. Refer to the pharmacist, who should contact the prescriber directly for clarification. Document the clarification on the prescription with the prescriber's name, date, and time. Misinterpreting a medication name, dose, or frequency can cause serious harm or death.",
      moduleId: "m3-prescriptions",
      lessonId: "m3-l3",
    },
    {
      front: "List the core label elements required on dispensing labels in ALL three Caribbean jurisdictions.",
      back: "1. Pharmacy name and address\n2. Patient's name\n3. Date of dispensing\n4. Medication name and strength\n5. Directions for use\n6. Prescriber's name\n7. Quantity dispensed\n8. 'Keep out of reach of children' warning\n\nAdditional requirements vary by island (NHF number in Jamaica, Drug Service tracking in Barbados, etc.).",
      moduleId: "m3-prescriptions",
      lessonId: "m3-l2",
    },
  ],

  // ── Module 4: Caribbean Pharmacy Law ────────────────────────────────────
  "m4-pharmacy-law": [
    {
      front: "What is the primary pharmacy legislation in Trinidad & Tobago?",
      back: "The Pharmacy Board Act (Chapter 29:52), supplemented by the Food and Drugs Act (Ch. 30:01) and the Dangerous Drugs Act (Ch. 11:25). The Pharmacy Board of Trinidad and Tobago is the regulatory authority.",
      moduleId: "m4-pharmacy-law",
      lessonId: "m4-l2",
    },
    {
      front: "What is the primary pharmacy legislation in Jamaica?",
      back: "The Pharmacy Act (1975, amended), along with the Food and Drugs Act, the Dangerous Drugs Act (1948, amended 2015), and the National Health Fund Act. The Pharmacy Council of Jamaica is the regulatory body.",
      moduleId: "m4-pharmacy-law",
      lessonId: "m4-l3",
    },
    {
      front: "What is the primary pharmacy legislation in Barbados?",
      back: "The Pharmacy Act (Cap. 372D), along with the Drug Abuse (Prevention and Control) Act (Cap. 131), the Drug Service Act, and the Barbados National Formulary. The Pharmacy Council of Barbados and the Drug Service Division are the key regulatory bodies.",
      moduleId: "m4-pharmacy-law",
      lessonId: "m4-l4",
    },
    {
      front: "What is the Barbados Drug Service?",
      back: "A division under the Ministry of Health and Wellness responsible for central procurement, storage, and distribution of pharmaceuticals for the public health system. It manages the Barbados National Drug Formulary and distributes medications to Queen Elizabeth Hospital and all polyclinics.",
      moduleId: "m4-pharmacy-law",
      lessonId: "m4-l4",
    },
    {
      front: "What are the four drug categories in Trinidad & Tobago?",
      back: "1. Prescription-Only Medicines (POM) — require a valid prescription\n2. Pharmacy-Only Medicines (P) — no prescription needed but must be sold from a pharmacy under pharmacist supervision\n3. General Sale List (GSL) — may be sold in retail outlets without pharmacy supervision\n4. Controlled/Dangerous Drugs — subject to strict prescribing, dispensing, storage, and record-keeping requirements",
      moduleId: "m4-pharmacy-law",
      lessonId: "m4-l2",
    },
    {
      front: "How does codeine scheduling differ between Trinidad and Jamaica?",
      back: "Trinidad: Low-dose codeine compounds (e.g., codeine 8mg + paracetamol) may be available as Pharmacy-Only medicines without prescription. Higher doses are controlled.\n\nJamaica: ALL codeine products are Prescription-Only, reflecting a stricter approach due to abuse concerns.\n\nThis is one of the most significant regulatory differences in the Caribbean.",
      moduleId: "m4-pharmacy-law",
      lessonId: "m4-l5",
    },
    {
      front: "Can medical cannabis be dispensed from regular pharmacies in Jamaica?",
      back: "No. Despite the 2015 Dangerous Drugs Amendment that decriminalised small personal possession and legalised medical marijuana, cannabis is dispensed through licensed herb houses and dispensaries regulated by the Cannabis Licensing Authority (CLA), NOT through regular community pharmacies.",
      moduleId: "m4-pharmacy-law",
      lessonId: "m4-l3",
    },
    {
      front: "What is the Dangerous Drugs Act (Ch. 11:25) in Trinidad & Tobago?",
      back: "The Act governing the import, export, manufacture, supply, and possession of controlled substances in Trinidad & Tobago. It implements Trinidad's obligations under the UN Single Convention on Narcotic Drugs (1961) and the Convention on Psychotropic Substances (1971).",
      moduleId: "m4-pharmacy-law",
      lessonId: "m4-l2",
    },
    {
      front: "What is the 'golden rule' regarding drug scheduling in the Caribbean?",
      back: "WHEN IN DOUBT — CHECK. Drug classifications change through government gazetting. Always verify current scheduling via the most recent government gazette, your pharmacist supervisor, or the relevant national pharmacy board. Never assume that rules from one island or one time period still apply. Dispensing a controlled substance without proper authorisation is a criminal offence.",
      moduleId: "m4-pharmacy-law",
      lessonId: "m4-l5",
    },
    {
      front: "Which law applies when dispensing: the law of the patient's home island or the island where you are physically dispensing?",
      back: "Always the law of the island where you are PHYSICALLY dispensing. If a patient from Trinidad visits a pharmacy in Jamaica, Jamaica's laws apply — not Trinidad's. Similarly, a prescription from Trinidad is generally not valid in Jamaica; the patient would need a prescription from a Jamaica-registered prescriber.",
      moduleId: "m4-pharmacy-law",
      lessonId: "m4-l5",
    },
    {
      front: "What is the Barbados National Drug Formulary?",
      back: "A list of medications approved for use in the Barbados public health system, maintained by the Drug Service Division. It guides prescribing and dispensing decisions across all government health facilities including Queen Elizabeth Hospital and polyclinics.",
      moduleId: "m4-pharmacy-law",
      lessonId: "m4-l4",
    },
    {
      front: "What data protection law affects pharmacy practice in Barbados?",
      back: "The Data Protection Act (2019). It classifies patient health information (including medication records) as sensitive personal data requiring enhanced protections. Pharmacy technicians must handle patient records in compliance with this Act.",
      moduleId: "m4-pharmacy-law",
      lessonId: "m4-l4",
    },
    {
      front: "What is PCATT (Pharmacy Council Association of Trinidad and Tobago)?",
      back: "The professional association representing pharmacists in Trinidad & Tobago. It advocates for the profession, supports continuing education, and works alongside the statutory Pharmacy Board to advance pharmacy practice in the twin-island republic.",
      moduleId: "m4-pharmacy-law",
      lessonId: "m4-l2",
    },
  ],
};
