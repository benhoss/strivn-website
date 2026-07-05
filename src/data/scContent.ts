import type { Locale } from './landingContent';

type Slide = {
  img: string;
  /** Optional video base path (without extension); .mp4 + .webm are loaded, img is the poster. */
  video?: string;
  kind: 'desktop' | 'mobile';
  alt: string;
  caption: string;
};

type Showcase = {
  title: string;
  blurb: string;
  slides: Slide[];
};

type ScContent = {
  meta: { title: string; description: string };
  eyebrow: string;
  hero: { title: string; lede: string; cta: string };
  showcase: Showcase[];
  featuresLead: string;
  features: {
    title: string;
    items: Array<{ title: string; text: string }>;
  };
  howItWorks: {
    title: string;
    steps: Array<{ title: string; text: string }>;
  };
  finalCta: { title: string; body: string; cta: string };
};

export const scContent: Record<Locale, ScContent> = {
  fr: {
    meta: {
      title: 'STRIVN pour les préparateurs physiques : charge, GPS et readiness',
      description:
        'Planification de la charge, import GPS, estimation de la readiness, suivi des blessures et retour au jeu : STRIVN donne aux préparateurs physiques une vue complète sur chaque joueur, en temps réel.',
    },
    eyebrow: 'STRIVN pour les préparateurs physiques',
    hero: {
      title: 'La charge, la forme et la santé de chaque joueur. Au même endroit.',
      lede: 'Import GPS, estimation de la fatigue, planification de la charge. Tout partagé en temps réel avec votre staff.',
      cta: 'Commencer gratuitement',
    },
    showcase: [
      {
        title: 'Planifier et suivre la charge',
        blurb: 'Planifiez la semaine, puis laissez la charge planifiée vs réelle et l’ACWR par joueur se calculer tout seuls. Formule sRPE ou GPS, sans tableur.',
        slides: [
          {
            img: '/screenshots/load-planning-fr.png',
            video: '/videos/load-planning-fr',
            kind: 'desktop',
            alt: 'Planification de charge STRIVN : charge planifiée par jour, objectif hebdomadaire et ACWR projeté',
            caption: 'Planifiez la charge de la semaine jour par jour, avec prévision d’ACWR et objectif hebdo.',
          },
          {
            img: '/screenshots/load-overview-fr.png',
            kind: 'desktop',
            alt: 'Vue charge équipe STRIVN : charge totale, RPE moyen et distribution par joueur',
            caption: 'La charge de la semaine, par joueur, avec le RPE et la distribution.',
          },
          {
            img: '/screenshots/load-formula-fr.png',
            kind: 'desktop',
            alt: 'Configuration de la formule de charge sRPE dans STRIVN',
            caption: 'Réglez votre formule de charge sRPE ou GPS en quelques secondes.',
          },
        ],
      },
      {
        title: 'Readiness et check-ins, des deux côtés',
        blurb: 'Le matin, vous voyez qui a répondu et qui est à risque. Les joueurs renseignent fatigue, sommeil, stress et humeur depuis leur téléphone.',
        slides: [
          {
            img: '/screenshots/wellness-briefing-fr.png',
            video: '/videos/readiness-fr',
            kind: 'desktop',
            alt: 'Briefing du matin STRIVN : réponses aux check-ins et niveaux de risque par joueur',
            caption: 'Le briefing du matin : qui a répondu, qui est à surveiller.',
          },
          {
            img: '/screenshots/portal-checkin-fr.png',
            kind: 'mobile',
            alt: 'Check-in wellness côté joueur : curseurs fatigue, sommeil, stress et humeur',
            caption: 'Le joueur renseigne fatigue, sommeil, stress et humeur en quelques secondes.',
          },
        ],
      },
      {
        title: 'Pensé aussi pour les joueurs',
        blurb: 'Chaque joueur a son espace : readiness, charge de la semaine, agenda des séances et matchs. Pas de compte à créer, pas de friction.',
        slides: [
          {
            img: '/screenshots/portal-fitness-fr.png',
            kind: 'mobile',
            alt: 'Espace joueur STRIVN : readiness, charge récente et tendance de la semaine',
            caption: 'Le joueur voit sa readiness et sa charge de la semaine.',
          },
          {
            img: '/screenshots/portal-agenda-fr.png',
            kind: 'mobile',
            alt: 'Agenda joueur STRIVN : séances, matchs et réunions des deux prochaines semaines',
            caption: 'Séances, matchs et réunions réunis dans un seul agenda.',
          },
        ],
      },
    ],
    featuresLead: 'Et tout le reste du quotidien d’un préparateur physique.',
    features: {
      title: 'Ce que STRIVN apporte aux préparateurs physiques',
      items: [
        {
          title: 'Planification de la charge',
          text: 'Construisez des semaines d\'entraînement avec charge planifiée vs réelle, gestion de l\'ACWR et des catégories de charge (physique, technique, match). Les dépassements ressortent d\'eux-mêmes.',
        },
        {
          title: 'Import GPS et formules de charge',
          text: 'Importez les fichiers Catapult ou Statsport, mappez vos métriques personnalisées et calculez automatiquement la charge de séance par joueur. Pas de ressaisie, pas de tableur.',
        },
        {
          title: 'Readiness et estimation de la fatigue',
          text: 'STRIVN projette la readiness de chaque joueur sur 1 à 5 jours à partir de la charge réelle et d\'un modèle de décroissance de fatigue. Anticipez les pics avant qu\'ils arrivent.',
        },
        {
          title: 'Check-ins RPE et wellness',
          text: 'Questionnaires de bien-être le matin et sRPE en fin de séance, envoyés automatiquement. Les tendances individuelles et collectives sont visibles en un coup d\'oeil.',
        },
        {
          title: 'Blessures et retour au jeu',
          text: 'Trois niveaux de disponibilité : INDISPONIBLE, ENTRAÎNEMENT PARTIEL et DISPONIBLE. Notes de suivi, pièces jointes et historique complet. Le retour au jeu reste cohérent même entre deux équipes.',
        },
        {
          title: 'Assistant IA coach',
          text: 'Interrogez l\'assistant en langage naturel : « Qui est à risque cette semaine ? », « Planifie une récupération pour demain. » L\'IA lit la charge, la readiness et les blessures pour vous répondre avec contexte.',
        },
      ],
    },
    howItWorks: {
      title: 'La journée d\'un préparateur physique avec STRIVN',
      steps: [
        {
          title: 'Le matin : vérifier la readiness',
          text: 'Les check-ins wellness arrivent automatiquement. STRIVN vous montre qui est frais, qui accumule de la fatigue et qui dépasse son seuil. Avant même que la séance commence.',
        },
        {
          title: 'Avant la séance : planifier la charge',
          text: 'Ajustez l\'intensité planifiée en fonction de la readiness du groupe. Le plan de charge hebdomadaire se met à jour en temps réel et signale les déséquilibres charge aiguë/chronique.',
        },
        {
          title: 'Pendant ou après : capturer la charge réelle',
          text: 'Importez le fichier GPS de la séance ou saisissez les RPE joueur par joueur. La charge réelle se compare automatiquement au plan et met à jour les projections de readiness pour les jours suivants.',
        },
        {
          title: 'En fin de semaine : analyser les tendances',
          text: 'Visualisez la charge cumulative, les ACWR par joueur et les alertes de surmenage. Partagez le tableau de bord avec le coach en chef et le médecin sans export manuel.',
        },
      ],
    },
    finalCta: {
      title: 'Commencez gratuitement dès aujourd\'hui.',
      body: 'STRIVN est gratuit pour une équipe, sans carte bancaire. Invitez votre staff médical et votre coach en chef. Ils voient les mêmes données en temps réel.',
      cta: 'Créer mon espace équipe',
    },
  },

  en: {
    meta: {
      title: 'STRIVN for S&C coaches: load, GPS and readiness',
      description:
        'Load planning, GPS import, readiness estimation, injury tracking and return-to-play: STRIVN gives S&C coaches a complete picture of every player, in real time.',
    },
    eyebrow: 'STRIVN for S&C coaches',
    hero: {
      title: 'Every player\'s load, readiness and health. In one place.',
      lede: 'GPS import, fatigue estimation, load planning and return-to-play. All in one platform, shared with your full staff.',
      cta: 'Start for free',
    },
    showcase: [
      {
        title: 'Plan and track training load',
        blurb: 'Plan the week, then let planned vs actual load and per-player ACWR calculate themselves. sRPE or GPS formula, no spreadsheet required.',
        slides: [
          {
            img: '/screenshots/load-planning.png',
            video: '/videos/load-planning-en',
            kind: 'desktop',
            alt: 'STRIVN load planning: daily planned load, weekly target and projected ACWR for the week',
            caption: 'Plan the week’s load by day, with an ACWR forecast and weekly target.',
          },
          {
            img: '/screenshots/load-overview.png',
            kind: 'desktop',
            alt: 'STRIVN team load view: total load, average RPE and per-player distribution',
            caption: 'The week’s load, per player, with RPE and distribution.',
          },
          {
            img: '/screenshots/load-formula.png',
            kind: 'desktop',
            alt: 'Configuring the sRPE load formula in STRIVN',
            caption: 'Set your sRPE or GPS load formula in seconds.',
          },
        ],
      },
      {
        title: 'Readiness and check-ins, on both sides',
        blurb: 'In the morning you see who responded and who is at risk. Players log fatigue, sleep, stress and mood from their phone.',
        slides: [
          {
            img: '/screenshots/wellness-briefing.png',
            video: '/videos/readiness-en',
            kind: 'desktop',
            alt: 'STRIVN morning briefing: check-in responses and per-player risk levels',
            caption: 'The morning briefing: who responded, who to watch.',
          },
          {
            img: '/screenshots/portal-checkin.png',
            kind: 'mobile',
            alt: 'Player-side wellness check-in: fatigue, sleep, stress and mood sliders',
            caption: 'Players log fatigue, sleep, stress and mood in seconds.',
          },
        ],
      },
      {
        title: 'Built for players too',
        blurb: 'Every player gets their own space: readiness, weekly load, training and match agenda. No account to create, no friction.',
        slides: [
          {
            img: '/screenshots/portal-fitness.png',
            kind: 'mobile',
            alt: 'STRIVN player space: readiness, recent load and weekly trend',
            caption: 'Each player sees their readiness and weekly load.',
          },
          {
            img: '/screenshots/portal-agenda.png',
            kind: 'mobile',
            alt: 'STRIVN player agenda: training, matches and meetings for the next two weeks',
            caption: 'Training, matches and meetings in one agenda.',
          },
        ],
      },
    ],
    featuresLead: 'And everything else in an S&C coach’s day.',
    features: {
      title: 'What STRIVN brings to S&C coaches',
      items: [
        {
          title: 'Load planning & periodisation',
          text: 'Build training weeks with planned vs actual load, ACWR management and load categories (physical, technical, match). Overloads surface on their own, no spreadsheet hunting.',
        },
        {
          title: 'GPS import & load formulas',
          text: 'Import Catapult or Statsport files, map your custom metrics and automatically calculate session load per player. No manual re-entry, no version-controlled spreadsheets.',
        },
        {
          title: 'Readiness & fatigue estimation',
          text: 'STRIVN projects each player\'s readiness 1-5 days forward using actual load and a fatigue decay model. Anticipate peak-load risk before it becomes a problem.',
        },
        {
          title: 'RPE & wellness check-ins',
          text: 'Morning wellness questionnaires and post-session sRPE sent automatically. Individual and team trends are visible at a glance, without chasing players.',
        },
        {
          title: 'Injury tracking & return-to-play',
          text: 'Three availability states: OUT, PARTIAL TRAINING and AVAILABLE. Progress notes, attachments and full history per player. RTP stays coherent even across squads.',
        },
        {
          title: 'AI coach assistant',
          text: 'Ask in plain language: "Who\'s at risk this week?", "Plan a recovery session for tomorrow." The AI reads load, readiness and injuries to answer with full context.',
        },
      ],
    },
    howItWorks: {
      title: 'An S&C coach\'s day with STRIVN',
      steps: [
        {
          title: 'Morning: check readiness',
          text: 'Wellness check-ins arrive automatically. STRIVN shows you who\'s fresh, who\'s accumulating fatigue and who is above their threshold. Before the session even starts.',
        },
        {
          title: 'Before the session: plan load',
          text: 'Adjust planned intensity based on group readiness. The weekly load plan updates in real time and flags acute:chronic load imbalances automatically.',
        },
        {
          title: 'During or after: capture actual load',
          text: 'Import the GPS session file or enter player RPE values. Actual load is compared against the plan instantly and updates readiness projections for the next days.',
        },
        {
          title: 'End of week: review trends',
          text: 'Visualise cumulative load, per-player ACWR and overtraining alerts. Share the dashboard with the head coach and team doctor, no manual export needed.',
        },
      ],
    },
    finalCta: {
      title: 'Start free today.',
      body: 'STRIVN is free for one team, no credit card required. Invite your medical staff and head coach. They see the same data in real time.',
      cta: 'Create my team space',
    },
  },

  nl: {
    meta: {
      title: 'STRIVN voor fysieke trainers: belasting, GPS en readiness',
      description:
        'Belastingsplanning, GPS-import, readiness-inschatting, blessureopvolging en return-to-play: STRIVN geeft fysieke trainers een volledig beeld van elke speler, in realtime.',
    },
    eyebrow: 'STRIVN voor fysieke trainers',
    hero: {
      title: 'De belasting, readiness en gezondheid van elke speler. Op één plek.',
      lede: 'GPS-import, vermoeidheidsinschatting, belastingsplanning en return-to-play. Alles op één platform, gedeeld met je volledige staf.',
      cta: 'Gratis beginnen',
    },
    showcase: [
      {
        title: 'Trainingsbelasting plannen en opvolgen',
        blurb: 'Plan de week en laat de geplande vs. werkelijke belasting en de ACWR per speler zichzelf berekenen. sRPE- of GPS-formule, geen spreadsheet nodig.',
        slides: [
          {
            img: '/screenshots/load-planning.png',
            video: '/videos/load-planning-en',
            kind: 'desktop',
            alt: 'STRIVN belastingsplanning: geplande dagbelasting, wekelijks doel en verwachte ACWR voor de week',
            caption: 'Plan de belasting van de week per dag, met een ACWR-prognose en een wekelijks doel.',
          },
          {
            img: '/screenshots/load-overview.png',
            kind: 'desktop',
            alt: 'STRIVN teambelasting-overzicht: totale belasting, gemiddelde RPE en verdeling per speler',
            caption: 'De belasting van de week, per speler, met RPE en verdeling.',
          },
          {
            img: '/screenshots/load-formula.png',
            kind: 'desktop',
            alt: 'De sRPE-belastingsformule configureren in STRIVN',
            caption: 'Stel je sRPE- of GPS-belastingsformule in enkele seconden in.',
          },
        ],
      },
      {
        title: 'Readiness en check-ins, aan beide kanten',
        blurb: '’s Ochtends zie je wie geantwoord heeft en wie een risico vormt. Spelers noteren vermoeidheid, slaap, stress en stemming vanaf hun telefoon.',
        slides: [
          {
            img: '/screenshots/wellness-briefing.png',
            kind: 'desktop',
            alt: 'STRIVN ochtendbriefing: antwoorden op check-ins en risiconiveaus per speler',
            caption: 'De ochtendbriefing: wie geantwoord heeft, wie je in de gaten moet houden.',
          },
          {
            img: '/screenshots/portal-checkin.png',
            kind: 'mobile',
            alt: 'Welzijns-check-in aan spelerskant: schuifregelaars voor vermoeidheid, slaap, stress en stemming',
            caption: 'Spelers noteren vermoeidheid, slaap, stress en stemming in enkele seconden.',
          },
        ],
      },
      {
        title: 'Ook gebouwd voor spelers',
        blurb: 'Elke speler krijgt zijn eigen ruimte: readiness, wekelijkse belasting, trainings- en wedstrijdagenda. Geen account aanmaken, geen wrijving.',
        slides: [
          {
            img: '/screenshots/portal-fitness.png',
            kind: 'mobile',
            alt: 'STRIVN spelersruimte: readiness, recente belasting en wekelijkse trend',
            caption: 'Elke speler ziet zijn readiness en wekelijkse belasting.',
          },
          {
            img: '/screenshots/portal-agenda.png',
            kind: 'mobile',
            alt: 'STRIVN spelersagenda: trainingen, wedstrijden en vergaderingen voor de komende twee weken',
            caption: 'Trainingen, wedstrijden en vergaderingen in één agenda.',
          },
        ],
      },
    ],
    featuresLead: 'En al de rest van de dag van een fysieke trainer.',
    features: {
      title: 'Wat STRIVN fysieke trainers biedt',
      items: [
        {
          title: 'Belastingsplanning & periodisering',
          text: 'Bouw trainingsweken op met geplande vs. werkelijke belasting, ACWR-beheer en belastingscategorieën (fysiek, technisch, wedstrijd). Overbelasting komt vanzelf naar boven, geen zoekwerk in spreadsheets.',
        },
        {
          title: 'GPS-import & belastingsformules',
          text: 'Importeer Catapult- of Statsport-bestanden, koppel je eigen metrieken en bereken automatisch de sessiebelasting per speler. Geen handmatige herinvoer, geen spreadsheets met versiebeheer.',
        },
        {
          title: 'Readiness & vermoeidheidsinschatting',
          text: 'STRIVN projecteert de readiness van elke speler 1 tot 5 dagen vooruit op basis van de werkelijke belasting en een model voor vermoeidheidsafname. Anticipeer op piekbelasting voordat het een probleem wordt.',
        },
        {
          title: 'RPE- & welzijns-check-ins',
          text: 'Welzijnsvragenlijsten ’s ochtends en sRPE na de sessie, automatisch verstuurd. Individuele en teamtrends zijn in één oogopslag zichtbaar, zonder spelers achterna te lopen.',
        },
        {
          title: 'Blessureopvolging & return-to-play',
          text: 'Drie beschikbaarheidsstatussen: NIET BESCHIKBAAR, GEDEELTELIJKE TRAINING en BESCHIKBAAR. Voortgangsnotities, bijlagen en volledige historiek per speler. RTP blijft coherent, zelfs over teams heen.',
        },
        {
          title: 'AI-coachassistent',
          text: 'Vraag het in gewone taal: "Wie loopt deze week risico?", "Plan een hersteltraining voor morgen." De AI leest belasting, readiness en blessures om je met de volledige context te antwoorden.',
        },
      ],
    },
    howItWorks: {
      title: 'De dag van een fysieke trainer met STRIVN',
      steps: [
        {
          title: '’s Ochtends: readiness controleren',
          text: 'De welzijns-check-ins komen automatisch binnen. STRIVN toont je wie fris is, wie vermoeidheid opbouwt en wie boven zijn drempel zit. Nog voor de sessie begint.',
        },
        {
          title: 'Voor de sessie: belasting plannen',
          text: 'Pas de geplande intensiteit aan op basis van de readiness van de groep. Het wekelijkse belastingsplan werkt in realtime bij en signaleert automatisch onevenwichten in acute:chronische belasting.',
        },
        {
          title: 'Tijdens of na: de werkelijke belasting vastleggen',
          text: 'Importeer het GPS-sessiebestand of voer de RPE-waarden per speler in. De werkelijke belasting wordt meteen vergeleken met het plan en werkt de readiness-projecties voor de volgende dagen bij.',
        },
        {
          title: 'Op het einde van de week: trends bekijken',
          text: 'Visualiseer de cumulatieve belasting, de ACWR per speler en de overbelastingswaarschuwingen. Deel het dashboard met de hoofdcoach en de teamarts, zonder handmatige export.',
        },
      ],
    },
    finalCta: {
      title: 'Begin vandaag gratis.',
      body: 'STRIVN is gratis voor één team, zonder bankkaart. Nodig je medische staf en je hoofdcoach uit. Zij zien dezelfde gegevens in realtime.',
      cta: 'Mijn teamruimte aanmaken',
    },
  },

  de: {
    meta: {
      title: 'STRIVN für Athletiktrainer: Belastung, GPS und Readiness',
      description:
        'Belastungsplanung, GPS-Import, Readiness-Schätzung, Verletzungs-Tracking und Return-to-Play: STRIVN gibt Athletiktrainern ein vollständiges Bild jedes Spielers, in Echtzeit.',
    },
    eyebrow: 'STRIVN für Athletiktrainer',
    hero: {
      title: 'Belastung, Readiness und Gesundheit jedes Spielers. An einem Ort.',
      lede: 'GPS-Import, Ermüdungsschätzung, Belastungsplanung und Return-to-Play. Alles auf einer Plattform, geteilt mit Ihrem gesamten Staff.',
      cta: 'Kostenlos starten',
    },
    showcase: [
      {
        title: 'Trainingsbelastung planen und verfolgen',
        blurb: 'Planen Sie die Woche und lassen Sie geplante vs. tatsächliche Belastung und den ACWR pro Spieler sich von selbst berechnen. sRPE- oder GPS-Formel, ganz ohne Tabelle.',
        slides: [
          {
            img: '/screenshots/load-planning.png',
            video: '/videos/load-planning-en',
            kind: 'desktop',
            alt: 'STRIVN Belastungsplanung: geplante Tagesbelastung, wöchentliches Ziel und projizierter ACWR für die Woche',
            caption: 'Planen Sie die Belastung der Woche Tag für Tag, mit ACWR-Prognose und Wochenziel.',
          },
          {
            img: '/screenshots/load-overview.png',
            kind: 'desktop',
            alt: 'STRIVN Team-Belastungsansicht: Gesamtbelastung, durchschnittlicher RPE und Verteilung pro Spieler',
            caption: 'Die Belastung der Woche, pro Spieler, mit RPE und Verteilung.',
          },
          {
            img: '/screenshots/load-formula.png',
            kind: 'desktop',
            alt: 'Konfiguration der sRPE-Belastungsformel in STRIVN',
            caption: 'Stellen Sie Ihre sRPE- oder GPS-Belastungsformel in Sekunden ein.',
          },
        ],
      },
      {
        title: 'Readiness und Check-ins, auf beiden Seiten',
        blurb: 'Am Morgen sehen Sie, wer geantwortet hat und wer gefährdet ist. Spieler erfassen Ermüdung, Schlaf, Stress und Stimmung direkt vom Handy.',
        slides: [
          {
            img: '/screenshots/wellness-briefing.png',
            video: '/videos/readiness-en',
            kind: 'desktop',
            alt: 'STRIVN Morgenbriefing: Check-in-Antworten und Risikostufen pro Spieler',
            caption: 'Das Morgenbriefing: wer geantwortet hat, wen Sie im Blick behalten sollten.',
          },
          {
            img: '/screenshots/portal-checkin.png',
            kind: 'mobile',
            alt: 'Befinden-Check-in auf Spielerseite: Regler für Ermüdung, Schlaf, Stress und Stimmung',
            caption: 'Spieler erfassen Ermüdung, Schlaf, Stress und Stimmung in Sekunden.',
          },
        ],
      },
      {
        title: 'Auch für Spieler gemacht',
        blurb: 'Jeder Spieler bekommt seinen eigenen Bereich: Readiness, wöchentliche Belastung, Trainings- und Spielkalender. Kein Konto anzulegen, keine Reibung.',
        slides: [
          {
            img: '/screenshots/portal-fitness.png',
            kind: 'mobile',
            alt: 'STRIVN Spielerbereich: Readiness, aktuelle Belastung und Wochentrend',
            caption: 'Jeder Spieler sieht seine Readiness und wöchentliche Belastung.',
          },
          {
            img: '/screenshots/portal-agenda.png',
            kind: 'mobile',
            alt: 'STRIVN Spielerkalender: Training, Spiele und Meetings für die nächsten zwei Wochen',
            caption: 'Training, Spiele und Meetings in einem Kalender.',
          },
        ],
      },
    ],
    featuresLead: 'Und alles andere im Alltag eines Athletiktrainers.',
    features: {
      title: 'Was STRIVN Athletiktrainern bietet',
      items: [
        {
          title: 'Belastungsplanung & Periodisierung',
          text: 'Bauen Sie Trainingswochen mit geplanter vs. tatsächlicher Belastung, ACWR-Management und Belastungskategorien (physisch, technisch, Spiel). Überlastungen treten von selbst zutage, kein Suchen in Tabellen.',
        },
        {
          title: 'GPS-Import & Belastungsformeln',
          text: 'Importieren Sie Catapult- oder Statsport-Dateien, mappen Sie Ihre eigenen Metriken und berechnen Sie die Session-Belastung pro Spieler automatisch. Keine manuelle Neuerfassung, keine versionierten Tabellen.',
        },
        {
          title: 'Readiness & Ermüdungsschätzung',
          text: 'STRIVN projiziert die Readiness jedes Spielers 1-5 Tage voraus, basierend auf der tatsächlichen Belastung und einem Ermüdungsabbau-Modell. Antizipieren Sie Belastungsspitzen, bevor sie zum Problem werden.',
        },
        {
          title: 'RPE- & Befinden-Check-ins',
          text: 'Morgendliche Befinden-Fragebögen und sRPE nach der Session, automatisch versendet. Individuelle und Team-Trends sind auf einen Blick sichtbar, ohne den Spielern hinterherzulaufen.',
        },
        {
          title: 'Verletzungs-Tracking & Return-to-Play',
          text: 'Drei Verfügbarkeitsstatus: NICHT VERFÜGBAR, TEILTRAINING und VERFÜGBAR. Verlaufsnotizen, Anhänge und vollständige Historie pro Spieler. Der Return-to-Play bleibt kohärent, sogar teamübergreifend.',
        },
        {
          title: 'KI-Coach-Assistent',
          text: 'Fragen Sie in einfacher Sprache: „Wer ist diese Woche gefährdet?", „Planen Sie für morgen eine Regenerationseinheit." Die KI liest Belastung, Readiness und Verletzungen, um Ihnen mit vollem Kontext zu antworten.',
        },
      ],
    },
    howItWorks: {
      title: 'Der Tag eines Athletiktrainers mit STRIVN',
      steps: [
        {
          title: 'Morgens: Readiness prüfen',
          text: 'Die Befinden-Check-ins kommen automatisch an. STRIVN zeigt Ihnen, wer frisch ist, wer Ermüdung aufbaut und wer über seiner Schwelle liegt. Noch bevor die Session beginnt.',
        },
        {
          title: 'Vor der Session: Belastung planen',
          text: 'Passen Sie die geplante Intensität an die Readiness der Gruppe an. Der wöchentliche Belastungsplan aktualisiert sich in Echtzeit und markiert Ungleichgewichte zwischen akuter und chronischer Belastung automatisch.',
        },
        {
          title: 'Während oder danach: tatsächliche Belastung erfassen',
          text: 'Importieren Sie die GPS-Session-Datei oder geben Sie die RPE-Werte pro Spieler ein. Die tatsächliche Belastung wird sofort mit dem Plan verglichen und aktualisiert die Readiness-Projektionen für die nächsten Tage.',
        },
        {
          title: 'Am Ende der Woche: Trends auswerten',
          text: 'Visualisieren Sie die kumulative Belastung, den ACWR pro Spieler und Übertrainings-Warnungen. Teilen Sie das Dashboard mit dem Cheftrainer und dem Teamarzt, ohne manuellen Export.',
        },
      ],
    },
    finalCta: {
      title: 'Starte heute kostenlos.',
      body: 'STRIVN ist kostenlos für ein Team, ohne Kreditkarte. Laden Sie Ihren medizinischen Staff und Ihren Cheftrainer ein. Sie sehen dieselben Daten in Echtzeit.',
      cta: 'Meinen Teambereich erstellen',
    },
  },
};
