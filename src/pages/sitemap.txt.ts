import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { href } from '../lib/site';
import { etiketSlug, linkedTags } from '../lib/tags';

// Google XML, RSS ve duz metin site haritalarini destekler.
// Bu ek format, mevcut site haritalarinin okunamamasini arastirmak icindir;
// Google'in dosyayi islemesini veya URL'leri indekslemesini garanti etmez.
export const GET: APIRoute = async ({ site }) => {
  if (!site) throw new Error('sitemap.txt icin Astro site adresi gerekli.');

  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const tags = await linkedTags();
  const paths = [
    '/',
    '/arsiv/',
    '/hakkinda/',
    ...posts.map((post) => `/${post.id}/`),
    ...[...tags].map((tag) => `/etiket/${etiketSlug(tag)}/`),
  ];
  const urls = [...new Set(paths.map((path) => new URL(href(path), site).href))].sort();

  return new Response(`${urls.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
