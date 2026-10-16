-- Applied to the kamaru_jlpt project on 2026-10-16.

-- The level the section belongs to (N4/N3/N2/BJT). Null on rows from before
-- levels were recorded; the app treats those as JLPT.
alter table public.daily_sessions add column if not exists level text;

-- One row per section studied per day, not one per day: studying 1-1 and
-- 1-2 on the same day keeps both. NULLS NOT DISTINCT so rows without a
-- level still conflict with each other.
alter table public.daily_sessions drop constraint if exists daily_sessions_user_id_session_date_key;
alter table public.daily_sessions add constraint daily_sessions_user_day_section_key
  unique nulls not distinct (user_id, session_date, level, chapter, section);
