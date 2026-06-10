# Quiz & Assessment Design Research for PixoPharm LMS

> Research completed 2026-03-24. Covers question types, Bloom's Taxonomy mapping, active learning research, pharmacy-specific assessment design, React component options, and database schema recommendations.

---

## 1. Recommended Question Types to Implement

### Current State
The existing `quiz_questions` table supports only **simple multiple choice** (4 text options, single correct answer index, explanation). This is a solid starting point but limits assessment to primarily the Remember/Understand levels of Bloom's Taxonomy.

### Recommended Question Types (Prioritized for Pharmacy Context)

#### TIER 1 — Implement First (High Impact, Moderate Complexity)

| # | Type | Description | Pharmacy Example | Bloom's Level |
|---|------|-------------|-----------------|---------------|
| 1 | **Multiple Choice (Enhanced)** | Single or multiple correct answers, with image/media support | "Which of the following are Schedule II controlled substances? Select ALL that apply: Morphine, Codeine, Alprazolam, Oxycodone" | Remember / Understand |
| 2 | **True/False with Justification** | Statement + true/false + learner must type or select WHY | "True or False: Amoxicillin 500mg capsules should always be dispensed with food. Justify your answer." | Understand / Evaluate |
| 3 | **Calculation (Numeric Input)** | Learner enters a calculated numeric answer; system validates within tolerance | "A prescription reads: Amoxil 250mg/5mL. Sig: 500mg PO TID x 10 days. How many mL per dose? ___" (Answer: 10, tolerance +/- 0.1) | Apply |
| 4 | **Fill-in-the-Blank** | Sentence with blanks; exact or fuzzy text matching | "The sig code 'ii caps PO QID pc' means: Take ___ capsules by ___ four times daily ___ meals." | Remember / Understand |
| 5 | **Scenario/Case-Based** | A clinical scenario followed by 2-5 linked questions | See Section 5 below for full example | Analyze / Evaluate |

#### TIER 2 — Implement Next (Deepens Learning)

| # | Type | Description | Pharmacy Example | Bloom's Level |
|---|------|-------------|-----------------|---------------|
| 6 | **Ordering/Ranking** | Drag items into correct sequence | "Place these compounding steps in the correct order: 1) Weigh active ingredient, 2) Select mortar, 3) Triturate, 4) Add levigating agent, 5) Transfer to ointment jar" | Understand / Apply |
| 7 | **Matching** | Connect items from two columns | "Match each drug to its therapeutic class: Metformin -> Antidiabetic, Lisinopril -> ACE Inhibitor, Omeprazole -> PPI, Amlodipine -> CCB" | Remember / Understand |
| 8 | **Hotspot/Image Click** | Click on correct area of an image | "On this prescription label, click the area showing the DAW code" or "Identify the apothecary symbol for 'dram' on this prescription" | Apply / Analyze |
| 9 | **Drag-and-Drop Categorization** | Sort items into correct categories | "Drag each medication into the correct controlled substance schedule (II, III, IV, V): Hydrocodone, Tramadol, Alprazolam, Promethazine w/ Codeine" | Understand / Analyze |

#### TIER 3 — Advanced (Highest Cognitive Engagement)

| # | Type | Description | Pharmacy Example | Bloom's Level |
|---|------|-------------|-----------------|---------------|
| 10 | **Multi-Step Calculation** | Chain of calculations with intermediate steps shown | "A physician orders Vancomycin 1g IV Q12H. The patient weighs 70kg. The pharmacy stocks 500mg vials reconstituted to 10mg/mL. Calculate: (a) dose in mg/kg, (b) volume to draw up, (c) drip rate if infused over 60 min using 15 gtt/mL set" | Apply / Analyze |
| 11 | **Error Identification** | Spot the mistake in a prescription, label, or calculation | "Review this prescription and identify all errors: Amoxicillin 250mg/5ml, Disp: 100ml, Sig: 1 tsp TID x 7 days, Refills: 5" (errors: antibiotic with 5 refills, days supply doesn't match volume) | Analyze / Evaluate |
| 12 | **Decision Tree / Branching Scenario** | Answer determines next question | "A patient presents an Rx for Codeine. They mention they're also taking an MAOI. What do you do? -> [Call prescriber] -> What information do you provide?" | Evaluate / Create |
| 13 | **Short Answer (AI-Graded)** | Open text response graded by rubric or AI | "Explain why Young's Rule is less reliable than BSA-based dosing for pediatric patients." | Evaluate / Create |

---

## 2. Bloom's Taxonomy Mapping for Pharmacy Assessment

### The Six Levels Applied to Pharmacy Quiz Design

```
CREATE (Level 6)
  - Design a compounding formula for a specific patient need
  - Write a sig code for a given clinical scenario
  - Create a patient counseling plan

EVALUATE (Level 5)
  - Judge whether a prescription is safe to fill
  - Determine if a calculated dose falls within therapeutic range
  - Assess whether a drug interaction warrants prescriber notification

ANALYZE (Level 4)
  - Compare two dosage forms and explain when each is appropriate
  - Break down a complex prescription into component calculations
  - Identify errors in a filled prescription

APPLY (Level 3)
  - Calculate days' supply from a given sig code
  - Convert between metric and household measurements
  - Determine correct IV drip rate from an order

UNDERSTAND (Level 2)
  - Explain why certain drugs are Schedule II vs Schedule IV
  - Describe the difference between w/v and v/v concentration
  - Interpret a sig code into plain English

REMEMBER (Level 1)
  - Recall that 1 tsp = 5 mL
  - Identify the generic name for Glucophage
  - State the formula D/H x Q
```

### Question Stem Design by Level

| Bloom's Level | Question Stems for Pharmacy | Best Question Types |
|---|---|---|
| **Remember** | "What is...", "List the...", "Which of the following is..." | Multiple Choice, Matching, T/F |
| **Understand** | "Explain why...", "What does this sig code mean?", "Describe the difference..." | Fill-in-Blank, T/F w/ Justification, Short Answer |
| **Apply** | "Calculate the...", "Given this prescription, determine...", "Convert..." | Calculation, Fill-in-Blank, Scenario-Based |
| **Analyze** | "Compare...", "What errors exist in...", "Break down this order into..." | Error Identification, Scenario/Case, Drag-and-Drop |
| **Evaluate** | "Is this dose safe?", "Should you fill this prescription? Why?", "Which approach is most appropriate?" | Scenario/Case, T/F w/ Justification, Decision Tree |
| **Create** | "Design a dosing schedule for...", "Write the sig code for...", "Formulate..." | Short Answer, Multi-Step Calculation, Branching Scenario |

### Best Practice: The 40-30-20-10 Rule for Quiz Composition
Research suggests effective competency-based assessments should roughly follow:
- **10%** Remember questions (vocabulary, basic facts)
- **20%** Understand questions (interpretation, explanation)
- **40%** Apply/Analyze questions (calculations, error-spotting, case analysis)
- **30%** Evaluate/Create questions (clinical judgment, complex scenarios)

This inverts the common pattern where 80% of questions are Remember/Understand.

---

## 3. Active Learning Research: How Assessment Design Promotes Deeper Learning

### Key Research Findings

**The Testing Effect**: Research consistently shows that the act of retrieving information during a quiz strengthens memory more effectively than passive re-reading. Well-designed assessments are themselves a learning activity, not merely a measurement tool.

**Desirable Difficulties**: Robert Bjork's research demonstrates that making retrieval harder (interleaving topics, spacing practice, varying question formats) leads to better long-term retention. Implications:
- Mix question types within a quiz rather than grouping by type
- Include questions that reference earlier modules (spaced retrieval)
- Vary the surface features of similar problems

**Elaborative Interrogation**: Requiring learners to explain "why" an answer is correct (T/F with Justification, explanation fields) produces deeper encoding than simply selecting an answer.

**Productive Failure**: Research by Manu Kapur shows that struggling with challenging problems before receiving instruction leads to deeper understanding. Implications:
- Pre-quiz questions (before the lesson) activate curiosity
- Challenging scenario questions that force reasoning, even if initially failed, build understanding when followed by explanations

**Authentic Assessment**: Wiggins and McTighe's Understanding by Design framework emphasizes that assessment tasks should mirror real-world problem-solving. For pharmacy:
- Use real prescription formats (not simplified versions)
- Include realistic distractors (common mistakes actual technicians make)
- Present calculations in the context of actual workflow (not abstract math)

### Design Principles for PixoPharm

1. **Every question should include a detailed explanation** (already implemented) -- show explanations for both correct AND incorrect answers
2. **Use scenario stems to elevate simple recall questions** -- Instead of "What is 1 tsp in mL?", use "A mother asks how to measure her child's medication using kitchen spoons. The label says 5mL. What should you tell her?"
3. **Implement immediate, corrective feedback** -- Don't just show right/wrong; explain the reasoning
4. **Support retry with variation** -- On incorrect answer, offer a similar question with different numbers
5. **Track time-to-answer** -- Fast correct answers = mastery; slow correct answers = still learning; fast incorrect = misconception

---

## 4. React Component & Library Recommendations

### For Drag-and-Drop (Ordering, Matching, Categorization Questions)

**@dnd-kit** is the clear winner for the PixoPharm stack:
- Modern React library (hooks-based, works with React 19)
- `@dnd-kit/react` with `@dnd-kit/sortable` for ordering questions
- `DragDropProvider` + `useSortable` hook pattern
- Supports multiple sortable lists (for categorization / matching)
- Accessible (keyboard + screen reader support)
- High source reputation, actively maintained, benchmark score 85.73

```bash
# Recommended packages
pnpm add @dnd-kit/react @dnd-kit/dom @dnd-kit/helpers
```

### For Quiz UI Components

**Build custom** rather than using a pre-built quiz library. Reasons:
- `react-quiz-component` and `react-quiz-ui` are basic MCQ-only libraries that won't support the advanced question types needed
- PixoPharm already uses Radix UI + shadcn/ui components (radio groups, checkboxes, inputs, dialogs) which provide the building blocks
- Custom components allow pharmacy-specific features (calculation validation with tolerance, sig code rendering, prescription image hotspots)

### Recommended Component Architecture

```
src/components/quiz/
  QuizContainer.tsx        -- Quiz shell: progress bar, timer, navigation
  QuizQuestion.tsx         -- Question router: renders correct type component
  types/
    MultipleChoice.tsx     -- Radio/checkbox selection
    TrueFalseJustify.tsx   -- T/F toggle + text justification field
    Calculation.tsx        -- Numeric input with unit selector + tolerance
    FillInBlank.tsx        -- Inline text inputs within sentence
    Ordering.tsx           -- dnd-kit sortable list
    Matching.tsx           -- dnd-kit dual-column connector
    Categorization.tsx     -- dnd-kit multi-list sort
    Hotspot.tsx            -- Image with clickable regions
    ScenarioBased.tsx      -- Scenario stem + linked sub-questions
    ErrorIdentification.tsx -- Prescription image/text with selectable errors
  QuizResults.tsx          -- Score summary, per-question review
  QuizExplanation.tsx      -- Detailed explanation with correct answer highlight
```

---

## 5. Database Schema Recommendations

### Design Pattern: Moodle-Inspired Flexible Schema

The proven approach (used by Moodle, Canvas, and other LMS platforms) is a **base question table** with **type-specific extension data stored as JSONB**. This avoids the explosion of type-specific tables while maintaining query performance.

### Proposed Schema (Supabase/PostgreSQL)

```sql
-- ============================================================
-- ENHANCED QUIZ SCHEMA FOR PIXOPHARM LMS
-- Extends existing quiz_questions table to support multiple types
-- ============================================================

-- Question type enum
CREATE TYPE question_type AS ENUM (
  'multiple_choice',        -- Single or multiple correct answers
  'true_false_justify',     -- T/F with required justification
  'calculation',            -- Numeric answer with tolerance
  'fill_in_blank',          -- Text blanks within a sentence
  'ordering',               -- Sequence/ranking
  'matching',               -- Pair items from two columns
  'categorization',         -- Sort items into categories
  'hotspot',                -- Click on image region
  'scenario',               -- Parent: scenario stem with linked sub-questions
  'error_identification',   -- Find errors in presented content
  'short_answer'            -- Open text (manual or AI grading)
);

-- Bloom's taxonomy level enum
CREATE TYPE blooms_level AS ENUM (
  'remember',
  'understand',
  'apply',
  'analyze',
  'evaluate',
  'create'
);

-- Difficulty enum
CREATE TYPE difficulty_level AS ENUM (
  'beginner',
  'intermediate',
  'advanced'
);

-- ============================================================
-- CORE QUESTIONS TABLE (replaces/extends current quiz_questions)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.quiz_questions_v2 (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  module_id UUID REFERENCES public.modules(id) ON DELETE CASCADE NOT NULL,

  -- Question metadata
  question_type question_type NOT NULL DEFAULT 'multiple_choice',
  blooms_level blooms_level DEFAULT 'remember',
  difficulty difficulty_level DEFAULT 'intermediate',
  points SMALLINT DEFAULT 1,
  time_limit_seconds SMALLINT,            -- NULL = no per-question timer
  order_index INTEGER DEFAULT 0,
  tags TEXT[] DEFAULT '{}',               -- e.g., {'calculations', 'sig-codes', 'CDAP'}

  -- Question content
  question_text TEXT NOT NULL,            -- The question stem / prompt
  question_media JSONB,                   -- { "type": "image"|"audio"|"video", "url": "...", "alt": "..." }
  context_text TEXT,                      -- Scenario/case study text (for scenario-type or shared context)

  -- Answer configuration (JSONB varies by question_type, see below)
  answer_config JSONB NOT NULL DEFAULT '{}',

  -- Feedback
  explanation TEXT,                       -- General explanation shown after answering
  explanation_correct TEXT,               -- Shown only when correct
  explanation_incorrect TEXT,             -- Shown only when incorrect
  hint TEXT,                              -- Optional hint (can be shown after first attempt)

  -- Scenario linking
  parent_question_id UUID REFERENCES public.quiz_questions_v2(id) ON DELETE CASCADE,
  -- Non-null for sub-questions of a scenario-based question

  -- Audit
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes
CREATE INDEX idx_quiz_q_module ON public.quiz_questions_v2(module_id);
CREATE INDEX idx_quiz_q_type ON public.quiz_questions_v2(question_type);
CREATE INDEX idx_quiz_q_parent ON public.quiz_questions_v2(parent_question_id);
CREATE INDEX idx_quiz_q_tags ON public.quiz_questions_v2 USING GIN(tags);

-- ============================================================
-- answer_config JSONB STRUCTURE BY QUESTION TYPE
-- ============================================================

-- MULTIPLE_CHOICE:
-- {
--   "options": [
--     { "id": "a", "text": "Metformin", "is_correct": true },
--     { "id": "b", "text": "Lisinopril", "is_correct": false },
--     { "id": "c", "text": "Glipizide", "is_correct": true },
--     { "id": "d", "text": "Atenolol", "is_correct": false }
--   ],
--   "select_multiple": true,
--   "shuffle_options": true,
--   "option_explanations": {
--     "a": "Correct. Metformin is a biguanide antidiabetic.",
--     "b": "Incorrect. Lisinopril is an ACE inhibitor for hypertension.",
--     "c": "Correct. Glipizide is a sulfonylurea antidiabetic.",
--     "d": "Incorrect. Atenolol is a beta-blocker."
--   }
-- }

-- TRUE_FALSE_JUSTIFY:
-- {
--   "correct_answer": true,
--   "justification_required": true,
--   "sample_justification": "Amoxicillin absorption is not significantly affected by food..."
-- }

-- CALCULATION:
-- {
--   "correct_answer": 10.0,
--   "tolerance": 0.1,
--   "tolerance_type": "absolute",       -- "absolute" | "percentage"
--   "unit": "mL",
--   "show_unit": true,
--   "formula_hint": "D/H x Q",
--   "intermediate_steps": [
--     { "label": "Dose desired", "value": "500mg" },
--     { "label": "Dose on hand", "value": "250mg/5mL" },
--     { "label": "Calculation", "value": "500/250 x 5 = 10 mL" }
--   ],
--   "decimal_places": 1
-- }

-- FILL_IN_BLANK:
-- {
--   "template": "The sig code 'ii caps PO QID pc' means: Take {0} capsules by {1} four times daily {2} meals.",
--   "blanks": [
--     { "id": 0, "correct_answers": ["2", "two", "II"], "case_sensitive": false },
--     { "id": 1, "correct_answers": ["mouth", "oral"], "case_sensitive": false },
--     { "id": 2, "correct_answers": ["after", "following"], "case_sensitive": false }
--   ]
-- }

-- ORDERING:
-- {
--   "items": [
--     { "id": "a", "text": "Verify the prescription", "correct_position": 1 },
--     { "id": "b", "text": "Enter into computer system", "correct_position": 2 },
--     { "id": "c", "text": "Perform DUR check", "correct_position": 3 },
--     { "id": "d", "text": "Fill the prescription", "correct_position": 4 },
--     { "id": "e", "text": "Pharmacist final check", "correct_position": 5 }
--   ],
--   "partial_credit": true
-- }

-- MATCHING:
-- {
--   "left_items": [
--     { "id": "l1", "text": "Metformin" },
--     { "id": "l2", "text": "Lisinopril" },
--     { "id": "l3", "text": "Omeprazole" },
--     { "id": "l4", "text": "Amlodipine" }
--   ],
--   "right_items": [
--     { "id": "r1", "text": "Biguanide Antidiabetic" },
--     { "id": "r2", "text": "ACE Inhibitor" },
--     { "id": "r3", "text": "Proton Pump Inhibitor" },
--     { "id": "r4", "text": "Calcium Channel Blocker" }
--   ],
--   "correct_pairs": { "l1": "r1", "l2": "r2", "l3": "r3", "l4": "r4" },
--   "shuffle_sides": true,
--   "partial_credit": true
-- }

-- CATEGORIZATION:
-- {
--   "categories": [
--     { "id": "c1", "name": "Schedule II" },
--     { "id": "c2", "name": "Schedule III" },
--     { "id": "c3", "name": "Schedule IV" }
--   ],
--   "items": [
--     { "id": "i1", "text": "Oxycodone", "correct_category": "c1" },
--     { "id": "i2", "text": "Testosterone", "correct_category": "c2" },
--     { "id": "i3", "text": "Alprazolam", "correct_category": "c3" },
--     { "id": "i4", "text": "Morphine", "correct_category": "c1" },
--     { "id": "i5", "text": "Diazepam", "correct_category": "c3" }
--   ],
--   "partial_credit": true
-- }

-- HOTSPOT:
-- {
--   "image_url": "/images/prescription-label-01.png",
--   "image_alt": "Sample prescription label",
--   "regions": [
--     {
--       "id": "r1",
--       "label": "DAW code",
--       "shape": "rect",
--       "coords": { "x": 120, "y": 45, "width": 30, "height": 20 },
--       "is_correct": true
--     },
--     {
--       "id": "r2",
--       "label": "Refill count",
--       "shape": "rect",
--       "coords": { "x": 200, "y": 180, "width": 40, "height": 20 },
--       "is_correct": false
--     }
--   ],
--   "select_multiple": false
-- }

-- ERROR_IDENTIFICATION:
-- {
--   "content_type": "prescription",      -- "prescription" | "label" | "calculation"
--   "presented_content": "Rx: Amoxicillin 250mg/5mL\nDisp: 100mL\nSig: 1 tsp TID x 7 days\nRefills: 5",
--   "errors": [
--     {
--       "id": "e1",
--       "description": "Antibiotics should not have 5 refills",
--       "location": "Refills: 5",
--       "severity": "critical"
--     },
--     {
--       "id": "e2",
--       "description": "Days supply mismatch: 5mL x 3/day x 7 days = 105mL but only 100mL dispensed",
--       "location": "Disp: 100mL",
--       "severity": "moderate"
--     }
--   ],
--   "partial_credit": true
-- }

-- SHORT_ANSWER:
-- {
--   "max_length": 500,
--   "rubric": [
--     { "criterion": "Mentions BSA-based dosing as more accurate", "points": 1 },
--     { "criterion": "Explains why age alone is insufficient (body comp varies)", "points": 1 },
--     { "criterion": "References specific formula or clinical guideline", "points": 1 }
--   ],
--   "sample_answer": "Young's Rule uses only age as a variable...",
--   "grading_mode": "manual"            -- "manual" | "ai_assisted" | "keyword_match"
-- }

-- SCENARIO (parent question):
-- {
--   "scenario_type": "case_study",
--   "sub_question_ids": ["uuid-1", "uuid-2", "uuid-3"],
--   "sequential": true                  -- Must answer in order vs. any order
-- }

-- ============================================================
-- QUIZ ATTEMPTS TABLE (tracks student responses)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.quiz_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  module_id UUID REFERENCES public.modules(id) ON DELETE CASCADE NOT NULL,
  course_id UUID NOT NULL,

  -- Attempt metadata
  attempt_number SMALLINT DEFAULT 1,
  started_at TIMESTAMPTZ DEFAULT now(),
  completed_at TIMESTAMPTZ,
  time_spent_seconds INTEGER,

  -- Results
  score DECIMAL(5,2),                    -- Points earned
  max_score DECIMAL(5,2),                -- Total possible points
  percentage DECIMAL(5,2),               -- Score as percentage
  passed BOOLEAN,                        -- Met passing threshold

  -- Settings used for this attempt
  passing_threshold DECIMAL(5,2) DEFAULT 70.00,
  question_count SMALLINT,
  randomized BOOLEAN DEFAULT false
);

CREATE INDEX idx_attempts_user ON public.quiz_attempts(user_id);
CREATE INDEX idx_attempts_module ON public.quiz_attempts(module_id);

-- ============================================================
-- INDIVIDUAL QUESTION RESPONSES TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS public.quiz_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  attempt_id UUID REFERENCES public.quiz_attempts(id) ON DELETE CASCADE NOT NULL,
  question_id UUID REFERENCES public.quiz_questions_v2(id) ON DELETE CASCADE NOT NULL,

  -- Response data (JSONB varies by question type)
  response JSONB NOT NULL DEFAULT '{}',
  -- Examples:
  -- MCQ: { "selected": ["a", "c"] }
  -- Calculation: { "answer": 10.0 }
  -- Fill-blank: { "blanks": { "0": "2", "1": "mouth", "2": "after" } }
  -- Ordering: { "order": ["c", "a", "d", "b", "e"] }
  -- Matching: { "pairs": { "l1": "r1", "l2": "r3" } }
  -- Hotspot: { "clicked_regions": ["r1"] }
  -- T/F Justify: { "answer": true, "justification": "Because..." }
  -- Short answer: { "text": "Young's Rule uses only age..." }

  -- Grading
  is_correct BOOLEAN,
  partial_score DECIMAL(5,2),            -- For partial credit questions
  max_score DECIMAL(5,2),
  time_spent_seconds INTEGER,            -- Per-question time tracking

  -- AI/manual grading (for short_answer type)
  graded_by TEXT,                        -- 'auto' | 'manual' | 'ai'
  grader_notes TEXT,

  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_responses_attempt ON public.quiz_responses(attempt_id);
CREATE INDEX idx_responses_question ON public.quiz_responses(question_id);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE public.quiz_questions_v2 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_responses ENABLE ROW LEVEL SECURITY;

-- Questions are readable by all authenticated users
CREATE POLICY "Quiz questions viewable by authenticated users"
  ON public.quiz_questions_v2 FOR SELECT
  USING (auth.role() = 'authenticated');

-- Only admins/instructors can modify questions (handle in app logic or with role check)
CREATE POLICY "Quiz questions modifiable by admins"
  ON public.quiz_questions_v2 FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role IN ('admin', 'instructor')
    )
  );

-- Users can view/create their own attempts
CREATE POLICY "Users manage own quiz attempts"
  ON public.quiz_attempts FOR ALL
  USING (auth.uid() = user_id);

-- Users can view/create their own responses
CREATE POLICY "Users manage own quiz responses"
  ON public.quiz_responses FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.quiz_attempts
      WHERE id = quiz_responses.attempt_id AND user_id = auth.uid()
    )
  );

-- Admins can view all attempts/responses
CREATE POLICY "Admins view all quiz attempts"
  ON public.quiz_attempts FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role IN ('admin', 'instructor')
    )
  );

CREATE POLICY "Admins view all quiz responses"
  ON public.quiz_responses FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role IN ('admin', 'instructor')
    )
  );
```

---

## 6. Pharmacy Calculation Quiz Strategies: Challenging but Fair

### Core Principles

1. **Context over abstraction** -- Never present a bare math problem. Always wrap calculations in a realistic pharmacy scenario with patient name, prescription details, and Caribbean-specific drug names/brands.

2. **Progressive complexity within a quiz** -- Start with single-step calculations (unit conversion), progress to multi-step (dose -> volume -> days supply), end with judgment calls (is this dose safe?).

3. **Realistic distractors** -- Use common calculation errors as wrong answers:
   - Forgetting to convert units (mg vs g)
   - Inverting the D/H fraction
   - Off-by-one decimal place errors
   - Using wrong conversion factor (1 oz = 28.35g vs 30g approximation)

4. **Tolerance-based grading for calculations** -- Accept answers within a reasonable tolerance:
   - Exact integers: no tolerance needed
   - Decimal results: +/- 0.1 or nearest whole number depending on clinical significance
   - Clinical rounding: accept 10mL or 10.0mL for the same answer

5. **Show your work (intermediate steps)** -- For multi-step calculations, present intermediate steps in the explanation. Consider optional "show your work" text fields that don't affect scoring but help instructors identify where errors occur.

### Specific Strategies by Calculation Type

| Calculation Type | Strategy | Example |
|---|---|---|
| **Unit Conversion** | Provide conversion table reference, vary the direction (metric -> household AND household -> metric) | "A patient needs 2 tablespoons. How many mL should you measure?" |
| **Dosage (D/H x Q)** | Vary the concentration format (mg/mL, mg/5mL, mg/tablet), include real Caribbean brand names | "Rx: Panadol (paracetamol) 500mg. On hand: Panadol Elixir 120mg/5mL. Volume per dose?" |
| **Days' Supply** | Use real sig codes (not plain English), include PRN scenarios with "max daily dose" constraints | "Sig: i-ii tabs PO Q4-6H PRN. Disp: #60. Calculate days' supply using max daily dose." |
| **IV Flow Rates** | Provide tubing factor as part of the scenario, vary between mL/hr and gtt/min | "Order: NS 1000mL IV over 8 hours. Tubing: 15 gtt/mL. Calculate gtt/min." |
| **Pediatric Dosing** | Always include patient age AND weight, ask student to verify against safe dose range | "Patient: 4-year-old, 18kg. Order: Amoxil 400mg PO TID. Safe range: 25-50 mg/kg/day. Is this dose safe?" |
| **Compounding** | Present real compounding scenarios with percentage strength, use CDAP/NHF context | "Prepare 120g of 2% salicylic acid ointment. How many grams of salicylic acid powder?" |
| **Business Math** | Use TT$/JA$/BDS$ currencies, reference CDAP/NHF reimbursement models | "AWP of Metformin 500mg #100 = TT$85.00. Dispensing fee: TT$25.00. CDAP reimburses AWP + fee. Total reimbursement?" |

### Anti-Memorization Techniques for Calculation Quizzes

1. **Randomized values** -- Store a calculation template with variable placeholders; generate different numbers each attempt:
   ```json
   {
     "template": "Calculate mL per dose: {drug} {desired_dose}mg. On hand: {concentration}mg/{volume}mL",
     "variables": {
       "drug": ["Amoxicillin", "Cephalexin", "Azithromycin"],
       "desired_dose": { "min": 250, "max": 1000, "step": 250 },
       "concentration": [125, 250, 500],
       "volume": [5, 10]
     },
     "formula": "desired_dose / concentration * volume"
   }
   ```

2. **Question pooling** -- Create 3-5 variants of each calculation question, randomly select one per attempt.

3. **Reverse questions** -- If students always calculate "how many mL?", also ask "what concentration would give 10mL per dose?" This tests understanding of the formula, not just mechanical application.

4. **Error-checking questions** -- Present a completed calculation and ask "Is this correct? If not, what is the correct answer?" This requires understanding the method, not just following steps.

5. **Estimation before calculation** -- Ask students to estimate an answer range before calculating. Builds number sense and catches gross errors.

---

## 7. Migration Strategy from Current Schema

### Phase 1: Backward-Compatible Enhancement
- Create `quiz_questions_v2` table alongside existing `quiz_questions`
- Migrate existing 52 MCQ questions with a script:
  - `question` -> `question_text`
  - `options` array -> `answer_config.options` with `is_correct` based on `correct_answer` index
  - `explanation` -> `explanation`
  - `question_type` = 'multiple_choice'
  - `blooms_level` = 'remember' (default, manually upgrade later)

### Phase 2: New Question Types
- Build Tier 1 question type components (MCQ Enhanced, T/F Justify, Calculation, Fill-in-Blank, Scenario)
- Update admin dashboard question editor to support type selection and type-specific forms
- Update CoursePlayer quiz view to render different question types

### Phase 3: Advanced Features
- Add Tier 2 types (Ordering, Matching, Hotspot, Categorization) with dnd-kit
- Implement quiz_attempts and quiz_responses tables
- Build analytics dashboard for instructors
- Add question pooling and randomization

### Phase 4: Intelligent Assessment
- Tier 3 types (Multi-step Calculation, Error ID, Branching, Short Answer)
- AI-assisted grading for short answer
- Adaptive difficulty (easier/harder questions based on performance)
- Spaced repetition for missed questions

---

## 8. TypeScript Types for New Schema

```typescript
// Question type enum
type QuestionType =
  | 'multiple_choice'
  | 'true_false_justify'
  | 'calculation'
  | 'fill_in_blank'
  | 'ordering'
  | 'matching'
  | 'categorization'
  | 'hotspot'
  | 'scenario'
  | 'error_identification'
  | 'short_answer';

type BloomsLevel = 'remember' | 'understand' | 'apply' | 'analyze' | 'evaluate' | 'create';
type Difficulty = 'beginner' | 'intermediate' | 'advanced';

// Base question interface
interface QuizQuestionV2 {
  id: string;
  module_id: string;
  question_type: QuestionType;
  blooms_level: BloomsLevel;
  difficulty: Difficulty;
  points: number;
  time_limit_seconds: number | null;
  order_index: number;
  tags: string[];
  question_text: string;
  question_media: { type: 'image' | 'audio' | 'video'; url: string; alt: string } | null;
  context_text: string | null;
  answer_config: AnswerConfig;
  explanation: string | null;
  explanation_correct: string | null;
  explanation_incorrect: string | null;
  hint: string | null;
  parent_question_id: string | null;
  created_at: string;
  updated_at: string;
}

// Discriminated union for answer configs
type AnswerConfig =
  | MultipleChoiceConfig
  | TrueFalseJustifyConfig
  | CalculationConfig
  | FillInBlankConfig
  | OrderingConfig
  | MatchingConfig
  | CategorizationConfig
  | HotspotConfig
  | ScenarioConfig
  | ErrorIdentificationConfig
  | ShortAnswerConfig;

interface MultipleChoiceConfig {
  options: { id: string; text: string; is_correct: boolean }[];
  select_multiple: boolean;
  shuffle_options: boolean;
  option_explanations?: Record<string, string>;
}

interface TrueFalseJustifyConfig {
  correct_answer: boolean;
  justification_required: boolean;
  sample_justification: string;
}

interface CalculationConfig {
  correct_answer: number;
  tolerance: number;
  tolerance_type: 'absolute' | 'percentage';
  unit: string;
  show_unit: boolean;
  formula_hint?: string;
  intermediate_steps?: { label: string; value: string }[];
  decimal_places: number;
}

interface FillInBlankConfig {
  template: string;  // "Take {0} capsules by {1}"
  blanks: {
    id: number;
    correct_answers: string[];  // Multiple accepted answers
    case_sensitive: boolean;
  }[];
}

interface OrderingConfig {
  items: { id: string; text: string; correct_position: number }[];
  partial_credit: boolean;
}

interface MatchingConfig {
  left_items: { id: string; text: string }[];
  right_items: { id: string; text: string }[];
  correct_pairs: Record<string, string>;
  shuffle_sides: boolean;
  partial_credit: boolean;
}

interface CategorizationConfig {
  categories: { id: string; name: string }[];
  items: { id: string; text: string; correct_category: string }[];
  partial_credit: boolean;
}

interface HotspotConfig {
  image_url: string;
  image_alt: string;
  regions: {
    id: string;
    label: string;
    shape: 'rect' | 'circle' | 'polygon';
    coords: Record<string, number>;
    is_correct: boolean;
  }[];
  select_multiple: boolean;
}

interface ScenarioConfig {
  scenario_type: 'case_study' | 'decision_tree';
  sub_question_ids: string[];
  sequential: boolean;
}

interface ErrorIdentificationConfig {
  content_type: 'prescription' | 'label' | 'calculation';
  presented_content: string;
  errors: {
    id: string;
    description: string;
    location: string;
    severity: 'critical' | 'moderate' | 'minor';
  }[];
  partial_credit: boolean;
}

interface ShortAnswerConfig {
  max_length: number;
  rubric: { criterion: string; points: number }[];
  sample_answer: string;
  grading_mode: 'manual' | 'ai_assisted' | 'keyword_match';
}

// Quiz attempt tracking
interface QuizAttempt {
  id: string;
  user_id: string;
  module_id: string;
  course_id: string;
  attempt_number: number;
  started_at: string;
  completed_at: string | null;
  time_spent_seconds: number | null;
  score: number | null;
  max_score: number | null;
  percentage: number | null;
  passed: boolean | null;
  passing_threshold: number;
  question_count: number;
  randomized: boolean;
}

// Individual question response
interface QuizResponse {
  id: string;
  attempt_id: string;
  question_id: string;
  response: Record<string, unknown>;
  is_correct: boolean | null;
  partial_score: number | null;
  max_score: number | null;
  time_spent_seconds: number | null;
  graded_by: 'auto' | 'manual' | 'ai' | null;
  grader_notes: string | null;
  created_at: string;
}
```

---

## Sources

### Assessment & Question Types
- [Beyond Multiple Choice: 6 Innovative Question Types (TAO Testing)](https://www.taotesting.com/blog/beyond-multiple-choice-innovative-question-types-in-assessment-platforms/)
- [15 Online Exam Types (Eklavvya)](https://www.eklavvya.com/blog/online-exams-guide/)
- [Types of Quiz Questions for Distance Learning (Jotform)](https://www.jotform.com/blog/types-of-quiz-questions/)
- [Different Types of E-Learning Assessments (Easygenerator)](https://www.easygenerator.com/en/blog/how-to/overview-of-e-learning-assessments/)
- [9 Assessment Methods for Online Learning (iSpring)](https://www.ispringsolutions.com/blog/8-ways-to-assess-online-student-learning)

### Bloom's Taxonomy & Higher-Order Thinking
- [Bloom's Taxonomy Question Stems (Top Hat)](https://tophat.com/blog/blooms-taxonomy-question-stems/)
- [Higher Order Thinking: Bloom's Taxonomy (UNC Learning Center)](https://learningcenter.unc.edu/tips-and-tools/higher-order-thinking/)
- [Bloom's Taxonomy of Educational Objectives (UIC)](https://teaching.uic.edu/cate-teaching-guides/syllabus-course-design/blooms-taxonomy-of-educational-objectives/)
- [Creating MCQs for Higher Order Thinking (University of Saskatchewan)](https://teaching.usask.ca/articles/2025-02-28-multichoice-questions-higher-order-thinking.php)
- [Questions for Assessing Higher-Order Cognitive Skills (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3587855/)
- [Assessing Higher-Order Thinking with MCQs (Brock University)](https://brocku.ca/pedagogical-innovation/resources/assessing-higher-order-thinking-with-multiple-choice-questions-mcqs/)

### Active Learning & Deeper Learning Research
- [Deeper Learning (Structural Learning)](https://www.structural-learning.com/post/deeper-learning)
- [Promoting Students' Deep Learning Through Design-Based Learning (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9702745/)
- [Assessing Deeper Learning (Defined Learning)](https://blog.definedlearning.com/assessing-deeper-learning)
- [Active Learning Strategies (CU Boulder)](https://www.colorado.edu/center/teaching-learning/teaching-resources/learner-engagement/active-learning-strategies)

### Pharmacy Assessment & Calculations
- [Updated 2026 PTCB Syllabus Key Changes (PTCB Test Prep)](https://ptcbtestprep.com/updated-2026-ptcb-syllabus-key-changes-you-should-know/)
- [Pharmacy Calculations (StatPearls/NCBI)](https://www.ncbi.nlm.nih.gov/books/NBK560924/)
- [Pharmaceutical Compounding Calculations (USP)](https://www.uspnf.com/sites/default/files/usp_pdf/EN/USPNF/c1160.pdf)
- [PTCE Study Guide 2026 (Pharmacy Tech Scholar)](https://pharmacytechscholar.com/ptce-study-guide/)
- [Drug Dosage Calculations (KnowledgeDose)](https://www.knowledgedose.com/drug-dosage-calculations/)

### Database Schema References
- [Moodle Question Database Structure](https://docs.moodle.org/dev/Question_database_structure)
- [Moodle Quiz Database Structure](https://docs.moodle.org/dev/Quiz_database_structure)
- [Schema for Quiz Application with Multiple Question Types (SitePoint)](https://www.sitepoint.com/community/t/schema-for-quiz-application-with-multiple-types-of-questions/41562)

### React Components
- [dnd-kit Documentation](https://dndkit.com/)
- [react-quiz-component (npm)](https://www.npmjs.com/package/react-quiz-component)
- [react-quiz-ui (npm)](https://www.npmjs.com/package/react-quiz-ui)
