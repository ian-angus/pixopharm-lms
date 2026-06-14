-- Accreditation-format enhance + quiz generate/review/save
-- PURELY ADDITIVE. No DROP, no ALTER TYPE, no data mutation. Existing rows untouched.
-- Baseline at apply: 34 courses, 235 modules, 418 lessons, 1911 quiz_questions,
-- 104 quiz_cases, 9 domains, 116 empty modules. Counts must not decrease.

-- ── 1. Student-facing module fields (live on modules; inherit existing published-read RLS) ──
alter table public.modules add column if not exists module_overview     text;
alter table public.modules add column if not exists passing_score       integer;
alter table public.modules add column if not exists attempts_allowed    integer;
alter table public.modules add column if not exists seat_time_minutes   integer;

-- ── 2. Reviewer-only accreditation metadata (admin-only table) ──
create table if not exists public.module_metadata (
  module_id          uuid primary key references public.modules(id) on delete cascade,
  module_code        text,
  delivery_mode      text,
  version            text,
  review_date        date,
  author             text,
  reviewer           text,
  crosswalk          jsonb       not null default '[]'::jsonb,  -- §2 accreditation crosswalk rows
  competency_checklist jsonb     not null default '[]'::jsonb,  -- §8 skills/competency items
  remediation_plan   jsonb       not null default '[]'::jsonb,  -- §10 steps
  module_references  jsonb       not null default '[]'::jsonb,  -- §17 sources used
  modality_tags      text[]      not null default '{}'::text[], -- §7 didactic/simulation/experiential
  instructor_notes   text,
  sme_review_notes   text,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);
alter table public.module_metadata enable row level security;
drop policy if exists "Admin full access to module_metadata" on public.module_metadata;
create policy "Admin full access to module_metadata"
  on public.module_metadata for all
  using (is_admin()) with check (is_admin());

-- ── 3. Learning objectives (1:many; student-readable when parent course published) ──
create table if not exists public.learning_objectives (
  id               uuid primary key default gen_random_uuid(),
  module_id        uuid not null references public.modules(id) on delete cascade,
  objective_number text,                       -- LO1, LO2, …
  text             text not null,
  blooms_level     text,
  order_index      integer not null default 0,
  created_at       timestamptz not null default now()
);
create index if not exists learning_objectives_module_idx
  on public.learning_objectives(module_id, order_index);
alter table public.learning_objectives enable row level security;

drop policy if exists "Anyone can view objectives of published courses" on public.learning_objectives;
create policy "Anyone can view objectives of published courses"
  on public.learning_objectives for select
  using (
    exists (
      select 1 from public.modules m
      join public.courses c on c.id = m.course_id
      where m.id = learning_objectives.module_id
        and (c.status = 'published' or is_admin())
    )
  );
drop policy if exists "Admin can write objectives" on public.learning_objectives;
create policy "Admin can write objectives"
  on public.learning_objectives for all
  using (is_admin()) with check (is_admin());

-- ── 4. Link each quiz question to a learning objective (additive nullable FK) ──
alter table public.quiz_questions
  add column if not exists objective_id uuid references public.learning_objectives(id) on delete set null;

-- ── 5. Enhancement drafts staging (review gate; admin-only; NO live writes until publish) ──
create table if not exists public.module_enhancement_drafts (
  id              uuid primary key default gen_random_uuid(),
  module_id       uuid not null references public.modules(id) on delete cascade,
  status          text not null default 'pending_review'
                    check (status in ('pending_review','approved','published','discarded')),
  payload         jsonb not null,              -- full generated module (metadata, objectives, lessons, quizzes, cases…)
  requested_types text[] not null default '{}'::text[],
  model           text,
  tokens_in       integer,
  tokens_out      integer,
  created_by      uuid references auth.users(id),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  published_at    timestamptz
);
create index if not exists module_enhancement_drafts_module_idx
  on public.module_enhancement_drafts(module_id, status);
alter table public.module_enhancement_drafts enable row level security;
drop policy if exists "Admin full access to enhancement drafts" on public.module_enhancement_drafts;
create policy "Admin full access to enhancement drafts"
  on public.module_enhancement_drafts for all
  using (is_admin()) with check (is_admin());
