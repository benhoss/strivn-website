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

export const BLOG_CATEGORY_DESCRIPTIONS: Record<BlogCategory, string> = {
  'prépa physique': 'Construisez un programme annuel cohérent pour votre équipe, de la reprise au dernier match.',
  'gestion équipe': 'Convoquez, suivez les présences et sortez l’organisation de WhatsApp. Les bases du club amateur.',
  'séances': 'Structurez vos entraînements en 4 temps : échauffement, technique, opposition, retour au calme.',
  'blessures': 'Suivez les pépins physiques de 20 joueurs sans transformer le vestiaire en infirmerie.',
  'charge': 'RPE, ACWR, pic de mars. Mesurez ce que vos joueurs encaissent pour mieux doser la semaine.',
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

/** French typography: a no-break space before « : ; ? ! » and after «, so a
 *  line never starts with a colon. Plain text only. */
export function frenchSpacing(text: string): string {
  return text.replace(/ ([:;?!»])/g, ' $1').replace(/« /g, '« ');
}

/** Same, applied to the text between the tags of rendered HTML. */
export function frenchSpacingHtml(html: string): string {
  return html.replace(/>([^<]+)</g, (_m, t: string) => `>${frenchSpacing(t)}<`);
}
