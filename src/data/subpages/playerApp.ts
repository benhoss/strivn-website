/**
 * Player app — four screens, and a list of what the player deliberately never
 * sees. The privacy section is the reason a squad adopts the app at all, so
 * it gets a band rather than a footnote.
 */
import type { SubpageLocales } from './types';

export const playerApp: SubpageLocales = {
  fr: {
    meta: {
      title: 'App joueur | STRIVN',
      description:
        'Un lien d’invitation, pas de mot de passe. Agenda, convocations, check-in et programmes. Rien de ce qui appartient aux autres.',
    },
    hero: {
      kicker: 'APP JOUEUR',
      title: 'Vos joueurs n’ont rien à installer.',
      sub: 'Un lien d’invitation, pas de mot de passe. L’app STRIVN Player existe pour ceux qui la veulent, mais tout fonctionne aussi depuis un navigateur.',
      bullets: [
        'Aucun compte à créer — un lien d’invitation suffit',
        'Agenda, convocations, check-in, notifications',
        'Programmes et séances de musculation à sa charge',
        'Réponses de check-in visibles du staff uniquement',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir le check-in', href: '/fr/features/check-in/' },
      },
      visual: 'player-phone',
    },
    sections: [
      {
        kicker: 'LES ÉCRANS',
        title: 'Son agenda, ses convocations, son check-in.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Agenda',
            desc: 'Séances et matchs à venir, avec date, heure et lieu. Aucune information d’équipe à laquelle il n’a pas droit.',
          },
          {
            icon: 'bell',
            title: 'Convocations',
            desc: 'Répondre en un tap. La réponse reste modifiable jusqu’au début de l’événement.',
          },
          {
            icon: 'clipboard-list',
            title: 'Check-in',
            desc: 'Moins d’une minute : sommeil, fatigue, douleur, motivation. C’est la matière première du readiness.',
          },
          {
            icon: 'zap',
            title: 'Notifications',
            desc: 'Rappel de check-in, nouvelle convocation, changement d’horaire. À activer à la première ouverture.',
          },
          {
            icon: 'list',
            title: 'Programmes & musculation',
            desc: 'Le workout du jour avec vidéos, et les charges déjà calculées sur son propre 1RM.',
          },
          {
            icon: 'file-text',
            title: 'Documents & mesures',
            desc: 'Documents partagés par le staff, et saisie de ses propres mesures lors d’une campagne.',
          },
        ],
      },
      {
        kicker: 'CE QUE LE JOUEUR NE VOIT PAS',
        title: 'Chaque joueur ne voit que le sien.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'LES AUTRES',
            title: 'Les données des autres',
            desc: 'Un joueur n’accède qu’à ses propres données. Aucune comparaison publique, aucun classement d’effectif.',
          },
          {
            eyebrow: 'L’ANALYSE',
            title: 'Vos analyses de match',
            desc: 'Les erreurs qu’un coach attribue en analyse ne remontent jamais au joueur. La règle est dans le produit, pas dans une consigne.',
          },
          {
            eyebrow: 'LES ENFANTS',
            title: 'Portail parent',
            desc: 'Sur une équipe en mode « enfants », tout passe par les parents, avec un consentement explicite.',
          },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: 'Player app | STRIVN',
      description:
        'An invitation link, no password. Schedule, call-ups, check-in and programs. Nothing that belongs to anyone else.',
    },
    hero: {
      kicker: 'PLAYER APP',
      title: 'Your players have nothing to install.',
      sub: 'An invitation link, no password. The STRIVN Player app exists for those who want it, but everything also works from a browser.',
      bullets: [
        'No account to create — an invitation link is enough',
        'Schedule, call-ups, check-in, notifications',
        'Programs and strength sessions with their own weights',
        'Check-in answers visible to the staff only',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See check-in', href: '/en/features/check-in/' },
      },
      visual: 'player-phone',
    },
    sections: [
      {
        kicker: 'THE SCREENS',
        title: 'Their schedule, their call-ups, their check-in.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Schedule',
            desc: 'Upcoming sessions and matches, with date, time and venue. No team information they are not entitled to.',
          },
          {
            icon: 'bell',
            title: 'Call-ups',
            desc: 'Answer in a tap. The answer stays editable until the event starts.',
          },
          {
            icon: 'clipboard-list',
            title: 'Check-in',
            desc: 'Under a minute: sleep, fatigue, pain, motivation. It is the raw material of readiness.',
          },
          {
            icon: 'zap',
            title: 'Notifications',
            desc: 'Check-in reminder, new call-up, schedule change. Enabled on first open.',
          },
          {
            icon: 'list',
            title: 'Programs & strength',
            desc: 'Today’s workout with videos, and the weights already worked out from their own 1RM.',
          },
          {
            icon: 'file-text',
            title: 'Documents & measures',
            desc: 'Documents shared by the staff, and entering their own results during a campaign.',
          },
        ],
      },
      {
        kicker: 'WHAT THE PLAYER DOES NOT SEE',
        title: 'Each player sees only their own.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'THE OTHERS',
            title: 'Other players’ data',
            desc: 'A player reaches only their own data. No public comparison, no squad ranking.',
          },
          {
            eyebrow: 'THE ANALYSIS',
            title: 'Your match analysis',
            desc: 'Errors a coach attributes in analysis never reach the player. The rule is in the product, not in a policy.',
          },
          {
            eyebrow: 'CHILDREN',
            title: 'Parent portal',
            desc: 'On a team in “children” mode, everything goes through the parents, with explicit consent.',
          },
        ],
      },
    ],
  },

  nl: {
    meta: {
      title: 'Spelers-app | STRIVN',
      description:
        'Een uitnodigingslink, geen wachtwoord. Agenda, oproepingen, check-in en programma’s. Niets wat aan iemand anders toebehoort.',
    },
    hero: {
      kicker: 'SPELERS-APP',
      title: 'Je spelers moeten niets installeren.',
      sub: 'Een uitnodigingslink, geen wachtwoord. De app STRIVN Player bestaat voor wie ze wil, maar alles werkt ook vanuit een browser.',
      bullets: [
        'Geen account aan te maken — een uitnodigingslink volstaat',
        'Agenda, oproepingen, check-in, meldingen',
        'Programma’s en krachttrainingen met eigen gewichten',
        'Check-in-antwoorden enkel zichtbaar voor de staf',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Check-in bekijken', href: '/nl/features/check-in/' },
      },
      visual: 'player-phone',
    },
    sections: [
      {
        kicker: 'DE SCHERMEN',
        title: 'Eigen agenda, eigen selecties, eigen check-in.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Agenda',
            desc: 'Komende trainingen en wedstrijden, met datum, uur en plaats. Geen ploeginformatie waar hij geen recht op heeft.',
          },
          {
            icon: 'bell',
            title: 'Oproepingen',
            desc: 'Antwoorden in één tik. Het antwoord blijft aanpasbaar tot de activiteit begint.',
          },
          {
            icon: 'clipboard-list',
            title: 'Check-in',
            desc: 'Minder dan een minuut: slaap, vermoeidheid, pijn, motivatie. Dat is de grondstof van readiness.',
          },
          {
            icon: 'zap',
            title: 'Meldingen',
            desc: 'Herinnering voor de check-in, nieuwe oproeping, uurwijziging. Aan te zetten bij de eerste opening.',
          },
          {
            icon: 'list',
            title: 'Programma’s & kracht',
            desc: 'De workout van de dag met video’s, en de gewichten al berekend op zijn eigen 1RM.',
          },
          {
            icon: 'file-text',
            title: 'Documenten & metingen',
            desc: 'Documenten gedeeld door de staf, en het invoeren van zijn eigen resultaten tijdens een campagne.',
          },
        ],
      },
      {
        kicker: 'WAT DE SPELER NIET ZIET',
        title: 'Elke speler ziet alleen het eigen dossier.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'DE ANDEREN',
            title: 'De data van de anderen',
            desc: 'Een speler komt enkel bij zijn eigen data. Geen publieke vergelijking, geen ranglijst van de kern.',
          },
          {
            eyebrow: 'DE ANALYSE',
            title: 'Jouw wedstrijdanalyses',
            desc: 'Fouten die een coach in de analyse toewijst bereiken de speler nooit. De regel zit in het product, niet in een afspraak.',
          },
          {
            eyebrow: 'DE KINDEREN',
            title: 'Ouderportaal',
            desc: 'Bij een ploeg in “kinderen”-modus loopt alles via de ouders, met uitdrukkelijke toestemming.',
          },
        ],
      },
    ],
  },

  de: {
    meta: {
      title: 'Spieler-App | STRIVN',
      description:
        'Ein Einladungslink, kein Passwort. Terminplan, Aufgebote, Check-in und Programme. Nichts, was anderen gehört.',
    },
    hero: {
      kicker: 'SPIELER-APP',
      title: 'Ihre Spieler müssen nichts installieren.',
      sub: 'Ein Einladungslink, kein Passwort. Die App STRIVN Player gibt es für alle, die sie wollen, aber alles funktioniert auch im Browser.',
      bullets: [
        'Kein Konto anzulegen — ein Einladungslink genügt',
        'Terminplan, Aufgebote, Check-in, Benachrichtigungen',
        'Programme und Krafteinheiten mit eigenen Gewichten',
        'Check-in-Antworten nur für den Staff sichtbar',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Check-in ansehen', href: '/de/features/check-in/' },
      },
      visual: 'player-phone',
    },
    sections: [
      {
        kicker: 'DIE ANSICHTEN',
        title: 'Der eigene Kalender, die eigenen Aufgebote, der eigene Check-in.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Terminplan',
            desc: 'Kommende Einheiten und Spiele, mit Datum, Uhrzeit und Ort. Keine Mannschaftsinformation, auf die er kein Anrecht hat.',
          },
          {
            icon: 'bell',
            title: 'Aufgebote',
            desc: 'Antworten mit einem Tippen. Die Antwort bleibt bis zum Beginn des Termins änderbar.',
          },
          {
            icon: 'clipboard-list',
            title: 'Check-in',
            desc: 'Unter einer Minute: Schlaf, Ermüdung, Schmerz, Motivation. Das ist der Rohstoff der Readiness.',
          },
          {
            icon: 'zap',
            title: 'Benachrichtigungen',
            desc: 'Check-in-Erinnerung, neues Aufgebot, Zeitänderung. Beim ersten Öffnen zu aktivieren.',
          },
          {
            icon: 'list',
            title: 'Programme & Kraft',
            desc: 'Das Workout des Tages mit Videos, und die Gewichte bereits aus seinem eigenen 1RM berechnet.',
          },
          {
            icon: 'file-text',
            title: 'Dokumente & Messwerte',
            desc: 'Vom Staff geteilte Dokumente, und die Eingabe eigener Ergebnisse während einer Kampagne.',
          },
        ],
      },
      {
        kicker: 'WAS DER SPIELER NICHT SIEHT',
        title: 'Jeder Spieler sieht nur die eigene Akte.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'DIE ANDEREN',
            title: 'Die Daten der anderen',
            desc: 'Ein Spieler erreicht nur seine eigenen Daten. Kein öffentlicher Vergleich, keine Kaderrangliste.',
          },
          {
            eyebrow: 'DIE ANALYSE',
            title: 'Ihre Spielanalysen',
            desc: 'Fehler, die ein Trainer in der Analyse zuordnet, erreichen den Spieler nie. Die Regel steckt im Produkt, nicht in einer Absprache.',
          },
          {
            eyebrow: 'DIE KINDER',
            title: 'Elternportal',
            desc: 'Bei einer Mannschaft im Modus „Kinder“ läuft alles über die Eltern, mit ausdrücklicher Einwilligung.',
          },
        ],
      },
    ],
  },

  pt: {
    meta: {
      title: 'App do jogador | STRIVN',
      description:
        'Uma ligação de convite, sem palavra-passe. Agenda, convocatórias, check-in e programas. Nada do que pertence aos outros.',
    },
    hero: {
      kicker: 'APP DO JOGADOR',
      title: 'Os seus jogadores não têm nada a instalar.',
      sub: 'Uma ligação de convite, sem palavra-passe. A app STRIVN Player existe para quem a quiser, mas tudo funciona também a partir de um navegador.',
      bullets: [
        'Nenhuma conta a criar — uma ligação de convite chega',
        'Agenda, convocatórias, check-in, notificações',
        'Programas e treinos de força com os seus próprios pesos',
        'Respostas de check-in visíveis apenas para o staff',
      ],
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver o check-in', href: '/pt/features/check-in/' },
      },
      visual: 'player-phone',
    },
    sections: [
      {
        kicker: 'OS ECRÃS',
        title: 'A sua agenda, as suas convocatórias, o seu check-in.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Agenda',
            desc: 'Treinos e jogos por vir, com data, hora e local. Nenhuma informação de equipa a que não tenha direito.',
          },
          {
            icon: 'bell',
            title: 'Convocatórias',
            desc: 'Responder num toque. A resposta continua alterável até ao início do evento.',
          },
          {
            icon: 'clipboard-list',
            title: 'Check-in',
            desc: 'Menos de um minuto: sono, fadiga, dor, motivação. É a matéria-prima do readiness.',
          },
          {
            icon: 'zap',
            title: 'Notificações',
            desc: 'Lembrete de check-in, nova convocatória, mudança de horário. A ativar na primeira abertura.',
          },
          {
            icon: 'list',
            title: 'Programas e força',
            desc: 'O workout do dia com vídeos, e as cargas já calculadas sobre a sua própria 1RM.',
          },
          {
            icon: 'file-text',
            title: 'Documentos e medidas',
            desc: 'Documentos partilhados pelo staff, e o registo dos seus próprios resultados durante uma campanha.',
          },
        ],
      },
      {
        kicker: 'O QUE O JOGADOR NÃO VÊ',
        title: 'Cada jogador vê apenas o seu.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'OS OUTROS',
            title: 'Os dados dos outros',
            desc: 'Um jogador só acede aos seus próprios dados. Nenhuma comparação pública, nenhuma classificação do plantel.',
          },
          {
            eyebrow: 'A ANÁLISE',
            title: 'As suas análises de jogo',
            desc: 'Os erros que um treinador atribui em análise nunca chegam ao jogador. A regra está no produto, não numa instrução.',
          },
          {
            eyebrow: 'AS CRIANÇAS',
            title: 'Portal dos pais',
            desc: 'Numa equipa em modo «crianças», tudo passa pelos pais, com consentimento explícito.',
          },
        ],
      },
    ],
  },

  es: {
    meta: {
      title: 'App del jugador | STRIVN',
      description:
        'Un enlace de invitación, sin contraseña. Agenda, convocatorias, check-in y programas. Nada que pertenezca a los demás.',
    },
    hero: {
      kicker: 'APP DEL JUGADOR',
      title: 'Tus jugadores no tienen nada que instalar.',
      sub: 'Un enlace de invitación, sin contraseña. La app STRIVN Player existe para quien la quiera, pero todo funciona también desde un navegador.',
      bullets: [
        'Ninguna cuenta que crear — basta un enlace de invitación',
        'Agenda, convocatorias, check-in, notificaciones',
        'Programas y sesiones de fuerza con sus propios pesos',
        'Respuestas de check-in visibles solo para el staff',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver el check-in', href: '/es/features/check-in/' },
      },
      visual: 'player-phone',
    },
    sections: [
      {
        kicker: 'LAS PANTALLAS',
        title: 'Su agenda, sus convocatorias, su check-in.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Agenda',
            desc: 'Sesiones y partidos por venir, con fecha, hora y lugar. Ninguna información de equipo a la que no tenga derecho.',
          },
          {
            icon: 'bell',
            title: 'Convocatorias',
            desc: 'Responder en un toque. La respuesta sigue siendo modificable hasta el inicio del evento.',
          },
          {
            icon: 'clipboard-list',
            title: 'Check-in',
            desc: 'Menos de un minuto: sueño, fatiga, dolor, motivación. Es la materia prima del readiness.',
          },
          {
            icon: 'zap',
            title: 'Notificaciones',
            desc: 'Recordatorio de check-in, nueva convocatoria, cambio de horario. A activar en la primera apertura.',
          },
          {
            icon: 'list',
            title: 'Programas y fuerza',
            desc: 'El workout del día con vídeos, y las cargas ya calculadas sobre su propio 1RM.',
          },
          {
            icon: 'file-text',
            title: 'Documentos y medidas',
            desc: 'Documentos compartidos por el staff, y la entrada de sus propios resultados durante una campaña.',
          },
        ],
      },
      {
        kicker: 'LO QUE EL JUGADOR NO VE',
        title: 'Cada jugador ve solo el suyo.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'LOS DEMÁS',
            title: 'Los datos de los demás',
            desc: 'Un jugador solo accede a sus propios datos. Ninguna comparación pública, ninguna clasificación de plantilla.',
          },
          {
            eyebrow: 'EL ANÁLISIS',
            title: 'Tus análisis de partido',
            desc: 'Los errores que un entrenador atribuye en análisis nunca llegan al jugador. La regla está en el producto, no en una consigna.',
          },
          {
            eyebrow: 'LOS NIÑOS',
            title: 'Portal de padres',
            desc: 'En un equipo en modo «niños», todo pasa por los padres, con consentimiento explícito.',
          },
        ],
      },
    ],
  },
};
