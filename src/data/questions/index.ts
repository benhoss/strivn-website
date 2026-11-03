/**
 * Answer pages (plan 2026-11-01-001 § 8, layer 2): one file per recurring
 * visitor question, composed by the generated website's composer, reviewed
 * in a pull request and merged by hand. Nothing here is published without
 * that review.
 *
 * Each file default-exports an `AnswerPage`: the same `SubpageContent` the
 * feature pages are written in, per locale (FR and EN for now), plus the
 * question and a plain-text answer for the FAQPage structured data.
 */
import type { SubpageContent } from '../subpages/types';

export type AnswerLocale = 'fr' | 'en';

export interface AnswerContent extends SubpageContent {
  /** The question as visitors ask it: the H1 and the FAQ entry. */
  question: string;
  /** Two or three sentences that answer it alone, for structured data. */
  answer: string;
}

export interface AnswerPage {
  /** URL segment, the same in every locale. */
  slug: string;
  /** ISO date of the last review. */
  reviewed: string;
  locales: Partial<Record<AnswerLocale, AnswerContent>>;
}

const modules = import.meta.glob<{ default: AnswerPage }>('./*.ts', { eager: true });

export const answerPages: AnswerPage[] = Object.entries(modules)
  .filter(([path]) => !path.endsWith('/index.ts'))
  .map(([, m]) => m.default)
  .sort((a, b) => a.slug.localeCompare(b.slug));

export const answerLabels: Record<AnswerLocale, { index: string; intro: string; crumb: string; ask: string; askHref: string }> = {
  fr: {
    index: 'Vos questions sur STRIVN',
    intro: 'Les questions que les staffs posent le plus souvent, et la réponse du produit.',
    crumb: 'Questions',
    ask: 'Posez la suite de votre question',
    askHref: '/fr/beta/',
  },
  en: {
    index: 'Your questions about STRIVN',
    intro: 'The questions staffs ask most often, and the product’s answer.',
    crumb: 'Questions',
    ask: 'Ask the rest of your question',
    askHref: '/en/beta/',
  },
};
