/**
 * Team management — the day-to-day the staff runs from one screen, feeding on
 * the same data as the monitoring side.
 */
import type { SubpageLocales } from './types';

export const teamManagement: SubpageLocales = {
  fr: {
    meta: {
      title: 'Gestion d’équipe | STRIVN',
      description:
        'Effectif, calendrier, convocations, présences, feuille de match : le quotidien d’une équipe tient dans un seul espace, nourri des mêmes données que le monitoring.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · ÉQUIPE',
      title: 'L’intendance de l’équipe, sans le classeur.',
      sub: 'Effectif, calendrier, convocations, présences, feuille de match : le quotidien d’une équipe tient dans un seul espace et se nourrit des mêmes données que le monitoring.',
      bullets: [
        'Effectif : actifs, blessés, inactifs, joueurs à l’essai',
        'Calendrier avec duplication de semaine',
        'Convocations avec réponses et relances',
        'Séance et match en direct, même sans réseau',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir les présences', href: '/fr/features/attendance/' },
      },
      visual: 'squad-list',
    },
    sections: [
      {
        kicker: 'LE QUOTIDIEN D’ÉQUIPE',
        title: 'Ce que le staff pilote depuis un seul écran.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Calendrier & événements',
            desc: 'Séances, matchs et soins. « Copier → » duplique toute une semaine vers la suivante.',
          },
          {
            icon: 'bell',
            title: 'Convocations',
            desc: 'Modèles par type d’événement, relances ciblées, réponse modifiable jusqu’au coup d’envoi.',
          },
          {
            icon: 'user-check',
            title: 'Présences',
            desc: 'Présent, Adapté — présent avec restriction — ou absent. La nuance compte dans les moyennes.',
          },
          {
            icon: 'timer',
            title: 'Séance en direct',
            desc: '« Démarrer la séance » ouvre le runner plein écran : présences, chrono, blocs, équipes et score — même sans réseau.',
          },
          {
            icon: 'radio',
            title: 'Match en direct & analyse des buts',
            desc: 'Feuille de match, minutes, événements. La saisie du coach fait foi et n’est jamais écrasée.',
          },
          {
            icon: 'file-text',
            title: 'Documents',
            desc: 'Fichiers partagés avec suivi de lecture : compteur X/Y vu et date par joueur.',
          },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: 'Team management | STRIVN',
      description:
        'Squad, calendar, call-ups, attendance, team sheet: a team’s day-to-day in one space, fed by the same data as the monitoring side.',
    },
    hero: {
      kicker: 'FEATURES · TEAM',
      title: 'Running the team, without the ring binder.',
      sub: 'Squad, calendar, call-ups, attendance, team sheet: a team’s day-to-day fits in one space and feeds on the same data as the monitoring side.',
      bullets: [
        'Squad: active, injured, inactive, trialists',
        'Calendar with week duplication',
        'Call-ups with answers and reminders',
        'Session and match live, even with no network',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See attendance', href: '/en/features/attendance/' },
      },
      visual: 'squad-list',
    },
    sections: [
      {
        kicker: 'THE TEAM’S DAY-TO-DAY',
        title: 'What the staff runs from one screen.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Calendar & events',
            desc: 'Sessions, matches and treatment. “Copy →” duplicates a whole week onto the next.',
          },
          {
            icon: 'bell',
            title: 'Call-ups',
            desc: 'Templates per event type, targeted reminders, answers editable up to kick-off.',
          },
          {
            icon: 'user-check',
            title: 'Attendance',
            desc: 'Present, Adapted — present with a restriction — or absent. The nuance counts in the averages.',
          },
          {
            icon: 'timer',
            title: 'Live session',
            desc: '“Start the session” opens the full-screen runner: attendance, timer, blocks, teams and score — even with no network.',
          },
          {
            icon: 'radio',
            title: 'Live match & goal review',
            desc: 'Team sheet, minutes, events. What the coach enters stands and is never overwritten.',
          },
          {
            icon: 'file-text',
            title: 'Documents',
            desc: 'Shared files with read tracking: an X/Y seen counter and a date per player.',
          },
        ],
      },
    ],
  },

  nl: {
    meta: {
      title: 'Teambeheer | STRIVN',
      description:
        'Kern, kalender, oproepingen, aanwezigheden, wedstrijdblad: het dagelijkse van een ploeg in één ruimte, gevoed door dezelfde data als de opvolging.',
    },
    hero: {
      kicker: 'FUNCTIES · PLOEG',
      title: 'Het beheer van de ploeg, zonder de ordner.',
      sub: 'Kern, kalender, oproepingen, aanwezigheden, wedstrijdblad: het dagelijkse van een ploeg past in één ruimte en voedt zich met dezelfde data als de opvolging.',
      bullets: [
        'Kern: actief, geblesseerd, inactief, spelers op proef',
        'Kalender met weekduplicatie',
        'Oproepingen met antwoorden en herinneringen',
        'Training en wedstrijd live, ook zonder netwerk',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Aanwezigheden bekijken', href: '/nl/features/attendance/' },
      },
      visual: 'squad-list',
    },
    sections: [
      {
        kicker: 'HET DAGELIJKSE VAN DE PLOEG',
        title: 'Wat de staf vanaf één scherm bestuurt.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Kalender & activiteiten',
            desc: 'Trainingen, wedstrijden en verzorging. “Kopiëren →” dupliceert een hele week naar de volgende.',
          },
          {
            icon: 'bell',
            title: 'Oproepingen',
            desc: 'Sjablonen per type activiteit, gerichte herinneringen, antwoord aanpasbaar tot de aftrap.',
          },
          {
            icon: 'user-check',
            title: 'Aanwezigheden',
            desc: 'Aanwezig, Aangepast — aanwezig met beperking — of afwezig. De nuance telt mee in de gemiddelden.',
          },
          {
            icon: 'timer',
            title: 'Live training',
            desc: '“Training starten” opent de schermvullende runner: aanwezigheden, chrono, blokken, ploegen en score — ook zonder netwerk.',
          },
          {
            icon: 'radio',
            title: 'Live wedstrijd & doelpuntenanalyse',
            desc: 'Wedstrijdblad, minuten, gebeurtenissen. Wat de coach invoert geldt en wordt nooit overschreven.',
          },
          {
            icon: 'file-text',
            title: 'Documenten',
            desc: 'Gedeelde bestanden met leesopvolging: een teller X/Y gezien en een datum per speler.',
          },
        ],
      },
    ],
  },

  de: {
    meta: {
      title: 'Team-Management | STRIVN',
      description:
        'Kader, Kalender, Aufgebote, Anwesenheiten, Spielberichtsbogen: der Alltag einer Mannschaft in einem Raum, gespeist von denselben Daten wie das Monitoring.',
    },
    hero: {
      kicker: 'FUNKTIONEN · MANNSCHAFT',
      title: 'Die Organisation der Mannschaft, ohne Ordner.',
      sub: 'Kader, Kalender, Aufgebote, Anwesenheiten, Spielberichtsbogen: der Alltag einer Mannschaft passt in einen Raum und speist sich aus denselben Daten wie das Monitoring.',
      bullets: [
        'Kader: aktiv, verletzt, inaktiv, Spieler im Probetraining',
        'Kalender mit Wochenduplikat',
        'Aufgebote mit Rückmeldungen und Erinnerungen',
        'Einheit und Spiel live, auch ohne Netz',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Anwesenheiten ansehen', href: '/de/features/attendance/' },
      },
      visual: 'squad-list',
    },
    sections: [
      {
        kicker: 'DER MANNSCHAFTSALLTAG',
        title: 'Was der Staff von einem Bildschirm aus steuert.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Kalender & Termine',
            desc: 'Einheiten, Spiele und Behandlungen. „Kopieren →“ dupliziert eine ganze Woche auf die nächste.',
          },
          {
            icon: 'bell',
            title: 'Aufgebote',
            desc: 'Vorlagen je Terminart, gezielte Erinnerungen, Antwort bis zum Anpfiff änderbar.',
          },
          {
            icon: 'user-check',
            title: 'Anwesenheiten',
            desc: 'Anwesend, Angepasst — anwesend mit Einschränkung — oder abwesend. Die Nuance zählt in den Mittelwerten.',
          },
          {
            icon: 'timer',
            title: 'Live-Einheit',
            desc: '„Einheit starten“ öffnet den Vollbild-Runner: Anwesenheiten, Uhr, Blöcke, Teams und Ergebnis — auch ohne Netz.',
          },
          {
            icon: 'radio',
            title: 'Live-Spiel & Torauswertung',
            desc: 'Spielberichtsbogen, Minuten, Ereignisse. Was der Trainer einträgt, gilt und wird nie überschrieben.',
          },
          {
            icon: 'file-text',
            title: 'Dokumente',
            desc: 'Geteilte Dateien mit Leseverfolgung: ein X/Y-gesehen-Zähler und ein Datum je Spieler.',
          },
        ],
      },
    ],
  },

  pt: {
    meta: {
      title: 'Gestão de equipa | STRIVN',
      description:
        'Plantel, calendário, convocatórias, presenças, ficha de jogo: o dia a dia de uma equipa num só espaço, alimentado pelos mesmos dados do acompanhamento.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · EQUIPA',
      title: 'A gestão da equipa, sem o dossiê.',
      sub: 'Plantel, calendário, convocatórias, presenças, ficha de jogo: o dia a dia de uma equipa cabe num só espaço e alimenta-se dos mesmos dados do acompanhamento.',
      bullets: [
        'Plantel: ativos, lesionados, inativos, jogadores à experiência',
        'Calendário com duplicação de semana',
        'Convocatórias com respostas e lembretes',
        'Treino e jogo em direto, mesmo sem rede',
      ],
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver as presenças', href: '/pt/features/attendance/' },
      },
      visual: 'squad-list',
    },
    sections: [
      {
        kicker: 'O DIA A DIA DA EQUIPA',
        title: 'O que o staff conduz a partir de um só ecrã.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Calendário e eventos',
            desc: 'Treinos, jogos e tratamentos. «Copiar →» duplica uma semana inteira para a seguinte.',
          },
          {
            icon: 'bell',
            title: 'Convocatórias',
            desc: 'Modelos por tipo de evento, lembretes dirigidos, resposta alterável até ao pontapé de saída.',
          },
          {
            icon: 'user-check',
            title: 'Presenças',
            desc: 'Presente, Adaptado — presente com restrição — ou ausente. A nuance conta nas médias.',
          },
          {
            icon: 'timer',
            title: 'Treino em direto',
            desc: '«Iniciar o treino» abre o runner em ecrã cheio: presenças, cronómetro, blocos, equipas e resultado — mesmo sem rede.',
          },
          {
            icon: 'radio',
            title: 'Jogo em direto e análise dos golos',
            desc: 'Ficha de jogo, minutos, eventos. O que o treinador regista vale e nunca é sobreposto.',
          },
          {
            icon: 'file-text',
            title: 'Documentos',
            desc: 'Ficheiros partilhados com seguimento de leitura: contador X/Y visto e data por jogador.',
          },
        ],
      },
    ],
  },

  es: {
    meta: {
      title: 'Gestión de equipo | STRIVN',
      description:
        'Plantilla, calendario, convocatorias, asistencias, acta: el día a día de un equipo en un solo espacio, alimentado por los mismos datos que el seguimiento.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · EQUIPO',
      title: 'La gestión del equipo, sin el archivador.',
      sub: 'Plantilla, calendario, convocatorias, asistencias, acta: el día a día de un equipo cabe en un solo espacio y se alimenta de los mismos datos que el seguimiento.',
      bullets: [
        'Plantilla: activos, lesionados, inactivos, jugadores a prueba',
        'Calendario con duplicación de semana',
        'Convocatorias con respuestas y recordatorios',
        'Sesión y partido en directo, incluso sin red',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver las asistencias', href: '/es/features/attendance/' },
      },
      visual: 'squad-list',
    },
    sections: [
      {
        kicker: 'EL DÍA A DÍA DEL EQUIPO',
        title: 'Lo que el staff dirige desde una sola pantalla.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Calendario y eventos',
            desc: 'Sesiones, partidos y tratamientos. «Copiar →» duplica una semana entera en la siguiente.',
          },
          {
            icon: 'bell',
            title: 'Convocatorias',
            desc: 'Plantillas por tipo de evento, recordatorios dirigidos, respuesta modificable hasta el saque inicial.',
          },
          {
            icon: 'user-check',
            title: 'Asistencias',
            desc: 'Presente, Adaptado — presente con restricción — o ausente. El matiz cuenta en las medias.',
          },
          {
            icon: 'timer',
            title: 'Sesión en directo',
            desc: '«Iniciar la sesión» abre el runner a pantalla completa: asistencias, cronómetro, bloques, equipos y marcador — incluso sin red.',
          },
          {
            icon: 'radio',
            title: 'Partido en directo y análisis de goles',
            desc: 'Acta, minutos, eventos. Lo que registra el entrenador vale y nunca se sobrescribe.',
          },
          {
            icon: 'file-text',
            title: 'Documentos',
            desc: 'Archivos compartidos con seguimiento de lectura: contador X/Y visto y fecha por jugador.',
          },
        ],
      },
    ],
  },
};
