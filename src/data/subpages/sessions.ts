/**
 * Sessions & planning — the periodisation ladder, and the line the planner
 * does not cross. Its whole argument is that load is a layer over the coach's
 * calendar, never a second calendar of its own.
 */
import type { SubpageLocales } from './types';

export const sessions: SubpageLocales = {
  /* ────────────────────────────── FR ────────────────────────────── */
  fr: {
    meta: {
      title: 'Séances & planification | STRIVN',
      description:
        'Saison, cycle, semaine, séance : quatre échelles emboîtées. Le planificateur pose une couche de charge sur le calendrier du coach, sans jamais créer d’événement.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · PLANIFICATION',
      title: 'De la saison à la séance de jeudi.',
      sub: 'La saison porte vos cycles, le cycle donne son objectif à chaque semaine, la semaine se remplit de charge rattachée à des séances réelles. Le planificateur ne crée jamais d’événement : il pose une couche de charge sur votre calendrier.',
      bullets: [
        'Cycles de périodisation : reprise, compétition, affûtage',
        'Chaque nouvelle semaine hérite de son cycle',
        'Charge rattachée à une séance, ou laissée en attente',
        'Prévu vs réalisé, joueur par joueur et jour par jour',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir la charge', href: '/fr/features/training-load/' },
      },
      visual: 'week-plan',
    },
    sections: [
      {
        kicker: 'QUATRE ÉCHELLES EMBOÎTÉES',
        title: 'La saison tient le cycle, le cycle tient la semaine.',
        kind: 'nested',
        activeIndex: 3,
        levels: [
          {
            name: 'Saison',
            where: '· Réglages de l’équipe',
            desc: 'La fenêtre de référence : toutes les vues « saison » s’y calent — présences, charge, tests. La clôturer archive l’ancienne en lecture seule et n’efface rien : blessures, tests, charges, wellness et présences restent dans l’historique des joueurs.',
          },
          {
            name: 'Cycle',
            where: '· Onglet Cycles',
            desc: 'Reprise, compétition, récupération, affûtage. Chaque cycle porte son objectif hebdomadaire et sa semaine type. Deux cycles ne peuvent pas se chevaucher, et aucun ne peut sortir des dates de la saison.',
          },
          {
            name: 'Semaine',
            where: '· Onglet Planning',
            desc: 'Une semaine ouverte à l’intérieur d’un cycle hérite de sa phase, de son objectif et de ses budgets par catégorie. C’est une copie, pas un lien : modifier le cycle plus tard ne touche jamais une semaine déjà planifiée.',
          },
          {
            name: 'Séance',
            where: '· Le calendrier',
            desc: 'La charge se rattache aux séances réelles que le coach a programmées. Une composante ne peut être rattachée qu’à une séance du même jour — sinon elle reste en attente.',
          },
        ],
        note: {
          icon: 'copy',
          label: '« Appliquer la semaine type »',
          desc: 'Remplit d’un coup toutes les semaines vides d’un cycle, et n’écrase jamais une semaine déjà planifiée. L’action est ré-exécutable sans risque : elle vous dit combien de semaines ont été remplies et combien étaient déjà faites.',
        },
      },
      {
        kicker: 'CE QU’IL NE FAIT PAS',
        title: 'Le planificateur ne crée jamais de séance.',
        body: 'Les séances, les horaires et les convocations restent gérés depuis le calendrier, par le coach. Le préparateur y ajoute de la charge, et rien d’autre. Deux rôles, un seul calendrier.',
        kind: 'panels',
        panels: [
          {
            title: 'Rattachée à une séance',
            tone: 'blue',
            desc: 'Elle apparaît sous l’heure et le nom de cette séance, et alimente son total. Une composante ne peut être rattachée qu’à une séance du même jour.',
          },
          {
            title: 'En attente — non planifié',
            tone: 'plain',
            desc: 'Elle compte dans l’objectif de la semaine et dans la prévision ACWR, mais n’apparaît sur aucun agenda et ne déclenche aucune convocation. Elle se publie d’elle-même dès que vous la rattachez.',
          },
        ],
      },
      {
        kicker: 'LES RÉGLAGES DE CHARGE',
        title: 'Fixer l’objectif, peser les catégories, garder le modèle.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'OBJECTIFS',
            title: 'Objectifs de charge',
            desc: 'Nommer la phase, fixer l’objectif hebdomadaire et un budget par catégorie. Un récapitulatif indique en direct ce qui reste à répartir.',
          },
          {
            eyebrow: 'CATÉGORIES',
            title: 'Catégories de charge',
            desc: 'Renommer, ajouter ou repondérer : le coefficient pèse la charge. Une prévisualisation « 60 min @ RPE 7 ≈ N UA » montre l’effet avant d’enregistrer.',
          },
          {
            eyebrow: 'MODÈLES',
            title: 'Modèles de semaine',
            desc: 'Enregistrer la structure d’une semaine, la dupliquer vers la suivante, ou appliquer un modèle existant.',
          },
        ],
        note: {
          icon: 'user-check',
          label: 'Ajuster un seul joueur',
          desc: 'Sous chaque composante, « + Ajuster un joueur » module sa charge d’un pourcentage — 50 % au retour de blessure — l’exclut, ou la bascule en travail individuel. L’ajustement ne touche que la charge prévue : la convocation, elle, se gère dans le calendrier.',
        },
      },
      {
        kicker: 'DANS LE CALENDRIER',
        title: 'Un questionnaire à rendre est aussi un événement.',
        kind: 'rows',
        rows: [
          {
            name: 'Entraînement',
            desc: 'Convocation, RSVP, déroulé, bilan. Et, si vous l’activez, une demande de ressenti aux présents environ une heure après la fin.',
          },
          {
            name: 'Match',
            desc: 'Le même socle, plus la feuille de match, le direct et la revue des buts.',
          },
          {
            name: 'Récupération',
            desc: 'Une séance légère qui compte dans l’agenda et dans les présences.',
          },
          {
            name: 'Tâche',
            desc: 'Un à-faire avant une date limite : rendre un questionnaire, régler une cotisation. Rappel quotidien ou hebdomadaire au choix, amende optionnelle en cas de non-complétion. Le joueur coche — aucune preuve n’est demandée.',
          },
          {
            name: 'Entraînement individuel',
            desc: 'Une séance seul, avec preuve : capture, lien Strava ou photo. Vous choisissez les formats acceptés, et vous validez ou refusez avec motif.',
          },
        ],
        callouts: [
          {
            icon: 'copy',
            tone: 'blue',
            text: '« Copier → » duplique tous les événements de la semaine courante sur la suivante, en un clic. Pratique pour les semaines type, et sans effet sur les réponses déjà données.',
          },
        ],
      },
      {
        kicker: 'APRÈS COUP',
        title: 'Vous aviez prévu 630. Ils ont produit 780.',
        body: 'Le prévu est connu à l’avance ; le réalisé se remplit au fil des check-ins, des imports et des bilans. L’écart entre les deux devient la matière du plan de la semaine suivante.',
        kind: 'panels',
        panels: [
          {
            title: 'L’onglet Prévu vs réalisé',
            tone: 'blue',
            desc: 'La charge prévue face à la charge réellement produite, par joueur et par jour.',
            items: [
              'L’en-tête donne l’écart de l’équipe et le nombre de joueurs au-dessus et en dessous',
              'Chaque case montre le réalisé en gros, le prévu en référence, et l’écart',
              'Ambre au-dessus du prévu, vert en dessous',
            ],
          },
          {
            title: 'Le bilan de séance',
            tone: 'green',
            desc: 'Deux minutes dans le vestiaire suffisent, et c’est là que le bilan est le plus fiable.',
            items: [
              'Intensité ressentie — RPE 1 à 10, ou décimal si votre équipe l’active',
              'Durée réelle, avec la durée prévue affichée en référence',
              'Note de séance sur 10, et un champ de notes libre',
            ],
          },
        ],
        note: {
          icon: 'arrow-left-right',
          label: 'Votre 7 face à leur 9',
          desc: 'Le bilan met votre RPE et la moyenne de ceux qui ont couru côte à côte. Un écart marqué ne dit pas qui a raison. Il dit que la séance n’a pas été vécue comme vous l’aviez pensée, et que ça vaut une question.',
        },
      },
    ],
  },

  /* ────────────────────────────── EN ────────────────────────────── */
  en: {
    meta: {
      title: 'Sessions & planning | STRIVN',
      description:
        'Season, cycle, week, session: four nested scales. The planner lays a load layer over the coach’s calendar and never creates an event of its own.',
    },
    hero: {
      kicker: 'FEATURES · PLANNING',
      title: 'From the season to Thursday’s session.',
      sub: 'The season holds your cycles, the cycle gives each week its target, the week fills with load attached to real sessions. The planner never creates an event: it lays a layer of load over your calendar.',
      bullets: [
        'Periodisation cycles: pre-season, competition, taper',
        'Every new week inherits its cycle',
        'Load attached to a session, or left pending',
        'Planned vs actual, player by player and day by day',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See training load', href: '/en/features/training-load/' },
      },
      visual: 'week-plan',
    },
    sections: [
      {
        kicker: 'FOUR NESTED SCALES',
        title: 'The season holds the cycle, the cycle holds the week.',
        kind: 'nested',
        activeIndex: 3,
        levels: [
          {
            name: 'Season',
            where: '· Team settings',
            desc: 'The reference window: every “season” view lines up with it — attendance, load, tests. Closing one archives it read-only and erases nothing: injuries, tests, loads, wellness and attendance stay in the players’ history.',
          },
          {
            name: 'Cycle',
            where: '· Cycles tab',
            desc: 'Pre-season, competition, recovery, taper. Each cycle carries its weekly target and its template week. Two cycles cannot overlap, and none can run past the season’s dates.',
          },
          {
            name: 'Week',
            where: '· Planning tab',
            desc: 'A week opened inside a cycle inherits its phase, its target and its per-category budgets. It is a copy, not a link: editing the cycle later never touches a week already planned.',
          },
          {
            name: 'Session',
            where: '· The calendar',
            desc: 'Load attaches to the real sessions the coach has scheduled. A component can only attach to a session on the same day — otherwise it stays pending.',
          },
        ],
        note: {
          icon: 'copy',
          label: '“Apply the template week”',
          desc: 'Fills every empty week in a cycle at once, and never overwrites a week already planned. The action is safe to re-run: it tells you how many weeks were filled and how many were already done.',
        },
      },
      {
        kicker: 'WHAT IT DOES NOT DO',
        title: 'The planner never creates a session.',
        body: 'Sessions, times and call-ups stay in the calendar, managed by the coach. The S&C coach adds load there, and nothing else. Two roles, one calendar.',
        kind: 'panels',
        panels: [
          {
            title: 'Attached to a session',
            tone: 'blue',
            desc: 'It appears under that session’s time and name, and feeds its total. A component can only attach to a session on the same day.',
          },
          {
            title: 'Pending — not scheduled',
            tone: 'plain',
            desc: 'It counts towards the week’s target and the ACWR projection, but appears on no agenda and triggers no call-up. It publishes itself the moment you attach it.',
          },
        ],
      },
      {
        kicker: 'THE LOAD SETTINGS',
        title: 'Set the target, weight the categories, keep the template.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'TARGETS',
            title: 'Load targets',
            desc: 'Name the phase, set the weekly target and a budget per category. A running summary shows what is left to allocate.',
          },
          {
            eyebrow: 'CATEGORIES',
            title: 'Load categories',
            desc: 'Rename, add or reweight: the coefficient weighs the load. A preview, “60 min @ RPE 7 ≈ N AU”, shows the effect before you save.',
          },
          {
            eyebrow: 'TEMPLATES',
            title: 'Week templates',
            desc: 'Save a week’s structure, duplicate it to the next one, or apply an existing template.',
          },
        ],
        note: {
          icon: 'user-check',
          label: 'Adjust a single player',
          desc: 'Under each component, “+ Adjust a player” scales their load by a percentage — 50% on return from injury — excludes them, or switches it to individual work. The adjustment only touches planned load: the call-up is handled in the calendar.',
        },
      },
      {
        kicker: 'IN THE CALENDAR',
        title: 'A questionnaire to hand in is an event too.',
        kind: 'rows',
        rows: [
          {
            name: 'Training',
            desc: 'Call-up, RSVP, running order, debrief. And, if you turn it on, a feedback prompt to those present about an hour after it ends.',
          },
          {
            name: 'Match',
            desc: 'The same base, plus the team sheet, the live view and the goal review.',
          },
          {
            name: 'Recovery',
            desc: 'A light session that counts in the agenda and in attendance.',
          },
          {
            name: 'Task',
            desc: 'Something to do before a deadline: return a questionnaire, settle a subscription. Daily or weekly reminders, an optional fine if it goes undone. The player ticks it off — no proof is asked for.',
          },
          {
            name: 'Individual training',
            desc: 'A session alone, with proof: a screenshot, a Strava link or a photo. You choose which formats you accept, and you approve or decline with a reason.',
          },
        ],
        callouts: [
          {
            icon: 'copy',
            tone: 'blue',
            text: '“Copy →” duplicates every event in the current week onto the next one, in a click. Handy for template weeks, and it leaves answers already given untouched.',
          },
        ],
      },
      {
        kicker: 'AFTER THE FACT',
        title: 'You planned 630. They produced 780.',
        body: 'The plan is known in advance; the actual fills in through check-ins, imports and debriefs. The gap between the two becomes the material for next week’s plan.',
        kind: 'panels',
        panels: [
          {
            title: 'The Planned vs actual tab',
            tone: 'blue',
            desc: 'Planned load against the load actually produced, per player and per day.',
            items: [
              'The header gives the squad’s gap and how many players sit above and below',
              'Each cell shows the actual large, the plan for reference, and the gap',
              'Amber above plan, green below',
            ],
          },
          {
            title: 'The session debrief',
            tone: 'green',
            desc: 'Two minutes in the changing room is enough, and that is where the debrief is most reliable.',
            items: [
              'Perceived intensity — RPE 1 to 10, or decimal if your team enables it',
              'Actual duration, with the planned duration shown for reference',
              'A session rating out of 10, and a free notes field',
            ],
          },
        ],
        note: {
          icon: 'arrow-left-right',
          label: 'Your 7 against their 9',
          desc: 'The debrief puts your RPE and the average of those who ran side by side. A wide gap does not say who is right. It says the session was not experienced the way you designed it, and that is worth a question.',
        },
      },
    ],
  },

  /* ────────────────────────────── NL ────────────────────────────── */
  nl: {
    meta: {
      title: 'Trainingen & planning | STRIVN',
      description:
        'Seizoen, cyclus, week, training: vier geneste schalen. De planner legt een belastingslaag over de kalender van de coach en maakt zelf nooit een activiteit aan.',
    },
    hero: {
      kicker: 'FUNCTIES · PLANNING',
      title: 'Van het seizoen tot de training van donderdag.',
      sub: 'Het seizoen draagt je cycli, de cyclus geeft elke week haar doel, de week vult zich met belasting die aan echte trainingen hangt. De planner maakt nooit een activiteit aan: hij legt een laag belasting over je kalender.',
      bullets: [
        'Periodiseringscycli: opbouw, competitie, taper',
        'Elke nieuwe week erft haar cyclus',
        'Belasting gekoppeld aan een training, of in wacht gelaten',
        'Gepland vs gerealiseerd, speler per speler en dag per dag',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Belasting bekijken', href: '/nl/features/training-load/' },
      },
      visual: 'week-plan',
    },
    sections: [
      {
        kicker: 'VIER GENESTE SCHALEN',
        title: 'Het seizoen draagt de cyclus, de cyclus draagt de week.',
        kind: 'nested',
        activeIndex: 3,
        levels: [
          {
            name: 'Seizoen',
            where: '· Teaminstellingen',
            desc: 'Het referentievenster: elke “seizoen”-weergave lijnt zich erop uit — aanwezigheden, belasting, tests. Afsluiten archiveert het oude alleen-lezen en wist niets: blessures, tests, belastingen, wellness en aanwezigheden blijven in de spelershistoriek.',
          },
          {
            name: 'Cyclus',
            where: '· Tabblad Cycli',
            desc: 'Opbouw, competitie, herstel, taper. Elke cyclus draagt haar weekdoel en haar typeweek. Twee cycli mogen elkaar niet overlappen, en geen enkele mag buiten de seizoensdata vallen.',
          },
          {
            name: 'Week',
            where: '· Tabblad Planning',
            desc: 'Een week die binnen een cyclus wordt geopend, erft haar fase, haar doel en haar budgetten per categorie. Het is een kopie, geen link: de cyclus later wijzigen raakt een reeds geplande week nooit.',
          },
          {
            name: 'Training',
            where: '· De kalender',
            desc: 'Belasting koppelt zich aan de echte trainingen die de coach heeft ingepland. Een component kan alleen koppelen aan een training op dezelfde dag — anders blijft ze in wacht.',
          },
        ],
        note: {
          icon: 'copy',
          label: '“Typeweek toepassen”',
          desc: 'Vult in één keer alle lege weken van een cyclus, en overschrijft nooit een reeds geplande week. De actie is zonder risico opnieuw uit te voeren: ze zegt hoeveel weken zijn gevuld en hoeveel er al klaar waren.',
        },
      },
      {
        kicker: 'WAT HIJ NIET DOET',
        title: 'De planner maakt nooit een training aan.',
        body: 'Trainingen, uren en oproepingen blijven in de kalender, beheerd door de coach. De fysiek trainer voegt daar belasting aan toe, en niets anders. Twee rollen, één kalender.',
        kind: 'panels',
        panels: [
          {
            title: 'Gekoppeld aan een training',
            tone: 'blue',
            desc: 'Ze verschijnt onder het uur en de naam van die training, en voedt haar totaal. Een component kan alleen koppelen aan een training op dezelfde dag.',
          },
          {
            title: 'In wacht — niet ingepland',
            tone: 'plain',
            desc: 'Ze telt mee voor het weekdoel en de ACWR-prognose, maar verschijnt op geen enkele agenda en stuurt geen oproeping. Ze publiceert zichzelf zodra je haar koppelt.',
          },
        ],
      },
      {
        kicker: 'DE BELASTINGSINSTELLINGEN',
        title: 'Het doel zetten, de categorieën wegen, het model bewaren.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'DOELEN',
            title: 'Belastingsdoelen',
            desc: 'De fase benoemen, het weekdoel bepalen en een budget per categorie. Een overzicht toont live wat er nog te verdelen valt.',
          },
          {
            eyebrow: 'CATEGORIEËN',
            title: 'Belastingscategorieën',
            desc: 'Hernoemen, toevoegen of herwegen: de coëfficiënt weegt de belasting. Een voorbeeld, “60 min @ RPE 7 ≈ N AE”, toont het effect voor je bewaart.',
          },
          {
            eyebrow: 'SJABLONEN',
            title: 'Weeksjablonen',
            desc: 'De structuur van een week bewaren, ze naar de volgende dupliceren, of een bestaand sjabloon toepassen.',
          },
        ],
        note: {
          icon: 'user-check',
          label: 'Eén speler bijstellen',
          desc: 'Onder elke component past “+ Een speler bijstellen” zijn belasting aan met een percentage — 50 % bij terugkeer na blessure — sluit hem uit, of zet het om in individueel werk. De bijstelling raakt alleen de geplande belasting: de oproeping regel je in de kalender.',
        },
      },
      {
        kicker: 'IN DE KALENDER',
        title: 'Een in te leveren vragenlijst is ook een gebeurtenis.',
        kind: 'rows',
        rows: [
          {
            name: 'Training',
            desc: 'Oproeping, RSVP, verloop, nabespreking. En, als je het aanzet, een vraag naar het gevoel bij de aanwezigen ongeveer een uur na afloop.',
          },
          {
            name: 'Wedstrijd',
            desc: 'Dezelfde basis, plus het wedstrijdblad, de live-weergave en de doelpuntenanalyse.',
          },
          {
            name: 'Herstel',
            desc: 'Een lichte sessie die meetelt in de agenda en in de aanwezigheden.',
          },
          {
            name: 'Taak',
            desc: 'Iets te doen vóór een deadline: een vragenlijst indienen, een lidgeld betalen. Dagelijkse of wekelijkse herinnering naar keuze, optionele boete bij niet-uitvoering. De speler vinkt af — er wordt geen bewijs gevraagd.',
          },
          {
            name: 'Individuele training',
            desc: 'Een sessie alleen, met bewijs: een screenshot, een Strava-link of een foto. Jij kiest welke formaten je aanvaardt, en je keurt goed of af met reden.',
          },
        ],
        callouts: [
          {
            icon: 'copy',
            tone: 'blue',
            text: '“Kopiëren →” dupliceert alle activiteiten van de huidige week naar de volgende, in één klik. Handig voor typeweken, en zonder gevolgen voor reeds gegeven antwoorden.',
          },
        ],
      },
      {
        kicker: 'ACHTERAF',
        title: 'Je plande 630. Ze produceerden 780.',
        body: 'Het plan is vooraf bekend; het gerealiseerde vult zich via check-ins, imports en nabesprekingen. Het verschil tussen beide wordt het materiaal voor het plan van volgende week.',
        kind: 'panels',
        panels: [
          {
            title: 'Het tabblad Gepland vs gerealiseerd',
            tone: 'blue',
            desc: 'De geplande belasting tegenover de werkelijk geproduceerde, per speler en per dag.',
            items: [
              'De kop geeft het verschil van de ploeg en hoeveel spelers erboven en eronder zitten',
              'Elk vakje toont het gerealiseerde groot, het plan ter referentie, en het verschil',
              'Oranje boven het plan, groen eronder',
            ],
          },
          {
            title: 'De nabespreking',
            tone: 'green',
            desc: 'Twee minuten in de kleedkamer volstaan, en daar is de nabespreking het betrouwbaarst.',
            items: [
              'Ervaren intensiteit — RPE 1 tot 10, of decimaal als je ploeg dat aanzet',
              'Werkelijke duur, met de geplande duur ter referentie',
              'Een trainingsscore op 10, en een vrij notitieveld',
            ],
          },
        ],
        note: {
          icon: 'arrow-left-right',
          label: 'Jouw 7 tegenover hun 9',
          desc: 'De nabespreking zet jouw RPE en het gemiddelde van wie gelopen heeft naast elkaar. Een groot verschil zegt niet wie gelijk heeft. Het zegt dat de training niet beleefd is zoals je ze bedacht had, en dat dat een vraag waard is.',
        },
      },
    ],
  },

  /* ────────────────────────────── DE ────────────────────────────── */
  de: {
    meta: {
      title: 'Einheiten & Planung | STRIVN',
      description:
        'Saison, Zyklus, Woche, Einheit: vier verschachtelte Ebenen. Der Planer legt eine Belastungsebene über den Kalender des Trainers und erzeugt selbst nie einen Termin.',
    },
    hero: {
      kicker: 'FUNKTIONEN · PLANUNG',
      title: 'Von der Saison bis zur Einheit am Donnerstag.',
      sub: 'Die Saison trägt Ihre Zyklen, der Zyklus gibt jeder Woche ihr Ziel, die Woche füllt sich mit Belastung, die an echten Einheiten hängt. Der Planer erzeugt nie einen Termin: Er legt eine Belastungsebene über Ihren Kalender.',
      bullets: [
        'Periodisierungszyklen: Aufbau, Wettkampf, Tapering',
        'Jede neue Woche erbt ihren Zyklus',
        'Belastung an eine Einheit gehängt oder offen gelassen',
        'Geplant vs. realisiert, Spieler für Spieler und Tag für Tag',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Belastung ansehen', href: '/de/features/training-load/' },
      },
      visual: 'week-plan',
    },
    sections: [
      {
        kicker: 'VIER VERSCHACHTELTE EBENEN',
        title: 'Die Saison trägt den Zyklus, der Zyklus trägt die Woche.',
        kind: 'nested',
        activeIndex: 3,
        levels: [
          {
            name: 'Saison',
            where: '· Team-Einstellungen',
            desc: 'Das Bezugsfenster: Jede „Saison“-Ansicht richtet sich danach — Anwesenheiten, Belastung, Tests. Das Schließen archiviert die alte schreibgeschützt und löscht nichts: Verletzungen, Tests, Belastungen, Wellness und Anwesenheiten bleiben in der Spielerhistorie.',
          },
          {
            name: 'Zyklus',
            where: '· Reiter Zyklen',
            desc: 'Aufbau, Wettkampf, Regeneration, Tapering. Jeder Zyklus trägt sein Wochenziel und seine Musterwoche. Zwei Zyklen dürfen sich nicht überschneiden, und keiner darf über die Saisondaten hinausreichen.',
          },
          {
            name: 'Woche',
            where: '· Reiter Planung',
            desc: 'Eine innerhalb eines Zyklus geöffnete Woche erbt dessen Phase, Ziel und Budgets je Kategorie. Es ist eine Kopie, keine Verknüpfung: Den Zyklus später zu ändern berührt eine bereits geplante Woche nie.',
          },
          {
            name: 'Einheit',
            where: '· Der Kalender',
            desc: 'Belastung hängt sich an die echten Einheiten, die der Trainer angesetzt hat. Eine Komponente kann sich nur an eine Einheit am selben Tag hängen — sonst bleibt sie offen.',
          },
        ],
        note: {
          icon: 'copy',
          label: '„Musterwoche anwenden“',
          desc: 'Füllt auf einen Schlag alle leeren Wochen eines Zyklus und überschreibt nie eine bereits geplante Woche. Die Aktion lässt sich gefahrlos wiederholen: Sie sagt Ihnen, wie viele Wochen gefüllt wurden und wie viele schon fertig waren.',
        },
      },
      {
        kicker: 'WAS ER NICHT TUT',
        title: 'Der Planer erstellt nie eine Einheit.',
        body: 'Einheiten, Zeiten und Aufgebote bleiben im Kalender, verwaltet vom Trainer. Der Athletiktrainer fügt dort Belastung hinzu, und sonst nichts. Zwei Rollen, ein Kalender.',
        kind: 'panels',
        panels: [
          {
            title: 'An eine Einheit gehängt',
            tone: 'blue',
            desc: 'Sie erscheint unter Zeit und Name dieser Einheit und speist deren Summe. Eine Komponente kann sich nur an eine Einheit am selben Tag hängen.',
          },
          {
            title: 'Offen — nicht angesetzt',
            tone: 'plain',
            desc: 'Sie zählt für das Wochenziel und die ACWR-Prognose, erscheint aber in keinem Terminplan und löst kein Aufgebot aus. Sie veröffentlicht sich selbst, sobald Sie sie anhängen.',
          },
        ],
      },
      {
        kicker: 'DIE BELASTUNGSEINSTELLUNGEN',
        title: 'Das Ziel setzen, die Kategorien gewichten, die Vorlage sichern.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'ZIELE',
            title: 'Belastungsziele',
            desc: 'Die Phase benennen, das Wochenziel und ein Budget je Kategorie festlegen. Eine Übersicht zeigt laufend, was noch zu verteilen ist.',
          },
          {
            eyebrow: 'KATEGORIEN',
            title: 'Belastungskategorien',
            desc: 'Umbenennen, ergänzen oder neu gewichten: der Koeffizient wiegt die Belastung. Eine Vorschau, „60 Min @ RPE 7 ≈ N AE“, zeigt die Wirkung vor dem Speichern.',
          },
          {
            eyebrow: 'VORLAGEN',
            title: 'Wochenvorlagen',
            desc: 'Die Struktur einer Woche speichern, sie auf die nächste duplizieren oder eine bestehende Vorlage anwenden.',
          },
        ],
        note: {
          icon: 'user-check',
          label: 'Einen einzelnen Spieler anpassen',
          desc: 'Unter jeder Komponente skaliert „+ Spieler anpassen“ dessen Belastung um einen Prozentsatz — 50 % bei Rückkehr nach Verletzung —, schließt ihn aus oder stellt sie auf Einzelarbeit um. Die Anpassung berührt nur die geplante Belastung: Das Aufgebot wird im Kalender geregelt.',
        },
      },
      {
        kicker: 'IM KALENDER',
        title: 'Ein abzugebender Fragebogen ist auch ein Termin.',
        kind: 'rows',
        rows: [
          {
            name: 'Training',
            desc: 'Aufgebot, Rückmeldung, Ablauf, Nachbesprechung. Und, wenn Sie es aktivieren, eine Abfrage des Empfindens bei den Anwesenden etwa eine Stunde nach Ende.',
          },
          {
            name: 'Spiel',
            desc: 'Dieselbe Grundlage, dazu der Spielberichtsbogen, die Live-Ansicht und die Torauswertung.',
          },
          {
            name: 'Regeneration',
            desc: 'Eine lockere Einheit, die im Terminplan und in den Anwesenheiten zählt.',
          },
          {
            name: 'Aufgabe',
            desc: 'Etwas bis zu einer Frist zu erledigen: einen Fragebogen abgeben, einen Beitrag zahlen. Tägliche oder wöchentliche Erinnerung nach Wahl, optionale Strafe bei Nichterledigung. Der Spieler hakt ab — ein Nachweis wird nicht verlangt.',
          },
          {
            name: 'Individuelles Training',
            desc: 'Eine Einheit allein, mit Nachweis: Screenshot, Strava-Link oder Foto. Sie wählen die akzeptierten Formate und bestätigen oder lehnen mit Begründung ab.',
          },
        ],
        callouts: [
          {
            icon: 'copy',
            tone: 'blue',
            text: '„Kopieren →“ dupliziert alle Termine der laufenden Woche auf die nächste, mit einem Klick. Praktisch für Musterwochen, und ohne Wirkung auf bereits gegebene Antworten.',
          },
        ],
      },
      {
        kicker: 'IM NACHHINEIN',
        title: 'Sie hatten 630 geplant. Produziert wurden 780.',
        body: 'Der Plan ist im Voraus bekannt; das Realisierte füllt sich über Check-ins, Importe und Nachbesprechungen. Die Lücke dazwischen wird zum Material für den Plan der nächsten Woche.',
        kind: 'panels',
        panels: [
          {
            title: 'Der Reiter Geplant vs. realisiert',
            tone: 'blue',
            desc: 'Die geplante Belastung gegen die tatsächlich erbrachte, je Spieler und je Tag.',
            items: [
              'Die Kopfzeile zeigt die Abweichung der Mannschaft und wie viele Spieler darüber und darunter liegen',
              'Jede Zelle zeigt das Realisierte groß, den Plan als Bezug und die Abweichung',
              'Gelb über Plan, grün darunter',
            ],
          },
          {
            title: 'Die Nachbesprechung',
            tone: 'green',
            desc: 'Zwei Minuten in der Kabine genügen, und dort ist die Nachbesprechung am verlässlichsten.',
            items: [
              'Empfundene Intensität — RPE 1 bis 10, oder dezimal, wenn Ihr Team das aktiviert',
              'Tatsächliche Dauer, mit der geplanten Dauer als Bezug',
              'Eine Bewertung der Einheit von 10, und ein freies Notizfeld',
            ],
          },
        ],
        note: {
          icon: 'arrow-left-right',
          label: 'Ihre 7 gegen deren 9',
          desc: 'Die Nachbesprechung stellt Ihren RPE und den Mittelwert derer, die gelaufen sind, nebeneinander. Eine große Abweichung sagt nicht, wer recht hat. Sie sagt, dass die Einheit nicht so erlebt wurde, wie Sie sie gedacht hatten, und dass das eine Frage wert ist.',
        },
      },
    ],
  },

  /* ────────────────────────────── PT ────────────────────────────── */
  pt: {
    meta: {
      title: 'Treinos e planeamento | STRIVN',
      description:
        'Época, ciclo, semana, treino: quatro escalas encaixadas. O planeador põe uma camada de carga sobre o calendário do treinador e nunca cria um evento.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · PLANEAMENTO',
      title: 'Da época ao treino de quinta-feira.',
      sub: 'A época sustenta os seus ciclos, o ciclo dá o objetivo a cada semana, a semana enche-se de carga associada a treinos reais. O planeador nunca cria um evento: põe uma camada de carga sobre o seu calendário.',
      bullets: [
        'Ciclos de periodização: pré-época, competição, taper',
        'Cada nova semana herda o seu ciclo',
        'Carga associada a um treino, ou deixada em espera',
        'Previsto vs realizado, jogador a jogador e dia a dia',
      ],
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver a carga', href: '/pt/features/training-load/' },
      },
      visual: 'week-plan',
    },
    sections: [
      {
        kicker: 'QUATRO ESCALAS ENCAIXADAS',
        title: 'A época sustenta o ciclo, o ciclo sustenta a semana.',
        kind: 'nested',
        activeIndex: 3,
        levels: [
          {
            name: 'Época',
            where: '· Definições da equipa',
            desc: 'A janela de referência: todas as vistas «época» alinham-se por ela — presenças, carga, testes. Fechá-la arquiva a anterior em leitura apenas e não apaga nada: lesões, testes, cargas, wellness e presenças ficam no histórico dos jogadores.',
          },
          {
            name: 'Ciclo',
            where: '· Separador Ciclos',
            desc: 'Pré-época, competição, recuperação, taper. Cada ciclo tem o seu objetivo semanal e a sua semana-tipo. Dois ciclos não se podem sobrepor, e nenhum pode sair das datas da época.',
          },
          {
            name: 'Semana',
            where: '· Separador Planeamento',
            desc: 'Uma semana aberta dentro de um ciclo herda a sua fase, o seu objetivo e os seus orçamentos por categoria. É uma cópia, não uma ligação: alterar o ciclo mais tarde nunca toca numa semana já planeada.',
          },
          {
            name: 'Treino',
            where: '· O calendário',
            desc: 'A carga associa-se aos treinos reais que o treinador marcou. Uma componente só pode ser associada a um treino do mesmo dia — caso contrário fica em espera.',
          },
        ],
        note: {
          icon: 'copy',
          label: '«Aplicar a semana-tipo»',
          desc: 'Preenche de uma vez todas as semanas vazias de um ciclo, e nunca sobrepõe uma semana já planeada. A ação é repetível sem risco: diz-lhe quantas semanas foram preenchidas e quantas já estavam feitas.',
        },
      },
      {
        kicker: 'O QUE NÃO FAZ',
        title: 'O planeador nunca cria um treino.',
        body: 'Os treinos, os horários e as convocatórias continuam a ser geridos no calendário, pelo treinador. O preparador acrescenta-lhe carga, e mais nada. Dois papéis, um só calendário.',
        kind: 'panels',
        panels: [
          {
            title: 'Associada a um treino',
            tone: 'blue',
            desc: 'Aparece sob a hora e o nome desse treino, e alimenta o seu total. Uma componente só pode ser associada a um treino do mesmo dia.',
          },
          {
            title: 'Em espera — não planeada',
            tone: 'plain',
            desc: 'Conta para o objetivo da semana e para a previsão de ACWR, mas não aparece em nenhuma agenda e não desencadeia convocatória. Publica-se sozinha assim que a associar.',
          },
        ],
      },
      {
        kicker: 'AS DEFINIÇÕES DE CARGA',
        title: 'Fixar o objetivo, ponderar as categorias, guardar o modelo.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'OBJETIVOS',
            title: 'Objetivos de carga',
            desc: 'Nomear a fase, fixar o objetivo semanal e um orçamento por categoria. Um resumo indica em direto o que falta distribuir.',
          },
          {
            eyebrow: 'CATEGORIAS',
            title: 'Categorias de carga',
            desc: 'Renomear, acrescentar ou repesar: o coeficiente pesa a carga. Uma pré-visualização, «60 min @ RPE 7 ≈ N UA», mostra o efeito antes de gravar.',
          },
          {
            eyebrow: 'MODELOS',
            title: 'Modelos de semana',
            desc: 'Gravar a estrutura de uma semana, duplicá-la para a seguinte, ou aplicar um modelo existente.',
          },
        ],
        note: {
          icon: 'user-check',
          label: 'Ajustar um só jogador',
          desc: 'Sob cada componente, «+ Ajustar um jogador» modula a sua carga numa percentagem — 50 % no regresso de lesão — exclui-o, ou passa-a a trabalho individual. O ajuste só toca na carga prevista: a convocatória trata-se no calendário.',
        },
      },
      {
        kicker: 'NO CALENDÁRIO',
        title: 'Um questionário a entregar também é um evento.',
        kind: 'rows',
        rows: [
          {
            name: 'Treino',
            desc: 'Convocatória, RSVP, desenrolar, balanço. E, se o ativar, um pedido de sensação aos presentes cerca de uma hora depois do fim.',
          },
          {
            name: 'Jogo',
            desc: 'A mesma base, mais a ficha de jogo, o direto e a revisão dos golos.',
          },
          {
            name: 'Recuperação',
            desc: 'Uma sessão leve que conta na agenda e nas presenças.',
          },
          {
            name: 'Tarefa',
            desc: 'Algo a fazer antes de um prazo: entregar um questionário, pagar uma quota. Lembrete diário ou semanal à escolha, multa opcional em caso de não cumprimento. O jogador assinala — nenhuma prova é pedida.',
          },
          {
            name: 'Treino individual',
            desc: 'Uma sessão sozinho, com prova: captura de ecrã, ligação Strava ou fotografia. Escolhe os formatos aceites, e valida ou recusa com motivo.',
          },
        ],
        callouts: [
          {
            icon: 'copy',
            tone: 'blue',
            text: '«Copiar →» duplica todos os eventos da semana atual para a seguinte, num clique. Prático para as semanas-tipo, e sem efeito nas respostas já dadas.',
          },
        ],
      },
      {
        kicker: 'DEPOIS DO FACTO',
        title: 'Tinha previsto 630. Produziram 780.',
        body: 'O previsto é conhecido de antemão; o realizado preenche-se ao longo dos check-ins, das importações e dos balanços. A diferença entre os dois torna-se a matéria do plano da semana seguinte.',
        kind: 'panels',
        panels: [
          {
            title: 'O separador Previsto vs realizado',
            tone: 'blue',
            desc: 'A carga prevista face à carga realmente produzida, por jogador e por dia.',
            items: [
              'O cabeçalho dá o desvio da equipa e quantos jogadores estão acima e abaixo',
              'Cada célula mostra o realizado em grande, o previsto como referência, e o desvio',
              'Âmbar acima do previsto, verde abaixo',
            ],
          },
          {
            title: 'O balanço do treino',
            tone: 'green',
            desc: 'Dois minutos no balneário chegam, e é aí que o balanço é mais fiável.',
            items: [
              'Intensidade sentida — RPE 1 a 10, ou decimal se a sua equipa o ativar',
              'Duração real, com a duração prevista mostrada como referência',
              'Uma nota do treino em 10, e um campo de notas livre',
            ],
          },
        ],
        note: {
          icon: 'arrow-left-right',
          label: 'O seu 7 face ao 9 deles',
          desc: 'O balanço põe o seu RPE e a média de quem correu lado a lado. Um desvio marcado não diz quem tem razão. Diz que o treino não foi vivido como o tinha pensado, e que isso vale uma pergunta.',
        },
      },
    ],
  },

  /* ────────────────────────────── ES ────────────────────────────── */
  es: {
    meta: {
      title: 'Sesiones y planificación | STRIVN',
      description:
        'Temporada, ciclo, semana, sesión: cuatro escalas encajadas. El planificador pone una capa de carga sobre el calendario del entrenador y nunca crea un evento.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · PLANIFICACIÓN',
      title: 'De la temporada a la sesión del jueves.',
      sub: 'La temporada sostiene tus ciclos, el ciclo da su objetivo a cada semana, la semana se llena de carga asociada a sesiones reales. El planificador nunca crea un evento: pone una capa de carga sobre tu calendario.',
      bullets: [
        'Ciclos de periodización: pretemporada, competición, taper',
        'Cada semana nueva hereda su ciclo',
        'Carga asociada a una sesión, o dejada en espera',
        'Previsto vs realizado, jugador por jugador y día por día',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver la carga', href: '/es/features/training-load/' },
      },
      visual: 'week-plan',
    },
    sections: [
      {
        kicker: 'CUATRO ESCALAS ENCAJADAS',
        title: 'La temporada sostiene el ciclo, el ciclo sostiene la semana.',
        kind: 'nested',
        activeIndex: 3,
        levels: [
          {
            name: 'Temporada',
            where: '· Ajustes del equipo',
            desc: 'La ventana de referencia: todas las vistas «temporada» se ajustan a ella — asistencias, carga, tests. Cerrarla archiva la anterior en solo lectura y no borra nada: lesiones, tests, cargas, wellness y asistencias siguen en el historial de los jugadores.',
          },
          {
            name: 'Ciclo',
            where: '· Pestaña Ciclos',
            desc: 'Pretemporada, competición, recuperación, taper. Cada ciclo lleva su objetivo semanal y su semana tipo. Dos ciclos no pueden solaparse, y ninguno puede salirse de las fechas de la temporada.',
          },
          {
            name: 'Semana',
            where: '· Pestaña Planificación',
            desc: 'Una semana abierta dentro de un ciclo hereda su fase, su objetivo y sus presupuestos por categoría. Es una copia, no un enlace: modificar el ciclo más tarde nunca toca una semana ya planificada.',
          },
          {
            name: 'Sesión',
            where: '· El calendario',
            desc: 'La carga se asocia a las sesiones reales que el entrenador ha programado. Un componente solo puede asociarse a una sesión del mismo día — si no, se queda en espera.',
          },
        ],
        note: {
          icon: 'copy',
          label: '«Aplicar la semana tipo»',
          desc: 'Rellena de una vez todas las semanas vacías de un ciclo, y nunca sobrescribe una semana ya planificada. La acción se puede repetir sin riesgo: te dice cuántas semanas se han rellenado y cuántas ya estaban hechas.',
        },
      },
      {
        kicker: 'LO QUE NO HACE',
        title: 'El planificador nunca crea una sesión.',
        body: 'Las sesiones, los horarios y las convocatorias se siguen gestionando desde el calendario, por el entrenador. El preparador le añade carga, y nada más. Dos roles, un solo calendario.',
        kind: 'panels',
        panels: [
          {
            title: 'Asociada a una sesión',
            tone: 'blue',
            desc: 'Aparece bajo la hora y el nombre de esa sesión, y alimenta su total. Un componente solo puede asociarse a una sesión del mismo día.',
          },
          {
            title: 'En espera — no planificada',
            tone: 'plain',
            desc: 'Cuenta en el objetivo de la semana y en la previsión de ACWR, pero no aparece en ninguna agenda y no lanza convocatoria. Se publica sola en cuanto la asocias.',
          },
        ],
      },
      {
        kicker: 'LOS AJUSTES DE CARGA',
        title: 'Fijar el objetivo, ponderar las categorías, guardar la plantilla.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'OBJETIVOS',
            title: 'Objetivos de carga',
            desc: 'Nombrar la fase, fijar el objetivo semanal y un presupuesto por categoría. Un resumen indica en directo lo que queda por repartir.',
          },
          {
            eyebrow: 'CATEGORÍAS',
            title: 'Categorías de carga',
            desc: 'Renombrar, añadir o reponderar: el coeficiente pesa la carga. Una vista previa, «60 min @ RPE 7 ≈ N UA», muestra el efecto antes de guardar.',
          },
          {
            eyebrow: 'PLANTILLAS',
            title: 'Plantillas de semana',
            desc: 'Guardar la estructura de una semana, duplicarla a la siguiente, o aplicar una plantilla existente.',
          },
        ],
        note: {
          icon: 'user-check',
          label: 'Ajustar a un solo jugador',
          desc: 'Bajo cada componente, «+ Ajustar un jugador» modula su carga con un porcentaje — 50 % a la vuelta de una lesión — lo excluye, o la pasa a trabajo individual. El ajuste solo toca la carga prevista: la convocatoria se gestiona en el calendario.',
        },
      },
      {
        kicker: 'EN EL CALENDARIO',
        title: 'Un cuestionario a entregar también es un evento.',
        kind: 'rows',
        rows: [
          {
            name: 'Entrenamiento',
            desc: 'Convocatoria, RSVP, desarrollo, balance. Y, si lo activas, una petición de sensación a los presentes aproximadamente una hora después del final.',
          },
          {
            name: 'Partido',
            desc: 'La misma base, más el acta del partido, el directo y la revisión de los goles.',
          },
          {
            name: 'Recuperación',
            desc: 'Una sesión ligera que cuenta en la agenda y en las asistencias.',
          },
          {
            name: 'Tarea',
            desc: 'Algo por hacer antes de una fecha límite: entregar un cuestionario, pagar una cuota. Recordatorio diario o semanal a elegir, multa opcional si no se cumple. El jugador marca — no se pide ninguna prueba.',
          },
          {
            name: 'Entrenamiento individual',
            desc: 'Una sesión en solitario, con prueba: captura, enlace de Strava o foto. Eliges los formatos que aceptas, y validas o rechazas con motivo.',
          },
        ],
        callouts: [
          {
            icon: 'copy',
            tone: 'blue',
            text: '«Copiar →» duplica todos los eventos de la semana actual en la siguiente, en un clic. Práctico para las semanas tipo, y sin efecto sobre las respuestas ya dadas.',
          },
        ],
      },
      {
        kicker: 'DESPUÉS',
        title: 'Habías previsto 630. Produjeron 780.',
        body: 'Lo previsto se conoce de antemano; lo realizado se rellena con los check-ins, las importaciones y los balances. La diferencia entre ambos se convierte en la materia del plan de la semana siguiente.',
        kind: 'panels',
        panels: [
          {
            title: 'La pestaña Previsto vs realizado',
            tone: 'blue',
            desc: 'La carga prevista frente a la carga realmente producida, por jugador y por día.',
            items: [
              'La cabecera da la desviación del equipo y cuántos jugadores quedan por encima y por debajo',
              'Cada celda muestra lo realizado en grande, lo previsto como referencia, y la desviación',
              'Ámbar por encima de lo previsto, verde por debajo',
            ],
          },
          {
            title: 'El balance de sesión',
            tone: 'green',
            desc: 'Dos minutos en el vestuario bastan, y ahí es donde el balance es más fiable.',
            items: [
              'Intensidad percibida — RPE 1 a 10, o decimal si tu equipo lo activa',
              'Duración real, con la duración prevista mostrada como referencia',
              'Una nota de sesión sobre 10, y un campo de notas libre',
            ],
          },
        ],
        note: {
          icon: 'arrow-left-right',
          label: 'Tu 7 frente a su 9',
          desc: 'El balance pone tu RPE y la media de los que han corrido uno al lado del otro. Una desviación marcada no dice quién tiene razón. Dice que la sesión no se ha vivido como la habías pensado, y que eso merece una pregunta.',
        },
      },
    ],
  },
};
