// Sitenin kimlik bilgileri. Adini/sloganini degistirmek istersen burasi.
export const site = {
  title: 'Alper Alyaz',
  tagline: 'Aklıma takılan neyse o.',
  description:
    'Alper Alyaz’ın kişisel defteri. Sanayi ve mühendislikten uzaya, tarihten yazılıma — ' +
    'aklıma takılan ve bir yerde not düşmek istediğim ne varsa.',
  author: 'Alper Alyaz',
  lang: 'tr',
  locale: 'tr_TR',
};

/** Alt dizinde yayinlanirsa (GitHub Pages gibi) baglantilarin kirilmamasi icin. */
export function href(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`.replace(/\/{2,}/g, '/') || '/';
}

/** 27 Temmuz 2026 seklinde tarih. */
export function trDate(d: Date): string {
  return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
}

/** <time datetime="..."> icin 2026-07-27 */
export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
