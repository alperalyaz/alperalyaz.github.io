#!/usr/bin/env node
/**
 * Yeni yazi dosyasi olusturur.
 * Kullanim:  npm run yeni "Dacia Duster bakim ikazi nasil sifirlanir"
 */
import fs from 'node:fs';
import path from 'node:path';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Baslik yaz:  npm run yeni "Yazinin basligi"');
  process.exit(1);
}

const TR = { ç:'c', ğ:'g', ı:'i', ö:'o', ş:'s', ü:'u', Ç:'c', Ğ:'g', İ:'i', Ö:'o', Ş:'s', Ü:'u' };
const slug = title
  .replace(/[çğıöşüÇĞİÖŞÜ]/g, (c) => TR[c])
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const date = new Date().toISOString().slice(0, 10);
const file = path.join('src/content/blog', `${slug}.md`);

if (fs.existsSync(file)) {
  console.error(`Bu dosya zaten var: ${file}`);
  process.exit(1);
}

fs.writeFileSync(file, `---
title: "${title.replace(/"/g, '\\"')}"
date: ${date}
description: ""
tags: []
categories: []
---

`);

console.log(`\nOlusturuldu: ${file}`);
console.log(`Adresi olacak: /${slug}/\n`);
console.log('Simdi:');
console.log('  1. Dosyayi ac ve yaz.');
console.log('  2. "description" alanini doldur - Google arama sonucunda bu gorunur.');
console.log('  3. npm run dev  ile onizle.');
console.log('  4. git add -A && git commit -m "yeni yazi" && git push\n');
