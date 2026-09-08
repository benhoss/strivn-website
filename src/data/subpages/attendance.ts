/**
 * Attendance & RSVP — five answers, and three season rates computed from what
 * is already collected. The page's spine is fairness: a percentage that
 * punishes an injured player for being injured is worse than no percentage.
 */
import type { SubpageLocales } from './types';

export const attendance: SubpageLocales = {
  fr: {
    meta: {
      title: 'Présences & RSVP | STRIVN',
      description:
        'Une convocation, cinq réponses possibles dont « Adapté », une relance qui vise seulement les joueurs sans réponse, et trois taux de saison calculés honnêtement.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · ÉQUIPE',
      title: 'Convoquez en un clic, lisez les réponses au calendrier.',
      sub: 'Une convocation invite les joueurs à confirmer leur présence sur un événement. Les réponses remontent dans le calendrier, alimentent les présences, et deviennent des taux de saison sans une seule saisie supplémentaire.',
      bullets: [
        'Portée au choix : tout l’effectif actif, ou une sélection',
        'E-mail, push et WhatsApp selon les canaux du joueur',
        'Cinq statuts, dont Adapté pour une présence sous restriction',
        'Relance ciblée : seuls les joueurs sans réponse la reçoivent',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir la gestion d’équipe', href: '/fr/features/communication/' },
      },
      visual: 'rsvp-board',
    },
    sections: [
      {
        kicker: 'LE VOCABULAIRE DES RÉPONSES',
        title: 'Recevez cinq réponses, dont « Adapté » pour la présence restreinte.',
        body: 'Un ischio qui tire, une reprise en cours, un rendez-vous qui déborde : la réponse doit pouvoir dire ce qui se passe vraiment, entre là et pas là.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'Présent', desc: 'Le joueur a confirmé.' },
          { name: 'Absent', desc: 'Le joueur a décliné.' },
          {
            name: 'Adapté',
            desc: 'Présent, mais sous restriction : blessure légère, charge réduite.',
            chip: { label: 'la nuance qui compte', tone: 'orange' },
          },
          { name: 'Incertain', desc: 'Réponse provisoire, qui reste modifiable.' },
          {
            name: 'En attente',
            desc: 'Réponse attendue. C’est la seule cible de la relance.',
          },
        ],
        note: {
          icon: 'bell',
          label: 'La relance vise seulement les joueurs en attente',
          desc: '« Envoyer un rappel » notifie seulement les joueurs en attente ; ceux qui ont déjà répondu sont laissés tranquilles. C’est ce qui garde une relance crédible la fois d’après.',
        },
      },
      {
        kicker: 'SUR TOUTE LA SAISON',
        title: 'Mesurez la présence et la réactivité de chaque joueur.',
        body: 'Trois indicateurs calculés à partir de ce que vous collectez déjà, sans saisie supplémentaire.',
        kind: 'stats',
        stats: [
          { value: '91 %', label: 'Présence saison, détaillée en entraînements et en matchs, pour repérer l’assidu à l’entraînement qui manque les matchs.', tone: 'green' },
          { value: '76 %', label: 'Complétion programme, affichée seulement si le joueur a un programme actif, et laissée vide faute de données.', tone: 'blue' },
          { value: '84 %', label: 'Réponses check-ins sur 30 jours, avec « — » en l’absence de check-in envoyé sur la période.', tone: 'blue' },
        ],
      },
      {
        kicker: 'CE QUI ENTRE DANS LE TAUX',
        title: 'Ce taux tient compte de la blessure de février.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'ABSENCE EXCUSÉE',
            title: 'Hors dénominateur',
            desc: 'Une absence motivée, ou survenue pendant une blessure active ou une rééducation, sort du dénominateur. Le taux laisse une blessure hors du calcul.',
          },
          {
            eyebrow: 'ARRIVÉE EN COURS',
            title: 'Compté depuis la date d’arrivée',
            desc: 'Les événements antérieurs à l’arrivée du joueur restent hors du calcul : un renfort de janvier démarre à 100 %.',
          },
          {
            eyebrow: 'ÉVÉNEMENTS ANNULÉS',
            title: 'Exclus des deux côtés',
            desc: 'Un événement annulé sort du numérateur et du dénominateur.',
          },
          {
            eyebrow: 'CHECK-INS',
            title: 'Dénominateur réel',
            desc: 'Le taux se base sur les jours où un check-in a effectivement été envoyé au joueur, et sur eux seulement.',
          },
        ],
        foot: 'Sous 5 événements ou 5 check-ins envoyés, un joueur reste hors des « 5 joueurs à surveiller » : un pourcentage calculé sur trois lignes n’est pas un signal.',
      },
    ],
  },

  en: {
    meta: {
      title: 'Attendance & RSVP | STRIVN',
      description:
        'One call-up, five possible answers including “Adapted”, a reminder aimed only at players without an answer, and three season rates computed honestly.',
    },
    hero: {
      kicker: 'FEATURES · TEAM',
      title: 'Call up in one click; the calendar collects answers.',
      sub: 'A call-up asks players to confirm they will be at an event. The answers flow into the calendar, feed attendance, and become season rates without a single extra entry.',
      bullets: [
        'Scope of your choice: the whole active squad, or a selection',
        'Email, push and WhatsApp, per the player’s channels',
        'Five statuses, including Adapted for attendance under restriction',
        'Targeted reminders: only players without an answer get one',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See team management', href: '/en/features/communication/' },
      },
      visual: 'rsvp-board',
    },
    sections: [
      {
        kicker: 'THE VOCABULARY OF ANSWERS',
        title: 'Receive five answers, including “Adapted” for attendance under restriction.',
        body: 'A tight hamstring, a comeback in progress, an appointment running long: the answer has to be able to say what is actually happening, between there and not there.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'Available', desc: 'The player has confirmed.' },
          { name: 'Unavailable', desc: 'The player has declined.' },
          {
            name: 'Adapted',
            desc: 'There, but under restriction: a minor injury, reduced load.',
            chip: { label: 'the nuance that counts', tone: 'orange' },
          },
          { name: 'Unsure', desc: 'A provisional answer, still editable.' },
          {
            name: 'Pending',
            desc: 'Answer pending. The only target the reminder has.',
          },
        ],
        note: {
          icon: 'bell',
          label: 'The reminder targets only pending players',
          desc: '“Send a reminder” notifies only the pending players; those who have already answered are left alone. That is what keeps a reminder credible the next time.',
        },
      },
      {
        kicker: 'ACROSS THE SEASON',
        title: 'Measure each player’s attendance and responsiveness.',
        body: 'Three indicators computed from what you already collect, with no extra entry.',
        kind: 'stats',
        stats: [
          { value: '91 %', label: 'Season attendance, split between training and matches, so you spot the player who never misses training and misses matches.', tone: 'green' },
          { value: '76 %', label: 'Program completion, shown only if the player has an active program, and left blank for lack of data.', tone: 'blue' },
          { value: '84 %', label: 'Check-in responses over 30 days, with “—” until a check-in has been sent in the period.', tone: 'blue' },
        ],
      },
      {
        kicker: 'WHAT GOES INTO THE RATE',
        title: 'This rate knows the player was injured in February.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'EXCUSED ABSENCE',
            title: 'Out of the denominator',
            desc: 'An excused absence, or one during an active injury or a rehab, leaves the denominator. The rate keeps an injury out of the calculation.',
          },
          {
            eyebrow: 'MID-SEASON ARRIVAL',
            title: 'Counted from the join date',
            desc: 'Events before a player joined stay out of the calculation: a January signing starts at 100 %.',
          },
          {
            eyebrow: 'CANCELLED EVENTS',
            title: 'Excluded from both sides',
            desc: 'A cancelled event leaves both the numerator and the denominator.',
          },
          {
            eyebrow: 'CHECK-INS',
            title: 'A real denominator',
            desc: 'The rate is based on the days a check-in was actually sent to that player, and on those alone.',
          },
        ],
        foot: 'Under 5 events or 5 check-ins sent, a player stays out of the “5 players to watch”: a percentage computed on three rows is not a signal.',
      },
    ],
  },

  nl: {
    meta: {
      title: 'Aanwezigheden & RSVP | STRIVN',
      description:
        'Eén oproeping, vijf mogelijke antwoorden waaronder “Aangepast”, een herinnering die alleen spelers zonder antwoord bereikt, en drie eerlijk berekende seizoenscijfers.',
    },
    hero: {
      kicker: 'FUNCTIES · PLOEG',
      title: 'Roep op in één klik; de kalender verzamelt antwoorden.',
      sub: 'Een oproeping vraagt spelers hun aanwezigheid op een activiteit te bevestigen. De antwoorden komen in de kalender, voeden de aanwezigheden, en worden seizoenscijfers zonder één extra invoer.',
      bullets: [
        'Bereik naar keuze: de hele actieve kern, of een selectie',
        'E-mail, push en WhatsApp volgens de kanalen van de speler',
        'Vijf statussen, waaronder Aangepast voor aanwezigheid met beperking',
        'Gerichte herinnering: alleen spelers zonder antwoord krijgen er een',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Teambeheer bekijken', href: '/nl/features/communication/' },
      },
      visual: 'rsvp-board',
    },
    sections: [
      {
        kicker: 'DE WOORDENSCHAT VAN DE ANTWOORDEN',
        title: 'Ontvang vijf antwoorden, waaronder “Aangepast” voor aanwezigheid met beperking.',
        body: 'Een trekkende hamstring, een revalidatie die loopt, een afspraak die uitloopt: het antwoord moet kunnen zeggen wat er echt aan de hand is, tussen er en niet er.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'Beschikbaar', desc: 'De speler heeft bevestigd.' },
          { name: 'Afwezig', desc: 'De speler heeft afgezegd.' },
          {
            name: 'Aangepast',
            desc: 'Aanwezig, maar met beperking: lichte blessure, verlaagde belasting.',
            chip: { label: 'de nuance die telt', tone: 'orange' },
          },
          { name: 'Onzeker', desc: 'Voorlopig antwoord, dat aanpasbaar blijft.' },
          {
            name: 'In afwachting',
            desc: 'Antwoord verwacht. Het enige doelwit van de herinnering.',
          },
        ],
        note: {
          icon: 'bell',
          label: 'De herinnering richt zich alleen op spelers in afwachting',
          desc: '“Een herinnering sturen” verwittigt alleen de spelers in afwachting; wie al geantwoord heeft, wordt met rust gelaten. Daardoor blijft een herinnering de volgende keer geloofwaardig.',
        },
      },
      {
        kicker: 'OVER HET HELE SEIZOEN',
        title: 'Meet de aanwezigheid en de reactiviteit van elke speler.',
        body: 'Drie indicatoren berekend op wat je al verzamelt, zonder extra invoer.',
        kind: 'stats',
        stats: [
          { value: '91 %', label: 'Aanwezigheid seizoen, opgesplitst in trainingen en wedstrijden, om de trouwe trainer te herkennen die wedstrijden mist.', tone: 'green' },
          { value: '76 %', label: 'Programmavoltooiing, alleen getoond als de speler een actief programma heeft, en leeg gelaten bij gebrek aan data.', tone: 'blue' },
          { value: '84 %', label: 'Check-in-antwoorden over 30 dagen, met “—” zolang er geen check-in naar hem verstuurd is in die periode.', tone: 'blue' },
        ],
      },
      {
        kicker: 'WAT IN HET CIJFER ZIT',
        title: 'Dit percentage houdt rekening met de blessure van februari.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'GEWETTIGDE AFWEZIGHEID',
            title: 'Buiten de noemer',
            desc: 'Een gewettigde afwezigheid, of een die valt tijdens een actieve blessure of revalidatie, verlaat de noemer. Het cijfer houdt een blessure buiten de berekening.',
          },
          {
            eyebrow: 'AANKOMST TIJDENS HET SEIZOEN',
            title: 'Geteld vanaf de aankomstdatum',
            desc: 'Activiteiten van vóór de aankomst van de speler blijven buiten de berekening: een versterking in januari begint op 100 %.',
          },
          {
            eyebrow: 'GEANNULEERDE ACTIVITEITEN',
            title: 'Aan beide kanten uitgesloten',
            desc: 'Een geannuleerde activiteit verlaat zowel de teller als de noemer.',
          },
          {
            eyebrow: 'CHECK-INS',
            title: 'Een echte noemer',
            desc: 'Het cijfer baseert zich op de dagen waarop een check-in werkelijk naar die speler is verstuurd, en alleen op die.',
          },
        ],
        foot: 'Onder 5 activiteiten of 5 verstuurde check-ins blijft een speler buiten de “5 spelers om op te volgen”: een percentage berekend op drie regels is geen signaal.',
      },
    ],
  },

  de: {
    meta: {
      title: 'Anwesenheiten & Rückmeldungen | STRIVN',
      description:
        'Ein Aufgebot, fünf mögliche Antworten darunter „Angepasst“, eine Erinnerung, die nur Spieler ohne Antwort erreicht, und drei ehrlich gerechnete Saisonquoten.',
    },
    hero: {
      kicker: 'FUNKTIONEN · MANNSCHAFT',
      title: 'Mit einem Klick aufbieten, der Kalender sammelt Antworten.',
      sub: 'Ein Aufgebot bittet die Spieler, ihre Teilnahme an einem Termin zu bestätigen. Die Antworten laufen in den Kalender, speisen die Anwesenheiten und werden zu Saisonquoten, ohne eine einzige zusätzliche Eingabe.',
      bullets: [
        'Umfang nach Wahl: der ganze aktive Kader oder eine Auswahl',
        'E-Mail, Push und WhatsApp je nach den Kanälen des Spielers',
        'Fünf Status, darunter Angepasst für Teilnahme unter Einschränkung',
        'Gezielte Erinnerung: Nur Spieler ohne Antwort bekommen sie',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Team-Management ansehen', href: '/de/features/communication/' },
      },
      visual: 'rsvp-board',
    },
    sections: [
      {
        kicker: 'DAS VOKABULAR DER ANTWORTEN',
        title: 'Erhalten Sie fünf Antworten, darunter „Angepasst“ für eingeschränkte Teilnahme.',
        body: 'Ein ziehender Oberschenkel, eine laufende Rückkehr, ein Termin, der sich zieht: Die Antwort muss sagen können, was wirklich los ist, zwischen da und nicht da.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'Verfügbar', desc: 'Der Spieler hat zugesagt.' },
          { name: 'Abwesend', desc: 'Der Spieler hat abgesagt.' },
          {
            name: 'Angepasst',
            desc: 'Da, aber eingeschränkt: leichte Verletzung, reduzierte Belastung.',
            chip: { label: 'die Nuance, die zählt', tone: 'orange' },
          },
          { name: 'Unsicher', desc: 'Vorläufige Antwort, weiterhin änderbar.' },
          {
            name: 'Ausstehend',
            desc: 'Antwort ausstehend. Das einzige Ziel der Erinnerung.',
          },
        ],
        note: {
          icon: 'bell',
          label: 'Die Erinnerung zielt nur auf ausstehende Spieler',
          desc: '„Erinnerung senden“ benachrichtigt nur die ausstehenden Spieler; wer bereits geantwortet hat, bleibt unbehelligt. Genau das hält eine Erinnerung beim nächsten Mal glaubwürdig.',
        },
      },
      {
        kicker: 'ÜBER DIE GANZE SAISON',
        title: 'Messen Sie Anwesenheit und Reaktionsfreude jedes Spielers.',
        body: 'Drei Kennzahlen, berechnet aus dem, was Sie ohnehin erheben, ohne Zusatzeingabe.',
        kind: 'stats',
        stats: [
          { value: '91 %', label: 'Anwesenheit Saison, getrennt nach Training und Spiel, damit der auffällt, der nie ein Training verpasst und Spiele auslässt.', tone: 'green' },
          { value: '76 %', label: 'Programmabschluss, nur angezeigt, wenn der Spieler ein aktives Programm hat, und bei Datenmangel leer gelassen.', tone: 'blue' },
          { value: '84 %', label: 'Check-in-Antworten über 30 Tage, mit „—“, solange im Zeitraum kein Check-in versendet wurde.', tone: 'blue' },
        ],
      },
      {
        kicker: 'WAS IN DIE QUOTE EINGEHT',
        title: 'Diese Quote berücksichtigt die Verletzung vom Februar.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'ENTSCHULDIGTE ABWESENHEIT',
            title: 'Außerhalb des Nenners',
            desc: 'Eine entschuldigte Abwesenheit, oder eine während einer aktiven Verletzung oder Reha, verlässt den Nenner. Die Quote hält eine Verletzung aus der Rechnung heraus.',
          },
          {
            eyebrow: 'ANKUNFT IN DER SAISON',
            title: 'Gezählt ab dem Eintrittsdatum',
            desc: 'Termine vor dem Eintritt des Spielers bleiben außerhalb der Rechnung: Ein Winterzugang startet bei 100 %.',
          },
          {
            eyebrow: 'ABGESAGTE TERMINE',
            title: 'Beidseitig ausgeschlossen',
            desc: 'Ein abgesagter Termin verlässt Zähler und Nenner zugleich.',
          },
          {
            eyebrow: 'CHECK-INS',
            title: 'Ein echter Nenner',
            desc: 'Die Quote stützt sich auf die Tage, an denen dem Spieler tatsächlich ein Check-in geschickt wurde, und nur auf diese.',
          },
        ],
        foot: 'Unter 5 Terminen oder 5 versendeten Check-ins bleibt ein Spieler außerhalb der „5 Spieler im Blick“: Ein Prozentwert auf drei Zeilen ist kein Signal.',
      },
    ],
  },

  pt: {
    meta: {
      title: 'Presenças e RSVP | STRIVN',
      description:
        'Uma convocatória, cinco respostas possíveis incluindo «Adaptado», um lembrete que só chega a quem está sem resposta, e três taxas de época calculadas com honestidade.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · EQUIPA',
      title: 'Convoque num clique; as respostas voltam ao calendário.',
      sub: 'Uma convocatória pede aos jogadores que confirmem a presença num evento. As respostas sobem ao calendário, alimentam as presenças, e tornam-se taxas de época sem uma única entrada adicional.',
      bullets: [
        'Alcance à escolha: todo o plantel ativo, ou uma seleção',
        'E-mail, push e WhatsApp conforme os canais do jogador',
        'Cinco estados, incluindo Adaptado para presença com restrição',
        'Lembrete dirigido: só quem está sem resposta o recebe',
      ],
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver a gestão de equipa', href: '/pt/features/communication/' },
      },
      visual: 'rsvp-board',
    },
    sections: [
      {
        kicker: 'O VOCABULÁRIO DAS RESPOSTAS',
        title: 'Receba cinco respostas, incluindo «Adaptado» para presença com restrição.',
        body: 'Um isquiotibial a puxar, um regresso em curso, uma consulta que se prolonga: a resposta tem de poder dizer o que se passa mesmo, entre presente e ausente.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'Disponível', desc: 'O jogador confirmou.' },
          { name: 'Ausente', desc: 'O jogador declinou.' },
          {
            name: 'Adaptado',
            desc: 'Presente, mas com restrição: lesão ligeira, carga reduzida.',
            chip: { label: 'a nuance que conta', tone: 'orange' },
          },
          { name: 'Incerto', desc: 'Resposta provisória, que continua alterável.' },
          {
            name: 'Em espera',
            desc: 'Resposta pendente. O único alvo do lembrete.',
          },
        ],
        note: {
          icon: 'bell',
          label: 'O lembrete visa só os jogadores em espera',
          desc: '«Enviar um lembrete» só notifica os jogadores em espera; quem já respondeu fica sossegado. É isso que mantém um lembrete credível da próxima vez.',
        },
      },
      {
        kicker: 'AO LONGO DA ÉPOCA',
        title: 'Meça a presença e a reatividade de cada jogador.',
        body: 'Três indicadores calculados a partir do que já recolhe, sem entrada adicional.',
        kind: 'stats',
        stats: [
          { value: '91 %', label: 'Presença na época, separada em treinos e jogos, para detetar o assíduo ao treino que falta aos jogos.', tone: 'green' },
          { value: '76 %', label: 'Conclusão do programa, mostrada só se o jogador tiver um programa ativo, e deixada vazia por falta de dados.', tone: 'blue' },
          { value: '84 %', label: 'Respostas aos check-ins em 30 dias, com «—» enquanto nenhum check-in lhe tiver sido enviado no período.', tone: 'blue' },
        ],
      },
      {
        kicker: 'O QUE ENTRA NA TAXA',
        title: 'Esta taxa tem em conta a lesão de fevereiro.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'AUSÊNCIA JUSTIFICADA',
            title: 'Fora do denominador',
            desc: 'Uma ausência justificada, ou ocorrida durante uma lesão ativa ou uma reabilitação, sai do denominador. A taxa deixa uma lesão fora do cálculo.',
          },
          {
            eyebrow: 'CHEGADA A MEIO DA ÉPOCA',
            title: 'Contado desde a data de chegada',
            desc: 'Os eventos anteriores à chegada do jogador ficam fora do cálculo: um reforço de janeiro começa a 100 %.',
          },
          {
            eyebrow: 'EVENTOS CANCELADOS',
            title: 'Excluídos dos dois lados',
            desc: 'Um evento cancelado sai do numerador e do denominador.',
          },
          {
            eyebrow: 'CHECK-INS',
            title: 'Um denominador real',
            desc: 'A taxa baseia-se nos dias em que um check-in foi efetivamente enviado ao jogador, e só nesses.',
          },
        ],
        foot: 'Abaixo de 5 eventos ou 5 check-ins enviados, um jogador fica fora dos «5 jogadores a vigiar»: uma percentagem calculada sobre três linhas não é um sinal.',
      },
    ],
  },

  es: {
    meta: {
      title: 'Asistencias y RSVP | STRIVN',
      description:
        'Una convocatoria, cinco respuestas posibles incluida «Adaptado», un recordatorio que solo llega a quien sigue sin responder, y tres tasas de temporada calculadas con honestidad.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · EQUIPO',
      title: 'Convoca en un clic; las respuestas vuelven al calendario.',
      sub: 'Una convocatoria pide a los jugadores que confirmen su presencia en un evento. Las respuestas suben al calendario, alimentan las asistencias, y se convierten en tasas de temporada sin una sola entrada adicional.',
      bullets: [
        'Alcance a elegir: toda la plantilla activa, o una selección',
        'Correo, push y WhatsApp según los canales del jugador',
        'Cinco estados, incluido Adaptado para presencia con restricción',
        'Recordatorio dirigido: solo lo recibe quien sigue sin responder',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver la gestión de equipo', href: '/es/features/communication/' },
      },
      visual: 'rsvp-board',
    },
    sections: [
      {
        kicker: 'EL VOCABULARIO DE LAS RESPUESTAS',
        title: 'Recibe cinco respuestas, incluida «Adaptado» para presencia con restricción.',
        body: 'Un isquio que tira, una vuelta en curso, una cita que se alarga: la respuesta tiene que poder decir lo que pasa de verdad, entre estar y no estar.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'Disponible', desc: 'El jugador ha confirmado.' },
          { name: 'Ausente', desc: 'El jugador ha declinado.' },
          {
            name: 'Adaptado',
            desc: 'Presente, pero con restricción: lesión leve, carga reducida.',
            chip: { label: 'el matiz que cuenta', tone: 'orange' },
          },
          { name: 'Inseguro', desc: 'Respuesta provisional, que sigue siendo modificable.' },
          {
            name: 'En espera',
            desc: 'Respuesta pendiente. El único objetivo del recordatorio.',
          },
        ],
        note: {
          icon: 'bell',
          label: 'El recordatorio apunta solo a los jugadores en espera',
          desc: '«Enviar un recordatorio» solo notifica a los jugadores en espera; a quien ya ha respondido se le deja tranquilo. Eso es lo que mantiene creíble un recordatorio la próxima vez.',
        },
      },
      {
        kicker: 'A LO LARGO DE LA TEMPORADA',
        title: 'Mide la presencia y la respuesta de cada jugador.',
        body: 'Tres indicadores calculados a partir de lo que ya recoges, sin entrada adicional.',
        kind: 'stats',
        stats: [
          { value: '91 %', label: 'Asistencia de temporada, desglosada en entrenamientos y partidos, para detectar al asiduo al entrenamiento que falta a los partidos.', tone: 'green' },
          { value: '76 %', label: 'Finalización del programa, mostrada solo si el jugador tiene un programa activo, y dejada vacía por falta de datos.', tone: 'blue' },
          { value: '84 %', label: 'Respuestas a check-ins en 30 días, con «—» mientras no se le haya enviado ningún check-in en el periodo.', tone: 'blue' },
        ],
      },
      {
        kicker: 'LO QUE ENTRA EN LA TASA',
        title: 'Esta tasa tiene en cuenta la lesión de febrero.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'AUSENCIA JUSTIFICADA',
            title: 'Fuera del denominador',
            desc: 'Una ausencia justificada, o producida durante una lesión activa o una readaptación, sale del denominador. La tasa deja una lesión fuera del cálculo.',
          },
          {
            eyebrow: 'LLEGADA A MITAD DE TEMPORADA',
            title: 'Contado desde la fecha de llegada',
            desc: 'Los eventos anteriores a la llegada del jugador quedan fuera del cálculo: un refuerzo de enero empieza al 100 %.',
          },
          {
            eyebrow: 'EVENTOS CANCELADOS',
            title: 'Excluidos por ambos lados',
            desc: 'Un evento cancelado sale del numerador y del denominador.',
          },
          {
            eyebrow: 'CHECK-INS',
            title: 'Un denominador real',
            desc: 'La tasa se basa en los días en que se envió efectivamente un check-in al jugador, y solo en esos.',
          },
        ],
        foot: 'Por debajo de 5 eventos o 5 check-ins enviados, un jugador queda fuera de los «5 jugadores a vigilar»: un porcentaje calculado sobre tres líneas no es una señal.',
      },
    ],
  },
};
