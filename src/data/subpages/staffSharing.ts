/**
 * Staff & sharing — who sees what inside the team, and what can leave it.
 * Every outbound channel here is paired with the way it is revoked, because a
 * share you cannot take back is not a share you can offer.
 */
import type { SubpageLocales } from './types';

export const staffSharing: SubpageLocales = {
  fr: {
    meta: {
      title: 'Staff & partage | STRIVN',
      description:
        'Coach principal, adjoints, staff médical : chacun accède à ce qui le concerne. Et ce qui sort de l’équipe sort par un lien que vous coupez en un clic.',
    },
    hero: {
      kicker: 'STAFF & PARTAGE',
      title: 'Tout le staff, la même lecture.',
      sub: 'Coach principal, adjoints, staff médical : chacun accède à ce qui le concerne. Et ce qui sort de l’équipe sort par un lien que vous gardez sous contrôle — révocable, traçable, sans compte à créer en face.',
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir le dossier staff', href: '/fr/features/staff-brief/' },
      },
    },
    sections: [
      {
        kicker: 'À L’INTÉRIEUR DE L’ÉQUIPE',
        title: 'L’adjoint lit la disponibilité. Pas le diagnostic.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'STAFF D’ÉQUIPE',
            title: 'Coach principal et assistants',
            desc: 'Accès aux réponses de check-in et aux signaux de readiness — ce qu’il faut pour composer une séance, sans le détail médical.',
          },
          {
            eyebrow: 'STAFF MÉDICAL',
            title: 'Le dossier reste au médical',
            desc: 'Le suivi des blessures, les protocoles de retour et les créneaux de soins restent dans leur périmètre. Le reste du staff lit la disponibilité, pas le diagnostic.',
          },
          {
            eyebrow: 'JAMAIS',
            title: 'Ce qui ne remonte jamais',
            desc: 'Les erreurs attribuées en analyse de match ne sont jamais visibles par le joueur concerné. La règle est dans le produit.',
          },
        ],
      },
      {
        kicker: 'CE QUI SORT DE L’ÉQUIPE',
        title: 'Un lien envoyé reste un lien que vous pouvez couper.',
        kind: 'cards',
        cards: [
          {
            icon: 'external-link',
            title: 'Lien public, sans compte',
            desc: 'Un exercice partagé s’ouvre sur une page unique : média, métriques clés, description. Le destinataire n’a rien à créer.',
          },
          {
            icon: 'ban',
            title: 'Révocable en un clic',
            desc: 'Désactiver un lien coupe immédiatement toutes les copies déjà envoyées. Un nouveau lien se génère quand vous le décidez.',
          },
          {
            icon: 'eye',
            title: 'Documents avec suivi de lecture',
            desc: 'Chaque document publié affiche un compteur X/Y vu et la date de lecture par joueur.',
          },
          {
            icon: 'user-check',
            title: 'Rapports de scouting ciblés',
            desc: 'Vous choisissez les joueurs et les membres du staff destinataires. Un joueur n’y accède jamais de lui-même.',
          },
          {
            icon: 'baby',
            title: 'Portail parent',
            desc: 'Sur une équipe « enfants », le parent reçoit un lien personnel, confirme son consentement, et suit son enfant — lui seul.',
          },
          {
            icon: 'share-2',
            title: 'Export à tout moment',
            desc: 'Vos données restent les vôtres : export CSV disponible sans condition, sans demande à formuler.',
          },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: 'Staff & sharing | STRIVN',
      description:
        'Head coach, assistants, medical staff: each reaches what concerns them. And what leaves the team leaves by a link you cut in one click.',
    },
    hero: {
      kicker: 'STAFF & SHARING',
      title: 'The whole staff, the same reading.',
      sub: 'Head coach, assistants, medical staff: each reaches what concerns them. And what leaves the team leaves by a link you keep under control — revocable, traceable, with no account to create at the other end.',
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See the staff brief', href: '/en/features/staff-brief/' },
      },
    },
    sections: [
      {
        kicker: 'INSIDE THE TEAM',
        title: 'The assistant reads availability. Not the diagnosis.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'TEAM STAFF',
            title: 'Head coach and assistants',
            desc: 'Access to check-in answers and readiness signals — what it takes to build a session, without the medical detail.',
          },
          {
            eyebrow: 'MEDICAL STAFF',
            title: 'The file stays with medical',
            desc: 'Injury tracking, return protocols and treatment slots stay in their perimeter. The rest of the staff reads the availability, not the diagnosis.',
          },
          {
            eyebrow: 'NEVER',
            title: 'What never travels back',
            desc: 'Errors attributed in match analysis are never visible to the player concerned. The rule is in the product.',
          },
        ],
      },
      {
        kicker: 'WHAT LEAVES THE TEAM',
        title: 'A link you sent is still a link you can cut.',
        kind: 'cards',
        cards: [
          {
            icon: 'external-link',
            title: 'A public link, no account',
            desc: 'A shared exercise opens on a page of its own: media, key metrics, description. The recipient has nothing to create.',
          },
          {
            icon: 'ban',
            title: 'Revocable in one click',
            desc: 'Disabling a link immediately cuts every copy already sent. A new link is generated when you decide.',
          },
          {
            icon: 'eye',
            title: 'Documents with read tracking',
            desc: 'Every published document shows an X/Y seen counter and the read date per player.',
          },
          {
            icon: 'user-check',
            title: 'Targeted scouting reports',
            desc: 'You choose the players and the staff members who receive it. A player never reaches one on their own.',
          },
          {
            icon: 'baby',
            title: 'Parent portal',
            desc: 'On a “children” team, the parent receives a personal link, confirms consent, and follows their own child — theirs alone.',
          },
          {
            icon: 'share-2',
            title: 'Export at any time',
            desc: 'Your data stays yours: CSV export available with no conditions and no request to file.',
          },
        ],
      },
    ],
  },

  nl: {
    meta: {
      title: 'Staf & delen | STRIVN',
      description:
        'Hoofdcoach, assistenten, medische staf: elk komt bij wat hem aangaat. En wat de ploeg verlaat, vertrekt via een link die je met één klik afsluit.',
    },
    hero: {
      kicker: 'STAF & DELEN',
      title: 'De hele staf, dezelfde lezing.',
      sub: 'Hoofdcoach, assistenten, medische staf: elk komt bij wat hem aangaat. En wat de ploeg verlaat, vertrekt via een link die je onder controle houdt — intrekbaar, traceerbaar, zonder account aan de andere kant.',
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Het stafdossier bekijken', href: '/nl/features/staff-brief/' },
      },
    },
    sections: [
      {
        kicker: 'BINNEN DE PLOEG',
        title: 'De assistent leest de beschikbaarheid. Niet de diagnose.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'PLOEGSTAF',
            title: 'Hoofdcoach en assistenten',
            desc: 'Toegang tot de check-in-antwoorden en de readiness-signalen — wat nodig is om een training te bouwen, zonder het medische detail.',
          },
          {
            eyebrow: 'MEDISCHE STAF',
            title: 'Het dossier blijft bij medisch',
            desc: 'De opvolging van blessures, de terugkeerprotocollen en de verzorgingsslots blijven binnen hun perimeter. De rest van de staf leest de beschikbaarheid, niet de diagnose.',
          },
          {
            eyebrow: 'NOOIT',
            title: 'Wat nooit terugkeert',
            desc: 'Fouten die in de wedstrijdanalyse worden toegewezen zijn nooit zichtbaar voor de betrokken speler. De regel zit in het product.',
          },
        ],
      },
      {
        kicker: 'WAT DE PLOEG VERLAAT',
        title: 'Een verstuurde link blijft een link die je kunt afsluiten.',
        kind: 'cards',
        cards: [
          {
            icon: 'external-link',
            title: 'Publieke link, zonder account',
            desc: 'Een gedeelde oefening opent op een eigen pagina: media, kernmetrieken, beschrijving. De ontvanger hoeft niets aan te maken.',
          },
          {
            icon: 'ban',
            title: 'Met één klik in te trekken',
            desc: 'Een link uitschakelen snijdt onmiddellijk alle reeds verstuurde kopieën af. Een nieuwe link maak je aan wanneer jij dat beslist.',
          },
          {
            icon: 'eye',
            title: 'Documenten met leesopvolging',
            desc: 'Elk gepubliceerd document toont een teller X/Y gezien en de leesdatum per speler.',
          },
          {
            icon: 'user-check',
            title: 'Gerichte scoutingrapporten',
            desc: 'Jij kiest de spelers en de stafleden die het krijgen. Een speler komt er nooit uit zichzelf bij.',
          },
          {
            icon: 'baby',
            title: 'Ouderportaal',
            desc: 'Bij een “kinderen”-ploeg krijgt de ouder een persoonlijke link, bevestigt zijn toestemming, en volgt zijn eigen kind — enkel dat.',
          },
          {
            icon: 'share-2',
            title: 'Export op elk moment',
            desc: 'Je data blijft van jou: CSV-export beschikbaar zonder voorwaarde en zonder aanvraag.',
          },
        ],
      },
    ],
  },

  de: {
    meta: {
      title: 'Staff & Teilen | STRIVN',
      description:
        'Cheftrainer, Assistenten, medizinischer Staff: Jeder erreicht, was ihn betrifft. Und was die Mannschaft verlässt, geht über einen Link, den Sie mit einem Klick kappen.',
    },
    hero: {
      kicker: 'STAFF & TEILEN',
      title: 'Der ganze Staff, dieselbe Lesart.',
      sub: 'Cheftrainer, Assistenten, medizinischer Staff: Jeder erreicht, was ihn betrifft. Und was die Mannschaft verlässt, geht über einen Link, den Sie unter Kontrolle behalten — widerrufbar, nachvollziehbar, ohne Konto auf der Gegenseite.',
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Die Staff-Übersicht ansehen', href: '/de/features/staff-brief/' },
      },
    },
    sections: [
      {
        kicker: 'INNERHALB DER MANNSCHAFT',
        title: 'Der Assistent liest die Verfügbarkeit. Nicht die Diagnose.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'MANNSCHAFTSSTAFF',
            title: 'Cheftrainer und Assistenten',
            desc: 'Zugriff auf Check-in-Antworten und Readiness-Signale — was es braucht, um eine Einheit zu bauen, ohne medizinische Details.',
          },
          {
            eyebrow: 'MEDIZINISCHER STAFF',
            title: 'Die Akte bleibt beim Medizinischen',
            desc: 'Verletzungsverfolgung, Rückkehrprotokolle und Behandlungs-Slots bleiben in ihrem Bereich. Der übrige Staff liest die Verfügbarkeit, nicht die Diagnose.',
          },
          {
            eyebrow: 'NIE',
            title: 'Was nie zurückläuft',
            desc: 'In der Spielanalyse zugeordnete Fehler sind für den betroffenen Spieler nie sichtbar. Die Regel steckt im Produkt.',
          },
        ],
      },
      {
        kicker: 'WAS DIE MANNSCHAFT VERLÄSST',
        title: 'Ein gesendeter Link bleibt ein Link, den Sie kappen können.',
        kind: 'cards',
        cards: [
          {
            icon: 'external-link',
            title: 'Öffentlicher Link, ohne Konto',
            desc: 'Eine geteilte Übung öffnet sich auf einer eigenen Seite: Medium, Kennzahlen, Beschreibung. Der Empfänger muss nichts anlegen.',
          },
          {
            icon: 'ban',
            title: 'Mit einem Klick widerrufbar',
            desc: 'Einen Link zu deaktivieren kappt sofort alle bereits versendeten Kopien. Ein neuer Link entsteht, wenn Sie es entscheiden.',
          },
          {
            icon: 'eye',
            title: 'Dokumente mit Leseverfolgung',
            desc: 'Jedes veröffentlichte Dokument zeigt einen X/Y-gesehen-Zähler und das Lesedatum je Spieler.',
          },
          {
            icon: 'user-check',
            title: 'Gezielte Scouting-Berichte',
            desc: 'Sie wählen die Spieler und die Staff-Mitglieder, die ihn erhalten. Ein Spieler kommt von sich aus nie heran.',
          },
          {
            icon: 'baby',
            title: 'Elternportal',
            desc: 'Bei einer „Kinder“-Mannschaft erhält der Elternteil einen persönlichen Link, bestätigt die Einwilligung und verfolgt sein eigenes Kind — nur dieses.',
          },
          {
            icon: 'share-2',
            title: 'Export jederzeit',
            desc: 'Ihre Daten bleiben Ihre: CSV-Export ohne Bedingung und ohne Antrag verfügbar.',
          },
        ],
      },
    ],
  },

  pt: {
    meta: {
      title: 'Staff e partilha | STRIVN',
      description:
        'Treinador principal, adjuntos, staff médico: cada um acede ao que lhe diz respeito. E o que sai da equipa sai por uma ligação que corta num clique.',
    },
    hero: {
      kicker: 'STAFF E PARTILHA',
      title: 'Todo o staff, a mesma leitura.',
      sub: 'Treinador principal, adjuntos, staff médico: cada um acede ao que lhe diz respeito. E o que sai da equipa sai por uma ligação que mantém sob controlo — revogável, rastreável, sem conta a criar do outro lado.',
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver o dossiê do staff', href: '/pt/features/staff-brief/' },
      },
    },
    sections: [
      {
        kicker: 'DENTRO DA EQUIPA',
        title: 'O adjunto lê a disponibilidade. Não o diagnóstico.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'STAFF DA EQUIPA',
            title: 'Treinador principal e adjuntos',
            desc: 'Acesso às respostas de check-in e aos sinais de readiness — o necessário para montar um treino, sem o detalhe médico.',
          },
          {
            eyebrow: 'STAFF MÉDICO',
            title: 'O processo fica no médico',
            desc: 'O acompanhamento das lesões, os protocolos de regresso e as vagas de tratamento ficam no seu perímetro. O resto do staff lê a disponibilidade, não o diagnóstico.',
          },
          {
            eyebrow: 'NUNCA',
            title: 'O que nunca volta atrás',
            desc: 'Os erros atribuídos em análise de jogo nunca são visíveis para o jogador em causa. A regra está no produto.',
          },
        ],
      },
      {
        kicker: 'O QUE SAI DA EQUIPA',
        title: 'Uma ligação enviada continua a ser uma ligação que pode cortar.',
        kind: 'cards',
        cards: [
          {
            icon: 'external-link',
            title: 'Ligação pública, sem conta',
            desc: 'Um exercício partilhado abre numa página própria: média, métricas-chave, descrição. O destinatário não tem nada a criar.',
          },
          {
            icon: 'ban',
            title: 'Revogável num clique',
            desc: 'Desativar uma ligação corta imediatamente todas as cópias já enviadas. Uma nova ligação gera-se quando decidir.',
          },
          {
            icon: 'eye',
            title: 'Documentos com seguimento de leitura',
            desc: 'Cada documento publicado mostra um contador X/Y visto e a data de leitura por jogador.',
          },
          {
            icon: 'user-check',
            title: 'Relatórios de scouting dirigidos',
            desc: 'Escolhe os jogadores e os membros do staff destinatários. Um jogador nunca lá chega por si.',
          },
          {
            icon: 'baby',
            title: 'Portal dos pais',
            desc: 'Numa equipa «crianças», o pai recebe uma ligação pessoal, confirma o consentimento, e segue o seu próprio filho — só esse.',
          },
          {
            icon: 'share-2',
            title: 'Exportação a qualquer momento',
            desc: 'Os seus dados continuam seus: exportação CSV disponível sem condição e sem pedido a formular.',
          },
        ],
      },
    ],
  },

  es: {
    meta: {
      title: 'Staff y compartir | STRIVN',
      description:
        'Entrenador principal, ayudantes, staff médico: cada uno accede a lo que le concierne. Y lo que sale del equipo sale por un enlace que cortas en un clic.',
    },
    hero: {
      kicker: 'STAFF Y COMPARTIR',
      title: 'Todo el staff, la misma lectura.',
      sub: 'Entrenador principal, ayudantes, staff médico: cada uno accede a lo que le concierne. Y lo que sale del equipo sale por un enlace que mantienes bajo control — revocable, trazable, sin cuenta que crear enfrente.',
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver el dosier del staff', href: '/es/features/staff-brief/' },
      },
    },
    sections: [
      {
        kicker: 'DENTRO DEL EQUIPO',
        title: 'El adjunto lee la disponibilidad. No el diagnóstico.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'STAFF DEL EQUIPO',
            title: 'Entrenador principal y ayudantes',
            desc: 'Acceso a las respuestas de check-in y a las señales de readiness — lo que hace falta para montar una sesión, sin el detalle médico.',
          },
          {
            eyebrow: 'STAFF MÉDICO',
            title: 'El expediente se queda en médico',
            desc: 'El seguimiento de las lesiones, los protocolos de vuelta y los huecos de tratamiento se quedan en su perímetro. El resto del staff lee la disponibilidad, no el diagnóstico.',
          },
          {
            eyebrow: 'NUNCA',
            title: 'Lo que nunca vuelve',
            desc: 'Los errores atribuidos en análisis de partido nunca son visibles para el jugador afectado. La regla está en el producto.',
          },
        ],
      },
      {
        kicker: 'LO QUE SALE DEL EQUIPO',
        title: 'Un enlace enviado sigue siendo un enlace que puedes cortar.',
        kind: 'cards',
        cards: [
          {
            icon: 'external-link',
            title: 'Enlace público, sin cuenta',
            desc: 'Un ejercicio compartido se abre en una página propia: medio, métricas clave, descripción. El destinatario no tiene nada que crear.',
          },
          {
            icon: 'ban',
            title: 'Revocable en un clic',
            desc: 'Desactivar un enlace corta de inmediato todas las copias ya enviadas. Un nuevo enlace se genera cuando tú lo decides.',
          },
          {
            icon: 'eye',
            title: 'Documentos con seguimiento de lectura',
            desc: 'Cada documento publicado muestra un contador X/Y visto y la fecha de lectura por jugador.',
          },
          {
            icon: 'user-check',
            title: 'Informes de scouting dirigidos',
            desc: 'Eliges los jugadores y los miembros del staff destinatarios. Un jugador nunca llega a uno por su cuenta.',
          },
          {
            icon: 'baby',
            title: 'Portal de padres',
            desc: 'En un equipo «niños», el padre recibe un enlace personal, confirma su consentimiento, y sigue a su propio hijo — solo a él.',
          },
          {
            icon: 'share-2',
            title: 'Exportación en cualquier momento',
            desc: 'Tus datos siguen siendo tuyos: exportación CSV disponible sin condición y sin petición que formular.',
          },
        ],
      },
    ],
  },
};
