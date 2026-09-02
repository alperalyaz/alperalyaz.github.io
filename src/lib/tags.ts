import { getCollection } from 'astro:content';

/** Bir etiketin kendi sayfasini hak etmesi icin gereken en az yazi sayisi. */
export const MIN_TAG_POSTS = 2;

/**
 * Etiketin adres (URL) karsiligi.
 * "pnomatik" gibi ASCII bir slug uretir; boylece adresler
 * /etiket/pn%C3%B6matik/ diye yuzde isaretiyle dolmaz.
 * Etiketin ekranda gorunen hali degismez, sadece adresi sadelesir.
 */
const TR: Record<string, string> = {
  'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
  'Ç': 'c', 'Ğ': 'g', 'İ': 'i', 'Ö': 'o', 'Ş': 's', 'Ü': 'u',
};

export function etiketSlug(tag: string): string {
  return tag
    .replace(/[çğıöşüÇĞİÖŞÜ]/g, (c) => TR[c])
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Hangi etiket kac yazida geciyor? */
export async function tagCounts(): Promise<Map<string, number>> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const counts = new Map<string, number>();
  for (const p of posts) {
    for (const t of p.data.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return counts;
}

/**
 * Sayfasi olan etiketler.
 * Tek yazida gecen etikete sayfa acmiyoruz: icerigi zayif sayfa uretmek
 * arama motorlarinda faydadan cok zarar veriyor.
 */
export async function linkedTags(): Promise<Set<string>> {
  const counts = await tagCounts();
  return new Set([...counts].filter(([, n]) => n >= MIN_TAG_POSTS).map(([t]) => t));
}
