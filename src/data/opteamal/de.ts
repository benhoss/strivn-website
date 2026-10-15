import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** German of the French source text: formal Sie, as the site's DE locale. */
export function dePage(b: LandingBits): SwitchPage {
  const migration = mail('Wechsel von Opteamal');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'Von Opteamal zu STRIVN',
    meta: {
      title: 'Alternative zu Opteamal: STRIVN, mit Ihrer Historie',
      description: `Teamworks will die Opteamal-Klubs auf seine Plattform holen. Wählen Sie STRIVN: öffentliche Preise, ${b.trialPerk}, in sechs Sprachen.`,
      ogTitle: 'Sie arbeiten mit Opteamal? Wechseln Sie vor der Migration zu STRIVN.',
      ogDescription: `Teamworks kündigt an, die Opteamal-Klubs auf seine Plattform zu holen. Wechseln Sie das Werkzeug nur einmal: öffentliche Preise, ${b.trialPerk}, Historie importiert.`,
      twitterTitle: 'Sie arbeiten mit Opteamal? Wechseln Sie zu STRIVN.',
      twitterDescription: `Öffentliche Preise, ${b.trialPerk}, Historie per Datei importiert.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, der Kontrollturm des Performance-Staffs',
    },
    hero: {
      eyebrow: 'Opteamal geht zu Teamworks',
      titleLead: 'Sie arbeiten mit Opteamal?',
      title: 'Wechseln Sie vor der Migration zu STRIVN.',
      lede: `Teamworks hat Opteamal übernommen und kündigt an, seine Klubs auf die eigene Plattform zu holen. Wechseln Sie das Werkzeug nur einmal: Importieren Sie Ihre Historie in STRIVN und testen Sie es ${b.trialDays} Tage lang an Ihren Einheiten.`,
      primaryCta: 'Meinen Bereich kostenlos erstellen',
      secondaryCta: 'Sehen, was sich ändert',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'Was sich ändert',
      title: 'Vergleichen Sie die Zukunft von Opteamal mit STRIVN.',
      lede: 'Am 18. Dezember 2025 hat Teamworks angekündigt, die Opteamal-Klubs auf seine Plattform zu holen. Sie wechseln also das Werkzeug: Vergleichen Sie beide Wege, bevor Sie wählen.',
      columns: {
        criterion: 'Kriterium',
        opteamal: 'Opteamal, bei Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: 'Ihr nächstes Werkzeug',
          opteamal: 'Die Teamworks-Plattform, gebaut für mehr als 6.500 Elite-Organisationen.',
          strivn: 'STRIVN, gebaut für den Staff eines Klubs: 141 Teams, davon 14 Profiteams.',
        },
        {
          criterion: 'Preis',
          opteamal: 'Auf Angebot.',
          strivn: `Auf der Seite angegeben: ${b.publicPrices}.`,
        },
        {
          criterion: 'Zugang zum Konto',
          opteamal: 'Auf Anfrage, über ihr Vertriebsteam.',
          strivn: `Der Staff erstellt das Konto selbst, ohne Freigabe des Klubs. ${b.trialSentence}`,
        },
        {
          criterion: 'Roadmap',
          opteamal: 'Bei Teamworks entschieden, in Durham, USA.',
          strivn:
            'Von STRIVN entschieden, als unabhängigem Anbieter. Wir kündigen jede Neuerung per E-Mail an die Coaches an.',
        },
      ],
      note: 'Quellen: Pressemitteilung von Teamworks vom 18. Dezember 2025 und öffentliche Seiten von Teamworks und Opteamal, Stand 15. Oktober 2026. STRIVN-Zahlen Stand 18. September 2026.',
    },
    reasons: {
      id: 'au-quotidien',
      eyebrow: 'Was Sie gewinnen',
      title: 'Lesen Sie den Zustand jedes Spielers vor der Einheit.',
      lede: 'STRIVN verbindet Check-in, RPE, Belastung und GPS jedes Spielers. Sieben Gründe, es für Ihren Staff zu wählen.',
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
          body: 'Der Button „Mit Benoit sprechen“ öffnet eine E-Mail an den, der STRIVN baut. Beschreiben Sie Ihren Staff und Ihren Wechsel, wir antworten Ihnen.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Wechseln',
      title: 'Starten Sie STRIVN, während Ihr Vertrag läuft.',
      lede: `Die Kündigungsfrist steht in Ihrem Opteamal-Vertrag. Starten Sie STRIVN parallel und testen Sie es ${b.trialDays} Tage lang an Ihren eigenen Einheiten.`,
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
      title: 'Ihre Fragen, bevor Sie Opteamal verlassen.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Kann ich meine Opteamal-Historie übernehmen?',
          a: `Ja, per Datei. Exportieren Sie Belastung, RPE und Wellness als CSV oder XLSX und laden Sie sie in STRIVN hoch. GPS-Exporte lassen sich ${b.gpsTiers} importieren, also während der ${b.trialDays}-tägigen Testphase. Die Spalten werden anhand ihrer Überschriften erkannt und dann für das Team gespeichert. Für die erste Zuordnung schreiben Sie uns an hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'Ich bin noch unter Vertrag. Wann kann ich wechseln?',
          a: `Kündigungsfrist und Verlängerungsdatum stehen in Ihrem Opteamal- oder Teamworks-Vertrag. Starten Sie STRIVN parallel, ohne Freigabe des Klubs und ohne Karte, mit ${b.trialDays} Tagen Semi-Pro. Sie kündigen zu dem Datum, das Ihnen passt.`,
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
      title: 'Importieren Sie Ihre Historie in STRIVN.',
      body: `Wechseln Sie das Werkzeug nur einmal. ${b.trialSentence} Ihr Staff kommt dazu, sobald er Ihre ersten Berichte sieht.`,
      primaryCta: 'Meinen Bereich kostenlos erstellen',
      secondaryCta: 'Mit Benoit sprechen',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Opteamal, Teamworks und Teamworks AMS sind Marken ihrer jeweiligen Inhaber. STRIVN ist mit diesen Unternehmen weder verbunden noch von ihnen anerkannt. Catapult, STATSports, SPT, GameTraka und WHOOP sind Marken ihrer jeweiligen Inhaber. Die Angaben zu Opteamal und Teamworks stammen aus öffentlichen Quellen, Stand 15. Oktober 2026.',
  };
}
