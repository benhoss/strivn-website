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
    },
    sections: [
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
        kicker: 'APRÈS LA PREMIÈRE',
        title: 'Changez le match, gardez le travail.',
        kind: 'columns',
        cols: [
          { eyebrow: 'CONTEXTE', title: 'Un clic pour le match suivant', desc: 'Couverture, chiffres et classements se recalculent. Vos textes restent, marqués « À relire » jusqu’à ce que vous les validiez.' },
          { eyebrow: 'MODÈLE', title: 'Votre format, pour tout le staff', desc: 'Enregistrez la présentation comme modèle de l’équipe : le prochain debrief part de vos pages et de vos blocs.' },
          { eyebrow: 'SORTIE', title: 'Présenter, partager, imprimer', desc: 'Plein écran au vestiaire, lien en lecture seule avec initiales et données médicales exclues, ou PDF.' },
        ],
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
    },
    sections: [
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
        kicker: 'AFTER THE FIRST ONE',
        title: 'Change the match, keep the work.',
        kind: 'columns',
        cols: [
          { eyebrow: 'CONTEXT', title: 'One click for the next match', desc: 'Cover, figures and rankings are recomputed. Your texts stay, flagged “To review” until you sign them off.' },
          { eyebrow: 'TEMPLATE', title: 'Your format, for the whole staff', desc: 'Save the presentation as a team template: the next debrief starts from your pages and blocks.' },
          { eyebrow: 'OUTPUT', title: 'Present, share, print', desc: 'Full screen in the dressing room, a read-only link with initials and medical data left out, or a PDF.' },
        ],
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
    },
    sections: [
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
        kicker: 'NA DE EERSTE',
        title: 'Verander de wedstrijd, behoud het werk.',
        kind: 'columns',
        cols: [
          { eyebrow: 'CONTEXT', title: 'Eén klik voor de volgende wedstrijd', desc: 'Cover, cijfers en rangschikkingen worden herberekend. Jouw teksten blijven, gemarkeerd als “Na te lezen” tot je ze bevestigt.' },
          { eyebrow: 'SJABLOON', title: 'Jouw formaat, voor de hele staf', desc: 'Sla de presentatie op als teamsjabloon: de volgende analyse vertrekt van jouw pagina’s en blokken.' },
          { eyebrow: 'OUTPUT', title: 'Presenteren, delen, afdrukken', desc: 'Volledig scherm in de kleedkamer, een alleen-lezenlink met initialen en zonder medische data, of een pdf.' },
        ],
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
    },
    sections: [
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
        kicker: 'NACH DEM ERSTEN MAL',
        title: 'Spiel wechseln, Arbeit behalten.',
        kind: 'columns',
        cols: [
          { eyebrow: 'KONTEXT', title: 'Ein Klick für das nächste Spiel', desc: 'Deckblatt, Zahlen und Ranglisten werden neu berechnet. Ihre Texte bleiben, als „Zu prüfen“ markiert, bis Sie sie freigeben.' },
          { eyebrow: 'VORLAGE', title: 'Ihr Format, für den ganzen Staff', desc: 'Speichern Sie die Präsentation als Teamvorlage: Die nächste Nachbesprechung startet mit Ihren Seiten und Blöcken.' },
          { eyebrow: 'AUSGABE', title: 'Präsentieren, teilen, drucken', desc: 'Vollbild in der Kabine, ein Nur-Lese-Link mit Initialen und ohne medizinische Daten, oder ein PDF.' },
        ],
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
    },
    sections: [
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
        kicker: 'DEPOIS DA PRIMEIRA',
        title: 'Mude o jogo, guarde o trabalho.',
        kind: 'columns',
        cols: [
          { eyebrow: 'CONTEXTO', title: 'Um clique para o jogo seguinte', desc: 'Capa, números e classificações são recalculados. Os seus textos mantêm-se, marcados “A rever” até os validar.' },
          { eyebrow: 'MODELO', title: 'O seu formato, para todo o staff', desc: 'Guarde a apresentação como modelo da equipa: a próxima análise parte das suas páginas e blocos.' },
          { eyebrow: 'SAÍDA', title: 'Apresentar, partilhar, imprimir', desc: 'Ecrã inteiro no balneário, um link só de leitura com iniciais e sem dados médicos, ou um PDF.' },
        ],
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
    },
    sections: [
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
        kicker: 'DESPUÉS DE LA PRIMERA',
        title: 'Cambia el partido, conserva el trabajo.',
        kind: 'columns',
        cols: [
          { eyebrow: 'CONTEXTO', title: 'Un clic para el partido siguiente', desc: 'Portada, cifras y clasificaciones se recalculan. Tus textos se mantienen, marcados «Por revisar» hasta que los valides.' },
          { eyebrow: 'PLANTILLA', title: 'Tu formato, para todo el staff', desc: 'Guarda la presentación como plantilla del equipo: el próximo análisis parte de tus páginas y tus bloques.' },
          { eyebrow: 'SALIDA', title: 'Presentar, compartir, imprimir', desc: 'Pantalla completa en el vestuario, un enlace de solo lectura con iniciales y sin datos médicos, o un PDF.' },
        ],
      },
    ],
  },
};
