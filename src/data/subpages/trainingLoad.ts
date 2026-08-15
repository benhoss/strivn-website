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
      title: 'Le ressenti d’un côté, le GPS de l’autre. Sur le même écran.',
      sub: 'Le RPE du bilan et la durée donnent la charge interne. Votre export GPS donne la charge externe. STRIVN les met face à face — ACWR, monotonie, contrainte et ratio se calculent seuls.',
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
        title: 'ACWR, monotonie, contrainte : ce qu’ils disent.',
        kind: 'rows',
        rows: [
          {
            name: 'ACWR',
            sub: 'charge 7 j ÷ charge 28 j',
            desc: 'Le rapport entre ce que le joueur vient d’encaisser et ce à quoi il est habitué. Le classement trie par écart à la zone, pas par valeur.',
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
            desc: 'Aucun sens absolu — les deux mesures n’ont pas la même unité. Le seul repère est l’écart à la base 28 jours du joueur lui-même.',
            chip: { label: 'vs base 28 j' },
          },
        ],
        note: {
          label: 'Acquitter n’est pas effacer',
          desc: 'Une alerte de charge s’acquitte avec une note — le contexte, la décision prise. Elle reste visible, grisée, avec qui l’a traitée et quand, et ne redéclenche pas tant que la charge de la même semaine reste dans la norme.',
        },
      },
      {
        kicker: 'GPS · VOS BLOCS DE VITESSE',
        title: 'Un export GPS ne contient pas de colonne « aérobie ».',
        body: 'Il contient des zones numérotées, souvent en distance et en temps. C’est vous qui décidez comment les regrouper : un bloc est un nom que vous donnez à une somme de zones. Vos blocs pilotent ensuite tout le reste — colonnes, graphiques, cibles individuelles.',
        visual: 'gps-blocks',
        kind: 'columns',
        cols: [
          {
            title: 'Une zone peut servir dans plusieurs blocs',
            desc: 'Rien n’empêche d’avoir Aérobie = Z1+Z2+Z3 et Volume total = Z1+…+Z6 côte à côte.',
          },
          {
            title: 'Renommer un bloc ne perd rien',
            desc: 'Ses cibles et vos colonnes enregistrées suivent le nouveau nom, sans rien retaper.',
          },
          {
            title: 'Retirer n’est pas supprimer',
            desc: 'Un bloc retiré est archivé. Ses cibles restent en mémoire s’il revient la saison prochaine.',
          },
        ],
        foot: 'Si vous ne configurez rien, l’équipe démarre avec quatre blocs classiques — Aérobie, Haute intensité, Course haute vitesse, Sprint — déjà associés aux colonnes que STRIVN a reconnues dans votre export.',
      },
      {
        kicker: 'LE POINT À RETENIR',
        title: 'L’un recalcule tout. L’autre change juste l’affichage.',
        kind: 'panels',
        panels: [
          {
            title: 'Séances',
            eyebrow: 'Toutes · Entraînements · Matchs',
            lead: 'un filtre de comparabilité',
            desc: 'Un match et un entraînement ne se comparent pas : la charge externe d’un match est structurellement plus élevée. Ce filtre change donc tout ce qui est calculé — la séance affichée, les valeurs, la cible suggérée, le ratio et sa base.',
            tone: 'blue',
          },
          {
            title: 'Période',
            eyebrow: '7 j · 4 sem. · 12 sem. · Saison',
            lead: 'une simple fenêtre d’affichage',
            desc: 'Elle change ce qui est listé et ce qui est tracé, et rien d’autre. La base du ratio reste calculée sur 28 jours, quelle que soit la période que vous choisissez.',
          },
        ],
        callouts: [
          {
            tone: 'orange',
            icon: 'triangle-alert',
            text: 'Choisir « 7 jours » ne rend pas un joueur « en manque de données » : STRIVN compte son historique réel, pas la fenêtre affichée. Choisir « Matchs », en revanche, recalcule sa cible sur ses matchs — sinon vous compareriez un match à une moyenne d’entraînements.',
          },
        ],
        note: {
          label: 'Le troisième : Mesure',
          desc: 'Distance ou Temps : les mêmes blocs, dans l’autre unité. Chaque bloc a une cible par mesure — vous pouvez viser 4 200 m d’aérobie et 15 minutes, indépendamment. Enregistrer l’une ne touche pas l’autre.',
        },
      },
      {
        kicker: 'CE QUE STRIVN REFUSE D’AFFICHER',
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
            desc: 'Un bloc dont toutes les zones ne sont pas associées dans la mesure affichée reste vide. STRIVN n’additionne jamais une partie des zones : une somme incomplète est un chiffre faux, pas un chiffre approximatif.',
          },
          {
            name: 'Pas assez de données',
            desc: 'Le bloc interne / externe le dit tant que l’historique est trop court. Et quand un côté manque — pas de RPE saisi, ou pas de donnée GPS — le ratio reste vide.',
          },
          {
            name: '(en cours)',
            desc: 'La semaine en cours porte la mention tant qu’elle n’est pas terminée : ses valeurs ne sont pas encore définitives.',
          },
        ],
      },
      {
        bg: 'a',
        kind: 'panels',
        panels: [
          {
            title: 'Le seul signal qui vaut : l’écart du joueur à sa propre base.',
            desc: 'Un ratio externe ÷ interne qui chute nettement sous sa base de 28 jours signale un découplage : le joueur fournit moins de travail mécanique pour un même ressenti — un signe de fatigue cachée. La tête de bloc passe au rouge. Comparé à un autre joueur, ce même ratio ne dit rien.',
          },
        ],
      },
      {
        kicker: 'TRAVAILLER DANS VOTRE PROPRE UNITÉ',
        title: 'Si votre staff ne raisonne pas en UA, changez d’unité.',
        body: 'Par défaut, une séance de 90 minutes à RPE 7 pèse 630 UA et une semaine tourne autour de 3 000. Des nombres qu’on n’annonce pas facilement en réunion. Déclarez votre unité maison — un multiple fixe de l’UA — et l’échelle redevient lisible.',
        visual: 'unit-conversion',
        kind: 'columns',
        cols: [
          {
            title: 'Vos données ne bougent pas',
            desc: 'La charge reste enregistrée en UA. L’unité ne change que ce que vous lisez et ce que vous saisissez — vous pouvez revenir en arrière quand vous voulez, l’historique se relit simplement dans la nouvelle unité.',
          },
          {
            title: 'Tous les écrans suivent',
            desc: 'Charge et tendances, planification, prévu vs réalisé, saison, déroulé de séance, bilans, rapports — et le portail des joueurs. Vos objectifs hebdomadaires se tapent directement dans votre unité.',
          },
          {
            title: 'Les ratios gardent leur échelle',
            desc: 'ACWR, monotonie et ratio interne / externe sont des rapports calibrés, pas des quantités de charge. Seule la contrainte suit votre unité, puisqu’elle en est une.',
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
            text: 'Le nom devient obligatoire dès que l’équivalence quitte 1 — sinon des valeurs converties s’afficheraient sous le sigle « UA », qui n’est plus le bon.',
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
      title: 'Perceived effort on one side, GPS on the other. Same screen.',
      sub: 'The RPE from the debrief and the duration give internal load. Your GPS export gives external load. STRIVN puts them side by side — ACWR, monotony, strain and the ratio compute themselves.',
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
        title: 'ACWR, monotony, strain: what they say.',
        kind: 'rows',
        rows: [
          {
            name: 'ACWR',
            sub: '7-day load ÷ 28-day load',
            desc: 'The ratio between what the player has just absorbed and what they are used to. The ranking sorts by distance from the range, not by value.',
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
            desc: 'No absolute meaning — the two measures do not share a unit. The only reference is the gap to the player’s own 28-day baseline.',
            chip: { label: 'vs 28-day base' },
          },
        ],
        note: {
          label: 'Acknowledging is not erasing',
          desc: 'A load alert is acknowledged with a note — the context, the decision taken. It stays visible, greyed out, with who handled it and when, and does not fire again while that week’s load stays in range.',
        },
      },
      {
        kicker: 'GPS · YOUR SPEED BLOCKS',
        title: 'A GPS export has no “aerobic” column.',
        body: 'It has numbered zones, usually in distance and time. How to group them is your call: a block is a name you give to a sum of zones. Your blocks then drive everything else — columns, charts, individual targets.',
        visual: 'gps-blocks',
        kind: 'columns',
        cols: [
          {
            title: 'A zone can serve several blocks',
            desc: 'Nothing stops Aerobic = Z1+Z2+Z3 and Total volume = Z1+…+Z6 from sitting side by side.',
          },
          {
            title: 'Renaming a block loses nothing',
            desc: 'Its targets and your saved columns follow the new name, with nothing to retype.',
          },
          {
            title: 'Removing is not deleting',
            desc: 'A removed block is archived. Its targets stay on file in case it returns next season.',
          },
        ],
        foot: 'Configure nothing and the team starts with four familiar blocks — Aerobic, High intensity, High-speed running, Sprint — already mapped to the columns STRIVN recognised in your export.',
      },
      {
        kicker: 'THE THING TO REMEMBER',
        title: 'One recalculates everything. The other only changes the display.',
        kind: 'panels',
        panels: [
          {
            title: 'Sessions',
            eyebrow: 'All · Training · Matches',
            lead: 'a comparability filter',
            desc: 'A match and a training session do not compare: a match’s external load is structurally higher. So this filter changes everything computed — the session shown, the values, the suggested target, the ratio and its baseline.',
            tone: 'blue',
          },
          {
            title: 'Period',
            eyebrow: '7 d · 4 wk · 12 wk · Season',
            lead: 'a display window, nothing more',
            desc: 'It changes what is listed and what is plotted, and nothing else. The ratio’s baseline stays computed over 28 days, whichever period you pick.',
          },
        ],
        callouts: [
          {
            tone: 'orange',
            icon: 'triangle-alert',
            text: 'Choosing “7 days” does not make a player “short of data”: STRIVN counts their real history, not the window on screen. Choosing “Matches”, on the other hand, recomputes their target from their matches — otherwise you would be comparing a match to a training average.',
          },
        ],
        note: {
          label: 'The third one: Measure',
          desc: 'Distance or Time: the same blocks, in the other unit. Each block has a target per measure — you can aim for 4,200 m of aerobic work and 15 minutes, independently. Saving one does not touch the other.',
        },
      },
      {
        kicker: 'WHAT STRIVN REFUSES TO SHOW',
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
            desc: 'A block whose zones are not all mapped in the displayed measure stays empty. STRIVN never adds up part of the zones: an incomplete sum is a wrong number, not an approximate one.',
          },
          {
            name: 'Not enough data',
            desc: 'The internal / external block says so while the history is too short. And when one side is missing — no RPE entered, or no GPS data — the ratio stays empty.',
          },
          {
            name: '(in progress)',
            desc: 'The current week carries the label until it ends: its values are not final yet.',
          },
        ],
      },
      {
        bg: 'a',
        kind: 'panels',
        panels: [
          {
            title: 'The only signal that counts: the player’s gap to their own baseline.',
            desc: 'An external ÷ internal ratio that drops clearly below its 28-day baseline signals a decoupling: the player is producing less mechanical work for the same perceived effort — a sign of hidden fatigue. The block header turns red. Against another player, that same ratio says nothing.',
          },
        ],
      },
      {
        kicker: 'WORKING IN YOUR OWN UNIT',
        title: 'If your staff does not think in AU, change the unit.',
        body: 'By default a 90-minute session at RPE 7 weighs 630 AU and a week lands around 3,000. Not numbers you announce easily in a meeting. Declare your in-house unit — a fixed multiple of the AU — and the scale becomes readable again.',
        visual: 'unit-conversion',
        kind: 'columns',
        cols: [
          {
            title: 'Your data does not move',
            desc: 'Load stays recorded in AU. The unit only changes what you read and what you type — you can switch back whenever you like, and the history simply reads in the new unit.',
          },
          {
            title: 'Every screen follows',
            desc: 'Load and trends, planning, planned vs actual, season, session run-through, debriefs, reports — and the player portal. Your weekly targets are typed straight in your unit.',
          },
          {
            title: 'Ratios keep their scale',
            desc: 'ACWR, monotony and the internal / external ratio are calibrated ratios, not load quantities. Only strain follows your unit, because it is one.',
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
            text: 'The name becomes mandatory as soon as the equivalence leaves 1 — otherwise converted values would show under the symbol “AU”, which is no longer the right one.',
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
      title: 'Het gevoel aan de ene kant, de GPS aan de andere. Zelfde scherm.',
      sub: 'De RPE uit de nabespreking en de duur geven de interne belasting. Je gps-export geeft de externe. STRIVN zet ze naast elkaar — ACWR, monotonie, strain en de verhouding rekenen zichzelf uit.',
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
        title: 'ACWR, monotonie, strain: wat ze zeggen.',
        kind: 'rows',
        rows: [
          {
            name: 'ACWR',
            sub: 'belasting 7 d ÷ belasting 28 d',
            desc: 'De verhouding tussen wat de speler net verwerkt heeft en waaraan hij gewend is. De rangschikking sorteert op afstand tot de zone, niet op waarde.',
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
            desc: 'Geen absolute betekenis — beide metingen delen geen eenheid. Het enige ijkpunt is het verschil met de eigen basislijn van 28 dagen.',
            chip: { label: 'vs basis 28 d' },
          },
        ],
        note: {
          label: 'Bevestigen is niet wissen',
          desc: 'Een belastingsmelding bevestig je met een notitie — de context, het genomen besluit. Ze blijft zichtbaar, grijs, met wie ze afhandelde en wanneer, en gaat niet opnieuw af zolang de belasting van diezelfde week binnen de norm blijft.',
        },
      },
      {
        kicker: 'GPS · JOUW SNELHEIDSBLOKKEN',
        title: 'Een gps-export bevat geen kolom “aeroob”.',
        body: 'Ze bevat genummerde zones, meestal in afstand en tijd. Hoe je ze groepeert bepaal jij: een blok is een naam die je aan een som van zones geeft. Je blokken sturen daarna al de rest aan — kolommen, grafieken, individuele doelen.',
        visual: 'gps-blocks',
        kind: 'columns',
        cols: [
          {
            title: 'Eén zone kan in meerdere blokken zitten',
            desc: 'Niets belet dat Aeroob = Z1+Z2+Z3 en Totaal volume = Z1+…+Z6 naast elkaar staan.',
          },
          {
            title: 'Een blok hernoemen verliest niets',
            desc: 'De doelen en je opgeslagen kolommen volgen de nieuwe naam, zonder iets opnieuw te typen.',
          },
          {
            title: 'Verwijderen is niet wissen',
            desc: 'Een verwijderd blok wordt gearchiveerd. De doelen blijven bewaard mocht het volgend seizoen terugkomen.',
          },
        ],
        foot: 'Stel je niets in, dan start het team met vier klassieke blokken — Aeroob, Hoge intensiteit, Hoge snelheid, Sprint — al gekoppeld aan de kolommen die STRIVN in je export herkende.',
      },
      {
        kicker: 'HET PUNT OM TE ONTHOUDEN',
        title: 'De ene herberekent alles. De andere verandert alleen de weergave.',
        kind: 'panels',
        panels: [
          {
            title: 'Sessies',
            eyebrow: 'Alle · Trainingen · Wedstrijden',
            lead: 'een filter op vergelijkbaarheid',
            desc: 'Een wedstrijd en een training vergelijk je niet: de externe belasting van een wedstrijd ligt structureel hoger. Dit filter wijzigt dus alles wat berekend wordt — de getoonde sessie, de waarden, het voorgestelde doel, de verhouding en haar basislijn.',
            tone: 'blue',
          },
          {
            title: 'Periode',
            eyebrow: '7 d · 4 wk · 12 wk · Seizoen',
            lead: 'enkel een weergavevenster',
            desc: 'Ze wijzigt wat er wordt opgesomd en uitgezet, en niets anders. De basislijn van de verhouding blijft over 28 dagen berekend, welke periode je ook kiest.',
          },
        ],
        callouts: [
          {
            tone: 'orange',
            icon: 'triangle-alert',
            text: '“7 dagen” kiezen maakt een speler niet “met te weinig gegevens”: STRIVN telt zijn echte historiek, niet het getoonde venster. “Wedstrijden” kiezen herberekent zijn doel wél op zijn wedstrijden — anders vergelijk je een wedstrijd met een trainingsgemiddelde.',
          },
        ],
        note: {
          label: 'De derde: Meting',
          desc: 'Afstand of Tijd: dezelfde blokken, in de andere eenheid. Elk blok heeft een doel per meting — je kunt onafhankelijk mikken op 4 200 m aeroob en 15 minuten. Het ene opslaan raakt het andere niet.',
        },
      },
      {
        kicker: 'WAT STRIVN WEIGERT TE TONEN',
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
            desc: 'Een blok waarvan niet alle zones gekoppeld zijn in de getoonde meting blijft leeg. STRIVN telt nooit een deel van de zones op: een onvolledige som is een fout getal, geen benadering.',
          },
          {
            name: 'Te weinig gegevens',
            desc: 'Het blok intern / extern zegt het zolang de historiek te kort is. En ontbreekt één kant — geen RPE ingevoerd, of geen gps-gegeven — dan blijft de verhouding leeg.',
          },
          {
            name: '(lopend)',
            desc: 'De lopende week draagt de vermelding tot ze afgelopen is: haar waarden zijn nog niet definitief.',
          },
        ],
      },
      {
        bg: 'a',
        kind: 'panels',
        panels: [
          {
            title: 'Het enige signaal dat telt: het verschil met de eigen basislijn.',
            desc: 'Een verhouding extern ÷ intern die duidelijk onder haar basislijn van 28 dagen zakt, wijst op ontkoppeling: de speler levert minder mechanisch werk bij eenzelfde gevoel — een teken van verborgen vermoeidheid. De blokkop wordt rood. Tegenover een andere speler zegt diezelfde verhouding niets.',
          },
        ],
      },
      {
        kicker: 'WERKEN IN JE EIGEN EENHEID',
        title: 'Denkt je staf niet in AE, verander dan van eenheid.',
        body: 'Standaard weegt een training van 90 minuten op RPE 7 630 AE en komt een week rond 3 000 uit. Geen getallen die je makkelijk aankondigt in een vergadering. Geef je eigen eenheid op — een vast veelvoud van de AE — en de schaal wordt weer leesbaar.',
        visual: 'unit-conversion',
        kind: 'columns',
        cols: [
          {
            title: 'Je gegevens verschuiven niet',
            desc: 'De belasting blijft in AE opgeslagen. De eenheid wijzigt alleen wat je leest en wat je invoert — je kunt altijd terug, en de historiek leest gewoon in de nieuwe eenheid.',
          },
          {
            title: 'Alle schermen volgen',
            desc: 'Belasting en trends, planning, gepland vs gerealiseerd, seizoen, verloop van de training, nabesprekingen, rapporten — en het spelersportaal. Je weekdoelen typ je meteen in je eenheid.',
          },
          {
            title: 'Verhoudingen houden hun schaal',
            desc: 'ACWR, monotonie en de verhouding intern / extern zijn geijkte verhoudingen, geen belastingshoeveelheden. Alleen strain volgt je eenheid, want dat ís er een.',
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
            text: 'De naam wordt verplicht zodra de gelijkwaardigheid 1 verlaat — anders zouden omgerekende waarden onder de afkorting “AE” verschijnen, die dan niet meer klopt.',
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
      title: 'Das Empfinden auf der einen Seite, das GPS auf der anderen. Ein Bildschirm.',
      sub: 'RPE aus der Nachbesprechung und Dauer ergeben die interne Belastung. Ihr GPS-Export die externe. STRIVN stellt beide gegenüber — ACWR, Monotonie, Strain und Verhältnis rechnen sich von selbst.',
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
        title: 'ACWR, Monotonie, Strain: was sie sagen.',
        kind: 'rows',
        rows: [
          {
            name: 'ACWR',
            sub: 'Belastung 7 T ÷ Belastung 28 T',
            desc: 'Das Verhältnis zwischen dem, was der Spieler gerade weggesteckt hat, und dem, was er gewohnt ist. Die Rangliste sortiert nach Abstand zur Zone, nicht nach Wert.',
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
            desc: 'Keine absolute Bedeutung — beide Größen teilen keine Einheit. Der einzige Bezug ist der Abstand zur eigenen 28-Tage-Basis des Spielers.',
            chip: { label: 'vs Basis 28 T' },
          },
        ],
        note: {
          label: 'Quittieren heißt nicht löschen',
          desc: 'Eine Belastungswarnung wird mit einer Notiz quittiert — Kontext, getroffene Entscheidung. Sie bleibt sichtbar, ausgegraut, mit Bearbeiter und Zeitpunkt, und löst nicht erneut aus, solange die Belastung derselben Woche im Rahmen bleibt.',
        },
      },
      {
        kicker: 'GPS · IHRE TEMPOBLÖCKE',
        title: 'Ein GPS-Export enthält keine Spalte „aerob“.',
        body: 'Er enthält nummerierte Zonen, meist in Distanz und Zeit. Wie Sie sie bündeln, entscheiden Sie: Ein Block ist ein Name, den Sie einer Summe von Zonen geben. Ihre Blöcke steuern danach alles Weitere — Spalten, Diagramme, individuelle Ziele.',
        visual: 'gps-blocks',
        kind: 'columns',
        cols: [
          {
            title: 'Eine Zone darf in mehreren Blöcken stecken',
            desc: 'Nichts hindert Sie, Aerob = Z1+Z2+Z3 und Gesamtvolumen = Z1+…+Z6 nebeneinander zu führen.',
          },
          {
            title: 'Umbenennen verliert nichts',
            desc: 'Ziele und gespeicherte Spalten folgen dem neuen Namen, ohne dass Sie etwas neu tippen.',
          },
          {
            title: 'Entfernen ist kein Löschen',
            desc: 'Ein entfernter Block wird archiviert. Seine Ziele bleiben gespeichert, falls er nächste Saison zurückkehrt.',
          },
        ],
        foot: 'Konfigurieren Sie nichts, startet das Team mit vier klassischen Blöcken — Aerob, Hohe Intensität, Hochgeschwindigkeitslauf, Sprint — bereits den Spalten zugeordnet, die STRIVN in Ihrem Export erkannt hat.',
      },
      {
        kicker: 'DER PUNKT, DEN MAN BEHÄLT',
        title: 'Das eine rechnet alles neu. Das andere ändert nur die Anzeige.',
        kind: 'panels',
        panels: [
          {
            title: 'Einheiten',
            eyebrow: 'Alle · Trainings · Spiele',
            lead: 'ein Filter auf Vergleichbarkeit',
            desc: 'Ein Spiel und ein Training vergleicht man nicht: Die externe Belastung eines Spiels liegt strukturell höher. Dieser Filter ändert also alles Berechnete — die gezeigte Einheit, die Werte, das vorgeschlagene Ziel, das Verhältnis und seine Basis.',
            tone: 'blue',
          },
          {
            title: 'Zeitraum',
            eyebrow: '7 T · 4 Wo. · 12 Wo. · Saison',
            lead: 'nur ein Anzeigefenster',
            desc: 'Er ändert, was aufgelistet und gezeichnet wird, und sonst nichts. Die Basis des Verhältnisses bleibt über 28 Tage berechnet, welchen Zeitraum Sie auch wählen.',
          },
        ],
        callouts: [
          {
            tone: 'orange',
            icon: 'triangle-alert',
            text: '„7 Tage“ zu wählen macht einen Spieler nicht „datenarm“: STRIVN zählt seine tatsächliche Historie, nicht das angezeigte Fenster. „Spiele“ zu wählen berechnet sein Ziel dagegen aus seinen Spielen neu — sonst verglichen Sie ein Spiel mit einem Trainingsmittel.',
          },
        ],
        note: {
          label: 'Das dritte: Messgröße',
          desc: 'Distanz oder Zeit: dieselben Blöcke in der anderen Einheit. Jeder Block hat ein Ziel je Messgröße — Sie können unabhängig 4 200 m aerob und 15 Minuten anpeilen. Das eine zu speichern rührt das andere nicht an.',
        },
      },
      {
        kicker: 'WAS STRIVN NICHT ANZEIGT',
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
            desc: 'Ein Block, dessen Zonen in der angezeigten Messgröße nicht alle zugeordnet sind, bleibt leer. STRIVN addiert nie einen Teil der Zonen: Eine unvollständige Summe ist eine falsche Zahl, keine ungefähre.',
          },
          {
            name: 'Zu wenig Daten',
            desc: 'Der Block intern / extern sagt es, solange die Historie zu kurz ist. Und fehlt eine Seite — kein RPE erfasst oder keine GPS-Daten —, bleibt das Verhältnis leer.',
          },
          {
            name: '(laufend)',
            desc: 'Die laufende Woche trägt den Vermerk, bis sie beendet ist: Ihre Werte sind noch nicht endgültig.',
          },
        ],
      },
      {
        bg: 'a',
        kind: 'panels',
        panels: [
          {
            title: 'Das einzige Signal, das zählt: der Abstand des Spielers zu seiner eigenen Basis.',
            desc: 'Ein Verhältnis extern ÷ intern, das deutlich unter seine 28-Tage-Basis fällt, zeigt eine Entkopplung: Der Spieler leistet weniger mechanische Arbeit bei gleichem Empfinden — ein Zeichen verdeckter Ermüdung. Der Blockkopf wird rot. Gegen einen anderen Spieler gehalten sagt dasselbe Verhältnis nichts.',
          },
        ],
      },
      {
        kicker: 'IN DER EIGENEN EINHEIT ARBEITEN',
        title: 'Denkt Ihr Staff nicht in AE, wechseln Sie die Einheit.',
        body: 'Standardmäßig wiegt eine 90-Minuten-Einheit bei RPE 7 630 AE, und eine Woche landet um 3 000. Zahlen, die man in einer Sitzung nicht leicht ausspricht. Erklären Sie Ihre Hauseinheit — ein festes Vielfaches der AE — und die Skala wird wieder lesbar.',
        visual: 'unit-conversion',
        kind: 'columns',
        cols: [
          {
            title: 'Ihre Daten bewegen sich nicht',
            desc: 'Die Belastung bleibt in AE gespeichert. Die Einheit ändert nur, was Sie lesen und eingeben — Sie können jederzeit zurück, und die Historie liest sich schlicht in der neuen Einheit.',
          },
          {
            title: 'Alle Ansichten ziehen mit',
            desc: 'Belastung und Trends, Planung, geplant vs. tatsächlich, Saison, Ablauf der Einheit, Nachbesprechungen, Berichte — und das Spielerportal. Ihre Wochenziele tippen Sie direkt in Ihrer Einheit.',
          },
          {
            title: 'Verhältnisse behalten ihre Skala',
            desc: 'ACWR, Monotonie und das Verhältnis intern / extern sind kalibrierte Verhältnisse, keine Belastungsmengen. Nur der Strain folgt Ihrer Einheit, weil er selbst eine ist.',
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
            text: 'Der Name wird Pflicht, sobald die Äquivalenz 1 verlässt — sonst erschienen umgerechnete Werte unter dem Kürzel „AE“, das dann nicht mehr stimmt.',
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
      title: 'O sentido de um lado, o GPS do outro. No mesmo ecrã.',
      sub: 'O RPE do balanço e a duração dão a carga interna. A sua exportação GPS dá a externa. A STRIVN põe-nas frente a frente — ACWR, monotonia, strain e rácio calculam-se sozinhos.',
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
        title: 'ACWR, monotonia, strain: o que dizem.',
        kind: 'rows',
        rows: [
          {
            name: 'ACWR',
            sub: 'carga 7 d ÷ carga 28 d',
            desc: 'A relação entre o que o jogador acabou de absorver e aquilo a que está habituado. A ordenação usa a distância à zona, não o valor.',
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
            desc: 'Sem sentido absoluto — as duas medidas não partilham unidade. A única referência é o desvio à base de 28 dias do próprio jogador.',
            chip: { label: 'vs base 28 d' },
          },
        ],
        note: {
          label: 'Confirmar não é apagar',
          desc: 'Um alerta de carga confirma-se com uma nota — o contexto, a decisão tomada. Fica visível, esbatido, com quem o tratou e quando, e não volta a disparar enquanto a carga da mesma semana se mantiver na norma.',
        },
      },
      {
        kicker: 'GPS · OS SEUS BLOCOS DE VELOCIDADE',
        title: 'Uma exportação GPS não traz uma coluna «aeróbio».',
        body: 'Traz zonas numeradas, muitas vezes em distância e em tempo. É você que decide como agrupá-las: um bloco é um nome que dá a uma soma de zonas. Os seus blocos comandam depois tudo o resto — colunas, gráficos, alvos individuais.',
        visual: 'gps-blocks',
        kind: 'columns',
        cols: [
          {
            title: 'Uma zona pode servir vários blocos',
            desc: 'Nada impede ter Aeróbio = Z1+Z2+Z3 e Volume total = Z1+…+Z6 lado a lado.',
          },
          {
            title: 'Renomear um bloco não perde nada',
            desc: 'Os seus alvos e as colunas guardadas seguem o novo nome, sem nada para reescrever.',
          },
          {
            title: 'Retirar não é eliminar',
            desc: 'Um bloco retirado fica arquivado. Os alvos ficam em memória caso volte na época seguinte.',
          },
        ],
        foot: 'Se não configurar nada, a equipa arranca com quatro blocos clássicos — Aeróbio, Alta intensidade, Corrida de alta velocidade, Sprint — já associados às colunas que a STRIVN reconheceu na sua exportação.',
      },
      {
        kicker: 'O PONTO A RETER',
        title: 'Um recalcula tudo. O outro só muda o que é mostrado.',
        kind: 'panels',
        panels: [
          {
            title: 'Sessões',
            eyebrow: 'Todas · Treinos · Jogos',
            lead: 'um filtro de comparabilidade',
            desc: 'Um jogo e um treino não se comparam: a carga externa de um jogo é estruturalmente mais alta. Este filtro altera portanto tudo o que é calculado — a sessão mostrada, os valores, o alvo sugerido, o rácio e a sua base.',
            tone: 'blue',
          },
          {
            title: 'Período',
            eyebrow: '7 d · 4 sem. · 12 sem. · Época',
            lead: 'apenas uma janela de visualização',
            desc: 'Altera o que é listado e o que é traçado, e nada mais. A base do rácio continua calculada em 28 dias, seja qual for o período escolhido.',
          },
        ],
        callouts: [
          {
            tone: 'orange',
            icon: 'triangle-alert',
            text: 'Escolher «7 dias» não torna um jogador «sem dados suficientes»: a STRIVN conta o histórico real, não a janela mostrada. Escolher «Jogos», esse sim, recalcula o alvo a partir dos jogos dele — caso contrário compararia um jogo com uma média de treinos.',
          },
        ],
        note: {
          label: 'O terceiro: Medida',
          desc: 'Distância ou Tempo: os mesmos blocos, na outra unidade. Cada bloco tem um alvo por medida — pode visar 4 200 m de aeróbio e 15 minutos, de forma independente. Guardar um não toca no outro.',
        },
      },
      {
        kicker: 'O QUE A STRIVN RECUSA MOSTRAR',
        title: 'Um número errado é pior do que uma célula vazia.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: 'Dados insuficientes',
            desc: 'Com menos de duas semanas completas de histórico, o jogador aparece à parte, com o rótulo, em vez de com um ACWR enganador.',
          },
          {
            name: '—',
            desc: 'Um bloco cujas zonas não estão todas associadas na medida mostrada fica vazio. A STRIVN nunca soma parte das zonas: uma soma incompleta é um número errado, não um número aproximado.',
          },
          {
            name: 'Dados insuficientes',
            desc: 'O bloco interno / externo di-lo enquanto o histórico for demasiado curto. E quando falta um lado — sem RPE inserido, ou sem dado GPS — o rácio fica vazio.',
          },
          {
            name: '(em curso)',
            desc: 'A semana em curso leva a menção enquanto não terminar: os valores ainda não são definitivos.',
          },
        ],
      },
      {
        bg: 'a',
        kind: 'panels',
        panels: [
          {
            title: 'O único sinal que vale: o desvio do jogador à sua própria base.',
            desc: 'Um rácio externo ÷ interno que cai claramente abaixo da base de 28 dias assinala um desacoplamento: o jogador produz menos trabalho mecânico para a mesma sensação — sinal de fadiga escondida. O cabeçalho do bloco fica vermelho. Comparado com outro jogador, esse mesmo rácio não diz nada.',
          },
        ],
      },
      {
        kicker: 'TRABALHAR NA SUA PRÓPRIA UNIDADE',
        title: 'Se a sua equipa técnica não raciocina em UA, mude de unidade.',
        body: 'Por omissão, um treino de 90 minutos a RPE 7 pesa 630 UA e uma semana ronda os 3 000. Números que não se anunciam facilmente numa reunião. Declare a sua unidade da casa — um múltiplo fixo da UA — e a escala volta a ser legível.',
        visual: 'unit-conversion',
        kind: 'columns',
        cols: [
          {
            title: 'Os seus dados não se mexem',
            desc: 'A carga fica registada em UA. A unidade só muda o que você lê e o que insere — pode voltar atrás quando quiser, e o histórico lê-se simplesmente na nova unidade.',
          },
          {
            title: 'Todos os ecrãs acompanham',
            desc: 'Carga e tendências, planeamento, previsto vs realizado, época, desenrolar do treino, balanços, relatórios — e o portal dos jogadores. Os objetivos semanais escrevem-se diretamente na sua unidade.',
          },
          {
            title: 'Os rácios mantêm a escala',
            desc: 'ACWR, monotonia e rácio interno / externo são rácios calibrados, não quantidades de carga. Só o strain segue a sua unidade, já que é uma.',
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
            text: 'O nome torna-se obrigatório assim que a equivalência deixa de ser 1 — caso contrário apareceriam valores convertidos sob a sigla «UA», que já não é a correta.',
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
      title: 'La percepción de un lado, el GPS del otro. En la misma pantalla.',
      sub: 'El RPE del balance y la duración dan la carga interna. Tu exportación GPS da la externa. STRIVN las pone frente a frente — ACWR, monotonía, strain y ratio se calculan solos.',
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
        title: 'ACWR, monotonía, strain: lo que dicen.',
        kind: 'rows',
        rows: [
          {
            name: 'ACWR',
            sub: 'carga 7 d ÷ carga 28 d',
            desc: 'La relación entre lo que el jugador acaba de encajar y aquello a lo que está acostumbrado. La clasificación ordena por distancia a la zona, no por valor.',
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
            desc: 'Sin sentido absoluto — las dos medidas no comparten unidad. La única referencia es la distancia a la base de 28 días del propio jugador.',
            chip: { label: 'vs base 28 d' },
          },
        ],
        note: {
          label: 'Marcar no es borrar',
          desc: 'Una alerta de carga se marca con una nota — el contexto, la decisión tomada. Sigue visible, atenuada, con quién la trató y cuándo, y no vuelve a saltar mientras la carga de esa misma semana se mantenga en la norma.',
        },
      },
      {
        kicker: 'GPS · TUS BLOQUES DE VELOCIDAD',
        title: 'Una exportación GPS no trae una columna «aeróbico».',
        body: 'Trae zonas numeradas, a menudo en distancia y en tiempo. Cómo agruparlas lo decides tú: un bloque es un nombre que das a una suma de zonas. Tus bloques mandan después sobre todo lo demás — columnas, gráficos, objetivos individuales.',
        visual: 'gps-blocks',
        kind: 'columns',
        cols: [
          {
            title: 'Una zona puede servir en varios bloques',
            desc: 'Nada impide tener Aeróbico = Z1+Z2+Z3 y Volumen total = Z1+…+Z6 uno al lado del otro.',
          },
          {
            title: 'Renombrar un bloque no pierde nada',
            desc: 'Sus objetivos y tus columnas guardadas siguen el nombre nuevo, sin volver a escribir nada.',
          },
          {
            title: 'Retirar no es eliminar',
            desc: 'Un bloque retirado queda archivado. Sus objetivos siguen en memoria por si vuelve la próxima temporada.',
          },
        ],
        foot: 'Si no configuras nada, el equipo arranca con cuatro bloques clásicos — Aeróbico, Alta intensidad, Carrera de alta velocidad, Sprint — ya asociados a las columnas que STRIVN reconoció en tu exportación.',
      },
      {
        kicker: 'LO QUE HAY QUE RETENER',
        title: 'Uno recalcula todo. El otro solo cambia lo que se muestra.',
        kind: 'panels',
        panels: [
          {
            title: 'Sesiones',
            eyebrow: 'Todas · Entrenamientos · Partidos',
            lead: 'un filtro de comparabilidad',
            desc: 'Un partido y un entrenamiento no se comparan: la carga externa de un partido es estructuralmente más alta. Este filtro cambia por tanto todo lo que se calcula — la sesión mostrada, los valores, el objetivo sugerido, el ratio y su base.',
            tone: 'blue',
          },
          {
            title: 'Periodo',
            eyebrow: '7 d · 4 sem. · 12 sem. · Temporada',
            lead: 'solo una ventana de visualización',
            desc: 'Cambia lo que se lista y lo que se traza, y nada más. La base del ratio sigue calculándose sobre 28 días, sea cual sea el periodo que elijas.',
          },
        ],
        callouts: [
          {
            tone: 'orange',
            icon: 'triangle-alert',
            text: 'Elegir «7 días» no convierte a un jugador en «falto de datos»: STRIVN cuenta su historial real, no la ventana mostrada. Elegir «Partidos», en cambio, recalcula su objetivo sobre sus partidos — de lo contrario compararías un partido con una media de entrenamientos.',
          },
        ],
        note: {
          label: 'El tercero: Medida',
          desc: 'Distancia o Tiempo: los mismos bloques, en la otra unidad. Cada bloque tiene un objetivo por medida — puedes apuntar a 4 200 m de aeróbico y 15 minutos, de forma independiente. Guardar uno no toca el otro.',
        },
      },
      {
        kicker: 'LO QUE STRIVN SE NIEGA A MOSTRAR',
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
            desc: 'Un bloque cuyas zonas no están todas asociadas en la medida mostrada queda vacío. STRIVN nunca suma una parte de las zonas: una suma incompleta es un número falso, no un número aproximado.',
          },
          {
            name: 'Datos insuficientes',
            desc: 'El bloque interno / externo lo dice mientras el historial sea demasiado corto. Y cuando falta un lado — sin RPE introducido, o sin dato GPS — el ratio queda vacío.',
          },
          {
            name: '(en curso)',
            desc: 'La semana en curso lleva la mención mientras no haya terminado: sus valores aún no son definitivos.',
          },
        ],
      },
      {
        bg: 'a',
        kind: 'panels',
        panels: [
          {
            title: 'La única señal que vale: la distancia del jugador a su propia base.',
            desc: 'Un ratio externo ÷ interno que cae claramente por debajo de su base de 28 días señala un desacoplamiento: el jugador produce menos trabajo mecánico para la misma sensación — signo de fatiga oculta. La cabecera del bloque se pone en rojo. Frente a otro jugador, ese mismo ratio no dice nada.',
          },
        ],
      },
      {
        kicker: 'TRABAJAR EN TU PROPIA UNIDAD',
        title: 'Si tu cuerpo técnico no razona en UA, cambia de unidad.',
        body: 'Por defecto, una sesión de 90 minutos a RPE 7 pesa 630 UA y una semana ronda las 3 000. Números que no se anuncian fácilmente en una reunión. Declara tu unidad de la casa — un múltiplo fijo de la UA — y la escala vuelve a ser legible.',
        visual: 'unit-conversion',
        kind: 'columns',
        cols: [
          {
            title: 'Tus datos no se mueven',
            desc: 'La carga sigue registrada en UA. La unidad solo cambia lo que lees y lo que introduces — puedes volver atrás cuando quieras, y el historial se relee sin más en la nueva unidad.',
          },
          {
            title: 'Todas las pantallas siguen',
            desc: 'Carga y tendencias, planificación, previsto vs realizado, temporada, desarrollo de la sesión, balances, informes — y el portal de los jugadores. Tus objetivos semanales se escriben directamente en tu unidad.',
          },
          {
            title: 'Los ratios mantienen su escala',
            desc: 'ACWR, monotonía y ratio interno / externo son ratios calibrados, no cantidades de carga. Solo el strain sigue tu unidad, puesto que lo es.',
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
            text: 'El nombre pasa a ser obligatorio en cuanto la equivalencia deja de ser 1 — si no, aparecerían valores convertidos bajo la sigla «UA», que ya no es la correcta.',
          },
        ],
      },
    ],
  },
};
