-- ============================================================================
-- Rollback for 20260609000001_domains_and_quiz_cases.sql
-- Data preserved in the pre-migration export (scripts/db-export.ts).
-- Note: courses."order" values are NOT restored by this script — restore from
-- the export if the original global sequence matters.
-- ============================================================================

alter table public.quiz_questions drop column if exists case_id;
drop table if exists public.quiz_cases;

-- Restore the pre-Phase-1 question_type vocabulary (removes 'numeric').
-- Only safe if no 'numeric' rows exist yet:
--   select count(*) from quiz_questions where question_type = 'numeric';
alter table public.quiz_questions drop constraint if exists quiz_questions_question_type_check;
alter table public.quiz_questions add constraint quiz_questions_question_type_check
  check (question_type = any (array[
    'multiple_choice', 'multiple_select', 'ordering', 'matching',
    'fill_in_blank', 'true_false', 'scenario'
  ]));

alter table public.courses drop column if exists domain_id;
drop table if exists public.domains;
