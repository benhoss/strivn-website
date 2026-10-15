import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** English translation of fr.ts. Translate, do not extend. */
export function enPage(b: LandingBits): SwitchPage {
  const transfer = mail('Transferring my Teamworks data');
  const perks = [b.trialPerk, 'Teamworks transfer included', 'Open to the AI you choose'];

  return {
    gpsNote: b.gpsFiles,
    crumb: 'STRIVN or Teamworks',
    meta: {
      title: 'Teamworks alternative: STRIVN, AI that reads your players',
      description: `STRIVN or Teamworks? AI that reads load, GPS and the medical room, open to Claude and ChatGPT. ${b.trialDays}-day trial and data transfer included.`,
      ogTitle: 'On Teamworks? Switch to STRIVN, the AI that reads your players.',
      ogDescription:
        'The STRIVN assistant reads load, wellness, GPS, the medical room and matches, and prepares the actions your staff approves.',
      twitterTitle: 'STRIVN or Teamworks: the AI that reads your players.',
      twitterDescription: `An assistant on all your data, a Claude and ChatGPT connector, ${b.trialPerk}.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, the control tower for the performance staff',
    },
    hero: {
      eyebrow: 'STRIVN or Teamworks',
      titleLead: 'On Teamworks?',
      title: 'Switch to STRIVN, the AI that reads your players.',
      lede: 'Ask Teamworks answers questions asked about your documents. The STRIVN assistant reads every player’s load, wellness, GPS, medical record and matches, then prepares the actions your staff approves.',
      primaryCta: 'Create my space for free',
      secondaryCta: 'Plan my transfer',
      secondaryHref: transfer,
      perks,
    },
    showcase: {
      assistant: {
        title: "Query all your data in one question.",
        body: "Ask Teamworks reads the PDF you open. The STRIVN assistant reads load, wellness, GPS and the medical room together, cites its sources and pins every chart to your dashboards.",
      },
      readiness: {
        title: "Approve what the AI suggests before the session.",
        body: "The wake-up check-in feeds each player's readiness. STRIVN shows why a player moves to Reduce and suggests the adjusted session. You apply it or edit it, in one move.",
      },
      open: {
        title: 'Keep STRIVN open, from import to your AI.',
        body: 'STRIVN reads the file from any sensor or tool, and opens to the AI you choose through MCP, the open protocol for AI assistants. Attendance goes out as CSV, the calendar as ICS, boards and presentations as PDF.',
      },
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'STRIVN or Teamworks',
      title: "Compare what the AI does for your staff.",
      lede: "Five rows. Sources sit under the table.",
      columns: {
        criterion: 'Criterion',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: "What the AI reads",
          teamworks: "The PDF you open.",
          strivn: "Load, wellness, GPS, medical room and matches, together.",
        },
        {
          criterion: "What the AI returns",
          teamworks: "A cited answer.",
          strivn: "A sourced answer, and the action ready to approve.",
        },
        {
          criterion: "Openness",
          teamworks: "An API to integrate Teamworks AMS.",
          strivn: "The open MCP protocol: Claude, ChatGPT or the AI you choose.",
        },
        {
          criterion: "Getting started",
          teamworks: "After a sales demo.",
          strivn: `Today, online: a ${b.trialDays}-day trial and your data transfer, included.`,
        },
        {
          criterion: "Price",
          teamworks: "On quote.",
          strivn: "Shown on the page, from €0 a month.",
        },
      ],
      note: "Sources: teamworks.com (AMS and Performance pages), Teamworks blog of 5 August 2026 on Ask Teamworks, as of 15 October 2026.",
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Why STRIVN',
      title: "Equip the whole staff, from analyst to physio.",
      lede: "Six more reasons to choose STRIVN.",
      items: [
        {
          title: 'Connect the AI you choose to your data',
          body: 'STRIVN speaks MCP, the open protocol for AI assistants. The team owner turns it on, then Claude, ChatGPT or any compatible client reads the squad, load, GPS and matches with your permissions. They never write to players, parents or the public, and you revoke access from the settings.',
        },
        {
          title: 'Prepare the opponent together',
          body: 'The analyst takes notes, films and draws under each opponent. Photograph the team sheet: the AI extracts the players, who join the opponent squad only once you confirm. The brief follows, from the scouting file to the team talk.',
        },
        {
          title: 'Manage load down to the drill',
          body: 'RPE gives internal load, the GPS export gives external load, side by side. ACWR, monotony and strain calculate themselves, the forecast projects the week, and every drill keeps its GPS measurement.',
        },
        {
          title: 'Filter call-ups through the medical room',
          body: 'The medical board brings together active injuries, players in rehab and everyone’s availability. It filters call-ups on its own, and the player follows their return-to-play programme in their app.',
        },
        {
          title: 'Dictate the match debrief',
          body: 'Speak after the match: STRIVN formats your debrief. You read it over, then you apply it.',
        },
        {
          title: 'Talk to the person who builds STRIVN',
          body: 'The “Talk to Benoit” button opens an email to the person who builds STRIVN. Describe your staff and your current tool, and we will reply.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Switch',
      title: 'Open STRIVN while your contract runs.',
      lede: `The notice period is in your Teamworks or Opteamal contract. Test STRIVN for ${b.trialDays} days on your sessions, and we transfer your data with you, at no cost.`,
      steps: [
        {
          n: '01',
          title: 'Create the space',
          body: `Name, email, phone, password, language and country are enough. The account starts on Semi-Pro for ${b.trialDays} days, with no card.`,
        },
        {
          n: '02',
          title: 'Transfer your Teamworks data',
          body: 'Send us your Teamworks or Opteamal exports. We prepare the column mapping with you, then import load, wellness and GPS.',
        },
        {
          n: '03',
          title: 'Ask your first question',
          body: 'Ask the assistant for the week’s load or the players to watch. It answers on your imported history, with its sources.',
        },
      ],
      offer: {
        tag: 'Teamworks clubs',
        title: `A ${b.trialDays}-day trial and your data transfer, on us.`,
        body: 'We go through your Teamworks exports with you, check the column mapping and import your history while you test STRIVN on your sessions.',
        cta: 'Plan my transfer',
        href: transfer,
      },
    },
    faq: {
      label: 'FAQ',
      title: 'Your questions before leaving Teamworks.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Is STRIVN really open?',
          a: 'Yes. Your data comes in by file, whatever the sensor or source tool. It goes out to the AI you choose through MCP, the open protocol for AI assistants, and exports as CSV, ICS or PDF depending on the screen. The connector is turned on and revoked from the team settings.',
        },
        {
          q: 'Does my data stay mine?',
          a: 'Yes. You read it in STRIVN or from your own AI. If you move back down to Free, your whole history stays available, and you keep exporting and deleting what belongs to you.',
        },
        {
          q: 'Can the AI act without my approval?',
          a: 'In STRIVN, every action the assistant prepares waits for your approval. Through the connector, Claude or ChatGPT act with your permissions, like a member of the staff, without ever writing to players, parents or the public, or touching call-ups.',
        },
        {
          q: 'Who transfers my Teamworks or Opteamal data?',
          a: `We do, with you, at no cost. Send us your exports as CSV or XLSX: we prepare the column mapping and import load, RPE, wellness and GPS during your ${b.trialDays}-day trial. Write to us at hello@strivn.net.`,
          mailto: transfer,
        },
        {
          q: 'I am still under contract. When can I switch?',
          a: `The notice period and renewal date are in your contract. Open STRIVN alongside it, with no club approval and no card, with ${b.trialDays} days of Semi-Pro. You cancel on the date that suits you.`,
        },
        {
          q: 'I was on Opteamal. What does the Teamworks acquisition change?',
          a: 'Teamworks acquired Opteamal on 18 December 2025 and says it is moving its clubs onto its own platform. If you change tools, change once: import your history into STRIVN while your contract runs.',
        },
        {
          q: 'How much does STRIVN cost?',
          a: `Prices are public: ${b.publicPrices}. ${b.trialSentence} Pro, on quote, sets the AI and WhatsApp volumes in the contract.`,
        },
        {
          q: 'Does STRIVN read my GPS data?',
          a: `Yes, from the session export. Drop in the CSV or XLSX from Catapult, STATSports or another system, or the SPT / GameTraka trace. STRIVN recognizes the columns on the first import and calculates distance and speed zones on the raw trace. Import ${b.gpsTiers}.`,
        },
        {
          q: 'Does STRIVN work in Dutch?',
          a: 'Yes. STRIVN is available in English, French, Dutch, German, Portuguese and Spanish, for the staff and for the players. Each staff member chooses their language when opening their account.',
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: `Test STRIVN for ${b.trialDays} days, data transfer included.`,
      body: `We transfer your Teamworks data with you, then you question your history. ${b.trialSentence}`,
      primaryCta: 'Create my space for free',
      secondaryCta: 'Talk to Benoit',
      secondaryHref: transfer,
      fine: perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS, Ask Teamworks and Opteamal are trademarks of their respective owners. STRIVN is neither affiliated with nor endorsed by these companies. Claude, ChatGPT, Catapult, STATSports, SPT, GameTraka and WHOOP are trademarks of their respective owners. Information about Teamworks and Opteamal comes from public sources as of 15 October 2026.',
  };
}
