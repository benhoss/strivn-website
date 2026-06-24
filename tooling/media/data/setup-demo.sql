-- Idempotent demo-data setup for the media pipeline (run AFTER SampleDataSeeder).
-- Makes the data fictional and builds the Load-planner's planned week for the
-- CURRENT week, so the load-plan screens are populated whenever you capture.
-- Labels are FR by default; run seed-en.sql afterwards for English captures.
--   docker exec -i p3rform-postgres-1 psql -U p3rform -d p3rform < setup-demo.sql

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

-- ── Rebuild the planned week (drop first so this is idempotent) ──
DELETE FROM planned_weeks WHERE team_id = 1;            -- cascades planned_slots

-- Two load categories (FR labels by default); drop any extras.
UPDATE load_categories SET name = 'Prépa physique' WHERE team_id = 1 AND id = 1;
UPDATE load_categories SET name = 'Football'        WHERE team_id = 1 AND id = 2;
DELETE FROM load_categories WHERE team_id = 1 AND id NOT IN (1, 2);

-- Planned week = current ISO week (Monday). Slots Mon..Sat, 2-3 exercises/day.
WITH wk AS (
  INSERT INTO planned_weeks (team_id, week_start, phase_label, weekly_target, created_by, created_at, updated_at)
  VALUES (1, date_trunc('week', CURRENT_DATE)::date, 'Développement', 4200, 1, now(), now())
  RETURNING id, week_start
)
INSERT INTO planned_slots
  (planned_week_id, load_category_id, day_date, label, planned_rpe, planned_duration_minutes, planned_load, position, created_at, updated_at)
SELECT wk.id, s.cat, wk.week_start + s.d, s.label, s.rpe, s.dur, s.load, s.pos, now(), now()
FROM wk, (VALUES
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
