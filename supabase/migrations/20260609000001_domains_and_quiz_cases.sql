-- ============================================================================
-- Curriculum Reorg — Phase 1: domains tier + interactive quiz completion
-- Plan: CURRICULUM-REORG-PLAN.md (D1, D3, D11 approved 2026-06-09)
-- Rollback: supabase/migrations/rollbacks/20260609000001_down.sql
-- ============================================================================

-- ── 1. Domains table (D1: real table — admin can create/rename/recolour/
--      reorder/delete domains in the Curriculum Organizer) ──────────────────
create table if not exists public.domains (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  icon        text,
  color       text,
  order_index integer not null default 0,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

alter table public.domains enable row level security;

drop policy if exists "Anyone can view domains" on public.domains;
create policy "Anyone can view domains"
  on public.domains for select using (true);

drop policy if exists "Admin can insert domains" on public.domains;
create policy "Admin can insert domains"
  on public.domains for insert with check (is_admin());

drop policy if exists "Admin can update domains" on public.domains;
create policy "Admin can update domains"
  on public.domains for update using (is_admin());

drop policy if exists "Admin can delete domains" on public.domains;
create policy "Admin can delete domains"
  on public.domains for delete using (is_admin());

-- ── 2. Courses belong to a domain (null = Unsorted) ─────────────────────────
alter table public.courses
  add column if not exists domain_id uuid references public.domains(id) on delete set null;

create index if not exists idx_courses_domain_id on public.courses(domain_id);

-- ── 3. Interactive quiz completion (D11) ────────────────────────────────────
-- quiz_questions already has: question_type (check), question_data jsonb,
-- explanation, difficulty, blooms_level. Missing: 'numeric' type + case vignettes.
alter table public.quiz_questions drop constraint if exists quiz_questions_question_type_check;
alter table public.quiz_questions add constraint quiz_questions_question_type_check
  check (question_type = any (array[
    'multiple_choice', 'multiple_select', 'ordering', 'matching',
    'fill_in_blank', 'true_false', 'scenario', 'numeric'
  ]));

-- Shared patient vignettes: one case feeds several linked questions.
create table if not exists public.quiz_cases (
  id          uuid primary key default gen_random_uuid(),
  module_id   uuid not null references public.modules(id) on delete cascade,
  title       text,
  vignette    text not null,
  order_index integer not null default 0,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

create index if not exists idx_quiz_cases_module_id on public.quiz_cases(module_id);

alter table public.quiz_cases enable row level security;

drop policy if exists "Anyone can view quiz cases of published courses" on public.quiz_cases;
create policy "Anyone can view quiz cases of published courses"
  on public.quiz_cases for select using (
    exists (
      select 1 from public.modules m
      join public.courses c on c.id = m.course_id
      where m.id = quiz_cases.module_id
        and (c.status = 'published' or is_admin())
    )
  );

drop policy if exists "Admin can insert quiz cases" on public.quiz_cases;
create policy "Admin can insert quiz cases"
  on public.quiz_cases for insert with check (is_admin());

drop policy if exists "Admin can update quiz cases" on public.quiz_cases;
create policy "Admin can update quiz cases"
  on public.quiz_cases for update using (is_admin());

drop policy if exists "Admin can delete quiz cases" on public.quiz_cases;
create policy "Admin can delete quiz cases"
  on public.quiz_cases for delete using (is_admin());

alter table public.quiz_questions
  add column if not exists case_id uuid references public.quiz_cases(id) on delete set null;

create index if not exists idx_quiz_questions_case_id on public.quiz_questions(case_id);

-- ── 4. Seed the approved domains (icons/colors from the approved prototype) ─
-- Fixed UUIDs so this migration is idempotent and re-runnable.
insert into public.domains (id, name, icon, color, order_index) values
  ('d0000000-0000-4000-a000-00000000000a', 'Foundations & Learning Skills',      '🧭', '#0d8b7e', 1),
  ('d0000000-0000-4000-a000-00000000000b', 'Human Body & Pharmacology',          '🫀', '#c2557a', 2),
  ('d0000000-0000-4000-a000-00000000000c', 'Operations, Systems & Technology',   '⚙️', '#4d63c9', 3),
  ('d0000000-0000-4000-a000-00000000000d', 'Calculations & Compounding',         '🧪', '#7a59c2', 4),
  ('d0000000-0000-4000-a000-00000000000e', 'Patient Care & Communication',       '💬', '#c8743a', 5),
  ('d0000000-0000-4000-a000-00000000000f', 'Safety, Quality & Public Health',    '🛡️', '#2f9163', 6),
  ('d0000000-0000-4000-a000-000000000010', 'Caribbean Law, Ethics & Regulation', '⚖️', '#5a6b7b', 7),
  ('d0000000-0000-4000-a000-000000000011', 'Capstone & Certification',           '🎓', '#b8893a', 8),
  ('d0000000-0000-4000-a000-000000000012', 'Clinical Therapeutics (Electives)',  '🩺', '#a8497e', 9)
on conflict (id) do nothing;

-- ── 5. Assign every course to its domain; "order" becomes per-domain rank ───
-- (within-domain order preserves today's global sequence — D3 organizer lets
-- admins reorder freely afterwards)

-- A · Foundations & Learning Skills
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000a', "order" = 1 where id = 'c4c844e4-5ca2-4c73-b0e9-da20221d5d19'; -- Foundations of Pharmacy Practice
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000a', "order" = 2 where id = '135a6628-dcfb-4bc7-951f-077ff2c0971c'; -- Medical & Pharmaceutical Terminology
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000a', "order" = 3 where id = '685190d9-644c-405e-9ec0-c91a7a72d39e'; -- Digital Learning Skills & Study Skills

-- B · Human Body & Pharmacology
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000b', "order" = 1 where id = 'e44ed7d9-6b3a-4131-a0d3-acf099cbd14e'; -- Anatomy, Physiology & Basic Pharmacology
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000b', "order" = 2 where id = '34fcd2ea-9c5d-4a5f-9f70-5276076fcf2a'; -- Pharmacology & Body Systems — Part 1
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000b', "order" = 3 where id = 'e12772ac-03df-4f84-b30d-8ccf4035d9b2'; -- Pharmacology & Body Systems — Part 2

-- C · Operations, Systems & Technology
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000c', "order" = 1 where id = '17107c48-be94-42a4-b8ed-750fc7df90b6'; -- Basic Pharmacy Workflow
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000c', "order" = 2 where id = 'fe1cf6bb-7f0d-4f89-85cc-2db8b87b0a0e'; -- Prescription Processing & Workflow
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000c', "order" = 3 where id = '1a7d2800-a853-476d-85d0-b622390b5f56'; -- Inventory, Storage, Cold Chain & Supply Chain
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000c', "order" = 4 where id = 'd8f844a2-1db3-4e05-a68c-d6bfaff8ad66'; -- Documentation, Record Keeping & Reimbursement
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000c', "order" = 5 where id = '7b098142-5c50-43d5-af69-273ef21f8936'; -- Advanced Pharmacy Systems & Digital Workflow
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000c', "order" = 6 where id = 'c9080def-6458-42cc-a277-e74b70bbcd56'; -- Technology, Automation & AI in Pharmacy

-- D · Calculations & Compounding
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000d', "order" = 1 where id = 'df2df2a3-5a9d-489e-8b9c-fdba7757445e'; -- Pharmacy Calculations
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000d', "order" = 2 where id = '1c8fea95-ccdf-4293-b15b-7b0f285f20b1'; -- Basic Compounding Techniques
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000d', "order" = 3 where id = '78cbdf59-b291-4a05-ae99-c29eec18b8da'; -- Sterile & Nonsterile Compounding (Sim)
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000d', "order" = 4 where id = 'af10aa84-8379-40c1-b486-c056bbc70af3'; -- Complex Calculations

-- E · Patient Care & Communication
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000e', "order" = 1 where id = '009fa954-1cf8-40ba-b7cb-13f67e54bbdc'; -- Professionalism, Communication & EI
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000e', "order" = 2 where id = '2a1d453f-15d4-495e-8fb1-a27ca1048511'; -- OTC Medications & Health Advice Boundaries
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000e', "order" = 3 where id = '624b8d69-7196-4d01-928d-998b07174813'; -- Applied & Written Communication
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000e', "order" = 4 where id = '83562b7c-72b7-4142-b1e2-4740add03ac5'; -- Patient & Interprofessional Communication Labs
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000e', "order" = 5 where id = 'b61374ef-fe5b-4566-902d-ada60166fdf2'; -- Leadership, Teamwork, Adaptability & Problem Solving

-- F · Safety, Quality & Public Health
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000f', "order" = 1 where id = 'ec35d5d4-9d1e-43ed-a337-25e92de1e028'; -- Medication Safety & Error Prevention
update public.courses set domain_id = 'd0000000-0000-4000-a000-00000000000f', "order" = 2 where id = 'aeb6349b-61f4-4dc3-bdf8-d7828cdabfa6'; -- Public Health, Pharmacovigilance & QI

-- G · Caribbean Law, Ethics & Regulation
update public.courses set domain_id = 'd0000000-0000-4000-a000-000000000010', "order" = 1 where id = 'aab90f5f-498d-4d17-80e3-767822f587cc'; -- Caribbean Pharmacy Law, Ethics & Regulation
update public.courses set domain_id = 'd0000000-0000-4000-a000-000000000010', "order" = 2 where id = 'cf53d538-39c1-4093-8a18-62c37abd6b25'; -- Caribbean Regulatory Compliance & Quality Systems
update public.courses set domain_id = 'd0000000-0000-4000-a000-000000000010', "order" = 3 where id = '8be83d5a-4f68-45fc-8e1e-98d50331d79b'; -- Drug Scheduling & Controlled Substances

-- H · Capstone & Certification
update public.courses set domain_id = 'd0000000-0000-4000-a000-000000000011', "order" = 1 where id = 'b1517f97-6d17-4177-a0ff-af8f3af83546'; -- Capstone Integrated Case Simulation
update public.courses set domain_id = 'd0000000-0000-4000-a000-000000000011', "order" = 2 where id = '7ba28388-1843-43d6-9973-c6b183a47dc4'; -- Certification Exam Preparation

-- 🩺 Clinical Therapeutics (Electives) — D5: separate track outside the linear path
update public.courses set domain_id = 'd0000000-0000-4000-a000-000000000012', "order" = 1 where id = 'd45c0968-4a41-49cd-adcf-bb65a084722c'; -- Asthma & Respiratory Drug Therapy
update public.courses set domain_id = 'd0000000-0000-4000-a000-000000000012', "order" = 2 where id = '9b2e2888-f167-4aa9-a432-e6c2677ce896'; -- Diabetes Medications & Patient Counselling
update public.courses set domain_id = 'd0000000-0000-4000-a000-000000000012', "order" = 3 where id = 'decfa615-e757-4876-a2f6-d140affa14cf'; -- Hypertension Management
update public.courses set domain_id = 'd0000000-0000-4000-a000-000000000012', "order" = 4 where id = '44920a17-838f-4852-98e9-3887451f53da'; -- HIV & Antiretroviral Therapy (dup 1 — D4 cleanup decides)
update public.courses set domain_id = 'd0000000-0000-4000-a000-000000000012', "order" = 5 where id = 'fd88c707-a187-4b50-8ae2-99225781d1c8'; -- HIV & Antiretroviral Therapy (dup 2 — D4 cleanup decides)
update public.courses set domain_id = 'd0000000-0000-4000-a000-000000000012', "order" = 6 where id = '8639ca3e-32b1-4930-9a9c-aa6d7b0baef5'; -- Dengue Fever & Tropical Disease Drug Management
update public.courses set domain_id = 'd0000000-0000-4000-a000-000000000012', "order" = 7 where id = '086d9081-308a-4252-8a25-45e1f8b90558'; -- Caribbean Island Pharmacy Practice

-- Intentionally left Unsorted (domain_id null) pending D4 merge decision:
--   59e0c59f-d8d3-43a6-836a-5dcc236dc84d  "Pharmaceutical Calculations for Caribbean Pharmacy Technicians" (draft)
