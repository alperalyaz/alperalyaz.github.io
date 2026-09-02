import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const DIR = '/home/user/blog/public/gorseller';
const BLOG = '/home/user/blog/src/content/blog';
const gifs = (await fs.readdir(DIR)).filter(f => f.endsWith('.gif'));
let inB = 0, outB = 0, kept = 0;
const rename = new Map();

for (const g of gifs) {
  const src = path.join(DIR, g);
  const buf = await fs.readFile(src);
  inB += buf.length;
  const webpName = g.replace(/\.gif$/, '.webp');
  try {
    // animated:true tum kareleri okur - animasyon korunur.
    const out = await sharp(buf, { animated: true, failOn: 'none' })
      .resize({ width: 1000, withoutEnlargement: true })
      .webp({ quality: 72, effort: 4 })
      .toBuffer();
    if (out.length < buf.length * 0.9) {
      await fs.writeFile(path.join(DIR, webpName), out);
      await fs.unlink(src);
      rename.set(`/gorseller/${g}`, `/gorseller/${webpName}`);
      outB += out.length;
    } else { outB += buf.length; kept++; }   // kucultemedik, orjinali birak
  } catch (e) {
    outB += buf.length; kept++;
    console.log(`  cevrilemedi (oldugu gibi kaldi): ${g}`);
  }
}

let edits = 0;
for (const f of (await fs.readdir(BLOG)).filter(f => f.endsWith('.md'))) {
  const p = path.join(BLOG, f);
  let t = await fs.readFile(p, 'utf8'); const o = t;
  for (const [a, b] of rename) t = t.split(a).join(b);
  if (t !== o) { await fs.writeFile(p, t); edits++; }
}

console.log(`GIF sayisi   : ${gifs.length}  (cevrilen: ${gifs.length - kept}, oldugu gibi: ${kept})`);
console.log(`Guncellenen  : ${edits} yazi`);
console.log(`Boyut        : ${(inB/1048576).toFixed(0)} MB -> ${(outB/1048576).toFixed(0)} MB`);
