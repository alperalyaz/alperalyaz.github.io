#!/usr/bin/env node
/**
 * ŞEMAYI KAPAK YAP - yazının içindeki SVG şemadan liste kapağı üretir.
 *
 * Kullanım:  node scripts/sema-kapak.mjs <slug> [slug...]
 *
 * NEDEN AYRI BİR BETİK, NEDEN "npm run gorseller"İN İÇİNDE DEĞİL:
 * Şemalar CSS değişkeni kullanıyor (var(--paper), var(--accent)). Bunları
 * sharp çözemez, ancak gerçek bir tarayıcı çözer. Yani bu betik Playwright
 * istiyor ve Playwright projenin bağımlılığı DEĞİL. Derlemeye bağlasaydık
 * GitHub Actions'ta kurulum gerekir, derleme yavaşlar ve kırılırdı.
 *
 * Şemalar sık değişmediği için üretilen PNG'ler depoya konuyor. Bir şemayı
 * elden geçirirsen bu betiği o yazı için elle bir kez çalıştır.
 *
 * Gereksinim (bir kere):  npm i -D playwright
 * Tarayıcı zaten kuruluysa PLAYWRIGHT ortam değişkenleriyle bulur.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const BLOG = 'src/content/blog';
const CIK = 'public/gorseller/sema';
const W = 1200, H = 900;           // 4:3 - listedeki küçük resimle aynı oran
const KAGIT = '#faf8f3';

const slugler = process.argv.slice(2);
if (!slugler.length) {
  console.error('Kullanım: node scripts/sema-kapak.mjs <slug> [slug...]');
  process.exit(1);
}

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error('Playwright kurulu değil:  npm i -D playwright');
  process.exit(1);
}

await fs.mkdir(CIK, { recursive: true });
const b = await chromium.launch({ args: ['--no-sandbox'] });

for (const slug of slugler) {
  const md = await fs.readFile(path.join(BLOG, `${slug}.md`), 'utf8');
  const svg = md.match(/<svg[\s\S]*?<\/svg>/)?.[0];
  if (!svg) { console.log(`  ${slug}: şema bulunamadı, atlandı`); continue; }

  const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
  // Sitenin renk değişkenleri; şema bunlara dayandığı için burada tanımlanmalı.
  await p.setContent(`<style>
    :root{--paper:${KAGIT};--paper-deep:#f1ebe0;--ink:#14120f;--accent:#27497e;
          --rule-soft:#ebe4d8;--rule:#ded5c6;--ink-faint:#8d8477}
    html,body{margin:0;height:100%;background:${KAGIT}}
    body{display:flex;align-items:center;justify-content:center;color:#14120f}
    svg{width:96%;height:auto;max-height:92%}
  </style>${svg}`);
  await p.waitForTimeout(200);
  const buf = await p.screenshot({ type: 'png' });
  await p.close();

  const hedef = path.join(CIK, `${slug}.png`);
  await sharp(buf).resize(W, H, { fit: 'contain', background: KAGIT }).png().toFile(hedef);
  console.log(`  ${slug}: ${hedef}`);
}

await b.close();
console.log('\nBitti. Kapağı bağlamak için yazının frontmatter\'ında:');
console.log('  cover: "/gorseller/sema/<slug>.png"');
console.log('Sonra eski küçük resmi sil ve npm run gorseller çalıştır:');
console.log('  rm public/gorseller/k/<slug>.webp');
