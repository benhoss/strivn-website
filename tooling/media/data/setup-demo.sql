-- Idempotent demo-data setup for the media pipeline (run AFTER SampleDataSeeder).
-- Makes the data fictional and builds the Load-planner's planned week for the
-- CURRENT week, so the load-plan screens are populated whenever you capture.
-- Labels are FR by default; run seed-en.sql afterwards for English captures.
--   docker exec -i p3rform-postgres-1 psql -U p3rform -d p3rform < setup-demo.sql

-- ── Schema guard: some DBs predate the planned_slots.label/timestamps edit
--    (an already-run migration that was later amended). Add them if missing so
--    the feature (and this seed) work. Harmless when they already exist.
ALTER TABLE planned_slots ADD COLUMN IF NOT EXISTS label varchar(255);
ALTER TABLE planned_slots ADD COLUMN IF NOT EXISTS created_at timestamp(0) without time zone;

-- ── Fictional teams, venue, opponent (adult, no age category) ──
UPDATE teams SET name = 'AC Verel'          WHERE id = 1;
UPDATE teams SET name = 'Hévron Rugby Club' WHERE id = 2;
UPDATE calendar_events SET location = 'Stade Communal de Verel'
  WHERE team_id = 1 AND location LIKE 'Stade%';
UPDATE calendar_events SET title = 'Match: AC Verel vs FC Aldenne 🏆'
  WHERE team_id = 1 AND title LIKE 'Match:%';
UPDATE injuries SET notes = replace(replace(replace(notes,
    'Standard U18', 'FC Aldenne'), 'RSC Liège', 'AC Verel'), ' U18', '')
  WHERE team_id = 1;

-- ── Snap the team's most-recent calendar week onto the CURRENT week, so the
--    calendar, agenda and load-planner are coherent and "today" has content.
--    Idempotent: once aligned, the offset is 0. ──
WITH latest AS (SELECT date_trunc('week', max(start_at))::date AS m FROM calendar_events WHERE team_id = 1)
UPDATE calendar_events ce
SET start_at = ce.start_at + make_interval(days => (date_trunc('week', CURRENT_DATE)::date - latest.m)),
    end_at   = ce.end_at   + make_interval(days => (date_trunc('week', CURRENT_DATE)::date - latest.m))
FROM latest
WHERE ce.team_id = 1 AND latest.m IS NOT NULL;

-- ── Rebuild the planned week (drop first so this is idempotent) ──
DELETE FROM planned_weeks WHERE team_id = 1;            -- cascades planned_slots

-- Two load categories, addressed BY NAME (ids differ across DBs). Normalize any
-- existing physical-prep category, then ensure both exist for team 1.
UPDATE load_categories SET name = 'Prépa physique'
  WHERE team_id = 1 AND name IN ('Préparation physique', 'Physical prep');
INSERT INTO load_categories (team_id, name, multiplier, position, created_at, updated_at)
SELECT 1, 'Prépa physique', 1, 0, now(), now()
  WHERE NOT EXISTS (SELECT 1 FROM load_categories WHERE team_id = 1 AND name = 'Prépa physique');
INSERT INTO load_categories (team_id, name, multiplier, position, created_at, updated_at)
SELECT 1, 'Football', 1, 1, now(), now()
  WHERE NOT EXISTS (SELECT 1 FROM load_categories WHERE team_id = 1 AND name = 'Football');

-- Planned week = current ISO week (Monday). Slots Mon..Sat, 2-3 exercises/day.
-- cat 1 → Prépa physique, cat 2 → Football (resolved by name, not id).
WITH wk AS (
  INSERT INTO planned_weeks (team_id, week_start, phase_label, weekly_target, created_by, created_at, updated_at)
  VALUES (1, date_trunc('week', CURRENT_DATE)::date, 'Développement', 4200, 1, now(), now())
  RETURNING id, week_start
), cats AS (
  SELECT (SELECT id FROM load_categories WHERE team_id = 1 AND name = 'Prépa physique' LIMIT 1) AS phys,
         (SELECT id FROM load_categories WHERE team_id = 1 AND name = 'Football'       LIMIT 1) AS foot
)
INSERT INTO planned_slots
  (planned_week_id, load_category_id, day_date, label, planned_rpe, planned_duration_minutes, planned_load, position, created_at, updated_at)
SELECT wk.id, CASE s.cat WHEN 1 THEN cats.phys ELSE cats.foot END, wk.week_start + s.d, s.label, s.rpe, s.dur, s.load, s.pos, now(), now()
FROM wk, cats, (VALUES
  (1, 0, 'Force + activation',          7, 75, 525, 0),
  (1, 0, 'Mobilité + gainage',          4, 30, 120, 1),
  (2, 1, 'Technique + tactique',        6, 90, 540, 0),
  (1, 1, 'Vitesse + accélération',      7, 25, 175, 1),
  (1, 2, 'Puissance + conditionnement', 8, 80, 640, 0),
  (2, 2, 'Jeux réduits',                7, 45, 315, 1),
  (1, 2, 'Muscu : bas du corps',        8, 40, 320, 2),
  (2, 3, 'Prépa tactique',              6, 75, 450, 0),
  (1, 3, 'Prévention + récup',          3, 30,  90, 1),
  (1, 4, 'Activation',                  3, 40, 120, 0),
  (2, 4, 'Coups de pied arrêtés',       4, 30, 120, 1),
  (2, 5, 'Match',                       9, 90, 810, 0)
) AS s(cat, d, label, rpe, dur, load, pos);

-- ── Calendar link: the planner groups load under the week's TRAINING sessions
--    (event_type='training') and shows the match as a read-only anchor
--    (event_type='match'). Mark the events, then attach each slot to the
--    training session on its day; Fri/Sat slots stay "En attente — non planifié".
UPDATE calendar_events SET event_type = 'training'
  WHERE team_id = 1 AND title = 'Entraînement'
    AND start_at::date BETWEEN date_trunc('week', CURRENT_DATE)::date
                           AND date_trunc('week', CURRENT_DATE)::date + 4;
UPDATE calendar_events SET event_type = 'match'
  WHERE team_id = 1 AND title LIKE 'Match:%'
    AND start_at::date BETWEEN date_trunc('week', CURRENT_DATE)::date
                           AND date_trunc('week', CURRENT_DATE)::date + 6;

UPDATE planned_slots ps
SET calendar_event_id = ce.id
FROM planned_weeks pw, calendar_events ce
WHERE ps.planned_week_id = pw.id AND pw.team_id = 1
  AND ce.team_id = 1 AND ce.event_type = 'training'
  AND ce.start_at::date = ps.day_date;

-- ── Today's wellness check-ins (so the morning briefing/readiness are populated) ──
-- Upserts a spread of scores across team 1's active players: most green, a few
-- yellow, one red — the morning story the readiness demo loop captures.
-- Idempotent on (player_id, date) so re-running the same day is safe.
WITH today AS (SELECT CURRENT_DATE::date AS d),
seed AS (
  SELECT p.id AS player_id, t.d AS date,
         CASE -- fatigue 1-5: lower = fresher
           WHEN p.first_name IN ('Lucas','Hugo')       THEN 3   -- yellow
           WHEN p.first_name = 'Antoine'              THEN 4   -- red (injured)
           WHEN p.first_name IN ('Thomas','Maxime','Nathan','Léo','Arthur','Yanis','Matthieu') THEN 1
           ELSE 2
         END AS fatigue,
         CASE -- sleep hours
           WHEN p.first_name = 'Antoine' THEN 5.5
           WHEN p.first_name IN ('Lucas','Hugo') THEN 6.0
           ELSE 7.5
         END AS sleep,
         CASE -- motivation 1-5
           WHEN p.first_name = 'Antoine' THEN 2
           WHEN p.first_name IN ('Lucas','Hugo') THEN 3
           ELSE 4
         END AS motivation,
         (p.first_name = 'Antoine') AS pain,
         CASE WHEN p.first_name = 'Antoine' THEN 'ischio' ELSE NULL::text END AS pain_zone
  FROM players p, today t
  WHERE p.team_id = 1 AND p.status IN ('active', 'injured')
)
INSERT INTO wellness_entries (player_id, date, fatigue_score, sleep_hours, motivation_score, pain, pain_zone, raw_message, parsed_payload, created_at, updated_at)
SELECT player_id, date, fatigue, sleep, motivation, pain, pain_zone,
       'Fatigue:' || fatigue || ' Sommeil:' || sleep || 'h Motivation:' || motivation || CASE WHEN pain THEN ' Douleur:' || pain_zone ELSE '' END,
       json_build_object('fatigue', fatigue, 'sleep', sleep, 'motivation', motivation, 'pain', pain),
       now(), now()
FROM seed
ON CONFLICT (player_id, date) DO UPDATE SET
  fatigue_score  = EXCLUDED.fatigue_score,
  sleep_hours   = EXCLUDED.sleep_hours,
  motivation_score = EXCLUDED.motivation_score,
  pain          = EXCLUDED.pain,
  pain_zone     = EXCLUDED.pain_zone,
  raw_message   = EXCLUDED.raw_message,
  parsed_payload = EXCLUDED.parsed_payload,
  updated_at    = now();
