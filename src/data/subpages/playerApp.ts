/**
 * Player app — STRIVN Player, the app the player installs.
 *
 * The page used to open on "nothing to install", which sold the browser
 * fallback as the product. The product is a dedicated app on both stores, so
 * the hero leads with it and carries the two badges; the link fallback stays,
 * demoted to an aside on the download band where it belongs.
 *
 * The privacy section is the reason a squad adopts the app at all, so it gets
 * a band rather than a footnote.
 */
import type { SubpageLocales } from './types';

export const playerApp: SubpageLocales = {
  /* ────────────────────────────── FR ────────────────────────────── */
  fr: {
    meta: {
      title: 'App joueur STRIVN Player | STRIVN',
      description:
        'STRIVN Player, l’app du joueur sur iOS et Android : agenda, convocations, check-in du matin, RPE et séances de musculation. Chaque joueur n’y voit que ses propres données.',
    },
    hero: {
      kicker: 'APP JOUEUR',
      title: 'Une app dédiée, ouverte vingt secondes par jour.',
      sub: 'STRIVN Player se télécharge sur l’App Store et Google Play. Le joueur y répond à son check-in, accepte ses convocations et suit ses séances de musculation. Vous arrêtez de relancer par message.',
      bullets: [
        'Gratuite pour le joueur, sur iPhone et Android',
        'Le staff envoie l’invitation, le joueur rejoint son équipe',
        'Wellness au réveil, RPE après la séance',
        'Ses réponses partent au staff, jamais au groupe',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir le check-in', href: '/fr/features/check-in/' },
      },
      stores: 'player',
      visual: 'player-phone',
    },
    sections: [
      {
        kicker: 'DANS L’APP',
        title: 'Son agenda, ses convocations, son check-in.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Agenda',
            desc: 'Les séances et les matchs à venir, avec l’heure et le lieu. Quand le staff déplace une séance, l’agenda du joueur suit.',
          },
          {
            icon: 'bell',
            title: 'Convocations',
            desc: 'Répondre prend un tap. Le joueur peut revenir sur sa réponse jusqu’au début de l’événement.',
          },
          {
            icon: 'clipboard-list',
            title: 'Check-in',
            desc: 'Sommeil, fatigue, douleur, motivation. Moins d’une minute, et le staff a sa lecture du groupe avant la séance.',
          },
          {
            icon: 'dumbbell',
            title: 'Musculation',
            desc: 'Le workout du jour, avec les vidéos et les charges déjà calculées sur son propre 1RM.',
          },
          {
            icon: 'zap',
            title: 'Notifications',
            desc: 'Rappel de check-in, nouvelle convocation, changement d’horaire. Le joueur les active à la première ouverture.',
          },
          {
            icon: 'file-text',
            title: 'Documents & mesures',
            desc: 'Les documents partagés par le staff, et la saisie de ses propres mesures pendant une campagne de tests.',
          },
        ],
      },
      {
        kicker: 'UNE JOURNÉE',
        title: 'Au réveil, avant la séance, après la séance.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: '07:40',
            title: 'Au réveil',
            desc: 'Le check-in s’ouvre sur trois curseurs. Le joueur répond depuis son lit, et l’écran se referme.',
          },
          {
            num: '17:30',
            title: 'Avant la séance',
            desc: 'La convocation est partie la veille. Les réponses sont déjà dans la liste du staff au moment de composer le groupe.',
          },
          {
            num: '20:10',
            title: 'Après la séance',
            desc: 'Le RPE se donne en un geste. Si le staff préfère, il attend le check-in du lendemain matin.',
          },
        ],
        callouts: [
          {
            icon: 'dumbbell',
            text: 'La séance de musculation arrive dans l’app avec ses vidéos, et les charges recalculées sur le 1RM du joueur.',
            link: { label: 'Voir les programmes', href: '/fr/features/programs/' },
          },
        ],
      },
      {
        kicker: 'CE QUE LE JOUEUR NE VOIT PAS',
        title: 'Un joueur ne voit jamais le dossier d’un autre.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'LES AUTRES',
            title: 'Les données de l’effectif',
            desc: 'Chaque joueur accède à ses propres chiffres. Aucun classement d’équipe, aucune comparaison publique.',
          },
          {
            eyebrow: 'L’ANALYSE',
            title: 'Vos analyses de match',
            desc: 'Les erreurs qu’un coach attribue pendant l’analyse restent au staff. La règle est dans le produit, pas dans une consigne.',
          },
          {
            eyebrow: 'LES ENFANTS',
            title: 'Portail parent',
            desc: 'Sur une équipe en mode enfants, l’invitation part au parent et tout passe par lui, avec un consentement explicite.',
          },
        ],
      },
      {
        kicker: 'TÉLÉCHARGEMENT',
        title: 'STRIVN Player, sur l’App Store et Google Play.',
        body: 'Le staff ajoute le joueur à l’effectif et lui envoie son invitation. Le joueur installe l’app et retrouve son équipe à la première ouverture.',
        kind: 'stores',
        app: 'player',
        note: {
          icon: 'link',
          label: 'Sans installation',
          desc: 'Un joueur qui préfère ne rien installer reçoit un lien et fait son check-in dans un navigateur. L’app lui apporte en plus l’agenda, les notifications et ses séances de musculation.',
        },
      },
    ],
  },

  /* ────────────────────────────── EN ────────────────────────────── */
  en: {
    meta: {
      title: 'STRIVN Player app | STRIVN',
      description:
        'STRIVN Player, the player’s app on iOS and Android: schedule, call-ups, morning check-in, RPE and strength sessions. Each player sees only their own data.',
    },
    hero: {
      kicker: 'PLAYER APP',
      title: 'A dedicated app, open twenty seconds a day.',
      sub: 'STRIVN Player downloads from the App Store and Google Play. The player answers their check-in there, accepts call-ups and follows their strength sessions. You stop chasing answers by message.',
      bullets: [
        'Free for the player, on iPhone and Android',
        'The staff sends the invitation, the player joins their team',
        'Wellness on waking, RPE after the session',
        'Their answers go to the staff, never to the group',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See check-in', href: '/en/features/check-in/' },
      },
      stores: 'player',
      visual: 'player-phone',
    },
    sections: [
      {
        kicker: 'INSIDE THE APP',
        title: 'Their schedule, their call-ups, their check-in.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Schedule',
            desc: 'Upcoming sessions and matches, with time and venue. When the staff moves a session, the player’s schedule follows.',
          },
          {
            icon: 'bell',
            title: 'Call-ups',
            desc: 'Answering takes a tap. The player can change that answer until the event starts.',
          },
          {
            icon: 'clipboard-list',
            title: 'Check-in',
            desc: 'Sleep, fatigue, pain, motivation. Under a minute, and the staff can read the squad before the session.',
          },
          {
            icon: 'dumbbell',
            title: 'Strength',
            desc: 'The workout of the day, with videos and the weights already worked out from their own 1RM.',
          },
          {
            icon: 'zap',
            title: 'Notifications',
            desc: 'Check-in reminder, new call-up, schedule change. The player turns them on at first open.',
          },
          {
            icon: 'file-text',
            title: 'Documents & measures',
            desc: 'Documents shared by the staff, and entering their own results during a testing campaign.',
          },
        ],
      },
      {
        kicker: 'ONE DAY',
        title: 'On waking, before the session, after the session.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: '07:40',
            title: 'On waking',
            desc: 'The check-in opens on three sliders. The player answers from bed, and the screen closes again.',
          },
          {
            num: '17:30',
            title: 'Before the session',
            desc: 'The call-up went out the day before. The answers are already in the staff’s list when the group gets picked.',
          },
          {
            num: '20:10',
            title: 'After the session',
            desc: 'RPE takes one gesture. If the staff prefers, it waits for the next morning’s check-in.',
          },
        ],
        callouts: [
          {
            icon: 'dumbbell',
            text: 'The strength session lands in the app with its videos, and with the weights recomputed from the player’s 1RM.',
            link: { label: 'See programs', href: '/en/features/programs/' },
          },
        ],
      },
      {
        kicker: 'WHAT THE PLAYER DOES NOT SEE',
        title: 'A player never sees another player’s file.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'THE OTHERS',
            title: 'The squad’s data',
            desc: 'Each player reaches their own figures. No team ranking, no public comparison.',
          },
          {
            eyebrow: 'THE ANALYSIS',
            title: 'Your match analysis',
            desc: 'Errors a coach attributes during analysis stay with the staff. The rule is in the product, not in a policy.',
          },
          {
            eyebrow: 'CHILDREN',
            title: 'Parent portal',
            desc: 'On a team in children mode, the invitation goes to the parent and everything passes through them, with explicit consent.',
          },
        ],
      },
      {
        kicker: 'DOWNLOAD',
        title: 'STRIVN Player, on the App Store and Google Play.',
        body: 'The staff adds the player to the squad and sends the invitation. The player installs the app and finds their team on first open.',
        kind: 'stores',
        app: 'player',
        note: {
          icon: 'link',
          label: 'Without installing',
          desc: 'A player who would rather install nothing gets a link and does their check-in in a browser. The app adds the schedule, the notifications and their strength sessions.',
        },
      },
    ],
  },

  /* ────────────────────────────── NL ────────────────────────────── */
  nl: {
    meta: {
      title: 'Spelers-app STRIVN Player | STRIVN',
      description:
        'STRIVN Player, de app van de speler op iOS en Android: agenda, oproepingen, ochtendcheck-in, RPE en krachttrainingen. Elke speler ziet alleen zijn eigen gegevens.',
    },
    hero: {
      kicker: 'SPELERS-APP',
      title: 'Een eigen app, twintig seconden per dag open.',
      sub: 'STRIVN Player download je in de App Store en op Google Play. Daar doet de speler zijn check-in, aanvaardt hij zijn oproepingen en volgt hij zijn krachttrainingen. Jij hoeft niets meer na te vragen via berichten.',
      bullets: [
        'Gratis voor de speler, op iPhone en Android',
        'De staf stuurt de uitnodiging, de speler vervoegt zijn ploeg',
        'Wellness bij het opstaan, RPE na de training',
        'Zijn antwoorden gaan naar de staf, nooit naar de groep',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Check-in bekijken', href: '/nl/features/check-in/' },
      },
      stores: 'player',
      visual: 'player-phone',
    },
    sections: [
      {
        kicker: 'IN DE APP',
        title: 'Eigen agenda, eigen oproepingen, eigen check-in.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Agenda',
            desc: 'Komende trainingen en wedstrijden, met uur en plaats. Verplaatst de staf een training, dan volgt de agenda van de speler.',
          },
          {
            icon: 'bell',
            title: 'Oproepingen',
            desc: 'Antwoorden kost één tik. De speler kan zijn antwoord aanpassen tot de activiteit begint.',
          },
          {
            icon: 'clipboard-list',
            title: 'Check-in',
            desc: 'Slaap, vermoeidheid, pijn, motivatie. Minder dan een minuut, en de staf leest de kern voor de training.',
          },
          {
            icon: 'dumbbell',
            title: 'Kracht',
            desc: 'De workout van de dag, met video’s en de gewichten al berekend op zijn eigen 1RM.',
          },
          {
            icon: 'zap',
            title: 'Meldingen',
            desc: 'Herinnering voor de check-in, nieuwe oproeping, uurwijziging. De speler zet ze aan bij de eerste opening.',
          },
          {
            icon: 'file-text',
            title: 'Documenten & metingen',
            desc: 'Documenten die de staf deelt, en het invoeren van eigen resultaten tijdens een testcampagne.',
          },
        ],
      },
      {
        kicker: 'EEN DAG',
        title: 'Bij het opstaan, voor de training, na de training.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: '07:40',
            title: 'Bij het opstaan',
            desc: 'De check-in opent op drie schuifjes. De speler antwoordt vanuit zijn bed en het scherm gaat weer dicht.',
          },
          {
            num: '17:30',
            title: 'Voor de training',
            desc: 'De oproeping vertrok de dag ervoor. De antwoorden staan al in de lijst van de staf wanneer de groep wordt samengesteld.',
          },
          {
            num: '20:10',
            title: 'Na de training',
            desc: 'De RPE geef je in één beweging. Verkiest de staf het anders, dan wacht die op de check-in van de volgende ochtend.',
          },
        ],
        callouts: [
          {
            icon: 'dumbbell',
            text: 'De krachttraining komt in de app met haar video’s, en met de gewichten herrekend op de 1RM van de speler.',
            link: { label: 'Programma’s bekijken', href: '/nl/features/programs/' },
          },
        ],
      },
      {
        kicker: 'WAT DE SPELER NIET ZIET',
        title: 'Een speler ziet nooit het dossier van een ander.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'DE ANDEREN',
            title: 'De data van de kern',
            desc: 'Elke speler komt bij zijn eigen cijfers. Geen ploegranglijst, geen publieke vergelijking.',
          },
          {
            eyebrow: 'DE ANALYSE',
            title: 'Jouw wedstrijdanalyses',
            desc: 'Fouten die een coach tijdens de analyse toewijst blijven bij de staf. De regel zit in het product, niet in een afspraak.',
          },
          {
            eyebrow: 'DE KINDEREN',
            title: 'Ouderportaal',
            desc: 'Bij een ploeg in kindermodus vertrekt de uitnodiging naar de ouder, en alles loopt via de ouder, met uitdrukkelijke toestemming.',
          },
        ],
      },
      {
        kicker: 'DOWNLOAD',
        title: 'STRIVN Player, in de App Store en op Google Play.',
        body: 'De staf voegt de speler toe aan de kern en stuurt zijn uitnodiging. De speler installeert de app en vindt zijn ploeg terug bij de eerste opening.',
        kind: 'stores',
        app: 'player',
        note: {
          icon: 'link',
          label: 'Zonder installatie',
          desc: 'Een speler die liever niets installeert, krijgt een link en doet zijn check-in in een browser. De app brengt daarbovenop de agenda, de meldingen en zijn krachttrainingen.',
        },
      },
    ],
  },

  /* ────────────────────────────── DE ────────────────────────────── */
  de: {
    meta: {
      title: 'Spieler-App STRIVN Player | STRIVN',
      description:
        'STRIVN Player, die App des Spielers für iOS und Android: Terminplan, Aufgebote, Check-in am Morgen, RPE und Krafteinheiten. Jeder Spieler sieht darin nur die eigenen Daten.',
    },
    hero: {
      kicker: 'SPIELER-APP',
      title: 'Eine eigene App, zwanzig Sekunden am Tag geöffnet.',
      sub: 'STRIVN Player lädt man im App Store und bei Google Play. Dort beantwortet der Spieler seinen Check-in, nimmt Aufgebote an und folgt seinen Krafteinheiten. Sie hören auf, per Nachricht nachzuhaken.',
      bullets: [
        'Für den Spieler kostenlos, auf iPhone und Android',
        'Der Staff schickt die Einladung, der Spieler tritt seiner Mannschaft bei',
        'Wellness nach dem Aufwachen, RPE nach der Einheit',
        'Seine Antworten gehen an den Staff, nie an die Gruppe',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Check-in ansehen', href: '/de/features/check-in/' },
      },
      stores: 'player',
      visual: 'player-phone',
    },
    sections: [
      {
        kicker: 'IN DER APP',
        title: 'Der eigene Kalender, die eigenen Aufgebote, der eigene Check-in.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Terminplan',
            desc: 'Kommende Einheiten und Spiele, mit Uhrzeit und Ort. Verlegt der Staff eine Einheit, zieht der Kalender des Spielers nach.',
          },
          {
            icon: 'bell',
            title: 'Aufgebote',
            desc: 'Antworten kostet ein Tippen. Der Spieler kann seine Antwort bis zum Beginn des Termins ändern.',
          },
          {
            icon: 'clipboard-list',
            title: 'Check-in',
            desc: 'Schlaf, Ermüdung, Schmerz, Motivation. Unter einer Minute, und der Staff liest den Kader vor der Einheit.',
          },
          {
            icon: 'dumbbell',
            title: 'Kraft',
            desc: 'Das Workout des Tages, mit Videos und den Gewichten, die schon aus seinem eigenen 1RM berechnet sind.',
          },
          {
            icon: 'zap',
            title: 'Benachrichtigungen',
            desc: 'Check-in-Erinnerung, neues Aufgebot, Zeitänderung. Der Spieler schaltet sie beim ersten Öffnen frei.',
          },
          {
            icon: 'file-text',
            title: 'Dokumente & Messwerte',
            desc: 'Vom Staff geteilte Dokumente, und die Eingabe eigener Ergebnisse während einer Testkampagne.',
          },
        ],
      },
      {
        kicker: 'EIN TAG',
        title: 'Nach dem Aufwachen, vor der Einheit, nach der Einheit.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: '07:40',
            title: 'Nach dem Aufwachen',
            desc: 'Der Check-in öffnet mit drei Reglern. Der Spieler antwortet aus dem Bett, dann schließt sich der Bildschirm wieder.',
          },
          {
            num: '17:30',
            title: 'Vor der Einheit',
            desc: 'Das Aufgebot ging am Vortag raus. Die Antworten stehen schon in der Liste des Staffs, wenn die Gruppe zusammengestellt wird.',
          },
          {
            num: '20:10',
            title: 'Nach der Einheit',
            desc: 'Den RPE gibt der Spieler mit einer Bewegung an. Wenn der Staff es so eingestellt hat, wartet er auf den Check-in am nächsten Morgen.',
          },
        ],
        callouts: [
          {
            icon: 'dumbbell',
            text: 'Die Krafteinheit landet mit ihren Videos in der App, die Gewichte neu berechnet auf das 1RM des Spielers.',
            link: { label: 'Programme ansehen', href: '/de/features/programs/' },
          },
        ],
      },
      {
        kicker: 'WAS DER SPIELER NICHT SIEHT',
        title: 'Ein Spieler sieht nie die Akte eines anderen.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'DIE ANDEREN',
            title: 'Die Daten des Kaders',
            desc: 'Jeder Spieler erreicht seine eigenen Zahlen. Keine Mannschaftsrangliste, kein öffentlicher Vergleich.',
          },
          {
            eyebrow: 'DIE ANALYSE',
            title: 'Ihre Spielanalysen',
            desc: 'Fehler, die ein Trainer in der Analyse zuordnet, bleiben beim Staff. Die Regel steckt im Produkt, nicht in einer Absprache.',
          },
          {
            eyebrow: 'DIE KINDER',
            title: 'Elternportal',
            desc: 'Bei einer Mannschaft im Kindermodus geht die Einladung an die Eltern, und alles läuft über sie, mit ausdrücklicher Einwilligung.',
          },
        ],
      },
      {
        kicker: 'DOWNLOAD',
        title: 'STRIVN Player, im App Store und bei Google Play.',
        body: 'Der Staff nimmt den Spieler in den Kader auf und schickt ihm seine Einladung. Der Spieler installiert die App und findet beim ersten Öffnen seine Mannschaft.',
        kind: 'stores',
        app: 'player',
        note: {
          icon: 'link',
          label: 'Ohne Installation',
          desc: 'Wer lieber nichts installiert, bekommt einen Link und macht seinen Check-in im Browser. Die App bringt zusätzlich den Terminplan, die Benachrichtigungen und seine Krafteinheiten.',
        },
      },
    ],
  },

  /* ────────────────────────────── PT ────────────────────────────── */
  pt: {
    meta: {
      title: 'App do jogador STRIVN Player | STRIVN',
      description:
        'STRIVN Player, a app do jogador em iOS e Android: agenda, convocatórias, check-in da manhã, RPE e treinos de força. Cada jogador vê apenas os seus próprios dados.',
    },
    hero: {
      kicker: 'APP DO JOGADOR',
      title: 'Uma app dedicada, aberta vinte segundos por dia.',
      sub: 'A STRIVN Player transfere-se na App Store e no Google Play. É aí que o jogador responde ao check-in, aceita as convocatórias e segue os treinos de força. Deixa de andar a insistir por mensagem.',
      bullets: [
        'Gratuita para o jogador, em iPhone e Android',
        'O staff envia o convite, o jogador entra na sua equipa',
        'Wellness ao acordar, RPE depois do treino',
        'As respostas vão para o staff, nunca para o grupo',
      ],
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver o check-in', href: '/pt/features/check-in/' },
      },
      stores: 'player',
      visual: 'player-phone',
    },
    sections: [
      {
        kicker: 'DENTRO DA APP',
        title: 'A sua agenda, as suas convocatórias, o seu check-in.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Agenda',
            desc: 'Treinos e jogos por vir, com hora e local. Quando o staff muda um treino, a agenda do jogador acompanha.',
          },
          {
            icon: 'bell',
            title: 'Convocatórias',
            desc: 'Responder é um toque. O jogador pode mudar a resposta até ao início do evento.',
          },
          {
            icon: 'clipboard-list',
            title: 'Check-in',
            desc: 'Sono, fadiga, dor, motivação. Menos de um minuto, e o staff lê o plantel antes do treino.',
          },
          {
            icon: 'dumbbell',
            title: 'Força',
            desc: 'O workout do dia, com os vídeos e as cargas já calculadas sobre a sua própria 1RM.',
          },
          {
            icon: 'zap',
            title: 'Notificações',
            desc: 'Lembrete de check-in, nova convocatória, mudança de horário. O jogador ativa-as na primeira abertura.',
          },
          {
            icon: 'file-text',
            title: 'Documentos e medidas',
            desc: 'Documentos partilhados pelo staff, e o registo dos seus próprios resultados durante uma campanha de testes.',
          },
        ],
      },
      {
        kicker: 'UM DIA',
        title: 'Ao acordar, antes do treino, depois do treino.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: '07:40',
            title: 'Ao acordar',
            desc: 'O check-in abre em três cursores. O jogador responde da cama e o ecrã volta a fechar-se.',
          },
          {
            num: '17:30',
            title: 'Antes do treino',
            desc: 'A convocatória saiu na véspera. As respostas já estão na lista do staff quando o grupo é definido.',
          },
          {
            num: '20:10',
            title: 'Depois do treino',
            desc: 'O RPE dá-se num gesto. Se o staff preferir, espera pelo check-in da manhã seguinte.',
          },
        ],
        callouts: [
          {
            icon: 'dumbbell',
            text: 'O treino de força chega à app com os vídeos, e com as cargas recalculadas sobre a 1RM do jogador.',
            link: { label: 'Ver os programas', href: '/pt/features/programs/' },
          },
        ],
      },
      {
        kicker: 'O QUE O JOGADOR NÃO VÊ',
        title: 'Um jogador nunca vê o processo de outro.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'OS OUTROS',
            title: 'Os dados do plantel',
            desc: 'Cada jogador chega aos seus próprios números. Sem classificação de equipa, sem comparação pública.',
          },
          {
            eyebrow: 'A ANÁLISE',
            title: 'As suas análises de jogo',
            desc: 'Os erros que um treinador atribui em análise ficam no staff. A regra está no produto, não numa instrução.',
          },
          {
            eyebrow: 'AS CRIANÇAS',
            title: 'Portal dos pais',
            desc: 'Numa equipa em modo crianças, o convite vai para o encarregado de educação e tudo passa por ele, com consentimento explícito.',
          },
        ],
      },
      {
        kicker: 'TRANSFERÊNCIA',
        title: 'STRIVN Player, na App Store e no Google Play.',
        body: 'O staff adiciona o jogador ao plantel e envia-lhe o convite. O jogador instala a app e encontra a sua equipa na primeira abertura.',
        kind: 'stores',
        app: 'player',
        note: {
          icon: 'link',
          label: 'Sem instalar',
          desc: 'Quem prefere não instalar nada recebe uma ligação e faz o check-in num navegador. A app acrescenta a agenda, as notificações e os treinos de força.',
        },
      },
    ],
  },

  /* ────────────────────────────── ES ────────────────────────────── */
  es: {
    meta: {
      title: 'App del jugador STRIVN Player | STRIVN',
      description:
        'STRIVN Player, la app del jugador en iOS y Android: agenda, convocatorias, check-in de la mañana, RPE y sesiones de fuerza. Cada jugador ve solo sus propios datos.',
    },
    hero: {
      kicker: 'APP DEL JUGADOR',
      title: 'Una app dedicada, abierta veinte segundos al día.',
      sub: 'STRIVN Player se descarga en la App Store y en Google Play. Ahí el jugador responde su check-in, acepta sus convocatorias y sigue sus sesiones de fuerza. Dejas de reclamar respuestas por mensaje.',
      bullets: [
        'Gratis para el jugador, en iPhone y Android',
        'El staff envía la invitación, el jugador entra en su equipo',
        'Wellness al despertar, RPE después de la sesión',
        'Sus respuestas van al staff, nunca al grupo',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver el check-in', href: '/es/features/check-in/' },
      },
      stores: 'player',
      visual: 'player-phone',
    },
    sections: [
      {
        kicker: 'DENTRO DE LA APP',
        title: 'Su agenda, sus convocatorias, su check-in.',
        kind: 'cards',
        cards: [
          {
            icon: 'calendar-days',
            title: 'Agenda',
            desc: 'Sesiones y partidos por venir, con hora y lugar. Si el staff mueve una sesión, la agenda del jugador va detrás.',
          },
          {
            icon: 'bell',
            title: 'Convocatorias',
            desc: 'Responder es un toque. El jugador puede cambiar su respuesta hasta el inicio del evento.',
          },
          {
            icon: 'clipboard-list',
            title: 'Check-in',
            desc: 'Sueño, fatiga, dolor, motivación. Menos de un minuto, y el staff lee la plantilla antes de la sesión.',
          },
          {
            icon: 'dumbbell',
            title: 'Fuerza',
            desc: 'El workout del día, con los vídeos y las cargas ya calculadas sobre su propio 1RM.',
          },
          {
            icon: 'zap',
            title: 'Notificaciones',
            desc: 'Recordatorio de check-in, nueva convocatoria, cambio de horario. El jugador las activa en la primera apertura.',
          },
          {
            icon: 'file-text',
            title: 'Documentos y medidas',
            desc: 'Documentos compartidos por el staff, y la entrada de sus propios resultados durante una campaña de tests.',
          },
        ],
      },
      {
        kicker: 'UN DÍA',
        title: 'Al despertar, antes de la sesión, después de la sesión.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: '07:40',
            title: 'Al despertar',
            desc: 'El check-in abre con tres deslizadores. El jugador responde desde la cama y la pantalla vuelve a cerrarse.',
          },
          {
            num: '17:30',
            title: 'Antes de la sesión',
            desc: 'La convocatoria salió la víspera. Las respuestas ya están en la lista del staff cuando se compone el grupo.',
          },
          {
            num: '20:10',
            title: 'Después de la sesión',
            desc: 'El RPE se da en un gesto. Si el staff lo prefiere, espera al check-in de la mañana siguiente.',
          },
        ],
        callouts: [
          {
            icon: 'dumbbell',
            text: 'La sesión de fuerza llega a la app con sus vídeos, y con las cargas recalculadas sobre el 1RM del jugador.',
            link: { label: 'Ver los programas', href: '/es/features/programs/' },
          },
        ],
      },
      {
        kicker: 'LO QUE EL JUGADOR NO VE',
        title: 'Un jugador nunca ve el expediente de otro.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'LOS DEMÁS',
            title: 'Los datos de la plantilla',
            desc: 'Cada jugador llega a sus propias cifras. Sin clasificación de equipo, sin comparación pública.',
          },
          {
            eyebrow: 'EL ANÁLISIS',
            title: 'Tus análisis de partido',
            desc: 'Los errores que un entrenador atribuye en el análisis se quedan en el staff. La regla está en el producto, no en una consigna.',
          },
          {
            eyebrow: 'LOS NIÑOS',
            title: 'Portal de padres',
            desc: 'En un equipo en modo niños, la invitación va al padre o a la madre y todo pasa por ahí, con consentimiento explícito.',
          },
        ],
      },
      {
        kicker: 'DESCARGA',
        title: 'STRIVN Player, en la App Store y en Google Play.',
        body: 'El staff añade al jugador a la plantilla y le envía su invitación. El jugador instala la app y encuentra su equipo en la primera apertura.',
        kind: 'stores',
        app: 'player',
        note: {
          icon: 'link',
          label: 'Sin instalar',
          desc: 'Quien prefiere no instalar nada recibe un enlace y hace su check-in en un navegador. La app añade la agenda, las notificaciones y sus sesiones de fuerza.',
        },
      },
    ],
  },
};
