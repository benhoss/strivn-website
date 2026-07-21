import type { Locale } from './landingContent';
import type { Showcase } from './featuresContent';

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
      title: 'STRIVN pour les équipes de jeunes : parents dans la boucle, mode jeunes',
      description:
        'Les parents répondent à la convocation à la place du joueur, suivent le match en direct sans compte et gèrent les consentements : STRIVN aide les coaches d’équipes de jeunes à garder les parents dans la boucle, sans groupe WhatsApp qui déborde.',
    },
    eyebrow: 'STRIVN pour les équipes de jeunes',
    hero: {
      title: 'Les parents dans la boucle. Les jeunes protégés. Vous, sur le terrain.',
      lede: 'Les parents répondent à la convocation à la place de leur enfant et suivent le match en direct depuis la tribune, sans créer de compte. Les consentements sont gérés proprement, et le mode jeunes masque ce qui n’est pas de leur âge.',
      cta: 'Commencer gratuitement',
    },
    showcase: [
      {
        title: 'La convocation ? Les parents répondent.',
        blurb: 'Chaque tuteur est relié à son enfant et reçoit la convocation avec un lien personnel. Il répond en un tap — Présent, Incertain ou Absent — et peut laisser un mot pour le staff. Le premier qui répond règle la présence.',
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
        title: 'Le match en direct, depuis la tribune',
        blurb: 'Partagez un lien avant le coup d’envoi : parents en tribune, grands-parents à la maison — tout le monde suit le score et les événements du match en direct, sans compte et sans rien installer.',
        slides: [
          {
            img: '/screenshots/live-viewer-phone-fr.png',
            kind: 'mobile',
            alt: 'Viewer de match public STRIVN sur téléphone : score et événements du match en direct, sans compte',
            caption: 'Le viewer public : score et événements en direct, sans compte.',
          },
        ],
      },
      {
        title: 'Un mode pensé pour les jeunes',
        blurb: 'Activez le mode jeunes et l’espace s’adapte à l’âge du groupe : le coach IA compagnon et les amendes sont automatiquement masqués pour les joueurs, et les consentements des tuteurs sont recueillis et suivis au même endroit.',
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
    featuresLead: 'Et tout le reste du quotidien d’un coach de jeunes.',
    features: {
      title: 'Ce que STRIVN apporte aux équipes de jeunes',
      items: [
        {
          title: 'RSVP parental',
          text: 'Chaque tuteur reçoit la convocation avec son lien personnel et indique Présent, Incertain ou Absent à la place du joueur. Vous voyez la présence se remplir en temps réel, sans courir après les réponses.',
        },
        {
          title: 'Viewer de match public',
          text: 'Un lien à partager, aucun compte à créer : la famille suit le score et les événements du match en direct, de la tribune ou de la maison.',
        },
        {
          title: 'Consentements des tuteurs',
          text: 'Recueillez et suivez les consentements parentaux au même endroit : qui a consenti à quoi, et quand. Retirables à tout moment, conformément au RGPD.',
        },
        {
          title: 'Mode jeunes',
          text: 'Le coach IA compagnon et les amendes sont automatiquement masqués pour les joueurs. Les jeunes ne voient que ce qui est de leur âge.',
        },
        {
          title: 'Communication aux parents',
          text: 'Annonces, changements d’horaire, infos pratiques : un seul canal vers tous les parents, au lieu d’un groupe WhatsApp qui déborde. Chaque famille reçoit ce qui concerne son enfant.',
        },
        {
          title: 'Votre groupe, centralisé',
          text: 'Joueurs, tuteurs, présences et agenda au même endroit, partagés avec tout le staff. Vous gérez votre groupe depuis une seule plateforme.',
        },
      ],
    },
    howItWorks: {
      title: 'La semaine d’une équipe de jeunes avec STRIVN',
      steps: [
        {
          title: 'Reliez les parents au groupe',
          text: 'Ajoutez vos joueurs et leurs tuteurs, puis activez le mode jeunes. L’espace s’adapte à l’âge du groupe et les consentements se gèrent dès l’inscription.',
        },
        {
          title: 'Envoyez la convocation',
          text: 'Chaque tuteur reçoit son lien personnel et répond à la place du joueur en un tap. La feuille de présence se remplit toute seule, relances comprises.',
        },
        {
          title: 'Le jour du match, partagez le direct',
          text: 'Un lien envoyé avant le coup d’envoi : les parents en tribune comme ceux restés à la maison suivent le score et les événements en direct, sans compte.',
        },
        {
          title: 'Après, tenez tout le monde au courant',
          text: 'Prochaines dates, annonces, infos pratiques : un seul message dans STRIVN et tous les parents sont prévenus.',
        },
      ],
    },
    finalCta: {
      title: 'Commencez gratuitement dès aujourd’hui.',
      body: 'STRIVN est gratuit pour une équipe, sans carte bancaire. Créez votre équipe de jeunes, invitez votre staff et reliez les parents en quelques minutes.',
      cta: 'Créer mon espace équipe',
    },
  },

  en: {
    meta: {
      title: 'STRIVN for youth teams: parents in the loop, youth mode',
      description:
        'Parents answer call-ups on the player’s behalf, follow the match live without an account and manage consents: STRIVN helps youth-team coaches keep parents in the loop, without an overflowing WhatsApp group.',
    },
    eyebrow: 'STRIVN for youth teams',
    hero: {
      title: 'Parents in the loop. Young players protected. You, on the pitch.',
      lede: 'Parents answer the call-up on their child’s behalf and follow the match live from the stands, no account needed. Consents are handled properly, and youth mode hides what isn’t age-appropriate.',
      cta: 'Start for free',
    },
    showcase: [
      {
        title: 'The call-up? Parents answer it.',
        blurb: 'Every guardian is linked to their child and receives the call-up with a personal link. One tap — Present, Unsure or Absent — plus a note for the staff if needed. The first to answer settles the attendance.',
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
        title: 'The match, live from the stands',
        blurb: 'Share a link before kick-off: parents in the stands, grandparents at home — everyone follows the score and match events live, with no account and nothing to install.',
        slides: [
          {
            img: '/screenshots/live-viewer-phone.png',
            kind: 'mobile',
            alt: 'STRIVN public match viewer on a phone: live score and match events, no account',
            caption: 'The public viewer: live score and events, no account needed.',
          },
        ],
      },
      {
        title: 'A mode built for young players',
        blurb: 'Turn on youth mode and the space adapts to the group’s age: the AI coach companion and fines are automatically hidden from players, and guardian consents are collected and tracked in one place.',
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
    featuresLead: 'And everything else in a youth coach’s week.',
    features: {
      title: 'What STRIVN brings to youth teams',
      items: [
        {
          title: 'Parental RSVP',
          text: 'Every guardian gets the call-up with a personal link and marks Present, Unsure or Absent on the player’s behalf. You watch attendance fill in real time instead of chasing replies.',
        },
        {
          title: 'Public match viewer',
          text: 'One link to share, no account to create: the family follows the score and match events live, from the stands or from home.',
        },
        {
          title: 'Guardian consents',
          text: 'Collect and track parental consents in one place: who agreed to what, and when. Withdrawable at any time, in line with GDPR.',
        },
        {
          title: 'Youth mode',
          text: 'The AI coach companion and fines are automatically hidden from players. Young players only see what fits their age.',
        },
        {
          title: 'Parent communication',
          text: 'Announcements, schedule changes, practical info: one channel to every parent instead of an overflowing WhatsApp group. Each family gets what concerns their child.',
        },
        {
          title: 'Your group, centralised',
          text: 'Players, guardians, attendance and agenda in one place, shared with your whole staff. You manage your group from a single platform.',
        },
      ],
    },
    howItWorks: {
      title: 'A youth team’s week with STRIVN',
      steps: [
        {
          title: 'Link parents to the group',
          text: 'Add your players and their guardians, then switch on youth mode. The space adapts to the group’s age and consents are handled from sign-up.',
        },
        {
          title: 'Send the call-up',
          text: 'Every guardian gets a personal link and answers on the player’s behalf in one tap. The attendance sheet fills itself, reminders included.',
        },
        {
          title: 'On match day, share the live link',
          text: 'One link sent before kick-off: parents in the stands and family at home follow the score and events live, without an account.',
        },
        {
          title: 'Afterwards, keep everyone posted',
          text: 'Next dates, announcements, practical info: one message in STRIVN and every parent is informed.',
        },
      ],
    },
    finalCta: {
      title: 'Start free today.',
      body: 'STRIVN is free for one team, no credit card required. Create your youth team, invite your staff and link the parents in minutes.',
      cta: 'Create my team space',
    },
  },

  nl: {
    meta: {
      title: 'STRIVN voor jeugdploegen: ouders mee aan boord, jeugdmodus',
      description:
        'Ouders antwoorden op de oproeping in naam van de speler, volgen de wedstrijd live zonder account en beheren toestemmingen: STRIVN helpt jeugdcoaches om ouders te betrekken, zonder overlopende WhatsApp-groep.',
    },
    eyebrow: 'STRIVN voor jeugdploegen',
    hero: {
      title: 'Ouders mee aan boord. Jonge spelers beschermd. Jij op het veld.',
      lede: 'Ouders antwoorden op de oproeping in naam van hun kind en volgen de wedstrijd live vanuit de tribune, zonder account. Toestemmingen worden netjes beheerd en de jeugdmodus verbergt wat niet bij hun leeftijd past.',
      cta: 'Gratis beginnen',
    },
    showcase: [
      {
        title: 'De oproeping? De ouders antwoorden.',
        blurb: 'Elke voogd is gekoppeld aan zijn kind en ontvangt de oproeping met een persoonlijke link. Eén tik — Aanwezig, Onzeker of Afwezig — en eventueel een woordje voor de staf. Wie eerst antwoordt, regelt de aanwezigheid.',
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
        title: 'De wedstrijd live, vanuit de tribune',
        blurb: 'Deel een link voor de aftrap: ouders in de tribune, grootouders thuis — iedereen volgt de score en de wedstrijdgebeurtenissen live, zonder account en zonder iets te installeren.',
        slides: [
          {
            img: '/screenshots/live-viewer-phone.png',
            kind: 'mobile',
            alt: 'Publieke STRIVN-wedstrijdviewer op een telefoon: live score en wedstrijdgebeurtenissen, zonder account',
            caption: 'De publieke viewer: live score en gebeurtenissen, zonder account.',
          },
        ],
      },
      {
        title: 'Een modus op maat van jongeren',
        blurb: 'Zet de jeugdmodus aan en de ruimte past zich aan de leeftijd van de groep aan: de AI-coachcompagnon en de boetes worden automatisch verborgen voor de spelers, en de toestemmingen van voogden worden op één plek verzameld en opgevolgd.',
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
    featuresLead: 'En al de rest van de week van een jeugdcoach.',
    features: {
      title: 'Wat STRIVN jeugdploegen biedt',
      items: [
        {
          title: 'Ouder-RSVP',
          text: 'Elke voogd krijgt de oproeping met een persoonlijke link en duidt Aanwezig, Onzeker of Afwezig aan in naam van de speler. Je ziet de aanwezigheid in realtime binnenlopen, zonder achter antwoorden aan te zitten.',
        },
        {
          title: 'Publieke wedstrijdviewer',
          text: 'Eén link om te delen, geen account nodig: de familie volgt de score en de wedstrijdgebeurtenissen live, vanuit de tribune of van thuis.',
        },
        {
          title: 'Toestemmingen van voogden',
          text: 'Verzamel en volg ouderlijke toestemmingen op één plek: wie waarmee instemde, en wanneer. Op elk moment intrekbaar, conform de GDPR.',
        },
        {
          title: 'Jeugdmodus',
          text: 'De AI-coachcompagnon en de boetes worden automatisch verborgen voor de spelers. Jongeren zien alleen wat bij hun leeftijd past.',
        },
        {
          title: 'Communicatie met ouders',
          text: 'Aankondigingen, uurwijzigingen, praktische info: één kanaal naar alle ouders, in plaats van een overlopende WhatsApp-groep. Elk gezin krijgt wat zijn kind aanbelangt.',
        },
        {
          title: 'Je groep, gecentraliseerd',
          text: 'Spelers, voogden, aanwezigheid en agenda op één plek, gedeeld met je hele staf. Je beheert je groep vanaf één platform.',
        },
      ],
    },
    howItWorks: {
      title: 'De week van een jeugdploeg met STRIVN',
      steps: [
        {
          title: 'Koppel de ouders aan de groep',
          text: 'Voeg je spelers en hun voogden toe en zet de jeugdmodus aan. De ruimte past zich aan de leeftijd van de groep aan en de toestemmingen worden vanaf de inschrijving geregeld.',
        },
        {
          title: 'Verstuur de oproeping',
          text: 'Elke voogd krijgt zijn persoonlijke link en antwoordt in naam van de speler met één tik. De aanwezigheidslijst vult zichzelf, herinneringen inbegrepen.',
        },
        {
          title: 'Op wedstrijddag: deel de livelink',
          text: 'Eén link voor de aftrap: ouders in de tribune en familie thuis volgen de score en de gebeurtenissen live, zonder account.',
        },
        {
          title: 'Nadien: hou iedereen op de hoogte',
          text: 'Volgende data, aankondigingen, praktische info: één bericht in STRIVN en alle ouders zijn op de hoogte.',
        },
      ],
    },
    finalCta: {
      title: 'Begin vandaag gratis.',
      body: 'STRIVN is gratis voor één team, zonder bankkaart. Maak je jeugdploeg aan, nodig je staf uit en koppel de ouders in enkele minuten.',
      cta: 'Mijn teamruimte aanmaken',
    },
  },

  de: {
    meta: {
      title: 'STRIVN für Jugendteams: Eltern eingebunden, Jugendmodus',
      description:
        'Eltern antworten auf Aufgebote im Namen des Spielers, verfolgen das Spiel live ohne Konto und verwalten Einwilligungen: STRIVN hilft Jugendtrainern, die Eltern einzubinden — ohne überlaufende WhatsApp-Gruppe.',
    },
    eyebrow: 'STRIVN für Jugendteams',
    hero: {
      title: 'Eltern eingebunden. Junge Spieler geschützt. Sie auf dem Platz.',
      lede: 'Eltern antworten auf das Aufgebot im Namen ihres Kindes und verfolgen das Spiel live von der Tribüne, ganz ohne Konto. Einwilligungen werden sauber verwaltet, und der Jugendmodus blendet aus, was nicht altersgerecht ist.',
      cta: 'Kostenlos starten',
    },
    showcase: [
      {
        title: 'Das Aufgebot? Die Eltern antworten.',
        blurb: 'Jeder Erziehungsberechtigte ist mit seinem Kind verknüpft und erhält das Aufgebot mit einem persönlichen Link. Ein Tipp — Dabei, Unsicher oder Abwesend — plus eine Notiz an den Staff, wenn nötig. Wer zuerst antwortet, regelt die Anwesenheit.',
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
        title: 'Das Spiel live, von der Tribüne',
        blurb: 'Teilen Sie vor dem Anpfiff einen Link: Eltern auf der Tribüne, Großeltern zu Hause — alle verfolgen den Spielstand und die Ereignisse live, ohne Konto und ohne etwas zu installieren.',
        slides: [
          {
            img: '/screenshots/live-viewer-phone.png',
            kind: 'mobile',
            alt: 'Öffentlicher STRIVN-Spielviewer auf dem Handy: Live-Spielstand und Spielereignisse, ohne Konto',
            caption: 'Der öffentliche Viewer: Spielstand und Ereignisse live, ohne Konto.',
          },
        ],
      },
      {
        title: 'Ein Modus für junge Spieler',
        blurb: 'Aktivieren Sie den Jugendmodus und der Bereich passt sich dem Alter der Gruppe an: der KI-Coach-Begleiter und die Strafkasse werden für die Spieler automatisch ausgeblendet, und die Einwilligungen der Erziehungsberechtigten werden an einem Ort erfasst und verfolgt.',
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
    featuresLead: 'Und alles andere in der Woche eines Jugendtrainers.',
    features: {
      title: 'Was STRIVN Jugendteams bietet',
      items: [
        {
          title: 'Eltern-RSVP',
          text: 'Jeder Erziehungsberechtigte erhält das Aufgebot mit einem persönlichen Link und markiert Dabei, Unsicher oder Abwesend im Namen des Spielers. Sie sehen die Anwesenheit in Echtzeit eintreffen, ohne Antworten hinterherzulaufen.',
        },
        {
          title: 'Öffentlicher Spielviewer',
          text: 'Ein Link zum Teilen, kein Konto nötig: die Familie verfolgt Spielstand und Spielereignisse live, von der Tribüne oder von zu Hause.',
        },
        {
          title: 'Einwilligungen der Eltern',
          text: 'Erfassen und verfolgen Sie elterliche Einwilligungen an einem Ort: wer wann wozu eingewilligt hat. Jederzeit widerrufbar, DSGVO-konform.',
        },
        {
          title: 'Jugendmodus',
          text: 'Der KI-Coach-Begleiter und die Strafkasse werden für die Spieler automatisch ausgeblendet. Junge Spieler sehen nur, was zu ihrem Alter passt.',
        },
        {
          title: 'Kommunikation mit den Eltern',
          text: 'Ankündigungen, Terminänderungen, praktische Infos: ein Kanal zu allen Eltern statt einer überlaufenden WhatsApp-Gruppe. Jede Familie bekommt, was ihr Kind betrifft.',
        },
        {
          title: 'Ihre Gruppe, zentralisiert',
          text: 'Spieler, Erziehungsberechtigte, Anwesenheit und Kalender an einem Ort, geteilt mit dem gesamten Staff. Sie verwalten Ihre Gruppe auf einer einzigen Plattform.',
        },
      ],
    },
    howItWorks: {
      title: 'Die Woche eines Jugendteams mit STRIVN',
      steps: [
        {
          title: 'Eltern mit der Gruppe verknüpfen',
          text: 'Fügen Sie Ihre Spieler und deren Erziehungsberechtigte hinzu und aktivieren Sie den Jugendmodus. Der Bereich passt sich dem Alter der Gruppe an, und die Einwilligungen werden ab der Anmeldung geregelt.',
        },
        {
          title: 'Das Aufgebot senden',
          text: 'Jeder Erziehungsberechtigte erhält seinen persönlichen Link und antwortet mit einem Tipp im Namen des Spielers. Die Anwesenheitsliste füllt sich von selbst, Erinnerungen inklusive.',
        },
        {
          title: 'Am Spieltag: den Live-Link teilen',
          text: 'Ein Link vor dem Anpfiff: Eltern auf der Tribüne und Familie zu Hause verfolgen Spielstand und Ereignisse live, ohne Konto.',
        },
        {
          title: 'Danach: alle auf dem Laufenden halten',
          text: 'Nächste Termine, Ankündigungen, praktische Infos: eine Nachricht in STRIVN und alle Eltern sind informiert.',
        },
      ],
    },
    finalCta: {
      title: 'Starte heute kostenlos.',
      body: 'STRIVN ist kostenlos für ein Team, ohne Kreditkarte. Erstellen Sie Ihr Jugendteam, laden Sie Ihren Staff ein und verknüpfen Sie die Eltern in wenigen Minuten.',
      cta: 'Meinen Teambereich erstellen',
    },
  },
};
