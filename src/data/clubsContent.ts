import type { Locale } from './landingContent';

/**
 * Formspree endpoint for the Club waitlist form.
 * TODO: create a Formspree account (hello@strivn.net), add a "Club waitlist"
 * form and replace YOUR_FORM_ID with the real form ID. Until then the form
 * shows its inline error state on submit.
 */
export const CLUBS_FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

type ClubsContent = {
  meta: { title: string; description: string };
  eyebrow: string;
  hero: { title: string; lede: string; status: string };
  benefits: { title: string; items: Array<{ title: string; text: string }> };
  form: {
    title: string;
    body: string;
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      club: { label: string; placeholder: string };
      role: { label: string; placeholder: string };
      teams: { label: string; placeholder: string };
    };
    submit: string;
    sending: string;
    success: { title: string; body: string };
    error: string;
    privacyNote: string;
    privacyLink: { label: string; href: string };
  };
  finalCta: { title: string; body: string; cta: string };
};

export const clubsContent: Record<Locale, ClubsContent> = {
  fr: {
    meta: {
      title: 'STRIVN pour les clubs — coordination multi-équipes',
      description:
        'Coordonnez toutes les équipes, les staffs et les flux médicaux de votre club dans une seule plateforme. Le plan Club arrive progressivement — rejoignez la liste d’attente.',
    },
    eyebrow: 'STRIVN pour les clubs',
    hero: {
      title: 'Un club. Toutes les équipes, sous un même toit.',
      lede: 'Le plan Coach fait tourner une équipe. Le plan Club les coordonne toutes : base joueurs partagée, staff médical mutualisé, tableaux de bord inter-équipes. Le déploiement est progressif — les clubs inscrits sur la liste entrent en premier.',
      status: 'Bientôt · ouverture progressive',
    },
    benefits: {
      title: 'Ce que le plan Club ajoute',
      items: [
        {
          title: 'Plusieurs équipes, une plateforme',
          text: 'Toutes les équipes du club tournent sur la même base : mêmes événements, même logique de présences, sans silo par équipe.',
        },
        {
          title: 'Une base joueurs partagée',
          text: 'Un joueur qui change d’équipe garde son historique : présences, dossier médical, charge. Rien n’est ressaisi.',
        },
        {
          title: 'Staff médical et coordinateurs mutualisés',
          text: 'Le kiné qui couvre trois équipes voit trois équipes. Les coordinateurs suivent chaque groupe sans demander d’exports.',
        },
        {
          title: 'Tableaux de bord et reporting club',
          text: 'Disponibilités, blessures et charge sur toutes les équipes, dans une vue pensée pour ceux qui font tourner le club.',
        },
        {
          title: 'Suivi blessure inter-équipes',
          text: 'Une blessure suit le joueur, pas l’équipe — le retour au jeu reste cohérent même quand un joueur surclasse.',
        },
      ],
    },
    form: {
      title: 'Rejoindre la liste d’attente Club',
      body: 'Parlez-nous de votre club et nous vous contacterons quand le déploiement arrivera chez vous. Sans engagement — cela place simplement votre club dans la file.',
      fields: {
        name: { label: 'Votre nom', placeholder: 'Prénom Nom' },
        email: { label: 'Email', placeholder: 'vous@club.fr' },
        club: { label: 'Nom du club', placeholder: 'FC Exemple' },
        role: { label: 'Votre rôle au club', placeholder: 'Président, coordinateur, responsable technique…' },
        teams: { label: 'Nombre d’équipes', placeholder: 'ex. 12' },
      },
      submit: 'Rejoindre la liste d’attente',
      sending: 'Envoi…',
      success: {
        title: 'Vous êtes sur la liste.',
        body: 'Merci — nous vous contacterons au fil du déploiement du plan Club. En attendant, vos coaches peuvent déjà démarrer gratuitement avec le plan Coach.',
      },
      error: 'L’envoi du formulaire a échoué. Réessayez, ou écrivez-nous à hello@strivn.net.',
      privacyNote: 'Ces informations servent uniquement à vous recontacter au sujet du plan Club.',
      privacyLink: { label: 'Politique de confidentialité', href: '/fr/privacy' },
    },
    finalCta: {
      title: 'Vos coaches n’ont pas à attendre.',
      body: 'Le plan Coach est gratuit pour une équipe, dès aujourd’hui. Un club adopte d’autant plus vite que ses coaches utilisent déjà l’outil.',
      cta: 'Démarrer gratuitement côté coach',
    },
  },

  en: {
    meta: {
      title: 'STRIVN for clubs — multi-team coordination',
      description:
        'Coordinate every team, staff and medical workflow of your club in one platform. The Club plan is rolling out gradually — join the waitlist.',
    },
    eyebrow: 'STRIVN for clubs',
    hero: {
      title: 'One club. Every team, under one roof.',
      lede: 'The Coach plan runs one team. The Club plan coordinates all of them: a shared player base, shared medical staff, dashboards across squads. The rollout is gradual — clubs on the waitlist get in first.',
      status: 'Coming soon · gradual rollout',
    },
    benefits: {
      title: 'What the Club plan adds',
      items: [
        {
          title: 'Multiple teams, one platform',
          text: 'Every squad in the club runs on the same base: same events, same attendance logic, no per-team silos.',
        },
        {
          title: 'A shared player base',
          text: 'A player moving between squads keeps their history: attendance, medical record, load. Nothing is re-entered.',
        },
        {
          title: 'Shared medical staff and coordinators',
          text: 'The physio who covers three teams sees three teams. Coordinators follow every squad without asking for exports.',
        },
        {
          title: 'Club dashboards and reporting',
          text: 'Availability, injuries and load across all teams, in one view built for the people who run the club.',
        },
        {
          title: 'Cross-team injury tracking',
          text: 'An injury follows the player, not the team — return-to-play stays coherent even when a player plays up a category.',
        },
      ],
    },
    form: {
      title: 'Join the Club waitlist',
      body: 'Tell us about your club and we’ll get in touch as the rollout reaches you. No commitment — it simply puts your club in the queue.',
      fields: {
        name: { label: 'Your name', placeholder: 'First Last' },
        email: { label: 'Email', placeholder: 'you@club.com' },
        club: { label: 'Club name', placeholder: 'Example FC' },
        role: { label: 'Your role at the club', placeholder: 'President, coordinator, head of coaching…' },
        teams: { label: 'Number of teams', placeholder: 'e.g. 12' },
      },
      submit: 'Join the waitlist',
      sending: 'Sending…',
      success: {
        title: 'You’re on the list.',
        body: 'Thanks — we’ll get in touch as the Club plan rolls out. In the meantime, your coaches can already start for free with the Coach plan.',
      },
      error: 'The form could not be sent. Please try again, or write to hello@strivn.net.',
      privacyNote: 'We only use these details to contact you about the Club plan.',
      privacyLink: { label: 'Privacy policy', href: '/privacy' },
    },
    finalCta: {
      title: 'Your coaches don’t have to wait.',
      body: 'The Coach plan is free for one team, today. Clubs adopt faster when their coaches already use the tool.',
      cta: 'Start free as a coach',
    },
  },

  nl: {
    meta: {
      title: 'STRIVN voor clubs — coördinatie over meerdere teams',
      description:
        'Coördineer elk team, elke staf en elke medische workflow van je club in één platform. Het Club-plan wordt geleidelijk uitgerold — schrijf je in op de wachtlijst.',
    },
    eyebrow: 'STRIVN voor clubs',
    hero: {
      title: 'Eén club. Elk team, onder één dak.',
      lede: 'Het Coach-plan laat één team draaien. Het Club-plan coördineert ze allemaal: een gedeelde spelersbasis, gedeelde medische staf, dashboards over alle teams heen. De uitrol verloopt geleidelijk — clubs op de wachtlijst zijn als eerste aan de beurt.',
      status: 'Binnenkort · geleidelijke uitrol',
    },
    benefits: {
      title: 'Wat het Club-plan toevoegt',
      items: [
        {
          title: 'Meerdere teams, één platform',
          text: 'Elk team van de club draait op dezelfde basis: dezelfde events, dezelfde aanwezigheidslogica, geen aparte silo’s per team.',
        },
        {
          title: 'Een gedeelde spelersbasis',
          text: 'Een speler die van team wisselt behoudt zijn historiek: aanwezigheden, medisch dossier, belasting. Niets moet opnieuw worden ingevoerd.',
        },
        {
          title: 'Gedeelde medische staf en coördinatoren',
          text: 'De kinesist die drie teams volgt, ziet drie teams. Coördinatoren volgen elk team op zonder om exports te moeten vragen.',
        },
        {
          title: 'Clubdashboards en rapportage',
          text: 'Beschikbaarheid, blessures en belasting over alle teams, in één overzicht gemaakt voor wie de club laat draaien.',
        },
        {
          title: 'Blessureopvolging over teams heen',
          text: 'Een blessure volgt de speler, niet het team — de terugkeer naar het spel blijft coherent, ook wanneer een speler in een hogere categorie meespeelt.',
        },
      ],
    },
    form: {
      title: 'Inschrijven op de Club-wachtlijst',
      body: 'Vertel ons over je club en we nemen contact op zodra de uitrol jou bereikt. Zonder verplichting — het plaatst je club gewoon in de rij.',
      fields: {
        name: { label: 'Je naam', placeholder: 'Voornaam Achternaam' },
        email: { label: 'E-mail', placeholder: 'jij@club.be' },
        club: { label: 'Naam van de club', placeholder: 'FC Voorbeeld' },
        role: { label: 'Je rol binnen de club', placeholder: 'Voorzitter, coördinator, technisch verantwoordelijke…' },
        teams: { label: 'Aantal teams', placeholder: 'bv. 12' },
      },
      submit: 'Inschrijven op de wachtlijst',
      sending: 'Verzenden…',
      success: {
        title: 'Je staat op de lijst.',
        body: 'Bedankt — we nemen contact op naarmate het Club-plan wordt uitgerold. Ondertussen kunnen je coaches al gratis starten met het Coach-plan.',
      },
      error: 'Het formulier kon niet worden verzonden. Probeer het opnieuw, of schrijf naar hello@strivn.net.',
      privacyNote: 'We gebruiken deze gegevens enkel om contact met je op te nemen over het Club-plan.',
      privacyLink: { label: 'Privacybeleid', href: '/privacy' },
    },
    finalCta: {
      title: 'Je coaches hoeven niet te wachten.',
      body: 'Het Coach-plan is gratis voor één team, vandaag nog. Clubs stappen sneller over wanneer hun coaches de tool al gebruiken.',
      cta: 'Gratis starten als coach',
    },
  },
};
