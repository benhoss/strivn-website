/**
 * Copy of the generated website (/fr/beta/, /en/beta/). FR and EN only for the
 * beta (plan 2026-11-01-001 § 2); the other locales come once the composer is
 * tuned. The hero is a `SubpageContent['hero']`, rendered by SubHero like any
 * feature page; everything below it is composed per visitor.
 */
import type { SubpageContent } from './subpages/types';

export type BetaLocale = 'fr' | 'en';

export interface Shortcut {
  label: string;
  /** What is sent to the composer, written as the visitor would say it. */
  prompt: string;
}

export interface BetaContent {
  meta: { title: string; description: string };
  crumbs: { label: string; page: string };
  hero: SubpageContent['hero'];
  ask: {
    question: string;
    label: string;
    placeholder: string;
    send: string;
    personas: string;
    topics: string;
    note: string;
  };
  personas: Shortcut[];
  topics: Shortcut[];
  live: {
    you: string;
    composing: string;
    reading: string;
    answerOr: string;
    profile: string;
    talk: string;
    share: string;
    shareSubject: string;
    failed: string;
    rate: string;
    exhausted: string;
    signup: string;
    /** Stamp of each composed turn: « Question 2 ». */
    question: string;
    sources: string;
    composingLong: string;
    more: string;
    /** `{s}`: seconds the turn took. */
    composedIn: string;
    asks: string;
    retry: string;
    done: string;
  };
  /** The block closing every composed turn: related questions and the sign-up. */
  next: { stamp: string; title: string; tryBody: string };
  /** When the composer is off (budget, outage): the static routes instead. */
  fallback: { title: string; body: string; links: { label: string; href: string }[] };
  personaNames: Record<string, string>;
}

export const betaContent: Record<BetaLocale, BetaContent> = {
  fr: {
    meta: {
      title: 'Posez votre question | STRIVN',
      description: 'Dites qui vous êtes ou ce que vous cherchez : la page STRIVN se compose pour vous, à partir de la documentation du produit.',
    },
    crumbs: { label: 'STRIVN', page: 'Bêta' },
    hero: {
      kicker: 'Bêta',
      title: 'Posez votre question. La page se compose pour vous.',
      sub: 'STRIVN croise le GPS, le RPE, le wellness et le plan de séance pour tout le staff. Dites qui vous êtes ou ce que vous cherchez : la suite de cette page s’écrit à partir de la documentation du produit.',
      visual: 'checkin-signals',
    },
    ask: {
      question: 'Que puis-je vous expliquer ?',
      label: 'Votre question',
      placeholder: 'Ex. Comment le GPS se croise-t-il avec le wellness ?',
      send: 'Composer',
      personas: 'Je suis…',
      topics: 'Ou partez d’une question',
      note: 'Page composée à partir de la documentation STRIVN. Les exemples chiffrés sont fictifs. Vos questions sont conservées 12 mois pour améliorer le site.',
    },
    personas: [
      { label: 'Préparateur physique', prompt: 'Je suis préparateur physique. Montrez-moi ce que STRIVN change pour moi.' },
      { label: 'Entraîneur', prompt: 'Je suis entraîneur principal. Que fait STRIVN pour moi ?' },
      { label: 'Joueur', prompt: 'Je suis joueur. À quoi me sert l’app STRIVN ?' },
      { label: 'Parent', prompt: 'Je suis parent d’un jeune joueur. Que voit mon enfant et que puis-je suivre ?' },
      { label: 'Recruteur, scout', prompt: 'Je suis recruteur. Comment STRIVN m’aide à suivre des prospects et des adversaires ?' },
      { label: 'Kiné', prompt: 'Je suis kiné. Comment STRIVN suit les blessures et le retour au jeu ?' },
      { label: 'Direction de club', prompt: 'Je dirige un club avec plusieurs équipes. Comment STRIVN s’organise pour nous ?' },
    ],
    topics: [
      { label: 'Comment marche l’import GPS ?', prompt: 'Comment marche l’import GPS ?' },
      { label: 'GPS et wellness', prompt: 'Comment le GPS se croise-t-il avec le wellness des joueurs ?' },
      { label: 'Le check-in du matin', prompt: 'Comment fonctionne le check-in du matin des joueurs ?' },
      { label: 'ACWR et charge', prompt: 'Comment STRIVN calcule la charge et l’ACWR ?' },
      { label: 'Convocations', prompt: 'Comment envoyer les convocations et suivre les réponses ?' },
    ],
    live: {
      you: 'Vous',
      composing: 'Composition de la page',
      reading: 'Lecture',
      answerOr: 'Ou répondez avec vos mots dans le champ ci-dessous.',
      profile: 'Ce que STRIVN a retenu',
      talk: 'Parler à Benoit',
      share: 'Transmettre à mon coach',
      shareSubject: 'STRIVN pour notre équipe',
      failed: 'La page n’a pas pu être composée. Reformulez votre question ou réessayez dans un instant.',
      rate: 'Trop de questions d’un coup. Patientez une minute.',
      exhausted: 'Vous avez exploré tout ce que cette visite permet. Créez votre compte pour continuer, votre profil suit.',
      signup: 'Créer mon espace gratuitement',
      question: 'Question',
      sources: 'Sources lues',
      composingLong: 'STRIVN lit la documentation et compose la page.',
      more: 'La suite de la page arrive.',
      composedIn: 'Composée en {s} s',
      asks: 'Pour préciser la suite',
      retry: 'Relancer la question',
      done: 'Page composée.',
    },
    next: {
      stamp: 'La suite',
      title: 'Continuer avec une question proche',
      tryBody: 'Les 30 premiers jours sont au Semi-Pro, import GPS compris, sans carte. Ce que vous avez dit ici préremplit votre inscription.',
    },
    fallback: {
      title: 'La composition en direct fait une pause.',
      body: 'Les pages du site répondent aux mêmes questions. Choisissez la vôtre.',
      links: [
        { label: 'Préparateurs physiques', href: '/fr/preparateurs-physiques/' },
        { label: 'Charge, RPE et GPS', href: '/fr/features/training-load/' },
        { label: 'Check-in du matin', href: '/fr/features/check-in/' },
        { label: 'App joueur', href: '/fr/features/player-app/' },
        { label: 'Tarifs', href: '/fr/pricing/' },
      ],
    },
    personaNames: { sc_coach: 'Préparateur', coach: 'Entraîneur', player: 'Joueur', parent: 'Parent', scout: 'Recruteur', physio: 'Kiné', club: 'Club', other: 'Visiteur' },
  },
  en: {
    meta: {
      title: 'Ask your question | STRIVN',
      description: 'Say who you are or what you are looking for: the STRIVN page is composed for you, from the product documentation.',
    },
    crumbs: { label: 'STRIVN', page: 'Beta' },
    hero: {
      kicker: 'Beta',
      title: 'Ask your question. The page is composed for you.',
      sub: 'STRIVN crosses GPS, RPE, wellness and the session plan for the whole staff. Say who you are or what you are looking for: the rest of this page is written from the product documentation.',
      visual: 'checkin-signals',
    },
    ask: {
      question: 'What can I explain for you?',
      label: 'Your question',
      placeholder: 'E.g. How does GPS cross with player wellness?',
      send: 'Compose',
      personas: 'I am…',
      topics: 'Or start from a question',
      note: 'Page composed from the STRIVN documentation. Figures in examples are fictitious. Your questions are kept 12 months to improve the site.',
    },
    personas: [
      { label: 'S&C coach', prompt: 'I am a strength and conditioning coach. Show me what STRIVN changes for me.' },
      { label: 'Head coach', prompt: 'I am a head coach. What does STRIVN do for me?' },
      { label: 'Player', prompt: 'I am a player. What is the STRIVN app for?' },
      { label: 'Parent', prompt: 'I am the parent of a young player. What does my child see and what can I follow?' },
      { label: 'Recruiter, scout', prompt: 'I am a recruiter. How does STRIVN help me follow prospects and opponents?' },
      { label: 'Physio', prompt: 'I am a physio. How does STRIVN track injuries and return to play?' },
      { label: 'Club director', prompt: 'I run a club with several teams. How does STRIVN work for us?' },
    ],
    topics: [
      { label: 'How does GPS import work?', prompt: 'How does the GPS import work?' },
      { label: 'GPS and wellness', prompt: 'How does GPS cross with player wellness?' },
      { label: 'The morning check-in', prompt: 'How does the players’ morning check-in work?' },
      { label: 'ACWR and load', prompt: 'How does STRIVN compute load and ACWR?' },
      { label: 'Call-ups', prompt: 'How do I send call-ups and track the answers?' },
    ],
    live: {
      you: 'You',
      composing: 'Composing the page',
      reading: 'Reading',
      answerOr: 'Or answer in your own words below.',
      profile: 'What STRIVN kept',
      talk: 'Talk to Benoit',
      share: 'Send to my coach',
      shareSubject: 'STRIVN for our team',
      failed: 'The page could not be composed. Rephrase your question or try again in a moment.',
      rate: 'Too many questions at once. Wait a minute.',
      exhausted: 'You have explored everything this visit allows. Create your account to continue, your profile comes with you.',
      signup: 'Create my space for free',
      question: 'Question',
      sources: 'Sources read',
      composingLong: 'STRIVN is reading the documentation and composing the page.',
      more: 'More of the page is on its way.',
      composedIn: 'Composed in {s} s',
      asks: 'To narrow what comes next',
      retry: 'Ask again',
      done: 'Page composed.',
    },
    next: {
      stamp: 'Next',
      title: 'Carry on with a related question',
      tryBody: 'The first 30 days are on Semi-Pro, GPS import included, no card. What you said here prefills your sign-up.',
    },
    fallback: {
      title: 'Live composition is taking a break.',
      body: 'The site’s pages answer the same questions. Pick yours.',
      links: [
        { label: 'S&C coaches', href: '/en/sc-coaches/' },
        { label: 'Load, RPE and GPS', href: '/en/features/training-load/' },
        { label: 'Morning check-in', href: '/en/features/check-in/' },
        { label: 'Player app', href: '/en/features/player-app/' },
        { label: 'Pricing', href: '/en/pricing/' },
      ],
    },
    personaNames: { sc_coach: 'S&C coach', coach: 'Coach', player: 'Player', parent: 'Parent', scout: 'Scout', physio: 'Physio', club: 'Club', other: 'Visitor' },
  },
};
