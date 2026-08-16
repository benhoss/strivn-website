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
        'Coordonnez toutes les équipes, les staffs et les flux médicaux de votre club dans une seule plateforme. Le plan Club arrive progressivement. Inscrivez-vous sur la liste d’attente.',
    },
    eyebrow: 'STRIVN pour les clubs',
    hero: {
      title: 'Un club. Toutes les équipes, sous un même toit.',
      lede: 'Le plan Coach fait tourner une équipe. Le plan Club les coordonne toutes : base joueurs partagée, staff médical mutualisé, tableaux de bord inter-équipes. Le déploiement est progressif, et les clubs inscrits sur la liste entrent en premier.',
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
          text: 'Une blessure suit le joueur, pas l’équipe. Le retour au jeu reste cohérent même quand un joueur surclasse.',
        },
      ],
    },
    form: {
      title: 'Rejoindre la liste d’attente Club',
      body: 'Parlez-nous de votre club et nous vous contacterons quand le déploiement arrivera chez vous. Sans engagement : cela place simplement votre club dans la file.',
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
        body: 'Merci. Nous vous contacterons au fil du déploiement du plan Club. En attendant, vos coaches peuvent déjà démarrer gratuitement avec le plan Coach.',
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
        'Coordinate every team, staff and medical workflow of your club in one platform. The Club plan is rolling out gradually. Join the waitlist.',
    },
    eyebrow: 'STRIVN for clubs',
    hero: {
      title: 'One club. Every team, under one roof.',
      lede: 'The Coach plan runs one team. The Club plan coordinates all of them: a shared player base, shared medical staff, dashboards across squads. The rollout is gradual, and clubs on the waitlist go first.',
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
          text: 'An injury follows the player, not the team. Return-to-play stays coherent even when a player plays up a category.',
        },
      ],
    },
    form: {
      title: 'Join the Club waitlist',
      body: 'Tell us about your club and we’ll get in touch as the rollout reaches you. No commitment: it simply puts your club in the queue.',
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
        body: 'Thanks. We’ll get in touch as the Club plan rolls out. In the meantime, your coaches can already start for free with the Coach plan.',
      },
      error: 'The form could not be sent. Please try again, or write to hello@strivn.net.',
      privacyNote: 'We only use these details to contact you about the Club plan.',
      privacyLink: { label: 'Privacy policy', href: '/en/privacy' },
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
        'Coördineer elk team, elke staf en elke medische workflow van je club in één platform. Het Club-plan wordt geleidelijk uitgerold. Schrijf je in op de wachtlijst.',
    },
    eyebrow: 'STRIVN voor clubs',
    hero: {
      title: 'Eén club. Elk team, onder één dak.',
      lede: 'Het Coach-plan laat één team draaien. Het Club-plan coördineert ze allemaal: een gedeelde spelersbasis, gedeelde medische staf, dashboards over alle teams heen. De uitrol verloopt geleidelijk, en clubs op de wachtlijst zijn als eerste aan de beurt.',
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
          text: 'Een blessure volgt de speler, niet het team. De terugkeer naar het spel blijft coherent, ook wanneer een speler in een hogere categorie meespeelt.',
        },
      ],
    },
    form: {
      title: 'Inschrijven op de Club-wachtlijst',
      body: 'Vertel ons over je club en we nemen contact op zodra de uitrol jou bereikt. Zonder verplichting: het plaatst je club gewoon in de rij.',
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
        body: 'Bedankt. We nemen contact op naarmate het Club-plan wordt uitgerold. Ondertussen kunnen je coaches al gratis starten met het Coach-plan.',
      },
      error: 'Het formulier kon niet worden verzonden. Probeer het opnieuw, of schrijf naar hello@strivn.net.',
      privacyNote: 'We gebruiken deze gegevens enkel om contact met je op te nemen over het Club-plan.',
      privacyLink: { label: 'Privacybeleid', href: '/nl/privacy' },
    },
    finalCta: {
      title: 'Je coaches hoeven niet te wachten.',
      body: 'Het Coach-plan is gratis voor één team, vandaag nog. Clubs stappen sneller over wanneer hun coaches de tool al gebruiken.',
      cta: 'Gratis starten als coach',
    },
  },

  de: {
    meta: {
      title: 'STRIVN für Vereine — Koordination über mehrere Teams',
      description:
        'Koordinieren Sie jedes Team, jeden Staff und jeden medizinischen Ablauf Ihres Vereins in einer Plattform. Der Verein-Tarif wird schrittweise ausgerollt. Tragen Sie sich in die Warteliste ein.',
    },
    eyebrow: 'STRIVN für Vereine',
    hero: {
      title: 'Ein Verein. Jedes Team, unter einem Dach.',
      lede: 'Der Coach-Tarif führt ein Team. Der Verein-Tarif koordiniert sie alle: eine gemeinsame Spielerbasis, gemeinsamer medizinischer Staff, Dashboards über alle Teams hinweg. Der Rollout erfolgt schrittweise, und Vereine auf der Warteliste kommen zuerst dran.',
      status: 'Bald verfügbar · schrittweiser Rollout',
    },
    benefits: {
      title: 'Was der Verein-Tarif hinzufügt',
      items: [
        {
          title: 'Mehrere Teams, eine Plattform',
          text: 'Jedes Team des Vereins läuft auf derselben Basis: gleiche Events, gleiche Anwesenheitslogik, keine Silos pro Team.',
        },
        {
          title: 'Eine gemeinsame Spielerbasis',
          text: 'Ein Spieler, der zwischen Teams wechselt, behält seine Historie: Anwesenheiten, medizinische Akte, Belastung. Nichts muss erneut erfasst werden.',
        },
        {
          title: 'Gemeinsamer medizinischer Staff und Koordinatoren',
          text: 'Der Physiotherapeut, der drei Teams betreut, sieht drei Teams. Koordinatoren verfolgen jedes Team, ohne Exporte anfordern zu müssen.',
        },
        {
          title: 'Vereins-Dashboards und Reporting',
          text: 'Verfügbarkeit, Verletzungen und Belastung über alle Teams hinweg, in einer Ansicht, die für die Menschen gebaut ist, die den Verein führen.',
        },
        {
          title: 'Teamübergreifende Verletzungsverfolgung',
          text: 'Eine Verletzung folgt dem Spieler, nicht dem Team. Die Rückkehr zum Spiel bleibt schlüssig, selbst wenn ein Spieler eine Kategorie höher spielt.',
        },
      ],
    },
    form: {
      title: 'In die Verein-Warteliste eintragen',
      body: 'Erzählen Sie uns von Ihrem Verein und wir melden uns, sobald der Rollout Sie erreicht. Ohne Verpflichtung: Es reiht Ihren Verein einfach in die Warteschlange ein.',
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
        title: 'Sie stehen auf der Liste.',
        body: 'Danke. Wir melden uns, sobald der Verein-Tarif ausgerollt wird. In der Zwischenzeit können Ihre Coaches bereits kostenlos mit dem Coach-Tarif starten.',
      },
      error: 'Das Formular konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns an hello@strivn.net.',
      privacyNote: 'Wir verwenden diese Angaben ausschließlich, um Sie zum Verein-Tarif zu kontaktieren.',
      privacyLink: { label: 'Datenschutzerklärung', href: '/de/privacy' },
    },
    finalCta: {
      title: 'Ihre Coaches müssen nicht warten.',
      body: 'Der Coach-Tarif ist kostenlos für ein Team, ab heute. Vereine steigen schneller um, wenn ihre Coaches das Tool bereits nutzen.',
      cta: 'Kostenlos als Coach starten',
    },
  },

  pt: {
    meta: {
      title: 'STRIVN para clubes — coordenação multiequipa',
      description:
        'Coordene todas as equipas, staffs e fluxos médicos do seu clube numa só plataforma. O plano Clube está a chegar por fases. Inscreva-se na lista de espera.',
    },
    eyebrow: 'STRIVN para clubes',
    hero: {
      title: 'Um clube. Todas as equipas, debaixo do mesmo teto.',
      lede: 'O plano Coach faz funcionar uma equipa. O plano Clube coordena-as a todas: base de jogadores partilhada, staff médico partilhado, painéis transversais a todos os escalões. O lançamento é progressivo, e os clubes na lista de espera entram primeiro.',
      status: 'Em breve · lançamento progressivo',
    },
    benefits: {
      title: 'O que o plano Clube acrescenta',
      items: [
        {
          title: 'Várias equipas, uma plataforma',
          text: 'Todas as equipas do clube funcionam na mesma base: os mesmos eventos, a mesma lógica de presenças, sem silos por equipa.',
        },
        {
          title: 'Uma base de jogadores partilhada',
          text: 'Um jogador que muda de equipa mantém o seu histórico: presenças, processo médico, carga. Nada é reintroduzido.',
        },
        {
          title: 'Staff médico e coordenadores partilhados',
          text: 'O fisioterapeuta que cobre três equipas vê três equipas. Os coordenadores acompanham cada escalão sem pedir exportações.',
        },
        {
          title: 'Painéis e relatórios de clube',
          text: 'Disponibilidades, lesões e carga em todas as equipas, numa vista pensada para quem faz o clube funcionar.',
        },
        {
          title: 'Acompanhamento de lesões entre equipas',
          text: 'A lesão segue o jogador, não a equipa. O regresso à competição mantém-se coerente mesmo quando um jogador sobe de escalão.',
        },
      ],
    },
    form: {
      title: 'Entrar na lista de espera Clube',
      body: 'Fale-nos do seu clube e entraremos em contacto quando o lançamento chegar até si. Sem compromisso: apenas coloca o seu clube na fila.',
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
        title: 'Está na lista.',
        body: 'Obrigado. Entraremos em contacto à medida que o plano Clube for sendo lançado. Entretanto, os seus treinadores já podem começar gratuitamente com o plano Coach.',
      },
      error: 'Não foi possível enviar o formulário. Tente novamente ou escreva-nos para hello@strivn.net.',
      privacyNote: 'Usamos estes dados apenas para o contactar acerca do plano Clube.',
      privacyLink: { label: 'Política de privacidade', href: '/pt/privacy' },
    },
    finalCta: {
      title: 'Os seus treinadores não têm de esperar.',
      body: 'O plano Coach é gratuito para uma equipa, já hoje. Os clubes adotam mais depressa quando os treinadores já usam a ferramenta.',
      cta: 'Começar gratuitamente como treinador',
    },
  },

  es: {
    meta: {
      title: 'STRIVN para clubes — coordinación entre equipos',
      description:
        'Coordina todos los equipos, cuerpos técnicos y flujos médicos de tu club en una sola plataforma. El plan Club se despliega de forma progresiva. Apúntate a la lista de espera.',
    },
    eyebrow: 'STRIVN para clubes',
    hero: {
      title: 'Un club. Todos los equipos, bajo un mismo techo.',
      lede: 'El plan Coach hace funcionar un equipo. El plan Club los coordina todos: base de jugadores compartida, personal médico compartido, paneles que cruzan todas las plantillas. El despliegue es progresivo, y los clubes de la lista de espera entran primero.',
      status: 'Muy pronto · despliegue progresivo',
    },
    benefits: {
      title: 'Lo que añade el plan Club',
      items: [
        {
          title: 'Varios equipos, una plataforma',
          text: 'Todos los equipos del club funcionan sobre la misma base: los mismos eventos, la misma lógica de asistencias, sin silos por equipo.',
        },
        {
          title: 'Una base de jugadores compartida',
          text: 'Un jugador que cambia de equipo conserva su historial: asistencias, parte médico, carga. No hay que volver a introducir nada.',
        },
        {
          title: 'Personal médico y coordinadores compartidos',
          text: 'El fisio que cubre tres equipos ve tres equipos. Los coordinadores siguen cada plantilla sin tener que pedir exportaciones.',
        },
        {
          title: 'Paneles e informes de club',
          text: 'Disponibilidad, lesiones y carga en todos los equipos, en una vista pensada para quienes hacen funcionar el club.',
        },
        {
          title: 'Seguimiento de lesiones entre equipos',
          text: 'La lesión sigue al jugador, no al equipo. La vuelta a la competición se mantiene coherente incluso cuando un jugador sube de categoría.',
        },
      ],
    },
    form: {
      title: 'Apuntarse a la lista de espera Club',
      body: 'Cuéntanos cómo es tu club y te escribiremos cuando el despliegue llegue a ti. Sin compromiso: simplemente coloca a tu club en la cola.',
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
        title: 'Ya estás en la lista.',
        body: 'Gracias. Te escribiremos a medida que se despliegue el plan Club. Mientras tanto, tus entrenadores ya pueden empezar gratis con el plan Coach.',
      },
      error: 'No se ha podido enviar el formulario. Inténtalo de nuevo o escríbenos a hello@strivn.net.',
      privacyNote: 'Solo usamos estos datos para contactar contigo acerca del plan Club.',
      privacyLink: { label: 'Política de privacidad', href: '/es/privacy' },
    },
    finalCta: {
      title: 'Tus entrenadores no tienen por qué esperar.',
      body: 'El plan Coach es gratis para un equipo, hoy mismo. Los clubes adoptan más rápido cuando sus entrenadores ya usan la herramienta.',
      cta: 'Empezar gratis como entrenador',
    },
  },
};
