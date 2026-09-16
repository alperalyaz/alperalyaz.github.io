import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Her .md dosyasinin bastaki "---" bloguna ne yazilabilecegini tanimlar.
// Buradaki kurala uymayan bir yazi varsa build HATA verir - sessizce bozulmaz.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /* Tarih. Ayni GUNE iki yazi dusuyorsa saat de yaz:
         date: 2026-09-16T14:30
       Saat yoksa ikisi berabere kalir ve sirayi DOSYA ADI belirler
       (alfabetik) - yani yeni yazi eskinin altinda kalabilir.
       Saatin sonuna Z veya +03:00 EKLEME: gosterilen gun kayabilir.
       Saat hicbir yerde gorunmez, sadece siralamada kullanilir. */
    date: z.coerce.date(),
    description: z.string().default(''),
    // Yazinin dili. Yazmazsan Turkce sayilir.
    // Ingilizce bir yazi icin: lang: en
    lang: z.enum(['tr', 'en']).default('tr'),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    wpUrl: z.string().optional(),   // eski WordPress adresi (arsiv icin)
    cover: z.string().optional(),
    /** Paylaşım (OG) kartı - scripts/kart-uret.mjs üretir. */
    paylasimKarti: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Yazi olmayan tek sayfalar (hakkinda gibi). Blogdan AYRI bir koleksiyon:
// bunlarin tarihi, etiketi, paylasim karti olmaz ve arsivde/RSS'te gorunmezler.
// Amac hakkinda sayfasini /admin/ panelinden duzenlenebilir yapmak; onceki
// surumde metin dogrudan .astro sablonunun icindeydi ve panel goremiyordu.
const sayfa = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sayfa' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    /** Sayfanin basindaki portre. Bos birakilabilir. */
    portre: z.string().optional(),
    portreAciklama: z.string().default(''),
    /** Sayfanin sonundaki fotograf seridi. Bos birakilabilir. */
    fotograflar: z
      .array(
        z.object({
          gorsel: z.string(),
          aciklama: z.string().default(''),
        })
      )
      .default([]),
  }),
});

export const collections = { blog, sayfa };
