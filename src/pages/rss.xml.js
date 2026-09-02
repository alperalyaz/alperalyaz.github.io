import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../lib/site';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    customData: `<language>tr</language>`,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: `/${p.id}/`,
      categories: p.data.tags,
    })),
  });
}
