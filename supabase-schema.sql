-- =====================================================
-- PIXOPHARM LMS Database Schema
-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor)
-- =====================================================

-- 1. User Profiles (extends Supabase auth.users)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  island text,  -- e.g., 'Jamaica', 'Trinidad & Tobago', 'Barbados'
  role text default 'student',  -- 'student', 'instructor', 'admin'
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone"
  on public.profiles for select using (true);

create policy "Users can insert their own profile"
  on public.profiles for insert with check ((select auth.uid()) = id);

create policy "Users can update their own profile"
  on public.profiles for update using ((select auth.uid()) = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 2. Course Enrollments
create table if not exists public.enrollments (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  course_id text not null,
  enrolled_at timestamptz default now(),
  status text default 'active',  -- 'active', 'completed', 'paused'
  unique(user_id, course_id)
);

alter table public.enrollments enable row level security;

create policy "Users can view their own enrollments"
  on public.enrollments for select using ((select auth.uid()) = user_id);

create policy "Users can enroll themselves"
  on public.enrollments for insert with check ((select auth.uid()) = user_id);

create policy "Users can update their own enrollments"
  on public.enrollments for update using ((select auth.uid()) = user_id);

-- 3. Course Progress (lesson completion + quiz scores)
create table if not exists public.course_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  course_id text not null,
  completed_lessons jsonb default '[]'::jsonb,  -- array of lesson IDs
  quiz_scores jsonb default '{}'::jsonb,        -- { moduleId: { score, total } }
  updated_at timestamptz default now(),
  unique(user_id, course_id)
);

alter table public.course_progress enable row level security;

create policy "Users can view their own progress"
  on public.course_progress for select using ((select auth.uid()) = user_id);

create policy "Users can insert their own progress"
  on public.course_progress for insert with check ((select auth.uid()) = user_id);

create policy "Users can update their own progress"
  on public.course_progress for update using ((select auth.uid()) = user_id);

-- 4. Certificates
create table if not exists public.certificates (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  course_id text not null,
  issued_at timestamptz default now(),
  certificate_number text unique,
  unique(user_id, course_id)
);

alter table public.certificates enable row level security;

create policy "Users can view their own certificates"
  on public.certificates for select using ((select auth.uid()) = user_id);

create policy "Users can insert their own certificates"
  on public.certificates for insert with check ((select auth.uid()) = user_id);

-- =====================================================
-- Done! Your PIXOPHARM database is ready.
-- =====================================================
