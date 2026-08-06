-- Translate the demo data to Spanish (run AFTER setup-demo.sql, which sets FR).
--   docker exec -i <pg> psql -U p3rform -d p3rform < seed-es.sql
-- Modelled on seed-nl.sql: ids are resolved dynamically (setup-demo.sql rebuilds
-- the planned week under a NEW id on every reseed), never hardcoded.
UPDATE load_categories SET name = 'Físico' WHERE team_id = 1 AND name = 'Prépa physique';
UPDATE load_categories SET name = 'Fútbol' WHERE team_id = 1 AND name = 'Football';
UPDATE planned_weeks SET phase_label = 'Desarrollo' WHERE id IN (SELECT id FROM planned_weeks WHERE team_id = 1) AND phase_label = 'Développement';

UPDATE planned_slots ps SET label = t.es FROM (VALUES
  ('Force + activation',          'Fuerza + activación'),
  ('Mobilité + gainage',          'Movilidad + core'),
  ('Technique + tactique',        'Técnica + táctica'),
  ('Vitesse + accélération',      'Velocidad + aceleración'),
  ('Puissance + conditionnement', 'Potencia + acondicionamiento'),
  ('Jeux réduits',                'Juegos reducidos'),
  ('Muscu : bas du corps',        'Fuerza: tren inferior'),
  ('Prépa tactique',              'Preparación táctica'),
  ('Prévention + récup',          'Prevención + recuperación'),
  ('Activation',                  'Activación'),
  ('Coups de pied arrêtés',       'Balón parado'),
  ('Match',                       'Partido')
) AS t(fr, es)
WHERE ps.label = t.fr
  AND ps.planned_week_id IN (SELECT id FROM planned_weeks WHERE team_id = 1);

-- Calendar event titles shown on the calendar/agenda/load-planner.
UPDATE calendar_events SET title = 'Entrenamiento'                WHERE team_id = 1 AND title = 'Entraînement';
UPDATE calendar_events SET title = 'Reunión del cuerpo técnico'   WHERE team_id = 1 AND title = 'Réunion staff';
UPDATE calendar_events SET title = 'Partido: AC Verel vs FC Aldenne 🏆' WHERE team_id = 1 AND title LIKE 'Match:%';
