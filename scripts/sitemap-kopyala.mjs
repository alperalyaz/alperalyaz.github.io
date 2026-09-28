#!/usr/bin/env node
/**
 * sitemap-0.xml'in bir kopyasini /sitemap.xml adiyla uretir.
 *
 * NEDEN GEREKLI:
 * Google Search Console, GitHub Pages sitelerinde sitemap'i bazen hic
 * okuyamadan "Couldn't fetch" durumunda kilitleniyor. Bu bizim sitemize
 * ozgu degil; GitHub community'de defalarca bildirilmis yaygin bir sorun
 * ve ayni dosyalari Bing sorunsuz okuyor. Ilk gonderimdeki gecici bir
 * aksakalik o adresi "zehirliyor", GSC de temiz bir yeniden deneme
 * yapmiyor. Silip yeniden gondermek de kurtarmiyor (denendi, 24 Eylul).
 *
 * Google'dan John Mueller'in bu duruma onerisi: DOSYANIN ADINI DEGISTIR.
 * Yeni adres, GSC icin gecmisi olmayan yepyeni bir sitemap demek.
 *
 * /sitemap.xml secildi cunku:
 *   - bu adrese daha once hicbir sey gonderilmedi, gecmisi temiz
 *   - sitemap'in geleneksel varsayilan adi; tarayicilar gonderim
 *     olmadan da bu adresi kendiliginden yokluyor
 *
 * Kopya her derlemede yeniden uretiliyor, yani icerik asla bayatlamaz.
 * Eski sitemap-index.xml ve sitemap-0.xml yerinde duruyor; bir sey
 * kaldirilmadi, sadece ucuncu bir kapi acildi.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const DIST = 'dist';
const KAYNAK = path.join(DIST, 'sitemap-0.xml');
const HEDEF = path.join(DIST, 'sitemap.xml');

try {
  await fs.access(KAYNAK);
} catch {
  console.error(`sitemap-kopyala: ${KAYNAK} yok. Once "astro build" calismali.`);
  process.exit(1);
}

const xml = await fs.readFile(KAYNAK, 'utf8');
await fs.writeFile(HEDEF, xml);

const adet = (xml.match(/<loc>/g) || []).length;
console.log(`  sitemap.xml uretildi  ${adet} adres  ${Buffer.byteLength(xml)} bayt`);
