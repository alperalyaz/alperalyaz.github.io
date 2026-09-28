import type { APIRoute } from 'astro';

// robots.txt'yi Astro uretir; boylece sitemap adresi her zaman gercek
// yayin adresiyle ayni olur - alt dizinde yayinlansa bile (GitHub Pages).
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;             // "/" veya "/blog/"
  const origin = (site ?? new URL('https://example.com')).origin;
  const kok = `${origin}${base.replace(/\/$/, '')}`;
  // IKI sitemap birden ilan ediliyor.
  // /sitemap.xml  : scripts/sitemap-kopyala.mjs uretiyor. Google Search
  //   Console eski adresi "Couldn't fetch" halinde kilitledigi icin acilan
  //   temiz gecmisli yeni adres. Ayrintisi o betigin basinda yazili.
  // /sitemap-index.xml : Astro'nun urettigi asil dosya. Kaldirilmadi,
  //   Bing ve diger tarayicilar bunu sorunsuz okuyor.
  const sitemap = `${kok}/sitemap.xml`;
  const sitemapIndex = `${kok}/sitemap-index.xml`;
  return new Response(
    // /admin/ = Sveltia CMS yonetim paneli. Arama motoru indekslemesin.
    // Sayfada ayrica <meta name="robots" content="noindex"> var; bu ikinci kilit.
    `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${sitemap}\nSitemap: ${sitemapIndex}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
