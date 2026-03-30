// ============================================================================
// PIXOPHARM LMS — Caribbean Pharmaceutical Regulations (I3)
// Full Course Content: 7 Modules, 23 Lessons, ~70 Quiz Questions
// Focus Islands: Trinidad & Tobago, Jamaica, Barbados, Grenada, OECS States
// ============================================================================

import type { Module, FullCourse } from '../types';

// ============================================================================
// MODULE 1 — Overview of Caribbean Health Regulatory Bodies
// ============================================================================

const module1: Module = {
  id: "m1-regulatory-bodies",
  number: 1,
  title: "Overview of Caribbean Health Regulatory Bodies",
  description:
    "Navigate the complex regulatory landscape that governs pharmaceutical practice across CARICOM member states. Understand who sets the rules, who enforces them, and how regional bodies work alongside national agencies to ensure drug quality and patient safety.",
  learningObjectives: [
    "Identify the principal regulatory bodies governing pharmacy practice in Trinidad & Tobago, Jamaica, Barbados, and Grenada",
    "Explain the role of CARICOM, CARPHA, and PAHO/WHO in regional pharmaceutical governance",
    "Compare the organisational structures and mandates of at least three national pharmacy boards",
    "Analyse how colonial legal traditions have shaped modern Caribbean pharmaceutical regulation",
  ],
  lessons: [
    // ── Lesson 1.1 ──
    {
      id: "m1-l1",
      title: "Why Pharmaceutical Regulation Matters in the Caribbean",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Case for Strong Pharmaceutical Regulation",
        },
        {
          type: "text",
          body: "Pharmaceutical regulation exists to protect the public. Every pill dispensed, every injection administered, and every compound prepared must meet standards of safety, efficacy, and quality. In the Caribbean, where most medications are imported and supply chains stretch across thousands of kilometres of open ocean, regulatory oversight is not a bureaucratic luxury — it is a lifeline.",
        },
        {
          type: "text",
          body: "The consequences of weak regulation are real and devastating. Substandard and falsified medicines account for an estimated 10% of pharmaceutical products in low- and middle-income countries, according to the World Health Organisation. In 2014, contaminated cough syrup linked to diethylene glycol poisoning killed children in several developing nations — a tragedy that robust quality assurance systems are designed to prevent.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Real-World Impact",
          body: "In 2022, the WHO issued global alerts for substandard cough syrups containing toxic levels of diethylene glycol and ethylene glycol. Caribbean nations, which rely heavily on imported pharmaceuticals, must maintain vigilant post-market surveillance to intercept such products before they reach patients.",
        },
        {
          type: "text",
          body: "Caribbean pharmaceutical regulation has evolved from colonial-era ordinances into a modern, multi-layered system. At the national level, pharmacy boards and drug regulatory agencies control licensing, drug registration, and professional standards. At the regional level, CARICOM and its specialised agencies work toward harmonisation — creating common standards that facilitate trade while protecting public health. At the international level, WHO prequalification and PAHO technical cooperation provide additional layers of quality assurance.",
        },
        {
          type: "key-term",
          term: "Pharmaceutical Regulation",
          definition:
            "The system of laws, rules, and administrative mechanisms through which governments ensure that pharmaceutical products are safe, effective, and of acceptable quality, and that pharmacy practice is conducted by qualified professionals within defined legal boundaries.",
        },
        {
          type: "text",
          body: "For pharmacy technicians, understanding regulation is not optional. You operate within a legal framework that defines what you can do, what you must do, and what you are prohibited from doing. Ignorance of the law is never a defence. Whether you are checking that a controlled substance register is properly maintained, verifying that a product bears a valid registration number, or ensuring that cold chain records are complete, you are acting as the frontline of regulatory compliance.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Three Pillars of Pharmaceutical Regulation",
        },
        {
          type: "table",
          caption: "Three Pillars of Caribbean Pharmaceutical Regulation",
          headers: ["Pillar", "Focus", "Examples"],
          rows: [
            [
              "Product Regulation",
              "Ensuring medicines are safe, effective, and of quality",
              "Drug registration, GMP inspection, batch testing, post-market surveillance",
            ],
            [
              "Professional Regulation",
              "Ensuring practitioners are qualified and competent",
              "Pharmacist licensing, technician certification, continuing education requirements",
            ],
            [
              "Practice Regulation",
              "Ensuring pharmacy operations meet legal standards",
              "Pharmacy premises licensing, record-keeping requirements, controlled substance protocols",
            ],
          ],
        },
        {
          type: "knowledge-check",
          question: "Why is pharmaceutical regulation particularly critical in Caribbean nations?",
          options: [
            "Because Caribbean nations manufacture most of their own medicines",
            "Because most medications are imported across long supply chains, increasing risk of substandard products",
            "Because Caribbean regulatory standards are already the strictest in the world",
            "Because the region has no international oversight from WHO or PAHO",
          ],
          correctIndex: 1,
          explanation:
            "Caribbean nations import the vast majority of their pharmaceuticals across long ocean supply chains. This geographic reality increases the risk of product degradation, counterfeiting, and supply disruption — making robust regulatory systems essential for patient safety.",
        },
      ],
    },
    // ── Lesson 1.2 ──
    {
      id: "m1-l2",
      title: "National Regulatory Bodies: Trinidad, Jamaica, Barbados & Grenada",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Pharmacy Boards and Drug Authorities",
        },
        {
          type: "text",
          body: "Each Caribbean nation maintains its own regulatory authority responsible for overseeing pharmaceutical products and pharmacy practice. While these bodies share common goals — protecting public health through safe, quality medicines — their structures, powers, and procedures differ significantly, reflecting each country's unique legal traditions and healthcare infrastructure.",
        },
        {
          type: "island-comparison",
          title: "National Pharmacy Regulatory Bodies Compared",
          description:
            "Understanding the regulatory body in each jurisdiction is essential for any pharmacy technician working across the region.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Pharmacy Board of Trinidad and Tobago — established under the Pharmacy Board Act (Chapter 29:52)",
                "The Chemistry, Food and Drugs Division (CFDD) under the Ministry of Health handles drug registration and quality control",
                "The Board registers pharmacists, approves pharmacies, and sets professional standards",
                "NIPDEC (National Insurance Property Development Company) manages public pharmaceutical procurement",
                "Drug inspectors conduct regular pharmacy inspections and enforce compliance",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Pharmacy Council of Jamaica (PCJ) — established under the Pharmacy Act of 1975 (amended 2013)",
                "PCJ registers pharmacists, accredits training programmes, and enforces professional standards",
                "The Standards and Regulation Division of the Ministry of Health handles drug registration",
                "National Health Fund (NHF) manages pharmaceutical benefits and essential medicines list",
                "Jamaica has one of the most comprehensive pharmacy regulatory frameworks in the English-speaking Caribbean",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Barbados Drug Service (BDS) — operates under the Drug Service Act and the Pharmacy Act (Cap. 372D)",
                "BDS manages public sector pharmaceutical procurement and distribution through polyclinics and Queen Elizabeth Hospital",
                "The Barbados National Drug Formulary (BNDF) governs prescribing and dispensing in the public sector",
                "The Chief Pharmacist's Office oversees pharmacy standards and inspection",
                "Private pharmacies are regulated separately under the Pharmacy Act",
              ],
            },
            {
              name: "Grenada",
              flag: "🇬🇩",
              details: [
                "Pharmacy Council of Grenada — operates under the Pharmacy Act and related health legislation",
                "Drug registration is handled through the Ministry of Health in conjunction with the OECS Pharmaceutical Procurement Service",
                "As an OECS member, Grenada participates in pooled pharmaceutical procurement for cost savings",
                "The Pharmacist Inspector's Office conducts compliance inspections",
                "Grenada's small scale means the regulatory framework relies heavily on regional support from CARPHA",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "NIPDEC — Trinidad's Procurement Powerhouse",
          body: "The National Insurance Property Development Company (NIPDEC) is a state enterprise in Trinidad & Tobago that manages pharmaceutical procurement for public health institutions. NIPDEC purchases, stores, and distributes medicines to hospitals, health centres, and chronic disease programmes. Understanding NIPDEC's role is essential for any technician working in the public health sector in T&T.",
        },
        {
          type: "text",
          body: "The powers granted to these regulatory bodies typically include: registering pharmacists and pharmacy premises; approving and revoking drug registrations; conducting inspections; investigating complaints; disciplining professionals for misconduct; and advising government on pharmaceutical policy. However, the extent of these powers and the resources available to exercise them vary dramatically from island to island.",
        },
        {
          type: "heading",
          level: 3,
          text: "Common Functions of Caribbean Pharmacy Boards",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Registration of pharmacists and, in some jurisdictions, pharmacy technicians",
            "Licensing of pharmacy premises (community, hospital, and wholesale)",
            "Approval or recognition of pharmacy education programmes",
            "Investigation of complaints and professional misconduct",
            "Setting and enforcing standards of professional practice",
            "Advising the Minister of Health on pharmacy-related policy",
            "Maintaining public registers of licensed pharmacists and pharmacies",
          ],
        },
        {
          type: "key-term",
          term: "Pharmacy Board",
          definition:
            "A statutory body established by law to regulate the practice of pharmacy within a specific jurisdiction. Pharmacy boards are typically responsible for professional registration, premises licensing, and enforcement of practice standards. In the Caribbean, each sovereign nation maintains its own board or equivalent regulatory authority.",
        },
        {
          type: "knowledge-check",
          question: "Which organisation manages public pharmaceutical procurement in Trinidad & Tobago?",
          options: [
            "The Pharmacy Council of Jamaica (PCJ)",
            "The Barbados Drug Service (BDS)",
            "NIPDEC (National Insurance Property Development Company)",
            "CARPHA (Caribbean Public Health Agency)",
          ],
          correctIndex: 2,
          explanation:
            "NIPDEC is the state enterprise in Trinidad & Tobago responsible for purchasing, storing, and distributing pharmaceutical products to public health institutions. It plays a critical role in ensuring that hospitals and health centres across the twin-island republic have access to essential medicines.",
        },
      ],
    },
    // ── Lesson 1.3 ──
    {
      id: "m1-l3",
      title: "Regional & International Bodies: CARICOM, CARPHA, and PAHO/WHO",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Regional Layer of Pharmaceutical Governance",
        },
        {
          type: "text",
          body: "No Caribbean island is an island when it comes to pharmaceutical regulation — at least, not entirely. Regional and international organisations provide a critical layer of governance that complements national systems. These bodies promote harmonisation, pool resources, and provide technical assistance that small island developing states could not sustain alone.",
        },
        {
          type: "table",
          caption: "Key Regional and International Organisations",
          headers: ["Organisation", "Established", "Role in Pharmaceutical Governance"],
          rows: [
            [
              "CARICOM",
              "1973",
              "Drives regional integration including the CARICOM Regional Standard (CRS) for pharmaceutical harmonisation; the CSME (CARICOM Single Market and Economy) framework facilitates pharmaceutical trade",
            ],
            [
              "CARPHA",
              "2013",
              "Regional public health agency headquartered in Port of Spain; operates the Caribbean Medicines Evaluation & Testing (CaMET) laboratory; conducts post-market surveillance and quality testing",
            ],
            [
              "PAHO/WHO",
              "1902/1948",
              "Provides technical cooperation on pharmaceutical policy, essential medicines lists, and regulatory strengthening; the WHO Prequalification Programme assures product quality for international procurement",
            ],
            [
              "OECS PPS",
              "1986",
              "Pooled pharmaceutical procurement for 9 Eastern Caribbean states; achieves 30-50% cost savings through bulk purchasing; essential for small islands with limited negotiating power",
            ],
            [
              "CAP",
              "1961",
              "Caribbean Association of Pharmacists; professional body promoting standards, continuing education, and advocacy for the pharmacy profession across the region",
            ],
          ],
        },
        {
          type: "text",
          body: "CARPHA deserves special attention. Formed in 2013 by merging five existing regional health institutions, CARPHA serves as the Caribbean's public health watchdog. Its CaMET laboratory in Trinidad tests pharmaceutical products circulating in the region, identifying substandard and falsified medicines before they can cause harm. When a batch of medications fails quality testing, CARPHA issues regional alerts that national regulatory agencies use to initiate recalls and import bans.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "CARPHA Alerts",
          body: "Pharmacy technicians should be aware that CARPHA periodically issues pharmaceutical quality alerts. These alerts notify pharmacies and health facilities across the region when a product has been found to be substandard, falsified, or subject to recall. Ensure your pharmacy has a system to receive and act on these alerts promptly.",
        },
        {
          type: "key-term",
          term: "OECS Pharmaceutical Procurement Service (PPS)",
          definition:
            "A pooled procurement mechanism through which nine Eastern Caribbean states (Antigua & Barbuda, Dominica, Grenada, Montserrat, St. Kitts & Nevis, St. Lucia, St. Vincent & the Grenadines, Anguilla, and the British Virgin Islands) jointly purchase essential medicines at negotiated bulk prices, achieving savings of 30-50% compared to individual country purchasing.",
        },
        {
          type: "text",
          body: "The Pan American Health Organisation (PAHO), as the regional office of WHO for the Americas, provides extensive pharmaceutical sector support to Caribbean nations. This includes technical assistance for developing national essential medicines lists, strengthening regulatory capacity, and implementing rational drug use policies. The PAHO Strategic Fund allows countries to purchase quality-assured medicines at reduced prices — a vital resource for Caribbean nations seeking affordable access to essential medicines.",
        },
        {
          type: "case-study",
          title: "Case Study: CARPHA Quality Alert — Substandard Antihypertensive",
          scenario:
            "In early 2023, CARPHA's CaMET laboratory identified a batch of amlodipine tablets distributed across three Caribbean islands that contained only 62% of the stated active ingredient. The product had been imported from a manufacturer not prequalified by WHO. CARPHA issued an immediate alert to all CARICOM member states, recommending recall of the affected batch and suspension of imports from the manufacturer pending investigation.",
          questions: [
            "What steps should a pharmacy technician take upon receiving this alert?",
            "How would you identify the affected batch in your pharmacy's inventory?",
            "What should you tell patients who have been dispensed medication from the recalled batch?",
            "What systemic improvements could prevent this situation from recurring?",
          ],
          discussion:
            "This scenario demonstrates the critical role of post-market surveillance and regional cooperation. The technician should immediately quarantine the affected batch (checking lot numbers against the alert), document all actions taken, notify the supervising pharmacist, and assist in contacting patients who received the affected product. Systemically, this case highlights the importance of sourcing from WHO-prequalified manufacturers and maintaining robust batch tracking systems.",
        },
        {
          type: "knowledge-check",
          question: "What is the primary function of CARPHA's CaMET laboratory?",
          options: [
            "Manufacturing generic medicines for CARICOM member states",
            "Testing pharmaceutical products circulating in the region for quality and identifying substandard or falsified medicines",
            "Training pharmacy technicians for Caribbean practice",
            "Negotiating pharmaceutical prices with international manufacturers",
          ],
          correctIndex: 1,
          explanation:
            "CARPHA's Caribbean Medicines Evaluation & Testing (CaMET) laboratory tests pharmaceutical products circulating in the region to ensure they meet quality standards. When products fail testing, CARPHA issues alerts to national regulatory agencies, triggering recalls and import bans to protect public health.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m1-q1",
      question: "Under which legislation does the Pharmacy Board of Trinidad and Tobago operate?",
      options: [
        "The Pharmacy Act (Cap. 372D)",
        "The Pharmacy Board Act (Chapter 29:52)",
        "The Dangerous Drugs Act",
        "The Food and Drugs Act",
      ],
      correctIndex: 1,
      explanation:
        "The Pharmacy Board of Trinidad and Tobago is established under the Pharmacy Board Act, Chapter 29:52 of the Laws of Trinidad and Tobago. This legislation sets out the Board's powers, functions, and composition.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q2",
      question: "Which of the following are functions commonly performed by Caribbean pharmacy boards?",
      options: [
        "Registration of pharmacists",
        "Licensing of pharmacy premises",
        "Manufacturing generic medicines",
        "Investigating complaints against professionals",
        "Setting wholesale drug prices",
      ],
      correctIndex: 0,
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 3],
      },
      explanation:
        "Caribbean pharmacy boards typically register pharmacists, license pharmacy premises, and investigate professional complaints. They do not manufacture medicines or set wholesale prices — those functions belong to procurement agencies and market forces respectively.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q3",
      question: "The Pharmacy Council of Jamaica (PCJ) was established under the Pharmacy Act of 1975.",
      options: ["True", "False"],
      correctIndex: 0,
      questionType: "true_false",
      questionData: {
        correct_answer: true,
      },
      explanation:
        "The Pharmacy Council of Jamaica was indeed established under the Pharmacy Act of 1975, which has since been amended (notably in 2013) to modernise the regulatory framework.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q4",
      question: "Match each organisation with its primary role in Caribbean pharmaceutical regulation.",
      options: ["CARPHA", "OECS PPS", "NIPDEC", "PAHO/WHO"],
      correctIndex: 0,
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "CARPHA", right: "Regional post-market surveillance and quality testing" },
          { left: "OECS PPS", right: "Pooled pharmaceutical procurement for Eastern Caribbean states" },
          { left: "NIPDEC", right: "Public pharmaceutical procurement in Trinidad & Tobago" },
          { left: "PAHO/WHO", right: "Technical cooperation and pharmaceutical policy support" },
        ],
      },
      explanation:
        "Each organisation plays a distinct role: CARPHA handles quality testing and surveillance, OECS PPS manages pooled procurement for small Eastern Caribbean islands, NIPDEC manages T&T's public supply chain, and PAHO/WHO provides international technical cooperation.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m1-q5",
      question: "What approximate cost savings does the OECS Pharmaceutical Procurement Service achieve through bulk purchasing?",
      options: [
        "5-10%",
        "10-20%",
        "30-50%",
        "70-90%",
      ],
      correctIndex: 2,
      explanation:
        "The OECS PPS achieves savings of approximately 30-50% compared to individual country purchasing by pooling the purchasing power of nine Eastern Caribbean states. This makes essential medicines significantly more affordable for small island developing states.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q6",
      question: "A pharmacy receives a CARPHA quality alert about a batch of amlodipine tablets. Arrange the correct sequence of actions the pharmacy technician should take.",
      options: [
        "Notify the supervising pharmacist",
        "Quarantine the affected batch from dispensing stock",
        "Check batch/lot numbers against the alert",
        "Document all actions taken",
        "Assist in contacting patients who received the affected product",
      ],
      correctIndex: 0,
      questionType: "ordering",
      questionData: {
        correct_order: [0, 2, 1, 3, 4],
      },
      explanation:
        "The correct sequence is: (1) Notify the supervising pharmacist immediately, (2) Check batch/lot numbers against the alert, (3) Quarantine the affected batch, (4) Document all actions taken, and (5) Assist in contacting affected patients. Notifying the pharmacist first ensures proper oversight of the response.",
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q7",
      question: "In which year was CARPHA (Caribbean Public Health Agency) established?",
      options: [
        "2003",
        "2008",
        "2013",
        "2018",
      ],
      correctIndex: 2,
      explanation:
        "CARPHA was established in 2013 by merging five existing regional health institutions. It is headquartered in Port of Spain, Trinidad and Tobago, and serves as the Caribbean's primary regional public health body.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q8",
      question: "Which body manages the Barbados National Drug Formulary?",
      options: [
        "The Pharmacy Council of Jamaica",
        "CARPHA",
        "The Barbados Drug Service",
        "NIPDEC",
      ],
      correctIndex: 2,
      explanation:
        "The Barbados Drug Service (BDS) manages the Barbados National Drug Formulary (BNDF), which governs prescribing and dispensing decisions in the public health sector. The BNDF is a key tool for rational drug use in Barbados.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q9",
      question: "Grenada's pharmaceutical regulation relies heavily on regional support because of the country's _____ scale.",
      options: ["small", "large", "moderate", "expanding"],
      correctIndex: 0,
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: ["small"],
        case_sensitive: false,
      },
      explanation:
        "Grenada's small size means its national regulatory capacity is limited. The country relies heavily on regional bodies such as CARPHA for quality testing and the OECS PPS for pharmaceutical procurement.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q10",
      question: "A pharmacy in Kingston, Jamaica receives a shipment of metformin tablets from a new supplier. The pharmacist notices the product lacks a Jamaica Drug Registration number. As the pharmacy technician assisting with goods receipt, what is the most appropriate course of action?",
      options: [
        "Accept the shipment and begin dispensing — metformin is a common drug",
        "Accept the shipment but place it in quarantine until the registration number can be verified",
        "Refuse the shipment and report to the supervising pharmacist; contact the Standards and Regulation Division for verification",
        "Accept the shipment because the supplier's invoice confirms the product is legitimate",
      ],
      correctIndex: 2,
      explanation:
        "A product without a valid drug registration number should never be accepted for dispensing. The correct action is to refuse the shipment, notify the supervising pharmacist, and contact the Standards and Regulation Division of Jamaica's Ministry of Health to verify whether the product is legally registered for distribution in Jamaica.",
      questionType: "scenario",
      questionData: {
        context: "Goods receipt at a community pharmacy in Kingston, Jamaica",
      },
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
  ],
};

// ============================================================================
// MODULE 2 — The CARICOM Regional Standard for Pharmaceuticals (CRS)
// ============================================================================

const module2: Module = {
  id: "m2-crs",
  number: 2,
  title: "The CARICOM Regional Standard for Pharmaceuticals (CRS)",
  description:
    "Understand the CARICOM Regional Standard — the Caribbean's ambitious framework for harmonising drug registration across member states. Learn how the CRS works, its benefits and challenges, and its impact on pharmaceutical trade and patient access.",
  learningObjectives: [
    "Explain the purpose and structure of the CARICOM Regional Standard for Pharmaceuticals",
    "Describe the mutual recognition process for drug registration under the CRS",
    "Analyse the benefits and limitations of regional pharmaceutical harmonisation",
    "Evaluate the impact of the CRS on medicine availability and affordability in CARICOM states",
  ],
  lessons: [
    // ── Lesson 2.1 ──
    {
      id: "m2-l1",
      title: "What Is the CARICOM Regional Standard?",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Harmonising Pharmaceutical Regulation Across the Caribbean",
        },
        {
          type: "text",
          body: "The CARICOM Regional Standard for Pharmaceuticals (CRS) represents one of the most ambitious pharmaceutical harmonisation initiatives in the developing world. Born from the recognition that fifteen small island states maintaining fifteen separate drug registration systems is inefficient and costly, the CRS aims to create a common framework for evaluating and approving pharmaceutical products across all CARICOM member states.",
        },
        {
          type: "text",
          body: "The concept is straightforward: if a medicine has been rigorously evaluated and approved by one CARICOM member state, why should it undergo the same lengthy and expensive process in each of the other fourteen? The CRS establishes common evaluation criteria and a mutual recognition mechanism that allows approved products to gain registration across the region more efficiently.",
        },
        {
          type: "key-term",
          term: "CARICOM Regional Standard (CRS)",
          definition:
            "A harmonised framework developed by CARICOM for the evaluation, registration, and quality assurance of pharmaceutical products across member states. The CRS establishes common technical standards and a mutual recognition mechanism that enables medicines approved in one member state to gain streamlined registration in others.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Historical Context",
          body: "The CRS was developed with technical support from PAHO/WHO and has evolved through several iterations since its initial conception in the early 2000s. It draws on the experience of other regional harmonisation initiatives, including the European Medicines Agency (EMA) centralised procedure and the African Medicines Harmonisation Initiative.",
        },
        {
          type: "heading",
          level: 3,
          text: "Core Components of the CRS",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Common Technical Document (CTD): A standardised dossier format for drug registration applications, aligned with international ICH guidelines",
            "Mutual Recognition: A mechanism allowing a product registered in one CARICOM state to be recognised in others without full re-evaluation",
            "Good Manufacturing Practice (GMP): Harmonised standards for manufacturing quality, based on WHO GMP guidelines",
            "Quality Control: Common standards for laboratory testing and quality assurance",
            "Pharmacovigilance: Harmonised reporting and monitoring of adverse drug reactions across the region",
          ],
        },
        {
          type: "text",
          body: "The CRS does not replace national regulatory agencies. Instead, it provides a common framework within which those agencies operate. Each country retains sovereignty over its drug registration decisions, but the CRS creates a shared set of standards and procedures that makes those decisions more consistent, efficient, and transparent across the region.",
        },
        {
          type: "table",
          caption: "CRS vs. National Drug Registration — Key Differences",
          headers: ["Feature", "National Registration (Pre-CRS)", "CRS Framework"],
          rows: [
            [
              "Application Format",
              "Varies by country; some accept informal submissions",
              "Standardised Common Technical Document (CTD)",
            ],
            [
              "Evaluation Criteria",
              "Inconsistent; some countries lack full evaluation capacity",
              "Harmonised criteria based on WHO/ICH standards",
            ],
            [
              "Cross-Border Recognition",
              "None — each country evaluates independently",
              "Mutual recognition reduces duplication",
            ],
            [
              "Timeline",
              "Unpredictable; can take years in some jurisdictions",
              "Target: 90-180 days for mutual recognition pathway",
            ],
            [
              "GMP Requirements",
              "Variable; not all countries conduct GMP inspections",
              "Harmonised GMP standards with shared inspection reports",
            ],
          ],
        },
        {
          type: "knowledge-check",
          question: "What is the primary purpose of the CARICOM Regional Standard (CRS)?",
          options: [
            "To replace all national pharmacy boards with a single regional authority",
            "To create common standards for pharmaceutical evaluation and enable mutual recognition of drug registrations across CARICOM states",
            "To ban the importation of generic medicines into the Caribbean",
            "To require all medicines sold in CARICOM to be manufactured within the region",
          ],
          correctIndex: 1,
          explanation:
            "The CRS aims to harmonise pharmaceutical evaluation standards and enable mutual recognition, so that a medicine approved in one CARICOM state can gain streamlined registration in others. It does not replace national agencies — countries retain sovereignty over their drug registration decisions.",
        },
      ],
    },
    // ── Lesson 2.2 ──
    {
      id: "m2-l2",
      title: "The Mutual Recognition Process in Practice",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "How a Product Moves from One Island's Register to Another",
        },
        {
          type: "text",
          body: "Mutual recognition is the cornerstone of the CRS. In theory, the process works as follows: a pharmaceutical manufacturer submits a registration dossier to a 'reference' CARICOM member state. That state conducts a full evaluation of the product's quality, safety, and efficacy. If the product is approved, the manufacturer can then apply for registration in other CARICOM states through a streamlined 'mutual recognition' pathway, submitting the reference state's evaluation report rather than undergoing a completely new evaluation.",
        },
        {
          type: "heading",
          level: 3,
          text: "Steps in the Mutual Recognition Pathway",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "The manufacturer selects a Reference Member State (RMS) and submits a full Common Technical Document (CTD)",
            "The RMS evaluates the dossier and, if satisfied, grants marketing authorisation",
            "The manufacturer submits a mutual recognition application to one or more Concerned Member States (CMS)",
            "The application includes the CTD plus the RMS evaluation report and approval certificate",
            "Each CMS reviews the RMS evaluation and may accept, request clarification, or raise objections",
            "If no objections are raised within the agreed timeline, the CMS grants marketing authorisation",
            "In cases of disagreement, an arbitration mechanism may be triggered through CARICOM",
          ],
        },
        {
          type: "key-term",
          term: "Reference Member State (RMS)",
          definition:
            "Under the CRS mutual recognition procedure, the CARICOM member state that conducts the initial full evaluation of a pharmaceutical product's registration dossier. The RMS evaluation report is then shared with other member states (Concerned Member States) to facilitate streamlined registration.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Reality Check — Progress Is Gradual",
          body: "While the CRS framework is well-designed in theory, implementation has been slower than hoped. Not all CARICOM states have the regulatory capacity to serve as Reference Member States. Some countries have been reluctant to accept other states' evaluations without their own review. Political, economic, and logistical barriers continue to slow full implementation. However, progress continues, and the CRS remains the region's best path toward efficient, high-quality pharmaceutical regulation.",
        },
        {
          type: "text",
          body: "The benefits of mutual recognition are significant. For manufacturers, it reduces the cost and time of registering products across the region, which in turn increases the availability of quality medicines. For regulators, it allows resource-constrained agencies to leverage the expertise of better-resourced neighbours. For patients, it means faster access to a wider range of quality-assured medicines at more competitive prices.",
        },
        {
          type: "text",
          body: "However, challenges remain. Capacity disparities between countries mean that only a few — notably Trinidad & Tobago and Jamaica — are positioned to serve as credible Reference Member States. Some countries lack the laboratory infrastructure and trained evaluators needed to participate fully. Political sensitivities around sovereignty and trust also play a role: accepting another country's regulatory decision requires confidence in that country's evaluation standards.",
        },
        {
          type: "table",
          caption: "Benefits and Challenges of the CRS Mutual Recognition Process",
          headers: ["Benefits", "Challenges"],
          rows: [
            ["Reduced duplication of regulatory effort", "Capacity disparities between member states"],
            ["Faster market access for quality medicines", "Political sensitivities around sovereignty"],
            ["Lower registration costs for manufacturers", "Limited laboratory infrastructure in smaller states"],
            ["Broader range of available medicines", "Varying levels of trust in other states' evaluations"],
            ["Better use of scarce regulatory expertise", "Need for harmonised legal frameworks"],
          ],
        },
        {
          type: "knowledge-check",
          question: "In the CRS mutual recognition process, what is the role of the Reference Member State (RMS)?",
          options: [
            "To manufacture the pharmaceutical product for distribution",
            "To conduct the initial full evaluation of the registration dossier, whose report is shared with other member states",
            "To set the retail price of the medicine across the region",
            "To serve as the sole point of sale for the product in CARICOM",
          ],
          correctIndex: 1,
          explanation:
            "The Reference Member State (RMS) conducts the initial full evaluation of the product's quality, safety, and efficacy. Its evaluation report is then shared with Concerned Member States (CMS), enabling them to make streamlined registration decisions without conducting full independent evaluations.",
        },
      ],
    },
    // ── Lesson 2.3 ──
    {
      id: "m2-l3",
      title: "Impact of the CRS on Medicine Availability and Quality",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "From Policy to Patient — How Harmonisation Affects the Pharmacy Counter",
        },
        {
          type: "text",
          body: "For a pharmacy technician, the CRS may seem like a distant policy matter. But its effects — or the consequences of its incomplete implementation — are felt at the pharmacy counter every day. When a commonly needed medication is unavailable because the manufacturer has not yet completed registration in your specific island, that is a regulatory access gap that the CRS is designed to close.",
        },
        {
          type: "text",
          body: "Consider the situation across the smaller Eastern Caribbean islands. With populations ranging from 50,000 to 180,000, these markets are often too small to attract pharmaceutical manufacturers willing to invest in individual country registrations. The CRS, by offering access to the combined CARICOM market of over 18 million people through a single registration pathway, makes these smaller markets more viable for manufacturers — and their patients more likely to access the medicines they need.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Practical Impact for Technicians",
          body: "When patients ask why a specific medication is unavailable in their country but can be purchased just across the water in another Caribbean island, the answer often lies in drug registration status. Understanding the CRS helps technicians explain these access gaps to patients and supports advocacy for faster implementation of mutual recognition.",
        },
        {
          type: "case-study",
          title: "Case Study: Rosuvastatin Registration Across the OECS",
          scenario:
            "A generic rosuvastatin product is registered and widely available in Trinidad & Tobago, where it was evaluated by the CFDD. However, the same product is not yet registered in St. Lucia, Dominica, or Grenada. Patients in those countries who were prescribed rosuvastatin while visiting Trinidad must switch to a different statin upon returning home, causing confusion and potential compliance issues. Under the CRS mutual recognition pathway, the manufacturer could leverage the T&T evaluation report to apply for streamlined registration in these OECS states.",
          questions: [
            "Why might a product registered in T&T not be available in smaller OECS states?",
            "How does the CRS mutual recognition pathway address this specific problem?",
            "What are the potential clinical implications of forcing patients to switch statins due to availability?",
          ],
          discussion:
            "This scenario illustrates the real-world consequences of fragmented drug registration. Without mutual recognition, manufacturers must invest time and money in separate registrations for each small island market — an investment that may not be justified by the market size. The CRS solves this by allowing the T&T evaluation to serve as the basis for OECS registrations, reducing cost and time while maintaining quality assurance standards.",
        },
        {
          type: "heading",
          level: 3,
          text: "Quality Assurance Through the CRS",
        },
        {
          type: "text",
          body: "The CRS is not merely about speed and efficiency — it is fundamentally about quality. By setting harmonised evaluation standards based on WHO/ICH guidelines, the CRS raises the bar across the region. Countries that previously accepted products with minimal evaluation now have access to more rigorous assessment tools and criteria. CARPHA's CaMET laboratory provides a shared resource for quality testing that most individual islands could not afford to maintain.",
        },
        {
          type: "text",
          body: "Post-market surveillance is another critical quality component. Under the CRS framework, adverse drug reaction reports from any member state are shared regionally, creating a larger safety database than any single country could generate. This is particularly important in the Caribbean, where small populations mean that rare adverse effects may never be detected through national surveillance alone.",
        },
        {
          type: "key-term",
          term: "Post-Market Surveillance",
          definition:
            "The systematic monitoring of pharmaceutical products after they have been authorised for sale. Includes collecting and analysing adverse drug reaction reports, conducting quality testing of marketed products, and taking regulatory action (such as recalls or label changes) when safety or quality issues are identified.",
        },
        {
          type: "knowledge-check",
          question: "Why is the CRS particularly beneficial for smaller Eastern Caribbean islands?",
          options: [
            "Because smaller islands have stricter regulations than larger ones",
            "Because their small market size often makes individual drug registrations uneconomic for manufacturers, limiting medicine availability",
            "Because smaller islands manufacture their own medicines and need export assistance",
            "Because the CRS provides free medicines to all OECS member states",
          ],
          correctIndex: 1,
          explanation:
            "Small island markets (populations of 50,000-180,000) are often too small to justify the cost of individual drug registrations for manufacturers. The CRS, by enabling mutual recognition, makes the combined CARICOM market of 18+ million people accessible through a single registration pathway, improving medicine availability for smaller islands.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m2-q1",
      question: "What does the acronym CRS stand for in the context of Caribbean pharmaceutical regulation?",
      options: [
        "Caribbean Regulatory System",
        "CARICOM Regional Standard",
        "Caribbean Registration Scheme",
        "Common Regional Specification",
      ],
      correctIndex: 1,
      explanation:
        "CRS stands for CARICOM Regional Standard — the harmonised framework for pharmaceutical evaluation and registration across CARICOM member states.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q2",
      question: "The CRS replaces all national drug regulatory agencies with a single CARICOM authority.",
      options: ["True", "False"],
      correctIndex: 1,
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      explanation:
        "False. The CRS does not replace national regulatory agencies. Each CARICOM member state retains sovereignty over its drug registration decisions. The CRS provides a common framework and mutual recognition mechanism that makes national processes more consistent and efficient.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q3",
      question: "Which standardised dossier format does the CRS use for drug registration applications?",
      options: [
        "Caribbean Drug Dossier (CDD)",
        "Common Technical Document (CTD)",
        "Regional Registration Report (RRR)",
        "CARICOM Application Form (CAF)",
      ],
      correctIndex: 1,
      explanation:
        "The CRS uses the Common Technical Document (CTD), a standardised dossier format aligned with international ICH (International Council for Harmonisation) guidelines. This format is the global standard for drug registration applications.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q4",
      question: "Arrange the steps of the CRS mutual recognition pathway in the correct order.",
      options: [
        "CMS reviews the RMS evaluation report",
        "Manufacturer submits full CTD to Reference Member State",
        "CMS grants marketing authorisation if no objections",
        "RMS evaluates and grants marketing authorisation",
        "Manufacturer submits mutual recognition application to Concerned Member States",
      ],
      correctIndex: 0,
      questionType: "ordering",
      questionData: {
        correct_order: [1, 3, 4, 0, 2],
      },
      explanation:
        "The correct order is: (1) Manufacturer submits CTD to RMS, (2) RMS evaluates and grants authorisation, (3) Manufacturer submits mutual recognition application to CMS, (4) CMS reviews the RMS evaluation, (5) CMS grants authorisation if no objections.",
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q5",
      question: "Which of the following are core components of the CRS?",
      options: [
        "Common Technical Document (CTD)",
        "Mutual Recognition mechanism",
        "Harmonised GMP standards",
        "Regional retail price controls",
        "Shared pharmacovigilance reporting",
      ],
      correctIndex: 0,
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 2, 4],
      },
      explanation:
        "The CRS includes a standardised CTD, mutual recognition, harmonised GMP, and shared pharmacovigilance. It does not include regional retail price controls — pricing remains a national matter.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q6",
      question: "The approximate combined population of the CARICOM market accessible through CRS registration is _____ million people.",
      options: ["5", "10", "18", "50"],
      correctIndex: 2,
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: ["18", "18 million"],
        case_sensitive: false,
      },
      explanation:
        "The CARICOM region has a combined population of approximately 18 million people. This combined market makes individual product registrations more commercially viable for manufacturers than the small market of any single island state.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q7",
      question: "What is the target timeline for the CRS mutual recognition pathway?",
      options: [
        "30-60 days",
        "90-180 days",
        "1-2 years",
        "3-5 years",
      ],
      correctIndex: 1,
      explanation:
        "The CRS targets a 90-180 day timeline for the mutual recognition pathway, which is significantly faster than the unpredictable timelines (sometimes years) of independent national registration processes.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q8",
      question: "A generic manufacturer has registered a new antihypertensive in Jamaica through a full CTD evaluation by the PCJ. The manufacturer now wants to register the same product in Barbados using the CRS mutual recognition pathway. In this scenario, Jamaica is the _____ and Barbados is the _____.",
      options: [
        "Concerned Member State (CMS); Reference Member State (RMS)",
        "Reference Member State (RMS); Concerned Member State (CMS)",
        "Primary Regulatory Authority; Secondary Regulatory Authority",
        "Marketing Authorisation Holder; Applicant State",
      ],
      correctIndex: 1,
      explanation:
        "Jamaica, having conducted the initial full evaluation, is the Reference Member State (RMS). Barbados, which receives the mutual recognition application and reviews the RMS evaluation report, is the Concerned Member State (CMS).",
      questionType: "scenario",
      questionData: {
        context: "Cross-border drug registration under the CRS framework",
      },
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q9",
      question: "Which of the following is the primary challenge slowing CRS implementation?",
      options: [
        "Excess regulatory capacity across all member states",
        "Capacity disparities between member states and political sensitivities around sovereignty",
        "Too many manufacturers seeking registration",
        "Excessive funding from international donors",
      ],
      correctIndex: 1,
      explanation:
        "The primary challenges to CRS implementation include capacity disparities between member states (only a few can serve as credible Reference Member States), political sensitivities around accepting other countries' regulatory decisions, and varying levels of laboratory infrastructure.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m2-q10",
      question: "Match each CRS feature with its benefit.",
      options: ["Mutual Recognition", "CTD Format", "Shared Pharmacovigilance", "Harmonised GMP"],
      correctIndex: 0,
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Mutual Recognition", right: "Reduces duplication and speeds market access" },
          { left: "CTD Format", right: "Standardises application submissions across the region" },
          { left: "Shared Pharmacovigilance", right: "Creates a larger safety database than any single country" },
          { left: "Harmonised GMP", right: "Ensures consistent manufacturing quality standards" },
        ],
      },
      explanation:
        "Each CRS feature contributes a specific benefit: mutual recognition reduces duplication, CTD standardises submissions, shared pharmacovigilance improves safety monitoring, and harmonised GMP ensures consistent manufacturing quality.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// MODULE 3 — National Pharmacy Acts: Comparing Frameworks Across Caribbean States
// ============================================================================

const module3: Module = {
  id: "m3-pharmacy-acts",
  number: 3,
  title: "National Pharmacy Acts: Comparing Frameworks Across Caribbean States",
  description:
    "Dive deep into the primary legislation governing pharmacy practice in Trinidad & Tobago, Jamaica, Barbados, and Grenada. Compare how each jurisdiction defines professional roles, licensing requirements, and enforcement mechanisms.",
  learningObjectives: [
    "Compare the key provisions of the Pharmacy Board Act (T&T), the Pharmacy Act (Jamaica), and the Pharmacy Act (Barbados)",
    "Differentiate between the licensing requirements for pharmacists, pharmacies, and wholesalers across Caribbean jurisdictions",
    "Evaluate how colonial legal traditions have influenced the structure of modern Caribbean pharmacy legislation",
    "Apply knowledge of jurisdictional differences to real-world practice scenarios",
    "Analyse the enforcement powers available to regulatory bodies under each national Pharmacy Act",
  ],
  lessons: [
    // ── Lesson 3.1 ──
    {
      id: "m3-l1",
      title: "Trinidad & Tobago: The Pharmacy Board Act and Related Legislation",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Understanding T&T's Pharmaceutical Legal Framework",
        },
        {
          type: "text",
          body: "Trinidad and Tobago's pharmaceutical sector is governed by a network of interconnected legislation, with the Pharmacy Board Act (Chapter 29:52) at its centre. This Act establishes the Pharmacy Board, defines who may practise pharmacy, sets licensing requirements for pharmacy premises, and creates the disciplinary framework for professional misconduct.",
        },
        {
          type: "text",
          body: "The Act operates alongside several related statutes: the Food and Drugs Act (Chapter 30:01), which governs the safety and quality of pharmaceutical products; the Dangerous Drugs Act, which controls narcotics and psychotropic substances; and various subsidiary regulations that provide detailed rules for specific aspects of pharmacy practice.",
        },
        {
          type: "key-term",
          term: "Pharmacy Board Act (Chapter 29:52)",
          definition:
            "The primary legislation governing pharmacy practice in Trinidad and Tobago. It establishes the Pharmacy Board, defines the practice of pharmacy, sets registration requirements for pharmacists, and provides for the licensing and inspection of pharmacy premises.",
        },
        {
          type: "heading",
          level: 3,
          text: "Key Provisions of the Pharmacy Board Act",
        },
        {
          type: "table",
          caption: "Key Provisions of the T&T Pharmacy Board Act",
          headers: ["Provision", "Detail"],
          rows: [
            ["Board Composition", "The Pharmacy Board comprises appointed members including registered pharmacists, a medical practitioner, and a Ministry of Health representative"],
            ["Pharmacist Registration", "Applicants must hold a recognised pharmacy qualification, pass the Board's examination or satisfy equivalency requirements, and be of good character"],
            ["Pharmacy Licensing", "Every premises from which prescriptions are dispensed or pharmaceutical products are sold must hold a valid pharmacy licence issued by the Board"],
            ["Inspection Powers", "Drug inspectors appointed under the Act may enter and inspect any pharmacy premises at reasonable times to verify compliance"],
            ["Disciplinary Action", "The Board may reprimand, suspend, or remove from the register any pharmacist found guilty of misconduct, incompetence, or violation of the Act"],
            ["Penalties", "Unregistered practice or operation of an unlicensed pharmacy carries fines and potential imprisonment"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Technician Registration Gap",
          body: "As of the current legislative framework, Trinidad & Tobago does not maintain a separate statutory register for pharmacy technicians. Technicians work under the licence and supervision of a registered pharmacist. There is an ongoing movement toward formal technician registration, but it has not yet been enacted into law. This means technicians must be especially vigilant about operating within the bounds of their supervising pharmacist's licence.",
        },
        {
          type: "text",
          body: "The Chemistry, Food and Drugs Division (CFDD) of the Ministry of Health plays a complementary role. While the Pharmacy Board focuses on professional regulation, the CFDD handles product regulation — evaluating drug registration applications, conducting quality testing, and monitoring the safety of pharmaceutical products on the market. Together, the Board and the CFDD provide comprehensive pharmaceutical oversight.",
        },
        {
          type: "text",
          body: "An important practical consideration: in T&T, only a registered pharmacist may own and operate a pharmacy. This 'pharmacist-only' ownership model differs from some other Caribbean jurisdictions where non-pharmacists may own pharmacy businesses. The rationale is that pharmacist ownership ensures that commercial considerations never override professional and patient safety obligations.",
        },
        {
          type: "knowledge-check",
          question: "What is the current status of pharmacy technician registration in Trinidad & Tobago?",
          options: [
            "Technicians must register separately with the Pharmacy Board",
            "There is no separate statutory register for technicians; they work under a pharmacist's licence",
            "Technicians are registered through CARPHA",
            "Technician registration is handled by COSTAATT directly",
          ],
          correctIndex: 1,
          explanation:
            "Trinidad & Tobago does not currently maintain a separate statutory register for pharmacy technicians. Technicians work under the licence and supervision of a registered pharmacist. While there is a growing movement toward formal technician registration, it has not yet been enacted into law.",
        },
      ],
    },
    // ── Lesson 3.2 ──
    {
      id: "m3-l2",
      title: "Jamaica: The Pharmacy Act and the Pharmacy Council",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Jamaica's Comprehensive Regulatory Framework",
        },
        {
          type: "text",
          body: "Jamaica boasts one of the most comprehensive and well-developed pharmacy regulatory frameworks in the English-speaking Caribbean. The Pharmacy Act of 1975, significantly amended in 2013, establishes the Pharmacy Council of Jamaica (PCJ) as the principal regulatory body and provides a detailed legal framework for all aspects of pharmacy practice.",
        },
        {
          type: "text",
          body: "The 2013 amendments modernised the Act to address contemporary challenges: expanded scope of practice considerations, updated educational requirements, and strengthened enforcement provisions. The PCJ maintains active registers of pharmacists, approved training programmes, and licensed pharmacy premises — creating a transparent system of professional accountability.",
        },
        {
          type: "key-term",
          term: "Pharmacy Council of Jamaica (PCJ)",
          definition:
            "The statutory regulatory body established under the Jamaica Pharmacy Act (1975, amended 2013) responsible for registering pharmacists, licensing pharmacy premises, accrediting pharmacy education programmes, and enforcing professional standards across the island.",
        },
        {
          type: "heading",
          level: 3,
          text: "PCJ Powers and Functions",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Maintains the register of pharmacists and determines eligibility for registration",
            "Approves and monitors pharmacy education and training programmes",
            "Licenses pharmacy premises, including community, hospital, and internet pharmacies",
            "Sets and enforces Codes of Ethics and Standards of Practice",
            "Investigates complaints and conducts disciplinary proceedings",
            "Advises the Minister of Health on pharmacy policy and legislation",
            "Issues practice guidelines and continuing professional development requirements",
          ],
        },
        {
          type: "text",
          body: "One notable feature of Jamaica's system is its relatively clear distinction between 'qualified assistants' and 'pharmacy technicians.' The PCJ recognises specific training programmes for pharmacy support staff and maintains standards for their supervision. This provides a more structured career pathway for pharmacy technicians than exists in some other Caribbean jurisdictions.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The National Health Fund (NHF)",
          body: "Jamaica's National Health Fund is a significant player in pharmaceutical access. The NHF provides subsidised medicines for chronic diseases including diabetes, hypertension, and asthma through its NHF Card Programme. Pharmacy technicians working in participating pharmacies must understand NHF procedures, including eligibility verification, claims processing, and formulary restrictions.",
        },
        {
          type: "table",
          caption: "Jamaica Pharmacy Licensing Categories",
          headers: ["Category", "Requirements", "Scope"],
          rows: [
            ["Community Pharmacy", "Registered pharmacist on premises during operating hours; approved premises layout; adequate storage and record-keeping systems", "Dispensing prescriptions, OTC sales, patient counselling"],
            ["Hospital Pharmacy", "Registered pharmacist-in-charge; compliance with institutional standards; formulary management capability", "Inpatient dispensing, ward supply, clinical pharmacy services"],
            ["Wholesale Drug Dealer", "Separate licence category; approved storage facilities; distribution records required", "Wholesale distribution of pharmaceuticals to licensed pharmacies"],
          ],
        },
        {
          type: "text",
          body: "Jamaica's enforcement framework is notably robust. The PCJ has the power to conduct unannounced inspections, suspend or revoke licences, and refer criminal matters to the Director of Public Prosecutions. Penalties under the Act include substantial fines and imprisonment for serious offences such as operating an unlicensed pharmacy or practising without registration.",
        },
        {
          type: "knowledge-check",
          question: "What programme does Jamaica's National Health Fund (NHF) operate to provide subsidised chronic disease medicines?",
          options: [
            "The OECS Pharmaceutical Procurement Service",
            "The NHF Card Programme",
            "The CARICOM Regional Standard",
            "The Barbados Drug Service formulary",
          ],
          correctIndex: 1,
          explanation:
            "Jamaica's National Health Fund operates the NHF Card Programme, which provides subsidised medicines for chronic diseases including diabetes, hypertension, and asthma. Participating pharmacies must follow specific NHF procedures for eligibility verification and claims processing.",
        },
      ],
    },
    // ── Lesson 3.3 ──
    {
      id: "m3-l3",
      title: "Barbados & Grenada: Smaller Jurisdictions, Unique Approaches",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Regulation in Smaller Caribbean States",
        },
        {
          type: "text",
          body: "Barbados and Grenada represent different points on the spectrum of Caribbean pharmaceutical regulation. Barbados, with its established public health infrastructure centred on the Barbados Drug Service, operates a structured regulatory system despite its small size. Grenada, as one of the smaller OECS states, relies more heavily on regional mechanisms while maintaining its own national framework.",
        },
        {
          type: "island-comparison",
          title: "Barbados vs. Grenada: Regulatory Approaches",
          description:
            "Two island nations with different approaches to pharmaceutical governance, each shaped by their size, resources, and regional relationships.",
          islands: [
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "The Pharmacy Act (Cap. 372D) governs pharmacy practice alongside the Drug Service Act",
                "The Barbados Drug Service (BDS) plays a dual role: procurement agency and regulatory coordinator",
                "The Barbados National Drug Formulary (BNDF) guides rational drug use in the public sector",
                "Queen Elizabeth Hospital pharmacy department serves as the island's main hospital pharmacy",
                "Eight government polyclinics with pharmacy services distributed across the island",
                "The Chief Pharmacist's Office coordinates standards, inspection, and policy",
              ],
            },
            {
              name: "Grenada",
              flag: "🇬🇩",
              details: [
                "The Pharmacy Act and Drugs (Prevention of Misuse) Act form the core legislative framework",
                "The Pharmacy Council of Grenada registers pharmacists and oversees practice",
                "Heavy reliance on OECS Pharmaceutical Procurement Service for medicine supply",
                "St. George's University's School of Pharmacy contributes to local pharmaceutical education and expertise",
                "CARPHA provides laboratory testing and quality assurance support",
                "Limited in-country capacity for drug registration evaluation — leverages regional mechanisms",
              ],
            },
          ],
        },
        {
          type: "text",
          body: "Barbados's system is notable for the central role of the Drug Service. Unlike many Caribbean countries where procurement and regulation are separate functions, Barbados's Drug Service integrates supply chain management with quality oversight. The Drug Service purchases, tests, stores, and distributes medicines to all public health facilities, creating a unified system from procurement to patient. This integration is possible because of Barbados's small geographic size and concentrated population.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Grenada's Regional Advantage",
          body: "Grenada's participation in the OECS Pharmaceutical Procurement Service is a strategic advantage. By pooling its purchasing with eight other small island states, Grenada accesses medicines at prices it could never negotiate alone. This is a model for how small states can use regional cooperation to overcome the limitations of their individual market size.",
        },
        {
          type: "text",
          body: "For pharmacy technicians, the practical implication is clear: the regulatory environment you operate in depends entirely on where you work. A technician in Bridgetown, Barbados will navigate a different set of rules, forms, and procedures than one in St. George's, Grenada — even though both are working to the same fundamental goal of safe, effective pharmaceutical care. Understanding these differences is essential for any technician considering work across multiple Caribbean jurisdictions.",
        },
        {
          type: "key-term",
          term: "Barbados National Drug Formulary (BNDF)",
          definition:
            "The official list of pharmaceutical products approved for use in the Barbados public health system. The BNDF guides prescribing and dispensing decisions in government health facilities, ensuring rational drug use, cost-effectiveness, and consistent availability of essential medicines.",
        },
        {
          type: "text",
          body: "St. George's University in Grenada deserves mention for its School of Pharmacy, which is the only programme of its kind in the OECS. Graduates serve not only Grenada but the wider Eastern Caribbean, contributing pharmaceutical expertise across the sub-region. This educational resource is a significant asset for Grenada's pharmaceutical sector.",
        },
        {
          type: "knowledge-check",
          question: "What distinguishes the Barbados Drug Service from procurement agencies in other Caribbean states?",
          options: [
            "It only handles veterinary medicines",
            "It integrates procurement, quality assurance, and distribution in a single agency",
            "It operates independently of the government",
            "It manufactures all medicines locally",
          ],
          correctIndex: 1,
          explanation:
            "The Barbados Drug Service is notable for integrating pharmaceutical procurement, quality oversight, and distribution to public health facilities within a single agency. This unified approach is facilitated by Barbados's small size and allows for comprehensive supply chain management from purchasing to patient.",
        },
      ],
    },
    // ── Lesson 3.4 ──
    {
      id: "m3-l4",
      title: "Comparing Frameworks: Key Differences and Common Themes",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "A Comparative Analysis of Caribbean Pharmacy Legislation",
        },
        {
          type: "text",
          body: "Despite their shared colonial heritage and regional proximity, Caribbean nations have developed distinct approaches to pharmaceutical regulation. Understanding these differences is crucial for pharmacy technicians who may work across jurisdictions, and for appreciating the challenges of regional harmonisation under the CRS.",
        },
        {
          type: "table",
          caption: "Comparative Overview: Caribbean Pharmacy Acts",
          headers: ["Feature", "Trinidad & Tobago", "Jamaica", "Barbados", "Grenada"],
          rows: [
            ["Primary Legislation", "Pharmacy Board Act (Ch. 29:52)", "Pharmacy Act (1975, amended 2013)", "Pharmacy Act (Cap. 372D)", "Pharmacy Act"],
            ["Regulatory Body", "Pharmacy Board", "Pharmacy Council of Jamaica (PCJ)", "Chief Pharmacist's Office / BDS", "Pharmacy Council of Grenada"],
            ["Pharmacist Ownership Required?", "Yes", "No — corporate ownership permitted", "No — but pharmacist must be on premises", "Varies by licence type"],
            ["Technician Registration", "No separate register", "Distinguished roles for assistants and technicians", "Operating under pharmacist supervision", "Under development"],
            ["Drug Procurement (Public)", "NIPDEC", "NHF / Ministry of Health", "Barbados Drug Service", "OECS PPS"],
            ["Enforcement", "Drug inspectors under the Act", "PCJ inspectors; referral to DPP for criminal matters", "Drug Service inspections", "Pharmacist Inspector's Office"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Common Themes Across Jurisdictions",
        },
        {
          type: "text",
          body: "Despite the differences, several themes are consistent across all Caribbean pharmaceutical frameworks. Every jurisdiction requires that only registered pharmacists may practise pharmacy. Every jurisdiction requires pharmacy premises to be licensed. Every jurisdiction has provisions for inspection and enforcement. And every jurisdiction imposes penalties for unlicensed practice. These common threads provide a foundation for regional harmonisation.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "All jurisdictions require pharmacist registration as a prerequisite for practice",
            "All jurisdictions mandate pharmacy premises licensing with periodic renewal",
            "All jurisdictions have inspection powers vested in regulatory authorities",
            "All jurisdictions classify controlled substances under their own Dangerous Drugs Act",
            "All jurisdictions are influenced by British common law tradition in their pharmacy legislation",
            "All jurisdictions are moving toward stronger technician recognition, though at different paces",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Colonial Legal Heritage",
          body: "The pharmacy laws of Trinidad & Tobago, Jamaica, Barbados, and Grenada all descend from British colonial legislation. The original Pharmacy Acts were modelled on the United Kingdom's pharmacy laws of the 19th and early 20th centuries. While each country has amended and updated its legislation since independence, the fundamental structure — a statutory board, a professional register, premises licensing, and disciplinary powers — reflects this shared British heritage.",
        },
        {
          type: "key-term",
          term: "Scope of Practice",
          definition:
            "The range of professional activities that a healthcare practitioner is authorised to perform under the law. For pharmacy technicians, scope of practice defines what tasks they may carry out, typically under the supervision of a registered pharmacist, and varies by jurisdiction across the Caribbean.",
        },
        {
          type: "knowledge-check",
          question: "Which Caribbean country requires that pharmacies be owned by registered pharmacists?",
          options: [
            "Jamaica",
            "Barbados",
            "Trinidad & Tobago",
            "Grenada",
          ],
          correctIndex: 2,
          explanation:
            "Trinidad & Tobago maintains a 'pharmacist-only' ownership model, where only registered pharmacists may own and operate pharmacy businesses. Jamaica, by contrast, permits corporate ownership of pharmacies, provided a registered pharmacist is present during operating hours.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m3-q1",
      question: "Which legislation is the primary law governing pharmacy practice in Trinidad & Tobago?",
      options: [
        "The Dangerous Drugs Act",
        "The Pharmacy Board Act (Chapter 29:52)",
        "The Food and Drugs Act",
        "The CARICOM Pharmacy Harmonisation Treaty",
      ],
      correctIndex: 1,
      explanation:
        "The Pharmacy Board Act (Chapter 29:52) is the primary legislation governing pharmacy practice in Trinidad & Tobago. It establishes the Pharmacy Board, defines pharmacy practice, and sets registration and licensing requirements.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q2",
      question: "In which year was Jamaica's Pharmacy Act significantly amended to modernise its regulatory framework?",
      options: [
        "2003",
        "2008",
        "2013",
        "2019",
      ],
      correctIndex: 2,
      explanation:
        "Jamaica's Pharmacy Act of 1975 was significantly amended in 2013, updating educational requirements, expanding scope of practice considerations, and strengthening enforcement provisions.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q3",
      question: "Match each Caribbean country with its public pharmaceutical procurement mechanism.",
      options: ["Trinidad & Tobago", "Jamaica", "Barbados", "Grenada"],
      correctIndex: 0,
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Trinidad & Tobago", right: "NIPDEC" },
          { left: "Jamaica", right: "NHF / Ministry of Health" },
          { left: "Barbados", right: "Barbados Drug Service (BDS)" },
          { left: "Grenada", right: "OECS Pharmaceutical Procurement Service" },
        ],
      },
      explanation:
        "Each Caribbean country uses a different mechanism for public pharmaceutical procurement: T&T uses NIPDEC, Jamaica uses the NHF and Ministry of Health, Barbados uses the Drug Service, and Grenada uses the OECS PPS.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m3-q4",
      question: "The Pharmacy Council of Jamaica has the power to conduct unannounced inspections of pharmacy premises.",
      options: ["True", "False"],
      correctIndex: 0,
      questionType: "true_false",
      questionData: {
        correct_answer: true,
      },
      explanation:
        "True. The PCJ has robust enforcement powers including the ability to conduct unannounced inspections, suspend or revoke licences, and refer criminal matters to the Director of Public Prosecutions.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q5",
      question: "Which of the following are common themes across all Caribbean pharmacy regulatory frameworks?",
      options: [
        "Pharmacist registration is required for practice",
        "Pharmacy premises must be licensed",
        "All technicians must be separately registered",
        "Controlled substances are regulated",
        "All pharmacies must be pharmacist-owned",
      ],
      correctIndex: 0,
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 3],
      },
      explanation:
        "Common themes across all Caribbean jurisdictions include mandatory pharmacist registration, premises licensing, and controlled substance regulation. Separate technician registration and pharmacist ownership requirements vary by jurisdiction.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m3-q6",
      question: "What role does the Chemistry, Food and Drugs Division (CFDD) play in T&T's pharmaceutical system?",
      options: [
        "It registers pharmacists and issues practice licences",
        "It evaluates drug registration applications, conducts quality testing, and monitors product safety",
        "It manages public pharmaceutical procurement and distribution",
        "It sets retail prices for medicines across the country",
      ],
      correctIndex: 1,
      explanation:
        "The CFDD handles product regulation in T&T — evaluating drug registration applications, conducting quality testing, and monitoring the safety of pharmaceutical products. Professional regulation is handled by the Pharmacy Board, while procurement is handled by NIPDEC.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q7",
      question: "Which university in Grenada operates the only School of Pharmacy in the OECS?",
      options: [
        "The University of the West Indies",
        "St. George's University",
        "COSTAATT",
        "The University of Guyana",
      ],
      correctIndex: 1,
      explanation:
        "St. George's University in Grenada operates the only School of Pharmacy in the Organisation of Eastern Caribbean States (OECS). Its graduates serve the wider Eastern Caribbean, contributing pharmaceutical expertise across the sub-region.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q8",
      question: "A pharmacy technician trained in Jamaica is offered a position in Trinidad & Tobago. She wants to understand the key differences she will encounter. Which of the following correctly describes a difference between the two jurisdictions?",
      options: [
        "T&T requires pharmacist ownership of pharmacies; Jamaica permits corporate ownership",
        "Jamaica does not require pharmacist registration; T&T does",
        "T&T has a National Health Fund; Jamaica does not",
        "Jamaica lacks a regulatory body; the PCJ was dissolved in 2020",
      ],
      correctIndex: 0,
      explanation:
        "A key difference is that Trinidad & Tobago requires pharmacist ownership of pharmacies, while Jamaica permits corporate ownership (provided a registered pharmacist is on premises). Jamaica has the NHF, not T&T, and both countries require pharmacist registration.",
      questionType: "scenario",
      questionData: {
        context: "Cross-jurisdictional practice transition from Jamaica to Trinidad & Tobago",
      },
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m3-q9",
      question: "Arrange the following Caribbean pharmacy-related legislation from oldest to most recently enacted/amended.",
      options: [
        "Jamaica Pharmacy Act amendment (2013)",
        "Jamaica Pharmacy Act (1975)",
        "T&T Pharmacy Board Act (original enactment)",
        "CARPHA establishment (2013)",
      ],
      correctIndex: 0,
      questionType: "ordering",
      questionData: {
        correct_order: [2, 1, 0, 3],
      },
      explanation:
        "The T&T Pharmacy Board Act was originally enacted in the colonial period and subsequently revised, followed by the Jamaica Pharmacy Act in 1975. The 2013 amendment to the Jamaica Pharmacy Act and the establishment of CARPHA both occurred in 2013.",
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
    {
      id: "m3-q10",
      question: "Caribbean pharmacy laws are primarily influenced by which colonial legal tradition?",
      options: [
        "French civil law",
        "British common law",
        "Dutch maritime law",
        "Spanish colonial ordinances",
      ],
      correctIndex: 1,
      explanation:
        "The pharmacy laws of Trinidad & Tobago, Jamaica, Barbados, and Grenada all descend from the British colonial legal tradition. The fundamental structure of statutory boards, professional registers, and premises licensing reflects the UK pharmacy legislation of the 19th and early 20th centuries.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 4 — Controlled Substances: Scheduling, Handling & International Treaties
// ============================================================================

const module4: Module = {
  id: "m4-controlled-substances",
  number: 4,
  title: "Controlled Substances: Scheduling, Handling & International Treaties",
  description:
    "Master the complex world of controlled substance regulation in the Caribbean. Understand how drugs are classified, why scheduling differs between islands, and how international treaties shape national law. Learn the strict protocols for handling, documenting, and disposing of controlled substances.",
  learningObjectives: [
    "Explain the international treaty framework (1961 Single Convention, 1971 Convention, 1988 Convention) governing controlled substances",
    "Compare drug scheduling systems across Trinidad & Tobago, Jamaica, and Barbados, identifying key differences",
    "Apply the correct protocols for receiving, storing, dispensing, and documenting controlled substances",
    "Evaluate scenarios involving controlled substance handling and determine the correct legal course of action",
  ],
  lessons: [
    // ── Lesson 4.1 ──
    {
      id: "m4-l1",
      title: "International Treaties: The Foundation of Drug Control",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Global Framework That Shapes Caribbean Drug Law",
        },
        {
          type: "text",
          body: "Every Caribbean nation's Dangerous Drugs Act is rooted in international treaties administered by the United Nations. These treaties create binding obligations for signatory nations to control the manufacture, distribution, and use of substances deemed to have potential for abuse. Understanding this global framework is essential because it explains why controlled substance regulation is so strict — and why pharmacy technicians face serious legal consequences for non-compliance.",
        },
        {
          type: "table",
          caption: "Key International Drug Control Treaties",
          headers: ["Treaty", "Year", "Focus"],
          rows: [
            [
              "Single Convention on Narcotic Drugs",
              "1961 (amended 1972)",
              "Controls narcotic drugs including opium, morphine, codeine, and cannabis; establishes four schedules of increasing restriction",
            ],
            [
              "Convention on Psychotropic Substances",
              "1971",
              "Controls psychotropic substances including benzodiazepines, barbiturates, amphetamines, and hallucinogens; establishes four schedules",
            ],
            [
              "Convention Against Illicit Traffic in Narcotic Drugs and Psychotropic Substances",
              "1988",
              "Targets drug trafficking, money laundering, and precursor chemical control; strengthens law enforcement cooperation",
            ],
          ],
        },
        {
          type: "text",
          body: "All Caribbean nations are signatories to these treaties and have incorporated their requirements into domestic legislation through their respective Dangerous Drugs Acts. The International Narcotics Control Board (INCB), based in Vienna, monitors treaty compliance and publishes annual estimates and assessments of global drug control. When a Caribbean state imports controlled substances, it does so within a system of import/export authorisations overseen by the INCB.",
        },
        {
          type: "key-term",
          term: "International Narcotics Control Board (INCB)",
          definition:
            "An independent, quasi-judicial body established under the UN Single Convention on Narcotic Drugs. The INCB monitors international drug control treaty compliance, administers the system of import/export authorisations for controlled substances, and publishes annual reports on the global drug situation.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Legal Consequences",
          body: "Violations of controlled substance laws carry some of the most severe penalties in Caribbean legal systems. In Trinidad & Tobago, possession of certain controlled substances with intent to supply can carry penalties of up to 25 years imprisonment. Jamaica's Dangerous Drugs Act prescribes similarly harsh penalties. Even minor documentation errors — such as failing to maintain accurate controlled substance registers — can result in prosecution, loss of licence, and personal criminal liability for both pharmacists and pharmacy technicians.",
        },
        {
          type: "text",
          body: "The treaty framework establishes a tiered scheduling system where substances are classified based on their medical utility, abuse potential, and risk of dependence. Nations may adopt stricter controls than the treaties require, but cannot impose lesser controls. This is why some Caribbean countries control substances more tightly than the international minimum — for example, some nations schedule certain cough preparations containing codeine as controlled substances, while others permit their over-the-counter sale.",
        },
        {
          type: "text",
          body: "For pharmacy technicians, the practical implication is that controlled substance handling is governed by both international and national law, creating a compliance framework that is non-negotiable. Every receipt, every dispensing, and every destruction of a controlled substance must be documented precisely, and deviations can result in criminal prosecution — not merely professional discipline.",
        },
        {
          type: "knowledge-check",
          question: "Which UN body monitors international compliance with drug control treaties?",
          options: [
            "CARICOM",
            "The World Health Organisation (WHO)",
            "The International Narcotics Control Board (INCB)",
            "CARPHA",
          ],
          correctIndex: 2,
          explanation:
            "The International Narcotics Control Board (INCB), based in Vienna, is the independent body that monitors treaty compliance, administers import/export authorisations for controlled substances, and reports annually on the global drug situation.",
        },
      ],
    },
    // ── Lesson 4.2 ──
    {
      id: "m4-l2",
      title: "Caribbean Drug Scheduling: How Islands Differ",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Same Drug, Different Rules — Scheduling Across the Caribbean",
        },
        {
          type: "text",
          body: "One of the most practically significant aspects of Caribbean pharmaceutical regulation is that drug scheduling varies between islands. A substance that is available over-the-counter (OTC) in one country may be prescription-only (Rx) or even classified as a controlled substance in another. For pharmacy technicians, this creates real challenges — particularly in border regions and for patients who travel between islands expecting to obtain the same medications under the same conditions.",
        },
        {
          type: "island-comparison",
          title: "Codeine Scheduling: A Case Study in Caribbean Variation",
          description:
            "Codeine-containing products illustrate how the same substance can be classified very differently across Caribbean jurisdictions.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Low-dose codeine combinations (e.g. codeine + paracetamol, certain cough preparations) available OTC without prescription",
                "Higher-strength codeine preparations require a prescription",
                "Pure codeine is a controlled substance under the Dangerous Drugs Act",
                "Codeine abuse has been flagged as a growing concern, particularly among young people",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "ALL codeine-containing products require a prescription — no OTC codeine available",
                "Jamaica takes a stricter approach based on public health concerns about codeine misuse",
                "The Dangerous Drugs Act classifies codeine under a higher restriction level",
                "Pharmacy technicians must verify a valid prescription before any codeine dispensing",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Low-dose codeine preparations (e.g. codeine linctus for cough) have historically been available OTC",
                "Increasing regulatory scrutiny has led to tighter controls in recent years",
                "The Drug Service has issued guidance on responsible dispensing of codeine OTC products",
                "Some pharmacists choose to exercise professional discretion and require a prescription",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Critical Practice Point",
          body: "Never assume that a substance's classification in one Caribbean country is the same in another. A patient travelling from Trinidad (where codeine cough syrup is OTC) to Jamaica (where all codeine is prescription-only) may not understand why their usual cough medicine now requires a doctor's visit. As a pharmacy technician, you must always apply the scheduling rules of the jurisdiction where you are practising — regardless of what the patient is accustomed to.",
        },
        {
          type: "text",
          body: "Caribbean Dangerous Drugs Acts generally classify substances into categories or schedules based on their potential for abuse, medical utility, and risk of dependence. While the specific terminology and numbering vary, the underlying principle is consistent: substances with higher abuse potential and lower medical utility face more restrictive controls.",
        },
        {
          type: "table",
          caption: "Common Drug Scheduling Tiers (Generalised Caribbean Framework)",
          headers: ["Tier", "Characteristics", "Examples", "Controls"],
          rows: [
            [
              "Highest Control (Schedule I / Class A equivalent)",
              "High abuse potential, no accepted medical use or highly restricted medical use",
              "Heroin, LSD, MDMA, raw cannabis (though Jamaica has decriminalised small quantities)",
              "Prohibited or severely restricted; no pharmacy dispensing in most jurisdictions",
            ],
            [
              "High Control (Schedule II / Class B equivalent)",
              "High abuse potential with accepted medical use",
              "Morphine, oxycodone, fentanyl, methylphenidate, amphetamines",
              "Prescription only; locked storage; controlled substance register; INCB import/export authorisations",
            ],
            [
              "Moderate Control (Schedule III-IV / Class C equivalent)",
              "Moderate abuse potential with accepted medical use",
              "Codeine (higher strength), benzodiazepines, barbiturates, tramadol",
              "Prescription only; record-keeping; some storage restrictions",
            ],
            [
              "Lower Control (Scheduled but less restricted)",
              "Lower abuse potential; preparations containing small amounts of controlled substances",
              "Codeine cough preparations (in jurisdictions where OTC), pseudoephedrine products",
              "OTC with pharmacist oversight in some jurisdictions; Rx in others; purchase records may be required",
            ],
          ],
        },
        {
          type: "key-term",
          term: "Drug Scheduling",
          definition:
            "The classification of pharmaceutical substances into categories (schedules) based on their potential for abuse, accepted medical use, and risk of physical or psychological dependence. Scheduling determines the level of regulatory control applied to a substance, including prescribing, dispensing, storage, and record-keeping requirements.",
        },
        {
          type: "text",
          body: "Jamaica's approach to cannabis deserves special mention. In 2015, Jamaica amended its Dangerous Drugs Act to decriminalise possession of small quantities of cannabis (up to two ounces) for personal use, allow cultivation of up to five plants, permit Rastafarians to use cannabis for religious purposes, and establish a Cannabis Licensing Authority. However, large-scale possession, trafficking, and commercial activity outside the licensing framework remain criminal offences. This nuanced approach reflects Jamaica's unique cultural relationship with cannabis.",
        },
        {
          type: "knowledge-check",
          question: "In which Caribbean country are ALL codeine-containing products classified as prescription-only?",
          options: [
            "Trinidad & Tobago",
            "Barbados",
            "Jamaica",
            "Grenada",
          ],
          correctIndex: 2,
          explanation:
            "Jamaica takes the strictest approach to codeine among the major Caribbean nations, requiring a prescription for all codeine-containing products. This contrasts with Trinidad & Tobago and Barbados, where low-dose codeine preparations have historically been available over-the-counter.",
        },
      ],
    },
    // ── Lesson 4.3 ──
    {
      id: "m4-l3",
      title: "Handling Protocols: Receipt, Storage, Dispensing & Documentation",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Controlled Substance Chain of Custody",
        },
        {
          type: "text",
          body: "Controlled substances demand a level of procedural rigour that far exceeds standard pharmacy operations. Every tablet, every millilitre, must be accounted for from the moment it enters the pharmacy to the moment it leaves — whether dispensed to a patient, returned to a distributor, or destroyed. This chain of custody is legally mandated and operationally critical.",
        },
        {
          type: "heading",
          level: 3,
          text: "Receipt of Controlled Substances",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Verify the delivery against the purchase order and the supplier's invoice",
            "Check that the supplier holds a valid wholesale drug dealer's licence",
            "Inspect all packages for signs of tampering, damage, or seal breakage",
            "Count or weigh every item received — do not accept delivery quantities on trust",
            "Record receipt in the Controlled Substance Register immediately, noting: date, product name, strength, quantity, batch number, supplier name, and the name of the person receiving",
            "Place items in the controlled substance safe/cabinet immediately after documentation",
            "Retain copies of all delivery documents for the legally mandated period (typically 2-5 years, depending on jurisdiction)",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Storage Requirements",
        },
        {
          type: "text",
          body: "Controlled substances must be stored in a locked safe or cabinet that meets regulatory specifications. In most Caribbean jurisdictions, the safe must be securely fixed to a wall or floor, constructed of metal or reinforced material, and fitted with a lock to which only the pharmacist and designated staff hold keys. Access must be logged, and the safe must be located in an area not accessible to the public.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Security Is Non-Negotiable",
          body: "A controlled substance safe that is left unlocked — even momentarily — constitutes a serious regulatory violation. If discovered during an inspection, it can result in immediate suspension of the pharmacy's licence, criminal charges against the pharmacist, and personal liability for any pharmacy staff involved. Always verify that the safe is locked after every access.",
        },
        {
          type: "heading",
          level: 3,
          text: "Dispensing Controlled Substances",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Verify that the prescription is written on the correct form (many jurisdictions require specific controlled substance prescription forms)",
            "Confirm the prescriber is authorised to prescribe the specific controlled substance",
            "Check patient identity — some jurisdictions require photo identification for controlled substance prescriptions",
            "Verify the prescription includes all legally required elements: date, patient name and address, prescriber name and registration number, drug name and strength, quantity in words and figures, directions for use, prescriber's signature",
            "Count or measure the exact quantity prescribed, witnessed by a second person where required",
            "Record the dispensing in the Controlled Substance Register: date, patient name, prescriber name, product, quantity, and the name of the dispensing pharmacist",
            "The pharmacist must perform the final check and authorise release to the patient",
            "Retain the original prescription for the mandated period",
          ],
        },
        {
          type: "key-term",
          term: "Controlled Substance Register",
          definition:
            "A legally mandated written record of all controlled substance transactions in a pharmacy, including receipts, dispensings, returns, and destructions. The register must be maintained in bound-book format (not loose-leaf) in most Caribbean jurisdictions, with entries made in ink and errors corrected by single-line strikethrough — never by erasure or correction fluid.",
        },
        {
          type: "table",
          caption: "Controlled Substance Register — Required Entry Fields",
          headers: ["Field", "For Receipt Entries", "For Dispensing Entries"],
          rows: [
            ["Date", "Date of receipt", "Date of dispensing"],
            ["Product", "Name, strength, dosage form", "Name, strength, dosage form"],
            ["Quantity", "Quantity received", "Quantity dispensed"],
            ["Source/Destination", "Supplier name and licence number", "Patient name and address"],
            ["Batch Number", "Supplier's batch/lot number", "Batch from which dispensed"],
            ["Prescriber", "N/A", "Prescriber name and registration number"],
            ["Staff", "Name of person receiving", "Name of dispensing pharmacist"],
            ["Running Balance", "Updated balance after receipt", "Updated balance after dispensing"],
          ],
        },
        {
          type: "knowledge-check",
          question: "How should errors in a Controlled Substance Register be corrected?",
          options: [
            "Using correction fluid (white-out) to cover the error",
            "Erasing the error and rewriting the correct information",
            "Single-line strikethrough with initials, date, and the correct entry alongside",
            "Removing the page and rewriting it entirely",
          ],
          correctIndex: 2,
          explanation:
            "Errors in a Controlled Substance Register must be corrected by a single-line strikethrough (so the original entry remains legible), accompanied by the initials and date of the person making the correction, with the correct information written alongside. Correction fluid, erasure, and page removal are all prohibited as they suggest potential tampering.",
        },
      ],
    },
    // ── Lesson 4.4 ──
    {
      id: "m4-l4",
      title: "Discrepancy Management, Destruction & Inspection Readiness",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "When the Numbers Don't Add Up",
        },
        {
          type: "text",
          body: "Despite the most meticulous record-keeping, discrepancies in controlled substance balances can occur. A discrepancy means that the physical count of a controlled substance does not match the balance recorded in the Controlled Substance Register. This is a serious matter that requires immediate investigation and documentation.",
        },
        {
          type: "text",
          body: "Discrepancies can arise from innocent causes — mathematical errors in the register, measurement inaccuracies, or documentation omissions. However, they can also indicate diversion (theft for personal use or illegal sale), which is a criminal offence. Because regulators cannot distinguish innocent errors from diversion without investigation, all discrepancies must be treated as serious incidents.",
        },
        {
          type: "heading",
          level: 3,
          text: "Discrepancy Response Protocol",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Stop — do not attempt to 'fix' the discrepancy by adjusting records",
            "Recount — perform a second physical count, preferably with a witness",
            "Recheck — review all register entries since the last verified balance for mathematical or documentation errors",
            "Report — immediately notify the supervising pharmacist",
            "Document — record the discrepancy, the investigation steps taken, and the findings",
            "Report externally — the pharmacist must report unresolved discrepancies to the regulatory authority within the mandated timeframe (typically 24-48 hours)",
            "Investigate — the regulatory authority may conduct its own investigation, including interviews, security camera review, and forensic audit of records",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Never 'Correct' a Discrepancy Without Investigation",
          body: "If you discover a discrepancy during a physical count, never alter the register to match the count or vice versa without a proper investigation. Unexplained adjustments are themselves evidence of potential impropriety and can result in prosecution. Always follow your pharmacy's discrepancy protocol and ensure the supervising pharmacist is immediately informed.",
        },
        {
          type: "heading",
          level: 3,
          text: "Destruction of Controlled Substances",
        },
        {
          type: "text",
          body: "Expired, damaged, or unclaimed controlled substances must be destroyed according to strict regulatory protocols. In most Caribbean jurisdictions, destruction must be witnessed by an authorised person — typically a drug inspector, police officer, or other designated authority. The destruction process, including the identity of the substances, quantities, method of destruction, and the names of all witnesses, must be documented and the records retained.",
        },
        {
          type: "text",
          body: "Pharmacy technicians may assist in preparing controlled substances for destruction — counting, listing, and packaging — but the actual destruction event must be carried out in the presence of the required witnesses and documented by the supervising pharmacist.",
        },
        {
          type: "key-term",
          term: "Diversion",
          definition:
            "The illegal channelling of controlled substances from their legitimate medical or pharmaceutical purpose to illicit use. Diversion can occur at any point in the supply chain — from manufacturer to distributor to pharmacy to patient. It includes theft by healthcare workers, forged prescriptions, and 'doctor shopping' to obtain multiple prescriptions.",
        },
        {
          type: "scenario-simulation",
          title: "Scenario: Controlled Substance Discrepancy Discovery",
          description:
            "You are conducting the end-of-day physical count of controlled substances in your pharmacy in Port of Spain. You discover that the morphine 10mg tablet count is 3 tablets short of what the register shows. The pharmacist has stepped out briefly. What do you do?",
          nodes: [
            {
              id: "start",
              text: "You count the morphine 10mg tablets and find 47 tablets, but the register shows a balance of 50. The pharmacist has stepped out for 10 minutes. What is your first action?",
              choices: [
                {
                  label: "Adjust the register to show 47 to make it match",
                  nextNodeId: "adjust-bad",
                  feedback: "Never adjust the register to match a discrepant count. This is itself a regulatory violation and could be considered evidence of tampering.",
                },
                {
                  label: "Recount the tablets carefully and check if any were misplaced",
                  nextNodeId: "recount",
                  feedback: "Correct first step. Always recount before escalating, but never try to resolve the discrepancy by altering records.",
                  isOptimal: true,
                },
                {
                  label: "Call the police immediately",
                  nextNodeId: "police-premature",
                  feedback: "While police involvement may eventually be needed, it is premature to call them before recounting and notifying the supervising pharmacist.",
                },
              ],
            },
            {
              id: "adjust-bad",
              text: "You adjust the register to show 47 tablets. However, a drug inspector arrives for an unannounced inspection the following morning and notices the alteration.",
              isEnd: true,
              outcome: "failure",
              summary: "Altering the register without investigation is a serious regulatory violation. The inspector will document the unauthorised adjustment, which may be treated as evidence of diversion or cover-up. Both you and the pharmacist face potential criminal charges and professional sanctions.",
            },
            {
              id: "recount",
              text: "You recount carefully and still find 47 tablets. You check the immediate dispensing area and controlled substance cabinet but find no misplaced tablets. The register arithmetic appears correct. What do you do next?",
              choices: [
                {
                  label: "Wait for the pharmacist to return and report the discrepancy immediately",
                  nextNodeId: "report-pharmacist",
                  feedback: "Correct. The supervising pharmacist must be notified immediately of any unresolved controlled substance discrepancy.",
                  isOptimal: true,
                },
                {
                  label: "Check yesterday's prescriptions to see if a dispensing was not recorded",
                  nextNodeId: "check-records",
                  feedback: "Reviewing records is a reasonable investigative step, but it should be done after notifying the pharmacist — not as a substitute for reporting.",
                },
                {
                  label: "Assume it was a counting error yesterday and move on",
                  nextNodeId: "assume-bad",
                  feedback: "Never assume a discrepancy is innocent without investigation. An unexplained shortage of 3 morphine tablets must be formally investigated and documented.",
                },
              ],
            },
            {
              id: "police-premature",
              text: "Police arrive and find the pharmacy in disarray from the premature report. The pharmacist returns and is alarmed. Upon investigation, the 3 tablets are found to have been dispensed to a patient but the register entry was accidentally skipped.",
              isEnd: true,
              outcome: "partial",
              summary: "While your concern was valid, calling police before basic investigation steps wasted resources and caused unnecessary alarm. The proper sequence is: recount, notify pharmacist, investigate documentation, then report externally if the discrepancy remains unresolved.",
            },
            {
              id: "report-pharmacist",
              text: "The pharmacist returns and you report the 3-tablet discrepancy. Together, you review the day's dispensing records and discover that a dispensing of 3 morphine 10mg tablets was made at 2:15 PM but the register entry was inadvertently skipped. The prescription, patient counselling record, and till receipt all confirm the dispensing. The pharmacist documents the finding and completes the missing register entry with an explanatory note.",
              isEnd: true,
              outcome: "success",
              summary: "You followed the correct protocol: recount, verify, and report to the supervising pharmacist. The investigation revealed a documentation error, not diversion. The pharmacist corrected the register with proper annotation. This is the textbook response to a controlled substance discrepancy.",
            },
            {
              id: "check-records",
              text: "You review yesterday's prescriptions and find a potential match, but you are not certain. The pharmacist returns while you are reviewing records.",
              choices: [
                {
                  label: "Report the discrepancy and your preliminary findings to the pharmacist",
                  nextNodeId: "report-pharmacist",
                  feedback: "Correct. Share what you have found so far and let the pharmacist lead the formal investigation.",
                  isOptimal: true,
                },
                {
                  label: "Complete the investigation yourself before telling the pharmacist",
                  nextNodeId: "solo-investigate",
                  feedback: "A technician should not conduct a controlled substance investigation alone. Report to the pharmacist immediately and assist the investigation under their supervision.",
                },
              ],
            },
            {
              id: "assume-bad",
              text: "You assume it was a counting error and leave at the end of your shift. The next morning, the pharmacist discovers the discrepancy during the opening count and reports it to the regulatory authority. An investigation reveals the 3 tablets were dispensed but never recorded — but your failure to report the discrepancy when you discovered it is noted.",
              isEnd: true,
              outcome: "failure",
              summary: "Failing to report a controlled substance discrepancy is a serious breach of protocol. Even though the discrepancy turned out to have an innocent explanation, your failure to report it when discovered reflects poorly on your professionalism and may result in disciplinary action.",
            },
            {
              id: "solo-investigate",
              text: "The pharmacist asks what you are doing with the controlled substance records. When you explain, she is concerned that you did not report the discrepancy to her immediately.",
              isEnd: true,
              outcome: "partial",
              summary: "While your initiative in checking records was commendable, controlled substance discrepancies must be reported to the supervising pharmacist immediately. The pharmacist is legally responsible and must oversee the investigation. Always report first, then assist.",
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "Who must typically witness the destruction of expired controlled substances in Caribbean jurisdictions?",
          options: [
            "Any two pharmacy staff members",
            "The patient who returned the medication",
            "An authorised person such as a drug inspector or police officer",
            "No witness is required — the pharmacist can destroy them alone",
          ],
          correctIndex: 2,
          explanation:
            "In most Caribbean jurisdictions, the destruction of controlled substances must be witnessed by an authorised person such as a drug inspector, police officer, or other designated authority. The destruction event must be fully documented, including the identity and quantities of substances destroyed and the names of all witnesses.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m4-q1",
      question: "Which international treaty specifically controls narcotic drugs such as morphine and codeine?",
      options: [
        "Convention on Psychotropic Substances (1971)",
        "Single Convention on Narcotic Drugs (1961)",
        "Convention Against Illicit Traffic (1988)",
        "The Geneva Convention",
      ],
      correctIndex: 1,
      explanation:
        "The Single Convention on Narcotic Drugs (1961, amended 1972) specifically controls narcotic drugs including opium, morphine, codeine, and cannabis. The 1971 Convention covers psychotropic substances, and the 1988 Convention targets drug trafficking.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q2",
      question: "In Jamaica, low-dose codeine cough preparations are available over-the-counter without a prescription.",
      options: ["True", "False"],
      correctIndex: 1,
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      explanation:
        "False. Jamaica requires a prescription for ALL codeine-containing products. This is stricter than Trinidad & Tobago and Barbados, where some low-dose codeine preparations have historically been available OTC.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q3",
      question: "Arrange the correct sequence for receiving a controlled substance delivery at a pharmacy.",
      options: [
        "Record receipt in the Controlled Substance Register",
        "Verify delivery against purchase order and invoice",
        "Place items in the controlled substance safe",
        "Count or weigh every item received",
        "Inspect packages for tampering or damage",
      ],
      correctIndex: 0,
      questionType: "ordering",
      questionData: {
        correct_order: [1, 4, 3, 0, 2],
      },
      explanation:
        "The correct sequence is: (1) Verify against purchase order and invoice, (2) Inspect packages for tampering, (3) Count/weigh every item, (4) Record in the register, (5) Place in the controlled substance safe.",
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q4",
      question: "Which of the following elements must appear on a controlled substance prescription in most Caribbean jurisdictions?",
      options: [
        "Patient's name and address",
        "Quantity in words and figures",
        "Prescriber's signature and registration number",
        "Patient's favourite colour",
        "Date of prescription",
      ],
      correctIndex: 0,
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 2, 4],
      },
      explanation:
        "Controlled substance prescriptions in most Caribbean jurisdictions must include: patient name and address, quantity in words and figures, prescriber's signature and registration number, and date. Patient's favourite colour is obviously not required.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q5",
      question: "Errors in a Controlled Substance Register should be corrected using correction fluid (white-out).",
      options: ["True", "False"],
      correctIndex: 1,
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      explanation:
        "False. Correction fluid is strictly prohibited in Controlled Substance Registers. Errors must be corrected by single-line strikethrough (preserving the original entry's legibility), accompanied by initials, date, and the correct information written alongside.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q6",
      question: "What does the term 'diversion' mean in the context of controlled substances?",
      options: [
        "The legal transfer of controlled substances between pharmacies",
        "The illegal channelling of controlled substances from legitimate use to illicit use",
        "The process of reclassifying a controlled substance to OTC status",
        "The transportation of controlled substances between islands",
      ],
      correctIndex: 1,
      explanation:
        "Diversion refers to the illegal channelling of controlled substances from their legitimate pharmaceutical or medical purpose to illicit use. It can occur through theft, forged prescriptions, 'doctor shopping,' or manipulation of records.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q7",
      question: "Match each international treaty with its primary focus area.",
      options: [
        "Single Convention (1961)",
        "Psychotropic Convention (1971)",
        "Traffic Convention (1988)",
      ],
      correctIndex: 0,
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Single Convention (1961)", right: "Narcotic drugs (opium, morphine, codeine, cannabis)" },
          { left: "Psychotropic Convention (1971)", right: "Psychotropic substances (benzodiazepines, amphetamines)" },
          { left: "Traffic Convention (1988)", right: "Drug trafficking, money laundering, precursor controls" },
        ],
      },
      explanation:
        "The 1961 Convention controls narcotics, the 1971 Convention controls psychotropic substances, and the 1988 Convention targets trafficking and related criminal activity. Together, they form the international legal framework for drug control.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q8",
      question: "A patient from Trinidad visits a pharmacy in Kingston, Jamaica and asks to purchase codeine cough syrup without a prescription, explaining that it is available OTC in Trinidad. As the pharmacy technician, what should you do?",
      options: [
        "Sell it — the patient's home country allows OTC purchase",
        "Politely explain that all codeine products require a prescription in Jamaica and suggest the patient consult a local doctor",
        "Sell it but record the patient's passport number",
        "Refer the patient to a pharmacy in Trinidad",
      ],
      correctIndex: 1,
      explanation:
        "The scheduling rules of the jurisdiction where you are practising always apply, regardless of the patient's home country. In Jamaica, all codeine products require a prescription. The technician should politely explain this and suggest the patient consult a local doctor if the medication is needed.",
      questionType: "scenario",
      questionData: {
        context: "Cross-jurisdictional controlled substance request in a Kingston, Jamaica pharmacy",
      },
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q9",
      question: "How soon must an unresolved controlled substance discrepancy typically be reported to the regulatory authority in most Caribbean jurisdictions?",
      options: [
        "Within 1 week",
        "Within 24-48 hours",
        "Within 30 days",
        "At the next scheduled inspection",
      ],
      correctIndex: 1,
      explanation:
        "Most Caribbean jurisdictions require unresolved controlled substance discrepancies to be reported to the regulatory authority within 24-48 hours. Delays in reporting can be treated as evidence of non-compliance or cover-up.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q10",
      question: "The Controlled Substance Register must be maintained in _____ format in most Caribbean jurisdictions.",
      options: ["loose-leaf binder", "bound-book", "digital spreadsheet", "any convenient"],
      correctIndex: 1,
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: ["bound-book", "bound book"],
        case_sensitive: false,
      },
      explanation:
        "Most Caribbean jurisdictions require the Controlled Substance Register to be maintained in bound-book format (not loose-leaf or digital). This prevents page removal or substitution, which could be used to conceal diversion or other irregularities.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 5 — Pharmaceutical Import/Export: Licensing, Customs & QA
// ============================================================================

const module5: Module = {
  id: "m5-import-export",
  number: 5,
  title: "Pharmaceutical Import/Export: Licensing, Customs & QA",
  description:
    "Understand the regulatory requirements for importing and exporting pharmaceutical products in the Caribbean. Learn about licensing requirements, customs procedures, quality assurance at the border, and the role of regional procurement systems.",
  learningObjectives: [
    "Describe the licensing and authorisation requirements for pharmaceutical importation in Caribbean states",
    "Explain the customs procedures and documentation required for pharmaceutical imports and exports",
    "Analyse the quality assurance measures applied at the point of importation",
    "Evaluate the role of pooled procurement systems (OECS PPS, NIPDEC) in ensuring quality and affordability",
  ],
  lessons: [
    // ── Lesson 5.1 ──
    {
      id: "m5-l1",
      title: "Import Licensing and Authorisation Requirements",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Who Can Import Pharmaceuticals Into the Caribbean?",
        },
        {
          type: "text",
          body: "Pharmaceutical importation in the Caribbean is a tightly regulated activity. Not just anyone can bring medicines into a country — importers must hold specific licences, the products must be registered, and every shipment must be accompanied by proper documentation. These requirements exist to prevent substandard, falsified, and unregistered products from entering the pharmaceutical supply chain.",
        },
        {
          type: "text",
          body: "In most Caribbean jurisdictions, a pharmaceutical import licence is required before any medicinal product can be brought into the country. This licence is typically issued by the Ministry of Health or the national drug regulatory authority and specifies the types of products the licence holder is authorised to import. The application process usually requires evidence of the importer's storage facilities, quality management systems, and qualified personnel.",
        },
        {
          type: "key-term",
          term: "Pharmaceutical Import Licence",
          definition:
            "A government-issued authorisation permitting a company or institution to import pharmaceutical products into a specific jurisdiction. The licence specifies the categories of products that may be imported and imposes conditions related to storage, quality management, and record-keeping.",
        },
        {
          type: "table",
          caption: "Pharmaceutical Import Requirements by Jurisdiction",
          headers: ["Requirement", "Trinidad & Tobago", "Jamaica", "Barbados"],
          rows: [
            ["Import Licence Required?", "Yes — issued by the CFDD", "Yes — issued by the Ministry of Health", "Yes — through the Drug Service and Ministry of Health"],
            ["Product Registration Required?", "Yes — products must be registered with CFDD before importation", "Yes — products must hold marketing authorisation", "Yes — must appear on approved product list or BNDF for public sector"],
            ["GMP Certificate Required?", "Yes — from the manufacturing country's regulatory authority", "Yes — WHO GMP or equivalent", "Yes — GMP compliance documentation required"],
            ["Controlled Substances", "Separate import permit per shipment from Ministry of Health; INCB authorisation required", "Separate import permit per shipment; INCB authorisation", "Separate authorisation for each controlled substance shipment"],
            ["Import Documentation", "Bill of lading, commercial invoice, Certificate of Pharmaceutical Product (CPP), Certificate of Analysis (CoA)", "Similar documentation plus FDA-style regulatory filing", "Similar documentation through BDS for public sector"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Certificate of Pharmaceutical Product (CPP)",
          body: "The CPP is a WHO-developed document that certifies the registration status and manufacturing compliance of a pharmaceutical product in the exporting country. Caribbean regulators rely heavily on the CPP as part of their import evaluation because many islands lack the resources to independently inspect overseas manufacturing sites. The CPP provides assurance that the product meets the exporting country's regulatory standards.",
        },
        {
          type: "text",
          body: "For controlled substances, the import process is even more stringent. Each shipment requires a separate import permit issued by the national competent authority, and the INCB in Vienna must be notified. The exporting country's regulatory authority issues a corresponding export permit, and both permits must accompany the shipment. This double-lock system ensures that controlled substances moving across international borders are fully documented and authorised.",
        },
        {
          type: "text",
          body: "Pharmacy technicians working in hospital pharmacies, procurement departments, or wholesale distribution centres may be directly involved in goods receipt processes that include verifying import documentation. Even in community pharmacy settings, technicians should understand these requirements because they underpin the legitimacy of every product on the shelf.",
        },
        {
          type: "knowledge-check",
          question: "What is the primary purpose of the WHO Certificate of Pharmaceutical Product (CPP)?",
          options: [
            "To set the retail price of the medicine in the importing country",
            "To certify the registration status and manufacturing compliance of the product in the exporting country",
            "To provide patient information in multiple languages",
            "To confirm that the product has been tested by CARPHA",
          ],
          correctIndex: 1,
          explanation:
            "The CPP certifies that a pharmaceutical product is registered and its manufacturing site complies with GMP standards in the exporting country. Caribbean regulators rely on the CPP because most islands cannot independently inspect overseas manufacturing facilities.",
        },
      ],
    },
    // ── Lesson 5.2 ──
    {
      id: "m5-l2",
      title: "Customs Procedures and Cold Chain Integrity",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "From Port to Pharmacy: Protecting Medicines at the Border",
        },
        {
          type: "text",
          body: "When a shipment of pharmaceuticals arrives at a Caribbean port — whether by sea or air — it enters a critical phase where regulatory requirements and logistical reality collide. Customs clearance for pharmaceuticals is not a simple matter of paying duties and collecting goods. It involves document verification, potential sampling for quality testing, and crucially, maintaining the cold chain for temperature-sensitive products.",
        },
        {
          type: "text",
          body: "Delays at customs are the enemy of pharmaceutical quality. A pallet of insulin sitting on a Caribbean dock in 35°C heat for even a few hours can be rendered useless. Vaccines, biologics, and many other temperature-sensitive products are equally vulnerable. This is why pharmaceutical importers invest heavily in temperature-controlled shipping, insulated packaging, and expedited customs clearance procedures.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Cold Chain Breaks Kill",
          body: "A cold chain break — even a brief one — can compromise the safety and efficacy of vaccines, insulins, and biologics without any visible change to the product. The WHO estimates that up to 50% of vaccines may be wasted globally due to cold chain failures. In the Caribbean's tropical climate, maintaining cold chain integrity from port to pharmacy to patient is literally a matter of life and death.",
        },
        {
          type: "heading",
          level: 3,
          text: "Customs Clearance Process for Pharmaceuticals",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Pre-arrival notification: importer notifies customs authority and the health ministry of incoming pharmaceutical shipment",
            "Document submission: import licence, product registration certificate, CPP, Certificate of Analysis, commercial invoice, packing list, bill of lading/airway bill",
            "Customs inspection: physical inspection of shipment for integrity, labelling compliance, and document consistency",
            "Health ministry inspection: regulatory officer may inspect shipment, verify batch numbers, and collect samples for testing",
            "Duty assessment: customs calculates applicable duties and taxes (many Caribbean countries grant duty concessions on essential medicines)",
            "Release: upon clearance, goods are released to the importer's bonded or approved warehouse",
            "Cold chain verification: for temperature-sensitive products, temperature monitoring records (data loggers) are reviewed to confirm cold chain integrity throughout transit",
          ],
        },
        {
          type: "key-term",
          term: "Cold Chain",
          definition:
            "The unbroken series of temperature-controlled storage and transportation steps required to maintain a pharmaceutical product within its specified temperature range from the point of manufacture to the point of use. Common temperature ranges include 2-8°C for refrigerated products and -20°C for frozen products.",
        },
        {
          type: "text",
          body: "Many Caribbean governments grant duty concessions or full duty exemptions for essential medicines and medical supplies. This reflects the recognition that pharmaceutical import duties increase medicine costs and reduce access — a significant concern in a region where most medicines are imported. The WHO has recommended that countries eliminate tariffs on essential medicines, and several Caribbean nations have moved in this direction.",
        },
        {
          type: "table",
          caption: "Temperature Requirements for Common Pharmaceutical Categories",
          headers: ["Category", "Temperature Range", "Examples", "Risk of Cold Chain Break"],
          rows: [
            ["Frozen", "-25°C to -10°C", "Some vaccines, certain biologics", "Product destruction; cannot be refrozen once thawed"],
            ["Refrigerated", "2°C to 8°C", "Insulin, many vaccines, certain eye drops, some antibiotics", "Loss of potency; potential degradation; may not be visible"],
            ["Cool", "8°C to 15°C", "Suppositories, some creams and ointments", "Melting, separation, reduced shelf life"],
            ["Room Temperature (controlled)", "15°C to 25°C", "Most tablets, capsules, oral liquids", "Accelerated degradation in Caribbean heat (>30°C common)"],
          ],
        },
        {
          type: "knowledge-check",
          question: "Why are customs delays particularly dangerous for pharmaceutical shipments in the Caribbean?",
          options: [
            "Because customs officers may steal the medicines",
            "Because tropical heat can compromise temperature-sensitive products like insulin and vaccines during delays",
            "Because Caribbean customs never inspects pharmaceutical shipments",
            "Because import duties increase with time spent at the port",
          ],
          correctIndex: 1,
          explanation:
            "Customs delays expose pharmaceutical shipments to Caribbean tropical heat, which can compromise temperature-sensitive products like insulin, vaccines, and biologics. Even brief exposure to temperatures outside the specified range can render these products ineffective or dangerous.",
        },
      ],
    },
    // ── Lesson 5.3 ──
    {
      id: "m5-l3",
      title: "Quality Assurance at Import and Pooled Procurement Systems",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Ensuring Quality from the Point of Entry",
        },
        {
          type: "text",
          body: "Quality assurance does not end at the factory gate — it must continue through the entire supply chain, including the critical import phase. Caribbean regulatory authorities employ a range of QA measures at the point of importation, from document review and visual inspection to laboratory testing and batch verification. These measures are the last line of defence before products enter the domestic supply chain.",
        },
        {
          type: "text",
          body: "CARPHA's CaMET laboratory plays a vital role in post-market and at-import quality testing. When national regulators suspect a product may be substandard, or as part of routine surveillance programmes, samples can be sent to CaMET for testing against pharmacopoeial standards. This regional testing capacity is invaluable for smaller islands that lack their own pharmaceutical testing laboratories.",
        },
        {
          type: "heading",
          level: 3,
          text: "QA Measures at Import",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Document verification: confirming that the CPP, CoA, GMP certificate, and import licence are valid and consistent",
            "Visual inspection: checking packaging integrity, labelling compliance, expiry dates, and batch numbers",
            "Sample collection: regulatory officers may collect samples from selected batches for laboratory testing",
            "Temperature verification: reviewing data logger records for cold chain products",
            "Batch recall cross-reference: checking imported batches against known recall and alert databases",
            "WHO Prequalification verification: for products purchased through international procurement, confirming WHO prequalification status",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "WHO Prequalification — A Global Quality Mark",
          body: "The WHO Prequalification Programme evaluates the quality, safety, and efficacy of pharmaceutical products for international procurement. Products that achieve WHO prequalification have undergone rigorous independent assessment. Caribbean nations that source through PAHO's Strategic Fund or other international mechanisms benefit from this additional layer of quality assurance.",
        },
        {
          type: "heading",
          level: 3,
          text: "Pooled Procurement: Strength in Numbers",
        },
        {
          type: "text",
          body: "Caribbean pooled procurement systems — particularly the OECS PPS and Trinidad's NIPDEC — are not merely cost-saving mechanisms. They also serve a quality assurance function. By centralising procurement, these organisations can maintain prequalified supplier lists, conduct regular supplier audits, and enforce consistent quality standards across their purchasing portfolios. A small island purchasing individually might lack the leverage to demand quality documentation or reject a substandard batch; a pooled procurement organisation, purchasing on behalf of multiple countries, has the market power to enforce compliance.",
        },
        {
          type: "case-study",
          title: "Case Study: Intercepting Substandard Metformin at Import",
          scenario:
            "The OECS PPS receives a shipment of metformin 500mg tablets for distribution to Grenada, St. Lucia, and Dominica. As part of routine QA, samples are sent to CARPHA's CaMET laboratory for dissolution testing. Results show that the tablets dissolve significantly slower than the pharmacopoeial specification, meaning patients would absorb less active ingredient than intended. The batch is rejected and the supplier is placed on a watch list.",
          questions: [
            "Why is dissolution testing important for oral solid dosage forms like metformin tablets?",
            "What would have happened if this batch had reached pharmacy shelves?",
            "How does pooled procurement through the OECS PPS enable quality testing that individual small islands might not afford?",
          ],
          discussion:
            "Dissolution testing ensures that a tablet releases its active ingredient at the correct rate for absorption. A tablet that dissolves too slowly may fail to deliver therapeutic drug levels, leading to inadequate blood sugar control in diabetic patients. Pooled procurement enables quality testing by spreading the cost across multiple countries and maintaining a dedicated quality team that individual small islands could not sustain.",
        },
        {
          type: "key-term",
          term: "Certificate of Analysis (CoA)",
          definition:
            "A document issued by the manufacturer or an independent testing laboratory that reports the results of quality testing performed on a specific batch of a pharmaceutical product. The CoA confirms that the batch meets pharmacopoeial specifications for identity, purity, potency, dissolution, and other critical quality attributes.",
        },
        {
          type: "knowledge-check",
          question: "How do pooled procurement systems like the OECS PPS contribute to pharmaceutical quality assurance?",
          options: [
            "They manufacture medicines locally, eliminating import risks",
            "They centralise purchasing power, maintain prequalified supplier lists, and enforce consistent quality standards",
            "They eliminate the need for drug registration in member states",
            "They provide free medicines without any quality testing",
          ],
          correctIndex: 1,
          explanation:
            "Pooled procurement systems leverage collective purchasing power to maintain prequalified supplier lists, conduct regular supplier audits, and enforce consistent quality standards — quality assurance functions that individual small islands might lack the resources or market leverage to perform independently.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m5-q1",
      question: "What document certifies the registration status and GMP compliance of a pharmaceutical product in its country of origin?",
      options: [
        "Certificate of Analysis (CoA)",
        "Certificate of Pharmaceutical Product (CPP)",
        "Bill of Lading",
        "Import Licence",
      ],
      correctIndex: 1,
      explanation:
        "The WHO Certificate of Pharmaceutical Product (CPP) certifies the product's registration status and manufacturing GMP compliance in the exporting country. The CoA reports quality testing results for a specific batch.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q2",
      question: "What is the correct temperature range for storing refrigerated pharmaceutical products?",
      options: [
        "-25°C to -10°C",
        "2°C to 8°C",
        "8°C to 15°C",
        "15°C to 25°C",
      ],
      correctIndex: 1,
      explanation:
        "Refrigerated pharmaceutical products (including insulin, many vaccines, and certain eye drops) must be stored at 2°C to 8°C. Frozen products require -25°C to -10°C, cool products 8°C to 15°C, and controlled room temperature 15°C to 25°C.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q3",
      question: "Which of the following are quality assurance measures applied at the point of pharmaceutical importation?",
      options: [
        "Visual inspection of packaging and labelling",
        "Verifying CPP and Certificate of Analysis",
        "Reviewing temperature data logger records",
        "Checking batch numbers against recall databases",
        "Conducting clinical trials on imported products",
      ],
      correctIndex: 0,
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 2, 3],
      },
      explanation:
        "QA measures at import include visual inspection, document verification (CPP, CoA), temperature record review, and recall database cross-referencing. Clinical trials are conducted during development, not at import.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q4",
      question: "A cold chain break during customs clearance can render insulin useless without any visible change to the product.",
      options: ["True", "False"],
      correctIndex: 0,
      questionType: "true_false",
      questionData: {
        correct_answer: true,
      },
      explanation:
        "True. Insulin and many other biologics can lose potency when exposed to temperatures outside their specified range, and this degradation is not visible. The product may appear normal but fail to provide therapeutic benefit — making cold chain breaks particularly dangerous.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q5",
      question: "Arrange the customs clearance steps for a pharmaceutical shipment in the correct order.",
      options: [
        "Customs physical inspection",
        "Pre-arrival notification to customs and health ministry",
        "Release to importer's warehouse",
        "Document submission to customs",
        "Duty assessment and payment",
      ],
      correctIndex: 0,
      questionType: "ordering",
      questionData: {
        correct_order: [1, 3, 0, 4, 2],
      },
      explanation:
        "The correct order is: (1) Pre-arrival notification, (2) Document submission, (3) Customs physical inspection, (4) Duty assessment, (5) Release to warehouse.",
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q6",
      question: "Match each document with its purpose in pharmaceutical importation.",
      options: ["CPP", "CoA", "Import Licence", "Data Logger Record"],
      correctIndex: 0,
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "CPP", right: "Certifies product registration and GMP compliance in the exporting country" },
          { left: "CoA", right: "Reports quality testing results for a specific product batch" },
          { left: "Import Licence", right: "Authorises a company to import pharmaceuticals into the country" },
          { left: "Data Logger Record", right: "Documents temperature conditions during transit for cold chain products" },
        ],
      },
      explanation:
        "Each document serves a distinct purpose: the CPP confirms regulatory standing abroad, the CoA confirms batch quality, the import licence authorises importation, and data logger records verify cold chain integrity.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q7",
      question: "A shipment of vaccines arrives at the Port of Spain seaport. The data logger shows the temperature reached 12°C for 4 hours during transit. The vaccines require 2-8°C storage. As a pharmacy technician assisting with goods receipt, what should you recommend?",
      options: [
        "Accept the shipment — 12°C is close enough to the required range",
        "Quarantine the shipment and consult the manufacturer's stability data and the supervising pharmacist before making a decision",
        "Reject the shipment outright without further investigation",
        "Accept the shipment and place it in the refrigerator immediately to reverse the damage",
      ],
      correctIndex: 1,
      explanation:
        "A temperature excursion of 12°C for 4 hours represents a cold chain breach. The shipment should be quarantined while the manufacturer's stability data is consulted to determine whether the product remains safe and effective after this specific excursion. Refrigeration cannot reverse degradation that has already occurred.",
      questionType: "scenario",
      questionData: {
        context: "Cold chain breach during vaccine importation at Port of Spain seaport",
      },
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m5-q8",
      question: "The WHO estimates that up to _____% of vaccines may be wasted globally due to cold chain failures.",
      options: ["10", "25", "50", "75"],
      correctIndex: 2,
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: ["50"],
        case_sensitive: false,
      },
      explanation:
        "The WHO estimates that up to 50% of vaccines may be wasted globally due to cold chain failures. This staggering figure underscores the critical importance of maintaining cold chain integrity, particularly in the Caribbean's tropical climate.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q9",
      question: "Which organisation provides the regional pharmaceutical quality testing capacity through its CaMET laboratory?",
      options: [
        "OECS PPS",
        "NIPDEC",
        "CARPHA",
        "PAHO",
      ],
      correctIndex: 2,
      explanation:
        "CARPHA operates the Caribbean Medicines Evaluation & Testing (CaMET) laboratory, which provides regional pharmaceutical quality testing capacity. This shared resource is particularly valuable for smaller islands that lack their own testing laboratories.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q10",
      question: "Many Caribbean governments grant duty concessions on essential medicines to reduce costs and improve patient access.",
      options: ["True", "False"],
      correctIndex: 0,
      questionType: "true_false",
      questionData: {
        correct_answer: true,
      },
      explanation:
        "True. Many Caribbean governments grant duty concessions or full exemptions on essential medicines, recognising that import duties increase medicine costs in a region where virtually all pharmaceuticals are imported. The WHO has recommended eliminating tariffs on essential medicines.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 6 — Drug Registration, Marketing Authorization & Generic Substitution
// ============================================================================

const module6: Module = {
  id: "m6-drug-registration",
  number: 6,
  title: "Drug Registration, Marketing Authorisation & Generic Substitution",
  description:
    "Learn how pharmaceutical products gain legal approval for sale in Caribbean markets. Understand the drug registration process, the concept of marketing authorisation, and the regulations governing generic substitution — a practice with enormous implications for medicine affordability.",
  learningObjectives: [
    "Describe the drug registration process from application to marketing authorisation in a Caribbean jurisdiction",
    "Explain the concepts of bioequivalence and therapeutic equivalence as they apply to generic medicines",
    "Analyse the regulations and pharmacist responsibilities governing generic substitution across Caribbean states",
    "Evaluate the impact of generic substitution policies on medicine affordability and patient access",
  ],
  lessons: [
    // ── Lesson 6.1 ──
    {
      id: "m6-l1",
      title: "The Drug Registration Process in the Caribbean",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "How a Medicine Gets Legal Approval",
        },
        {
          type: "text",
          body: "Before any pharmaceutical product can be legally sold in a Caribbean country, it must undergo a registration process through the national drug regulatory authority. Drug registration — also called marketing authorisation — is the process by which a government evaluates a product's quality, safety, and efficacy and, if satisfied, grants permission for it to be marketed and sold.",
        },
        {
          type: "text",
          body: "The registration process serves as a gatekeeper. It ensures that only products meeting established standards of pharmaceutical quality, demonstrated safety, and proven efficacy reach patients. Without drug registration, any product — regardless of quality — could be marketed as a medicine, with potentially fatal consequences.",
        },
        {
          type: "heading",
          level: 3,
          text: "Steps in the Drug Registration Process",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Application submission: the manufacturer or importer submits a registration dossier to the national drug regulatory authority",
            "Administrative screening: the authority verifies the completeness of the submission and confirms that all required documents and fees are included",
            "Technical evaluation: scientific assessors review the quality (chemistry, manufacturing, and controls), safety (toxicology and clinical safety data), and efficacy (clinical trial results) data",
            "GMP verification: the authority verifies that the manufacturing site complies with Good Manufacturing Practice standards",
            "Query resolution: the authority may raise queries requiring additional information from the applicant",
            "Committee review: an expert advisory committee may review the application and provide recommendations",
            "Decision: the authority grants marketing authorisation (with conditions, if applicable) or refuses registration",
            "Post-registration maintenance: the registration must be periodically renewed, and any changes to the product (formulation, labelling, manufacturer) require regulatory approval",
          ],
        },
        {
          type: "key-term",
          term: "Marketing Authorisation",
          definition:
            "The formal approval granted by a national drug regulatory authority that permits a pharmaceutical product to be manufactured, imported, distributed, and sold within its jurisdiction. Marketing authorisation is granted after evaluation of the product's quality, safety, and efficacy data, and is typically valid for a specified period (usually 5 years) before renewal is required.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The CTD Format",
          body: "Most Caribbean drug regulatory authorities now accept (or require) registration dossiers in the Common Technical Document (CTD) format, aligned with International Council for Harmonisation (ICH) guidelines. The CTD has five modules: administrative information, quality (chemistry and manufacturing), non-clinical (animal studies), clinical (human studies), and study reports. This standardised format facilitates both national evaluation and CRS mutual recognition.",
        },
        {
          type: "table",
          caption: "Drug Registration Timeline Estimates",
          headers: ["Jurisdiction", "Standard Pathway", "Expedited/Abbreviated Pathway", "Notes"],
          rows: [
            ["Trinidad & Tobago", "12-24 months", "6-12 months (for WHO-prequalified products)", "CFDD handles evaluation; capacity constraints may extend timelines"],
            ["Jamaica", "12-18 months", "6-9 months (fast-track for essential medicines)", "PCJ and Standards & Regulation Division coordinate; relatively robust capacity"],
            ["Barbados", "Variable", "Abbreviated for BNDF products", "Smaller evaluation team; may rely on reference country evaluations"],
            ["OECS States", "Variable", "CRS mutual recognition pathway available", "Limited individual evaluation capacity; leverage regional mechanisms"],
          ],
        },
        {
          type: "knowledge-check",
          question: "What are the three main areas evaluated during drug registration?",
          options: [
            "Price, packaging, and advertising",
            "Quality, safety, and efficacy",
            "Manufacturing cost, profit margin, and market size",
            "Colour, taste, and appearance",
          ],
          correctIndex: 1,
          explanation:
            "Drug registration evaluates three fundamental areas: quality (is the product manufactured to proper standards?), safety (does the product have an acceptable risk profile?), and efficacy (does the product actually work for its intended purpose?). These three pillars are the basis of pharmaceutical regulation worldwide.",
        },
      ],
    },
    // ── Lesson 6.2 ──
    {
      id: "m6-l2",
      title: "Generic Medicines: Bioequivalence and Therapeutic Equivalence",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Understanding Generic Medicines in the Caribbean Context",
        },
        {
          type: "text",
          body: "Generic medicines are the backbone of pharmaceutical access in the Caribbean. With limited healthcare budgets and high dependence on imported medicines, Caribbean nations rely heavily on quality-assured generic products to provide affordable treatment for their populations. Understanding what makes a generic medicine equivalent to its brand-name counterpart — and when substitution is and is not appropriate — is essential knowledge for every pharmacy technician.",
        },
        {
          type: "text",
          body: "A generic medicine contains the same active pharmaceutical ingredient (API), in the same dosage form and strength, as the original brand-name (innovator) product. However, it may differ in inactive ingredients (excipients), colour, shape, packaging, and price. The critical question is: does the generic deliver the same amount of active ingredient to the patient's bloodstream at the same rate as the innovator? This is the concept of bioequivalence.",
        },
        {
          type: "key-term",
          term: "Bioequivalence",
          definition:
            "The demonstration that a generic pharmaceutical product delivers the same amount of active ingredient to the systemic circulation at the same rate as the innovator product, within accepted statistical limits. Bioequivalence is typically demonstrated through comparative pharmacokinetic studies in healthy volunteers, measuring Cmax (peak concentration) and AUC (area under the curve — total drug exposure).",
        },
        {
          type: "key-term",
          term: "Therapeutic Equivalence",
          definition:
            "A broader concept than bioequivalence, indicating that two pharmaceutical products can be expected to produce the same clinical effect and safety profile when administered to patients under the same conditions. Therapeutic equivalence encompasses bioequivalence plus pharmaceutical equivalence (same API, dose, form, and route).",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Narrow Therapeutic Index Drugs — Proceed with Caution",
          body: "For drugs with a narrow therapeutic index (NTI) — where small differences in blood levels can cause therapeutic failure or toxicity — generic substitution requires extra caution. Examples include warfarin, phenytoin, levothyroxine, lithium, and digoxin. Some Caribbean jurisdictions restrict or prohibit automatic generic substitution for NTI drugs. Always check your jurisdiction's guidelines and consult the pharmacist before substituting NTI medications.",
        },
        {
          type: "table",
          caption: "Innovator vs. Generic Medicines — Key Comparisons",
          headers: ["Feature", "Innovator (Brand-Name)", "Generic"],
          rows: [
            ["Active Ingredient", "Original API", "Same API (must be identical)"],
            ["Strength", "As approved", "Must match innovator strength"],
            ["Dosage Form", "As developed", "Must match (tablet, capsule, etc.)"],
            ["Inactive Ingredients", "Original formulation", "May differ (colours, fillers, binders)"],
            ["Bioequivalence", "Reference standard", "Must demonstrate bioequivalence to innovator"],
            ["Price", "Higher (includes R&D cost recovery)", "Lower (typically 30-80% cheaper)"],
            ["Patent Status", "Protected during patent period", "Marketed after patent expiry or under licence"],
            ["Regulatory Pathway", "Full registration with clinical trial data", "Abbreviated pathway with bioequivalence data"],
          ],
        },
        {
          type: "text",
          body: "In the Caribbean, the price difference between innovator and generic products can be enormous. A month's supply of an innovator antihypertensive might cost TTD $200, while a quality-assured generic equivalent costs TTD $40-60. For patients managing chronic conditions on limited incomes — and the Caribbean has very high rates of hypertension and diabetes — generic medicines are often the difference between treatment and no treatment.",
        },
        {
          type: "text",
          body: "However, not all generics are equal. The quality of generic medicines depends on the manufacturer's adherence to GMP, the rigour of bioequivalence studies, and the effectiveness of regulatory oversight. This is why drug registration and quality assurance are so important — they ensure that only quality-assured generics reach Caribbean patients.",
        },
        {
          type: "knowledge-check",
          question: "What must a generic medicine demonstrate to prove it is equivalent to the innovator product?",
          options: [
            "That it has the same colour and shape",
            "That it costs less than the innovator",
            "Bioequivalence — that it delivers the same amount of active ingredient at the same rate",
            "That it was manufactured in the same country as the innovator",
          ],
          correctIndex: 2,
          explanation:
            "A generic medicine must demonstrate bioequivalence to the innovator, meaning it delivers the same amount of active ingredient to the systemic circulation at the same rate. This is typically shown through comparative pharmacokinetic studies measuring Cmax and AUC.",
        },
      ],
    },
    // ── Lesson 6.3 ──
    {
      id: "m6-l3",
      title: "Generic Substitution Policies and Pharmacy Practice",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Substituting at the Pharmacy Counter",
        },
        {
          type: "text",
          body: "Generic substitution — the practice of dispensing a generic equivalent when a prescription specifies a brand-name product — is a powerful tool for improving medicine affordability. But it is also a practice surrounded by regulatory rules, professional responsibilities, and patient concerns. Caribbean jurisdictions take varying approaches to generic substitution, and pharmacy technicians must understand the rules that apply in their specific practice setting.",
        },
        {
          type: "island-comparison",
          title: "Generic Substitution Policies Across the Caribbean",
          description:
            "Different Caribbean nations take different approaches to generic substitution, reflecting their unique regulatory philosophies and healthcare structures.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Generic substitution is permitted when the prescriber does not specifically prohibit it",
                "Public sector: NIPDEC procures primarily generic medicines for the public health system based on the National Drug Formulary",
                "Private sector: pharmacists may substitute with patient consent, unless the prescriber writes 'Do Not Substitute' or 'Brand Necessary'",
                "The pharmacist bears professional responsibility for ensuring the generic is of acceptable quality",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Generic substitution is actively encouraged as part of Jamaica's rational drug use policy",
                "The NHF Card Programme formulary lists generic products as the primary funded option",
                "Pharmacists can substitute unless the prescriber explicitly requires a specific brand",
                "Jamaica's pharmaceutical market has a strong generic presence, supported by government policy",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "The Barbados National Drug Formulary (BNDF) is primarily a generic formulary for the public sector",
                "Public sector: dispensing follows BNDF, which specifies generic products by INN (International Non-proprietary Name)",
                "Private sector: pharmacists may substitute with appropriate professional judgement and patient communication",
                "The Drug Service procures quality-assured generics for all public health facilities",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Patient Communication Is Key",
          body: "Many patients are wary of generic substitution. They may believe that cheaper means inferior, or they may be attached to the familiar appearance of their brand-name medicine. As a pharmacy technician, you can support adherence by explaining (under pharmacist guidance) that the generic contains the same active ingredient, has been evaluated for equivalence, and is endorsed by the national regulatory authority. Empathy and clear communication overcome most patient concerns.",
        },
        {
          type: "text",
          body: "The International Non-proprietary Name (INN) system, maintained by WHO, provides a universal language for active pharmaceutical ingredients. When a prescription is written using the INN (e.g. 'amlodipine' rather than 'Norvasc'), it enables the pharmacy to dispense any registered generic equivalent. Caribbean formularies increasingly use INN prescribing as standard practice.",
        },
        {
          type: "key-term",
          term: "International Non-proprietary Name (INN)",
          definition:
            "A unique name assigned to an active pharmaceutical ingredient by the World Health Organisation. INNs facilitate clear communication about medicines worldwide and enable generic prescribing. For example, 'paracetamol' is the INN for the analgesic known by the brand name Panadol (or 'acetaminophen' in the US system).",
        },
        {
          type: "text",
          body: "For pharmacy technicians, the practical implications are clear: always check whether the prescriber has indicated 'Do Not Substitute' or 'Brand Necessary' before selecting a generic. When substitution is permitted, select only from registered, quality-assured generic products. Inform the patient of the substitution. And always defer to the supervising pharmacist for clinical judgement on substitution decisions, particularly for narrow therapeutic index drugs.",
        },
        {
          type: "knowledge-check",
          question: "Under what circumstances should a pharmacy technician NOT proceed with generic substitution?",
          options: [
            "When the generic is cheaper than the brand",
            "When the prescriber has written 'Do Not Substitute' or 'Brand Necessary' on the prescription",
            "When the patient has been taking the generic for more than a year",
            "When the generic is manufactured in a different country from the innovator",
          ],
          correctIndex: 1,
          explanation:
            "Generic substitution must not proceed when the prescriber has explicitly indicated 'Do Not Substitute,' 'Brand Necessary,' or similar notation on the prescription. This instruction must be respected regardless of cost or availability considerations. Additionally, extra caution is warranted for narrow therapeutic index drugs.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m6-q1",
      question: "What is the standard validity period for a drug marketing authorisation in most Caribbean jurisdictions?",
      options: [
        "1 year",
        "3 years",
        "5 years",
        "Indefinite — once approved, always approved",
      ],
      correctIndex: 2,
      explanation:
        "Marketing authorisations in most Caribbean jurisdictions are valid for approximately 5 years before renewal is required. This periodic renewal ensures that the regulatory authority can reassess the product's quality, safety, and efficacy in light of post-market experience.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q2",
      question: "Bioequivalence studies typically measure which two pharmacokinetic parameters?",
      options: [
        "Colour and taste of the medication",
        "Cmax (peak concentration) and AUC (area under the curve)",
        "Manufacturing cost and retail price",
        "Shelf life and dissolution rate",
      ],
      correctIndex: 1,
      explanation:
        "Bioequivalence studies measure Cmax (the peak concentration of drug in the blood) and AUC (the area under the concentration-time curve, representing total drug exposure). These parameters must fall within accepted statistical limits compared to the innovator product.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q3",
      question: "Which of the following drugs have a narrow therapeutic index and require extra caution with generic substitution?",
      options: [
        "Warfarin",
        "Paracetamol",
        "Phenytoin",
        "Amoxicillin",
        "Levothyroxine",
      ],
      correctIndex: 0,
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 2, 4],
      },
      explanation:
        "Warfarin, phenytoin, and levothyroxine are all narrow therapeutic index drugs where small differences in blood levels can cause therapeutic failure or toxicity. Paracetamol and amoxicillin have wider therapeutic windows and are generally safer for generic substitution.",
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q4",
      question: "A generic medicine may contain different inactive ingredients (excipients) from the innovator product but must contain the same active pharmaceutical ingredient.",
      options: ["True", "False"],
      correctIndex: 0,
      questionType: "true_false",
      questionData: {
        correct_answer: true,
      },
      explanation:
        "True. Generic medicines must contain the same active pharmaceutical ingredient (API) in the same dose and form as the innovator, but may differ in inactive ingredients such as colours, fillers, binders, and coatings. The critical requirement is bioequivalence — that the generic delivers the same API exposure.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q5",
      question: "Match each Caribbean jurisdiction with its approach to generic substitution.",
      options: ["Trinidad & Tobago", "Jamaica", "Barbados"],
      correctIndex: 0,
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Trinidad & Tobago", right: "Permitted unless prescriber writes 'Do Not Substitute'; NIPDEC procures generics for public sector" },
          { left: "Jamaica", right: "Actively encouraged; NHF Card Programme formulary lists generics as primary funded option" },
          { left: "Barbados", right: "BNDF is primarily a generic formulary; Drug Service procures quality-assured generics for public sector" },
        ],
      },
      explanation:
        "All three countries support generic substitution, but with different emphases: T&T permits unless prohibited, Jamaica actively encourages through the NHF, and Barbados structures its public formulary around generics.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m6-q6",
      question: "What does INN stand for in pharmaceutical terminology?",
      options: [
        "Internal National Number",
        "International Non-proprietary Name",
        "Innovative New Notation",
        "Inter-island Naming Network",
      ],
      correctIndex: 1,
      explanation:
        "INN stands for International Non-proprietary Name — the unique name assigned to an active pharmaceutical ingredient by the World Health Organisation. INN prescribing enables pharmacies to dispense any registered generic equivalent.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q7",
      question: "Arrange the drug registration process in the correct order.",
      options: [
        "Technical evaluation of quality, safety, and efficacy",
        "Application submission by manufacturer",
        "Marketing authorisation granted or refused",
        "Administrative screening for completeness",
        "GMP verification of manufacturing site",
      ],
      correctIndex: 0,
      questionType: "ordering",
      questionData: {
        correct_order: [1, 3, 0, 4, 2],
      },
      explanation:
        "The correct order is: (1) Application submission, (2) Administrative screening, (3) Technical evaluation, (4) GMP verification, (5) Decision (grant or refuse marketing authorisation).",
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q8",
      question: "How much cheaper are generic medicines typically compared to their innovator counterparts?",
      options: [
        "5-10% cheaper",
        "30-80% cheaper",
        "Generics are usually more expensive",
        "There is no price difference",
      ],
      correctIndex: 1,
      explanation:
        "Generic medicines are typically 30-80% cheaper than their innovator counterparts because they do not need to recover the cost of original research and development, extensive clinical trials, and initial marketing — costs that can exceed US$1 billion for a new drug.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q9",
      question: "A patient presents a prescription for 'Norvasc 5mg' (brand-name amlodipine) at your pharmacy in Kingston, Jamaica. Your pharmacy stocks a registered generic amlodipine 5mg but not Norvasc. The prescription does not contain any 'Do Not Substitute' notation. What is the correct course of action?",
      options: [
        "Tell the patient you cannot fill the prescription because you do not have Norvasc",
        "Dispense the generic amlodipine without informing the patient",
        "Under pharmacist supervision, dispense the registered generic amlodipine, inform the patient of the substitution, and ensure they understand it contains the same active ingredient",
        "Call the prescriber and insist they rewrite the prescription for the generic",
      ],
      correctIndex: 2,
      explanation:
        "In Jamaica, generic substitution is encouraged and the prescription does not prohibit it. The correct course is to dispense the registered generic under pharmacist supervision and inform the patient of the substitution. Transparency and patient communication are essential for building trust and adherence.",
      questionType: "scenario",
      questionData: {
        context: "Generic substitution decision at a community pharmacy in Kingston, Jamaica",
      },
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q10",
      question: "The CTD (Common Technical Document) for drug registration has _____ modules.",
      options: ["3", "5", "7", "10"],
      correctIndex: 1,
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: ["5", "five"],
        case_sensitive: false,
      },
      explanation:
        "The CTD has five modules: Module 1 (administrative/regional information), Module 2 (quality/non-clinical/clinical summaries), Module 3 (quality data), Module 4 (non-clinical study reports), and Module 5 (clinical study reports).",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 7 — Record-Keeping, Inspection Readiness & Compliance Auditing
// ============================================================================

const module7: Module = {
  id: "m7-compliance",
  number: 7,
  title: "Record-Keeping, Inspection Readiness & Compliance Auditing",
  description:
    "Master the record-keeping requirements that form the backbone of pharmacy compliance. Learn how to prepare for regulatory inspections, conduct internal audits, and build a culture of continuous compliance that protects patients, staff, and the pharmacy's licence.",
  learningObjectives: [
    "Describe the mandatory record-keeping requirements for pharmacy operations across Caribbean jurisdictions",
    "Prepare a pharmacy for a regulatory inspection by ensuring all documentation is complete and accessible",
    "Conduct a basic internal compliance audit using a structured checklist approach",
    "Evaluate common compliance failures and develop strategies to prevent them",
    "Create a record-retention schedule that meets regulatory requirements",
  ],
  lessons: [
    // ── Lesson 7.1 ──
    {
      id: "m7-l1",
      title: "Mandatory Records: What You Must Keep and for How Long",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Paper Trail That Protects Everyone",
        },
        {
          type: "text",
          body: "In pharmacy, if it is not documented, it did not happen. This axiom is not merely a professional best practice — it is a legal reality. Every Caribbean pharmacy is required to maintain a comprehensive set of records that document its operations, from controlled substance transactions to prescription logs, temperature monitoring to equipment calibration. These records serve multiple purposes: they demonstrate compliance with the law, enable investigation of incidents, protect the pharmacy in legal proceedings, and provide data for quality improvement.",
        },
        {
          type: "text",
          body: "For pharmacy technicians, record-keeping is not a secondary responsibility — it is a core function. You will be expected to make entries in logs, maintain registers, file documents, and ensure that records are complete, accurate, and retrievable. Understanding what records are required, what each record must contain, and how long each must be retained is fundamental to your role.",
        },
        {
          type: "table",
          caption: "Mandatory Pharmacy Records — Caribbean Overview",
          headers: ["Record Type", "Contents", "Retention Period", "Legal Basis"],
          rows: [
            ["Controlled Substance Register", "All receipts, dispensings, returns, and destructions of controlled substances; running balances", "Minimum 2 years (T&T); up to 5 years (Jamaica); varies by jurisdiction", "Dangerous Drugs Act"],
            ["Prescription Records", "Original prescriptions or copies; patient details, prescriber, product, quantity, date", "Minimum 2 years; some jurisdictions require longer for controlled substance prescriptions", "Pharmacy Act"],
            ["Temperature Monitoring Logs", "Daily minimum/maximum temperatures for refrigerators, freezers, and controlled areas; corrective actions", "Minimum 1-2 years; longer for vaccines and biologics", "GMP/GDP guidelines"],
            ["Goods Receipt Records", "Delivery records, invoices, supplier details, batch numbers, quantities, dates", "Minimum 2-5 years depending on jurisdiction and product type", "Pharmacy Act / Import regulations"],
            ["Pharmacy Licence and Certificates", "Current pharmacy licence, pharmacist registration certificates, insurance certificates", "Current at all times; expired documents retained for reference", "Pharmacy Act"],
            ["Equipment Calibration Records", "Calibration certificates for balances, thermometers, and other measuring equipment", "Duration of equipment use plus 1-2 years", "GMP guidelines"],
            ["Adverse Drug Reaction Reports", "Reports of suspected adverse reactions submitted to the national pharmacovigilance centre", "Copy retained in pharmacy for minimum 5 years", "Pharmacovigilance regulations"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "When in Doubt, Keep It Longer",
          body: "Regulatory retention periods are minimums, not maximums. In practice, it is always safer to retain records longer than the minimum requirement. Some legal proceedings — particularly those involving controlled substances or patient harm — may arise years after the event. If the relevant records have been destroyed, the pharmacy loses a critical defence tool. When in doubt, keep it.",
        },
        {
          type: "key-term",
          term: "Record Retention",
          definition:
            "The practice of maintaining records for a specified period as required by law or professional standards. In pharmacy, retention periods vary by record type and jurisdiction, typically ranging from 2 to 7 years. Records must be stored securely, accessible for inspection, and protected from damage, loss, or unauthorised access.",
        },
        {
          type: "text",
          body: "Digital record-keeping is increasingly common in Caribbean pharmacies, but it introduces its own compliance requirements. Electronic records must be backed up regularly, protected from unauthorised access and modification, and capable of producing printed copies for inspectors. Many jurisdictions still require certain records — particularly the Controlled Substance Register — to be maintained in physical bound-book format alongside any electronic systems.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Entries must be made at the time of the event, not retrospectively",
            "Errors must be corrected properly (single-line strikethrough, initials, date)",
            "Blank spaces should not be left in sequential records",
            "Records must be legible, in permanent ink (for handwritten records)",
            "The person making each entry must be identifiable (signature, initials, or electronic user ID)",
            "Records must be stored securely but be readily accessible for inspection",
          ],
        },
        {
          type: "knowledge-check",
          question: "What is the minimum retention period for controlled substance records in most Caribbean jurisdictions?",
          options: [
            "6 months",
            "1 year",
            "2 years (minimum; some jurisdictions require up to 5 years)",
            "There is no minimum — records can be destroyed after the annual audit",
          ],
          correctIndex: 2,
          explanation:
            "Controlled substance records must be retained for a minimum of 2 years in most Caribbean jurisdictions, with some (notably Jamaica) requiring up to 5 years. These are minimum periods — best practice is to retain records longer, as legal proceedings may arise years after the event.",
        },
      ],
    },
    // ── Lesson 7.2 ──
    {
      id: "m7-l2",
      title: "Preparing for Regulatory Inspections",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Inspector Is Coming — Are You Ready?",
        },
        {
          type: "text",
          body: "Regulatory inspections are a fact of pharmacy life. Drug inspectors, pharmacy board officers, or ministry of health representatives may arrive at your pharmacy with little or no advance notice to verify compliance with the law. While inspections can feel stressful, a pharmacy that maintains continuous compliance — rather than scrambling to prepare when an inspection is announced — will find the process straightforward and even beneficial.",
        },
        {
          type: "text",
          body: "The key principle is inspection readiness. This means operating every day as if an inspector could walk through the door at any moment — because they can. Inspection readiness is not about last-minute document preparation or hasty clean-up; it is about embedding compliance into daily operations so that your pharmacy is always in a state of readiness.",
        },
        {
          type: "heading",
          level: 3,
          text: "What Inspectors Typically Check",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Pharmacy licence: current and displayed in a visible location",
            "Pharmacist registration: the supervising pharmacist's certificate is current and accessible",
            "Controlled substance safe: locked, secure, properly positioned; register up to date with accurate running balances",
            "Prescription records: filed, accessible, and complete for the required retention period",
            "Temperature records: daily logs for refrigerators and storage areas; evidence of corrective actions for excursions",
            "Drug storage conditions: proper shelving, FIFO (First In, First Out) stock rotation, no expired products on shelves",
            "Labelling compliance: all dispensed medications properly labelled with required information",
            "Cleanliness and hygiene: premises clean, pest-free, and maintained to professional standards",
            "Staff qualifications: evidence that all staff working in dispensing hold appropriate qualifications or operate under proper supervision",
            "Standard Operating Procedures (SOPs): written SOPs available and evidence that staff are trained on them",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Technician's Role During Inspections",
          body: "During a regulatory inspection, the pharmacy technician may be asked to locate records, demonstrate procedures, or answer questions about their work. Respond honestly, politely, and directly. If you do not know the answer to a question, say so — never guess or fabricate information. Refer technical or legal questions to the supervising pharmacist. Your professionalism during an inspection reflects directly on the pharmacy.",
        },
        {
          type: "table",
          caption: "Inspection Readiness Checklist — Daily Actions",
          headers: ["Action", "Frequency", "Responsible"],
          rows: [
            ["Record refrigerator and room temperatures", "Twice daily (morning and afternoon)", "Assigned pharmacy technician"],
            ["Verify controlled substance safe is locked", "Each time safe is accessed; end-of-day check", "Pharmacist and technician"],
            ["Check shelves for expired products", "Daily visual check; weekly comprehensive check", "Pharmacy technician"],
            ["Ensure pharmacy licence is displayed", "Visual check during opening procedures", "Opening staff member"],
            ["File prescriptions and delivery records", "Daily filing; no backlog beyond 24 hours", "Pharmacy technician"],
            ["Update controlled substance register", "Immediately upon each transaction", "Pharmacist (with technician assistance)"],
          ],
        },
        {
          type: "text",
          body: "Common inspection findings in Caribbean pharmacies include: expired products remaining on shelves, incomplete temperature monitoring records, controlled substance register discrepancies, missing or outdated SOPs, and insufficient evidence of staff training. All of these are preventable through disciplined daily operations and a culture of compliance.",
        },
        {
          type: "key-term",
          term: "Inspection Readiness",
          definition:
            "A state of continuous operational compliance in which a pharmacy maintains all records, procedures, and facilities to the standard required by law at all times — not merely when an inspection is anticipated. Inspection readiness is achieved through embedded daily compliance practices rather than episodic preparation.",
        },
        {
          type: "knowledge-check",
          question: "What is the fundamental principle of inspection readiness?",
          options: [
            "Preparing documents quickly when you learn an inspector is coming",
            "Operating every day as if an inspector could arrive at any moment",
            "Only allowing inspections by appointment",
            "Keeping compliance documents in a locked office that inspectors cannot access",
          ],
          correctIndex: 1,
          explanation:
            "Inspection readiness means operating every day as if an inspector could walk through the door at any moment — because they can. This is achieved by embedding compliance into daily operations rather than relying on last-minute preparation.",
        },
      ],
    },
    // ── Lesson 7.3 ──
    {
      id: "m7-l3",
      title: "Internal Compliance Auditing and Continuous Improvement",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Auditing Yourself Before the Inspector Does",
        },
        {
          type: "text",
          body: "Internal compliance auditing is the proactive practice of systematically reviewing your pharmacy's operations against regulatory requirements and professional standards. Rather than waiting for a regulatory inspection to identify deficiencies, internal audits allow the pharmacy to find and fix problems before they become inspection findings, regulatory citations, or — worst of all — patient safety incidents.",
        },
        {
          type: "text",
          body: "An effective internal audit programme follows a structured cycle: plan (identify what to audit and when), do (conduct the audit), check (analyse findings), and act (implement corrective actions). This Plan-Do-Check-Act (PDCA) cycle, also known as the Deming Cycle, is a cornerstone of quality management used across healthcare and industry worldwide.",
        },
        {
          type: "key-term",
          term: "Internal Compliance Audit",
          definition:
            "A systematic, documented evaluation of a pharmacy's operations conducted by its own staff to verify compliance with regulatory requirements, professional standards, and internal SOPs. Internal audits identify deficiencies and drive corrective actions before external regulatory inspections discover them.",
        },
        {
          type: "heading",
          level: 3,
          text: "Conducting a Basic Internal Audit",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Select the audit area: choose a specific aspect of operations (e.g. controlled substances, temperature monitoring, prescription record-keeping)",
            "Prepare the checklist: develop or obtain a structured checklist of requirements for the audit area, drawn from the relevant legislation and standards",
            "Conduct the audit: systematically work through the checklist, verifying each item against actual practice and documentation",
            "Document findings: record all observations, including compliant items, deficiencies, and areas for improvement",
            "Classify deficiencies: categorise each finding by severity (critical, major, minor) to prioritise corrective actions",
            "Develop corrective actions: for each deficiency, determine what needs to change, who is responsible, and by when",
            "Implement and verify: carry out corrective actions and verify their effectiveness",
            "Report and file: prepare a summary report and retain audit documentation as evidence of the pharmacy's quality management system",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Technicians as Audit Champions",
          body: "Pharmacy technicians are often ideally positioned to lead or assist with internal audits. Your daily presence on the front line gives you intimate knowledge of actual operations — where shortcuts happen, where documentation slips, where procedures could be improved. Embrace the audit role as an opportunity to improve your pharmacy's quality and protect your patients.",
        },
        {
          type: "table",
          caption: "Internal Audit Schedule — Recommended Frequency",
          headers: ["Audit Area", "Recommended Frequency", "Key Checkpoints"],
          rows: [
            ["Controlled Substance Records", "Monthly", "Register accuracy, physical counts, balance reconciliation, destruction records"],
            ["Temperature Monitoring", "Monthly", "Log completeness, excursion documentation, corrective actions, equipment calibration"],
            ["Prescription Record-Keeping", "Quarterly", "Filing completeness, required elements present, retention compliance"],
            ["Expiry Date Management", "Monthly", "Shelf checks, short-dated product identification, FIFO compliance"],
            ["SOP Compliance", "Quarterly", "SOPs current, staff training records, observed practice matches written procedures"],
            ["Premises and Equipment", "Quarterly", "Cleanliness, maintenance, security systems, equipment calibration status"],
          ],
        },
        {
          type: "case-study",
          title: "Case Study: The Monthly Controlled Substance Audit",
          scenario:
            "At the end of the month, pharmacy technician Keisha conducts the routine controlled substance audit at her pharmacy in Bridgetown, Barbados. While reconciling the tramadol register, she discovers a discrepancy of 5 tablets — the register shows 120 tablets, but the physical count is 115. She reviews the register entries for the month and finds that a dispensing of 5 tramadol tablets on the 14th was entered in the oxycodone section of the register by mistake.",
          questions: [
            "What should Keisha do now that she has identified the source of the discrepancy?",
            "How should the erroneous register entry be corrected?",
            "Does this finding need to be reported to the regulatory authority?",
            "What systems could prevent this type of error in the future?",
          ],
          discussion:
            "Keisha should immediately report her findings to the supervising pharmacist. The erroneous entry should be corrected following proper procedures: single-line strikethrough in the oxycodone section (with initials, date, and explanatory note) and a correcting entry in the tramadol section (with cross-reference). Because the discrepancy has been explained through a documentation error (not diversion), external reporting may not be required — but the pharmacist should make this determination based on local regulatory requirements. Preventive measures include implementing a double-check system for register entries and using pre-printed register pages that reduce the risk of entering data in the wrong section.",
        },
        {
          type: "text",
          body: "Continuous improvement is not about perfection — it is about consistently getting better. Every audit finding is an opportunity to strengthen your pharmacy's systems. Track your audit results over time: are the same deficiencies recurring? If so, the corrective actions are not working and a different approach is needed. Are new types of findings emerging? That may indicate changes in workload, staffing, or procedures that need to be addressed. The goal is a pharmacy where compliance is embedded in the culture, not dependent on individual vigilance alone.",
        },
        {
          type: "knowledge-check",
          question: "What does the PDCA cycle stand for in quality management?",
          options: [
            "Pharmacy, Dispensing, Compliance, Auditing",
            "Plan, Do, Check, Act",
            "Prescribe, Dispense, Counsel, Assess",
            "Prepare, Document, Count, Archive",
          ],
          correctIndex: 1,
          explanation:
            "PDCA stands for Plan, Do, Check, Act — also known as the Deming Cycle. It is a continuous improvement framework used in quality management across healthcare and industry. In pharmacy, it drives systematic identification and correction of compliance gaps.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m7-q1",
      question: "In pharmacy record-keeping, the axiom 'if it is not documented, it did not happen' reflects which principle?",
      options: [
        "That pharmacies should maintain excessive paperwork",
        "That records serve as legal evidence of compliance and protect both patients and the pharmacy",
        "That electronic records are not acceptable",
        "That only pharmacists need to understand record-keeping",
      ],
      correctIndex: 1,
      explanation:
        "The axiom reflects the principle that records serve as the legal evidence that proper procedures were followed. Without documentation, a pharmacy cannot demonstrate compliance during an inspection, investigation, or legal proceeding.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q2",
      question: "Which of the following are commonly found during regulatory pharmacy inspections in the Caribbean?",
      options: [
        "Expired products on shelves",
        "Incomplete temperature monitoring records",
        "Controlled substance register discrepancies",
        "Excessive inventory of fast-moving products",
        "Missing or outdated SOPs",
      ],
      correctIndex: 0,
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 2, 4],
      },
      explanation:
        "Common inspection findings include expired products on shelves, incomplete temperature logs, controlled substance register discrepancies, and missing/outdated SOPs. Excessive inventory of fast-moving products is not typically a compliance concern.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m7-q3",
      question: "How often should a pharmacy record refrigerator temperatures according to best practice?",
      options: [
        "Once a week",
        "Once a day",
        "Twice daily (morning and afternoon)",
        "Only when a temperature excursion is suspected",
      ],
      correctIndex: 2,
      explanation:
        "Best practice requires temperature recordings at least twice daily — morning and afternoon — to capture the temperature range over the full operating period. Once daily may miss excursions, and weekly monitoring is insufficient for detecting problems in time.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m7-q4",
      question: "PDCA stands for Plan, Do, Check, Act.",
      options: ["True", "False"],
      correctIndex: 0,
      questionType: "true_false",
      questionData: {
        correct_answer: true,
      },
      explanation:
        "True. PDCA (Plan, Do, Check, Act), also known as the Deming Cycle, is a continuous improvement framework used in quality management across healthcare and industry.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q5",
      question: "Arrange the steps of conducting an internal compliance audit in the correct order.",
      options: [
        "Document findings and classify deficiencies",
        "Select the audit area",
        "Implement corrective actions and verify effectiveness",
        "Prepare the checklist",
        "Conduct the audit using the checklist",
      ],
      correctIndex: 0,
      questionType: "ordering",
      questionData: {
        correct_order: [1, 3, 4, 0, 2],
      },
      explanation:
        "The correct order is: (1) Select the audit area, (2) Prepare the checklist, (3) Conduct the audit, (4) Document findings and classify deficiencies, (5) Implement corrective actions and verify.",
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m7-q6",
      question: "How often should controlled substance records be internally audited?",
      options: [
        "Annually",
        "Monthly",
        "Only when a discrepancy is discovered",
        "Every 5 years",
      ],
      correctIndex: 1,
      explanation:
        "Controlled substance records should be audited monthly as recommended best practice. This frequency allows timely detection of discrepancies and demonstrates a robust compliance culture to regulatory inspectors.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m7-q7",
      question: "Match each record type with its primary legal basis in Caribbean pharmacy regulation.",
      options: [
        "Controlled Substance Register",
        "Prescription Records",
        "Temperature Monitoring Logs",
        "Adverse Drug Reaction Reports",
      ],
      correctIndex: 0,
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Controlled Substance Register", right: "Dangerous Drugs Act" },
          { left: "Prescription Records", right: "Pharmacy Act" },
          { left: "Temperature Monitoring Logs", right: "GMP/GDP Guidelines" },
          { left: "Adverse Drug Reaction Reports", right: "Pharmacovigilance Regulations" },
        ],
      },
      explanation:
        "Each record type is mandated by specific legislation or guidelines: controlled substance registers by the Dangerous Drugs Act, prescription records by the Pharmacy Act, temperature logs by GMP/GDP guidelines, and ADR reports by pharmacovigilance regulations.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q8",
      question: "During a regulatory inspection, the inspector asks you a technical question about controlled substance legislation that you are unsure about. What should you do?",
      options: [
        "Provide your best guess to appear knowledgeable",
        "Refuse to answer any questions without a lawyer present",
        "Honestly state that you are not certain and refer the question to the supervising pharmacist",
        "Change the subject to an area you know more about",
      ],
      correctIndex: 2,
      explanation:
        "Honesty during inspections is paramount. If you are unsure about an answer, the correct response is to say so and refer the question to the supervising pharmacist. Guessing or fabricating information can constitute a regulatory offence and undermines the pharmacy's credibility.",
      questionType: "scenario",
      questionData: {
        context: "Regulatory inspection of a community pharmacy",
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m7-q9",
      question: "Records must be stored securely but be readily _____ for inspection.",
      options: ["accessible", "hidden", "encrypted", "sealed"],
      correctIndex: 0,
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: ["accessible", "available"],
        case_sensitive: false,
      },
      explanation:
        "Records must be stored securely to prevent unauthorised access, damage, or loss, but must also be readily accessible for regulatory inspection. An inspector should be able to view any mandated record within a reasonable timeframe during an inspection visit.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q10",
      question: "A pharmacy technician discovers during a monthly audit that temperature logs for the medication refrigerator are missing for 3 days last week. What is the most appropriate first action?",
      options: [
        "Fabricate entries for the missing days using estimated temperatures",
        "Report the gap to the supervising pharmacist and document it as an audit finding with a corrective action plan",
        "Delete the entire month's temperature log and start fresh",
        "Ignore it — 3 days out of a month is not significant",
      ],
      correctIndex: 1,
      explanation:
        "The correct action is to report the gap to the supervising pharmacist, document it as an audit finding, and develop a corrective action plan to prevent future gaps. Fabricating entries is fraudulent, deleting records is destructive, and ignoring gaps undermines the quality system.",
      questionType: "scenario",
      questionData: {
        context: "Monthly internal audit of temperature monitoring records",
      },
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
  ],
};

// ============================================================================
// FULL COURSE ASSEMBLY
// ============================================================================

const regulationsCourse: FullCourse = {
  courseId: "caribbean-pharmaceutical-regulations",
  title: "Caribbean Pharmaceutical Regulations",
  tagline: "Navigate drug laws and compliance across CARICOM nations",
  modules: [module1, module2, module3, module4, module5, module6, module7],
};

// ── Utility helpers ─────────────────────────────────────────────────────────

export const totalLessons = regulationsCourse.modules.reduce(
  (sum, m) => sum + m.lessons.length,
  0,
);

export const totalQuizQuestions = regulationsCourse.modules.reduce(
  (sum, m) => sum + m.quiz.length,
  0,
);

export default regulationsCourse;
