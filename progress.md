# PIXOPHARM LMS Progress

---

## 2026-04-06: TipTap WYSIWYG Editor + Course Curriculum Restructure — IN PROGRESS (PR open)

### Branch: `feat/tiptap-course-restructure`

### 1. TipTap WYSIWYG Lesson Editor
- **New file**: `src/components/TipTapLessonEditor.tsx`
- Replaces the block-by-block `ContentBlockEditor` in `AdminDashboard.tsx` lesson editing dialog
- Admin writes like Google Docs; `ContentBlock[]` generated automatically behind the scenes
- **Bidirectional conversion**: `ContentBlock[]` ↔ TipTap JSON on load/save
- **Custom TipTap node extensions** (atom blocks with hover Edit/Delete buttons):
  - `CalloutNode` — info/tip/warning/danger callouts
  - `KeyTermNode` — term + definition pairs
  - `KnowledgeCheckNode` — MCQ with options, correct answer, explanation, hint
- **Toolbar**: Bold, Italic, Underline, H2/H3/H4, Bullet/Ordered List, Divider, Table, Callout, Key Term, Quiz, Undo/Redo
- All content still saved as `ContentBlock[]` JSONB to Supabase — fully backward compatible
- `ContentBlockEditor.tsx` kept intact (still used by CoursePlayer for rendering)
- **Packages added**: `@tiptap/react`, `@tiptap/starter-kit`, `@tiptap/core`, `@tiptap/extension-*` (table, highlight, underline, placeholder)

### 2. Course Curriculum Restructure (courses.ts)
- **Restructured from 13 → 24 courses** across 3 levels (Beginner/Intermediate/Advanced)
- Removed "Regional" level — Caribbean context now integrated throughout all courses
- Based on: docx "Pharmacy Technician Diploma Suggested Update" in Downloads
- Penn Foster research also informed the structure (agent running in background)

**New catalog:**

| Level | # | Course |
|-------|---|--------|
| Beginner | 1 | Foundations of Pharmacy Practice (updated) |
| Beginner | 2 | Medical & Pharmaceutical Terminology (NEW) |
| Beginner | 3 | Anatomy, Physiology & Basic Pharmacology (updated) |
| Beginner | 4 | Professionalism, Communication & Emotional Intelligence (NEW) |
| Beginner | 5 | Caribbean Pharmacy Law, Ethics & Regulation (NEW — extracted from B1+I3) |
| Beginner | 6 | Basic Pharmacy Workflow (NEW) |
| Beginner | 7 | Digital Learning Skills & Study Skills (NEW) |
| Intermediate | 8 | Prescription Processing & Workflow (was: Dispensing & Med Mgmt) |
| Intermediate | 9 | OTC Medications & Health Advice Boundaries (NEW) |
| Intermediate | 10 | Pharmacy Calculations (was: Pharmaceutical Calculations, moved from Beginner) |
| Intermediate | 11 | Basic Compounding Techniques (was: Compounding & Dosage Forms) |
| Intermediate | 12 | Applied Pharmacology & Drug Therapy (was: Pharmacology Essentials) |
| Intermediate | 13 | Medication Safety & Error Prevention (NEW — extracted from A1) |
| Intermediate | 14 | Inventory Management, Storage, Cold Chain & Supply Chain (NEW) |
| Intermediate | 15 | Documentation, Record Keeping & Reimbursement Basics (NEW) |
| Intermediate | 16 | Applied & Written Communication (was: Customer Service & Workplace Excellence) |
| Intermediate | 17 | Patient & Interprofessional Communication Labs (was: Patient Care & Communication) |
| Advanced | 18 | Sterile & Nonsterile Compounding via Virtual Simulation (NEW advanced compounding) |
| Advanced | 19 | Complex Calculations (NEW) |
| Advanced | 20 | Advanced Pharmacy Systems & Digital Workflow (NEW) |
| Advanced | 21 | Public Health, Pharmacovigilance & Quality Improvement (was: Quality Assurance & Safety) |
| Advanced | 22 | Caribbean Regulatory Compliance & Quality Systems (was: Caribbean Pharmaceutical Regulations) |
| Advanced | 23 | Technology, Automation & AI in Pharmacy (was: AI in Pharmacy Practice) |
| Advanced | 24 | Leadership, Teamwork, Adaptability & Problem Solving (was: Pharmacy Management & Leadership) |
| Advanced | 25 | Capstone Integrated Case Simulation (NEW) |

**Key design decisions:**
- Existing Supabase course slugs/IDs preserved where possible — no orphaned lesson data
- `caribbean-island-pharmacy-practice` archived in Supabase (not deleted — enrollment history preserved)
- New courses get placeholder modules in Supabase via `scripts/sync-course-metadata.ts`

### 3. Supabase Sync
- **TODO** (needs SUPABASE_SECRET_KEY): `SUPABASE_SECRET_KEY=... npx tsx scripts/sync-course-metadata.ts`
- Script created at `scripts/sync-course-metadata.ts` — safe to run: updates existing, inserts new, archives removed

### Files Changed
- `src/components/TipTapLessonEditor.tsx` — NEW
- `src/components/AdminDashboard.tsx` — import + JSX swap only
- `src/data/courses.ts` — full restructure (13 → 24 courses)
- `scripts/sync-course-metadata.ts` — NEW sync script
- `package.json` + `pnpm-lock.yaml` — TipTap packages added

### Build Status: ✅ PASSES (`pnpm build` clean)

---

## 2026-03-30: CoursePlayer Supabase-Only + Dynamic Badges — DEPLOYED

### Architecture Change: CoursePlayer now 100% Supabase-powered
- **Before**: CoursePlayer loaded from static TypeScript course files with Supabase as fallback
- **After**: CoursePlayer fetches ALL content exclusively from Supabase via `fetchCourseBySlug()`
- No static course file imports remain in the player path
- `transformDbCourse()` maps Supabase snake_case format to TypeScript FullCourse format

### Dynamic Badges (3 locations fixed)
- Overview header badge: `{skillLevel} · {durationWeeks} Weeks · {modules.length} Modules`
- Sidebar badge: `{skillLevel} · {durationWeeks} Weeks`
- Certificate section: `{durationWeeks}` and `{skillLevel}` from Supabase data
- Added `skillLevel` and `durationWeeks` to `FullCourse` interface in `types.ts`
- Updated `CertificateView` component props

### Supabase Data (verified)
- 13 courses, 90 modules, 334 lessons, 833 quiz questions
- All synced via `scripts/sync-lessons-to-supabase.ts`

### Live Site Verification (pixopharm-lms.vercel.app)
- Foundations (Beginner, 6 weeks): 8 modules, 28 lessons, 43 quizzes ✓
- Pharmacology (Intermediate, 10 weeks): 8 modules, 34 lessons, 80 quizzes ✓
- Caribbean Island (Regional, 4 weeks): 4 modules, 23 lessons, 40 quizzes ✓
- Lesson content renders: headings, paragraphs, callouts, key terms, video placeholders ✓
- Zero console errors ✓

### Stale Vercel Deploy Fix
- Previous git push auto-deploy silently failed; deployed bundle was missing `fetchCourseBySlug`
- Fixed with manual `npx vercel --prod` — confirmed by comparing bundle hash

### Commits
- `fcc19a9` — Switch CoursePlayer to Supabase-only
- `3d482c8` — Make CoursePlayer badges dynamic

---

## 2026-03-28: Content Block Editor Bug Fix — DEPLOYED

### Bug Fixed: Editing any block always showed heading form
- **Root cause**: `BlockEditDialog` had stale internal state. It initialized `editingBlock` with `useState(block)` (only sets initial value), and the sync logic on re-renders only fired when `isNew === true`. So clicking any existing block to edit always displayed the form from the first block ever opened.
- **Fix**: Replaced the broken sync logic (3 separate conditional checks) with a clean `useEffect` that properly syncs `editingBlock` whenever the `open` prop or `block` prop changes, and clears state on close.
- **File changed**: `src/components/ContentBlockEditor.tsx`

### Deployed to Vercel
- Production: https://pixopharm-lms.vercel.app

---

## 2026-03-24: E-Learning Engagement Research — COMPLETE

### What was done
- Researched modern e-learning engagement techniques for 2025-2026
- Analyzed engagement patterns from Duolingo, Brilliant.org, Khan Academy, Codecademy
- Evaluated gamification techniques for professional adult training (pharmacy context)
- Compiled evidence-based learning retention research
- Ranked 15 techniques by impact, React implementation complexity, and pharmacy training fit

### Output
- Full research document: `elearning-engagement-research.md`

### Top 5 Techniques (by combined impact + fit score)
1. **Inline Knowledge Checks** — mid-lesson active recall questions (Impact: 9, Complexity: 4)
2. **Spaced Repetition Review** — SM-2/FSRS flashcard scheduling (Impact: 9, Complexity: 5)
3. **Branching Scenario Simulations** — pharmacy decision trees (Impact: 9, Complexity: 6)
4. **Interactive Calculation Workspace** — step-by-step problem solving (Impact: 9, Complexity: 7)
5. **Microlearning Lesson Structure** — 3-7 minute focused segments (Impact: 8, Complexity: 3)

### Key Research Finding
- Active recall produces 57% retention vs. 29% for passive reading
- Spaced repetition yields 150% better retention
- Formative assessment with feedback doubles learning progress (600-study meta-analysis)

---

## 2026-03-24: Tier 1 Interactive Learning Features — DEPLOYED

### What was implemented
All three Tier 1 features from the e-learning engagement research are now live:

#### 1. Inline Knowledge Checks
- `InlineKnowledgeCheck` component in CoursePlayer — interactive MCQ with option selection, submit, instant feedback, hint support, and correct/incorrect styling
- `enrichLessonContent()` function injects checks at natural break points (before headings, after content sections) from `interactiveContent.ts` data
- Knowledge checks created for Modules 1-4 (10+ lessons covered)

#### 2. Spaced Repetition Flashcards (SM-2 Algorithm)
- `useSpacedRepetition` hook implementing the SM-2 algorithm (quality 0-5 → ease factor, interval, repetitions)
- `FlashcardReview` component with 3D card flip animation, rating buttons (Again/Hard/Good/Easy), session progress tracking
- "Generate from Lessons" capability via `syncKeyTerms` — auto-creates cards from key-term content blocks
- Supabase `flashcard_reviews` table with full SM-2 state (ease_factor, interval_days, repetitions, next_review)
- Accessible from sidebar "Study Tools" and course overview

#### 3. Branching Scenario Simulations
- `InlineScenarioSimulation` component — multi-node decision trees with choice feedback, score tracking, and outcome summaries
- 2 comprehensive scenarios created:
  - "The Suspicious Prescription" (Module 3 — prescription verification, controlled substances)
  - "Patient Counselling Challenge" (Module 4 — pharmacy law scenario)
- Scenarios injected at end of relevant lesson content

#### Admin Support
- `KnowledgeCheckForm` in ContentBlockEditor — admin can create knowledge checks with question, options (radio for correct answer), explanation, hint

### Content Data
- `src/data/interactiveContent.ts` (1513 lines) — knowledge checks for 10+ lessons, 2 branching scenarios, flashcard decks for Modules 1-4

### Files changed
- `src/components/CoursePlayer.tsx` — InlineKnowledgeCheck, InlineScenarioSimulation renderers, enrichLessonContent, flashcard view routing
- `src/components/FlashcardReview.tsx` — NEW: card review UI with SM-2 integration
- `src/hooks/useSpacedRepetition.ts` — NEW: SM-2 hook with Supabase persistence
- `src/data/interactiveContent.ts` — NEW: all interactive content data
- `src/data/foundationsCourse.ts` — added knowledge-check and scenario-simulation ContentBlock types
- `src/components/ContentBlockEditor.tsx` — added KnowledgeCheckForm for admin

### Deployed to Vercel
- Production: https://pixopharm-lms.vercel.app

---

## 2026-03-24: Course Preview Fix + Module Dialog Width — DEPLOYED

### Bug Fixed: Preview always showing first course
- **Root cause**: `CoursePlayer` was hardcoded to always use `foundationsCourse` from the data file. The `previewCourseId` from the admin was set but never passed to the player.
- **Fix**: Added `courseId` prop to `CoursePlayer`. When provided, it fetches the course from Supabase via `fetchCourse()` and transforms DB data (modules, lessons, quiz_questions) into the `FullCourse` format. Without `courseId`, it falls back to the hardcoded data for regular students.
- **Files changed**: `CoursePlayer.tsx` (added DB fetch + transform, updated CertificateView to accept dynamic props), `AdminDashboard.tsx` (pass `previewCourseId` to CoursePlayer)

### Bug Fixed: Module edit dialog too narrow
- Changed module dialog from `max-w-lg` to `max-w-2xl` in `AdminDashboard.tsx`

### Deployed to Vercel
- Production: https://pixopharm-lms.vercel.app

---

## 2026-03-24: Quiz Questions Rewritten — ALL 108 QUESTIONS REPLACED

### What was done
- Deleted all 95 existing quiz questions across both courses
- Inserted 108 new, harder quiz questions following Bloom's Taxonomy
- **Foundations of Pharmacy Practice**: 56 questions across 8 modules (7 per module)
- **Pharmaceutical Calculations & Dosage**: 52 questions across 7 modules (7-8 per module)

### Question Type Distribution (per module)
- 1-2 multiple_choice (application-level, not recall)
- 1 multiple_select ("Select ALL that apply")
- 1 ordering OR matching (alternated between modules)
- 1 scenario-based (case study with Caribbean context)
- 1 fill_in_blank OR true_false
- All 7 question types used: multiple_choice, multiple_select, ordering, matching, scenario, fill_in_blank, true_false

### Difficulty Distribution
- easy, medium, hard, expert — all 4 levels represented
- Each module includes 1-2 easy (warmup), 2-3 medium (core), 1-2 hard (application), 0-1 expert (evaluation)

### Bloom's Taxonomy Coverage
- All 5 higher levels used: remember, understand, apply, analyze, evaluate
- Emphasis on apply, analyze, and evaluate (not just memorization)

### Content Highlights
- Caribbean-specific scenarios: CDAP/NHF programmes, Dangerous Drugs Act, cross-island prescriptions
- Real-world pharmacy dilemmas: scope of practice, confidentiality in small communities, dosing errors
- Calculation questions with worked-out explanations: D/H×Q, alligation, drip rates, pediatric dosing
- Business math with TT$/JA$ currency, markup/margin, government reimbursement analysis

---

## 2026-03-24: Multi-Question-Type Quiz System — COMPLETE

### What was done
Rewrote the quiz system across 4 files to support 7 question types instead of only multiple choice.

### Files Changed
1. **`src/data/foundationsCourse.ts`** — Added `QuestionType` union type and expanded `QuizQuestion` interface with `questionType`, `questionData`, `difficulty`, `bloomsLevel` fields
2. **`src/components/CoursePlayer.tsx`** — Complete rewrite of `QuizView` component (was ~156 lines, now ~380 lines) supporting all 7 types: multiple_choice, multiple_select, ordering, matching, fill_in_blank, true_false, scenario
3. **`src/lib/admin-api.ts`** — Added `QuestionType` union type and extended `QuizQuestion` interface with `question_type`, `question_data`, `difficulty`, `blooms_level`. Updated `createQuizQuestion` to pass new fields
4. **`src/components/AdminDashboard.tsx`** — Updated quiz dialog with: question type dropdown, difficulty dropdown, Bloom's level dropdown, and type-specific form fields for each question type. Updated quiz list display with type/difficulty badges

### Question Types Supported
| Type | Student UI | Admin Editor |
|------|-----------|-------------|
| Multiple Choice | Radio buttons (existing) | Options + radio for correct |
| Multiple Select | Checkboxes, "Select all that apply" | Options + checkboxes for correct |
| Ordering | Up/down arrow buttons, shuffled | Items list (correct = entry order) |
| Matching | Left column + dropdown selects | Pairs editor (left + right) |
| Fill in the Blank | Text input field | Acceptable answers list + case-sensitivity toggle |
| True/False | Two large TRUE/FALSE buttons | True/false toggle |
| Scenario | Context card + MC answers | Context textarea + options + radio |

### Key Design Decisions
- Backward compatible: `questionType` is optional, defaults to `multiple_choice`
- All types score 1 point (correct) or 0 (incorrect)
- 70% pass threshold unchanged
- Difficulty badges: easy=green, medium=blue, hard=amber, expert=red
- Bloom's level badge: purple
- Question type badge shown in both student and admin views
- Ordering uses Fisher-Yates shuffle; matching uses deterministic shuffle based on question ID
- TypeScript compiles cleanly, Vite build succeeds

---

## 2026-03-24: Quiz & Assessment Design Research — COMPLETE

### Completed
- Comprehensive research on quiz/assessment design best practices for online learning
- Research saved to `quiz_assessment_research.md`
- **13 question types** identified and prioritized across 3 tiers (Tier 1: MCQ Enhanced, T/F with Justification, Calculation, Fill-in-Blank, Scenario-Based; Tier 2: Ordering, Matching, Hotspot, Categorization; Tier 3: Multi-Step Calc, Error ID, Decision Tree, Short Answer)
- **Bloom's Taxonomy mapping** for all question types with pharmacy-specific question stems at all 6 levels
- **Active learning research** summarized: testing effect, desirable difficulties, elaborative interrogation, productive failure, authentic assessment
- **Database schema designed** (`quiz_questions_v2`) using Moodle-inspired JSONB approach with `answer_config` varying by question type
- **Full TypeScript types** for all 11 answer config interfaces (discriminated union pattern)
- **Quiz attempts + responses tables** designed for tracking student performance with per-question analytics
- **Pharmacy calculation strategies**: anti-memorization techniques (randomized values, question pooling, reverse questions), tolerance-based grading, Caribbean-specific drug/currency context
- **React component architecture** planned: custom components using existing Radix/shadcn stack + @dnd-kit for drag-and-drop question types
- **4-phase migration strategy** from current simple MCQ schema to full multi-type assessment system
- **2026 PTCB exam updates** noted: alligation calculations removed, compounding no longer tested, domain weights rebalanced

### Key Decisions
- Build custom quiz components (not use pre-built libraries) for pharmacy-specific needs
- Use @dnd-kit/react for drag-and-drop question types (Ordering, Matching, Categorization)
- JSONB `answer_config` column for flexible type-specific data (vs. separate tables per type)
- Backward-compatible migration: `quiz_questions_v2` alongside existing `quiz_questions`

---

## 2026-03-24: Pharmaceutical Calculations Course — FULL CONTENT SEEDED TO DATABASE

### Completed
- Seeded complete lesson content and quiz questions into Supabase for the "Pharmaceutical Calculations & Dosage" course (UUID: dd25fa41-616e-4c83-88bf-fbb574512ada)
- **22 lessons** across 7 modules with rich JSONB content blocks (8-15 blocks per lesson)
- **52 quiz questions** across 7 modules with 4 options each, correct answers, and detailed explanations
- Each lesson includes: headings, introductory text, callouts (info/tip/warning/example), worked examples with Caribbean drug names, tables, and key terms
- Caribbean-specific content throughout: CDAP (Trinidad), NHF (Jamaica), Barbados Drug Service, TT$/JA$/BDS$ currencies
- Drug examples: Panadol, Amoxil, Ventolin, Glucophage, Lasix, Renitec, Voltaren, Brufen, etc.

### Module Breakdown (Lessons / Quiz Questions)
| Module | Lessons | Quizzes |
|--------|---------|---------|
| 1. Pharmacy Math Fundamentals | 3 | 8 |
| 2. Systems of Measurement | 3 | 7 |
| 3. Dosage Calculations | 4 | 8 |
| 4. Pediatric Dosing | 3 | 7 |
| 5. IV Flow Rates | 3 | 7 |
| 6. Compounding Calculations | 3 | 8 |
| 7. Business Math | 3 | 7 |
| **TOTAL** | **22** | **52** |

### Lesson Titles
**Module 1:** Fractions & Decimals in Pharmacy | Ratios, Proportions & Percentages | Roman Numerals & Prescription Notation
**Module 2:** The Metric System | Apothecary & Household Measurements | Converting Between Systems
**Module 3:** Desired Over Have Method | Ratio & Proportion Method | Injectable Dosage Calculations | Days' Supply Calculations
**Module 4:** Weight-Based Dosing (mg/kg Method) | Age-Based Formulas (Young's, Clark's, Fried's Rules) | Safe Dose Verification
**Module 5:** Basic IV Flow Rate Calculations | Drip Rate Calculations | Infusion Time & Volume Calculations
**Module 6:** Concentration Expressions (w/v, v/v, w/w, Ratio Strength) | Dilution Calculations (C1V1=C2V2) | Alligation Method
**Module 7:** Drug Pricing & Markup | Insurance & Government Programmes | Inventory Management Math

---

## 2026-03-24: Pharmaceutical Calculations & Dosage Course Research

### Completed
- Comprehensive research for 7-module "Pharmaceutical Calculations & Dosage" course
- Research saved to `pharma_calculations_research.md`
- Covers all 7 modules with key concepts, formulas, lessons, practice problems, quiz questions, tables, and callouts
- Caribbean-specific context throughout: CDAP (Trinidad), NHF (Jamaica), Barbados Drug Service
- Complete CDAP drug list with 47 medications across 12 chronic conditions documented
- NHF Jamaica details: 22 conditions, 600+ drug items, subsidy model
- Barbados Drug Service: National Drug Formulary, free medications for eligible persons
- Common Caribbean drug brands mapped (Panadol, Amoxil, Ventolin, Glucophage, etc.)
- 5 detailed Caribbean pharmacy practice scenarios
- 52 quiz questions total across all modules with explanations
- 26 lessons outlined across 7 modules
- All formulas documented: D/H x Q, Clark's Rule, Young's Rule, Fried's Rule, BSA method, IV drip rate, alligation, C1V1=C2V2, markup, turnover, AWP reimbursement

### Research Sources Used
- ASHP/ACPE curriculum standards
- StatPearls medical references
- PTCB exam preparation resources
- Trinidad Ministry of Health (CDAP programme)
- Jamaica National Health Fund (NHF)
- Barbados Drug Service / QEH Pharmacy
- PAHO Caribbean pharmaceutical profiles
- CARPHA Caribbean Pharmaceutical Policy
- Multiple pharmacy education textbooks and online resources

---

## 2026-03-24: Admin Dashboard Enhancement — Content Block Editor & Draft/Publish Workflow

### Completed
1. **Content Block Editor** (`src/components/ContentBlockEditor.tsx`) — NEW FILE
   - Structured form-based editor for lesson JSONB content blocks
   - Supports 7 block types: heading (h2/h3/h4), text, callout (info/warning/tip/example), list (ordered/unordered), table (dynamic cols/rows), key-term, divider
   - Each block type has its own form fields (not WYSIWYG)
   - Block list with type icons, content preview, and action buttons
   - "Add Block" dropdown menu to select block type
   - Click to edit blocks in a sub-dialog
   - Up/down arrow buttons to reorder blocks
   - Delete block button
   - Dividers are added directly without editing dialog

2. **Enhanced Lesson Dialog** (in AdminDashboard.tsx)
   - Lesson form now stores `content: ContentBlockType[]` alongside title/duration/order
   - Content block editor integrated below the title/duration fields with a separator
   - Dialog widened to `max-w-2xl` with scrollable content
   - Content saved as JSONB to the `content` column via `updateLesson`/`createLesson`

3. **Draft/Publish Workflow Improvements** (in AdminDashboard.tsx)
   - **Course row left border**: draft = amber, published = emerald/green, archived = gray
   - **Status toggle dropdown** on each course row (not just in edit dialog)
     - Dropdown shows available transitions (e.g., Published course can Move to Draft or Archive)
     - Each option has a colored dot indicator
   - **Confirmation dialog** for status changes:
     - Publish: "This will make the course visible to all students. Continue?"
     - Unpublish: "This will hide the course from students. Continue?"
     - Archive: "This will archive the course. Students will no longer be able to access it."
   - **Publish/Unpublish button** added to course edit dialog footer (left side)
     - Shows "Unpublish" (amber) when course is published, "Publish" (green) when draft

4. **Course Detail View Improvements** (in AdminDashboard.tsx - ModuleCard)
   - Lessons now show a content preview below the title:
     - First text block truncated to 60 chars, OR "X content blocks" count
     - "No content" if no blocks exist
   - Quiz questions now show the correct answer with a green checkmark indicator
   - Both lessons and quizzes use a 2-line layout (title + metadata/preview)

### Files Modified
- `src/components/AdminDashboard.tsx` — Enhanced lesson dialog, status workflow, course detail view
- `src/components/ContentBlockEditor.tsx` — NEW: full content block editor component

### Build Status
- TypeScript: PASSES (zero errors)
- Vite build: PASSES

---

## 2026-03-24: Database Seeding — All Course Data

### Completed
- **Seeded all 8 courses** from `courses.ts` into the `courses` Supabase table
- **Seeded 61 modules** across all 8 courses into the `modules` table
- **Seeded 28 lessons** (full JSONB content) for the Foundations course into the `lessons` table
- **Seeded 43 quiz questions** (with options, correct_answer, explanation) for the Foundations course into the `quiz_questions` table

### Database Counts (Verified)
| Table | Count |
|-------|-------|
| courses | 8 |
| modules | 61 (8 Foundations + 53 other courses) |
| lessons | 28 (Foundations only — other courses have module placeholders) |
| quiz_questions | 43 (Foundations only) |

### Course IDs in Supabase
| Course | UUID |
|--------|------|
| Foundations of Pharmacy Practice | 2d3d4181-05e9-469d-9c9b-ed563149e294 |
| Pharmaceutical Calculations & Dosage | dd25fa41-616e-4c83-88bf-fbb574512ada |
| Dispensing & Medication Management | bcdb80e6-5845-48cc-82b7-70ac3d8da041 |
| Pharmacology Essentials | ef9fdc97-37eb-4511-82d6-73967e8d5d32 |
| Caribbean Pharmaceutical Regulations | fd15008c-7718-4201-8cbe-dfc9be46bcbd |
| AI in Pharmacy Practice | b6577f7d-1347-4167-83a2-c227b1156eb6 |
| Patient Care & Communication | cc73874f-1b11-40e9-8523-ecdb8997faae |
| Quality Assurance & Safety | 444dbc5b-1ed6-49cb-81bb-79079c0034ea |

### Foundations Module IDs
| Module | UUID |
|--------|------|
| M1: Introduction to Pharmacy | 2ca1bc64-d718-4353-892a-89be0b272618 |
| M2: Pharmaceutical Terminology | ee8e5d5c-a94b-4a3c-8ee5-904f097547f2 |
| M3: Prescription Orders & Labels | db6b2cd0-a20f-4885-ae7d-8df359b1d226 |
| M4: Caribbean Pharmacy Law | 0b66db50-8b62-40ed-8242-f18d59a1b7af |
| M5: Ethics & Confidentiality | 43669b1f-41bf-4d09-8c56-32a11d6c671e |
| M6: Pharmacy Workflow | b182b19a-c304-4aac-9cc9-5c2a3ab72616 |
| M7: Health Systems | 86f5d734-d2d9-4ac5-a4fd-6d209d9db6eb |
| M8: Career Pathways | 47b5a060-0545-441a-a35d-cc1cd5775488 |

### Admin User
- **UUID**: 082ea382-d5d6-4708-be39-6047a55bbe7f (set as `created_by` on all courses)

### Notes
- All 8 courses set to `status = 'published'`
- Lessons store full content as JSONB arrays of ContentBlock objects (heading, text, callout, table, island-comparison, key-term, case-study, video-placeholder, image-placeholder, divider, list)
- Quiz options stored as JSONB string arrays; correct_answer is 0-based index
- Non-Foundations courses have module title placeholders only (no lessons/quizzes yet — content needs to be built)

---

## 2026-03-24: Admin Feature Development

### Status: IN PROGRESS

### Database Migrations Applied
1. **`create_courses_modules_lessons_tables`** — DONE
   - `courses` table (id, title, slug, description, skill_level, duration_weeks, icon, color, image_url, status, order, prerequisites, what_youll_learn, created_by, timestamps)
   - `modules` table (id, course_id FK, title, description, order_index, timestamps)
   - `lessons` table (id, module_id FK, title, content JSONB, order_index, duration_minutes, timestamps)
   - `quiz_questions` table (id, module_id FK, question, options JSONB, correct_answer, explanation, order_index)
   - Indexes on FKs, slug, status
   - `update_updated_at()` trigger on all content tables
   - RLS enabled on all tables

2. **`admin_role_rls_policies`** — DONE
   - `is_admin()` SQL helper function (SECURITY DEFINER, checks profiles.role = 'admin')
   - Ian Thomson set as admin (082ea382-d5d6-4708-be39-6047a55bbe7f)
   - Courses: public SELECT on published, admin full CRUD
   - Modules/Lessons/Quiz Questions: public SELECT via published course join, admin full CRUD
   - Profiles: admin can view/update all
   - Enrollments/Course Progress/Certificates: admin can view all

### Task Tracker
| # | Task | Status |
|---|------|--------|
| 1 | Database schema: courses, modules, lessons, quiz_questions | DONE |
| 2 | Admin role: is_admin() + RLS policies | DONE |
| 3 | Admin auth hook: useAdmin + route guard | DONE |
| 4 | Admin Dashboard UI: CRUD + Student tracking + Analytics | DONE |
| 5 | Preview as Student mode | DONE (integrated into admin dashboard) |
| 6 | Seed existing course data into DB | DONE |
| 7 | Documentation: Admin features spec | DONE |

### Build Status
- TypeScript: PASSES (zero errors)
- Vite build: PASSES (dist/ output generated)
- Bundle size: 821 KB JS (234 KB gzipped) + 66 KB CSS (12 KB gzipped)

### Admin Dashboard Files Created (2026-03-24)
1. **`src/hooks/useAdmin.ts`** — DONE
   - Fetches user profile from `profiles` table
   - Checks `role === 'admin'`
   - Returns `{ isAdmin, loading, profile }`
   - Caches result per user ID (useRef) to avoid re-fetching

2. **`src/lib/admin-api.ts`** — DONE
   - 15 CRUD functions wrapping Supabase queries:
     - Courses: fetchCourses, fetchCourse (with full module/lesson/quiz tree), createCourse, updateCourse, deleteCourse
     - Modules: createModule, updateModule, deleteModule
     - Lessons: createLesson, updateLesson, deleteLesson
     - Quiz Questions: createQuizQuestion, updateQuizQuestion, deleteQuizQuestion
     - Students: fetchStudents (profiles + enrollments + progress joins)
     - Analytics: fetchAnalytics (aggregate stats, course popularity, progress distribution, recent completions)
   - Full TypeScript types exported for Course, Module, Lesson, QuizQuestion, StudentProfile, AnalyticsData

3. **`src/components/AdminDashboard.tsx`** — DONE (~1400 lines)
   - **Layout**: Collapsible navy sidebar + white top bar + main content area
   - **Dashboard page**: Welcome message, 4 stat cards, quick actions, recent activity feed
   - **Courses page**: Full CRUD with expandable course rows showing modules/lessons/quizzes
     - Course create/edit dialog: title, auto-slug, description, skill level, duration, icon, color, prerequisites (multi-select badges), what-you'll-learn (dynamic list), status
     - Module create/edit dialog: title, description, number, learning objectives (dynamic list)
     - Lesson create/edit dialog: title, duration, order
     - Quiz question create/edit dialog: question, 4 options with radio for correct answer, explanation
     - Delete confirmation dialog for all entity types
   - **Students page**: Searchable/sortable table with name, island, courses, progress bar, status, joined date
     - Student detail dialog: per-course progress, quiz scores, lessons completed
     - CSV export functionality
   - **Analytics page**: 4 stat cards, CSS bar chart for course popularity, progress distribution, recent completions
   - **Settings page**: Admin profile info, platform stats
   - **Preview as Student**: Opens CoursePlayer with amber preview banner
   - **UX**: Loading skeletons, toast notifications, form validation, empty states, keyboard shortcuts (Escape), responsive design
   - **Design**: Matches existing app (teal primary, navy dark, DM Sans font, shadcn/ui components)
   - All inline SVG icons (no Lucide dependency)
   - TypeScript compiles cleanly, Vite build passes

### Architecture Decisions
- **Admin role**: Using existing `role` column on `profiles` table + `is_admin()` SQL function
- **RLS strategy**: Public users see published content only; admin bypasses via `is_admin()` check
- **Frontend routing**: Admin dashboard as separate view component, not embedded in landing page
- **Course data**: Moving from hardcoded TypeScript to Supabase tables; existing data will be seeded

---

## Current State (2026-03-24)

### Live Deployment
- **Vercel URL**: https://pixopharm-lms.vercel.app
- **Vercel Account**: ian-angus (ian-angus-projects)
- **Git**: Local repo initialized (master branch, 2 commits)
- **Stack**: React 18 + TypeScript + Vite + Tailwind CSS 3.4.1 + shadcn/ui + Radix UI
- **Node/pnpm**: pnpm lockfile v9, TypeScript 5.9.3, Vite 8.0.2

### Project File Structure
```
pixopharm-lms/
├── src/
│   ├── App.tsx                          — Main site (marketing + course player routing)
│   ├── App.css                          — Global styles, hero gradient, animations
│   ├── main.tsx                         — React entry point
│   ├── index.css                        — Tailwind base + Google Fonts import
│   ├── components/
│   │   ├── CoursePlayer.tsx             — Interactive course player (sidebar, content renderer, quiz, certificate)
│   │   └── ui/                         — 35+ shadcn/ui components (accordion, badge, button, card, dialog, etc.)
│   ├── data/
│   │   ├── courses.ts                  — Course catalog (8 courses with metadata, modules list, descriptions)
│   │   └── foundationsCourse.ts        — Full course content (8 modules, 27 lessons, 43 quiz questions, ~2900 lines)
│   ├── assets/
│   │   └── generated/                  — 6 Google Flow-generated images:
│   │       ├── hero.png                — Caribbean pharmacy interior (928 KB)
│   │       ├── about-classroom.png     — Training classroom scene (892 KB)
│   │       ├── course-dispensing.png   — Pharmaceutical dispensing (671 KB)
│   │       ├── course-ai.png           — AI in pharmacy (804 KB)
│   │       ├── caribbean-aerial.png    — Aerial coastline for CTA (1043 KB)
│   │       └── logo-concept.png        — Logo concept (138 KB)
│   ├── hooks/use-toast.ts
│   └── lib/utils.ts                    — cn() utility for Tailwind class merging
├── research/
│   ├── caribbean_pharmacy_research.md  — Broad Caribbean + Barbados (Sections 1-10, ~1800 lines)
│   ├── trinidad_tobago_pharmacy_research.md — Trinidad deep-dive (10 sections)
│   └── jamaica_pharmacy_research.md    — Jamaica deep-dive (12 sections)
├── package.json                        — Dependencies (React 19, Radix UI, etc.)
├── pnpm-lock.yaml
├── vite.config.ts                      — Vite config with @/ path alias
├── tailwind.config.js                  — Tailwind with shadcn/ui theme
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── index.html                          — HTML entry point
└── progress.md                         — This file
```

### What's Built (App.tsx Sections)
1. **Navbar** — Fixed top nav with logo, links (About, Regulations, Courses, Pricing, Testimonials, FAQ), Sign In / Get Started buttons, mobile hamburger
2. **Hero** — Full-height gradient hero with hero.png image, tagline "Every Island. Every Regulation. One Platform.", CTA buttons, CARICOM/Self-Paced/AI-Enhanced badges
3. **StatsBar** — 500+ Graduates, 15 Caribbean Nations, 8 Expert Courses, 51 Learning Modules, 98% Pass Rate
4. **About** — Two-column with about-classroom.png, regulatory callout (drug scheduling differences), 6 feature cards with emojis, 3-stat summary row
5. **Island Regulatory Navigator** — Interactive drug comparison tool (6 drugs × 3 islands), tabbed between Summary/Details views, color-coded drug status badges (OTC/Rx/Restricted/Controlled/Behind Counter)
6. **Courses** — Filterable course grid (All/Beginner/Intermediate/Advanced), 8 course cards with icons, course detail dialog with module list, "Start Course →" for Foundations course
7. **Pricing** — 3 plans (Starter $29, Professional $59, Enterprise $149) with feature lists, popular badge on Professional
8. **Testimonials** — 4 testimonial cards from Caribbean pharmacy professionals (Jamaica, Trinidad, Haiti, Barbados)
9. **FAQ** — 9 accordion items covering course design, certifications, drug classification differences, multi-island practice
10. **Admin Panel** — Tabbed admin area (Content/Students/Analytics) with mock data, course builder form, student table, analytics charts
11. **CTA** — Call-to-action with caribbean-aerial.png background overlay, "Ready to Elevate Caribbean Pharmacy?"
12. **Footer** — 4-column footer (brand, quick links, courses, support + legal)

### Course Player (CoursePlayer.tsx)
- **Navigation**: Collapsible sidebar with module/lesson tree, sequential unlocking (70% quiz pass required)
- **Content Renderer**: Supports 12 block types: heading, text, callout (info/warning/tip/example), table, island_comparison, key_terms, case_study, video_placeholder, image_placeholder, divider, list
- **Quiz System**: Per-question feedback with explanations, score tracking, 70% pass threshold, retake capability
- **Certificate**: Completion view with course title, date, module count
- **Progress State**: `{ lessons: Set<string>; quizScores: Record<string, { score: number; total: number }> }` — currently in-memory only (React useState)

### Foundations Course Content (foundationsCourse.ts)
| Module | Title | Lessons | Quiz Qs |
|--------|-------|---------|---------|
| 1 | The Role of the Pharmacy Technician | 3 | 5 |
| 2 | Pharmaceutical Terminology, Medical Abbreviations & Drug Name Stems | 3 | 8 |
| 3 | Caribbean Pharmaceutical Regulatory Framework | 4 | 5 |
| 4 | Drug Classification & Scheduling Across Islands | 3 | 5 |
| 5 | Ethics & Patient Confidentiality | 5 | 5 |
| 6 | Pharmacy Operations & Workflow | 3 | 5 |
| 7 | Communication & Patient Interaction | 3 | 5 |
| 8 | Introduction to Technology in Pharmacy | 3 | 5 |
| **Total** | | **27** | **43** |

Module 2 includes drug name stems/suffixes (35+ stems across 5 tables: cardiovascular, diabetes, anti-infectives, pain/mental health, respiratory/specialty).
Module 5 is the deepest (5 lessons) covering ethics, data protection acts (all 3 islands), informed consent, ethical dilemmas (3 case studies), whistleblowing.

### Generated Images (via Google Flow / Playwright CDP)
All images generated using Google Flow at https://labs.google/fx/tools/flow with Playwright CDP automation:
- Chrome launched with `--remote-debugging-port=9333`
- Images downloaded via in-browser `fetch()` with auth cookies → ArrayBuffer → Node Buffer → file
- Model used: "Nano Banana 2" (Google Flow default)

### Vercel Deployment
- Auto-detected as Vite project
- Build command: `pnpm run build` (runs `tsc -b && vite build`)
- Output: `dist/` directory
- TypeScript errors fixed for Vercel build (unused imports, JSX namespace, implicit any types)

### Supabase Integration (DONE)
- **Project URL**: https://hqyewiroiswmhfghkzhz.supabase.co
- **Auth**: Email/password signup + login via `useAuth` hook
- **Progress persistence**: `useProgress` hook saves to `course_progress` table (Supabase) with localStorage fallback for anonymous users
- **AuthModal**: Sign in / Sign up dialog component
- **Navbar**: Shows user avatar + name when signed in, Sign In/Out buttons
- **Database schema**: `supabase-schema.sql` — run in Supabase SQL Editor to create tables:
  - `profiles` (auto-created on signup via trigger)
  - `enrollments` (user_id + course_id)
  - `course_progress` (completed_lessons jsonb + quiz_scores jsonb)
  - `certificates` (user_id + course_id + certificate_number)
  - All tables have RLS policies
- **Env vars**: Set on Vercel (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`)
- **Supabase MCP plugin**: Enabled in `~/.claude/settings.json` (needs session restart to activate)

### New Files from Supabase Integration
- `src/lib/supabase.ts` — Supabase client init
- `src/hooks/useAuth.ts` — Auth state, signIn, signUp, signOut
- `src/hooks/useProgress.ts` — Persistent progress (Supabase + localStorage fallback)
- `src/components/AuthModal.tsx` — Sign in/up modal
- `supabase-schema.sql` — Database migration SQL
- `.env` — Local env vars (gitignored)

### Supabase URL Configuration (DONE - 2026-03-24)
- **Site URL**: `https://pixopharm-lms.vercel.app` (changed from `http://localhost:3000`)
- **Redirect URLs**:
  - `https://pixopharm-lms.vercel.app/**` (production)
  - `http://localhost:5173/**` (local dev)
- Email verification links now redirect to the Vercel production site
- Database schema (`supabase-schema.sql`) already executed via Playwright in Supabase SQL Editor

### What's NOT Built Yet
- **Remaining 7 courses** — Only "Foundations of Pharmacy Practice" has full content; other 7 courses have catalog entries but no lesson content
- **Image optimization** — Images are large PNGs (650KB-1MB each), could be converted to WebP
- **Video content** — All video references are placeholders
- **Payment integration** — Pricing page is UI-only, no Stripe/payment processing
- **Course reminders/notifications** — No automated email reminders
- **Search** — No course/content search functionality
- **Mobile nav** — Hamburger menu exists but course player sidebar not optimized for small screens
- **SEO** — Basic index.html only, no meta tags, OG tags, sitemap

### Next Steps (Immediate)
1. **Connect GitHub** — Push to GitHub repo for Vercel auto-deploys
2. **Build remaining courses** — Client needs to approve before building 7 more courses
3. **Image optimization** — Convert PNGs to WebP, add lazy loading
4. **Test full auth flow** — Sign up → verify email → redirect to Vercel → sign in → course progress saves

---

## 2026-03-24: Pharmacy Ethics & Patient Confidentiality Research

### Completed
- Comprehensive web research on pharmacy ethics and patient confidentiality in the Caribbean context
- Added Section 9 to `caribbean_pharmacy_research.md` covering:
  - 9.1: International Pharmacy Ethics Frameworks (FIP, WHO, ICN, APhA, ASHP, PSJ)
  - 9.2: Caribbean-Specific Ethics Issues (small island dynamics, bush medicine, HIV/AIDS stigma, mental health stigma, SIDS challenges)
  - 9.3: Patient Consent in Caribbean Pharmacy (informed consent requirements, right to refuse, language considerations)
  - 9.4: Data Protection in the Caribbean (country-by-country legislation table, CARICOM model, Jamaica DPA 2020 detail)
  - 9.5: Confidentiality Breaches (verbal, electronic, physical types; consequences; mandatory reporting exceptions)
  - 9.6: Professional Boundaries (dual relationships, conflicts of interest, conscientious objection)
  - 9.7: Real-World Ethical Scenarios (8 Caribbean-specific case studies for training use)
  - 9.8: Whistleblowing and Reporting (procedures, protections, Caribbean challenges)
  - 9.9: Summary Framework (Four Pillars of Caribbean Pharmacy Ethics)
  - 9.10: Comprehensive source list organized by topic

### Key Files
- `/caribbean_pharmacy_research.md` — Main research document (Sections 1-9)
- `/progress.md` — This file

---

## 2026-03-24: Trinidad & Tobago Deep-Dive Research for "Foundations of Pharmacy Practice"

### Completed
- Comprehensive web research specifically focused on Trinidad and Tobago pharmacy practice
- Created `trinidad_tobago_pharmacy_research.md` covering 10 major sections:
  - **Section 1: Legislation** -- Detailed coverage of all 4 principal Acts:
    - Pharmacy Board Act (Ch. 29:52) with full section-by-section breakdown
    - Food and Drugs Act (Ch. 30:01) including Third Schedule drugs
    - Antibiotics Act (Ch. 30:02) and the antibiotics dichotomy issue
    - Dangerous Drugs Act (Ch. 11:25) with schedules and penalties
    - Plus Data Protection Act and Regional Health Authorities Act
  - **Section 2: Scope of Practice** -- What pharmacists vs pharmacy assistants vs shopkeepers can legally do; Section 24A text for pharmacy assistants
  - **Section 3: Controlled Substances** -- First/Second Schedule breakdown, licensing (Section 4), record-keeping, penalties table, cannabis decriminalization 2019
  - **Section 4: Patient Confidentiality & Data Protection** -- All 12 privacy principles from Section 6, Section 45 medical information restrictions, healthcare exceptions, Information Commissioner powers, penalties
  - **Section 5: Ethics** -- Statutory basis (Section 7 Council objectives), disciplinary process (Section 20), core ethical principles, professional conduct standards
  - **Section 6: OTC vs Prescription** -- Complete 6-tier drug classification system from Ministry of Health portal, shopkeeper licence provisions, antibiotics dichotomy
  - **Section 7: CARICOM Context** -- Trinidad as CARPHA hub, CRS operations, VigiCarib, TECHPHARM, member states, reliance model, fee structure
  - **Section 8: Health System Structure** -- 5 RHAs with table, public vs private, CDAP program details (12 conditions, 53+ drugs, 250+ pharmacies, process), health facilities network
  - **Section 9: Unique Aspects** -- 10 distinctive features of Trinidad's system for course content
  - **Section 10: Sources** -- 50+ verified sources organized by category

### Key Findings
- Trinidad uses a multi-Act framework (4+ overlapping laws) unlike single Pharmacy Act jurisdictions
- Section 24A (2003 Amendment) explicitly allows pharmacy assistants to "assist in" dispensing/compounding but NOT independently
- The antibiotics dual-registration problem is a real enforcement gap (38.5% of pharmacists misinterpret the law)
- Data Protection Act Section 45 specifically restricts medical information disclosure to consent or court order
- CDAP is a major public-private pharmacy bridge serving 250+ pharmacies
- Cannabis partially decriminalized in 2019 (30g or less, 4 plants per household)
- No standalone published Code of Ethics -- ethics are embedded in the Pharmacy Board Act's disciplinary provisions

### Key Files
- `/trinidad_tobago_pharmacy_research.md` -- Trinidad-specific deep-dive research (NEW)
- `/caribbean_pharmacy_research.md` -- Broad Caribbean research (Sections 1-9)
- `/progress.md` -- This file

---

## 2026-03-24: Jamaica Deep-Dive Research for "Foundations of Pharmacy Practice"

### Completed
- Comprehensive web research specifically focused on Jamaica pharmacy practice
- Created `jamaica_pharmacy_research.md` covering 12 major sections:
  - **Section 1: Primary Legislation** -- All 7 governing Acts with detailed provisions:
    - Pharmacy Act 1966 (structure: Parts I-IV, Schedules, registration, operational requirements, poisons)
    - Food and Drugs Act 1964 & Regulations 1975 (drug lists, List 4 prescription-only rules, generic substitution mandate, labeling)
    - Dangerous Drugs Act 1948 (Parts I-VI, all drug categories)
    - Dangerous Drugs Amendment Act 2015 ("Ganja Law")
    - Precursor Chemicals Act 1999
    - Data Protection Act 2020
    - National Health Fund Act 2003
  - **Section 2: Pharmacy Council of Jamaica** -- 10-member composition (6 PSJ elected + 4 Minister appointed), 8 functions, List Committee, monthly meetings, disciplinary authority, Registration Appeal Tribunal, full registration process and internship requirements
  - **Section 3: Scope of Practice** -- Pharmacist exclusive activities vs pharmacy technician delegated duties; CRITICAL NOTE that Pharmacy Act does NOT define/regulate pharmacy technicians; 6 training institutions listed
  - **Section 4: Controlled Substances** -- Full DDA structure (Parts I-VI), drug classifications table, penalties table with specific amounts, trafficking presumption thresholds, authorized persons list, prescription requirements (14-day supply, written/signed/dated), record-keeping (bound books, ink, 2-year retention), storage (locked receptacle), enforcement powers, complete Ganja Law 2015 provisions (2oz decrim, J$500 ticket, Rastafarian use, 5-plant home cultivation, 5m public smoking ban, hemp <1% THC, CLA structure and licence types)
  - **Section 5: Patient Confidentiality & Data Protection** -- All 8 DPA principles in detail, health data as sensitive personal data, DPO requirement, electronic prescription data requirements, OIC registration, penalties (4% revenue, J$5M, 10 years), PSJ Code confidentiality provisions
  - **Section 6: Ethics** -- PSJ Code of Ethics (9 principles with obligations), 8 documented principles including professional competence, legal compliance, independence, avoiding discredit, service efficiency, confidentiality, cooperation, premises standards; enforcement mechanism
  - **Section 7: Drug Classification** -- Multi-layered system: Food & Drugs Act lists (List 1, List 2, List 4 prescription-only), Pharmacy Act poisons (Part I, Part II), Dangerous Drugs Act controlled substances; VEN List (1,000+ drug categories); product registration requirements
  - **Section 8: CARICOM Context** -- Caribbean Pharmaceutical Policy 2013, CRS operationalized 2017, reliance approach, 90-day assessment target, Jamaica's additional local requirements, Kingston CARPHA lab (since 1980), PANDRH, VigiCarib
  - **Section 9: Health System Structure** -- Drug Serv (106 locations), NHF (est. 2003), GOJ Health Card, NHF Individual Benefits, Public-Private Pharmacy Partner Programme (100+ private pharmacies), JADEP (1996), NHF supply chain role (since 2011), private sector funds 82% of pharma costs, workforce brain drain
  - **Section 10: Precursor Chemicals Act** -- Operational 2013, monitoring/licensing/surveillance functions
  - **Section 11: Key Regulatory Contacts** -- Complete table of 8 organizations with websites and roles
  - **Section 12: Important Caveats** -- 6 critical notes for LMS development including technician regulation gap, outdated legislation, classification details availability, CPD gaps, cannabis complexity, no National Pharmaceutical Policy

### Key Findings / Caveats
- Jamaica's Pharmacy Act (1966) does NOT specifically define or regulate pharmacy technicians -- they operate under delegated authority
- List 1/List 2 drug classification criteria maintained by PCOJ List Committee; not fully available publicly
- Jamaica has NOT officially adopted a National Pharmaceutical Policy
- CPD requirements for pharmacist renewal not well-documented publicly
- Cannabis regulatory landscape is complex: DDA + CLA + Pharmacy Act intersection
- Private sector funds approximately 82% of pharmaceutical costs
- Generic substitution is MANDATORY when a cheaper bioequivalent exists (pharmacist must inform patient)
- Dangerous drugs prescriptions limited to 14 days' supply
- Controlled substance records must be in bound books, in ink, retained 2 years

### Key Files
- `/jamaica_pharmacy_research.md` -- Jamaica-specific deep-dive research (NEW)
- `/trinidad_tobago_pharmacy_research.md` -- Trinidad-specific deep-dive research
- `/caribbean_pharmacy_research.md` -- Broad Caribbean research (Sections 1-9)
- `/progress.md` -- This file

### Next Steps
- Build actual LMS course content/modules from the research
- Create quiz/assessment questions from the ethical scenarios and country-specific content
- Develop interactive case study components
- Consider reaching out to PCOJ directly for List 1/List 2 classification details and CPD requirements
- Record video/audio content scripts if needed
- Develop Jamaica-specific assessment scenarios (controlled substance record-keeping, generic substitution, data protection compliance)
- Consider country-specific deep-dives for Guyana, Bahamas

---

## 2026-03-24: Barbados Deep-Dive Research for "Foundations of Pharmacy Practice"

### Completed
- Comprehensive web research specifically focused on Barbados pharmacy practice
- Added Section 10 to `caribbean_pharmacy_research.md` covering 11 sub-sections:
  - **10.1: Legislation** -- 7 governing Acts identified with Cap numbers:
    - Pharmacy Act (Cap. 372D, 1986/Council est. 1973)
    - Drug Service Act (Cap. 40A)
    - Health Services Act (Cap. 44, 1969)
    - Drug Abuse (Prevention and Control) Act (Cap. 131, 1990)
    - Therapeutic Substances Act (1950)
    - Data Protection Act (2019-29)
    - Financial Administration and Audit (Drug Service) Rules
  - **10.2: BDS & Pharmacy Council** -- BDS functions (9 key functions, 104 staff, 14 pharmacies), Pharmacy Council composition (9 members), registration requirements
  - **10.3: Scope of Practice** -- Pharmacist exclusive activities, pharmacy technician status (NO formal registration framework), de facto technician duties, restricted activities
  - **10.4: Controlled Substances** -- Cap. 131 full structure (Parts I-X), three-schedule classification (narcotic, psychotropic, precursors), Fourth Schedule penalties, Regulations 1993 record-keeping, government acknowledgment of outdated law (Jan 2025)
  - **10.5: Data Protection** -- Act 2019-29 full breakdown: 8 data subject rights, sensitive personal data definition, 72-hour breach notification, DPO requirements, Commissioner appointed July 2021, pharmacy-specific applications
  - **10.6: Ethics** -- BPS role and current activities, ethical framework (no standalone national code), FIP/CAP/PSJ frameworks applicable, 10 core ethical principles table
  - **10.7: OTC vs Prescription** -- Drug classification: POM, Pharmacy-Only, GSL/OTC, Poisons; BNDF Categories A (free/benefit) and B (reduced price); eligibility rules by age group
  - **10.8: CARICOM Context** -- CRS membership, CARPHA relationship, CPP 2013, PANDRH, pharmacovigilance status (PV since 2011, 124 ADR reports 2015-16, significant gaps)
  - **10.9: Health System** -- QEH Pharmacy Department, 8 polyclinics + 2 satellites, private pharmacies, dual system structure, pharmaceutical delivery system table
  - **10.10: BNDF** -- Established 1980, online 2023, AHFS classification system, 17+ therapeutic categories, Drug Formulary Committee composition, how it guides practice
  - **10.11: Summary Table** -- Quick-reference table of all key facts

### Key Findings / Caveats
- Barbados does NOT have a formal drug registration/marketing authorization system (strengthening with PAHO/WHO GBT as of Oct 2024)
- Pharmacy technicians have NO formal registration or certification framework -- they work under pharmacist supervision without statutory definition
- No standalone published Code of Ethics for pharmacists -- ethics governed by Pharmacy Council standards + international frameworks
- Drug Abuse Act (Cap. 131) acknowledged as outdated by government (Jan 2025) -- does not adequately address novel psychoactive substances
- Cannabis in ALL forms remains controlled (First Schedule, Part 1) requiring BDS license
- Data Protection Act health data gap: health data not explicitly listed as separate sensitive data category
- Pharmacovigilance system has significant gaps: no dedicated PV center, no national ADR database, no legal requirement for routine ADR monitoring
- BNDF Drug Formulary Committee lacks written conflict of interest procedures
- Antibiotic dispensing without prescription has been flagged as an issue by PAHO/GHS Index
- Polyclinic prescriptions CANNOT be filled at QEH Pharmacy (separate systems)
- Category A drugs (chronic disease) are FREE for all eligible citizens/residents

### Key Files
- `/caribbean_pharmacy_research.md` -- Broad Caribbean + Barbados research (Sections 1-10, now ~1800+ lines)
- `/trinidad_tobago_pharmacy_research.md` -- Trinidad-specific deep-dive research
- `/jamaica_pharmacy_research.md` -- Jamaica-specific deep-dive research
- `/progress.md` -- This file

### Next Steps
- Consider country-specific deep-dives for Guyana, Bahamas
- Generate images using Google Flow for the website
- Build out remaining 7 courses when client approves

---

## 2026-03-24: Full Course Build — Foundations of Pharmacy Practice

### Completed
- **Built complete interactive LMS course** for "Foundations of Pharmacy Practice"
- Created `src/data/foundationsCourse.ts` — full course content data file:
  - 8 Modules, 27 Lessons, 40 Quiz Questions
  - Each module has 3-5 lessons with rich content (text, tables, callouts, case studies, island comparisons, video placeholders, image placeholders)
  - Each module has a 5-question multiple choice quiz with explanations
  - Module 5 (Ethics & Confidentiality) has 5 lessons — the deepest module — covering:
    - Ethical foundations (Beauchamp & Childress four principles, FIP Code)
    - Patient confidentiality & data protection (all 3 islands' Data Protection Acts)
    - Informed consent in Caribbean context (cultural considerations, language barriers)
    - Ethical dilemmas in small island communities (3 detailed case studies: HIV medication, mental health stigma, pastor's request)
    - Professional standards, whistleblowing & accountability
  - Island-specific comparisons woven throughout (Trinidad, Jamaica, Barbados)
  - Drug scheduling differences highlighted (codeine, emergency contraception, pseudoephedrine)

- Created `src/components/CoursePlayer.tsx` — full interactive course player:
  - Sidebar navigation with module/lesson tree
  - Progress tracking (lessons completed + quiz scores)
  - Content renderer supporting 12 block types (headings, text, callouts, tables, island comparisons, key terms, case studies, video placeholders, image placeholders, dividers, lists)
  - Quiz component with per-question feedback and explanations
  - 70% pass threshold to unlock next module
  - Certificate of completion view
  - Responsive layout with collapsible sidebar
  - Breadcrumb navigation
  - Mark complete + auto-advance functionality

- Integrated course player into main `App.tsx`:
  - "Foundations of Pharmacy Practice" card now shows "Start Course →" button
  - Clicking it transitions from the marketing site to the full course player
  - "Back to PIXOPHARM" button returns to the main site

### Key Files
- `src/data/foundationsCourse.ts` — Course content (8 modules, 27 lessons, 40 quizzes)
- `src/components/CoursePlayer.tsx` — Interactive course player UI
- `src/App.tsx` — Updated with course player integration

### Architecture
- Course content is typed with TypeScript interfaces (ContentBlock union type, QuizQuestion, Lesson, Module, FullCourse)
- Content blocks are rendered by a polymorphic `RenderContent` component
- Progress state is managed in CoursePlayer via React useState (lessons Set + quizScores Record)
- Module unlocking is sequential — must pass previous module's quiz at 70%+ to access next module

---

## 2026-03-24: Spaced Repetition Flashcard System — COMPLETE

### What was done

1. **Supabase Migration: `create_flashcard_reviews_table`**
   - Created `flashcard_reviews` table with SM-2 algorithm fields (ease_factor, interval_days, repetitions, next_review)
   - Enabled Row Level Security with policy "Users manage own flashcards"
   - Added composite index on (user_id, next_review) for efficient review queries
   - Foreign key to auth.users with CASCADE delete

2. **Hook: `src/hooks/useSpacedRepetition.ts`**
   - Full SM-2 algorithm implementation
   - `reviewCard(cardId, quality)` — updates card scheduling based on quality 0-5
   - `addCards(cards)` — manually add new flashcards
   - `syncKeyTerms(courseId, keyTerms)` — deduplicates and bulk-inserts key-terms from lesson content
   - `refreshCards()` — re-fetches due cards from Supabase
   - Returns: dueCards, totalCards, dueCount, loading state

3. **Component: `src/components/FlashcardReview.tsx`**
   - Full-screen modal overlay with CSS 3D card flip animation
   - Four rating buttons: Again (1), Hard (3), Good (4), Easy (5)
   - Progress bar showing session progress
   - Session summary screen with cards reviewed count and accuracy percentage
   - Empty state with "Generate from Lessons" button for syncing key-terms
   - "All caught up" state when no cards are due
   - Uses PIXOPHARM design system (teal primary, dark navy background, DM Sans font)
   - Uses shadcn/ui components: Button, Card, CardContent, Badge, Progress

### Key Files
- `src/hooks/useSpacedRepetition.ts` — SM-2 hook with Supabase persistence
- `src/components/FlashcardReview.tsx` — Flashcard review UI component

### Not Yet Done (integration tasks for later)
- Wire FlashcardReview into CoursePlayer (button to open the review modal)
- Extract key-terms from course data and pass as `keyTerms` prop
- Add flashcard count badge to course dashboard/sidebar
