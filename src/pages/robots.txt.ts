import type { APIRoute } from 'astro';

// robots.txt'yi Astro uretir; boylece sitemap adresi her zaman gercek
// yayin adresiyle ayni olur - alt dizinde yayinlansa bile (GitHub Pages).
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;             // "/" veya "/blog/"
  const origin = (site ?? new URL('https://example.com')).origin;
  const sitemap = `${origin}${base.replace(/\/$/, '')}/sitemap-index.xml`;
  return new Response(
    // /admin/ = Sveltia CMS yonetim paneli. Arama motoru indekslemesin.
    // Sayfada ayrica <meta name="robots" content="noindex"> var; bu ikinci kilit.
    `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${sitemap}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
