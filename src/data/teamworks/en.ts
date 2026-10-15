import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** English translation of fr.ts. Translate, do not extend. */
export function enPage(b: LandingBits): SwitchPage {
  const migration = mail('Switching from Teamworks to STRIVN');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'STRIVN or Teamworks',
    meta: {
      title: 'Teamworks alternative: STRIVN, built for your club staff',
      description: `STRIVN or Teamworks? Public prices, sign-up online, ${b.trialPerk}, in English, French and Dutch. Opteamal clubs welcome.`,
      ogTitle: 'On Teamworks? Switch to STRIVN, built for your staff.',
      ogDescription: `Teamworks equips more than 6,500 elite organizations, by demo. STRIVN shows its prices and opens online: ${b.trialPerk}.`,
      twitterTitle: 'STRIVN or Teamworks: switch to STRIVN.',
      twitterDescription: `Public prices, sign-up online, ${b.trialPerk}.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, the control tower for the performance staff',
    },
    hero: {
      eyebrow: 'STRIVN or Teamworks',
      titleLead: 'On Teamworks?',
      title: 'Switch to STRIVN, built for your staff.',
      lede: `Teamworks equips more than 6,500 elite sports organizations, by demo and by quote. STRIVN is built for a club's staff: public prices, sign-up online, ${b.trialDays} days of Semi-Pro to compare on your own sessions.`,
      primaryCta: 'Create my space for free',
      secondaryCta: 'Compare with Teamworks',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'STRIVN or Teamworks',
      title: 'Compare STRIVN and Teamworks, line by line.',
      lede: 'Five points where Teamworks publishes its answer, next to what STRIVN ships. Judge the rest on your own sessions.',
      columns: {
        criterion: 'Criterion',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: 'Built for',
          teamworks: 'More than 6,500 elite sports organizations.',
          strivn: 'A club’s staff, from regional to pro: 141 teams, 14 of them professional.',
        },
        {
          criterion: 'Price',
          teamworks: 'By quote, after a demo.',
          strivn: `On the page: ${b.publicPrices}.`,
        },
        {
          criterion: 'Getting started',
          teamworks: 'A demo request to their sales team.',
          strivn: `The staff creates the account, with no club approval. ${b.trialSentence}`,
        },
        {
          criterion: 'Roadmap',
          teamworks: 'Decided in Durham, United States, for 6,500 organizations.',
          strivn: 'Decided by STRIVN, an independent vendor. We announce every release by email to coaches.',
        },
        {
          criterion: 'Opteamal clubs',
          teamworks: 'Moving onto the Teamworks platform, as announced after the 18 December 2025 acquisition.',
          strivn: 'History imported by file, while your contract runs.',
        },
      ],
      note: 'Sources: teamworks.com and the Teamworks press release of 18 December 2025, as of 15 October 2026. STRIVN figures as of 18 September 2026.',
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Why STRIVN',
      title: 'Read every player’s state before the session.',
      lede: 'Teamworks covers recruiting, operations and performance for elite organizations. STRIVN focuses on your staff’s week. Seven reasons to choose it.',
      items: [
        {
          title: 'Send the check-in by WhatsApp',
          body: 'The player gets a link by WhatsApp or email and answers without installing an app. They rate fatigue, sleep, mood and stress, then their RPE after the session. Automatic sending is on Semi-Pro and Pro. You read the answers before training.',
        },
        {
          title: 'Plan the week in AU',
          body: 'Set the target, track planned against done and adjust player by player. STRIVN computes the ACWR over 7 and 28 days and places each player in one of three states.',
        },
        {
          title: 'Import the GPS export, whatever the sensor',
          body: `Drop the CSV or XLSX from Catapult, STATSports or another system, or the SPT / GameTraka trace. Columns are recognized on the first import, then remembered. Import ${b.gpsTiers}.`,
        },
        {
          title: 'Run the session from the touchline',
          body: 'Attendance, block timer, teams and score fit on the phone. Without a signal, the phone keeps a log and syncs it when you are back online. With no duration entered, STRIVN computes the load from the time actually played.',
        },
        {
          title: 'Work in French or Dutch',
          body: 'STRIVN comes in six languages: French, Dutch, English, German, Portuguese and Spanish. Each staff member picks theirs when opening their account.',
        },
        {
          title: 'Give each staff member their role',
          body: 'Nine roles, from head coach to physio and analyst, each with its own rights. On Semi-Pro and Pro, staff seats are unlimited.',
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
      lede: `Your notice period is in your Teamworks or Opteamal contract. Open STRIVN alongside it and test it for ${b.trialDays} days on your own sessions.`,
      steps: [
        {
          n: '01',
          title: 'Create the space',
          body: `Name, email, phone, password, language and country are enough. The account starts on Semi-Pro for ${b.trialDays} days, with no card.`,
        },
        {
          n: '02',
          title: 'Import your history',
          body: 'Drop your load, RPE and wellness CSV or XLSX files, then your GPS exports. Columns are recognized, then remembered for the team.',
        },
        {
          n: '03',
          title: 'Invite the staff',
          body: 'Give each person a role, with its rights. Free has one seat, Amateur two, Semi-Pro and Pro an unlimited number.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Your questions before leaving Teamworks.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Can I bring my Teamworks or Opteamal history?',
          a: `Yes, by file. Export load, RPE and wellness as CSV or XLSX, then drop them into STRIVN. GPS exports import ${b.gpsTiers}, so during the ${b.trialDays}-day trial. Columns are recognized from their headers, then remembered for the team. For the first mapping, write to us at hello@strivn.net.`,
          mailto: migration,
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
          a: `Prices are public: ${b.publicPrices}. ${b.trialSentence} You start with no credit card.`,
        },
        {
          q: 'Does STRIVN read my GPS data?',
          a: `Yes, from the session export. Drop the CSV or XLSX from Catapult, STATSports or another system, or the SPT / GameTraka trace. STRIVN recognizes the columns on the first import and computes distance and speed zones on the raw trace. Import ${b.gpsTiers}.`,
        },
        {
          q: 'What changes for the players?',
          a: 'They answer the check-in through a WhatsApp or email link, without installing an app. Automatic morning and evening sending is on Semi-Pro and Pro. The STRIVN Player and STRIVN Coach apps, on iOS and Android, add notifications.',
        },
        {
          q: 'Does STRIVN work in Dutch?',
          a: 'Yes. STRIVN comes in French, Dutch, English, German, Portuguese and Spanish, for staff and players alike. Each staff member picks their language when opening their account.',
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: 'Create your space and compare on your sessions.',
      body: `Start today, with no demo and no quote. ${b.trialSentence} Your staff joins you when they see your first reports.`,
      primaryCta: 'Create my space for free',
      secondaryCta: 'Talk to Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS and Opteamal are trademarks of their owners. STRIVN is neither affiliated with nor endorsed by these companies. Catapult, STATSports, SPT, GameTraka and WHOOP are trademarks of their owners. Information on Teamworks and Opteamal comes from public sources as of 15 October 2026.',
  };
}
