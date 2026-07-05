import { APP_URL, type Locale } from '../data/landingContent';

/**
 * Destination for "get started" CTAs. Points at the app's registration page
 * and carries the current site locale as `?lang=`, which app.strivn.net reads
 * (LocaleResolver → `request->query('lang')`) so the login/registration page
 * opens in the same language as the marketing site.
 *
 * We link straight to `/register` rather than the app root: the root route
 * redirects through auth and drops the query string, which would lose the locale.
 */
export function appStartUrl(locale: Locale): string {
  return `${APP_URL}/register?lang=${locale}`;
}
