import type { Locale } from '../data/landingContent';

/**
 * Wording for the two store badges.
 *
 * Apple and Google both publish the sentence their badge carries in each
 * market, and a player recognises the shape before reading it — so the
 * over-line is theirs, translated, rather than a STRIVN sentence. Only the
 * store name is a proper noun and stays untranslated.
 */
export const STORE_BADGE_TEXT: Record<Locale, { apple: string; google: string }> = {
  fr: { apple: 'Télécharger dans l’', google: 'Disponible sur' },
  en: { apple: 'Download on the', google: 'Get it on' },
  nl: { apple: 'Download in de', google: 'Ontdek het op' },
  de: { apple: 'Laden im', google: 'Jetzt bei' },
  pt: { apple: 'Descarregar na', google: 'Disponível no' },
  es: { apple: 'Consíguelo en el', google: 'Disponible en' },
};
