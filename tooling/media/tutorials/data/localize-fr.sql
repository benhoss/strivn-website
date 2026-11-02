-- French demo content: the reverse of localize-en.sql (generated from its pairs), for the FR recordings.
-- Run on the English-localised demo DB; idempotent.
BEGIN;
CREATE TEMP TABLE en_fr(en text PRIMARY KEY, fr text);
INSERT INTO en_fr VALUES
 ('Mobility & footwork warm-up','Échauffement mobilité et appuis'),
 ('Ball warm-up games','Échauffement ludique avec ballon'),
 ('Dribbling slalom','Conduite de balle en slalom'),
 ('Pass & support in pairs','Passe et appui à deux'),
 ('Crossing & finishing','Centre et finition'),
 ('Rondo 5 v 2','Toro 5 contre 2'),
 ('Possession 4 v 4 with outside supports','Conservation 4 contre 4 avec appuis'),
 ('Fast transition 3 v 2','Transition rapide 3 contre 2'),
 ('Small-sided 4 v 4, four goals','Jeu réduit 4 contre 4 à quatre buts'),
 ('Small-sided 6 v 6','Jeu réduit 6 contre 6'),
 ('Full-squad match play','Opposition à effectif complet'),
 ('Cool-down & stretching','Retour au calme et étirements'),
 ('Veille de match','Entraînement'),
 ('Work commitment.','Obligation professionnelle.'),
 ('Depends on when I finish work.','Dépend de l’heure à laquelle je finis.'),
 ('Waiting to hear back from work.','En attente d’une réponse pour le travail.'),
 ('Exam to prepare.','Examen à préparer.'),
 ('Should be there, will tell you if that changes.','Normalement présent, je préviens si ça change.'),
 ('Long-planned family trip.','Déplacement familial prévu de longue date.'),
 ('Appointment I can''t move.','Rendez-vous administratif impossible à déplacer.'),
 ('Flu — I''d rather not infect the group.','Grippe, je préfère ne pas contaminer le groupe.'),
 ('Childcare.','Garde d’enfant.'),
 ('I''ll confirm tomorrow, depending on my schedule.','Je confirme demain selon mon planning.'),
 ('Transport problem.','Problème de transport.'),
 ('Uncomfortable night, pain medication continued.','Nuit inconfortable, traitement antalgique maintenu.'),
 ('Running and changes of direction without discomfort.','Course et changements de direction sans gêne.'),
 ('Tender on palpation, no weight-bearing today.','Zone sensible à la palpation, pas de mise en charge aujourd’hui.'),
 ('Pain-free on all tests — cleared for team training.','Aucune douleur sur les tests, feu vert pour la reprise collective.'),
 ('Pain clearly decreasing, walking without discomfort.','Douleur en nette diminution, marche sans gêne.'),
 ('Mobility improving, isometric strengthening started.','Mobilité en progrès, début de renforcement isométrique.'),
 ('Functional tests passed, gradual return to the group.','Tests fonctionnels réussis, retour progressif au groupe.'),
 ('No more pain at rest, pool session completed.','Plus de douleur au repos, travail en piscine réalisé.'),
 ('Still painful at rest — ice and offloading.','Douleur toujours présente au repos, glaçage et décharge.'),
 ('Partial return to team training','Réintégration collective partielle'),
 ('Rest and compression, 48 h','Repos et compression 48 h'),
 ('Straight-line running','Course en ligne droite'),
 ('Offloading and ice, 72 h','Décharge et glaçage 72 h'),
 ('Quadriceps strengthening','Renforcement quadriceps'),
 ('Calf strengthening','Renforcement du triceps sural'),
 ('Shoulder knock in a challenge, limited mobility.','Choc sur l’épaule lors d’un contact, mobilité limitée.'),
 ('Calf tightness reported during the warm-up.','Contracture du mollet signalée pendant l’échauffement.'),
 ('Knee pain after a change of direction.','Douleur au genou après un changement de direction.'),
 ('Technical circuit','Circuit technique'),
 ('Small-sided game','Jeu réduit'),
 ('Warm-up','Échauffement'),
 ('Cool-down','Retour au calme'),
 ('Set pieces','Coups de pied arrêtés'),
 ('Team play','Jeu collectif'),
 ('Individual technique','Technique individuelle'),
 ('Total distance','Distance totale'),
 ('High-intensity distance','Distance haute intensité'),
 ('Top speed','Vitesse max'),
 ('Accelerations','Accélérations'),
 ('Decelerations','Décélérations'),
 ('External load','Charge externe'),
 ('Active recovery, everyone bought in.','Récupération active, tout le monde a joué le jeu.'),
 ('We controlled the game, but still too many technical errors.','Match maîtrisé dans le contenu, encore trop de déchet technique.'),
 ('Volume deliberately reduced, group focused.','Volume volontairement réduit, groupe attentif.'),
 ('Lots of commitment, very high standards.','Beaucoup d’engagement, très bon niveau d’exigence.'),
 ('Lots of commitment, a deserved result.','Beaucoup d’engagement, résultat mérité.'),
 ('Good start, we had to hang on in the second half.','Bonne entame, il a fallu s’accrocher en seconde période.'),
 ('Calm technical work, nothing to report.','Travail technique au calme, rien à signaler.'),
 ('We played well but lacked finishing.','On a produit du jeu, il manque de la finition.'),
 ('Session went to plan, a few lapses towards the end.','Séance conforme au plan, quelques relâchements en fin de séance.'),
 ('High tempo, a few players struggled at the end.','Rythme élevé, quelques joueurs en difficulté sur la fin.'),
 ('Good effort from the group, content delivered.','Bon investissement du groupe, contenu respecté.'),
 ('Big session, intensity held right to the end.','Grosse séance, intensité tenue jusqu’au bout.'),
 ('Good session overall, two drills to redo.','Bonne séance dans l’ensemble, deux ateliers à refaire.'),
 ('Return-to-training session, good application overall.','Séance de remise en route, bonne application générale.'),
 ('Dense session, the group delivered.','Séance dense, le groupe a répondu présent.'),
 ('A tough game, the group never gave up.','Rencontre difficile, le groupe n’a rien lâché.'),
 ('Excellent attitude despite the load.','Excellent état d’esprit malgré la charge.'),
 ('Lacked technical precision today.','Manque de justesse technique aujourd’hui.'),
 ('Consistently focused, keep it up.','Application constante, continue comme ça.'),
 ('Too quiet in the second half of the session.','Trop discret sur la seconde partie de séance.'),
 ('Real progress over the last few weeks.','Belle progression sur les dernières semaines.'),
 ('Very active, pulled the group along.','Très bonne activité, a tiré le groupe.'),
 ('Huge work rate, well done.','Gros volume de travail, à féliciter.'),
 ('Needs to step up in duels.','Doit hausser le ton dans les duels.'),
 ('Good positioning, reads the game well.','Bon placement, lecture du jeu intéressante.'),
 ('Decent session, I was in it.','Séance correcte, j’étais dedans.'),
 ('Happy with the session, well judged.','Content de la séance, bien calibrée.'),
 ('Big session, it stung at the end.','Grosse séance, ça piquait sur la fin.'),
 ('I was in the red for the last blocks.','J’étais dans le rouge sur les derniers blocs.'),
 ('High tempo but manageable.','Rythme soutenu mais gérable.'),
 ('Easy, I could have done more.','Facile, j’aurais pu en faire plus.'),
 ('Easy, a good restart.','Tranquille, bonne remise en route.'),
 ('A bit tough at first, then fine.','Un peu dur au début puis ça allait.'),
 ('Very intense, I finished out of breath.','Très intense, j’ai fini à bout de souffle.'),
 ('Good tempo, no problem.','Bon rythme, aucune difficulté.'),
 ('Nothing hard, we mostly talked.','Rien de méchant, on a surtout parlé.'),
 ('Light session, I felt good.','Séance légère, je me sentais bien.'),
 ('Lots of running, I''m done in.','Beaucoup de courses, je suis cuit.'),
 ('Hard from start to finish.','Dur du début à la fin.'),
 ('Good volume, nothing excessive.','Bon volume, rien d’excessif.'),
 ('It ramped up fast but I held on.','Ça montait vite mais j’ai tenu.'),
 ('Maximum intensity, no recovery.','Intensité maximale, aucune récupération.'),
 ('League','Championnat'),
 ('Cup','Coupe'),
 ('Friendly','Amical'),
 ('Tournament','Tournoi');
UPDATE exercises x SET title = m.fr FROM en_fr m WHERE x.title = m.en;
UPDATE calendar_events x SET title = m.fr FROM en_fr m WHERE x.title = m.en;
UPDATE rsvps x SET note = m.fr FROM en_fr m WHERE x.note = m.en;
UPDATE injury_followups x SET note = m.fr FROM en_fr m WHERE x.note = m.en;
UPDATE injury_notes x SET note = m.fr FROM en_fr m WHERE x.note = m.en;
UPDATE rehab_sessions x SET feedback = m.fr FROM en_fr m WHERE x.feedback = m.en;
UPDATE return_to_play_steps x SET name = m.fr FROM en_fr m WHERE x.name = m.en;
UPDATE return_to_play_steps x SET criteria_next_phase = m.fr FROM en_fr m WHERE x.criteria_next_phase = m.en;
UPDATE injuries x SET description = m.fr FROM en_fr m WHERE x.description = m.en;
UPDATE planned_slots x SET label = m.fr FROM en_fr m WHERE x.label = m.en;
UPDATE player_slot_feedback x SET slot_label = m.fr FROM en_fr m WHERE x.slot_label = m.en;
UPDATE planned_block_templates x SET label = m.fr FROM en_fr m WHERE x.label = m.en;
UPDATE planned_lanes x SET label = m.fr FROM en_fr m WHERE x.label = m.en;
UPDATE event_results x SET notes = m.fr FROM en_fr m WHERE x.notes = m.en;
UPDATE event_player_evaluations x SET coach_notes = m.fr FROM en_fr m WHERE x.coach_notes = m.en;
UPDATE player_event_feedback x SET comment = m.fr FROM en_fr m WHERE x.comment = m.en;
UPDATE gps_metric_definitions x SET label = m.fr FROM en_fr m WHERE x.label = m.en;
UPDATE competitions x SET name = m.fr FROM en_fr m WHERE x.name = m.en;
UPDATE exercise_folders x SET name = m.fr FROM en_fr m WHERE x.name = m.en;
UPDATE exercise_folders SET name = 'Séances football' WHERE name = 'Football sessions';
UPDATE gps_metric_definitions SET unit = 'ua' WHERE unit = 'AU';
UPDATE exercises SET description = to_json('Course progressive, mobilité articulaire, gammes d’appuis et accélérations courtes.'::text)::text WHERE title = (SELECT fr FROM en_fr WHERE en = 'Mobility & footwork warm-up') AND catalog_key IS NULL;
UPDATE exercises SET description = to_json('Rondos d’activation et jeux de passes en mouvement pour entrer dans la séance par le ballon.'::text)::text WHERE title = (SELECT fr FROM en_fr WHERE en = 'Ball warm-up games') AND catalog_key IS NULL;
UPDATE exercises SET description = to_json('Conduite entre plots, changements de direction et passe au partenaire en fin de parcours.'::text)::text WHERE title = (SELECT fr FROM en_fr WHERE en = 'Dribbling slalom') AND catalog_key IS NULL;
UPDATE exercises SET description = to_json('Passe, appui, remise et projection vers l’avant ; les deux joueurs alternent les rôles.'::text)::text WHERE title = (SELECT fr FROM en_fr WHERE en = 'Pass & support in pairs') AND catalog_key IS NULL;
UPDATE exercises SET description = to_json('Débordement, centre en retrait ou au premier poteau, deux attaquants à la conclusion.'::text)::text WHERE title = (SELECT fr FROM en_fr WHERE en = 'Crossing & finishing') AND catalog_key IS NULL;
UPDATE exercises SET description = to_json('Conservation en cercle à deux touches ; les deux joueurs au milieu tournent à l’interception.'::text)::text WHERE title = (SELECT fr FROM en_fr WHERE en = 'Rondo 5 v 2') AND catalog_key IS NULL;
UPDATE exercises SET description = to_json('Conservation en zone réduite avec deux joueurs appuis à l’extérieur du carré.'::text)::text WHERE title = (SELECT fr FROM en_fr WHERE en = 'Possession 4 v 4 with outside supports') AND catalog_key IS NULL;
UPDATE exercises SET description = to_json('Récupération puis contre immédiat à trois contre deux, six secondes pour conclure.'::text)::text WHERE title = (SELECT fr FROM en_fr WHERE en = 'Fast transition 3 v 2') AND catalog_key IS NULL;
UPDATE exercises SET description = to_json('Quatre contre quatre sur terrain court, quatre petits buts pour ouvrir les changements d’orientation.'::text)::text WHERE title = (SELECT fr FROM en_fr WHERE en = 'Small-sided 4 v 4, four goals') AND catalog_key IS NULL;
UPDATE exercises SET description = to_json('Six contre six sur demi-terrain avec gardiens, deux touches en zone de finition.'::text)::text WHERE title = (SELECT fr FROM en_fr WHERE en = 'Small-sided 6 v 6') AND catalog_key IS NULL;
UPDATE exercises SET description = to_json('Jeu à effectif complet sur grand terrain, consignes de bloc et de sorties de balle.'::text)::text WHERE title = (SELECT fr FROM en_fr WHERE en = 'Full-squad match play') AND catalog_key IS NULL;
UPDATE exercises SET description = to_json('Footing lent, respiration et étirements guidés, puis débrief rapide du groupe.'::text)::text WHERE title = (SELECT fr FROM en_fr WHERE en = 'Cool-down & stretching') AND catalog_key IS NULL;
UPDATE rtp_plans p SET phases = (SELECT json_agg(coalesce(m.fr, e.v) ORDER BY e.i) FROM json_array_elements_text(p.phases) WITH ORDINALITY AS e(v, i) LEFT JOIN en_fr m ON m.en = e.v) WHERE json_typeof(p.phases) = 'array';
-- Rule-based alert sentences back to the generator's French.
UPDATE player_alerts SET message = replace(message, ' is overloading: load ', ' en surcharge : charge ');
UPDATE player_alerts SET message = replace(message, ' is underloading: load ', ' en sous-charge : charge ');
UPDATE player_alerts SET message = regexp_replace(message, '^Injury declared for (.*): overuse \((.*)\)$', 'Blessure déclarée pour \1: Surcharge (\2)');
UPDATE player_alerts SET message = regexp_replace(message, '^Injury declared for (.*): traumatic \((.*)\)$', 'Blessure déclarée pour \1: Traumatique (\2)');
UPDATE player_alerts SET message = regexp_replace(message, '^(.*) mentioned "(.*)" (\d+) times in (\d+) days\. Check the injury risk\.$', '\1 a mentionné "\2" \3 fois en \4 jours. Vérifier risque de blessure.');
UPDATE player_alerts SET message = regexp_replace(message, '^(.*) reported pain \((.*)\) in the (.*) check-in\.$', '\1 a signalé une douleur (\2) au check-in du \3.');
UPDATE player_alerts SET message = regexp_replace(message, '^(.*) has carried a high load for (\d+) weeks \(average ACWR (.*)\)\. Plan a deload\.$', '\1 a une charge élevée depuis \2 semaines (ACWR moyen: \3). Proposer un plan de décharge.');
UPDATE player_alerts SET message = regexp_replace(message, '^(.*) reports their injury is getting worse \((.*)\)\.$', '\1 signale une aggravation de sa blessure (\2).');
UPDATE player_alerts SET message = replace(message, 'shoulder · right', 'Épaule · Droit');
UPDATE player_alerts SET message = regexp_replace(message, '^Blessure déclarée pour (.*): (Surcharge|Traumatique) \(knee\)$', 'Blessure déclarée pour \1: \2 (Genou)');
UPDATE player_alerts SET message = regexp_replace(message, '^Blessure déclarée pour (.*): (Surcharge|Traumatique) \(calf\)$', 'Blessure déclarée pour \1: \2 (Mollet)');
UPDATE player_alerts SET message = regexp_replace(message, '^Blessure déclarée pour (.*): (Surcharge|Traumatique) \(shoulder\)$', 'Blessure déclarée pour \1: \2 (Épaule)');
UPDATE player_alerts SET message = replace(replace(replace(replace(replace(message, '(knee)', '(genou)'), '(calf)', '(mollet)'), '(shoulder)', '(épaule)'), '"knee"', '"genou"'), '"calf"', '"mollet"');
-- GPS bands back to the built-in (French) defaults: the demo never stored any.
DELETE FROM gps_bands WHERE team_id = 1; DELETE FROM gps_zone_column_maps WHERE team_id = 1;
UPDATE calendar_events SET title = CASE title WHEN 'Training' THEN 'Entraînement' WHEN 'Pre-match session' THEN 'Veille de match' ELSE title END WHERE title IN ('Training','Pre-match session');
COMMIT;
