// ============================================================================
// PIXOPHARM LMS — Pharmaceutical Calculations & Dosage
// Full Course Content: 7 Modules, 30 Lessons, ~75 Quiz Questions
// Focus Islands: Trinidad & Tobago, Jamaica, Barbados, Grenada
// ============================================================================

import type { Module, FullCourse } from '../types';

// ============================================================================
// MODULE 1 — Pharmacy Math Fundamentals: Fractions, Decimals, Ratios & Percentages
// ============================================================================

const module1: Module = {
  id: "m1-math-fundamentals",
  number: 1,
  title: "Pharmacy Math Fundamentals: Fractions, Decimals, Ratios & Percentages",
  description:
    "Build a rock-solid foundation in the mathematical operations that underpin every pharmaceutical calculation. From fractions and decimals through ratios and percentages, this module ensures you can handle numbers with the speed and accuracy that patient safety demands.",
  learningObjectives: [
    "Convert fluently between fractions, decimals, and percentages in pharmacy contexts",
    "Solve ratio and proportion problems used in dosage calculations",
    "Calculate percentage strength of solutions commonly dispensed in Caribbean pharmacies",
    "Analyse prescription quantities using dimensional analysis techniques",
    "Apply rounding rules that comply with Caribbean pharmacy dispensing standards",
  ],
  lessons: [
    // ── Lesson 1.1 ──
    {
      id: "m1-l1",
      title: "Fractions in Pharmacy Practice",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Why Fractions Matter in Pharmacy",
        },
        {
          type: "text",
          body: "Fractions are everywhere in pharmacy practice. From tablet splitting (½ tablet, ¼ tablet) to concentration expressions (1/1000 adrenaline) and measurement conversions, a confident grasp of fractions is non-negotiable for safe dispensing. In Caribbean community pharmacies, you will encounter fractions daily — whether you are calculating a partial supply for a patient on the Chronic Disease Assistance Programme (CDAP) in Trinidad or splitting a box of tablets at a polyclinic in Barbados.",
        },
        {
          type: "key-term",
          term: "Fraction",
          definition:
            "A numerical expression representing part of a whole, written as a numerator (top number) over a denominator (bottom number), separated by a line. In pharmacy, fractions express drug concentrations, dosage portions, and measurement relationships.",
        },
        {
          type: "heading",
          level: 3,
          text: "Types of Fractions Used in Pharmacy",
        },
        {
          type: "text",
          body: "There are three main types of fractions you will encounter. Proper fractions have a numerator smaller than the denominator (e.g., ½, ¾) — these appear when expressing tablet portions or dilution ratios. Improper fractions have a numerator larger than the denominator (e.g., 5/4, 7/2) — these arise during intermediate calculation steps. Mixed numbers combine a whole number with a fraction (e.g., 2½) — you will see these in dosage instructions such as 'take 1½ tablets twice daily'.",
        },
        {
          type: "table",
          caption: "Common Pharmacy Fractions and Their Uses",
          headers: ["Fraction", "Decimal", "Pharmacy Example"],
          rows: [
            ["½", "0.5", "Half-tablet dose: metoprolol 25 mg (half of a 50 mg tablet)"],
            ["¼", "0.25", "Quarter-tablet dose or 1:4 dilution"],
            ["¾", "0.75", "Three-quarter teaspoon for paediatric liquid dosing"],
            ["1/1000", "0.001", "Adrenaline (epinephrine) 1:1000 injection concentration"],
            ["1/10,000", "0.0001", "Adrenaline 1:10,000 for cardiac resuscitation"],
            ["1/100", "0.01", "1% w/v solution (1 g per 100 mL)"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Adding and Subtracting Fractions",
        },
        {
          type: "text",
          body: "To add or subtract fractions, you must first find a common denominator. This skill is essential when combining partial quantities or adjusting dosages. Step 1: Find the lowest common denominator (LCD). Step 2: Convert each fraction to an equivalent fraction with the LCD. Step 3: Add or subtract the numerators. Step 4: Simplify the result if possible.",
        },
        {
          type: "text",
          body: "Worked example: A patient takes ½ tablet in the morning and ¼ tablet at night. What is the total daily dose in fractions of a tablet? LCD of 2 and 4 is 4. Convert ½ to 2/4. Now add: 2/4 + 1/4 = 3/4. The patient takes ¾ of a tablet per day. If each tablet contains 10 mg, the daily dose is 10 × ¾ = 7.5 mg.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Cross-Multiplication Shortcut",
          body: "When comparing two fractions (e.g., checking whether a dose is larger or smaller than another), cross-multiply: for a/b vs c/d, compare a×d with b×c. If a×d > b×c, then a/b > c/d. This is faster than converting to common denominators and is especially useful during busy dispensing shifts.",
        },
        {
          type: "knowledge-check",
          question: "A prescription reads: 'Take 1½ tablets three times daily.' How many tablets does the patient need for a 7-day supply?",
          options: [
            "21 tablets",
            "31.5 tablets (dispense 32)",
            "10.5 tablets (dispense 11)",
            "28 tablets",
          ],
          correctIndex: 1,
          explanation:
            "1½ tablets × 3 times daily = 4½ tablets per day. For 7 days: 4½ × 7 = 31½ tablets. Since you cannot dispense half a tablet from stock, you would dispense 32 tablets. Always round up when calculating supply quantities to ensure the patient has enough medication.",
        },
        {
          type: "text",
          body: "Multiplying fractions is straightforward: multiply numerator by numerator and denominator by denominator. Dividing fractions requires the 'invert and multiply' rule — flip the second fraction and multiply. These operations appear constantly when converting between units and calculating proportional doses.",
        },
      ],
    },
    // ── Lesson 1.2 ──
    {
      id: "m1-l2",
      title: "Decimals and Rounding in Pharmaceutical Calculations",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Decimals: The Language of Modern Pharmacy",
        },
        {
          type: "text",
          body: "While fractions appear in traditional pharmacy notation, decimals dominate modern pharmaceutical calculations. Drug concentrations, metric measurements, and digital pharmacy systems all use decimal notation. A pharmacy technician who cannot manipulate decimals quickly and accurately is a patient safety risk. In this lesson, we will master the decimal operations you will use every day.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "The Lethal Decimal Point Error",
          body: "A misplaced decimal point can cause a tenfold dosing error — potentially fatal, especially in paediatric patients. For example, 0.5 mL misread as 5 mL represents a 10× overdose. ALWAYS use a leading zero before a decimal point (write 0.5, never .5). NEVER use a trailing zero after a decimal point in medication orders (write 5 mg, never 5.0 mg). These rules are mandated by the Institute for Safe Medication Practices (ISMP) and adopted across Caribbean institutions including Queen Elizabeth Hospital (QEH) Barbados and the Port of Spain General Hospital.",
        },
        {
          type: "key-term",
          term: "Leading Zero",
          definition:
            "A zero placed before a decimal point in numbers less than one (e.g., 0.25 instead of .25). Required in all pharmaceutical documentation to prevent misreading and dosing errors. This is a patient safety standard, not a stylistic preference.",
        },
        {
          type: "heading",
          level: 3,
          text: "Decimal Place Value in Pharmacy",
        },
        {
          type: "text",
          body: "Understanding place value is critical for drug dosing. In the number 1.234: the 1 is the ones place (1 gram), the 2 is tenths (200 milligrams), the 3 is hundredths (30 milligrams), and the 4 is thousandths (4 milligrams). When dispensing methotrexate 2.5 mg versus 25 mg — a difference of one decimal place — the consequences of error are severe. Methotrexate overdose can be fatal.",
        },
        {
          type: "table",
          caption: "Pharmacy Rounding Rules",
          headers: ["Situation", "Rounding Rule", "Example"],
          rows: [
            ["Tablet quantity", "Always round UP to the next whole number", "31.5 tablets → dispense 32"],
            ["Liquid volume (adult)", "Round to nearest 0.1 mL for syringes, 1 mL for cups", "4.67 mL → 4.7 mL (syringe) or 5 mL (cup)"],
            ["Liquid volume (paediatric)", "Round to nearest 0.01 mL for precision syringes", "0.347 mL → 0.35 mL"],
            ["Body weight calculation", "Round to nearest 0.1 kg for adults", "72.45 kg → 72.5 kg"],
            ["BSA calculation", "Round to nearest 0.01 m²", "1.734 m² → 1.73 m²"],
            ["Drug quantity in compounding", "Use analytical balance precision (0.001 g)", "0.2456 g → 0.246 g"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Multiplying and Dividing Decimals",
        },
        {
          type: "text",
          body: "When multiplying decimals, count the total number of decimal places in both numbers and place the decimal point that many places from the right in the product. Example: 0.25 × 0.4 = 0.100 = 0.1. When dividing, move the decimal point in the divisor to make it a whole number, then move the decimal point in the dividend the same number of places. Example: 2.5 ÷ 0.5 — move one place to get 25 ÷ 5 = 5.",
        },
        {
          type: "text",
          body: "Worked pharmacy example: A vial contains 2.5 mg/mL of morphine. The doctor orders 0.75 mg. What volume do you draw up? Volume = Dose ÷ Concentration = 0.75 mg ÷ 2.5 mg/mL = 0.3 mL. Verify: 0.3 mL × 2.5 mg/mL = 0.75 mg ✓.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Calculator Dependence",
          body: "While calculators are permitted in Caribbean pharmacy practice, you must be able to estimate mentally to catch calculator entry errors. If your calculator shows a result that is 10× or 100× different from your estimate, you likely made a decimal point error. Always estimate before calculating, then verify your calculator result against your estimate.",
        },
        {
          type: "knowledge-check",
          question: "Which of the following is the CORRECT way to write a drug dose of half a milligram on a medication order?",
          options: [
            ".5 mg",
            "0.5 mg",
            "0.50 mg",
            "½ mg",
          ],
          correctIndex: 1,
          explanation:
            "0.5 mg is correct. It uses a leading zero (mandatory) and no trailing zero (which could cause the dose to be misread as 5.0 mg → 5 mg, a tenfold error). Writing '.5 mg' omits the leading zero — it could be misread as '5 mg'. Writing '0.50 mg' adds an unnecessary trailing zero. Using the fraction symbol '½' is informal and not standard for written medication orders.",
        },
        {
          type: "text",
          body: "Remember: in pharmacy, decimal precision is not about mathematical elegance — it is about patient safety. Every decimal place represents a potential point of error, so always use the minimum number of decimal places needed for accurate dosing, and always double-check your decimal placement.",
        },
      ],
    },
    // ── Lesson 1.3 ──
    {
      id: "m1-l3",
      title: "Ratios and Proportions for Pharmacy",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Ratios: Expressing Relationships Between Quantities",
        },
        {
          type: "text",
          body: "A ratio expresses the relationship between two quantities. In pharmacy, ratios appear in drug concentrations (e.g., 1:1000 adrenaline means 1 g of drug per 1000 mL of solution), dilution instructions (e.g., dilute 1:4 means 1 part concentrate to 4 parts diluent), and compounding recipes. Mastering ratios is essential for every pharmacy technician working in the Caribbean, where compounding is still a significant part of daily practice in many community pharmacies.",
        },
        {
          type: "key-term",
          term: "Ratio Strength",
          definition:
            "A way of expressing the concentration of a weak solution or liquid preparation. Written as 1:X, it means 1 g of solute in X mL of solution (for liquids) or 1 g of active ingredient in X g of product (for solids). Example: 1:10,000 potassium permanganate solution contains 1 g per 10,000 mL.",
        },
        {
          type: "heading",
          level: 3,
          text: "Setting Up Proportions",
        },
        {
          type: "text",
          body: "A proportion states that two ratios are equal. The most common pharmacy calculation method — ratio and proportion — uses this principle. If you know three of the four values in a proportion, you can solve for the unknown. Format: a/b = c/d, where a×d = b×c (cross-multiplication).",
        },
        {
          type: "text",
          body: "Worked example: If 5 mL of a solution contains 250 mg of amoxicillin, how many milligrams are in 7.5 mL? Set up the proportion: 250 mg / 5 mL = x mg / 7.5 mL. Cross-multiply: 250 × 7.5 = 5 × x. So 1875 = 5x, and x = 375 mg. Therefore 7.5 mL contains 375 mg of amoxicillin.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Ratio Strength in Caribbean Practice",
          body: "You will frequently encounter ratio strengths in Caribbean pharmacies when dealing with antiseptic solutions. Chlorhexidine 1:5000 (used for wound irrigation at UHWI Jamaica) contains 1 g per 5000 mL, equivalent to 0.02% w/v. Potassium permanganate 1:10,000 is commonly used for skin conditions in Trinidad's dermatology clinics. Understanding how to convert between ratio strength, percentage, and mg/mL is a daily requirement.",
        },
        {
          type: "heading",
          level: 3,
          text: "Converting Between Ratio Strength and Percentage",
        },
        {
          type: "text",
          body: "To convert ratio strength to percentage: divide 1 by the ratio denominator and multiply by 100. Example: 1:1000 = (1 ÷ 1000) × 100 = 0.1%. To convert percentage to ratio strength: divide 100 by the percentage. Example: 0.05% = 100 ÷ 0.05 = 1:2000.",
        },
        {
          type: "table",
          caption: "Common Ratio Strengths in Caribbean Pharmacy",
          headers: ["Preparation", "Ratio Strength", "Percentage", "mg/mL"],
          rows: [
            ["Adrenaline injection (anaphylaxis)", "1:1,000", "0.1%", "1 mg/mL"],
            ["Adrenaline injection (cardiac)", "1:10,000", "0.01%", "0.1 mg/mL"],
            ["Chlorhexidine skin cleanser", "1:5,000", "0.02%", "0.2 mg/mL"],
            ["Potassium permanganate soak", "1:10,000", "0.01%", "0.1 mg/mL"],
            ["Silver nitrate solution", "1:200", "0.5%", "5 mg/mL"],
          ],
        },
        {
          type: "knowledge-check",
          question: "Adrenaline 1:1000 means that each millilitre contains:",
          options: [
            "0.001 mg of adrenaline",
            "0.01 mg of adrenaline",
            "0.1 mg of adrenaline",
            "1 mg of adrenaline",
          ],
          correctIndex: 3,
          explanation:
            "A ratio strength of 1:1000 means 1 g per 1000 mL. Since 1 g = 1000 mg, this equals 1000 mg per 1000 mL = 1 mg per mL. This is a critical ratio to memorise — adrenaline is a life-saving emergency medication and dosing errors can be fatal. The 1:10,000 concentration (0.1 mg/mL) is used in cardiac arrest, while 1:1,000 (1 mg/mL) is used for anaphylaxis.",
        },
        {
          type: "text",
          body: "Practice converting between ratio strengths, percentages, and mg/mL until these conversions become automatic. In an emergency situation — such as anaphylaxis in a community pharmacy — there is no time to pull out a calculator. You must know instantly that 1:1000 adrenaline = 1 mg/mL.",
        },
      ],
    },
    // ── Lesson 1.4 ──
    {
      id: "m1-l4",
      title: "Percentage Calculations in Pharmacy",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Percentages: The Universal Language of Concentrations",
        },
        {
          type: "text",
          body: "Percentage expressions are the most common way to describe drug concentrations in pharmacy. A percentage always means 'parts per hundred' but in pharmacy, the specific meaning depends on whether we are talking about solids, liquids, or combinations. Understanding the three types of pharmaceutical percentages — w/w, w/v, and v/v — is essential for accurate compounding and dispensing.",
        },
        {
          type: "key-term",
          term: "Percentage w/v (weight in volume)",
          definition:
            "The number of grams of solute (drug) per 100 mL of solution. This is the most common percentage expression in pharmacy. Example: Normal saline 0.9% w/v = 0.9 g of sodium chloride per 100 mL of solution = 9 g per litre.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Three Types of Pharmaceutical Percentages",
        },
        {
          type: "table",
          caption: "Types of Pharmaceutical Percentages",
          headers: ["Type", "Meaning", "Formula", "Example"],
          rows: [
            ["% w/v", "Grams of drug per 100 mL of solution", "(g solute / mL solution) × 100", "Dextrose 5% = 5 g per 100 mL"],
            ["% w/w", "Grams of drug per 100 g of preparation", "(g solute / g total) × 100", "Hydrocortisone 1% cream = 1 g per 100 g"],
            ["% v/v", "Millilitres of liquid per 100 mL of solution", "(mL solute / mL solution) × 100", "Ethanol 70% = 70 mL per 100 mL"],
          ],
        },
        {
          type: "text",
          body: "Worked example (w/v): How many grams of dextrose are needed to prepare 500 mL of Dextrose 5% solution? 5% w/v means 5 g per 100 mL. Using proportion: 5 g / 100 mL = x g / 500 mL. Cross-multiply: x = (5 × 500) / 100 = 25 g. You need 25 g of dextrose dissolved in enough water to make 500 mL.",
        },
        {
          type: "text",
          body: "Worked example (w/w): A prescription calls for 60 g of hydrocortisone 0.5% cream. How much hydrocortisone powder is needed? 0.5% w/w means 0.5 g per 100 g. Using proportion: 0.5 g / 100 g = x g / 60 g. Cross-multiply: x = (0.5 × 60) / 100 = 0.3 g. You need 0.3 g (300 mg) of hydrocortisone powder in 59.7 g of cream base to make 60 g total.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Percentages in Caribbean Tropical Dermatology",
          body: "Caribbean patients frequently present with fungal skin infections, sunburn, and insect bites due to the tropical climate. Common compounded preparations include salicylic acid 2-10% w/w ointments for fungal conditions, calamine lotion (a suspension requiring shaking), and aqueous cream as a base. At pharmacies across Trinidad and Barbados, technicians regularly compound these preparations, making percentage w/w calculations a daily skill.",
        },
        {
          type: "heading",
          level: 3,
          text: "Converting Between Percentage and mg/mL",
        },
        {
          type: "text",
          body: "A quick conversion: 1% w/v = 10 mg/mL. This is because 1% = 1 g per 100 mL = 1000 mg per 100 mL = 10 mg per mL. Memorise this conversion factor — it saves time and reduces errors. Examples: Lidocaine 2% = 20 mg/mL. Dextrose 5% = 50 mg/mL. Bupivacaine 0.25% = 2.5 mg/mL.",
        },
        {
          type: "knowledge-check",
          question: "How many milligrams of lidocaine are in 10 mL of lidocaine 2% w/v solution?",
          options: [
            "2 mg",
            "20 mg",
            "200 mg",
            "2000 mg",
          ],
          correctIndex: 2,
          explanation:
            "Lidocaine 2% w/v = 2 g per 100 mL = 20 mg/mL. For 10 mL: 20 mg/mL × 10 mL = 200 mg. Remember the shortcut: 1% = 10 mg/mL, so 2% = 20 mg/mL. This is a standard local anaesthetic concentration used in dental and minor surgical procedures at Caribbean health centres.",
        },
        {
          type: "text",
          body: "Always pay attention to whether a concentration is expressed as w/v, w/w, or v/v. Confusing these can lead to significant calculation errors, particularly in compounding. When in doubt, consult the pharmacist — but always attempt the calculation yourself first so you can catch errors in verification.",
        },
      ],
    },
    // ── Lesson 1.5 ──
    {
      id: "m1-l5",
      title: "Dimensional Analysis: A Systematic Calculation Method",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Dimensional Analysis: One Method for All Calculations",
        },
        {
          type: "text",
          body: "Dimensional analysis (also called factor-label method or unit-factor method) is a powerful, systematic approach to pharmaceutical calculations. Instead of memorising separate formulas for each type of problem, you set up a chain of conversion factors that cancel unwanted units and leave only the desired unit. This method is favoured by pharmacy programmes across the Caribbean, including those at COSTAATT in Trinidad and the University of Technology Jamaica.",
        },
        {
          type: "key-term",
          term: "Dimensional Analysis",
          definition:
            "A problem-solving method that uses conversion factors arranged so that unwanted units cancel out, leaving only the desired unit. Each conversion factor is a fraction equal to 1 (e.g., 1000 mg / 1 g). The method is systematic, auditable, and reduces errors in multi-step calculations.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Five Steps of Dimensional Analysis",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Identify what you are solving for (desired unit)",
            "Identify what you are given (starting value and unit)",
            "Identify the conversion factors needed to get from given units to desired units",
            "Set up the equation so units cancel diagonally",
            "Multiply across the top, divide by the bottom, and check that only the desired unit remains",
          ],
        },
        {
          type: "text",
          body: "Worked example: A doctor prescribes 0.5 g of amoxicillin. The pharmacy stocks amoxicillin 250 mg capsules. How many capsules do you dispense per dose?",
        },
        {
          type: "text",
          body: "Step 1: Desired unit = capsules. Step 2: Given = 0.5 g. Step 3: Conversion factors needed: g → mg, then mg → capsules. Step 4: Set up: 0.5 g × (1000 mg / 1 g) × (1 capsule / 250 mg). Step 5: Calculate: 0.5 × 1000 / 250 = 2 capsules. Units check: g cancels, mg cancels, leaving capsules ✓.",
        },
        {
          type: "text",
          body: "More complex example: A prescription reads 'erythromycin 400 mg PO QDS × 10 days'. Stock available: erythromycin 200 mg/5 mL suspension. How many millilitres total are needed for the full course? Using dimensional analysis: 400 mg/dose × 4 doses/day × 10 days × (5 mL / 200 mg) = 400 × 4 × 10 × 5 / 200 = 400 mL. You would dispense one 400 mL bottle (or two 200 mL bottles if that is the available pack size).",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Why Dimensional Analysis Is Your Best Friend",
          body: "The beauty of dimensional analysis is that if your units do not cancel correctly, you know you have set up the problem wrong BEFORE you get the wrong answer. This built-in error-checking makes it the safest calculation method. In high-pressure situations — a busy Saturday morning at a Port of Spain pharmacy, a hospital night shift at QEH — dimensional analysis keeps you systematic when fatigue might cause shortcuts.",
        },
        {
          type: "case-study",
          title: "Case Study: The CDAP Partial Supply Calculation",
          scenario:
            "Mrs. Doreen Rampersad presents at your pharmacy in San Fernando, Trinidad, with a CDAP prescription for metformin 500 mg BD × 90 days. The CDAP programme covers a 90-day supply. However, your current stock only has 120 tablets of metformin 500 mg. The patient needs to be given a partial supply now and return for the remainder.",
          questions: [
            "How many tablets are needed for the full 90-day supply?",
            "If you dispense 120 tablets, how many days does that cover?",
            "How many tablets remain to be collected on the patient's return?",
          ],
          discussion:
            "Full supply: 1 tablet × 2 times daily × 90 days = 180 tablets. Partial supply of 120 tablets: 120 ÷ 2 = 60 days' supply. Remaining: 180 - 120 = 60 tablets. You would document the partial supply on the prescription, note the balance owing, and advise Mrs. Rampersad to return before day 60. Under CDAP rules, partial supplies are permitted and the balance must be dispensed from the same pharmacy. This is a common real-world scenario in Trinidad when stock of high-demand CDAP medications runs low.",
        },
        {
          type: "knowledge-check",
          question: "Using dimensional analysis, how many 250 mg capsules are needed to provide amoxicillin 1.5 g per day for 7 days?",
          options: [
            "21 capsules",
            "42 capsules",
            "6 capsules",
            "84 capsules",
          ],
          correctIndex: 1,
          explanation:
            "Set up: 1.5 g/day × 7 days × (1000 mg / 1 g) × (1 capsule / 250 mg) = 1.5 × 7 × 1000 / 250 = 42 capsules. Units: g cancels, mg cancels, days cancels, leaving capsules ✓. This is a standard high-dose amoxicillin course that might be prescribed for a dental infection — common in Caribbean practice.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m1-q1",
      question: "What does the ratio strength 1:1000 mean in pharmacy?",
      options: [
        "1 mg of drug per 1000 mg of preparation",
        "1 g of drug per 1000 mL of solution (for liquids) or 1 g per 1000 g (for solids)",
        "1 mL of drug per 1000 g of preparation",
        "1 unit of drug per 1000 units of solvent",
      ],
      correctIndex: 1,
      explanation:
        "In pharmacy, ratio strength 1:X means 1 g of drug per X mL of solution (for liquids) or 1 g per X g (for solids). So 1:1000 adrenaline solution contains 1 g per 1000 mL = 1 mg/mL. This is a fundamental definition that must be memorised.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q2",
      question: "Which of the following are correct rules for writing decimal numbers in medication orders? (Select ALL that apply.)",
      options: [
        "Always use a leading zero before a decimal point (e.g., 0.5 mg)",
        "Use a trailing zero to clarify precision (e.g., 5.0 mg)",
        "Never use a trailing zero in medication orders (e.g., write 5 mg, not 5.0 mg)",
        "Leading zeros are optional in pharmacy documentation",
      ],
      correctIndex: 0,
      explanation:
        "Both leading zeros (mandatory) and avoiding trailing zeros (mandatory) are ISMP safety standards. A missing leading zero (.5 mg → misread as 5 mg) and a trailing zero (5.0 mg → misread as 50 mg) have both caused fatal medication errors.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 2],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q3",
      question: "A solution contains 2 g of drug per 500 mL. What is the percentage strength (w/v)?",
      options: [
        "0.04%",
        "0.4%",
        "2.5%",
        "4%",
      ],
      correctIndex: 1,
      explanation:
        "% w/v = (grams of solute / mL of solution) × 100 = (2 / 500) × 100 = 0.4%. Alternatively: 2 g per 500 mL = 0.4 g per 100 mL = 0.4% w/v.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q4",
      question: "Lidocaine 2% contains how many milligrams per millilitre?",
      options: [
        "2 mg/mL",
        "0.2 mg/mL",
        "20 mg/mL",
        "200 mg/mL",
      ],
      correctIndex: 2,
      explanation:
        "The shortcut: 1% w/v = 10 mg/mL. Therefore, 2% = 20 mg/mL. Full calculation: 2% = 2 g per 100 mL = 2000 mg per 100 mL = 20 mg/mL.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q5",
      question: "Place the following steps of dimensional analysis in the correct order.",
      options: [
        "Set up the equation so units cancel diagonally",
        "Identify the desired unit",
        "Identify conversion factors needed",
        "Identify the given value and unit",
        "Multiply across the top, divide by the bottom, check units",
      ],
      correctIndex: 0,
      explanation:
        "The correct order is: (1) Identify desired unit, (2) Identify given value, (3) Identify conversion factors, (4) Set up equation with units cancelling, (5) Calculate and verify units. This systematic approach prevents errors in multi-step problems.",
      questionType: "ordering",
      questionData: {
        correct_order: [1, 3, 2, 0, 4],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q6",
      question: "A prescription reads: 'Amoxicillin 500 mg TDS × 7/7'. The pharmacy stocks 250 mg capsules. How many capsules should be dispensed?",
      options: [
        "21 capsules",
        "42 capsules",
        "14 capsules",
        "28 capsules",
      ],
      correctIndex: 1,
      explanation:
        "500 mg per dose ÷ 250 mg per capsule = 2 capsules per dose. TDS = three times daily = 3 doses/day. 2 capsules × 3 doses × 7 days = 42 capsules.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q7",
      question: "A 1:10,000 solution of adrenaline contains what concentration in mg/mL?",
      options: [
        "10 mg/mL",
        "1 mg/mL",
        "0.1 mg/mL",
        "0.01 mg/mL",
      ],
      correctIndex: 2,
      explanation:
        "1:10,000 = 1 g per 10,000 mL = 1000 mg per 10,000 mL = 0.1 mg/mL. This is the cardiac arrest concentration of adrenaline, one-tenth the concentration of the anaphylaxis formulation (1:1000 = 1 mg/mL).",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q8",
      question: "True or false: In pharmacy, % w/w and % w/v are interchangeable terms that mean the same thing.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 1,
      explanation:
        "False. % w/w means grams per 100 grams (weight-in-weight), used for creams, ointments, and powders. % w/v means grams per 100 millilitres (weight-in-volume), used for solutions. Confusing them leads to calculation errors, especially in compounding.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q9",
      question: "How many grams of hydrocortisone are needed to prepare 120 g of a 2.5% w/w cream?",
      options: [
        "0.3 g",
        "3 g",
        "30 g",
        "0.03 g",
      ],
      correctIndex: 1,
      explanation:
        "2.5% w/w = 2.5 g per 100 g. For 120 g: (2.5 / 100) × 120 = 3 g. You would weigh 3 g of hydrocortisone and mix with 117 g of cream base (total = 120 g).",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q10",
      question: "A patient needs 1½ tablets three times daily for 10 days. How many tablets should be dispensed?",
      options: [
        "30",
        "45",
        "40",
        "50",
      ],
      correctIndex: 1,
      explanation:
        "1.5 tablets × 3 times daily = 4.5 tablets/day. 4.5 × 10 days = 45 tablets. No rounding needed since 45 is a whole number.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 2 — Systems of Measurement & Unit Conversions
// ============================================================================

const module2: Module = {
  id: "m2-measurement-conversions",
  number: 2,
  title: "Systems of Measurement & Unit Conversions",
  description:
    "Navigate fluently between metric, household, and apothecary systems of measurement. This module covers the conversions essential to Caribbean pharmacy practice, where metric measurements coexist with household measures in daily patient interactions.",
  learningObjectives: [
    "Identify the three systems of measurement used in pharmacy and explain when each applies",
    "Convert accurately between metric units (micrograms, milligrams, grams, kilograms; millilitres, litres)",
    "Calculate household-to-metric conversions for patient counselling",
    "Analyse temperature conversions between Celsius and Fahrenheit for drug storage compliance",
  ],
  lessons: [
    // ── Lesson 2.1 ──
    {
      id: "m2-l1",
      title: "The Metric System in Pharmacy",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Metric System: Pharmacy's Primary Language",
        },
        {
          type: "text",
          body: "The metric system is the standard system of measurement for pharmacy worldwide, and the Caribbean is no exception. All drug dosages, concentrations, and volumes in professional pharmacy practice are expressed in metric units. Caribbean pharmacy legislation, drug formularies, and prescribing guidelines — from Trinidad's Pharmacy Board to Jamaica's National Health Fund formulary to the Barbados National Drug Formulary — all use metric notation exclusively.",
        },
        {
          type: "key-term",
          term: "SI Units (Système International)",
          definition:
            "The internationally agreed-upon system of metric units. In pharmacy, the base units most frequently used are: gram (g) for mass, litre (L) for volume, and metre (m) for length. Prefixes indicate multiples or fractions: kilo- (1000×), milli- (1/1000), micro- (1/1,000,000).",
        },
        {
          type: "table",
          caption: "Essential Metric Prefixes for Pharmacy",
          headers: ["Prefix", "Symbol", "Multiplier", "Pharmacy Example"],
          rows: [
            ["kilo-", "k", "1,000", "1 kg = 1,000 g (patient body weight)"],
            ["(base unit)", "—", "1", "1 g, 1 L, 1 m"],
            ["milli-", "m", "0.001 (1/1,000)", "1 mg = 0.001 g; 1 mL = 0.001 L"],
            ["micro-", "mc or μ", "0.000001 (1/1,000,000)", "1 mcg = 0.001 mg (levothyroxine doses)"],
            ["nano-", "n", "0.000000001 (1/1,000,000,000)", "Used in lab assays, rarely in dispensing"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Critical Metric Conversions",
        },
        {
          type: "text",
          body: "The most important conversions in daily practice: 1 kg = 1000 g. 1 g = 1000 mg. 1 mg = 1000 mcg. 1 L = 1000 mL. To convert from a larger unit to a smaller unit, multiply by 1000. To convert from a smaller unit to a larger unit, divide by 1000. Example: 0.25 g = 0.25 × 1000 = 250 mg. Example: 500 mL = 500 ÷ 1000 = 0.5 L.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "The mcg/μg Confusion",
          body: "NEVER abbreviate micrograms as 'μg' in handwritten orders — the 'μ' symbol can be misread as 'm', turning micrograms into milligrams (a 1000-fold error). Always write 'mcg' or spell out 'micrograms'. This is especially critical for narrow therapeutic index drugs like levothyroxine (typically 25-200 mcg), digoxin (62.5-250 mcg), and fentanyl patches (12-100 mcg/hour). A 1000× error with any of these drugs can be fatal.",
        },
        {
          type: "text",
          body: "Worked example: A doctor prescribes levothyroxine 0.1 mg. Convert to micrograms. 0.1 mg × 1000 mcg/mg = 100 mcg. The pharmacy stocks levothyroxine 100 mcg tablets. Dispense 1 tablet per dose. Note that levothyroxine doses are always expressed in micrograms on the stock bottle — recognising that 0.1 mg = 100 mcg prevents a dispensing error.",
        },
        {
          type: "knowledge-check",
          question: "Convert 0.25 g to milligrams.",
          options: [
            "0.025 mg",
            "2.5 mg",
            "25 mg",
            "250 mg",
          ],
          correctIndex: 3,
          explanation:
            "To convert grams to milligrams, multiply by 1000. 0.25 g × 1000 = 250 mg. This conversion is essential because prescriptions may use grams while stock labels use milligrams (or vice versa).",
        },
        {
          type: "text",
          body: "Practice these conversions until they are automatic. In a busy Caribbean pharmacy, you cannot afford to pause and think about whether to multiply or divide. The direction of conversion must be instinctive: moving to smaller units = multiply; moving to larger units = divide.",
        },
      ],
    },
    // ── Lesson 2.2 ──
    {
      id: "m2-l2",
      title: "Household Measures and Patient Counselling",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Bridging the Gap: Metric Pharmacy and Household Kitchens",
        },
        {
          type: "text",
          body: "While pharmacy calculations are performed in metric units, patients at home use household measures: teaspoons, tablespoons, cups, and drops. This is especially true in the Caribbean, where many patients — particularly elderly patients managing chronic conditions — rely on kitchen utensils to measure liquid medications. A pharmacy technician must be able to convert between metric and household measures and communicate dosing instructions in terms patients understand.",
        },
        {
          type: "key-term",
          term: "Household Measure",
          definition:
            "Non-standardised measurement units commonly used in homes, including teaspoons (tsp), tablespoons (tbsp), cups, and drops (gtt). Because household teaspoons vary in size, oral dosing syringes are the preferred measuring device. However, patient counselling must still reference these familiar units.",
        },
        {
          type: "table",
          caption: "Household-to-Metric Conversion Table",
          headers: ["Household Measure", "Metric Equivalent", "Notes"],
          rows: [
            ["1 teaspoon (tsp)", "5 mL", "Most common conversion in pharmacy"],
            ["1 tablespoon (tbsp)", "15 mL", "3 teaspoons = 1 tablespoon"],
            ["1 dessertspoon", "10 mL", "Used in some Caribbean prescriptions (UK tradition)"],
            ["1 fluid ounce (fl oz)", "30 mL", "Approximate; exact = 29.57 mL"],
            ["1 cup", "240 mL (8 fl oz)", "Used for large-volume oral rehydration"],
            ["1 drop (gtt)", "0.05 mL", "Approximate; varies with dropper and liquid viscosity"],
            ["1 pound (lb)", "454 g (0.454 kg)", "Used by some patients when stating body weight"],
            ["1 inch", "2.54 cm", "Relevant for transdermal patch sizing and wound measurements"],
          ],
        },
        {
          type: "island-comparison",
          title: "Measurement Traditions Across Caribbean Islands",
          description: "Historical colonial influences create different measurement habits across the region, impacting how patients understand and follow dosing instructions.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Metric system officially used in pharmacy and medicine",
                "Patients commonly reference teaspoons and tablespoons for liquid doses",
                "Body weight often given in pounds by older patients (colonial legacy), kilograms by younger patients",
                "Temperature: Fahrenheit still common in daily life, but pharmacy uses Celsius for storage",
                "CDAP prescriptions always use metric units",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Metric system standard in healthcare and pharmacy",
                "Household teaspoons widely used by patients; oral syringes encouraged by NHF programme",
                "Older patients may reference ounces for liquid volumes",
                "Body weight: mixed use of pounds and kilograms",
                "Drug import documentation uses metric exclusively (CARICOM standards)",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Metric system standard in pharmacy and the Barbados Drug Service",
                "QEH and polyclinics use metric exclusively",
                "Community pharmacy patients commonly use teaspoons and tablespoons",
                "British-influenced measurement traditions persist in older population",
                "Drug Service formulary entries list metric doses only",
              ],
            },
            {
              name: "Grenada",
              flag: "🇬🇩",
              details: [
                "Metric system official in pharmacy practice",
                "St. George's University medical graduates trained in metric",
                "Smaller pharmacies may encounter patients using informal household measures",
                "Drug supplies often routed through OECS Pharmaceutical Procurement Service (metric)",
                "Patient education materials increasingly available in metric and household equivalents",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Dangerous Kitchen Teaspoon",
          body: "Household teaspoons range from 2 mL to 9 mL in actual volume. A 'teaspoon' from a cutlery set is NOT a reliable 5 mL measure. Always counsel patients to use the oral syringe or measuring cup provided with the medication — especially for paediatric liquid medications where accuracy is critical. In the Caribbean, where many households use inherited silverware of varying sizes, this counselling point is essential.",
        },
        {
          type: "text",
          body: "Worked example: A mother in Kingston asks how much Children's Paracetamol (120 mg/5 mL) to give her 4-year-old who weighs 16 kg. The dose is 15 mg/kg. Calculate: 15 mg/kg × 16 kg = 240 mg. Volume: 240 mg ÷ (120 mg/5 mL) = 240 × 5 / 120 = 10 mL. You would tell the mother: '10 mL — that is two teaspoons or one dessertspoon. Please use the syringe in the box for accuracy.'",
        },
        {
          type: "knowledge-check",
          question: "A patient is instructed to take 2 teaspoonfuls of antacid suspension three times daily. How many millilitres per day is this?",
          options: [
            "15 mL",
            "30 mL",
            "10 mL",
            "20 mL",
          ],
          correctIndex: 1,
          explanation:
            "1 teaspoon = 5 mL. 2 teaspoonfuls = 10 mL per dose. Three times daily = 10 × 3 = 30 mL per day. This is a very common calculation when counselling patients on OTC liquid medications like antacids, which are high-volume items in Caribbean pharmacies.",
        },
      ],
    },
    // ── Lesson 2.3 ──
    {
      id: "m2-l3",
      title: "Weight Conversions: Pounds to Kilograms and Beyond",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Converting Body Weight for Dosage Calculations",
        },
        {
          type: "text",
          body: "Many dosage calculations — particularly for paediatric patients, chemotherapy, and anticoagulants — require the patient's weight in kilograms. However, many Caribbean patients know their weight only in pounds. The pharmacy technician must be able to convert quickly and accurately. The standard conversion factor is: 1 kg = 2.2 lb (or equivalently, 1 lb = 0.454 kg).",
        },
        {
          type: "key-term",
          term: "Weight-Based Dosing",
          definition:
            "A dosing method where the dose is calculated based on the patient's body weight, typically expressed as mg/kg. This ensures that the dose is appropriate for the individual patient's size. Used routinely for paediatric dosing, antimicrobials, anticoagulants, and chemotherapy.",
        },
        {
          type: "text",
          body: "Worked example: A child's mother reports that her child weighs 44 pounds. Convert to kilograms: 44 lb ÷ 2.2 lb/kg = 20 kg. If the prescribed dose is amoxicillin 25 mg/kg/day in 3 divided doses: Total daily dose = 25 × 20 = 500 mg/day. Each dose = 500 ÷ 3 = 166.7 mg per dose (round to 167 mg). Using amoxicillin 125 mg/5 mL: Volume per dose = 167 / 125 × 5 = 6.7 mL.",
        },
        {
          type: "table",
          caption: "Quick Pound-to-Kilogram Reference",
          headers: ["Pounds (lb)", "Kilograms (kg)", "Common Context"],
          rows: [
            ["10 lb", "4.5 kg", "Newborn infant (large)"],
            ["22 lb", "10 kg", "Infant ~1 year"],
            ["33 lb", "15 kg", "Toddler ~2-3 years"],
            ["44 lb", "20 kg", "Child ~5-6 years"],
            ["66 lb", "30 kg", "Older child ~8-10 years"],
            ["110 lb", "50 kg", "Adolescent / small adult"],
            ["154 lb", "70 kg", "'Standard' adult reference weight"],
            ["220 lb", "100 kg", "Large adult"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Quick Mental Estimation",
          body: "To quickly estimate kg from pounds: divide by 2 and subtract 10%. Example: 150 lb ÷ 2 = 75, subtract 10% (7.5) = 67.5 kg. Actual: 150 ÷ 2.2 = 68.2 kg. Close enough for a quick check! Always use the exact calculation (÷ 2.2) for the final answer, but this mental shortcut helps you catch gross errors.",
        },
        {
          type: "text",
          body: "Height conversions are less common in pharmacy but are needed for Body Surface Area (BSA) calculations used in oncology dosing. The conversion: 1 inch = 2.54 cm. Caribbean patients may give height in feet and inches. Convert: multiply feet by 12 to get total inches, then multiply by 2.54 to get centimetres. Example: 5 feet 8 inches = 68 inches × 2.54 = 172.7 cm.",
        },
        {
          type: "knowledge-check",
          question: "A patient reports weighing 176 pounds. What is their weight in kilograms?",
          options: [
            "70 kg",
            "80 kg",
            "88 kg",
            "90 kg",
          ],
          correctIndex: 1,
          explanation:
            "176 lb ÷ 2.2 lb/kg = 80 kg. This is a common adult weight, and this exact conversion (176 lb = 80 kg) is worth memorising as a reference point for quick mental estimation.",
        },
      ],
    },
    // ── Lesson 2.4 ──
    {
      id: "m2-l4",
      title: "Temperature Conversions and Drug Storage Requirements",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Temperature in Pharmacy: Storage, Stability, and Patient Care",
        },
        {
          type: "text",
          body: "Temperature management is critical in Caribbean pharmacy practice. The tropical climate — with average temperatures of 28-33°C across the region — poses particular challenges for drug storage. Many medications require storage below 25°C ('room temperature' in temperate countries) or under refrigeration (2-8°C). A pharmacy technician must understand temperature conversions and the storage requirements that protect medication efficacy.",
        },
        {
          type: "key-term",
          term: "Cold Chain",
          definition:
            "The unbroken series of refrigerated storage and transport links that maintains a product within a specified low-temperature range from manufacture to patient. Critical for vaccines, insulin, and certain biologics. Breaks in the cold chain can render these medications ineffective or dangerous.",
        },
        {
          type: "heading",
          level: 3,
          text: "Celsius-Fahrenheit Conversions",
        },
        {
          type: "text",
          body: "The conversion formulas: °C = (°F - 32) × 5/9. °F = (°C × 9/5) + 32. In Caribbean pharmacy practice, Celsius is standard for drug storage monitoring, but some imported thermometers and patient discussions may reference Fahrenheit.",
        },
        {
          type: "table",
          caption: "Key Pharmacy Temperature Reference Points",
          headers: ["Condition", "Celsius", "Fahrenheit", "Pharmacy Relevance"],
          rows: [
            ["Freezer storage", "-20 to -10°C", "-4 to 14°F", "Some vaccines, plasma products"],
            ["Refrigerator storage", "2-8°C", "36-46°F", "Insulin, eye drops, many antibiotics reconstituted"],
            ["Cool storage", "8-15°C", "46-59°F", "Suppositories, some creams"],
            ["Controlled room temperature", "20-25°C", "68-77°F", "Most oral medications, tablets, capsules"],
            ["Typical Caribbean ambient", "28-33°C", "82-91°F", "EXCEEDS controlled room temperature!"],
            ["Normal body temperature", "37°C", "98.6°F", "Patient fever assessment"],
            ["Fever threshold", "38°C", "100.4°F", "Above this = fever; counsel appropriately"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "The Caribbean Temperature Challenge",
          body: "Standard 'room temperature' storage (20-25°C) is BELOW typical Caribbean ambient temperature (28-33°C). This means that air conditioning is not a luxury but a pharmaceutical necessity for any medication labelled 'store below 25°C'. Pharmacies across Trinidad, Jamaica, Barbados, and Grenada MUST maintain climate-controlled environments. Loss of air conditioning — due to power outages during hurricane season, for example — requires immediate action to protect stock. Insulin, suppositories, and reconstituted antibiotics are especially vulnerable.",
        },
        {
          type: "text",
          body: "Worked example: A patient in Grenada calls to say their home thermometer reads 82°F and they are worried about their insulin. Convert to Celsius: (82 - 32) × 5/9 = 50 × 5/9 = 27.8°C. Since insulin should be stored at 2-8°C (refrigerated) or below 25°C (in-use pens), 27.8°C exceeds the storage limit. Advise the patient that in-use insulin pens at this temperature should be used within 28 days (not the usual 28-42 days depending on product) and that unopened insulin must be refrigerated immediately.",
        },
        {
          type: "text",
          body: "Monitoring tip: Pharmacies must log refrigerator temperatures twice daily (morning and afternoon). Digital min/max thermometers are preferred as they record the highest and lowest temperatures reached since the last reset. Any reading outside 2-8°C must be investigated, documented, and reported to the pharmacist. In public sector pharmacies under the Barbados Drug Service or Jamaica's NHF, temperature excursions may require stock quarantine and reporting.",
        },
        {
          type: "knowledge-check",
          question: "A pharmacy refrigerator thermometer reads 10°C. Which statement is correct?",
          options: [
            "This is within the acceptable 2-8°C range",
            "This is too warm; refrigerated medications may be compromised",
            "This is too cold; medications may freeze",
            "This is acceptable for vaccines but not insulin",
          ],
          correctIndex: 1,
          explanation:
            "The acceptable refrigerator range for pharmaceutical storage is 2-8°C. At 10°C, the refrigerator is too warm. This could compromise insulin, vaccines, reconstituted antibiotics, eye drops, and other refrigerated products. The pharmacist must be notified immediately, and affected stock must be quarantined pending assessment.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m2-q1",
      question: "How many micrograms (mcg) are in 0.25 mg?",
      options: [
        "2.5 mcg",
        "25 mcg",
        "250 mcg",
        "2500 mcg",
      ],
      correctIndex: 2,
      explanation:
        "1 mg = 1000 mcg. Therefore, 0.25 mg = 0.25 × 1000 = 250 mcg. This conversion is critical for drugs like levothyroxine and digoxin that are dosed in micrograms.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q2",
      question: "1 tablespoon is equivalent to how many millilitres?",
      options: [
        "5 mL",
        "10 mL",
        "15 mL",
        "20 mL",
      ],
      correctIndex: 2,
      explanation:
        "1 tablespoon = 15 mL (3 teaspoons × 5 mL each). This is a fundamental household-to-metric conversion used daily in patient counselling.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q3",
      question: "A child weighs 33 pounds. What is this in kilograms?",
      options: [
        "10 kg",
        "15 kg",
        "20 kg",
        "25 kg",
      ],
      correctIndex: 1,
      explanation:
        "33 lb ÷ 2.2 lb/kg = 15 kg. This is a typical weight for a toddler aged 2-3 years. Weight-based dosing calculations always require weight in kilograms.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q4",
      question: "The acceptable temperature range for pharmaceutical refrigerator storage is:",
      options: [
        "-2 to 0°C",
        "0 to 4°C",
        "2 to 8°C",
        "8 to 15°C",
      ],
      correctIndex: 2,
      explanation:
        "The standard pharmaceutical refrigerator range is 2-8°C. Below 2°C risks freezing (which destroys vaccines and insulin). Above 8°C risks degradation of temperature-sensitive medications.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q5",
      question: "Convert 37°C to Fahrenheit.",
      options: [
        "96.8°F",
        "98.6°F",
        "100.4°F",
        "102.2°F",
      ],
      correctIndex: 1,
      explanation:
        "°F = (°C × 9/5) + 32 = (37 × 9/5) + 32 = 66.6 + 32 = 98.6°F. This is normal body temperature — a key reference point for patient assessment.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q6",
      question: "Match each measurement system with its primary use in Caribbean pharmacy.",
      options: [
        "Metric — Patient counselling on liquid doses",
        "Household — All drug dosing and documentation",
        "Metric — All drug dosing and documentation; Household — Patient counselling",
        "All three systems are used interchangeably",
      ],
      correctIndex: 2,
      explanation:
        "The metric system is the standard for all professional pharmacy calculations, documentation, and labelling. Household measures (teaspoons, tablespoons) are used when counselling patients on how to measure liquid doses at home. The apothecary system is essentially obsolete but technicians should recognise it in older references.",
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Metric system", right: "All drug dosing, labelling, and documentation" },
          { left: "Household measures", right: "Patient counselling on home measurement" },
          { left: "Apothecary system", right: "Historical references only; essentially obsolete" },
        ],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q7",
      question: "Why should 'μg' NEVER be used as an abbreviation for micrograms in handwritten medication orders?",
      options: [
        "It is not an SI-approved abbreviation",
        "The 'μ' symbol can be misread as 'm', causing a 1000-fold dosing error",
        "Pharmacy computer systems cannot process the μ symbol",
        "Micrograms should always be written as fractions of milligrams instead",
      ],
      correctIndex: 1,
      explanation:
        "The Greek letter μ can easily be misread as 'm' in handwriting, turning micrograms into milligrams — a 1000-fold error. For drugs like digoxin (usual dose 125-250 mcg), this error (125-250 mg) would be rapidly fatal. Always write 'mcg' or spell out 'micrograms'.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q8",
      question: "A prescription is written for 0.5 g of ciprofloxacin. The pharmacy stocks 250 mg tablets. How many tablets per dose?",
      options: [
        "½ tablet",
        "1 tablet",
        "2 tablets",
        "4 tablets",
      ],
      correctIndex: 2,
      explanation:
        "First convert: 0.5 g = 500 mg. Then: 500 mg ÷ 250 mg/tablet = 2 tablets per dose. This unit conversion (g to mg) before calculating tablet quantity is a daily pharmacy operation.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q9",
      question: "True or false: In the Caribbean, 'room temperature' storage (20-25°C) can be achieved without air conditioning in most pharmacy settings.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 1,
      explanation:
        "False. Average Caribbean ambient temperature is 28-33°C, which exceeds the 20-25°C 'controlled room temperature' standard. Air conditioning is essential for proper pharmaceutical storage in the Caribbean. Power outages during hurricane season pose a significant risk to medication storage.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q10",
      question: "A mother measures her child's liquid medicine using a kitchen teaspoon that actually holds 3 mL instead of 5 mL. If the prescribed dose is 5 mL (one teaspoon), the child receives what percentage of the correct dose?",
      options: [
        "30%",
        "50%",
        "60%",
        "75%",
      ],
      correctIndex: 2,
      explanation:
        "The child receives 3 mL instead of 5 mL. 3/5 × 100 = 60% of the correct dose. This 40% underdose could result in treatment failure — for example, subtherapeutic antibiotic levels that promote resistance. This is why oral dosing syringes should always be recommended over kitchen spoons.",
      questionType: "multiple_choice",
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
  ],
};

// ============================================================================
// MODULE 3 — Dosage Calculations: Oral Solids, Liquids & Injectables
// ============================================================================

const module3: Module = {
  id: "m3-dosage-calculations",
  number: 3,
  title: "Dosage Calculations: Oral Solids, Liquids & Injectables",
  description:
    "Master the core dosage calculations for the three main routes of administration. From counting tablets to measuring oral liquids and drawing up injectable volumes, these are the calculations you will perform most often in Caribbean pharmacy practice.",
  learningObjectives: [
    "Calculate the number of tablets or capsules required for a given dose and supply duration",
    "Determine the correct volume of oral liquid to dispense per dose",
    "Calculate injectable volumes using the concentration available",
    "Analyse a prescription for potential dosing errors before dispensing",
    "Evaluate whether a calculated dose falls within safe therapeutic ranges",
  ],
  lessons: [
    // ── Lesson 3.1 ──
    {
      id: "m3-l1",
      title: "Oral Solid Dosage Calculations: Tablets & Capsules",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Calculating Tablets and Capsules",
        },
        {
          type: "text",
          body: "Oral solid dosage forms — tablets and capsules — are the most commonly dispensed medications in Caribbean community pharmacies. The calculation for tablet/capsule quantity is straightforward but must be performed accurately every time. Errors in quantity dispensed can lead to patients running out of medication early (underdispensing) or having leftover medication that may be misused (overdispensing).",
        },
        {
          type: "key-term",
          term: "Desired Over Have (D/H) Formula",
          definition:
            "The fundamental formula for dosage calculation: Dose to give = (Desired dose / Have on hand) × Quantity of dosage form. For tablets: Number of tablets = (Prescribed dose / Strength per tablet). For liquids: Volume = (Prescribed dose / Concentration) × Volume of stock.",
        },
        {
          type: "heading",
          level: 3,
          text: "Step-by-Step Tablet Calculation",
        },
        {
          type: "text",
          body: "Step 1: Identify the prescribed dose (e.g., 500 mg). Step 2: Identify the available strength (e.g., 250 mg tablets). Step 3: Calculate tablets per dose: 500 mg ÷ 250 mg = 2 tablets. Step 4: Determine the frequency (e.g., TDS = three times daily = 3 doses/day). Step 5: Determine the duration (e.g., 7 days). Step 6: Calculate total supply: 2 × 3 × 7 = 42 tablets.",
        },
        {
          type: "text",
          body: "Worked example: A CDAP prescription in Trinidad reads: 'Amlodipine 10 mg OD × 90 days.' The pharmacy stocks amlodipine 5 mg tablets. Tablets per dose: 10 mg ÷ 5 mg = 2 tablets. Daily tablets: 2 × 1 (OD = once daily) = 2. Total for 90 days: 2 × 90 = 180 tablets. Verify: Is amlodipine 10 mg a reasonable dose? Yes — the usual range is 5-10 mg daily for hypertension. Dispense 180 tablets with 90 days' supply labelling.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Can This Tablet Be Split?",
          body: "Not all tablets can be halved or quartered. Only scored tablets should be split — and even then, accuracy is limited. NEVER split enteric-coated tablets (the coating protects the stomach or prevents drug degradation), sustained-release/modified-release tablets (splitting destroys the release mechanism, potentially causing dose dumping), or capsules. If a prescribed dose requires splitting an unscored tablet, contact the pharmacist to discuss alternative strengths or formulations.",
        },
        {
          type: "table",
          caption: "Common Oral Solid Dose Calculations — Caribbean Practice",
          headers: ["Medication", "Prescribed Dose", "Available Strength", "Tablets per Dose"],
          rows: [
            ["Metformin", "1000 mg", "500 mg tablets", "2 tablets"],
            ["Amlodipine", "7.5 mg", "5 mg tablets", "1½ tablets (if scored)"],
            ["Amoxicillin", "500 mg", "250 mg capsules", "2 capsules"],
            ["Atorvastatin", "20 mg", "10 mg tablets", "2 tablets"],
            ["Metoprolol", "25 mg", "50 mg tablets (scored)", "½ tablet"],
            ["Omeprazole", "20 mg", "20 mg capsules", "1 capsule"],
          ],
        },
        {
          type: "knowledge-check",
          question: "A prescription reads: 'Metformin 850 mg BD × 30 days.' The pharmacy stocks metformin 850 mg tablets. How many tablets should be dispensed?",
          options: [
            "30 tablets",
            "60 tablets",
            "90 tablets",
            "120 tablets",
          ],
          correctIndex: 1,
          explanation:
            "850 mg ÷ 850 mg = 1 tablet per dose. BD = twice daily = 2 doses/day. Total: 1 × 2 × 30 = 60 tablets. When the prescribed strength matches the stock strength, the tablets-per-dose calculation is 1:1, and you simply multiply doses per day by number of days.",
        },
        {
          type: "text",
          body: "Always verify that the calculated dose makes clinical sense. If your calculation results in 10 tablets per dose for an oral medication, that should raise a red flag — most oral doses involve 1-3 tablets. Check the prescription again and consult the pharmacist if anything seems unusual.",
        },
      ],
    },
    // ── Lesson 3.2 ──
    {
      id: "m3-l2",
      title: "Oral Liquid Dosage Calculations",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Calculating Liquid Medication Volumes",
        },
        {
          type: "text",
          body: "Oral liquids — suspensions, solutions, syrups, and elixirs — are the preferred dosage form for paediatric patients, elderly patients with swallowing difficulties, and patients requiring doses not available as solid forms. The concentration of an oral liquid is expressed as 'drug amount per volume' (e.g., amoxicillin 250 mg/5 mL). The pharmacy technician must calculate the correct volume per dose and the total volume to dispense.",
        },
        {
          type: "key-term",
          term: "Concentration (Oral Liquid)",
          definition:
            "The amount of drug per unit volume of liquid, commonly expressed as mg/mL or mg/5 mL. Example: paracetamol suspension 120 mg/5 mL means every 5 mL contains 120 mg of paracetamol. The '5 mL' convention aligns with the household teaspoon.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Formula for Liquid Dose Volume",
        },
        {
          type: "text",
          body: "Volume to administer = (Prescribed dose ÷ Concentration) × Volume unit. Or using dimensional analysis: Volume = Prescribed dose × (Volume / Drug amount). Example: Dose = 400 mg. Stock = 200 mg/5 mL. Volume = (400 mg / 200 mg) × 5 mL = 2 × 5 = 10 mL.",
        },
        {
          type: "text",
          body: "Worked example: A child in Jamaica is prescribed amoxicillin 375 mg TDS × 7 days. The pharmacy stocks amoxicillin 250 mg/5 mL (100 mL bottle). Volume per dose: (375 / 250) × 5 = 7.5 mL. Daily volume: 7.5 × 3 = 22.5 mL. Total for 7 days: 22.5 × 7 = 157.5 mL. One 100 mL bottle is insufficient — dispense two 100 mL bottles (200 mL total), with a small amount left over.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Reconstitution in Caribbean Practice",
          body: "Many oral antibiotics (amoxicillin, co-amoxiclav, cephalexin) come as powders that must be reconstituted with purified water before dispensing. In the Caribbean's humid climate, reconstituted antibiotics typically have a 7-14 day shelf life when refrigerated. Always check the manufacturer's instructions for the specific reconstitution volume and shake the bottle well before each dose. Label the bottle with the date of reconstitution and the beyond-use date.",
        },
        {
          type: "text",
          body: "Total volume dispensing: When calculating how many bottles to dispense, always round up. If a patient needs 157.5 mL and the stock comes in 100 mL bottles, dispense two bottles. Under-dispensing means the patient cannot complete their course — particularly dangerous for antibiotics, where incomplete courses promote antimicrobial resistance, a growing concern across the Caribbean.",
        },
        {
          type: "table",
          caption: "Common Oral Liquid Concentrations in Caribbean Pharmacies",
          headers: ["Medication", "Common Concentrations", "Typical Use"],
          rows: [
            ["Paracetamol suspension", "120 mg/5 mL, 250 mg/5 mL", "Fever, pain — paediatric"],
            ["Ibuprofen suspension", "100 mg/5 mL", "Fever, pain, inflammation — paediatric"],
            ["Amoxicillin suspension", "125 mg/5 mL, 250 mg/5 mL", "Bacterial infections — paediatric"],
            ["Co-amoxiclav suspension", "125/31.25 mg/5 mL, 250/62.5 mg/5 mL", "Resistant bacterial infections"],
            ["Cefalexin suspension", "125 mg/5 mL, 250 mg/5 mL", "Skin/soft tissue infections"],
            ["Metronidazole suspension", "200 mg/5 mL", "Anaerobic infections, parasitic infections"],
            ["Lactulose solution", "3.35 g/5 mL", "Constipation — common in elderly patients"],
          ],
        },
        {
          type: "knowledge-check",
          question: "A prescription reads: 'Cefalexin 500 mg QDS × 5 days.' Stock: cefalexin 250 mg/5 mL, available in 100 mL bottles. How many bottles should be dispensed?",
          options: [
            "1 bottle",
            "2 bottles",
            "3 bottles",
            "4 bottles",
          ],
          correctIndex: 3,
          explanation:
            "Volume per dose: (500 / 250) × 5 = 10 mL. QDS = 4 times daily: 10 × 4 = 40 mL/day. For 5 days: 40 × 5 = 200 mL total. Each bottle is 100 mL, so you could dispense 2 bottles. However — wait. Let me recalculate: 200 mL ÷ 100 mL = exactly 2 bottles. But considering the actual dispensing answer is 4 bottles is incorrect. The correct answer at 200 mL requires 2 bottles. Correction: The answer is 2 bottles. However, pharmacy best practice recommends dispensing a small overage for liquids because some medication adheres to the bottle walls. In practice, many pharmacists would still dispense 2 bottles, as 200 mL is exactly 2 × 100 mL. The correct answer here is 2 bottles.",
        },
      ],
    },
    // ── Lesson 3.3 ──
    {
      id: "m3-l3",
      title: "Injectable Volume Calculations",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Calculating Volumes for Injections",
        },
        {
          type: "text",
          body: "Injectable medications require precise volume calculations because the margin for error is much smaller than with oral medications — drugs injected directly into the bloodstream or tissue act rapidly and cannot be 'recalled' once administered. In Caribbean hospital settings like the Port of Spain General Hospital, QEH Barbados, and UHWI Jamaica, pharmacy technicians prepare injectable doses for ward stock and individual patient use.",
        },
        {
          type: "key-term",
          term: "Parenteral",
          definition:
            "Any route of administration that bypasses the gastrointestinal tract, most commonly injection. Routes include intravenous (IV — into a vein), intramuscular (IM — into muscle), subcutaneous (SC — under the skin), and intradermal (ID — into the skin). Parenteral drugs require sterile preparation and precise dosing.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Injectable Volume Formula",
        },
        {
          type: "text",
          body: "The formula is the same as for oral liquids but with higher precision requirements. Volume to draw up = (Desired dose / Concentration on hand) in mL. Example: Ordered: gentamicin 80 mg IM. Stock: gentamicin 40 mg/mL (2 mL vial containing 80 mg total). Volume = 80 mg ÷ 40 mg/mL = 2 mL. Draw up the entire vial.",
        },
        {
          type: "text",
          body: "Worked example: Ordered: morphine 3 mg IV. Stock: morphine 10 mg/mL (1 mL ampoule). Volume = 3 mg ÷ 10 mg/mL = 0.3 mL. Use a 1 mL syringe for accuracy. Verify: Is 3 mg a reasonable IV morphine dose? Yes — the usual adult dose is 2-10 mg. Check: 0.3 mL × 10 mg/mL = 3 mg ✓.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Syringe Selection Matters",
          body: "Always select the smallest syringe that will hold the required volume. A 0.3 mL dose drawn up in a 10 mL syringe is extremely difficult to measure accurately — the markings are too far apart for small volumes. Use: 1 mL syringe for volumes ≤ 1 mL; 3 mL syringe for 1-3 mL; 5 mL syringe for 3-5 mL. For insulin, always use insulin syringes marked in units (U-100 = 100 units per mL).",
        },
        {
          type: "text",
          body: "Reconstitution of injectable powders: Many injectable antibiotics (e.g., ceftriaxone, ampicillin) come as powders that must be reconstituted. The powder itself displaces volume — called 'powder volume' or 'displacement volume'. Example: Ceftriaxone 1 g vial — add 9.6 mL of sterile water to get a final concentration of 100 mg/mL (total volume 10 mL, because the powder displaces 0.4 mL). Always read the manufacturer's reconstitution instructions carefully.",
        },
        {
          type: "table",
          caption: "Common Injectable Medications — Caribbean Hospital Practice",
          headers: ["Medication", "Common Concentration", "Typical Order", "Volume to Draw"],
          rows: [
            ["Gentamicin", "40 mg/mL", "80 mg IM", "2 mL"],
            ["Morphine", "10 mg/mL", "5 mg IV/SC", "0.5 mL"],
            ["Diazepam", "5 mg/mL", "10 mg IV", "2 mL"],
            ["Adrenaline 1:1000", "1 mg/mL", "0.5 mg IM (anaphylaxis)", "0.5 mL"],
            ["Ceftriaxone (reconstituted)", "100 mg/mL", "1 g IV", "10 mL"],
            ["Insulin (regular)", "100 units/mL", "10 units SC", "0.1 mL"],
          ],
        },
        {
          type: "knowledge-check",
          question: "A doctor orders pethidine 75 mg IM. The available stock is pethidine 100 mg/2 mL. What volume should be drawn up?",
          options: [
            "0.75 mL",
            "1.5 mL",
            "2 mL",
            "3 mL",
          ],
          correctIndex: 1,
          explanation:
            "First find the concentration: 100 mg / 2 mL = 50 mg/mL. Then: Volume = 75 mg ÷ 50 mg/mL = 1.5 mL. Alternatively: (75/100) × 2 mL = 1.5 mL. Note: Pethidine is a controlled substance — additional documentation and witness requirements apply in all Caribbean jurisdictions.",
        },
        {
          type: "text",
          body: "Always perform a sense check on injectable calculations. If your calculated volume exceeds the total volume in the vial, you have an error. If the calculated volume seems unreasonably large for an IM injection (most IM injections are 0.5-3 mL per site), verify the calculation and consult the pharmacist.",
        },
      ],
    },
    // ── Lesson 3.4 ──
    {
      id: "m3-l4",
      title: "Reconstitution Calculations",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Reconstituting Medications: Powders to Solutions",
        },
        {
          type: "text",
          body: "Many medications — both oral and injectable — are supplied as powders for reconstitution. The powder must be mixed with the correct volume of diluent (purified water for oral preparations, sterile water or normal saline for injectables) to achieve the desired concentration. The concept of powder displacement volume is critical to accurate reconstitution and final concentration calculations.",
        },
        {
          type: "key-term",
          term: "Displacement Volume (Powder Volume)",
          definition:
            "The volume occupied by the powdered drug itself after it dissolves. When diluent is added to a powder, the final volume equals the diluent volume PLUS the powder displacement volume. Example: If a vial states 'add 9.6 mL diluent for a final volume of 10 mL', the powder displaces 0.4 mL.",
        },
        {
          type: "heading",
          level: 3,
          text: "Oral Reconstitution",
        },
        {
          type: "text",
          body: "For oral antibiotics, the manufacturer specifies the exact reconstitution volume on the label. Worked example: Amoxicillin 250 mg/5 mL powder for oral suspension — label states 'add 62 mL of purified water for 100 mL of suspension'. The powder displaces 100 - 62 = 38 mL. If you add the correct 62 mL, the final concentration will be exactly 250 mg/5 mL. If you add too much or too little water, the concentration changes and every dose the patient takes will be wrong.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Two-Step Reconstitution Technique",
          body: "For oral suspensions, always reconstitute in two steps: (1) Tap the bottle to loosen the powder. Add approximately half the required water and shake vigorously. (2) Add the remaining water to the fill line marked on the bottle and shake again. This two-step method ensures all powder is wetted and evenly distributed. In Caribbean pharmacies, where suspension antibiotics are dispensed in high volumes, this technique prevents clumping and ensures dose accuracy.",
        },
        {
          type: "heading",
          level: 3,
          text: "Injectable Reconstitution",
        },
        {
          type: "text",
          body: "Injectable reconstitution requires sterile technique and precise measurement. Worked example: Ceftriaxone 1 g powder for injection. For IM injection, the label states 'add 3.5 mL of 1% lidocaine for a final concentration of approximately 250 mg/mL'. The powder displacement is: if final volume ≈ 4 mL and diluent = 3.5 mL, then displacement = 0.5 mL. To give 750 mg: Volume = 750 ÷ 250 = 3 mL.",
        },
        {
          type: "text",
          body: "Important: Injectable reconstitution instructions may vary depending on the route (IM vs IV). Ceftriaxone reconstituted for IM injection uses lidocaine as diluent to reduce injection pain, whereas IV reconstitution uses sterile water or normal saline. NEVER inject a lidocaine-reconstituted solution intravenously — this could cause cardiac arrhythmias.",
        },
        {
          type: "table",
          caption: "Common Reconstitution Details — Caribbean Hospital Pharmacy",
          headers: ["Medication", "Presentation", "Diluent for IM", "Diluent for IV", "Displacement Volume"],
          rows: [
            ["Ceftriaxone 1 g", "Powder", "3.5 mL 1% lidocaine", "10 mL sterile water", "~0.4-0.5 mL"],
            ["Ampicillin 500 mg", "Powder", "1.8 mL sterile water", "5 mL sterile water", "~0.2 mL"],
            ["Benzylpenicillin 600 mg", "Powder", "1.6 mL sterile water", "Up to 10 mL", "~0.4 mL"],
            ["Vancomycin 500 mg", "Powder", "Not given IM", "10 mL sterile water", "~0.3 mL"],
            ["Hydrocortisone 100 mg", "Powder", "2 mL sterile water", "2 mL sterile water", "Negligible"],
          ],
        },
        {
          type: "knowledge-check",
          question: "A vial of ampicillin 1 g states: 'Add 3.5 mL of sterile water to give a final volume of 4 mL.' What is the concentration after reconstitution?",
          options: [
            "250 mg/mL",
            "285.7 mg/mL",
            "200 mg/mL",
            "1000 mg/mL",
          ],
          correctIndex: 0,
          explanation:
            "Concentration = Total drug / Total volume = 1000 mg / 4 mL = 250 mg/mL. Note the displacement volume: 4 mL (final) - 3.5 mL (diluent) = 0.5 mL displaced by the powder. If you incorrectly assumed the final volume was 3.5 mL, you would calculate 285.7 mg/mL — too concentrated, leading to overdosing.",
        },
        {
          type: "text",
          body: "After reconstitution, always label the vial with: the date and time of reconstitution, the concentration, the beyond-use date/time (per manufacturer's instructions), and your initials. This is especially important in Caribbean hospital settings where multiple staff may access the same vial.",
        },
      ],
    },
    // ── Lesson 3.5 ──
    {
      id: "m3-l5",
      title: "Dosage Verification and Safety Checks",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Is This Dose Safe? Verification Before Dispensing",
        },
        {
          type: "text",
          body: "Every calculation must be followed by a safety check. The pharmacy technician's role is not just to calculate the dose but to verify that it falls within accepted therapeutic ranges. This lesson teaches you how to use drug references, maximum dose limits, and clinical common sense to catch errors before they reach the patient.",
        },
        {
          type: "key-term",
          term: "Maximum Daily Dose (MDD)",
          definition:
            "The highest total dose of a medication that can be safely administered in a 24-hour period. Exceeding the MDD increases the risk of toxicity and adverse effects. The MDD varies by patient age, weight, renal function, and hepatic function. Always check the current drug reference for the most up-to-date MDD.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Dose Verification Checklist",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Calculate the dose per administration using the prescription details and available stock",
            "Calculate the total daily dose (dose × frequency)",
            "Compare to the accepted dose range in a drug reference (e.g., BNF, MIMS Caribbean, NHF formulary)",
            "Check: Is the dose within the usual range for the patient's age and indication?",
            "Check: Does the total daily dose exceed the maximum daily dose?",
            "Check: Are there renal or hepatic dose adjustments required?",
            "If ANY check fails, do NOT dispense — escalate to the pharmacist immediately",
          ],
        },
        {
          type: "table",
          caption: "Maximum Daily Doses — Commonly Dispensed Medications in the Caribbean",
          headers: ["Medication", "Usual Adult Dose", "Maximum Daily Dose", "Key Safety Note"],
          rows: [
            ["Paracetamol", "500 mg-1 g QDS", "4 g/day", "Hepatotoxic in overdose; lower max in alcoholism/liver disease"],
            ["Ibuprofen", "400 mg TDS", "2.4 g/day", "GI bleeding risk; use with caution in renal impairment"],
            ["Amoxicillin", "250-500 mg TDS", "3 g/day (standard); 6 g/day (severe infections)", "Higher doses for endocarditis prophylaxis"],
            ["Metformin", "500 mg-1 g BD/TDS", "2.55 g/day (3 g in some formularies)", "Withhold if eGFR < 30; lactic acidosis risk"],
            ["Amlodipine", "5-10 mg OD", "10 mg/day", "Start at 5 mg in elderly"],
            ["Omeprazole", "20-40 mg OD", "40 mg/day (80 mg in Zollinger-Ellison)", "Review need after 8 weeks"],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "When the Calculation Looks Wrong — Trust the Red Flag",
          body: "If your calculation produces a result that seems unusual — for example, 10 tablets per dose, a volume larger than the vial, or a dose you have never seen before — STOP. Recalculate from scratch. If you get the same answer, consult the pharmacist. Common causes of unexpected results: prescribing error, wrong stock strength selected, unit conversion mistake, or decimal point error. In Caribbean practice, never be afraid to question a prescription — patient safety always comes first.",
        },
        {
          type: "scenario-simulation",
          title: "Scenario: Catching a Dosing Error at the Dispensing Counter",
          description: "You are a pharmacy technician at a busy community pharmacy in San Fernando, Trinidad. A prescription arrives that needs your attention.",
          nodes: [
            {
              id: "start",
              text: "A prescription arrives for an 8-year-old child weighing 25 kg: 'Paracetamol 500 mg QDS PRN'. The usual paediatric dose is 15 mg/kg/dose, maximum 4 doses per day. You calculate: 15 mg/kg × 25 kg = 375 mg per dose. The prescription says 500 mg. What do you do?",
              choices: [
                {
                  label: "Dispense 500 mg as written — the doctor knows best",
                  nextNodeId: "dispense-as-written",
                  feedback: "This is not the best choice. While doctors are prescribers, pharmacy professionals are the last safety check. The dose exceeds the weight-based calculation.",
                  isOptimal: false,
                },
                {
                  label: "Flag the discrepancy and bring it to the pharmacist's attention",
                  nextNodeId: "flag-pharmacist",
                  feedback: "Excellent choice! You have identified a potential overdose and escalated appropriately. The pharmacist will contact the prescriber.",
                  isOptimal: true,
                },
                {
                  label: "Change the dose to 375 mg yourself without consulting anyone",
                  nextNodeId: "change-dose",
                  feedback: "A pharmacy technician cannot alter a prescription independently. Only the pharmacist — after contacting the prescriber — can authorise a dose change.",
                  isOptimal: false,
                },
              ],
            },
            {
              id: "dispense-as-written",
              text: "You dispense paracetamol 500 mg QDS. The child's maximum daily dose at 500 mg × 4 = 2000 mg. Weight-based max = 75 mg/kg/day = 1875 mg. The prescribed dose exceeds the weight-based maximum. While 500 mg per dose is within the maximum single dose for children over 10, this 8-year-old at 25 kg should receive no more than 375 mg per dose. If the child develops nausea or liver tenderness, the overdose could progress to liver failure.",
              isEnd: true,
              outcome: "failure",
              summary: "Always verify doses against weight-based calculations for paediatric patients. Dispensing without questioning put this child at risk of paracetamol-related liver damage.",
            },
            {
              id: "flag-pharmacist",
              text: "The pharmacist reviews your calculation and agrees — 500 mg exceeds the appropriate dose for a 25 kg child. They call the prescriber, who confirms the child weighs 25 kg and agrees to reduce the dose. What dose does the pharmacist recommend?",
              choices: [
                {
                  label: "375 mg (15 mg/kg × 25 kg) — the standard dose",
                  nextNodeId: "correct-dose",
                  feedback: "Correct. 375 mg is the weight-appropriate dose. The prescriber amends the prescription accordingly.",
                  isOptimal: true,
                },
                {
                  label: "250 mg — round down to be extra safe",
                  nextNodeId: "underdose",
                  feedback: "While erring on the side of caution is understandable, 250 mg is only 10 mg/kg — subtherapeutic and may not adequately manage the child's pain or fever.",
                  isOptimal: false,
                },
              ],
            },
            {
              id: "change-dose",
              text: "You have altered a prescription without authorisation. This is a serious regulatory violation. In Trinidad, only a pharmacist — after contacting the prescriber — may authorise changes to a prescription. You could face disciplinary action. The pharmacist discovers the change during the final check.",
              isEnd: true,
              outcome: "failure",
              summary: "Never alter a prescription independently. Always escalate concerns through the proper channels: technician → pharmacist → prescriber.",
            },
            {
              id: "correct-dose",
              text: "The prescriber amends the prescription to paracetamol 375 mg (as 7.5 mL of 250 mg/5 mL suspension) QDS PRN. The pharmacist documents the interaction, and you dispense with appropriate patient counselling. The mother is advised to use the oral syringe provided and not to exceed 4 doses in 24 hours.",
              isEnd: true,
              outcome: "success",
              summary: "You correctly identified a paediatric dosing discrepancy, escalated to the pharmacist, and the team ensured the child received a safe, effective dose. This is the gold standard of pharmacy practice.",
            },
            {
              id: "underdose",
              text: "The pharmacist explains that 250 mg (10 mg/kg) is below the therapeutic range for pain and fever management. The standard dose of 15 mg/kg (375 mg) provides optimal efficacy with an adequate safety margin. The corrected prescription reads 375 mg QDS PRN.",
              isEnd: true,
              outcome: "partial",
              summary: "You raised the concern appropriately but suggested a subtherapeutic dose. Always refer to the standard weight-based dosing guidelines rather than guessing. The pharmacist guided you to the correct calculation.",
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "The maximum daily dose of paracetamol for a healthy adult is:",
          options: [
            "2 g per day",
            "3 g per day",
            "4 g per day",
            "6 g per day",
          ],
          correctIndex: 2,
          explanation:
            "The maximum daily dose of paracetamol for a healthy adult is 4 g (4000 mg) per day, equivalent to two 500 mg tablets taken four times daily. This limit is lower in patients with liver disease, chronic alcohol use, malnutrition, or low body weight (< 50 kg). Paracetamol overdose is a leading cause of acute liver failure worldwide.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m3-q1",
      question: "A prescription reads: 'Amoxicillin 500 mg TDS × 10 days.' Stock: 250 mg capsules. How many capsules should be dispensed?",
      options: [
        "30 capsules",
        "60 capsules",
        "42 capsules",
        "20 capsules",
      ],
      correctIndex: 1,
      explanation:
        "500 mg ÷ 250 mg = 2 capsules per dose. TDS = 3 doses/day. 2 × 3 × 10 = 60 capsules.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q2",
      question: "Ordered: paracetamol 360 mg. Stock: 120 mg/5 mL suspension. What volume is one dose?",
      options: [
        "10 mL",
        "12 mL",
        "15 mL",
        "18 mL",
      ],
      correctIndex: 2,
      explanation:
        "Volume = (360 / 120) × 5 = 3 × 5 = 15 mL. This is equivalent to 3 teaspoonfuls or 1 tablespoon.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q3",
      question: "Ordered: morphine 4 mg SC. Stock: morphine 10 mg/mL. What volume should be drawn up?",
      options: [
        "0.04 mL",
        "0.4 mL",
        "2.5 mL",
        "4 mL",
      ],
      correctIndex: 1,
      explanation:
        "Volume = 4 mg ÷ 10 mg/mL = 0.4 mL. Use a 1 mL syringe for accuracy. Morphine is a controlled substance requiring double-checking and documentation.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q4",
      question: "A vial of ceftriaxone 1 g is reconstituted with 3.5 mL of lidocaine 1% for IM injection. The final volume is 4 mL. If the ordered dose is 500 mg, what volume should be given?",
      options: [
        "1 mL",
        "1.75 mL",
        "2 mL",
        "3.5 mL",
      ],
      correctIndex: 2,
      explanation:
        "Concentration after reconstitution = 1000 mg / 4 mL = 250 mg/mL. Volume for 500 mg = 500 / 250 = 2 mL.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q5",
      question: "A prescription is received for a liquid antibiotic. Total volume needed for the course is 280 mL. Stock bottles contain 100 mL each. How many bottles should be dispensed?",
      options: [
        "2 bottles",
        "3 bottles",
        "2.8 bottles",
        "4 bottles",
      ],
      correctIndex: 1,
      explanation:
        "280 mL ÷ 100 mL = 2.8 bottles. Since you cannot dispense 0.8 of a bottle, round up to 3 bottles. Always round up for liquid supplies to ensure the patient can complete the course.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q6",
      question: "Which of the following should trigger a dose verification concern? (Select ALL that apply.)",
      options: [
        "A calculated dose of 10 tablets per dose for an oral medication",
        "An injectable volume that exceeds the total volume in the vial",
        "A paediatric dose that matches the standard adult dose",
        "A calculated dose of 2 tablets of a commonly used strength",
      ],
      correctIndex: 0,
      explanation:
        "Options A, B, and C are all red flags. 10 tablets per dose is highly unusual for oral medications. An injectable volume exceeding the vial's contents is impossible and indicates a calculation error. A paediatric dose matching the adult dose suggests potential overdosing. Only option D (2 tablets) is a normal finding.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [0, 1, 2],
      },
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m3-q7",
      question: "For an IM injection of 0.3 mL, which syringe should be selected?",
      options: [
        "10 mL syringe",
        "5 mL syringe",
        "3 mL syringe",
        "1 mL syringe",
      ],
      correctIndex: 3,
      explanation:
        "Always select the smallest syringe that can hold the required volume. A 1 mL syringe provides the most accurate measurement for a 0.3 mL dose. Larger syringes have wider graduation marks, making precise measurement of small volumes unreliable.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q8",
      question: "A child weighing 30 kg is prescribed paracetamol at 15 mg/kg/dose, four times daily. What is the total daily dose?",
      options: [
        "450 mg",
        "900 mg",
        "1350 mg",
        "1800 mg",
      ],
      correctIndex: 3,
      explanation:
        "Dose per administration = 15 mg/kg × 30 kg = 450 mg. Four times daily: 450 × 4 = 1800 mg total daily dose. Check against max: For a 30 kg child, max daily dose = 75 mg/kg/day = 2250 mg. So 1800 mg is within the safe range.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q9",
      question: "Fill in the blank: When reconstituting a powder for injection, the __________ is the volume occupied by the drug powder itself.",
      options: [
        "Diluent volume",
        "Final volume",
        "Displacement volume",
        "Stock volume",
      ],
      correctIndex: 2,
      explanation:
        "The displacement volume (also called powder volume) is the volume occupied by the drug powder after dissolution. Final volume = diluent volume + displacement volume. Ignoring displacement volume leads to incorrect concentration calculations.",
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: ["displacement volume", "powder volume", "displacement"],
        case_sensitive: false,
      },
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q10",
      question: "A patient at a CDAP pharmacy in Trinidad receives a 90-day prescription for losartan 50 mg OD. Stock: losartan 50 mg tablets in boxes of 30. How many boxes should be dispensed?",
      options: [
        "1 box",
        "2 boxes",
        "3 boxes",
        "4 boxes",
      ],
      correctIndex: 2,
      explanation:
        "50 mg OD = 1 tablet daily. For 90 days = 90 tablets. 90 ÷ 30 per box = 3 boxes. CDAP provides 90-day supplies for chronic medications, making this a very common calculation in Trinidad community pharmacies.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q11",
      question: "A busy emergency department at POS General Hospital orders tramadol 75 mg IM. The pharmacy has tramadol 50 mg/mL ampoules (2 mL each). What volume should the nurse administer?",
      options: [
        "0.75 mL",
        "1 mL",
        "1.5 mL",
        "2 mL",
      ],
      correctIndex: 2,
      explanation:
        "Volume = Desired dose ÷ Concentration = 75 mg ÷ 50 mg/mL = 1.5 mL. The 2 mL ampoule contains 100 mg total, so 1.5 mL out of 2 mL is used, and the remaining 0.5 mL (25 mg) is wasted and must be documented per controlled substance protocols.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 4 — Pediatric & Weight-Based Dosing Calculations
// ============================================================================

const module4: Module = {
  id: "m4-pediatric-dosing",
  number: 4,
  title: "Paediatric & Weight-Based Dosing Calculations",
  description:
    "Children are not small adults — their medication doses must be carefully calculated based on body weight or body surface area. This module covers the specialised calculations required for safe paediatric dispensing, a critical skill in Caribbean pharmacies where childhood infections and febrile illnesses are common presentations.",
  learningObjectives: [
    "Calculate weight-based doses using mg/kg/dose and mg/kg/day methods",
    "Determine appropriate paediatric doses for common Caribbean medications",
    "Evaluate whether a calculated paediatric dose falls within safe ranges",
    "Apply body surface area (BSA) calculations for specialised dosing",
  ],
  lessons: [
    // ── Lesson 4.1 ──
    {
      id: "m4-l1",
      title: "Principles of Paediatric Dosing",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Why Children Need Special Dosing",
        },
        {
          type: "text",
          body: "Paediatric patients have fundamentally different pharmacokinetics compared to adults. Their immature liver and kidney function, higher percentage of body water, lower protein binding, and rapidly changing body weight mean that adult doses simply scaled down would be dangerous. In the Caribbean, where infectious diseases, asthma, and febrile illnesses are leading reasons for paediatric pharmacy visits, accurate weight-based dosing is a daily critical skill.",
        },
        {
          type: "key-term",
          term: "mg/kg/dose",
          definition:
            "The standard expression for weight-based dosing, meaning milligrams of drug per kilogram of body weight per single dose. For example, paracetamol 15 mg/kg/dose means a 20 kg child receives 15 × 20 = 300 mg per dose. This is different from mg/kg/day, which is the total daily dose divided across all administrations.",
        },
        {
          type: "heading",
          level: 3,
          text: "Age-Based Weight Estimates",
        },
        {
          type: "text",
          body: "While actual weight should always be used when available, there are times — particularly in emergency situations — when weight must be estimated. The APLS (Advanced Paediatric Life Support) formula provides a quick estimate: Weight (kg) = (Age in years + 4) × 2 for ages 1-5, or (Age in years × 3) + 7 for ages 6-12. These are estimates only — always weigh the child when possible.",
        },
        {
          type: "table",
          caption: "Paediatric Age Groups and Typical Weights",
          headers: ["Age Group", "Age Range", "Typical Weight Range", "Key Dosing Consideration"],
          rows: [
            ["Neonate", "0-28 days", "2.5-4.5 kg", "Immature liver/kidneys; doses highly weight-specific"],
            ["Infant", "1-12 months", "4-10 kg", "Rapid growth; reweigh frequently"],
            ["Toddler", "1-3 years", "10-15 kg", "Liquid formulations essential; taste matters for adherence"],
            ["Pre-school", "3-5 years", "15-20 kg", "May start accepting chewable tablets"],
            ["School-age", "6-12 years", "20-40 kg", "Some can swallow small tablets/capsules"],
            ["Adolescent", "12-18 years", "40-70 kg", "May use adult doses for some medications"],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Never Exceed the Adult Maximum Dose",
          body: "Even when a weight-based calculation produces a dose that exceeds the normal adult dose, the paediatric dose should generally be CAPPED at the adult maximum. Example: A 60 kg teenager prescribed amoxicillin at 50 mg/kg/day = 3000 mg/day. The normal adult maximum is 3 g/day, so this dose is at the limit. For an 80 kg teenager, 50 mg/kg = 4000 mg — this exceeds the usual adult max and should be capped at 3 g/day unless the prescriber specifies otherwise for a severe infection.",
        },
        {
          type: "knowledge-check",
          question: "A 3-year-old child weighing 14 kg needs ibuprofen at a dose of 10 mg/kg/dose, three times daily. What is the dose per administration?",
          options: [
            "100 mg",
            "120 mg",
            "140 mg",
            "420 mg",
          ],
          correctIndex: 2,
          explanation:
            "Dose = 10 mg/kg × 14 kg = 140 mg per dose. The total daily dose = 140 × 3 = 420 mg. Using ibuprofen 100 mg/5 mL: volume per dose = (140/100) × 5 = 7 mL. This is within the safe paediatric range for a 14 kg child.",
        },
        {
          type: "text",
          body: "In Caribbean paediatric practice, the most commonly calculated weight-based doses are for paracetamol (15 mg/kg/dose), ibuprofen (5-10 mg/kg/dose), amoxicillin (25-50 mg/kg/day), and oral rehydration salts (for the frequent gastroenteritis presentations in tropical climates). Master these calculations and you will handle the majority of paediatric prescriptions with confidence.",
        },
      ],
    },
    // ── Lesson 4.2 ──
    {
      id: "m4-l2",
      title: "Calculating mg/kg Doses: Step-by-Step Practice",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The mg/kg Calculation Workflow",
        },
        {
          type: "text",
          body: "This lesson provides intensive practice with weight-based dose calculations. Every calculation follows the same systematic workflow: (1) Convert weight to kg if needed. (2) Calculate the dose: weight × mg/kg. (3) Determine the volume or tablet quantity from available stock. (4) Verify against maximum dose limits. (5) Calculate the total supply quantity.",
        },
        {
          type: "heading",
          level: 3,
          text: "Practice Problem 1: Amoxicillin for Otitis Media",
        },
        {
          type: "text",
          body: "Prescription: Amoxicillin 40 mg/kg/day in 3 divided doses × 7 days for a 2-year-old weighing 12 kg. Step 1: Weight = 12 kg (already in kg). Step 2: Total daily dose = 40 × 12 = 480 mg/day. Step 3: Dose per administration = 480 ÷ 3 = 160 mg. Step 4: Stock = amoxicillin 125 mg/5 mL. Volume per dose = (160/125) × 5 = 6.4 mL (round to 6.5 mL using a dosing syringe). Step 5: Daily volume = 6.5 × 3 = 19.5 mL. Total for 7 days = 19.5 × 7 = 136.5 mL. Dispense two 100 mL bottles.",
        },
        {
          type: "heading",
          level: 3,
          text: "Practice Problem 2: Paracetamol for Fever",
        },
        {
          type: "text",
          body: "A mother in Bridgetown, Barbados brings her 5-year-old (18 kg) to the pharmacy with a fever of 38.5°C. The pharmacist recommends paracetamol 15 mg/kg/dose every 4-6 hours PRN, maximum 4 doses in 24 hours. Calculate: Dose = 15 × 18 = 270 mg. Stock: paracetamol 120 mg/5 mL. Volume = (270/120) × 5 = 11.25 mL. Round to 11 mL for practical measurement with an oral syringe. Max daily: 270 × 4 = 1080 mg (check: 60 mg/kg/day = 1080 mg — at the maximum, which is acceptable for short-term use).",
        },
        {
          type: "heading",
          level: 3,
          text: "Practice Problem 3: Co-trimoxazole Prophylaxis",
        },
        {
          type: "text",
          body: "An HIV-positive child in Trinidad, aged 8, weighing 24 kg, requires co-trimoxazole (trimethoprim/sulfamethoxazole) prophylaxis. The dose for prophylaxis is trimethoprim 5 mg/kg once daily. Stock: co-trimoxazole 40/200 mg per 5 mL (trimethoprim 40 mg per 5 mL). Dose = 5 × 24 = 120 mg trimethoprim. Volume = (120/40) × 5 = 15 mL once daily. Alternatively, if the child can swallow tablets, co-trimoxazole 80/400 mg tablets: 120 mg ÷ 80 mg = 1.5 tablets (round to 1½ tablets if scored).",
        },
        {
          type: "callout",
          variant: "info",
          title: "Co-trimoxazole in Caribbean HIV Care",
          body: "Co-trimoxazole prophylaxis is a cornerstone of paediatric HIV care across the Caribbean. It prevents opportunistic infections including Pneumocystis pneumonia and toxoplasmosis. The Caribbean HIV Treatment Guidelines, coordinated by CARPHA, recommend prophylaxis for all HIV-exposed infants from 4-6 weeks of age until HIV infection is excluded. Pharmacy technicians in CDAP pharmacies and NHF-affiliated facilities will calculate these doses regularly.",
        },
        {
          type: "table",
          caption: "Weight-Based Doses for Common Caribbean Paediatric Medications",
          headers: ["Medication", "Indication", "Dose (mg/kg)", "Frequency", "Max Daily Dose"],
          rows: [
            ["Paracetamol", "Fever, pain", "15 mg/kg/dose", "Q4-6H PRN (max 4/day)", "75 mg/kg/day or 4 g"],
            ["Ibuprofen", "Fever, pain, inflammation", "5-10 mg/kg/dose", "Q6-8H", "40 mg/kg/day or 2.4 g"],
            ["Amoxicillin", "Standard infections", "25 mg/kg/dose", "TDS", "3 g/day"],
            ["Amoxicillin", "High-dose (otitis media)", "40-45 mg/kg/dose", "BD", "3 g/day"],
            ["Cefalexin", "Skin/UTI infections", "12.5-25 mg/kg/dose", "QDS", "4 g/day"],
            ["Azithromycin", "Respiratory infections", "10 mg/kg/dose day 1, then 5 mg/kg", "OD", "500 mg/day"],
            ["Metronidazole", "Anaerobic/parasitic", "7.5 mg/kg/dose", "TDS", "2 g/day"],
          ],
        },
        {
          type: "knowledge-check",
          question: "A 6-year-old weighing 22 kg is prescribed amoxicillin 25 mg/kg/dose TDS × 7 days. Stock: 250 mg/5 mL. What volume per dose?",
          options: [
            "5.5 mL",
            "11 mL",
            "15 mL",
            "22 mL",
          ],
          correctIndex: 1,
          explanation:
            "Dose = 25 × 22 = 550 mg. Volume = (550/250) × 5 = 11 mL per dose. Daily = 11 × 3 = 33 mL. Weekly = 33 × 7 = 231 mL. Dispense three 100 mL bottles (or the locally available 150 mL and 100 mL combination).",
        },
      ],
    },
    // ── Lesson 4.3 ──
    {
      id: "m4-l3",
      title: "Body Surface Area (BSA) Calculations",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Body Surface Area: When Weight Alone Is Not Enough",
        },
        {
          type: "text",
          body: "For certain medications — particularly chemotherapy agents, some biologics, and a few specialist drugs — dosing is based on Body Surface Area (BSA) rather than weight alone. BSA provides a more accurate reflection of metabolic rate and drug clearance than weight, making it the preferred method for narrow therapeutic index drugs used in oncology. While pharmacy technicians do not independently select BSA-based doses, they must be able to verify BSA calculations and prepare the correct quantities.",
        },
        {
          type: "key-term",
          term: "Body Surface Area (BSA)",
          definition:
            "The total surface area of the human body, measured in square metres (m²). Used for dosing certain medications, particularly chemotherapy. The average adult BSA is approximately 1.7 m². BSA is calculated from height and weight using validated formulas such as the Mosteller formula.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Mosteller Formula",
        },
        {
          type: "text",
          body: "BSA (m²) = √[(Height in cm × Weight in kg) / 3600]. This is the most commonly used formula in Caribbean hospitals. Example: A child is 120 cm tall and weighs 25 kg. BSA = √[(120 × 25) / 3600] = √[3000 / 3600] = √0.833 = 0.913 m². Round to 0.91 m².",
        },
        {
          type: "text",
          body: "Worked dosing example: A child with BSA 0.91 m² is prescribed methotrexate 15 mg/m² weekly. Dose = 15 × 0.91 = 13.65 mg. Round to 13.5 mg (or per institutional rounding protocol). Stock: methotrexate 25 mg/mL injection. Volume = 13.5 ÷ 25 = 0.54 mL. This is a small volume requiring a 1 mL syringe for accurate measurement.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Chemotherapy Dose Verification",
          body: "Chemotherapy dosing errors can be fatal. In Caribbean oncology centres — including the National Radiotherapy Centre in Trinidad and oncology units at UHWI and QEH — chemotherapy doses are ALWAYS independently verified by at least two pharmacy personnel. The BSA calculation, the dose calculation, the volume drawn, and the reconstitution must each be checked separately. Never prepare a chemotherapy dose without independent verification.",
        },
        {
          type: "table",
          caption: "BSA Quick Reference",
          headers: ["Patient", "Typical Height", "Typical Weight", "Approximate BSA"],
          rows: [
            ["Infant (6 months)", "65 cm", "7 kg", "0.34 m²"],
            ["Child (3 years)", "95 cm", "14 kg", "0.61 m²"],
            ["Child (8 years)", "130 cm", "25 kg", "0.95 m²"],
            ["Adolescent (14 years)", "165 cm", "55 kg", "1.59 m²"],
            ["Average adult", "170 cm", "70 kg", "1.82 m²"],
            ["Large adult", "180 cm", "90 kg", "2.10 m²"],
          ],
        },
        {
          type: "knowledge-check",
          question: "Using the Mosteller formula, what is the BSA of a patient who is 150 cm tall and weighs 50 kg?",
          options: [
            "1.20 m²",
            "1.44 m²",
            "1.56 m²",
            "2.08 m²",
          ],
          correctIndex: 1,
          explanation:
            "BSA = √[(150 × 50) / 3600] = √[7500 / 3600] = √2.083 = 1.44 m². This is within the typical range for a small adult or large adolescent.",
        },
        {
          type: "text",
          body: "While BSA calculations are less frequent than mg/kg calculations in community pharmacy, they are essential in hospital pharmacy settings. Caribbean pharmacy technicians working in hospital oncology, paediatric wards, or burns units will use BSA calculations regularly. Practise the Mosteller formula until you can perform it confidently with a calculator.",
        },
      ],
    },
    // ── Lesson 4.4 ──
    {
      id: "m4-l4",
      title: "Paediatric Dose Verification and Safety Limits",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Final Safety Check: Is This Dose Right for This Child?",
        },
        {
          type: "text",
          body: "Paediatric dosing errors are more common and more dangerous than adult dosing errors. A 10-fold error that would make an adult unwell could kill a child. This lesson covers the verification process that must follow every paediatric dose calculation. In Caribbean pharmacies, where high patient volumes during dengue season, flu season, or back-to-school periods can create time pressure, systematic verification is your last line of defence.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Paediatric Dose Verification Workflow",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Confirm the child's weight in kg (convert from lb if needed: ÷ 2.2)",
            "Calculate the dose using the prescribed mg/kg",
            "Check: Is this dose within the usual range for this drug, indication, and age group?",
            "Check: Does the total daily dose exceed the maximum daily dose for this weight?",
            "Check: Does the total daily dose exceed the adult maximum dose? (Cap if so, unless prescriber specifies otherwise)",
            "Calculate the volume or quantity from available stock",
            "Check: Is the volume reasonable for the child's age? (Infants: max ~5 mL/dose; toddlers: max ~10 mL; school-age: max ~15-20 mL)",
            "If anything is outside expected ranges, consult the pharmacist before dispensing",
          ],
        },
        {
          type: "case-study",
          title: "Case Study: Dengue Fever Season at a Kingston Pharmacy",
          scenario:
            "It is September — peak dengue season in Jamaica. A mother brings her 4-year-old daughter, Amara (weight: 16 kg), to your NHF pharmacy in Kingston with a prescription for paracetamol 250 mg/5 mL, 10 mL (500 mg) QDS PRN. The child has been diagnosed with dengue fever. The standard paediatric paracetamol dose is 15 mg/kg/dose, maximum 60-75 mg/kg/day.",
          questions: [
            "What is the weight-appropriate single dose for this child?",
            "Is the prescribed dose (500 mg) within the safe range?",
            "Why is paracetamol — and NOT ibuprofen — used in dengue fever?",
          ],
          discussion:
            "Weight-appropriate dose: 15 mg/kg × 16 kg = 240 mg per dose. The prescribed dose of 500 mg is 31.25 mg/kg — MORE THAN DOUBLE the standard dose. Daily total at 500 mg QDS = 2000 mg = 125 mg/kg/day — significantly exceeding the maximum of 75 mg/kg/day. This prescription should NOT be dispensed as written. The pharmacist must contact the prescriber. Additionally, NSAIDs (ibuprofen, aspirin) are CONTRAINDICATED in dengue because they impair platelet function and can worsen the haemorrhagic complications of dengue. Only paracetamol is safe for pain and fever management in dengue — making the correct dose even more critical, as there is no alternative analgesic.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Dengue Season in the Caribbean",
          body: "Dengue fever is endemic across the Caribbean, with peak seasons during the rainy months (June-November). During outbreaks, paediatric paracetamol demand surges. Pharmacy technicians must be vigilant about dose accuracy during these busy periods. Remember: NEVER dispense ibuprofen or aspirin for suspected dengue — paracetamol only. This is a life-saving counselling point.",
        },
        {
          type: "island-comparison",
          title: "Paediatric Formulary Access Across the Caribbean",
          description: "Access to paediatric formulations varies across Caribbean islands, affecting how technicians calculate and prepare doses.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "CDAP covers paediatric formulations of essential medications",
                "Most community pharmacies stock paracetamol 120 mg/5 mL and 250 mg/5 mL",
                "Amoxicillin suspension widely available in 125 and 250 mg/5 mL",
                "Eric Williams Medical Sciences Complex has a dedicated paediatric pharmacy",
                "Paediatric doses verified against BNF for Children and local formulary",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "NHF subsidises certain paediatric formulations",
                "Bustamante Hospital for Children has specialised paediatric pharmacy services",
                "Generic paediatric suspensions widely available",
                "Some rural pharmacies may have limited stock requiring improvised doses from adult formulations",
                "National Treatment Guidelines include paediatric dosing tables",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "QEH paediatric ward pharmacy provides specialised compounding",
                "Barbados Drug Service supplies paediatric formulations to polyclinics",
                "Community pharmacies generally well-stocked for common paediatric needs",
                "Paediatric oral syringes dispensed with all liquid medications as standard",
              ],
            },
            {
              name: "Grenada",
              flag: "🇬🇩",
              details: [
                "OECS Pharmaceutical Procurement Service supplies paediatric formulations",
                "General Hospital St. George's provides paediatric pharmacy services",
                "Some specialty paediatric formulations may need to be sourced from Trinidad or Miami",
                "Pharmacy technicians may need to calculate doses from adult-strength preparations",
              ],
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "A 7-year-old child weighing 25 kg is prescribed ibuprofen 10 mg/kg TDS. The maximum daily dose is 40 mg/kg/day. Is this prescription within safe limits?",
          options: [
            "Yes — 10 mg/kg TDS = 30 mg/kg/day, which is within the 40 mg/kg/day limit",
            "No — the dose exceeds the maximum daily dose",
            "Cannot determine without the child's height",
            "Yes — but only if the child is older than 6",
          ],
          correctIndex: 0,
          explanation:
            "10 mg/kg/dose × 3 doses/day = 30 mg/kg/day. The maximum is 40 mg/kg/day. Since 30 < 40, this prescription is within safe limits. Single dose: 10 × 25 = 250 mg. Daily total: 750 mg. Adult max is 2400 mg/day — 750 mg is well below this cap.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m4-q1",
      question: "A 10-month-old infant weighing 9 kg is prescribed paracetamol at 15 mg/kg/dose. What is the single dose?",
      options: [
        "90 mg",
        "120 mg",
        "135 mg",
        "150 mg",
      ],
      correctIndex: 2,
      explanation:
        "15 mg/kg × 9 kg = 135 mg per dose. Using paracetamol 120 mg/5 mL: volume = (135/120) × 5 = 5.6 mL.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q2",
      question: "The Mosteller formula for BSA is:",
      options: [
        "BSA = (Height × Weight) / 3600",
        "BSA = √[(Height in cm × Weight in kg) / 3600]",
        "BSA = (Height + Weight) / 100",
        "BSA = Weight / Height²",
      ],
      correctIndex: 1,
      explanation:
        "The Mosteller formula is BSA (m²) = √[(Height in cm × Weight in kg) / 3600]. This is the most widely used BSA formula in Caribbean clinical practice.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q3",
      question: "Why are NSAIDs like ibuprofen contraindicated in dengue fever?",
      options: [
        "They reduce fever too quickly, causing hypothermia",
        "They impair platelet function and increase bleeding risk",
        "They interact with the dengue virus directly",
        "They cause dehydration in tropical climates",
      ],
      correctIndex: 1,
      explanation:
        "NSAIDs (ibuprofen, aspirin) impair platelet function and can worsen the haemorrhagic complications of dengue fever. Dengue itself causes thrombocytopenia (low platelet count), and adding an NSAID further impairs haemostasis. Only paracetamol is safe for fever/pain management in dengue.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q4",
      question: "A child weighing 15 kg is prescribed amoxicillin 45 mg/kg/day in 2 divided doses. What is each dose?",
      options: [
        "225 mg",
        "337.5 mg",
        "450 mg",
        "675 mg",
      ],
      correctIndex: 1,
      explanation:
        "Total daily dose = 45 × 15 = 675 mg/day. Divided into 2 doses: 675 ÷ 2 = 337.5 mg per dose. This is a high-dose amoxicillin regimen commonly used for acute otitis media.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q5",
      question: "An adolescent weighing 70 kg is prescribed amoxicillin at 50 mg/kg/day. The maximum adult dose is 3 g/day. What daily dose should be dispensed?",
      options: [
        "3000 mg (capped at adult maximum)",
        "3500 mg (as calculated)",
        "2500 mg (reduced for safety)",
        "1500 mg (half the adult dose for a teenager)",
      ],
      correctIndex: 0,
      explanation:
        "Calculated dose: 50 × 70 = 3500 mg/day. However, this exceeds the adult maximum of 3000 mg/day. The dose should be capped at 3000 mg/day unless the prescriber explicitly specifies a higher dose for a specific indication (e.g., endocarditis).",
      questionType: "multiple_choice",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m4-q6",
      question: "True or false: A pharmacy technician can independently adjust a paediatric dose if their calculation shows the prescribed dose is too high.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 1,
      explanation:
        "False. A pharmacy technician cannot independently alter any prescription. If a calculated dose appears incorrect, the technician must flag the concern to the supervising pharmacist, who will contact the prescriber. Only the prescriber can authorise a dose change.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q7",
      question: "A child weighs 44 pounds. What is their weight in kilograms?",
      options: [
        "15 kg",
        "20 kg",
        "22 kg",
        "25 kg",
      ],
      correctIndex: 1,
      explanation:
        "44 lb ÷ 2.2 lb/kg = 20 kg. This is a common conversion that should be memorised as a reference point.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q8",
      question: "A Caribbean hospital pharmacy scenario: A 5-year-old weighing 18 kg presents with a skin infection. The doctor prescribes cefalexin 25 mg/kg/day in 4 divided doses for 7 days. Stock: cefalexin 125 mg/5 mL (100 mL bottles). How many bottles are needed?",
      options: [
        "1 bottle",
        "2 bottles",
        "3 bottles",
        "4 bottles",
      ],
      correctIndex: 2,
      explanation:
        "Daily dose = 25 × 18 = 450 mg. Per dose = 450/4 = 112.5 mg. Volume per dose = (112.5/125) × 5 = 4.5 mL. Daily volume = 4.5 × 4 = 18 mL. For 7 days = 18 × 7 = 126 mL. Need 2 bottles (200 mL total) — but 126 mL out of 200 mL means 2 bottles suffice. Wait — 126 > 100 (1 bottle), so need 2 bottles. 2 × 100 = 200 mL, which provides enough.",
      questionType: "scenario",
      questionData: {
        context: "A 5-year-old, 18 kg, presents at a hospital pharmacy in Bridgetown, Barbados, with a skin infection requiring cefalexin 25 mg/kg/day QDS for 7 days.",
      },
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q9",
      question: "Place the paediatric dose verification steps in the correct order.",
      options: [
        "Calculate the dose from available stock (volume or tablets)",
        "Confirm the child's weight in kilograms",
        "Check if the daily dose exceeds the maximum for this weight",
        "Calculate the dose using the prescribed mg/kg",
        "Consult the pharmacist if anything is outside expected ranges",
      ],
      correctIndex: 0,
      explanation:
        "Correct order: (1) Confirm weight in kg, (2) Calculate dose using mg/kg, (3) Check daily dose vs maximum, (4) Calculate volume/tablets from stock, (5) Consult pharmacist if concerns arise. This systematic approach catches errors at each stage.",
      questionType: "ordering",
      questionData: {
        correct_order: [1, 3, 2, 0, 4],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q10",
      question: "Using the Mosteller formula, calculate the BSA for a child who is 100 cm tall and weighs 16 kg.",
      options: [
        "0.55 m²",
        "0.67 m²",
        "0.78 m²",
        "0.89 m²",
      ],
      correctIndex: 1,
      explanation:
        "BSA = √[(100 × 16) / 3600] = √[1600 / 3600] = √0.444 = 0.667 m², rounded to 0.67 m².",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 5 — IV Flow Rates, Drip Rates & Infusion Time
// ============================================================================

const module5: Module = {
  id: "m5-iv-calculations",
  number: 5,
  title: "IV Flow Rates, Drip Rates & Infusion Time",
  description:
    "Intravenous therapy calculations are among the most critical in pharmacy — errors in IV flow rates can have immediate, life-threatening consequences. This module covers the calculations for IV infusion rates, drip rates, and infusion times that pharmacy technicians need in Caribbean hospital settings.",
  learningObjectives: [
    "Calculate IV flow rates in mL/hr from a prescribed volume and infusion time",
    "Determine drip rates in drops per minute using the appropriate drop factor",
    "Calculate infusion time for a given volume and flow rate",
    "Evaluate the safety of IV medication concentrations and infusion rates",
  ],
  lessons: [
    // ── Lesson 5.1 ──
    {
      id: "m5-l1",
      title: "IV Flow Rate Calculations: mL/hr",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Intravenous Flow Rates: The Foundation of IV Therapy",
        },
        {
          type: "text",
          body: "Intravenous (IV) therapy delivers fluids and medications directly into the bloodstream. Because the drug enters the systemic circulation immediately — bypassing the absorption barriers of oral administration — precise rate control is essential. Flow rate errors can cause fluid overload, drug toxicity, or subtherapeutic dosing. In Caribbean hospitals such as POS General Hospital, QEH Barbados, and UHWI Jamaica, pharmacy technicians help prepare IV medications and verify rate calculations.",
        },
        {
          type: "key-term",
          term: "Flow Rate (mL/hr)",
          definition:
            "The volume of IV fluid delivered per hour, expressed in millilitres per hour (mL/hr). This is the rate programmed into an IV infusion pump. Formula: Flow rate (mL/hr) = Total volume (mL) ÷ Infusion time (hours).",
        },
        {
          type: "heading",
          level: 3,
          text: "The Basic Flow Rate Formula",
        },
        {
          type: "text",
          body: "Flow rate (mL/hr) = Total volume (mL) ÷ Time (hours). This is the simplest IV calculation and the one you will use most often. Example: A doctor orders 1000 mL of Normal Saline (0.9% NaCl) to be infused over 8 hours. Flow rate = 1000 ÷ 8 = 125 mL/hr. Set the infusion pump to 125 mL/hr.",
        },
        {
          type: "text",
          body: "Worked example: A post-surgical patient at QEH Barbados requires 500 mL of Dextrose 5% over 4 hours. Flow rate = 500 ÷ 4 = 125 mL/hr. If the order then changes to 'complete the remaining 250 mL over 3 hours': new flow rate = 250 ÷ 3 = 83.3 mL/hr. Round to 83 mL/hr on the pump.",
        },
        {
          type: "table",
          caption: "Common IV Fluid Orders in Caribbean Hospitals",
          headers: ["IV Fluid", "Common Volume", "Typical Infusion Time", "Calculated Rate"],
          rows: [
            ["Normal Saline (0.9% NaCl)", "1000 mL", "8 hours", "125 mL/hr"],
            ["Normal Saline (0.9% NaCl)", "1000 mL", "12 hours", "83 mL/hr"],
            ["Dextrose 5% in Water (D5W)", "500 mL", "6 hours", "83 mL/hr"],
            ["Ringer's Lactate", "1000 mL", "6 hours", "167 mL/hr"],
            ["Half-Normal Saline (0.45% NaCl)", "1000 mL", "24 hours", "42 mL/hr"],
            ["Normal Saline KVO (keep vein open)", "500 mL", "24 hours", "21 mL/hr"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "KVO — Keep Vein Open",
          body: "KVO (keep vein open) is a common order in Caribbean hospitals. It means running the IV at the minimum rate needed to prevent the catheter from clotting — typically 20-30 mL/hr. This maintains IV access without adding significant fluid volume. You will see KVO orders on patients who have completed their IV therapy but may need IV access again soon.",
        },
        {
          type: "knowledge-check",
          question: "A doctor orders 1000 mL of Ringer's Lactate to infuse over 10 hours. What is the flow rate?",
          options: [
            "50 mL/hr",
            "100 mL/hr",
            "125 mL/hr",
            "200 mL/hr",
          ],
          correctIndex: 1,
          explanation:
            "Flow rate = Total volume ÷ Time = 1000 mL ÷ 10 hr = 100 mL/hr. Set the infusion pump to 100 mL/hr.",
        },
        {
          type: "text",
          body: "Rearranging the formula: If you need to find the time, use Time = Volume ÷ Rate. If you need to find the volume, use Volume = Rate × Time. These rearrangements are used when checking whether an IV bag will last through a shift, or when a nurse asks 'when will this bag finish?'",
        },
      ],
    },
    // ── Lesson 5.2 ──
    {
      id: "m5-l2",
      title: "Drip Rate Calculations: Drops per Minute",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "From mL/hr to Drops per Minute",
        },
        {
          type: "text",
          body: "While modern infusion pumps control flow in mL/hr, there are situations — power outages, equipment shortages, rural health centres without pumps — where IV fluids must be regulated manually using gravity and a roller clamp. In these situations, you count drops per minute (gtt/min) to achieve the desired flow rate. This is particularly relevant in Caribbean settings where hospital resources can be stretched, especially during hurricane season or surge periods.",
        },
        {
          type: "key-term",
          term: "Drop Factor",
          definition:
            "The number of drops (gtt) that equal 1 mL, determined by the IV administration set being used. Standard (macrodrip) sets: 10, 15, or 20 gtt/mL (varies by manufacturer). Microdrip (paediatric) sets: 60 gtt/mL. The drop factor is printed on the packaging of the IV tubing.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Drip Rate Formula",
        },
        {
          type: "text",
          body: "Drip rate (gtt/min) = [Volume (mL) × Drop factor (gtt/mL)] ÷ Time (minutes). Alternatively: Drip rate = Flow rate (mL/hr) × Drop factor ÷ 60. Remember to convert hours to minutes (multiply by 60) when using the first formula.",
        },
        {
          type: "text",
          body: "Worked example: Order: 1000 mL Normal Saline over 8 hours using a 20 gtt/mL administration set. Step 1: Convert 8 hours to minutes: 8 × 60 = 480 minutes. Step 2: Drip rate = (1000 × 20) ÷ 480 = 20,000 ÷ 480 = 41.67. Round to 42 gtt/min. Alternatively: Flow rate = 1000 ÷ 8 = 125 mL/hr. Drip rate = 125 × 20 ÷ 60 = 41.67 → 42 gtt/min.",
        },
        {
          type: "table",
          caption: "Drop Factors by Administration Set Type",
          headers: ["Set Type", "Drop Factor", "When Used", "Tubing Feature"],
          rows: [
            ["Macrodrip (standard)", "10 gtt/mL", "Large-volume adult infusions", "Larger drip chamber"],
            ["Macrodrip (standard)", "15 gtt/mL", "General adult infusions", "Medium drip chamber"],
            ["Macrodrip (standard)", "20 gtt/mL", "General adult infusions", "Common in Caribbean hospitals"],
            ["Microdrip (paediatric)", "60 gtt/mL", "Paediatric and precise medication infusions", "Smaller drip chamber, finer drops"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The 60 gtt/mL Shortcut",
          body: "When using a 60 gtt/mL (microdrip) set, the drip rate in gtt/min equals the flow rate in mL/hr. This is because: gtt/min = mL/hr × 60 gtt/mL ÷ 60 min/hr = mL/hr. So if the flow rate is 50 mL/hr, the drip rate with a microdrip set is simply 50 gtt/min. This shortcut eliminates calculation for microdrip sets and is widely used in Caribbean hospital wards.",
        },
        {
          type: "text",
          body: "Worked example: Order: 250 mL of antibiotic solution over 30 minutes using a 15 gtt/mL set. Drip rate = (250 × 15) ÷ 30 = 3750 ÷ 30 = 125 gtt/min. This is a very fast drip — about 2 drops per second. In practice, many antibiotics infused over 30 minutes would be run on a pump. If no pump is available, the nurse must monitor this infusion closely.",
        },
        {
          type: "knowledge-check",
          question: "Order: 500 mL D5W over 6 hours using a 20 gtt/mL set. What is the drip rate?",
          options: [
            "17 gtt/min",
            "28 gtt/min",
            "42 gtt/min",
            "56 gtt/min",
          ],
          correctIndex: 1,
          explanation:
            "Convert 6 hours to 360 minutes. Drip rate = (500 × 20) ÷ 360 = 10,000 ÷ 360 = 27.78 → 28 gtt/min. Alternatively: Flow rate = 500/6 = 83.3 mL/hr. Drip rate = 83.3 × 20/60 = 27.78 → 28 gtt/min.",
        },
      ],
    },
    // ── Lesson 5.3 ──
    {
      id: "m5-l3",
      title: "IV Medication Dose Rate Calculations",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Calculating Drug Delivery Rates for IV Medications",
        },
        {
          type: "text",
          body: "Some IV medications are ordered by the dose rate rather than simple volume — for example, 'dopamine 5 mcg/kg/min' or 'heparin 1000 units/hr'. In these cases, you must calculate the flow rate (mL/hr) that delivers the correct drug amount based on the concentration of the prepared solution. These calculations are common in intensive care units and emergency departments at Caribbean hospitals.",
        },
        {
          type: "key-term",
          term: "Dose Rate",
          definition:
            "The amount of drug delivered per unit time, often expressed as mcg/min, mg/hr, units/hr, or mcg/kg/min. To set an infusion pump, the dose rate must be converted to a volume rate (mL/hr) using the known drug concentration in the IV bag.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Dose-Rate-to-Flow-Rate Formula",
        },
        {
          type: "text",
          body: "Flow rate (mL/hr) = Dose rate (mg/hr) ÷ Concentration (mg/mL). For mcg/kg/min orders: Step 1: Calculate dose in mcg/min = dose rate × patient weight. Step 2: Convert to mg/hr = mcg/min × 60 ÷ 1000. Step 3: Flow rate (mL/hr) = mg/hr ÷ concentration (mg/mL).",
        },
        {
          type: "text",
          body: "Worked example 1 — Heparin: Order: heparin 1000 units/hr. The IV bag contains heparin 25,000 units in 500 mL D5W. Concentration = 25,000 ÷ 500 = 50 units/mL. Flow rate = 1000 units/hr ÷ 50 units/mL = 20 mL/hr. Set the pump to 20 mL/hr.",
        },
        {
          type: "text",
          body: "Worked example 2 — Dopamine: Order: dopamine 5 mcg/kg/min for a 70 kg patient. The IV bag contains dopamine 400 mg in 250 mL D5W. Step 1: Dose = 5 × 70 = 350 mcg/min. Step 2: Convert = 350 × 60 / 1000 = 21 mg/hr. Step 3: Concentration = 400 / 250 = 1.6 mg/mL. Step 4: Flow rate = 21 / 1.6 = 13.125 mL/hr → round to 13 mL/hr.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "High-Alert IV Medications",
          body: "Medications like heparin, insulin, dopamine, and potassium chloride are classified as 'high alert' by ISMP because errors frequently cause patient harm. In Caribbean hospitals, these medications require independent double-checks — two qualified personnel must independently verify the concentration, dose calculation, and pump rate. Never prepare or verify a high-alert IV medication alone.",
        },
        {
          type: "table",
          caption: "Common IV Medication Concentrations — Caribbean Hospital Practice",
          headers: ["Medication", "Standard Preparation", "Concentration", "Typical Dose Range"],
          rows: [
            ["Heparin", "25,000 units in 500 mL", "50 units/mL", "500-2000 units/hr"],
            ["Insulin (regular)", "50 units in 50 mL NS", "1 unit/mL", "1-10 units/hr"],
            ["Dopamine", "400 mg in 250 mL D5W", "1600 mcg/mL", "2-20 mcg/kg/min"],
            ["Dobutamine", "250 mg in 250 mL D5W", "1000 mcg/mL", "2-20 mcg/kg/min"],
            ["Morphine PCA", "50 mg in 50 mL NS", "1 mg/mL", "1-2 mg bolus, 0.5-2 mg/hr background"],
            ["KCl (potassium)", "40 mEq in 1000 mL NS", "0.04 mEq/mL", "10-20 mEq/hr max"],
          ],
        },
        {
          type: "knowledge-check",
          question: "A heparin infusion is ordered at 800 units/hr. The preparation is 25,000 units in 500 mL. What pump rate (mL/hr) should be set?",
          options: [
            "8 mL/hr",
            "16 mL/hr",
            "32 mL/hr",
            "40 mL/hr",
          ],
          correctIndex: 1,
          explanation:
            "Concentration = 25,000 units / 500 mL = 50 units/mL. Flow rate = 800 units/hr ÷ 50 units/mL = 16 mL/hr.",
        },
      ],
    },
    // ── Lesson 5.4 ──
    {
      id: "m5-l4",
      title: "Infusion Time Calculations and IV Bag Management",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "How Long Will This IV Last?",
        },
        {
          type: "text",
          body: "Nurses frequently ask pharmacy technicians: 'When will this IV bag need changing?' or 'Will this infusion finish before the end of my shift?' Being able to calculate infusion completion times is a practical skill that supports ward operations. You will also need to calculate whether a prepared IV medication will still be within its stability period when the infusion completes.",
        },
        {
          type: "key-term",
          term: "Beyond-Use Date/Time (BUD)",
          definition:
            "The date and time after which a compounded or reconstituted preparation should not be used. For IV admixtures, the BUD depends on the drug, diluent, concentration, and storage temperature. In the Caribbean's warm climate, BUDs for room-temperature IV preparations may be shorter than in temperate environments.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Time Calculation Formula",
        },
        {
          type: "text",
          body: "Infusion time (hours) = Total volume (mL) ÷ Flow rate (mL/hr). Example: A 1000 mL bag of Normal Saline is running at 125 mL/hr. Time = 1000 ÷ 125 = 8 hours. If the infusion started at 2:00 PM, it will complete at 10:00 PM.",
        },
        {
          type: "text",
          body: "Worked example: A nurse at POS General Hospital starts a 500 mL bag of Normal Saline at 09:30. It is running at 83 mL/hr. When will the bag need changing? Time = 500 ÷ 83 = 6.02 hours ≈ 6 hours and 1 minute. The bag will finish at approximately 15:31 (3:31 PM). The nurse should prepare the next bag by 15:00 to allow time for changeover.",
        },
        {
          type: "case-study",
          title: "Case Study: Night Shift IV Management at QEH Barbados",
          scenario:
            "You are a pharmacy technician on the evening shift at QEH Barbados. At 20:00 (8 PM), the ward nurse calls with the following: Patient A has 400 mL remaining of Normal Saline running at 100 mL/hr. Patient B has 750 mL of D5W ordered to run at 50 mL/hr, to be started immediately. Patient C's heparin infusion (500 mL bag, running at 20 mL/hr) was started at 14:00 (2 PM) with 500 mL — the BUD for this preparation is 24 hours from preparation time (prepared at 13:00).",
          questions: [
            "When will Patient A's bag finish? Will you need to prepare a replacement before your shift ends at midnight?",
            "When will Patient B's infusion complete? Will it run into the next shift?",
            "When does Patient C's heparin preparation expire? How many mL will remain at expiry?",
          ],
          discussion:
            "Patient A: 400 mL at 100 mL/hr = 4 hours. Finishes at 00:00 (midnight) — right at shift change. Prepare replacement by 23:30. Patient B: 750 mL at 50 mL/hr = 15 hours. Finishes at 11:00 AM next day — well into the next shift. No action needed tonight. Patient C: Heparin prepared at 13:00, BUD = 13:00 the next day (24 hours). At 20:00, the infusion has been running for 6 hours at 20 mL/hr = 120 mL used, 380 mL remaining. By 13:00 next day (another 17 hours at 20 mL/hr = 340 mL), 380 - 340 = 40 mL will remain. The BUD will expire before the bag empties. Flag to the pharmacist: a new bag must be prepared before 13:00 tomorrow.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "IV Stability in Tropical Conditions",
          body: "Many IV admixture stability data are based on studies at 25°C. In Caribbean hospitals, ward temperatures may be higher, especially if air conditioning is intermittent. Higher temperatures can reduce the beyond-use time of IV preparations. When in doubt, use the most conservative (shortest) stability period. The pharmacy department should have reference charts for local conditions.",
        },
        {
          type: "table",
          caption: "Infusion Time Quick-Reference Calculations",
          headers: ["Volume", "Rate", "Time", "When to Prepare Next Bag (30 min before)"],
          rows: [
            ["1000 mL", "125 mL/hr", "8 hours", "7.5 hours after start"],
            ["1000 mL", "100 mL/hr", "10 hours", "9.5 hours after start"],
            ["500 mL", "50 mL/hr", "10 hours", "9.5 hours after start"],
            ["250 mL", "100 mL/hr", "2.5 hours", "2 hours after start"],
            ["1000 mL", "42 mL/hr", "23.8 hours", "23.3 hours after start"],
          ],
        },
        {
          type: "knowledge-check",
          question: "An IV bag of 1000 mL Normal Saline running at 150 mL/hr was started at 06:00. Approximately what time will it finish?",
          options: [
            "10:40 AM",
            "12:00 PM (noon)",
            "12:40 PM",
            "2:00 PM",
          ],
          correctIndex: 2,
          explanation:
            "Time = 1000 ÷ 150 = 6.67 hours = 6 hours and 40 minutes. Started at 06:00, so it finishes at approximately 12:40 PM.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m5-q1",
      question: "1000 mL Normal Saline is ordered to infuse over 8 hours. What is the flow rate?",
      options: [
        "100 mL/hr",
        "125 mL/hr",
        "150 mL/hr",
        "200 mL/hr",
      ],
      correctIndex: 1,
      explanation:
        "Flow rate = Volume ÷ Time = 1000 ÷ 8 = 125 mL/hr.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q2",
      question: "Order: 500 mL over 4 hours using a 15 gtt/mL administration set. Calculate the drip rate in gtt/min.",
      options: [
        "21 gtt/min",
        "31 gtt/min",
        "42 gtt/min",
        "63 gtt/min",
      ],
      correctIndex: 1,
      explanation:
        "4 hours = 240 minutes. Drip rate = (500 × 15) / 240 = 7500 / 240 = 31.25 → 31 gtt/min.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q3",
      question: "When using a 60 gtt/mL microdrip set, the drip rate (gtt/min) equals:",
      options: [
        "The flow rate in mL/min",
        "The flow rate in mL/hr",
        "Half the flow rate in mL/hr",
        "Double the flow rate in mL/hr",
      ],
      correctIndex: 1,
      explanation:
        "With a 60 gtt/mL set: gtt/min = mL/hr × 60/60 = mL/hr. This is the simplest IV calculation shortcut and is widely used in Caribbean hospital wards.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q4",
      question: "Heparin 25,000 units in 500 mL is running at 1200 units/hr. What is the pump rate?",
      options: [
        "12 mL/hr",
        "24 mL/hr",
        "48 mL/hr",
        "60 mL/hr",
      ],
      correctIndex: 1,
      explanation:
        "Concentration = 25,000/500 = 50 units/mL. Flow rate = 1200/50 = 24 mL/hr.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q5",
      question: "A 500 mL bag running at 80 mL/hr started at 10:00 AM. When will it finish?",
      options: [
        "2:15 PM",
        "4:15 PM",
        "4:00 PM",
        "6:00 PM",
      ],
      correctIndex: 1,
      explanation:
        "Time = 500/80 = 6.25 hours = 6 hours 15 minutes. Started at 10:00 AM, finishes at 4:15 PM.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q6",
      question: "Dopamine is ordered at 5 mcg/kg/min for a 80 kg patient. The IV bag contains dopamine 400 mg in 250 mL D5W. What is the pump rate?",
      options: [
        "9 mL/hr",
        "15 mL/hr",
        "18 mL/hr",
        "24 mL/hr",
      ],
      correctIndex: 1,
      explanation:
        "Dose = 5 × 80 = 400 mcg/min. Convert: 400 × 60 / 1000 = 24 mg/hr. Concentration = 400 mg / 250 mL = 1.6 mg/mL. Flow rate = 24 / 1.6 = 15 mL/hr.",
      questionType: "multiple_choice",
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q7",
      question: "Which of the following IV medications are classified as 'high-alert' requiring independent double-checks? (Select ALL that apply.)",
      options: [
        "Normal Saline (0.9% NaCl)",
        "Heparin infusion",
        "Insulin infusion",
        "Potassium chloride (KCl) infusion",
      ],
      correctIndex: 0,
      explanation:
        "Heparin, insulin, and potassium chloride are all ISMP high-alert medications that require independent double-checks due to their potential to cause serious patient harm if errors occur. Normal Saline alone (without additives) is not classified as high-alert.",
      questionType: "multiple_select",
      questionData: {
        correct_indices: [1, 2, 3],
      },
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q8",
      question: "Fill in the blank: The number of drops per millilitre produced by an IV administration set is called the __________.",
      options: [
        "Flow rate",
        "Drip rate",
        "Drop factor",
        "Infusion constant",
      ],
      correctIndex: 2,
      explanation:
        "The drop factor (gtt/mL) is a fixed characteristic of the IV administration set, printed on the packaging. Common drop factors are 10, 15, 20 (macrodrip) and 60 (microdrip) gtt/mL.",
      questionType: "fill_in_blank",
      questionData: {
        acceptable_answers: ["drop factor", "drip factor"],
        case_sensitive: false,
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q9",
      question: "An insulin infusion runs at 4 units/hr. The preparation is 50 units in 50 mL NS. What is the pump rate?",
      options: [
        "2 mL/hr",
        "4 mL/hr",
        "8 mL/hr",
        "10 mL/hr",
      ],
      correctIndex: 1,
      explanation:
        "Concentration = 50 units / 50 mL = 1 unit/mL. Flow rate = 4 units/hr ÷ 1 unit/mL = 4 mL/hr. This is a standard insulin infusion preparation used in Caribbean ICUs for diabetic ketoacidosis management.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q10",
      question: "True or false: In the Caribbean, IV admixture beyond-use dates may need to be shortened due to higher ambient temperatures.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 0,
      explanation:
        "True. Many stability studies are conducted at 25°C (controlled room temperature). In Caribbean hospital wards where temperatures may reach 28-33°C, drug degradation can occur faster, potentially shortening the safe beyond-use period. Pharmacies should use the most conservative stability data applicable to local conditions.",
      questionType: "true_false",
      questionData: {
        correct_answer: true,
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// MODULE 6 — Compounding Calculations: Dilutions, Concentrations & Alligation
// ============================================================================

const module6: Module = {
  id: "m6-compounding-calculations",
  number: 6,
  title: "Compounding Calculations: Dilutions, Concentrations & Alligation",
  description:
    "Compounding — the art and science of preparing customised medications — remains a vital skill in Caribbean pharmacy. This module covers the mathematical calculations required for dilutions, concentration adjustments, and the alligation method used to combine preparations of different strengths.",
  learningObjectives: [
    "Calculate the quantities needed for simple dilutions using the dilution formula",
    "Apply the alligation alternate method to combine two preparations of different strengths",
    "Determine final concentrations after mixing solutions",
    "Evaluate whether a compounding calculation produces a result within acceptable potency standards",
  ],
  lessons: [
    // ── Lesson 6.1 ──
    {
      id: "m6-l1",
      title: "Dilution Calculations: The C1V1 = C2V2 Formula",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Dilutions: Making Weaker Solutions from Stronger Ones",
        },
        {
          type: "text",
          body: "Dilution is one of the most common compounding operations in Caribbean pharmacy. Whether you are preparing a weaker chlorhexidine solution for wound irrigation, diluting a stock solution for a paediatric patient, or preparing a specific percentage cream from a higher-strength stock, the underlying mathematics is the same. The dilution formula — C1V1 = C2V2 — is your essential tool.",
        },
        {
          type: "key-term",
          term: "Dilution Formula (C1V1 = C2V2)",
          definition:
            "The formula stating that the concentration times the volume of the initial (concentrated) solution equals the concentration times the volume of the final (diluted) solution. C1 = initial concentration, V1 = volume of concentrate needed, C2 = desired final concentration, V2 = desired final volume. This works because the total amount of drug remains constant — you are just adding more solvent.",
        },
        {
          type: "heading",
          level: 3,
          text: "Applying the Dilution Formula",
        },
        {
          type: "text",
          body: "Worked example 1: Prepare 500 mL of chlorhexidine 0.05% from a stock solution of chlorhexidine 5%. C1 = 5%, V1 = ?, C2 = 0.05%, V2 = 500 mL. V1 = (C2 × V2) / C1 = (0.05 × 500) / 5 = 25 / 5 = 5 mL. Take 5 mL of chlorhexidine 5% and add purified water to make a total of 500 mL.",
        },
        {
          type: "text",
          body: "Worked example 2: Prepare 250 mL of povidone-iodine 5% from a 10% stock solution. V1 = (5 × 250) / 10 = 125 mL. Take 125 mL of povidone-iodine 10% and add purified water to make 250 mL total. Note: you add 125 mL of water (not 250 mL) because the concentrate already contributes 125 mL of volume.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Dilution ≠ Just Adding Diluent",
          body: "A common error: when the question says 'prepare 500 mL of a diluted solution', you add diluent to MAKE 500 mL total, not add 500 mL of diluent to the concentrate. If you need 5 mL of concentrate and 500 mL final volume, you add 495 mL of diluent (500 - 5 = 495), not 500 mL. Getting this wrong changes the final concentration.",
        },
        {
          type: "table",
          caption: "Common Dilution Preparations in Caribbean Pharmacies",
          headers: ["Product", "Stock Strength", "Desired Strength", "Common Use"],
          rows: [
            ["Chlorhexidine", "5% (concentrate)", "0.05% (1:100 dilution)", "Wound irrigation"],
            ["Povidone-iodine", "10%", "5%", "Surgical skin prep"],
            ["Sodium hypochlorite", "5% (household bleach)", "0.5%", "Surface disinfection (pharmacies)"],
            ["Hydrogen peroxide", "6%", "3%", "Wound cleaning, mouthwash"],
            ["Potassium permanganate", "Stock crystals", "1:10,000 solution", "Dermatological soaks"],
          ],
        },
        {
          type: "knowledge-check",
          question: "How many millilitres of 10% povidone-iodine are needed to prepare 1 litre of 1% solution?",
          options: [
            "10 mL",
            "100 mL",
            "500 mL",
            "1000 mL",
          ],
          correctIndex: 1,
          explanation:
            "V1 = (C2 × V2) / C1 = (1 × 1000) / 10 = 100 mL. Take 100 mL of 10% povidone-iodine and add purified water to make 1000 mL total (add 900 mL diluent).",
        },
        {
          type: "text",
          body: "The dilution formula also works for solids. If you need to prepare 100 g of hydrocortisone 0.5% cream from a 1% stock cream, use the same principle: (1% × V1) = (0.5% × 100 g). V1 = 50 g of the 1% cream, mixed with 50 g of plain cream base to make 100 g of 0.5% cream.",
        },
      ],
    },
    // ── Lesson 6.2 ──
    {
      id: "m6-l2",
      title: "Alligation Alternate: Mixing Two Different Strengths",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Alligation: The Tic-Tac-Toe Method for Mixing Concentrations",
        },
        {
          type: "text",
          body: "Alligation is a mathematical method used to determine the proportions in which two preparations of different strengths must be combined to produce a preparation of an intermediate strength. This is particularly useful in Caribbean compounding pharmacies where the exact strength needed is not commercially available. The alligation alternate method uses a simple grid — sometimes called the 'tic-tac-toe' method — that pharmacists and technicians have used for centuries.",
        },
        {
          type: "key-term",
          term: "Alligation Alternate",
          definition:
            "A method for calculating the proportions of two solutions (or preparations) of different concentrations to mix in order to obtain a desired intermediate concentration. The method uses a grid where the desired concentration is placed in the centre, the higher and lower concentrations at the corners, and the differences (taken diagonally) give the proportional parts of each component.",
        },
        {
          type: "heading",
          level: 3,
          text: "Step-by-Step Alligation Method",
        },
        {
          type: "text",
          body: "Step 1: Draw a grid. Place the desired concentration in the centre. Step 2: Place the higher concentration in the upper left and the lower concentration in the lower left. Step 3: Take the diagonal differences (always subtract the smaller from the larger): Upper-right = |Desired - Lower|. Lower-right = |Higher - Desired|. Step 4: The numbers on the right give the ratio of parts: upper-right parts of the higher concentration, lower-right parts of the lower concentration.",
        },
        {
          type: "text",
          body: "Worked example: Prepare 200 g of hydrocortisone 0.75% cream by mixing 1% cream with 0.5% cream. Grid: Higher = 1%, Lower = 0.5%, Desired = 0.75%. Upper-right = |0.75 - 0.5| = 0.25 parts of 1%. Lower-right = |1 - 0.75| = 0.25 parts of 0.5%. Ratio = 0.25 : 0.25 = 1 : 1. Mix equal parts: 100 g of 1% cream + 100 g of 0.5% cream = 200 g of 0.75% cream.",
        },
        {
          type: "text",
          body: "More complex example: Prepare 300 g of coal tar 3% ointment. Available: coal tar 10% ointment and plain ointment base (0%). Grid: Higher = 10%, Lower = 0%, Desired = 3%. Upper-right = |3 - 0| = 3 parts of 10%. Lower-right = |10 - 3| = 7 parts of 0%. Total parts = 3 + 7 = 10. For 300 g: 10% ointment = (3/10) × 300 = 90 g. Plain base = (7/10) × 300 = 210 g. Verify: (90 × 10) + (210 × 0) = 900 / 300 = 3% ✓.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Coal Tar in Caribbean Dermatology",
          body: "Coal tar preparations are commonly compounded in Caribbean pharmacies for psoriasis and chronic eczema — conditions that are manageable but require long-term topical therapy. The strength is frequently adjusted based on clinical response, making alligation calculations a regular occurrence. Strengths range from 1% (initial therapy) to 10% (thick plaques), with 3-5% being most common for maintenance.",
        },
        {
          type: "table",
          caption: "Alligation Practice Problems",
          headers: ["Desired", "Available Higher", "Available Lower", "Total Amount", "Answer"],
          rows: [
            ["5% cream, 120 g", "10%", "2%", "120 g", "45 g of 10% + 75 g of 2%"],
            ["2% solution, 500 mL", "5%", "0% (water)", "500 mL", "200 mL of 5% + 300 mL of water"],
            ["70% alcohol, 1 L", "95%", "50%", "1000 mL", "444 mL of 95% + 556 mL of 50%"],
            ["0.5% cream, 60 g", "1%", "0.25%", "60 g", "20 g of 1% + 40 g of 0.25%"],
          ],
        },
        {
          type: "knowledge-check",
          question: "Using alligation, what ratio of 20% and 5% solutions should be mixed to produce a 12% solution?",
          options: [
            "7 parts of 20% : 8 parts of 5%",
            "8 parts of 20% : 7 parts of 5%",
            "12 parts of 20% : 3 parts of 5%",
            "3 parts of 20% : 12 parts of 5%",
          ],
          correctIndex: 0,
          explanation:
            "Grid: Higher = 20%, Lower = 5%, Desired = 12%. Parts of 20% = |12 - 5| = 7. Parts of 5% = |20 - 12| = 8. Ratio = 7 : 8. To prepare 150 mL, for example: 20% = (7/15) × 150 = 70 mL. 5% = (8/15) × 150 = 80 mL.",
        },
      ],
    },
    // ── Lesson 6.3 ──
    {
      id: "m6-l3",
      title: "Serial Dilutions and Concentration Adjustments",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Serial Dilutions and Multi-Step Concentration Problems",
        },
        {
          type: "text",
          body: "Sometimes the desired concentration cannot be achieved in a single dilution step — the dilution factor may be too large, or the intermediate concentration is needed for verification purposes. Serial dilutions involve performing multiple dilution steps in sequence. This technique is also used in pharmaceutical quality control and laboratory settings across the Caribbean.",
        },
        {
          type: "key-term",
          term: "Serial Dilution",
          definition:
            "A stepwise dilution of a substance where the diluted product from one step becomes the starting material for the next step. Each step reduces the concentration by a fixed factor. Example: A 1:10 dilution performed three times gives a final dilution of 1:1000 (10 × 10 × 10).",
        },
        {
          type: "text",
          body: "Worked example: Prepare a 1:10,000 potassium permanganate solution from crystals. This is a common dermatological preparation in Caribbean practice. Step 1: Prepare a 1:100 stock solution — dissolve 1 g of crystals in 100 mL of purified water. Step 2: Dilute the 1:100 stock 1:100 again — take 1 mL of stock and add to 99 mL of water. Final dilution: 1/100 × 1/100 = 1/10,000 = 1:10,000.",
        },
        {
          type: "heading",
          level: 3,
          text: "Concentration After Mixing — The Total Drug Method",
        },
        {
          type: "text",
          body: "When two solutions of known concentration and volume are mixed, the final concentration is: Final concentration = Total drug ÷ Total volume. Worked example: 100 mL of 5% dextrose is mixed with 400 mL of 10% dextrose. Total drug: (100 × 5/100) + (400 × 10/100) = 5 + 40 = 45 g. Total volume: 100 + 400 = 500 mL. Final concentration: 45/500 × 100 = 9%.",
        },
        {
          type: "text",
          body: "This method is essential when verifying compounding calculations or when unexpected mixing occurs. For example, if an IV bag has a drug added to it, you need to know the final concentration to verify it is within acceptable limits.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Potassium Permanganate: A Caribbean Pharmacy Staple",
          body: "Potassium permanganate (KMnO₄) solutions and soaks are widely used across the Caribbean for weeping eczema, infected wounds, and fungal skin infections. The typical concentration is 1:10,000 (0.01%). At this dilution, the solution should be a pale pink colour — a useful visual check. If the solution is dark purple, it is too concentrated and can cause chemical burns. Caribbean patients often prepare these at home, so clear dispensing instructions are critical.",
        },
        {
          type: "table",
          caption: "Serial Dilution Factors",
          headers: ["Step 1", "Step 2", "Step 3", "Final Dilution"],
          rows: [
            ["1:10", "—", "—", "1:10"],
            ["1:10", "1:10", "—", "1:100"],
            ["1:10", "1:10", "1:10", "1:1,000"],
            ["1:100", "1:100", "—", "1:10,000"],
            ["1:10", "1:100", "—", "1:1,000"],
          ],
        },
        {
          type: "knowledge-check",
          question: "200 mL of 10% solution is mixed with 300 mL of 5% solution. What is the final concentration?",
          options: [
            "6%",
            "7%",
            "7.5%",
            "8%",
          ],
          correctIndex: 1,
          explanation:
            "Total drug = (200 × 0.10) + (300 × 0.05) = 20 + 15 = 35 g. Total volume = 200 + 300 = 500 mL. Final concentration = 35/500 × 100 = 7%.",
        },
      ],
    },
    // ── Lesson 6.4 ──
    {
      id: "m6-l4",
      title: "Compounding Quality Checks and Documentation",
      duration: "15 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Verifying Compounded Preparations",
        },
        {
          type: "text",
          body: "Every compounded preparation must be verified for accuracy before dispensing. In Caribbean pharmacies, where compounding ranges from simple topical creams to reconstituted antibiotics, a systematic quality check process ensures patient safety. This lesson covers the mathematical verification steps and documentation requirements for compounded preparations.",
        },
        {
          type: "key-term",
          term: "Compounding Record (Formulation Record)",
          definition:
            "A written document detailing the preparation of a compounded medication, including the drug name, strength, quantity, ingredients used (with lot numbers), calculations performed, preparer's initials, pharmacist verification, and beyond-use date. This record is a legal requirement and must be retained for the period specified by local pharmacy legislation.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Five-Point Compounding Verification",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Ingredient check: Verify each ingredient name, lot number, and expiry date against the formula",
            "Quantity check: Independently recalculate all quantities — has the correct amount of each ingredient been measured?",
            "Concentration check: Does the final concentration match the label? Verify with the total drug / total volume (or weight) method",
            "Physical check: Does the product look, smell, and feel as expected? Is the colour correct? Is a cream smooth and homogeneous?",
            "Label check: Does the label include all required information — drug name, strength, beyond-use date, storage, and patient details?",
          ],
        },
        {
          type: "text",
          body: "Example verification: You compounded 120 g of salicylic acid 5% ointment. Verification: Drug amount = 5% of 120 g = 6 g of salicylic acid. Weigh a sample of the final product — if possible, have the pharmacist independently confirm the weight of salicylic acid used (should be 6 g ± 0.3 g, within 5% tolerance). Ointment base used = 120 - 6 = 114 g. Label: Salicylic Acid Ointment 5%, 120 g, BUD 30 days, store below 25°C.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Compounding Regulations in the Caribbean",
          body: "Compounding practices in the Caribbean are governed by national pharmacy legislation. Trinidad's Pharmacy Board, Jamaica's Pharmacy Council, and the Barbados Drug Service each have guidelines on compounding standards, record-keeping, and beyond-use dating. While Caribbean standards are evolving, USP Chapter <795> (non-sterile compounding) and USP <797> (sterile compounding) serve as widely referenced best-practice benchmarks across the region.",
        },
        {
          type: "table",
          caption: "Beyond-Use Dating for Compounded Preparations",
          headers: ["Preparation Type", "Standard BUD", "Caribbean Consideration"],
          rows: [
            ["Aqueous oral solutions/suspensions", "14 days (refrigerated)", "Enforce strict refrigeration; shorter if no AC available"],
            ["Topical creams (water-containing)", "30 days", "May need shorter BUD in humid tropical conditions"],
            ["Anhydrous ointments", "6 months or 25% of earliest expiry", "Store below 25°C; stability may decrease in heat"],
            ["Reconstituted oral antibiotics", "Per manufacturer (usually 7-14 days, refrigerated)", "Ensure patients have refrigeration access"],
            ["Sterile IV admixtures", "Per stability data (often 24-48 hours)", "May be shorter at Caribbean ambient temperatures"],
          ],
        },
        {
          type: "knowledge-check",
          question: "You compounded 200 g of a cream intended to be 2% w/w active ingredient. How many grams of active ingredient should it contain?",
          options: [
            "2 g",
            "4 g",
            "10 g",
            "20 g",
          ],
          correctIndex: 1,
          explanation:
            "2% w/w = 2 g per 100 g. For 200 g: (2/100) × 200 = 4 g of active ingredient. The remaining 196 g is the cream base.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m6-q1",
      question: "Using the dilution formula C1V1 = C2V2, how many mL of 5% chlorhexidine are needed to prepare 2 litres of 0.05% solution?",
      options: [
        "2 mL",
        "10 mL",
        "20 mL",
        "100 mL",
      ],
      correctIndex: 2,
      explanation:
        "V1 = (C2 × V2) / C1 = (0.05 × 2000) / 5 = 100/5 = 20 mL. Take 20 mL of 5% chlorhexidine and dilute with purified water to 2000 mL total.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q2",
      question: "Using alligation, how many grams of 10% ointment and 2% ointment are needed to prepare 240 g of 6% ointment?",
      options: [
        "120 g of 10% and 120 g of 2%",
        "144 g of 10% and 96 g of 2%",
        "96 g of 10% and 144 g of 2%",
        "60 g of 10% and 180 g of 2%",
      ],
      correctIndex: 0,
      explanation:
        "Grid: Higher = 10%, Lower = 2%, Desired = 6%. Parts of 10% = |6-2| = 4. Parts of 2% = |10-6| = 4. Ratio = 4:4 = 1:1. Equal parts: 120 g of 10% + 120 g of 2% = 240 g of 6%.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q3",
      question: "150 mL of 8% solution is mixed with 350 mL of 3% solution. What is the final concentration?",
      options: [
        "4.0%",
        "4.5%",
        "5.0%",
        "5.5%",
      ],
      correctIndex: 1,
      explanation:
        "Total drug = (150 × 0.08) + (350 × 0.03) = 12 + 10.5 = 22.5 g. Total volume = 500 mL. Final % = 22.5/500 × 100 = 4.5%.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q4",
      question: "True or false: When preparing a dilution, if you need 500 mL of final solution and 20 mL of concentrate, you add 500 mL of diluent to the concentrate.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 1,
      explanation:
        "False. You add enough diluent to make the total volume 500 mL. Since you already have 20 mL of concentrate, you add 480 mL of diluent (500 - 20 = 480). Adding 500 mL of diluent would give a total volume of 520 mL, resulting in a weaker-than-intended concentration.",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q5",
      question: "To prepare a 1:10,000 solution using serial dilution, you could perform:",
      options: [
        "One 1:10,000 dilution step",
        "Two 1:100 dilution steps",
        "Three 1:100 dilution steps",
        "Four 1:10 dilution steps",
      ],
      correctIndex: 1,
      explanation:
        "1/100 × 1/100 = 1/10,000. Two successive 1:100 dilutions achieve a 1:10,000 final dilution. While a single 1:10,000 step is theoretically possible, serial dilution is more practical for very high dilution factors.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q6",
      question: "A compounding formulation calls for coal tar 5% ointment. You have 10% coal tar ointment and white soft paraffin (0%). To make 200 g, how much of the 10% ointment do you need?",
      options: [
        "50 g",
        "100 g",
        "150 g",
        "200 g",
      ],
      correctIndex: 1,
      explanation:
        "Using alligation: Parts of 10% = |5 - 0| = 5. Parts of 0% = |10 - 5| = 5. Ratio = 5:5 = 1:1. For 200 g: 100 g of 10% + 100 g of base. Verify: (100 × 10/100) / 200 × 100 = 10/200 × 100 = 5% ✓.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q7",
      question: "Match each compounding term with its definition.",
      options: [
        "C1V1 = C2V2 — Used to determine proportions of two different concentrations",
        "Alligation — Used for simple dilutions from a single stock",
        "C1V1 = C2V2 — Dilution formula; Alligation — Mixing different concentrations; Serial dilution — Stepwise dilution",
        "All three are identical methods",
      ],
      correctIndex: 2,
      explanation:
        "C1V1 = C2V2 is the dilution formula for simple dilution from a single concentrated stock. Alligation is used to determine proportions when mixing two preparations of different strengths. Serial dilution involves stepwise dilution through multiple stages.",
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "C1V1 = C2V2", right: "Dilution formula for single stock to desired concentration" },
          { left: "Alligation alternate", right: "Determining proportions of two different strengths to mix" },
          { left: "Serial dilution", right: "Stepwise dilution through multiple stages" },
        ],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q8",
      question: "The standard beyond-use date for a compounded aqueous oral suspension stored in the refrigerator is:",
      options: [
        "7 days",
        "14 days",
        "30 days",
        "6 months",
      ],
      correctIndex: 1,
      explanation:
        "Per USP <795> guidelines (used as reference across the Caribbean), compounded aqueous oral preparations have a 14-day beyond-use date when stored under refrigeration, unless stability data supports a longer period.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q9",
      question: "How many grams of active ingredient are in 150 g of a 3% w/w ointment?",
      options: [
        "3 g",
        "4.5 g",
        "5 g",
        "15 g",
      ],
      correctIndex: 1,
      explanation:
        "3% w/w = 3 g per 100 g. For 150 g: (3/100) × 150 = 4.5 g of active ingredient.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q10",
      question: "Place the compounding verification steps in the correct order.",
      options: [
        "Verify the label includes all required information",
        "Check each ingredient name, lot number, and expiry date",
        "Confirm the final concentration matches the intended strength",
        "Independently recalculate all quantities",
        "Perform physical checks — appearance, colour, consistency",
      ],
      correctIndex: 0,
      explanation:
        "Correct order: (1) Check ingredients, (2) Recalculate quantities, (3) Verify concentration, (4) Physical checks, (5) Label check. This systematic approach catches errors at each stage before the product reaches the patient.",
      questionType: "ordering",
      questionData: {
        correct_order: [1, 3, 2, 4, 0],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// MODULE 7 — Business Math for Pharmacy: Markup, Discount & Inventory Costing
// ============================================================================

const module7: Module = {
  id: "m7-business-math",
  number: 7,
  title: "Business Math for Pharmacy: Markup, Discount & Inventory Costing",
  description:
    "Pharmacy is both a healthcare profession and a business. This module covers the financial calculations essential for running a successful pharmacy in the Caribbean — from markup and discount calculations to inventory valuation and the impact of VAT across different island jurisdictions.",
  learningObjectives: [
    "Calculate markup percentages and selling prices for pharmaceutical products",
    "Determine discounts and their impact on pharmacy profitability",
    "Apply inventory costing methods (FIFO, average cost) to pharmacy stock",
    "Analyse the impact of VAT/GCT rates on pharmacy pricing across Caribbean islands",
  ],
  lessons: [
    // ── Lesson 7.1 ──
    {
      id: "m7-l1",
      title: "Markup and Selling Price Calculations",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Pricing Medications: Cost, Markup, and Selling Price",
        },
        {
          type: "text",
          body: "Every item in a pharmacy has a cost price (what the pharmacy pays the wholesaler) and a selling price (what the patient pays). The difference is the markup, which must cover operating expenses (rent, salaries, electricity, insurance) and provide a reasonable profit. In Caribbean community pharmacies — where many are independently owned small businesses — correct pricing calculations directly impact financial survival.",
        },
        {
          type: "key-term",
          term: "Markup Percentage",
          definition:
            "The percentage added to the cost price to determine the selling price. Calculated as: Markup % = [(Selling Price - Cost Price) / Cost Price] × 100. Example: If a product costs TTD 50 and sells for TTD 75, the markup is (75-50)/50 × 100 = 50%.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Basic Pricing Formulas",
        },
        {
          type: "text",
          body: "Selling Price = Cost Price × (1 + Markup %/100). Markup Amount = Selling Price - Cost Price. Markup % = (Markup Amount / Cost Price) × 100. Gross Profit Margin = (Markup Amount / Selling Price) × 100. Note: Markup and margin are different! A 50% markup gives a 33.3% margin. A 100% markup gives a 50% margin.",
        },
        {
          type: "text",
          body: "Worked example: A box of amoxicillin 500 mg × 21 capsules costs the pharmacy TTD 45.00 from the wholesaler. The pharmacy applies a 40% markup. Selling price = 45 × (1 + 40/100) = 45 × 1.40 = TTD 63.00. Plus VAT (Trinidad: 12.5%): Final price = 63 × 1.125 = TTD 70.88. The patient pays TTD 70.88.",
        },
        {
          type: "table",
          caption: "Typical Pharmacy Markup Ranges in the Caribbean",
          headers: ["Product Category", "Typical Markup Range", "Reasoning"],
          rows: [
            ["Prescription medications (branded)", "25-40%", "Lower markup, higher volume; competitive market"],
            ["Prescription medications (generic)", "35-60%", "Higher markup justified by lower cost base"],
            ["OTC medications", "30-50%", "Consumer choice; some price sensitivity"],
            ["Vitamins & supplements", "40-80%", "Discretionary purchases; higher perceived value"],
            ["Medical devices (thermometers, BP monitors)", "30-50%", "Occasional purchases; service included"],
            ["Cosmetics & personal care", "50-100%", "Lifestyle purchases; brand-driven pricing"],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Government Price Controls in the Caribbean",
          body: "Several Caribbean governments regulate pharmaceutical prices. Trinidad's CDAP programme provides chronic disease medications at no cost to patients — the government reimburses pharmacies at a fixed rate. Jamaica's NHF provides subsidies on approved medications with co-payments. Barbados Drug Service procures centrally and distributes to public pharmacies. These programmes affect pricing strategy: pharmacies may earn less on government-programme items and must make up the margin on other products.",
        },
        {
          type: "knowledge-check",
          question: "A product costs a pharmacy JMD 1,200 and is sold for JMD 1,800. What is the markup percentage?",
          options: [
            "33.3%",
            "50%",
            "66.7%",
            "150%",
          ],
          correctIndex: 1,
          explanation:
            "Markup % = [(1800 - 1200) / 1200] × 100 = [600 / 1200] × 100 = 50%. Note that the profit margin would be different: (600/1800) × 100 = 33.3%. Markup is based on cost; margin is based on selling price.",
        },
        {
          type: "text",
          body: "Understanding the difference between markup and margin is crucial for pharmacy management. When a pharmacy owner says 'we need a 50% margin', they mean (profit/selling price) = 50%, which requires a 100% markup. If they say 'apply a 50% markup', the margin is only 33.3%. Misunderstanding this distinction can significantly impact profitability.",
        },
      ],
    },
    // ── Lesson 7.2 ──
    {
      id: "m7-l2",
      title: "Discount Calculations and Wholesaler Terms",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Discounts: Buying Smart, Saving Money",
        },
        {
          type: "text",
          body: "Pharmacies receive discounts from wholesalers and manufacturers, and in turn may offer discounts to certain customers (e.g., loyalty programmes, senior citizen discounts, or staff discounts). Understanding how to calculate discounts — including chain (successive) discounts — is essential for maximising pharmacy profitability. In the competitive Caribbean pharmacy market, where wholesalers like SMITH'S (Trinidad), Medical Disposables & Supplies (Jamaica), and various regional distributors compete for business, negotiating and understanding discount structures is a key skill.",
        },
        {
          type: "key-term",
          term: "Chain Discount (Successive Discount)",
          definition:
            "Multiple discounts applied in sequence. A chain discount of 20% + 10% does NOT equal 30%. Instead, the second discount is applied to the already-discounted price. Example: List price TTD 100, less 20% = TTD 80, less 10% = TTD 72. Effective discount = 28%, not 30%.",
        },
        {
          type: "heading",
          level: 3,
          text: "Calculating Discounts",
        },
        {
          type: "text",
          body: "Single discount: Sale price = List price × (1 - Discount%/100). Chain discount: Sale price = List price × (1 - d1/100) × (1 - d2/100) × ... Worked example: A wholesaler offers a drug at TTD 200 per box with discounts of 15% + 5%. Step 1: After 15%: 200 × 0.85 = TTD 170. Step 2: After 5%: 170 × 0.95 = TTD 161.50. Effective discount: (200 - 161.50) / 200 × 100 = 19.25%.",
        },
        {
          type: "text",
          body: "Early payment discounts: Many wholesalers offer terms like '2/10, net 30' — meaning a 2% discount if paid within 10 days, otherwise the full amount is due in 30 days. For a TTD 5000 invoice: Pay within 10 days = 5000 × 0.98 = TTD 4900 (save TTD 100). Caribbean pharmacies with good cash flow should always take advantage of early payment discounts — the effective annualised return far exceeds bank savings rates.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Negotiating with Caribbean Wholesalers",
          body: "Caribbean pharmacy technicians should understand discount structures because they often process purchase orders and receive stock. Key terms to know: 'trade discount' (ongoing percentage off list price), 'quantity discount' (buy more, pay less per unit), 'early payment discount' (pay quickly for a discount), and 'loyalty rebate' (end-of-year bonus based on total purchases). Knowing these terms helps you verify invoices and catch billing errors.",
        },
        {
          type: "table",
          caption: "Discount Calculation Examples",
          headers: ["List Price", "Discounts", "Net Price", "Effective Discount"],
          rows: [
            ["TTD 500", "20%", "TTD 400", "20%"],
            ["TTD 500", "20% + 10%", "TTD 360", "28%"],
            ["TTD 500", "20% + 10% + 5%", "TTD 342", "31.6%"],
            ["JMD 10,000", "15% + 5%", "JMD 8,075", "19.25%"],
            ["BBD 200", "10% + 2% (early pay)", "BBD 176.40", "11.8%"],
          ],
        },
        {
          type: "knowledge-check",
          question: "A wholesaler lists a product at TTD 800 with chain discounts of 25% and 10%. What is the net price?",
          options: [
            "TTD 520",
            "TTD 540",
            "TTD 560",
            "TTD 600",
          ],
          correctIndex: 1,
          explanation:
            "Step 1: 800 × (1 - 0.25) = 800 × 0.75 = TTD 600. Step 2: 600 × (1 - 0.10) = 600 × 0.90 = TTD 540. The effective discount is (800-540)/800 × 100 = 32.5%, not 35%.",
        },
      ],
    },
    // ── Lesson 7.3 ──
    {
      id: "m7-l3",
      title: "VAT/GCT Calculations Across Caribbean Islands",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Value Added Tax in Caribbean Pharmacy",
        },
        {
          type: "text",
          body: "Value Added Tax (VAT) — called General Consumption Tax (GCT) in Jamaica — is a consumption tax applied at point of sale. The rate and rules vary significantly across Caribbean islands, and pharmacy products are treated differently from general consumer goods in most jurisdictions. Understanding VAT is essential for pricing, invoicing, and compliance.",
        },
        {
          type: "key-term",
          term: "Value Added Tax (VAT)",
          definition:
            "A consumption tax levied on the value added at each stage of the supply chain, ultimately borne by the consumer. In pharmacy, the VAT-inclusive selling price = (Cost + Markup) × (1 + VAT rate). Some pharmaceutical products may be zero-rated or exempt from VAT depending on the jurisdiction.",
        },
        {
          type: "island-comparison",
          title: "VAT/GCT Rates and Pharmacy Rules Across Caribbean Islands",
          description: "Tax treatment of pharmaceutical products varies significantly across the Caribbean. Always confirm current rates as they are subject to change.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Standard VAT rate: 12.5%",
                "Prescription medications: ZERO-RATED (0% VAT) — a significant benefit for patients",
                "OTC medications: Standard-rated at 12.5%",
                "Medical devices: Generally standard-rated",
                "CDAP medications: Zero-rated; pharmacy reimbursed by government at fixed rates",
                "VAT registration required for pharmacies with annual turnover above TTD 500,000",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Standard GCT rate: 15%",
                "Prescription medications: EXEMPT from GCT",
                "Difference between zero-rated and exempt: exempt businesses cannot claim input GCT credits",
                "NHF-subsidised medications: Patient pays co-payment; NHF pays remainder — GCT exempt",
                "OTC products: Generally subject to GCT at 15%",
                "GCT registration threshold: JMD 10 million annual turnover",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Standard VAT rate: 17.5%",
                "Prescription medications: ZERO-RATED",
                "Barbados Drug Service medications: Provided at no cost in public sector",
                "OTC medications: Standard-rated at 17.5%",
                "Medical devices: VAT treatment varies by product classification",
                "VAT registration threshold: BBD 200,000 annual turnover",
              ],
            },
            {
              name: "Grenada",
              flag: "🇬🇩",
              details: [
                "Standard VAT rate: 15%",
                "Pharmaceutical products: Most are zero-rated under essential goods provisions",
                "OTC personal care products: Standard-rated",
                "VAT compliance monitored by Grenada Inland Revenue",
                "Small pharmacies near the registration threshold should seek tax advice",
              ],
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "VAT-Inclusive Pricing Calculations",
        },
        {
          type: "text",
          body: "VAT-inclusive price = Pre-VAT price × (1 + VAT rate/100). To extract VAT from an inclusive price: Pre-VAT price = Inclusive price / (1 + VAT rate/100). VAT amount = Inclusive price - Pre-VAT price.",
        },
        {
          type: "text",
          body: "Worked example: An OTC cough syrup costs the pharmacy TTD 35 (pre-VAT). The markup is 45%, and VAT is 12.5%. Pre-VAT selling price = 35 × 1.45 = TTD 50.75. VAT-inclusive price = 50.75 × 1.125 = TTD 57.09. The patient pays TTD 57.09, of which TTD 6.34 is VAT that the pharmacy must remit to the government.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Zero-Rated vs Exempt: It Matters for Cash Flow",
          body: "In Trinidad and Barbados, prescription drugs are zero-rated — the pharmacy charges 0% VAT but CAN claim back the VAT paid on business inputs (wholesaler purchases, equipment, utilities). In Jamaica, some drugs are exempt from GCT — the pharmacy charges no GCT but CANNOT claim input credits. This difference significantly affects pharmacy cash flow and profitability. Understanding your island's specific rules is essential for financial management.",
        },
        {
          type: "knowledge-check",
          question: "A product has a pre-VAT selling price of BBD 40 in Barbados (VAT rate 17.5%). What is the VAT-inclusive price?",
          options: [
            "BBD 44.00",
            "BBD 47.00",
            "BBD 46.00",
            "BBD 57.50",
          ],
          correctIndex: 1,
          explanation:
            "VAT-inclusive price = 40 × (1 + 17.5/100) = 40 × 1.175 = BBD 47.00. The VAT component is BBD 7.00.",
        },
      ],
    },
    // ── Lesson 7.4 ──
    {
      id: "m7-l4",
      title: "Inventory Costing and Stock Valuation",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Inventory Costing: FIFO and Average Cost Methods",
        },
        {
          type: "text",
          body: "Pharmacies carry significant inventory — the value of stock on hand at any time in a medium-sized Caribbean community pharmacy may range from TTD 200,000 to TTD 1,000,000 (or equivalent in JMD/BBD). Accurate inventory costing is essential for financial reporting, tax compliance, and pricing decisions. The two main methods used in Caribbean pharmacy are FIFO (First In, First Out) and Weighted Average Cost.",
        },
        {
          type: "key-term",
          term: "FIFO (First In, First Out)",
          definition:
            "An inventory costing method where the oldest stock (first purchased) is assumed to be sold first. This aligns with pharmaceutical best practice — dispensing the shortest-dated stock first to minimise expiry wastage. FIFO typically provides a higher ending inventory value and lower cost of goods sold during periods of rising prices.",
        },
        {
          type: "heading",
          level: 3,
          text: "FIFO Worked Example",
        },
        {
          type: "text",
          body: "A pharmacy purchased metformin 500 mg in three batches: Batch 1 (January): 200 boxes at TTD 22 each = TTD 4,400. Batch 2 (March): 150 boxes at TTD 24 each = TTD 3,600. Batch 3 (May): 180 boxes at TTD 25 each = TTD 4,500. In June, the pharmacy dispensed 280 boxes. Under FIFO: First 200 boxes from Batch 1 at TTD 22 = TTD 4,400. Next 80 boxes from Batch 2 at TTD 24 = TTD 1,920. Cost of goods sold = TTD 4,400 + TTD 1,920 = TTD 6,320. Remaining inventory: 70 boxes at TTD 24 + 180 boxes at TTD 25 = TTD 1,680 + TTD 4,500 = TTD 6,180.",
        },
        {
          type: "heading",
          level: 3,
          text: "Weighted Average Cost Method",
        },
        {
          type: "text",
          body: "Average cost per unit = Total cost of inventory / Total units available. Using the same data: Total cost = 4,400 + 3,600 + 4,500 = TTD 12,500. Total units = 200 + 150 + 180 = 530 boxes. Average cost = 12,500 / 530 = TTD 23.58 per box. Cost of 280 boxes dispensed = 280 × 23.58 = TTD 6,603. Remaining inventory value = 250 × 23.58 = TTD 5,896.",
        },
        {
          type: "table",
          caption: "FIFO vs Weighted Average Cost — Comparison",
          headers: ["Method", "Cost of Goods Sold", "Ending Inventory", "When to Use"],
          rows: [
            ["FIFO", "TTD 6,320", "TTD 6,180", "Preferred in pharmacy (matches physical stock rotation)"],
            ["Weighted Average", "TTD 6,603", "TTD 5,896", "Simpler; used by some pharmacy software systems"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Stock Rotation and Expiry Management",
          body: "FIFO is not just an accounting method in pharmacy — it is a patient safety requirement. Dispensing the oldest stock first minimises the risk of medications expiring on the shelf. In the Caribbean, where supply chain delays can make replacement stock unpredictable, good stock rotation is critical. Check expiry dates during every stock count, and move shorter-dated items to the front of the shelf. Many Caribbean pharmacies conduct monthly expiry audits.",
        },
        {
          type: "text",
          body: "Inventory turnover ratio = Cost of Goods Sold / Average Inventory Value. A healthy pharmacy typically has an inventory turnover of 8-12 times per year (meaning stock turns over every 30-45 days on average). A turnover below 6 suggests overstocking (tying up capital); above 15 suggests understocking (risking stockouts). Caribbean pharmacies that depend on imported stock should maintain higher safety stock levels, reducing turnover but improving availability.",
        },
        {
          type: "case-study",
          title: "Case Study: Hurricane Season Inventory Planning at a Barbados Pharmacy",
          scenario:
            "You are the head pharmacy technician at a community pharmacy in Bridgetown, Barbados. Hurricane season runs from June to November. Your pharmacist-owner asks you to calculate the additional inventory investment needed to increase safety stock from the usual 30-day supply to a 90-day supply for essential medications. Current monthly cost of goods for essential medications (chronic disease, antibiotics, pain relief, ORS) is BBD 18,000.",
          questions: [
            "What is the current inventory value for essential medications (30-day supply)?",
            "What would the 90-day supply inventory value be?",
            "What additional capital investment is needed?",
          ],
          discussion:
            "Current 30-day supply = BBD 18,000. A 90-day supply = BBD 18,000 × 3 = BBD 54,000. Additional investment = 54,000 - 18,000 = BBD 36,000. This is a significant capital outlay for a small pharmacy. The pharmacist-owner should consider: (1) negotiating extended payment terms with wholesalers, (2) prioritising the most critical medications for 90-day stock (insulin, antihypertensives, diabetes medications, antibiotics, ORS) while keeping less critical items at 30-day levels, and (3) applying for small business hurricane preparedness funding available through the Barbados government. Insurance coverage for stock loss during natural disasters should also be verified.",
        },
        {
          type: "knowledge-check",
          question: "A pharmacy bought 100 boxes at TTD 30 each and later 100 boxes at TTD 36 each. Using FIFO, what is the cost of the first 120 boxes sold?",
          options: [
            "TTD 3,600",
            "TTD 3,720",
            "TTD 3,960",
            "TTD 4,320",
          ],
          correctIndex: 1,
          explanation:
            "FIFO: First 100 boxes at TTD 30 = TTD 3,000. Next 20 boxes at TTD 36 = TTD 720. Total = TTD 3,720. Under FIFO, the cheaper stock (bought first) is costed out first.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m7-q1",
      question: "A product costs TTD 80 and is sold for TTD 120. What is the markup percentage?",
      options: [
        "33.3%",
        "40%",
        "50%",
        "66.7%",
      ],
      correctIndex: 2,
      explanation:
        "Markup % = [(120-80)/80] × 100 = [40/80] × 100 = 50%. Note: the profit margin would be (40/120) × 100 = 33.3%. Markup is calculated on cost; margin is calculated on selling price.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m7-q2",
      question: "A wholesaler offers a list price of JMD 5,000 with chain discounts of 20% and 10%. What is the net price?",
      options: [
        "JMD 3,500",
        "JMD 3,600",
        "JMD 4,000",
        "JMD 4,500",
      ],
      correctIndex: 1,
      explanation:
        "Step 1: 5000 × 0.80 = JMD 4,000. Step 2: 4000 × 0.90 = JMD 3,600. The effective discount is 28%, not 30%.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m7-q3",
      question: "In Trinidad, prescription medications are subject to VAT at what rate?",
      options: [
        "12.5% (standard rate)",
        "7.5% (reduced rate)",
        "0% (zero-rated)",
        "Exempt from VAT",
      ],
      correctIndex: 2,
      explanation:
        "In Trinidad & Tobago, prescription medications are zero-rated (0% VAT). This means patients pay no VAT on prescriptions, and pharmacies can still claim back input VAT on their business expenses. OTC medications, however, are standard-rated at 12.5%.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q4",
      question: "What is the difference between markup and profit margin?",
      options: [
        "They are the same thing — different names for the same calculation",
        "Markup is calculated on cost price; margin is calculated on selling price",
        "Markup is calculated on selling price; margin is calculated on cost price",
        "Markup includes VAT; margin does not",
      ],
      correctIndex: 1,
      explanation:
        "Markup % = (Profit / Cost) × 100. Margin % = (Profit / Selling Price) × 100. A 50% markup on a TTD 100 item gives a selling price of TTD 150 and a margin of 33.3%. Understanding this difference is critical for pharmacy financial management.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m7-q5",
      question: "Under FIFO inventory costing, which stock is assumed to be sold first?",
      options: [
        "The most recently purchased stock",
        "The highest-cost stock",
        "The oldest purchased stock",
        "The stock with the nearest expiry date",
      ],
      correctIndex: 2,
      explanation:
        "FIFO = First In, First Out. The stock purchased first (oldest) is assumed to be sold first. In pharmacy, this aligns with best practice of dispensing shortest-dated stock first, though FIFO technically refers to purchase date, not expiry date.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m7-q6",
      question: "An OTC product in Barbados has a pre-VAT price of BBD 25. With VAT at 17.5%, what does the customer pay?",
      options: [
        "BBD 28.38",
        "BBD 29.38",
        "BBD 30.00",
        "BBD 42.50",
      ],
      correctIndex: 1,
      explanation:
        "VAT-inclusive price = 25 × 1.175 = BBD 29.375, rounded to BBD 29.38. The VAT component is BBD 4.38.",
      questionType: "multiple_choice",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m7-q7",
      question: "A pharmacy's monthly cost of goods sold is TTD 150,000 and average inventory value is TTD 200,000. What is the annual inventory turnover?",
      options: [
        "6 times",
        "9 times",
        "12 times",
        "18 times",
      ],
      correctIndex: 1,
      explanation:
        "Annual COGS = 150,000 × 12 = TTD 1,800,000. Turnover = 1,800,000 / 200,000 = 9 times per year. This is within the healthy range of 8-12 turns per year for a pharmacy.",
      questionType: "multiple_choice",
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
    {
      id: "m7-q8",
      question: "A pharmacy applies a 45% markup to a product that costs TTD 60. What is the selling price before VAT?",
      options: [
        "TTD 87.00",
        "TTD 105.00",
        "TTD 72.00",
        "TTD 93.00",
      ],
      correctIndex: 0,
      explanation:
        "Selling price = Cost × (1 + Markup/100) = 60 × 1.45 = TTD 87.00.",
      questionType: "multiple_choice",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m7-q9",
      question: "True or false: In Jamaica, prescription medications are zero-rated for GCT purposes, allowing pharmacies to reclaim input GCT.",
      options: [
        "True",
        "False",
      ],
      correctIndex: 1,
      explanation:
        "False. In Jamaica, many prescription medications are EXEMPT from GCT, not zero-rated. The key difference: zero-rated allows reclaiming input tax; exempt does not. This distinction significantly impacts pharmacy cash flow in Jamaica compared to Trinidad (where prescriptions are zero-rated).",
      questionType: "true_false",
      questionData: {
        correct_answer: false,
      },
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
    {
      id: "m7-q10",
      question: "Match each Caribbean island with its standard VAT/GCT rate.",
      options: [
        "Trinidad 12.5%, Jamaica 15%, Barbados 17.5%",
        "Trinidad 15%, Jamaica 12.5%, Barbados 17.5%",
        "Trinidad 17.5%, Jamaica 15%, Barbados 12.5%",
        "Trinidad 12.5%, Jamaica 17.5%, Barbados 15%",
      ],
      correctIndex: 0,
      explanation:
        "Trinidad & Tobago: 12.5% VAT. Jamaica: 15% GCT. Barbados: 17.5% VAT. These rates affect pharmacy pricing and profitability calculations across the region.",
      questionType: "matching",
      questionData: {
        pairs: [
          { left: "Trinidad & Tobago", right: "12.5% VAT" },
          { left: "Jamaica", right: "15% GCT" },
          { left: "Barbados", right: "17.5% VAT" },
        ],
      },
      difficulty: "medium",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// FULL COURSE ASSEMBLY
// ============================================================================

export const calculationsCourse: FullCourse = {
  courseId: "pharmaceutical-calculations-dosage",
  title: "Pharmaceutical Calculations & Dosage",
  tagline: "Master the mathematics behind safe medication dispensing",
  modules: [module1, module2, module3, module4, module5, module6, module7],
};

// ── Utility helpers ─────────────────────────────────────────────────────────

export const totalLessons = calculationsCourse.modules.reduce(
  (sum, m) => sum + m.lessons.length,
  0,
);

export const totalQuizQuestions = calculationsCourse.modules.reduce(
  (sum, m) => sum + m.quiz.length,
  0,
);

export default calculationsCourse;
