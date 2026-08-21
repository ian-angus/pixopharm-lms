-- Coderabbit hardening for the AI refinement RPCs (PR #25). ADDITIVE.
-- 1. quiz_questions.updated_at — column was missing although admin-api's
--    updateQuizQuestion has always sent it (latent PGRST204 on question edits).
-- 2. publish_module_draft rejects kind<>'accreditation' rows.
-- 3. revert_lesson_revision refuses to clobber content changed after apply.
-- 4. apply_quiz_refresh records the applied question-id set; revert_quiz_refresh
--    refuses when the module's quiz changed after apply.

-- ── 1. Missing column (also enables edit-detection in guard 4) ─────────────
alter table public.quiz_questions
  add column if not exists updated_at timestamptz not null default now();

-- ── 2. publish_module_draft: accreditation drafts only ─────────────────────
-- (Body identical to 20260613000002 apart from the kind guard.)
create or replace function public.publish_module_draft(p_draft_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_draft   module_enhancement_drafts%rowtype;
  v_payload jsonb;
  v_module  uuid;
  v_has_lessons boolean;
  v_max_order int;
  v_case_id uuid;
  v_obj_map jsonb := '{}'::jsonb;
  v_new_id  uuid;
  v_les jsonb; v_obj jsonb; v_q jsonb;
  v_lessons_created int := 0;
  v_objectives_created int := 0;
  v_questions_created int := 0;
  v_qtype text; v_options jsonb; v_correct int; v_obj_id uuid;
begin
  if not is_admin() then
    raise exception 'Forbidden: admin only';
  end if;

  select * into v_draft from module_enhancement_drafts where id = p_draft_id for update;
  if not found then raise exception 'Draft % not found', p_draft_id; end if;
  if v_draft.kind is distinct from 'accreditation' then
    raise exception 'publish_module_draft only accepts accreditation drafts (got %) — use apply_quiz_refresh', v_draft.kind;
  end if;
  if v_draft.status = 'published' then
    return jsonb_build_object('already_published', true, 'draft_id', p_draft_id);
  end if;
  if v_draft.status = 'discarded' then raise exception 'Draft was discarded'; end if;

  v_payload := v_draft.payload;
  v_module  := v_draft.module_id;
  select exists(select 1 from lessons where module_id = v_module) into v_has_lessons;

  if not v_has_lessons then
    for v_les in select * from jsonb_array_elements(coalesce(v_payload->'lessons','[]'::jsonb)) loop
      if jsonb_typeof(v_les->'content') = 'array' and jsonb_array_length(v_les->'content') > 0 then
        insert into lessons(module_id, title, content, order_index, duration_minutes)
        values (v_module,
                coalesce(v_les->>'title','Lesson'),
                v_les->'content',
                coalesce((v_les->>'order_index')::int, v_lessons_created),
                coalesce((v_les->>'duration_minutes')::int, 25));
        v_lessons_created := v_lessons_created + 1;
      end if;
    end loop;
  end if;

  for v_obj in select * from jsonb_array_elements(coalesce(v_payload->'learning_objectives','[]'::jsonb)) loop
    insert into learning_objectives(module_id, objective_number, text, blooms_level, order_index)
    values (v_module, v_obj->>'objective_number', v_obj->>'text', v_obj->>'blooms_level', v_objectives_created)
    returning id into v_new_id;
    v_obj_map := v_obj_map || jsonb_build_object(
      coalesce(v_obj->>'objective_number', 'LO'||(v_objectives_created+1)), v_new_id::text);
    v_objectives_created := v_objectives_created + 1;
  end loop;

  select coalesce(max(order_index),0) into v_max_order from quiz_questions where module_id = v_module;

  for v_q in select * from jsonb_array_elements(coalesce(v_payload->'quiz_questions','[]'::jsonb)) loop
    v_max_order := v_max_order + 1;
    v_qtype := v_q->>'question_type';
    v_options := case
      when jsonb_typeof(v_q->'options') = 'array' then v_q->'options'
      when v_qtype = 'true_false' then '["True","False"]'::jsonb
      else '[]'::jsonb end;
    v_correct := case when v_qtype in ('multiple_choice','scenario')
      then coalesce((v_q->>'correct_answer')::int, 0) else 0 end;
    v_obj_id := case when (v_q->>'objective_ref') is not null and v_obj_map ? (v_q->>'objective_ref')
      then (v_obj_map->>(v_q->>'objective_ref'))::uuid else null end;
    insert into quiz_questions(module_id, question, options, correct_answer, explanation, order_index,
                               question_type, question_data, difficulty, blooms_level, case_id, objective_id)
    values (v_module, v_q->>'question', v_options, v_correct, coalesce(v_q->>'explanation',''), v_max_order,
            v_qtype, coalesce(v_q->'question_data','{}'::jsonb),
            case when v_q->>'difficulty' in ('easy','medium','hard','expert') then v_q->>'difficulty' else 'medium' end,
            case when v_q->>'blooms_level' in ('remember','understand','apply','analyze','evaluate','create') then v_q->>'blooms_level' else 'apply' end,
            null, v_obj_id);
    v_questions_created := v_questions_created + 1;
  end loop;

  if v_payload ? 'case' and jsonb_typeof(v_payload->'case') = 'object'
     and length(coalesce(v_payload->'case'->>'vignette','')) > 50 then
    insert into quiz_cases(module_id, title, vignette, order_index)
    values (v_module, coalesce(v_payload->'case'->>'title','Case study'), v_payload->'case'->>'vignette', 1)
    returning id into v_case_id;
    for v_q in select * from jsonb_array_elements(coalesce(v_payload->'case'->'questions','[]'::jsonb)) loop
      v_max_order := v_max_order + 1;
      v_options := case when jsonb_typeof(v_q->'options') = 'array' then v_q->'options' else '[]'::jsonb end;
      v_obj_id := case when (v_q->>'objective_ref') is not null and v_obj_map ? (v_q->>'objective_ref')
        then (v_obj_map->>(v_q->>'objective_ref'))::uuid else null end;
      insert into quiz_questions(module_id, question, options, correct_answer, explanation, order_index,
                                 question_type, question_data, difficulty, blooms_level, case_id, objective_id)
      values (v_module, v_q->>'question', v_options, coalesce((v_q->>'correct_answer')::int,0),
              coalesce(v_q->>'explanation',''), v_max_order, 'scenario',
              coalesce(v_q->'question_data','{}'::jsonb),
              case when v_q->>'difficulty' in ('easy','medium','hard','expert') then v_q->>'difficulty' else 'medium' end,
              case when v_q->>'blooms_level' in ('remember','understand','apply','analyze','evaluate','create') then v_q->>'blooms_level' else 'apply' end,
              v_case_id, v_obj_id);
      v_questions_created := v_questions_created + 1;
    end loop;
  end if;

  update modules set
    module_overview   = nullif(v_payload->>'module_overview',''),
    passing_score     = nullif(v_payload->>'passing_score','')::int,
    attempts_allowed  = nullif(v_payload->>'attempts_allowed','')::int,
    seat_time_minutes = nullif(v_payload->>'seat_time_minutes','')::int,
    updated_at = now()
  where id = v_module;

  insert into module_metadata(module_id, module_code, delivery_mode, crosswalk, competency_checklist,
                              remediation_plan, module_references, modality_tags)
  values (v_module, nullif(v_payload->>'module_code',''), nullif(v_payload->>'delivery_mode',''),
          coalesce(v_payload->'crosswalk','[]'::jsonb), coalesce(v_payload->'competency_checklist','[]'::jsonb),
          coalesce(v_payload->'remediation_plan','[]'::jsonb), coalesce(v_payload->'references','[]'::jsonb),
          coalesce(array(select jsonb_array_elements_text(v_payload->'modality_tags')), '{}'::text[]))
  on conflict (module_id) do update set
    module_code = excluded.module_code, delivery_mode = excluded.delivery_mode,
    crosswalk = excluded.crosswalk, competency_checklist = excluded.competency_checklist,
    remediation_plan = excluded.remediation_plan, module_references = excluded.module_references,
    modality_tags = excluded.modality_tags, updated_at = now();

  update module_enhancement_drafts
    set status = 'published', published_at = now(), updated_at = now()
  where id = p_draft_id;

  return jsonb_build_object(
    'draft_id', p_draft_id, 'module_id', v_module,
    'lessons_created', v_lessons_created,
    'objectives_created', v_objectives_created,
    'questions_created', v_questions_created,
    'case_created', v_case_id is not null
  );
end;
$$;

-- ── 3. revert_lesson_revision: never clobber content changed after apply ───
create or replace function public.revert_lesson_revision(p_draft_id uuid)
returns jsonb
language plpgsql security definer set search_path = public as $$
declare
  v_draft lesson_revision_drafts%rowtype;
  v_current jsonb;
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

  select content into v_current from lessons where id = v_draft.lesson_id for update;
  if not found then raise exception 'Lesson no longer exists'; end if;
  if v_current is distinct from v_draft.revised_content then
    raise exception 'The lesson changed after this revision was applied — undo is blocked to protect the newer edits';
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

-- ── 4. revert_quiz_refresh: refuse when the quiz changed after apply ───────
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

  -- now() is frozen per transaction, so rows written by the apply carry
  -- timestamps equal to published_at; anything strictly later is a newer edit.
  if exists (
    select 1 from quiz_questions q
     where q.module_id = v_module
       and (q.created_at > v_draft.published_at
            or coalesce(q.updated_at, q.created_at) > v_draft.published_at)
  ) then
    raise exception 'The quiz changed after this refresh was applied — undo is blocked to protect the newer edits';
  end if;

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
