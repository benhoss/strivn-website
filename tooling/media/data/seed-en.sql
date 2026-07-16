UPDATE load_categories SET name='Physical prep' WHERE team_id=1 AND id=1;
UPDATE planned_weeks SET phase_label='Build week' WHERE id=1;
UPDATE planned_slots SET label='Strength + activation' WHERE planned_week_id=1 AND label='Force + activation';
UPDATE planned_slots SET label='Mobility + core' WHERE planned_week_id=1 AND label='Mobilité + gainage';
UPDATE planned_slots SET label='Technical + tactical' WHERE planned_week_id=1 AND label='Technique + tactique';
UPDATE planned_slots SET label='Speed + acceleration' WHERE planned_week_id=1 AND label='Vitesse + accélération';
UPDATE planned_slots SET label='Power + conditioning' WHERE planned_week_id=1 AND label='Puissance + conditionnement';
UPDATE planned_slots SET label='Small-sided games' WHERE planned_week_id=1 AND label='Jeux réduits';
UPDATE planned_slots SET label='Gym: lower body' WHERE planned_week_id=1 AND label='Muscu : bas du corps';
UPDATE planned_slots SET label='Tactical prep' WHERE planned_week_id=1 AND label='Prépa tactique';
UPDATE planned_slots SET label='Prehab + recovery' WHERE planned_week_id=1 AND label='Prévention + récup';
UPDATE planned_slots SET label='Set pieces' WHERE planned_week_id=1 AND label='Coups de pied arrêtés';

-- Calendar event titles shown on the calendar/agenda/load-planner (setup-demo.sql
-- normalizes them to canonical FR first). Match title is already English-friendly.
UPDATE calendar_events SET title = 'Training'      WHERE team_id = 1 AND title = 'Entraînement';
UPDATE calendar_events SET title = 'Staff meeting' WHERE team_id = 1 AND title = 'Réunion staff';
