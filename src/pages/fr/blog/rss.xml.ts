import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { BLOG_CATEGORY_LABELS, slugFromEntry } from '../../../lib/blog';

export const GET: APIRoute = async ({ site }) => {
  const entries = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const origin = (site ?? new URL('https://strivn.net')).toString().replace(/\/$/, '');
  const feedUrl = `${origin}/fr/blog/rss.xml`;
  const blogUrl = `${origin}/fr/blog/`;

  const escapeXml = (s: string): string =>
    s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');

  const items = entries
    .map((entry) => {
      const slug = slugFromEntry(entry);
      const url = `${origin}/fr/blog/${slug}/`;
      const pub = entry.data.pubDate.toUTCString();
      const cat = BLOG_CATEGORY_LABELS[entry.data.category];
      return [
        '  <item>',
        `    <title>${escapeXml(entry.data.title)}</title>`,
        `    <link>${url}</link>`,
        `    <guid isPermaLink="true">${url}</guid>`,
        `    <pubDate>${pub}</pubDate>`,
        `    <category>${escapeXml(cat)}</category>`,
        `    <description>${escapeXml(entry.data.description)}</description>`,
        entry.data.keywords.map((k) => `    <category>${escapeXml(k)}</category>`).join('\n'),
        '  </item>',
      ].join('\n');
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>strivn — blog coach foot amateur</title>
    <link>${blogUrl}</link>
    <description>Prépa physique, séances, charge, blessures, gestion d'équipe. Notes de terrain pour coachs de foot amateur et semi-pro.</description>
    <language>fr</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
