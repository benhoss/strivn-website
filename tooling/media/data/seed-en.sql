-- EN labels for the demo team's (AC Verel, team_id=1) planned week.
-- Run AFTER setup-demo.sql, which rebuilds the week under a NEW id on every
-- reseed — so resolve ids dynamically (by team/name), never hardcode them.
UPDATE load_categories SET name='Physical prep' WHERE team_id=1 AND name='Prépa physique';
UPDATE planned_weeks SET phase_label='Build week'
  WHERE team_id=1 AND week_start = date_trunc('week', CURRENT_DATE)::date;
UPDATE planned_slots ps SET label=t.en
FROM planned_weeks pw, (VALUES
  ('Force + activation',          'Strength + activation'),
  ('Mobilité + gainage',          'Mobility + core'),
  ('Technique + tactique',        'Technical + tactical'),
  ('Vitesse + accélération',      'Speed + acceleration'),
  ('Puissance + conditionnement', 'Power + conditioning'),
  ('Jeux réduits',                'Small-sided games'),
  ('Muscu : bas du corps',        'Gym: lower body'),
  ('Prépa tactique',              'Tactical prep'),
  ('Prévention + récup',          'Prehab + recovery'),
  ('Coups de pied arrêtés',       'Set pieces')
) AS t(fr, en)
WHERE ps.planned_week_id = pw.id AND pw.team_id = 1
  AND pw.week_start = date_trunc('week', CURRENT_DATE)::date AND ps.label = t.fr;
