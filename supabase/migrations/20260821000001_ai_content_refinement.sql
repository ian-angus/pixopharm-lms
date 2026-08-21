-- AI content refinement: staged lesson revisions + quiz refresh, both with
-- built-in undo. PURELY ADDITIVE — no data mutation of existing rows.
-- PRD: docs/AI-CONTENT-REFINEMENT-PRD.md

-- ── 1. lesson_revision_drafts (staged AI lesson rewrites; admin-only) ──────
create table if not exists public.lesson_revision_drafts (
  id                uuid primary key default gen_random_uuid(),
  lesson_id         uuid not null references public.lessons(id) on delete cascade,
  instruction       text not null,
  status            text not null default 'pending_review'
                      check (status in ('pending_review','applied','reverted','discarded')),
  revised_content   jsonb not null,
  revised_duration  integer,
  previous_content  jsonb,      -- snapshot filled at apply time (enables undo)
  previous_duration integer,
  model             text,
  tokens_in         integer,
  tokens_out        integer,
  created_by        uuid references auth.users(id),
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),
  applied_at        timestamptz
);
create index if not exists lesson_revision_drafts_lesson_idx
  on public.lesson_revision_drafts(lesson_id, status);
alter table public.lesson_revision_drafts enable row level security;
drop policy if exists "Admin full access to lesson revisions" on public.lesson_revision_drafts;
create policy "Admin full access to lesson revisions"
  on public.lesson_revision_drafts for all
  using (is_admin()) with check (is_admin());

-- ── 2. module_enhancement_drafts: kind + undo snapshot + 'reverted' status ──
alter table public.module_enhancement_drafts
  add column if not exists kind text not null default 'accreditation';
alter table public.module_enhancement_drafts
  drop constraint if exists module_enhancement_drafts_kind_check;
alter table public.module_enhancement_drafts
  add constraint module_enhancement_drafts_kind_check
  check (kind in ('accreditation','quiz_refresh'));
alter table public.module_enhancement_drafts
  add column if not exists previous_payload jsonb;
alter table public.module_enhancement_drafts
  drop constraint if exists module_enhancement_drafts_status_check;
alter table public.module_enhancement_drafts
  add constraint module_enhancement_drafts_status_check
  check (status in ('pending_review','approved','published','discarded','reverted'));

-- ── 3. apply_lesson_revision: snapshot current content, swap in revision ───
create or replace function public.apply_lesson_revision(p_draft_id uuid)
returns jsonb
language plpgsql security definer set search_path = public as $$
declare
  v_draft  lesson_revision_drafts%rowtype;
  v_lesson lessons%rowtype;
begin
  if not is_admin() then raise exception 'Forbidden: admin only'; end if;
  select * into v_draft from lesson_revision_drafts where id = p_draft_id for update;
  if not found then raise exception 'Revision % not found', p_draft_id; end if;
  if v_draft.status = 'applied' then
    return jsonb_build_object('already_applied', true, 'draft_id', p_draft_id);
  end if;
  if v_draft.status in ('discarded','reverted') then
    raise exception 'Revision was %', v_draft.status;
  end if;
  select * into v_lesson from lessons where id = v_draft.lesson_id for update;
  if not found then raise exception 'Lesson no longer exists'; end if;

  update lesson_revision_drafts
     set previous_content  = v_lesson.content,
         previous_duration = v_lesson.duration_minutes,
         status = 'applied', applied_at = now(), updated_at = now()
   where id = p_draft_id;

  update lessons
     set content = v_draft.revised_content,
         duration_minutes = coalesce(v_draft.revised_duration, v_lesson.duration_minutes),
         updated_at = now()
   where id = v_draft.lesson_id;

  return jsonb_build_object('applied', true, 'draft_id', p_draft_id, 'lesson_id', v_draft.lesson_id);
end;
$$;
revoke all on function public.apply_lesson_revision(uuid) from public, anon;
grant execute on function public.apply_lesson_revision(uuid) to authenticated;

-- ── 4. revert_lesson_revision: restore the snapshot taken at apply ─────────
create or replace function public.revert_lesson_revision(p_draft_id uuid)
returns jsonb
language plpgsql security definer set search_path = public as $$
declare
  v_draft lesson_revision_drafts%rowtype;
begin
  if not is_admin() then raise exception 'Forbidden: admin only'; end if;
  select * into v_draft from lesson_revision_drafts where id = p_draft_id for update;
  if not found then raise exception 'Revision % not found', p_draft_id; end if;
  if v_draft.status = 'reverted' then
    return jsonb_build_object('already_reverted', true, 'draft_id', p_draft_id);
  end if;
  if v_draft.status <> 'applied' then
    raise exception 'Only an applied revision can be reverted (status: %)', v_draft.status;
  end if;

  update lessons
     set content = v_draft.previous_content,
         duration_minutes = coalesce(v_draft.previous_duration, duration_minutes),
         updated_at = now()
   where id = v_draft.lesson_id;

  update lesson_revision_drafts
     set status = 'reverted', updated_at = now()
   where id = p_draft_id;

  return jsonb_build_object('reverted', true, 'draft_id', p_draft_id, 'lesson_id', v_draft.lesson_id);
end;
$$;
revoke all on function public.revert_lesson_revision(uuid) from public, anon;
grant execute on function public.revert_lesson_revision(uuid) to authenticated;

-- ── 5. apply_quiz_refresh: snapshot module quiz, replace non-kept questions ─
create or replace function public.apply_quiz_refresh(p_draft_id uuid, p_keep_ids uuid[] default '{}')
returns jsonb
language plpgsql security definer set search_path = public as $$
declare
  v_draft    module_enhancement_drafts%rowtype;
  v_module   uuid;
  v_payload  jsonb;
  v_snapshot jsonb;
  v_max      int := 0;
  v_case_id  uuid;
  v_q        jsonb;
  v_qtype    text;
  v_options  jsonb;
  v_kept     int := 0;
  v_deleted  int := 0;
  v_inserted int := 0;
begin
  if not is_admin() then raise exception 'Forbidden: admin only'; end if;
  select * into v_draft from module_enhancement_drafts where id = p_draft_id for update;
  if not found then raise exception 'Draft % not found', p_draft_id; end if;
  if v_draft.kind <> 'quiz_refresh' then raise exception 'Draft is not a quiz refresh'; end if;
  if v_draft.status = 'published' then
    return jsonb_build_object('already_applied', true, 'draft_id', p_draft_id);
  end if;
  if v_draft.status in ('discarded','reverted') then raise exception 'Draft was %', v_draft.status; end if;

  v_module  := v_draft.module_id;
  v_payload := v_draft.payload;

  -- Snapshot the ENTIRE current question set + cases for undo.
  select jsonb_build_object(
    'questions', coalesce((select jsonb_agg(to_jsonb(q) order by q.order_index)
                             from quiz_questions q where q.module_id = v_module), '[]'::jsonb),
    'cases',     coalesce((select jsonb_agg(to_jsonb(c) order by c.order_index)
                             from quiz_cases c where c.module_id = v_module), '[]'::jsonb)
  ) into v_snapshot;
  update module_enhancement_drafts set previous_payload = v_snapshot, updated_at = now()
   where id = p_draft_id;

  -- Replace: delete everything not explicitly kept, then orphaned cases.
  delete from quiz_questions
   where module_id = v_module and not (id = any(coalesce(p_keep_ids, '{}'::uuid[])));
  get diagnostics v_deleted = row_count;
  delete from quiz_cases c
   where c.module_id = v_module
     and not exists (select 1 from quiz_questions q where q.case_id = c.id);

  -- Renumber the kept questions 1..k, preserving their relative order.
  with ordered as (
    select id, row_number() over (order by order_index, created_at) as rn
      from quiz_questions where module_id = v_module
  )
  update quiz_questions q set order_index = o.rn from ordered o where q.id = o.id;
  select count(*) into v_kept from quiz_questions where module_id = v_module;
  v_max := v_kept;

  -- Insert the proposed standalone questions.
  for v_q in select * from jsonb_array_elements(coalesce(v_payload->'quiz_questions','[]'::jsonb)) loop
    v_max := v_max + 1;
    v_qtype := v_q->>'question_type';
    v_options := case
      when jsonb_typeof(v_q->'options') = 'array' then v_q->'options'
      when v_qtype = 'true_false' then '["True","False"]'::jsonb
      else '[]'::jsonb end;
    insert into quiz_questions(module_id, question, options, correct_answer, explanation, order_index,
                               question_type, question_data, difficulty, blooms_level, case_id)
    values (v_module, v_q->>'question', v_options,
            case when v_qtype in ('multiple_choice','scenario') then coalesce((v_q->>'correct_answer')::int, 0) else 0 end,
            coalesce(v_q->>'explanation',''), v_max, v_qtype,
            coalesce(v_q->'question_data','{}'::jsonb),
            case when v_q->>'difficulty' in ('easy','medium','hard','expert') then v_q->>'difficulty' else 'medium' end,
            case when v_q->>'blooms_level' in ('remember','understand','apply','analyze','evaluate','create') then v_q->>'blooms_level' else 'apply' end,
            null);
    v_inserted := v_inserted + 1;
  end loop;

  -- Proposed case + linked scenario questions.
  if v_payload ? 'case' and jsonb_typeof(v_payload->'case') = 'object'
     and length(coalesce(v_payload->'case'->>'vignette','')) > 50 then
    insert into quiz_cases(module_id, title, vignette, order_index)
    values (v_module, coalesce(v_payload->'case'->>'title','Case study'), v_payload->'case'->>'vignette', 1)
    returning id into v_case_id;
    for v_q in select * from jsonb_array_elements(coalesce(v_payload->'case'->'questions','[]'::jsonb)) loop
      v_max := v_max + 1;
      insert into quiz_questions(module_id, question, options, correct_answer, explanation, order_index,
                                 question_type, question_data, difficulty, blooms_level, case_id)
      values (v_module, v_q->>'question',
              case when jsonb_typeof(v_q->'options') = 'array' then v_q->'options' else '[]'::jsonb end,
              coalesce((v_q->>'correct_answer')::int, 0), coalesce(v_q->>'explanation',''), v_max,
              'scenario', coalesce(v_q->'question_data','{}'::jsonb),
              case when v_q->>'difficulty' in ('easy','medium','hard','expert') then v_q->>'difficulty' else 'medium' end,
              case when v_q->>'blooms_level' in ('remember','understand','apply','analyze','evaluate','create') then v_q->>'blooms_level' else 'apply' end,
              v_case_id);
      v_inserted := v_inserted + 1;
    end loop;
  end if;

  update module_enhancement_drafts
     set status = 'published', published_at = now(), updated_at = now()
   where id = p_draft_id;

  return jsonb_build_object('draft_id', p_draft_id, 'module_id', v_module,
                            'kept', v_kept, 'deleted', v_deleted - 0, 'inserted', v_inserted);
end;
$$;
revoke all on function public.apply_quiz_refresh(uuid, uuid[]) from public, anon;
grant execute on function public.apply_quiz_refresh(uuid, uuid[]) to authenticated;

-- ── 6. revert_quiz_refresh: restore the snapshot exactly (original ids) ────
create or replace function public.revert_quiz_refresh(p_draft_id uuid)
returns jsonb
language plpgsql security definer set search_path = public as $$
declare
  v_draft module_enhancement_drafts%rowtype;
  v_module uuid;
  v_restored int := 0;
begin
  if not is_admin() then raise exception 'Forbidden: admin only'; end if;
  select * into v_draft from module_enhancement_drafts where id = p_draft_id for update;
  if not found then raise exception 'Draft % not found', p_draft_id; end if;
  if v_draft.kind <> 'quiz_refresh' then raise exception 'Draft is not a quiz refresh'; end if;
  if v_draft.status = 'reverted' then
    return jsonb_build_object('already_reverted', true, 'draft_id', p_draft_id);
  end if;
  if v_draft.status <> 'published' then
    raise exception 'Only an applied quiz refresh can be reverted (status: %)', v_draft.status;
  end if;
  if v_draft.previous_payload is null then raise exception 'No snapshot to restore'; end if;

  v_module := v_draft.module_id;

  -- Wipe the module's current quiz, then restore the snapshot verbatim
  -- (original ids preserved, so case links and objective links survive).
  delete from quiz_questions where module_id = v_module;
  delete from quiz_cases where module_id = v_module;
  insert into quiz_cases
    select (jsonb_populate_record(null::quiz_cases, e)).*
      from jsonb_array_elements(coalesce(v_draft.previous_payload->'cases','[]'::jsonb)) e;
  insert into quiz_questions
    select (jsonb_populate_record(null::quiz_questions, e)).*
      from jsonb_array_elements(coalesce(v_draft.previous_payload->'questions','[]'::jsonb)) e;
  get diagnostics v_restored = row_count;

  update module_enhancement_drafts
     set status = 'reverted', updated_at = now()
   where id = p_draft_id;

  return jsonb_build_object('reverted', true, 'draft_id', p_draft_id,
                            'module_id', v_module, 'questions_restored', v_restored);
end;
$$;
revoke all on function public.revert_quiz_refresh(uuid) from public, anon;
grant execute on function public.revert_quiz_refresh(uuid) to authenticated;
