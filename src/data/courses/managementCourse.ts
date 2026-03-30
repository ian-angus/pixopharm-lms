// ============================================================================
// PIXOPHARM LMS — Pharmacy Management & Leadership (A3)
// Full Course Content: 6 Modules, 20 Lessons, ~60 Quiz Questions
// Focus Islands: Trinidad & Tobago, Jamaica, Barbados
// ============================================================================

import type { Module, FullCourse } from '../types';

// ============================================================================
// MODULE 1 — Pharmacy Business Operations & Financial Management
// ============================================================================

const module1: Module = {
  id: "m1-business-operations",
  number: 1,
  title: "Pharmacy Business Operations & Financial Management",
  description:
    "Master the financial fundamentals that keep a Caribbean pharmacy viable. From pricing regulations and VAT regimes to insurance reimbursement schemes and inventory valuation, this module equips you with the business literacy every pharmacy supervisor needs.",
  learningObjectives: [
    "Analyse key financial statements and performance indicators used in pharmacy operations",
    "Calculate medication markups and margins within Caribbean regulatory constraints",
    "Compare VAT and insurance reimbursement frameworks across Trinidad & Tobago, Jamaica, and Barbados",
    "Apply inventory valuation methods (FIFO, weighted average) to pharmacy stock management",
    "Evaluate cash flow challenges unique to small island pharmacy businesses",
  ],
  lessons: [
    // ── Lesson 1.1 ──
    {
      id: "m1-l1",
      title: "Understanding Pharmacy Financial Statements",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Language of Pharmacy Business",
        },
        {
          type: "text",
          body: "A pharmacy is both a healthcare institution and a business. Without financial sustainability, even the most dedicated pharmacy team cannot serve patients. As a pharmacy supervisor or aspiring manager, you need to read and understand the core financial documents that reveal the health of your business — just as you read patient charts to assess clinical health.",
        },
        {
          type: "text",
          body: "In the Caribbean, pharmacy businesses face a unique set of financial pressures: import-dependent supply chains that expose you to currency fluctuations, government-regulated markup ceilings on essential medicines, insurance schemes with delayed reimbursement timelines, and the constant tension between serving your community's health needs and keeping the doors open. Financial literacy is not optional — it is a survival skill.",
        },
        {
          type: "key-term",
          term: "Income Statement (Profit & Loss)",
          definition:
            "A financial statement that summarises revenue, cost of goods sold (COGS), gross profit, operating expenses, and net profit over a specific period. For pharmacies, COGS represents the wholesale cost of medications purchased, and gross profit is the difference between what you sell medications for and what you paid for them.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Three Core Financial Statements",
        },
        {
          type: "table",
          caption: "Key Financial Statements for Pharmacy Operations",
          headers: ["Statement", "What It Shows", "Key Line Items", "How Often"],
          rows: [
            [
              "Income Statement (P&L)",
              "Profitability over a period",
              "Revenue, COGS, Gross Profit, Operating Expenses, Net Profit",
              "Monthly and annually",
            ],
            [
              "Balance Sheet",
              "Financial position at a point in time",
              "Assets (inventory, cash, receivables), Liabilities (payables, loans), Equity",
              "Quarterly and annually",
            ],
            [
              "Cash Flow Statement",
              "Where cash comes from and goes",
              "Operating cash flow, investing activities, financing activities",
              "Monthly (critical for pharmacies)",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Caribbean Cash Flow Reality",
          body: "In many Caribbean pharmacies, the cash flow statement is the most important document. Government insurance schemes like Trinidad's CDAP or Jamaica's NHF may take 30–90 days to reimburse, while your wholesaler expects payment in 14–30 days. This timing gap is the single biggest financial stress point for Caribbean pharmacy owners.",
        },
        {
          type: "text",
          body: "Pharmacy technicians moving into supervisory roles must understand that a pharmacy can be profitable on paper (positive net income) while simultaneously running out of cash. This happens when you have dispensed thousands of dollars of medication under government programmes but have not yet been reimbursed. Managing this gap — through credit terms with suppliers, maintaining cash reserves, and timely claim submissions — is a core management responsibility.",
        },
        {
          type: "heading",
          level: 3,
          text: "Key Performance Indicators (KPIs) for Pharmacy",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Gross Profit Margin: (Revenue - COGS) / Revenue x 100 — target 25-35% for Caribbean community pharmacies",
            "Net Profit Margin: Net Profit / Revenue x 100 — target 5-12% after all expenses",
            "Inventory Turnover: COGS / Average Inventory — how many times you sell and replace stock per year (target 8-12 turns)",
            "Days Sales Outstanding (DSO): Average time to collect insurance/government reimbursements",
            "Prescription Volume: Number of prescriptions dispensed per day/week/month",
            "Average Basket Value: Average spend per customer transaction",
          ],
        },
        {
          type: "knowledge-check",
          question: "A pharmacy has monthly revenue of $120,000 and COGS of $84,000. What is the gross profit margin?",
          options: [
            "25%",
            "30%",
            "35%",
            "70%",
          ],
          correctIndex: 1,
          explanation:
            "Gross Profit = $120,000 - $84,000 = $36,000. Gross Profit Margin = ($36,000 / $120,000) x 100 = 30%. This is within the healthy range for a Caribbean community pharmacy.",
        },
      ],
    },
    // ── Lesson 1.2 ──
    {
      id: "m1-l2",
      title: "Pricing, Markups & Caribbean Regulatory Frameworks",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "How Caribbean Pharmacies Price Medications",
        },
        {
          type: "text",
          body: "Unlike many other retail businesses, Caribbean pharmacies cannot simply set whatever price they wish. Governments across the region regulate medication pricing to varying degrees — from outright price controls on essential medicines to maximum markup percentages. Understanding these frameworks is essential because pricing errors can result in regulatory penalties, while underpricing threatens your pharmacy's viability.",
        },
        {
          type: "key-term",
          term: "Markup vs. Margin",
          definition:
            "Markup is the percentage added to the cost price to arrive at the selling price (calculated on cost). Margin is the profit expressed as a percentage of the selling price (calculated on revenue). A 50% markup equals a 33% margin. These terms are frequently confused, but the distinction matters for regulatory compliance — some Caribbean regulations specify markup ceilings, others specify margin ceilings.",
        },
        {
          type: "island-comparison",
          title: "Medication Pricing & Tax Regimes Across the Caribbean",
          description:
            "Pricing regulations, tax treatment of medicines, and reimbursement frameworks vary significantly by jurisdiction. Pharmacy managers must know the rules for their specific island.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "VAT rate: 12.5% — but most prescription medications and medical supplies are zero-rated or exempt",
                "The Chronic Disease Assistance Programme (CDAP) provides free medications for specified chronic conditions through participating pharmacies",
                "CDAP reimburses pharmacies at a fixed rate per item — the pharmacy cannot charge the patient any additional amount for CDAP-listed drugs",
                "Non-CDAP medications: pharmacies typically apply a 30-50% markup on wholesale cost, varying by product category",
                "The Chemistry, Food & Drugs Division regulates drug pricing indirectly through import approvals and formulary management",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "General Consumption Tax (GCT) rate: 15% — prescription medications are exempt from GCT",
                "The National Health Fund (NHF) subsidises medications for 17 specified chronic conditions through NHF cards",
                "NHF pays a fixed subsidy per item; the patient pays the co-payment (difference between the pharmacy's price and the NHF subsidy)",
                "Jamaica Drugs for the Elderly Programme (JADEP) provides additional coverage for persons over 60",
                "No formal government-mandated maximum markup, but the Fair Trading Commission monitors for price gouging, especially during emergencies",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "VAT rate: 17.5% — prescription drugs dispensed by a pharmacy are zero-rated",
                "The Barbados Drug Service (BDS) provides medications through public health facilities and the Drug Benefit Card programme",
                "The Barbados National Drug Formulary lists all medications approved for use in the public sector",
                "Private pharmacies set their own prices for non-BDS items, though the Fair Trading Commission Act provides oversight",
                "The Drug Service Division centrally procures medications for the public health system, achieving economies of scale",
              ],
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Calculating Markups and Margins",
        },
        {
          type: "text",
          body: "A pharmacy purchases metformin 500 mg (100 tablets) from a wholesaler at a cost of $45.00. The pharmacy applies a 40% markup. The selling price is: $45.00 x 1.40 = $63.00. The margin on this sale is: ($63.00 - $45.00) / $63.00 x 100 = 28.6%. Notice how a 40% markup translates to only a 28.6% margin — this is a critical distinction when evaluating profitability.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "CDAP & NHF Reimbursement Realities",
          body: "Government insurance reimbursement rates do not always cover the pharmacy's full cost plus a reasonable margin. Some CDAP and NHF reimbursement rates have not been updated in years, while wholesale costs have risen. Smart pharmacy managers track the actual margin on every government-programme item and negotiate with their wholesalers accordingly. Losing money on every government prescription is not sustainable.",
        },
        {
          type: "table",
          caption: "Markup vs. Margin Quick Reference",
          headers: ["Markup %", "Margin %", "Cost Price $100 → Selling Price"],
          rows: [
            ["25%", "20%", "$125.00"],
            ["33%", "25%", "$133.00"],
            ["40%", "28.6%", "$140.00"],
            ["50%", "33.3%", "$150.00"],
            ["100%", "50%", "$200.00"],
          ],
        },
        {
          type: "knowledge-check",
          question: "A pharmacy buys amoxicillin capsules at $32.00 per box and sells them at $44.80. What is the markup percentage?",
          options: [
            "28.6%",
            "33%",
            "40%",
            "44.8%",
          ],
          correctIndex: 2,
          explanation:
            "Markup = (Selling Price - Cost Price) / Cost Price x 100 = ($44.80 - $32.00) / $32.00 x 100 = $12.80 / $32.00 x 100 = 40%. The margin would be $12.80 / $44.80 x 100 = 28.6%.",
        },
        {
          type: "text",
          body: "Currency fluctuation adds another layer of complexity. Most Caribbean pharmacies import medications priced in US dollars, but sell in local currency. When the local currency weakens — as has happened periodically with the Jamaican dollar — the cost of imported medications rises but selling prices cannot always be adjusted immediately, especially for government-subsidised items. Hedging this risk through forward purchasing or maintaining US dollar accounts is a sophisticated but increasingly necessary management strategy.",
        },
      ],
    },
    // ── Lesson 1.3 ──
    {
      id: "m1-l3",
      title: "Inventory Valuation & Cost of Goods Sold",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Valuing Your Pharmacy's Largest Asset",
        },
        {
          type: "text",
          body: "Inventory is typically the single largest asset on a pharmacy's balance sheet — representing 40–60% of total assets in a typical Caribbean community pharmacy. How you value that inventory directly affects your reported profits, tax liability, and business valuation. There are two primary methods used in Caribbean pharmacy practice: FIFO and Weighted Average Cost.",
        },
        {
          type: "key-term",
          term: "FIFO (First In, First Out)",
          definition:
            "An inventory valuation method that assumes the oldest stock (first purchased) is sold first. The cost of goods sold reflects the older, typically lower prices, while ending inventory reflects the newer, typically higher prices. FIFO is the most common method in Caribbean pharmacies because it aligns with actual stock rotation practice — dispensing the oldest stock first to minimise expiry.",
        },
        {
          type: "text",
          body: "FIFO is the preferred method for pharmacies for both accounting and clinical reasons. From a clinical standpoint, you should always dispense the oldest stock first to prevent expiry waste. From an accounting standpoint, FIFO means your ending inventory reflects the most recent (current) costs, giving a more accurate picture of your asset value. However, during periods of rising prices — which is common in the Caribbean due to currency depreciation and import cost inflation — FIFO produces higher reported profits and therefore higher tax liability.",
        },
        {
          type: "table",
          caption: "FIFO vs. Weighted Average Cost — Pharmacy Example",
          headers: ["Detail", "FIFO", "Weighted Average"],
          rows: [
            ["Purchase 1: 100 boxes @ $20", "Sold first", "Averaged into pool"],
            ["Purchase 2: 100 boxes @ $24", "Sold second", "Averaged into pool"],
            ["Purchase 3: 100 boxes @ $28", "Sold third (or remaining inventory)", "Averaged into pool"],
            ["COGS if 150 boxes sold", "(100 x $20) + (50 x $24) = $3,200", "150 x $24 (weighted avg) = $3,600"],
            ["Ending inventory (150 boxes)", "(50 x $24) + (100 x $28) = $4,000", "150 x $24 = $3,600"],
            ["Effect on profit", "Higher profit (lower COGS)", "Lower profit (higher COGS)"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Practical Inventory Management",
          body: "Regardless of which accounting method you use, always physically rotate stock using FEFO (First Expiry, First Out). Check expiry dates at every receipt and place shorter-dated stock in front. Many Caribbean pharmacies conduct monthly expiry audits — products within 3 months of expiry should be flagged for return to the wholesaler (if permitted), promotional pricing, or write-off.",
        },
        {
          type: "heading",
          level: 3,
          text: "Dead Stock and Expiry Waste",
        },
        {
          type: "text",
          body: "Dead stock — inventory that sits unsold for extended periods — is a significant financial drain for Caribbean pharmacies. Medications have finite shelf lives, and every expired product represents a direct financial loss. Industry benchmarks suggest that expiry waste should be less than 1% of total inventory value. In practice, many Caribbean pharmacies experience 2–5% waste due to overstocking, poor rotation, or ordering products with short remaining shelf life from distributors.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Conduct weekly FEFO checks on high-value and short-dated products",
            "Negotiate return-to-vendor agreements with your wholesalers for products approaching expiry",
            "Use pharmacy management software to generate automated expiry alerts",
            "Track your monthly expiry waste as a percentage of total inventory value",
            "Consider transferring slow-moving stock to another pharmacy in your network (if applicable)",
          ],
        },
        {
          type: "knowledge-check",
          question: "Which inventory valuation method aligns most closely with the clinical best practice of dispensing the oldest stock first?",
          options: [
            "LIFO (Last In, First Out)",
            "FIFO (First In, First Out)",
            "Weighted Average Cost",
            "Specific Identification",
          ],
          correctIndex: 1,
          explanation:
            "FIFO assumes the oldest stock is sold first, which mirrors the clinical best practice of dispensing the soonest-to-expire stock first (FEFO). This alignment between accounting and clinical practice makes FIFO the standard method for pharmacies.",
        },
      ],
    },
    // ── Lesson 1.4 ──
    {
      id: "m1-l4",
      title: "Insurance Schemes, Claims Processing & Revenue Cycle Management",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Navigating Caribbean Insurance & Government Programme Reimbursement",
        },
        {
          type: "text",
          body: "Revenue cycle management — the process of tracking revenue from the initial patient encounter through to final payment — is critical for Caribbean pharmacies that participate in government insurance programmes. A significant portion of your revenue may come from programmes like CDAP, NHF, or JADEP, and efficient claims processing directly impacts your cash flow.",
        },
        {
          type: "key-term",
          term: "Revenue Cycle Management (RCM)",
          definition:
            "The financial process that healthcare facilities use to track patient care episodes from registration and appointment scheduling to the final payment of a balance. In pharmacy, RCM encompasses prescription intake, eligibility verification, dispensing, claims submission, adjudication, and payment collection.",
        },
        {
          type: "table",
          caption: "Major Caribbean Government Pharmacy Programmes",
          headers: ["Programme", "Country", "Coverage", "Key Details"],
          rows: [
            [
              "CDAP (Chronic Disease Assistance Programme)",
              "Trinidad & Tobago",
              "Free medications for chronic conditions including diabetes, hypertension, asthma, arthritis, cardiac disease, glaucoma, thyroid disease, depression, epilepsy, and benign prostatic hyperplasia",
              "Pharmacy submits claims to NIPDEC; reimbursement at fixed rates; patient pays nothing for listed items",
            ],
            [
              "NHF (National Health Fund)",
              "Jamaica",
              "Subsidy for medications treating 17 chronic conditions",
              "Patient pays co-payment; NHF pays subsidy directly to pharmacy; individual benefit card system",
            ],
            [
              "JADEP (Jamaica Drugs for the Elderly Programme)",
              "Jamaica",
              "Free or subsidised medications for persons 60 and older",
              "Covers specified formulary of essential medications; administered through NHF infrastructure",
            ],
            [
              "Barbados Drug Benefit Programme",
              "Barbados",
              "Medications through public health system",
              "Drug Benefit Card for eligible persons; dispensed through polyclinics and Queen Elizabeth Hospital pharmacy",
            ],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "The Claims Processing Workflow",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Patient presents: Verify eligibility — check that the patient's CDAP/NHF card is valid and the condition is covered",
            "Prescription validation: Confirm the medication is on the programme formulary and the prescriber is registered",
            "Dispensing: Prepare and dispense the medication following standard operating procedures",
            "Documentation: Record all required information — patient details, medication, quantity, batch number, prescriber",
            "Claims submission: Submit claims electronically (where available) or via paper forms within the submission window",
            "Adjudication: The programme processes the claim and approves, rejects, or queries it",
            "Payment: Reimbursement is deposited to the pharmacy's account (timeline varies: 14–90 days)",
            "Reconciliation: Match payments received against claims submitted; follow up on rejected or unpaid claims",
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Common Claim Rejections",
          body: "The most frequent reasons for CDAP and NHF claim rejections are: expired patient eligibility, medication not on the programme formulary, prescriber not registered with the programme, incomplete documentation, and claims submitted outside the filing window. Each rejected claim represents lost revenue and additional administrative work. Training your team to get claims right the first time is one of the highest-value management activities.",
        },
        {
          type: "case-study",
          title: "Case Study: The Cash Flow Crunch",
          scenario:
            "GreenLeaf Pharmacy in San Fernando, Trinidad, participates in the CDAP programme. In January, they dispense $85,000 worth of CDAP medications. Their wholesaler payment is due in 30 days ($62,000), but CDAP reimbursement typically arrives in 45–60 days. The pharmacy has $25,000 in cash reserves. By mid-February, they face a $37,000 shortfall — they owe the wholesaler $62,000 but only have $25,000 in cash. Their non-CDAP cash sales cover daily operating expenses but cannot close this gap.",
          questions: [
            "What immediate steps should the pharmacy manager take to address the cash shortfall?",
            "What longer-term strategies could prevent this situation from recurring?",
            "How might the pharmacy negotiate better terms with their wholesaler?",
          ],
          discussion:
            "This scenario illustrates the classic Caribbean pharmacy cash flow gap. Immediate options include: negotiating extended payment terms with the wholesaler (45–60 days to match CDAP reimbursement timing), arranging a short-term business line of credit, or factoring receivables. Longer-term strategies include: maintaining a larger cash reserve (target 2 months of CDAP disbursement value), diversifying revenue beyond government programmes (OTC sales, health services), submitting claims more frequently to shorten the reimbursement cycle, and negotiating prompt-payment discounts with wholesalers to incentivise faster CDAP processing.",
        },
        {
          type: "knowledge-check",
          question: "Which of the following is the MOST common reason for CDAP/NHF claim rejections in Caribbean pharmacies?",
          options: [
            "The pharmacy is not registered with the programme",
            "Incomplete documentation or expired patient eligibility",
            "The medication is too expensive for the programme",
            "The patient visited the pharmacy too recently",
          ],
          correctIndex: 1,
          explanation:
            "Incomplete documentation and expired patient eligibility are the most frequent causes of claim rejections. This is why verifying patient eligibility at the point of dispensing and ensuring all required fields are completed before submission is critical to revenue cycle efficiency.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m1-q1",
      question:
        "Which financial statement is most critical for a Caribbean pharmacy participating in government insurance programmes like CDAP?",
      options: [
        "Balance Sheet",
        "Income Statement",
        "Cash Flow Statement",
        "Statement of Shareholders' Equity",
      ],
      correctIndex: 2,
      explanation:
        "The Cash Flow Statement is most critical because government programmes often reimburse 30–90 days after dispensing, creating a significant gap between when the pharmacy pays for medications and when it receives payment. A pharmacy can be profitable on paper but run out of cash.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m1-q2",
      question:
        "A pharmacy purchases a product for $50 and sells it for $70. What is the markup percentage?",
      options: [
        "20%",
        "28.6%",
        "40%",
        "71.4%",
      ],
      correctIndex: 2,
      explanation:
        "Markup = (Selling Price - Cost Price) / Cost Price x 100 = ($70 - $50) / $50 x 100 = 40%. The margin would be ($70 - $50) / $70 x 100 = 28.6%. Markup is calculated on cost; margin is calculated on selling price.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q3",
      questionType: "true_false",
      question: "In Trinidad & Tobago, patients are required to pay a co-payment for medications dispensed under the CDAP programme.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "False. The Chronic Disease Assistance Programme (CDAP) provides free medications to patients — there is no co-payment. The programme reimburses participating pharmacies at a fixed rate per item. In contrast, Jamaica's NHF programme does require a co-payment from the patient.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q4",
      question:
        "Which inventory valuation method typically produces higher reported profits during periods of rising medication costs?",
      options: [
        "FIFO (First In, First Out)",
        "LIFO (Last In, First Out)",
        "Weighted Average Cost",
        "All methods produce the same profit",
      ],
      correctIndex: 0,
      explanation:
        "FIFO assigns the older, lower costs to COGS and the newer, higher costs to ending inventory. During periods of rising prices, this results in lower COGS and therefore higher reported profits compared to LIFO or Weighted Average.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m1-q5",
      question:
        "GreenLeaf Pharmacy has annual COGS of $480,000 and an average inventory value of $48,000. What is the inventory turnover rate?",
      options: [
        "5 turns per year",
        "10 turns per year",
        "12 turns per year",
        "48 turns per year",
      ],
      correctIndex: 1,
      explanation:
        "Inventory Turnover = COGS / Average Inventory = $480,000 / $48,000 = 10 turns per year. This means the pharmacy sells and replaces its entire inventory approximately 10 times per year, which is within the healthy range of 8–12 for Caribbean community pharmacies.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q6",
      questionType: "multiple_select",
      question: "Which of the following are strategies to manage the cash flow gap created by delayed government programme reimbursement? (Select all that apply)",
      options: [
        "Negotiate extended payment terms with wholesalers to match reimbursement timelines",
        "Stop participating in government programmes entirely",
        "Maintain a cash reserve equivalent to 2 months of government programme dispensing value",
        "Submit claims more frequently to shorten the reimbursement cycle",
        "Charge patients an additional fee above the programme reimbursement rate",
      ],
      correctIndex: 0,
      questionData: {
        correct_indices: [0, 2, 3],
      },
      explanation:
        "Negotiating extended payment terms, maintaining adequate cash reserves, and submitting claims more frequently are all legitimate strategies. Stopping programme participation abandons patients and a significant revenue stream. Charging patients above the programme rate is prohibited under CDAP and NHF rules.",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m1-q7",
      question:
        "In Jamaica, the General Consumption Tax (GCT) treatment of prescription medications is:",
      options: [
        "Taxed at the standard 15% rate",
        "Taxed at a reduced 5% rate",
        "Exempt from GCT",
        "Taxed only if purchased from a private pharmacy",
      ],
      correctIndex: 2,
      explanation:
        "Prescription medications in Jamaica are exempt from GCT. This exemption helps keep essential medicines affordable for the population. Over-the-counter products, however, may be subject to GCT at the standard 15% rate.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q8",
      question:
        "What is the target expiry waste benchmark for a well-managed pharmacy?",
      options: [
        "Less than 1% of total inventory value",
        "Less than 5% of total inventory value",
        "Less than 10% of total inventory value",
        "Zero waste is the only acceptable target",
      ],
      correctIndex: 0,
      explanation:
        "Industry benchmarks suggest expiry waste should be less than 1% of total inventory value. While zero waste is ideal, it is practically unachievable because some products have unpredictable demand. Many Caribbean pharmacies experience 2–5% waste, indicating room for improvement through better stock rotation, expiry monitoring, and return-to-vendor agreements.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q9",
      questionType: "ordering",
      question: "Place the pharmacy claims processing steps in the correct order:",
      options: [
        "Verify patient eligibility",
        "Validate the prescription against the programme formulary",
        "Dispense the medication",
        "Submit the claim electronically or on paper",
        "Reconcile payments received against claims submitted",
      ],
      correctIndex: 0,
      questionData: {
        correct_order: [0, 1, 2, 3, 4],
      },
      explanation:
        "The correct workflow is: (1) verify eligibility, (2) validate the prescription against the formulary, (3) dispense the medication, (4) submit the claim, (5) reconcile payments. Skipping or misordering steps — especially dispensing before verifying eligibility — is the leading cause of claim rejections.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q10",
      question:
        "A pharmacy's gross profit margin has fallen from 32% to 24% over the past year, while prescription volume has remained stable. The MOST likely cause is:",
      options: [
        "Staff wages have increased significantly",
        "Wholesale medication costs have risen while selling prices have not been adjusted",
        "The pharmacy has reduced its operating hours",
        "Rent has increased dramatically",
      ],
      correctIndex: 1,
      explanation:
        "Gross profit margin is Revenue minus COGS divided by Revenue. Staff wages, rent, and operating hours affect operating expenses (which impact net profit margin, not gross). A falling gross margin with stable volume strongly indicates that COGS has risen (wholesale costs up) while selling prices have not kept pace — a common issue in Caribbean pharmacies where government-programme reimbursement rates are fixed.",
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
  ],
};

// ============================================================================
// MODULE 2 — Human Resources: Staffing, Scheduling & Team Development
// ============================================================================

const module2: Module = {
  id: "m2-human-resources",
  number: 2,
  title: "Human Resources: Staffing, Scheduling & Team Development",
  description:
    "Navigate the unique HR challenges of Caribbean pharmacy practice. From recruiting qualified staff in small island economies to building rosters that comply with pharmacy law, this module covers the people side of pharmacy management.",
  learningObjectives: [
    "Identify staffing challenges specific to pharmacy practice in small island developing states",
    "Design work schedules that comply with Caribbean pharmacy supervision requirements",
    "Develop staff training and retention strategies suited to the Caribbean pharmacy workforce",
    "Apply conflict resolution techniques appropriate to hierarchical Caribbean workplace culture",
  ],
  lessons: [
    // ── Lesson 2.1 ──
    {
      id: "m2-l1",
      title: "Staffing Challenges in Caribbean Pharmacy",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Caribbean Pharmacy Workforce Landscape",
        },
        {
          type: "text",
          body: "Staffing a Caribbean pharmacy presents challenges that mainland pharmacy managers rarely face. Small island economies have limited labour pools, and the pharmacy profession competes with other sectors — and other countries — for a finite number of qualified individuals. The 'brain drain' of healthcare professionals migrating to the US, UK, or Canada for higher wages is a persistent reality that shapes every HR decision.",
        },
        {
          type: "text",
          body: "A typical Caribbean community pharmacy employs 3–8 staff members: 1–2 pharmacists, 1–3 pharmacy technicians, and 1–3 pharmacy assistants or cashiers. Unlike chain pharmacies in North America with centralised HR departments, most Caribbean pharmacies handle recruitment, training, scheduling, and performance management locally — often with the pharmacy manager wearing multiple hats.",
        },
        {
          type: "island-comparison",
          title: "Pharmacy Workforce Challenges by Island",
          description:
            "Each island faces distinct workforce pressures shaped by its economy, training infrastructure, and proximity to higher-paying markets.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "The University of the West Indies (UWI) St. Augustine campus produces pharmacy graduates, but many emigrate within 5 years",
                "Oil and gas sector competes for science graduates — pharmacy must offer competitive packages",
                "COSTAATT and private institutions offer pharmacy technician training but output does not meet demand",
                "Dual-island logistics: Tobago pharmacies struggle more with recruitment than Trinidad",
                "Average pharmacy technician salary: TT$5,000–8,000/month ($740–1,180 USD)",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "University of Technology (UTech) is the primary pharmacy school; output is limited relative to need",
                "High emigration rate — proximity to the US makes the brain drain particularly acute",
                "Significant salary gap between public and private sector pharmacy positions",
                "Rural pharmacies (e.g., in Portland or St. Thomas) face severe recruitment difficulties",
                "Average pharmacy technician salary: J$120,000–180,000/month ($780–1,170 USD at current rates)",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Small population (approx. 280,000) limits the total pharmacy workforce pool",
                "UWI Cave Hill does not have a pharmacy programme — many pharmacists trained abroad",
                "Tourism sector competes aggressively for service-oriented staff",
                "Queen Elizabeth Hospital and polyclinic positions offer job security that private pharmacies cannot match",
                "Average pharmacy technician salary: BDS$3,000–5,000/month ($1,500–2,500 USD)",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Brain Drain Reality",
          body: "A 2023 PAHO report estimated that the Caribbean loses approximately 30% of its trained healthcare workers to emigration within 10 years of qualification. For pharmacy, this means investing in a technician's training only to lose them to a North American or European employer is a real and recurring cost. Retention strategies — not just recruitment — are the key to workforce stability.",
        },
        {
          type: "key-term",
          term: "Brain Drain",
          definition:
            "The emigration of highly trained or qualified people from a country or region, typically to seek better pay or living conditions. In the Caribbean pharmacy context, brain drain refers to pharmacists and technicians migrating to North America, the UK, or other higher-paying markets, depleting the local workforce.",
        },
        {
          type: "heading",
          level: 3,
          text: "Recruitment Strategies for Caribbean Pharmacies",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Partner with local training institutions (COSTAATT, UTech, UWI) for intern and placement pipelines",
            "Offer competitive benefits beyond salary: health insurance, continuing education funding, flexible scheduling",
            "Develop a strong workplace culture — in small island communities, word of mouth about good employers travels fast",
            "Consider 'grow your own' strategies: sponsor promising pharmacy assistants through technician training",
            "Use social media and professional networks (LinkedIn, Caribbean pharmacy groups) for targeted recruitment",
            "For rural or underserved locations, offer housing assistance or travel allowances",
          ],
        },
        {
          type: "knowledge-check",
          question: "What is the primary driver of pharmacy workforce shortages in the Caribbean?",
          options: [
            "Too few pharmacy training programmes in the region",
            "Emigration of qualified professionals to higher-paying markets",
            "Government restrictions on pharmacy licensing",
            "Low demand for pharmacy services",
          ],
          correctIndex: 1,
          explanation:
            "While limited training capacity is a contributing factor, the emigration of qualified pharmacy professionals to North America, the UK, and other higher-paying markets (brain drain) is the primary driver of workforce shortages across the Caribbean.",
        },
      ],
    },
    // ── Lesson 2.2 ──
    {
      id: "m2-l2",
      title: "Scheduling, Supervision & Labour Law Compliance",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Building Rosters That Work — Legally and Practically",
        },
        {
          type: "text",
          body: "Pharmacy scheduling is more complex than scheduling for a typical retail business. In every Caribbean jurisdiction, a registered pharmacist must be physically present and supervising whenever the pharmacy is open and dispensing. This legal requirement fundamentally shapes how rosters are built: you cannot open the pharmacy if the pharmacist calls in sick, regardless of how many technicians are available.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Legal Requirement: Pharmacist Supervision",
          body: "In Trinidad & Tobago, Jamaica, and Barbados, dispensing medications without a registered pharmacist physically present on the premises is a criminal offence. If your pharmacist is absent, the pharmacy must either close the dispensary or cease dispensing until a registered pharmacist arrives. Technicians may continue to manage front-of-shop operations but cannot dispense prescriptions.",
        },
        {
          type: "table",
          caption: "Labour Law Considerations for Caribbean Pharmacy Scheduling",
          headers: ["Factor", "Trinidad & Tobago", "Jamaica", "Barbados"],
          rows: [
            [
              "Standard work week",
              "40 hours (8 hours x 5 days)",
              "40 hours (8 hours x 5 days)",
              "40 hours (8 hours x 5 days)",
            ],
            [
              "Overtime rate",
              "1.5x for first 4 hours overtime; 2x thereafter",
              "1.5x standard rate after 40 hours",
              "1.5x standard rate; 2x on Sundays and public holidays",
            ],
            [
              "Public holidays",
              "13 gazetted public holidays; double time or time off in lieu",
              "8 public holidays; double time if worked",
              "11 public holidays; double or triple time depending on contract",
            ],
            [
              "Annual leave minimum",
              "14 working days after 1 year of service",
              "10 working days after 1 year; 15 after 10 years",
              "15 working days (3 calendar weeks) minimum",
            ],
            [
              "Sick leave provisions",
              "14 days paid sick leave per year (typical)",
              "Varies by contract; Industrial Disputes Tribunal guidance",
              "As per contract; Sick Leave and Sickness Benefits Act provisions",
            ],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Practical Scheduling Strategies",
        },
        {
          type: "text",
          body: "A well-designed pharmacy schedule balances four competing demands: legal compliance (pharmacist supervision), operational coverage (enough staff during peak hours), employee wellbeing (reasonable shifts, adequate rest), and cost management (minimising unnecessary overtime). In small Caribbean pharmacies, this is often a jigsaw puzzle where every piece matters.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Map your peak hours: Analyse dispensing volume by hour and day of week — most Caribbean pharmacies see peaks on Monday mornings (post-weekend prescriptions), Friday afternoons (before the weekend), and the first week of each month (when government programme patients refill)",
            "Build around pharmacist availability: Always start the schedule with your pharmacist(s), then layer in technicians and assistants",
            "Cross-train staff: Ensure every technician can handle both dispensing and front-of-shop duties so you have scheduling flexibility",
            "Plan for absence: Have a locum pharmacist on call and a system for short-notice coverage",
            "Use split shifts strategically: A technician working 7 AM–11 AM and 3 PM–7 PM covers both peaks while reducing mid-day staffing costs",
            "Post schedules two weeks in advance: This gives staff time to plan and reduces last-minute changes",
          ],
        },
        {
          type: "key-term",
          term: "Locum Pharmacist",
          definition:
            "A registered pharmacist who provides temporary coverage at a pharmacy, typically to cover leave, illness, or extended hours. In the Caribbean, the locum pool is limited, and pharmacies often share locum contacts informally. Having a reliable locum arrangement is essential for uninterrupted pharmacy operations.",
        },
        {
          type: "knowledge-check",
          question: "What must happen if the pharmacist on duty is unexpectedly absent from a Caribbean community pharmacy?",
          options: [
            "The senior pharmacy technician may supervise dispensing until the pharmacist returns",
            "The pharmacy must cease dispensing until a registered pharmacist is present",
            "Another nearby pharmacist can provide remote supervision by telephone",
            "The pharmacy owner can authorise the technician to dispense independently",
          ],
          correctIndex: 1,
          explanation:
            "In Trinidad & Tobago, Jamaica, and Barbados, a registered pharmacist must be physically present on the premises for dispensing to occur. No amount of remote supervision, seniority of the technician, or owner authorisation can substitute for the physical presence of a registered pharmacist. The dispensary must cease operations until one arrives.",
        },
      ],
    },
    // ── Lesson 2.3 ──
    {
      id: "m2-l3",
      title: "Staff Training, Retention & Performance Management",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Developing and Keeping Your Pharmacy Team",
        },
        {
          type: "text",
          body: "In a tight Caribbean labour market, retaining trained pharmacy staff is more cost-effective than constantly recruiting and retraining. The cost of replacing a pharmacy technician — including recruitment, training, and the productivity loss during the learning curve — is estimated at 6–12 months of salary. Smart pharmacy managers invest in retention from day one.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Onboarding Journey",
        },
        {
          type: "text",
          body: "A structured onboarding programme for new pharmacy staff should cover: pharmacy SOPs and policies, dispensing procedures, inventory management systems, customer service standards, emergency protocols (robbery, medical emergency, hurricane), and an introduction to any government programme workflows (CDAP, NHF). Many Caribbean pharmacies lack formal onboarding — new hires are simply paired with a senior technician and expected to learn by observation. While mentorship is valuable, it is not a substitute for documented training.",
        },
        {
          type: "table",
          caption: "Pharmacy Staff Onboarding Checklist (First 90 Days)",
          headers: ["Timeframe", "Training Focus", "Assessment"],
          rows: [
            [
              "Week 1",
              "Pharmacy layout, SOPs, team introductions, safety protocols, POS system basics",
              "Observation and orientation quiz",
            ],
            [
              "Weeks 2–4",
              "Dispensing workflow, insurance programme procedures, inventory receiving, customer service standards",
              "Supervised dispensing assessment by pharmacist",
            ],
            [
              "Months 2–3",
              "Independent task completion under supervision, handling complex prescriptions, expiry management, opening/closing procedures",
              "Written competency assessment and pharmacist sign-off",
            ],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Retention Through Growth",
          body: "In exit interviews, Caribbean pharmacy staff consistently cite three reasons for leaving: inadequate compensation, lack of career growth, and poor management. Of these, lack of career growth is the most actionable. Create clear career pathways — from assistant to certified technician to senior technician to supervisor — with defined milestones, pay increments, and new responsibilities at each level. When staff can see their future at your pharmacy, they are less likely to look elsewhere.",
        },
        {
          type: "heading",
          level: 3,
          text: "Performance Management in Caribbean Culture",
        },
        {
          type: "text",
          body: "Caribbean workplace culture tends to be more hierarchical and relationship-oriented than North American or European workplaces. Direct confrontation about poor performance can be perceived as disrespectful, and public criticism is deeply damaging to working relationships. Effective performance management in this context requires a blend of clear expectations, regular private feedback, and cultural sensitivity.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Set expectations clearly from the start — written job descriptions, documented SOPs, and measurable performance indicators",
            "Give feedback privately, never in front of colleagues or patients",
            "Use the 'praise-improve-praise' sandwich method — acknowledge what the person does well before addressing areas for improvement",
            "Address issues early and directly but respectfully — allowing poor performance to continue undermines the entire team",
            "Document all performance conversations — Caribbean labour law requires documentation if termination becomes necessary",
            "Recognise and reward good performance publicly — this is motivating in collectivist Caribbean culture",
          ],
        },
        {
          type: "case-study",
          title: "Case Study: The Perpetually Late Technician",
          scenario:
            "Marcus, a pharmacy technician at Island Health Pharmacy in Kingston, Jamaica, has been arriving 15–30 minutes late for his morning shift three or four times a week for the past two months. He is otherwise a competent and well-liked team member. His lateness means the pharmacy opens late (since the pharmacist cannot be at the counter and do the opening procedures alone), patients are kept waiting, and the other technician on shift must cover his duties. The pharmacy manager has mentioned it casually twice ('Try to be on time, nuh?') but the behaviour continues.",
          questions: [
            "What has the pharmacy manager done wrong in handling this situation so far?",
            "What steps should the manager take now, considering Jamaican labour law requirements?",
            "How can the manager address the behaviour firmly while maintaining the working relationship?",
          ],
          discussion:
            "The manager's error was treating a pattern of lateness with casual verbal comments rather than a structured response. Under Jamaican labour law and best HR practice, the manager should: (1) have a private, documented meeting with Marcus to discuss the pattern, (2) explore whether there is an underlying cause (childcare, transport, health) that might be accommodated, (3) issue a formal written warning if the behaviour continues, (4) set a clear improvement timeline, and (5) document every step. The 'praise-improve-praise' approach would work well: acknowledge Marcus's competence, address the lateness directly with specific examples and its impact on the team and patients, and express confidence in his ability to resolve it.",
        },
        {
          type: "knowledge-check",
          question: "Which factor is most commonly cited by Caribbean pharmacy staff as a reason for leaving their employer?",
          options: [
            "Excessive physical demands of the work",
            "Lack of career growth and advancement opportunities",
            "Disagreements with co-workers",
            "Excessive weekend work requirements",
          ],
          correctIndex: 1,
          explanation:
            "Lack of career growth is consistently cited as a top reason Caribbean pharmacy staff seek employment elsewhere. Creating clear career pathways with defined milestones, pay increments, and increasing responsibilities is one of the most effective retention strategies available to pharmacy managers.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m2-q1",
      question:
        "Approximately what percentage of Caribbean healthcare workers emigrate within 10 years of qualification, according to PAHO estimates?",
      options: [
        "10%",
        "20%",
        "30%",
        "50%",
      ],
      correctIndex: 2,
      explanation:
        "PAHO estimates that approximately 30% of trained Caribbean healthcare workers emigrate within 10 years of qualification, seeking higher wages and broader career opportunities in North America, the UK, and Europe. This brain drain significantly impacts pharmacy staffing across the region.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q2",
      question:
        "A pharmacy manager in Trinidad discovers at 7:55 AM that the pharmacist is ill and cannot come to work. The pharmacy is scheduled to open at 8:00 AM. What is the legally correct action?",
      options: [
        "Open the pharmacy and allow the senior technician to supervise dispensing",
        "Open the front-of-shop but cease all dispensing until a registered pharmacist arrives",
        "Keep the pharmacy completely closed until the pharmacist recovers",
        "Contact the Pharmacy Board for emergency dispensing authorisation",
      ],
      correctIndex: 1,
      explanation:
        "The legally correct action is to open the front-of-shop for non-prescription sales (OTC products, sundries) but cease all dispensing activities until a registered pharmacist is physically present. Technicians may manage general retail operations but cannot dispense without pharmacist supervision.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q3",
      question:
        "What is the estimated cost of replacing a pharmacy technician, including recruitment, training, and productivity loss?",
      options: [
        "1–3 months of salary",
        "6–12 months of salary",
        "18–24 months of salary",
        "3–5 years of salary",
      ],
      correctIndex: 1,
      explanation:
        "The cost of replacing a pharmacy technician — including recruitment advertising, interviewing, onboarding, training, and the productivity dip during the new hire's learning curve — is estimated at 6–12 months of salary. This makes retention strategies highly cost-effective.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q4",
      questionType: "true_false",
      question: "In Caribbean pharmacy practice, a pharmacist can provide remote supervision by telephone to allow technicians to dispense independently.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "False. In Trinidad & Tobago, Jamaica, and Barbados, the supervising pharmacist must be physically present on the premises for dispensing to occur. Remote or telephone supervision does not satisfy the legal requirement. If the pharmacist is absent, the dispensary must cease operations.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q5",
      question:
        "Which scheduling strategy is MOST effective for managing a Caribbean pharmacy with one pharmacist and two technicians?",
      options: [
        "Schedule all staff for the same 9-to-5 shift every day",
        "Build the schedule around pharmacist availability first, then layer in technicians to cover peak hours",
        "Let staff choose their own hours based on personal preference",
        "Schedule the pharmacist for mornings only and let technicians handle afternoon dispensing",
      ],
      correctIndex: 1,
      explanation:
        "Because the pharmacist must be present for dispensing, the schedule must be built around pharmacist availability first. Technicians are then layered in to ensure adequate coverage during peak dispensing hours. Letting technicians handle afternoon dispensing without a pharmacist is illegal.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q6",
      question:
        "A pharmacy manager needs to address a technician's repeated dispensing errors. In the Caribbean cultural context, the BEST approach is:",
      options: [
        "Discuss the errors publicly at the next team meeting as a learning opportunity",
        "Send a formal written warning without prior discussion",
        "Have a private conversation acknowledging strengths before addressing the specific errors",
        "Ignore the errors to avoid confrontation and hope they improve",
      ],
      correctIndex: 2,
      explanation:
        "In Caribbean workplace culture, which tends to be hierarchical and relationship-oriented, the 'praise-improve-praise' approach delivered in a private setting is most effective. Public criticism damages relationships and morale, while ignoring errors compromises patient safety. A private, balanced conversation maintains dignity while addressing the issue directly.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m2-q7",
      question:
        "In Barbados, what is the minimum annual leave entitlement for a pharmacy employee after one year of service?",
      options: [
        "10 working days",
        "14 working days",
        "15 working days (3 calendar weeks)",
        "21 working days",
      ],
      correctIndex: 2,
      explanation:
        "In Barbados, the minimum annual leave entitlement is 15 working days (equivalent to 3 calendar weeks) after one year of service. This is more generous than Trinidad & Tobago's 14 days and Jamaica's 10 days, and must be factored into scheduling and staffing plans.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q8",
      questionType: "multiple_select",
      question: "Which of the following are effective strategies for retaining pharmacy technicians in a Caribbean community pharmacy? (Select all that apply)",
      options: [
        "Create clear career pathways with defined milestones and pay increments",
        "Fund continuing education and professional development",
        "Maintain a rigid hierarchy with no opportunity for technicians to take on new responsibilities",
        "Provide competitive benefits beyond salary (health insurance, flexible scheduling)",
        "Keep salary information confidential to prevent comparison among staff",
      ],
      correctIndex: 0,
      questionData: {
        correct_indices: [0, 1, 3],
      },
      explanation:
        "Clear career pathways, continuing education funding, and competitive benefits are all proven retention strategies. Rigid hierarchies without growth opportunities drive talented staff away, and while salary confidentiality is common, it is not a retention strategy — transparent, fair compensation builds trust.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m2-q9",
      question:
        "In Trinidad & Tobago, the overtime rate for a pharmacy employee working beyond 44 hours in a week (after the first 4 overtime hours) is:",
      options: [
        "Standard rate (no premium)",
        "1.5 times the standard rate",
        "2 times the standard rate",
        "3 times the standard rate",
      ],
      correctIndex: 2,
      explanation:
        "In Trinidad & Tobago, the overtime rate is 1.5 times standard rate for the first 4 hours of overtime, then 2 times the standard rate thereafter. Pharmacy managers must factor these costs into scheduling decisions, as excessive overtime significantly increases labour costs.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q10",
      question:
        "A pharmacy onboarding programme should assess a new technician's competence at supervised dispensing during which timeframe?",
      options: [
        "Day 1, immediately upon starting",
        "Weeks 2–4, after initial orientation is complete",
        "After 6 months, at the first annual review",
        "Only if the pharmacist suspects a problem",
      ],
      correctIndex: 1,
      explanation:
        "The supervised dispensing competency assessment should occur during weeks 2–4 of onboarding, after the new technician has completed orientation (Week 1) and had initial exposure to the dispensing workflow. Assessing on Day 1 is premature, while waiting 6 months risks errors going uncorrected for too long.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 3 — Leadership Skills for Pharmacy Supervisors
// ============================================================================

const module3: Module = {
  id: "m3-leadership-skills",
  number: 3,
  title: "Leadership Skills for Pharmacy Supervisors",
  description:
    "Develop the leadership competencies needed to guide pharmacy teams effectively within the Caribbean workplace culture. From delegation and motivation to conflict resolution and change management, learn to lead with authority and empathy.",
  learningObjectives: [
    "Distinguish between management functions and leadership behaviours in pharmacy practice",
    "Apply situational leadership principles to Caribbean pharmacy team scenarios",
    "Demonstrate effective delegation techniques that maintain patient safety standards",
    "Resolve workplace conflicts using culturally appropriate strategies for Caribbean settings",
  ],
  lessons: [
    // ── Lesson 3.1 ──
    {
      id: "m3-l1",
      title: "Management vs. Leadership in Pharmacy",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Difference Between Managing and Leading",
        },
        {
          type: "text",
          body: "Every pharmacy needs both management and leadership, but they are not the same thing. Management is about systems, processes, and ensuring that things run correctly — the schedule is posted, inventory is ordered, claims are submitted. Leadership is about people, vision, and inspiring a team to deliver exceptional patient care even when the systems are under pressure. In a small Caribbean pharmacy where the supervisor wears both hats, understanding when to manage and when to lead is a critical skill.",
        },
        {
          type: "table",
          caption: "Management vs. Leadership — Pharmacy Context",
          headers: ["Management", "Leadership"],
          rows: [
            ["Creates the schedule", "Inspires staff to arrive on time because they care about patients"],
            ["Implements SOPs", "Explains why SOPs matter for patient safety"],
            ["Monitors inventory levels", "Empowers technicians to flag stock issues proactively"],
            ["Processes insurance claims", "Advocates for better reimbursement rates for the team"],
            ["Conducts performance reviews", "Mentors staff toward their career goals"],
            ["Reacts to problems", "Anticipates challenges and prepares the team"],
          ],
        },
        {
          type: "key-term",
          term: "Situational Leadership",
          definition:
            "A leadership model developed by Hersey and Blanchard that proposes there is no single best leadership style. Instead, effective leaders adapt their approach based on the competence and commitment of the individual being led. A new pharmacy assistant needs direction; an experienced technician needs delegation and autonomy.",
        },
        {
          type: "text",
          body: "In Caribbean pharmacy practice, the supervisor often leads a team of varying skill levels — from a newly hired assistant who needs step-by-step guidance to a veteran technician who has been with the pharmacy for 15 years and knows more about the stock than anyone. Applying the same leadership style to both would be a mistake. The new assistant needs directing (clear instructions, close supervision), while the veteran needs delegating (trusted with responsibility, consulted on decisions).",
        },
        {
          type: "heading",
          level: 3,
          text: "Leadership in Caribbean Workplace Culture",
        },
        {
          type: "text",
          body: "Caribbean workplace culture has distinct features that shape how leadership is exercised. Authority is generally respected and expected — staff look to supervisors for clear direction. However, heavy-handed or authoritarian leadership is deeply resented, particularly in cultures where personal dignity and respect are paramount. The most effective Caribbean pharmacy leaders combine firmness with warmth — they set high standards and hold staff accountable, but they do so with genuine care for their team members as individuals.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The 'Yard' Culture Advantage",
          body: "In many Caribbean workplaces, the team functions like an extended family — the 'yard' culture. Staff celebrate each other's birthdays, know each other's children, and support each other through personal challenges. As a pharmacy supervisor, nurturing this culture builds loyalty and teamwork that no amount of formal policy can achieve. But it also means that professional boundaries must be carefully maintained — familiarity should not compromise patient safety standards or fair performance management.",
        },
        {
          type: "knowledge-check",
          question: "A new pharmacy assistant is in her first week. According to situational leadership, what approach should the supervisor use?",
          options: [
            "Delegating — give her tasks and trust her to figure them out",
            "Directing — provide clear step-by-step instructions and close supervision",
            "Participating — ask for her opinions on how to do the work",
            "Coaching — let her try independently but check in frequently",
          ],
          correctIndex: 1,
          explanation:
            "A brand-new employee with low competence (not yet trained) but typically high commitment (eager to learn) needs a directing style — clear instructions, demonstrations, and close supervision. As her competence grows, the supervisor should progressively shift toward coaching, then participating, and eventually delegating.",
        },
      ],
    },
    // ── Lesson 3.2 ──
    {
      id: "m3-l2",
      title: "Delegation, Motivation & Team Empowerment",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Art of Delegation in a Regulated Profession",
        },
        {
          type: "text",
          body: "Delegation in pharmacy is unlike delegation in most other professions because it operates within strict legal boundaries. A pharmacy supervisor cannot delegate the final check on a prescription to a technician, regardless of how experienced that technician is. However, within these legal constraints, effective delegation is essential — a supervisor who tries to do everything themselves will burn out, make errors, and demoralise their team.",
        },
        {
          type: "text",
          body: "The key principle is: delegate authority for tasks, but never abdicate responsibility. When you delegate inventory ordering to a senior technician, you are giving them authority to place orders — but you remain responsible for ensuring inventory levels are adequate. When you delegate opening procedures to the morning technician, you trust them to follow the checklist — but you are accountable if something is missed.",
        },
        {
          type: "table",
          caption: "Delegation Framework for Pharmacy Supervisors",
          headers: ["Task Category", "Can Delegate To", "Supervisor Must"],
          rows: [
            ["Inventory ordering and receiving", "Senior technician", "Review orders before submission; audit receiving records weekly"],
            ["Opening and closing procedures", "Trained technician or assistant", "Verify checklist is followed; spot-check periodically"],
            ["Insurance claims documentation", "Technician trained in programme procedures", "Review claims before submission; reconcile payments"],
            ["Expiry date monitoring", "Any trained staff member", "Review expiry reports monthly; make write-off decisions"],
            ["Prescription dispensing (preparation)", "Certified pharmacy technician", "Final verification must be by the pharmacist — this cannot be delegated"],
            ["Staff scheduling (draft)", "Senior technician", "Review and approve final schedule; ensure pharmacist coverage"],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Motivating Your Team",
        },
        {
          type: "text",
          body: "Motivation in Caribbean pharmacy teams comes from a blend of intrinsic and extrinsic factors. Research consistently shows that beyond a fair base salary, the most powerful motivators are: recognition for good work, opportunities to learn and grow, autonomy in their role, and a sense of purpose — the knowledge that their work directly helps patients. Financial bonuses matter, but they are rarely the primary motivator for pharmacy professionals.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Verbal recognition: A sincere 'Good work on catching that interaction' is powerful in Caribbean culture where verbal affirmation is highly valued",
            "Development opportunities: Fund CPD courses, conference attendance, or cross-training in new areas",
            "Autonomy: Give experienced staff ownership of specific areas (e.g., 'You are in charge of our diabetic patient counselling materials')",
            "Purpose: Regularly connect daily tasks to patient outcomes — remind the team why accuracy matters",
            "Team celebrations: Acknowledge milestones — pharmacy anniversary, individual work anniversaries, team achievements",
            "Fair compensation: Review salaries annually against market rates; do not assume loyalty alone will retain staff",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Herzberg's Two-Factor Theory in Pharmacy",
          body: "Herzberg's theory distinguishes between 'hygiene factors' (salary, working conditions, job security) that prevent dissatisfaction, and 'motivators' (achievement, recognition, growth) that drive satisfaction. A pharmacy with good pay but no recognition will have staff who are not dissatisfied but not motivated either. True engagement requires both — fair hygiene factors PLUS genuine motivators.",
        },
        {
          type: "knowledge-check",
          question: "A pharmacy supervisor delegates inventory ordering to a senior technician. The technician over-orders, resulting in excess stock and cash flow pressure. Who is ultimately responsible?",
          options: [
            "The technician who placed the order",
            "The wholesaler who accepted the large order",
            "The pharmacy supervisor who delegated the task",
            "The pharmacy owner",
          ],
          correctIndex: 2,
          explanation:
            "When a supervisor delegates a task, they delegate authority but retain responsibility. The supervisor should have established order limits, review processes, and approval thresholds. Ultimate accountability for the delegation — including its outcomes — rests with the person who delegated.",
        },
      ],
    },
    // ── Lesson 3.3 ──
    {
      id: "m3-l3",
      title: "Conflict Resolution & Change Management",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Navigating Conflict in Small Pharmacy Teams",
        },
        {
          type: "text",
          body: "In a small Caribbean pharmacy where three to eight people work in close quarters for eight or more hours a day, interpersonal conflict is inevitable. Personality clashes, disagreements over work distribution, perceived favouritism, and the stress of busy dispensing shifts all create friction. Left unaddressed, workplace conflict in a small team can escalate quickly — there is no large department to absorb the tension, and patients can sense (and are affected by) team dysfunction.",
        },
        {
          type: "key-term",
          term: "Mediation",
          definition:
            "A conflict resolution process in which a neutral third party (the mediator) helps the disputing parties reach a mutually acceptable resolution. In pharmacy management, the supervisor often serves as mediator between conflicting team members. The goal is not to determine who is right, but to find a workable solution that preserves the working relationship.",
        },
        {
          type: "heading",
          level: 3,
          text: "A Five-Step Conflict Resolution Model for Pharmacy",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Acknowledge the conflict: Do not ignore it. If two team members are visibly in conflict, address it before it affects patient care",
            "Meet individually first: In Caribbean culture, airing grievances in front of others is deeply uncomfortable. Meet each person privately to hear their perspective",
            "Identify the root cause: Is this about behaviour (lateness, not pulling their weight), communication (misunderstandings, tone), or systems (unclear roles, unfair scheduling)?",
            "Facilitate a joint conversation: Bring both parties together in a private setting. Set ground rules — no interrupting, no personal attacks, focus on solutions. In Caribbean settings, offering a cup of tea and starting with light conversation ('liming') can ease tension before addressing the issue",
            "Agree on actions and follow up: Document what was agreed, set a review date, and follow through. In collectivist Caribbean culture, people want to know that the leader cares enough to follow up",
          ],
        },
        {
          type: "scenario-simulation",
          title: "Scenario: Managing a Conflict Between Team Members",
          description:
            "You are the pharmacy supervisor at SunRise Pharmacy in Scarborough, Tobago. Two of your three technicians — Keisha and Damian — have been in open conflict for the past week, and it is affecting the work environment. Navigate this situation and resolve the conflict.",
          nodes: [
            {
              id: "start",
              text: "You arrive Monday morning to find Keisha and Damian barely speaking. A patient at the counter looks uncomfortable as Damian curtly tells Keisha to 'handle it' when she asks him to pass a medication from the shelf behind him. Another staff member, Assistant Carla, whispers to you: 'They been like this since Thursday. Something happened about the schedule.' What is your first action?",
              choices: [
                {
                  label: "Call both Keisha and Damian into your office immediately for a joint meeting",
                  nextNodeId: "joint-first",
                  feedback: "Forcing an immediate joint meeting without understanding the issue first can escalate tensions, especially in Caribbean culture where people need to be heard individually before a group discussion.",
                  isOptimal: false,
                },
                {
                  label: "Pull Keisha aside privately during a quiet moment to hear her perspective, then do the same with Damian",
                  nextNodeId: "individual-first",
                  feedback: "Excellent. Meeting each person individually first shows respect, allows them to speak freely, and gives you a clear picture of both perspectives before attempting resolution.",
                  isOptimal: true,
                },
                {
                  label: "Ignore it — they are adults and should sort it out themselves",
                  nextNodeId: "ignore-conflict",
                  feedback: "Ignoring workplace conflict that is visible to patients and colleagues is a management failure. The tension will escalate, patient care will suffer, and your authority as a leader will erode.",
                  isOptimal: false,
                },
              ],
            },
            {
              id: "individual-first",
              text: "You speak with Keisha first. She explains that Damian swapped his Saturday shift with her without asking, by going directly to you (the supervisor) and getting it approved. She had plans for that Saturday and feels disrespected. Damian, when you speak to him, says he needed Saturday off for a family event and thought getting supervisor approval was sufficient. He did not realise Keisha would be upset. The core issue is a schedule change made without consulting the affected person. How do you proceed?",
              choices: [
                {
                  label: "Bring Keisha and Damian together, acknowledge the miscommunication, take responsibility for approving the swap without checking with Keisha, and establish a new policy",
                  nextNodeId: "optimal-resolution",
                  feedback: "Outstanding. You identified the system failure (no swap policy), took ownership of your role in the problem, and used the conflict as an opportunity to create a better process.",
                  isOptimal: true,
                },
                {
                  label: "Tell Damian he was wrong and must apologise to Keisha",
                  nextNodeId: "blame-one",
                  feedback: "Placing all blame on Damian is unfair — he did seek supervisor approval. The system allowed this to happen. One-sided blame will breed resentment.",
                  isOptimal: false,
                },
                {
                  label: "Tell Keisha to just accept it because the schedule is the supervisor's decision",
                  nextNodeId: "dismiss-keisha",
                  feedback: "Dismissing Keisha's legitimate concern about not being consulted undermines trust and does not resolve the underlying issue. She will remain resentful and disengaged.",
                  isOptimal: false,
                },
              ],
            },
            {
              id: "optimal-resolution",
              text: "You bring Keisha and Damian together in a private setting. You start by taking responsibility: 'I approved the swap without checking with you, Keisha, and that was my mistake.' You facilitate a respectful conversation where both acknowledge their perspectives. Together, you establish a new policy: all shift swaps must be agreed by both parties before supervisor approval. Keisha and Damian shake hands. The tension visibly eases over the next few days.",
              isEnd: true,
              outcome: "success",
              summary: "You demonstrated excellent leadership by: (1) addressing the conflict promptly, (2) hearing both sides individually first, (3) taking responsibility for your role in the problem, (4) facilitating a joint resolution, and (5) creating a systemic fix (new swap policy) to prevent recurrence. This is culturally appropriate conflict resolution in a Caribbean workplace.",
            },
            {
              id: "joint-first",
              text: "You call both into your office. Keisha immediately becomes defensive and Damian shuts down. Neither feels comfortable speaking openly in front of the other without having been heard individually first. The meeting devolves into terse one-word answers and crossed arms. You end the meeting without resolution, and the tension continues for the rest of the week.",
              isEnd: true,
              outcome: "partial",
              summary: "Jumping to a joint meeting without individual conversations first is a common mistake. In Caribbean culture, people need to feel heard and respected individually before they can engage in productive joint dialogue. Next time, speak with each person privately first to understand their perspective.",
            },
            {
              id: "ignore-conflict",
              text: "Over the next two weeks, the conflict worsens. Keisha requests a transfer to another pharmacy. Damian starts calling in sick on days he is scheduled with Keisha. Assistant Carla is caught in the middle and becomes stressed. A regular patient, Mrs. Joseph, tells you she noticed the 'bad vibes' and is considering going to the pharmacy down the road. You have lost a technician, staff morale is at rock bottom, and patients are leaving.",
              isEnd: true,
              outcome: "failure",
              summary: "Ignoring workplace conflict never makes it go away — it makes it worse. As a supervisor, you have a responsibility to address interpersonal issues before they impact patient care, staff retention, and the pharmacy's reputation. Early intervention, even when uncomfortable, is always the better path.",
            },
            {
              id: "blame-one",
              text: "Damian apologises under pressure but feels unfairly blamed — he had sought your approval for the swap. He becomes resentful toward you and disengaged at work. Keisha feels vindicated but senses that the resolution was forced, not genuine. The surface tension eases, but underlying trust issues remain. Two months later, Damian hands in his resignation, citing 'unfair management'.",
              isEnd: true,
              outcome: "failure",
              summary: "When a conflict has multiple contributing factors — including a system gap (no swap policy) and your own oversight in approving the swap without consultation — placing blame on one party is unjust and counterproductive. Effective conflict resolution examines the system, not just the individuals.",
            },
            {
              id: "dismiss-keisha",
              text: "Keisha goes quiet but seethes internally. She stops volunteering for extra duties, does the bare minimum, and begins looking for other employment. Her relationship with you, her supervisor, is damaged — she no longer trusts that you have her interests at heart. Within a month, she accepts a position at a competing pharmacy, citing 'feeling undervalued'. You are now short-staffed.",
              isEnd: true,
              outcome: "failure",
              summary: "Dismissing a team member's legitimate concern erodes trust and leads to disengagement. Keisha's issue was not about the schedule itself but about respect — not being consulted about a change that directly affected her. In Caribbean workplace culture, feeling respected is a fundamental need.",
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Leading Through Change",
        },
        {
          type: "text",
          body: "Caribbean pharmacies face constant change: new government programme requirements, updated formularies, new software systems, regulatory changes, or restructuring. How a supervisor introduces and manages change determines whether the team embraces it or resists it. Change resistance is natural and should be expected — the key is managing it constructively.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Kotter's Change Model — Simplified for Pharmacy",
          body: "Professor John Kotter's change management model can be simplified for pharmacy teams: (1) Create urgency — explain WHY the change is needed. (2) Build a coalition — get your senior technician and pharmacist on board first. (3) Communicate the vision — paint a picture of how things will be better after the change. (4) Remove obstacles — address practical concerns (training, time, resources). (5) Create quick wins — show early results to build momentum. (6) Embed the change — update SOPs, train all staff, and make the new way the normal way.",
        },
        {
          type: "knowledge-check",
          question: "When introducing a new pharmacy management software system, what should the supervisor do FIRST?",
          options: [
            "Install the software and tell staff to start using it immediately",
            "Send staff on a training course without explaining why the change is happening",
            "Explain why the change is needed and how it will benefit the team and patients",
            "Ask staff to vote on whether they want the new system",
          ],
          correctIndex: 2,
          explanation:
            "The first step in change management is creating urgency and communicating the 'why'. Staff need to understand the reason for the change and how it will benefit them and their patients before they can be expected to embrace it. Training (how) comes after understanding (why).",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m3-q1",
      question:
        "Which statement BEST distinguishes leadership from management in a pharmacy context?",
      options: [
        "Leaders create the schedule; managers motivate the team",
        "Management ensures SOPs are followed; leadership inspires staff to care about why SOPs matter",
        "Leaders are always pharmacists; managers can be technicians",
        "Management is about long-term vision; leadership is about daily tasks",
      ],
      correctIndex: 1,
      explanation:
        "Management is about systems and processes (ensuring SOPs are followed, schedules are made, claims are submitted), while leadership is about people and purpose (inspiring the team to care about patient safety, mentoring staff, building culture). Effective pharmacy supervisors do both.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q2",
      question:
        "According to situational leadership theory, what style should a supervisor use with a highly competent, highly committed pharmacy technician?",
      options: [
        "Directing — providing detailed instructions for each task",
        "Coaching — explaining decisions and soliciting input",
        "Supporting — facilitating and encouraging",
        "Delegating — turning over responsibility for decisions and implementation",
      ],
      correctIndex: 3,
      explanation:
        "A staff member with high competence and high commitment (the ideal combination) should be given a delegating style — trusted with responsibility and autonomy. Micro-managing an experienced, motivated technician would be demotivating and a poor use of supervisor time.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q3",
      question:
        "In Caribbean workplace culture, which conflict resolution approach is MOST culturally appropriate?",
      options: [
        "Publicly address the conflict at a team meeting so everyone can learn from it",
        "Send a group email outlining the expected behaviours",
        "Meet each person individually first, then facilitate a private joint conversation",
        "Report the conflict to the pharmacy owner without speaking to the staff involved",
      ],
      correctIndex: 2,
      explanation:
        "In Caribbean culture, where personal dignity and respect are highly valued, individual private conversations before any joint discussion are essential. Public confrontation or group emails about interpersonal conflict are deeply inappropriate and will damage rather than repair relationships.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m3-q4",
      questionType: "true_false",
      question: "When a pharmacy supervisor delegates a task to a technician, the supervisor is no longer responsible for the outcome of that task.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "False. Delegation transfers authority (the right to act) but not responsibility (accountability for the outcome). The supervisor remains ultimately responsible for ensuring that delegated tasks are completed correctly and must establish review and oversight processes.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q5",
      question:
        "Which motivational factor is MOST powerful for Caribbean pharmacy professionals, according to research?",
      options: [
        "Annual salary increases above inflation",
        "Recognition for good work, growth opportunities, and a sense of purpose",
        "Reduced working hours and more time off",
        "A larger staff break room and better parking",
      ],
      correctIndex: 1,
      explanation:
        "While fair compensation is a baseline requirement (Herzberg's hygiene factor), the most powerful motivators are intrinsic: recognition for good work, opportunities to learn and grow, and a sense of purpose — knowing that their work directly helps patients. These 'motivators' drive engagement and loyalty beyond what salary alone can achieve.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q6",
      question:
        "A pharmacy is implementing a new electronic dispensing system. Staff are resistant. According to Kotter's change model, what is the FIRST step?",
      options: [
        "Mandate that all staff complete training by Friday",
        "Fire the most resistant staff member as an example",
        "Create urgency by explaining why the current system is inadequate and how the new system benefits patients and staff",
        "Install the system and remove access to the old one so staff have no choice",
      ],
      correctIndex: 2,
      explanation:
        "The first step in Kotter's change model is creating urgency — helping the team understand WHY the change is needed. Without understanding the rationale, staff will resist. Training (how) and implementation come after the team understands and accepts the need for change.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q7",
      questionType: "ordering",
      question: "Place Kotter's simplified change management steps in the correct order for introducing a new pharmacy policy:",
      options: [
        "Create urgency — explain why the change is needed",
        "Build a coalition — get key team members on board",
        "Communicate the vision of the improved future",
        "Remove obstacles and address practical concerns",
        "Create quick wins to build momentum",
        "Embed the change into SOPs and routine",
      ],
      correctIndex: 0,
      questionData: {
        correct_order: [0, 1, 2, 3, 4, 5],
      },
      explanation:
        "Kotter's model follows a logical sequence: first create urgency (why), then build support (who), then communicate the vision (what), then address barriers (how), then demonstrate early results (proof), and finally embed the change permanently (sustain). Skipping steps — especially urgency and coalition — is the most common reason change initiatives fail.",
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q8",
      question:
        "The 'yard culture' concept in Caribbean workplaces refers to:",
      options: [
        "The requirement for a physical outdoor break area in every pharmacy",
        "The tendency for Caribbean teams to function like an extended family with close personal bonds",
        "A government regulation about workspace size in pharmacies",
        "The practice of growing medicinal herbs in the pharmacy garden",
      ],
      correctIndex: 1,
      explanation:
        "The 'yard culture' in Caribbean workplaces describes the tendency for teams to develop close, family-like bonds — celebrating together, supporting each other through personal challenges, and building loyalty through relationships. Effective supervisors nurture this culture while maintaining professional boundaries.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q9",
      question:
        "A pharmacy supervisor notices that a senior technician has become disengaged — doing the minimum, no longer volunteering for extra tasks, and arriving exactly at start time and leaving exactly at end time. According to Herzberg's theory, this behaviour MOST likely indicates:",
      options: [
        "The technician is physically unwell",
        "Hygiene factors (salary, conditions) are adequate, but motivators (recognition, growth, purpose) are lacking",
        "The technician is planning to open their own pharmacy",
        "The pharmacy is overstaffed and the technician has nothing to do",
      ],
      correctIndex: 1,
      explanation:
        "Herzberg's Two-Factor Theory distinguishes between hygiene factors (which prevent dissatisfaction) and motivators (which drive engagement). A technically competent employee who does the minimum without complaint but shows no initiative is likely experiencing adequate hygiene factors but insufficient motivators — recognition, growth opportunities, and meaningful work.",
      difficulty: "hard",
      bloomsLevel: "analyze",
    },
    {
      id: "m3-q10",
      question:
        "When delegating the task of drafting the weekly staff schedule to a senior technician, the pharmacy supervisor should:",
      options: [
        "Give the technician complete freedom with no guidelines or review",
        "Provide clear parameters (pharmacist coverage required, peak-hour staffing levels, overtime budget) and review the draft before finalisation",
        "Create the schedule themselves and have the technician type it up",
        "Tell the technician to ask each staff member what hours they prefer and accommodate everyone",
      ],
      correctIndex: 1,
      explanation:
        "Effective delegation involves providing clear parameters (the 'what' and 'boundaries'), allowing autonomy in execution (the 'how'), and maintaining oversight through review. Giving no guidelines risks errors; doing the work yourself and asking someone to type it up is not delegation; and fully accommodating preferences without parameters ignores operational needs.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 4 — Pharmacy Informatics & Technology Management
// ============================================================================

const module4: Module = {
  id: "m4-informatics-technology",
  number: 4,
  title: "Pharmacy Informatics & Technology Management",
  description:
    "Navigate the pharmacy technology landscape in the Caribbean. From selecting and implementing pharmacy management systems to leveraging data for better decision-making, this module prepares you to manage the digital tools that power modern pharmacy operations.",
  learningObjectives: [
    "Compare pharmacy management software systems commonly used across the Caribbean",
    "Evaluate the key features required in a pharmacy management system for Caribbean practice",
    "Apply data analytics to improve inventory management, patient care, and financial performance",
    "Assess cybersecurity and data protection requirements for Caribbean pharmacy operations",
    "Design a technology implementation plan for a Caribbean community pharmacy",
  ],
  lessons: [
    // ── Lesson 4.1 ──
    {
      id: "m4-l1",
      title: "Pharmacy Management Software in the Caribbean",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Digital Backbone of Modern Pharmacy",
        },
        {
          type: "text",
          body: "A pharmacy management system (PMS) is the central software platform that handles dispensing workflows, inventory management, patient records, insurance claims processing, and reporting. In the Caribbean, the choice of PMS is complicated by several factors: the need to support multiple government programme integrations (CDAP, NHF), limited local technical support for international products, internet reliability issues, and the cost of licensing for small independent pharmacies.",
        },
        {
          type: "text",
          body: "The Caribbean pharmacy software landscape includes a mix of international products adapted for the region, purpose-built Caribbean systems, and — in some smaller pharmacies — no computerised system at all, with everything still managed on paper and manual records. As a pharmacy manager, understanding the options and their trade-offs is essential for making sound technology decisions.",
        },
        {
          type: "key-term",
          term: "Pharmacy Management System (PMS)",
          definition:
            "Integrated software that manages the full pharmacy workflow: prescription intake, dispensing, labelling, inventory control, patient profiles, insurance claims, reporting, and regulatory compliance. A good PMS is the single most important technology investment a pharmacy can make.",
        },
        {
          type: "table",
          caption: "Pharmacy Software Systems Used in the Caribbean",
          headers: ["System", "Type", "Common In", "Key Features", "Considerations"],
          rows: [
            [
              "McKesson PharmaClik / EnterpriseRx",
              "International (adapted)",
              "Larger chain pharmacies across the region",
              "Full dispensing workflow, inventory, reporting, HL7 integration capability",
              "Higher cost; requires reliable internet; North American-centric design; may need local customisation for Caribbean programmes",
            ],
            [
              "Minfos",
              "International (Australian origin)",
              "Some Caribbean pharmacies, particularly those with Australian-trained pharmacists",
              "Dispensing, POS, stock management, customer loyalty",
              "Well-suited to independent pharmacy; requires adapting for Caribbean insurance programmes; good reporting",
            ],
            [
              "Simple Pharmacy / Rx30",
              "International",
              "Medium-sized Caribbean pharmacies",
              "Dispensing, claims, inventory, POS integration",
              "Moderate cost; may require customisation for Caribbean formularies and programme requirements",
            ],
            [
              "Local/Custom Systems",
              "Caribbean-built",
              "Independent pharmacies across T&T, Jamaica, Barbados",
              "Tailored for local insurance programmes, formularies, and regulatory requirements",
              "Best Caribbean fit; limited features compared to international products; vendor dependency risk",
            ],
            [
              "Manual/Paper-based",
              "Non-digital",
              "Smaller, rural, or older pharmacies",
              "Prescription logbooks, manual stock cards, paper-based insurance claims",
              "Zero technology cost; extremely limited reporting; high error risk; slow claims processing",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Vendor Lock-In Risk",
          body: "When selecting a PMS, consider what happens if the vendor goes out of business, raises prices significantly, or stops supporting the product. Caribbean-built systems often have a single developer or small team — a 'bus factor' problem. Always ask: Can we export our data? Is the data format standard or proprietary? What happens to our patient records and financial data if we switch systems?",
        },
        {
          type: "heading",
          level: 3,
          text: "Key Features to Evaluate",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "CDAP/NHF integration: Can the system generate and submit claims electronically for your island's government programme?",
            "Formulary management: Does it support the Caribbean formularies and drug databases you work with?",
            "Inventory with expiry tracking: Does it alert for approaching expiry dates and support FEFO rotation?",
            "Multi-location support: If you have more than one branch, can the system manage stock transfers and consolidated reporting?",
            "Offline capability: Caribbean internet can be unreliable — can the system continue operating during outages and sync when connectivity returns?",
            "Reporting and analytics: Can it generate the financial and operational reports you need for business decisions?",
            "Data backup and security: Where is data stored? Is it encrypted? How are backups managed?",
          ],
        },
        {
          type: "knowledge-check",
          question: "Which feature is MOST critical when evaluating a pharmacy management system for a Caribbean community pharmacy?",
          options: [
            "Advanced AI-powered drug interaction checking",
            "Integration with local government insurance programme claims (e.g., CDAP, NHF)",
            "Virtual reality training modules for staff",
            "Social media integration for pharmacy marketing",
          ],
          correctIndex: 1,
          explanation:
            "For Caribbean pharmacies, integration with government insurance programme claims (CDAP, NHF, etc.) is the most critical feature. These programmes represent a significant portion of revenue, and manual claims processing is slow, error-prone, and delays reimbursement. All other features, while potentially useful, are secondary to this core business requirement.",
        },
      ],
    },
    // ── Lesson 4.2 ──
    {
      id: "m4-l2",
      title: "Data-Driven Decision Making for Pharmacy Managers",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Turning Pharmacy Data Into Actionable Insights",
        },
        {
          type: "text",
          body: "Every pharmacy generates vast amounts of data daily: prescription volumes, dispensing times, inventory levels, sales figures, insurance claim outcomes, patient demographics, and more. Most of this data sits unused in PMS databases. Pharmacy managers who learn to extract, analyse, and act on this data gain a significant competitive advantage — they can predict demand, optimise stock levels, identify profitable product categories, and detect operational inefficiencies.",
        },
        {
          type: "key-term",
          term: "Pharmacy Analytics",
          definition:
            "The systematic analysis of pharmacy operational data to support decision-making. This includes descriptive analytics (what happened — e.g., sales reports), diagnostic analytics (why it happened — e.g., why did a particular product's sales drop), predictive analytics (what will happen — e.g., demand forecasting), and prescriptive analytics (what should we do — e.g., optimal reorder quantities).",
        },
        {
          type: "heading",
          level: 3,
          text: "Key Reports Every Pharmacy Manager Should Review",
        },
        {
          type: "table",
          caption: "Essential Pharmacy Management Reports",
          headers: ["Report", "Frequency", "What It Tells You", "Action Triggers"],
          rows: [
            [
              "Daily Sales Summary",
              "Daily",
              "Total revenue, prescription count, average transaction value, cash vs. insurance split",
              "Sudden drop in prescriptions may indicate a problem (e.g., nearby doctor closed, competitor opened)",
            ],
            [
              "Inventory Ageing Report",
              "Weekly",
              "Products approaching expiry, slow-moving stock, dead stock",
              "Products within 3 months of expiry → return to vendor, promote, or write off",
            ],
            [
              "Insurance Claims Summary",
              "Weekly",
              "Claims submitted, approved, rejected, pending; reimbursement amounts and timelines",
              "Rejection rate above 5% → review documentation and eligibility verification processes",
            ],
            [
              "Gross Margin by Category",
              "Monthly",
              "Profitability of each product category (Rx, OTC, health & beauty, sundries)",
              "Declining margins → renegotiate with suppliers, review pricing, or discontinue unprofitable lines",
            ],
            [
              "Staff Productivity Report",
              "Monthly",
              "Prescriptions dispensed per technician, dispensing accuracy, customer service metrics",
              "Identify training needs, recognise top performers, address underperformance",
            ],
          ],
        },
        {
          type: "text",
          body: "In practice, many Caribbean pharmacies review financial data only when problems arise — a reactive approach. Proactive data review means scheduling weekly and monthly report reviews as non-negotiable management tasks. Even 30 minutes per week reviewing key reports can transform how you manage your pharmacy.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "ABC Analysis for Inventory Optimisation",
          body: "Apply the Pareto Principle (80/20 rule) to your inventory: 'A' items (top 20% of products by revenue, typically representing 80% of sales value) deserve the closest management attention — tight stock control, frequent reordering, and careful margin analysis. 'B' items (next 30%) need moderate attention. 'C' items (bottom 50%) are low-value and can be managed with simpler reorder rules. Most Caribbean pharmacies find that 50–80 SKUs generate the majority of their revenue.",
        },
        {
          type: "knowledge-check",
          question: "A pharmacy's insurance claim rejection rate has risen from 3% to 12% over the past month. What should the manager investigate FIRST?",
          options: [
            "Whether the pharmacy management software has a bug",
            "Whether the documentation and eligibility verification processes have been followed correctly",
            "Whether the insurance programme has changed its reimbursement rates",
            "Whether patients have been submitting fraudulent claims",
          ],
          correctIndex: 1,
          explanation:
            "A sudden spike in rejection rates most commonly indicates a breakdown in the claims documentation or eligibility verification processes — perhaps a new staff member is not completing forms correctly, or patient eligibility is not being checked at the point of dispensing. This is the most likely and most immediately addressable cause.",
        },
      ],
    },
    // ── Lesson 4.3 ──
    {
      id: "m4-l3",
      title: "Cybersecurity & Data Protection in Caribbean Pharmacy",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Protecting Patient Data and Pharmacy Systems",
        },
        {
          type: "text",
          body: "Pharmacies hold some of the most sensitive personal data imaginable: patient names, addresses, dates of birth, medical conditions, medications, and sometimes payment information. A data breach at a pharmacy can expose intimate health details — that a patient is HIV-positive, is taking psychiatric medication, or is being treated for a sexually transmitted infection. In small Caribbean communities where privacy is already limited, such a breach could have devastating personal consequences for patients.",
        },
        {
          type: "text",
          body: "Caribbean pharmacies face growing cybersecurity threats: ransomware attacks that lock pharmacy systems and demand payment, phishing emails targeting staff, and the simple but common risk of stolen or lost laptops containing patient data. Many Caribbean pharmacies have no formal cybersecurity policy or training, making them attractive targets.",
        },
        {
          type: "island-comparison",
          title: "Data Protection Legislation Across the Caribbean",
          description:
            "Data protection laws are evolving rapidly across the Caribbean. Pharmacy managers must understand their obligations under the legislation that applies to their jurisdiction.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "The Data Protection Act (2011, proclaimed 2017) governs the collection, processing, and storage of personal data",
                "Pharmacies are 'data controllers' under the Act and must register with the Office of the Information Commissioner",
                "Patient consent is required for collecting and processing health data",
                "Data breaches must be reported; penalties for non-compliance include fines up to TT$100,000",
                "The Act requires 'appropriate technical and organisational measures' to protect data — this includes pharmacy IT security",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "The Data Protection Act (2020) establishes rights for data subjects and obligations for data controllers",
                "The Office of the Information Commissioner oversees compliance",
                "Pharmacies must obtain informed consent for processing personal health data",
                "The Act requires data protection impact assessments for high-risk processing (health data qualifies)",
                "Penalties for non-compliance include fines up to J$2 million",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "The Data Protection Act (2019) came into effect in 2021",
                "Establishes the Data Protection Commissioner to oversee compliance",
                "Pharmacies handling health data must implement 'appropriate safeguards' for sensitive personal data",
                "Patient data must not be retained longer than necessary for the purpose for which it was collected",
                "Cross-border data transfers (e.g., cloud-based PMS servers outside Barbados) require adequate protection",
              ],
            },
          ],
        },
        {
          type: "key-term",
          term: "Ransomware",
          definition:
            "Malicious software that encrypts a victim's files and demands a ransom payment (typically in cryptocurrency) for the decryption key. In a pharmacy context, a ransomware attack can lock patient records, dispensing systems, and financial data, forcing the pharmacy to either pay the ransom or rebuild from backups.",
        },
        {
          type: "heading",
          level: 3,
          text: "Essential Cybersecurity Measures for Pharmacies",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Implement strong passwords and multi-factor authentication on all pharmacy systems",
            "Keep all software (PMS, operating system, antivirus) updated with the latest security patches",
            "Perform daily automated backups to an offsite location (cloud or separate physical site)",
            "Train all staff to recognise phishing emails, suspicious links, and social engineering attacks",
            "Restrict system access based on role — a cashier does not need access to patient records",
            "Encrypt all devices containing patient data (laptops, tablets, USB drives)",
            "Develop and test a disaster recovery plan — know exactly what to do if systems are compromised",
            "Lock workstations when unattended; auto-lock after 5 minutes of inactivity",
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "The WhatsApp Problem",
          body: "In many Caribbean pharmacies, staff use WhatsApp to communicate prescription queries, share patient information with doctors, and coordinate between branches. While convenient, WhatsApp is not a HIPAA-compliant or data-protection-compliant channel for sharing identifiable patient health information. A lost or stolen phone with patient data in WhatsApp messages is a data breach. Establish a policy: no patient-identifiable information on personal messaging apps.",
        },
        {
          type: "knowledge-check",
          question: "A pharmacy technician wants to send a photo of a prescription to the pharmacist via WhatsApp for clarification. What is the correct action?",
          options: [
            "Send it immediately — speed is important for patient care",
            "Remove or cover the patient's name and any identifying information before sending, or use the pharmacy's secure communication channel",
            "Ask the patient for permission to share the photo on WhatsApp",
            "WhatsApp is always fine because it uses end-to-end encryption",
          ],
          correctIndex: 1,
          explanation:
            "Patient-identifiable health information should never be shared via personal messaging apps like WhatsApp without removing all identifying details. While WhatsApp has encryption, the data resides on personal devices that may be lost, stolen, or accessed by others. The ideal solution is a secure, pharmacy-approved communication channel. If WhatsApp must be used in an emergency, all patient identifiers must be removed from the image.",
        },
      ],
    },
    // ── Lesson 4.4 ──
    {
      id: "m4-l4",
      title: "Implementing Technology Change in Your Pharmacy",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "From Selection to Go-Live: Managing a Technology Transition",
        },
        {
          type: "text",
          body: "Implementing a new pharmacy management system — or any significant technology change — is one of the most disruptive events a pharmacy can undergo. Prescriptions must be dispensed without interruption throughout the transition, patient safety cannot be compromised, and staff must learn new workflows while maintaining their current workload. A poorly managed technology implementation can cost months of productivity and significant financial loss.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Implementation Roadmap",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Needs assessment: Document your current pain points, must-have features, and nice-to-have features before talking to vendors",
            "Vendor evaluation: Demo at least three systems; involve frontline staff in the evaluation — they will use it daily",
            "Data migration planning: How will existing patient records, inventory data, and financial history be transferred? This is often the most complex and risky step",
            "Staff training: Train all staff BEFORE go-live, not during. Allow practice time on the new system using test data",
            "Parallel running: Run both old and new systems simultaneously for a defined period (typically 2–4 weeks) to catch discrepancies",
            "Go-live: Choose a low-volume period (avoid month-end, public holidays). Have vendor support on-site or on-call",
            "Post-implementation review: After 30, 60, and 90 days, review what is working and what needs adjustment",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Champion Approach",
          body: "Identify one or two 'technology champions' within your team — staff members who are comfortable with technology and enthusiastic about the change. Train them first and deeply. During the transition, they become the first point of support for colleagues. In Caribbean workplaces, people are more likely to ask a peer for help than to admit confusion to a supervisor or external trainer.",
        },
        {
          type: "table",
          caption: "Common Technology Implementation Pitfalls",
          headers: ["Pitfall", "Consequence", "Prevention"],
          rows: [
            [
              "Insufficient training time",
              "Staff revert to old methods or make errors on the new system",
              "Allocate minimum 2 weeks of training before go-live; include hands-on practice",
            ],
            [
              "No data migration plan",
              "Patient histories lost; inventory counts inaccurate; financial records incomplete",
              "Map every data field from old system to new; validate migrated data before go-live",
            ],
            [
              "Going live on a busy day",
              "System issues compound with high patient volume, creating chaos",
              "Schedule go-live for a Tuesday or Wednesday in a quiet period; have extra staff rostered",
            ],
            [
              "No rollback plan",
              "If the new system fails, there is no way to revert to the old system quickly",
              "Maintain the old system in parallel for at least 2 weeks; keep manual dispensing backup procedures ready",
            ],
            [
              "Ignoring staff resistance",
              "Passive non-adoption; staff find workarounds that bypass the system",
              "Involve staff early; address concerns; demonstrate benefits; celebrate early adopters",
            ],
          ],
        },
        {
          type: "case-study",
          title: "Case Study: The Digital Transition at Heritage Pharmacy",
          scenario:
            "Heritage Pharmacy in Bridgetown, Barbados, has been using a paper-based dispensing system for 22 years. The owner decides to implement a digital pharmacy management system after repeated insurance claim delays and inventory discrepancies. The two senior technicians, both with 15+ years of experience, are resistant — they know the paper system inside out and do not trust computers. The junior technician, recently qualified from a training programme, is enthusiastic about the change.",
          questions: [
            "How should the pharmacy manager address the resistance of the senior technicians?",
            "What role could the junior technician play in the implementation?",
            "How long should the parallel-running period be for a pharmacy transitioning from paper to digital for the first time?",
          ],
          discussion:
            "The senior technicians' resistance is rooted in legitimate concerns: they are competent in the current system and fear becoming incompetent in the new one. The manager should: (1) acknowledge their expertise and reassure them that their knowledge of pharmacy practice is invaluable regardless of the system, (2) involve them in vendor evaluation so they feel ownership, (3) provide generous, unhurried training with plenty of hands-on practice, and (4) assign the junior technician as the 'technology champion' who supports colleagues during the transition. For a first-time paper-to-digital transition, a 4-week parallel-running period is advisable — longer than the typical 2 weeks for system-to-system transitions, because the team is learning entirely new workflows.",
        },
        {
          type: "knowledge-check",
          question: "During a pharmacy management system implementation, what is the purpose of 'parallel running'?",
          options: [
            "Running two different pharmacies at the same time",
            "Operating both the old and new systems simultaneously to verify accuracy and catch discrepancies",
            "Having two technicians do the same task independently to increase speed",
            "Running the new system on two different computers to test reliability",
          ],
          correctIndex: 1,
          explanation:
            "Parallel running means operating both the old and new systems simultaneously for a defined period (typically 2–4 weeks). Every transaction is processed on both systems, and the results are compared. This catches data migration errors, workflow gaps, and system bugs before the old system is retired.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m4-q1",
      question:
        "Which of the following is the MOST significant challenge when selecting pharmacy management software for a Caribbean community pharmacy?",
      options: [
        "The software does not have a mobile app",
        "Integration with local government insurance programme claims processing",
        "The software interface is not available in French",
        "The software does not include a social media module",
      ],
      correctIndex: 1,
      explanation:
        "Integration with government insurance programmes (CDAP, NHF, Barbados Drug Benefit) is the most significant practical challenge. These programmes represent a major revenue stream, and the system must be able to generate compliant claims, submit them electronically where possible, and track reimbursement status.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q2",
      question:
        "ABC inventory analysis reveals that the top 20% of a pharmacy's products generate approximately what percentage of total sales revenue?",
      options: [
        "20%",
        "50%",
        "80%",
        "95%",
      ],
      correctIndex: 2,
      explanation:
        "The Pareto Principle (80/20 rule) applied to pharmacy inventory typically shows that the top 20% of products ('A' items) generate approximately 80% of total sales revenue. These items deserve the closest management attention — tight stock control, frequent reordering, and careful margin analysis.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q3",
      question:
        "Under Trinidad & Tobago's Data Protection Act, a pharmacy that experiences a data breach involving patient health information must:",
      options: [
        "Do nothing if fewer than 10 patients are affected",
        "Report the breach only if a patient complains",
        "Report the breach to the Office of the Information Commissioner and affected patients",
        "Delete the compromised records to prevent further exposure",
      ],
      correctIndex: 2,
      explanation:
        "Under Trinidad & Tobago's Data Protection Act, data breaches involving personal data must be reported to the Office of the Information Commissioner. Affected individuals should also be notified, particularly when health data is involved, as they may need to take protective action. Deleting records would be destruction of evidence.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q4",
      questionType: "true_false",
      question: "WhatsApp is an acceptable channel for sharing patient prescription photos between pharmacy staff because it uses end-to-end encryption.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "False. While WhatsApp does use end-to-end encryption during transmission, patient-identifiable health data on personal devices creates significant risks: phones can be lost, stolen, or accessed by others. Caribbean data protection legislation requires 'appropriate safeguards' for health data, and personal messaging apps do not meet this standard. All patient identifiers must be removed before sharing, or a secure, pharmacy-approved channel should be used.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m4-q5",
      question:
        "When implementing a new pharmacy management system, what is the recommended approach for training staff?",
      options: [
        "Train staff during go-live so they learn by doing under real pressure",
        "Send written instructions by email and expect staff to self-study",
        "Train all staff BEFORE go-live with hands-on practice using test data",
        "Only train the pharmacist, who can then teach the technicians",
      ],
      correctIndex: 2,
      explanation:
        "All staff should be trained before go-live, using test data in a practice environment. Training during go-live creates chaos, written instructions are insufficient for complex software, and relying on a single person to cascade training introduces errors and delays.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q6",
      question:
        "A pharmacy's insurance claim rejection rate has increased from 3% to 12%. An analysis reveals that 80% of rejections are due to 'expired patient eligibility'. What is the MOST effective systemic intervention?",
      options: [
        "Submit claims faster before eligibility expires",
        "Implement mandatory eligibility verification at the point of dispensing, with PMS prompts",
        "Send patients letters reminding them to renew their cards",
        "Stop accepting insurance patients to eliminate rejections",
      ],
      correctIndex: 1,
      explanation:
        "A systemic intervention — building mandatory eligibility verification into the dispensing workflow with PMS prompts — addresses the root cause at the point where the error occurs. This is more reliable than individual reminders or downstream fixes because it prevents the problem from occurring rather than trying to catch it later.",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m4-q7",
      questionType: "multiple_select",
      question: "Which of the following are essential cybersecurity measures for a Caribbean community pharmacy? (Select all that apply)",
      options: [
        "Daily automated backups to an offsite location",
        "Strong passwords and multi-factor authentication",
        "Staff training on phishing and social engineering",
        "Giving all staff full administrator access for convenience",
        "Role-based access control to limit data exposure",
      ],
      correctIndex: 0,
      questionData: {
        correct_indices: [0, 1, 2, 4],
      },
      explanation:
        "Daily offsite backups, strong authentication, phishing awareness training, and role-based access control are all essential cybersecurity measures. Giving all staff administrator access is the opposite of security best practice — it increases the attack surface and makes it impossible to trace actions to specific users.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q8",
      question:
        "The 'technology champion' approach to PMS implementation involves:",
      options: [
        "Hiring an external IT consultant to run the entire implementation",
        "Having the pharmacy owner make all technology decisions unilaterally",
        "Identifying enthusiastic staff members, training them deeply, and using them as peer support during the transition",
        "Selecting the most expensive system to ensure quality",
      ],
      correctIndex: 2,
      explanation:
        "The technology champion approach identifies staff who are comfortable with technology, trains them early and deeply in the new system, and positions them as peer supporters during the transition. In Caribbean workplaces, colleagues are more likely to seek help from a trusted peer than from a supervisor or external trainer.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q9",
      question:
        "What is the MOST critical risk during data migration from an old pharmacy system to a new one?",
      options: [
        "The new system's interface colour scheme is different",
        "Loss or corruption of patient records, inventory data, and financial history",
        "Staff having to use two monitors simultaneously",
        "Internet speed slowing down during the transfer",
      ],
      correctIndex: 1,
      explanation:
        "Data migration is the most technically complex and risky step in PMS implementation. Patient records, dispensing history, inventory data, and financial records must be accurately transferred. Data loss, corruption, or incomplete migration can compromise patient safety (lost allergy records), financial accuracy (wrong inventory counts), and regulatory compliance.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m4-q10",
      question:
        "For a pharmacy transitioning from a paper-based system to its first digital PMS, the recommended parallel-running period is:",
      options: [
        "1 week",
        "2 weeks (same as system-to-system transition)",
        "4 weeks (longer than system-to-system transition)",
        "No parallel running is needed — just switch immediately",
      ],
      correctIndex: 2,
      explanation:
        "A first-time paper-to-digital transition requires a longer parallel-running period (typically 4 weeks) compared to a system-to-system transition (2 weeks). Staff are learning entirely new workflows, not just a different interface. The extended period allows the team to build confidence and catch errors before the paper system is retired.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 5 — Regulatory Compliance & Audit Management
// ============================================================================

const module5: Module = {
  id: "m5-regulatory-compliance",
  number: 5,
  title: "Regulatory Compliance & Audit Management",
  description:
    "Navigate the complex regulatory landscape governing Caribbean pharmacies. From pharmacy inspections and controlled substance audits to professional conduct requirements, this module ensures you can maintain compliance across multiple regulatory bodies.",
  learningObjectives: [
    "Identify the regulatory bodies governing pharmacy practice in Trinidad & Tobago, Jamaica, and Barbados",
    "Prepare a pharmacy for regulatory inspection and audit",
    "Implement controlled substance management protocols that meet Caribbean legal requirements",
    "Design internal audit schedules to maintain continuous regulatory compliance",
  ],
  lessons: [
    // ── Lesson 5.1 ──
    {
      id: "m5-l1",
      title: "Caribbean Pharmacy Regulatory Bodies & Frameworks",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Who Regulates Caribbean Pharmacies?",
        },
        {
          type: "text",
          body: "A Caribbean pharmacy does not answer to a single regulator — it must comply with multiple regulatory bodies simultaneously. The pharmacy board governs professional practice, the drug regulatory authority controls which medications can be imported and sold, the health ministry sets public health standards, the tax authority oversees VAT/GCT compliance, and data protection commissioners govern patient information handling. A compliance failure with any one of these bodies can result in fines, licence suspension, or criminal prosecution.",
        },
        {
          type: "text",
          body: "For pharmacy managers, understanding who regulates what — and when inspections are likely to occur — is essential for maintaining continuous compliance. The consequences of non-compliance in a small Caribbean community extend beyond legal penalties: news travels fast, and a pharmacy sanctioned by the board may lose the trust of patients and prescribers that took years to build.",
        },
        {
          type: "table",
          caption: "Regulatory Bodies Governing Caribbean Pharmacies",
          headers: ["Regulatory Body", "Jurisdiction", "What They Oversee", "Inspection Frequency"],
          rows: [
            [
              "Pharmacy Board of T&T",
              "Trinidad & Tobago",
              "Pharmacist registration, pharmacy premises licensing, scope of practice, professional conduct",
              "Routine inspections at least annually; unannounced inspections on complaint",
            ],
            [
              "Chemistry, Food & Drugs Division",
              "Trinidad & Tobago",
              "Drug importation, registration, scheduling, controlled substance permits",
              "Inspections on importation; periodic premises checks",
            ],
            [
              "Pharmacy Council of Jamaica",
              "Jamaica",
              "Pharmacist registration, pharmacy premises standards, professional discipline",
              "Annual licence renewal inspection; complaint-driven investigations",
            ],
            [
              "Standards & Regulation Division (Ministry of Health)",
              "Jamaica",
              "Drug registration, import permits, controlled substance management",
              "Regular inspections; pre-import verification",
            ],
            [
              "Barbados Drug Service / Pharmacy Council",
              "Barbados",
              "Pharmacy premises, pharmacist registration, drug supply chain integrity",
              "Annual renewal inspections; periodic compliance visits",
            ],
            [
              "CARPHA (Regional)",
              "All CARICOM states",
              "Regional pharmaceutical quality, laboratory testing, harmonisation",
              "Technical assessments and reference laboratory services",
            ],
          ],
        },
        {
          type: "key-term",
          term: "Controlled Substance",
          definition:
            "A drug or chemical substance whose possession, manufacture, distribution, and use are regulated by law due to their potential for abuse, dependence, or diversion. In the Caribbean, controlled substances are classified under the Dangerous Drugs Ordinance (T&T), the Dangerous Drugs Act (Jamaica), or the Drug Abuse Prevention and Control Act (Barbados). Common examples include morphine, codeine, diazepam, and pseudoephedrine.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Multi-Regulator Challenge",
          body: "A single Caribbean pharmacy may be required to maintain compliance with the Pharmacy Board, the Drug Regulatory Authority, the Ministry of Health, the tax authority (BIR, TAJ, or BRA), the data protection commissioner, the fire services (for storage requirements), and local municipal authorities. Each has different requirements, inspection schedules, and documentation expectations. A compliance calendar mapping all requirements and deadlines is not a luxury — it is a necessity.",
        },
        {
          type: "island-comparison",
          title: "Controlled Substance Regulations by Island",
          description:
            "Controlled substance management is one of the most heavily regulated aspects of pharmacy practice. Requirements vary by island and violations carry severe penalties.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Governed by the Dangerous Drugs Act and Regulations",
                "Schedule I (prohibited), Schedule II (restricted controlled substances, e.g., morphine, fentanyl), Schedule III (less restrictive)",
                "All controlled substance transactions must be recorded in the Dangerous Drugs Register (DDR) — a bound, consecutively numbered book",
                "DDR must be available for inspection at all times; discrepancies are treated as potential diversion",
                "Annual inventory of all controlled substances must be submitted to the Chief Medical Officer",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Governed by the Dangerous Drugs Act and the Pharmacy Act",
                "The National Council on Drug Abuse (NCDA) oversees drug control policy",
                "Controlled substances require a special prescription form (triplicate where applicable)",
                "Pharmacies must maintain a separate controlled substance register with running balances",
                "Inspections by the Pharmacy Council and narcotics police can be unannounced",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Governed by the Drug Abuse (Prevention and Control) Act",
                "The National Council on Substance Abuse provides policy guidance",
                "Controlled substances must be stored in a locked, designated area within the pharmacy",
                "Separate records for receipt, dispensing, and disposal of controlled substances",
                "Destruction of expired controlled substances must be witnessed by an authorised officer",
              ],
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "In Trinidad & Tobago, the Dangerous Drugs Register (DDR) for controlled substances must be:",
          options: [
            "A digital spreadsheet backed up to the cloud",
            "A bound, consecutively numbered book available for inspection at all times",
            "A loose-leaf folder that can be reorganised as needed",
            "Any format the pharmacist prefers, as long as records are kept",
          ],
          correctIndex: 1,
          explanation:
            "The DDR in Trinidad & Tobago must be a bound, consecutively numbered book — not a loose-leaf folder, digital file, or informal record. The bound format prevents pages from being removed or rearranged, and consecutive numbering ensures completeness. It must be available for inspection at all times.",
        },
      ],
    },
    // ── Lesson 5.2 ──
    {
      id: "m5-l2",
      title: "Preparing for and Surviving Pharmacy Inspections",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Inspection Readiness: Be Prepared Every Day",
        },
        {
          type: "text",
          body: "The best way to prepare for a pharmacy inspection is to operate every day as if the inspector will arrive tomorrow. This is not paranoia — it is professional practice. In the Caribbean, pharmacy inspections can be announced (scheduled in advance) or unannounced (triggered by a complaint, routine surveillance, or random selection). A pharmacy that scrambles to 'clean up' before an inspection likely has systemic compliance gaps that put patients at risk daily.",
        },
        {
          type: "heading",
          level: 3,
          text: "What Inspectors Look For",
        },
        {
          type: "table",
          caption: "Common Pharmacy Inspection Focus Areas",
          headers: ["Area", "What They Check", "Common Deficiencies Found"],
          rows: [
            [
              "Premises & Storage",
              "Temperature control, cleanliness, adequate space, separate storage for controlled substances, cold chain integrity",
              "No temperature monitoring logs, refrigerator without thermometer, controlled substance cabinet not locked",
            ],
            [
              "Dispensing Practices",
              "Prescription records, labelling accuracy, pharmacist supervision, patient counselling",
              "Incomplete prescription records, labels missing required information, dispensing without pharmacist present",
            ],
            [
              "Controlled Substances",
              "DDR accuracy, stock-to-register reconciliation, storage security, expiry management",
              "DDR discrepancies (stock does not match register), unsigned entries, expired controlled substances still in stock",
            ],
            [
              "Staff Qualifications",
              "Pharmacist registration current, technician training documentation, staff roles documented",
              "Lapsed pharmacist registration, no documented training for technicians, unclear role delineation",
            ],
            [
              "Documentation & Records",
              "SOP manual, prescription records retention, temperature logs, equipment maintenance records",
              "No written SOPs, gaps in temperature logs, prescription records not retained for the required period",
            ],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Self-Inspection Habit",
          body: "Conduct a monthly self-inspection using the same checklist that regulators use. Walk through your pharmacy as if you were the inspector. Check temperature logs, verify controlled substance counts against the DDR, review prescription records for completeness, confirm pharmacist registration is displayed and current. Fix any deficiency immediately. A monthly self-inspection takes 1–2 hours and can prevent catastrophic findings during an official inspection.",
        },
        {
          type: "heading",
          level: 3,
          text: "During the Inspection",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Welcome the inspector professionally — do not be defensive or hostile",
            "Ask to see their identification and note the inspection reference number",
            "Assign a senior staff member to accompany the inspector throughout the visit",
            "Answer questions honestly — do not volunteer information beyond what is asked, but never lie or conceal",
            "If the inspector identifies a deficiency, acknowledge it and ask for clarification on the required standard",
            "Take notes on all findings — you will need them for your corrective action plan",
            "After the inspection, obtain a copy of the inspection report and review it carefully",
            "Implement corrective actions promptly and document everything you have done to address each finding",
          ],
        },
        {
          type: "key-term",
          term: "Corrective and Preventive Action (CAPA)",
          definition:
            "A systematic approach to identifying, correcting, and preventing the recurrence of quality or compliance problems. 'Corrective action' fixes the immediate issue. 'Preventive action' addresses the root cause to prevent recurrence. Regulators expect to see both when following up on inspection findings.",
        },
        {
          type: "knowledge-check",
          question: "During a pharmacy inspection, the inspector finds that the temperature monitoring log has a 3-day gap from the previous week. What is the BEST response?",
          options: [
            "Explain that the pharmacy was closed for those three days",
            "Fill in the missing entries with approximate temperatures before the inspector notices",
            "Acknowledge the gap honestly, explain the cause, and describe the corrective measures you will implement to prevent future gaps",
            "Tell the inspector the log is kept elsewhere and you will send it later",
          ],
          correctIndex: 2,
          explanation:
            "Honesty is always the correct approach during an inspection. Acknowledge the gap, explain the root cause (staff absence, oversight, or system failure), and immediately describe the corrective action you will take — for example, implementing a daily checklist with sign-off, or assigning backup responsibility. Fabricating entries or making excuses can lead to more serious findings and loss of trust.",
        },
      ],
    },
    // ── Lesson 5.3 ──
    {
      id: "m5-l3",
      title: "Internal Audits & Continuous Compliance",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Building a Culture of Continuous Compliance",
        },
        {
          type: "text",
          body: "Regulatory compliance should not be an event (scrambling before an inspection) but a culture (how you operate every day). Internal audits are the mechanism through which pharmacy managers maintain this continuous compliance. A well-designed internal audit programme systematically reviews every aspect of pharmacy operations on a rotating schedule, ensuring that nothing falls through the cracks.",
        },
        {
          type: "table",
          caption: "Recommended Internal Audit Schedule for Caribbean Pharmacies",
          headers: ["Audit Area", "Frequency", "Responsible", "Key Checks"],
          rows: [
            [
              "Controlled Substance Reconciliation",
              "Weekly",
              "Pharmacist + Senior Technician",
              "Physical count vs. DDR entries; investigate any discrepancy immediately",
            ],
            [
              "Temperature Monitoring",
              "Daily check; monthly audit",
              "Opening technician (daily); Supervisor (monthly review)",
              "All logs complete and within range; fridge 2–8°C; ambient below 25°C",
            ],
            [
              "Expiry Date Audit",
              "Monthly",
              "Technician (assigned rotation)",
              "All products within 3 months of expiry flagged; action plan for each",
            ],
            [
              "Prescription Records",
              "Monthly",
              "Pharmacist",
              "Sample 10% of prescriptions; check completeness of records, labelling accuracy",
            ],
            [
              "SOP Compliance",
              "Quarterly",
              "Pharmacy Manager",
              "Observe dispensing workflow against SOPs; identify deviations",
            ],
            [
              "Staff Training Records",
              "Quarterly",
              "Pharmacy Manager / HR",
              "All staff training documented; CPD records current; competency assessments up to date",
            ],
            [
              "Full Premises Audit",
              "Biannually",
              "Pharmacy Manager + external if possible",
              "Full walk-through using regulatory inspection checklist; document and address all findings",
            ],
          ],
        },
        {
          type: "text",
          body: "The purpose of internal audits is not to catch and punish staff — it is to identify and fix system weaknesses before regulators find them. When an internal audit reveals a problem, it should be treated as a learning opportunity, not a disciplinary event. A pharmacy where staff are afraid to report problems has a culture of concealment, not compliance.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The Audit Trail Principle",
          body: "Every compliance-related action should leave an audit trail — a documented record of what was done, by whom, when, and why. Temperature logs should be signed. Controlled substance counts should be witnessed by two people. SOP reviews should be dated and signed by all staff who reviewed them. In the event of an inspection or legal challenge, your audit trail is your evidence of due diligence.",
        },
        {
          type: "heading",
          level: 3,
          text: "Building a Compliance Calendar",
        },
        {
          type: "text",
          body: "A compliance calendar maps all regulatory requirements, licence renewal dates, internal audit schedules, and reporting deadlines across the entire year. This visual tool ensures that nothing is forgotten in the rush of daily operations. Display it prominently in the dispensary and review it at monthly management meetings.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "January: Annual controlled substance inventory submission (T&T); Pharmacy licence renewal (check your jurisdiction's date)",
            "Quarterly: Internal SOP compliance audit; staff training record review",
            "Monthly: Controlled substance reconciliation; expiry audit; insurance claims review; temperature log audit",
            "Weekly: Quick controlled substance spot-check; FEFO stock rotation check",
            "Annually: Pharmacist registration renewal; premises licence renewal; insurance programme re-enrolment; data protection registration renewal",
          ],
        },
        {
          type: "knowledge-check",
          question: "How often should a Caribbean pharmacy conduct a physical count of controlled substances and reconcile against the Dangerous Drugs Register?",
          options: [
            "Annually, before the annual report is due",
            "Monthly, during the regular inventory count",
            "Weekly, with physical count verified against DDR entries",
            "Only when the inspector asks for it",
          ],
          correctIndex: 2,
          explanation:
            "Best practice is to reconcile controlled substance physical counts against the DDR weekly. This frequency allows discrepancies to be detected and investigated promptly, while still being operationally feasible. Waiting for monthly or annual counts allows too much time for errors or diversion to accumulate undetected.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m5-q1",
      question:
        "A Caribbean pharmacy must comply with multiple regulatory bodies simultaneously. Which of the following is NOT typically a regulatory body that governs pharmacy operations?",
      options: [
        "The Pharmacy Board (professional practice)",
        "The Drug Regulatory Authority (drug importation and scheduling)",
        "The Tourism Board (visitor health services)",
        "The Data Protection Commissioner (patient information)",
      ],
      correctIndex: 2,
      explanation:
        "The Tourism Board does not regulate pharmacy operations. Pharmacies are regulated by the Pharmacy Board (professional practice), the Drug Regulatory Authority (drug scheduling and importation), the Ministry of Health, the tax authority, and the Data Protection Commissioner, among others.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q2",
      question:
        "During a routine inspection, a pharmacy inspector discovers that the pharmacist's registration expired two months ago. The pharmacist has been dispensing throughout this period. What are the potential consequences?",
      options: [
        "A small administrative fine only",
        "Criminal prosecution — dispensing without valid registration is unlawful; potential closure of the pharmacy",
        "A verbal warning with a 30-day grace period to renew",
        "No consequences if the pharmacist renews immediately",
      ],
      correctIndex: 1,
      explanation:
        "Dispensing medications without valid professional registration is a criminal offence in all major Caribbean jurisdictions. The pharmacist faces prosecution, the pharmacy licence may be suspended or revoked, and all prescriptions dispensed during the lapsed period are legally questionable. This is why licence renewal dates must be tracked on the compliance calendar.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m5-q3",
      questionType: "true_false",
      question: "In Jamaica, pharmacy inspections by the Pharmacy Council and narcotics police can occur without advance notice.",
      options: ["True", "False"],
      correctIndex: 0,
      questionData: {
        correct_answer: true,
      },
      explanation:
        "True. In Jamaica, both the Pharmacy Council and narcotics police can conduct unannounced inspections of pharmacy premises. This is why pharmacies must maintain continuous compliance rather than preparing only when an inspection is scheduled.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q4",
      question:
        "Which approach to compliance is MOST effective for a Caribbean community pharmacy?",
      options: [
        "Prepare thoroughly before scheduled inspections and relax standards in between",
        "Operate every day as if the inspector will arrive tomorrow — continuous compliance",
        "Focus only on the areas where deficiencies were found in the last inspection",
        "Delegate all compliance matters to the most junior staff member",
      ],
      correctIndex: 1,
      explanation:
        "Continuous compliance — operating every day to the standards expected during an inspection — is the only approach that truly protects patients and the pharmacy. Cyclical compliance (preparing before inspections) creates dangerous gaps, and focusing only on previous deficiencies ignores other areas that may have deteriorated.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m5-q5",
      question:
        "The CAPA (Corrective and Preventive Action) approach to inspection findings requires:",
      options: [
        "Correcting the immediate problem only",
        "Both correcting the immediate issue and addressing the root cause to prevent recurrence",
        "Preventing future problems without addressing the current finding",
        "Writing a letter of apology to the regulatory body",
      ],
      correctIndex: 1,
      explanation:
        "CAPA requires two components: (1) Corrective action — fixing the immediate problem identified in the inspection, and (2) Preventive action — identifying and addressing the root cause to prevent the problem from recurring. Regulators expect to see both components in a pharmacy's response to inspection findings.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q6",
      questionType: "multiple_select",
      question: "Which of the following are common deficiencies found during Caribbean pharmacy inspections? (Select all that apply)",
      options: [
        "Temperature monitoring logs with gaps or missing entries",
        "Controlled substance cabinet not properly secured",
        "Pharmacy has too many staff on duty",
        "Dispensing labels missing required information",
        "Expired medications still on dispensing shelves",
      ],
      correctIndex: 0,
      questionData: {
        correct_indices: [0, 1, 3, 4],
      },
      explanation:
        "Gaps in temperature logs, unsecured controlled substances, incomplete dispensing labels, and expired stock on shelves are all common inspection findings across Caribbean pharmacies. Having 'too many staff on duty' would not be cited as a deficiency — adequate staffing is desirable.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q7",
      question:
        "In Barbados, the destruction of expired controlled substances must be:",
      options: [
        "Done by the pharmacist alone at the end of each month",
        "Flushed down the pharmacy sink by any staff member",
        "Witnessed by an authorised officer and documented",
        "Mailed back to the manufacturer for disposal",
      ],
      correctIndex: 2,
      explanation:
        "In Barbados, the destruction of expired controlled substances must be witnessed by an authorised officer (typically from the relevant regulatory body) and properly documented. This ensures accountability and prevents diversion. Unsupervised disposal of controlled substances is a regulatory offence.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q8",
      question:
        "A weekly controlled substance reconciliation reveals that the physical count of diazepam 5 mg is two tablets fewer than the DDR balance. What should the pharmacy do FIRST?",
      options: [
        "Adjust the DDR to match the physical count and move on",
        "Conduct an immediate investigation — recount, review dispensing records, check for documentation errors, and report if unresolved",
        "Wait until the next weekly count to see if the discrepancy persists",
        "Accuse the last person who dispensed diazepam of theft",
      ],
      correctIndex: 1,
      explanation:
        "Any controlled substance discrepancy must be investigated immediately: recount, review all dispensing records, check for documentation errors (e.g., a dispensed dose not recorded in the DDR). If the discrepancy cannot be resolved through documentation review, it must be reported to the relevant authority. Adjusting the register without investigation, waiting, or jumping to accusations are all inappropriate responses.",
      difficulty: "hard",
      bloomsLevel: "evaluate",
    },
    {
      id: "m5-q9",
      question:
        "How often should a pharmacy conduct a full premises self-inspection using the regulatory inspection checklist?",
      options: [
        "Only when an inspection is scheduled",
        "Weekly",
        "Biannually (every six months)",
        "Once every three years",
      ],
      correctIndex: 2,
      explanation:
        "A full premises self-inspection using the same checklist that regulators use should be conducted biannually (every six months). This is supplemented by more frequent targeted audits (weekly controlled substance counts, monthly expiry audits, etc.). The biannual cadence ensures comprehensive coverage without being operationally burdensome.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q10",
      questionType: "ordering",
      question: "Place the steps for responding to a regulatory inspection finding in the correct order:",
      options: [
        "Acknowledge the finding and understand the required standard",
        "Identify the root cause of the non-compliance",
        "Implement the corrective action (fix the immediate issue)",
        "Implement the preventive action (prevent recurrence)",
        "Document everything and report back to the regulatory body",
      ],
      correctIndex: 0,
      questionData: {
        correct_order: [0, 1, 2, 3, 4],
      },
      explanation:
        "The correct sequence is: (1) Acknowledge and understand, (2) Root cause analysis, (3) Corrective action (fix now), (4) Preventive action (prevent recurrence), (5) Document and report. Jumping to corrective action without understanding the root cause leads to superficial fixes that do not prevent recurrence.",
      difficulty: "hard",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 6 — Strategic Planning & Continuous Professional Development
// ============================================================================

const module6: Module = {
  id: "m6-strategic-planning-cpd",
  number: 6,
  title: "Strategic Planning & Continuous Professional Development",
  description:
    "Think beyond daily operations to the long-term future of your pharmacy and your career. This module covers strategic planning for Caribbean pharmacies, CPD requirements across jurisdictions, and the emerging opportunities that will shape pharmacy management in the years ahead.",
  learningObjectives: [
    "Develop a strategic plan for a Caribbean community pharmacy using SWOT analysis",
    "Compare CPD requirements for pharmacy professionals across Trinidad & Tobago, Jamaica, and Barbados",
    "Evaluate emerging business opportunities for Caribbean pharmacies (clinical services, telepharmacy, wellness)",
    "Create a personal professional development plan aligned with Caribbean pharmacy career pathways",
  ],
  lessons: [
    // ── Lesson 6.1 ──
    {
      id: "m6-l1",
      title: "Strategic Planning for Caribbean Pharmacies",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Thinking Strategically About Your Pharmacy's Future",
        },
        {
          type: "text",
          body: "Most Caribbean pharmacies operate reactively — responding to today's prescriptions, this week's stock shortages, and next month's bills. Strategic planning shifts the focus from survival mode to intentional growth. It asks: where do we want this pharmacy to be in 3–5 years, and what must we do now to get there? In a rapidly changing healthcare landscape — with new government programmes, evolving regulations, increased competition from online pharmacies, and changing patient expectations — the pharmacies that plan strategically will thrive while those that do not will struggle to keep pace.",
        },
        {
          type: "key-term",
          term: "SWOT Analysis",
          definition:
            "A strategic planning tool that evaluates an organisation's Strengths (internal advantages), Weaknesses (internal disadvantages), Opportunities (external favourable conditions), and Threats (external unfavourable conditions). For pharmacies, SWOT analysis helps identify what you do well, where you need to improve, what market opportunities you can capture, and what external risks you need to manage.",
        },
        {
          type: "heading",
          level: 3,
          text: "SWOT Analysis for a Caribbean Community Pharmacy",
        },
        {
          type: "table",
          caption: "Example SWOT Analysis — Caribbean Community Pharmacy",
          headers: ["Category", "Factors"],
          rows: [
            [
              "Strengths",
              "Long-standing community trust; experienced pharmacist; strong CDAP/NHF participation; loyal patient base; strategic location near medical centre",
            ],
            [
              "Weaknesses",
              "Paper-based systems; limited product range; no clinical services; high staff turnover; poor online presence",
            ],
            [
              "Opportunities",
              "Growing chronic disease prevalence (more CDAP/NHF patients); demand for clinical services (blood pressure monitoring, diabetes screening); telepharmacy potential for remote communities; health and wellness product market growth",
            ],
            [
              "Threats",
              "New competitor pharmacy opening nearby; online pharmacy competition; currency depreciation increasing import costs; government programme reimbursement rate freezes; brain drain reducing available pharmacists",
            ],
          ],
        },
        {
          type: "text",
          body: "The value of SWOT analysis is not just in listing factors — it is in matching them. Match strengths to opportunities: your trusted community presence (strength) positions you to offer clinical screening services (opportunity). Address weaknesses that expose you to threats: your paper-based system (weakness) makes you vulnerable to competitors with faster, more efficient service (threat). This matching process generates strategic priorities that are specific, actionable, and grounded in your pharmacy's reality.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The Five-Year Horizon",
          body: "Caribbean pharmacies that plan 3–5 years ahead consistently outperform those that plan quarter-to-quarter. Your strategic plan does not need to be a 50-page document — a clear, 2-page plan with a vision statement, 3–5 strategic priorities, measurable goals, and a quarterly review schedule is more valuable than an elaborate plan that sits in a drawer. Update it annually and review progress quarterly.",
        },
        {
          type: "heading",
          level: 3,
          text: "Emerging Opportunities for Caribbean Pharmacies",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Clinical services: Blood pressure monitoring, blood glucose testing, medication therapy management, immunisation services (where permitted by law)",
            "Telepharmacy: Remote prescription verification and patient counselling for underserved rural areas and smaller islands — regulations are evolving across the region",
            "Health and wellness: Natural health products, nutraceuticals, health foods, fitness supplements — a growing market driven by increased health consciousness",
            "Chronic disease management programmes: Structured medication adherence programmes, blister packing, refill reminder services",
            "Point-of-care testing: Rapid diagnostic testing for conditions like strep throat, influenza, or UTIs — subject to regulatory approval",
            "Compounding services: Customised medication preparation for patients with specific needs (paediatric dosage forms, allergen-free formulations)",
          ],
        },
        {
          type: "knowledge-check",
          question: "In a SWOT analysis for a Caribbean pharmacy, 'currency depreciation increasing medication import costs' would be classified as:",
          options: [
            "A Strength",
            "A Weakness",
            "An Opportunity",
            "A Threat",
          ],
          correctIndex: 3,
          explanation:
            "Currency depreciation is an external factor that is unfavourable to the pharmacy — it increases the cost of imported medications while selling prices may not adjust proportionally. This makes it a Threat. Threats are external conditions over which the pharmacy has no direct control but must plan for and manage.",
        },
      ],
    },
    // ── Lesson 6.2 ──
    {
      id: "m6-l2",
      title: "CPD Requirements Across the Caribbean",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Continuing Professional Development: A Career-Long Obligation",
        },
        {
          type: "text",
          body: "Pharmacy is a profession where knowledge has a half-life — what you learn in your training programme will be partially obsolete within 5 years due to new drugs, updated guidelines, changed regulations, and evolving best practices. Continuing Professional Development (CPD) is the mechanism by which pharmacy professionals maintain and enhance their competence throughout their careers. Across the Caribbean, CPD is increasingly moving from voluntary to mandatory — a requirement for maintaining professional registration.",
        },
        {
          type: "key-term",
          term: "Continuing Professional Development (CPD)",
          definition:
            "The ongoing process of learning and development that pharmacy professionals undertake throughout their careers to maintain, improve, and broaden their knowledge, skills, and competence. Unlike continuing education (CE), which focuses on attending courses or lectures, CPD encompasses all learning activities — formal courses, self-directed reading, mentoring, practice-based learning, and reflective practice.",
        },
        {
          type: "island-comparison",
          title: "CPD Requirements for Pharmacy Professionals by Island",
          description:
            "CPD requirements vary by jurisdiction and are evolving. Pharmacy managers must ensure both they and their staff meet the requirements for their specific island.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "The Pharmacy Board of T&T is developing mandatory CPD requirements for pharmacist re-registration",
                "Currently, CPD is strongly encouraged but not yet a strict renewal condition for all registrants",
                "The Pharmaceutical Society of Trinidad and Tobago (PSTT) offers CPD events and workshops",
                "UWI School of Pharmacy provides formal continuing education programmes",
                "PIXOPHARM-certified courses are recognised as valid CPD activities",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "The Pharmacy Council of Jamaica requires CPD for pharmacist re-registration",
                "Pharmacists must accumulate a minimum number of CPD credits over each registration cycle",
                "Approved CPD providers include UTech, the Pharmaceutical Society of Jamaica, and accredited online platforms",
                "CPD activities must be documented in a professional portfolio for audit purposes",
                "Categories include formal learning, practice-based learning, and self-directed learning",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "The Barbados Pharmacy Council oversees CPD requirements for registered pharmacists",
                "CPD is increasingly being linked to re-registration and licence renewal",
                "The Barbados Pharmaceutical Society organises CPD conferences and seminars",
                "International CPD from recognised institutions (e.g., UK GPhC, US ACPE) may be accepted",
                "Pharmacy technicians are encouraged to pursue CPD even where not yet mandatory",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "CPD for Pharmacy Technicians",
          body: "While CPD is currently more formalised for pharmacists than for technicians in most Caribbean jurisdictions, the trend is clearly toward mandatory CPD for all pharmacy professionals. Technicians who proactively build a CPD portfolio now will be ahead when requirements are formalised. Additionally, CPD is a powerful retention and career advancement tool — staff who are actively learning are more engaged and more promotable.",
        },
        {
          type: "table",
          caption: "Types of CPD Activities Recognised in the Caribbean",
          headers: ["Category", "Examples", "Typical Credit Value"],
          rows: [
            [
              "Formal Learning",
              "Accredited courses, workshops, conferences, webinars, PIXOPHARM modules",
              "1–3 credits per hour of instruction",
            ],
            [
              "Practice-Based Learning",
              "Case discussions, clinical audits, journal clubs, quality improvement projects",
              "1–2 credits per activity",
            ],
            [
              "Self-Directed Learning",
              "Professional reading, online research, reflective practice journals",
              "0.5–1 credit per hour (often capped)",
            ],
            [
              "Teaching & Mentoring",
              "Precepting students, training new staff, presenting at conferences",
              "2–3 credits per activity",
            ],
          ],
        },
        {
          type: "text",
          body: "As a pharmacy manager, you have a dual CPD responsibility: maintaining your own professional development AND supporting your team's CPD. Build CPD into your pharmacy's culture by allocating a training budget (even a modest one), sharing relevant journal articles or updates during team meetings, sending staff to conferences on a rotating basis, and recognising CPD achievements. When CPD is treated as a valued part of work — not an afterthought — the entire team benefits.",
        },
        {
          type: "knowledge-check",
          question: "What is the key difference between Continuing Education (CE) and Continuing Professional Development (CPD)?",
          options: [
            "CE is for pharmacists; CPD is for technicians",
            "CE focuses on attending courses; CPD encompasses all learning activities including practice-based and self-directed learning",
            "CE is mandatory; CPD is always voluntary",
            "CE provides credits; CPD does not",
          ],
          correctIndex: 1,
          explanation:
            "CE traditionally focuses on formal learning activities (attending courses, lectures, webinars), while CPD is a broader concept that encompasses all professional learning — formal courses, practice-based learning (clinical audits, case discussions), self-directed learning (reading, research), and reflective practice. CPD represents a shift from 'hours attended' to 'competence maintained and enhanced'.",
        },
      ],
    },
    // ── Lesson 6.3 ──
    {
      id: "m6-l3",
      title: "Building Your Personal Professional Development Plan",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Your Career, Your Plan",
        },
        {
          type: "text",
          body: "A personal professional development plan (PDP) is a living document that maps where you are in your career, where you want to be, and the specific steps you will take to get there. For pharmacy technicians and aspiring supervisors in the Caribbean, a PDP transforms vague career ambitions into concrete, achievable milestones. It also demonstrates to employers and regulatory bodies that you take your professional growth seriously.",
        },
        {
          type: "heading",
          level: 3,
          text: "The PDP Framework",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Self-assessment: Honestly evaluate your current knowledge, skills, and competencies. Where are you strong? Where are the gaps? Use feedback from your pharmacist, performance reviews, and self-reflection",
            "Goal setting: Define 2–3 specific development goals for the next 12 months. Use SMART criteria: Specific, Measurable, Achievable, Relevant, Time-bound. Example: 'Complete the PIXOPHARM Pharmacy Management & Leadership course by June 2027'",
            "Action planning: For each goal, identify the specific actions, resources, and timeline. What courses will you take? What mentoring will you seek? What reading will you do? What practical experience do you need?",
            "Implementation: Execute your plan. Track your progress. Adjust when circumstances change — but do not abandon the plan",
            "Review and reflection: Quarterly, review your progress. What have you learned? How has it changed your practice? What needs to change in your plan?",
          ],
        },
        {
          type: "table",
          caption: "Caribbean Pharmacy Career Pathways",
          headers: ["Level", "Role", "Requirements", "Typical Timeframe"],
          rows: [
            [
              "Entry",
              "Pharmacy Assistant / Aide",
              "Secondary school education; on-the-job training",
              "Entry level",
            ],
            [
              "Foundation",
              "Certified Pharmacy Technician",
              "Recognised technician training programme (e.g., PIXOPHARM, COSTAATT); registration where required",
              "1–2 years of training",
            ],
            [
              "Intermediate",
              "Senior Pharmacy Technician",
              "3+ years of experience; advanced competency demonstration; CPD portfolio",
              "3–5 years in role",
            ],
            [
              "Advanced",
              "Pharmacy Supervisor / Team Lead",
              "Management training; leadership competencies; demonstrated operational excellence",
              "5–8 years total experience",
            ],
            [
              "Professional",
              "Pharmacy Manager / Owner",
              "Pharmacist qualification (for owner-pharmacist) or extensive management experience (for non-pharmacist manager); business qualifications beneficial",
              "8+ years; additional qualifications",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Portfolio Approach",
          body: "Build a professional portfolio that documents your CPD activities, certifications, performance reviews, and achievements. In the Caribbean, where formal credentialing systems for technicians are still developing, a well-documented portfolio is your evidence of competence. It serves you in job applications, promotion discussions, and regulatory compliance. Keep it digital (backed up) and physical (printed and organised in a binder).",
        },
        {
          type: "case-study",
          title: "Case Study: Keisha's Career Plan",
          scenario:
            "Keisha completed her pharmacy technician certification through PIXOPHARM 18 months ago and has been working at a community pharmacy in Chaguanas, Trinidad. She is competent at dispensing, inventory management, and CDAP claims processing. She aspires to become a pharmacy supervisor within 3 years and eventually pursue a Bachelor's degree in pharmacy. Her current employer is supportive but has no formal career development programme.",
          questions: [
            "What should Keisha include in her 12-month PDP?",
            "How can she gain management experience while still in a technician role?",
            "What CPD activities would be most valuable for her career goals?",
          ],
          discussion:
            "Keisha's 12-month PDP could include: (1) Complete the PIXOPHARM Pharmacy Management & Leadership course to build management knowledge. (2) Volunteer to take on supervisory tasks — opening/closing procedures, inventory ordering, new staff orientation — to build practical management experience. (3) Attend at least two CPD events (PSTT workshops, pharmaceutical conferences). (4) Begin prerequisite courses for the UWI Bachelor of Pharmacy programme. (5) Build a professional portfolio documenting all learning, achievements, and competencies. For management experience, she could ask her pharmacist-manager to delegate specific supervisory tasks with guidance, shadow the manager during ordering and scheduling, and take the lead on a specific improvement project (e.g., reducing expiry waste by implementing FEFO checks).",
        },
        {
          type: "video-placeholder",
          title: "Career Pathways in Caribbean Pharmacy",
          duration: "10 min",
          description:
            "Hear from pharmacy professionals across Trinidad, Jamaica, and Barbados about their career journeys — from pharmacy assistant to supervisor, manager, and beyond. Learn what helped them advance and what they wish they had known earlier.",
        },
        {
          type: "knowledge-check",
          question: "What does the 'M' in SMART goals stand for?",
          options: [
            "Motivational",
            "Measurable",
            "Mandatory",
            "Manageable",
          ],
          correctIndex: 1,
          explanation:
            "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound. 'Measurable' means you must be able to quantify or verify whether the goal has been achieved. For example, 'improve my pharmacy knowledge' is not measurable, but 'complete the PIXOPHARM Management course with a score of 80% or higher by June 2027' is measurable.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m6-q1",
      question:
        "In a SWOT analysis, which quadrant contains factors that are INTERNAL to the pharmacy and FAVOURABLE?",
      options: [
        "Strengths",
        "Weaknesses",
        "Opportunities",
        "Threats",
      ],
      correctIndex: 0,
      explanation:
        "Strengths are internal (within the pharmacy's control) and favourable (advantageous). Examples include an experienced team, strong community reputation, or efficient processes. Weaknesses are internal but unfavourable. Opportunities and threats are both external factors.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q2",
      question:
        "A Caribbean community pharmacy completes a SWOT analysis and identifies that its strength is 'trusted community reputation' and an opportunity is 'growing demand for clinical screening services'. The BEST strategic action is:",
      options: [
        "Reduce staff to cut costs",
        "Leverage the trusted reputation to introduce blood pressure and glucose screening services",
        "Focus solely on prescription dispensing and ignore clinical services",
        "Wait until competitors offer clinical services first, then copy their approach",
      ],
      correctIndex: 1,
      explanation:
        "Strategic planning involves matching strengths to opportunities. A trusted community reputation (strength) is the perfect foundation for introducing clinical screening services (opportunity) — patients are more likely to use these services at a pharmacy they already trust. Waiting for competitors to act first cedes the market advantage.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q3",
      question:
        "Which Caribbean country currently has the MOST formalised mandatory CPD requirements for pharmacist re-registration?",
      options: [
        "Trinidad & Tobago",
        "Jamaica",
        "Barbados",
        "All three have identical CPD requirements",
      ],
      correctIndex: 1,
      explanation:
        "Jamaica currently has the most formalised CPD requirements, with the Pharmacy Council of Jamaica requiring pharmacists to accumulate CPD credits for re-registration. Trinidad & Tobago and Barbados are developing their mandatory CPD frameworks but are not as far advanced in implementation.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q4",
      questionType: "true_false",
      question: "A pharmacy that does not have a written strategic plan can still be successful in the long term by reacting effectively to daily challenges.",
      options: ["True", "False"],
      correctIndex: 1,
      questionData: {
        correct_answer: false,
      },
      explanation:
        "False. While reactive management can keep a pharmacy operating day-to-day, long-term success requires intentional strategic planning. Pharmacies without strategic plans are vulnerable to competitive threats, regulatory changes, and market shifts that they did not anticipate. Strategic planning shifts the pharmacy from survival mode to growth mode.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m6-q5",
      question:
        "Which of the following is an example of a SMART professional development goal for a pharmacy technician?",
      options: [
        "Get better at my job this year",
        "Learn everything about pharmacy management",
        "Complete the PIXOPHARM Management course with 80% or higher by December 2027",
        "Become the best technician in the Caribbean",
      ],
      correctIndex: 2,
      explanation:
        "A SMART goal is Specific (PIXOPHARM Management course), Measurable (80% or higher), Achievable (realistic for a working technician), Relevant (management course for aspiring supervisor), and Time-bound (by December 2027). The other options are vague, unmeasurable, or unrealistic.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q6",
      questionType: "multiple_select",
      question: "Which of the following are recognised CPD activity categories in the Caribbean? (Select all that apply)",
      options: [
        "Formal learning (accredited courses, workshops, conferences)",
        "Practice-based learning (clinical audits, journal clubs, quality improvement projects)",
        "Social media browsing of pharmacy-related content",
        "Self-directed learning (professional reading, reflective practice)",
        "Teaching and mentoring (precepting students, training new staff)",
      ],
      correctIndex: 0,
      questionData: {
        correct_indices: [0, 1, 3, 4],
      },
      explanation:
        "The four recognised CPD categories are formal learning, practice-based learning, self-directed learning, and teaching/mentoring. While social media may occasionally contain useful pharmacy information, casual browsing is not a structured CPD activity and would not be recognised for CPD credit unless part of a deliberate, documented learning plan.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q7",
      question:
        "Telepharmacy — remote prescription verification and patient counselling — represents an opportunity for Caribbean pharmacies primarily because:",
      options: [
        "It allows pharmacies to operate without any licensed pharmacists",
        "It can extend pharmacy services to underserved rural communities and smaller islands with limited pharmacy access",
        "It eliminates the need for physical pharmacy premises",
        "It is cheaper than hiring pharmacy staff",
      ],
      correctIndex: 1,
      explanation:
        "Telepharmacy's primary value in the Caribbean is extending pharmacy services to underserved populations — rural communities, smaller islands, and areas where pharmacist access is limited. It does not replace the need for licensed pharmacists (they provide the remote service) or physical premises, but it overcomes geographic barriers to care.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q8",
      question:
        "How often should a personal professional development plan (PDP) be reviewed?",
      options: [
        "Only when applying for a new job",
        "Annually",
        "Quarterly, with a full annual review",
        "Every five years, in line with major career milestones",
      ],
      correctIndex: 2,
      explanation:
        "A PDP should be reviewed quarterly to track progress, adjust timelines, and respond to changing circumstances. A full annual review allows for goal resetting and strategic realignment. Reviewing only annually or less frequently allows the plan to drift and become irrelevant to current needs.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q9",
      question:
        "A pharmacy supervisor notices that daily operations consume all her time, leaving no space for strategic planning. The MOST appropriate response is:",
      options: [
        "Accept that strategic planning is a luxury for larger pharmacies",
        "Delegate operational tasks to capable team members to free up management time for strategic work",
        "Hire a consultant to write the strategic plan without any input from the team",
        "Plan to do strategic planning during the holiday season when the pharmacy is less busy",
      ],
      correctIndex: 1,
      explanation:
        "The solution is delegation — using the leadership and delegation skills from Module 3 to empower capable team members with operational responsibilities, freeing the supervisor to focus on strategic work. Strategic planning is not a luxury; it is a responsibility of management. A consultant-written plan without team input will lack ownership, and waiting for 'quiet times' means it will never happen.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m6-q10",
      questionType: "matching",
      question: "Match each SWOT category with its correct definition:",
      options: [
        "Strengths → Internal favourable factors",
        "Weaknesses → Internal unfavourable factors",
        "Opportunities → External favourable factors",
        "Threats → External unfavourable factors",
      ],
      correctIndex: 0,
      questionData: {
        pairs: [
          { left: "Strengths", right: "Internal favourable factors" },
          { left: "Weaknesses", right: "Internal unfavourable factors" },
          { left: "Opportunities", right: "External favourable factors" },
          { left: "Threats", right: "External unfavourable factors" },
        ],
      },
      explanation:
        "SWOT analysis organises factors along two dimensions: internal vs. external, and favourable vs. unfavourable. Strengths are internal + favourable, Weaknesses are internal + unfavourable, Opportunities are external + favourable, and Threats are external + unfavourable. Understanding this framework is essential for strategic analysis.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// FULL COURSE ASSEMBLY
// ============================================================================

export const managementCourse: FullCourse = {
  courseId: "pharmacy-management-leadership",
  title: "Pharmacy Management & Leadership",
  tagline: "Lead teams and manage operations with confidence across the Caribbean",
  modules: [module1, module2, module3, module4, module5, module6],
};

// ── Utility helpers ─────────────────────────────────────────────────────────

export const totalLessons = managementCourse.modules.reduce(
  (sum, m) => sum + m.lessons.length,
  0,
);

export const totalQuizQuestions = managementCourse.modules.reduce(
  (sum, m) => sum + m.quiz.length,
  0,
);

export default managementCourse;
