// Generates public/og.png — a 1200x630 social share card on the STRIVN
// dark canvas. Run with: node scripts/generate-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const W = 1200;
const H = 630;

// --- Background: void-deep base with a calm navy radial glow + electric hairline ---
const background = Buffer.from(`
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="34%" r="72%">
      <stop offset="0%" stop-color="#0B1E3A"/>
      <stop offset="48%" stop-color="#06152B"/>
      <stop offset="100%" stop-color="#050610"/>
    </radialGradient>
    <linearGradient id="topline" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2D7FF9" stop-opacity="0"/>
      <stop offset="50%" stop-color="#2D7FF9" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#2D7FF9" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#050610"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="0" y="0" width="${W}" height="4" fill="url(#topline)"/>
  <!-- bottom mono label + status dot -->
  <circle cx="78" cy="${H - 70}" r="6" fill="#27D7A1"/>
  <text x="98" y="${H - 64}" font-family="'JetBrains Mono', ui-monospace, Menlo, monospace"
        font-size="22" letter-spacing="3" fill="#8497BD">strivn.net</text>
  <text x="${W - 78}" y="${H - 64}" text-anchor="end"
        font-family="'JetBrains Mono', ui-monospace, Menlo, monospace"
        font-size="20" letter-spacing="2" fill="#3D5A8A">FREE FOR COACHES</text>
</svg>`);

// --- Logo: real PNG composited so the wordmark stays crisp ---
const logoPath = resolve(root, 'public/strivn-logo-full-white-web.png');
const logoTargetW = 660; // from native 1130x369 → keeps ~3.06:1 ratio
const logo = await sharp(logoPath)
  .resize({ width: logoTargetW })
  .toBuffer();
const logoMeta = await sharp(logo).metadata();

const composite = await sharp(background)
  .composite([
    {
      input: logo,
      left: Math.round((W - logoMeta.width) / 2),
      top: Math.round((H - logoMeta.height) / 2) - 18,
    },
  ])
  .png({ compressionLevel: 9 })
  .toBuffer();

const out = resolve(root, 'public/og.png');
await sharp(composite).toFile(out);
console.log(`Wrote ${out} (${W}x${H})`);
