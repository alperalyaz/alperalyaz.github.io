#!/usr/bin/env node
/**
 * DETERMİNİSTİK KAPAK KARTI ÜRETİCİ — yapay zekâ yok, maliyet sıfır.
 *
 * Görseli olmayan yazılar için tipografik kapak kartı üretir. Aynı yazı
 * her seferinde aynı kartı verir; uydurma fotoğraf yok, sadece yazının
 * kendi başlığı blogun kendi yazı tipiyle diziliyor.
 *
 * satori (HTML/CSS → SVG) + sharp (SVG → WebP).
 * embedFont:true ile glifler yola çevrilir, rasterize edenin fonta
 * ihtiyacı kalmaz.
 *
 * Çalıştırma:  node scripts/kart-uret.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

const BLOG  = 'src/content/blog';
const THUMB = 'public/gorseller/k';
const KART  = 'public/gorseller/kart';
await fs.mkdir(THUMB, { recursive: true });
await fs.mkdir(KART,  { recursive: true });

const fonts = [
  { name: 'Fraunces', data: await fs.readFile('scripts/fontlar/fraunces-600.ttf'), weight: 600, style: 'normal' },
  { name: 'Fraunces', data: await fs.readFile('scripts/fontlar/fraunces-400.ttf'), weight: 400, style: 'normal' },
];

const KAGIT = '#faf8f3', MUREKKEP = '#14120f', SOLUK = '#8d8477', CIZGI = '#ded5c6', MAVI = '#27497e';

/** Başlık uzunluğuna göre punto — uzun başlık taşmasın. */
const punto = (s) => s.length < 26 ? 60 : s.length < 42 ? 50 : s.length < 62 ? 42 : s.length < 85 ? 35 : 30;

/* ── KÜÇÜK RESİM: defter numarası ─────────────────────────────────────────
 * Başlığı karta basmak denendi ve işe yaramadı: liste içinde 112 piksel
 * genişlikte okunmuyor, üstelik hemen yanında zaten büyük puntoyla duruyor.
 * Yani hem görünmez hem de bilgi tekrarı. Onun yerine defter numarası —
 * her boyutta okunur, uydurma değil (yazının gerçek sırası) ve listeye
 * arşiv ritmi veriyor. */
function numaraKarti({ yil, no }, W, H) {
  return { type: 'div', props: {
    style: { width: W, height: H, display: 'flex', flexDirection: 'column',
             alignItems: 'center', justifyContent: 'center', gap: Math.round(H*0.03),
             backgroundColor: KAGIT, fontFamily: 'Fraunces',
             borderLeft: `${Math.round(W*0.022)}px solid ${MAVI}` },
    children: [
      { type: 'div', props: { style: { display: 'flex', fontSize: Math.round(H*0.42),
          fontWeight: 600, color: MUREKKEP, lineHeight: 1, letterSpacing: -2 }, children: no } },
      { type: 'div', props: { style: { display: 'flex', fontSize: Math.round(H*0.09),
          fontWeight: 400, color: SOLUK, letterSpacing: 6 }, children: yil } },
    ] } };
}

function kart({ baslik, yil, no, etiket }, W, H) {
  const pad = Math.round(W * 0.075);
  return {
    type: 'div',
    props: {
      style: {
        width: W, height: H, display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', backgroundColor: KAGIT,
        padding: pad, fontFamily: 'Fraunces',
        borderLeft: `${Math.round(W*0.012)}px solid ${MAVI}`,
      },
      children: [
        { type: 'div', props: {
            style: { display: 'flex', justifyContent: 'space-between',
                     fontSize: Math.round(W*0.028), fontWeight: 400, color: SOLUK, letterSpacing: 2 },
            children: [
              { type: 'div', props: { children: yil } },
              { type: 'div', props: { children: no } },
            ] } },
        { type: 'div', props: {
            style: { display: 'flex', fontSize: punto(baslik) * (W/900), fontWeight: 600,
                     color: MUREKKEP, lineHeight: 1.16, letterSpacing: -0.5 },
            children: baslik } },
        { type: 'div', props: {
            style: { display: 'flex', alignItems: 'center', gap: Math.round(W*0.02),
                     paddingTop: Math.round(W*0.022), borderTop: `2px solid ${CIZGI}`,
                     fontSize: Math.round(W*0.026), fontWeight: 400, color: SOLUK, letterSpacing: 3 },
            children: [
              { type: 'div', props: { style: { color: MUREKKEP }, children: 'ALPER ALYAZ' } },
              { type: 'div', props: { style: { color: CIZGI }, children: '·' } },
              { type: 'div', props: { children: etiket } },
            ] } },
      ],
    },
  };
}

async function ciz(el, W, H) {
  const svg = await satori(el, { width: W, height: H, fonts, embedFont: true });
  return Buffer.from(svg);
}

// ── yazıları tara ────────────────────────────────────────────────────────
const dosyalar = (await fs.readdir(BLOG)).filter(f => f.endsWith('.md'));
const hepsi = [];
for (const f of dosyalar) {
  const t = await fs.readFile(path.join(BLOG, f), 'utf8');
  const son = t.indexOf('\n---', 4);
  if (!t.startsWith('---') || son < 0) continue;
  const fm = t.slice(4, son), govde = t.slice(son + 4);
  hepsi.push({
    dosya: f, slug: f.replace(/\.md$/, ''), fm, govde, tam: t, son,
    baslik: (fm.match(/^title: "(.*)"$/m) || [])[1] || f,
    tarih: (fm.match(/^date: (\S+)/m) || [])[1] || '',
    kapak: (fm.match(/^cover: "(.*)"$/m) || [])[1],
    gorselli: /!\[|<iframe/.test(govde),
  });
}
hepsi.sort((a, b) => a.tarih.localeCompare(b.tarih));   // en eski 001

let uretilen = 0, atlanan = 0, bayt = 0;
for (const [i, y] of hepsi.entries()) {
  // Üretilmiş kartın imzası: kapak tam olarak kendi slug'ına işaret eder.
  // Gerçek fotoğraftan gelen kapak orijinal dosyayı gösterir, bu yüzden
  // ayırt edilebiliyor ve fotoğraflı yazılar ezilmiyor.
  if (y.gorselli || y.kapak) { atlanan++; continue; }

  const icerik = {
    baslik: y.baslik.replace(/&#\d+;/g, '"'),
    yil: y.tarih.slice(0, 4),
    no: String(i + 1).padStart(3, '0'),
    etiket: 'DEFTER',
  };

  // Liste için küçük resim ÜRETİLMİYOR. Denendi ve vazgeçildi: başlık
  // 112 pikselde okunmuyor, defter numarası ise zaten sol sütunda duruyor.
  // Metin yazısı için dürüst bir küçük resim yok; düzen boşluğu zaten
  // düzgün karşılıyor (metin tam genişliğe yayılıyor).
  const paySvg = await ciz(kart(icerik, 1200, 630), 1200, 630);          // paylaşımda: tam başlık
  const pay = await sharp(paySvg).png().toBuffer();
  await fs.writeFile(path.join(KART, `${y.slug}.png`), pay);

  bayt += pay.length;

  // frontmatter'a paylaşım kartını yaz (liste kapağı DEĞİL)
  if (!/^paylasimKarti:/m.test(y.fm)) {
    const yeniFm = y.fm.replace(/^(description:.*)$/m, `$1\npaylasimKarti: "/gorseller/kart/${y.slug}.png"`);
    await fs.writeFile(path.join(BLOG, y.dosya), `---\n${yeniFm}\n---${y.govde}`);
  }
  uretilen++;
}

console.log(`Paylaşım kartı: ${uretilen} yazı`);
console.log(`Atlanan       : ${atlanan} (zaten görseli var)`);
console.log(`Toplam boyut  : ${(bayt/1024).toFixed(0)} KB`);
