/**
 * Normalize club crests to one optical size on a white ground.
 *
 * Sources arrive in whatever shape the club publishes: JPEGs photographed onto
 * white, PNGs with alpha, a 300px WebP. They also disagree on proportion —
 * portrait crests, square roundels, landscape badges — so matching them on
 * height alone leaves the square ones reading visibly heavier than the tall
 * ones. Scaling to a common *area* is the cheap proxy for equal optical
 * weight; the height and width caps keep an extreme shape from running away.
 *
 * The white ground is deliberate and not just a flattening artifact: several
 * crests are near-black, and the site's logo tiles are white for exactly that
 * reason. A crest cropped to its ink sits on that tile with no visible seam.
 *
 * Usage:  node scripts/normalize-logos.mjs <src-dir> <out-dir>
 *
 * Every image in <src-dir> is written to <out-dir> as `<basename>.png`, so the
 * source filename is the slug — name the file the way the site should link it.
 */
import sharp from 'sharp';
import { mkdir, readdir } from 'node:fs/promises';
import { basename, extname, join } from 'node:path';

const [src, out] = process.argv.slice(2);
if (!src || !out) {
  console.error('Usage: node scripts/normalize-logos.mjs <src-dir> <out-dir>');
  process.exit(1);
}

/** Target ink area in px², and the bounds no crest may exceed. */
const AREA = 190 * 190;
const MAX_H = 260;
const MAX_W = 340;

const SOURCES = /\.(png|jpe?g|webp|gif|avif|tiff?)$/i;

await mkdir(out, { recursive: true });

const files = (await readdir(src)).filter((f) => SOURCES.test(f)).sort();
if (!files.length) {
  console.error(`No images in ${src}`);
  process.exit(1);
}

for (const file of files) {
  const slug = basename(file, extname(file));

  // Flatten before trimming: trim keys off the border colour, and an alpha
  // channel would leave it nothing to key against.
  const flat = await sharp(join(src, file))
    .flatten({ background: '#ffffff' })
    .trim({ background: '#ffffff', threshold: 12 })
    .png()
    .toBuffer();

  const { width, height } = await sharp(flat).metadata();

  const scale = Math.min(Math.sqrt(AREA / (width * height)), MAX_H / height, MAX_W / width);
  const w = Math.round(width * scale);
  const h = Math.round(height * scale);

  await sharp(flat)
    .resize(w, h, { kernel: 'lanczos3' })
    .flatten({ background: '#ffffff' })
    .png({ compressionLevel: 9, palette: true })
    .toFile(join(out, `${slug}.png`));

  console.log(`${slug.padEnd(30)} ${width}x${height} -> ${w}x${h}`);
}
