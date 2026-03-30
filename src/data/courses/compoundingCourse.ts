// ============================================================================
// PIXOPHARM LMS — Compounding & Dosage Forms (I5)
// Full Course Content: 6 Modules, 21 Lessons, ~60 Quiz Questions
// Focus: Caribbean compounding practice, tropical stability, paediatric formulations
// ============================================================================

import type { Module, FullCourse } from '../types';

// ============================================================================
// MODULE 1 — Introduction to Pharmaceutical Dosage Forms
// ============================================================================

const module1: Module = {
  id: "m1-dosage-forms",
  number: 1,
  title: "Introduction to Pharmaceutical Dosage Forms",
  description:
    "Explore the science behind how medicines are formulated and delivered to patients. Understand the classification of dosage forms by route of administration, the critical role of excipients, and how Caribbean climate conditions influence formulation choices for pharmacy technicians across the region.",
  learningObjectives: [
    "Classify pharmaceutical dosage forms by route of administration and physical state",
    "Explain the role of excipients in drug formulations and their impact on stability",
    "Compare solid, semi-solid, liquid, and sterile dosage forms with Caribbean-relevant examples",
    "Evaluate how tropical climate conditions (heat, humidity) affect dosage form selection in the Caribbean",
  ],
  lessons: [
    // ── Lesson 1.1 ──
    {
      id: "m1-l1",
      title: "Overview of Dosage Forms and Routes of Administration",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Why Dosage Forms Matter",
        },
        {
          type: "text",
          body: "A pharmaceutical dosage form is the physical form in which a drug is produced and dispensed. The same active pharmaceutical ingredient (API) can be delivered in dozens of different dosage forms — tablets, capsules, syrups, creams, injections, suppositories, patches, and more. Each form is designed to deliver the drug to the body in a specific way, at a specific rate, and to a specific site. For pharmacy technicians in the Caribbean, understanding dosage forms is essential because many patients rely on compounded preparations when commercially manufactured products are unavailable or unsuitable.",
        },
        {
          type: "text",
          body: "The choice of dosage form directly affects a drug's bioavailability (how much of the drug reaches systemic circulation), onset of action, duration of effect, stability, patient compliance, and cost. In the Caribbean context, where tropical heat and humidity can degrade certain formulations rapidly, dosage form selection takes on additional significance. A cream that performs perfectly in a European climate may separate or degrade within weeks in a Trinidadian pharmacy without air conditioning.",
        },
        {
          type: "key-term",
          term: "Dosage Form",
          definition:
            "The physical form in which a drug is manufactured, dispensed, and administered to a patient. Examples include tablets, capsules, solutions, suspensions, creams, ointments, suppositories, and injections. The dosage form determines the route of administration, the rate of drug release, and the stability of the product.",
        },
        {
          type: "heading",
          level: 3,
          text: "Routes of Administration",
        },
        {
          type: "text",
          body: "The route of administration refers to the path by which a drug enters the body. Each route has distinct advantages, limitations, and appropriate dosage forms. Caribbean pharmacy technicians must be familiar with all common routes, as they will encounter prescriptions for each and may be involved in compounding preparations for several of them.",
        },
        {
          type: "table",
          caption: "Common Routes of Administration and Their Dosage Forms",
          headers: ["Route", "Description", "Common Dosage Forms", "Caribbean Considerations"],
          rows: [
            [
              "Oral",
              "Swallowed and absorbed through the GI tract",
              "Tablets, capsules, syrups, suspensions, powders",
              "Syrups and suspensions may require refrigeration difficult to maintain in rural Caribbean areas; paediatric liquids are frequently compounded locally",
            ],
            [
              "Topical",
              "Applied to the skin or mucous membranes for local effect",
              "Creams, ointments, gels, lotions, pastes",
              "High humidity and perspiration in tropical climates affect absorption and product stability; creams may liquefy in heat",
            ],
            [
              "Rectal",
              "Inserted into the rectum for local or systemic effect",
              "Suppositories, enemas",
              "Cocoa butter suppositories melt at tropical temperatures; synthetic bases (e.g., polyethylene glycol) preferred in the Caribbean",
            ],
            [
              "Parenteral",
              "Injected (IV, IM, SC) bypassing the GI tract",
              "Solutions, suspensions, emulsions for injection",
              "Cold chain management is critical; sterile compounding requires controlled environments challenging to maintain in humid climates",
            ],
            [
              "Inhalation",
              "Inhaled into the lungs",
              "Metered-dose inhalers (MDIs), dry powder inhalers (DPIs), nebuliser solutions",
              "Saharan dust season (June–September) increases demand for respiratory medications across the Eastern Caribbean",
            ],
            [
              "Ophthalmic",
              "Applied to the eye",
              "Eye drops, eye ointments",
              "Must be sterile; multi-dose containers must be discarded within 28 days of opening — patients must be counselled on this strictly",
            ],
            [
              "Otic",
              "Applied to the ear",
              "Ear drops",
              "Tropical ear infections (otitis externa/swimmer's ear) are common in Caribbean populations due to warm, humid climate and swimming",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Saharan Dust and Respiratory Dosage Forms",
          body: "Every year between June and September, vast plumes of Saharan dust cross the Atlantic and settle over the Caribbean. This phenomenon significantly increases the incidence of asthma attacks, allergic rhinitis, and other respiratory conditions across the region. Pharmacy technicians should anticipate increased demand for inhalers, nebuliser solutions, and antihistamines during this period and ensure adequate stock of respiratory dosage forms.",
        },
        {
          type: "key-term",
          term: "Bioavailability",
          definition:
            "The fraction of an administered dose of a drug that reaches the systemic circulation in an unchanged, pharmacologically active form. Intravenous administration has 100% bioavailability by definition; oral bioavailability varies widely depending on the drug's formulation, the patient's GI function, and first-pass metabolism in the liver.",
        },
        {
          type: "knowledge-check",
          question: "A patient in Tobago requires a suppository medication. Why might a polyethylene glycol (PEG) base be preferred over a cocoa butter base in the Caribbean?",
          options: [
            "PEG bases are cheaper than cocoa butter",
            "Cocoa butter melts at body temperature, but in tropical ambient temperatures it may soften or melt before use",
            "PEG bases taste better",
            "Cocoa butter is only available in European pharmacies",
          ],
          correctIndex: 1,
          explanation:
            "Cocoa butter has a melting point of approximately 34°C — close to body temperature. In the Caribbean, where ambient temperatures regularly exceed 30°C, cocoa butter suppositories may soften or melt during storage, making them impractical unless refrigerated. PEG bases have higher melting points and dissolve in rectal fluids rather than melting, making them more suitable for tropical conditions.",
        },
      ],
    },
    // ── Lesson 1.2 ──
    {
      id: "m1-l2",
      title: "Solid Dosage Forms: Tablets, Capsules & Powders",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Most Common Dosage Forms in Pharmacy",
        },
        {
          type: "text",
          body: "Solid dosage forms — tablets, capsules, and powders — represent the majority of medications dispensed in Caribbean pharmacies. They are generally the most stable dosage forms, the most convenient for patients, and the most economical to manufacture and transport. However, even solid dosage forms face challenges in the tropical Caribbean environment, particularly from moisture absorption and heat exposure.",
        },
        {
          type: "text",
          body: "Tablets are the single most common dosage form worldwide. A tablet is a compressed solid containing the active ingredient mixed with excipients that serve various functions: binders hold the tablet together, disintegrants help it break apart in the GI tract, lubricants prevent the tablet from sticking to manufacturing equipment, and coatings protect the drug from stomach acid or mask an unpleasant taste. Understanding these components is essential for compounding technicians who may need to prepare tablet triturations or powder blends.",
        },
        {
          type: "key-term",
          term: "Excipient",
          definition:
            "Any pharmacologically inactive substance used alongside the active pharmaceutical ingredient in a dosage form. Excipients serve specific purposes such as binding (holding a tablet together), disintegrating (helping a tablet break apart), lubricating (preventing sticking during manufacture), flavouring (improving taste), preserving (preventing microbial growth), and colouring (aiding identification).",
        },
        {
          type: "table",
          caption: "Types of Solid Dosage Forms",
          headers: ["Dosage Form", "Description", "Advantages", "Caribbean Storage Considerations"],
          rows: [
            [
              "Compressed Tablets",
              "Powder compressed into a solid disc or shape",
              "Accurate dosing, stable, portable, long shelf life",
              "Store below 30°C; moisture-sensitive tablets (e.g., aspirin) require desiccants in humid Caribbean climates",
            ],
            [
              "Enteric-Coated Tablets",
              "Coated to resist stomach acid; dissolve in the intestine",
              "Protects acid-sensitive drugs; reduces gastric irritation",
              "Coating may soften in extreme heat; store in cool, dry place; never crush",
            ],
            [
              "Hard Gelatin Capsules",
              "Two-piece capsule shell filled with powder or granules",
              "Masks taste; easy to swallow; can be compounded in-pharmacy",
              "Gelatin absorbs moisture in high humidity (>60% RH); capsules may become tacky or stick together; use desiccants",
            ],
            [
              "Soft Gelatin Capsules",
              "One-piece sealed capsule containing liquid or semi-solid fill",
              "Ideal for oils and liquid drugs; improved bioavailability",
              "Very sensitive to heat and humidity; may soften, deform, or leak in tropical storage",
            ],
            [
              "Powders and Granules",
              "Finely divided solid intended for reconstitution or direct use",
              "Flexible dosing; good for paediatric use; stable when dry",
              "Extremely hygroscopic in Caribbean humidity; must be stored in airtight containers with desiccants",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Humidity and Solid Dosage Forms",
          body: "Caribbean humidity regularly exceeds 80% RH, especially during the wet season (June–December). This level of moisture can cause tablets to absorb water, become soft, crumble, or undergo chemical degradation. Hard gelatin capsules may become tacky and stick together, while effervescent tablets may begin reacting prematurely. Always store solid dosage forms in tightly sealed containers, use desiccant packets, and monitor storage conditions. In pharmacies without climate control, consider the viability of compounding hygroscopic preparations.",
        },
        {
          type: "heading",
          level: 3,
          text: "Modified-Release Solid Dosage Forms",
        },
        {
          type: "text",
          body: "Modified-release dosage forms are engineered to control the rate or location of drug release. These include sustained-release (SR), extended-release (XR/ER), controlled-release (CR), and delayed-release formulations. These products must never be crushed, split, or chewed (unless specifically designed for this), as doing so can cause dose dumping — the immediate release of the entire dose, which can be dangerous or fatal.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "NEVER Crush Modified-Release Tablets",
          body: "Crushing or chewing a modified-release tablet destroys its release mechanism and can cause the entire dose to be absorbed at once (dose dumping). This is particularly dangerous with opioids, cardiovascular drugs, and psychotropic medications. When compounding for patients who cannot swallow tablets (e.g., paediatric or elderly patients), always verify whether the source drug is an immediate-release formulation before crushing. If a modified-release formulation is the only option, consult the pharmacist for an alternative formulation strategy.",
        },
        {
          type: "knowledge-check",
          question: "A pharmacy in Kingston, Jamaica, reports that their hard gelatin capsules are becoming tacky and sticking together during the wet season. What is the most likely cause and appropriate corrective action?",
          options: [
            "The capsules are expired — discard and reorder",
            "High ambient humidity is causing the gelatin shells to absorb moisture — add desiccant packets and ensure containers are tightly sealed",
            "The capsules were manufactured incorrectly — return to supplier",
            "This is normal for gelatin capsules and requires no action",
          ],
          correctIndex: 1,
          explanation:
            "Gelatin is highly hygroscopic and readily absorbs moisture from the surrounding environment. In Jamaica's wet season, humidity regularly exceeds 80% RH, causing gelatin capsules to become soft, tacky, and prone to sticking together. The corrective actions are to store capsules in tightly sealed containers with desiccant packets and, where possible, in climate-controlled storage areas.",
        },
        {
          type: "key-term",
          term: "Dose Dumping",
          definition:
            "The unintended, rapid release of the entire amount of drug contained in a modified-release dosage form. This can occur when a sustained-release tablet is crushed, chewed, or exposed to alcohol, leading to potentially toxic plasma drug concentrations. Dose dumping is a serious safety concern and can be fatal.",
        },
      ],
    },
    // ── Lesson 1.3 ──
    {
      id: "m1-l3",
      title: "Liquid Dosage Forms: Solutions, Suspensions & Emulsions",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Liquid Preparations in Caribbean Pharmacy Practice",
        },
        {
          type: "text",
          body: "Liquid dosage forms are among the most frequently compounded preparations in Caribbean pharmacies. They are essential for paediatric patients who cannot swallow tablets, for elderly patients with dysphagia, and for patients requiring flexible dosing. Liquid dosage forms include solutions (where the drug is completely dissolved), suspensions (where the drug is dispersed as fine particles in a vehicle), and emulsions (where two immiscible liquids are combined with an emulsifying agent).",
        },
        {
          type: "text",
          body: "In the Caribbean, liquid preparations face unique stability challenges. High ambient temperatures accelerate chemical degradation, microbial growth is more rapid in warm conditions, and many liquid preparations require refrigeration that may be unreliable in areas with frequent power outages. Pharmacy technicians must understand the science behind each type of liquid preparation to compound them effectively and counsel patients on proper storage and use.",
        },
        {
          type: "table",
          caption: "Types of Liquid Dosage Forms",
          headers: ["Type", "Definition", "Example", "Key Characteristic"],
          rows: [
            [
              "Solution",
              "Homogeneous mixture where the drug is completely dissolved in a solvent",
              "Simple syrup, oral rehydration solution (ORS)",
              "Clear; no settling; uniform concentration throughout",
            ],
            [
              "Suspension",
              "Heterogeneous mixture where insoluble drug particles are dispersed in a liquid vehicle",
              "Amoxicillin oral suspension, calamine lotion",
              "Requires shaking before use; particles settle over time; 'Shake Well' label mandatory",
            ],
            [
              "Emulsion",
              "Mixture of two immiscible liquids (oil and water) stabilised by an emulsifying agent",
              "Cod liver oil emulsion, liquid paraffin emulsion",
              "Oil-in-water (o/w) or water-in-oil (w/o); may cream or separate over time",
            ],
            [
              "Elixir",
              "Clear, sweetened, hydroalcoholic solution",
              "Diphenhydramine elixir",
              "Contains alcohol (typically 10–25%); self-preserving due to alcohol content",
            ],
            [
              "Syrup",
              "Concentrated, viscous, aqueous solution of sugar (typically 66.7% w/v sucrose)",
              "Cough syrups, paediatric vitamin preparations",
              "High sugar concentration acts as preservative; may crystallise in cool storage",
            ],
          ],
        },
        {
          type: "key-term",
          term: "Suspension",
          definition:
            "A coarse dispersion of insoluble solid particles (the dispersed phase) in a liquid vehicle (the dispersion medium). Suspensions require shaking before use to redistribute settled particles and ensure accurate dosing. A well-formulated suspension should settle slowly, redisperse easily upon shaking, and pour smoothly. The particle size and viscosity of the vehicle are critical to stability.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The 'Shake Well' Rule",
          body: "Every suspension dispensed in the Caribbean — whether commercially manufactured or compounded — must bear a 'SHAKE WELL BEFORE USE' auxiliary label. Failing to shake a suspension before measuring a dose can result in the patient receiving a sub-therapeutic dose from the top of the bottle (mostly vehicle) or a toxic dose from the bottom (concentrated drug particles). During patient counselling, physically demonstrate the correct shaking technique: invert and shake vigorously for 10–15 seconds, not a gentle swirl.",
        },
        {
          type: "heading",
          level: 3,
          text: "Reconstitution of Dry Powder for Suspension",
        },
        {
          type: "text",
          body: "Many oral suspensions — particularly antibiotics like amoxicillin, co-amoxiclav, and cephalexin — are supplied as dry powder for reconstitution. This is because the drug is unstable in liquid form and would degrade rapidly, especially in tropical storage. The powder is stable at room temperature, but once reconstituted with water, the preparation typically has a beyond-use date of only 7–14 days, and many require refrigeration. This short stability window is a critical counselling point in the Caribbean, where patients may not have reliable refrigeration.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Check the manufacturer's instructions for the correct volume of water to add",
            "Use purified or distilled water — never tap water (Caribbean tap water quality varies significantly by island and district)",
            "Tap the bottle to loosen the powder before adding water",
            "Add approximately half the required volume of water first and shake vigorously",
            "Add the remaining water and shake again until the powder is uniformly dispersed",
            "Label with the reconstitution date, beyond-use date, and 'SHAKE WELL' and 'KEEP REFRIGERATED' auxiliary labels",
            "Counsel the patient on storage, shaking, accurate measuring (using an oral syringe, not a household spoon), and the beyond-use date",
          ],
        },
        {
          type: "case-study",
          title: "Case Study: The Amoxicillin That Lost Its Potency",
          scenario:
            "A mother brings her 4-year-old child back to a pharmacy in San Fernando, Trinidad, complaining that the amoxicillin suspension prescribed for the child's ear infection 'isn't working'. The child has been on the medication for 5 days. Upon questioning, the pharmacy technician discovers that the mother has been storing the reconstituted suspension on the kitchen counter (ambient temperature ~31°C) because her refrigerator is not working. The suspension was reconstituted 10 days ago.",
          questions: [
            "What is the likely reason the medication is not effective?",
            "What should the pharmacy technician advise the mother to do?",
            "How could this situation have been prevented at the point of dispensing?",
          ],
          discussion:
            "Reconstituted amoxicillin suspension is unstable at temperatures above 25°C and typically has a beyond-use date of 14 days when refrigerated, or 7 days at room temperature (depending on the manufacturer). Stored at 31°C for 10 days, the drug has almost certainly degraded significantly, losing potency. The technician should refer the mother to the pharmacist for a new prescription and fresh supply, counsel on the critical importance of refrigeration, and explore solutions if refrigeration is unavailable (e.g., storing in a cool bag with ice, using a neighbour's refrigerator, or requesting an alternative formulation). At the point of dispensing, the technician should have asked about refrigeration availability and offered guidance accordingly. This case illustrates why Caribbean pharmacy technicians must proactively assess a patient's storage situation before dispensing temperature-sensitive preparations.",
        },
        {
          type: "knowledge-check",
          question: "Which type of liquid dosage form requires a 'SHAKE WELL BEFORE USE' label?",
          options: [
            "Solutions",
            "Elixirs",
            "Suspensions",
            "All liquid dosage forms",
          ],
          correctIndex: 2,
          explanation:
            "Suspensions contain insoluble drug particles dispersed in a liquid vehicle. These particles settle over time due to gravity (sedimentation). Shaking before use is essential to redistribute the particles uniformly throughout the vehicle, ensuring the patient receives an accurate dose. Solutions and elixirs are homogeneous and do not require shaking.",
        },
      ],
    },
    // ── Lesson 1.4 ──
    {
      id: "m1-l4",
      title: "Semi-Solid and Speciality Dosage Forms",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Creams, Ointments, Gels, and Beyond",
        },
        {
          type: "text",
          body: "Semi-solid dosage forms — creams, ointments, gels, and pastes — are applied topically to the skin or mucous membranes. They are among the most frequently compounded preparations in Caribbean pharmacies because many dermatological conditions common in tropical climates (fungal infections, eczema exacerbated by sweat, sunburn, insect bites) require customised topical treatments. Understanding the differences between these semi-solid forms is essential for selecting the right base for the right clinical situation.",
        },
        {
          type: "table",
          caption: "Semi-Solid Dosage Forms Compared",
          headers: ["Dosage Form", "Base Type", "Feel on Skin", "Best For", "Tropical Stability"],
          rows: [
            [
              "Ointment",
              "Oleaginous (oil-based, e.g., white petrolatum) or absorption base",
              "Greasy, occlusive",
              "Dry skin conditions, protection, moisture barrier",
              "Very stable; does not lose water; can feel uncomfortable in tropical heat",
            ],
            [
              "Cream",
              "Oil-in-water (o/w) or water-in-oil (w/o) emulsion",
              "Light, spreadable, non-greasy (o/w) or richer (w/o)",
              "Most dermatological conditions; cosmetically elegant",
              "May separate in extreme heat (>35°C); requires preservatives; o/w preferred in tropics",
            ],
            [
              "Gel",
              "Aqueous or hydroalcoholic with gelling agent (e.g., carbomer)",
              "Cool, non-greasy, transparent or translucent",
              "Oily skin, acne, local pain relief, scalp conditions",
              "Generally stable; cooling sensation appreciated in tropical heat; may dry out if exposed to air",
            ],
            [
              "Paste",
              "Ointment with high percentage (>20%) of powder",
              "Stiff, thick, protective",
              "Localised skin lesions, diaper rash (zinc oxide paste)",
              "Very stable; adherent; protective barrier against tropical moisture",
            ],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Choosing the Right Base in the Tropics",
          body: "In the Caribbean, patients generally prefer non-greasy preparations. Oil-in-water (o/w) creams and gels are better tolerated than ointments in hot, humid weather because they allow the skin to breathe and do not trap perspiration. However, ointments remain the best choice for very dry, cracked skin or when a protective moisture barrier is needed (e.g., for labourers working with irritants). Always consider the patient's lifestyle, occupation, and the ambient conditions when recommending a compounded topical preparation.",
        },
        {
          type: "key-term",
          term: "Occlusive",
          definition:
            "Describing a topical preparation that forms a barrier over the skin, preventing moisture loss and blocking external irritants. Ointments are the most occlusive dosage form. While beneficial for dry skin, occlusive preparations can trap heat and perspiration in tropical climates, causing discomfort or worsening certain skin conditions.",
        },
        {
          type: "heading",
          level: 3,
          text: "Speciality Dosage Forms",
        },
        {
          type: "text",
          body: "Beyond the standard oral, topical, and injectable forms, pharmacy technicians should be aware of speciality dosage forms that are increasingly relevant in Caribbean practice. These include transdermal patches (delivering drug through the skin over extended periods), sublingual and buccal preparations (absorbed through the oral mucosa), vaginal and rectal preparations, and inhaled formulations. Each presents unique compounding and storage considerations in the tropical Caribbean environment.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Transdermal patches: Adhesion can be compromised by perspiration in tropical heat; patients should be counselled to apply to clean, dry skin and avoid application before outdoor physical activity",
            "Sublingual tablets (e.g., glyceryl trinitrate): Extremely moisture-sensitive; must be stored in the original glass container with a metal screw cap; never transfer to plastic pill organisers",
            "Suppositories: As noted, PEG bases preferred over cocoa butter in tropical climates due to higher melting points",
            "Nebuliser solutions: Single-dose ampoules preferred in the Caribbean to avoid contamination risk in multi-dose containers in humid environments",
            "Troches and lozenges: Can be compounded in-pharmacy for local oral or throat conditions; must be stored in airtight containers to prevent moisture absorption",
          ],
        },
        {
          type: "island-comparison",
          title: "Compounded Dosage Forms in Caribbean Practice",
          description:
            "The types of dosage forms most commonly compounded vary by island, influenced by local disease burden, available commercial products, and regulatory frameworks.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Hospital pharmacies at Eric Williams Medical Sciences Complex and San Fernando General Hospital compound oral suspensions, topical preparations, and parenteral nutrition",
                "Community pharmacies frequently compound dermatological creams and paediatric oral liquids",
                "The Pharmacy Board does not currently require separate compounding licences, but pharmacies must comply with Good Pharmacy Practice guidelines",
                "Chronic Disease Assistance Programme (CDAP) drives high demand for affordable compounded alternatives when commercial products are unavailable",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "University Hospital of the West Indies (UHWI) pharmacy has a dedicated compounding unit producing oral liquids, topical preparations, and sterile products",
                "Community pharmacies in rural areas compound more frequently due to limited access to commercial preparations",
                "The Pharmacy Council of Jamaica requires compounding to be performed under the supervision of a registered pharmacist",
                "National Health Fund (NHF) formulary limitations sometimes necessitate compounding of non-formulary preparations",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Queen Elizabeth Hospital pharmacy compounds a wide range of preparations for inpatient use",
                "The Barbados National Drug Formulary influences which preparations need to be compounded versus purchased commercially",
                "Polyclinic pharmacies may compound basic preparations for the primary care population",
                "Smaller island geography means fewer pharmacies overall, so compounding capability is concentrated in fewer locations",
              ],
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "A patient working outdoors in Barbados as a construction worker has dry, cracked hands and needs a protective topical preparation. Which dosage form would be MOST appropriate?",
          options: [
            "An oil-in-water cream — it is non-greasy and cosmetically elegant",
            "A gel — it provides a cooling sensation in tropical heat",
            "An ointment — it provides an occlusive, protective moisture barrier suitable for dry, cracked skin",
            "A lotion — it is easy to apply and absorbs quickly",
          ],
          correctIndex: 2,
          explanation:
            "For dry, cracked skin requiring protection and moisture retention, an ointment is the most appropriate choice. Its occlusive nature forms a protective barrier that prevents further moisture loss and shields the damaged skin from external irritants. While ointments can feel greasy and uncomfortable in tropical heat, for a construction worker with occupational dermatitis, the protection they offer outweighs the cosmetic disadvantage. The pharmacist may recommend applying it primarily at night and using a lighter preparation during work hours.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m1-q1",
      question: "What is the term for the fraction of an administered drug dose that reaches systemic circulation in an unchanged, pharmacologically active form?",
      options: [
        "Bioequivalence",
        "Bioavailability",
        "Biopharmaceutics",
        "Biotransformation",
      ],
      correctIndex: 1,
      explanation:
        "Bioavailability is the fraction of an administered dose that reaches the systemic circulation in an active form. It is a critical pharmacokinetic parameter that varies depending on the route of administration and the dosage form. Intravenous administration has 100% bioavailability by definition.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q2",
      question: "Why are polyethylene glycol (PEG) suppository bases generally preferred over cocoa butter bases in Caribbean pharmacies?",
      options: [
        "PEG bases are less expensive than cocoa butter",
        "PEG bases have higher melting points and are more stable at tropical ambient temperatures",
        "PEG bases provide better drug absorption than cocoa butter",
        "Cocoa butter is not available in the Caribbean",
      ],
      correctIndex: 1,
      explanation:
        "Cocoa butter melts at approximately 34°C, which is dangerously close to the ambient temperatures regularly experienced in the Caribbean (30°C+). PEG suppository bases have higher melting points and dissolve in rectal fluids rather than melting, making them far more practical for pharmacies and patients in tropical environments.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q3",
      question: "A pharmacy technician is reconstituting amoxicillin dry powder for oral suspension. Arrange the following steps in the correct order.",
      questionType: "ordering",
      options: [
        "Tap the bottle to loosen the powder",
        "Add approximately half the required volume of purified water and shake vigorously",
        "Add the remaining water and shake again until uniformly dispersed",
        "Label with reconstitution date, beyond-use date, and auxiliary labels",
      ],
      correctIndex: 0,
      explanation:
        "The correct reconstitution sequence is: (1) Tap the bottle to loosen compacted powder, (2) Add half the water volume and shake vigorously to wet all particles, (3) Add the remaining water and shake to achieve uniform dispersion, (4) Label with reconstitution date, beyond-use date, and 'SHAKE WELL' and 'KEEP REFRIGERATED' auxiliary labels.",
      questionData: {
        correct_order: [0, 1, 2, 3],
      },
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q4",
      question: "Which semi-solid dosage form is generally BEST tolerated by patients in the tropical Caribbean due to its non-greasy feel?",
      options: [
        "White petrolatum ointment",
        "Water-in-oil (w/o) cream",
        "Oil-in-water (o/w) cream",
        "Stiff paste",
      ],
      correctIndex: 2,
      explanation:
        "Oil-in-water (o/w) creams are the most cosmetically acceptable semi-solid dosage form in the Caribbean tropics because they have a non-greasy feel, allow the skin to breathe, and do not trap perspiration. This makes them far more comfortable for patients in hot, humid conditions compared to ointments, w/o creams, or pastes.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q5",
      question: "What is the primary risk of crushing a modified-release (sustained-release, extended-release) tablet?",
      options: [
        "The tablet will taste bitter",
        "The drug will be inactivated",
        "Dose dumping — the entire dose may be released at once, causing toxicity",
        "The tablet will not dissolve in water",
      ],
      correctIndex: 2,
      explanation:
        "Crushing a modified-release tablet destroys the mechanism that controls the rate of drug release, potentially causing the entire dose to be absorbed at once (dose dumping). This can lead to dangerously high plasma drug concentrations and severe adverse effects or death. This is particularly dangerous with opioids, antihypertensives, and psychotropic medications.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m1-q6",
      question: "Hard gelatin capsules stored in a Caribbean pharmacy during the wet season are becoming tacky and sticking together. This is caused by which environmental factor?",
      options: [
        "Low temperatures causing condensation",
        "UV light degradation of the gelatin",
        "High ambient humidity causing the gelatin to absorb moisture",
        "Insect contamination of the storage area",
      ],
      correctIndex: 2,
      explanation:
        "Gelatin is highly hygroscopic and readily absorbs moisture from the surrounding environment. During the Caribbean wet season (June–December), humidity regularly exceeds 80% RH, causing gelatin capsule shells to absorb water, become soft, tacky, and stick together. Proper storage with desiccant packets and airtight containers is essential.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m1-q7",
      question: "An excipient that helps a tablet break apart in the gastrointestinal tract to release the active ingredient is called a:",
      options: [
        "Binder",
        "Lubricant",
        "Disintegrant",
        "Diluent",
      ],
      correctIndex: 2,
      explanation:
        "A disintegrant is an excipient added to tablets to facilitate their break-up (disintegration) after administration. Common disintegrants include croscarmellose sodium and sodium starch glycolate. Disintegration is the first step in drug release from a tablet — the tablet must break apart before the drug can dissolve and be absorbed.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q8",
      question: "Which of the following liquid dosage forms is a homogeneous mixture where the drug is completely dissolved?",
      options: [
        "Suspension",
        "Emulsion",
        "Solution",
        "Lotion",
      ],
      correctIndex: 2,
      explanation:
        "A solution is a homogeneous mixture in which the solute (drug) is completely dissolved in the solvent, producing a clear, uniform preparation. Unlike suspensions (which contain undissolved particles) or emulsions (which contain two immiscible phases), solutions do not require shaking before use and have uniform concentration throughout.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m1-q9",
      question: "A reconstituted amoxicillin suspension has been stored at 31°C on a kitchen counter for 10 days. Is this preparation still suitable for use?",
      questionType: "true_false",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "Reconstituted amoxicillin suspension is unstable at temperatures above 25°C. The manufacturer's beyond-use dating assumes refrigerated storage (2–8°C). Stored at 31°C for 10 days, the drug has almost certainly undergone significant degradation and loss of potency. This preparation is not suitable for use and should be discarded.",
      questionData: {
        correct_answer: false,
      },
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m1-q10",
      question: "Match each dosage form with its correct description.",
      questionType: "matching",
      options: [
        "Ointment",
        "Cream",
        "Gel",
        "Paste",
      ],
      correctIndex: 0,
      explanation:
        "Ointments are oil-based and occlusive; creams are emulsions (o/w or w/o) that are lighter and non-greasy; gels are transparent or translucent preparations with a gelling agent; pastes are stiff preparations containing a high proportion (>20%) of powder in an ointment base.",
      questionData: {
        pairs: [
          { left: "Ointment", right: "Oil-based, greasy, occlusive preparation forming a protective moisture barrier" },
          { left: "Cream", right: "Emulsion (o/w or w/o) that is lighter and more cosmetically elegant than an ointment" },
          { left: "Gel", right: "Transparent or translucent preparation with a gelling agent, non-greasy and cooling" },
          { left: "Paste", right: "Stiff preparation with >20% powder in an ointment base, used for localised lesions" },
        ],
      },
      difficulty: "easy",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 2 — Non-Sterile Compounding: Creams, Ointments & Suspensions
// ============================================================================

const module2: Module = {
  id: "m2-non-sterile-compounding",
  number: 2,
  title: "Non-Sterile Compounding: Creams, Ointments & Suspensions",
  description:
    "Master the fundamental techniques of non-sterile compounding, from preparing creams and ointments to formulating oral suspensions. Learn geometric dilution, levigation, trituration, and the art of selecting the right base and vehicle for Caribbean conditions.",
  learningObjectives: [
    "Demonstrate geometric dilution for incorporating potent drugs into a compounded preparation",
    "Prepare a compounded cream, ointment, and oral suspension following standard operating procedures",
    "Select appropriate bases and vehicles for non-sterile preparations in tropical climates",
    "Apply proper beyond-use dating based on USP guidelines and Caribbean storage conditions",
    "Calculate ingredient quantities using proportional reduction from master formulae",
  ],
  lessons: [
    // ── Lesson 2.1 ──
    {
      id: "m2-l1",
      title: "Principles of Non-Sterile Compounding",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Foundation of Compounding Practice",
        },
        {
          type: "text",
          body: "Non-sterile compounding is the preparation of pharmaceutical products that do not require sterile conditions. This includes oral liquids, topical preparations (creams, ointments, gels, pastes), capsules, suppositories, troches, and powder blends. In the Caribbean, non-sterile compounding is a core skill for pharmacy technicians because commercial products are frequently unavailable due to supply chain disruptions, limited market size, or the need for customised strengths and formulations — particularly for paediatric patients.",
        },
        {
          type: "text",
          body: "Compounding is not the same as manufacturing. Compounding involves the preparation of a customised medication for an individual patient based on a prescription, whereas manufacturing involves the large-scale production of medications for general distribution. This distinction has regulatory implications: compounded products are not required to undergo the same regulatory approval process as manufactured products, but they must still meet quality standards and be prepared in accordance with professional guidelines and applicable legislation.",
        },
        {
          type: "key-term",
          term: "Non-Sterile Compounding",
          definition:
            "The preparation of pharmaceutical products that are not required to be sterile. This includes oral preparations (solutions, suspensions, capsules, powders), topical preparations (creams, ointments, gels, pastes), and other dosage forms that will not be injected or applied to sterile body areas. Non-sterile compounding must still meet strict quality standards for potency, purity, and stability.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Nine Essentials of Good Compounding Practice",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Competent personnel: The compounder must be trained, competent, and working under the supervision of a registered pharmacist",
            "Appropriate facilities: A dedicated compounding area that is clean, well-lit, and separate from the dispensing area",
            "Quality ingredients: All ingredients must be pharmaceutical grade, within their expiry date, and properly stored",
            "Reliable equipment: Calibrated balances, graduated cylinders, mortar and pestle, spatulas, and ointment slabs must be clean and in good working order",
            "Validated procedures: Compounding must follow established standard operating procedures (SOPs) or tested master formulae",
            "Accurate calculations: All ingredient quantities must be double-checked before and during compounding",
            "Proper labelling: The final product must be labelled with all required information including beyond-use date, storage conditions, and auxiliary labels",
            "Quality control: The finished product must be inspected for appearance, consistency, pH (where applicable), and weight or volume accuracy",
            "Complete documentation: Every compounding event must be documented in a compounding log with batch details, ingredients used, beyond-use date, and the identity of the compounder and checking pharmacist",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Compounding vs. Manufacturing: Know the Boundary",
          body: "In Caribbean jurisdictions, compounding must be performed in response to a specific prescription for an individual patient. Preparing large batches of compounded products in advance ('anticipatory compounding') without prescriptions is generally considered manufacturing and is subject to different, more stringent regulatory requirements. Always verify your island's specific regulations on the permissible scope of compounding. In Trinidad and Tobago, the Chemistry, Food and Drugs Act and its regulations govern this boundary.",
        },
        {
          type: "text",
          body: "Before beginning any compounding task, the pharmacy technician must verify: (1) Is there a valid prescription? (2) Is there a master formula or SOP available? (3) Are all required ingredients available and in date? (4) Is the compounding area clean and equipment ready? (5) Have calculations been verified by a second person? Only when all five conditions are satisfied should compounding proceed.",
        },
        {
          type: "knowledge-check",
          question: "What is the key legal distinction between compounding and manufacturing?",
          options: [
            "Compounding uses generic ingredients; manufacturing uses brand-name ingredients",
            "Compounding is for individual patients based on prescriptions; manufacturing is large-scale production for general distribution",
            "Compounding does not require a pharmacist's involvement; manufacturing does",
            "There is no legal distinction between compounding and manufacturing",
          ],
          correctIndex: 1,
          explanation:
            "The fundamental distinction is that compounding involves preparing a customised medication for an individual patient in response to a specific prescription, while manufacturing involves the large-scale production of standardised medications for general distribution. This distinction is critical because it determines which regulatory framework applies. Compounded products are regulated under pharmacy practice legislation, while manufactured products must undergo formal regulatory approval.",
        },
      ],
    },
    // ── Lesson 2.2 ──
    {
      id: "m2-l2",
      title: "Compounding Creams and Ointments",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Preparing Topical Semi-Solid Preparations",
        },
        {
          type: "text",
          body: "Compounding creams and ointments is one of the most common non-sterile compounding tasks in Caribbean pharmacy practice. Dermatological conditions are highly prevalent in the tropics — fungal infections, contact dermatitis, eczema exacerbated by heat and humidity, insect bites, and sun-related conditions all require topical treatment. When the precise formulation a patient needs is not commercially available, the pharmacy technician compounds it.",
        },
        {
          type: "heading",
          level: 3,
          text: "Key Techniques for Topical Compounding",
        },
        {
          type: "key-term",
          term: "Geometric Dilution",
          definition:
            "A technique used to ensure the uniform distribution of a small quantity of potent drug throughout a larger quantity of base or diluent. The drug is first mixed with an approximately equal amount of base, then that mixture is combined with another equal amount of base, and so on — doubling the quantity at each step until all the base has been incorporated. This method prevents 'hot spots' of concentrated drug in the finished product.",
        },
        {
          type: "text",
          body: "Geometric dilution is the cornerstone technique for incorporating a small amount of active ingredient into a large amount of base. Consider compounding 100g of a 1% hydrocortisone cream: you have 1g of hydrocortisone powder to distribute uniformly throughout 99g of cream base. Simply dumping the powder into the base and stirring would result in uneven distribution — some areas of the cream would contain too much drug, others too little. Geometric dilution solves this problem by building up the mixture incrementally.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Place the hydrocortisone powder (1g) on the ointment slab",
            "Add an approximately equal amount of cream base (~1g) and mix thoroughly using a spatula with firm, consistent strokes",
            "Add another portion of base equal to the current mixture (~2g) and mix thoroughly",
            "Continue doubling the amount of base added at each step: ~4g, ~8g, ~16g, ~32g",
            "Incorporate the remaining base and mix until the preparation is smooth and homogeneous",
            "Scrape down the sides of the slab and spatula to ensure no material is lost",
            "Transfer to the dispensing container, weigh to verify the final weight, and label",
          ],
        },
        {
          type: "key-term",
          term: "Levigation",
          definition:
            "A technique for reducing the particle size of a solid drug by triturating (grinding) it with a small amount of liquid (the levigating agent) on an ointment slab. The levigating agent wets the particles, preventing them from flying off the slab, and creates a smooth paste that can be easily incorporated into the final base. Common levigating agents include mineral oil, glycerin, and propylene glycol.",
        },
        {
          type: "text",
          body: "When incorporating insoluble powders into an ointment or cream base, levigation should be performed before geometric dilution. The powder is first triturated with a small volume of an appropriate levigating agent (mineral oil for oil-based preparations, glycerin or propylene glycol for water-based preparations) to form a smooth, fine paste. This paste is then incorporated into the base using geometric dilution. Levigation produces a smoother, more elegant finished product and ensures that the drug particles are small enough for effective topical application.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Spatulation Technique",
          body: "When mixing on an ointment slab, use the flat side of the spatula to spread the mixture across the slab with firm, sweeping strokes. Scrape the mixture back to the centre after every few strokes. This technique — called spatulation — is more effective than stirring in a circular motion. The goal is to shear the preparation between the spatula and the slab surface, which breaks up aggregates and produces a smooth, uniform product. Practise this technique until it becomes second nature.",
        },
        {
          type: "table",
          caption: "Common Compounded Topical Preparations in Caribbean Pharmacies",
          headers: ["Preparation", "Typical Use", "Base", "Notes"],
          rows: [
            [
              "Hydrocortisone cream 1%",
              "Insect bites, mild eczema, contact dermatitis",
              "Oil-in-water cream base (e.g., aqueous cream BP)",
              "Commonly compounded when commercial OTC products are out of stock; must be used within 30 days (no preservative testing)",
            ],
            [
              "Compound benzoic acid ointment (Whitfield's ointment)",
              "Fungal skin infections (tinea)",
              "Emulsifying ointment BP or white soft paraffin",
              "Very common in Caribbean practice; contains benzoic acid 6% + salicylic acid 3%",
            ],
            [
              "Zinc oxide paste",
              "Diaper rash, skin protection, weeping skin lesions",
              "White soft paraffin + zinc oxide powder (25–50%)",
              "Extremely stable; excellent barrier against tropical moisture; commonly compounded for paediatric use",
            ],
            [
              "Calamine cream or lotion",
              "Sunburn, insect bites, mild skin irritation",
              "Aqueous cream base (cream) or water (lotion)",
              "Very commonly requested in the Caribbean; cooling and soothing effect",
            ],
          ],
        },
        {
          type: "video-placeholder",
          title: "Demonstration: Geometric Dilution and Levigation",
          duration: "12 min",
          description:
            "Watch a step-by-step demonstration of compounding a 1% hydrocortisone cream using levigation and geometric dilution techniques on an ointment slab. The video covers ingredient weighing, levigation with mineral oil, geometric dilution into aqueous cream base, spatulation technique, quality checks, and final packaging.",
        },
        {
          type: "knowledge-check",
          question: "When compounding a 1% hydrocortisone cream, why is geometric dilution used rather than simply adding the powder directly to the cream base?",
          options: [
            "To reduce the cost of ingredients",
            "To ensure the small amount of drug is uniformly distributed throughout the large amount of base, preventing concentration hot spots",
            "To increase the shelf life of the preparation",
            "To make the cream more aesthetically pleasing",
          ],
          correctIndex: 1,
          explanation:
            "Geometric dilution ensures that a small quantity of potent drug is evenly distributed throughout a larger quantity of base. Without this technique, the drug could be concentrated in some areas of the cream (hot spots) and absent in others, leading to inconsistent dosing — some applications would deliver too much drug, others too little. This is especially critical for potent drugs like hydrocortisone.",
        },
      ],
    },
    // ── Lesson 2.3 ──
    {
      id: "m2-l3",
      title: "Compounding Oral Suspensions and Solutions",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Liquid Preparations for Caribbean Patients",
        },
        {
          type: "text",
          body: "Oral liquids — suspensions and solutions — are the second most commonly compounded category in Caribbean pharmacies after topical preparations. The primary driver is paediatric medicine: children under six generally cannot swallow tablets or capsules, and many essential medications are not commercially available in liquid form, particularly in smaller Caribbean markets. Additionally, elderly patients with dysphagia, patients with nasogastric tubes, and patients requiring doses that cannot be achieved with available tablet strengths all benefit from compounded oral liquids.",
        },
        {
          type: "heading",
          level: 3,
          text: "Formulating an Oral Suspension from Tablets",
        },
        {
          type: "text",
          body: "One of the most common compounding scenarios in Caribbean pharmacy is preparing an oral suspension from commercially available tablets when no liquid formulation exists. This requires crushing the tablets, reducing the powder to fine particles, and suspending them in a suitable vehicle with a suspending agent, sweetener, flavouring, and preservative. The compounder must verify that the tablet is an immediate-release formulation (never use modified-release tablets) and account for the weight of excipients in the original tablet.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Verify the prescription and perform all calculations; have calculations checked by a second person",
            "Confirm the tablets are immediate-release (NOT modified-release, enteric-coated, or sublingual)",
            "Count and weigh the required number of tablets",
            "Triturate (crush) the tablets to a fine, uniform powder in a mortar using a pestle",
            "Add a small amount of the suspending vehicle and triturate to form a smooth paste",
            "Gradually add more vehicle with constant mixing (geometric dilution principle applied to liquids)",
            "Transfer to a graduated cylinder or dispensing bottle; rinse the mortar with vehicle to capture all drug",
            "Add preservative, sweetener, and flavouring as per the formula",
            "Bring to the final volume with the vehicle; mix well",
            "Transfer to the final container, label with all required information including 'SHAKE WELL', storage conditions, and beyond-use date",
          ],
        },
        {
          type: "key-term",
          term: "Suspending Agent",
          definition:
            "A substance added to a suspension to increase the viscosity of the vehicle and slow the rate of particle sedimentation. Common suspending agents include methylcellulose, carboxymethylcellulose sodium (CMC), xanthan gum, and commercially available suspending vehicles such as Ora-Plus and Ora-Sweet. The choice of suspending agent affects the pourability, palatability, and stability of the finished suspension.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Ora-Plus and Ora-Sweet in Caribbean Practice",
          body: "Ora-Plus (a suspending vehicle) and Ora-Sweet (a sweetening vehicle) are two commercially available vehicles widely used in compounding pharmacies in the Caribbean and internationally. They are commonly used in a 1:1 combination to create oral suspensions with good suspension properties and acceptable taste. However, these products must be imported and can be expensive. In situations where they are unavailable, pharmacy technicians must be able to formulate alternative vehicles using locally available ingredients such as simple syrup, methylcellulose, and citric acid.",
        },
        {
          type: "heading",
          level: 3,
          text: "Vehicle Selection for Caribbean Conditions",
        },
        {
          type: "table",
          caption: "Oral Liquid Vehicles and Tropical Considerations",
          headers: ["Vehicle", "Properties", "Advantages", "Caribbean Considerations"],
          rows: [
            [
              "Simple Syrup NF (85% w/v sucrose)",
              "Thick, sweet, self-preserving due to high sugar content",
              "Excellent taste masking; readily available locally; inexpensive",
              "May crystallise at low temperatures; diabetic patients require sugar-free alternatives; promotes dental caries in paediatric patients",
            ],
            [
              "Ora-Plus / Ora-Sweet (1:1)",
              "Commercial suspending/sweetening vehicle combination",
              "Consistent quality; well-documented stability data for many formulations; easy to use",
              "Must be imported; expensive; subject to Caribbean supply chain disruptions; limited shelf life after opening",
            ],
            [
              "Methylcellulose 1% solution",
              "Clear, viscous, non-ionic suspending vehicle",
              "Sugar-free; suitable for diabetics; good suspending properties",
              "Must be prepared fresh; requires refrigerated storage; shorter stability than sugar-based vehicles",
            ],
            [
              "Cherry syrup / Ora-Sweet SF",
              "Sugar-free or low-sugar flavoured vehicles",
              "Suitable for diabetic and paediatric patients on sugar-restricted diets",
              "Ora-Sweet SF must be imported; local cherry syrup may vary in quality and preservative content",
            ],
          ],
        },
        {
          type: "case-study",
          title: "Case Study: Compounding Enalapril Suspension for a Paediatric Patient",
          scenario:
            "A paediatrician in Port of Spain prescribes enalapril 1 mg/mL oral suspension for a 3-year-old child with congenital heart disease. No commercial liquid formulation is available in Trinidad. The pharmacy has enalapril 5 mg tablets, Ora-Plus, and Ora-Sweet in stock. The prescription is for 100 mL. The pharmacy technician must compound the suspension.",
          questions: [
            "How many 5 mg enalapril tablets are needed to prepare 100 mL of a 1 mg/mL suspension?",
            "Why is the 1:1 Ora-Plus / Ora-Sweet combination a suitable vehicle for this preparation?",
            "What beyond-use date should be assigned to this compounded suspension, and under what storage conditions?",
          ],
          discussion:
            "To prepare 100 mL of 1 mg/mL enalapril suspension, the technician needs 100 mg of enalapril, which is 20 tablets of 5 mg each. The Ora-Plus / Ora-Sweet (1:1) combination provides both suspending properties (Ora-Plus) and palatability (Ora-Sweet) — critical for paediatric compliance. Based on USP <795> guidelines and published stability data, this preparation is typically assigned a beyond-use date of 60 days when stored at 2–8°C (refrigerated). In the Caribbean context, the technician must confirm that the patient's family has reliable refrigeration and counsel them that the medication must not be left at room temperature. If refrigeration is unreliable, the beyond-use date should be shortened, and the pharmacist should consider more frequent dispensing of smaller quantities.",
        },
        {
          type: "knowledge-check",
          question: "When compounding an oral suspension from commercial tablets, which type of tablet must NEVER be used?",
          options: [
            "Scored tablets",
            "Generic tablets",
            "Modified-release or enteric-coated tablets",
            "Film-coated immediate-release tablets",
          ],
          correctIndex: 2,
          explanation:
            "Modified-release (sustained-release, extended-release, controlled-release) and enteric-coated tablets must never be crushed and used for compounding oral suspensions. Crushing these tablets destroys their rate-controlling mechanism, which can lead to dose dumping — the immediate release of the entire dose. Always verify that the source tablet is an immediate-release formulation before proceeding with compounding.",
        },
      ],
    },
    // ── Lesson 2.4 ──
    {
      id: "m2-l4",
      title: "Beyond-Use Dating and Stability in Tropical Conditions",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "How Long Does a Compounded Preparation Last?",
        },
        {
          type: "text",
          body: "Beyond-use dating (BUD) is one of the most critical aspects of pharmaceutical compounding, and it takes on heightened importance in the Caribbean, where tropical heat and humidity accelerate chemical degradation, promote microbial growth, and can cause physical changes (separation, discolouration, crystallisation) in compounded preparations. Unlike expiry dates on commercially manufactured products, which are determined through formal stability testing, beyond-use dates for compounded preparations are assigned based on USP guidelines, published stability data, and the compounder's professional judgement.",
        },
        {
          type: "key-term",
          term: "Beyond-Use Date (BUD)",
          definition:
            "The date after which a compounded preparation should not be used. The BUD is determined by the compounder based on the stability of the formulation, the storage conditions, and applicable guidelines (e.g., USP <795> for non-sterile preparations). It is distinct from an expiry date, which is determined by the manufacturer through formal stability testing. A BUD is typically shorter than the manufacturer's expiry date because compounding conditions are less controlled than manufacturing conditions.",
        },
        {
          type: "heading",
          level: 3,
          text: "USP <795> Default Beyond-Use Date Guidelines",
        },
        {
          type: "text",
          body: "USP Chapter <795> provides default beyond-use dates for compounded non-sterile preparations when no specific stability data is available. These defaults assume storage at controlled room temperature (20–25°C). In the Caribbean, where ambient temperatures regularly exceed 30°C and humidity exceeds 80%, these defaults may need to be shortened, or refrigerated storage may be required to achieve even these conservative timelines.",
        },
        {
          type: "table",
          caption: "USP <795> Default Beyond-Use Dates for Non-Sterile Preparations",
          headers: ["Preparation Type", "Default BUD (Controlled Room Temp)", "Caribbean Adjustment"],
          rows: [
            [
              "Aqueous preparations (non-preserved)",
              "14 days refrigerated (2–8°C)",
              "No extension; refrigeration is mandatory; if refrigeration is unreliable, consider 7 days or less",
            ],
            [
              "Aqueous preparations (preserved)",
              "35 days at controlled room temperature or 90 days refrigerated",
              "Consider 14–21 days at Caribbean room temperature (>30°C); refrigeration strongly recommended",
            ],
            [
              "Non-aqueous preparations (e.g., ointments)",
              "90 days or the earliest expiry of any ingredient, whichever is shorter",
              "Generally stable; may shorten to 60 days if stored without climate control at >30°C",
            ],
            [
              "Solid preparations (capsules, powders, tablets)",
              "180 days or the earliest expiry of any ingredient, whichever is shorter",
              "Use desiccants; store in airtight containers; consider shortening if humidity control is absent",
            ],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Caribbean Reality: Temperature Excursions",
          body: "The USP default BUDs assume controlled room temperature of 20–25°C. In many Caribbean pharmacies and patients' homes — especially those without air conditioning — temperatures regularly reach 30–35°C and humidity exceeds 80%. These conditions can dramatically reduce the stability of compounded preparations. Pharmacy technicians must factor in the patient's actual storage conditions when assigning a BUD. It is better to assign a conservative (shorter) BUD and dispense a smaller quantity than to overestimate stability and risk dispensing a degraded product.",
        },
        {
          type: "heading",
          level: 3,
          text: "Factors Affecting Stability of Compounded Preparations",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Temperature: Every 10°C increase in temperature approximately doubles the rate of chemical degradation (Arrhenius equation)",
            "Humidity: Moisture promotes hydrolysis (a major degradation pathway), microbial growth, and physical changes in semi-solid and solid preparations",
            "Light: UV light can cause photodegradation; amber or opaque containers should be used for light-sensitive preparations",
            "pH: Many drugs are stable only within a narrow pH range; the vehicle's pH must be appropriate for the active ingredient",
            "Microbial contamination: Unpreserved aqueous preparations are at high risk of microbial growth, particularly in warm, humid environments",
            "Container type: Glass is generally more protective than plastic; amber glass protects against light; airtight closures prevent moisture ingress",
            "Active ingredient properties: Some drugs are inherently unstable (e.g., aspirin hydrolyses readily; vitamin C oxidises) and require special formulation strategies",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Arrhenius Rule in Tropical Practice",
          body: "The Arrhenius equation describes how chemical reaction rates increase with temperature. A practical rule of thumb is that for every 10°C increase in temperature, the rate of degradation approximately doubles. This means a compounded preparation stored at 35°C (common Caribbean room temperature) may degrade roughly twice as fast as the same preparation stored at 25°C (the standard reference temperature). This is why Caribbean pharmacy technicians must be especially vigilant about beyond-use dating and storage conditions.",
        },
        {
          type: "knowledge-check",
          question: "According to USP <795>, what is the default beyond-use date for an unpreserved aqueous compounded preparation?",
          options: [
            "7 days at room temperature",
            "14 days refrigerated (2–8°C)",
            "30 days refrigerated",
            "90 days at room temperature",
          ],
          correctIndex: 1,
          explanation:
            "USP <795> assigns a default beyond-use date of 14 days when stored refrigerated (2–8°C) for non-preserved aqueous compounded preparations. This conservative timeline reflects the high risk of microbial contamination in unpreserved water-containing preparations. In the Caribbean, where ambient temperatures are higher, refrigeration is not merely recommended — it is essential for these preparations.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m2-q1",
      question: "What is the purpose of geometric dilution in compounding?",
      options: [
        "To increase the potency of the active ingredient",
        "To ensure a small quantity of drug is uniformly distributed throughout a larger quantity of base",
        "To sterilise the preparation",
        "To reduce the cost of compounding ingredients",
      ],
      correctIndex: 1,
      explanation:
        "Geometric dilution is a mixing technique that ensures the uniform distribution of a small quantity of potent drug throughout a larger quantity of base or diluent. By incrementally doubling the amount of base mixed with the drug at each step, the technique prevents concentration hot spots and ensures every portion of the finished product contains the same amount of drug.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q2",
      question: "A levigating agent is used in compounding to:",
      options: [
        "Flavour the preparation",
        "Preserve the preparation against microbial growth",
        "Wet and reduce the particle size of insoluble powders before incorporating them into a base",
        "Increase the viscosity of a liquid preparation",
      ],
      correctIndex: 2,
      explanation:
        "A levigating agent (e.g., mineral oil, glycerin, propylene glycol) is a liquid used to wet insoluble drug particles and reduce their size by trituration on an ointment slab. This creates a smooth paste that can be easily and uniformly incorporated into the final cream or ointment base, producing a more elegant product.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q3",
      question: "How many 5 mg enalapril tablets are needed to compound 150 mL of a 1 mg/mL oral suspension?",
      questionType: "fill_in_blank",
      options: ["30"],
      correctIndex: 0,
      explanation:
        "The total amount of enalapril needed is: 150 mL × 1 mg/mL = 150 mg. Each tablet contains 5 mg, so: 150 mg ÷ 5 mg/tablet = 30 tablets. Calculation accuracy is critical in compounding — an error at this stage carries through the entire preparation.",
      questionData: {
        acceptable_answers: ["30", "30 tablets"],
        case_sensitive: false,
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q4",
      question: "According to USP <795>, what is the default beyond-use date for a non-preserved aqueous compounded preparation stored under refrigeration?",
      options: [
        "7 days",
        "14 days",
        "30 days",
        "90 days",
      ],
      correctIndex: 1,
      explanation:
        "USP <795> assigns a default BUD of 14 days refrigerated (2–8°C) for non-preserved aqueous preparations. This conservative timeline reflects the inherent risk of microbial contamination in water-containing preparations without preservatives. In tropical Caribbean conditions, this timeline should be considered a maximum, not a minimum.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q5",
      question: "Why might a Caribbean pharmacy technician shorten the beyond-use date of a compounded preparation below the USP <795> default?",
      options: [
        "To sell more frequent refills and increase revenue",
        "Because Caribbean pharmacies are not required to follow USP guidelines",
        "Because the patient's storage conditions (ambient temperatures >30°C, high humidity, unreliable refrigeration) may accelerate degradation",
        "Because Caribbean patients use medications faster",
      ],
      correctIndex: 2,
      explanation:
        "USP <795> default BUDs assume controlled room temperature (20–25°C). In the Caribbean, ambient temperatures regularly exceed 30°C, and humidity exceeds 80%. Under the Arrhenius principle, degradation rates approximately double for every 10°C increase. If a patient lacks reliable refrigeration or climate-controlled storage, the pharmacy technician and pharmacist should assign a shorter BUD to ensure the patient receives effective medication.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m2-q6",
      question: "Which of the following are essential components of a compounding log entry? Select ALL that apply.",
      questionType: "multiple_select",
      options: [
        "Date of compounding and beyond-use date assigned",
        "Ingredients used with lot numbers and expiry dates",
        "Identity of the compounder and checking pharmacist",
        "Patient's mobile phone number",
        "Final weight or volume of the preparation",
      ],
      correctIndex: 0,
      explanation:
        "A complete compounding log entry must include the date of compounding, beyond-use date, all ingredients used (with lot numbers and expiry dates for traceability), the identity of the compounder and the pharmacist who performed the final check, and the final weight or volume. The patient's mobile phone number is part of the prescription record, not the compounding log.",
      questionData: {
        correct_indices: [0, 1, 2, 4],
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q7",
      question: "The Arrhenius equation predicts that for every 10°C increase in temperature, the rate of chemical degradation approximately:",
      options: [
        "Stays the same",
        "Doubles",
        "Triples",
        "Quadruples",
      ],
      correctIndex: 1,
      explanation:
        "The Arrhenius equation describes the relationship between temperature and reaction rate. A practical rule of thumb derived from this equation is that the rate of chemical degradation approximately doubles for every 10°C increase in temperature. This is particularly significant in the Caribbean, where ambient temperatures are 5–15°C above the standard reference temperature of 25°C.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m2-q8",
      question: "A pharmacy technician needs to compound an oral suspension from tablets. The tablets are labelled 'SR' (sustained-release). Is it safe to crush these tablets for compounding?",
      questionType: "true_false",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "Sustained-release (SR) tablets must NEVER be crushed for compounding. Crushing destroys the rate-controlling mechanism and can cause dose dumping — the immediate release of the entire dose. Only immediate-release tablets should be used for compounding oral suspensions. The technician must find an immediate-release alternative or consult the pharmacist and prescriber for an alternative formulation.",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m2-q9",
      question: "Which vehicle combination is widely used in compounding pharmacies for paediatric oral suspensions?",
      options: [
        "Normal saline and dextrose",
        "Ora-Plus and Ora-Sweet (1:1 combination)",
        "Ethanol and water (50:50)",
        "Mineral oil and glycerin",
      ],
      correctIndex: 1,
      explanation:
        "The Ora-Plus (suspending vehicle) and Ora-Sweet (sweetening vehicle) 1:1 combination is a widely used and well-documented vehicle system for compounding oral suspensions in pharmacies internationally and across the Caribbean. It provides good suspending properties and acceptable taste, particularly important for paediatric patients. However, it must be imported and can be expensive in Caribbean markets.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m2-q10",
      question: "What is the key distinction between compounding and manufacturing in Caribbean pharmacy law?",
      options: [
        "Compounding is cheaper than manufacturing",
        "Compounding is for individual patients based on prescriptions; manufacturing is large-scale production for general distribution",
        "Compounding does not require quality control; manufacturing does",
        "Compounding can only be done in hospitals; manufacturing can be done anywhere",
      ],
      correctIndex: 1,
      explanation:
        "The fundamental legal distinction is that compounding involves preparing a customised medication for an individual patient in response to a specific prescription, while manufacturing involves large-scale production for general distribution. This distinction determines the applicable regulatory framework. In Trinidad and Tobago, the Chemistry, Food and Drugs Act and its regulations govern this boundary.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// MODULE 3 — Compounding Equipment, Techniques & Best Practices
// ============================================================================

const module3: Module = {
  id: "m3-equipment-techniques",
  number: 3,
  title: "Compounding Equipment, Techniques & Best Practices",
  description:
    "Gain hands-on knowledge of the essential equipment used in a compounding pharmacy, from analytical balances and graduated cylinders to mortars, pestles, and ointment slabs. Master weighing, measuring, and mixing techniques that ensure accuracy and consistency in every compounded preparation.",
  learningObjectives: [
    "Identify and describe the function of essential compounding equipment used in Caribbean pharmacies",
    "Demonstrate proper technique for weighing, measuring, and mixing compounding ingredients",
    "Apply calibration and maintenance procedures for balances and measuring devices",
    "Evaluate the suitability of compounding equipment for specific preparation types",
    "Design a compounding workspace that meets quality and safety standards in tropical conditions",
  ],
  lessons: [
    // ── Lesson 3.1 ──
    {
      id: "m3-l1",
      title: "Essential Compounding Equipment",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Tools of the Trade",
        },
        {
          type: "text",
          body: "A well-equipped compounding pharmacy requires a range of specialised equipment, each serving a specific purpose in the preparation of pharmaceutical products. Understanding what each piece of equipment does, how to use it correctly, and how to maintain it is fundamental to producing safe, effective compounded preparations. In Caribbean pharmacies, equipment investment must be balanced against budget constraints — but certain core items are non-negotiable for safe compounding practice.",
        },
        {
          type: "table",
          caption: "Essential Non-Sterile Compounding Equipment",
          headers: ["Equipment", "Purpose", "Key Specifications", "Maintenance"],
          rows: [
            [
              "Analytical / Prescription Balance",
              "Weighing small quantities of active ingredients and excipients",
              "Sensitivity of 6 mg or less; capacity of at least 120g; Class III or better",
              "Calibrate daily with certified weights; keep on a level, vibration-free surface; clean after each use",
            ],
            [
              "Graduated Cylinders (various sizes)",
              "Measuring liquid volumes accurately",
              "Available in 10 mL, 25 mL, 50 mL, 100 mL, 250 mL; read at the meniscus",
              "Clean immediately after use; check for chips or cracks; replace if graduation marks are worn",
            ],
            [
              "Glass Mortar and Pestle",
              "Mixing, triturating, and suspending powders in liquids; reducing particle size in solutions and suspensions",
              "Glass is non-porous — ideal for liquids and preparations that stain",
              "Wash with soap and water; ensure dry before storing; do not use for oily preparations (slippery)",
            ],
            [
              "Porcelain (Wedgwood) Mortar and Pestle",
              "Grinding and reducing particle size of solid drugs; trituration of powders",
              "Rough interior surface provides grinding abrasion; available in various sizes",
              "Porous — can absorb colours and odours; designate separate mortars for strongly coloured or odorous drugs",
            ],
            [
              "Ointment Slab (Glass Tile)",
              "Mixing and incorporating ingredients into ointment and cream bases",
              "Non-porous, easy to clean, provides smooth working surface; typically 30×30 cm ground glass",
              "Clean with alcohol or solvent after each use; inspect for cracks that could harbour contaminants",
            ],
            [
              "Spatulas (Stainless Steel and Plastic)",
              "Mixing ingredients on ointment slab; transferring materials; scraping equipment",
              "Stainless steel for general use; plastic for preparations that react with metal (e.g., iodine, coal tar)",
              "Clean immediately; inspect for bending or nicks that could introduce metal particles",
            ],
            [
              "Electronic Top-Loading Balance",
              "Weighing larger quantities (>120g) of bases and vehicles",
              "Capacity of 500g–2000g; readability of 0.1g or better",
              "Calibrate regularly; keep away from draughts and vibration; clean pan after each use",
            ],
          ],
        },
        {
          type: "key-term",
          term: "Sensitivity of a Balance",
          definition:
            "The smallest amount of weight that will cause a perceptible change in the position of the balance pointer or digital readout. For a Class III prescription balance, the sensitivity requirement is 6 mg (0.006 g). This means the balance can reliably detect a change of 6 mg, and the minimum weighable quantity is typically 120 mg (based on a 5% error tolerance). Weighing quantities below the minimum weighable quantity introduces unacceptable error.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Minimum Weighable Quantity",
          body: "Every balance has a minimum weighable quantity (MWQ) — the smallest amount that can be weighed with acceptable accuracy (typically ±5% error). For a Class III prescription balance with 6 mg sensitivity, the MWQ is 120 mg. If a formula calls for less than 120 mg of an ingredient, you cannot weigh it directly. Instead, use the aliquot method: weigh a larger quantity, dilute it with an inert diluent (e.g., lactose), and then weigh an aliquot (portion) of the diluted mixture that contains the desired amount of drug. This is a critical concept for safe compounding.",
        },
        {
          type: "text",
          body: "In Caribbean pharmacies, the choice of mortar and pestle depends on the task. Use a porcelain (Wedgwood) mortar for dry grinding and trituration — its rough interior provides the abrasion needed to reduce particle size. Use a glass mortar for mixing liquids, making suspensions, and working with preparations that stain (e.g., coal tar, potassium permanganate). Glass is non-porous, so it does not absorb colours or odours and is easier to clean for the next preparation.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Sourcing Compounding Equipment in the Caribbean",
          body: "Obtaining specialised compounding equipment can be challenging for Caribbean pharmacies. Analytical balances, certified calibration weights, and specialised glass mortars are typically imported from suppliers in the United States, Canada, or the United Kingdom. Lead times can be lengthy, and shipping costs are significant. Some pharmacies source equipment through regional distributors or during trade shows organised by the Caribbean Association of Pharmacists (CAP). Maintaining equipment properly to extend its lifespan is especially important when replacement parts or new equipment may take weeks or months to arrive.",
        },
        {
          type: "knowledge-check",
          question: "A compounding formula calls for 80 mg of a potent drug. Your prescription balance has a minimum weighable quantity of 120 mg. What should you do?",
          options: [
            "Weigh 80 mg and accept the error — it is close enough",
            "Estimate the 80 mg visually",
            "Use the aliquot method: weigh a larger quantity, dilute with an inert diluent, and weigh an aliquot containing the needed amount",
            "Use a different drug that comes in a larger quantity",
          ],
          correctIndex: 2,
          explanation:
            "When the required quantity is below the balance's minimum weighable quantity (MWQ), the aliquot method must be used. This involves weighing a larger, accurately measurable quantity of the drug, diluting it with an inert diluent such as lactose, and then weighing an aliquot (portion) of the diluted mixture that contains the desired amount. This technique ensures accurate weighing within the balance's capabilities.",
        },
      ],
    },
    // ── Lesson 3.2 ──
    {
      id: "m3-l2",
      title: "Weighing and Measuring Techniques",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Precision and Accuracy in Every Measurement",
        },
        {
          type: "text",
          body: "Accurate weighing and measuring are the foundation of pharmaceutical compounding. An error in measurement translates directly into an error in the final product's potency — too much drug can cause toxicity, too little can result in treatment failure. In the Caribbean, where compounded preparations are frequently the only option for vulnerable patients (children, the elderly, patients with rare conditions), measurement accuracy is a matter of patient safety.",
        },
        {
          type: "heading",
          level: 3,
          text: "Weighing Solids: Step-by-Step",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Ensure the balance is on a level, vibration-free surface and is calibrated (check with certified weights at the start of each compounding session)",
            "Place a weighing paper or weighing boat on the pan and tare (zero) the balance",
            "Using a spatula, carefully add the ingredient to the weighing vessel — add gradually, not in one large quantity",
            "Read the weight only when the balance has stabilised (no fluctuation in the digital readout or the pointer has come to rest)",
            "If you overshoot the target weight, carefully remove excess with a clean spatula — never return excess powder to the original container (contamination risk)",
            "Record the exact weight measured in the compounding log",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Measuring Liquids: The Meniscus Rule",
        },
        {
          type: "text",
          body: "When measuring liquids in a graduated cylinder, the liquid surface curves — this curve is called the meniscus. For most pharmaceutical liquids (aqueous solutions), the meniscus curves downward (concave). Always read the volume at the bottom of the meniscus, with your eye level with the liquid surface. Reading from above (parallax error) causes you to undermeasure; reading from below causes you to overmeasure. Place the graduated cylinder on a flat surface and bend down to read at eye level, or raise the cylinder to eye level.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Choosing the Right Graduated Cylinder",
          body: "Always select the smallest graduated cylinder that will accommodate the volume you need to measure. Measuring 5 mL in a 100 mL graduated cylinder introduces significant error because the graduation marks are widely spaced relative to your measurement. The same 5 mL measured in a 10 mL graduated cylinder is far more accurate. A general rule: the volume to be measured should be at least 20% of the cylinder's total capacity.",
        },
        {
          type: "key-term",
          term: "Meniscus",
          definition:
            "The curved surface of a liquid in a container, caused by surface tension and the liquid's interaction with the container wall. For aqueous solutions in glass cylinders, the meniscus is concave (curves downward), and the volume is read at the bottom of the curve. For mercury (used in some thermometers), the meniscus is convex (curves upward), and the volume is read at the top.",
        },
        {
          type: "heading",
          level: 3,
          text: "The Aliquot Method in Detail",
        },
        {
          type: "text",
          body: "The aliquot method is an essential technique for accurately measuring quantities below the minimum weighable quantity (MWQ) of a balance. It works by diluting the drug with an inert diluent so that a weighable quantity of the diluted mixture contains the desired amount of drug. Here is an example: you need 50 mg of Drug X, but your balance's MWQ is 120 mg.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Weigh 250 mg of Drug X (a quantity well above the MWQ)",
            "Weigh 4750 mg (4.75 g) of lactose (inert diluent)",
            "Mix the Drug X and lactose thoroughly by geometric dilution — the mixture now contains 250 mg of Drug X in 5000 mg total",
            "Each milligram of the mixture contains: 250 mg ÷ 5000 mg = 0.05 mg of Drug X",
            "To obtain 50 mg of Drug X, weigh: 50 mg ÷ 0.05 mg per mg = 1000 mg (1 g) of the diluted mixture",
            "1000 mg is well above the MWQ, so this quantity can be weighed accurately",
          ],
        },
        {
          type: "knowledge-check",
          question: "When reading the volume of a liquid in a graduated cylinder, where should you read the measurement?",
          options: [
            "At the top of the meniscus",
            "At the bottom of the meniscus, with your eye level with the liquid surface",
            "At the middle of the meniscus",
            "From above, looking down into the cylinder",
          ],
          correctIndex: 1,
          explanation:
            "For aqueous solutions (the vast majority of pharmaceutical liquids), the meniscus curves downward (concave), and the correct reading is at the bottom of the meniscus. Your eye must be level with the liquid surface to avoid parallax error. Reading from above causes undermeasurement; reading from below causes overmeasurement.",
        },
      ],
    },
    // ── Lesson 3.3 ──
    {
      id: "m3-l3",
      title: "Mixing, Trituration & Compounding Techniques",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Art and Science of Mixing",
        },
        {
          type: "text",
          body: "Effective mixing is what transforms individual ingredients into a uniform, effective pharmaceutical preparation. Different compounding tasks require different mixing techniques, and choosing the wrong method can result in a product that is non-uniform, gritty, separated, or otherwise unfit for use. Caribbean pharmacy technicians must master several core mixing techniques to handle the full range of non-sterile compounding tasks they will encounter.",
        },
        {
          type: "key-term",
          term: "Trituration",
          definition:
            "The process of reducing the particle size of a solid by grinding it in a mortar with a pestle, using a firm, downward, rotational motion. Trituration also refers to the mixing of two or more powders in a mortar. The technique is essential for producing fine, uniform powders suitable for incorporation into dosage forms and for ensuring uniform mixing of potent drugs with diluents.",
        },
        {
          type: "table",
          caption: "Core Compounding Techniques",
          headers: ["Technique", "Purpose", "Equipment", "Key Points"],
          rows: [
            [
              "Trituration",
              "Reduce particle size of solids; mix powders uniformly",
              "Porcelain mortar and pestle",
              "Use firm, downward rotational pressure; scrape sides and pestle frequently; sieve after for uniform particle size",
            ],
            [
              "Levigation",
              "Reduce particle size using a wetting agent; prepare smooth paste for incorporation",
              "Ointment slab and spatula; levigating agent (mineral oil, glycerin)",
              "Add just enough levigating agent to form a paste; use small circular motions; ensures smooth, grit-free final product",
            ],
            [
              "Spatulation",
              "Mix ingredients on an ointment slab; incorporate drugs into semi-solid bases",
              "Ointment slab and stainless steel or plastic spatula",
              "Use firm, sweeping strokes; scrape and fold repeatedly; shearing action between spatula and slab breaks up aggregates",
            ],
            [
              "Geometric Dilution",
              "Ensure uniform distribution of potent drug in a larger quantity of base or diluent",
              "Mortar and pestle (powders) or ointment slab (semi-solids)",
              "Mix drug with equal amount of diluent; double the amount of diluent at each step; thorough mixing at each stage",
            ],
            [
              "Comminution",
              "General term for particle size reduction by any method",
              "Mortar and pestle, ball mill, or sieve",
              "Goal is to achieve uniform particle size for consistent drug distribution and smooth preparation",
            ],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Practical Tips for Tropical Compounding",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Work quickly when compounding in non-climate-controlled areas — cream bases can soften in tropical heat, making mixing difficult",
            "If a cream base becomes too soft to work with, briefly chill it in the refrigerator before continuing",
            "Keep the ointment slab clean and dry — humidity can cause condensation on the glass surface, contaminating the preparation",
            "When making suppositories with PEG bases, pour into moulds quickly as PEG sets rapidly upon cooling",
            "For capsule filling, work in a low-humidity area if possible — gelatin capsules absorb moisture and become difficult to handle",
            "Store finished preparations in appropriate containers immediately after compounding; do not leave them exposed on the bench",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Scrape-and-Fold Technique",
          body: "When mixing on an ointment slab, develop the habit of the 'scrape-and-fold' technique: spread the mixture across the slab with the spatula, then scrape it all back into a pile and repeat. Do this at least 20–30 times for a typical cream or ointment. This ensures that every particle of drug comes into contact with every part of the base. Count your strokes — it is easy to rush and undermix, resulting in a non-uniform product.",
        },
        {
          type: "scenario-simulation",
          title: "Compounding Decision Simulator: Choosing the Right Technique",
          description: "You receive a prescription to compound a topical preparation. Make the right compounding decisions at each step.",
          nodes: [
            {
              id: "start",
              text: "A prescription arrives for 50g of 2% salicylic acid ointment in white soft paraffin. The salicylic acid powder is coarse and gritty. What is your first step?",
              choices: [
                {
                  label: "Weigh the salicylic acid and mix it directly into the white soft paraffin on the ointment slab",
                  nextNodeId: "direct-mix",
                  feedback: "Mixing coarse powder directly into the base will result in a gritty, non-uniform product. Consider particle size reduction first.",
                },
                {
                  label: "Triturate the salicylic acid in a mortar to reduce particle size, then levigate with mineral oil to form a smooth paste",
                  nextNodeId: "triturate-levigate",
                  feedback: "Excellent! Reducing the particle size first and creating a smooth paste will produce a far superior product.",
                  isOptimal: true,
                },
                {
                  label: "Dissolve the salicylic acid in water before adding to the ointment",
                  nextNodeId: "dissolve-water",
                  feedback: "Salicylic acid is poorly soluble in water, and adding water to a petrolatum-based ointment would create an incompatible mixture.",
                },
              ],
            },
            {
              id: "direct-mix",
              text: "The ointment is gritty and the salicylic acid is not evenly distributed. The pharmacist rejects the preparation. What should you do differently?",
              choices: [
                {
                  label: "Start over: triturate the powder first, then levigate with mineral oil before incorporating into the base",
                  nextNodeId: "triturate-levigate",
                  feedback: "Correct decision. Always reduce particle size of gritty powders before incorporating into an ointment base.",
                  isOptimal: true,
                },
                {
                  label: "Mix more vigorously on the slab to break up the particles",
                  nextNodeId: "mix-harder",
                  feedback: "Additional mixing on the slab alone will not adequately reduce the particle size of coarse powder. Trituration in a mortar is needed.",
                },
              ],
            },
            {
              id: "dissolve-water",
              text: "The water separates from the petrolatum base, creating a broken, unusable preparation. What should you do?",
              choices: [
                {
                  label: "Discard and start over using trituration and levigation with mineral oil",
                  nextNodeId: "triturate-levigate",
                  feedback: "Correct. Mineral oil is compatible with the petrolatum base; water is not.",
                  isOptimal: true,
                },
              ],
            },
            {
              id: "mix-harder",
              text: "Despite vigorous mixing, the preparation remains gritty. The pharmacist asks you to start over. What technique should you use?",
              choices: [
                {
                  label: "Triturate in a mortar first, then levigate with mineral oil",
                  nextNodeId: "triturate-levigate",
                  feedback: "Correct. The mortar and pestle provides the abrasive force needed for particle size reduction.",
                  isOptimal: true,
                },
              ],
            },
            {
              id: "triturate-levigate",
              text: "You have a smooth salicylic acid paste. Now you need to incorporate it into 49g of white soft paraffin. What technique ensures uniform distribution?",
              choices: [
                {
                  label: "Add all the paraffin at once and mix thoroughly",
                  nextNodeId: "all-at-once",
                  feedback: "Adding all the base at once makes thorough mixing difficult and may result in uneven distribution of the drug.",
                },
                {
                  label: "Use geometric dilution: add the paraffin in incrementally doubling portions, mixing thoroughly at each step",
                  nextNodeId: "geometric-success",
                  feedback: "Perfect. Geometric dilution ensures uniform distribution of the drug throughout the entire base.",
                  isOptimal: true,
                },
              ],
            },
            {
              id: "all-at-once",
              text: "The preparation appears to have uneven colour, suggesting non-uniform drug distribution. How should you fix this?",
              choices: [
                {
                  label: "Apply the geometric dilution principle: remove the mixture, and re-incorporate using incrementally increasing portions",
                  nextNodeId: "geometric-success",
                  feedback: "Good recovery. Remember to use geometric dilution from the start in future preparations.",
                  isOptimal: true,
                },
              ],
            },
            {
              id: "geometric-success",
              text: "The final preparation is smooth, uniform in colour, and the pharmacist approves it after inspection. You label it with the patient's name, drug concentration, beyond-use date, and 'FOR EXTERNAL USE ONLY'. Well done!",
              isEnd: true,
              outcome: "success",
              summary: "You correctly applied trituration, levigation, and geometric dilution to produce a high-quality compounded ointment. These three techniques — used in sequence — are the standard approach for incorporating insoluble powders into ointment bases.",
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "Which type of mortar is best suited for grinding dry powders to reduce particle size?",
          options: [
            "Glass mortar — because it is transparent",
            "Porcelain (Wedgwood) mortar — because its rough interior provides grinding abrasion",
            "Plastic mortar — because it is lightweight",
            "Metal mortar — because it is durable",
          ],
          correctIndex: 1,
          explanation:
            "The porcelain (Wedgwood) mortar has a rough, unglazed interior surface that provides the abrasive friction needed to grind and reduce the particle size of solid drugs. Glass mortars have smooth interiors and are better suited for mixing liquids and preparations that stain. The rough texture of porcelain is what makes it effective for trituration.",
        },
      ],
    },
    // ── Lesson 3.4 ──
    {
      id: "m3-l4",
      title: "Compounding Workspace Design and Hygiene",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Setting Up a Safe and Effective Compounding Area",
        },
        {
          type: "text",
          body: "The compounding workspace is where patient safety begins. A well-designed, clean, and organised compounding area minimises the risk of contamination, cross-contamination, and errors. In the Caribbean, where many pharmacies operate in older buildings with limited space and where tropical conditions present additional hygiene challenges (insects, mould, humidity), designing and maintaining an appropriate compounding workspace requires deliberate attention and adherence to best practices.",
        },
        {
          type: "heading",
          level: 3,
          text: "Minimum Requirements for a Compounding Area",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Separate from the main dispensing area and customer service counter — this reduces distractions and contamination risk",
            "Adequate lighting — a minimum of 500 lux at the working surface is recommended; shadows compromise accuracy",
            "Smooth, non-porous work surfaces that are easy to clean and disinfect (stainless steel, tempered glass, or sealed laminate)",
            "A dedicated sink with hot and cold running water for handwashing and equipment cleaning",
            "Temperature monitoring — ideally climate-controlled (20–25°C); at minimum, a calibrated thermometer recording ambient conditions",
            "Humidity monitoring — a hygrometer recording ambient humidity; ideally maintained below 60% RH",
            "Adequate ventilation — exhaust fan or hood for preparations involving volatile or irritant substances",
            "Pest control measures — sealed windows and doors, pest bait stations, regular inspections (tropical environments are particularly prone to insect and rodent intrusion)",
            "Storage for ingredients at appropriate temperatures — a dedicated refrigerator for heat-sensitive materials",
            "Clearly labelled waste containers for pharmaceutical waste, general waste, and sharps",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Caribbean Climate Challenges in the Compounding Area",
          body: "In many Caribbean pharmacies, especially community pharmacies in rural areas, full climate control (air conditioning) may not be available or may be unreliable due to power outages. In these situations, the pharmacy must take compensating measures: schedule compounding during the coolest part of the day (early morning), use fans to maintain air circulation, store heat-sensitive bases and ingredients in the refrigerator until immediately before use, and assign shorter beyond-use dates to account for the warmer compounding and storage conditions. Document the ambient temperature and humidity at the time of compounding in the compounding log.",
        },
        {
          type: "heading",
          level: 3,
          text: "Personal Hygiene for Compounding",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Wash hands thoroughly with soap and water before beginning compounding — use an alcohol-based hand rub after drying",
            "Wear a clean, designated compounding coat or gown (not the same garment worn for general pharmacy duties)",
            "Wear disposable gloves appropriate for the task — nitrile gloves are preferred (some compounders and patients have latex allergies)",
            "Remove all jewellery from hands and wrists — rings harbour bacteria and can contaminate preparations",
            "Tie back long hair and consider wearing a hair cover for sensitive preparations",
            "Do not eat, drink, smoke, or chew gum in the compounding area",
            "Do not compound if you have an active skin infection, respiratory infection, or open wound on the hands — inform the pharmacist",
          ],
        },
        {
          type: "text",
          body: "Cleaning the compounding area before and after every compounding session is not optional — it is a regulatory and professional requirement. The ointment slab, all equipment, and the work surface must be cleaned with 70% isopropyl alcohol or another suitable disinfectant. Equipment used for one preparation must be thoroughly cleaned before being used for another to prevent cross-contamination. In the Caribbean, where mould growth is an ever-present risk due to humidity, regular deep cleaning with antifungal agents and inspection of storage areas for signs of mould or pest activity are essential.",
        },
        {
          type: "knowledge-check",
          question: "Why should a compounding area have a hygrometer?",
          options: [
            "To measure the pH of compounded preparations",
            "To monitor ambient humidity, which affects the stability of compounding ingredients and preparations in tropical environments",
            "To measure the temperature of the compounding slab",
            "To calibrate the prescription balance",
          ],
          correctIndex: 1,
          explanation:
            "A hygrometer measures relative humidity. In the Caribbean, where humidity regularly exceeds 80%, monitoring ambient humidity in the compounding area is essential because excess moisture can cause hygroscopic ingredients to absorb water, gelatin capsules to soften, powders to clump, and preparations to degrade. Documenting humidity conditions at the time of compounding supports quality control and BUD assignment.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m3-q1",
      question: "What is the minimum sensitivity requirement for a Class III prescription balance used in pharmaceutical compounding?",
      options: [
        "1 mg",
        "6 mg",
        "10 mg",
        "100 mg",
      ],
      correctIndex: 1,
      explanation:
        "A Class III prescription balance must have a sensitivity of 6 mg, meaning it can reliably detect a change of 6 mg on the pan. This determines the minimum weighable quantity (typically 120 mg based on a ±5% error tolerance). Any quantity below the MWQ cannot be weighed directly and requires the aliquot method.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q2",
      question: "A formula requires 60 mg of Drug Y. Your balance has a minimum weighable quantity of 120 mg. Using the aliquot method, you weigh 300 mg of Drug Y and dilute with 2700 mg of lactose. How much of the diluted mixture must you weigh to obtain 60 mg of Drug Y?",
      questionType: "fill_in_blank",
      options: ["600 mg"],
      correctIndex: 0,
      explanation:
        "Total mixture = 300 mg Drug Y + 2700 mg lactose = 3000 mg. Concentration of Drug Y = 300/3000 = 0.1 (1 part Drug Y per 10 parts mixture). To get 60 mg Drug Y: 60 mg ÷ 0.1 = 600 mg of mixture. This is well above the MWQ of 120 mg, so it can be weighed accurately.",
      questionData: {
        acceptable_answers: ["600", "600 mg", "600mg"],
        case_sensitive: false,
      },
      difficulty: "hard",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q3",
      question: "Which type of mortar should be used for triturating (grinding) dry powders?",
      options: [
        "Glass mortar",
        "Porcelain (Wedgwood) mortar",
        "Plastic mortar",
        "Stainless steel mortar",
      ],
      correctIndex: 1,
      explanation:
        "The porcelain (Wedgwood) mortar has a rough, unglazed interior surface that provides the abrasive friction necessary for effective trituration of dry powders. Glass mortars have smooth surfaces and are better suited for liquid preparations. Plastic and stainless steel mortars are not standard compounding equipment.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m3-q4",
      question: "When measuring a liquid in a graduated cylinder, where should you read the volume?",
      options: [
        "At the top of the meniscus, looking down from above",
        "At the bottom of the meniscus, with your eye level with the liquid surface",
        "At the centre of the meniscus, from any angle",
        "At the top line visible above the liquid",
      ],
      correctIndex: 1,
      explanation:
        "For aqueous pharmaceutical liquids, the meniscus curves downward (concave). The correct reading is at the bottom of the meniscus, with your eye level with the liquid surface to avoid parallax error. This ensures accurate volume measurement — critical for correct drug concentration in compounded preparations.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q5",
      question: "Match each compounding technique with its primary purpose.",
      questionType: "matching",
      options: [
        "Trituration",
        "Levigation",
        "Spatulation",
        "Geometric Dilution",
      ],
      correctIndex: 0,
      explanation:
        "Trituration reduces particle size by grinding in a mortar; levigation uses a wetting agent to further reduce particle size and form a paste; spatulation mixes ingredients on a slab using shearing strokes; geometric dilution ensures uniform distribution of a small amount of drug in a large amount of base.",
      questionData: {
        pairs: [
          { left: "Trituration", right: "Grinding in a mortar to reduce the particle size of solid drugs" },
          { left: "Levigation", right: "Wetting particles with a liquid agent to form a smooth paste for incorporation" },
          { left: "Spatulation", right: "Mixing on an ointment slab using firm, sweeping strokes with a spatula" },
          { left: "Geometric Dilution", right: "Incrementally mixing drug with doubling portions of base for uniform distribution" },
        ],
      },
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q6",
      question: "Why should a Caribbean compounding pharmacy maintain a hygrometer in the compounding area?",
      options: [
        "To measure drug potency",
        "To check if compounded liquids have the correct pH",
        "To monitor ambient humidity, which affects ingredient stability and preparation quality in tropical environments",
        "To verify that the balance is calibrated",
      ],
      correctIndex: 2,
      explanation:
        "A hygrometer measures ambient relative humidity (RH). In the tropical Caribbean, high humidity (>80% RH) can cause hygroscopic ingredients to absorb water, gelatin capsules to soften, powders to clump, and preparations to degrade. Monitoring and documenting humidity is an important quality control measure for compounding pharmacies.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m3-q7",
      question: "Which of the following personal hygiene practices are mandatory during compounding? Select ALL that apply.",
      questionType: "multiple_select",
      options: [
        "Washing hands thoroughly before compounding",
        "Wearing disposable gloves",
        "Removing jewellery from hands and wrists",
        "Wearing a business suit",
        "Avoiding compounding while having an active skin infection",
      ],
      correctIndex: 0,
      explanation:
        "All listed hygiene practices except wearing a business suit are mandatory during compounding. Handwashing, glove use, jewellery removal, and not compounding with active infections are all essential to prevent microbial contamination of pharmaceutical preparations. A clean compounding coat or gown — not a business suit — is the appropriate garment.",
      questionData: {
        correct_indices: [0, 1, 2, 4],
      },
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q8",
      question: "A pharmacy technician selects a 250 mL graduated cylinder to measure 15 mL of a vehicle. What is wrong with this choice?",
      options: [
        "Nothing — any graduated cylinder can accurately measure any volume",
        "The cylinder is too small for the volume",
        "The volume is less than 20% of the cylinder's capacity, introducing significant measurement error; a smaller cylinder should be used",
        "Graduated cylinders cannot measure volumes in millilitres",
      ],
      correctIndex: 2,
      explanation:
        "Measuring 15 mL in a 250 mL cylinder means the volume is only 6% of the capacity. The graduation marks are widely spaced relative to such a small volume, making accurate measurement difficult. The general rule is that the volume to be measured should be at least 20% of the cylinder's total capacity. A 25 mL or 50 mL graduated cylinder would be appropriate for 15 mL.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m3-q9",
      question: "A plastic spatula should be used instead of a stainless steel spatula when compounding with which ingredient?",
      options: [
        "Hydrocortisone",
        "Zinc oxide",
        "Iodine (which reacts with metal)",
        "Lactose",
      ],
      correctIndex: 2,
      explanation:
        "Iodine reacts with stainless steel, causing discolouration of both the spatula and the preparation. Plastic spatulas are inert and should be used when compounding with iodine, coal tar, and other ingredients known to react with or stain metal equipment.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m3-q10",
      question: "In a Caribbean pharmacy without air conditioning, what compensating measures should be taken for compounding?",
      options: [
        "No measures needed — compounding can proceed normally at any temperature",
        "Schedule compounding during the coolest part of the day, refrigerate bases until use, and assign shorter beyond-use dates",
        "Compound only sterile preparations, which are less heat-sensitive",
        "Use only solid dosage forms, which are never affected by heat",
      ],
      correctIndex: 1,
      explanation:
        "Without climate control in the Caribbean tropics, compensating measures include scheduling compounding during the coolest hours (early morning), refrigerating heat-sensitive bases and ingredients until immediately before use, working quickly to minimise heat exposure, and assigning shorter beyond-use dates to reflect the warmer compounding and storage conditions. All temperatures should be documented in the compounding log.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
  ],
};

// ============================================================================
// MODULE 4 — Extemporaneous Preparations & Paediatric Formulations
// ============================================================================

const module4: Module = {
  id: "m4-extemporaneous-paediatric",
  number: 4,
  title: "Extemporaneous Preparations & Paediatric Formulations",
  description:
    "Learn to compound medications for some of the most vulnerable patients in Caribbean healthcare — children. Understand the unique pharmacokinetic, safety, and palatability considerations that govern paediatric compounding, and master the techniques for preparing safe, effective, and palatable formulations for young patients.",
  learningObjectives: [
    "Explain why extemporaneous compounding is essential for paediatric pharmacy in the Caribbean",
    "Calculate weight-based paediatric doses and convert them to appropriate compounded formulations",
    "Evaluate excipient safety in paediatric preparations, identifying substances that are harmful to children",
    "Formulate palatable oral liquid preparations that promote paediatric compliance",
  ],
  lessons: [
    // ── Lesson 4.1 ──
    {
      id: "m4-l1",
      title: "Why Paediatric Compounding Matters in the Caribbean",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Children Are Not Small Adults",
        },
        {
          type: "text",
          body: "Paediatric pharmacy is one of the most challenging and rewarding areas of pharmaceutical compounding. Children — from neonates (0–28 days) through infants, toddlers, and older children — have fundamentally different physiology from adults. Their organ systems are still developing, their metabolic pathways differ, and their ability to tolerate excipients that are safe for adults may be limited. Most critically for Caribbean pharmacy practice, the majority of medications are manufactured as adult dosage forms — tablets and capsules in adult strengths — leaving a massive gap in suitable paediatric formulations.",
        },
        {
          type: "text",
          body: "This gap is especially pronounced in Caribbean nations, where pharmaceutical markets are small, import-dependent, and may not justify commercial production of paediatric formulations for every drug. The result is that Caribbean pharmacy technicians are frequently called upon to compound oral liquids, suspensions, and other age-appropriate formulations from adult dosage forms. This is a high-responsibility task where errors can have devastating consequences — a dosing error that might cause mild side effects in a 70 kg adult could be fatal in a 5 kg neonate.",
        },
        {
          type: "callout",
          variant: "danger",
          title: "Paediatric Dosing Errors Can Be Fatal",
          body: "Dosing errors are the most common type of medication error in paediatrics, and they are disproportionately dangerous because children have lower body weight and less physiological reserve. A tenfold dosing error — easily made when converting between milligrams and millilitres — can be lethal in a small child. ALWAYS double-check all paediatric calculations with a second person, and ALWAYS verify the calculated dose against published paediatric dosing references before compounding.",
        },
        {
          type: "key-term",
          term: "Extemporaneous Compounding",
          definition:
            "The preparation of a pharmaceutical product from individual ingredients in response to a specific prescription when no suitable commercially manufactured product is available. In paediatric practice, this most commonly involves preparing an oral liquid formulation from adult-strength tablets or capsules. The term 'extemporaneous' means 'made at the time of need' rather than manufactured in advance.",
        },
        {
          type: "heading",
          level: 3,
          text: "Paediatric Age Groups and Their Formulation Needs",
        },
        {
          type: "table",
          caption: "Paediatric Age Groups and Appropriate Dosage Forms",
          headers: ["Age Group", "Age Range", "Preferred Dosage Form", "Key Considerations"],
          rows: [
            [
              "Neonates",
              "0–28 days",
              "Oral liquid (drops or syringe), injection",
              "Extremely sensitive to excipients; minimal metabolic capacity; weight-based dosing critical; volumes must be very small (often <1 mL)",
            ],
            [
              "Infants",
              "1 month–1 year",
              "Oral liquid (syringe or dropper)",
              "Taste acceptance developing; avoid honey (botulism risk); cautious with preservatives; weight-based dosing",
            ],
            [
              "Toddlers",
              "1–3 years",
              "Oral liquid (cup or syringe), crushable tablets",
              "Taste preference strong — bitter drugs cause refusal; flavouring critical for compliance; volumes up to 5–10 mL acceptable",
            ],
            [
              "Pre-school children",
              "3–6 years",
              "Oral liquid, chewable tablets, sprinkles",
              "Negotiation over taste is common; involvement in choosing flavour can improve compliance",
            ],
            [
              "School-age children",
              "6–12 years",
              "Tablets (small), capsules (small), oral liquid if preferred",
              "Many can swallow small tablets; capsules may be opened and contents sprinkled on food for those who cannot",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Caribbean Paediatric Context",
          body: "The Caribbean has a high paediatric burden of sickle cell disease, asthma (exacerbated by Saharan dust), and infectious diseases. Compounded paediatric formulations are frequently needed for enalapril (heart conditions), captopril, spironolactone, hydroxyurea (sickle cell), omeprazole, and various antibiotics in strengths not commercially available. Pharmacy technicians in paediatric-serving pharmacies and hospitals across Trinidad, Jamaica, and Barbados should be proficient in compounding these preparations.",
        },
        {
          type: "knowledge-check",
          question: "Why is extemporaneous compounding particularly important in Caribbean paediatric pharmacy?",
          options: [
            "Caribbean children prefer compounded medications over commercial products",
            "Most medications are manufactured as adult dosage forms, and the small Caribbean market does not justify commercial production of paediatric formulations for every drug",
            "Compounded medications are cheaper than all commercial products",
            "Caribbean regulations require that all paediatric medications be compounded",
          ],
          correctIndex: 1,
          explanation:
            "Caribbean pharmaceutical markets are small and import-dependent. Most medications are manufactured as adult tablets or capsules in strengths unsuitable for children. The limited market size means commercial manufacturers often do not produce paediatric-specific formulations for the Caribbean market, making extemporaneous compounding an essential skill for pharmacy technicians serving paediatric populations.",
        },
      ],
    },
    // ── Lesson 4.2 ──
    {
      id: "m4-l2",
      title: "Paediatric Dose Calculations and Safety Checks",
      duration: "30 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Getting the Dose Right — Every Time",
        },
        {
          type: "text",
          body: "Paediatric dose calculation is one of the highest-stakes tasks a pharmacy technician performs. Unlike adults, where standard doses apply to most patients, paediatric doses are individualised based on the child's weight (mg/kg), body surface area (mg/m²), or age. Weight-based dosing (mg/kg) is the most common method in Caribbean paediatric practice and is the method pharmacy technicians must master.",
        },
        {
          type: "heading",
          level: 3,
          text: "Weight-Based Dosing Calculation: Worked Example",
        },
        {
          type: "text",
          body: "A paediatrician prescribes amoxicillin 25 mg/kg/day in three divided doses for a 12 kg child with otitis media. The pharmacy has amoxicillin 250 mg/5 mL oral suspension available. Calculate the dose per administration and the volume to be measured.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Total daily dose = 25 mg/kg/day × 12 kg = 300 mg/day",
            "Dose per administration = 300 mg ÷ 3 doses = 100 mg per dose",
            "Volume per dose = (100 mg ÷ 250 mg) × 5 mL = 2 mL per dose",
            "Verify: 2 mL × 3 doses = 6 mL/day × (250 mg/5 mL) = 300 mg/day ✓",
            "Cross-check the calculated dose against the BNF for Children or another paediatric dosing reference to confirm it falls within the recommended range",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Tenfold Error: A Preventable Tragedy",
          body: "Tenfold (10×) dosing errors are the most dangerous and most common calculation errors in paediatric pharmacy. They occur when a decimal point is misplaced (e.g., 2.0 mL written as 20 mL) or when mg and mL are confused. A dose of 2 mL of amoxicillin suspension is safe; a dose of 20 mL (ten times the intended dose) could cause serious harm. ALWAYS write quantities clearly, avoid trailing zeros (write '2 mL' not '2.0 mL'), use leading zeros (write '0.5 mL' not '.5 mL'), and have every paediatric calculation independently verified by a second person.",
        },
        {
          type: "heading",
          level: 3,
          text: "Maximum Dose Checks",
        },
        {
          type: "text",
          body: "After calculating a paediatric dose, always perform a maximum dose check. The calculated dose must not exceed the adult dose for the same drug. If a weight-based calculation produces a dose that exceeds the recommended adult dose, the adult dose becomes the ceiling. For example, if a 50 kg adolescent is prescribed a drug at 10 mg/kg, the calculated dose would be 500 mg. If the maximum adult dose is 400 mg, the dose should be capped at 400 mg.",
        },
        {
          type: "table",
          caption: "Common Paediatric Dose Calculation Errors and Prevention",
          headers: ["Error Type", "Example", "Consequence", "Prevention"],
          rows: [
            [
              "Tenfold error",
              "2 mL → 20 mL",
              "10× overdose; potentially fatal",
              "Use leading zeros; avoid trailing zeros; independent verification",
            ],
            [
              "Weight error",
              "Using 12 lb instead of 12 kg (1 kg ≈ 2.2 lb)",
              "2.2× overdose",
              "Always confirm weight units; weigh in kg; verify with parent",
            ],
            [
              "Concentration confusion",
              "Using 250 mg/5 mL when product is 125 mg/5 mL",
              "Half the intended dose (underdose)",
              "Verify concentration on the actual bottle; never assume",
            ],
            [
              "Exceeding adult dose",
              "Calculated dose exceeds adult maximum",
              "Toxicity",
              "Always compare calculated dose to adult maximum; cap if exceeded",
            ],
          ],
        },
        {
          type: "knowledge-check",
          question: "A doctor prescribes Drug Z at 15 mg/kg/day in two divided doses for a 20 kg child. What is the correct dose per administration?",
          options: [
            "300 mg per dose",
            "150 mg per dose",
            "75 mg per dose",
            "30 mg per dose",
          ],
          correctIndex: 1,
          explanation:
            "Total daily dose = 15 mg/kg/day × 20 kg = 300 mg/day. Divided into 2 doses: 300 mg ÷ 2 = 150 mg per administration. This dose should then be verified against the maximum recommended dose for Drug Z in published paediatric references.",
        },
      ],
    },
    // ── Lesson 4.3 ──
    {
      id: "m4-l3",
      title: "Excipient Safety and Palatability in Paediatric Formulations",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "What Goes Into the Formulation Matters as Much as the Drug",
        },
        {
          type: "text",
          body: "In paediatric compounding, every ingredient in the formulation — not just the active drug — must be evaluated for safety. Excipients that are harmless in adults can be toxic, irritating, or otherwise harmful in children, especially neonates and infants. Caribbean pharmacy technicians must be familiar with the excipients that pose known risks in paediatric populations and must always check the safety profile of every ingredient before including it in a paediatric preparation.",
        },
        {
          type: "table",
          caption: "Excipients of Concern in Paediatric Formulations",
          headers: ["Excipient", "Risk in Children", "Recommendation"],
          rows: [
            [
              "Ethanol (alcohol)",
              "CNS depression, hypoglycaemia in neonates and infants; hepatotoxicity",
              "Avoid in neonates; minimise in infants; FDA recommends <0.5% ethanol in medications for children <6 years",
            ],
            [
              "Benzyl alcohol",
              "'Gasping syndrome' in neonates — a potentially fatal toxicity causing metabolic acidosis, respiratory distress, and cardiovascular collapse",
              "CONTRAINDICATED in neonates; avoid in infants under 6 months; use preservative-free alternatives",
            ],
            [
              "Propylene glycol",
              "Hyperosmolality, CNS depression, seizures in neonates",
              "Avoid in neonates; use with caution in infants; monitor cumulative exposure from multiple sources",
            ],
            [
              "Artificial sweeteners (saccharin, aspartame)",
              "Saccharin: questionable safety in very young children; Aspartame: contraindicated in phenylketonuria (PKU)",
              "Use sucrose or sucralose preferentially in young children; always check for PKU before using aspartame",
            ],
            [
              "Sorbitol",
              "Osmotic diarrhoea at high doses; GI discomfort",
              "Limit sorbitol content in paediatric formulations; be aware of cumulative sorbitol from multiple medications",
            ],
            [
              "Parabens (methylparaben, propylparaben)",
              "Possible endocrine disruption; rare hypersensitivity",
              "Use minimally; consider alternative preservatives (potassium sorbate, sodium benzoate) where possible",
            ],
          ],
        },
        {
          type: "callout",
          variant: "danger",
          title: "Benzyl Alcohol and Neonates: The Gasping Syndrome",
          body: "Benzyl alcohol, a common preservative in multi-dose vials and some compounding vehicles, is CONTRAINDICATED in neonates. It has been associated with 'gasping syndrome' — a fatal condition characterised by metabolic acidosis, gasping respirations, CNS dysfunction, and cardiovascular collapse. Neonates lack the enzyme (alcohol dehydrogenase) needed to metabolise benzyl alcohol. When compounding for neonates, ALWAYS use preservative-free ingredients and vehicles.",
        },
        {
          type: "heading",
          level: 3,
          text: "Making Medicines Palatable for Children",
        },
        {
          type: "text",
          body: "A perfectly formulated paediatric preparation is worthless if the child refuses to take it. Palatability — the taste, smell, texture, and appearance of the medication — is one of the greatest challenges in paediatric compounding. Children have more taste buds than adults and are particularly sensitive to bitter flavours, which is unfortunately the predominant taste of many drugs. In the Caribbean, where many medications must be compounded from adult formulations, creative strategies for taste masking are essential.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Sweetening agents: Sucrose (traditional, well-accepted), sucralose (sugar-free alternative), honey (NEVER for children under 1 year — botulism risk)",
            "Flavouring: Fruit flavours (cherry, strawberry, grape, mango, guava) are well-accepted by Caribbean children; bitter-tasting drugs pair best with chocolate, cherry, or mint flavours",
            "Acidifying agents: A small amount of citric acid (sourness) can mask bitterness effectively",
            "Viscosity: Thicker preparations coat the tongue less broadly, reducing the perception of taste; however, too-thick preparations are difficult for small children to swallow",
            "Temperature: Chilling a preparation before administration can reduce taste perception (cold numbs taste buds); counsel parents to store in the refrigerator and administer cold",
            "Colour: A preparation that looks appealing (bright colours) is more likely to be accepted by young children; however, avoid dyes with known sensitivities (e.g., tartrazine)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Caribbean Flavour Preferences",
          body: "When compounding paediatric preparations in the Caribbean, consider locally preferred flavours. Mango, guava, passion fruit, and sorrel flavourings may be more familiar and acceptable to Caribbean children than the standard cherry or grape flavours used in North American compounding. Some Caribbean compounding pharmacies maintain a selection of local fruit flavour concentrates specifically for paediatric preparations. Always ask the parent or caregiver about the child's flavour preferences before compounding.",
        },
        {
          type: "case-study",
          title: "Case Study: Compounding Hydroxyurea Suspension for a Sickle Cell Patient",
          scenario:
            "A 6-year-old boy in Kingston, Jamaica, with sickle cell disease (HbSS) is prescribed hydroxyurea 15 mg/kg/day. He weighs 18 kg and cannot swallow capsules. The pharmacy has hydroxyurea 500 mg capsules available. The pharmacist asks the technician to compound an oral suspension at a concentration of 100 mg/mL using an Ora-Plus / Ora-Sweet (1:1) vehicle. The prescription is for a 30-day supply.",
          questions: [
            "What is the daily dose of hydroxyurea for this patient?",
            "How much hydroxyurea (in mg) is needed for a 30-day supply?",
            "How many 500 mg capsules are needed?",
            "What special safety considerations apply when handling hydroxyurea powder?",
          ],
          discussion:
            "Daily dose: 15 mg/kg × 18 kg = 270 mg/day. For 30 days: 270 mg × 30 = 8100 mg total. At 100 mg/mL, total volume = 81 mL. Capsules needed: 8100 mg ÷ 500 mg = 16.2, so 17 capsules. CRITICAL SAFETY NOTE: Hydroxyurea is a cytotoxic (chemotherapy) drug. The technician must wear chemotherapy-rated gloves, a mask, and a gown when handling the powder. A biological safety cabinet (BSC) or containment device should be used if available. If not available (common in Caribbean community pharmacies), work in a well-ventilated area with appropriate PPE, minimise dust generation, and clean the work area thoroughly with a damp cloth afterward. This preparation is commonly needed in the Caribbean due to the high prevalence of sickle cell disease in the Afro-Caribbean population.",
        },
        {
          type: "knowledge-check",
          question: "Which preservative is CONTRAINDICATED in neonatal formulations due to the risk of gasping syndrome?",
          options: [
            "Sodium benzoate",
            "Potassium sorbate",
            "Benzyl alcohol",
            "Methylparaben",
          ],
          correctIndex: 2,
          explanation:
            "Benzyl alcohol is contraindicated in neonates because it can cause gasping syndrome — a potentially fatal toxicity characterised by metabolic acidosis, gasping respirations, and cardiovascular collapse. Neonates lack the enzyme (alcohol dehydrogenase) needed to metabolise benzyl alcohol. Always use preservative-free ingredients when compounding for neonates.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m4-q1",
      question: "What is the most common method used for paediatric dose calculation in Caribbean pharmacy practice?",
      options: [
        "Age-based dosing",
        "Fixed adult dose divided in half",
        "Weight-based dosing (mg/kg)",
        "Body surface area dosing (mg/m²)",
      ],
      correctIndex: 2,
      explanation:
        "Weight-based dosing (mg/kg) is the most widely used method for paediatric dose calculation in everyday Caribbean pharmacy practice. It accounts for the child's actual body weight, producing more accurate doses than age-based methods. Body surface area dosing (mg/m²) is used for specific drugs (e.g., chemotherapy) but is not the standard for routine paediatric prescribing.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q2",
      question: "A 15 kg child is prescribed Drug A at 10 mg/kg/day in 3 divided doses. The available suspension is 50 mg/5 mL. What volume should be administered per dose?",
      options: [
        "2.5 mL",
        "5 mL",
        "10 mL",
        "15 mL",
      ],
      correctIndex: 1,
      explanation:
        "Total daily dose: 10 mg/kg × 15 kg = 150 mg/day. Per dose: 150 ÷ 3 = 50 mg. Volume per dose: (50 mg ÷ 50 mg) × 5 mL = 5 mL. Verify: 5 mL × 3 = 15 mL/day; 15 mL × (50 mg/5 mL) = 150 mg/day. Correct.",
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m4-q3",
      question: "Why is honey NEVER used as a sweetening agent in formulations for children under 1 year of age?",
      options: [
        "Honey is too expensive for paediatric formulations",
        "Honey can contain Clostridium botulinum spores, which can cause infant botulism",
        "Honey causes allergic reactions in all infants",
        "Honey is not sweet enough to mask bitter drugs",
      ],
      correctIndex: 1,
      explanation:
        "Honey can contain spores of Clostridium botulinum, the bacterium that causes botulism. While adults and older children have mature intestinal flora that prevent these spores from germinating, infants under 1 year have immature gut flora, making them vulnerable to infant botulism — a serious, potentially fatal condition. Honey must NEVER be used in any formulation for children under 12 months.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q4",
      question: "A calculated paediatric dose using the mg/kg method exceeds the recommended adult dose for the same drug. What should the pharmacy technician do?",
      options: [
        "Dispense the calculated paediatric dose, as paediatric dosing always overrides adult limits",
        "Cap the dose at the adult maximum and consult with the pharmacist and prescriber",
        "Refuse to dispense the medication entirely",
        "Halve the calculated dose",
      ],
      correctIndex: 1,
      explanation:
        "When a weight-based paediatric calculation produces a dose exceeding the recommended adult maximum, the adult dose becomes the ceiling. The technician should flag this to the pharmacist, who should contact the prescriber to confirm the appropriate dose. This situation commonly occurs with larger adolescents.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m4-q5",
      question: "Which of the following excipients poses the GREATEST safety risk to neonates?",
      options: [
        "Sucrose",
        "Methylcellulose",
        "Benzyl alcohol",
        "Citric acid",
      ],
      correctIndex: 2,
      explanation:
        "Benzyl alcohol is the most dangerous excipient for neonates among those listed. It can cause gasping syndrome — a fatal toxicity syndrome characterised by metabolic acidosis, gasping respirations, and cardiovascular collapse. Neonates cannot metabolise benzyl alcohol due to immature enzyme systems. Sucrose, methylcellulose, and citric acid are generally safe in neonates at appropriate concentrations.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q6",
      question: "A tenfold dosing error in a paediatric prescription (e.g., 2 mL prescribed but 20 mL dispensed) is caused by:",
      options: [
        "Using the wrong drug",
        "A misplaced decimal point or confusion between units",
        "An incorrect patient weight in pounds rather than kilograms",
        "Using an expired medication",
      ],
      correctIndex: 1,
      explanation:
        "Tenfold (10×) errors are most commonly caused by misplaced decimal points (e.g., writing 20 instead of 2.0) or confusion between mg and mL. These errors are preventable by using leading zeros (0.5 mL, not .5 mL), avoiding trailing zeros (2 mL, not 2.0 mL), writing quantities clearly, and having every paediatric calculation independently verified by a second person.",
      difficulty: "easy",
      bloomsLevel: "understand",
    },
    {
      id: "m4-q7",
      question: "Which Caribbean island has a particularly high prevalence of sickle cell disease, driving demand for compounded hydroxyurea suspensions?",
      options: [
        "The Cayman Islands",
        "Jamaica",
        "Aruba",
        "Puerto Rico",
      ],
      correctIndex: 1,
      explanation:
        "Jamaica has one of the highest prevalences of sickle cell disease in the Caribbean, with approximately 1 in 150 births affected (HbSS genotype). The Sickle Cell Unit at the University of the West Indies, Mona campus, is a globally recognised research and treatment centre. This high prevalence drives significant demand for compounded hydroxyurea suspensions and other paediatric sickle cell medications.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
    {
      id: "m4-q8",
      question: "When compounding a paediatric oral suspension, which locally preferred flavours might improve acceptance by Caribbean children compared to standard North American flavouring?",
      questionType: "multiple_select",
      options: [
        "Mango",
        "Guava",
        "Plain (unflavoured)",
        "Passion fruit",
        "Black liquorice",
      ],
      correctIndex: 0,
      explanation:
        "Caribbean children are often more familiar with tropical fruit flavours such as mango, guava, and passion fruit than with standard North American flavourings like cherry or grape. Using familiar, locally preferred flavours can significantly improve paediatric medication acceptance and compliance. Plain (unflavoured) and black liquorice would not be preferred by most children.",
      questionData: {
        correct_indices: [0, 1, 3],
      },
      difficulty: "easy",
      bloomsLevel: "apply",
    },
  ],
};

// ============================================================================
// MODULE 5 — Quality Control in Compounding: Testing, Documentation & SOPs
// ============================================================================

const module5: Module = {
  id: "m5-quality-control",
  number: 5,
  title: "Quality Control in Compounding: Testing, Documentation & SOPs",
  description:
    "Ensure every compounded preparation meets the highest standards of quality, safety, and efficacy. Learn the quality control tests, documentation requirements, and standard operating procedures that form the backbone of reliable compounding practice in the Caribbean.",
  learningObjectives: [
    "Describe the quality control tests applicable to non-sterile compounded preparations",
    "Create complete and accurate compounding documentation including master formulae, compounding records, and SOPs",
    "Evaluate a finished compounded preparation against quality criteria (appearance, weight, pH, uniformity)",
    "Design a standard operating procedure for a common compounding task in a Caribbean pharmacy",
  ],
  lessons: [
    // ── Lesson 5.1 ──
    {
      id: "m5-l1",
      title: "Quality Control Tests for Compounded Preparations",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Ensuring Quality in Every Preparation",
        },
        {
          type: "text",
          body: "Quality control (QC) in pharmaceutical compounding is the systematic process of testing and inspecting compounded preparations to ensure they meet predefined quality standards. While compounded preparations cannot undergo the same rigorous testing as commercially manufactured products (formal dissolution testing, content uniformity assays, accelerated stability studies), every compounding pharmacy can and must perform a range of practical QC checks to verify the quality of their products before they reach patients.",
        },
        {
          type: "text",
          body: "In the Caribbean, where compounded preparations are frequently the only option for vulnerable patients, quality control is not a bureaucratic formality — it is a patient safety imperative. A compounded oral suspension with incorrect concentration, a cream that has separated, or a preparation contaminated with micro-organisms can cause treatment failure, adverse effects, or infection. The pharmacy technician plays a central role in quality control, performing checks at every stage of the compounding process.",
        },
        {
          type: "table",
          caption: "Quality Control Checks for Non-Sterile Compounded Preparations",
          headers: ["QC Test", "What It Checks", "How It Is Performed", "Applicable To"],
          rows: [
            [
              "Visual Inspection",
              "Appearance, colour, consistency, homogeneity, absence of particles",
              "Examine the preparation under adequate lighting; look for discolouration, separation, grittiness, or foreign matter",
              "All preparations",
            ],
            [
              "Weight Check",
              "Final weight or volume matches the calculated amount",
              "Weigh the final preparation (semi-solids, powders) or measure the final volume (liquids) and compare to the target",
              "All preparations",
            ],
            [
              "pH Measurement",
              "Acidity/alkalinity is within the acceptable range for the formulation",
              "Use pH paper or a calibrated pH metre to measure the pH of liquid and semi-solid preparations",
              "Oral liquids, topical preparations with pH-sensitive ingredients",
            ],
            [
              "Odour Check",
              "The preparation smells as expected; absence of off-odours indicating degradation or contamination",
              "Carefully waft the preparation towards the nose (never sniff directly); compare to expected scent",
              "All preparations",
            ],
            [
              "Texture/Consistency Check",
              "Smoothness, pourability, or spreadability meets the expected standard",
              "For creams/ointments: spread a small amount on the back of the hand — should be smooth and free of grit. For liquids: pour to assess viscosity and ease of redispersal",
              "Semi-solids and suspensions",
            ],
            [
              "Capsule Weight Uniformity",
              "Individual capsule weights are consistent (±10% of average weight is typical acceptance criterion)",
              "Weigh 10 capsules individually and calculate the average; ensure each falls within ±10% of the average",
              "Compounded capsules",
            ],
          ],
        },
        {
          type: "key-term",
          term: "Quality Control (QC)",
          definition:
            "The systematic processes and procedures used to evaluate, monitor, and maintain the quality of compounded pharmaceutical preparations. QC includes testing of ingredients (identity, purity, expiry), in-process checks (weight, appearance), and final product testing (visual inspection, pH, weight/volume verification). It is a subset of the broader quality assurance programme that encompasses all aspects of the compounding operation.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Five-Point Final Check",
          body: "Before releasing any compounded preparation, perform this five-point final check: (1) Does it look right? — correct colour, consistency, and homogeneity. (2) Does it weigh or measure right? — final weight or volume matches calculations. (3) Does it smell right? — no unexpected or off-odours. (4) Is the pH acceptable? — within the expected range for the formulation. (5) Is the label correct? — patient name, drug name and strength, directions, beyond-use date, storage conditions, and auxiliary labels all present and accurate. If any check fails, do NOT release the product.",
        },
        {
          type: "text",
          body: "In the Caribbean, where compounding pharmacies may not have access to sophisticated analytical equipment, these practical QC tests take on even greater importance. They are the front line of quality assurance. A vigilant pharmacy technician who consistently performs thorough visual inspections, weight checks, and pH measurements will catch the majority of quality issues before they reach a patient. Quality control is not a separate step performed at the end — it is an integrated mindset applied from the moment ingredients are selected through to the moment the labelled preparation is released.",
        },
        {
          type: "knowledge-check",
          question: "A compounded cream appears to have separated into an oily layer and a watery layer upon visual inspection. What should the pharmacy technician do?",
          options: [
            "Stir the cream and dispense it — separation is normal",
            "Add more preservative to stabilise the cream",
            "Reject the preparation, investigate the cause of separation, and recompound if necessary",
            "Label it with 'SHAKE WELL' and dispense",
          ],
          correctIndex: 2,
          explanation:
            "Separation (cracking) of a cream indicates that the emulsion has broken — the oil and water phases have separated. This is a quality failure that may result in non-uniform drug distribution and indicates a formulation or technique problem (e.g., incorrect emulsifier quantity, excessive heat, improper mixing). The preparation must not be dispensed. The technician should reject it, investigate the cause, and recompound with corrective measures.",
        },
      ],
    },
    // ── Lesson 5.2 ──
    {
      id: "m5-l2",
      title: "Compounding Documentation: Master Formulae and Compounding Records",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "If It Wasn't Documented, It Wasn't Done",
        },
        {
          type: "text",
          body: "Documentation is the backbone of accountable, traceable, and defensible compounding practice. Every compounded preparation must be supported by two key documents: the master formula (a tested, standardised recipe for the preparation) and the compounding record (a detailed log of every step taken during a specific compounding event, including the identity of every ingredient, the identity of every person involved, and the results of quality control checks).",
        },
        {
          type: "heading",
          level: 3,
          text: "The Master Formula",
        },
        {
          type: "text",
          body: "A master formula (also called a master formulation record) is a detailed, validated recipe for a specific compounded preparation. It includes the name and strength of the preparation, a complete list of ingredients with quantities, step-by-step compounding instructions, quality control specifications, beyond-use dating guidelines, and storage conditions. The master formula should be developed, tested, and approved by a pharmacist before it is used for patient preparations. Once approved, it should only be modified through a formal change control process.",
        },
        {
          type: "table",
          caption: "Components of a Master Formula",
          headers: ["Component", "Description", "Example"],
          rows: [
            [
              "Preparation name and strength",
              "Full name and concentration of the compounded product",
              "Hydrocortisone Cream 1% w/w",
            ],
            [
              "Ingredient list with quantities",
              "Every ingredient, including excipients, with quantities for a standard batch size",
              "Hydrocortisone powder: 1g; Aqueous cream base: 99g; Mineral oil (levigating agent): 0.5 mL",
            ],
            [
              "Step-by-step instructions",
              "Detailed, numbered procedure that can be followed by a competent technician",
              "1. Weigh 1g hydrocortisone. 2. Place on ointment slab. 3. Add 0.5 mL mineral oil and levigate...",
            ],
            [
              "Equipment required",
              "All equipment needed for the procedure",
              "Class III balance, ointment slab, stainless steel spatula, weighing papers, 100g ointment jar",
            ],
            [
              "Quality control criteria",
              "Specifications the finished product must meet",
              "Appearance: white, smooth, homogeneous cream; no grittiness; pH: 4.5–6.5; Weight: 100g ±2g",
            ],
            [
              "Beyond-use date and storage",
              "BUD assignment based on USP <795> or published stability data",
              "BUD: 30 days from date of compounding. Store at 20–25°C or 2–8°C if >30°C ambient",
            ],
            [
              "References",
              "Source of the formula (published literature, USP, textbook, or in-house testing)",
              "Allen LV Jr. Int J Pharm Compd. 2015; or USP <795>",
            ],
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "The Compounding Record",
        },
        {
          type: "text",
          body: "The compounding record (also called a compounding log) is created every time a preparation is compounded. It is a detailed, traceable record of the specific compounding event and must include: the master formula reference, the patient's name (or stock indication), all ingredients used (with manufacturer, lot number, and expiry date), the quantities actually weighed or measured, the identity of the compounder, the identity of the checking pharmacist, the date and time of compounding, quality control results, the beyond-use date assigned, the prescription number, and any deviations from the master formula.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Traceability Is Non-Negotiable",
          body: "Every ingredient used in compounding must be traceable — if a problem arises with a compounded preparation (a patient complaint, an adverse reaction, a recall of a raw ingredient), you must be able to identify exactly which ingredients were used, from which manufacturer and lot, and for which patients' preparations. Failing to record lot numbers and expiry dates makes this impossible and constitutes a serious quality and regulatory failure. In the event of a serious adverse event, inadequate documentation can also result in legal liability.",
        },
        {
          type: "knowledge-check",
          question: "What is the primary purpose of recording ingredient lot numbers and expiry dates in the compounding record?",
          options: [
            "To satisfy the tax authority",
            "To enable traceability — if a problem arises, all affected preparations and patients can be identified",
            "To assist with inventory ordering",
            "To calculate the cost of compounding",
          ],
          correctIndex: 1,
          explanation:
            "Recording lot numbers and expiry dates enables full traceability. If a raw ingredient is recalled, found to be substandard, or if a patient experiences an adverse reaction, the pharmacy can trace exactly which preparations were made with that ingredient and which patients received them. This is essential for patient safety and is a fundamental requirement of Good Pharmacy Practice.",
        },
      ],
    },
    // ── Lesson 5.3 ──
    {
      id: "m5-l3",
      title: "Standard Operating Procedures (SOPs) for Compounding",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "SOPs: The Guardrails of Consistent Quality",
        },
        {
          type: "text",
          body: "Standard Operating Procedures (SOPs) are written documents that describe in detail how a specific task or process should be performed in the pharmacy. They ensure that every team member performs the task the same way, every time, regardless of who is working that day. In compounding pharmacy, SOPs cover everything from hand washing and equipment cleaning to specific compounding procedures, quality control testing, and waste disposal. SOPs are living documents — they should be reviewed regularly and updated whenever a process changes or an improvement is identified.",
        },
        {
          type: "key-term",
          term: "Standard Operating Procedure (SOP)",
          definition:
            "A written, step-by-step document describing how a specific task or process should be performed to ensure consistency, quality, and compliance with regulatory requirements. SOPs should include the purpose, scope, responsible personnel, required materials, detailed procedure, quality criteria, documentation requirements, and review schedule. They must be readily accessible to all staff and reviewed at least annually.",
        },
        {
          type: "heading",
          level: 3,
          text: "Essential SOPs for a Compounding Pharmacy",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "SOP-001: Hand Hygiene and Gowning Procedure for Compounding",
            "SOP-002: Compounding Area Cleaning and Disinfection",
            "SOP-003: Balance Calibration and Verification",
            "SOP-004: Receipt, Storage, and Rotation of Compounding Ingredients",
            "SOP-005: Master Formula Development and Approval",
            "SOP-006: Compounding Record Documentation",
            "SOP-007: Quality Control Testing of Finished Preparations",
            "SOP-008: Labelling of Compounded Preparations",
            "SOP-009: Beyond-Use Date Assignment",
            "SOP-010: Handling and Disposal of Hazardous Compounding Materials",
            "SOP-011: Temperature and Humidity Monitoring in the Compounding Area",
            "SOP-012: Recall Procedure for Compounded Preparations",
          ],
        },
        {
          type: "text",
          body: "Each SOP should follow a consistent format: title, SOP number, version number, date of approval, review date, approved by (pharmacist signature), purpose, scope, definitions, required materials, step-by-step procedure, quality criteria, documentation requirements, and references. A consistent format makes SOPs easier to write, easier to follow, and easier to audit.",
        },
        {
          type: "callout",
          variant: "info",
          title: "SOP Review and Training",
          body: "SOPs are only effective if staff are trained on them and if they are kept current. Best practice is to review all compounding SOPs at least annually and whenever a significant change occurs (new equipment, new ingredient supplier, new regulatory requirement). All compounding personnel should sign a training log confirming they have read and understood each SOP. In a Caribbean pharmacy where staff may rotate between compounding and dispensing, this training must be documented and refreshed regularly.",
        },
        {
          type: "case-study",
          title: "Case Study: The Missing SOP",
          scenario:
            "A pharmacy in Bridgetown, Barbados, receives a complaint from a patient who reports that a compounded hydrocortisone cream prescribed for her child's eczema appears to have a different consistency and colour than the previous batch. The pharmacy investigates and discovers that two different pharmacy technicians compounded the two batches. Technician A used mineral oil as the levigating agent and aqueous cream BP as the base. Technician B used glycerin as the levigating agent and a different emulsifying cream base. There is no written master formula or SOP for this preparation.",
          questions: [
            "What is the root cause of the batch-to-batch inconsistency?",
            "How would having a master formula and SOP have prevented this issue?",
            "What steps should the pharmacy take to prevent recurrence?",
          ],
          discussion:
            "The root cause is the absence of a standardised, documented master formula and SOP. Without these documents, each technician made independent decisions about ingredients and techniques, producing preparations that looked and felt different — and may have had different stability and drug release characteristics. The corrective actions are: (1) Develop and approve a master formula specifying exact ingredients, quantities, and procedures. (2) Create a compounding SOP for topical preparations. (3) Train all compounding staff on the approved formula and SOP. (4) Document every compounding event in a compounding record referencing the master formula. (5) Implement a quality control check comparing each batch to the master formula specifications.",
        },
        {
          type: "knowledge-check",
          question: "How often should compounding SOPs be reviewed as a minimum?",
          options: [
            "Only when a problem occurs",
            "Every 5 years",
            "At least annually, and whenever a significant change occurs",
            "SOPs never need to be reviewed once they are written",
          ],
          correctIndex: 2,
          explanation:
            "SOPs should be reviewed at least annually to ensure they remain current and reflect best practice. They should also be reviewed and updated whenever a significant change occurs — such as new equipment, a new ingredient supplier, a new regulatory requirement, or when a quality issue is identified. Regular review ensures that SOPs remain living, useful documents rather than outdated paperwork.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m5-q1",
      question: "Which of the following quality control tests should be performed on ALL compounded preparations before release?",
      options: [
        "Dissolution testing",
        "Visual inspection for appearance, colour, and homogeneity",
        "Sterility testing",
        "Accelerated stability testing",
      ],
      correctIndex: 1,
      explanation:
        "Visual inspection — examining the preparation for correct appearance, colour, consistency, homogeneity, and the absence of particles or foreign matter — is the most fundamental quality control test and should be performed on every compounded preparation. Dissolution testing, sterility testing, and accelerated stability testing are specialised tests that are not routinely performed in non-sterile compounding pharmacies.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q2",
      question: "A compounded cream shows separation into distinct oil and water layers. This indicates the emulsion has:",
      options: [
        "Reached its ideal consistency",
        "Cracked (broken) — the emulsion is destabilised",
        "Undergone a normal phase transition that reverses upon mixing",
        "Absorbed too much preservative",
      ],
      correctIndex: 1,
      explanation:
        "Separation into distinct oil and water layers means the emulsion has 'cracked' or 'broken' — the emulsifying agent has failed to maintain the dispersion of one phase within the other. This is an irreversible quality failure. The preparation should not be dispensed, as drug distribution may be non-uniform. The cause should be investigated (e.g., insufficient emulsifier, excessive heating, incompatible ingredients) and the preparation recompounded.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m5-q3",
      question: "What is a master formula in pharmaceutical compounding?",
      options: [
        "A patient's prescription",
        "A standardised, validated recipe for a specific compounded preparation including ingredients, quantities, and procedure",
        "A list of all drugs available in the pharmacy",
        "The pharmacy's insurance policy document",
      ],
      correctIndex: 1,
      explanation:
        "A master formula (master formulation record) is a standardised, validated recipe that specifies the preparation name and strength, all ingredients with quantities, step-by-step compounding instructions, equipment required, quality control specifications, beyond-use dating, and storage conditions. It ensures consistency between batches and between different compounders.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q4",
      question: "Why must ingredient lot numbers and expiry dates be recorded in every compounding record?",
      options: [
        "To enable traceability in case of recalls, quality issues, or adverse events",
        "To calculate the pharmacy's annual ingredient budget",
        "To impress regulatory inspectors during audits",
        "To determine which supplier offers the cheapest ingredients",
      ],
      correctIndex: 0,
      explanation:
        "Recording lot numbers and expiry dates enables full traceability. If a raw ingredient is recalled or found to be substandard, the pharmacy can identify every preparation that used that ingredient and every patient who received those preparations. This traceability is essential for patient safety and is a core requirement of Good Pharmacy Practice and pharmaceutical quality assurance.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m5-q5",
      question: "Arrange the five-point final check for compounded preparations in the correct order.",
      questionType: "ordering",
      options: [
        "Does it look right? (appearance, colour, homogeneity)",
        "Does it weigh or measure right? (weight/volume matches calculations)",
        "Does it smell right? (no unexpected off-odours)",
        "Is the pH acceptable? (within expected range)",
        "Is the label correct? (patient name, drug, strength, BUD, storage, auxiliary labels)",
      ],
      correctIndex: 0,
      explanation:
        "The five-point final check should be performed in this order: (1) Visual inspection of appearance, (2) Weight/volume verification, (3) Odour check, (4) pH check, (5) Label verification. All five checks must pass before the preparation is released to the patient. If any check fails, the preparation must not be dispensed.",
      questionData: {
        correct_order: [0, 1, 2, 3, 4],
      },
      difficulty: "medium",
      bloomsLevel: "apply",
    },
    {
      id: "m5-q6",
      question: "How often should compounding SOPs be reviewed at a minimum?",
      options: [
        "Every 5 years",
        "Only when a regulator visits",
        "At least annually, and whenever a significant change occurs",
        "Once, at the time of initial writing",
      ],
      correctIndex: 2,
      explanation:
        "SOPs should be reviewed at least annually and whenever a significant change occurs (new equipment, new suppliers, new regulatory requirements, quality issues). This ensures they remain current, accurate, and reflective of actual best practice. An outdated SOP is worse than no SOP because it may codify obsolete or incorrect procedures.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m5-q7",
      question: "Two different pharmacy technicians compound the same cream preparation but produce batches that look and feel different. What is the most likely root cause?",
      options: [
        "The technicians have different levels of physical strength",
        "The pharmacy does not have a standardised master formula or SOP for the preparation",
        "One technician is more experienced than the other",
        "The patients have different preferences",
      ],
      correctIndex: 1,
      explanation:
        "Batch-to-batch inconsistency when different compounders are involved almost always indicates the absence of a standardised master formula and SOP. Without documented, standardised procedures, each technician makes independent choices about ingredients, quantities, and techniques, producing different products. A master formula and SOP ensure every batch is made the same way, regardless of who compounds it.",
      difficulty: "medium",
      bloomsLevel: "analyze",
    },
    {
      id: "m5-q8",
      question: "The acceptance criterion for capsule weight uniformity in compounded capsules is typically that each individual capsule falls within what range of the average weight?",
      options: [
        "±1%",
        "±5%",
        "±10%",
        "±25%",
      ],
      correctIndex: 2,
      explanation:
        "For compounded capsules, the typical acceptance criterion for weight uniformity is that each individual capsule falls within ±10% of the average weight of the batch. This is assessed by weighing 10 individual capsules, calculating the average, and verifying that each capsule's weight is within 10% of that average. This ensures consistent dosing between capsules.",
      difficulty: "medium",
      bloomsLevel: "remember",
    },
  ],
};

// ============================================================================
// MODULE 6 — Compounding Regulations & Record-Keeping in the Caribbean
// ============================================================================

const module6: Module = {
  id: "m6-regulations-caribbean",
  number: 6,
  title: "Compounding Regulations & Record-Keeping in the Caribbean",
  description:
    "Navigate the regulatory landscape governing pharmaceutical compounding across the Caribbean. Understand the laws, guidelines, and professional standards that apply in Trinidad & Tobago, Jamaica, and Barbados, and learn to maintain records that protect patients and withstand regulatory scrutiny.",
  learningObjectives: [
    "Compare compounding regulations across Trinidad & Tobago, Jamaica, and Barbados",
    "Explain the regulatory distinction between compounding and manufacturing in Caribbean jurisdictions",
    "Maintain compounding records that meet Caribbean regulatory requirements and protect against legal liability",
    "Apply Good Pharmacy Practice guidelines to compounding operations in a Caribbean pharmacy",
  ],
  lessons: [
    // ── Lesson 6.1 ──
    {
      id: "m6-l1",
      title: "Compounding Regulations Across the Caribbean",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "The Regulatory Framework for Compounding in the Caribbean",
        },
        {
          type: "text",
          body: "Pharmaceutical compounding in the Caribbean is governed by a patchwork of national legislation, professional standards, and international guidelines. Unlike major pharmaceutical markets such as the United States (where USP <795> and <797> provide detailed compounding standards) or the United Kingdom (where GPhC standards apply), Caribbean nations have historically had less specific compounding regulations. However, all Caribbean jurisdictions regulate pharmacy practice broadly, and compounding activities must comply with the general requirements of Good Pharmacy Practice, drug safety legislation, and professional codes of conduct.",
        },
        {
          type: "text",
          body: "The regulatory landscape is evolving. CARICOM, through the Caribbean Regulatory System (CRS) and CARPHA, is working toward greater harmonisation of pharmaceutical standards across the region. In the meantime, pharmacy technicians must know and comply with the specific regulations of their island jurisdiction. This lesson examines the regulatory frameworks in three key Caribbean nations: Trinidad & Tobago, Jamaica, and Barbados.",
        },
        {
          type: "island-comparison",
          title: "Compounding Regulation by Island",
          description:
            "Each Caribbean nation has its own regulatory framework governing pharmaceutical compounding. Pharmacy technicians must understand the specific requirements of their jurisdiction.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "Governed by the Pharmacy Board of Trinidad and Tobago under the Pharmacy Board Act (Chapter 29:52) and the Food and Drugs Act (Chapter 30:01)",
                "The Chemistry, Food and Drugs Division (Ministry of Health) regulates drug safety, quality, and the boundary between compounding and manufacturing",
                "No separate compounding licence currently required — compounding is considered part of pharmacy practice under the pharmacist's licence",
                "Compounding must be performed under the direct supervision of a registered pharmacist",
                "The Pharmacy Board may inspect compounding facilities as part of pharmacy inspections",
                "CARPHA (headquartered in Port of Spain) provides regional guidance on pharmaceutical quality that influences local practice",
                "USP <795> is commonly referenced as a best-practice standard, although it is not legally binding",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "Governed by the Pharmacy Council of Jamaica under the Pharmacy Act (1975, amended) and the Food and Drugs Act",
                "The Standards and Regulation Division of the Ministry of Health oversees pharmaceutical quality and manufacturing",
                "Compounding is regulated as part of pharmacy practice — no separate compounding licence",
                "The Pharmacy Council sets professional standards for pharmacy practice, including compounding",
                "University Hospital of the West Indies (UHWI) maintains compounding standards that serve as a de facto benchmark for hospital practice",
                "Community pharmacies must comply with the Pharmacy Council's inspection standards for compounding areas",
                "Jamaica's National Health Fund (NHF) formulary may influence which preparations are compounded vs. commercially sourced",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "Governed by the Drug Service and the Pharmacy Act (Cap. 372D)",
                "The Chief Pharmaceutical Officer oversees pharmaceutical standards across public and private sectors",
                "Compounding in public facilities (Queen Elizabeth Hospital, polyclinics) follows institutional protocols aligned with international standards",
                "The Barbados National Drug Formulary guides prescribing and may determine which preparations require compounding",
                "Community pharmacies must comply with pharmacy inspection standards that include assessment of compounding areas and practices",
                "The Drug Service Division coordinates medication supply and quality for the public health system",
                "As a small island state, Barbados faces acute ingredient sourcing challenges that directly impact compounding capability",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Compounding vs. Manufacturing: The Regulatory Line",
          body: "In all three Caribbean jurisdictions, there is a critical regulatory distinction between compounding (preparing a medication for an individual patient based on a prescription) and manufacturing (producing medications in bulk for general distribution). Crossing this line — by compounding large batches in advance without prescriptions, or by selling compounded products to other pharmacies — may constitute unlicensed manufacturing, which is a serious legal offence. Always ensure compounding activities remain within the legal boundaries defined by your jurisdiction's legislation.",
        },
        {
          type: "key-term",
          term: "Good Pharmacy Practice (GPP)",
          definition:
            "An international framework, endorsed by the World Health Organization (WHO) and the International Pharmaceutical Federation (FIP), that defines the standards of professional conduct and practice for pharmacies and pharmacy personnel. GPP encompasses all aspects of pharmacy operations including compounding, dispensing, patient counselling, record-keeping, and quality assurance. In the Caribbean, GPP guidelines serve as a benchmark even where specific compounding regulations are not yet fully codified.",
        },
        {
          type: "text",
          body: "The regulatory trend across the Caribbean is toward greater formalisation and harmonisation of compounding standards. CARICOM's work through the Caribbean Regulatory System (CRS) and CARPHA is gradually building regional consensus on pharmaceutical quality standards, including compounding practices. Pharmacy technicians who maintain high compounding standards today are positioning themselves — and their pharmacies — for compliance as these regional standards mature. Being proactive about quality, documentation, and training is not just good practice; it is strategic preparation for the regulatory environment of the near future.",
        },
        {
          type: "knowledge-check",
          question: "In Trinidad and Tobago, under which legislation is the boundary between compounding and manufacturing regulated?",
          options: [
            "The Environmental Management Act",
            "The Food and Drugs Act (Chapter 30:01) administered by the Chemistry, Food and Drugs Division",
            "The Occupational Safety and Health Act",
            "The Telecommunications Act",
          ],
          correctIndex: 1,
          explanation:
            "In Trinidad and Tobago, the Food and Drugs Act (Chapter 30:01), administered by the Chemistry, Food and Drugs Division of the Ministry of Health, regulates drug safety, quality, and the distinction between pharmacy compounding and pharmaceutical manufacturing. Crossing the boundary from compounding to manufacturing without the appropriate licences is a legal offence.",
        },
      ],
    },
    // ── Lesson 6.2 ──
    {
      id: "m6-l2",
      title: "Record-Keeping Requirements for Caribbean Compounding Pharmacies",
      duration: "25 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Records That Protect Patients and Pharmacies",
        },
        {
          type: "text",
          body: "Comprehensive record-keeping is the foundation of accountable pharmacy practice, and it is especially critical in compounding, where each preparation is a unique product made without the quality assurance framework of commercial manufacturing. In the Caribbean, where regulatory inspections may be infrequent and where compounding pharmacies may operate with less oversight than their counterparts in larger pharmaceutical markets, self-discipline in record-keeping is what separates professional compounding from uncontrolled preparation.",
        },
        {
          type: "heading",
          level: 3,
          text: "Records Every Compounding Pharmacy Must Maintain",
        },
        {
          type: "table",
          caption: "Compounding Records and Their Purpose",
          headers: ["Record", "Purpose", "Retention Period", "Key Contents"],
          rows: [
            [
              "Master Formulae",
              "Standardised, approved recipes for all compounded preparations",
              "Indefinite (keep as long as the pharmacy continues to compound that preparation)",
              "Preparation name, strength, ingredients, procedure, QC criteria, BUD guidelines, references",
            ],
            [
              "Compounding Records (Logs)",
              "Detailed record of each compounding event for traceability and accountability",
              "Minimum 2 years (check local requirements — some jurisdictions require longer)",
              "Date, patient name, prescription number, ingredients with lot numbers and expiry dates, quantities, compounder ID, pharmacist check, QC results, BUD assigned",
            ],
            [
              "Ingredient Receipt and Storage Records",
              "Track the source, quality, and storage conditions of all compounding ingredients",
              "Minimum 2 years from the date the ingredient is used up or discarded",
              "Supplier name, date received, ingredient name, lot number, expiry date, certificate of analysis (if available), storage conditions verified",
            ],
            [
              "Equipment Calibration Records",
              "Verify that balances, pH metres, and other equipment are accurate and maintained",
              "Minimum 2 years or as required by local regulations",
              "Date of calibration, equipment ID, calibration method, results, pass/fail, corrective actions, calibrator ID",
            ],
            [
              "Temperature and Humidity Logs",
              "Document environmental conditions in the compounding and storage areas",
              "Minimum 1 year",
              "Date, time, temperature, humidity, location, recorded by, any excursions and corrective actions",
            ],
            [
              "SOP Register",
              "Track all active SOPs, their version numbers, and review dates",
              "Indefinite (maintain current and previous versions)",
              "SOP number, title, version, date approved, approved by, next review date",
            ],
            [
              "Training Records",
              "Document staff competency in compounding procedures",
              "Duration of employment + 2 years",
              "Staff name, SOP/procedure trained on, date, trainer, assessment result",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Digital vs. Paper Records",
          body: "Caribbean compounding pharmacies may use paper-based or digital record-keeping systems, or a combination of both. Digital systems offer advantages in searchability, backup, and analysis, but must be secure (password-protected, backed up regularly, compliant with data protection requirements). Paper systems are acceptable but must be maintained in a legible, organised manner — entries should be in permanent ink, errors should be crossed out with a single line (not obliterated), and corrections should be initialled and dated. Whichever system is used, the records must be accessible, complete, and available for regulatory inspection.",
        },
        {
          type: "heading",
          level: 3,
          text: "Record-Keeping Best Practices for Caribbean Pharmacies",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Complete the compounding record in real time — during and immediately after compounding, not hours or days later from memory",
            "Never use correction fluid (e.g., Tipp-Ex) on paper records — draw a single line through the error, write the correction, and initial and date the change",
            "Assign a unique batch or preparation number to each compounding event for easy cross-referencing",
            "File compounding records in chronological order for easy retrieval during inspections",
            "Back up digital records at least weekly — consider off-site or cloud backup for hurricane resilience",
            "Retain records for at least the minimum period required by local regulations — when in doubt, keep longer",
            "Ensure all staff understand the importance of accurate, contemporaneous documentation — it is not bureaucracy, it is patient safety",
          ],
        },
        {
          type: "case-study",
          title: "Case Study: The Compounding Record That Saved the Pharmacy",
          scenario:
            "A community pharmacy in Port of Spain receives a complaint from a patient's doctor reporting that a compounded paediatric omeprazole suspension appears to have caused an adverse reaction in a 2-year-old patient. The pharmacy's records show: (1) the compounding record with the exact master formula used, (2) all ingredients with lot numbers and expiry dates, (3) the identity of the technician who compounded and the pharmacist who checked, (4) QC results showing the preparation passed all checks, and (5) the certificate of analysis for the omeprazole powder from the supplier. Investigation reveals that the adverse reaction was actually caused by a food allergy, not the medication. The complete compounding records enabled a thorough, rapid investigation that exonerated the pharmacy.",
          questions: [
            "How did the compounding records enable the pharmacy to investigate the complaint?",
            "What would have happened if the pharmacy had incomplete or missing records?",
            "What additional documentation could the pharmacy maintain to further strengthen its quality assurance?",
          ],
          discussion:
            "The complete compounding records enabled the pharmacy to trace every ingredient to its source, verify the formula and procedure used, confirm quality control results, and identify all personnel involved. Without these records, the pharmacy would have been unable to demonstrate that the preparation was made correctly, potentially facing regulatory action, legal liability, and reputational damage. This case illustrates that thorough documentation is not just a regulatory requirement — it is the pharmacy's best legal protection. Additional strengthening measures could include retaining a sample of each compounded batch for testing if a complaint arises (stability samples), and maintaining photographic records of finished preparations for comparison purposes.",
        },
        {
          type: "knowledge-check",
          question: "What is the minimum recommended retention period for compounding records in most Caribbean jurisdictions?",
          options: [
            "6 months",
            "1 year",
            "2 years",
            "10 years",
          ],
          correctIndex: 2,
          explanation:
            "Most Caribbean jurisdictions require compounding records to be retained for a minimum of 2 years. However, best practice is to keep records longer, especially for preparations made for paediatric patients or those with chronic conditions. When in doubt, err on the side of retaining records for a longer period. Some jurisdictions may require longer retention periods — always verify your specific local requirements.",
        },
      ],
    },
    // ── Lesson 6.3 ──
    {
      id: "m6-l3",
      title: "Good Pharmacy Practice and Compounding Ethics in the Caribbean",
      duration: "20 min",
      content: [
        {
          type: "heading",
          level: 2,
          text: "Professional Standards for the Caribbean Compounder",
        },
        {
          type: "text",
          body: "Good Pharmacy Practice (GPP) is the international framework that defines the standards of professional conduct and practice for pharmacies and pharmacy personnel. In compounding, GPP means going beyond mere regulatory compliance to embrace a culture of quality, safety, and continuous improvement. For Caribbean pharmacy technicians, GPP provides the ethical and professional foundation for every compounding decision, from ingredient selection to patient counselling on the correct use of a compounded preparation.",
        },
        {
          type: "heading",
          level: 3,
          text: "Core Principles of GPP Applied to Compounding",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Patient safety first: Every compounding decision should be made with the patient's safety as the primary consideration — never cut corners, even under time pressure or cost constraints",
            "Only compound what you are competent to prepare: If a preparation is beyond your training or experience, say so — the pharmacist should be consulted, and the preparation should be referred to a pharmacy with the necessary capability",
            "Use quality ingredients: Only pharmaceutical-grade ingredients from reputable suppliers should be used — never food-grade or industrial-grade substitutes, even if they are cheaper",
            "Follow validated procedures: Always compound according to an approved master formula and SOP — freelancing with formulations risks patient harm",
            "Document everything: Complete, accurate, contemporaneous documentation is a professional obligation, not an administrative burden",
            "Maintain your competence: Compounding science evolves — participate in continuing education, read professional literature, and update your skills regularly",
            "Report problems: If you suspect a quality issue with a compounded preparation (or a compounding ingredient), report it immediately to the pharmacist — never conceal problems",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Ethical Dilemmas in Caribbean Compounding",
        },
        {
          type: "text",
          body: "Caribbean pharmacy technicians may face ethical dilemmas unique to the region's resource-constrained environment. Should you compound a preparation using a base from a non-preferred supplier because the usual supplier is out of stock and the patient needs the medication today? Should you compound a larger-than-prescribed quantity to save the patient a return trip to the pharmacy? Should you use a vehicle that is past its expiry date because no replacement is available on the island? These are real dilemmas, and the answer is always to prioritise patient safety, consult the pharmacist, and document your reasoning.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "When in Doubt, Do Not Compound",
          body: "If at any point during the compounding process you are uncertain about the safety of an ingredient, the accuracy of a calculation, the stability of a formulation, or the appropriateness of a preparation for the patient — STOP. Do not compound. Consult the pharmacist. It is always better to delay dispensing than to release a potentially unsafe preparation. This principle applies universally, but is especially important in the Caribbean, where compounded preparations often serve the most vulnerable patients (children, the elderly, those with limited access to alternative healthcare).",
        },
        {
          type: "island-comparison",
          title: "Professional Bodies and Continuing Education",
          description:
            "Pharmacy technicians across the Caribbean can access professional development and continuing education through various organisations.",
          islands: [
            {
              name: "Trinidad & Tobago",
              flag: "🇹🇹",
              details: [
                "The Pharmacy Board of Trinidad and Tobago governs pharmacy practice standards",
                "The Pharmaceutical Society of Trinidad and Tobago (PSTT) provides continuing education and professional development opportunities",
                "COSTAATT (College of Science, Technology and Applied Arts of Trinidad and Tobago) offers pharmacy technician training",
                "UWI Faculty of Medical Sciences offers advanced pharmaceutical science education",
              ],
            },
            {
              name: "Jamaica",
              flag: "🇯🇲",
              details: [
                "The Pharmacy Council of Jamaica sets professional standards and may require CPD for registration renewal",
                "The Pharmaceutical Society of Jamaica (PSJ) organises professional conferences and continuing education",
                "University of Technology, Jamaica (UTech) and UWI offer pharmacy education programmes",
                "The Caribbean Association of Pharmacists (CAP) provides regional CPD opportunities",
              ],
            },
            {
              name: "Barbados",
              flag: "🇧🇧",
              details: [
                "The Barbados Pharmaceutical Society supports professional development for pharmacy practitioners",
                "Queen Elizabeth Hospital pharmacy department provides in-service training for compounding technicians",
                "UWI Cave Hill campus offers pharmacy-related courses and continuing education",
                "CARPHA provides regional workshops on pharmaceutical quality that are relevant to compounding practice",
              ],
            },
          ],
        },
        {
          type: "knowledge-check",
          question: "A pharmacy technician in Jamaica discovers that the only available batch of a compounding base is past its expiry date, but a patient urgently needs the compounded preparation. What should the technician do?",
          options: [
            "Use the expired base — the patient needs the medication urgently",
            "Refuse to compound and send the patient home without medication",
            "Consult the pharmacist; do not use the expired ingredient; explore alternatives (sourcing from another pharmacy, contacting the prescriber for an alternative formulation)",
            "Use the expired base but assign a shorter beyond-use date",
          ],
          correctIndex: 2,
          explanation:
            "Expired ingredients must not be used in compounding, regardless of urgency. The correct action is to immediately consult the pharmacist and explore alternatives: sourcing the ingredient from another pharmacy on the island, contacting the prescriber for an alternative drug or formulation, or referring the patient to a pharmacy that has the ingredient in stock. Using expired ingredients compromises patient safety and is a violation of professional standards.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "m6-q1",
      question: "In which Caribbean jurisdiction is CARPHA headquartered, providing regional guidance on pharmaceutical quality?",
      options: [
        "Kingston, Jamaica",
        "Bridgetown, Barbados",
        "Port of Spain, Trinidad and Tobago",
        "Georgetown, Guyana",
      ],
      correctIndex: 2,
      explanation:
        "CARPHA (Caribbean Public Health Agency) is headquartered in Port of Spain, Trinidad and Tobago. It provides regional guidance on pharmaceutical quality, disease surveillance, and public health policy that influences compounding standards across the Caribbean.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q2",
      question: "What constitutes the critical legal distinction between pharmacy compounding and pharmaceutical manufacturing in Caribbean jurisdictions?",
      options: [
        "The size of the pharmacy",
        "Compounding is for individual patients based on prescriptions; manufacturing is large-scale production for general distribution",
        "The type of drugs used",
        "The qualifications of the person preparing the medication",
      ],
      correctIndex: 1,
      explanation:
        "Across all Caribbean jurisdictions studied, the critical legal distinction is that compounding involves preparing a medication for an individual patient in response to a specific prescription, while manufacturing involves large-scale production of medications for general distribution. Crossing this boundary without appropriate licensing is a legal offence.",
      difficulty: "medium",
      bloomsLevel: "understand",
    },
    {
      id: "m6-q3",
      question: "A pharmacy in Barbados uses correction fluid (Tipp-Ex) to cover an error in a paper compounding record. Is this acceptable practice?",
      questionType: "true_false",
      options: ["True", "False"],
      correctIndex: 1,
      explanation:
        "Using correction fluid (Tipp-Ex/White-Out) on pharmacy records is NEVER acceptable. The correct method for correcting a paper record is to draw a single line through the error (so the original entry is still readable), write the correction nearby, and initial and date the change. Obliterating entries raises suspicions of record tampering and can have serious legal and regulatory consequences.",
      questionData: {
        correct_answer: false,
      },
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q4",
      question: "Which of the following records should a Caribbean compounding pharmacy maintain? Select ALL that apply.",
      questionType: "multiple_select",
      options: [
        "Master formulae for all compounded preparations",
        "Compounding records with ingredient lot numbers",
        "Equipment calibration records",
        "Temperature and humidity logs for the compounding area",
        "Staff social media passwords",
      ],
      correctIndex: 0,
      explanation:
        "A compounding pharmacy must maintain master formulae, compounding records (including ingredient lot numbers), equipment calibration records, and temperature/humidity logs. These documents are essential for quality assurance, traceability, and regulatory compliance. Staff social media passwords are obviously not a pharmacy record and have no place in compounding documentation.",
      questionData: {
        correct_indices: [0, 1, 2, 3],
      },
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q5",
      question: "According to Good Pharmacy Practice (GPP), what should a pharmacy technician do if they are uncertain about the safety of a compounding ingredient?",
      options: [
        "Use the ingredient anyway to avoid delaying the patient's medication",
        "Substitute a different ingredient without consulting anyone",
        "Stop compounding, consult the pharmacist, and do not proceed until the safety concern is resolved",
        "Continue compounding but assign a shorter beyond-use date",
      ],
      correctIndex: 2,
      explanation:
        "Good Pharmacy Practice is unequivocal: if you are uncertain about the safety of any aspect of the compounding process — an ingredient, a calculation, a procedure — you must stop, not compound, and consult the pharmacist. It is always better to delay than to risk dispensing a potentially unsafe preparation. This principle protects patients and is the ethical standard expected of all pharmacy professionals.",
      difficulty: "easy",
      bloomsLevel: "apply",
    },
    {
      id: "m6-q6",
      question: "In Trinidad and Tobago, pharmaceutical compounding must be performed under whose direct supervision?",
      options: [
        "A pharmacy technician with 5+ years of experience",
        "A registered pharmacist",
        "Any pharmacy employee",
        "A nurse practitioner",
      ],
      correctIndex: 1,
      explanation:
        "In Trinidad and Tobago (and in Jamaica and Barbados), pharmaceutical compounding must be performed under the direct supervision of a registered pharmacist. While the pharmacy technician performs the physical compounding, the pharmacist is responsible for verifying the prescription, approving the formula, checking calculations, and performing the final quality check before the preparation is released.",
      difficulty: "easy",
      bloomsLevel: "remember",
    },
    {
      id: "m6-q7",
      question: "Why should Caribbean pharmacies consider off-site or cloud backup for digital compounding records?",
      options: [
        "To share records with competitor pharmacies",
        "To protect records from natural disasters (hurricanes, flooding) that are common in the Caribbean",
        "To reduce the need for paper records",
        "To allow patients to access their own records online",
      ],
      correctIndex: 1,
      explanation:
        "The Caribbean is highly vulnerable to natural disasters, including hurricanes, tropical storms, flooding, and earthquakes. These events can destroy paper records and on-site digital storage. Off-site or cloud backup ensures that critical compounding records survive natural disasters, enabling continued traceability and regulatory compliance even after a catastrophic event.",
      difficulty: "medium",
      bloomsLevel: "evaluate",
    },
    {
      id: "m6-q8",
      question: "Match each Caribbean organisation with its role in pharmaceutical compounding and quality.",
      questionType: "matching",
      options: [
        "Pharmacy Board of Trinidad and Tobago",
        "CARPHA",
        "Caribbean Regulatory System (CRS)",
        "COSTAATT",
      ],
      correctIndex: 0,
      explanation:
        "The Pharmacy Board of T&T governs pharmacy practice including compounding; CARPHA provides regional pharmaceutical quality guidance; CRS works toward harmonising drug registration across CARICOM; COSTAATT provides pharmacy technician education and training in Trinidad and Tobago.",
      questionData: {
        pairs: [
          { left: "Pharmacy Board of Trinidad and Tobago", right: "Governs pharmacy practice standards including compounding supervision requirements" },
          { left: "CARPHA", right: "Provides regional guidance on pharmaceutical quality and public health standards" },
          { left: "Caribbean Regulatory System (CRS)", right: "Works toward harmonising drug registration across CARICOM member states" },
          { left: "COSTAATT", right: "Offers pharmacy technician education and training programmes in Trinidad and Tobago" },
        ],
      },
      difficulty: "medium",
      bloomsLevel: "understand",
    },
  ],
};

// ============================================================================
// FULL COURSE ASSEMBLY
// ============================================================================

const compoundingCourse: FullCourse = {
  courseId: "compounding-dosage-forms",
  title: "Compounding & Dosage Forms",
  tagline: "The art and science of preparing pharmaceutical formulations for Caribbean patients",
  modules: [module1, module2, module3, module4, module5, module6],
};

// ── Utility helpers ─────────────────────────────────────────────────────────

export const totalLessons = compoundingCourse.modules.reduce(
  (sum, m) => sum + m.lessons.length,
  0,
);

export const totalQuizQuestions = compoundingCourse.modules.reduce(
  (sum, m) => sum + m.quiz.length,
  0,
);

export default compoundingCourse;
