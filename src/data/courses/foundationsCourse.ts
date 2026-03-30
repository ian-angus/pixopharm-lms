// ============================================================================
// PIXOPHARM LMS — Foundations of Pharmacy Practice
// Full Course Content: 8 Modules, 30 Lessons, 40 Quiz Questions
// Focus Islands: Trinidad & Tobago, Jamaica, Barbados
// ============================================================================

import type { Module, FullCourse } from '../types';

// ============================================================================
// MODULE 1 — Introduction to Pharmacy: History, Roles & the Caribbean Context
// ============================================================================

const module1: Module = {
  id: "m1-intro-pharmacy",
  number: 1,
  title: "Introduction to Pharmacy: History, Roles & the Caribbean Context",
  description:
    "Explore the rich history of pharmacy from ancient apothecaries to modern Caribbean practice. Understand the distinct roles within a pharmacy team and how the Caribbean context shapes every aspect of the profession.",
  learningObjectives: [
    "Trace the evolution of pharmacy from ancient civilisations to modern Caribbean practice",
    "Distinguish between the roles of pharmacists, pharmacy technicians, and pharmacy assistants",
    "Describe how geography, culture, and colonial history have shaped Caribbean pharmacy",
    "Identify the major organisations governing pharmacy practice in the region",
  ],
  lessons: [
    // ── Lesson 1.1 ──
    {
      id: "m1-l1",
      title: "The Evolution of Pharmacy Practice",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "From Ancient Remedies to Modern Dispensaries",
        },
        {
          type: "text",
          body: "Pharmacy is one of the oldest professions in the world. The word itself derives from the Greek 'pharmakon', meaning drug or remedy. Ancient civilisations — Egyptian, Chinese, Greek, and Indian — all developed sophisticated systems for preparing medicines from natural substances. The Ebers Papyrus, dating to approximately 1550 BCE, contains over 800 prescriptions and remedies, making it one of the earliest known pharmaceutical documents.",
        },
        {
          type: "text",
          body: "In medieval Europe, the apothecary emerged as a distinct profession separate from physicians. The apothecary compounded and dispensed medicines, often from a shop that doubled as a clinic for the poor. This tradition crossed the Atlantic with European colonisers and took root in the Caribbean, where it blended with indigenous and African healing practices to create a unique pharmaceutical heritage.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Caribbean Heritage",
          body: "The Caribbean has a rich tradition of bush medicine and herbal remedies passed down through generations. Plants like fever grass (lemongrass), soursop, and neem have been used medicinally for centuries. Modern Caribbean pharmacy acknowledges this heritage while ensuring patient safety through evidence-based practice.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Modern Pharmacy",
        },
        {
          type: "text",
          body: "Today's pharmacy is a far cry from the apothecary's shop. Modern pharmacies are technology-driven healthcare hubs where highly trained professionals manage complex medication therapies, counsel patients, and serve as the most accessible point of healthcare contact in many communities. In the Caribbean, this accessibility is particularly vital — pharmacies often serve as the first point of care for patients who cannot easily reach a doctor or hospital, especially on smaller islands.",
        },
        {
          type: "key-term",
          term: "Pharmaceutical Care",
          definition:
            "The responsible provision of drug therapy for the purpose of achieving definite outcomes that improve a patient's quality of life. Coined by Hepler and Strand in 1990, this concept shifted pharmacy from a product-centred to a patient-centred profession.",
        },
        {
          type: "video-placeholder",
          title: "A Day in the Life: Caribbean Pharmacy Practice",
          duration: "8 min",
          description:
            "Follow a pharmacy technician through a typical day at a community pharmacy in Port of Spain, Trinidad, from opening procedures through dispensing, inventory checks, and patient interactions.",
        },
      ],
    },
    // ── Lesson 1.2 ──
    {
      id: "m1-l2",
      title: "The Pharmacy Team: Roles & Responsibilities",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Who Does What in the Pharmacy?",
        },
        {
          type: "text",
          body: "A well-functioning pharmacy depends on a team of professionals, each with clearly defined roles and responsibilities. Understanding these roles — and crucially, the legal boundaries between them — is fundamental to safe practice. In the Caribbean, these boundaries vary by jurisdiction, making it essential for technicians to know exactly what they can and cannot do in their specific island context.",
        },
        {
          type: "table",
          caption: "Pharmacy Team Roles Compared",
          headers: ["Role", "Qualifications", "Key Responsibilities", "Can They Dispense?"],
          rows: [
            [
              "Pharmacist",
              "Bachelor's or Doctor of Pharmacy (PharmD), registered with national pharmacy board",
              "Final verification of prescriptions, clinical consultations, drug therapy management, supervision of staff",
              "Yes — final check and patient counselling",
            ],
            [
              "Pharmacy Technician",
              "Certified training programme (e.g. PIXOPHARM), registered where required",
              "Prescription data entry, medication preparation, inventory management, assisting with dispensing under supervision",
              "Preparation yes; final check requires pharmacist oversight in most Caribbean jurisdictions",
            ],
            [
              "Pharmacy Assistant / Aide",
              "On-the-job training, no formal certification required in most jurisdictions",
              "Stocking shelves, cashier duties, answering phones, basic customer service",
              "No — cannot handle prescription medications",
            ],
          ],
        },
        {
          type: "island-comparison",
          title: "Pharmacy Technician Scope of Practice by Island",
          description:
            "The legal scope of what a pharmacy technician can do varies significantly between islands. Always verify the current regulations in your jurisdiction.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Governed by the Pharmacy Board of Trinidad and Tobago under the Pharmacy Board Act (Chapter 29:52)",
                "Pharmacy technicians work under the direct supervision of a registered pharmacist",
                "Technicians may assist in dispensing but the pharmacist must perform the final check",
                "No separate statutory registration for technicians — operates under pharmacist's licence",
                "Growing movement toward formal technician registration and expanded scope",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Governed by the Pharmacy Council of Jamaica under the Pharmacy Act (1975, amended)",
                "Technicians must work under the supervision of a registered pharmacist",
                "Jamaica's system distinguishes between 'qualified assistants' and 'pharmacy technicians'",
                "The Pharmacy Council maintains a register of approved training programmes",
                "Technicians cannot independently verify or release prescriptions",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Governed by the Barbados Drug Service and the Pharmacy Act (Cap. 372D)",
                "Pharmacy technicians serve as vital support in both public (Queen Elizabeth Hospital, polyclinics) and private pharmacy settings",
                "The Barbados National Drug Formulary guides prescribing and dispensing decisions",
                "Technicians assist with dispensing and inventory management under pharmacist supervision",
                "The Drug Service Division oversees medication supply throughout the public health system",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Critical Legal Point",
          body: "Never exceed the scope of practice defined by your island's pharmacy legislation. Performing acts reserved for pharmacists — such as independently verifying prescriptions or providing clinical advice — can result in legal prosecution, even if done with good intentions. When in doubt, always defer to the supervising pharmacist.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Pharmacy Technician as a Professional",
        },
        {
          type: "text",
          body: "Being a pharmacy technician is not merely a job — it is a profession with ethical obligations, continuing education requirements, and a duty of care to every patient. As a technician, you are often the first person a patient interacts with. Your accuracy in preparing medications, your attention to detail in managing inventory, and your professionalism in every interaction directly impact patient health outcomes.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Accuracy: A single dispensing error can cause serious harm or death",
            "Confidentiality: Patient information must be protected at all times",
            "Professionalism: Your conduct reflects on the entire pharmacy profession",
            "Continuous Learning: Drug information changes constantly — staying current is a duty, not optional",
            "Teamwork: Effective communication with pharmacists and other healthcare providers is essential",
          ],
        },
      ],
    },
    // ── Lesson 1.3 ──
    {
      id: "m1-l3",
      title: "Pharmacy in the Caribbean Context",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "What Makes Caribbean Pharmacy Unique?",
        },
        {
          type: "text",
          body: "Caribbean pharmacy practice is shaped by a unique confluence of factors that distinguish it from pharmacy practice anywhere else in the world. The region's island geography, colonial history, cultural diversity, tropical climate, and economic realities all create challenges and opportunities that a pharmacy technician must understand to practice effectively.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Geographic fragmentation: Medications must be imported across ocean, often to remote islands with limited port infrastructure",
            "Tropical climate: Heat and humidity demand strict cold chain management for temperature-sensitive medications",
            "Regulatory diversity: Each island nation maintains its own pharmacy laws, drug schedules, and professional standards",
            "Disease landscape: Tropical diseases (dengue, chikungunya, Zika), high prevalence of NCDs (hypertension, diabetes), and HIV/AIDS shape medication demand",
            "Cultural factors: Traditional medicine (bush medicine, obeah) coexists with modern pharmacy and must be understood, not dismissed",
            "Economic constraints: Many islands rely on imported medications with no local manufacturing, creating cost and supply chain pressures",
            "Multilingual populations: Patients may speak English, Spanish, French, Creole, Hindi, or Dutch depending on the island",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Key Regional Organisations",
        },
        {
          type: "table",
          caption: "Major Caribbean Pharmacy & Health Organisations",
          headers: ["Organisation", "Acronym", "Role"],
          rows: [
            [
              "Caribbean Community",
              "CARICOM",
              "Regional integration body; drives harmonisation of pharmaceutical standards across 15 member states",
            ],
            [
              "Caribbean Public Health Agency",
              "CARPHA",
              "Regional public health body headquartered in Trinidad; coordinates disease surveillance, laboratory services, and pharmaceutical quality",
            ],
            [
              "Caribbean Association of Pharmacists",
              "CAP",
              "Professional body representing pharmacists across the region; advocates for standards and continuing education",
            ],
            [
              "Caribbean Regulatory System",
              "CRS",
              "CARICOM initiative to harmonise drug registration, allowing a medicine approved in one member state to gain recognition in others",
            ],
            [
              "Pan American Health Organization",
              "PAHO/WHO",
              "UN agency providing technical cooperation to Caribbean health systems, including pharmaceutical policy support",
            ],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "CARICOM Harmonisation — Work in Progress",
          body: "While CARICOM aspires to harmonised pharmaceutical standards, in practice each island maintains significant regulatory independence. The Caribbean Regulatory System (CRS) is gradually enabling mutual recognition of drug registrations, but drug scheduling, prescription requirements, and technician scope of practice still vary island by island. This is why PIXOPHARM teaches you to navigate these differences rather than assume uniformity.",
        },
        {
          type: "case-study",
          title: "Case Study: The Supply Chain Challenge",
          scenario:
            "Hurricane season 2024: A Category 4 hurricane disrupts shipping routes to several Eastern Caribbean islands for three weeks. Pharmacies on Dominica and St. Vincent report critical shortages of insulin, antihypertensives, and asthma medications. The OECS Pharmaceutical Procurement Service activates its emergency protocol, but delivery is delayed by damaged port infrastructure.",
          questions: [
            "What advance planning could pharmacies have done to prepare for hurricane season?",
            "How should a pharmacy technician prioritise dispensing when stock of essential medications is limited?",
            "What role do regional organisations like OECS PPS and CARPHA play in pharmaceutical emergency response?",
          ],
          discussion:
            "This scenario illustrates why Caribbean pharmacies must maintain emergency buffer stock (typically 3-6 months for essential medicines), have written hurricane preparedness SOPs, and understand the regional procurement networks available to them. The OECS Pharmaceutical Procurement Service pools purchasing power for 9 Eastern Caribbean states, achieving better prices and more reliable supply — but cannot eliminate the geographic vulnerability of small island nations.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m1-q1",
      question:
        "What is the origin of the word 'pharmacy'?",
      options: [
        "Latin 'pharmacia' meaning healing",
        "Greek 'pharmakon' meaning drug or remedy",
        "Arabic 'al-farmasi' meaning preparation",
        "French 'pharmacie' meaning dispensary",
      ],
      correctIndex: 1,
      explanation:
        "The word 'pharmacy' derives from the Greek 'pharmakon', meaning drug, remedy, or poison. This ancient root reflects the dual nature of medicines — they can heal or harm depending on how they are used.",
    },
    {
      id: "m1-q2",
      question:
        "In most Caribbean jurisdictions, who must perform the final verification check before a prescription is dispensed to a patient?",
      options: [
        "The pharmacy technician who prepared the medication",
        "Any member of the pharmacy team",
        "A registered pharmacist",
        "The pharmacy owner",
      ],
      correctIndex: 2,
      explanation:
        "Across Trinidad & Tobago, Jamaica, and Barbados, the final verification of a dispensed prescription must be performed by a registered pharmacist. While technicians prepare medications, the pharmacist's check is the legal and professional safeguard before the medication reaches the patient.",
    },
    {
      id: "m1-q3",
      question:
        "Which organisation is responsible for coordinating the harmonisation of drug registration across CARICOM member states?",
      options: [
        "Caribbean Association of Pharmacists (CAP)",
        "Caribbean Regulatory System (CRS)",
        "Pan American Health Organization (PAHO)",
        "Caribbean Examination Council (CXC)",
      ],
      correctIndex: 1,
      explanation:
        "The Caribbean Regulatory System (CRS) is a CARICOM initiative designed to harmonise drug registration across member states, enabling mutual recognition of approved medicines. While progress has been made, full harmonisation is still a work in progress.",
    },
    {
      id: "m1-q4",
      question:
        "What is a significant challenge unique to pharmacy practice in the Caribbean?",
      options: [
        "Overproduction of generic medications locally",
        "Excessive numbers of pharmacy training programmes",
        "Importing medications across ocean with tropical climate storage demands",
        "Too many pharmacists relative to the population",
      ],
      correctIndex: 2,
      explanation:
        "Caribbean nations import the vast majority of their medications, which must be transported across ocean and maintained in strict temperature-controlled conditions despite the tropical climate. This creates unique supply chain, cost, and cold chain management challenges not faced by mainland countries with domestic pharmaceutical manufacturing.",
    },
    {
      id: "m1-q5",
      question:
        "Where is CARPHA (Caribbean Public Health Agency) headquartered?",
      options: [
        "Kingston, Jamaica",
        "Bridgetown, Barbados",
        "Port of Spain, Trinidad and Tobago",
        "Nassau, Bahamas",
      ],
      correctIndex: 2,
      explanation:
        "CARPHA is headquartered in Port of Spain, Trinidad and Tobago. It serves as the regional public health body coordinating disease surveillance, laboratory services, pharmaceutical quality, and public health emergency response across the Caribbean.",
    },
  ],
};

// ============================================================================
// MODULE 2 — Pharmaceutical Terminology & Medical Abbreviations
// ============================================================================

const module2: Module = {
  id: "m2-terminology",
  number: 2,
  title: "Pharmaceutical Terminology & Medical Abbreviations",
  description:
    "Build the specialised vocabulary you need to read prescriptions, communicate with healthcare professionals, and understand drug literature. This module breaks down medical terminology into manageable building blocks.",
  learningObjectives: [
    "Deconstruct medical terms into their root, prefix, and suffix components",
    "Interpret the 50 most common medical abbreviations used in Caribbean prescriptions",
    "Translate prescription sig codes into patient-friendly dispensing instructions",
    "Identify dangerous abbreviations that should be avoided to prevent medication errors",
  ],
  lessons: [
    {
      id: "m2-l1",
      title: "Building Blocks: Roots, Prefixes, Suffixes & Drug Name Stems",
      duration: "35 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "How Medical Terms Are Constructed",
        },
        {
          type: "text",
          body: "Medical terminology can seem overwhelming at first, but it follows a logical system. Nearly all medical terms are built from Greek and Latin roots combined with prefixes (added to the beginning) and suffixes (added to the end). Once you learn these building blocks, you can decode unfamiliar terms — even ones you've never encountered before.",
        },
        {
          type: "key-term",
          term: "Root Word",
          definition:
            "The core of a medical term that carries its fundamental meaning. For example, 'cardi' relates to the heart, 'hepat' relates to the liver, and 'derm' relates to the skin.",
        },
        {
          type: "table",
          caption: "Essential Pharmaceutical Root Words",
          headers: ["Root", "Meaning", "Example", "Meaning of Example"],
          rows: [
            ["cardi/o", "Heart", "Cardiology", "Study of the heart"],
            ["hepat/o", "Liver", "Hepatotoxic", "Toxic to the liver"],
            ["nephr/o", "Kidney", "Nephropathy", "Disease of the kidney"],
            ["pulmon/o", "Lung", "Pulmonary", "Relating to the lungs"],
            ["gastr/o", "Stomach", "Gastritis", "Inflammation of the stomach"],
            ["derm/o", "Skin", "Dermatitis", "Inflammation of the skin"],
            ["neur/o", "Nerve", "Neuropathy", "Disease of the nerves"],
            ["hem/o", "Blood", "Hematology", "Study of blood"],
            ["arthr/o", "Joint", "Arthritis", "Inflammation of joints"],
            ["oste/o", "Bone", "Osteoporosis", "Porous/weakened bones"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Common Prefixes",
        },
        {
          type: "table",
          caption: "Prefixes You Will Use Daily",
          headers: ["Prefix", "Meaning", "Example"],
          rows: [
            ["hyper-", "Above normal / excessive", "Hypertension (high blood pressure)"],
            ["hypo-", "Below normal / deficient", "Hypoglycaemia (low blood sugar)"],
            ["anti-", "Against", "Antibiotic (against bacteria)"],
            ["pre-", "Before", "Prenatal (before birth)"],
            ["post-", "After", "Postoperative (after surgery)"],
            ["sub-", "Under / below", "Subcutaneous (under the skin)"],
            ["intra-", "Within", "Intravenous (within a vein)"],
            ["poly-", "Many", "Polypharmacy (many medications)"],
            ["tachy-", "Fast", "Tachycardia (fast heart rate)"],
            ["brady-", "Slow", "Bradycardia (slow heart rate)"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Common Suffixes",
        },
        {
          type: "table",
          caption: "Suffixes That Reveal Meaning",
          headers: ["Suffix", "Meaning", "Example"],
          rows: [
            ["-itis", "Inflammation", "Bronchitis (inflammation of bronchi)"],
            ["-osis", "Condition / disease", "Thrombosis (blood clot condition)"],
            ["-ectomy", "Surgical removal", "Appendectomy (removal of appendix)"],
            ["-ology", "Study of", "Pharmacology (study of drugs)"],
            ["-pathy", "Disease", "Cardiomyopathy (heart muscle disease)"],
            ["-algia", "Pain", "Neuralgia (nerve pain)"],
            ["-emia", "Blood condition", "Anaemia (low red blood cells)"],
            ["-toxic", "Poisonous to", "Nephrotoxic (poisonous to kidneys)"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Practice Tip",
          body: "When you encounter an unfamiliar medical term, break it apart: identify the root first (what body part or system?), then the prefix (any modifier?), and finally the suffix (what's happening to it?). For example: 'hepato-toxic-ity' = liver + poisonous + condition = a condition of being poisonous to the liver.",
        },
        {
          type: "divider",
        },
        {
          type: "heading",
          level: 2,
          text: "Drug Name Stems: Suffixes That Reveal the Drug Class",
        },
        {
          type: "text",
          body: "One of the most powerful skills a pharmacy technician can develop is the ability to identify a drug's therapeutic class just by reading its name. The World Health Organization (WHO) and national drug naming authorities assign standardised stems (usually suffixes) to drug names so that medications in the same class share a common ending. If you know these stems, you can walk into any pharmacy in the Caribbean and immediately recognise what a medication does — even if you have never seen that specific brand before.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Why This Matters at the Counter",
          body: "Imagine a patient hands you a prescription for 'amlodipine'. You may not have memorised every drug, but you recognise '-dipine' — that's a calcium channel blocker for blood pressure. Instantly you know the drug class, the likely condition being treated, and the type of counselling points to reinforce. This pattern recognition is what separates a confident technician from one who is guessing.",
        },
        {
          type: "heading",
          level: 3,
          text: "Cardiovascular Drug Stems",
        },
        {
          type: "table",
          caption: "Heart & Blood Pressure Medications — The Most Dispensed Class in the Caribbean",
          headers: ["Stem", "Drug Class", "Common Examples", "Used For"],
          rows: [
            ["-olol", "Beta-blockers", "Atenolol, Metoprolol, Propranolol, Bisoprolol", "Hypertension, angina, heart rate control, anxiety (propranolol)"],
            ["-pril", "ACE inhibitors", "Enalapril, Lisinopril, Ramipril, Captopril", "Hypertension, heart failure, diabetic kidney protection"],
            ["-sartan", "Angiotensin II receptor blockers (ARBs)", "Losartan, Valsartan, Irbesartan, Telmisartan", "Hypertension (often used when ACE inhibitors cause cough)"],
            ["-dipine", "Calcium channel blockers (dihydropyridine)", "Amlodipine, Nifedipine, Felodipine", "Hypertension, angina"],
            ["-statin", "HMG-CoA reductase inhibitors", "Atorvastatin, Simvastatin, Rosuvastatin, Pravastatin", "High cholesterol, cardiovascular risk reduction"],
            ["-fibrate", "Fibric acid derivatives", "Gemfibrozil, Fenofibrate", "High triglycerides"],
            ["-oxin", "Cardiac glycosides", "Digoxin", "Heart failure, atrial fibrillation"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Caribbean Relevance",
          body: "Hypertension and diabetes are the leading chronic diseases across Trinidad, Jamaica, and Barbados. You will dispense '-pril', '-sartan', '-olol', and '-dipine' medications dozens of times every day. Knowing these stems is not academic — it is essential for daily practice. The CDAP programme in Trinidad and the NHF in Jamaica both cover these drug classes extensively.",
        },
        {
          type: "heading",
          level: 3,
          text: "Diabetes Drug Stems",
        },
        {
          type: "table",
          caption: "Antidiabetic Medications",
          headers: ["Stem", "Drug Class", "Common Examples", "Used For"],
          rows: [
            ["-formin", "Biguanides", "Metformin", "Type 2 diabetes (first-line treatment worldwide)"],
            ["-gliptin", "DPP-4 inhibitors", "Sitagliptin, Saxagliptin, Linagliptin", "Type 2 diabetes (add-on therapy)"],
            ["-gliflozin", "SGLT2 inhibitors", "Empagliflozin, Dapagliflozin, Canagliflozin", "Type 2 diabetes, heart failure, kidney protection"],
            ["-glutide", "GLP-1 receptor agonists", "Semaglutide, Liraglutide, Dulaglutide", "Type 2 diabetes, weight management (injectable and oral)"],
            ["gli- / -ide", "Sulfonylureas", "Glibenclamide (Glyburide), Gliclazide, Glimepiride", "Type 2 diabetes (stimulate insulin release)"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Anti-Infective Drug Stems",
        },
        {
          type: "table",
          caption: "Antibiotics, Antifungals & Antivirals",
          headers: ["Stem", "Drug Class", "Common Examples", "Used For"],
          rows: [
            ["-cillin", "Penicillins", "Amoxicillin, Ampicillin, Flucloxacillin", "Bacterial infections (most commonly dispensed antibiotic class in the Caribbean)"],
            ["-cycline", "Tetracyclines", "Doxycycline, Tetracycline, Minocycline", "Bacterial infections, acne, malaria prophylaxis"],
            ["-mycin / -micin", "Macrolides / Aminoglycosides", "Azithromycin, Erythromycin, Clarithromycin (macrolides); Gentamicin, Amikacin (aminoglycosides)", "Respiratory infections, skin infections; serious hospital infections"],
            ["-floxacin", "Fluoroquinolones", "Ciprofloxacin, Levofloxacin, Moxifloxacin", "UTIs, respiratory infections, GI infections"],
            ["cef- / ceph-", "Cephalosporins", "Cefuroxime, Cephalexin, Ceftriaxone", "Broad-spectrum bacterial infections"],
            ["-azole", "Azole antifungals", "Fluconazole, Ketoconazole, Clotrimazole, Miconazole", "Fungal infections (very common in tropical Caribbean climate)"],
            ["-vir / -ovir", "Antivirals", "Acyclovir, Valacyclovir, Oseltamivir", "Herpes, chickenpox, influenza"],
            ["-navir", "Protease inhibitors (HIV)", "Ritonavir, Darunavir, Atazanavir", "HIV/AIDS treatment (antiretroviral therapy)"],
            ["-avudine / -ivudine", "Nucleoside reverse transcriptase inhibitors (NRTIs)", "Lamivudine, Zidovudine, Stavudine", "HIV/AIDS treatment"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tropical Climate Connection",
          body: "The '-azole' antifungals (fluconazole, clotrimazole, miconazole) are particularly high-volume in Caribbean pharmacies. The hot, humid tropical climate creates ideal conditions for fungal skin infections, oral thrush, and vaginal candidiasis. Recognising the '-azole' suffix instantly tells you this is an antifungal — critical when checking prescriptions.",
        },
        {
          type: "heading",
          level: 3,
          text: "Pain, Mental Health & Other Common Stems",
        },
        {
          type: "table",
          caption: "CNS, Pain & GI Medications",
          headers: ["Stem", "Drug Class", "Common Examples", "Used For"],
          rows: [
            ["-prazole", "Proton pump inhibitors (PPIs)", "Omeprazole, Pantoprazole, Esomeprazole, Lansoprazole", "Acid reflux (GERD), stomach ulcers"],
            ["-tidine", "H2 receptor antagonists", "Ranitidine*, Famotidine, Cimetidine", "Acid reflux, ulcers (*ranitidine withdrawn in many markets)"],
            ["-pam / -lam", "Benzodiazepines", "Diazepam, Lorazepam, Clonazepam, Alprazolam", "Anxiety, seizures, muscle spasms, insomnia (CONTROLLED — strict handling required)"],
            ["-oxetine / -aline", "SSRIs / SNRIs (antidepressants)", "Fluoxetine, Paroxetine, Sertraline; Venlafaxine, Duloxetine", "Depression, anxiety disorders, chronic pain"],
            ["-pine / -done", "Atypical antipsychotics", "Olanzapine, Quetiapine, Risperidone, Clozapine", "Schizophrenia, bipolar disorder, severe agitation"],
            ["-triptan", "Serotonin receptor agonists", "Sumatriptan, Rizatriptan", "Acute migraine treatment"],
            ["-caine", "Local anaesthetics", "Lidocaine, Bupivacaine, Procaine", "Local numbing for procedures, dental work"],
            ["-ine (codeine, morphine)", "Opioid analgesics", "Codeine, Morphine, Tramadol*", "Moderate to severe pain (CONTROLLED in all Caribbean jurisdictions; *tramadol has unique stem)"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Other Important Stems",
        },
        {
          type: "table",
          caption: "Respiratory, Allergy & Specialty Medications",
          headers: ["Stem", "Drug Class", "Common Examples", "Used For"],
          rows: [
            ["-terol / -buterol", "Beta-2 agonist bronchodilators", "Salbutamol (Albuterol), Formoterol, Salmeterol", "Asthma, COPD (rescue and maintenance inhalers)"],
            ["-sone / -olone", "Corticosteroids", "Prednisolone, Prednisone, Dexamethasone, Hydrocortisone, Betamethasone", "Inflammation, asthma, allergies, autoimmune conditions"],
            ["-tadine / -adine", "Antihistamines (2nd generation)", "Loratadine, Cetirizine, Desloratadine, Fexofenadine", "Allergies, hay fever, urticaria"],
            ["-lukast", "Leukotriene receptor antagonists", "Montelukast, Zafirlukast", "Asthma prevention, allergic rhinitis"],
            ["-mab", "Monoclonal antibodies", "Trastuzumab, Rituximab, Adalimumab", "Cancer, autoimmune diseases (specialist/hospital use)"],
            ["-nib", "Kinase inhibitors", "Imatinib, Erlotinib", "Cancer (specialist/hospital use)"],
            ["-parin", "Anticoagulants (heparin class)", "Heparin, Enoxaparin, Dalteparin", "Blood clot prevention and treatment"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Controlled Substance Stems — Know These Instantly",
          body: "When you see '-pam' or '-lam' (benzodiazepines) or opioid stems on a prescription, your controlled substance protocols must kick in automatically. These medications require special prescribing, dispensing, storage, and record-keeping in ALL Caribbean jurisdictions. Recognising the stem is your first alert that heightened procedures apply.",
        },
        {
          type: "case-study",
          title: "Practice Exercise: Name That Drug Class",
          scenario:
            "A patient presents three prescriptions: (1) Amlodipine 5mg, (2) Metformin 500mg, (3) Omeprazole 20mg. Using only the drug name stems, identify each drug's class and likely condition being treated — before looking anything up.",
          questions: [
            "What does '-dipine' tell you about amlodipine?",
            "What does '-formin' tell you about metformin?",
            "What does '-prazole' tell you about omeprazole?",
          ],
          discussion:
            "Amlodipine: '-dipine' = calcium channel blocker → hypertension/angina. Metformin: '-formin' = biguanide → type 2 diabetes. Omeprazole: '-prazole' = proton pump inhibitor → acid reflux/ulcers. This is a very common combination in Caribbean patients — an older adult managing high blood pressure, diabetes, and stomach acid issues. Recognising all three drug classes instantly from their names is a skill you will use every single working day.",
        },
      ],
    },
    {
      id: "m2-l2",
      title: "Common Medical Abbreviations",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Abbreviations Used in Caribbean Prescriptions",
        },
        {
          type: "text",
          body: "Medical abbreviations are shorthand used by prescribers to communicate instructions efficiently. As a pharmacy technician, you must know these instantly — misinterpreting an abbreviation can lead to a serious medication error. The abbreviations below are the ones you will encounter most frequently in Caribbean pharmacy practice.",
        },
        {
          type: "table",
          caption: "Essential Prescription Abbreviations",
          headers: ["Abbreviation", "Latin Origin", "English Meaning"],
          rows: [
            ["PO", "Per os", "By mouth"],
            ["PRN", "Pro re nata", "As needed"],
            ["BID / BD", "Bis in die", "Twice daily"],
            ["TID / TDS", "Ter in die / Ter die sumendus", "Three times daily"],
            ["QID / QDS", "Quater in die", "Four times daily"],
            ["STAT", "Statim", "Immediately"],
            ["AC", "Ante cibum", "Before meals"],
            ["PC", "Post cibum", "After meals"],
            ["HS", "Hora somni", "At bedtime"],
            ["Q4H", "Quaque 4 hora", "Every 4 hours"],
            ["OD", "Omni die", "Once daily"],
            ["SL", "Sublingual", "Under the tongue"],
            ["PR", "Per rectum", "Rectally"],
            ["TOP", "Topical", "Applied to skin"],
            ["INH", "Inhalation", "By inhaler"],
            ["SC / SubQ", "Subcutaneous", "Under the skin (injection)"],
            ["IM", "Intramuscular", "Into the muscle (injection)"],
            ["IV", "Intravenous", "Into the vein (injection)"],
            ["NKA", "—", "No known allergies"],
            ["NKDA", "—", "No known drug allergies"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Dangerous Abbreviations — Do Not Use",
          body: "The following abbreviations have been identified by ISMP (Institute for Safe Medication Practices) as error-prone and should NEVER be used: 'U' (write 'units'), 'IU' (write 'international units'), 'QD' (write 'daily' — easily confused with QID), 'QOD' (write 'every other day'), 'MS' (ambiguous: morphine sulfate or magnesium sulfate?), trailing zeros (write '1 mg' not '1.0 mg'), lack of leading zero (write '0.5 mg' not '.5 mg'). If you receive a prescription with these abbreviations, clarify with the prescriber before dispensing.",
        },
        {
          type: "island-comparison",
          title: "Prescription Language Conventions",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Prescriptions typically use British-style abbreviations (BD, TDS, QDS rather than BID, TID, QID)",
                "Metric system is standard (milligrams, millilitres)",
                "Prescriptions must be written in English",
                "Electronic prescriptions are increasingly common in private practice",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Mix of British and American abbreviation styles depending on where the prescriber trained",
                "You may see both 'BD' and 'BID' for twice daily — always verify intent",
                "Prescriptions must be written in English",
                "Handwritten prescriptions remain common in public health facilities",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Predominantly British abbreviation conventions (BD, TDS, QDS)",
                "The Barbados Drug Service standardises abbreviation usage in public facilities",
                "Prescriptions from polyclinics follow a standardised format",
                "Growing adoption of electronic prescriptions in private sector",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "m2-l3",
      title: "Reading & Interpreting Sig Codes",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Translating Prescriptions into Patient Instructions",
        },
        {
          type: "text",
          body: "The 'sig' (short for 'signa', Latin for 'write on the label') is the portion of a prescription that tells the patient how to take the medication. As a pharmacy technician, one of your most critical tasks is translating these abbreviated instructions into clear, patient-friendly language on the dispensing label.",
        },
        {
          type: "table",
          caption: "Sig Code Translation Practice",
          headers: ["Sig Code", "Translation"],
          rows: [
            ["1 tab PO BID AC", "Take one tablet by mouth twice daily before meals"],
            ["2 caps PO TID PC x 7/7", "Take two capsules by mouth three times daily after meals for 7 days"],
            ["10 mL PO Q8H PRN pain", "Take ten millilitres by mouth every 8 hours as needed for pain"],
            ["Apply TOP BID to affected area", "Apply to the skin twice daily on the affected area"],
            ["1 tab SL STAT, repeat x1 if no relief in 5 min", "Place one tablet under the tongue immediately; repeat once if no relief after 5 minutes"],
            ["2 puffs INH Q4-6H PRN SOB", "Inhale two puffs every 4 to 6 hours as needed for shortness of breath"],
            ["gtt ii OU QID x 5/7", "Instil two drops in both eyes four times daily for 5 days"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Patient-Friendly Language",
          body: "When writing labels and counselling patients, always use plain language. Instead of 'administer sublingually', write 'place under the tongue and let dissolve'. Instead of 'PRN', write 'when needed'. Remember that many patients have limited health literacy — your label may be the only instruction they follow.",
        },
        {
          type: "case-study",
          title: "Case Study: The Ambiguous Prescription",
          scenario:
            "A doctor writes a prescription for amoxicillin with the sig: '500 mg TDS x 7'. The handwriting is difficult to read and 'TDS' could be interpreted as 'TID' or even 'BDS' (twice daily). The patient is an elderly woman with a urinary tract infection.",
          questions: [
            "What should you do before dispensing this prescription?",
            "Who has the authority to clarify the prescription — you or the pharmacist?",
            "How would you document the clarification?",
          ],
          discussion:
            "Never guess when a prescription is ambiguous. The pharmacist should contact the prescriber to clarify the intended frequency. Document the clarification on the prescription with the prescriber's name, date, and time. In this case, amoxicillin 500 mg TDS (three times daily) for 7 days is a standard UTI regimen, but assumption is never acceptable in pharmacy practice. Every ambiguity must be resolved through direct communication with the prescriber.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m2-q1",
      question: "What does the medical root 'hepat/o' refer to?",
      options: ["Heart", "Kidney", "Liver", "Lung"],
      correctIndex: 2,
      explanation:
        "'Hepat/o' refers to the liver. Terms like 'hepatitis' (inflammation of the liver) and 'hepatotoxic' (toxic to the liver) use this root.",
    },
    {
      id: "m2-q2",
      question: "What does the prescription abbreviation 'PRN' mean?",
      options: [
        "Before meals",
        "As needed",
        "After meals",
        "Immediately",
      ],
      correctIndex: 1,
      explanation:
        "PRN stands for 'pro re nata' (Latin), meaning 'as needed' or 'as the situation arises'. It instructs the patient to take the medication only when symptoms require it, rather than on a fixed schedule.",
    },
    {
      id: "m2-q3",
      question:
        "Why is the abbreviation 'U' (for units) considered dangerous?",
      options: [
        "It is not a valid Latin abbreviation",
        "It can be misread as '0', '4', or 'cc', leading to a tenfold overdose",
        "It is not recognised in Caribbean pharmacy practice",
        "It is only used in veterinary medicine",
      ],
      correctIndex: 1,
      explanation:
        "The abbreviation 'U' for units has been involved in serious medication errors when misread as '0' (zero), '4', or 'cc'. For example, '6U' of insulin could be misread as '60' units — a potentially fatal tenfold overdose. Always write out 'units' in full.",
    },
    {
      id: "m2-q4",
      question:
        "Translate the sig code: '1 tab PO BID AC'",
      options: [
        "Take one tablet by mouth twice daily after meals",
        "Take one tablet by mouth twice daily before meals",
        "Take one tablet by mouth at bedtime before food",
        "Take one tablet by mouth every two days with food",
      ],
      correctIndex: 1,
      explanation:
        "PO = by mouth, BID = twice daily, AC = before meals (ante cibum). The full translation is: 'Take one tablet by mouth twice daily before meals.'",
    },
    {
      id: "m2-q5",
      question:
        "In Caribbean prescriptions, what does the notation 'x 7/7' typically mean?",
      options: [
        "Take 7 tablets in total",
        "For 7 days",
        "Seven times per week",
        "Every 7 hours",
      ],
      correctIndex: 1,
      explanation:
        "The notation 'x 7/7' (or '× 7/7') is a common British/Caribbean convention meaning 'for 7 days'. Similarly, '5/7' means 'for 5 days' and '14/7' means 'for 14 days' (or 2 weeks).",
    },
    {
      id: "m2-q6",
      question:
        "A prescription reads 'Losartan 50 mg'. Based on the drug name stem '-sartan', what class of medication is this?",
      options: [
        "Beta-blocker",
        "ACE inhibitor",
        "Angiotensin II receptor blocker (ARB)",
        "Calcium channel blocker",
      ],
      correctIndex: 2,
      explanation:
        "The stem '-sartan' identifies Angiotensin II Receptor Blockers (ARBs). Other ARBs include valsartan, irbesartan, and telmisartan. ARBs are commonly prescribed for hypertension and are often used when patients cannot tolerate ACE inhibitors ('-pril') due to cough.",
    },
    {
      id: "m2-q7",
      question:
        "You see a prescription for fluconazole. The '-azole' suffix tells you this medication is:",
      options: [
        "A proton pump inhibitor for acid reflux",
        "An antifungal medication",
        "A benzodiazepine for anxiety",
        "An antibiotic",
      ],
      correctIndex: 1,
      explanation:
        "The '-azole' stem identifies azole antifungal medications. Fluconazole, ketoconazole, clotrimazole, and miconazole are all antifungals. These are particularly high-volume in Caribbean pharmacies due to the tropical climate favouring fungal infections.",
    },
    {
      id: "m2-q8",
      question:
        "Which drug name stem should immediately trigger your controlled substance handling protocols?",
      options: [
        "'-prazole' (e.g., omeprazole)",
        "'-pril' (e.g., enalapril)",
        "'-pam' (e.g., diazepam)",
        "'-statin' (e.g., atorvastatin)",
      ],
      correctIndex: 2,
      explanation:
        "The '-pam' and '-lam' stems identify benzodiazepines (diazepam, lorazepam, clonazepam, alprazolam), which are controlled substances in ALL Caribbean jurisdictions. When you see these stems, special prescribing, dispensing, storage, and record-keeping requirements apply.",
    },
  ],
};

// ============================================================================
// MODULE 3 — Understanding Prescription Orders & Label Requirements
// ============================================================================

const module3: Module = {
  id: "m3-prescriptions",
  number: 3,
  title: "Understanding Prescription Orders & Label Requirements",
  description:
    "Learn to read, verify, and process prescription orders with confidence. This module covers the anatomy of a prescription, mandatory label elements, and the critical differences in prescription requirements across Caribbean islands.",
  learningObjectives: [
    "Identify all required elements of a valid prescription in Trinidad, Jamaica, and Barbados",
    "Verify prescription authenticity and check for completeness before dispensing",
    "Apply correct labelling standards as required by each island's pharmacy legislation",
    "Recognise common prescription errors and know when to refuse to dispense",
  ],
  lessons: [
    {
      id: "m3-l1",
      title: "Anatomy of a Prescription",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Parts of a Prescription",
        },
        {
          type: "text",
          body: "Every prescription, whether handwritten or electronic, contains a set of standard elements. Understanding each element is essential for accurate dispensing and for identifying incomplete or potentially fraudulent prescriptions. While the format may vary slightly between islands, the core components are consistent across the Caribbean.",
        },
        {
          type: "table",
          caption: "Elements of a Valid Prescription",
          headers: ["Element", "Description", "Example"],
          rows: [
            ["Prescriber information", "Name, qualifications, registration number, address, contact", "Dr. Sarah Maraj, MBBS, Reg. #4521, 45 Frederick Street, POS"],
            ["Date", "Date the prescription was written", "24/03/2026"],
            ["Patient information", "Full name, date of birth or age, address", "Maria Gonzalez, DOB: 15/08/1985, Chaguanas"],
            ["Superscription", "The symbol Rx (Latin 'recipe' meaning 'take')", "℞"],
            ["Inscription", "Medication name, strength, dosage form", "Amoxicillin 500 mg capsules"],
            ["Subscription", "Quantity to dispense", "#21 (or Mitte 21)"],
            ["Sig / Signa", "Directions for patient use", "1 cap PO TDS × 7/7"],
            ["Prescriber signature", "Handwritten signature (mandatory for controlled substances)", "Signed"],
            ["Refill information", "Number of refills permitted (where applicable)", "Refills: 0"],
          ],
        },
        {
          type: "image-placeholder",
          alt: "Annotated diagram of a sample Caribbean prescription showing all required elements",
          caption: "Figure 3.1 — Anatomy of a Caribbean prescription (annotated)",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Red Flags on Prescriptions",
          body: "Be alert for: prescriptions written in pencil (easily altered), missing prescriber registration numbers, patients requesting specific controlled substances by name and strength, prescriptions from prescribers you cannot verify, alterations or crossed-out information without the prescriber's counter-signature, and prescriptions presented significantly after the date written (especially for controlled substances).",
        },
      ],
    },
    {
      id: "m3-l2",
      title: "Label Requirements Across Caribbean Islands",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "What Must Appear on a Dispensing Label?",
        },
        {
          type: "text",
          body: "The dispensing label is the primary source of medication information for the patient after they leave the pharmacy. An incomplete or unclear label can lead to medication errors, missed doses, or dangerous misuse. Each Caribbean island has specific legal requirements for what must appear on a dispensing label.",
        },
        {
          type: "island-comparison",
          title: "Mandatory Label Elements by Island",
          description: "While there is significant overlap, each jurisdiction has specific requirements. Always follow the requirements of the island where you are practising.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Pharmacy name, address, and telephone number",
                "Prescription number",
                "Patient's full name",
                "Date of dispensing",
                "Name and strength of medication",
                "Quantity dispensed",
                "Directions for use in English",
                "Prescriber's name",
                "Expiry date of medication",
                "Storage instructions (especially important in tropical climate)",
                "'Keep out of reach of children' warning",
                "Any special warnings (e.g., 'May cause drowsiness')",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Name and address of the dispensing pharmacy",
                "Prescription serial number",
                "Patient's name",
                "Date of dispensing",
                "Name of medication (generic name required by policy in public facilities)",
                "Strength and dosage form",
                "Directions for use",
                "Name of prescribing doctor",
                "Quantity supplied",
                "'Keep out of reach of children' required on all labels",
                "National Health Fund (NHF) number if applicable for subsidised medications",
                "Auxiliary labels for high-alert medications",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Pharmacy name and address",
                "Patient's full name",
                "Date of dispensing",
                "Name of medication (Barbados National Drug Formulary name preferred)",
                "Strength and quantity",
                "Directions for use in clear, plain English",
                "Name of prescriber",
                "Barbados Drug Service lot/batch tracking number (public sector)",
                "'Keep out of reach of children' mandatory",
                "Storage temperature guidance",
                "Expiry date",
                "Auxiliary warning labels as appropriate",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Generic vs Brand Name Labelling",
          body: "Jamaica's National Health Fund (NHF) programme strongly encourages generic prescribing and labelling. In Barbados, the National Drug Formulary also favours generic names. In Trinidad, both generic and brand names may appear. When in doubt, include both the generic and brand name on the label to avoid patient confusion, especially if a patient has been switched from a brand to a generic equivalent.",
        },
        {
          type: "video-placeholder",
          title: "Label Printing Demo: Common Pharmacy Software",
          duration: "6 min",
          description: "Walkthrough of generating dispensing labels using common pharmacy management software used in Caribbean pharmacies, including configuration of mandatory fields and auxiliary warning labels.",
        },
      ],
    },
    {
      id: "m3-l3",
      title: "Prescription Verification & Common Errors",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Verification Process",
        },
        {
          type: "text",
          body: "Before any prescription is processed, it must be verified for completeness, legality, and clinical appropriateness. While the pharmacist bears ultimate responsibility for clinical verification, the pharmacy technician plays a crucial frontline role in catching errors early in the workflow.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Technician's Verification Checklist",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Is the prescription complete? (All required elements present)",
            "Is it legible? (If not, do NOT guess — ask the pharmacist to contact the prescriber)",
            "Is the prescription within its validity period? (Typically 3-6 months for regular Rx, shorter for controlled substances)",
            "Is the prescriber authorised? (Valid registration number, authorised to prescribe this medication)",
            "Does the medication, dose, and frequency appear reasonable for the patient? (Age, weight considerations)",
            "Are there obvious drug-drug interactions with other medications on file for this patient?",
            "Is the quantity prescribed reasonable for the duration of therapy?",
            "For controlled substances: Does the prescription meet all additional legal requirements?",
          ],
        },
        {
          type: "table",
          caption: "Prescription Validity Periods",
          headers: ["Prescription Type", "Trinidad & Tobago", "Jamaica", "Barbados"],
          rows: [
            ["Standard prescription", "6 months", "6 months", "6 months"],
            ["Controlled substance (Schedule II)", "Must be dispensed within 72 hours of issue", "Must be dispensed promptly; varies by substance", "Strict time limits apply; verify with pharmacist"],
            ["Repeat/refill prescriptions", "As specified by prescriber, up to 6 months", "As specified; not permitted for controlled substances", "As specified by prescriber"],
            ["Emergency supply", "72-hour supply at pharmacist's discretion", "Pharmacist may supply limited quantity in emergency", "Emergency provisions exist under the Pharmacy Act"],
          ],
        },
        {
          type: "case-study",
          title: "Case Study: The Expired Prescription",
          scenario:
            "A patient presents a prescription for metformin 500 mg dated seven months ago. She explains that she's been busy and couldn't get to the pharmacy sooner. She says she's running low on her diabetes medication and really needs the refill.",
          questions: [
            "Can you dispense this prescription as written?",
            "What options does the pharmacy have to help this patient?",
            "What are the risks of dispensing against an expired prescription?",
          ],
          discussion:
            "A prescription older than 6 months is generally considered expired in all three jurisdictions. You cannot dispense it. However, the pharmacist can: (1) contact the prescriber for a new prescription, (2) in some jurisdictions provide an emergency supply of a small quantity to prevent treatment interruption while a new prescription is obtained. The patient should be counselled on the importance of timely prescription filling, especially for chronic disease management. Never dispense against an expired prescription — it is a legal and safety issue.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m3-q1",
      question: "What does the symbol '℞' (Rx) at the top of a prescription mean?",
      options: [
        "Restricted medication",
        "Recipe — an instruction to the pharmacist to 'take' or prepare",
        "Registered prescription",
        "Refillable",
      ],
      correctIndex: 1,
      explanation:
        "℞ comes from the Latin 'recipe' meaning 'take thou'. It is an instruction from the prescriber to the pharmacist to prepare and dispense the medication that follows.",
    },
    {
      id: "m3-q2",
      question:
        "Which island specifically requires the National Health Fund (NHF) number on dispensing labels for subsidised medications?",
      options: ["Trinidad & Tobago", "Barbados", "Jamaica", "All three islands"],
      correctIndex: 2,
      explanation:
        "Jamaica's National Health Fund (NHF) provides subsidies for essential medications to qualifying patients. The NHF number must appear on labels for medications dispensed under this programme to facilitate reimbursement and tracking.",
    },
    {
      id: "m3-q3",
      question:
        "A patient presents a prescription for a Schedule II controlled substance that was written 5 days ago. In Trinidad & Tobago, what is the likely issue?",
      options: [
        "Nothing — it is within the standard 6-month validity period",
        "The prescription has exceeded the 72-hour dispensing window for Schedule II substances",
        "Schedule II substances can only be dispensed on the same day",
        "The prescription is only valid if the patient shows ID",
      ],
      correctIndex: 1,
      explanation:
        "In Trinidad & Tobago, controlled substance prescriptions (particularly Schedule II) must typically be dispensed within 72 hours of issue. A prescription presented 5 days later has exceeded this window and should not be dispensed without contacting the prescriber.",
    },
    {
      id: "m3-q4",
      question:
        "You receive a prescription that is partially illegible. What should you do?",
      options: [
        "Use your best judgement based on the letters you can read",
        "Ask the patient what medication they usually take",
        "Never guess — refer to the pharmacist who should contact the prescriber for clarification",
        "Dispense the most common medication that matches the visible letters",
      ],
      correctIndex: 2,
      explanation:
        "NEVER guess when reading a prescription. Misinterpreting a medication name, dose, or frequency can cause serious harm or death. The pharmacist should contact the prescriber directly to clarify any illegible or ambiguous elements before dispensing.",
    },
    {
      id: "m3-q5",
      question:
        "Which statement about labelling requirements across the Caribbean is TRUE?",
      options: [
        "All three islands require identical label elements",
        "Only Jamaica requires 'Keep out of reach of children' on labels",
        "All three islands require the pharmacy name, patient name, medication name, directions, and prescriber name on labels",
        "Barbados does not require expiry dates on labels",
      ],
      correctIndex: 2,
      explanation:
        "While each island has some unique requirements, all three share core mandatory label elements: pharmacy identification, patient name, medication name and strength, directions for use, and prescriber's name. Additional requirements vary by jurisdiction.",
    },
  ],
};

// ============================================================================
// MODULE 4 — Caribbean Pharmacy Law: Licensing, Scope of Practice & Regulations
// ============================================================================

const module4: Module = {
  id: "m4-pharmacy-law",
  number: 4,
  title: "Caribbean Pharmacy Law: Licensing, Scope of Practice & Regulations",
  description:
    "Navigate the legal frameworks governing pharmacy practice in Trinidad & Tobago, Jamaica, and Barbados. This module provides a detailed comparative analysis of pharmacy legislation, drug scheduling, and controlled substance regulations across the three jurisdictions.",
  learningObjectives: [
    "Identify the primary pharmacy legislation and regulatory bodies in Trinidad, Jamaica, and Barbados",
    "Compare drug scheduling systems and explain how classifications differ between islands",
    "Apply controlled substance handling requirements specific to each jurisdiction",
    "Explain the legal consequences of practising outside the scope of your role",
  ],
  lessons: [
    {
      id: "m4-l1",
      title: "Overview of Caribbean Pharmacy Legislation",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Legal Foundation of Pharmacy Practice",
        },
        {
          type: "text",
          body: "Every Caribbean island nation has its own pharmacy legislation — there is no single 'Caribbean pharmacy law'. This is one of the most important facts for any pharmacy technician to understand. If you train on one island and move to another, you must learn the new island's laws before you can practise. Ignorance of the law is never a defence.",
        },
        {
          type: "text",
          body: "Caribbean pharmacy legislation generally derives from the British colonial legal tradition and covers four main areas: (1) who may practise pharmacy, (2) what they may do, (3) how medications are classified and controlled, and (4) how the profession is governed and disciplined.",
        },
        {
          type: "table",
          caption: "Primary Pharmacy Legislation by Island",
          headers: ["Island", "Key Legislation", "Regulatory Body"],
          rows: [
            [
              "Trinidad & Tobago",
              "Pharmacy Board Act (Ch. 29:52), Food and Drugs Act (Ch. 30:01), Dangerous Drugs Act (Ch. 11:25), Pesticides and Toxic Chemicals Act",
              "Pharmacy Board of Trinidad and Tobago",
            ],
            [
              "Jamaica",
              "Pharmacy Act (1975, amended), Food and Drugs Act, Dangerous Drugs Act (1948, amended 2015), National Health Fund Act",
              "Pharmacy Council of Jamaica",
            ],
            [
              "Barbados",
              "Pharmacy Act (Cap. 372D), Drug Abuse (Prevention and Control) Act (Cap. 131), Drug Service Act, Barbados National Formulary",
              "Pharmacy Council of Barbados / Drug Service Division",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Colonial Legacy, Modern Reality",
          body: "Many Caribbean pharmacy laws were originally modelled on British legislation (particularly the UK Pharmacy Act and Misuse of Drugs Act). Over the decades, each island has amended and adapted these laws to reflect local realities. Understanding this colonial heritage helps explain both the similarities and differences between island legal frameworks.",
        },
      ],
    },
    {
      id: "m4-l2",
      title: "Trinidad & Tobago: Pharmacy Law in Detail",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Pharmacy Practice Law in Trinidad & Tobago",
        },
        {
          type: "text",
          body: "Trinidad and Tobago's pharmacy practice is governed primarily by the Pharmacy Board Act (Chapter 29:52) of the Laws of Trinidad and Tobago. The Pharmacy Board is the statutory body responsible for regulating the profession, maintaining the register of pharmacists, and setting standards for pharmacy practice across both islands of the twin-island republic.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Pharmacy Board Act (Ch. 29:52)",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Establishes the Pharmacy Board of Trinidad and Tobago as the regulatory authority",
            "Defines who may be registered as a pharmacist and the qualifications required",
            "Prohibits unregistered persons from practising pharmacy or holding themselves out as pharmacists",
            "Sets standards for pharmacy premises (licensing of physical pharmacy locations)",
            "Empowers the Board to conduct inspections, investigate complaints, and discipline registrants",
            "Prescribes penalties for offences including fines and imprisonment",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "The Dangerous Drugs Act (Ch. 11:25)",
        },
        {
          type: "text",
          body: "This Act governs the import, export, manufacture, supply, and possession of dangerous drugs (controlled substances) in Trinidad and Tobago. It implements Trinidad's obligations under the UN Single Convention on Narcotic Drugs (1961) and the Convention on Psychotropic Substances (1971).",
        },
        {
          type: "table",
          caption: "Drug Classification in Trinidad & Tobago",
          headers: ["Category", "Description", "Examples"],
          rows: [
            ["Prescription-Only Medicines (POM)", "Require a valid prescription from an authorised prescriber", "Antibiotics, antihypertensives, antidiabetics"],
            ["Pharmacy-Only Medicines (P)", "Can be sold without a prescription but only from a pharmacy under a pharmacist's supervision", "Some cough preparations, mild pain relievers not available in general retail"],
            ["General Sale List (GSL)", "May be sold in retail outlets without pharmacy supervision", "Simple antacids, basic first aid items, some vitamins"],
            ["Controlled Drugs / Dangerous Drugs", "Subject to strict prescribing, dispensing, storage, and record-keeping requirements", "Morphine, pethidine, codeine (pure), diazepam, cannabis"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Codeine in Trinidad & Tobago",
          body: "Compound preparations containing codeine in low concentrations (e.g., certain cough syrups) may be available as Pharmacy-Only medicines in Trinidad. However, pure codeine and higher-concentration preparations are controlled under the Dangerous Drugs Act. This differs significantly from Jamaica where all codeine products are more tightly restricted. Always verify the current scheduling — it changes with government gazetting.",
        },
      ],
    },
    {
      id: "m4-l3",
      title: "Jamaica: Pharmacy Law in Detail",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Pharmacy Practice Law in Jamaica",
        },
        {
          type: "text",
          body: "Jamaica's pharmacy practice is governed by the Pharmacy Act (1975, with subsequent amendments) and overseen by the Pharmacy Council of Jamaica. Jamaica has one of the more developed pharmacy regulatory systems in the English-speaking Caribbean, with clear distinctions in drug scheduling and a growing emphasis on formal pharmacy technician training.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Pharmacy Council of Jamaica",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Statutory body responsible for regulating pharmacy practice in Jamaica",
            "Maintains the register of pharmacists",
            "Approves pharmacy training programmes and sets educational standards",
            "Conducts inspections of pharmacy premises",
            "Investigates complaints and takes disciplinary action against registrants",
            "Advises the Minister of Health on pharmacy-related policy matters",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Jamaica's Dangerous Drugs Act & Cannabis",
        },
        {
          type: "text",
          body: "Jamaica's Dangerous Drugs Act (1948, amended) governs controlled substances. A landmark amendment in 2015 (the Dangerous Drugs Amendment Act) decriminalised the possession of small quantities of cannabis (up to 2 ounces) for personal use and created a legal framework for medical marijuana. This has significant implications for pharmacy practice.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Cannabis in Jamaica — What Pharmacy Technicians Need to Know",
          body: "The 2015 amendments decriminalised small possession and legalised medical marijuana with a doctor's recommendation. However, cannabis is NOT available through regular pharmacies — it is dispensed through licensed herb houses and dispensaries regulated by the Cannabis Licensing Authority (CLA). As a pharmacy technician, you should be aware that patients may be using cannabis alongside their prescribed medications, which creates potential drug interaction concerns. Always ask about cannabis use when screening for drug interactions.",
        },
        {
          type: "heading",
          level: 3,
          text: "Jamaica National Health Fund (NHF)",
        },
        {
          type: "text",
          body: "The National Health Fund is Jamaica's government programme providing subsidies for essential medications to qualifying individuals. Under the NHF, registered pharmacies can dispense subsidised medications for chronic diseases including diabetes, hypertension, arthritis, asthma, and mental health conditions. Understanding NHF procedures is essential for any pharmacy technician working in Jamaica.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "NHF covers medications for 15 specified chronic conditions",
            "Patients must be registered NHF beneficiaries with a valid NHF card",
            "Pharmacies submit claims electronically for reimbursement",
            "Generic prescribing is strongly encouraged under NHF",
            "The NHF formulary determines which medications are subsidised and at what level",
          ],
        },
      ],
    },
    {
      id: "m4-l4",
      title: "Barbados: Pharmacy Law in Detail",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Pharmacy Practice Law in Barbados",
        },
        {
          type: "text",
          body: "Barbados has a well-structured pharmaceutical regulatory system built around the Pharmacy Act (Cap. 372D), the Drug Service Act, and the Drug Abuse (Prevention and Control) Act. The Barbados Drug Service plays a central role in managing medication supply throughout the public healthcare system, which includes the Queen Elizabeth Hospital and a network of polyclinics across the island.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Barbados Drug Service",
        },
        {
          type: "text",
          body: "The Drug Service Division, operating under the Ministry of Health and Wellness, is responsible for the procurement, storage, and distribution of pharmaceuticals for the public health system. It manages the Barbados National Drug Formulary — a list of medications approved for use in the public sector that guides prescribing and dispensing decisions across all government health facilities.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Centrally procures medications for all public health facilities",
            "Maintains and updates the Barbados National Drug Formulary",
            "Operates the central pharmaceutical warehouse",
            "Distributes medications to Queen Elizabeth Hospital and all polyclinics",
            "Monitors medication usage, wastage, and expiry across the public system",
            "Conducts quality assurance on pharmaceutical products entering Barbados",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Barbados Polyclinic System",
        },
        {
          type: "text",
          body: "Barbados operates a network of polyclinics providing primary healthcare services, including pharmacy services, to the population. Each polyclinic has a pharmacy that dispenses medications to patients at no cost for conditions treated within the public system. This decentralised model makes pharmacy technicians essential to the public health infrastructure.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Data Protection in Barbados",
          body: "Barbados enacted the Data Protection Act in 2019, which has direct implications for pharmacy practice. Patient health information, including medication records, is classified as sensitive personal data and must be handled with enhanced protections. Pharmacy technicians must understand their obligations under this Act, which is covered in detail in Module 5 (Ethics & Confidentiality).",
        },
      ],
    },
    {
      id: "m4-l5",
      title: "Comparative Analysis: Drug Scheduling Across Islands",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "One Drug, Three Islands, Different Rules",
        },
        {
          type: "text",
          body: "This is arguably the most critical lesson in this course. The same medication can have completely different legal classifications depending on which Caribbean island you are on. A drug that is available over the counter in one jurisdiction may require a prescription — or be entirely restricted — in another. As a pharmacy technician, you must NEVER assume that the rules you learned on one island apply on another.",
        },
        {
          type: "island-comparison",
          title: "Codeine-Containing Products",
          description: "One of the most significant regulatory differences in the Caribbean.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Low-dose codeine compounds (e.g., codeine phosphate 8mg combined with paracetamol) — Pharmacy Only, available without prescription from a pharmacist",
                "Higher-dose codeine preparations and pure codeine — Controlled/Dangerous Drug, strict prescription requirements",
                "Codeine cough linctus (low concentration) — may be available as Pharmacy Only depending on formulation",
                "Record-keeping required for all codeine sales even when not prescription-only",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "ALL codeine products — Prescription Only",
                "Jamaica takes a stricter approach to codeine scheduling due to abuse concerns",
                "No codeine-containing product may be sold without a valid prescription",
                "Controlled drug record-keeping requirements apply to all codeine dispensing",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Low-dose combination products — may be available as Pharmacy Only (pharmacist's discretion)",
                "Higher concentrations — Prescription Only",
                "The Drug Abuse (Prevention and Control) Act governs controlled substance scheduling",
                "Pharmacist must assess patient and exercise professional judgement for Pharmacy Only sales",
              ],
            },
          ],
        },
        {
          type: "island-comparison",
          title: "Emergency Contraception (Levonorgestrel)",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Available as Pharmacy Only — sold by pharmacist without prescription",
                "Pharmacist may provide counselling but cannot refuse on personal grounds in most circumstances",
                "No age restriction on purchase",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Available Over the Counter in pharmacies",
                "Jamaica was one of the first Caribbean nations to deregulate emergency contraception",
                "Public health campaigns have promoted awareness and accessibility",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Available without prescription from pharmacies",
                "Pharmacist counselling may be offered but is not a barrier to sale",
                "Considered an important public health measure",
              ],
            },
          ],
        },
        {
          type: "island-comparison",
          title: "Pseudoephedrine",
          description: "A decongestant with potential for diversion to illicit methamphetamine manufacture.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Restricted — purchase records required",
                "Pharmacist must log buyer information",
                "Limits on quantity per transaction",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Pharmacy Only — must be sold from a pharmacy",
                "Government monitoring for diversion potential",
                "May require ID for purchase",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Behind the counter — available without prescription but only from pharmacy",
                "Pharmacist discretion on quantity",
                "Increasing scrutiny due to regional diversion concerns",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "The Golden Rule",
          body: "WHEN IN DOUBT — CHECK. Drug classifications change through government gazetting, and what was true last year may not be true today. Always verify the current scheduling status of any medication you are uncertain about. Consult the most recent government gazette, your pharmacist supervisor, or the relevant national pharmacy board. Dispensing a controlled substance without proper authorisation is a criminal offence in all three jurisdictions.",
        },
        {
          type: "video-placeholder",
          title: "Interactive: Drug Classification Comparison Tool",
          duration: "10 min",
          description: "Use the PIXOPHARM Island Regulatory Navigator to practice looking up drug classifications across Trinidad, Jamaica, and Barbados. This interactive exercise reinforces the critical skill of checking — not assuming — before dispensing.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m4-q1",
      question:
        "Which Act governs controlled substances (dangerous drugs) in Trinidad & Tobago?",
      options: [
        "The Pharmacy Board Act (Ch. 29:52)",
        "The Dangerous Drugs Act (Ch. 11:25)",
        "The Food and Drugs Act (Ch. 30:01)",
        "The Controlled Substances Act",
      ],
      correctIndex: 1,
      explanation:
        "The Dangerous Drugs Act (Chapter 11:25) governs controlled substances in Trinidad & Tobago, implementing the country's obligations under UN drug conventions.",
    },
    {
      id: "m4-q2",
      question:
        "In Jamaica, can cannabis be dispensed from a regular community pharmacy?",
      options: [
        "Yes, since the 2015 amendment legalised it",
        "No — medical cannabis is dispensed through licensed herb houses/dispensaries, not regular pharmacies",
        "Yes, but only with a prescription from a specialist",
        "Only in pharmacies within hospitals",
      ],
      correctIndex: 1,
      explanation:
        "Despite decriminalisation, medical cannabis in Jamaica is dispensed through facilities licensed by the Cannabis Licensing Authority (CLA), not regular community pharmacies. However, pharmacy technicians should be aware of patients using cannabis alongside prescribed medications due to potential interactions.",
    },
    {
      id: "m4-q3",
      question:
        "A patient travelling from Trinidad visits a pharmacy in Jamaica and asks to buy a codeine-based cough syrup without a prescription, saying 'I can buy this at home without a script.' What is the correct response?",
      options: [
        "Sell it — if it's legal in Trinidad, it's fine",
        "Refuse and explain that ALL codeine products require a prescription in Jamaica, regardless of the rules in other Caribbean islands",
        "Sell a limited quantity as a courtesy to a fellow Caribbean citizen",
        "Ask the patient to provide a Trinidadian prescription",
      ],
      correctIndex: 1,
      explanation:
        "Jamaica classifies ALL codeine products as prescription-only. The rules of the island where you are physically dispensing apply — not the patient's home island. A Trinidadian prescription is also not valid in Jamaica. The patient would need a prescription from a Jamaica-registered prescriber.",
    },
    {
      id: "m4-q4",
      question: "What is the primary role of the Barbados Drug Service?",
      options: [
        "Prosecuting drug offences",
        "Registering pharmacists",
        "Central procurement, storage, and distribution of pharmaceuticals for the public health system",
        "Regulating private pharmacy pricing",
      ],
      correctIndex: 2,
      explanation:
        "The Barbados Drug Service centrally procures medications for the public health system, maintains the National Drug Formulary, operates the pharmaceutical warehouse, and distributes medications to Queen Elizabeth Hospital and polyclinics across the island.",
    },
    {
      id: "m4-q5",
      question:
        "What is the Jamaica National Health Fund (NHF)?",
      options: [
        "A private insurance company for pharmacists",
        "A government programme providing subsidies for essential medications for qualifying chronic disease patients",
        "A fund that pays for pharmacy technician training",
        "An international aid programme for Caribbean pharmaceuticals",
      ],
      correctIndex: 1,
      explanation:
        "The NHF is Jamaica's government programme that subsidises essential medications for qualifying patients with chronic conditions including diabetes, hypertension, arthritis, and asthma. Pharmacies claim reimbursement electronically, and generic prescribing is strongly encouraged under the programme.",
    },
  ],
};

// ============================================================================
// MODULE 5 — Ethics in Pharmacy: Confidentiality, Consent & Professional Conduct
// ============================================================================

const module5: Module = {
  id: "m5-ethics-confidentiality",
  number: 5,
  title: "Ethics in Pharmacy: Confidentiality, Consent & Professional Conduct",
  description:
    "Develop the ethical compass every pharmacy professional needs. This module explores patient confidentiality and data protection in depth, addresses the unique ethical challenges of practising in small island communities, and equips you with frameworks for navigating the moral complexities of Caribbean pharmacy practice.",
  learningObjectives: [
    "Apply the four principles of biomedical ethics (autonomy, beneficence, non-maleficence, justice) to pharmacy scenarios",
    "Explain patient confidentiality obligations under each island's data protection legislation",
    "Identify the limited exceptions where confidentiality may be legally breached",
    "Navigate ethical dilemmas unique to small island communities where everyone knows everyone",
    "Describe the process for reporting unethical behaviour and the whistleblower protections available",
  ],
  lessons: [
    {
      id: "m5-l1",
      title: "Ethical Foundations in Pharmacy Practice",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Why Ethics Matter in Pharmacy",
        },
        {
          type: "text",
          body: "Every day in pharmacy practice, you make decisions that affect people's health, privacy, and wellbeing. Ethics provides the framework for making these decisions correctly — not just legally, but morally. While the law sets the minimum standard of behaviour, professional ethics calls you to a higher standard. The difference between a competent pharmacy technician and an excellent one often comes down to ethical judgement.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Four Principles of Biomedical Ethics",
        },
        {
          type: "text",
          body: "The Beauchamp and Childress framework of four principles provides the foundation for healthcare ethics worldwide, including in pharmacy practice. Every ethical dilemma you encounter can be analysed through these four lenses.",
        },
        {
          type: "table",
          caption: "The Four Principles of Biomedical Ethics",
          headers: ["Principle", "Meaning", "Pharmacy Example"],
          rows: [
            [
              "Autonomy",
              "Respecting the patient's right to make their own informed decisions",
              "A patient has the right to refuse a medication or choose not to follow your advice. Your role is to inform, not coerce.",
            ],
            [
              "Beneficence",
              "Acting in the patient's best interest",
              "Recommending a more affordable generic equivalent when the patient cannot afford the brand medication, without compromising therapeutic efficacy.",
            ],
            [
              "Non-Maleficence",
              "Do no harm — avoiding actions that could hurt the patient",
              "Refusing to dispense a medication when you suspect a dangerous drug interaction, even if the patient insists they 'always take it together'.",
            ],
            [
              "Justice",
              "Treating all patients fairly and equitably",
              "Providing the same standard of care and attention to every patient regardless of their socioeconomic status, appearance, nationality, or personal lifestyle choices.",
            ],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "The FIP Code of Ethics",
        },
        {
          type: "text",
          body: "The International Pharmaceutical Federation (FIP) publishes a code of ethics that serves as a global benchmark. While each Caribbean island has its own professional standards, the FIP principles underpin them all. Key commitments include: placing the wellbeing of every patient above commercial interests, maintaining professional competence through lifelong learning, respecting patient privacy and confidentiality, acting with honesty and integrity, and cooperating with other healthcare professionals for optimal patient outcomes.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Ethical Litmus Test",
          body: "When facing an ethical dilemma, ask yourself: 'Would I be comfortable if my decision was published in tomorrow's newspaper? Would I be comfortable explaining this decision to the Pharmacy Board?' If the answer to either question is 'no', reconsider your course of action.",
        },
      ],
    },
    {
      id: "m5-l2",
      title: "Patient Confidentiality & Data Protection",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Sacred Duty of Confidentiality",
        },
        {
          type: "text",
          body: "Patient confidentiality is not merely a legal obligation — it is the foundation of the trust that makes healthcare possible. When a patient hands you a prescription, they are trusting you with intimate details of their health. They are trusting that you will not share their medical conditions, medications, or personal information with anyone who does not have a legitimate need to know. A single breach of this trust can destroy a patient's willingness to seek treatment, with potentially fatal consequences.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Confidentiality Is Not Optional",
          body: "Breaching patient confidentiality can result in: termination of employment, criminal prosecution under data protection laws, civil lawsuits for damages, removal from any professional register, and most importantly — real harm to the patient whose privacy you violated. In small Caribbean communities, a confidentiality breach can lead to social stigma, discrimination, damaged relationships, and patients avoiding necessary treatment.",
        },
        {
          type: "heading",
          level: 3,
          text: "What Information Is Confidential?",
        },
        {
          type: "text",
          body: "ALL patient information is confidential. This includes, but is not limited to:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "The patient's name and the fact that they visited the pharmacy at all",
            "Every medication they are prescribed or purchase",
            "Their medical conditions, diagnoses, and health history",
            "Their address, date of birth, and contact information",
            "Payment information and insurance/NHF details",
            "Anything the patient tells you verbally during counselling",
            "The prescriber's identity and the contents of the prescription",
            "Any notes in the patient's pharmacy file",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Types of Confidentiality Breaches",
        },
        {
          type: "table",
          caption: "How Confidentiality Is Breached in Practice",
          headers: ["Type", "Examples", "Prevention"],
          rows: [
            [
              "Verbal breaches",
              "Discussing a patient's medication within earshot of others, gossiping about patients with colleagues, calling out a patient's name and medication loudly at the pickup counter",
              "Lower your voice, use private counselling areas, never discuss patients outside the pharmacy",
            ],
            [
              "Visual breaches",
              "Leaving prescriptions visible on the counter, prescription bags with visible medication names, computer screens displaying patient records visible to the public",
              "Position screens away from public view, use privacy screens, handle prescriptions face-down",
            ],
            [
              "Electronic breaches",
              "Sharing patient records via unsecured email, leaving pharmacy systems logged in unattended, storing patient data on personal devices, sharing patient information on WhatsApp or social media",
              "Log out when stepping away, never use personal devices for patient data, use only approved communication channels",
            ],
            [
              "Physical breaches",
              "Improperly disposing of prescriptions or patient records (not shredded), leaving patient files accessible to unauthorised staff",
              "Shred all documents containing patient information, lock filing cabinets, restrict access to records",
            ],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Data Protection Legislation in the Caribbean",
        },
        {
          type: "island-comparison",
          title: "Data Protection Laws by Island",
          description: "Caribbean nations are increasingly adopting formal data protection legislation that directly impacts pharmacy practice.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Data Protection Act 2011 (proclaimed in stages) — one of the earliest in the Caribbean",
                "Classifies health information as 'sensitive personal data' requiring enhanced protections",
                "Data controllers (including pharmacies) must register with the Office of the Information Commissioner",
                "Patients have the right to access, correct, and request deletion of their personal data",
                "Penalties: fines up to TT$100,000 and/or imprisonment for serious breaches",
                "Pharmacies must have written data protection policies and train all staff",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Jamaica's Data Protection Act (2020) establishes a framework for personal data protection",
                "Healthcare data is classified as sensitive personal data",
                "Pharmacies handling patient records are considered data processors/controllers",
                "The Office of the Information Commissioner oversees compliance",
                "Patients must be informed of how their data will be used and stored",
                "Breach notification requirements apply — significant breaches must be reported",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Data Protection Act 2019 — comprehensive legislation aligned with international standards",
                "Pharmacies must implement appropriate technical and organisational measures to protect patient data",
                "Health data receives enhanced protection as a 'special category' of personal data",
                "Patients have rights of access, rectification, erasure, and data portability",
                "A Data Protection Commissioner oversees enforcement",
                "Pharmacies must conduct data protection impact assessments for new systems handling patient information",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "WhatsApp Warning",
          body: "In many Caribbean pharmacies, WhatsApp is informally used to communicate between staff, prescribers, and sometimes patients. This practice poses SERIOUS data protection risks. Patient information should NEVER be shared via WhatsApp or similar messaging platforms unless the system has been formally approved by the pharmacy's data protection policy and meets encryption and data residency requirements. A screenshot of a WhatsApp message containing patient information could be shared endlessly and constitutes a data breach.",
        },
      ],
    },
    {
      id: "m5-l3",
      title: "Informed Consent in the Caribbean Context",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Patient's Right to Know and Choose",
        },
        {
          type: "text",
          body: "Informed consent in pharmacy means that patients have the right to receive sufficient information about their medication to make an informed decision about whether to take it. This includes: what the medication is for, how to take it, common side effects, serious adverse effects to watch for, interactions with food or other medications, and what to do if they miss a dose.",
        },
        {
          type: "heading",
          level: 3,
          text: "Components of Informed Consent in Dispensing",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Disclosure: Provide all relevant information about the medication in language the patient can understand",
            "Comprehension: Ensure the patient actually understands the information — use teach-back method ('Can you tell me how you will take this medication?')",
            "Voluntariness: The patient must freely choose to take the medication — no coercion or undue pressure",
            "Competence: Assess whether the patient has the capacity to make healthcare decisions (age, mental capacity, language barriers)",
            "Documentation: Record that counselling was provided and the patient's acknowledgement",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Cultural Considerations in the Caribbean",
        },
        {
          type: "text",
          body: "Caribbean cultures often have strong communal ties where family members — particularly elders — play a significant role in healthcare decisions. A patient may defer to a family member or a traditional healer. While respecting cultural norms, the pharmacy professional must ensure that the patient themselves has given consent and understands their treatment.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Language Barriers",
          body: "In Trinidad, patients may speak English, Hindi, or Spanish. In Jamaica, patients may communicate primarily in Jamaican Patois/Creole. Informed consent requires that the patient UNDERSTANDS the information provided. If there is a language barrier, use plain language, visual aids, or seek assistance from a colleague who speaks the patient's language. Never assume comprehension — always use the teach-back method.",
        },
        {
          type: "case-study",
          title: "Case Study: The Family Decision",
          scenario:
            "An elderly patient is prescribed a new antihypertensive medication. Her adult son accompanies her and speaks on her behalf throughout the interaction. When you try to counsel the patient directly, the son says, 'Just tell me — I'll make sure she takes it properly.' The patient remains silent and appears deferential to her son.",
          questions: [
            "How do you balance respect for family dynamics with the patient's autonomy?",
            "What steps can you take to ensure the patient herself understands and consents to the medication?",
            "Are there any circumstances where counselling the family member instead of the patient is acceptable?",
          ],
          discussion:
            "While family involvement in healthcare is culturally important in the Caribbean, the patient must be directly addressed and must demonstrate understanding. Strategies include: speaking to the patient directly (making eye contact), using simple language, providing written instructions, and offering to speak with the patient privately. If the patient appears to lack capacity (dementia, for example), the family member's role becomes more central, but a pharmacist should be involved in assessing this situation.",
        },
      ],
    },
    {
      id: "m5-l4",
      title: "Ethical Dilemmas in Small Island Communities",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "When Everyone Knows Everyone",
        },
        {
          type: "text",
          body: "Practising pharmacy in a small Caribbean community presents ethical challenges that mainland practitioners rarely face. On an island where the pharmacy technician may attend the same church, lime at the same spots, and have children at the same school as their patients, the boundaries between professional and personal life become blurred. This section addresses the unique ethical tensions that arise when the pharmacy professional is also a neighbour, friend, or community member of their patients.",
        },
        {
          type: "heading",
          level: 3,
          text: "Common Ethical Dilemmas",
        },
        {
          type: "case-study",
          title: "Dilemma 1: The Neighbour's HIV Medication",
          scenario:
            "You are working at the pharmacy counter when your next-door neighbour comes in to collect their prescription. You process it and see that it includes antiretroviral medications for HIV. You had no idea your neighbour was HIV-positive. Later that evening, your spouse asks, 'I saw Ms. James at the pharmacy today — everything okay with her?'",
          questions: [
            "Can you tell your spouse what medication Ms. James was collecting?",
            "Can you tell your spouse that Ms. James was even at the pharmacy?",
            "How do you handle the ongoing social relationship knowing this confidential information?",
            "What if you are concerned that your neighbour's partner may be at risk?",
          ],
          discussion:
            "You cannot share ANY information — not the medication, not the condition, not even the fact that Ms. James was at the pharmacy. Your response to your spouse should be something like, 'I can't discuss anything about patients — you know that.' The ongoing challenge of carrying confidential knowledge about people in your social circle is one of the hardest aspects of Caribbean pharmacy practice. You must create a mental separation between your professional and personal roles. Regarding the partner at risk: there are limited exceptions to confidentiality for public health purposes, but this is a pharmacist-level decision that must follow established protocols. You should raise the concern with the supervising pharmacist.",
        },
        {
          type: "divider",
        },
        {
          type: "case-study",
          title: "Dilemma 2: The Teacher's Mental Health Medication",
          scenario:
            "Your child's school teacher comes in to fill a prescription for an antipsychotic medication. In your small community, mental health carries significant stigma. You know that if word got out, the teacher could face discrimination from parents, lose their job, or be socially ostracised. A few days later, another parent at the school mentions that they 'heard a rumour' about the teacher's health.",
          questions: [
            "How do you respond to the other parent's fishing for information?",
            "What additional protections might you put in place for this patient?",
            "If you observe the teacher exhibiting concerning behaviour at school, what are your obligations as a parent vs. as a pharmacy professional?",
          ],
          discussion:
            "You must firmly shut down any attempt to discuss the teacher's health information. A simple 'I don't discuss anyone's health matters' is sufficient. Additional protections might include: ensuring the medication is dispensed discreetly (opaque bags, no visible medication names), offering delivery services, or arranging pick-up at less busy times. As for school concerns — your observations as a parent are separate from your pharmacy knowledge. You can raise school-safety concerns through normal parent channels without referencing any pharmacy information.",
        },
        {
          type: "divider",
        },
        {
          type: "case-study",
          title: "Dilemma 3: The Pastor's Request",
          scenario:
            "A well-respected community pastor comes to the pharmacy and asks you to check whether a young woman from his congregation — who he is 'concerned about' — has been prescribed any 'certain medications'. He says he is asking out of 'pastoral care'. The young woman in question is an unmarried woman in her 20s, and you suspect the pastor is trying to determine if she has obtained contraceptives.",
          questions: [
            "Can you share any information about this patient with the pastor?",
            "How do you refuse firmly while maintaining a professional relationship?",
            "What does this scenario reveal about power dynamics and confidentiality in small communities?",
          ],
          discussion:
            "Absolutely not. No matter how respected the person making the request, no matter the reason given, you cannot confirm or deny whether anyone is a patient or share any information about their prescriptions. A professional response: 'Pastor, I'm sure you understand that I cannot share any patient information with anyone. That's the law and my professional duty.' This scenario highlights how social power dynamics — religious authority, community standing — can be used to pressure pharmacy staff into breaching confidentiality. The patient's reproductive choices are private, period.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Only Exceptions to Confidentiality",
          body: "Confidentiality may only be breached in very limited circumstances, and typically only by or with the approval of the supervising pharmacist: (1) When required by law — court order, statutory reporting of certain communicable diseases, child abuse reporting obligations. (2) When there is an imminent threat to the patient or others — e.g., a patient threatens self-harm. (3) When the patient gives explicit written consent to share information with a named person. (4) For purposes directly related to the patient's ongoing healthcare — e.g., sharing medication information with a hospital if the patient is admitted. Even in these cases, disclose only the minimum information necessary.",
        },
      ],
    },
    {
      id: "m5-l5",
      title: "Professional Standards, Whistleblowing & Accountability",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Upholding Professional Standards",
        },
        {
          type: "text",
          body: "As a pharmacy professional, you have a duty not only to practise ethically yourself but also to ensure that unethical or unsafe practices by others are addressed. This includes reporting errors, raising concerns about colleagues' conduct, and refusing to participate in practices that compromise patient safety — even when there is pressure to comply.",
        },
        {
          type: "heading",
          level: 3,
          text: "When You Witness Unethical or Unsafe Behaviour",
        },
        {
          type: "text",
          body: "What should you do if you observe a colleague, supervisor, or pharmacist engaging in behaviour that puts patients at risk? This is one of the most difficult situations a pharmacy technician can face, especially in a small island setting where reporting a colleague can have social and professional consequences.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Document what you observed: date, time, what happened, who was involved (keep this factual, not speculative)",
            "Report to the supervising pharmacist first (unless the pharmacist is the one acting unethically)",
            "If the pharmacist is the problem or fails to act, escalate to the pharmacy owner or chain management",
            "If internal reporting fails, report to the relevant Pharmacy Board or Council (see contacts below)",
            "In cases of immediate danger to patients, you may need to intervene directly (e.g., stopping a clearly dangerous medication from being dispensed)",
          ],
        },
        {
          type: "table",
          caption: "Reporting Channels for Ethical Concerns",
          headers: ["Island", "Regulatory Body", "What They Investigate"],
          rows: [
            [
              "Trinidad & Tobago",
              "Pharmacy Board of Trinidad and Tobago",
              "Unregistered practice, professional misconduct, unsafe pharmacy conditions, complaints against pharmacists or pharmacy premises",
            ],
            [
              "Jamaica",
              "Pharmacy Council of Jamaica",
              "Professional misconduct, competence concerns, breaches of the Pharmacy Act, complaints about pharmacy services",
            ],
            [
              "Barbados",
              "Pharmacy Council of Barbados / Ministry of Health",
              "Professional conduct issues, unsafe practices, breaches of the Pharmacy Act or Drug Service regulations",
            ],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Conflicts of Interest",
        },
        {
          type: "text",
          body: "A conflict of interest arises when your personal interests, financial interests, or relationships could influence your professional judgement. In Caribbean pharmacy practice, common conflicts include:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Recommending a more expensive brand because the pharmacy earns a higher margin, when a generic is equally effective",
            "Dispensing medications to family members without proper prescription oversight",
            "Accepting gifts or incentives from pharmaceutical company representatives in exchange for promoting their products",
            "Using your position to access medications for personal use or for friends/family without a prescription",
            "Failing to report a dispensing error because it was made by a friend or family member who works at the pharmacy",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Refusing to Dispense on Ethical Grounds",
          body: "In rare cases, a pharmacy professional may have a conscientious objection to dispensing a particular medication (e.g., emergency contraception due to religious beliefs). In most Caribbean jurisdictions, while you may raise your objection, you must ensure the patient can obtain the medication through an alternative route — either from another staff member or another pharmacy. You cannot simply refuse and leave the patient without access. The patient's right to their legally prescribed medication takes precedence over your personal beliefs.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Commitment to Lifelong Ethical Practice",
        },
        {
          type: "text",
          body: "Ethics is not a module you complete and forget. It is a lifelong commitment that must be practised daily. The best pharmacy professionals regularly reflect on their decisions, seek guidance when uncertain, participate in ethics continuing education, and create a culture where ethical practice is the norm — not the exception. In the Caribbean context, where pharmacy professionals are deeply embedded in their communities, this commitment is especially important and especially challenging.",
        },
        {
          type: "video-placeholder",
          title: "Panel Discussion: Ethics in Caribbean Pharmacy Practice",
          duration: "15 min",
          description: "Senior pharmacists from Trinidad, Jamaica, and Barbados discuss real ethical challenges they have faced in their careers, how they resolved them, and advice for new pharmacy technicians entering the profession.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m5-q1",
      question:
        "Which ethical principle is being applied when a pharmacist refuses to dispense a medication due to a dangerous drug interaction, even though the patient insists?",
      options: [
        "Autonomy — respecting the patient's choice",
        "Justice — treating the patient fairly",
        "Non-maleficence — the duty to do no harm",
        "Beneficence — acting in the patient's interest",
      ],
      correctIndex: 2,
      explanation:
        "Non-maleficence (do no harm) is the principle at work. While respecting patient autonomy is important, the duty to prevent harm takes precedence when there is a clear danger. The pharmacist has a professional obligation to prevent a medication error that could injure the patient.",
    },
    {
      id: "m5-q2",
      question:
        "Your neighbour asks you at a weekend barbecue whether their friend (who you recognise as a patient) is 'doing okay' health-wise. They know you work at the pharmacy. What should you do?",
      options: [
        "Share general information but not specific medications",
        "Confirm the person is a patient but say nothing about their medications",
        "Refuse to confirm or deny anything about any individual's health or pharmacy visits",
        "Tell them to ask the person directly, then share what you know to be helpful",
      ],
      correctIndex: 2,
      explanation:
        "You cannot confirm or deny whether someone is a patient, let alone share any health information. Even acknowledging that someone visited the pharmacy is a breach of confidentiality. The appropriate response is: 'I can't discuss anything about anyone's health — that's my professional duty.'",
    },
    {
      id: "m5-q3",
      question:
        "Which Caribbean island enacted a Data Protection Act in 2019 that classifies health information as a 'special category' of personal data?",
      options: [
        "Jamaica",
        "Trinidad & Tobago",
        "Barbados",
        "Guyana",
      ],
      correctIndex: 2,
      explanation:
        "Barbados enacted its Data Protection Act in 2019, which classifies health data as a special category requiring enhanced protections. Trinidad & Tobago's Data Protection Act was enacted in 2011, and Jamaica's in 2020.",
    },
    {
      id: "m5-q4",
      question:
        "A community pastor asks you to check whether a young woman from his congregation has been prescribed contraceptives. He says it is for 'pastoral care'. What should you do?",
      options: [
        "Check the records and share the information — he is a trusted community leader",
        "Tell him you cannot check records but suggest he ask her directly",
        "Refuse absolutely — you cannot confirm or deny whether anyone is a patient or share any prescription information with a third party without patient consent",
        "Ask the young woman for permission first, then share if she agrees",
      ],
      correctIndex: 2,
      explanation:
        "No matter who asks or what reason they give, you cannot share patient information without explicit written consent from the patient. Community standing, religious authority, or claimed concern does not override patient confidentiality. The correct response firmly declines while remaining professional.",
    },
    {
      id: "m5-q5",
      question:
        "Under what circumstances can patient confidentiality be legally breached?",
      options: [
        "When a family member asks on behalf of the patient",
        "When the information would be helpful to the community",
        "Only when required by law (court order, mandatory disease reporting), when there is imminent threat, or with the patient's explicit consent",
        "Whenever the pharmacist deems it appropriate",
      ],
      correctIndex: 2,
      explanation:
        "Confidentiality can only be breached in very limited circumstances: when required by law (court orders, statutory reporting of communicable diseases, child abuse reporting), when there is an imminent threat to the patient or others, or with the patient's explicit written consent. Even then, only the minimum necessary information should be disclosed.",
    },
  ],
};

// ============================================================================
// MODULE 6 — Pharmacy Workflow: From Receiving to Dispensing
// ============================================================================

const module6: Module = {
  id: "m6-workflow",
  number: 6,
  title: "Pharmacy Workflow: From Receiving to Dispensing",
  description:
    "Master the step-by-step process of turning a prescription into a safely dispensed medication. This module covers every stage of the dispensing workflow, from receiving the prescription through verification, preparation, labelling, checking, and patient handoff.",
  learningObjectives: [
    "Execute each step of the standard pharmacy dispensing workflow in the correct sequence",
    "Apply the '5 Rights' of medication dispensing consistently",
    "Perform accuracy checks at each stage of the process",
    "Hand off dispensed medication to patients with appropriate counselling points",
  ],
  lessons: [
    {
      id: "m6-l1",
      title: "The Standard Dispensing Workflow",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "From Prescription to Patient: A Step-by-Step Process",
        },
        {
          type: "text",
          body: "The dispensing workflow is the backbone of pharmacy practice. Every prescription that enters the pharmacy follows a structured sequence of steps designed to ensure safety and accuracy. Skipping steps, rushing, or taking shortcuts is how medication errors happen. In a well-run Caribbean pharmacy, this workflow is followed consistently for every single prescription — whether it is the first of the day or the five-hundredth.",
        },
        {
          type: "heading",
          level: 3,
          text: "The 5 Rights of Medication Dispensing",
        },
        {
          type: "text",
          body: "Before any medication leaves the pharmacy, verify these five critical elements. They are your final safety net.",
        },
        {
          type: "table",
          caption: "The 5 Rights",
          headers: ["Right", "Question to Ask"],
          rows: [
            ["Right Patient", "Is this medication for the correct patient? (Verify name, date of birth)"],
            ["Right Drug", "Is this the correct medication? (Verify generic/brand name, check for look-alike/sound-alike)"],
            ["Right Dose", "Is the dose correct for this patient? (Check strength, quantity, frequency)"],
            ["Right Route", "Is this the correct route of administration? (Oral, topical, injection, inhaled)"],
            ["Right Time", "Are the timing instructions clear and correct? (Frequency, duration, meal-related timing)"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "The 10-Step Dispensing Workflow",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "RECEIVE: Accept the prescription, greet the patient, check if it's new or a refill",
            "VERIFY: Check prescription for completeness, legality, and validity (refer to Module 3)",
            "ENTER: Input prescription data into the pharmacy management system; check patient profile for allergies and drug interactions",
            "CLINICAL CHECK: Pharmacist reviews for clinical appropriateness (dose, interactions, contraindications)",
            "PREPARE: Select the correct medication from the shelf; check the label THREE times (when removing from shelf, when counting/measuring, when returning to shelf)",
            "COUNT/MEASURE: Accurately count tablets or measure liquid; use a counting tray and spatula for tablets",
            "LABEL: Generate and affix the dispensing label with all required information per your island's regulations",
            "FINAL CHECK: Pharmacist performs final verification — compares original prescription against prepared medication and label",
            "DISPENSE: Package medication appropriately; add auxiliary warning labels; include patient information leaflets",
            "COUNSEL: Hand medication to patient with key counselling points; use teach-back to confirm understanding",
          ],
        },
        {
          type: "image-placeholder",
          alt: "Flowchart showing the 10-step dispensing workflow with decision points",
          caption: "Figure 6.1 — The 10-Step Dispensing Workflow",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Triple Check",
          body: "When selecting medication from the shelf, check the label THREE separate times: (1) When picking up the bottle/box. (2) When counting or measuring the medication. (3) When returning the stock bottle to the shelf. This simple habit prevents the majority of 'wrong drug' dispensing errors.",
        },
      ],
    },
    {
      id: "m6-l2",
      title: "Medication Selection & Accuracy Checks",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Choosing the Right Medication Every Time",
        },
        {
          type: "text",
          body: "Look-Alike, Sound-Alike (LASA) medications are one of the leading causes of dispensing errors worldwide. Medications with similar names or similar packaging can be easily confused, especially during busy periods. Caribbean pharmacies face an additional challenge: the same generic medication may be sourced from multiple international manufacturers with different packaging, colours, and tablet appearances.",
        },
        {
          type: "table",
          caption: "Common LASA Medication Pairs in Caribbean Pharmacy",
          headers: ["Drug 1", "Drug 2", "Risk"],
          rows: [
            ["Metformin (diabetes)", "Metoprolol (blood pressure)", "Similar 'Met-' prefix — both commonly dispensed"],
            ["Losartan (blood pressure)", "Lisinopril (blood pressure)", "Both are common antihypertensives starting with 'L'"],
            ["Prednisolone (steroid)", "Prednisone (steroid)", "Nearly identical names, different pharmacokinetics"],
            ["Hydroxyzine (antihistamine)", "Hydralazine (blood pressure)", "Similar 'Hydr-' prefix"],
            ["Chlorpromazine (antipsychotic)", "Chlorpropamide (diabetes)", "Nearly identical first 10 letters"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Tall Man Lettering",
          body: "Tall Man Lettering uses uppercase letters to highlight the differences between look-alike drug names: metFORMIN vs metOPROLOL, predniSONE vs prednisoLONE, hydrOXYzine vs hydrALAZINE. Many Caribbean pharmacies are now adopting this system on shelf labels and computer systems. Learn to recognise and use it.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Counting and Measuring Process",
        },
        {
          type: "text",
          body: "Accurate counting and measuring is a core technical skill for pharmacy technicians. Use a clean counting tray and spatula for tablets and capsules. For liquids, use appropriate graduated measures. Never estimate, rush, or pour 'by eye'. In Caribbean pharmacies where air conditioning may be inconsistent, be aware that humidity can cause tablets to stick together or become difficult to count.",
        },
      ],
    },
    {
      id: "m6-l3",
      title: "Patient Counselling & Handoff",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Final — and Most Important — Step",
        },
        {
          type: "text",
          body: "The patient counselling and handoff is where pharmacy practice becomes truly patient-centred. This is your opportunity to ensure the patient understands their medication and will use it safely and effectively. While detailed clinical counselling is the pharmacist's role, pharmacy technicians play a vital role in reinforcing key messages and ensuring the patient leaves with their questions answered.",
        },
        {
          type: "heading",
          level: 3,
          text: "Key Counselling Points for Every Prescription",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "What the medication is for (in plain language — 'This is for your blood pressure')",
            "How to take it (with food? Before bed? With a full glass of water?)",
            "How often and for how long ('Twice a day for 7 days — finish the whole course')",
            "Common side effects to expect ('You might feel drowsy at first')",
            "What to avoid ('Don't drink alcohol while taking this')",
            "Storage instructions ('Keep this in the fridge' — critical in Caribbean climate)",
            "What to do if a dose is missed ('Take it as soon as you remember, unless it's almost time for the next dose')",
            "When to seek medical attention ('If you develop a rash or difficulty breathing, go to A&E immediately')",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Teach-Back Method",
          body: "After counselling, ask the patient: 'Just to make sure I explained it clearly, can you tell me how you're going to take this medication?' This technique — called teach-back — verifies comprehension without making the patient feel tested. If they cannot accurately describe how to take the medication, re-explain using simpler language.",
        },
        {
          type: "video-placeholder",
          title: "Role Play: Dispensing Counselling",
          duration: "12 min",
          description: "Watch and practise a complete dispensing counselling scenario: a pharmacy technician hands off a new antihypertensive medication to an elderly patient, demonstrating clear communication, teach-back, and sensitivity to health literacy.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m6-q1",
      question: "What are the '5 Rights' of medication dispensing?",
      options: [
        "Right price, Right pharmacist, Right time, Right drug, Right quantity",
        "Right patient, Right drug, Right dose, Right route, Right time",
        "Right prescription, Right label, Right count, Right check, Right handoff",
        "Right patient, Right drug, Right dose, Right refill, Right documentation",
      ],
      correctIndex: 1,
      explanation:
        "The 5 Rights are: Right Patient, Right Drug, Right Dose, Right Route, and Right Time. These are the fundamental safety checks that must be verified before any medication is dispensed.",
    },
    {
      id: "m6-q2",
      question:
        "How many times should you check the medication label when selecting from the shelf?",
      options: [
        "Once — when picking it up",
        "Twice — when picking up and when returning",
        "Three times — when picking up, when counting/measuring, and when returning to shelf",
        "Four times — once at each step of the workflow",
      ],
      correctIndex: 2,
      explanation:
        "The Triple Check: verify the label (1) when removing the stock bottle from the shelf, (2) when counting or measuring the medication, and (3) when returning the stock bottle to the shelf. This three-point verification significantly reduces 'wrong drug' errors.",
    },
    {
      id: "m6-q3",
      question:
        "What is 'Tall Man Lettering' used for in pharmacy?",
      options: [
        "Making labels easier to read for elderly patients",
        "Highlighting differences between look-alike/sound-alike drug names to prevent errors",
        "Identifying controlled substances on the shelf",
        "Indicating that a medication is for topical use only",
      ],
      correctIndex: 1,
      explanation:
        "Tall Man Lettering uses uppercase letters to highlight the critical differences between look-alike drug names (e.g., metFORMIN vs. metOPROLOL) to help pharmacy staff distinguish between easily confused medications and prevent dispensing errors.",
    },
    {
      id: "m6-q4",
      question:
        "What is the 'teach-back' method in patient counselling?",
      options: [
        "Teaching the patient to read their medication label",
        "Asking the patient to repeat back in their own words how they will take the medication, to verify comprehension",
        "Providing a written pamphlet for the patient to study at home",
        "Having the patient demonstrate how to use an inhaler before leaving the pharmacy",
      ],
      correctIndex: 1,
      explanation:
        "Teach-back asks the patient to explain in their own words how they will take the medication. This verifies that the patient actually understood the instructions, rather than simply nodding along. It's a cornerstone of effective patient counselling.",
    },
    {
      id: "m6-q5",
      question:
        "At which step in the dispensing workflow does the pharmacist perform the FINAL verification check?",
      options: [
        "Step 2 — when the prescription is first received",
        "Step 5 — when medication is prepared",
        "Step 8 — after the technician has prepared and labelled the medication, the pharmacist verifies everything before release",
        "Step 10 — during patient counselling",
      ],
      correctIndex: 2,
      explanation:
        "The pharmacist's final check (Step 8) occurs after the technician has prepared, counted, and labelled the medication. The pharmacist compares the original prescription against the prepared medication and label before authorising release to the patient. This is the last safety barrier.",
    },
  ],
};

// ============================================================================
// MODULE 7 — Health Systems in the Caribbean
// ============================================================================

const module7: Module = {
  id: "m7-health-systems",
  number: 7,
  title: "Health Systems in the Caribbean: Public, Private & Community Pharmacy",
  description:
    "Understand how Caribbean healthcare systems are structured and where pharmacy fits within them. This module compares public and private pharmacy across Trinidad, Jamaica, and Barbados, and explores the unique role of community pharmacy in island healthcare.",
  learningObjectives: [
    "Compare healthcare system structures across Trinidad, Jamaica, and Barbados",
    "Explain the differences between public, private, and community pharmacy practice",
    "Describe the role of community pharmacy as a primary healthcare access point in the Caribbean",
    "Identify the challenges and opportunities facing Caribbean pharmacy in the current healthcare landscape",
  ],
  lessons: [
    {
      id: "m7-l1",
      title: "Caribbean Healthcare System Overview",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "How Caribbean Healthcare Is Organised",
        },
        {
          type: "text",
          body: "Caribbean healthcare systems are predominantly mixed public-private models, where the government provides a basic level of healthcare to all citizens through public facilities, while private healthcare offers additional options for those who can afford it. The balance between public and private sectors varies significantly between islands, and the pharmacy sector mirrors these differences.",
        },
        {
          type: "island-comparison",
          title: "Healthcare System Structure",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Public healthcare is free at point of use through Regional Health Authorities (RHAs)",
                "Five RHAs manage public hospitals, health centres, and district health facilities",
                "Public pharmacies dispense medications at no charge to patients treated within the system",
                "Robust private healthcare sector with private hospitals, clinics, and pharmacies",
                "The Chronic Disease Assistance Programme (CDAP) provides free medications for specified chronic conditions through both public and participating private pharmacies",
                "National Insurance system (NIS) provides some healthcare coverage",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Public healthcare through Regional Health Authorities and the University Hospital of the West Indies",
                "Public hospital pharmacies dispense medications to inpatients and outpatients",
                "National Health Fund (NHF) subsidises medications for 15 chronic conditions through registered private pharmacies",
                "Jamaica Drug for the Elderly Programme (JADEP) provides free medications to qualifying seniors",
                "Private sector includes pharmacies, clinics, and hospitals",
                "Community pharmacies serve as critical primary healthcare access points, especially in rural parishes",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Universal public healthcare through the Queen Elizabeth Hospital and 8 polyclinics",
                "The Barbados Drug Service manages all public sector pharmaceutical procurement and distribution",
                "Medications dispensed at no charge in public facilities",
                "Barbados Drug Benefit programme provides certain medications through the public system",
                "Active private pharmacy sector, particularly in Bridgetown and tourist areas",
                "Compact geography means most residents are within 30 minutes of a pharmacy",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Caribbean Advantage",
          body: "Caribbean islands, despite their resource constraints, often achieve healthcare access rates that rival much larger countries. The compact geography of islands like Barbados means that nearly every citizen lives within reasonable distance of a health facility and a pharmacy. This geographical advantage, combined with community trust in local pharmacists, makes pharmacy a cornerstone of Caribbean healthcare.",
        },
      ],
    },
    {
      id: "m7-l2",
      title: "Public vs Private Pharmacy Practice",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Two Sectors, Different Realities",
        },
        {
          type: "text",
          body: "Working in a public sector pharmacy versus a private sector pharmacy are quite different experiences in the Caribbean. Both have advantages and challenges, and understanding these differences will help you decide where you want to build your career — and prepare you for the realities of each setting.",
        },
        {
          type: "table",
          caption: "Public vs Private Pharmacy: Key Differences",
          headers: ["Factor", "Public Sector", "Private Sector"],
          rows: [
            ["Medication cost to patient", "Free or heavily subsidised", "Patient pays (may be partially covered by insurance or NHF)"],
            ["Formulary", "Restricted to approved national formulary", "Broader range including brand medications, supplements, cosmetics"],
            ["Patient volume", "High volume, often with long wait times", "Variable; more time per patient typically available"],
            ["Medication supply", "Central procurement; may face stockouts", "Independent purchasing; more supply flexibility but cost-driven"],
            ["Technology", "Government systems, may be older", "Often more modern POS and pharmacy management systems"],
            ["Work environment", "Structured, government employment conditions", "Varied; from independent pharmacies to chain operations"],
            ["Career progression", "Civil service structure with defined grades", "Performance-based; entrepreneurial opportunities"],
            ["Salary", "Government scale; benefits and pension", "Competitive but varies; limited government benefits"],
          ],
        },
        {
          type: "case-study",
          title: "Case Study: The Formulary Dilemma",
          scenario:
            "You work in a public polyclinic pharmacy in Barbados. A patient's doctor has prescribed a specific brand-name antihypertensive that is NOT on the Barbados National Drug Formulary. The formulary equivalent (a different generic medication in the same therapeutic class) is available. The patient is insistent that they want the specific brand their doctor prescribed, saying 'the other one doesn't work as well for me.'",
          questions: [
            "Can the public pharmacy dispense the brand-name medication?",
            "How would you explain the formulary system to the patient?",
            "What are the patient's options?",
          ],
          discussion:
            "Public sector pharmacies in Barbados must dispense from the approved National Drug Formulary. The brand-name medication would need to go through a formal non-formulary request if it is clinically justified. In the meantime, the patient can: (1) accept the formulary equivalent, (2) ask their doctor to submit a special request for the non-formulary item, or (3) obtain the specific brand from a private pharmacy at their own expense. The technician's role is to explain this clearly and non-judgementally, and to involve the pharmacist in the clinical discussion.",
        },
      ],
    },
    {
      id: "m7-l3",
      title: "Community Pharmacy: The Heart of Caribbean Healthcare",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "More Than a Place to Fill Prescriptions",
        },
        {
          type: "text",
          body: "In the Caribbean, the community pharmacy is far more than a retail outlet for medications. It is often the first — and sometimes the only — point of healthcare access for many communities. Patients walk into pharmacies for blood pressure checks, diabetes advice, wound care, cold and flu remedies, family planning support, and a hundred other health needs. The community pharmacist and their technician team are trusted healthcare advisors.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Blood pressure and blood glucose monitoring (many pharmacies offer free screening)",
            "OTC medication advice for minor ailments",
            "Medication therapy management for patients on multiple medications",
            "Health education and disease prevention counselling",
            "Vaccination services (expanding across the region)",
            "First aid and wound care advice",
            "Referral to medical professionals when symptoms suggest a condition beyond pharmacy scope",
            "Supporting public health campaigns (dengue prevention, HIV testing, NCD awareness)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Future Is Expanding",
          body: "Across the Caribbean, the scope of community pharmacy practice is gradually expanding. Trinidad, Jamaica, and Barbados are all exploring expanded roles for pharmacists and technicians, including: pharmacist prescribing for minor ailments, expanded vaccination authority, chronic disease monitoring and management, and telepharmacy for reaching remote communities. Investing in your education now positions you for these expanded roles as they emerge.",
        },
        {
          type: "video-placeholder",
          title: "Community Pharmacy Spotlight: Three Islands",
          duration: "15 min",
          description:
            "A visual tour of community pharmacies in Port of Spain (Trinidad), Kingston (Jamaica), and Bridgetown (Barbados), showing the daily rhythm, patient interactions, and community impact of Caribbean pharmacy practice.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m7-q1",
      question:
        "What is Trinidad & Tobago's programme that provides free medications for chronic conditions through both public and private pharmacies?",
      options: [
        "National Health Fund (NHF)",
        "Chronic Disease Assistance Programme (CDAP)",
        "Jamaica Drug for the Elderly Programme (JADEP)",
        "Barbados Drug Benefit Programme",
      ],
      correctIndex: 1,
      explanation:
        "The Chronic Disease Assistance Programme (CDAP) is Trinidad & Tobago's government programme that provides free medications for specified chronic conditions such as diabetes, hypertension, asthma, arthritis, glaucoma, cardiac conditions, and mental health conditions through both public pharmacies and participating private pharmacies.",
    },
    {
      id: "m7-q2",
      question:
        "How many polyclinics does Barbados operate as part of its public healthcare system?",
      options: ["4", "6", "8", "12"],
      correctIndex: 2,
      explanation:
        "Barbados operates 8 polyclinics across the island, providing primary healthcare services including pharmacy services to the population. The compact geography of Barbados means most residents are within reasonable distance of a polyclinic.",
    },
    {
      id: "m7-q3",
      question:
        "What is a key advantage of working in a private sector pharmacy versus public sector in the Caribbean?",
      options: [
        "Government pension benefits",
        "Higher patient volume",
        "Broader medication range and often more modern technology",
        "Guaranteed job security through civil service",
      ],
      correctIndex: 2,
      explanation:
        "Private sector pharmacies typically offer a broader range of medications (not limited to a national formulary), including brands, supplements, and cosmetics, and often invest in more modern pharmacy management systems and point-of-sale technology.",
    },
    {
      id: "m7-q4",
      question:
        "A patient in a Barbados public polyclinic pharmacy insists on a brand-name medication not on the National Drug Formulary. What is the correct course of action?",
      options: [
        "Dispense the brand name to keep the patient happy",
        "Explain the formulary system, offer the formulary equivalent, and advise the patient can obtain the brand from a private pharmacy at their own cost",
        "Tell the patient to complain to the Minister of Health",
        "Dispense the formulary equivalent without explaining why",
      ],
      correctIndex: 1,
      explanation:
        "Public pharmacies must follow the National Drug Formulary. The technician should explain the formulary system clearly, offer the equivalent medication, and inform the patient of their option to obtain the specific brand from a private pharmacy. If there is a genuine clinical need, the doctor can submit a non-formulary request.",
    },
    {
      id: "m7-q5",
      question:
        "Which of the following is an expanding role for community pharmacy in the Caribbean?",
      options: [
        "Performing surgery",
        "Diagnosing chronic diseases",
        "Pharmacist prescribing for minor ailments and expanded vaccination services",
        "Replacing general practitioners in primary care",
      ],
      correctIndex: 2,
      explanation:
        "Caribbean community pharmacy is expanding to include pharmacist prescribing for minor ailments, expanded vaccination authority, chronic disease monitoring, and telepharmacy. These expanded roles build on the trust communities already place in their local pharmacy.",
    },
  ],
};

// ============================================================================
// MODULE 8 — Career Pathways for Pharmacy Technicians in the Caribbean
// ============================================================================

const module8: Module = {
  id: "m8-career-pathways",
  number: 8,
  title: "Career Pathways for Pharmacy Technicians in the Caribbean",
  description:
    "Chart your course from certified pharmacy technician to a rewarding career across the Caribbean. This module explores the diverse career opportunities available, the importance of continuing professional development, and how to build a career plan that takes advantage of the region's growing healthcare sector.",
  learningObjectives: [
    "Identify career opportunities for pharmacy technicians across different healthcare settings in the Caribbean",
    "Develop a personal continuing professional development (CPD) plan",
    "Understand the requirements for cross-island practice and career mobility",
    "Create a 5-year career development plan with specific milestones",
  ],
  lessons: [
    {
      id: "m8-l1",
      title: "Career Opportunities in Caribbean Pharmacy",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Where Can Your Career Take You?",
        },
        {
          type: "text",
          body: "A pharmacy technician qualification opens doors across the Caribbean healthcare sector. The demand for trained pharmacy technicians is growing across the region, driven by expanding healthcare services, an aging population with increasing chronic disease burden, and the need for properly qualified staff as pharmacy practice becomes more regulated and sophisticated.",
        },
        {
          type: "table",
          caption: "Career Settings for Pharmacy Technicians",
          headers: ["Setting", "Description", "Key Skills Needed"],
          rows: [
            [
              "Community / Retail Pharmacy",
              "The most common setting — dispensing, patient interaction, OTC advice, inventory management",
              "Customer service, dispensing accuracy, product knowledge, communication",
            ],
            [
              "Hospital Pharmacy",
              "Inpatient dispensing, ward supply, sterile compounding, specialised medications",
              "Aseptic technique, complex calculations, teamwork, attention to detail",
            ],
            [
              "Public Health / Polyclinic",
              "Government health facilities providing primary care pharmacy services",
              "Formulary management, public health knowledge, volume dispensing",
            ],
            [
              "Pharmaceutical Distribution / Wholesale",
              "Pharmaceutical warehousing, supply chain, regulatory compliance for importation",
              "Logistics, regulatory knowledge, inventory systems, quality assurance",
            ],
            [
              "Pharmaceutical Manufacturing (Limited)",
              "Quality control, production support, documentation",
              "Good Manufacturing Practice (GMP), documentation, laboratory skills",
            ],
            [
              "Insurance / NHF Claims Processing",
              "Processing pharmaceutical benefit claims, formulary management, utilisation review",
              "Data entry, regulatory knowledge, attention to detail, analytical skills",
            ],
            [
              "Education & Training",
              "Teaching and training the next generation of pharmacy technicians",
              "Communication, curriculum knowledge, mentoring, certification",
            ],
          ],
        },
        {
          type: "island-comparison",
          title: "Job Market Outlook",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Strong demand in both public (RHAs) and private sector",
                "CDAP programme expansion creates more pharmacy service points",
                "Growing pharmaceutical distribution sector (Trinidad as regional hub)",
                "Competitive salaries in private sector; government positions offer benefits and pension",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "NHF expansion is increasing demand for qualified pharmacy staff",
                "Community pharmacy remains the largest employer",
                "Hospital pharmacy positions available through Regional Health Authorities",
                "Growing interest in pharmacy informatics and technology roles",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Polyclinic system provides stable government employment",
                "Queen Elizabeth Hospital pharmacy is a major employer",
                "Private sector offers competitive alternatives",
                "Smaller market but high per-capita demand for qualified technicians",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "m8-l2",
      title: "Continuing Professional Development",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Never Stop Learning",
        },
        {
          type: "text",
          body: "Pharmacy is a field where knowledge becomes outdated rapidly. New drugs are approved, guidelines change, regulations are updated, and technology evolves. Continuing Professional Development (CPD) is not optional — it is a professional obligation and, increasingly, a regulatory requirement for maintaining your qualification.",
        },
        {
          type: "heading",
          level: 3,
          text: "CPD Opportunities in the Caribbean",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "PIXOPHARM advanced courses: Dispensing & Medication Management, Pharmacology Essentials, AI in Pharmacy",
            "Caribbean Association of Pharmacists (CAP) conferences and workshops",
            "CARPHA training programmes in pharmaceutical quality and regulatory affairs",
            "University programmes: UWI (University of the West Indies) offers pharmacy degrees across campuses in Trinidad, Jamaica, and Barbados",
            "Online learning: FDA, WHO, and PAHO offer free pharmaceutical training modules",
            "Manufacturer training: Pharmaceutical companies offer product-specific training",
            "In-pharmacy mentorship: Learning from experienced pharmacists and senior technicians",
            "Professional journals: The West Indian Medical Journal, Caribbean Medical Journal",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Career Progression Pathways",
        },
        {
          type: "text",
          body: "Your career as a pharmacy technician is not a dead end — it is a launching pad. With experience and further education, you can advance into senior technician roles, specialised areas, management, or even transition toward a pharmacy degree.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Entry-Level Pharmacy Technician → 0-2 years experience",
            "Senior Pharmacy Technician → 2-5 years, may supervise junior staff",
            "Lead Technician / Dispensary Manager → 5+ years, manages pharmacy operations",
            "Specialist Roles → Sterile compounding, oncology pharmacy, clinical trials support",
            "Pharmacy Management → Store manager, district pharmacy coordinator",
            "Further Education → Bachelor of Pharmacy (BPharm), Doctor of Pharmacy (PharmD) at UWI",
            "Related Fields → Pharmaceutical sales, regulatory affairs, health administration, public health",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Cross-Island Mobility",
          body: "As a CARICOM national, you benefit from the free movement of skilled workers under the CARICOM Single Market and Economy (CSME). While pharmacy regulations remain island-specific, your qualification and experience are valuable across the region. Research the specific registration requirements of any island you wish to practise on. PIXOPHARM's multi-island curriculum is designed to give you a competitive advantage in cross-island career mobility.",
        },
      ],
    },
    {
      id: "m8-l3",
      title: "Building Your Career Plan",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Your 5-Year Career Blueprint",
        },
        {
          type: "text",
          body: "A career doesn't just happen — it is built deliberately through planning, skill development, and strategic decision-making. This final lesson helps you create a personal 5-year career plan that leverages your PIXOPHARM training and positions you for long-term success in Caribbean pharmacy.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Career Planning Framework",
        },
        {
          type: "table",
          caption: "5-Year Career Planning Template",
          headers: ["Timeframe", "Goals", "Actions"],
          rows: [
            [
              "Year 1: Foundation",
              "Complete PIXOPHARM certification, secure first pharmacy technician position",
              "Finish all 8 courses, obtain certification, prepare CV, apply to positions, begin work under pharmacist supervision",
            ],
            [
              "Year 2: Competence",
              "Develop proficiency in all core dispensing tasks, build patient interaction skills",
              "Complete probationary period, seek feedback from pharmacist mentor, take on additional responsibilities, begin CPD log",
            ],
            [
              "Year 3: Specialisation",
              "Identify area of interest, pursue advanced training",
              "Enrol in PIXOPHARM advanced courses, attend CAP conference, consider a specialised role (hospital, compounding, management)",
            ],
            [
              "Year 4: Leadership",
              "Take on supervisory or mentoring responsibilities",
              "Train new technicians, lead a quality improvement project, explore cross-island opportunities if desired",
            ],
            [
              "Year 5: Advancement",
              "Move into senior role or begin further education",
              "Apply for senior technician / lead position, or enrol in UWI BPharm programme, or explore related career paths",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Your Journey Starts Now",
          body: "By completing this Foundations of Pharmacy Practice course, you have taken the most important step — you have started. The Caribbean pharmacy sector needs trained, ethical, knowledgeable professionals who understand the unique challenges and opportunities of our region. You are becoming that professional. The remaining PIXOPHARM courses will deepen your knowledge in pharmaceutical calculations, dispensing, pharmacology, regulations, AI, patient communication, and quality assurance. Your career awaits.",
        },
        {
          type: "video-placeholder",
          title: "Graduate Voices: Where Are They Now?",
          duration: "10 min",
          description:
            "PIXOPHARM graduates from Trinidad, Jamaica, and Barbados share their career journeys since completing their training — where they started, where they are now, and their advice for new pharmacy technicians.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m8-q1",
      question:
        "Which CARICOM initiative supports the free movement of skilled workers across Caribbean nations?",
      options: [
        "The Caribbean Regulatory System (CRS)",
        "The CARICOM Single Market and Economy (CSME)",
        "The Caribbean Public Health Agency (CARPHA)",
        "The OECS Pharmaceutical Procurement Service",
      ],
      correctIndex: 1,
      explanation:
        "The CARICOM Single Market and Economy (CSME) enables the free movement of skilled workers, including healthcare professionals, across CARICOM member states. This means your pharmacy technician qualification can be a passport to career opportunities across the Caribbean — though island-specific registration requirements still apply.",
    },
    {
      id: "m8-q2",
      question:
        "Why is Continuing Professional Development (CPD) important for pharmacy technicians?",
      options: [
        "It is only needed if you want a promotion",
        "Pharmacy knowledge becomes outdated as drugs, guidelines, and regulations change — CPD ensures you remain competent and current",
        "It is only required in private sector pharmacy",
        "It is only needed during the first year of practice",
      ],
      correctIndex: 1,
      explanation:
        "The pharmaceutical field changes constantly — new medications are approved, clinical guidelines are updated, regulations evolve, and technology advances. CPD is a professional obligation to ensure you maintain the competence needed to serve patients safely throughout your career.",
    },
    {
      id: "m8-q3",
      question:
        "Which university system offers pharmacy degrees across campuses in Trinidad, Jamaica, and Barbados?",
      options: [
        "Caribbean Examination Council (CXC)",
        "University of the West Indies (UWI)",
        "University of Technology, Jamaica",
        "University of the Southern Caribbean",
      ],
      correctIndex: 1,
      explanation:
        "The University of the West Indies (UWI) is the premier regional university with campuses in Trinidad (St. Augustine), Jamaica (Mona), and Barbados (Cave Hill). UWI offers Bachelor of Pharmacy and Doctor of Pharmacy degrees that provide a pathway for pharmacy technicians seeking to advance to pharmacist-level qualifications.",
    },
    {
      id: "m8-q4",
      question:
        "What is typically the career progression after 2-5 years as a pharmacy technician?",
      options: [
        "Automatic promotion to pharmacist",
        "Senior Pharmacy Technician with potential supervisory responsibilities",
        "Mandatory relocation to another island",
        "Retirement eligibility",
      ],
      correctIndex: 1,
      explanation:
        "After 2-5 years of experience, pharmacy technicians typically advance to Senior Pharmacy Technician roles, where they may supervise junior staff, handle more complex dispensing tasks, and take on additional responsibilities. This is a common stepping stone toward lead technician, dispensary manager, or specialist roles.",
    },
    {
      id: "m8-q5",
      question:
        "What is the most common employment setting for pharmacy technicians in the Caribbean?",
      options: [
        "Hospital pharmacy",
        "Pharmaceutical manufacturing",
        "Community / retail pharmacy",
        "Insurance claims processing",
      ],
      correctIndex: 2,
      explanation:
        "Community (retail) pharmacy is the most common employment setting for pharmacy technicians across the Caribbean. These pharmacies serve as primary healthcare access points in their communities, handling dispensing, OTC advice, health screenings, and patient counselling.",
    },
  ],
};

// ============================================================================
// FULL COURSE ASSEMBLY
// ============================================================================

export const foundationsCourse: FullCourse = {
  courseId: "foundations-pharmacy-practice",
  title: "Foundations of Pharmacy Practice",
  tagline: "Your gateway to a rewarding pharmacy career across the Caribbean",
  modules: [module1, module2, module3, module4, module5, module6, module7, module8],
};

// ── Utility helpers ─────────────────────────────────────────────────────────

export const totalLessons = foundationsCourse.modules.reduce(
  (sum, m) => sum + m.lessons.length,
  0,
);

export const totalQuizQuestions = foundationsCourse.modules.reduce(
  (sum, m) => sum + m.quiz.length,
  0,
);

export default foundationsCourse;
