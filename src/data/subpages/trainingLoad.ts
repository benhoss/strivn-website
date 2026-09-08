/**
 * Charge, RPE & GPS — the monitoring page the S&C landing points at.
 *
 * The argument runs: internal load comes from the session debrief, external
 * load from your own GPS export, and the four indicators are only readable
 * once you know what each one divides by what.
 */
import type { SubpageLocales } from './types';

export const trainingLoad: SubpageLocales = {
  /* ────────────────────────────── FR ────────────────────────────── */
  fr: {
    meta: {
      title: 'Charge, RPE & GPS | STRIVN',
      description:
        'Charge interne par sRPE, charge externe par import GPS. ACWR, monotonie, contrainte et ratio externe ÷ interne calculés seuls, dans votre propre unité de charge.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · MONITORING',
      title: 'Croisez le RPE et le GPS de chaque joueur.',
      sub: 'Le RPE du bilan et la durée donnent la charge interne. Votre export GPS donne la charge externe. STRIVN les met face à face. ACWR, monotonie, contrainte et ratio se calculent seuls.',
      bullets: [
        'Charge sRPE : RPE × durée, coefficients match et entraînement réglables',
        'ACWR, monotonie et contrainte, semaine après semaine',
        'GPS : vos zones regroupées en blocs que vous nommez vous-même',
        'Alertes de charge à acquitter, avec note et traçabilité',
      ],
      ctas: { primary: 'Commencer gratuitement' },
      visual: 'load-board',
    },
    sections: [
      {
        kicker: 'CE QUE VOUS LISEZ',
        title: 'Lisez ACWR, monotonie et contrainte sans les recalculer.',
        kind: 'rows',
        rows: [
          {
            name: 'ACWR',
            sub: 'charge 7 j ÷ charge 28 j',
            desc: 'Le rapport entre ce que le joueur vient d’encaisser et ce à quoi il est habitué. Le classement trie par écart à la zone.',
            chip: { label: '0,8 – 1,3', tone: 'green' },
          },
          {
            name: 'Monotonie',
            sub: 'moyenne ÷ écart-type journalier',
            desc: 'La régularité de la charge sur la semaine. Élevée et combinée à une charge élevée, c’est un signal de fatigue à surveiller.',
            chip: { label: 'à surveiller', tone: 'orange' },
          },
          {
            name: 'Contrainte',
            sub: 'charge totale × monotonie',
            desc: 'Le volume et le manque de variation dans un seul nombre. C’est le seul des quatre qui suit votre unité de charge.',
            chip: { label: 'suit votre unité', tone: 'blue' },
          },
          {
            name: 'Ratio externe ÷ interne',
            sub: 'charge GPS ÷ sRPE',
            desc: 'Les deux mesures ont des unités différentes : la valeur se lit seulement par rapport à la base 28 jours du joueur lui-même.',
            chip: { label: 'vs base 28 j' },
          },
        ],
        note: {
          label: 'Acquitter garde la trace',
          desc: 'Une alerte de charge s’acquitte avec une note : le contexte, la décision prise. Elle reste visible, grisée, avec qui l’a traitée et quand, et se tait tant que la charge de la même semaine reste dans la norme.',
        },
      },
      {
        kicker: 'GPS · VOS BLOCS DE VITESSE',
        title: 'Nommez vos blocs de vitesse depuis les zones exportées.',
        body: 'Votre export contient des zones numérotées, souvent en distance et en temps. Vous décidez comment les regrouper : un bloc est un nom que vous donnez à une somme de zones. Vos blocs pilotent ensuite colonnes, graphiques et cibles individuelles.',
        visual: 'gps-blocks',
        kind: 'columns',
        cols: [
          {
            title: 'Une zone peut servir dans plusieurs blocs',
            desc: 'Aérobie = Z1+Z2+Z3 et Volume total = Z1+…+Z6 cohabitent côte à côte.',
          },
          {
            title: 'Renommez un bloc, ses cibles suivent',
            desc: 'Ses cibles et vos colonnes enregistrées suivent le nouveau nom.',
          },
          {
            title: 'Retirez un bloc, il reste archivé',
            desc: 'Un bloc retiré est archivé. Ses cibles restent en mémoire s’il revient la saison prochaine.',
          },
        ],
        foot: 'Sans configuration, l’équipe démarre avec quatre blocs classiques (Aérobie, Haute intensité, Course haute vitesse, Sprint), déjà associés aux colonnes que STRIVN a reconnues dans votre export.',
      },
      {
        kicker: 'LE POINT À RETENIR',
        title: 'Le filtre Séances recalcule tout ; Période change l’affichage.',
        kind: 'panels',
        panels: [
          {
            title: 'Séances',
            eyebrow: 'Toutes · Entraînements · Matchs',
            lead: 'un filtre de comparabilité',
            desc: 'La charge externe d’un match est structurellement plus élevée que celle d’un entraînement. Ce filtre change donc tout ce qui est calculé : la séance affichée, les valeurs, la cible suggérée, le ratio et sa base.',
            tone: 'blue',
          },
          {
            title: 'Période',
            eyebrow: '7 j · 4 sem. · 12 sem. · Saison',
            lead: 'une simple fenêtre d’affichage',
            desc: 'Elle change ce qui est listé et ce qui est tracé. La base du ratio reste calculée sur 28 jours, quelle que soit la période que vous choisissez.',
          },
        ],
        callouts: [
          {
            tone: 'orange',
            icon: 'triangle-alert',
            text: 'STRIVN compte l’historique réel du joueur, quelle que soit la fenêtre affichée : « 7 jours » change la liste et laisse le badge de données intact. Choisir « Matchs » recalcule sa cible sur ses matchs, pour comparer un match à des matchs.',
          },
        ],
        note: {
          label: 'Le troisième : Mesure',
          desc: 'Distance ou Temps : les mêmes blocs, dans l’autre unité. Chaque bloc a une cible par mesure ; vous pouvez viser 4 200 m d’aérobie et 15 minutes, indépendamment, et enregistrer l’une laisse l’autre intacte.',
        },
      },
      {
        kicker: 'CE QUE STRIVN LAISSE VIDE',
        title: 'Un chiffre faux est pire qu’une case vide.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: 'Données insuffisantes',
            desc: 'Moins de deux semaines complètes d’historique : le joueur apparaît à part, avec le badge, plutôt qu’avec un ACWR trompeur.',
          },
          {
            name: '—',
            desc: 'Un bloc dont une zone manque dans la mesure affichée reste vide : une somme incomplète est un chiffre faux, pas un chiffre approximatif.',
          },
          {
            name: 'Pas assez de données',
            desc: 'Le bloc interne / externe l’affiche tant que l’historique est trop court. Quand un côté manque (RPE absent, ou donnée GPS absente), le ratio reste vide.',
          },
          {
            name: '(en cours)',
            desc: 'La semaine en cours porte la mention jusqu’à sa clôture : ses valeurs restent provisoires.',
          },
        ],
      },
      {
        bg: 'a',
        kind: 'panels',
        panels: [
          {
            title: 'Lisez chaque joueur par rapport à sa propre base de 28 jours.',
            desc: 'Un ratio externe ÷ interne qui chute nettement sous sa base de 28 jours signale un découplage : le joueur fournit moins de travail mécanique pour un même ressenti, un signe de fatigue cachée. La tête de bloc passe au rouge. Le même ratio comparé à un autre joueur reste muet.',
          },
        ],
      },
      {
        kicker: 'TRAVAILLER DANS VOTRE PROPRE UNITÉ',
        title: 'Déclarez votre propre unité de charge, l’échelle suit.',
        body: 'Par défaut, une séance de 90 minutes à RPE 7 pèse 630 UA et une semaine tourne autour de 3 000, des nombres difficiles à annoncer en réunion. Déclarez votre unité maison, un multiple fixe de l’UA, et l’échelle redevient lisible.',
        visual: 'unit-conversion',
        kind: 'columns',
        cols: [
          {
            title: 'Vos données restent en UA',
            desc: 'La charge reste enregistrée en UA ; l’unité change seulement ce que vous lisez et ce que vous saisissez. Revenez en arrière quand vous voulez, l’historique se relit dans la nouvelle unité.',
          },
          {
            title: 'Tous les écrans suivent',
            desc: 'Charge et tendances, planification, prévu vs réalisé, saison, déroulé de séance, bilans, rapports et le portail des joueurs. Vos objectifs hebdomadaires se tapent directement dans votre unité.',
          },
          {
            title: 'Les ratios gardent leur échelle',
            desc: 'ACWR, monotonie et ratio interne / externe sont des rapports calibrés ; seule la contrainte suit votre unité, puisqu’elle est une quantité de charge.',
          },
        ],
        callouts: [
          {
            icon: 'sparkles',
            tone: 'blue',
            text: 'L’assistant IA connaît votre unité : il cite les chiffres avec votre sigle et comprend « passe l’objectif de la semaine à 29 ».',
          },
          {
            icon: 'triangle-alert',
            tone: 'orange',
            text: 'Le nom devient obligatoire dès que l’équivalence quitte 1 : des valeurs converties sous le sigle « UA » seraient fausses.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── EN ────────────────────────────── */
  en: {
    meta: {
      title: 'Training load, RPE & GPS | STRIVN',
      description:
        'Internal load from sRPE, external load from your GPS export. ACWR, monotony, strain and the external ÷ internal ratio computed for you, in your own load unit.',
    },
    hero: {
      kicker: 'FEATURES · MONITORING',
      title: 'Cross each player’s RPE and GPS on one screen.',
      sub: 'The RPE from the debrief and the duration give internal load. Your GPS export gives external load. STRIVN puts them side by side. ACWR, monotony, strain and the ratio compute themselves.',
      bullets: [
        'sRPE load: RPE × duration, with adjustable match and training coefficients',
        'ACWR, monotony and strain, week after week',
        'GPS: your zones grouped into blocks you name yourself',
        'Load alerts you acknowledge, with a note and an audit trail',
      ],
      ctas: { primary: 'Start for free' },
      visual: 'load-board',
    },
    sections: [
      {
        kicker: 'WHAT YOU READ',
        title: 'Read ACWR, monotony and strain without recomputing them.',
        kind: 'rows',
        rows: [
          {
            name: 'ACWR',
            sub: '7-day load ÷ 28-day load',
            desc: 'The ratio between what the player has just absorbed and what they are used to. The ranking sorts by distance from the range.',
            chip: { label: '0.8 – 1.3', tone: 'green' },
          },
          {
            name: 'Monotony',
            sub: 'mean ÷ daily standard deviation',
            desc: 'How even the load was across the week. High, combined with a high load, it is a fatigue signal worth watching.',
            chip: { label: 'watch', tone: 'orange' },
          },
          {
            name: 'Strain',
            sub: 'total load × monotony',
            desc: 'Volume and the lack of variation in a single number. It is the only one of the four that follows your load unit.',
            chip: { label: 'follows your unit', tone: 'blue' },
          },
          {
            name: 'External ÷ internal ratio',
            sub: 'GPS load ÷ sRPE',
            desc: 'The two measures have different units: the value only reads against the player’s own 28-day baseline.',
            chip: { label: 'vs 28-day base' },
          },
        ],
        note: {
          label: 'Acknowledging keeps the trail',
          desc: 'A load alert is acknowledged with a note: the context, the decision taken. It stays visible, greyed out, with who handled it and when, and stays quiet while that week’s load stays in range.',
        },
      },
      {
        kicker: 'GPS · YOUR SPEED BLOCKS',
        title: 'Name your speed blocks from the exported zones.',
        body: 'Your export has numbered zones, usually in distance and time. You decide how to group them: a block is a name you give to a sum of zones. Your blocks then drive columns, charts and individual targets.',
        visual: 'gps-blocks',
        kind: 'columns',
        cols: [
          {
            title: 'A zone can serve several blocks',
            desc: 'Aerobic = Z1+Z2+Z3 and Total volume = Z1+…+Z6 sit side by side.',
          },
          {
            title: 'Rename a block, its targets follow',
            desc: 'Its targets and your saved columns follow the new name.',
          },
          {
            title: 'Remove a block, it stays archived',
            desc: 'A removed block is archived. Its targets stay on file in case it returns next season.',
          },
        ],
        foot: 'Without configuration, the team starts with four familiar blocks (Aerobic, High intensity, High-speed running, Sprint), already mapped to the columns STRIVN recognised in your export.',
      },
      {
        kicker: 'THE THING TO REMEMBER',
        title: 'The Sessions filter recomputes everything; Period changes the display.',
        kind: 'panels',
        panels: [
          {
            title: 'Sessions',
            eyebrow: 'All · Training · Matches',
            lead: 'a comparability filter',
            desc: 'A match’s external load is structurally higher than a training session’s. So this filter changes everything computed: the session shown, the values, the suggested target, the ratio and its baseline.',
            tone: 'blue',
          },
          {
            title: 'Period',
            eyebrow: '7 d · 4 wk · 12 wk · Season',
            lead: 'a display window, nothing more',
            desc: 'It changes what is listed and what is plotted. The ratio’s baseline stays computed over 28 days, whichever period you pick.',
          },
        ],
        callouts: [
          {
            tone: 'orange',
            icon: 'triangle-alert',
            text: 'STRIVN counts the player’s real history whichever window is on screen: “7 days” changes the list and leaves the data badge intact. Choosing “Matches” recomputes their target from their matches, to compare a match with matches.',
          },
        ],
        note: {
          label: 'The third one: Measure',
          desc: 'Distance or Time: the same blocks, in the other unit. Each block has a target per measure; you can aim for 4,200 m of aerobic work and 15 minutes, independently, and saving one leaves the other intact.',
        },
      },
      {
        kicker: 'WHAT STRIVN LEAVES EMPTY',
        title: 'A wrong number is worse than an empty cell.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: 'Not enough history',
            desc: 'Under two full weeks of history the player appears separately, with the badge, rather than with a misleading ACWR.',
          },
          {
            name: '—',
            desc: 'A block with a zone missing in the displayed measure stays empty: an incomplete sum is a wrong number, not an approximate one.',
          },
          {
            name: 'Not enough data',
            desc: 'The internal / external block shows it while the history is too short. When one side is missing (RPE absent, or GPS data absent), the ratio stays empty.',
          },
          {
            name: '(in progress)',
            desc: 'The current week carries the label until it closes: its values stay provisional.',
          },
        ],
      },
      {
        bg: 'a',
        kind: 'panels',
        panels: [
          {
            title: 'Read each player against their own 28-day baseline.',
            desc: 'An external ÷ internal ratio that drops clearly below its 28-day baseline signals a decoupling: the player is producing less mechanical work for the same perceived effort, a sign of hidden fatigue. The block header turns red. The same ratio compared with another player stays silent.',
          },
        ],
      },
      {
        kicker: 'WORKING IN YOUR OWN UNIT',
        title: 'Declare your own load unit; the scale follows.',
        body: 'By default a 90-minute session at RPE 7 weighs 630 AU and a week lands around 3,000, numbers that are hard to announce in a meeting. Declare your in-house unit, a fixed multiple of the AU, and the scale becomes readable again.',
        visual: 'unit-conversion',
        kind: 'columns',
        cols: [
          {
            title: 'Your data stays in AU',
            desc: 'Load stays recorded in AU; the unit only changes what you read and what you type. Switch back whenever you like, and the history reads in the new unit.',
          },
          {
            title: 'Every screen follows',
            desc: 'Load and trends, planning, planned vs actual, season, session run-through, debriefs, reports, and the player portal. Your weekly targets are typed straight in your unit.',
          },
          {
            title: 'Ratios keep their scale',
            desc: 'ACWR, monotony and the internal / external ratio are calibrated ratios; only strain follows your unit, because it is a load quantity.',
          },
        ],
        callouts: [
          {
            icon: 'sparkles',
            tone: 'blue',
            text: 'The AI assistant knows your unit: it quotes figures with your symbol and understands “set this week’s target to 29”.',
          },
          {
            icon: 'triangle-alert',
            tone: 'orange',
            text: 'The name becomes mandatory as soon as the equivalence leaves 1: converted values under the symbol “AU” would be wrong.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── NL ────────────────────────────── */
  nl: {
    meta: {
      title: 'Belasting, RPE & gps | STRIVN',
      description:
        'Interne belasting via sRPE, externe belasting via je gps-export. ACWR, monotonie, strain en de verhouding extern ÷ intern worden vanzelf berekend, in je eigen belastingseenheid.',
    },
    hero: {
      kicker: 'FUNCTIES · MONITORING',
      title: 'Kruis de RPE en de gps van elke speler.',
      sub: 'De RPE uit de nabespreking en de duur geven de interne belasting. Je gps-export geeft de externe. STRIVN zet ze naast elkaar. ACWR, monotonie, strain en de verhouding rekenen zichzelf uit.',
      bullets: [
        'sRPE-belasting: RPE × duur, met instelbare coëfficiënten voor wedstrijd en training',
        'ACWR, monotonie en strain, week na week',
        'Gps: je zones gegroepeerd in blokken die je zelf een naam geeft',
        'Belastingsmeldingen die je bevestigt, met notitie en spoor',
      ],
      ctas: { primary: 'Gratis beginnen' },
      visual: 'load-board',
    },
    sections: [
      {
        kicker: 'WAT JE LEEST',
        title: 'Lees ACWR, monotonie en strain zonder ze te herberekenen.',
        kind: 'rows',
        rows: [
          {
            name: 'ACWR',
            sub: 'belasting 7 d ÷ belasting 28 d',
            desc: 'De verhouding tussen wat de speler net verwerkt heeft en waaraan hij gewend is. De rangschikking sorteert op afstand tot de zone.',
            chip: { label: '0,8 – 1,3', tone: 'green' },
          },
          {
            name: 'Monotonie',
            sub: 'gemiddelde ÷ dagelijkse standaardafwijking',
            desc: 'Hoe gelijkmatig de belasting over de week lag. Hoog, samen met een hoge belasting, is dat een vermoeidheidssignaal om in de gaten te houden.',
            chip: { label: 'in de gaten houden', tone: 'orange' },
          },
          {
            name: 'Strain',
            sub: 'totale belasting × monotonie',
            desc: 'Volume en gebrek aan variatie in één getal. Als enige van de vier volgt hij je belastingseenheid.',
            chip: { label: 'volgt je eenheid', tone: 'blue' },
          },
          {
            name: 'Verhouding extern ÷ intern',
            sub: 'gps-belasting ÷ sRPE',
            desc: 'Beide metingen hebben een andere eenheid: de waarde leest alleen tegenover de eigen basislijn van 28 dagen van de speler.',
            chip: { label: 'vs basis 28 d' },
          },
        ],
        note: {
          label: 'Bevestigen houdt het spoor',
          desc: 'Een belastingsmelding bevestig je met een notitie: de context, het genomen besluit. Ze blijft zichtbaar, grijs, met wie ze afhandelde en wanneer, en zwijgt zolang de belasting van diezelfde week binnen de norm blijft.',
        },
      },
      {
        kicker: 'GPS · JOUW SNELHEIDSBLOKKEN',
        title: 'Benoem je snelheidsblokken vanuit de zones van je export.',
        body: 'Je export bevat genummerde zones, meestal in afstand en tijd. Jij bepaalt hoe je ze groepeert: een blok is een naam die je aan een som van zones geeft. Je blokken sturen daarna kolommen, grafieken en individuele doelen aan.',
        visual: 'gps-blocks',
        kind: 'columns',
        cols: [
          {
            title: 'Eén zone kan in meerdere blokken zitten',
            desc: 'Aeroob = Z1+Z2+Z3 en Totaal volume = Z1+…+Z6 staan naast elkaar.',
          },
          {
            title: 'Hernoem een blok, de doelen volgen',
            desc: 'De doelen en je opgeslagen kolommen volgen de nieuwe naam.',
          },
          {
            title: 'Verwijder een blok, het blijft gearchiveerd',
            desc: 'Een verwijderd blok wordt gearchiveerd. De doelen blijven bewaard mocht het volgend seizoen terugkomen.',
          },
        ],
        foot: 'Zonder instelling start het team met vier klassieke blokken (Aeroob, Hoge intensiteit, Hoge snelheid, Sprint), al gekoppeld aan de kolommen die STRIVN in je export herkende.',
      },
      {
        kicker: 'HET PUNT OM TE ONTHOUDEN',
        title: 'Het filter Sessies herberekent alles; Periode verandert de weergave.',
        kind: 'panels',
        panels: [
          {
            title: 'Sessies',
            eyebrow: 'Alle · Trainingen · Wedstrijden',
            lead: 'een filter op vergelijkbaarheid',
            desc: 'De externe belasting van een wedstrijd ligt structureel hoger dan die van een training. Dit filter wijzigt dus alles wat berekend wordt: de getoonde sessie, de waarden, het voorgestelde doel, de verhouding en haar basislijn.',
            tone: 'blue',
          },
          {
            title: 'Periode',
            eyebrow: '7 d · 4 wk · 12 wk · Seizoen',
            lead: 'enkel een weergavevenster',
            desc: 'Ze wijzigt wat er wordt opgesomd en uitgezet. De basislijn van de verhouding blijft over 28 dagen berekend, welke periode je ook kiest.',
          },
        ],
        callouts: [
          {
            tone: 'orange',
            icon: 'triangle-alert',
            text: 'STRIVN telt de echte historiek van de speler, welk venster ook getoond wordt: “7 dagen” verandert de lijst en laat het gegevenslabel intact. “Wedstrijden” kiezen herberekent zijn doel op zijn wedstrijden, om een wedstrijd met wedstrijden te vergelijken.',
          },
        ],
        note: {
          label: 'De derde: Meting',
          desc: 'Afstand of Tijd: dezelfde blokken, in de andere eenheid. Elk blok heeft een doel per meting; je kunt onafhankelijk mikken op 4 200 m aeroob en 15 minuten, en het ene opslaan laat het andere intact.',
        },
      },
      {
        kicker: 'WAT STRIVN LEEG LAAT',
        title: 'Een fout getal is erger dan een leeg vakje.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: 'Onvoldoende gegevens',
            desc: 'Onder twee volledige weken historiek verschijnt de speler apart, met het label, in plaats van met een misleidende ACWR.',
          },
          {
            name: '—',
            desc: 'Een blok waarvan een zone ontbreekt in de getoonde meting blijft leeg: een onvolledige som is een fout getal, geen benadering.',
          },
          {
            name: 'Te weinig gegevens',
            desc: 'Het blok intern / extern toont het zolang de historiek te kort is. Ontbreekt één kant (geen RPE, of geen gps-gegeven), dan blijft de verhouding leeg.',
          },
          {
            name: '(lopend)',
            desc: 'De lopende week draagt de vermelding tot ze afgesloten is: haar waarden blijven voorlopig.',
          },
        ],
      },
      {
        bg: 'a',
        kind: 'panels',
        panels: [
          {
            title: 'Lees elke speler tegenover zijn eigen basislijn van 28 dagen.',
            desc: 'Een verhouding extern ÷ intern die duidelijk onder haar basislijn van 28 dagen zakt, wijst op ontkoppeling: de speler levert minder mechanisch werk bij eenzelfde gevoel, een teken van verborgen vermoeidheid. De blokkop wordt rood. Diezelfde verhouding tegenover een andere speler blijft stom.',
          },
        ],
      },
      {
        kicker: 'WERKEN IN JE EIGEN EENHEID',
        title: 'Geef je eigen belastingseenheid op, de schaal volgt.',
        body: 'Standaard weegt een training van 90 minuten op RPE 7 630 AE en komt een week rond 3 000 uit, getallen die je moeilijk aankondigt in een vergadering. Geef je eigen eenheid op, een vast veelvoud van de AE, en de schaal wordt weer leesbaar.',
        visual: 'unit-conversion',
        kind: 'columns',
        cols: [
          {
            title: 'Je gegevens blijven in AE',
            desc: 'De belasting blijft in AE opgeslagen; de eenheid wijzigt alleen wat je leest en wat je invoert. Ga terug wanneer je wilt, de historiek leest in de nieuwe eenheid.',
          },
          {
            title: 'Alle schermen volgen',
            desc: 'Belasting en trends, planning, gepland vs gerealiseerd, seizoen, verloop van de training, nabesprekingen, rapporten en het spelersportaal. Je weekdoelen typ je meteen in je eenheid.',
          },
          {
            title: 'Verhoudingen houden hun schaal',
            desc: 'ACWR, monotonie en de verhouding intern / extern zijn geijkte verhoudingen; alleen strain volgt je eenheid, want dat is een belastingshoeveelheid.',
          },
        ],
        callouts: [
          {
            icon: 'sparkles',
            tone: 'blue',
            text: 'De AI-assistent kent je eenheid: hij noemt de cijfers met jouw afkorting en begrijpt “zet het weekdoel op 29”.',
          },
          {
            icon: 'triangle-alert',
            tone: 'orange',
            text: 'De naam wordt verplicht zodra de gelijkwaardigheid 1 verlaat: omgerekende waarden onder de afkorting “AE” zouden fout zijn.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── DE ────────────────────────────── */
  de: {
    meta: {
      title: 'Belastung, RPE & GPS | STRIVN',
      description:
        'Interne Belastung über sRPE, externe über Ihren GPS-Export. ACWR, Monotonie, Strain und das Verhältnis extern ÷ intern rechnen sich von selbst — in Ihrer eigenen Belastungseinheit.',
    },
    hero: {
      kicker: 'FUNKTIONEN · MONITORING',
      title: 'RPE und GPS jedes Spielers auf einem Bildschirm kreuzen.',
      sub: 'RPE aus der Nachbesprechung und Dauer ergeben die interne Belastung. Ihr GPS-Export die externe. STRIVN stellt beide gegenüber. ACWR, Monotonie, Strain und Verhältnis rechnen sich von selbst.',
      bullets: [
        'sRPE-Belastung: RPE × Dauer, mit einstellbaren Koeffizienten für Spiel und Training',
        'ACWR, Monotonie und Strain, Woche für Woche',
        'GPS: Ihre Zonen zu Blöcken gebündelt, die Sie selbst benennen',
        'Belastungswarnungen zum Quittieren, mit Notiz und Nachvollziehbarkeit',
      ],
      ctas: { primary: 'Kostenlos starten' },
      visual: 'load-board',
    },
    sections: [
      {
        kicker: 'WAS SIE LESEN',
        title: 'Lesen Sie ACWR, Monotonie und Strain, ohne sie nachzurechnen.',
        kind: 'rows',
        rows: [
          {
            name: 'ACWR',
            sub: 'Belastung 7 T ÷ Belastung 28 T',
            desc: 'Das Verhältnis zwischen dem, was der Spieler gerade weggesteckt hat, und dem, was er gewohnt ist. Die Rangliste sortiert nach Abstand zur Zone.',
            chip: { label: '0,8 – 1,3', tone: 'green' },
          },
          {
            name: 'Monotonie',
            sub: 'Mittel ÷ tägliche Standardabweichung',
            desc: 'Wie gleichmäßig die Belastung über die Woche lag. Hoch und mit hoher Belastung kombiniert ist das ein Ermüdungssignal, das man beobachtet.',
            chip: { label: 'beobachten', tone: 'orange' },
          },
          {
            name: 'Strain',
            sub: 'Gesamtbelastung × Monotonie',
            desc: 'Umfang und fehlende Variation in einer Zahl. Als einzige der vier folgt sie Ihrer Belastungseinheit.',
            chip: { label: 'folgt Ihrer Einheit', tone: 'blue' },
          },
          {
            name: 'Verhältnis extern ÷ intern',
            sub: 'GPS-Belastung ÷ sRPE',
            desc: 'Beide Größen haben verschiedene Einheiten: Der Wert liest sich nur gegen die eigene 28-Tage-Basis des Spielers.',
            chip: { label: 'vs Basis 28 T' },
          },
        ],
        note: {
          label: 'Quittieren behält die Spur',
          desc: 'Eine Belastungswarnung wird mit einer Notiz quittiert: Kontext, getroffene Entscheidung. Sie bleibt sichtbar, ausgegraut, mit Bearbeiter und Zeitpunkt, und schweigt, solange die Belastung derselben Woche im Rahmen bleibt.',
        },
      },
      {
        kicker: 'GPS · IHRE TEMPOBLÖCKE',
        title: 'Benennen Sie Ihre Tempoblöcke aus den Zonen Ihres Exports.',
        body: 'Ihr Export enthält nummerierte Zonen, meist in Distanz und Zeit. Sie entscheiden, wie Sie sie bündeln: Ein Block ist ein Name, den Sie einer Summe von Zonen geben. Ihre Blöcke steuern danach Spalten, Diagramme und individuelle Ziele.',
        visual: 'gps-blocks',
        kind: 'columns',
        cols: [
          {
            title: 'Eine Zone darf in mehreren Blöcken stecken',
            desc: 'Aerob = Z1+Z2+Z3 und Gesamtvolumen = Z1+…+Z6 stehen nebeneinander.',
          },
          {
            title: 'Block umbenennen, die Ziele folgen',
            desc: 'Ziele und gespeicherte Spalten folgen dem neuen Namen.',
          },
          {
            title: 'Block entfernen, er bleibt archiviert',
            desc: 'Ein entfernter Block wird archiviert. Seine Ziele bleiben gespeichert, falls er nächste Saison zurückkehrt.',
          },
        ],
        foot: 'Ohne Konfiguration startet das Team mit vier klassischen Blöcken (Aerob, Hohe Intensität, Hochgeschwindigkeitslauf, Sprint), bereits den Spalten zugeordnet, die STRIVN in Ihrem Export erkannt hat.',
      },
      {
        kicker: 'DER PUNKT, DEN MAN BEHÄLT',
        title: 'Der Filter Einheiten rechnet neu; Zeitraum ändert die Anzeige.',
        kind: 'panels',
        panels: [
          {
            title: 'Einheiten',
            eyebrow: 'Alle · Trainings · Spiele',
            lead: 'ein Filter auf Vergleichbarkeit',
            desc: 'Die externe Belastung eines Spiels liegt strukturell höher als die eines Trainings. Dieser Filter ändert also alles Berechnete: die gezeigte Einheit, die Werte, das vorgeschlagene Ziel, das Verhältnis und seine Basis.',
            tone: 'blue',
          },
          {
            title: 'Zeitraum',
            eyebrow: '7 T · 4 Wo. · 12 Wo. · Saison',
            lead: 'nur ein Anzeigefenster',
            desc: 'Er ändert, was aufgelistet und gezeichnet wird. Die Basis des Verhältnisses bleibt über 28 Tage berechnet, welchen Zeitraum Sie auch wählen.',
          },
        ],
        callouts: [
          {
            tone: 'orange',
            icon: 'triangle-alert',
            text: 'STRIVN zählt die tatsächliche Historie des Spielers, welches Fenster auch angezeigt wird: „7 Tage“ ändert die Liste und lässt den Datenhinweis unberührt. „Spiele“ zu wählen berechnet sein Ziel aus seinen Spielen neu, um ein Spiel mit Spielen zu vergleichen.',
          },
        ],
        note: {
          label: 'Das dritte: Messgröße',
          desc: 'Distanz oder Zeit: dieselben Blöcke in der anderen Einheit. Jeder Block hat ein Ziel je Messgröße; Sie können unabhängig 4 200 m aerob und 15 Minuten anpeilen, und das eine zu speichern lässt das andere unberührt.',
        },
      },
      {
        kicker: 'WAS STRIVN LEER LÄSST',
        title: 'Eine falsche Zahl ist schlimmer als ein leeres Feld.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: 'Daten unzureichend',
            desc: 'Unter zwei vollen Wochen Historie erscheint der Spieler separat, mit dem Hinweis, statt mit einem irreführenden ACWR.',
          },
          {
            name: '—',
            desc: 'Ein Block, dem in der angezeigten Messgröße eine Zone fehlt, bleibt leer: Eine unvollständige Summe ist eine falsche Zahl, keine ungefähre.',
          },
          {
            name: 'Zu wenig Daten',
            desc: 'Der Block intern / extern zeigt es, solange die Historie zu kurz ist. Fehlt eine Seite (kein RPE oder keine GPS-Daten), bleibt das Verhältnis leer.',
          },
          {
            name: '(laufend)',
            desc: 'Die laufende Woche trägt den Vermerk bis zu ihrem Abschluss: Ihre Werte bleiben vorläufig.',
          },
        ],
      },
      {
        bg: 'a',
        kind: 'panels',
        panels: [
          {
            title: 'Lesen Sie jeden Spieler gegen seine eigene 28-Tage-Basis.',
            desc: 'Ein Verhältnis extern ÷ intern, das deutlich unter seine 28-Tage-Basis fällt, zeigt eine Entkopplung: Der Spieler leistet weniger mechanische Arbeit bei gleichem Empfinden, ein Zeichen verdeckter Ermüdung. Der Blockkopf wird rot. Dasselbe Verhältnis gegen einen anderen Spieler gehalten bleibt stumm.',
          },
        ],
      },
      {
        kicker: 'IN DER EIGENEN EINHEIT ARBEITEN',
        title: 'Erklären Sie Ihre eigene Belastungseinheit, die Skala folgt.',
        body: 'Standardmäßig wiegt eine 90-Minuten-Einheit bei RPE 7 630 AE, und eine Woche landet um 3 000, Zahlen, die man in einer Sitzung schwer ausspricht. Erklären Sie Ihre Hauseinheit, ein festes Vielfaches der AE, und die Skala wird wieder lesbar.',
        visual: 'unit-conversion',
        kind: 'columns',
        cols: [
          {
            title: 'Ihre Daten bleiben in AE',
            desc: 'Die Belastung bleibt in AE gespeichert; die Einheit ändert nur, was Sie lesen und eingeben. Wechseln Sie jederzeit zurück, die Historie liest sich in der neuen Einheit.',
          },
          {
            title: 'Alle Ansichten ziehen mit',
            desc: 'Belastung und Trends, Planung, geplant vs. tatsächlich, Saison, Ablauf der Einheit, Nachbesprechungen, Berichte und das Spielerportal. Ihre Wochenziele tippen Sie direkt in Ihrer Einheit.',
          },
          {
            title: 'Verhältnisse behalten ihre Skala',
            desc: 'ACWR, Monotonie und das Verhältnis intern / extern sind kalibrierte Verhältnisse; nur der Strain folgt Ihrer Einheit, weil er eine Belastungsmenge ist.',
          },
        ],
        callouts: [
          {
            icon: 'sparkles',
            tone: 'blue',
            text: 'Der KI-Assistent kennt Ihre Einheit: Er nennt die Zahlen mit Ihrem Kürzel und versteht „setz das Wochenziel auf 29“.',
          },
          {
            icon: 'triangle-alert',
            tone: 'orange',
            text: 'Der Name wird Pflicht, sobald die Äquivalenz 1 verlässt: Umgerechnete Werte unter dem Kürzel „AE“ wären falsch.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── PT ────────────────────────────── */
  pt: {
    meta: {
      title: 'Carga, RPE e GPS | STRIVN',
      description:
        'Carga interna por sRPE, carga externa pela sua exportação GPS. ACWR, monotonia, strain e rácio externo ÷ interno calculados sozinhos, na sua própria unidade de carga.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · MONITORIZAÇÃO',
      title: 'Cruze o RPE e o GPS de cada jogador.',
      sub: 'O RPE do balanço e a duração dão a carga interna. A sua exportação GPS dá a externa. A STRIVN põe-nas frente a frente. ACWR, monotonia, strain e rácio calculam-se sozinhos.',
      bullets: [
        'Carga sRPE: RPE × duração, com coeficientes de jogo e treino ajustáveis',
        'ACWR, monotonia e strain, semana após semana',
        'GPS: as suas zonas agrupadas em blocos que você mesmo nomeia',
        'Alertas de carga para confirmar, com nota e rasto',
      ],
      ctas: { primary: 'Começar gratuitamente' },
      visual: 'load-board',
    },
    sections: [
      {
        kicker: 'O QUE VOCÊ LÊ',
        title: 'Leia ACWR, monotonia e strain sem os recalcular.',
        kind: 'rows',
        rows: [
          {
            name: 'ACWR',
            sub: 'carga 7 d ÷ carga 28 d',
            desc: 'A relação entre o que o jogador acabou de absorver e aquilo a que está habituado. A ordenação usa a distância à zona.',
            chip: { label: '0,8 – 1,3', tone: 'green' },
          },
          {
            name: 'Monotonia',
            sub: 'média ÷ desvio-padrão diário',
            desc: 'A regularidade da carga ao longo da semana. Alta e combinada com carga alta, é um sinal de fadiga a vigiar.',
            chip: { label: 'a vigiar', tone: 'orange' },
          },
          {
            name: 'Strain',
            sub: 'carga total × monotonia',
            desc: 'O volume e a falta de variação num só número. É o único dos quatro que segue a sua unidade de carga.',
            chip: { label: 'segue a sua unidade', tone: 'blue' },
          },
          {
            name: 'Rácio externo ÷ interno',
            sub: 'carga GPS ÷ sRPE',
            desc: 'As duas medidas têm unidades diferentes: o valor só se lê face à base de 28 dias do próprio jogador.',
            chip: { label: 'vs base 28 d' },
          },
        ],
        note: {
          label: 'Confirmar guarda o rasto',
          desc: 'Um alerta de carga confirma-se com uma nota: o contexto, a decisão tomada. Fica visível, esbatido, com quem o tratou e quando, e cala-se enquanto a carga da mesma semana se mantiver na norma.',
        },
      },
      {
        kicker: 'GPS · OS SEUS BLOCOS DE VELOCIDADE',
        title: 'Nomeie os seus blocos de velocidade pelas zonas exportadas.',
        body: 'A sua exportação traz zonas numeradas, muitas vezes em distância e em tempo. Você decide como agrupá-las: um bloco é um nome que dá a uma soma de zonas. Os seus blocos comandam depois colunas, gráficos e alvos individuais.',
        visual: 'gps-blocks',
        kind: 'columns',
        cols: [
          {
            title: 'Uma zona pode servir vários blocos',
            desc: 'Aeróbio = Z1+Z2+Z3 e Volume total = Z1+…+Z6 convivem lado a lado.',
          },
          {
            title: 'Renomeie um bloco, os alvos seguem',
            desc: 'Os seus alvos e as colunas guardadas seguem o novo nome.',
          },
          {
            title: 'Retire um bloco, fica arquivado',
            desc: 'Um bloco retirado fica arquivado. Os alvos ficam em memória caso volte na época seguinte.',
          },
        ],
        foot: 'Sem configuração, a equipa arranca com quatro blocos clássicos (Aeróbio, Alta intensidade, Corrida de alta velocidade, Sprint), já associados às colunas que a STRIVN reconheceu na sua exportação.',
      },
      {
        kicker: 'O PONTO A RETER',
        title: 'O filtro Sessões recalcula tudo; Período muda a vista.',
        kind: 'panels',
        panels: [
          {
            title: 'Sessões',
            eyebrow: 'Todas · Treinos · Jogos',
            lead: 'um filtro de comparabilidade',
            desc: 'A carga externa de um jogo é estruturalmente mais alta do que a de um treino. Este filtro altera portanto tudo o que é calculado: a sessão mostrada, os valores, o alvo sugerido, o rácio e a sua base.',
            tone: 'blue',
          },
          {
            title: 'Período',
            eyebrow: '7 d · 4 sem. · 12 sem. · Época',
            lead: 'apenas uma janela de visualização',
            desc: 'Altera o que é listado e o que é traçado. A base do rácio continua calculada em 28 dias, seja qual for o período escolhido.',
          },
        ],
        callouts: [
          {
            tone: 'orange',
            icon: 'triangle-alert',
            text: 'A STRIVN conta o histórico real do jogador, seja qual for a janela mostrada: «7 dias» muda a lista e deixa o rótulo de dados intacto. Escolher «Jogos» recalcula o alvo a partir dos jogos dele, para comparar um jogo com jogos.',
          },
        ],
        note: {
          label: 'O terceiro: Medida',
          desc: 'Distância ou Tempo: os mesmos blocos, na outra unidade. Cada bloco tem um alvo por medida; pode visar 4 200 m de aeróbio e 15 minutos, de forma independente, e guardar um deixa o outro intacto.',
        },
      },
      {
        kicker: 'O QUE A STRIVN DEIXA VAZIO',
        title: 'Um número errado é pior que uma célula vazia.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: 'Dados insuficientes',
            desc: 'Com menos de duas semanas completas de histórico, o jogador aparece à parte, com o rótulo, em vez de com um ACWR enganador.',
          },
          {
            name: '—',
            desc: 'Um bloco a que falta uma zona na medida mostrada fica vazio: uma soma incompleta é um número errado, não um número aproximado.',
          },
          {
            name: 'Dados insuficientes',
            desc: 'O bloco interno / externo mostra-o enquanto o histórico for demasiado curto. Quando falta um lado (RPE ausente, ou dado GPS ausente), o rácio fica vazio.',
          },
          {
            name: '(em curso)',
            desc: 'A semana em curso leva a menção até ao fecho: os valores continuam provisórios.',
          },
        ],
      },
      {
        bg: 'a',
        kind: 'panels',
        panels: [
          {
            title: 'Leia cada jogador face à sua própria base de 28 dias.',
            desc: 'Um rácio externo ÷ interno que cai claramente abaixo da base de 28 dias assinala um desacoplamento: o jogador produz menos trabalho mecânico para a mesma sensação, sinal de fadiga escondida. O cabeçalho do bloco fica vermelho. O mesmo rácio comparado com outro jogador fica mudo.',
          },
        ],
      },
      {
        kicker: 'TRABALHAR NA SUA PRÓPRIA UNIDADE',
        title: 'Declare a sua unidade de carga, a escala acompanha.',
        body: 'Por omissão, um treino de 90 minutos a RPE 7 pesa 630 UA e uma semana ronda os 3 000, números difíceis de anunciar numa reunião. Declare a sua unidade da casa, um múltiplo fixo da UA, e a escala volta a ser legível.',
        visual: 'unit-conversion',
        kind: 'columns',
        cols: [
          {
            title: 'Os seus dados ficam em UA',
            desc: 'A carga fica registada em UA; a unidade só muda o que você lê e o que insere. Volte atrás quando quiser, o histórico lê-se na nova unidade.',
          },
          {
            title: 'Todos os ecrãs acompanham',
            desc: 'Carga e tendências, planeamento, previsto vs realizado, época, desenrolar do treino, balanços, relatórios e o portal dos jogadores. Os objetivos semanais escrevem-se diretamente na sua unidade.',
          },
          {
            title: 'Os rácios mantêm a escala',
            desc: 'ACWR, monotonia e rácio interno / externo são rácios calibrados; só o strain segue a sua unidade, já que é uma quantidade de carga.',
          },
        ],
        callouts: [
          {
            icon: 'sparkles',
            tone: 'blue',
            text: 'O assistente de IA conhece a sua unidade: cita os números com a sua sigla e entende «passa o objetivo da semana para 29».',
          },
          {
            icon: 'triangle-alert',
            tone: 'orange',
            text: 'O nome torna-se obrigatório assim que a equivalência deixa de ser 1: valores convertidos sob a sigla «UA» estariam errados.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── ES ────────────────────────────── */
  es: {
    meta: {
      title: 'Carga, RPE y GPS | STRIVN',
      description:
        'Carga interna por sRPE, carga externa desde tu exportación GPS. ACWR, monotonía, strain y ratio externo ÷ interno calculados solos, en tu propia unidad de carga.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · MONITORIZACIÓN',
      title: 'Cruza el RPE y el GPS de cada jugador.',
      sub: 'El RPE del balance y la duración dan la carga interna. Tu exportación GPS da la externa. STRIVN las pone frente a frente. ACWR, monotonía, strain y ratio se calculan solos.',
      bullets: [
        'Carga sRPE: RPE × duración, con coeficientes de partido y entrenamiento ajustables',
        'ACWR, monotonía y strain, semana tras semana',
        'GPS: tus zonas agrupadas en bloques que nombras tú mismo',
        'Alertas de carga que se marcan, con nota y trazabilidad',
      ],
      ctas: { primary: 'Empezar gratis' },
      visual: 'load-board',
    },
    sections: [
      {
        kicker: 'LO QUE LEES',
        title: 'Lee ACWR, monotonía y strain sin recalcularlos.',
        kind: 'rows',
        rows: [
          {
            name: 'ACWR',
            sub: 'carga 7 d ÷ carga 28 d',
            desc: 'La relación entre lo que el jugador acaba de encajar y aquello a lo que está acostumbrado. La clasificación ordena por distancia a la zona.',
            chip: { label: '0,8 – 1,3', tone: 'green' },
          },
          {
            name: 'Monotonía',
            sub: 'media ÷ desviación típica diaria',
            desc: 'La regularidad de la carga durante la semana. Alta y combinada con carga alta, es una señal de fatiga que conviene vigilar.',
            chip: { label: 'a vigilar', tone: 'orange' },
          },
          {
            name: 'Strain',
            sub: 'carga total × monotonía',
            desc: 'El volumen y la falta de variación en un solo número. Es el único de los cuatro que sigue tu unidad de carga.',
            chip: { label: 'sigue tu unidad', tone: 'blue' },
          },
          {
            name: 'Ratio externo ÷ interno',
            sub: 'carga GPS ÷ sRPE',
            desc: 'Las dos medidas tienen unidades distintas: el valor solo se lee frente a la base de 28 días del propio jugador.',
            chip: { label: 'vs base 28 d' },
          },
        ],
        note: {
          label: 'Marcar conserva el rastro',
          desc: 'Una alerta de carga se marca con una nota: el contexto, la decisión tomada. Sigue visible, atenuada, con quién la trató y cuándo, y calla mientras la carga de esa misma semana se mantenga en la norma.',
        },
      },
      {
        kicker: 'GPS · TUS BLOQUES DE VELOCIDAD',
        title: 'Nombra tus bloques de velocidad desde las zonas exportadas.',
        body: 'Tu exportación trae zonas numeradas, a menudo en distancia y en tiempo. Tú decides cómo agruparlas: un bloque es un nombre que das a una suma de zonas. Tus bloques mandan después sobre columnas, gráficos y objetivos individuales.',
        visual: 'gps-blocks',
        kind: 'columns',
        cols: [
          {
            title: 'Una zona puede servir en varios bloques',
            desc: 'Aeróbico = Z1+Z2+Z3 y Volumen total = Z1+…+Z6 conviven uno al lado del otro.',
          },
          {
            title: 'Renombra un bloque, sus objetivos siguen',
            desc: 'Sus objetivos y tus columnas guardadas siguen el nombre nuevo.',
          },
          {
            title: 'Retira un bloque, queda archivado',
            desc: 'Un bloque retirado queda archivado. Sus objetivos siguen en memoria por si vuelve la próxima temporada.',
          },
        ],
        foot: 'Sin configuración, el equipo arranca con cuatro bloques clásicos (Aeróbico, Alta intensidad, Carrera de alta velocidad, Sprint), ya asociados a las columnas que STRIVN reconoció en tu exportación.',
      },
      {
        kicker: 'LO QUE HAY QUE RETENER',
        title: 'El filtro Sesiones recalcula todo; Periodo cambia la vista.',
        kind: 'panels',
        panels: [
          {
            title: 'Sesiones',
            eyebrow: 'Todas · Entrenamientos · Partidos',
            lead: 'un filtro de comparabilidad',
            desc: 'La carga externa de un partido es estructuralmente más alta que la de un entrenamiento. Este filtro cambia por tanto todo lo que se calcula: la sesión mostrada, los valores, el objetivo sugerido, el ratio y su base.',
            tone: 'blue',
          },
          {
            title: 'Periodo',
            eyebrow: '7 d · 4 sem. · 12 sem. · Temporada',
            lead: 'solo una ventana de visualización',
            desc: 'Cambia lo que se lista y lo que se traza. La base del ratio sigue calculándose sobre 28 días, sea cual sea el periodo que elijas.',
          },
        ],
        callouts: [
          {
            tone: 'orange',
            icon: 'triangle-alert',
            text: 'STRIVN cuenta el historial real del jugador, sea cual sea la ventana mostrada: «7 días» cambia la lista y deja intacta la etiqueta de datos. Elegir «Partidos» recalcula su objetivo sobre sus partidos, para comparar un partido con partidos.',
          },
        ],
        note: {
          label: 'El tercero: Medida',
          desc: 'Distancia o Tiempo: los mismos bloques, en la otra unidad. Cada bloque tiene un objetivo por medida; puedes apuntar a 4 200 m de aeróbico y 15 minutos, de forma independiente, y guardar uno deja el otro intacto.',
        },
      },
      {
        kicker: 'LO QUE STRIVN DEJA VACÍO',
        title: 'Un número falso es peor que una casilla vacía.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: 'Datos insuficientes',
            desc: 'Con menos de dos semanas completas de historial, el jugador aparece aparte, con la etiqueta, en vez de con un ACWR engañoso.',
          },
          {
            name: '—',
            desc: 'Un bloque al que le falta una zona en la medida mostrada queda vacío: una suma incompleta es un número falso, no un número aproximado.',
          },
          {
            name: 'Datos insuficientes',
            desc: 'El bloque interno / externo lo muestra mientras el historial sea demasiado corto. Cuando falta un lado (RPE ausente, o dato GPS ausente), el ratio queda vacío.',
          },
          {
            name: '(en curso)',
            desc: 'La semana en curso lleva la mención hasta su cierre: sus valores siguen siendo provisionales.',
          },
        ],
      },
      {
        bg: 'a',
        kind: 'panels',
        panels: [
          {
            title: 'Lee a cada jugador frente a su propia base de 28 días.',
            desc: 'Un ratio externo ÷ interno que cae claramente por debajo de su base de 28 días señala un desacoplamiento: el jugador produce menos trabajo mecánico para la misma sensación, signo de fatiga oculta. La cabecera del bloque se pone en rojo. Ese mismo ratio frente a otro jugador queda mudo.',
          },
        ],
      },
      {
        kicker: 'TRABAJAR EN TU PROPIA UNIDAD',
        title: 'Declara tu propia unidad de carga, la escala sigue.',
        body: 'Por defecto, una sesión de 90 minutos a RPE 7 pesa 630 UA y una semana ronda las 3 000, números difíciles de anunciar en una reunión. Declara tu unidad de la casa, un múltiplo fijo de la UA, y la escala vuelve a ser legible.',
        visual: 'unit-conversion',
        kind: 'columns',
        cols: [
          {
            title: 'Tus datos siguen en UA',
            desc: 'La carga sigue registrada en UA; la unidad solo cambia lo que lees y lo que introduces. Vuelve atrás cuando quieras, el historial se relee en la nueva unidad.',
          },
          {
            title: 'Todas las pantallas siguen',
            desc: 'Carga y tendencias, planificación, previsto vs realizado, temporada, desarrollo de la sesión, balances, informes y el portal de los jugadores. Tus objetivos semanales se escriben directamente en tu unidad.',
          },
          {
            title: 'Los ratios mantienen su escala',
            desc: 'ACWR, monotonía y ratio interno / externo son ratios calibrados; solo el strain sigue tu unidad, puesto que es una cantidad de carga.',
          },
        ],
        callouts: [
          {
            icon: 'sparkles',
            tone: 'blue',
            text: 'El asistente de IA conoce tu unidad: cita las cifras con tu sigla y entiende «pon el objetivo de la semana en 29».',
          },
          {
            icon: 'triangle-alert',
            tone: 'orange',
            text: 'El nombre pasa a ser obligatorio en cuanto la equivalencia deja de ser 1: valores convertidos bajo la sigla «UA» serían falsos.',
          },
        ],
      },
    ],
  },
};
