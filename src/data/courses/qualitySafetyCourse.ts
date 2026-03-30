// ============================================================================
// PIXOPHARM LMS — A1: Quality Assurance & Safety
// Full Course Content: 8 Modules, 26 Lessons, 80+ Quiz Questions
// Focus Islands: Trinidad & Tobago, Jamaica, Barbados
// ============================================================================

import type { Module, FullCourse } from '../types';

// ============================================================================
// MODULE 1 — Medication Safety: Types, Causes & Consequences of Errors
// ============================================================================

const module1: Module = {
  id: "m1-medication-safety",
  number: 1,
  title: "Medication Safety: Types, Causes & Consequences of Errors",
  description:
    "Medication errors are a leading cause of preventable patient harm worldwide, and Caribbean pharmacies face unique challenges that compound the risk. This module classifies errors by type and severity, examines root causes specific to the region, and explores the human and financial consequences of unsafe medication practices.",
  learningObjectives: [
    "Classify medication errors by type, stage, and severity using the NCC MERP index",
    "Identify the most common root causes of dispensing errors in Caribbean pharmacy settings",
    "Analyse the human, financial, and institutional consequences of medication errors",
    "Differentiate between latent failures and active failures in medication use systems",
    "Describe the Swiss Cheese Model and its application to pharmacy error prevention",
  ],
  lessons: [
    // ── Lesson 1.1 ──────────────────────────────────────────────────────────
    {
      id: "m1-l1",
      title: "What Is a Medication Error? Definitions, Classification & the NCC MERP Index",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Defining Medication Errors",
        },
        {
          type: "text",
          body: "A medication error is any preventable event that may cause or lead to inappropriate medication use or patient harm while the medication is in the control of the healthcare professional, patient, or consumer. This definition, established by the National Coordinating Council for Medication Error Reporting and Prevention (NCC MERP), is deliberately broad — it encompasses errors at every stage, from prescribing to dispensing to administration, and includes near-misses where the error was caught before reaching the patient.",
        },
        {
          type: "key-term",
          term: "Medication Error",
          definition:
            "Any preventable event that may cause or lead to inappropriate medication use or patient harm while the medication is in the control of a healthcare professional, patient, or consumer. The key word is 'preventable' — adverse drug reactions that occur despite correct use are not medication errors.",
        },
        {
          type: "text",
          body: "Understanding what constitutes a medication error requires careful distinction from related concepts. An adverse drug reaction (ADR) is harm caused by a drug at normal doses during normal use — this is not an error. An adverse drug event (ADE) is any harm associated with medication use, whether caused by an error or not. A medication error may or may not cause an ADE. A near-miss (or close call) is an error that was caught before it reached the patient. These distinctions matter because they determine how incidents are categorised, reported, and addressed.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Caribbean Context",
          body: "The World Health Organisation estimates that medication errors cost US$42 billion globally each year. In the Caribbean, limited reporting infrastructure means the true extent of medication errors is likely significantly underestimated. Building robust reporting systems is a regional priority — and starts with every pharmacy technician understanding what constitutes an error.",
        },
        {
          type: "heading",
          level: 3,
          text: "Classifying Errors by Stage",
        },
        {
          type: "text",
          body: "Medication errors can occur at any point in the medication use process. Each stage presents distinct risks, and the pharmacy technician's role intersects primarily with the dispensing, preparation, and storage stages — though awareness of all stages is essential for effective error prevention.",
        },
        {
          type: "table",
          caption: "Medication Error Types by Stage",
          headers: ["Stage", "Error Type", "Example", "Who Is Primarily Involved"],
          rows: [
            [
              "Prescribing",
              "Wrong drug, wrong dose, drug interactions missed, illegible handwriting",
              "Physician writes 'methotrexate daily' instead of 'methotrexate weekly'",
              "Prescriber (physician, nurse practitioner)",
            ],
            [
              "Transcribing",
              "Misread prescription, data entry error, wrong patient record",
              "Technician enters amLODIPine 10 mg but prescription reads 5 mg",
              "Pharmacy technician, data entry staff",
            ],
            [
              "Dispensing",
              "Wrong drug selected, wrong strength, wrong quantity, wrong label",
              "Technician picks losartan 50 mg instead of losartan 100 mg from the shelf",
              "Pharmacy technician, pharmacist (final check)",
            ],
            [
              "Administration",
              "Wrong route, wrong time, wrong patient, missed dose",
              "Nurse administers IV medication that was intended for oral use",
              "Nurse, patient (self-administration)",
            ],
            [
              "Monitoring",
              "Failure to monitor drug levels, renal function, or therapeutic response",
              "Patient on warfarin not tested for INR for three months",
              "Pharmacist, physician",
            ],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "The NCC MERP Severity Index",
        },
        {
          type: "text",
          body: "The NCC MERP Index categorises medication errors by severity of outcome on a scale from A to I. This standardised classification helps healthcare systems track and compare error data, prioritise interventions, and communicate risk effectively. Every pharmacy technician should be familiar with this index.",
        },
        {
          type: "table",
          caption: "NCC MERP Medication Error Severity Index",
          headers: ["Category", "Description", "Patient Outcome"],
          rows: [
            ["A", "Circumstances or events that have the capacity to cause error", "No error reached the patient"],
            ["B", "An error occurred but did not reach the patient (near-miss)", "No harm"],
            ["C", "An error reached the patient but caused no harm", "No harm"],
            ["D", "An error reached the patient, required monitoring to confirm no harm", "Monitoring required"],
            ["E", "An error that contributed to temporary harm requiring intervention", "Temporary harm"],
            ["F", "An error that contributed to temporary harm requiring hospitalisation", "Hospitalisation"],
            ["G", "An error that contributed to permanent patient harm", "Permanent harm"],
            ["H", "An error that required intervention to sustain life", "Life-threatening"],
            ["I", "An error that contributed to or resulted in the patient's death", "Death"],
          ],
        },
        {
          type: "knowledge-check",
          question: "A pharmacy technician catches a wrong-strength error during the labelling step before the medication reaches the pharmacist for final check. What NCC MERP category is this?",
          options: [
            "Category A — capacity to cause error",
            "Category B — error occurred but did not reach the patient",
            "Category C — error reached the patient but caused no harm",
            "Category D — error reached the patient, monitoring required",
          ],
          correctIndex: 1,
          explanation:
            "This is a Category B near-miss. The error occurred (wrong strength was selected) but was caught before the medication reached the patient. Near-misses are extremely valuable learning opportunities and should always be reported — they reveal system weaknesses without patient harm.",
        },
      ],
    },
    // ── Lesson 1.2 ──────────────────────────────────────────────────────────
    {
      id: "m1-l2",
      title: "Root Causes: Why Errors Happen in Caribbean Pharmacies",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Understanding Why Errors Occur",
        },
        {
          type: "text",
          body: "Medication errors are rarely caused by a single factor. They typically result from a chain of contributing causes — system failures, environmental pressures, human factors, and process gaps that align to create the conditions for error. Understanding these root causes is the first step toward prevention.",
        },
        {
          type: "key-term",
          term: "Latent Failure",
          definition:
            "An underlying system weakness — such as inadequate staffing, poor lighting, confusing drug packaging, or lack of standard procedures — that creates conditions in which errors are more likely to occur. Latent failures may exist for months or years before contributing to an incident.",
        },
        {
          type: "key-term",
          term: "Active Failure",
          definition:
            "An unsafe act committed by the person at the sharp end — the technician, pharmacist, or nurse whose action (or inaction) directly triggers the error. Active failures are the visible tip of the iceberg; latent failures are the mass beneath.",
        },
        {
          type: "text",
          body: "Caribbean pharmacies face a distinct set of latent failures driven by the region's geography, economics, and healthcare infrastructure. These systemic issues create an environment in which even diligent, well-trained technicians are at increased risk of error.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "High prescription volume with limited staff — many Caribbean pharmacies operate with one pharmacist and one or two technicians, processing hundreds of prescriptions per day",
            "Generic substitution complexity — with multiple generic manufacturers supplying the same molecule in different packaging, look-alike sound-alike (LASA) confusion is common",
            "Handwritten prescriptions — electronic prescribing is still the exception rather than the rule in most Caribbean jurisdictions, and illegible handwriting is a persistent source of transcription errors",
            "Temperature and humidity — heat can degrade medications and create uncomfortable working conditions that impair concentration",
            "Interrupted workflow — walk-in patients, phone calls, and informal consultations constantly break the dispensing workflow, increasing error risk",
            "Limited technology — automated dispensing systems, barcode verification, and clinical decision support are uncommon outside major hospital pharmacies",
            "Supply chain instability — frequent stock-outs force substitutions, which introduce additional opportunities for selection errors",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Interruption Problem",
          body: "Research shows that each interruption during the dispensing process increases the risk of error by approximately 12%. In a busy Caribbean community pharmacy where the technician is simultaneously dispensing, answering phones, and helping walk-in customers, interruptions may occur dozens of times per hour. Establishing 'no-interruption zones' during critical dispensing steps is one of the most effective error-prevention strategies.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Swiss Cheese Model",
        },
        {
          type: "text",
          body: "James Reason's Swiss Cheese Model is the most widely used framework for understanding how errors penetrate safety defences. Imagine multiple slices of Swiss cheese stacked together — each slice represents a safety barrier (training, double-checks, labelling standards, technology). The holes in each slice represent weaknesses. An error leads to patient harm only when the holes in every slice align, allowing the error to pass through all defences. The goal of safety systems is not to eliminate all holes (which is impossible) but to ensure they never align.",
        },
        {
          type: "image-placeholder",
          alt: "Swiss Cheese Model diagram showing multiple defence layers with holes that can align to allow an error through",
          caption: "Reason's Swiss Cheese Model — errors cause harm when holes in multiple defences align simultaneously",
        },
        {
          type: "case-study",
          title: "Case Study: The Wrong-Strength Dispensing Error",
          scenario:
            "A busy community pharmacy in Port of Spain, Trinidad, operates with one pharmacist and one technician. On a Friday afternoon during rainy season, the pharmacy is crowded. The technician is dispensing enalapril 5 mg tablets for an elderly patient with hypertension. The phone rings, and the technician answers while mid-count. When she returns to the dispensing bench, she picks up a bottle from the shelf — but it is enalapril 20 mg, not 5 mg. The packaging looks nearly identical. The pharmacist, occupied with a patient consultation at the counter, performs a brief final check and does not catch the strength discrepancy. The patient takes the 20 mg dose for three days before experiencing severe hypotension and dizziness, requiring emergency department treatment.",
          questions: [
            "Identify at least three latent failures in this scenario.",
            "What active failure occurred, and why was it understandable given the circumstances?",
            "How could the Swiss Cheese Model explain why all defence layers failed?",
            "What system changes would you recommend to prevent this error from recurring?",
          ],
          discussion:
            "Latent failures include understaffing (only one pharmacist and one technician for a busy pharmacy), look-alike packaging for different strengths of the same drug, lack of an 'interruption-free zone' policy during dispensing, no barcode verification technology, and an overburdened pharmacist performing a superficial final check. The active failure was the technician selecting the wrong bottle after an interruption, but this was predictable given the system weaknesses. System solutions might include colour-coded shelf labels for different strengths, a strict no-interruption policy during dispensing, additional staffing during peak hours, and implementing a barcode-scan step before dispensing.",
        },
        {
          type: "knowledge-check",
          question: "Which of the following is an example of a latent failure rather than an active failure?",
          options: [
            "A technician picks the wrong bottle from the shelf",
            "A pharmacist skips the final check due to time pressure",
            "The pharmacy uses look-alike packaging for different drug strengths",
            "A prescriber writes an incorrect dose on the prescription",
          ],
          correctIndex: 2,
          explanation:
            "Look-alike packaging is a latent failure — a systemic weakness that exists independently of any individual's actions. It creates conditions in which selection errors are more likely. The other options describe active failures: specific unsafe acts by individuals at specific moments.",
        },
      ],
    },
    // ── Lesson 1.3 ──────────────────────────────────────────────────────────
    {
      id: "m1-l3",
      title: "Consequences of Medication Errors: Patient, Professional & Institutional",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Ripple Effect of Errors",
        },
        {
          type: "text",
          body: "A single medication error can set off a cascade of consequences that extends far beyond the immediate patient. Understanding these consequences — clinical, legal, psychological, financial, and institutional — reinforces why every safety measure matters and why 'it's just a small mistake' is never an acceptable attitude in pharmacy.",
        },
        {
          type: "heading",
          level: 3,
          text: "Patient Consequences",
        },
        {
          type: "text",
          body: "The patient bears the most direct consequences of a medication error. Physical harm ranges from mild discomfort to permanent disability or death. But the psychological impact is often overlooked: patients who experience medication errors frequently lose trust in the healthcare system, become anxious about taking prescribed medications (medication non-adherence), and may avoid seeking necessary care. In the Caribbean, where community pharmacies are trusted neighbourhood institutions, a single error can erode the confidence of an entire community.",
        },
        {
          type: "heading",
          level: 3,
          text: "Professional Consequences",
        },
        {
          type: "text",
          body: "Healthcare professionals involved in medication errors face disciplinary action from regulatory bodies, potential criminal prosecution (particularly in cases of gross negligence), loss of registration or certification, and civil liability. In Caribbean jurisdictions where pharmacy technician registration is still developing, the supervising pharmacist typically bears the primary legal responsibility — but the technician's professional reputation and career prospects are equally at stake.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Second Victim Syndrome",
          body: "The healthcare professional involved in a medication error is often called the 'second victim.' Guilt, shame, anxiety, depression, and fear of recurrence can be devastating. In the Caribbean, where pharmacy teams are small and close-knit, the emotional impact on the entire team can be profound. A just culture — which distinguishes between honest mistakes, at-risk behaviour, and reckless behaviour — is essential for supporting second victims while maintaining accountability.",
        },
        {
          type: "heading",
          level: 3,
          text: "Institutional and Financial Consequences",
        },
        {
          type: "text",
          body: "For the pharmacy or hospital, medication errors carry financial costs including treatment of adverse outcomes, litigation expenses, insurance premium increases, regulatory fines, and lost revenue from diminished reputation. The WHO estimates that medication errors cost the global healthcare system US$42 billion annually. In resource-constrained Caribbean health systems, these costs divert funds from patient care and drug procurement.",
        },
        {
          type: "table",
          caption: "Consequences of Medication Errors — Multi-Level Impact",
          headers: ["Level", "Consequences", "Caribbean-Specific Factors"],
          rows: [
            [
              "Patient",
              "Physical harm, psychological distress, medication non-adherence, loss of trust",
              "Limited access to specialist follow-up care on smaller islands; community word-of-mouth amplifies reputational damage",
            ],
            [
              "Professional",
              "Disciplinary action, loss of registration, criminal charges, second victim syndrome",
              "Small professional community means errors are widely known; limited access to counselling and peer support",
            ],
            [
              "Institutional",
              "Litigation costs, regulatory sanctions, insurance increases, staff turnover",
              "Small pharmacies may not survive the financial impact; public sector pharmacies face political scrutiny",
            ],
            [
              "Health System",
              "Increased hospitalisations, increased healthcare costs, diversion of resources",
              "Resource-constrained Caribbean systems cannot absorb preventable costs; medication shortages worsen when budgets are diverted to managing error consequences",
            ],
          ],
        },
        {
          type: "island-comparison",
          title: "Legal Framework for Medication Errors by Island",
          description:
            "The legal consequences of medication errors vary by jurisdiction. Understanding your island's framework is essential for every pharmacy professional.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Pharmacy Board of Trinidad and Tobago can investigate complaints and impose sanctions",
                "Civil liability under tort law (negligence) — patients can sue for damages",
                "Criminal prosecution possible under the Offences Against the Person Act for gross negligence causing harm or death",
                "No specific medication error reporting legislation; voluntary reporting to Pharmacy Board",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Pharmacy Council of Jamaica has disciplinary authority over registered pharmacists",
                "Civil negligence claims adjudicated through the courts",
                "Criminal charges possible in cases of reckless disregard for patient safety",
                "National Health Fund monitors medication use in the public system",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Drug Service regulates pharmaceutical practice and can investigate incidents",
                "Civil liability for negligence applies to both pharmacists and pharmacy owners",
                "Queen Elizabeth Hospital has internal incident reporting systems for public sector errors",
                "Professional liability insurance increasingly expected for community pharmacy practitioners",
              ],
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "What is 'second victim syndrome' in the context of medication errors?",
          options: [
            "The second patient harmed by the same recurring error",
            "The family member of the patient who suffers emotional distress",
            "The healthcare professional involved in the error who experiences guilt, shame, and psychological harm",
            "The pharmacy that loses business after a publicised error",
          ],
          correctIndex: 2,
          explanation:
            "Second victim syndrome refers to the healthcare professional involved in an error who experiences significant psychological distress including guilt, shame, anxiety, depression, and fear. Supporting second victims through a just culture, peer support programmes, and access to counselling is essential for maintaining a healthy, safety-focused pharmacy team.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m1-q1",
      question: "According to the NCC MERP definition, what is the defining characteristic of a medication error?",
      options: [
        "It must cause patient harm",
        "It must be preventable",
        "It must involve a prescription drug",
        "It must occur during dispensing",
      ],
      correctIndex: 1,
      explanation:
        "The defining characteristic of a medication error is that it is preventable. The NCC MERP definition specifies 'any preventable event that may cause or lead to inappropriate medication use or patient harm.' An error does not need to cause actual harm to be classified as a medication error — near-misses are also medication errors.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q2",
      question: "A patient receives the correct medication at the correct dose, but develops an allergic reaction that was documented in their medical record. This is best classified as:",
      options: [
        "A prescribing error",
        "An adverse drug reaction (ADR)",
        "A dispensing error",
        "A medication error (allergy not checked)",
      ],
      correctIndex: 3,
      explanation:
        "If the allergy was documented in the patient's record, then failure to check for it before dispensing constitutes a medication error — specifically, a failure in the allergy screening step of the medication use process. An ADR refers to harm from a drug during normal use when the reaction was not predictable based on available information.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m1-q3",
      question: "Which of the following is an example of a latent failure in a pharmacy system?",
      options: [
        "A technician selects the wrong drug bottle from the shelf",
        "A pharmacist forgets to counsel a patient about food interactions",
        "The pharmacy stores two look-alike drugs in adjacent bins without differentiation",
        "A prescriber writes a dose that is ten times higher than appropriate",
      ],
      correctIndex: 2,
      explanation:
        "Storing look-alike drugs in adjacent bins without differentiation is a latent failure — a system-level weakness that persists over time and creates conditions for error. The other options are active failures: specific errors made by individuals at the point of care.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q4",
      question: "In Reason's Swiss Cheese Model, what do the 'holes' in each slice represent?",
      options: [
        "Individual medication errors",
        "Weaknesses in each layer of defence",
        "Specific patients who are harmed",
        "Gaps in the pharmacist's knowledge",
      ],
      correctIndex: 1,
      explanation:
        "In the Swiss Cheese Model, each slice represents a layer of defence (training, double-checks, technology, SOPs), and the holes in each slice represent weaknesses in that defence layer. An error reaches the patient only when holes in multiple layers align simultaneously. The model emphasises that no single defence is perfect — safety depends on multiple overlapping layers.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q5",
      question: "A pharmacy technician is interrupted by a phone call while counting tablets. After the call, she resumes counting but loses her place and dispenses 20 tablets instead of the prescribed 30. The patient's condition worsens due to insufficient medication. Which NCC MERP category best describes this error?",
      options: [
        "Category B — error occurred but did not reach the patient",
        "Category C — error reached the patient but no harm",
        "Category E — error caused temporary harm requiring intervention",
        "Category G — error contributed to permanent harm",
      ],
      correctIndex: 2,
      explanation:
        "The patient received an insufficient quantity, their condition worsened, and intervention was required (additional medication, medical assessment). This constitutes Category E — an error that contributed to or resulted in temporary harm requiring intervention. If the harm had resolved without medical intervention, it would be Category D or C.",
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q6",
      question: "Which factor is cited as particularly contributing to medication errors in Caribbean community pharmacies?",
      options: [
        "Excessive use of automated dispensing systems",
        "Too many pharmacists supervising a single technician",
        "High prescription volume combined with limited staffing",
        "Widespread adoption of electronic prescribing",
      ],
      correctIndex: 2,
      explanation:
        "Many Caribbean community pharmacies operate with minimal staffing — often one pharmacist and one or two technicians — while processing high volumes of prescriptions. This workload imbalance, combined with limited technology, handwritten prescriptions, and frequent interruptions, creates a high-risk environment for medication errors.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q7",
      question: "What does a 'just culture' in the context of medication errors mean?",
      options: [
        "All errors are punished equally regardless of intent",
        "Errors are ignored to avoid upsetting staff",
        "Honest mistakes, at-risk behaviour, and reckless acts are distinguished and handled differently",
        "Only pharmacists are held accountable, not technicians",
      ],
      correctIndex: 2,
      explanation:
        "A just culture distinguishes between honest mistakes (system-supported), at-risk behaviour (coached and corrected), and reckless acts (disciplined). This approach encourages reporting of errors and near-misses by assuring staff that honest mistakes made while following reasonable processes will not result in punishment — while maintaining accountability for wilful violations.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q8",
      question: "Research suggests that each interruption during the dispensing process increases error risk by approximately:",
      options: [
        "2%",
        "5%",
        "12%",
        "25%",
      ],
      correctIndex: 2,
      explanation:
        "Studies indicate that each interruption during the dispensing process increases the risk of a medication error by approximately 12%. In busy Caribbean pharmacies where technicians face frequent interruptions from walk-in patients, phone calls, and informal consultations, this cumulative risk is substantial.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q9",
      questionType: "true_false",
      question: "An adverse drug reaction (ADR) that occurs at the correct dose during normal use is always classified as a medication error.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "False. An adverse drug reaction at the correct dose during normal use is not a medication error — it is an inherent risk of the drug. Medication errors are, by definition, preventable. An ADR that was not foreseeable (e.g., a first-time allergic reaction with no prior history) is not a preventable event.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q10",
      questionType: "multiple_select",
      question: "Which of the following are consequences of medication errors for the HEALTHCARE PROFESSIONAL involved? (Select all that apply)",
      options: [
        "Second victim syndrome — guilt, shame, anxiety",
        "Potential loss of professional registration",
        "Automatic criminal prosecution in all Caribbean jurisdictions",
        "Civil liability for negligence",
        "Possible disciplinary action from the Pharmacy Board",
      ],
      correctIndex: 0,
      questionData: {
        correct_indices: [0, 1, 3, 4],
      },
      explanation:
        "Healthcare professionals involved in medication errors may experience second victim syndrome, face loss of registration, civil liability, and disciplinary action. However, criminal prosecution is not automatic in all Caribbean jurisdictions — it is typically reserved for cases of gross negligence or reckless disregard for patient safety, not honest mistakes.",
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
  ],
};

// ============================================================================
// MODULE 2 — Error Prevention: Tall Man Lettering, Barcode Verification
// ============================================================================

const module2: Module = {
  id: "m2-error-prevention",
  number: 2,
  title: "Error Prevention: Tall Man Lettering, Barcode Verification & Safety Strategies",
  description:
    "Equipped with an understanding of why errors occur, this module focuses on how to prevent them. From the visual cue of Tall Man Lettering to technology-assisted barcode verification, you will learn the frontline strategies and system-level interventions that reduce medication errors in Caribbean pharmacy practice.",
  learningObjectives: [
    "Explain the purpose and principles of Tall Man Lettering for look-alike sound-alike (LASA) drug pairs",
    "Apply the Five Rights and ISMP best practices to the dispensing workflow",
    "Evaluate the role of barcode scanning technology in error prevention",
    "Design a LASA-safe shelving strategy for a Caribbean community pharmacy",
    "Compare technology-based and behaviour-based error prevention approaches",
  ],
  lessons: [
    // ── Lesson 2.1 ──────────────────────────────────────────────────────────
    {
      id: "m2-l1",
      title: "Look-Alike Sound-Alike (LASA) Drugs: The Silent Threat",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "When Drugs Look or Sound Too Similar",
        },
        {
          type: "text",
          body: "Look-alike sound-alike (LASA) drugs are medications whose names look similar when written or sound similar when spoken. They represent one of the most persistent and dangerous sources of medication errors worldwide. The problem is compounded in the Caribbean, where multiple generic manufacturers supply the same molecules in packaging that can vary dramatically — or, worse, look nearly identical across different drugs entirely.",
        },
        {
          type: "key-term",
          term: "LASA Drugs (Look-Alike Sound-Alike)",
          definition:
            "Medications whose names are visually or phonetically similar, creating a risk of confusion during prescribing, dispensing, or administration. Examples include hydrOXYzine / hydrALAZINE, predniSONE / prednisoLONE, and chlorproMAZINE / chlorproPAMIDE.",
        },
        {
          type: "text",
          body: "The Institute for Safe Medication Practices (ISMP) maintains a list of confused drug names that has become the global reference standard. In the Caribbean, this list must be supplemented with locally relevant LASA pairs, because the specific generic products available on any given island depend on which manufacturers have distribution agreements with local importers.",
        },
        {
          type: "table",
          caption: "Common LASA Drug Pairs Encountered in Caribbean Pharmacies",
          headers: ["Drug A", "Drug B", "Risk", "Caribbean Prevalence"],
          rows: [
            ["hydrOXYzine (antihistamine)", "hydrALAZINE (antihypertensive)", "Dangerous blood pressure drop if antihistamine patient receives antihypertensive", "High — both widely stocked in community pharmacies"],
            ["predniSONE", "prednisoLONE", "Different potency and metabolic conversion; incorrect substitution affects dosing", "Very high — both used extensively for inflammatory conditions"],
            ["metFORMIN", "metroNIDAZOLE", "Diabetic patient receives antibiotic, missing diabetes management", "High — both are essential medicines in the Caribbean"],
            ["amLODIPine", "aMILoride", "Calcium channel blocker vs. potassium-sparing diuretic — serious cardiovascular risk", "Moderate — both used in hypertension management"],
            ["gliMEPIRide", "glyBURIDE", "Both are sulphonylureas but different dosing ranges — hypoglycaemia risk", "High — diabetes is the most common NCD in the Caribbean"],
            ["cefTRIAXone", "ceFAZolin", "Different spectrum of activity and dosing; treatment failure possible", "High — both commonly used injectable antibiotics"],
            ["chlorproMAZINE", "chlorproPAMIDE", "Antipsychotic confused with oral hypoglycaemic — severe hypoglycaemia risk", "Moderate — both found in public hospital formularies"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "The Caribbean Generic Challenge",
          body: "When a brand-name drug goes off patent, multiple generic manufacturers produce the same molecule — often in similar-looking packaging. In the Caribbean, a pharmacy may stock generics from Indian, European, and North American manufacturers simultaneously. Different manufacturers' packages for the SAME drug may look different, while packages from the same manufacturer for DIFFERENT drugs may look confusingly similar. This 'packaging roulette' makes visual verification alone unreliable.",
        },
        {
          type: "knowledge-check",
          question: "Which of the following LASA drug pairs poses a risk of a patient receiving an antihypertensive instead of an antihistamine?",
          options: [
            "predniSONE / prednisoLONE",
            "hydrOXYzine / hydrALAZINE",
            "metFORMIN / metroNIDAZOLE",
            "gliMEPIRide / glyBURIDE",
          ],
          correctIndex: 1,
          explanation:
            "HydrOXYzine is an antihistamine, while hydrALAZINE is an antihypertensive. Confusing these two can result in a patient receiving a blood pressure-lowering drug instead of an allergy medication, potentially causing dangerous hypotension — particularly risky in elderly patients.",
        },
      ],
    },
    // ── Lesson 2.2 ──────────────────────────────────────────────────────────
    {
      id: "m2-l2",
      title: "Tall Man Lettering: Principles, Application & ISMP Standards",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Making Differences Visible",
        },
        {
          type: "text",
          body: "Tall Man Lettering (TML) is a visual strategy that uses uppercase letters to highlight the differences between look-alike drug names. By drawing the eye to the distinguishing characters, TML reduces the likelihood that a reader will confuse two similar names. The technique was first recommended by the FDA in 2001 and has since been adopted by the ISMP, the Joint Commission, and the WHO as a core medication safety strategy.",
        },
        {
          type: "key-term",
          term: "Tall Man Lettering (TML)",
          definition:
            "A safety strategy that uses UPPERCASE letters to emphasise the portions of drug names that differ between look-alike pairs. For example: hydrOXYzine vs. hydrALAZINE. The capitalised letters force the reader to slow down and recognise the distinguishing characters.",
        },
        {
          type: "text",
          body: "The ISMP publishes and regularly updates a standardised list of drug name pairs that should be displayed with Tall Man Lettering. This list is the authoritative reference for pharmacy practice. Key principles of TML implementation include: always capitalise the portion of the name that differs between the confused pair, apply TML consistently across all pharmacy systems (labels, shelves, computer screens, order forms), and combine TML with other safety strategies — it is not a standalone solution.",
        },
        {
          type: "table",
          caption: "ISMP Tall Man Lettering Examples Relevant to Caribbean Practice",
          headers: ["Drug Name with TML", "Commonly Confused With", "Therapeutic Class"],
          rows: [
            ["hydrOXYzine", "hydrALAZINE", "Antihistamine vs. Antihypertensive"],
            ["predniSONE", "prednisoLONE", "Corticosteroids (different potency)"],
            ["metFORMIN", "metroNIDAZOLE", "Antidiabetic vs. Antibiotic"],
            ["gliMEPIRide", "glyBURIDE", "Both sulphonylureas — different dosing"],
            ["buPROPion", "busPIRone", "Antidepressant vs. Anxiolytic"],
            ["cloNIDine", "clonAZEPAM", "Antihypertensive vs. Benzodiazepine"],
            ["DOBUTamine", "DOPamine", "Both vasopressors — different indications"],
            ["vinCRIStine", "vinBLAStine", "Both vinca alkaloids — fatal mix-up risk"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Implementing TML in Your Pharmacy",
          body: "Tall Man Lettering is only effective if it is applied consistently and universally throughout the pharmacy. This means: shelf labels, prescription labels, computer system displays, refrigerator labels, automated dispensing cabinets, and staff training materials must all use TML for ISMP-listed drug pairs. Partial implementation creates a false sense of security.",
        },
        {
          type: "text",
          body: "Research evidence supports TML as an effective error-reduction strategy, though it works best when combined with other interventions. Studies show that TML reduces look-alike name confusion by 35-50% in experimental settings. However, TML alone cannot prevent all LASA errors — it must be part of a comprehensive approach that includes physical separation on shelves, colour-coded labels, barcode verification, and independent double-checks.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Five Rights of Medication Safety",
        },
        {
          type: "text",
          body: "Every dispensing act should be verified against the Five Rights: the Right Patient, the Right Drug, the Right Dose, the Right Route, and the Right Time. These rights are not merely a checklist — they are a cognitive framework that should run through every step of the dispensing process. Some authorities add additional rights: the Right Documentation, the Right Reason, and the Right Response.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Right Patient — confirm the patient's identity using at least two identifiers (name and date of birth, or name and address)",
            "Right Drug — verify the drug name matches the prescription, using TML awareness for LASA pairs",
            "Right Dose — confirm the dose, strength, and quantity match the prescription",
            "Right Route — ensure the formulation matches the prescribed route (oral, topical, injectable, etc.)",
            "Right Time — verify the dosing frequency and timing instructions",
          ],
        },
        {
          type: "knowledge-check",
          question: "Tall Man Lettering has been shown in research to reduce look-alike name confusion by approximately:",
          options: [
            "5-10%",
            "15-25%",
            "35-50%",
            "75-90%",
          ],
          correctIndex: 2,
          explanation:
            "Research indicates that Tall Man Lettering reduces look-alike drug name confusion by 35-50% in experimental settings. While significant, this is not sufficient on its own — TML must be combined with physical separation, barcode verification, and other strategies for comprehensive LASA error prevention.",
        },
      ],
    },
    // ── Lesson 2.3 ──────────────────────────────────────────────────────────
    {
      id: "m2-l3",
      title: "Barcode Verification & Technology-Assisted Safety",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Technology as a Safety Barrier",
        },
        {
          type: "text",
          body: "Barcode medication verification is a technology-based safety strategy that uses scanning to confirm that the correct drug, strength, and dosage form are being dispensed. When a barcode is scanned, the system matches the product's unique identifier against the prescription record and alerts the user to any discrepancy. This technology adds a critical defence layer that does not depend on human visual recognition — which, as we have seen, is fallible, especially under pressure.",
        },
        {
          type: "key-term",
          term: "Barcode Medication Administration (BCMA)",
          definition:
            "A technology system that uses barcode scanning to verify patient identity, medication identity, dose, route, and time at the point of administration. Originally developed for hospital inpatient settings, the principles are increasingly adapted for outpatient dispensing.",
        },
        {
          type: "text",
          body: "In well-resourced hospital settings, barcode verification can reduce dispensing errors by up to 85%. However, the Caribbean faces significant barriers to widespread adoption: the upfront cost of scanners and software, the need for reliable internet or network connectivity, the lack of standardised barcoding on products from some generic manufacturers, and the training required for staff who may have limited technology experience.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Caribbean Technology Adoption",
          body: "While barcode verification remains uncommon in Caribbean community pharmacies, larger hospital pharmacies in Trinidad, Jamaica, and Barbados are beginning to implement scanning technology. The OECS Pharmaceutical Procurement Service has been working with suppliers to ensure barcode standardisation on products procured for the Eastern Caribbean. Community pharmacies can begin with simple, affordable USB barcode scanners connected to their dispensing software.",
        },
        {
          type: "heading",
          level: 3,
          text: "Beyond Barcodes: Other Technology Solutions",
        },
        {
          type: "text",
          body: "Barcode scanning is just one element of the technology safety toolkit. Caribbean pharmacies can also benefit from automated dispensing cabinets (which restrict access to specific drugs based on the entered prescription), clinical decision support systems (which alert to drug interactions, allergies, and dose limits), electronic prescribing (which eliminates handwriting legibility issues), and inventory management software (which tracks expiry dates and lot numbers).",
        },
        {
          type: "table",
          caption: "Technology-Based Error Prevention: Feasibility for Caribbean Pharmacies",
          headers: ["Technology", "Error Prevention Capability", "Cost", "Caribbean Feasibility"],
          rows: [
            ["Barcode scanning at dispensing", "Verifies correct drug, strength, and form", "Low–moderate (USB scanners from US$50)", "High — most practical first step for community pharmacies"],
            ["Automated dispensing cabinets", "Restricts drug access; tracks quantities", "High (US$50,000+)", "Low — only viable for large hospital pharmacies"],
            ["Electronic prescribing (e-prescribing)", "Eliminates handwriting errors; enables interaction checking", "Moderate", "Growing — several Caribbean health systems piloting"],
            ["Clinical decision support (CDS)", "Alerts for interactions, allergies, dose limits", "Moderate (software-dependent)", "Moderate — requires integration with dispensing software"],
            ["Inventory management software", "Tracks expiry dates, reorder points, lot numbers", "Low–moderate", "High — many affordable cloud-based options available"],
          ],
        },
        {
          type: "text",
          body: "It is critical to understand that technology is a safety barrier, not a replacement for professional vigilance. Every technology system has limitations: scanners may misread damaged barcodes, clinical decision support systems may generate excessive alerts that are ignored ('alert fatigue'), and electronic systems can go offline. Technology supplements, but never replaces, the trained human judgment of the pharmacy professional.",
        },
        {
          type: "knowledge-check",
          question: "What is the primary barrier to widespread barcode verification adoption in Caribbean community pharmacies?",
          options: [
            "Pharmacy professionals refuse to learn new technology",
            "Barcodes are not available on any generic medications",
            "Upfront cost, connectivity requirements, and non-standardised barcoding from some manufacturers",
            "Caribbean regulatory bodies have banned barcode scanning in pharmacies",
          ],
          correctIndex: 2,
          explanation:
            "The primary barriers include upfront cost of equipment, the need for reliable internet or network connectivity (which can be inconsistent in some Caribbean locations), and the lack of standardised barcoding on products from all generic manufacturers — particularly those imported from developing countries. These are practical, not attitudinal, barriers.",
        },
      ],
    },
    // ── Lesson 2.4 ──────────────────────────────────────────────────────────
    {
      id: "m2-l4",
      title: "Building a LASA-Safe Pharmacy: Shelving, Labelling & Workflow Design",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "System-Level Prevention Strategies",
        },
        {
          type: "text",
          body: "Preventing LASA errors requires more than individual vigilance — it requires deliberate system design. The physical layout of the pharmacy, the shelving strategy, the labelling conventions, and the dispensing workflow must all be engineered to minimise the opportunity for confusion. This lesson provides a practical blueprint for creating a LASA-safe pharmacy environment, tailored to Caribbean community pharmacy settings.",
        },
        {
          type: "heading",
          level: 3,
          text: "Shelving Strategies",
        },
        {
          type: "text",
          body: "The most fundamental LASA prevention strategy is physical separation. Drugs with similar names should never be stored adjacent to one another on the shelf. While alphabetical shelving seems logical, it places LASA pairs directly next to each other — hydrALAZINE beside hydrOXYzine, gliMEPIRide beside glyBURIDE. Alternative strategies include therapeutic-class shelving (which groups drugs by their use rather than name) and colour-coded bin systems.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Physical separation — never store LASA pairs on adjacent shelves or in adjacent bins",
            "Tall Man Lettering on shelf labels — apply TML to all shelf labels for ISMP-listed LASA pairs",
            "Colour-coded alerts — use brightly coloured warning stickers or labels on bins containing LASA drugs",
            "Auxiliary labels — affix 'WARNING: LASA' labels to bins and bottles of frequently confused drugs",
            "Dedicated LASA list — post the pharmacy's customised LASA list at the dispensing bench for quick reference",
            "Separate storage for different strengths — store different strengths of the same drug in clearly differentiated locations, not grouped by name",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Caribbean Shelf Audit",
          body: "Walk your pharmacy shelves every quarter and identify any LASA pairs that are stored too close together. Check that TML labels are intact, that colour-coded alerts are visible, and that new products added to inventory have been assessed for LASA risk. This 30-minute audit can prevent serious errors.",
        },
        {
          type: "heading",
          level: 3,
          text: "Workflow Design for Safety",
        },
        {
          type: "text",
          body: "The dispensing workflow itself should be designed to build in verification checkpoints. A well-designed Caribbean dispensing workflow includes: prescription receipt and initial assessment, data entry and label generation, product selection (with LASA awareness), counting or measuring, label application, pharmacist final verification, and patient counselling. Each step is an opportunity to catch errors introduced in a previous step.",
        },
        {
          type: "scenario-simulation",
          title: "Scenario: LASA Shelf Rearrangement",
          description: "You are a pharmacy technician at a community pharmacy in Kingston, Jamaica. The pharmacist asks you to redesign the shelving layout to reduce LASA risk. A recent near-miss involved dispensing hydrALAZINE instead of hydrOXYzine. Walk through the decisions you would make.",
          nodes: [
            {
              id: "start",
              text: "You examine the current shelving arrangement. Both hydrALAZINE and hydrOXYzine are stored alphabetically on the 'H' shelf, right next to each other in identical-looking bins. What is your first step?",
              choices: [
                {
                  label: "Move one of the drugs to a different shelf area entirely, separating them by therapeutic class",
                  nextNodeId: "separate",
                  feedback: "Excellent. Physical separation is the most effective first-line strategy for LASA prevention. Therapeutic class shelving groups drugs by their function, naturally separating LASA pairs.",
                  isOptimal: true,
                },
                {
                  label: "Add a warning sticker to both bins but keep them in the same location",
                  nextNodeId: "sticker-only",
                  feedback: "Warning stickers are helpful but insufficient on their own. If the drugs remain side by side, the risk of grab-error persists, especially during peak hours.",
                },
                {
                  label: "Ask the pharmacist to handle all dispensing of these two drugs personally",
                  nextNodeId: "pharmacist-only",
                  feedback: "This is not sustainable — it creates a bottleneck and does not address the underlying system issue. The pharmacist is equally susceptible to selection error if the drugs are adjacent.",
                },
              ],
            },
            {
              id: "separate",
              text: "You move hydrALAZINE to the cardiovascular section and keep hydrOXYzine with the antihistamines. Now you need to update the labels. What labelling strategy do you apply?",
              choices: [
                {
                  label: "Apply Tall Man Lettering (hydrOXYzine / hydrALAZINE) on both shelf labels AND bin labels, with a bright colour-coded 'LASA' warning sticker",
                  nextNodeId: "success",
                  feedback: "Perfect. Combining physical separation with TML labelling and colour-coded warnings creates multiple layers of defence — exactly the Swiss Cheese approach to safety.",
                  isOptimal: true,
                },
                {
                  label: "Write the drug names in regular lowercase on new shelf labels",
                  nextNodeId: "weak-labels",
                  feedback: "Standard lowercase labelling misses the opportunity to use Tall Man Lettering, which is a proven safety intervention for LASA pairs. You should apply TML.",
                },
              ],
            },
            {
              id: "sticker-only",
              text: "You add bright orange 'LASA WARNING' stickers. A week later, a new locum technician almost makes the same error because the drugs are still side by side. What do you do now?",
              choices: [
                {
                  label: "Physically separate the drugs onto different shelves AND add Tall Man Lettering labels",
                  nextNodeId: "success",
                  feedback: "Correct. The near-miss proved that stickers alone were insufficient. Physical separation combined with TML creates the layered defence needed.",
                  isOptimal: true,
                },
                {
                  label: "Add more stickers and a verbal reminder to staff",
                  nextNodeId: "failure",
                  feedback: "More stickers and verbal reminders are weak interventions. Evidence shows that physical separation and systematic labelling changes are far more effective than relying on human memory.",
                },
              ],
            },
            {
              id: "pharmacist-only",
              text: "The pharmacist agrees initially, but within two days, the workload makes it impractical. On a busy afternoon, a technician dispenses hydrALAZINE for a hydrOXYzine prescription. What went wrong?",
              choices: [
                {
                  label: "The underlying system issue — adjacent storage — was never addressed. I need to separate the drugs physically and add TML labels.",
                  nextNodeId: "success",
                  feedback: "Exactly. Workarounds that depend on individual behaviour always fail under pressure. System-level changes (physical separation, TML labelling, colour coding) are the reliable solution.",
                  isOptimal: true,
                },
                {
                  label: "The technician should have checked more carefully",
                  nextNodeId: "failure",
                  feedback: "Blaming the individual misses the systemic cause. The drugs were stored side by side with similar packaging — the system was designed for error.",
                },
              ],
            },
            {
              id: "weak-labels",
              text: "A month later, a float technician who is unfamiliar with your shelf layout picks hydrALAZINE from the cardiovascular section for a hydrOXYzine prescription because the lowercase labels did not catch her attention. How could this have been prevented?",
              choices: [
                {
                  label: "Tall Man Lettering on all labels would have highlighted the name differences and prevented the confusion",
                  nextNodeId: "success",
                  feedback: "Correct. TML is specifically designed to make the distinguishing characters stand out, even for unfamiliar staff. Combined with physical separation, it provides robust protection.",
                  isOptimal: true,
                },
              ],
            },
            {
              id: "success",
              text: "Your pharmacy now has hydrALAZINE and hydrOXYzine on separate shelves, with TML labelling and LASA warning stickers. No further near-misses have occurred. You document the change in your pharmacy's LASA prevention log and share the approach with other staff.",
              isEnd: true,
              outcome: "success",
              summary: "You successfully implemented a multi-layered LASA prevention strategy: physical separation, Tall Man Lettering, and colour-coded warnings. This is the gold standard approach recommended by ISMP.",
            },
            {
              id: "failure",
              text: "Despite additional stickers and reminders, another near-miss occurs within a month. The pharmacist instructs you to implement physical separation and TML — the system changes that should have been made from the start.",
              isEnd: true,
              outcome: "failure",
              summary: "Relying on weak interventions (stickers, verbal reminders, individual vigilance) without addressing the root system issue led to continued risk. Physical separation and TML labelling are the evidence-based solutions.",
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "Why is alphabetical shelving problematic for LASA drug safety?",
          options: [
            "It makes inventory counting slower",
            "It places drugs with similar names adjacent to each other, increasing grab-error risk",
            "It requires too many shelf labels",
            "It does not comply with Caribbean pharmacy regulations",
          ],
          correctIndex: 1,
          explanation:
            "Alphabetical shelving inherently places drugs with similar-sounding names next to each other on the shelf (hydrALAZINE beside hydrOXYzine, gliMEPIRide beside glyBURIDE), maximising the risk of 'grab errors' where the wrong bottle is selected. Therapeutic-class shelving or deliberate physical separation of LASA pairs is safer.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m2-q1",
      question: "What does LASA stand for in medication safety?",
      options: [
        "Legal And Safety Assessment",
        "Look-Alike Sound-Alike",
        "Label And Shelf Arrangement",
        "Low-Acuity Safety Alert",
      ],
      correctIndex: 1,
      explanation:
        "LASA stands for Look-Alike Sound-Alike — referring to drug names that look similar when written or sound similar when spoken, creating a significant risk of confusion during prescribing, dispensing, and administration.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q2",
      question: "In Tall Man Lettering, which portion of the drug name is capitalised?",
      options: [
        "The first three letters of every drug name",
        "The portion of the name that is identical between the confused pair",
        "The portion of the name that differs between the confused pair",
        "The entire drug name",
      ],
      correctIndex: 2,
      explanation:
        "Tall Man Lettering capitalises the portion of the drug name that DIFFERS between the two confused names. For example, in hydrOXYzine vs. hydrALAZINE, the capitalised portions (OXY and ALAZINE) highlight the distinguishing characters. This forces the reader to slow down and recognise the difference.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q3",
      question: "Which of the following LASA pairs involves confusion between an antihistamine and an antihypertensive?",
      options: [
        "predniSONE / prednisoLONE",
        "hydrOXYzine / hydrALAZINE",
        "gliMEPIRide / glyBURIDE",
        "buPROPion / busPIRone",
      ],
      correctIndex: 1,
      explanation:
        "HydrOXYzine is an antihistamine used for anxiety and allergic conditions, while hydrALAZINE is an antihypertensive. Confusion between them can lead to dangerous hypotension in a patient who should have received an antihistamine, or untreated hypertension in a patient who needed blood pressure control.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q4",
      question: "Barcode verification at the point of dispensing can reduce dispensing errors by up to approximately:",
      options: [
        "25%",
        "50%",
        "65%",
        "85%",
      ],
      correctIndex: 3,
      explanation:
        "In well-resourced settings with fully implemented barcode verification systems, dispensing errors can be reduced by up to 85%. The technology confirms drug identity, strength, and dosage form against the prescription record, catching selection errors that human visual checks may miss.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q5",
      question: "A pharmacy stores enalapril 5 mg and enalapril 20 mg in adjacent bins with identical white labels. A technician accidentally dispenses 20 mg instead of 5 mg. What is the most effective system-level intervention to prevent this error?",
      options: [
        "Remind the technician to be more careful",
        "Require the pharmacist to select all enalapril prescriptions personally",
        "Separate the two strengths physically and use colour-coded labels with clear strength differentiation",
        "Remove enalapril from the pharmacy formulary",
      ],
      correctIndex: 2,
      explanation:
        "Physical separation of different strengths and colour-coded, clearly differentiated labels are system-level interventions that do not depend on individual vigilance. Reminding staff to be careful is a weak intervention; relying on the pharmacist is unsustainable; removing the drug is impractical. System design trumps individual behaviour.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m2-q6",
      questionType: "ordering",
      question: "Place the Five Rights of medication safety in the correct verification order during the dispensing process:",
      options: [
        "Right Patient",
        "Right Drug",
        "Right Dose",
        "Right Route",
        "Right Time",
      ],
      correctIndex: 0,
      questionData: {
        correct_order: [0, 1, 2, 3, 4],
      },
      explanation:
        "The Five Rights are verified in this logical sequence: first confirm the Right Patient (who), then the Right Drug (what), then the Right Dose (how much), then the Right Route (how), and finally the Right Time (when). While all rights must be checked before dispensing, this order follows the natural flow of the dispensing workflow.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q7",
      question: "Why is Tall Man Lettering NOT sufficient as a standalone LASA prevention strategy?",
      options: [
        "It is not recognised by any international safety organisation",
        "It only reduces name confusion by 35-50%, so it must be combined with physical separation, barcode scanning, and other measures",
        "It only applies to brand-name drugs, not generics",
        "It is too expensive to implement in Caribbean pharmacies",
      ],
      correctIndex: 1,
      explanation:
        "Research shows TML reduces name confusion by 35-50% — significant, but far from complete protection. ISMP recommends TML as one element of a comprehensive approach that also includes physical separation of LASA pairs on shelves, colour-coded labels, barcode verification, independent double-checks, and staff education.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m2-q8",
      question: "What is 'alert fatigue' in the context of clinical decision support systems?",
      options: [
        "Physical tiredness from working long shifts at the pharmacy",
        "A condition where excessive electronic alerts lead staff to ignore or override warnings, including valid ones",
        "The time lag between a prescription being entered and the alert appearing",
        "An allergic reaction caused by alert medications",
      ],
      correctIndex: 1,
      explanation:
        "Alert fatigue occurs when clinical decision support systems generate so many warnings — many of them clinically insignificant — that staff begin to routinely ignore or override all alerts, including the rare but critical ones. This is a well-documented limitation of technology-based safety systems and highlights why technology must be carefully calibrated to minimise false positives.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q9",
      questionType: "true_false",
      question: "In the Caribbean, electronic prescribing (e-prescribing) has fully replaced handwritten prescriptions in all jurisdictions.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "False. Handwritten prescriptions remain the norm in most Caribbean jurisdictions. While some health systems are piloting electronic prescribing, the majority of prescriptions — particularly in community pharmacy settings — are still handwritten, with all the associated legibility and transcription risks.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q10",
      question: "Which shelving strategy BEST reduces LASA error risk in a community pharmacy?",
      options: [
        "Strict alphabetical order for all medications",
        "Random placement based on available shelf space",
        "Therapeutic class grouping with physical separation of known LASA pairs",
        "Storing all medications in locked cabinets accessible only to the pharmacist",
      ],
      correctIndex: 2,
      explanation:
        "Therapeutic class shelving groups drugs by their function (antihypertensives together, antihistamines together, etc.), naturally separating LASA pairs that would be adjacent under alphabetical shelving. Known LASA pairs within the same therapeutic class should be further physically separated within that section. This approach balances safety with practical workflow efficiency.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
  ],
};

// ============================================================================
// MODULE 3 — Root Cause Analysis & Incident Reporting
// ============================================================================

const module3: Module = {
  id: "m3-rca-incident-reporting",
  number: 3,
  title: "Root Cause Analysis & Incident Reporting",
  description:
    "When errors occur, the response matters as much as the prevention. This module teaches systematic approaches to investigating medication errors through root cause analysis (RCA), introduces the fishbone diagram as an analytical tool, and builds the case for a robust incident reporting culture — shifting from blame to learning in Caribbean pharmacy practice.",
  learningObjectives: [
    "Conduct a basic root cause analysis (RCA) using the 5 Whys and fishbone diagram methods",
    "Differentiate between blame culture and just culture in the context of error reporting",
    "Complete a standard medication incident report with all required elements",
    "Analyse contributing factors across multiple domains (human, system, environment, equipment)",
    "Advocate for a non-punitive reporting culture as essential to patient safety improvement",
  ],
  lessons: [
    // ── Lesson 3.1 ──────────────────────────────────────────────────────────
    {
      id: "m3-l1",
      title: "Root Cause Analysis: The 5 Whys & the Fishbone Diagram",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Digging Beneath the Surface",
        },
        {
          type: "text",
          body: "When a medication error occurs, the instinctive response is to ask 'who' — who made the mistake? But this question leads to blame, not solutions. Root cause analysis (RCA) asks 'why' instead: why did the error occur, why were the safeguards insufficient, and why did the system allow the error to reach the patient? RCA is a systematic process for identifying the underlying causes of adverse events or near-misses, with the goal of implementing changes that prevent recurrence.",
        },
        {
          type: "key-term",
          term: "Root Cause Analysis (RCA)",
          definition:
            "A systematic investigation method that looks beyond the immediate cause of an incident to identify the underlying system failures, process gaps, and contributing factors that made the error possible. RCA focuses on 'why' rather than 'who,' seeking systemic solutions rather than individual punishment.",
        },
        {
          type: "heading",
          level: 3,
          text: "The 5 Whys Method",
        },
        {
          type: "text",
          body: "The 5 Whys is the simplest RCA technique — you repeatedly ask 'why?' until you reach a root cause that can be addressed with a system change. The number five is a guideline, not a rigid rule; you continue asking until you reach an actionable root cause. The key discipline is resisting the temptation to stop at the first 'why' (which typically identifies the individual) and pushing deeper to the system level.",
        },
        {
          type: "table",
          caption: "The 5 Whys Applied to a Dispensing Error",
          headers: ["Level", "Question", "Answer"],
          rows: [
            ["Why 1", "Why did the patient receive the wrong drug?", "The technician selected hydrALAZINE instead of hydrOXYzine"],
            ["Why 2", "Why did the technician select the wrong drug?", "The two drugs were stored next to each other on the 'H' shelf"],
            ["Why 3", "Why were they stored next to each other?", "The pharmacy uses strict alphabetical shelving with no LASA separation policy"],
            ["Why 4", "Why is there no LASA separation policy?", "The pharmacy has never conducted a LASA risk assessment of its shelving layout"],
            ["Why 5", "Why has no LASA risk assessment been done?", "There is no SOP requiring regular safety audits of drug storage arrangements"],
          ],
        },
        {
          type: "text",
          body: "Notice how the 5 Whys progresses from the individual act (technician picked the wrong drug) to the root cause (no SOP for safety audits). The solution is not to punish the technician — it is to implement a LASA separation policy and regular safety audits. This is the fundamental shift from blame culture to learning culture.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Fishbone (Ishikawa) Diagram",
        },
        {
          type: "text",
          body: "The fishbone diagram, also called the Ishikawa diagram or cause-and-effect diagram, is a visual tool for organising the multiple contributing factors that led to an error. The 'head' of the fish is the error or adverse event. The 'bones' represent categories of contributing factors. For pharmacy errors, the standard categories are: People, Procedures, Equipment, Environment, Materials, and Management.",
        },
        {
          type: "key-term",
          term: "Fishbone (Ishikawa) Diagram",
          definition:
            "A visual root cause analysis tool shaped like a fish skeleton, where the 'head' represents the problem or error and the 'bones' represent categories of contributing causes. Named after Kaoru Ishikawa, who popularised its use in quality improvement in Japan in the 1960s.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Building a Fishbone Diagram",
          body: "To construct a fishbone diagram: (1) Write the error or event at the head. (2) Draw the main spine. (3) Add branches for each category: People, Procedures, Equipment, Environment, Materials, Management. (4) Under each category, brainstorm all contributing factors. (5) Identify which factors are root causes versus symptoms. A fishbone diagram for a single error typically reveals 10-20 contributing factors across multiple categories.",
        },
        {
          type: "image-placeholder",
          alt: "Fishbone diagram showing six cause categories (People, Procedures, Equipment, Environment, Materials, Management) leading to a dispensing error at the head",
          caption: "Example fishbone diagram for a wrong-drug dispensing error in a Caribbean community pharmacy",
        },
        {
          type: "knowledge-check",
          question: "In the 5 Whys example above, what is the root cause of the dispensing error?",
          options: [
            "The technician selected the wrong drug",
            "The two drugs were stored next to each other",
            "The pharmacy uses alphabetical shelving",
            "There is no SOP requiring regular safety audits of drug storage",
          ],
          correctIndex: 3,
          explanation:
            "The root cause is the absence of a standard operating procedure (SOP) for regular safety audits of drug storage. This is the deepest systemic gap identified by the 5 Whys. Each earlier 'why' answer is a contributing factor, but the root cause is the one that, if addressed, would prevent the entire chain from occurring.",
        },
      ],
    },
    // ── Lesson 3.2 ──────────────────────────────────────────────────────────
    {
      id: "m3-l2",
      title: "Blame Culture vs. Just Culture: Transforming How We Respond to Errors",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "From Blame to Learning",
        },
        {
          type: "text",
          body: "How an organisation responds to errors determines whether those errors are repeated. In a blame culture, errors are treated as individual failings — the person who made the mistake is reprimanded, shamed, or dismissed. This approach feels satisfying in the moment but is catastrophic for safety: it drives reporting underground, prevents systemic learning, and ensures that the same latent failures will produce the same errors with a different individual. A just culture, by contrast, recognises that most errors result from system failures and treats them as learning opportunities — while maintaining accountability for genuinely reckless behaviour.",
        },
        {
          type: "key-term",
          term: "Just Culture",
          definition:
            "An organisational culture that distinguishes between honest human errors (consoled and supported), at-risk behaviour (coached and corrected), and reckless conduct (disciplined). In a just culture, staff are not punished for making honest mistakes within a flawed system, but are held accountable for wilful violations and reckless disregard for safety.",
        },
        {
          type: "table",
          caption: "Blame Culture vs. Just Culture Compared",
          headers: ["Dimension", "Blame Culture", "Just Culture"],
          rows: [
            ["Response to honest error", "Punishment, reprimand, shaming", "Support, system investigation, process improvement"],
            ["Reporting behaviour", "Errors hidden, underreported", "Errors reported openly, near-misses shared"],
            ["Learning outcome", "Same errors recur with different individuals", "System improvements prevent recurrence"],
            ["Staff morale", "Fear, anxiety, defensive practice", "Trust, psychological safety, proactive engagement"],
            ["Accountability", "Individual blamed regardless of system factors", "Individual accountability proportionate to intent: honest mistakes consoled, at-risk behaviour coached, reckless acts disciplined"],
            ["Patient safety", "Declines over time (hidden errors, missed learning)", "Improves continuously (transparent reporting, systemic fixes)"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Caribbean Challenge",
          body: "Many Caribbean pharmacies, particularly small owner-operated businesses, default to blame culture because it feels natural and requires no formal systems. When the team is small — one pharmacist, one or two technicians — the person who made the error is obvious, and the temptation to blame is strong. Building a just culture in this environment requires deliberate effort, formal reporting procedures, and leadership commitment from the pharmacist-owner.",
        },
        {
          type: "text",
          body: "The just culture framework uses three categories to determine the appropriate response to an error. First, human error — an inadvertent action; the individual intended to do the right thing. The appropriate response is consolation, support, and system investigation. Second, at-risk behaviour — a conscious choice to take a shortcut or deviate from procedure, often because the individual believed the risk was insignificant or justified. The appropriate response is coaching, re-education, and removing the incentive for the shortcut. Third, reckless behaviour — a conscious disregard of substantial and unjustifiable risk. The appropriate response is disciplinary action.",
        },
        {
          type: "text",
          body: "The vast majority of medication errors — research suggests over 90% — fall into the human error category. The pharmacy team member intended to do the right thing but was failed by the system. Punishing these individuals does not prevent future errors; it only prevents future reporting.",
        },
        {
          type: "knowledge-check",
          question: "A pharmacy technician follows the standard dispensing procedure but makes a counting error because a walk-in patient interrupted her mid-count. Under a just culture framework, this is classified as:",
          options: [
            "Reckless behaviour — she should have refused to answer the walk-in patient",
            "At-risk behaviour — she chose to answer the patient instead of finishing counting",
            "Human error — she intended to do the right thing but was failed by a system that allows interruptions during dispensing",
            "Not an error — interruptions are a normal part of pharmacy work",
          ],
          correctIndex: 2,
          explanation:
            "This is a human error within a flawed system. The technician did not choose to be interrupted — the system (lack of an 'interruption-free zone' policy) allowed the interruption to occur during a safety-critical task. The appropriate response is consolation and support for the technician, combined with a system change to prevent interruptions during dispensing.",
        },
      ],
    },
    // ── Lesson 3.3 ──────────────────────────────────────────────────────────
    {
      id: "m3-l3",
      title: "Incident Reporting: Systems, Forms & Building a Reporting Culture",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Capturing Incidents to Drive Improvement",
        },
        {
          type: "text",
          body: "An incident reporting system is the foundation of organisational learning from errors. Without systematic reporting, errors remain isolated events — known only to those directly involved and lost as soon as memories fade. With reporting, errors become data: data that can be analysed, trended, and used to identify systemic weaknesses and drive targeted improvements. The goal is not to compile a record of failures but to build a living knowledge base that makes the pharmacy safer over time.",
        },
        {
          type: "text",
          body: "An effective medication incident report captures several essential elements: what happened (factual description of the error), when it happened (date, time, shift conditions), who was involved (without assigning blame), what medications were involved (drug name, strength, dosage form), the outcome (patient harm category using NCC MERP), contributing factors (system, environment, human), actions taken (immediate corrections), and recommended system changes (prevention strategies).",
        },
        {
          type: "table",
          caption: "Essential Elements of a Medication Incident Report",
          headers: ["Element", "Description", "Example"],
          rows: [
            ["Date/Time", "When the error occurred or was discovered", "15 March 2026, 14:30 hrs"],
            ["Reporter", "Person reporting (may differ from person involved)", "Pharmacy Technician, initials JM"],
            ["Event Description", "Factual, non-judgmental narrative of what happened", "Patient received enalapril 20 mg instead of prescribed enalapril 5 mg"],
            ["Medications Involved", "Drug name, strength, dosage form, manufacturer", "Enalapril 20 mg tablets, manufactured by Generic Pharma Ltd, Lot #GP2025-1102"],
            ["Patient Outcome", "NCC MERP category and description", "Category E — patient experienced hypotension requiring GP visit"],
            ["Contributing Factors", "System, environment, and human factors identified", "Similar packaging for different strengths; interruption during dispensing; no barcode verification"],
            ["Immediate Action", "What was done to address the immediate situation", "Patient contacted, correct medication dispensed, GP notified"],
            ["Recommended Changes", "System improvements to prevent recurrence", "Separate storage of different strengths; colour-coded labels; interruption-free zone during dispensing"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Caribbean Reporting Infrastructure",
          body: "Most Caribbean pharmacies do not yet have formal electronic incident reporting systems. Paper-based reporting using standardised forms is a practical starting point. The form should be kept at the dispensing bench, completed immediately after the event, and reviewed by the pharmacist-in-charge within 24 hours. Even a simple logbook — if consistently used and regularly reviewed — provides valuable safety data.",
        },
        {
          type: "heading",
          level: 3,
          text: "Building a Reporting Culture",
        },
        {
          type: "text",
          body: "A reporting system is only as good as the willingness of staff to use it. Research consistently shows that fear of punishment is the single greatest barrier to incident reporting. Building a reporting culture requires: leadership commitment to just culture principles, visible evidence that reports lead to system changes (not individual punishment), feedback loops that show reporters how their reports were used, celebration of near-miss reporting as a proactive safety behaviour, and regular team meetings to review trends and implement improvements.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Make reporting easy — a simple, one-page form available at the dispensing bench",
            "Make reporting safe — guarantee no punishment for honest error reports",
            "Make reporting worthwhile — share aggregated data and resulting improvements with the team monthly",
            "Report near-misses, not just actual errors — near-misses are free lessons without patient harm",
            "Set a team target — aim for increasing reports (more reports = better safety culture, not worse safety)",
            "Review reports as a team — monthly safety meetings build collective learning and accountability",
          ],
        },
        {
          type: "case-study",
          title: "Case Study: Building a Reporting Culture in a Bridgetown Pharmacy",
          scenario:
            "A community pharmacy in Bridgetown, Barbados, has operated for 15 years with no formal incident reporting system. The pharmacist-owner recognises that errors occur but are never documented or discussed. After attending a Caribbean Association of Pharmacists workshop on patient safety, she decides to implement an incident reporting system. In the first month, zero reports are filed — the two technicians are afraid that reporting errors will lead to termination. The pharmacist realises she must address the cultural barrier before the system can function.",
          questions: [
            "What specific steps should the pharmacist take to overcome the fear barrier?",
            "How can she demonstrate that reports will lead to system improvements, not punishment?",
            "What would a realistic incident reporting target look like for the first year?",
            "How should she handle a situation where a reported error reveals at-risk behaviour by a technician?",
          ],
          discussion:
            "The pharmacist should begin by openly acknowledging her own errors (normalising mistake acknowledgment), committing in writing to a just culture policy, and sharing the first report herself. She might implement anonymous reporting initially and transition to named reports as trust builds. When the first report leads to a visible system change (e.g., rearranging a shelf, adding a label), she should publicise this as evidence that reporting works. A realistic first-year target might be 1-2 reports per month, with near-misses actively encouraged. If at-risk behaviour is revealed, she should coach privately, not punish — following the just culture framework.",
        },
        {
          type: "knowledge-check",
          question: "What is the single greatest barrier to incident reporting in pharmacy settings?",
          options: [
            "Lack of standardised reporting forms",
            "Insufficient time during busy shifts",
            "Fear of punishment for reporting errors",
            "Belief that errors are too rare to warrant reporting",
          ],
          correctIndex: 2,
          explanation:
            "Research consistently identifies fear of punishment as the single greatest barrier to medication incident reporting. When staff believe that reporting an error will lead to blame, reprimand, or job loss, they will hide errors rather than report them — eliminating the opportunity for organisational learning and systemic improvement.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m3-q1",
      question: "What is the primary purpose of root cause analysis (RCA)?",
      options: [
        "To determine which individual to discipline",
        "To identify the underlying system failures that made the error possible",
        "To calculate the financial cost of the error",
        "To satisfy regulatory reporting requirements",
      ],
      correctIndex: 1,
      explanation:
        "The primary purpose of RCA is to identify underlying system failures and contributing factors that created the conditions for error — not to assign blame to individuals. RCA seeks systemic solutions that prevent recurrence, which is far more effective than punishing individuals.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q2",
      question: "In the 5 Whys technique, how do you know when you have reached the root cause?",
      options: [
        "After exactly five questions have been asked",
        "When the answer identifies a specific individual",
        "When the answer identifies an actionable systemic change that would prevent recurrence",
        "When the pharmacy manager is satisfied with the explanation",
      ],
      correctIndex: 2,
      explanation:
        "You have reached the root cause when further 'why' questions lead to an actionable system-level change that, if implemented, would prevent the error from recurring. The number five is a guideline, not a rigid rule — some investigations require three questions, others may require seven or more.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q3",
      question: "In a fishbone (Ishikawa) diagram for a pharmacy error, which of the following is NOT a standard cause category?",
      options: [
        "People",
        "Procedures",
        "Profit margin",
        "Environment",
      ],
      correctIndex: 2,
      explanation:
        "The standard fishbone categories for healthcare error analysis are People, Procedures, Equipment, Environment, Materials, and Management. 'Profit margin' is not a standard category, though financial pressures may appear as a contributing factor under the Management category.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q4",
      question: "Under a just culture framework, a pharmacy technician who knowingly skips the barcode scanning step because she considers it 'too slow' would be classified as demonstrating:",
      options: [
        "Human error — an inadvertent mistake",
        "At-risk behaviour — a conscious shortcut with perceived justification",
        "Reckless behaviour — a wilful disregard for safety",
        "Standard practice — barcode scanning is optional",
      ],
      correctIndex: 1,
      explanation:
        "Knowingly skipping a required safety step because of a perceived justification ('too slow') is at-risk behaviour — a conscious choice to deviate from procedure. The appropriate response is coaching: helping the technician understand the risk, removing the incentive for the shortcut (e.g., addressing time pressure), and monitoring for compliance. This differs from reckless behaviour, which involves conscious disregard of substantial and unjustifiable risk.",
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
    {
      id: "m3-q5",
      question: "What percentage of medication errors are estimated to fall into the 'human error' category (honest mistakes within flawed systems)?",
      options: [
        "About 25%",
        "About 50%",
        "About 75%",
        "Over 90%",
      ],
      correctIndex: 3,
      explanation:
        "Research suggests that over 90% of medication errors are honest human errors — the individual intended to do the right thing but was failed by system weaknesses. This statistic underscores why punitive responses are both unfair and ineffective: the system, not the individual, is the primary driver of error in the vast majority of cases.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q6",
      question: "Which of the following is the MOST effective way to build an incident reporting culture in a small Caribbean community pharmacy?",
      options: [
        "Mandate anonymous written reports and file them without discussion",
        "Threaten disciplinary action for failing to report errors",
        "Have leadership commit to just culture, demonstrate that reports lead to system changes, and celebrate near-miss reporting",
        "Wait until a serious error occurs and then implement a reporting system in response",
      ],
      correctIndex: 2,
      explanation:
        "Building a reporting culture requires leadership commitment to just culture (ensuring reporters are safe from punishment), visible evidence that reports drive system improvements, and positive reinforcement of near-miss reporting. Fear-based mandates and reactive approaches undermine the trust essential for voluntary, comprehensive reporting.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m3-q7",
      questionType: "true_false",
      question: "A medication incident report should include the name of the staff member responsible for the error so they can be disciplined appropriately.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "False. While incident reports may record which staff members were involved for the purpose of investigation and support, the primary purpose is NOT to enable discipline. The report should focus on system factors, contributing causes, and recommended changes. Under a just culture, honest errors are not punished — the report is a learning tool, not a disciplinary instrument.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q8",
      question: "A pharmacy has implemented a new incident reporting system. In the first quarter, reports increase from 0 to 12 per month. This increase most likely indicates:",
      options: [
        "Patient safety is deteriorating rapidly",
        "Staff are becoming more careless",
        "The reporting culture is improving — staff feel safe enough to report",
        "The incident reporting system is malfunctioning and generating false reports",
      ],
      correctIndex: 2,
      explanation:
        "An increase in incident reports after implementing a new reporting system is a POSITIVE sign — it indicates that staff feel safe enough to report errors and near-misses that were previously hidden. Error rates do not change overnight; what changes is the willingness to report. More reports mean more learning opportunities and better safety data.",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
  ],
};

// ============================================================================
// MODULE 4 — SOPs: Writing, Implementing & Auditing
// ============================================================================

const module4: Module = {
  id: "m4-sops",
  number: 4,
  title: "SOPs: Writing, Implementing & Auditing",
  description:
    "Standard Operating Procedures (SOPs) are the backbone of consistent, safe pharmacy practice. This module teaches you how to write clear, actionable SOPs tailored to Caribbean pharmacy settings, implement them effectively through staff training and change management, and audit their compliance to ensure they are followed and remain current.",
  learningObjectives: [
    "Write a clear, actionable SOP for a common Caribbean pharmacy process using a standardised template",
    "Identify the essential components of an effective pharmacy SOP",
    "Develop an implementation plan for introducing a new SOP to a pharmacy team",
    "Design a simple compliance audit tool for monitoring SOP adherence",
    "Evaluate when an existing SOP needs revision based on incident data, regulatory changes, or workflow updates",
  ],
  lessons: [
    // ── Lesson 4.1 ──────────────────────────────────────────────────────────
    {
      id: "m4-l1",
      title: "Why SOPs Matter: Standardisation as a Safety Strategy",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Case for Standard Operating Procedures",
        },
        {
          type: "text",
          body: "A Standard Operating Procedure (SOP) is a written, step-by-step instruction for performing a routine task in a consistent, safe, and efficient manner. In pharmacy, SOPs ensure that every team member — regardless of experience, training background, or the time pressures they face — follows the same process for safety-critical tasks. Without SOPs, practice varies from person to person, shift to shift, and day to day. This variability is the enemy of safety.",
        },
        {
          type: "key-term",
          term: "Standard Operating Procedure (SOP)",
          definition:
            "A detailed, written instruction describing how to perform a specific task or process consistently and correctly. SOPs reduce variability, ensure compliance with regulations, serve as training tools, and provide a reference standard against which performance can be audited.",
        },
        {
          type: "text",
          body: "In Caribbean community pharmacies, SOPs are particularly important because of high staff turnover, the use of locum (temporary) pharmacists and technicians who may be unfamiliar with the specific pharmacy's systems, and the absence of automated systems that enforce standardised workflows. An SOP ensures that when a locum technician arrives at your pharmacy, she can follow the documented process rather than improvising.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Regulatory Requirement",
          body: "Pharmacy boards across the Caribbean increasingly expect pharmacies to maintain written SOPs for key processes. In Trinidad & Tobago, the Pharmacy Board may request to review SOPs during inspections. In Jamaica, the Pharmacy Council considers SOPs part of Good Pharmacy Practice standards. SOPs are not optional — they are a regulatory and professional obligation.",
        },
        {
          type: "heading",
          level: 3,
          text: "What Processes Need SOPs?",
        },
        {
          type: "text",
          body: "Not every task requires a written SOP, but any process that is safety-critical, regulatory-required, or complex enough that variation could lead to error should be documented. For Caribbean pharmacies, essential SOPs include: dispensing workflow (prescription receipt to patient counselling), controlled substance handling, medication storage and temperature monitoring, expiry date management, error and incident reporting, emergency procedures (hurricane preparedness, power outage), compounding (if applicable), and cleaning and infection control.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Dispensing workflow — from prescription receipt through to patient handoff",
            "Controlled substance handling — receipt, storage, dispensing, record-keeping, destruction",
            "Medication storage and temperature monitoring — including cold chain management",
            "Expiry date management — checking, rotating stock, removing expired products",
            "Error and incident reporting — what to report, how to report, follow-up actions",
            "Emergency procedures — hurricane preparedness, power outage, security threat",
            "Compounding procedures — if the pharmacy performs any compounding",
            "Cleaning and infection control — daily cleaning, equipment sanitisation, PPE use",
          ],
        },
        {
          type: "knowledge-check",
          question: "Why are SOPs particularly important in Caribbean community pharmacies?",
          options: [
            "Caribbean pharmacies have more staff than they need",
            "SOPs are only required in hospital pharmacies, not community settings",
            "High staff turnover and use of locum staff means consistent written procedures are essential",
            "Caribbean pharmacy regulations prohibit verbal instructions",
          ],
          correctIndex: 2,
          explanation:
            "Caribbean community pharmacies often rely on locum (temporary) staff who may be unfamiliar with the specific pharmacy's systems and workflows. Written SOPs ensure that every team member, whether permanent or temporary, follows the same standardised process — maintaining safety and consistency regardless of who is on shift.",
        },
      ],
    },
    // ── Lesson 4.2 ──────────────────────────────────────────────────────────
    {
      id: "m4-l2",
      title: "Writing Effective SOPs: Structure, Language & Templates",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Anatomy of an Effective SOP",
        },
        {
          type: "text",
          body: "An effective SOP is clear, concise, actionable, and complete. It tells the reader exactly what to do, how to do it, and what to do when things go wrong. The language must be plain, direct, and free of ambiguity. Steps must be numbered and sequential. Critical safety points must be highlighted. And the document must be formatted so that it can be quickly referenced during the task — not buried in paragraphs of text that no one reads.",
        },
        {
          type: "table",
          caption: "Essential Components of a Pharmacy SOP",
          headers: ["Component", "Description", "Purpose"],
          rows: [
            ["Title", "Clear, specific name of the procedure", "Quick identification — e.g., 'SOP: Dispensing Workflow for Prescription Medications'"],
            ["SOP Number & Version", "Unique identifier and version number", "Document control — ensures the most current version is in use"],
            ["Effective Date", "Date the SOP becomes active", "Ensures staff know when the procedure took effect"],
            ["Review Date", "Date by which the SOP must be reviewed (typically every 12-24 months)", "Prevents outdated procedures from remaining in use"],
            ["Purpose", "Brief statement of why this SOP exists", "Provides context and motivation for following the procedure"],
            ["Scope", "Who must follow this SOP and in what circumstances", "Clarifies applicability — e.g., 'All pharmacy technicians during dispensing shifts'"],
            ["Responsibilities", "Who is responsible for each element of the procedure", "Eliminates ambiguity about roles"],
            ["Procedure Steps", "Numbered, sequential, action-oriented steps", "The core of the SOP — tells staff exactly what to do"],
            ["Safety Alerts", "Warnings about critical steps where errors could cause harm", "Draws attention to high-risk moments in the workflow"],
            ["References", "Laws, guidelines, or other SOPs referenced", "Connects the SOP to regulatory requirements and best practices"],
            ["Approval Signatures", "Signatures of the author and approver (pharmacist-in-charge)", "Authorises the document for use"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "SOP Writing Best Practices",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Use active voice and imperative mood — 'Scan the barcode' not 'The barcode should be scanned'",
            "One action per step — do not combine multiple actions in a single numbered step",
            "Use plain language — write for the least experienced person who might need to follow the SOP",
            "Include 'what if' branches — if step 5 produces an unexpected result, what should the user do?",
            "Highlight critical safety steps with WARNING or CAUTION markers",
            "Keep the SOP to 1-2 pages for simple procedures — if longer, consider breaking into sub-procedures",
            "Use consistent formatting — headers, numbering, and layout should be the same across all SOPs",
            "Test the SOP by having someone unfamiliar with the process attempt to follow it",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Caribbean SOP Template",
          body: "A practical SOP template for Caribbean pharmacies should include a header block (pharmacy name, SOP number, title, effective date, review date), a purpose statement, scope and responsibilities, numbered procedure steps with safety alerts, a 'what if' section for common exceptions, and a signature block. Keep the template simple — an overly complex template discourages SOP creation.",
        },
        {
          type: "text",
          body: "The language of an SOP must be precise and unambiguous. Consider the difference: 'Store medication properly' versus 'Store medication at 15–25 °C in the designated cool-storage area, away from direct sunlight, with the temperature log updated twice daily.' The second version leaves no room for interpretation. In pharmacy, ambiguity can be dangerous.",
        },
        {
          type: "knowledge-check",
          question: "Which of the following is the BEST example of an SOP procedure step?",
          options: [
            "Medications should be stored at appropriate temperatures",
            "Check the prescription carefully for accuracy",
            "Scan the product barcode and verify that the drug name, strength, and dosage form displayed on screen match the prescription label exactly",
            "Ensure quality is maintained throughout the dispensing process",
          ],
          correctIndex: 2,
          explanation:
            "The third option is a well-written SOP step: it uses active voice, specifies the exact action (scan the barcode), and states the verification criteria (drug name, strength, dosage form must match the prescription label). The other options are vague — 'appropriate,' 'carefully,' and 'quality' are subjective terms that leave room for interpretation.",
        },
      ],
    },
    // ── Lesson 4.3 ──────────────────────────────────────────────────────────
    {
      id: "m4-l3",
      title: "Implementing SOPs: Training, Change Management & Staff Buy-In",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "From Paper to Practice",
        },
        {
          type: "text",
          body: "Writing an excellent SOP is only half the battle. An SOP that sits in a binder on a shelf, unread and unfollowed, provides zero safety benefit. Implementation — the process of training staff, embedding the SOP into daily workflow, and sustaining adherence over time — is where SOPs either succeed or fail. In Caribbean pharmacies where teams are small and change can feel personal, effective implementation requires sensitivity, communication, and patience.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Implementation Process",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Announce the new SOP in a team meeting — explain the purpose, the problem it addresses, and the expected benefits",
            "Distribute copies and walk through each step as a team — invite questions and concerns",
            "Demonstrate the procedure — the pharmacist or lead technician should perform the SOP while the team observes",
            "Have each team member practice the procedure under supervision — provide feedback and coaching",
            "Post the SOP in a visible location near the relevant work area (e.g., dispensing bench, storage room)",
            "Set a 'go-live' date and announce it — from this date, the SOP is the required standard",
            "Monitor adherence closely during the first two weeks — provide encouragement and correction as needed",
            "Collect feedback after 30 days — are there steps that are impractical, unclear, or missing? Revise as needed",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Resistance to Change",
          body: "Staff may resist new SOPs for several reasons: 'We have always done it this way,' 'This is extra work,' or 'I already know how to do this.' The most effective response is to connect the SOP to patient safety — 'This SOP exists because a near-miss showed us that our current process has a gap that could harm a patient.' When staff understand the WHY behind the SOP, compliance improves dramatically.",
        },
        {
          type: "text",
          body: "Documentation of training is essential. Every staff member who is trained on a new SOP should sign an acknowledgement that they have read, understood, and been trained on the procedure. This documentation serves two purposes: it ensures accountability (the person cannot claim ignorance of the procedure), and it satisfies regulatory expectations for staff competency records.",
        },
        {
          type: "heading",
          level: 3,
          text: "Sustaining SOP Adherence",
        },
        {
          type: "text",
          body: "Initial compliance with a new SOP is typically high but tends to decay over time as the novelty wears off and time pressures reassert themselves. Sustaining adherence requires: regular audits (see Lesson 4.4), periodic refresher training, visible leadership compliance (the pharmacist must follow the SOPs too), integration of SOP compliance into performance reviews, and prompt correction of deviations before they become normalised.",
        },
        {
          type: "knowledge-check",
          question: "What is the most effective way to overcome staff resistance to a new SOP?",
          options: [
            "Threaten disciplinary action for non-compliance",
            "Explain that the SOP is a regulatory requirement with no room for discussion",
            "Connect the SOP to patient safety by explaining the specific risk or incident that led to its creation",
            "Allow staff to decide for themselves whether to follow the SOP",
          ],
          correctIndex: 2,
          explanation:
            "When staff understand the 'why' behind an SOP — particularly when it is connected to a real incident or near-miss that could have harmed a patient — they are far more likely to embrace it. Threats and mandates may achieve short-term compliance but breed resentment and covert non-compliance. True buy-in comes from understanding, not coercion.",
        },
      ],
    },
    // ── Lesson 4.4 ──────────────────────────────────────────────────────────
    {
      id: "m4-l4",
      title: "Auditing SOPs: Compliance Monitoring & Continuous Improvement",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Measuring What Matters",
        },
        {
          type: "text",
          body: "An SOP audit is a systematic assessment of whether staff are following a documented procedure as written. Audits serve three functions: they identify compliance gaps before they lead to errors, they reveal impractical steps that need revision, and they demonstrate to regulators and accreditation bodies that the pharmacy takes quality assurance seriously. In Caribbean pharmacies, audits need not be complex or resource-intensive — a simple, structured observation can provide invaluable safety insights.",
        },
        {
          type: "key-term",
          term: "SOP Audit",
          definition:
            "A structured observation and assessment of whether a documented standard operating procedure is being followed as written. Audits may be announced (staff know they are being observed) or unannounced, and should use a standardised checklist tied to the SOP's specific steps.",
        },
        {
          type: "heading",
          level: 3,
          text: "Designing a Simple Audit Tool",
        },
        {
          type: "text",
          body: "An effective audit tool is a checklist derived directly from the SOP being audited. Each step of the SOP becomes a checklist item with three possible outcomes: Compliant (step performed as written), Non-compliant (step missed or performed incorrectly), or Not Applicable (step not relevant to this specific instance). The auditor observes the process and records the outcome for each step.",
        },
        {
          type: "table",
          caption: "Sample SOP Audit Checklist: Dispensing Workflow",
          headers: ["Step", "SOP Requirement", "Compliant", "Non-Compliant", "N/A", "Notes"],
          rows: [
            ["1", "Verify patient identity using two identifiers", "☐", "☐", "☐", ""],
            ["2", "Read prescription completely before beginning dispensing", "☐", "☐", "☐", ""],
            ["3", "Check for drug allergies in patient record", "☐", "☐", "☐", ""],
            ["4", "Select medication using both drug name AND barcode/NDC verification", "☐", "☐", "☐", ""],
            ["5", "Verify drug name, strength, and dosage form against prescription", "☐", "☐", "☐", ""],
            ["6", "Count/measure medication without interruption", "☐", "☐", "☐", ""],
            ["7", "Apply label and verify all label information against prescription", "☐", "☐", "☐", ""],
            ["8", "Present completed prescription to pharmacist for final check", "☐", "☐", "☐", ""],
          ],
        },
        {
          type: "text",
          body: "Audit frequency should be proportionate to risk. High-risk processes (dispensing, controlled substance handling, compounding) should be audited monthly. Lower-risk processes (cleaning, inventory rotation) can be audited quarterly. The results should be documented, trended over time, and discussed in team meetings. A compliance rate below 90% for any critical step should trigger immediate retraining and, if necessary, SOP revision.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Peer Audit Approach",
          body: "In small Caribbean pharmacies, consider a peer audit model where technicians audit each other's dispensing practice on a rotating basis. This builds mutual accountability, shared understanding of the SOP, and a team culture of safety. The auditor learns as much as the person being audited. Pair this with a brief post-audit discussion: 'What did I do well? What could I improve?'",
        },
        {
          type: "heading",
          level: 3,
          text: "When to Revise an SOP",
        },
        {
          type: "text",
          body: "SOPs are living documents that must evolve with the pharmacy. Triggers for SOP revision include: a medication error or near-miss that reveals a gap in the procedure, regulatory changes that affect the process, new equipment or technology that alters the workflow, audit findings showing persistent non-compliance with a specific step (which may indicate the step is impractical), staff feedback that a step is unclear or unworkable, and the scheduled review date (every 12-24 months).",
        },
        {
          type: "knowledge-check",
          question: "An SOP audit reveals that step 6 ('Count medication without interruption') is non-compliant in 60% of observations because the technician is repeatedly interrupted by walk-in customers. The most appropriate response is to:",
          options: [
            "Discipline the technician for not following the SOP",
            "Remove step 6 from the SOP since it is impractical",
            "Investigate the workflow to find a way to reduce interruptions during counting (e.g., designating another staff member to handle walk-ins during dispensing) and revise the SOP if needed",
            "Increase the audit frequency to weekly until compliance improves",
          ],
          correctIndex: 2,
          explanation:
            "Persistent non-compliance with a specific SOP step usually indicates a system problem, not an individual failing. The step itself (counting without interruption) is a sound safety practice — the issue is that the workflow does not support it. The solution is to address the root cause (no designated person to handle walk-ins during dispensing) and, if necessary, revise the SOP to include the new workflow arrangement.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m4-q1",
      question: "What is the primary purpose of a Standard Operating Procedure (SOP) in pharmacy?",
      options: [
        "To satisfy regulatory inspectors during audits",
        "To ensure every team member performs safety-critical tasks in a consistent, standardised manner",
        "To document which staff member performed each task for disciplinary purposes",
        "To reduce the need for pharmacist supervision of technicians",
      ],
      correctIndex: 1,
      explanation:
        "The primary purpose of an SOP is to ensure consistency and standardisation in safety-critical processes. While SOPs also satisfy regulatory requirements and serve as training tools, their core function is to eliminate the dangerous variability that occurs when each team member performs a task differently.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q2",
      question: "Which of the following is an example of POOR SOP writing?",
      options: [
        "'Scan the product barcode and verify the drug name matches the prescription'",
        "'Verify patient identity using full name and date of birth'",
        "'Ensure medications are stored at appropriate temperatures'",
        "'Record the temperature reading in the monitoring log at 09:00 and 15:00 daily'",
      ],
      correctIndex: 2,
      explanation:
        "'Ensure medications are stored at appropriate temperatures' is poor SOP writing because 'appropriate' is subjective and ambiguous. A well-written SOP step would specify the exact temperature range (e.g., '15–25 °C'), the storage location, and the monitoring frequency. All other options are specific, measurable, and actionable.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m4-q3",
      question: "How often should high-risk pharmacy SOPs (such as dispensing and controlled substance handling) be audited?",
      options: [
        "Annually",
        "Every two years",
        "Monthly",
        "Only when an error occurs",
      ],
      correctIndex: 2,
      explanation:
        "High-risk processes should be audited monthly to detect compliance gaps before they lead to errors. Lower-risk processes can be audited quarterly. Waiting until an error occurs to audit is reactive and defeats the purpose of proactive quality assurance.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q4",
      questionType: "multiple_select",
      question: "Which of the following are valid triggers for revising an existing SOP? (Select all that apply)",
      options: [
        "A medication error or near-miss that reveals a gap in the procedure",
        "A change in pharmacy legislation or regulations",
        "Persistent non-compliance with a specific step revealed by audits",
        "A staff member who prefers to do things differently",
        "Installation of new technology that alters the workflow",
      ],
      correctIndex: 0,
      questionData: {
        correct_indices: [0, 1, 2, 4],
      },
      explanation:
        "Valid triggers for SOP revision include errors/near-misses revealing gaps, regulatory changes, persistent audit non-compliance (indicating impractical steps), and new technology. A staff member's personal preference is NOT a valid trigger — SOPs are based on evidence and best practice, not individual preferences.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m4-q5",
      question: "What is the recommended approach when staff resist a new SOP?",
      options: [
        "Allow them to opt out until they are ready",
        "Explain the patient safety rationale — the specific risk or incident that led to the SOP",
        "Implement the SOP without discussion and enforce through discipline",
        "Abandon the SOP and rely on informal verbal instructions instead",
      ],
      correctIndex: 1,
      explanation:
        "The most effective way to gain staff buy-in is to connect the SOP to patient safety — explaining the specific incident, near-miss, or identified risk that necessitated the procedure. When staff understand WHY the SOP exists and how it protects patients, they are far more likely to embrace it voluntarily.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q6",
      question: "In an SOP audit, a compliance rate below what percentage for a critical step should trigger immediate retraining?",
      options: [
        "50%",
        "70%",
        "90%",
        "100%",
      ],
      correctIndex: 2,
      explanation:
        "A compliance rate below 90% for any critical SOP step should trigger immediate retraining and investigation. For safety-critical processes like dispensing, high compliance is non-negotiable. The investigation should also determine whether the step itself is practical — persistent non-compliance may indicate a system barrier rather than a training gap.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q7",
      question: "What is the advantage of a peer audit model in small Caribbean pharmacies?",
      options: [
        "It eliminates the need for formal SOP documentation",
        "It builds mutual accountability and shared understanding of procedures",
        "It is required by all Caribbean pharmacy boards",
        "It replaces the need for pharmacist oversight",
      ],
      correctIndex: 1,
      explanation:
        "Peer audits — where technicians audit each other's practice on a rotating basis — build mutual accountability, deepen understanding of SOPs, and create a team culture of safety. The auditor gains insight into their own practice by observing others, and the process normalises constructive feedback. Peer audits complement, but do not replace, formal pharmacist oversight.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q8",
      questionType: "fill_in_blank",
      question: "SOPs should be reviewed at minimum every _____ months to ensure they remain current and effective.",
      options: [
        "6",
        "12 to 24",
        "36",
        "48",
      ],
      correctIndex: 1,
      questionData: {
        acceptable_answers: ["12", "24", "12-24", "12 to 24"],
        case_sensitive: false,
      },
      explanation:
        "SOPs should be reviewed at minimum every 12-24 months, even if no triggering event (error, regulatory change, new equipment) has occurred. Regular scheduled reviews ensure procedures remain current, relevant, and aligned with best practice. Many pharmacy boards expect a maximum 24-month review cycle.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q9",
      question: "A new locum technician arrives at a Caribbean community pharmacy for a one-week assignment. She has never worked at this pharmacy before. What is the MOST important resource for ensuring she follows the pharmacy's standard processes?",
      options: [
        "Verbal instructions from the permanent technician",
        "Her personal experience from other pharmacies",
        "The pharmacy's written SOPs for key processes",
        "A phone call to the pharmacy board for guidance",
      ],
      correctIndex: 2,
      explanation:
        "Written SOPs are the most reliable resource for ensuring a locum technician follows the pharmacy's standard processes. Verbal instructions depend on the availability and memory of other staff; personal experience may differ from this pharmacy's specific procedures; and the pharmacy board does not provide operational guidance. SOPs provide consistent, accessible, documented instructions that any qualified professional can follow.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q10",
      question: "Which SOP writing technique ensures the procedure can be followed by the LEAST experienced team member?",
      options: [
        "Using complex medical terminology to demonstrate expertise",
        "Writing in passive voice to sound professional",
        "Using plain language, active voice, and one action per numbered step",
        "Writing a brief summary and trusting staff to fill in the details",
      ],
      correctIndex: 2,
      explanation:
        "SOPs must be written for the least experienced person who might need to follow them. Plain language ensures comprehension, active voice ensures clarity ('Scan the barcode' is clearer than 'The barcode should be scanned'), and one action per step prevents confusion. This approach ensures the SOP is accessible to new staff, locums, and trainees.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 5 — Pharmacovigilance: ADR Monitoring & Reporting
// ============================================================================

const module5: Module = {
  id: "m5-pharmacovigilance",
  number: 5,
  title: "Pharmacovigilance: ADR Monitoring & Reporting",
  description:
    "Pharmacovigilance — the science and activities relating to the detection, assessment, understanding, and prevention of adverse effects of medicines — is a critical function that extends well beyond the pharmacy counter. This module explores how Caribbean pharmacy technicians contribute to national and international drug safety monitoring, with practical guidance on identifying, documenting, and reporting adverse drug reactions.",
  learningObjectives: [
    "Define pharmacovigilance and explain its importance in the context of Caribbean public health",
    "Classify adverse drug reactions (ADRs) by type using the Rawlins-Thompson classification",
    "Complete a national ADR report form with all required information",
    "Describe the role of the WHO Programme for International Drug Monitoring and its relevance to Caribbean nations",
    "Identify ADR signals from patient interactions that warrant reporting",
  ],
  lessons: [
    // ── Lesson 5.1 ──────────────────────────────────────────────────────────
    {
      id: "m5-l1",
      title: "What Is Pharmacovigilance? From Thalidomide to Modern Drug Safety",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Science of Drug Safety",
        },
        {
          type: "text",
          body: "Pharmacovigilance is the science and activities relating to the detection, assessment, understanding, and prevention of adverse effects or any other medicine-related problems. The term derives from the Greek 'pharmakon' (drug) and the Latin 'vigilare' (to keep watch). It is, in essence, the healthcare system's continuous monitoring of drug safety after medications reach the market — because clinical trials, no matter how rigorous, cannot detect all adverse effects before a drug is used by millions of diverse patients in real-world conditions.",
        },
        {
          type: "key-term",
          term: "Pharmacovigilance",
          definition:
            "The science and activities relating to the detection, assessment, understanding, and prevention of adverse effects or any other medicine-related problems. It encompasses the entire lifecycle of a medicine, from post-marketing surveillance to signal detection and regulatory action.",
        },
        {
          type: "text",
          body: "The modern pharmacovigilance system was born from tragedy. In the late 1950s and early 1960s, thalidomide — prescribed to pregnant women for morning sickness — caused severe birth defects (phocomelia) in over 10,000 children worldwide before the connection was recognised and the drug was withdrawn. This disaster exposed the catastrophic inadequacy of existing drug safety monitoring and led directly to the creation of systematic adverse drug reaction reporting programmes in every developed country, and eventually the WHO Programme for International Drug Monitoring.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Caribbean Pharmacovigilance",
          body: "Many Caribbean nations participate in the WHO Programme for International Drug Monitoring through their national pharmacovigilance centres. Trinidad & Tobago's Chemistry, Food and Drugs Division (CFDD) serves as the national reporting centre. Jamaica's Pharmacovigilance unit operates within the Ministry of Health. Barbados reports through the Drug Service. These centres collect ADR reports from healthcare professionals and submit them to the WHO global database (VigiBase), contributing Caribbean safety data to the global knowledge base.",
        },
        {
          type: "heading",
          level: 3,
          text: "Why Pharmacovigilance Matters in the Caribbean",
        },
        {
          type: "text",
          body: "Caribbean populations have unique genetic, environmental, and nutritional factors that can influence drug metabolism and adverse reaction profiles. Genetic polymorphisms in drug-metabolising enzymes (such as CYP2D6 and CYP2C19) vary across the Caribbean's ethnically diverse population — affecting how efficiently different individuals process certain drugs. Tropical climate, dietary patterns (including use of herbal supplements and traditional remedies), and the prevalence of specific diseases all create a pharmacovigilance landscape that cannot simply be extrapolated from studies conducted in North American or European populations.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Genetic diversity — the Caribbean's mixed African, Indian, European, and indigenous heritage creates varied drug metabolism profiles",
            "Herbal interactions — widespread use of bush medicine and herbal supplements may interact with prescription drugs in undocumented ways",
            "Generic product variation — multiple generic manufacturers may produce the same drug with different excipients, which can trigger ADRs in sensitive patients",
            "Tropical disease treatments — medications for dengue, chikungunya, and other tropical diseases have specific ADR profiles requiring regional monitoring",
            "Limited clinical trial representation — Caribbean populations are underrepresented in the clinical trials that establish drug safety profiles",
          ],
        },
        {
          type: "knowledge-check",
          question: "What historical event catalysed the creation of modern pharmacovigilance systems worldwide?",
          options: [
            "The discovery of penicillin allergy in the 1940s",
            "The thalidomide disaster of the late 1950s–early 1960s",
            "The introduction of generic drugs in the 1980s",
            "The COVID-19 pandemic of 2020",
          ],
          correctIndex: 1,
          explanation:
            "The thalidomide disaster — in which a drug prescribed to pregnant women for morning sickness caused severe birth defects in over 10,000 children — was the catalyst for systematic pharmacovigilance. It led directly to the creation of national adverse drug reaction reporting systems and the WHO Programme for International Drug Monitoring.",
        },
      ],
    },
    // ── Lesson 5.2 ──────────────────────────────────────────────────────────
    {
      id: "m5-l2",
      title: "Classifying ADRs: Types A Through F & the Rawlins-Thompson System",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Not All Adverse Reactions Are the Same",
        },
        {
          type: "text",
          body: "Adverse drug reactions (ADRs) vary enormously in their nature, severity, predictability, and mechanism. Classifying ADRs is essential for understanding their causes, predicting their likelihood, and determining the appropriate response. The most widely used classification system is the Rawlins-Thompson system, which categorises ADRs as Type A (augmented) or Type B (bizarre), with later extensions adding Types C through F.",
        },
        {
          type: "key-term",
          term: "Adverse Drug Reaction (ADR)",
          definition:
            "A response to a medicine that is noxious and unintended, occurring at doses normally used in humans for prophylaxis, diagnosis, or therapy. Unlike medication errors, ADRs can occur even when the drug is used correctly — they are an inherent risk of pharmacotherapy.",
        },
        {
          type: "table",
          caption: "Rawlins-Thompson Classification of Adverse Drug Reactions",
          headers: ["Type", "Name", "Characteristics", "Example", "Dose-Related?"],
          rows: [
            ["A", "Augmented", "Predictable, dose-dependent, related to the drug's known pharmacology; usually common and mild", "Drowsiness with antihistamines; hypoglycaemia with insulin", "Yes"],
            ["B", "Bizarre", "Unpredictable, not dose-dependent, not related to known pharmacology; often serious; includes allergies and idiosyncratic reactions", "Anaphylaxis with penicillin; Stevens-Johnson syndrome with carbamazepine", "No"],
            ["C", "Chronic", "Related to cumulative dose over prolonged use", "Osteoporosis with long-term corticosteroid use", "Cumulative"],
            ["D", "Delayed", "Occurs after prolonged exposure; may appear years later", "Tardive dyskinesia with long-term antipsychotic use", "Time-related"],
            ["E", "End-of-use", "Occurs on withdrawal of the drug", "Rebound hypertension after stopping clonidine; seizures after abrupt benzodiazepine withdrawal", "Withdrawal"],
            ["F", "Failure", "Therapeutic failure; the drug does not produce the expected effect", "Reduced efficacy of oral contraceptives when taken with enzyme-inducing drugs", "Interaction"],
          ],
        },
        {
          type: "text",
          body: "For the pharmacy technician, the most important distinction is between Type A (predictable, dose-related) and Type B (unpredictable, potentially life-threatening). Type A reactions are common and usually manageable by dose adjustment. Type B reactions are rare but can be fatal and are the primary target of pharmacovigilance reporting — because they are difficult to predict from clinical trials and may only become apparent when millions of patients use the drug.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Caribbean ADR Reporting Gap",
          body: "The WHO estimates that only 6-10% of all ADRs are reported worldwide. In the Caribbean, reporting rates are believed to be even lower due to lack of awareness, complex reporting procedures, and the misconception that only serious or unexpected reactions need to be reported. Every ADR — no matter how mild — contributes valuable safety data. Pharmacy technicians are ideally positioned to identify and initiate ADR reports because they interact with patients daily.",
        },
        {
          type: "heading",
          level: 3,
          text: "What Should Be Reported?",
        },
        {
          type: "text",
          body: "All suspected ADRs should ideally be reported, but national pharmacovigilance centres particularly prioritise: reactions to newly marketed drugs (those on the market for fewer than five years), serious reactions (hospitalisation, life-threatening, death, disability, or birth defects), unexpected reactions (not listed in the drug's product information), and reactions involving drug-drug or drug-food interactions.",
        },
        {
          type: "knowledge-check",
          question: "A patient taking carbamazepine for epilepsy develops Stevens-Johnson syndrome — a severe, life-threatening skin reaction. This is classified as a Type _____ ADR.",
          options: [
            "Type A (Augmented) — predictable and dose-related",
            "Type B (Bizarre) — unpredictable and not dose-related",
            "Type C (Chronic) — related to cumulative dose",
            "Type E (End-of-use) — occurs on drug withdrawal",
          ],
          correctIndex: 1,
          explanation:
            "Stevens-Johnson syndrome is a Type B (Bizarre) ADR — it is unpredictable, not dose-related, not related to the drug's known pharmacological action, and can be life-threatening. Type B reactions are the primary targets of pharmacovigilance reporting because they cannot be anticipated from the drug's mechanism of action.",
        },
      ],
    },
    // ── Lesson 5.3 ──────────────────────────────────────────────────────────
    {
      id: "m5-l3",
      title: "ADR Reporting in Practice: Forms, Processes & the WHO System",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Reporting ADRs: A Practical Guide",
        },
        {
          type: "text",
          body: "Reporting a suspected adverse drug reaction is a professional responsibility that contributes to the safety of every patient who will ever take that drug. The process need not be complex — the key is to capture essential information accurately and submit it to the appropriate national authority in a timely manner. This lesson walks through the practical steps of ADR reporting in the Caribbean context.",
        },
        {
          type: "heading",
          level: 3,
          text: "What to Include in an ADR Report",
        },
        {
          type: "table",
          caption: "Essential Information for an ADR Report",
          headers: ["Category", "Required Information", "Why It Matters"],
          rows: [
            ["Patient", "Age, sex, weight, relevant medical history, ethnicity (if relevant)", "Enables assessment of patient-specific risk factors"],
            ["Suspected Drug", "Drug name (brand and generic), dose, route, start date, indication", "Identifies the suspected causative agent"],
            ["Reaction", "Description of the reaction, onset date, severity, duration, outcome", "Characterises the ADR for classification and assessment"],
            ["Concomitant Drugs", "All other medications the patient is taking, including herbals and OTCs", "Enables assessment of drug-drug interactions as a potential cause"],
            ["Dechallenge/Rechallenge", "Did the reaction resolve when the drug was stopped? Did it recur when restarted?", "Provides evidence of causality — the strongest form of clinical evidence for an ADR"],
            ["Reporter", "Name, profession, contact details", "Allows the pharmacovigilance centre to follow up for additional information"],
          ],
        },
        {
          type: "island-comparison",
          title: "ADR Reporting Pathways in the Caribbean",
          description:
            "Each island has its own ADR reporting pathway. Know the process for your jurisdiction.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Report to the Chemistry, Food and Drugs Division (CFDD) under the Ministry of Health",
                "ADR reporting form available from the CFDD website and in print at public health facilities",
                "CFDD submits reports to the WHO Collaborating Centre for International Drug Monitoring in Uppsala, Sweden",
                "Both healthcare professionals and patients can submit ADR reports",
                "Pharmacists and technicians are encouraged to report directly",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Report to the Pharmacovigilance Unit, Ministry of Health & Wellness",
                "Jamaica joined the WHO Programme for International Drug Monitoring in 2013",
                "Online and paper-based ADR reporting forms available",
                "The National Health Fund tracks ADRs for drugs in the national formulary",
                "Active pharmacovigilance programmes exist for HIV and TB medications",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Report through the Barbados Drug Service, Ministry of Health",
                "ADR reports are submitted to CARPHA for regional analysis",
                "Queen Elizabeth Hospital has an internal ADR monitoring committee",
                "Community pharmacies are encouraged to submit reports for any suspected ADR",
                "Barbados contributes to PAHO/WHO regional pharmacovigilance initiatives",
              ],
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "The WHO Global Pharmacovigilance System",
        },
        {
          type: "text",
          body: "The WHO Programme for International Drug Monitoring, coordinated by the Uppsala Monitoring Centre (UMC) in Sweden, collects ADR reports from over 170 member countries into VigiBase — the world's largest database of adverse drug reaction reports, containing over 30 million reports. When multiple reports from different countries describe the same unexpected ADR for the same drug, a 'signal' is generated — an alert that triggers further investigation. Caribbean reports contribute to this global safety net.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Technician's Role in Pharmacovigilance",
          body: "As a pharmacy technician, you interact with patients more frequently than almost any other healthcare professional. When a patient mentions a new symptom, a change in how they feel since starting a medication, or a reaction they experienced, YOU may be the first to hear about it. Your role is to: (1) Recognise the potential ADR, (2) Alert the supervising pharmacist, (3) Help document the report, and (4) Encourage the patient to seek medical attention if the reaction is serious.",
        },
        {
          type: "case-study",
          title: "Case Study: The Unreported Rash",
          scenario:
            "Mrs. Ramdeen, a 62-year-old patient of East Indian descent in San Fernando, Trinidad, has been taking a new generic version of amlodipine (calcium channel blocker) for hypertension for three weeks. She comes to the pharmacy to collect her next month's supply and mentions in passing that she developed a 'itchy rash' on her arms two weeks ago. She dismisses it as 'just dry skin from the dry season.' The pharmacy technician, Keisha, recognises that a new rash two weeks after starting a new medication could be an adverse drug reaction.",
          questions: [
            "What should Keisha do immediately upon hearing about the rash?",
            "What information should be gathered for a potential ADR report?",
            "Why is this report valuable even though the reaction seems mild?",
            "What is the significance of noting that Mrs. Ramdeen is taking a new GENERIC version of the drug?",
          ],
          discussion:
            "Keisha should alert the supervising pharmacist immediately. The pharmacist should assess the rash, counsel the patient about the possible connection to the new medication, and determine whether the patient needs medical attention. An ADR report should be completed with patient details, the specific generic product (manufacturer, lot number), onset timing, and description of the reaction. Even a mild rash is reportable — it may be a Type B reaction signal, and the fact that it involves a new generic version is especially significant because different excipients in the generic formulation could be the cause. Reports like this, aggregated across multiple patients, can reveal formulation-specific safety issues.",
        },
        {
          type: "knowledge-check",
          question: "Which of the following is the strongest evidence that a patient's symptom is caused by a specific drug?",
          options: [
            "The symptom started after the drug was prescribed",
            "The patient believes the drug is causing the symptom",
            "The symptom resolved when the drug was stopped and returned when it was restarted (dechallenge/rechallenge)",
            "The symptom is listed as a possible side effect in the drug's product information",
          ],
          correctIndex: 2,
          explanation:
            "Dechallenge (symptom resolves when the drug is stopped) and rechallenge (symptom returns when the drug is restarted) provide the strongest clinical evidence of a causal relationship between a drug and an adverse reaction. While the other options are supportive, they do not establish causality as clearly.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m5-q1",
      question: "What is the primary function of pharmacovigilance?",
      options: [
        "To market new drugs to healthcare professionals",
        "To detect, assess, understand, and prevent adverse effects of medicines",
        "To determine drug pricing in the Caribbean",
        "To replace clinical trials for drug approval",
      ],
      correctIndex: 1,
      explanation:
        "Pharmacovigilance is the science and activities relating to the detection, assessment, understanding, and prevention of adverse effects or any other medicine-related problems. It is the healthcare system's ongoing safety monitoring of drugs after they reach the market.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q2",
      question: "A patient taking metformin for diabetes experiences dose-dependent gastrointestinal upset (nausea, diarrhoea). This is classified as a Type _____ ADR.",
      options: [
        "Type A (Augmented)",
        "Type B (Bizarre)",
        "Type D (Delayed)",
        "Type F (Failure)",
      ],
      correctIndex: 0,
      explanation:
        "GI upset from metformin is a Type A (Augmented) ADR — it is predictable, dose-dependent, related to the drug's known pharmacology, common, and usually manageable by dose adjustment (starting low and titrating slowly). Type A reactions are the most common type of ADR.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q3",
      question: "The WHO's global database of adverse drug reaction reports is called:",
      options: [
        "PharmaWatch",
        "DrugSafe Global",
        "VigiBase",
        "MedMonitor",
      ],
      correctIndex: 2,
      explanation:
        "VigiBase is the WHO's global database of individual case safety reports (ICSRs), maintained by the Uppsala Monitoring Centre in Sweden. It contains over 30 million ADR reports from more than 170 member countries and is the world's largest pharmacovigilance database.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q4",
      question: "Why is pharmacovigilance particularly important for Caribbean populations?",
      options: [
        "Caribbean populations are identical to those studied in clinical trials",
        "There are no adverse drug reactions in tropical climates",
        "Caribbean populations have unique genetic, environmental, and dietary factors that affect drug metabolism and ADR profiles",
        "Caribbean pharmacovigilance data is not shared internationally",
      ],
      correctIndex: 2,
      explanation:
        "Caribbean populations are ethnically diverse (mixed African, Indian, European, and indigenous heritage), use herbal supplements that may interact with drugs, and face unique environmental conditions. These factors create a pharmacovigilance landscape that cannot be extrapolated from North American or European clinical trial data — making local ADR reporting essential.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q5",
      question: "The WHO estimates that only _____ of all adverse drug reactions are reported worldwide.",
      options: [
        "1-2%",
        "6-10%",
        "25-30%",
        "50-60%",
      ],
      correctIndex: 1,
      explanation:
        "The WHO estimates that only 6-10% of all ADRs are reported worldwide, a phenomenon known as under-reporting. In the Caribbean, reporting rates are believed to be even lower. This massive under-reporting means that the true burden of ADRs is far greater than available data suggests, making every report a valuable contribution to drug safety knowledge.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q6",
      questionType: "true_false",
      question: "Only serious or life-threatening adverse drug reactions need to be reported to national pharmacovigilance centres.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "False. While serious and unexpected ADRs are prioritised, ALL suspected ADRs should ideally be reported. Even mild reactions contribute to the cumulative safety profile of a drug. Multiple reports of a 'mild' reaction may collectively reveal a significant safety signal that would be missed if individual reporters assumed their case was too minor to report.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q7",
      question: "In Trinidad & Tobago, ADR reports should be submitted to:",
      options: [
        "The Pharmacy Board of Trinidad and Tobago",
        "The Chemistry, Food and Drugs Division (CFDD) under the Ministry of Health",
        "The University of the West Indies Department of Pharmacology",
        "The Trinidad and Tobago Medical Association",
      ],
      correctIndex: 1,
      explanation:
        "In Trinidad & Tobago, ADR reports are submitted to the Chemistry, Food and Drugs Division (CFDD) under the Ministry of Health. The CFDD serves as the national pharmacovigilance centre and submits reports to the WHO Collaborating Centre in Uppsala, Sweden, for inclusion in the global VigiBase database.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q8",
      question: "A pharmacy technician notices that three different patients taking the same new generic brand of metformin have complained of unusual headaches over the past month. What should the technician do?",
      options: [
        "Ignore it — headaches are common and probably unrelated",
        "Tell the patients to take paracetamol for the headaches",
        "Alert the supervising pharmacist and recommend filing ADR reports for all three cases, noting the specific generic manufacturer and lot numbers",
        "Switch all patients to the brand-name product without consulting the pharmacist",
      ],
      correctIndex: 2,
      explanation:
        "Three patients reporting the same unusual symptom with the same generic product is a potential safety signal that warrants ADR reporting. The technician should alert the pharmacist and ensure reports are filed for all three cases, including the specific generic manufacturer, lot numbers, and excipient information. This pattern may indicate a formulation-specific issue.",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m5-q9",
      questionType: "matching",
      question: "Match each ADR type with its correct classification:",
      options: [
        "Type A — Augmented",
        "Type B — Bizarre",
        "Type C — Chronic",
        "Type E — End-of-use",
      ],
      correctIndex: 0,
      questionData: {
        pairs: [
          { left: "Drowsiness from antihistamines", right: "Type A — Augmented" },
          { left: "Anaphylaxis from penicillin", right: "Type B — Bizarre" },
          { left: "Osteoporosis from long-term steroids", right: "Type C — Chronic" },
          { left: "Rebound hypertension after stopping clonidine", right: "Type E — End-of-use" },
        ],
      },
      explanation:
        "Drowsiness from antihistamines is Type A (predictable, dose-related). Anaphylaxis from penicillin is Type B (unpredictable, not dose-related). Osteoporosis from long-term steroids is Type C (cumulative dose). Rebound hypertension after stopping clonidine is Type E (end-of-use/withdrawal).",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q10",
      question: "What role does dechallenge/rechallenge play in ADR causality assessment?",
      options: [
        "It is a marketing strategy used by pharmaceutical companies",
        "It determines the financial cost of the ADR",
        "It provides the strongest clinical evidence of a causal relationship between a drug and an adverse reaction",
        "It is used to calculate the drug's efficacy in clinical trials",
      ],
      correctIndex: 2,
      explanation:
        "Dechallenge (stopping the suspected drug to see if the reaction resolves) and rechallenge (restarting the drug to see if the reaction recurs) provide the strongest evidence of causality. If a reaction resolves on dechallenge and recurs on rechallenge, the causal link is very strong. However, rechallenge is not always ethical or safe — it depends on the severity of the reaction.",
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
  ],
};

// ============================================================================
// MODULE 6 — Quality Control in Compounding & Dispensing
// ============================================================================

const module6: Module = {
  id: "m6-quality-control",
  number: 6,
  title: "Quality Control in Compounding & Dispensing",
  description:
    "Quality control (QC) ensures that every medication prepared and dispensed meets established standards for identity, strength, purity, and quality. This module addresses QC challenges unique to Caribbean pharmacies — from the effects of tropical heat and humidity on drug stability to compounding quality in resource-limited settings — and provides practical tools for maintaining standards.",
  learningObjectives: [
    "Apply quality control principles to the dispensing workflow in a Caribbean community pharmacy",
    "Identify Caribbean-specific challenges to medication quality including heat, humidity, and supply chain factors",
    "Implement proper beyond-use dating for compounded preparations in tropical climates",
    "Design a temperature monitoring protocol suitable for a Caribbean pharmacy",
    "Evaluate the quality of compounded preparations using physical and chemical quality indicators",
  ],
  lessons: [
    // ── Lesson 6.1 ──────────────────────────────────────────────────────────
    {
      id: "m6-l1",
      title: "Dispensing Quality Control: Double-Checks, Label Accuracy & Final Verification",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Quality at the Dispensing Bench",
        },
        {
          type: "text",
          body: "Dispensing quality control is the systematic process of verifying that every prescription is filled accurately — with the right drug, right strength, right quantity, right form, correct labelling, and appropriate patient counselling information. In a Caribbean community pharmacy, where a single technician may prepare dozens of prescriptions per shift, quality control measures must be embedded into the workflow, not added as an afterthought.",
        },
        {
          type: "text",
          body: "The dispensing QC process begins the moment a prescription is received and does not end until the patient walks out with the correct medication and understands how to take it. Every step — prescription interpretation, product selection, counting, labelling, and final verification — is a QC checkpoint. Missing any checkpoint creates a gap through which an error can pass.",
        },
        {
          type: "key-term",
          term: "Final Verification",
          definition:
            "The pharmacist's comprehensive check of a dispensed prescription before it reaches the patient. This includes verifying drug identity, strength, quantity, label accuracy, drug interactions, allergy status, and appropriateness of therapy. In most Caribbean jurisdictions, final verification is a legal requirement that cannot be delegated to technicians.",
        },
        {
          type: "table",
          caption: "Dispensing QC Checkpoints",
          headers: ["Checkpoint", "Action", "What to Verify", "Who Is Responsible"],
          rows: [
            ["1. Prescription Receipt", "Read the full prescription before beginning", "Legibility, completeness, prescriber identity, patient identity", "Technician"],
            ["2. Clinical Screening", "Check for drug interactions, allergies, dose appropriateness", "Patient profile, allergy records, interaction databases", "Pharmacist (technician flags concerns)"],
            ["3. Product Selection", "Select the correct drug from the shelf", "Drug name, strength, dosage form, expiry date, manufacturer", "Technician"],
            ["4. Counting/Measuring", "Dispense the correct quantity", "Quantity matches prescription; count is accurate", "Technician"],
            ["5. Labelling", "Generate and apply the prescription label", "Patient name, drug name, directions, warnings, date, pharmacy details", "Technician"],
            ["6. Final Verification", "Comprehensive pharmacist check before patient handoff", "All of the above, plus clinical appropriateness", "Pharmacist"],
            ["7. Patient Counselling", "Counsel the patient on proper use", "Dose, frequency, route, storage, common side effects, what to report", "Pharmacist (technician may assist)"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Label Is the Last Defence",
          body: "The prescription label is the patient's primary source of medication information at home. A label error — wrong dose directions, missing warnings, wrong drug name — can cause harm even if the correct drug was dispensed. Always verify the label against the original prescription BEFORE attaching it to the medication container. Never assume the computer-generated label is correct — data entry errors are among the most common dispensing errors.",
        },
        {
          type: "knowledge-check",
          question: "At which step in the dispensing process is the pharmacist legally required to be involved in most Caribbean jurisdictions?",
          options: [
            "Prescription receipt and initial reading",
            "Product selection from the shelf",
            "Counting tablets",
            "Final verification before patient handoff",
          ],
          correctIndex: 3,
          explanation:
            "In most Caribbean jurisdictions, the pharmacist must perform the final verification — the comprehensive check of the dispensed prescription before it reaches the patient. While technicians perform the preparation steps, the pharmacist's final check is the legal and professional safeguard that ensures accuracy and clinical appropriateness.",
        },
      ],
    },
    // ── Lesson 6.2 ──────────────────────────────────────────────────────────
    {
      id: "m6-l2",
      title: "Caribbean-Specific Quality Challenges: Heat, Humidity & Drug Stability",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Tropical Conditions and Medication Quality",
        },
        {
          type: "text",
          body: "The Caribbean's tropical climate presents significant challenges to medication quality that temperate-climate pharmacies rarely face. Ambient temperatures routinely exceed 30 °C, relative humidity often surpasses 80%, and salt-laden coastal air can corrode packaging. These conditions accelerate drug degradation, alter dosage form stability, and can render medications ineffective or even harmful before their stated expiry date. For the Caribbean pharmacy technician, understanding the relationship between environmental conditions and drug stability is not academic — it is a daily quality control imperative.",
        },
        {
          type: "key-term",
          term: "Drug Stability",
          definition:
            "The capacity of a drug product to retain its identity, strength, quality, and purity throughout its shelf life when stored under the conditions stated on the label. Stability is affected by temperature, humidity, light, and the chemical nature of the drug and its packaging.",
        },
        {
          type: "table",
          caption: "Impact of Tropical Conditions on Common Dosage Forms",
          headers: ["Dosage Form", "Effect of Heat (>30 °C)", "Effect of Humidity (>80% RH)", "Caribbean-Specific Concern"],
          rows: [
            ["Tablets", "Accelerated degradation of active ingredient; discolouration", "Moisture absorption; softening; sticking together", "Tablets stored in non-air-conditioned pharmacies may degrade faster than shelf life predicts"],
            ["Capsules", "Gelatin softening; capsule deformation", "Moisture absorption; capsules may stick together or dissolve prematurely", "Gelatin capsules are particularly vulnerable to tropical humidity"],
            ["Suppositories", "Melting; deformation; loss of dose uniformity", "Less direct effect, but humidity accelerates packaging degradation", "May arrive melted if cold chain is broken during import/delivery"],
            ["Liquids/Syrups", "Accelerated microbial growth; chemical degradation", "Not directly affected by humidity (already liquid)", "Reconstituted antibiotics degrade rapidly in heat — critical for paediatric use"],
            ["Creams/Ointments", "Separation of oil and water phases; changes in consistency", "May absorb moisture, altering concentration", "Topical preparations may separate in heat, requiring re-mixing before use"],
            ["Insulin & Biologics", "Rapid loss of potency above 30 °C; potential protein denaturation", "Indirect — humidity can damage packaging integrity", "Cold chain failures during import, delivery, and storage are a critical risk"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "The Hidden Cold Chain Failure",
          body: "In the Caribbean, cold chain failures often occur not at the pharmacy but during transport — from the port to the warehouse, from the warehouse to the pharmacy, or during delivery to the patient's home. A vial of insulin that sat in an unrefrigerated delivery van for four hours on a 35 °C day may have lost significant potency even though it appears normal. Temperature monitoring at every stage of the supply chain is essential.",
        },
        {
          type: "heading",
          level: 3,
          text: "Temperature Monitoring in the Pharmacy",
        },
        {
          type: "text",
          body: "Every Caribbean pharmacy should maintain continuous temperature monitoring for both ambient storage areas and refrigerators. This means recording temperatures at least twice daily (morning and afternoon), using calibrated thermometers or continuous digital temperature loggers, and taking immediate action when temperatures fall outside acceptable ranges. Acceptable ranges are: ambient storage 15-25 °C (or up to 30 °C for products labelled 'store below 30 °C'), and refrigerated storage 2-8 °C.",
        },
        {
          type: "text",
          body: "In Caribbean pharmacies without full air conditioning, ambient temperatures may exceed 30 °C for extended periods. Practical mitigation strategies include: positioning temperature-sensitive medications in the coolest area of the pharmacy (away from windows and direct sunlight), using fans to improve air circulation, installing window tinting or UV-filtering film, rotating stock aggressively to ensure medications are dispensed well before their expiry date, and storing the most temperature-sensitive products in the refrigerator if shelf space allows.",
        },
        {
          type: "knowledge-check",
          question: "Why might a medication in a Caribbean pharmacy degrade before its stated expiry date?",
          options: [
            "Expiry dates are always inaccurate",
            "Caribbean pharmacies sell counterfeit medications",
            "Tropical heat and humidity accelerate degradation beyond what the expiry date — set under controlled storage conditions — accounts for",
            "The expiry date only applies to medications stored in Europe",
          ],
          correctIndex: 2,
          explanation:
            "Expiry dates are established under controlled storage conditions (typically 25 °C, 60% relative humidity). Caribbean pharmacies that cannot maintain these conditions may experience accelerated drug degradation. A medication that would remain stable for two years at 25 °C may degrade significantly faster at 35 °C and 85% humidity — meaning it could become subpotent or unsafe before its printed expiry date.",
        },
      ],
    },
    // ── Lesson 6.3 ──────────────────────────────────────────────────────────
    {
      id: "m6-l3",
      title: "Compounding Quality: Standards, Beyond-Use Dating & Tropical Challenges",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Compounding in the Caribbean Context",
        },
        {
          type: "text",
          body: "Pharmaceutical compounding — the preparation of customised medications by combining, mixing, or altering ingredients — remains a vital pharmacy service in the Caribbean, particularly for paediatric dosage forms (not all drugs are commercially available in child-friendly doses), dermatological preparations, and medications for patients with specific allergies to commercial excipients. However, compounding introduces quality risks that are amplified by tropical conditions and require meticulous quality control.",
        },
        {
          type: "key-term",
          term: "Beyond-Use Date (BUD)",
          definition:
            "The date after which a compounded preparation should not be used, based on the stability of the preparation in the specific container and storage conditions. Unlike the manufacturer's expiry date, the beyond-use date is determined by the pharmacy based on USP guidelines and the specific formulation. In tropical climates, shorter BUDs are generally required.",
        },
        {
          type: "text",
          body: "USP Chapter <795> provides guidelines for non-sterile compounding, and USP Chapter <797> addresses sterile compounding. While these standards were developed for the US context, they represent the global benchmark for compounding quality. Caribbean pharmacies that compound should apply these principles, adapted for tropical conditions — which generally means shorter beyond-use dates, more rigorous storage requirements, and more frequent quality checks.",
        },
        {
          type: "heading",
          level: 3,
          text: "Quality Control for Compounded Preparations",
        },
        {
          type: "table",
          caption: "Quality Checks for Compounded Preparations",
          headers: ["Quality Parameter", "What to Check", "Method", "Caribbean Consideration"],
          rows: [
            ["Appearance", "Colour, clarity, consistency, absence of particles or separation", "Visual inspection", "Heat may cause phase separation in creams/ointments — check more frequently"],
            ["Weight/Volume", "Final weight or volume matches the compounding record", "Analytical balance or graduated cylinder", "Humidity can affect powder weights — use desiccated weighing conditions"],
            ["pH", "pH is within the acceptable range for the preparation", "pH meter or pH strips", "Some preparations are pH-sensitive and may drift in tropical heat"],
            ["Labelling", "Complete, accurate label including BUD, storage instructions, and lot number", "Visual verification against compounding record", "BUD must account for tropical storage conditions — shorter than USP defaults"],
            ["Documentation", "Complete compounding record with all ingredients, quantities, equipment, and procedures", "Review of compounding log", "Document storage temperature at time of compounding"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Tropical Beyond-Use Dating",
          body: "USP default beyond-use dates assume storage at controlled room temperature (20-25 °C). In Caribbean pharmacies that cannot maintain this range, beyond-use dates should be shortened. A general rule of thumb: if the pharmacy cannot guarantee storage below 25 °C, reduce the USP default BUD by 25-50%. For aqueous preparations (solutions, suspensions), consider reducing to 7-14 days unless stability data supports longer dating. Always err on the side of caution.",
        },
        {
          type: "heading",
          level: 3,
          text: "Common Caribbean Compounding Challenges",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Powder absorption of moisture — hygroscopic powders absorb ambient humidity, affecting weight accuracy and stability",
            "Cream/ointment separation — tropical heat causes oil-water phase separation, altering drug distribution and dose uniformity",
            "Microbial growth — warm, humid conditions accelerate microbial contamination of non-preserved preparations",
            "Ingredient sourcing — limited availability of compounding-grade ingredients may require substitutions that affect quality",
            "Equipment limitations — not all Caribbean pharmacies have precision balances, pH meters, or proper compounding facilities",
            "Training gaps — compounding technique training may be limited; USP standards are not universally taught in regional programmes",
          ],
        },
        {
          type: "case-study",
          title: "Case Study: The Melted Suppositories",
          scenario:
            "A community pharmacy in Scarborough, Tobago, compounds progesterone suppositories for a patient undergoing fertility treatment. The pharmacy does not have full air conditioning — only a ceiling fan. During an August heat wave (ambient temperature 37 °C), a batch of 30 suppositories is compounded in the morning. By afternoon, the technician discovers that several suppositories have partially melted and deformed in their storage box on the compounding bench. The patient is due to collect them the next morning.",
          questions: [
            "What quality defects have occurred, and why are they significant?",
            "Can the melted suppositories be re-moulded and dispensed to the patient?",
            "What changes to the compounding process should be implemented to prevent recurrence?",
            "How should the beyond-use date be determined for suppositories in this tropical environment?",
          ],
          discussion:
            "The partial melting has compromised dose uniformity — the active ingredient may have migrated unevenly as the suppository base melted and resolidified. Re-moulding is NOT acceptable because there is no guarantee of uniform drug distribution throughout the re-solidified matrix. The entire batch must be discarded and re-compounded. Prevention strategies include: compounding early in the morning when temperatures are lower, storing finished suppositories immediately in the refrigerator (2-8 °C), using a higher-melting-point suppository base (e.g., cocoa butter mixtures with added wax), and labelling all suppositories with 'STORE IN REFRIGERATOR' instructions. The BUD should be shortened to account for the storage conditions the patient will encounter at home — if the patient does not have reliable refrigeration, consider whether this dosage form is practical.",
        },
        {
          type: "knowledge-check",
          question: "In a Caribbean pharmacy that cannot guarantee storage below 25 °C, the USP default beyond-use date for a compounded preparation should be:",
          options: [
            "Extended by 25% to account for faster dispensing in warm climates",
            "Used without modification — the USP default is universal",
            "Shortened by 25-50% to account for accelerated degradation in tropical conditions",
            "Eliminated entirely — compounding should not be performed in tropical climates",
          ],
          correctIndex: 2,
          explanation:
            "USP default beyond-use dates assume controlled room temperature (20-25 °C). When this cannot be guaranteed, BUDs should be shortened by 25-50% as a safety margin. This ensures that the preparation remains safe and effective throughout its assigned shelf life, even under less-than-ideal storage conditions.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m6-q1",
      question: "What is the acceptable temperature range for refrigerated medication storage?",
      options: [
        "0-2 °C",
        "2-8 °C",
        "8-15 °C",
        "15-25 °C",
      ],
      correctIndex: 1,
      explanation:
        "The internationally accepted temperature range for refrigerated pharmaceutical storage is 2-8 °C. Temperatures below 2 °C risk freezing (which can damage many medications, particularly insulin and vaccines), while temperatures above 8 °C do not provide adequate cold storage.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q2",
      question: "Which dosage form is MOST vulnerable to tropical humidity in a Caribbean pharmacy?",
      options: [
        "Injectable solutions in sealed ampoules",
        "Tablets and capsules in opened multi-dose containers",
        "Topical ointments in sealed tubes",
        "Liquid syrups in sealed bottles",
      ],
      correctIndex: 1,
      explanation:
        "Tablets and capsules in opened multi-dose containers are most vulnerable because each time the container is opened, humid tropical air enters and is absorbed by the dosage form. This can cause tablets to soften, stick together, and degrade. Sealed ampoules, tubes, and bottles provide a moisture barrier until opened.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m6-q3",
      question: "Why might an insulin vial that appears normal still be ineffective after transport in a Caribbean delivery van?",
      options: [
        "Insulin changes colour when it degrades",
        "The delivery van vibrations physically break down insulin molecules",
        "Heat exposure above 30 °C can denature insulin proteins without visible changes, reducing potency",
        "Insulin is not affected by temperature during transport",
      ],
      correctIndex: 2,
      explanation:
        "Insulin is a protein that can denature (lose its three-dimensional structure and potency) when exposed to temperatures above 30 °C. This denaturation may not produce any visible changes — the vial looks normal, but the insulin has lost effectiveness. This is why continuous cold chain monitoring from manufacturer to patient is critical.",
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
    {
      id: "m6-q4",
      question: "What is a beyond-use date (BUD) for a compounded preparation?",
      options: [
        "The manufacturer's expiry date printed on commercial products",
        "The date after which a compounded preparation should not be used, based on its stability in specific storage conditions",
        "The date the prescription expires",
        "The date by which the pharmacy must sell the product",
      ],
      correctIndex: 1,
      explanation:
        "A beyond-use date is assigned by the compounding pharmacy based on the stability of the specific preparation in its container under expected storage conditions. Unlike a manufacturer's expiry date (which is based on extensive stability testing), the BUD is assigned using USP guidelines and must be shortened in tropical conditions where storage temperatures exceed controlled room temperature.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q5",
      question: "A technician notices that a compounded cream has separated into two layers. What is the correct action?",
      options: [
        "Shake the container and dispense it — separation is normal in tropical climates",
        "Discard the preparation, investigate the cause, and re-compound with appropriate quality measures",
        "Add more emulsifying agent to the separated cream and re-label it",
        "Dispense it with a note telling the patient to mix it before each use",
      ],
      correctIndex: 1,
      explanation:
        "Phase separation in a compounded cream indicates a quality failure — the drug may no longer be evenly distributed, and the dose applied by the patient will be inconsistent and potentially unsafe. The preparation must be discarded, the cause investigated (heat exposure, inadequate emulsification, wrong base), and a new batch compounded with corrective measures.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q6",
      question: "How often should temperature be recorded in a Caribbean pharmacy's medication storage areas?",
      options: [
        "Once per week",
        "Once per day",
        "At least twice daily (morning and afternoon)",
        "Only when the air conditioning fails",
      ],
      correctIndex: 2,
      explanation:
        "Temperature should be recorded at least twice daily — typically morning and afternoon — to capture the full range of temperatures during the day. In tropical climates, afternoon temperatures can be significantly higher than morning readings. Continuous digital temperature loggers are even better, recording at regular intervals throughout the day.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q7",
      question: "Partially melted and re-solidified suppositories should be:",
      options: [
        "Dispensed with a warning that they may look different",
        "Re-moulded into proper shape and dispensed",
        "Discarded because drug distribution within the re-solidified matrix may be non-uniform",
        "Stored in the refrigerator for 24 hours before dispensing to restore their form",
      ],
      correctIndex: 2,
      explanation:
        "Suppositories that have partially melted and re-solidified must be discarded. During melting, the active ingredient can migrate unevenly within the base. When the suppository resolidifies, the drug distribution may be non-uniform — meaning the patient could receive too much or too little active ingredient. Re-moulding does not solve this problem.",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m6-q8",
      question: "Which USP chapter provides guidelines for non-sterile pharmaceutical compounding?",
      options: [
        "USP <795>",
        "USP <797>",
        "USP <800>",
        "USP <1075>",
      ],
      correctIndex: 0,
      explanation:
        "USP Chapter <795> provides standards and guidelines for non-sterile compounding (creams, ointments, solutions, suspensions, powders). USP <797> addresses sterile compounding (injectables, ophthalmic preparations). USP <800> covers hazardous drug handling. Caribbean pharmacies that compound should follow USP <795> principles, adapted for tropical conditions.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 7 — Continuous Quality Improvement for Caribbean Pharmacies
// ============================================================================

const module7: Module = {
  id: "m7-continuous-quality-improvement",
  number: 7,
  title: "Continuous Quality Improvement for Caribbean Pharmacies",
  description:
    "Quality is not a destination — it is a continuous journey. This module introduces the Plan-Do-Study-Act (PDSA) cycle and other continuous quality improvement (CQI) frameworks, applying them specifically to the challenges and opportunities of Caribbean pharmacy practice. You will learn how to identify improvement opportunities, design small tests of change, measure outcomes, and sustain successful improvements.",
  learningObjectives: [
    "Apply the PDSA (Plan-Do-Study-Act) cycle to a pharmacy quality improvement problem",
    "Identify measurable quality indicators for common pharmacy processes",
    "Design a small-scale quality improvement test suitable for a Caribbean community pharmacy",
    "Distinguish between quality assurance (preventing defects) and quality improvement (raising standards)",
    "Evaluate the success of a CQI initiative using quantitative and qualitative measures",
  ],
  lessons: [
    // ── Lesson 7.1 ──────────────────────────────────────────────────────────
    {
      id: "m7-l1",
      title: "CQI Foundations: The PDSA Cycle & Quality Improvement Models",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "What Is Continuous Quality Improvement?",
        },
        {
          type: "text",
          body: "Continuous Quality Improvement (CQI) is a systematic, ongoing approach to enhancing the quality and safety of processes, products, and services. Unlike traditional quality control — which focuses on detecting and correcting defects — CQI seeks to raise the baseline performance of the entire system. In pharmacy, CQI means not just catching errors, but redesigning processes so that errors become less likely, service becomes faster, and patient outcomes improve over time.",
        },
        {
          type: "key-term",
          term: "PDSA Cycle (Plan-Do-Study-Act)",
          definition:
            "A four-stage iterative quality improvement framework developed by W. Edwards Deming. Plan: identify the problem and design a test of change. Do: implement the change on a small scale. Study: analyse the results — did the change produce the desired improvement? Act: adopt the change, modify it, or abandon it based on the evidence. Then repeat.",
        },
        {
          type: "text",
          body: "The PDSA cycle is the most widely used CQI model in healthcare, including pharmacy. Its power lies in its simplicity and iterative nature — you do not need to design the perfect solution before starting. Instead, you make a small change, study its effect, learn, and adjust. Each cycle brings the system closer to optimal performance. This 'small tests of change' philosophy is particularly suited to Caribbean pharmacies, where resources for large-scale transformation are limited but incremental improvements are always achievable.",
        },
        {
          type: "table",
          caption: "The PDSA Cycle in Detail",
          headers: ["Stage", "Key Activities", "Caribbean Pharmacy Example"],
          rows: [
            ["PLAN", "Identify the problem, collect baseline data, develop a theory of improvement, design a small test of change", "Problem: 12% of dispensed prescriptions have label discrepancies. Theory: A mandatory label-check step will reduce discrepancies. Test: Implement a label-check checklist for one week."],
            ["DO", "Implement the test on a small scale, document observations and problems", "Run the label-check checklist for one week during the Monday-Friday morning shift. The technician uses the checklist for every prescription."],
            ["STUDY", "Analyse the results — compare outcome data to baseline, identify what worked and what did not", "After one week, label discrepancies dropped from 12% to 3%. The checklist added approximately 30 seconds per prescription. Staff found it straightforward."],
            ["ACT", "If successful, adopt the change system-wide. If not, modify and re-test. If failed, abandon and try a different approach", "Adopt the label-check checklist for all shifts and all technicians. Add it to the dispensing SOP. Set a review date for one month to confirm sustained improvement."],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Start Small, Learn Fast",
          body: "The most common mistake in CQI is trying to change too much at once. A PDSA cycle should start with the smallest possible test — one technician, one shift, one process, one week. If it works, expand. If it does not, you have lost very little. This approach is ideal for Caribbean pharmacies where disrupting the entire operation for an untested change is impractical.",
        },
        {
          type: "heading",
          level: 3,
          text: "Other CQI Models",
        },
        {
          type: "text",
          body: "While PDSA is the most common, other CQI frameworks have specific strengths. Lean focuses on eliminating waste — unnecessary steps, waiting times, excess inventory — in processes. Six Sigma uses statistical methods to reduce process variation and defects. The Model for Improvement (IHI) wraps the PDSA cycle in three guiding questions: What are we trying to accomplish? How will we know a change is an improvement? What change can we make that will result in improvement?",
        },
        {
          type: "knowledge-check",
          question: "What is the key difference between quality assurance (QA) and continuous quality improvement (CQI)?",
          options: [
            "QA is used in pharmacies while CQI is used in hospitals",
            "QA focuses on detecting and correcting defects; CQI focuses on systematically raising overall performance",
            "QA is mandatory while CQI is optional",
            "There is no difference — they are the same thing",
          ],
          correctIndex: 1,
          explanation:
            "Quality assurance (QA) focuses on detecting and correcting defects — ensuring that processes meet established standards. Continuous quality improvement (CQI) goes further: it seeks to systematically raise the standards themselves, redesigning processes to make errors less likely, improve efficiency, and enhance patient outcomes over time. CQI builds on QA but extends beyond it.",
        },
      ],
    },
    // ── Lesson 7.2 ──────────────────────────────────────────────────────────
    {
      id: "m7-l2",
      title: "Quality Indicators: Measuring What Matters in Caribbean Pharmacies",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "If You Cannot Measure It, You Cannot Improve It",
        },
        {
          type: "text",
          body: "Quality indicators are specific, measurable metrics that reflect the performance of pharmacy processes. They provide the data needed to identify problems, set improvement targets, measure the impact of changes, and demonstrate accountability to regulators, patients, and stakeholders. Without quality indicators, improvement efforts are guesswork.",
        },
        {
          type: "key-term",
          term: "Quality Indicator",
          definition:
            "A specific, measurable metric used to monitor the performance of a process against an established standard or benchmark. Effective quality indicators are relevant, measurable, actionable, and time-bound. Example: 'Dispensing error rate per 1,000 prescriptions per month.'",
        },
        {
          type: "text",
          body: "Selecting the right quality indicators is critical — measuring too many things dilutes focus, while measuring the wrong things drives unintended behaviour. For Caribbean community pharmacies, a practical starting set of quality indicators might include: dispensing error rate (errors per 1,000 prescriptions), near-miss capture rate (near-misses caught per month), prescription turnaround time (minutes from receipt to patient handoff), temperature excursion incidents (number of days with out-of-range temperatures), and patient counselling compliance (percentage of prescriptions accompanied by counselling).",
        },
        {
          type: "table",
          caption: "Practical Quality Indicators for Caribbean Pharmacies",
          headers: ["Indicator", "How to Measure", "Target", "Why It Matters"],
          rows: [
            ["Dispensing error rate", "Number of confirmed errors ÷ total prescriptions dispensed × 1,000", "< 1 per 1,000 prescriptions", "Directly measures the safety of the dispensing process"],
            ["Near-miss capture rate", "Number of near-misses reported per month", "Increasing trend (indicates improving safety culture)", "Measures willingness to report and effectiveness of safety barriers"],
            ["Prescription turnaround time", "Average minutes from prescription receipt to patient handoff", "< 15 minutes for routine prescriptions", "Measures efficiency and patient satisfaction"],
            ["Temperature excursions", "Number of days with temperature readings outside acceptable range", "Zero excursion days per month", "Measures medication storage quality"],
            ["Expired stock rate", "Number of expired items found during monthly checks ÷ total items", "< 0.5% of inventory", "Measures stock rotation and waste management"],
            ["Patient counselling rate", "Prescriptions with documented counselling ÷ total prescriptions × 100", "> 90%", "Measures patient education and medication adherence support"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Dashboard Approach",
          body: "Consider creating a simple quality dashboard — even a whiteboard in the dispensary — that displays the pharmacy's key quality indicators monthly. Visual display makes data visible to the entire team, creates shared accountability, and celebrates improvements. In a small Caribbean pharmacy, a whiteboard with four or five metrics updated monthly is more effective than a complex spreadsheet no one looks at.",
        },
        {
          type: "text",
          body: "Benchmarking — comparing your pharmacy's performance against national or regional standards — is a powerful CQI tool. However, Caribbean-specific pharmacy benchmarks are still developing. In the interim, pharmacies can benchmark internally (comparing current performance to their own historical data), across branches (for pharmacy chains), or against published international standards adapted for the Caribbean context.",
        },
        {
          type: "knowledge-check",
          question: "A pharmacy's near-miss reporting rate increases from 2 per month to 12 per month after implementing a just culture programme. This increase most likely indicates:",
          options: [
            "Patient safety has dramatically worsened",
            "Staff are becoming more careless",
            "The safety culture has improved — staff feel safe reporting near-misses that were previously hidden",
            "The pharmacy has too many technicians",
          ],
          correctIndex: 2,
          explanation:
            "An increase in near-miss reporting is a positive indicator of improving safety culture. Near-misses were always occurring — they were simply not being reported. The increase means staff now feel safe enough to report, providing the pharmacy with valuable data to identify and fix system weaknesses before they cause patient harm.",
        },
      ],
    },
    // ── Lesson 7.3 ──────────────────────────────────────────────────────────
    {
      id: "m7-l3",
      title: "Designing & Sustaining CQI Projects in Caribbean Settings",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "From Theory to Practice",
        },
        {
          type: "text",
          body: "Designing a CQI project in a Caribbean community pharmacy requires balancing ambition with practicality. Resources are limited, teams are small, and daily operations cannot be disrupted. The most successful CQI projects in this context are tightly focused (one specific problem), small-scale (tested on one shift before expanding), data-driven (baseline measurement before change, outcome measurement after), and team-owned (every team member understands and contributes to the improvement).",
        },
        {
          type: "heading",
          level: 3,
          text: "Designing Your CQI Project",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Select one specific, measurable problem — e.g., 'Our dispensing error rate for LASA drugs is 3 per 100 LASA prescriptions'",
            "Collect baseline data — measure the current state for at least 2-4 weeks before making changes",
            "Identify the root cause — use the 5 Whys or fishbone diagram from Module 3",
            "Design a small test of change — e.g., 'We will implement Tall Man Lettering shelf labels for our top 10 LASA pairs and measure the effect over 4 weeks'",
            "Implement the test (DO phase) — run the change for a defined period, documenting observations",
            "Measure the outcome (STUDY phase) — compare post-change data to baseline data",
            "Decide next steps (ACT phase) — adopt if successful, modify if partially successful, abandon if unsuccessful",
            "Sustain the improvement — embed the change in SOPs, train all staff, and continue monitoring",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The 90-Day Rule",
          body: "CQI changes should be monitored for at least 90 days after full implementation to confirm sustainability. Initial improvements often decay as the novelty wears off and old habits reassert themselves. Sustained improvement after 90 days indicates that the change has become embedded in the pharmacy's culture and workflow.",
        },
        {
          type: "heading",
          level: 3,
          text: "Common CQI Pitfalls in Caribbean Pharmacies",
        },
        {
          type: "text",
          body: "Several common pitfalls undermine CQI efforts in Caribbean pharmacy settings. Attempting too much at once — trying to fix five problems simultaneously dilutes focus and makes it impossible to attribute results to specific changes. Skipping baseline measurement — without knowing where you started, you cannot demonstrate improvement. Lack of leadership engagement — if the pharmacist-in-charge is not visibly committed, staff will not take the project seriously. Failure to sustain — implementing a change without embedding it in SOPs, training, and monitoring leads to regression.",
        },
        {
          type: "case-study",
          title: "Case Study: Reducing Prescription Wait Times in a Jamaican Pharmacy",
          scenario:
            "A busy community pharmacy in Montego Bay, Jamaica, receives consistent patient complaints about long wait times. The pharmacist-in-charge asks a senior technician to lead a CQI project. Baseline data (collected over two weeks by timing 200 prescriptions) shows a mean turnaround time of 28 minutes, with peak wait times exceeding 45 minutes during the lunch rush. The root cause analysis reveals three contributing factors: prescriptions are processed in order of arrival regardless of complexity, the technician frequently walks to the storeroom for back-shelf stock, and the pharmacist performs final checks in large batches rather than continuously.",
          questions: [
            "Which CQI model should be used, and what would the first PDSA cycle look like?",
            "Design one specific change to test in the first PDSA cycle — keep it small and measurable",
            "What quality indicator would you use to measure the success of this intervention?",
            "How would you sustain the improvement if the first cycle is successful?",
          ],
          discussion:
            "A PDSA approach is ideal. The first cycle might focus on the single most impactful change — perhaps moving the pharmacist to continuous 'flow' checking (verifying each prescription as it is completed rather than batching). The test could run for one week during lunch shifts only. The quality indicator is mean prescription turnaround time (measured the same way as baseline). If turnaround time drops significantly, the change is adopted system-wide, embedded in the dispensing SOP, and monitored monthly. Subsequent PDSA cycles would address the other root causes (prescription triage by complexity, pre-staging frequently used stock).",
        },
        {
          type: "knowledge-check",
          question: "How long should a CQI change be monitored after full implementation to confirm sustainability?",
          options: [
            "One week",
            "Two weeks",
            "30 days",
            "At least 90 days",
          ],
          correctIndex: 3,
          explanation:
            "CQI changes should be monitored for at least 90 days after full implementation. Initial improvements often decay as novelty wears off and old habits return. A 90-day monitoring period provides confidence that the change has truly been embedded into the pharmacy's workflow and culture, not just temporarily adopted.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m7-q1",
      question: "What does PDSA stand for?",
      options: [
        "Plan-Design-Study-Assess",
        "Plan-Do-Study-Act",
        "Prepare-Deliver-Score-Adjust",
        "Problem-Data-Solution-Action",
      ],
      correctIndex: 1,
      explanation:
        "PDSA stands for Plan-Do-Study-Act. It is a four-stage iterative quality improvement cycle developed by W. Edwards Deming. Plan the change, Do (implement) it on a small scale, Study the results, and Act on what was learned — then repeat.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q2",
      question: "In the PDSA cycle, what happens during the 'Study' phase?",
      options: [
        "The team studies textbooks on quality improvement",
        "Baseline data is collected before making any changes",
        "Results of the test change are analysed and compared to baseline data",
        "Staff are studied to determine who is responsible for quality problems",
      ],
      correctIndex: 2,
      explanation:
        "The Study phase involves analysing the results of the test change and comparing outcome data to the baseline data collected during the Plan phase. The key question is: did the change produce the desired improvement? This evidence-based assessment drives the decision in the Act phase.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q3",
      question: "A pharmacy's dispensing error rate drops from 5 per 1,000 to 2 per 1,000 prescriptions after implementing a barcode scanning check. However, three months later, the rate has crept back up to 4 per 1,000. What is the most likely explanation?",
      options: [
        "The barcode scanning technology has malfunctioned",
        "The improvement was not sustained because it was not embedded in SOPs, training, and ongoing monitoring",
        "Dispensing errors are impossible to reduce permanently",
        "The initial improvement was a statistical anomaly",
      ],
      correctIndex: 1,
      explanation:
        "Regression to previous performance levels is the most common failure of CQI initiatives. It typically occurs when changes are not formally embedded in SOPs, staff are not retrained, and ongoing monitoring lapses. Sustained improvement requires systemic embedding — not just initial enthusiasm.",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m7-q4",
      question: "Which quality indicator would BEST measure the safety culture of a pharmacy?",
      options: [
        "Total revenue per month",
        "Number of prescriptions dispensed per day",
        "Near-miss reporting rate (near-misses reported per month)",
        "Average staff salary",
      ],
      correctIndex: 2,
      explanation:
        "The near-miss reporting rate is a strong indicator of safety culture because it reflects staff willingness to identify and report errors caught before they reach patients. A high near-miss reporting rate (and an increasing trend) suggests a culture where safety is valued and staff feel safe reporting without fear of punishment.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m7-q5",
      question: "Why is baseline data collection essential before implementing a CQI change?",
      options: [
        "It is a regulatory requirement in all Caribbean jurisdictions",
        "Without baseline data, it is impossible to determine whether the change produced a genuine improvement",
        "Baseline data is only needed for statistical research, not practical quality improvement",
        "It helps identify which staff member to blame for the current quality problems",
      ],
      correctIndex: 1,
      explanation:
        "Baseline data establishes the 'before' measurement against which the 'after' measurement is compared. Without it, there is no evidence that the change actually produced an improvement — any perceived improvement might be due to normal variation, seasonal factors, or the Hawthorne effect (improvement from being observed, not from the intervention itself).",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q6",
      question: "In Lean quality improvement methodology, what is the primary focus?",
      options: [
        "Adding more quality checkpoints to every process",
        "Eliminating waste — unnecessary steps, waiting times, and excess inventory",
        "Increasing the number of staff to reduce individual workload",
        "Replacing human judgment with technology at every step",
      ],
      correctIndex: 1,
      explanation:
        "Lean methodology focuses on eliminating waste in processes — any step, delay, or resource use that does not add value for the patient. In pharmacy, this might include reducing unnecessary paperwork, optimising shelf layout to minimise walking, or streamlining the prescription intake process.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q7",
      questionType: "ordering",
      question: "Arrange the PDSA cycle stages in the correct order:",
      options: [
        "Plan",
        "Do",
        "Study",
        "Act",
      ],
      correctIndex: 0,
      questionData: {
        correct_order: [0, 1, 2, 3],
      },
      explanation:
        "The PDSA cycle follows the sequence: Plan (identify problem, design change), Do (implement on small scale), Study (analyse results vs. baseline), Act (adopt, modify, or abandon). This cycle then repeats iteratively, with each cycle building on the learning from the previous one.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q8",
      question: "What is the IHI Model for Improvement's first guiding question?",
      options: [
        "How much will this cost?",
        "What are we trying to accomplish?",
        "Who is responsible for quality?",
        "When should we start?",
      ],
      correctIndex: 1,
      explanation:
        "The IHI Model for Improvement wraps the PDSA cycle in three guiding questions: (1) What are we trying to accomplish? (2) How will we know a change is an improvement? (3) What change can we make that will result in improvement? The first question establishes a clear, specific, measurable aim before any change is attempted.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q9",
      question: "What is the recommended approach for a CQI test of change in a small Caribbean community pharmacy?",
      options: [
        "Implement the change across the entire pharmacy operation immediately",
        "Start with the smallest possible test — one technician, one shift, one week — and expand if successful",
        "Wait until the pharmacy can afford advanced technology before attempting any quality improvement",
        "Hire a CQI consultant before making any changes",
      ],
      correctIndex: 1,
      explanation:
        "Small-scale testing is the cornerstone of PDSA-based CQI. Starting with one technician, one shift, one week minimises disruption, limits resource expenditure, and allows rapid learning. If the change works, it can be expanded. If it fails, very little has been lost. This 'start small, learn fast' philosophy is perfectly suited to resource-constrained Caribbean settings.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m7-q10",
      question: "A pharmacy displays its quality indicators on a whiteboard in the dispensary that is updated monthly. This approach is effective because:",
      options: [
        "It replaces the need for computerised quality management systems",
        "It makes data visible to the entire team, creates shared accountability, and celebrates improvements",
        "It satisfies regulatory inspection requirements in all Caribbean jurisdictions",
        "It is the only way to track quality indicators in a pharmacy",
      ],
      correctIndex: 1,
      explanation:
        "Visual display of quality indicators creates transparency, shared ownership, and team motivation. When the entire team can see how the pharmacy is performing — and can see improvements resulting from their efforts — engagement and accountability increase. A simple whiteboard is often more effective than a complex electronic system that only the manager reviews.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// MODULE 8 — Workplace Safety: Hazardous Drug Handling & Infection Control
// ============================================================================

const module8: Module = {
  id: "m8-workplace-safety",
  number: 8,
  title: "Workplace Safety: Hazardous Drug Handling & Infection Control",
  description:
    "The pharmacy technician's own safety is as important as patient safety. This module covers the handling of hazardous drugs (applying USP <800> principles adapted for Caribbean settings), personal protective equipment, infection control practices strengthened by the lessons of COVID-19, and the occupational health risks specific to pharmacy work in tropical environments.",
  learningObjectives: [
    "Apply USP <800> principles for hazardous drug handling in a Caribbean pharmacy context",
    "Select and use appropriate personal protective equipment (PPE) for different pharmacy tasks",
    "Implement post-COVID infection control practices in a Caribbean community pharmacy",
    "Identify occupational health hazards specific to pharmacy work, including repetitive strain and chemical exposure",
    "Design a basic workplace safety plan for a Caribbean community pharmacy",
  ],
  lessons: [
    // ── Lesson 8.1 ──────────────────────────────────────────────────────────
    {
      id: "m8-l1",
      title: "Hazardous Drug Handling: USP <800> Principles for Caribbean Practice",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Understanding Hazardous Drugs",
        },
        {
          type: "text",
          body: "Hazardous drugs are medications that pose a health risk to pharmacy personnel who handle them during routine activities such as receiving, storing, preparing, dispensing, and disposing. The risk comes from occupational exposure — absorbing small amounts of the drug through skin contact, inhalation of dust or aerosol, or accidental ingestion. Over time, cumulative exposure to certain hazardous drugs can cause reproductive harm, organ damage, or cancer. The list includes many cytotoxic (anti-cancer) agents, certain antivirals, hormones, and immunosuppressants.",
        },
        {
          type: "key-term",
          term: "Hazardous Drug",
          definition:
            "A medication that poses a potential health risk to healthcare workers from occupational exposure during handling. The NIOSH (National Institute for Occupational Safety and Health) maintains a list of hazardous drugs, which includes antineoplastics, certain antivirals, hormones, and other agents that are carcinogenic, teratogenic, genotoxic, or toxic to organs at low doses.",
        },
        {
          type: "text",
          body: "USP Chapter <800> — Hazardous Drugs: Handling in Healthcare Settings — provides comprehensive standards for the safe handling of hazardous drugs. While USP <800> was developed for the US context, its principles are universally applicable. Caribbean pharmacies must adapt these principles to their specific settings, resources, and the types of hazardous drugs they handle.",
        },
        {
          type: "table",
          caption: "USP <800> Key Requirements Adapted for Caribbean Pharmacies",
          headers: ["Requirement", "USP <800> Standard", "Caribbean Adaptation"],
          rows: [
            ["List of hazardous drugs", "Maintain a facility-specific list based on NIOSH", "Create a list of all NIOSH-listed drugs stocked in your pharmacy; update annually"],
            ["Personnel training", "All staff handling HDs must be trained before first handling and annually thereafter", "Train all technicians who receive, store, or dispense hazardous drugs; document training"],
            ["Personal protective equipment", "Chemotherapy-rated gloves, gowns, eye protection for preparation; gloves for routine handling", "At minimum: chemotherapy-rated gloves for any handling of intact hazardous drug packages; full PPE for any manipulation (counting, compounding)"],
            ["Receiving and storage", "Designated receiving area; segregated storage", "Receive HD shipments in a designated area; store on separate, clearly labelled shelves"],
            ["Dispensing", "Use caution when counting; contain dust generation", "Use a dedicated counting tray for HDs (never shared with non-HDs); wipe down after use"],
            ["Spill management", "Spill kits immediately available; trained personnel", "Maintain a HD spill kit (gloves, absorbent pads, disposal bags) near HD storage; train all staff on spill response"],
            ["Waste disposal", "Trace-contaminated waste in designated containers", "Use clearly labelled hazardous waste containers; arrange appropriate disposal through the health authority or licensed waste contractor"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Reproductive Risk",
          body: "Occupational exposure to certain hazardous drugs — particularly antineoplastics and some hormones — poses a significant risk to reproductive health. Healthcare workers who handle these drugs without adequate protection have shown increased rates of miscarriage, infertility, and congenital abnormalities. Pharmacy staff who are pregnant, attempting to conceive, or breastfeeding should be reassigned away from hazardous drug handling tasks. This is not optional — it is an occupational health imperative.",
        },
        {
          type: "heading",
          level: 3,
          text: "Common Hazardous Drugs in Caribbean Pharmacies",
        },
        {
          type: "text",
          body: "While full-scale chemotherapy preparation is typically limited to hospital pharmacies, Caribbean community pharmacies commonly stock several NIOSH-listed hazardous drugs that require careful handling. These include: methotrexate (used for rheumatoid arthritis, psoriasis, and ectopic pregnancy), tamoxifen and letrozole (breast cancer hormonal therapy), cyclophosphamide (occasionally dispensed for autoimmune conditions), finasteride (used for benign prostatic hyperplasia), and various hormonal contraceptives. Any pharmacy that stocks these drugs must have hazardous drug handling procedures in place.",
        },
        {
          type: "knowledge-check",
          question: "Which of the following is the MINIMUM PPE required when handling intact packages of hazardous drugs during routine dispensing?",
          options: [
            "No PPE is required for intact packages",
            "Chemotherapy-rated gloves",
            "Full hazmat suit with respirator",
            "Standard latex examination gloves only",
          ],
          correctIndex: 1,
          explanation:
            "USP <800> requires at minimum chemotherapy-rated gloves when handling intact hazardous drug packages. Standard examination gloves are NOT adequate — they are thinner and more permeable to hazardous drug residue that may be present on the outside of packaging. For any manipulation of hazardous drugs (opening, counting, compounding), additional PPE (gown, eye protection) is required.",
        },
      ],
    },
    // ── Lesson 8.2 ──────────────────────────────────────────────────────────
    {
      id: "m8-l2",
      title: "Infection Control in Caribbean Pharmacies: Post-COVID Best Practices",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Infection Control After COVID-19",
        },
        {
          type: "text",
          body: "The COVID-19 pandemic fundamentally transformed infection control practices in pharmacies worldwide, and the Caribbean was no exception. Practices that were considered optional before 2020 — routine surface disinfection, hand hygiene stations, physical barriers, and respiratory hygiene — are now recognised as essential baseline standards. As the Caribbean transitions from pandemic response to endemic management, the challenge is maintaining these improvements rather than allowing them to lapse.",
        },
        {
          type: "key-term",
          term: "Standard Precautions",
          definition:
            "The minimum infection prevention practices that apply to all patient/client care, regardless of suspected or confirmed infection status. Standard precautions include hand hygiene, use of PPE appropriate to the risk, respiratory hygiene/cough etiquette, safe sharps handling, and environmental cleaning. They are the foundation of infection control in any healthcare setting, including pharmacies.",
        },
        {
          type: "text",
          body: "Caribbean pharmacies face unique infection control challenges related to their physical environment and operational patterns. Many community pharmacies have open-front designs for ventilation, which is beneficial for air exchange but exposes the dispensary to street dust, insects, and varying humidity. The warm, humid climate promotes microbial growth on surfaces. And the high volume of walk-in traffic — patients, caregivers, delivery personnel — creates constant potential for pathogen introduction.",
        },
        {
          type: "heading",
          level: 3,
          text: "Essential Infection Control Practices",
        },
        {
          type: "table",
          caption: "Post-COVID Infection Control Practices for Caribbean Pharmacies",
          headers: ["Practice", "Standard", "Implementation in Caribbean Setting"],
          rows: [
            ["Hand hygiene", "Wash hands or use alcohol-based sanitiser before and after patient contact, after handling money, and after touching common surfaces", "Install hand sanitiser dispensers at entry, counter, and dispensing bench; ensure soap and water available in staff areas"],
            ["Surface disinfection", "Clean high-touch surfaces (counter, card terminal, telephone, computer keyboard) at least every 2 hours during operating hours", "Use 70% alcohol or sodium hypochlorite (bleach) solution; increase frequency during respiratory illness seasons"],
            ["Respiratory hygiene", "Provide tissues and waste bins; encourage respiratory hygiene signage; mask availability for symptomatic patients", "Post signage in English and Creole/local languages; maintain a supply of disposable masks for symptomatic visitors"],
            ["Physical barriers", "Transparent screens between staff and patients at the dispensing counter", "Maintain the Perspex/acrylic screens installed during COVID-19; they also reduce exposure to respiratory droplets year-round"],
            ["Ventilation", "Maximise natural ventilation or mechanical air exchange in the dispensary", "Caribbean pharmacies with open designs have a natural advantage; supplement with fans positioned to move air from clean to contaminated areas"],
            ["Waste management", "Segregate pharmaceutical waste, general waste, and biohazardous waste", "Use colour-coded bins; ensure pharmaceutical waste is not mixed with general waste"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Lessons from COVID-19 in the Caribbean",
          body: "The COVID-19 pandemic revealed that Caribbean pharmacies are critical healthcare infrastructure — often the only accessible healthcare facility in rural communities. Pharmacies that maintained robust infection control practices throughout the pandemic earned community trust and sustained operations while others struggled. The investments in screens, sanitiser stations, and cleaning protocols should be maintained permanently — not as pandemic measures, but as standard pharmacy practice.",
        },
        {
          type: "heading",
          level: 3,
          text: "Handling Money and Cash Transactions",
        },
        {
          type: "text",
          body: "Cash handling is a significant infection control concern in Caribbean pharmacies, where cash transactions remain common despite the growth of digital payment. Banknotes and coins carry bacteria, viruses, and other pathogens. Best practice includes: sanitising hands after every cash transaction, never touching the face after handling money, cleaning the cash register area frequently, encouraging contactless payment where available, and designating one team member for cash handling (separate from the dispensing technician) during peak periods.",
        },
        {
          type: "knowledge-check",
          question: "Which COVID-era infection control measure should Caribbean pharmacies maintain permanently as standard practice?",
          options: [
            "Refusing to serve patients who are not wearing masks",
            "Limiting pharmacy operating hours to reduce foot traffic",
            "Transparent barrier screens at the dispensing counter, regular surface disinfection, and hand hygiene stations",
            "Requiring patients to submit prescriptions by email only",
          ],
          correctIndex: 2,
          explanation:
            "Transparent barrier screens, regular surface disinfection, and hand hygiene stations are evidence-based infection control measures that protect both staff and patients year-round — not just during pandemics. These should be maintained as permanent standard practices. The other options are overly restrictive and not sustainable for routine pharmacy operation.",
        },
      ],
    },
    // ── Lesson 8.3 ──────────────────────────────────────────────────────────
    {
      id: "m8-l3",
      title: "Occupational Health & the Pharmacy Safety Plan",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Protecting the Pharmacy Team",
        },
        {
          type: "text",
          body: "Pharmacy work involves physical, chemical, biological, and ergonomic hazards that can affect the long-term health of technicians and pharmacists. In the Caribbean, where occupational health regulation and enforcement are less developed than in North America or Europe, pharmacy professionals must take proactive responsibility for their own workplace safety and advocate for safe conditions.",
        },
        {
          type: "heading",
          level: 3,
          text: "Occupational Hazards in Pharmacy",
        },
        {
          type: "table",
          caption: "Common Occupational Health Hazards for Pharmacy Technicians",
          headers: ["Hazard Category", "Specific Hazards", "Health Consequences", "Prevention"],
          rows: [
            ["Ergonomic", "Prolonged standing, repetitive counting motions, awkward postures at the dispensing bench", "Back pain, foot problems, repetitive strain injuries (carpal tunnel syndrome)", "Anti-fatigue mats, proper workstation height, regular breaks, task rotation"],
            ["Chemical", "Exposure to drug dust during counting/compounding, cleaning chemical fumes", "Respiratory sensitisation, skin irritation, long-term organ damage from hazardous drug exposure", "PPE (gloves, masks for compounding), ventilation, hazardous drug protocols"],
            ["Biological", "Exposure to infectious patients, contaminated surfaces, needle sticks (hospital pharmacies)", "Respiratory infections, bloodborne pathogen exposure", "Standard precautions, hand hygiene, respiratory protection, sharps protocols"],
            ["Physical", "Lifting heavy drug shipment boxes, exposure to UV light from laminar flow hoods", "Musculoskeletal injury, UV skin/eye damage", "Proper lifting technique, team lifting for heavy items, UV shielding"],
            ["Psychosocial", "High workload, time pressure, error anxiety, abuse from frustrated patients", "Burnout, anxiety, depression, compassion fatigue", "Adequate staffing, just culture, peer support, workload management"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Silent Epidemic: Pharmacy Worker Burnout",
          body: "Burnout among pharmacy professionals has reached crisis levels globally, and the Caribbean is no exception. Long hours, high prescription volumes, understaffing, and the constant pressure to avoid errors create chronic stress. In small Caribbean pharmacies where there is no backup staff, technicians may work through illness, skip breaks, and take on responsibilities beyond their scope. This is not dedication — it is a safety risk. A burned-out technician is more likely to make errors, less likely to report near-misses, and more likely to leave the profession.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Pharmacy Workplace Safety Plan",
        },
        {
          type: "text",
          body: "Every pharmacy should have a written workplace safety plan — a concise document that identifies the specific hazards present in that pharmacy and the measures in place to control them. For a Caribbean community pharmacy, a basic workplace safety plan should cover: hazardous drug handling procedures, infection control protocols, emergency procedures (fire, hurricane, robbery), spill management, PPE requirements and availability, ergonomic measures, and staff health and wellbeing provisions.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Hazard identification — walk through the pharmacy and list all physical, chemical, biological, and ergonomic hazards",
            "Risk assessment — for each hazard, assess the likelihood of exposure and severity of potential harm",
            "Control measures — for each risk, document the prevention strategy (elimination, substitution, engineering controls, administrative controls, PPE)",
            "Emergency procedures — fire evacuation, hurricane preparedness, power outage protocols, robbery response",
            "Training requirements — document which staff need training on which safety topics, and when",
            "Review schedule — the safety plan should be reviewed and updated annually, or whenever a significant change occurs",
          ],
        },
        {
          type: "island-comparison",
          title: "Occupational Health Legislation in the Caribbean",
          description:
            "Occupational safety and health legislation varies across the Caribbean. Pharmacy professionals should know the framework in their jurisdiction.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Occupational Safety and Health Act (OSHA TT), 2004 — comprehensive occupational health legislation",
                "The OSH Agency enforces workplace safety standards across all industries including healthcare",
                "Employers are legally required to provide a safe workplace, PPE, and safety training",
                "Pharmacy-specific occupational health guidelines are limited; general healthcare standards apply",
                "Workers can refuse unsafe work without reprisal under the Act",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Occupational Safety and Health Act, 2017 — modernised Jamaica's workplace safety framework",
                "The Ministry of Labour and Social Security enforces OSH standards",
                "Employer obligations include risk assessment, safety training, and incident reporting",
                "Healthcare sector occupational health is addressed under general industry standards",
                "Jamaica's OSH framework is considered among the most comprehensive in CARICOM",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Safety and Health at Work Act, 2005 — governs workplace safety across all sectors",
                "The Labour Department enforces compliance",
                "Employers must ensure the health, safety, and welfare of employees at work",
                "Occupational health standards for pharmacies are embedded in general healthcare workplace requirements",
                "Barbados is developing updated guidance for chemical handling in healthcare settings",
              ],
            },
          ],
        },
        {
          type: "case-study",
          title: "Case Study: The Methotrexate Spill",
          scenario:
            "A pharmacy technician in a community pharmacy in Port of Spain, Trinidad, is counting methotrexate 2.5 mg tablets using a standard counting tray. While transferring the tablets from the stock bottle to the tray, she drops the bottle, scattering tablets across the dispensing bench and floor. Several tablets break on impact, generating visible dust. The technician is not wearing gloves. Another technician, who is pregnant, is working at the adjacent bench two metres away. There is no spill kit available. The pharmacy has never conducted hazardous drug training.",
          questions: [
            "What immediate actions should be taken to protect the technician and her pregnant colleague?",
            "Why is methotrexate classified as a hazardous drug, and what are the specific risks of exposure?",
            "What systemic failures does this scenario reveal?",
            "Design a hazardous drug handling protocol that would have prevented this situation.",
          ],
          discussion:
            "Immediate actions: the pregnant technician should leave the area immediately. The exposed technician should not touch the broken tablets with bare hands — she should wash any exposed skin, then use available materials (paper towels, gloves from the first aid kit) to carefully contain the spill. All contaminated surfaces should be wiped with wet paper towels (to trap dust rather than spread it). Methotrexate is an antimetabolite classified as hazardous by NIOSH — occupational exposure can cause reproductive toxicity, liver damage, and bone marrow suppression. Systemic failures include: no hazardous drug training, no PPE available for hazardous drug handling, no spill kit, no dedicated counting tray for hazardous drugs, no policy for reassigning pregnant staff away from hazardous drug tasks, and no facility-specific hazardous drug list. A comprehensive protocol would address all of these gaps.",
        },
        {
          type: "knowledge-check",
          question: "A pharmacy technician who is pregnant should be:",
          options: [
            "Assigned to handle hazardous drugs because pregnancy does not affect drug handling safety",
            "Reassigned away from all hazardous drug handling tasks due to reproductive toxicity risk",
            "Required to wear standard gloves while continuing to handle hazardous drugs",
            "Placed on unpaid leave until after delivery",
          ],
          correctIndex: 1,
          explanation:
            "Pregnant pharmacy staff (and those attempting to conceive or breastfeeding) should be reassigned away from hazardous drug handling tasks. Occupational exposure to certain hazardous drugs — particularly antineoplastics like methotrexate and cyclophosphamide — is associated with increased risk of miscarriage, congenital abnormalities, and reproductive harm. Standard gloves are NOT adequate protection; reassignment is the correct approach.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m8-q1",
      question: "USP Chapter <800> specifically addresses:",
      options: [
        "Sterile compounding procedures",
        "Non-sterile compounding procedures",
        "Hazardous drug handling in healthcare settings",
        "Patient counselling standards",
      ],
      correctIndex: 2,
      explanation:
        "USP Chapter <800> — Hazardous Drugs: Handling in Healthcare Settings — provides comprehensive standards for the safe receiving, storing, preparing, dispensing, and disposing of hazardous drugs. USP <795> covers non-sterile compounding, and USP <797> covers sterile compounding.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m8-q2",
      question: "Which of the following drugs, commonly stocked in Caribbean community pharmacies, is classified as hazardous by NIOSH?",
      options: [
        "Paracetamol (acetaminophen)",
        "Methotrexate",
        "Amoxicillin",
        "Omeprazole",
      ],
      correctIndex: 1,
      explanation:
        "Methotrexate is a NIOSH-listed hazardous drug commonly stocked in Caribbean community pharmacies for conditions including rheumatoid arthritis, psoriasis, and ectopic pregnancy. It is an antimetabolite with teratogenic, mutagenic, and immunosuppressive properties — making occupational exposure a significant health risk. Paracetamol, amoxicillin, and omeprazole are not classified as hazardous drugs.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m8-q3",
      question: "What is the recommended minimum frequency for disinfecting high-touch surfaces in a Caribbean community pharmacy?",
      options: [
        "Once daily at closing time",
        "Once weekly during deep cleaning",
        "At least every 2 hours during operating hours",
        "Only when a surface is visibly soiled",
      ],
      correctIndex: 2,
      explanation:
        "High-touch surfaces — including the dispensing counter, card payment terminal, telephone, computer keyboard, and door handles — should be disinfected at least every 2 hours during operating hours. This frequency, established as standard practice during the COVID-19 pandemic, should be maintained permanently as a baseline infection control measure.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m8-q4",
      question: "A pharmacy technician experiences persistent lower back pain from standing for 8-hour shifts. This is classified as what type of occupational hazard?",
      options: [
        "Chemical hazard",
        "Biological hazard",
        "Ergonomic hazard",
        "Psychosocial hazard",
      ],
      correctIndex: 2,
      explanation:
        "Lower back pain from prolonged standing is an ergonomic hazard — related to the physical demands and workplace design of the pharmacy. Prevention measures include anti-fatigue mats, proper workstation height, scheduled sitting breaks, supportive footwear, and task rotation to vary posture throughout the shift.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m8-q5",
      questionType: "multiple_select",
      question: "Which of the following are components of a pharmacy workplace safety plan? (Select all that apply)",
      options: [
        "Hazard identification and risk assessment",
        "Emergency procedures (fire, hurricane, robbery)",
        "Staff holiday scheduling",
        "Hazardous drug handling protocols",
        "PPE requirements and availability",
      ],
      correctIndex: 0,
      questionData: {
        correct_indices: [0, 1, 3, 4],
      },
      explanation:
        "A pharmacy workplace safety plan should include hazard identification/risk assessment, emergency procedures, hazardous drug handling protocols, PPE requirements, infection control measures, ergonomic provisions, and training requirements. Staff holiday scheduling, while important for operations, is not a component of the workplace safety plan.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m8-q6",
      question: "Why should Caribbean pharmacies maintain the transparent barrier screens installed during the COVID-19 pandemic?",
      options: [
        "They are legally required by all Caribbean pharmacy boards",
        "They protect staff from respiratory droplets year-round, not just during pandemics",
        "They prevent patients from stealing medications from the counter",
        "They improve the aesthetic appearance of the pharmacy",
      ],
      correctIndex: 1,
      explanation:
        "Transparent barrier screens provide year-round protection against respiratory droplets during face-to-face interactions. Respiratory infections — including influenza, COVID-19, and other viral illnesses — are transmitted through droplets and aerosols during close-range conversations. The screens reduce staff exposure during every patient interaction, not just during declared pandemics.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m8-q7",
      question: "When a hazardous drug spill occurs in a Caribbean pharmacy, the first priority is to:",
      options: [
        "Clean up the spill immediately with a wet mop",
        "Evacuate the entire pharmacy and call emergency services",
        "Ensure anyone not wearing appropriate PPE moves away from the spill area, especially pregnant or immunocompromised staff",
        "Photograph the spill for documentation purposes",
      ],
      correctIndex: 2,
      explanation:
        "The immediate priority during a hazardous drug spill is to protect people — particularly those without PPE, pregnant staff, and immunocompromised individuals — by moving them away from the spill area. Only after personnel are safe should spill containment and cleanup begin, using a designated spill kit and appropriate PPE. Documentation is important but is never the first priority.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m8-q8",
      questionType: "true_false",
      question: "Standard latex examination gloves provide adequate protection when handling hazardous drugs such as methotrexate.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "False. Standard latex examination gloves are thinner and more permeable to hazardous drug residue than chemotherapy-rated gloves. USP <800> requires chemotherapy-rated gloves (tested for permeation resistance to hazardous drugs) as the minimum PPE for handling hazardous drugs, even for routine tasks like receiving intact packages.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m8-q9",
      question: "Which of the following best describes 'standard precautions' in infection control?",
      options: [
        "Special measures taken only when a patient is known to be infectious",
        "The minimum infection prevention practices applied to ALL patient/client care regardless of infection status",
        "Emergency protocols activated during a disease outbreak",
        "Precautions specific to handling controlled substances",
      ],
      correctIndex: 1,
      explanation:
        "Standard precautions are the minimum infection prevention practices applied to all patient/client care, regardless of suspected or confirmed infection status. They include hand hygiene, appropriate PPE use, respiratory hygiene, safe sharps handling, and environmental cleaning. The principle is to treat every interaction as potentially infectious.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m8-q10",
      question: "Pharmacy worker burnout is classified as which type of occupational hazard?",
      options: [
        "Chemical hazard",
        "Ergonomic hazard",
        "Biological hazard",
        "Psychosocial hazard",
      ],
      correctIndex: 3,
      explanation:
        "Burnout is a psychosocial hazard — arising from workplace conditions including high workload, time pressure, error anxiety, understaffing, and inadequate support. Psychosocial hazards affect mental health and wellbeing, and have been shown to increase medication error rates, reduce error reporting, and drive pharmacy professionals out of the profession.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// FULL COURSE ASSEMBLY
// ============================================================================

const qualitySafetyCourse: FullCourse = {
  courseId: "quality-assurance-safety",
  title: "Quality Assurance & Safety",
  tagline: "Build a culture of safety and continuous improvement in Caribbean pharmacy practice",
  modules: [module1, module2, module3, module4, module5, module6, module7, module8],
};

// ── Utility helpers ─────────────────────────────────────────────────────────

export const totalLessons = qualitySafetyCourse.modules.reduce(
  (sum, m) => sum + m.lessons.length,
  0,
);

export const totalQuizQuestions = qualitySafetyCourse.modules.reduce(
  (sum, m) => sum + m.quiz.length,
  0,
);

export default qualitySafetyCourse;
