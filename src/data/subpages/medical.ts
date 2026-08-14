/**
 * Medical — injuries, return-to-play protocols and physio slots.
 *
 * The page's load-bearing distinction is that an injury is a file and a
 * treatment slot is a calendar event: confusing them is what makes most
 * medical modules unusable for the rest of the staff.
 */
import type { SubpageLocales } from './types';

export const medical: SubpageLocales = {
  fr: {
    meta: {
      title: 'Infirmerie | STRIVN',
      description:
        'Blessures actives, protocoles de retour au jeu par étapes, disponibilité en trois crans reliée aux convocations, et créneaux kiné réservés par les joueurs.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · ÉQUIPE',
      title: 'La blessure décide qui est convocable.',
      sub: 'Le tableau médical réunit les blessures actives, les joueurs en revalidation et la disponibilité de chacun. Ce n’est pas un registre à part : c’est ce panneau qui filtre les convocations.',
      bullets: [
        'Statut par joueur : OK, Blessé, Revalidation',
        'Plan de retour au jeu en étapes, personnalisable',
        'Trois niveaux de disponibilité reliés aux convocations',
        'Créneaux kiné réservés par les joueurs eux-mêmes',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir les présences', href: '/fr/features/attendance/' },
      },
      visual: 'rtp-protocol',
    },
    sections: [
      {
        kicker: 'DEUX OBJETS, PAS UN',
        title: 'Une blessure et un passage kiné ne sont pas la même chose.',
        kind: 'compare',
        heads: ['Blessure', 'Créneau de soins'],
        tones: ['red', 'blue'],
        rows: [
          {
            label: 'CE QUE C’EST',
            a: 'Un dossier ouvert sur un joueur : zone, type, sévérité, date de survenue.',
            b: 'Un événement du calendrier : une fenêtre de temps découpée en créneaux réservables.',
          },
          {
            label: 'EFFET SUR LA CHARGE',
            a: 'Aucune charge, mais un statut de disponibilité qui filtre les convocations.',
            b: 'Aucun. C’est un événement de coordination, jamais un événement de performance.',
          },
          {
            label: 'QUI AGIT',
            a: 'Le staff déclare, valide les étapes du protocole, marque le rétablissement.',
            b: 'Le joueur réserve son créneau et choisit son motif. Le staff peut réserver à sa place.',
          },
          {
            label: 'CE QU’ON Y LIT',
            a: 'Jours hors jeu, sévérité, retour estimé, progression, étapes validées.',
            b: 'L’heure de chaque créneau, le joueur, son motif et sa note — staff uniquement.',
          },
        ],
      },
      {
        kicker: 'LA DISPONIBILITÉ',
        title: 'Trois crans, et rien d’autre à tenir à jour.',
        body: 'C’est ce panneau, et lui seul, qui décide de ce que le joueur peut faire. Vous ne maintenez pas une liste de convocables en parallèle : elle se déduit d’ici.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'NON DISPONIBLE',
            title: 'Exclu des convocations',
            desc: 'Le joueur n’apparaît sur aucune convocation tant que le cran n’a pas bougé.',
            tone: 'red',
          },
          {
            eyebrow: 'ENTRAÎNEMENT UNIQUEMENT',
            title: 'Convoqué aux séances, pas aux matchs',
            desc: 'Le cran intermédiaire, celui qui manque presque partout — et celui qui décrit la majorité des retours.',
            tone: 'orange',
          },
          {
            eyebrow: 'APTE À JOUER',
            title: 'Disponible normalement',
            desc: 'Le protocole est clos, le joueur retrouve le régime commun.',
            tone: 'green',
          },
        ],
        note: {
          icon: 'clipboard-list',
          label: 'Un retour qui se coche, pas qui se raconte',
          desc: 'Le protocole n’est pas figé : ajoutez vos propres étapes. La progression et le retour estimé se recalculent à chaque étape validée, et les conseils kiné — un exercice, un protocole — partent directement dans l’app du joueur avec leur date.',
        },
      },
      {
        kicker: 'L’ÉVÉNEMENT SOINS',
        title: 'Le kiné arrive avec un planning déjà connu.',
        body: 'Le kiné est disponible sur une fenêtre — trente minutes avant l’entraînement, par exemple. Vous la posez dans le calendrier, elle se découpe en créneaux, et les joueurs réservent le leur avec un motif. Personne ne fait la queue devant une porte.',
        kind: 'callout',
        icon: 'calendar-days',
        tone: 'blue',
        text: 'Les motifs et les notes de créneau restent visibles du staff uniquement. Un joueur voit son propre rendez-vous, jamais celui des autres.',
      },
    ],
  },

  en: {
    meta: {
      title: 'Medical | STRIVN',
      description:
        'Active injuries, staged return-to-play protocols, a three-step availability tied to call-ups, and physio slots the players book themselves.',
    },
    hero: {
      kicker: 'FEATURES · TEAM',
      title: 'The injury decides who can be called up.',
      sub: 'The medical board brings together active injuries, players in rehab and everyone’s availability. It is not a register on the side: this panel is what filters the call-ups.',
      bullets: [
        'Status per player: OK, Injured, Rehab',
        'A staged return-to-play plan you can customise',
        'Three availability levels tied to call-ups',
        'Physio slots the players book themselves',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See attendance', href: '/en/features/attendance/' },
      },
      visual: 'rtp-protocol',
    },
    sections: [
      {
        kicker: 'TWO OBJECTS, NOT ONE',
        title: 'An injury and a physio slot are not the same thing.',
        kind: 'compare',
        heads: ['Injury', 'Treatment slot'],
        tones: ['red', 'blue'],
        rows: [
          {
            label: 'WHAT IT IS',
            a: 'A file opened on a player: area, type, severity, date of onset.',
            b: 'A calendar event: a window of time cut into bookable slots.',
          },
          {
            label: 'EFFECT ON LOAD',
            a: 'No load, but an availability status that filters the call-ups.',
            b: 'None. It is a coordination event, never a performance event.',
          },
          {
            label: 'WHO ACTS',
            a: 'The staff declares it, validates the protocol steps, marks the recovery.',
            b: 'The player books their slot and picks a reason. The staff can book on their behalf.',
          },
          {
            label: 'WHAT YOU READ',
            a: 'Days out, severity, estimated return, progress, validated steps.',
            b: 'The time of each slot, the player, their reason and their note — staff only.',
          },
        ],
      },
      {
        kicker: 'AVAILABILITY',
        title: 'Three steps, and nothing else to keep up to date.',
        body: 'This panel, and only this panel, decides what a player can do. You do not maintain a parallel list of who is selectable: it follows from here.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'UNAVAILABLE',
            title: 'Out of the call-ups',
            desc: 'The player appears on no call-up until the step moves.',
            tone: 'red',
          },
          {
            eyebrow: 'TRAINING ONLY',
            title: 'Called up for sessions, not matches',
            desc: 'The middle step, the one almost everywhere is missing — and the one that describes most returns.',
            tone: 'orange',
          },
          {
            eyebrow: 'FIT TO PLAY',
            title: 'Available as normal',
            desc: 'The protocol is closed and the player rejoins the common regime.',
            tone: 'green',
          },
        ],
        note: {
          icon: 'clipboard-list',
          label: 'A return you tick off, not one you narrate',
          desc: 'The protocol is not fixed: add your own steps. Progress and the estimated return recompute at each validated step, and physio advice — an exercise, a protocol — goes straight into the player’s app with its date.',
        },
      },
      {
        kicker: 'THE TREATMENT EVENT',
        title: 'The physio arrives to a schedule already known.',
        body: 'The physio is available over a window — thirty minutes before training, say. You place it in the calendar, it splits into slots, and the players book theirs with a reason. Nobody queues outside a door.',
        kind: 'callout',
        icon: 'calendar-days',
        tone: 'blue',
        text: 'Slot reasons and notes stay visible to the staff only. A player sees their own appointment, never anyone else’s.',
      },
    ],
  },

  nl: {
    meta: {
      title: 'Medisch | STRIVN',
      description:
        'Actieve blessures, revalidatieprotocollen in stappen, beschikbaarheid in drie standen gekoppeld aan de oproepingen, en kinéslots die de spelers zelf boeken.',
    },
    hero: {
      kicker: 'FUNCTIES · PLOEG',
      title: 'De blessure bepaalt wie opgeroepen kan worden.',
      sub: 'Het medische bord brengt actieve blessures, spelers in revalidatie en ieders beschikbaarheid samen. Het is geen apart register: dit paneel filtert de oproepingen.',
      bullets: [
        'Status per speler: OK, Geblesseerd, Revalidatie',
        'Terugkeerplan in stappen, aanpasbaar',
        'Drie niveaus van beschikbaarheid gekoppeld aan de oproepingen',
        'Kinéslots die de spelers zelf reserveren',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Aanwezigheden bekijken', href: '/nl/features/attendance/' },
      },
      visual: 'rtp-protocol',
    },
    sections: [
      {
        kicker: 'TWEE DINGEN, GEEN ÉÉN',
        title: 'Een blessure en een kinébeurt zijn niet hetzelfde.',
        kind: 'compare',
        heads: ['Blessure', 'Verzorgingsslot'],
        tones: ['red', 'blue'],
        rows: [
          {
            label: 'WAT HET IS',
            a: 'Een dossier geopend op een speler: zone, type, ernst, datum van het voorval.',
            b: 'Een activiteit in de kalender: een tijdvenster opgedeeld in reserveerbare slots.',
          },
          {
            label: 'EFFECT OP DE BELASTING',
            a: 'Geen belasting, wel een beschikbaarheidsstatus die de oproepingen filtert.',
            b: 'Geen. Het is een coördinatie-activiteit, nooit een prestatie-activiteit.',
          },
          {
            label: 'WIE HANDELT',
            a: 'De staf verklaart, valideert de stappen van het protocol, markeert het herstel.',
            b: 'De speler reserveert zijn slot en kiest zijn reden. De staf kan in zijn plaats reserveren.',
          },
          {
            label: 'WAT JE ER LEEST',
            a: 'Dagen buiten strijd, ernst, geschatte terugkeer, voortgang, gevalideerde stappen.',
            b: 'Het uur van elk slot, de speler, zijn reden en zijn notitie — enkel staf.',
          },
        ],
      },
      {
        kicker: 'DE BESCHIKBAARHEID',
        title: 'Drie standen, en niets anders bij te houden.',
        body: 'Dit paneel, en enkel dit paneel, bepaalt wat de speler mag doen. Je houdt geen parallelle lijst van oproepbaren bij: die volgt hieruit.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'NIET BESCHIKBAAR',
            title: 'Uit de oproepingen',
            desc: 'De speler verschijnt op geen enkele oproeping zolang de stand niet beweegt.',
            tone: 'red',
          },
          {
            eyebrow: 'ENKEL TRAINING',
            title: 'Opgeroepen voor trainingen, niet voor wedstrijden',
            desc: 'De tussenstand, die bijna overal ontbreekt — en die de meeste terugkeren beschrijft.',
            tone: 'orange',
          },
          {
            eyebrow: 'SPEELKLAAR',
            title: 'Normaal beschikbaar',
            desc: 'Het protocol is afgesloten en de speler keert terug naar het gewone regime.',
            tone: 'green',
          },
        ],
        note: {
          icon: 'clipboard-list',
          label: 'Een terugkeer die je afvinkt, niet die je vertelt',
          desc: 'Het protocol ligt niet vast: voeg je eigen stappen toe. Voortgang en geschatte terugkeer worden bij elke gevalideerde stap herrekend, en kinéadvies — een oefening, een protocol — vertrekt rechtstreeks naar de app van de speler, met datum.',
        },
      },
      {
        kicker: 'DE VERZORGINGSACTIVITEIT',
        title: 'De kiné komt aan met een planning die al bekend is.',
        body: 'De kiné is beschikbaar over een venster — dertig minuten voor de training, bijvoorbeeld. Je zet het in de kalender, het splitst in slots, en de spelers reserveren het hunne met een reden. Niemand staat aan te schuiven voor een deur.',
        kind: 'callout',
        icon: 'calendar-days',
        tone: 'blue',
        text: 'Redenen en notities bij een slot blijven enkel zichtbaar voor de staf. Een speler ziet zijn eigen afspraak, nooit die van een ander.',
      },
    ],
  },

  de: {
    meta: {
      title: 'Medizin | STRIVN',
      description:
        'Aktive Verletzungen, Return-to-Play-Protokolle in Stufen, eine dreistufige Verfügbarkeit, die mit den Aufgeboten verknüpft ist, und Physio-Slots, die die Spieler selbst buchen.',
    },
    hero: {
      kicker: 'FUNKTIONEN · MANNSCHAFT',
      title: 'Die Verletzung entscheidet, wer aufgeboten werden kann.',
      sub: 'Die medizinische Übersicht bündelt aktive Verletzungen, Spieler in Reha und die Verfügbarkeit jedes Einzelnen. Kein Register nebenher: Genau dieses Panel filtert die Aufgebote.',
      bullets: [
        'Status je Spieler: OK, Verletzt, Reha',
        'Ein Rückkehrplan in Stufen, anpassbar',
        'Drei Verfügbarkeitsstufen, mit den Aufgeboten verknüpft',
        'Physio-Slots, die die Spieler selbst buchen',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Anwesenheiten ansehen', href: '/de/features/attendance/' },
      },
      visual: 'rtp-protocol',
    },
    sections: [
      {
        kicker: 'ZWEI DINGE, NICHT EINS',
        title: 'Eine Verletzung und ein Physiotermin sind nicht dasselbe.',
        kind: 'compare',
        heads: ['Verletzung', 'Behandlungs-Slot'],
        tones: ['red', 'blue'],
        rows: [
          {
            label: 'WAS ES IST',
            a: 'Eine auf einen Spieler eröffnete Akte: Region, Art, Schweregrad, Zeitpunkt.',
            b: 'Ein Kalendertermin: ein Zeitfenster, in buchbare Slots geteilt.',
          },
          {
            label: 'WIRKUNG AUF DIE BELASTUNG',
            a: 'Keine Belastung, aber ein Verfügbarkeitsstatus, der die Aufgebote filtert.',
            b: 'Keine. Es ist ein Koordinationstermin, nie ein Leistungstermin.',
          },
          {
            label: 'WER HANDELT',
            a: 'Der Staff meldet, bestätigt die Protokollstufen, markiert die Genesung.',
            b: 'Der Spieler bucht seinen Slot und wählt seinen Grund. Der Staff kann für ihn buchen.',
          },
          {
            label: 'WAS MAN LIEST',
            a: 'Ausfalltage, Schweregrad, geschätzte Rückkehr, Fortschritt, bestätigte Stufen.',
            b: 'Die Zeit jedes Slots, den Spieler, seinen Grund und seine Notiz — nur Staff.',
          },
        ],
      },
      {
        kicker: 'DIE VERFÜGBARKEIT',
        title: 'Drei Stufen, und sonst nichts zu pflegen.',
        body: 'Dieses Panel, und nur dieses, entscheidet, was ein Spieler darf. Sie führen keine parallele Liste der Aufbietbaren: Sie ergibt sich von hier.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'NICHT VERFÜGBAR',
            title: 'Von den Aufgeboten ausgeschlossen',
            desc: 'Der Spieler erscheint auf keinem Aufgebot, solange die Stufe nicht wechselt.',
            tone: 'red',
          },
          {
            eyebrow: 'NUR TRAINING',
            title: 'Zu Einheiten aufgeboten, nicht zu Spielen',
            desc: 'Die mittlere Stufe, die fast überall fehlt — und die die meisten Rückkehrer beschreibt.',
            tone: 'orange',
          },
          {
            eyebrow: 'SPIELFÄHIG',
            title: 'Normal verfügbar',
            desc: 'Das Protokoll ist geschlossen, der Spieler kehrt in den normalen Betrieb zurück.',
            tone: 'green',
          },
        ],
        note: {
          icon: 'clipboard-list',
          label: 'Eine Rückkehr, die man abhakt, nicht erzählt',
          desc: 'Das Protokoll ist nicht starr: Ergänzen Sie eigene Stufen. Fortschritt und geschätzte Rückkehr rechnen sich bei jeder bestätigten Stufe neu, und Physio-Hinweise — eine Übung, ein Protokoll — gehen mit Datum direkt in die App des Spielers.',
        },
      },
      {
        kicker: 'DER BEHANDLUNGSTERMIN',
        title: 'Der Physio kommt zu einem bereits bekannten Plan.',
        body: 'Der Physio ist über ein Fenster verfügbar — dreißig Minuten vor dem Training etwa. Sie legen es in den Kalender, es teilt sich in Slots, und die Spieler buchen ihren mit einem Grund. Niemand steht vor einer Tür Schlange.',
        kind: 'callout',
        icon: 'calendar-days',
        tone: 'blue',
        text: 'Gründe und Notizen zu einem Slot bleiben nur für den Staff sichtbar. Ein Spieler sieht seinen eigenen Termin, nie den eines anderen.',
      },
    ],
  },

  pt: {
    meta: {
      title: 'Departamento médico | STRIVN',
      description:
        'Lesões ativas, protocolos de regresso por etapas, disponibilidade em três níveis ligada às convocatórias, e vagas de fisioterapia reservadas pelos próprios jogadores.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · EQUIPA',
      title: 'A lesão decide quem pode ser convocado.',
      sub: 'O quadro médico reúne as lesões ativas, os jogadores em reabilitação e a disponibilidade de cada um. Não é um registo à parte: é este painel que filtra as convocatórias.',
      bullets: [
        'Estado por jogador: OK, Lesionado, Reabilitação',
        'Plano de regresso por etapas, personalizável',
        'Três níveis de disponibilidade ligados às convocatórias',
        'Vagas de fisioterapia reservadas pelos próprios jogadores',
      ],
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver as presenças', href: '/pt/features/attendance/' },
      },
      visual: 'rtp-protocol',
    },
    sections: [
      {
        kicker: 'DUAS COISAS, NÃO UMA',
        title: 'Uma lesão e uma ida à fisioterapia não são a mesma coisa.',
        kind: 'compare',
        heads: ['Lesão', 'Vaga de tratamento'],
        tones: ['red', 'blue'],
        rows: [
          {
            label: 'O QUE É',
            a: 'Um processo aberto sobre um jogador: zona, tipo, gravidade, data de ocorrência.',
            b: 'Um evento do calendário: uma janela de tempo dividida em vagas reserváveis.',
          },
          {
            label: 'EFEITO NA CARGA',
            a: 'Nenhuma carga, mas um estado de disponibilidade que filtra as convocatórias.',
            b: 'Nenhum. É um evento de coordenação, nunca um evento de desempenho.',
          },
          {
            label: 'QUEM AGE',
            a: 'O staff declara, valida as etapas do protocolo, marca a recuperação.',
            b: 'O jogador reserva a sua vaga e escolhe o motivo. O staff pode reservar por ele.',
          },
          {
            label: 'O QUE SE LÊ',
            a: 'Dias fora, gravidade, regresso estimado, progresso, etapas validadas.',
            b: 'A hora de cada vaga, o jogador, o motivo e a nota — só staff.',
          },
        ],
      },
      {
        kicker: 'A DISPONIBILIDADE',
        title: 'Três níveis, e mais nada para manter.',
        body: 'É este painel, e só ele, que decide o que o jogador pode fazer. Não mantém uma lista paralela de convocáveis: ela deduz-se daqui.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'INDISPONÍVEL',
            title: 'Fora das convocatórias',
            desc: 'O jogador não aparece em nenhuma convocatória enquanto o nível não mudar.',
            tone: 'red',
          },
          {
            eyebrow: 'APENAS TREINO',
            title: 'Convocado para treinos, não para jogos',
            desc: 'O nível intermédio, o que falta quase em todo o lado — e o que descreve a maioria dos regressos.',
            tone: 'orange',
          },
          {
            eyebrow: 'APTO A JOGAR',
            title: 'Disponível normalmente',
            desc: 'O protocolo está encerrado e o jogador volta ao regime comum.',
            tone: 'green',
          },
        ],
        note: {
          icon: 'clipboard-list',
          label: 'Um regresso que se assinala, não que se conta',
          desc: 'O protocolo não é rígido: acrescente as suas próprias etapas. O progresso e o regresso estimado recalculam-se a cada etapa validada, e os conselhos de fisioterapia — um exercício, um protocolo — seguem diretamente para a app do jogador, com a sua data.',
        },
      },
      {
        kicker: 'O EVENTO DE TRATAMENTO',
        title: 'O fisioterapeuta chega com um horário já conhecido.',
        body: 'O fisioterapeuta está disponível numa janela — trinta minutos antes do treino, por exemplo. Coloca-a no calendário, ela divide-se em vagas, e os jogadores reservam a sua com um motivo. Ninguém faz fila à porta.',
        kind: 'callout',
        icon: 'calendar-days',
        tone: 'blue',
        text: 'Os motivos e as notas de vaga ficam visíveis apenas para o staff. Um jogador vê a sua própria marcação, nunca a dos outros.',
      },
    ],
  },

  es: {
    meta: {
      title: 'Enfermería | STRIVN',
      description:
        'Lesiones activas, protocolos de vuelta por etapas, disponibilidad en tres niveles ligada a las convocatorias, y huecos de fisio reservados por los propios jugadores.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · EQUIPO',
      title: 'La lesión decide quién es convocable.',
      sub: 'El cuadro médico reúne las lesiones activas, los jugadores en readaptación y la disponibilidad de cada uno. No es un registro aparte: es este panel el que filtra las convocatorias.',
      bullets: [
        'Estado por jugador: OK, Lesionado, Readaptación',
        'Plan de vuelta por etapas, personalizable',
        'Tres niveles de disponibilidad ligados a las convocatorias',
        'Huecos de fisio reservados por los propios jugadores',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver las asistencias', href: '/es/features/attendance/' },
      },
      visual: 'rtp-protocol',
    },
    sections: [
      {
        kicker: 'DOS COSAS, NO UNA',
        title: 'Una lesión y un pase por fisio no son lo mismo.',
        kind: 'compare',
        heads: ['Lesión', 'Hueco de tratamiento'],
        tones: ['red', 'blue'],
        rows: [
          {
            label: 'QUÉ ES',
            a: 'Un expediente abierto sobre un jugador: zona, tipo, gravedad, fecha de aparición.',
            b: 'Un evento del calendario: una ventana de tiempo dividida en huecos reservables.',
          },
          {
            label: 'EFECTO SOBRE LA CARGA',
            a: 'Ninguna carga, pero un estado de disponibilidad que filtra las convocatorias.',
            b: 'Ninguno. Es un evento de coordinación, nunca un evento de rendimiento.',
          },
          {
            label: 'QUIÉN ACTÚA',
            a: 'El staff lo declara, valida las etapas del protocolo, marca la recuperación.',
            b: 'El jugador reserva su hueco y elige su motivo. El staff puede reservar por él.',
          },
          {
            label: 'QUÉ SE LEE',
            a: 'Días fuera, gravedad, vuelta estimada, progreso, etapas validadas.',
            b: 'La hora de cada hueco, el jugador, su motivo y su nota — solo staff.',
          },
        ],
      },
      {
        kicker: 'LA DISPONIBILIDAD',
        title: 'Tres niveles, y nada más que mantener.',
        body: 'Es este panel, y solo él, el que decide lo que el jugador puede hacer. No mantienes una lista paralela de convocables: se deduce de aquí.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'NO DISPONIBLE',
            title: 'Fuera de las convocatorias',
            desc: 'El jugador no aparece en ninguna convocatoria mientras el nivel no cambie.',
            tone: 'red',
          },
          {
            eyebrow: 'SOLO ENTRENAMIENTO',
            title: 'Convocado a sesiones, no a partidos',
            desc: 'El nivel intermedio, el que falta casi en todas partes — y el que describe la mayoría de las vueltas.',
            tone: 'orange',
          },
          {
            eyebrow: 'APTO PARA JUGAR',
            title: 'Disponible con normalidad',
            desc: 'El protocolo está cerrado y el jugador vuelve al régimen común.',
            tone: 'green',
          },
        ],
        note: {
          icon: 'clipboard-list',
          label: 'Una vuelta que se marca, no que se cuenta',
          desc: 'El protocolo no es rígido: añade tus propias etapas. El progreso y la vuelta estimada se recalculan en cada etapa validada, y los consejos de fisio — un ejercicio, un protocolo — salen directamente a la app del jugador, con su fecha.',
        },
      },
      {
        kicker: 'EL EVENTO DE TRATAMIENTO',
        title: 'El fisio llega con un horario ya conocido.',
        body: 'El fisio está disponible en una ventana — treinta minutos antes del entrenamiento, por ejemplo. La colocas en el calendario, se divide en huecos, y los jugadores reservan el suyo con un motivo. Nadie hace cola delante de una puerta.',
        kind: 'callout',
        icon: 'calendar-days',
        tone: 'blue',
        text: 'Los motivos y las notas de hueco solo son visibles para el staff. Un jugador ve su propia cita, nunca la de los demás.',
      },
    ],
  },
};
