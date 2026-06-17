import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categories = [
  'prépa physique',
  'gestion équipe',
  'séances',
  'blessures',
  'charge',
] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(10).max(120),
    description: z.string().min(120).max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.literal('Ben Hos'),
    category: z.enum(categories),
    keywords: z.array(z.string()).min(1).max(8),
    locale: z.literal('fr'),
    readingTime: z.number().int().positive(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
export const BLOG_CATEGORIES = categories;
