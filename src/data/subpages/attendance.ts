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
        'Une convocation, cinq réponses possibles dont « Adapté », une relance qui ne réveille que ceux qui n’ont pas répondu, et trois taux de saison calculés honnêtement.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · ÉQUIPE',
      title: 'La convocation part. Les réponses reviennent seules.',
      sub: 'Une convocation invite les joueurs à confirmer leur présence sur un événement. Les réponses remontent dans le calendrier, alimentent les présences, et deviennent des taux de saison sans une seule saisie supplémentaire.',
      bullets: [
        'Portée au choix : tout l’effectif actif, ou une sélection',
        'E-mail, push et WhatsApp selon les canaux du joueur',
        'Cinq statuts, dont Adapté pour une présence sous restriction',
        'Relance ciblée : ceux qui ont répondu ne reçoivent rien',
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
        title: 'Cinq réponses. Dont « Adapté ».',
        body: 'Un joueur n’est pas seulement là ou pas là. Un ischio qui tire, une reprise en cours, un rendez-vous qui déborde : la réponse doit pouvoir dire ce qui se passe vraiment.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'Présent', desc: 'Le joueur a confirmé.' },
          { name: 'Absent', desc: 'Le joueur a décliné.' },
          {
            name: 'Adapté',
            desc: 'Présent, mais sous restriction — blessure légère, charge réduite.',
            chip: { label: 'la nuance qui compte', tone: 'orange' },
          },
          { name: 'Incertain', desc: 'Réponse provisoire, qui reste modifiable.' },
          {
            name: 'En attente',
            desc: 'Pas encore de réponse. C’est la seule cible de la relance.',
          },
        ],
        note: {
          icon: 'bell',
          label: 'La relance ne réveille personne pour rien',
          desc: '« Envoyer un rappel » ne notifie que les joueurs en attente. Ceux qui ont déjà répondu ne reçoivent rien — c’est ce qui fait qu’une relance reste crédible la fois d’après.',
        },
      },
      {
        kicker: 'SUR TOUTE LA SAISON',
        title: 'Ce joueur est-il présent, et réactif ?',
        body: 'Trois indicateurs calculés à partir de ce que vous collectez déjà — aucune saisie supplémentaire, aucun tableur à tenir.',
        kind: 'stats',
        stats: [
          { value: '91 %', label: 'Présence saison — détaillée en entraînements et en matchs, pour repérer l’assidu à l’entraînement qui manque les matchs.', tone: 'green' },
          { value: '76 %', label: 'Complétion programme — n’apparaît que si le joueur a un programme actif, jamais affichée à 0 % faute de données.', tone: 'blue' },
          { value: '84 %', label: 'Réponses check-ins sur 30 jours — affiche « — » tant qu’aucun check-in ne lui a été envoyé sur la période.', tone: 'blue' },
        ],
      },
      {
        kicker: 'CE QUI COMPTE, ET CE QUI NE COMPTE PAS',
        title: 'Des pourcentages justes, pas seulement bruts.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'ABSENCE EXCUSÉE',
            title: 'Non pénalisante',
            desc: 'Une absence motivée — ou survenue pendant une blessure active ou une rééducation — sort du dénominateur. Le taux ne punit pas un joueur d’avoir été blessé.',
          },
          {
            eyebrow: 'ARRIVÉE EN COURS',
            title: 'Rien avant la date d’arrivée',
            desc: 'Les événements antérieurs à l’arrivée du joueur ne comptent jamais contre lui. Un renfort de janvier ne démarre pas à 40 %.',
          },
          {
            eyebrow: 'ÉVÉNEMENTS ANNULÉS',
            title: 'Exclus des deux côtés',
            desc: 'Un événement annulé ne pèse dans aucun calcul, ni au numérateur ni au dénominateur.',
          },
          {
            eyebrow: 'CHECK-INS',
            title: 'Dénominateur réel',
            desc: 'Le taux se base sur les jours où un check-in a effectivement été envoyé au joueur, pas sur le calendrier.',
          },
        ],
        foot: 'Sous 5 événements ou 5 check-ins envoyés, un joueur n’entre pas dans les « 5 joueurs à surveiller » : un pourcentage calculé sur trois lignes n’est pas un signal.',
      },
    ],
  },

  en: {
    meta: {
      title: 'Attendance & RSVP | STRIVN',
      description:
        'One call-up, five possible answers including “Adapted”, a reminder that only wakes those who have not replied, and three season rates computed honestly.',
    },
    hero: {
      kicker: 'FEATURES · TEAM',
      title: 'The call-up goes out. The answers come back on their own.',
      sub: 'A call-up asks players to confirm they will be at an event. The answers flow into the calendar, feed attendance, and become season rates without a single extra entry.',
      bullets: [
        'Scope of your choice: the whole active squad, or a selection',
        'Email, push and WhatsApp, per the player’s channels',
        'Five statuses, including Adapted for attendance under restriction',
        'Targeted reminders: those who answered receive nothing',
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
        title: 'Five answers. One of them “Adapted”.',
        body: 'A player is not only there or not there. A tight hamstring, a comeback in progress, an appointment running long: the answer has to be able to say what is actually happening.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'Available', desc: 'The player has confirmed.' },
          { name: 'Unavailable', desc: 'The player has declined.' },
          {
            name: 'Adapted',
            desc: 'There, but under restriction — a minor injury, reduced load.',
            chip: { label: 'the nuance that counts', tone: 'orange' },
          },
          { name: 'Unsure', desc: 'A provisional answer, still editable.' },
          {
            name: 'Pending',
            desc: 'No answer yet. The only target the reminder has.',
          },
        ],
        note: {
          icon: 'bell',
          label: 'The reminder wakes nobody for nothing',
          desc: '“Send a reminder” notifies only the pending players. Those who have already answered receive nothing — which is what keeps a reminder credible the next time.',
        },
      },
      {
        kicker: 'ACROSS THE SEASON',
        title: 'Is this player there, and responsive?',
        body: 'Three indicators computed from what you already collect — no extra entry, no spreadsheet to keep.',
        kind: 'stats',
        stats: [
          { value: '91 %', label: 'Season attendance — split between training and matches, so you spot the player who never misses training and misses matches.', tone: 'green' },
          { value: '76 %', label: 'Program completion — only appears if the player has an active program, never shown as 0 % for lack of data.', tone: 'blue' },
          { value: '84 %', label: 'Check-in responses over 30 days — shows “—” until a check-in has actually been sent in the period.', tone: 'blue' },
        ],
      },
      {
        kicker: 'WHAT COUNTS, AND WHAT DOES NOT',
        title: 'Fair percentages, not just raw ones.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'EXCUSED ABSENCE',
            title: 'Not penalising',
            desc: 'An excused absence — or one during an active injury or a rehab — leaves the denominator. The rate does not punish a player for having been injured.',
          },
          {
            eyebrow: 'MID-SEASON ARRIVAL',
            title: 'Nothing before the join date',
            desc: 'Events before a player joined never count against them. A January signing does not start at 40 %.',
          },
          {
            eyebrow: 'CANCELLED EVENTS',
            title: 'Excluded from both sides',
            desc: 'A cancelled event weighs in no calculation, neither in the numerator nor in the denominator.',
          },
          {
            eyebrow: 'CHECK-INS',
            title: 'A real denominator',
            desc: 'The rate is based on the days a check-in was actually sent to that player, not on the calendar.',
          },
        ],
        foot: 'Under 5 events or 5 check-ins sent, a player does not enter the “5 players to watch”: a percentage computed on three rows is not a signal.',
      },
    ],
  },

  nl: {
    meta: {
      title: 'Aanwezigheden & RSVP | STRIVN',
      description:
        'Eén oproeping, vijf mogelijke antwoorden waaronder “Aangepast”, een herinnering die alleen de niet-antwoorders wekt, en drie eerlijk berekende seizoenscijfers.',
    },
    hero: {
      kicker: 'FUNCTIES · PLOEG',
      title: 'De oproeping vertrekt. De antwoorden komen vanzelf terug.',
      sub: 'Een oproeping vraagt spelers hun aanwezigheid op een activiteit te bevestigen. De antwoorden komen in de kalender, voeden de aanwezigheden, en worden seizoenscijfers zonder één extra invoer.',
      bullets: [
        'Bereik naar keuze: de hele actieve kern, of een selectie',
        'E-mail, push en WhatsApp volgens de kanalen van de speler',
        'Vijf statussen, waaronder Aangepast voor aanwezigheid met beperking',
        'Gerichte herinnering: wie geantwoord heeft krijgt niets',
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
        title: 'Vijf antwoorden. Waaronder “Aangepast”.',
        body: 'Een speler is niet enkel er of niet er. Een trekkende hamstring, een revalidatie die loopt, een afspraak die uitloopt: het antwoord moet kunnen zeggen wat er echt aan de hand is.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'Beschikbaar', desc: 'De speler heeft bevestigd.' },
          { name: 'Afwezig', desc: 'De speler heeft afgezegd.' },
          {
            name: 'Aangepast',
            desc: 'Aanwezig, maar met beperking — lichte blessure, verlaagde belasting.',
            chip: { label: 'de nuance die telt', tone: 'orange' },
          },
          { name: 'Onzeker', desc: 'Voorlopig antwoord, dat aanpasbaar blijft.' },
          {
            name: 'In afwachting',
            desc: 'Nog geen antwoord. Het enige doelwit van de herinnering.',
          },
        ],
        note: {
          icon: 'bell',
          label: 'De herinnering wekt niemand voor niets',
          desc: '“Een herinnering sturen” verwittigt alleen de spelers in afwachting. Wie al geantwoord heeft krijgt niets — en daardoor blijft een herinnering de volgende keer geloofwaardig.',
        },
      },
      {
        kicker: 'OVER HET HELE SEIZOEN',
        title: 'Is deze speler aanwezig, en reactief?',
        body: 'Drie indicatoren berekend op wat je al verzamelt — geen extra invoer, geen rekenblad bij te houden.',
        kind: 'stats',
        stats: [
          { value: '91 %', label: 'Aanwezigheid seizoen — opgesplitst in trainingen en wedstrijden, om de trouwe trainer te herkennen die wedstrijden mist.', tone: 'green' },
          { value: '76 %', label: 'Programmavoltooiing — verschijnt alleen als de speler een actief programma heeft, nooit op 0 % bij gebrek aan data.', tone: 'blue' },
          { value: '84 %', label: 'Check-in-antwoorden over 30 dagen — toont “—” zolang er geen check-in naar hem verstuurd is in die periode.', tone: 'blue' },
        ],
      },
      {
        kicker: 'WAT MEETELT, EN WAT NIET',
        title: 'Eerlijke percentages, niet alleen ruwe.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'GEWETTIGDE AFWEZIGHEID',
            title: 'Niet bestraffend',
            desc: 'Een gewettigde afwezigheid — of een die valt tijdens een actieve blessure of revalidatie — verlaat de noemer. Het cijfer straft een speler niet omdat hij geblesseerd was.',
          },
          {
            eyebrow: 'AANKOMST TIJDENS HET SEIZOEN',
            title: 'Niets voor de aankomstdatum',
            desc: 'Activiteiten van vóór de aankomst van de speler tellen nooit tegen hem. Een versterking in januari begint niet op 40 %.',
          },
          {
            eyebrow: 'GEANNULEERDE ACTIVITEITEN',
            title: 'Aan beide kanten uitgesloten',
            desc: 'Een geannuleerde activiteit weegt in geen enkele berekening, noch in de teller noch in de noemer.',
          },
          {
            eyebrow: 'CHECK-INS',
            title: 'Een echte noemer',
            desc: 'Het cijfer baseert zich op de dagen waarop een check-in werkelijk naar die speler is verstuurd, niet op de kalender.',
          },
        ],
        foot: 'Onder 5 activiteiten of 5 verstuurde check-ins komt een speler niet in de “5 spelers om op te volgen”: een percentage berekend op drie regels is geen signaal.',
      },
    ],
  },

  de: {
    meta: {
      title: 'Anwesenheiten & Rückmeldungen | STRIVN',
      description:
        'Ein Aufgebot, fünf mögliche Antworten darunter „Angepasst“, eine Erinnerung, die nur die Ausstehenden weckt, und drei ehrlich gerechnete Saisonquoten.',
    },
    hero: {
      kicker: 'FUNKTIONEN · MANNSCHAFT',
      title: 'Das Aufgebot geht raus. Die Antworten kommen von selbst zurück.',
      sub: 'Ein Aufgebot bittet die Spieler, ihre Teilnahme an einem Termin zu bestätigen. Die Antworten laufen in den Kalender, speisen die Anwesenheiten und werden zu Saisonquoten — ohne eine einzige zusätzliche Eingabe.',
      bullets: [
        'Umfang nach Wahl: der ganze aktive Kader oder eine Auswahl',
        'E-Mail, Push und WhatsApp je nach den Kanälen des Spielers',
        'Fünf Status, darunter Angepasst für Teilnahme unter Einschränkung',
        'Gezielte Erinnerung: Wer geantwortet hat, bekommt nichts',
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
        title: 'Fünf Antworten. Eine davon „Angepasst“.',
        body: 'Ein Spieler ist nicht nur da oder nicht da. Ein ziehender Oberschenkel, eine laufende Rückkehr, ein Termin, der sich zieht: Die Antwort muss sagen können, was wirklich los ist.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'Verfügbar', desc: 'Der Spieler hat zugesagt.' },
          { name: 'Abwesend', desc: 'Der Spieler hat abgesagt.' },
          {
            name: 'Angepasst',
            desc: 'Da, aber eingeschränkt — leichte Verletzung, reduzierte Belastung.',
            chip: { label: 'die Nuance, die zählt', tone: 'orange' },
          },
          { name: 'Unsicher', desc: 'Vorläufige Antwort, weiterhin änderbar.' },
          {
            name: 'Ausstehend',
            desc: 'Noch keine Antwort. Das einzige Ziel der Erinnerung.',
          },
        ],
        note: {
          icon: 'bell',
          label: 'Die Erinnerung weckt niemanden ohne Grund',
          desc: '„Erinnerung senden“ benachrichtigt nur die ausstehenden Spieler. Wer bereits geantwortet hat, bekommt nichts — und genau das hält eine Erinnerung beim nächsten Mal glaubwürdig.',
        },
      },
      {
        kicker: 'ÜBER DIE GANZE SAISON',
        title: 'Ist dieser Spieler da — und antwortet er?',
        body: 'Drei Kennzahlen, berechnet aus dem, was Sie ohnehin erheben — keine Zusatzeingabe, keine Tabelle zu führen.',
        kind: 'stats',
        stats: [
          { value: '91 %', label: 'Anwesenheit Saison — getrennt nach Training und Spiel, damit der auffällt, der nie ein Training verpasst und Spiele auslässt.', tone: 'green' },
          { value: '76 %', label: 'Programmabschluss — erscheint nur, wenn der Spieler ein aktives Programm hat, nie als 0 % aus Datenmangel.', tone: 'blue' },
          { value: '84 %', label: 'Check-in-Antworten über 30 Tage — zeigt „—“, solange im Zeitraum kein Check-in versendet wurde.', tone: 'blue' },
        ],
      },
      {
        kicker: 'WAS ZÄHLT UND WAS NICHT',
        title: 'Faire Prozentwerte, nicht bloß rohe.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'ENTSCHULDIGTE ABWESENHEIT',
            title: 'Nicht strafend',
            desc: 'Eine entschuldigte Abwesenheit — oder eine während einer aktiven Verletzung oder Reha — verlässt den Nenner. Die Quote bestraft niemanden dafür, verletzt gewesen zu sein.',
          },
          {
            eyebrow: 'ANKUNFT IN DER SAISON',
            title: 'Nichts vor dem Eintrittsdatum',
            desc: 'Termine vor dem Eintritt des Spielers zählen nie gegen ihn. Ein Winterzugang startet nicht bei 40 %.',
          },
          {
            eyebrow: 'ABGESAGTE TERMINE',
            title: 'Beidseitig ausgeschlossen',
            desc: 'Ein abgesagter Termin wiegt in keiner Rechnung, weder im Zähler noch im Nenner.',
          },
          {
            eyebrow: 'CHECK-INS',
            title: 'Ein echter Nenner',
            desc: 'Die Quote stützt sich auf die Tage, an denen dem Spieler tatsächlich ein Check-in geschickt wurde, nicht auf den Kalender.',
          },
        ],
        foot: 'Unter 5 Terminen oder 5 versendeten Check-ins fällt ein Spieler nicht in die „5 Spieler im Blick“: Ein Prozentwert auf drei Zeilen ist kein Signal.',
      },
    ],
  },

  pt: {
    meta: {
      title: 'Presenças e RSVP | STRIVN',
      description:
        'Uma convocatória, cinco respostas possíveis incluindo «Adaptado», um lembrete que só acorda quem não respondeu, e três taxas de época calculadas com honestidade.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · EQUIPA',
      title: 'A convocatória sai. As respostas voltam sozinhas.',
      sub: 'Uma convocatória pede aos jogadores que confirmem a presença num evento. As respostas sobem ao calendário, alimentam as presenças, e tornam-se taxas de época sem uma única entrada adicional.',
      bullets: [
        'Alcance à escolha: todo o plantel ativo, ou uma seleção',
        'E-mail, push e WhatsApp conforme os canais do jogador',
        'Cinco estados, incluindo Adaptado para presença com restrição',
        'Lembrete dirigido: quem respondeu não recebe nada',
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
        title: 'Cinco respostas. Uma delas «Adaptado».',
        body: 'Um jogador não está apenas presente ou ausente. Um isquiotibial a puxar, um regresso em curso, uma consulta que se prolonga: a resposta tem de poder dizer o que se passa mesmo.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'Disponível', desc: 'O jogador confirmou.' },
          { name: 'Ausente', desc: 'O jogador declinou.' },
          {
            name: 'Adaptado',
            desc: 'Presente, mas com restrição — lesão ligeira, carga reduzida.',
            chip: { label: 'a nuance que conta', tone: 'orange' },
          },
          { name: 'Incerto', desc: 'Resposta provisória, que continua alterável.' },
          {
            name: 'Em espera',
            desc: 'Ainda sem resposta. O único alvo do lembrete.',
          },
        ],
        note: {
          icon: 'bell',
          label: 'O lembrete não acorda ninguém à toa',
          desc: '«Enviar um lembrete» só notifica os jogadores em espera. Quem já respondeu não recebe nada — e é isso que mantém um lembrete credível da próxima vez.',
        },
      },
      {
        kicker: 'AO LONGO DA ÉPOCA',
        title: 'Este jogador está presente, e é reativo?',
        body: 'Três indicadores calculados a partir do que já recolhe — nenhuma entrada adicional, nenhuma folha de cálculo a manter.',
        kind: 'stats',
        stats: [
          { value: '91 %', label: 'Presença na época — separada em treinos e jogos, para detetar o assíduo ao treino que falta aos jogos.', tone: 'green' },
          { value: '76 %', label: 'Conclusão do programa — só aparece se o jogador tiver um programa ativo, nunca mostrada a 0 % por falta de dados.', tone: 'blue' },
          { value: '84 %', label: 'Respostas aos check-ins em 30 dias — mostra «—» enquanto nenhum check-in lhe tiver sido enviado no período.', tone: 'blue' },
        ],
      },
      {
        kicker: 'O QUE CONTA, E O QUE NÃO CONTA',
        title: 'Percentagens justas, não apenas brutas.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'AUSÊNCIA JUSTIFICADA',
            title: 'Não penalizadora',
            desc: 'Uma ausência justificada — ou ocorrida durante uma lesão ativa ou uma reabilitação — sai do denominador. A taxa não pune um jogador por ter estado lesionado.',
          },
          {
            eyebrow: 'CHEGADA A MEIO DA ÉPOCA',
            title: 'Nada antes da data de chegada',
            desc: 'Os eventos anteriores à chegada do jogador nunca contam contra ele. Um reforço de janeiro não começa a 40 %.',
          },
          {
            eyebrow: 'EVENTOS CANCELADOS',
            title: 'Excluídos dos dois lados',
            desc: 'Um evento cancelado não pesa em nenhum cálculo, nem no numerador nem no denominador.',
          },
          {
            eyebrow: 'CHECK-INS',
            title: 'Um denominador real',
            desc: 'A taxa baseia-se nos dias em que um check-in foi efetivamente enviado ao jogador, não no calendário.',
          },
        ],
        foot: 'Abaixo de 5 eventos ou 5 check-ins enviados, um jogador não entra nos «5 jogadores a vigiar»: uma percentagem calculada sobre três linhas não é um sinal.',
      },
    ],
  },

  es: {
    meta: {
      title: 'Asistencias y RSVP | STRIVN',
      description:
        'Una convocatoria, cinco respuestas posibles incluida «Adaptado», un recordatorio que solo despierta a quien no ha respondido, y tres tasas de temporada calculadas con honestidad.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · EQUIPO',
      title: 'La convocatoria sale. Las respuestas vuelven solas.',
      sub: 'Una convocatoria pide a los jugadores que confirmen su presencia en un evento. Las respuestas suben al calendario, alimentan las asistencias, y se convierten en tasas de temporada sin una sola entrada adicional.',
      bullets: [
        'Alcance a elegir: toda la plantilla activa, o una selección',
        'Correo, push y WhatsApp según los canales del jugador',
        'Cinco estados, incluido Adaptado para presencia con restricción',
        'Recordatorio dirigido: quien ha respondido no recibe nada',
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
        title: 'Cinco respuestas. Una de ellas «Adaptado».',
        body: 'Un jugador no solo está o no está. Un isquio que tira, una vuelta en curso, una cita que se alarga: la respuesta tiene que poder decir lo que pasa de verdad.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'Disponible', desc: 'El jugador ha confirmado.' },
          { name: 'Ausente', desc: 'El jugador ha declinado.' },
          {
            name: 'Adaptado',
            desc: 'Presente, pero con restricción — lesión leve, carga reducida.',
            chip: { label: 'el matiz que cuenta', tone: 'orange' },
          },
          { name: 'Inseguro', desc: 'Respuesta provisional, que sigue siendo modificable.' },
          {
            name: 'En espera',
            desc: 'Todavía sin respuesta. El único objetivo del recordatorio.',
          },
        ],
        note: {
          icon: 'bell',
          label: 'El recordatorio no despierta a nadie por nada',
          desc: '«Enviar un recordatorio» solo notifica a los jugadores en espera. Quien ya ha respondido no recibe nada — y eso es lo que mantiene creíble un recordatorio la próxima vez.',
        },
      },
      {
        kicker: 'A LO LARGO DE LA TEMPORADA',
        title: '¿Está este jugador presente, y responde?',
        body: 'Tres indicadores calculados a partir de lo que ya recoges — ninguna entrada adicional, ninguna hoja de cálculo que mantener.',
        kind: 'stats',
        stats: [
          { value: '91 %', label: 'Asistencia de temporada — desglosada en entrenamientos y partidos, para detectar al asiduo al entrenamiento que falta a los partidos.', tone: 'green' },
          { value: '76 %', label: 'Finalización del programa — solo aparece si el jugador tiene un programa activo, nunca se muestra al 0 % por falta de datos.', tone: 'blue' },
          { value: '84 %', label: 'Respuestas a check-ins en 30 días — muestra «—» mientras no se le haya enviado ningún check-in en el periodo.', tone: 'blue' },
        ],
      },
      {
        kicker: 'LO QUE CUENTA, Y LO QUE NO',
        title: 'Porcentajes justos, no solo brutos.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'AUSENCIA JUSTIFICADA',
            title: 'No penalizadora',
            desc: 'Una ausencia justificada — o producida durante una lesión activa o una readaptación — sale del denominador. La tasa no castiga a un jugador por haber estado lesionado.',
          },
          {
            eyebrow: 'LLEGADA A MITAD DE TEMPORADA',
            title: 'Nada antes de la fecha de llegada',
            desc: 'Los eventos anteriores a la llegada del jugador nunca cuentan en su contra. Un refuerzo de enero no empieza al 40 %.',
          },
          {
            eyebrow: 'EVENTOS CANCELADOS',
            title: 'Excluidos por ambos lados',
            desc: 'Un evento cancelado no pesa en ningún cálculo, ni en el numerador ni en el denominador.',
          },
          {
            eyebrow: 'CHECK-INS',
            title: 'Un denominador real',
            desc: 'La tasa se basa en los días en que se envió efectivamente un check-in al jugador, no en el calendario.',
          },
        ],
        foot: 'Por debajo de 5 eventos o 5 check-ins enviados, un jugador no entra en los «5 jugadores a vigilar»: un porcentaje calculado sobre tres líneas no es una señal.',
      },
    ],
  },
};
