-- Translate the demo data to Dutch (run AFTER setup-demo.sql, which sets FR).
--   docker exec -i <pg> psql -U p3rform -d p3rform < seed-nl.sql
UPDATE load_categories SET name = 'Fysiek'  WHERE team_id = 1 AND name = 'Prépa physique';
UPDATE load_categories SET name = 'Voetbal' WHERE team_id = 1 AND name = 'Football';
UPDATE planned_weeks SET phase_label = 'Opbouw' WHERE id IN (SELECT id FROM planned_weeks WHERE team_id = 1) AND phase_label = 'Développement';

UPDATE planned_slots ps SET label = t.nl FROM (VALUES
  ('Force + activation',          'Kracht + activatie'),
  ('Mobilité + gainage',          'Mobiliteit + core'),
  ('Technique + tactique',        'Techniek + tactiek'),
  ('Vitesse + accélération',      'Snelheid + acceleratie'),
  ('Puissance + conditionnement', 'Vermogen + conditie'),
  ('Jeux réduits',                'Positiespel'),
  ('Muscu : bas du corps',        'Kracht: onderlichaam'),
  ('Prépa tactique',              'Tactische voorbereiding'),
  ('Prévention + récup',          'Preventie + herstel'),
  ('Activation',                  'Activatie'),
  ('Coups de pied arrêtés',       'Standaardsituaties'),
  ('Match',                       'Wedstrijd')
) AS t(fr, nl)
WHERE ps.label = t.fr
  AND ps.planned_week_id IN (SELECT id FROM planned_weeks WHERE team_id = 1);

-- Calendar event titles shown on the calendar/agenda/load-planner.
UPDATE calendar_events SET title = 'Training'        WHERE team_id = 1 AND title = 'Entraînement';
UPDATE calendar_events SET title = 'Stafvergadering' WHERE team_id = 1 AND title = 'Réunion staff';
UPDATE calendar_events SET title = 'Wedstrijd: AC Verel vs FC Aldenne 🏆' WHERE team_id = 1 AND title LIKE 'Match:%';
