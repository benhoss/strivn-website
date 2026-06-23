import type { CollectionEntry } from 'astro:content';
import type { Locale } from '../data/landingContent';
import { BLOG_CATEGORIES } from '../content.config';

export type BlogEntry = CollectionEntry<'blog'>;

export type BlogCategory = BlogEntry['data']['category'];

export { BLOG_CATEGORIES };

export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
  'prépa physique': 'Prépa physique',
  'gestion équipe': 'Gestion équipe',
  'séances': 'Séances',
  'blessures': 'Blessures',
  'charge': 'Charge',
};

/** Couleurs de badge catégorie — alignées sur la palette strivn (electric / performance / warning / risk / ink-2). */
export const BLOG_CATEGORY_COLORS: Record<BlogCategory, { bg: string; fg: string; border: string }> = {
  'prépa physique':  { bg: 'rgba(45,127,249,0.14)',  fg: '#4f94fb', border: 'rgba(45,127,249,0.45)' },
  'gestion équipe':  { bg: 'rgba(248,250,252,0.08)', fg: '#b5c2d7', border: 'rgba(248,250,252,0.18)' },
  'séances':         { bg: 'rgba(39,215,161,0.14)',  fg: '#27d7a1', border: 'rgba(39,215,161,0.45)' },
  'blessures':       { bg: 'rgba(255,176,32,0.14)',  fg: '#ffb020', border: 'rgba(255,176,32,0.45)' },
  'charge':          { bg: 'rgba(255,92,92,0.14)',   fg: '#ff8b8b', border: 'rgba(255,92,92,0.45)' },
};

export const BLOG_CATEGORY_DESCRIPTIONS: Record<BlogCategory, string> = {
  'prépa physique': 'Construire un programme annuel cohérent pour ton équipe, sans laboratoire ni doctorat.',
  'gestion équipe': 'Convoquer, suivre les présences, remplacer WhatsApp. Les bases du club amateur.',
  'séances': 'Structurer tes entraînements : échauffement, técnico, opposition, retour au calme.',
  'blessures': 'Suivre les pépins physiques sans transformer ton club en hôpital de campagne.',
  'charge': 'RPE, ACWR, pic de mars. Quantifier ce que tes joueurs encaissent pour mieux doser.',
};

/** Date formatée en français. */
export function formatDateFr(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/** Slug à partir du file id (Astro 5 expose `id` = nom de fichier sans extension). */
export function slugFromEntry(entry: BlogEntry): string {
  return entry.id.replace(/\.md$/, '');
}

/** Extrait un sommaire (TOC) depuis les headings du corps Markdown rendu. */
export interface TocItem { depth: number; slug: string; text: string }

export function buildTocFromHeadings(headings: Array<{ depth: number; slug: string; text: string }>): TocItem[] {
  return headings
    .filter((h) => h.depth === 2 || h.depth === 3)
    .map((h) => ({ depth: h.depth, slug: h.slug, text: h.text }));
}

/** Calcule le temps de lecture (mots / 220 wpm, arrondi au-dessus). */
export function computeReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

/** Extrait un extrait brut (200 char) à partir du corps Markdown, sans frontmatter ni headings. */
export function extractExcerpt(body: string, max = 200): string {
  const stripped = body
    // retire le frontmatter si jamais il reste (sécurité)
    .replace(/^---[\s\S]*?---/, '')
    // retire les headings markdown
    .replace(/^#{1,6}\s.*$/gm, '')
    // retire les blocs de code
    .replace(/```[\s\S]*?```/g, '')
    // retire les liens inline mais garde le texte
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // retire les images
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    // retire gras/italique
    .replace(/[*_`]+/g, '')
    // normalise les espaces
    .replace(/\s+/g, ' ')
    .trim();

  if (stripped.length <= max) return stripped;
  const cut = stripped.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : max).trim()}…`;
}

/** Articles similaires : même catégorie (hors article courant), max N. */
export function findRelated(entries: BlogEntry[], current: BlogEntry, max = 3): BlogEntry[] {
  return entries
    .filter((e) => e.id !== current.id && e.data.category === current.data.category && !e.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .slice(0, max);
}

/** Convertit un path FR en EN counterpart si jamais le blog EN voit le jour. (Préparé, non câblé.) */
export function alternateBlogPath(locale: Locale, slug: string): string {
  return locale === 'fr' ? `/fr/blog/${slug}/` : `/en/blog/${slug}/`;
}
