// ============================================================================
// PIXOPHARM — Shelf Simulator Prototype
// Interactive inventory error-spotting + decision consequence trainer
// ============================================================================

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// ── Types ─────────────────────────────────────────────────────────────────────

type RiskCategory = "patient_safety" | "compliance" | "supply";
type ErrorType =
  | "expired" | "fefo_violation" | "unsecured_controlled" | "below_reorder"
  | "damaged" | "missing_log" | "wrong_zone" | "recalled"
  | "contamination_risk" | "unlabeled";
type ConsequenceType = "good" | "bad" | "partial";
type Phase = "inspect" | "results" | "decision" | "consequence";

interface ShelfItem {
  id: string;
  name: string;
  form: string;
  strength: string;
  qty: number | string;
  expiry: string;
  batch: string;
  storage_temp: string;
  controlled: boolean;
  secured: boolean;
  damaged: boolean;
  reorder_point?: number;
  has_error: boolean;
  error_type?: ErrorType;
  error_title?: string;
  error_explanation?: string;
  risk?: string;
  risk_category?: RiskCategory;
  correction?: string;
}

interface ShelfRow { id: string; label: string; category: string; items: ShelfItem[]; }

interface DecisionOption {
  id: string; text: string; correct: boolean;
  consequence: string; consequence_type: ConsequenceType;
}

interface Scenario {
  id: string;
  title: string; location: string; territory: string; time: string;
  instructions: string;
  shelves: ShelfRow[];
  decision: { scenario_context: string; question: string; options: DecisionOption[]; };
}

// ── Data ──────────────────────────────────────────────────────────────────────

const dispensaryScenario: Scenario = {
  id: "dispensary",
  title: "Pre-Opening Dispensary Inspection",
  location: "Prescod Community Pharmacy",
  territory: "Bridgetown, Barbados",
  time: "Monday 07:55 — 5 minutes before opening",
  instructions: "Complete the pre-opening check on Shelves A, B, and C. Click any item you believe has an error or compliance issue to flag it, then submit your inspection.",
  shelves: [
    {
      id: "s-a", label: "Shelf A", category: "Cardiovascular / Antidiabetic",
      items: [
        {
          id: "a1", name: "Metformin", form: "Tablet", strength: "500mg",
          qty: 24, expiry: "11/2024", batch: "BDS-3847", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false,
          has_error: true, error_type: "expired",
          error_title: "Expired Stock on Active Shelf",
          error_explanation: "Metformin 500mg (batch BDS-3847) expired November 2024 and has not been removed from the dispensary shelf.",
          risk: "A diabetic patient could receive degraded medication, leading to subtherapeutic blood glucose control. Barbados has one of the highest diabetes rates in CARICOM.",
          risk_category: "patient_safety",
          correction: "Remove immediately. Record in the wastage log. Complete BDS wastage certificate if quantity exceeds threshold. Notify pharmacist."
        },
        {
          id: "a2", name: "Atenolol", form: "Tablet", strength: "50mg",
          qty: 48, expiry: "09/2026", batch: "BDS-4102", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false, has_error: false
        },
        {
          id: "a3", name: "Amlodipine", form: "Tablet", strength: "5mg",
          qty: 30, expiry: "04/2026", batch: "BDS-4891 ← front",
          storage_temp: "25°C", controlled: false, secured: false, damaged: false,
          has_error: true, error_type: "fefo_violation",
          error_title: "FEFO Violation — Newer Batch in Front",
          error_explanation: "Batch BDS-4891 (exp 04/2026) is in front of older Batch BDS-4453 (exp 08/2025). Patients will receive newer stock first, leaving the earlier batch to expire.",
          risk: "Caribbean heat (25–35°C year-round) accelerates degradation. Older stock left behind will expire on the shelf, resulting in wastage and potential dispensing of expired medication.",
          risk_category: "patient_safety",
          correction: "Rotate stock so BDS-4453 (exp 08/2025) is at the front. Apply FEFO to all shelves — mandatory practice under BDS pharmacy standards."
        },
        {
          id: "a4", name: "Lisinopril", form: "Tablet", strength: "10mg",
          qty: 8, expiry: "07/2026", batch: "BDS-5012", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false, reorder_point: 20,
          has_error: true, error_type: "below_reorder",
          error_title: "Stock Below Reorder Point",
          error_explanation: "Only 8 units remain against a reorder point of 20. No purchase order has been raised.",
          risk: "Lisinopril is a frontline antihypertensive in a country with very high hypertension prevalence. Running out interrupts critical therapy. Inter-island delivery takes 7–14 days.",
          risk_category: "supply",
          correction: "Raise a purchase order immediately. Flag as urgent given lead time. Check if emergency stock is available from another BDS-registered pharmacy."
        },
      ]
    },
    {
      id: "s-b", label: "Shelf B", category: "Antibiotics / Analgesics",
      items: [
        {
          id: "b1", name: "Amoxicillin", form: "Capsule", strength: "500mg",
          qty: 60, expiry: "03/2027", batch: "BDS-5234", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false, has_error: false
        },
        {
          id: "b2", name: "Co-codamol", form: "Tablet", strength: "30/500mg",
          qty: 28, expiry: "02/2027", batch: "BDS-4977", storage_temp: "25°C",
          controlled: true, secured: false, damaged: false,
          has_error: true, error_type: "unsecured_controlled",
          error_title: "Controlled Drug Not Secured",
          error_explanation: "Co-codamol 30/500mg is Schedule 3 under Barbados Pharmacy Act Cap 372D. This stock is on an open shelf, unsecured.",
          risk: "Schedule 3 drugs must be in a locked receptacle. Unsecured controlled drugs are vulnerable to diversion — a criminal offence. Non-compliance can result in licence suspension.",
          risk_category: "compliance",
          correction: "Transfer immediately to the controlled drugs cabinet. Record transfer in the CD register. Report the lapse to the pharmacist for investigation."
        },
        {
          id: "b3", name: "Metronidazole", form: "Tablet", strength: "400mg",
          qty: 36, expiry: "01/2027", batch: "BDS-5018", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false, has_error: false
        },
      ]
    },
    {
      id: "s-c", label: "Shelf C", category: "Endocrine / Insulin",
      items: [
        {
          id: "c1", name: "Actrapid Insulin", form: "Injection", strength: "100 IU/ml",
          qty: 4, expiry: "06/2026", batch: "NVN-8821", storage_temp: "⚠ 25°C (ambient)",
          controlled: false, secured: false, damaged: false,
          has_error: true, error_type: "wrong_zone",
          error_title: "Temperature-Sensitive Drug — Wrong Storage Zone",
          error_explanation: "Actrapid Insulin requires refrigeration at 2–8°C. This vial is stored at ambient temperature on an open shelf.",
          risk: "Insulin exposed above 25°C loses potency rapidly. A diabetic patient receiving degraded insulin could experience life-threatening hyperglycaemia — especially critical given Caribbean diabetes prevalence.",
          risk_category: "patient_safety",
          correction: "Remove immediately. Check cold chain records for temperature excursion duration. If uncertain, quarantine and do not dispense. Transfer to pharmaceutical refrigerator (2–8°C). Investigate how it left the fridge."
        },
        {
          id: "c2", name: "Glibenclamide", form: "Tablet", strength: "5mg",
          qty: 36, expiry: "11/2026", batch: "BDS-4643", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false, has_error: false
        },
        {
          id: "c3", name: "Levothyroxine", form: "Tablet", strength: "50mcg",
          qty: 20, expiry: "05/2026", batch: "BDS-4888", storage_temp: "25°C",
          controlled: false, secured: false, damaged: true,
          has_error: true, error_type: "damaged",
          error_title: "Damaged Packaging",
          error_explanation: "The outer packaging is torn and compromised. Levothyroxine is sensitive to moisture and light — significant risks in the Caribbean climate.",
          risk: "Moisture ingress can degrade levothyroxine. Patients with hypothyroidism depend on precise dosing — even slight degradation can destabilise thyroid levels.",
          risk_category: "patient_safety",
          correction: "Quarantine with 'Do Not Dispense' label. Record in damaged goods log. Pharmacist to assess inner blister integrity. Replace outer carton or return to supplier."
        },
      ]
    },
  ],
  decision: {
    scenario_context: "It is 07:58. You found 5 errors. The pharmacist arrives at 08:15. A patient is already waiting outside.",
    question: "What is your first action?",
    options: [
      {
        id: "d-a", correct: true, consequence_type: "good",
        text: "Address all patient-safety errors (expired Metformin, wrong-zone Insulin, unsecured Co-codamol, damaged Levothyroxine) before opening. Document everything. Inform the pharmacist on arrival.",
        consequence: "Correct. Patient safety and legal compliance take priority over opening time. The BDS pharmacist will support this decision. Your 15-minute delay is fully justified and documented. The diligence is noted in the daily inspection record."
      },
      {
        id: "d-b", correct: false, consequence_type: "bad",
        text: "Open at 08:00 as scheduled — deal with errors during quiet morning periods.",
        consequence: "During the morning rush, a patient with Type 2 diabetes receives the expired Metformin. They take it for two weeks before noticing. A dispensing error report is filed with the Barbados Drug Service. The pharmacy undergoes a compliance inspection under Cap 372D. Delaying correction of known errors is indefensible."
      },
      {
        id: "d-c", correct: false, consequence_type: "partial",
        text: "Remove only the expired Metformin and open on time. Mention the other issues to the pharmacist when they arrive.",
        consequence: "You addressed the expired stock, but left the unsecured controlled drug and wrong-zone insulin. During the morning rush, Co-codamol is dispensed without CD register entry. A 3-month audit flags the discrepancy. Partial action on a known compliance issue is still a compliance failure."
      },
      {
        id: "d-d", correct: false, consequence_type: "partial",
        text: "Call the pharmacist at home for authorisation before taking any action.",
        consequence: "The call goes to voicemail. You wait. At 08:05 the waiting patient demands service. Removing expired stock, securing controlled drugs, and quarantining wrong-zone items are within your scope of practice as a technician — pharmacist authorisation is not required. Waiting was unnecessary and puts the pharmacy at risk."
      },
    ]
  }
};

const backStockScenario: Scenario = {
  id: "back_stock",
  title: "Routine Back Stock Audit",
  location: "Kingston Central Pharmacy",
  territory: "Kingston, Jamaica",
  time: "Thursday 14:30 — Weekly stock audit",
  instructions: "Conduct the weekly back stock audit. Flag every item or condition that represents a compliance, safety, or supply risk.",
  shelves: [
    {
      id: "bs-a", label: "Controlled Drugs Area", category: "Schedule 1–3 — Dangerous Drugs Act Jamaica",
      items: [
        {
          id: "bsa1", name: "Morphine Sulfate", form: "Tablet", strength: "10mg",
          qty: 45, expiry: "04/2027", batch: "JPS-2233", storage_temp: "25°C",
          controlled: true, secured: true, damaged: false, has_error: false
        },
        {
          id: "bsa2", name: "Diazepam", form: "Tablet", strength: "5mg",
          qty: 60, expiry: "08/2026", batch: "JPS-1987", storage_temp: "25°C",
          controlled: true, secured: false, damaged: false,
          has_error: true, error_type: "unsecured_controlled",
          error_title: "Schedule 3 Drug Left Unsecured",
          error_explanation: "Diazepam 5mg (Schedule 3, Dangerous Drugs Act Jamaica) is outside the locked controlled drugs cabinet.",
          risk: "Under Jamaica's DDA, Schedule 3 substances must be kept in a locked receptacle at all times. Unsecured stock is a criminal liability. Any discrepancy in count could result in prosecution of the pharmacist and technician.",
          risk_category: "compliance",
          correction: "Place in locked CD cabinet immediately. Count and verify against the CD register. Report any discrepancy to the pharmacist and Jamaica Pharmacy Council. Document the lapse with timestamp."
        },
        {
          id: "bsa3", name: "Codeine Phosphate", form: "Tablet", strength: "30mg",
          qty: 120, expiry: "11/2026", batch: "JPS-2601", storage_temp: "25°C",
          controlled: true, secured: true, damaged: false, has_error: false
        },
      ]
    },
    {
      id: "bs-b", label: "Refrigerated Stock Area", category: "Cold Chain — Vaccines, Insulin, Biologics",
      items: [
        {
          id: "bsb1", name: "Hepatitis B Vaccine", form: "Injection", strength: "20mcg/ml",
          qty: 12, expiry: "09/2026", batch: "MSD-7741", storage_temp: "2–8°C ✓",
          controlled: false, secured: false, damaged: false, has_error: false
        },
        {
          id: "bsb2", name: "Fridge Temp Log", form: "Documentation", strength: "—",
          qty: "Gap: 6 days", expiry: "N/A", batch: "Log Book #4", storage_temp: "—",
          controlled: false, secured: false, damaged: false,
          has_error: true, error_type: "missing_log",
          error_title: "Temperature Log — 6-Day Recording Gap",
          error_explanation: "The pharmaceutical refrigerator temperature log has not been updated for 6 days. Jamaica had two power outages this week — temperature excursions during outages were not recorded.",
          risk: "If the fridge exceeded 8°C during an outage, vaccines and insulin in stock may be compromised. CARPHA cold chain guidelines require twice-daily logging. Administering degraded vaccines provides no protection.",
          risk_category: "compliance",
          correction: "Complete an immediate temperature check and document. Review data logger records if available. If a power outage occurred, initiate a cold chain breach investigation and quarantine affected items for pharmacist review."
        },
        {
          id: "bsb3", name: "NovoRapid FlexPen", form: "Injection", strength: "100 IU/ml",
          qty: 8, expiry: "03/2027", batch: "NVO-4412", storage_temp: "2–8°C ✓",
          controlled: false, secured: false, damaged: false, has_error: false
        },
      ]
    },
    {
      id: "bs-c", label: "General Back Stock", category: "Oral Medications — Bulk",
      items: [
        {
          id: "bsc1", name: "[UNLABELED BOX]", form: "Unknown", strength: "Unknown",
          qty: 1, expiry: "Unknown", batch: "No markings", storage_temp: "—",
          controlled: false, secured: false, damaged: false,
          has_error: true, error_type: "unlabeled",
          error_title: "Unlabeled Box in Stock Area",
          error_explanation: "A box with no labelling, batch number, product name, or expiry date is present in back stock. Its contents and origin are unknown.",
          risk: "Dispensing from an unlabeled container risks administering wrong medication or incorrect strength. Under Jamaica's Food and Drugs Act, all medicinal products must be properly labelled.",
          risk_category: "patient_safety",
          correction: "Quarantine with 'Do Not Use — Unidentified Product' label. Investigate origin. If unidentifiable, arrange safe disposal per pharmacy waste protocols."
        },
        {
          id: "bsc2", name: "Metoclopramide", form: "Tablet", strength: "10mg",
          qty: 200, expiry: "07/2027", batch: "JPS-3302 ⚠ RECALLED", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false,
          has_error: true, error_type: "recalled",
          error_title: "Recalled Product Still in Stock",
          error_explanation: "Batch JPS-3302 was subject to a Ministry of Health Jamaica recall notice 3 weeks ago (tablet dissolution failure). The batch remains in back stock.",
          risk: "Dispensing from a recalled batch risks patient harm. The pharmacy faces regulatory sanction and civil liability if recalled stock is dispensed after the recall notice.",
          risk_category: "patient_safety",
          correction: "Quarantine immediately with a 'RECALLED — Do Not Dispense' label. Complete the MoH Jamaica recall response form. Check dispensing records for any patients who received this batch."
        },
        {
          id: "bsc3", name: "Atorvastatin", form: "Tablet", strength: "20mg",
          qty: 180, expiry: "06/2027", batch: "JPS-4891", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false, has_error: false
        },
      ]
    },
  ],
  decision: {
    scenario_context: "You find Diazepam 5mg (60 tablets, Schedule 3) unsecured. The pharmacist is in a private consultation and cannot be interrupted immediately. You are the only other staff member on the floor.",
    question: "What do you do?",
    options: [
      {
        id: "d2-a", correct: true, consequence_type: "good",
        text: "Count the Diazepam tablets immediately, compare to the CD register, secure them in the cabinet, document everything with a timestamp, and inform the pharmacist as soon as they are free.",
        consequence: "Correct. Securing controlled drugs is an immediate technician responsibility under the Dangerous Drugs Act — pharmacist authorisation is not required for this action. Your swift response, accurate count, and documentation protect the pharmacy. The pharmacist reviews your report and initiates an investigation into the outgoing shift."
      },
      {
        id: "d2-b", correct: false, consequence_type: "bad",
        text: "Wait outside the consultation room to interrupt the pharmacist — they need to handle this personally.",
        consequence: "You wait 12 minutes. During this time, a delivery person briefly enters the back stock area. The subsequent count shows 4 tablets unaccounted for. Because the breach wasn't secured and documented promptly, it's impossible to determine when the discrepancy occurred. The pharmacy faces a Jamaica Pharmacy Council investigation."
      },
      {
        id: "d2-c", correct: false, consequence_type: "partial",
        text: "Secure the Diazepam immediately, but don't count — just lock it away and mention it at shift end.",
        consequence: "You secured the drugs — essential. But by not counting immediately, you missed a discrepancy. At shift end, the count is 3 tablets short. Because the cabinet has been accessed normally since, it is impossible to determine when or by whom. Always count controlled drugs when you secure them."
      },
      {
        id: "d2-d", correct: false, consequence_type: "bad",
        text: "Leave it — you believe only the pharmacist is authorised to handle controlled drugs.",
        consequence: "Incorrect. Pharmacy technicians are authorised to handle and secure controlled drugs under pharmacist supervision. 'Supervision' does not require the pharmacist to be physically present for every action. Leaving Schedule 3 drugs unsecured for 12+ minutes is a clear breach of the Dangerous Drugs Act. The technician can be held personally liable."
      },
    ]
  }
};

const otcScenario: Scenario = {
  id: "otc",
  title: "OTC Stock Room Rotation",
  location: "HealthPlus Pharmacy",
  territory: "Port of Spain, Trinidad & Tobago",
  time: "Friday 09:15 — Weekly OTC rotation and stock check",
  instructions: "Check the OTC inventory room before rotating stock onto the main floor. Flag every item or condition that represents a risk.",
  shelves: [
    {
      id: "otc-a", label: "Vitamins & Supplements", category: "Self-Care OTC Products",
      items: [
        {
          id: "otca1", name: "Vitamin C", form: "Tablet", strength: "1000mg",
          qty: 48, expiry: "06/2024", batch: "TT-8821", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false,
          has_error: true, error_type: "expired",
          error_title: "Expired OTC Product in Rotation Stock",
          error_explanation: "Vitamin C 1000mg expired June 2024 — over a year ago. Still in the stock rotation area and could be placed on the sales floor.",
          risk: "Selling expired products violates T&T Pharmacy Board regulations and the Consumer Protection Act. The patient receives a product of uncertain efficacy and the pharmacy faces regulatory sanction.",
          risk_category: "compliance",
          correction: "Remove and record in wastage log. Raise with the pharmacist to review the OTC rotation schedule — this product was missed in prior checks."
        },
        {
          id: "otca2", name: "Zinc + Selenium", form: "Tablet", strength: "25mg/200mcg",
          qty: 24, expiry: "02/2025", batch: "TT-7719", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false,
          has_error: true, error_type: "expired",
          error_title: "Second Expired Item — Same Shelf",
          error_explanation: "Zinc + Selenium expired February 2025. Two expired items on the same shelf indicates a systemic failure in OTC stock rotation, not a one-off oversight.",
          risk: "T&T Pharmacy Board inspectors treat multiple expired items on one shelf as evidence of inadequate stock management — a higher-severity finding than a single expired item.",
          risk_category: "compliance",
          correction: "Remove and log. Escalate to pharmacist as a systemic rotation issue. Conduct a full audit of this entire shelf section."
        },
        {
          id: "otca3", name: "Omega-3 Fish Oil", form: "Capsule", strength: "1000mg",
          qty: 60, expiry: "01/2026", batch: "TT-9013", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false, has_error: false
        },
      ]
    },
    {
      id: "otc-b", label: "Co-Storage Area", category: "Mixed — OTC Medications & Household Products",
      items: [
        {
          id: "otcb1", name: "Paracetamol 500mg", form: "Tablet", strength: "500mg",
          qty: 144, expiry: "08/2026", batch: "TT-4421", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false,
          has_error: true, error_type: "contamination_risk",
          error_title: "Oral Medication Stored with Cleaning Chemicals",
          error_explanation: "Paracetamol tablets are stored directly next to Dettol antiseptic and bleach concentrate. The cleaning product caps are not fully sealed.",
          risk: "Fumes and spills from chlorine-based cleaners can contaminate oral medications. In T&T's humid climate, packaging seals are more permeable. Dispensing contaminated product could cause chemical poisoning. Violates T&T Pharmacy Board storage regulations.",
          risk_category: "patient_safety",
          correction: "Separate oral medications from all cleaning products immediately into designated zones. Inspect Paracetamol packaging for compromise — quarantine if in doubt. Report co-storage violation to pharmacist."
        },
        {
          id: "otcb2", name: "Antifungal Cream", form: "Cream", strength: "1% w/w",
          qty: 18, expiry: "05/2027", batch: "TT-5509", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false, has_error: false
        },
      ]
    },
    {
      id: "otc-c", label: "High-Turnover GI Products", category: "Antacids, Laxatives, Rehydration",
      items: [
        {
          id: "otcc1", name: "Antacid Tablets", form: "Tablet", strength: "Al(OH)₃ 200mg",
          qty: 6, expiry: "10/2026", batch: "TT-4887", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false, reorder_point: 30,
          has_error: true, error_type: "below_reorder",
          error_title: "Critical Stock Below Reorder Point",
          error_explanation: "Only 6 units remain. Reorder point is 30. The last delivery was delayed 2 weeks due to Port of Spain customs clearance.",
          risk: "Antacids are high-frequency OTC products in T&T. Running out means patients turn to inappropriate alternatives. In small-island supply chains, stockouts can persist for weeks once they occur.",
          risk_category: "supply",
          correction: "Raise an urgent purchase order immediately. Contact the supplier to expedite. Check for alternative antacid formulations in stock. Alert the pharmacist so patients can be advised proactively."
        },
        {
          id: "otcc2", name: "ORS Sachets", form: "Sachet", strength: "WHO Formula",
          qty: 40, expiry: "03/2027", batch: "TT-6612", storage_temp: "25°C",
          controlled: false, secured: false, damaged: false, has_error: false
        },
        {
          id: "otcc3", name: "Humidity Log", form: "Documentation", strength: "—",
          qty: "Gap: 14 days", expiry: "N/A", batch: "Log Book #2", storage_temp: "—",
          controlled: false, secured: false, damaged: false,
          has_error: true, error_type: "missing_log",
          error_title: "Humidity Log — 14-Day Recording Gap",
          error_explanation: "The OTC stock room humidity log has not been updated for 14 days. Port of Spain humidity regularly exceeds 85%.",
          risk: "High humidity causes tablets to clump, capsules to degrade, and packaging to fail — reducing efficacy and creating patient risk. A 14-day gap is a clear compliance failure under T&T Pharmacy Board storage standards.",
          risk_category: "compliance",
          correction: "Complete an immediate humidity and temperature reading. Document with timestamp. Visually inspect stock for moisture damage. Implement daily logging. Report the gap to the pharmacist."
        },
      ]
    },
  ],
  decision: {
    scenario_context: "While doing your check, a customer picks up the last pack of antacid tablets from the display shelf. You know this is the last pack and the next delivery is delayed. The customer has a known peptic ulcer and takes antacids daily.",
    question: "What do you do?",
    options: [
      {
        id: "d3-a", correct: true, consequence_type: "good",
        text: "Sell the pack — the customer needs it and it's in date. Immediately raise an urgent reorder and notify the pharmacist of the stockout risk.",
        consequence: "Correct. The customer's immediate healthcare need comes first — withholding an in-date OTC product is not appropriate. Your reorder action and notification to the pharmacist are exactly right. The pharmacist also advises the customer about management strategies until the reorder arrives."
      },
      {
        id: "d3-b", correct: false, consequence_type: "bad",
        text: "Tell the customer you can't sell it — you need to conserve the last pack for prescription patients.",
        consequence: "Antacids are OTC products. Withholding an in-date, available product from a paying customer is not within your authority and is not justified. The customer, who has a peptic ulcer, leaves without medication and visits the emergency department overnight. A complaint is filed with the T&T Pharmacy Board."
      },
      {
        id: "d3-c", correct: false, consequence_type: "partial",
        text: "Sell the pack, but don't mention the stock issue — the delivery will probably arrive next week.",
        consequence: "Selling the product was correct. But you don't know the delivery will arrive next week — it's already delayed. By midweek, three more patients ask for antacids and leave empty-handed. Passive inaction in supply management is a professional failure. The reorder should have been raised the same day."
      },
      {
        id: "d3-d", correct: false, consequence_type: "partial",
        text: "Ask the customer to come back tomorrow — tell them a delivery is expected.",
        consequence: "You gave a patient inaccurate information. The delivery was already delayed by customs — you had no certainty it would arrive tomorrow. The customer plans their day around your promise, it doesn't arrive, and they are left without medication. Always give honest information: acknowledge the stockout and advise on what's available today."
      },
    ]
  }
};

const SCENARIOS: Scenario[] = [dispensaryScenario, backStockScenario, otcScenario];

// ── Helpers ───────────────────────────────────────────────────────────────────

function isExpired(expiry: string): boolean {
  if (!expiry || expiry === "N/A" || expiry === "Unknown" || expiry === "—") return false;
  const [month, year] = expiry.split("/");
  if (!month || !year || isNaN(+month) || isNaN(+year)) return false;
  return new Date(+year, +month - 1, 1) < new Date();
}

function riskLabel(cat?: RiskCategory) {
  if (cat === "patient_safety") return { text: "Patient Safety", cls: "bg-red-100 text-red-800" };
  if (cat === "compliance") return { text: "Compliance", cls: "bg-orange-100 text-orange-800" };
  if (cat === "supply") return { text: "Supply Risk", cls: "bg-blue-100 text-blue-800" };
  return { text: "Risk", cls: "bg-gray-100 text-gray-700" };
}

function errorLabel(type?: ErrorType): string {
  const map: Record<ErrorType, string> = {
    expired: "Expired Stock", fefo_violation: "FEFO Violation",
    unsecured_controlled: "Unsecured Controlled Drug", below_reorder: "Below Reorder Point",
    damaged: "Damaged Packaging", missing_log: "Missing Documentation",
    wrong_zone: "Wrong Storage Zone", recalled: "Recalled Product",
    contamination_risk: "Contamination Risk", unlabeled: "Unlabeled Product",
  };
  return type ? map[type] : "Error";
}

// ── ItemCard ──────────────────────────────────────────────────────────────────

interface ItemCardProps {
  item: ShelfItem;
  flagged: boolean;
  submitted: boolean;
  onToggle: () => void;
}

function ItemCard({ item, flagged, submitted, onToggle }: ItemCardProps) {
  const isDoc = item.form === "Documentation";
  const expired = isExpired(item.expiry);

  let border = "border-stone-200 bg-white";
  let indicator: React.ReactNode = null;

  if (!submitted) {
    if (flagged) border = "border-red-400 bg-red-50 ring-2 ring-red-100";
  } else {
    if (item.has_error && flagged)  { border = "border-red-500 bg-red-50"; indicator = <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full font-medium">Found ✓</span>; }
    if (item.has_error && !flagged) { border = "border-orange-400 bg-orange-50"; indicator = <span className="text-xs bg-orange-500 text-white px-1.5 py-0.5 rounded-full font-medium">Missed</span>; }
    if (!item.has_error && flagged) { border = "border-yellow-400 bg-yellow-50"; indicator = <span className="text-xs bg-yellow-500 text-white px-1.5 py-0.5 rounded-full font-medium">False alarm</span>; }
    if (!item.has_error && !flagged) border = "border-green-200 bg-green-50/40";
  }

  return (
    <div
      className={`relative rounded-lg border-2 p-3 transition-all select-none ${border} ${!submitted ? "cursor-pointer hover:shadow-md hover:scale-[1.01]" : ""}`}
      onClick={() => !submitted && onToggle()}
    >
      {flagged && !submitted && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">✗</span>
      )}
      {submitted && indicator && (
        <div className="absolute -top-2.5 right-2">{indicator}</div>
      )}

      {isDoc ? (
        <div className="flex items-start gap-2">
          <span className="text-2xl mt-0.5">📋</span>
          <div>
            <div className="font-semibold text-sm text-stone-800">{item.name}</div>
            <div className="text-xs text-stone-500">{item.batch}</div>
            <div className="mt-1 text-xs font-medium text-orange-700">{String(item.qty)}</div>
          </div>
        </div>
      ) : (
        <>
          <div className="font-semibold text-sm text-stone-900 leading-tight">{item.name}</div>
          <div className="text-xs text-stone-500 mb-2">{item.form} · {item.strength}</div>
          <div className="space-y-0.5 text-xs">
            <div className={`font-medium ${typeof item.qty === "number" && item.reorder_point && item.qty < item.reorder_point ? "text-red-600" : "text-stone-600"}`}>
              Qty: {String(item.qty)}{item.reorder_point ? ` / reorder: ${item.reorder_point}` : ""}
            </div>
            <div className={`font-medium ${expired ? "text-red-600" : "text-stone-600"}`}>Exp: {item.expiry}</div>
            <div className="text-stone-400">Batch: {item.batch}</div>
            <div className={`${item.storage_temp.startsWith("⚠") ? "text-orange-600 font-medium" : "text-stone-400"}`}>{item.storage_temp}</div>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {item.controlled && (
              <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${item.secured ? "bg-green-100 text-green-800" : "bg-purple-100 text-purple-800"}`}>
                {item.secured ? "🔒 Secured" : "🔓 Controlled"}
              </span>
            )}
            {item.damaged && <span className="text-xs bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded">Damaged pkg</span>}
            {expired && <span className="text-xs bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-medium">EXPIRED</span>}
          </div>
        </>
      )}
    </div>
  );
}

// ── ErrorDetail (shown after submit) ─────────────────────────────────────────

function ErrorDetail({ item, found }: { item: ShelfItem; found: boolean }) {
  const rl = riskLabel(item.risk_category);
  return (
    <div className={`rounded-lg border p-4 ${found ? "border-red-200 bg-red-50" : "border-orange-200 bg-orange-50"}`}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <span className="font-semibold text-sm text-stone-800">{item.name} {item.strength}</span>
          <span className="ml-2 text-xs text-stone-500">{errorLabel(item.error_type)}</span>
        </div>
        <div className="flex gap-2 shrink-0">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${rl.cls}`}>{rl.text}</span>
          {!found && <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full font-medium">Missed</span>}
        </div>
      </div>
      <p className="text-sm font-semibold text-stone-800 mb-1">{item.error_title}</p>
      <p className="text-sm text-stone-700 mb-2">{item.error_explanation}</p>
      <div className="space-y-1">
        <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Risk</p>
        <p className="text-sm text-stone-600">{item.risk}</p>
      </div>
      <div className="mt-2 pt-2 border-t border-stone-200 space-y-1">
        <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Correction</p>
        <p className="text-sm text-stone-700">{item.correction}</p>
      </div>
    </div>
  );
}

// ── ScenarioView ──────────────────────────────────────────────────────────────

function ScenarioView({ scenario }: { scenario: Scenario }) {
  const [flagged, setFlagged] = useState(new Set<string>());
  const [phase, setPhase] = useState<Phase>("inspect");
  const [chosenOption, setChosenOption] = useState<DecisionOption | null>(null);

  const allItems = scenario.shelves.flatMap(s => s.items);
  const errorItems = allItems.filter(i => i.has_error);
  const correctlyFound = [...flagged].filter(id => allItems.find(i => i.id === id)?.has_error);
  const falsePositives = [...flagged].filter(id => !allItems.find(i => i.id === id)?.has_error);
  const score = Math.round((correctlyFound.length / errorItems.length) * 100);

  function toggle(id: string) {
    setFlagged(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function reset() {
    setFlagged(new Set());
    setPhase("inspect");
    setChosenOption(null);
  }

  return (
    <div className="space-y-5">
      {/* Context header */}
      <div className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-teal-800 to-teal-700 px-5 py-4 text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-bold text-lg leading-tight">{scenario.title}</h2>
              <p className="text-teal-200 text-sm mt-0.5">{scenario.location} · {scenario.territory}</p>
            </div>
            <span className="shrink-0 bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-medium">{scenario.territory.split(",")[1]?.trim() || scenario.territory}</span>
          </div>
          <p className="mt-2 text-sm text-teal-100">⏱ {scenario.time}</p>
        </div>
        <div className="px-5 py-3 bg-amber-50 border-t border-amber-100">
          <p className="text-sm text-amber-900"><span className="font-semibold">Instructions:</span> {scenario.instructions}</p>
        </div>
      </div>

      {/* Shelves */}
      {scenario.shelves.map(shelf => (
        <div key={shelf.id} className="rounded-xl overflow-hidden border border-stone-200 shadow-sm">
          <div className="bg-gradient-to-r from-amber-900 to-amber-800 px-4 py-2.5 flex items-center justify-between">
            <div>
              <span className="text-white font-bold text-sm">{shelf.label}</span>
              <span className="text-amber-300 text-xs ml-2">— {shelf.category}</span>
            </div>
            <span className="text-amber-200 text-xs">{shelf.items.length} items</span>
          </div>
          <div className="bg-amber-50/60 p-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {shelf.items.map(item => (
              <ItemCard
                key={item.id}
                item={item}
                flagged={flagged.has(item.id)}
                submitted={phase !== "inspect"}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>
          {/* Shelf bottom bar (visual depth) */}
          <div className="h-3 bg-gradient-to-b from-amber-200 to-amber-300 border-t border-amber-400" />
        </div>
      ))}

      {/* Submit panel */}
      {phase === "inspect" && (
        <div className="rounded-xl border border-stone-200 bg-white p-4 flex items-center justify-between gap-4 shadow-sm">
          <div>
            <p className="font-semibold text-stone-800">
              {flagged.size === 0 ? "No items flagged yet" : `${flagged.size} item${flagged.size !== 1 ? "s" : ""} flagged`}
            </p>
            <p className="text-xs text-stone-500 mt-0.5">Click items on the shelves to flag errors, then submit your inspection.</p>
          </div>
          <Button
            className="bg-teal-700 hover:bg-teal-800 text-white shrink-0"
            disabled={flagged.size === 0}
            onClick={() => setPhase("results")}
          >
            Submit Inspection
          </Button>
        </div>
      )}

      {/* Results panel */}
      {(phase === "results" || phase === "decision" || phase === "consequence") && (
        <div className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-sm">
          <div className={`px-5 py-4 ${score >= 80 ? "bg-green-700" : score >= 50 ? "bg-amber-600" : "bg-red-700"} text-white`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold">{score}%</p>
                <p className="text-sm opacity-90 mt-0.5">
                  {correctlyFound.length}/{errorItems.length} errors identified
                  {falsePositives.length > 0 && ` · ${falsePositives.length} false alarm${falsePositives.length !== 1 ? "s" : ""}`}
                </p>
              </div>
              <div className="text-right text-sm opacity-80">
                {score >= 80 ? "Good catch!" : score >= 50 ? "Needs improvement" : "Critical items missed"}
              </div>
            </div>
          </div>

          <div className="p-5 space-y-4">
            {/* Correctly found */}
            {correctlyFound.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3">Correctly Identified ({correctlyFound.length})</p>
                <div className="space-y-3">
                  {errorItems.filter(i => flagged.has(i.id)).map(item => (
                    <ErrorDetail key={item.id} item={item} found={true} />
                  ))}
                </div>
              </div>
            )}

            {/* Missed errors */}
            {errorItems.filter(i => !flagged.has(i.id)).length > 0 && (
              <div>
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3">
                  Missed Errors ({errorItems.filter(i => !flagged.has(i.id)).length})
                </p>
                <div className="space-y-3">
                  {errorItems.filter(i => !flagged.has(i.id)).map(item => (
                    <ErrorDetail key={item.id} item={item} found={false} />
                  ))}
                </div>
              </div>
            )}

            {/* False positives */}
            {falsePositives.length > 0 && (
              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                <p className="text-xs font-semibold text-yellow-800 uppercase tracking-wide mb-1">
                  False Alarms ({falsePositives.length})
                </p>
                <p className="text-sm text-yellow-800">
                  You flagged {falsePositives.map(id => allItems.find(i => i.id === id)?.name).join(", ")} — these items had no compliance or safety issues. Review each item's details to understand why they were correct.
                </p>
              </div>
            )}

            {phase === "results" && (
              <div className="flex justify-end pt-2">
                <Button className="bg-teal-700 hover:bg-teal-800 text-white" onClick={() => setPhase("decision")}>
                  Proceed to Decision Scenario →
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Decision panel */}
      {(phase === "decision" || phase === "consequence") && (
        <div className="rounded-xl border border-indigo-200 bg-white overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-indigo-700 to-indigo-600 px-5 py-4 text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-1">Decision Scenario</p>
            <h3 className="font-bold text-base">{scenario.decision.scenario_context}</h3>
          </div>
          <div className="p-5">
            <p className="font-semibold text-stone-800 mb-4">{scenario.decision.question}</p>
            <div className="space-y-3">
              {scenario.decision.options.map(opt => {
                const isChosen = chosenOption?.id === opt.id;
                const showResult = phase === "consequence";
                let cls = "w-full text-left rounded-lg border-2 p-4 text-sm transition-all ";
                if (!showResult) {
                  cls += isChosen ? "border-indigo-500 bg-indigo-50" : "border-stone-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/40 cursor-pointer";
                } else {
                  if (isChosen) {
                    cls += opt.consequence_type === "good"
                      ? "border-green-400 bg-green-50"
                      : opt.consequence_type === "partial"
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-red-400 bg-red-50";
                  } else {
                    cls += "border-stone-100 bg-stone-50 opacity-50";
                  }
                }
                return (
                  <button
                    key={opt.id}
                    className={cls}
                    disabled={phase === "consequence"}
                    onClick={() => { setChosenOption(opt); setPhase("consequence"); }}
                  >
                    <div className="flex items-start gap-3">
                      {showResult && isChosen && (
                        <span className={`shrink-0 mt-0.5 text-lg ${opt.consequence_type === "good" ? "text-green-600" : opt.consequence_type === "partial" ? "text-yellow-600" : "text-red-600"}`}>
                          {opt.consequence_type === "good" ? "✓" : opt.consequence_type === "partial" ? "~" : "✗"}
                        </span>
                      )}
                      <span className="text-stone-800">{opt.text}</span>
                    </div>
                    {showResult && isChosen && (
                      <div className="mt-3 pt-3 border-t border-stone-200">
                        <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">What happened</p>
                        <p className="text-sm text-stone-700">{opt.consequence}</p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Consequence: try again */}
      {phase === "consequence" && (
        <div className="rounded-xl border border-stone-200 bg-white p-4 flex items-center justify-between">
          <p className="text-sm text-stone-600">
            {chosenOption?.consequence_type === "good"
              ? "Excellent work. You made the right call."
              : chosenOption?.consequence_type === "partial"
              ? "Partially correct — review what you missed above."
              : "Incorrect choice — review the consequence and try again."}
          </p>
          <Button variant="outline" onClick={reset}>Try Again</Button>
        </div>
      )}
    </div>
  );
}

// ── ShelfSimulator (main export) ──────────────────────────────────────────────

interface ShelfSimulatorProps { onExit?: () => void; }

export default function ShelfSimulator({ onExit }: ShelfSimulatorProps) {
  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">Prototype</span>
              <h1 className="font-bold text-stone-800">Inventory Spot the Errors — Shelf Simulator</h1>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">Three environments · Identify errors · See real consequences</p>
          </div>
          {onExit && (
            <Button variant="outline" size="sm" onClick={onExit}>← Exit Prototype</Button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Tabs defaultValue="dispensary">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="dispensary">🏥 Dispensary Shelves</TabsTrigger>
            <TabsTrigger value="back_stock">📦 Back Stock</TabsTrigger>
            <TabsTrigger value="otc">🛒 OTC Room</TabsTrigger>
          </TabsList>
          {SCENARIOS.map(s => (
            <TabsContent key={s.id} value={s.id}>
              <ScenarioView scenario={s} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
