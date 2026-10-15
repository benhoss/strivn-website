import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

export function dePage(b: LandingBits): SwitchPage {
  const costAnswer = `Die Preise sind öffentlich: ${b.publicPrices}. ${b.gpsFiles} ${b.trialSentence} Ohne Karte. Pro bleibt individuell.`;

  return {
    gpsNote: b.gpsFiles,
    crumb: 'Von Opteamal zu STRIVN',
    meta: {
      title: 'Warum von Opteamal zu STRIVN wechseln',
      description:
        'Opteamal, ein belgischer Anbieter, wurde am 18. Dezember 2025 von Teamworks übernommen. Sachlicher Vergleich: öffentliche STRIVN-Preise, Konto ohne Freigabe des Klubs, Check-in per Link. Teamworks AMS kündigt Integrationen, ein Medizinmodul und Zertifizierungen an.',
      ogTitle: 'Sie nutzen Opteamal? Warum zu STRIVN wechseln',
      ogDescription:
        'Am 18. Dezember 2025 von Teamworks übernommen. Öffentliche STRIVN-Preise, Start in Eigenregie, Check-in per Link. Der Vergleich schreibt Opteamal nur öffentliche Fakten zu.',
      twitterTitle: 'Warum von Opteamal zu STRIVN wechseln',
      twitterDescription: 'Sachlicher Vergleich für Klubs, die noch auf Opteamal sind, inzwischen bei Teamworks.',
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, der Kontrollturm für den Performance-Staff',
    },
    hero: {
      eyebrow: 'Opteamal geht zu Teamworks',
      titleLead: 'Sie nutzen Opteamal?',
      title: 'Darum wechseln Sie zu STRIVN.',
      lede: 'Am 18. Dezember 2025 hat Teamworks Opteamal übernommen, den belgischen Anbieter, und gliedert es in Teamworks ein. Diese Seite stellt die öffentlichen Fakten auf ihrer Seite neben das, was STRIVN liefert. Wo ein Opteamal-Detail nicht öffentlich ist, schreiben wir das, statt eine Lücke zu erfinden.',
      primaryCta: 'Zu STRIVN wechseln',
      secondaryCta: 'Vergleich ansehen',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'Vergleich',
      title: 'Opteamal (jetzt Teamworks) und STRIVN, Punkt für Punkt.',
      lede: 'Zwei Spalten mit Fakten, danach eine Lesart. Der Vorteil liegt bei Teamworks AMS, wenn ihre öffentlichen Ankündigungen das sagen. Er liegt bei STRIVN, wenn der Kontrast öffentlich ist. Sonst bleibt die Lesart offen.',
      columns: {
        criterion: 'Kriterium',
        opteamal: 'Opteamal (jetzt Teamworks)',
        strivn: 'STRIVN',
        verdict: 'Urteil',
      },
      rows: [
        {
          criterion: 'Wer über das Weitere entscheidet',
          opteamal:
            'Opteamal, ein belgischer Anbieter, wurde am 18. Dezember 2025 von Teamworks übernommen und wird in Teamworks eingegliedert. Roadmap und Migration: Teamworks.',
          strivn: 'Unabhängiger Anbieter. Die Roadmap ist die von STRIVN.',
          verdictLead: 'Fakt',
          verdict: 'Seit der Übernahme entscheidet Teamworks über das Weitere von Opteamal.',
        },
        {
          criterion: 'Preis',
          opteamal: 'Individuell, nicht öffentlich.',
          strivn: `Öffentlich: ${b.publicPrices}.`,
          verdictLead: 'STRIVN',
          verdict: 'Die STRIVN-Preise stehen auf der Seite, außer Pro, das individuell bleibt.',
        },
        {
          criterion: 'Wie Sie kaufen',
          opteamal: 'Enterprise-Vertrieb.',
          strivn:
            'Der Staff legt das Konto selbst an: Name, E-Mail, Telefon, Passwort, Sprache, Land. Keine Freigabe des Klubs oder eines Verbands. 30 Tage Semi-Pro zum Start, ohne Karte.',
          verdictLead: 'STRIVN',
          verdict: 'Start in Eigenregie bei STRIVN. Enterprise-Vertrieb auf ihrer Seite.',
        },
        {
          criterion: 'Integrationen',
          opteamal:
            'Teamworks AMS kündigt mehr als 100 Integrationen an. Welche Liste für einen Opteamal-Klub noch gilt, ist hier nicht öffentlich.',
          strivn:
            'Nur Dateien, bei Semi-Pro und Pro: CSV, XLSX, Catapult, STATSports, SPT- / GameTraka-Traces. Kein direkter GPS-Anschluss, keine öffentliche API.',
          verdictLead: 'Teamworks AMS',
          verdict: 'Die angekündigten Integrationen sind ein Vorteil von Teamworks AMS. STRIVN bleibt bei Dateien.',
        },
        {
          criterion: 'Medizin',
          opteamal:
            'Teamworks AMS kündigt ein Medizinmodul an. Das Detail, das noch Opteamal gehört, ist hier nicht öffentlich.',
          strivn:
            'Verletzungstagebuch, Checkliste und Plan für die Rückkehr, Reha-Einheiten. Medizinboard bei Semi-Pro und Pro. Keine Protokollbibliothek.',
          verdictLead: 'Teamworks AMS',
          verdict: 'Das angekündigte Medizinmodul ist ein Vorteil von Teamworks AMS.',
        },
        {
          criterion: 'Zertifizierungen',
          opteamal: 'Teamworks AMS kündigt ISO 27001 und SOC 2 an.',
          strivn:
            'Keine Zertifizierung beansprucht. Transport per HTTPS. Recht auf Auskunft, Berichtigung, Löschung oder eine Kopie über hello@strivn.net. Kein genanntes Hosting-Land, kein genannter Auftragsverarbeitungsvertrag.',
          verdictLead: 'Teamworks AMS',
          verdict: 'Die angekündigten Zertifizierungen sind ein Vorteil von Teamworks AMS.',
        },
        {
          criterion: 'Sprachen',
          opteamal: 'Auf dieser Seite nicht öffentlich.',
          strivn: 'Französisch, Englisch, Niederländisch, Deutsch, Portugiesisch und Spanisch. Französisch ist der Quelltext.',
          verdictLead: 'Offen',
          verdict: 'STRIVN dokumentiert sechs Sprachen, darunter Französisch und Niederländisch. Das Opteamal-Detail ist nicht öffentlich.',
        },
        {
          criterion: 'Check-in der Spieler',
          opteamal: 'Auf dieser Seite nicht öffentlich.',
          strivn:
            'Link per WhatsApp oder E-Mail, ohne App. Automatischer Versand bei Semi-Pro und Pro. WHOOP kann den Check-in auf diesen Stufen vorausfüllen.',
          verdictLead: 'Offen',
          verdict: 'STRIVN dokumentiert den Link ohne App. Das Äquivalent bei Opteamal ist nicht öffentlich.',
        },
        {
          criterion: 'Seitenlinie',
          opteamal: 'Auf dieser Seite nicht öffentlich.',
          strivn:
            'Anwesenheiten, Chrono pro Block, Mannschaften und Spielstand. Offline-Protokoll auf dem Telefon, synchronisiert bei der Rückkehr.',
          verdictLead: 'Offen',
          verdict: 'STRIVN dokumentiert den Offline-Modus. Das Äquivalent bei Opteamal ist nicht öffentlich.',
        },
        {
          criterion: 'Belastung und GPS',
          opteamal: 'Auf dieser Seite nicht öffentlich.',
          strivn:
            'Woche in AU, ACWR 7 Tage auf 28, Lesarten Bereit, Nachverfolgen, Risiko. GPS-Dateiimport bei Semi-Pro und Pro, einschließlich der Berechnung roher SPT-Traces.',
          verdictLead: 'Offen',
          verdict: 'STRIVN dokumentiert Belastung und GPS-Dateien. Das Opteamal-Detail ist nicht öffentlich.',
        },
      ],
      note: 'Fakten zu Opteamal und Teamworks beschränkt auf öffentliche Angaben zum 15. Oktober 2026: Übernahme, Preis auf Anfrage, Enterprise-Vertrieb und Ankündigungen von Teamworks AMS (Integrationen, Medizinmodul, ISO 27001, SOC 2). Der Rest ihrer Spalte steht als nicht öffentlich.',
    },
    reasons: {
      id: 'raisons',
      eyebrow: 'Warum wechseln',
      title: 'Elf Gründe zu wechseln',
      lede: 'Was STRIVN liefert, und die einzige neue Tatsache auf der Seite von Opteamal: seit der Übernahme entscheidet Teamworks über das Weitere.',
      items: [
        {
          title: 'Die Preise stehen auf der Seite',
          body: `Free, Amateur, Semi-Pro und Pro: ${b.publicPrices}. Dieselben Beträge wie im Katalog. Pro bleibt individuell, als Angebot, nicht als versteckter Preis der anderen Stufen.`,
        },
        {
          title: 'Sie legen das Konto selbst an',
          body: 'Name, E-Mail, Telefon, Passwort, Sprache, Land. Keine Freigabe des Klubs oder eines Verbands. Das Konto startet mit 30 Tagen Semi-Pro, ohne Karte.',
        },
        {
          title: 'Spieler antworten über einen Link',
          body: 'Wellness (Müdigkeit, Schlaf, Stimmung, Stress) und RPE, per WhatsApp oder E-Mail, ohne App. Der automatische Versand morgens und abends liegt bei Semi-Pro und Pro. WHOOP kann den Check-in auf diesen Stufen vorausfüllen.',
        },
        {
          title: 'Die Seitenlinie funktioniert offline',
          body: 'Anwesenheiten, Chrono pro Block, Mannschaften und Spielstand. Das Telefon führt ein Protokoll und synchronisiert es bei der Rückkehr. Fehlt die Dauer, nutzt die Belastung die tatsächlich gespielte Zeit.',
        },
        {
          title: 'Die Woche planen Sie in AU',
          body: 'Ziel, geplant gegen tatsächlich, Anpassung pro Spieler (Skala, Ausschluss oder Einzelarbeit), ohne den Mannschaftsplan oder das Aufgebot zu ändern. Belastung aus GPS braucht Semi-Pro.',
        },
        {
          title: 'Die Übung läuft und lässt sich teilen',
          body: 'Fußball, Handball, Rugby, Basketball, Volleyball. Animation, Download als PNG oder WebM, PNG über das Teilen-Menü des Telefons. 3 Tafeln und 3 Vorlagen bei Free, kein Limit ab Amateur.',
        },
        {
          title: 'Französisch und Niederländisch, plus vier Sprachen',
          body: 'Französisch, Englisch, Niederländisch, Deutsch, Portugiesisch und Spanisch, auf der Seite des Coaches und des Spielers. Französisch ist der Quelltext. Niederländisch ist für belgische Staffs da.',
        },
        {
          title: 'Jede Rolle hat ihre Rechte',
          body: 'Cheftrainer, Assistent, medizinischer Staff, Physio, Athletiktrainer, Analyst, Delegierter, Scout, Torwarttrainer. Free: nur der Inhaber. Amateur: eine Einladung zusätzlich. Semi-Pro und Pro: kein Limit.',
        },
        {
          title: 'Eine Absenz nimmt den Spieler aus dem Aufgebot',
          body: 'Ein abwesender Spieler fällt aus den Aufgeboten für Training und Spiel. Ein Spieler, der im Training eingeschränkt ist, fällt aus den Spielen. Behandlung, Einzelprogramm und eine ausdrückliche Lehrgangsauswahl bleiben verfügbar.',
        },
        {
          title: 'Der SPT-Trace wird neu berechnet',
          body: `Nur Dateien, ${b.gpsTiers}: CSV oder XLSX (Catapult, STATSports oder eine beliebige Tabelle) und SPT- / GameTraka-Traces (.gt). STRIVN berechnet Distanz und Geschwindigkeitszonen auf dem Roh-Trace. Kein Direktanschluss.`,
        },
        {
          title: 'Über das Weitere von Opteamal entscheidet Teamworks',
          body: 'Seit dem 18. Dezember 2025 liegen Roadmap und Migration von Opteamal bei Teamworks. Das ist ein Wechsel der entscheidenden Stelle, kein Urteil über das Produkt. STRIVN bleibt ein unabhängiger Anbieter.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Wie Sie wechseln',
      title: 'Drei Schritte. Kein Integrationsprojekt.',
      lede: 'Sie können einen Bereich öffnen, während Ihr Opteamal-Vertrag noch läuft. Ihre Kündigungsfrist kennen wir nicht: sie steht in Ihrem Vertrag, nicht hier.',
      steps: [
        {
          n: '01',
          title: 'Bereich anlegen',
          body: 'Name, E-Mail, Telefon, Passwort, Sprache, Land. Ohne Freigabe des Klubs. Das Konto startet mit 30 Tagen Semi-Pro, ohne Karte.',
        },
        {
          n: '02',
          title: 'Verlauf importieren',
          body: 'CSV oder XLSX für Belastung, RPE und Wellness. GPS-Exporte (Catapult, STATSports, SPT / GameTraka) gehen bei Semi-Pro mit, also während der Testphase. Die Spalten werden erraten und danach für das Team gemerkt.',
        },
        {
          n: '03',
          title: 'Staff einladen',
          body: 'Eine Rolle pro Person, mit ihren Rechten. Bei Free nur der Inhaber. Bei Amateur eine Einladung zusätzlich. Bei Semi-Pro und Pro kein Limit.',
        },
      ],
      offer: {
        tag: 'Für Klubs, die Opteamal verlassen',
        title: 'Die erste Spaltenzuordnung können wir mit Ihnen machen.',
        body: 'Die drei Schritte reichen zum Start. Wenn wir die Spalten einmal mit Ihnen zuordnen sollen, schreiben Sie uns. Das Begleitangebot ist noch zu bestätigen.',
        cta: 'Über meine Migration sprechen',
        href: mail('Migration von Opteamal'),
      },
    },
    stay: {
      id: 'rester',
      eyebrow: 'Bleiben',
      title: 'Wann Opteamal oder Teamworks die richtige Wahl bleibt.',
      lede: 'Wechseln ist in diesen Fällen nicht der richtige Schritt. Wir schreiben sie auf, damit die Seite brauchbar bleibt.',
      items: [
        {
          title: 'Das Medizinmodul für Unternehmen',
          body: 'Teamworks AMS kündigt ein Medizinmodul an. STRIVN deckt das Tagebuch, die Rückkehr und die Reha ab, keine Protokollbibliothek.',
        },
        {
          title: 'ISO 27001 und SOC 2',
          body: 'Teamworks AMS kündigt sie an. STRIVN beansprucht keine Zertifizierung, kein Hosting-Land und keinen Auftragsverarbeitungsvertrag.',
        },
        {
          title: 'Die direkten Integrationen',
          body: 'Teamworks AMS kündigt mehr als 100 Integrationen an. STRIVN importiert Dateien und hat keinen direkten GPS-Anschluss und keine öffentliche API.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Die Fragen, wenn Sie Opteamal verlassen.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Kann ich meinen Opteamal-Verlauf mitnehmen?',
          a: 'Per Datei, ja. Belastung, RPE und Wellness: CSV oder XLSX. GPS-Exporte (CSV, XLSX, Catapult, STATSports oder ein SPT- / GameTraka-Trace) importieren Sie bei Semi-Pro und Pro, der Stufe der 30-tägigen Testphase. Die Spaltenzuordnung wird anhand bekannter Kopfzeilen erraten und danach für das Team gespeichert. Es gibt keine öffentliche API, um ein Opteamal-Konto zu leeren. Schreiben Sie uns an hello@strivn.net, wenn wir die erste Zuordnung gemeinsam machen sollen.',
          mailto: mail('Migration von Opteamal'),
        },
        {
          q: 'Ich bin noch im Vertrag. Wann kann ich wechseln?',
          a: 'Kündigungsfrist, Verlängerung und Ausstiegskosten stehen in Ihrem Vertrag mit Opteamal oder Teamworks. Wir veröffentlichen sie nicht, und diese Seite sagt Ihnen nicht, ihn zu kündigen. Sie können parallel einen STRIVN-Bereich anlegen: ohne Freigabe des Klubs, ohne Karte, mit 30 Tagen Semi-Pro.',
        },
        {
          q: 'Was kostet es wirklich?',
          a: costAnswer,
        },
        {
          q: 'Was ändert sich für die Spieler?',
          a: 'Zum Antworten installieren sie nichts. Ein Link per WhatsApp oder E-Mail reicht für Wellness, RPE und Erinnerungen. Der automatische Versand liegt bei Semi-Pro und Pro. STRIVN Player und STRIVN coach (iOS und Android) gibt es zusätzlich: Hüllen um die Web-App, mit Benachrichtigungen, und einer Chrono an der Seitenlinie in der Coach-App.',
        },
        {
          q: 'Und die Sprachen, für einen belgischen Klub?',
          a: 'STRIVN gibt es auf Französisch, Englisch, Niederländisch, Deutsch, Portugiesisch und Spanisch, auf der Seite des Coaches und des Spielers. Französisch ist der Quelltext. Niederländisch ist dabei. Die Sprachen, die Opteamal noch bedient, stehen hier nicht im Detail: das ist auf dieser Seite nicht öffentlich.',
        },
        {
          q: 'Was finde ich nicht wieder?',
          a: 'Das Medizinmodul, das Teamworks AMS ankündigt, die Zertifizierungen ISO 27001 und SOC 2, und die mehr als 100 Integrationen, die sie ankündigen. STRIVN beansprucht sie nicht. Verletzungstagebuch, Rückkehr und Dateiimport werden geliefert.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Testphase Semi-Pro',
      title: 'Legen Sie den Bereich an und importieren Sie Ihren Verlauf.',
      body: `${b.trialSentence} Ihr Opteamal-Vertrag endet nicht von selbst: Sie wählen den Zeitpunkt.`,
      primaryCta: 'Meinen Bereich anlegen',
      secondaryCta: 'Über meine Migration sprechen',
      secondaryHref: mail('Migration von Opteamal'),
      fine: b.perks,
    },
    disclaimer:
      'Opteamal, Teamworks und Teamworks AMS sind Marken ihrer jeweiligen Inhaber. STRIVN ist mit diesen Gesellschaften nicht verbunden und wird von ihnen nicht unterstützt. Catapult, STATSports, SPT, GameTraka und WHOOP sind Marken ihrer Inhaber. Der GPS-Import erfolgt per Datei; WHOOP kann den Check-in bei Semi-Pro und Pro vorausfüllen. Angaben zu Opteamal und Teamworks stammen aus öffentlichen Quellen zum 15. Oktober 2026 und können sich ändern. STRIVN-Preise: der geltende Katalog.',
  };
}
