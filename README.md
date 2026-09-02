# alperalyaz.com — kişisel blog

WordPress'ten taşınmış statik blog. 86 yazı, 486 görsel, sıfır aylık maliyet.

## Neden böyle kuruldu?

Amaç **kalıcılık**. Bunun için üç karar verildi:

1. **İçerik düz metin.** Her yazı bir `.md` dosyası. Veritabanı yok, eklenti yok,
   sürüm uyumsuzluğu yok. 30 yıl sonra bir metin editöründe açılır.
2. **Görseller depo içinde.** 486 görsel WordPress'ten indirilip küçültüldü
   (494 MB → 108 MB). WordPress hesabı kapansa bile blog eksiksiz çalışır.
3. **GitHub Pages'te yayınlanıyor.** Kaynak ve yayın aynı hesapta; ayrı bir
   servis hesabı, ayrı fatura ilişkisi, plan kademesi yok.

Yani host değiştirmek 10 dakikalık iş. Kaybolma riski olan tek şey **adres** —
kendi alan adını alırsan (yılda ~10-15 dolar) o risk de biter.

## Yayın adresi

`.github/workflows/github-pages.yml` her push'ta siteyi derler ve yayınlar.
Adresi depo adından kendisi hesaplar:

| Depo adı | Yayın adresi |
|---|---|
| `blog` | `https://alperalyaz.github.io/blog/` |
| `alperalyaz.github.io` | `https://alperalyaz.github.io/` |

Depoyu yeniden adlandırırsan yapılandırmada hiçbir şey değiştirmen gerekmez —
görsel yolları, sitemap ve canonical etiketleri otomatik uyar.

## Yönetim paneli

Tarayıcıdan yazı yazmak için:

**https://alperalyaz.github.io/admin/**

Terminal, git, dosya yükleme yok. Yazıyı yazıp **Save** dersin; panel değişikliği
doğrudan GitHub'a commit'ler, GitHub Actions siteyi derler, ~2 dakika sonra
yazı canlıdadır.

### İlk giriş — erişim anahtarı (token) alma

Panel senin adına GitHub'a yazacağı için bir anahtara ihtiyacı var. Bir kere
alınır, tarayıcıda saklanır.

1. Panelde **Sign In Using Access Token** düğmesine bas.
2. Açılan kutudaki bağlantıya tıkla — GitHub'ın token sayfasını gerekli
   yetkiler seçili hâlde açar.
3. Depo erişimi: **Only select repositories → alperalyaz.github.io**.
   Yetki: **Contents → Read and write**. Başka yetkiye gerek yok.
4. Bir son kullanma tarihi seç (90 gün makul). Token'ı üret, kopyala,
   paneldeki kutuya yapıştır.

Anahtar yalnızca senin tarayıcının hafızasında (localStorage) durur; depoya
yazılmaz, kimseyle paylaşılmaz. Tarayıcı verilerini silersen ya da token'ın
süresi dolarsa aynı adımlarla yenisini alırsın.

> Panel arayüzü İngilizce — Sveltia CMS'in Türkçe çevirisi yok. Alan adları
> (Başlık, Özet, Etiketler…) Türkçe; çevresindeki düğmeler İngilizce.

### Panelde dikkat edilecek üç şey

**1. Slug = yazının adresi.** Yeni yazı açarken en üstte çıkan kutu, yazının
kalıcı internet adresidir. Türkçe karakter kullanma; `uc-yollu-vana` gibi yaz.
(Otomatik bırakılsaydı "üç" kelimesini `uec` yapardı — mevcut adreslerle
uyuşmazdı, o yüzden elle yazılıyor.)

**2. "Yazı" alanı ham Markdown açılır — öyle bıraksan iyi olur.** Üstteki
düğmeden zengin metin (rich text) moduna geçebilirsin, ama o mod tabloları,
kod bloklarını ve elle çizilmiş SVG şemaları kendi biçimine çevirip bozabilir.
Şema içeren yazılarda (DN, üç yollu vana, boru ağırlığı, menşe) zengin moda
**geçme**.

**3. Kapak görselini boş bırakabilirsin.** Boşsa yazının içindeki ilk görsel
kapak olur; hiç görsel yoksa baş harfli bir kart otomatik üretilir. Panelden
yüklediğin fotoğraflar tarayıcıda WebP'ye çevrilip 1600 px'e küçültülür,
yani 5 MB'lık telefon fotoğrafı depoya öyle gitmez.

### Panelin ayarları

`public/admin/config.yml` — hangi alanların görüneceğini, görsellerin nereye
gideceğini ve commit mesajlarını burası belirler. Dosyanın içi yorum satırlarıyla
açıklanmış.

`public/admin/index.html` — panelin kendisi. Sveltia CMS sürümü **sabitlenmiş**
(`@0.205.1`). Sebebi: yazılım 1.0 öncesi ve bu sayfa GitHub yazma yetkisi olan
bir anahtar tutuyor; "her zaman son sürüm" demek istemedik. Yükseltmek için
o satırdaki numarayı değiştirmen yeterli.

Panele yeni bir alan eklersen **aynısını `src/content.config.ts` dosyasına da
ekle.** Orada tanımlı olmayan bir alan derlemeyi hataya düşürür.

## Yeni yazı nasıl eklenir? (terminalden)

```bash
npm run yeni "Dacia Duster bakım ikazı nasıl sıfırlanır"
```

Bu komut `src/content/blog/` içine hazır bir dosya açar. Dosyayı doldur, sonra:

```bash
npm run dev      # http://localhost:4321 adresinde önizle
git add -A && git commit -m "yeni yazı" && git push
```

Push ettiğin an site kendini günceller. Başka hiçbir şey yapman gerekmez.

### Yazı dosyasının başındaki alanlar

```yaml
---
title: "Başlık"              # zorunlu
date: 2026-09-02             # zorunlu
description: "..."           # Google sonuçlarında görünen satır — MUTLAKA doldur
lang: en                     # yazı İngilizceyse; yazmazsan Türkçe sayılır
tags: ["vana", "hidrolik"]   # isteğe bağlı
categories: []               # isteğe bağlı
draft: true                  # varsa yazı yayınlanmaz
---
```

`description` boş bırakılırsa Google arama sonucunda rastgele bir cümle gösterir.
Bir yazıyı bulunur kılmak istiyorsan burayı doldur.

### Görsel eklemek

Görseli `public/gorseller/` içine koy, yazıda şöyle çağır:

```markdown
![Görselin açıklaması](/gorseller/dosya-adi.webp)
```

Köşeli parantez içindeki açıklama önemli: hem görme engelliler için okunur,
hem Google görselleri onunla anlar.

## Komutlar

| Komut | Ne yapar |
|---|---|
| `npm run dev` | Yerel önizleme (kaydettikçe anında yenilenir) |
| `npm run build` | Siteyi `dist/` klasörüne üretir |
| `npm run preview` | Üretilmiş siteyi yerelde test eder |
| `npm run yeni "Başlık"` | Yeni yazı dosyası açar |

Terminale hiç girmek istemiyorsan yukarıdaki [yönetim panelini](#yönetim-paneli) kullan.

## Klasör yapısı

```
src/
  content/blog/     ← YAZILAR BURADA. Asıl çalışacağın yer.
  pages/            ← Sayfa şablonları (ana sayfa, arşiv, etiket, hakkında)
  layouts/          ← Ortak HTML iskeleti + SEO etiketleri
  components/       ← Tekrar kullanılan parçalar
  styles/global.css ← Tüm tasarım. Renkler en üstteki değişkenlerde.
  lib/site.ts       ← Site adı, slogan, açıklama
public/gorseller/   ← Görseller
public/admin/       ← Yönetim paneli (config.yml + index.html)
scripts/            ← Yardımcı betikler
```

## Kendi alan adını alırsan

1. Alan adını satın al, DNS'te GitHub Pages'e yönlendir.
2. Depo → Settings → Pages → Custom domain kısmına yaz.
3. `astro.config.mjs` içindeki tek satırı değiştir:
   ```js
   const SITE = process.env.SITE_URL ?? 'https://alperalyaz.github.io';
   ```
4. `.github/workflows/github-pages.yml` içindeki `site=` satırını da alan adına çevir.

Sitemap, RSS ve canonical etiketleri otomatik olarak yeni adrese göre üretilir.

## Teknik

Astro 7 · statik HTML üretir · JavaScript çalıştırmaz · harici sunucuya istek atmaz.

Yazı tipi: Fraunces (başlıklar), `src/fonts/` içinde. Orijinali 220 KB'dı;
kullanılmayan eksenler sabitlenip gereksiz alfabeler atılarak 94 KB'a indirildi
(`scripts/fontlari-kirp.py`). Gövde metni ve rakamlar sistem yazı tiplerini
kullanır — sıfır indirme, gerçek italik ve kalın kesimler.
