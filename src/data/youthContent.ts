import type { Locale } from './landingContent';

/** One screenshot (or short video) in a showcase carousel. */
export type Slide = {
  img: string;
  /** Optional video base path (without extension); .mp4 + .webm are loaded, img is the poster. */
  video?: string;
  kind: 'desktop' | 'mobile';
  alt: string;
  caption: string;
};

/**
 * A titled group of slides rendered as one carousel. This lived in the old
 * per-feature content file; the youth page is now its only consumer, so it
 * lives here rather than keeping that file alive for one type.
 */
export type Showcase = {
  title: string;
  blurb: string;
  slides: Slide[];
};

type YouthContent = {
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

export const youthContent: Record<Locale, YouthContent> = {
  fr: {
    meta: {
      title: 'STRIVN pour les équipes de jeunes | Les parents répondent',
      description:
        'Les tuteurs répondent à la convocation à la place du joueur et suivent le match en direct. Le mode jeunes masque deux fonctions aux mineurs et recueille les consentements des tuteurs.',
    },
    eyebrow: 'STRIVN pour les équipes de jeunes',
    hero: {
      title: 'Laissez les parents répondre à la convocation.',
      lede: 'Chaque tuteur reçoit son lien personnel et répond Présent, Incertain ou Absent à la place du joueur. Le mode jeunes masque deux fonctions aux mineurs et recueille les consentements des tuteurs. Le jour du match, un lien public ouvre le direct à toute la famille.',
      cta: 'Commencer gratuitement',
    },
    showcase: [
      {
        title: 'Envoyez la convocation, les tuteurs répondent en un tap.',
        blurb: 'Chaque tuteur est relié à son enfant et reçoit la convocation par un lien personnel. Il choisit entre trois réponses, Présent, Incertain ou Absent, et laisse un mot au staff. Le premier tuteur qui répond règle la présence, et la relance part seule.',
        slides: [
          {
            img: '/screenshots/youth-guardians-card-fr.png',
            kind: 'desktop',
            alt: 'Fiche joueur STRIVN : tuteurs reliés à l’enfant, avec leurs coordonnées et leurs réponses aux convocations',
            caption: 'Les tuteurs sont reliés au joueur et répondent aux convocations à sa place.',
          },
        ],
      },
      {
        title: 'Partagez le direct du match en un seul lien.',
        blurb: 'Envoyez le lien public avant le coup d’envoi, aux parents en tribune comme aux grands-parents restés à la maison. Ils suivent le score et les événements du match en direct, depuis un navigateur.',
        slides: [
          {
            img: '/screenshots/live-viewer-phone-fr.png',
            kind: 'mobile',
            alt: 'Viewer de match public STRIVN sur téléphone : score et événements du match en direct, sans compte',
            caption: 'Le viewer public : score et événements du match en direct.',
          },
        ],
      },
      {
        title: 'Activez le mode jeunes, deux fonctions se masquent.',
        blurb: 'Choisissez la catégorie d’âge du groupe et l’espace s’adapte en quelques secondes. Le coach IA compagnon et les amendes disparaissent de l’app des joueurs mineurs. Les consentements des tuteurs se recueillent au même endroit, révocables à tout moment.',
        slides: [
          {
            img: '/screenshots/youth-team-setting-fr.png',
            kind: 'desktop',
            alt: 'Réglage du mode jeunes d’une équipe STRIVN : catégorie d’âge et fonctions masquées pour les joueurs',
            caption: 'Le mode jeunes s’active dans les réglages de l’équipe, en quelques secondes.',
          },
        ],
      },
    ],
    featuresLead: 'Six fonctions couvrent le reste de la semaine d’un coach de jeunes.',
    features: {
      title: 'Réunissez le groupe, les tuteurs et les consentements.',
      items: [
        {
          title: 'RSVP parental',
          text: 'Chaque tuteur reçoit la convocation par un lien personnel et choisit entre trois réponses. La feuille de présence se remplit en direct, et la relance part seule.',
        },
        {
          title: 'Viewer de match public',
          text: 'Un lien public ouvre le direct du match dans le navigateur de chaque famille. Le score et les événements arrivent en direct, depuis la tribune ou la maison.',
        },
        {
          title: 'Consentements des tuteurs',
          text: 'Recueillez et suivez les consentements au même endroit : qui a consenti à quoi, et quand. Aucun message n’atteint un joueur mineur avant le consentement du parent. Chaque consentement se retire à tout moment, conformément au RGPD.',
        },
        {
          title: 'Mode jeunes',
          text: 'Choisissez la catégorie d’âge du groupe : deux fonctions se masquent pour les joueurs. Le coach IA compagnon et les amendes restent visibles pour le staff seul.',
        },
        {
          title: 'Communication aux parents',
          text: 'Annonces, changements d’horaire et infos pratiques partent dans un seul canal vers tous les parents. Chaque famille lit ce qui concerne son enfant.',
        },
        {
          title: 'Votre groupe, centralisé',
          text: 'Joueurs, tuteurs, présences et agenda vivent au même endroit, partagés avec tout le staff. Le plan Free couvre une équipe, ses joueurs sans plafond et une place de staff.',
        },
      ],
    },
    howItWorks: {
      title: 'Montez le groupe en quatre étapes.',
      steps: [
        {
          title: 'Reliez les parents au groupe',
          text: 'Ajoutez vos joueurs et leurs tuteurs, puis activez le mode jeunes sur l’équipe. Les consentements se recueillent dès l’inscription, et l’espace s’adapte à la catégorie d’âge.',
        },
        {
          title: 'Envoyez la convocation',
          text: 'Chaque tuteur reçoit son lien personnel et répond en un tap à la place du joueur. La feuille de présence se remplit toute seule, relances comprises.',
        },
        {
          title: 'Partagez le direct le jour du match',
          text: 'Un lien envoyé avant le coup d’envoi ouvre le direct à toute la famille. Les parents en tribune et ceux restés à la maison suivent le même score.',
        },
        {
          title: 'Tenez les parents au courant',
          text: 'Prochaines dates, annonces et infos pratiques partent en un message vers tous les parents. Le staff, les tuteurs et vous lisez le même agenda, mis à jour au même moment.',
        },
      ],
    },
    finalCta: {
      title: 'Créez votre espace et reliez les parents.',
      body: 'Chaque nouveau compte démarre avec 30 jours de Semi-Pro, sans carte bancaire. Ensuite le plan Free fait tourner une équipe toute la saison, ses joueurs sans plafond compris.',
      cta: 'Créer mon espace équipe',
    },
  },

  en: {
    meta: {
      title: 'STRIVN for youth teams | Parents answer the call-up',
      description:
        'Guardians answer the call-up on the player’s behalf and follow the match live through a public link. Youth mode hides two features from minors and collects the guardians’ consents.',
    },
    eyebrow: 'STRIVN for youth teams',
    hero: {
      title: 'Let parents answer the call-up.',
      lede: 'Every guardian gets a personal link and answers Present, Unsure or Absent on the player’s behalf. Youth mode hides two features from minors and collects the guardians’ consents. On match day, a public link opens the live score to the whole family.',
      cta: 'Start for free',
    },
    showcase: [
      {
        title: 'Send the call-up, guardians answer in one tap.',
        blurb: 'Every guardian is linked to their child and receives the call-up through a personal link. They pick one of three answers, Present, Unsure or Absent, and leave a note for the staff. The first guardian to answer settles attendance, and the reminder goes out on its own.',
        slides: [
          {
            img: '/screenshots/youth-guardians-card.png',
            kind: 'desktop',
            alt: 'STRIVN player sheet: guardians linked to the child, with their contact details and call-up replies',
            caption: 'Guardians are linked to the player and answer call-ups on their behalf.',
          },
        ],
      },
      {
        title: 'Share the live match through one public link.',
        blurb: 'Send the public link before kick-off, to parents in the stand and grandparents at home. They follow the score and the match events live, from a browser.',
        slides: [
          {
            img: '/screenshots/live-viewer-phone.png',
            kind: 'mobile',
            alt: 'STRIVN public match viewer on a phone: live score and match events, no account',
            caption: 'The public viewer: live score and match events.',
          },
        ],
      },
      {
        title: 'Turn on youth mode, two features hide themselves.',
        blurb: 'Pick the group’s age category and the space adapts in a few seconds. The AI coach companion and the fines disappear from the minors’ app. Guardian consents are collected in one place, withdrawable at any time.',
        slides: [
          {
            img: '/screenshots/youth-team-setting.png',
            kind: 'desktop',
            alt: 'STRIVN team youth-mode setting: age category and features hidden from players',
            caption: 'Youth mode is switched on in the team settings, in seconds.',
          },
        ],
      },
    ],
    featuresLead: 'Six features cover the rest of a youth coach’s week.',
    features: {
      title: 'Bring your group, the guardians and the consents together.',
      items: [
        {
          title: 'Parental RSVP',
          text: 'Every guardian receives the call-up through a personal link and picks one of three answers. The attendance sheet fills in live, and the reminder goes out on its own.',
        },
        {
          title: 'Public match viewer',
          text: 'A public link opens the live match in every family’s browser. The score and the match events arrive live, from the stands or from home.',
        },
        {
          title: 'Guardian consents',
          text: 'Collect and track consents in one place: who agreed to what, and when. No message reaches a minor before the parent has given consent. Each consent is withdrawn at any time, in line with GDPR.',
        },
        {
          title: 'Youth mode',
          text: 'Pick the group’s age category: two features hide themselves from the players. The AI coach companion and the fines stay visible to the staff alone.',
        },
        {
          title: 'Parent communication',
          text: 'Announcements, schedule changes and practical info go out in one channel to every parent. Each family reads what concerns their own child.',
        },
        {
          title: 'Your group, centralised',
          text: 'Players, guardians, attendance and the calendar live in one place, shared with your whole staff. The Free plan covers one team, its players uncapped and one staff seat.',
        },
      ],
    },
    howItWorks: {
      title: 'Set the group up in four steps.',
      steps: [
        {
          title: 'Link parents to the group',
          text: 'Add your players and their guardians, then turn on youth mode for the team. Consents are collected from sign-up, and the space adapts to the age category.',
        },
        {
          title: 'Send the call-up',
          text: 'Every guardian gets a personal link and answers in one tap on the player’s behalf. The attendance sheet fills itself, reminders included.',
        },
        {
          title: 'Share the live link on match day',
          text: 'A link sent before kick-off opens the live match to the whole family. Parents in the stands and family at home follow the same score.',
        },
        {
          title: 'Keep the parents posted',
          text: 'Next dates, announcements and practical info go out in one message to every parent. Your staff, the guardians and you read the same calendar, updated at the same moment.',
        },
      ],
    },
    finalCta: {
      title: 'Create your space and link the parents.',
      body: 'Every new account starts on 30 days of Semi-Pro, without a card. The Free plan then runs one team for a whole season, its players uncapped.',
      cta: 'Create my team space',
    },
  },

  nl: {
    meta: {
      title: 'STRIVN voor jeugdploegen | Ouders antwoorden op de oproeping',
      description:
        'Voogden antwoorden op de oproeping in naam van de speler en volgen de wedstrijd live via een publieke link. De jeugdmodus verbergt twee functies voor minderjarigen en verzamelt de toestemmingen van de voogden.',
    },
    eyebrow: 'STRIVN voor jeugdploegen',
    hero: {
      title: 'Laat de ouders op de oproeping antwoorden.',
      lede: 'Elke voogd krijgt zijn persoonlijke link en antwoordt Aanwezig, Onzeker of Afwezig in naam van de speler. De jeugdmodus verbergt twee functies voor minderjarigen en verzamelt de toestemmingen van de voogden. Op wedstrijddag opent één publieke link de live score voor de hele familie.',
      cta: 'Gratis beginnen',
    },
    showcase: [
      {
        title: 'Verstuur de oproeping, de voogden antwoorden met één tik.',
        blurb: 'Elke voogd is gekoppeld aan zijn kind en ontvangt de oproeping via een persoonlijke link. Hij kiest uit drie antwoorden, Aanwezig, Onzeker of Afwezig, en laat een woordje na voor de staf. Wie eerst antwoordt, regelt de aanwezigheid, en de herinnering vertrekt vanzelf.',
        slides: [
          {
            img: '/screenshots/youth-guardians-card.png',
            kind: 'desktop',
            alt: 'STRIVN spelersfiche: voogden gekoppeld aan het kind, met contactgegevens en antwoorden op oproepingen',
            caption: 'Voogden zijn gekoppeld aan de speler en antwoorden op oproepingen in zijn plaats.',
          },
        ],
      },
      {
        title: 'Deel de live wedstrijd via één publieke link.',
        blurb: 'Stuur de publieke link voor de aftrap, naar ouders in de tribune en grootouders thuis. Zij volgen de score en de wedstrijdgebeurtenissen live, gewoon in een browser.',
        slides: [
          {
            img: '/screenshots/live-viewer-phone.png',
            kind: 'mobile',
            alt: 'Publieke STRIVN-wedstrijdviewer op een telefoon: live score en wedstrijdgebeurtenissen, zonder account',
            caption: 'De publieke viewer: live score en wedstrijdgebeurtenissen.',
          },
        ],
      },
      {
        title: 'Zet de jeugdmodus aan, twee functies verdwijnen.',
        blurb: 'Kies de leeftijdscategorie van de groep en de ruimte past zich in enkele seconden aan. De AI-coachcompagnon en de boetes verdwijnen uit de app van minderjarige spelers. De toestemmingen van de voogden worden op één plek verzameld, op elk moment intrekbaar.',
        slides: [
          {
            img: '/screenshots/youth-team-setting.png',
            kind: 'desktop',
            alt: 'Jeugdmodus-instelling van een STRIVN-team: leeftijdscategorie en functies verborgen voor spelers',
            caption: 'De jeugdmodus zet je in enkele seconden aan in de teaminstellingen.',
          },
        ],
      },
    ],
    featuresLead: 'Zes functies dekken de rest van de week van een jeugdcoach.',
    features: {
      title: 'Breng je groep, de voogden en de toestemmingen samen.',
      items: [
        {
          title: 'Ouder-RSVP',
          text: 'Elke voogd krijgt de oproeping via een persoonlijke link en kiest uit drie antwoorden. De aanwezigheidslijst vult zich live, en de herinnering vertrekt vanzelf.',
        },
        {
          title: 'Publieke wedstrijdviewer',
          text: 'Eén publieke link opent de live wedstrijd in de browser van elke familie. De score en de wedstrijdgebeurtenissen komen live binnen, vanuit de tribune of van thuis.',
        },
        {
          title: 'Toestemmingen van voogden',
          text: 'Verzamel en volg de toestemmingen op één plek: wie waarmee instemde, en wanneer. Geen enkel bericht bereikt een minderjarige speler voor de ouder toestemming gaf. Elke toestemming wordt op elk moment ingetrokken, conform de GDPR.',
        },
        {
          title: 'Jeugdmodus',
          text: 'Kies de leeftijdscategorie van de groep: twee functies verdwijnen bij de spelers. De AI-coachcompagnon en de boetes blijven enkel voor de staf zichtbaar.',
        },
        {
          title: 'Communicatie met ouders',
          text: 'Aankondigingen, uurwijzigingen en praktische info vertrekken via één kanaal naar alle ouders. Elk gezin leest wat zijn eigen kind aanbelangt.',
        },
        {
          title: 'Je groep, gecentraliseerd',
          text: 'Spelers, voogden, aanwezigheden en agenda staan op één plek, gedeeld met je hele staf. Het Free-plan dekt één ploeg, haar spelers zonder plafond en één stafplaats.',
        },
      ],
    },
    howItWorks: {
      title: 'Zet de groep op in vier stappen.',
      steps: [
        {
          title: 'Koppel de ouders aan de groep',
          text: 'Voeg je spelers en hun voogden toe en zet daarna de jeugdmodus aan voor de ploeg. De toestemmingen worden vanaf de inschrijving verzameld en de ruimte past zich aan de leeftijd aan.',
        },
        {
          title: 'Verstuur de oproeping',
          text: 'Elke voogd krijgt zijn persoonlijke link en antwoordt met één tik in naam van de speler. De aanwezigheidslijst vult zichzelf, herinneringen inbegrepen.',
        },
        {
          title: 'Deel de livelink op wedstrijddag',
          text: 'Eén link voor de aftrap opent de live wedstrijd voor de hele familie. Ouders in de tribune en familie thuis volgen dezelfde score.',
        },
        {
          title: 'Hou de ouders op de hoogte',
          text: 'Volgende data, aankondigingen en praktische info vertrekken in één bericht naar alle ouders. Je staf, de voogden en jij lezen dezelfde agenda, op hetzelfde moment bijgewerkt.',
        },
      ],
    },
    finalCta: {
      title: 'Maak je ruimte aan en koppel de ouders.',
      body: 'Elk nieuw account start met 30 dagen Semi-Pro, zonder bankkaart. Daarna laat het Free-plan één ploeg een heel seizoen draaien, haar spelers zonder plafond.',
      cta: 'Mijn teamruimte aanmaken',
    },
  },

  de: {
    meta: {
      title: 'STRIVN für Jugendteams | Eltern antworten auf das Aufgebot',
      description:
        'Erziehungsberechtigte antworten im Namen des Spielers auf das Aufgebot und verfolgen das Spiel live über einen öffentlichen Link. Der Jugendmodus blendet zwei Funktionen für Minderjährige aus und erfasst die Einwilligungen der Eltern.',
    },
    eyebrow: 'STRIVN für Jugendteams',
    hero: {
      title: 'Eltern aufs Aufgebot antworten lassen.',
      lede: 'Jeder Erziehungsberechtigte erhält seinen persönlichen Link und antwortet im Namen des Spielers Dabei, Unsicher oder Abwesend. Der Jugendmodus blendet zwei Funktionen für Minderjährige aus und erfasst die Einwilligungen der Eltern. Am Spieltag öffnet ein öffentlicher Link den Live-Spielstand für die ganze Familie.',
      cta: 'Kostenlos starten',
    },
    showcase: [
      {
        title: 'Senden Sie das Aufgebot, die Eltern antworten.',
        blurb: 'Jeder Erziehungsberechtigte ist mit seinem Kind verknüpft und erhält das Aufgebot über einen persönlichen Link. Er wählt eine von drei Antworten, Dabei, Unsicher oder Abwesend, und hinterlässt eine Notiz für den Staff. Wer zuerst antwortet, regelt die Anwesenheit, und die Erinnerung geht von selbst raus.',
        slides: [
          {
            img: '/screenshots/youth-guardians-card.png',
            kind: 'desktop',
            alt: 'STRIVN Spielerprofil: Erziehungsberechtigte mit dem Kind verknüpft, mit Kontaktdaten und Antworten auf Aufgebote',
            caption: 'Erziehungsberechtigte sind mit dem Spieler verknüpft und antworten an seiner Stelle auf Aufgebote.',
          },
        ],
      },
      {
        title: 'Teilen Sie das Live-Spiel über einen Link.',
        blurb: 'Senden Sie den öffentlichen Link vor dem Anpfiff, an Eltern auf der Tribüne und Großeltern zu Hause. Sie verfolgen den Spielstand und die Spielereignisse live, direkt im Browser.',
        slides: [
          {
            img: '/screenshots/live-viewer-phone.png',
            kind: 'mobile',
            alt: 'Öffentlicher STRIVN-Spielviewer auf dem Handy: Live-Spielstand und Spielereignisse, ohne Konto',
            caption: 'Der öffentliche Viewer: Spielstand und Spielereignisse live.',
          },
        ],
      },
      {
        title: 'Jugendmodus an: zwei Funktionen verschwinden.',
        blurb: 'Wählen Sie die Alterskategorie der Gruppe und der Bereich passt sich in Sekunden an. Der KI-Coach-Begleiter und die Strafkasse verschwinden aus der App minderjähriger Spieler. Die Einwilligungen der Eltern werden an einem Ort erfasst, jederzeit widerrufbar.',
        slides: [
          {
            img: '/screenshots/youth-team-setting.png',
            kind: 'desktop',
            alt: 'Jugendmodus-Einstellung eines STRIVN-Teams: Alterskategorie und für Spieler ausgeblendete Funktionen',
            caption: 'Der Jugendmodus wird in den Teameinstellungen aktiviert, in Sekunden.',
          },
        ],
      },
    ],
    featuresLead: 'Sechs Funktionen decken den Rest der Woche eines Jugendtrainers ab.',
    features: {
      title: 'Führen Sie Gruppe, Eltern und Einwilligungen zusammen.',
      items: [
        {
          title: 'Eltern-RSVP',
          text: 'Jeder Erziehungsberechtigte erhält das Aufgebot über einen persönlichen Link und wählt eine von drei Antworten. Die Anwesenheitsliste füllt sich live, und die Erinnerung geht von selbst raus.',
        },
        {
          title: 'Öffentlicher Spielviewer',
          text: 'Ein öffentlicher Link öffnet das Live-Spiel im Browser jeder Familie. Spielstand und Spielereignisse treffen live ein, von der Tribüne oder von zu Hause.',
        },
        {
          title: 'Einwilligungen der Eltern',
          text: 'Erfassen und verfolgen Sie die Einwilligungen an einem Ort: wer wann wozu eingewilligt hat. Keine Nachricht erreicht einen minderjährigen Spieler vor der Einwilligung des Elternteils. Jede Einwilligung lässt sich jederzeit widerrufen, wie es die DSGVO verlangt.',
        },
        {
          title: 'Jugendmodus',
          text: 'Wählen Sie die Alterskategorie der Gruppe: zwei Funktionen verschwinden bei den Spielern. Der KI-Coach-Begleiter und die Strafkasse bleiben allein für den Staff sichtbar.',
        },
        {
          title: 'Kommunikation mit den Eltern',
          text: 'Ankündigungen, Terminänderungen und praktische Infos gehen über einen Kanal an alle Eltern. Jede Familie liest, was ihr eigenes Kind betrifft.',
        },
        {
          title: 'Ihre Gruppe, zentralisiert',
          text: 'Spieler, Erziehungsberechtigte, Anwesenheiten und Kalender liegen an einem Ort, geteilt mit dem gesamten Staff. Der Free-Plan deckt ein Team, seine Spieler ohne Limit und einen Staff-Platz.',
        },
      ],
    },
    howItWorks: {
      title: 'Richten Sie die Gruppe in vier Schritten ein.',
      steps: [
        {
          title: 'Eltern mit der Gruppe verknüpfen',
          text: 'Fügen Sie Ihre Spieler und deren Erziehungsberechtigte hinzu und aktivieren Sie den Jugendmodus. Die Einwilligungen werden ab der Anmeldung erfasst, und der Bereich passt sich der Alterskategorie an.',
        },
        {
          title: 'Das Aufgebot senden',
          text: 'Jeder Erziehungsberechtigte erhält seinen persönlichen Link und antwortet mit einem Tipp im Namen des Spielers. Die Anwesenheitsliste füllt sich von selbst, Erinnerungen inklusive.',
        },
        {
          title: 'Den Live-Link am Spieltag teilen',
          text: 'Ein Link vor dem Anpfiff öffnet das Live-Spiel für die ganze Familie. Eltern auf der Tribüne und Familie zu Hause verfolgen denselben Spielstand.',
        },
        {
          title: 'Die Eltern auf dem Laufenden halten',
          text: 'Nächste Termine, Ankündigungen und praktische Infos gehen in einer Nachricht an alle Eltern. Ihr Staff, die Eltern und Sie lesen denselben Kalender, im selben Moment aktualisiert.',
        },
      ],
    },
    finalCta: {
      title: 'Erstellen Sie Ihren Bereich, verknüpfen Sie die Eltern.',
      body: 'Jedes neue Konto startet mit 30 Tagen Semi-Pro, ohne Kreditkarte. Danach lässt der Free-Plan ein Team eine ganze Saison laufen, seine Spieler ohne Limit.',
      cta: 'Meinen Teambereich erstellen',
    },
  },

  pt: {
    meta: {
      title: 'STRIVN para equipas de formação | Os pais respondem',
      description:
        'Os encarregados de educação respondem à convocatória em nome do jogador e acompanham o jogo em direto. O modo formação esconde duas funcionalidades aos menores e recolhe os consentimentos.',
    },
    eyebrow: 'STRIVN para equipas de formação',
    hero: {
      title: 'Deixe os pais responderem à convocatória.',
      lede: 'Cada encarregado de educação recebe o seu link pessoal e responde Presente, Incerto ou Ausente em nome do jogador. O modo formação esconde duas funcionalidades aos menores e recolhe os consentimentos dos encarregados. No dia de jogo, um link público abre o resultado em direto a toda a família.',
      cta: 'Começar gratuitamente',
    },
    showcase: [
      {
        title: 'Envie a convocatória, os pais respondem num toque.',
        blurb: 'Cada encarregado de educação está associado ao seu filho e recebe a convocatória por um link pessoal. Escolhe entre três respostas, Presente, Incerto ou Ausente, e deixa uma nota para o staff. Quem responder primeiro fecha a presença, e o lembrete parte sozinho.',
        slides: [
          {
            img: '/screenshots/youth-guardians-card.png',
            kind: 'desktop',
            alt: 'Ficha de jogador STRIVN: encarregados de educação associados à criança, com contactos e respostas às convocatórias',
            caption: 'Os encarregados de educação estão associados ao jogador e respondem às convocatórias em seu nome.',
          },
        ],
      },
      {
        title: 'Partilhe o jogo em direto num link público.',
        blurb: 'Envie o link público antes do apito inicial, aos pais na bancada e aos avós em casa. Acompanham o resultado e os lances em direto, a partir de um navegador.',
        slides: [
          {
            img: '/screenshots/live-viewer-phone.png',
            kind: 'mobile',
            alt: 'Vista pública de jogo STRIVN num telemóvel: resultado e lances em direto, sem conta',
            caption: 'A vista pública: resultado e lances em direto.',
          },
        ],
      },
      {
        title: 'Ative o modo formação, duas funcionalidades desaparecem.',
        blurb: 'Escolha o escalão etário do grupo e o espaço adapta-se em poucos segundos. O assistente de IA e as multas desaparecem da app dos jogadores menores. Os consentimentos dos encarregados de educação são recolhidos no mesmo sítio, revogáveis a qualquer momento.',
        slides: [
          {
            img: '/screenshots/youth-team-setting.png',
            kind: 'desktop',
            alt: 'Definição de modo formação da equipa STRIVN: escalão etário e funcionalidades ocultas para os jogadores',
            caption: 'O modo formação ativa-se nas definições da equipa, em segundos.',
          },
        ],
      },
    ],
    featuresLead: 'Seis funcionalidades cobrem o resto da semana de um treinador de formação.',
    features: {
      title: 'Reúna o grupo, os encarregados e os consentimentos.',
      items: [
        {
          title: 'Confirmação pelos pais',
          text: 'Cada encarregado de educação recebe a convocatória por um link pessoal e escolhe entre três respostas. A folha de presenças preenche-se em direto, e o lembrete parte sozinho.',
        },
        {
          title: 'Vista pública do jogo',
          text: 'Um link público abre o jogo em direto no navegador de cada família. O resultado e os lances chegam em direto, da bancada ou de casa.',
        },
        {
          title: 'Consentimentos dos encarregados de educação',
          text: 'Recolha e acompanhe os consentimentos no mesmo sítio: quem autorizou o quê e quando. Nenhuma mensagem chega a um jogador menor antes do consentimento do encarregado. Cada consentimento é revogável a qualquer momento, em linha com o RGPD.',
        },
        {
          title: 'Modo formação',
          text: 'Escolha o escalão etário do grupo: duas funcionalidades desaparecem para os jogadores. O assistente de IA e as multas ficam visíveis apenas para o staff.',
        },
        {
          title: 'Comunicação com os pais',
          text: 'Avisos, alterações de horário e informações práticas seguem num só canal para todos os pais. Cada família lê o que diz respeito ao seu filho.',
        },
        {
          title: 'O seu grupo, centralizado',
          text: 'Jogadores, encarregados de educação, presenças e agenda ficam no mesmo sítio, partilhados com todo o staff. O plano Free cobre uma equipa, os seus jogadores sem limite e um lugar de staff.',
        },
      ],
    },
    howItWorks: {
      title: 'Monte o grupo em quatro passos.',
      steps: [
        {
          title: 'Associar os pais ao grupo',
          text: 'Adicione os jogadores e os respetivos encarregados de educação e ative o modo formação. Os consentimentos são recolhidos desde a inscrição, e o espaço adapta-se ao escalão etário.',
        },
        {
          title: 'Enviar a convocatória',
          text: 'Cada encarregado de educação recebe um link pessoal e responde em nome do jogador num toque. A folha de presenças preenche-se sozinha, lembretes incluídos.',
        },
        {
          title: 'Partilhar o link em direto no dia de jogo',
          text: 'Um link enviado antes do apito inicial abre o jogo em direto a toda a família. Os pais na bancada e a família em casa acompanham o mesmo resultado.',
        },
        {
          title: 'Manter os pais a par',
          text: 'Próximas datas, avisos e informações práticas seguem numa mensagem para todos os pais. O staff, os encarregados de educação e o treinador leem a mesma agenda, atualizada ao mesmo tempo.',
        },
      ],
    },
    finalCta: {
      title: 'Crie o seu espaço e associe os pais.',
      body: 'Cada nova conta começa com 30 dias de Semi-Pro, sem cartão de crédito. Depois o plano Free faz rodar uma equipa toda a época, com os seus jogadores sem limite.',
      cta: 'Criar o meu espaço de equipa',
    },
  },

  es: {
    meta: {
      title: 'STRIVN para fútbol base | Las familias confirman la convocatoria',
      description:
        'Los tutores responden a la convocatoria en nombre del jugador y siguen el partido en directo con un enlace público. El modo formación oculta dos funciones a los menores y recoge los consentimientos.',
    },
    eyebrow: 'STRIVN para fútbol base',
    hero: {
      title: 'Deja que las familias respondan.',
      lede: 'Cada tutor recibe su enlace personal y responde Voy, Duda o No voy en nombre del jugador. El modo formación oculta dos funciones a los menores y recoge los consentimientos de los tutores. El día del partido, un enlace público abre el marcador en directo a toda la familia.',
      cta: 'Empezar gratis',
    },
    showcase: [
      {
        title: 'Envía la convocatoria, los tutores responden en un toque.',
        blurb: 'Cada tutor está vinculado a su hijo y recibe la convocatoria con un enlace personal. Elige entre tres respuestas, Voy, Duda o No voy, y deja una nota para el cuerpo técnico. Quien responde primero cierra la asistencia, y el recordatorio sale solo.',
        slides: [
          {
            img: '/screenshots/youth-guardians-card.png',
            kind: 'desktop',
            alt: 'Ficha de jugador en STRIVN: tutores vinculados al menor, con sus datos de contacto y respuestas a las convocatorias',
            caption: 'Los tutores están vinculados al jugador y responden a las convocatorias en su nombre.',
          },
        ],
      },
      {
        title: 'Comparte el directo del partido con un enlace.',
        blurb: 'Envía el enlace público antes del pitido inicial, a las familias en la grada y a los abuelos en casa. Siguen el marcador y las jugadas en directo, desde un navegador.',
        slides: [
          {
            img: '/screenshots/live-viewer-phone.png',
            kind: 'mobile',
            alt: 'Vista pública del partido en STRIVN desde el móvil: marcador y jugadas en directo, sin cuenta',
            caption: 'La vista pública: marcador y jugadas en directo.',
          },
        ],
      },
      {
        title: 'Activa el modo formación, dos funciones se ocultan.',
        blurb: 'Elige la categoría de edad del grupo y el espacio se adapta en unos segundos. El asistente de IA y las multas desaparecen de la app de los jugadores menores. Los consentimientos de los tutores se recogen en un mismo sitio, revocables en cualquier momento.',
        slides: [
          {
            img: '/screenshots/youth-team-setting.png',
            kind: 'desktop',
            alt: 'Ajuste de modo formación del equipo en STRIVN: categoría de edad y funciones ocultas a los jugadores',
            caption: 'El modo formación se activa en los ajustes del equipo, en segundos.',
          },
        ],
      },
    ],
    featuresLead: 'Seis funciones cubren el resto de la semana de un entrenador de fútbol base.',
    features: {
      title: 'Reúne el grupo, los tutores y los consentimientos.',
      items: [
        {
          title: 'Confirmación por parte de las familias',
          text: 'Cada tutor recibe la convocatoria con un enlace personal y elige entre tres respuestas. La asistencia se llena en directo, y el recordatorio sale solo.',
        },
        {
          title: 'Vista pública del partido',
          text: 'Un enlace público abre el partido en directo en el navegador de cada familia. El marcador y las jugadas llegan en directo, desde la grada o desde casa.',
        },
        {
          title: 'Consentimientos de los tutores',
          text: 'Recoge y sigue los consentimientos en un mismo sitio: quién ha autorizado qué y cuándo. Ningún mensaje llega a un jugador menor antes del consentimiento de sus padres. Cada consentimiento se revoca en cualquier momento, conforme al RGPD.',
        },
        {
          title: 'Modo formación',
          text: 'Elige la categoría de edad del grupo: dos funciones se ocultan a los jugadores. El asistente de IA y las multas quedan visibles solo para el cuerpo técnico.',
        },
        {
          title: 'Comunicación con las familias',
          text: 'Avisos, cambios de horario e información práctica salen por un solo canal a todas las familias. Cada familia lee lo que afecta a su propio hijo.',
        },
        {
          title: 'Tu grupo, centralizado',
          text: 'Jugadores, tutores, asistencias y agenda viven en un mismo sitio, compartidos con todo tu cuerpo técnico. El plan Free cubre un equipo, sus jugadores sin límite y una plaza de staff.',
        },
      ],
    },
    howItWorks: {
      title: 'Monta el grupo en cuatro pasos.',
      steps: [
        {
          title: 'Vincular a las familias con el grupo',
          text: 'Añade a tus jugadores y a sus tutores y activa el modo formación en el equipo. Los consentimientos se recogen desde el alta, y el espacio se adapta a la categoría de edad.',
        },
        {
          title: 'Enviar la convocatoria',
          text: 'Cada tutor recibe un enlace personal y responde en nombre del jugador en un toque. La lista de asistencia se llena sola, recordatorios incluidos.',
        },
        {
          title: 'Comparte el directo el día del partido',
          text: 'Un enlace enviado antes del pitido inicial abre el directo a toda la familia. Las familias en la grada y quienes se quedan en casa siguen el mismo marcador.',
        },
        {
          title: 'Mantén a las familias al día',
          text: 'Próximas fechas, avisos e información práctica salen en un mensaje a todas las familias. Tu cuerpo técnico, los tutores y tú veis la misma agenda, actualizada a la vez.',
        },
      ],
    },
    finalCta: {
      title: 'Crea tu espacio y vincula a las familias.',
      body: 'Cada cuenta nueva empieza con 30 días de Semi-Pro, sin tarjeta de crédito. Después el plan Free hace funcionar un equipo toda la temporada, con sus jugadores sin límite.',
      cta: 'Crear mi espacio de equipo',
    },
  },
};
