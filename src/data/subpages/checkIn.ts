/**
 * Check-in & Readiness — the morning questionnaire and what STRIVN reads from
 * it. The page's spine is the colour rule: red asks for a decision, green
 * means nothing to do, and grey means the answer never arrived.
 */
import type { SubpageLocales } from './types';

export const checkIn: SubpageLocales = {
  /* ────────────────────────────── FR ────────────────────────────── */
  fr: {
    meta: {
      title: 'Check-in & Readiness | STRIVN',
      description:
        'Sommeil, fatigue, douleur, motivation : moins d’une minute par joueur. STRIVN en tire un score Readiness vert / jaune / rouge, projeté sur la charge réellement encaissée.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · SUIVI QUOTIDIEN',
      title: 'Une minute par joueur. Toute la lecture du groupe.',
      sub: 'Le check-in du matin porte le sommeil, la fatigue, la douleur et la motivation. STRIVN en tire un score Readiness — vert, jaune, rouge — puis projette la fatigue selon la charge réellement encaissée.',
      bullets: [
        'Moins d’une minute, depuis l’app ou un lien',
        'Sommeil, fatigue, douleur, motivation',
        'Readiness vert / jaune / rouge, projeté sur la charge',
        'Signaux de risque agrégés avant chaque séance',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir la charge', href: '/fr/features/training-load/' },
      },
      visual: 'checkin-signals',
    },
    sections: [
      {
        kicker: 'LA RÈGLE DE COULEUR',
        title: 'Rouge veut dire la même chose sur tous les écrans.',
        kind: 'cards',
        cards: [
          {
            icon: 'circle-alert',
            tone: 'red',
            title: 'Rouge = risque',
            desc: 'Un seuil franchi, une douleur signalée, une charge hors zone. La couleur appelle une décision, pas une lecture.',
          },
          {
            icon: 'circle-check',
            tone: 'green',
            title: 'Vert = état correct',
            desc: 'Rien à faire. Le joueur est dans sa zone et la donnée est fraîche.',
          },
          {
            icon: 'minus',
            tone: 'plain',
            title: 'Gris = donnée manquante',
            desc: 'Un check-in non rempli n’est jamais compté comme « bon ». L’absence de donnée se voit.',
          },
        ],
      },
      {
        kicker: 'INTÉGRATION WHOOP',
        title: 'Le bracelet remplit le check-in du matin.',
        body: 'STRIVN se connecte à WHOOP par son API développeur et récupère les mesures de la nuit : le score de récupération, la durée et la performance de sommeil, la VFC et la fréquence cardiaque au repos. Le check-in arrive pré-rempli — le joueur ouvre, vérifie, ajuste ce qui lui semble faux, et valide. Cent joueurs peuvent aujourd’hui connecter leur bracelet à STRIVN.',
        kind: 'logos',
        only: ['whoop'],
        note: {
          label: 'Ce qu’un bracelet ne mesure pas',
          desc: 'La fatigue ressentie, l’humeur, les douleurs : ces réponses-là restent au joueur. Le pré-remplissage porte sur les mesures, pas sur le ressenti — c’est la différence entre un questionnaire à remplir et une réponse à confirmer.',
        },
        foot: 'Marques et logos cités appartiennent à leurs propriétaires respectifs. STRIVN n’est affilié à aucune de ces sociétés.',
      },
      {
        kicker: 'LE RESSENTI APRÈS SÉANCE',
        title: 'Le RPE, au moment qui vous arrange.',
        kind: 'cards',
        cards: [
          {
            icon: 'clock-3',
            title: 'Par défaut, au check-in du lendemain',
            desc: 'Le joueur note sa séance en même temps que son état du matin : une seule sollicitation.',
          },
          {
            icon: 'zap',
            title: 'Ou juste après la séance',
            desc: 'Activez « Demander le ressenti après la séance » pour un retour à chaud, dans l’heure.',
          },
          {
            icon: 'sliders-horizontal',
            title: 'RPE au décimal',
            desc: 'Les dix boutons cèdent la place à un champ libre pour ceux qui travaillent en 4,17.',
          },
        ],
        note: {
          label: 'Pourquoi le décimal change quelque chose',
          desc: 'Une séance de 90 minutes notée « 4 » pèse 360. La même notée 4,17 pèse 375. La charge sRPE se calcule en RPE × durée : c’est cette précision-là que l’échelle décimale préserve, sur toutes les surfaces de saisie.',
        },
      },
    ],
  },

  /* ────────────────────────────── EN ────────────────────────────── */
  en: {
    meta: {
      title: 'Check-in & readiness | STRIVN',
      description:
        'Sleep, fatigue, pain, motivation: under a minute per player. STRIVN turns it into a green / amber / red readiness score, projected onto the load actually absorbed.',
    },
    hero: {
      kicker: 'FEATURES · DAILY MONITORING',
      title: 'A minute per player. The whole squad, readable.',
      sub: 'The morning check-in carries sleep, fatigue, pain and motivation. STRIVN turns it into a readiness score — green, amber, red — then projects fatigue against the load actually absorbed.',
      bullets: [
        'Under a minute, from the app or a link',
        'Sleep, fatigue, pain, motivation',
        'Readiness green / amber / red, projected onto load',
        'Risk signals gathered before every session',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See training load', href: '/en/features/training-load/' },
      },
      visual: 'checkin-signals',
    },
    sections: [
      {
        kicker: 'THE COLOUR RULE',
        title: 'Red means the same thing on every screen.',
        kind: 'cards',
        cards: [
          {
            icon: 'circle-alert',
            tone: 'red',
            title: 'Red = risk',
            desc: 'A threshold crossed, pain reported, load out of range. The colour asks for a decision, not a reading.',
          },
          {
            icon: 'circle-check',
            tone: 'green',
            title: 'Green = fine',
            desc: 'Nothing to do. The player is in range and the data is fresh.',
          },
          {
            icon: 'minus',
            tone: 'plain',
            title: 'Grey = data missing',
            desc: 'An unanswered check-in is never counted as “good”. Missing data stays visible as missing.',
          },
        ],
      },
      {
        kicker: 'WHOOP INTEGRATION',
        title: 'The strap fills in the morning check-in.',
        body: 'STRIVN connects to WHOOP through its developer API and pulls the night’s measurements: the recovery score, sleep duration and performance, HRV and resting heart rate. The check-in arrives pre-filled — the player opens it, checks it, adjusts whatever looks wrong, and confirms. A hundred players can now connect their strap to STRIVN.',
        kind: 'logos',
        only: ['whoop'],
        note: {
          label: 'What a strap does not measure',
          desc: 'Perceived fatigue, mood, soreness: those answers stay the player’s. Pre-filling covers the measurements, not the feeling — that is the difference between a form to fill in and an answer to confirm.',
        },
        foot: 'Trademarks and logos are the property of their respective owners. STRIVN is not affiliated with any of these companies.',
      },
      {
        kicker: 'HOW THE SESSION FELT',
        title: 'RPE, at whichever moment suits you.',
        kind: 'cards',
        cards: [
          {
            icon: 'clock-3',
            title: 'By default, at the next morning’s check-in',
            desc: 'The player rates the session alongside their morning state: one prompt, not two.',
          },
          {
            icon: 'zap',
            title: 'Or right after the session',
            desc: 'Turn on “Ask for feedback after the session” for a reaction within the hour.',
          },
          {
            icon: 'sliders-horizontal',
            title: 'Decimal RPE',
            desc: 'The ten buttons give way to a free field for staff who work in 4.17.',
          },
        ],
        note: {
          label: 'Why the decimal matters',
          desc: 'A 90-minute session rated “4” weighs 360. The same session rated 4.17 weighs 375. sRPE load is RPE × duration: that is the precision the decimal scale preserves, on every entry surface.',
        },
      },
    ],
  },

  /* ────────────────────────────── NL ────────────────────────────── */
  nl: {
    meta: {
      title: 'Check-in & readiness | STRIVN',
      description:
        'Slaap, vermoeidheid, pijn, motivatie: minder dan een minuut per speler. STRIVN maakt er een readiness-score van — groen, oranje, rood — geprojecteerd op de werkelijk verwerkte belasting.',
    },
    hero: {
      kicker: 'FUNCTIES · DAGELIJKSE OPVOLGING',
      title: 'Eén minuut per speler. De hele groep leesbaar.',
      sub: 'De check-in ’s ochtends draagt slaap, vermoeidheid, pijn en motivatie. STRIVN maakt er een readiness-score van — groen, oranje, rood — en projecteert de vermoeidheid op de werkelijk verwerkte belasting.',
      bullets: [
        'Minder dan een minuut, vanuit de app of via een link',
        'Slaap, vermoeidheid, pijn, motivatie',
        'Readiness groen / oranje / rood, geprojecteerd op de belasting',
        'Risicosignalen gebundeld vóór elke training',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Belasting bekijken', href: '/nl/features/training-load/' },
      },
      visual: 'checkin-signals',
    },
    sections: [
      {
        kicker: 'DE KLEURREGEL',
        title: 'Rood betekent overal hetzelfde.',
        kind: 'cards',
        cards: [
          {
            icon: 'circle-alert',
            tone: 'red',
            title: 'Rood = risico',
            desc: 'Een overschreden drempel, gemelde pijn, belasting buiten de zone. De kleur vraagt om een beslissing, niet om een lezing.',
          },
          {
            icon: 'circle-check',
            tone: 'green',
            title: 'Groen = in orde',
            desc: 'Niets te doen. De speler zit in zijn zone en het gegeven is vers.',
          },
          {
            icon: 'minus',
            tone: 'plain',
            title: 'Grijs = gegeven ontbreekt',
            desc: 'Een niet ingevulde check-in telt nooit als “goed”. Het ontbreken van een gegeven blijft zichtbaar.',
          },
        ],
      },
      {
        kicker: 'WHOOP-INTEGRATIE',
        title: 'De band vult de check-in van de ochtend in.',
        body: 'STRIVN maakt via de ontwikkelaars-API verbinding met WHOOP en haalt de metingen van de nacht op: de herstelscore, de duur en de prestatie van de slaap, HRV en hartslag in rust. De check-in komt vooraf ingevuld binnen — de speler opent hem, controleert, past aan wat fout lijkt, en bevestigt. Honderd spelers kunnen hun band nu met STRIVN verbinden.',
        kind: 'logos',
        only: ['whoop'],
        note: {
          label: 'Wat een band niet meet',
          desc: 'Ervaren vermoeidheid, humeur, pijn: die antwoorden blijven van de speler. Het vooraf invullen gaat over de metingen, niet over het gevoel — dat is het verschil tussen een formulier dat ingevuld moet worden en een antwoord dat bevestigd wordt.',
        },
        foot: 'Vermelde merken en logo’s zijn eigendom van hun respectieve eigenaars. STRIVN is met geen van deze bedrijven verbonden.',
      },
      {
        kicker: 'HET GEVOEL NA DE TRAINING',
        title: 'De RPE, op het moment dat jou uitkomt.',
        kind: 'cards',
        cards: [
          {
            icon: 'clock-3',
            title: 'Standaard bij de check-in van de volgende ochtend',
            desc: 'De speler beoordeelt zijn training samen met zijn ochtendtoestand: één vraag in plaats van twee.',
          },
          {
            icon: 'zap',
            title: 'Of vlak na de training',
            desc: 'Zet “Vraag het gevoel na de training” aan voor een reactie binnen het uur.',
          },
          {
            icon: 'sliders-horizontal',
            title: 'RPE met decimalen',
            desc: 'De tien knoppen maken plaats voor een vrij veld, voor wie in 4,17 werkt.',
          },
        ],
        note: {
          label: 'Waarom de decimaal iets verandert',
          desc: 'Een training van 90 minuten met een “4” weegt 360. Dezelfde met 4,17 weegt 375. De sRPE-belasting is RPE × duur: precies die nauwkeurigheid houdt de decimale schaal vast, op elk invoerscherm.',
        },
      },
    ],
  },

  /* ────────────────────────────── DE ────────────────────────────── */
  de: {
    meta: {
      title: 'Check-in & Readiness | STRIVN',
      description:
        'Schlaf, Ermüdung, Schmerz, Motivation: unter einer Minute je Spieler. STRIVN macht daraus einen Readiness-Wert — grün, gelb, rot — projiziert auf die tatsächlich aufgenommene Belastung.',
    },
    hero: {
      kicker: 'FUNKTIONEN · TÄGLICHES MONITORING',
      title: 'Eine Minute pro Spieler. Die ganze Mannschaft lesbar.',
      sub: 'Der Morgen-Check-in trägt Schlaf, Ermüdung, Schmerz und Motivation. STRIVN macht daraus einen Readiness-Wert — grün, gelb, rot — und projiziert die Ermüdung auf die tatsächlich aufgenommene Belastung.',
      bullets: [
        'Unter einer Minute, aus der App oder über einen Link',
        'Schlaf, Ermüdung, Schmerz, Motivation',
        'Readiness grün / gelb / rot, auf die Belastung projiziert',
        'Risikosignale gebündelt vor jeder Einheit',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Belastung ansehen', href: '/de/features/training-load/' },
      },
      visual: 'checkin-signals',
    },
    sections: [
      {
        kicker: 'DIE FARBREGEL',
        title: 'Rot bedeutet auf jedem Bildschirm dasselbe.',
        kind: 'cards',
        cards: [
          {
            icon: 'circle-alert',
            tone: 'red',
            title: 'Rot = Risiko',
            desc: 'Eine überschrittene Schwelle, gemeldeter Schmerz, Belastung außerhalb der Zone. Die Farbe verlangt eine Entscheidung, keine Lektüre.',
          },
          {
            icon: 'circle-check',
            tone: 'green',
            title: 'Grün = in Ordnung',
            desc: 'Nichts zu tun. Der Spieler ist in seiner Zone, und die Daten sind frisch.',
          },
          {
            icon: 'minus',
            tone: 'plain',
            title: 'Grau = Daten fehlen',
            desc: 'Ein nicht ausgefüllter Check-in zählt nie als „gut“. Fehlende Daten bleiben sichtbar fehlend.',
          },
        ],
      },
      {
        kicker: 'WHOOP-INTEGRATION',
        title: 'Das Band füllt den Check-in am Morgen aus.',
        body: 'STRIVN verbindet sich über die Entwickler-API mit WHOOP und holt die Messwerte der Nacht: den Regenerationsscore, Dauer und Performance des Schlafs, HRV und Ruhepuls. Der Check-in kommt vorausgefüllt an — der Spieler öffnet ihn, prüft, korrigiert, was nicht stimmt, und bestätigt. Hundert Spieler können ihr Band jetzt mit STRIVN verbinden.',
        kind: 'logos',
        only: ['whoop'],
        note: {
          label: 'Was ein Band nicht misst',
          desc: 'Empfundene Müdigkeit, Stimmung, Schmerzen: Diese Antworten bleiben beim Spieler. Vorausgefüllt werden die Messwerte, nicht das Empfinden — das ist der Unterschied zwischen einem Formular, das auszufüllen ist, und einer Antwort, die zu bestätigen ist.',
        },
        foot: 'Genannte Marken und Logos sind Eigentum ihrer jeweiligen Inhaber. STRIVN ist mit keinem dieser Unternehmen verbunden.',
      },
      {
        kicker: 'DAS EMPFINDEN NACH DER EINHEIT',
        title: 'Der RPE, zu dem Zeitpunkt, der Ihnen passt.',
        kind: 'cards',
        cards: [
          {
            icon: 'clock-3',
            title: 'Standardmäßig beim Check-in am nächsten Morgen',
            desc: 'Der Spieler bewertet die Einheit zusammen mit seinem Morgenzustand: eine Abfrage statt zwei.',
          },
          {
            icon: 'zap',
            title: 'Oder direkt nach der Einheit',
            desc: 'Aktivieren Sie „Empfinden nach der Einheit abfragen“ für eine Rückmeldung binnen einer Stunde.',
          },
          {
            icon: 'sliders-horizontal',
            title: 'RPE mit Dezimalstelle',
            desc: 'Die zehn Schaltflächen weichen einem freien Feld — für alle, die in 4,17 arbeiten.',
          },
        ],
        note: {
          label: 'Warum die Dezimalstelle etwas ändert',
          desc: 'Eine 90-Minuten-Einheit mit „4“ wiegt 360. Dieselbe mit 4,17 wiegt 375. Die sRPE-Belastung ist RPE × Dauer: Genau diese Genauigkeit hält die Dezimalskala fest, auf jeder Eingabefläche.',
        },
      },
    ],
  },

  /* ────────────────────────────── PT ────────────────────────────── */
  pt: {
    meta: {
      title: 'Check-in e readiness | STRIVN',
      description:
        'Sono, fadiga, dor, motivação: menos de um minuto por jogador. A STRIVN transforma-o num score de readiness verde / amarelo / vermelho, projetado sobre a carga realmente absorvida.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · ACOMPANHAMENTO DIÁRIO',
      title: 'Um minuto por jogador. Todo o grupo legível.',
      sub: 'O check-in da manhã traz o sono, a fadiga, a dor e a motivação. A STRIVN tira daí um score de readiness — verde, amarelo, vermelho — e projeta a fadiga sobre a carga realmente absorvida.',
      bullets: [
        'Menos de um minuto, pela app ou por um link',
        'Sono, fadiga, dor, motivação',
        'Readiness verde / amarelo / vermelho, projetado sobre a carga',
        'Sinais de risco agregados antes de cada treino',
      ],
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver a carga', href: '/pt/features/training-load/' },
      },
      visual: 'checkin-signals',
    },
    sections: [
      {
        kicker: 'A REGRA DE COR',
        title: 'Vermelho quer dizer o mesmo em todos os ecrãs.',
        kind: 'cards',
        cards: [
          {
            icon: 'circle-alert',
            tone: 'red',
            title: 'Vermelho = risco',
            desc: 'Um limiar ultrapassado, uma dor assinalada, uma carga fora de zona. A cor pede uma decisão, não uma leitura.',
          },
          {
            icon: 'circle-check',
            tone: 'green',
            title: 'Verde = estado correto',
            desc: 'Nada a fazer. O jogador está na sua zona e o dado é recente.',
          },
          {
            icon: 'minus',
            tone: 'plain',
            title: 'Cinzento = dado em falta',
            desc: 'Um check-in por preencher nunca conta como «bom». A ausência de dado vê-se.',
          },
        ],
      },
      {
        kicker: 'INTEGRAÇÃO WHOOP',
        title: 'A pulseira preenche o check-in da manhã.',
        body: 'O STRIVN liga-se ao WHOOP através da sua API de programador e recolhe as medições da noite: a pontuação de recuperação, a duração e o desempenho do sono, a VFC e a frequência cardíaca em repouso. O check-in chega pré-preenchido — o jogador abre, verifica, ajusta o que lhe parece errado e valida. Cem jogadores podem agora ligar a sua pulseira ao STRIVN.',
        kind: 'logos',
        only: ['whoop'],
        note: {
          label: 'O que uma pulseira não mede',
          desc: 'O cansaço sentido, o humor, as dores: essas respostas continuam a ser do jogador. O pré-preenchimento cobre as medições, não o que se sente — é a diferença entre um questionário para preencher e uma resposta para confirmar.',
        },
        foot: 'As marcas e logótipos citados pertencem aos respetivos proprietários. A STRIVN não está associada a nenhuma destas empresas.',
      },
      {
        kicker: 'A SENSAÇÃO APÓS O TREINO',
        title: 'O RPE, no momento que lhe der jeito.',
        kind: 'cards',
        cards: [
          {
            icon: 'clock-3',
            title: 'Por omissão, no check-in do dia seguinte',
            desc: 'O jogador classifica o treino ao mesmo tempo que o seu estado da manhã: um só pedido.',
          },
          {
            icon: 'zap',
            title: 'Ou logo a seguir ao treino',
            desc: 'Ative «Pedir a sensação após o treino» para uma resposta a quente, dentro da hora.',
          },
          {
            icon: 'sliders-horizontal',
            title: 'RPE com decimal',
            desc: 'Os dez botões dão lugar a um campo livre para quem trabalha em 4,17.',
          },
        ],
        note: {
          label: 'Porque a decimal muda alguma coisa',
          desc: 'Um treino de 90 minutos classificado «4» pesa 360. O mesmo classificado 4,17 pesa 375. A carga sRPE é RPE × duração: é essa precisão que a escala decimal preserva, em todas as superfícies de introdução.',
        },
      },
    ],
  },

  /* ────────────────────────────── ES ────────────────────────────── */
  es: {
    meta: {
      title: 'Check-in y readiness | STRIVN',
      description:
        'Sueño, fatiga, dolor, motivación: menos de un minuto por jugador. STRIVN saca un score de readiness verde / ámbar / rojo, proyectado sobre la carga realmente encajada.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · SEGUIMIENTO DIARIO',
      title: 'Un minuto por jugador. Todo el grupo legible.',
      sub: 'El check-in de la mañana lleva el sueño, la fatiga, el dolor y la motivación. STRIVN saca de ahí un score de readiness — verde, ámbar, rojo — y proyecta la fatiga sobre la carga realmente encajada.',
      bullets: [
        'Menos de un minuto, desde la app o desde un enlace',
        'Sueño, fatiga, dolor, motivación',
        'Readiness verde / ámbar / rojo, proyectado sobre la carga',
        'Señales de riesgo agregadas antes de cada sesión',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver la carga', href: '/es/features/training-load/' },
      },
      visual: 'checkin-signals',
    },
    sections: [
      {
        kicker: 'LA REGLA DE COLOR',
        title: 'El rojo significa lo mismo en todas las pantallas.',
        kind: 'cards',
        cards: [
          {
            icon: 'circle-alert',
            tone: 'red',
            title: 'Rojo = riesgo',
            desc: 'Un umbral superado, un dolor señalado, una carga fuera de zona. El color pide una decisión, no una lectura.',
          },
          {
            icon: 'circle-check',
            tone: 'green',
            title: 'Verde = estado correcto',
            desc: 'Nada que hacer. El jugador está en su zona y el dato es reciente.',
          },
          {
            icon: 'minus',
            tone: 'plain',
            title: 'Gris = dato ausente',
            desc: 'Un check-in sin rellenar nunca cuenta como «bueno». La ausencia de dato se ve.',
          },
        ],
      },
      {
        kicker: 'INTEGRACIÓN WHOOP',
        title: 'La pulsera rellena el check-in de la mañana.',
        body: 'STRIVN se conecta a WHOOP mediante su API para desarrolladores y recupera las medidas de la noche: la puntuación de recuperación, la duración y el rendimiento del sueño, la VFC y la frecuencia cardíaca en reposo. El check-in llega rellenado de antemano — el jugador lo abre, lo revisa, corrige lo que le parece erróneo y lo valida. Cien jugadores pueden ya conectar su pulsera a STRIVN.',
        kind: 'logos',
        only: ['whoop'],
        note: {
          label: 'Lo que una pulsera no mide',
          desc: 'El cansancio percibido, el ánimo, las molestias: esas respuestas siguen siendo del jugador. El rellenado previo cubre las medidas, no la sensación — esa es la diferencia entre un cuestionario que hay que rellenar y una respuesta que hay que confirmar.',
        },
        foot: 'Las marcas y logotipos citados pertenecen a sus respectivos propietarios. STRIVN no está afiliada a ninguna de estas empresas.',
      },
      {
        kicker: 'LA SENSACIÓN TRAS LA SESIÓN',
        title: 'El RPE, en el momento que te convenga.',
        kind: 'cards',
        cards: [
          {
            icon: 'clock-3',
            title: 'Por defecto, en el check-in del día siguiente',
            desc: 'El jugador puntúa su sesión a la vez que su estado de la mañana: una sola petición.',
          },
          {
            icon: 'zap',
            title: 'O justo después de la sesión',
            desc: 'Activa «Pedir la sensación tras la sesión» para una respuesta en caliente, en la hora siguiente.',
          },
          {
            icon: 'sliders-horizontal',
            title: 'RPE con decimal',
            desc: 'Los diez botones dejan paso a un campo libre para quienes trabajan en 4,17.',
          },
        ],
        note: {
          label: 'Por qué el decimal cambia algo',
          desc: 'Una sesión de 90 minutos puntuada «4» pesa 360. La misma puntuada 4,17 pesa 375. La carga sRPE se calcula como RPE × duración: es esa precisión la que preserva la escala decimal, en todas las superficies de entrada.',
        },
      },
    ],
  },
};
