import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Intrinsic pixel size of a PNG under public/, read at build time from the
 * IHDR header. Keeps <img width/height> honest so the browser reserves the
 * right box for lazy-loaded slides (no CLS) — screenshots are recaptured
 * often and their aspect ratios vary per view, so hardcoded attributes rot.
 */
export function pngSize(publicPath: string): { width: number; height: number } | null {
  try {
    const buf = readFileSync(join(process.cwd(), 'public', publicPath));
    // 8-byte PNG signature, 4-byte chunk length, then "IHDR" at bytes 12-15,
    // width at 16-19 and height at 20-23 (big-endian).
    if (buf.length < 24 || buf.readUInt32BE(12) !== 0x49484452) return null;
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  } catch {
    return null;
  }
}
