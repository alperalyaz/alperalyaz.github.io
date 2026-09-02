/**
 * Frontmatter (yazinin bastaki "---" blogu) okuma yardimcilari.
 *
 * Neden ayri bir dosya:
 * Yazilar artik iki farkli yerden yazilabiliyor:
 *   1. Elle / npm run yeni  ->  title: "Baslik"     (cift tirnakli)
 *   2. /admin/ paneli       ->  title: Baslik       (tirnaksiz da olabilir)
 * Betikler eskiden sadece cift tirnakli hali taniyordu; tirnaksiz bir
 * "cover:" satirini gormeyip ayni yaziya ikinci bir kapak yaziyordu.
 * Buradaki fonksiyonlar iki bicimi de anlar.
 */

/**
 * Frontmatter'dan tek satirlik bir alani okur.
 * @param {string} fm  "---" satirlari arasindaki metin
 * @param {string} alan  ornegin "title"
 * @returns {string|undefined}  yoksa undefined, bos ise ''
 */
export function fmOku(fm, alan) {
  const m = fm.match(new RegExp(`^${alan}:[ \\t]*(.*)$`, 'm'));
  if (!m) return undefined;
  let v = m[1].trim();
  // satir sonu yorumu degil, deger istiyoruz; tirnakli degeri soy
  if (v.length > 1 && v[0] === '"' && v.at(-1) === '"') {
    return v.slice(1, -1).replace(/\\"/g, '"');
  }
  if (v.length > 1 && v[0] === "'" && v.at(-1) === "'") {
    return v.slice(1, -1).replace(/''/g, "'");
  }
  return v;
}

/**
 * Frontmatter'a bir alani yazar:
 *   - alan yoksa       -> sonuna ekler
 *   - alan var ama BOS -> o satiri degistirir  (cover: "" gibi)
 *   - alan var ve dolu -> hic dokunmaz
 * Sirasi onemli degil; YAML'de alan sirasi anlam tasimaz.
 * @param {string} fm
 * @param {string} alan
 * @param {string} deger
 * @returns {string} yeni frontmatter
 */
export function fmEkle(fm, alan, deger) {
  const satir = `${alan}: "${String(deger).replace(/"/g, '\\"')}"`;
  const mevcut = fmOku(fm, alan);
  if (mevcut === undefined) return `${fm}\n${satir}`;
  if (mevcut !== '') return fm;                       // dolu, elleme
  return fm.replace(new RegExp(`^${alan}:.*$`, 'm'), satir);
}
