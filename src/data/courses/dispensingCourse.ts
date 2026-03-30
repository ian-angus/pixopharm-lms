// ============================================================================
// PIXOPHARM LMS — Dispensing & Medication Management (I1)
// Full Course Content: 8 Modules, 28 Lessons, ~80 Quiz Questions
// Focus Islands: Trinidad & Tobago, Jamaica, Barbados, Grenada, CARICOM region
// ============================================================================

import type { Module, FullCourse } from '../types';

// ============================================================================
// MODULE 1 — The Dispensing Process: Receiving, Verifying & Labeling
// ============================================================================

const module1: Module = {
  id: "m1-dispensing-process",
  number: 1,
  title: "The Dispensing Process: Receiving, Verifying & Labeling",
  description:
    "Master the complete dispensing workflow from the moment a prescription arrives at the pharmacy window to the final patient handoff. This module covers prescription interpretation, verification checkpoints, labelling standards, and the critical role of the pharmacy technician in preventing dispensing errors within Caribbean pharmacy settings.",
  learningObjectives: [
    "Describe the complete dispensing process from prescription receipt to patient handoff in a Caribbean pharmacy",
    "Identify the critical verification checkpoints required before dispensing a medication",
    "Interpret common prescription formats used across Trinidad & Tobago, Jamaica, and Barbados",
    "Apply correct labelling standards in accordance with Caribbean pharmacy regulations",
    "Evaluate prescriptions for completeness, legality, and potential safety concerns",
  ],
  lessons: [
    // ── Lesson 1.1 ──
    {
      id: "m1-l1",
      title: "Receiving & Interpreting Prescriptions",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Prescription as a Legal Document",
        },
        {
          type: "text",
          body: "A prescription is far more than a request for medication — it is a legal document that authorises the dispensing of a specific drug to a specific patient. In the Caribbean, prescriptions may arrive in various formats: handwritten on a doctor's letterhead, printed from an electronic medical record, telephoned in by a prescriber, or transmitted electronically where systems allow. Regardless of the format, every prescription must contain certain mandatory elements before it can be dispensed.",
        },
        {
          type: "text",
          body: "As a pharmacy technician, you are the first line of defence in catching incomplete, illegible, or potentially fraudulent prescriptions. Your ability to accurately read and interpret prescriptions directly impacts patient safety. In the Caribbean context, where many prescriptions are still handwritten, this skill is particularly critical.",
        },
        {
          type: "key-term",
          term: "Prescription",
          definition:
            "A written, electronic, or verbal order from an authorised prescriber directing the dispensing of a specific medication to a named patient. In the Caribbean, authorised prescribers typically include registered medical practitioners, dentists, and in some jurisdictions, nurse practitioners with prescriptive authority.",
        },
        {
          type: "heading",
          level: 3,
          text: "Mandatory Elements of a Valid Prescription",
        },
        {
          type: "table",
          caption: "Required Prescription Elements Across Caribbean Jurisdictions",
          headers: ["Element", "Description", "Why It Matters"],
          rows: [
            [
              "Patient name",
              "Full legal name of the patient",
              "Prevents dispensing to the wrong person; required for record-keeping",
            ],
            [
              "Patient address",
              "Residential address (required in most jurisdictions)",
              "Assists in identity verification; required for controlled substances",
            ],
            [
              "Date",
              "Date the prescription was written",
              "Determines validity period; most prescriptions expire after 3–6 months depending on jurisdiction",
            ],
            [
              "Drug name",
              "Generic (INN) or brand name of the medication",
              "Identifies the exact medication to be dispensed",
            ],
            [
              "Strength & dose",
              "Amount of drug per dose unit (e.g., 500 mg)",
              "Prevents dosing errors; must match available formulations",
            ],
            [
              "Directions (Sig)",
              "How the patient should take the medication (e.g., 'Take one tablet twice daily')",
              "Guides the patient in correct medication use",
            ],
            [
              "Quantity",
              "Total amount to dispense (e.g., '30 tablets' or 'one month supply')",
              "Controls supply duration; critical for controlled substances",
            ],
            [
              "Prescriber details",
              "Name, qualification, registration number, signature, and contact information",
              "Establishes legal authority to prescribe; enables verification",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Illegible Prescriptions — Never Guess",
          body: "If any part of a prescription is illegible or ambiguous, NEVER guess. Always contact the prescriber to clarify. Guessing is a leading cause of dispensing errors. In a 2019 Caribbean pharmacy error review, approximately 22% of dispensing errors were linked to misread handwritten prescriptions. When in doubt, call the doctor's office.",
        },
        {
          type: "text",
          body: "When receiving a prescription at the window, follow a systematic approach: greet the patient, accept the prescription, perform an initial visual scan for completeness, check the date, verify the prescriber's details, and confirm the patient's identity. This initial triage takes only seconds but can prevent significant errors downstream.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Greet the patient and accept the prescription courteously",
            "Perform an initial visual scan — is the prescription legible and complete?",
            "Check the date — is the prescription still valid?",
            "Verify the prescriber — is the signature present and the registration number identifiable?",
            "Confirm patient identity — does the name match and is the address provided?",
            "Check for controlled substance indicators — does the prescription require special handling?",
            "Inform the patient of the estimated wait time",
          ],
        },
        {
          type: "knowledge-check",
          question:
            "A patient presents a handwritten prescription dated seven months ago for amoxicillin 500 mg capsules. The prescription appears complete in all other respects. What should you do?",
          options: [
            "Dispense the medication as the prescription is otherwise complete",
            "Refuse to dispense and advise the patient that the prescription has expired",
            "Contact the prescriber to verify whether a new prescription is needed",
            "Dispense half the quantity as a compromise",
          ],
          correctIndex: 1,
          explanation:
            "In most Caribbean jurisdictions, prescriptions for non-controlled medications are valid for 3 to 6 months from the date written. A seven-month-old prescription has expired. The patient should be advised to return to their doctor for a new prescription. Dispensing expired prescriptions is a legal violation.",
        },
      ],
    },
    // ── Lesson 1.2 ──
    {
      id: "m1-l2",
      title: "Verification Checkpoints & Safety Screens",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Building Safety Into Every Dispensing Step",
        },
        {
          type: "text",
          body: "Dispensing errors can cause serious patient harm, from allergic reactions to fatal overdoses. The verification process is a series of systematic checkpoints designed to catch errors before the medication reaches the patient. In a well-run Caribbean pharmacy, at least three independent checks occur before a medication is handed to the patient.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Three-Check System",
        },
        {
          type: "text",
          body: "The three-check system is the gold standard for dispensing safety. Each check involves verifying the same five elements — the 'Five Rights': Right Patient, Right Drug, Right Dose, Right Route, and Right Time. The three checks occur at different points in the dispensing workflow, creating multiple opportunities to catch errors.",
        },
        {
          type: "key-term",
          term: "Five Rights of Medication Dispensing",
          definition:
            "A safety framework requiring verification of the Right Patient, Right Drug, Right Dose, Right Route, and Right Time at every dispensing checkpoint. Some expanded versions add Right Documentation, Right Reason, and Right Response.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "CHECK 1 — When selecting the medication from the shelf: Verify drug name, strength, dosage form, and expiry date against the prescription",
            "CHECK 2 — When preparing/counting the medication: Re-verify the drug, count the correct quantity, and confirm the directions match the prescription",
            "CHECK 3 — Final pharmacist verification before patient handoff: The pharmacist independently verifies the prescription, the prepared medication, and the label",
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Look-Alike, Sound-Alike (LASA) Medications",
          body: "LASA medications are drugs with names that look or sound similar, creating a high risk of selection errors. Common Caribbean examples include: metformin vs. metoprolol, losartan vs. lisinopril, hydroxyzine vs. hydralazine, prednisolone vs. prednisone. Always read the full drug name and strength — never select a medication based on a partial match or shelf position alone.",
        },
        {
          type: "text",
          body: "In addition to the three physical checks, modern Caribbean pharmacies increasingly use electronic verification aids. Barcode scanning at the point of dispensing can match the scanned product to the prescription data entry, providing an additional layer of safety. However, technology should supplement — never replace — the technician's vigilance.",
        },
        {
          type: "heading",
          level: 3,
          text: "Drug Interaction & Allergy Screening",
        },
        {
          type: "text",
          body: "Before dispensing, the patient's medication history should be checked for potential drug interactions, duplicate therapies, and known allergies. In pharmacies using dispensing software, these alerts may be generated automatically. In pharmacies using manual systems, the technician must flag any concerns to the pharmacist. Common interactions seen in Caribbean practice include warfarin with NSAIDs (widely available OTC), ACE inhibitors with potassium-sparing diuretics, and metformin with contrast dye procedures.",
        },
        {
          type: "case-study",
          title: "Case Study: The Near Miss at a Port of Spain Pharmacy",
          scenario:
            "A pharmacy technician at a busy community pharmacy in Port of Spain receives a prescription for 'Amlodipine 10 mg, one tablet daily.' While pulling the medication from the shelf, she notices that the amlodipine 10 mg and the amiloride 5 mg tablets are stored in adjacent bins. The bottles look similar in size and colour. She almost picks up the amiloride before catching the error on her second check.",
          questions: [
            "What aspects of the pharmacy's storage system contributed to this near miss?",
            "How could the three-check system help prevent this type of LASA error?",
            "What changes would you recommend to prevent similar near misses in the future?",
          ],
          discussion:
            "This near miss illustrates the danger of LASA medications stored in adjacent locations. Best practice is to separate LASA medications physically, use tall-man lettering on shelf labels (e.g., amLODIPine vs. aMILoride), apply auxiliary warning stickers, and ensure that the three-check system is followed rigorously. The technician's vigilance during Check 1 prevented a potentially harmful error.",
        },
        {
          type: "knowledge-check",
          question:
            "At which point in the dispensing process does the pharmacist perform the final independent verification?",
          options: [
            "When the technician first receives the prescription at the window",
            "When the medication is selected from the shelf",
            "After the medication is prepared, labelled, and ready for patient handoff",
            "Only when the patient asks a clinical question",
          ],
          correctIndex: 2,
          explanation:
            "The pharmacist's final verification (Check 3) occurs after the medication has been fully prepared, counted, and labelled by the technician. The pharmacist independently reviews the prescription against the prepared product before it is released to the patient. This is a legal requirement in most Caribbean jurisdictions.",
        },
      ],
    },
    // ── Lesson 1.3 ──
    {
      id: "m1-l3",
      title: "Labelling Standards & Patient Information",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Label as a Patient Safety Tool",
        },
        {
          type: "text",
          body: "The prescription label is the primary source of medication information for the patient after they leave the pharmacy. A well-designed, accurate label can prevent misuse, improve adherence, and save lives. A poorly prepared label — with incorrect directions, missing warnings, or confusing language — can cause serious harm. In the Caribbean, where health literacy varies widely, clear labelling is especially important.",
        },
        {
          type: "heading",
          level: 3,
          text: "Mandatory Label Elements",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Pharmacy name, address, and telephone number",
            "Patient's full name",
            "Date of dispensing",
            "Prescription number (for tracking and refills)",
            "Drug name (generic and/or brand) and strength",
            "Quantity dispensed",
            "Directions for use in plain language (not Latin abbreviations)",
            "Prescriber's name",
            "Expiry date or beyond-use date",
            "Auxiliary warnings (e.g., 'Take with food', 'May cause drowsiness', 'Keep refrigerated')",
            "Dispensing pharmacist's initials or identification",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Plain Language Directions",
          body: "Always translate sig codes into plain, patient-friendly language on the label. For example, 'i tab po bd pc' should appear on the label as 'Take ONE tablet by mouth TWICE daily AFTER meals.' Use uppercase for emphasis on key words. Remember that many Caribbean patients may have limited health literacy — clarity saves lives.",
        },
        {
          type: "key-term",
          term: "Auxiliary Label",
          definition:
            "A supplementary warning label affixed to a medication container to alert the patient to important precautions, such as 'Do not drink alcohol while taking this medication,' 'Keep refrigerated,' or 'May cause drowsiness — avoid driving.' These are colour-coded in many pharmacies (e.g., red for critical warnings, yellow for cautions).",
        },
        {
          type: "island-comparison",
          title: "Labelling Regulations by Island",
          description:
            "While the core elements are similar, specific labelling requirements vary between Caribbean jurisdictions.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Labels must include the pharmacy's registered name and address",
                "The Chemistry, Food and Drugs Division oversees labelling compliance",
                "Controlled substance labels must include additional tracking information",
                "Labels should be in English, the official language",
                "CDAP (Chronic Disease Assistance Programme) medications carry specific labelling identifiers",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "The Pharmacy Council of Jamaica sets labelling standards under the Pharmacy Act",
                "NHF (National Health Fund) subsidised medications require NHF programme identifiers on the label",
                "Labels must clearly state generic name when a brand product is dispensed",
                "Patient directions must be in plain English, not abbreviations",
                "Poison Schedule medications require specific warning labels as per the Dangerous Drugs Act",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "The Barbados Drug Service oversees labelling in the public health system",
                "Labels must include the Barbados National Drug Formulary (BNDF) code where applicable",
                "Patient information leaflets are encouraged alongside the dispensing label",
                "Queen Elizabeth Hospital pharmacy uses standardised electronic labelling",
                "Auxiliary warning labels are mandatory for medications with significant side effects",
              ],
            },
          ],
        },
        {
          type: "text",
          body: "Accurate labelling also serves a legal protection function. If a patient experiences an adverse event, the label provides documentation of exactly what was dispensed and what instructions were given. In medicolegal proceedings, a correctly prepared label demonstrates due diligence. Conversely, a missing or inaccurate label can expose the pharmacy and its staff to liability.",
        },
        {
          type: "knowledge-check",
          question:
            "Which of the following is the BEST way to write directions on a patient's medication label?",
          options: [
            "i tab po tds pc",
            "1T PO 3x daily after food",
            "Take ONE tablet by mouth THREE times daily AFTER meals",
            "As directed by your doctor",
          ],
          correctIndex: 2,
          explanation:
            "Option C uses plain, patient-friendly language with key words capitalised for emphasis. Latin abbreviations (option A) should never appear on patient-facing labels. Shorthand (option B) may be misunderstood. 'As directed' (option D) provides no actual guidance to the patient and should be avoided unless accompanied by verbal counselling and documented appropriately.",
        },
      ],
    },
    // ── Lesson 1.4 ──
    {
      id: "m1-l4",
      title: "Patient Counselling & Handoff",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Final Step: Handing Medication to the Patient",
        },
        {
          type: "text",
          body: "The patient handoff is the final and arguably most important step in the dispensing process. It is the last opportunity to ensure the patient understands how to take their medication correctly. In the Caribbean, where many patients manage multiple chronic conditions such as diabetes and hypertension, effective counselling at the point of dispensing can significantly improve adherence and health outcomes.",
        },
        {
          type: "text",
          body: "While the pharmacist bears primary legal responsibility for patient counselling, the pharmacy technician plays a critical supporting role. Technicians can reinforce key points, answer basic questions about administration, and identify patients who may need additional pharmacist intervention — for example, elderly patients, patients receiving a new medication, or patients who appear confused about their regimen.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Teach-Back Method",
        },
        {
          type: "key-term",
          term: "Teach-Back Method",
          definition:
            "A patient communication technique where the healthcare professional asks the patient to explain, in their own words, how they will take their medication. This confirms understanding without embarrassing the patient. For example: 'Just to make sure I explained it clearly, can you tell me how you'll be taking this medication?'",
        },
        {
          type: "text",
          body: "The teach-back method is especially valuable in Caribbean pharmacy practice. Patients may nod and agree during counselling out of politeness or cultural deference to healthcare professionals, even if they do not fully understand the instructions. The teach-back approach shifts the responsibility to the counsellor ('Let me make sure I explained this clearly') rather than testing the patient ('Do you understand?').",
        },
        {
          type: "callout",
          variant: "info",
          title: "Cultural Sensitivity in Counselling",
          body: "In many Caribbean cultures, patients — particularly older patients — may be reluctant to ask questions or admit confusion when speaking to healthcare professionals. Use open-ended questions, speak at a measured pace, avoid jargon, and create a non-judgmental environment. If the patient has a family member present, include them in the counselling with the patient's permission.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Verify the patient's identity before handing over the medication",
            "State the name and purpose of the medication clearly",
            "Explain the dosing schedule using the label as a visual aid",
            "Highlight any important warnings (food interactions, drowsiness, storage)",
            "Demonstrate administration technique if applicable (inhalers, eye drops, insulin pens)",
            "Use the teach-back method to confirm understanding",
            "Ask if the patient has any questions",
            "Offer the pharmacist's availability for further clinical questions",
            "Document the counselling encounter if required by pharmacy policy",
          ],
        },
        {
          type: "scenario-simulation",
          title: "Dispensing a New Antihypertensive Medication",
          description:
            "You are a pharmacy technician at a community pharmacy in San Fernando, Trinidad. Mrs. Rampersad, a 62-year-old patient, has just been prescribed amlodipine 5 mg for newly diagnosed hypertension. She appears anxious and mentions she has never taken 'pressure tablets' before.",
          nodes: [
            {
              id: "start",
              text: "Mrs. Rampersad approaches the collection counter. You have her labelled medication ready. How do you begin the handoff?",
              choices: [
                {
                  label: "Hand her the bag and say 'Here's your medication, take one tablet daily.'",
                  nextNodeId: "rushed",
                  feedback:
                    "This is too brief. A patient receiving a new chronic medication needs more thorough counselling, especially if they appear anxious.",
                },
                {
                  label: "Verify her identity, then explain the medication name, purpose, and how to take it.",
                  nextNodeId: "good-start",
                  feedback:
                    "Excellent. You've started with identity verification and are taking the time to counsel a new patient on their medication.",
                  isOptimal: true,
                },
                {
                  label: "Ask her to wait for the pharmacist because you're not allowed to speak to patients.",
                  nextNodeId: "defer",
                  feedback:
                    "While the pharmacist should be involved in counselling for new medications, technicians can and should support the handoff process. You don't need to defer entirely.",
                },
              ],
            },
            {
              id: "rushed",
              text: "Mrs. Rampersad takes the bag but looks uncertain. She asks 'What does this do, exactly?' What do you do?",
              choices: [
                {
                  label: "Slow down and explain that amlodipine helps lower blood pressure, and walk through the label with her.",
                  nextNodeId: "recovery",
                  feedback:
                    "Good recovery. You recognised the patient's need for more information and adjusted your approach.",
                  isOptimal: true,
                },
                {
                  label: "Tell her to read the label and the patient information leaflet at home.",
                  nextNodeId: "fail",
                  feedback:
                    "This is inadequate. The patient has expressed confusion and needs face-to-face guidance, not a referral to paperwork.",
                },
              ],
            },
            {
              id: "good-start",
              text: "After explaining the medication, Mrs. Rampersad says 'But my neighbour takes pressure tablets and she feels dizzy. Will I feel dizzy too?' How do you respond?",
              choices: [
                {
                  label: "Acknowledge her concern, explain that some dizziness is possible when starting, and advise her to rise slowly from sitting. Suggest she contact the pharmacy or doctor if dizziness persists.",
                  nextNodeId: "success",
                  feedback:
                    "Well done. You addressed her concern honestly, provided practical advice, and gave a safety net by offering follow-up contact.",
                  isOptimal: true,
                },
                {
                  label: "Tell her not to worry — amlodipine is very safe and she won't have any problems.",
                  nextNodeId: "partial",
                  feedback:
                    "While reassurance is appropriate, dismissing a valid concern is not. Dizziness is a known side effect of amlodipine, and the patient deserves an honest, supportive response.",
                },
              ],
            },
            {
              id: "defer",
              text: "The pharmacist is busy with another patient and won't be available for 20 minutes. Mrs. Rampersad looks impatient. What do you do?",
              choices: [
                {
                  label: "Begin the handoff yourself — verify identity, explain the medication basics, and inform the pharmacist when available for clinical questions.",
                  nextNodeId: "good-start",
                  feedback:
                    "Good decision. You're operating within your scope while still involving the pharmacist for clinical matters.",
                  isOptimal: true,
                },
                {
                  label: "Ask Mrs. Rampersad to come back later when the pharmacist is free.",
                  nextNodeId: "fail",
                  feedback:
                    "Asking a patient to return later for their medication is poor service and could delay treatment. The technician can begin the handoff process.",
                },
              ],
            },
            {
              id: "recovery",
              text: "After explaining the medication more thoroughly, Mrs. Rampersad nods but still looks uncertain. You use the teach-back method: 'Just so I know I explained it well — can you tell me how you'll take this tablet?' She correctly repeats 'One tablet every morning.' You've recovered the interaction well.",
              isEnd: true,
              outcome: "partial",
              summary:
                "You initially rushed the handoff but recovered by listening to the patient's cues and slowing down. The teach-back confirmed her understanding. In future, lead with thorough counselling for new medications from the start.",
            },
            {
              id: "success",
              text: "Mrs. Rampersad smiles and says 'Thank you, that makes me feel better.' You use the teach-back method and she correctly describes her dosing. You note on the prescription that patient counselling was provided and offer the pharmacist for any further questions. Excellent patient care.",
              isEnd: true,
              outcome: "success",
              summary:
                "Outstanding handoff. You verified identity, explained the medication clearly, addressed the patient's concern with honesty and empathy, used the teach-back method, and documented the counselling. This is gold-standard practice.",
            },
            {
              id: "partial",
              text: "Mrs. Rampersad accepts the medication but calls back two days later reporting dizziness and asking if she should stop the medication. The pharmacist must now provide the counselling that should have happened at handoff.",
              isEnd: true,
              outcome: "partial",
              summary:
                "The patient experienced a known side effect that she was not adequately warned about. While amlodipine is generally safe, patients deserve honest information about potential side effects so they can manage them and don't stop treatment abruptly.",
            },
            {
              id: "fail",
              text: "Mrs. Rampersad leaves the pharmacy confused about her medication. She does not take it as directed, misses doses, and her blood pressure remains uncontrolled at her follow-up appointment. The doctor calls the pharmacy to ask why the patient was not counselled.",
              isEnd: true,
              outcome: "failure",
              summary:
                "Failure to provide adequate counselling resulted in poor medication adherence and uncontrolled blood pressure. Every patient — especially those starting a new medication — deserves a clear, patient explanation at the handoff. This is a core competency of the dispensing process.",
            },
          ],
        },
        {
          type: "knowledge-check",
          question:
            "What is the primary purpose of the teach-back method in patient counselling?",
          options: [
            "To test whether the patient is intelligent enough to take the medication",
            "To confirm that the healthcare professional explained the information clearly",
            "To save time by getting the patient to repeat the label back",
            "To satisfy a legal documentation requirement",
          ],
          correctIndex: 1,
          explanation:
            "The teach-back method places the responsibility on the counsellor, not the patient. The phrasing 'Let me make sure I explained that clearly' avoids embarrassing the patient while confirming that the key information was communicated effectively. It is a patient-centred communication technique, not a test of intelligence.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m1-q1",
      question:
        "Which of the following is NOT a mandatory element on a Caribbean prescription?",
      options: [
        "Patient's full name",
        "Date the prescription was written",
        "Patient's blood type",
        "Prescriber's registration number",
      ],
      correctIndex: 2,
      explanation:
        "A patient's blood type is not required on a prescription. Mandatory elements include the patient's name, address, date, drug details (name, strength, dose, quantity), directions, and prescriber identification (name, qualification, registration number, signature).",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q2",
      question:
        "The 'Five Rights' of medication dispensing include Right Patient, Right Drug, Right Dose, Right Route, and what fifth element?",
      options: [
        "Right Price",
        "Right Time",
        "Right Pharmacy",
        "Right Insurance",
      ],
      correctIndex: 1,
      explanation:
        "The Five Rights are: Right Patient, Right Drug, Right Dose, Right Route, and Right Time. These five elements must be verified at every checkpoint in the dispensing process to prevent errors.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q3",
      question:
        "True or False: In most Caribbean jurisdictions, a pharmacy technician can perform the final verification check on a prescription without pharmacist oversight.",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "False. In Trinidad & Tobago, Jamaica, Barbados, and most Caribbean jurisdictions, the final verification (Check 3) must be performed by a registered pharmacist. Technicians prepare and assist, but the pharmacist provides the legal final check before the medication is released to the patient.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q4",
      question:
        "A patient presents a prescription written by a general practitioner six months ago for metformin 500 mg. Your jurisdiction allows prescriptions to be valid for up to 6 months. The prescription is illegible in the 'quantity' field. What should you do?",
      options: [
        "Dispense a standard 30-day supply since that is most common",
        "Ask the patient how many tablets they usually receive",
        "Contact the prescriber to clarify the illegible quantity before dispensing",
        "Dispense the full bottle and note the discrepancy on file",
      ],
      correctIndex: 2,
      explanation:
        "When any part of a prescription is illegible, the only safe and legal course of action is to contact the prescriber for clarification. Never guess, assume a standard quantity, or rely on the patient's recollection — the prescriber's intent must be confirmed directly.",
      questionType: "scenario",
      questionData: {
        context:
          "You are working at a community pharmacy in Kingston, Jamaica. A regular patient arrives with a prescription that is difficult to read.",
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q5",
      question:
        "Which of the following are examples of Look-Alike, Sound-Alike (LASA) medication pairs? Select ALL that apply.",
      options: [
        "Metformin and Metoprolol",
        "Paracetamol and Ibuprofen",
        "Losartan and Lisinopril",
        "Hydroxyzine and Hydralazine",
        "Amoxicillin and Doxycycline",
      ],
      correctIndex: 0,
      explanation:
        "Metformin/Metoprolol, Losartan/Lisinopril, and Hydroxyzine/Hydralazine are all well-known LASA pairs because their names look or sound similar. Paracetamol/Ibuprofen and Amoxicillin/Doxycycline are not LASA pairs — their names are sufficiently distinct.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 2, 3],
      },
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m1-q6",
      question:
        "Which labelling practice is MOST appropriate for a patient with limited health literacy?",
      options: [
        "Writing directions as 'i tab po bd pc' to save label space",
        "Using 'Take ONE tablet by mouth TWICE daily AFTER meals' with capitalised key words",
        "Printing 'As directed' since the doctor already explained the medication",
        "Writing in the patient's first language regardless of official pharmacy language requirements",
      ],
      correctIndex: 1,
      explanation:
        "Plain language with capitalised key words is the gold standard for patient-facing labels. Latin abbreviations should never appear on patient labels. 'As directed' provides no guidance. While linguistic accommodation is important, labels should comply with local regulatory requirements, with verbal counselling in the patient's preferred language.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m1-q7",
      question:
        "Arrange the following dispensing steps in the correct order.",
      options: [
        "Pharmacist performs final verification",
        "Technician selects medication from shelf and verifies against prescription",
        "Receive and triage the prescription at the window",
        "Prepare, count, and label the medication",
        "Hand off medication to patient with counselling",
      ],
      correctIndex: 0,
      explanation:
        "The correct order is: (1) Receive and triage the prescription, (2) Select medication from shelf and verify, (3) Prepare, count, and label, (4) Pharmacist performs final verification, (5) Hand off to patient with counselling.",
      questionType: "ordering",
      questionData: {
        correct_order: [2, 1, 3, 0, 4],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q8",
      question:
        "Under Trinidad & Tobago's CDAP programme, what special labelling requirement applies to dispensed medications?",
      options: [
        "Labels must be printed in red ink",
        "Labels must include CDAP programme identifiers",
        "Labels must include the patient's National ID number",
        "Labels must be in both English and Spanish",
      ],
      correctIndex: 1,
      explanation:
        "CDAP (Chronic Disease Assistance Programme) medications dispensed in Trinidad & Tobago carry specific programme identifiers on their labels. This helps track programme utilisation and ensures accountability in the provision of free chronic disease medications.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q9",
      question:
        "Match each dispensing checkpoint with its primary purpose.",
      options: [
        "Check 1 → Correct drug selected from shelf",
        "Check 2 → Correct quantity counted and label accurate",
        "Check 3 → Independent pharmacist verification before release",
        "All of the above are correct matches",
      ],
      correctIndex: 3,
      explanation:
        "All three matches are correct. Check 1 verifies the correct drug is selected from the shelf. Check 2 verifies the count and label accuracy during preparation. Check 3 is the pharmacist's independent final verification before the medication is released to the patient.",
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Check 1 — Shelf selection", right: "Verify drug name, strength, form, and expiry" },
          { left: "Check 2 — Preparation", right: "Verify count, label, and directions" },
          { left: "Check 3 — Final review", right: "Independent pharmacist verification" },
        ],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q10",
      question:
        "The teach-back method involves asking the patient to _______________ in their own words.",
      options: [
        "explain how they will take their medication",
        "spell the name of their medication",
        "list all their allergies",
        "describe the colour of each tablet",
      ],
      correctIndex: 0,
      explanation:
        "The teach-back method asks the patient to explain, in their own words, how they will take the medication. This confirms comprehension while placing the responsibility on the counsellor ('Let me make sure I explained it clearly') rather than testing the patient.",
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: [
          "explain how they will take their medication",
          "describe how they will use their medication",
        ],
        case_sensitive: false,
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// MODULE 2 — Inventory Management Principles for Caribbean Pharmacies
// ============================================================================

const module2: Module = {
  id: "m2-inventory-management",
  number: 2,
  title: "Inventory Management Principles for Caribbean Pharmacies",
  description:
    "Learn how to manage pharmaceutical inventory in the unique Caribbean context — where import dependence, tropical climate, limited warehouse space, and unpredictable supply chains demand precise planning. This module covers stock control systems, reorder points, ABC analysis, and cycle counting techniques tailored to island pharmacy operations.",
  learningObjectives: [
    "Explain the importance of effective inventory management in Caribbean pharmacies",
    "Calculate reorder points and economic order quantities for commonly used medications",
    "Apply ABC analysis to classify inventory by value and criticality",
    "Demonstrate proper stock-taking and cycle counting procedures",
    "Evaluate the impact of import delays and seasonal demand on inventory planning",
  ],
  lessons: [
    // ── Lesson 2.1 ──
    {
      id: "m2-l1",
      title: "Why Inventory Management Matters in the Caribbean",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Cost of Getting It Wrong",
        },
        {
          type: "text",
          body: "Inventory management is the backbone of any pharmacy operation, but in the Caribbean it takes on an elevated importance. Unlike pharmacies in large mainland countries where overnight restocking from national warehouses is routine, Caribbean pharmacies face unique challenges: nearly all medications are imported, shipping schedules are irregular, hurricane seasons can disrupt supply chains for weeks, and the tropical climate demands careful storage. A stockout of a critical medication — insulin, antiretrovirals, antihypertensives — can be life-threatening when the next shipment is weeks away.",
        },
        {
          type: "text",
          body: "At the same time, overstocking carries its own risks. Medications have expiry dates, and excess stock that expires before it can be dispensed represents a direct financial loss. In tropical climates, heat and humidity accelerate degradation, making overstocking even more costly. The goal is to maintain the 'Goldilocks zone' — enough stock to serve patients reliably, but not so much that wastage and carrying costs become unsustainable.",
        },
        {
          type: "key-term",
          term: "Carrying Cost",
          definition:
            "The total cost of holding inventory over a given period, including storage space, climate control (critical in the Caribbean), insurance, wastage due to expiry, theft, and the opportunity cost of capital tied up in stock. Caribbean pharmacies often have carrying costs 15–25% higher than temperate-climate counterparts due to air conditioning and humidity control requirements.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Caribbean Import Dependence",
          body: "Trinidad & Tobago, Jamaica, and Barbados import over 90% of their pharmaceutical products. This means that inventory management is not just about what's on the shelf — it's about managing lead times of 4 to 12 weeks for international orders, navigating customs clearance, and anticipating demand months in advance. Effective inventory management in this context is part logistics, part forecasting, and part crisis planning.",
        },
        {
          type: "table",
          caption: "Inventory Challenges Unique to Caribbean Pharmacies",
          headers: ["Challenge", "Impact", "Mitigation Strategy"],
          rows: [
            [
              "Long import lead times (4–12 weeks)",
              "Stockouts if demand spikes unexpectedly",
              "Maintain safety stock for essential medicines; use demand forecasting",
            ],
            [
              "Hurricane season (June–November)",
              "Shipping disruptions, port closures, damaged stock",
              "Pre-hurricane buffer stock; emergency supplier agreements",
            ],
            [
              "Tropical heat and humidity",
              "Accelerated degradation; cold chain failures",
              "Climate-controlled storage; temperature monitoring; shorter shelf cycles",
            ],
            [
              "Limited warehouse space",
              "Cannot hold large buffer stock",
              "ABC analysis to prioritise essential items; just-in-time for fast movers",
            ],
            [
              "Foreign exchange fluctuations",
              "Cost of imported medications varies with exchange rates",
              "Hedging strategies; negotiate fixed-price contracts with suppliers",
            ],
          ],
        },
        {
          type: "knowledge-check",
          question:
            "What is the primary reason that Caribbean pharmacies face higher carrying costs than pharmacies in temperate climates?",
          options: [
            "Caribbean pharmacies sell fewer medications overall",
            "Air conditioning and humidity control are required to maintain medication integrity",
            "Caribbean governments impose higher storage taxes",
            "Patients in the Caribbean use more medications per capita",
          ],
          correctIndex: 1,
          explanation:
            "The tropical climate demands continuous air conditioning and humidity control to prevent medication degradation. These climate control costs, combined with the risk of accelerated expiry and cold chain requirements, drive carrying costs 15–25% higher than in temperate regions.",
        },
      ],
    },
    // ── Lesson 2.2 ──
    {
      id: "m2-l2",
      title: "Stock Control Systems: Perpetual vs. Periodic",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Tracking What You Have — In Real Time or Periodically",
        },
        {
          type: "text",
          body: "Stock control systems fall into two broad categories: perpetual and periodic. A perpetual inventory system tracks every stock movement in real time — every item received, dispensed, returned, or written off is recorded immediately. A periodic system counts stock at fixed intervals (weekly, monthly, quarterly) and reconciles against purchasing and dispensing records. Most modern Caribbean pharmacies aim for a perpetual system supported by periodic cycle counts for verification.",
        },
        {
          type: "table",
          caption: "Perpetual vs. Periodic Inventory Systems",
          headers: ["Feature", "Perpetual System", "Periodic System"],
          rows: [
            ["Update frequency", "Real-time with every transaction", "At fixed intervals (weekly, monthly)"],
            ["Accuracy", "High — reflects current stock levels", "Lower — gaps between counts"],
            ["Technology required", "Dispensing software, barcode scanners, POS", "Manual count sheets, basic records"],
            ["Cost to implement", "Higher initial investment", "Lower initial cost"],
            ["Best suited for", "Busy pharmacies, multiple locations, controlled substances", "Small pharmacies with limited technology"],
            ["Stockout prevention", "Automatic reorder alerts when stock falls below threshold", "Relies on manual observation and scheduled counts"],
          ],
        },
        {
          type: "key-term",
          term: "Perpetual Inventory System",
          definition:
            "An inventory tracking method that records every stock movement in real time, providing a continuous, up-to-date picture of stock levels for every item. In pharmacy, this is typically achieved through dispensing software integrated with a point-of-sale system.",
        },
        {
          type: "text",
          body: "In practice, even pharmacies with perpetual systems must conduct periodic physical counts to verify accuracy. Discrepancies arise from dispensing errors not recorded in the system, theft (internal or external), breakage, expiry write-offs not logged, and returns not properly processed. Cycle counting — counting a small portion of inventory each day on a rotating basis — is the most efficient way to maintain accuracy without the disruption of a full physical count.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Cycle Counting Best Practice",
          body: "Divide your entire inventory into sections and count one section per day. High-value and controlled items (Category A) should be counted weekly; moderate-value items (Category B) monthly; low-value items (Category C) quarterly. This ensures that discrepancies are caught early and corrective action can be taken before a stockout occurs.",
        },
        {
          type: "text",
          body: "For controlled substances, the perpetual inventory system is not optional — it is a legal requirement in most Caribbean jurisdictions. Every unit of a controlled substance must be accounted for, from receipt through dispensing to destruction. The Dangerous Drugs register must reconcile with the physical count at all times.",
        },
        {
          type: "knowledge-check",
          question:
            "A pharmacy uses a perpetual inventory system but discovers a discrepancy of 15 tablets during a cycle count of metformin 500 mg. What is the most likely explanation?",
          options: [
            "The software automatically adjusts for wastage",
            "Dispensing transactions or returns were not properly recorded in the system",
            "Perpetual systems are inherently inaccurate and require replacement",
            "The manufacturer shipped fewer tablets than invoiced",
          ],
          correctIndex: 1,
          explanation:
            "The most common cause of discrepancies between a perpetual system and physical count is unrecorded transactions — dispensing errors, returns not logged, breakage not written off, or stock adjustments not entered. This is why regular cycle counting is essential even with a perpetual system.",
        },
      ],
    },
    // ── Lesson 2.3 ──
    {
      id: "m2-l3",
      title: "ABC Analysis & Reorder Point Calculations",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Not All Inventory Is Created Equal",
        },
        {
          type: "text",
          body: "ABC analysis is a classification method that divides inventory into three categories based on value and usage. In the Caribbean pharmacy context, this classification also considers criticality — a low-cost medication that is essential for life (e.g., insulin, ARVs) may be elevated to Category A regardless of its dollar value. The goal is to allocate management attention proportionally: intensive control for the vital few, moderate control for the middle, and basic control for the trivial many.",
        },
        {
          type: "table",
          caption: "ABC Inventory Classification for Caribbean Pharmacies",
          headers: ["Category", "% of Items", "% of Total Value", "Management Level", "Caribbean Examples"],
          rows: [
            [
              "A — Critical/High Value",
              "10–20%",
              "70–80%",
              "Tight control, weekly counts, low safety stock with frequent reorders",
              "Insulin, ARVs, oncology drugs, biological products, controlled substances",
            ],
            [
              "B — Moderate Value",
              "20–30%",
              "15–20%",
              "Moderate control, monthly counts, standard reorder points",
              "Antihypertensives, antibiotics, diabetes medications (oral), inhalers",
            ],
            [
              "C — Low Value/High Volume",
              "50–60%",
              "5–10%",
              "Basic control, quarterly counts, bulk ordering",
              "Paracetamol, OTC cough syrups, bandages, cotton wool, multivitamins",
            ],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Calculating the Reorder Point (ROP)",
        },
        {
          type: "text",
          body: "The reorder point is the inventory level at which a new order must be placed to avoid a stockout. In the Caribbean, where lead times are long and variable, getting this calculation right is critical. The formula accounts for average daily usage, lead time (the time between placing an order and receiving it), and safety stock (a buffer to cover demand variability and supply delays).",
        },
        {
          type: "key-term",
          term: "Reorder Point (ROP)",
          definition:
            "The inventory level that triggers a new purchase order. Calculated as: ROP = (Average Daily Usage × Lead Time in Days) + Safety Stock. For Caribbean pharmacies, lead times typically range from 28 to 84 days for international orders, making safety stock calculations particularly important.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Worked Example — Reorder Point Calculation",
          body: "A pharmacy in Bridgetown, Barbados dispenses an average of 8 tablets of amlodipine 5 mg per day. The lead time for reorder from the international supplier is 42 days (6 weeks). The pharmacy maintains safety stock of 14 days' supply. ROP = (8 × 42) + (8 × 14) = 336 + 112 = 448 tablets. When stock falls to 448 tablets, a new order must be placed.",
        },
        {
          type: "text",
          body: "Safety stock is the buffer that protects against the unexpected: a shipment delayed by customs, a hurricane disrupting port operations, or a sudden spike in demand during a dengue outbreak. Caribbean pharmacies typically maintain higher safety stock levels than their mainland counterparts — 2 to 4 weeks for Category A items, compared to 3 to 7 days in countries with reliable domestic supply chains.",
        },
        {
          type: "knowledge-check",
          question:
            "A pharmacy dispenses an average of 12 units of a medication per day. The lead time is 35 days and the safety stock is set at 10 days' supply. What is the reorder point?",
          options: [
            "420 units",
            "540 units",
            "350 units",
            "120 units",
          ],
          correctIndex: 1,
          explanation:
            "ROP = (Average Daily Usage × Lead Time) + Safety Stock = (12 × 35) + (12 × 10) = 420 + 120 = 540 units. When stock reaches 540 units, a new order must be placed to avoid a stockout before the next delivery arrives.",
        },
      ],
    },
    // ── Lesson 2.4 ──
    {
      id: "m2-l4",
      title: "Demand Forecasting & Seasonal Planning",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Predicting What Patients Will Need — Before They Need It",
        },
        {
          type: "text",
          body: "Demand forecasting is the process of estimating future medication needs based on historical data, seasonal patterns, epidemiological trends, and population health changes. In the Caribbean, demand forecasting is complicated by seasonal disease patterns (dengue peaks in the rainy season, respiratory infections in cooler months), hurricane-related supply disruptions, and government programme changes (such as additions to the CDAP formulary in Trinidad or NHF benefit list in Jamaica).",
        },
        {
          type: "text",
          body: "Effective forecasting combines quantitative data (dispensing records, seasonal trend analysis, population demographics) with qualitative intelligence (upcoming public health campaigns, changes to government formularies, new clinic openings in the catchment area). The technician's daily observation of dispensing patterns is a valuable input — if you notice a gradual increase in demand for salbutamol inhalers, that might signal an emerging respiratory illness trend in the community.",
        },
        {
          type: "table",
          caption: "Seasonal Demand Patterns in the Caribbean",
          headers: ["Season/Event", "Increased Demand For", "Planning Action"],
          rows: [
            [
              "Rainy season (June–November)",
              "Dengue treatments, ORS, paracetamol, mosquito repellent",
              "Increase stock 30–50% above baseline 4 weeks before season",
            ],
            [
              "Hurricane preparedness",
              "Emergency medications, first aid supplies, chronic disease buffer stock",
              "Build 3-month emergency buffer for essential medicines by May",
            ],
            [
              "Back-to-school (September)",
              "Multivitamins, lice treatments, first aid supplies",
              "Increase stock 2–3 weeks before school opening",
            ],
            [
              "Carnival season (Trinidad)",
              "Contraceptives, first aid, hangover remedies, sunscreen",
              "Stock up 2–4 weeks before Carnival Monday and Tuesday",
            ],
            [
              "Christmas/New Year",
              "Antacids, diabetes supplies (dietary excess), first aid",
              "Increase relevant stock in early December",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Government Programme Changes",
          body: "When a medication is added to a government subsidised programme — such as Trinidad's CDAP, Jamaica's NHF, or the Barbados Drug Service formulary — demand can spike dramatically overnight. Monitor government health announcements and pre-order stock in anticipation of formulary changes to avoid being caught with insufficient supply.",
        },
        {
          type: "case-study",
          title: "Case Study: Dengue Outbreak Preparedness in Jamaica",
          scenario:
            "In July 2024, the Ministry of Health in Jamaica issues an alert about a dengue outbreak in the Kingston Metropolitan Area. A community pharmacy in Half Way Tree notices a 300% increase in demand for paracetamol tablets, oral rehydration salts (ORS), and mosquito repellent within 48 hours of the announcement. Their current stock covers only 5 days at the elevated demand rate. The next regular shipment is 3 weeks away.",
          questions: [
            "What immediate steps should the pharmacy take to manage the supply surge?",
            "How could better demand forecasting have prepared this pharmacy for the dengue season?",
            "What role does the NHF programme play in ensuring access to dengue-related treatments?",
          ],
          discussion:
            "This case illustrates the importance of seasonal demand forecasting. Caribbean pharmacies should begin building dengue-season stock in May, before the rainy season peaks. Immediate actions include: contacting alternative local suppliers, requesting emergency stock from the wholesaler, implementing quantity limits per customer to prevent hoarding, and communicating proactively with patients about expected restocking. The NHF may provide emergency allocations through its Essential Drug Programme during declared outbreaks.",
        },
        {
          type: "knowledge-check",
          question:
            "A pharmacy in Trinidad notices a 40% increase in demand for salbutamol inhalers in September. What is the most likely explanation?",
          options: [
            "A manufacturing recall has caused panic buying",
            "The rainy season and back-to-school period are driving increased respiratory illness",
            "The government has removed salbutamol from the CDAP programme",
            "Salbutamol has been reclassified as a controlled substance",
          ],
          correctIndex: 1,
          explanation:
            "September in Trinidad coincides with the peak of the rainy season and the return to school, both of which drive increased respiratory illness — particularly asthma exacerbations in children. This is a predictable seasonal pattern that should be factored into demand forecasting and stock planning.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m2-q1",
      question:
        "What percentage of pharmaceutical products are imported by most Caribbean nations?",
      options: [
        "Approximately 50%",
        "Approximately 70%",
        "Over 90%",
        "Less than 30%",
      ],
      correctIndex: 2,
      explanation:
        "Trinidad & Tobago, Jamaica, Barbados, and most Caribbean nations import over 90% of their pharmaceutical products. This near-total import dependence makes inventory management, lead time planning, and supply chain resilience critical competencies for Caribbean pharmacy professionals.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q2",
      question:
        "In ABC inventory analysis, Category A items typically represent what percentage of total inventory value?",
      options: [
        "5–10%",
        "15–20%",
        "40–50%",
        "70–80%",
      ],
      correctIndex: 3,
      explanation:
        "Category A items represent 10–20% of items but 70–80% of total inventory value. These are the critical, high-value items that require the tightest control — weekly counts, precise reorder points, and careful demand forecasting.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q3",
      question:
        "A pharmacy dispenses 20 units/day of a medication with a 28-day lead time and 7 days' safety stock. What is the reorder point?",
      options: [
        "560 units",
        "700 units",
        "420 units",
        "140 units",
      ],
      correctIndex: 1,
      explanation:
        "ROP = (20 × 28) + (20 × 7) = 560 + 140 = 700 units. When stock reaches 700 units, a new order should be placed.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q4",
      question:
        "True or False: In a perpetual inventory system, physical cycle counts are unnecessary because the software tracks everything automatically.",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "False. Even the best perpetual inventory systems develop discrepancies due to unrecorded transactions, theft, breakage, and data entry errors. Regular cycle counts are essential to verify the accuracy of the perpetual system and catch discrepancies before they cause stockouts.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q5",
      question:
        "Which of the following should be included in demand forecasting for a Caribbean pharmacy? Select ALL that apply.",
      options: [
        "Historical dispensing data",
        "Seasonal disease patterns (dengue, respiratory illness)",
        "Government formulary changes (CDAP, NHF)",
        "Hurricane season preparedness",
        "All of the above",
      ],
      correctIndex: 4,
      explanation:
        "Effective Caribbean pharmacy demand forecasting must incorporate historical dispensing data, seasonal disease patterns, government programme changes, and hurricane season preparedness. All four factors significantly influence medication demand in the region.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 2, 3, 4],
      },
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m2-q6",
      question:
        "Arrange the following ABC analysis categories from MOST management attention required to LEAST.",
      options: [
        "Category C — Low value, high volume",
        "Category A — Critical, high value",
        "Category B — Moderate value",
      ],
      correctIndex: 0,
      explanation:
        "The correct order from most to least management attention is: Category A (critical, high value — weekly counts, tight control), Category B (moderate value — monthly counts, standard control), Category C (low value — quarterly counts, basic control).",
      questionType: "ordering",
      questionData: {
        correct_order: [1, 2, 0],
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q7",
      question:
        "During a cycle count, you discover 50 fewer tablets of atenolol 50 mg than the system shows. What is your FIRST action?",
      options: [
        "Adjust the system count downward to match the physical count",
        "Investigate the discrepancy by reviewing recent dispensing records, returns, and write-offs",
        "Order 50 additional tablets to compensate for the shortage",
        "Report the discrepancy to law enforcement as suspected theft",
      ],
      correctIndex: 1,
      explanation:
        "Before adjusting the system or taking other action, the discrepancy must be investigated. Review recent dispensing records, check for unprocessed returns, verify whether any write-offs or transfers were not logged, and look for data entry errors. Only after the investigation should the system be adjusted, and the cause documented.",
      questionType: "scenario",
      questionData: {
        context: "You are conducting a routine cycle count at a Barbados community pharmacy.",
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q8",
      question:
        "Why should Caribbean pharmacies begin building hurricane-season buffer stock by May?",
      options: [
        "Because medications expire faster in May due to rising temperatures",
        "Because international shipping schedules are reduced in May",
        "Because hurricane season begins in June and lead times of 4–12 weeks mean orders placed in June may not arrive in time",
        "Because May is the end of the Caribbean fiscal year",
      ],
      correctIndex: 2,
      explanation:
        "Hurricane season runs from June to November. Given international lead times of 4–12 weeks, orders must be placed well in advance. Building buffer stock by May ensures that essential medications are on hand before shipping disruptions begin. Waiting until June means orders may not arrive before the first storms.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m2-q9",
      question:
        "Match each inventory management term with its correct definition.",
      options: [
        "Carrying cost → Total cost of holding inventory including storage and climate control",
        "Safety stock → Buffer inventory to cover demand variability and supply delays",
        "Lead time → Time between placing an order and receiving delivery",
        "All matches are correct",
      ],
      correctIndex: 3,
      explanation:
        "All three matches are correct. Carrying cost encompasses all costs of holding inventory. Safety stock is the buffer against uncertainty. Lead time is the ordering-to-delivery interval — typically 4–12 weeks for Caribbean international orders.",
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Carrying cost", right: "Total cost of holding inventory" },
          { left: "Safety stock", right: "Buffer against demand variability and supply delays" },
          { left: "Lead time", right: "Time from order placement to delivery" },
        ],
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q10",
      question:
        "A pharmacy notices a sudden 300% increase in paracetamol demand following a dengue outbreak alert. Which immediate action is LEAST appropriate?",
      options: [
        "Contact alternative local suppliers for emergency stock",
        "Implement quantity limits per customer to prevent hoarding",
        "Continue dispensing without limits until stock runs out completely",
        "Communicate expected restocking timelines to patients",
      ],
      correctIndex: 2,
      explanation:
        "Continuing to dispense without limits during a demand surge is the least appropriate action — it allows hoarding by early customers and leaves later patients without access. The appropriate response includes contacting alternative suppliers, implementing quantity limits, and communicating proactively with patients about restocking timelines.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
  ],
};

// ============================================================================
// MODULE 3 — Procurement & Supply Chain: Importing Medications to the Caribbean
// ============================================================================

const module3: Module = {
  id: "m3-procurement-supply-chain",
  number: 3,
  title: "Procurement & Supply Chain: Importing Medications to the Caribbean",
  description:
    "Understand how medications reach Caribbean pharmacy shelves — from international manufacturers through regional wholesalers, customs clearance, and last-mile delivery. Learn about NIPDEC, OECS PPS, group purchasing, and the unique supply chain vulnerabilities of small island developing states.",
  learningObjectives: [
    "Describe the pharmaceutical supply chain from manufacturer to patient in the Caribbean context",
    "Explain the role of NIPDEC, OECS PPS, and regional procurement bodies in medication supply",
    "Identify the customs and regulatory requirements for importing pharmaceuticals into Caribbean nations",
    "Evaluate the strengths and weaknesses of different procurement models (central, group, independent)",
  ],
  lessons: [
    // ── Lesson 3.1 ──
    {
      id: "m3-l1",
      title: "The Caribbean Pharmaceutical Supply Chain",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "From Factory Floor to Pharmacy Shelf",
        },
        {
          type: "text",
          body: "The journey a medication takes from manufacturer to patient in the Caribbean is longer, more complex, and more vulnerable to disruption than in most developed nations. With virtually no domestic pharmaceutical manufacturing in most Caribbean states, medications must be sourced internationally — primarily from India, the United States, Europe, and increasingly, Latin America. Each link in the supply chain introduces potential delays, cost increases, and quality risks.",
        },
        {
          type: "text",
          body: "The typical supply chain flows as follows: International manufacturer → Export from country of origin → Shipping (sea freight, 2–6 weeks) → Port arrival in Caribbean nation → Customs clearance and regulatory inspection → National wholesaler or distributor → Pharmacy. At each stage, documentation must be verified, cold chain must be maintained where applicable, and regulatory requirements must be met.",
        },
        {
          type: "table",
          caption: "Caribbean Pharmaceutical Supply Chain Stages",
          headers: ["Stage", "Typical Duration", "Key Risks"],
          rows: [
            ["International procurement & order placement", "1–2 weeks", "Currency fluctuations, supplier reliability"],
            ["Manufacturing & quality release", "2–4 weeks", "Production delays, batch failures"],
            ["Sea freight shipping", "2–6 weeks", "Container damage, cold chain breaks, piracy in rare cases"],
            ["Port arrival & customs clearance", "3–14 days", "Documentation delays, regulatory holds, port congestion"],
            ["Distribution to pharmacy", "1–3 days (same island) to 1–2 weeks (inter-island)", "Last-mile logistics, inter-island shipping"],
          ],
        },
        {
          type: "key-term",
          term: "NIPDEC (National Insurance Property Development Company)",
          definition:
            "A state enterprise in Trinidad & Tobago responsible for the procurement and distribution of pharmaceuticals and medical supplies to public health facilities. NIPDEC leverages bulk purchasing power to negotiate lower prices and ensure consistent supply to hospitals and health centres across the country.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Pooled Procurement — Strength in Numbers",
          body: "Caribbean nations individually have limited purchasing power due to small population sizes. Regional pooled procurement initiatives — such as the OECS Pharmaceutical Procurement Service (PPS) and PAHO's Strategic Fund — allow multiple countries to combine their orders, achieving volume discounts of 30–60% compared to individual purchasing. This is critical for ensuring access to affordable medications across the region.",
        },
        {
          type: "text",
          body: "For private pharmacies, procurement may occur through local or regional wholesalers (such as Ansa McAL in Trinidad, Facey Commodity in Jamaica, or various Barbados-based distributors), direct import from international generic manufacturers, or a combination. The choice of procurement channel affects cost, lead time, minimum order quantities, and the range of products available.",
        },
        {
          type: "knowledge-check",
          question:
            "What is the primary advantage of pooled procurement through organisations like the OECS PPS?",
          options: [
            "It eliminates the need for customs clearance",
            "It allows small island nations to achieve volume discounts they could not get independently",
            "It guarantees overnight delivery of all medications",
            "It removes the need for quality testing of imported medications",
          ],
          correctIndex: 1,
          explanation:
            "Pooled procurement combines the purchasing volumes of multiple small nations, giving them collective bargaining power. This results in volume discounts of 30–60% compared to individual country purchasing. However, it does not eliminate customs requirements, guarantee delivery speeds, or remove quality testing obligations.",
        },
      ],
    },
    // ── Lesson 3.2 ──
    {
      id: "m3-l2",
      title: "Customs, Import Licences & Regulatory Compliance",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Getting Medications Through the Gate",
        },
        {
          type: "text",
          body: "Importing pharmaceuticals into any Caribbean nation requires compliance with a complex web of regulations designed to ensure that only safe, effective, and properly documented medications enter the country. The pharmacy technician may not be directly responsible for customs clearance, but understanding the process helps you anticipate delays, communicate with patients about supply timelines, and appreciate why certain medications are sometimes temporarily unavailable.",
        },
        {
          type: "heading",
          level: 3,
          text: "Key Regulatory Requirements",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Drug registration: The medication must be registered with the national drug regulatory authority before it can be imported. Unregistered drugs require special import permits.",
            "Import licence: The importing entity (wholesaler, pharmacy, or hospital) must hold a valid import licence issued by the national pharmacy or health authority.",
            "Good Distribution Practice (GDP) compliance: The supply chain must demonstrate compliance with GDP standards, including temperature monitoring during shipping.",
            "Certificate of Pharmaceutical Product (CPP): An internationally recognised document confirming that the product meets the regulatory requirements of the exporting country.",
            "Batch documentation: Each shipment must include batch numbers, manufacturing dates, expiry dates, and certificates of analysis from the manufacturer.",
            "Customs declaration: Standard customs documentation including commercial invoice, bill of lading, and applicable duties and taxes.",
            "Controlled substance permits: Additional permits and documentation are required for importing narcotics and psychotropic substances, issued by the relevant national authority.",
          ],
        },
        {
          type: "island-comparison",
          title: "Drug Registration Authorities by Island",
          description:
            "Each Caribbean nation maintains its own drug registration authority, though regional harmonisation efforts are progressing through the CARICOM Caribbean Regulatory System (CRS).",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Chemistry, Food and Drugs Division (CFDD) under the Ministry of Health",
                "Drug registration under the Food and Drugs Act (Chapter 30:01)",
                "NIPDEC handles bulk procurement for the public sector",
                "Private sector imports through licenced wholesalers with CFDD approval",
                "Controlled substances require additional permits from the Dangerous Drugs Inspectorate",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Standards and Regulation Division of the Ministry of Health",
                "Drug registration under the Food and Drugs Act (1964, amended)",
                "NHF procures medications for subsidised programmes",
                "Government Pharmaceutical Supplies Division manages public sector procurement",
                "The Dangerous Drugs Act governs controlled substance imports",
              ],
            },
            {
              name: "Grenada",
              flag: "🇬🇩",
              details: [
                "Grenada Bureau of Standards and the Ministry of Health",
                "As an OECS member, Grenada benefits from the OECS PPS pooled procurement",
                "Drug registration requirements are being aligned with the CRS framework",
                "Smaller market size means longer lead times for niche medications",
                "Strong reliance on regional wholesalers based in Trinidad and Barbados",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Counterfeit Medications — A Regional Threat",
          body: "The Caribbean is not immune to the global threat of counterfeit and substandard medications. Weak regulatory enforcement in some jurisdictions, combined with complex multi-country supply chains, creates vulnerabilities. CARPHA and PAHO have implemented regional quality monitoring programmes, but pharmacy technicians must remain vigilant — check packaging integrity, verify batch numbers against certificates of analysis, and report any suspicious products to the authorities immediately.",
        },
        {
          type: "key-term",
          term: "Certificate of Pharmaceutical Product (CPP)",
          definition:
            "A document issued by the drug regulatory authority of the exporting country, certifying that a pharmaceutical product is authorised for sale in that country and that the manufacturing facility has been inspected and meets Good Manufacturing Practice (GMP) standards. The CPP is a WHO-recommended scheme used internationally to facilitate drug trade.",
        },
        {
          type: "knowledge-check",
          question:
            "Which document certifies that a pharmaceutical product meets the regulatory requirements of the exporting country and that its manufacturer operates under GMP?",
          options: [
            "Certificate of Pharmaceutical Product (CPP)",
            "Bill of Lading",
            "Pharmacy Board Registration Certificate",
            "Patient Information Leaflet",
          ],
          correctIndex: 0,
          explanation:
            "The Certificate of Pharmaceutical Product (CPP) is issued by the exporting country's regulatory authority, confirming that the product is authorised for sale there and that the manufacturing facility meets GMP standards. It is a key document in international pharmaceutical trade.",
        },
      ],
    },
    // ── Lesson 3.3 ──
    {
      id: "m3-l3",
      title: "Supplier Relationships & Order Management",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Building Reliable Supply Partnerships",
        },
        {
          type: "text",
          body: "In the Caribbean, where supply chain disruptions are an annual certainty rather than a rare exception, the strength of your supplier relationships can mean the difference between continuous medication availability and damaging stockouts. Effective supplier management involves more than placing orders — it requires building partnerships based on trust, clear communication, and mutual accountability.",
        },
        {
          type: "text",
          body: "Caribbean pharmacies typically work with a mix of suppliers: one or two primary wholesalers for the bulk of their regular stock, specialist suppliers for cold chain or niche products, and backup suppliers for emergency situations. Diversifying your supplier base reduces the risk of being entirely dependent on a single source that may itself be affected by the same disruptions as your pharmacy.",
        },
        {
          type: "heading",
          level: 3,
          text: "Supplier Evaluation Criteria",
        },
        {
          type: "table",
          caption: "Key Criteria for Evaluating Pharmaceutical Suppliers",
          headers: ["Criterion", "What to Assess", "Caribbean Consideration"],
          rows: [
            ["Reliability", "On-time delivery rate, order accuracy, stockout frequency", "Can the supplier deliver consistently despite Caribbean shipping challenges?"],
            ["Product quality", "GMP compliance, batch documentation, cold chain capability", "Does the supplier provide CPPs and certificates of analysis with every shipment?"],
            ["Pricing", "Unit cost, volume discounts, payment terms", "Are prices competitive with regional alternatives? Is pricing in local or foreign currency?"],
            ["Range", "Breadth of product catalogue, availability of generics", "Does the supplier carry the full formulary your pharmacy needs?"],
            ["Communication", "Responsiveness to queries, proactive stockout alerts", "Will the supplier notify you in advance of delays or shortages?"],
            ["Emergency support", "Ability to provide emergency stock on short notice", "Can they air-freight critical items if needed during a hurricane disruption?"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Negotiating Payment Terms",
          body: "For many small Caribbean pharmacies, cash flow is a significant constraint. Negotiate payment terms that align with your revenue cycle — for example, 30–60 day terms rather than cash-on-delivery. Building a track record of prompt payment strengthens your negotiating position and may unlock better pricing or priority allocation during shortages.",
        },
        {
          type: "text",
          body: "Order management involves more than sending purchase orders. Effective technicians track orders from placement to delivery, maintain records of lead times by supplier, flag delays early, follow up on partial shipments, verify deliveries against purchase orders and invoices, and document any discrepancies. This documentation is essential for supplier performance reviews and for identifying systemic issues in the supply chain.",
        },
        {
          type: "key-term",
          term: "Good Distribution Practice (GDP)",
          definition:
            "A set of quality standards governing the proper distribution of pharmaceutical products. GDP covers storage, transportation, documentation, and traceability throughout the distribution chain. Compliance ensures that medications reach the pharmacy in the same condition as when they left the manufacturer.",
        },
        {
          type: "knowledge-check",
          question:
            "Why is it important for a Caribbean pharmacy to maintain relationships with multiple suppliers rather than relying on a single source?",
          options: [
            "To increase administrative workload and paperwork",
            "To ensure competitive pricing through supplier rivalry only",
            "To reduce the risk of complete supply disruption if one supplier is affected by the same event",
            "Because Caribbean law prohibits exclusive supplier agreements",
          ],
          correctIndex: 2,
          explanation:
            "Supplier diversification is a risk management strategy. In the Caribbean, a single event — a hurricane, a shipping line disruption, a customs hold — can affect one supplier's entire operation. Having alternative suppliers ensures that the pharmacy can continue to source medications even when one supply channel is compromised.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m3-q1",
      question:
        "What is NIPDEC's primary function in Trinidad & Tobago's pharmaceutical supply chain?",
      options: [
        "Regulating pharmacy licences",
        "Procuring and distributing pharmaceuticals to public health facilities",
        "Manufacturing generic medications domestically",
        "Training pharmacy technicians",
      ],
      correctIndex: 1,
      explanation:
        "NIPDEC (National Insurance Property Development Company) is a state enterprise responsible for the bulk procurement and distribution of pharmaceuticals and medical supplies to public health facilities across Trinidad & Tobago.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q2",
      question:
        "The OECS Pharmaceutical Procurement Service achieves volume discounts of approximately what range compared to individual country purchasing?",
      options: [
        "5–10%",
        "10–20%",
        "30–60%",
        "80–90%",
      ],
      correctIndex: 2,
      explanation:
        "The OECS PPS achieves volume discounts of 30–60% by pooling the purchasing volumes of multiple small Eastern Caribbean nations. This collective bargaining power is critical for ensuring affordable medication access in the region.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q3",
      question:
        "Arrange the following pharmaceutical supply chain stages in the correct order from manufacturer to patient.",
      options: [
        "Customs clearance and regulatory inspection",
        "International procurement and order placement",
        "Sea freight shipping",
        "Distribution to pharmacy",
        "Manufacturing and quality release",
      ],
      correctIndex: 0,
      explanation:
        "The correct order is: (1) International procurement and order placement, (2) Manufacturing and quality release, (3) Sea freight shipping, (4) Customs clearance and regulatory inspection, (5) Distribution to pharmacy.",
      questionType: "ordering",
      questionData: {
        correct_order: [1, 4, 2, 0, 3],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q4",
      question:
        "True or False: A medication that is registered in one CARICOM country is automatically approved for import into all other CARICOM countries.",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "False. While the CARICOM Caribbean Regulatory System (CRS) is working toward mutual recognition of drug registrations, full harmonisation has not yet been achieved. Each nation currently maintains its own registration requirements, though the CRS is gradually enabling faster recognition pathways.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q5",
      question:
        "Which regulatory body oversees drug registration in Trinidad & Tobago?",
      options: [
        "The Pharmacy Board of Trinidad and Tobago",
        "The Chemistry, Food and Drugs Division (CFDD)",
        "CARPHA",
        "The Trinidad and Tobago Bureau of Standards",
      ],
      correctIndex: 1,
      explanation:
        "The Chemistry, Food and Drugs Division (CFDD) under the Ministry of Health is responsible for drug registration in Trinidad & Tobago, operating under the Food and Drugs Act (Chapter 30:01).",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q6",
      question:
        "A shipment of insulin arrives at Port of Spain without a Certificate of Pharmaceutical Product (CPP). What should happen?",
      options: [
        "The shipment should be released immediately since insulin is a life-saving medication",
        "The shipment should be held pending receipt of the CPP from the exporting country's regulatory authority",
        "The pharmacy technician should create a CPP based on the manufacturer's label",
        "The shipment should be destroyed as it is presumed counterfeit",
      ],
      correctIndex: 1,
      explanation:
        "The CPP is a mandatory import document. While the medication may be perfectly safe, it cannot be released without proper documentation. The shipment should be held at customs while the CPP is obtained from the exporting country's regulatory authority. This protects the integrity of the supply chain.",
      questionType: "scenario",
      questionData: {
        context: "You are working with the procurement team at a hospital pharmacy in Trinidad.",
      },
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m3-q7",
      question:
        "Which of the following are benefits of supplier diversification for a Caribbean pharmacy? Select ALL that apply.",
      options: [
        "Reduced risk of complete supply disruption",
        "Competitive pricing through multiple sources",
        "Backup options during hurricane season",
        "Eliminated need for inventory management",
      ],
      correctIndex: 0,
      explanation:
        "Supplier diversification provides reduced risk, competitive pricing, and backup options. However, it does not eliminate the need for inventory management — diversified supply still requires careful ordering, tracking, and stock control.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 2],
      },
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m3-q8",
      question:
        "The typical sea freight shipping time for pharmaceutical products to reach the Caribbean from international manufacturers is approximately ___________.",
      options: [
        "1–3 days",
        "2–6 weeks",
        "3–6 months",
        "12–18 months",
      ],
      correctIndex: 1,
      explanation:
        "Sea freight shipping to the Caribbean typically takes 2–6 weeks depending on the origin country, shipping route, and port of destination. This is one reason why Caribbean pharmacies must plan procurement months in advance and maintain appropriate safety stock levels.",
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: ["2–6 weeks", "2-6 weeks", "two to six weeks"],
        case_sensitive: false,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 4 — Storage, Handling & Cold Chain Management in Tropical Climates
// ============================================================================

const module4: Module = {
  id: "m4-storage-cold-chain",
  number: 4,
  title: "Storage, Handling & Cold Chain Management in Tropical Climates",
  description:
    "Medications are only as good as their storage conditions. In the Caribbean's tropical climate, where temperatures routinely exceed 30°C and humidity can surpass 80%, proper storage is the difference between a therapeutic product and a degraded one. This module covers temperature mapping, cold chain integrity, humidity control, and the specific challenges of maintaining medication quality in island environments.",
  learningObjectives: [
    "Explain how tropical heat and humidity affect pharmaceutical stability and efficacy",
    "Describe the cold chain requirements for temperature-sensitive medications",
    "Implement proper storage procedures for different medication categories in Caribbean pharmacies",
    "Evaluate cold chain integrity using temperature monitoring devices and excursion protocols",
    "Design a storage layout that minimises degradation risk in a tropical pharmacy environment",
  ],
  lessons: [
    // ── Lesson 4.1 ──
    {
      id: "m4-l1",
      title: "How Tropical Climates Affect Medications",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Heat, Humidity, and the Enemy of Stability",
        },
        {
          type: "text",
          body: "Pharmaceutical products are designed to remain stable under specific storage conditions — typically 15–25°C (controlled room temperature) with relative humidity below 60%. In the Caribbean, ambient temperatures regularly exceed 30°C and relative humidity frequently surpasses 80%. Without active climate control, medications stored in these conditions degrade faster than their stated expiry dates suggest, potentially losing potency or forming harmful degradation products.",
        },
        {
          type: "text",
          body: "The Arrhenius equation — a fundamental principle of chemical kinetics — tells us that for every 10°C increase in temperature, the rate of chemical degradation roughly doubles. This means that a medication stored at 35°C (common in an un-air-conditioned Caribbean pharmacy) degrades approximately twice as fast as one stored at 25°C. Humidity compounds the problem by promoting hydrolysis, a chemical reaction that breaks down many drug molecules in the presence of moisture.",
        },
        {
          type: "key-term",
          term: "Cold Chain",
          definition:
            "A temperature-controlled supply chain that maintains pharmaceutical products within their required temperature range from manufacture through storage and distribution to the point of use. A break in the cold chain — even briefly — can render temperature-sensitive products (vaccines, insulin, biologicals) ineffective or dangerous.",
        },
        {
          type: "table",
          caption: "Common Storage Temperature Categories",
          headers: ["Category", "Temperature Range", "Examples", "Caribbean Challenge"],
          rows: [
            [
              "Frozen",
              "−25°C to −10°C",
              "Some vaccines (varicella, MMR), certain biologicals",
              "Requires dedicated freezers with backup power; power outages are common",
            ],
            [
              "Refrigerated (Cold)",
              "2°C to 8°C",
              "Insulin, some eye drops, suppositories, certain antibiotics (reconstituted)",
              "Pharmacy fridges must be pharmaceutical-grade with temperature alarms",
            ],
            [
              "Cool",
              "8°C to 15°C",
              "Some suppositories, certain syrups",
              "Difficult to maintain without dedicated cool rooms in tropical climates",
            ],
            [
              "Controlled Room Temperature",
              "15°C to 25°C (up to 30°C excursion)",
              "Most tablets, capsules, and liquid formulations",
              "Requires continuous air conditioning in Caribbean pharmacies",
            ],
            [
              "Do Not Refrigerate",
              "15°C to 30°C",
              "Some reconstituted suspensions, certain injectables",
              "Must be kept out of the fridge but still within temperature limits",
            ],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Power Outages — A Constant Caribbean Threat",
          body: "Caribbean nations frequently experience power outages due to infrastructure limitations, tropical storms, and grid overload. A pharmacy refrigerator without backup power during a multi-hour outage can result in the loss of thousands of dollars' worth of temperature-sensitive medications — and worse, patients receiving degraded products. Every Caribbean pharmacy must have a backup power plan: generators, uninterruptible power supplies (UPS), or pre-arranged emergency cold storage at nearby facilities.",
        },
        {
          type: "text",
          body: "Light exposure is another degradation factor often overlooked. Many medications — including nifedipine, methotrexate, and certain vitamins — are light-sensitive and must be stored in amber containers or opaque packaging. In the Caribbean, intense tropical sunlight streaming through pharmacy windows can accelerate photodegradation. Window tinting, UV-filtering films, and strategic shelf placement away from direct sunlight are simple but effective protective measures.",
        },
        {
          type: "knowledge-check",
          question:
            "According to the Arrhenius principle, what happens to the rate of chemical degradation of a medication for every 10°C increase in storage temperature?",
          options: [
            "It decreases by half",
            "It stays the same",
            "It approximately doubles",
            "It triples",
          ],
          correctIndex: 2,
          explanation:
            "The Arrhenius equation tells us that for every 10°C increase in temperature, the rate of most chemical reactions — including drug degradation — approximately doubles. This is why climate control is critical in Caribbean pharmacies where ambient temperatures can be 10–15°C above ideal storage conditions.",
        },
      ],
    },
    // ── Lesson 4.2 ──
    {
      id: "m4-l2",
      title: "Cold Chain Management: Fridges, Freezers & Monitoring",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Keeping the Cold Chain Unbroken",
        },
        {
          type: "text",
          body: "Cold chain management is one of the most critical competencies for a Caribbean pharmacy technician. Temperature-sensitive medications — vaccines, insulin, biological products, certain eye drops, and reconstituted antibiotics — must be maintained within their specified temperature range at all times. A single cold chain break can render an entire batch of vaccines ineffective, waste scarce resources, and put patients at risk.",
        },
        {
          type: "heading",
          level: 3,
          text: "Pharmaceutical-Grade Refrigerators",
        },
        {
          type: "text",
          body: "A pharmacy refrigerator is not a domestic fridge. Pharmaceutical-grade refrigerators are purpose-built with features domestic units lack: forced-air circulation for uniform temperature, digital temperature displays, high and low temperature alarms, locked doors, and temperature logging capabilities (digital or chart recorders). Using a domestic refrigerator to store medications is a regulatory violation in most Caribbean jurisdictions and creates unacceptable cold chain risks.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Temperature range: Must maintain 2°C to 8°C consistently across all shelf areas",
            "Alarm systems: Audible and visual alarms for temperature excursions beyond set limits",
            "Temperature logging: Continuous recording (digital data logger preferred) with twice-daily manual verification",
            "No food or beverages: Staff food must never be stored in pharmaceutical refrigerators",
            "Organisation: Medications organised by type and expiry; leave space for air circulation",
            "Door opening protocol: Minimise door openings; retrieve items quickly; never leave the door open",
            "Backup power: Connected to emergency generator or UPS system",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Temperature Excursion Protocol",
          body: "A temperature excursion occurs when the refrigerator temperature goes outside the 2°C–8°C range. If an excursion is detected: (1) Do NOT discard medications immediately. (2) Quarantine the affected stock — move it to a properly functioning unit if available. (3) Record the excursion details: duration, peak temperature, and affected products. (4) Contact the manufacturer for stability guidance. (5) Do not dispense the affected stock until stability is confirmed. Many manufacturers provide excursion tolerance data that may allow the product to remain usable.",
        },
        {
          type: "key-term",
          term: "Temperature Excursion",
          definition:
            "Any deviation of storage temperature outside the acceptable range for a pharmaceutical product. For refrigerated items (2°C–8°C), both freezing (below 0°C) and warming (above 8°C) constitute excursions. The impact on the medication depends on the duration, severity, and number of excursions, as well as the specific product's stability profile.",
        },
        {
          type: "text",
          body: "Temperature monitoring must be continuous, not just at the start and end of each day. Digital data loggers that record temperature at programmed intervals (typically every 5–15 minutes) provide a complete picture of cold chain performance. These devices generate downloadable reports that serve as regulatory documentation and can identify patterns — such as a fridge that consistently warms during overnight hours, suggesting a compressor issue.",
        },
        {
          type: "knowledge-check",
          question:
            "You arrive at the pharmacy in the morning and discover that the fridge temperature reads 12°C — well above the 2°C–8°C range. What is your FIRST action?",
          options: [
            "Discard all medications in the fridge immediately",
            "Turn off the fridge and transfer all stock to a domestic refrigerator",
            "Quarantine the affected stock, record the excursion details, and contact the manufacturer for stability guidance",
            "Ignore it — the fridge will cool down once the compressor kicks in",
          ],
          correctIndex: 2,
          explanation:
            "Do NOT discard stock immediately — some medications can tolerate brief temperature excursions. The correct first action is to quarantine the affected stock, document the excursion (temperature, estimated duration, affected products), and contact manufacturers for stability guidance. Only discard stock if the manufacturer confirms the excursion has compromised the product.",
        },
      ],
    },
    // ── Lesson 4.3 ──
    {
      id: "m4-l3",
      title: "Humidity Control & Storage Layout Design",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Fighting Moisture in a Tropical Pharmacy",
        },
        {
          type: "text",
          body: "Humidity is the silent destroyer of medication quality in the Caribbean. While temperature gets most of the attention, excess moisture can be equally damaging. Hygroscopic medications absorb moisture from the air, causing tablets to soften, capsules to stick together, powders to clump, and effervescent tablets to activate prematurely. Moisture also promotes hydrolysis — a chemical breakdown reaction — and can encourage microbial growth in liquid formulations.",
        },
        {
          type: "text",
          body: "The ideal relative humidity for pharmaceutical storage is 40–60%. In the Caribbean, ambient humidity regularly exceeds 80%, and during the rainy season, it can approach 95% in coastal areas. Achieving and maintaining appropriate humidity levels requires active dehumidification, proper building ventilation, and mindful storage practices.",
        },
        {
          type: "heading",
          level: 3,
          text: "Practical Humidity Control Measures",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Air conditioning: The primary humidity control method — AC systems both cool and dehumidify",
            "Dedicated dehumidifiers: Essential in storage areas where AC alone cannot maintain humidity below 60%",
            "Hygrometers: Placed throughout the pharmacy to monitor relative humidity in real time",
            "Desiccant packs: Placed in opened medication containers and storage bins; replace regularly",
            "Moisture barriers: Keep medications in their original packaging until dispensed; reseal opened containers tightly",
            "Ventilation: Ensure adequate airflow to prevent moisture pockets — avoid stacking boxes against walls",
            "Building maintenance: Repair leaks, seal windows, and address rising damp promptly",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Storage Layout Best Practices",
          body: "Design your pharmacy storage layout to minimise degradation risk: store medications at least 15 cm off the floor (prevents moisture wicking), keep stock 30 cm away from exterior walls (which can transfer heat and moisture), position temperature-sensitive items away from doors and windows, place the heaviest items on lower shelves for safety, and organise alphabetically or by therapeutic class with clear labelling for efficient retrieval.",
        },
        {
          type: "key-term",
          term: "Hygroscopic",
          definition:
            "A property of certain substances that causes them to readily absorb moisture from the surrounding air. Hygroscopic medications — such as aspirin, certain vitamins, and many powder formulations — require protection from humidity through sealed containers, desiccant packs, and dehumidified storage environments.",
        },
        {
          type: "text",
          body: "Temperature mapping is an important but often neglected practice. Not all areas of a pharmacy maintain the same temperature — areas near doors, windows, roof spaces, and cooking/break rooms are typically warmer. Conducting a temperature mapping exercise involves placing thermometers or data loggers at multiple points throughout the pharmacy for 7–14 days and analysing the results to identify hot spots and cold spots. Medications should be stored only in areas that consistently meet the required temperature and humidity specifications.",
        },
        {
          type: "knowledge-check",
          question:
            "What is the ideal relative humidity range for pharmaceutical storage?",
          options: [
            "10–20%",
            "40–60%",
            "70–80%",
            "90–100%",
          ],
          correctIndex: 1,
          explanation:
            "The ideal relative humidity for pharmaceutical storage is 40–60%. In the Caribbean, where ambient humidity often exceeds 80%, active dehumidification through air conditioning and dedicated dehumidifiers is essential to maintain medication quality.",
        },
      ],
    },
    // ── Lesson 4.4 ──
    {
      id: "m4-l4",
      title: "Special Storage Requirements: Light, Ventilation & Hazardous Materials",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Beyond Temperature and Humidity",
        },
        {
          type: "text",
          body: "While temperature and humidity are the primary storage concerns, several other factors affect medication stability and safety. Light exposure, ventilation, segregation of incompatible substances, and hazardous material handling all require careful attention in the Caribbean pharmacy environment.",
        },
        {
          type: "heading",
          level: 3,
          text: "Light-Sensitive Medications",
        },
        {
          type: "text",
          body: "Photodegradation — the breakdown of chemicals by light — affects a significant number of pharmaceutical products. The intense tropical sunlight in the Caribbean, with its high UV component, accelerates this process. Medications susceptible to photodegradation include nifedipine, methotrexate, sodium nitroprusside, furosemide, certain vitamins (especially B2 and C), and many IV admixtures.",
        },
        {
          type: "table",
          caption: "Special Storage Requirements by Category",
          headers: ["Category", "Requirements", "Common Examples", "Signage/Labelling"],
          rows: [
            [
              "Light-sensitive",
              "Amber containers, opaque overwrap, away from windows",
              "Nifedipine, methotrexate, furosemide, vitamin B complex",
              "'Protect from Light' label",
            ],
            [
              "Flammable",
              "Fireproof cabinet, away from ignition sources, separate from oxidisers",
              "Alcohol-based preparations, ether, acetone",
              "Flammable material signage, no smoking signs",
            ],
            [
              "Cytotoxic",
              "Separate locked storage, spill kits available, PPE for handling",
              "Methotrexate, cyclophosphamide, tamoxifen",
              "'Cytotoxic — Handle with Care' warning label",
            ],
            [
              "Controlled substances",
              "Double-locked safe or cabinet, perpetual inventory, restricted access",
              "Morphine, codeine, diazepam, methylphenidate",
              "Not openly displayed; access log required",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Ventilation Requirements",
          body: "Adequate ventilation is important not only for comfort but for safety. Volatile substances (alcohol-based preparations, certain aerosols) can release fumes that accumulate in poorly ventilated areas. Cytotoxic drug spills require specific ventilation protocols. Ensure that your pharmacy's ventilation system provides adequate air exchanges and that chemical storage areas have dedicated exhaust if required by regulation.",
        },
        {
          type: "text",
          body: "Segregation of incompatible substances is a fundamental storage principle. Oxidising agents must be separated from flammable materials. Acids must be separated from bases. Cytotoxic drugs must be isolated from other medications. In a Caribbean pharmacy with limited space, achieving proper segregation requires creative use of dedicated cabinets, colour-coded storage zones, and clear signage.",
        },
        {
          type: "key-term",
          term: "Photodegradation",
          definition:
            "The chemical breakdown of a substance caused by exposure to light, particularly ultraviolet (UV) radiation. In pharmacy, photodegradation can reduce a medication's potency, alter its chemical composition, or produce harmful breakdown products. Affected medications must be stored in amber containers or opaque packaging and protected from direct sunlight.",
        },
        {
          type: "case-study",
          title: "Case Study: The Power Outage at a Barbados Hospital Pharmacy",
          scenario:
            "Queen Elizabeth Hospital pharmacy in Bridgetown experiences a 6-hour power outage during a tropical storm. The pharmacy's backup generator fails to start. The pharmaceutical refrigerator, containing insulin, vaccines, and reconstituted antibiotics worth approximately BBD 45,000, begins warming. By the time power is restored, the internal temperature has reached 18°C. The pharmacy manager discovers that the data logger battery had also died two months ago, so there is no continuous temperature record.",
          questions: [
            "What immediate actions should the pharmacy team take regarding the affected refrigerated stock?",
            "How could this situation have been prevented?",
            "What documentation is needed for the regulatory authority and the insurance claim?",
          ],
          discussion:
            "This case illustrates multiple failures: generator maintenance neglect, data logger battery not replaced, and likely lack of a documented temperature excursion SOP. Immediate actions include quarantining all affected stock, reconstructing the temperature timeline from available evidence, contacting manufacturers for stability data, and documenting everything for regulatory and insurance purposes. Prevention requires regular generator testing (monthly), data logger battery checks (as per manufacturer schedule), and a written cold chain failure SOP that all staff are trained on.",
        },
        {
          type: "knowledge-check",
          question:
            "Which of the following medications is particularly susceptible to photodegradation and should be protected from light?",
          options: [
            "Paracetamol tablets in blister packs",
            "Nifedipine capsules",
            "Metformin tablets",
            "Omeprazole capsules in their original container",
          ],
          correctIndex: 1,
          explanation:
            "Nifedipine is highly photosensitive and must be protected from light at all times. It is typically supplied in amber blister packs or opaque containers. Exposure to light causes rapid degradation that reduces efficacy and can produce harmful breakdown products.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m4-q1",
      question:
        "What is the correct storage temperature range for refrigerated medications?",
      options: [
        "−10°C to 0°C",
        "2°C to 8°C",
        "15°C to 25°C",
        "8°C to 15°C",
      ],
      correctIndex: 1,
      explanation:
        "Refrigerated medications must be maintained between 2°C and 8°C. Temperatures below 2°C risk freezing (which can destroy vaccines and insulin), while temperatures above 8°C constitute an excursion that may degrade the product.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q2",
      question:
        "True or False: A domestic household refrigerator is acceptable for storing pharmaceutical products in a Caribbean pharmacy.",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "False. Domestic refrigerators lack the temperature uniformity, alarm systems, temperature logging, and security features required for pharmaceutical storage. Pharmaceutical-grade refrigerators are required by regulation in most Caribbean jurisdictions.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q3",
      question:
        "According to the Arrhenius principle, a medication stored at 35°C degrades approximately how much faster than one stored at 25°C?",
      options: [
        "50% faster",
        "Twice as fast",
        "Three times as fast",
        "The same rate — temperature has no effect on stability",
      ],
      correctIndex: 1,
      explanation:
        "The Arrhenius equation indicates that for every 10°C increase in temperature, the rate of chemical degradation approximately doubles. A 10°C increase from 25°C to 35°C therefore doubles the degradation rate.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q4",
      question:
        "Which of the following are appropriate actions when a temperature excursion is detected in a pharmacy refrigerator? Select ALL that apply.",
      options: [
        "Quarantine the affected stock",
        "Record the excursion details (duration, peak temperature, affected products)",
        "Contact the manufacturer for stability guidance",
        "Immediately discard all affected medications without further assessment",
        "Do not dispense affected stock until stability is confirmed",
      ],
      correctIndex: 0,
      explanation:
        "Options A, B, C, and E are all correct actions during a temperature excursion. Immediately discarding medications (option D) without consulting the manufacturer is wasteful — many products can tolerate brief excursions. The correct approach is quarantine, document, consult, then decide.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 2, 4],
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q5",
      question:
        "What is the ideal relative humidity range for pharmaceutical storage?",
      options: [
        "10–20%",
        "40–60%",
        "70–80%",
        "85–95%",
      ],
      correctIndex: 1,
      explanation:
        "The ideal relative humidity for pharmaceutical storage is 40–60%. Caribbean pharmacies typically require active dehumidification to achieve this, as ambient humidity often exceeds 80%.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q6",
      question:
        "Match each storage category with its appropriate temperature range.",
      options: [
        "Frozen → −25°C to −10°C",
        "Refrigerated → 2°C to 8°C",
        "Controlled Room Temperature → 15°C to 25°C",
        "All matches are correct",
      ],
      correctIndex: 3,
      explanation:
        "All three matches are correct. Frozen products are stored at −25°C to −10°C, refrigerated products at 2°C to 8°C, and controlled room temperature products at 15°C to 25°C (with allowable excursions up to 30°C as defined by pharmacopoeia).",
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Frozen", right: "−25°C to −10°C" },
          { left: "Refrigerated", right: "2°C to 8°C" },
          { left: "Controlled room temperature", right: "15°C to 25°C" },
        ],
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q7",
      question:
        "A pharmacy in Grenada experiences frequent afternoon power outages lasting 2–3 hours. What is the MOST critical infrastructure investment for protecting cold chain integrity?",
      options: [
        "Additional shelving for better stock organisation",
        "A backup generator with automatic transfer switch",
        "Window tinting to reduce heat from sunlight",
        "A larger pharmacy refrigerator",
      ],
      correctIndex: 1,
      explanation:
        "A backup generator with an automatic transfer switch is the most critical investment. It ensures that refrigeration continues uninterrupted during power outages, protecting the cold chain for temperature-sensitive medications. While other improvements are beneficial, none address the immediate threat of cold chain failure during outages.",
      questionType: "scenario",
      questionData: {
        context: "You are advising a pharmacy manager on infrastructure priorities.",
      },
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m4-q8",
      question:
        "What is the term for a substance that readily absorbs moisture from the surrounding air?",
      options: [
        "Hydrophobic",
        "Photosensitive",
        "Hygroscopic",
        "Thermolabile",
      ],
      correctIndex: 2,
      explanation:
        "Hygroscopic substances readily absorb moisture from the air. In the Caribbean's humid climate, hygroscopic medications require special protection — sealed containers, desiccant packs, and dehumidified storage environments — to maintain their quality.",
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: ["hygroscopic"],
        case_sensitive: false,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q9",
      question:
        "Arrange the following storage best practices in order of priority for a tropical Caribbean pharmacy.",
      options: [
        "Window tinting for light protection",
        "Temperature-controlled air conditioning maintained 24/7",
        "Desiccant packs in opened containers",
        "Backup power for refrigeration",
      ],
      correctIndex: 0,
      explanation:
        "The correct priority order is: (1) Temperature-controlled AC maintained 24/7, (2) Backup power for refrigeration, (3) Desiccant packs in opened containers, (4) Window tinting. Temperature control is the single most important factor, followed by cold chain backup, moisture control, and light protection.",
      questionType: "ordering",
      questionData: {
        correct_order: [1, 3, 2, 0],
      },
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m4-q10",
      question:
        "Why should medications be stored at least 15 cm off the floor in a Caribbean pharmacy?",
      options: [
        "To make them easier for staff to reach",
        "To prevent moisture wicking from the floor in humid tropical conditions",
        "Because Caribbean building codes require it",
        "To allow space for pest control treatments underneath",
      ],
      correctIndex: 1,
      explanation:
        "In the Caribbean's humid climate, concrete and tile floors can wick moisture upward through capillary action, especially during the rainy season. Storing medications at least 15 cm off the floor prevents moisture damage and is a fundamental Good Storage Practice requirement.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// MODULE 5 — Expiry Date Management & Stock Rotation (FEFO/FIFO)
// ============================================================================

const module5: Module = {
  id: "m5-expiry-stock-rotation",
  number: 5,
  title: "Expiry Date Management & Stock Rotation (FEFO/FIFO)",
  description:
    "Expired medications are not just wasted money — they can be ineffective or even harmful. In the Caribbean, where long supply chains and tropical conditions accelerate degradation, rigorous expiry date management and stock rotation are essential competencies. This module teaches you to implement FEFO/FIFO systems, manage short-dated stock, and minimise pharmaceutical wastage.",
  learningObjectives: [
    "Distinguish between FEFO (First Expiry, First Out) and FIFO (First In, First Out) stock rotation methods",
    "Implement a systematic expiry date monitoring programme in a pharmacy setting",
    "Calculate the financial impact of expired stock and develop strategies to minimise wastage",
  ],
  lessons: [
    // ── Lesson 5.1 ──
    {
      id: "m5-l1",
      title: "Understanding Expiry Dates & Beyond-Use Dates",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "What Expiry Dates Really Mean",
        },
        {
          type: "text",
          body: "Every pharmaceutical product carries an expiry date assigned by the manufacturer based on stability testing under controlled conditions (typically 25°C/60% RH for temperate markets or 30°C/65% RH for tropical zones). The expiry date indicates the last date the manufacturer guarantees the product meets its labelled potency and purity specifications — provided it has been stored correctly. After this date, the product's safety and efficacy can no longer be assured.",
        },
        {
          type: "text",
          body: "It is critical to understand that an expiry date is not a cliff edge — a medication does not suddenly become toxic on the day after expiry. Rather, it is the point beyond which the manufacturer's guarantee no longer applies. However, dispensing expired medications is illegal in all Caribbean jurisdictions and constitutes professional misconduct. The risk is not only legal but clinical: degraded medications may have reduced potency (undertreating the patient) or contain harmful breakdown products.",
        },
        {
          type: "key-term",
          term: "Beyond-Use Date (BUD)",
          definition:
            "The date after which a compounded preparation or a repackaged medication should not be used. Unlike manufacturer expiry dates, BUDs are assigned by the dispensing pharmacy based on the product's stability after opening, reconstitution, or compounding. For example, reconstituted amoxicillin suspension has a BUD of 7–14 days depending on storage conditions.",
        },
        {
          type: "table",
          caption: "Expiry Date vs. Beyond-Use Date",
          headers: ["Feature", "Expiry Date", "Beyond-Use Date (BUD)"],
          rows: [
            ["Set by", "Manufacturer (based on stability studies)", "Dispensing pharmacy (based on product-specific data)"],
            ["Applies to", "Commercially manufactured products in original packaging", "Compounded preparations, reconstituted medications, repackaged products"],
            ["Typical timeframe", "1–5 years from manufacture", "Hours to months depending on the product"],
            ["Caribbean relevance", "May overstate stability if stored above labelled conditions", "Critical for reconstituted antibiotics in tropical heat"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Tropical Storage and Effective Expiry",
          body: "Manufacturer expiry dates are based on storage at controlled conditions (25°C or 30°C for Zone IVa/IVb tropical formulations). If a medication has been stored at higher temperatures — even briefly — its true shelf life may be shorter than the printed expiry date. This is why Caribbean pharmacies must maintain and document temperature control: to ensure that expiry dates remain valid.",
        },
        {
          type: "knowledge-check",
          question:
            "What is the key difference between an expiry date and a beyond-use date?",
          options: [
            "There is no difference — they are interchangeable terms",
            "Expiry dates are set by the manufacturer; beyond-use dates are assigned by the dispensing pharmacy for opened, reconstituted, or compounded products",
            "Beyond-use dates are always longer than expiry dates",
            "Expiry dates apply only to controlled substances",
          ],
          correctIndex: 1,
          explanation:
            "Expiry dates are assigned by the manufacturer based on stability studies of the product in its original sealed packaging. Beyond-use dates are assigned by the pharmacy and apply to products that have been opened, reconstituted, repackaged, or compounded — situations where the manufacturer's original stability data no longer fully applies.",
        },
      ],
    },
    // ── Lesson 5.2 ──
    {
      id: "m5-l2",
      title: "FEFO & FIFO: Stock Rotation Methods",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Ensuring the Right Stock Moves First",
        },
        {
          type: "text",
          body: "Stock rotation is the systematic practice of dispensing older stock before newer stock to minimise wastage due to expiry. In pharmacy, two methods are used: FEFO (First Expiry, First Out) and FIFO (First In, First Out). FEFO is the preferred method for pharmaceutical products because it is based on the expiry date, not the receipt date — and the two may differ if shipments arrive with varying remaining shelf life.",
        },
        {
          type: "key-term",
          term: "FEFO (First Expiry, First Out)",
          definition:
            "A stock rotation method where products with the earliest expiry date are dispensed first, regardless of when they were received. This is the gold standard for pharmaceutical inventory management because it directly minimises expiry-related wastage. Example: A box of metformin received in January with a December 2025 expiry should be dispensed before a box received in March with a June 2026 expiry.",
        },
        {
          type: "text",
          body: "FIFO (First In, First Out) dispenses stock in the order it was received. While simpler to implement — especially in pharmacies without computerised systems — FIFO can lead to wastage if newer shipments happen to have shorter expiry dates than older stock already on the shelf. This occurs when manufacturers ship product from different batches, or when a supplier sends close-dated stock to clear their own inventory.",
        },
        {
          type: "table",
          caption: "FEFO vs. FIFO Comparison",
          headers: ["Feature", "FEFO", "FIFO"],
          rows: [
            ["Basis", "Expiry date", "Date of receipt"],
            ["Wastage minimisation", "Superior — directly targets shortest-dated stock", "Good but not optimal — may miss short-dated newer arrivals"],
            ["Complexity", "Higher — requires checking expiry dates at every stock placement", "Lower — based on chronological order of receipt"],
            ["Best for", "All pharmaceutical products", "Non-perishable, non-pharmaceutical goods"],
            ["Caribbean recommendation", "Required for all prescription medications", "Acceptable for non-pharmaceutical items (bandages, gloves)"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Practical FEFO Implementation",
          body: "When placing new stock on shelves, always check the expiry date of existing stock first. Place newer (longer-dated) stock BEHIND existing stock. Never simply place new stock in front. During every delivery, rotate the entire shelf: pull existing stock forward, place new stock at the back, then rearrange so the shortest-dated product is at the front. This takes an extra few minutes per delivery but saves thousands in expired stock annually.",
        },
        {
          type: "text",
          body: "Both methods require discipline and consistency. The most common failure in stock rotation is 'topping up' — placing new stock on top of or in front of existing stock without checking expiry dates. This pushes older stock to the back where it expires unnoticed. Training, visual reminders, and periodic rotation audits are essential to maintaining FEFO discipline, especially in busy pharmacies with high stock turnover.",
        },
        {
          type: "knowledge-check",
          question:
            "A pharmacy receives a new shipment of atorvastatin. The existing stock on the shelf expires in March 2026. The new shipment expires in January 2026. Under FEFO, which stock should be dispensed first?",
          options: [
            "The existing stock (March 2026) because it was received first",
            "The new shipment (January 2026) because it has the earlier expiry date",
            "It doesn't matter — dispense whichever is more convenient",
            "Return the new shipment to the supplier because it has a shorter expiry",
          ],
          correctIndex: 1,
          explanation:
            "Under FEFO, the stock with the earliest expiry date is always dispensed first, regardless of receipt order. The new shipment (January 2026) must be placed in front of the existing stock (March 2026) to ensure it is dispensed first. This is exactly the scenario where FEFO differs from FIFO and prevents wastage.",
        },
      ],
    },
    // ── Lesson 5.3 ──
    {
      id: "m5-l3",
      title: "Short-Dated Stock Management & Wastage Reduction",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Turning Short-Dated Stock Into Used Stock, Not Wasted Stock",
        },
        {
          type: "text",
          body: "Short-dated stock — products approaching their expiry date — represents an imminent financial loss if not managed proactively. In the Caribbean, where medication costs are already elevated by import duties and shipping, every expired product is money that could have served patients. A systematic short-dated stock management programme can reduce pharmaceutical wastage by 30–50%.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Three-Tier Alert System",
        },
        {
          type: "text",
          body: "Implement a three-tier alert system based on remaining shelf life. The specific thresholds should be calibrated to your pharmacy's dispensing speed for each product, but a common framework is:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "GREEN ALERT (6+ months to expiry): Normal dispensing. No special action required, but continue FEFO rotation.",
            "AMBER ALERT (3–6 months to expiry): Increase dispensing priority. Move to the front of the shelf. Consider transfers to sister pharmacies or facilities with higher turnover. Flag for promotional pricing if applicable for OTC products.",
            "RED ALERT (under 3 months to expiry): Immediate action required. Contact suppliers about returns or credit (many have return policies for stock within 3 months of expiry). Transfer to high-volume facilities. For controlled substances, begin documentation for witnessed destruction.",
          ],
        },
        {
          type: "text",
          body: "Monthly expiry audits are the backbone of short-dated stock management. During these audits, the technician systematically checks every product on the shelf, in the fridge, and in backstock for approaching expiry dates. Products entering the amber or red zone are flagged, documented, and acted upon. Modern pharmacy software can automate these alerts, but manual checks remain essential as a verification layer.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Supplier Return Programmes",
          body: "Many pharmaceutical suppliers and wholesalers in the Caribbean offer return programmes for short-dated stock — typically products within 3 to 6 months of expiry. The terms vary: some offer full credit, others partial credit, and some charge a restocking fee. Build these terms into your supplier agreements and track return deadlines carefully. A product that could have been returned for 80% credit becomes a 100% loss once the return window closes.",
        },
        {
          type: "key-term",
          term: "Pharmaceutical Wastage Rate",
          definition:
            "The percentage of total pharmaceutical stock that is disposed of due to expiry, damage, contamination, or other causes without being dispensed to patients. A well-managed Caribbean pharmacy aims for a wastage rate below 2% of total inventory value. Rates above 5% indicate systemic stock management failures.",
        },
        {
          type: "knowledge-check",
          question:
            "Under a three-tier alert system, a product with 4 months remaining shelf life falls into which alert level?",
          options: [
            "Green Alert — normal dispensing",
            "Amber Alert — increase dispensing priority and consider transfers",
            "Red Alert — immediate action, contact suppliers for returns",
            "No alert — 4 months is too far from expiry to require action",
          ],
          correctIndex: 1,
          explanation:
            "Four months falls within the Amber Alert zone (3–6 months to expiry). The product should be moved to the front of the shelf, flagged for increased dispensing priority, and considered for transfer to higher-volume facilities if turnover at the current pharmacy is insufficient to use the stock before expiry.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m5-q1",
      question:
        "What does FEFO stand for?",
      options: [
        "First Entry, First Out",
        "First Expiry, First Out",
        "First Examined, First Ordered",
        "Fast Exit, Fast Order",
      ],
      correctIndex: 1,
      explanation:
        "FEFO stands for First Expiry, First Out — a stock rotation method that ensures products with the earliest expiry date are dispensed first, minimising wastage due to expiry.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q2",
      question:
        "True or False: A medication becomes immediately toxic on the day after its printed expiry date.",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "False. An expiry date is not a cliff edge — the medication does not suddenly become toxic. However, the manufacturer's guarantee of potency and purity no longer applies, and dispensing expired medications is illegal in all Caribbean jurisdictions.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q3",
      question:
        "A beyond-use date is typically assigned to which of the following products?",
      options: [
        "A sealed box of manufacturer-packaged tablets",
        "Reconstituted amoxicillin suspension prepared at the pharmacy",
        "An unopened bottle of OTC paracetamol",
        "A sealed blister pack of metformin tablets",
      ],
      correctIndex: 1,
      explanation:
        "Beyond-use dates are assigned by the dispensing pharmacy to products that have been opened, reconstituted, compounded, or repackaged. Reconstituted amoxicillin suspension, which has a limited shelf life of 7–14 days, is a classic example requiring a BUD.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q4",
      question:
        "In what scenario does FEFO produce a different result than FIFO?",
      options: [
        "When all shipments arrive with identical expiry dates",
        "When a newer shipment arrives with a shorter expiry date than existing stock",
        "When the pharmacy only stocks one brand of each medication",
        "When stock is dispensed on the same day it arrives",
      ],
      correctIndex: 1,
      explanation:
        "FEFO and FIFO differ when a newer shipment has a shorter expiry date than existing stock. Under FIFO, the older (longer-dated) stock would be dispensed first based on receipt date. Under FEFO, the newer (shorter-dated) stock would be prioritised based on expiry date, preventing it from expiring unused.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m5-q5",
      question:
        "Arrange the three-tier expiry alert levels from LEAST urgent to MOST urgent.",
      options: [
        "Red Alert (under 3 months)",
        "Amber Alert (3–6 months)",
        "Green Alert (6+ months)",
      ],
      correctIndex: 0,
      explanation:
        "From least to most urgent: Green Alert (6+ months — normal dispensing), Amber Alert (3–6 months — increase priority, consider transfers), Red Alert (under 3 months — immediate action required).",
      questionType: "ordering",
      questionData: {
        correct_order: [2, 1, 0],
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q6",
      question:
        "A well-managed Caribbean pharmacy should aim for a pharmaceutical wastage rate below what percentage of total inventory value?",
      options: [
        "10%",
        "5%",
        "2%",
        "0% — no wastage is acceptable",
      ],
      correctIndex: 2,
      explanation:
        "A well-managed Caribbean pharmacy should aim for a wastage rate below 2% of total inventory value. While zero wastage is an ideal, some wastage is inevitable due to patient returns, damaged stock, and unavoidable short-dated receipts. Rates above 5% indicate systemic failures.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q7",
      question:
        "Why might a manufacturer's printed expiry date overstate the true shelf life of a medication stored in a Caribbean pharmacy?",
      options: [
        "Because Caribbean patients use medications faster",
        "Because expiry dates are calculated for European markets where storage conditions are cooler",
        "If storage temperatures have exceeded the labelled conditions, degradation may have been accelerated",
        "Because Caribbean pharmacies use different calendars",
      ],
      correctIndex: 2,
      explanation:
        "Expiry dates are based on stability testing at specific controlled conditions (25°C/60% RH or 30°C/65% RH). If a medication has been exposed to temperatures above these conditions — which is common in Caribbean pharmacies without adequate climate control — degradation occurs faster than predicted, and the true shelf life may be shorter than the printed date.",
      questionType: "multiple_choice",
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
    {
      id: "m5-q8",
      question:
        "Match each stock management action with the appropriate alert level.",
      options: [
        "Normal dispensing, FEFO rotation → Green Alert",
        "Move to front of shelf, consider transfers → Amber Alert",
        "Contact supplier for returns, begin destruction documentation → Red Alert",
        "All matches are correct",
      ],
      correctIndex: 3,
      explanation:
        "All matches are correct. Green Alert (6+ months) requires only normal FEFO rotation. Amber Alert (3–6 months) escalates to increased dispensing priority and transfer consideration. Red Alert (under 3 months) requires immediate action including supplier return requests and destruction documentation.",
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Green Alert (6+ months)", right: "Normal dispensing and FEFO rotation" },
          { left: "Amber Alert (3–6 months)", right: "Increase priority, consider transfers" },
          { left: "Red Alert (under 3 months)", right: "Contact suppliers, begin destruction docs" },
        ],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// MODULE 6 — Controlled Substance Dispensing, Record-Keeping & Reporting
// ============================================================================

const module6: Module = {
  id: "m6-controlled-substances",
  number: 6,
  title: "Controlled Substance Dispensing, Record-Keeping & Reporting",
  description:
    "Controlled substances demand the highest level of care, documentation, and legal compliance in the dispensing process. This module covers the classification of controlled drugs, the Caribbean legal framework, prescription requirements, register maintenance, and the technician's responsibilities in preventing diversion while ensuring patient access to necessary medications.",
  learningObjectives: [
    "Classify controlled substances according to Caribbean drug scheduling systems",
    "Describe the legal requirements for dispensing controlled substances in Trinidad & Tobago, Jamaica, and Barbados",
    "Maintain accurate controlled substance registers in compliance with national legislation",
    "Identify signs of prescription fraud and drug-seeking behaviour while maintaining patient dignity",
  ],
  lessons: [
    // ── Lesson 6.1 ──
    {
      id: "m6-l1",
      title: "Drug Scheduling & Classification in the Caribbean",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "How the Law Classifies Dangerous Drugs",
        },
        {
          type: "text",
          body: "Controlled substances — also called dangerous drugs, scheduled drugs, or narcotic and psychotropic substances — are medications with a recognised potential for abuse, dependence, or diversion. While they have legitimate medical uses (pain management, anxiety treatment, ADHD management), their misuse can lead to addiction, harm, and death. Caribbean nations regulate these substances through a combination of international treaty obligations (UN Single Convention on Narcotic Drugs, 1961; Convention on Psychotropic Substances, 1971) and national legislation.",
        },
        {
          type: "text",
          body: "Each Caribbean nation maintains its own drug scheduling system, though these are broadly aligned with international frameworks. The schedules classify drugs by their potential for abuse, medical utility, and safety profile. Higher schedules (or more restrictive categories) indicate greater abuse potential and carry stricter prescribing, dispensing, and storage requirements.",
        },
        {
          type: "island-comparison",
          title: "Controlled Substance Legislation by Island",
          description:
            "While the categories differ in name, all three jurisdictions impose strict controls on narcotics and psychotropic substances.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Governed by the Dangerous Drugs Act (Chapter 11:25)",
                "The Pharmacy Board and Dangerous Drugs Inspectorate oversee compliance",
                "Dangerous drugs are classified into First Schedule (narcotics) and Second Schedule (psychotropic substances)",
                "Prescriptions for dangerous drugs must include the prescriber's dangerous drugs licence number",
                "Methadone maintenance programmes operate under specific regulatory provisions",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Governed by the Dangerous Drugs Act (1948, extensively amended)",
                "The Pharmacy Council and Dangerous Drugs Advisory Council oversee policy",
                "Jamaica has reformed its cannabis laws (Dangerous Drugs Amendment Act 2015) — possession of small amounts decriminalised",
                "Controlled substance prescriptions require specific form and documentation",
                "The National Council on Drug Abuse (NCDA) monitors substance abuse trends",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Governed by the Drug Abuse (Prevention and Control) Act (Cap. 131)",
                "The Chief Medical Officer authorises import/export of controlled substances",
                "Strict penalties for unauthorised possession, supply, and trafficking",
                "The Barbados Drug Service manages controlled substance supply in the public sector",
                "Pharmacies must maintain detailed registers subject to inspection by the Drug Service",
              ],
            },
          ],
        },
        {
          type: "key-term",
          term: "Drug Scheduling",
          definition:
            "The legal classification system that categorises drugs based on their potential for abuse, accepted medical use, and safety profile. Higher-schedule (more restricted) drugs carry stricter prescribing, dispensing, storage, and destruction requirements. Examples include morphine and pethidine (highly restricted), codeine-containing preparations (moderately restricted), and benzodiazepines (controlled but more widely prescribed).",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Legal Consequences of Non-Compliance",
          body: "Violations of controlled substance regulations carry severe penalties in all Caribbean jurisdictions — including criminal prosecution, imprisonment, loss of professional registration, and permanent disqualification from pharmacy practice. As a pharmacy technician, you must understand and follow controlled substance procedures exactly. Ignorance of the law is not a defence.",
        },
        {
          type: "knowledge-check",
          question:
            "Which Caribbean nation has reformed its cannabis legislation to decriminalise possession of small amounts?",
          options: [
            "Trinidad & Tobago",
            "Jamaica",
            "Barbados",
            "Grenada",
          ],
          correctIndex: 1,
          explanation:
            "Jamaica passed the Dangerous Drugs Amendment Act in 2015, decriminalising possession of small amounts of cannabis (up to 2 ounces) and establishing a Cannabis Licensing Authority. Trinidad & Tobago has also enacted cannabis reforms, but Jamaica's legislation was a regional landmark.",
        },
      ],
    },
    // ── Lesson 6.2 ──
    {
      id: "m6-l2",
      title: "Prescription Requirements for Controlled Substances",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "What Makes a Controlled Substance Prescription Valid?",
        },
        {
          type: "text",
          body: "Controlled substance prescriptions carry additional requirements beyond those for regular medications. These requirements serve two purposes: ensuring patient safety by documenting exactly what was prescribed and by whom, and creating an audit trail that deters diversion and enables regulatory oversight. A prescription that fails to meet these requirements cannot legally be dispensed.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Must be written in ink and in the prescriber's own handwriting (in most Caribbean jurisdictions — electronic prescribing of controlled substances is still limited)",
            "Must include the patient's full name AND address (address is mandatory, not optional as for regular prescriptions)",
            "Must specify the total quantity in both words and figures (e.g., 'twenty (20) tablets') to prevent alteration",
            "Must include the prescriber's dangerous drugs licence number or equivalent authorisation",
            "Must be dated and signed by the prescriber",
            "Must specify the dose, frequency, and total supply duration",
            "Must not be post-dated",
            "In most jurisdictions, controlled substance prescriptions cannot be repeated (refilled) without a new prescription",
          ],
        },
        {
          type: "table",
          caption: "Controlled Substance Prescription Validity Periods",
          headers: ["Jurisdiction", "Validity Period", "Refills Permitted?", "Special Notes"],
          rows: [
            ["Trinidad & Tobago", "Typically 7 days for narcotics", "No — new prescription required each time", "Prescriber's dangerous drugs licence number required"],
            ["Jamaica", "Varies by schedule — 7–14 days for narcotics", "No", "Pharmacy Council may set additional requirements"],
            ["Barbados", "7 days for Schedule I narcotics", "No", "Prescriber must hold authorisation from the Chief Medical Officer for certain substances"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Red Flags for Prescription Fraud",
          body: "Be alert to signs of potential fraud: prescriptions written on plain paper rather than official letterhead, prescriber details that cannot be verified, prescriptions from doctors in distant parishes for controlled substances (doctor shopping), alterations or erasures on the prescription, patients requesting specific brands or dosage forms of narcotics, patients claiming to be tourists who 'lost' their medication, and prescriptions presented outside of normal business hours. Report suspicious prescriptions to the supervising pharmacist immediately.",
        },
        {
          type: "key-term",
          term: "Drug Diversion",
          definition:
            "The transfer of a controlled substance from its lawful medical purpose to illicit use. Diversion can occur at any point in the supply chain — from manufacturer theft to prescriber fraud (pill mills), pharmacy theft, patient resale, or forged prescriptions. Pharmacy technicians play a frontline role in preventing diversion through vigilant prescription verification and accurate record-keeping.",
        },
        {
          type: "text",
          body: "When dispensing a controlled substance, the technician must verify every element of the prescription with heightened scrutiny: confirm the prescriber's identity and dangerous drugs authorisation, verify the patient's identity (often requiring government-issued ID), ensure the prescription meets all legal requirements, and flag any anomalies to the supervising pharmacist before proceeding.",
        },
        {
          type: "knowledge-check",
          question:
            "Why must the total quantity on a controlled substance prescription be written in both words and figures (e.g., 'twenty (20) tablets')?",
          options: [
            "To help the patient understand how many tablets they will receive",
            "To prevent alteration of the quantity — it is much harder to change both words and figures without detection",
            "Because controlled substances are more expensive and need accurate billing",
            "Because pharmacy software requires both formats for data entry",
          ],
          correctIndex: 1,
          explanation:
            "Writing the quantity in both words and figures is a security measure to prevent fraudulent alteration. Changing '20' to '200' is simple, but changing 'twenty' to 'two hundred' is far more difficult to do without visible evidence of tampering. This dual-format requirement has been a cornerstone of controlled substance prescribing for over a century.",
        },
      ],
    },
    // ── Lesson 6.3 ──
    {
      id: "m6-l3",
      title: "The Dangerous Drugs Register: Documentation & Record-Keeping",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Every Tablet Counted, Every Transaction Recorded",
        },
        {
          type: "text",
          body: "The Dangerous Drugs Register (DDR) — also known as the Controlled Drug Register or CD Register — is the cornerstone of controlled substance accountability in a pharmacy. It is a legally mandated record that documents every transaction involving controlled substances: every receipt, every dispensing, every return, every destruction, and every balance. The register must enable any inspector to trace the complete lifecycle of every unit of a controlled substance from arrival at the pharmacy to its final disposition.",
        },
        {
          type: "heading",
          level: 3,
          text: "What Must Be Recorded",
        },
        {
          type: "text",
          body: "Each entry in the register must include the date of transaction, the name and form of the drug, the quantity received or supplied, the running balance, and — for dispensed items — the patient's name and address, the prescriber's name and dangerous drugs licence number, and the prescription reference number. Entries must be made in ink (not pencil), must not be altered by erasure (corrections must be made by striking through with a single line and initialling), and must be made at the time of the transaction — not retrospectively.",
        },
        {
          type: "table",
          caption: "Dangerous Drugs Register: Sample Entry Format",
          headers: ["Date", "Drug Name & Form", "Received From / Supplied To", "Qty In", "Qty Out", "Balance", "Pharmacist Initials"],
          rows: [
            ["15/01/2025", "Morphine Sulphate 10 mg Tablets", "Received from NIPDEC, Invoice #4521", "100", "—", "100", "KS"],
            ["16/01/2025", "Morphine Sulphate 10 mg Tablets", "Supplied to J. Mohammed, Rx #7834, Dr. Singh (DD Lic #456)", "—", "20", "80", "KS"],
            ["18/01/2025", "Morphine Sulphate 10 mg Tablets", "Supplied to R. Rampersad, Rx #7841, Dr. Patel (DD Lic #289)", "—", "10", "70", "AM"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Balance Reconciliation",
          body: "The running balance in the register must match the physical count at all times. Any discrepancy — even a single tablet — must be investigated immediately, documented, and reported to the supervising pharmacist. Unexplained discrepancies in controlled substance balances may require reporting to the relevant regulatory authority (Dangerous Drugs Inspectorate in Trinidad, Pharmacy Council in Jamaica, Drug Service in Barbados).",
        },
        {
          type: "key-term",
          term: "Dangerous Drugs Register (DDR)",
          definition:
            "A legally mandated, bound record book (or validated electronic equivalent where permitted) documenting every receipt, dispensing, destruction, and balance of controlled substances in a pharmacy. The DDR must be available for inspection by regulatory authorities at any time and must be retained for a minimum period (typically 2–5 years after the last entry, depending on jurisdiction).",
        },
        {
          type: "text",
          body: "Physical storage of controlled substances must match the accountability in the register. All controlled substances must be stored in a double-locked safe or cabinet — two separate locks requiring two separate keys, held by different authorised persons. Access to the controlled substance cabinet must be logged separately from the DDR, creating a dual audit trail: who accessed the cabinet and what transactions occurred.",
        },
        {
          type: "knowledge-check",
          question:
            "How should an error be corrected in a Dangerous Drugs Register?",
          options: [
            "Use correction fluid (white-out) and rewrite the entry",
            "Erase the error with a pencil eraser and rewrite",
            "Strike through the error with a single line, initial and date the correction, and write the correct entry",
            "Remove the page and rewrite it completely",
          ],
          correctIndex: 2,
          explanation:
            "Corrections in a Dangerous Drugs Register must be made by striking through the error with a single line so that the original entry remains legible, then initialling and dating the correction. Correction fluid, erasures, and page removal are prohibited — they destroy the audit trail and may constitute evidence of tampering.",
        },
      ],
    },
    // ── Lesson 6.4 ──
    {
      id: "m6-l4",
      title: "Controlled Substance Destruction & Regulatory Reporting",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The End of the Lifecycle: Destruction & Disposal",
        },
        {
          type: "text",
          body: "When controlled substances are expired, damaged, or no longer needed, they cannot simply be discarded — they must be destroyed through a witnessed, documented process that satisfies regulatory requirements. The destruction process ensures that the substances cannot be recovered, diverted, or misused after disposal.",
        },
        {
          type: "text",
          body: "In most Caribbean jurisdictions, controlled substance destruction must be witnessed by an authorised official — typically an inspector from the Dangerous Drugs Inspectorate, the Pharmacy Board, or the police narcotics division. Both the pharmacist and the witness must sign a destruction certificate documenting exactly what was destroyed, the quantity, the method of destruction, and the date.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Identify and quarantine all controlled substances due for destruction (expired, damaged, or patient returns)",
            "Compile a detailed inventory list: drug name, form, strength, quantity, batch numbers, and reason for destruction",
            "Request an authorised witness from the relevant regulatory authority",
            "Carry out the destruction in the presence of the witness using an approved method (incineration, chemical denaturing, or other method approved by the authority)",
            "Complete the destruction certificate — signed by the pharmacist and the witness",
            "Update the Dangerous Drugs Register to reflect the destroyed quantities and the new balance",
            "File the destruction certificate for the required retention period",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Regulatory Reporting Requirements",
          body: "Caribbean pharmacies must submit regular reports on controlled substance transactions to their national regulatory authority. In Trinidad & Tobago, quarterly returns are submitted to the Dangerous Drugs Inspectorate. In Jamaica, reports go to the Pharmacy Council. In Barbados, the Drug Service requires periodic returns. These reports include total quantities received, dispensed, destroyed, and the closing balance. Failure to submit timely reports can result in licence suspension.",
        },
        {
          type: "key-term",
          term: "Witnessed Destruction",
          definition:
            "The supervised disposal of controlled substances in the presence of an authorised witness (typically a regulatory inspector or police officer) who verifies the identity and quantity of the substances destroyed and co-signs a destruction certificate. This process creates an unbroken chain of accountability from receipt through final disposal.",
        },
        {
          type: "text",
          body: "Patient returns of controlled substances present a special challenge. When a patient returns unused controlled medication (for example, after a family member's death), the pharmacy must document the return, quarantine the medication, and include it in the next scheduled destruction. The returned medication must never be redispensed — it cannot be verified as genuine, uncontaminated, or properly stored during the time it was in the patient's possession.",
        },
        {
          type: "knowledge-check",
          question:
            "A patient returns 15 unused morphine tablets after her husband passed away. What should the pharmacy do?",
          options: [
            "Accept the return, verify the tablets, and redispense them to another patient",
            "Accept the return, document it in the DDR, quarantine the tablets, and include them in the next witnessed destruction",
            "Refuse to accept the tablets and advise the patient to flush them down the toilet",
            "Accept the tablets and dispose of them in the regular pharmacy waste bin",
          ],
          correctIndex: 1,
          explanation:
            "The pharmacy should accept the return, document it in the Dangerous Drugs Register (noting the patient's name and quantity returned), quarantine the tablets, and include them in the next scheduled witnessed destruction. Returned controlled substances must never be redispensed, flushed, or placed in regular waste — they must follow the complete destruction protocol.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m6-q1",
      question:
        "What is the primary purpose of controlled substance scheduling?",
      options: [
        "To make medications more expensive to discourage use",
        "To classify drugs based on abuse potential, medical utility, and safety — and apply proportional controls",
        "To ensure pharmacies stock only the most popular medications",
        "To simplify the prescribing process for doctors",
      ],
      correctIndex: 1,
      explanation:
        "Drug scheduling classifies substances based on their abuse potential, accepted medical use, and safety profile. Higher schedules carry stricter controls proportional to the risk. This system balances patient access to necessary medications with the need to prevent diversion and abuse.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q2",
      question:
        "True or False: In most Caribbean jurisdictions, controlled substance prescriptions can be refilled without a new prescription from the prescriber.",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "False. In most Caribbean jurisdictions (Trinidad & Tobago, Jamaica, Barbados), controlled substance prescriptions — particularly for narcotics — cannot be refilled. A new prescription is required each time to ensure ongoing medical oversight and prevent diversion.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q3",
      question:
        "Why must controlled substance quantities on prescriptions be written in both words and figures?",
      options: [
        "To help the pharmacist calculate pricing",
        "To prevent fraudulent alteration of the quantity",
        "Because controlled substances come in non-standard pack sizes",
        "To comply with international shipping regulations",
      ],
      correctIndex: 1,
      explanation:
        "The dual-format requirement (words and figures) makes it much harder to fraudulently alter the prescribed quantity. Changing '20' to '200' in figures is easy, but changing 'twenty' to 'two hundred' is far more difficult without visible evidence of tampering.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q4",
      question:
        "Which of the following are red flags for potential controlled substance prescription fraud? Select ALL that apply.",
      options: [
        "Prescription written on plain paper without official letterhead",
        "Patient requesting a specific brand name of a narcotic",
        "Prescriber details that cannot be verified by phone",
        "Patient presenting a regular repeat prescription from their known doctor",
        "Prescription presented outside normal business hours",
      ],
      correctIndex: 0,
      explanation:
        "Options A, B, C, and E are all red flags for potential fraud. A prescription on unofficial paper, a patient demanding specific brands of narcotics, unverifiable prescriber details, and unusual presentation timing all warrant heightened scrutiny. Option D — a regular repeat from a known doctor — is routine and does not indicate fraud.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 2, 4],
      },
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m6-q5",
      question:
        "In what type of storage must controlled substances be kept?",
      options: [
        "On regular pharmacy shelves with other medications",
        "In a double-locked safe or cabinet with separate keys held by different authorised persons",
        "In the pharmacy refrigerator for added security",
        "In the pharmacy manager's office desk",
      ],
      correctIndex: 1,
      explanation:
        "Controlled substances must be stored in a double-locked safe or cabinet — two separate locks requiring two separate keys, held by different authorised persons. This dual-lock system creates an additional layer of security and accountability.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q6",
      question:
        "Arrange the following controlled substance destruction steps in the correct order.",
      options: [
        "Complete the destruction certificate signed by pharmacist and witness",
        "Request an authorised witness from the regulatory authority",
        "Identify and quarantine all controlled substances due for destruction",
        "Carry out the destruction using an approved method",
        "Update the Dangerous Drugs Register with the destroyed quantities",
      ],
      correctIndex: 0,
      explanation:
        "The correct order is: (1) Identify and quarantine substances, (2) Request an authorised witness, (3) Carry out the destruction, (4) Complete the destruction certificate, (5) Update the DDR.",
      questionType: "ordering",
      questionData: {
        correct_order: [2, 1, 3, 0, 4],
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q7",
      question:
        "A discrepancy of 3 morphine tablets is discovered between the DDR balance and the physical count. What is the correct course of action?",
      options: [
        "Adjust the register to match the physical count and move on",
        "Investigate immediately, document the discrepancy, and report to the supervising pharmacist and potentially the regulatory authority",
        "Wait until the next scheduled audit to investigate",
        "Assume the discrepancy is due to a counting error and ignore it",
      ],
      correctIndex: 1,
      explanation:
        "Any discrepancy in controlled substance balances — even a single tablet — must be investigated immediately, documented, and reported to the supervising pharmacist. Depending on the outcome of the investigation, reporting to the regulatory authority may be required. Controlled substance discrepancies are never ignored or deferred.",
      questionType: "scenario",
      questionData: {
        context: "You are conducting a routine controlled substance balance check at a Trinidad community pharmacy.",
      },
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m6-q8",
      question:
        "Fill in the blank: Controlled substance destruction must be carried out in the presence of an authorised _____________.",
      options: [
        "witness (regulatory inspector or police officer)",
        "pharmacist only",
        "patient",
        "pharmacy technician",
      ],
      correctIndex: 0,
      explanation:
        "Controlled substance destruction must be witnessed by an authorised official — typically an inspector from the Dangerous Drugs Inspectorate, the Pharmacy Board, or the police narcotics division. The witness verifies the identity and quantity of substances destroyed and co-signs the destruction certificate.",
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: ["witness", "authorised witness", "authorized witness"],
        case_sensitive: false,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q9",
      question:
        "In Trinidad & Tobago, which body oversees compliance with controlled substance regulations in pharmacies?",
      options: [
        "The Trinidad and Tobago Bureau of Standards",
        "The Pharmacy Board and Dangerous Drugs Inspectorate",
        "CARPHA",
        "The Caribbean Association of Pharmacists",
      ],
      correctIndex: 1,
      explanation:
        "In Trinidad & Tobago, the Pharmacy Board and the Dangerous Drugs Inspectorate oversee controlled substance compliance under the Dangerous Drugs Act (Chapter 11:25). They conduct inspections, review registers, and enforce penalties for non-compliance.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q10",
      question:
        "A patient returns unused controlled substance tablets. Can these be redispensed to another patient?",
      options: [
        "Yes, if the tablets are in their original packaging",
        "Yes, if the pharmacist verifies they are genuine",
        "No — returned controlled substances must never be redispensed and must be destroyed through the witnessed destruction process",
        "Yes, but only if the patient provides proof of purchase",
      ],
      correctIndex: 2,
      explanation:
        "Returned controlled substances must never be redispensed. The pharmacy cannot verify that the medications are genuine, uncontaminated, or properly stored during the time in the patient's possession. They must be documented, quarantined, and destroyed through the witnessed destruction process.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
  ],
};

// ============================================================================
// MODULE 7 — Technology in Dispensing: Barcode Systems, POS & Pharmacy Software
// ============================================================================

const module7: Module = {
  id: "m7-technology-dispensing",
  number: 7,
  title: "Technology in Dispensing: Barcode Systems, POS & Pharmacy Software",
  description:
    "Technology is transforming Caribbean pharmacy practice — from manual prescription books to integrated dispensing software, barcode verification, and point-of-sale systems. This module explores how technology improves accuracy, efficiency, and patient safety, while addressing the unique implementation challenges in the Caribbean context.",
  learningObjectives: [
    "Describe how pharmacy dispensing software improves accuracy and workflow efficiency",
    "Explain the role of barcode scanning in medication verification and inventory management",
    "Evaluate different technology solutions appropriate for Caribbean pharmacy settings",
    "Apply basic troubleshooting skills to common pharmacy technology issues",
  ],
  lessons: [
    // ── Lesson 7.1 ──
    {
      id: "m7-l1",
      title: "Pharmacy Dispensing Software: Features & Workflow Integration",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Digital Backbone of Modern Dispensing",
        },
        {
          type: "text",
          body: "Pharmacy dispensing software — also called pharmacy management systems (PMS) — has revolutionised the way prescriptions are processed, medications are tracked, and patient records are maintained. In the Caribbean, adoption is accelerating but uneven: larger pharmacies and hospital pharmacies increasingly use comprehensive software, while many smaller independent pharmacies still rely on manual or semi-manual processes. Understanding these systems is essential for any pharmacy technician entering the modern workforce.",
        },
        {
          type: "text",
          body: "A comprehensive pharmacy management system integrates multiple functions into a single platform: prescription data entry, drug interaction checking, label generation, inventory management, dispensing records, patient profiles, reporting, and point-of-sale processing. The benefits are significant — reduced dispensing errors, faster processing, better inventory visibility, and comprehensive audit trails. However, the technology is only as good as the data entered and the staff trained to use it.",
        },
        {
          type: "table",
          caption: "Key Features of Pharmacy Management Systems",
          headers: ["Feature", "Function", "Patient Safety Benefit"],
          rows: [
            ["Prescription data entry", "Captures prescription details electronically", "Reduces transcription errors from illegible handwriting"],
            ["Drug interaction alerts", "Flags potential interactions with patient's other medications", "Prevents harmful drug combinations"],
            ["Allergy checking", "Cross-references dispensed drug against patient's allergy profile", "Prevents allergic reactions"],
            ["Label generation", "Produces standardised, legible labels automatically", "Eliminates handwritten label errors"],
            ["Inventory tracking", "Real-time stock levels updated with every transaction", "Enables automatic reorder alerts to prevent stockouts"],
            ["Patient profiles", "Stores medication history, allergies, and demographic data", "Enables continuity of care across visits"],
            ["Regulatory reporting", "Generates controlled substance reports and audit trails", "Simplifies compliance with regulatory requirements"],
          ],
        },
        {
          type: "key-term",
          term: "Pharmacy Management System (PMS)",
          definition:
            "An integrated software platform that manages the core operations of a pharmacy — including prescription processing, dispensing, inventory management, patient records, billing, and regulatory reporting. Leading systems in the Caribbean market include minfos, Rx30, and various locally developed solutions.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Data Integrity Is Your Responsibility",
          body: "A pharmacy management system is only as accurate as the data entered into it. Every prescription must be entered completely and correctly. Every stock receipt must be logged. Every dispensing transaction must be recorded. The principle of 'garbage in, garbage out' applies with life-or-death consequences in pharmacy. As a technician, you are a critical gatekeeper for data integrity.",
        },
        {
          type: "text",
          body: "For Caribbean pharmacies considering technology adoption, key factors include: cost of implementation and ongoing licencing, internet reliability (cloud-based systems require stable connectivity), compatibility with existing hardware, support for Caribbean regulatory requirements (including CDAP, NHF, and controlled substance reporting), vendor support availability in the region, and staff training requirements.",
        },
        {
          type: "knowledge-check",
          question:
            "A pharmacy management system generates a drug interaction alert when you enter a new prescription for warfarin for a patient who is already taking aspirin. What should you do?",
          options: [
            "Override the alert because doctors always know what they're prescribing",
            "Flag the interaction to the supervising pharmacist for clinical review before dispensing",
            "Refuse to dispense the warfarin and tell the patient to stop taking aspirin",
            "Ignore the alert — these systems produce too many false positives",
          ],
          correctIndex: 1,
          explanation:
            "Drug interaction alerts should always be flagged to the supervising pharmacist for clinical review. The pharmacist will assess whether the combination is intentional (some patients are on both with appropriate monitoring) or an error. Never override clinical alerts without pharmacist review, and never make clinical decisions independently as a technician.",
        },
      ],
    },
    // ── Lesson 7.2 ──
    {
      id: "m7-l2",
      title: "Barcode Scanning & Medication Verification",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "One Scan, One Verification — Every Time",
        },
        {
          type: "text",
          body: "Barcode technology adds a powerful verification layer to the dispensing process. Every commercially manufactured medication carries a barcode — either a linear barcode (1D) or a data matrix code (2D/QR) — that encodes the product's identity: drug name, strength, dosage form, pack size, batch number, and expiry date. Scanning this barcode against the prescription data provides an electronic verification that the correct product has been selected.",
        },
        {
          type: "text",
          body: "In a barcode-enabled dispensing workflow, the technician scans each product at the point of selection from the shelf. The software compares the scanned barcode against the prescription data entry. If the product matches, the system confirms the selection with a green indicator or audible tone. If there is a mismatch — wrong drug, wrong strength, wrong formulation — the system generates an immediate alert. This provides a safety net that catches errors the human eye might miss, particularly with LASA medications.",
        },
        {
          type: "key-term",
          term: "GS1 DataMatrix",
          definition:
            "A two-dimensional barcode standard used globally for pharmaceutical products. It encodes the Global Trade Item Number (GTIN), batch/lot number, expiry date, and serial number in a compact square or rectangular format. The GS1 DataMatrix is the foundation of pharmaceutical serialisation and track-and-trace systems being adopted worldwide, including in Caribbean markets.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Barcode Adoption in the Caribbean",
          body: "Barcode scanning adoption in Caribbean pharmacies is growing but still limited. Hospital pharmacies and larger chains are leading the way, while many independent community pharmacies have yet to invest in barcode infrastructure. The cost of scanners and compatible software is decreasing, making adoption increasingly accessible. CARICOM's work on pharmaceutical track-and-trace systems is expected to accelerate barcode adoption across the region.",
        },
        {
          type: "text",
          body: "Beyond dispensing verification, barcode scanning supports inventory management. Scanning products at the point of receipt updates stock levels automatically. Scanning at the point of dispensing decrements stock levels in real time. This creates a perpetual inventory system with minimal manual data entry, reducing errors and enabling real-time visibility into stock levels, reorder alerts, and expiry date tracking.",
        },
        {
          type: "knowledge-check",
          question:
            "You scan a medication during the dispensing process and the system displays a red alert indicating a product mismatch. What should you do?",
          options: [
            "Dispense the medication anyway — barcode scanners often malfunction",
            "Stop, verify the product against the prescription manually, and select the correct product",
            "Call the software vendor to report a system bug",
            "Ask the patient which medication they prefer",
          ],
          correctIndex: 1,
          explanation:
            "A barcode mismatch alert means the scanned product does not match the prescription. Stop immediately, manually verify the product against the prescription, and select the correct item. Never override or ignore barcode alerts without investigation — they are designed to catch potentially dangerous selection errors.",
        },
      ],
    },
    // ── Lesson 7.3 ──
    {
      id: "m7-l3",
      title: "Point-of-Sale Systems & Electronic Record-Keeping",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Where Dispensing Meets Commerce",
        },
        {
          type: "text",
          body: "The point-of-sale (POS) system is where the pharmacy's clinical workflow intersects with its commercial operations. A modern pharmacy POS does far more than process payments — it integrates with the dispensing software to record transactions, calculate co-payments for subsidised programme patients (CDAP, NHF), process insurance claims, manage customer loyalty programmes, and generate financial reports.",
        },
        {
          type: "text",
          body: "In the Caribbean context, POS integration with government subsidy programmes is particularly important. When a CDAP patient in Trinidad collects their free chronic disease medication, the POS system records the transaction, captures the patient's CDAP registration number, and generates the data needed for the pharmacy to claim reimbursement from the government. Similarly, in Jamaica, NHF co-payment calculations are processed through the POS. Errors in POS transactions can result in rejected reimbursement claims and revenue loss for the pharmacy.",
        },
        {
          type: "table",
          caption: "POS System Integration Points in Caribbean Pharmacies",
          headers: ["Integration", "Function", "Caribbean Application"],
          rows: [
            ["Dispensing software", "Links prescriptions to transactions", "Ensures every dispensed item is billed or recorded for subsidy claims"],
            ["Government programmes", "CDAP, NHF, Barbados Drug Service", "Processes subsidised medications and generates reimbursement claims"],
            ["Insurance companies", "Real-time eligibility check and claims processing", "Verifies patient coverage and calculates co-payments at the point of sale"],
            ["Inventory system", "Decrements stock in real time", "Maintains accurate stock levels and triggers reorder alerts"],
            ["Financial reporting", "Daily sales, margins, programme reimbursements", "Enables pharmacy financial management and audit readiness"],
          ],
        },
        {
          type: "key-term",
          term: "Point of Sale (POS)",
          definition:
            "The system — hardware and software — at which a retail transaction is completed. In a pharmacy, the POS integrates with the dispensing management system to link clinical transactions (prescriptions dispensed) with financial transactions (payments received, co-payments calculated, subsidy claims generated). Modern POS systems include touchscreens, barcode scanners, receipt printers, and electronic payment terminals.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Data Security & Patient Privacy",
          body: "Pharmacy POS and management systems contain sensitive patient health information — medication histories, diagnoses implied by prescribed medications, and personal identification data. All pharmacy staff must follow data protection practices: strong passwords (changed regularly), automatic screen locks, no sharing of login credentials, and secure backup of all data. In jurisdictions with data protection legislation, breaches can result in significant penalties.",
        },
        {
          type: "text",
          body: "Electronic record-keeping offers significant advantages over paper-based systems: instant search and retrieval, automatic backup, reduced physical storage requirements, and comprehensive audit trails. However, electronic systems require reliable power (with UPS backup), regular data backup (cloud and local), software updates, and staff training on proper use. The transition from paper to electronic should be planned carefully, with a parallel running period where both systems are maintained simultaneously.",
        },
        {
          type: "knowledge-check",
          question:
            "A CDAP patient in Trinidad presents a prescription for their chronic disease medication. Why is accurate POS transaction recording important in this scenario?",
          options: [
            "To charge the patient the correct retail price",
            "To generate the reimbursement claim data that the pharmacy needs to get paid by the government",
            "To track the patient's medication for marketing purposes",
            "POS recording is not important for CDAP transactions",
          ],
          correctIndex: 1,
          explanation:
            "CDAP medications are provided free to the patient, but the pharmacy is reimbursed by the government. Accurate POS transaction recording — including the patient's CDAP registration number and the medication dispensed — generates the data needed for the pharmacy to submit its reimbursement claim. Errors or omissions result in rejected claims and lost revenue.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m7-q1",
      question:
        "What is the primary patient safety benefit of barcode scanning during the dispensing process?",
      options: [
        "It speeds up the dispensing process",
        "It eliminates the need for pharmacist verification",
        "It provides electronic verification that the correct product has been selected to match the prescription",
        "It generates promotional discounts for frequent customers",
      ],
      correctIndex: 2,
      explanation:
        "Barcode scanning provides electronic verification by comparing the scanned product's encoded identity (drug name, strength, batch, expiry) against the prescription data entry. This catches selection errors — particularly LASA medication mix-ups — that the human eye might miss.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q2",
      question:
        "True or False: A pharmacy management system eliminates the need for manual verification checks by the pharmacist.",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "False. Pharmacy management systems supplement — never replace — manual verification by the pharmacist. Technology is a safety layer, not a substitute for professional judgement. The pharmacist's final verification remains a legal and professional requirement.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q3",
      question:
        "Which barcode standard is becoming the global norm for pharmaceutical product identification?",
      options: [
        "UPC-A barcode",
        "QR code",
        "GS1 DataMatrix",
        "Code 128",
      ],
      correctIndex: 2,
      explanation:
        "The GS1 DataMatrix is the internationally recognised standard for pharmaceutical products. It encodes the GTIN, batch number, expiry date, and serial number — enabling pharmaceutical serialisation and track-and-trace systems.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q4",
      question:
        "Which government programme in Jamaica requires POS integration for co-payment processing at the pharmacy?",
      options: [
        "CDAP (Chronic Disease Assistance Programme)",
        "NHF (National Health Fund)",
        "Barbados Drug Service",
        "OECS PPS",
      ],
      correctIndex: 1,
      explanation:
        "Jamaica's National Health Fund (NHF) subsidises medications for specific chronic conditions. POS integration is needed to verify patient NHF eligibility, calculate the subsidised co-payment, and generate reimbursement claims for the pharmacy.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q5",
      question:
        "A pharmacy technician shares her POS login credentials with a colleague to save time during a busy period. What is the risk?",
      options: [
        "No risk — it improves efficiency",
        "It compromises the audit trail, as transactions cannot be attributed to the correct staff member",
        "It speeds up the dispensing process with no downside",
        "It is required during busy periods",
      ],
      correctIndex: 1,
      explanation:
        "Sharing login credentials destroys the audit trail. Individual logins ensure that every transaction can be traced to the staff member who processed it — essential for accountability, error tracking, and regulatory compliance. Credential sharing may also violate data protection laws.",
      questionType: "scenario",
      questionData: {
        context: "Consider the implications for accountability and regulatory compliance.",
      },
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m7-q6",
      question:
        "Match each technology component with its primary function in a pharmacy.",
      options: [
        "POS system → Financial transaction processing and programme claims",
        "Barcode scanner → Product verification at point of selection",
        "Pharmacy management software → Prescription processing and patient records",
        "All matches are correct",
      ],
      correctIndex: 3,
      explanation:
        "All three matches are correct. The POS handles financial transactions and subsidy claims. The barcode scanner verifies product selection. The pharmacy management software manages prescriptions, patient records, and inventory.",
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "POS system", right: "Financial transactions and programme claims" },
          { left: "Barcode scanner", right: "Product verification at point of selection" },
          { left: "Pharmacy management software", right: "Prescription processing and patient records" },
        ],
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q7",
      question:
        "What key factor must Caribbean pharmacies consider when evaluating cloud-based pharmacy management systems?",
      options: [
        "The colour scheme of the software interface",
        "Internet reliability, since cloud systems require stable connectivity",
        "Whether the software was developed in the Caribbean",
        "The number of languages the software supports",
      ],
      correctIndex: 1,
      explanation:
        "Cloud-based systems require reliable internet connectivity to function. In the Caribbean, where internet stability can be inconsistent, particularly during tropical weather events, this is a critical evaluation factor. Pharmacies must ensure adequate connectivity or choose systems with offline capability.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m7-q8",
      question:
        "The principle of 'garbage in, garbage out' in pharmacy technology means:",
      options: [
        "Old computers should be replaced with new ones",
        "The accuracy of system outputs depends entirely on the accuracy of data entered by staff",
        "Expired medications should be entered into the system before disposal",
        "Only recycled materials should be used for pharmacy packaging",
      ],
      correctIndex: 1,
      explanation:
        "The 'garbage in, garbage out' principle means that a system's outputs are only as accurate as its inputs. In pharmacy, this has life-or-death implications: if a prescription is entered incorrectly, the system will generate an incorrect label, incorrect interaction checks, and incorrect inventory records. Data accuracy is the technician's responsibility.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// MODULE 8 — Medication Returns, Recalls & Waste Disposal
// ============================================================================

const module8: Module = {
  id: "m8-returns-recalls-disposal",
  number: 8,
  title: "Medication Returns, Recalls & Waste Disposal",
  description:
    "When medications leave the pharmacy and come back — whether through patient returns, manufacturer recalls, or expiry — the pharmacy must handle them safely, legally, and responsibly. This module covers return policies, recall classification and response, and the environmental challenges of pharmaceutical waste disposal in island environments.",
  learningObjectives: [
    "Describe the appropriate procedures for handling patient medication returns in Caribbean pharmacies",
    "Classify medication recalls by severity (Class I, II, III) and implement appropriate response actions",
    "Explain the environmental and legal requirements for pharmaceutical waste disposal in Caribbean island nations",
  ],
  lessons: [
    // ── Lesson 8.1 ──
    {
      id: "m8-l1",
      title: "Patient Returns & Pharmacy Return Policies",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "When Medications Come Back",
        },
        {
          type: "text",
          body: "Medication returns present a unique challenge in pharmacy practice. Unlike most consumer products, medications cannot simply be returned to the shelf after a patient has taken them home. Once a prescription medication has left the pharmacy's control, its integrity can no longer be guaranteed — storage conditions are unknown, tampering cannot be ruled out, and contamination is possible. For this reason, returned prescription medications must never be redispensed in any Caribbean jurisdiction.",
        },
        {
          type: "text",
          body: "Common reasons patients return medications include: discontinuation by the prescriber (change in therapy), adverse drug reactions (patient was told to stop taking the medication), bereavement (returning a deceased family member's medications), dispensing errors discovered by the patient, and overstocking from previous prescriptions. Each situation requires sensitivity and clear communication, as well as proper documentation and disposal procedures.",
        },
        {
          type: "key-term",
          term: "Medication Return",
          definition:
            "The process by which a patient brings previously dispensed medication back to the pharmacy. In Caribbean practice, returned prescription medications are not redispensed. They are accepted (in most jurisdictions), documented, quarantined, and disposed of through the appropriate pharmaceutical waste stream. Some pharmacies may issue a credit or exchange for OTC products returned in unopened condition within a specified period.",
        },
        {
          type: "table",
          caption: "Return Handling by Medication Type",
          headers: ["Medication Type", "Acceptance", "Disposition", "Special Considerations"],
          rows: [
            ["Prescription (non-controlled)", "Accept and document", "Quarantine for pharmaceutical waste disposal", "Never redispense; reassure the patient that proper disposal is important"],
            ["Controlled substances", "Accept and document in DDR", "Quarantine for witnessed destruction", "Full DDR entry required; include in next destruction event"],
            ["OTC — unopened", "May accept for exchange/credit per pharmacy policy", "Return to stock if packaging integrity is verified", "Policy varies by pharmacy; check with management"],
            ["OTC — opened", "Accept for disposal", "Pharmaceutical waste stream", "Cannot be returned to stock once opened"],
            ["Refrigerated/cold chain", "Accept for disposal", "Pharmaceutical waste — cannot verify storage history", "Explain to the patient that cold chain cannot be confirmed after leaving the pharmacy"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Patient Conversation",
          body: "When a patient returns medication, the interaction requires empathy and professionalism. The patient may be upset (adverse reaction), grieving (bereavement), or embarrassed (admitting non-adherence). Listen actively, explain the disposal process, and reassure them that returning medication to the pharmacy is the responsible thing to do — far better than leaving it in the home (risk of accidental ingestion by children) or flushing it down the drain (environmental harm).",
        },
        {
          type: "knowledge-check",
          question:
            "A patient returns an unopened bottle of prescription lisinopril 10 mg, explaining that her doctor changed her medication. Can this be redispensed to another patient?",
          options: [
            "Yes — it is unopened and appears to be in good condition",
            "Yes — but only with the pharmacist's approval",
            "No — returned prescription medications must never be redispensed, regardless of apparent condition",
            "Yes — but only if the original dispensing label is removed first",
          ],
          correctIndex: 2,
          explanation:
            "Returned prescription medications must never be redispensed, even if they appear unopened and in good condition. Once the medication has left the pharmacy's controlled environment, storage conditions, tampering, and contamination cannot be verified. The returned medication must be quarantined and disposed of through the pharmaceutical waste stream.",
        },
      ],
    },
    // ── Lesson 8.2 ──
    {
      id: "m8-l2",
      title: "Medication Recalls: Classification & Response",
      duration: "7 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "When Manufacturers Sound the Alarm",
        },
        {
          type: "text",
          body: "A medication recall occurs when a manufacturer or regulatory authority determines that a pharmaceutical product on the market may be defective, contaminated, mislabelled, or otherwise unsafe. Recalls range from precautionary measures (minor labelling errors) to emergency actions (contaminated products that pose immediate health risks). As a pharmacy technician, your ability to respond quickly and accurately to a recall can protect patients from serious harm.",
        },
        {
          type: "heading",
          level: 3,
          text: "Recall Classification",
        },
        {
          type: "table",
          caption: "Medication Recall Classes",
          headers: ["Class", "Risk Level", "Description", "Response Urgency"],
          rows: [
            [
              "Class I",
              "High — serious health risk or death",
              "The product poses a reasonable probability of causing serious adverse health consequences or death",
              "IMMEDIATE action required. Pull all affected stock. Contact patients who received affected batches.",
            ],
            [
              "Class II",
              "Moderate — temporary or reversible health effects",
              "The product may cause temporary or medically reversible adverse health effects; probability of serious consequences is remote",
              "URGENT action. Remove from stock within 24–48 hours. Notify affected patients.",
            ],
            [
              "Class III",
              "Low — unlikely to cause adverse health effects",
              "The product violates regulations but is not likely to cause adverse health effects (e.g., minor labelling error)",
              "Standard action. Remove from stock during routine operations. Patient notification not usually required.",
            ],
          ],
        },
        {
          type: "key-term",
          term: "Medication Recall",
          definition:
            "A manufacturer-initiated or regulatory authority-ordered withdrawal of a pharmaceutical product from the market due to identified defects, contamination, mislabelling, or safety concerns. Recalls are classified by severity (Class I, II, or III) and require specific response actions from every pharmacy holding affected stock.",
        },
        {
          type: "text",
          body: "In the Caribbean, recall notifications may reach pharmacies through multiple channels: direct manufacturer communication, wholesaler alerts, regulatory authority notices (CFDD in Trinidad, Standards and Regulation Division in Jamaica, Barbados Drug Service), CARPHA regional alerts, and professional association communications. Pharmacy technicians must monitor all these channels and have a clear recall response SOP that can be activated immediately.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Recall Response Checklist",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Identify: Check the recall notice for the specific drug name, strength, batch numbers, and expiry dates affected",
            "Locate: Search all pharmacy stock areas (shelves, fridge, backstock, returned items) for the affected product",
            "Quarantine: Remove all affected stock from dispensing areas and place in a clearly labelled quarantine zone",
            "Document: Record the quantity quarantined, batch numbers, and location found",
            "Notify: For Class I and II recalls, identify patients who received the affected batch from dispensing records and contact them with clear instructions",
            "Report: Notify the supervising pharmacist and the relevant regulatory authority as required",
            "Return or dispose: Follow the manufacturer's or regulatory authority's instructions for returning or disposing of the quarantined stock",
            "Record: Complete all recall documentation and file for regulatory inspection",
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Class I Recalls — Immediate Action Required",
          body: "When a Class I recall is issued, treat it as a patient safety emergency. Stop dispensing the affected product immediately. Pull all affected stock from every location in the pharmacy. Check dispensing records to identify every patient who received the affected batch. Contact those patients promptly with clear instructions — whether to stop taking the medication, return it to the pharmacy, or seek medical attention. Document everything. Minutes matter in a Class I recall.",
        },
        {
          type: "knowledge-check",
          question:
            "A manufacturer issues a Class II recall for a specific batch of metformin 500 mg due to an impurity exceeding acceptable limits. What should the pharmacy do?",
          options: [
            "Continue dispensing the remaining stock since it's only Class II",
            "Remove all affected batch stock within 24–48 hours, quarantine it, notify affected patients, and follow manufacturer return instructions",
            "Discard the affected stock in the regular waste bin",
            "Wait for the regulatory authority to visit the pharmacy and remove the stock",
          ],
          correctIndex: 1,
          explanation:
            "A Class II recall requires urgent action within 24–48 hours: remove all affected stock from dispensing areas, quarantine it, identify and notify affected patients, and follow the manufacturer's return or disposal instructions. Continuing to dispense (option A) is dangerous, regular waste disposal (option C) is inappropriate for pharmaceutical products, and waiting passively (option D) is inadequate.",
        },
      ],
    },
    // ── Lesson 8.3 ──
    {
      id: "m8-l3",
      title: "Pharmaceutical Waste Disposal & Environmental Responsibility",
      duration: "6 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Disposing of Medications Responsibly on Small Islands",
        },
        {
          type: "text",
          body: "Pharmaceutical waste disposal is a significant environmental challenge for Caribbean island nations. Small island developing states (SIDS) have limited land area, fragile ecosystems, and limited waste management infrastructure. Medications flushed down drains can contaminate the marine environment and freshwater sources. Medications deposited in landfills can leach into groundwater. And incineration — while effective — requires facilities that many Caribbean islands lack. As a pharmacy professional, you have a responsibility to ensure that pharmaceutical waste is disposed of in the least harmful way possible.",
        },
        {
          type: "text",
          body: "Pharmaceutical waste is broadly categorised into non-hazardous (most expired tablets and capsules, packaging), hazardous (cytotoxic drugs, chemotherapy agents, certain antiseptics), sharps (needles, syringes, lancets), and controlled substances (requiring witnessed destruction as previously discussed). Each category requires a different disposal pathway.",
        },
        {
          type: "table",
          caption: "Pharmaceutical Waste Categories and Disposal Methods",
          headers: ["Category", "Examples", "Disposal Method", "Caribbean Challenge"],
          rows: [
            [
              "Non-hazardous expired medications",
              "Expired tablets, capsules, ointments, syrups",
              "High-temperature incineration (preferred) or encapsulation in concrete and landfill disposal",
              "Many islands lack pharmaceutical-grade incinerators",
            ],
            [
              "Hazardous / cytotoxic waste",
              "Chemotherapy agents, cytotoxic drugs, certain IV admixtures",
              "High-temperature incineration at licenced facility; never landfill",
              "May need to ship to regional or international treatment facilities",
            ],
            [
              "Sharps waste",
              "Needles, syringes, lancets, broken ampoules",
              "Puncture-proof sharps containers → incineration or autoclaving",
              "Community sharps return programmes are limited in many Caribbean islands",
            ],
            [
              "Controlled substances",
              "Expired narcotics, psychotropic substances, patient returns",
              "Witnessed destruction with regulatory authority present",
              "Scheduling witnesses can delay disposal; secure storage needed in the interim",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The WHO WASH Framework for Pharmaceutical Disposal",
          body: "The World Health Organization provides guidelines for pharmaceutical waste disposal in resource-limited settings through its WASH (Water, Sanitation, and Hygiene) framework. For Caribbean nations, WHO recommends that expired medications should NEVER be flushed down drains or disposed of in regular municipal waste. Preferred methods include high-temperature incineration, encapsulation (mixing with cement in sealed containers for landfill), and chemical denaturing of liquid preparations. CARPHA provides regional guidance adapted from WHO recommendations.",
        },
        {
          type: "key-term",
          term: "Encapsulation",
          definition:
            "A pharmaceutical waste disposal method where expired or waste medications are mixed with cement, lime, or another immobilising material in a sealed container and disposed of in a controlled landfill site. The encapsulation matrix prevents the medications from leaching into groundwater. This method is recommended by WHO for resource-limited settings where incineration is unavailable.",
        },
        {
          type: "text",
          body: "Community take-back programmes — where patients can return unused medications to the pharmacy for safe disposal — are an emerging practice in the Caribbean. These programmes reduce the risk of accidental poisoning (particularly in homes with children), prevent environmental contamination from home disposal, and reduce the potential for diversion of unused controlled substances. As a pharmacy technician, you can promote these programmes to patients as part of routine counselling.",
        },
        {
          type: "knowledge-check",
          question:
            "Why is flushing expired medications down the drain particularly problematic in Caribbean island nations?",
          options: [
            "It clogs the plumbing system",
            "It wastes water",
            "Caribbean SIDS have fragile marine ecosystems and limited freshwater sources vulnerable to pharmaceutical contamination",
            "It violates international shipping regulations",
          ],
          correctIndex: 2,
          explanation:
            "Caribbean small island developing states have particularly fragile marine ecosystems (coral reefs, mangroves) and limited freshwater sources (aquifers, rivers) that are highly vulnerable to pharmaceutical contamination. Flushing medications introduces active pharmaceutical ingredients into water systems, with potential ecological harm and contamination of drinking water supplies.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m8-q1",
      question:
        "Can a returned prescription medication be redispensed if it is in an unopened, sealed package?",
      options: [
        "Yes — sealed packaging guarantees integrity",
        "Yes — but only with pharmacist approval",
        "No — returned prescription medications must never be redispensed",
        "Yes — but only within 24 hours of the original dispensing",
      ],
      correctIndex: 2,
      explanation:
        "Returned prescription medications must never be redispensed, regardless of apparent condition. Once a medication has left the pharmacy's controlled environment, storage conditions cannot be verified, tampering cannot be ruled out, and contamination is possible.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m8-q2",
      question:
        "A Class I medication recall means the product poses:",
      options: [
        "A minor labelling issue unlikely to cause harm",
        "A moderate risk of temporary, reversible health effects",
        "A reasonable probability of causing serious adverse health consequences or death",
        "No health risk — it's a voluntary quality improvement",
      ],
      correctIndex: 2,
      explanation:
        "A Class I recall is the most serious category, indicating that the product poses a reasonable probability of causing serious adverse health consequences or death. It requires immediate action: pull all affected stock, contact affected patients, and follow manufacturer/regulatory instructions.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m8-q3",
      question:
        "Arrange the following recall response steps in the correct order.",
      options: [
        "Quarantine affected stock in a labelled quarantine zone",
        "Identify the affected drug, batch numbers, and expiry dates from the recall notice",
        "Search all pharmacy stock areas for the affected product",
        "Contact patients who received affected batches (Class I/II)",
        "File recall documentation for regulatory inspection",
      ],
      correctIndex: 0,
      explanation:
        "The correct order is: (1) Identify affected product details from the recall notice, (2) Search all stock areas, (3) Quarantine affected stock, (4) Contact affected patients (Class I/II), (5) File documentation.",
      questionType: "ordering",
      questionData: {
        correct_order: [1, 2, 0, 3, 4],
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m8-q4",
      question:
        "True or False: Expired medications can be safely disposed of by flushing them down the drain in a Caribbean pharmacy.",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "False. Flushing medications down the drain is particularly harmful in Caribbean island nations, where it can contaminate fragile marine ecosystems and limited freshwater sources. WHO and CARPHA guidelines recommend high-temperature incineration, encapsulation, or other approved methods — never drain disposal.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m8-q5",
      question:
        "What is the pharmaceutical waste disposal method where medications are mixed with cement in a sealed container for controlled landfill disposal?",
      options: [
        "Incineration",
        "Autoclaving",
        "Encapsulation",
        "Hydrolysis",
      ],
      correctIndex: 2,
      explanation:
        "Encapsulation involves mixing expired medications with cement, lime, or another immobilising material in a sealed container before controlled landfill disposal. The matrix prevents the medications from leaching into groundwater. It is recommended by WHO for resource-limited settings where incineration is not available.",
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: ["encapsulation"],
        case_sensitive: false,
      },
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m8-q6",
      question:
        "Which of the following are valid reasons for a patient to return medication to a pharmacy? Select ALL that apply.",
      options: [
        "Prescriber changed the patient's medication",
        "Patient experienced an adverse drug reaction",
        "Bereavement — returning a deceased relative's medications",
        "Patient wants a refund because the medication is too expensive",
        "Patient noticed a dispensing error",
      ],
      correctIndex: 0,
      explanation:
        "Options A, B, C, and E are all valid reasons for medication returns. A change in therapy, adverse reactions, bereavement, and dispensing errors are all common and appropriate reasons. While cost is a patient concern, it doesn't typically constitute a pharmacy return scenario for prescription medications — the patient should discuss affordability with their prescriber.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 2, 4],
      },
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m8-q7",
      question:
        "Match each recall class with its appropriate response urgency.",
      options: [
        "Class I → Immediate action",
        "Class II → Urgent action within 24–48 hours",
        "Class III → Standard action during routine operations",
        "All matches are correct",
      ],
      correctIndex: 3,
      explanation:
        "All matches are correct. Class I (serious risk/death) requires immediate action. Class II (moderate risk) requires urgent action within 24–48 hours. Class III (low risk) is handled during standard routine operations.",
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Class I — Serious risk", right: "Immediate action required" },
          { left: "Class II — Moderate risk", right: "Urgent action within 24–48 hours" },
          { left: "Class III — Low risk", right: "Standard action during routine operations" },
        ],
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m8-q8",
      question:
        "Cytotoxic pharmaceutical waste (e.g., chemotherapy agents) should be disposed of by which method?",
      options: [
        "Regular municipal landfill",
        "Flushing down the drain with large volumes of water",
        "High-temperature incineration at a licenced facility",
        "Encapsulation in cement",
      ],
      correctIndex: 2,
      explanation:
        "Cytotoxic waste — including chemotherapy agents — is classified as hazardous and must be disposed of by high-temperature incineration at a licenced facility. It should never be placed in regular landfill, flushed, or handled by encapsulation due to the risk of environmental contamination and human exposure.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// FULL COURSE ASSEMBLY
// ============================================================================

export const dispensingCourse: FullCourse = {
  courseId: "dispensing-medication-management",
  title: "Dispensing & Medication Management",
  tagline: "From prescription to patient — master the dispensing workflow across the Caribbean",
  modules: [module1, module2, module3, module4, module5, module6, module7, module8],
};

// ── Utility helpers ─────────────────────────────────────────────────────────

export const totalLessons = dispensingCourse.modules.reduce(
  (sum, m) => sum + m.lessons.length,
  0,
);

export const totalQuizQuestions = dispensingCourse.modules.reduce(
  (sum, m) => sum + m.quiz.length,
  0,
);

export default dispensingCourse;
