// Sitenin kimlik bilgileri. Adini/sloganini degistirmek istersen burasi.
export const site = {
  title: 'Alper Alyaz',
  tagline: 'Aklıma takılan neyse o.',
  description:
    'Alper Alyaz’ın kişisel defteri. Sanayi ve mühendislikten uzaya, tarihten yazılıma — ' +
    'aklıma takılan ve bir yerde not düşmek istediğim ne varsa.',
  author: 'Alper Alyaz',
  lang: 'tr',
  /**
   * Google Search Console doğrulama kodu.
   * Search Console → URL prefix property → HTML tag yöntemi ile alınır;
   * verdiği <meta> etiketinin content değeri buraya yazılır.
   * Boş bırakılırsa etiket hiç basılmaz.
   */
  googleSiteVerification: '',

  /**
   * Yorumlar — giscus. Yorumlar GitHub Discussions'ta, yani BU DEPONUN
   * icinde saklanir. Ucuncu bir sirkette degil; blog tasinirsa yorumlar
   * da beraber gelir. Ucretsiz, reklamsiz, takip kodsuz.
   *
   * Calismasi icin depoda iki sey gerekir:
   *   1. Settings > General > Features > Discussions isaretli olmali
   *   2. https://github.com/apps/giscus uygulamasi bu depoya kurulmali
   *
   * Sonra kategori kimligi https://giscus.app adresinden alinir.
   * `kategoriId` BOSSA yorum kutusu HIC BASILMAZ - yarim kurulumla
   * ziyaretciye kirik bir kutu gostermemek icin.
   */
  yorumlar: {
    depo: 'alperalyaz/alperalyaz.github.io',
    depoId: 'R_kgDOUMLwWQ',
    kategori: 'Announcements',
    kategoriId: '',
  },

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
