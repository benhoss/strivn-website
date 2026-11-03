"""Embed the feature tutorials on the website's feature pages (FR + EN).

For each page, inserts one `video` section per tutorial right after the page's
opening section, and writes the poster (the intro title card) next to the other
posters. Idempotent: an existing section with the same `src` is replaced.

  python3 tooling/media/tutorials/site/embed.py      (from the strivn-website root)
"""
import json, re, subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[4]
PAGES = ROOT / 'src/data/subpages'
VIDEOS = ROOT / 'public/videos/tutorials'
POSTERS = ROOT / 'public/posters/tutorials'

# page file -> tutorials, in display order
PLACEMENT = {
    'attendance': ['01-calendar-callups'],
    'checkIn': ['02-checkin-readiness'],
    'trainingLoad': ['03-training-load', '06-gps-analysis'],
    'medical': ['04-injuries-rtp'],
    'exerciseLibrary': ['05-session-planning'],
    'sessions': ['05-session-planning', '07-session-results', '10-tactical-board'],
    'reports': ['08-season-statistics', '09-reports-attendance'],
}

COPY = {
 '01-calendar-callups': {
  'en': ('Plan the week, call up the squad, see who’s coming.', 'The match-day week in the calendar, Saturday’s answers, a new event created with its call-up, and the follow-up of every send.', 'Video: planning the week and sending call-ups in strivn'),
  'fr': ('Planifier la semaine, convoquer, voir qui vient.', 'La semaine avant le match dans le calendrier, les réponses du samedi, un événement créé avec sa convocation, et le suivi de chaque envoi.', 'Vidéo : planifier la semaine et envoyer les convocations dans strivn')},
 '02-checkin-readiness': {
  'en': ('From the player’s phone to the morning decision.', 'A player does the check-in in ten seconds; the staff read the squad’s wellness trends, each player’s readiness, and the “Decide now” list.', 'Video: the morning check-in and squad readiness in strivn'),
  'fr': ('Du téléphone du joueur à la décision du matin.', 'Un joueur fait son check-in en dix secondes ; le staff lit les tendances bien-être, l’état de forme de chacun et la liste « À décider maintenant ».', 'Vidéo : le check-in du matin et l’état de forme du groupe dans strivn')},
 '03-training-load': {
  'en': ('RPE in two taps, load and ACWR without a spreadsheet.', 'A player rates the match from the phone, then the RPE grid, the squad’s load, the ACWR ranking and a load alert followed through.', 'Video: tracking training load with RPE and ACWR in strivn'),
  'fr': ('Le RPE en deux gestes, la charge et l’ACWR sans tableur.', 'Un joueur note le match depuis son téléphone, puis la grille RPE, la charge du groupe, le classement ACWR et une alerte de charge traitée.', 'Vidéo : suivre la charge avec le RPE et l’ACWR dans strivn')},
 '06-gps-analysis': {
  'en': ('Your GPS imports, read against each player’s targets.', 'The squad status, one player’s speed zones and internal vs external load, every match against his usual output, and two matches compared.', 'Video: reading GPS data in strivn'),
  'fr': ('Vos imports GPS, lus face aux cibles de chaque joueur.', 'L’état de l’effectif, les zones de vitesse et la charge interne / externe d’un joueur, chaque match face à ses habitudes, et deux matchs comparés.', 'Vidéo : lire les données GPS dans strivn')},
 '04-injuries-rtp': {
  'en': ('Declare it once, follow it to the return.', 'An injury declared in a few clicks, a recovery step ticked off, and the availability view that keeps injured players off the call-ups.', 'Video: injury tracking and return to play in strivn'),
  'fr': ('Déclarez une fois, suivez jusqu’au retour.', 'Une blessure déclarée en quelques clics, une étape de reprise cochée, et la vue des disponibilités qui écarte les blessés des convocations.', 'Vidéo : suivi des blessures et retour au jeu dans strivn')},
 '05-session-planning': {
  'en': ('From the library to the running order.', 'Search a drill and its learned metrics, open the week’s training, then build the running order with time, RPE and load calculated as you go.', 'Video: planning a session from the exercise library in strivn'),
  'fr': ('De la bibliothèque au déroulé.', 'Chercher un exercice et ses métriques apprises, ouvrir l’entraînement de la semaine, puis construire le déroulé avec durée, RPE et charge calculés au fil de l’eau.', 'Vidéo : planifier une séance depuis la bibliothèque dans strivn')},
 '07-session-results': {
  'en': ('Close the loop after every session.', 'Your RPE next to the players’, your review and a rating per player, then the match sheet with timeline, stats and playing time.', 'Video: reviewing sessions and matches in strivn'),
  'fr': ('Bouclez chaque séance.', 'Votre RPE à côté de celui des joueurs, votre bilan et une note par joueur, puis la feuille de match avec chronologie, statistiques et temps de jeu.', 'Vidéo : faire le bilan des séances et des matchs dans strivn')},
 '10-tactical-board': {
  'en': ('Draw the set piece, share it with the squad.', 'A corner routine on the tactical board: players from the roster, a run and a pass, then save, export or present it.', 'Video: drawing a tactical board in strivn'),
  'fr': ('Dessinez la combinaison, partagez-la au groupe.', 'Un corner sur le tableau tactique : les joueurs de l’effectif, un appel et une passe, puis enregistrer, exporter ou présenter.', 'Vidéo : dessiner un tableau tactique dans strivn')},
 '08-season-statistics': {
  'en': ('Your season, without typing anything twice.', 'Record and form, holding a lead, the set-piece insight, then goals, players and training — all built from your match sheets.', 'Video: team and player season statistics in strivn'),
  'fr': ('Votre saison, sans rien saisir deux fois.', 'Bilan et forme, tenir un résultat, l’enseignement sur les coups de pied arrêtés, puis buts, joueurs et entraînement — tout vient de vos feuilles de match.', 'Vidéo : les statistiques de la saison dans strivn')},
 '09-reports-attendance': {
  'en': ('The staff meeting, already prepared.', 'Load & availability, the team report and the player report, then the attendance grid exported in one click.', 'Video: weekly staff reports and attendance export in strivn'),
  'fr': ('La réunion du staff, déjà préparée.', 'Charge & disponibilité, le rapport d’équipe et le rapport par joueur, puis la grille des présences exportée en un clic.', 'Vidéo : rapports hebdomadaires et export des présences dans strivn')},
}

def duration(path):
    s = float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(path)]).decode().strip())
    return int(round(s))

def js(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"

def section(tid, lang):
    title, body, label = COPY[tid][lang]
    secs = duration(VIDEOS / f'{tid}-{lang}.mp4')
    mins = f'{-(-secs // 60)} min'  # the site's own style: "4 min · subtitled"
    dur = f'{mins} · subtitled' if lang == 'en' else f'{mins} · sous-titrée'
    kicker = 'IN VIDEO' if lang == 'en' else 'EN VIDÉO'
    return ("      {\n"
            f"        kicker: {js(kicker)},\n"
            f"        title: {js(title)},\n"
            f"        body: {js(body)},\n"
            "        kind: 'video',\n"
            f"        src: '/videos/tutorials/{tid}-{lang}.mp4',\n"
            f"        poster: '/posters/tutorials/{tid}-{lang}.jpg',\n"
            f"        label: {js(label)},\n"
            f"        duration: {js(dur)},\n"
            "      },\n")

def poster(tid, lang):
    POSTERS.mkdir(parents=True, exist_ok=True)
    out = POSTERS / f'{tid}-{lang}.jpg'
    # The intro title card, fully faded in.
    subprocess.check_call(['ffmpeg', '-y', '-ss', '2.2', '-i', str(VIDEOS / f'{tid}-{lang}.mp4'), '-frames:v', '1',
                           '-vf', 'scale=1440:-2', '-q:v', '4', str(out), '-loglevel', 'error'])

for page, tids in PLACEMENT.items():
    path = PAGES / f'{page}.ts'
    src = path.read_text(encoding='utf-8')
    for lang in ('fr', 'en'):
        start = src.index(f'\n  {lang}: {{\n')
        end = src.index('\n  },\n', start)
        block = src[start:end]
        # drop sections we inserted before (idempotent re-run)
        block = re.sub(r"      \{\n        kicker: '[^']*',\n(?:        [^\n]*\n)*?        src: '/videos/tutorials/[^']+',\n(?:        [^\n]*\n)*?      \},\n", '', block)
        i = block.index('    sections: [\n') + len('    sections: [\n')
        j = block.index('\n      },\n', i) + len('\n      },\n')  # end of the first section
        insert = ''.join(section(t, lang) for t in tids)
        block = block[:j] + insert + block[j:]
        src = src[:start] + block + src[end:]
        for t in tids:
            poster(t, lang)
    path.write_text(src, encoding='utf-8')
    print(f'{page}: {", ".join(tids)}')
