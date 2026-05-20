// ============================================================================
// PIXOPHARM — Pharmacy Virtual Room Prototype
// Photorealistic room backgrounds (Hedra/Flux) + interactive zone overlays
// ============================================================================

import { useState } from "react";
import { Button } from "@/components/ui/button";

// ── Types ─────────────────────────────────────────────────────────────────────

type RiskCategory = "patient_safety" | "compliance" | "supply";
type ErrorType =
  | "expired" | "fefo_violation" | "unsecured_controlled" | "below_reorder"
  | "damaged" | "missing_log" | "wrong_zone" | "recalled"
  | "contamination_risk" | "unlabeled";
type Phase = "browse" | "inspect" | "submitted" | "decision" | "consequence";

interface ShelfItem {
  id: string; name: string; form: string; strength: string;
  qty: number | string; expiry: string; batch: string;
  storage_temp: string; controlled: boolean; secured: boolean; damaged: boolean;
  reorder_point?: number;
  has_error: boolean; error_type?: ErrorType; error_title?: string;
  error_explanation?: string; risk?: string;
  risk_category?: RiskCategory; correction?: string;
  displaced_to?: string; // id of zone where this item wrongly lives
}

interface ZoneConfig {
  id: string; label: string; icon: string; description: string;
  area: { top: string; left: string; width: string; height: string };
  items: ShelfItem[];
  missingNote?: string; // e.g. "Insulin should be here — it's missing"
}

interface DecisionOption {
  id: string; text: string; correct: boolean;
  consequence: string; consequence_type: "good" | "bad" | "partial";
}

interface RoomConfig {
  id: string; name: string; location: string; territory: string; time: string;
  bg: string; zones: ZoneConfig[];
  decision: { scenario_context: string; question: string; options: DecisionOption[]; };
}

// ── Room Data ─────────────────────────────────────────────────────────────────

const ROOMS: RoomConfig[] = [
  // ── DISPENSARY ────────────────────────────────────────────────────────────
  {
    id: "dispensary",
    name: "Dispensary",
    location: "Prescod Community Pharmacy",
    territory: "Bridgetown, Barbados",
    time: "Monday 07:55 — Pre-opening check",
    bg: "/pharmacy/dispensary.jpg",
    zones: [
      {
        id: "disp-shelves",
        label: "Dispensary Shelves",
        icon: "🗄️",
        description: "Main dispensary shelving — Shelves A, B & C",
        area: { top: "8%", left: "5%", width: "72%", height: "74%" },
        items: [
          {
            id: "ds1", name: "Metformin", form: "Tablet", strength: "500mg",
            qty: 24, expiry: "11/2024", batch: "BDS-3847", storage_temp: "25°C",
            controlled: false, secured: false, damaged: false,
            has_error: true, error_type: "expired",
            error_title: "Expired Stock on Active Shelf",
            error_explanation: "Batch BDS-3847 expired November 2024 — over 5 months ago. Still on the active dispensary shelf.",
            risk: "A diabetic patient could receive degraded medication. Barbados has among the highest T2 diabetes rates in CARICOM.",
            risk_category: "patient_safety",
            correction: "Remove immediately. Record in wastage log. Complete BDS wastage certificate. Notify pharmacist before opening."
          },
          {
            id: "ds2", name: "Atenolol", form: "Tablet", strength: "50mg",
            qty: 48, expiry: "09/2026", batch: "BDS-4102", storage_temp: "25°C",
            controlled: false, secured: false, damaged: false, has_error: false
          },
          {
            id: "ds3", name: "Amlodipine", form: "Tablet", strength: "5mg",
            qty: 30, expiry: "04/2026", batch: "BDS-4891 (front) ⚠",
            storage_temp: "25°C", controlled: false, secured: false, damaged: false,
            has_error: true, error_type: "fefo_violation",
            error_title: "FEFO Violation — Newer Batch in Front",
            error_explanation: "Batch BDS-4891 (exp 04/2026) placed in front of older BDS-4453 (exp 08/2025). Patients will receive newer stock first, leaving the older batch to expire behind it.",
            risk: "Caribbean heat (25–35°C) accelerates degradation. The earlier-expiring batch will be missed and dispensed after expiry.",
            risk_category: "patient_safety",
            correction: "Rotate stock — BDS-4453 (exp 08/2025) must go to the front. Apply FEFO throughout all shelves."
          },
          {
            id: "ds4", name: "Lisinopril", form: "Tablet", strength: "10mg",
            qty: 8, expiry: "07/2026", batch: "BDS-5012",
            storage_temp: "25°C", controlled: false, secured: false, damaged: false,
            reorder_point: 20,
            has_error: true, error_type: "below_reorder",
            error_title: "Stock Below Reorder Point",
            error_explanation: "Only 8 units remain. Reorder point is 20. No purchase order raised.",
            risk: "Lisinopril is a frontline antihypertensive. Barbados has extremely high hypertension prevalence. Inter-island delivery takes 7–14 days.",
            risk_category: "supply",
            correction: "Raise urgent purchase order now. Flag to pharmacist. Check emergency stock availability at other BDS pharmacies."
          },
          {
            id: "ds5", name: "Co-codamol", form: "Tablet", strength: "30/500mg",
            qty: 28, expiry: "02/2027", batch: "BDS-4977",
            storage_temp: "25°C", controlled: true, secured: false, damaged: false,
            has_error: true, error_type: "unsecured_controlled",
            error_title: "Controlled Drug Unsecured — Open Shelf",
            error_explanation: "Co-codamol 30/500mg is Schedule 3 under Barbados Pharmacy Act Cap 372D. It is sitting on an open dispensary shelf, not in the locked controlled drugs cabinet.",
            risk: "Criminal liability under Cap 372D. Vulnerable to diversion, theft, and misuse. Can result in licence suspension.",
            risk_category: "compliance",
            correction: "Transfer immediately to the CD cabinet and lock it. Record transfer in the CD register. Pharmacist to investigate how it ended up on the open shelf."
          },
          {
            id: "ds6", name: "Amoxicillin", form: "Capsule", strength: "500mg",
            qty: 60, expiry: "03/2027", batch: "BDS-5234",
            storage_temp: "25°C", controlled: false, secured: false, damaged: false,
            has_error: false
          },
          {
            id: "ds7", name: "Actrapid Insulin", form: "Injection", strength: "100 IU/ml",
            qty: 4, expiry: "06/2026", batch: "NVN-8821",
            storage_temp: "⚠ 25°C (ambient)", controlled: false, secured: false, damaged: false,
            has_error: true, error_type: "wrong_zone",
            error_title: "Insulin — Wrong Storage Zone",
            error_explanation: "Actrapid Insulin requires refrigeration at 2–8°C. This vial is on the open dispensary shelf at ambient temperature.",
            risk: "Insulin above 25°C loses potency rapidly. A diabetic patient receiving degraded insulin could suffer life-threatening hyperglycaemia.",
            risk_category: "patient_safety",
            correction: "Remove from shelf immediately. Check cold chain record — if excursion cannot be confirmed as within limits, quarantine. Transfer to pharmaceutical refrigerator."
          },
          {
            id: "ds8", name: "Levothyroxine", form: "Tablet", strength: "50mcg",
            qty: 20, expiry: "05/2026", batch: "BDS-4888",
            storage_temp: "25°C", controlled: false, secured: false, damaged: true,
            has_error: true, error_type: "damaged",
            error_title: "Damaged Packaging",
            error_explanation: "Outer packaging torn and compromised. Levothyroxine is sensitive to moisture and light — critical risks in the Caribbean climate.",
            risk: "Patients with hypothyroidism depend on precise dosing. Moisture ingress can degrade levothyroxine and destabilise thyroid levels.",
            risk_category: "patient_safety",
            correction: "Quarantine with 'Do Not Dispense' label. Record in damaged goods log. Pharmacist to assess inner blister integrity."
          },
        ],
        missingNote: undefined,
      },
      {
        id: "disp-fridge",
        label: "Pharmaceutical Refrigerator",
        icon: "❄️",
        description: "Cold chain — vaccines, insulin, biologics",
        area: { top: "8%", left: "79%", width: "18%", height: "78%" },
        missingNote: "⚠ Actrapid Insulin should be stored here at 2–8°C — it is currently on the open dispensary shelf.",
        items: [
          {
            id: "df1", name: "NovoRapid FlexPen", form: "Injection", strength: "100 IU/ml",
            qty: 3, expiry: "03/2027", batch: "NVO-4412",
            storage_temp: "2–8°C ✓", controlled: false, secured: false, damaged: false,
            has_error: false
          },
          {
            id: "df2", name: "Hepatitis B Vaccine", form: "Injection", strength: "20mcg/ml",
            qty: 8, expiry: "09/2026", batch: "MSD-7741",
            storage_temp: "2–8°C ✓", controlled: false, secured: false, damaged: false,
            has_error: false
          },
        ]
      },
    ],
    decision: {
      scenario_context: "07:58 — You found 6 errors. The pharmacist arrives at 08:15. A patient is already waiting outside.",
      question: "What is your first action?",
      options: [
        {
          id: "a", correct: true, consequence_type: "good",
          text: "Address all patient-safety errors before opening — remove expired Metformin, secure Co-codamol in the CD cabinet, transfer Insulin to the fridge, quarantine Levothyroxine. Document everything. Inform pharmacist on arrival.",
          consequence: "Correct. Patient safety and legal compliance take priority over opening time. Under Barbados Pharmacy Act Cap 372D the pharmacist will fully support this call. The 15-minute delay is documented and justified."
        },
        {
          id: "b", correct: false, consequence_type: "bad",
          text: "Open at 08:00 as scheduled — deal with errors during quiet periods.",
          consequence: "During the morning rush, a repeat patient receives the expired Metformin 500mg. They take it for two weeks before noticing. A formal dispensing error report is filed with the Barbados Drug Service. A compliance inspection follows under Cap 372D."
        },
        {
          id: "c", correct: false, consequence_type: "partial",
          text: "Remove the expired Metformin only (most obvious) and open on time. Mention others when the pharmacist arrives.",
          consequence: "You addressed expired stock but left unsecured Co-codamol and wrong-zone Insulin. During the morning rush, Co-codamol is dispensed without CD register entry. A 3-month audit flags the discrepancy. Partial action on known compliance issues is still a compliance failure."
        },
        {
          id: "d", correct: false, consequence_type: "partial",
          text: "Call the pharmacist at home for authorisation before taking any action.",
          consequence: "Call goes to voicemail. You wait. At 08:05 the patient demands service. Removing expired stock, securing controlled drugs, and quarantining wrong-zone items are within your scope of practice — pharmacist authorisation is not required. Waiting was unnecessary and dangerous."
        },
      ]
    }
  },

  // ── BACK STOCK ────────────────────────────────────────────────────────────
  {
    id: "backstock",
    name: "Back Stock",
    location: "Kingston Central Pharmacy",
    territory: "Kingston, Jamaica",
    time: "Thursday 14:30 — Weekly stock audit",
    bg: "/pharmacy/backstock.jpg",
    zones: [
      {
        id: "bs-left",
        label: "Left Shelving",
        icon: "📦",
        description: "Bulk medication stock — boxes and cartons",
        area: { top: "0%", left: "0%", width: "28%", height: "100%" },
        items: [
          {
            id: "bsl1", name: "[UNLABELED BOX]", form: "Unknown", strength: "Unknown",
            qty: 1, expiry: "Unknown", batch: "No markings", storage_temp: "—",
            controlled: false, secured: false, damaged: false,
            has_error: true, error_type: "unlabeled",
            error_title: "Unlabeled Box in Stock Area",
            error_explanation: "A box with no labelling, no batch number, no product name, and no expiry date is present in back stock.",
            risk: "Dispensing from an unlabeled container risks administering the wrong medication. Under Jamaica's Food and Drugs Act, all medicinal products must be properly labelled.",
            risk_category: "patient_safety",
            correction: "Do not open or use. Quarantine with 'Do Not Use — Unidentified' label. Investigate origin. If unidentifiable, arrange safe disposal."
          },
          {
            id: "bsl2", name: "Atorvastatin", form: "Tablet", strength: "20mg",
            qty: 180, expiry: "06/2027", batch: "JPS-4891", storage_temp: "25°C",
            controlled: false, secured: false, damaged: false, has_error: false
          },
          {
            id: "bsl3", name: "Metoclopramide", form: "Tablet", strength: "10mg",
            qty: 200, expiry: "07/2027", batch: "JPS-3302 ⚠ RECALLED", storage_temp: "25°C",
            controlled: false, secured: false, damaged: false,
            has_error: true, error_type: "recalled",
            error_title: "Recalled Product Still in Stock",
            error_explanation: "Batch JPS-3302 was subject to a Ministry of Health Jamaica recall notice 3 weeks ago (tablet dissolution failure). Still present in back stock.",
            risk: "Dispensing recalled medication risks patient harm. Pharmacy faces regulatory sanction and civil liability.",
            risk_category: "patient_safety",
            correction: "Quarantine immediately. Label 'RECALLED — Do Not Dispense'. Complete MoH Jamaica recall form. Check dispensing records for patients who may have received this batch."
          },
        ]
      },
      {
        id: "bs-fridge",
        label: "Refrigerator + Temp Log",
        icon: "🌡️",
        description: "Cold chain area — fridge with temperature documentation",
        area: { top: "5%", left: "30%", width: "38%", height: "95%" },
        items: [
          {
            id: "bsf1", name: "Fridge Temp Log", form: "Documentation", strength: "—",
            qty: "Gap: 6 days", expiry: "N/A", batch: "Log Book #4", storage_temp: "—",
            controlled: false, secured: false, damaged: false,
            has_error: true, error_type: "missing_log",
            error_title: "Temperature Log — 6-Day Recording Gap",
            error_explanation: "Pharmaceutical refrigerator temperature log not updated for 6 days. Jamaica had two power outages this week — any temperature excursions during outages were unrecorded.",
            risk: "If the fridge exceeded 8°C during an outage, vaccines and insulin may be compromised. CARPHA cold chain guidelines require twice-daily logging.",
            risk_category: "compliance",
            correction: "Complete immediate temperature check and document. Review data logger if available. If power outage confirmed, initiate cold chain breach investigation and quarantine affected items."
          },
          {
            id: "bsf2", name: "Hepatitis B Vaccine", form: "Injection", strength: "20mcg/ml",
            qty: 12, expiry: "09/2026", batch: "MSD-9901", storage_temp: "2–8°C ✓",
            controlled: false, secured: false, damaged: false, has_error: false
          },
        ]
      },
      {
        id: "bs-right",
        label: "Right Shelving + Secure Cabinet",
        icon: "🔒",
        description: "Controlled drugs area and general back stock",
        area: { top: "0%", left: "70%", width: "30%", height: "100%" },
        items: [
          {
            id: "bsr1", name: "Diazepam", form: "Tablet", strength: "5mg",
            qty: 60, expiry: "08/2026", batch: "JPS-1987", storage_temp: "25°C",
            controlled: true, secured: false, damaged: false,
            has_error: true, error_type: "unsecured_controlled",
            error_title: "Schedule 3 Drug Left Unsecured",
            error_explanation: "Diazepam 5mg is Schedule 3 under Jamaica's Dangerous Drugs Act. These tablets are outside the locked controlled drugs cabinet.",
            risk: "Criminal liability under the DDA. Any stock discrepancy could lead to prosecution of the pharmacist and technician.",
            risk_category: "compliance",
            correction: "Place in locked CD cabinet immediately. Count and verify against CD register. Report any discrepancy immediately to pharmacist and Jamaica Pharmacy Council."
          },
          {
            id: "bsr2", name: "Morphine Sulfate", form: "Tablet", strength: "10mg",
            qty: 45, expiry: "04/2027", batch: "JPS-2233", storage_temp: "25°C",
            controlled: true, secured: true, damaged: false, has_error: false
          },
        ]
      },
    ],
    decision: {
      scenario_context: "You find Diazepam 5mg (60 tablets, Schedule 3) unsecured. The pharmacist is in a private consultation and cannot be interrupted immediately.",
      question: "What do you do?",
      options: [
        {
          id: "a", correct: true, consequence_type: "good",
          text: "Count the Diazepam tablets, compare to the CD register, secure in the cabinet, document with a timestamp. Inform the pharmacist as soon as they are free.",
          consequence: "Correct. Securing controlled drugs is an immediate technician responsibility under the DDA — pharmacist authorisation is not required. Your swift action, accurate count, and documentation protect the pharmacy. The pharmacist initiates an investigation into the outgoing shift."
        },
        {
          id: "b", correct: false, consequence_type: "bad",
          text: "Wait outside the consultation room to interrupt the pharmacist — they need to handle this personally.",
          consequence: "You wait 12 minutes. During this time, a delivery person briefly enters the back stock area. The subsequent count shows 4 tablets unaccounted for. Because the breach wasn't secured and documented promptly, it's impossible to establish when the discrepancy occurred. The pharmacy faces a Jamaica Pharmacy Council investigation."
        },
        {
          id: "c", correct: false, consequence_type: "partial",
          text: "Secure the Diazepam immediately, but don't count — just lock it away and mention it at shift end.",
          consequence: "You secured the drugs — essential. But by not counting immediately, you missed a 3-tablet discrepancy. Because the cabinet has been accessed normally since, it's now impossible to determine when or by whom. Always count controlled drugs when you secure them."
        },
        {
          id: "d", correct: false, consequence_type: "bad",
          text: "Leave it — only the pharmacist is authorised to handle controlled drugs.",
          consequence: "Incorrect. Pharmacy technicians are authorised to handle and secure controlled drugs under pharmacist supervision — 'supervision' does not require physical presence for every action. Leaving Schedule 3 drugs unsecured is a clear breach of the DDA. You can be held personally liable."
        },
      ]
    }
  },

  // ── OTC ROOM ──────────────────────────────────────────────────────────────
  {
    id: "otc",
    name: "OTC Room",
    location: "HealthPlus Pharmacy",
    territory: "Port of Spain, Trinidad & Tobago",
    time: "Friday 09:15 — Weekly OTC rotation",
    bg: "/pharmacy/otc.jpg",
    zones: [
      {
        id: "otc-shelves",
        label: "OTC Product Shelves",
        icon: "💊",
        description: "Vitamins, supplements, antacids, OTC medications",
        area: { top: "0%", left: "0%", width: "72%", height: "100%" },
        items: [
          {
            id: "os1", name: "Vitamin C", form: "Tablet", strength: "1000mg",
            qty: 48, expiry: "06/2024", batch: "TT-8821", storage_temp: "25°C",
            controlled: false, secured: false, damaged: false,
            has_error: true, error_type: "expired",
            error_title: "Expired OTC Product in Rotation Stock",
            error_explanation: "Vitamin C expired June 2024 — over a year ago. Still in the stock rotation area and could be placed on the sales floor.",
            risk: "Selling expired products violates T&T Pharmacy Board regulations and the Consumer Protection Act.",
            risk_category: "compliance",
            correction: "Remove and log in wastage record. Raise with pharmacist as a rotation system failure — this should have been caught in prior checks."
          },
          {
            id: "os2", name: "Zinc + Selenium", form: "Tablet", strength: "25mg/200mcg",
            qty: 24, expiry: "02/2025", batch: "TT-7719", storage_temp: "25°C",
            controlled: false, secured: false, damaged: false,
            has_error: true, error_type: "expired",
            error_title: "Second Expired Item — Systemic Rotation Failure",
            error_explanation: "Zinc + Selenium expired February 2025. Two expired items on the same shelf indicates a systemic OTC rotation failure.",
            risk: "T&T Pharmacy Board inspectors treat multiple expired items as evidence of inadequate stock management — a higher-severity finding.",
            risk_category: "compliance",
            correction: "Remove and log. Escalate to pharmacist as a systemic issue. Conduct full audit of this shelf section."
          },
          {
            id: "os3", name: "Antacid Tablets", form: "Tablet", strength: "Al(OH)₃ 200mg",
            qty: 6, expiry: "10/2026", batch: "TT-4887", storage_temp: "25°C",
            controlled: false, secured: false, damaged: false, reorder_point: 30,
            has_error: true, error_type: "below_reorder",
            error_title: "Critical Stock Below Reorder Point",
            error_explanation: "Only 6 units remain. Reorder point is 30. Last delivery delayed 2 weeks by Port of Spain customs.",
            risk: "Antacids are high-frequency OTC products in T&T. Stockouts in small-island supply chains can persist for weeks.",
            risk_category: "supply",
            correction: "Raise urgent purchase order immediately. Contact supplier to expedite. Alert pharmacist so patients can be advised proactively."
          },
          {
            id: "os4", name: "Omega-3 Fish Oil", form: "Capsule", strength: "1000mg",
            qty: 60, expiry: "01/2026", batch: "TT-9013", storage_temp: "25°C",
            controlled: false, secured: false, damaged: false, has_error: false
          },
        ]
      },
      {
        id: "otc-chemicals",
        label: "Co-storage Area",
        icon: "⚗️",
        description: "Right side storage — inspect what is stored here",
        area: { top: "35%", left: "73%", width: "22%", height: "60%" },
        items: [
          {
            id: "oc1", name: "Paracetamol 500mg", form: "Tablet", strength: "500mg",
            qty: 144, expiry: "08/2026", batch: "TT-4421", storage_temp: "25°C",
            controlled: false, secured: false, damaged: false,
            has_error: true, error_type: "contamination_risk",
            error_title: "Oral Medication Stored with Cleaning Chemicals",
            error_explanation: "Paracetamol tablets are stored directly adjacent to bleach and household cleaning sprays. The cleaning product caps are not fully sealed.",
            risk: "Fumes and spills from chlorine-based cleaners can contaminate oral medications. In T&T's humidity (80–90%), packaging seals are more permeable. Dispensing contaminated product could cause poisoning.",
            risk_category: "patient_safety",
            correction: "Separate oral medications from all cleaning products into designated zones immediately. Inspect Paracetamol packaging. Report violation to pharmacist."
          },
        ]
      },
      {
        id: "otc-log",
        label: "Humidity Monitor",
        icon: "📋",
        description: "Wall-mounted humidity and temperature documentation",
        area: { top: "8%", left: "80%", width: "15%", height: "26%" },
        items: [
          {
            id: "ol1", name: "Humidity Log", form: "Documentation", strength: "—",
            qty: "Gap: 14 days", expiry: "N/A", batch: "Log Book #2", storage_temp: "—",
            controlled: false, secured: false, damaged: false,
            has_error: true, error_type: "missing_log",
            error_title: "Humidity Log — 14-Day Recording Gap",
            error_explanation: "The OTC stock room humidity log has not been updated for 14 days. Port of Spain humidity regularly exceeds 85%.",
            risk: "High humidity causes tablets to clump, capsules to degrade, and packaging to fail. A 14-day gap is a clear compliance failure under T&T Pharmacy Board storage standards.",
            risk_category: "compliance",
            correction: "Complete immediate humidity and temperature reading. Document with timestamp. Inspect stock for moisture damage. Implement daily logging going forward."
          },
        ]
      },
    ],
    decision: {
      scenario_context: "A customer picks up the last pack of antacid tablets from your display shelf. You know this is the last pack and delivery is delayed. The customer has a known peptic ulcer and takes antacids daily.",
      question: "What do you do?",
      options: [
        {
          id: "a", correct: true, consequence_type: "good",
          text: "Sell the pack — the customer needs it and it's in date. Immediately raise an urgent reorder and notify the pharmacist of the stockout risk.",
          consequence: "Correct. The customer's immediate healthcare need comes first. Your reorder action and pharmacist notification are exactly right. The pharmacist also advises the customer about interim management strategies."
        },
        {
          id: "b", correct: false, consequence_type: "bad",
          text: "Tell the customer you can't sell it — you need to conserve the last pack for prescription patients.",
          consequence: "Antacids are OTC products. Withholding an in-date product is not within your authority. The customer, who has a peptic ulcer, leaves without medication and visits the emergency department overnight. A complaint is filed with the T&T Pharmacy Board."
        },
        {
          id: "c", correct: false, consequence_type: "partial",
          text: "Sell the pack, but don't mention the stock issue — the delivery will probably arrive next week.",
          consequence: "Selling was correct. But you don't know delivery will arrive next week — it's already delayed by customs. By midweek, three more patients are turned away empty-handed. Passive inaction in supply management is a professional failure."
        },
        {
          id: "d", correct: false, consequence_type: "bad",
          text: "Ask the customer to come back tomorrow — tell them a delivery is expected.",
          consequence: "You gave a patient inaccurate information. The delivery was already delayed — you had no certainty it would arrive tomorrow. The customer plans around your promise, it doesn't arrive, and they are left without medication for two days."
        },
      ]
    }
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function isExpired(expiry: string) {
  if (!expiry || ["N/A", "Unknown", "—"].includes(expiry)) return false;
  const [m, y] = expiry.replace("⚠", "").trim().split("/");
  if (!m || !y || isNaN(+m) || isNaN(+y)) return false;
  return new Date(+y, +m - 1, 1) < new Date();
}

function riskBadge(cat?: RiskCategory) {
  if (cat === "patient_safety") return "bg-red-500/20 text-red-300 border border-red-500/40";
  if (cat === "compliance") return "bg-orange-500/20 text-orange-300 border border-orange-500/40";
  if (cat === "supply") return "bg-blue-500/20 text-blue-300 border border-blue-500/40";
  return "bg-gray-500/20 text-gray-300";
}

function riskLabel(cat?: RiskCategory) {
  if (cat === "patient_safety") return "Patient Safety";
  if (cat === "compliance") return "Compliance";
  if (cat === "supply") return "Supply Risk";
  return "Risk";
}

// ── Item card in inspection panel ─────────────────────────────────────────────

function PanelItemCard({
  item, flagged, submitted, onToggle
}: {
  item: ShelfItem; flagged: boolean; submitted: boolean; onToggle: () => void;
}) {
  const expired = isExpired(item.expiry);
  const isDoc = item.form === "Documentation";

  let border = "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20";
  let statusBadge: React.ReactNode = null;

  if (!submitted && flagged) border = "border-red-500/60 bg-red-500/10 ring-1 ring-red-500/30";

  if (submitted) {
    if (item.has_error && flagged)  { border = "border-red-500/70 bg-red-500/10"; statusBadge = <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-medium">Found ✓</span>; }
    if (item.has_error && !flagged) { border = "border-orange-400/70 bg-orange-500/10"; statusBadge = <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full font-medium">Missed !</span>; }
    if (!item.has_error && flagged) { border = "border-yellow-400/50 bg-yellow-500/10"; statusBadge = <span className="text-xs bg-yellow-600 text-white px-2 py-0.5 rounded-full">False alarm</span>; }
    if (!item.has_error && !flagged) border = "border-green-500/20 bg-green-500/5";
  }

  return (
    <div
      className={`rounded-xl border-2 p-3 transition-all duration-200 ${border} ${!submitted ? "cursor-pointer" : ""}`}
      onClick={() => !submitted && onToggle()}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="min-w-0">
          <div className="font-semibold text-sm text-white leading-tight truncate">
            {isDoc ? "📋 " : ""}{item.name}
            {item.controlled && !item.secured && <span className="ml-1.5 text-xs bg-purple-500/30 text-purple-300 px-1.5 py-0.5 rounded border border-purple-500/30">🔓 Ctrl</span>}
            {item.controlled && item.secured && <span className="ml-1.5 text-xs bg-green-500/20 text-green-300 px-1.5 py-0.5 rounded border border-green-500/20">🔒</span>}
          </div>
          <div className="text-xs text-white/50 mt-0.5">{item.form} · {item.strength}</div>
        </div>
        {submitted && statusBadge}
        {!submitted && flagged && <span className="shrink-0 text-xs bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold">✗</span>}
      </div>

      {!isDoc && (
        <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-xs">
          <span className={`${typeof item.qty === "number" && item.reorder_point && item.qty < item.reorder_point ? "text-red-400 font-medium" : "text-white/60"}`}>
            Qty: {String(item.qty)}
            {item.reorder_point && <span className="text-white/40"> /min {item.reorder_point}</span>}
          </span>
          <span className={expired ? "text-red-400 font-medium" : "text-white/60"}>
            Exp: {item.expiry}{expired && " ⚠"}
          </span>
          <span className="text-white/40 truncate">Batch: {item.batch}</span>
          <span className={item.storage_temp.startsWith("⚠") ? "text-orange-400 font-medium" : "text-white/40"}>{item.storage_temp}</span>
        </div>
      )}
      {isDoc && <div className="text-xs text-orange-400 font-medium mt-1">{String(item.qty)}</div>}
      {item.damaged && <div className="mt-1 text-xs bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded border border-orange-500/20 inline-block">Damaged packaging</div>}

      {/* Error detail revealed after submit */}
      {submitted && item.has_error && (
        <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold text-white/80">{item.error_title}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${riskBadge(item.risk_category)}`}>{riskLabel(item.risk_category)}</span>
          </div>
          <p className="text-xs text-white/60 leading-relaxed">{item.error_explanation}</p>
          <div>
            <div className="text-xs font-semibold text-red-400/80 mb-0.5">Risk</div>
            <p className="text-xs text-white/50 leading-relaxed">{item.risk}</p>
          </div>
          <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-2.5">
            <div className="text-xs font-semibold text-teal-400 mb-0.5">Correction</div>
            <p className="text-xs text-white/60 leading-relaxed">{item.correction}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Inspection Panel ──────────────────────────────────────────────────────────

function InspectionPanel({
  room, zone, flagged, phase,
  onToggle, onBack, onSubmit, onDecision,
  onSelectDecision, chosenOption
}: {
  room: RoomConfig; zone: ZoneConfig;
  flagged: Set<string>; phase: Phase;
  onToggle: (id: string) => void;
  onBack: () => void; onSubmit: () => void; onDecision: () => void;
  onSelectDecision: (opt: DecisionOption) => void;
  chosenOption: DecisionOption | null;
}) {
  const allItems = zone.items;
  const errorItems = allItems.filter(i => i.has_error);
  const zoneFlagged = allItems.filter(i => flagged.has(i.id));
  const correctFound = zoneFlagged.filter(i => i.has_error).length;
  const falsePos = zoneFlagged.filter(i => !i.has_error).length;
  const score = errorItems.length > 0 ? Math.round((correctFound / errorItems.length) * 100) : 100;

  const isDecision = phase === "decision" || phase === "consequence";

  return (
    <div className="flex flex-col h-full">
      {/* Panel header */}
      <div className="shrink-0 px-5 pt-5 pb-4 border-b border-white/10">
        <button onClick={onBack} className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 mb-3 transition-colors">
          ← Back to room
        </button>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">{zone.icon}</span>
          <h2 className="font-bold text-white text-base leading-tight">{zone.label}</h2>
        </div>
        <p className="text-xs text-white/50">{zone.description}</p>
        {zone.missingNote && (
          <div className="mt-2 text-xs bg-orange-500/15 text-orange-300 border border-orange-500/30 rounded-lg px-3 py-2">
            {zone.missingNote}
          </div>
        )}
      </div>

      {/* Items list */}
      {!isDecision && (
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
          {allItems.map(item => (
            <PanelItemCard
              key={item.id} item={item}
              flagged={flagged.has(item.id)}
              submitted={phase === "submitted"}
              onToggle={() => onToggle(item.id)}
            />
          ))}
        </div>
      )}

      {/* Decision panel */}
      {isDecision && (
        <div className="flex-1 overflow-y-auto px-4 py-4 min-h-0">
          <div className="mb-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4">
            <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">Decision Scenario</div>
            <p className="text-sm text-white/80 leading-relaxed">{room.decision.scenario_context}</p>
            <p className="mt-2 font-semibold text-white text-sm">{room.decision.question}</p>
          </div>
          <div className="space-y-2.5">
            {room.decision.options.map(opt => {
              const isChosen = chosenOption?.id === opt.id;
              const revealed = phase === "consequence";
              let cls = "w-full text-left rounded-xl border-2 p-4 text-sm transition-all ";
              if (!revealed) {
                cls += isChosen ? "border-indigo-500 bg-indigo-500/15" : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8 cursor-pointer";
              } else {
                if (isChosen) {
                  cls += opt.consequence_type === "good" ? "border-green-500/70 bg-green-500/10"
                    : opt.consequence_type === "partial" ? "border-yellow-500/70 bg-yellow-500/10"
                    : "border-red-500/70 bg-red-500/10";
                } else cls += "border-white/5 bg-white/3 opacity-40";
              }
              return (
                <button key={opt.id} className={cls} disabled={revealed}
                  onClick={() => !revealed && onSelectDecision(opt)}>
                  <div className="flex items-start gap-2.5">
                    {revealed && isChosen && (
                      <span className={`shrink-0 text-lg leading-none mt-0.5 ${opt.consequence_type === "good" ? "text-green-400" : opt.consequence_type === "partial" ? "text-yellow-400" : "text-red-400"}`}>
                        {opt.consequence_type === "good" ? "✓" : opt.consequence_type === "partial" ? "~" : "✗"}
                      </span>
                    )}
                    <span className="text-white/80 text-xs leading-relaxed">{opt.text}</span>
                  </div>
                  {revealed && isChosen && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <p className="text-xs text-white/60 leading-relaxed">{opt.consequence}</p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Footer actions */}
      <div className="shrink-0 px-4 py-4 border-t border-white/10 space-y-2">
        {phase === "inspect" && (
          <>
            <div className="text-xs text-white/40 text-center mb-2">
              {zoneFlagged.length === 0 ? "Tap items to flag suspected errors" : `${zoneFlagged.length} item${zoneFlagged.length !== 1 ? "s" : ""} flagged`}
            </div>
            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white"
              disabled={zoneFlagged.length === 0} onClick={onSubmit}>
              Submit Inspection
            </Button>
          </>
        )}
        {phase === "submitted" && (
          <>
            <div className={`text-center rounded-xl py-2.5 px-4 ${score >= 80 ? "bg-green-500/15 text-green-400" : score >= 50 ? "bg-amber-500/15 text-amber-400" : "bg-red-500/15 text-red-400"}`}>
              <span className="font-bold text-2xl">{score}%</span>
              <span className="text-xs ml-2 opacity-80">{correctFound}/{errorItems.length} errors found{falsePos > 0 ? ` · ${falsePos} false alarm${falsePos > 1 ? "s" : ""}` : ""}</span>
            </div>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" onClick={onDecision}>
              Proceed to Decision →
            </Button>
          </>
        )}
        {phase === "consequence" && (
          <Button variant="outline" className="w-full border-white/20 text-white/70 hover:bg-white/5"
            onClick={onBack}>
            Return to Room
          </Button>
        )}
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

interface PharmacyRoomProps { onExit?: () => void; }

export default function PharmacyRoomPrototype({ onExit }: PharmacyRoomProps) {
  const [activeRoom, setActiveRoom] = useState(0);
  const [activeZoneId, setActiveZoneId] = useState<string | null>(null);
  const [hoveredZoneId, setHoveredZoneId] = useState<string | null>(null);
  const [flagged, setFlagged] = useState(new Set<string>());
  const [phase, setPhase] = useState<Phase>("browse");
  const [chosenOption, setChosenOption] = useState<DecisionOption | null>(null);

  const room = ROOMS[activeRoom];
  const zone = room.zones.find(z => z.id === activeZoneId) ?? null;
  const panelOpen = !!zone && phase !== "browse";

  // All items across all zones
  const allItems = room.zones.flatMap(z => z.items);
  const allErrors = allItems.filter(i => i.has_error);
  const totalFlagged = [...flagged].filter(id => allItems.find(i => i.id === id));
  const correctTotal = totalFlagged.filter(id => allItems.find(i => i.id === id)?.has_error).length;

  function toggleFlag(id: string) {
    setFlagged(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }

  function openZone(id: string) {
    setActiveZoneId(id);
    setPhase("inspect");
  }

  function closeZone() {
    setActiveZoneId(null);
    setPhase("browse");
  }

  function switchRoom(idx: number) {
    setActiveRoom(idx);
    setActiveZoneId(null);
    setFlagged(new Set());
    setPhase("browse");
    setChosenOption(null);
  }

  // Zone completion status (for indicators on the room)
  function zoneStatus(z: ZoneConfig): "clear" | "partial" | "done" | "none" {
    if (phase === "browse" || phase === "inspect") return "none";
    const zItems = z.items;
    const zErrors = zItems.filter(i => i.has_error);
    const zFound = zItems.filter(i => i.has_error && flagged.has(i.id)).length;
    if (zErrors.length === 0) return "clear";
    if (zFound === zErrors.length) return "done";
    if (zFound > 0) return "partial";
    return "clear";
  }

  return (
    <div className="h-screen bg-slate-950 flex flex-col overflow-hidden">
      {/* Top bar */}
      <div className="shrink-0 h-12 bg-black/60 backdrop-blur border-b border-white/10 flex items-center px-4 gap-3 z-20">
        {onExit && (
          <button onClick={onExit} className="text-xs text-white/40 hover:text-white/70 transition-colors mr-1">← Exit</button>
        )}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-white/30 uppercase tracking-widest">Prototype</span>
          <span className="text-white/20">·</span>
          <span className="text-xs font-semibold text-white/60">Inventory Spot the Errors</span>
        </div>
        <div className="flex-1" />
        {/* Room tabs */}
        {ROOMS.map((r, i) => (
          <button key={r.id}
            onClick={() => switchRoom(i)}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${i === activeRoom ? "bg-teal-600 text-white" : "text-white/40 hover:text-white/70 hover:bg-white/5"}`}>
            {r.name}
          </button>
        ))}
      </div>

      {/* Scene area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Room image + zone overlays */}
        <div
          className="relative flex-1 overflow-hidden transition-all duration-500"
          style={{ filter: panelOpen ? "brightness(0.45)" : "brightness(1)" }}
        >
          <img
            src={room.bg}
            alt={room.name}
            className="w-full h-full object-cover"
            draggable={false}
          />

          {/* Location badge */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/10">
            <div className="text-xs font-bold text-white">{room.location}</div>
            <div className="text-xs text-white/50">{room.territory}</div>
            <div className="text-xs text-teal-400/80 mt-0.5">⏱ {room.time}</div>
          </div>

          {/* Instructions or score overlay */}
          {!panelOpen && phase === "browse" && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/10">
              <p className="text-xs text-white/70 text-center">Click a highlighted zone to begin inspection</p>
            </div>
          )}
          {!panelOpen && phase !== "browse" && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-xl px-5 py-2.5 border border-white/10">
              <p className="text-xs text-white/70 text-center">
                {correctTotal}/{allErrors.length} errors found across all zones
              </p>
            </div>
          )}

          {/* Zone overlays */}
          {room.zones.map(z => {
            const isHovered = hoveredZoneId === z.id && !panelOpen;
            const isActive = activeZoneId === z.id;
            const status = zoneStatus(z);

            return (
              <div
                key={z.id}
                className="absolute cursor-pointer transition-all duration-200"
                style={{
                  top: z.area.top, left: z.area.left,
                  width: z.area.width, height: z.area.height,
                  border: isHovered
                    ? "2px solid rgba(20,184,166,0.8)"
                    : isActive
                    ? "2px solid rgba(20,184,166,1)"
                    : status === "done" ? "2px solid rgba(34,197,94,0.6)"
                    : status === "partial" ? "2px solid rgba(251,146,60,0.6)"
                    : "2px solid rgba(255,255,255,0.08)",
                  background: isHovered
                    ? "rgba(20,184,166,0.12)"
                    : status !== "none"
                    ? status === "done" ? "rgba(34,197,94,0.05)" : "rgba(251,146,60,0.05)"
                    : "transparent",
                  boxShadow: isHovered ? "0 0 20px rgba(20,184,166,0.25), inset 0 0 20px rgba(20,184,166,0.08)" : "none",
                  borderRadius: "8px",
                }}
                onMouseEnter={() => !panelOpen && setHoveredZoneId(z.id)}
                onMouseLeave={() => setHoveredZoneId(null)}
                onClick={() => !panelOpen && openZone(z.id)}
              >
                {/* Zone label badge */}
                {(isHovered || status !== "none") && (
                  <div className={`absolute top-2 left-2 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-sm
                    ${status === "done" ? "bg-green-500/80 text-white" : status === "partial" ? "bg-orange-500/80 text-white" : "bg-black/70 text-white border border-white/20"}`}>
                    <span>{z.icon}</span>
                    <span>{z.label}</span>
                    {status === "done" && <span className="text-green-200">✓ Complete</span>}
                    {status === "partial" && <span className="text-orange-200">⚠ Incomplete</span>}
                    {isHovered && status === "none" && <span className="text-teal-300">→ Inspect</span>}
                  </div>
                )}
                {/* Error count badge */}
                {!isHovered && status === "none" && z.items.filter(i => i.has_error).length > 0 && (
                  <div className="absolute bottom-2 right-2">
                    <div className="w-5 h-5 rounded-full bg-teal-500/60 border border-teal-400/40 animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Inspection panel */}
        <div
          className="shrink-0 w-96 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 overflow-hidden flex flex-col transition-all duration-500"
          style={{
            width: panelOpen ? "384px" : "0px",
            opacity: panelOpen ? 1 : 0,
          }}
        >
          {zone && (
            <InspectionPanel
              room={room} zone={zone}
              flagged={flagged} phase={phase}
              onToggle={toggleFlag}
              onBack={closeZone}
              onSubmit={() => setPhase("submitted")}
              onDecision={() => setPhase("decision")}
              onSelectDecision={(opt) => { setChosenOption(opt); setPhase("consequence"); }}
              chosenOption={chosenOption}
            />
          )}
        </div>
      </div>
    </div>
  );
}
