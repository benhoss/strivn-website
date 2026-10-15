import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/**
 * Flemish, u-vorm. Opteamal’s core was Belgian clubs, now moving to Teamworks,
 * so this locale is the one that has to sound like a staff room in Flanders,
 * not a translation. Translates fr.ts, does not extend it.
 */
export function nlPage(b: LandingBits): SwitchPage {
  const migration = mail('Overstappen van Teamworks naar STRIVN');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'STRIVN of Teamworks',
    meta: {
      title: 'Alternatief voor Teamworks: STRIVN, voor de staf van uw club',
      description: `STRIVN of Teamworks? Publieke prijzen, account online geopend, ${b.trialPerk}, in het Nederlands en Frans. Opteamal-clubs welkom.`,
      ogTitle: 'Werkt u met Teamworks? Stap over naar STRIVN, gemaakt voor uw staf.',
      ogDescription: `Teamworks bedient meer dan 6.500 eliteorganisaties, op demonstratie. STRIVN toont zijn prijzen en opent online: ${b.trialPerk}.`,
      twitterTitle: 'STRIVN of Teamworks: stap over naar STRIVN.',
      twitterDescription: `Publieke prijzen, account online geopend, ${b.trialPerk}.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, de controletoren van de performancestaf',
    },
    hero: {
      eyebrow: 'STRIVN of Teamworks',
      titleLead: 'Werkt u met Teamworks?',
      title: 'Stap over naar STRIVN, gemaakt voor uw staf.',
      lede: `Teamworks bedient meer dan 6.500 sportieve eliteorganisaties, op demonstratie en op offerte. STRIVN is gemaakt voor de staf van een club: publieke prijzen, account online geopend, ${b.trialDays} dagen Semi-Pro om te vergelijken op uw trainingen.`,
      primaryCta: 'Mijn omgeving gratis aanmaken',
      secondaryCta: 'Vergelijk met Teamworks',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'STRIVN of Teamworks',
      title: 'Vergelijk STRIVN en Teamworks, regel per regel.',
      lede: 'Vijf punten waarop Teamworks zijn antwoord publiceert, tegenover wat STRIVN levert. De rest beoordeelt u op uw eigen trainingen.',
      columns: {
        criterion: 'Criterium',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: 'Voor wie',
          teamworks: 'Meer dan 6.500 sportieve eliteorganisaties.',
          strivn: 'De staf van een club, van regionaal tot prof: 141 ploegen, waarvan 14 profploegen.',
        },
        {
          criterion: 'Prijs',
          teamworks: 'Op offerte, na een demonstratie.',
          strivn: `Op de pagina vermeld: ${b.publicPrices}.`,
        },
        {
          criterion: 'Start',
          teamworks: 'Aanvraag van een demonstratie bij hun verkoopteam.',
          strivn: `De staf maakt het account zelf aan, zonder goedkeuring van de club. ${b.trialSentence}`,
        },
        {
          criterion: 'Roadmap',
          teamworks: 'Beslist in Durham, in de Verenigde Staten, voor 6.500 organisaties.',
          strivn:
            'Beslist door STRIVN, onafhankelijke uitgever. We kondigen elke nieuwigheid per e-mail aan de coaches aan.',
        },
        {
          criterion: 'Opteamal-clubs',
          teamworks: 'Overstap naar het Teamworks-platform aangekondigd sinds de overname van 18 december 2025.',
          strivn: 'Historiek geïmporteerd via bestand, terwijl uw contract loopt.',
        },
      ],
      note: 'Bronnen: teamworks.com en persbericht van Teamworks van 18 december 2025, op 15 oktober 2026. Cijfers van STRIVN op 18 september 2026.',
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Waarom STRIVN',
      title: 'Lees de toestand van elke speler vóór de training.',
      lede: 'Teamworks dekt rekrutering, operaties en performance van eliteorganisaties. STRIVN focust op de week van uw staf. Zeven redenen om het te kiezen.',
      items: [
        {
          title: 'Stuur de check-in via WhatsApp',
          body: 'De speler krijgt een link via WhatsApp of e-mail en antwoordt zonder een app te installeren. Hij geeft vermoeidheid, slaap, humeur en stress door, en na de training zijn RPE. Automatisch versturen zit in Semi-Pro en Pro. U leest de antwoorden vóór de training.',
        },
        {
          title: 'Plan de week in AU',
          body: 'Leg het doel vast, volg gepland tegenover gerealiseerd en stuur speler per speler bij. STRIVN berekent de ACWR op 7 en 28 dagen en plaatst elke speler in een van drie toestanden.',
        },
        {
          title: 'Importeer de GPS-export, welke sensor ook',
          body: `Zet de CSV of XLSX van Catapult, STATSports of een ander systeem neer, of de SPT- / GameTraka-trace. De kolommen worden bij de eerste import herkend en daarna onthouden. Import ${b.gpsTiers}.`,
        },
        {
          title: 'Stuur de training aan vanaf de zijlijn',
          body: 'Aanwezigheden, chrono per blok, ploegen en score passen op de telefoon. Zonder netwerk houdt de telefoon een logboek bij en synchroniseert het bij terugkeer. Zonder ingevoerde duur berekent STRIVN de belasting op de werkelijk gespeelde tijd.',
        },
        {
          title: 'Werk in het Nederlands of het Frans',
          body: 'STRIVN bestaat in zes talen: Nederlands, Frans, Engels, Duits, Portugees en Spaans. Elk staflid kiest zijn taal bij het openen van zijn account.',
        },
        {
          title: 'Geef elk staflid zijn rol',
          body: 'Negen rollen, van hoofdcoach tot kiné en analist, elk met eigen rechten. In Semi-Pro en Pro is het aantal stafleden onbeperkt.',
        },
        {
          title: 'Praat met wie STRIVN bouwt',
          body: 'De knop ‘Praat met Benoit’ opent een e-mail naar wie STRIVN bouwt. Beschrijf uw staf en uw huidige tool, wij antwoorden u.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Overstappen',
      title: 'Open STRIVN terwijl uw contract loopt.',
      lede: `De opzegtermijn staat in uw Teamworks- of Opteamal-contract. Open STRIVN ernaast en test het ${b.trialDays} dagen op uw eigen trainingen.`,
      steps: [
        {
          n: '01',
          title: 'Maak de omgeving aan',
          body: `Naam, e-mail, telefoon, wachtwoord, taal en land volstaan. Het account start ${b.trialDays} dagen op Semi-Pro, zonder kaart.`,
        },
        {
          n: '02',
          title: 'Importeer de historiek',
          body: 'Zet uw CSV- of XLSX-bestanden met belasting, RPE en wellness neer, daarna uw GPS-exports. De kolommen worden herkend en daarna onthouden voor het team.',
        },
        {
          n: '03',
          title: 'Nodig de staf uit',
          body: 'Geef elke persoon een rol, met eigen rechten. Free telt één plaats, Amateur twee, Semi-Pro en Pro een onbeperkt aantal.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Uw vragen voor u Teamworks verlaat.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Kan ik mijn Teamworks- of Opteamal-historiek meenemen?',
          a: `Ja, via bestand. Exporteer belasting, RPE en wellness in CSV of XLSX en zet ze in STRIVN. GPS-exports importeert u ${b.gpsTiers}, dus tijdens de proefperiode van ${b.trialDays} dagen. De kolommen worden herkend aan hun koppen en daarna onthouden voor het team. Voor de eerste koppeling schrijft u ons op hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'Ik zit nog onder contract. Wanneer kan ik overstappen?',
          a: `De opzegtermijn en de verlengingsdatum staan in uw contract. Open STRIVN ernaast, zonder goedkeuring van de club en zonder kaart, met ${b.trialDays} dagen Semi-Pro. U zegt op op de datum die u past.`,
        },
        {
          q: 'Ik werkte met Opteamal. Wat verandert de overname door Teamworks?',
          a: 'Teamworks heeft Opteamal op 18 december 2025 overgenomen en kondigt aan dat de clubs naar zijn eigen platform overstappen. Verandert u van tool, verander dan één keer: importeer uw historiek in STRIVN terwijl uw contract loopt.',
        },
        {
          q: 'Wat kost STRIVN?',
          a: `De prijzen zijn publiek: ${b.publicPrices}. ${b.trialSentence} U start zonder bankkaart.`,
        },
        {
          q: 'Leest STRIVN de gegevens van mijn GPS?',
          a: `Ja, via de export van de training. Zet de CSV of XLSX van Catapult, STATSports of een ander systeem neer, of de SPT- / GameTraka-trace. STRIVN herkent de kolommen bij de eerste import en berekent afstand en snelheidszones op de ruwe trace. Import ${b.gpsTiers}.`,
        },
        {
          q: 'Wat verandert er voor de spelers?',
          a: 'Ze beantwoorden de check-in via een link in WhatsApp of e-mail, zonder een app te installeren. Automatisch versturen ’s ochtends en ’s avonds zit in Semi-Pro en Pro. De apps STRIVN Player en STRIVN Coach, op iOS en Android, voegen meldingen toe.',
        },
        {
          q: 'Werkt STRIVN in het Nederlands?',
          a: 'Ja. STRIVN bestaat in het Nederlands, Frans, Engels, Duits, Portugees en Spaans, voor de staf en voor de spelers. Elk staflid kiest zijn taal bij het openen van zijn account.',
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: 'Maak uw omgeving aan en vergelijk op uw trainingen.',
      body: `Start vandaag, zonder demonstratie of offerte. ${b.trialSentence} Uw staf sluit aan wanneer hij uw eerste rapporten ziet.`,
      primaryCta: 'Mijn omgeving gratis aanmaken',
      secondaryCta: 'Praat met Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS en Opteamal zijn merken van hun respectieve eigenaars. STRIVN is niet verbonden aan deze bedrijven en wordt er niet door goedgekeurd. Catapult, STATSports, SPT, GameTraka en WHOOP zijn merken van hun eigenaars. De informatie over Teamworks en Opteamal komt uit publieke bronnen op 15 oktober 2026.',
  };
}
