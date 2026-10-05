/**
 * Presentations — slides in the club's colours that fill themselves from the
 * team's data: a match debrief, a player one-to-one, a staff meeting. The
 * page leads with the walkthrough, because the builder is easier shown than
 * described.
 */
import type { SubpageLocales } from './types';

export const presentations: SubpageLocales = {
  fr: {
    meta: {
      title: 'Présentations | STRIVN',
      description:
        'Debrief de match, bilan individuel, réunion de staff : des slides aux couleurs du club, remplies avec les données de l’équipe, à présenter ou à partager.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · PRÉSENTATIONS',
      title: 'Le debrief du samedi, prêt avant le retour au vestiaire.',
      sub: 'Un modèle, un match ou un joueur, et la présentation se remplit : score, chiffres GPS, bien-être, meilleurs joueurs. Il vous reste à écrire votre lecture et à la montrer.',
      bullets: [
        'Rapport de match, bilan individuel, semaine de travail',
        'Tableaux tactiques et exercices insérés tels quels',
        'Le même rapport, recalculé pour le match suivant',
        'Plein écran, lien en lecture seule, PDF',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir les rapports', href: '/fr/features/reports/' },
      },
      visual: 'deck-editor',
    },
    sections: [
      {
        kicker: 'DU COUP DE SIFFLET À LA CAUSERIE',
        title: 'Un debrief qui tient dans la semaine.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          { num: 'SAMEDI SOIR', title: 'Créer', desc: 'Un modèle, le match : la présentation se remplit avec le score, les chiffres GPS, le bien-être et les meilleurs joueurs.' },
          { num: 'DIMANCHE', title: 'Compléter', desc: 'Vos points à retenir, le tableau tactique du thème de la semaine, un exercice de la bibliothèque.' },
          { num: 'LUNDI', title: 'Présenter', desc: 'En plein écran au vestiaire ou en réunion de staff, les flèches pour avancer.' },
          { num: 'ENSUITE', title: 'Partager', desc: 'Un lien en lecture seule, un PDF, ou le même rapport recalculé pour le match suivant.' },
        ],
      },
      {
        kicker: 'EN VIDÉO',
        title: 'Du match à la slide, en quatre minutes.',
        body: 'Un debrief de match complété et enrichi d’un tableau tactique, réutilisé pour le match suivant, présenté puis partagé, et un bilan individuel pour l’entretien avec un joueur.',
        kind: 'video',
        src: '/videos/presentations-fr.mp4',
        poster: '/posters/presentations-fr.jpg',
        label: 'Vidéo : le constructeur de présentation de STRIVN',
        duration: '4 min · sous-titrée',
      },
      {
        kicker: 'TROIS POINTS DE DÉPART',
        title: 'Partez d’un modèle, pas d’une page blanche.',
        kind: 'cards',
        cards: [
          { icon: 'trophy', title: 'Rapport de match', desc: 'Couverture avec le score et les buteurs, chiffres GPS de l’équipe, performances remarquables, détail par joueur.' },
          { icon: 'user-check', title: 'Bilan individuel', desc: 'La charge d’un joueur semaine par semaine, sa forme du jour et ses chiffres, pour l’entretien.' },
          { icon: 'calendar-days', title: 'Semaine de travail', desc: 'La charge et la forme du groupe sur une semaine, et ses faits marquants.' },
        ],
      },
      {
        kicker: 'CE QU’UNE PAGE PEUT PORTER',
        title: 'Les chiffres de strivn, et tout ce que le staff prépare déjà.',
        body: 'Chaque bloc s’ajoute depuis la barre de l’éditeur. Les blocs liés — tableau tactique, exercice, vue d’un tableau de bord — restent branchés sur l’original : une retouche du staff se retrouve dans la présentation.',
        visual: 'deck-tactic',
        visualAside: true,
        kind: 'cards',
        cards: [
          { icon: 'chart-column', title: 'Chiffres et vues', desc: 'Un chiffre clé, un graphique ou un tableau, ou une vue d’un tableau de bord enregistré.' },
          { icon: 'trophy', title: 'Performances', desc: 'Le meilleur joueur sur une statistique, et son avance sur le deuxième.' },
          { icon: 'pen-tool', title: 'Tableau tactique', desc: 'Les tableaux de l’éditeur tactique, insérés tels quels et agrandis à la page.' },
          { icon: 'dumbbell', title: 'Exercice', desc: 'Un exercice de votre bibliothèque, pour le point à travailler.' },
          { icon: 'image', title: 'Photo et vidéo', desc: 'La photothèque du club, ou une vidéo par lien.' },
          { icon: 'pen-line', title: 'Texte et note', desc: 'Votre lecture, écrite par vous ; l’assistant peut proposer un premier jet.' },
        ],
      },
      {
        kicker: 'APRÈS LA PREMIÈRE',
        title: 'Changez le match, gardez le travail.',
        visual: 'deck-context',
        visualAside: true,
        kind: 'columns',
        cols: [
          { eyebrow: 'CONTEXTE', title: 'Un clic pour le match suivant', desc: 'Couverture, chiffres et classements se recalculent. Vos textes restent, marqués « À relire » jusqu’à ce que vous les validiez.' },
          { eyebrow: 'MODÈLE', title: 'Votre format, pour tout le staff', desc: 'Enregistrez la présentation comme modèle de l’équipe : le prochain debrief part de vos pages et de vos blocs.' },
          { eyebrow: 'SORTIE', title: 'Présenter, partager, imprimer', desc: 'Plein écran au vestiaire, lien en lecture seule avec initiales et données médicales exclues, ou PDF.' },
        ],
        note: { icon: 'shield-check', label: 'Partage', desc: 'Le lien public exclut par défaut blessures, disponibilité, forme et bien-être, et peut remplacer les noms par des initiales. Une équipe jeunes n’y montre aucune photo.' },
      },
    ],
  },

  en: {
    meta: {
      title: 'Presentations | STRIVN',
      description:
        'Match debriefs, player reviews, staff meetings: slides in your club colours, filled with your team’s data, ready to present or share.',
    },
    hero: {
      kicker: 'FEATURES · PRESENTATIONS',
      title: 'Saturday’s debrief, ready before the players are back in the dressing room.',
      sub: 'Pick a template, a match or a player, and the presentation fills itself: score, GPS figures, wellness, top performers. All that’s left is your reading, and showing it.',
      bullets: [
        'Match report, player review, training week',
        'Tactical boards and drills inserted as they are',
        'The same report, recomputed for the next match',
        'Full screen, read-only link, PDF',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See reports', href: '/en/features/reports/' },
      },
      visual: 'deck-editor',
    },
    sections: [
      {
        kicker: 'FROM THE FINAL WHISTLE TO THE TEAM TALK',
        title: 'A debrief that fits in the week.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          { num: 'SATURDAY NIGHT', title: 'Create', desc: 'A template, the match: the presentation fills with the score, GPS figures, wellness and top performers.' },
          { num: 'SUNDAY', title: 'Complete', desc: 'Your key points, the tactical board for the week’s theme, a drill from the library.' },
          { num: 'MONDAY', title: 'Present', desc: 'Full screen in the dressing room or a staff meeting, arrow keys to move on.' },
          { num: 'THEN', title: 'Share', desc: 'A read-only link, a PDF, or the same report recomputed for the next match.' },
        ],
      },
      {
        kicker: 'IN VIDEO',
        title: 'From the match to the slide, in four minutes.',
        body: 'A match debrief completed and enriched with a tactical board, reused for the next match, presented and shared, then a player review for a one-to-one.',
        kind: 'video',
        src: '/videos/presentations-en.mp4',
        poster: '/posters/presentations-en.jpg',
        label: 'Video: the STRIVN presentation builder',
        duration: '4 min · subtitled',
      },
      {
        kicker: 'THREE STARTING POINTS',
        title: 'Start from a template, not a blank page.',
        kind: 'cards',
        cards: [
          { icon: 'trophy', title: 'Match report', desc: 'A cover with the score and scorers, the team’s GPS figures, standout performances, player-by-player detail.' },
          { icon: 'user-check', title: 'Player review', desc: 'A player’s load week by week, their readiness today and their numbers, for the one-to-one.' },
          { icon: 'calendar-days', title: 'Training week', desc: 'The group’s load and readiness over a week, and its highlights.' },
        ],
      },
      {
        kicker: 'WHAT A PAGE CAN CARRY',
        title: 'strivn’s figures, and everything the staff already prepares.',
        body: 'Every block is added from the editor’s toolbar. Linked blocks — tactical board, drill, dashboard view — stay connected to the original: when the staff edits it, the presentation follows.',
        visual: 'deck-tactic',
        visualAside: true,
        kind: 'cards',
        cards: [
          { icon: 'chart-column', title: 'Figures and views', desc: 'A key figure, a chart or a table, or a view from a saved dashboard.' },
          { icon: 'trophy', title: 'Performances', desc: 'The best player on a stat, and their lead over the runner-up.' },
          { icon: 'pen-tool', title: 'Tactical board', desc: 'Boards from the tactics editor, inserted as they are and enlarged to the page.' },
          { icon: 'dumbbell', title: 'Drill', desc: 'A drill from your library, for the point to work on.' },
          { icon: 'image', title: 'Photo and video', desc: 'The club’s photo library, or a video by link.' },
          { icon: 'pen-line', title: 'Text and note', desc: 'Your reading, written by you; the assistant can suggest a first draft.' },
        ],
      },
      {
        kicker: 'AFTER THE FIRST ONE',
        title: 'Change the match, keep the work.',
        visual: 'deck-context',
        visualAside: true,
        kind: 'columns',
        cols: [
          { eyebrow: 'CONTEXT', title: 'One click for the next match', desc: 'Cover, figures and rankings are recomputed. Your texts stay, flagged “To review” until you sign them off.' },
          { eyebrow: 'TEMPLATE', title: 'Your format, for the whole staff', desc: 'Save the presentation as a team template: the next debrief starts from your pages and blocks.' },
          { eyebrow: 'OUTPUT', title: 'Present, share, print', desc: 'Full screen in the dressing room, a read-only link with initials and medical data left out, or a PDF.' },
        ],
        note: { icon: 'shield-check', label: 'Sharing', desc: 'The public link leaves out injuries, availability, readiness and wellness by default, and can replace names with initials. A youth team shows no photos at all.' },
      },
    ],
  },

  nl: {
    meta: {
      title: 'Presentaties | STRIVN',
      description:
        'Wedstrijdanalyse, individuele evaluatie, stafvergadering: slides in de kleuren van de club, gevuld met de data van het team, klaar om te tonen of te delen.',
    },
    hero: {
      kicker: 'FUNCTIES · PRESENTATIES',
      title: 'De analyse van zaterdag, klaar voor de spelers terug in de kleedkamer zijn.',
      sub: 'Kies een sjabloon, een wedstrijd of een speler, en de presentatie vult zichzelf: score, GPS-cijfers, wellness, beste spelers. Rest jouw lezing, en die tonen.',
      bullets: [
        'Wedstrijdrapport, individuele evaluatie, trainingsweek',
        'Tactische borden en oefeningen zoals ze zijn ingevoegd',
        'Hetzelfde rapport, herberekend voor de volgende wedstrijd',
        'Volledig scherm, alleen-lezenlink, pdf',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Rapporten bekijken', href: '/nl/features/reports/' },
      },
      visual: 'deck-editor',
    },
    sections: [
      {
        kicker: 'VAN HET EINDSIGNAAL TOT DE PEPTALK',
        title: 'Een analyse die in de week past.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          { num: 'ZATERDAGAVOND', title: 'Aanmaken', desc: 'Een sjabloon, de wedstrijd: de presentatie vult zich met score, GPS-cijfers, wellness en beste spelers.' },
          { num: 'ZONDAG', title: 'Aanvullen', desc: 'Jouw kernpunten, het tactisch bord van het weekthema, een oefening uit de bibliotheek.' },
          { num: 'MAANDAG', title: 'Presenteren', desc: 'Volledig scherm in de kleedkamer of op de stafvergadering, pijltjes om verder te gaan.' },
          { num: 'DAARNA', title: 'Delen', desc: 'Een alleen-lezenlink, een pdf, of hetzelfde rapport herberekend voor de volgende wedstrijd.' },
        ],
      },
      {
        kicker: 'IN VIDEO',
        title: 'Van de wedstrijd naar de slide, in vier minuten.',
        body: 'Een wedstrijdanalyse aangevuld met een tactisch bord, hergebruikt voor de volgende wedstrijd, gepresenteerd en gedeeld, en daarna een individuele evaluatie voor een gesprek met een speler.',
        kind: 'video',
        src: '/videos/presentations-nl.mp4',
        poster: '/posters/presentations-nl.jpg',
        label: 'Video: de presentatiebouwer van STRIVN',
        duration: '4 min · ondertiteld',
      },
      {
        kicker: 'DRIE STARTPUNTEN',
        title: 'Vertrek van een sjabloon, niet van een lege pagina.',
        kind: 'cards',
        cards: [
          { icon: 'trophy', title: 'Wedstrijdrapport', desc: 'Een cover met score en doelpuntenmakers, de GPS-cijfers van het team, opvallende prestaties, detail per speler.' },
          { icon: 'user-check', title: 'Individuele evaluatie', desc: 'De belasting van een speler week per week, zijn vorm van de dag en zijn cijfers, voor het gesprek.' },
          { icon: 'calendar-days', title: 'Trainingsweek', desc: 'De belasting en vorm van de groep over een week, en de opvallende momenten.' },
        ],
      },
      {
        kicker: 'WAT EEN PAGINA KAN BEVATTEN',
        title: 'De cijfers van strivn, en alles wat de staf al voorbereidt.',
        body: 'Elk blok voeg je toe via de werkbalk van de editor. Gekoppelde blokken — tactisch bord, oefening, dashboardweergave — blijven verbonden met het origineel: past de staf het aan, dan volgt de presentatie.',
        visual: 'deck-tactic',
        visualAside: true,
        kind: 'cards',
        cards: [
          { icon: 'chart-column', title: 'Cijfers en weergaven', desc: 'Een kerncijfer, een grafiek of een tabel, of een weergave uit een opgeslagen dashboard.' },
          { icon: 'trophy', title: 'Prestaties', desc: 'De beste speler op een statistiek, en zijn voorsprong op de tweede.' },
          { icon: 'pen-tool', title: 'Tactisch bord', desc: 'Borden uit de tactische editor, ingevoegd zoals ze zijn en vergroot tot de pagina.' },
          { icon: 'dumbbell', title: 'Oefening', desc: 'Een oefening uit je bibliotheek, voor het werkpunt.' },
          { icon: 'image', title: 'Foto en video', desc: 'De fotobibliotheek van de club, of een video via een link.' },
          { icon: 'pen-line', title: 'Tekst en notitie', desc: 'Jouw lezing, door jou geschreven; de assistent kan een eerste versie voorstellen.' },
        ],
      },
      {
        kicker: 'NA DE EERSTE',
        title: 'Verander de wedstrijd, behoud het werk.',
        visual: 'deck-context',
        visualAside: true,
        kind: 'columns',
        cols: [
          { eyebrow: 'CONTEXT', title: 'Eén klik voor de volgende wedstrijd', desc: 'Cover, cijfers en rangschikkingen worden herberekend. Jouw teksten blijven, gemarkeerd als “Na te lezen” tot je ze bevestigt.' },
          { eyebrow: 'SJABLOON', title: 'Jouw formaat, voor de hele staf', desc: 'Sla de presentatie op als teamsjabloon: de volgende analyse vertrekt van jouw pagina’s en blokken.' },
          { eyebrow: 'OUTPUT', title: 'Presenteren, delen, afdrukken', desc: 'Volledig scherm in de kleedkamer, een alleen-lezenlink met initialen en zonder medische data, of een pdf.' },
        ],
        note: { icon: 'shield-check', label: 'Delen', desc: 'De publieke link laat blessures, beschikbaarheid, vorm en wellness standaard weg en kan namen door initialen vervangen. Een jeugdploeg toont er geen enkele foto.' },
      },
    ],
  },

  de: {
    meta: {
      title: 'Präsentationen | STRIVN',
      description:
        'Spielnachbesprechung, Einzelgespräch, Staff-Meeting: Folien in den Vereinsfarben, gefüllt mit den Daten der Mannschaft, zum Präsentieren oder Teilen.',
    },
    hero: {
      kicker: 'FUNKTIONEN · PRÄSENTATIONEN',
      title: 'Die Nachbesprechung vom Samstag, fertig bevor die Spieler zurück in der Kabine sind.',
      sub: 'Vorlage, Spiel oder Spieler wählen, und die Präsentation füllt sich: Ergebnis, GPS-Werte, Wohlbefinden, beste Spieler. Es bleibt Ihre Einschätzung, und sie zu zeigen.',
      bullets: [
        'Spielbericht, Einzelbilanz, Trainingswoche',
        'Taktiktafeln und Übungen unverändert eingefügt',
        'Derselbe Bericht, neu berechnet für das nächste Spiel',
        'Vollbild, Nur-Lese-Link, PDF',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Berichte ansehen', href: '/de/features/reports/' },
      },
      visual: 'deck-editor',
    },
    sections: [
      {
        kicker: 'VOM ABPFIFF ZUR MANNSCHAFTSBESPRECHUNG',
        title: 'Eine Nachbesprechung, die in die Woche passt.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          { num: 'SAMSTAGABEND', title: 'Erstellen', desc: 'Eine Vorlage, das Spiel: Die Präsentation füllt sich mit Ergebnis, GPS-Werten, Wohlbefinden und besten Spielern.' },
          { num: 'SONNTAG', title: 'Ergänzen', desc: 'Ihre Kernpunkte, die Taktiktafel zum Wochenschwerpunkt, eine Übung aus der Bibliothek.' },
          { num: 'MONTAG', title: 'Präsentieren', desc: 'Im Vollbild in der Kabine oder im Staff-Meeting, mit den Pfeiltasten weiter.' },
          { num: 'DANACH', title: 'Teilen', desc: 'Ein Nur-Lese-Link, ein PDF, oder derselbe Bericht neu berechnet für das nächste Spiel.' },
        ],
      },
      {
        kicker: 'IM VIDEO',
        title: 'Vom Spiel zur Folie, in vier Minuten.',
        body: 'Eine Spielnachbesprechung, ergänzt um eine Taktiktafel, für das nächste Spiel wiederverwendet, präsentiert und geteilt, dann eine Einzelbilanz für ein Spielergespräch.',
        kind: 'video',
        src: '/videos/presentations-de.mp4',
        poster: '/posters/presentations-de.jpg',
        label: 'Video: der Präsentations-Baukasten von STRIVN',
        duration: '4 Min. · mit Untertiteln',
      },
      {
        kicker: 'DREI AUSGANGSPUNKTE',
        title: 'Mit einer Vorlage beginnen, nicht mit einer leeren Seite.',
        kind: 'cards',
        cards: [
          { icon: 'trophy', title: 'Spielbericht', desc: 'Deckblatt mit Ergebnis und Torschützen, GPS-Werte der Mannschaft, herausragende Leistungen, Detail je Spieler.' },
          { icon: 'user-check', title: 'Einzelbilanz', desc: 'Die Belastung eines Spielers Woche für Woche, seine Tagesform und seine Zahlen, für das Gespräch.' },
          { icon: 'calendar-days', title: 'Trainingswoche', desc: 'Belastung und Form der Gruppe über eine Woche, und ihre Höhepunkte.' },
        ],
      },
      {
        kicker: 'WAS EINE SEITE TRAGEN KANN',
        title: 'Die Zahlen von strivn, und alles, was der Staff schon vorbereitet.',
        body: 'Jeder Block wird über die Werkzeugleiste des Editors eingefügt. Verknüpfte Blöcke — Taktiktafel, Übung, Dashboard-Ansicht — bleiben mit dem Original verbunden: Ändert der Staff es, zieht die Präsentation nach.',
        visual: 'deck-tactic',
        visualAside: true,
        kind: 'cards',
        cards: [
          { icon: 'chart-column', title: 'Zahlen und Ansichten', desc: 'Eine Kennzahl, ein Diagramm oder eine Tabelle, oder eine Ansicht aus einem gespeicherten Dashboard.' },
          { icon: 'trophy', title: 'Leistungen', desc: 'Der beste Spieler in einer Statistik und sein Vorsprung auf den Zweiten.' },
          { icon: 'pen-tool', title: 'Taktiktafel', desc: 'Tafeln aus dem Taktik-Editor, unverändert eingefügt und auf die Seite vergrößert.' },
          { icon: 'dumbbell', title: 'Übung', desc: 'Eine Übung aus Ihrer Bibliothek, für den Trainingsschwerpunkt.' },
          { icon: 'image', title: 'Foto und Video', desc: 'Die Fotothek des Vereins, oder ein Video per Link.' },
          { icon: 'pen-line', title: 'Text und Notiz', desc: 'Ihre Einschätzung, von Ihnen geschrieben; der Assistent kann einen ersten Entwurf vorschlagen.' },
        ],
      },
      {
        kicker: 'NACH DEM ERSTEN MAL',
        title: 'Spiel wechseln, Arbeit behalten.',
        visual: 'deck-context',
        visualAside: true,
        kind: 'columns',
        cols: [
          { eyebrow: 'KONTEXT', title: 'Ein Klick für das nächste Spiel', desc: 'Deckblatt, Zahlen und Ranglisten werden neu berechnet. Ihre Texte bleiben, als „Zu prüfen“ markiert, bis Sie sie freigeben.' },
          { eyebrow: 'VORLAGE', title: 'Ihr Format, für den ganzen Staff', desc: 'Speichern Sie die Präsentation als Teamvorlage: Die nächste Nachbesprechung startet mit Ihren Seiten und Blöcken.' },
          { eyebrow: 'AUSGABE', title: 'Präsentieren, teilen, drucken', desc: 'Vollbild in der Kabine, ein Nur-Lese-Link mit Initialen und ohne medizinische Daten, oder ein PDF.' },
        ],
        note: { icon: 'shield-check', label: 'Teilen', desc: 'Der öffentliche Link lässt Verletzungen, Verfügbarkeit, Form und Wohlbefinden standardmäßig weg und kann Namen durch Initialen ersetzen. Eine Jugendmannschaft zeigt dort kein Foto.' },
      },
    ],
  },

  pt: {
    meta: {
      title: 'Apresentações | STRIVN',
      description:
        'Análise de jogo, balanço individual, reunião do staff: slides com as cores do clube, preenchidos com os dados da equipa, para apresentar ou partilhar.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · APRESENTAÇÕES',
      title: 'A análise de sábado, pronta antes de os jogadores voltarem ao balneário.',
      sub: 'Escolha um modelo, um jogo ou um jogador, e a apresentação preenche-se: resultado, números GPS, bem-estar, melhores jogadores. Fica-lhe a sua leitura, e mostrá-la.',
      bullets: [
        'Relatório de jogo, balanço individual, semana de treino',
        'Quadros táticos e exercícios inseridos tal como estão',
        'O mesmo relatório, recalculado para o jogo seguinte',
        'Ecrã inteiro, link só de leitura, PDF',
      ],
      ctas: {
        primary: 'Começar grátis',
        secondary: { label: 'Ver os relatórios', href: '/pt/features/reports/' },
      },
      visual: 'deck-editor',
    },
    sections: [
      {
        kicker: 'DO APITO FINAL À PALESTRA',
        title: 'Uma análise que cabe na semana.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          { num: 'SÁBADO À NOITE', title: 'Criar', desc: 'Um modelo, o jogo: a apresentação preenche-se com o resultado, os números GPS, o bem-estar e os melhores jogadores.' },
          { num: 'DOMINGO', title: 'Completar', desc: 'Os seus pontos-chave, o quadro tático do tema da semana, um exercício da biblioteca.' },
          { num: 'SEGUNDA', title: 'Apresentar', desc: 'Em ecrã inteiro no balneário ou na reunião do staff, as setas para avançar.' },
          { num: 'DEPOIS', title: 'Partilhar', desc: 'Um link só de leitura, um PDF, ou o mesmo relatório recalculado para o jogo seguinte.' },
        ],
      },
      {
        kicker: 'EM VÍDEO',
        title: 'Do jogo ao slide, em quatro minutos.',
        body: 'Uma análise de jogo completada com um quadro tático, reutilizada para o jogo seguinte, apresentada e partilhada, e depois um balanço individual para a conversa com um jogador.',
        kind: 'video',
        src: '/videos/presentations-pt.mp4',
        poster: '/posters/presentations-pt.jpg',
        label: 'Vídeo: o construtor de apresentações da STRIVN',
        duration: '4 min · legendado',
      },
      {
        kicker: 'TRÊS PONTOS DE PARTIDA',
        title: 'Parta de um modelo, não de uma página em branco.',
        kind: 'cards',
        cards: [
          { icon: 'trophy', title: 'Relatório de jogo', desc: 'Capa com o resultado e os marcadores, números GPS da equipa, desempenhos em destaque, detalhe por jogador.' },
          { icon: 'user-check', title: 'Balanço individual', desc: 'A carga de um jogador semana a semana, a forma do dia e os seus números, para a conversa.' },
          { icon: 'calendar-days', title: 'Semana de treino', desc: 'A carga e a forma do grupo numa semana, e os seus destaques.' },
        ],
      },
      {
        kicker: 'O QUE UMA PÁGINA PODE TER',
        title: 'Os números do strivn, e tudo o que o staff já prepara.',
        body: 'Cada bloco acrescenta-se pela barra do editor. Os blocos ligados — quadro tático, exercício, vista de um painel — ficam ligados ao original: se o staff o alterar, a apresentação acompanha.',
        visual: 'deck-tactic',
        visualAside: true,
        kind: 'cards',
        cards: [
          { icon: 'chart-column', title: 'Números e vistas', desc: 'Um número-chave, um gráfico ou uma tabela, ou uma vista de um painel guardado.' },
          { icon: 'trophy', title: 'Desempenhos', desc: 'O melhor jogador numa estatística e a vantagem sobre o segundo.' },
          { icon: 'pen-tool', title: 'Quadro tático', desc: 'Quadros do editor tático, inseridos tal como estão e ampliados à página.' },
          { icon: 'dumbbell', title: 'Exercício', desc: 'Um exercício da sua biblioteca, para o ponto a trabalhar.' },
          { icon: 'image', title: 'Foto e vídeo', desc: 'A fototeca do clube, ou um vídeo por link.' },
          { icon: 'pen-line', title: 'Texto e nota', desc: 'A sua leitura, escrita por si; o assistente pode propor um primeiro rascunho.' },
        ],
      },
      {
        kicker: 'DEPOIS DA PRIMEIRA',
        title: 'Mude o jogo, guarde o trabalho.',
        visual: 'deck-context',
        visualAside: true,
        kind: 'columns',
        cols: [
          { eyebrow: 'CONTEXTO', title: 'Um clique para o jogo seguinte', desc: 'Capa, números e classificações são recalculados. Os seus textos mantêm-se, marcados “A rever” até os validar.' },
          { eyebrow: 'MODELO', title: 'O seu formato, para todo o staff', desc: 'Guarde a apresentação como modelo da equipa: a próxima análise parte das suas páginas e blocos.' },
          { eyebrow: 'SAÍDA', title: 'Apresentar, partilhar, imprimir', desc: 'Ecrã inteiro no balneário, um link só de leitura com iniciais e sem dados médicos, ou um PDF.' },
        ],
        note: { icon: 'shield-check', label: 'Partilha', desc: 'O link público exclui por defeito lesões, disponibilidade, forma e bem-estar, e pode substituir os nomes por iniciais. Uma equipa de formação não mostra nenhuma foto.' },
      },
    ],
  },

  es: {
    meta: {
      title: 'Presentaciones | STRIVN',
      description:
        'Análisis de partido, balance individual, reunión del staff: diapositivas con los colores del club, llenas con los datos del equipo, para presentar o compartir.',
    },
    hero: {
      kicker: 'FUNCIONES · PRESENTACIONES',
      title: 'El análisis del sábado, listo antes de que los jugadores vuelvan al vestuario.',
      sub: 'Elige una plantilla, un partido o un jugador, y la presentación se rellena sola: marcador, cifras GPS, bienestar, mejores jugadores. Te queda tu lectura, y mostrarla.',
      bullets: [
        'Informe de partido, balance individual, semana de entrenamiento',
        'Pizarras tácticas y ejercicios insertados tal cual',
        'El mismo informe, recalculado para el partido siguiente',
        'Pantalla completa, enlace de solo lectura, PDF',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver los informes', href: '/es/features/reports/' },
      },
      visual: 'deck-editor',
    },
    sections: [
      {
        kicker: 'DEL PITIDO FINAL A LA CHARLA',
        title: 'Un análisis que cabe en la semana.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          { num: 'SÁBADO POR LA NOCHE', title: 'Crear', desc: 'Una plantilla, el partido: la presentación se llena con el marcador, las cifras GPS, el bienestar y los mejores jugadores.' },
          { num: 'DOMINGO', title: 'Completar', desc: 'Tus puntos clave, la pizarra táctica del tema de la semana, un ejercicio de la biblioteca.' },
          { num: 'LUNES', title: 'Presentar', desc: 'A pantalla completa en el vestuario o en la reunión del staff, con las flechas para avanzar.' },
          { num: 'DESPUÉS', title: 'Compartir', desc: 'Un enlace de solo lectura, un PDF, o el mismo informe recalculado para el partido siguiente.' },
        ],
      },
      {
        kicker: 'EN VÍDEO',
        title: 'Del partido a la diapositiva, en cuatro minutos.',
        body: 'Un análisis de partido completado con una pizarra táctica, reutilizado para el partido siguiente, presentado y compartido, y después un balance individual para la entrevista con un jugador.',
        kind: 'video',
        src: '/videos/presentations-es.mp4',
        poster: '/posters/presentations-es.jpg',
        label: 'Vídeo: el generador de presentaciones de STRIVN',
        duration: '4 min · subtitulado',
      },
      {
        kicker: 'TRES PUNTOS DE PARTIDA',
        title: 'Parte de una plantilla, no de una página en blanco.',
        kind: 'cards',
        cards: [
          { icon: 'trophy', title: 'Informe de partido', desc: 'Portada con el marcador y los goleadores, cifras GPS del equipo, actuaciones destacadas, detalle por jugador.' },
          { icon: 'user-check', title: 'Balance individual', desc: 'La carga de un jugador semana a semana, su estado del día y sus cifras, para la entrevista.' },
          { icon: 'calendar-days', title: 'Semana de entrenamiento', desc: 'La carga y el estado del grupo durante una semana, y lo más destacado.' },
        ],
      },
      {
        kicker: 'LO QUE PUEDE LLEVAR UNA PÁGINA',
        title: 'Las cifras de strivn, y todo lo que el staff ya prepara.',
        body: 'Cada bloque se añade desde la barra del editor. Los bloques enlazados — pizarra táctica, ejercicio, vista de un panel — siguen conectados al original: si el staff lo retoca, la presentación se actualiza.',
        visual: 'deck-tactic',
        visualAside: true,
        kind: 'cards',
        cards: [
          { icon: 'chart-column', title: 'Cifras y vistas', desc: 'Una cifra clave, un gráfico o una tabla, o una vista de un panel guardado.' },
          { icon: 'trophy', title: 'Actuaciones', desc: 'El mejor jugador en una estadística y su ventaja sobre el segundo.' },
          { icon: 'pen-tool', title: 'Pizarra táctica', desc: 'Pizarras del editor táctico, insertadas tal cual y ampliadas a la página.' },
          { icon: 'dumbbell', title: 'Ejercicio', desc: 'Un ejercicio de tu biblioteca, para el punto a trabajar.' },
          { icon: 'image', title: 'Foto y vídeo', desc: 'La fototeca del club, o un vídeo por enlace.' },
          { icon: 'pen-line', title: 'Texto y nota', desc: 'Tu lectura, escrita por ti; el asistente puede proponer un primer borrador.' },
        ],
      },
      {
        kicker: 'DESPUÉS DE LA PRIMERA',
        title: 'Cambia el partido, conserva el trabajo.',
        visual: 'deck-context',
        visualAside: true,
        kind: 'columns',
        cols: [
          { eyebrow: 'CONTEXTO', title: 'Un clic para el partido siguiente', desc: 'Portada, cifras y clasificaciones se recalculan. Tus textos se mantienen, marcados «Por revisar» hasta que los valides.' },
          { eyebrow: 'PLANTILLA', title: 'Tu formato, para todo el staff', desc: 'Guarda la presentación como plantilla del equipo: el próximo análisis parte de tus páginas y tus bloques.' },
          { eyebrow: 'SALIDA', title: 'Presentar, compartir, imprimir', desc: 'Pantalla completa en el vestuario, un enlace de solo lectura con iniciales y sin datos médicos, o un PDF.' },
        ],
        note: { icon: 'shield-check', label: 'Compartir', desc: 'El enlace público excluye por defecto lesiones, disponibilidad, forma y bienestar, y puede sustituir los nombres por iniciales. Un equipo de cantera no muestra ninguna foto.' },
      },
    ],
  },
};
