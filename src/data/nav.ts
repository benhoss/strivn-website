import type { Locale } from './landingContent';

/**
 * The site navigation, declared once.
 *
 * It used to be declared twice — `homeContent.nav` fed the home, features,
 * solutions and audience pages, `landingContent.nav` fed the legal and blog
 * layouts — and the two had drifted apart: one showed Solutions as a flat link
 * and carried no Blog entry, the other made it a dropdown and did. Adding an
 * entry to one left half the site without it, which is exactly how they came
 * to disagree in the first place.
 *
 * Platform is a real page rather than a jump to a homepage section, and it
 * heads the group its audience pages belong to. Blog points at /fr/blog/ from
 * every locale because the blog is only written in French.
 */
export type NavLink = { label: string; href: string };
export type NavItem = NavLink | { label: string; children: NavLink[] };

export interface Nav {
  links: NavItem[];
  cta: string;
}

export const NAV: Record<Locale, Nav> = {
  fr: {
    links: [
      {
        label: 'Plateforme',
        children: [
          { label: "Vue d'ensemble", href: '/fr/solutions/' },
          { label: 'Préparateurs physiques', href: '/fr/preparateurs-physiques/' },
          { label: 'Clubs', href: '/fr/clubs/' },
          { label: 'Équipes de jeunes', href: '/fr/equipes-jeunes/' },
        ],
      },
      { label: 'Fonctionnalités', href: '/fr/features/' },
      { label: 'Application joueur', href: '/fr/features/player-app/' },
      { label: 'Blog', href: '/fr/blog/' },
      { label: 'Tarifs', href: '/fr/#tarifs' },
      { label: 'FAQ', href: '/fr/#faq' },
    ],
    cta: 'Commencer',
  },

  en: {
    links: [
      {
        label: 'Platform',
        children: [
          { label: 'Overview', href: '/en/solutions/' },
          { label: 'S&C coaches', href: '/en/sc-coaches/' },
          { label: 'Clubs', href: '/en/clubs/' },
          { label: 'Youth teams', href: '/en/youth-teams/' },
        ],
      },
      { label: 'Features', href: '/en/features/' },
      { label: 'Player app', href: '/en/features/player-app/' },
      { label: 'Blog', href: '/fr/blog/' },
      { label: 'Pricing', href: '/en/#tarifs' },
      { label: 'FAQ', href: '/en/#faq' },
    ],
    cta: 'Get started',
  },

  nl: {
    links: [
      {
        label: 'Platform',
        children: [
          { label: 'Overzicht', href: '/nl/solutions/' },
          { label: 'S&C-coaches', href: '/nl/sc-coaches/' },
          { label: 'Clubs', href: '/nl/clubs/' },
          { label: 'Jeugdploegen', href: '/nl/youth-teams/' },
        ],
      },
      { label: 'Functies', href: '/nl/features/' },
      { label: 'Spelersapp', href: '/nl/features/player-app/' },
      { label: 'Blog', href: '/fr/blog/' },
      { label: 'Tarieven', href: '/nl/#tarifs' },
      { label: 'FAQ', href: '/nl/#faq' },
    ],
    cta: 'Aan de slag',
  },

  de: {
    links: [
      {
        label: 'Plattform',
        children: [
          { label: 'Überblick', href: '/de/solutions/' },
          { label: 'S&C-Coaches', href: '/de/sc-coaches/' },
          { label: 'Vereine', href: '/de/clubs/' },
          { label: 'Jugendteams', href: '/de/youth-teams/' },
        ],
      },
      { label: 'Funktionen', href: '/de/features/' },
      { label: 'Spieler-App', href: '/de/features/player-app/' },
      { label: 'Blog', href: '/fr/blog/' },
      { label: 'Preise', href: '/de/#tarifs' },
      { label: 'FAQ', href: '/de/#faq' },
    ],
    cta: 'Loslegen',
  },

  pt: {
    links: [
      {
        label: 'Plataforma',
        children: [
          { label: 'Visão geral', href: '/pt/solutions/' },
          { label: 'Preparadores físicos', href: '/pt/sc-coaches/' },
          { label: 'Clubes', href: '/pt/clubs/' },
          { label: 'Equipas de formação', href: '/pt/youth-teams/' },
        ],
      },
      { label: 'Funcionalidades', href: '/pt/features/' },
      { label: 'App do jogador', href: '/pt/features/player-app/' },
      { label: 'Blog', href: '/fr/blog/' },
      { label: 'Preços', href: '/pt/#tarifs' },
      { label: 'FAQ', href: '/pt/#faq' },
    ],
    cta: 'Começar',
  },

  es: {
    links: [
      {
        label: 'Plataforma',
        children: [
          { label: 'Visión general', href: '/es/solutions/' },
          { label: 'Preparadores físicos', href: '/es/sc-coaches/' },
          { label: 'Clubes', href: '/es/clubs/' },
          { label: 'Fútbol base', href: '/es/youth-teams/' },
        ],
      },
      { label: 'Funcionalidades', href: '/es/features/' },
      { label: 'App del jugador', href: '/es/features/player-app/' },
      { label: 'Blog', href: '/fr/blog/' },
      { label: 'Precios', href: '/es/#tarifs' },
      { label: 'FAQ', href: '/es/#faq' },
    ],
    cta: 'Empezar',
  },
};
