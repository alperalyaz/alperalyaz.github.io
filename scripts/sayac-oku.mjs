#!/usr/bin/env node
/**
 * Ziyaret sayaclarini okur (src/layouts/Base.astro'daki sayac).
 *
 *   node scripts/sayac-oku.mjs          # son 14 gun + en cok okunan 15 sayfa
 *   node scripts/sayac-oku.mjs gun=30   # son 30 gun
 *
 * Sayaclar herkese acik okunuyor, giris gerekmiyor. Hic sayilmamis bir
 * anahtar -1 degil 0 olarak gosterilir.
 */
import fs from 'node:fs/promises';

const NS = 'alperalyaz-blog';
const API = 'https://abacus.jasoncameron.dev/get';
const arg = Object.fromEntries(process.argv.slice(2).map(a => a.split('=')));
const GUN = Number(arg.gun ?? 14);

async function oku(anahtar) {
  try {
    const r = await fetch(`${API}/${NS}/${anahtar}`);
    if (!r.ok) return 0;                       // anahtar yoksa servis 404 donuyor
    const { value } = await r.json();
    return value > 0 ? value : 0;
  } catch {
    return 0;
  }
}

/** Ayni anda en cok `n` istek - servisi bogmamak icin. */
async function sirayla(isler, n = 6) {
  const sonuc = new Array(isler.length);
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < isler.length) { const k = i++; sonuc[k] = await isler[k](); }
  }));
  return sonuc;
}

const tarih = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Istanbul' });
const gunler = Array.from({ length: GUN }, (_, k) => tarih.format(new Date(Date.now() - k * 864e5)));
const gunSayilari = await sirayla(gunler.map(g => async () => [g, await oku(`g-${g}`), await oku(`t-${g}`)]));

console.log(`\nSon ${GUN} gun (Istanbul saatiyle)          goruntuleme  tekil`);
let tg = 0, tt = 0;
for (const [g, goruntuleme, tekil] of gunSayilari) {
  tg += goruntuleme; tt += tekil;
  console.log(`  ${g}                          ${String(goruntuleme).padStart(8)}  ${String(tekil).padStart(5)}`);
}
console.log(`  TOPLAM                              ${String(tg).padStart(8)}  ${String(tt).padStart(5)}`);

// Sayfa listesi: yazilarin adlari + sabit sayfalar. Anahtar Base.astro'daki
// kuralla uretiliyor (kucuk harf, a-z0-9- disi tire, en fazla 60 karakter).
const anahtar = s => s.toLowerCase().replace(/[^a-z0-9-]+/g, '-').slice(0, 60) || 'anasayfa';
const yazilar = (await fs.readdir('src/content/blog')).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3));
const sayfalar = ['anasayfa', 'arsiv', 'hakkinda', ...yazilar];
const sayfaSayilari = await sirayla(sayfalar.map(s => async () => [s, await oku(`s-${anahtar(s)}`)]));
const enCok = sayfaSayilari.filter(([, n]) => n > 0).sort((a, b) => b[1] - a[1]).slice(0, 15);

console.log(`\nEn cok okunan sayfalar (sayac kuruldugundan beri, toplam):`);
if (!enCok.length) console.log('  henuz hic sayilmamis');
for (const [s, n] of enCok) console.log(`  ${String(n).padStart(6)}  ${s}`);
console.log(`\n(${sayfalar.length} sayfa tarandi; etiket sayfalari bu listede yok.)`);
