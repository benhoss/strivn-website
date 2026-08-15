import type { Locale } from '../data/landingContent';

/**
 * The "skip to content" label, in every locale the site builds.
 *
 * Shared rather than declared per layout: this string was already written
 * twice, and one of the copies fell back to English for four of the six
 * locales. A screen-reader user on the Dutch blog heard "Skip to content".
 */
export const SKIP_LABEL: Record<Locale, string> = {
  fr: 'Aller au contenu',
  nl: 'Naar de inhoud',
  de: 'Zum Inhalt springen',
  pt: 'Ir para o conteúdo',
  es: 'Ir al contenido',
  en: 'Skip to content',
};
