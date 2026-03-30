// ============================================================================
// PIXOPHARM LMS — Customer Service & Workplace Excellence (I6)
// Full Course Content: 7 Modules, 28 Lessons, 74 Quiz Questions
// Focus: Soft skills, emotional intelligence, Caribbean-authentic scenarios
// ============================================================================

import type { Module, FullCourse } from '../types';

// ============================================================================
// MODULE 1 — The Caribbean Pharmacy: What Your First Day Really Looks Like
// ============================================================================

const module1: Module = {
  id: "m1-first-day",
  number: 1,
  title: "The Caribbean Pharmacy: What Your First Day Really Looks Like",
  description:
    "Forget the textbook version. This module sets realistic expectations for working in a busy Caribbean pharmacy — the pace, the people, the pressure, and the unwritten rules that nobody tells you about until you are already behind the counter.",
  learningObjectives: [
    "Describe the typical workflow and daily rhythm of a Caribbean community pharmacy",
    "Identify common bottlenecks in pharmacy operations and strategies to navigate them",
    "Explain the distinct role of a pharmacy technician alongside the pharmacist",
    "Apply unwritten workplace norms that contribute to a smooth-running pharmacy",
  ],
  lessons: [
    // ── Lesson 1.1 ──
    {
      id: "m1-l1",
      title: "The Pace, the Pressure, the People — Setting Realistic Expectations",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "What Nobody Tells You Before Your First Shift",
        },
        {
          type: "text",
          body: "Your first day behind a Caribbean pharmacy counter will feel nothing like your training. The textbooks prepared you for drug names, dosage forms, and dispensing steps. They did not prepare you for the grandmother who needs her blood pressure tablets but forgot her prescription at home, the mother with a screaming toddler who needs something for fever NOW, and the line of six people behind them all watching you fumble with the computer system. Welcome to the real thing.",
        },
        {
          type: "text",
          body: "Caribbean pharmacies operate at a pace that is shaped by community need, not corporate efficiency targets. In Trinidad, a busy Hi-Lo or Pennywise pharmacy might see 200-300 prescriptions per day. In Jamaica, a pharmacy near a public hospital can get slammed with 50 prescriptions in the first hour after morning clinic. In Barbados, polyclinic pharmacies handle a steady stream from dawn until the doors close. The pace is relentless, and it does not care that you are new.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Survival Tip for Day One",
          body: "Do not try to be fast on your first day. Try to be correct. Speed comes with familiarity — but an error on your first shift can shake your confidence for weeks. Ask questions. Write things down. Watch how the experienced staff move. They have a rhythm, and you will find yours.",
        },
        {
          type: "key-term",
          term: "Workflow Rhythm",
          definition:
            "The natural pace and sequence of tasks that develops in a pharmacy over time. Every pharmacy has its own rhythm, influenced by peak hours, staffing levels, prescription volume, and the community it serves. Learning the rhythm is the first step to functioning effectively.",
        },
        {
          type: "heading",
          level: 3,
          text: "The People You Will Meet",
        },
        {
          type: "text",
          body: "Caribbean pharmacies are community institutions. You are not simply dispensing tablets — you are serving neighbours, church members, your grandmother's friend, your old school teacher. Customers may address you by name before you know theirs. They may share personal health details openly across the counter because in the Caribbean, pharmacy is personal. This intimacy is both the reward and the challenge of the work.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "The regulars: elderly patients who come every month for chronic medications — they know the pharmacy better than you do",
            "The anxious parents: mothers and fathers who need reassurance as much as they need medicine",
            "The impatient professional: lunch-hour customers who have 15 minutes and zero patience",
            "The confused patient: someone handed a prescription by a doctor who explained nothing",
            "The self-diagnoser: 'I Googled it and I need antibiotics' — a conversation you will have weekly",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Caribbean Reality Check",
          body: "In many Caribbean communities, the pharmacy technician is the most accessible healthcare worker. Patients will ask you questions that should go to a doctor. They will describe symptoms and expect a recommendation. Knowing where your scope ends — and how to redirect without making the patient feel dismissed — is a skill you will use every single day.",
        },
        {
          type: "table",
          caption: "Typical Daily Rhythm of a Caribbean Community Pharmacy",
          headers: ["Time", "Activity", "Intensity"],
          rows: [
            ["7:00–8:30 AM", "Opening procedures, early prescription drop-offs, regulars collecting chronic meds", "Moderate"],
            ["8:30–11:00 AM", "Morning rush — post-clinic prescriptions arrive, walk-ins increase", "High"],
            ["11:00 AM–12:30 PM", "Brief lull, catch-up on filling, restock shelves", "Moderate"],
            ["12:30–2:00 PM", "Lunch-hour rush — office workers, parents after school run", "High"],
            ["2:00–4:00 PM", "Steady flow, delivery orders, phone enquiries", "Moderate"],
            ["4:00–6:00 PM", "After-work rush, last-minute prescriptions, closing procedures", "High"],
          ],
        },
        {
          type: "knowledge-check",
          question: "On your first day, what should your primary focus be?",
          options: [
            "Dispensing as quickly as possible to impress the pharmacist",
            "Being accurate and asking questions when unsure",
            "Memorising every drug on the shelf",
            "Handling customer complaints independently",
          ],
          correctIndex: 1,
          explanation:
            "On your first day, accuracy is far more important than speed. Speed develops naturally with experience, but errors — especially early on — can harm patients and damage your confidence. Asking questions shows professionalism, not weakness.",
        },
      ],
    },
    // ── Lesson 1.2 ──
    {
      id: "m1-l2",
      title: "Understanding Your Role Alongside the Pharmacist",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "You Are Not a Mini-Pharmacist — and That Is a Good Thing",
        },
        {
          type: "text",
          body: "One of the most common mistakes new pharmacy technicians make is trying to be a pharmacist. You are not. Your role is distinct, vital, and legally defined. Understanding the boundary between your work and the pharmacist's work is not a limitation — it is the foundation of patient safety and your own professional protection.",
        },
        {
          type: "text",
          body: "The pharmacist carries ultimate legal responsibility for every prescription that leaves the pharmacy. They verify clinical appropriateness, check for interactions, counsel patients on complex therapies, and sign off on dispensed medications. Your role is to ensure the operational machinery runs smoothly so the pharmacist can focus on those clinical tasks. When the technician does their job well, the pharmacist can do theirs. When the technician tries to do the pharmacist's job, everyone is at risk.",
        },
        {
          type: "key-term",
          term: "Scope of Practice",
          definition:
            "The legally defined boundaries of what a healthcare professional can and cannot do. For pharmacy technicians in the Caribbean, this typically includes prescription data entry, medication preparation, inventory management, and customer service — but excludes clinical verification, independent counselling on prescription medications, and final dispensing checks.",
        },
        {
          type: "table",
          caption: "What You Handle vs. What the Pharmacist Handles",
          headers: ["Technician's Domain", "Pharmacist's Domain", "Grey Zone — Ask First"],
          rows: [
            ["Receiving and entering prescriptions into the system", "Verifying prescription legitimacy and clinical appropriateness", "Calling a prescriber to clarify handwriting or missing information"],
            ["Counting, measuring, and preparing medications", "Final check of prepared medications against the prescription", "Suggesting a generic substitution to a patient"],
            ["Managing inventory and placing orders", "Approving special orders for controlled substances", "Deciding whether to accept a prescription that looks altered"],
            ["Handling OTC product queries within your knowledge", "Counselling patients on new prescription medications", "Advising on OTC drug interactions with prescribed medicines"],
            ["Processing payments and insurance claims", "Resolving clinical insurance rejections (e.g. therapeutic duplication)", "Contacting insurance about prior authorisation requirements"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Legal Protection",
          body: "If a patient asks you a clinical question you cannot answer, say: 'That is a great question — let me get the pharmacist for you.' Never guess. Never say 'I think...' about drug interactions, side effects, or dosing. One wrong answer can cause harm, and you carry no legal protection for advice outside your scope.",
        },
        {
          type: "heading",
          level: 3,
          text: "Building a Strong Working Relationship",
        },
        {
          type: "text",
          body: "The best pharmacy teams operate like a well-rehearsed band. The pharmacist leads, but the technician keeps the rhythm. Communication is everything. A good pharmacist will appreciate a technician who flags potential issues before they escalate — a prescription that does not look right, an insurance rejection that keeps recurring, a patient who seems confused about their medication. You are the pharmacist's eyes and ears on the front line.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Anticipate needs: if you see the pharmacist is deep in a clinical consultation, hold non-urgent questions",
            "Flag, do not fix: bring concerns to the pharmacist rather than attempting to resolve clinical issues yourself",
            "Communicate clearly: 'Mrs. Rampersad is asking about mixing her blood pressure medication with bush tea — can you speak with her?' is better than 'A lady has a question'",
            "Own your domain: keep the dispensary organised, inventory current, and workflow smooth without being asked",
            "Respect the hierarchy without being passive: professional respect does not mean staying silent when you notice a problem",
          ],
        },
        {
          type: "knowledge-check",
          question: "A patient asks you whether their new blood pressure medication will interact with the herbal supplement they take. What should you do?",
          options: [
            "Tell them it should be fine since herbal supplements are natural",
            "Look it up on your phone and share what you find",
            "Explain that you will get the pharmacist to answer that question properly",
            "Tell them to stop taking the herbal supplement to be safe",
          ],
          correctIndex: 2,
          explanation:
            "Drug-supplement interactions are a clinical question that falls within the pharmacist's scope of practice. Referring the patient to the pharmacist protects the patient from potentially incorrect information and protects you legally. Never guess on clinical matters.",
        },
      ],
    },
    // ── Lesson 1.3 ──
    {
      id: "m1-l3",
      title: "Pharmacy Layout, Workflow, and Where Bottlenecks Happen",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Geography of a Pharmacy Matters More Than You Think",
        },
        {
          type: "text",
          body: "Walk into any busy Caribbean pharmacy and you will notice something: the physical layout directly shapes how efficiently the team works. Where the prescription drop-off point is, how far the pharmacist has to walk to reach the dispensing area, whether the OTC section creates a bottleneck at the counter — all of these design choices either speed things up or slow everything down. Understanding the layout is your shortcut to working smarter, not harder.",
        },
        {
          type: "text",
          body: "Most Caribbean community pharmacies follow a general pattern: a public-facing retail area with OTC products and a service counter, and a restricted dispensing area behind the counter where prescriptions are filled. The dispensing area typically contains the prescription computer, label printer, counting trays, medication shelving arranged alphabetically or by therapeutic class, a refrigerator for cold-chain medications, and a secure cabinet or safe for controlled substances.",
        },
        {
          type: "heading",
          level: 3,
          text: "Where Bottlenecks Happen — and How to Avoid Them",
        },
        {
          type: "table",
          caption: "Common Pharmacy Bottlenecks and Solutions",
          headers: ["Bottleneck", "Why It Happens", "What You Can Do"],
          rows: [
            ["Prescription drop-off queue", "Single point of entry, slow data entry", "Learn the computer system thoroughly; have paper intake forms ready for rush periods"],
            ["Waiting for pharmacist verification", "One pharmacist checking everything", "Batch prescriptions intelligently — queue straightforward ones so the pharmacist can verify quickly"],
            ["Out-of-stock medications", "Supply chain delays, poor inventory tracking", "Maintain accurate stock counts; flag low-stock items before they run out"],
            ["Insurance rejections", "Incorrect patient data, formulary issues", "Verify insurance details at drop-off, not at pick-up; learn common rejection codes"],
            ["Pick-up confusion", "Prescriptions not clearly labelled or stored", "Use a consistent system: alphabetical bags, numbered shelves, colour-coded tags"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The 'Dead Zone' Trick",
          body: "Every pharmacy has a dead zone — a time between rushes when foot traffic drops. Use this time to restock, reorganise, clean the counting trays, and prepare for the next rush. Experienced technicians treat the dead zone as sacred preparation time, not break time.",
        },
        {
          type: "key-term",
          term: "Prescription Workflow",
          definition:
            "The step-by-step process a prescription follows from receipt to patient collection: (1) drop-off and intake, (2) data entry, (3) insurance adjudication, (4) filling/preparation, (5) pharmacist verification, (6) bagging and storage, (7) patient pick-up and counselling. Each step is a potential bottleneck.",
        },
        {
          type: "text",
          body: "One thing Caribbean pharmacies deal with that textbooks rarely mention: the physical space is often small. Unlike large chain pharmacies in North America with wide aisles and spacious dispensing areas, many Caribbean pharmacies operate in compact spaces where two people behind the counter means you are constantly navigating around each other. Learning to move efficiently in tight quarters — without bumping the pharmacist's elbow while they verify a prescription — is a genuinely important skill.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Layout Varies by Setting",
          body: "Hospital pharmacy dispensaries, polyclinic pharmacies, and private community pharmacies all have different layouts. A hospital pharmacy may have a window-based dispensing system, while a community pharmacy has face-to-face counter service. Adapt your workflow to the physical space you are in.",
        },
        {
          type: "knowledge-check",
          question: "What is the best use of the 'dead zone' period between customer rushes?",
          options: [
            "Taking a long break since it is quiet",
            "Restocking, reorganising, and preparing for the next rush",
            "Leaving early since there are no customers",
            "Chatting with coworkers to build team morale",
          ],
          correctIndex: 1,
          explanation:
            "The dead zone between rushes is valuable preparation time. Experienced technicians use it to restock shelves, reorganise the dispensing area, clean equipment, and prepare for the next wave of customers. This proactive approach prevents bottlenecks during peak periods.",
        },
      ],
    },
    // ── Lesson 1.4 ──
    {
      id: "m1-l4",
      title: "The Unwritten Rules: What COSTAATT Does Not Teach You",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Informal Knowledge That Makes or Breaks You",
        },
        {
          type: "text",
          body: "Every pharmacy has its own culture — unwritten rules that no training programme covers. These are the small things that determine whether your first month is smooth or painful. They vary from pharmacy to pharmacy, but certain patterns repeat across the Caribbean. Learning these early will save you grief.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Learn the pharmacist's preferences: some want you to bring every query to them immediately; others want you to batch questions. Ask on day one how they prefer to work.",
            "Know the regulars: within your first week, learn the names of the five most frequent customers. Greeting them by name transforms the interaction.",
            "Never eat at the dispensing counter: this is a health and safety issue, but in some pharmacies it is also a respect issue. The dispensing area is a clinical workspace.",
            "Phone etiquette matters more than you think: in the Caribbean, how you answer the phone reflects the entire pharmacy. 'Good morning, [Pharmacy Name], how may I help you?' — every single time.",
            "Clean as you go: a cluttered counter slows everyone down and looks unprofessional to patients watching from the other side.",
            "Do not discuss patients in front of other patients: even something as simple as 'Oh, Mrs. Ramjohn is here for her diabetes medication again' violates confidentiality.",
            "Dress the part: many Caribbean pharmacies require a uniform or lab coat. Even where they do not, professional appearance builds patient trust.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Gossip Trap",
          body: "Caribbean communities are tight-knit. The person behind the counter next to you might be related to the customer you just served. The patient collecting HIV medication might be your neighbour. Pharmacy gossip is not just unprofessional — it is a violation of patient confidentiality and can destroy trust in the entire pharmacy. What happens behind the counter stays behind the counter. Always.",
        },
        {
          type: "case-study",
          title: "Case Study: The New Technician's First Week",
          scenario:
            "Keisha starts her first week at a busy community pharmacy in San Fernando, Trinidad. On day two, she overhears the pharmacist telling a patient about a medication change. Later, a different customer asks Keisha what medication the first patient is taking. The customer says, 'I saw Mrs. Ali in here — she is my neighbour. Is she okay? What was the pharmacist telling her about?' Keisha knows the answer but feels uncomfortable.",
          questions: [
            "What should Keisha say to the curious customer?",
            "Why is this situation particularly challenging in a tight-knit Caribbean community?",
            "How can Keisha handle this without offending the customer or seeming rude?",
          ],
          discussion:
            "Keisha should respond with something like: 'I am sorry, I cannot discuss another patient's information. That is confidential. Is there anything I can help you with today?' This is challenging because in Caribbean culture, asking about a neighbour's health is considered caring, not intrusive. Keisha must maintain confidentiality while being respectful of the cultural norm. A warm but firm boundary is the right approach.",
        },
        {
          type: "key-term",
          term: "Patient Confidentiality",
          definition:
            "The ethical and legal obligation to protect all patient health information from unauthorised disclosure. This includes not discussing a patient's medications, conditions, or pharmacy visits with anyone who is not directly involved in their care — even family members, unless the patient has given explicit consent.",
        },
        {
          type: "heading",
          level: 3,
          text: "Adapting to Your Specific Pharmacy",
        },
        {
          type: "text",
          body: "Every pharmacy has its quirks. The printer that jams if you load it a certain way. The shelf where the amlodipine is not where the label says it should be. The supplier delivery driver who always arrives late on Fridays. The regular customer who insists on being served only by a specific staff member. These are not problems to fix — they are the texture of your workplace. Adapt to them, and you will fit in. Fight them on day one, and you will struggle.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The 30-Day Rule",
          body: "Give yourself 30 days before you suggest changing anything. Observe first. Understand why things are done a certain way before proposing improvements. That 'inefficient' process might exist for a reason you do not yet understand. After 30 days, if you see a genuine improvement, raise it respectfully.",
        },
        {
          type: "knowledge-check",
          question: "A regular customer asks you what medication another patient was collecting. The customer says they are concerned about their neighbour's health. What do you do?",
          options: [
            "Share the information since the customer is clearly concerned and well-meaning",
            "Tell the customer to mind their own business",
            "Politely explain that you cannot discuss another patient's information and redirect the conversation",
            "Ask the pharmacist whether it is acceptable to share in this case",
          ],
          correctIndex: 2,
          explanation:
            "Patient confidentiality is absolute, regardless of the enquirer's intentions. A polite but firm response protects the patient's privacy while respecting the customer's concern. Even asking the pharmacist is unnecessary — the answer is always no. Confidentiality is not discretionary.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m1-q1",
      question:
        "What is the primary focus for a pharmacy technician on their first day?",
      options: [
        "Speed — fill as many prescriptions as possible",
        "Accuracy — take your time and ask questions when unsure",
        "Independence — show you can work without supervision",
        "Sales — upsell OTC products to customers",
      ],
      correctIndex: 1,
      explanation:
        "Accuracy must be the priority for new technicians. Speed develops naturally with experience and familiarity with the pharmacy's systems, but errors on early shifts can harm patients and severely damage a new technician's confidence.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q2",
      question:
        "A patient asks you whether they can take ibuprofen with their prescribed warfarin. What should you do?",
      options: [
        "Tell them it is fine since ibuprofen is over-the-counter",
        "Advise them to take a lower dose of ibuprofen",
        "Refer them to the pharmacist for clinical advice",
        "Look up the interaction online and share the result",
      ],
      correctIndex: 2,
      explanation:
        "Drug interactions — even involving OTC products — are clinical questions that fall within the pharmacist's scope of practice. Ibuprofen and warfarin is actually a significant interaction that increases bleeding risk. Referring to the pharmacist protects the patient and you.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q3",
      question:
        "During a quiet period between customer rushes, which activity is MOST productive for a pharmacy technician?",
      options: [
        "Taking an extended lunch break",
        "Catching up on personal phone messages",
        "Restocking shelves, cleaning equipment, and preparing for the next rush",
        "Leaving early if the pharmacist agrees",
      ],
      correctIndex: 2,
      explanation:
        "The dead zone between rushes is valuable preparation time. Restocking, reorganising, and cleaning during quiet periods prevents bottlenecks and stock issues during peak hours. Experienced technicians treat this time as essential, not optional.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q4",
      question:
        "Why should a new pharmacy technician wait approximately 30 days before suggesting process changes?",
      options: [
        "Because it takes 30 days to pass probation",
        "Because existing processes may have reasons that are not immediately obvious",
        "Because the pharmacist will not listen to a new employee",
        "Because suggesting changes is not part of a technician's role",
      ],
      correctIndex: 1,
      explanation:
        "Established pharmacy processes often exist for reasons that are not immediately apparent to newcomers. Observing for 30 days allows you to understand the full context — including staffing patterns, supplier schedules, and patient needs — before proposing improvements.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m1-q5",
      question:
        "Which of the following is a breach of patient confidentiality?",
      options: [
        "Telling a colleague pharmacist about a drug interaction concern for a shared patient",
        "Discussing a patient's prescription with their spouse who has written authorisation",
        "Mentioning to a customer what medication another patient was collecting",
        "Documenting a dispensing note in the patient's pharmacy record",
      ],
      correctIndex: 2,
      explanation:
        "Sharing any patient's medication information with another customer — regardless of their relationship — is a clear breach of confidentiality. Even well-intentioned enquiries from neighbours or friends must be declined. The other options describe appropriate information sharing within care or with proper authorisation.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q6",
      question:
        "What is a common cause of bottlenecks at the prescription pick-up stage?",
      options: [
        "Too many pharmacists on duty",
        "Prescriptions not clearly labelled or stored systematically",
        "Patients arriving too early",
        "The pharmacy being too large",
      ],
      correctIndex: 1,
      explanation:
        "Pick-up confusion is one of the most common bottlenecks in pharmacy workflow. When prescriptions are not systematically labelled, bagged, and stored (alphabetically, by number, or by colour code), staff waste time searching for the right order while customers wait.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q7",
      question:
        "A busy Caribbean community pharmacy in Trinidad might handle how many prescriptions per day?",
      options: [
        "20–50",
        "50–100",
        "200–300",
        "500–1000",
      ],
      correctIndex: 2,
      explanation:
        "A busy community pharmacy in Trinidad — such as those in the Hi-Lo or Pennywise chains — can handle 200–300 prescriptions per day. This high volume demands efficient workflow, strong teamwork, and well-maintained inventory systems.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q8",
      question:
        "Which of the following BEST describes the relationship between a pharmacy technician and the pharmacist?",
      options: [
        "The technician works independently and consults the pharmacist only for emergencies",
        "The technician handles operational tasks so the pharmacist can focus on clinical responsibilities",
        "The technician and pharmacist have identical roles but different pay grades",
        "The technician supervises front-of-house while the pharmacist stays in the back",
      ],
      correctIndex: 1,
      explanation:
        "The pharmacy technician's role is to manage the operational workflow — data entry, preparation, inventory, customer service — so the pharmacist can focus on clinical tasks like verification, counselling, and interaction checking. This complementary relationship is the foundation of a well-functioning pharmacy.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q9",
      questionType: "true_false",
      question:
        "It is acceptable to discuss a patient's medications with their family member as long as the family member seems genuinely concerned.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "Patient confidentiality cannot be breached based on perceived good intentions. Information can only be shared with family members if the patient has given explicit consent. Concern from a relative does not override the patient's right to privacy.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q10",
      questionType: "ordering",
      question:
        "Arrange the prescription workflow steps in the correct order:",
      options: [
        "Pharmacist verification",
        "Prescription drop-off and intake",
        "Data entry into pharmacy system",
        "Bagging, storage, and patient pick-up",
        "Medication filling and preparation",
        "Insurance adjudication",
      ],
      correctIndex: 0,
      questionData: {
        correct_order: [1, 2, 5, 4, 0, 3],
      },
      explanation:
        "The correct prescription workflow is: (1) Drop-off and intake, (2) Data entry, (3) Insurance adjudication, (4) Filling and preparation, (5) Pharmacist verification, (6) Bagging, storage, and pick-up. Each step is sequential, and skipping or reordering can cause errors.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 2 — Customer Service Excellence: Building Trust at the Counter
// ============================================================================

const module2: Module = {
  id: "m2-service-excellence",
  number: 2,
  title: "Customer Service Excellence: Building Trust at the Counter",
  description:
    "Learn how to create genuine human connections at the pharmacy counter. From the first greeting to the final 'take care', every interaction either builds or erodes trust. This module teaches you to serve with warmth, professionalism, and Caribbean authenticity.",
  learningObjectives: [
    "Demonstrate professional greeting techniques that balance warmth with efficiency",
    "Analyse the impact of body language and tone of voice on patient trust",
    "Adapt service approach for elderly, anxious, and time-pressured customers",
    "Differentiate between going above and beyond and overstepping professional scope",
  ],
  lessons: [
    // ── Lesson 2.1 ──
    {
      id: "m2-l1",
      title: "First Impressions, Body Language, Tone of Voice",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "You Are Judged in the First Seven Seconds",
        },
        {
          type: "text",
          body: "Research consistently shows that people form a first impression within seven seconds of meeting someone. In a pharmacy, that impression determines whether a patient trusts you with their health information, follows your instructions, and comes back. Your body language, facial expression, and tone of voice communicate far more than your words — and patients who are unwell, anxious, or in pain read those signals with heightened sensitivity.",
        },
        {
          type: "text",
          body: "In Caribbean culture, warmth and respect are non-negotiable in customer interactions. A pharmacy technician who is technically competent but cold or dismissive will lose patients to the pharmacy down the road. Conversely, a technician who greets with genuine warmth — even on a hectic day — creates loyalty that no discount can match.",
        },
        {
          type: "key-term",
          term: "Non-Verbal Communication",
          definition:
            "All forms of communication beyond words: facial expressions, eye contact, posture, hand gestures, physical distance, and tone of voice. Studies suggest non-verbal cues account for 55–93% of the emotional content of a message, making them critically important in healthcare interactions.",
        },
        {
          type: "table",
          caption: "Body Language Signals — What Patients Read",
          headers: ["Signal", "Positive Message", "Negative Message"],
          rows: [
            ["Eye contact", "Making natural eye contact = 'I see you and you matter'", "Avoiding eye contact = 'I am busy and you are interrupting'"],
            ["Posture", "Standing upright, facing the patient = 'I am ready to help'", "Slouching, turned sideways = 'I do not want to be here'"],
            ["Arms", "Arms relaxed at sides or on counter = 'I am open and approachable'", "Arms crossed = 'I am guarded or impatient'"],
            ["Facial expression", "Gentle smile, engaged expression = 'I care'", "Blank stare, frown, or eye-rolling = 'You are bothering me'"],
            ["Physical distance", "Leaning slightly forward = 'I am listening'", "Stepping back or turning away = 'This conversation is over'"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Tone of Voice: The Music Behind the Words",
        },
        {
          type: "text",
          body: "Your tone of voice carries emotion that your words alone cannot convey. The sentence 'How can I help you?' can sound genuinely helpful, bored, irritated, or sarcastic depending entirely on tone. In the Caribbean, tone carries particular cultural weight — a sharp tone can be perceived as 'rude' or 'out of order' regardless of what was actually said. Patients remember how you made them feel long after they forget what you said.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Voice Check",
          body: "Before your shift, speak your greeting out loud: 'Good morning, welcome to [pharmacy name]. How can I help you today?' If it sounds flat, practise until it carries warmth. Record yourself on your phone if needed. Your voice is a tool — keep it tuned.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Speak at a moderate pace — not so fast that patients cannot follow, not so slow that it feels condescending",
            "Match your volume to the situation — lower your voice for sensitive conversations, speak clearly for elderly patients",
            "Avoid the 'customer service voice' that sounds rehearsed or robotic — patients can tell when you are reading from a script in your head",
            "Use the patient's name when you know it — it is the most powerful word in any language",
          ],
        },
        {
          type: "knowledge-check",
          question: "A patient approaches the counter while you are entering data into the computer. What is the best first response?",
          options: [
            "Continue typing and say 'one second' without looking up",
            "Look up, make eye contact, smile, and greet them warmly before returning to your task",
            "Point to the waiting area and say 'I will call you when I am ready'",
            "Finish what you are doing silently, then turn to the patient",
          ],
          correctIndex: 1,
          explanation:
            "Acknowledging the patient immediately with eye contact and a greeting — even if you need a moment to finish your current task — shows respect and tells them they are seen. It takes two seconds and prevents the patient from feeling ignored or unimportant.",
        },
      ],
    },
    // ── Lesson 2.2 ──
    {
      id: "m2-l2",
      title: "The Pharmacy Greeting — Professional Warmth, Not Scripted Coldness",
      duration: "12 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Greetings That Sound Human, Not Corporate",
        },
        {
          type: "text",
          body: "There is a world of difference between a greeting that follows corporate protocol and a greeting that makes someone feel welcome. Corporate chains often mandate scripted greetings — 'Welcome to PharmaCorp, my name is Ashley, how may I assist you today?' — that sound polished but feel hollow. Caribbean customers see straight through scripts. They want to feel that you are a real person, not a recording.",
        },
        {
          type: "text",
          body: "The best pharmacy greetings are warm, natural, and adapted to the person in front of you. A regular customer gets a different greeting than a first-time visitor. An elderly patient gets a different energy than a young professional rushing in on their lunch break. The greeting sets the tone for the entire interaction — get it right, and everything flows easier.",
        },
        {
          type: "island-comparison",
          title: "Greeting Styles Across the Caribbean",
          description:
            "While professionalism is universal, the expected warmth and formality of customer greetings varies across Caribbean islands.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Trini customers expect friendly, familiar greetings — 'Morning! How yuh going?' is perfectly acceptable in casual settings",
                "Formality level depends on the pharmacy — chain pharmacies lean formal, neighbourhood pharmacies lean casual",
                "Use of 'Auntie' or 'Uncle' for elderly customers is common and shows respect",
                "Customers often greet first — be ready to respond in kind",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Jamaican customers appreciate directness combined with warmth — 'Good morning, how can I help you today?' with a genuine smile",
                "Respect titles: 'Miss', 'Mrs.', 'Mr.' are important, especially for older customers",
                "Do not rush Jamaican customers — taking a moment for pleasantries is expected",
                "A cold or abrupt greeting will be remembered and discussed in the community",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Bajans tend to appreciate politeness and formality more than some other islands",
                "A proper 'Good morning' or 'Good afternoon' is expected before any business discussion",
                "Jumping straight to 'What do you need?' without a greeting is considered rude",
                "Regulars at polyclinic pharmacies expect to be recognised and acknowledged",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Name Factor",
          body: "Using a regular customer's name is the single most powerful customer service tool you have. 'Good afternoon, Mrs. Sookram — your metformin ready for you' lands completely differently from 'Next please.' It costs you nothing and buys you loyalty.",
        },
        {
          type: "heading",
          level: 3,
          text: "Adapting Your Greeting to the Situation",
        },
        {
          type: "table",
          caption: "Greeting Adaptations by Situation",
          headers: ["Situation", "Appropriate Greeting", "Why It Works"],
          rows: [
            ["Regular customer collecting chronic meds", "'Good morning, Mr. Joseph! Coming for your regular? Let me get that for you.'", "Shows recognition, familiarity, and efficiency — they feel valued"],
            ["First-time customer looking uncertain", "'Good afternoon. Welcome — is this your first time here? I can help you find what you need.'", "Acknowledges their uncertainty without making them feel awkward"],
            ["Parent with sick child", "'Morning — I can see your little one is not feeling well. Let me help you quickly.'", "Shows empathy and signals you will prioritise them"],
            ["Professional on lunch break", "'Good afternoon. I can see you are on a schedule — how can I help?'", "Respects their time without rushing them"],
            ["Elderly patient moving slowly", "'Good morning, take your time coming up. No rush at all.'", "Relieves pressure and shows patience"],
          ],
        },
        {
          type: "key-term",
          term: "Professional Warmth",
          definition:
            "The ability to combine genuine friendliness and emotional presence with professional competence. It is not performative cheerfulness — it is authentic human engagement delivered within professional boundaries. In Caribbean pharmacy practice, professional warmth is the foundation of patient trust.",
        },
        {
          type: "knowledge-check",
          question: "Which greeting approach is most effective in a Caribbean pharmacy?",
          options: [
            "A standardised script used for every customer",
            "A warm, natural greeting adapted to the specific customer and situation",
            "No greeting — just ask what they need",
            "A greeting in Creole or dialect to show you are from the community",
          ],
          correctIndex: 1,
          explanation:
            "Caribbean customers respond best to genuine, adapted greetings. A script feels impersonal, no greeting feels rude, and dialect use depends on context and relationship. The best approach is professional warmth that adjusts to the person in front of you.",
        },
      ],
    },
    // ── Lesson 2.3 ──
    {
      id: "m2-l3",
      title: "Serving Customers Who Are Elderly, Anxious, or in a Hurry",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Every Customer Needs Something Different",
        },
        {
          type: "text",
          body: "The mark of an excellent pharmacy technician is not treating everyone the same — it is treating everyone appropriately. An elderly patient with hearing difficulties needs a different approach than an anxious first-time customer collecting psychiatric medication. A time-pressured professional dropping off a prescription needs a different energy than a mother who has questions about her child's medication. Recognising what each person needs and adapting your approach is the core skill of customer service excellence.",
        },
        {
          type: "heading",
          level: 3,
          text: "Serving Elderly Patients",
        },
        {
          type: "text",
          body: "Elderly patients are often the backbone of a Caribbean pharmacy's customer base. Many collect chronic medications monthly — antihypertensives, diabetes medications, cholesterol treatments, pain relief. They are frequently the most loyal customers but also the most vulnerable. Hearing loss, visual impairment, cognitive decline, and physical frailty all affect how you should serve them.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Speak clearly and at a moderate volume — do not shout, but ensure you are heard",
            "Face them when speaking so they can read your lips if needed",
            "Use simple, direct language — 'Take one tablet every morning with breakfast' is better than 'Administer one unit per os with the first meal of the day'",
            "Be patient with repetition — if they ask the same question twice, answer it twice with the same warmth",
            "Write things down if they seem unsure — a handwritten note on the bag can be a lifesaver",
            "Offer to call a family member if they seem confused about complex medication changes",
            "Never rush them — even if there is a queue. An elderly patient who feels rushed will not take their medication correctly",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Serving Anxious Patients",
        },
        {
          type: "text",
          body: "Anxiety in the pharmacy takes many forms. The patient collecting antidepressants for the first time who is terrified someone will see them. The person picking up HIV medication who scans the queue to see if anyone they know is there. The parent whose child was just diagnosed with something serious. Anxiety makes people hyper-vigilant, easily overwhelmed, and sometimes short-tempered. Your job is to make them feel safe, not judged.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Lowering the Anxiety Temperature",
          body: "For patients who seem anxious about privacy, lower your voice, use a calm tone, and angle your body to create a semi-private space at the counter. If the pharmacy has a counselling area, offer to use it. Small adjustments in your physical presence can dramatically reduce a patient's anxiety.",
        },
        {
          type: "heading",
          level: 3,
          text: "Serving Time-Pressured Customers",
        },
        {
          type: "text",
          body: "The lunch-hour rush brings professionals who have exactly 15 minutes. They are not rude — they are stressed. Acknowledge their time constraint, work efficiently, and avoid unnecessary conversation. 'I can see you are on a schedule — let me get this sorted quickly for you' tells them you respect their time without making them feel like they are being rushed through important healthcare.",
        },
        {
          type: "table",
          caption: "Adapting Service by Customer Type",
          headers: ["Customer Type", "What They Need", "What to Avoid"],
          rows: [
            ["Elderly patient", "Patience, clarity, respect, physical assistance", "Rushing, medical jargon, condescension, impatience with repetition"],
            ["Anxious patient", "Privacy, calm tone, non-judgemental attitude, reassurance", "Loud voice, drawing attention, asking unnecessary questions in earshot of others"],
            ["Time-pressured professional", "Speed, efficiency, acknowledgement of their schedule", "Unnecessary small talk, slow processing, asking them to wait without explanation"],
            ["Parent with sick child", "Empathy, urgency, clear dosing instructions", "Dismissing the parent's concern, being slow when a child is clearly unwell"],
            ["Confused patient", "Patience, step-by-step explanations, written instructions", "Assuming they understand, using jargon, showing frustration at questions"],
          ],
        },
        {
          type: "key-term",
          term: "Patient-Centred Service",
          definition:
            "An approach to healthcare delivery that adapts to the individual needs, preferences, and circumstances of each patient. Rather than a one-size-fits-all approach, patient-centred service recognises that every person walking up to the counter brings unique needs that require a tailored response.",
        },
        {
          type: "knowledge-check",
          question: "An elderly patient asks you the same question about their medication for the third time. What is the appropriate response?",
          options: [
            "Tell them you have already answered that question",
            "Answer patiently a third time with the same warmth as the first",
            "Ask a family member to come in and explain for them",
            "Write the instructions on a note and stop answering verbally",
          ],
          correctIndex: 1,
          explanation:
            "Elderly patients may have memory difficulties, hearing issues, or anxiety that causes them to seek repeated reassurance. Answering patiently each time is the correct approach. You can also reinforce your verbal answer by writing instructions on the bag, but never replace verbal communication with written-only notes unless the patient requests it.",
        },
      ],
    },
    // ── Lesson 2.4 ──
    {
      id: "m2-l4",
      title: "Going Above and Beyond Without Overstepping Your Scope",
      duration: "12 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Fine Line Between Helpful and Harmful",
        },
        {
          type: "text",
          body: "The best pharmacy technicians are the ones customers ask for by name. They remember medications, greet regulars warmly, notice when someone seems unwell, and go the extra mile. But there is a fine line between being exceptionally helpful and crossing into territory that belongs to the pharmacist — or worse, practising medicine without a licence. Knowing where that line is, and staying firmly on the right side of it, is what separates a great technician from a liability.",
        },
        {
          type: "table",
          caption: "Above and Beyond vs. Overstepping",
          headers: ["Going Above and Beyond ✓", "Overstepping ✗"],
          rows: [
            ["Remembering a regular's name and medication", "Telling a patient their dosage seems too high and suggesting they take less"],
            ["Noticing a patient seems confused and flagging it to the pharmacist", "Diagnosing the cause of the confusion yourself"],
            ["Calling a patient to let them know their prescription is ready", "Calling a patient to recommend they add a supplement to their regimen"],
            ["Helping an elderly patient read a label", "Explaining potential side effects in detail without pharmacist involvement"],
            ["Offering to hold a prescription while insurance is sorted out", "Deciding to dispense a medication before insurance approves it"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The 'I Am Just Trying to Help' Trap",
          body: "Most scope violations happen with good intentions. A technician who tells a patient 'You should take that with food to avoid stomach upset' may be right — but if they are not, they have given medical advice outside their scope. The correct version is: 'Let me check with the pharmacist about the best way to take this.' Same care, proper channel.",
        },
        {
          type: "text",
          body: "The things that truly make you exceptional are within your scope: reliability, accuracy, warmth, attention to detail, and anticipating workflow needs. A technician who keeps the dispensary organised, processes prescriptions accurately, and treats every patient with dignity is worth their weight in gold. You do not need to step outside your scope to be outstanding.",
        },
        {
          type: "heading",
          level: 3,
          text: "Legitimate Ways to Go Above and Beyond",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Learn regular patients' names and preferred pickup times",
            "Keep a mental note of patients who struggle with compliance — flag to the pharmacist for follow-up",
            "Offer to place medications in an easier-to-open container for patients with arthritis (check with pharmacist first)",
            "Help patients navigate insurance paperwork that confuses them",
            "Remember that the elderly patient always comes on the first Tuesday of the month — have their medications ready",
            "Be the person who notices when a prescription looks different from what the patient usually gets",
          ],
        },
        {
          type: "key-term",
          term: "Scope Awareness",
          definition:
            "The ongoing professional discipline of recognising the boundary between your authorised responsibilities and those reserved for other healthcare professionals. In pharmacy, scope awareness is not about limiting your helpfulness — it is about channelling your helpfulness through the proper professional pathways.",
        },
        {
          type: "knowledge-check",
          question: "A regular customer tells you they have been feeling dizzy since starting a new medication. What is the best response?",
          options: [
            "Tell them dizziness is a common side effect and it will pass",
            "Suggest they take the medication at bedtime to reduce dizziness",
            "Express concern and immediately involve the pharmacist",
            "Recommend they stop taking the medication until they see their doctor",
          ],
          correctIndex: 2,
          explanation:
            "Dizziness as a side effect of medication is a clinical concern that requires the pharmacist's assessment. Telling the patient it will pass, suggesting timing changes, or recommending discontinuation are all outside a technician's scope. The correct action is to express empathy and bring the pharmacist into the conversation immediately.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m2-q1",
      question:
        "Research suggests people form a first impression within approximately how many seconds?",
      options: ["3 seconds", "7 seconds", "15 seconds", "30 seconds"],
      correctIndex: 1,
      explanation:
        "Studies on first impressions consistently point to approximately seven seconds as the window in which people form initial judgements about competence, trustworthiness, and likability. In a pharmacy, this means your greeting and body language matter immensely.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q2",
      question:
        "What percentage of emotional content in a message is estimated to come from non-verbal communication?",
      options: ["10–20%", "25–40%", "55–93%", "100%"],
      correctIndex: 2,
      explanation:
        "Research by Albert Mehrabian and others suggests that non-verbal cues — facial expressions, body language, and tone of voice — account for 55–93% of the emotional content of a message. This is why how you say something matters as much as what you say.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q3",
      question:
        "Which of the following is the MOST effective way to make a regular customer feel valued?",
      options: [
        "Giving them a discount on their next purchase",
        "Using their name and acknowledging their regular visit",
        "Spending extra time chatting about non-pharmacy topics",
        "Allowing them to skip the queue",
      ],
      correctIndex: 1,
      explanation:
        "Using a customer's name and acknowledging their regular patronage is the most powerful — and free — customer service tool available. It creates a personal connection that builds loyalty far more effectively than discounts or preferential treatment.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q4",
      question:
        "An elderly patient with hearing difficulties approaches the counter. Which communication approach is MOST appropriate?",
      options: [
        "Speak loudly and slowly as if they are a child",
        "Write everything down and avoid speaking",
        "Face them directly, speak clearly at moderate volume, and check understanding",
        "Ask a family member to relay information instead",
      ],
      correctIndex: 2,
      explanation:
        "The best approach for patients with hearing difficulties is to face them directly (allowing lip reading), speak clearly at a moderate volume (not shouting), and check their understanding. This maintains their dignity while ensuring effective communication.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q5",
      question:
        "A patient collecting antidepressants for the first time appears anxious and keeps glancing at other customers. What should you do?",
      options: [
        "Announce loudly that their prescription is ready",
        "Lower your voice, create a semi-private space, and process them efficiently",
        "Tell them there is nothing to be embarrassed about",
        "Ask them if they want to come back when it is less busy",
      ],
      correctIndex: 1,
      explanation:
        "Patients collecting stigmatised medications often feel vulnerable. Lowering your voice, angling your body to create some privacy, and processing efficiently shows sensitivity without drawing attention to their anxiety. Telling them not to be embarrassed, while well-intentioned, actually draws more attention to the stigma.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q6",
      question:
        "Which behaviour crosses the line from 'going above and beyond' to 'overstepping scope'?",
      options: [
        "Remembering a patient's usual pickup day and having their medication ready",
        "Noticing a patient seems confused and alerting the pharmacist",
        "Telling a patient to take their new medication with food to avoid nausea",
        "Helping a patient understand their insurance paperwork",
      ],
      correctIndex: 2,
      explanation:
        "Advising a patient on how to take their medication — including food and timing recommendations — is clinical advice that falls within the pharmacist's scope. Even if the advice seems obvious, it must come from the pharmacist. The other options are excellent examples of going above and beyond within the technician's scope.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m2-q7",
      questionType: "multiple_select",
      question:
        "Which of the following are appropriate ways for a pharmacy technician to 'go above and beyond'? (Select all that apply)",
      options: [
        "Learning regular patients' names and preferred pickup times",
        "Recommending vitamin supplements to patients who look tired",
        "Flagging potential compliance issues to the pharmacist",
        "Advising patients on potential drug interactions",
        "Keeping the dispensary exceptionally well-organised",
      ],
      correctIndex: 0,
      questionData: {
        correct_indices: [0, 2, 4],
      },
      explanation:
        "Learning names, flagging concerns to the pharmacist, and maintaining an organised dispensary are all excellent ways to go above and beyond within scope. Recommending supplements and advising on drug interactions are clinical activities reserved for the pharmacist.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m2-q8",
      question:
        "In Barbadian pharmacy culture, what greeting behaviour is considered particularly important?",
      options: [
        "Using the customer's first name immediately",
        "Greeting with a proper 'Good morning' or 'Good afternoon' before discussing business",
        "Speaking in Bajan Creole to show familiarity",
        "Shaking hands with every customer",
      ],
      correctIndex: 1,
      explanation:
        "In Barbadian culture, a proper time-of-day greeting before any business discussion is considered essential. Jumping straight to 'What do you need?' without first saying 'Good morning' or 'Good afternoon' is perceived as rude and disrespectful.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q9",
      questionType: "scenario",
      question:
        "A mother rushes in with a visibly unwell toddler. There are three people ahead of her in the queue. The toddler is crying, flushed, and lethargic. The mother looks panicked. What is the BEST course of action?",
      options: [
        "Tell her to wait her turn like everyone else",
        "Acknowledge her urgency, serve her immediately, and briefly explain to those waiting why she was prioritised",
        "Direct her to the nearest hospital emergency department",
        "Give the toddler a liquid paracetamol sample while she waits in the queue",
      ],
      correctIndex: 1,
      questionData: {
        context: "A busy pharmacy with a queue of customers and an arriving urgent case.",
      },
      explanation:
        "A visibly unwell child with a panicking parent is a situation that warrants immediate attention. Most customers in the queue will understand when they can see a distressed child. Briefly acknowledging those waiting ('Sorry for the wait — this little one needs attention quickly') maintains goodwill. Sending her to A&E may be unnecessary; dispensing without consultation is dangerous.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m2-q10",
      questionType: "true_false",
      question:
        "A standardised, scripted greeting is more effective than an adapted, natural greeting in Caribbean pharmacy settings.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "Caribbean customers generally respond better to genuine, adapted greetings than scripted ones. A scripted greeting can feel impersonal and corporate, while a natural greeting that adjusts to the specific customer and situation builds authentic connection and trust.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// MODULE 3 — Handling Irate Customers: De-escalation & Conflict Resolution
// ============================================================================

const module3: Module = {
  id: "m3-irate-customers",
  number: 3,
  title: "Handling Irate Customers: De-escalation & Conflict Resolution",
  description:
    "When a customer is angry, everything you learned about polite service goes out the window — unless you have trained for it. This module equips you with practical de-escalation techniques, boundary-setting skills, and the emotional resilience to handle confrontation without losing your professionalism or your mind.",
  learningObjectives: [
    "Identify the root causes of customer anger in Caribbean pharmacy settings",
    "Apply the LEAP de-escalation method (Listen, Empathise, Ask, Propose) to defuse tense interactions",
    "Evaluate when to handle a complaint independently versus involving the pharmacist",
    "Defend professional boundaries when faced with verbal abuse or threatening behaviour",
    "Analyse branching-scenario outcomes to determine optimal de-escalation strategies",
  ],
  lessons: [
    // ── Lesson 3.1 ──
    {
      id: "m3-l1",
      title: "Why Customers Get Angry: Stock-outs, Wait Times, Insurance, Cost",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Understanding the Anger Before You Respond to It",
        },
        {
          type: "text",
          body: "Nobody wakes up wanting to have a confrontation at the pharmacy. When a customer is furious at the counter, there is almost always a story behind the anger — and understanding that story is the first step to defusing it. In Caribbean pharmacies, the most common triggers are predictable, which means they are manageable if you are prepared.",
        },
        {
          type: "text",
          body: "The critical insight is this: the customer is rarely angry at you personally. They are angry at a situation — the medication they need is out of stock, the wait time is unreasonable, their insurance was rejected, the medication costs more than they can afford. You happen to be the person standing between them and resolution. If you can separate the person from the problem, you can usually find a path forward.",
        },
        {
          type: "key-term",
          term: "Displacement",
          definition:
            "A psychological defence mechanism where emotions — especially anger or frustration — are redirected from their original source to a more accessible target. In pharmacy, this means a patient who is angry about their diagnosis, their financial situation, or the healthcare system may direct that anger at the person behind the counter.",
        },
        {
          type: "table",
          caption: "Common Triggers for Customer Anger in Caribbean Pharmacies",
          headers: ["Trigger", "Why It Happens", "Emotional Root"],
          rows: [
            ["Medication out of stock", "Supply chain disruptions, import delays, poor inventory management", "Fear — 'I need this medicine and you do not have it. What happens to me now?'"],
            ["Long wait times", "High prescription volume, understaffing, complex insurance processing", "Frustration — 'My time is being wasted and nobody cares'"],
            ["Insurance rejection", "Formulary restrictions, prior authorisation requirements, data entry errors", "Helplessness — 'I paid for insurance and now it will not cover what I need'"],
            ["High medication cost", "Import costs, no generic available, no government subsidy", "Desperation — 'I cannot afford to be sick but I cannot afford the medicine either'"],
            ["Perceived rudeness from staff", "Busy staff appearing dismissive, cultural miscommunication", "Disrespect — 'They treat me like I do not matter'"],
            ["Prescription errors or delays", "Doctor's handwriting, missing information, communication failures", "Anxiety — 'If they got this wrong, what else did they get wrong?'"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Caribbean Cost Crisis",
          body: "Medication affordability is one of the most emotionally charged issues in Caribbean pharmacy. Many patients earn modest incomes and spend a significant portion on chronic medications. When a patient erupts over the price of their diabetes medication, they may be choosing between medicine and food. Understanding this reality transforms how you respond.",
        },
        {
          type: "text",
          body: "Anger in the pharmacy is not always loud. Some patients express frustration through silence — they leave and never come back. Others become passive-aggressive: 'I suppose I will just have to die then since nobody can help me.' These quieter expressions of anger are just as important to recognise and respond to as the customer who is shouting.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Emotional Iceberg",
        },
        {
          type: "text",
          body: "Think of customer anger as an iceberg. The visible part — the shouting, the demands, the sharp words — is just 10% of what is happening. Below the surface are fear, frustration, embarrassment, pain, confusion, and helplessness. When you respond only to the visible anger, you miss the real issue. When you respond to what is underneath, you find resolution.",
        },
        {
          type: "knowledge-check",
          question: "A customer is visibly angry because their prescribed medication is out of stock. What is most likely the emotional root of their anger?",
          options: [
            "They want to cause trouble for the pharmacy",
            "They are angry at you personally",
            "They are afraid about what will happen to their health without the medication",
            "They enjoy confrontation",
          ],
          correctIndex: 2,
          explanation:
            "When a patient cannot get medication they depend on, the underlying emotion is almost always fear — fear about their health, fear about managing their condition, fear of the unknown. Recognising this fear behind the anger allows you to respond with empathy rather than defensiveness.",
        },
      ],
    },
    // ── Lesson 3.2 ──
    {
      id: "m3-l2",
      title: "The LEAP Method: Listen, Empathise, Ask, Propose",
      duration: "18 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "A Four-Step Framework for De-escalation",
        },
        {
          type: "text",
          body: "When a customer is angry, your instinct will be to defend yourself, explain the situation, or fix the problem immediately. All three of those instincts are wrong — at least as a first response. An angry person does not want explanations. They want to be heard. The LEAP method gives you a structured approach to de-escalation that works because it addresses the emotional need before the practical one.",
        },
        {
          type: "key-term",
          term: "LEAP Method",
          definition:
            "A four-step de-escalation framework: Listen (give the person your full attention without interrupting), Empathise (acknowledge their feelings), Ask (clarify the specific issue with open-ended questions), and Propose (offer a solution or next step). The method works because it addresses the emotional dimension of the conflict before attempting a practical resolution.",
        },
        {
          type: "heading",
          level: 3,
          text: "Step 1: Listen",
        },
        {
          type: "text",
          body: "When someone is angry, the most powerful thing you can do is shut up and listen. Not the distracted 'uh-huh' kind of listening — real, focused, I-am-giving-you-my-full-attention listening. Put down what you are working on. Make eye contact. Let them talk. Do not interrupt, even if they are saying something factually wrong. Let the storm pass. Most angry outbursts burn themselves out within 30–60 seconds if the person feels heard.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Stop what you are doing and face the customer fully",
            "Make natural eye contact — not a stare, but engaged attention",
            "Do not interrupt, even if they are wrong about something",
            "Nod to show you are following",
            "Avoid defensive body language — no crossed arms, no stepping back, no eye-rolling",
            "Let them finish completely before you speak",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Step 2: Empathise",
        },
        {
          type: "text",
          body: "Once they have finished, your first words should acknowledge their feelings — not justify the situation, not explain what happened, not offer a solution. Just acknowledge. 'I can see how frustrating this is.' 'I understand that this is not what you expected.' 'You are right to be upset about this.' These sentences are not admissions of fault — they are emotional bridges that tell the customer you have heard them as a human being.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Empathy Phrases That Work",
          body: "Memorise three or four empathy phrases and use them genuinely: 'I understand how frustrating this must be.' 'I can see this is important to you.' 'I would feel the same way in your situation.' 'That sounds really stressful.' These are not scripts — they are emotional tools. Mean them when you say them.",
        },
        {
          type: "heading",
          level: 3,
          text: "Step 3: Ask",
        },
        {
          type: "text",
          body: "After listening and empathising, you need to understand the specific problem — because angry customers often mix multiple issues together. Ask open-ended questions: 'Can you tell me exactly what happened with the insurance?' 'What did the doctor say about the medication change?' 'What would the best outcome look like for you?' These questions shift the interaction from emotional venting to problem-solving.",
        },
        {
          type: "heading",
          level: 3,
          text: "Step 4: Propose",
        },
        {
          type: "text",
          body: "Only after listening, empathising, and asking do you propose a solution. The proposal should be concrete, realistic, and framed as a collaborative step: 'Here is what I can do for you right now...' 'Let me check with the pharmacist about...' 'I can call the other branch to see if they have it in stock.' If you cannot solve the problem yourself, explain clearly what the next steps are and who will handle them.",
        },
        {
          type: "table",
          caption: "LEAP Method in Action",
          headers: ["Step", "What You Do", "What You Say"],
          rows: [
            ["Listen", "Full attention, no interruption, eye contact", "(Nothing — just listen. Nod. Show you are present.)"],
            ["Empathise", "Acknowledge their feeling, validate their frustration", "'I completely understand your frustration. This should not have happened.'"],
            ["Ask", "Clarify the specific issue with open questions", "'Can you tell me exactly what happened when you tried to collect the prescription?'"],
            ["Propose", "Offer a concrete next step", "'Here is what I can do: I am going to call the other branch right now to check their stock. If they have it, I can arrange a transfer by this afternoon.'"],
          ],
        },
        {
          type: "knowledge-check",
          question: "What should be your FIRST response when a customer begins shouting about a stock-out?",
          options: [
            "Explain why the medication is out of stock",
            "Offer to check other branches immediately",
            "Listen silently with full attention until they finish",
            "Ask them to calm down",
          ],
          correctIndex: 2,
          explanation:
            "The first step of the LEAP method is Listen. An angry person needs to be heard before they can hear you. Jumping to explanations or solutions before they have finished venting is counterproductive. Asking them to calm down almost always makes things worse.",
        },
      ],
    },
    // ── Lesson 3.3 ──
    {
      id: "m3-l3",
      title: "When to Involve the Pharmacist vs. Handle It Yourself",
      duration: "12 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Knowing Your Limits Is a Strength, Not a Weakness",
        },
        {
          type: "text",
          body: "Not every customer complaint needs the pharmacist. And not every complaint should be handled by you. Knowing which is which is a critical judgment call. Escalate too early and you seem incompetent; escalate too late and the situation may have spiralled out of control. The key is understanding what falls within your authority to resolve and what requires someone with more seniority, clinical knowledge, or legal responsibility.",
        },
        {
          type: "table",
          caption: "Handle Yourself vs. Escalate to Pharmacist",
          headers: ["Handle Yourself", "Involve the Pharmacist"],
          rows: [
            ["Wait time complaints — acknowledge, apologise, give realistic time estimate", "Clinical complaints — patient claims medication caused a reaction"],
            ["Pricing enquiries — explain the cost, offer generic alternatives if available", "Dispensing error concerns — patient believes they received the wrong medication"],
            ["Insurance questions — help navigate paperwork, explain common rejections", "Controlled substance disputes — patient claims they are owed more"],
            ["Stock-out frustration — check other branches, offer to order, suggest alternatives through pharmacist", "Verbal threats — any situation that feels physically threatening"],
            ["Minor service complaints — another staff member was rude or slow", "Prescription validity questions — patient presents a prescription that looks altered"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Golden Rule of Escalation",
          body: "If at any point you feel unsafe, uncertain, or out of your depth — escalate immediately. There is no penalty for involving the pharmacist too early. There can be serious consequences for not involving them when you should have. Trust your instincts.",
        },
        {
          type: "text",
          body: "When you do escalate, do it professionally. Do not say 'I cannot help you — you need to talk to the pharmacist' as if you are passing off a problem. Instead, say 'I want to make sure you get the best possible help with this. Let me bring our pharmacist in — they have the authority to resolve this for you.' Frame the escalation as an upgrade in service, not a retreat.",
        },
        {
          type: "heading",
          level: 3,
          text: "How to Escalate Effectively",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Acknowledge the customer's issue: 'I hear you, and I want this sorted out.'",
            "Explain why you are involving the pharmacist: 'This needs someone with the authority to make that decision.'",
            "Brief the pharmacist before they approach the customer: give a 10-second summary of the issue and the customer's emotional state",
            "Do not abandon the customer: stay nearby, offer a chair if appropriate, check back if the pharmacist is delayed",
            "Follow up after: if the pharmacist resolves it, make a mental note so you know how to handle similar situations in the future",
          ],
        },
        {
          type: "key-term",
          term: "Professional Escalation",
          definition:
            "The deliberate, structured transfer of a customer issue to a more senior or clinically qualified team member. Effective escalation includes briefing the receiving person, framing the transfer positively for the customer, and following up to learn from the resolution.",
        },
        {
          type: "knowledge-check",
          question: "A customer insists they were given the wrong number of tablets last month. They are becoming increasingly agitated. What should you do?",
          options: [
            "Count the current prescription carefully and tell them last month's issue cannot be verified",
            "Offer them extra tablets from current stock to make up the difference",
            "Escalate to the pharmacist — this is a potential dispensing error that requires investigation",
            "Apologise and promise it will not happen again",
          ],
          correctIndex: 2,
          explanation:
            "A patient claiming they received the wrong quantity is a potential dispensing error — a serious matter that must be investigated by the pharmacist. Dismissing it, compensating without investigation, or making promises without understanding what happened are all inappropriate responses.",
        },
      ],
    },
    // ── Lesson 3.4 ──
    {
      id: "m3-l4",
      title: "Dealing with Verbal Abuse — Your Rights and Boundaries",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "You Are a Professional, Not a Punching Bag",
        },
        {
          type: "text",
          body: "There is a line between an angry customer and an abusive one. An angry customer is frustrated about a situation. An abusive customer is attacking you as a person — with insults, threats, racial slurs, sexual comments, or intimidating behaviour. You are under no obligation to accept abuse. Understanding where that line is, and knowing how to enforce it, is essential for your mental health and your safety.",
        },
        {
          type: "text",
          body: "In Caribbean pharmacy settings, there is sometimes an unspoken expectation that service workers should just 'take it' — that the customer is always right, that you should smile through verbal abuse because 'that is the job.' This is wrong. No job requires you to tolerate personal attacks. Your employer has a duty to protect you, and you have the right to set boundaries.",
        },
        {
          type: "table",
          caption: "Anger vs. Abuse — Know the Difference",
          headers: ["Acceptable (Angry)", "Unacceptable (Abusive)"],
          rows: [
            ["Raising their voice about a problem", "Screaming profanities at you"],
            ["Expressing frustration with strong language", "Using racial, ethnic, or sexual slurs"],
            ["Demanding to speak to a manager", "Making physical threats"],
            ["Complaining about service quality", "Making personal insults about your appearance, intelligence, or background"],
            ["Insisting a problem be resolved immediately", "Banging on the counter, throwing objects, or invading your personal space"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Your Safety Comes First",
          body: "If a customer makes a physical threat, invades your space aggressively, or you feel in danger, remove yourself from the situation immediately. Step back, go to the dispensary, and call for help. Do not attempt to de-escalate someone who is physically threatening. No prescription is worth your safety.",
        },
        {
          type: "heading",
          level: 3,
          text: "Setting Boundaries Professionally",
        },
        {
          type: "text",
          body: "Boundaries can be set firmly without aggression. The key is to name the behaviour, state the consequence, and follow through. 'I want to help you, but I am not able to do that while you are speaking to me this way. If we can have a respectful conversation, I will do everything I can to resolve this. If not, I will need to ask you to leave and come back when you are ready.' This is not rude — it is professional boundary enforcement.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Stay calm: do not match their energy or raise your voice",
            "Name the behaviour: 'I understand you are frustrated, but calling me names is not acceptable'",
            "State the boundary: 'I want to help you, but I need you to speak to me respectfully'",
            "Offer a choice: 'We can continue this conversation respectfully, or I can have the pharmacist assist you'",
            "Follow through: if the behaviour continues, step back and involve a senior staff member or security",
            "Document the incident: write down what happened, when, and who was present — this protects you if there are further complaints",
          ],
        },
        {
          type: "key-term",
          term: "Boundary Enforcement",
          definition:
            "The professional act of clearly communicating the limits of acceptable behaviour in an interaction and implementing consequences when those limits are crossed. In pharmacy, boundaries protect both the employee's wellbeing and the professional environment for all patients.",
        },
        {
          type: "case-study",
          title: "Case Study: The Abusive Customer",
          scenario:
            "A man arrives at a pharmacy in Kingston, Jamaica, demanding his prescription be filled immediately. When told there is a 20-minute wait, he begins shouting obscenities and makes a comment about the technician's ethnicity. Other customers are watching. The technician is shaken but tries to remain professional.",
          questions: [
            "At what point did this interaction cross from angry to abusive?",
            "What should the technician say to set a boundary?",
            "What should happen after the interaction ends — for the technician and for the pharmacy?",
          ],
          discussion:
            "The interaction crossed from angry to abusive when the customer used obscenities and made ethnic comments. The technician should say something like: 'Sir, I understand you are frustrated about the wait time, but I am not able to serve you while you are speaking to me this way. I will ask the pharmacist to assist you.' After the incident, the technician should document what happened, the pharmacist should be informed, and the pharmacy's policy on abusive customers should be invoked. The technician should also be given a brief break to recover emotionally.",
        },
        {
          type: "knowledge-check",
          question: "A customer begins using racial slurs while complaining about their insurance rejection. What is the correct response?",
          options: [
            "Ignore the language and focus on resolving the insurance issue",
            "Shout back to establish dominance",
            "Calmly state that the language is unacceptable and that you need respectful communication to continue helping",
            "Walk away without saying anything",
          ],
          correctIndex: 2,
          explanation:
            "Racial slurs are verbal abuse, not merely an expression of frustration. Ignoring them normalises the behaviour. The correct response is a calm, firm boundary: name the behaviour, state the expectation, and offer a choice. Walking away without explanation leaves the situation unresolved.",
        },
      ],
    },
    // ── Lesson 3.5 ──
    {
      id: "m3-l5",
      title: "Branching Scenarios: Real Caribbean Pharmacy Confrontations",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Practice Before the Pressure: Interactive Scenarios",
        },
        {
          type: "text",
          body: "Reading about de-escalation is one thing. Doing it in the moment — with your heart racing, a queue watching, and someone shouting in your face — is entirely different. These scenarios put you in the situation so you can practise making decisions under pressure before you face the real thing. There are no perfect answers, but there are better and worse choices. Each path leads to different outcomes.",
        },
        {
          type: "scenario-simulation",
          title: "Scenario: The Stock-Out Confrontation",
          description:
            "You are working the afternoon shift at a busy community pharmacy in Port of Spain, Trinidad. Mrs. Bartholomew, a regular customer in her 60s, arrives to collect her blood pressure medication — amlodipine 10mg. You check the shelf and the system: out of stock. The supplier has not delivered this week due to a shipping delay. Mrs. Bartholomew has been taking this medication for 8 years. She has no tablets left.",
          nodes: [
            {
              id: "start",
              text: "Mrs. Bartholomew asks for her regular amlodipine. You check the system — completely out of stock. She sees your face and says, 'Oh Lord, doh tell me allyuh eh have it. I need meh tablets! What I supposed to do? Allyuh does never have what people need!' Her voice is rising. Two other customers turn to look.",
              choices: [
                {
                  label: "Explain immediately: 'Sorry, the supplier didn't deliver this week—'",
                  nextNodeId: "explain-first",
                  feedback: "You jumped to explaining before acknowledging her fear. She does not want logistics right now — she wants to know someone cares.",
                },
                {
                  label: "Listen, then empathise: 'Mrs. Bartholomew, I hear you. I know how important this medication is for you.'",
                  nextNodeId: "empathise-first",
                  feedback: "Good instinct. You acknowledged her feelings before trying to fix the problem. This is the LEAP method in action.",
                  isOptimal: true,
                },
                {
                  label: "Get defensive: 'Ma'am, the stock-out is not my fault. I cannot control the suppliers.'",
                  nextNodeId: "defensive",
                  feedback: "You made it about you when she is worried about her health. Defensiveness escalates conflict.",
                },
              ],
            },
            {
              id: "explain-first",
              text: "Mrs. Bartholomew interrupts: 'I doh care about the supplier! What about ME? I have pressure! I could get a stroke! You think this is a joke?' She is louder now. The other customers are watching openly.",
              choices: [
                {
                  label: "Pause, take a breath, then empathise: 'You are absolutely right to be worried. Let me find a solution for you right now.'",
                  nextNodeId: "recovery-empathy",
                  feedback: "Good recovery. You shifted from explaining to empathising. It is not too late to use the LEAP method.",
                  isOptimal: true,
                },
                {
                  label: "Continue explaining: 'If you let me finish, I was going to say we can check another branch.'",
                  nextNodeId: "double-down",
                  feedback: "Telling an upset patient to 'let you finish' sounds condescending and will escalate things further.",
                },
              ],
            },
            {
              id: "empathise-first",
              text: "Mrs. Bartholomew's tone softens slightly: 'I know it eh your fault, darling. But I really need this. I taking this for years. What I going to do?' She is still upset but engaging with you as a person now.",
              choices: [
                {
                  label: "Ask: 'When did you take your last tablet? Let me check what options we have right now.'",
                  nextNodeId: "ask-and-solve",
                  feedback: "Excellent. You are now in the Ask phase of LEAP — gathering information to find a solution.",
                  isOptimal: true,
                },
                {
                  label: "Promise: 'Do not worry, we will definitely have it by tomorrow.'",
                  nextNodeId: "false-promise",
                  feedback: "Never promise what you cannot guarantee. If the supplier does not deliver tomorrow, you have broken her trust and made things worse.",
                },
              ],
            },
            {
              id: "defensive",
              text: "Mrs. Bartholomew erupts: 'So is MY fault now?! I does come here every month and spend meh money and this is how allyuh treat people! Lemme talk to the pharmacist!' Other customers start murmuring. A woman in the queue says 'She right, you know.'",
              choices: [
                {
                  label: "Apologise and reset: 'You are right, I am sorry. Let me help you properly. Your health is what matters here.'",
                  nextNodeId: "recovery-empathy",
                  feedback: "It took a detour, but you recovered. An honest apology and a refocus on her needs can still salvage the interaction.",
                },
                {
                  label: "Call the pharmacist immediately",
                  nextNodeId: "early-escalation",
                  feedback: "Escalating here is not wrong, but you missed an opportunity to build your own de-escalation skills. The pharmacist will need to start from scratch.",
                },
              ],
            },
            {
              id: "recovery-empathy",
              text: "Mrs. Bartholomew pauses. 'Okay... okay. So what we going to do?' She is calmer. She is ready for a solution.",
              choices: [
                {
                  label: "Propose: 'Let me call our Arima branch right now. I will also ask the pharmacist if there is a safe alternative we stock.'",
                  nextNodeId: "good-resolution",
                  feedback: "Perfect. You proposed concrete actions and involved the pharmacist appropriately for the clinical question.",
                  isOptimal: true,
                },
                {
                  label: "Suggest: 'You could try another pharmacy down the road.'",
                  nextNodeId: "send-away",
                  feedback: "Sending a loyal regular customer to a competitor should be the last resort, not the first suggestion. You may lose her permanently.",
                },
              ],
            },
            {
              id: "double-down",
              text: "Mrs. Bartholomew raises her hand: 'Doh tell me to let you finish! I is the customer! Where the pharmacist? I want to talk to somebody in charge!' She is now furious. The situation has escalated significantly.",
              choices: [
                {
                  label: "Step back, take a breath, and say: 'I am going to get the pharmacist for you right now. I am sorry for how this went.'",
                  nextNodeId: "late-escalation",
                  feedback: "Sometimes you need to recognise that the best thing you can do is step back. An honest apology shows maturity.",
                },
              ],
            },
            {
              id: "ask-and-solve",
              text: "Mrs. Bartholomew says: 'I take meh last one this morning. So I eh have none for tomorrow.' You know missing even one day of blood pressure medication can be risky for a long-term patient.",
              choices: [
                {
                  label: "Propose: 'I am going to call our other branches right now. I will also speak to the pharmacist about options. Give me five minutes — please have a seat.'",
                  nextNodeId: "excellent-resolution",
                  feedback: "Textbook LEAP execution. You listened, empathised, asked, and now you are proposing concrete action. Mrs. Bartholomew feels heard and helped.",
                  isOptimal: true,
                },
              ],
            },
            {
              id: "false-promise",
              text: "Mrs. Bartholomew looks relieved. 'You sure? Tomorrow for sure?' You are not sure at all. The supplier has been unreliable all week.",
              choices: [
                {
                  label: "Correct yourself: 'Actually, let me be honest — I am not 100% sure about tomorrow. Let me check what I CAN guarantee right now.'",
                  nextNodeId: "honest-recovery",
                  feedback: "Honesty is always better than a broken promise. Patients respect truthfulness far more than empty reassurance.",
                  isOptimal: true,
                },
                {
                  label: "Double down: 'Yes, definitely tomorrow. I will make sure of it.'",
                  nextNodeId: "broken-trust",
                  feedback: "If the medication does not arrive tomorrow, you will have destroyed this patient's trust. Never promise what you cannot control.",
                },
              ],
            },
            {
              id: "excellent-resolution",
              text: "You call the Arima branch — they have amlodipine 10mg in stock. The pharmacist agrees to transfer 30 tablets. You tell Mrs. Bartholomew she can collect them from Arima this evening or you will have them here by tomorrow morning. She squeezes your hand and says: 'Thank you, darling. I sorry I did shouting. You is a good one.'",
              isEnd: true,
              outcome: "success",
              summary: "Outstanding de-escalation. You followed the LEAP method, addressed Mrs. Bartholomew's fear, and found a concrete solution. She leaves feeling heard, helped, and loyal to your pharmacy.",
            },
            {
              id: "good-resolution",
              text: "You call the other branch and they have stock. The pharmacist suggests a transfer. Mrs. Bartholomew calms down and thanks you. 'I know allyuh does try yuh best. I was just worried.' She leaves with a plan and her dignity intact.",
              isEnd: true,
              outcome: "success",
              summary: "Good recovery after a rocky start. You got to the same positive outcome, though the interaction was more stressful than it needed to be. Next time, lead with empathy from the start.",
            },
            {
              id: "send-away",
              text: "Mrs. Bartholomew stares at you. 'So after 8 years, you just sending me down the road? Fine.' She walks out. She does not come back — not that day, not that month. You have lost a loyal customer.",
              isEnd: true,
              outcome: "failure",
              summary: "Sending a loyal customer to a competitor signals that you do not value their patronage. The correct approach is to exhaust all options — other branches, pharmacist consultation, alternative medications — before suggesting they go elsewhere.",
            },
            {
              id: "early-escalation",
              text: "The pharmacist comes out and handles the situation. Mrs. Bartholomew gets her issue resolved but tells the pharmacist: 'The young one there was not very helpful.' The pharmacist later gives you feedback about building your de-escalation skills.",
              isEnd: true,
              outcome: "partial",
              summary: "The issue was resolved, but you missed an opportunity to develop your own de-escalation skills and build a relationship with the customer. The pharmacist should be a backup, not a crutch.",
            },
            {
              id: "late-escalation",
              text: "The pharmacist takes over and eventually resolves the issue. Mrs. Bartholomew leaves satisfied but shaken. The pharmacist debriefs with you afterwards — not to criticise, but to help you learn for next time.",
              isEnd: true,
              outcome: "partial",
              summary: "The situation escalated further than it needed to. The root cause was trying to explain before empathising. Remember: Listen first. Always.",
            },
            {
              id: "honest-recovery",
              text: "Mrs. Bartholomew appreciates the honesty: 'At least you telling me the truth.' You call other branches, find stock, and arrange a solution. She leaves feeling she can trust you — not because everything went perfectly, but because you were honest.",
              isEnd: true,
              outcome: "success",
              summary: "Honesty recovered what could have been a trust-destroying false promise. Patients value truthfulness over empty reassurance. Well recovered.",
            },
            {
              id: "broken-trust",
              text: "The medication does not arrive tomorrow. Mrs. Bartholomew returns, furious: 'You LIED to me!' This time, nothing you say will help. She leaves, writes a social media post about the pharmacy, and never returns. The pharmacist has to manage the online fallout.",
              isEnd: true,
              outcome: "failure",
              summary: "A false promise always catches up with you. Never commit to something outside your control. Honesty about uncertainty is always better than false confidence.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Reflection",
          body: "Notice how the best outcomes in this scenario all involved empathising before explaining, being honest about limitations, and offering concrete next steps. The worst outcomes came from defensiveness, false promises, and sending the customer away. These patterns hold true in almost every pharmacy confrontation.",
        },
        {
          type: "knowledge-check",
          question: "In the stock-out scenario, which initial response leads to the best outcome?",
          options: [
            "Immediately explaining the supply chain issue",
            "Acknowledging the customer's feelings and showing you understand their concern",
            "Getting defensive about the stock-out not being your fault",
            "Promising the medication will be available tomorrow",
          ],
          correctIndex: 1,
          explanation:
            "Leading with empathy — 'I hear you, I know how important this medication is' — de-escalates the emotional intensity and opens the door to problem-solving. Explanations, defensiveness, and false promises all escalate or defer the conflict.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m3-q1",
      question:
        "What does the acronym LEAP stand for in the context of de-escalation?",
      options: [
        "Listen, Explain, Apologise, Promise",
        "Listen, Empathise, Ask, Propose",
        "Look, Evaluate, Act, Prevent",
        "Listen, Engage, Assess, Placate",
      ],
      correctIndex: 1,
      explanation:
        "LEAP stands for Listen, Empathise, Ask, Propose. The method works because it addresses the emotional dimension of conflict (through listening and empathising) before moving to problem-solving (through asking and proposing).",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q2",
      question:
        "When a customer begins shouting about a stock-out, what is the FIRST thing you should do?",
      options: [
        "Explain the supply chain issue",
        "Offer to check another branch",
        "Listen without interrupting until they finish",
        "Ask them to lower their voice",
      ],
      correctIndex: 2,
      explanation:
        "The first step of the LEAP method is Listen. Let the customer express their frustration fully before attempting any response. Interrupting, explaining, or asking them to calm down all tend to escalate the situation.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q3",
      question:
        "What is the emotional root behind most customer anger about medication stock-outs?",
      options: [
        "Desire to cause problems for pharmacy staff",
        "Habit of being difficult with service workers",
        "Fear about their health and what happens without their medication",
        "Expectation of a discount or compensation",
      ],
      correctIndex: 2,
      explanation:
        "When a patient cannot get medication they depend on, the underlying emotion is almost always fear — about their health, their ability to manage their condition, and the uncertainty of when they will get their medication. Understanding this helps you respond with empathy rather than defensiveness.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m3-q4",
      question:
        "Which of the following situations should be escalated to the pharmacist immediately?",
      options: [
        "A customer is upset about a 15-minute wait time",
        "A customer says they received the wrong number of tablets last month",
        "A customer is asking about the price of a generic medication",
        "A customer is frustrated because the pharmacy is closing soon",
      ],
      correctIndex: 1,
      explanation:
        "A claim of receiving the wrong quantity is a potential dispensing error — a serious matter that requires pharmacist investigation, documentation, and possible reporting. Wait time complaints, pricing queries, and closing time frustrations are within the technician's scope to address.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m3-q5",
      question:
        "What is the key difference between an angry customer and an abusive customer?",
      options: [
        "An angry customer speaks loudly; an abusive customer speaks quietly",
        "An angry customer is frustrated about a situation; an abusive customer is attacking you as a person",
        "An angry customer leaves; an abusive customer stays",
        "An angry customer wants a refund; an abusive customer wants to cause harm",
      ],
      correctIndex: 1,
      explanation:
        "The distinction is between situational frustration (anger at a stock-out, wait time, or cost) and personal attacks (insults, racial slurs, threats, intimidation). A customer can be very angry without being abusive. The line is crossed when the target shifts from the problem to the person.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m3-q6",
      question:
        "When setting a boundary with an abusive customer, which approach is MOST appropriate?",
      options: [
        "Shout louder than them to establish authority",
        "Silently walk away to the back of the pharmacy",
        "Calmly name the behaviour, state the boundary, and offer a choice",
        "Threaten to call the police immediately",
      ],
      correctIndex: 2,
      explanation:
        "Professional boundary enforcement involves three steps: name the specific behaviour ('calling me names is not acceptable'), state the boundary ('I need you to speak respectfully'), and offer a choice ('we can continue respectfully, or I will ask the pharmacist to assist you'). This is firm without being aggressive.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q7",
      question:
        "Why is telling a customer 'calm down' generally counterproductive during a confrontation?",
      options: [
        "It is too polite and they will not take you seriously",
        "It invalidates their emotions and often increases their frustration",
        "It is technically outside your scope of practice",
        "It is only effective when said loudly",
      ],
      correctIndex: 1,
      explanation:
        "Telling someone to 'calm down' implies their emotional response is unreasonable, which invalidates their feelings and typically escalates the situation. It is perceived as dismissive — the opposite of what an upset person needs to hear.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q8",
      questionType: "scenario",
      question:
        "A customer has been waiting 30 minutes for a prescription that was promised in 15. They approach the counter angrily: 'This is ridiculous! I have been waiting forever!' Which response best follows the LEAP method?",
      options: [
        "'Your prescription is almost ready, just two more minutes.'",
        "'I understand your frustration — you were told 15 minutes and it has been much longer. Let me check exactly where your prescription is right now.'",
        "'I am sorry, but we are very busy today. You will just have to wait.'",
        "'The pharmacist is behind schedule, not me. I already entered your prescription.'",
      ],
      correctIndex: 1,
      questionData: {
        context: "A busy pharmacy where prescriptions are running behind the promised completion time.",
      },
      explanation:
        "This response follows LEAP: it empathises with the customer's frustration, acknowledges the specific issue (promised 15 minutes, waited 30), and proposes an immediate action (checking the status). It does not make excuses, blame others, or dismiss the concern.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q9",
      questionType: "true_false",
      question:
        "If a customer uses racial slurs while complaining, you should ignore the language and focus on resolving their pharmacy issue.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "Racial slurs constitute verbal abuse, not merely strong language. Ignoring them normalises the behaviour and harms both you and the professional environment. The correct response is to calmly set a boundary: name the behaviour as unacceptable and state that respectful communication is required to continue.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m3-q10",
      questionType: "ordering",
      question:
        "Arrange the LEAP de-escalation steps in the correct order:",
      options: [
        "Propose a solution or next step",
        "Empathise with the customer's feelings",
        "Ask clarifying questions to understand the specific issue",
        "Listen without interrupting",
      ],
      correctIndex: 0,
      questionData: {
        correct_order: [3, 1, 2, 0],
      },
      explanation:
        "The correct LEAP order is: (1) Listen — give full attention without interrupting, (2) Empathise — acknowledge their feelings, (3) Ask — clarify the specific problem with open questions, (4) Propose — offer a concrete solution or next step.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q11",
      question:
        "How should you frame the escalation when involving the pharmacist in a customer complaint?",
      options: [
        "'I cannot deal with this — you need to talk to someone else.'",
        "'I want to make sure you get the best possible help. Let me bring our pharmacist in — they have the authority to resolve this.'",
        "'The pharmacist will tell you the same thing I just said.'",
        "'Fine, I will get my manager since you refuse to listen to me.'",
      ],
      correctIndex: 1,
      explanation:
        "Framing the escalation as an upgrade in service — rather than a retreat or a dismissal — maintains the customer's dignity and your professionalism. It positions the pharmacist's involvement as additional help, not a sign of your failure.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q12",
      questionType: "multiple_select",
      question:
        "Which of the following are appropriate actions after a verbally abusive interaction? (Select all that apply)",
      options: [
        "Document the incident with details of what was said and who was present",
        "Post about the experience on social media to warn others",
        "Inform the pharmacist about what happened",
        "Take a brief break to recover emotionally",
        "Refuse to serve the customer if they return",
      ],
      correctIndex: 0,
      questionData: {
        correct_indices: [0, 2, 3],
      },
      explanation:
        "After a verbally abusive interaction, you should document the incident, inform the pharmacist, and take a break to recover. Posting on social media is unprofessional and potentially a confidentiality breach. Refusing future service is a management decision, not yours to make unilaterally.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
  ],
};

// ============================================================================
// MODULE 4 — Emotional Intelligence in the Pharmacy Workplace
// ============================================================================

const module4: Module = {
  id: "m4-emotional-intelligence",
  number: 4,
  title: "Emotional Intelligence in the Pharmacy Workplace",
  description:
    "Technical skills get you the job. Emotional intelligence determines whether you keep it — and whether you thrive or merely survive. This module develops the four pillars of emotional intelligence as they apply to the unique pressures of Caribbean pharmacy practice.",
  learningObjectives: [
    "Identify personal emotional triggers that affect performance under pressure",
    "Apply empathic listening techniques to understand the person behind the prescription",
    "Demonstrate emotional regulation strategies during high-stress pharmacy situations",
    "Navigate workplace dynamics and professional hierarchy with social intelligence",
  ],
  lessons: [
    // ── Lesson 4.1 ──
    {
      id: "m4-l1",
      title: "Self-Awareness: Recognising Your Triggers Under Pressure",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Person You Need to Understand First Is Yourself",
        },
        {
          type: "text",
          body: "Before you can manage the emotions of customers and colleagues, you need to understand your own. Self-awareness — the ability to recognise your emotions as they arise and understand how they influence your behaviour — is the foundation of emotional intelligence. In a pharmacy setting, where stress is constant and interactions are intense, self-awareness is the difference between responding professionally and reacting impulsively.",
        },
        {
          type: "text",
          body: "Everyone has emotional triggers — specific situations, behaviours, or words that provoke a disproportionate emotional reaction. Maybe it is when a customer talks down to you. Maybe it is when you make a mistake in front of a colleague. Maybe it is when someone questions your competence. These triggers are not weaknesses — they are information. Understanding them gives you power over them.",
        },
        {
          type: "key-term",
          term: "Emotional Trigger",
          definition:
            "A specific stimulus — a situation, behaviour, tone of voice, or phrase — that provokes a strong emotional reaction, often disproportionate to the objective severity of the event. Triggers are shaped by personal history, cultural background, and past experiences. Recognising them allows conscious choice over response rather than automatic reaction.",
        },
        {
          type: "heading",
          level: 3,
          text: "Common Pharmacy Triggers",
        },
        {
          type: "table",
          caption: "Common Emotional Triggers for Pharmacy Technicians",
          headers: ["Trigger", "Typical Reaction", "What Is Really Happening"],
          rows: [
            ["Being spoken to rudely by a customer", "Anger, defensiveness, desire to snap back", "The rudeness threatens your sense of dignity and respect"],
            ["Making an error in front of the pharmacist", "Shame, anxiety, desire to hide or minimise", "Fear of being judged as incompetent"],
            ["Being rushed when you need to concentrate", "Irritation, frustration, mistakes increase", "Feeling that accuracy is being sacrificed for speed"],
            ["A colleague taking credit for your work", "Resentment, withdrawal, passive aggression", "Perceived unfairness and lack of recognition"],
            ["Dealing with a patient's suffering that mirrors your own life", "Sadness, over-involvement, emotional exhaustion", "Personal resonance — their pain activates your own"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Trigger Journal",
          body: "For one week, keep a small notebook in your pocket. Every time you have a strong emotional reaction at work, jot down three things: (1) what happened, (2) what you felt, (3) what you did. After a week, review your notes. Patterns will emerge. Those patterns are your triggers, and naming them is the first step to managing them.",
        },
        {
          type: "text",
          body: "Self-awareness also means understanding your baseline emotional state. Did you sleep badly? Are you hungry? Did you argue with someone before work? These factors affect your emotional resilience. On days when your baseline is low, you are more likely to react to triggers. Acknowledging this — 'I am running on four hours of sleep, so I need to be extra careful with my patience today' — is not weakness. It is strategic self-management.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Check in with yourself at the start of each shift: how am I feeling today? What is my energy level?",
            "Notice physical cues: tight jaw, clenched fists, shallow breathing, and racing heartbeat all signal rising emotion",
            "Name the emotion: 'I am feeling frustrated' is more useful than just feeling frustrated without labelling it",
            "Recognise the difference between a reaction and a response: a reaction is automatic; a response is chosen",
            "Accept that some days will be harder than others — and plan accordingly",
          ],
        },
        {
          type: "knowledge-check",
          question: "What is the primary benefit of identifying your emotional triggers?",
          options: [
            "You can avoid all stressful situations at work",
            "You can consciously choose your response instead of reacting automatically",
            "You can prove that difficult customers are the problem, not you",
            "You can request not to serve certain types of customers",
          ],
          correctIndex: 1,
          explanation:
            "Identifying triggers does not eliminate them — it gives you the space between stimulus and response to make a conscious choice. Instead of reacting automatically (snapping, withdrawing, getting defensive), you can choose a professional response because you recognise what is happening inside you.",
        },
      ],
    },
    // ── Lesson 4.2 ──
    {
      id: "m4-l2",
      title: "Empathy: Reading the Person Behind the Prescription",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Every Prescription Tells a Story",
        },
        {
          type: "text",
          body: "A prescription is a piece of paper with a drug name, a dose, and a frequency. But behind every prescription is a human being with a story. The woman collecting metformin is not just 'a diabetic' — she is a mother of three who was just diagnosed, who is terrified about what this means for her future, and who is embarrassed to be in the pharmacy at all. The man collecting sildenafil is not just 'a customer' — he may be dealing with shame, relationship anxiety, and the vulnerability of asking for help with something deeply personal.",
        },
        {
          type: "text",
          body: "Empathy in pharmacy does not mean feeling what the patient feels — that would be emotionally unsustainable. It means recognising what they might be feeling and letting that recognition shape how you interact with them. It is the difference between processing a prescription and serving a person.",
        },
        {
          type: "key-term",
          term: "Cognitive Empathy",
          definition:
            "The ability to understand another person's perspective, emotions, and experience without necessarily sharing those feelings. Unlike emotional empathy (feeling what they feel), cognitive empathy is a skill that can be developed and deployed strategically in professional settings without leading to emotional burnout.",
        },
        {
          type: "heading",
          level: 3,
          text: "Reading the Signals",
        },
        {
          type: "text",
          body: "Patients rarely tell you how they are feeling. You have to read the signals. The patient who avoids eye contact while collecting psychiatric medication is probably anxious about stigma. The elderly man who comes in three times a week 'just to check on something' may be lonely. The young woman who asks for a pregnancy test with trembling hands may be terrified. You do not need to address these emotions explicitly — but being aware of them changes the quality of your service.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Watch for body language cues: avoidance, fidgeting, forced smiles, tears being held back",
            "Listen to what they are NOT saying: the question they hesitate to ask, the topic they circle around",
            "Consider the medication itself: what condition does it treat? How might someone feel about having that condition?",
            "Notice changes in regulars: a usually cheerful patient who is suddenly withdrawn may be going through something",
            "Remember cultural context: in the Caribbean, admitting vulnerability or asking for help with mental health can carry significant stigma",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Empathy and Stigma in the Caribbean",
          body: "Mental health medication, HIV treatment, medications for sexually transmitted infections, and even certain chronic disease medications can carry stigma in Caribbean communities. A pharmacy technician who handles these prescriptions with matter-of-fact professionalism — treating them exactly like any other medication — does more for destigmatisation than any public health campaign.",
        },
        {
          type: "case-study",
          title: "Case Study: The Silent Patient",
          scenario:
            "Marcus, a 35-year-old man, comes to a pharmacy in Bridgetown, Barbados, to collect antiretroviral medication for the first time. He is well-dressed, speaks quietly, and avoids eye contact with anyone in the pharmacy. He slides the prescription across the counter face-down and says, 'I will wait.' When you look at the prescription, you see it is for tenofovir/emtricitabine — a first-line HIV treatment. When his medication is ready, there are three other customers at the counter.",
          questions: [
            "What emotional experience is Marcus most likely having right now?",
            "How would you handle giving him the medication with other customers present?",
            "What small gestures could make this experience less painful for Marcus?",
          ],
          discussion:
            "Marcus is almost certainly experiencing shame, fear, and vulnerability. He has just received a life-changing diagnosis and is in a public space collecting medication that could reveal his status. The technician should lower their voice, process the medication discreetly, use opaque packaging, and avoid reading the medication name aloud. If the pharmacy has a private consultation area, this is exactly when to use it. These small acts of discretion can determine whether Marcus adheres to his treatment or avoids the pharmacy out of shame.",
        },
        {
          type: "knowledge-check",
          question: "What is the difference between cognitive empathy and emotional empathy?",
          options: [
            "Cognitive empathy is fake; emotional empathy is genuine",
            "Cognitive empathy means understanding someone's feelings; emotional empathy means sharing them",
            "Cognitive empathy is for professionals; emotional empathy is for family",
            "There is no meaningful difference between the two",
          ],
          correctIndex: 1,
          explanation:
            "Cognitive empathy is understanding another person's emotional experience without absorbing it yourself. Emotional empathy is actually sharing the feeling. In healthcare settings, cognitive empathy is the sustainable skill — it allows you to be sensitive and effective without becoming emotionally overwhelmed.",
        },
      ],
    },
    // ── Lesson 4.3 ──
    {
      id: "m4-l3",
      title: "Emotional Regulation: Staying Calm When Everything Is Chaotic",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Calm Is a Skill, Not a Personality Trait",
        },
        {
          type: "text",
          body: "Some people seem naturally calm under pressure. They handle irate customers, computer crashes, and stock crises with an unshakeable composure that makes the rest of us wonder if they even have a pulse. Here is the truth: calmness under pressure is not a personality trait — it is a skill that can be learned, practised, and strengthened. You do not have to be born calm to become calm at work.",
        },
        {
          type: "text",
          body: "Emotional regulation does not mean suppressing your emotions. Suppression — pretending you are not angry, not frustrated, not overwhelmed — actually makes things worse. Suppressed emotions leak out in other ways: snapping at a colleague, making careless errors, dreading your next shift. True emotional regulation means feeling the emotion, acknowledging it, and choosing how to express it — or choosing not to express it until the right moment.",
        },
        {
          type: "key-term",
          term: "Emotional Regulation",
          definition:
            "The ability to manage and modify emotional reactions in a way that is appropriate to the situation. It involves recognising emotions as they arise, understanding their origin, and consciously choosing a response rather than being driven by automatic reactions. It is not the same as emotional suppression.",
        },
        {
          type: "heading",
          level: 3,
          text: "Practical Techniques for the Pharmacy Floor",
        },
        {
          type: "table",
          caption: "Emotional Regulation Techniques for Pharmacy Technicians",
          headers: ["Technique", "How It Works", "When to Use It"],
          rows: [
            ["The 4-7-8 Breath", "Inhale for 4 seconds, hold for 7, exhale for 8. Activates the parasympathetic nervous system.", "When your heart rate rises during a confrontation or after a stressful interaction"],
            ["The Mental Pause", "Before responding to a provocation, silently count to three. Those three seconds create space between trigger and response.", "When a customer says something that makes you want to snap back"],
            ["The Name-It-To-Tame-It", "Silently label your emotion: 'I am feeling angry.' Research shows naming emotions reduces their intensity.", "When you notice a strong emotion building during any interaction"],
            ["The Physical Reset", "Step back from the counter for 30 seconds. Stretch your hands. Roll your shoulders. Change your physical state.", "During a lull after a difficult interaction"],
            ["The Perspective Shift", "Ask yourself: 'Will this matter in a week?' Most pharmacy stressors will not.", "When minor frustrations start accumulating throughout a shift"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The 30-Second Rule",
          body: "After every difficult interaction, give yourself 30 seconds before serving the next customer. Take a breath, shake off the residual emotion, and reset. The next customer deserves a clean start, not the emotional overflow from the last one.",
        },
        {
          type: "text",
          body: "Emotional regulation also means managing the cumulative stress of the shift, not just individual incidents. A single difficult customer is manageable. Five difficult customers in a row, combined with a short-staffed shift, a broken printer, and a missed lunch break, can push anyone to breaking point. The goal is not to be stoic — the goal is to notice when you are approaching your limit and take action before you cross it.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Know your warning signs: irritability, sighing, rushing through tasks, making small errors, wanting the shift to end",
            "Take your breaks: skipping breaks to 'power through' actually reduces your effectiveness",
            "Ask for help: telling the pharmacist 'I am having a rough shift — can you take the next walk-in?' is not weakness",
            "Hydrate and eat: basic physiological needs directly affect emotional resilience",
            "Debrief after bad interactions: talking it through with a trusted colleague reduces emotional residue",
          ],
        },
        {
          type: "knowledge-check",
          question: "What is the key difference between emotional regulation and emotional suppression?",
          options: [
            "They are the same thing — both involve hiding your emotions",
            "Regulation means feeling and choosing your response; suppression means pretending you do not feel anything",
            "Regulation is for managers; suppression is for frontline staff",
            "Regulation happens before the emotion; suppression happens after",
          ],
          correctIndex: 1,
          explanation:
            "Emotional regulation involves acknowledging the emotion and consciously choosing how to respond. Emotional suppression involves pretending the emotion does not exist. Suppression is associated with burnout, leaked aggression, and decreased job satisfaction, while regulation supports long-term professional resilience.",
        },
      ],
    },
    // ── Lesson 4.4 ──
    {
      id: "m4-l4",
      title: "Social Skills: Navigating Workplace Dynamics and Hierarchy",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Pharmacy Is a Social Ecosystem",
        },
        {
          type: "text",
          body: "A pharmacy is not just a workplace — it is a social ecosystem with its own dynamics, alliances, tensions, and unwritten power structures. The pharmacist who technically supervises you but lets the senior technician run the show. The colleague who gossips about everyone. The delivery driver who expects a certain level of familiarity. Navigating these dynamics requires social intelligence — the ability to read interpersonal situations accurately and respond in ways that build positive relationships without compromising your values.",
        },
        {
          type: "text",
          body: "In Caribbean workplaces, hierarchy often operates differently than in textbook management theory. Respect for seniority is deeply ingrained, but so is a communal work culture where everyone looks out for everyone. Understanding both the formal hierarchy (pharmacist → senior technician → junior technician) and the informal one (who actually has influence, who the pharmacist trusts most, who the customers ask for) is essential to navigating the workplace effectively.",
        },
        {
          type: "key-term",
          term: "Social Intelligence",
          definition:
            "The ability to effectively navigate social situations, understand interpersonal dynamics, and build relationships that serve both professional goals and personal wellbeing. In the workplace, social intelligence includes knowing when to speak up and when to stay quiet, how to give and receive feedback, and how to build trust with diverse colleagues.",
        },
        {
          type: "heading",
          level: 3,
          text: "Navigating Common Workplace Dynamics",
        },
        {
          type: "table",
          caption: "Workplace Dynamics and Smart Responses",
          headers: ["Dynamic", "Scenario", "Smart Response"],
          rows: [
            ["The Gatekeeper Senior Technician", "A senior colleague controls information, tasks, and access to the pharmacist", "Respect their position, learn from them, and build trust slowly — but maintain direct communication with the pharmacist as well"],
            ["The Gossip Network", "Colleagues frequently discuss other staff members' personal business", "Listen politely but do not contribute. Change the subject. Do not share personal information with known gossips"],
            ["The Overworked Pharmacist", "The pharmacist is stressed and sometimes short-tempered with staff", "Do not take it personally. Anticipate their needs. Choose timing carefully for non-urgent questions"],
            ["The Clique", "A group of established staff socialise together and seem to exclude newcomers", "Be professional and friendly without trying to force your way in. Cliques often soften once they see you are reliable"],
            ["The Credit-Taker", "A colleague takes credit for work you did", "Document your contributions. Mention your work casually in conversation with the pharmacist. Do not accuse publicly — address it privately"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Workplace Politics in Small Teams",
          body: "Caribbean pharmacies often have small teams — 3 to 8 people — which means workplace dynamics are amplified. A conflict between two people affects everyone. A misunderstanding can fester for months in a small space. Address issues early, privately, and professionally. Small-team conflict left unresolved becomes toxic quickly.",
        },
        {
          type: "island-comparison",
          title: "Workplace Culture Across the Caribbean",
          description:
            "Workplace social dynamics are influenced by broader cultural norms that vary across the region.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Strong culture of picong (good-natured teasing) — know the difference between humour and disrespect",
                "Multi-ethnic workplaces are common — cultural sensitivity across Indo-Trinidadian, Afro-Trinidadian, mixed, and other communities is essential",
                "Family connections matter — your colleague may be related to your customer, your neighbour, or your pharmacist",
                "Lime culture extends to the workplace — social bonding during breaks is important for team cohesion",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Respect for elders and seniority is deeply embedded in workplace culture",
                "Direct communication style — Jamaicans tend to be upfront, which can be misread as aggression by those from more indirect cultures",
                "Church and community connections often intersect with workplace relationships",
                "Strong work ethic is valued — being seen as a hard worker builds social capital quickly",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Formality and politeness are highly valued in Bajan workplace culture",
                "Small-island dynamics mean professional reputation travels fast — one bad workplace interaction can follow you",
                "Public service pharmacies (polyclinics) have their own institutional culture distinct from private pharmacies",
                "Strong emphasis on 'doing things properly' — cutting corners is noticed and judged",
              ],
            },
          ],
        },
        {
          type: "text",
          body: "The golden rule of workplace social navigation is this: be excellent at your job first, and the social dynamics become much easier to navigate. Competence earns respect, and respect opens doors. No amount of social skill compensates for poor work quality, and no amount of workplace politics can undermine a genuinely excellent technician for long.",
        },
        {
          type: "knowledge-check",
          question: "A colleague consistently takes credit for work you did together. What is the MOST professional way to address this?",
          options: [
            "Confront them publicly in front of other staff",
            "Stop working with them entirely and do everything alone",
            "Document your contributions and address the issue privately with the colleague",
            "Complain to other coworkers to build support for your side",
          ],
          correctIndex: 2,
          explanation:
            "Addressing the issue privately and professionally is the correct approach. Documenting your contributions creates a factual record. Public confrontation creates drama; withdrawal hurts the team; and building a coalition turns a two-person issue into a workplace-wide conflict.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m4-q1",
      question:
        "What is the foundation of emotional intelligence?",
      options: [
        "Being naturally calm in all situations",
        "Self-awareness — recognising your own emotions and triggers",
        "Ability to suppress all negative emotions",
        "Being liked by everyone in the workplace",
      ],
      correctIndex: 1,
      explanation:
        "Self-awareness is the foundation upon which all other emotional intelligence skills are built. Without understanding your own emotional patterns, triggers, and reactions, you cannot effectively manage them or empathise with others.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q2",
      question:
        "What does 'cognitive empathy' mean in a pharmacy context?",
      options: [
        "Feeling the exact same emotions as the patient",
        "Understanding the patient's perspective without absorbing their feelings",
        "Ignoring the patient's emotions to maintain professionalism",
        "Diagnosing the patient's emotional state and treating it",
      ],
      correctIndex: 1,
      explanation:
        "Cognitive empathy is the professional skill of understanding another person's emotional experience without becoming emotionally overwhelmed yourself. It is sustainable and effective for healthcare workers because it allows sensitivity without burnout.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q3",
      question:
        "Which emotional regulation technique involves silently labelling your emotions to reduce their intensity?",
      options: [
        "The 4-7-8 Breath",
        "The Perspective Shift",
        "The Name-It-To-Tame-It technique",
        "The Physical Reset",
      ],
      correctIndex: 2,
      explanation:
        "The Name-It-To-Tame-It technique involves silently labelling your emotion — 'I am feeling angry' — which research shows activates the prefrontal cortex and reduces the intensity of the emotion. Naming creates psychological distance between you and the feeling.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q4",
      question:
        "A pharmacy colleague frequently gossips about other staff members. What is the BEST approach?",
      options: [
        "Join in to fit in with the team",
        "Listen politely but do not contribute, and avoid sharing personal information",
        "Report them to the pharmacist immediately",
        "Confront them publicly and tell them to stop",
      ],
      correctIndex: 1,
      explanation:
        "The socially intelligent approach is to avoid participating in gossip without creating conflict. Listening politely without contributing, changing the subject, and not sharing personal information with known gossips protects your reputation and relationships.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q5",
      question:
        "Why is emotional suppression harmful for pharmacy technicians?",
      options: [
        "It makes you slower at dispensing",
        "It leads to leaked aggression, burnout, and decreased job satisfaction",
        "It is against pharmacy regulations",
        "It makes customers trust you less",
      ],
      correctIndex: 1,
      explanation:
        "Emotional suppression — pretending negative emotions do not exist — is associated with burnout, leaked aggression (snapping at colleagues or patients), increased errors, and decreased job satisfaction. Healthy emotional regulation involves acknowledging feelings and choosing responses, not denying emotions exist.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m4-q6",
      question:
        "A patient collecting HIV medication avoids eye contact and slides the prescription face-down. What does this behaviour most likely indicate?",
      options: [
        "They are in a hurry and want quick service",
        "They are experiencing shame or fear of stigma",
        "They are angry about their diagnosis",
        "They do not trust the pharmacy",
      ],
      correctIndex: 1,
      explanation:
        "Avoiding eye contact and concealing the prescription are classic indicators of shame and fear of stigma. HIV medication still carries significant stigma in many Caribbean communities. The empathic response is to handle the interaction with discretion, lowered voice, and matter-of-fact professionalism.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m4-q7",
      questionType: "scenario",
      question:
        "You are having a terrible day — you slept poorly, argued with a family member, and missed breakfast. A customer makes a mildly rude comment. You feel disproportionately angry. Using emotional intelligence principles, what should you recognise?",
      options: [
        "The customer is being unreasonable and deserves a firm response",
        "Your lowered baseline emotional state is making you more reactive than usual",
        "You should go home because you are not fit to work",
        "You should suppress the anger and pretend everything is fine",
      ],
      correctIndex: 1,
      questionData: {
        context: "A pharmacy technician experiencing personal stressors that affect work performance.",
      },
      explanation:
        "Self-awareness means recognising that your emotional baseline — affected by poor sleep, hunger, and personal conflict — has lowered your resilience. The anger is disproportionate because of your state, not the customer's behaviour. Recognising this allows you to choose a measured response rather than reacting from your depleted emotional state.",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m4-q8",
      questionType: "true_false",
      question:
        "Emotional regulation and emotional suppression are the same thing — both involve controlling your feelings at work.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "Emotional regulation and suppression are fundamentally different. Regulation involves acknowledging the emotion and choosing how to respond. Suppression involves pretending the emotion does not exist. Regulation is healthy and sustainable; suppression leads to burnout, leaked aggression, and decreased job satisfaction.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q9",
      question:
        "In Trinidadian workplace culture, what is 'picong' and why is it relevant to pharmacy workplace dynamics?",
      options: [
        "A type of pharmacy inventory system",
        "Good-natured teasing that is part of social bonding — knowing the line between humour and disrespect is important",
        "A formal complaint process for workplace issues",
        "A traditional medicine practice",
      ],
      correctIndex: 1,
      explanation:
        "Picong is a Trinidadian cultural tradition of good-natured teasing and witty banter. In the workplace, it serves as a social bonding tool, but knowing where humour ends and disrespect begins is crucial. New team members should observe the culture before participating.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q10",
      question:
        "After a very difficult customer interaction, what is the recommended action before serving the next customer?",
      options: [
        "Immediately serve the next customer to keep the queue moving",
        "Take 30 seconds to breathe, reset, and release residual emotion",
        "Complain to a colleague about what just happened",
        "Take a full 30-minute break",
      ],
      correctIndex: 1,
      explanation:
        "The 30-second reset allows you to release residual emotion from the previous interaction so the next customer gets a clean start. Immediately serving the next person risks carrying over negative energy. A full break may not be feasible, and complaining reinforces the negative emotion.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 5 — Time Management & Prioritisation Under Pressure
// ============================================================================

const module5: Module = {
  id: "m5-time-management",
  number: 5,
  title: "Time Management & Prioritisation Under Pressure",
  description:
    "Caribbean pharmacies are chronically under-resourced and over-demanded. You will never have enough time, enough staff, or enough counter space. This module teaches you how to triage, prioritise, and manage competing demands without losing your mind or your accuracy.",
  learningObjectives: [
    "Apply triage principles to determine customer priority at the pharmacy counter",
    "Differentiate between genuine multitasking and ineffective task-switching",
    "Develop strategies for managing simultaneous phone calls and walk-in customers",
    "Create survival strategies for understaffed shifts that maintain safety and service quality",
  ],
  lessons: [
    // ── Lesson 5.1 ──
    {
      id: "m5-l1",
      title: "Triage at the Counter: Who Needs You First and Why",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Not Every Customer Gets Served in the Order They Arrive",
        },
        {
          type: "text",
          body: "Triage is a concept borrowed from emergency medicine: when resources are limited, you serve the most urgent needs first, not the person who arrived first. In a pharmacy, this means making rapid judgement calls about who needs immediate attention and who can wait. It is not about who shouts loudest or who looks most important — it is about who has the most time-sensitive need.",
        },
        {
          type: "text",
          body: "This is a culturally sensitive skill in the Caribbean, where queue-jumping is a serious social offence. If you prioritise one customer over another, you need to do it transparently and with respect for those who are waiting. A brief explanation — 'I just need to help this mother with a sick child first — I will be right with you' — usually earns understanding rather than resentment.",
        },
        {
          type: "key-term",
          term: "Counter Triage",
          definition:
            "The informal process of assessing which customer needs should be addressed first based on urgency, medical need, and the complexity of the request. Unlike emergency department triage, counter triage is unstructured and relies on the technician's judgement, observational skills, and experience.",
        },
        {
          type: "table",
          caption: "Counter Triage Priority Levels",
          headers: ["Priority", "Description", "Examples"],
          rows: [
            ["Urgent — serve immediately", "Medical urgency, visible distress, time-critical medication", "Sick child with fever, patient with no medication left (especially insulin or cardiac drugs), allergic reaction needing antihistamine"],
            ["High — serve next", "Significant inconvenience if delayed, emotionally distressed", "Patient on lunch break with strict time limit, patient who has been waiting longer than promised, elderly patient who appears fatigued"],
            ["Standard — serve in order", "Routine transactions, no time pressure", "Regular prescription collection, OTC purchase, general enquiry"],
            ["Low — can wait with explanation", "Non-urgent requests that can be deferred", "Price comparison enquiries, general product browsing, non-urgent callback requests"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Triage Is Not About Judging Worth",
          body: "Triage is about urgency, not importance. The business executive in a suit does not automatically get priority over the grandmother in house slippers. A parent with a wheezing child takes priority over a healthy adult collecting a routine refill, regardless of who arrived first or who looks more 'important'. Judge the need, not the person.",
        },
        {
          type: "text",
          body: "Effective triage also means scanning the queue proactively. Do not wait for customers to reach the counter before assessing their needs. A quick glance at who is waiting can tell you a lot: the person holding a sick baby, the person checking their watch every 10 seconds, the person who has been sitting patiently for 30 minutes. Reading the queue is a skill that comes with practice.",
        },
        {
          type: "knowledge-check",
          question: "Three customers are waiting: a healthy adult collecting a routine refill, a parent with a feverish toddler, and a professional on lunch break. Who should you prioritise?",
          options: [
            "The professional, because their time is limited",
            "The adult collecting the refill, because they were first in line",
            "The parent with the feverish toddler, because of medical urgency",
            "All three equally — first come, first served",
          ],
          correctIndex: 2,
          explanation:
            "A sick child with fever represents a medical urgency that should be prioritised regardless of queue order. The parent needs medication quickly to treat the child. A brief explanation to those waiting usually earns understanding.",
        },
      ],
    },
    // ── Lesson 5.2 ──
    {
      id: "m5-l2",
      title: "Multitasking vs. Task-Switching — What Actually Works",
      duration: "12 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Multitasking Myth",
        },
        {
          type: "text",
          body: "Here is an uncomfortable truth: human beings cannot multitask. What we call 'multitasking' is actually rapid task-switching — jumping between tasks so quickly that it feels simultaneous. The problem is that every switch costs time and accuracy. Research shows that task-switching can reduce productivity by up to 40% and significantly increases error rates. In a pharmacy, where errors can harm patients, this is not just an efficiency issue — it is a safety issue.",
        },
        {
          type: "text",
          body: "This does not mean you can only do one thing at a time — it means you need to be strategic about how you manage multiple demands. Some tasks can be batched. Some can be sequenced. Some genuinely need to be interrupted. The key is knowing the difference.",
        },
        {
          type: "key-term",
          term: "Task-Switching Cost",
          definition:
            "The measurable decrease in speed and accuracy that occurs every time you shift your attention from one task to another. In pharmacy, this cost manifests as longer processing times, increased error rates, and mental fatigue. The cost is highest when switching between tasks that require different types of attention (e.g., from data entry to customer conversation).",
        },
        {
          type: "table",
          caption: "Effective Task Management Strategies",
          headers: ["Strategy", "How It Works", "Example"],
          rows: [
            ["Batching", "Group similar tasks together to reduce switching costs", "Enter all waiting prescriptions into the system before starting to fill them, rather than entering and filling one by one"],
            ["Sequencing", "Complete one task fully before starting the next", "Finish counting one prescription before answering a non-urgent question"],
            ["Prioritised Interruption", "Only interrupt current task for genuine urgency", "Pause data entry for a parent with a sick child, but not for a general product enquiry"],
            ["The Parking Lot", "When interrupted, write a brief note about where you left off", "Jot 'Mrs. Singh — entered, needs filling — metformin 500mg' before turning to the next customer"],
            ["Parallel Processing", "Do genuinely independent tasks simultaneously only when neither requires focused attention", "Restock shelves while waiting for a prescription label to print"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Sticky Note Method",
          body: "Keep a small pad of sticky notes at your station. When you are interrupted mid-task, take three seconds to write where you left off: 'Singh — metformin — entered, not filled.' When you return to the task, the note eliminates the 30 seconds you would otherwise spend trying to remember where you were. Three seconds of writing saves thirty seconds of remembering.",
        },
        {
          type: "text",
          body: "In Caribbean pharmacies, the pressure to 'multitask' is constant. The phone is ringing, a customer is at the counter, a prescription is half-filled, and the supplier just arrived for a delivery. The temptation is to do everything at once. Resist it. Handle one thing at a time, in order of priority, and communicate clearly: 'I will be with you in just a moment' is better than trying to serve two people at once and making errors on both.",
        },
        {
          type: "knowledge-check",
          question: "What does research show about human multitasking?",
          options: [
            "Most people are excellent multitaskers with practice",
            "True simultaneous multitasking is impossible — we actually task-switch, which reduces productivity by up to 40%",
            "Multitasking only reduces productivity by about 5%",
            "Multitasking is only a problem for complex tasks, not simple ones",
          ],
          correctIndex: 1,
          explanation:
            "Research consistently shows that human beings cannot truly multitask — we task-switch, and each switch incurs a cost in speed and accuracy. In pharmacy, where accuracy is safety-critical, understanding and managing this limitation is essential.",
        },
      ],
    },
    // ── Lesson 5.3 ──
    {
      id: "m5-l3",
      title: "Managing Phone Calls While Serving Walk-Ins",
      duration: "12 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Phone vs. the Person in Front of You",
        },
        {
          type: "text",
          body: "One of the most common daily dilemmas in pharmacy: you are serving a customer at the counter and the phone rings. Do you answer it? Do you let it ring? Do you put the customer on hold? There is no universally correct answer — but there are principles that help you make the right call in the moment.",
        },
        {
          type: "text",
          body: "The general principle is this: the person in front of you has priority over the person on the phone, because they made the effort to come in. However, the phone cannot wait indefinitely — an unanswered phone is a missed customer, a missed prescription call-in, or a missed clinical enquiry. The solution is a structured approach to managing both channels.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "If you are mid-sentence with a customer, let the phone ring for 2-3 rings while you complete your thought",
            "Excuse yourself briefly: 'Pardon me for one moment — let me just answer this quickly'",
            "Answer the phone with your standard greeting and immediately assess urgency",
            "If the phone call is non-urgent: 'May I place you on hold for one minute? I am with a customer.' Then return to the walk-in",
            "If the phone call IS urgent (doctor calling in a prescription, clinical enquiry): excuse yourself to the walk-in customer: 'I need to take this medical call — I will be back with you shortly'",
            "Never leave a walk-in customer standing in silence while you have an extended phone conversation",
            "If possible, designate one staff member to handle phones while others serve the counter during peak hours",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Phone Priority Levels",
          body: "Doctors calling in prescriptions = high priority (take the call). Patient asking about pharmacy hours = low priority (put on hold). Insurance company calling about a claim = medium priority (take a message if busy). Drug information enquiry from a nurse = high priority (take the call or transfer to pharmacist).",
        },
        {
          type: "table",
          caption: "Phone Management Quick Reference",
          headers: ["Caller", "Priority", "Action If Counter Is Busy"],
          rows: [
            ["Doctor calling in prescription", "High", "Take the call — excuse yourself to the walk-in briefly"],
            ["Patient asking if medication is ready", "Medium", "Brief answer (yes/no) or hold for 30 seconds"],
            ["Patient asking about pharmacy hours or location", "Low", "Polite hold, return when walk-in is served"],
            ["Insurance company query", "Medium", "Take a message; return the call during a lull"],
            ["Drug information enquiry from healthcare professional", "High", "Take the call or transfer to the pharmacist immediately"],
          ],
        },
        {
          type: "key-term",
          term: "Channel Management",
          definition:
            "The skill of simultaneously managing multiple customer service channels — in-person, telephone, and sometimes online — without letting service quality on any channel deteriorate. In pharmacy, effective channel management prevents walk-in customers from feeling ignored and phone callers from being left on hold indefinitely.",
        },
        {
          type: "knowledge-check",
          question: "You are serving a walk-in customer when the phone rings. A doctor is calling in a prescription. What do you do?",
          options: [
            "Ignore the phone — the walk-in customer has priority",
            "Put the walk-in customer on hold and take the doctor's call",
            "Briefly excuse yourself to the walk-in customer and take the doctor's call",
            "Let another customer answer the phone",
          ],
          correctIndex: 2,
          explanation:
            "A doctor calling in a prescription is a high-priority call that should be taken. The correct approach is to briefly excuse yourself from the walk-in customer — 'Pardon me, I need to take this medical call' — and handle the call efficiently before returning to the in-person customer.",
        },
      ],
    },
    // ── Lesson 5.4 ──
    {
      id: "m5-l4",
      title: "When the Pharmacy Is Understaffed: Survival Strategies",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Half the Staff, Same Number of Customers",
        },
        {
          type: "text",
          body: "It will happen. Someone calls in sick. The second technician's bus did not come. The pharmacist is stuck in traffic. And the pharmacy is open, the customers are arriving, and you are it. Working understaffed is a reality of Caribbean pharmacy — especially in smaller pharmacies with lean teams. The question is not whether it will happen, but whether you are prepared for it.",
        },
        {
          type: "text",
          body: "Understaffed shifts test everything you have learned: triage, time management, emotional regulation, communication, and scope awareness. The key principle is this: when resources are limited, protect accuracy above all. It is better to serve 50 customers correctly than 100 customers with errors. Slow down enough to be safe, and communicate honestly with waiting customers.",
        },
        {
          type: "heading",
          level: 3,
          text: "Survival Strategies",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Acknowledge the situation to customers: 'We are short-staffed today, so wait times are longer than usual. I want to make sure everyone is served correctly, so I appreciate your patience.'",
            "Ruthlessly prioritise: urgent medical needs first, routine collections second, general enquiries last",
            "Simplify your workflow: batch prescriptions, minimise task-switching, use notes to track incomplete tasks",
            "Communicate with the pharmacist: agree on a plan — who handles what, what can wait, what cannot",
            "Manage the phone strategically: if you are alone at the counter, let non-urgent calls go to voicemail and return them during lulls",
            "Do not skip safety steps: never cut corners on verification, counting, or labelling because you are busy — errors multiply under pressure",
            "Ask for help proactively: call the pharmacy owner or manager if understaffing is severe — document the situation",
            "Protect your breaks: skipping meals and rest makes the afternoon worse, not better",
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Never Compromise Safety for Speed",
          body: "When you are understaffed and the queue is out the door, the pressure to cut corners is immense. Resist it. A dispensing error caused by rushing will cost far more — in patient harm, legal liability, and your professional reputation — than making a customer wait an extra 10 minutes. Safety is not negotiable, regardless of staffing levels.",
        },
        {
          type: "table",
          caption: "What to Prioritise When Understaffed",
          headers: ["Do First", "Do When You Can", "Can Wait Until Tomorrow"],
          rows: [
            ["Fill prescriptions for patients who are waiting", "Restock fast-moving items", "Reorganise shelves"],
            ["Handle urgent clinical queries", "Return phone calls", "Update promotional displays"],
            ["Process insurance rejections for waiting patients", "Enter non-urgent prescriptions", "Complete inventory counts"],
            ["Answer the phone for doctor call-ins", "Process deliveries from suppliers", "File completed paperwork"],
          ],
        },
        {
          type: "case-study",
          title: "Case Study: The Solo Shift",
          scenario:
            "It is a Monday morning at a community pharmacy in Arima, Trinidad. The other technician called in sick. The pharmacist is delayed — they will arrive in 45 minutes. You are alone with five customers already waiting, two prescriptions to fill, and the phone ringing. You know you cannot legally dispense without the pharmacist present for final verification.",
          questions: [
            "What should you prioritise in the first 15 minutes?",
            "How do you communicate the situation to waiting customers?",
            "What can you legally do without the pharmacist present?",
          ],
          discussion:
            "Without the pharmacist, you cannot complete the dispensing process (final verification is required). However, you CAN: greet customers and set expectations, receive prescriptions and begin data entry, handle OTC sales, answer phone calls, and process non-prescription items. For the waiting prescriptions, explain honestly: 'Our pharmacist will arrive in about 45 minutes. I can get everything prepared so it is ready the moment they arrive. I apologise for the delay.' Most customers will appreciate the honesty and the efficiency.",
        },
        {
          type: "key-term",
          term: "Controlled Degradation",
          definition:
            "A crisis management concept where, when resources are insufficient to maintain full service, non-critical functions are deliberately reduced or paused to preserve the quality of critical functions. In an understaffed pharmacy, this means slowing non-urgent tasks to protect the accuracy and safety of dispensing.",
        },
        {
          type: "knowledge-check",
          question: "During an understaffed shift with a long queue, what is the MOST important principle to follow?",
          options: [
            "Serve as many customers as possible, as quickly as possible",
            "Close the pharmacy until adequate staffing arrives",
            "Maintain accuracy and safety even if it means longer wait times",
            "Skip the pharmacist verification step to speed things up",
          ],
          correctIndex: 2,
          explanation:
            "Accuracy and safety must be maintained regardless of staffing levels. Rushing leads to errors that harm patients and create legal liability. Communicating honestly about wait times while maintaining careful, safe practice is always the correct approach.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m5-q1",
      question:
        "What is 'counter triage' in a pharmacy setting?",
      options: [
        "A system for organising medications on the counter",
        "The process of assessing which customer needs should be addressed first based on urgency",
        "A method of cleaning the pharmacy counter between customers",
        "A stock management technique for high-demand items",
      ],
      correctIndex: 1,
      explanation:
        "Counter triage is the informal process of assessing which waiting customers have the most urgent needs and prioritising them accordingly. Like emergency department triage, it ensures the most time-sensitive situations are addressed first.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q2",
      question:
        "Research shows that task-switching can reduce productivity by approximately how much?",
      options: ["5%", "10%", "25%", "40%"],
      correctIndex: 3,
      explanation:
        "Research on cognitive task-switching consistently shows productivity reductions of up to 40%, along with significantly increased error rates. In pharmacy, this makes task-switching a patient safety concern, not merely an efficiency issue.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q3",
      question:
        "A doctor calls while you are serving a walk-in customer. What is the correct priority?",
      options: [
        "The walk-in customer always has priority since they are physically present",
        "The doctor's call should be taken — briefly excuse yourself from the walk-in customer",
        "Let the phone ring until you finish with the walk-in",
        "Put the walk-in customer on hold indefinitely",
      ],
      correctIndex: 1,
      explanation:
        "A doctor calling in a prescription is a high-priority call. The correct approach is to briefly excuse yourself from the walk-in customer, take the doctor's call efficiently, and then return to the in-person customer. Most walk-in customers understand when a medical call is involved.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q4",
      question:
        "During an understaffed shift, which principle should ALWAYS be maintained?",
      options: [
        "Serving every customer within 15 minutes",
        "Answering every phone call within 3 rings",
        "Accuracy and safety in dispensing",
        "Keeping the pharmacy shelves fully stocked",
      ],
      correctIndex: 2,
      explanation:
        "Accuracy and safety in dispensing are non-negotiable, regardless of staffing levels. Customer wait times, phone response, and shelf stocking can be managed with honest communication, but errors in dispensing can cause patient harm.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q5",
      question:
        "What is the 'parking lot' technique in task management?",
      options: [
        "Directing customers to the car park while they wait",
        "Writing a brief note about where you left off when interrupted",
        "Parking less important tasks at the end of the day",
        "A method of organising the pharmacy storage area",
      ],
      correctIndex: 1,
      explanation:
        "The parking lot technique involves quickly noting where you left off on a task when you are interrupted. A sticky note reading 'Singh — metformin — entered, not filled' takes three seconds to write and saves 30 seconds of remembering when you return to the task.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q6",
      question:
        "Which task management strategy involves grouping similar tasks to reduce switching costs?",
      options: [
        "Sequencing",
        "Parallel processing",
        "Batching",
        "Prioritised interruption",
      ],
      correctIndex: 2,
      explanation:
        "Batching groups similar tasks together — for example, entering all waiting prescriptions into the system before starting to fill them. This reduces the cognitive cost of switching between different types of tasks.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q7",
      questionType: "scenario",
      question:
        "You are alone at the counter. Three customers are waiting: a healthy adult collecting a routine monthly refill (arrived first), a professional on their lunch break checking their watch anxiously (arrived second), and a mother with a lethargic toddler (arrived third). In what order should you serve them?",
      options: [
        "In order of arrival: adult, professional, mother",
        "Mother with sick toddler first, then professional, then routine refill",
        "Professional first (most time-pressured), then mother, then adult",
        "Routine refill first (simplest), then professional, then mother",
      ],
      correctIndex: 1,
      questionData: {
        context: "A pharmacy with limited staff where multiple customers are waiting simultaneously.",
      },
      explanation:
        "Counter triage prioritises medical urgency first: the lethargic toddler represents a potential medical emergency. The time-pressured professional goes second (significant inconvenience from delay). The routine refill, while the first to arrive, is the least urgent and most understanding of a brief wait when the reason is explained.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q8",
      questionType: "true_false",
      question:
        "When the pharmacy is severely understaffed, it is acceptable to skip the pharmacist's final verification to keep the queue moving.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "The pharmacist's final verification is a legal and safety requirement that cannot be skipped regardless of circumstances. Dispensing without verification exposes patients to error risk and the technician and pharmacy to legal liability. Longer wait times are always preferable to unsafe dispensing.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q9",
      question:
        "What does 'controlled degradation' mean in the context of an understaffed pharmacy?",
      options: [
        "Allowing the pharmacy's appearance to deteriorate during busy periods",
        "Deliberately reducing non-critical functions to preserve the quality of critical ones",
        "Gradually reducing the number of customers you serve",
        "Lowering the standard of customer service proportionally",
      ],
      correctIndex: 1,
      explanation:
        "Controlled degradation means strategically pausing or reducing non-critical functions (shelf restocking, display updates, non-urgent paperwork) to protect the quality of critical functions (dispensing accuracy, patient safety, urgent queries). It is a deliberate strategy, not a surrender.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q10",
      question:
        "Why is it important to communicate honestly with customers about understaffing?",
      options: [
        "Customers feel entitled to know internal staffing details",
        "It is a legal requirement to disclose staffing levels",
        "Honest communication sets realistic expectations and usually earns patience and understanding",
        "It shifts blame from you to the absent colleague",
      ],
      correctIndex: 2,
      explanation:
        "Honest, respectful communication about understaffing sets realistic expectations for wait times and usually earns customer patience. Most people are understanding when they know the reason for a delay and can see that the available staff are working diligently.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// MODULE 6 — Asking the Right Questions: Working with Non-Technical Customers
// ============================================================================

const module6: Module = {
  id: "m6-right-questions",
  number: 6,
  title: "Asking the Right Questions: Working with Non-Technical Customers",
  description:
    "Not every patient walks in with a diagnosis and a prescription. Many describe their health concerns in everyday language, use traditional medicine alongside prescribed treatments, and need you to bridge the gap between their world and the medical system. This module teaches you to translate, ask, and listen with cultural competence.",
  learningObjectives: [
    "Interpret common Caribbean vernacular health descriptions and translate them to medical context",
    "Apply open-ended and closed questioning techniques appropriately in patient interactions",
    "Assess the use of traditional and bush medicines alongside prescribed treatments",
    "Demonstrate cultural competence when working with patients from diverse Caribbean backgrounds",
  ],
  lessons: [
    // ── Lesson 6.1 ──
    {
      id: "m6-l1",
      title: "Patients Who Describe Symptoms in Everyday Language",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "'Meh Belly Hot' — Understanding How Patients Really Talk",
        },
        {
          type: "text",
          body: "Patients do not walk into a Caribbean pharmacy and say, 'I am experiencing dyspepsia with associated epigastric burning.' They say, 'Meh belly hot.' Or 'Something eating me inside.' Or 'Ah feel like meh head going to burst.' The language is vivid, metaphorical, and deeply rooted in Caribbean culture. If you cannot translate between patient language and medical concepts, you cannot serve them effectively.",
        },
        {
          type: "text",
          body: "This is not about patients being uneducated — it is about language being cultural. A retired professor might say 'meh sugar high' rather than 'I am experiencing hyperglycaemia.' A nurse might describe her own symptoms in Creole at a pharmacy even though she uses medical terminology at work. The pharmacy counter is an informal space, and people communicate in their most comfortable register. Your job is to meet them there.",
        },
        {
          type: "key-term",
          term: "Health Literacy",
          definition:
            "The ability to obtain, understand, and use health information to make informed decisions. Health literacy exists on a spectrum — even highly educated people may have low health literacy when it comes to their own conditions. In the Caribbean, cultural and linguistic factors add additional layers to health literacy challenges.",
        },
        {
          type: "table",
          caption: "Common Caribbean Vernacular Health Descriptions and Likely Medical Meanings",
          headers: ["Patient Says", "Likely Meaning", "Follow-Up Questions to Ask"],
          rows: [
            ["'Meh belly hot'", "Heartburn, acid reflux, dyspepsia, or gastritis", "'Where exactly — high up or down low? Does it happen after eating?'"],
            ["'Meh sugar high / meh sugar running'", "Elevated blood glucose — diabetes concern", "'When did you last check? Are you taking your medication regularly?'"],
            ["'Meh pressure high / pressure riding me'", "Elevated blood pressure — hypertension", "'Do you have a BP monitor at home? Any headaches or dizziness?'"],
            ["'Something eating me inside'", "Internal pain — could be ulcer, anxiety, or unexplained chronic pain", "'Can you show me where you feel it? How long has it been going on?'"],
            ["'Ah feeling weak / ah feeling faint'", "Dizziness, fatigue, low blood pressure, anaemia, or low blood sugar", "'Did you eat today? Any new medications? Do you feel like you might faint?'"],
            ["'Meh joints stiff / meh bones hurting'", "Arthritis, joint pain, musculoskeletal complaints", "'Which joints? Worse in the morning or after activity?'"],
            ["'Meh head going to burst'", "Severe headache — migraine, tension headache, or hypertension-related", "'Is it one side or both? Any vision changes? How long?'"],
            ["'Ah cyah sleep / sleep doh come'", "Insomnia — could be stress, anxiety, pain, or medication side effect", "'How long has this been going on? Anything changed recently — stress, new medication?'"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Never Correct Their Language",
          body: "When a patient says 'meh sugar running,' do not correct them and say 'you mean your blood glucose is elevated.' Mirror their language: 'Your sugar running — are you taking your tablets?' This builds trust and makes them feel heard. Translation happens in your head, not out loud.",
        },
        {
          type: "text",
          body: "The ability to translate between patient language and medical context is one of the most valuable skills a Caribbean pharmacy technician can develop. It bridges the gap between the clinical world and the community, making healthcare more accessible for everyone. And it is a skill that pharmacists trained overseas may lack — making you, as a locally trained technician, uniquely valuable.",
        },
        {
          type: "knowledge-check",
          question: "A patient says 'something eating me inside.' What is the best initial response?",
          options: [
            "Recommend a painkiller and send them on their way",
            "Ask follow-up questions: 'Can you show me where? How long has it been going on?'",
            "Tell them they need to see a doctor because that description is too vague",
            "Correct them: 'Can you be more specific in medical terms?'",
          ],
          correctIndex: 1,
          explanation:
            "Asking clarifying questions respects the patient's language while gathering the information needed to help them. The description is vague, so follow-up questions narrow down the potential issue. Never dismiss, correct, or redirect a patient for using everyday language.",
        },
      ],
    },
    // ── Lesson 6.2 ──
    {
      id: "m6-l2",
      title: "Translating Between Patient Language and Medical Terminology",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "You Are the Bridge Between Two Worlds",
        },
        {
          type: "text",
          body: "When a patient describes their symptoms in Caribbean vernacular, and a pharmacist needs medical terminology to respond, you are the bridge. This translation skill operates in both directions: you convert patient language into information the pharmacist can use, and you convert the pharmacist's clinical language into terms the patient can understand. Both translations are equally important.",
        },
        {
          type: "text",
          body: "The risk of mistranslation is real. 'Meh belly hot' could mean heartburn (upper GI) or it could mean a urinary tract infection (lower abdominal burning). 'Meh head spinning' could mean vertigo or it could mean anxiety. Getting the translation wrong can lead to the wrong recommendation. This is why asking follow-up questions is critical — you are not just translating words, you are clarifying meaning.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Two-Way Translation Process",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Receive the patient's description in their own words: listen fully, do not interrupt",
            "Mirror their language to confirm understanding: 'So your belly is hot — especially after eating, you said?'",
            "Ask targeted follow-up questions to narrow the meaning: location, duration, triggers, severity",
            "Translate to medical context in your head: 'postprandial epigastric burning — likely dyspepsia'",
            "Relay to the pharmacist in clinical terms if a referral is needed: 'Mrs. Charles is describing postprandial upper abdominal burning — sounds like dyspepsia'",
            "Translate the pharmacist's recommendation back to patient language: not 'take this antacid for your dyspepsia' but 'take this before you eat — it will cool down that burning in your belly'",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Danger: Assuming Instead of Asking",
          body: "The biggest translation error is assuming you know what the patient means without verifying. 'Meh belly hot' has at least five possible clinical meanings. Always ask follow-up questions before translating. A wrong assumption can lead to the wrong treatment.",
        },
        {
          type: "table",
          caption: "Translating Pharmacist Language to Patient Language",
          headers: ["Pharmacist Says", "Patient-Friendly Translation"],
          rows: [
            ["'Take this medication on an empty stomach'", "'Take this before you eat anything in the morning — at least 30 minutes before breakfast'"],
            ["'This medication may cause drowsiness'", "'This might make you sleepy, so do not drive or operate machinery after taking it'"],
            ["'Avoid alcohol while on this medication'", "'No drinks while you are taking these tablets — not even one beer. It can make you very sick.'"],
            ["'Apply topically twice daily'", "'Rub it on the area morning and night — a thin layer, do not pile it on'"],
            ["'This is an antibiotic — complete the full course'", "'Take every single tablet, even after you start feeling better. If you stop early, the infection can come back stronger.'"],
          ],
        },
        {
          type: "key-term",
          term: "Health Literacy Translation",
          definition:
            "The skill of converting clinical or medical language into terms that patients with varying levels of health literacy can understand. Effective translation preserves the accuracy of the medical information while making it accessible and actionable for the patient.",
        },
        {
          type: "knowledge-check",
          question: "How should you relay a patient's complaint to the pharmacist?",
          options: [
            "Repeat the patient's exact words: 'She says something eating her inside'",
            "Make your own diagnosis: 'She has an ulcer'",
            "Translate to clinical context: 'She is describing persistent internal abdominal pain — worth investigating'",
            "Tell the pharmacist to speak to the patient directly",
          ],
          correctIndex: 2,
          explanation:
            "The most valuable relay combines the patient's description with your clinical translation. This gives the pharmacist both the raw information and your contextual interpretation, allowing them to assess more quickly. Repeating verbatim is less helpful; diagnosing is outside your scope; and directing every query to the pharmacist is inefficient.",
        },
      ],
    },
    // ── Lesson 6.3 ──
    {
      id: "m6-l3",
      title: "Open-Ended vs. Closed Questions — When to Use Each",
      duration: "12 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Art of Asking the Right Question",
        },
        {
          type: "text",
          body: "The questions you ask determine the quality of the information you receive. Ask the wrong type of question and you get incomplete, misleading, or useless answers. Ask the right type and the patient gives you exactly what you need. There are two fundamental types of questions, and knowing when to use each is a critical pharmacy communication skill.",
        },
        {
          type: "key-term",
          term: "Open-Ended Question",
          definition:
            "A question that cannot be answered with 'yes' or 'no' and requires the respondent to elaborate. Examples: 'How have you been feeling since you started this medication?' or 'What brings you in today?' Open-ended questions are used to gather broad information and encourage patients to share their experience in their own words.",
        },
        {
          type: "key-term",
          term: "Closed Question",
          definition:
            "A question that can be answered with a specific, limited response — typically 'yes' or 'no' or a specific fact. Examples: 'Did you take your medication this morning?' or 'Which arm is the pain in?' Closed questions are used to confirm specific details or narrow down information.",
        },
        {
          type: "table",
          caption: "Open vs. Closed Questions — When to Use Each",
          headers: ["Situation", "Open-Ended (Exploring)", "Closed (Confirming)"],
          rows: [
            ["Patient describes a new symptom", "'Tell me more about what you are experiencing.'", "'Is the pain sharp or dull?'"],
            ["Checking medication adherence", "'How have you been managing with your tablets?'", "'Did you take your medication this morning?'"],
            ["Understanding patient concerns", "'What worries you most about this medication?'", "'Are you worried about side effects specifically?'"],
            ["Gathering allergy information", "'Do you have any allergies or reactions to medications?'", "'Are you allergic to penicillin?'"],
            ["Assessing a vague complaint", "'Can you describe what you are feeling?'", "'Does the pain get worse when you eat?'"],
          ],
        },
        {
          type: "text",
          body: "The ideal patient interaction uses both types in sequence: start with open-ended questions to understand the big picture, then narrow down with closed questions to confirm specifics. Think of it as a funnel — wide at the top, narrow at the bottom. You start broad and focus in.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Funnel Technique",
          body: "Start broad: 'What brings you in today?' Then narrow: 'Is the pain in your chest or your stomach?' Then confirm: 'So, a burning feeling in your upper belly after meals — is that right?' This funnel approach gives the patient space to explain while ensuring you get the specific information you need.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Begin with open questions when you know little about the patient's concern",
            "Switch to closed questions when you need to confirm specific details",
            "Avoid leading questions that suggest a specific answer: 'You do not have any allergies, do you?' encourages a 'no' even if they do",
            "Give the patient time to answer — silence after a question is not awkward, it is space for thinking",
            "Repeat back what you heard to confirm understanding: 'So you are saying the pain is worse at night — is that right?'",
          ],
        },
        {
          type: "knowledge-check",
          question: "A patient approaches with a vague complaint. What type of question should you start with?",
          options: [
            "A closed question: 'Do you have a headache?'",
            "A leading question: 'You probably just need some paracetamol, right?'",
            "An open-ended question: 'Can you tell me what you are experiencing?'",
            "A multiple-choice question: 'Is it your head, your stomach, or your chest?'",
          ],
          correctIndex: 2,
          explanation:
            "Open-ended questions are the best starting point for vague complaints because they give the patient space to describe their experience in their own words. Closed questions can come later to narrow down specifics, but starting with them risks missing important information.",
        },
      ],
    },
    // ── Lesson 6.4 ──
    {
      id: "m6-l4",
      title: "Working with Patients Who Use Traditional/Bush Medicine Alongside Prescriptions",
      duration: "18 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Bush Medicine Is Not the Enemy — but Silence About It Is",
        },
        {
          type: "text",
          body: "Across the Caribbean, traditional medicine — known as bush medicine, herbal medicine, or folk remedies — is deeply embedded in culture and daily life. Patients drink cerasee for diabetes, use fever grass for colds, take soursop leaf tea for blood pressure, apply aloe vera for everything from burns to constipation, and use neem for infections. These practices are not quackery — many have legitimate pharmacological properties. The danger is not the bush medicine itself. The danger is when patients use it alongside prescribed medications without telling anyone.",
        },
        {
          type: "text",
          body: "Why do patients hide bush medicine use from pharmacy staff? Because they expect to be judged, dismissed, or lectured. If a patient tells you they are drinking cerasee for their diabetes and you respond with a condescending 'that does not work — just take your metformin,' they will never tell you about their herbal use again. And you will lose the ability to protect them from potential interactions.",
        },
        {
          type: "key-term",
          term: "Bush Medicine",
          definition:
            "Traditional herbal remedies used across the Caribbean, derived from local plants and passed down through generations. Common examples include cerasee (Momordica charantia) for blood sugar management, fever grass (Cymbopogon citratus) for colds and fever, and soursop (Annona muricata) for various ailments. Many bush medicines have documented pharmacological effects and potential interactions with prescription medications.",
        },
        {
          type: "table",
          caption: "Common Caribbean Bush Medicines and Known Interactions",
          headers: ["Bush Medicine", "Traditional Use", "Known Pharmacological Effect", "Potential Interaction Concern"],
          rows: [
            ["Cerasee (bitter melon)", "Diabetes, 'cleansing the blood'", "Has documented hypoglycaemic effects", "May enhance effect of diabetes medications — risk of hypoglycaemia"],
            ["Fever grass (lemongrass)", "Colds, fever, 'cooling'", "Mild antipyretic and relaxant properties", "Generally low risk, but monitor if combined with sedatives"],
            ["Soursop leaf tea", "Blood pressure, cancer prevention, sleep", "Some evidence of blood pressure-lowering effects", "May enhance antihypertensives — risk of hypotension"],
            ["Noni juice", "General health, pain, inflammation", "Contains potassium and coumarins", "May interact with warfarin; high potassium risky with ACE inhibitors"],
            ["Garlic (concentrated supplements)", "Heart health, cholesterol", "Blood-thinning properties documented", "Can increase bleeding risk with anticoagulants"],
            ["Neem", "Infections, skin conditions, fever", "Antimicrobial and anti-inflammatory properties", "May affect blood sugar; caution with diabetes and immunosuppressant medications"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Non-Judgemental Approach",
          body: "The single most important thing you can do is create a safe space for patients to disclose bush medicine use. Say: 'Many of our patients use bush remedies alongside their medications. Are you using anything herbal? I want to make sure everything works well together.' This normalises disclosure and removes stigma.",
        },
        {
          type: "scenario-simulation",
          title: "Scenario: The Bush Medicine Conversation",
          description:
            "Mrs. Doreen Mahabir, 68, is a regular customer at your pharmacy in Chaguanas, Trinidad. She collects metformin 500mg twice daily for type 2 diabetes and amlodipine 5mg for blood pressure. Today, she mentions casually while you are bagging her medication: 'I does drink meh cerasee tea every morning too, yuh know. Meh grandmother used to swear by it.' You know that cerasee has documented hypoglycaemic effects and could potentiate metformin.",
          nodes: [
            {
              id: "start",
              text: "Mrs. Mahabir has just mentioned she drinks cerasee tea daily alongside her metformin and amlodipine. She seems proud of maintaining this traditional practice. How do you respond?",
              choices: [
                {
                  label: "Say: 'Mrs. Mahabir, you should stop drinking that. It could be dangerous with your diabetes medication.'",
                  nextNodeId: "dismiss",
                  feedback: "This response dismisses her traditional practice and will likely cause her to stop sharing information with you in the future.",
                },
                {
                  label: "Say: 'Oh, cerasee! My grandmother used it too. That is actually something the pharmacist should know about — cerasee can affect blood sugar levels. Would you mind if I let them know?'",
                  nextNodeId: "culturally-sensitive",
                  feedback: "Excellent. You validated her practice, shared relevant concern without being alarmist, and created a pathway to the pharmacist.",
                  isOptimal: true,
                },
                {
                  label: "Say nothing — it is just herbal tea, probably harmless.",
                  nextNodeId: "ignore",
                  feedback: "Cerasee has documented hypoglycaemic effects. Ignoring this information could put Mrs. Mahabir at risk of dangerously low blood sugar.",
                },
              ],
            },
            {
              id: "dismiss",
              text: "Mrs. Mahabir's face falls. 'Well... meh grandmother lived to 92 with that tea.' She takes her bag and leaves quickly. She does not mention any herbal use in future visits. Two months later, the pharmacist discovers her HbA1c is erratic and cannot figure out why.",
              isEnd: true,
              outcome: "failure",
              summary: "Dismissing bush medicine practices shuts down communication. Mrs. Mahabir continued her cerasee use but stopped telling the pharmacy, making it impossible to monitor interactions. Her variable blood sugar levels remain unexplained because the full picture is hidden.",
            },
            {
              id: "culturally-sensitive",
              text: "Mrs. Mahabir smiles: 'Oh, your grandmother too? Yes, the cerasee is good, eh. You think it could be a problem with meh tablets?' She is open to discussing it.",
              choices: [
                {
                  label: "Say: 'Cerasee can lower blood sugar on its own — combined with metformin, it might bring your sugar too low. Let me get the pharmacist to talk with you about how to use both safely.'",
                  nextNodeId: "pharmacist-consult",
                  feedback: "Perfect. You explained the concern clearly in patient language and involved the pharmacist for clinical guidance.",
                  isOptimal: true,
                },
                {
                  label: "Say: 'It is probably fine — just keep taking everything as normal.'",
                  nextNodeId: "false-reassurance",
                  feedback: "This is false reassurance. The interaction between cerasee and metformin is real and documented. You missed an opportunity to protect the patient.",
                },
              ],
            },
            {
              id: "ignore",
              text: "Mrs. Mahabir continues drinking cerasee daily with her metformin. Two weeks later, she experiences a hypoglycaemic episode — dizziness, confusion, sweating — while shopping in the market. Her family takes her to A&E. The hospital team identifies the cerasee-metformin interaction.",
              isEnd: true,
              outcome: "failure",
              summary: "Ignoring reported bush medicine use is a patient safety failure. You had the information needed to prevent an adverse event and chose not to act on it. The fact that it is 'just herbal tea' does not diminish the pharmacological risk.",
            },
            {
              id: "pharmacist-consult",
              text: "The pharmacist speaks with Mrs. Mahabir. They explain that cerasee is indeed a powerful natural remedy — but combined with metformin, it could make her blood sugar drop too low. They agree on a plan: Mrs. Mahabir will continue her cerasee but reduce it to three times a week instead of daily, and she will monitor her blood sugar more closely. She leaves feeling respected and informed.",
              isEnd: true,
              outcome: "success",
              summary: "Outstanding culturally sensitive care. You validated Mrs. Mahabir's traditional practice, identified a genuine interaction risk, and facilitated a pharmacist consultation that resulted in a safe, respectful plan that honoured both modern medicine and bush medicine. This is Caribbean pharmacy excellence.",
            },
            {
              id: "false-reassurance",
              text: "Mrs. Mahabir takes your word for it and continues both. Her blood sugar starts swinging unpredictably — sometimes too low, sometimes rebounding high. She does not connect it to the cerasee because 'the technician said it was fine.' When she eventually has a hypoglycaemic episode, the pharmacist traces it back to the interaction.",
              isEnd: true,
              outcome: "failure",
              summary: "False reassurance on a real interaction risk led to a preventable adverse event. When in doubt about herbal-drug interactions, always involve the pharmacist. Never reassure without clinical knowledge.",
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "How to Ask About Bush Medicine Use",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Normalise the question: 'Many of our patients use bush remedies. Are you using anything herbal?'",
            "Be specific: 'Are you drinking cerasee, fever grass, soursop tea, or anything like that?'",
            "Show genuine interest: 'What do you use it for? How often?'",
            "Never judge or dismiss: even if you think the remedy has no effect, the patient's trust is more valuable than being right",
            "Document what they tell you: flag bush medicine use in the patient record for the pharmacist to review",
            "Involve the pharmacist for interaction concerns: this is a clinical matter beyond the technician's scope",
          ],
        },
        {
          type: "knowledge-check",
          question: "A patient tells you they drink cerasee tea daily alongside their metformin. What should you do?",
          options: [
            "Tell them to stop drinking cerasee immediately",
            "Ignore it — herbal tea cannot interact with medication",
            "Validate their practice, explain the potential interaction concern, and involve the pharmacist",
            "Tell them cerasee is better than metformin and they should switch",
          ],
          correctIndex: 2,
          explanation:
            "Cerasee (bitter melon) has documented hypoglycaemic effects and can potentiate metformin, increasing the risk of dangerously low blood sugar. The correct approach is to validate the patient's traditional practice, explain the concern in accessible language, and involve the pharmacist for clinical guidance. Never dismiss or judge bush medicine use.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m6-q1",
      question:
        "When a patient says 'meh belly hot,' what is the MOST likely clinical interpretation?",
      options: [
        "Fever",
        "Heartburn, acid reflux, or dyspepsia",
        "Appendicitis",
        "Food poisoning",
      ],
      correctIndex: 1,
      explanation:
        "'Meh belly hot' is a common Caribbean vernacular expression for epigastric burning, most likely indicating heartburn, acid reflux, or dyspepsia. However, follow-up questions about location, timing, and triggers are essential to confirm the meaning.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q2",
      question:
        "Why should pharmacy technicians NOT correct a patient's vernacular health descriptions?",
      options: [
        "Because the patient might get offended and leave",
        "Because mirroring their language builds trust and makes them feel heard",
        "Because it is not the technician's job to educate patients",
        "Because vernacular language is more accurate than medical terminology",
      ],
      correctIndex: 1,
      explanation:
        "Mirroring a patient's language — saying 'your sugar running' instead of correcting to 'your blood glucose is elevated' — builds rapport and trust. Patients feel heard and understood, which makes them more likely to share important health information and adhere to treatment plans.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m6-q3",
      question:
        "Which question type should you START with when a patient presents a vague complaint?",
      options: [
        "Closed question: 'Is it your head?'",
        "Leading question: 'You probably just need paracetamol, right?'",
        "Open-ended question: 'Can you describe what you are experiencing?'",
        "Rhetorical question: 'We all have bad days, do we not?'",
      ],
      correctIndex: 2,
      explanation:
        "Open-ended questions give patients the space to describe their experience in their own words, providing the broadest possible information for you to work with. Closed questions are useful later to confirm specifics, but starting with them risks missing important details.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q4",
      question:
        "Cerasee (bitter melon) tea is commonly used for diabetes management in the Caribbean. Why is this relevant for pharmacy technicians?",
      options: [
        "Because cerasee is a banned substance that should be reported",
        "Because cerasee has documented hypoglycaemic effects that can interact with diabetes medications",
        "Because cerasee has no pharmacological effect and patients should be told to stop wasting their time",
        "Because cerasee is only used in Trinidad and not relevant elsewhere",
      ],
      correctIndex: 1,
      explanation:
        "Cerasee (Momordica charantia) has well-documented hypoglycaemic properties. When combined with metformin or other diabetes medications, it can cause blood sugar to drop dangerously low. Pharmacy technicians must ask about bush medicine use and flag potential interactions to the pharmacist.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q5",
      question:
        "What is the MOST effective way to encourage patients to disclose bush medicine use?",
      options: [
        "Ask directly: 'Are you using any dangerous herbal remedies?'",
        "Wait for them to mention it voluntarily",
        "Normalise the question: 'Many of our patients use bush remedies. Are you using anything herbal?'",
        "Put a sign up saying 'Tell us about your herbal medicines'",
      ],
      correctIndex: 2,
      explanation:
        "Normalising the question — framing bush medicine use as common and expected — removes the stigma that prevents patients from disclosing. Asking about 'dangerous' remedies implies judgement, waiting is passive, and a sign alone is insufficient.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q6",
      question:
        "Which of the following is the BEST way to translate the pharmacist's instruction 'take this medication on an empty stomach' into patient-friendly language?",
      options: [
        "'Do not eat when you take this.'",
        "'Take this at least 30 minutes before eating breakfast in the morning.'",
        "'Your stomach needs to be empty for this to work.'",
        "'Take this with an empty stomach — preferably without food.'",
      ],
      correctIndex: 1,
      explanation:
        "Specific, actionable instructions are more effective than vague ones. 'At least 30 minutes before eating breakfast' gives a clear time reference and a daily routine anchor. 'On an empty stomach' is ambiguous — patients may not know how long 'empty' means.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q7",
      questionType: "matching",
      question:
        "Match the Caribbean vernacular expression with its most likely clinical meaning:",
      options: [
        "'Meh pressure riding me' → Hypertension",
        "'Sleep doh come' → Insomnia",
        "'Meh sugar running' → Elevated blood glucose",
        "'Meh head going to burst' → Severe headache",
      ],
      correctIndex: 0,
      questionData: {
        pairs: [
          { left: "Meh pressure riding me", right: "Hypertension" },
          { left: "Sleep doh come", right: "Insomnia" },
          { left: "Meh sugar running", right: "Elevated blood glucose" },
          { left: "Meh head going to burst", right: "Severe headache" },
        ],
      },
      explanation:
        "Caribbean vernacular health expressions use vivid, metaphorical language rooted in cultural traditions. Learning these translations is essential for effective patient communication in the region.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q8",
      questionType: "true_false",
      question:
        "Bush medicines in the Caribbean are purely cultural practices with no real pharmacological effects.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "Many bush medicines have documented pharmacological effects. Cerasee has hypoglycaemic properties, soursop has blood pressure-lowering effects, and concentrated garlic supplements have blood-thinning properties. These are real effects that can interact with prescribed medications.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q9",
      questionType: "scenario",
      question:
        "An elderly patient tells you she drinks soursop leaf tea 'to bring down the pressure' alongside her prescribed amlodipine. She asks if this is okay. What is the BEST response?",
      options: [
        "'Soursop tea is fine — it is natural and cannot harm you.'",
        "'Stop drinking that tea immediately — it is interfering with your medication.'",
        "'That is a great question. Soursop can affect blood pressure, so let me get the pharmacist to advise you on how to use both safely.'",
        "'I have no idea — ask your doctor.'",
      ],
      correctIndex: 2,
      questionData: {
        context: "A patient combining prescribed antihypertensives with a traditional remedy that has documented blood pressure-lowering effects.",
      },
      explanation:
        "Soursop leaf tea has documented blood pressure-lowering effects. Combined with amlodipine, it could cause hypotension. The correct response validates the patient's question, explains the concern briefly, and involves the pharmacist for clinical guidance. This is culturally sensitive, accurate, and within scope.",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m6-q10",
      question:
        "What is the 'funnel technique' in patient questioning?",
      options: [
        "Starting with closed questions and moving to open-ended ones",
        "Starting with open-ended questions and narrowing down with closed questions",
        "Asking all questions at once and letting the patient choose which to answer",
        "Using only closed questions for efficiency",
      ],
      correctIndex: 1,
      explanation:
        "The funnel technique starts with broad, open-ended questions ('What brings you in today?') and progressively narrows with more specific, closed questions ('Is the pain in your upper or lower belly?') until you have the specific information needed. This approach ensures you capture the full picture before narrowing focus.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 7 — Stress Management, Self-Care & Preventing Burnout
// ============================================================================

const module7: Module = {
  id: "m7-stress-burnout",
  number: 7,
  title: "Stress Management, Self-Care & Preventing Burnout",
  description:
    "You cannot pour from an empty cup. Pharmacy work is emotionally and physically demanding, and the Caribbean context — understaffing, community pressure, low pay relative to responsibility — amplifies the risk of burnout. This module is not about platitudes. It is about practical strategies for sustaining your career and your wellbeing in the long term.",
  learningObjectives: [
    "Recognise the early warning signs of burnout in yourself and colleagues",
    "Apply evidence-based coping strategies to the specific demands of pharmacy shift work",
    "Develop a personal resilience plan for long-term sustainability in Caribbean healthcare",
  ],
  lessons: [
    // ── Lesson 7.1 ──
    {
      id: "m7-l1",
      title: "Recognising the Signs of Burnout in Yourself and Colleagues",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Burnout Does Not Announce Itself — It Creeps",
        },
        {
          type: "text",
          body: "Nobody wakes up one morning and says, 'Today I am burned out.' Burnout is a slow erosion. It starts with tiredness you cannot shake, irritability you cannot explain, and a creeping cynicism about work that used to matter to you. By the time you recognise it, it has usually been building for months. In Caribbean pharmacy — where the emotional demands are high, the staffing is low, and the cultural expectation is to 'just keep going' — burnout is endemic.",
        },
        {
          type: "text",
          body: "The World Health Organisation defines burnout as a syndrome resulting from chronic workplace stress that has not been successfully managed. It manifests in three dimensions: exhaustion (emotional and physical depletion), cynicism (mental distance from your job and the people you serve), and reduced professional efficacy (feeling like you are not making a difference no matter how hard you work).",
        },
        {
          type: "key-term",
          term: "Burnout",
          definition:
            "A syndrome recognised by the World Health Organisation (ICD-11) resulting from chronic workplace stress that has not been successfully managed. It is characterised by three dimensions: (1) feelings of energy depletion or exhaustion, (2) increased mental distance from one's job or feelings of negativism or cynicism related to one's job, and (3) reduced professional efficacy. Burnout is not laziness or weakness — it is a predictable consequence of unsustainable work conditions.",
        },
        {
          type: "table",
          caption: "The Three Dimensions of Burnout",
          headers: ["Dimension", "What It Looks Like", "What You Might Say to Yourself"],
          rows: [
            ["Exhaustion", "Chronic fatigue that sleep does not fix, dreading the shift, feeling physically drained before the day starts", "'I am so tired. I am always tired. No amount of sleep helps.'"],
            ["Cynicism", "Emotional withdrawal from patients, sarcastic thoughts about customers, going through the motions", "'I do not care any more. These people just take and take.'"],
            ["Reduced Efficacy", "Feeling ineffective despite working hard, questioning your career choice, loss of professional satisfaction", "'What is the point? Nothing I do makes a difference.'"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Warning Signs to Watch For",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Physical: chronic fatigue, headaches, frequent illness, changes in appetite or sleep patterns",
            "Emotional: irritability, tearfulness, feeling numb, loss of empathy, dread before work",
            "Behavioural: withdrawing from colleagues, calling in sick more often, making more errors, clock-watching",
            "Cognitive: difficulty concentrating, forgetfulness, negative self-talk, questioning career choice",
            "Relational: snapping at family, withdrawing from social activities, feeling like nobody understands",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Watch Your Colleagues Too",
          body: "Burnout is easier to recognise in others than in yourself. If you notice a colleague who was once enthusiastic becoming withdrawn, cynical, or error-prone, say something — privately and with care. 'You seem like you have been carrying a lot lately. Are you okay?' might be the most important thing anyone says to them that month.",
        },
        {
          type: "case-study",
          title: "Case Study: The Invisible Collapse",
          scenario:
            "Dwayne has been a pharmacy technician for six years at a busy pharmacy in Montego Bay, Jamaica. He used to love his job — he was known for his warmth with customers and his accuracy. Over the past year, he has become irritable, makes more errors, and dreads going to work. He has started calling in sick on Mondays. When a colleague asks if he is okay, he says 'I am fine — just tired.' His manager has noticed the sick days but has not addressed it.",
          questions: [
            "Which dimensions of burnout is Dwayne showing?",
            "What could Dwayne's manager have done earlier?",
            "What should Dwayne do now?",
          ],
          discussion:
            "Dwayne is showing all three dimensions: exhaustion (dreading work, chronic fatigue), cynicism (irritability, loss of enthusiasm), and reduced efficacy (increasing errors). His manager should have addressed the pattern earlier — not punitively, but supportively. Dwayne needs to acknowledge the burnout, seek support (peer, professional, or employer-provided), and consider what structural changes would make the work sustainable. The cultural expectation in the Caribbean to simply 'keep going' is precisely what allows burnout to progress to this stage.",
        },
        {
          type: "knowledge-check",
          question: "Which of the following is NOT one of the three WHO-recognised dimensions of burnout?",
          options: [
            "Exhaustion",
            "Cynicism",
            "Aggression",
            "Reduced professional efficacy",
          ],
          correctIndex: 2,
          explanation:
            "The three dimensions of burnout recognised by the WHO are exhaustion, cynicism (depersonalisation), and reduced professional efficacy. While irritability and aggression can be symptoms of burnout, aggression is not one of the three defining dimensions.",
        },
      ],
    },
    // ── Lesson 7.2 ──
    {
      id: "m7-l2",
      title: "Practical Coping Strategies for Pharmacy Shift Work",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Coping Strategies That Work in Real Life, Not Just in Textbooks",
        },
        {
          type: "text",
          body: "There is no shortage of wellness advice in the world: meditate, exercise, practise gratitude, take bubble baths. The problem is that most of this advice is written for people who do not work 10-hour shifts on their feet, deal with emotionally draining interactions all day, and then go home to family responsibilities on a salary that barely covers the bills. Pharmacy coping strategies need to be practical, time-efficient, and realistic for Caribbean life.",
        },
        {
          type: "table",
          caption: "Realistic Coping Strategies for Pharmacy Workers",
          headers: ["Strategy", "What It Involves", "When to Use It"],
          rows: [
            ["The Shift Bookend", "Create a deliberate start and end ritual for each shift. Before: take 2 minutes in the car to breathe and set an intention. After: leave work at work — do not carry patient stories home.", "Daily, before and after every shift"],
            ["The Micro-Break", "Take 60 seconds between difficult interactions: stretch, breathe, drink water. Not a full break, but a reset.", "After every emotionally taxing interaction"],
            ["The Debrief Buddy", "Find one trusted colleague you can process difficult experiences with. Take 5 minutes after a hard shift to talk it through.", "After particularly challenging shifts"],
            ["The Boundary Practice", "Learn to say no to extra shifts when you are depleted. 'I cannot take that shift — I need the rest' is a complete sentence.", "When asked to cover shifts beyond your capacity"],
            ["The Competence Check", "When you feel like nothing matters, make a list of three patients you helped well today. Remind yourself of your impact.", "When cynicism or reduced efficacy sets in"],
            ["Physical Movement", "Walk for 15 minutes after work, stretch during breaks, stand differently at the counter. Movement counteracts physical stagnation.", "Daily, especially after long shifts"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Commute Reset",
          body: "If you drive or take public transport to work, use the commute as a transition ritual. On the way to work: mentally prepare for the shift, set one intention ('I will stay patient today'). On the way home: deliberately let go of the day. Change the music. Call a friend about something non-work-related. The commute is your buffer zone between work and life — use it intentionally.",
        },
        {
          type: "heading",
          level: 3,
          text: "Caribbean-Specific Coping",
        },
        {
          type: "text",
          body: "Caribbean culture offers unique coping resources that Western wellness advice often overlooks. Community connection — liming with friends, going to church, spending time with extended family — is a powerful stress buffer. Music, food, the sea, Carnival, fete — these are not distractions from the hard work, they are the cultural infrastructure that makes it sustainable. Do not feel guilty about enjoying life. It is not frivolous — it is survival.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Community: invest in relationships outside work — they remind you that you are more than your job",
            "Spirituality: whatever your faith tradition, spiritual practice provides meaning and perspective during difficult times",
            "Nature: the Caribbean Sea, the mountains, the green — access to nature is a stress relief that costs nothing",
            "Food: cooking for yourself and others is a grounding, nurturing activity — especially sharing a meal with people you love",
            "Creative expression: music, writing, art, dance — creative outlets process emotions that words cannot reach",
          ],
        },
        {
          type: "key-term",
          term: "Shift Bookend",
          definition:
            "A deliberate ritual practised at the beginning and end of each work shift to create psychological boundaries between work and personal life. The pre-shift bookend involves preparation and intention-setting; the post-shift bookend involves conscious release of work-related stress and mental transition to personal time.",
        },
        {
          type: "knowledge-check",
          question: "What is the 'shift bookend' technique?",
          options: [
            "Starting and ending every shift at the exact same time",
            "A deliberate pre-shift and post-shift ritual to create psychological boundaries between work and personal life",
            "Reading a book at the beginning and end of each shift",
            "Arriving early and leaving late to show dedication",
          ],
          correctIndex: 1,
          explanation:
            "The shift bookend is a psychological boundary-setting technique. Before the shift, you take a moment to prepare and set an intention. After the shift, you deliberately let go of work stress and transition to personal time. This prevents work from bleeding into every aspect of your life.",
        },
      ],
    },
    // ── Lesson 7.3 ──
    {
      id: "m7-l3",
      title: "Building Resilience: The Long Game in Caribbean Healthcare",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Resilience Is Not Toughness — It Is Sustainability",
        },
        {
          type: "text",
          body: "There is a dangerous myth in Caribbean healthcare: that resilience means toughness. That the good pharmacy technician is the one who works double shifts without complaint, never takes a sick day, absorbs customer abuse with a smile, and just 'pushes through.' This is not resilience — it is a recipe for collapse. True resilience is the ability to sustain high-quality work over a career, not just a shift. It is the long game, not the sprint.",
        },
        {
          type: "text",
          body: "Building career-length resilience requires three things: meaning (understanding why your work matters), support (having systems and relationships that sustain you), and boundaries (knowing your limits and enforcing them). Without all three, even the most dedicated technician will eventually burn out.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Three Pillars of Career Resilience",
        },
        {
          type: "table",
          caption: "The Three Pillars of Career Resilience",
          headers: ["Pillar", "What It Means", "How to Build It"],
          rows: [
            ["Meaning", "Understanding that your work has genuine impact on people's lives", "Keep a 'wins' journal — write down one positive patient interaction per week. When burnout creeps in, read it."],
            ["Support", "Having professional and personal relationships that sustain you", "Invest in peer relationships at work. Build a support network outside work. Seek mentorship from experienced professionals."],
            ["Boundaries", "Knowing your limits and enforcing them consistently", "Say no to unsustainable demands. Protect your days off. Separate work from personal life. Seek help before you are in crisis."],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Your Career Is a Marathon, Not a Sprint",
          body: "The average pharmacy technician career spans 20–30 years. Burning yourself out in the first five does not serve anyone — not you, not your patients, not your family. Investing in your wellbeing is not selfish — it is the only way to sustain the quality of care that patients deserve over the long term.",
        },
        {
          type: "heading",
          level: 3,
          text: "Building Your Personal Resilience Plan",
        },
        {
          type: "text",
          body: "A resilience plan is not a wish list — it is a concrete, actionable set of commitments you make to yourself. It should address daily habits, weekly practices, and emergency strategies for when things get overwhelming. Write it down. Review it monthly. Adjust it as your life changes.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Daily: one grounding practice (deep breathing, brief walk, journalling, prayer — whatever works for you)",
            "Weekly: one activity that is purely for enjoyment — not obligation, not productivity, just pleasure",
            "Monthly: one honest check-in with yourself — am I still doing okay? Where am I on the burnout spectrum?",
            "Quarterly: one professional development activity — learning something new reignites engagement",
            "Annually: one serious conversation with yourself about whether this career is still right for you — and what needs to change if it is",
            "Emergency: a plan for crisis — who do I call? What do I do if I cannot face another shift? Knowing this before you need it is critical",
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "When to Seek Professional Help",
          body: "If you experience persistent feelings of hopelessness, thoughts of self-harm, inability to function at work or home, or prolonged emotional numbness, please seek professional help. This is not a sign of weakness — it is a sign that you are taking your health seriously. In Trinidad and Tobago, the mental health helpline is 800-4673 (HOPE). In Jamaica, contact the Jamaica Mental Health Advocacy Network. In Barbados, contact the Crisis Centre at 229-6526.",
        },
        {
          type: "island-comparison",
          title: "Mental Health Resources Across the Caribbean",
          description:
            "Access to mental health support varies across the region, but resources exist. Knowing where to find help — for yourself or a colleague — is essential.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Lifeline TT: 800-4673 (HOPE) — 24/7 crisis line",
                "St. Ann's Psychiatric Hospital provides outpatient mental health services",
                "Employee Assistance Programmes (EAPs) available through some larger employers",
                "Growing number of private counsellors and psychologists",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Jamaica Mental Health Advocacy Network — support and resources",
                "Bellevue Hospital — Jamaica's primary psychiatric facility",
                "University Hospital of the West Indies — mental health outpatient services",
                "Growing private counselling sector, including online options",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Barbados Crisis Centre: 229-6526 — crisis support",
                "Psychiatric Hospital (Black Rock) — inpatient and outpatient services",
                "QEH Mental Health Unit — emergency psychiatric care",
                "Barbados Association of Counsellors — private practitioners directory",
              ],
            },
          ],
        },
        {
          type: "key-term",
          term: "Professional Resilience",
          definition:
            "The sustained ability to perform high-quality work, maintain empathy and engagement, and protect personal wellbeing over the course of a career. Unlike acute stress tolerance (surviving a hard day), professional resilience is about building systems, habits, and support structures that make the work sustainable over decades.",
        },
        {
          type: "knowledge-check",
          question: "What are the three pillars of career resilience?",
          options: [
            "Speed, accuracy, and knowledge",
            "Meaning, support, and boundaries",
            "Salary, promotion, and recognition",
            "Exercise, sleep, and nutrition",
          ],
          correctIndex: 1,
          explanation:
            "Career resilience is built on three pillars: meaning (understanding why your work matters), support (relationships and systems that sustain you), and boundaries (knowing and enforcing your limits). All three are needed — remove one, and resilience collapses over time.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m7-q1",
      question:
        "According to the WHO, what are the three dimensions of burnout?",
      options: [
        "Anger, depression, and anxiety",
        "Exhaustion, cynicism, and reduced professional efficacy",
        "Physical illness, emotional withdrawal, and job dissatisfaction",
        "Fatigue, insomnia, and weight change",
      ],
      correctIndex: 1,
      explanation:
        "The WHO (ICD-11) defines burnout through three dimensions: exhaustion (energy depletion), cynicism (mental distance from the job), and reduced professional efficacy (feeling ineffective). Understanding these dimensions helps in early recognition and intervention.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q2",
      question:
        "Which of the following is an early warning sign of burnout?",
      options: [
        "Feeling energised by challenging patients",
        "Volunteering for extra shifts because you love your job",
        "Dreading the start of every shift and counting the hours until it ends",
        "Finding new ways to improve pharmacy workflow",
      ],
      correctIndex: 2,
      explanation:
        "Dreading each shift and clock-watching are early indicators of the exhaustion and cynicism dimensions of burnout. In contrast, feeling energised by challenges, volunteering willingly, and seeking improvements are signs of engagement — the opposite of burnout.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q3",
      question:
        "What is the 'shift bookend' technique?",
      options: [
        "Arriving early and leaving late to prepare and clean up",
        "A deliberate pre-shift and post-shift ritual to create psychological boundaries between work and life",
        "Having a colleague cover the start and end of your shift",
        "Reading pharmacy literature before and after each shift",
      ],
      correctIndex: 1,
      explanation:
        "The shift bookend creates psychological boundaries between work and personal life. Before the shift, a brief ritual prepares your mindset. After the shift, a deliberate release ritual prevents you from carrying work stress home. This technique is simple, time-efficient, and highly effective.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q4",
      question:
        "Why is the Caribbean cultural expectation to 'just push through' harmful in the context of workplace stress?",
      options: [
        "Because Caribbean people are not as resilient as others",
        "Because it delays recognition and treatment of burnout, allowing it to worsen",
        "Because it makes people work too slowly",
        "Because it is a tradition that should be respected, not questioned",
      ],
      correctIndex: 1,
      explanation:
        "The cultural pressure to 'push through' without acknowledging stress delays recognition of burnout symptoms and prevents people from seeking help early. By the time burnout is acknowledged, it has often progressed to a severe stage. Early recognition and intervention are far more effective.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m7-q5",
      question:
        "What are the three pillars of career resilience?",
      options: [
        "Money, status, and power",
        "Speed, accuracy, and customer service",
        "Meaning, support, and boundaries",
        "Knowledge, skills, and experience",
      ],
      correctIndex: 2,
      explanation:
        "Career resilience is sustained by three pillars: meaning (understanding why your work matters), support (relationships and systems that sustain you), and boundaries (knowing your limits and enforcing them). All three are necessary for long-term professional sustainability.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q6",
      questionType: "multiple_select",
      question:
        "Which of the following are appropriate actions when you recognise burnout symptoms in a colleague? (Select all that apply)",
      options: [
        "Approach them privately and express genuine concern",
        "Report them to management for poor performance",
        "Offer to cover a shift if they need a break",
        "Ignore it — their personal struggles are not your business",
        "Share information about available support resources",
      ],
      correctIndex: 0,
      questionData: {
        correct_indices: [0, 2, 4],
      },
      explanation:
        "When a colleague shows signs of burnout, the compassionate and professional response includes: speaking with them privately, offering practical support like shift coverage, and sharing information about mental health resources. Reporting them as underperforming or ignoring the situation both fail to address the root cause.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m7-q7",
      questionType: "scenario",
      question:
        "You have been working as a pharmacy technician for three years. Lately, you feel exhausted before each shift, have lost empathy for patients you once cared about, and feel like your work does not make a difference. These feelings have persisted for several months. What is the MOST appropriate first step?",
      options: [
        "Quit your job immediately — it is clearly not for you",
        "Push through it — everyone feels this way sometimes",
        "Acknowledge the burnout, speak to a trusted person, and explore what structural changes could help",
        "Take a two-week holiday and assume you will feel better when you return",
      ],
      correctIndex: 2,
      questionData: {
        context: "A pharmacy technician experiencing all three dimensions of burnout — exhaustion, cynicism, and reduced efficacy — over several months.",
      },
      explanation:
        "This scenario describes established burnout across all three dimensions. The first step is acknowledging it rather than denying or fleeing. Speaking to a trusted person provides perspective, and exploring structural changes (workload, support, boundaries) addresses root causes. A holiday alone will not fix burnout if the underlying conditions remain unchanged.",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m7-q8",
      questionType: "true_false",
      question:
        "True resilience in pharmacy work means being able to handle any amount of stress without complaint.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "This is a harmful myth. True resilience is not about absorbing unlimited stress without complaint. It is about sustaining high-quality work and personal wellbeing over the course of a career through meaning, support, and boundaries. Complaining about unsustainable conditions is healthy advocacy, not weakness.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q9",
      question:
        "Which of the following is a Caribbean-specific coping resource that Western wellness advice often overlooks?",
      options: [
        "Expensive gym memberships",
        "Community connection — liming, church, extended family, shared meals",
        "Corporate Employee Assistance Programmes",
        "Online meditation apps",
      ],
      correctIndex: 1,
      explanation:
        "Caribbean culture offers powerful coping resources including community connection (liming, church, extended family), cultural celebrations (Carnival, fete), and access to natural beauty (sea, mountains). These culturally embedded stress buffers are often more accessible and effective than Western wellness recommendations.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q10",
      question:
        "At what point should a pharmacy technician seek professional mental health help?",
      options: [
        "Only after being diagnosed with a mental illness",
        "When persistent feelings of hopelessness, inability to function, or thoughts of self-harm occur",
        "Only after being fired from their job",
        "When their pharmacist tells them they need help",
      ],
      correctIndex: 1,
      explanation:
        "Professional help should be sought when experiencing persistent hopelessness, inability to function at work or home, emotional numbness, or thoughts of self-harm. Waiting for a formal diagnosis, job loss, or someone else to notice delays intervention. Early help-seeking is a sign of strength and self-awareness.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
  ],
};

// ============================================================================
// FULL COURSE ASSEMBLY
// ============================================================================

const customerServiceCourse: FullCourse = {
  courseId: "customer-service-workplace-excellence",
  title: "Customer Service & Workplace Excellence",
  tagline: "Master the human side of pharmacy — from irate customers to self-care",
  modules: [module1, module2, module3, module4, module5, module6, module7],
};

// ── Utility helpers ─────────────────────────────────────────────────────────

export const totalLessons = customerServiceCourse.modules.reduce(
  (sum, m) => sum + m.lessons.length,
  0,
);

export const totalQuizQuestions = customerServiceCourse.modules.reduce(
  (sum, m) => sum + m.quiz.length,
  0,
);

export default customerServiceCourse;
