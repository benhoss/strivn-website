import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** German of the French source text: formal Sie, as the site's DE locale. */
export function dePage(b: LandingBits): SwitchPage {
  const migration = mail('Wechsel von Teamworks zu STRIVN');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'STRIVN oder Teamworks',
    meta: {
      title: 'Alternative zu Teamworks: STRIVN für den Staff Ihres Klubs',
      description: `STRIVN oder Teamworks? Öffentliche Preise, Konto online eröffnet, ${b.trialPerk}, in sechs Sprachen. Opteamal-Klubs willkommen.`,
      ogTitle: 'Sie arbeiten mit Teamworks? Wechseln Sie zu STRIVN, gebaut für Ihren Staff.',
      ogDescription: `Teamworks betreut mehr als 6.500 Elite-Organisationen, auf Demo-Anfrage. STRIVN zeigt seine Preise und lässt sich online eröffnen: ${b.trialPerk}.`,
      twitterTitle: 'STRIVN oder Teamworks: Wechseln Sie zu STRIVN.',
      twitterDescription: `Öffentliche Preise, Konto online eröffnet, ${b.trialPerk}.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, der Kontrollturm des Performance-Staffs',
    },
    hero: {
      eyebrow: 'STRIVN oder Teamworks',
      titleLead: 'Sie arbeiten mit Teamworks?',
      title: 'Wechseln Sie zu STRIVN, gebaut für Ihren Staff.',
      lede: `Teamworks betreut mehr als 6.500 Elite-Sportorganisationen, auf Demo-Anfrage und auf Angebot. STRIVN ist für den Staff eines Klubs gebaut: öffentliche Preise, Konto online eröffnet, ${b.trialDays} Tage Semi-Pro, um an Ihren Einheiten zu vergleichen.`,
      primaryCta: 'Meinen Bereich kostenlos erstellen',
      secondaryCta: 'Mit Teamworks vergleichen',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'STRIVN oder Teamworks',
      title: 'Vergleichen Sie STRIVN und Teamworks, Zeile für Zeile.',
      lede: 'Fünf Punkte, zu denen Teamworks seine Antwort veröffentlicht, neben dem, was STRIVN liefert. Den Rest beurteilen Sie an Ihren eigenen Einheiten.',
      columns: {
        criterion: 'Kriterium',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: 'Für wen',
          teamworks: 'Mehr als 6.500 Elite-Sportorganisationen.',
          strivn: 'Der Staff eines Klubs, vom Regional- bis zum Profibereich: 141 Teams, davon 14 Profiteams.',
        },
        {
          criterion: 'Preis',
          teamworks: 'Auf Angebot, nach einer Demo.',
          strivn: `Auf der Seite angegeben: ${b.publicPrices}.`,
        },
        {
          criterion: 'Start',
          teamworks: 'Demo-Anfrage bei ihrem Vertriebsteam.',
          strivn: `Der Staff erstellt das Konto selbst, ohne Freigabe des Klubs. ${b.trialSentence}`,
        },
        {
          criterion: 'Roadmap',
          teamworks: 'In Durham, USA, entschieden, für 6.500 Organisationen.',
          strivn:
            'Von STRIVN entschieden, als unabhängigem Anbieter. Wir kündigen jede Neuerung per E-Mail an die Coaches an.',
        },
        {
          criterion: 'Opteamal-Klubs',
          teamworks: 'Wechsel auf die Teamworks-Plattform angekündigt, seit der Übernahme am 18. Dezember 2025.',
          strivn: 'Historie per Datei importiert, während Ihr Vertrag läuft.',
        },
      ],
      note: 'Quellen: teamworks.com und Pressemitteilung von Teamworks vom 18. Dezember 2025, Stand 15. Oktober 2026. STRIVN-Zahlen Stand 18. September 2026.',
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Warum STRIVN',
      title: 'Lesen Sie den Zustand jedes Spielers vor der Einheit.',
      lede: 'Teamworks deckt Scouting, Organisation und Performance von Elite-Organisationen ab. STRIVN konzentriert sich auf die Woche Ihres Staffs. Sieben Gründe, es zu wählen.',
      items: [
        {
          title: 'Senden Sie den Check-in per WhatsApp',
          body: 'Der Spieler erhält einen Link per WhatsApp oder E-Mail und antwortet, ohne eine App zu installieren. Er bewertet Müdigkeit, Schlaf, Stimmung und Stress, nach der Einheit dann seinen RPE. Der automatische Versand gehört zu Semi-Pro und Pro. Sie lesen die Antworten vor dem Training.',
        },
        {
          title: 'Planen Sie die Woche in AU',
          body: 'Legen Sie das Ziel fest, verfolgen Sie Plan gegen Ist und passen Sie Spieler für Spieler an. STRIVN berechnet die ACWR über 7 und 28 Tage und ordnet jeden Spieler einem von drei Zuständen zu.',
        },
        {
          title: 'Importieren Sie den GPS-Export, egal von welchem Sensor',
          body: `Laden Sie die CSV- oder XLSX-Datei von Catapult, STATSports oder einem anderen System hoch, oder die SPT- / GameTraka-Trace. Die Spalten werden beim ersten Import erkannt und dann gespeichert. Import ${b.gpsTiers}.`,
        },
        {
          title: 'Steuern Sie die Einheit vom Spielfeldrand',
          body: 'Anwesenheit, Stoppuhr pro Block, Teams und Spielstand passen auf das Handy. Ohne Netz führt das Handy ein Protokoll und synchronisiert es bei der Rückkehr. Ohne eingetragene Dauer berechnet STRIVN die Belastung aus der tatsächlich gespielten Zeit.',
        },
        {
          title: 'Arbeiten Sie auf Deutsch, Französisch oder Niederländisch',
          body: 'STRIVN gibt es in sechs Sprachen: Deutsch, Französisch, Niederländisch, Englisch, Portugiesisch und Spanisch. Jedes Staff-Mitglied wählt seine Sprache bei der Eröffnung seines Kontos.',
        },
        {
          title: 'Geben Sie jedem im Staff seine Rolle',
          body: 'Neun Rollen, vom Cheftrainer bis zum Physiotherapeuten und Analysten, jede mit ihren Rechten. Bei Semi-Pro und Pro ist die Zahl der Staff-Mitglieder unbegrenzt.',
        },
        {
          title: 'Sprechen Sie mit dem, der STRIVN baut',
          body: 'Der Button „Mit Benoit sprechen“ öffnet eine E-Mail an den, der STRIVN baut. Beschreiben Sie Ihren Staff und Ihr aktuelles Werkzeug, wir antworten Ihnen.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Wechseln',
      title: 'Starten Sie STRIVN, während Ihr Vertrag läuft.',
      lede: `Die Kündigungsfrist steht in Ihrem Teamworks- oder Opteamal-Vertrag. Starten Sie STRIVN parallel und testen Sie es ${b.trialDays} Tage lang an Ihren eigenen Einheiten.`,
      steps: [
        {
          n: '01',
          title: 'Erstellen Sie den Bereich',
          body: `Name, E-Mail, Telefon, Passwort, Sprache und Land genügen. Das Konto startet ${b.trialDays} Tage lang auf Semi-Pro, ohne Karte.`,
        },
        {
          n: '02',
          title: 'Importieren Sie die Historie',
          body: 'Laden Sie Ihre CSV- oder XLSX-Dateien zu Belastung, RPE und Wellness hoch, dann Ihre GPS-Exporte. Die Spalten werden erkannt und dann für das Team gespeichert.',
        },
        {
          n: '03',
          title: 'Laden Sie den Staff ein',
          body: 'Weisen Sie jeder Person eine Rolle mit ihren Rechten zu. Free hat einen Platz, Amateur zwei, Semi-Pro und Pro unbegrenzt viele.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Ihre Fragen, bevor Sie Teamworks verlassen.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Kann ich meine Historie aus Teamworks oder Opteamal übernehmen?',
          a: `Ja, per Datei. Exportieren Sie Belastung, RPE und Wellness als CSV oder XLSX und laden Sie sie in STRIVN hoch. GPS-Exporte lassen sich ${b.gpsTiers} importieren, also während der ${b.trialDays}-tägigen Testphase. Die Spalten werden anhand ihrer Überschriften erkannt und dann für das Team gespeichert. Für die erste Zuordnung schreiben Sie uns an hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'Ich bin noch unter Vertrag. Wann kann ich wechseln?',
          a: `Kündigungsfrist und Verlängerungsdatum stehen in Ihrem Vertrag. Starten Sie STRIVN parallel, ohne Freigabe des Klubs und ohne Karte, mit ${b.trialDays} Tagen Semi-Pro. Sie kündigen zu dem Datum, das Ihnen passt.`,
        },
        {
          q: 'Ich war bei Opteamal. Was ändert die Übernahme durch Teamworks?',
          a: 'Teamworks hat Opteamal am 18. Dezember 2025 übernommen und kündigt an, seine Klubs auf die eigene Plattform zu holen. Wenn Sie das Werkzeug wechseln, wechseln Sie es nur einmal: Importieren Sie Ihre Historie in STRIVN, während Ihr Vertrag läuft.',
        },
        {
          q: 'Was kostet STRIVN?',
          a: `Die Preise sind öffentlich: ${b.publicPrices}. ${b.trialSentence} Sie starten ohne Kreditkarte.`,
        },
        {
          q: 'Liest STRIVN die Daten meines GPS?',
          a: `Ja, über den Export der Einheit. Laden Sie die CSV- oder XLSX-Datei von Catapult, STATSports oder einem anderen System hoch, oder die SPT- / GameTraka-Trace. STRIVN erkennt die Spalten beim ersten Import und berechnet Distanz und Geschwindigkeitszonen auf der Rohtrace. Import ${b.gpsTiers}.`,
        },
        {
          q: 'Was ändert sich für die Spieler?',
          a: 'Sie beantworten den Check-in über einen Link per WhatsApp oder E-Mail, ohne eine App zu installieren. Der automatische Versand morgens und abends gehört zu Semi-Pro und Pro. Die Apps STRIVN Player und STRIVN Coach für iOS und Android ergänzen die Benachrichtigungen.',
        },
        {
          q: 'Funktioniert STRIVN auf Niederländisch?',
          a: 'Ja. STRIVN gibt es auf Französisch, Niederländisch, Englisch, Deutsch, Portugiesisch und Spanisch, für den Staff wie für die Spieler. Jedes Staff-Mitglied wählt seine Sprache bei der Eröffnung seines Kontos.',
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: 'Erstellen Sie Ihren Bereich, vergleichen Sie an Ihren Einheiten.',
      body: `Starten Sie heute, ohne Demo und ohne Angebot. ${b.trialSentence} Ihr Staff kommt dazu, sobald er Ihre ersten Berichte sieht.`,
      primaryCta: 'Meinen Bereich kostenlos erstellen',
      secondaryCta: 'Mit Benoit sprechen',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS und Opteamal sind Marken ihrer jeweiligen Inhaber. STRIVN ist mit diesen Unternehmen weder verbunden noch von ihnen anerkannt. Catapult, STATSports, SPT, GameTraka und WHOOP sind Marken ihrer jeweiligen Inhaber. Die Angaben zu Teamworks und Opteamal stammen aus öffentlichen Quellen, Stand 15. Oktober 2026.',
  };
}
