-- Quiz refresh: carry learning-objective linkage through to inserted questions.
--
-- refresh-quiz v3 resolves the model's objective_ref to a learning_objectives.id
-- and stores it as objective_id on each question object in the draft payload.
-- apply_quiz_refresh now persists that link (guarded: the objective must belong
-- to the same module, otherwise the question is inserted unlinked).
-- Fixes review finding B5 (docs/quiz-ai-review-2026-08-22.md): AI-generated
-- questions in accreditation modules were losing objective coverage.

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
  v_obj      uuid;
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
    -- Objective link, guarded to this module (bad/foreign ids fall back to null).
    v_obj := null;
    begin
      v_obj := nullif(v_q->>'objective_id','')::uuid;
    exception when invalid_text_representation then
      v_obj := null;
    end;
    if v_obj is not null and not exists (
      select 1 from learning_objectives lo where lo.id = v_obj and lo.module_id = v_module
    ) then
      v_obj := null;
    end if;
    insert into quiz_questions(module_id, question, options, correct_answer, explanation, order_index,
                               question_type, question_data, difficulty, blooms_level, case_id, objective_id)
    values (v_module, v_q->>'question', v_options,
            case when v_qtype in ('multiple_choice','scenario') then coalesce((v_q->>'correct_answer')::int, 0) else 0 end,
            coalesce(v_q->>'explanation',''), v_max, v_qtype,
            coalesce(v_q->'question_data','{}'::jsonb),
            case when v_q->>'difficulty' in ('easy','medium','hard','expert') then v_q->>'difficulty' else 'medium' end,
            case when v_q->>'blooms_level' in ('remember','understand','apply','analyze','evaluate','create') then v_q->>'blooms_level' else 'apply' end,
            null, v_obj);
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
      v_obj := null;
      begin
        v_obj := nullif(v_q->>'objective_id','')::uuid;
      exception when invalid_text_representation then
        v_obj := null;
      end;
      if v_obj is not null and not exists (
        select 1 from learning_objectives lo where lo.id = v_obj and lo.module_id = v_module
      ) then
        v_obj := null;
      end if;
      insert into quiz_questions(module_id, question, options, correct_answer, explanation, order_index,
                                 question_type, question_data, difficulty, blooms_level, case_id, objective_id)
      values (v_module, v_q->>'question',
              case when jsonb_typeof(v_q->'options') = 'array' then v_q->'options' else '[]'::jsonb end,
              coalesce((v_q->>'correct_answer')::int, 0), coalesce(v_q->>'explanation',''), v_max,
              'scenario', coalesce(v_q->'question_data','{}'::jsonb),
              case when v_q->>'difficulty' in ('easy','medium','hard','expert') then v_q->>'difficulty' else 'medium' end,
              case when v_q->>'blooms_level' in ('remember','understand','apply','analyze','evaluate','create') then v_q->>'blooms_level' else 'apply' end,
              v_case_id, v_obj);
      v_inserted := v_inserted + 1;
    end loop;
  end if;

  update module_enhancement_drafts
     set status = 'published', published_at = now(), updated_at = now()
   where id = p_draft_id;

  return jsonb_build_object('draft_id', p_draft_id, 'module_id', v_module,
                            'kept', v_kept, 'deleted', v_deleted, 'inserted', v_inserted);
end;
$$;

revoke all on function public.apply_quiz_refresh(uuid, uuid[]) from public, anon;
grant execute on function public.apply_quiz_refresh(uuid, uuid[]) to authenticated;
