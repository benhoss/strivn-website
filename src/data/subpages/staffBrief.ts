/**
 * The staff brief — the page an S&C coach forwards to the rest of the staff.
 *
 * It is written to be read by someone who did not ask for it, in two minutes,
 * so it opens on what the team already does rather than on what STRIVN is.
 */
import type { SubpageLocales } from './types';

export const staffBrief: SubpageLocales = {
  fr: {
    meta: {
      title: 'Dossier staff | STRIVN',
      description:
        'Une page à lire en deux minutes : ce que l’équipe suit déjà, ce que chaque rôle y gagne, et comment rejoindre l’espace sans rien créer.',
    },
    hero: {
      kicker: 'PARTAGÉ PAR LE PRÉPARATEUR PHYSIQUE DE VOTRE ÉQUIPE',
      title: 'Ce que STRIVN change pour votre staff.',
      sub: 'Une page à lire en deux minutes. Elle résume ce que l’équipe suit déjà, ce que chaque rôle y gagne, et comment rejoindre l’espace — sans compte à créer, sans engagement, sans validation du club.',
      ctas: {
        primary: 'Demander mon accès',
        secondary: { label: 'Voir la plateforme', href: '/fr/features/' },
      },
    },
    sections: [
      {
        kicker: 'L’ÉQUIPE SUIT DÉJÀ',
        title: 'Ce qui tourne, aujourd’hui.',
        kind: 'stats',
        stats: [
          { value: '18', label: 'joueurs suivis au quotidien', tone: 'blue' },
          { value: '89 %', label: 'de réponse au check-in', tone: 'green' },
          { value: '12', label: 'semaines d’historique de charge', tone: 'blue' },
          { value: '2', label: 'joueurs en protocole de retour', tone: 'orange' },
        ],
        foot: 'Chiffres d’exemple. Sur votre espace, ils décrivent votre effectif — et se mettent à jour tout seuls.',
      },
      {
        kicker: 'CE QUE CHAQUE RÔLE Y GAGNE',
        title: 'Pas un outil de plus. Le même, pour tout le monde.',
        kind: 'cards',
        cards: [
          {
            icon: 'clipboard-list',
            title: 'Head coach',
            desc: 'La disponibilité réelle arrive dans la convocation : qui est apte, qui est adapté, qui est hors jeu — sans demander.',
          },
          {
            icon: 'shield-check',
            title: 'Staff médical',
            desc: 'Un dossier par joueur, des protocoles de retour par étapes, et des créneaux de soins que les joueurs réservent eux-mêmes.',
          },
          {
            icon: 'timer',
            title: 'Adjoints',
            desc: 'Les séances se construisent sur l’état réel du groupe, avec une bibliothèque d’exercices partagée par tout le staff.',
          },
          {
            icon: 'gauge',
            title: 'Préparateur physique',
            desc: 'Charge, GPS, wellness et tests dans un seul système — la raison pour laquelle cette page vous arrive.',
          },
          {
            icon: 'chart-column',
            title: 'Direction',
            desc: 'Des rapports lisibles sans être analyste : charge, disponibilité, assiduité, sur la période de votre choix.',
          },
          {
            icon: 'euro',
            title: 'Le club',
            desc: 'Rien à payer pour une équipe. Aucun engagement, et un export de vos données à tout moment.',
          },
        ],
      },
      {
        kind: 'callout',
        icon: 'share-2',
        tone: 'blue',
        text: 'Rejoindre l’espace de l’équipe : votre préparateur vous envoie un lien d’invitation. Aucun compte à créer, aucun mot de passe à retenir.',
      },
    ],
  },

  en: {
    meta: {
      title: 'Staff brief | STRIVN',
      description:
        'A page to read in two minutes: what the team already tracks, what each role gains, and how to join the space without creating anything.',
    },
    hero: {
      kicker: 'SHARED BY YOUR TEAM’S S&C COACH',
      title: 'What STRIVN changes for your staff.',
      sub: 'A page to read in two minutes. It sums up what the team already tracks, what each role gains, and how to join the space — no account to create, no commitment, no club sign-off.',
      ctas: {
        primary: 'Request my access',
        secondary: { label: 'See the platform', href: '/en/features/' },
      },
    },
    sections: [
      {
        kicker: 'THE TEAM ALREADY TRACKS',
        title: 'What is running, today.',
        kind: 'stats',
        stats: [
          { value: '18', label: 'players followed daily', tone: 'blue' },
          { value: '89 %', label: 'check-in response rate', tone: 'green' },
          { value: '12', label: 'weeks of load history', tone: 'blue' },
          { value: '2', label: 'players on a return protocol', tone: 'orange' },
        ],
        foot: 'Example figures. On your own space they describe your squad — and update themselves.',
      },
      {
        kicker: 'WHAT EACH ROLE GAINS',
        title: 'Not one more tool. The same one, for everybody.',
        kind: 'cards',
        cards: [
          {
            icon: 'clipboard-list',
            title: 'Head coach',
            desc: 'Real availability arrives inside the call-up: who is fit, who is adapted, who is out — without asking.',
          },
          {
            icon: 'shield-check',
            title: 'Medical staff',
            desc: 'A file per player, staged return protocols, and treatment slots the players book themselves.',
          },
          {
            icon: 'timer',
            title: 'Assistants',
            desc: 'Sessions are built on the squad’s real state, with an exercise library shared by the whole staff.',
          },
          {
            icon: 'gauge',
            title: 'S&C coach',
            desc: 'Load, GPS, wellness and tests in one system — the reason this page reached you.',
          },
          {
            icon: 'chart-column',
            title: 'Management',
            desc: 'Reports you can read without being an analyst: load, availability, attendance, over the period you choose.',
          },
          {
            icon: 'euro',
            title: 'The club',
            desc: 'Nothing to pay for one team. No commitment, and an export of your data at any time.',
          },
        ],
      },
      {
        kind: 'callout',
        icon: 'share-2',
        tone: 'blue',
        text: 'Joining the team space: your S&C coach sends you an invitation link. No account to create, no password to remember.',
      },
    ],
  },

  nl: {
    meta: {
      title: 'Stafdossier | STRIVN',
      description:
        'Een pagina om in twee minuten te lezen: wat de ploeg al opvolgt, wat elke rol erbij wint, en hoe je de ruimte binnenstapt zonder iets aan te maken.',
    },
    hero: {
      kicker: 'GEDEELD DOOR DE FYSIEK TRAINER VAN JE PLOEG',
      title: 'Wat STRIVN verandert voor je staf.',
      sub: 'Een pagina om in twee minuten te lezen. Ze vat samen wat de ploeg al opvolgt, wat elke rol erbij wint, en hoe je de ruimte binnenstapt — geen account aan te maken, geen verbintenis, geen goedkeuring van de club.',
      ctas: {
        primary: 'Mijn toegang aanvragen',
        secondary: { label: 'Het platform bekijken', href: '/nl/features/' },
      },
    },
    sections: [
      {
        kicker: 'DE PLOEG VOLGT AL OP',
        title: 'Wat er vandaag draait.',
        kind: 'stats',
        stats: [
          { value: '18', label: 'spelers dagelijks opgevolgd', tone: 'blue' },
          { value: '89 %', label: 'antwoord op de check-in', tone: 'green' },
          { value: '12', label: 'weken belastingshistoriek', tone: 'blue' },
          { value: '2', label: 'spelers in een terugkeerprotocol', tone: 'orange' },
        ],
        foot: 'Voorbeeldcijfers. Op jouw ruimte beschrijven ze jouw kern — en werken ze zichzelf bij.',
      },
      {
        kicker: 'WAT ELKE ROL ERBIJ WINT',
        title: 'Niet nog een tool. Dezelfde, voor iedereen.',
        kind: 'cards',
        cards: [
          {
            icon: 'clipboard-list',
            title: 'Hoofdcoach',
            desc: 'De echte beschikbaarheid komt mee in de oproeping: wie fit is, wie aangepast is, wie buiten strijd is — zonder ernaar te vragen.',
          },
          {
            icon: 'shield-check',
            title: 'Medische staf',
            desc: 'Een dossier per speler, terugkeerprotocollen in stappen, en verzorgingsslots die de spelers zelf reserveren.',
          },
          {
            icon: 'timer',
            title: 'Assistenten',
            desc: 'Trainingen worden gebouwd op de echte toestand van de groep, met een oefeningenbibliotheek gedeeld door de hele staf.',
          },
          {
            icon: 'gauge',
            title: 'Fysiek trainer',
            desc: 'Belasting, GPS, wellness en tests in één systeem — de reden waarom deze pagina bij jou komt.',
          },
          {
            icon: 'chart-column',
            title: 'Directie',
            desc: 'Rapporten die je leest zonder analist te zijn: belasting, beschikbaarheid, aanwezigheid, over de periode van je keuze.',
          },
          {
            icon: 'euro',
            title: 'De club',
            desc: 'Niets te betalen voor één ploeg. Geen verbintenis, en een export van je data op elk moment.',
          },
        ],
      },
      {
        kind: 'callout',
        icon: 'share-2',
        tone: 'blue',
        text: 'De ploegruimte binnenstappen: je fysiek trainer stuurt je een uitnodigingslink. Geen account aan te maken, geen wachtwoord te onthouden.',
      },
    ],
  },

  de: {
    meta: {
      title: 'Staff-Übersicht | STRIVN',
      description:
        'Eine Seite für zwei Minuten: was die Mannschaft bereits verfolgt, was jede Rolle davon hat, und wie man den Raum betritt, ohne etwas anzulegen.',
    },
    hero: {
      kicker: 'GETEILT VOM ATHLETIKTRAINER IHRER MANNSCHAFT',
      title: 'Was STRIVN für Ihren Staff verändert.',
      sub: 'Eine Seite für zwei Minuten. Sie fasst zusammen, was die Mannschaft bereits verfolgt, was jede Rolle davon hat, und wie man den Raum betritt — kein Konto anzulegen, keine Bindung, keine Freigabe des Vereins.',
      ctas: {
        primary: 'Zugang anfragen',
        secondary: { label: 'Die Plattform ansehen', href: '/de/features/' },
      },
    },
    sections: [
      {
        kicker: 'DIE MANNSCHAFT VERFOLGT BEREITS',
        title: 'Was heute läuft.',
        kind: 'stats',
        stats: [
          { value: '18', label: 'Spieler täglich begleitet', tone: 'blue' },
          { value: '89 %', label: 'Rücklauf beim Check-in', tone: 'green' },
          { value: '12', label: 'Wochen Belastungshistorie', tone: 'blue' },
          { value: '2', label: 'Spieler im Rückkehrprotokoll', tone: 'orange' },
        ],
        foot: 'Beispielzahlen. In Ihrem Raum beschreiben sie Ihren Kader — und aktualisieren sich von selbst.',
      },
      {
        kicker: 'WAS JEDE ROLLE DAVON HAT',
        title: 'Kein Werkzeug mehr. Dasselbe, für alle.',
        kind: 'cards',
        cards: [
          {
            icon: 'clipboard-list',
            title: 'Cheftrainer',
            desc: 'Die reale Verfügbarkeit kommt im Aufgebot an: wer fit ist, wer angepasst ist, wer ausfällt — ohne zu fragen.',
          },
          {
            icon: 'shield-check',
            title: 'Medizinischer Staff',
            desc: 'Eine Akte je Spieler, Rückkehrprotokolle in Stufen, und Behandlungs-Slots, die die Spieler selbst buchen.',
          },
          {
            icon: 'timer',
            title: 'Assistenten',
            desc: 'Einheiten entstehen auf dem realen Zustand der Gruppe, mit einer Übungsbibliothek, die der ganze Staff teilt.',
          },
          {
            icon: 'gauge',
            title: 'Athletiktrainer',
            desc: 'Belastung, GPS, Wellness und Tests in einem System — der Grund, warum diese Seite bei Ihnen ankommt.',
          },
          {
            icon: 'chart-column',
            title: 'Leitung',
            desc: 'Berichte, die man ohne Analyst zu sein lesen kann: Belastung, Verfügbarkeit, Anwesenheit, über den Zeitraum Ihrer Wahl.',
          },
          {
            icon: 'euro',
            title: 'Der Verein',
            desc: 'Für eine Mannschaft nichts zu zahlen. Keine Bindung, und ein Export Ihrer Daten jederzeit.',
          },
        ],
      },
      {
        kind: 'callout',
        icon: 'share-2',
        tone: 'blue',
        text: 'Dem Mannschaftsraum beitreten: Ihr Athletiktrainer schickt Ihnen einen Einladungslink. Kein Konto anzulegen, kein Passwort zu merken.',
      },
    ],
  },

  pt: {
    meta: {
      title: 'Dossiê do staff | STRIVN',
      description:
        'Uma página para ler em dois minutos: o que a equipa já acompanha, o que cada papel ganha, e como entrar no espaço sem criar nada.',
    },
    hero: {
      kicker: 'PARTILHADO PELO PREPARADOR FÍSICO DA SUA EQUIPA',
      title: 'O que a STRIVN muda para o seu staff.',
      sub: 'Uma página para ler em dois minutos. Resume o que a equipa já acompanha, o que cada papel ganha, e como entrar no espaço — sem conta a criar, sem compromisso, sem validação do clube.',
      ctas: {
        primary: 'Pedir o meu acesso',
        secondary: { label: 'Ver a plataforma', href: '/pt/features/' },
      },
    },
    sections: [
      {
        kicker: 'A EQUIPA JÁ ACOMPANHA',
        title: 'O que está a funcionar, hoje.',
        kind: 'stats',
        stats: [
          { value: '18', label: 'jogadores acompanhados no dia a dia', tone: 'blue' },
          { value: '89 %', label: 'de resposta ao check-in', tone: 'green' },
          { value: '12', label: 'semanas de histórico de carga', tone: 'blue' },
          { value: '2', label: 'jogadores em protocolo de regresso', tone: 'orange' },
        ],
        foot: 'Números de exemplo. No seu espaço descrevem o seu plantel — e atualizam-se sozinhos.',
      },
      {
        kicker: 'O QUE CADA PAPEL GANHA',
        title: 'Não mais uma ferramenta. A mesma, para toda a gente.',
        kind: 'cards',
        cards: [
          {
            icon: 'clipboard-list',
            title: 'Treinador principal',
            desc: 'A disponibilidade real chega na convocatória: quem está apto, quem está adaptado, quem está fora — sem ter de perguntar.',
          },
          {
            icon: 'shield-check',
            title: 'Staff médico',
            desc: 'Um processo por jogador, protocolos de regresso por etapas, e vagas de tratamento que os jogadores reservam sozinhos.',
          },
          {
            icon: 'timer',
            title: 'Adjuntos',
            desc: 'Os treinos constroem-se sobre o estado real do grupo, com uma biblioteca de exercícios partilhada por todo o staff.',
          },
          {
            icon: 'gauge',
            title: 'Preparador físico',
            desc: 'Carga, GPS, wellness e testes num só sistema — a razão pela qual esta página lhe chega.',
          },
          {
            icon: 'chart-column',
            title: 'Direção',
            desc: 'Relatórios legíveis sem ser analista: carga, disponibilidade, assiduidade, no período à sua escolha.',
          },
          {
            icon: 'euro',
            title: 'O clube',
            desc: 'Nada a pagar por uma equipa. Nenhum compromisso, e uma exportação dos seus dados a qualquer momento.',
          },
        ],
      },
      {
        kind: 'callout',
        icon: 'share-2',
        tone: 'blue',
        text: 'Entrar no espaço da equipa: o seu preparador envia-lhe uma ligação de convite. Sem conta a criar, sem palavra-passe a decorar.',
      },
    ],
  },

  es: {
    meta: {
      title: 'Dosier del staff | STRIVN',
      description:
        'Una página para leer en dos minutos: lo que el equipo ya sigue, lo que gana cada rol, y cómo entrar en el espacio sin crear nada.',
    },
    hero: {
      kicker: 'COMPARTIDO POR EL PREPARADOR FÍSICO DE TU EQUIPO',
      title: 'Lo que STRIVN cambia para tu staff.',
      sub: 'Una página para leer en dos minutos. Resume lo que el equipo ya sigue, lo que gana cada rol, y cómo entrar en el espacio — sin cuenta que crear, sin compromiso, sin validación del club.',
      ctas: {
        primary: 'Pedir mi acceso',
        secondary: { label: 'Ver la plataforma', href: '/es/features/' },
      },
    },
    sections: [
      {
        kicker: 'EL EQUIPO YA SIGUE',
        title: 'Lo que funciona, hoy.',
        kind: 'stats',
        stats: [
          { value: '18', label: 'jugadores seguidos a diario', tone: 'blue' },
          { value: '89 %', label: 'de respuesta al check-in', tone: 'green' },
          { value: '12', label: 'semanas de historial de carga', tone: 'blue' },
          { value: '2', label: 'jugadores en protocolo de vuelta', tone: 'orange' },
        ],
        foot: 'Cifras de ejemplo. En tu espacio describen tu plantilla — y se actualizan solas.',
      },
      {
        kicker: 'LO QUE GANA CADA ROL',
        title: 'No una herramienta más. La misma, para todos.',
        kind: 'cards',
        cards: [
          {
            icon: 'clipboard-list',
            title: 'Entrenador principal',
            desc: 'La disponibilidad real llega en la convocatoria: quién está apto, quién está adaptado, quién está fuera — sin tener que preguntar.',
          },
          {
            icon: 'shield-check',
            title: 'Staff médico',
            desc: 'Un expediente por jugador, protocolos de vuelta por etapas, y huecos de tratamiento que los jugadores reservan solos.',
          },
          {
            icon: 'timer',
            title: 'Ayudantes',
            desc: 'Las sesiones se construyen sobre el estado real del grupo, con una biblioteca de ejercicios compartida por todo el staff.',
          },
          {
            icon: 'gauge',
            title: 'Preparador físico',
            desc: 'Carga, GPS, wellness y tests en un solo sistema — la razón por la que esta página te llega.',
          },
          {
            icon: 'chart-column',
            title: 'Dirección',
            desc: 'Informes legibles sin ser analista: carga, disponibilidad, asistencia, en el periodo que elijas.',
          },
          {
            icon: 'euro',
            title: 'El club',
            desc: 'Nada que pagar por un equipo. Ningún compromiso, y una exportación de tus datos en cualquier momento.',
          },
        ],
      },
      {
        kind: 'callout',
        icon: 'share-2',
        tone: 'blue',
        text: 'Entrar en el espacio del equipo: tu preparador te envía un enlace de invitación. Sin cuenta que crear, sin contraseña que recordar.',
      },
    ],
  },
};
