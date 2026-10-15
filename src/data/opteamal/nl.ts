import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/**
 * Flemish, u-vorm. Opteamal’s core is Belgian clubs, so this locale is the
 * one that has to sound like a staff room in Flanders, not a translation.
 */
export function nlPage(b: LandingBits): SwitchPage {
  const migration = mail('Migratie vanuit Opteamal');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'Van Opteamal naar STRIVN',
    meta: {
      title: 'Van Opteamal naar STRIVN',
      description: `Teamworks heeft Opteamal op 18 december 2025 overgenomen. Stap over naar STRIVN met uw historiek: publieke prijzen, ${b.trialPerk}, in het Nederlands en het Frans.`,
      ogTitle: 'Werkt u met Opteamal? Stap over naar STRIVN met uw historiek.',
      ogDescription: `Publieke prijzen, account aangemaakt door de staf, ${b.trialPerk}. Importeer uw belastings- en GPS-bestanden terwijl uw contract loopt.`,
      twitterTitle: 'Van Opteamal naar STRIVN',
      twitterDescription: `Publieke prijzen, ${b.trialPerk}, historiek geïmporteerd via bestand.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, de controletoren van de performancestaf',
    },
    hero: {
      eyebrow: 'Opteamal gaat naar Teamworks',
      titleLead: 'Werkt u met Opteamal?',
      title: 'Stap over naar STRIVN met uw historiek.',
      lede: `Teamworks heeft Opteamal op 18 december 2025 overgenomen. Open een STRIVN-omgeving, importeer uw belastings- en GPS-bestanden en vergelijk ${b.trialDays} dagen lang op uw eigen trainingen.`,
      primaryCta: 'Mijn omgeving aanmaken',
      secondaryCta: 'Bekijk de vergelijking',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'Vergelijking',
      title: 'Vergelijk de prijs, de start en de roadmap.',
      lede: 'Drie punten waarop Opteamal, Teamworks en STRIVN elk hun antwoord publiceren. De rest beoordeelt u op uw eigen trainingen.',
      columns: {
        criterion: 'Criterium',
        opteamal: 'Opteamal, bij Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: 'Prijs',
          opteamal: 'Op offerte.',
          strivn: `Op de pagina vermeld: ${b.publicPrices}.`,
        },
        {
          criterion: 'Account openen',
          opteamal: 'Op aanvraag, via hun verkoopteam.',
          strivn: `De staf maakt het account zelf aan, zonder goedkeuring van de club. ${b.trialSentence}`,
        },
        {
          criterion: 'Roadmap',
          opteamal:
            'Beslist bij Teamworks sinds de overname van 18 december 2025, de migratie inbegrepen.',
          strivn:
            'Beslist door STRIVN, onafhankelijke uitgever. We kondigen elke nieuwigheid per e-mail aan de coaches aan.',
        },
      ],
      note: 'Bronnen: persbericht van Teamworks van 18 december 2025 en publieke pagina’s van Teamworks en Opteamal, op 15 oktober 2026.',
    },
    reasons: {
      id: 'au-quotidien',
      eyebrow: 'Dagelijks',
      title: 'Houd de opvolging die u al doet.',
      lede: 'Zes handelingen die uw staf elke week doet, en hoe STRIVN ze opneemt.',
      items: [
        {
          title: 'Stuur de check-in via WhatsApp',
          body: 'De speler krijgt een link via WhatsApp of e-mail en antwoordt zonder een app te installeren. Hij geeft vermoeidheid, slaap, humeur en stress door, en na de training zijn RPE. Automatisch versturen zit in Semi-Pro en Pro.',
        },
        {
          title: 'Stuur de training aan vanaf de zijlijn',
          body: 'Aanwezigheden, chrono per blok, ploegen en score passen op de telefoon. Zonder netwerk houdt de telefoon een logboek bij en synchroniseert het bij terugkeer.',
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
          title: 'Werk in het Nederlands of het Frans',
          body: 'STRIVN bestaat in zes talen: Nederlands, Frans, Engels, Duits, Portugees en Spaans. Elk staflid kiest zijn taal bij het openen van zijn account.',
        },
        {
          title: 'Geef elk staflid zijn rol',
          body: 'Negen rollen, van hoofdcoach tot kiné en analist, elk met eigen rechten. In Semi-Pro en Pro is het aantal stafleden onbeperkt.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Overstappen',
      title: 'Open STRIVN terwijl uw contract loopt.',
      lede: `De opzegtermijn staat in uw Opteamal-contract. Open STRIVN ernaast en vergelijk ${b.trialDays} dagen lang op uw eigen trainingen.`,
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
    stay: {
      id: 'rester',
      eyebrow: 'Blijven',
      title: 'Blijf bij Teamworks in twee gevallen.',
      lede: 'Kies de tool die uw cel dekt. Is een van deze twee noden centraal bij u, dan beantwoordt Teamworks AMS die vandaag.',
      items: [
        {
          title: 'Uw sensoren moeten live doorkomen',
          body: `Teamworks AMS kondigt meer dan 100 koppelingen aan. STRIVN importeert uw GPS-bestanden na de training, ${b.gpsTiers}.`,
        },
        {
          title: 'Uw medische cel volgt protocollen',
          body: 'Teamworks AMS kondigt een medische module aan. STRIVN houdt het blessurelogboek, het terugkeerplan en de revalidatietrainingen bij.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Uw vragen voor u Opteamal verlaat.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Kan ik mijn Opteamal-historiek meenemen?',
          a: `Ja, via bestand. Exporteer belasting, RPE en wellness in CSV of XLSX en zet ze in STRIVN. GPS-exports importeert u ${b.gpsTiers}, dus tijdens de proefperiode van ${b.trialDays} dagen. De kolommen worden herkend aan hun koppen en daarna onthouden voor het team. Voor de eerste koppeling schrijft u ons op hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'Ik zit nog onder contract. Wanneer kan ik overstappen?',
          a: `De opzegtermijn en de verlengingsdatum staan in uw contract met Opteamal of Teamworks. Open STRIVN ernaast, zonder goedkeuring van de club en zonder kaart, met ${b.trialDays} dagen Semi-Pro. U zegt op op de datum die u past.`,
        },
        {
          q: 'Wat kost STRIVN?',
          a: `De prijzen zijn publiek: ${b.publicPrices}. ${b.trialSentence} U start zonder bankkaart.`,
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
      title: 'Maak uw omgeving aan en importeer uw historiek.',
      body: `${b.trialSentence} Uw staf sluit aan wanneer hij uw eerste rapporten ziet.`,
      primaryCta: 'Mijn omgeving aanmaken',
      secondaryCta: 'Praat met Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Opteamal, Teamworks en Teamworks AMS zijn merken van hun respectieve eigenaars. STRIVN is niet verbonden aan deze bedrijven en wordt er niet door goedgekeurd. Catapult, STATSports, SPT, GameTraka en WHOOP zijn merken van hun eigenaars. De informatie over Opteamal en Teamworks komt uit publieke bronnen op 15 oktober 2026.',
  };
}
