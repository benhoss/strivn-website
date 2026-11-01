/**
 * Turns one composed item into HTML with the site's existing components, on
 * the server (Astro Container API). The generated page never receives markup
 * from the model: only what SubSections, a band or SubClosing render.
 *
 *   section  → SubSections (one section, its own heading-id prefix)
 *   band     → the band's component with its own page's props (bands.ts)
 *   handoff  → SubClosing with the prefilled registration link (signup),
 *              or a SubSections callout (talk to Benoit, send to my coach)
 *   ask, suggestions → not rendered here: the page draws them as buttons
 */
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import SubSections from '../../components/sub/SubSections.astro';
import SubClosing from '../../components/sub/SubClosing.astro';
import { BANDS } from './bands';
import { betaContent, type BetaLocale } from '../../data/betaContent';
import type { Section } from '../../data/subpages/types';

export type Item =
  | { type: 'section'; section: Section }
  | { type: 'band'; id: string }
  | { type: 'handoff'; target: 'signup' | 'talk' | 'share'; title?: string; body?: string }
  | { type: 'ask'; question: string; field?: string; options?: string[] }
  | { type: 'suggestions'; items: string[] };

export interface RenderContext {
  locale: BetaLocale;
  /** Distinct per item on the page, for heading ids. */
  key: string;
  handoffUrl: string;
  pageUrl: string;
}

let container: Awaited<ReturnType<typeof AstroContainer.create>> | null = null;

async function astro() {
  container ??= await AstroContainer.create();
  return container;
}

export async function renderItem(item: Item, ctx: RenderContext): Promise<string | null> {
  const c = await astro();
  const copy = betaContent[ctx.locale].live;

  switch (item.type) {
    case 'section':
      return c.renderToString(SubSections, { props: { sections: [item.section], locale: ctx.locale, idPrefix: `gen-${ctx.key}-` } });

    case 'band': {
      const band = BANDS[item.id];
      return band ? c.renderToString(band.component, { props: band.props(ctx.locale) }) : null;
    }

    case 'handoff': {
      if (item.target === 'signup') {
        return c.renderToString(SubClosing, { props: { locale: ctx.locale, href: ctx.handoffUrl } });
      }
      const text = [item.title, item.body].filter(Boolean).join(' ');
      const link =
        item.target === 'talk'
          ? { label: copy.talk, href: 'mailto:hello@strivn.net' }
          : {
              label: copy.share,
              href: `mailto:?subject=${encodeURIComponent(copy.shareSubject)}&body=${encodeURIComponent(ctx.pageUrl)}`,
            };
      const section: Section = { kind: 'callout', tone: 'blue', icon: item.target === 'talk' ? 'send' : 'users', text: text || link.label, link };
      return c.renderToString(SubSections, { props: { sections: [section], locale: ctx.locale, idPrefix: `gen-${ctx.key}-` } });
    }

    default:
      return null;
  }
}
