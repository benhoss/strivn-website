/**
 * Programs & workouts — one prescription, a weight per player.
 *
 * The page closes on a naming problem it would be dishonest to skip: the word
 * "program" means two different things in the product, and confusing them
 * costs the reader a support ticket.
 */
import type { SubpageLocales } from './types';

export const programs: SubpageLocales = {
  /* ────────────────────────────── FR ────────────────────────────── */
  fr: {
    meta: {
      title: 'Programmes & workouts | STRIVN',
      description:
        'Prescrivez « Squat 4 × 5 @ 80 % » pour toute l’équipe. Chacun reçoit le poids réel calculé sur son propre 1RM, arrondi à vos disques.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · PROGRAMMES',
      title: 'Le même pourcentage. Un poids par joueur.',
      sub: 'Vous prescrivez « Squat 4 × 5 @ 80 % » pour toute l’équipe. Chacun reçoit le poids réel calculé sur son propre 1RM, arrondi à vos disques. Vous ne tenez pas dix-huit feuilles.',
      bullets: [
        '1RM saisi en direct, ou estimé depuis une série sous-maximale',
        'Blocs en série simple, superset ou circuit',
        'Aperçu par joueur avant d’assigner la séance',
        'Nouveaux records proposés dès qu’un joueur dépasse son max',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir la bibliothèque', href: '/fr/features/exercise-library/' },
      },
      visual: 'program-weights',
    },
    sections: [
      {
        kicker: 'ÉVALUATIONS 1RM',
        title: 'Cinq répétitions à 100 kg suffisent.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'DIRECT',
            title: 'Le chiffre, ligne par ligne',
            desc: 'Vous entrez le 1RM en kilos sur la grille de l’exercice. Le 1RM actuel d’un joueur est toujours sa valeur la plus récente.',
          },
          {
            eyebrow: 'ESTIMÉ',
            title: 'Depuis une série sous-maximale',
            desc: 'Vous entrez 5 répétitions à 100 kg et le 1RM se calcule en direct, avec Epley ou Brzycki. Plus sûr en pleine saison. Au-delà de votre plafond de répétitions, l’estimation est signalée comme peu fiable.',
          },
        ],
        note: {
          icon: 'trending-up',
          label: 'Les records sont proposés, jamais imposés',
          desc: 'Quand un joueur soulève plus lourd que son maximum enregistré, STRIVN vous propose le nouveau record : vous confirmez ou vous écartez. Vous pouvez aussi régler la mise à jour sur « automatique », ou sur « ne rien faire ».',
        },
      },
      {
        kicker: 'LE CONSTRUCTEUR DE SÉANCE',
        title: 'Du simple enchaînement au circuit complet.',
        kind: 'cards',
        cards: [
          {
            icon: 'list',
            title: 'Série simple',
            desc: 'Un exercice, ses séries les unes après les autres. La récupération que vous saisissez tombe entre chaque série.',
          },
          {
            icon: 'shuffle',
            title: 'Superset',
            desc: 'Deux exercices alternés — étiquettes A1 / A2, rail bleu qui les relie. Le joueur enchaîne sans repos dans le tour ; la récupération tombe en fin de tour.',
          },
          {
            icon: 'refresh-cw',
            title: 'Circuit',
            desc: 'Plusieurs exercices enchaînés, tour par tour. Même logique que le superset, à plus de deux.',
          },
        ],
      },
      {
        kicker: 'LE MODE DE CHARGE',
        title: 'Le squat en % de 1RM, les pompes au poids du corps.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: '% 1RM',
            desc: 'Le poids réel est calculé depuis le 1RM du joueur, puis arrondi à vos disques.',
            chip: { label: 'mode phare', tone: 'blue' },
          },
          { name: 'kg', desc: 'Un poids fixe, identique pour tout le monde.' },
          { name: 'RPE', desc: 'Une intensité au ressenti, sans chiffre imposé.' },
          { name: 'PDC', desc: 'Poids de corps.' },
        ],
      },
      {
        kicker: 'CE QUI ARRIVE JUSQU’AU JOUEUR',
        title: 'Vous écrivez « 3010 ». Il lit « 3 s de descente ».',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'TEMPO',
            title: 'Il arrive en clair',
            desc: 'Vous notez « 3010 ». Le joueur lit « 3 s de descente · 1 s de montée ».',
          },
          {
            eyebrow: 'CONSIGNES',
            title: 'La fiche d’exercice suit le joueur',
            desc: 'Consignes, photo et vidéo posées sur l’exercice de la bibliothèque réapparaissent dans son exécuteur, sous « Comment faire ».',
          },
          {
            eyebrow: 'AVANT D’ASSIGNER',
            title: 'L’aperçu par joueur',
            desc: 'Le poids réel de chacun, série par série. Les joueurs sans 1RM apparaissent « à tester » plutôt que chargés au hasard.',
          },
        ],
      },
      {
        kicker: 'NE PAS CONFONDRE',
        title: 'Le mot « programme » recouvre deux objets.',
        kind: 'compare',
        heads: ['La séance de musculation', 'Le modèle de programme'],
        tones: ['blue', 'green'],
        rows: [
          {
            label: 'CE QUE C’EST',
            a: 'Elle se construit dans le constructeur, s’assigne à un événement du calendrier, et s’exécute dans l’app avec les poids déjà résolus.',
            b: 'Une trame réutilisable : la structure d’un cycle de renforcement, à décliner sur plusieurs semaines.',
          },
          {
            label: 'CÔTÉ JOUEUR',
            a: 'Chaque joueur convoqué la reçoit avec ses propres poids. Badge de complétion par joueur — « 3 / 4 séries ».',
            b: 'Rien n’est envoyé tant que le modèle n’a pas produit des séances datées.',
          },
          {
            label: 'AJUSTEMENTS',
            a: 'Modulation, exclusion, échange d’exercice, poids absolu. La charge remonte seule dans Charge d’entraînement.',
            b: 'On l’édite une fois, et toutes les séances qui en sortiront ensuite en héritent.',
          },
        ],
        callouts: [
          {
            icon: 'library',
            tone: 'blue',
            text: 'Tout ce que vous placez dans une séance sort de la bibliothèque : capture depuis un lien, une photo ou un schéma, tri en boîte de réception, métriques clés et charge externe estimée.',
            link: { label: 'La bibliothèque d’exercices', href: '/fr/features/exercise-library/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── EN ────────────────────────────── */
  en: {
    meta: {
      title: 'Programs & workouts | STRIVN',
      description:
        'Prescribe “Squat 4 × 5 @ 80 %” for the whole squad. Each player gets the real weight worked out from their own 1RM, rounded to your plates.',
    },
    hero: {
      kicker: 'FEATURES · PROGRAMS',
      title: 'The same percentage. A weight per player.',
      sub: 'You prescribe “Squat 4 × 5 @ 80 %” for the whole squad. Each player gets the real weight worked out from their own 1RM, rounded to your plates. You are not keeping eighteen sheets.',
      bullets: [
        '1RM entered directly, or estimated from a sub-maximal set',
        'Blocks as straight sets, supersets or circuits',
        'A per-player preview before you assign the session',
        'New records proposed as soon as a player beats their max',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See the library', href: '/en/features/exercise-library/' },
      },
      visual: 'program-weights',
    },
    sections: [
      {
        kicker: '1RM ASSESSMENTS',
        title: 'Five reps at 100 kg is enough.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'DIRECT',
            title: 'The figure, row by row',
            desc: 'You enter the 1RM in kilos on the exercise grid. A player’s current 1RM is always their most recent value.',
          },
          {
            eyebrow: 'ESTIMATED',
            title: 'From a sub-maximal set',
            desc: 'You enter 5 reps at 100 kg and the 1RM is worked out live, with Epley or Brzycki. Safer mid-season. Beyond your rep ceiling, the estimate is flagged as unreliable.',
          },
        ],
        note: {
          icon: 'trending-up',
          label: 'Records are proposed, never imposed',
          desc: 'When a player lifts heavier than their recorded max, STRIVN proposes the new record: you confirm or you dismiss. You can also set the update to “automatic”, or to “do nothing”.',
        },
      },
      {
        kicker: 'THE SESSION BUILDER',
        title: 'From a plain set to a full circuit.',
        kind: 'cards',
        cards: [
          {
            icon: 'list',
            title: 'Straight set',
            desc: 'One exercise, its sets one after the other. The rest you enter falls between each set.',
          },
          {
            icon: 'shuffle',
            title: 'Superset',
            desc: 'Two exercises alternated — A1 / A2 labels, a blue rail linking them. The player goes straight through within a round; the rest falls at the end of the round.',
          },
          {
            icon: 'refresh-cw',
            title: 'Circuit',
            desc: 'Several exercises linked, round by round. Same logic as the superset, with more than two.',
          },
        ],
      },
      {
        kicker: 'THE LOAD MODE',
        title: 'Squats as a % of 1RM, push-ups at bodyweight.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: '% 1RM',
            desc: 'The real weight is worked out from the player’s 1RM, then rounded to your plates.',
            chip: { label: 'the headline mode', tone: 'blue' },
          },
          { name: 'kg', desc: 'A fixed weight, the same for everyone.' },
          { name: 'RPE', desc: 'An intensity by feel, with no number imposed.' },
          { name: 'BW', desc: 'Bodyweight.' },
        ],
      },
      {
        kicker: 'WHAT REACHES THE PLAYER',
        title: 'You write “3010”. The player reads “3 s down”.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'TEMPO',
            title: 'It arrives in plain words',
            desc: 'You write “3010”. The player reads “3 s down · 1 s up”.',
          },
          {
            eyebrow: 'INSTRUCTIONS',
            title: 'The exercise card follows the player',
            desc: 'Instructions, photo and video set on the library exercise reappear in their runner, under “How to do it”.',
          },
          {
            eyebrow: 'BEFORE ASSIGNING',
            title: 'The per-player preview',
            desc: 'Everyone’s real weight, set by set. Players with no 1RM show as “to test” rather than loaded at a guess.',
          },
        ],
      },
      {
        kicker: 'DO NOT CONFUSE THEM',
        title: 'The word “program” covers two objects.',
        kind: 'compare',
        heads: ['The strength session', 'The program template'],
        tones: ['blue', 'green'],
        rows: [
          {
            label: 'WHAT IT IS',
            a: 'Built in the builder, assigned to a calendar event, and run in the app with the weights already resolved.',
            b: 'A reusable frame: the structure of a strength block, to roll out over several weeks.',
          },
          {
            label: 'PLAYER SIDE',
            a: 'Every called-up player receives it with their own weights. A completion badge per player — “3 / 4 sets”.',
            b: 'Nothing is sent until the template has produced dated sessions.',
          },
          {
            label: 'ADJUSTMENTS',
            a: 'Scaling, exclusion, swapping an exercise, an absolute weight. The load returns on its own into Training load.',
            b: 'You edit it once, and every session produced from it afterwards inherits the change.',
          },
        ],
        callouts: [
          {
            icon: 'library',
            tone: 'blue',
            text: 'Everything you put into a session comes out of the library: capture from a link, a photo or a diagram, sorting in the inbox, key metrics and estimated external load.',
            link: { label: 'The exercise library', href: '/en/features/exercise-library/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── NL ────────────────────────────── */
  nl: {
    meta: {
      title: 'Programma’s & workouts | STRIVN',
      description:
        'Schrijf “Squat 4 × 5 @ 80 %” voor de hele ploeg voor. Iedereen krijgt het echte gewicht, berekend op zijn eigen 1RM en afgerond op jouw schijven.',
    },
    hero: {
      kicker: 'FUNCTIES · PROGRAMMA’S',
      title: 'Hetzelfde percentage. Eén gewicht per speler.',
      sub: 'Je schrijft “Squat 4 × 5 @ 80 %” voor de hele ploeg voor. Iedereen krijgt het echte gewicht, berekend op zijn eigen 1RM en afgerond op jouw schijven. Je houdt geen achttien blaadjes bij.',
      bullets: [
        '1RM rechtstreeks ingevoerd, of geschat uit een submaximale reeks',
        'Blokken als enkelvoudige reeks, superset of circuit',
        'Voorbeeld per speler voor je de training toewijst',
        'Nieuwe records voorgesteld zodra een speler zijn max overtreft',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'De bibliotheek bekijken', href: '/nl/features/exercise-library/' },
      },
      visual: 'program-weights',
    },
    sections: [
      {
        kicker: '1RM-EVALUATIES',
        title: 'Vijf herhalingen op 100 kg volstaan.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'DIRECT',
            title: 'Het cijfer, regel per regel',
            desc: 'Je voert de 1RM in kilo’s in op het raster van de oefening. De huidige 1RM van een speler is altijd zijn meest recente waarde.',
          },
          {
            eyebrow: 'GESCHAT',
            title: 'Uit een submaximale reeks',
            desc: 'Je voert 5 herhalingen op 100 kg in en de 1RM wordt live berekend, met Epley of Brzycki. Veiliger in volle competitie. Boven je herhalingsplafond wordt de schatting als weinig betrouwbaar gemarkeerd.',
          },
        ],
        note: {
          icon: 'trending-up',
          label: 'Records worden voorgesteld, nooit opgelegd',
          desc: 'Wanneer een speler zwaarder tilt dan zijn geregistreerde max, stelt STRIVN het nieuwe record voor: je bevestigt of je legt het weg. Je kan de bijwerking ook op “automatisch” zetten, of op “niets doen”.',
        },
      },
      {
        kicker: 'DE TRAININGSBOUWER',
        title: 'Van een gewone reeks tot een volledig circuit.',
        kind: 'cards',
        cards: [
          {
            icon: 'list',
            title: 'Enkelvoudige reeks',
            desc: 'Eén oefening, haar reeksen na elkaar. De rust die je invoert valt tussen elke reeks.',
          },
          {
            icon: 'shuffle',
            title: 'Superset',
            desc: 'Twee oefeningen afgewisseld — labels A1 / A2, een blauwe rail die ze verbindt. De speler gaat binnen de ronde door zonder rust; de rust valt op het einde van de ronde.',
          },
          {
            icon: 'refresh-cw',
            title: 'Circuit',
            desc: 'Meerdere oefeningen aaneengeschakeld, ronde per ronde. Zelfde logica als de superset, met meer dan twee.',
          },
        ],
      },
      {
        kicker: 'DE BELASTINGSMODUS',
        title: 'Squat in % van 1RM, push-ups op lichaamsgewicht.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: '% 1RM',
            desc: 'Het echte gewicht wordt berekend uit de 1RM van de speler, en daarna afgerond op jouw schijven.',
            chip: { label: 'hoofdmodus', tone: 'blue' },
          },
          { name: 'kg', desc: 'Een vast gewicht, hetzelfde voor iedereen.' },
          { name: 'RPE', desc: 'Een intensiteit op gevoel, zonder opgelegd cijfer.' },
          { name: 'LG', desc: 'Lichaamsgewicht.' },
        ],
      },
      {
        kicker: 'WAT BIJ DE SPELER AANKOMT',
        title: 'Jij schrijft “3010”. De speler leest “3 s zakken”.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'TEMPO',
            title: 'Het komt in klare taal aan',
            desc: 'Jij noteert “3010”. De speler leest “3 s zakken · 1 s stijgen”.',
          },
          {
            eyebrow: 'RICHTLIJNEN',
            title: 'De oefeningfiche volgt de speler',
            desc: 'Richtlijnen, foto en video op de oefening uit de bibliotheek duiken weer op in zijn uitvoerder, onder “Hoe doe je het”.',
          },
          {
            eyebrow: 'VOOR HET TOEWIJZEN',
            title: 'Het voorbeeld per speler',
            desc: 'Het echte gewicht van iedereen, reeks per reeks. Spelers zonder 1RM verschijnen als “te testen” in plaats van willekeurig belast.',
          },
        ],
      },
      {
        kicker: 'NIET VERWARREN',
        title: 'Het woord “programma” dekt twee objecten.',
        kind: 'compare',
        heads: ['De krachttraining', 'Het programmasjabloon'],
        tones: ['blue', 'green'],
        rows: [
          {
            label: 'WAT HET IS',
            a: 'Ze wordt in de bouwer gemaakt, toegewezen aan een activiteit in de kalender, en uitgevoerd in de app met de gewichten al berekend.',
            b: 'Een herbruikbaar kader: de structuur van een krachtblok, uit te rollen over meerdere weken.',
          },
          {
            label: 'KANT VAN DE SPELER',
            a: 'Elke opgeroepen speler krijgt ze met zijn eigen gewichten. Een voltooiingsbadge per speler — “3 / 4 reeksen”.',
            b: 'Er wordt niets verstuurd zolang het sjabloon geen gedateerde trainingen heeft voortgebracht.',
          },
          {
            label: 'BIJSTELLINGEN',
            a: 'Aanpassing, uitsluiting, oefening ruilen, absoluut gewicht. De belasting komt vanzelf terug in Trainingsbelasting.',
            b: 'Je bewerkt het één keer, en elke training die er nadien uit komt erft de wijziging.',
          },
        ],
        callouts: [
          {
            icon: 'library',
            tone: 'blue',
            text: 'Alles wat je in een training plaatst komt uit de bibliotheek: vastleggen vanaf een link, een foto of een schema, sorteren in het postvak IN, kernmetrieken en geschatte externe belasting.',
            link: { label: 'De oefeningenbibliotheek', href: '/nl/features/exercise-library/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── DE ────────────────────────────── */
  de: {
    meta: {
      title: 'Programme & Workouts | STRIVN',
      description:
        'Verordnen Sie „Squat 4 × 5 @ 80 %“ für die ganze Mannschaft. Jeder erhält das reale Gewicht, berechnet aus seinem eigenen 1RM und auf Ihre Scheiben gerundet.',
    },
    hero: {
      kicker: 'FUNKTIONEN · PROGRAMME',
      title: 'Derselbe Prozentsatz. Ein Gewicht je Spieler.',
      sub: 'Sie verordnen „Squat 4 × 5 @ 80 %“ für die ganze Mannschaft. Jeder erhält das reale Gewicht, berechnet aus seinem eigenen 1RM und auf Ihre Scheiben gerundet. Sie führen nicht achtzehn Zettel.',
      bullets: [
        '1RM direkt eingetragen oder aus einem submaximalen Satz geschätzt',
        'Blöcke als einfacher Satz, Supersatz oder Zirkel',
        'Vorschau je Spieler, bevor Sie die Einheit zuweisen',
        'Neue Rekorde vorgeschlagen, sobald ein Spieler sein Maximum übertrifft',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Die Bibliothek ansehen', href: '/de/features/exercise-library/' },
      },
      visual: 'program-weights',
    },
    sections: [
      {
        kicker: '1RM-ERHEBUNGEN',
        title: 'Fünf Wiederholungen mit 100 kg genügen.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'DIREKT',
            title: 'Die Zahl, Zeile für Zeile',
            desc: 'Sie tragen den 1RM in Kilogramm im Raster der Übung ein. Der aktuelle 1RM eines Spielers ist immer sein jüngster Wert.',
          },
          {
            eyebrow: 'GESCHÄTZT',
            title: 'Aus einem submaximalen Satz',
            desc: 'Sie tragen 5 Wiederholungen mit 100 kg ein, und der 1RM wird live berechnet, mit Epley oder Brzycki. In der Saison sicherer. Oberhalb Ihrer Wiederholungsgrenze wird die Schätzung als wenig verlässlich markiert.',
          },
        ],
        note: {
          icon: 'trending-up',
          label: 'Rekorde werden vorgeschlagen, nie aufgezwungen',
          desc: 'Hebt ein Spieler schwerer als sein gespeichertes Maximum, schlägt STRIVN den neuen Rekord vor: Sie bestätigen oder verwerfen. Sie können die Aktualisierung auch auf „automatisch“ oder auf „nichts tun“ stellen.',
        },
      },
      {
        kicker: 'DER EINHEITEN-BAUKASTEN',
        title: 'Vom einfachen Satz bis zum vollen Zirkel.',
        kind: 'cards',
        cards: [
          {
            icon: 'list',
            title: 'Einfacher Satz',
            desc: 'Eine Übung, ihre Sätze nacheinander. Die Pause, die Sie eintragen, fällt zwischen jeden Satz.',
          },
          {
            icon: 'shuffle',
            title: 'Supersatz',
            desc: 'Zwei Übungen im Wechsel — Bezeichnungen A1 / A2, eine blaue Schiene verbindet sie. Der Spieler geht innerhalb der Runde ohne Pause durch; die Pause fällt am Rundenende.',
          },
          {
            icon: 'refresh-cw',
            title: 'Zirkel',
            desc: 'Mehrere Übungen aneinandergereiht, Runde für Runde. Dieselbe Logik wie der Supersatz, mit mehr als zwei.',
          },
        ],
      },
      {
        kicker: 'DER BELASTUNGSMODUS',
        title: 'Kniebeuge in % des 1RM, Liegestütze mit Körpergewicht.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: '% 1RM',
            desc: 'Das reale Gewicht wird aus dem 1RM des Spielers berechnet und dann auf Ihre Scheiben gerundet.',
            chip: { label: 'Hauptmodus', tone: 'blue' },
          },
          { name: 'kg', desc: 'Ein festes Gewicht, für alle gleich.' },
          { name: 'RPE', desc: 'Eine Intensität nach Empfinden, ohne vorgegebene Zahl.' },
          { name: 'KG', desc: 'Körpergewicht.' },
        ],
      },
      {
        kicker: 'WAS BEIM SPIELER ANKOMMT',
        title: 'Sie schreiben „3010“. Der Spieler liest „3 s abwärts“.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'TEMPO',
            title: 'Es kommt im Klartext an',
            desc: 'Sie notieren „3010“. Der Spieler liest „3 s abwärts · 1 s aufwärts“.',
          },
          {
            eyebrow: 'ANWEISUNGEN',
            title: 'Die Übungskarte folgt dem Spieler',
            desc: 'Anweisungen, Foto und Video, die auf der Bibliotheksübung liegen, erscheinen in seinem Ausführer wieder, unter „Wie geht das“.',
          },
          {
            eyebrow: 'VOR DEM ZUWEISEN',
            title: 'Die Vorschau je Spieler',
            desc: 'Das reale Gewicht jedes Einzelnen, Satz für Satz. Spieler ohne 1RM erscheinen als „zu testen“ statt aufs Geratewohl belastet.',
          },
        ],
      },
      {
        kicker: 'NICHT VERWECHSELN',
        title: 'Das Wort „Programm“ deckt zwei Objekte ab.',
        kind: 'compare',
        heads: ['Die Krafteinheit', 'Die Programmvorlage'],
        tones: ['blue', 'green'],
        rows: [
          {
            label: 'WAS ES IST',
            a: 'Sie wird im Baukasten gebaut, einem Kalendertermin zugewiesen und in der App mit bereits aufgelösten Gewichten ausgeführt.',
            b: 'Ein wiederverwendbarer Rahmen: die Struktur eines Kraftblocks, über mehrere Wochen auszurollen.',
          },
          {
            label: 'SEITE DES SPIELERS',
            a: 'Jeder aufgebotene Spieler erhält sie mit seinen eigenen Gewichten. Ein Abschluss-Badge je Spieler — „3 / 4 Sätze“.',
            b: 'Es wird nichts versendet, solange die Vorlage keine datierten Einheiten erzeugt hat.',
          },
          {
            label: 'ANPASSUNGEN',
            a: 'Skalierung, Ausschluss, Übungstausch, absolutes Gewicht. Die Belastung fließt von selbst in die Trainingsbelastung zurück.',
            b: 'Sie bearbeiten sie einmal, und jede daraus erzeugte Einheit erbt die Änderung.',
          },
        ],
        callouts: [
          {
            icon: 'library',
            tone: 'blue',
            text: 'Alles, was Sie in eine Einheit legen, stammt aus der Bibliothek: Erfassung über Link, Foto oder Zeichnung, Sortierung im Posteingang, Kennzahlen und geschätzte externe Belastung.',
            link: { label: 'Die Übungsbibliothek', href: '/de/features/exercise-library/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── PT ────────────────────────────── */
  pt: {
    meta: {
      title: 'Programas e workouts | STRIVN',
      description:
        'Prescreva «Squat 4 × 5 @ 80 %» para toda a equipa. Cada um recebe o peso real calculado sobre a sua própria 1RM, arredondado aos seus discos.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · PROGRAMAS',
      title: 'A mesma percentagem. Um peso por jogador.',
      sub: 'Prescreve «Squat 4 × 5 @ 80 %» para toda a equipa. Cada um recebe o peso real calculado sobre a sua própria 1RM, arredondado aos seus discos. Não anda a gerir dezoito folhas.',
      bullets: [
        '1RM introduzida diretamente, ou estimada a partir de uma série submáxima',
        'Blocos em série simples, superset ou circuito',
        'Pré-visualização por jogador antes de atribuir o treino',
        'Novos recordes propostos assim que um jogador supera o seu máximo',
      ],
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver a biblioteca', href: '/pt/features/exercise-library/' },
      },
      visual: 'program-weights',
    },
    sections: [
      {
        kicker: 'AVALIAÇÕES 1RM',
        title: 'Cinco repetições a 100 kg bastam.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'DIRETO',
            title: 'O número, linha a linha',
            desc: 'Introduz a 1RM em quilos na grelha do exercício. A 1RM atual de um jogador é sempre o seu valor mais recente.',
          },
          {
            eyebrow: 'ESTIMADA',
            title: 'A partir de uma série submáxima',
            desc: 'Introduz 5 repetições a 100 kg e a 1RM calcula-se em direto, com Epley ou Brzycki. Mais seguro em plena época. Acima do seu teto de repetições, a estimativa é assinalada como pouco fiável.',
          },
        ],
        note: {
          icon: 'trending-up',
          label: 'Os recordes são propostos, nunca impostos',
          desc: 'Quando um jogador levanta mais do que o seu máximo registado, a STRIVN propõe o novo recorde: confirma ou descarta. Também pode definir a atualização como «automática», ou «não fazer nada».',
        },
      },
      {
        kicker: 'O CONSTRUTOR DE TREINO',
        title: 'Da série simples ao circuito completo.',
        kind: 'cards',
        cards: [
          {
            icon: 'list',
            title: 'Série simples',
            desc: 'Um exercício, as suas séries umas a seguir às outras. O descanso que introduz cai entre cada série.',
          },
          {
            icon: 'shuffle',
            title: 'Superset',
            desc: 'Dois exercícios alternados — etiquetas A1 / A2, uma calha azul a ligá-los. O jogador encadeia sem descanso dentro da volta; o descanso cai no fim da volta.',
          },
          {
            icon: 'refresh-cw',
            title: 'Circuito',
            desc: 'Vários exercícios encadeados, volta a volta. Mesma lógica do superset, com mais de dois.',
          },
        ],
      },
      {
        kicker: 'O MODO DE CARGA',
        title: 'O agachamento em % de 1RM, as flexões com peso do corpo.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: '% 1RM',
            desc: 'O peso real é calculado a partir da 1RM do jogador, e depois arredondado aos seus discos.',
            chip: { label: 'modo principal', tone: 'blue' },
          },
          { name: 'kg', desc: 'Um peso fixo, igual para toda a gente.' },
          { name: 'RPE', desc: 'Uma intensidade pela sensação, sem número imposto.' },
          { name: 'PC', desc: 'Peso corporal.' },
        ],
      },
      {
        kicker: 'O QUE CHEGA AO JOGADOR',
        title: 'Você escreve «3010». O jogador lê «3 s a descer».',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'TEMPO',
            title: 'Chega em linguagem clara',
            desc: 'Escreve «3010». O jogador lê «3 s a descer · 1 s a subir».',
          },
          {
            eyebrow: 'INSTRUÇÕES',
            title: 'A ficha de exercício segue o jogador',
            desc: 'Instruções, foto e vídeo colocados no exercício da biblioteca reaparecem no seu executor, em «Como fazer».',
          },
          {
            eyebrow: 'ANTES DE ATRIBUIR',
            title: 'A pré-visualização por jogador',
            desc: 'O peso real de cada um, série a série. Os jogadores sem 1RM aparecem «por testar» em vez de carregados ao acaso.',
          },
        ],
      },
      {
        kicker: 'NÃO CONFUNDIR',
        title: 'A palavra «programa» cobre dois objetos.',
        kind: 'compare',
        heads: ['O treino de força', 'O modelo de programa'],
        tones: ['blue', 'green'],
        rows: [
          {
            label: 'O QUE É',
            a: 'Constrói-se no construtor, atribui-se a um evento do calendário, e executa-se na app com os pesos já resolvidos.',
            b: 'Uma matriz reutilizável: a estrutura de um bloco de força, para desdobrar em várias semanas.',
          },
          {
            label: 'DO LADO DO JOGADOR',
            a: 'Cada jogador convocado recebe-o com os seus próprios pesos. Emblema de conclusão por jogador — «3 / 4 séries».',
            b: 'Nada é enviado enquanto o modelo não tiver produzido treinos datados.',
          },
          {
            label: 'AJUSTES',
            a: 'Modulação, exclusão, troca de exercício, peso absoluto. A carga sobe sozinha para Carga de treino.',
            b: 'Edita-se uma vez, e todos os treinos que dele saírem depois herdam a alteração.',
          },
        ],
        callouts: [
          {
            icon: 'library',
            tone: 'blue',
            text: 'Tudo o que coloca num treino sai da biblioteca: captura a partir de uma ligação, uma foto ou um esquema, triagem na caixa de entrada, métricas-chave e carga externa estimada.',
            link: { label: 'A biblioteca de exercícios', href: '/pt/features/exercise-library/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── ES ────────────────────────────── */
  es: {
    meta: {
      title: 'Programas y workouts | STRIVN',
      description:
        'Prescribe «Squat 4 × 5 @ 80 %» para todo el equipo. Cada uno recibe el peso real calculado sobre su propio 1RM, redondeado a tus discos.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · PROGRAMAS',
      title: 'El mismo porcentaje. Un peso por jugador.',
      sub: 'Prescribes «Squat 4 × 5 @ 80 %» para todo el equipo. Cada uno recibe el peso real calculado sobre su propio 1RM, redondeado a tus discos. No llevas dieciocho hojas.',
      bullets: [
        '1RM introducido en directo, o estimado desde una serie submáxima',
        'Bloques en serie simple, superserie o circuito',
        'Vista previa por jugador antes de asignar la sesión',
        'Nuevos récords propuestos en cuanto un jugador supera su máximo',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver la biblioteca', href: '/es/features/exercise-library/' },
      },
      visual: 'program-weights',
    },
    sections: [
      {
        kicker: 'EVALUACIONES 1RM',
        title: 'Cinco repeticiones a 100 kg bastan.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'DIRECTO',
            title: 'La cifra, línea a línea',
            desc: 'Introduces el 1RM en kilos en la rejilla del ejercicio. El 1RM actual de un jugador es siempre su valor más reciente.',
          },
          {
            eyebrow: 'ESTIMADO',
            title: 'Desde una serie submáxima',
            desc: 'Introduces 5 repeticiones a 100 kg y el 1RM se calcula en directo, con Epley o Brzycki. Más seguro en plena temporada. Por encima de tu techo de repeticiones, la estimación se señala como poco fiable.',
          },
        ],
        note: {
          icon: 'trending-up',
          label: 'Los récords se proponen, nunca se imponen',
          desc: 'Cuando un jugador levanta más que su máximo registrado, STRIVN te propone el nuevo récord: confirmas o descartas. También puedes fijar la actualización en «automática», o en «no hacer nada».',
        },
      },
      {
        kicker: 'EL CONSTRUCTOR DE SESIÓN',
        title: 'De la serie simple al circuito completo.',
        kind: 'cards',
        cards: [
          {
            icon: 'list',
            title: 'Serie simple',
            desc: 'Un ejercicio, sus series una tras otra. El descanso que introduces cae entre cada serie.',
          },
          {
            icon: 'shuffle',
            title: 'Superserie',
            desc: 'Dos ejercicios alternados — etiquetas A1 / A2, un raíl azul que los une. El jugador encadena sin descanso dentro de la vuelta; el descanso cae al final de la vuelta.',
          },
          {
            icon: 'refresh-cw',
            title: 'Circuito',
            desc: 'Varios ejercicios encadenados, vuelta a vuelta. Misma lógica que la superserie, con más de dos.',
          },
        ],
      },
      {
        kicker: 'EL MODO DE CARGA',
        title: 'La sentadilla en % de 1RM, las flexiones con peso corporal.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: '% 1RM',
            desc: 'El peso real se calcula desde el 1RM del jugador, y luego se redondea a tus discos.',
            chip: { label: 'modo principal', tone: 'blue' },
          },
          { name: 'kg', desc: 'Un peso fijo, igual para todo el mundo.' },
          { name: 'RPE', desc: 'Una intensidad por sensación, sin cifra impuesta.' },
          { name: 'PC', desc: 'Peso corporal.' },
        ],
      },
      {
        kicker: 'LO QUE LLEGA AL JUGADOR',
        title: 'Tú escribes «3010». El jugador lee «3 s de bajada».',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'TEMPO',
            title: 'Llega en claro',
            desc: 'Tú escribes «3010». El jugador lee «3 s de bajada · 1 s de subida».',
          },
          {
            eyebrow: 'CONSIGNAS',
            title: 'La ficha de ejercicio sigue al jugador',
            desc: 'Consignas, foto y vídeo puestos en el ejercicio de la biblioteca reaparecen en su ejecutor, bajo «Cómo hacerlo».',
          },
          {
            eyebrow: 'ANTES DE ASIGNAR',
            title: 'La vista previa por jugador',
            desc: 'El peso real de cada uno, serie a serie. Los jugadores sin 1RM aparecen «por testar» en vez de cargados al azar.',
          },
        ],
      },
      {
        kicker: 'NO CONFUNDIR',
        title: 'La palabra «programa» cubre dos objetos.',
        kind: 'compare',
        heads: ['La sesión de fuerza', 'La plantilla de programa'],
        tones: ['blue', 'green'],
        rows: [
          {
            label: 'QUÉ ES',
            a: 'Se construye en el constructor, se asigna a un evento del calendario, y se ejecuta en la app con los pesos ya resueltos.',
            b: 'Un marco reutilizable: la estructura de un bloque de fuerza, para desplegar en varias semanas.',
          },
          {
            label: 'LADO JUGADOR',
            a: 'Cada jugador convocado la recibe con sus propios pesos. Insignia de finalización por jugador — «3 / 4 series».',
            b: 'No se envía nada mientras la plantilla no haya producido sesiones con fecha.',
          },
          {
            label: 'AJUSTES',
            a: 'Modulación, exclusión, cambio de ejercicio, peso absoluto. La carga sube sola a Carga de entrenamiento.',
            b: 'Se edita una vez, y todas las sesiones que salgan después heredan el cambio.',
          },
        ],
        callouts: [
          {
            icon: 'library',
            tone: 'blue',
            text: 'Todo lo que pones en una sesión sale de la biblioteca: captura desde un enlace, una foto o un esquema, clasificación en la bandeja de entrada, métricas clave y carga externa estimada.',
            link: { label: 'La biblioteca de ejercicios', href: '/es/features/exercise-library/' },
          },
        ],
      },
    ],
  },
};
