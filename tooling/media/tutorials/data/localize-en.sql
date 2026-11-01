-- English labels for the provisioned demo club (strivn:demo-provision writes
-- French content). Idempotent: keyed on the French source strings.
BEGIN;
UPDATE exercises e SET title = v.en_t, description = to_json(v.en_d::text)::text
FROM (VALUES
 ('Échauffement mobilité et appuis','Mobility & footwork warm-up','Progressive running, joint mobility, footwork drills and short accelerations.'),
 ('Échauffement ludique avec ballon','Ball warm-up games','Activation rondos and passing games on the move to start the session with the ball.'),
 ('Conduite de balle en slalom','Dribbling slalom','Dribble through cones, change direction and pass to a partner at the end of the course.'),
 ('Passe et appui à deux','Pass & support in pairs','Pass, support, lay-off and forward run; the two players swap roles.'),
 ('Centre et finition','Crossing & finishing','Beat the full-back, cut-back or near-post cross, two strikers attack the ball.'),
 ('Toro 5 contre 2','Rondo 5 v 2','Two-touch circle possession; the two defenders in the middle rotate on each interception.'),
 ('Conservation 4 contre 4 avec appuis','Possession 4 v 4 with outside supports','Possession in a tight area with two support players outside the square.'),
 ('Transition rapide 3 contre 2','Fast transition 3 v 2','Win the ball then counter immediately 3 v 2, six seconds to finish.'),
 ('Jeu réduit 4 contre 4 à quatre buts','Small-sided 4 v 4, four goals','4 v 4 on a short pitch with four mini goals to encourage switching play.'),
 ('Jeu réduit 6 contre 6','Small-sided 6 v 6','6 v 6 on half a pitch with goalkeepers, two touches in the finishing zone.'),
 ('Opposition à effectif complet','Full-squad match play','11 v 11 on a full pitch, focus on block shape and build-up.'),
 ('Retour au calme et étirements','Cool-down & stretching','Easy jog, breathing and guided stretching, then a quick group debrief.')
) AS v(fr_t, en_t, en_d)
WHERE e.title = v.fr_t AND e.catalog_key IS NULL;

UPDATE calendar_events SET title = CASE title WHEN 'Entraînement' THEN 'Training' WHEN 'Veille de match' THEN 'Pre-match session' ELSE title END
WHERE title IN ('Entraînement','Veille de match');
COMMIT;

-- Free text written by the demo generator (RSVP excuses, medical notes, return-to-play steps).
CREATE TEMP TABLE tr(fr text PRIMARY KEY, en text);
INSERT INTO tr VALUES
 ('Obligation professionnelle.','Work commitment.'),
 ('Dépend de l’heure à laquelle je finis.','Depends on when I finish work.'),
 ('En attente d’une réponse pour le travail.','Waiting to hear back from work.'),
 ('Examen à préparer.','Exam to prepare.'),
 ('Normalement présent, je préviens si ça change.','Should be there, will tell you if that changes.'),
 ('Déplacement familial prévu de longue date.','Long-planned family trip.'),
 ('Rendez-vous administratif impossible à déplacer.','Appointment I can''t move.'),
 ('Grippe, je préfère ne pas contaminer le groupe.','Flu — I''d rather not infect the group.'),
 ('Garde d’enfant.','Childcare.'),
 ('Je confirme demain selon mon planning.','I''ll confirm tomorrow, depending on my schedule.'),
 ('Problème de transport.','Transport problem.'),
 ('Nuit inconfortable, traitement antalgique maintenu.','Uncomfortable night, pain medication continued.'),
 ('Course et changements de direction sans gêne.','Running and changes of direction without discomfort.'),
 ('Zone sensible à la palpation, pas de mise en charge aujourd’hui.','Tender on palpation, no weight-bearing today.'),
 ('Aucune douleur sur les tests, feu vert pour la reprise collective.','Pain-free on all tests — cleared for team training.'),
 ('Douleur en nette diminution, marche sans gêne.','Pain clearly decreasing, walking without discomfort.'),
 ('Mobilité en progrès, début de renforcement isométrique.','Mobility improving, isometric strengthening started.'),
 ('Tests fonctionnels réussis, retour progressif au groupe.','Functional tests passed, gradual return to the group.'),
 ('Plus de douleur au repos, travail en piscine réalisé.','No more pain at rest, pool session completed.'),
 ('Douleur toujours présente au repos, glaçage et décharge.','Still painful at rest — ice and offloading.'),
 ('Réintégration collective partielle','Partial return to team training'),
 ('Repos et compression 48 h','Rest and compression, 48 h'),
 ('Course en ligne droite','Straight-line running'),
 ('Décharge et glaçage 72 h','Offloading and ice, 72 h'),
 ('Renforcement quadriceps','Quadriceps strengthening'),
 ('Renforcement du triceps sural','Calf strengthening'),
 ('Choc sur l’épaule lors d’un contact, mobilité limitée.','Shoulder knock in a challenge, limited mobility.'),
 ('Contracture du mollet signalée pendant l’échauffement.','Calf tightness reported during the warm-up.'),
 ('Douleur au genou après un changement de direction.','Knee pain after a change of direction.');
UPDATE rsvps r SET note = tr.en FROM tr WHERE r.note = tr.fr;
UPDATE injury_followups f SET note = tr.en FROM tr WHERE f.note = tr.fr;
UPDATE injury_notes n SET note = tr.en FROM tr WHERE n.note = tr.fr;
UPDATE rehab_sessions s SET feedback = tr.en FROM tr WHERE s.feedback = tr.fr;
UPDATE return_to_play_steps s SET name = tr.en FROM tr WHERE s.name = tr.fr;
UPDATE return_to_play_steps s SET criteria_next_phase = tr.en FROM tr WHERE s.criteria_next_phase = tr.fr;
UPDATE injuries i SET description = tr.en FROM tr WHERE i.description = tr.fr;

-- Load alerts are stored as rendered French sentences.
UPDATE player_alerts SET message = replace(message, ' en surcharge : charge ', ' is overloading: load ') WHERE message LIKE '% en surcharge : charge %';
UPDATE player_alerts SET message = replace(message, ' en sous-charge : charge ', ' is underloading: load ') WHERE message LIKE '% en sous-charge : charge %';

-- Rule-based alert sentences.
UPDATE player_alerts SET message = regexp_replace(message, '^Blessure déclarée pour (.*): Surcharge \((.*)\)$', 'Injury declared for \1: overuse (\2)') WHERE message LIKE 'Blessure déclarée%';
UPDATE player_alerts SET message = regexp_replace(message, '^Blessure déclarée pour (.*): Traumatique \((.*)\)$', 'Injury declared for \1: traumatic (\2)') WHERE message LIKE 'Blessure déclarée%';
UPDATE player_alerts SET message = regexp_replace(message, '^(.*) a mentionné "(.*)" (\d+) fois en (\d+) jours\. Vérifier risque de blessure\.$', '\1 mentioned "\2" \3 times in \4 days. Check the injury risk.');
UPDATE player_alerts SET message = regexp_replace(message, '^(.*) a signalé une douleur \((.*)\) au check-in du (.*)\.$', '\1 reported pain (\2) in the \3 check-in.');
UPDATE player_alerts SET message = regexp_replace(message, '^(.*) a une charge élevée depuis (\d+) semaines \(ACWR moyen: (.*)\)\. Proposer un plan de décharge\.$', '\1 has carried a high load for \2 weeks (average ACWR \3). Plan a deload.');
UPDATE player_alerts SET message = replace(replace(replace(replace(message, '(genou)', '(knee)'), '(mollet)', '(calf)'), '(épaule)', '(shoulder)'), '"genou"', '"knee"');
UPDATE player_alerts SET message = replace(replace(replace(message, '"mollet"', '"calf"'), '(Genou)', '(knee)'), '(Mollet)', '(calf)');
UPDATE player_alerts SET message = replace(message, '(Épaule)', '(shoulder)');
UPDATE player_alerts SET message = replace(regexp_replace(message, '^(.*) signale une aggravation de sa blessure \((.*)\)\.$', '\1 reports their injury is getting worse (\2).'), 'Épaule · Droit', 'shoulder · right');

-- Session-plan block labels.
CREATE TEMP TABLE bl(fr text PRIMARY KEY, en text);
INSERT INTO bl VALUES ('Circuit technique','Technical circuit'),('Jeu réduit','Small-sided game'),('Échauffement','Warm-up'),('Retour au calme','Cool-down'),
 ('Coups de pied arrêtés','Set pieces'),('Jeu collectif','Team play'),('Technique individuelle','Individual technique');
UPDATE planned_slots s SET label = bl.en FROM bl WHERE s.label = bl.fr;
UPDATE player_slot_feedback f SET slot_label = bl.en FROM bl WHERE f.slot_label = bl.fr;
UPDATE planned_block_templates t SET label = bl.en FROM bl WHERE t.label = bl.fr;
UPDATE planned_lanes l SET label = bl.en FROM bl WHERE l.label = bl.fr;

-- Return-to-play plan phases (a JSON array of names) and the bot's shared exercise folder.
CREATE TEMP TABLE IF NOT EXISTS rtp_tr(fr text PRIMARY KEY, en text);
INSERT INTO rtp_tr VALUES
 ('Repos et compression 48 h','Rest and compression, 48 h'),('Renforcement du triceps sural','Calf strengthening'),
 ('Course en ligne droite','Straight-line running'),('Réintégration collective partielle','Partial return to team training'),
 ('Décharge et glaçage 72 h','Offloading and ice, 72 h'),('Renforcement quadriceps','Quadriceps strengthening')
ON CONFLICT DO NOTHING;
UPDATE rtp_plans p SET phases = (
  SELECT json_agg(coalesce(t.en, e.v) ORDER BY e.i)
  FROM json_array_elements_text(p.phases) WITH ORDINALITY AS e(v, i) LEFT JOIN rtp_tr t ON t.fr = e.v)
WHERE json_typeof(p.phases) = 'array';
UPDATE exercise_folders SET name = 'Football sessions' WHERE name = 'Séances football';

-- GPS metric names, as the demo's GPS export named its columns (coach data, shown verbatim).
UPDATE gps_metric_definitions m SET label = v.en FROM (VALUES
 ('Distance totale','Total distance'),('Distance haute intensité','High-intensity distance'),('Vitesse max','Top speed'),
 ('Accélérations','Accelerations'),('Décélérations','Decelerations'),('Charge externe','External load')) AS v(fr, en)
WHERE m.label = v.fr;
UPDATE gps_metric_definitions SET unit = 'AU' WHERE unit = 'ua';

-- Coach session reviews and per-player observations.
CREATE TEMP TABLE nt(fr text PRIMARY KEY, en text);
INSERT INTO nt VALUES
 ('Récupération active, tout le monde a joué le jeu.','Active recovery, everyone bought in.'),
 ('Match maîtrisé dans le contenu, encore trop de déchet technique.','We controlled the game, but still too many technical errors.'),
 ('Volume volontairement réduit, groupe attentif.','Volume deliberately reduced, group focused.'),
 ('Beaucoup d’engagement, très bon niveau d’exigence.','Lots of commitment, very high standards.'),
 ('Beaucoup d’engagement, résultat mérité.','Lots of commitment, a deserved result.'),
 ('Bonne entame, il a fallu s’accrocher en seconde période.','Good start, we had to hang on in the second half.'),
 ('Travail technique au calme, rien à signaler.','Calm technical work, nothing to report.'),
 ('On a produit du jeu, il manque de la finition.','We played well but lacked finishing.'),
 ('Séance conforme au plan, quelques relâchements en fin de séance.','Session went to plan, a few lapses towards the end.'),
 ('Rythme élevé, quelques joueurs en difficulté sur la fin.','High tempo, a few players struggled at the end.'),
 ('Bon investissement du groupe, contenu respecté.','Good effort from the group, content delivered.'),
 ('Grosse séance, intensité tenue jusqu’au bout.','Big session, intensity held right to the end.'),
 ('Bonne séance dans l’ensemble, deux ateliers à refaire.','Good session overall, two drills to redo.'),
 ('Séance de remise en route, bonne application générale.','Return-to-training session, good application overall.'),
 ('Séance dense, le groupe a répondu présent.','Dense session, the group delivered.'),
 ('Rencontre difficile, le groupe n’a rien lâché.','A tough game, the group never gave up.'),
 ('Excellent état d’esprit malgré la charge.','Excellent attitude despite the load.'),
 ('Manque de justesse technique aujourd’hui.','Lacked technical precision today.'),
 ('Application constante, continue comme ça.','Consistently focused, keep it up.'),
 ('Trop discret sur la seconde partie de séance.','Too quiet in the second half of the session.'),
 ('Belle progression sur les dernières semaines.','Real progress over the last few weeks.'),
 ('Très bonne activité, a tiré le groupe.','Very active, pulled the group along.'),
 ('Gros volume de travail, à féliciter.','Huge work rate, well done.'),
 ('Doit hausser le ton dans les duels.','Needs to step up in duels.'),
 ('Bon placement, lecture du jeu intéressante.','Good positioning, reads the game well.');
UPDATE event_results r SET notes = nt.en FROM nt WHERE r.notes = nt.fr;
UPDATE event_player_evaluations e SET coach_notes = nt.en FROM nt WHERE e.coach_notes = nt.fr;

-- Players' session-RPE comments.
CREATE TEMP TABLE fb(fr text PRIMARY KEY, en text);
INSERT INTO fb VALUES
 ('Séance correcte, j’étais dedans.','Decent session, I was in it.'),('Content de la séance, bien calibrée.','Happy with the session, well judged.'),
 ('Grosse séance, ça piquait sur la fin.','Big session, it stung at the end.'),('J’étais dans le rouge sur les derniers blocs.','I was in the red for the last blocks.'),
 ('Rythme soutenu mais gérable.','High tempo but manageable.'),('Facile, j’aurais pu en faire plus.','Easy, I could have done more.'),
 ('Tranquille, bonne remise en route.','Easy, a good restart.'),('Un peu dur au début puis ça allait.','A bit tough at first, then fine.'),
 ('Très intense, j’ai fini à bout de souffle.','Very intense, I finished out of breath.'),('Bon rythme, aucune difficulté.','Good tempo, no problem.'),
 ('Rien de méchant, on a surtout parlé.','Nothing hard, we mostly talked.'),('Séance légère, je me sentais bien.','Light session, I felt good.'),
 ('Beaucoup de courses, je suis cuit.','Lots of running, I''m done in.'),('Dur du début à la fin.','Hard from start to finish.'),
 ('Bon volume, rien d’excessif.','Good volume, nothing excessive.'),('Ça montait vite mais j’ai tenu.','It ramped up fast but I held on.'),
 ('Intensité maximale, aucune récupération.','Maximum intensity, no recovery.');
UPDATE player_event_feedback f SET comment = fb.en FROM fb WHERE f.comment = fb.fr;

-- Starter competitions (seeded in French before CompetitionDefaults followed the team locale).
UPDATE competitions c SET name = v.en FROM (VALUES ('Championnat','League'),('Coupe','Cup'),('Amical','Friendly'),('Tournoi','Tournament')) AS v(fr, en)
WHERE c.name = v.fr AND c.team_id = 1;
