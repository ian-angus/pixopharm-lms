// ============================================================================
// PIXOPHARM LMS — Patient Care & Communication (I4)
// Full Course Content: 7 Modules, 24 Lessons, ~75 Quiz Questions
// Focus: Caribbean cultural diversity, multilingual communication,
//        stigma reduction, health literacy, patient rights
// ============================================================================

import type { Module, FullCourse } from '../types';

// ============================================================================
// MODULE 1 — Principles of Patient-Centred Care in Pharmacy
// ============================================================================

const module1: Module = {
  id: "m1-patient-centered-care",
  number: 1,
  title: "Principles of Patient-Centred Care in Pharmacy",
  description:
    "Build the foundation for compassionate, effective patient interactions. Understand why patient-centred care matters more in the Caribbean context — where the pharmacist and pharmacy technician are often the most accessible healthcare professionals in the community.",
  learningObjectives: [
    "Define patient-centred care and explain its relevance to Caribbean pharmacy practice",
    "Compare traditional provider-centred models with patient-centred approaches",
    "Identify the core dimensions of patient-centred care as defined by the WHO",
    "Evaluate barriers to patient-centred care unique to Caribbean island communities",
    "Apply empathy-based communication techniques in routine pharmacy encounters",
  ],
  lessons: [
    // ── Lesson 1.1 ──
    {
      id: "m1-l1",
      title: "What Is Patient-Centred Care?",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Putting the Patient at the Centre of Everything We Do",
        },
        {
          type: "text",
          body: "Patient-centred care is not merely a buzzword — it is a fundamental shift in how healthcare is delivered. In traditional models, the healthcare provider decides what is best for the patient and the patient is expected to comply. In patient-centred care, the patient is an active partner in their own health decisions. Their values, preferences, cultural background, and life circumstances are integral to every clinical interaction.",
        },
        {
          type: "text",
          body: "For pharmacy technicians in the Caribbean, this concept carries particular weight. Across Trinidad & Tobago, Jamaica, Barbados, and the wider Caribbean, the community pharmacy is often the first — and sometimes the only — healthcare touchpoint for patients. Many patients cannot easily afford a doctor's visit or face long waits at public clinics. The pharmacy team therefore shoulders an outsized responsibility for patient education, counselling, and support.",
        },
        {
          type: "key-term",
          term: "Patient-Centred Care",
          definition:
            "An approach to healthcare that consciously adopts the patient's perspective — their needs, preferences, values, and cultural context — and actively involves them as partners in their own care decisions. It encompasses respect, emotional support, information sharing, and coordination across the care team.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The Caribbean Pharmacy as First Point of Care",
          body: "A 2019 PAHO study found that in several Caribbean nations, more than 60% of patients seek advice at a pharmacy before visiting a physician. In rural areas and on smaller islands without hospitals, this figure can exceed 80%. This makes every interaction at the pharmacy counter a clinical encounter — not just a transaction.",
        },
        {
          type: "heading",
          level: 3,
          text: "The WHO's Eight Dimensions of Patient-Centred Care",
        },
        {
          type: "table",
          caption: "WHO Dimensions of Patient-Centred Care Applied to Caribbean Pharmacy",
          headers: ["Dimension", "Meaning", "Caribbean Pharmacy Example"],
          rows: [
            [
              "Respect for patient preferences",
              "Honour the patient's values and choices",
              "Acknowledging a patient's preference for bush tea alongside prescribed medication, then counselling on potential interactions",
            ],
            [
              "Information & education",
              "Provide clear, complete, actionable information",
              "Explaining medication instructions in Creole or patois when the patient's English literacy is limited",
            ],
            [
              "Emotional support",
              "Address anxiety, fear, and uncertainty",
              "Reassuring a newly diagnosed diabetic patient who is overwhelmed and frightened",
            ],
            [
              "Physical comfort",
              "Ensure comfort during care delivery",
              "Providing a private counselling area away from other customers for sensitive discussions",
            ],
            [
              "Coordination of care",
              "Seamless integration across providers",
              "Communicating with the patient's doctor about a potential drug interaction spotted during dispensing",
            ],
            [
              "Involvement of family",
              "Include family and caregivers as appropriate",
              "Counselling a grandmother who collects medications for an elderly relative on proper administration",
            ],
            [
              "Access to care",
              "Remove barriers to receiving care",
              "Offering extended pharmacy hours or telephone refill services for patients with transportation challenges",
            ],
            [
              "Continuity & transition",
              "Smooth handoffs between care settings",
              "Maintaining patient medication profiles so any technician on duty can provide informed service",
            ],
          ],
        },
        {
          type: "text",
          body: "These dimensions are not abstract ideals — they are practical standards that should guide every interaction at the pharmacy counter. When a patient approaches the dispensary window, they bring with them not just a prescription, but a life context: financial worries, cultural beliefs, family obligations, fears, and hopes. Patient-centred care means seeing the whole person, not just the prescription slip.",
        },
        {
          type: "knowledge-check",
          question: "A patient asks your opinion on whether they should continue taking bush tea for their blood pressure alongside their prescribed amlodipine. Which response best demonstrates patient-centred care?",
          options: [
            "Tell them to stop the bush tea immediately — it is not real medicine",
            "Ignore the question as it is outside your scope of practice",
            "Acknowledge their preference, ask what type of bush tea, and consult the pharmacist about potential interactions before advising",
            "Tell them it does not matter what they do alongside their medication",
          ],
          correctIndex: 2,
          explanation:
            "Patient-centred care respects the patient's preferences and cultural practices while ensuring safety. Dismissing bush medicine alienates the patient and may cause them to hide their use of traditional remedies, which is more dangerous. The correct approach is to engage respectfully, gather information, and involve the pharmacist in assessing any interactions.",
          hint: "Think about which response respects the patient's values while still ensuring their safety.",
        },
      ],
    },
    // ── Lesson 1.2 ──
    {
      id: "m1-l2",
      title: "Provider-Centred vs. Patient-Centred Models",
      duration: "18 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Two Models of Care — Two Very Different Outcomes",
        },
        {
          type: "text",
          body: "For much of medical history, healthcare operated on a paternalistic model: the doctor (or pharmacist) knew best, and the patient's role was to obey. This provider-centred approach was not born from malice — it emerged from a time when patients had limited access to health information and medical professionals were considered the sole authority. But we now know that this model produces worse health outcomes, lower medication adherence, and greater patient dissatisfaction.",
        },
        {
          type: "table",
          caption: "Comparing Provider-Centred and Patient-Centred Approaches",
          headers: ["Aspect", "Provider-Centred", "Patient-Centred"],
          rows: [
            [
              "Communication style",
              "One-way: provider instructs, patient listens",
              "Two-way: dialogue, questions welcomed",
            ],
            [
              "Decision-making",
              "Provider decides; patient complies",
              "Shared decision-making; patient's values considered",
            ],
            [
              "Cultural factors",
              "Ignored or overridden",
              "Integrated into care planning",
            ],
            [
              "Language",
              "Medical jargon; assumes literacy",
              "Plain language; adapted to patient's level",
            ],
            [
              "Emotional needs",
              "Not addressed",
              "Actively acknowledged and supported",
            ],
            [
              "Outcome measure",
              "Prescription filled = success",
              "Patient understands, agrees, and adheres = success",
            ],
          ],
        },
        {
          type: "text",
          body: "In the Caribbean context, the shift from provider-centred to patient-centred care is complicated by several factors. Colonial-era hierarchies still influence how some patients interact with healthcare professionals — many older patients, in particular, may be reluctant to question authority or share concerns. Pharmacy technicians must be aware of these dynamics and actively create a safe space for dialogue.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Breaking Down the Hierarchy",
          body: "Simple techniques can equalise the power dynamic: step out from behind the counter if possible, make eye contact at the patient's level, use their name respectfully (Mr. James, Miss Gloria), and explicitly invite questions: 'Is there anything you want to ask me about this medication? No question is a silly question.'",
        },
        {
          type: "key-term",
          term: "Shared Decision-Making",
          definition:
            "A collaborative process in which the healthcare provider and the patient work together to make healthcare decisions, combining the provider's clinical expertise with the patient's values, preferences, and circumstances. It is the practical application of patient-centred care.",
        },
        {
          type: "case-study",
          title: "Case Study: Mrs. Doreen's Metformin",
          scenario:
            "Mrs. Doreen, a 68-year-old retired teacher in Barbados, has been prescribed metformin 500 mg twice daily for newly diagnosed type 2 diabetes. She comes to your pharmacy looking upset. She tells you: 'My neighbour take that same tablet and she belly give she trouble bad bad. I not taking that.' In a provider-centred model, you would simply say 'The doctor prescribed it, you must take it.' But Mrs. Doreen leaves and never fills the prescription.",
          questions: [
            "How would you respond to Mrs. Doreen using a patient-centred approach?",
            "What specific information would you want to share about metformin and GI side effects?",
            "How could you involve the pharmacist to address her concerns while respecting her autonomy?",
          ],
          discussion:
            "A patient-centred approach would validate Mrs. Doreen's concern ('I understand — that is a real worry'), explain that GI side effects are common at first but usually settle, suggest taking metformin with food to reduce nausea, and offer to contact her doctor about starting at a lower dose. The goal is not to override her decision but to provide information so she can make an informed choice. Mrs. Doreen feels heard, gets practical advice, and is more likely to start her medication.",
        },
        {
          type: "text",
          body: "Research consistently shows that patient-centred communication improves medication adherence by 20-30%. In the Caribbean, where chronic diseases like diabetes and hypertension are leading causes of death, this improvement can literally save lives.",
        },
        {
          type: "knowledge-check",
          question: "Which of the following best describes shared decision-making in pharmacy?",
          options: [
            "The pharmacist decides the best medication and instructs the patient accordingly",
            "The patient chooses whatever medication they want without professional guidance",
            "The healthcare provider and patient collaborate, combining clinical expertise with the patient's values and preferences",
            "The pharmacy technician makes all decisions independently to save the pharmacist's time",
          ],
          correctIndex: 2,
          explanation:
            "Shared decision-making is a collaborative process that respects both the provider's clinical knowledge and the patient's values, preferences, and life circumstances. It is neither purely provider-directed nor purely patient-directed.",
        },
      ],
    },
    // ── Lesson 1.3 ──
    {
      id: "m1-l3",
      title: "Barriers to Patient-Centred Care in the Caribbean",
      duration: "22 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Why Patient-Centred Care Is Harder Than It Sounds",
        },
        {
          type: "text",
          body: "Knowing the principles of patient-centred care is one thing; practising them in a busy Caribbean pharmacy with a queue of impatient customers is quite another. Understanding the barriers — and developing strategies to overcome them — is what separates good intentions from good practice.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Time pressure: High patient volumes with limited staff mean technicians may have only 2-3 minutes per patient interaction",
            "Language barriers: Patients may speak Creole, patois, Spanish, French, Hindi, or other languages; medical English may be incomprehensible to them",
            "Health literacy: Many patients cannot read medication labels, understand dosing schedules, or interpret health information",
            "Cultural mistrust: Historical abuses in healthcare (e.g., unethical research, dismissal of traditional medicine) have created deep distrust in some communities",
            "Stigma: Conditions like HIV, mental illness, and sexually transmitted infections carry heavy stigma in many Caribbean communities, preventing open discussion",
            "Privacy challenges: In small island communities where 'everybody know everybody,' patients fear their health information will become public knowledge",
            "Economic constraints: Patients may not be able to afford the prescribed medication, making adherence counselling feel futile unless alternatives are explored",
            "Power dynamics: Residual colonial and class hierarchies can make patients reluctant to ask questions or express disagreement",
          ],
        },
        {
          type: "island-comparison",
          title: "Barriers to Patient-Centred Care Across Islands",
          description:
            "Different islands face different combinations of barriers. Understanding your local context is essential.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Multicultural population (Indian, African, Chinese, Syrian-Lebanese, Mixed) requires cultural competence across multiple traditions",
                "CDAP programme provides free chronic disease medications, but patients still face access barriers at distribution points",
                "Hindi, Bhojpuri, and Spanish speakers may struggle with English-only medication labels",
                "Strong bush medicine tradition, particularly with Indian Ayurvedic and African herbal practices",
                "High volume public hospital pharmacies may limit individual patient interaction time",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Patois (Jamaican Creole) is the mother tongue for most patients; standard English labels may be poorly understood",
                "NHF (National Health Fund) subsidises medications for chronic diseases, but co-payments remain a barrier for many",
                "Significant stigma around HIV and mental health conditions, particularly in rural areas",
                "Strong Rastafarian and traditional healing communities who may prefer herbal remedies",
                "Rural areas have limited pharmacy access, with some communities served by a single pharmacy",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Small island (166 sq mi) means patients often encounter pharmacy staff socially, creating privacy concerns",
                "High literacy rate (99.6%) but health literacy remains a distinct challenge",
                "Barbados Drug Service provides medications through polyclinics, but queues can be extensive",
                "Ageing population creates growing demand for chronic disease management and polypharmacy counselling",
                "Strong traditional medicine culture with 'bush bath' and herbal remedies widely used",
              ],
            },
          ],
        },
        {
          type: "key-term",
          term: "Empathy Deficit",
          definition:
            "The gap between what a healthcare provider intellectually knows about patient-centred care and their actual ability to empathise under real-world conditions of time pressure, fatigue, and emotional burnout. Recognising and addressing empathy deficit is essential for maintaining care quality in high-volume Caribbean pharmacies.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Privacy Paradox in Small Islands",
          body: "In a community of 5,000 people, the pharmacy technician may be dispensing HIV antiretrovirals to their neighbour, antidepressants to their child's teacher, or erectile dysfunction medication to their uncle. This creates an ethical minefield that larger countries rarely face. Every Caribbean pharmacy professional must develop an absolute, unwavering commitment to confidentiality — and patients must believe this commitment is genuine.",
        },
        {
          type: "heading",
          level: 3,
          text: "Strategies for Overcoming Barriers",
        },
        {
          type: "table",
          caption: "Practical Strategies for Overcoming Patient-Centred Care Barriers",
          headers: ["Barrier", "Strategy", "Example"],
          rows: [
            [
              "Time pressure",
              "Use the 'one key message' technique — ensure every patient leaves with one clear, actionable message",
              "'Take this tablet with your breakfast every morning'",
            ],
            [
              "Language",
              "Learn key pharmacy phrases in the languages spoken in your community",
              "Having a Spanish medication instruction template for your Venezuelan patients",
            ],
            [
              "Health literacy",
              "Use pictograms, colour-coding, and teach-back method",
              "Drawing a sun and moon on labels to indicate morning and night doses",
            ],
            [
              "Stigma",
              "Normalise the interaction — treat all medications equally at the counter",
              "Dispensing ARVs with the same routine and demeanour as blood pressure tablets",
            ],
            [
              "Privacy",
              "Use a private counselling area; call patients by number when possible",
              "Having a separate, enclosed dispensing window for sensitive prescriptions",
            ],
          ],
        },
        {
          type: "knowledge-check",
          question: "In a small Caribbean island community, what is the MOST significant barrier to patient-centred care for patients with stigmatised conditions?",
          options: [
            "Lack of medication availability",
            "Fear that their condition will become community knowledge due to limited privacy in small populations",
            "Pharmacy technicians not knowing how to dispense the medication",
            "The medication being too expensive",
          ],
          correctIndex: 1,
          explanation:
            "While all of these can be barriers, the 'everybody know everybody' dynamic of small island communities creates a uniquely Caribbean privacy challenge. Patients with stigmatised conditions (HIV, mental illness, STIs) may avoid seeking treatment entirely if they fear disclosure, making this the most significant barrier to address.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m1-q1",
      question: "Which of the following BEST defines patient-centred care?",
      options: [
        "Providing the fastest possible service to reduce wait times",
        "Allowing patients to self-diagnose and choose their own medications",
        "An approach that integrates the patient's values, preferences, and cultural context into care decisions, making them active partners",
        "Ensuring every patient receives the same standardised counselling regardless of their background",
      ],
      correctIndex: 2,
      explanation:
        "Patient-centred care is defined by its focus on the individual patient's values, preferences, needs, and cultural context. It treats the patient as an active partner, not a passive recipient. Standardised counselling (option D) ignores individual differences, which is the opposite of patient-centred care.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q2",
      question: "A patient tells you she is using soursop leaf tea alongside her prescribed chemotherapy. Using patient-centred care principles, which response is MOST appropriate?",
      options: [
        "Tell her to stop immediately — bush remedies are unproven and dangerous",
        "Acknowledge her choice respectfully, ask about the preparation and frequency, and consult the pharmacist about potential interactions with her chemotherapy",
        "Ignore the comment — traditional remedies are not your concern",
        "Agree that soursop cures cancer and encourage her to continue",
      ],
      correctIndex: 1,
      explanation:
        "Patient-centred care respects the patient's values while ensuring safety. Dismissing traditional medicine alienates the patient and may cause them to hide their practices. Agreeing uncritically is dangerous. The correct response engages respectfully, gathers clinical information, and involves the pharmacist to assess safety.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q3",
      question: "What percentage of Caribbean patients are estimated to seek pharmacy advice BEFORE visiting a physician?",
      options: [
        "Less than 20%",
        "About 35%",
        "More than 60%",
        "Approximately 90%",
      ],
      correctIndex: 2,
      explanation:
        "PAHO studies indicate that more than 60% of Caribbean patients seek advice at a pharmacy before visiting a physician. In rural areas and smaller islands, this figure can exceed 80%, making the pharmacy the de facto first point of healthcare contact.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q4",
      question: "In shared decision-making, whose values should ultimately guide treatment decisions?",
      options: [
        "The pharmacist's clinical judgement alone",
        "The patient's values, informed by the provider's clinical expertise",
        "Whatever the newest clinical guidelines recommend",
        "The family's preferences, regardless of the patient's wishes",
      ],
      correctIndex: 1,
      explanation:
        "Shared decision-making combines the provider's clinical expertise with the patient's values, preferences, and life circumstances. Ultimately, it is the patient who must live with the treatment decision, so their informed values guide the final choice.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q5",
      question: "Why is the 'everybody know everybody' dynamic of small Caribbean islands a significant barrier to patient-centred care?",
      options: [
        "Pharmacy staff cannot remember all their patients' names",
        "It creates a close-knit community that naturally supports patients",
        "Patients with stigmatised conditions may avoid seeking treatment due to fear of disclosure",
        "It makes pharmacies too crowded",
      ],
      correctIndex: 2,
      explanation:
        "In small island communities where social networks overlap extensively, patients with stigmatised conditions (HIV, mental illness, STIs) may avoid pharmacies entirely if they fear their health information will become public knowledge. This privacy paradox is a uniquely Caribbean barrier to patient-centred care.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m1-q6",
      question: "Mrs. Doreen refuses to take metformin because her neighbour had gastrointestinal side effects. Rank the following responses from MOST to LEAST patient-centred.",
      questionType: "ordering",
      options: [
        "Validate her concern, explain that GI effects are common but usually temporary, suggest taking with food, and offer to contact her doctor about a lower starting dose",
        "Tell her the doctor prescribed it so she must take it",
        "Say nothing — it is not your decision",
        "Give her the medication without discussion and move to the next patient",
      ],
      correctIndex: 0,
      explanation:
        "The most patient-centred response validates the patient's concern, provides education about side effects and mitigation strategies, and offers to coordinate with the prescriber. Simply insisting on compliance, remaining silent, or ignoring the concern entirely represent progressively less patient-centred approaches.",
      questionData: {
        correct_order: [0, 1, 2, 3],
      },
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m1-q7",
      question: "The 'one key message' technique is designed to address which barrier to patient-centred care?",
      options: [
        "Language differences",
        "Medication cost",
        "Time pressure during busy periods",
        "Patient stigma",
      ],
      correctIndex: 2,
      explanation:
        "The 'one key message' technique ensures that even when time is extremely limited, every patient leaves with one clear, actionable piece of information. It is specifically designed to maintain patient-centred care quality during high-volume, time-pressured dispensing.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q8",
      question: "Using pictograms on medication labels — such as drawing a sun for morning doses and a moon for night doses — primarily addresses which dimension of patient-centred care?",
      options: [
        "Emotional support",
        "Physical comfort",
        "Information and education",
        "Continuity and transition",
      ],
      correctIndex: 2,
      explanation:
        "Pictograms on medication labels address the information and education dimension by making dosing instructions accessible to patients with limited literacy or limited English proficiency. This is particularly relevant in the Caribbean, where health literacy barriers are common.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q9",
      question: "A patient-centred approach is MOST likely to improve which of the following outcomes?",
      questionType: "true_false",
      options: ["Medication adherence", "Not medication adherence"],
      correctIndex: 0,
      explanation:
        "Research consistently demonstrates that patient-centred communication improves medication adherence by 20-30%. When patients feel heard, understand their medication, and have been involved in the decision-making process, they are far more likely to take their medications as prescribed.",
      questionData: {
        correct_answer: true,
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q10",
      question: "Match each barrier to patient-centred care with the most appropriate strategy to address it.",
      questionType: "matching",
      options: [
        "Language barriers",
        "Health literacy gaps",
        "Stigma around HIV",
        "Time pressure",
      ],
      correctIndex: 0,
      explanation:
        "Language barriers are best addressed by learning key pharmacy phrases in local languages; health literacy gaps by using pictograms and teach-back methods; HIV stigma by normalising all medication dispensing; and time pressure by using the 'one key message' technique.",
      questionData: {
        pairs: [
          { left: "Language barriers", right: "Learn key pharmacy phrases in local Creole, Spanish, or French" },
          { left: "Health literacy gaps", right: "Use pictograms, colour-coding, and the teach-back method" },
          { left: "Stigma around HIV", right: "Normalise dispensing — treat all medications with identical routine" },
          { left: "Time pressure", right: "Use the 'one key message' technique for every patient encounter" },
        ],
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 2 — Medication Counselling Techniques: Show-Tell-Ask & Beyond
// ============================================================================

const module2: Module = {
  id: "m2-counselling-techniques",
  number: 2,
  title: "Medication Counselling Techniques: Show-Tell-Ask & Beyond",
  description:
    "Master the structured counselling techniques that transform a simple medication handover into a meaningful patient education opportunity. Learn Show-Tell-Ask, motivational interviewing basics, and the Indian Health Service model — all adapted for Caribbean pharmacy practice.",
  learningObjectives: [
    "Demonstrate the Show-Tell-Ask medication counselling method in a pharmacy setting",
    "Apply the Indian Health Service (IHS) counselling model to new and refill prescriptions",
    "Utilise open-ended questions to assess patient understanding and concerns",
    "Adapt counselling techniques for patients with varying levels of health literacy",
    "Evaluate the effectiveness of a counselling interaction using teach-back verification",
  ],
  lessons: [
    // ── Lesson 2.1 ──
    {
      id: "m2-l1",
      title: "The Show-Tell-Ask Method",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Show-Tell-Ask: The Gold Standard of Medication Counselling",
        },
        {
          type: "text",
          body: "The Show-Tell-Ask method is one of the most effective and widely recommended approaches to medication counselling. Developed to improve patient understanding and adherence, it transforms the medication handover from a passive transaction into an active learning experience. For Caribbean pharmacy technicians, this method is particularly valuable because it works across literacy levels and can be adapted for any language.",
        },
        {
          type: "key-term",
          term: "Show-Tell-Ask (STA)",
          definition:
            "A three-step medication counselling method where the pharmacy professional SHOWS the medication to the patient, TELLS them essential information about it, and ASKS questions to verify understanding and uncover concerns. It is recommended by the WHO and multiple pharmacy professional bodies worldwide.",
        },
        {
          type: "heading",
          level: 3,
          text: "Step 1: SHOW",
        },
        {
          type: "text",
          body: "Hold the medication so the patient can see it clearly. Open the container if appropriate so they can see the tablet or capsule. If the patient is collecting a refill, show them the medication and ask: 'Does this look the same as what you have been taking?' This simple visual check catches dispensing errors, generic substitutions the patient was not expecting, and dosage changes. In the Caribbean, where generic substitution is common due to cost pressures, patients frequently receive different-looking tablets for the same medication — causing confusion and non-adherence.",
        },
        {
          type: "heading",
          level: 3,
          text: "Step 2: TELL",
        },
        {
          type: "text",
          body: "Provide essential information in plain language. Cover these five points — no more, no less — during a standard counselling interaction: (1) What the medication is for, (2) How to take it, (3) When to take it, (4) Common side effects to expect, and (5) What to do if a problem occurs. Avoid medical jargon. Instead of 'take orally twice daily with food,' say 'swallow one tablet with your breakfast and one with your dinner.'",
        },
        {
          type: "heading",
          level: 3,
          text: "Step 3: ASK",
        },
        {
          type: "text",
          body: "This is the most important and most frequently skipped step. Ask the patient to tell you, in their own words, how they will take the medication. This is not a test — it is a verification that your communication was effective. Use phrases like: 'Just so I know I explained it clearly, can you tell me how you plan to take this?' If the patient cannot accurately describe the regimen, you know you need to re-explain — not that the patient is 'stupid.'",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Ask Step in Creole/Patois",
          body: "In Jamaica, you might say: 'Jus fi mek sure mi explain it good, tell mi how yuh ago tek di tablet dem.' In Trinidad: 'Just to make sure I break it down proper, tell me back how you go take this nah.' The key is to frame the Ask step as YOUR responsibility ('so I know I explained it well') — never as the patient's failure to understand.",
        },
        {
          type: "table",
          caption: "Show-Tell-Ask Quick Reference Card",
          headers: ["Step", "Action", "Key Phrases", "Watch For"],
          rows: [
            [
              "SHOW",
              "Display the medication visually",
              "'This is your [medication name].' 'Does this look the same as before?'",
              "Patient recognition, confusion about appearance, generic substitution reactions",
            ],
            [
              "TELL",
              "Explain 5 key points in plain language",
              "'This is for your blood pressure.' 'Take one with breakfast.'",
              "Patient facial expressions — confusion, worry, disengagement",
            ],
            [
              "ASK",
              "Verify understanding via teach-back",
              "'Can you tell me how you will take this?' 'What will you do if you miss a dose?'",
              "Accuracy of patient's repeat, hesitation, parroting vs. genuine understanding",
            ],
          ],
        },
        {
          type: "knowledge-check",
          question: "In the Show-Tell-Ask method, why is the ASK step considered the most critical?",
          options: [
            "It allows the technician to test the patient's intelligence",
            "It verifies that the communication was effective and identifies gaps in understanding",
            "It provides legal documentation that counselling occurred",
            "It gives the patient a chance to negotiate a lower price",
          ],
          correctIndex: 1,
          explanation:
            "The Ask step is critical because it is the only way to verify that the information was actually understood by the patient. Without it, the technician has no way of knowing whether the SHOW and TELL steps were effective. It should always be framed as verifying the quality of the explanation, not testing the patient.",
        },
      ],
    },
    // ── Lesson 2.2 ──
    {
      id: "m2-l2",
      title: "The Indian Health Service Counselling Model",
      duration: "22 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Three Prime Questions for Every Prescription",
        },
        {
          type: "text",
          body: "The Indian Health Service (IHS) counselling model is built around three 'prime questions' that guide every patient interaction. Unlike prescriptive scripts, these questions are open-ended — they invite the patient to share what they know and feel, allowing the technician or pharmacist to identify and fill gaps in understanding. This model was originally developed for indigenous communities in the United States but has been widely adopted internationally, including in Caribbean pharmacy training programmes, because of its cultural sensitivity and simplicity.",
        },
        {
          type: "key-term",
          term: "IHS Prime Questions",
          definition:
            "Three open-ended questions forming the backbone of the Indian Health Service medication counselling model: (1) What did your doctor tell you this medication is for? (2) How did your doctor tell you to take it? (3) What did your doctor tell you to expect? These questions assess the patient's existing understanding before providing additional counselling.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Prime Question 1 — 'What did your doctor tell you this medication is for?' This reveals whether the patient knows the purpose of their medication. Many patients do not.",
            "Prime Question 2 — 'How did your doctor tell you to take it?' This uncovers whether the patient received and understood dosing instructions. Misunderstandings here are the leading cause of medication errors at home.",
            "Prime Question 3 — 'What did your doctor tell you to expect?' This explores the patient's understanding of expected effects, side effects, and how long it will take to work. It also reveals unrealistic expectations ('The doctor said this would cure me').",
          ],
        },
        {
          type: "text",
          body: "The beauty of the IHS model is that it starts with the patient's perspective. Instead of lecturing, you listen first. This respects the patient's autonomy, identifies what they already know (avoiding redundant information), and reveals dangerous misconceptions before they lead to harm.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Adapting IHS for Caribbean Patients",
          body: "Some Caribbean patients may not have seen a doctor at all — they may be presenting with a prescription from a clinic nurse, a repeat prescription authorised by phone, or a referral from a traditional healer. Adapt the questions accordingly: 'What were you told this medication is for?' or simply 'Do you know what this is for?' The principle is the same — start by assessing what the patient already knows.",
        },
        {
          type: "case-study",
          title: "Case Study: Mr. Desmond's Refill",
          scenario:
            "Mr. Desmond, a 55-year-old taxi driver in Port of Spain, comes to refill his atenolol 50 mg for hypertension. You apply the IHS prime questions. When asked 'What is this medication for?' he replies: 'The pressure tablet.' When asked 'How do you take it?' he says: 'One in the morning... sometimes I does skip it on weekends because I feeling fine.' When asked 'What do you expect from it?' he says: 'When the pressure normal, I go stop taking it.'",
          questions: [
            "What dangerous misconceptions has Mr. Desmond revealed?",
            "How would you address each misconception without making him feel lectured?",
            "What counselling priorities would you set for this 3-minute interaction?",
          ],
          discussion:
            "Mr. Desmond's responses reveal two critical misconceptions: (1) that it is safe to skip doses when feeling well ('weekend skipping'), and (2) that hypertension medication can be stopped once blood pressure normalises. Both are common and dangerous. A patient-centred response would be: 'Your pressure stays normal BECAUSE of the tablet — it is like a dam holding back the river. If you remove the dam, the water floods.' Using an analogy relevant to his experience as a taxi driver ('It is like oil in the engine — you don't stop using oil because the engine runs smooth') can be more impactful than clinical lectures.",
        },
        {
          type: "text",
          body: "Studies conducted in Trinidad & Tobago and Jamaica have found that up to 40% of patients prescribed antihypertensives either skip doses regularly or discontinue entirely when they feel well. The IHS questioning approach catches these misconceptions at the pharmacy counter — the last safety net before the patient goes home.",
        },
        {
          type: "knowledge-check",
          question: "Which of the following is NOT one of the three IHS prime questions?",
          options: [
            "What did your doctor tell you this medication is for?",
            "How much does this medication cost?",
            "How did your doctor tell you to take it?",
            "What did your doctor tell you to expect?",
          ],
          correctIndex: 1,
          explanation:
            "The three IHS prime questions focus on purpose, directions, and expectations — they assess the patient's clinical understanding. Cost, while important to address, is not one of the three prime questions. It is a separate consideration that may be addressed during the counselling interaction if the patient raises concerns.",
        },
      ],
    },
    // ── Lesson 2.3 ──
    {
      id: "m2-l3",
      title: "Open-Ended Questions & Motivational Interviewing Basics",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Power of How You Ask",
        },
        {
          type: "text",
          body: "The difference between a productive patient interaction and a dead end often comes down to how questions are framed. Closed questions — those that can be answered with 'yes' or 'no' — provide minimal information and allow patients to hide their confusion, non-adherence, or concerns behind a simple nod. Open-ended questions invite the patient into a conversation and reveal the rich contextual information that patient-centred care requires.",
        },
        {
          type: "table",
          caption: "Closed vs. Open-Ended Questions in Pharmacy",
          headers: ["Closed Question", "Open-Ended Alternative", "Why the Open Version Is Better"],
          rows: [
            [
              "Are you taking your medication?",
              "Tell me how you have been taking your medication this week.",
              "Reveals actual patterns, timing, and missed doses rather than a defensive 'yes'",
            ],
            [
              "Do you have any side effects?",
              "What changes have you noticed since starting this medication?",
              "Patients may not recognise symptoms as side effects; open framing captures more",
            ],
            [
              "Do you understand how to take this?",
              "Can you walk me through how you plan to take this when you get home?",
              "Activates teach-back and reveals genuine understanding vs. passive agreement",
            ],
            [
              "Any questions?",
              "What concerns do you have about this medication?",
              "'Any questions?' almost always gets 'no'; naming 'concerns' gives permission to voice worries",
            ],
          ],
        },
        {
          type: "key-term",
          term: "Motivational Interviewing (MI)",
          definition:
            "A collaborative, patient-centred counselling approach that strengthens a patient's own motivation and commitment to change. In pharmacy, MI techniques are used to explore and resolve ambivalence about medication adherence, lifestyle changes, or treatment acceptance. Key principles include expressing empathy, developing discrepancy, rolling with resistance, and supporting self-efficacy.",
        },
        {
          type: "heading",
          level: 3,
          text: "MI Techniques for Pharmacy Technicians",
        },
        {
          type: "text",
          body: "While full motivational interviewing training is typically a pharmacist-level competency, pharmacy technicians can apply four core MI techniques in their daily interactions:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Express empathy: 'I can see this is worrying you. That is completely understandable.'",
            "Develop discrepancy: 'You mentioned wanting to see your grandchildren grow up. How does skipping your blood pressure medication fit with that goal?'",
            "Roll with resistance: Instead of arguing when a patient says 'I don't need this tablet,' respond with 'Tell me more about that — what makes you feel that way?'",
            "Support self-efficacy: 'You have been managing your diet really well. I believe you can add this medication to your routine too.'",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Know Your Scope",
          body: "Motivational interviewing for complex adherence issues or substance use should be escalated to the pharmacist. As a technician, you can use basic MI techniques in routine dispensing interactions, but do not attempt to conduct formal MI sessions for behaviour change — that requires advanced training and falls within the pharmacist's clinical scope.",
        },
        {
          type: "text",
          body: "In the Caribbean, MI is particularly effective because it aligns with the oral communication traditions of Caribbean cultures. Rather than handing a patient a written leaflet (which may not be read), MI engages them in a dialogue that is natural, respectful, and empowering.",
        },
        {
          type: "knowledge-check",
          question: "A patient says: 'I stopped taking my diabetes medication because it makes me feel dizzy.' Which response best uses motivational interviewing techniques?",
          options: [
            "'You cannot just stop taking prescribed medication — that is dangerous.'",
            "'Tell me more about the dizziness. When does it happen? I want to help us find a solution together.'",
            "'I will tell the pharmacist. Please wait.'",
            "'That is a listed side effect. You will get used to it.'",
          ],
          correctIndex: 1,
          explanation:
            "The MI approach 'rolls with resistance' by exploring the patient's experience rather than dismissing or arguing with their decision. 'Tell me more' expresses empathy, and 'find a solution together' supports collaborative problem-solving. This approach is far more likely to result in the patient returning to treatment — perhaps with a dosage adjustment or alternative medication — than a lecture about compliance.",
        },
      ],
    },
    // ── Lesson 2.4 ──
    {
      id: "m2-l4",
      title: "Counselling for New Prescriptions, Refills & OTC Sales",
      duration: "22 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Different Situations, Different Approaches",
        },
        {
          type: "text",
          body: "Not every patient interaction requires the same depth of counselling. A patient collecting a new prescription for the first time has very different information needs than a patient refilling a medication they have taken for years. And a patient purchasing an over-the-counter (OTC) product may need intervention that they did not expect. Skilled pharmacy technicians calibrate their counselling approach to the situation.",
        },
        {
          type: "table",
          caption: "Counselling Intensity by Interaction Type",
          headers: ["Interaction Type", "Counselling Focus", "Time Investment", "Key Technique"],
          rows: [
            [
              "New prescription (first fill)",
              "Full STA method: purpose, dosing, side effects, storage, follow-up",
              "5-8 minutes",
              "Show-Tell-Ask with all five TELL points",
            ],
            [
              "Refill (stable patient)",
              "Check for adherence issues, side effects, and changes",
              "2-3 minutes",
              "IHS prime questions (abbreviated): 'How is it going with this medication?'",
            ],
            [
              "Changed dose or medication",
              "Focus on what is different and why",
              "3-5 minutes",
              "SHOW: 'This tablet looks different because...' TELL: 'The new dose is...'",
            ],
            [
              "OTC purchase",
              "Assess appropriateness, check for interactions with existing medications",
              "1-3 minutes",
              "'Are you taking any other medications? Have you used this before?'",
            ],
            [
              "Caregiver collection",
              "Verify caregiver understands, provide written instructions",
              "4-6 minutes",
              "Full STA — the actual patient is not present, so written backup is critical",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Caregiver Collections in the Caribbean",
          body: "It is extremely common in the Caribbean for family members to collect medications on behalf of patients — grandchildren collecting for elderly grandparents, neighbours collecting during work hours, or parents collecting for adult children. This creates a counselling gap: the person receiving the information is not the person taking the medication. Always provide clear written or illustrated instructions when a caregiver collects, and encourage them to have the patient call the pharmacy if they have questions.",
        },
        {
          type: "key-term",
          term: "Caregiver Counselling Gap",
          definition:
            "The information deficit that occurs when a medication is collected by a caregiver (family member, friend, or neighbour) rather than the patient themselves. The caregiver receives verbal counselling but the patient does not, creating a risk of misunderstood or lost information. Bridging this gap with written or illustrated instructions is a critical safety measure in Caribbean pharmacy, where proxy collection is common.",
        },
        {
          type: "heading",
          level: 3,
          text: "The OTC Intervention Opportunity",
        },
        {
          type: "text",
          body: "OTC sales represent an underutilised counselling opportunity. When a patient picks up an antacid, a painkiller, or a cold remedy, they may not think they need professional advice. But a skilled technician can prevent harm: 'I see you are buying ibuprofen. Are you taking any blood pressure medication? Ibuprofen can raise blood pressure and reduce the effectiveness of some antihypertensives.' In the Caribbean, where self-medication is common and OTC products are widely available, this screening function is especially important.",
        },
        {
          type: "scenario-simulation",
          title: "Medication Counselling Decision Simulator",
          description: "A patient arrives at your pharmacy counter. Practice selecting the right counselling approach for different situations.",
          nodes: [
            {
              id: "start",
              text: "Mrs. Williams, 72, arrives at your Bridgetown pharmacy with a new prescription for amlodipine 5 mg for hypertension. She has never taken blood pressure medication before and looks nervous. What is your first step?",
              choices: [
                {
                  label: "Begin the SHOW step — open the medication and show her the tablet",
                  nextNodeId: "show-step",
                  feedback: "Good. Starting with SHOW helps the patient connect visually with their medication and calms initial anxiety.",
                  isOptimal: true,
                },
                {
                  label: "Hand her the bag and wish her well — she seems in a hurry",
                  nextNodeId: "skip-counsel",
                  feedback: "This is a new prescription for a first-time patient. Skipping counselling is both unsafe and a missed opportunity to build adherence from day one.",
                },
                {
                  label: "Launch into a detailed explanation of calcium channel blocker pharmacology",
                  nextNodeId: "too-technical",
                  feedback: "Medical jargon will overwhelm a nervous first-time patient. Start with the basics in plain language.",
                },
              ],
            },
            {
              id: "show-step",
              text: "You show Mrs. Williams the tablet: 'This is amlodipine — your new blood pressure tablet.' She nods but looks uncertain. Now you move to TELL. Which information is MOST critical to share first?",
              choices: [
                {
                  label: "What the medication is for and how to take it — 'This helps keep your blood pressure at a safe level. Take one tablet every morning with your breakfast.'",
                  nextNodeId: "tell-step",
                  feedback: "Perfect. Purpose and dosing are the two most critical TELL points for a new prescription. Clear, simple, actionable.",
                  isOptimal: true,
                },
                {
                  label: "A complete list of all possible side effects",
                  nextNodeId: "side-effects-first",
                  feedback: "While side effects must be covered, leading with a long list can frighten a nervous patient into non-adherence. Start with purpose and dosing.",
                },
              ],
            },
            {
              id: "tell-step",
              text: "Mrs. Williams is nodding along. You mention that she may notice swollen ankles initially, which usually settles. Now for the ASK step. How do you verify her understanding?",
              choices: [
                {
                  label: "'Mrs. Williams, just to make sure I explained it clearly — can you tell me how you plan to take this tablet?'",
                  nextNodeId: "success",
                  feedback: "Excellent. You framed the teach-back as YOUR responsibility ('so I know I explained it clearly'), which feels respectful rather than patronising.",
                  isOptimal: true,
                },
                {
                  label: "'Do you understand?' and wait for a yes/no",
                  nextNodeId: "partial-end",
                  feedback: "Most patients will say 'yes' even when they do not understand. A closed yes/no question does not verify genuine comprehension. Use teach-back instead.",
                },
              ],
            },
            {
              id: "skip-counsel",
              text: "Mrs. Williams goes home and takes two tablets because she thought 'one was not enough for a serious condition.' She develops low blood pressure, dizziness, and falls. She is taken to Queen Elizabeth Hospital. This was preventable.",
              isEnd: true,
              outcome: "failure",
              summary: "New prescriptions ALWAYS require counselling. The 5-8 minutes you invest in Show-Tell-Ask can prevent serious adverse events. Never assume a patient will figure it out on their own.",
            },
            {
              id: "too-technical",
              text: "Mrs. Williams's eyes glaze over as you explain calcium channel mechanisms. She nods politely, takes the bag, and leaves. At home, she puts the medication in her drawer and does not take it — she felt too embarrassed to admit she did not understand.",
              isEnd: true,
              outcome: "failure",
              summary: "Technical language creates a barrier, not an education. Use plain language, analogies, and the STA method to ensure genuine understanding.",
            },
            {
              id: "side-effects-first",
              text: "After hearing about dizziness, swelling, and headaches, Mrs. Williams looks terrified. She takes the medication home but is too scared to start it for two weeks. When she finally calls the pharmacy, she has had dangerously high blood pressure readings.",
              isEnd: true,
              outcome: "partial",
              summary: "Side effect information is important but should be contextualised: 'Some patients notice mild ankle swelling at first — this usually settles within a week.' Leading with benefits and purpose builds confidence before introducing potential effects.",
            },
            {
              id: "partial-end",
              text: "Mrs. Williams says 'yes' and leaves. She actually misunderstood and takes the tablet at bedtime instead of morning, experiences nocturnal dizziness, and falls in her bathroom. The error is caught at her one-month refill when you use proper teach-back.",
              isEnd: true,
              outcome: "partial",
              summary: "'Do you understand?' almost always gets 'yes' — even when the answer should be 'no.' The teach-back method is the only reliable way to verify genuine understanding.",
            },
            {
              id: "success",
              text: "Mrs. Williams repeats back: 'I take one tablet with my breakfast every morning, and if my ankles swell, I should not stop — it will settle.' She smiles, thanks you, and leaves feeling confident. At her one-month refill, she reports perfect adherence and normal blood pressure readings.",
              isEnd: true,
              outcome: "success",
              summary: "Excellent counselling. You used the full Show-Tell-Ask method, plain language, and teach-back verification. Mrs. Williams understood her medication, felt respected, and achieved good outcomes.",
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "When a caregiver (e.g., a grandchild) collects a prescription on behalf of an elderly patient, what additional step should the technician always take?",
          options: [
            "Refuse to dispense — only the patient can collect their own medication",
            "Provide clear written or illustrated instructions since the actual patient is not present for verbal counselling",
            "Tell the caregiver to have the patient visit the pharmacy next time",
            "Skip counselling entirely — the caregiver will pass on the information",
          ],
          correctIndex: 1,
          explanation:
            "When the person collecting is not the person taking the medication, there is a counselling gap. Written or illustrated instructions bridge this gap and give the patient a reference. Refusing to dispense to caregivers is impractical in the Caribbean context where family-based medication collection is extremely common.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m2-q1",
      question: "In the Show-Tell-Ask method, what does the SHOW step involve?",
      options: [
        "Showing the patient the pharmacy's price list",
        "Displaying the medication visually so the patient can see what they will be taking",
        "Showing the patient how to use the pharmacy's app",
        "Demonstrating how to swallow a tablet",
      ],
      correctIndex: 1,
      explanation:
        "The SHOW step involves physically displaying the medication to the patient — opening the container, showing the tablet or capsule, and for refills, asking if it looks the same as before. This visual connection helps with medication identification and catches generic substitution confusion.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q2",
      question: "Which of the following is an IHS prime question?",
      options: [
        "How much does this medication cost?",
        "What did your doctor tell you this medication is for?",
        "Would you like a generic alternative?",
        "Have you tried bush remedies for this condition?",
      ],
      correctIndex: 1,
      explanation:
        "The three IHS prime questions are: (1) What did your doctor tell you this medication is for? (2) How did your doctor tell you to take it? (3) What did your doctor tell you to expect? They assess the patient's existing understanding before additional counselling is provided.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q3",
      question: "Why is 'Do you understand?' considered a poor verification question?",
      options: [
        "It is grammatically incorrect",
        "Most patients will say 'yes' regardless of their actual understanding, providing false reassurance",
        "It is too formal for Caribbean patients",
        "It violates patient privacy",
      ],
      correctIndex: 1,
      explanation:
        "Closed yes/no questions like 'Do you understand?' almost always elicit 'yes' because patients feel embarrassed to admit confusion or do not want to appear difficult. The teach-back method ('Can you tell me how you will take this?') is the only reliable way to verify genuine comprehension.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q4",
      question: "A patient collecting a refill of atenolol tells you: 'I only take it on weekdays because I feel fine on weekends.' Which motivational interviewing technique is MOST appropriate?",
      options: [
        "Express empathy and explore discrepancy: 'I hear you. You mentioned wanting to avoid a stroke like your father — how does skipping weekend doses fit with that goal?'",
        "Roll with resistance: 'That is fine, take it whenever you want'",
        "Confront the patient: 'That is wrong and dangerous — you must take it every day'",
        "Support self-efficacy: 'Great job taking it on weekdays — keep doing what you are doing'",
      ],
      correctIndex: 0,
      explanation:
        "Developing discrepancy between the patient's behaviour (skipping doses) and their own stated goals (avoiding a stroke) is the most effective MI technique here. It uses the patient's own motivation rather than external pressure. Confrontation creates resistance, while accepting the behaviour or praising it fails to address the clinical risk.",
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q5",
      question: "How long should a first-fill counselling interaction typically last?",
      options: [
        "Under 1 minute",
        "5-8 minutes",
        "15-20 minutes",
        "There is no standard — spend as long as needed",
      ],
      correctIndex: 1,
      explanation:
        "First-fill counselling typically requires 5-8 minutes to adequately cover all five TELL points and complete the teach-back verification. This is longer than refill counselling (2-3 minutes) but shorter than a full clinical consultation. Time-efficient technique, not time avoidance, is the goal.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q6",
      question: "Place the Show-Tell-Ask steps in the correct order for counselling a patient on a new prescription.",
      questionType: "ordering",
      options: [
        "Show the medication to the patient",
        "Tell the patient the five key points in plain language",
        "Ask the patient to repeat back how they will take the medication",
      ],
      correctIndex: 0,
      explanation:
        "The correct order is always Show (visual identification), Tell (five key points), Ask (teach-back verification). This sequence builds from recognition to education to confirmation, and should never be reordered or abbreviated for new prescriptions.",
      questionData: {
        correct_order: [0, 1, 2],
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q7",
      question: "Match each counselling situation with the appropriate time investment.",
      questionType: "matching",
      options: [
        "New prescription (first fill)",
        "Refill (stable patient)",
        "OTC purchase",
        "Caregiver collection",
      ],
      correctIndex: 0,
      explanation:
        "New prescriptions require 5-8 minutes for full STA counselling. Refills require 2-3 minutes for adherence and side effect checks. OTC purchases need 1-3 minutes for appropriateness screening. Caregiver collections require 4-6 minutes because written instructions must be prepared.",
      questionData: {
        pairs: [
          { left: "New prescription (first fill)", right: "5-8 minutes — full Show-Tell-Ask" },
          { left: "Refill (stable patient)", right: "2-3 minutes — adherence and side effect check" },
          { left: "OTC purchase", right: "1-3 minutes — appropriateness and interaction screening" },
          { left: "Caregiver collection", right: "4-6 minutes — full STA plus written instructions" },
        ],
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q8",
      question: "When using the teach-back method, how should the technician frame the request?",
      options: [
        "'Let me test you on what I just said.'",
        "'Just to make sure I explained it clearly, can you tell me how you plan to take this?'",
        "'Repeat after me: one tablet in the morning with food.'",
        "'Do you have any questions?'",
      ],
      correctIndex: 1,
      explanation:
        "Teach-back should always be framed as verifying the quality of the technician's explanation — 'so I know I explained it well' — not as testing the patient. This removes the stigma of being 'tested' and makes the interaction feel collaborative rather than evaluative.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q9",
      question: "A patient buying ibuprofen over the counter should be asked about which of the following?",
      options: [
        "Their political affiliation",
        "Whether they are taking blood pressure medications, as ibuprofen can raise BP and reduce antihypertensive effectiveness",
        "Their income level",
        "Whether they prefer brand name or generic for aesthetic reasons only",
      ],
      correctIndex: 1,
      explanation:
        "NSAIDs like ibuprofen can raise blood pressure and reduce the effectiveness of antihypertensives (particularly ACE inhibitors, ARBs, and diuretics). This drug-OTC interaction is common and clinically significant, making it a critical screening question during OTC sales.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q10",
      question: "Up to what percentage of Caribbean patients prescribed antihypertensives either skip doses or discontinue when feeling well?",
      options: [
        "About 10%",
        "About 25%",
        "Up to 40%",
        "Over 75%",
      ],
      correctIndex: 2,
      explanation:
        "Studies in Trinidad & Tobago and Jamaica have found that up to 40% of patients prescribed antihypertensives skip doses or stop entirely when they feel well. This is one of the most dangerous adherence patterns because hypertension is typically asymptomatic — feeling fine does not mean blood pressure is controlled.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q11",
      question: "In the IHS model, the prime questions are designed to assess what BEFORE the technician provides counselling?",
      options: [
        "The patient's insurance coverage",
        "The patient's existing understanding of their medication",
        "The patient's family medical history",
        "The patient's preferred pharmacy location",
      ],
      correctIndex: 1,
      explanation:
        "The IHS prime questions are specifically designed to assess what the patient already knows about their medication's purpose, dosing, and expected effects. This patient-first approach avoids redundant information and reveals dangerous misconceptions before additional counselling is provided.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q12",
      question: "Which motivational interviewing principle involves exploring the gap between a patient's current behaviour and their personal health goals?",
      options: [
        "Expressing empathy",
        "Developing discrepancy",
        "Rolling with resistance",
        "Supporting self-efficacy",
      ],
      correctIndex: 1,
      explanation:
        "Developing discrepancy involves gently highlighting the gap between where the patient is (e.g., skipping doses) and where they want to be (e.g., staying healthy for their grandchildren). This internal motivation is far more powerful than external pressure from healthcare providers.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// MODULE 3 — Health Literacy: Assessing Understanding & Adapting Communication
// ============================================================================

const module3: Module = {
  id: "m3-health-literacy",
  number: 3,
  title: "Health Literacy: Assessing Understanding & Adapting Communication",
  description:
    "Understand why health literacy — not just general literacy — determines whether patients can manage their medications safely. Learn to assess health literacy without embarrassing patients, and master communication adaptations that bridge the gap.",
  learningObjectives: [
    "Define health literacy and distinguish it from general literacy",
    "Identify signs of limited health literacy in pharmacy encounters",
    "Apply the teach-back method and plain language principles to medication counselling",
    "Design visual medication aids (pictograms, colour-coding) for patients with literacy challenges",
    "Evaluate the readability of patient education materials using recognised standards",
  ],
  lessons: [
    // ── Lesson 3.1 ──
    {
      id: "m3-l1",
      title: "Understanding Health Literacy",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Hidden Challenge: When Patients Cannot Understand Their Own Care",
        },
        {
          type: "text",
          body: "Health literacy is not the same as general literacy. A person may be able to read a newspaper but unable to interpret a medication label, calculate a dosage from a chart, or navigate the healthcare system. Health literacy is defined by the WHO as 'the cognitive and social skills which determine the motivation and ability of individuals to gain access to, understand, and use information in ways which promote and maintain good health.'",
        },
        {
          type: "text",
          body: "In the Caribbean, health literacy presents unique challenges. While overall adult literacy rates are high — Barbados at 99.6%, Trinidad & Tobago at 99.0%, Jamaica at 88.7% — health literacy is significantly lower. A patient who can read a cricket scorecard may struggle with the instructions 'Take 500 mg PO BID with food PRN for pain.' The gap between general literacy and health literacy is a major, underrecognised cause of medication errors, hospital readmissions, and poor chronic disease outcomes.",
        },
        {
          type: "key-term",
          term: "Health Literacy",
          definition:
            "The degree to which individuals have the capacity to obtain, process, and understand basic health information and services needed to make appropriate health decisions. It encompasses reading medication labels, understanding dosing instructions, navigating appointment systems, and interpreting health information from various sources.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "The Scale of the Problem",
          body: "Studies suggest that 40-50% of adults in the Caribbean have inadequate or marginal health literacy. This means nearly half of all patients who visit your pharmacy may not fully understand their medication instructions, even if they can read the words on the label. Low health literacy is associated with 50% higher hospitalisation rates, 30% higher emergency room visits, and significantly poorer chronic disease outcomes.",
        },
        {
          type: "table",
          caption: "General Literacy vs. Health Literacy",
          headers: ["General Literacy", "Health Literacy"],
          rows: [
            [
              "Can read a newspaper article",
              "Can interpret a medication information leaflet",
            ],
            [
              "Can write a shopping list",
              "Can fill out a health insurance form correctly",
            ],
            [
              "Can do basic arithmetic",
              "Can calculate how many tablets to take if prescribed 'one tablet TDS'",
            ],
            [
              "Can follow a recipe",
              "Can follow a complex medication regimen with multiple drugs at different times",
            ],
            [
              "Can use a telephone",
              "Can navigate an automated pharmacy refill system",
            ],
          ],
        },
        {
          type: "text",
          body: "The consequences of low health literacy are not abstract: they show up every day in Caribbean pharmacies as missed doses, doubled doses, medications taken at the wrong time, medications stored incorrectly, and patients who simply stop taking their medications because they were confused and too embarrassed to ask for help.",
        },
        {
          type: "knowledge-check",
          question: "A patient with a high school education receives a prescription for metformin 500 mg to be taken 'PO BID with meals.' They take one tablet in the morning without food and skip the evening dose because they 'do not eat at night.' What does this scenario illustrate?",
          options: [
            "The patient is intentionally non-adherent",
            "The prescription is written incorrectly",
            "The gap between general literacy and health literacy — the patient can read but cannot interpret medical abbreviations or connect dosing to meals",
            "The patient needs a different medication",
          ],
          correctIndex: 2,
          explanation:
            "This patient can read but does not understand the medical abbreviations 'PO' (by mouth) and 'BID' (twice daily), nor do they connect 'with meals' to their actual eating pattern. This is a classic health literacy gap: the patient is literate but not health literate. Clear, plain-language instructions ('Swallow one tablet with your breakfast and one with your dinner') would have prevented this error.",
        },
      ],
    },
    // ── Lesson 3.2 ──
    {
      id: "m3-l2",
      title: "Assessing Health Literacy Without Embarrassing Patients",
      duration: "22 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Detecting the Problem Without Creating Another One",
        },
        {
          type: "text",
          body: "Low health literacy is often invisible. Patients who struggle with health information have developed sophisticated coping strategies: they may claim they forgot their glasses, say they will 'read it at home,' ask a family member to come back for the medication, or simply nod and agree with everything. As a pharmacy technician, you must learn to recognise these signals without putting the patient in an embarrassing position.",
        },
        {
          type: "heading",
          level: 3,
          text: "Red Flags for Limited Health Literacy",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "'I forgot my glasses' — said repeatedly across visits; may indicate inability to read rather than forgotten spectacles",
            "'I'll read it when I get home' — avoids reading in front of you",
            "Forms returned incomplete or filled out incorrectly",
            "Bringing a family member to 'help' with every pharmacy visit",
            "Inability to name their medications or state what they are for",
            "Missed appointments or refill dates — may not understand the scheduling system",
            "Asking the same questions repeatedly across visits",
            "Medication bottles at home that are all mixed together — the patient cannot distinguish between them by reading labels",
            "Choosing not to fill a prescription — may not understand why the medication was prescribed",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Universal Precautions Approach",
          body: "Rather than trying to identify which patients have low health literacy (which risks profiling and embarrassment), adopt a 'universal precautions' approach: communicate clearly with EVERY patient, use plain language with EVERY patient, and verify understanding with EVERY patient. Just as universal precautions in infection control protect everyone, universal health literacy precautions ensure no patient falls through the gap.",
        },
        {
          type: "key-term",
          term: "Universal Health Literacy Precautions",
          definition:
            "An approach to patient communication that assumes all patients may have difficulty understanding health information, and therefore uses clear, plain language, visual aids, and teach-back methods with every patient — not just those identified as having low health literacy. This removes the stigma of being singled out and improves communication for all patients.",
        },
        {
          type: "text",
          body: "The Caribbean context adds layers of complexity. In Trinidad & Tobago, a patient may speak and read Hindi at home but receive all health information in English. In Suriname, Dutch is the official language but Sranan Tongo is spoken daily. In Haiti, medical care is delivered in French but the patient speaks only Haitian Creole. These linguistic intersections multiply the health literacy challenge.",
        },
        {
          type: "case-study",
          title: "Case Study: Mr. Ravi's Silent Struggle",
          scenario:
            "Mr. Ravi, a 62-year-old retired sugarcane worker in Chaguanas, Trinidad, has been prescribed warfarin after a deep vein thrombosis. He attends the pharmacy with his daughter. When you offer counselling, his daughter says: 'Just tell me, I will explain to Daddy.' You hand Mr. Ravi the medication information leaflet and he says: 'I go read it home.' His daughter later calls the pharmacy to report that her father has been taking the wrong dose — he could not read the label and was guessing based on the tablet colour.",
          questions: [
            "What red flags did Mr. Ravi display for low health literacy?",
            "How could the pharmacy team have identified and addressed his needs without embarrassing him?",
            "What visual aids could have helped Mr. Ravi take warfarin safely?",
          ],
          discussion:
            "Red flags included: reliance on his daughter for communication, claiming he would 'read it at home,' and the subsequent dosing error. A universal precautions approach — providing pictogram-based dosing instructions, colour-coded dose cards, and teach-back verification regardless of perceived literacy level — would have caught this problem. For warfarin specifically, a dose calendar with colour-coded tablets and dosing amounts is an essential safety tool for ALL patients, not just those with identified literacy issues.",
        },
        {
          type: "knowledge-check",
          question: "Why is the 'universal precautions' approach to health literacy preferred over trying to identify individual patients with low literacy?",
          options: [
            "It is faster for the technician",
            "It eliminates the stigma of being singled out and ensures clear communication with ALL patients",
            "It is required by Caribbean law",
            "It saves the pharmacy money on printed materials",
          ],
          correctIndex: 1,
          explanation:
            "Universal precautions mean every patient receives clear, plain-language communication with visual aids and teach-back verification. This removes the stigma of being identified as 'low literacy,' avoids the risk of missing patients who hide their difficulties, and improves outcomes for all patients — including those with adequate literacy who still benefit from clearer communication.",
        },
      ],
    },
    // ── Lesson 3.3 ──
    {
      id: "m3-l3",
      title: "Plain Language, Pictograms & Visual Medication Aids",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Tools That Bridge the Health Literacy Gap",
        },
        {
          type: "text",
          body: "When words fail — due to literacy barriers, language differences, or cognitive limitations — visual communication takes over. Pharmacy technicians who can create and use visual medication aids are providing a service that directly prevents medication errors and saves lives. This is not a luxury — it is a clinical necessity in the Caribbean context.",
        },
        {
          type: "heading",
          level: 3,
          text: "Plain Language Principles",
        },
        {
          type: "table",
          caption: "Medical Jargon vs. Plain Language for Caribbean Patients",
          headers: ["Medical Jargon", "Plain Language", "Even Plainer (Creole-Adapted)"],
          rows: [
            [
              "Take orally twice daily",
              "Swallow one tablet two times a day",
              "Tek one tablet morning time, one tablet evening time",
            ],
            [
              "Apply topically to affected area",
              "Rub the cream on the sore spot",
              "Rub de cream right on where it hurting yuh",
            ],
            [
              "Administer sublingually",
              "Place under your tongue and let it dissolve",
              "Put it under yuh tongue and leh it melt — doh swallow it",
            ],
            [
              "Contraindicated with alcohol",
              "Do not drink alcohol while taking this",
              "No rum, no beer, nothing so while yuh taking dis",
            ],
            [
              "May cause photosensitivity",
              "This medication can make your skin burn easily in the sun",
              "Yuh skin go burn up fast in de sun with dis tablet — wear sunscreen",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Writing at a Grade 5-6 Level",
          body: "Best practice for patient education materials is to write at a Grade 5-6 reading level (age 10-11). This is not 'dumbing down' — it is effective communication. Use short sentences (15 words or fewer), common words, active voice, and avoid jargon. If you must use a medical term, define it immediately: 'Hypertension (high blood pressure) means...'",
        },
        {
          type: "heading",
          level: 3,
          text: "Pictogram-Based Medication Instructions",
        },
        {
          type: "text",
          body: "Pictograms — simple icons that convey medication instructions visually — have been shown to improve medication adherence by up to 50% in patients with low health literacy. A set of standardised pharmacy pictograms covers: time of day (sun = morning, moon = night), route (mouth, eye, ear, skin), quantity (number of tablets shown as dots), food requirement (plate and cutlery = with food), and storage (thermometer = keep cool, water droplets = keep dry).",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Sun icon: Take in the morning",
            "Moon icon: Take at night",
            "Sun + Moon: Take morning and night",
            "Plate with cutlery: Take with food",
            "Crossed-out plate: Take on empty stomach",
            "Water glass: Take with a full glass of water",
            "Crossed-out wine glass: No alcohol",
            "Pregnant woman with X: Do not take if pregnant",
            "Thermometer: Store in refrigerator",
            "Clock: Take at the same time every day",
          ],
        },
        {
          type: "text",
          body: "For patients on multiple medications, a colour-coded medication schedule — using coloured stickers on each medication bottle that match a time-of-day chart — can be transformative. The red-stickered bottles are morning medications, the blue-stickered bottles are evening medications, and the green-stickered bottle is the one taken with lunch. The patient does not need to read a single word.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "DIY Pictogram Labels",
          body: "You do not need expensive software to create pictogram labels. A simple hand-drawn sun and moon on a medication label, or a colour dot from a pack of stickers, can be life-saving. Many Caribbean pharmacies have started creating laminated pictogram cards that can be reused and are available in local languages. This is low-cost, high-impact patient care.",
        },
        {
          type: "video-placeholder",
          title: "Creating Visual Medication Aids in Your Pharmacy",
          duration: "10 min",
          description:
            "Step-by-step demonstration of creating pictogram labels, colour-coded medication schedules, and illustrated dosing cards using materials available at any Caribbean pharmacy.",
        },
        {
          type: "knowledge-check",
          question: "Pictogram-based medication instructions have been shown to improve adherence by how much in patients with low health literacy?",
          options: [
            "About 5%",
            "About 15%",
            "Up to 50%",
            "Over 90%",
          ],
          correctIndex: 2,
          explanation:
            "Research demonstrates that pictogram-based medication instructions can improve adherence by up to 50% in patients with low health literacy. Visual aids bypass reading barriers and provide a universal, language-independent communication channel for medication instructions.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m3-q1",
      question: "What is the difference between general literacy and health literacy?",
      options: [
        "There is no difference — they are the same concept",
        "Health literacy is the ability to read, while general literacy is the ability to do maths",
        "General literacy is the ability to read and write; health literacy is the capacity to obtain, process, and understand health information to make appropriate health decisions",
        "Health literacy only applies to healthcare professionals",
      ],
      correctIndex: 2,
      explanation:
        "General literacy refers to basic reading and writing skills, while health literacy specifically addresses the ability to understand and use health information for decision-making. A person can be generally literate but health illiterate — unable to interpret medication labels, dosing charts, or health education materials.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q2",
      question: "Which of the following is a red flag for limited health literacy?",
      options: [
        "The patient asks detailed, specific questions about drug interactions",
        "The patient consistently says 'I forgot my glasses' when asked to read labels",
        "The patient arrives early for their appointment",
        "The patient knows the names of all their medications",
      ],
      correctIndex: 1,
      explanation:
        "Repeatedly claiming to have forgotten glasses is a classic coping strategy for patients who cannot read. They avoid reading in the pharmacy to hide their difficulty. Other red flags include 'I will read it at home,' incomplete forms, and reliance on family members for all communication.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q3",
      question: "The 'universal precautions' approach to health literacy means:",
      options: [
        "Only communicating with patients who have confirmed low literacy",
        "Using clear, plain language, visual aids, and teach-back with EVERY patient regardless of perceived literacy level",
        "Refusing to dispense medications to patients who cannot read",
        "Requiring all patients to pass a literacy test before receiving medications",
      ],
      correctIndex: 1,
      explanation:
        "Universal precautions apply clear communication strategies to every patient interaction, eliminating the need to identify (and potentially embarrass) individual patients with low literacy. This approach ensures no one falls through the gap and improves communication quality for all patients.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q4",
      question: "Convert the following instruction to plain language: 'Administer 10 mL PO TID AC.'",
      questionType: "fill_in_blank",
      options: [
        "Take 10 millilitres by mouth three times a day before meals",
        "Swallow two teaspoons three times a day before eating",
      ],
      correctIndex: 0,
      explanation:
        "PO = by mouth, TID = three times daily, AC = before meals. In plain language: 'Take 10 millilitres (two teaspoons) by mouth three times a day before eating.' For even plainer communication: 'Swallow two teaspoons of this medicine before breakfast, before lunch, and before dinner.'",
      questionData: {
        acceptable_answers: [
          "Take 10 millilitres by mouth three times a day before meals",
          "Swallow two teaspoons three times a day before meals",
          "Take 10 mL by mouth three times daily before meals",
        ],
        case_sensitive: false,
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q5",
      question: "What reading level is recommended for patient education materials?",
      options: [
        "University level (Grade 12+)",
        "High school level (Grade 9-10)",
        "Grade 5-6 level (age 10-11)",
        "There is no recommended level",
      ],
      correctIndex: 2,
      explanation:
        "Best practice recommends writing patient education materials at a Grade 5-6 reading level (age 10-11). This ensures accessibility for the widest range of patients. It is not 'dumbing down' — it is effective communication that uses short sentences, common words, and active voice.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q6",
      question: "What percentage of Caribbean adults are estimated to have inadequate or marginal health literacy?",
      options: [
        "10-15%",
        "20-25%",
        "40-50%",
        "70-80%",
      ],
      correctIndex: 2,
      explanation:
        "Studies suggest that 40-50% of adults in the Caribbean have inadequate or marginal health literacy, despite relatively high general literacy rates. This discrepancy highlights the critical importance of health literacy-sensitive communication in every pharmacy interaction.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q7",
      question: "A colour-coded medication schedule primarily helps patients who:",
      options: [
        "Are colour-blind",
        "Take multiple medications and struggle to read medication labels",
        "Prefer brand-name medications",
        "Have perfect health literacy but are forgetful",
      ],
      correctIndex: 1,
      explanation:
        "Colour-coded medication schedules help patients on multiple medications identify which medications to take at which times without needing to read labels. The coloured stickers on bottles match a time-of-day chart, bypassing reading requirements entirely. Note: colour-blind patients require alternative approaches (e.g., shape or texture coding).",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q8",
      question: "Mr. Ravi, who cannot read, has been prescribed warfarin with variable dosing. Which visual aid would be MOST appropriate?",
      options: [
        "A detailed written information leaflet in large font",
        "A colour-coded dose calendar showing which coloured tablet to take on which day",
        "A verbal explanation only — no visual aids needed",
        "An audio recording of the pharmacist explaining the dose schedule",
      ],
      correctIndex: 1,
      explanation:
        "For warfarin, which often requires different doses on different days, a colour-coded dose calendar is the most effective visual aid for patients with limited literacy. Each tablet colour is matched to the correct day on a calendar, allowing the patient to self-manage dosing without reading. While audio recordings can supplement, visual tools provide a persistent, at-a-glance reference.",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m3-q9",
      question: "True or false: A patient with a high school diploma cannot have low health literacy.",
      questionType: "true_false",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "False. Health literacy is distinct from general educational attainment. Many patients with secondary or even post-secondary education struggle with health information because it requires specialised vocabulary, numeracy, and system navigation skills that are not taught in standard education. Universal precautions should be applied regardless of a patient's educational background.",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q10",
      question: "Match each pictogram symbol with its meaning for medication labels.",
      questionType: "matching",
      options: [
        "Sun icon",
        "Moon icon",
        "Plate with cutlery",
        "Crossed-out wine glass",
      ],
      correctIndex: 0,
      explanation:
        "Sun = take in the morning; Moon = take at night; Plate with cutlery = take with food; Crossed-out wine glass = no alcohol while taking this medication. These standardised pictograms communicate dosing instructions across language and literacy barriers.",
      questionData: {
        pairs: [
          { left: "Sun icon", right: "Take in the morning" },
          { left: "Moon icon", right: "Take at night" },
          { left: "Plate with cutlery", right: "Take with food" },
          { left: "Crossed-out wine glass", right: "No alcohol while taking this medication" },
        ],
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 4 — Cultural Sensitivity & Competence in Caribbean Healthcare
// ============================================================================

const module4: Module = {
  id: "m4-cultural-competence",
  number: 4,
  title: "Cultural Sensitivity & Competence in Caribbean Healthcare",
  description:
    "The Caribbean is one of the most culturally diverse regions on earth. This module explores the ethnic, religious, and cultural tapestry that shapes health beliefs and behaviours, and equips you with the competence to provide respectful, effective care to every patient regardless of background.",
  learningObjectives: [
    "Describe the major ethnic, religious, and cultural groups that influence health beliefs in the Caribbean",
    "Analyse how cultural factors affect medication adherence, health-seeking behaviour, and patient-provider communication",
    "Apply the LEARN cultural assessment model in pharmacy encounters",
    "Evaluate the role of traditional medicine (bush remedies, Ayurveda, Obeah) in Caribbean health culture",
    "Design culturally appropriate counselling strategies for diverse Caribbean patient populations",
  ],
  lessons: [
    // ── Lesson 4.1 ──
    {
      id: "m4-l1",
      title: "The Caribbean Cultural Mosaic",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "One Region, Many Worlds",
        },
        {
          type: "text",
          body: "The Caribbean is not a monolith. Within this archipelago of islands and coastal territories live people whose ancestors came from Africa, India, China, Syria, Lebanon, Europe, and the indigenous Americas. Their descendants have created a cultural tapestry that is unmatched in diversity per square kilometre anywhere on earth. For a pharmacy technician, this means that two patients standing side by side in your queue may have radically different health beliefs, dietary practices, family structures, communication styles, and attitudes toward medication.",
        },
        {
          type: "text",
          body: "Cultural competence in healthcare is not about memorising a checklist of 'what every Indian patient believes' or 'what every Rastafarian prefers.' It is about developing the awareness, knowledge, and skills to provide respectful, effective care to every individual — recognising that culture influences but does not determine a person's health decisions.",
        },
        {
          type: "key-term",
          term: "Cultural Competence",
          definition:
            "The ability of healthcare providers to effectively deliver services that meet the social, cultural, and linguistic needs of patients. It involves awareness of one's own cultural biases, knowledge of other cultures' health beliefs and practices, and the skill to adapt communication and care accordingly.",
        },
        {
          type: "island-comparison",
          title: "Cultural Diversity Across the Caribbean",
          description:
            "Each island has its own unique cultural composition that shapes health beliefs and pharmacy interactions.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Approximately 35% Indian, 34% African, 23% Mixed, plus Chinese, Syrian-Lebanese, European communities",
                "Hindu, Muslim, Christian, and Orisha faith traditions all influence health beliefs and dietary practices",
                "Diwali and Eid fasting periods affect medication timing for many patients",
                "Indian Ayurvedic traditions (turmeric, neem, tulsi) coexist with African-derived bush medicine",
                "Carnival season and cultural events may affect medication adherence patterns",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Predominantly African-heritage population (92%) with Chinese, Indian, Syrian-Lebanese, and European communities",
                "Rastafarian ital (natural) philosophy strongly influences attitudes toward pharmaceutical medications",
                "Revivalism and Kumina spiritual traditions may affect health-seeking behaviour",
                "Strong tradition of 'roots tonic' and herbal remedies from market vendors",
                "Deep community interconnection influences how health information spreads and is interpreted",
              ],
            },
            {
              name: "Guyana",
              flag: "🇬🇾",
              details: [
                "Approximately 40% Indian, 30% African, 20% Mixed, plus Amerindian, Chinese, and Portuguese communities",
                "Interior Amerindian communities rely heavily on traditional medicine with limited pharmacy access",
                "Hindu puja ceremonies may involve fasting that conflicts with medication schedules",
                "Geographic remoteness of many communities creates unique medication access challenges",
                "Multiple languages spoken: English, Creolese, Hindi, Portuguese, Amerindian languages",
              ],
            },
            {
              name: "Curaçao",
              flag: "🇨🇼",
              details: [
                "Afro-Caribbean majority with Dutch, Latin American, and Portuguese-Jewish heritage communities",
                "Papiamentu is the primary language; Dutch is official; Spanish and English also widely spoken",
                "Brua (folk medicine) traditions influence health beliefs and treatment acceptance",
                "Close ties to Venezuela and Colombia bring Latin American health culture influences",
                "Tourism-driven economy means pharmacies also serve international visitors with diverse backgrounds",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Beyond Ethnicity: Intersectionality in Caribbean Health",
          body: "Cultural identity is not one-dimensional. A patient's health beliefs are shaped by the intersection of ethnicity, religion, socioeconomic status, education, age, gender, urban vs. rural residence, and personal experience. An Indo-Trinidadian Hindu grandmother in Chaguanas will have very different health beliefs from an Indo-Trinidadian Muslim businessman in Port of Spain. Cultural competence means seeing the individual, not the category.",
        },
        {
          type: "heading",
          level: 3,
          text: "Cultural Humility vs. Cultural Competence",
        },
        {
          type: "text",
          body: "Some healthcare educators now prefer the term 'cultural humility' — the recognition that you can never fully understand another person's cultural experience, and that learning about diverse health beliefs is a lifelong process, not a destination. Cultural humility involves self-reflection on your own biases, a willingness to learn from patients, and an acceptance that the patient is the expert on their own cultural identity. Whether you call it competence or humility, the goal is the same: better care for every patient.",
        },
        {
          type: "knowledge-check",
          question: "Cultural competence in pharmacy practice means:",
          options: [
            "Memorising the health beliefs of every ethnic group",
            "Treating all patients identically regardless of background",
            "Developing awareness, knowledge, and skills to provide respectful, effective care to individuals from diverse backgrounds",
            "Only serving patients from your own cultural background",
          ],
          correctIndex: 2,
          explanation:
            "Cultural competence is a dynamic skill set, not a static checklist. It involves self-awareness of your own biases, knowledge of how different cultures approach health, and the skill to adapt your communication and care to meet each individual patient's needs — without stereotyping or making assumptions.",
        },
      ],
    },
    // ── Lesson 4.2 ──
    {
      id: "m4-l2",
      title: "Traditional Medicine & Bush Remedies: Integration Not Opposition",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Bush Medicine, Ayurveda & Folk Healing in the Pharmacy Context",
        },
        {
          type: "text",
          body: "Traditional medicine is not a relic of the past in the Caribbean — it is a living, active part of daily health practice. Walk through any Caribbean market and you will find vendors selling fever grass (lemongrass), soursop leaves, turmeric root, neem, moringa, senna pods, aloe vera, and dozens of other medicinal plants. In Trinidad, you will find Ayurvedic practitioners; in Jamaica, Rastafarian herbalists; in Haiti, traditional healers (houngan and mambo); in Guyana, Amerindian bush doctors.",
        },
        {
          type: "text",
          body: "For pharmacy technicians, the question is not whether traditional medicine is 'real' or 'valid' — it is how to ensure patient safety when patients are using traditional remedies alongside prescribed pharmaceuticals. The evidence-based approach is integration, not opposition: acknowledge the patient's choices, assess for interactions, and counsel accordingly.",
        },
        {
          type: "table",
          caption: "Common Caribbean Bush Remedies & Potential Drug Interactions",
          headers: ["Bush Remedy", "Traditional Use", "Known/Suspected Drug Interactions", "Counselling Point"],
          rows: [
            [
              "Fever grass (lemongrass)",
              "Fever, colds, digestive issues",
              "May enhance effects of sedative medications",
              "Ask about use alongside benzodiazepines or sleep medications",
            ],
            [
              "Soursop (graviola) leaf tea",
              "Cancer prevention, hypertension, diabetes",
              "May lower blood pressure and blood sugar — risk of hypotension/hypoglycaemia with prescribed medications",
              "Monitor blood pressure and blood sugar closely; do not replace prescribed medication",
            ],
            [
              "Turmeric (curcumin)",
              "Inflammation, arthritis, general health",
              "May enhance anticoagulant effect of warfarin; may interact with diabetes and blood pressure medications",
              "Particularly important to flag for patients on warfarin or anticoagulants",
            ],
            [
              "Neem (Azadirachta indica)",
              "Diabetes, skin conditions, infections",
              "May lower blood sugar — risk with diabetes medications; may affect liver enzymes altering drug metabolism",
              "Ask diabetic patients about neem use; flag for pharmacist review",
            ],
            [
              "Senna pods/tea",
              "Constipation, 'cleansing'",
              "Chronic use depletes potassium — dangerous with digoxin and diuretics",
              "Counsel on short-term use only; check potassium-sensitive medications",
            ],
            [
              "Moringa (Moringa oleifera)",
              "General nutrition, diabetes, hypertension",
              "May lower blood pressure and blood sugar; high vitamin K content may affect warfarin",
              "Flag for patients on warfarin, antihypertensives, or diabetes medications",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Never Dismiss — Always Document",
          body: "If a patient discloses use of bush remedies, NEVER respond with dismissal or ridicule. Document the information, assess for potential interactions, and involve the pharmacist when a significant interaction is suspected. Patients who feel judged for using traditional medicine will simply stop disclosing — and undisclosed use is far more dangerous than informed use.",
        },
        {
          type: "key-term",
          term: "Herb-Drug Interaction",
          definition:
            "A clinically significant change in the effect of a pharmaceutical drug caused by the concurrent use of an herbal or traditional remedy. Interactions may increase drug effects (toxicity risk), decrease drug effects (treatment failure), or cause unpredictable adverse reactions. Caribbean pharmacy professionals must routinely screen for these, as traditional medicine use is prevalent.",
        },
        {
          type: "text",
          body: "A landmark study in Jamaica found that 73% of patients used at least one herbal remedy alongside prescribed medications, but only 30% had disclosed this to a healthcare provider. In Trinidad & Tobago, the figure was similar at 68%. This disclosure gap — driven by fear of judgement — is a patient safety crisis hiding in plain sight.",
        },
        {
          type: "knowledge-check",
          question: "A patient on warfarin tells you she drinks moringa tea daily. Why is this a potential safety concern?",
          options: [
            "Moringa is toxic and should never be consumed",
            "Moringa has high vitamin K content, which may reduce warfarin's anticoagulant effectiveness, increasing clot risk",
            "Moringa tea interferes with the absorption of all medications",
            "There is no concern — moringa is completely safe with all medications",
          ],
          correctIndex: 1,
          explanation:
            "Moringa is rich in vitamin K, which directly counteracts warfarin's mechanism of action (warfarin inhibits vitamin K-dependent clotting factors). High vitamin K intake can reduce warfarin effectiveness, putting the patient at risk for blood clots. This is a clinically significant herb-drug interaction that must be flagged for the pharmacist.",
        },
      ],
    },
    // ── Lesson 4.3 ──
    {
      id: "m4-l3",
      title: "The LEARN Model for Cross-Cultural Pharmacy Encounters",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "A Framework for Every Cultural Encounter",
        },
        {
          type: "text",
          body: "The LEARN model provides a structured, practical framework for cross-cultural healthcare encounters. Originally developed by Berlin and Fowkes, it has been widely adopted in pharmacy practice because of its simplicity and effectiveness. Each letter represents a step that pharmacy technicians can apply in daily patient interactions.",
        },
        {
          type: "key-term",
          term: "LEARN Model",
          definition:
            "A five-step cross-cultural communication framework: Listen with sympathy and understanding to the patient's perception of the problem; Explain your perception of the problem; Acknowledge and discuss the differences and similarities; Recommend treatment; Negotiate agreement. It bridges cultural gaps in healthcare encounters.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "L — LISTEN: Hear the patient's perspective on their illness, its cause, and their preferred treatment. Do not interrupt or correct. 'Tell me what you think is causing your symptoms.'",
            "E — EXPLAIN: Share the clinical perspective in plain language. 'From a medical standpoint, your blood sugar levels suggest type 2 diabetes.'",
            "A — ACKNOWLEDGE: Recognise differences between the patient's beliefs and the clinical perspective without judgement. 'I can see why you believe the herbal treatment is working — your energy levels have improved.'",
            "R — RECOMMEND: Offer a treatment plan that respects the patient's cultural context. 'The doctor has prescribed metformin. You can continue your bitter melon tea, but let us make sure there are no interactions.'",
            "N — NEGOTIATE: Reach a mutually acceptable plan. 'How about we try the metformin for one month alongside your herbal remedy, and check your blood sugar at the end? That way we can see how both are working together.'",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "LEARN in Practice: 3-Minute Version",
          body: "In a busy pharmacy, you may not have time for a full LEARN conversation. The abbreviated version: (1) Ask one open-ended question about the patient's perspective; (2) Share your clinical information simply; (3) Find one point of agreement; (4) Offer a plan that incorporates both perspectives. Even this abbreviated approach dramatically improves cross-cultural interactions.",
        },
        {
          type: "case-study",
          title: "Case Study: Rajesh and the Fasting Dilemma",
          scenario:
            "Rajesh, a 45-year-old Hindu man in Trinidad, has been prescribed metformin 500 mg twice daily with meals for type 2 diabetes. He tells you: 'I am doing a religious fast for Navratri — I will not eat for nine days, only fruits. How should I take my tablet?' Using the LEARN model, he has Listened to his doctor's instructions but is seeking your guidance on integrating them with his religious practice.",
          questions: [
            "How would you apply the LEARN model to Rajesh's situation?",
            "What specific safety concern does fasting create for a patient on metformin?",
            "How could you negotiate a plan that respects his religious practice while ensuring his safety?",
          ],
          discussion:
            "Listen: Rajesh's Navratri fast is deeply important to him. Explain: Metformin taken without adequate food can cause dangerously low blood sugar (hypoglycaemia). Acknowledge: 'Navratri is a significant time for you, and your faith is important.' Recommend: Consult the pharmacist about potential dose adjustment during the fast; suggest taking metformin with his fruit meals rather than skipping entirely. Negotiate: Agree on a monitoring plan — check blood sugar more frequently during the fast and contact the pharmacy immediately if he feels dizzy, shaky, or unwell. Involve the pharmacist for clinical decision on dosing.",
        },
        {
          type: "text",
          body: "The LEARN model has been validated across diverse healthcare settings and cultural contexts. In the Caribbean, it is particularly effective because it begins with listening — an act that many patients, accustomed to being told what to do, find surprisingly empowering. When a patient feels genuinely heard, they become far more receptive to clinical recommendations.",
        },
        {
          type: "knowledge-check",
          question: "In the LEARN model, what does the 'N' step (Negotiate) involve?",
          options: [
            "Telling the patient they must follow the prescription exactly as written",
            "Arguing with the patient until they agree with the clinical perspective",
            "Reaching a mutually acceptable plan that incorporates both the clinical recommendation and the patient's cultural values",
            "Negotiating a lower price for the medication",
          ],
          correctIndex: 2,
          explanation:
            "The Negotiate step is about finding common ground — a treatment plan that both the healthcare provider and the patient can agree on. It incorporates clinical necessity with cultural respect, resulting in a plan the patient is actually willing and able to follow.",
        },
      ],
    },
    // ── Lesson 4.4 ──
    {
      id: "m4-l4",
      title: "Religious Practices, Fasting & Medication Timing",
      duration: "22 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "When Faith and Pharmacy Intersect",
        },
        {
          type: "text",
          body: "The Caribbean is deeply religious. Christianity (Catholic, Anglican, Pentecostal, Baptist, Seventh-day Adventist), Hinduism, Islam, Rastafarianism, Vodou, Santeria, Orisha, and Spiritual Baptist traditions all have active communities across the region. Many of these faiths involve practices — fasting, dietary restrictions, prayer times, holy days — that directly intersect with medication regimens. A pharmacy technician who understands these intersections can provide safer, more respectful care.",
        },
        {
          type: "table",
          caption: "Religious Practices Affecting Medication Use in the Caribbean",
          headers: ["Religion / Practice", "Relevant Practice", "Medication Impact", "Pharmacy Response"],
          rows: [
            [
              "Islam (Ramadan fasting)",
              "No food or water from sunrise to sunset for 30 days",
              "Medications requiring food or water cannot be taken during daylight hours; risk of dehydration with certain drugs",
              "Shift doses to pre-dawn (Suhoor) and post-sunset (Iftar) meals; flag medications requiring consistent hydration",
            ],
            [
              "Hinduism (Navratri, Ekadashi)",
              "Multi-day fasting or restricted diet (fruits, milk only)",
              "Metformin and diabetes medications: hypoglycaemia risk; reduced caloric intake affects drug metabolism",
              "Consult pharmacist about dose adjustment; monitor blood sugar closely during fast",
            ],
            [
              "Seventh-day Adventism",
              "Vegetarian diet (many adherents); Saturday Sabbath observance",
              "Gelatin capsules may be rejected (animal-derived); Saturday pharmacy visits unlikely",
              "Offer vegetarian capsule alternatives where available; ensure Friday or Sunday dispensing access",
            ],
            [
              "Rastafarianism",
              "Ital (natural, unprocessed) diet; preference for natural/herbal remedies over pharmaceuticals",
              "May refuse conventional medications entirely; prefer herbal alternatives",
              "Respect the patient's autonomy; provide evidence-based information without coercion; explore natural options where safe",
            ],
            [
              "Catholicism (Lenten fasting)",
              "Reduced food intake and abstinence from meat on specific days",
              "Medications requiring food: timing adjustments needed during Ash Wednesday and Good Friday",
              "Advise on taking medications with the permitted meal(s); generally lower-risk than extended fasts",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Gelatin Capsules and Religious Dietary Laws",
          body: "Many capsule shells are made from porcine (pig) or bovine (cow) gelatin. This is a significant concern for Muslim patients (porcine gelatin is haram), Hindu patients (bovine gelatin from cow), and vegetarian/vegan patients. Pharmacy technicians should be aware of which medications in their formulary have gelatin capsules and whether vegetarian (HPMC — hydroxypropyl methylcellulose) alternatives exist. When alternatives are not available, patients should be informed and the pharmacist can advise on religious dispensation guidelines.",
        },
        {
          type: "key-term",
          term: "Religious Fasting",
          definition:
            "The voluntary abstinence from food, drink, or both for a defined period as an act of spiritual devotion. In the Caribbean, religious fasting practices include Ramadan (Islam), Navratri and Ekadashi (Hinduism), Lent (Christianity), and various Afro-Caribbean spiritual practices. Each has distinct implications for medication timing, absorption, and patient safety that pharmacy technicians must understand.",
        },
        {
          type: "text",
          body: "It is never the pharmacy technician's place to judge or comment on a patient's religious practices. Your role is to ensure that their medication regimen is as safe and effective as possible within the framework of their beliefs. This often requires creativity, flexibility, and close collaboration with the pharmacist.",
        },
        {
          type: "text",
          body: "Proactive counselling is key: if you know that Ramadan, Navratri, or Lent is approaching, initiate conversations with patients who may be affected. Do not wait for them to ask — many patients will simply adjust their medication on their own without professional guidance, which can be dangerous. A simple question a week before the fast begins can prevent a medication crisis.",
        },
        {
          type: "knowledge-check",
          question: "A Muslim patient asks if her capsule medication contains porcine gelatin because she observes halal dietary laws. What is the MOST appropriate response?",
          options: [
            "Tell her it does not matter because it is medicine, not food",
            "Check the medication's capsule composition, inform her honestly, and explore alternatives if porcine gelatin is present",
            "Tell her to ask her imam instead of the pharmacy",
            "Refuse to discuss religious matters in the pharmacy",
          ],
          correctIndex: 1,
          explanation:
            "Respecting a patient's religious dietary requirements is a core element of culturally competent care. The appropriate response is to investigate the capsule composition, provide honest information, and explore alternatives (such as HPMC capsules or tablet forms) where available. If no alternative exists, the pharmacist can discuss the situation and the patient can consult their religious authority.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m4-q1",
      question: "What is the primary goal of cultural competence in pharmacy practice?",
      options: [
        "To learn every language spoken in the Caribbean",
        "To provide respectful, effective care adapted to each patient's cultural, social, and linguistic needs",
        "To avoid interacting with patients from unfamiliar cultural backgrounds",
        "To convince patients to abandon traditional health practices",
      ],
      correctIndex: 1,
      explanation:
        "Cultural competence aims to deliver healthcare that is respectful, effective, and adapted to individual patients' cultural contexts. It is not about mastering every language or convincing patients to abandon their traditions, but about providing safe, effective care within the framework of their beliefs.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q2",
      question: "A patient on warfarin is drinking daily moringa tea. What is the primary concern?",
      options: [
        "Moringa tea is expensive and wasteful",
        "Moringa has high vitamin K content, which may counteract warfarin's anticoagulant effect",
        "Moringa causes liver failure in all patients",
        "Moringa interacts with all medications equally",
      ],
      correctIndex: 1,
      explanation:
        "Moringa is rich in vitamin K, which directly antagonises warfarin. High vitamin K intake can reduce warfarin's effectiveness, increasing the patient's risk of blood clots. This is one of the most clinically significant herb-drug interactions in Caribbean pharmacy practice.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q3",
      question: "In Jamaica, approximately what percentage of patients use herbal remedies alongside prescribed medications?",
      options: [
        "About 20%",
        "About 45%",
        "About 73%",
        "About 95%",
      ],
      correctIndex: 2,
      explanation:
        "A landmark Jamaican study found that approximately 73% of patients used at least one herbal remedy alongside prescribed medications, but only 30% had disclosed this to a healthcare provider. This disclosure gap is a major patient safety concern in the Caribbean.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q4",
      question: "What does the 'L' in the LEARN cultural assessment model stand for?",
      options: [
        "Lead the conversation",
        "Listen with sympathy and understanding to the patient's perception of the problem",
        "Look up the patient's cultural background in a database",
        "Limit the interaction to clinical facts only",
      ],
      correctIndex: 1,
      explanation:
        "The L in LEARN stands for Listen — specifically, listening with sympathy and understanding to the patient's own perception of their health problem, its cause, and their preferred treatment. This is the essential first step in cross-cultural communication.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q5",
      question: "A Hindu patient on metformin for diabetes tells you he will fast for nine days during Navratri, eating only fruits. What is the PRIMARY clinical concern?",
      options: [
        "The patient may gain weight from eating too much fruit",
        "Metformin combined with significantly reduced caloric intake increases the risk of hypoglycaemia",
        "Fruits will interact chemically with metformin",
        "There are no clinical concerns with this fast",
      ],
      correctIndex: 1,
      explanation:
        "Metformin, especially when combined with other diabetes medications, can cause dangerously low blood sugar (hypoglycaemia) when caloric intake is significantly reduced during fasting. A nine-day fruit-only fast creates a real risk that must be addressed through pharmacist consultation, potential dose adjustment, and careful blood sugar monitoring.",
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
    {
      id: "m4-q6",
      question: "Why do many Muslim and Hindu patients have concerns about gelatin capsules?",
      options: [
        "Gelatin is an allergen",
        "Porcine gelatin is prohibited in Islam (haram) and bovine gelatin may concern Hindu patients whose faith reveres cows",
        "Gelatin capsules are more expensive than tablets",
        "Gelatin capsules dissolve too quickly",
      ],
      correctIndex: 1,
      explanation:
        "Many capsule shells are made from porcine (pig) gelatin, which is haram in Islam, or bovine (cow) gelatin, which concerns Hindu patients whose faith reveres the cow. Pharmacy professionals should be aware of capsule compositions and explore vegetarian (HPMC) alternatives when available.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q7",
      question: "A Rastafarian patient prefers natural remedies over pharmaceutical medications. Which response best demonstrates cultural competence?",
      options: [
        "Tell the patient their beliefs are wrong and they must take the medication",
        "Respect their autonomy, provide evidence-based information about both options, and explore natural alternatives where clinically safe",
        "Refuse to serve the patient until they agree to take conventional medication",
        "Pretend to agree with their beliefs while secretly adding medication to their herbal remedy",
      ],
      correctIndex: 1,
      explanation:
        "Cultural competence respects patient autonomy while ensuring they have accurate information to make informed decisions. The pharmacy professional should neither coerce the patient into conventional treatment nor endorse potentially unsafe alternatives. The goal is informed choice within a framework of clinical safety.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q8",
      question: "During Ramadan, a Muslim patient asks how to manage their twice-daily medication when they cannot eat or drink between sunrise and sunset. Place the following steps in the correct counselling order.",
      questionType: "ordering",
      options: [
        "Listen to the patient's fasting schedule and understand Suhoor and Iftar meal times",
        "Explain that the medication can be shifted to pre-dawn and post-sunset meals",
        "Consult the pharmacist about any medications requiring consistent spacing or hydration",
        "Negotiate a modified dosing plan that respects the fast while maintaining medication effectiveness",
      ],
      correctIndex: 0,
      explanation:
        "The correct order follows the LEARN model: first listen to understand the patient's specific fasting schedule, then explain the clinical considerations, consult the pharmacist for clinical approval, and negotiate a mutually acceptable modified dosing plan.",
      questionData: {
        correct_order: [0, 1, 2, 3],
      },
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q9",
      question: "Match each Caribbean bush remedy with its primary drug interaction concern.",
      questionType: "matching",
      options: [
        "Turmeric (curcumin)",
        "Soursop leaf tea",
        "Senna pods/tea",
        "Neem",
      ],
      correctIndex: 0,
      explanation:
        "Turmeric enhances warfarin's anticoagulant effect; soursop may lower blood pressure and blood sugar alongside prescribed medications; chronic senna use depletes potassium (dangerous with digoxin/diuretics); neem may lower blood sugar and affect liver enzymes altering drug metabolism.",
      questionData: {
        pairs: [
          { left: "Turmeric (curcumin)", right: "May enhance anticoagulant effect of warfarin" },
          { left: "Soursop leaf tea", right: "May lower blood pressure and blood sugar alongside prescribed medications" },
          { left: "Senna pods/tea", right: "Chronic use depletes potassium — dangerous with digoxin and diuretics" },
          { left: "Neem", right: "May lower blood sugar and alter drug metabolism via liver enzymes" },
        ],
      },
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
    {
      id: "m4-q10",
      question: "True or false: The best approach to traditional medicine in Caribbean pharmacy is to forbid patients from using bush remedies.",
      questionType: "true_false",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "False. Forbidding bush remedies is both impractical and counterproductive. Patients will continue using them but will stop disclosing their use, creating a hidden safety risk. The evidence-based approach is integration: acknowledge, assess for interactions, counsel on safe use, and document. Respect and safety work together, not against each other.",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// MODULE 5 — Multilingual Communication: English, Spanish, French & Creole
// ============================================================================

const module5: Module = {
  id: "m5-multilingual-communication",
  number: 5,
  title: "Multilingual Communication: English, Spanish, French & Creole",
  description:
    "The Caribbean is a multilingual region where English, Spanish, French, Dutch, and numerous Creole languages coexist. This module equips pharmacy technicians with practical strategies and key phrases for communicating medication instructions across language barriers.",
  learningObjectives: [
    "Identify the major languages and Creole variants spoken across the Caribbean",
    "Apply essential pharmacy phrases in Spanish, French Creole, and Jamaican Patois",
    "Utilise interpretation aids and multilingual resources for medication counselling",
    "Evaluate communication strategies for patients with limited English proficiency",
    "Design multilingual medication labels and instruction sheets for diverse patient populations",
  ],
  lessons: [
    // ── Lesson 5.1 ──
    {
      id: "m5-l1",
      title: "The Caribbean Linguistic Landscape",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "One Region, Many Tongues",
        },
        {
          type: "text",
          body: "Within the relatively compact Caribbean region, patients may speak English, Spanish, French, Dutch, Haitian Creole, Jamaican Patois, Trinidadian Creole, Papiamentu, Sranan Tongo, Garifuna, Hindi, Mandarin, or any combination thereof. For pharmacy technicians, this linguistic diversity is not an academic curiosity — it is a daily clinical reality that directly affects patient safety.",
        },
        {
          type: "text",
          body: "A medication error caused by language misunderstanding is just as dangerous as one caused by a dispensing mistake. If a patient hears 'once' (which means 'eleven' in Spanish) instead of 'one,' they may take eleven tablets instead of one. If a French Creole speaker does not understand 'twice daily,' they may take their medication randomly. Language is a safety issue, not merely a convenience issue.",
        },
        {
          type: "island-comparison",
          title: "Languages of the Caribbean",
          description:
            "The colonial history of the Caribbean has created one of the most linguistically diverse regions on earth.",
          islands: [
            {
              name: "English-Speaking Caribbean",
              flag: "🇬🇧",
              details: [
                "Jamaica (English + Jamaican Patois/Creole)",
                "Trinidad & Tobago (English + Trinidadian Creole + Hindi + Spanish)",
                "Barbados (English + Bajan dialect)",
                "Guyana (English + Creolese + Hindi + Amerindian languages)",
                "Eastern Caribbean islands: Dominica, St. Lucia, Grenada (English + French-lexifier Creole known as Kwéyòl)",
              ],
            },
            {
              name: "Spanish-Speaking Caribbean",
              flag: "🇪🇸",
              details: [
                "Cuba, Dominican Republic, Puerto Rico — predominantly Spanish-speaking",
                "Venezuelan and Colombian immigrants across the English-speaking Caribbean, especially Trinidad & Tobago",
                "Growing Spanish-speaking populations in Aruba, Curaçao, and Bonaire",
                "Many Caribbean pharmacy technicians will encounter Spanish-speaking patients regardless of their island's official language",
              ],
            },
            {
              name: "French-Speaking Caribbean",
              flag: "🇫🇷",
              details: [
                "Haiti (French + Haitian Creole — Kreyòl Ayisyen, spoken by virtually all 11 million Haitians)",
                "Martinique, Guadeloupe (French + Antillean Creole)",
                "French Guiana (French + various Creoles)",
                "Haitian diaspora communities throughout the Caribbean, especially Bahamas, Turks and Caicos, Dominican Republic",
              ],
            },
            {
              name: "Dutch-Speaking Caribbean",
              flag: "🇳🇱",
              details: [
                "Suriname (Dutch + Sranan Tongo + Sarnami Hindi + Javanese)",
                "Curaçao, Aruba, Bonaire (Dutch + Papiamentu + Spanish + English)",
                "Sint Maarten (Dutch + English)",
                "Papiamentu is a Creole with Spanish, Portuguese, Dutch, and African language influences — unique to the ABC islands",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Creole Is Not Broken English or Broken French",
          body: "Caribbean Creole languages are fully developed, rule-governed linguistic systems — not 'bad' versions of their lexifier languages. Jamaican Patois has its own grammar, phonology, and vocabulary. Haitian Creole is an official language of Haiti alongside French. Treating Creole as 'inferior' is both linguistically incorrect and culturally offensive. Pharmacy technicians who can communicate in the local Creole have a powerful tool for patient safety.",
        },
        {
          type: "key-term",
          term: "Creole Language",
          definition:
            "A stable, natural language that developed from a mixture of different languages during periods of colonisation. Caribbean Creoles typically have a European lexifier language (English, French, Spanish, Dutch, Portuguese) combined with West African grammatical structures and vocabulary from multiple other sources. They are not simplified or corrupted versions of European languages — they are distinct linguistic systems.",
        },
        {
          type: "text",
          body: "The linguistic landscape of the Caribbean is further complicated by migration patterns. Venezuelan refugees in Trinidad, Haitian migrants in the Bahamas, Guyanese diaspora in Barbados, and Cuban communities across the region mean that a pharmacy on any island may serve patients speaking languages that are not traditionally associated with that territory. Pharmacy teams must be prepared for linguistic encounters they did not expect.",
        },
        {
          type: "knowledge-check",
          question: "Why is it clinically dangerous if a Spanish-speaking patient hears the English word 'once' during medication counselling?",
          options: [
            "The word 'once' is offensive in Spanish",
            "In Spanish, 'once' means 'eleven,' potentially causing the patient to take eleven doses instead of one",
            "Spanish patients cannot understand any English words",
            "The word 'once' has no meaning in Spanish",
          ],
          correctIndex: 1,
          explanation:
            "This is a classic and dangerous cross-linguistic false friend. The English 'once' (meaning one time) sounds identical to the Spanish 'once' (meaning eleven). A Spanish-speaking patient could misinterpret 'take once daily' as 'take eleven daily.' This example illustrates why language concordance in medication counselling is a patient safety issue.",
        },
      ],
    },
    // ── Lesson 5.2 ──
    {
      id: "m5-l2",
      title: "Essential Pharmacy Phrases in Spanish & French Creole",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Speaking Their Language at the Pharmacy Counter",
        },
        {
          type: "text",
          body: "You do not need to be fluent in another language to provide safe, effective pharmaceutical care across a language barrier. A core set of pharmacy-specific phrases — covering dosing, timing, route, warnings, and verification — can bridge the most critical communication gaps. This lesson provides those phrases in Spanish and Haitian Creole, the two most common non-English languages encountered in Caribbean pharmacy practice.",
        },
        {
          type: "table",
          caption: "Essential Pharmacy Phrases: English, Spanish & Haitian Creole",
          headers: ["English", "Spanish", "Haitian Creole (Kreyòl)"],
          rows: [
            [
              "Take one tablet in the morning",
              "Tome una pastilla en la mañana",
              "Pran yon grenn nan maten",
            ],
            [
              "Take one tablet at night",
              "Tome una pastilla en la noche",
              "Pran yon grenn nan aswè",
            ],
            [
              "Take with food",
              "Tome con comida",
              "Pran li ak manje",
            ],
            [
              "Take on an empty stomach",
              "Tome con el estómago vacío",
              "Pran li lè vant ou vid",
            ],
            [
              "Do not drink alcohol",
              "No tome alcohol",
              "Pa bwè alkòl",
            ],
            [
              "Keep in the refrigerator",
              "Guarde en el refrigerador",
              "Kenbe li nan frijidè a",
            ],
            [
              "Are you taking any other medications?",
              "¿Está tomando otros medicamentos?",
              "Èske w ap pran lòt medikaman?",
            ],
            [
              "Are you pregnant or breastfeeding?",
              "¿Está embarazada o amamantando?",
              "Èske w ansent oswa w ap bay tete?",
            ],
            [
              "Do you have any allergies?",
              "¿Tiene alguna alergia?",
              "Èske w gen alèji?",
            ],
            [
              "If symptoms worsen, see a doctor",
              "Si los síntomas empeoran, consulte a un médico",
              "Si sentòm yo vin pi grav, ale wè yon doktè",
            ],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Pronunciation Tips",
          body: "Spanish: Most words are pronounced as written. Emphasis falls on the second-to-last syllable unless there is an accent mark. 'Pastilla' = pas-TEE-ya. 'Mañana' = man-YAH-na. Haitian Creole: Pronounced largely phonetically. 'Pran' = 'pran' (take). 'Manje' = 'man-jay' (food). 'Aswè' = 'ah-SWEH' (evening). Practice these phrases until they flow naturally.",
        },
        {
          type: "key-term",
          term: "False Friend (Faux Ami)",
          definition:
            "A word that looks or sounds similar in two languages but has a different meaning. In pharmacy, false friends are clinically dangerous — e.g., English 'once' (one time) vs. Spanish 'once' (eleven). Pharmacy technicians working across languages must be aware of common false friends to prevent dosing errors.",
        },
        {
          type: "heading",
          level: 3,
          text: "Pharmacy Phrases in Jamaican Patois",
        },
        {
          type: "table",
          caption: "Common Pharmacy Phrases in Jamaican Patois",
          headers: ["Standard English", "Jamaican Patois", "Usage Note"],
          rows: [
            [
              "Take one tablet twice a day",
              "Tek one tablet two time a day",
              "Clear and direct — most Jamaican patients understand this phrasing",
            ],
            [
              "Take with food",
              "Tek it wid yuh food",
              "The 'wid' (with) is universally understood",
            ],
            [
              "Do not stop taking this medication without asking the doctor",
              "Doh stop tek di medicine widout yuh ask di doctor",
              "Critical for chronic disease medications",
            ],
            [
              "Come back if you feel worse",
              "Come back if yuh feel more sick",
              "Simple and unambiguous",
            ],
            [
              "This medication is for your blood pressure",
              "Dis medicine is fi yuh pressure",
              "'Pressure' is universally understood for hypertension in Jamaica",
            ],
            [
              "Can you tell me how you will take this?",
              "Tell mi how yuh ago tek dis when yuh reach home",
              "Teach-back phrased naturally in Patois",
            ],
          ],
        },
        {
          type: "text",
          body: "Learning even a handful of these phrases demonstrates respect for the patient's linguistic identity and builds trust. Patients who feel their language is respected are more likely to ask questions, disclose concerns, and adhere to their medication regimens.",
        },
        {
          type: "knowledge-check",
          question: "The Haitian Creole phrase 'Pran yon grenn nan maten' means:",
          options: [
            "Take two tablets at night",
            "Take one tablet in the morning",
            "Keep the medication in the refrigerator",
            "Do not drink alcohol",
          ],
          correctIndex: 1,
          explanation:
            "'Pran' = take, 'yon grenn' = one tablet/pill, 'nan maten' = in the morning. Therefore, 'Pran yon grenn nan maten' means 'Take one tablet in the morning.' This is one of the most essential pharmacy phrases for serving Haitian Creole-speaking patients.",
        },
      ],
    },
    // ── Lesson 5.3 ──
    {
      id: "m5-l3",
      title: "Using Interpreters & Multilingual Resources",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "When You Cannot Speak the Language",
        },
        {
          type: "text",
          body: "There will be situations where your language skills are insufficient to communicate safely with a patient. In these cases, you need strategies for accessing interpretation services, using multilingual resources, and ensuring that critical medication information is accurately conveyed despite the language barrier. Getting this wrong is not an inconvenience — it is a patient safety failure.",
        },
        {
          type: "heading",
          level: 3,
          text: "Using Informal Interpreters: Risks and Rules",
        },
        {
          type: "text",
          body: "In the Caribbean, formal interpretation services are rarely available in community pharmacies. The reality is that informal interpreters — family members, friends, bilingual staff, or even other customers — are commonly used. While not ideal, this can be safe if managed properly. However, there are significant risks:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Children should NEVER be used as interpreters for adult health matters — it is inappropriate to place a child in this role, and they may lack the vocabulary for medical concepts",
            "Family members may filter, soften, or misinterpret information based on their own understanding or cultural dynamics (e.g., a husband may not translate sensitive reproductive health information accurately)",
            "Other customers in the pharmacy present a confidentiality risk — the patient's health information is being disclosed to a stranger",
            "Bilingual staff members are the safest informal option but must be trained to interpret accurately, not paraphrase or add their own advice",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Children as Interpreters — Never for Clinical Information",
          body: "It is common in the Caribbean to see children interpreting for parents or grandparents at the pharmacy counter. While a child can help with basic transactions, they must NEVER be asked to interpret clinical medication information. A 10-year-old cannot accurately convey warfarin dosing instructions, and the burden of being responsible for a parent's medication safety is inappropriate for a child.",
        },
        {
          type: "heading",
          level: 3,
          text: "Multilingual Medication Resources",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Multilingual medication instruction templates: Pre-printed dosing instructions in common languages, ready to attach to prescriptions",
            "Pictogram-based universal instructions: Bypass language entirely using standardised pharmacy pictograms",
            "Telephone interpretation services: Some Caribbean health systems provide access to interpretation lines — know your local options",
            "Bilingual pharmacy staff: The most effective solution is hiring staff who reflect the linguistic diversity of your patient population",
            "Technology-assisted translation: Smartphone translation apps can assist with basic communication, but should NEVER be relied upon for clinical accuracy — always verify with a human speaker",
          ],
        },
        {
          type: "key-term",
          term: "Language Concordance",
          definition:
            "The situation where a healthcare provider and patient share a common language, enabling direct communication without interpretation. Research consistently shows that language concordance improves patient satisfaction, medication adherence, and health outcomes. In multilingual Caribbean communities, achieving language concordance may require bilingual staff, multilingual resources, or both.",
        },
        {
          type: "knowledge-check",
          question: "Why should children NEVER be used as interpreters for clinical medication information in the pharmacy?",
          options: [
            "Children talk too much and will breach confidentiality",
            "It is illegal in all Caribbean jurisdictions",
            "Children may lack medical vocabulary for accurate interpretation, and the burden of responsibility for a parent's medication safety is inappropriate",
            "Children cannot speak Creole",
          ],
          correctIndex: 2,
          explanation:
            "Using children as clinical interpreters is inappropriate for two reasons: (1) they may lack the vocabulary and comprehension to accurately convey medical information, leading to errors, and (2) placing the responsibility for a parent's or grandparent's medication safety on a child is an inappropriate burden regardless of the child's language skills.",
        },
      ],
    },
    // ── Lesson 5.4 ──
    {
      id: "m5-l4",
      title: "Creating Multilingual Medication Labels & Instructions",
      duration: "22 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Labels That Save Lives in Any Language",
        },
        {
          type: "text",
          body: "A medication label is only useful if the patient can read and understand it. In a multilingual Caribbean pharmacy, the standard English-only label is a barrier for a significant portion of the patient population. Creating multilingual labels and instruction sheets is not a luxury — it is a patient safety measure that can prevent medication errors, improve adherence, and save lives.",
        },
        {
          type: "text",
          body: "This does not mean every pharmacy needs to produce labels in ten languages. It means understanding your patient demographics and creating resources in the languages most commonly spoken in your community. A pharmacy in south Trinidad near the Venezuelan border should have Spanish medication instruction templates. A pharmacy in the Turks and Caicos with a large Haitian community should have Creole resources. A pharmacy in Suriname may need Dutch, Sranan Tongo, and Sarnami Hindi materials.",
        },
        {
          type: "table",
          caption: "Multilingual Label Design Best Practices",
          headers: ["Element", "Best Practice", "Common Mistake"],
          rows: [
            [
              "Language selection",
              "Match the languages most commonly spoken in your specific patient community",
              "Assuming English-only labels are sufficient for all patients",
            ],
            [
              "Dual-language format",
              "Print instructions in both English and the patient's language on the same label",
              "Providing the translation on a separate slip that gets lost",
            ],
            [
              "Pictograms",
              "Include pictograms alongside text for universal understanding",
              "Using text-only labels even for low-literacy populations",
            ],
            [
              "Font size",
              "Minimum 12-point font for instructions; 14-point for elderly patients",
              "Tiny font that cannot be read by patients with age-related vision changes",
            ],
            [
              "Verification",
              "Have a native speaker verify all translations before use",
              "Using machine translation without human verification",
            ],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Template Approach",
          body: "Create a set of pre-translated medication instruction templates for the most common prescriptions in your pharmacy (antihypertensives, diabetes medications, antibiotics, pain relievers). These can be printed, laminated, and attached to prescriptions as needed. This is far more efficient than translating from scratch for each patient, and the templates can be professionally verified once and used repeatedly.",
        },
        {
          type: "case-study",
          title: "Case Study: The Venezuelan Migrant",
          scenario:
            "Maria, a 34-year-old Venezuelan migrant in Trinidad, arrives at your pharmacy with a prescription for amoxicillin 500 mg TID for 7 days. She speaks minimal English. She nods and smiles when you speak but you suspect she does not understand. She has no family member with her to interpret.",
          questions: [
            "What strategies can you use to communicate the dosing instructions to Maria?",
            "How can pictograms help bridge the language barrier in this situation?",
            "What resources should your pharmacy prepare in advance for situations like this?",
          ],
          discussion:
            "Immediate strategies: Use the Spanish phrase 'Tome una pastilla tres veces al día por siete días' (take one tablet three times a day for seven days). Supplement with pictograms — three suns/dots on the label to show three times daily, the number 7 circled for days. Write '500 mg x 3 al día x 7 días' on the label. Use the teach-back in Spanish: '¿Puede decirme cómo va a tomar esta medicina?' Longer-term: your pharmacy should prepare Spanish-language antibiotic instruction templates for the growing Venezuelan community in Trinidad.",
        },
        {
          type: "key-term",
          term: "Dual-Language Label",
          definition:
            "A medication label that presents instructions in two languages simultaneously — typically the official language of the jurisdiction (e.g., English) alongside the patient's preferred language (e.g., Spanish, Haitian Creole). Dual-language labels ensure that both the patient and any healthcare provider who later reviews the medication can understand the instructions.",
        },
        {
          type: "knowledge-check",
          question: "What is the MOST important step before using a translated medication label in clinical practice?",
          options: [
            "Making it look attractive with colours and graphics",
            "Having a native speaker verify the translation for accuracy",
            "Printing it on waterproof paper",
            "Getting approval from the pharmacy owner",
          ],
          correctIndex: 1,
          explanation:
            "Translation verification by a native speaker is the most critical quality control step for multilingual medication labels. Machine translations and non-native speakers can introduce errors that may cause medication misuse. Clinical accuracy must be verified before any translated material is used in patient care.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m5-q1",
      question: "The Spanish word 'once' means 'eleven.' Why is this relevant to pharmacy practice?",
      options: [
        "It helps pharmacies stock the right number of medications",
        "A Spanish-speaking patient could misinterpret 'take once daily' as 'take eleven daily,' causing a dangerous overdose",
        "It is a trivia fact with no clinical relevance",
        "It affects how pharmacies price medications for Spanish-speaking patients",
      ],
      correctIndex: 1,
      explanation:
        "This is a clinically significant cross-linguistic false friend. A Spanish-speaking patient hearing 'take once daily' in English could interpret 'once' as the Spanish word for eleven, potentially taking a dangerous overdose. This illustrates why language concordance is a patient safety issue, not merely a communication convenience.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q2",
      question: "Which of the following statements about Caribbean Creole languages is correct?",
      options: [
        "Creoles are simplified, broken versions of European languages",
        "Creoles are fully developed, rule-governed linguistic systems with their own grammar and vocabulary",
        "Creoles are only spoken by uneducated people",
        "Creoles are dying languages with no modern speakers",
      ],
      correctIndex: 1,
      explanation:
        "Caribbean Creole languages are fully developed linguistic systems with their own grammar, phonology, and vocabulary. They arose from contact between European and African languages during colonisation. Treating them as 'broken' versions of European languages is linguistically incorrect and culturally disrespectful.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q3",
      question: "In Haitian Creole, 'Pran li ak manje' means:",
      options: [
        "Take it at night",
        "Keep it in the refrigerator",
        "Take it with food",
        "Do not take with alcohol",
      ],
      correctIndex: 2,
      explanation:
        "'Pran' = take, 'li' = it, 'ak' = with, 'manje' = food. Therefore, 'Pran li ak manje' means 'Take it with food.' This is an essential phrase for any pharmacy technician serving Haitian Creole-speaking patients.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q4",
      question: "Why should children NEVER be used as interpreters for clinical medication information?",
      options: [
        "Children are not permitted inside pharmacies",
        "Children may lack medical vocabulary, and the burden of clinical responsibility is inappropriate for a child",
        "Children's voices are too quiet for the pharmacy setting",
        "There is no problem with using children as interpreters",
      ],
      correctIndex: 1,
      explanation:
        "Children should not interpret clinical information because (1) they may lack the vocabulary and comprehension to convey medical information accurately, risking errors, and (2) placing responsibility for a family member's medication safety on a child is an inappropriate burden.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q5",
      question: "A pharmacy near the Venezuelan border in Trinidad should prepare medication instruction templates in which language(s)?",
      options: [
        "English only",
        "English and Spanish",
        "French and Dutch",
        "Mandarin and Hindi",
      ],
      correctIndex: 1,
      explanation:
        "A pharmacy near the Venezuelan border will frequently serve Spanish-speaking patients from the Venezuelan migrant community. Having pre-prepared Spanish medication instruction templates is a practical patient safety measure that matches resources to the linguistic needs of the patient population.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q6",
      question: "What is language concordance in healthcare?",
      options: [
        "When the patient and provider disagree about treatment",
        "When the patient and provider share a common language, enabling direct communication",
        "When all medications are labelled in the same language",
        "When the pharmacy uses only one language for all signage",
      ],
      correctIndex: 1,
      explanation:
        "Language concordance occurs when a healthcare provider and patient share a common language, enabling direct communication without interpretation. Research consistently shows it improves patient satisfaction, medication adherence, and health outcomes.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q7",
      question: "Match each language with the Caribbean island/territory where it is predominantly spoken.",
      questionType: "matching",
      options: [
        "Haitian Creole (Kreyòl)",
        "Papiamentu",
        "Sranan Tongo",
        "Jamaican Patois",
      ],
      correctIndex: 0,
      explanation:
        "Haitian Creole is the primary language of Haiti; Papiamentu is spoken in Curaçao, Aruba, and Bonaire; Sranan Tongo is a lingua franca in Suriname; and Jamaican Patois (Jamaican Creole) is the mother tongue of most Jamaicans.",
      questionData: {
        pairs: [
          { left: "Haitian Creole (Kreyòl)", right: "Haiti" },
          { left: "Papiamentu", right: "Curaçao, Aruba & Bonaire (ABC islands)" },
          { left: "Sranan Tongo", right: "Suriname" },
          { left: "Jamaican Patois", right: "Jamaica" },
        ],
      },
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q8",
      question: "What is the MOST effective long-term solution for serving multilingual patient populations in a Caribbean pharmacy?",
      options: [
        "Relying exclusively on Google Translate for all communications",
        "Hiring bilingual staff who reflect the linguistic diversity of the patient community",
        "Requiring all patients to learn English before filling prescriptions",
        "Only stocking medications with multilingual packaging",
      ],
      correctIndex: 1,
      explanation:
        "Hiring bilingual staff who reflect the linguistic diversity of the community is the most effective long-term solution for achieving language concordance. Technology can supplement but not replace human communication for clinical accuracy. Requiring patients to learn English is neither practical nor ethical.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m5-q9",
      question: "Place the following steps in the correct order for counselling a patient across a language barrier when no interpreter is available.",
      questionType: "ordering",
      options: [
        "Use any shared language phrases you know to establish communication",
        "Supplement verbal communication with pictograms and visual aids",
        "Write key numbers (dosage, frequency, duration) clearly on the label",
        "Use teach-back (even through gestures) to verify the patient understood",
      ],
      correctIndex: 0,
      explanation:
        "The correct order builds from verbal to visual to numerical to verification: (1) Use any shared language to connect, (2) Add pictograms to reinforce meaning, (3) Write key numbers clearly for universal understanding, (4) Verify through teach-back. This layered approach maximises comprehension when formal interpretation is unavailable.",
      questionData: {
        correct_order: [0, 1, 2, 3],
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q10",
      question: "True or false: Machine translation apps (e.g., Google Translate) can be reliably used as the sole means of communicating clinical medication information to non-English-speaking patients.",
      questionType: "true_false",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "False. Machine translation apps can assist with basic communication but must NEVER be the sole means of conveying clinical medication information. Translation errors in medical contexts can be dangerous. Always verify machine translations with a human native speaker and supplement with pictograms and written numbers.",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "evaluate",
    },
  ],
};

// ============================================================================
// MODULE 6 — Managing Difficult Conversations: Adherence, Stigma & Chronic Disease
// ============================================================================

const module6: Module = {
  id: "m6-difficult-conversations",
  number: 6,
  title: "Managing Difficult Conversations: Adherence, Stigma & Chronic Disease",
  description:
    "Not every pharmacy interaction is straightforward. This module prepares you for the conversations that many pharmacy professionals dread — discussing HIV medication, addressing mental health stigma, confronting non-adherence, and supporting patients with chronic disease fatigue. In the Caribbean, where stigma runs deep and chronic disease prevalence is high, these skills are essential.",
  learningObjectives: [
    "Identify the major stigmatised health conditions in the Caribbean and their impact on pharmacy interactions",
    "Apply destigmatisation techniques when dispensing medications for HIV, mental health, and sexually transmitted infections",
    "Analyse the root causes of medication non-adherence in Caribbean patients with chronic diseases",
    "Demonstrate empathetic confrontation techniques for addressing non-adherence without alienating patients",
    "Design pharmacy-level interventions to support long-term medication adherence for diabetes, hypertension, and HIV",
  ],
  lessons: [
    // ── Lesson 6.1 ──
    {
      id: "m6-l1",
      title: "HIV, Mental Health & Stigma in Caribbean Pharmacy",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Weight of Stigma in Caribbean Healthcare",
        },
        {
          type: "text",
          body: "Stigma kills. Not metaphorically — literally. In the Caribbean, stigma around HIV, mental illness, and other conditions causes patients to avoid testing, refuse treatment, hide their medications, and suffer in silence. The Caribbean has the second-highest HIV prevalence rate of any region outside sub-Saharan Africa, yet stigma remains one of the greatest barriers to treatment and viral suppression.",
        },
        {
          type: "text",
          body: "For pharmacy technicians, stigma manifests at the dispensing counter: the patient who whispers their request, the patient who sends someone else to collect their antiretrovirals, the patient who asks for a plain bag so no one sees the medication name, the patient who simply never fills the prescription at all. Recognising and addressing stigma is not a soft skill — it is a clinical skill that affects viral load, disease progression, and mortality.",
        },
        {
          type: "key-term",
          term: "Health-Related Stigma",
          definition:
            "A social process of devaluation, judgement, and discrimination directed toward individuals based on a health condition. In the Caribbean, particularly severe stigma is associated with HIV/AIDS, mental illness, sexually transmitted infections, and substance use disorders. Stigma operates at individual (self-stigma), interpersonal (social stigma), and institutional (systemic stigma) levels.",
        },
        {
          type: "table",
          caption: "Stigmatised Conditions in Caribbean Communities",
          headers: ["Condition", "Nature of Stigma", "Impact on Pharmacy Interactions", "Destigmatisation Strategy"],
          rows: [
            [
              "HIV/AIDS",
              "Association with promiscuity, homosexuality, and 'immorality'; fear of contagion",
              "Patients avoid collecting ARVs, skip refills, hide medications, request unmarked packaging",
              "Dispense ARVs with identical routine to all other medications; use private counselling areas; never announce medication names aloud",
            ],
            [
              "Mental illness",
              "'Madness' stigma; belief that mental illness is spiritual punishment or personal weakness",
              "Patients may refuse to collect psychiatric medications or claim they are for someone else",
              "Normalise mental health medication; use terms like 'mood medication' or 'sleep medication' if patient prefers; never question the prescription openly",
            ],
            [
              "Sexually transmitted infections",
              "Association with promiscuity; shame and secrecy",
              "Patients may avoid pharmacies where they are known; may not complete antibiotic courses due to embarrassment about refills",
              "Treat STI prescriptions identically to any other; offer discreet packaging; ensure full course dispensing with clear instructions",
            ],
            [
              "Substance use disorders",
              "Viewed as moral failure rather than medical condition",
              "Patients may be treated poorly by staff; may avoid pharmacy-based addiction services",
              "Treat with the same professionalism and respect as any patient; recognise addiction as a chronic medical condition",
            ],
            [
              "Erectile dysfunction",
              "Seen as threat to masculinity; embarrassment",
              "Patients, especially older men, may avoid filling prescriptions or request alternatives through informal channels",
              "Maintain a matter-of-fact professional demeanour; counsel in private; never make light of the condition",
            ],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "The 'Small Island' Amplifier",
          body: "Stigma is amplified exponentially in small island communities. In a town of 3,000 people, the pharmacy technician dispensing ARVs may be the patient's church member, their child's schoolmate's parent, or their neighbour. The fear that 'people will find out' is not paranoia — it is a realistic assessment of how information travels in small communities. This is why ABSOLUTE confidentiality is the single most important professional obligation in Caribbean pharmacy.",
        },
        {
          type: "heading",
          level: 3,
          text: "HIV in the Caribbean: The Numbers",
        },
        {
          type: "text",
          body: "The Caribbean has approximately 330,000 people living with HIV. The region has the second-highest HIV prevalence rate outside of sub-Saharan Africa. While antiretroviral therapy (ART) has transformed HIV from a death sentence to a manageable chronic condition, stigma remains the single greatest barrier to testing, treatment initiation, and adherence in the Caribbean. UNAIDS estimates that stigma-related treatment avoidance accounts for thousands of preventable deaths in the region annually.",
        },
        {
          type: "text",
          body: "Key populations disproportionately affected include men who have sex with men (MSM), sex workers, and transgender individuals — all of whom face compounded stigma in Caribbean societies where homosexuality remains criminalised in many jurisdictions. Pharmacy technicians must provide safe, non-judgemental service to all patients regardless of their identity or the nature of their prescription.",
        },
        {
          type: "knowledge-check",
          question: "A patient collecting antiretroviral medication asks you to put it in a plain, unmarked bag. What is the MOST appropriate response?",
          options: [
            "Refuse — all medications must be dispensed in pharmacy-branded bags",
            "Comply immediately and without question — this is a reasonable request that respects the patient's privacy and reduces stigma",
            "Ask why they want a plain bag in front of other customers",
            "Counsel them that they should not be ashamed of their medication",
          ],
          correctIndex: 1,
          explanation:
            "Providing unmarked packaging is a simple, zero-cost destigmatisation measure that respects the patient's privacy. In a Caribbean context where HIV stigma is severe and community visibility is high, this request is entirely reasonable. Questioning the request or counselling against 'shame' in the moment is inappropriate and may discourage the patient from returning.",
        },
      ],
    },
    // ── Lesson 6.2 ──
    {
      id: "m6-l2",
      title: "Medication Non-Adherence: Understanding the 'Why'",
      duration: "22 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Why Patients Do Not Take Their Medications",
        },
        {
          type: "text",
          body: "Non-adherence to prescribed medications is one of the greatest challenges in global healthcare, and the Caribbean is no exception. The WHO estimates that adherence to chronic disease medications averages just 50% worldwide. In the Caribbean, where chronic diseases (diabetes, hypertension, HIV) are leading causes of death and disability, non-adherence has devastating consequences.",
        },
        {
          type: "text",
          body: "It is tempting to label non-adherent patients as 'difficult' or 'non-compliant.' But this judgement is both unhelpful and usually wrong. Non-adherence is almost always a rational response to the patient's circumstances — when you understand the 'why,' you can address the root cause rather than repeating the same ineffective instruction.",
        },
        {
          type: "key-term",
          term: "Medication Non-Adherence",
          definition:
            "The failure to take medications as prescribed. This includes not filling prescriptions, skipping doses, taking incorrect doses, stopping medications prematurely, and taking medications at wrong times. It is categorised as intentional (conscious decision not to take) or unintentional (forgetting, misunderstanding, or inability to access).",
        },
        {
          type: "table",
          caption: "Root Causes of Non-Adherence in Caribbean Patients",
          headers: ["Category", "Specific Cause", "Caribbean Context", "Pharmacy Intervention"],
          rows: [
            [
              "Economic",
              "Cannot afford the medication",
              "Many Caribbean patients pay out-of-pocket; insurance coverage is limited outside government programmes",
              "Explore generic alternatives; check eligibility for CDAP (T&T), NHF (Jamaica), Drug Service (Barbados)",
            ],
            [
              "Knowledge",
              "Does not understand why the medication is needed",
              "40% of antihypertensive patients believe they can stop when they 'feel fine'",
              "Use STA counselling; develop discrepancy ('The tablet keeps your pressure down — it is working BECAUSE you take it')",
            ],
            [
              "Side effects",
              "Experiences unpleasant effects",
              "Caribbean patients may not report side effects, instead quietly stopping the medication",
              "Ask about side effects at every refill; offer management strategies; consult pharmacist about alternatives",
            ],
            [
              "Complexity",
              "Too many medications at too many different times",
              "Polypharmacy is common in elderly Caribbean patients with multiple chronic conditions",
              "Create simplified dosing schedules; use pictogram labels; suggest pill organisers",
            ],
            [
              "Cultural",
              "Prefers traditional remedies; distrust of 'foreign' medicine",
              "Bush medicine tradition provides a familiar, culturally endorsed alternative",
              "Integrate — do not oppose — traditional remedies; assess for interactions; negotiate combined approaches",
            ],
            [
              "Stigma",
              "Does not want to be seen taking the medication",
              "Particularly severe for HIV, mental health, and STI medications",
              "Discreet packaging; private dispensing; normalised routine",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Intentional vs. Unintentional Non-Adherence",
          body: "Unintentional non-adherence (forgetting, confusion, physical inability) responds well to practical solutions: reminders, simplified regimens, pill organisers. Intentional non-adherence (choosing not to take, stopping due to beliefs or side effects) requires motivational interviewing and patient-centred counselling. The pharmacy technician must determine which type they are dealing with before intervening.",
        },
        {
          type: "text",
          body: "In the Caribbean, economic barriers deserve special attention. Unlike many developed countries where insurance covers most prescription costs, many Caribbean patients pay fully or partially out-of-pocket. When a patient must choose between buying their blood pressure medication and buying food for their family, the medication often loses. Understanding this reality — and being prepared to explore cost-reducing alternatives — is essential for any Caribbean pharmacy professional.",
        },
        {
          type: "knowledge-check",
          question: "A patient tells you he stopped his statin medication because 'it was giving him muscle pain.' This is an example of:",
          options: [
            "Unintentional non-adherence — he forgot to take it",
            "Intentional non-adherence due to side effects — a rational response to an unpleasant experience",
            "Medication abuse",
            "Patient non-compliance due to laziness",
          ],
          correctIndex: 1,
          explanation:
            "This is intentional non-adherence driven by side effects. The patient made a conscious, rational decision to stop a medication that was causing him pain. The appropriate response is to validate his experience ('Muscle pain is a known side effect of statins'), consult the pharmacist about alternative statins or dose adjustments, and work with him to find a tolerable option — not to lecture about compliance.",
        },
      ],
    },
    // ── Lesson 6.3 ──
    {
      id: "m6-l3",
      title: "Supporting Patients with Diabetes, Hypertension & Chronic Disease Fatigue",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Long Game: When Patients Get Tired of Being Patients",
        },
        {
          type: "text",
          body: "Chronic diseases require chronic treatment — and that is precisely the problem. Taking medication every day, for the rest of your life, for a condition that often produces no symptoms, tests the patience and motivation of even the most committed patient. In the Caribbean, where diabetes and hypertension are epidemic (some estimates suggest 30-40% of adults over 40 have one or both), chronic disease fatigue is a major driver of non-adherence and, ultimately, premature death.",
        },
        {
          type: "key-term",
          term: "Chronic Disease Fatigue",
          definition:
            "The psychological exhaustion, frustration, and loss of motivation that patients experience from the relentless demands of managing a long-term health condition. It manifests as dose skipping, appointment avoidance, dietary lapses, and emotional burnout. It is distinct from depression (though they can co-occur) and is a normal response to the burden of chronic illness.",
        },
        {
          type: "table",
          caption: "Diabetes and Hypertension in the Caribbean: Key Statistics",
          headers: ["Statistic", "Diabetes", "Hypertension"],
          rows: [
            [
              "Caribbean prevalence (adults)",
              "12-15% (among the highest globally)",
              "25-35% (some islands exceed 40%)",
            ],
            [
              "Leading cause of death contribution",
              "Top 5 cause of death in most Caribbean nations",
              "Leading risk factor for stroke and heart disease — the #1 killer in the region",
            ],
            [
              "Medication adherence rate",
              "Estimated 40-60% in the Caribbean",
              "Estimated 40-50% in the Caribbean",
            ],
            [
              "Key pharmacy challenge",
              "Insulin storage (cold chain), multiple daily doses, blood glucose monitoring",
              "'Feel fine' misconception — asymptomatic patients stop medications",
            ],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Pharmacy-Level Adherence Support Strategies",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Medication synchronisation (Med Sync): Align all of a patient's chronic medication refills to the same date, reducing pharmacy visits from multiple per month to one",
            "Pill organisers and blister packs: Pre-sort medications by day and time to simplify complex regimens — particularly valuable for elderly patients on 5+ medications",
            "Refill reminders: Phone calls, text messages, or WhatsApp reminders 3 days before a refill is due — WhatsApp is the most effective channel in the Caribbean",
            "Blood pressure and blood glucose screening at the pharmacy: Free screening builds the patient's engagement with their condition and creates a natural conversation about adherence",
            "Celebrate milestones: Acknowledge when a patient has been adherent for 6 months, 1 year, etc. — 'Mrs. James, you have been keeping up with your medication perfectly for a year now. Your dedication is really impressive.'",
            "Address the 'feel fine' myth at every opportunity: 'High blood pressure does not give you a headache — it gives you a stroke. The fact that you feel fine means the medication is WORKING, not that you do not need it.'",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "WhatsApp as an Adherence Tool",
          body: "WhatsApp is the dominant communication platform across the Caribbean. With patient consent, a pharmacy can use WhatsApp for refill reminders, adherence check-ins, and basic health education messaging. A simple 'Good morning! Your blood pressure medication is due for refill. Would you like us to prepare it for collection today?' can significantly improve refill rates. Always obtain written consent and maintain confidentiality — never include medication names in group messages.",
        },
        {
          type: "case-study",
          title: "Case Study: Chronic Disease Fatigue in Real Life",
          scenario:
            "Patricia, 56, has had type 2 diabetes for 12 years and hypertension for 8 years. She takes metformin 1000 mg BID, gliclazide 60 mg daily, amlodipine 10 mg daily, and atorvastatin 20 mg daily. At her pharmacy visit today, she tells you: 'I tired of all these tablets. Every day, morning time, evening time, tablets tablets tablets. Sometimes I just skip the whole thing for a few days. I feel fine — maybe I don't even need them anymore.'",
          questions: [
            "What signs of chronic disease fatigue is Patricia displaying?",
            "How would you respond using motivational interviewing techniques?",
            "What practical interventions could your pharmacy offer to reduce her medication burden?",
          ],
          discussion:
            "Patricia is displaying classic chronic disease fatigue: frustration with the medication burden, 'pill fatigue,' the 'feel fine' misconception, and intermittent intentional non-adherence. Response: Express empathy ('I hear you — taking tablets every single day is exhausting. Your frustration is completely valid.'). Develop discrepancy ('You told me last year that your biggest fear is losing your sight like your mother did from diabetes. These tablets are protecting your eyes, kidneys, and heart every single day.'). Practical interventions: Med Sync (align all refills), pill organiser, explore whether any medications can be consolidated (e.g., combination tablets), and ensure she has the simplest possible regimen. Celebrate her 12 years of management.",
        },
        {
          type: "knowledge-check",
          question: "A hypertensive patient says: 'My blood pressure is normal now, so I stopped the tablet.' What is the critical misconception, and how should you respond?",
          options: [
            "The patient is correct — once blood pressure normalises, medication can be stopped",
            "The blood pressure is normal BECAUSE of the medication; stopping it will cause blood pressure to rise again, increasing stroke and heart attack risk",
            "Tell the patient to ask their doctor — this is outside your scope",
            "Agree with the patient to avoid conflict",
          ],
          correctIndex: 1,
          explanation:
            "This is the 'feel fine' misconception — one of the most dangerous beliefs in chronic disease management. Blood pressure is controlled because the medication is working. Stopping it causes blood pressure to rebound, often to dangerous levels. The analogy is: 'The medication is like a dam holding back the water. Remove the dam and the river floods.' This is within your scope to address — it is medication counselling, not clinical diagnosis.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m6-q1",
      question: "The Caribbean has the second-highest HIV prevalence rate of any region outside of which area?",
      options: [
        "Southeast Asia",
        "Eastern Europe",
        "Sub-Saharan Africa",
        "Central America",
      ],
      correctIndex: 2,
      explanation:
        "The Caribbean has the second-highest HIV prevalence rate globally, after sub-Saharan Africa. With approximately 330,000 people living with HIV in the region, the pharmacy's role in destigmatised ARV dispensing and adherence support is critical.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q2",
      question: "A patient requests that their HIV medication be placed in a plain, unmarked bag. What should you do?",
      options: [
        "Refuse — pharmacy policy requires branded bags",
        "Comply without question — this is a legitimate privacy request",
        "Ask why they want a plain bag so you can address their stigma",
        "Tell them there is no shame in taking HIV medication",
      ],
      correctIndex: 1,
      explanation:
        "Providing unmarked packaging is a simple destigmatisation measure that costs nothing and respects the patient's privacy. In the Caribbean context, where HIV stigma is severe and community visibility is high, this request is entirely reasonable and should be fulfilled without interrogation or unsolicited counselling about stigma.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q3",
      question: "What is the global average medication adherence rate for chronic diseases, according to the WHO?",
      options: [
        "About 25%",
        "About 50%",
        "About 75%",
        "About 90%",
      ],
      correctIndex: 1,
      explanation:
        "The WHO estimates that adherence to chronic disease medications averages just 50% worldwide. This means half of all patients are not taking their chronic medications as prescribed, making non-adherence one of the greatest challenges in global healthcare.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q4",
      question: "A patient stopped their statin due to muscle pain. This is an example of:",
      options: [
        "Unintentional non-adherence",
        "Intentional non-adherence driven by side effects",
        "Medication abuse",
        "Drug diversion",
      ],
      correctIndex: 1,
      explanation:
        "Stopping a medication due to experienced side effects is intentional non-adherence — a conscious, rational decision. The appropriate response is to validate the patient's experience, explore the severity and nature of the side effects, and consult the pharmacist about alternatives or management strategies rather than simply insisting on compliance.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q5",
      question: "Which communication platform is MOST effective for medication refill reminders in the Caribbean?",
      options: [
        "Email",
        "Traditional postal mail",
        "WhatsApp",
        "Fax",
      ],
      correctIndex: 2,
      explanation:
        "WhatsApp is the dominant communication platform across the Caribbean, with near-universal adoption. It is the most effective channel for refill reminders, adherence check-ins, and basic health communication. Always obtain patient consent and never include medication names in group messages.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q6",
      question: "A patient says: 'My blood pressure is normal now so I do not need the tablets anymore.' Which analogy BEST addresses this misconception?",
      options: [
        "'You just need to eat better and exercise more'",
        "'The medication is like a dam holding back the river — remove the dam and the water floods. Your BP is normal BECAUSE of the tablet.'",
        "'The doctor says you must take it, so take it.'",
        "'You probably never had high blood pressure in the first place.'",
      ],
      correctIndex: 1,
      explanation:
        "The dam analogy effectively communicates that the medication is actively controlling blood pressure, not curing it. Removing the 'dam' (medication) allows the 'river' (blood pressure) to 'flood' (rebound dangerously). Analogies grounded in familiar concepts are far more persuasive than authority-based arguments ('the doctor says so').",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q7",
      question: "Match each type of non-adherence with its most appropriate pharmacy intervention.",
      questionType: "matching",
      options: [
        "Forgets doses (unintentional)",
        "Cannot afford medication (economic)",
        "Side effects causing discontinuation (intentional)",
        "Feels well so stops medication (belief-based)",
      ],
      correctIndex: 0,
      explanation:
        "Forgetting responds to reminders and pill organisers; economic barriers need generic alternatives and government programme enrollment; side effects need pharmacist consultation on alternatives; and the 'feel fine' misconception needs motivational interviewing using the discrepancy technique.",
      questionData: {
        pairs: [
          { left: "Forgets doses (unintentional)", right: "Pill organisers, WhatsApp reminders, medication synchronisation" },
          { left: "Cannot afford medication (economic)", right: "Generic alternatives, CDAP/NHF programme enrollment" },
          { left: "Side effects causing discontinuation (intentional)", right: "Pharmacist consultation on dose adjustment or alternative medications" },
          { left: "Feels well so stops medication (belief-based)", right: "Motivational interviewing — develop discrepancy between behaviour and health goals" },
        ],
      },
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
    {
      id: "m6-q8",
      question: "What is chronic disease fatigue?",
      options: [
        "Physical tiredness caused by chronic disease",
        "Psychological exhaustion and loss of motivation from the relentless demands of managing a long-term health condition",
        "A side effect of chronic disease medications",
        "A rare neurological condition affecting chronic disease patients",
      ],
      correctIndex: 1,
      explanation:
        "Chronic disease fatigue is the psychological exhaustion, frustration, and motivation loss that comes from managing a lifelong condition day after day. It manifests as dose skipping, appointment avoidance, and emotional burnout. It is a normal response to chronic illness burden, distinct from clinical depression though they can co-occur.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q9",
      question: "Estimated medication adherence rates for diabetes and hypertension in the Caribbean are:",
      options: [
        "Over 90%",
        "About 70-80%",
        "About 40-60%",
        "Under 20%",
      ],
      correctIndex: 2,
      explanation:
        "Medication adherence for both diabetes and hypertension in the Caribbean is estimated at 40-60%, meaning up to 60% of patients are not taking their medications as prescribed. This alarming rate contributes directly to the region's high burden of stroke, kidney failure, blindness, and cardiovascular death.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q10",
      question: "True or false: Dispensing ARV medications should follow a different, more discreet routine than dispensing blood pressure medications to reduce stigma.",
      questionType: "true_false",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "False. The most effective destigmatisation strategy is to dispense ALL medications with identical routine, professionalism, and demeanour. Creating a special, more discreet process for ARVs actually reinforces stigma by singling them out as 'different.' The goal is normalisation — treating ARV dispensing as unremarkable and routine as any other medication.",
      questionData: {
        correct_answer: false,
      },
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
  ],
};

// ============================================================================
// MODULE 7 — Patient Rights, Informed Consent & Privacy in Pharmacy
// ============================================================================

const module7: Module = {
  id: "m7-patient-rights-privacy",
  number: 7,
  title: "Patient Rights, Informed Consent & Privacy in Pharmacy",
  description:
    "Every patient who enters your pharmacy has legal and ethical rights that you must protect. This module covers patient rights to information, informed consent for pharmaceutical services, and the critical importance of privacy and confidentiality in the unique context of small Caribbean island communities.",
  learningObjectives: [
    "Enumerate the fundamental rights of patients in Caribbean pharmacy practice",
    "Apply the principles of informed consent to pharmacy services including counselling and screening",
    "Analyse confidentiality challenges unique to small Caribbean island communities",
    "Evaluate pharmacy policies and physical environments for privacy compliance",
    "Design confidentiality protocols appropriate for a Caribbean community pharmacy",
  ],
  lessons: [
    // ── Lesson 7.1 ──
    {
      id: "m7-l1",
      title: "Patient Rights in Caribbean Pharmacy",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Rights That Cannot Be Dispensed Away",
        },
        {
          type: "text",
          body: "Every person who enters a pharmacy is entitled to certain fundamental rights — regardless of their condition, background, ability to pay, or social status. These rights are enshrined in various Caribbean health legislation, professional codes of conduct, and international declarations. As a pharmacy technician, understanding and upholding these rights is not optional — it is the bedrock of professional practice.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Right to information: Patients have the right to receive complete, accurate, and understandable information about their medications, including benefits, risks, side effects, and alternatives",
            "Right to refuse treatment: Patients have the right to decline any medication or pharmaceutical service, even if the healthcare team disagrees with their decision",
            "Right to privacy: Patients have the right to have their health information kept confidential and to receive pharmaceutical services in a private setting",
            "Right to respect: Patients have the right to be treated with dignity, regardless of their condition, background, or ability to pay",
            "Right to access: Patients have the right to access pharmaceutical services without discrimination based on race, gender, religion, sexual orientation, or health status",
            "Right to continuity of care: Patients have the right to consistent, reliable access to their medications, including during emergencies and transitions between healthcare settings",
            "Right to complain: Patients have the right to raise concerns about pharmaceutical services without fear of retaliation or reduced quality of care",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Right to Refuse — Even When It Frustrates You",
          body: "When a patient refuses a medication you know they need, it can be deeply frustrating. Mrs. Doreen refusing metformin, Mr. Desmond skipping atenolol on weekends, a Rastafarian patient declining all pharmaceutical medications — these decisions may seem irrational to you. But patient autonomy is absolute. You can inform, educate, and counsel. You cannot coerce. Document the counselling provided and the patient's decision, and ensure they know they can return at any time.",
        },
        {
          type: "key-term",
          term: "Patient Autonomy",
          definition:
            "The right of patients to make informed decisions about their own healthcare, including the right to accept or refuse treatment. It is considered one of the four fundamental principles of medical ethics (alongside beneficence, non-maleficence, and justice). In pharmacy, patient autonomy means providing information and counselling, then respecting the patient's decision.",
        },
        {
          type: "island-comparison",
          title: "Patient Rights Frameworks Across the Caribbean",
          description:
            "While the principles are universal, the legal frameworks vary by jurisdiction.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Patients' Charter of Trinidad & Tobago outlines rights and responsibilities in healthcare",
                "Pharmacy Board Act (Chapter 29:52) governs pharmacy practice and professional conduct",
                "Data Protection Act (2011) provides a legal framework for health data privacy",
                "No standalone patient consent legislation — consent is governed by common law principles",
                "Regional Health Authorities have their own patient rights policies for public pharmacies",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Jamaican Patients' Charter establishes rights including informed consent and confidentiality",
                "Pharmacy Act (1975, amended) and Pharmacy Council Code of Ethics govern professional standards",
                "Access to Information Act provides a framework for health record access",
                "No comprehensive data protection legislation as of 2024, though draft bills have been tabled",
                "Professional ethics codes fill the gap where legislation is pending",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Barbados Patients' Bill of Rights applies across public health facilities",
                "Pharmacy Act (Cap. 372D) and Drug Service regulations govern pharmaceutical services",
                "Data Protection Act (2019) establishes comprehensive data privacy protections including health data",
                "Queen Elizabeth Hospital and polyclinics have documented patient rights and complaint procedures",
                "Strong professional ethics tradition through the Pharmaceutical Society of Barbados",
              ],
            },
          ],
        },
        {
          type: "text",
          body: "In the Caribbean, where many patients rely on the pharmacy as their primary healthcare touchpoint, upholding patient rights carries additional weight. The pharmacy may be the only place where a patient receives health information, where their concerns are heard, and where their dignity as a healthcare consumer is either upheld or undermined. Every pharmacy technician is a guardian of these rights.",
        },
        {
          type: "knowledge-check",
          question: "A patient refuses to take their prescribed anticoagulant after you have thoroughly counselled them on its importance. What is the correct course of action?",
          options: [
            "Refuse to serve the patient until they agree to take the medication",
            "Call the patient's doctor without the patient's consent to report their non-compliance",
            "Document the counselling provided and the patient's informed decision to refuse, and ensure they know they can return at any time",
            "Dispense the medication anyway and tell the family to ensure the patient takes it",
          ],
          correctIndex: 2,
          explanation:
            "Patient autonomy is absolute — after informed counselling, the patient has the right to refuse any medication. The technician should document the counselling provided and the patient's decision, inform the pharmacist, and ensure the patient knows they can return if they change their mind. Coercion, secret reporting, or dispensing without consent all violate patient rights.",
        },
      ],
    },
    // ── Lesson 7.2 ──
    {
      id: "m7-l2",
      title: "Informed Consent in Pharmacy Practice",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Consent: More Than a Signature",
        },
        {
          type: "text",
          body: "Informed consent in pharmacy is not just about getting a patient to sign a form. It is the ethical and legal process of ensuring that a patient understands what is being done, why it is being done, what the alternatives are, and what the risks and benefits are — and then freely choosing to proceed. While formal written consent is typically required for clinical trials and some pharmacy-led services (vaccinations, point-of-care testing), implied consent operates in most routine dispensing interactions.",
        },
        {
          type: "key-term",
          term: "Informed Consent",
          definition:
            "The process by which a patient is provided with sufficient information about a proposed treatment, service, or intervention — including its purpose, benefits, risks, and alternatives — to make a voluntary, informed decision about whether to proceed. Valid consent requires three elements: the patient must have capacity, the consent must be voluntary, and the patient must be adequately informed.",
        },
        {
          type: "table",
          caption: "Elements of Valid Informed Consent in Pharmacy",
          headers: ["Element", "Meaning", "Pharmacy Example"],
          rows: [
            [
              "Capacity",
              "The patient has the mental ability to understand the information and make a decision",
              "An elderly patient with dementia may not have capacity to consent to a complex medication change — involve the designated caregiver",
            ],
            [
              "Voluntariness",
              "The consent is given freely, without coercion or undue influence",
              "A patient should never feel pressured to accept a pharmacy service because they 'owe' the pharmacist for free advice",
            ],
            [
              "Information",
              "Sufficient information has been provided for the patient to make an informed choice",
              "Before administering a flu vaccine, explain the benefits, possible side effects (soreness, mild fever), alternatives (not vaccinating), and when to seek help",
            ],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "When Is Formal Written Consent Required?",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Pharmacy-administered vaccinations (where authorised by jurisdiction)",
            "Point-of-care testing services (blood glucose, blood pressure screening programmes with data recording)",
            "Participation in pharmacy-led research or clinical trials",
            "Enrolment in medication therapy management (MTM) programmes",
            "Telepharmacy or remote dispensing services",
            "Sharing of patient health information with third parties (insurers, other healthcare providers)",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Implied Consent in Routine Dispensing",
          body: "When a patient presents a prescription and waits for it to be filled, they are providing implied consent to the dispensing service. However, implied consent has limits. It covers routine dispensing and basic counselling. It does NOT cover sharing their information with others, enrolling them in programmes, or performing additional services beyond what they requested. When in doubt, ask.",
        },
        {
          type: "text",
          body: "In the Caribbean, consent is often informal and based on trust relationships. A patient who has been visiting the same pharmacy for 20 years may never have been formally consented for anything. This trust is valuable but must not be taken for granted. As pharmacy services expand — into vaccinations, screening, and chronic disease management — formal consent processes become increasingly important.",
        },
        {
          type: "knowledge-check",
          question: "Which of the following pharmacy services typically requires formal written informed consent?",
          options: [
            "Dispensing a routine antibiotic prescription",
            "Providing basic medication counselling at the counter",
            "Administering a flu vaccination in the pharmacy",
            "Selling an OTC pain reliever",
          ],
          correctIndex: 2,
          explanation:
            "Pharmacy-administered vaccinations require formal written informed consent because they involve a clinical procedure (injection), carry specific risks (allergic reaction, side effects), and involve a service beyond routine dispensing. Routine dispensing and OTC sales operate on implied consent.",
        },
      ],
    },
    // ── Lesson 7.3 ──
    {
      id: "m7-l3",
      title: "Privacy & Confidentiality: The 'Everybody Know Everybody' Challenge",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Confidentiality in Communities Where There Are No Strangers",
        },
        {
          type: "text",
          body: "Nowhere in the world is pharmacy confidentiality more challenging — or more important — than in small Caribbean island communities. In a village of 2,000 people, the pharmacy technician dispensing medications may know every patient personally. They may attend the same church, send their children to the same school, shop at the same market, and socialise at the same events. In this environment, maintaining absolute confidentiality is both critically important and exceptionally difficult.",
        },
        {
          type: "text",
          body: "Breaches of pharmacy confidentiality in small communities can have devastating consequences. A patient's HIV status becoming public knowledge can lead to social isolation, family rejection, loss of employment, and even violence. A patient's mental health medication being disclosed can result in stigma that affects their children's social standing. In the Caribbean, a breach of confidentiality is not just a professional failing — it can destroy a life.",
        },
        {
          type: "key-term",
          term: "Pharmacy Confidentiality",
          definition:
            "The ethical and legal obligation to protect all patient health information encountered during pharmacy practice, including but not limited to: diagnoses, medications prescribed, medication history, health conditions, personal details, and any information shared during counselling interactions. This obligation applies to all pharmacy staff and continues indefinitely — even after the staff member leaves the pharmacy or the patient stops visiting.",
        },
        {
          type: "table",
          caption: "Confidentiality Challenges Specific to Small Caribbean Communities",
          headers: ["Challenge", "Scenario", "Protocol"],
          rows: [
            [
              "Personal relationships",
              "You are dispensing ARVs to your neighbour who you see every day",
              "Treat every prescription as strictly professional. Do not change your social behaviour toward the patient. NEVER reference their health in any social context.",
            ],
            [
              "Gossip culture",
              "A colleague says: 'You would never guess who I just dispensed for...'",
              "Stop the conversation immediately. Report the breach to the pharmacist. This is a terminable offence.",
            ],
            [
              "Family inquiries",
              "A patient's mother calls asking what medication her adult child is taking",
              "Decline to provide any information without the patient's explicit consent, regardless of family relationship. 'I am sorry, I cannot share patient information without their permission.'",
            ],
            [
              "Third-party observation",
              "A customer recognises the medication being dispensed to the patient in front of them",
              "Use private dispensing areas. Call patients by number. Keep medication packaging face-down on the counter.",
            ],
            [
              "Social media",
              "A pharmacy staff member posts a photo from inside the pharmacy showing patient names on prescriptions in the background",
              "Zero tolerance policy. No photography inside the dispensary. No social media posts that could identify patients.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Confidentiality Is ABSOLUTE — No Exceptions",
          body: "There is no 'small' breach of confidentiality. Telling your spouse that a particular person came to the pharmacy today IS a breach. Adjusting your social behaviour toward someone after learning their health status IS a breach. Even confirming that someone IS a patient at your pharmacy is a breach if the person asking does not have authorisation. In the Caribbean, where information travels at the speed of village gossip, every word matters.",
        },
        {
          type: "heading",
          level: 3,
          text: "Designing a Privacy-Compliant Pharmacy Environment",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Private counselling area: A separate, enclosed space away from the main counter where sensitive conversations can occur without being overheard",
            "Ticketing system: Call patients by number rather than name to avoid announcing who is being served",
            "Prescription facing: Keep prescription labels and medication packaging face-down on counters to prevent other customers from reading them",
            "Computer screen privacy: Use privacy filters on dispensary screens to prevent patients from seeing other patients' records",
            "Conversation volume: Train all staff to keep pharmacy conversations at appropriate volume — a whispered conversation may actually attract more attention than a normal-volume one",
            "Sealed dispensing bags: Use opaque bags so medication names are not visible when patients leave the pharmacy",
            "Confidentiality agreements: All staff, including cleaners, delivery drivers, and temporary staff, must sign confidentiality agreements",
          ],
        },
        {
          type: "scenario-simulation",
          title: "Confidentiality Decision Simulator",
          description: "Navigate the complex confidentiality challenges that arise in a small Caribbean island pharmacy.",
          nodes: [
            {
              id: "start",
              text: "You are working at the only pharmacy in a small Tobago village (population 3,500). Mrs. Charles, a well-known community figure, comes to collect a new prescription. You recognise the medication as an antidepressant. As you prepare it, her son — who you know works as a teacher at the local school — calls the pharmacy and asks: 'My mother came in today. What medication did the doctor prescribe for her?' What do you do?",
              choices: [
                {
                  label: "Tell the son — he is her family and is probably concerned about her health",
                  nextNodeId: "told-son",
                  feedback: "Mrs. Charles is an adult. You cannot disclose her medication without her explicit consent, regardless of the caller's relationship.",
                },
                {
                  label: "Politely decline: 'I am sorry, I cannot share patient information without their direct permission. You should ask your mother directly.'",
                  nextNodeId: "declined-son",
                  feedback: "Correct. You protected Mrs. Charles's confidentiality while redirecting the son to an appropriate source — his mother.",
                  isOptimal: true,
                },
                {
                  label: "Confirm she visited but refuse to name the medication",
                  nextNodeId: "partial-breach",
                  feedback: "Even confirming that Mrs. Charles visited the pharmacy is a breach of confidentiality. The son may deduce she is on a new medication, which could lead to further probing.",
                },
              ],
            },
            {
              id: "told-son",
              text: "The son tells his wife, who mentions it at a PTA meeting. Within a week, the entire village knows Mrs. Charles is 'on tablets for she head.' She stops taking the medication, her depression worsens, and she withdraws from community life. She files a complaint with the Pharmacy Board.",
              isEnd: true,
              outcome: "failure",
              summary: "Family relationship does not equal authorisation. An adult patient's medication information can ONLY be shared with their explicit consent. This breach destroyed Mrs. Charles's trust, her treatment, and potentially your career.",
            },
            {
              id: "declined-son",
              text: "Good. Mrs. Charles collects her prescription and thanks you for being professional. The next day, you see Mrs. Charles at the market. She waves and smiles. Your colleague at the pharmacy says to you: 'Mrs. Charles looked upset yesterday when she came in. What was wrong with her?' How do you respond?",
              choices: [
                {
                  label: "'She is fine — just a routine prescription.' (Minimise to end the conversation)",
                  nextNodeId: "minimise",
                  feedback: "Even confirming that Mrs. Charles visited and characterising her visit as 'routine' is sharing patient information. You revealed she has a prescription and that you assessed it as routine.",
                },
                {
                  label: "'I cannot discuss any patient's visit or prescription — you know the rules.'",
                  nextNodeId: "success",
                  feedback: "Perfect. You shut down the gossip immediately and reminded your colleague of their professional obligations.",
                  isOptimal: true,
                },
              ],
            },
            {
              id: "partial-breach",
              text: "The son now knows his mother visited the pharmacy for a new medication. He confronts her at home: 'What tablet you taking now? What wrong with you?' Mrs. Charles feels her privacy was violated — you confirmed information she did not want shared. She considers changing pharmacies, but there is no other pharmacy in the village.",
              isEnd: true,
              outcome: "partial",
              summary: "Even confirming a patient visit is a breach of confidentiality. The correct response is to neither confirm nor deny, and redirect the inquirer to speak with the patient directly.",
            },
            {
              id: "minimise",
              text: "Your colleague mentions at lunch that Mrs. Charles was in with 'a routine prescription.' Another staff member, who knows Mrs. Charles's daughter, casually mentions it. The information reaches Mrs. Charles's church group by Sunday. While no one knows the specific medication, the knowledge that she is 'on something new' generates speculation.",
              isEnd: true,
              outcome: "partial",
              summary: "There is no such thing as a harmless or 'minor' disclosure. Even characterising a visit as 'routine' reveals that there was a visit and a prescription. In small communities, even this minimal information can trigger a gossip chain.",
            },
            {
              id: "success",
              text: "Your colleague respects the boundary. Mrs. Charles continues to visit the pharmacy, trusts the team with her health, and takes her antidepressant consistently. At her three-month check-up, her depression has improved significantly. She tells you: 'Thank you for being a safe place. I could not manage this without knowing my business stays between us.'",
              isEnd: true,
              outcome: "success",
              summary: "Absolute confidentiality — even in the face of well-meaning curiosity from colleagues and family — is the foundation of patient trust. In small communities, this trust is the pharmacy's most valuable asset.",
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "A patient's spouse calls the pharmacy asking what medications their partner is taking. The patient has NOT given consent for information sharing. What should you do?",
          options: [
            "Provide the information — spouses have a right to know",
            "Provide the information only if the spouse sounds concerned",
            "Politely decline and advise the spouse to ask the patient directly",
            "Read the medication names but refuse to explain what they are for",
          ],
          correctIndex: 2,
          explanation:
            "Patient health information cannot be shared with anyone — including spouses, parents of adult children, or other family members — without the patient's explicit consent. The correct response is to politely decline and redirect the caller to speak with the patient directly. Being a spouse does not confer automatic access to health information.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m7-q1",
      question: "Which of the following is a fundamental right of patients in Caribbean pharmacy practice?",
      options: [
        "The right to receive any medication they request without a prescription",
        "The right to receive complete, accurate, and understandable information about their medications",
        "The right to have their prescriptions filled for free",
        "The right to override the pharmacist's clinical judgement",
      ],
      correctIndex: 1,
      explanation:
        "The right to information is fundamental: patients are entitled to receive complete, accurate, and understandable information about their medications, including benefits, risks, side effects, and alternatives. This right underpins informed consent and patient autonomy.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q2",
      question: "What are the three elements required for valid informed consent?",
      options: [
        "Payment, signature, and witness",
        "Capacity, voluntariness, and adequate information",
        "Age, literacy, and legal status",
        "Diagnosis, prognosis, and treatment",
      ],
      correctIndex: 1,
      explanation:
        "Valid informed consent requires: (1) Capacity — the patient can understand the information and make a decision; (2) Voluntariness — the consent is freely given without coercion; (3) Information — sufficient information has been provided for an informed choice. All three elements must be present for consent to be valid.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q3",
      question: "A patient's adult daughter calls the pharmacy asking what medications her elderly mother takes. The mother has NOT given consent. What is the correct response?",
      options: [
        "Provide the information — daughters should know what their mothers take",
        "Provide the information but ask the daughter to keep it confidential",
        "Politely decline and advise the daughter to ask her mother directly or visit with her mother's written consent",
        "Provide only the medication names but not the dosages",
      ],
      correctIndex: 2,
      explanation:
        "Patient confidentiality cannot be breached based on family relationship alone. Without the patient's explicit consent, no information can be shared — even with close family members. The daughter should be directed to speak with her mother or to visit the pharmacy with her mother's written consent.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m7-q4",
      question: "In a small Caribbean island pharmacy, which of the following is NOT a recommended privacy measure?",
      options: [
        "Using a ticketing system to call patients by number",
        "Installing privacy filters on dispensary computer screens",
        "Announcing the patient's full name and medication aloud at the counter",
        "Providing a private counselling area for sensitive discussions",
      ],
      correctIndex: 2,
      explanation:
        "Announcing a patient's name and medication aloud at the counter is a major privacy violation, not a privacy measure. In small communities where customers know each other, this can instantly disclose a patient's health condition to bystanders. Recommended measures include ticketing systems, screen privacy filters, and private counselling areas.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q5",
      question: "A colleague whispers to you during shift: 'You will never guess who just picked up antidepressants.' What should you do?",
      options: [
        "Listen quietly — it is just workplace conversation",
        "Stop the conversation immediately and report the breach to the pharmacist — this is a serious confidentiality violation",
        "Ask for more details so you can provide better care next time",
        "Tell the colleague to whisper more quietly so patients do not hear",
      ],
      correctIndex: 1,
      explanation:
        "Sharing any patient's prescription information with colleagues outside of a clinical need is a breach of confidentiality and should be treated as a serious professional misconduct issue. The conversation must be stopped immediately and reported to the supervising pharmacist. This is potentially a terminable offence.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m7-q6",
      question: "When does the obligation of pharmacy confidentiality expire?",
      options: [
        "When the patient stops visiting the pharmacy",
        "When the staff member leaves the pharmacy's employment",
        "After five years",
        "Never — the obligation continues indefinitely",
      ],
      correctIndex: 3,
      explanation:
        "The obligation of confidentiality is lifelong. It does not expire when the patient stops visiting, when the staff member changes jobs, or after any period of time. Health information learned during pharmacy practice must be kept confidential permanently.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q7",
      question: "Which Caribbean territory has a comprehensive Data Protection Act (2019) that includes health data protections?",
      options: [
        "Jamaica",
        "Guyana",
        "Barbados",
        "Dominica",
      ],
      correctIndex: 2,
      explanation:
        "Barbados enacted a comprehensive Data Protection Act in 2019 that establishes data privacy protections including for health data. Trinidad & Tobago has a Data Protection Act from 2011. Jamaica, as of 2024, does not yet have comprehensive data protection legislation, though draft bills have been tabled.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q8",
      question: "Patient autonomy means:",
      options: [
        "The patient can do whatever they want in the pharmacy",
        "The patient has the right to make informed decisions about their own healthcare, including refusing treatment",
        "The pharmacist has autonomous authority over patient care",
        "The patient does not need any professional guidance",
      ],
      correctIndex: 1,
      explanation:
        "Patient autonomy is the right to make informed decisions about one's own healthcare, including the right to refuse treatment after being fully informed. It does not mean unlimited freedom within the pharmacy or absence of professional guidance — it means the final decision rests with the informed patient.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q9",
      question: "Place the following confidentiality responses in order from MOST appropriate to LEAST appropriate when a family member calls asking about a patient's medication.",
      questionType: "ordering",
      options: [
        "Politely decline and redirect: 'I cannot share patient information. Please ask them directly.'",
        "Confirm the patient visited but refuse to name the medication",
        "Tell the caller the medication name because they are family",
        "Post the patient's medication list on social media",
      ],
      correctIndex: 0,
      explanation:
        "The correct order from most to least appropriate: (1) Declining and redirecting is the only fully correct response; (2) Confirming a visit is a partial breach — better than naming medications but still inappropriate; (3) Sharing medication names without consent is a clear breach; (4) Social media posting is an egregious, potentially criminal breach.",
      questionData: {
        correct_order: [0, 1, 2, 3],
      },
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m7-q10",
      question: "True or false: Even confirming that a person IS a patient at your pharmacy (without sharing any medication details) is a breach of confidentiality.",
      questionType: "true_false",
      options: ["True", "False"],
      correctIndex: 0,
      explanation:
        "True. Confirming that someone is a patient at your pharmacy reveals health-related information — that they are receiving pharmaceutical services. In a small Caribbean community, this alone can trigger speculation and gossip. The correct response to any third-party inquiry is to neither confirm nor deny and redirect them to speak with the person directly.",
      questionData: {
        correct_answer: true,
      },
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m7-q11",
      question: "Which of the following pharmacy services requires formal written informed consent rather than implied consent?",
      options: [
        "Dispensing a repeat prescription",
        "Providing basic OTC counselling",
        "Administering a vaccination in the pharmacy",
        "Handing a patient their change",
      ],
      correctIndex: 2,
      explanation:
        "Pharmacy-administered vaccinations involve a clinical procedure (injection) with specific risks (allergic reaction, side effects) and require formal written informed consent. Routine dispensing, OTC counselling, and sales transactions operate on implied consent.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// FULL COURSE ASSEMBLY
// ============================================================================

export const patientCareCourse: FullCourse = {
  courseId: "patient-care-communication",
  title: "Patient Care & Communication",
  tagline: "Connect with patients through culturally competent, empathetic care across the Caribbean",
  modules: [module1, module2, module3, module4, module5, module6, module7],
};

// ── Utility helpers ─────────────────────────────────────────────────────────

export const totalLessons = patientCareCourse.modules.reduce(
  (sum, m) => sum + m.lessons.length,
  0,
);

export const totalQuizQuestions = patientCareCourse.modules.reduce(
  (sum, m) => sum + m.quiz.length,
  0,
);

export default patientCareCourse;
