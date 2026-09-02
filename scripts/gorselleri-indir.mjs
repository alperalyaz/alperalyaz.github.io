import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const BLOG = '/home/user/blog/src/content/blog';
const OUT  = '/home/user/blog/public/gorseller';

// SADECE kullanicinin kendi WordPress sunucusundaki gorseller indirilir.
// Ucuncu taraf gorseller (haber siteleri, wikipedia) kaynaginda birakilir - telif.
const MINE = /^https:\/\/(alperaly\.wordpress\.com|i0\.wp\.com\/alperaly\.wordpress\.com)/i;

const files = (await fs.readdir(BLOG)).filter(f => f.endsWith('.md'));
const urls = new Set();
for (const f of files) {
  const txt = await fs.readFile(path.join(BLOG, f), 'utf8');
  for (const m of txt.matchAll(/https:\/\/[^\s)"'<>]+?\.(?:jpg|jpeg|png|gif|webp)/gi)) {
    const clean = m[0].split('?')[0];
    if (MINE.test(clean)) urls.add(clean);
  }
}
console.log(`Benim gorselim : ${urls.size} (indirilecek)`);

const map = new Map();
let done = 0, failed = 0, bytesIn = 0, bytesOut = 0;

async function grab(url) {
  const ext  = path.extname(url).toLowerCase();
  const stem = path.basename(url, ext).replace(/[^a-zA-Z0-9]+/g, '-').slice(0, 45).replace(/^-|-$/g, '') || 'img';
  const hash = crypto.createHash('sha1').update(url).digest('hex').slice(0, 6);

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(45000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      bytesIn += buf.length;

      let name, out;
      if (ext === '.gif') {
        // GIF'ler animasyonlu olabilir; oldugu gibi birakilir.
        name = `${stem}-${hash}.gif`; out = buf;
      } else {
        name = `${stem}-${hash}.webp`;
        out = await sharp(buf, { failOn: 'none' })
          .rotate()                                             // EXIF donusunu uygula
          .resize({ width: 1600, withoutEnlargement: true })    // buyutme, sadece kucult
          .webp({ quality: 82 })
          .toBuffer();
      }
      await fs.writeFile(path.join(OUT, name), out);
      bytesOut += out.length;
      map.set(url, `/gorseller/${name}`);
      if (++done % 50 === 0) console.log(`  ...${done}/${urls.size}`);
      return;
    } catch (e) {
      if (attempt === 2) { failed++; console.log(`  BASARISIZ: ${url.slice(-55)} (${e.message})`); }
      else await new Promise(r => setTimeout(r, 1500 * (attempt + 1)));
    }
  }
}

// 8'erli gruplar halinde indir - hizli ama sunucuyu yormayan tempo.
const list = [...urls];
for (let i = 0; i < list.length; i += 8) {
  await Promise.all(list.slice(i, i + 8).map(grab));
}

// Markdown dosyalarindaki adresleri yerel dosyalarla degistir.
let edits = 0;
for (const f of files) {
  const p = path.join(BLOG, f);
  let txt = await fs.readFile(p, 'utf8'), orig = txt;
  for (const [url, local] of map) {
    if (txt.includes(url)) {
      txt = txt.split(url + '?').join(local + '?').split(url).join(local);
      txt = txt.replace(new RegExp(local.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\?[^\\s)"\'<>]*', 'g'), local);
    }
  }
  if (txt !== orig) { await fs.writeFile(p, txt); edits++; }
}

console.log(`\nIndirilen   : ${done}`);
console.log(`Basarisiz   : ${failed}`);
console.log(`Guncellenen : ${edits} yazi`);
console.log(`Boyut       : ${(bytesIn/1048576).toFixed(0)} MB  ->  ${(bytesOut/1048576).toFixed(0)} MB  (%${(100-bytesOut/bytesIn*100).toFixed(0)} kucuklme)`);
