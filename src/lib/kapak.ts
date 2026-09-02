import fs from 'node:fs';
import path from 'node:path';

/**
 * Uretilmis kucuk resimlerin listesi (derleme aninda bir kez okunur).
 * scripts/kapak-uret.mjs tarafindan public/gorseller/k/ altina uretilirler.
 */
const DIR = path.join(process.cwd(), 'public', 'gorseller', 'k');
let mevcut: Set<string>;
try {
  mevcut = new Set(fs.readdirSync(DIR));
} catch {
  mevcut = new Set();          // henuz uretilmemisse liste bos - site yine calisir
}

/** Yazinin kapagi icin kucuk resim yolu; yoksa null. */
export function kucukKapak(cover?: string): string | null {
  if (!cover || !cover.startsWith('/gorseller/')) return null;
  const ad = path.basename(cover).replace(/\.\w+$/, '.webp');
  return mevcut.has(ad) ? `/gorseller/k/${ad}` : null;
}
