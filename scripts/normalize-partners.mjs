/**
 * Normalize third-party wordmarks for the site's white logo tiles.
 *
 * Sibling of `normalize-logos.mjs`, and different from it on two counts.
 *
 * Club crests are compact shapes, so that script equalizes their *area*. These
 * are wordmarks, whose length carries no weight: "Oliver Sports" is nine times
 * wider than it is tall, "Hudl" three. Equalizing area would set the long one
 * at a third of the short one's cap height and the row would read as a mistake.
 * Cap height is what the eye compares in a row of wordmarks, so height is what
 * is matched here — with a width cap, past which a very long mark shrinks.
 *
 * The second difference is polarity. Half of these files are the brand kit's
 * reverse variant — white ink, for a dark ground — and the site's logo tiles
 * are white, because Hudl's mark is part near-black and would vanish on the
 * page's own background. A mark whose ink is light is therefore inverted back
 * to its dark primary: these are monochrome files, so the inversion lands on
 * the black variant the same kit ships, not on an invented colour. Coloured
 * marks (mean luminance below the threshold) are left exactly as drawn.
 *
 * Usage:  node scripts/normalize-partners.mjs <src-dir> <out-dir>
 *
 * The source filename is the slug — name the file the way `partners.ts` does.
 */
import sharp from 'sharp';
import { mkdir, readdir } from 'node:fs/promises';
import { basename, extname, join } from 'node:path';

const [src, out] = process.argv.slice(2);
if (!src || !out) {
  console.error('Usage: node scripts/normalize-partners.mjs <src-dir> <out-dir>');
  process.exit(1);
}

/** Emitted at 3x the drawn size, so the tiles stay crisp on dense screens. */
const TARGET_H = 78;
const MAX_W = 336;

const SOURCES = /\.(png|jpe?g|webp|gif|avif|tiff?)$/i;

const LUM = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;
/** Above this, a pixel is the white ground rather than ink. */
const GROUND = 245;

/** Mean luminance of the ink — the pixels the mark actually draws. */
async function inkLuminance(file) {
  const { data } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let sum = 0;
  let n = 0;
  for (let i = 0; i < data.length; i += 4) {
    // Transparent pixels are the ground; on a flattened source the near-white
    // ones are too. Neither says anything about the ink.
    if (data[i + 3] < 200) continue;
    const l = LUM(data[i], data[i + 1], data[i + 2]);
    if (l > GROUND) continue;
    sum += l;
    n += 1;
  }
  return n ? sum / n : 255;
}

/**
 * Box the ink, rather than `sharp.trim`.
 *
 * Trim crops a *uniform border*, so one stray dark pixel on an edge — the ®
 * of a wordmark drawn to the bleed, in the file that prompted this — pins the
 * crop to the full canvas and the mark comes back padded. Scanning for the
 * ink's own bounds ignores where that ink happens to sit.
 */
async function inkBox(buf) {
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  let x0 = info.width;
  let y0 = info.height;
  let x1 = -1;
  let y1 = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * ch;
      if (LUM(data[i], data[i + 1], data[i + 2]) > GROUND) continue;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }
  }
  if (x1 < 0) throw new Error('no ink found');
  return { left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 };
}

await mkdir(out, { recursive: true });

const files = (await readdir(src)).filter((f) => SOURCES.test(f)).sort();
if (!files.length) {
  console.error(`No images in ${src}`);
  process.exit(1);
}

for (const file of files) {
  const slug = basename(file, extname(file));
  const path = join(src, file);

  // Reverse variants come as white ink on transparent: flattening those onto
  // white would erase the mark, so the polarity is decided first and the
  // ground picked to match.
  const light = (await inkLuminance(path)) > 128;

  let flat = sharp(path).flatten({ background: light ? '#000000' : '#ffffff' });
  if (light) flat = flat.negate({ alpha: false });

  const onWhite = await flat.png().toBuffer();
  const box = await inkBox(onWhite);
  const cropped = await sharp(onWhite).extract(box).png().toBuffer();

  const scale = Math.min(TARGET_H / box.height, MAX_W / box.width, 1);
  const w = Math.round(box.width * scale);
  const h = Math.round(box.height * scale);

  await sharp(cropped)
    .resize(w, h, { kernel: 'lanczos3' })
    .flatten({ background: '#ffffff' })
    .png({ compressionLevel: 9 })
    .toFile(join(out, `${slug}.png`));

  console.log(
    `${slug.padEnd(20)} ${box.width}x${box.height}${light ? ' (inverted)' : ''} -> ${w}x${h}`,
  );
}
