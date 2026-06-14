-- Atomic, additive publish of an accreditation enhancement draft to live tables.
-- INSERT/append only — never deletes or overwrites existing lessons. Idempotent:
-- re-publishing a 'published' draft is a no-op. Admin-gated via is_admin().

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
  v_obj_map jsonb := '{}'::jsonb;   -- objective_number -> new learning_objectives.id
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
  if v_draft.status = 'published' then
    return jsonb_build_object('already_published', true, 'draft_id', p_draft_id);
  end if;
  if v_draft.status = 'discarded' then raise exception 'Draft was discarded'; end if;

  v_payload := v_draft.payload;
  v_module  := v_draft.module_id;
  select exists(select 1 from lessons where module_id = v_module) into v_has_lessons;

  -- 1. Lessons: insert ONLY when the module is empty (never overwrite real lessons)
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

  -- 2. Learning objectives -> build number->id map for question linking
  for v_obj in select * from jsonb_array_elements(coalesce(v_payload->'learning_objectives','[]'::jsonb)) loop
    insert into learning_objectives(module_id, objective_number, text, blooms_level, order_index)
    values (v_module, v_obj->>'objective_number', v_obj->>'text', v_obj->>'blooms_level', v_objectives_created)
    returning id into v_new_id;
    v_obj_map := v_obj_map || jsonb_build_object(
      coalesce(v_obj->>'objective_number', 'LO'||(v_objectives_created+1)), v_new_id::text);
    v_objectives_created := v_objectives_created + 1;
  end loop;

  -- 3. Quiz questions: APPEND at max(order_index)+1
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

  -- 3b. Case + linked scenario questions
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

  -- 4. Student-facing module fields (live on modules)
  update modules set
    module_overview   = nullif(v_payload->>'module_overview',''),
    passing_score     = nullif(v_payload->>'passing_score','')::int,
    attempts_allowed  = nullif(v_payload->>'attempts_allowed','')::int,
    seat_time_minutes = nullif(v_payload->>'seat_time_minutes','')::int,
    updated_at = now()
  where id = v_module;

  -- 4b. Reviewer-only accreditation metadata (admin table)
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

  -- 5. Mark draft published
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

-- Lock down execution: admins call it via RPC as the authenticated user; the body
-- also enforces is_admin(). Revoke from anon/public to satisfy the linter.
revoke all on function public.publish_module_draft(uuid) from public, anon;
grant execute on function public.publish_module_draft(uuid) to authenticated;
