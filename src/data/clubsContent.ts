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
      title: 'STRIVN pour les clubs | Coordonnez toutes vos équipes',
      description:
        'Coordonnez les équipes, les staffs et le suivi médical de votre club sur une base commune. Nous ouvrons le plan Club progressivement. Inscrivez votre club sur la liste d’attente.',
    },
    eyebrow: 'STRIVN pour les clubs',
    hero: {
      title: 'Coordonnez vos équipes sur une même base.',
      lede: 'Le plan Club réunit vos équipes sur une base commune : joueurs partagés, staff médical mutualisé, tableaux de bord inter-équipes. Nous ouvrons progressivement, et les clubs inscrits passent en premier. Vos coaches démarrent aujourd’hui, avec 30 jours de Semi-Pro à l’inscription.',
      status: 'Bientôt · ouverture progressive',
    },
    benefits: {
      title: 'Passez du suivi d’une équipe au suivi du club.',
      items: [
        {
          title: 'Chaque équipe sur la même base',
          text: 'Chaque équipe du club travaille sur les mêmes événements et la même logique de présences, dans une seule base.',
        },
        {
          title: 'Un historique qui suit le joueur',
          text: 'Un joueur qui change d’équipe garde ses présences, son dossier médical et sa charge. Rien n’est ressaisi.',
        },
        {
          title: 'Staff médical et coordinateurs mutualisés',
          text: 'Le kiné qui couvre trois équipes voit trois équipes depuis un seul compte. Les coordinateurs suivent chaque groupe dans la même vue.',
        },
        {
          title: 'Tableaux de bord et reporting club',
          text: 'Lisez disponibilités, blessures et charge sur toutes les équipes, dans une vue pensée pour la direction sportive.',
        },
        {
          title: 'Suivi blessure inter-équipes',
          text: 'La blessure reste attachée au joueur quand il surclasse. Le retour au jeu garde le même protocole d’une équipe à l’autre.',
        },
      ],
    },
    form: {
      title: 'Inscrivez votre club sur la liste d’attente.',
      body: 'Décrivez votre club ci-dessous. Nous vous écrivons dès que le déploiement arrive chez vous.',
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
        title: 'Votre club est sur la liste.',
        body: 'Merci. Nous vous écrivons au fil du déploiement du plan Club. En attendant, vos coaches créent leur compte, avec 30 jours de Semi-Pro à l’inscription.',
      },
      error: 'L’envoi du formulaire a échoué. Réessayez, ou écrivez-nous à hello@strivn.net.',
      privacyNote: 'Nous utilisons ces informations pour le seul suivi de votre demande sur le plan Club.',
      privacyLink: { label: 'Politique de confidentialité', href: '/fr/privacy' },
    },
    finalCta: {
      title: 'Faites démarrer vos coaches dès aujourd’hui.',
      body: 'Le plan gratuit fait tourner une équipe toute la saison, sans carte bancaire. Chaque nouveau compte démarre avec 30 jours de Semi-Pro. Nous vous prévenons à l’ouverture du plan Club.',
      cta: 'Démarrer gratuitement côté coach',
    },
  },

  en: {
    meta: {
      title: 'STRIVN for clubs | Coordinate all your teams',
      description:
        'Coordinate the teams, the staff and the medical follow-up of your club on one shared base. We open the Club plan gradually. Put your club on the waitlist.',
    },
    eyebrow: 'STRIVN for clubs',
    hero: {
      title: 'Coordinate every team on one shared base.',
      lede: 'The Club plan brings your teams onto one shared base: shared players, shared medical staff, dashboards across squads. We open gradually, and clubs on the waitlist go first. Your coaches start today, with 30 days of Semi-Pro at sign-up.',
      status: 'Coming soon · gradual rollout',
    },
    benefits: {
      title: 'Move from one team to the whole club.',
      items: [
        {
          title: 'Every team on the same base',
          text: 'Every squad in the club works on the same events and the same attendance logic, in one base.',
        },
        {
          title: 'A history that follows the player',
          text: 'A player moving between squads keeps their attendance, medical record and load. Nothing is re-entered.',
        },
        {
          title: 'Shared medical staff and coordinators',
          text: 'The physio who covers three teams sees three teams from one account. Coordinators follow every squad in the same view.',
        },
        {
          title: 'Club dashboards and reporting',
          text: 'Read availability, injuries and load across all teams, in one view built for the sporting director.',
        },
        {
          title: 'Cross-team injury tracking',
          text: 'The injury stays attached to the player when he plays up a category. Return-to-play keeps the same protocol from one team to the next.',
        },
      ],
    },
    form: {
      title: 'Put your club on the waitlist.',
      body: 'Describe your club below. We write to you as soon as the rollout reaches you.',
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
        title: 'Your club is on the list.',
        body: 'Thanks. We write to you as the Club plan rolls out. In the meantime, your coaches create their account, with 30 days of Semi-Pro at sign-up.',
      },
      error: 'The form could not be sent. Please try again, or write to hello@strivn.net.',
      privacyNote: 'We use these details for the sole purpose of following up on your Club plan request.',
      privacyLink: { label: 'Privacy policy', href: '/en/privacy' },
    },
    finalCta: {
      title: 'Get your coaches started today.',
      body: 'The free plan runs one team for a whole season, without a card. Every new account starts with 30 days of Semi-Pro. We tell you when the Club plan opens.',
      cta: 'Start free as a coach',
    },
  },

  nl: {
    meta: {
      title: 'STRIVN voor clubs | Coördineer al je teams',
      description:
        'Coördineer de teams, de staf en de medische opvolging van je club op één gedeelde basis. We openen het Club-plan geleidelijk. Zet je club op de wachtlijst.',
    },
    eyebrow: 'STRIVN voor clubs',
    hero: {
      title: 'Coördineer al je teams op één basis.',
      lede: 'Het Club-plan brengt je teams samen op één basis: gedeelde spelers, gedeelde medische staf, dashboards over alle teams heen. We openen geleidelijk, en clubs op de wachtlijst komen eerst aan de beurt. Je coaches starten vandaag, met 30 dagen Semi-Pro bij inschrijving.',
      status: 'Binnenkort · geleidelijke uitrol',
    },
    benefits: {
      title: 'Ga van één team naar de hele club.',
      items: [
        {
          title: 'Elk team op dezelfde basis',
          text: 'Elk team van de club werkt met dezelfde events en dezelfde aanwezigheidslogica, in één basis.',
        },
        {
          title: 'Een historiek die de speler volgt',
          text: 'Een speler die van team wisselt behoudt zijn aanwezigheden, medisch dossier en belasting. Niets moet opnieuw worden ingevoerd.',
        },
        {
          title: 'Gedeelde medische staf en coördinatoren',
          text: 'De kinesist die drie teams volgt, ziet drie teams vanuit één account. Coördinatoren volgen elk team in dezelfde weergave.',
        },
        {
          title: 'Clubdashboards en rapportage',
          text: 'Lees beschikbaarheid, blessures en belasting over alle teams, in één overzicht voor de sportieve leiding.',
        },
        {
          title: 'Blessureopvolging over teams heen',
          text: 'De blessure blijft bij de speler wanneer hij in een hogere categorie meespeelt. De terugkeer naar het spel houdt hetzelfde protocol aan.',
        },
      ],
    },
    form: {
      title: 'Zet je club op de wachtlijst.',
      body: 'Beschrijf je club hieronder. We schrijven je zodra de uitrol jou bereikt.',
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
        title: 'Je club staat op de lijst.',
        body: 'Bedankt. We schrijven je naarmate het Club-plan wordt uitgerold. Ondertussen maken je coaches hun account aan, met 30 dagen Semi-Pro bij inschrijving.',
      },
      error: 'Het formulier kon niet worden verzonden. Probeer het opnieuw, of schrijf naar hello@strivn.net.',
      privacyNote: 'We gebruiken deze gegevens enkel voor de opvolging van je aanvraag over het Club-plan.',
      privacyLink: { label: 'Privacybeleid', href: '/nl/privacy' },
    },
    finalCta: {
      title: 'Laat je coaches vandaag starten.',
      body: 'Het gratis plan draagt één team een heel seizoen, zonder kaart. Elk nieuw account start met 30 dagen Semi-Pro. We verwittigen je zodra het Club-plan opent.',
      cta: 'Gratis starten als coach',
    },
  },

  de: {
    meta: {
      title: 'STRIVN für Vereine | Koordinieren Sie alle Teams',
      description:
        'Koordinieren Sie die Teams, den Staff und die medizinische Nachverfolgung Ihres Vereins auf einer gemeinsamen Basis. Wir öffnen den Verein-Tarif schrittweise. Tragen Sie Ihren Verein in die Warteliste ein.',
    },
    eyebrow: 'STRIVN für Vereine',
    hero: {
      title: 'Koordinieren Sie alle Teams auf einer Basis.',
      lede: 'Der Verein-Tarif führt Ihre Teams auf einer Basis zusammen: gemeinsame Spieler, gemeinsamer medizinischer Staff, Dashboards über alle Teams hinweg. Wir öffnen schrittweise, und Vereine auf der Warteliste kommen zuerst dran. Ihre Coaches starten heute, mit 30 Tagen Semi-Pro bei der Anmeldung.',
      status: 'Bald verfügbar · schrittweiser Rollout',
    },
    benefits: {
      title: 'Gehen Sie vom Team zum ganzen Verein.',
      items: [
        {
          title: 'Jedes Team auf derselben Basis',
          text: 'Jedes Team des Vereins arbeitet mit denselben Events und derselben Anwesenheitslogik, in einer Basis.',
        },
        {
          title: 'Eine Historie, die dem Spieler folgt',
          text: 'Ein Spieler, der das Team wechselt, behält Anwesenheiten, medizinische Akte und Belastung. Nichts muss erneut erfasst werden.',
        },
        {
          title: 'Gemeinsamer medizinischer Staff und Koordinatoren',
          text: 'Der Physiotherapeut, der drei Teams betreut, sieht drei Teams aus einem Konto. Koordinatoren verfolgen jedes Team in derselben Ansicht.',
        },
        {
          title: 'Vereins-Dashboards und Reporting',
          text: 'Lesen Sie Verfügbarkeit, Verletzungen und Belastung über alle Teams hinweg, in einer Ansicht für die Vereinsführung.',
        },
        {
          title: 'Teamübergreifende Verletzungsverfolgung',
          text: 'Die Verletzung bleibt beim Spieler, wenn er eine Kategorie höher spielt. Die Rückkehr zum Spiel behält dasselbe Protokoll.',
        },
      ],
    },
    form: {
      title: 'Tragen Sie Ihren Verein in die Warteliste ein.',
      body: 'Beschreiben Sie Ihren Verein im Formular unten. Wir schreiben Ihnen, sobald der Rollout Sie erreicht.',
      fields: {
        name: { label: 'Ihr Name', placeholder: 'Vorname Nachname' },
        email: { label: 'E-Mail', placeholder: 'name@verein.de' },
        club: { label: 'Name des Vereins', placeholder: 'FC Beispiel' },
        role: { label: 'Ihre Rolle im Verein', placeholder: 'Präsident, Koordinator, sportlicher Leiter…' },
        teams: { label: 'Anzahl der Teams', placeholder: 'z. B. 12' },
      },
      submit: 'In die Warteliste eintragen',
      sending: 'Wird gesendet…',
      success: {
        title: 'Ihr Verein steht auf der Liste.',
        body: 'Danke. Wir schreiben Ihnen, sobald der Verein-Tarif ausgerollt wird. In der Zwischenzeit legen Ihre Coaches ihr Konto an, mit 30 Tagen Semi-Pro.',
      },
      error: 'Das Formular konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns an hello@strivn.net.',
      privacyNote: 'Wir verwenden diese Angaben ausschließlich für die Rückmeldung zu Ihrer Anfrage zum Verein-Tarif.',
      privacyLink: { label: 'Datenschutzerklärung', href: '/de/privacy' },
    },
    finalCta: {
      title: 'Lassen Sie Ihre Coaches heute starten.',
      body: 'Der kostenlose Tarif trägt ein Team eine ganze Saison, ohne Karte. Jedes neue Konto startet mit 30 Tagen Semi-Pro. Wir sagen Bescheid, sobald der Verein-Tarif öffnet.',
      cta: 'Kostenlos als Coach starten',
    },
  },

  pt: {
    meta: {
      title: 'STRIVN para clubes | Coordene todas as suas equipas',
      description:
        'Coordene as equipas, os staffs e o acompanhamento médico do seu clube numa base comum. Vamos abrir o plano Clube por fases. Inscreva o seu clube na lista de espera.',
    },
    eyebrow: 'STRIVN para clubes',
    hero: {
      title: 'Coordene todas as equipas numa só base.',
      lede: 'O plano Clube reúne as suas equipas numa base comum: jogadores partilhados, staff médico partilhado, painéis transversais aos escalões. Abrimos por fases, e os clubes na lista de espera entram primeiro. Os seus treinadores começam hoje, com 30 dias de Semi-Pro na inscrição.',
      status: 'Em breve · lançamento progressivo',
    },
    benefits: {
      title: 'Passe do acompanhamento de uma equipa ao clube.',
      items: [
        {
          title: 'Cada equipa na mesma base',
          text: 'Cada equipa do clube trabalha com os mesmos eventos e a mesma lógica de presenças, numa só base.',
        },
        {
          title: 'Um histórico que segue o jogador',
          text: 'Um jogador que muda de equipa mantém as presenças, o processo médico e a carga. Nada é reintroduzido.',
        },
        {
          title: 'Staff médico e coordenadores partilhados',
          text: 'O fisioterapeuta que cobre três equipas vê três equipas a partir de uma conta. Os coordenadores acompanham cada escalão na mesma vista.',
        },
        {
          title: 'Painéis e relatórios de clube',
          text: 'Leia disponibilidades, lesões e carga em todas as equipas, numa vista pensada para a direção desportiva.',
        },
        {
          title: 'Acompanhamento de lesões entre equipas',
          text: 'A lesão fica ligada ao jogador quando ele sobe de escalão. O regresso à competição mantém o mesmo protocolo.',
        },
      ],
    },
    form: {
      title: 'Inscreva o seu clube na lista de espera.',
      body: 'Descreva o seu clube abaixo. Escrevemos-lhe assim que o lançamento chegar até si.',
      fields: {
        name: { label: 'O seu nome', placeholder: 'Nome Apelido' },
        email: { label: 'Email', placeholder: 'nome@clube.pt' },
        club: { label: 'Nome do clube', placeholder: 'FC Exemplo' },
        role: { label: 'A sua função no clube', placeholder: 'Presidente, coordenador, diretor técnico…' },
        teams: { label: 'Número de equipas', placeholder: 'ex.: 12' },
      },
      submit: 'Entrar na lista de espera',
      sending: 'A enviar…',
      success: {
        title: 'O seu clube está na lista.',
        body: 'Obrigado. Escrevemos-lhe à medida que o plano Clube for sendo lançado. Entretanto, os seus treinadores criam a conta, com 30 dias de Semi-Pro.',
      },
      error: 'Não foi possível enviar o formulário. Tente novamente ou escreva-nos para hello@strivn.net.',
      privacyNote: 'Usamos estes dados apenas para dar seguimento ao seu pedido sobre o plano Clube.',
      privacyLink: { label: 'Política de privacidade', href: '/pt/privacy' },
    },
    finalCta: {
      title: 'Ponha os seus treinadores a começar hoje.',
      body: 'O plano gratuito aguenta uma equipa uma época inteira, sem cartão. Cada nova conta começa com 30 dias de Semi-Pro. Avisamos quando o plano Clube abrir.',
      cta: 'Começar gratuitamente como treinador',
    },
  },

  es: {
    meta: {
      title: 'STRIVN para clubes | Coordina todos tus equipos',
      description:
        'Coordina los equipos, los cuerpos técnicos y el seguimiento médico de tu club sobre una base común. Abrimos el plan Club por fases. Apunta a tu club en la lista de espera.',
    },
    eyebrow: 'STRIVN para clubes',
    hero: {
      title: 'Coordina todos los equipos sobre una base.',
      lede: 'El plan Club reúne tus equipos sobre una base común: jugadores compartidos, personal médico compartido, paneles que cruzan las plantillas. Abrimos por fases, y los clubes de la lista de espera entran primero. Tus entrenadores empiezan hoy, con 30 días de Semi-Pro al registrarse.',
      status: 'Muy pronto · despliegue progresivo',
    },
    benefits: {
      title: 'Pasa del seguimiento de un equipo al club.',
      items: [
        {
          title: 'Cada equipo sobre la misma base',
          text: 'Cada equipo del club trabaja con los mismos eventos y la misma lógica de asistencias, en una sola base.',
        },
        {
          title: 'Un historial que sigue al jugador',
          text: 'Un jugador que cambia de equipo conserva sus asistencias, su parte médico y su carga. No hay que volver a introducir nada.',
        },
        {
          title: 'Personal médico y coordinadores compartidos',
          text: 'El fisio que cubre tres equipos ve tres equipos desde una cuenta. Los coordinadores siguen cada plantilla en la misma vista.',
        },
        {
          title: 'Paneles e informes de club',
          text: 'Lee disponibilidad, lesiones y carga en todos los equipos, en una vista pensada para la dirección deportiva.',
        },
        {
          title: 'Seguimiento de lesiones entre equipos',
          text: 'La lesión queda ligada al jugador cuando sube de categoría. La vuelta a la competición mantiene el mismo protocolo.',
        },
      ],
    },
    form: {
      title: 'Apunta a tu club en la lista de espera.',
      body: 'Describe tu club a continuación. Te escribimos en cuanto el despliegue llegue a ti.',
      fields: {
        name: { label: 'Tu nombre', placeholder: 'Nombre Apellido' },
        email: { label: 'Email', placeholder: 'tu@club.es' },
        club: { label: 'Nombre del club', placeholder: 'CF Ejemplo' },
        role: { label: 'Tu cargo en el club', placeholder: 'Presidente, coordinador, director deportivo…' },
        teams: { label: 'Número de equipos', placeholder: 'p. ej. 12' },
      },
      submit: 'Apuntarme a la lista de espera',
      sending: 'Enviando…',
      success: {
        title: 'Tu club ya está en la lista.',
        body: 'Gracias. Te escribimos a medida que se despliegue el plan Club. Mientras tanto, tus entrenadores crean su cuenta, con 30 días de Semi-Pro.',
      },
      error: 'No se ha podido enviar el formulario. Inténtalo de nuevo o escríbenos a hello@strivn.net.',
      privacyNote: 'Usamos estos datos únicamente para dar seguimiento a tu solicitud sobre el plan Club.',
      privacyLink: { label: 'Política de privacidad', href: '/es/privacy' },
    },
    finalCta: {
      title: 'Pon a tus entrenadores en marcha hoy.',
      body: 'El plan gratuito aguanta un equipo una temporada entera, sin tarjeta. Cada cuenta nueva empieza con 30 días de Semi-Pro. Te avisamos cuando abra el plan Club.',
      cta: 'Empezar gratis como entrenador',
    },
  },
};
