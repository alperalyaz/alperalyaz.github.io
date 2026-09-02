import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Her .md dosyasinin bastaki "---" bloguna ne yazilabilecegini tanimlar.
// Buradaki kurala uymayan bir yazi varsa build HATA verir - sessizce bozulmaz.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().default(''),
    // Yazinin dili. Yazmazsan Turkce sayilir.
    // Ingilizce bir yazi icin: lang: en
    lang: z.enum(['tr', 'en']).default('tr'),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    wpUrl: z.string().optional(),   // eski WordPress adresi (arsiv icin)
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
