-- Translate the demo data to Portuguese (run AFTER setup-demo.sql, which sets FR).
--   docker exec -i <pg> psql -U p3rform -d p3rform < seed-pt.sql
UPDATE load_categories SET name = 'Preparação física' WHERE team_id = 1 AND name = 'Prépa physique';
UPDATE load_categories SET name = 'Futebol'           WHERE team_id = 1 AND name = 'Football';
UPDATE planned_weeks SET phase_label = 'Desenvolvimento' WHERE team_id = 1 AND phase_label = 'Développement';

UPDATE planned_slots ps SET label = t.pt FROM (VALUES
  ('Force + activation',          'Força + ativação'),
  ('Mobilité + gainage',          'Mobilidade + core'),
  ('Technique + tactique',        'Técnica + tática'),
  ('Vitesse + accélération',      'Velocidade + aceleração'),
  ('Puissance + conditionnement', 'Potência + condicionamento'),
  ('Jeux réduits',                'Jogos reduzidos'),
  ('Muscu : bas du corps',        'Ginásio: membros inferiores'),
  ('Prépa tactique',              'Preparação tática'),
  ('Prévention + récup',          'Prevenção + recuperação'),
  ('Activation',                  'Ativação'),
  ('Coups de pied arrêtés',       'Bolas paradas'),
  ('Match',                       'Jogo')
) AS t(fr, pt)
WHERE ps.label = t.fr
  AND ps.planned_week_id IN (SELECT id FROM planned_weeks WHERE team_id = 1);

-- Calendar event titles shown on the calendar/agenda/load-planner.
UPDATE calendar_events SET title = 'Treino'           WHERE team_id = 1 AND title = 'Entraînement';
UPDATE calendar_events SET title = 'Reunião de staff' WHERE team_id = 1 AND title = 'Réunion staff';
UPDATE calendar_events SET title = 'Jogo: AC Verel vs FC Aldenne 🏆' WHERE team_id = 1 AND title LIKE 'Match:%';
