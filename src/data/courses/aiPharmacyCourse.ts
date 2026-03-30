// ============================================================================
// PIXOPHARM LMS — AI in Pharmacy Practice
// Full Course Content: 8 Modules, 25 Lessons, 64 Quiz Questions
// Focus Islands: Trinidad & Tobago, Jamaica, Barbados
// ============================================================================

import type { Module, FullCourse } from '../types';

// ============================================================================
// MODULE 1 — Introduction to AI & Machine Learning for Pharmacy
// ============================================================================

const module1: Module = {
  id: "m1-intro-ai",
  number: 1,
  title: "Introduction to AI & Machine Learning for Pharmacy",
  description:
    "Demystify artificial intelligence, machine learning, and natural language processing in terms that pharmacy professionals can immediately relate to. Explore how these technologies are already reshaping medication management, clinical decision-making, and patient care across the Caribbean.",
  learningObjectives: [
    "Define artificial intelligence, machine learning, and natural language processing in accessible, pharmacy-relevant terms",
    "Distinguish between rule-based systems and learning-based AI using pharmacy examples",
    "Identify at least five current AI applications in pharmacy practice worldwide and in the Caribbean",
    "Explain why Caribbean pharmacy technicians must develop AI literacy to remain professionally competitive",
  ],
  lessons: [
    // ── Lesson 1.1 ──
    {
      id: "m1-l1",
      title: "What Is AI? A Pharmacy Professional's Guide",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Artificial Intelligence — Beyond the Buzzword",
        },
        {
          type: "text",
          body: "Artificial intelligence is everywhere in the news, but what does it actually mean for a pharmacy technician standing behind the dispensing counter in Port of Spain, Kingston, or Bridgetown? At its core, AI refers to computer systems that can perform tasks that normally require human intelligence — recognising patterns, making decisions, understanding language, and learning from experience. You do not need a computer science degree to use AI tools effectively; you need to understand what they can and cannot do, and how to verify their outputs.",
        },
        {
          type: "key-term",
          term: "Artificial Intelligence (AI)",
          definition:
            "The broad field of computer science concerned with building systems capable of performing tasks that typically require human intelligence, such as visual perception, language understanding, decision-making, and pattern recognition.",
        },
        {
          type: "text",
          body: "Think of AI as a spectrum. At one end, you have simple rule-based systems — your pharmacy's software that flags a drug interaction when you enter two specific medications is a basic form of AI. At the other end, you have sophisticated machine learning models that can analyse thousands of patient records to predict which diabetic patients are most likely to be hospitalised next month. Both are 'AI', but they work very differently and have very different capabilities and limitations.",
        },
        {
          type: "key-term",
          term: "Machine Learning (ML)",
          definition:
            "A subset of AI where systems learn patterns from data rather than following explicitly programmed rules. The system improves its performance as it is exposed to more data, much like a pharmacy technician who becomes faster and more accurate with experience.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Caribbean Context",
          body: "The Caribbean is not behind in AI adoption — it is simply adopting differently. Many pharmacies across Trinidad, Jamaica, and Barbados already use AI-powered features within their existing software without realising it. Auto-complete in dispensing software, smart inventory reorder alerts, and insurance claim validation tools all use AI under the hood. Understanding this is the first step to using these tools more deliberately and effectively.",
        },
        {
          type: "heading",
          level: 3,
          text: "Key AI Concepts for Pharmacy",
        },
        {
          type: "table",
          caption: "AI Terminology Made Simple",
          headers: ["Term", "What It Means", "Pharmacy Example"],
          rows: [
            [
              "Algorithm",
              "A step-by-step set of instructions for solving a problem",
              "The process your dispensing software uses to check if a dose is within the safe range",
            ],
            [
              "Natural Language Processing (NLP)",
              "AI that understands and generates human language",
              "ChatGPT or Claude answering your question about a drug's side effects",
            ],
            [
              "Training Data",
              "The information used to teach an ML model",
              "Thousands of past prescriptions used to train a system that predicts demand",
            ],
            [
              "Neural Network",
              "An ML architecture inspired by the human brain's structure",
              "The technology behind image recognition that can read handwritten prescriptions",
            ],
            [
              "Large Language Model (LLM)",
              "An AI trained on vast amounts of text to understand and generate language",
              "Claude and ChatGPT — tools that can summarise drug monographs or draft patient information leaflets",
            ],
          ],
        },
        {
          type: "text",
          body: "The crucial point for pharmacy professionals is this: AI is a tool, not a replacement. Just as a calculator does not replace a pharmacy technician's need to understand pharmaceutical mathematics, AI does not replace clinical judgement. It augments it. Every AI output in a clinical context must be verified by a qualified human before it affects patient care.",
        },
        {
          type: "knowledge-check",
          question: "Which of the following best describes machine learning?",
          options: [
            "A computer system that follows only pre-programmed rules",
            "A subset of AI where systems learn patterns from data and improve with experience",
            "Any software used in a pharmacy",
            "A technology that replaces the need for human pharmacists",
          ],
          correctIndex: 1,
          explanation:
            "Machine learning is a subset of AI where systems learn from data rather than relying solely on pre-programmed rules. The system improves its performance as it is exposed to more data. It does not replace human professionals — it augments their capabilities.",
        },
      ],
    },
    // ── Lesson 1.2 ──
    {
      id: "m1-l2",
      title: "How AI Already Works in Pharmacy Today",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "AI Applications You May Already Be Using",
        },
        {
          type: "text",
          body: "AI in pharmacy is not a futuristic concept — it is a present reality. Many of the tools and systems you interact with daily already incorporate AI technologies. Understanding where AI is already at work helps you use these tools more effectively and prepares you to adopt new AI-powered capabilities as they emerge.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Drug Interaction Screening (DIS): Software like Lexicomp, Micromedex, and Clinical Pharmacology use rule-based AI and increasingly ML to flag interactions when you enter prescriptions",
            "Barcode Verification: Scanning systems that match dispensed medication to the prescription use image recognition AI to reduce dispensing errors",
            "Inventory Management: Smart reorder systems that track usage patterns and predict when stock will run low, adjusting for seasonal demand",
            "Insurance Claim Adjudication: Automated systems that process, validate, and approve or reject insurance claims in real time",
            "Clinical Decision Support (CDS): Systems that alert pharmacists to dosage concerns, allergies, duplicate therapies, and contraindications",
            "Prescription Transcription: Optical character recognition (OCR) and NLP tools that convert handwritten or faxed prescriptions into digital text",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Emerging AI Applications",
        },
        {
          type: "table",
          caption: "Current vs. Emerging AI in Pharmacy",
          headers: ["Category", "Current Use", "Emerging Use"],
          rows: [
            [
              "Drug Information",
              "Searchable databases (Lexicomp, Micromedex)",
              "AI chatbots that answer complex drug queries in natural language (Claude, ChatGPT)",
            ],
            [
              "Dispensing",
              "Barcode scanning and automated counting machines",
              "Robotic dispensing with AI-driven error checking and patient-specific packaging",
            ],
            [
              "Inventory",
              "Min/max reorder point alerts",
              "Predictive analytics forecasting demand based on disease trends, weather, and community events",
            ],
            [
              "Patient Counselling",
              "Printed patient information leaflets",
              "AI-generated personalised patient education materials in local languages and literacy levels",
            ],
            [
              "Medication Adherence",
              "Pill organisers and reminder phone calls",
              "AI-powered apps that track adherence patterns and predict non-compliance before it happens",
            ],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Try It Yourself",
          body: "Open ChatGPT or Claude in your web browser and type: 'I am a pharmacy technician. A patient on metformin 500mg BD has been prescribed ciprofloxacin 500mg BD. What should I be aware of?' Compare the AI response to what you find in Lexicomp or the BNF. Notice how the AI provides a natural-language summary — but always verify against an authoritative source.",
        },
        {
          type: "video-placeholder",
          title: "AI Tools in Caribbean Pharmacies: A Visual Tour",
          duration: "10 min",
          description:
            "A walkthrough of AI-powered features in common Caribbean pharmacy systems, including McKesson, Minfos, and locally developed POS/dispensing software, highlighting features technicians use daily without realising they are AI-driven.",
        },
        {
          type: "knowledge-check",
          question: "Which of the following is an example of AI already used in most Caribbean pharmacies today?",
          options: [
            "Robotic prescription filling",
            "Drug interaction screening software",
            "AI-powered patient diagnosis",
            "Autonomous pharmacy management",
          ],
          correctIndex: 1,
          explanation:
            "Drug interaction screening (DIS) software is the most common AI application already present in Caribbean pharmacies. Systems like Lexicomp and Micromedex use algorithms to flag potential interactions when prescriptions are entered. Robotic filling and AI diagnosis are emerging technologies not yet common in the region.",
        },
      ],
    },
    // ── Lesson 1.3 ──
    {
      id: "m1-l3",
      title: "Why AI Literacy Matters for Caribbean Pharmacy Technicians",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Case for AI Literacy in Caribbean Pharmacy",
        },
        {
          type: "text",
          body: "The Caribbean pharmacy profession is at a crossroads. Globally, AI is transforming healthcare at an accelerating pace. Pharmacy technicians who understand how to use AI tools effectively — and critically — will have a significant advantage in the job market, in their daily practice, and in the quality of care they provide. Those who dismiss AI as irrelevant risk being left behind.",
        },
        {
          type: "text",
          body: "AI literacy does not mean becoming a programmer. It means understanding enough about how AI works to use it wisely, ask the right questions, spot errors in AI outputs, and know when to rely on AI versus when to rely on your own training and the supervising pharmacist's clinical judgement. It is about being a confident, critical user of technology rather than a passive consumer.",
        },
        {
          type: "island-comparison",
          title: "Digital Health Readiness Across the Caribbean",
          description:
            "Each island is at a different stage of digital health adoption, but all are moving toward greater technology integration.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "The CDAP (Chronic Disease Assistance Programme) has been undergoing phased digitisation since 2020",
                "iGovTT has piloted e-health platforms including electronic health records",
                "Several major pharmacy chains have adopted cloud-based dispensing systems with AI features",
                "The University of the West Indies, St. Augustine offers health informatics programmes",
                "Growing fintech and tech startup ecosystem creating local health-tech solutions",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "The National Health Fund (NHF) uses electronic claims processing with automated validation",
                "Jamaica's Ministry of Health has invested in electronic health records at public health facilities",
                "The mHealth Jamaica initiative explores mobile health solutions for remote communities",
                "The University of Technology (UTech) offers IT programmes applicable to health informatics",
                "E-prescribing pilots are under way at select public health centres",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "The Barbados Drug Service maintains a digital national formulary and procurement system",
                "Queen Elizabeth Hospital has implemented electronic prescribing modules",
                "The Barbados National Drug Formulary is available digitally for healthcare professionals",
                "Government e-health strategy includes plans for integrated patient record systems",
                "The compact island geography makes digital health pilot programmes more feasible",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "AI Is Not Infallible",
          body: "Large language models like ChatGPT and Claude can 'hallucinate' — generate plausible-sounding but incorrect information. In pharmacy, a hallucinated drug interaction, dosage, or contraindication could harm a patient. AI outputs must ALWAYS be verified against authoritative sources (BNF, Lexicomp, Micromedex, or the pharmacist) before being applied to patient care. Never use unverified AI output in clinical decisions.",
        },
        {
          type: "case-study",
          title: "Case Study: The Confident Error",
          scenario:
            "A pharmacy technician in Kingston uses ChatGPT to quickly check the maximum daily dose of paracetamol for a patient asking about over-the-counter pain relief. ChatGPT confidently responds '4,000mg per day for adults, with no dose adjustment needed for hepatic impairment.' The technician knows from training that patients with liver disease require dose reduction. The AI response was partially correct (4g/day for healthy adults) but dangerously incomplete — it failed to mention the critical hepatic impairment caution.",
          questions: [
            "What could have happened if the technician relied solely on the AI response without applying their own knowledge?",
            "What steps should a pharmacy technician take to verify AI-generated drug information?",
            "How does this case demonstrate why AI literacy — not just AI access — is essential?",
          ],
          discussion:
            "This case illustrates a core principle of AI use in pharmacy: AI tools are assistants, not authorities. The technician's professional training caught an omission that could have caused serious liver damage in a vulnerable patient. The correct workflow is: use AI for rapid initial lookup, then verify against authoritative sources (BNF, Lexicomp), then apply professional judgement considering the individual patient's circumstances. AI literacy means knowing that AI can be confidently wrong.",
        },
        {
          type: "knowledge-check",
          question: "What is the most important reason Caribbean pharmacy technicians should develop AI literacy?",
          options: [
            "To replace pharmacists in clinical decision-making",
            "To use AI tools effectively while maintaining critical judgement for patient safety",
            "To programme new pharmacy software systems",
            "AI literacy is not relevant to pharmacy practice",
          ],
          correctIndex: 1,
          explanation:
            "AI literacy enables pharmacy technicians to use AI tools effectively whilst maintaining the critical judgement necessary for patient safety. It is not about replacing pharmacists or becoming programmers — it is about being a confident, critical user of technology in clinical practice.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m1-q1",
      question: "What is the relationship between artificial intelligence and machine learning?",
      options: [
        "They are the same thing",
        "Machine learning is a subset of artificial intelligence",
        "Artificial intelligence is a subset of machine learning",
        "They are completely unrelated fields",
      ],
      correctIndex: 1,
      explanation:
        "Machine learning is a subset (a specialised branch) of the broader field of artificial intelligence. While AI encompasses all systems that mimic human intelligence, ML specifically refers to systems that learn and improve from data rather than following only pre-programmed rules.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q2",
      question: "A pharmacy's dispensing software automatically flags that Warfarin and Aspirin may interact when both are entered for the same patient. What type of AI is this?",
      options: [
        "Generative AI",
        "Rule-based clinical decision support",
        "Deep reinforcement learning",
        "Natural language processing",
      ],
      correctIndex: 1,
      explanation:
        "Drug interaction screening in dispensing software is a classic example of rule-based clinical decision support. The system follows pre-programmed rules (if Drug A + Drug B, then flag interaction) rather than learning from data. It is one of the oldest and most established AI applications in pharmacy.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q3",
      question: "Why is it dangerous to rely solely on a large language model (e.g., ChatGPT) for drug information without verification?",
      options: [
        "LLMs are always incorrect about medications",
        "LLMs require a paid subscription that most pharmacies cannot afford",
        "LLMs can 'hallucinate' — generating plausible but incorrect clinical information",
        "LLMs are not available in the Caribbean",
      ],
      correctIndex: 2,
      explanation:
        "Large language models can produce 'hallucinations' — responses that sound confident and plausible but contain factual errors. In a clinical context, a hallucinated drug interaction, dosage, or contraindication could directly harm a patient. All AI-generated clinical information must be verified against authoritative sources.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q4",
      question: "Which of the following are current AI applications in Caribbean pharmacy practice?",
      options: [
        "Only drug interaction screening",
        "Drug interaction screening, insurance claims processing, and inventory reorder alerts",
        "Fully autonomous robotic dispensing",
        "AI-powered patient diagnosis without pharmacist involvement",
      ],
      correctIndex: 1,
      explanation:
        "Caribbean pharmacies currently use AI in drug interaction screening, automated insurance claims processing, and smart inventory reorder alerts. Fully autonomous robotic dispensing and AI-only diagnosis are not yet in use in the region and would raise significant regulatory and safety concerns.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q5",
      question: "What does 'NLP' stand for and what does it enable AI to do?",
      options: [
        "National Licensing Programme — it enables AI to verify pharmacy licences",
        "Natural Language Processing — it enables AI to understand and generate human language",
        "Network Learning Protocol — it enables AI systems to communicate with each other",
        "Non-Linear Programming — it enables AI to solve complex mathematical problems",
      ],
      correctIndex: 1,
      explanation:
        "NLP stands for Natural Language Processing. It is the branch of AI that deals with the interaction between computers and human language, enabling tools like ChatGPT and Claude to understand questions posed in natural language and generate coherent, contextual responses.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q6",
      question: "A pharmacy technician uses Claude to look up a drug interaction, verifies the information in Lexicomp, then consults the pharmacist before counselling the patient. Is this workflow appropriate?",
      questionType: "true_false",
      options: ["True", "False"],
      correctIndex: 0,
      explanation:
        "This is the ideal workflow for using AI in clinical practice. The technician uses AI for rapid initial lookup, verifies against an authoritative source, and involves the pharmacist in the clinical decision. AI is used as a tool, not as the final authority.",
      questionData: {
        correct_answer: true,
      },
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q7",
      question: "Which Caribbean initiative involves the digitisation of chronic disease medication management?",
      options: [
        "CARICOM Single Market (CSM)",
        "Trinidad & Tobago's CDAP digitisation programme",
        "The Caribbean Examination Council (CXC)",
        "The West Indies Cricket Board",
      ],
      correctIndex: 1,
      explanation:
        "Trinidad & Tobago's Chronic Disease Assistance Programme (CDAP) has been undergoing phased digitisation to improve tracking, reduce fraud, and enhance patient outcomes for chronic disease management. This is a concrete example of digital health transformation in the Caribbean.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q8",
      question: "Arrange the following steps in the correct order for using AI to look up drug information in a pharmacy setting.",
      questionType: "ordering",
      options: [
        "Use AI tool for rapid initial lookup",
        "Verify the AI response against an authoritative source (BNF, Lexicomp)",
        "Consult with the supervising pharmacist if the query is clinical",
        "Apply the verified information to patient care",
      ],
      correctIndex: 0,
      explanation:
        "The correct workflow is: (1) Use AI for quick initial lookup, (2) Verify against authoritative clinical sources, (3) Consult the pharmacist for clinical decisions, (4) Apply verified information to patient care. Skipping verification steps can endanger patients.",
      questionData: {
        correct_order: [0, 1, 2, 3],
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 2 — AI-Powered Inventory Forecasting & Demand Planning
// ============================================================================

const module2: Module = {
  id: "m2-inventory-forecasting",
  number: 2,
  title: "AI-Powered Inventory Forecasting & Demand Planning",
  description:
    "Learn how AI transforms pharmacy inventory management from reactive restocking to predictive planning. Explore how seasonal patterns, community events, and disease outbreaks unique to the Caribbean can be leveraged for smarter stock management.",
  learningObjectives: [
    "Explain how AI-powered demand forecasting differs from traditional min/max reorder systems",
    "Identify seasonal demand patterns specific to Caribbean pharmacies (hurricane season, Carnival, flu season, dengue outbreaks)",
    "Interpret basic forecasting dashboards and use AI-generated recommendations to optimise stock levels",
    "Evaluate the trade-offs between overstocking (capital tied up, expiry risk) and understocking (patient harm, lost revenue)",
  ],
  lessons: [
    // ── Lesson 2.1 ──
    {
      id: "m2-l1",
      title: "From Min/Max to Machine Learning: The Inventory Revolution",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Why Traditional Inventory Methods Fall Short",
        },
        {
          type: "text",
          body: "Walk into almost any community pharmacy in the Caribbean and you will find a familiar system: minimum/maximum (min/max) reorder points. When stock of a particular item drops to the minimum level, a reorder is triggered to bring it back up to the maximum. It is simple, time-tested — and increasingly inadequate for the complex realities of modern pharmacy practice.",
        },
        {
          type: "text",
          body: "The fundamental problem with min/max is that it is static. It does not account for the fact that demand for albuterol inhalers spikes during the Saharan dust season (June to August), that paracetamol sales surge during Carnival (February in Trinidad, April in Jamaica), that oral rehydration salts fly off the shelves during the gastroenteritis season, or that antihypertensives need to be stocked in larger quantities at the beginning of the month when CDAP and NHF patients collect their prescriptions.",
        },
        {
          type: "key-term",
          term: "Demand Forecasting",
          definition:
            "The process of predicting future customer demand for products based on historical data, seasonal patterns, market trends, and external factors. AI-powered forecasting uses machine learning to identify complex patterns that humans and simple rule-based systems would miss.",
        },
        {
          type: "table",
          caption: "Traditional vs. AI-Powered Inventory Management",
          headers: ["Feature", "Traditional (Min/Max)", "AI-Powered Forecasting"],
          rows: [
            [
              "Reorder trigger",
              "Fixed threshold — reorder when stock hits minimum",
              "Dynamic threshold — adjusts based on predicted demand",
            ],
            [
              "Seasonal awareness",
              "Manual adjustment by staff (if remembered)",
              "Automatic seasonal pattern recognition from historical data",
            ],
            [
              "External factors",
              "Not considered",
              "Incorporates weather, disease outbreaks, community events, public holidays",
            ],
            [
              "Lead time awareness",
              "Fixed lead time assumption",
              "Learns actual supplier lead times and adjusts for delays",
            ],
            [
              "Expiry management",
              "Manual tracking (often reactive — discovered at stocktake)",
              "Proactive alerts factoring in current stock expiry dates and projected demand",
            ],
            [
              "Cost optimisation",
              "Limited — focuses on availability, not cost",
              "Balances availability against carrying cost, expiry risk, and cash flow",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Caribbean Reality Check",
          body: "Many Caribbean pharmacies operate on tight margins with limited capital. Overstocking ties up cash that could be used elsewhere, and expired medications are a direct financial loss. Understocking means turning patients away — who may then go to a competitor or, worse, go without their medications. AI-powered forecasting helps strike the right balance, which is particularly critical in the Caribbean where supply chain disruptions (shipping delays, customs hold-ups, natural disasters) are common.",
        },
        {
          type: "knowledge-check",
          question: "What is the primary limitation of traditional min/max inventory systems?",
          options: [
            "They are too expensive for Caribbean pharmacies",
            "They are static and do not account for changing demand patterns",
            "They require AI to function properly",
            "They only work for controlled substances",
          ],
          correctIndex: 1,
          explanation:
            "The primary limitation of min/max systems is their static nature. They use fixed thresholds that do not adapt to seasonal demand, external factors, or changing usage patterns. This leads to both overstocking (waste) and understocking (patient harm) depending on the time of year.",
        },
      ],
    },
    // ── Lesson 2.2 ──
    {
      id: "m2-l2",
      title: "Caribbean Demand Patterns: Seasons, Storms & Celebrations",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Understanding the Caribbean Demand Calendar",
        },
        {
          type: "text",
          body: "The Caribbean has a unique set of demand drivers that shape pharmacy inventory needs throughout the year. Understanding these patterns is the first step toward effective demand planning — whether done manually or with AI assistance. A good AI forecasting system needs to be trained on data that captures these Caribbean-specific patterns.",
        },
        {
          type: "table",
          caption: "Caribbean Pharmacy Demand Calendar",
          headers: ["Period", "Months", "Demand Drivers", "Key Products Affected"],
          rows: [
            [
              "Dry Season",
              "January – May",
              "Lower respiratory illness, higher outdoor activity injuries",
              "Antihistamines, sunscreen, first aid supplies, NSAIDs",
            ],
            [
              "Carnival Season",
              "February (T&T), March–April (Jamaica, others)",
              "Festivities, tourism influx, increased alcohol consumption",
              "Paracetamol, ORS, antacids, condoms, first aid, electrolyte drinks",
            ],
            [
              "Hurricane Season",
              "June – November",
              "Storm preparation, post-storm injuries, waterborne illness",
              "Emergency kits, antibiotics, wound care, water purification, chronic meds (buffer stock)",
            ],
            [
              "Saharan Dust Season",
              "June – August",
              "Respiratory irritation from African dust plumes",
              "Albuterol inhalers, antihistamines, nasal sprays, eye drops",
            ],
            [
              "Rainy/Dengue Season",
              "June – December",
              "Mosquito-borne illness (dengue, chikungunya, Zika)",
              "Paracetamol (NOT aspirin for dengue), insect repellent, ORS, IV fluids",
            ],
            [
              "Back to School",
              "August – September",
              "Childhood vaccinations, childhood illness uptick",
              "Paediatric medications, vitamins, lice treatments, hand sanitiser",
            ],
            [
              "Christmas/Year-End",
              "November – December",
              "Holiday spending, chronic med refills before holidays",
              "All chronic medications, gift health items, digestive aids",
            ],
            [
              "Month Start (Ongoing)",
              "1st – 7th of each month",
              "Government programme dispensing (CDAP, NHF, Drug Service)",
              "Antihypertensives, antidiabetics, statins, inhalers — all chronic disease medications",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Dengue Alert — Never Aspirin",
          body: "During dengue season, demand for paracetamol surges because aspirin and NSAIDs are contraindicated in suspected dengue fever (they increase bleeding risk in dengue haemorrhagic fever). AI inventory systems must be configured to flag this pattern — increased paracetamol demand during dengue outbreaks — and to ensure adequate stock of paracetamol while noting that aspirin demand may paradoxically drop.",
        },
        {
          type: "heading",
          level: 3,
          text: "How AI Learns These Patterns",
        },
        {
          type: "text",
          body: "An AI forecasting system analyses years of historical sales data alongside external data sources — weather forecasts, disease surveillance reports from CARPHA, public holiday calendars, and even social media trends — to identify demand patterns and predict future needs. The more data the system has, the more accurate its predictions become. For a Caribbean pharmacy, this means the system gets smarter about local patterns over time: it learns that your Tunapuna branch sells twice as many inhalers in July as in January, or that your Montego Bay location needs extra oral rehydration salts the week after major dancehall events.",
        },
        {
          type: "case-study",
          title: "Case Study: Hurricane Preparedness Through Predictive Analytics",
          scenario:
            "PharmaCare, a five-branch pharmacy chain in Trinidad & Tobago, implemented an AI-powered inventory system in 2023. In June, as hurricane season approached, the system flagged that based on historical data and weather models, there was a 65% probability of a major storm affecting Trinidad within the next 90 days. It recommended increasing buffer stock of essential chronic disease medications (antihypertensives, insulin, antidiabetics) by 40%, stocking emergency supplies (wound care, oral rehydration salts, water purification tablets), and pre-ordering generator fuel for cold chain maintenance. When Tropical Storm Xavier hit in September, PharmaCare was the only pharmacy chain with adequate stock of insulin and antihypertensives for three weeks, serving hundreds of patients who could not access their usual pharmacies.",
          questions: [
            "How did the AI system's recommendation differ from what a traditional min/max system would have suggested?",
            "What data sources would the AI system need to make hurricane preparedness recommendations?",
            "What are the financial risks of following the AI recommendation if the storm had not materialised?",
          ],
          discussion:
            "A traditional min/max system would have maintained normal stock levels regardless of hurricane season risk. The AI system integrated weather modelling, historical storm impact data, and patient demand patterns to make proactive recommendations. The financial risk of overstocking if no storm occurred is real — but manageable, as chronic disease medications have long shelf lives and would be used eventually. The risk of understocking during a disaster — patients unable to access essential medications — is far greater and potentially life-threatening.",
        },
        {
          type: "knowledge-check",
          question: "Why does paracetamol demand increase during dengue season while aspirin demand may decrease?",
          options: [
            "Paracetamol is cheaper than aspirin during the rainy season",
            "Aspirin and NSAIDs are contraindicated in suspected dengue due to increased bleeding risk",
            "Pharmacies run promotions on paracetamol during hurricane season",
            "There is no relationship between dengue season and analgesic demand patterns",
          ],
          correctIndex: 1,
          explanation:
            "Aspirin and other NSAIDs are contraindicated in suspected dengue fever because they increase the risk of haemorrhage, particularly in dengue haemorrhagic fever. Paracetamol is the recommended analgesic/antipyretic for dengue patients. During dengue outbreaks, demand shifts strongly toward paracetamol, a pattern that AI inventory systems must recognise.",
        },
      ],
    },
    // ── Lesson 2.3 ──
    {
      id: "m2-l3",
      title: "Reading Forecasting Dashboards & Acting on AI Recommendations",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "From Data to Decisions",
        },
        {
          type: "text",
          body: "An AI forecasting system is only as useful as your ability to interpret its outputs and take appropriate action. This lesson teaches you how to read a typical forecasting dashboard, understand confidence levels, and decide when to follow, modify, or override AI recommendations.",
        },
        {
          type: "heading",
          level: 3,
          text: "Key Dashboard Metrics",
        },
        {
          type: "table",
          caption: "Essential Forecasting Dashboard Metrics",
          headers: ["Metric", "What It Tells You", "Action Trigger"],
          rows: [
            [
              "Days of Stock Remaining",
              "How many days current stock will last at predicted demand rate",
              "Below lead time + buffer = urgent reorder",
            ],
            [
              "Forecast Accuracy (%)",
              "How well past predictions matched actual demand",
              "Below 70% = system may need recalibration or more data",
            ],
            [
              "Stock Turn Rate",
              "How many times inventory is sold and replaced per year",
              "Low turn rate = overstocking risk; high = possible understocking risk",
            ],
            [
              "Expiry Risk Score",
              "Products likely to expire before being sold at current demand rate",
              "High score = consider promotions, transfers, or return-to-vendor",
            ],
            [
              "Demand Trend Arrow",
              "Whether demand for an item is increasing, stable, or decreasing",
              "Rising trend = increase order quantity; falling = decrease to avoid excess",
            ],
            [
              "Confidence Interval",
              "Range within which the AI predicts actual demand will fall (e.g., 80–120 units, 90% confidence)",
              "Wide interval = more uncertainty, consider ordering toward upper bound for essential meds",
            ],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Practical Rule of Thumb",
          body: "For essential medications (chronic disease treatments, insulin, emergency medications), always order toward the upper end of the AI confidence interval. Running out of metformin is far worse than having a few extra boxes. For non-essential or short-expiry items, order closer to the midpoint or lower end of the range.",
        },
        {
          type: "text",
          body: "Remember that AI recommendations are inputs to your decision, not final decisions. Factors the AI may not account for include a new doctor opening a practice nearby (changing local prescribing patterns), a competitor pharmacy closing (shifting patients to you), supplier relationship nuances (that supplier always ships two days late despite what they promise), or community knowledge (the nearby school's sports day is coming and demand for first aid supplies will spike).",
        },
        {
          type: "key-term",
          term: "Confidence Interval",
          definition:
            "A statistical range within which the AI predicts the actual value will fall, expressed with a confidence level (e.g., 90% confident that demand will be between 80 and 120 units). Wider intervals indicate more uncertainty in the prediction.",
        },
        {
          type: "scenario-simulation",
          title: "Inventory Decision Simulator",
          description: "It is late May in your Trinidad pharmacy. The AI forecasting system has flagged several items. Make decisions on how to respond.",
          nodes: [
            {
              id: "start",
              text: "Your AI dashboard shows three alerts this morning. Albuterol inhalers: 'Days of stock remaining: 8. Forecast demand increase: +45% over next 60 days. Reason: Saharan dust season approaching.' What do you do first?",
              choices: [
                {
                  label: "Place an immediate order for 45% more inhalers than usual",
                  nextNodeId: "order-inhalers",
                  feedback: "Good instinct to act on the Saharan dust warning. Let us check the supplier lead time first.",
                  isOptimal: true,
                },
                {
                  label: "Ignore the alert — 8 days of stock seems sufficient",
                  nextNodeId: "ignore-alert",
                  feedback: "Eight days may seem adequate, but consider supplier lead time and the predicted demand surge.",
                },
                {
                  label: "Wait for the pharmacist to make the decision",
                  nextNodeId: "wait-pharmacist",
                  feedback: "The pharmacist should be informed, but inventory ordering is within your scope. Do not delay.",
                },
              ],
            },
            {
              id: "order-inhalers",
              text: "Good. You check and find the supplier lead time is 7 working days. With only 8 days of stock at CURRENT demand (less if demand increases), this is indeed urgent. You place the order. The second alert reads: 'Metformin 500mg: Expiry risk — 200 tablets expire in 45 days. Current demand: 15 tablets/day.' What do you do?",
              choices: [
                {
                  label: "Calculate if current demand will use the stock before expiry and rotate it to the front",
                  nextNodeId: "calculate-expiry",
                  feedback: "Excellent! 15 tablets/day x 45 days = 675 tablets. You can use 200 well before expiry. FEFO rotation is the right approach.",
                  isOptimal: true,
                },
                {
                  label: "Immediately return the 200 tablets to the supplier",
                  nextNodeId: "return-early",
                  feedback: "That is premature. At 15 tablets/day, the 200 tablets would be used in about 13 days — well before the 45-day expiry.",
                },
              ],
            },
            {
              id: "ignore-alert",
              text: "Five days later, three patients request albuterol inhalers in one morning. Your stock is now critically low and the supplier needs 7 working days for delivery. What do you do?",
              choices: [
                {
                  label: "Place an emergency rush order and contact nearby pharmacies to borrow stock",
                  nextNodeId: "emergency-order",
                  feedback: "This is a recovery action, but the rush order will cost more and patients in the interim may go without. The AI alert could have prevented this.",
                },
              ],
            },
            {
              id: "wait-pharmacist",
              text: "The pharmacist appreciates being informed but reminds you that inventory decisions are within your scope. She asks you to process the order. You have lost a day. Place the order now.",
              choices: [
                {
                  label: "Place the order immediately",
                  nextNodeId: "order-inhalers",
                  feedback: "Good. Next time, act within your scope of practice and inform the pharmacist rather than waiting for approval on routine inventory decisions.",
                },
              ],
            },
            {
              id: "calculate-expiry",
              text: "Well done. The third alert reads: 'Clopidogrel 75mg: Days of stock remaining: 45. Demand trend: Decreasing (-20% over 3 months). Stock turn rate: Low.' The AI recommends reducing next order by 20%. What is your assessment?",
              choices: [
                {
                  label: "Follow the AI recommendation and reduce the next order by 20%",
                  nextNodeId: "success",
                  feedback: "Correct. Declining demand with adequate stock means you can safely reduce order quantities to avoid overstocking and expiry risk.",
                  isOptimal: true,
                },
                {
                  label: "Ignore the recommendation and order the usual amount",
                  nextNodeId: "partial-end",
                  feedback: "If demand is genuinely declining, maintaining the same order quantity will lead to overstocking and potential expiry losses. The AI data should inform your decision.",
                },
              ],
            },
            {
              id: "return-early",
              text: "The supplier declines the return as the tablets are not within their return-to-vendor window (usually 6 months before expiry). You now need to ensure they are dispensed before expiry. Apply FEFO rotation.",
              isEnd: true,
              outcome: "partial",
              summary: "You acted hastily. A quick calculation would have shown the stock would be used well before expiry at current demand rates. Always calculate before acting on expiry alerts.",
            },
            {
              id: "emergency-order",
              text: "The rush order arrives in 3 working days but at a 25% surcharge. Two patients had to be turned away in the interim. The AI alert was accurate and timely — acting on it would have prevented this situation.",
              isEnd: true,
              outcome: "failure",
              summary: "Ignoring AI alerts for time-sensitive seasonal demand can result in stock-outs, patient harm, and increased costs. Always evaluate alerts promptly, even if current stock seems adequate.",
            },
            {
              id: "success",
              text: "Excellent inventory management. You acted on the urgent Saharan dust season alert, correctly assessed the expiry risk using calculation, and followed the data-driven recommendation to reduce clopidogrel ordering. Your pharmacy is well-stocked where needed and not wasting capital on slow-moving items.",
              isEnd: true,
              outcome: "success",
              summary: "You demonstrated effective AI-assisted inventory management: acting on urgent alerts, verifying with calculation, and trusting data-driven recommendations for routine adjustments.",
            },
            {
              id: "partial-end",
              text: "You managed the urgent items well but missed an opportunity to optimise stock levels. Over time, ignoring demand trend data leads to tied-up capital and expiry losses.",
              isEnd: true,
              outcome: "partial",
              summary: "Good handling of urgent issues but improvement needed in following through on demand trend recommendations. AI data should inform all ordering decisions, not just urgent ones.",
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "A forecasting dashboard shows 'Confidence Interval: 80–120 units (90% confidence)' for an essential chronic disease medication. What quantity should you order?",
          options: [
            "80 units — the lower bound to minimise cost",
            "100 units — the midpoint of the range",
            "Toward 120 units — the upper bound, because running out of essential medication is worse than slight overstocking",
            "200 units — double the upper bound to be safe",
          ],
          correctIndex: 2,
          explanation:
            "For essential medications, you should order toward the upper end of the confidence interval. Running out of chronic disease medications causes direct patient harm, whereas a slight overstock of long-shelf-life medications carries minimal risk and will be used eventually. Ordering double the upper bound would be wasteful.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m2-q1",
      question: "What is the primary advantage of AI-powered demand forecasting over traditional min/max inventory systems?",
      options: [
        "It is cheaper to implement",
        "It dynamically adjusts to seasonal patterns, external factors, and changing demand trends",
        "It eliminates the need for pharmacy technicians to manage inventory",
        "It guarantees zero stock-outs",
      ],
      correctIndex: 1,
      explanation:
        "AI-powered forecasting dynamically adjusts predictions based on historical patterns, seasonal trends, external factors (weather, events, disease outbreaks), and real-time data. Traditional min/max systems use fixed thresholds that do not adapt to changing conditions.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q2",
      question: "During which period should Caribbean pharmacies increase stock of albuterol inhalers and antihistamines?",
      options: [
        "Christmas season (November–December)",
        "Carnival season (February–April)",
        "Saharan dust season (June–August)",
        "Back-to-school period (August–September)",
      ],
      correctIndex: 2,
      explanation:
        "The Saharan dust season (June–August) brings African dust plumes to the Caribbean, causing respiratory irritation and allergic reactions. This drives increased demand for albuterol inhalers, antihistamines, nasal sprays, and eye drops.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q3",
      question: "Why is aspirin contraindicated during dengue outbreaks?",
      options: [
        "Aspirin is less effective than paracetamol for fever",
        "Aspirin increases the risk of haemorrhage in dengue haemorrhagic fever",
        "Aspirin interacts with insect repellent",
        "There is no specific contraindication; either analgesic is fine",
      ],
      correctIndex: 1,
      explanation:
        "Aspirin and NSAIDs are contraindicated in suspected dengue because they inhibit platelet function and increase bleeding risk, which is particularly dangerous in dengue haemorrhagic fever. Paracetamol is the recommended analgesic/antipyretic for dengue patients.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q4",
      question: "A pharmacy's AI system shows a forecast accuracy of 55% for a product category. What does this suggest?",
      options: [
        "The system is performing well",
        "The system may need recalibration, more training data, or the product has highly unpredictable demand",
        "The product should be removed from the formulary",
        "The AI system should be immediately replaced",
      ],
      correctIndex: 1,
      explanation:
        "A forecast accuracy below 70% suggests the model may need recalibration, additional training data, or that the product genuinely has unpredictable demand patterns. It does not necessarily mean the system is faulty — some products are inherently harder to forecast.",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m2-q5",
      question: "Match each inventory metric with its correct description.",
      questionType: "matching",
      options: [
        "Days of Stock Remaining",
        "Stock Turn Rate",
        "Expiry Risk Score",
        "Confidence Interval",
      ],
      correctIndex: 0,
      explanation:
        "Days of Stock Remaining tells you how long current stock will last at predicted demand; Stock Turn Rate measures how often inventory cycles per year; Expiry Risk Score flags products likely to expire before being sold; Confidence Interval gives the range of predicted demand with a stated probability.",
      questionData: {
        pairs: [
          { left: "Days of Stock Remaining", right: "How many days current stock will last at predicted demand rate" },
          { left: "Stock Turn Rate", right: "How many times inventory is sold and replaced per year" },
          { left: "Expiry Risk Score", right: "Products likely to expire before being sold" },
          { left: "Confidence Interval", right: "Range within which actual demand is predicted to fall" },
        ],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q6",
      question: "Why do government programme medications (CDAP, NHF) show demand spikes at the beginning of each month?",
      options: [
        "Suppliers offer monthly discounts",
        "Patients typically collect their programme medications at month start when benefits reset",
        "Pharmacies only stock these medications at month start",
        "Government programmes only operate during the first week of each month",
      ],
      correctIndex: 1,
      explanation:
        "Government programmes like Trinidad's CDAP and Jamaica's NHF typically have monthly benefit cycles. Patients tend to collect their chronic disease medications at the beginning of the month when their benefits reset, creating predictable demand spikes that AI systems can plan for.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q7",
      question: "Which of the following factors should an AI inventory system consider when forecasting demand for a Caribbean pharmacy? Select ALL that apply.",
      questionType: "multiple_select",
      options: [
        "Historical sales data",
        "Weather and hurricane forecasts",
        "Disease surveillance data from CARPHA",
        "Public holiday and event calendars",
        "The pharmacy owner's favourite colour",
      ],
      correctIndex: 0,
      explanation:
        "Effective Caribbean pharmacy AI forecasting should consider historical sales data, weather forecasts (especially hurricane and Saharan dust season), disease surveillance data from CARPHA (dengue, chikungunya outbreaks), and public holiday/event calendars (Carnival, Christmas, back-to-school). The owner's colour preference is obviously irrelevant.",
      questionData: {
        correct_indices: [0, 1, 2, 3],
      },
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q8",
      question: "For essential chronic disease medications, where in the confidence interval should you typically place your order?",
      options: [
        "Below the lower bound to save costs",
        "At the midpoint for balanced risk",
        "Toward the upper bound because stock-outs cause patient harm",
        "Above the upper bound for maximum safety",
      ],
      correctIndex: 2,
      explanation:
        "For essential medications, ordering toward the upper end of the confidence interval is best practice. The cost of running out (patient harm, loss of trust, potential emergency) far outweighs the cost of slight overstocking of medications with long shelf lives.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 3 — Clinical Decision Support: Automated Drug Interaction Checking
// ============================================================================

const module3: Module = {
  id: "m3-clinical-decision-support",
  number: 3,
  title: "Clinical Decision Support: Automated Drug Interaction Checking",
  description:
    "Master the use of drug interaction screening (DIS) tools and clinical decision support systems. Learn how AI algorithms classify interaction severity, how to interpret alerts without alert fatigue, and how to apply DIS in Caribbean prescribing contexts.",
  learningObjectives: [
    "Describe how automated drug interaction screening systems work at a technical level (rule-based vs. ML-based)",
    "Classify drug interaction severity levels and determine appropriate clinical responses for each",
    "Analyse the problem of alert fatigue and apply strategies to maintain vigilance",
    "Evaluate clinical decision support alerts in the context of Caribbean prescribing patterns and formularies",
    "Demonstrate the correct workflow for handling a flagged interaction from initial alert through pharmacist escalation",
  ],
  lessons: [
    // ── Lesson 3.1 ──
    {
      id: "m3-l1",
      title: "How Drug Interaction Screening Actually Works",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Inside the Black Box: DIS Technology Explained",
        },
        {
          type: "text",
          body: "Every time you enter a prescription into your pharmacy's dispensing software and the system flags a drug interaction, you are witnessing a clinical decision support system in action. But how does it actually work? Understanding the technology behind these alerts makes you a more effective user — you will know why some alerts are more reliable than others, why false positives occur, and when to trust the system versus when to dig deeper.",
        },
        {
          type: "text",
          body: "Drug interaction screening systems typically work in one of two ways, or a combination of both. Rule-based systems use a database of known interactions, coded by experts, that the software checks against whenever a new medication is entered. Machine learning-based systems analyse patterns in large datasets of patient records, prescriptions, and adverse event reports to identify potential interactions, including ones not yet documented in the literature.",
        },
        {
          type: "key-term",
          term: "Drug Interaction Screening (DIS)",
          definition:
            "An automated system that checks whether two or more medications prescribed to the same patient have the potential to interact, causing altered drug effects, increased toxicity, or reduced efficacy. DIS is a core function of clinical decision support in pharmacy software.",
        },
        {
          type: "table",
          caption: "Rule-Based vs. ML-Based Interaction Detection",
          headers: ["Feature", "Rule-Based", "Machine Learning-Based"],
          rows: [
            [
              "Knowledge source",
              "Expert-curated database of known interactions",
              "Learned from large datasets of patient records and adverse events",
            ],
            [
              "Coverage",
              "Only detects interactions already catalogued",
              "Can potentially identify novel interactions not yet in the literature",
            ],
            [
              "Accuracy",
              "High for known interactions; misses unknown ones",
              "May catch novel interactions but also generates more false positives",
            ],
            [
              "Update frequency",
              "Updated when experts add new entries (often quarterly)",
              "Continuously learns from new data (if designed to do so)",
            ],
            [
              "Explainability",
              "Clear — can show exactly which rule triggered the alert",
              "Often a 'black box' — harder to explain why an alert was generated",
            ],
            [
              "Caribbean relevance",
              "Well-suited; interactions are universal chemistry",
              "Potentially less accurate if trained primarily on non-Caribbean populations",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Systems Used in the Caribbean",
          body: "The most common DIS databases used in Caribbean pharmacies include Lexicomp, First Databank (FDB), Micromedex (Truven Health Analytics), and the British National Formulary (BNF) interaction checker. Locally developed pharmacy software in Trinidad, Jamaica, and Barbados typically integrates with one of these databases for interaction checking. The choice of database can affect which interactions are flagged and how they are classified.",
        },
        {
          type: "knowledge-check",
          question: "What is a key advantage of ML-based drug interaction screening over rule-based systems?",
          options: [
            "ML systems never produce false positives",
            "ML systems can potentially identify novel interactions not yet catalogued by experts",
            "ML systems are always more accurate",
            "ML systems do not require any data to function",
          ],
          correctIndex: 1,
          explanation:
            "The key advantage of ML-based DIS is the potential to identify novel drug interactions by analysing patterns in patient data that have not yet been formally catalogued. However, this comes at the cost of more false positives and less explainable alerts.",
        },
      ],
    },
    // ── Lesson 3.2 ──
    {
      id: "m3-l2",
      title: "Interaction Severity Levels & Clinical Response",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Not All Interactions Are Created Equal",
        },
        {
          type: "text",
          body: "Drug interaction screening systems classify interactions by severity to help pharmacy staff prioritise their response. Understanding these severity levels and knowing the appropriate clinical action for each is a critical skill for pharmacy technicians. Not every flagged interaction requires stopping the prescription — many are manageable with monitoring or dose adjustments. The skill is knowing the difference.",
        },
        {
          type: "table",
          caption: "Drug Interaction Severity Classification",
          headers: ["Severity Level", "Colour Code", "Clinical Significance", "Required Action"],
          rows: [
            [
              "Contraindicated",
              "Red / Level 1",
              "Combination should never be used — risk of severe harm or death",
              "STOP. Do not dispense. Alert pharmacist immediately. Contact prescriber.",
            ],
            [
              "Major",
              "Orange / Level 2",
              "Combination may cause significant harm; alternative therapy usually available",
              "Alert pharmacist. Hold dispensing until pharmacist reviews. Document.",
            ],
            [
              "Moderate",
              "Yellow / Level 3",
              "Combination may alter drug effect; monitoring may be needed",
              "Inform pharmacist. May dispense if pharmacist approves. Note for patient counselling.",
            ],
            [
              "Minor",
              "Green / Level 4",
              "Interaction is clinically insignificant in most patients",
              "Note for records. No immediate action usually required. Dispense normally.",
            ],
            [
              "Unknown",
              "Grey",
              "Insufficient data to classify; may be a novel combination",
              "Alert pharmacist for clinical review. Do not dismiss — absence of evidence is not evidence of absence.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Critical Contraindicated Combinations",
          body: "Some drug interactions are so dangerous that they should be memorised, not merely relied upon software to catch: Methotrexate + Trimethoprim (bone marrow suppression), Warfarin + Miconazole oral gel (haemorrhage), MAOIs + SSRIs (serotonin syndrome), Simvastatin + Clarithromycin (rhabdomyolysis), Metformin + IV contrast dye (lactic acidosis). These combinations arise regularly in Caribbean prescribing and require immediate pharmacist escalation.",
        },
        {
          type: "key-term",
          term: "Alert Fatigue",
          definition:
            "The phenomenon where pharmacy staff become desensitised to drug interaction alerts due to the sheer volume of warnings, many of which are minor or clinically irrelevant. Alert fatigue can lead to critical alerts being overridden or dismissed, potentially causing patient harm.",
        },
        {
          type: "text",
          body: "Studies show that up to 95% of drug interaction alerts are overridden by pharmacy staff in busy settings. This is the paradox of clinical decision support: too few alerts and you miss dangerous interactions; too many and staff become desensitised and override everything, including critical alerts. Effective use of DIS means understanding severity levels so well that you can quickly triage alerts rather than reflexively dismissing them.",
        },
        {
          type: "knowledge-check",
          question: "A 'Major' (Level 2) drug interaction alert appears on screen. What is the correct first action?",
          options: [
            "Override the alert and dispense the medication",
            "Alert the pharmacist and hold dispensing until they review",
            "Refuse to fill the prescription entirely",
            "Ignore it — major alerts are usually false positives",
          ],
          correctIndex: 1,
          explanation:
            "For a Major (Level 2) interaction, the correct first action is to alert the pharmacist and hold dispensing until they have reviewed the interaction. The pharmacist may decide to proceed with monitoring, adjust the dose, or contact the prescriber for an alternative.",
        },
      ],
    },
    // ── Lesson 3.3 ──
    {
      id: "m3-l3",
      title: "Combating Alert Fatigue: Strategies for Sustainable Vigilance",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "When Every Prescription Triggers an Alert",
        },
        {
          type: "text",
          body: "In a busy Caribbean pharmacy dispensing 200–400 prescriptions per day, a DIS system might generate 50–100 interaction alerts. The vast majority — perhaps 80–90% — are minor or moderate interactions that have been previously assessed and accepted by the pharmacist. If every alert requires the same level of attention, the system quickly becomes noise rather than signal, and critical alerts get lost in the flood.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Tiered alert display: Configure your system to display contraindicated and major alerts prominently (full screen, audio alert) while showing moderate and minor alerts less intrusively (sidebar notification)",
            "Custom suppression lists: Work with the pharmacist to create a list of known, accepted interactions for specific patient-drug combinations that do not need to be re-alerted each time",
            "Mandatory hard stops: Ensure contraindicated combinations cannot be overridden without pharmacist credentials — this prevents accidental dismissal of critical alerts",
            "Regular override audits: Periodically review which alerts have been overridden to catch patterns of inappropriate dismissal",
            "Continuing education: Regularly update your knowledge of clinically significant interactions so you can quickly assess alert relevance",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Cost of Override Culture",
          body: "Research shows that when override rates exceed 90%, the risk of a clinically significant interaction being missed increases dramatically. In 2019, a study found that pharmacies with lower override rates had 40% fewer adverse drug events. Caribbean pharmacies, often with fewer staff and higher volume per technician, are particularly vulnerable to alert fatigue. Building a culture where critical alerts are never overridden without pharmacist review is essential.",
        },
        {
          type: "island-comparison",
          title: "CDS System Configuration Across the Caribbean",
          description:
            "How different islands approach clinical decision support configuration and alert management.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Major pharmacy chains use Lexicomp-integrated DIS with customisable alert tiers",
                "CDAP dispensing software includes basic interaction checking for programme medications",
                "The Pharmacy Board encourages but does not mandate specific DIS software",
                "Hospital pharmacies at Eric Williams Medical Sciences Complex use more advanced CDS",
                "Alert fatigue is a recognised issue in high-volume Port of Spain pharmacies",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "The NHF electronic claims system includes interaction checking for scheme medications",
                "University Hospital of the West Indies uses enterprise-grade CDS systems",
                "Community pharmacies increasingly use cloud-based dispensing software with built-in DIS",
                "The Pharmacy Council promotes DIS use as part of good dispensing practice",
                "Rural pharmacies may rely more on manual checking and the BNF due to system limitations",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "The Barbados Drug Service procurement system integrates basic formulary-level interaction checks",
                "Queen Elizabeth Hospital pharmacy uses comprehensive CDS within its electronic health record",
                "Community pharmacies typically use BNF interaction checker or Lexicomp",
                "The smaller market size means fewer locally customised CDS solutions",
                "National formulary alignment helps standardise which interactions are considered most relevant",
              ],
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "Which strategy is most effective at preventing critical drug interaction alerts from being accidentally dismissed?",
          options: [
            "Turning off all alerts to reduce noise",
            "Implementing mandatory hard stops for contraindicated combinations that require pharmacist credentials to override",
            "Displaying all alerts at the same priority level",
            "Having the technician override all alerts to save time",
          ],
          correctIndex: 1,
          explanation:
            "Mandatory hard stops for contraindicated (Level 1) combinations ensure that the most dangerous interactions cannot be bypassed without pharmacist review. This preserves the safety net for critical alerts while allowing routine management of lower-severity interactions.",
        },
      ],
    },
    // ── Lesson 3.4 ──
    {
      id: "m3-l4",
      title: "Practical DIS Workflow: From Alert to Resolution",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Complete Interaction Alert Workflow",
        },
        {
          type: "text",
          body: "Knowing what to do when a drug interaction alert appears — from the moment it flashes on your screen to its final resolution — is a core competency for pharmacy technicians. This lesson walks you through the complete workflow using a structured approach that ensures patient safety while maintaining efficient dispensary operations.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "STOP: Do not click past the alert. Read it completely, noting the severity level, the interacting medications, and the clinical consequence described.",
            "ASSESS: Determine the severity level. Is it contraindicated (red), major (orange), moderate (yellow), or minor (green)?",
            "CHECK: Look at the patient profile. Is this a new combination or have they been on both medications before? Check dispensing history.",
            "ESCALATE: For contraindicated and major interactions, immediately inform the pharmacist. Do not attempt to resolve these independently.",
            "DOCUMENT: Record the alert, the action taken, and the outcome in the patient record and in the pharmacy's interaction log.",
            "COMMUNICATE: Ensure the resolution is communicated to the patient (if counselling is needed) and to the prescriber (if the prescription was modified).",
          ],
        },
        {
          type: "case-study",
          title: "Case Study: The Warfarin-Antibiotic Alert",
          scenario:
            "Mrs. Persad, a 68-year-old patient at your pharmacy in San Fernando, Trinidad, presents a new prescription for Clarithromycin 500mg BD for a respiratory infection. She is a regular patient who has been taking Warfarin 5mg daily for atrial fibrillation for three years. When you enter the Clarithromycin, the DIS system flags a Major (Level 2) interaction: 'Clarithromycin significantly increases Warfarin effect. Risk of serious haemorrhage. Consider alternative antibiotic (e.g., Azithromycin) or increase INR monitoring frequency.' Mrs. Persad is anxious to get her antibiotics and start feeling better. She says her doctor knows about her Warfarin.",
          questions: [
            "What is your immediate action upon seeing this alert?",
            "Should you dispense the Clarithromycin based on Mrs. Persad's statement that her doctor is aware?",
            "What alternative workflow would ensure patient safety while minimising delay?",
          ],
          discussion:
            "The correct workflow: (1) Stop and read the full alert. (2) Inform Mrs. Persad that you need the pharmacist to review the prescription for safety — this is routine and protects her. (3) Present the alert to the pharmacist with the patient's full medication profile. The pharmacist may call the prescriber to suggest Azithromycin as an alternative (which has minimal Warfarin interaction) or, if Clarithromycin is specifically needed, arrange increased INR monitoring. Mrs. Persad's statement that her doctor 'knows about the Warfarin' is reassuring but does not replace the DIS alert workflow — the prescriber may not have checked the specific interaction.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Communication Script",
          body: "'Mrs. Persad, I need to have the pharmacist take a quick look at this prescription before I can prepare it. It is a routine safety check that we do for all our patients — especially our regulars that we care about. It should only take a few minutes. Can I get you a seat while you wait?'",
        },
        {
          type: "text",
          body: "Notice the communication approach: reassuring, professional, patient-centred. Never say 'the computer flagged a problem' or 'there is a drug interaction' to the patient — this can cause unnecessary alarm. Use language like 'routine safety check' and 'the pharmacist wants to review this' to maintain confidence while ensuring the alert is properly assessed.",
        },
        {
          type: "key-term",
          term: "INR (International Normalised Ratio)",
          definition:
            "A blood test that measures how long it takes blood to clot, used to monitor Warfarin therapy. A high INR means blood is too thin (bleeding risk); a low INR means the Warfarin is not effective enough (clotting risk). The target range is typically 2.0–3.0 for most indications.",
        },
        {
          type: "knowledge-check",
          question: "A patient says 'my doctor already knows about the interaction' when you pause to review a Major drug interaction alert. What is the correct response?",
          options: [
            "Accept the patient's statement and dispense the medication",
            "Refuse to fill the prescription entirely",
            "Acknowledge the patient's input but still have the pharmacist review the alert before dispensing",
            "Tell the patient the computer is wrong and override the alert",
          ],
          correctIndex: 2,
          explanation:
            "A patient's statement about their doctor's awareness does not replace the pharmacist review process. The correct approach is to acknowledge what the patient has said, reassure them, and still have the pharmacist assess the interaction. The prescriber may have overlooked the specific interaction, or the pharmacist may identify a safer alternative or monitoring plan.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m3-q1",
      question: "What does DIS stand for in pharmacy technology?",
      options: [
        "Digital Information System",
        "Drug Interaction Screening",
        "Dispensing Integration Software",
        "Data Intelligence Service",
      ],
      correctIndex: 1,
      explanation:
        "DIS stands for Drug Interaction Screening — an automated system that checks whether two or more medications prescribed to the same patient have the potential to interact harmfully.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q2",
      question: "A DIS alert is classified as 'Contraindicated' (Level 1, Red). What is the correct action?",
      options: [
        "Note it in the patient file and continue dispensing",
        "Inform the pharmacist at the end of the day",
        "STOP immediately, do not dispense, alert the pharmacist, and contact the prescriber",
        "Override the alert if the patient has taken the combination before",
      ],
      correctIndex: 2,
      explanation:
        "A Contraindicated (Level 1) alert means the combination should never be used — the risk of severe harm or death is too great. The immediate response is to stop, alert the pharmacist, and contact the prescriber. This alert should never be overridden.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q3",
      question: "What is alert fatigue in the context of clinical decision support?",
      options: [
        "When the pharmacy's computer system crashes due to too many alerts",
        "When pharmacy staff become desensitised to alerts due to high volume, leading to critical alerts being dismissed",
        "When patients become tired of being told about drug interactions",
        "When the DIS database becomes outdated",
      ],
      correctIndex: 1,
      explanation:
        "Alert fatigue occurs when the sheer volume of drug interaction alerts — many of which are minor or clinically irrelevant in context — causes pharmacy staff to become desensitised and start overriding alerts reflexively, including critical ones. Studies show override rates can exceed 95% in busy settings.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q4",
      question: "Which of the following is a key difference between rule-based and ML-based drug interaction detection?",
      options: [
        "Rule-based systems are always more accurate",
        "ML-based systems can never detect known interactions",
        "Rule-based systems only detect catalogued interactions; ML-based systems can potentially identify novel ones",
        "ML-based systems do not require any data to function",
      ],
      correctIndex: 2,
      explanation:
        "Rule-based systems check against a curated database of known interactions, so they only detect what has already been catalogued. ML-based systems analyse patterns in data and can potentially identify novel interactions not yet documented, though they may also generate more false positives.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m3-q5",
      question: "A patient on Warfarin is prescribed Clarithromycin. The DIS flags a Major interaction. What is the clinical concern?",
      options: [
        "Clarithromycin reduces Warfarin effectiveness, increasing clotting risk",
        "Clarithromycin significantly increases Warfarin effect, increasing haemorrhage risk",
        "The combination causes kidney failure",
        "There is no real interaction; this is a false positive",
      ],
      correctIndex: 1,
      explanation:
        "Clarithromycin inhibits the liver enzymes (CYP3A4 and CYP1A2) that metabolise Warfarin, leading to increased Warfarin levels in the blood. This significantly increases the risk of haemorrhage. Azithromycin is often suggested as an alternative with minimal Warfarin interaction.",
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
    {
      id: "m3-q6",
      question: "Arrange the DIS alert response workflow in the correct order.",
      questionType: "ordering",
      options: [
        "STOP — read the alert completely",
        "ASSESS — determine severity level",
        "CHECK — review patient dispensing history",
        "ESCALATE — inform pharmacist for major/contraindicated alerts",
        "DOCUMENT — record alert, action, and outcome",
        "COMMUNICATE — inform patient and prescriber as needed",
      ],
      correctIndex: 0,
      explanation:
        "The correct DIS workflow follows a structured sequence: Stop, Assess, Check, Escalate, Document, Communicate. Skipping steps — especially escalation for serious interactions — can compromise patient safety.",
      questionData: {
        correct_order: [0, 1, 2, 3, 4, 5],
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q7",
      question: "What percentage of drug interaction alerts are typically overridden in busy pharmacy settings, according to research?",
      options: [
        "About 10%",
        "About 25%",
        "About 50%",
        "Up to 95%",
      ],
      correctIndex: 3,
      explanation:
        "Research shows that up to 95% of drug interaction alerts are overridden in busy pharmacy settings. This alarmingly high rate is the core of the alert fatigue problem and underscores why tiered alert systems and mandatory hard stops for critical interactions are essential.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q8",
      question: "Which of the following contraindicated drug combinations should a pharmacy technician memorise?",
      questionType: "multiple_select",
      options: [
        "Methotrexate + Trimethoprim",
        "Warfarin + Miconazole oral gel",
        "Paracetamol + Ibuprofen",
        "MAOIs + SSRIs",
        "Simvastatin + Clarithromycin",
      ],
      correctIndex: 0,
      explanation:
        "Methotrexate + Trimethoprim (bone marrow suppression), Warfarin + Miconazole oral gel (haemorrhage), MAOIs + SSRIs (serotonin syndrome), and Simvastatin + Clarithromycin (rhabdomyolysis) are all contraindicated combinations that pharmacy technicians should memorise. Paracetamol + Ibuprofen is generally safe when used appropriately.",
      questionData: {
        correct_indices: [0, 1, 3, 4],
      },
      difficulty: "hard",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 4 — AI-Assisted Patient Counselling & Health Information
// ============================================================================

const module4: Module = {
  id: "m4-ai-patient-counselling",
  number: 4,
  title: "AI-Assisted Patient Counselling & Health Information",
  description:
    "Explore how AI tools like ChatGPT and Claude can assist pharmacy technicians in preparing patient education materials, looking up drug information, and supporting counselling — while maintaining the human connection that Caribbean patients expect and deserve.",
  learningObjectives: [
    "Construct effective prompts for AI tools to retrieve accurate, patient-appropriate drug information",
    "Evaluate AI-generated patient education materials for accuracy, cultural appropriateness, and health literacy level",
    "Apply AI translation tools to prepare patient information in Caribbean Creole languages while maintaining clinical accuracy",
  ],
  lessons: [
    // ── Lesson 4.1 ──
    {
      id: "m4-l1",
      title: "Using AI Chatbots for Drug Information Lookup",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "ChatGPT, Claude & Beyond: AI as Your Research Assistant",
        },
        {
          type: "text",
          body: "Large language models (LLMs) like ChatGPT and Claude have emerged as powerful research assistants for pharmacy professionals. They can summarise drug monographs, explain mechanisms of action in plain language, compare medications, and answer complex clinical questions — all in seconds. But they must be used correctly. Think of an LLM as a very knowledgeable junior colleague who is sometimes confidently wrong: their output always needs a senior review.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Art of Prompting for Pharmacy",
        },
        {
          type: "text",
          body: "The quality of an AI response depends heavily on the quality of your question — this is called 'prompt engineering.' A vague question gets a vague answer. A specific, well-structured prompt gets a targeted, useful response. For pharmacy use, your prompts should always include the clinical context, the specific information you need, and any constraints.",
        },
        {
          type: "table",
          caption: "Effective vs. Ineffective AI Prompts for Pharmacy",
          headers: ["Poor Prompt", "Better Prompt", "Why It Is Better"],
          rows: [
            [
              "Tell me about metformin",
              "I am a pharmacy technician in Trinidad. A patient with Type 2 diabetes on Metformin 500mg BD asks about common side effects and when to see their doctor. Summarise in patient-friendly language at a secondary school reading level.",
              "Specifies your role, location, dose, specific need, and desired language level",
            ],
            [
              "Can I take these two drugs together?",
              "A 72-year-old patient takes Amlodipine 10mg daily and Simvastatin 40mg at night. Is there a clinically significant interaction? If so, what monitoring or dose adjustment is recommended?",
              "Provides specific medications, doses, and patient age; asks a targeted clinical question",
            ],
            [
              "What is the dose of amoxicillin?",
              "What is the standard adult oral dose of Amoxicillin for a lower urinary tract infection, and what dose adjustments are needed for renal impairment (CrCl < 30mL/min)?",
              "Specifies indication, route, and a specific clinical scenario requiring nuanced information",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Golden Rule of AI in Pharmacy",
          body: "NEVER give AI-generated drug information directly to a patient without: (1) Verifying it against an authoritative source (BNF, Lexicomp, Micromedex, or a current drug monograph), and (2) Having the supervising pharmacist review any clinical content. AI tools are for YOUR preparation — they do not replace clinical verification or professional oversight.",
        },
        {
          type: "key-term",
          term: "Prompt Engineering",
          definition:
            "The practice of crafting precise, context-rich questions for AI systems to elicit the most accurate and useful responses. In pharmacy, effective prompting includes specifying the clinical context, patient details, and desired output format.",
        },
        {
          type: "knowledge-check",
          question: "Which prompt is most likely to produce a useful, accurate AI response for pharmacy practice?",
          options: [
            "'Tell me about blood pressure medications'",
            "'I am a pharmacy technician. A patient on Lisinopril 10mg daily asks why they have a persistent dry cough. Explain the mechanism and common alternatives, in language suitable for patient counselling.'",
            "'List all ACE inhibitors'",
            "'What drugs cause cough?'",
          ],
          correctIndex: 1,
          explanation:
            "The second prompt is most effective because it specifies the user's role (pharmacy technician), the specific clinical scenario (Lisinopril-induced cough), the information needed (mechanism and alternatives), and the desired output format (patient-friendly language). Specific, contextual prompts produce specific, useful responses.",
        },
      ],
    },
    // ── Lesson 4.2 ──
    {
      id: "m4-l2",
      title: "Creating Patient Education Materials with AI",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "AI-Assisted Patient Education: Culturally Appropriate and Accessible",
        },
        {
          type: "text",
          body: "Patient education is one of the most impactful roles a pharmacy technician can play, and AI tools can dramatically speed up the creation of high-quality, culturally appropriate educational materials. Whether you need a handout about diabetes management for an elderly patient who speaks primarily Trinidadian Creole, or an infographic about dengue prevention for a school notice board, AI can help you draft it — but you must review it for cultural sensitivity, clinical accuracy, and appropriate literacy level.",
        },
        {
          type: "text",
          body: "Health literacy is a critical consideration in the Caribbean. Studies indicate that a significant proportion of Caribbean patients have limited health literacy — they may struggle to understand standard medical leaflets written at a university reading level. AI tools can help by rewriting clinical information at different reading levels, but you must verify that simplification does not sacrifice critical safety information.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Step 1: Draft with AI — Use a clear prompt specifying the topic, target audience, reading level, and any cultural considerations",
            "Step 2: Clinical review — Check every clinical fact against authoritative sources (BNF, drug monograph)",
            "Step 3: Cultural review — Ensure language, examples, and recommendations are appropriate for the local context",
            "Step 4: Literacy check — Read aloud. If it sounds complicated when spoken, simplify further",
            "Step 5: Pharmacist approval — Have the supervising pharmacist review before distributing to patients",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Culturally Appropriate Language",
          body: "When creating materials for Caribbean patients, consider using familiar terms alongside medical ones: 'sugar' (diabetes), 'pressure' (hypertension), 'tablets' rather than 'oral medications.' Acknowledge bush medicine respectfully: 'If you are using herbal remedies alongside your medications, please let us know so we can check for interactions.' Never dismiss traditional practices — build trust by respecting them while ensuring safety.",
        },
        {
          type: "key-term",
          term: "Health Literacy",
          definition:
            "The degree to which individuals can obtain, process, and understand basic health information needed to make appropriate health decisions. Low health literacy is linked to poorer health outcomes, more medication errors, and higher hospitalisation rates.",
        },
        {
          type: "case-study",
          title: "Case Study: The Diabetes Handout",
          scenario:
            "You are asked to create a patient handout about metformin for newly diagnosed Type 2 diabetes patients at your pharmacy in Mandeville, Jamaica. Many patients are over 60, some have limited reading ability, and several speak primarily Jamaican Patois. You use Claude to draft the handout, requesting 'a one-page guide to metformin for elderly Jamaican patients, written at a primary school reading level, including when to take it, common side effects, when to call the doctor, and food interactions.' The AI produces a well-structured draft, but includes 'take on an empty stomach' — which contradicts the standard recommendation for metformin (take with food to reduce GI side effects).",
          questions: [
            "What does this error demonstrate about relying on AI for clinical content?",
            "How would you verify the AI output before giving it to patients?",
            "What cultural adaptations would you make for the Jamaican patient population?",
          ],
          discussion:
            "This case demonstrates that AI tools can produce plausible errors in clinical content. Metformin should be taken with or immediately after food to reduce gastrointestinal side effects — the AI's recommendation of 'empty stomach' is incorrect and could cause patients to experience unnecessary nausea and diarrhoea, potentially leading them to stop the medication. The correct workflow: draft with AI, verify every clinical fact against the BNF or drug monograph, adapt language for the local context (include Patois alongside standard English), and get pharmacist sign-off before distribution.",
        },
        {
          type: "knowledge-check",
          question: "What is the most important step after AI generates a patient education handout?",
          options: [
            "Print and distribute it immediately to save time",
            "Post it on social media for wider reach",
            "Verify every clinical fact against authoritative sources and have the pharmacist review it",
            "Translate it into as many languages as possible",
          ],
          correctIndex: 2,
          explanation:
            "Clinical verification and pharmacist review are the most critical steps. AI-generated content can contain errors that appear plausible, and distributing incorrect clinical information to patients is a serious safety risk. Every fact must be verified against authoritative sources before the material reaches patients.",
        },
      ],
    },
    // ── Lesson 4.3 ──
    {
      id: "m4-l3",
      title: "AI Translation & Multilingual Patient Communication",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Bridging Language Barriers with AI",
        },
        {
          type: "text",
          body: "The Caribbean is a linguistically diverse region. Within a single pharmacy in Trinidad, you may serve patients who are most comfortable in English, Trinidadian Creole, Hindi, Spanish, or French Creole. In Jamaica, Jamaican Patois may be a patient's first language. In Barbados, Bajan Dialect is widely spoken. AI translation tools can help bridge these language gaps, but they carry unique risks in a clinical context where mistranslation can be dangerous.",
        },
        {
          type: "table",
          caption: "Language Considerations in Caribbean Pharmacy",
          headers: ["Island/Region", "Official Language", "Common Local Languages", "Pharmacy Implication"],
          rows: [
            [
              "Trinidad & Tobago",
              "English",
              "Trinidadian Creole, Hindi, Spanish",
              "Medication instructions may need Creole simplification; Hindi-speaking patients may need Hindi translation for labels",
            ],
            [
              "Jamaica",
              "English",
              "Jamaican Patois (Patwa)",
              "Patient counselling often more effective in Patois; AI can help draft Patois-friendly explanations",
            ],
            [
              "Barbados",
              "English",
              "Bajan Dialect",
              "Standard English is generally understood but Bajan phrasing improves comprehension for some patients",
            ],
            [
              "Haiti / Haitian diaspora",
              "French, Haitian Creole",
              "Haitian Creole (Kreyol)",
              "Significant Haitian populations across the Caribbean; medication labels in Kreyol may be needed",
            ],
            [
              "Suriname diaspora",
              "Dutch",
              "Sranan Tongo, Javanese, Hindi",
              "Patients from Suriname in Trinidad may need Dutch or Sranan Tongo translation",
            ],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Critical Translation Risk",
          body: "AI translation tools can make errors that are dangerous in clinical contexts. 'Once daily' mistranslated as 'one time' (implying single dose rather than daily) or 'take with food' mistranslated to a Creole phrase meaning 'take instead of food' could cause serious harm. ALWAYS have a bilingual staff member or the pharmacist review AI-translated clinical content. For dosing instructions, use numbers and universal symbols alongside translated text.",
        },
        {
          type: "text",
          body: "AI tools like Google Translate, DeepL, and LLMs like ChatGPT and Claude can handle major world languages well, but their performance with Caribbean Creole languages varies significantly. Jamaican Patois and Trinidadian Creole are increasingly supported, but accuracy for clinical terminology remains inconsistent. The safest approach is to use AI for a first draft, then have a fluent speaker review and correct it.",
        },
        {
          type: "key-term",
          term: "Teach-Back Method",
          definition:
            "A communication technique where the healthcare professional asks the patient to explain, in their own words, what they have been told. This confirms understanding and identifies gaps, regardless of the language used. Example: 'Tell me in your own words how you will take this medication.'",
        },
        {
          type: "knowledge-check",
          question: "What is the safest way to use AI translation for medication instructions in a multilingual Caribbean pharmacy?",
          options: [
            "Use AI translation directly without review — modern AI is accurate enough",
            "Avoid translation entirely and only communicate in English",
            "Use AI for a first draft, then have a bilingual staff member review for accuracy in the target language",
            "Only provide written instructions and avoid verbal counselling",
          ],
          correctIndex: 2,
          explanation:
            "The safest approach is to use AI translation for an initial draft and then have a bilingual staff member review and correct it. AI translation can make errors that are clinically significant, especially with Caribbean Creole languages. Human review ensures safety while still benefiting from AI's speed.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m4-q1",
      question: "What is 'prompt engineering' in the context of using AI tools for pharmacy?",
      options: [
        "Programming the pharmacy's computer systems",
        "Crafting precise, context-rich questions to get accurate and useful AI responses",
        "Engineering pharmaceutical manufacturing processes",
        "Creating automated prescription prompts",
      ],
      correctIndex: 1,
      explanation:
        "Prompt engineering is the practice of crafting precise, context-rich questions for AI systems. In pharmacy, this means including clinical context, patient specifics, and desired output format to get targeted, useful responses rather than vague generalities.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q2",
      question: "After AI generates a patient education handout about a medication, what must happen before it reaches patients?",
      options: [
        "It should be printed and distributed immediately",
        "It should be posted on the pharmacy's social media",
        "Every clinical fact must be verified against authoritative sources and the pharmacist must review it",
        "It only needs to be spell-checked",
      ],
      correctIndex: 2,
      explanation:
        "AI-generated patient education content must be clinically verified against authoritative sources (BNF, Lexicomp, drug monographs) and reviewed by the supervising pharmacist before distribution. AI can produce plausible but incorrect clinical information that could harm patients.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q3",
      question: "Why is AI translation of clinical content particularly risky in Caribbean Creole languages?",
      options: [
        "AI cannot translate any Creole languages at all",
        "Creole languages have no medical terminology",
        "AI accuracy for Caribbean Creole languages varies and clinical mistranslation can be dangerous",
        "Caribbean patients all speak fluent English",
      ],
      correctIndex: 2,
      explanation:
        "AI translation tools have inconsistent accuracy for Caribbean Creole languages, especially for clinical terminology. Mistranslation of dosing instructions or warnings could directly harm patients. Human review by a fluent speaker is essential for any clinical translation.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m4-q4",
      question: "A patient who speaks primarily Jamaican Patois is picking up a new blood pressure medication. What is the best approach to ensure they understand how to take it?",
      options: [
        "Give them the standard English patient information leaflet",
        "Use the teach-back method: explain in accessible language, then ask them to repeat back in their own words how they will take the medication",
        "Write the instructions in formal medical English and assume they will look up unfamiliar words",
        "Tell them to check the internet for dosing information",
      ],
      correctIndex: 1,
      explanation:
        "The teach-back method is the gold standard for confirming patient understanding, especially across language barriers. By asking the patient to explain in their own words how they will take the medication, you can identify and correct any misunderstandings immediately.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q5",
      question: "Which of the following is an example of an effective AI prompt for pharmacy use?",
      options: [
        "'Tell me about drugs'",
        "'List all side effects of every medication'",
        "'I am a pharmacy technician. A patient on Amlodipine 10mg asks about swollen ankles. Explain the cause and what to advise, in patient-friendly language.'",
        "'What is the best medicine?'",
      ],
      correctIndex: 2,
      explanation:
        "The effective prompt specifies the user's role (pharmacy technician), the specific scenario (Amlodipine-related ankle swelling), the information needed (cause and advice), and the desired format (patient-friendly language). This specificity yields targeted, useful AI output.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q6",
      question: "What does 'health literacy' mean and why does it matter for patient education materials?",
      options: [
        "The ability to read medical textbooks; it only matters for medical students",
        "The degree to which individuals can obtain, process, and understand basic health information for appropriate health decisions",
        "How many medications a patient can name; it determines their intelligence",
        "Whether a patient has a university degree; only affects prescribing decisions",
      ],
      correctIndex: 1,
      explanation:
        "Health literacy is the degree to which individuals can obtain, process, and understand basic health information needed for appropriate health decisions. Low health literacy is linked to poorer health outcomes, more medication errors, and higher hospitalisation rates. Patient education materials must match the target audience's literacy level.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q7",
      question: "In creating a patient handout using AI, the tool incorrectly states that Metformin should be taken on an empty stomach. What does this demonstrate?",
      options: [
        "AI tools are always incorrect about drug administration",
        "Metformin dosing is too complex for AI to understand",
        "AI can produce plausible-sounding but clinically incorrect information that must be verified",
        "The AI tool needs to be returned and replaced with a newer version",
      ],
      correctIndex: 2,
      explanation:
        "This demonstrates a core limitation of AI tools: they can generate content that sounds correct and authoritative but contains clinically significant errors. Metformin should be taken with food to reduce GI side effects. This is why every clinical statement in AI-generated content must be verified against authoritative sources.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m4-q8",
      question: "The term 'pressure' is commonly used by Caribbean patients to refer to which condition?",
      options: [
        "Anxiety disorders",
        "Hypertension (high blood pressure)",
        "Respiratory distress",
        "Headache",
      ],
      correctIndex: 1,
      explanation:
        "In Caribbean English, 'pressure' is commonly used to refer to hypertension (high blood pressure), just as 'sugar' refers to diabetes. Using familiar local terms alongside medical terminology improves patient understanding and builds rapport.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 5 — Data Privacy, Security & Caribbean Data Protection
// ============================================================================

const module5: Module = {
  id: "m5-data-privacy-security",
  number: 5,
  title: "Data Privacy, Security & Caribbean Data Protection",
  description:
    "Understand the legal and ethical requirements for protecting patient data in AI-enabled pharmacy settings. Learn about Caribbean data protection legislation, international frameworks, and the practical steps needed to keep patient information safe when using AI tools.",
  learningObjectives: [
    "Explain the key provisions of Caribbean data protection laws relevant to pharmacy (Trinidad Data Protection Act, Jamaica Data Protection Act)",
    "Identify the specific data privacy risks introduced by AI tools in pharmacy practice",
    "Apply data protection principles when using AI chatbots, cloud-based systems, and electronic health records",
    "Design a basic data protection protocol for a Caribbean pharmacy using AI tools",
  ],
  lessons: [
    // ── Lesson 5.1 ──
    {
      id: "m5-l1",
      title: "Caribbean Data Protection Laws: What Pharmacy Technicians Must Know",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Legal Landscape of Patient Data Protection",
        },
        {
          type: "text",
          body: "Patient data is among the most sensitive categories of personal information. When a pharmacy stores a patient's name, address, medical conditions, and medication history, it holds information that could cause serious harm if mishandled — from discrimination to identity theft to social stigma. Caribbean nations have recognised this and have been enacting data protection legislation, though the pace and scope vary significantly across islands.",
        },
        {
          type: "island-comparison",
          title: "Data Protection Legislation Across the Caribbean",
          description:
            "The state of data protection law varies significantly across Caribbean nations, affecting how pharmacies must handle patient data.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "The Data Protection Act (2011, proclaimed in stages) establishes comprehensive data protection rights",
                "An Information Commissioner oversees enforcement",
                "The Act covers collection, processing, storage, and sharing of personal data",
                "Health data is classified as 'sensitive personal data' requiring enhanced protection",
                "Penalties include fines and imprisonment for serious breaches",
                "Pharmacies must register as data controllers and appoint data compliance staff",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "The Data Protection Act (2020) was passed and is being implemented in phases",
                "Establishes an Information Commissioner for enforcement",
                "Covers the processing of personal data by both public and private entities",
                "Health data receives special protection as sensitive personal data",
                "Requires organisations to implement appropriate technical and organisational security measures",
                "Pharmacies handling NHF data must comply with both the Act and NHF data-sharing agreements",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "The Data Protection Act (2019) provides a comprehensive framework",
                "An Information Commissioner has been appointed for oversight",
                "All entities processing personal data must comply with data protection principles",
                "Health data processed by pharmacies and the Drug Service falls under enhanced protection",
                "The compact nature of Barbadian society makes de-identification of data particularly challenging",
                "Cross-border data transfers are regulated, affecting pharmacies using offshore cloud services",
              ],
            },
          ],
        },
        {
          type: "key-term",
          term: "Data Controller",
          definition:
            "The person or organisation that determines the purposes and means of processing personal data. In a pharmacy context, the pharmacy (or its owner/operator) is the data controller for patient records and is legally responsible for how that data is handled.",
        },
        {
          type: "table",
          caption: "Core Data Protection Principles (Common Across Caribbean Legislation)",
          headers: ["Principle", "What It Means", "Pharmacy Example"],
          rows: [
            [
              "Lawful basis",
              "You must have a legal reason to collect and process personal data",
              "Collecting patient medication history for dispensing purposes — lawful. Sharing it with a marketing company — unlawful.",
            ],
            [
              "Purpose limitation",
              "Data collected for one purpose cannot be used for another without consent",
              "Patient data collected for dispensing cannot be used for pharmacy marketing without separate consent",
            ],
            [
              "Data minimisation",
              "Only collect the minimum data necessary for the stated purpose",
              "Asking for a patient's medication history is necessary; asking about their income is not",
            ],
            [
              "Accuracy",
              "Personal data must be accurate and kept up to date",
              "Regularly updating patient allergy records, contact details, and medication lists",
            ],
            [
              "Storage limitation",
              "Data should not be kept longer than necessary",
              "Retaining patient records for the legally required period, then securely destroying them",
            ],
            [
              "Security",
              "Appropriate measures must protect data against unauthorised access, loss, or damage",
              "Password-protected dispensing systems, locked filing cabinets for paper records, encrypted backups",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Small Island Reality",
          body: "In small Caribbean communities, everyone knows everyone. A pharmacy technician may recognise a patient's name and know their family. Data protection is not just about technical systems — it is about the discipline of not discussing patient information outside the pharmacy, not looking up friends' or neighbours' records out of curiosity, and understanding that a breach of confidence in a small community can cause devastating social harm. 'De whole town go know' is not an exaggeration — it is a genuine risk.",
        },
        {
          type: "knowledge-check",
          question: "Under Caribbean data protection legislation, what category does patient medication history fall into?",
          options: [
            "Public information — anyone can access it",
            "General personal data — standard protection applies",
            "Sensitive personal data — enhanced protection required",
            "Anonymous data — no protection needed",
          ],
          correctIndex: 2,
          explanation:
            "Patient medication history is classified as health data, which falls under 'sensitive personal data' in all Caribbean data protection legislation. This requires enhanced protection measures including explicit consent for collection, restricted access, encryption, and strict controls on sharing.",
        },
      ],
    },
    // ── Lesson 5.2 ──
    {
      id: "m5-l2",
      title: "AI-Specific Data Privacy Risks in Pharmacy",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "When AI Meets Patient Data: New Risks Require New Safeguards",
        },
        {
          type: "text",
          body: "AI tools introduce unique data privacy risks that traditional pharmacy systems did not pose. When you type a patient question into ChatGPT, that data may be processed on servers outside the Caribbean, potentially retained for model training, and subject to different jurisdictions' privacy laws. Understanding these risks is essential for compliant, ethical AI use in pharmacy practice.",
        },
        {
          type: "table",
          caption: "AI-Specific Data Privacy Risks",
          headers: ["Risk", "Description", "Example", "Mitigation"],
          rows: [
            [
              "Data leakage to AI providers",
              "Patient information entered into AI chatbots may be stored or used for training",
              "Typing a patient's full name and medication list into ChatGPT",
              "NEVER enter identifiable patient information into public AI tools. Use anonymised queries only.",
            ],
            [
              "Cross-border data transfer",
              "AI services often process data on servers outside the Caribbean",
              "Cloud-based dispensing software storing patient records on US servers",
              "Verify that your AI/cloud providers comply with Caribbean data protection requirements for cross-border transfers",
            ],
            [
              "Data retention by AI",
              "Some AI tools retain conversation history indefinitely",
              "A pharmacy technician's ChatGPT history containing patient-related queries",
              "Use AI tools with data retention controls; turn off history features; use enterprise versions with privacy guarantees",
            ],
            [
              "Re-identification risk",
              "Seemingly anonymised data can be re-identified in small populations",
              "In a community of 5,000 people, '72-year-old female on insulin and warfarin' may be identifiable",
              "Use extra caution with de-identification in small Caribbean communities; remove all demographic details",
            ],
            [
              "Algorithmic inference",
              "AI can infer sensitive information from seemingly innocuous data",
              "An AI system inferring HIV status from a combination of medications and lab values",
              "Be aware that AI can deduce more than you explicitly provide; minimise data input to AI systems",
            ],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "NEVER Do This",
          body: "Never enter a patient's name, date of birth, address, phone number, or any other identifying information into a public AI chatbot (ChatGPT, Claude, Gemini) along with their clinical information. Instead, use anonymised queries: 'A 65-year-old male patient with Type 2 diabetes and CKD Stage 3 is on metformin 1g BD. Is dose adjustment needed?' — no name, no identifying details.",
        },
        {
          type: "key-term",
          term: "De-identification",
          definition:
            "The process of removing or obscuring personal identifiers from data so that the individual can no longer be identified. In small Caribbean communities, effective de-identification requires removing more identifiers than in larger populations, as combinations of age, gender, and condition may be sufficient for identification.",
        },
        {
          type: "text",
          body: "Enterprise-grade AI tools (such as Microsoft Azure OpenAI Service, or pharmacy-specific AI platforms) typically offer stronger privacy protections: data processing agreements, no training on customer data, regional data residency options, and compliance certifications. As Caribbean pharmacies adopt AI, negotiating for these protections should be a priority.",
        },
        {
          type: "knowledge-check",
          question: "A pharmacy technician wants to use ChatGPT to check a drug interaction. Which query is compliant with data protection requirements?",
          options: [
            "'Mrs. Kamla Singh, DOB 15/03/1952, of 22 Ariapita Avenue, takes Warfarin 5mg daily. Can she take Clarithromycin?'",
            "'A 72-year-old female patient on Warfarin 5mg daily has been prescribed Clarithromycin 500mg BD. Is there a significant interaction?'",
            "'Patient ID #TT-2024-9481 at HealthPlus Pharmacy has a Warfarin-Clarithromycin query'",
            "Any query is fine because ChatGPT is secure",
          ],
          correctIndex: 1,
          explanation:
            "Only the second option is compliant — it removes all identifying information (name, date of birth, address, patient ID, pharmacy name) while retaining the clinical details needed for a useful response. Never enter identifiable patient data into public AI tools.",
        },
      ],
    },
    // ── Lesson 5.3 ──
    {
      id: "m5-l3",
      title: "Building a Data Protection Protocol for AI-Enabled Pharmacies",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Practical Data Protection for Your Pharmacy",
        },
        {
          type: "text",
          body: "Knowing the law and understanding the risks is important, but what matters most is translating that knowledge into practical, day-to-day protocols that every member of the pharmacy team follows. This lesson provides a practical framework for building a data protection protocol suited to a Caribbean pharmacy that uses AI tools.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Classify your data: Map every type of patient data your pharmacy collects (names, addresses, medication histories, insurance details) and classify by sensitivity level",
            "Audit your AI tools: List every AI tool and digital system in use. For each, document where data is processed, whether it is retained, and what privacy controls are available",
            "Establish access controls: Implement role-based access — technicians, pharmacists, and managers should have different levels of access to patient data and AI tools",
            "Create a 'clean query' policy: Write a clear policy that no identifiable patient data is to be entered into public AI chatbots. Provide training and examples of compliant vs. non-compliant queries",
            "Implement encryption: Ensure all patient data — at rest and in transit — is encrypted. This includes dispensing databases, backup systems, and any data sent to cloud services",
            "Establish breach response procedures: Document what to do if a data breach occurs — who to notify, how to contain the breach, and how to inform affected patients and the Information Commissioner",
            "Train regularly: Data protection is not a one-time exercise. Conduct quarterly training refreshers for all staff, including scenarios relevant to AI use",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Quick Win: The AI Query Review",
          body: "Post a simple checklist next to every computer where AI tools are accessed: (1) Have I removed the patient's name? (2) Have I removed their date of birth? (3) Have I removed their address and phone number? (4) Have I removed any insurance or ID numbers? (5) Could someone in our community identify this person from the remaining details? If yes to any, revise the query before submitting.",
        },
        {
          type: "key-term",
          term: "Data Breach",
          definition:
            "An incident where personal data is accessed, disclosed, altered, or destroyed without authorisation. In a pharmacy context, this could range from an employee looking up a neighbour's records to a cyberattack on the dispensing system. All Caribbean data protection acts require breach notification to the Information Commissioner and, in some cases, to affected individuals.",
        },
        {
          type: "case-study",
          title: "Case Study: The WhatsApp Prescription Photo",
          scenario:
            "A pharmacy technician at a busy pharmacy in Chaguanas, Trinidad, receives a photo of a prescription via WhatsApp from a patient who cannot visit in person. The technician types the patient's details into ChatGPT to check if the prescribed medication interacts with their current medications, including the patient's full name, age, and complete medication list. The pharmacy manager discovers this during a routine audit of AI tool usage.",
          questions: [
            "What data protection violations occurred in this scenario?",
            "What are the potential consequences under the Trinidad & Tobago Data Protection Act?",
            "How should this query have been handled to be compliant?",
          ],
          discussion:
            "Multiple violations occurred: (1) Receiving prescriptions via WhatsApp without encryption or data processing agreements creates a data transfer risk; (2) Entering identifiable patient data into ChatGPT violates the data minimisation and security principles — the data was transferred to OpenAI's servers, potentially outside Trinidad, with no guarantee of deletion; (3) The combination of name + age + full medication list in a small community like Chaguanas virtually guarantees identifiability. Under the Data Protection Act, this could result in fines and regulatory action. The correct approach: use a pharmacy-approved communication channel for receiving prescriptions, and anonymise all queries to AI tools.",
        },
        {
          type: "knowledge-check",
          question: "Which of the following is the FIRST step in building a data protection protocol for an AI-enabled pharmacy?",
          options: [
            "Purchasing the most expensive encryption software available",
            "Classifying all types of patient data collected and mapping sensitivity levels",
            "Banning all AI tools from the pharmacy",
            "Posting the Data Protection Act on the pharmacy wall",
          ],
          correctIndex: 1,
          explanation:
            "The first step is data classification — you must understand what data you collect, where it lives, and how sensitive it is before you can protect it. This forms the foundation for all subsequent security measures, access controls, and policies.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m5-q1",
      question: "Under Caribbean data protection legislation, health data (including medication records) is classified as what?",
      options: [
        "Public information",
        "General personal data",
        "Sensitive personal data requiring enhanced protection",
        "Anonymised data requiring no protection",
      ],
      correctIndex: 2,
      explanation:
        "Health data, including patient medication records, is classified as 'sensitive personal data' under Caribbean data protection acts. This requires enhanced protection measures including explicit consent, restricted access, encryption, and strict controls on sharing.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q2",
      question: "Why is de-identification of patient data particularly challenging in small Caribbean communities?",
      options: [
        "Caribbean data protection laws do not allow de-identification",
        "In small populations, combinations of age, gender, and condition may be sufficient to identify individuals",
        "Caribbean patients refuse to allow their data to be de-identified",
        "De-identification technology is not available in the Caribbean",
      ],
      correctIndex: 1,
      explanation:
        "In small Caribbean communities, where 'everybody knows everybody,' even seemingly anonymised data can be re-identified. A description like '72-year-old female on insulin and warfarin' might identify only a handful of people — or only one — in a small town. Extra identifiers must be removed compared to larger populations.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m5-q3",
      question: "A pharmacy technician enters 'Mrs. Jones, 68, diabetic, on metformin and glipizide, can she take ibuprofen?' into ChatGPT. What is wrong with this query?",
      options: [
        "Nothing — ChatGPT is a secure platform",
        "The clinical question itself is inappropriate for AI",
        "The query includes identifiable patient information (name, age, conditions) entered into a public AI tool",
        "Ibuprofen does not interact with diabetes medications",
      ],
      correctIndex: 2,
      explanation:
        "The query includes the patient's name, age, and medical conditions — identifiable personal data — entered into a public AI tool. This violates data protection principles as the data may be stored on external servers, used for training, and is subject to different jurisdictions' laws. The correct approach: remove the name and use only anonymised clinical details.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q4",
      question: "Which Caribbean country proclaimed its Data Protection Act in 2011 with staged implementation?",
      options: [
        "Jamaica",
        "Barbados",
        "Trinidad & Tobago",
        "Guyana",
      ],
      correctIndex: 2,
      explanation:
        "Trinidad & Tobago's Data Protection Act was passed in 2011 and has been proclaimed in stages. It establishes comprehensive data protection rights, an Information Commissioner for enforcement, and classifies health data as sensitive personal data requiring enhanced protection.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q5",
      question: "What is a 'data controller' in the context of pharmacy data protection?",
      options: [
        "The computer system that stores patient data",
        "The person or organisation that determines the purposes and means of processing personal data",
        "A government agency that controls all health data",
        "The software company that built the dispensing system",
      ],
      correctIndex: 1,
      explanation:
        "A data controller is the person or organisation that determines the purposes and means of processing personal data. In a pharmacy context, the pharmacy (or its owner/operator) is the data controller for patient records and is legally responsible for how that data is handled.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q6",
      question: "Which of the following are appropriate components of a pharmacy data protection protocol? Select ALL that apply.",
      questionType: "multiple_select",
      options: [
        "Classify all patient data by sensitivity level",
        "Audit all AI tools for data processing and retention practices",
        "Allow all staff unrestricted access to all patient records",
        "Establish a 'clean query' policy for AI chatbot use",
        "Conduct quarterly data protection training for all staff",
      ],
      correctIndex: 0,
      explanation:
        "Data classification, AI tool auditing, clean query policies, and regular staff training are all essential components of a pharmacy data protection protocol. Unrestricted staff access is the opposite of good data protection — access should be role-based and limited to what is needed for each person's duties.",
      questionData: {
        correct_indices: [0, 1, 3, 4],
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q7",
      question: "A pharmacy receives prescriptions via WhatsApp. What data protection concern does this raise?",
      options: [
        "No concern — WhatsApp is end-to-end encrypted",
        "WhatsApp is not a pharmacy-approved communication channel and transfers sensitive health data through a commercial platform without appropriate data processing agreements",
        "WhatsApp only works in certain Caribbean countries",
        "The concern is only about cost, not data protection",
      ],
      correctIndex: 1,
      explanation:
        "While WhatsApp uses end-to-end encryption, receiving prescriptions through it raises multiple data protection concerns: no formal data processing agreement with Meta/WhatsApp, data may be stored on the technician's personal device, no audit trail, and no guarantee of compliance with Caribbean data protection requirements. Pharmacies should use approved, auditable communication channels.",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m5-q8",
      question: "What should happen immediately if a pharmacy discovers a data breach involving patient records?",
      options: [
        "Ignore it and hope no one notices",
        "Delete all evidence of the breach",
        "Contain the breach, notify the Information Commissioner, inform affected patients, and document everything",
        "Only notify patients if they ask about it",
      ],
      correctIndex: 2,
      explanation:
        "Caribbean data protection acts require prompt action on data breaches: contain the breach to prevent further exposure, notify the Information Commissioner, inform affected patients (especially if there is risk of harm), and thoroughly document the incident and response. Attempting to hide a breach can result in additional penalties.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 6 — Ethical Considerations: Bias, Transparency & Human-AI Partnership
// ============================================================================

const module6: Module = {
  id: "m6-ethics-bias-transparency",
  number: 6,
  title: "Ethical Considerations: Bias, Transparency & Human-AI Partnership",
  description:
    "Examine the ethical dimensions of AI in pharmacy, with particular focus on how AI bias can affect Caribbean populations, the importance of algorithmic transparency, and how to maintain a productive human-AI partnership where technology augments — but never replaces — professional judgement.",
  learningObjectives: [
    "Explain how AI bias can arise from training data and affect healthcare outcomes for Caribbean populations",
    "Evaluate AI tools for transparency and identify situations where lack of explainability poses clinical risks",
    "Articulate the ethical principles governing human-AI partnership in pharmacy practice",
  ],
  lessons: [
    // ── Lesson 6.1 ──
    {
      id: "m6-l1",
      title: "AI Bias in Healthcare: Why Caribbean Populations Are at Risk",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "When AI Learns the Wrong Lessons",
        },
        {
          type: "text",
          body: "AI systems learn from data, and data reflects the world that created it — including its biases. If an AI system is trained primarily on data from North American and European populations, it may not perform well for Caribbean patients who have different genetic profiles, disease prevalence patterns, dietary habits, and medication responses. This is not a theoretical concern — it is a documented, measurable problem that directly affects patient care.",
        },
        {
          type: "key-term",
          term: "Algorithmic Bias",
          definition:
            "Systematic errors in AI outputs that arise from biased assumptions in the training data, algorithm design, or development process. In healthcare AI, bias can lead to diagnostic errors, inappropriate treatment recommendations, or unequal quality of care for underrepresented populations.",
        },
        {
          type: "table",
          caption: "Examples of AI Bias Relevant to Caribbean Healthcare",
          headers: ["Bias Type", "Example", "Caribbean Impact"],
          rows: [
            [
              "Training data bias",
              "AI dosing algorithms trained predominantly on Caucasian patients",
              "May recommend incorrect doses for Afro-Caribbean patients with different genetic polymorphisms affecting drug metabolism (e.g., CYP2D6 variants)",
            ],
            [
              "Representation bias",
              "Clinical trial data predominantly from developed countries",
              "Tropical disease presentations, herbal-drug interactions with Caribbean bush medicines, and multi-morbidity patterns common in the Caribbean may not be captured",
            ],
            [
              "Measurement bias",
              "Pulse oximeters less accurate on darker skin tones",
              "AI systems using pulse oximetry data may underestimate hypoxia in Afro-Caribbean patients, as documented in multiple studies",
            ],
            [
              "Label bias",
              "AI trained on data where certain populations received different levels of care",
              "Historical healthcare disparities become embedded in AI predictions, perpetuating rather than reducing inequality",
            ],
            [
              "Language bias",
              "NLP models trained primarily on American/British English",
              "May misinterpret Caribbean English, Creole terms for symptoms, or local medication names",
            ],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "The CYP2D6 Problem",
          body: "Approximately 29% of people of African descent are CYP2D6 ultra-rapid metabolisers (compared to ~1-2% of Caucasians). This means they metabolise certain drugs (codeine, tramadol, some antidepressants) much faster, potentially reducing efficacy or — in the case of codeine — increasing risk of toxicity through rapid conversion to morphine. AI dosing tools trained on predominantly Caucasian data may not flag this. Caribbean pharmacy technicians must be aware that AI recommendations may not account for the genetic diversity of their patient population.",
        },
        {
          type: "text",
          body: "The Caribbean's diverse genetic heritage — African, Indian, European, Chinese, Indigenous, and the many combinations thereof — means that one-size-fits-all AI tools will inevitably underserve some patients. This is not a reason to reject AI, but a reason to use it critically and to advocate for AI tools that are validated on diverse populations.",
        },
        {
          type: "knowledge-check",
          question: "Why might an AI dosing algorithm trained primarily on Caucasian patients give inappropriate recommendations for Afro-Caribbean patients?",
          options: [
            "Afro-Caribbean patients do not need medication dosing",
            "Genetic differences in drug metabolism enzymes (e.g., CYP2D6 variants) can significantly affect how drugs are processed",
            "AI algorithms cannot calculate doses for any population",
            "All populations metabolise drugs identically",
          ],
          correctIndex: 1,
          explanation:
            "Genetic polymorphisms in drug metabolism enzymes like CYP2D6 are more common in certain populations. Approximately 29% of people of African descent are CYP2D6 ultra-rapid metabolisers, which significantly affects the metabolism of many common drugs. AI tools trained on populations where this variant is rare may not account for it.",
        },
      ],
    },
    // ── Lesson 6.2 ──
    {
      id: "m6-l2",
      title: "Transparency & Explainability: Can You Trust What You Cannot Understand?",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Black Box Problem in Pharmacy AI",
        },
        {
          type: "text",
          body: "When your dispensing software flags a drug interaction, you can usually see exactly why: Drug A interacts with Drug B through Mechanism X. This is explainable AI — you can trace the reasoning. But many modern AI systems, particularly deep learning models, are 'black boxes': they produce outputs without being able to explain how they arrived at them. In pharmacy, where every decision affects patient safety, this lack of transparency is a serious concern.",
        },
        {
          type: "key-term",
          term: "Explainable AI (XAI)",
          definition:
            "AI systems designed to provide human-understandable explanations for their outputs and decisions. In healthcare, explainability is crucial because clinicians need to understand why an AI recommends a particular action in order to assess its validity and accept or reject it.",
        },
        {
          type: "text",
          body: "Consider two scenarios: (1) Your DIS flags Warfarin + Clarithromycin and explains: 'Clarithromycin inhibits CYP3A4, increasing Warfarin plasma levels and INR. Risk of haemorrhage.' You can evaluate this reasoning. (2) An AI system recommends changing a patient's antihypertensive but says only: 'Recommendation confidence: 78%.' You cannot evaluate the reasoning because there is none visible. Which recommendation would you — or the pharmacist — feel comfortable acting on?",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Always prefer AI tools that explain their reasoning, especially for clinical decisions",
            "If an AI tool cannot explain why it flagged or recommended something, treat its output with extra scepticism",
            "Discuss unexplained AI recommendations with the pharmacist before acting on them",
            "When evaluating new AI tools for your pharmacy, 'explainability' should be a key selection criterion",
            "Document when you follow or override AI recommendations, including your reasoning",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Regulatory Direction",
          body: "Globally, regulators are moving toward requiring explainability in healthcare AI. The EU AI Act (2024) classifies healthcare AI as 'high-risk' and mandates transparency requirements. While Caribbean nations have not yet enacted AI-specific legislation, the trend toward requiring explainability in clinical AI tools is clear. Pharmacy technicians who understand this principle now will be prepared for future regulatory requirements.",
        },
        {
          type: "knowledge-check",
          question: "Why is 'explainability' important in AI tools used for clinical pharmacy decisions?",
          options: [
            "It makes the AI run faster",
            "It allows clinicians to evaluate the reasoning behind AI recommendations and determine whether to act on them",
            "It is only important for marketing purposes",
            "Explainability has no relevance to pharmacy practice",
          ],
          correctIndex: 1,
          explanation:
            "Explainability allows pharmacy professionals to evaluate the reasoning behind AI recommendations — understanding why an AI suggests something is essential for determining whether the recommendation is appropriate for a specific patient. Without explainability, clinicians must either blindly trust or blindly reject AI outputs.",
        },
      ],
    },
    // ── Lesson 6.3 ──
    {
      id: "m6-l3",
      title: "Human-AI Partnership: Drawing the Line",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The AI Partnership Model for Pharmacy",
        },
        {
          type: "text",
          body: "The most productive relationship between pharmacy professionals and AI is a partnership where each contributes what they do best. AI excels at processing large amounts of data quickly, identifying patterns, performing calculations, and maintaining consistency. Humans excel at contextual judgement, empathy, ethical reasoning, cultural sensitivity, and handling novel situations. The goal is not to replace one with the other but to combine them effectively.",
        },
        {
          type: "table",
          caption: "AI vs. Human Strengths in Pharmacy Practice",
          headers: ["Task", "AI Strength", "Human Strength", "Best Approach"],
          rows: [
            [
              "Drug interaction checking",
              "Checks thousands of interactions instantly against comprehensive databases",
              "Understands patient context, assesses clinical significance",
              "AI screens all interactions; human assesses flagged ones for clinical relevance",
            ],
            [
              "Dosage calculations",
              "Performs complex calculations without arithmetic errors",
              "Verifies reasonableness; considers patient-specific factors",
              "AI calculates; human verifies the result makes clinical sense",
            ],
            [
              "Patient counselling",
              "Can generate consistent, accurate drug information",
              "Reads body language, adjusts communication, shows empathy, understands cultural context",
              "AI helps prepare information; human delivers it with empathy and cultural sensitivity",
            ],
            [
              "Inventory ordering",
              "Analyses demand patterns, forecasts needs",
              "Knows local community factors AI cannot see",
              "AI recommends order quantities; human adjusts based on local knowledge",
            ],
            [
              "Error detection",
              "Never gets tired or distracted; consistent checking",
              "Can spot errors that fall outside AI's training (unusual circumstances)",
              "AI provides continuous monitoring; human provides judgement for edge cases",
            ],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Caribbean Human Touch",
          body: "In Caribbean pharmacy culture, the relationship between the pharmacy team and patients is deeply personal. Patients expect to be greeted by name, asked about their family, and treated as whole people — not transaction numbers. No AI can replicate this. The human-AI partnership in Caribbean pharmacy must preserve and enhance this personal connection, not replace it. Use AI for the technical work behind the counter so you have more time and energy for the human work at the counter.",
        },
        {
          type: "text",
          body: "The ethical line is clear: AI informs, humans decide. In any clinical situation, the final decision must rest with a qualified human professional — the pharmacist for clinical decisions, the technician for technical processes within their scope. An AI recommendation is an input to the decision, never the decision itself. This principle must be maintained regardless of how accurate AI becomes, because accountability for patient outcomes must remain with identifiable human professionals.",
        },
        {
          type: "key-term",
          term: "Human-in-the-Loop (HITL)",
          definition:
            "A model of AI deployment where human professionals remain actively involved in the decision-making process rather than deferring entirely to AI. In pharmacy, this means AI assists with information gathering and analysis, but qualified humans make and are accountable for clinical decisions.",
        },
        {
          type: "knowledge-check",
          question: "In the human-AI partnership model for pharmacy, who holds final accountability for clinical decisions?",
          options: [
            "The AI system",
            "The software vendor",
            "The qualified human professional (pharmacist or technician within scope)",
            "Accountability is shared equally between AI and human",
          ],
          correctIndex: 2,
          explanation:
            "In the human-AI partnership model, the qualified human professional always holds final accountability for clinical decisions. AI provides information and recommendations, but the decision to act — and the responsibility for patient outcomes — rests with the pharmacist (for clinical decisions) or the technician (for technical processes within their scope).",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m6-q1",
      question: "What is algorithmic bias in the context of healthcare AI?",
      options: [
        "When an AI system runs too slowly",
        "Systematic errors in AI outputs arising from biased training data or design that can lead to unequal care",
        "When a pharmacist disagrees with an AI recommendation",
        "A deliberate feature that makes AI prefer certain drugs over others",
      ],
      correctIndex: 1,
      explanation:
        "Algorithmic bias refers to systematic errors in AI outputs that arise from biased assumptions in training data, algorithm design, or development processes. In healthcare, this can lead to diagnostic errors, inappropriate treatment recommendations, or unequal quality of care for underrepresented populations.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q2",
      question: "Approximately what percentage of people of African descent are CYP2D6 ultra-rapid metabolisers?",
      options: [
        "1-2%",
        "5-10%",
        "29%",
        "75%",
      ],
      correctIndex: 2,
      explanation:
        "Approximately 29% of people of African descent are CYP2D6 ultra-rapid metabolisers, compared to only 1-2% of Caucasians. This has significant implications for the metabolism of drugs like codeine, tramadol, and some antidepressants, and means AI dosing tools trained on predominantly Caucasian data may give inappropriate recommendations.",
      difficulty: "hard",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q3",
      question: "What does 'Explainable AI' (XAI) mean?",
      options: [
        "AI that is easy to install and use",
        "AI systems that provide human-understandable explanations for their outputs and decisions",
        "AI that explains human behaviour",
        "AI that only works when explained by a technician",
      ],
      correctIndex: 1,
      explanation:
        "Explainable AI (XAI) refers to AI systems designed to provide human-understandable explanations for their outputs and decisions. In healthcare, this is crucial because clinicians need to understand why an AI recommends a particular action to assess its validity for a specific patient.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q4",
      question: "In the Human-in-the-Loop (HITL) model, what is the role of AI?",
      options: [
        "AI makes all clinical decisions independently",
        "AI provides information and recommendations while humans make and are accountable for final decisions",
        "AI is not used at all — humans do everything",
        "AI and humans alternate making decisions",
      ],
      correctIndex: 1,
      explanation:
        "In the HITL model, AI provides information, analysis, and recommendations, but qualified human professionals remain in the decision loop, making final decisions and bearing accountability for patient outcomes. This ensures that human judgement, contextual understanding, and ethical reasoning are always part of clinical decisions.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q5",
      question: "Why might pulse oximeters integrated into AI monitoring systems underserve Afro-Caribbean patients?",
      options: [
        "Pulse oximeters do not work in tropical climates",
        "Afro-Caribbean patients do not need oxygen monitoring",
        "Pulse oximeters have been documented to be less accurate on darker skin tones, potentially underestimating hypoxia",
        "Pulse oximeters are not available in the Caribbean",
      ],
      correctIndex: 2,
      explanation:
        "Multiple studies have documented that pulse oximeters can be less accurate on darker skin tones, potentially overestimating oxygen levels (underestimating hypoxia). When this biased data feeds into AI monitoring systems, the AI may fail to alert clinicians to dangerous oxygen levels in Afro-Caribbean patients.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m6-q6",
      question: "An AI tool recommends changing a patient's medication but cannot explain why. What should the pharmacy technician do?",
      options: [
        "Follow the recommendation — AI is always correct",
        "Ignore all AI recommendations permanently",
        "Treat the recommendation with extra scepticism, discuss with the pharmacist, and investigate the reasoning manually",
        "Report the AI vendor to the police",
      ],
      correctIndex: 2,
      explanation:
        "When an AI tool cannot explain its reasoning, its output should be treated with extra scepticism. The technician should discuss the recommendation with the pharmacist and investigate the clinical reasoning manually using authoritative sources. Unexplainable recommendations should never be acted upon without independent clinical verification.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m6-q7",
      question: "Which statement best describes the ideal human-AI relationship in Caribbean pharmacy practice?",
      options: [
        "AI should replace pharmacy technicians to reduce costs",
        "AI handles technical processing so pharmacy staff have more time for the personal, human elements of patient care",
        "Pharmacy staff should refuse to use any AI tools",
        "AI should interact directly with patients without staff involvement",
      ],
      correctIndex: 1,
      explanation:
        "The ideal human-AI partnership in Caribbean pharmacy uses AI for technical tasks (data processing, interaction checking, inventory forecasting) so pharmacy staff can dedicate more time and energy to the personal, culturally sensitive, human-centred aspects of patient care that Caribbean patients expect and deserve.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m6-q8",
      question: "Which types of AI bias are particularly relevant to Caribbean patient populations? Select ALL that apply.",
      questionType: "multiple_select",
      options: [
        "Training data bias from predominantly Caucasian clinical trials",
        "Measurement bias in devices less accurate on darker skin tones",
        "Language bias in NLP models trained on American/British English",
        "Representation bias missing tropical disease presentations",
        "Colour bias in pharmacy interior design",
      ],
      correctIndex: 0,
      explanation:
        "Training data bias, measurement bias (e.g., pulse oximeters), language bias (Caribbean English and Creole), and representation bias (missing tropical diseases) are all directly relevant to Caribbean patient populations. Interior design colour preferences have no relevance to AI bias in healthcare.",
      questionData: {
        correct_indices: [0, 1, 2, 3],
      },
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
  ],
};

// ============================================================================
// MODULE 7 — Evaluating & Implementing AI Tools in Your Pharmacy
// ============================================================================

const module7: Module = {
  id: "m7-evaluating-implementing-ai",
  number: 7,
  title: "Evaluating & Implementing AI Tools in Your Pharmacy",
  description:
    "Learn a systematic approach to evaluating, selecting, and implementing AI tools in a Caribbean pharmacy setting. From vendor assessment to pilot testing to full deployment, this module gives you the practical framework to make informed technology decisions.",
  learningObjectives: [
    "Apply a structured evaluation framework to assess AI tools for pharmacy suitability",
    "Identify key vendor evaluation criteria specific to Caribbean pharmacy operations",
    "Design a pilot testing plan for a new AI tool in a pharmacy setting",
  ],
  lessons: [
    // ── Lesson 7.1 ──
    {
      id: "m7-l1",
      title: "The AI Tool Evaluation Framework",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "A Systematic Approach to AI Tool Selection",
        },
        {
          type: "text",
          body: "The market is flooded with AI tools claiming to transform pharmacy practice. How do you separate genuine value from marketing hype? You need a structured evaluation framework that considers clinical safety, operational fit, regulatory compliance, cost, and Caribbean-specific factors. This lesson provides that framework.",
        },
        {
          type: "table",
          caption: "AI Tool Evaluation Criteria for Caribbean Pharmacies",
          headers: ["Criterion", "Key Questions", "Weight"],
          rows: [
            [
              "Clinical Safety",
              "Is the tool validated for clinical use? What is the error rate? Is there clinical evidence supporting its claims? Does it explain its reasoning?",
              "Critical — any tool that cannot demonstrate clinical safety is disqualified",
            ],
            [
              "Data Privacy & Security",
              "Where is data processed? Is there a data processing agreement? Does it comply with Caribbean data protection acts? Can patient data be kept within the Caribbean?",
              "Critical — non-compliance is a legal risk",
            ],
            [
              "Caribbean Suitability",
              "Was it trained on or validated with Caribbean population data? Does it understand Caribbean drug names, formularies, and prescribing patterns? Does it support Caribbean English?",
              "High — tools designed for North American markets may not fit Caribbean practice",
            ],
            [
              "Integration",
              "Does it integrate with your existing dispensing software? Does it work with your internet connectivity (often unreliable in the Caribbean)? Is there an offline mode?",
              "High — a tool that does not integrate creates workflow friction",
            ],
            [
              "Cost & ROI",
              "What is the total cost of ownership (licence + training + implementation)? What is the expected return (time saved, errors prevented, revenue gained)?",
              "Medium — cost matters but should not override safety considerations",
            ],
            [
              "Vendor Reliability",
              "How long has the vendor been in business? Do they have Caribbean customers? What is their support response time for Caribbean time zones?",
              "Medium — vendor stability affects long-term viability",
            ],
            [
              "User Experience",
              "Is the interface intuitive? Can your staff learn it quickly? Is training provided?",
              "Medium — the best tool is worthless if your team cannot use it",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Caribbean Connectivity Factor",
          body: "Many AI tools require reliable, high-speed internet to function. In parts of the Caribbean, internet connectivity is intermittent, slow, or expensive. Any AI tool evaluation must include: (1) Can it work offline or with limited connectivity? (2) What happens to patient safety if the tool goes down? (3) Is there a manual fallback process? A tool that stops working during a power outage or internet disruption in hurricane season is a liability, not an asset.",
        },
        {
          type: "key-term",
          term: "Total Cost of Ownership (TCO)",
          definition:
            "The complete cost of a technology tool over its lifetime, including not just the purchase or subscription price, but also implementation, training, integration, maintenance, support, and eventual decommissioning costs. TCO often reveals that the cheapest option upfront is the most expensive in the long run.",
        },
        {
          type: "knowledge-check",
          question: "Which evaluation criterion should be treated as an absolute disqualifier for AI tools in pharmacy?",
          options: [
            "Cost exceeding a set budget",
            "Lack of clinical safety validation",
            "The tool not having a mobile app",
            "The vendor being based outside the Caribbean",
          ],
          correctIndex: 1,
          explanation:
            "Clinical safety is the one criterion that should be treated as an absolute disqualifier. A tool that cannot demonstrate clinical safety — regardless of how impressive its other features are — cannot be used in a setting where errors can harm patients. Cost, mobile availability, and vendor location are important but not disqualifying on their own.",
        },
      ],
    },
    // ── Lesson 7.2 ──
    {
      id: "m7-l2",
      title: "Vendor Assessment & Caribbean-Specific Due Diligence",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Asking the Right Questions Before You Buy",
        },
        {
          type: "text",
          body: "Before committing to an AI tool, you need to conduct thorough vendor due diligence. This is particularly important in the Caribbean, where some vendors may not understand the unique operational, regulatory, and cultural context of island pharmacies. The following checklist will help you assess vendors systematically.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Request a Caribbean-specific demo: Ask the vendor to demonstrate the tool using Caribbean drug names, formularies, and prescribing patterns — not just US or UK examples",
            "Ask about training data: 'Was this tool trained on or validated with data from Caribbean populations?' If the answer is vague, that is a red flag",
            "Verify data residency: 'Where will our patient data be processed and stored? Can we keep data within the Caribbean or at minimum within a jurisdiction with adequate data protection laws?'",
            "Check connectivity requirements: 'What happens when our internet goes down? Is there an offline mode? How long can the system operate without connectivity?'",
            "Review the SLA (Service Level Agreement): 'What is your guaranteed uptime? What are the support hours and response times for Caribbean time zones?'",
            "Request customer references: 'Do you have existing Caribbean pharmacy customers we can speak with? If not, do you have customers in similar small-market settings?'",
            "Understand the exit strategy: 'If we decide to switch vendors, can we export our data? In what format? What is the transition timeline?'",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Vendor Red Flags",
          body: "Be cautious of vendors who: cannot provide clinical validation data; claim 100% accuracy (no AI tool is 100% accurate); cannot explain where patient data is processed; have no Caribbean customers or references; require long-term lock-in contracts with no exit clause; cannot demonstrate an offline fallback mode; dismiss Caribbean-specific concerns as irrelevant.",
        },
        {
          type: "key-term",
          term: "Service Level Agreement (SLA)",
          definition:
            "A contract between a service provider and customer that defines the level of service expected, including uptime guarantees, response times, and remedies if the service falls short. For pharmacy AI tools, the SLA should specify support availability during Caribbean business hours and acceptable downtime limits.",
        },
        {
          type: "knowledge-check",
          question: "Why is it important to ask an AI vendor about 'data residency'?",
          options: [
            "To ensure the software runs faster",
            "To verify where patient data is processed and stored, ensuring compliance with Caribbean data protection laws",
            "To get a lower price based on location",
            "Data residency has no relevance to pharmacy AI tools",
          ],
          correctIndex: 1,
          explanation:
            "Data residency — where patient data is physically processed and stored — directly affects compliance with Caribbean data protection legislation. Cross-border data transfers are regulated under these laws, and pharmacies must ensure their data is processed in jurisdictions with adequate privacy protections.",
        },
      ],
    },
    // ── Lesson 7.3 ──
    {
      id: "m7-l3",
      title: "Pilot Testing & Phased Implementation",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Start Small, Learn Fast, Scale Carefully",
        },
        {
          type: "text",
          body: "Even after thorough evaluation and vendor assessment, the only way to truly know if an AI tool works for your pharmacy is to test it in your real-world environment. A structured pilot test allows you to assess the tool's performance, identify issues, and build staff confidence before committing to full deployment. This is especially important in the Caribbean, where the consequences of a failed technology implementation can be severe for a small business operating on tight margins.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Phase 1 — Preparation (2 weeks): Define success criteria, train pilot users, set up the tool alongside (not replacing) existing systems, establish data collection methods for the pilot",
            "Phase 2 — Shadow mode (4 weeks): Run the AI tool in parallel with existing processes. Compare AI outputs to human decisions. Track accuracy, false positives, and false negatives. Document all discrepancies",
            "Phase 3 — Supervised live use (4 weeks): Begin using AI outputs for actual decisions, but with enhanced pharmacist oversight. Monitor closely for errors. Collect staff feedback on usability and workflow impact",
            "Phase 4 — Assessment & decision (2 weeks): Analyse pilot data against success criteria. Make a go/no-go decision for full deployment. If going ahead, plan the rollout; if not, document lessons learned",
            "Phase 5 — Full deployment (ongoing): Roll out to all staff/locations. Continue monitoring performance. Schedule quarterly reviews to ensure the tool continues to meet expectations",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Shadow Mode Secret",
          body: "Shadow mode — running the AI tool alongside your existing process without relying on it — is the most valuable phase of the pilot. It reveals the tool's real-world performance without any risk to patient safety. If the AI disagrees with your existing process, investigate why. Sometimes the AI is wrong; sometimes it catches something your existing process missed. Both findings are valuable.",
        },
        {
          type: "case-study",
          title: "Case Study: AI Inventory Pilot in a Barbadian Pharmacy",
          scenario:
            "Paradise Pharmacy in Bridgetown, Barbados, piloted an AI-powered inventory forecasting tool over 12 weeks. During shadow mode, the tool correctly predicted a demand spike for paracetamol during a chikungunya outbreak two weeks before it became obvious from sales data alone. However, it also recommended reducing stock of hydrocortisone cream — a product the pharmacy knew sold heavily in summer but the AI had insufficient historical data to recognise (the pharmacy had only been open 18 months). The pharmacist overrode the AI recommendation for hydrocortisone and maintained stock, which proved correct when summer sales surged.",
          questions: [
            "What does this case reveal about the strengths and limitations of AI inventory tools?",
            "Why was the shadow mode phase critical for identifying the hydrocortisone issue?",
            "How should a pharmacy handle situations where local knowledge contradicts AI recommendations?",
          ],
          discussion:
            "This case demonstrates both AI's strength (detecting demand patterns from external data before they appear in sales) and its limitation (insufficient historical data leading to incorrect recommendations). The shadow mode phase was essential because it revealed the hydrocortisone issue before it could cause a stock-out. The correct approach: trust AI for pattern detection, but always overlay local knowledge and professional judgement. Document overrides and their outcomes to improve future AI performance.",
        },
        {
          type: "knowledge-check",
          question: "What is the primary purpose of the 'shadow mode' phase in AI tool pilot testing?",
          options: [
            "To hide the AI tool from staff so they are not biased",
            "To run the AI alongside existing processes to assess its real-world performance without patient safety risk",
            "To use the AI tool only at night when the pharmacy is closed",
            "To test the tool on fake patient data only",
          ],
          correctIndex: 1,
          explanation:
            "Shadow mode runs the AI tool in parallel with existing processes, comparing AI outputs to human decisions without relying on the AI for actual patient care. This reveals real-world performance, identifies discrepancies, and builds staff confidence — all without any risk to patient safety.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m7-q1",
      question: "Which criterion should serve as an absolute disqualifier when evaluating AI tools for pharmacy use?",
      options: [
        "High cost",
        "Lack of mobile app support",
        "Inability to demonstrate clinical safety validation",
        "Vendor located outside the Caribbean",
      ],
      correctIndex: 2,
      explanation:
        "Clinical safety is non-negotiable. An AI tool that cannot demonstrate clinical safety validation — regardless of its cost, features, or vendor location — must be disqualified for pharmacy use where errors can directly harm patients.",
      difficulty: "easy",
      bloomsLevel: "evaluate",
    },
    {
      id: "m7-q2",
      question: "Why is offline functionality particularly important for AI tools in Caribbean pharmacies?",
      options: [
        "Caribbean pharmacies never have internet access",
        "Internet connectivity can be intermittent, especially during hurricane season, and patient safety must not depend on connectivity",
        "Offline mode is cheaper",
        "Patients prefer pharmacies without internet",
      ],
      correctIndex: 1,
      explanation:
        "Caribbean pharmacies face intermittent internet connectivity due to infrastructure limitations and natural disasters (hurricane season). An AI tool that stops functioning during connectivity loss can compromise patient safety. Offline fallback capability ensures continuity of care.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m7-q3",
      question: "What is the correct sequence of phases in an AI tool pilot implementation?",
      questionType: "ordering",
      options: [
        "Preparation — define success criteria and train pilot users",
        "Shadow mode — run AI in parallel with existing processes",
        "Supervised live use — use AI outputs with enhanced oversight",
        "Assessment — analyse pilot data and make go/no-go decision",
        "Full deployment — roll out to all staff with ongoing monitoring",
      ],
      correctIndex: 0,
      explanation:
        "The correct pilot sequence is: Preparation, Shadow Mode, Supervised Live Use, Assessment, and Full Deployment. Each phase builds on the previous, gradually increasing reliance on the AI tool while maintaining safety checks and gathering evidence for the deployment decision.",
      questionData: {
        correct_order: [0, 1, 2, 3, 4],
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m7-q4",
      question: "A vendor claims their pharmacy AI tool is '100% accurate.' What should this claim tell you?",
      options: [
        "The tool is excellent and should be purchased immediately",
        "The claim is a red flag — no AI tool is 100% accurate, and this suggests the vendor is not being transparent",
        "The tool uses the latest technology and is likely superior to competitors",
        "The claim is probably correct for well-established AI tools",
      ],
      correctIndex: 1,
      explanation:
        "No AI tool achieves 100% accuracy. A vendor making this claim is either uninformed about their own product or being deliberately misleading — both are red flags. Trustworthy vendors provide honest accuracy metrics, including error rates and confidence intervals.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m7-q5",
      question: "What does 'Total Cost of Ownership' (TCO) include that the purchase price alone does not?",
      options: [
        "Only the initial subscription fee",
        "Implementation, training, integration, maintenance, support, and decommissioning costs over the tool's lifetime",
        "The cost of the internet connection",
        "The salary of the pharmacy technician using the tool",
      ],
      correctIndex: 1,
      explanation:
        "TCO encompasses all costs over the tool's lifetime: initial purchase/subscription, implementation, staff training, integration with existing systems, ongoing maintenance, vendor support, and eventual decommissioning. Evaluating only the purchase price can lead to significantly underestimating the true cost.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q6",
      question: "During a shadow mode pilot, the AI inventory tool recommends reducing stock of a product that the pharmacy knows sells heavily in summer. The AI has only 18 months of data. What should the pharmacy do?",
      options: [
        "Follow the AI recommendation — it is data-driven",
        "Override the AI recommendation based on local knowledge, document the override, and monitor the outcome",
        "Shut down the AI tool immediately",
        "Order double the AI recommendation to compensate",
      ],
      correctIndex: 1,
      explanation:
        "When local knowledge contradicts an AI recommendation — especially when the AI has insufficient historical data — the correct approach is to override the recommendation, document the override and reasoning, and monitor the outcome. This both protects patient care and provides data that can improve the AI's future performance.",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m7-q7",
      question: "When asking a vendor for a demonstration, what should you specifically request?",
      options: [
        "A demo using generic US pharmacy examples",
        "A Caribbean-specific demo using local drug names, formularies, and prescribing patterns",
        "No demo is needed — vendor marketing materials are sufficient",
        "A demo focused only on the tool's visual design",
      ],
      correctIndex: 1,
      explanation:
        "A Caribbean-specific demo reveals whether the tool actually works with local drug names, formularies, and prescribing patterns. A generic US/UK demo may look impressive but does not demonstrate suitability for Caribbean pharmacy operations. Always request demos that reflect your real-world context.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m7-q8",
      question: "An AI tool's SLA guarantees 99% uptime with support available 9am–5pm EST only. Why might this be problematic for a Caribbean pharmacy?",
      options: [
        "99% uptime is too high a guarantee",
        "EST is the same as Caribbean time, so support hours are fine",
        "1% downtime equals approximately 88 hours/year, which could include critical periods; support hours may not cover all Caribbean time zones",
        "SLAs are not relevant to pharmacy operations",
      ],
      correctIndex: 2,
      explanation:
        "1% downtime equals approximately 88 hours per year — nearly four full days. If this downtime occurs during peak dispensing hours or hurricane response periods, it could seriously impact patient care. Additionally, some Caribbean territories operate in different time zones (AST), and support limited to EST business hours may leave pharmacies without help during their operating hours.",
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
  ],
};

// ============================================================================
// MODULE 8 — The Future of Pharmacy Technology in the Caribbean
// ============================================================================

const module8: Module = {
  id: "m8-future-pharmacy-tech",
  number: 8,
  title: "The Future of Pharmacy Technology in the Caribbean",
  description:
    "Look ahead to the technologies and trends that will shape Caribbean pharmacy practice over the next decade. From e-prescribing and telepharmacy to robotic dispensing and personalised medicine, prepare for the future while staying grounded in current Caribbean realities.",
  learningObjectives: [
    "Describe emerging pharmacy technologies and assess their applicability to the Caribbean context",
    "Evaluate the potential impact of e-prescribing, telepharmacy, and blockchain on Caribbean pharmacy operations",
    "Create a personal technology learning plan to maintain professional relevance as pharmacy technology evolves",
  ],
  lessons: [
    // ── Lesson 8.1 ──
    {
      id: "m8-l1",
      title: "E-Prescribing, Telepharmacy & Digital Health in the Caribbean",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Digital Transformation of Caribbean Pharmacy",
        },
        {
          type: "text",
          body: "The Caribbean is in the early stages of a digital health transformation that will fundamentally change how pharmacy services are delivered. E-prescribing, telepharmacy, electronic health records, and digital payment systems are all emerging across the region, driven by government initiatives, COVID-19 lessons, and increasing patient expectations. For pharmacy technicians, understanding these trends is not optional — it is essential for career survival.",
        },
        {
          type: "key-term",
          term: "E-Prescribing (Electronic Prescribing)",
          definition:
            "A system where prescribers create and send prescriptions electronically directly to the pharmacy's dispensing system, eliminating paper prescriptions. Benefits include reduced transcription errors, faster processing, automatic interaction checking at the point of prescribing, and better audit trails.",
        },
        {
          type: "table",
          caption: "Digital Health Initiatives Across the Caribbean",
          headers: ["Initiative", "Country/Region", "Status", "Pharmacy Impact"],
          rows: [
            [
              "CDAP Digitisation",
              "Trinidad & Tobago",
              "Phased implementation ongoing",
              "Electronic tracking of chronic disease medication dispensing; reduced fraud; improved patient outcomes monitoring",
            ],
            [
              "E-Prescribing Pilots",
              "Jamaica",
              "Pilot programmes at select health centres",
              "Direct electronic prescription transmission; reduced paper handling; faster dispensing turnaround",
            ],
            [
              "Electronic Drug Service",
              "Barbados",
              "Digital formulary and procurement in place",
              "Standardised formulary access; streamlined procurement; data-driven stock management",
            ],
            [
              "CARICOM e-Health Strategy",
              "Regional",
              "Strategic framework under development",
              "Harmonised electronic health records; cross-border patient data portability; regional disease surveillance integration",
            ],
            [
              "Telepharmacy Expansion",
              "Multiple islands",
              "COVID-19 accelerated adoption",
              "Remote counselling, medication review, and dispensing verification for patients on smaller islands or in rural areas",
            ],
          ],
        },
        {
          type: "key-term",
          term: "Telepharmacy",
          definition:
            "The delivery of pharmaceutical care via telecommunications technology, allowing pharmacists to verify prescriptions, counsel patients, and oversee dispensing remotely. Particularly valuable in the Caribbean where some islands lack resident pharmacists and where patients in rural areas have limited access to pharmacy services.",
        },
        {
          type: "island-comparison",
          title: "Digital Health Readiness: Current State",
          description:
            "Where each island stands on the digital health journey, and what this means for pharmacy technicians.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "CDAP digitisation is the most significant current initiative for pharmacy",
                "Several major pharmacy chains have adopted cloud-based dispensing systems",
                "iGovTT provides digital infrastructure for government health services",
                "Internet penetration is approximately 77%, supporting digital health adoption",
                "Challenges remain with interoperability between different health systems",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "The National Health Fund (NHF) electronic claims system is well established",
                "E-prescribing pilots are generating valuable implementation data",
                "Jamaica's Health Information System (JAMHIS) is building toward integrated health records",
                "Rural connectivity remains a challenge for telemedicine and telepharmacy",
                "The government has committed to a digital health strategy as part of Vision 2030",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Small island size makes comprehensive digital health coverage more achievable",
                "The Barbados Drug Service's digital systems provide a foundation for broader e-health",
                "Queen Elizabeth Hospital has implemented electronic modules for prescribing",
                "High internet penetration (over 80%) supports digital service delivery",
                "The government has articulated a Smart Barbados strategy including health technology",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Telepharmacy: A Caribbean Game-Changer",
          body: "Imagine a pharmacy technician on Tobago dispensing a prescription verified in real-time by a pharmacist in Port of Spain via a secure video link. Or a patient on a small island like Bequia receiving medication counselling from a pharmacist in Bridgetown without making a four-hour ferry trip. Telepharmacy has the potential to dramatically improve access to pharmaceutical care across the Caribbean's fragmented island geography. The COVID-19 pandemic accelerated adoption, and the trend is expected to continue.",
        },
        {
          type: "knowledge-check",
          question: "What is the primary advantage of e-prescribing over traditional paper prescriptions?",
          options: [
            "E-prescriptions are free while paper prescriptions cost money",
            "E-prescribing eliminates transcription errors, enables automatic interaction checking, and creates better audit trails",
            "E-prescribing eliminates the need for pharmacist review",
            "Paper prescriptions are illegal in the Caribbean",
          ],
          correctIndex: 1,
          explanation:
            "E-prescribing reduces transcription errors (no more misread handwriting), enables automatic drug interaction checking at the point of prescribing, speeds up dispensing, and creates comprehensive audit trails. It does not eliminate the need for pharmacist review — it enhances the review process with better data.",
        },
      ],
    },
    // ── Lesson 8.2 ──
    {
      id: "m8-l2",
      title: "Emerging Technologies: Blockchain, Robotics & Personalised Medicine",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Technologies on the Horizon",
        },
        {
          type: "text",
          body: "Beyond the technologies already being adopted, several emerging innovations have the potential to transform Caribbean pharmacy practice in the coming decade. Understanding these now — even before they arrive — positions you to adapt when they do, rather than being caught off guard.",
        },
        {
          type: "heading",
          level: 3,
          text: "Blockchain in Pharmaceutical Supply Chains",
        },
        {
          type: "text",
          body: "Blockchain technology creates a tamper-proof, transparent record of every transaction in a supply chain. For Caribbean pharmacy, where medications pass through multiple intermediaries across international borders before reaching the patient, blockchain offers the ability to verify that every step — from manufacturer to distributor to pharmacy — is legitimate. This directly combats the problem of counterfeit medications, which the World Health Organization estimates affects up to 10% of medicines in developing countries.",
        },
        {
          type: "key-term",
          term: "Blockchain",
          definition:
            "A decentralised, distributed digital ledger that records transactions across multiple computers in a way that makes the records tamper-proof and transparent. In pharmacy, blockchain can track medications from manufacturer to patient, verifying authenticity and preventing counterfeit medications from entering the supply chain.",
        },
        {
          type: "heading",
          level: 3,
          text: "Robotic Dispensing",
        },
        {
          type: "text",
          body: "Automated dispensing robots can pick, count, label, and package medications with near-zero error rates. While currently found mainly in large hospital pharmacies in developed countries, robotic dispensing is becoming smaller, cheaper, and more accessible. For high-volume Caribbean pharmacies, especially those dispensing large quantities of chronic disease medications through government programmes, robotic dispensing could dramatically reduce manual errors and free staff for patient-facing work.",
        },
        {
          type: "heading",
          level: 3,
          text: "Pharmacogenomics & Personalised Medicine",
        },
        {
          type: "text",
          body: "Pharmacogenomics — using genetic information to guide medication selection and dosing — is particularly relevant for the genetically diverse Caribbean population. As genetic testing becomes more affordable, pharmacies may eventually maintain patient genetic profiles that inform AI-powered prescribing decisions. Imagine a system that automatically flags that a patient is a CYP2D6 ultra-rapid metaboliser and recommends an alternative to codeine before the prescription is even dispensed.",
        },
        {
          type: "key-term",
          term: "Pharmacogenomics",
          definition:
            "The study of how an individual's genetic makeup affects their response to drugs. By understanding a patient's genetic profile, medication selection and dosing can be personalised to maximise efficacy and minimise adverse effects. This is especially relevant for the genetically diverse Caribbean population.",
        },
        {
          type: "table",
          caption: "Emerging Technologies: Caribbean Readiness Assessment",
          headers: ["Technology", "Potential Caribbean Impact", "Readiness Level", "Timeline Estimate"],
          rows: [
            [
              "Blockchain supply chain",
              "Combating counterfeit medications; improving supply chain transparency",
              "Low — requires significant infrastructure investment",
              "5-10 years for meaningful adoption",
            ],
            [
              "Robotic dispensing",
              "Reducing manual errors; freeing staff for patient care",
              "Low — cost prohibitive for most Caribbean pharmacies currently",
              "5-15 years for community pharmacy adoption",
            ],
            [
              "Pharmacogenomics",
              "Personalised medication selection for diverse populations",
              "Very low — genetic testing infrastructure not yet in place",
              "10-20 years for routine clinical use",
            ],
            [
              "AI-powered medication adherence",
              "Improving chronic disease management outcomes",
              "Medium — smartphone penetration is high across the Caribbean",
              "2-5 years for initial programmes",
            ],
            [
              "Wearable-integrated pharmacy care",
              "Real-time health monitoring informing medication management",
              "Low-Medium — wearable adoption growing but data integration lacking",
              "5-10 years for meaningful pharmacy integration",
            ],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Focus on What Is Coming Soon",
          body: "While blockchain and robotic dispensing are exciting, focus your immediate learning on the technologies arriving in the next 2-5 years: e-prescribing, telepharmacy, AI-powered inventory and clinical decision support, and medication adherence apps. These are the technologies that will affect your daily practice in the near term.",
        },
        {
          type: "knowledge-check",
          question: "Why is pharmacogenomics particularly relevant to the Caribbean population?",
          options: [
            "Caribbean patients are more interested in genetics than other populations",
            "The Caribbean's genetically diverse population (African, Indian, European, Chinese, Indigenous heritage) means drug metabolism varies significantly",
            "Pharmacogenomic testing is already routine in all Caribbean pharmacies",
            "Caribbean drug manufacturers require genetic data for all medications",
          ],
          correctIndex: 1,
          explanation:
            "The Caribbean's extraordinary genetic diversity — reflecting African, Indian, European, Chinese, and Indigenous heritage — means that drug metabolism enzyme variants (like CYP2D6) occur at very different rates across the population. Pharmacogenomics could enable truly personalised medication management for this diverse population.",
        },
      ],
    },
    // ── Lesson 8.3 ──
    {
      id: "m8-l3",
      title: "Your Personal Technology Learning Plan",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Staying Relevant in a Changing Profession",
        },
        {
          type: "text",
          body: "The pace of technology change in pharmacy means that the AI tools and digital systems you learn today will evolve, be replaced, or be supplemented by new technologies throughout your career. The most valuable skill you can develop is not mastery of any specific tool — it is the ability to learn, evaluate, and adapt to new technologies as they emerge. This lesson helps you create a personal technology learning plan.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Assess your current skills: Where are you confident with technology? Where do you feel uncertain? Be honest — this baseline guides your learning.",
            "Identify immediate learning priorities: Focus on technologies you will use in the next 12 months (your pharmacy's dispensing software AI features, AI chatbots for drug information, electronic claims processing)",
            "Set quarterly learning goals: Each quarter, commit to learning one new technology skill relevant to pharmacy practice. Make it specific and measurable.",
            "Use free resources: PIXOPHARM courses, vendor training webinars, YouTube tutorials on pharmacy software, free tiers of AI tools (ChatGPT, Claude) for practice",
            "Join a community: Connect with other Caribbean pharmacy technicians learning technology through professional associations, social media groups, and PIXOPHARM forums",
            "Document your learning: Keep a CPD log of technology skills learned. This contributes to your continuing professional development requirements.",
            "Teach others: The best way to solidify your knowledge is to help a colleague learn. Become the technology resource person in your pharmacy.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "CPD & Technology",
          body: "As Caribbean pharmacy boards increasingly recognise the importance of technology competency, AI and digital health topics are being incorporated into CPD requirements. Pharmacy technicians who proactively develop technology skills now will be ahead of the curve when these requirements become formal. PIXOPHARM courses, including this one, count toward CPD hours in participating jurisdictions.",
        },
        {
          type: "table",
          caption: "Personal Technology Learning Plan Template",
          headers: ["Quarter", "Learning Goal", "Resources", "Success Measure"],
          rows: [
            [
              "Q1",
              "Master AI chatbot use for drug information lookup",
              "PIXOPHARM Module 4, free ChatGPT/Claude accounts, Lexicomp for verification",
              "Can efficiently use AI for drug queries with proper verification workflow",
            ],
            [
              "Q2",
              "Understand and use your pharmacy's inventory forecasting features",
              "Vendor training, PIXOPHARM Module 2, in-pharmacy mentoring",
              "Can interpret forecasting dashboards and act on AI recommendations",
            ],
            [
              "Q3",
              "Develop data protection competency for AI-enabled pharmacy",
              "PIXOPHARM Module 5, national data protection authority resources, pharmacy manager guidance",
              "Can follow and explain your pharmacy's data protection protocol",
            ],
            [
              "Q4",
              "Evaluate one new AI tool for potential pharmacy use",
              "PIXOPHARM Module 7, vendor demos, peer discussion",
              "Can produce a written evaluation using the AI Tool Evaluation Framework",
            ],
          ],
        },
        {
          type: "text",
          body: "Remember: the goal is not to become a technology expert — it is to become a pharmacy professional who is confident, capable, and critical in their use of technology. Every new skill you develop makes you more effective, more employable, and more valuable to your patients and your pharmacy.",
        },
        {
          type: "case-study",
          title: "Case Study: The Tech-Savvy Technician",
          scenario:
            "Keisha, a pharmacy technician in Scarborough, Tobago, completed the PIXOPHARM AI in Pharmacy Practice course and began applying what she learned. She introduced the pharmacy team to using Claude for drug information lookups (with proper verification), created a simple inventory tracking spreadsheet that flagged upcoming expiry dates, and suggested the pharmacy trial a telepharmacy service for patients who found it difficult to travel to the pharmacy. Within six months, the pharmacy owner promoted her to senior technician with a responsibility allowance for technology coordination. Other pharmacies in the area began asking her for advice on digital tools.",
          questions: [
            "What personal qualities and professional habits enabled Keisha's career advancement?",
            "How did Keisha apply the human-AI partnership principles from this course?",
            "What would you include in your own technology learning plan based on Keisha's example?",
          ],
          discussion:
            "Keisha's success was built on proactive learning, practical application, and sharing knowledge with others. She did not just complete a course — she applied what she learned to solve real problems in her pharmacy. She maintained the human-AI partnership principles by always verifying AI outputs and involving the pharmacist in clinical decisions. Her willingness to teach others multiplied the impact of her learning across the team. The lesson: technology skills + initiative + collaboration = career advancement.",
        },
        {
          type: "knowledge-check",
          question: "What is the single most valuable long-term technology skill for a pharmacy technician?",
          options: [
            "Mastering one specific software programme",
            "The ability to learn, evaluate, and adapt to new technologies as they emerge",
            "Programming in Python",
            "Building websites for the pharmacy",
          ],
          correctIndex: 1,
          explanation:
            "Specific software programmes change, but the ability to learn, critically evaluate, and adapt to new technologies is a skill that remains valuable throughout your career. This meta-skill — learning how to learn — is far more important than mastery of any single tool.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m8-q1",
      question: "What is e-prescribing?",
      options: [
        "Printing prescriptions on an electronic printer",
        "A system where prescribers create and send prescriptions electronically directly to the pharmacy's dispensing system",
        "Emailing a photograph of a handwritten prescription",
        "Using a calculator to check prescription doses",
      ],
      correctIndex: 1,
      explanation:
        "E-prescribing is a system where prescribers create prescriptions electronically and transmit them directly to the pharmacy's dispensing system. This eliminates paper handling, reduces transcription errors, enables automatic interaction checking at the point of prescribing, and creates comprehensive audit trails.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m8-q2",
      question: "How could telepharmacy improve pharmaceutical care in the Caribbean?",
      options: [
        "By replacing all pharmacy technicians with robots",
        "By allowing pharmacists to remotely verify prescriptions and counsel patients on islands or in rural areas without local pharmacist coverage",
        "By eliminating the need for any physical pharmacies",
        "By providing free medications to all patients",
      ],
      correctIndex: 1,
      explanation:
        "Telepharmacy allows pharmacists to verify prescriptions, counsel patients, and oversee dispensing remotely via telecommunications. In the Caribbean, where some islands lack resident pharmacists and rural areas have limited access, telepharmacy can dramatically improve access to pharmaceutical care.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m8-q3",
      question: "What is blockchain's primary potential benefit for Caribbean pharmaceutical supply chains?",
      options: [
        "Making medications cheaper to manufacture",
        "Creating tamper-proof, transparent tracking of medications from manufacturer to patient, combating counterfeiting",
        "Eliminating the need for pharmacists to check medications",
        "Automatically curing diseases",
      ],
      correctIndex: 1,
      explanation:
        "Blockchain creates a tamper-proof, transparent record of every transaction in the supply chain. For the Caribbean, where medications pass through multiple international intermediaries, this helps verify authenticity and combat counterfeit medications, which the WHO estimates affect up to 10% of medicines in developing countries.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m8-q4",
      question: "Why is pharmacogenomics particularly relevant to the Caribbean?",
      options: [
        "All Caribbean patients have identical genetics",
        "The Caribbean's genetically diverse population means drug metabolism varies significantly, making personalised medicine especially valuable",
        "Pharmacogenomic testing is mandatory in all Caribbean countries",
        "Caribbean pharmacies already use pharmacogenomics daily",
      ],
      correctIndex: 1,
      explanation:
        "The Caribbean's extraordinary genetic diversity — reflecting African, Indian, European, Chinese, and Indigenous heritage — means significant variation in drug metabolism enzymes. Pharmacogenomics could enable truly personalised medication management, addressing differences like CYP2D6 ultra-rapid metabolism that are more common in certain populations.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m8-q5",
      question: "Which emerging technology is estimated to be closest to meaningful Caribbean pharmacy adoption (2-5 year timeline)?",
      options: [
        "Blockchain supply chain tracking",
        "Robotic dispensing for community pharmacies",
        "AI-powered medication adherence apps",
        "Routine pharmacogenomic testing",
      ],
      correctIndex: 2,
      explanation:
        "AI-powered medication adherence apps are estimated to be the closest to meaningful Caribbean adoption (2-5 years) due to high smartphone penetration across the region. Blockchain, robotic dispensing, and routine pharmacogenomics all have longer timelines due to infrastructure, cost, and development requirements.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m8-q6",
      question: "What is the most valuable long-term skill for a pharmacy technician in an era of rapid technological change?",
      options: [
        "Memorising the features of every current AI tool",
        "The ability to learn, evaluate, and adapt to new technologies as they emerge",
        "Avoiding all technology to maintain traditional skills",
        "Becoming a software developer",
      ],
      correctIndex: 1,
      explanation:
        "The ability to learn, critically evaluate, and adapt to new technologies is the most valuable long-term skill. Specific tools and systems change, but this meta-skill — learning how to learn — remains relevant throughout a pharmacy technician's entire career.",
      difficulty: "easy",
      bloomsLevel: "evaluate",
    },
    {
      id: "m8-q7",
      question: "Which of the following contributes to Continuing Professional Development (CPD) in pharmacy technology? Select ALL that apply.",
      questionType: "multiple_select",
      options: [
        "Completing PIXOPHARM AI courses",
        "Attending vendor training webinars on pharmacy software",
        "Teaching colleagues how to use digital tools",
        "Documenting technology skills learned in a CPD log",
        "Using social media for personal entertainment",
      ],
      correctIndex: 0,
      explanation:
        "Completing formal courses (PIXOPHARM), attending vendor training, teaching colleagues (peer education), and maintaining a CPD log all contribute to continuing professional development. Using social media for personal entertainment does not count as CPD, though professional networking on social media could.",
      questionData: {
        correct_indices: [0, 1, 2, 3],
      },
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m8-q8",
      question: "The COVID-19 pandemic had what effect on digital health adoption in the Caribbean?",
      options: [
        "It slowed down digital health adoption",
        "It had no effect on digital health adoption",
        "It accelerated digital health adoption, particularly telepharmacy and remote services",
        "It led to the banning of digital health tools",
      ],
      correctIndex: 2,
      explanation:
        "The COVID-19 pandemic significantly accelerated digital health adoption across the Caribbean, particularly telepharmacy, remote consultation, and electronic prescription processing. Necessity drove innovation, and many of these changes are expected to persist and expand post-pandemic.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// FULL COURSE ASSEMBLY
// ============================================================================

const aiPharmacyCourse: FullCourse = {
  courseId: "ai-in-pharmacy-practice",
  title: "AI in Pharmacy Practice",
  tagline: "Harness technology to transform Caribbean pharmacy care",
  modules: [module1, module2, module3, module4, module5, module6, module7, module8],
};

// ── Utility helpers ─────────────────────────────────────────────────────────

export const totalLessons = aiPharmacyCourse.modules.reduce(
  (sum, m) => sum + m.lessons.length,
  0,
);

export const totalQuizQuestions = aiPharmacyCourse.modules.reduce(
  (sum, m) => sum + m.quiz.length,
  0,
);

export default aiPharmacyCourse;
