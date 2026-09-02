// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/* ------------------------------------------------------------------
   Yayin adresi.
   Hicbir sey ayarlamazsan Vercel adresi kullanilir.
   Vercel gibi baska bir yere kurarsan .github/workflows/github-pages.yml bu iki
   degiskeni otomatik degistirir - sen ugrasmazsin.
   Kendi alan adini alirsan: asagidaki SITE varsayilanini degistir, yeter.
   ------------------------------------------------------------------ */
const SITE = process.env.SITE_URL ?? 'https://alperalyaz.github.io';
const BASE = process.env.BASE_PATH ?? '/';

/**
 * Site alt dizinde yayinlanirsa (GitHub Pages'te /blog/ gibi), yazilarin
 * icindeki "/gorseller/x.webp" yollari kirilir - cunku dosya gercekte
 * "/blog/gorseller/x.webp" adresinde durur.
 * Bu eklenti derleme sirasinda o onegi otomatik ekler.
 * Base "/" iken hicbir sey yapmaz.
 */
function rehypeBasePaths() {
  const base = BASE.replace(/\/$/, '');
  return (tree) => {
    if (!base) return;
    const fix = (v) =>
      typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') && !v.startsWith(base + '/')
        ? base + v
        : v;

    const walk = (node) => {
      if (node.type === 'element' && node.properties) {
        for (const key of ['src', 'href', 'poster']) {
          if (node.properties[key]) node.properties[key] = fix(node.properties[key]);
        }
        const ss = node.properties.srcSet;
        if (Array.isArray(ss)) node.properties.srcSet = ss.map((s) => fix(String(s).trim()));
        else if (typeof ss === 'string') {
          node.properties.srcSet = ss.split(',').map((s) => fix(s.trim())).join(', ');
        }
      }
      for (const child of node.children ?? []) walk(child);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeBasePaths],
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' }, wrap: true },
  },
  build: { format: 'directory' },
});
