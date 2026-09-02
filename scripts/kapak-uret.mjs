#!/usr/bin/env node
/**
 * Yazi listelerinde gosterilecek kucuk kapak resimlerini uretir.
 *
 * 1. Her yazi icin kapak belirler:
 *      - frontmatter'da "cover" varsa onu kullanir
 *      - yoksa yazinin govdesindeki ILK gorseli kapak yapar
 * 2. O gorselin 300px genisliginde, 4:3 kirpilmis kucuk halini uretir.
 *    (Listede 1600px'lik dosyalari gostermek sayfayi 50 MB yapardi.)
 *
 * Calistirma:  node scripts/kapak-uret.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { fmOku, fmEkle } from './fm.mjs';

const BLOG = 'src/content/blog';
const IMG  = 'public/gorseller';
const THUMB = path.join(IMG, 'k');           // k = kucuk
await fs.mkdir(THUMB, { recursive: true });

const files = (await fs.readdir(BLOG)).filter(f => f.endsWith('.md'));
let assigned = 0, made = 0, skipped = 0, none = 0, bytes = 0;

for (const f of files) {
  const p = path.join(BLOG, f);
  let txt = await fs.readFile(p, 'utf8');
  const end = txt.indexOf('\n---', 4);
  if (!txt.startsWith('---') || end < 0) continue;
  let fm = txt.slice(4, end);
  const body = txt.slice(end + 4);

  // Kapak: once frontmatter, yoksa govdedeki ilk gorsel.
  // fmOku tirnakli da tirnaksiz da okur; /admin/ paneli tirnaksiz yazabilir.
  let cover = fmOku(fm, 'cover') || undefined;
  if (!cover) {
    cover = body.match(/!\[[^\]]*\]\((\/gorseller\/[^)\s]+)\)/)?.[1];
    if (cover) {
      fm = fmEkle(fm, 'cover', cover);
      txt = `---\n${fm}\n---${body}`;
      await fs.writeFile(p, txt);
      assigned++;
    }
  }
  if (!cover) { none++; continue; }
  // Harici adresli kapaklar (baskasinin sunucusundaki gorseller) atlanir.
  if (!cover.startsWith('/gorseller/')) { none++; continue; }

  // GIF'ten kucuk resim uretmiyoruz (ilk kare bos olabiliyor).
  const src = path.join('public', cover.replace(/^\//, ''));
  const out = path.join(THUMB, path.basename(cover).replace(/\.\w+$/, '.webp'));
  try {
    await fs.access(out); skipped++; continue;      // zaten uretilmis
  } catch {}
  try {
    const buf = await sharp(src, { animated: false, failOn: 'none' })
      .resize(300, 225, { fit: 'cover', position: 'attention' })   // ilgi cekici kismi kirp
      .webp({ quality: 74 })
      .toBuffer();
    await fs.writeFile(out, buf);
    bytes += buf.length; made++;
  } catch (e) {
    console.log(`  kucuk resim uretilemedi: ${path.basename(cover)} (${e.message.slice(0,40)})`);
  }
}

console.log(`Kapak atanan yazi   : ${assigned} (govdedeki ilk gorselden)`);
console.log(`Kucuk resim uretilen: ${made}  (atlanan: ${skipped})`);
console.log(`Gorseli olmayan yazi: ${none}`);
if (made) console.log(`Toplam boyut        : ${(bytes/1024).toFixed(0)} KB  (ortalama ${(bytes/made/1024).toFixed(0)} KB)`);
