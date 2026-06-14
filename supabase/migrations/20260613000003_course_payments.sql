-- Course payments: whole-program purchase via Lemon Squeezy. PURELY ADDITIVE.
-- New tables + SECURITY DEFINER RPCs. No DROP / no data mutation of existing tables.

-- ── 1. programs (the sellable program; one row: the diploma) ──
create table if not exists public.programs (
  id              uuid primary key default gen_random_uuid(),
  slug            text unique not null,
  title           text not null,
  description     text,
  price_usd_cents integer not null default 0,
  ls_store_id     text,
  ls_variant_id   text,            -- Lemon Squeezy variant for checkout (set after client registers)
  active          boolean not null default true,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);
alter table public.programs enable row level security;
drop policy if exists "Anyone can view active programs" on public.programs;
create policy "Anyone can view active programs" on public.programs
  for select using (active or is_admin());
drop policy if exists "Admin manages programs" on public.programs;
create policy "Admin manages programs" on public.programs
  for all using (is_admin()) with check (is_admin());

insert into public.programs (slug, title, description, price_usd_cents, active)
values ('diploma', 'Caribbean Pharmacy Technician Diploma',
        'Full diploma program — unlocks every course and earns a certificate on completion.', 0, true)
on conflict (slug) do nothing;

-- ── 2. program_access (the entitlement) ──
create table if not exists public.program_access (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  program       text not null default 'diploma',
  status        text not null default 'active' check (status in ('active','refunded','revoked','comp')),
  source        text not null default 'lemonsqueezy' check (source in ('lemonsqueezy','comp')),
  ls_order_id   text,
  ls_customer_id text,
  granted_at    timestamptz not null default now(),
  revoked_at    timestamptz,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  unique (user_id, program)
);
create index if not exists program_access_user_idx on public.program_access(user_id);
alter table public.program_access enable row level security;
drop policy if exists "Users read own access" on public.program_access;
create policy "Users read own access" on public.program_access
  for select using (user_id = auth.uid() or is_admin());
drop policy if exists "Admin manages access" on public.program_access;
create policy "Admin manages access" on public.program_access
  for all using (is_admin()) with check (is_admin());
-- normal users never write directly; webhook writes via SECURITY DEFINER RPC

-- ── 3. ls_webhook_events (idempotency + audit) ──
create table if not exists public.ls_webhook_events (
  id          uuid primary key default gen_random_uuid(),
  event_id    text unique,          -- computed dedupe key (event_name:order_id:refunded)
  event_name  text,
  ls_order_id text,
  payload     jsonb,
  status      text not null default 'processed',
  error       text,
  received_at timestamptz not null default now()
);
alter table public.ls_webhook_events enable row level security;
drop policy if exists "Admin reads webhook events" on public.ls_webhook_events;
create policy "Admin reads webhook events" on public.ls_webhook_events
  for select using (is_admin());

-- ── 4. program_certificates ──
create table if not exists public.program_certificates (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid not null references auth.users(id) on delete cascade,
  program            text not null default 'diploma',
  certificate_number text unique not null,
  issued_at          timestamptz not null default now(),
  unique (user_id, program)
);
alter table public.program_certificates enable row level security;
drop policy if exists "Users read own certificates" on public.program_certificates;
create policy "Users read own certificates" on public.program_certificates
  for select using (user_id = auth.uid() or is_admin());
drop policy if exists "Admin manages certificates" on public.program_certificates;
create policy "Admin manages certificates" on public.program_certificates
  for all using (is_admin()) with check (is_admin());

-- ── 5. RPC: apply a Lemon Squeezy order (called by the webhook via service role) ──
create or replace function public.apply_ls_order(
  p_event_id    text,
  p_event_name  text,
  p_user_id     uuid,
  p_email       text,
  p_order_id    text,
  p_customer_id text,
  p_program     text default 'diploma',
  p_refunded    boolean default false,
  p_payload     jsonb default '{}'::jsonb
) returns jsonb
language plpgsql security definer set search_path = public as $$
declare v_user_ok boolean;
begin
  -- idempotency: first writer wins
  insert into ls_webhook_events(event_id, event_name, ls_order_id, payload, status)
  values (p_event_id, p_event_name, p_order_id, p_payload, 'processing')
  on conflict (event_id) do nothing;
  if not found then
    return jsonb_build_object('duplicate', true, 'event_id', p_event_id);
  end if;

  if p_user_id is null then
    update ls_webhook_events set status='unmatched', error='no user_id in custom_data' where event_id=p_event_id;
    return jsonb_build_object('matched', false, 'reason', 'no_user_id');
  end if;
  select exists(select 1 from auth.users where id = p_user_id) into v_user_ok;
  if not v_user_ok then
    update ls_webhook_events set status='unmatched', error='user_id not found' where event_id=p_event_id;
    return jsonb_build_object('matched', false, 'reason', 'unknown_user');
  end if;

  if p_refunded then
    update program_access
      set status='refunded', revoked_at=now(), updated_at=now()
      where user_id=p_user_id and program=coalesce(p_program,'diploma');
    update ls_webhook_events set status='processed' where event_id=p_event_id;
    return jsonb_build_object('action','refunded','user_id',p_user_id);
  end if;

  insert into program_access(user_id, program, status, source, ls_order_id, ls_customer_id)
  values (p_user_id, coalesce(p_program,'diploma'), 'active', 'lemonsqueezy', p_order_id, p_customer_id)
  on conflict (user_id, program) do update
    set status='active', source='lemonsqueezy',
        ls_order_id=excluded.ls_order_id, ls_customer_id=excluded.ls_customer_id,
        revoked_at=null, updated_at=now();
  update ls_webhook_events set status='processed' where event_id=p_event_id;
  return jsonb_build_object('action','granted','user_id',p_user_id);
end;
$$;
revoke all on function public.apply_ls_order(text,text,uuid,text,text,text,text,boolean,jsonb) from public, anon, authenticated;
grant execute on function public.apply_ls_order(text,text,uuid,text,text,text,text,boolean,jsonb) to service_role;

-- ── 6. RPC: admin comp grant ──
create or replace function public.grant_program_access_comp(p_user_id uuid, p_program text default 'diploma')
returns jsonb language plpgsql security definer set search_path = public as $$
begin
  if not is_admin() then raise exception 'Forbidden: admin only'; end if;
  insert into program_access(user_id, program, status, source)
  values (p_user_id, coalesce(p_program,'diploma'), 'comp', 'comp')
  on conflict (user_id, program) do update
    set status='comp', source='comp', revoked_at=null, updated_at=now();
  return jsonb_build_object('action','comp_granted','user_id',p_user_id);
end;
$$;
revoke all on function public.grant_program_access_comp(uuid,text) from public, anon;
grant execute on function public.grant_program_access_comp(uuid,text) to authenticated;

-- ── 7. RPC: issue a program certificate (admin/service for now; completion-gated path added in cert phase) ──
create or replace function public.issue_program_certificate(p_user_id uuid, p_program text default 'diploma')
returns jsonb language plpgsql security definer set search_path = public as $$
declare v_num text; v_existing text;
begin
  if not is_admin() then raise exception 'Forbidden: admin only'; end if;
  select certificate_number into v_existing from program_certificates
    where user_id=p_user_id and program=coalesce(p_program,'diploma');
  if v_existing is not null then
    return jsonb_build_object('already_issued', true, 'certificate_number', v_existing);
  end if;
  v_num := 'PIXO-DIP-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,10));
  insert into program_certificates(user_id, program, certificate_number)
  values (p_user_id, coalesce(p_program,'diploma'), v_num);
  return jsonb_build_object('issued', true, 'certificate_number', v_num);
end;
$$;
revoke all on function public.issue_program_certificate(uuid,text) from public, anon;
grant execute on function public.issue_program_certificate(uuid,text) to authenticated, service_role;
