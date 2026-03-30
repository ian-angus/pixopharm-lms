// ============================================================================
// PIXOPHARM LMS — R1: Caribbean Island Pharmacy Practice
// Full Course Content: 4 Modules, 23 Lessons, ~40 Quiz Questions
// Focus Islands: Trinidad & Tobago, Jamaica, Barbados, Grenada
// ============================================================================

import type { Module, FullCourse } from '../types';

// ============================================================================
// MODULE 1 — Trinidad & Tobago
// ============================================================================

const module1: Module = {
  id: "m1-trinidad-tobago",
  number: 1,
  title: "Trinidad & Tobago",
  description:
    "Dive deep into the regulatory, public-health, and day-to-day pharmacy landscape of Trinidad & Tobago — the Caribbean's largest pharmaceutical market. From the Pharmacy Board's registration process to the CDAP formulary and the four Regional Health Authorities, this module equips you to work confidently in any T&T dispensing environment.",
  learningObjectives: [
    "Describe the structure and functions of the Pharmacy Board of Trinidad & Tobago and its registration requirements",
    "Explain the Chronic Disease Assistance Programme (CDAP) and correctly process a CDAP prescription",
    "Differentiate the four Regional Health Authorities and their pharmacy service models",
    "Identify the role of NIPDEC and the National Drug Formulary in public-sector medication supply",
    "Apply knowledge of common prescribing patterns to anticipate dispensing needs in T&T pharmacies",
  ],
  lessons: [
    // ── Lesson 1.1 ──────────────────────────────────────────────────────────
    {
      id: "m1-l1",
      title: "The Pharmacy Board of Trinidad & Tobago: Registration & Licensing",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Pharmacy Board of Trinidad & Tobago",
        },
        {
          type: "text",
          body: "The Pharmacy Board of Trinidad and Tobago is the statutory body established under the Pharmacy Board Act (Chapter 29:52) to regulate pharmacy practice throughout the twin-island republic. It is the single most important regulatory entity that any pharmacy professional — pharmacist, intern, or technician — must understand before practising in T&T. The Board operates under the Ministry of Health and is responsible for maintaining the Register of Pharmacists, approving pharmacy premises, and ensuring that the pharmaceutical profession meets acceptable standards of practice.",
        },
        {
          type: "key-term",
          term: "Pharmacy Board Act (Chapter 29:52)",
          definition:
            "The primary legislation governing pharmacy practice in Trinidad and Tobago. It establishes the Pharmacy Board, defines who may practise pharmacy, regulates the registration of pharmacists, and sets standards for pharmacy premises. Originally enacted in the colonial era and amended multiple times, most recently to reflect modern practice standards.",
        },
        {
          type: "heading",
          level: 3,
          text: "Registration Process for Pharmacists",
        },
        {
          type: "text",
          body: "To practise as a pharmacist in T&T, an individual must hold a recognised pharmacy qualification (typically a B.Sc. Pharmacy or PharmD from a CARICOM-recognised institution such as the University of the West Indies at St. Augustine, or an approved international programme), complete the required internship period, and pass the Pharmacy Board's registration examination. Upon successful registration, the pharmacist's name is entered into the Register of Pharmacists and they receive a licence to practise, which must be renewed annually.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Obtain a recognised pharmacy qualification (UWI St. Augustine B.Sc. Pharmacy, or equivalent approved foreign degree)",
            "Complete the mandatory pre-registration internship (typically 12 months under a registered pharmacist)",
            "Submit application to the Pharmacy Board with academic transcripts, internship completion certificate, and character references",
            "Pay the prescribed registration fee (currently approximately TT$500–$1,000)",
            "Sit and pass the Pharmacy Board's registration examination",
            "Receive your Certificate of Registration and annual practising licence",
            "Renew your licence annually before 31 January each year",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Where Do Pharmacy Technicians Fit?",
          body: "As of 2025, Trinidad & Tobago does not have a separate statutory registration category for pharmacy technicians. Technicians work under the direct supervision and licence of a registered pharmacist. However, there is growing advocacy — particularly from the Pharmacy Association of Trinidad and Tobago (PATT) and the UWI — for formalised technician registration. A PIXOPHARM certification positions you strongly for the formal registration framework that is expected in the coming years.",
        },
        {
          type: "heading",
          level: 3,
          text: "Pharmacy Premises Licensing",
        },
        {
          type: "text",
          body: "Every pharmacy in T&T must be licensed by the Pharmacy Board. The premises must meet specific requirements regarding physical layout, storage conditions, security (especially for controlled substances), and the presence of a registered pharmacist during all operating hours. The Board conducts inspections before issuing a licence and may conduct unannounced inspections thereafter. A pharmacy that operates without a licensed pharmacist on the premises — even briefly — is operating illegally.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Practical Reality",
          body: "In T&T, some smaller community pharmacies operate in a grey area where the pharmacist may step out, leaving the technician or assistant in charge. This is technically illegal under the Pharmacy Board Act. As a pharmacy technician, you must never dispense a prescription medication while the pharmacist is off-premises. If a customer insists on receiving a prescription while the pharmacist is absent, politely explain that you cannot legally do so and offer to hold the prescription until the pharmacist returns.",
        },
        {
          type: "table",
          caption: "Key Pharmacy Board Functions",
          headers: ["Function", "Description"],
          rows: [
            ["Registration", "Maintains the Register of Pharmacists; processes new applications and annual renewals"],
            ["Premises Licensing", "Inspects and licenses all pharmacy premises; ensures compliance with physical and operational standards"],
            ["Disciplinary Action", "Investigates complaints against registered pharmacists; may suspend or revoke licences for professional misconduct"],
            ["Standards Setting", "Establishes guidelines for good pharmacy practice, including dispensing protocols and continuing education expectations"],
            ["Foreign Qualification Assessment", "Evaluates overseas pharmacy degrees for equivalence and determines whether additional examinations are required"],
          ],
        },
        {
          type: "knowledge-check",
          question: "Under current T&T law, what happens if a community pharmacy operates while the registered pharmacist is off the premises?",
          options: [
            "It is legal provided a certified pharmacy technician is present",
            "It is illegal — a registered pharmacist must be present during all operating hours",
            "It is permitted for up to two hours per day",
            "It is legal provided the pharmacist is reachable by phone",
          ],
          correctIndex: 1,
          explanation:
            "Under the Pharmacy Board Act, a pharmacy must have a registered pharmacist present during all operating hours. Operating without a pharmacist — even for a short period — constitutes an offence. No provision currently exists for technician-supervised dispensing in the pharmacist's absence.",
        },
      ],
    },
    // ── Lesson 1.2 ──────────────────────────────────────────────────────────
    {
      id: "m1-l2",
      title: "CDAP (Chronic Disease Assistance Programme): How It Works for Pharmacy Techs",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Understanding CDAP",
        },
        {
          type: "text",
          body: "The Chronic Disease Assistance Programme (CDAP) is one of the most important government health initiatives in Trinidad and Tobago, and it directly shapes the daily work of every pharmacy technician in the country. Launched in 2003, CDAP provides prescription medications free of charge to citizens and residents of T&T who are diagnosed with specific chronic conditions. The programme covers over 60 medications across multiple therapeutic categories, and is funded entirely by the Government of Trinidad and Tobago.",
        },
        {
          type: "key-term",
          term: "CDAP (Chronic Disease Assistance Programme)",
          definition:
            "A Government of Trinidad and Tobago programme that provides free prescription medications to all citizens and legal residents diagnosed with any of 22 specified chronic diseases. Medications are dispensed through participating private community pharmacies, making it the largest public-private pharmaceutical partnership in the country.",
        },
        {
          type: "heading",
          level: 3,
          text: "Diseases Covered Under CDAP",
        },
        {
          type: "text",
          body: "CDAP covers 22 chronic conditions that represent the major non-communicable disease (NCD) burden in Trinidad and Tobago. The programme was originally launched covering a smaller number of conditions and has expanded over time. Understanding which conditions are covered is essential because a pharmacy technician is often the first person to check whether a patient's prescription qualifies for CDAP dispensing.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Hypertension (high blood pressure)",
            "Diabetes mellitus (Type 1 and Type 2)",
            "Arthritis (rheumatoid and osteoarthritis)",
            "Cardiac diseases (heart failure, ischaemic heart disease)",
            "Glaucoma",
            "Asthma",
            "Depression and mental health conditions",
            "Epilepsy",
            "Benign prostatic hyperplasia (BPH)",
            "Thyroid disease (hypothyroidism and hyperthyroidism)",
            "Parkinson's disease",
            "Hyperlipidaemia (high cholesterol)",
            "GERD (gastro-oesophageal reflux disease)",
            "Chronic obstructive pulmonary disease (COPD)",
            "HIV/AIDS (added later via expanded coverage)",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "How CDAP Dispensing Works — Step by Step",
        },
        {
          type: "text",
          body: "CDAP operates through a network of participating private community pharmacies across T&T. Patients visit their doctor, who writes a CDAP prescription on a special CDAP prescription form (distinct from a regular prescription). The patient brings this form to any participating CDAP pharmacy, where the technician and pharmacist process it. The government reimburses the pharmacy based on a fixed-price schedule for each medication dispensed.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Patient visits a registered medical practitioner who diagnoses a CDAP-covered condition",
            "Doctor writes the prescription on an official CDAP prescription form (pink form), specifying generic drug names from the CDAP formulary",
            "Patient presents at any participating CDAP pharmacy with the prescription and valid national identification",
            "Pharmacy technician verifies: (a) the form is an official CDAP form, (b) the medication is on the CDAP formulary, (c) the patient's ID matches the form",
            "Technician enters the prescription into the CDAP dispensing system and prepares the medication",
            "Pharmacist performs the final check and counsels the patient",
            "Patient receives their medication at no cost — signs the dispensing record",
            "Pharmacy submits the dispensing record to the CDAP Secretariat for reimbursement (typically monthly)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Technician's CDAP Checklist",
          body: "Before processing any CDAP prescription, always verify three things: (1) Is the medication on the current CDAP formulary? Brand names change — always check the generic name. (2) Is the prescription on the correct CDAP form (not a regular prescription pad)? (3) Does the patient's ID match the name on the prescription? These three checks prevent the most common CDAP claim rejections.",
        },
        {
          type: "heading",
          level: 3,
          text: "Commonly Dispensed CDAP Medications",
        },
        {
          type: "table",
          caption: "Top CDAP Formulary Medications by Condition",
          headers: ["Condition", "CDAP Medications", "Common Strengths"],
          rows: [
            ["Hypertension", "Amlodipine, Enalapril, Losartan, Hydrochlorothiazide, Atenolol, Nifedipine", "5mg/10mg, 5mg/10mg/20mg, 50mg/100mg, 25mg, 50mg/100mg, 30mg"],
            ["Diabetes", "Metformin, Glibenclamide, Gliclazide, Insulin (various)", "500mg/850mg, 5mg, 80mg, 100IU/mL"],
            ["Hyperlipidaemia", "Simvastatin, Atorvastatin", "20mg/40mg, 10mg/20mg/40mg"],
            ["Asthma / COPD", "Salbutamol inhaler, Beclomethasone inhaler, Ipratropium bromide", "100mcg, 250mcg, 20mcg"],
            ["Depression", "Amitriptyline, Fluoxetine", "25mg, 20mg"],
            ["Epilepsy", "Carbamazepine, Sodium valproate, Phenytoin", "200mg, 200mg/500mg, 100mg"],
            ["Glaucoma", "Timolol eye drops, Latanoprost eye drops", "0.5%, 0.005%"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Brand vs. Generic on CDAP",
          body: "CDAP prescriptions must use generic (INN) names. If a doctor writes a brand name — for example 'Norvasc' instead of 'Amlodipine' — the pharmacy can still dispense the CDAP-approved generic equivalent, but the prescription should ideally be written generically. Some patients will ask for the brand-name version; you must explain that CDAP only covers the formulary generics and that they would need to pay privately for branded alternatives.",
        },
        {
          type: "knowledge-check",
          question: "A patient presents a prescription written on a regular prescription pad (not a CDAP form) for Metformin 500mg for their diabetes. Can you process this under CDAP?",
          options: [
            "Yes — the medication and condition are covered, so the form doesn't matter",
            "No — CDAP requires the official CDAP prescription form; the patient must return to their doctor for the correct form",
            "Yes — but only if the pharmacy manager approves the exception",
            "No — Metformin is not on the CDAP formulary",
          ],
          correctIndex: 1,
          explanation:
            "CDAP prescriptions must be written on the official CDAP prescription form. Even though Metformin is on the formulary and diabetes is a covered condition, a prescription on a regular pad cannot be processed under CDAP. The patient must return to their doctor to get the prescription rewritten on the pink CDAP form.",
        },
        {
          type: "case-study",
          title: "Case Study: The CDAP Reimbursement Delay",
          scenario:
            "It is month-end at PharmaCare Pharmacy in Chaguanas. The owner-pharmacist informs the team that CDAP reimbursements from the government are three months behind. The pharmacy has been dispensing hundreds of CDAP prescriptions monthly, and cash flow is critically tight. Some pharmacies in the area have started quietly asking CDAP patients for a small 'dispensing fee' of TT$20–$50 per prescription. The pharmacist is considering doing the same.",
          questions: [
            "Is charging a CDAP patient a dispensing fee legal under the programme's terms?",
            "What alternatives does the pharmacy have to manage cash flow during reimbursement delays?",
            "If the pharmacist proceeds with the fee, what is the pharmacy technician's ethical obligation?",
          ],
          discussion:
            "Charging CDAP patients any fee violates the programme's terms — CDAP medications must be dispensed free of charge to the patient. However, delayed government reimbursement is a real and chronic challenge for T&T pharmacies. Legitimate alternatives include: negotiating extended payment terms with wholesalers, maintaining a CDAP float separate from general revenue, or, in extreme cases, temporarily reducing the number of CDAP prescriptions accepted. A technician who observes illegal fees being charged should raise the concern with the pharmacist and, if unresolved, may report to the Pharmacy Board.",
        },
      ],
    },
    // ── Lesson 1.3 ──────────────────────────────────────────────────────────
    {
      id: "m1-l3",
      title: "The Regional Health Authorities (RHAs): North Central, South-West, Eastern, Tobago",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Trinidad & Tobago's Regional Health Authorities",
        },
        {
          type: "text",
          body: "Trinidad and Tobago's public health system is decentralised through five Regional Health Authorities (RHAs), each responsible for managing health facilities, services, and pharmaceutical supply within a defined geographic area. For pharmacy technicians, understanding the RHA system is crucial because your workplace, your supply chain, and even your employment terms will differ depending on which RHA you work under.",
        },
        {
          type: "key-term",
          term: "Regional Health Authority (RHA)",
          definition:
            "An autonomous body established under the Regional Health Authorities Act (2000) to manage and deliver public health services — including hospital and community pharmacy services — within a defined geographic region of Trinidad and Tobago. Each RHA operates with its own budget, management structure, and pharmaceutical procurement processes.",
        },
        {
          type: "table",
          caption: "The Five Regional Health Authorities of T&T",
          headers: ["RHA", "Headquarters", "Major Facilities", "Key Pharmacy Notes"],
          rows: [
            [
              "North-West Regional Health Authority (NWRHA)",
              "Port of Spain",
              "Port of Spain General Hospital, St. James Medical Complex",
              "Serves the urban capital corridor; highest patient volume; most CDAP prescriptions processed in public sector",
            ],
            [
              "North Central Regional Health Authority (NCRHA)",
              "Mt. Hope / Chaguanas",
              "Eric Williams Medical Sciences Complex (EWMSC), Couva Hospital",
              "Houses UWI's medical campus; major teaching hospital pharmacy; most complex pharmaceutical operations",
            ],
            [
              "Eastern Regional Health Authority (ERHA)",
              "Sangre Grande",
              "Sangre Grande Hospital",
              "Serves rural eastern communities; challenges with patient travel distances; limited after-hours pharmacy access",
            ],
            [
              "South-West Regional Health Authority (SWRHA)",
              "San Fernando",
              "San Fernando General Hospital, Point Fortin Hospital",
              "Second-largest RHA; significant industrial health needs (petrochemical sector); busy outpatient pharmacy",
            ],
            [
              "Tobago Regional Health Authority (TRHA)",
              "Scarborough, Tobago",
              "Scarborough General Hospital",
              "Serves Tobago exclusively; faces unique supply chain challenges (medication must be shipped from Trinidad); smallest RHA by volume",
            ],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Pharmacy Practice Within the RHA System",
        },
        {
          type: "text",
          body: "Each RHA operates hospital pharmacies, health centre dispensaries, and outpatient medication collection points. Pharmacy technicians employed by an RHA work under government terms and conditions, which typically include a fixed salary (on the public-service pay scale), pension benefits, and defined working hours. The work is often high-volume and formulary-driven — you dispense from the national formulary, not from the full range of medications available in private pharmacies.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Hospital pharmacy: Inpatient dispensing, IV admixtures, ward stock management, narcotic control",
            "Outpatient pharmacy: High-volume dispensing for patients discharged or attending clinics — often 200+ prescriptions per day at larger hospitals",
            "Health centre dispensary: Smaller volume; primary-care medications for hypertension, diabetes, respiratory infections",
            "CDAP coordination: Some RHA pharmacies also serve as CDAP dispensing points, bridging public and private-sector supply",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Working in an RHA Pharmacy",
          body: "If you are employed by an RHA, you are a government employee. This means your employment is governed by the Public Service Commission and relevant collective bargaining agreements. Advantages include job security, pension, and leave benefits. Challenges include slower procurement processes, occasional stock-outs due to government purchasing timelines, and limited formulary options compared to the private sector.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Tobago Factor",
        },
        {
          type: "text",
          body: "The Tobago Regional Health Authority (TRHA) deserves special mention. Tobago, the smaller sister island, has a population of approximately 60,000 but faces disproportionate pharmacy challenges. Almost all medications must be shipped from Trinidad, adding transit time and risk. The Scarborough General Hospital pharmacy is the island's primary public dispensing point, and during peak tourist season or after natural disasters, demand can spike unexpectedly. Pharmacy technicians working in Tobago must be especially skilled in inventory forecasting and emergency stock management.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Career Tip",
          body: "RHA pharmacies are excellent starting environments for newly certified pharmacy technicians. The structured protocols, pharmacist supervision, and exposure to a wide range of conditions and medications build a strong clinical foundation. Many technicians spend 2-3 years in an RHA setting before moving to the private sector or specialised practice.",
        },
        {
          type: "knowledge-check",
          question: "Which RHA faces unique supply chain challenges because medications must be shipped from the main island?",
          options: [
            "North-West Regional Health Authority (NWRHA)",
            "Eastern Regional Health Authority (ERHA)",
            "Tobago Regional Health Authority (TRHA)",
            "South-West Regional Health Authority (SWRHA)",
          ],
          correctIndex: 2,
          explanation:
            "The Tobago Regional Health Authority (TRHA) faces unique logistical challenges because almost all medications must be shipped from Trinidad to Tobago. This inter-island transit adds time, cost, and risk to the pharmaceutical supply chain and requires technicians to be especially skilled in inventory forecasting.",
        },
      ],
    },
    // ── Lesson 1.4 ──────────────────────────────────────────────────────────
    {
      id: "m1-l4",
      title: "NIPDEC & the National Drug Formulary",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "NIPDEC and Public-Sector Drug Supply",
        },
        {
          type: "text",
          body: "The National Insurance Property Development Company Limited (NIPDEC) is the state enterprise responsible for the procurement, warehousing, and distribution of pharmaceuticals and medical supplies to all public health facilities in Trinidad and Tobago. If you work in an RHA pharmacy, every medication on your shelves almost certainly passed through NIPDEC's supply chain. Understanding how NIPDEC operates is essential for managing stock, anticipating shortages, and knowing how to escalate supply issues.",
        },
        {
          type: "key-term",
          term: "NIPDEC",
          definition:
            "The National Insurance Property Development Company Limited — a state enterprise under the Ministry of Health that procures, stores, and distributes pharmaceuticals, medical devices, and supplies to all public health institutions in Trinidad and Tobago. NIPDEC acts as the central purchasing agent, leveraging bulk buying power to negotiate better prices from international and regional suppliers.",
        },
        {
          type: "heading",
          level: 3,
          text: "How the Supply Chain Works",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "The Ministry of Health and the RHAs identify medication requirements based on disease burden data and historical consumption",
            "NIPDEC issues tenders (competitive bids) to pharmaceutical manufacturers and distributors, both locally and internationally",
            "Winning bidders supply medications to NIPDEC's central warehouse in Trinidad",
            "NIPDEC's distribution arm delivers medications to RHA hospitals, health centres, and dispensaries on a scheduled basis",
            "RHA pharmacies receive stock, verify quantities and expiry dates, and store according to protocol",
            "Pharmacy technicians in RHA settings are responsible for receiving, checking, and properly storing incoming NIPDEC deliveries",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "The National Drug Formulary",
        },
        {
          type: "text",
          body: "The National Drug Formulary is the official list of medications approved for use in T&T's public health system. It is maintained by the Ministry of Health in consultation with clinical experts and is reviewed periodically. For pharmacy technicians in public-sector settings, the formulary is your bible — you can only dispense what is on it. When a doctor prescribes something off-formulary, you must flag it to the pharmacist, who will typically contact the prescriber to discuss an alternative that is on the formulary.",
        },
        {
          type: "table",
          caption: "National Formulary — Selected Therapeutic Categories",
          headers: ["Category", "Examples on T&T Formulary", "Common Stock Issues"],
          rows: [
            ["Antihypertensives", "Amlodipine, Enalapril, Hydrochlorothiazide, Atenolol", "Generally well-stocked; Enalapril occasionally on back-order"],
            ["Antidiabetics", "Metformin, Glibenclamide, Insulin (NPH, Regular)", "Insulin supply chain critical — requires cold storage throughout"],
            ["Antibiotics", "Amoxicillin, Augmentin, Ciprofloxacin, Metronidazole, Azithromycin", "Seasonal spikes during flu and dengue season can strain supply"],
            ["Analgesics", "Paracetamol, Ibuprofen, Diclofenac, Tramadol", "Tramadol is a controlled substance — strict dispensing protocols apply"],
            ["Respiratory", "Salbutamol, Beclomethasone, Prednisolone", "Inhaler supply can be inconsistent; nebuliser solutions more reliably stocked"],
            ["Mental Health", "Amitriptyline, Fluoxetine, Haloperidol, Diazepam", "Diazepam is a controlled substance; strict record-keeping required"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Stock-Outs in the Public System",
          body: "Stock-outs are a chronic challenge in T&T's public pharmacy system. NIPDEC procurement cycles, shipping delays, and budget constraints can all contribute to gaps in supply. As a pharmacy technician, you should: (1) monitor stock levels proactively and flag items approaching reorder points, (2) communicate expected stock-out durations to patients clearly and empathetically, and (3) know which private pharmacies nearby carry CDAP medications so you can redirect patients appropriately.",
        },
        {
          type: "knowledge-check",
          question: "What is NIPDEC's primary role in the T&T health system?",
          options: [
            "Training and certifying pharmacy technicians",
            "Procuring, warehousing, and distributing pharmaceuticals to public health facilities",
            "Regulating the practice of pharmacy and licensing pharmacists",
            "Manufacturing generic medications for the Caribbean market",
          ],
          correctIndex: 1,
          explanation:
            "NIPDEC (National Insurance Property Development Company Limited) is the state enterprise responsible for procuring, warehousing, and distributing pharmaceuticals and medical supplies to all public health facilities in Trinidad and Tobago. It acts as the central purchasing agent for the public health system.",
        },
      ],
    },
    // ── Lesson 1.5 ──────────────────────────────────────────────────────────
    {
      id: "m1-l5",
      title: "Common Prescribing Patterns & Top Dispensed Medications in T&T",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "What Trinidad & Tobago Prescribes Most",
        },
        {
          type: "text",
          body: "Trinidad and Tobago has one of the highest per-capita rates of non-communicable diseases (NCDs) in the Caribbean. Hypertension affects an estimated 30% of the adult population, diabetes approximately 15%, and cardiovascular disease remains the leading cause of death. These disease patterns directly drive prescribing — and, by extension, what you will spend most of your time dispensing as a pharmacy technician in T&T.",
        },
        {
          type: "heading",
          level: 3,
          text: "Top 20 Dispensed Medications in T&T Community Pharmacies",
        },
        {
          type: "table",
          caption: "Most Commonly Dispensed Medications in T&T (approximate ranking)",
          headers: ["Rank", "Medication", "Class", "Primary Indication"],
          rows: [
            ["1", "Amlodipine 5mg/10mg", "Calcium channel blocker", "Hypertension"],
            ["2", "Metformin 500mg/850mg", "Biguanide", "Type 2 diabetes"],
            ["3", "Omeprazole 20mg", "Proton pump inhibitor", "GERD, gastric ulcer"],
            ["4", "Losartan 50mg/100mg", "ARB", "Hypertension"],
            ["5", "Atorvastatin 20mg/40mg", "Statin", "Hyperlipidaemia"],
            ["6", "Amoxicillin 500mg", "Penicillin antibiotic", "Bacterial infections"],
            ["7", "Paracetamol 500mg", "Analgesic/antipyretic", "Pain, fever"],
            ["8", "Enalapril 5mg/10mg", "ACE inhibitor", "Hypertension, heart failure"],
            ["9", "Salbutamol inhaler 100mcg", "Beta-2 agonist", "Asthma, bronchospasm"],
            ["10", "Hydrochlorothiazide 25mg", "Thiazide diuretic", "Hypertension"],
            ["11", "Glibenclamide 5mg", "Sulphonylurea", "Type 2 diabetes"],
            ["12", "Diclofenac 50mg", "NSAID", "Pain, inflammation"],
            ["13", "Simvastatin 20mg", "Statin", "Hyperlipidaemia"],
            ["14", "Ciprofloxacin 500mg", "Fluoroquinolone", "Bacterial infections"],
            ["15", "Aspirin 81mg", "Antiplatelet", "Cardiovascular prevention"],
            ["16", "Fluoxetine 20mg", "SSRI", "Depression"],
            ["17", "Metronidazole 400mg", "Nitroimidazole", "Infections (anaerobic, protozoal)"],
            ["18", "Insulin NPH (Humulin N)", "Intermediate-acting insulin", "Diabetes (Type 1 & 2)"],
            ["19", "Carbamazepine 200mg", "Anticonvulsant", "Epilepsy"],
            ["20", "Nifedipine 30mg XL", "Calcium channel blocker", "Hypertension"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Prescribing Patterns — What to Expect",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Polypharmacy is extremely common: many patients are on 4-6 medications simultaneously for hypertension, diabetes, and cholesterol",
            "Combination therapy for hypertension is standard: expect prescriptions for ACE inhibitor + diuretic, or ARB + calcium channel blocker",
            "Metformin is almost always first-line for Type 2 diabetes; escalation to sulphonylureas or insulin is frequent",
            "Antibiotics are prescribed liberally — particularly amoxicillin, ciprofloxacin, and azithromycin; antibiotic stewardship is a growing concern",
            "Proton pump inhibitors (PPIs) like omeprazole are among the most over-prescribed medications, often continued long-term without review",
            "Traditional remedies (bush teas, herbal supplements) are used alongside prescribed medications — always ask patients about complementary use",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Trini Drug Culture",
          body: "T&T has a strong culture of self-medication. Patients commonly purchase antibiotics, anti-inflammatories, and even prescription medications over the counter without a prescription — particularly from smaller pharmacies or informal vendors. While this is technically illegal for prescription-only medications, the practice is widespread. As a pharmacy technician, you should encourage appropriate prescription-based dispensing while being non-judgmental about patients' self-care habits.",
        },
        {
          type: "key-term",
          term: "Polypharmacy",
          definition:
            "The concurrent use of multiple medications by a single patient, typically defined as five or more regular medications. In T&T, polypharmacy is extremely common among patients with co-existing hypertension, diabetes, and cardiovascular disease. Pharmacy technicians must be vigilant about potential drug interactions when processing multi-drug prescriptions.",
        },
        {
          type: "knowledge-check",
          question: "Which class of medication is typically first-line for Type 2 diabetes in Trinidad & Tobago?",
          options: [
            "Sulphonylureas (e.g. Glibenclamide)",
            "Insulin (NPH or Regular)",
            "Biguanides (e.g. Metformin)",
            "DPP-4 inhibitors (e.g. Sitagliptin)",
          ],
          correctIndex: 2,
          explanation:
            "Metformin, a biguanide, is almost universally first-line for Type 2 diabetes in T&T (and globally). It is effective, affordable, available on both the CDAP formulary and the national formulary, and has a well-established safety profile. Sulphonylureas or insulin are typically added when metformin alone is insufficient.",
        },
      ],
    },
    // ── Lesson 1.6 ──────────────────────────────────────────────────────────
    {
      id: "m1-l6",
      title: "Working in T&T Pharmacies: Community, Hospital & CDAP Dispensing Sites",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Where Pharmacy Technicians Work in T&T",
        },
        {
          type: "text",
          body: "Trinidad and Tobago offers a diverse range of pharmacy work environments, each with its own rhythm, challenges, and rewards. Whether you end up in a busy community pharmacy on Frederick Street, the hospital pharmacy at EWMSC, or a CDAP dispensing site in a rural health centre, the fundamentals remain the same — accuracy, patient care, and regulatory compliance. But the day-to-day realities differ significantly.",
        },
        {
          type: "heading",
          level: 3,
          text: "Community Pharmacy",
        },
        {
          type: "text",
          body: "Community (retail) pharmacies are the most common employer of pharmacy technicians in T&T. They range from large chain operations (such as SuperPharm, Bhagan's Drugs, and MedPlus) to independent owner-operated pharmacies in towns and villages across both islands. As a community pharmacy technician, your day will typically involve receiving and entering prescriptions, pulling and preparing medications, managing inventory, handling OTC sales, and increasingly processing CDAP prescriptions.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Typical hours: 8:00 AM – 6:00 PM weekdays; 8:00 AM – 1:00 PM Saturdays; some pharmacies open Sundays",
            "Major chains: SuperPharm (largest), Bhagan's Drug Mart, MedPlus Pharmacy, PharmaCare",
            "CDAP participation: Most community pharmacies participate in CDAP, making it a major revenue stream",
            "OTC sales: A significant portion of revenue comes from over-the-counter medications, vitamins, and personal care products",
            "Patient relationship: In smaller pharmacies, you will know your regular patients by name — relationship-building is key",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Hospital Pharmacy",
        },
        {
          type: "text",
          body: "Hospital pharmacy in T&T operates within the RHA system. Major hospital pharmacies — such as those at Port of Spain General Hospital, San Fernando General Hospital, and the Eric Williams Medical Sciences Complex (EWMSC) — handle inpatient dispensing, outpatient prescriptions, IV admixture preparation, and controlled substance management. Hospital pharmacy tends to be more structured and protocol-driven than community practice.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Hospital vs. Community — Key Differences",
          body: "In hospital pharmacy, you work on a shift roster (including nights and weekends), dispense from a limited formulary, and handle more complex medications (injectables, chemotherapy pre-packs, controlled substances). In community pharmacy, you work regular business hours, deal with a broader range of products, and have more direct patient interaction. Many technicians find it valuable to gain experience in both settings.",
        },
        {
          type: "heading",
          level: 3,
          text: "CDAP Dispensing Sites",
        },
        {
          type: "text",
          body: "Some health centres and district facilities operate as dedicated CDAP dispensing sites. These are typically staffed by a pharmacist and one or two technicians, and focus exclusively on processing CDAP prescriptions. The pace can be intense — some CDAP sites process 150-300 prescriptions per day — and the work is highly repetitive (the same medications for the same conditions), but it is an excellent way to build speed, accuracy, and familiarity with chronic disease medications.",
        },
        {
          type: "island-comparison",
          title: "Pharmacy Work Environments Across the Caribbean",
          description:
            "How pharmacy work settings compare between the four islands covered in this course.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Largest pharmacy workforce in the region; most diverse range of settings",
                "CDAP creates a unique public-private dispensing model not found on other islands",
                "Major chains (SuperPharm, Bhagan's) dominate the community pharmacy sector",
                "RHA hospital pharmacies are the primary public-sector employers",
                "Salary range for technicians: approximately TT$4,000–$8,000/month",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Fontana Pharmacy is the dominant chain; many independent pharmacies",
                "NHF programme drives a high volume of chronic disease dispensing",
                "Hospital pharmacy at University Hospital of the West Indies (UHWI) is a premier training site",
                "Salary range for technicians: approximately J$80,000–$160,000/month",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Queen Elizabeth Hospital (QEH) is the primary hospital pharmacy employer",
                "Barbados Drug Service makes the public sector pharmacy experience unique",
                "Smaller community pharmacy market; Collin's Pharmacy and Knights Pharmacy are well known",
                "Salary range for technicians: approximately BDS$2,500–$4,500/month",
              ],
            },
            {
              name: "Grenada",
              flag: "🇬🇩",
              details: [
                "Very small pharmacy workforce; everyone knows everyone",
                "General Hospital pharmacy in St. George's is the main public employer",
                "SGU presence creates opportunities for pharmacy support roles",
                "Salary range for technicians: approximately EC$2,000–$3,500/month",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Starting Salary Expectations",
          body: "As a newly certified pharmacy technician in T&T, expect a starting salary of approximately TT$4,000–$5,500 per month in the private sector and TT$5,000–$7,000 in the public sector (RHA). Public-sector positions offer pension, medical, and leave benefits that significantly increase total compensation. Salaries increase with experience, additional certifications, and specialised skills (e.g. sterile compounding, oncology).",
        },
        {
          type: "knowledge-check",
          question: "Which of the following is the largest community pharmacy chain in Trinidad & Tobago?",
          options: [
            "Fontana Pharmacy",
            "Bhagan's Drug Mart",
            "SuperPharm",
            "Knights Pharmacy",
          ],
          correctIndex: 2,
          explanation:
            "SuperPharm is the largest community pharmacy chain in Trinidad & Tobago, with multiple locations across both islands. Fontana is the major chain in Jamaica, Knights is a well-known brand in Barbados, and Bhagan's is a significant but smaller T&T chain.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m1-q1",
      question:
        "Under the Pharmacy Board Act (Chapter 29:52), what is the mandatory first step for a foreign-trained pharmacist seeking to practise in Trinidad & Tobago?",
      options: [
        "Immediately begin working under a registered pharmacist's supervision",
        "Have their foreign qualification assessed by the Pharmacy Board for equivalence",
        "Register with NIPDEC as a pharmaceutical professional",
        "Complete a two-year internship at a Regional Health Authority pharmacy",
      ],
      correctIndex: 1,
      explanation:
        "Foreign-trained pharmacists must first have their qualifications assessed by the Pharmacy Board of Trinidad and Tobago. The Board evaluates the overseas degree for equivalence with recognised pharmacy qualifications (e.g. UWI B.Sc. Pharmacy) before the applicant can proceed to the registration examination.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q2",
      question:
        "How many chronic conditions are currently covered under CDAP?",
      options: [
        "10",
        "15",
        "22",
        "30",
      ],
      correctIndex: 2,
      explanation:
        "CDAP covers 22 chronic conditions including hypertension, diabetes, arthritis, cardiac diseases, glaucoma, asthma, depression, epilepsy, and others. The programme has expanded over time from a smaller initial list.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q3",
      question:
        "A CDAP prescription arrives at your pharmacy written for 'Norvasc 5mg' instead of the generic name. What is the correct course of action?",
      options: [
        "Dispense the brand-name Norvasc and claim reimbursement under CDAP",
        "Refuse to fill the prescription entirely",
        "Dispense the CDAP-approved generic Amlodipine 5mg and note the generic substitution",
        "Ask the patient to pay privately for the brand-name medication",
      ],
      correctIndex: 2,
      explanation:
        "CDAP prescriptions should specify generic (INN) names, but when a brand name is written, the pharmacy can dispense the CDAP-approved generic equivalent (Amlodipine in this case, as Norvasc is the brand for Amlodipine). The prescription should be annotated accordingly and the generic dispensed.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q4",
      question:
        "Which RHA operates the Eric Williams Medical Sciences Complex (EWMSC)?",
      options: [
        "North-West Regional Health Authority (NWRHA)",
        "North Central Regional Health Authority (NCRHA)",
        "Eastern Regional Health Authority (ERHA)",
        "South-West Regional Health Authority (SWRHA)",
      ],
      correctIndex: 1,
      explanation:
        "The Eric Williams Medical Sciences Complex (EWMSC) is located at Mt. Hope and falls under the North Central Regional Health Authority (NCRHA). It is the primary teaching hospital affiliated with UWI's medical campus.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q5",
      question:
        "What is the primary function of NIPDEC in Trinidad & Tobago's health system?",
      options: [
        "Training and certifying pharmacy professionals",
        "Central procurement, warehousing, and distribution of pharmaceuticals to public health facilities",
        "Regulating the quality and safety of imported medications",
        "Operating the CDAP programme for chronic disease patients",
      ],
      correctIndex: 1,
      explanation:
        "NIPDEC acts as the central purchasing agent for the public health system, procuring pharmaceuticals through competitive tenders, storing them at its central warehouse, and distributing them to all RHA hospitals, health centres, and dispensaries across Trinidad and Tobago.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q6",
      question:
        "A patient at your community pharmacy presents a regular prescription pad script (not a CDAP form) for Metformin 500mg, Amlodipine 5mg, and Atorvastatin 20mg. They insist they should get these free under CDAP. What do you do?",
      options: [
        "Dispense the medications free of charge — the conditions and drugs are clearly CDAP-eligible",
        "Explain that CDAP requires the official CDAP prescription form and advise the patient to return to their doctor for the correct form",
        "Call the CDAP Secretariat to get verbal authorisation for a one-time exception",
        "Dispense the medications and charge the patient, since it is not on a CDAP form",
      ],
      correctIndex: 1,
      explanation:
        "CDAP prescriptions must be written on the official CDAP prescription form. Even though all three medications and the underlying conditions are CDAP-eligible, a regular prescription pad cannot be processed under the programme. The correct action is to politely explain this to the patient and advise them to return to their doctor for the CDAP form.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q7",
      question:
        "Which of the following best describes the pharmacy technician's scope of practice in Trinidad & Tobago?",
      options: [
        "Technicians are independently registered and can operate without pharmacist supervision",
        "Technicians work under the direct supervision of a registered pharmacist and cannot independently verify prescriptions",
        "Technicians can independently dispense OTC medications but not prescription drugs",
        "Technicians have no legal recognition and therefore no defined scope of practice",
      ],
      correctIndex: 1,
      explanation:
        "In T&T, pharmacy technicians work under the direct supervision of a registered pharmacist. While there is no separate statutory registration for technicians, their scope of practice requires pharmacist oversight for all prescription-related activities. The pharmacist must perform the final verification before any medication is dispensed.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q8",
      question:
        "Place the following steps of the CDAP dispensing process in the correct order: (1) Pharmacist performs final check, (2) Patient presents CDAP form, (3) Pharmacy submits record for reimbursement, (4) Technician verifies form and patient ID",
      options: [
        "2 → 4 → 1 → 3",
        "4 → 2 → 3 → 1",
        "2 → 1 → 4 → 3",
        "1 → 2 → 4 → 3",
      ],
      correctIndex: 0,
      explanation:
        "The correct CDAP dispensing sequence is: Patient presents the CDAP form → Technician verifies the form, formulary match, and patient ID → Pharmacist performs the final check and counsels the patient → Pharmacy submits the dispensing record to the CDAP Secretariat for reimbursement.",
      questionType: "ordering",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q9",
      question:
        "Polypharmacy in T&T is most commonly associated with which combination of chronic conditions?",
      options: [
        "Asthma, epilepsy, and glaucoma",
        "Hypertension, diabetes, and hyperlipidaemia",
        "Depression, arthritis, and thyroid disease",
        "HIV/AIDS, tuberculosis, and malaria",
      ],
      correctIndex: 1,
      explanation:
        "The most common polypharmacy combination in Trinidad & Tobago involves hypertension, diabetes (Type 2), and hyperlipidaemia. Many patients are prescribed 4-6 medications simultaneously to manage these co-existing conditions — typically an antihypertensive (or combination), metformin, a statin, and aspirin.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m1-q10",
      question:
        "True or false: In Trinidad and Tobago, pharmacy technicians have a separate statutory registration category under the Pharmacy Board Act.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 1,
      explanation:
        "False. As of 2025, Trinidad and Tobago does not have a separate statutory registration category for pharmacy technicians. Technicians work under the registered pharmacist's licence. There is, however, growing advocacy for the establishment of a formal technician registration framework.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 2 — Jamaica
// ============================================================================

const module2: Module = {
  id: "m2-jamaica",
  number: 2,
  title: "Jamaica",
  description:
    "Navigate Jamaica's unique pharmacy landscape — from the Pharmacy Council of Jamaica (PCJ) and the National Health Fund (NHF) to the Dangerous Drugs Act and the complexities of the Jamaican drug supply chain. This module prepares you to work effectively in Kingston, Montego Bay, or any parish across the island.",
  learningObjectives: [
    "Explain the structure and functions of the Pharmacy Council of Jamaica and its registration requirements",
    "Describe the National Health Fund (NHF) programme and process NHFCard prescriptions accurately",
    "Apply the Dangerous Drugs Act requirements to controlled substance dispensing in Jamaica",
    "Analyse common prescribing patterns in Jamaica and their relationship to the national disease burden",
    "Evaluate the roles of NHF, NHIA, and private distributors in Jamaica's drug supply chain",
  ],
  lessons: [
    // ── Lesson 2.1 ──────────────────────────────────────────────────────────
    {
      id: "m2-l1",
      title: "The Pharmacy Council of Jamaica (PCJ): Registration & Standards",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Pharmacy Council of Jamaica",
        },
        {
          type: "text",
          body: "The Pharmacy Council of Jamaica (PCJ) is the statutory body charged with regulating the practice of pharmacy throughout Jamaica. Established under the Pharmacy Act of 1975 (and its subsequent amendments), the PCJ maintains the Register of Pharmacists, sets standards for pharmacy practice, approves pharmacy premises, and disciplines practitioners who fall below professional standards. Unlike Trinidad & Tobago, Jamaica has a more formalised approach to recognising different categories of pharmacy workers.",
        },
        {
          type: "key-term",
          term: "Pharmacy Council of Jamaica (PCJ)",
          definition:
            "The statutory regulatory body for pharmacy in Jamaica, established under the Pharmacy Act (1975). The PCJ registers pharmacists, licences pharmacy premises, enforces professional standards, and advises the Minister of Health on pharmaceutical matters. Its offices are located in Kingston.",
        },
        {
          type: "heading",
          level: 3,
          text: "Registration Categories",
        },
        {
          type: "text",
          body: "The PCJ maintains several registration categories. Full registration as a pharmacist requires a recognised pharmacy degree (typically the B.Sc. Pharmacy from the University of Technology, Jamaica — UTech — or an approved equivalent), completion of the pre-registration training period, and passing the PCJ's registration examination. Jamaica also formally distinguishes between 'qualified dispensers' and 'pharmacy technicians', with the latter increasingly recognised as a distinct professional category.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Obtain a recognised pharmacy qualification (UTech B.Sc. Pharmacy, UWI, or approved equivalent)",
            "Complete the pre-registration training period (typically one year) under a registered preceptor",
            "Submit application to the PCJ with all required documentation",
            "Pay the registration fee (approximately J$15,000–$25,000)",
            "Sit and pass the PCJ registration examination",
            "Receive your registration certificate and annual practising licence",
            "Maintain registration through annual renewal and continuing professional development (CPD)",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Continuing Professional Development (CPD)",
          body: "Jamaica has been a leader in the Caribbean in pushing for mandatory CPD for pharmacists. The PCJ increasingly requires evidence of ongoing professional development as a condition of licence renewal. While CPD requirements for technicians are not yet formally mandated, completing a PIXOPHARM programme and pursuing additional training demonstrates the kind of professional commitment that the PCJ is looking to formalise across all pharmacy categories.",
        },
        {
          type: "heading",
          level: 3,
          text: "Pharmacy Premises Requirements",
        },
        {
          type: "text",
          body: "Every pharmacy in Jamaica must be licensed by the PCJ. The requirements for premises licensing cover physical space (minimum square footage, separate dispensing area, adequate storage), security (controlled substance safes, alarm systems), temperature and humidity controls, record-keeping systems, and the continuous presence of a registered pharmacist during operating hours. The PCJ conducts routine inspections and can issue compliance orders or revoke licences for premises that do not meet standards.",
        },
        {
          type: "table",
          caption: "PCJ Premises Requirements — Key Standards",
          headers: ["Requirement", "Minimum Standard"],
          rows: [
            ["Dispensing Area", "Separate, enclosed area visible to but separated from the retail floor"],
            ["Storage", "Adequate shelving; temperature monitoring; separate locked storage for controlled substances"],
            ["Cold Chain", "Pharmaceutical-grade refrigerator with temperature log maintained daily"],
            ["Security", "Controlled substance safe bolted to the floor or wall; premises alarm system"],
            ["Records", "Prescription records retained for minimum of 5 years; controlled substance register maintained"],
            ["Pharmacist Presence", "Registered pharmacist must be physically present during all hours the pharmacy is open for dispensing"],
          ],
        },
        {
          type: "knowledge-check",
          question: "Which institution is the primary provider of pharmacy education in Jamaica?",
          options: [
            "University of the West Indies (UWI) Mona",
            "University of Technology, Jamaica (UTech)",
            "Northern Caribbean University (NCU)",
            "Caribbean Maritime University (CMU)",
          ],
          correctIndex: 1,
          explanation:
            "The University of Technology, Jamaica (UTech) is the primary provider of pharmacy education in Jamaica, offering the B.Sc. Pharmacy degree that is the standard qualification for pharmacist registration with the PCJ. While UWI also offers pharmacy programmes regionally, UTech is the leading Jamaican institution for pharmacy training.",
        },
      ],
    },
    // ── Lesson 2.2 ──────────────────────────────────────────────────────────
    {
      id: "m2-l2",
      title: "The National Health Fund (NHF) & NHFCard Programme",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Jamaica's National Health Fund",
        },
        {
          type: "text",
          body: "The National Health Fund (NHF) is Jamaica's flagship health financing programme and one of the most sophisticated pharmaceutical subsidy systems in the Caribbean. Established in 2003, the NHF provides subsidies on prescription medications for Jamaicans diagnosed with specific chronic conditions. Unlike T&T's CDAP (which provides medications entirely free), the NHF operates through a co-payment model — the government subsidises a portion of the cost and the patient pays the difference.",
        },
        {
          type: "key-term",
          term: "National Health Fund (NHF)",
          definition:
            "A statutory body established under the National Health Fund Act (2003) to provide financial support for the healthcare of Jamaicans. The NHF operates individual benefit programmes (NHFCard for chronic conditions), institutional support for public health facilities, and special programmes for vulnerable populations. Funded primarily through a special consumption tax on tobacco products.",
        },
        {
          type: "heading",
          level: 3,
          text: "The NHFCard Programme",
        },
        {
          type: "text",
          body: "The NHFCard is the NHF's primary individual benefit programme. Jamaicans diagnosed with any of the 17 NHF-covered conditions can apply for an NHFCard, which entitles them to subsidised medications at any participating pharmacy. The card is electronic and linked to the NHF database. When a patient presents their NHFCard at a pharmacy, the technician processes the transaction through the NHF point-of-sale system, the subsidy is applied automatically, and the patient pays only the co-payment amount.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Hypertension",
            "Diabetes (Type 1 and Type 2)",
            "Arthritis (rheumatoid and osteoarthritis)",
            "Asthma",
            "Breast cancer (adjuvant therapy)",
            "Prostate cancer (adjuvant therapy)",
            "Benign prostatic hyperplasia",
            "Ischaemic heart disease",
            "Vascular disease",
            "Depression",
            "Psychosis",
            "Epilepsy",
            "Glaucoma",
            "Hyperlipidaemia",
            "Sickle cell disease",
            "GERD",
            "Thyroid disease",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Processing an NHFCard Transaction — Step by Step",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Patient presents valid prescription and NHFCard at the pharmacy counter",
            "Technician verifies the NHFCard is valid and not expired (check the card's expiry date and the patient's photograph)",
            "Technician enters the prescription into the NHF point-of-sale (POS) system using the patient's NHF identification number",
            "The POS system verifies the patient's eligibility and the medication's coverage status",
            "The system calculates the subsidy amount and displays the co-payment the patient owes",
            "Technician prepares the medication and processes the payment (subsidy + co-payment)",
            "Pharmacist performs the final check and counsels the patient",
            "Patient receives medication and a receipt showing the NHF subsidy applied",
            "Transaction data is automatically transmitted to the NHF for reconciliation",
          ],
        },
        {
          type: "table",
          caption: "NHF Subsidy Levels — Selected Medications",
          headers: ["Medication", "Full Cost (approx.)", "NHF Subsidy (approx.)", "Patient Co-pay (approx.)"],
          rows: [
            ["Amlodipine 5mg (30 tablets)", "J$1,200", "J$800", "J$400"],
            ["Metformin 500mg (60 tablets)", "J$1,500", "J$1,000", "J$500"],
            ["Atorvastatin 20mg (30 tablets)", "J$2,000", "J$1,400", "J$600"],
            ["Salbutamol inhaler", "J$1,800", "J$1,200", "J$600"],
            ["Omeprazole 20mg (30 capsules)", "J$1,400", "J$900", "J$500"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "NHF Fraud Prevention",
          body: "The NHF takes fraud extremely seriously. Common forms of NHF fraud include: using another person's NHFCard, pharmacy staff processing claims for medications not actually dispensed, and submitting duplicate claims. All transactions are electronically tracked and audited. Pharmacies found committing fraud face deregistration from the NHF programme, criminal prosecution, and loss of their PCJ licence. As a technician, always verify the patient's identity against their NHFCard and never process a claim for medication that was not actually dispensed.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "NHF vs. CDAP — The Key Difference",
          body: "The most important difference between Jamaica's NHF and T&T's CDAP is the payment model. CDAP provides medications entirely free to the patient (government pays 100%). NHF provides a subsidy where the patient pays a co-payment (typically 30-50% of the cost). This means NHF patients will be more price-sensitive and may ask about cheaper generic alternatives or question why their co-payment is higher this month.",
        },
        {
          type: "knowledge-check",
          question: "What is the funding source for Jamaica's National Health Fund?",
          options: [
            "Direct allocation from the Ministry of Health's annual budget",
            "A special consumption tax on tobacco products",
            "Employer and employee payroll contributions",
            "International donor funding from PAHO and the World Bank",
          ],
          correctIndex: 1,
          explanation:
            "The NHF is funded primarily through a special consumption tax on tobacco products (the NHF Tobacco Levy). This creative funding mechanism ties a public health cost (treating chronic diseases) to a public health harm (tobacco use), creating a sustainable and dedicated revenue stream for the programme.",
        },
      ],
    },
    // ── Lesson 2.3 ──────────────────────────────────────────────────────────
    {
      id: "m2-l3",
      title: "Jamaica's Dangerous Drugs Act & Controlled Substance Framework",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Controlled Substances in Jamaica",
        },
        {
          type: "text",
          body: "Jamaica's controlled substance framework is governed primarily by the Dangerous Drugs Act and the Food and Drugs Act. These laws classify substances into schedules based on their potential for abuse, medical utility, and risk of harm. For pharmacy technicians, understanding this framework is not optional — mishandling controlled substances can result in criminal charges, imprisonment, and the permanent end of your pharmacy career.",
        },
        {
          type: "key-term",
          term: "Dangerous Drugs Act (Jamaica)",
          definition:
            "The primary legislation governing the import, export, manufacture, sale, distribution, and possession of dangerous drugs in Jamaica. It classifies substances into schedules and prescribes penalties for breaches, including mandatory minimum sentences for trafficking offences. The Act is enforced by the Jamaica Constabulary Force in collaboration with the Pharmacy Council.",
        },
        {
          type: "heading",
          level: 3,
          text: "Drug Schedules in Jamaica",
        },
        {
          type: "text",
          body: "Jamaica's scheduling system classifies substances based on their potential for abuse, accepted medical use, and safety profile. The most restricted substances are in Schedule 1 (no accepted medical use), while commonly prescribed but still-controlled medications appear in lower schedules. As a pharmacy technician, you will most frequently handle Schedule 4 and Schedule 5 substances in daily practice.",
        },
        {
          type: "table",
          caption: "Jamaica's Drug Schedules — Simplified Overview",
          headers: ["Schedule", "Description", "Examples", "Pharmacy Technician Relevance"],
          rows: [
            ["Schedule 1", "Highest restriction; no accepted medical use", "Heroin, LSD, MDMA", "You will never handle these in a pharmacy setting"],
            ["Schedule 2", "High abuse potential; accepted medical use with restrictions", "Morphine, Oxycodone, Fentanyl, Methylphenidate", "Handled only in hospital pharmacy under strict pharmacist supervision; requires double-lock storage"],
            ["Schedule 3", "Moderate abuse potential", "Codeine (high-strength), Buprenorphine", "May be dispensed in community pharmacy; requires pharmacist verification and controlled drug register entry"],
            ["Schedule 4", "Lower abuse potential; widely prescribed", "Diazepam, Tramadol, Phenobarbital, Zopiclone", "Commonly dispensed; requires prescription; recorded in controlled substance register"],
            ["Schedule 5", "Lowest restriction; preparations containing small quantities of controlled substances", "Codeine-containing cough syrups (low-dose), Kaolin & morphine mixture", "Available in some cases with pharmacist judgment; must still be recorded"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Controlled Substance Dispensing Protocols",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Receive the prescription and verify it is written by a registered medical practitioner (check the prescriber's registration number)",
            "Confirm the prescription includes: patient's full name, address, date, drug name, strength, quantity, directions, and prescriber's signature",
            "Check that the controlled substance quantity is reasonable for the prescribed duration (red flag: unusually large quantities or early refills)",
            "Enter the dispensing details in the Controlled Drug Register (CDR): date, patient name, prescriber, drug, quantity, balance",
            "Pharmacist must personally verify the entry and co-sign the CDR",
            "Store remaining controlled substance stock in the designated safe immediately after dispensing",
            "Retain the original prescription on file — controlled substance prescriptions cannot be returned to the patient",
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Cannabis in Jamaica — Legal Nuance",
          body: "In 2015, Jamaica decriminalised the possession of small quantities of cannabis (up to 2 ounces) through amendments to the Dangerous Drugs Act. However, cannabis remains a controlled substance. It is NOT legal for pharmacy dispensing and has no place in pharmacy practice unless and until specific pharmaceutical cannabis products receive formal approval through the regulatory pathway. Do not advise patients on cannabis use in a pharmacy setting.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Tramadol Alert",
          body: "Tramadol has become one of the most problematic controlled substances in Jamaica and across the Caribbean. Originally considered lower-risk, it has seen increasing misuse and diversion. Jamaican authorities have tightened controls on Tramadol prescribing and dispensing. As a pharmacy technician, be alert for red flags: multiple Tramadol prescriptions from different doctors, requests for early refills, prescriptions for unusually high doses (above 400mg/day), and patients who become agitated when questioned about their Tramadol use.",
        },
        {
          type: "knowledge-check",
          question: "Under Jamaica's Dangerous Drugs Act, which schedule includes substances with no accepted medical use?",
          options: [
            "Schedule 5",
            "Schedule 3",
            "Schedule 1",
            "Schedule 4",
          ],
          correctIndex: 2,
          explanation:
            "Schedule 1 of Jamaica's Dangerous Drugs Act includes substances with the highest restriction — those with no accepted medical use and a high potential for abuse. Examples include heroin, LSD, and MDMA. These substances should never appear in a pharmacy setting.",
        },
      ],
    },
    // ── Lesson 2.4 ──────────────────────────────────────────────────────────
    {
      id: "m2-l4",
      title: "Common Prescribing Patterns & Top Dispensed Medications in Jamaica",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Jamaica's Prescribing Landscape",
        },
        {
          type: "text",
          body: "Jamaica shares the Caribbean's heavy burden of non-communicable diseases, but its prescribing patterns have some distinctive features shaped by the NHF formulary, local prescribing culture, and the availability of specific generics. Hypertension is the most prevalent chronic condition (affecting approximately 25-30% of adults), followed by diabetes and hyperlipidaemia. Understanding Jamaica's specific medication preferences will help you work more effectively and anticipate dispensing needs.",
        },
        {
          type: "heading",
          level: 3,
          text: "Top 15 Dispensed Medications in Jamaican Community Pharmacies",
        },
        {
          type: "table",
          caption: "Most Commonly Dispensed Medications in Jamaica (approximate ranking)",
          headers: ["Rank", "Medication", "Class", "Primary Indication"],
          rows: [
            ["1", "Amlodipine 5mg/10mg", "Calcium channel blocker", "Hypertension"],
            ["2", "Metformin 500mg/850mg/1000mg", "Biguanide", "Type 2 diabetes"],
            ["3", "Losartan 25mg/50mg/100mg", "ARB", "Hypertension"],
            ["4", "Omeprazole 20mg", "Proton pump inhibitor", "GERD"],
            ["5", "Atorvastatin 10mg/20mg/40mg", "Statin", "Hyperlipidaemia"],
            ["6", "Hydrochlorothiazide 25mg", "Thiazide diuretic", "Hypertension"],
            ["7", "Amoxicillin 250mg/500mg", "Penicillin antibiotic", "Bacterial infections"],
            ["8", "Enalapril 5mg/10mg/20mg", "ACE inhibitor", "Hypertension"],
            ["9", "Aspirin 81mg", "Antiplatelet", "Cardiovascular prevention"],
            ["10", "Glimepiride 1mg/2mg/4mg", "Sulphonylurea", "Type 2 diabetes"],
            ["11", "Salbutamol inhaler 100mcg", "Beta-2 agonist", "Asthma"],
            ["12", "Diclofenac 50mg/75mg", "NSAID", "Pain, inflammation"],
            ["13", "Fluoxetine 20mg", "SSRI", "Depression"],
            ["14", "Ciprofloxacin 500mg", "Fluoroquinolone", "Bacterial infections"],
            ["15", "Lisinopril 5mg/10mg/20mg", "ACE inhibitor", "Hypertension"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Jamaica-Specific Prescribing Observations",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "ARBs (Losartan) are more popular in Jamaica relative to ACE inhibitors compared to T&T — partly due to better tolerance (no ACE-inhibitor cough) in the population",
            "Glimepiride is more commonly prescribed as a second-line antidiabetic than Glibenclamide (the opposite of T&T's pattern)",
            "Jamaican doctors frequently prescribe combination antihypertensives: Losartan/Hydrochlorothiazide, Amlodipine/Valsartan combinations are popular",
            "Antibiotics are prescribed aggressively for upper respiratory infections; azithromycin (the 'Z-Pack') is extremely popular",
            "Herbal and traditional remedies are widely used: cerasee tea (Momordica charantia) for diabetes and blood cleansing is a Jamaican staple",
            "Mental health prescribing is increasing but still stigmatised; many patients request that psychiatric medications be dispensed discreetly",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Cultural Sensitivity — Mental Health",
          body: "Mental health carries significant stigma in Jamaica. Patients collecting medications for depression, psychosis, or epilepsy may be anxious about being seen at the pharmacy counter. As a pharmacy technician, always handle these prescriptions with the same discretion and respect as any other. Never discuss a patient's mental health medication within earshot of other customers. Use opaque bags and avoid labelling that identifies the condition on the outside of the package.",
        },
        {
          type: "key-term",
          term: "Cerasee (Momordica charantia)",
          definition:
            "Also known as bitter melon or bitter gourd, cerasee is one of Jamaica's most widely used traditional remedies. Brewed as a tea, it is believed to lower blood sugar, purify the blood, and treat skin conditions. While there is some scientific evidence for its hypoglycaemic properties, it can interact with prescription diabetes medications and cause dangerously low blood sugar. Always ask diabetic patients if they are drinking cerasee tea.",
        },
        {
          type: "knowledge-check",
          question: "A Jamaican patient with Type 2 diabetes tells you they drink cerasee tea daily alongside their Metformin and Glimepiride. Why is this potentially concerning?",
          options: [
            "Cerasee tea neutralises the effect of Metformin",
            "Cerasee has hypoglycaemic properties that could cause dangerously low blood sugar when combined with antidiabetic medications",
            "Cerasee tea is illegal to consume while on prescription medication in Jamaica",
            "There is no concern — cerasee tea has no effect on blood sugar",
          ],
          correctIndex: 1,
          explanation:
            "Cerasee (Momordica charantia / bitter melon) has documented hypoglycaemic properties. When taken alongside prescription antidiabetic medications like Metformin and Glimepiride, it can cause additive blood sugar lowering, potentially resulting in hypoglycaemia (dangerously low blood sugar). The pharmacist should be alerted, and the patient counselled about this interaction.",
        },
      ],
    },
    // ── Lesson 2.5 ──────────────────────────────────────────────────────────
    {
      id: "m2-l5",
      title: "The Jamaican Drug Supply Chain: NHF, NHIA & Private Distributors",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "How Medications Reach Jamaican Pharmacies",
        },
        {
          type: "text",
          body: "Jamaica's pharmaceutical supply chain is a multi-layered system involving government agencies, quasi-governmental bodies, private distributors, and international suppliers. Understanding this chain is important for pharmacy technicians because stock availability, pricing, and even the brands available on your shelves depend on how efficiently these supply channels operate.",
        },
        {
          type: "heading",
          level: 3,
          text: "Key Players in the Supply Chain",
        },
        {
          type: "key-term",
          term: "NHIA (National Health Insurance Authority — proposed)",
          definition:
            "Jamaica has been working toward establishing a National Health Insurance Authority to coordinate health financing and pharmaceutical procurement at a national level. While not yet fully operational as of 2025, the NHIA concept represents Jamaica's vision for a more integrated and equitable health system.",
        },
        {
          type: "table",
          caption: "Jamaica's Pharmaceutical Supply Chain — Key Entities",
          headers: ["Entity", "Role", "Impact on Pharmacy Technicians"],
          rows: [
            [
              "National Health Fund (NHF)",
              "Negotiates drug prices, maintains the NHF formulary, subsidises patient medication costs",
              "Determines which medications are subsidised and at what price; affects dispensing decisions daily",
            ],
            [
              "Health Corporation Limited (HCL)",
              "Procures and distributes pharmaceuticals for the public sector (government hospitals and health centres)",
              "Supplies public-sector pharmacies; technicians in government facilities receive stock through HCL channels",
            ],
            [
              "Private Distributors (e.g. Kirk Distributors, AJAS Pharma, Medical Disposables & Supplies)",
              "Import and distribute pharmaceuticals to private pharmacies across Jamaica",
              "Primary supply source for community pharmacies; pricing, availability, and delivery speed vary by distributor",
            ],
            [
              "International Manufacturers / Exporters",
              "Produce medications (generics and brands) for the Jamaican market; must be approved by the regulatory authorities",
              "Product availability depends on import approvals, shipping logistics, and foreign exchange rates",
            ],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Supply Chain Challenges Specific to Jamaica",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Foreign exchange volatility: Jamaica imports nearly all medications in USD; J$ depreciation increases costs and can cause sudden price spikes",
            "Port clearance delays: Medications can sit in customs at Kingston Harbour for weeks if documentation is incomplete or duties disputed",
            "Limited cold chain infrastructure: Maintaining temperature-controlled logistics from port to pharmacy is challenging, especially for rural parishes",
            "Single-source dependency: Some medications are sourced from a single supplier — if that supplier has issues, the entire island is affected",
            "Hurricane disruption: Jamaica sits in the hurricane belt; major storms can disrupt supply chains for weeks",
            "Generic availability gaps: Not all generics approved internationally are registered for sale in Jamaica, limiting substitution options",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Role of Health Corporation Limited (HCL)",
          body: "HCL is Jamaica's equivalent of NIPDEC in T&T. It is the government entity responsible for procuring and distributing pharmaceuticals and medical supplies to public health facilities. If you work in a public hospital or health centre pharmacy in Jamaica, your medications come through HCL. Like NIPDEC, HCL faces challenges with procurement timelines, budget constraints, and occasional stock-outs.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Distributor Relationships Matter",
          body: "In Jamaica's private pharmacy sector, maintaining good relationships with multiple distributors is essential for ensuring medication availability. Experienced pharmacy managers typically order from 2-3 distributors to avoid single-source dependency. As a pharmacy technician managing inventory, you should maintain contact details for all your pharmacy's approved suppliers and know their typical delivery schedules and minimum order requirements.",
        },
        {
          type: "knowledge-check",
          question: "What is the primary government entity responsible for procuring and distributing pharmaceuticals to public health facilities in Jamaica?",
          options: [
            "National Health Fund (NHF)",
            "Health Corporation Limited (HCL)",
            "Pharmacy Council of Jamaica (PCJ)",
            "Jamaica Pharmaceutical Association (JPA)",
          ],
          correctIndex: 1,
          explanation:
            "Health Corporation Limited (HCL) is the government entity responsible for procuring and distributing pharmaceuticals and medical supplies to public health facilities in Jamaica. The NHF focuses on subsidising medication costs for individuals, while the PCJ regulates the profession.",
        },
      ],
    },
    // ── Lesson 2.6 ──────────────────────────────────────────────────────────
    {
      id: "m2-l6",
      title: "Working in Jamaican Pharmacies: Community, Hospital & NHF Sites",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Pharmacy Practice Settings in Jamaica",
        },
        {
          type: "text",
          body: "Jamaica offers a vibrant and varied pharmacy landscape. From the bustling Fontana pharmacies in Kingston and Montego Bay to rural parish health centres in Portland and Trelawny, the island provides diverse opportunities for pharmacy technicians. Each setting has its own character, pace, and challenges, but all share the common goal of getting the right medication to the right patient safely.",
        },
        {
          type: "heading",
          level: 3,
          text: "Community Pharmacy — The Fontana Factor",
        },
        {
          type: "text",
          body: "Fontana Pharmacy is Jamaica's largest and most well-known pharmacy chain, with multiple locations across the island. Founded in Jamaica, Fontana combines traditional pharmacy services with a modern retail experience that includes cosmetics, wellness products, and health screenings. For pharmacy technicians, Fontana represents the most structured and professionalised community pharmacy experience in Jamaica, with standardised operating procedures, training programmes, and career pathways.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Fontana Pharmacy: Jamaica's premier chain; high-volume, NHF-participating, standardised SOPs",
            "Hi-Lo / PriceSmart pharmacies: In-store pharmacies within supermarket chains; convenience-focused",
            "Independent pharmacies: Owner-operated, parish-based; often the only pharmacy in rural communities; personal patient relationships",
            "Typical hours: 8:30 AM – 7:00 PM weekdays; 9:00 AM – 5:00 PM Saturdays; limited Sunday hours",
            "NHF participation: Most community pharmacies participate in the NHF programme; a significant proportion of daily transactions",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Hospital Pharmacy",
        },
        {
          type: "text",
          body: "Jamaica's hospital pharmacy system centres on the University Hospital of the West Indies (UHWI) in Kingston, Kingston Public Hospital (KPH), and regional hospitals such as Cornwall Regional Hospital in Montego Bay and Mandeville Regional Hospital. UHWI is the premier teaching hospital and offers the most advanced pharmacy services, including clinical pharmacy, oncology support, and antiretroviral dispensing. Hospital pharmacy technicians in Jamaica typically work rotating shifts and handle a broader range of medication types than their community counterparts.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Cornwall Regional Hospital — A Cautionary Tale",
          body: "Cornwall Regional Hospital in Montego Bay experienced a prolonged crisis starting in 2018 when toxic mould was discovered in the building, leading to a partial evacuation and years of disrupted services. This event impacted pharmacy operations significantly and highlighted the vulnerability of hospital pharmacy infrastructure in the Caribbean. Pharmacy technicians working in hospital settings should be aware of building maintenance, ventilation, and environmental safety as factors that directly affect medication storage and patient care.",
        },
        {
          type: "heading",
          level: 3,
          text: "NHF Dispensing Sites & Health Centres",
        },
        {
          type: "text",
          body: "Jamaica operates a network of public health centres across all 14 parishes, many of which have dispensaries staffed by pharmacy personnel. These health centres primarily serve patients who cannot afford or access private pharmacies. Medications dispensed at health centres are from the government formulary and are provided at no cost or minimal cost. For pharmacy technicians, health centre dispensaries offer the opportunity to serve the most vulnerable populations and develop a deep understanding of the NCD burden in Jamaica's underserved communities.",
        },
        {
          type: "case-study",
          title: "Case Study: Rural Parish Pharmacy Access",
          scenario:
            "You are a pharmacy technician working at the only community pharmacy in a rural parish in eastern Jamaica. The nearest alternative pharmacy is 45 minutes away by car. A regular patient, Mrs. Campbell, comes in with an NHFCard prescription for Amlodipine 10mg and Metformin 1000mg. You are out of Metformin 1000mg but have 500mg tablets in stock. The pharmacist is on lunch break and will return in 30 minutes.",
          questions: [
            "Can you dispense Metformin 500mg (two tablets to make 1000mg) as a substitution without the pharmacist present?",
            "What should you communicate to Mrs. Campbell while she waits?",
            "How could better inventory management have prevented this situation?",
          ],
          discussion:
            "You cannot independently make the substitution decision or dispense without the pharmacist present — this exceeds the technician's scope of practice. Explain to Mrs. Campbell that the pharmacist will return shortly and can address the Metformin supply issue then. The pharmacist may approve dispensing two 500mg tablets to equal the 1000mg dose (a common and generally acceptable substitution) and process the NHF claim accordingly. The inventory issue should be flagged for the pharmacy's next order — monitoring fast-moving NHF items and maintaining safety stock is a core technician responsibility.",
        },
        {
          type: "island-comparison",
          title: "Government Health Programmes — Side by Side",
          description:
            "Comparing the major government pharmaceutical assistance programmes across the four islands.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Programme: CDAP (Chronic Disease Assistance Programme)",
                "Model: 100% free — no patient co-payment",
                "Covers: 22 chronic conditions, 60+ medications",
                "Dispensed through: Private community pharmacies",
                "ID required: National ID + CDAP prescription form",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Programme: NHF (National Health Fund) / NHFCard",
                "Model: Subsidy + co-payment (patient pays 30-50%)",
                "Covers: 17 chronic conditions",
                "Dispensed through: Participating community and hospital pharmacies",
                "ID required: NHFCard (electronic) + valid prescription",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Programme: Barbados Drug Service (BDS)",
                "Model: 100% free for formulary drugs through public facilities",
                "Covers: Broad national formulary; most common chronic disease medications",
                "Dispensed through: Polyclinics, QEH, and BDS-contracted pharmacies",
                "ID required: Barbados National ID + prescription from public-sector doctor",
              ],
            },
            {
              name: "Grenada",
              flag: "🇬🇩",
              details: [
                "Programme: General Hospital pharmacy + limited government subsidy",
                "Model: Free at government facilities; limited private-sector subsidy",
                "Covers: Essential medicines list; narrower than T&T or Jamaica",
                "Dispensed through: General Hospital pharmacy, health centres",
                "ID required: National ID + prescription",
              ],
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "Which pharmacy chain is the largest and most prominent in Jamaica?",
          options: [
            "SuperPharm",
            "Knights Pharmacy",
            "Fontana Pharmacy",
            "MedPlus Pharmacy",
          ],
          correctIndex: 2,
          explanation:
            "Fontana Pharmacy is Jamaica's largest and most well-known pharmacy chain. SuperPharm is the leading chain in Trinidad & Tobago, Knights is a well-known Barbadian brand, and MedPlus is a T&T chain.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m2-q1",
      question:
        "Which institution is the primary pharmacy-degree-granting university in Jamaica?",
      options: [
        "University of the West Indies (UWI) Mona",
        "University of Technology, Jamaica (UTech)",
        "Northern Caribbean University (NCU)",
        "University of the West Indies (UWI) St. Augustine",
      ],
      correctIndex: 1,
      explanation:
        "The University of Technology, Jamaica (UTech) is the primary provider of pharmacy education in Jamaica, offering the B.Sc. Pharmacy degree that is the standard qualification for pharmacist registration with the PCJ.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q2",
      question:
        "How does Jamaica's NHF payment model differ from T&T's CDAP?",
      options: [
        "NHF provides medications 100% free; CDAP requires a co-payment",
        "NHF requires a patient co-payment (typically 30-50%); CDAP provides medications 100% free",
        "Both programmes are identical — 100% free medications",
        "NHF is funded by employer contributions; CDAP by tobacco tax",
      ],
      correctIndex: 1,
      explanation:
        "Jamaica's NHF operates on a subsidy + co-payment model where the patient pays approximately 30-50% of the medication cost. T&T's CDAP provides medications entirely free to the patient with no co-payment required. This is the key structural difference between the two programmes.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m2-q3",
      question:
        "Under Jamaica's Dangerous Drugs Act, which schedule contains substances with NO accepted medical use?",
      options: [
        "Schedule 2",
        "Schedule 1",
        "Schedule 4",
        "Schedule 5",
      ],
      correctIndex: 1,
      explanation:
        "Schedule 1 of Jamaica's Dangerous Drugs Act includes substances with the highest restriction — no accepted medical use and high abuse potential. Examples include heroin, LSD, and MDMA.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q4",
      question:
        "A patient presents their NHFCard for a prescription of Atorvastatin 20mg. The NHF POS system shows the card expired last month. What should the pharmacy technician do?",
      options: [
        "Dispense the medication at full price and tell the patient to sort it out later",
        "Process the NHF claim anyway — the system will catch up eventually",
        "Inform the patient that their NHFCard has expired, advise them to renew it at an NHF office, and offer to fill the prescription at full private cost in the meantime",
        "Refuse to fill the prescription entirely",
      ],
      correctIndex: 2,
      explanation:
        "An expired NHFCard cannot be used to process subsidised claims. The technician should inform the patient, advise them on how to renew (at any NHF office), and offer to fill the prescription at the full private-pay price if the patient is willing. Refusing to fill entirely would be inappropriate — the prescription itself is still valid.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q5",
      question:
        "Which controlled substance has seen increasing misuse in Jamaica and is now subject to tightened prescribing controls?",
      options: [
        "Paracetamol",
        "Amoxicillin",
        "Tramadol",
        "Omeprazole",
      ],
      correctIndex: 2,
      explanation:
        "Tramadol has become one of the most problematic controlled substances in Jamaica and across the Caribbean. Originally considered lower-risk, it has seen increasing misuse and diversion, leading Jamaican authorities to tighten controls on its prescribing and dispensing.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q6",
      question:
        "What is the primary source of funding for Jamaica's National Health Fund (NHF)?",
      options: [
        "General taxation",
        "A special consumption tax on tobacco products",
        "International donor funding from PAHO",
        "National insurance contributions from employers",
      ],
      correctIndex: 1,
      explanation:
        "The NHF is funded primarily through a special consumption tax on tobacco products (the NHF Tobacco Levy). This creative funding mechanism ties a public health cost (treating chronic diseases) to a public health harm (tobacco use).",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q7",
      question:
        "A patient with diabetes tells you they drink cerasee tea daily. Why should this be flagged to the pharmacist?",
      options: [
        "Cerasee tea is a banned substance in Jamaica",
        "Cerasee can cause liver damage when combined with any medication",
        "Cerasee has hypoglycaemic properties that could cause dangerously low blood sugar when combined with antidiabetic medications",
        "Cerasee tea nullifies the effect of all diabetes medications",
      ],
      correctIndex: 2,
      explanation:
        "Cerasee (Momordica charantia / bitter melon) has documented hypoglycaemic properties. Combined with prescription antidiabetic medications, it can cause additive blood sugar lowering and potentially dangerous hypoglycaemia. This herb-drug interaction should be flagged to the pharmacist.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q8",
      question:
        "Which government entity is responsible for procuring and distributing pharmaceuticals to public health facilities in Jamaica?",
      options: [
        "Pharmacy Council of Jamaica (PCJ)",
        "Health Corporation Limited (HCL)",
        "National Health Fund (NHF)",
        "Jamaica Pharmaceutical Association (JPA)",
      ],
      correctIndex: 1,
      explanation:
        "Health Corporation Limited (HCL) is Jamaica's state entity responsible for procuring and distributing pharmaceuticals and medical supplies to public health facilities — similar in function to NIPDEC in Trinidad & Tobago.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q9",
      question:
        "Select ALL that apply: Which of the following are conditions covered by the NHFCard programme?",
      options: [
        "Hypertension",
        "Sickle cell disease",
        "Malaria",
        "Glaucoma",
        "Dengue fever",
      ],
      correctIndex: 0,
      explanation:
        "Hypertension, sickle cell disease, and glaucoma are all covered by the NHFCard programme. Malaria and dengue fever are acute infectious diseases and are not covered under the NHF's chronic disease benefit programme.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 3],
      },
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q10",
      question:
        "True or false: In Jamaica, cannabis has been fully legalised and can be dispensed by pharmacy technicians.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 1,
      explanation:
        "False. Jamaica decriminalised possession of small quantities of cannabis (up to 2 ounces) in 2015, but cannabis remains a controlled substance. It is NOT legal for pharmacy dispensing and has no place in current pharmacy practice unless specific pharmaceutical cannabis products receive formal regulatory approval.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 3 — Barbados
// ============================================================================

const module3: Module = {
  id: "m3-barbados",
  number: 3,
  title: "Barbados",
  description:
    "Explore pharmacy practice on the island of Barbados — from the Barbados Drug Service's free medication programme and Queen Elizabeth Hospital pharmacy operations to the import-dependent supply chain and the unique rhythm of Barbadian community pharmacy. This module prepares you for the structured, well-regulated pharmacy environment that Barbados is known for.",
  learningObjectives: [
    "Describe the Barbados Drug Service (BDS) and its role in providing free medications through the public health system",
    "Explain pharmacy operations at Queen Elizabeth Hospital and the polyclinic network",
    "Outline the registration and licensing requirements for pharmacy practice in Barbados",
    "Analyse common prescribing patterns in Barbados and relate them to the island's disease burden",
    "Evaluate the challenges of importing medications to a small island state and the quality assurance measures in place",
  ],
  lessons: [
    // ── Lesson 3.1 ──────────────────────────────────────────────────────────
    {
      id: "m3-l1",
      title: "The Barbados Drug Service (BDS): National Formulary & Free Drug Dispensing",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Barbados Drug Service",
        },
        {
          type: "text",
          body: "The Barbados Drug Service (BDS) is the division within the Ministry of Health and Wellness responsible for the procurement, storage, distribution, and quality assurance of pharmaceuticals throughout Barbados's public health system. What makes Barbados distinctive in the Caribbean is that medications on the BDS national formulary are provided free of charge to all Barbadians through the public health system — at polyclinics, the Queen Elizabeth Hospital, and contracted community pharmacies. This universal free medication model is closer to T&T's CDAP than Jamaica's NHF co-payment system, but it operates through the public sector rather than private pharmacies.",
        },
        {
          type: "key-term",
          term: "Barbados Drug Service (BDS)",
          definition:
            "The division of Barbados's Ministry of Health and Wellness that manages the national drug formulary, procures pharmaceuticals for the public system, ensures quality standards for imported medications, and oversees the distribution of free medications through polyclinics, the QEH, and contracted pharmacies. Established to ensure equitable access to essential medicines for all Barbadians.",
        },
        {
          type: "heading",
          level: 3,
          text: "The BDS National Formulary",
        },
        {
          type: "text",
          body: "The BDS maintains a national formulary — an approved list of medications available through the public health system. This formulary is carefully curated based on the island's disease burden, WHO essential medicines guidelines, cost-effectiveness analysis, and clinical expert recommendations. Medications on the formulary are procured by the BDS through international tenders and distributed to public health facilities. The formulary is reviewed and updated periodically, with additions and removals reflecting changes in medical practice and available evidence.",
        },
        {
          type: "table",
          caption: "BDS Formulary — Selected Therapeutic Categories and Key Medications",
          headers: ["Category", "BDS Formulary Medications", "Notes"],
          rows: [
            ["Antihypertensives", "Amlodipine, Enalapril, Losartan, Hydrochlorothiazide, Atenolol, Methyldopa", "Methyldopa remains on the formulary for pregnancy-related hypertension"],
            ["Antidiabetics", "Metformin, Glibenclamide, Gliclazide, Insulin (Human Regular & NPH)", "Newer agents (DPP-4 inhibitors, SGLT2 inhibitors) not yet widely available on the public formulary"],
            ["Antibiotics", "Amoxicillin, Co-amoxiclav (Augmentin), Ciprofloxacin, Azithromycin, Metronidazole, Doxycycline", "Antibiotic stewardship is a priority — BDS monitors prescribing patterns"],
            ["Statins", "Simvastatin, Atorvastatin", "Simvastatin historically preferred on the public formulary for cost reasons"],
            ["Respiratory", "Salbutamol, Beclomethasone, Ipratropium, Prednisolone", "Inhaler supply chain is closely monitored due to import dependency"],
            ["Mental Health", "Amitriptyline, Fluoxetine, Haloperidol, Risperidone, Diazepam, Carbamazepine", "Psychiatric medications dispensed through the Psychiatric Hospital pharmacy and polyclinics"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "How Free Dispensing Works",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Patient visits a public-sector doctor (at a polyclinic or QEH clinic)",
            "Doctor prescribes from the BDS national formulary and writes the prescription on the standard public-sector prescription form",
            "Patient takes the prescription to the polyclinic dispensary, QEH pharmacy, or a BDS-contracted community pharmacy",
            "Pharmacy technician receives the prescription, verifies it against the formulary, and prepares the medication",
            "Pharmacist performs the final check",
            "Patient receives their medication free of charge — no co-payment, no insurance claim, no NHF card needed",
            "The BDS covers the cost entirely as part of Barbados's public health commitment",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Public vs. Private — The Barbados Split",
          body: "In Barbados, there is a clear split between the public and private pharmacy systems. Patients who see public-sector doctors get their formulary medications free through the BDS system. Patients who see private doctors (and want medications not on the formulary, or prefer branded products) pay out of pocket at private community pharmacies. Many Barbadians use both systems — getting their chronic medications free through the polyclinic while purchasing specific items privately.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Practical Tip for Technicians",
          body: "When working in a BDS-affiliated dispensing site, always check the current formulary status of prescribed medications. The BDS formulary is more limited than what is available in private pharmacies. If a doctor prescribes something off-formulary, flag it to the pharmacist rather than substituting on your own — the pharmacist will contact the prescriber to discuss an appropriate formulary alternative.",
        },
        {
          type: "knowledge-check",
          question: "How are medications on the BDS national formulary provided to patients in Barbados's public health system?",
          options: [
            "Through a co-payment model similar to Jamaica's NHF",
            "Free of charge to all Barbadians through polyclinics, QEH, and contracted pharmacies",
            "At a discounted rate based on the patient's income level",
            "Only to patients with government-issued health insurance cards",
          ],
          correctIndex: 1,
          explanation:
            "Barbados provides BDS formulary medications free of charge to all Barbadians through the public health system — polyclinics, Queen Elizabeth Hospital, and BDS-contracted community pharmacies. No co-payment, insurance card, or means testing is required.",
        },
      ],
    },
    // ── Lesson 3.2 ──────────────────────────────────────────────────────────
    {
      id: "m3-l2",
      title: "Queen Elizabeth Hospital (QEH) Pharmacy Operations",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Pharmacy at the Queen Elizabeth Hospital",
        },
        {
          type: "text",
          body: "The Queen Elizabeth Hospital (QEH) in Bridgetown is Barbados's only public hospital and the island's largest healthcare facility. Its pharmacy department is the cornerstone of hospital pharmacy practice in Barbados, handling inpatient dispensing, outpatient prescriptions, IV admixture preparation, oncology support, and controlled substance management for the entire island's public hospital system. For pharmacy technicians, working at QEH pharmacy represents the most complex and rewarding hospital pharmacy experience available in Barbados.",
        },
        {
          type: "key-term",
          term: "Queen Elizabeth Hospital (QEH)",
          definition:
            "Barbados's sole public hospital, located in Bridgetown. A 600+ bed facility providing secondary and tertiary care, including surgery, internal medicine, obstetrics, paediatrics, oncology, and emergency services. The QEH pharmacy department is the island's largest, serving both inpatients and a high-volume outpatient dispensary.",
        },
        {
          type: "heading",
          level: 3,
          text: "QEH Pharmacy Department Structure",
        },
        {
          type: "table",
          caption: "QEH Pharmacy Sections",
          headers: ["Section", "Function", "Technician Role"],
          rows: [
            ["Inpatient Dispensary", "Prepares and dispenses medications for all admitted patients; ward stock management", "Filling ward stock requisitions, preparing unit-dose medications, checking expiry dates"],
            ["Outpatient Dispensary", "Dispenses prescriptions for patients attending QEH clinics and discharged patients", "Receiving prescriptions, data entry, medication preparation, patient queue management"],
            ["IV Admixture / Sterile Compounding", "Prepares intravenous medications, chemotherapy pre-packs, and parenteral nutrition", "Assisting with preparation under pharmacist supervision; maintaining aseptic technique"],
            ["Drug Information Centre", "Provides drug information to medical staff and answers clinical queries", "Maintaining reference materials; assisting with literature searches"],
            ["Controlled Substance Unit", "Manages all Schedule 1-5 substances; maintains the hospital narcotic register", "Assisting with controlled drug counts; recording dispensing in the register under pharmacist oversight"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "A Day in the QEH Outpatient Dispensary",
        },
        {
          type: "text",
          body: "The QEH outpatient dispensary is one of the busiest pharmacy environments in Barbados. On a typical weekday, it processes 300-500 prescriptions. Patients arrive from various QEH clinics — medical, surgical, obstetric, psychiatric — and often wait in long queues. The technician's role is to receive prescriptions, enter them into the dispensing system, pull and prepare medications from the BDS formulary stock, and ensure accurate labelling. Speed and accuracy are equally important — patients may have been waiting since early morning, but a dispensing error can be fatal.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "7:00 AM — Technicians arrive and check overnight requisitions; verify controlled substance counts from the previous shift",
            "8:00 AM — Outpatient dispensary opens; queue of patients from morning clinics begins to form",
            "8:00 AM – 12:00 PM — Peak dispensing hours; process prescriptions as quickly and accurately as possible",
            "12:00 PM – 1:00 PM — Reduced volume; some technicians take lunch while others cover the counter",
            "1:00 PM – 3:30 PM — Afternoon clinic patients arrive; processing continues; inventory checks for fast-moving items",
            "3:30 PM — Outpatient dispensary closes; remaining prescriptions completed; stock reconciliation; shift handover",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Surviving the QEH Queue",
          body: "Patient frustration is real in the QEH outpatient dispensary — waits of 1-2 hours are not uncommon. As a pharmacy technician, your demeanour matters. A calm, professional attitude, brief explanations about wait times, and efficient processing make a significant difference. Never rush accuracy to reduce the queue — a dispensing error will cause far more harm than an extra 15-minute wait.",
        },
        {
          type: "knowledge-check",
          question: "How many prescriptions does the QEH outpatient dispensary typically process on a weekday?",
          options: [
            "50-100",
            "100-200",
            "300-500",
            "1,000+",
          ],
          correctIndex: 2,
          explanation:
            "The QEH outpatient dispensary processes approximately 300-500 prescriptions on a typical weekday, making it one of the busiest pharmacy environments in Barbados. This high volume requires technicians who are both fast and accurate.",
        },
      ],
    },
    // ── Lesson 3.3 ──────────────────────────────────────────────────────────
    {
      id: "m3-l3",
      title: "Barbados Pharmacy Registration & Licensing Framework",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Pharmacy Regulation in Barbados",
        },
        {
          type: "text",
          body: "Pharmacy practice in Barbados is regulated through a combination of the Pharmacy Act (Cap. 372D), the Drug Service Act, and oversight by the Chief Medical Officer (CMO) and the Barbados Drug Service. While Barbados does not have a standalone Pharmacy Council in the same way that Jamaica does, the regulatory framework is comprehensive and pharmacy practitioners must comply with registration, premises licensing, and professional conduct requirements.",
        },
        {
          type: "key-term",
          term: "Pharmacy Act (Cap. 372D)",
          definition:
            "The primary legislation governing pharmacy practice in Barbados. It regulates who may practise pharmacy, the registration of pharmacists, the licensing of pharmacy premises, and the standards of professional conduct expected of pharmacy practitioners. Enforced in conjunction with the Drug Service Act and the Misuse of Drugs Act.",
        },
        {
          type: "heading",
          level: 3,
          text: "Pharmacist Registration in Barbados",
        },
        {
          type: "text",
          body: "To practise as a pharmacist in Barbados, an individual must hold a recognised pharmacy degree, complete the required pre-registration training, and be registered under the Pharmacy Act. The registration process involves submission of qualifications to the Barbados authorities for verification, a period of supervised practice, and entry onto the register of pharmacists. The University of the West Indies at Cave Hill does not currently offer a full pharmacy degree, so most Barbadian pharmacists are trained at UWI St. Augustine (Trinidad) or internationally.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Obtain a recognised pharmacy degree (commonly UWI St. Augustine B.Sc. Pharmacy, or approved international equivalent)",
            "Submit application with certified copies of qualifications, transcripts, and character references",
            "Qualifications are assessed for equivalence by the Barbados authorities",
            "Complete any required supervised practice period in a Barbados pharmacy",
            "Registration is granted and the pharmacist is added to the register",
            "Annual renewal of practising licence required",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Pharmacy Technicians in Barbados",
        },
        {
          type: "text",
          body: "Similar to Trinidad & Tobago, Barbados does not currently have a separate statutory registration category for pharmacy technicians. Technicians work under the direct supervision of a registered pharmacist and their practice is covered by the pharmacist's registration. However, the Barbados health system increasingly recognises the value of trained technicians, particularly in the high-volume public-sector settings like QEH and the polyclinics. PIXOPHARM certification will position you as a qualified, professional technician in a market that is moving toward formal recognition.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The Barbados Advantage",
          body: "Barbados has a well-regulated health system with relatively high standards of practice. The island's small size means that the pharmacy community is tight-knit — reputation matters enormously. Professional conduct, accuracy, and continuing education are not just requirements but cultural expectations. This makes Barbados an excellent environment for a pharmacy technician who takes their career seriously.",
        },
        {
          type: "table",
          caption: "Pharmacy Registration — Barbados vs. Regional Comparison",
          headers: ["Aspect", "Barbados", "Trinidad & Tobago", "Jamaica"],
          rows: [
            ["Primary Legislation", "Pharmacy Act (Cap. 372D)", "Pharmacy Board Act (Ch. 29:52)", "Pharmacy Act (1975)"],
            ["Regulatory Body", "CMO / BDS / Ministry of Health", "Pharmacy Board of T&T", "Pharmacy Council of Jamaica"],
            ["Registration Exam", "Not always required for UWI graduates", "Yes — Board examination required", "Yes — PCJ examination required"],
            ["Technician Registration", "No separate category", "No separate category", "Increasingly recognised; distinct from 'qualified dispenser'"],
            ["CPD Requirement", "Encouraged but not yet mandatory", "Encouraged but not yet mandatory", "Moving toward mandatory CPD"],
            ["Annual Renewal", "Yes", "Yes — before 31 January", "Yes"],
          ],
        },
        {
          type: "knowledge-check",
          question: "Where do most Barbadian pharmacists complete their pharmacy education?",
          options: [
            "University of the West Indies (UWI) Cave Hill, Barbados",
            "University of Technology, Jamaica (UTech)",
            "University of the West Indies (UWI) St. Augustine, Trinidad",
            "St. George's University, Grenada",
          ],
          correctIndex: 2,
          explanation:
            "Since UWI Cave Hill in Barbados does not currently offer a full pharmacy degree, most Barbadian pharmacists are trained at UWI St. Augustine in Trinidad, which offers the B.Sc. Pharmacy programme. Some also obtain their qualifications internationally.",
        },
      ],
    },
    // ── Lesson 3.4 ──────────────────────────────────────────────────────────
    {
      id: "m3-l4",
      title: "Common Prescribing Patterns & Top Dispensed Medications in Barbados",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "What Barbados Prescribes Most",
        },
        {
          type: "text",
          body: "Barbados has one of the highest life expectancies in the Caribbean (approximately 78 years), which means a large and growing elderly population managing multiple chronic conditions. The island's disease burden is heavily dominated by non-communicable diseases — hypertension, diabetes, cardiovascular disease, and chronic kidney disease — which drive the vast majority of prescribing. Barbados also has notable rates of certain conditions like sickle cell disease and kidney disease (the island has a disproportionately high rate of end-stage renal disease for its population size).",
        },
        {
          type: "heading",
          level: 3,
          text: "Top Dispensed Medications in Barbadian Pharmacies",
        },
        {
          type: "table",
          caption: "Most Commonly Dispensed Medications in Barbados (approximate ranking)",
          headers: ["Rank", "Medication", "Class", "Primary Indication"],
          rows: [
            ["1", "Amlodipine 5mg/10mg", "Calcium channel blocker", "Hypertension"],
            ["2", "Metformin 500mg/850mg", "Biguanide", "Type 2 diabetes"],
            ["3", "Enalapril 5mg/10mg/20mg", "ACE inhibitor", "Hypertension, renal protection"],
            ["4", "Simvastatin 20mg/40mg", "Statin", "Hyperlipidaemia"],
            ["5", "Omeprazole 20mg", "Proton pump inhibitor", "GERD"],
            ["6", "Hydrochlorothiazide 25mg", "Thiazide diuretic", "Hypertension"],
            ["7", "Aspirin 81mg", "Antiplatelet", "Cardiovascular prevention"],
            ["8", "Amoxicillin 250mg/500mg", "Penicillin antibiotic", "Bacterial infections"],
            ["9", "Losartan 50mg/100mg", "ARB", "Hypertension, diabetic nephropathy"],
            ["10", "Gliclazide 80mg", "Sulphonylurea", "Type 2 diabetes"],
            ["11", "Salbutamol inhaler 100mcg", "Beta-2 agonist", "Asthma"],
            ["12", "Furosemide 40mg", "Loop diuretic", "Heart failure, oedema"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Barbados-Specific Prescribing Observations",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "ACE inhibitors (Enalapril) are more prominent than in Jamaica or T&T — linked to the high prevalence of diabetic nephropathy and the renal-protective benefits of ACE inhibition",
            "Simvastatin is the preferred statin on the BDS formulary (cost-driven); private pharmacies also dispense Atorvastatin and Rosuvastatin",
            "Furosemide usage is higher than on other islands, reflecting Barbados's significant heart failure and renal disease population",
            "Antibiotic prescribing is more conservative than in Jamaica or T&T; Barbados has invested in antibiotic stewardship programmes",
            "Sickle cell disease management medications (Hydroxyurea, Folic acid) are a notable part of the BDS formulary",
            "Barbados has a lower rate of herbal/traditional remedy use than Jamaica or T&T, though 'bush tea' culture exists",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Chronic Kidney Disease — A Barbadian Reality",
          body: "Barbados has a disproportionately high rate of chronic kidney disease (CKD) and end-stage renal disease (ESRD). Many patients on your dispensing counter will be managing hypertension, diabetes, AND kidney disease simultaneously. This means you will frequently see prescriptions combining ACE inhibitors or ARBs (for renal protection), erythropoietin-stimulating agents (for renal anaemia), phosphate binders, and bicarbonate supplements. Understanding the renal medication regimen is especially valuable for pharmacy technicians in Barbados.",
        },
        {
          type: "key-term",
          term: "Diabetic Nephropathy",
          definition:
            "Kidney damage caused by long-standing diabetes mellitus. It is a leading cause of chronic kidney disease and end-stage renal disease in Barbados. ACE inhibitors (like Enalapril) and ARBs (like Losartan) are prescribed both for blood pressure control and to slow the progression of diabetic kidney damage.",
        },
        {
          type: "knowledge-check",
          question: "Why is Enalapril (an ACE inhibitor) more prominently prescribed in Barbados compared to some other Caribbean islands?",
          options: [
            "It is the cheapest antihypertensive available in Barbados",
            "Barbados has a high prevalence of diabetic nephropathy, and ACE inhibitors provide renal protection",
            "Barbadian patients prefer the taste of Enalapril tablets",
            "The PCJ mandates ACE inhibitors as first-line therapy",
          ],
          correctIndex: 1,
          explanation:
            "Barbados has a disproportionately high rate of chronic kidney disease and diabetic nephropathy. ACE inhibitors like Enalapril are prescribed both for blood pressure control and for their proven renal-protective benefits in patients with diabetic kidney disease, making them more prominent in Barbadian prescribing than on some other islands.",
        },
      ],
    },
    // ── Lesson 3.5 ──────────────────────────────────────────────────────────
    {
      id: "m3-l5",
      title: "Importing Medications to Barbados: Customs, Licensing & QA",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Barbados's Import-Dependent Pharmaceutical Supply",
        },
        {
          type: "text",
          body: "Barbados imports virtually 100% of its pharmaceutical products. The island has no domestic pharmaceutical manufacturing capacity, meaning every tablet, capsule, inhaler, and injectable that you dispense has been produced overseas, shipped across the ocean, cleared through customs, and transported to your pharmacy. Understanding this import process is important for pharmacy technicians because it directly affects medication availability, cost, and the quality assurance measures you must follow.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Import Process — From Manufacturer to Pharmacy",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Manufacturer (typically India, Europe, USA, or other CARICOM countries) produces the medication to GMP standards",
            "The product must be registered with the Barbados Drug Service for public-sector use, or approved by the relevant authority for private-sector importation",
            "Importer (BDS for public sector; licensed pharmaceutical importers for private sector) places the order",
            "Medications are shipped to Barbados, typically by sea (bulk orders) or air (urgent/cold-chain items)",
            "Arrival at the Bridgetown Port or Grantley Adams International Airport — Barbados Customs and Excise inspects documentation",
            "Pharmaceutical imports require: Import licence, Certificate of Pharmaceutical Product (CPP), batch certificates, proof of GMP compliance",
            "BDS or the licensed importer arranges transport to storage facilities (temperature-controlled where required)",
            "Quality assurance checks: visual inspection, temperature log review, batch number verification, expiry date confirmation",
            "Distribution to pharmacies, polyclinics, QEH, and contracted dispensing sites",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Cold Chain Integrity",
          body: "In Barbados's tropical climate (average temperature 26-30°C), maintaining cold chain integrity for temperature-sensitive medications is a constant challenge. Insulin, certain biologics, some eye drops, and vaccines must be kept at 2-8°C from manufacturer to patient. As a pharmacy technician, always check the temperature monitor on incoming deliveries. If a cold-chain item arrives with a temperature excursion (the monitor shows it exceeded the acceptable range), do NOT accept it — report it to the pharmacist immediately.",
        },
        {
          type: "heading",
          level: 3,
          text: "Key Regulatory Requirements for Pharmaceutical Imports",
        },
        {
          type: "table",
          caption: "Pharmaceutical Import Requirements for Barbados",
          headers: ["Requirement", "Description", "Who Issues It"],
          rows: [
            ["Import Licence", "Required for all pharmaceutical imports; specifies products, quantities, and importer details", "Barbados Ministry of Health / CMO"],
            ["Certificate of Pharmaceutical Product (CPP)", "Confirms the product is approved in the country of origin and manufactured to GMP standards", "Regulatory authority in the manufacturing country"],
            ["Batch Certificate / Certificate of Analysis", "Provides quality specifications for the specific batch being imported (potency, purity, dissolution, etc.)", "Manufacturer or independent testing laboratory"],
            ["GMP Certificate", "Confirms the manufacturing facility meets Good Manufacturing Practice standards", "Regulatory authority in the manufacturing country"],
            ["Controlled Substance Permit", "Additional permit required for importing any controlled or scheduled substance", "Barbados Ministry of Health / Drug Regulatory Authority"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "CARICOM Advantage — Caribbean Regulatory System",
          body: "As part of CARICOM, Barbados participates in the Caribbean Regulatory System (CRS), which aims to streamline drug registration across member states. Under the CRS, a medication approved and registered in one CARICOM country may receive expedited review in another. This reduces duplication of regulatory effort and can speed up the availability of new medications in Barbados. However, the CRS is still evolving and full mutual recognition is not yet achieved.",
        },
        {
          type: "knowledge-check",
          question: "What should a pharmacy technician do if a cold-chain delivery arrives and the temperature monitor shows the medication exceeded 8°C during transit?",
          options: [
            "Accept the delivery but place the medication in the refrigerator immediately",
            "Do NOT accept the delivery — report the temperature excursion to the pharmacist",
            "Accept the delivery and make a note in the inventory log",
            "Return the medication to the delivery driver without informing anyone",
          ],
          correctIndex: 1,
          explanation:
            "A temperature excursion means the cold-chain has been broken and the medication's stability, efficacy, and safety may be compromised. The technician should refuse the delivery and immediately report the issue to the pharmacist, who will determine the appropriate course of action (which may include contacting the supplier for replacement and filing a quality incident report).",
        },
      ],
    },
    // ── Lesson 3.6 ──────────────────────────────────────────────────────────
    {
      id: "m3-l6",
      title: "Working in Barbadian Pharmacies: Community, Hospital & Polyclinic",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Pharmacy Practice Settings in Barbados",
        },
        {
          type: "text",
          body: "Barbados, with a population of approximately 287,000, has a compact but well-organised pharmacy landscape. The island's small size means that no pharmacy is more than 45 minutes from any other, creating a close-knit professional community where everyone — pharmacists, technicians, doctors, and patients — tends to know each other. This intimacy shapes pharmacy practice in ways that are unique to small island states.",
        },
        {
          type: "heading",
          level: 3,
          text: "Community Pharmacy",
        },
        {
          type: "text",
          body: "Barbados has approximately 50-60 community pharmacies spread across the island, with the highest concentration in Bridgetown, Holetown, and Oistins. Well-known pharmacy brands include Collins Pharmacy (one of the oldest), Knights Pharmacy, and several independent owner-operated pharmacies. Community pharmacy in Barbados tends to be more traditional and relationship-driven than in larger islands — pharmacists and technicians know their regular patients by name and often serve multiple generations of the same family.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Collins Pharmacy: Historic Barbadian pharmacy brand; multiple locations",
            "Knights Pharmacy: Well-known chain with locations in Bridgetown and surrounding parishes",
            "Independent pharmacies: Family-owned, parish-based; strong community ties",
            "Typical hours: 8:00 AM – 6:00 PM weekdays; 8:00 AM – 1:00 PM Saturdays; limited Sunday service",
            "Private-sector dispensing: Patients with private doctors pay full price; some have private health insurance that covers a portion",
            "Tourism impact: Tourist areas (south and west coast) see seasonal demand for travel-related medications, sunburn treatments, and emergency prescriptions",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "The Polyclinic Network",
        },
        {
          type: "text",
          body: "Barbados operates a network of polyclinics — public primary-care facilities distributed across the island's 11 parishes. Each polyclinic has a dispensary where BDS formulary medications are provided free of charge. Polyclinic dispensaries are staffed by pharmacists and pharmacy technicians employed by the Ministry of Health. The work is high-volume for a small-island setting, with the busiest polyclinics (such as Randall Phillips in Bridgetown) processing 150-250 prescriptions per day.",
        },
        {
          type: "table",
          caption: "Selected Barbados Polyclinics",
          headers: ["Polyclinic", "Parish", "Notes"],
          rows: [
            ["Randall Phillips Polyclinic", "St. Michael (Bridgetown)", "Busiest polyclinic; highest dispensing volume"],
            ["Winston Scott Polyclinic", "St. Michael", "Serves central Bridgetown and surrounding areas"],
            ["Edgar Cochrane Polyclinic", "Christ Church", "Serves the south coast; moderate volume"],
            ["Maurice Byer Polyclinic", "St. Lucy", "Serves the northern parishes; lower volume"],
            ["St. Philip Polyclinic", "St. Philip", "Serves the eastern parishes"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Polyclinic Pharmacy — What to Expect",
          body: "Working in a Barbados polyclinic dispensary is an excellent introduction to public-sector pharmacy. You will develop strong dispensing skills, learn the BDS formulary thoroughly, and gain experience with the chronic disease medications that dominate Caribbean prescribing. The pace is steady but manageable, supervision is consistent, and you will quickly become a familiar and trusted presence in the community you serve.",
        },
        {
          type: "island-comparison",
          title: "Pharmacy Workforce & Market Size Compared",
          description:
            "Understanding the scale of pharmacy practice on each island helps you assess career opportunities and work environment expectations.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Population: ~1.4 million",
                "Estimated pharmacies: 400+",
                "Major training institution: UWI St. Augustine",
                "Largest employer: Community pharmacy sector (SuperPharm, Bhagan's, independents)",
                "Public sector: 5 RHAs, multiple hospital and health centre pharmacies",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Population: ~2.8 million",
                "Estimated pharmacies: 500+",
                "Major training institution: UTech Jamaica",
                "Largest employer: Community pharmacy sector (Fontana, independents)",
                "Public sector: HCL-supplied hospitals and health centres across 14 parishes",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Population: ~287,000",
                "Estimated pharmacies: 50-60",
                "Major training institution: UWI St. Augustine (overseas) or international",
                "Largest employer: Split between QEH/polyclinics and community pharmacy",
                "Public sector: QEH + polyclinic network across 11 parishes",
              ],
            },
            {
              name: "Grenada",
              flag: "🇬🇩",
              details: [
                "Population: ~125,000",
                "Estimated pharmacies: 20-30",
                "Major training institution: None locally; UWI or SGU (medical, not pharmacy-specific)",
                "Largest employer: General Hospital + small community pharmacies",
                "Public sector: General Hospital, health centres",
              ],
            },
          ],
        },
        {
          type: "scenario-simulation",
          title: "Polyclinic Dispensary Scenario: Handling a Formulary Issue",
          description:
            "You are a pharmacy technician at a polyclinic dispensary in Barbados. A patient presents a prescription from the polyclinic doctor. Navigate the situation correctly.",
          nodes: [
            {
              id: "start",
              text: "Mrs. Alleyne presents a prescription from the polyclinic doctor for Rosuvastatin 10mg for high cholesterol. You check the BDS formulary and find that Rosuvastatin is NOT on the formulary — only Simvastatin is listed. What do you do?",
              choices: [
                {
                  label: "Dispense Simvastatin instead without consulting anyone",
                  nextNodeId: "wrong-substitute",
                  feedback: "You cannot independently substitute one medication for another. Simvastatin and Rosuvastatin are different drugs with different dosing.",
                },
                {
                  label: "Flag the issue to the pharmacist and explain the formulary discrepancy",
                  nextNodeId: "correct-flag",
                  feedback: "Correct. The pharmacist is the appropriate person to resolve a formulary discrepancy.",
                  isOptimal: true,
                },
                {
                  label: "Tell Mrs. Alleyne to buy Rosuvastatin at a private pharmacy",
                  nextNodeId: "wrong-redirect",
                  feedback: "While she could purchase privately, the first step should be to resolve the formulary issue through proper channels.",
                },
              ],
            },
            {
              id: "wrong-substitute",
              text: "The pharmacist notices the substitution and stops it before it reaches the patient. You are reminded that independent drug substitutions are outside the technician's scope. The pharmacist contacts the prescriber to discuss alternatives.",
              isEnd: true,
              outcome: "failure",
              summary: "Technicians must never independently substitute one drug for another. Always flag formulary discrepancies to the pharmacist first.",
            },
            {
              id: "correct-flag",
              text: "The pharmacist reviews the situation and contacts the prescribing doctor. The doctor agrees to change the prescription to Simvastatin 20mg, which is on the BDS formulary. The pharmacist asks you to prepare the Simvastatin. Before dispensing, the pharmacist checks your preparation and counsels Mrs. Alleyne. How do you label the medication?",
              choices: [
                {
                  label: "Label with: 'Simvastatin 20mg — Take one tablet daily at bedtime'",
                  nextNodeId: "correct-label",
                  feedback: "Correct. Statins are generally taken at bedtime for optimal efficacy, and your label accurately reflects the pharmacist's instructions.",
                  isOptimal: true,
                },
                {
                  label: "Label with: 'Rosuvastatin 10mg — Take one tablet daily'",
                  nextNodeId: "wrong-label",
                  feedback: "The prescription has been changed to Simvastatin. Labelling with the wrong drug name is a serious dispensing error.",
                },
              ],
            },
            {
              id: "wrong-redirect",
              text: "Mrs. Alleyne is upset — she came to the polyclinic specifically because she cannot afford private pharmacy prices. She leaves without medication. The pharmacist later asks why you did not flag the formulary issue. A patient has gone without needed cholesterol medication.",
              isEnd: true,
              outcome: "partial",
              summary: "Always attempt to resolve formulary issues through the pharmacist before redirecting patients. Many patients rely on the free public system because they cannot afford alternatives.",
            },
            {
              id: "correct-label",
              text: "Mrs. Alleyne receives her Simvastatin 20mg with proper labelling and counselling. She is satisfied and understands the formulary change. You log the dispensing correctly in the system. Well done — you navigated a common polyclinic scenario correctly.",
              isEnd: true,
              outcome: "success",
              summary: "The correct workflow: identify the formulary issue, flag to the pharmacist, pharmacist contacts prescriber, prepare the corrected medication, label accurately, pharmacist counsels the patient.",
            },
            {
              id: "wrong-label",
              text: "Fortunately, the pharmacist catches the labelling error during the final check. The label is corrected to Simvastatin 20mg. You are reminded to always verify that labels match the actual medication being dispensed — especially after a prescription change.",
              isEnd: true,
              outcome: "partial",
              summary: "After a prescription change, always ensure your label reflects the new medication, not the original one. Label-drug mismatches are a common and dangerous dispensing error.",
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "Approximately how many community pharmacies operate in Barbados?",
          options: [
            "10-20",
            "50-60",
            "150-200",
            "400+",
          ],
          correctIndex: 1,
          explanation:
            "Barbados has approximately 50-60 community pharmacies across the island. This relatively small number reflects the island's population of around 287,000. By comparison, Trinidad & Tobago has 400+ and Jamaica has 500+ pharmacies.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m3-q1",
      question:
        "How are medications on the BDS national formulary provided to Barbadian patients through the public health system?",
      options: [
        "Through a co-payment system where patients pay 30-50%",
        "Free of charge — no co-payment required",
        "Through a sliding-scale fee based on income",
        "Only to patients with valid health insurance",
      ],
      correctIndex: 1,
      explanation:
        "Barbados provides BDS formulary medications entirely free of charge through the public health system. This universal free model is closer to T&T's CDAP than Jamaica's NHF, but operates primarily through public-sector facilities (polyclinics, QEH) rather than private pharmacies.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q2",
      question:
        "What is the Queen Elizabeth Hospital (QEH)?",
      options: [
        "A private hospital in Bridgetown with a small pharmacy",
        "Barbados's sole public hospital — a 600+ bed facility with the island's largest pharmacy department",
        "A polyclinic in St. Michael parish",
        "A teaching hospital affiliated with UTech Jamaica",
      ],
      correctIndex: 1,
      explanation:
        "The Queen Elizabeth Hospital (QEH) is Barbados's sole public hospital, located in Bridgetown. It is a 600+ bed facility providing secondary and tertiary care, and houses the island's largest pharmacy department serving both inpatients and a high-volume outpatient dispensary.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q3",
      question:
        "Why is Enalapril (an ACE inhibitor) particularly important in Barbadian prescribing compared to some other Caribbean islands?",
      options: [
        "It is the cheapest medication on the BDS formulary",
        "Barbados has banned all other antihypertensives",
        "Barbados has a high prevalence of diabetic nephropathy, and ACE inhibitors provide renal protection",
        "Barbadian patients have fewer side effects from ACE inhibitors than other populations",
      ],
      correctIndex: 2,
      explanation:
        "Barbados has a disproportionately high rate of chronic kidney disease and diabetic nephropathy. ACE inhibitors like Enalapril are prescribed both for blood pressure control and for their proven renal-protective benefits, making them especially prominent in Barbadian prescribing.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m3-q4",
      question:
        "A cold-chain delivery of insulin arrives at your Barbadian pharmacy. The temperature monitor shows the shipment reached 12°C during transit (acceptable range is 2-8°C). What is the correct action?",
      options: [
        "Accept the delivery and refrigerate immediately",
        "Accept the delivery but mark the insulin as 'use first'",
        "Refuse the delivery and report the temperature excursion to the pharmacist",
        "Accept the delivery and contact the manufacturer for a replacement",
      ],
      correctIndex: 2,
      explanation:
        "A temperature excursion (exceeding the 2-8°C range) means the cold chain has been broken. The insulin's stability, efficacy, and safety may be compromised. The technician should refuse the delivery and report it to the pharmacist, who will arrange for replacement and file a quality incident report.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q5",
      question:
        "Which statin is the preferred choice on the BDS public-sector formulary?",
      options: [
        "Atorvastatin",
        "Rosuvastatin",
        "Simvastatin",
        "Pravastatin",
      ],
      correctIndex: 2,
      explanation:
        "Simvastatin is the preferred statin on the BDS public-sector formulary, primarily due to cost considerations. While Atorvastatin and Rosuvastatin are available in private pharmacies, the public formulary prioritises Simvastatin as a cost-effective option.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q6",
      question:
        "Where do most Barbadian pharmacists complete their pharmacy degree?",
      options: [
        "University of the West Indies (UWI) Cave Hill, Barbados",
        "St. George's University, Grenada",
        "University of the West Indies (UWI) St. Augustine, Trinidad",
        "University of Technology, Jamaica (UTech)",
      ],
      correctIndex: 2,
      explanation:
        "Since UWI Cave Hill in Barbados does not currently offer a full pharmacy degree, most Barbadian pharmacists complete their education at UWI St. Augustine in Trinidad. Some also obtain qualifications internationally.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q7",
      question:
        "A patient at a Barbados polyclinic dispensary receives a prescription for Rosuvastatin 10mg. You check and find it is not on the BDS formulary. What is the correct first action?",
      options: [
        "Dispense Simvastatin as a substitute — they are both statins",
        "Tell the patient to go to a private pharmacy",
        "Flag the formulary discrepancy to the pharmacist",
        "Dispense the Rosuvastatin and note it as an off-formulary exception",
      ],
      correctIndex: 2,
      explanation:
        "When a prescribed medication is not on the BDS formulary, the technician's correct first action is to flag the issue to the pharmacist. The pharmacist will then contact the prescriber to discuss an appropriate formulary alternative. Independent substitution by the technician is outside their scope of practice.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q8",
      question:
        "Approximately how many prescriptions does the QEH outpatient dispensary process on a typical weekday?",
      options: [
        "50-100",
        "100-200",
        "300-500",
        "1,000+",
      ],
      correctIndex: 2,
      explanation:
        "The QEH outpatient dispensary processes approximately 300-500 prescriptions on a typical weekday. This high volume requires pharmacy technicians who are both fast and accurate.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q9",
      question:
        "Match the following Barbados regulatory documents to their purposes: (A) Import Licence, (B) Certificate of Pharmaceutical Product (CPP), (C) Batch Certificate. Purposes: (1) Confirms the product is approved in the country of origin, (2) Authorises the importer to bring specific products into Barbados, (3) Provides quality specifications for a specific manufacturing batch.",
      options: [
        "A-2, B-1, C-3",
        "A-1, B-3, C-2",
        "A-3, B-2, C-1",
        "A-2, B-3, C-1",
      ],
      correctIndex: 0,
      explanation:
        "Import Licence (A) authorises the importer to bring specific products into Barbados (2). Certificate of Pharmaceutical Product / CPP (B) confirms the product is approved in the country of origin (1). Batch Certificate (C) provides quality specifications for the specific batch (3).",
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Import Licence", right: "Authorises the importer to bring specific products into Barbados" },
          { left: "Certificate of Pharmaceutical Product (CPP)", right: "Confirms the product is approved in the country of origin" },
          { left: "Batch Certificate", right: "Provides quality specifications for a specific manufacturing batch" },
        ],
      },
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
    {
      id: "m3-q10",
      question:
        "True or false: Barbados has a standalone Pharmacy Council identical in structure to Jamaica's PCJ.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 1,
      explanation:
        "False. Unlike Jamaica, Barbados does not have a standalone Pharmacy Council. Pharmacy practice in Barbados is regulated through the Pharmacy Act (Cap. 372D) and oversight by the Chief Medical Officer, the BDS, and the Ministry of Health and Wellness.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 4 — Grenada
// ============================================================================

const module4: Module = {
  id: "m4-grenada",
  number: 4,
  title: "Grenada",
  description:
    "Discover pharmacy practice on the 'Spice Isle' — Grenada, one of the Caribbean's smallest independent nations. From the unique influence of St. George's University on the health system to the challenges of running a pharmacy on an island with 125,000 people, this module reveals what it truly means to practise pharmacy in a small island developing state.",
  learningObjectives: [
    "Describe Grenada's pharmaceutical regulatory framework and how it compares to larger Caribbean islands",
    "Analyse the impact of St. George's University on Grenada's health system and pharmacy practice",
    "Differentiate between hospital and community pharmacy practice in Grenada's small-island context",
    "Identify common prescribing patterns in Grenada and their relationship to the island's unique disease burden",
    "Evaluate the challenges specific to pharmacy practice in a small island developing state (SIDS)",
  ],
  lessons: [
    // ── Lesson 4.1 ──────────────────────────────────────────────────────────
    {
      id: "m4-l1",
      title: "Grenada's Pharmaceutical Regulatory Framework",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Regulating Pharmacy in the Spice Isle",
        },
        {
          type: "text",
          body: "Grenada, with a population of approximately 125,000, is one of the smallest independent nations in the Western Hemisphere. Its pharmaceutical regulatory framework reflects this scale — less institutionally complex than T&T or Jamaica, but no less important for patient safety. Pharmacy regulation in Grenada operates under the Pharmacy Act and is overseen by the Ministry of Health, with input from the Chief Medical Officer and the Grenada Pharmacy Council.",
        },
        {
          type: "key-term",
          term: "Grenada Pharmacy Council",
          definition:
            "The advisory body that assists the Ministry of Health in regulating pharmacy practice in Grenada. It oversees pharmacist registration, advises on pharmaceutical policy, and helps maintain professional standards. Smaller and less autonomous than Jamaica's PCJ or T&T's Pharmacy Board, it operates in close collaboration with the Chief Medical Officer.",
        },
        {
          type: "heading",
          level: 3,
          text: "Pharmacist Registration in Grenada",
        },
        {
          type: "text",
          body: "Pharmacist registration in Grenada requires a recognised pharmacy qualification, verification by the Ministry of Health, and registration under the Pharmacy Act. Because Grenada has no local pharmacy degree programme, all pharmacists are trained overseas — primarily at UWI (St. Augustine or Mona), UTech Jamaica, or international universities. This creates a unique dependency on externally trained professionals and makes pharmacist retention a significant challenge for the island.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Obtain a recognised pharmacy degree from an approved institution (UWI, UTech, or equivalent)",
            "Return to Grenada (or relocate) and apply to the Ministry of Health for registration",
            "Submit certified copies of qualifications, transcripts, and character references",
            "Qualifications are verified and assessed by the Pharmacy Council / CMO",
            "Complete any required period of supervised practice",
            "Registration is granted; annual renewal required",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Brain Drain Challenge",
          body: "Grenada — like many small Caribbean islands — faces a significant 'brain drain' of healthcare professionals, including pharmacists. Many Grenadian-born pharmacists who train overseas (particularly at UWI in Trinidad or in North America) do not return to Grenada due to limited career opportunities, lower salaries, and restricted scope of practice. This means Grenada often has fewer pharmacists per capita than needed, increasing the burden on those who remain and elevating the importance of well-trained pharmacy technicians.",
        },
        {
          type: "heading",
          level: 3,
          text: "Controlled Substances in Grenada",
        },
        {
          type: "text",
          body: "Grenada's controlled substance framework operates under the Misuse of Drugs Act and aligns broadly with international conventions. The island's small size means that controlled substance monitoring is, in some ways, more manageable — the total volume is small, and the pharmacy community is tight-knit. However, it also means that any diversion or misuse is more quickly noticed and has a larger proportional impact.",
        },
        {
          type: "table",
          caption: "Pharmaceutical Regulation — Grenada Compared",
          headers: ["Aspect", "Grenada", "T&T / Jamaica / Barbados"],
          rows: [
            ["Population", "~125,000", "287,000 (Barbados) to 2.8 million (Jamaica)"],
            ["Regulatory Body", "Pharmacy Council (advisory) + Ministry of Health", "Standalone Pharmacy Boards/Councils with statutory authority"],
            ["Local Pharmacy Education", "None — all pharmacists trained overseas", "UWI St. Augustine (T&T), UTech (Jamaica)"],
            ["Number of Pharmacies", "~20-30 (entire island)", "50-500+ depending on island"],
            ["Controlled Substance Framework", "Misuse of Drugs Act", "Various Dangerous Drugs / Misuse of Drugs Acts"],
            ["Technician Registration", "No formal category", "No formal category (all islands, though Jamaica is closest)"],
          ],
        },
        {
          type: "knowledge-check",
          question: "Why does Grenada face a particular challenge with pharmacist retention?",
          options: [
            "Grenada has too many pharmacy schools producing too many graduates",
            "Grenadian pharmacists must train overseas and many do not return due to limited opportunities and lower salaries",
            "The Grenada Pharmacy Council has excessively strict registration requirements",
            "Grenada prohibits foreign-trained pharmacists from practising",
          ],
          correctIndex: 1,
          explanation:
            "Grenada has no local pharmacy degree programme, so all pharmacists must train overseas (primarily at UWI or internationally). Many do not return due to limited career opportunities, lower salaries, and restricted practice scope compared to larger islands or North America. This 'brain drain' is a significant challenge for small island states.",
        },
      ],
    },
    // ── Lesson 4.2 ──────────────────────────────────────────────────────────
    {
      id: "m4-l2",
      title: "St. George's University (SGU) Impact on Grenada's Health System",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "SGU — The University That Transformed Grenada's Health Landscape",
        },
        {
          type: "text",
          body: "St. George's University (SGU) is one of the most influential institutions in Grenada — and indeed in Caribbean health education. Founded in 1976, SGU is best known for its medical school, which trains thousands of students from around the world. While SGU is primarily a medical school (not a pharmacy school), its presence on the island has profoundly shaped Grenada's health system, including pharmacy practice. The university's affiliated clinical training sites, research programmes, and the health needs of its large student population create a unique dynamic that pharmacy technicians working in Grenada must understand.",
        },
        {
          type: "key-term",
          term: "St. George's University (SGU)",
          definition:
            "A private international university located in True Blue, St. George, Grenada. Founded in 1976, SGU is best known for its School of Medicine, which is one of the largest medical schools in the Caribbean. SGU also offers programmes in veterinary medicine, public health, science, and business. The university's clinical programmes partner with local hospitals, including the General Hospital, creating a teaching-hospital dynamic.",
        },
        {
          type: "heading",
          level: 3,
          text: "How SGU Impacts Pharmacy Practice in Grenada",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Student population: SGU brings 5,000-7,000 students to Grenada, many of whom require pharmacy services (prescriptions, OTC medications, travel health supplies)",
            "Clinical rotations: SGU medical students do clinical rotations at the General Hospital in St. George's, increasing the hospital's activity and, consequently, its pharmacy workload",
            "International prescriptions: SGU students from the USA, Canada, and UK sometimes present prescriptions or medication requests from their home countries — pharmacy technicians must understand when these can and cannot be honoured",
            "Research and public health: SGU's research programmes contribute to health data that informs national prescribing patterns and disease management strategies",
            "Economic impact: SGU is Grenada's largest private-sector employer; the economic activity it generates supports the viability of community pharmacies near the campus",
            "Healthcare standards: The presence of an internationally accredited medical school has raised expectations for healthcare quality on the island, including pharmacy services",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Working Near SGU",
          body: "If you work in a community pharmacy near SGU's campus (particularly in the True Blue or Grand Anse area), expect a significant proportion of your customers to be international students. They may have different expectations about pharmacy services, may ask for medications by unfamiliar brand names (US or Canadian brands), and may need help understanding Grenada's prescription requirements. Cultural competence, patience, and good communication skills are essential.",
        },
        {
          type: "heading",
          level: 3,
          text: "SGU and Public Health Initiatives",
        },
        {
          type: "text",
          body: "SGU has been involved in several public health initiatives that benefit Grenada's population, including chronic disease screening programmes, health fairs, and community health education. These initiatives often identify patients who need pharmaceutical management, indirectly increasing pharmacy workload. SGU's public health programmes have also contributed to better data on Grenada's disease burden, helping to inform the national essential medicines list and procurement priorities.",
        },
        {
          type: "case-study",
          title: "Case Study: The SGU Student Prescription",
          scenario:
            "An American SGU medical student comes to your community pharmacy in Grand Anse with a US prescription from their doctor back home for Adderall (amphetamine/dextroamphetamine) 20mg — a Schedule 2 controlled substance used for ADHD. The prescription appears legitimate and bears the US doctor's DEA number. The student needs a refill urgently for their studies.",
          questions: [
            "Can a Grenadian pharmacy legally fill a US prescription for a Schedule 2 controlled substance?",
            "What should the pharmacy technician say to the student?",
            "What options does the student have to obtain their medication legally in Grenada?",
          ],
          discussion:
            "A Grenadian pharmacy cannot legally fill a foreign prescription for a controlled substance. Adderall (amphetamine salts) is a Schedule 2 substance in Grenada under the Misuse of Drugs Act. The technician should politely explain that foreign prescriptions for controlled substances cannot be honoured in Grenada, and suggest the student consult a local doctor who, if clinically appropriate, could write a Grenadian prescription. However, the availability of Adderall specifically in Grenada may be limited — the local doctor may recommend an alternative stimulant that is available on the island. The student should also be advised to plan ahead by bringing sufficient supply or arranging with their US doctor for a supply before travelling.",
        },
        {
          type: "knowledge-check",
          question: "What is the primary way SGU impacts pharmacy workload in Grenada?",
          options: [
            "SGU directly trains pharmacy technicians for the Grenadian market",
            "SGU's student population and clinical rotations increase demand for pharmacy services",
            "SGU manufactures medications for the Grenadian pharmaceutical supply",
            "SGU regulates pharmacy practice on the island",
          ],
          correctIndex: 1,
          explanation:
            "SGU brings 5,000-7,000 students to Grenada who require pharmacy services, and its clinical rotations at the General Hospital increase hospital pharmacy workload. SGU is a medical school, not a pharmacy school, and does not directly train pharmacy technicians, manufacture medications, or regulate pharmacy practice.",
        },
      ],
    },
    // ── Lesson 4.3 ──────────────────────────────────────────────────────────
    {
      id: "m4-l3",
      title: "General Hospital Pharmacy & Community Pharmacy Practice",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Where Pharmacy Technicians Work in Grenada",
        },
        {
          type: "text",
          body: "Grenada's pharmacy landscape is intimate and concentrated. The General Hospital in St. George's is the island's primary public healthcare facility and its pharmacy department is the single largest employer of pharmacy personnel. Community pharmacies are small, independently owned, and deeply embedded in their local communities. There are no pharmacy chains in Grenada — every pharmacy is a unique operation. This creates a work environment where pharmacy technicians wear many hats, know their patients personally, and have a direct and visible impact on their community's health.",
        },
        {
          type: "heading",
          level: 3,
          text: "General Hospital Pharmacy — St. George's",
        },
        {
          type: "text",
          body: "The General Hospital (officially known as the General Hospital, St. George's) is Grenada's main public hospital. Its pharmacy department handles inpatient dispensing, outpatient prescriptions, emergency medication supply, and the management of the government's pharmaceutical stock. Working in this pharmacy means being part of a small team that serves the entire island's public hospital needs — when you are short-staffed, there is no backup team to call.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "The General Hospital pharmacy is typically staffed by 2-4 pharmacists and 3-6 technicians/assistants",
            "Inpatient and outpatient services operate from the same pharmacy department",
            "The formulary is based on an essential medicines list aligned with WHO recommendations and the government's procurement budget",
            "Stock management is critical — with small order quantities and long lead times, running out of a medication can mean weeks without supply",
            "Emergency dispensing during hurricanes or other disasters falls on the General Hospital pharmacy team",
            "The pharmacy also supports SGU clinical rotations, adding an educational dimension to the work",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Community Pharmacy — The Independent Model",
        },
        {
          type: "text",
          body: "Grenada's community pharmacies are all independently owned and operated — there are no chains. Most are located in St. George's (the capital), Grand Anse, Gouyave, Grenville, and Sauteurs. These pharmacies typically have one pharmacist (often the owner) and one or two support staff. As a pharmacy technician in a Grenadian community pharmacy, you will be involved in every aspect of the operation — dispensing, inventory management, customer service, OTC advice, ordering, receiving stock, and even cleaning.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Everyone Knows Everyone",
          body: "In Grenada's small pharmacy community, reputation is everything. Your patients are your neighbours, your children's teachers, your friends' parents. Professional conduct, discretion (especially regarding sensitive medications), and genuine care are not just professional requirements — they are social necessities. A pharmacy technician who is known for accuracy, reliability, and compassion will quickly become a valued and trusted community figure.",
        },
        {
          type: "table",
          caption: "Hospital vs. Community Pharmacy in Grenada",
          headers: ["Aspect", "General Hospital Pharmacy", "Community Pharmacy"],
          rows: [
            ["Employer", "Government of Grenada", "Private owner-pharmacist"],
            ["Medications Available", "Government essential medicines list", "Wider range including imported brands"],
            ["Patient Cost", "Free or minimal charge", "Full private-pay pricing"],
            ["Work Schedule", "Shift-based (including nights, weekends, holidays)", "Business hours (typically 8 AM – 5 PM Mon-Sat)"],
            ["Team Size", "2-4 pharmacists, 3-6 support staff", "1 pharmacist + 1-2 support staff"],
            ["Typical Daily Volume", "100-200 prescriptions (inpatient + outpatient)", "30-60 prescriptions"],
            ["Scope of Work", "Inpatient, outpatient, emergency, IV admixture", "Outpatient dispensing, OTC, inventory"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Career Advice for Grenada",
          body: "Starting your career at the General Hospital pharmacy gives you the broadest experience and most structured learning environment. The government salary is modest (approximately EC$2,000–$3,000/month starting), but the pension, benefits, and professional development opportunities are valuable. After gaining experience, transitioning to or supplementing with community pharmacy work is common. Some technicians work in both settings simultaneously.",
        },
        {
          type: "knowledge-check",
          question: "How many pharmacy chains operate in Grenada?",
          options: [
            "One — Fontana has expanded to Grenada",
            "Two — SuperPharm and Knights Pharmacy",
            "None — all community pharmacies are independently owned",
            "Three — but they are all small, local chains",
          ],
          correctIndex: 2,
          explanation:
            "Grenada has no pharmacy chains. All community pharmacies on the island are independently owned and operated, typically by a pharmacist-owner with a small support team. This is quite different from T&T (SuperPharm, Bhagan's), Jamaica (Fontana), or Barbados (Collins, Knights).",
        },
      ],
    },
    // ── Lesson 4.4 ──────────────────────────────────────────────────────────
    {
      id: "m4-l4",
      title: "Common Prescribing Patterns & Top Dispensed Medications in Grenada",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "What Grenada Prescribes Most",
        },
        {
          type: "text",
          body: "Grenada shares the Caribbean's NCD burden — hypertension, diabetes, and cardiovascular disease are the dominant chronic conditions. However, prescribing patterns in Grenada are shaped by the island's small formulary, limited generic options, and the particular health challenges of a small island developing state. The disease profile also includes notable rates of sickle cell disease, mental health conditions, and tropical infectious diseases (particularly during the rainy/hurricane season).",
        },
        {
          type: "heading",
          level: 3,
          text: "Top Dispensed Medications in Grenada",
        },
        {
          type: "table",
          caption: "Most Commonly Dispensed Medications in Grenada (approximate ranking)",
          headers: ["Rank", "Medication", "Class", "Primary Indication"],
          rows: [
            ["1", "Amlodipine 5mg/10mg", "Calcium channel blocker", "Hypertension"],
            ["2", "Metformin 500mg/850mg", "Biguanide", "Type 2 diabetes"],
            ["3", "Enalapril 5mg/10mg/20mg", "ACE inhibitor", "Hypertension"],
            ["4", "Hydrochlorothiazide 25mg", "Thiazide diuretic", "Hypertension"],
            ["5", "Amoxicillin 250mg/500mg", "Penicillin antibiotic", "Bacterial infections"],
            ["6", "Omeprazole 20mg", "Proton pump inhibitor", "GERD"],
            ["7", "Simvastatin 20mg", "Statin", "Hyperlipidaemia"],
            ["8", "Glibenclamide 5mg", "Sulphonylurea", "Type 2 diabetes"],
            ["9", "Paracetamol 500mg", "Analgesic/antipyretic", "Pain, fever"],
            ["10", "Salbutamol inhaler 100mcg", "Beta-2 agonist", "Asthma"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Grenada-Specific Prescribing Observations",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "The government formulary is smaller than T&T or Jamaica's — fewer medication choices means less substitution flexibility",
            "Older, well-established generics dominate: Glibenclamide rather than newer agents like Glimepiride or Sitagliptin",
            "Simvastatin is the primary statin; Atorvastatin available only in private pharmacies and at higher cost",
            "Antibiotic use follows a conservative pattern similar to Barbados — influenced by WHO essential medicines guidelines",
            "Mental health medications are limited — Amitriptyline, Haloperidol, and Diazepam are the mainstays; newer SSRIs may need to be imported privately",
            "Traditional remedies are very common: nutmeg, mace, soursop leaf tea, and local herbs are widely used alongside prescription medications",
            "Sickle cell disease is managed primarily with Hydroxyurea and Folic acid — both on the essential medicines list",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Nutmeg — Grenada's Signature Spice and Medicine",
          body: "Grenada is known as the 'Spice Isle' and is one of the world's largest producers of nutmeg. Nutmeg and mace (the red membrane around the nutmeg seed) have a long history of traditional medicinal use in Grenada — for digestive complaints, pain relief, and as a general tonic. While nutmeg in culinary quantities is safe, excessive consumption or concentrated nutmeg oil can be toxic (containing myristicin, which can cause hallucinations, nausea, and liver damage). Be aware that patients may use nutmeg medicinally without mentioning it.",
        },
        {
          type: "key-term",
          term: "Essential Medicines List (EML)",
          definition:
            "A list of the most important medications that satisfy the priority healthcare needs of a population. Based on the WHO Model List of Essential Medicines, each country adapts its own version. Grenada's EML is particularly important because the government procures only medications on this list for the public system, making it the primary guide for what is available at the General Hospital and health centres.",
        },
        {
          type: "island-comparison",
          title: "Top Prescribing Differences Across the Four Islands",
          description:
            "While all four islands share the NCD burden, specific medication preferences differ based on formulary availability, cost, and prescribing culture.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Broadest formulary — most medication options available",
                "Atenolol widely used for hypertension (less common elsewhere in the region)",
                "CDAP formulary drives prescribing toward specific generics",
                "Highest use of Insulin (largest diabetic population)",
                "Liberal antibiotic prescribing culture",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "ARBs (Losartan) preferred over ACE inhibitors",
                "Glimepiride preferred over Glibenclamide as second-line antidiabetic",
                "NHF formulary shapes prescribing choices",
                "Z-Pack (Azithromycin) extremely popular for respiratory infections",
                "Cerasee tea widely used as complementary diabetes treatment",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "ACE inhibitors (Enalapril) prominent due to high CKD prevalence",
                "Simvastatin preferred on BDS formulary (cost-driven)",
                "More conservative antibiotic prescribing (stewardship programmes)",
                "Furosemide usage higher (heart failure, renal disease population)",
                "Less herbal remedy use compared to Jamaica or T&T",
              ],
            },
            {
              name: "Grenada",
              flag: "🇬🇩",
              details: [
                "Smallest formulary — oldest generics dominate",
                "Glibenclamide rather than newer sulphonylureas",
                "Limited statin options (Simvastatin primarily)",
                "Mental health medication options restricted",
                "Nutmeg-based traditional remedies widely used",
              ],
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "Which traditional Grenadian remedy should pharmacy technicians be aware of due to potential toxicity in high doses?",
          options: [
            "Cerasee tea",
            "Fever grass",
            "Nutmeg",
            "Soursop leaf",
          ],
          correctIndex: 2,
          explanation:
            "Nutmeg, Grenada's signature spice, has a history of traditional medicinal use. While safe in culinary quantities, excessive consumption or concentrated nutmeg oil can be toxic (containing myristicin, which can cause hallucinations, nausea, and liver damage). Cerasee tea is more associated with Jamaica, though used regionally.",
        },
      ],
    },
    // ── Lesson 4.5 ──────────────────────────────────────────────────────────
    {
      id: "m4-l5",
      title: "The Unique Challenges of Practising Pharmacy in a Small Island State",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Small Island, Big Challenges",
        },
        {
          type: "text",
          body: "Grenada is classified as a Small Island Developing State (SIDS) — a category that brings unique challenges across all sectors, including pharmacy. Practising pharmacy on an island of 125,000 people, 344 square kilometres, and with no domestic pharmaceutical manufacturing is fundamentally different from practising in a large country with robust local supply chains. This lesson explores the specific challenges and, importantly, the strategies and resilience that pharmacy professionals in Grenada have developed to overcome them.",
        },
        {
          type: "key-term",
          term: "Small Island Developing States (SIDS)",
          definition:
            "A group of small island countries and territories that face unique social, economic, and environmental vulnerabilities. Recognised by the United Nations, SIDS share challenges including geographic isolation, limited economies of scale, dependence on imports, vulnerability to natural disasters, and limited healthcare infrastructure. Grenada, along with most Caribbean nations, is classified as a SIDS.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Seven Key Challenges",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Supply chain vulnerability: 100% import dependency; a single shipping disruption can cause island-wide stock-outs",
            "Limited economies of scale: Small order quantities mean higher per-unit costs and less negotiating power with suppliers",
            "Natural disaster exposure: Grenada sits in the hurricane belt; Hurricane Ivan (2004) devastated the island, destroying infrastructure including health facilities",
            "Workforce shortage: Brain drain of pharmacists; limited opportunities for specialisation; small teams mean burnout risk is high",
            "Limited formulary options: Budget constraints restrict the essential medicines list; newer, more expensive medications may be unavailable through the public system",
            "Climate challenges: Tropical heat and humidity demand strict storage conditions; power outages (during storms) can compromise cold-chain medications",
            "Financial constraints: Government health budgets are tight; pharmaceutical spending competes with other national priorities",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Hurricane Ivan (2004) — A Turning Point",
        },
        {
          type: "text",
          body: "On 7 September 2004, Hurricane Ivan struck Grenada as a Category 3 hurricane, causing catastrophic damage. Over 90% of buildings on the island were damaged or destroyed, including the General Hospital. The pharmaceutical supply chain was completely disrupted — medications were destroyed by wind and water damage, the port was damaged, and power outages compromised all cold-chain storage. The pharmacy community had to rebuild literally from the ground up. Hurricane Ivan became a turning point that led to improved emergency preparedness protocols, including pharmaceutical emergency stockpiling, disaster response SOPs, and regional mutual aid agreements through CARICOM.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Hurricane Preparedness for Pharmacies",
          body: "Every pharmacy in Grenada — and across the Caribbean — must have a hurricane preparedness plan. This includes: (1) Maintaining a 3-6 month emergency buffer stock of essential medications, (2) Having waterproof storage containers for critical pharmaceuticals, (3) Ensuring backup power (generators) for cold-chain storage, (4) Pre-positioning emergency medication kits for distribution after a storm, (5) Establishing communication protocols with CDEMA (Caribbean Disaster Emergency Management Agency) and the Ministry of Health for post-disaster pharmaceutical coordination.",
        },
        {
          type: "heading",
          level: 3,
          text: "Strategies for Resilience",
        },
        {
          type: "text",
          body: "Despite these challenges, Grenada's pharmacy professionals have developed remarkable resilience. The strategies below represent best practices that any pharmacy technician working in a SIDS should understand and champion.",
        },
        {
          type: "table",
          caption: "Resilience Strategies for Small-Island Pharmacy Practice",
          headers: ["Strategy", "Description", "Technician's Role"],
          rows: [
            [
              "OECS Pharmaceutical Procurement Service (PPS)",
              "Pool purchasing with other Eastern Caribbean states to achieve better prices and more reliable supply",
              "Understand that your pharmacy's public-sector stock comes through this pooled procurement mechanism",
            ],
            [
              "Emergency Buffer Stocking",
              "Maintain 3-6 months of essential medication supply to weather supply chain disruptions",
              "Monitor stock levels; flag items approaching safety stock thresholds; maintain FIFO rotation",
            ],
            [
              "Regional Mutual Aid",
              "Agreements between CARICOM states for pharmaceutical emergency assistance",
              "Know the protocol for requesting emergency medication shipments from neighbouring islands",
            ],
            [
              "Therapeutic Substitution Protocols",
              "Approved protocols for substituting equivalent medications when specific products are unavailable",
              "Alert the pharmacist when a prescribed medication is out of stock so they can activate substitution protocols with the prescriber",
            ],
            [
              "Community Health Education",
              "Educating patients about their medications, adherence, and self-management to reduce unnecessary demand",
              "Take opportunities to educate patients about proper medication use, storage, and the importance of adherence",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "OECS Pharmaceutical Procurement Service (PPS)",
          body: "The OECS PPS is a game-changer for small islands like Grenada. By pooling the pharmaceutical purchasing needs of nine Eastern Caribbean states (Antigua & Barbuda, Dominica, Grenada, Montserrat, St. Kitts & Nevis, St. Lucia, St. Vincent & the Grenadines, British Virgin Islands, and Anguilla), the PPS achieves prices that individual islands could never negotiate alone. The PPS processes are managed from St. Lucia and have been shown to reduce medication costs by 30-70% compared to individual procurement.",
        },
        {
          type: "case-study",
          title: "Case Study: Post-Hurricane Pharmacy Recovery",
          scenario:
            "A Category 4 hurricane has struck Grenada. The General Hospital pharmacy sustained significant water damage — approximately 40% of pharmaceutical stock is destroyed. Power has been out for 48 hours, and all insulin and vaccines in the cold chain are compromised. The port is closed and estimated to reopen in 7-10 days. The pharmacy team (you and two pharmacists) must triage the remaining stock, set up an emergency dispensary, and coordinate with regional partners for emergency resupply.",
          questions: [
            "How should the remaining pharmaceutical stock be triaged and prioritised?",
            "Which medications should be requested first through regional emergency channels?",
            "How should the pharmacy team communicate with patients about medication availability during the emergency?",
          ],
          discussion:
            "Triage should prioritise: (1) life-saving medications first (insulin, anticonvulsants, cardiac medications, antibiotics for wound infections), (2) medications for chronic conditions that cannot be safely interrupted (antiretrovirals, antihypertensives, diabetes medications), (3) other medications. Emergency requests through CDEMA and the OECS PPS should focus on insulin (cold-chain priority), wound care antibiotics (post-disaster infections are a major risk), and essential chronic disease medications. Communication should be direct and honest — set up an information board at the emergency dispensary listing available medications and expected resupply timelines. Use radio (if available) to broadcast pharmacy hours and availability.",
        },
        {
          type: "island-comparison",
          title: "Natural Disaster Vulnerability Across the Four Islands",
          description:
            "All Caribbean islands face natural disaster risks, but the severity and frequency vary.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Located south of the main hurricane belt — lower hurricane risk",
                "Primary natural hazards: flooding, earthquakes (seismic zone)",
                "Larger pharmaceutical buffer capacity due to economic scale",
                "NIPDEC central warehouse provides backup storage",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Directly in the hurricane belt — high vulnerability",
                "Major hurricane impacts: Gilbert (1988), Ivan (2004), Dean (2007)",
                "Earthquake risk: Kingston sits on a fault line",
                "Larger economy provides more recovery resources, but distribution challenges across 14 parishes",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Further east — historically lower hurricane frequency, but not immune",
                "Hurricane Elsa (2021) caused significant damage",
                "Small island = entire pharmaceutical system affected simultaneously",
                "BDS central procurement provides some buffer",
              ],
            },
            {
              name: "Grenada",
              flag: "🇬🇩",
              details: [
                "Directly in the hurricane belt — highly vulnerable",
                "Hurricane Ivan (2004) destroyed 90% of structures including health facilities",
                "Smallest economy = longest recovery time",
                "OECS PPS provides crucial regional backup",
                "Post-Ivan emergency preparedness protocols now embedded in practice",
              ],
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "What is the primary benefit of the OECS Pharmaceutical Procurement Service (PPS) for small islands like Grenada?",
          options: [
            "It provides free medications to all OECS citizens",
            "It pools purchasing power of nine Eastern Caribbean states to negotiate better prices and more reliable supply",
            "It manufactures generic medications within the Eastern Caribbean",
            "It trains pharmacy technicians for OECS member states",
          ],
          correctIndex: 1,
          explanation:
            "The OECS PPS pools the pharmaceutical purchasing needs of nine Eastern Caribbean states, achieving prices that individual islands could never negotiate alone (30-70% cost reductions). It also provides more reliable supply by consolidating orders, making it easier to attract supplier interest for what would otherwise be very small individual-island orders.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m4-q1",
      question:
        "Why does Grenada have no locally trained pharmacists?",
      options: [
        "The Grenada Pharmacy Council prohibits local training",
        "SGU's medical school has replaced the need for pharmacists",
        "Grenada has no local pharmacy degree programme — all pharmacists must train overseas",
        "The government does not recognise pharmacy as a profession",
      ],
      correctIndex: 2,
      explanation:
        "Grenada has no local pharmacy degree programme. All Grenadian pharmacists must train overseas — primarily at UWI (St. Augustine or Mona), UTech Jamaica, or international universities. This creates a dependency on externally trained professionals and contributes to the brain drain challenge.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q2",
      question:
        "An American SGU student presents a US prescription for Adderall (Schedule 2 controlled substance) at a Grenadian pharmacy. What is the correct response?",
      options: [
        "Fill the prescription — it is valid and from a licensed US doctor",
        "Fill a partial quantity to help the student while they seek a local prescription",
        "Politely explain that foreign prescriptions for controlled substances cannot be honoured in Grenada and suggest they consult a local doctor",
        "Contact the US doctor to verify and then dispense",
      ],
      correctIndex: 2,
      explanation:
        "Grenadian pharmacies cannot legally fill foreign prescriptions for controlled substances. The technician should politely explain this and suggest the student consult a local doctor who, if clinically appropriate, could write a Grenadian prescription for the medication or a suitable alternative available on the island.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q3",
      question:
        "What was the significance of Hurricane Ivan (2004) for Grenada's pharmacy system?",
      options: [
        "It had no significant impact on pharmacy services",
        "It caused catastrophic damage that led to improved emergency preparedness protocols and pharmaceutical stockpiling",
        "It resulted in the closure of all community pharmacies permanently",
        "It led to Grenada building its own pharmaceutical manufacturing plant",
      ],
      correctIndex: 1,
      explanation:
        "Hurricane Ivan caused catastrophic damage to Grenada, destroying over 90% of structures including the General Hospital. The pharmaceutical supply chain was completely disrupted. This became a turning point that led to improved emergency preparedness protocols, including pharmaceutical emergency stockpiling, disaster response SOPs, and regional mutual aid agreements.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q4",
      question:
        "What is the OECS Pharmaceutical Procurement Service (PPS) and how does it benefit Grenada?",
      options: [
        "A local Grenadian drug manufacturing facility that produces generic medications",
        "A pooled purchasing mechanism for nine Eastern Caribbean states that achieves better prices and more reliable supply",
        "A US government programme that provides free medications to Caribbean islands",
        "An OECS organisation that trains pharmacy technicians across the region",
      ],
      correctIndex: 1,
      explanation:
        "The OECS PPS pools pharmaceutical purchasing needs of nine Eastern Caribbean states, achieving price reductions of 30-70% compared to individual procurement. For small islands like Grenada, this pooled purchasing power is essential for maintaining affordable medication supply.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q5",
      question:
        "Which traditional Grenadian spice can be toxic in excessive quantities due to its myristicin content?",
      options: [
        "Cinnamon",
        "Turmeric",
        "Nutmeg",
        "Ginger",
      ],
      correctIndex: 2,
      explanation:
        "Nutmeg, Grenada's signature spice, contains myristicin which can cause hallucinations, nausea, and liver damage when consumed in excessive quantities or as concentrated oil. While safe in culinary amounts, pharmacy technicians should be aware of potential medicinal overuse.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q6",
      question:
        "A pharmacy technician in Grenada notices that the essential medicines list does not include the specific SSRI antidepressant that a patient needs. What should they do?",
      options: [
        "Tell the patient there is nothing that can be done",
        "Dispense Amitriptyline instead without consulting the pharmacist",
        "Flag the issue to the pharmacist, who can discuss formulary alternatives with the prescriber or explore private-sector procurement options",
        "Order the medication directly from an international supplier",
      ],
      correctIndex: 2,
      explanation:
        "When a needed medication is not on the essential medicines list, the technician should alert the pharmacist. The pharmacist can then contact the prescriber to discuss available formulary alternatives (e.g. Amitriptyline or Fluoxetine if available) or explore whether the medication can be procured through private-sector channels for the patient.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q7",
      question:
        "How does SGU's presence on the island primarily affect community pharmacies near its campus?",
      options: [
        "SGU students are prohibited from using local pharmacies",
        "SGU provides free medications to all community pharmacies",
        "The student population increases demand for pharmacy services, including prescriptions and OTC products",
        "SGU's students replace the need for pharmacy technicians at nearby pharmacies",
      ],
      correctIndex: 2,
      explanation:
        "SGU brings 5,000-7,000 students to Grenada, significantly increasing demand for pharmacy services — particularly in the True Blue and Grand Anse areas near campus. These students need prescriptions filled, OTC medications, travel health supplies, and general pharmacy services.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q8",
      question:
        "Place the following post-hurricane pharmaceutical triage priorities in the correct order: (1) Other routine medications, (2) Medications for chronic conditions that cannot be safely interrupted, (3) Life-saving medications (insulin, anticonvulsants, cardiac drugs)",
      options: [
        "3 → 2 → 1",
        "1 → 2 → 3",
        "2 → 3 → 1",
        "3 → 1 → 2",
      ],
      correctIndex: 0,
      explanation:
        "Post-disaster pharmaceutical triage follows this priority: (1) Life-saving medications first (insulin, anticonvulsants, cardiac medications, antibiotics for wound infections), (2) Medications for chronic conditions that cannot be safely interrupted (antiretrovirals, antihypertensives, diabetes medications), (3) Other routine medications.",
      questionType: "ordering",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q9",
      question:
        "True or false: Grenada has pharmacy chain stores similar to SuperPharm in T&T or Fontana in Jamaica.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 1,
      explanation:
        "False. Grenada has no pharmacy chains. All community pharmacies on the island are independently owned and operated, typically by a pharmacist-owner with a small support team. The island's small market does not support chain operations.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q10",
      question:
        "Select ALL the challenges that are specific to or amplified by practising pharmacy in a Small Island Developing State (SIDS) like Grenada:",
      options: [
        "100% import dependency for pharmaceuticals",
        "Limited economies of scale resulting in higher per-unit costs",
        "Excessive domestic pharmaceutical manufacturing capacity",
        "Vulnerability to supply chain disruption from natural disasters",
        "Brain drain of trained pharmacy professionals",
      ],
      correctIndex: 0,
      explanation:
        "Four of the five options are real SIDS pharmacy challenges: 100% import dependency, limited economies of scale, natural disaster vulnerability, and brain drain. 'Excessive domestic pharmaceutical manufacturing capacity' is the opposite of reality — SIDS like Grenada have no domestic pharmaceutical manufacturing whatsoever.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 3, 4],
      },
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
  ],
};

// ============================================================================
// FULL COURSE ASSEMBLY
// ============================================================================

const caribbeanIslandCourse: FullCourse = {
  courseId: "caribbean-island-pharmacy-practice",
  title: "Caribbean Island Pharmacy Practice",
  tagline: "Island-specific regulations, systems, and practice realities across T&T, Jamaica, Barbados, and Grenada",
  modules: [module1, module2, module3, module4],
};

// ── Utility helpers ─────────────────────────────────────────────────────────

export const totalLessons = caribbeanIslandCourse.modules.reduce(
  (sum, m) => sum + m.lessons.length,
  0,
);

export const totalQuizQuestions = caribbeanIslandCourse.modules.reduce(
  (sum, m) => sum + m.quiz.length,
  0,
);

export default caribbeanIslandCourse;
