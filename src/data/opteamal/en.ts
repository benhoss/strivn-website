import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** English translation of fr.ts. Translate, do not extend. */
export function enPage(b: LandingBits): SwitchPage {
  const migration = mail('Migration from Opteamal');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'Switch from Opteamal to STRIVN',
    meta: {
      title: 'Opteamal alternative: STRIVN, with your history',
      description: `Teamworks says it is moving Opteamal clubs onto its platform. Choose STRIVN: public prices, ${b.trialPerk}, in French and Dutch.`,
      ogTitle: 'On Opteamal? Switch to STRIVN before the migration.',
      ogDescription: `Teamworks says it is moving Opteamal clubs onto its platform. Change tools once: public prices, ${b.trialPerk}, history imported.`,
      twitterTitle: 'On Opteamal? Switch to STRIVN.',
      twitterDescription: `Public prices, ${b.trialPerk}, history imported by file.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, the control tower for the performance staff',
    },
    hero: {
      eyebrow: 'Opteamal is joining Teamworks',
      titleLead: 'On Opteamal?',
      title: 'Switch to STRIVN before the migration.',
      lede: `Teamworks acquired Opteamal and says it is moving its clubs onto its own platform. Change tools once: import your history into STRIVN and test it on your sessions for ${b.trialDays} days.`,
      primaryCta: 'Create my space for free',
      secondaryCta: 'See what changes',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'What changes',
      title: 'Compare what comes next for Opteamal with STRIVN.',
      lede: 'On 18 December 2025, Teamworks announced it is welcoming Opteamal clubs onto its platform. You are going to change tools, so compare both paths before you choose.',
      columns: {
        criterion: 'Criterion',
        opteamal: 'Opteamal, at Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: 'Your next tool',
          opteamal: 'The Teamworks platform, built for more than 6,500 elite organizations.',
          strivn: 'STRIVN, built for a club’s staff: 141 teams, including 14 pro teams.',
        },
        {
          criterion: 'Price',
          opteamal: 'On quote.',
          strivn: `Shown on the page: ${b.publicPrices}.`,
        },
        {
          criterion: 'Account access',
          opteamal: 'On request, through their sales team.',
          strivn: `The staff creates the account itself, with no club approval. ${b.trialSentence}`,
        },
        {
          criterion: 'Roadmap',
          opteamal: 'Decided at Teamworks, in Durham, United States.',
          strivn:
            'Decided by STRIVN, an independent vendor. We announce every new feature by email to coaches.',
        },
      ],
      note: 'Sources: Teamworks press release of 18 December 2025 and public Teamworks and Opteamal pages, as of 15 October 2026. STRIVN figures as of 18 September 2026.',
    },
    reasons: {
      id: 'au-quotidien',
      eyebrow: 'What you gain',
      title: 'Read every player’s state before the session.',
      lede: 'STRIVN brings together each player’s check-in, RPE, load and GPS. Seven reasons to choose it for your staff.',
      items: [
        {
          title: 'Send the check-in over WhatsApp',
          body: 'The player gets a link by WhatsApp or email and answers without installing an app. They rate fatigue, sleep, mood and stress, then their RPE after the session. Automatic sending is on Semi-Pro and Pro. You read the answers before training.',
        },
        {
          title: 'Plan the week in AU',
          body: 'Set the target, track planned against done and adjust player by player. STRIVN computes the ACWR over 7 and 28 days and places each player in one of three states.',
        },
        {
          title: 'Import the GPS export, whatever the sensor',
          body: `Drop in the CSV or XLSX from Catapult, STATSports or another system, or the SPT / GameTraka trace. Columns are recognised on the first import, then remembered. Import ${b.gpsTiers}.`,
        },
        {
          title: 'Run the session from the touchline',
          body: 'Attendance, block timer, teams and score fit on the phone. Without a signal, the phone keeps a log and syncs it when you are back online. With no duration entered, STRIVN computes the load from the time actually played.',
        },
        {
          title: 'Work in French or Dutch',
          body: 'STRIVN comes in six languages: French, Dutch, English, German, Portuguese and Spanish. Each staff member picks theirs when they open their account.',
        },
        {
          title: 'Give each staff member their role',
          body: 'Nine roles, from head coach to physio and analyst, each with its own rights. On Semi-Pro and Pro, staff seats are unlimited.',
        },
        {
          title: 'Talk to the person who builds STRIVN',
          body: 'The “Talk to Benoit” button opens an email to the person who builds STRIVN. Describe your staff and your migration, and we will reply.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Switching',
      title: 'Open STRIVN while your contract runs.',
      lede: `Your notice period is in your Opteamal contract. Open STRIVN alongside it and test it on your own sessions for ${b.trialDays} days.`,
      steps: [
        {
          n: '01',
          title: 'Create the space',
          body: `Name, email, phone, password, language and country are enough. The account starts on Semi-Pro for ${b.trialDays} days, with no card.`,
        },
        {
          n: '02',
          title: 'Import your history',
          body: 'Drop in your CSV or XLSX files for load, RPE and wellness, then your GPS exports. Columns are recognised, then remembered for the team.',
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
      title: 'Your questions before leaving Opteamal.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Can I bring my Opteamal history?',
          a: `Yes, by file. Export load, RPE and wellness as CSV or XLSX, then drop them into STRIVN. GPS exports import ${b.gpsTiers}, so during the ${b.trialDays}-day trial. Columns are recognised from their headers, then remembered for the team. For the first mapping, write to us at hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'I am still under contract. When can I switch?',
          a: `The notice period and renewal date are in your Opteamal or Teamworks contract. Open STRIVN alongside it, with no club approval and no card, on ${b.trialDays} days of Semi-Pro. You cancel on the date that suits you.`,
        },
        {
          q: 'How much does STRIVN cost?',
          a: `Prices are public: ${b.publicPrices}. ${b.trialSentence} You start without a bank card.`,
        },
        {
          q: 'Does STRIVN read my GPS data?',
          a: `Yes, through the session export. Drop in the CSV or XLSX from Catapult, STATSports or another system, or the SPT / GameTraka trace. STRIVN recognises the columns on the first import and computes distance and speed zones from the raw trace. Import ${b.gpsTiers}.`,
        },
        {
          q: 'What changes for the players?',
          a: 'They answer the check-in through a WhatsApp or email link, without installing an app. Automatic morning and evening sending is on Semi-Pro and Pro. The STRIVN Player and STRIVN Coach apps, on iOS and Android, add notifications.',
        },
        {
          q: 'Does STRIVN work in Dutch?',
          a: 'Yes. STRIVN comes in French, Dutch, English, German, Portuguese and Spanish, for staff and players alike. Each staff member picks their language when they open their account.',
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: 'Import your history into STRIVN.',
      body: `Change tools once. ${b.trialSentence} Your staff joins you when they see your first reports.`,
      primaryCta: 'Create my space for free',
      secondaryCta: 'Talk to Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Opteamal, Teamworks and Teamworks AMS are trademarks of their respective owners. STRIVN is neither affiliated with nor endorsed by these companies. Catapult, STATSports, SPT, GameTraka and WHOOP are trademarks of their respective owners. Information about Opteamal and Teamworks comes from public sources as of 15 October 2026.',
  };
}
