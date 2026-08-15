/**
 * Reports, AI & BI — four surfaces ordered by horizon, and a generator that
 * keeps the question rather than the answer. Nothing here asks for data entry
 * of its own; that is the page's whole promise.
 */
import type { SubpageLocales } from './types';

export const reports: SubpageLocales = {
  fr: {
    meta: {
      title: 'Rapports, IA & BI | STRIVN',
      description:
        'Signaux du matin, briefing avant la séance, rapports enregistrés et tableaux de bord composés. Aucune saisie spécifique : tout part des données déjà là.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · INTELLIGENCE',
      title: 'Un rapport retient la question, pas la réponse.',
      sub: 'Aucune saisie spécifique : les rapports se nourrissent de la feuille de match, du check-in, de la charge et des imports GPS. Vous enregistrez une question, et elle se rejoue sur les données du jour à chaque ouverture.',
      bullets: [
        'Sélection / forme : qui est en forme, qui aligner',
        'Générateur : sujet, statistiques, forme et comparaison',
        'Tableaux de bord composés, rejoués à chaque ouverture',
        'Assistant qui pose une question plutôt que de deviner',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir la charge', href: '/fr/features/training-load/' },
      },
      visual: 'report-table',
    },
    sections: [
      {
        kicker: 'DU SIGNAL À LA DÉCISION',
        title: 'Avant le café, avant la séance, avant la réunion.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: 'LE MATIN',
            title: 'Signaux & alertes',
            desc: 'Votre boîte de réception du jour : les joueurs qui demandent votre attention, en une lecture, avant le café.',
          },
          {
            num: 'AVANT LA SÉANCE',
            title: 'Briefing IA',
            desc: 'Les décisions du jour : chaque joueur rangé dans une case — s’entraîne, adapté, repos, absent, non convoqué, inconnu. « Inconnu » est une réponse, pas un trou.',
          },
          {
            num: 'SUR LA PÉRIODE',
            title: 'Rapports',
            desc: 'Sélection / forme pour savoir qui aligner, Charge & disponibilité côté préparation. Enregistrés une fois, rejoués ensuite.',
          },
          {
            num: 'À VOUS',
            title: 'Tableaux de bord',
            desc: 'Vos propres vues : les chiffres que vous regardez vraiment, disposés comme vous les lisez.',
          },
        ],
      },
      {
        kicker: 'LA PAGE LIBRE',
        title: 'Sur qui, quelles statistiques, à quoi les comparer.',
        body: 'Le générateur assemble un rapport en trois choix : sur qui, quelles statistiques, et à quoi les comparer. Ce qui est enregistré, c’est la question — les chiffres, eux, sont toujours ceux du jour.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'SUJET',
            title: 'Équipe, joueurs, adversaire',
            desc: 'Le périmètre du rapport. Un même jeu de statistiques ne raconte pas la même chose selon qui il décrit.',
          },
          {
            eyebrow: 'STATISTIQUES',
            title: 'Six familles, cochées à la carte',
            desc: 'Performance en match, temps de jeu, charge, bien-être, GPS, disponibilité. Vous ne prenez que ce que vous lisez.',
          },
          {
            eyebrow: 'COMPARAISON',
            title: 'Une forme et un repère',
            desc: 'Les cinq derniers matchs, la campagne précédente, le reste du groupe. Un chiffre seul ne décide de rien.',
          },
        ],
        note: {
          icon: 'circle-alert',
          label: 'L’échantillon court est marqué, pas caché',
          desc: 'Une colonne dérivée d’un échantillon trop court affiche « * » plutôt qu’un chiffre confortable, et ses valeurs dérivées restent vides. Un rapport qui invente une moyenne sur deux matchs est pire qu’un rapport incomplet.',
        },
      },
    ],
  },

  en: {
    meta: {
      title: 'Reports, AI & BI | STRIVN',
      description:
        'Morning signals, a pre-session briefing, saved reports and composed dashboards. No dedicated data entry: everything starts from data already there.',
    },
    hero: {
      kicker: 'FEATURES · INTELLIGENCE',
      title: 'A report keeps the question, not the answer.',
      sub: 'No dedicated data entry: reports feed on the team sheet, the check-in, the load and the GPS imports. You save a question, and it replays on today’s data every time it opens.',
      bullets: [
        'Selection / form: who is in form, who to pick',
        'Generator: subject, statistics, form and comparison',
        'Composed dashboards, replayed on every open',
        'An assistant that asks a question rather than guessing',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See training load', href: '/en/features/training-load/' },
      },
      visual: 'report-table',
    },
    sections: [
      {
        kicker: 'FROM SIGNAL TO DECISION',
        title: 'Before the coffee, before the session, before the meeting.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: 'THE MORNING',
            title: 'Signals & alerts',
            desc: 'Your inbox for the day: the players who need your attention, in one read, before the coffee.',
          },
          {
            num: 'BEFORE THE SESSION',
            title: 'AI briefing',
            desc: 'Today’s decisions: every player sorted into one call — training, adapted, resting, absent, not called up, unknown. “Unknown” is an answer, not a hole.',
          },
          {
            num: 'OVER THE PERIOD',
            title: 'Reports',
            desc: 'Selection / form for who to pick, Load & availability on the preparation side. Saved once, replayed after.',
          },
          {
            num: 'YOURS',
            title: 'Dashboards',
            desc: 'Your own views: the figures you actually look at, laid out the way you read them.',
          },
        ],
      },
      {
        kicker: 'THE BLANK PAGE',
        title: 'About whom, which statistics, against what.',
        body: 'The generator assembles a report from three choices: about whom, which statistics, and what to compare them against. What gets saved is the question — the figures are always today’s.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'SUBJECT',
            title: 'Team, players, opposition',
            desc: 'The scope of the report. The same set of statistics does not say the same thing depending on who it describes.',
          },
          {
            eyebrow: 'STATISTICS',
            title: 'Six families, ticked à la carte',
            desc: 'Match performance, minutes, load, wellbeing, GPS, availability. You take only what you read.',
          },
          {
            eyebrow: 'COMPARISON',
            title: 'A shape and a reference',
            desc: 'The last five matches, the previous campaign, the rest of the squad. A figure on its own decides nothing.',
          },
        ],
        note: {
          icon: 'circle-alert',
          label: 'A short sample is marked, not hidden',
          desc: 'A column derived from too short a sample shows “*” rather than a comfortable figure, and its derived values stay empty. A report that invents an average over two matches is worse than an incomplete one.',
        },
      },
    ],
  },

  nl: {
    meta: {
      title: 'Rapporten, AI & BI | STRIVN',
      description:
        'Signalen ’s ochtends, een briefing voor de training, bewaarde rapporten en samengestelde dashboards. Geen aparte invoer: alles vertrekt van wat er al is.',
    },
    hero: {
      kicker: 'FUNCTIES · INTELLIGENTIE',
      title: 'Een rapport bewaart de vraag, niet het antwoord.',
      sub: 'Geen aparte invoer: de rapporten voeden zich met het wedstrijdblad, de check-in, de belasting en de GPS-imports. Je bewaart een vraag, en ze wordt bij elke opening opnieuw op de data van vandaag gedraaid.',
      bullets: [
        'Selectie / vorm: wie in vorm is, wie op te stellen',
        'Generator: onderwerp, statistieken, vorm en vergelijking',
        'Samengestelde dashboards, opnieuw gedraaid bij elke opening',
        'Assistent die een vraag stelt in plaats van te gissen',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Belasting bekijken', href: '/nl/features/training-load/' },
      },
      visual: 'report-table',
    },
    sections: [
      {
        kicker: 'VAN SIGNAAL NAAR BESLISSING',
        title: 'Voor de koffie, voor de training, voor de vergadering.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: '’S OCHTENDS',
            title: 'Signalen & waarschuwingen',
            desc: 'Je postvak van de dag: de spelers die je aandacht vragen, in één blik, voor de koffie.',
          },
          {
            num: 'VOOR DE TRAINING',
            title: 'AI-briefing',
            desc: 'De beslissingen van de dag: elke speler in één vakje — traint, aangepast, rust, afwezig, niet opgeroepen, onbekend. “Onbekend” is een antwoord, geen gat.',
          },
          {
            num: 'OVER DE PERIODE',
            title: 'Rapporten',
            desc: 'Selectie / vorm om te weten wie op te stellen, Belasting & beschikbaarheid aan de voorbereidingskant. Eén keer bewaard, daarna opnieuw gedraaid.',
          },
          {
            num: 'VAN JOU',
            title: 'Dashboards',
            desc: 'Je eigen weergaven: de cijfers waar je echt naar kijkt, geschikt zoals jij ze leest.',
          },
        ],
      },
      {
        kicker: 'DE VRIJE PAGINA',
        title: 'Over wie, welke statistieken, waarmee vergeleken.',
        body: 'De generator zet een rapport in elkaar met drie keuzes: over wie, welke statistieken, en waarmee te vergelijken. Wat bewaard wordt is de vraag — de cijfers zijn altijd die van vandaag.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'ONDERWERP',
            title: 'Ploeg, spelers, tegenstander',
            desc: 'De reikwijdte van het rapport. Dezelfde set statistieken vertelt niet hetzelfde naargelang wie ze beschrijft.',
          },
          {
            eyebrow: 'STATISTIEKEN',
            title: 'Zes families, à la carte aangevinkt',
            desc: 'Wedstrijdprestatie, speelminuten, belasting, welzijn, GPS, beschikbaarheid. Je neemt alleen wat je leest.',
          },
          {
            eyebrow: 'VERGELIJKING',
            title: 'Een vorm en een ijkpunt',
            desc: 'De laatste vijf wedstrijden, de vorige campagne, de rest van de groep. Een cijfer alleen beslist niets.',
          },
        ],
        note: {
          icon: 'circle-alert',
          label: 'Een kleine steekproef wordt gemarkeerd, niet verborgen',
          desc: 'Een kolom afgeleid uit een te kleine steekproef toont “*” in plaats van een comfortabel cijfer, en haar afgeleide waarden blijven leeg. Een rapport dat een gemiddelde over twee wedstrijden verzint is erger dan een onvolledig rapport.',
        },
      },
    ],
  },

  de: {
    meta: {
      title: 'Berichte, KI & BI | STRIVN',
      description:
        'Signale am Morgen, ein Briefing vor der Einheit, gespeicherte Berichte und zusammengestellte Dashboards. Keine eigene Eingabe: alles beginnt bei vorhandenen Daten.',
    },
    hero: {
      kicker: 'FUNKTIONEN · INTELLIGENZ',
      title: 'Ein Bericht behält die Frage, nicht die Antwort.',
      sub: 'Keine eigene Eingabe: Die Berichte speisen sich aus dem Spielberichtsbogen, dem Check-in, der Belastung und den GPS-Importen. Sie speichern eine Frage, und sie läuft bei jedem Öffnen neu auf den heutigen Daten.',
      bullets: [
        'Auswahl / Form: wer in Form ist, wen man aufstellt',
        'Generator: Thema, Statistiken, Form und Vergleich',
        'Zusammengestellte Dashboards, bei jedem Öffnen neu gerechnet',
        'Ein Assistent, der eine Frage stellt statt zu raten',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Belastung ansehen', href: '/de/features/training-load/' },
      },
      visual: 'report-table',
    },
    sections: [
      {
        kicker: 'VOM SIGNAL ZUR ENTSCHEIDUNG',
        title: 'Vor dem Kaffee, vor der Einheit, vor der Sitzung.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: 'AM MORGEN',
            title: 'Signale & Warnungen',
            desc: 'Ihr Posteingang des Tages: die Spieler, die Ihre Aufmerksamkeit brauchen, in einem Blick, vor dem Kaffee.',
          },
          {
            num: 'VOR DER EINHEIT',
            title: 'KI-Briefing',
            desc: 'Die Entscheidungen des Tages: jeder Spieler in genau einer Kategorie — trainiert, angepasst, Ruhe, abwesend, nicht aufgeboten, unbekannt. „Unbekannt“ ist eine Antwort, keine Lücke.',
          },
          {
            num: 'ÜBER DEN ZEITRAUM',
            title: 'Berichte',
            desc: 'Auswahl / Form für die Aufstellung, Belastung & Verfügbarkeit auf der Vorbereitungsseite. Einmal gespeichert, danach neu gerechnet.',
          },
          {
            num: 'IHRE',
            title: 'Dashboards',
            desc: 'Ihre eigenen Ansichten: die Zahlen, die Sie wirklich ansehen, angeordnet, wie Sie sie lesen.',
          },
        ],
      },
      {
        kicker: 'DIE FREIE SEITE',
        title: 'Über wen, welche Statistiken, verglichen womit.',
        body: 'Der Generator baut einen Bericht aus drei Entscheidungen: über wen, welche Statistiken und wogegen verglichen wird. Gespeichert wird die Frage — die Zahlen sind immer die von heute.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'THEMA',
            title: 'Mannschaft, Spieler, Gegner',
            desc: 'Der Umfang des Berichts. Derselbe Satz Statistiken erzählt nicht dasselbe, je nachdem, wen er beschreibt.',
          },
          {
            eyebrow: 'STATISTIKEN',
            title: 'Sechs Familien, à la carte gewählt',
            desc: 'Spielleistung, Einsatzzeit, Belastung, Wohlbefinden, GPS, Verfügbarkeit. Sie nehmen nur, was Sie lesen.',
          },
          {
            eyebrow: 'VERGLEICH',
            title: 'Eine Form und ein Bezug',
            desc: 'Die letzten fünf Spiele, die vorherige Kampagne, der Rest der Mannschaft. Eine Zahl allein entscheidet nichts.',
          },
        ],
        note: {
          icon: 'circle-alert',
          label: 'Eine kleine Stichprobe wird markiert, nicht versteckt',
          desc: 'Eine aus zu wenigen Daten abgeleitete Spalte zeigt „*“ statt einer bequemen Zahl, und ihre abgeleiteten Werte bleiben leer. Ein Bericht, der einen Mittelwert über zwei Spiele erfindet, ist schlechter als ein unvollständiger.',
        },
      },
    ],
  },

  pt: {
    meta: {
      title: 'Relatórios, IA e BI | STRIVN',
      description:
        'Sinais da manhã, briefing antes do treino, relatórios guardados e painéis compostos. Nenhuma introdução própria: tudo parte dos dados que já existem.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · INTELIGÊNCIA',
      title: 'Um relatório guarda a pergunta, não a resposta.',
      sub: 'Nenhuma introdução própria: os relatórios alimentam-se da ficha de jogo, do check-in, da carga e das importações GPS. Guarda uma pergunta, e ela é recalculada sobre os dados de hoje a cada abertura.',
      bullets: [
        'Seleção / forma: quem está em forma, quem alinhar',
        'Gerador: assunto, estatísticas, forma e comparação',
        'Painéis compostos, recalculados a cada abertura',
        'Assistente que faz uma pergunta em vez de adivinhar',
      ],
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver a carga', href: '/pt/features/training-load/' },
      },
      visual: 'report-table',
    },
    sections: [
      {
        kicker: 'DO SINAL À DECISÃO',
        title: 'Antes do café, antes do treino, antes da reunião.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: 'DE MANHÃ',
            title: 'Sinais e alertas',
            desc: 'A sua caixa de entrada do dia: os jogadores que pedem a sua atenção, numa leitura, antes do café.',
          },
          {
            num: 'ANTES DO TREINO',
            title: 'Briefing IA',
            desc: 'As decisões do dia: cada jogador numa só casa — treina, adaptado, repouso, ausente, não convocado, desconhecido. «Desconhecido» é uma resposta, não um buraco.',
          },
          {
            num: 'NO PERÍODO',
            title: 'Relatórios',
            desc: 'Seleção / forma para saber quem alinhar, Carga e disponibilidade do lado da preparação. Guardados uma vez, recalculados depois.',
          },
          {
            num: 'SEUS',
            title: 'Painéis',
            desc: 'As suas próprias vistas: os números que olha mesmo, dispostos como os lê.',
          },
        ],
      },
      {
        kicker: 'A PÁGINA LIVRE',
        title: 'Sobre quem, que estatísticas, comparadas com o quê.',
        body: 'O gerador monta um relatório em três escolhas: sobre quem, que estatísticas, e com o que as comparar. O que fica guardado é a pergunta — os números são sempre os de hoje.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'ASSUNTO',
            title: 'Equipa, jogadores, adversário',
            desc: 'O perímetro do relatório. O mesmo conjunto de estatísticas não conta a mesma coisa consoante quem descreve.',
          },
          {
            eyebrow: 'ESTATÍSTICAS',
            title: 'Seis famílias, escolhidas à carta',
            desc: 'Desempenho em jogo, minutos, carga, bem-estar, GPS, disponibilidade. Só leva o que lê.',
          },
          {
            eyebrow: 'COMPARAÇÃO',
            title: 'Uma forma e uma referência',
            desc: 'Os últimos cinco jogos, a campanha anterior, o resto do grupo. Um número sozinho não decide nada.',
          },
        ],
        note: {
          icon: 'circle-alert',
          label: 'A amostra curta é assinalada, não escondida',
          desc: 'Uma coluna derivada de uma amostra demasiado curta mostra «*» em vez de um número confortável, e os seus valores derivados ficam vazios. Um relatório que inventa uma média sobre dois jogos é pior do que um relatório incompleto.',
        },
      },
    ],
  },

  es: {
    meta: {
      title: 'Informes, IA y BI | STRIVN',
      description:
        'Señales de la mañana, briefing antes de la sesión, informes guardados y cuadros de mando compuestos. Sin entrada propia: todo parte de los datos que ya están.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · INTELIGENCIA',
      title: 'Un informe guarda la pregunta, no la respuesta.',
      sub: 'Sin entrada propia: los informes se alimentan del acta, del check-in, de la carga y de las importaciones GPS. Guardas una pregunta, y se recalcula sobre los datos de hoy en cada apertura.',
      bullets: [
        'Selección / forma: quién está en forma, a quién alinear',
        'Generador: sujeto, estadísticas, forma y comparación',
        'Cuadros de mando compuestos, recalculados en cada apertura',
        'Asistente que hace una pregunta en vez de adivinar',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver la carga', href: '/es/features/training-load/' },
      },
      visual: 'report-table',
    },
    sections: [
      {
        kicker: 'DE LA SEÑAL A LA DECISIÓN',
        title: 'Antes del café, antes de la sesión, antes de la reunión.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: 'POR LA MAÑANA',
            title: 'Señales y alertas',
            desc: 'Tu bandeja del día: los jugadores que piden tu atención, en una lectura, antes del café.',
          },
          {
            num: 'ANTES DE LA SESIÓN',
            title: 'Briefing IA',
            desc: 'Las decisiones del día: cada jugador en una sola casilla — entrena, adaptado, reposo, ausente, no convocado, desconocido. «Desconocido» es una respuesta, no un hueco.',
          },
          {
            num: 'EN EL PERIODO',
            title: 'Informes',
            desc: 'Selección / forma para saber a quién alinear, Carga y disponibilidad del lado de la preparación. Guardados una vez, recalculados después.',
          },
          {
            num: 'TUYOS',
            title: 'Cuadros de mando',
            desc: 'Tus propias vistas: las cifras que miras de verdad, dispuestas como las lees.',
          },
        ],
      },
      {
        kicker: 'LA PÁGINA LIBRE',
        title: 'Sobre quién, qué estadísticas, comparadas con qué.',
        body: 'El generador arma un informe con tres elecciones: sobre quién, qué estadísticas, y con qué compararlas. Lo que se guarda es la pregunta — las cifras son siempre las de hoy.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'SUJETO',
            title: 'Equipo, jugadores, rival',
            desc: 'El perímetro del informe. El mismo conjunto de estadísticas no cuenta lo mismo según a quién describa.',
          },
          {
            eyebrow: 'ESTADÍSTICAS',
            title: 'Seis familias, marcadas a la carta',
            desc: 'Rendimiento en partido, minutos, carga, bienestar, GPS, disponibilidad. Solo te llevas lo que lees.',
          },
          {
            eyebrow: 'COMPARACIÓN',
            title: 'Una forma y una referencia',
            desc: 'Los últimos cinco partidos, la campaña anterior, el resto del grupo. Una cifra sola no decide nada.',
          },
        ],
        note: {
          icon: 'circle-alert',
          label: 'La muestra corta se señala, no se esconde',
          desc: 'Una columna derivada de una muestra demasiado corta muestra «*» en vez de una cifra cómoda, y sus valores derivados quedan vacíos. Un informe que se inventa una media sobre dos partidos es peor que un informe incompleto.',
        },
      },
    ],
  },
};
