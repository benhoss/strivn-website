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
        'STRIVN Player, l’app du joueur sur iOS et Android : agenda, convocations, check-in du matin, séances de musculation et créneaux de soins. Chaque joueur n’y voit que ses propres données.',
    },
    hero: {
      kicker: 'APP JOUEUR',
      title: 'Vingt secondes par jour. Sa saison en retour.',
      sub: 'STRIVN Player se télécharge sur l’App Store et Google Play. Le joueur y répond à son check-in, accepte ses convocations, suit ses séances de musculation — et consulte ses propres statistiques. Vous arrêtez de relancer par message.',
      bullets: [
        'Gratuite pour le joueur, sur iPhone et Android',
        'Le staff envoie l’invitation, le joueur rejoint son équipe',
        'Wellness au réveil, RPE après la séance',
        'Ses stats de match et sa courbe de forme, dans l’app',
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
        title: 'Son agenda, ses séances, ses chiffres.',
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
            desc: 'Une notification l’avertit, répondre prend un tap. Il peut revenir sur sa réponse jusqu’au début de l’événement.',
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
            icon: 'chart-column',
            tone: 'blue',
            title: 'Stats',
            desc: 'Ses minutes, ses buts, ses passes décisives, match par match. Et sa courbe de forme, jour après jour.',
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
        kicker: 'SA FORME',
        title: 'Plus il en donne, plus il en voit.',
        body: 'Le check-in du matin et le RPE d’après-séance alimentent la même courbe de readiness. Le joueur ouvre la sienne dans l’app : son score du jour, sa semaine à sept cases, sa charge récente.',
        visual: 'player-form',
        visualAside: true,
        kind: 'panels',
        panels: [
          {
            eyebrow: 'UNE MINUTE PAR JOUR',
            title: 'Ce qu’il donne',
            tone: 'plain',
            items: ['Le check-in du matin', 'Le RPE après la séance'],
          },
          {
            eyebrow: 'SA CHARGE ET SON READINESS',
            title: 'Ce qu’il en voit',
            tone: 'blue',
            items: [
              'Sa charge, semaine après semaine',
              'Sa courbe de readiness, jour après jour',
              'La séance que le coach a prévue',
            ],
          },
        ],
        foot: 'Un joueur qui répond tous les matins voit son readiness monter et descendre. Celui qui saute une semaine voit le trou dans la courbe. La collecte tient sur ça, plus que sur les rappels du staff.',
      },
      {
        kicker: 'SES STATS',
        title: 'Sa saison, en chiffres qui lui appartiennent.',
        body: 'Le staff saisit la feuille de match. Le joueur retrouve sa ligne dans l’onglet Stats : minutes, buts, passes décisives, cartons, match par match — sur les cinq derniers, sur la saison, ou depuis son arrivée au club.',
        visual: 'player-stats',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'SES CHIFFRES',
            title: 'Ce qui se compte',
            desc: 'Minutes, buts, passes décisives, tirs cadrés, cartons, et les arrêts pour un gardien. Chaque valeur vient de la feuille de match, pas d’une saisie du joueur.',
          },
          {
            eyebrow: 'MATCH PAR MATCH',
            title: 'Sa ligne, chaque week-end',
            desc: 'L’adversaire, le score, dom. ou ext., et ce qu’il a fait ce jour-là. Une saison se relit match par match plutôt qu’en moyenne.',
          },
          {
            eyebrow: 'LES PÉRIODES',
            title: 'Cinq matchs, ou tout',
            desc: 'Cinq derniers, dix derniers, cette saison, depuis le début. Le même écran répond aux quatre questions.',
          },
        ],
        callouts: [
          {
            icon: 'trophy',
            text: 'Les résultats de l’équipe et ses oppositions à l’entraînement s’affichent au même endroit, alimentés par ce que le staff encode pendant le match.',
            link: { label: 'Voir le match en direct', href: '/fr/features/live-match/' },
          },
        ],
      },
      {
        kicker: 'SOINS',
        title: 'Le joueur réserve son créneau de soins.',
        body: 'Le staff pose la fenêtre du kiné dans le calendrier, trente minutes avant l’entraînement par exemple. Elle se découpe en créneaux, et chaque joueur prend le sien depuis l’app.',
        kind: 'rows',
        rows: [
          {
            name: 'Choisir son heure',
            desc: 'Les créneaux libres s’affichent dans l’app. Le joueur prend celui qui tient dans sa journée, et personne ne fait la queue devant une porte.',
          },
          {
            name: 'Dire pourquoi',
            desc: 'Chaque réservation porte un motif. Le kiné sait ce qui l’attend avant que le joueur entre.',
          },
          {
            name: 'Ou laisser le staff réserver',
            desc: 'Quand un joueur ne réserve pas, le staff pose le créneau à sa place.',
          },
        ],
        callouts: [
          {
            icon: 'heart-pulse',
            text: 'Les conseils du kiné, un exercice ou un protocole, arrivent ensuite dans l’app du joueur avec leur date.',
            link: { label: 'Voir l’infirmerie', href: '/fr/features/medical/' },
          },
        ],
        note: {
          icon: 'eye-off',
          label: 'Motifs et notes',
          desc: 'Le motif et la note d’un créneau restent visibles du staff. Un joueur voit son propre rendez-vous, jamais celui d’un coéquipier.',
        },
      },
      {
        kicker: 'CE QU’IL VOIT',
        title: 'Ses chiffres, et rien que les siens.',
        body: 'Un écran de stats pose toujours la même question dans un vestiaire : qui voit les miens ? La réponse est dans le produit, pas dans une consigne d’usage.',
        kind: 'compare',
        heads: ['Dans son app', 'Jamais dans son app'],
        tones: ['blue', 'plain'],
        rows: [
          {
            label: 'SES CHIFFRES',
            a: 'Ses minutes, ses buts, ses passes décisives, match par match.',
            b: 'La ligne d’un coéquipier, et tout classement d’équipe.',
          },
          {
            label: 'SA FORME',
            a: 'Son readiness, sa charge récente, sa série de check-in.',
            b: 'Le tableau de l’effectif que le staff lit avant la séance.',
          },
          {
            label: 'L’ANALYSE',
            a: 'Les exercices et les documents que le staff lui partage.',
            b: 'Les erreurs qu’un coach attribue pendant l’analyse de match.',
          },
          {
            label: 'LE KINÉ',
            a: 'Son propre créneau, avec le motif qu’il a posé.',
            b: 'Le rendez-vous d’un coéquipier, motif compris.',
          },
          {
            label: 'LES ENFANTS',
            a: 'Sur une équipe en mode enfants, le parent reçoit l’invitation et voit tout.',
            b: 'Rien ne part au joueur mineur sans le consentement du parent.',
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
        'STRIVN Player, the player’s app on iOS and Android: schedule, call-ups, morning check-in, strength sessions and treatment slots. Each player sees only their own data.',
    },
    hero: {
      kicker: 'PLAYER APP',
      title: 'Twenty seconds a day. Their season back.',
      sub: 'STRIVN Player downloads from the App Store and Google Play. The player answers their check-in there, accepts call-ups, follows their strength sessions — and reads their own statistics. You stop chasing answers by message.',
      bullets: [
        'Free for the player, on iPhone and Android',
        'The staff sends the invitation, the player joins their team',
        'Wellness on waking, RPE after the session',
        'Their match stats and their form curve, in the app',
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
        title: 'Their schedule, their sessions, their figures.',
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
            desc: 'A notification tells them, and answering takes a tap. They can change that answer until the event starts.',
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
            icon: 'chart-column',
            tone: 'blue',
            title: 'Stats',
            desc: 'Their minutes, their goals, their assists, match by match. And their form curve, day after day.',
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
        kicker: 'THEIR FORM',
        title: 'The more they put in, the more they see.',
        body: 'The morning check-in and the post-session RPE feed the same readiness curve. The player opens their own in the app: today’s score, their week in seven cells, their recent load.',
        visual: 'player-form',
        visualAside: true,
        kind: 'panels',
        panels: [
          {
            eyebrow: 'A MINUTE A DAY',
            title: 'What they put in',
            tone: 'plain',
            items: ['The morning check-in', 'RPE after the session'],
          },
          {
            eyebrow: 'THEIR LOAD AND THEIR READINESS',
            title: 'What they see',
            tone: 'blue',
            items: [
              'Their load, week after week',
              'Their readiness curve, day after day',
              'The session the coach has planned',
            ],
          },
        ],
        foot: 'A player who answers every morning watches their readiness rise and fall. One who skips a week sees the hole in the curve. Collection holds on that, more than on reminders from the staff.',
      },
      {
        kicker: 'THEIR STATS',
        title: 'Their season, in figures that belong to them.',
        body: 'The staff fills in the match sheet. The player finds their own line in the Stats tab: minutes, goals, assists, cards, match by match — over the last five, over the season, or since they joined the club.',
        visual: 'player-stats',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'THEIR FIGURES',
            title: 'What gets counted',
            desc: 'Minutes, goals, assists, shots on target, cards, and saves for a keeper. Every value comes from the match sheet, not from the player typing it in.',
          },
          {
            eyebrow: 'MATCH BY MATCH',
            title: 'Their line, every weekend',
            desc: 'The opponent, the score, home or away, and what they did that day. A season reads back match by match rather than as an average.',
          },
          {
            eyebrow: 'THE RANGES',
            title: 'Five matches, or all of them',
            desc: 'Last five, last ten, this season, since the start. The same screen answers all four questions.',
          },
        ],
        callouts: [
          {
            icon: 'trophy',
            text: 'Team results and their training-ground match-ups sit in the same place, fed by what the staff records during the match.',
            link: { label: 'See live match', href: '/en/features/live-match/' },
          },
        ],
      },
      {
        kicker: 'TREATMENT',
        title: 'The player books their treatment slot.',
        body: 'The staff drops the physio’s window into the calendar, thirty minutes before training for instance. It gets cut into slots, and each player takes theirs from the app.',
        kind: 'rows',
        rows: [
          {
            name: 'Pick a time',
            desc: 'Free slots show up in the app. The player takes the one that fits their day, and nobody queues outside a door.',
          },
          {
            name: 'Say why',
            desc: 'Every booking carries a reason. The physio knows what is coming before the player walks in.',
          },
          {
            name: 'Or let the staff book it',
            desc: 'When a player does not book, the staff puts the slot in for them.',
          },
        ],
        callouts: [
          {
            icon: 'heart-pulse',
            text: 'Physio advice, an exercise or a protocol, then lands in the player’s app with its date.',
            link: { label: 'See the medical log', href: '/en/features/medical/' },
          },
        ],
        note: {
          icon: 'eye-off',
          label: 'Reasons and notes',
          desc: 'The reason and the note on a slot stay visible to the staff. A player sees their own appointment, never a teammate’s.',
        },
      },
      {
        kicker: 'WHAT THEY SEE',
        title: 'Their figures, and only theirs.',
        body: 'A stats screen always raises the same question in a dressing room: who sees mine? The answer is in the product, not in a usage policy.',
        kind: 'compare',
        heads: ['In their app', 'Never in their app'],
        tones: ['blue', 'plain'],
        rows: [
          {
            label: 'THEIR FIGURES',
            a: 'Their minutes, their goals, their assists, match by match.',
            b: 'A teammate’s line, and any team ranking.',
          },
          {
            label: 'THEIR FORM',
            a: 'Their readiness, their recent load, their check-in streak.',
            b: 'The squad board the staff reads before the session.',
          },
          {
            label: 'THE ANALYSIS',
            a: 'The exercises and documents the staff shares with them.',
            b: 'Errors a coach attributes during match analysis.',
          },
          {
            label: 'THE PHYSIO',
            a: 'Their own slot, with the reason they gave.',
            b: 'A teammate’s appointment, reason included.',
          },
          {
            label: 'CHILDREN',
            a: 'On a team in children mode, the parent gets the invitation and sees everything.',
            b: 'Nothing reaches a minor without the parent’s consent.',
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
        'STRIVN Player, de app van de speler op iOS en Android: agenda, oproepingen, ochtendcheck-in, krachttrainingen en verzorgingsslots. Elke speler ziet alleen zijn eigen gegevens.',
    },
    hero: {
      kicker: 'SPELERS-APP',
      title: 'Twintig seconden per dag. Zijn seizoen terug.',
      sub: 'STRIVN Player download je in de App Store en op Google Play. Daar doet de speler zijn check-in, aanvaardt hij zijn oproepingen, volgt hij zijn krachttrainingen — en leest hij zijn eigen statistieken. Jij hoeft niets meer na te vragen via berichten.',
      bullets: [
        'Gratis voor de speler, op iPhone en Android',
        'De staf stuurt de uitnodiging, de speler vervoegt zijn ploeg',
        'Wellness bij het opstaan, RPE na de training',
        'Zijn wedstrijdcijfers en zijn conditiecurve, in de app',
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
        title: 'Eigen agenda, eigen trainingen, eigen cijfers.',
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
            desc: 'Een melding verwittigt hem, antwoorden kost één tik. Hij kan zijn antwoord aanpassen tot de activiteit begint.',
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
            icon: 'chart-column',
            tone: 'blue',
            title: 'Stats',
            desc: 'Zijn minuten, zijn doelpunten, zijn assists, wedstrijd per wedstrijd. En zijn conditiecurve, dag na dag.',
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
        kicker: 'ZIJN CONDITIE',
        title: 'Hoe meer hij geeft, hoe meer hij ziet.',
        body: 'De check-in van de ochtend en de RPE na de training voeden dezelfde readiness-curve. De speler opent de zijne in de app: zijn score van vandaag, zijn week in zeven vakjes, zijn recente belasting.',
        visual: 'player-form',
        visualAside: true,
        kind: 'panels',
        panels: [
          {
            eyebrow: 'EEN MINUUT PER DAG',
            title: 'Wat hij geeft',
            tone: 'plain',
            items: ['De check-in van de ochtend', 'De RPE na de training'],
          },
          {
            eyebrow: 'ZIJN BELASTING EN ZIJN READINESS',
            title: 'Wat hij ziet',
            tone: 'blue',
            items: [
              'Zijn belasting, week na week',
              'Zijn readiness-curve, dag na dag',
              'De training die de coach heeft gepland',
            ],
          },
        ],
        foot: 'Een speler die elke ochtend antwoordt, ziet zijn readiness stijgen en dalen. Wie een week overslaat, ziet het gat in de curve. De verzameling steunt daarop, meer dan op herinneringen van de staf.',
      },
      {
        kicker: 'ZIJN STATS',
        title: 'Zijn seizoen, in cijfers die van hem zijn.',
        body: 'De staf vult het wedstrijdblad in. De speler vindt zijn eigen lijn terug in het tabblad Stats: minuten, doelpunten, assists, kaarten, wedstrijd per wedstrijd — over de laatste vijf, over het seizoen, of sinds hij bij de club kwam.',
        visual: 'player-stats',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'ZIJN CIJFERS',
            title: 'Wat geteld wordt',
            desc: 'Minuten, doelpunten, assists, schoten op doel, kaarten, en reddingen voor een doelman. Elke waarde komt van het wedstrijdblad, niet van een invoer door de speler.',
          },
          {
            eyebrow: 'WEDSTRIJD PER WEDSTRIJD',
            title: 'Zijn lijn, elk weekend',
            desc: 'De tegenstander, de score, thuis of uit, en wat hij die dag deed. Een seizoen lees je terug wedstrijd per wedstrijd, niet als gemiddelde.',
          },
          {
            eyebrow: 'DE PERIODES',
            title: 'Vijf wedstrijden, of alles',
            desc: 'Laatste vijf, laatste tien, dit seizoen, sinds het begin. Hetzelfde scherm beantwoordt alle vier de vragen.',
          },
        ],
        callouts: [
          {
            icon: 'trophy',
            text: 'De resultaten van de ploeg en zijn partijtjes op training staan op dezelfde plek, gevoed door wat de staf tijdens de wedstrijd encodeert.',
            link: { label: 'Wedstrijd live bekijken', href: '/nl/features/live-match/' },
          },
        ],
      },
      {
        kicker: 'VERZORGING',
        title: 'De speler boekt zijn verzorgingsslot.',
        body: 'De staf zet het venster van de kiné in de kalender, bijvoorbeeld dertig minuten voor de training. Het splitst in slots, en elke speler neemt het zijne vanuit de app.',
        kind: 'rows',
        rows: [
          {
            name: 'Een uur kiezen',
            desc: 'De vrije slots verschijnen in de app. De speler neemt het slot dat in zijn dag past, en niemand staat aan te schuiven voor een deur.',
          },
          {
            name: 'Zeggen waarom',
            desc: 'Elke reservatie draagt een reden. De kiné weet wat hem te wachten staat voor de speler binnenkomt.',
          },
          {
            name: 'Of de staf laten boeken',
            desc: 'Boekt een speler niet, dan zet de staf het slot in zijn plaats.',
          },
        ],
        callouts: [
          {
            icon: 'heart-pulse',
            text: 'Kinéadvies, een oefening of een protocol, komt daarna in de app van de speler terecht, met datum.',
            link: { label: 'Het medisch logboek bekijken', href: '/nl/features/medical/' },
          },
        ],
        note: {
          icon: 'eye-off',
          label: 'Redenen en notities',
          desc: 'De reden en de notitie bij een slot blijven zichtbaar voor de staf. Een speler ziet zijn eigen afspraak, nooit die van een ploegmaat.',
        },
      },
      {
        kicker: 'WAT HIJ ZIET',
        title: 'Zijn cijfers, en alleen de zijne.',
        body: 'Een statistiekenscherm roept in een kleedkamer altijd dezelfde vraag op: wie ziet de mijne? Het antwoord zit in het product, niet in een gebruiksafspraak.',
        kind: 'compare',
        heads: ['In zijn app', 'Nooit in zijn app'],
        tones: ['blue', 'plain'],
        rows: [
          {
            label: 'ZIJN CIJFERS',
            a: 'Zijn minuten, zijn doelpunten, zijn assists, wedstrijd per wedstrijd.',
            b: 'De lijn van een ploegmaat, en elke ploegranglijst.',
          },
          {
            label: 'ZIJN CONDITIE',
            a: 'Zijn readiness, zijn recente belasting, zijn check-inreeks.',
            b: 'Het overzicht van de kern dat de staf voor de training leest.',
          },
          {
            label: 'DE ANALYSE',
            a: 'De oefeningen en documenten die de staf met hem deelt.',
            b: 'Fouten die een coach tijdens de wedstrijdanalyse toewijst.',
          },
          {
            label: 'DE KINÉ',
            a: 'Zijn eigen slot, met de reden die hij opgaf.',
            b: 'De afspraak van een ploegmaat, reden inbegrepen.',
          },
          {
            label: 'DE KINDEREN',
            a: 'Bij een ploeg in kindermodus krijgt de ouder de uitnodiging en ziet die alles.',
            b: 'Niets bereikt een minderjarige zonder toestemming van de ouder.',
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
        'STRIVN Player, die App des Spielers für iOS und Android: Terminplan, Aufgebote, Check-in am Morgen, Krafteinheiten und Behandlungs-Slots. Jeder Spieler sieht darin nur die eigenen Daten.',
    },
    hero: {
      kicker: 'SPIELER-APP',
      title: 'Zwanzig Sekunden am Tag. Seine Saison zurück.',
      sub: 'STRIVN Player lädt man im App Store und bei Google Play. Dort beantwortet der Spieler seinen Check-in, nimmt Aufgebote an, folgt seinen Krafteinheiten — und liest seine eigenen Statistiken. Sie hören auf, per Nachricht nachzuhaken.',
      bullets: [
        'Für den Spieler kostenlos, auf iPhone und Android',
        'Der Staff schickt die Einladung, der Spieler tritt seiner Mannschaft bei',
        'Wellness nach dem Aufwachen, RPE nach der Einheit',
        'Seine Spielzahlen und seine Formkurve, in der App',
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
        title: 'Der eigene Kalender, die eigenen Einheiten, die eigenen Zahlen.',
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
            desc: 'Eine Benachrichtigung meldet es, Antworten kostet ein Tippen. Er kann seine Antwort bis zum Beginn des Termins ändern.',
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
            icon: 'chart-column',
            tone: 'blue',
            title: 'Statistiken',
            desc: 'Seine Minuten, seine Tore, seine Vorlagen, Spiel für Spiel. Und seine Formkurve, Tag für Tag.',
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
        kicker: 'SEINE FORM',
        title: 'Je mehr er gibt, desto mehr sieht er.',
        body: 'Der Check-in am Morgen und der RPE nach der Einheit speisen dieselbe Readiness-Kurve. Der Spieler öffnet seine eigene in der App: seinen Wert von heute, seine Woche in sieben Feldern, seine aktuelle Belastung.',
        visual: 'player-form',
        visualAside: true,
        kind: 'panels',
        panels: [
          {
            eyebrow: 'EINE MINUTE AM TAG',
            title: 'Was er gibt',
            tone: 'plain',
            items: ['Den Check-in am Morgen', 'Den RPE nach der Einheit'],
          },
          {
            eyebrow: 'SEINE BELASTUNG UND SEIN READINESS-WERT',
            title: 'Was er sieht',
            tone: 'blue',
            items: [
              'Seine Belastung, Woche für Woche',
              'Seine Readiness-Kurve, Tag für Tag',
              'Die Einheit, die der Trainer geplant hat',
            ],
          },
        ],
        foot: 'Ein Spieler, der jeden Morgen antwortet, sieht seinen Readiness-Wert steigen und fallen. Wer eine Woche auslässt, sieht die Lücke in der Kurve. Darauf beruht die Erfassung, mehr als auf Erinnerungen des Staffs.',
      },
      {
        kicker: 'SEINE STATISTIKEN',
        title: 'Seine Saison, in Zahlen, die ihm gehören.',
        body: 'Der Staff trägt den Spielbericht ein. Der Spieler findet seine eigene Zeile im Reiter Statistiken: Minuten, Tore, Vorlagen, Karten, Spiel für Spiel — über die letzten fünf, über die Saison, oder seit seinem Wechsel zum Verein.',
        visual: 'player-stats',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'SEINE ZAHLEN',
            title: 'Was gezählt wird',
            desc: 'Minuten, Tore, Vorlagen, Schüsse aufs Tor, Karten, und Paraden bei einem Torhüter. Jeder Wert kommt aus dem Spielbericht, nicht aus einer Eingabe des Spielers.',
          },
          {
            eyebrow: 'SPIEL FÜR SPIEL',
            title: 'Seine Zeile, jedes Wochenende',
            desc: 'Der Gegner, das Ergebnis, heim oder auswärts, und was er an dem Tag gemacht hat. Eine Saison liest sich Spiel für Spiel, nicht als Mittelwert.',
          },
          {
            eyebrow: 'DIE ZEITRÄUME',
            title: 'Fünf Spiele, oder alle',
            desc: 'Letzte fünf, letzte zehn, diese Saison, seit Beginn. Derselbe Bildschirm beantwortet alle vier Fragen.',
          },
        ],
        callouts: [
          {
            icon: 'trophy',
            text: 'Die Ergebnisse der Mannschaft und seine Trainingsspiele stehen an derselben Stelle, gespeist aus dem, was der Staff während des Spiels erfasst.',
            link: { label: 'Spiel live ansehen', href: '/de/features/live-match/' },
          },
        ],
      },
      {
        kicker: 'BEHANDLUNG',
        title: 'Der Spieler bucht seinen Behandlungs-Slot.',
        body: 'Der Staff legt das Zeitfenster des Physios in den Kalender, etwa dreißig Minuten vor dem Training. Es wird in Slots geteilt, und jeder Spieler nimmt sich seinen in der App.',
        kind: 'rows',
        rows: [
          {
            name: 'Eine Uhrzeit wählen',
            desc: 'Die freien Slots stehen in der App. Der Spieler nimmt den, der in seinen Tag passt, und niemand wartet vor einer Tür.',
          },
          {
            name: 'Den Grund angeben',
            desc: 'Jede Buchung trägt einen Grund. Der Physio weiß, was ihn erwartet, bevor der Spieler hereinkommt.',
          },
          {
            name: 'Oder den Staff buchen lassen',
            desc: 'Bucht ein Spieler nicht, setzt der Staff den Slot für ihn.',
          },
        ],
        callouts: [
          {
            icon: 'heart-pulse',
            text: 'Physio-Hinweise, eine Übung oder ein Protokoll, landen danach mit Datum in der App des Spielers.',
            link: { label: 'Medizinisches Logbuch ansehen', href: '/de/features/medical/' },
          },
        ],
        note: {
          icon: 'eye-off',
          label: 'Gründe und Notizen',
          desc: 'Grund und Notiz eines Slots bleiben beim Staff sichtbar. Ein Spieler sieht seinen eigenen Termin, nie den eines Mitspielers.',
        },
      },
      {
        kicker: 'WAS ER SIEHT',
        title: 'Seine Zahlen, und nur seine.',
        body: 'Ein Statistik-Bildschirm wirft in einer Kabine immer dieselbe Frage auf: wer sieht meine? Die Antwort steckt im Produkt, nicht in einer Nutzungsregel.',
        kind: 'compare',
        heads: ['In seiner App', 'Nie in seiner App'],
        tones: ['blue', 'plain'],
        rows: [
          {
            label: 'SEINE ZAHLEN',
            a: 'Seine Minuten, seine Tore, seine Vorlagen, Spiel für Spiel.',
            b: 'Die Zeile eines Mitspielers, und jede Mannschaftsrangliste.',
          },
          {
            label: 'SEINE FORM',
            a: 'Sein Readiness-Wert, seine aktuelle Belastung, seine Check-in-Serie.',
            b: 'Die Kaderübersicht, die der Staff vor der Einheit liest.',
          },
          {
            label: 'DIE ANALYSE',
            a: 'Die Übungen und Dokumente, die der Staff mit ihm teilt.',
            b: 'Fehler, die ein Trainer in der Spielanalyse zuordnet.',
          },
          {
            label: 'DER PHYSIO',
            a: 'Sein eigener Slot, mit dem Grund, den er angegeben hat.',
            b: 'Der Termin eines Mitspielers, Grund inklusive.',
          },
          {
            label: 'DIE KINDER',
            a: 'Bei einer Mannschaft im Kindermodus bekommen die Eltern die Einladung und sehen alles.',
            b: 'Nichts erreicht einen Minderjährigen ohne Einwilligung der Eltern.',
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
        'STRIVN Player, a app do jogador em iOS e Android: agenda, convocatórias, check-in da manhã, treinos de força e vagas de tratamento. Cada jogador vê apenas os seus próprios dados.',
    },
    hero: {
      kicker: 'APP DO JOGADOR',
      title: 'Vinte segundos por dia. A sua época de volta.',
      sub: 'A STRIVN Player transfere-se na App Store e no Google Play. É aí que o jogador responde ao check-in, aceita as convocatórias, segue os treinos de força — e consulta as suas próprias estatísticas. Deixa de andar a insistir por mensagem.',
      bullets: [
        'Gratuita para o jogador, em iPhone e Android',
        'O staff envia o convite, o jogador entra na sua equipa',
        'Wellness ao acordar, RPE depois do treino',
        'Os seus números de jogo e a sua curva de forma, na app',
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
        title: 'A sua agenda, os seus treinos, os seus números.',
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
            desc: 'Uma notificação avisa-o e responder é um toque. Pode mudar a resposta até ao início do evento.',
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
            icon: 'chart-column',
            tone: 'blue',
            title: 'Estatísticas',
            desc: 'Os seus minutos, os seus golos, as suas assistências, jogo a jogo. E a sua curva de forma, dia após dia.',
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
        kicker: 'A SUA FORMA',
        title: 'Quanto mais dá, mais vê.',
        body: 'O check-in da manhã e o RPE do fim do treino alimentam a mesma curva de readiness. O jogador abre a sua na app: o valor de hoje, a sua semana em sete casas, a sua carga recente.',
        visual: 'player-form',
        visualAside: true,
        kind: 'panels',
        panels: [
          {
            eyebrow: 'UM MINUTO POR DIA',
            title: 'O que dá',
            tone: 'plain',
            items: ['O check-in da manhã', 'O RPE depois do treino'],
          },
          {
            eyebrow: 'A SUA CARGA E O SEU READINESS',
            title: 'O que vê',
            tone: 'blue',
            items: [
              'A sua carga, semana após semana',
              'A sua curva de readiness, dia após dia',
              'O treino que o treinador planeou',
            ],
          },
        ],
        foot: 'Um jogador que responde todas as manhãs vê o seu readiness subir e descer. Quem falha uma semana vê o buraco na curva. A recolha assenta nisso, mais do que nos lembretes do staff.',
      },
      {
        kicker: 'AS SUAS ESTATÍSTICAS',
        title: 'A sua época, em números que lhe pertencem.',
        body: 'O staff preenche a ficha de jogo. O jogador encontra a sua linha no separador Estatísticas: minutos, golos, assistências, cartões, jogo a jogo — nos últimos cinco, na época, ou desde que chegou ao clube.',
        visual: 'player-stats',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'OS SEUS NÚMEROS',
            title: 'O que se conta',
            desc: 'Minutos, golos, assistências, remates à baliza, cartões, e defesas para um guarda-redes. Cada valor vem da ficha de jogo, não de um registo do jogador.',
          },
          {
            eyebrow: 'JOGO A JOGO',
            title: 'A sua linha, todos os fins de semana',
            desc: 'O adversário, o resultado, casa ou fora, e o que fez nesse dia. Uma época relê-se jogo a jogo, não em média.',
          },
          {
            eyebrow: 'OS PERÍODOS',
            title: 'Cinco jogos, ou tudo',
            desc: 'Últimos cinco, últimos dez, esta época, desde o início. O mesmo ecrã responde às quatro perguntas.',
          },
        ],
        callouts: [
          {
            icon: 'trophy',
            text: 'Os resultados da equipa e os seus jogos de treino ficam no mesmo sítio, alimentados pelo que o staff regista durante o jogo.',
            link: { label: 'Ver o jogo em direto', href: '/pt/features/live-match/' },
          },
        ],
      },
      {
        kicker: 'TRATAMENTO',
        title: 'O jogador marca a sua vaga de tratamento.',
        body: 'O staff coloca a janela do fisioterapeuta no calendário, por exemplo trinta minutos antes do treino. Ela divide-se em vagas, e cada jogador fica com a sua a partir da app.',
        kind: 'rows',
        rows: [
          {
            name: 'Escolher a hora',
            desc: 'As vagas livres aparecem na app. O jogador fica com a que cabe no seu dia, e ninguém faz fila à porta.',
          },
          {
            name: 'Dizer porquê',
            desc: 'Cada marcação leva um motivo. O fisioterapeuta sabe o que o espera antes de o jogador entrar.',
          },
          {
            name: 'Ou deixar o staff marcar',
            desc: 'Quando um jogador não marca, o staff coloca a vaga por ele.',
          },
        ],
        callouts: [
          {
            icon: 'heart-pulse',
            text: 'Os conselhos de fisioterapia, um exercício ou um protocolo, chegam depois à app do jogador com a sua data.',
            link: { label: 'Ver o registo médico', href: '/pt/features/medical/' },
          },
        ],
        note: {
          icon: 'eye-off',
          label: 'Motivos e notas',
          desc: 'O motivo e a nota de uma vaga ficam visíveis para o staff. Um jogador vê a sua própria marcação, nunca a de um colega.',
        },
      },
      {
        kicker: 'O QUE ELE VÊ',
        title: 'Os seus números, e só os seus.',
        body: 'Um ecrã de estatísticas levanta sempre a mesma pergunta num balneário: quem vê os meus? A resposta está no produto, não numa instrução de utilização.',
        kind: 'compare',
        heads: ['Na app dele', 'Nunca na app dele'],
        tones: ['blue', 'plain'],
        rows: [
          {
            label: 'OS SEUS NÚMEROS',
            a: 'Os seus minutos, os seus golos, as suas assistências, jogo a jogo.',
            b: 'A linha de um colega, e qualquer classificação de equipa.',
          },
          {
            label: 'A SUA FORMA',
            a: 'O seu readiness, a sua carga recente, a sua série de check-in.',
            b: 'O quadro do plantel que o staff lê antes do treino.',
          },
          {
            label: 'A ANÁLISE',
            a: 'Os exercícios e documentos que o staff partilha com ele.',
            b: 'Os erros que um treinador atribui na análise de jogo.',
          },
          {
            label: 'O FISIOTERAPEUTA',
            a: 'A sua própria vaga, com o motivo que indicou.',
            b: 'A marcação de um colega, motivo incluído.',
          },
          {
            label: 'AS CRIANÇAS',
            a: 'Numa equipa em modo crianças, o encarregado de educação recebe o convite e vê tudo.',
            b: 'Nada chega a um jogador menor sem o consentimento do encarregado.',
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
        'STRIVN Player, la app del jugador en iOS y Android: agenda, convocatorias, check-in de la mañana, sesiones de fuerza y huecos de tratamiento. Cada jugador ve solo sus propios datos.',
    },
    hero: {
      kicker: 'APP DEL JUGADOR',
      title: 'Veinte segundos al día. Su temporada de vuelta.',
      sub: 'STRIVN Player se descarga en la App Store y en Google Play. Ahí el jugador responde su check-in, acepta sus convocatorias, sigue sus sesiones de fuerza — y consulta sus propias estadísticas. Dejas de reclamar respuestas por mensaje.',
      bullets: [
        'Gratis para el jugador, en iPhone y Android',
        'El staff envía la invitación, el jugador entra en su equipo',
        'Wellness al despertar, RPE después de la sesión',
        'Sus cifras de partido y su curva de forma, en la app',
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
        title: 'Su agenda, sus sesiones, sus cifras.',
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
            desc: 'Una notificación le avisa y responder es un toque. Puede cambiar su respuesta hasta el inicio del evento.',
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
            icon: 'chart-column',
            tone: 'blue',
            title: 'Estadísticas',
            desc: 'Sus minutos, sus goles, sus asistencias, partido a partido. Y su curva de forma, día tras día.',
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
        kicker: 'SU FORMA',
        title: 'Cuanto más da, más ve.',
        body: 'El check-in de la mañana y el RPE de después de la sesión alimentan la misma curva de readiness. El jugador abre la suya en la app: su valor de hoy, su semana en siete casillas, su carga reciente.',
        visual: 'player-form',
        visualAside: true,
        kind: 'panels',
        panels: [
          {
            eyebrow: 'UN MINUTO AL DÍA',
            title: 'Lo que da',
            tone: 'plain',
            items: ['El check-in de la mañana', 'El RPE después de la sesión'],
          },
          {
            eyebrow: 'SU CARGA Y SU READINESS',
            title: 'Lo que ve',
            tone: 'blue',
            items: [
              'Su carga, semana tras semana',
              'Su curva de readiness, día tras día',
              'La sesión que el entrenador ha planificado',
            ],
          },
        ],
        foot: 'Un jugador que responde cada mañana ve su readiness subir y bajar. El que se salta una semana ve el hueco en la curva. La recogida se sostiene en eso, más que en los recordatorios del staff.',
      },
      {
        kicker: 'SUS ESTADÍSTICAS',
        title: 'Su temporada, en cifras que le pertenecen.',
        body: 'El staff rellena el acta del partido. El jugador encuentra su línea en la pestaña Estadísticas: minutos, goles, asistencias, tarjetas, partido a partido — en los últimos cinco, en la temporada, o desde que llegó al club.',
        visual: 'player-stats',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'SUS CIFRAS',
            title: 'Lo que se cuenta',
            desc: 'Minutos, goles, asistencias, tiros a puerta, tarjetas, y paradas para un portero. Cada valor viene del acta del partido, no de algo que teclee el jugador.',
          },
          {
            eyebrow: 'PARTIDO A PARTIDO',
            title: 'Su línea, cada fin de semana',
            desc: 'El rival, el resultado, casa o fuera, y lo que hizo ese día. Una temporada se relee partido a partido, no en promedio.',
          },
          {
            eyebrow: 'LOS PERIODOS',
            title: 'Cinco partidos, o todo',
            desc: 'Últimos cinco, últimos diez, esta temporada, desde el principio. La misma pantalla responde a las cuatro preguntas.',
          },
        ],
        callouts: [
          {
            icon: 'trophy',
            text: 'Los resultados del equipo y sus partidillos de entrenamiento están en el mismo sitio, alimentados por lo que el staff registra durante el partido.',
            link: { label: 'Ver el partido en directo', href: '/es/features/live-match/' },
          },
        ],
      },
      {
        kicker: 'TRATAMIENTO',
        title: 'El jugador reserva su hueco de tratamiento.',
        body: 'El staff pone la ventana del fisio en el calendario, por ejemplo treinta minutos antes de la sesión. Se divide en huecos, y cada jugador coge el suyo desde la app.',
        kind: 'rows',
        rows: [
          {
            name: 'Elegir la hora',
            desc: 'Los huecos libres aparecen en la app. El jugador coge el que cabe en su día, y nadie hace cola delante de una puerta.',
          },
          {
            name: 'Decir por qué',
            desc: 'Cada reserva lleva un motivo. El fisio sabe lo que le espera antes de que el jugador entre.',
          },
          {
            name: 'O dejar que reserve el staff',
            desc: 'Cuando un jugador no reserva, el staff pone el hueco por él.',
          },
        ],
        callouts: [
          {
            icon: 'heart-pulse',
            text: 'Los consejos del fisio, un ejercicio o un protocolo, llegan después a la app del jugador con su fecha.',
            link: { label: 'Ver el parte médico', href: '/es/features/medical/' },
          },
        ],
        note: {
          icon: 'eye-off',
          label: 'Motivos y notas',
          desc: 'El motivo y la nota de un hueco quedan visibles para el staff. Un jugador ve su propia cita, nunca la de un compañero.',
        },
      },
      {
        kicker: 'LO QUE VE',
        title: 'Sus cifras, y solo las suyas.',
        body: 'Una pantalla de estadísticas plantea siempre la misma pregunta en un vestuario: ¿quién ve las mías? La respuesta está en el producto, no en una consigna de uso.',
        kind: 'compare',
        heads: ['En su app', 'Nunca en su app'],
        tones: ['blue', 'plain'],
        rows: [
          {
            label: 'SUS CIFRAS',
            a: 'Sus minutos, sus goles, sus asistencias, partido a partido.',
            b: 'La línea de un compañero, y cualquier clasificación de equipo.',
          },
          {
            label: 'SU FORMA',
            a: 'Su readiness, su carga reciente, su racha de check-in.',
            b: 'El cuadro de la plantilla que el staff lee antes de la sesión.',
          },
          {
            label: 'EL ANÁLISIS',
            a: 'Los ejercicios y documentos que el staff comparte con él.',
            b: 'Los errores que un entrenador atribuye en el análisis de partido.',
          },
          {
            label: 'EL FISIO',
            a: 'Su propio hueco, con el motivo que indicó.',
            b: 'La cita de un compañero, motivo incluido.',
          },
          {
            label: 'LOS NIÑOS',
            a: 'En un equipo en modo niños, el padre o la madre recibe la invitación y lo ve todo.',
            b: 'Nada llega a un jugador menor sin el consentimiento de sus padres.',
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
