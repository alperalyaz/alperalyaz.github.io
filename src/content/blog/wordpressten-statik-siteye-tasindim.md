---
title: "WordPress'ten statik siteye taşındım — ne kazandım, ne kaybettim"
date: 2026-09-02
description: "15 yıllık WordPress bloğumu Astro ve GitHub Pages'e taşıdım. Nasıl yaptım, aylık maliyeti neden sıfır, taşırken neyi kaybettim ve sizin yapmanız gerekenler."
tags: ["yazılım", "günlük"]
categories: ["Articles"]
cover: "/gorseller/k/wordpressten-statik-siteye-tasindim.webp"
paylasimKarti: "/gorseller/kart/wordpressten-statik-siteye-tasindim.png"
---

Bu blog 2011'den beri WordPress.com'da duruyordu. Ücretsiz planda, ayda yılda bir güncellenen, yılda üç kişinin girdiği bir yerdi. Geçen hafta hepsini söküp aldım; artık statik HTML olarak GitHub'da duruyor.

Aylık maliyeti sıfır. Ama bedava olması bu işin en az ilginç tarafı. Asıl mesele **kime ait olduğu.**

## Neden

WordPress.com'un ücretsiz planında sayfamın üstünde bir reklam bandı vardı ve onu kaldırmanın fiyatı ayda 77 TL'den başlıyordu. Kendi bloğumda, kendi yazımın üstünde, benim koymadığım bir reklam.

Bundan daha çok rahatsız eden şey şuydu: **hiçbir şeye dokunamıyordum.** Ücretsiz planda eklenti yok, temanın kodu kilitli, yönlendirme kuramıyorsun, veritabanına erişemiyorsun. Yazıyı yazıyorsun, gerisi kapalı kutu.

Ve arkasında bir soru duruyor: on yıl sonra o kutu hâlâ orada mı olacak? Şirket satılırsa, ücretsiz plan kalkarsa, kurallar değişirse — 15 yıllık yazı ne olacak?

## Nereye

- **İçerik:** her yazı bir `.md` dosyası. Düz metin. Veritabanı yok.
- **Site üreteci:** [Astro](https://astro.build). Markdown dosyalarını okuyup statik HTML üretiyor.
- **Barındırma:** GitHub Pages. Ücretsiz, reklamsız.
- **Yayın:** GitHub'a bir değişiklik gönderdiğimde site kendini yeniden derliyor.

Bu üçlüde kilitlenme yok. Yarın GitHub'dan çıkmak istesem, elimde 86 tane Markdown dosyası ve bir klasör dolusu görsel kalıyor; başka bir yere kopyalayıp devam ederim. WordPress'ten çıkarken bunu yapmak günler sürdü.

## Nasıl taşıdım

1. **Yazıları çektim.** WordPress.com'un halka açık API'si her yazıyı HTML olarak veriyor. `public-api.wordpress.com/rest/v1.1/sites/<site>/posts/` — hesap gerektirmiyor.
2. **HTML'i Markdown'a çevirdim.**
3. **Görselleri indirdim.** 486 görsel WordPress'in sunucusunda duruyordu. Hepsi indirilip 1600 piksele küçültüldü ve WebP'ye çevrildi: 494 MB'lık yığın 111 MB'a indi. Artık depo içindeler; WordPress kapansa bile duruyorlar. **Bu adımı atlamayın** — atlarsanız blog kalır, resimleri gider.
4. **Yazı adreslerini korudum.** Eski adres `/2014/11/05/vanalarda-yazan-dn-ne-anlama-geliyor/` idi; yenisi `/vanalarda-yazan-dn-ne-anlama-geliyor/`. Tarih kısmını attım ama slug'a dokunmadım.

## Ne kaybettim

Bu kısmı yazmasam da olurdu ama işe yarayan kısım burası.

**Videolar neredeyse sessizce gitti.** HTML'i Markdown'a çeviren araç `<iframe>` etiketlerini destekleyip desteklemediğini söylemeden atıyordu. 22 gömülü video kayboldu ve fark etmesem haberim bile olmayacaktı. Sonradan iframe'leri çevirme öncesi kenara alıp sonra geri koyarak çözdüm.

**"Özel" yazılar hiç aktarılmadı.** WordPress'te üç durum var: yayımlanmış, taslak, bir de **özel** (private). Özel yazı sana görünür, ziyaretçiye görünmez — ve halka açık API onu döndürmez. Bende bir tane vardı, farkına varmadan geride kaldı, siteyi silince gitti. Siz taşımadan önce **Yazılar → Özel** filtresine bakın.

**WordPress'e yüklediğim dosyalar gitti.** Bir PDF, bir sunum, iki Excel dosyası. Bunlar yazının içinde değil, WordPress'in medya kütüphanesindeydi; ben yalnızca görselleri indirmiştim. Site silinince dördü de öldü. Aynı şey WordPress'in kendi video servisine (VideoPress) yüklediğim video için de geçerli.

**Eski siteyi erken kapattım.** Sıra şöyle olmalıydı: önce yeni siteyi Google Search Console'a tanıt, indekslenmesini bekle, **sonra** eskisini kapat. Ben tersini yaptım; eski adresler öldü, yeni site henüz Google'a girmemişti. Arada bir boşluk oluştu. WordPress.com ücretsiz planda yönlendirme (301) kuramadığınız için bu boşluğu kapatmanın bir yolu da yok.

## Şimdi nasıl yazıyorum

Terminal ve git öğrenmek zorunda kalmamak için siteye bir yönetim paneli koydum: `/admin/` adresinde bir editör. Yazıyı yazıp kaydediyorum, panel değişikliği GitHub'a gönderiyor, site kendini derliyor, iki dakika sonra yayında.

Yani gündelik kullanımda WordPress'ten farkı yok. Fark, altındaki şeyin bana ait olması.

## Rakamlar

| | |
|---|---|
| Yazı | 86 (2011 – 2026) |
| Üretilen sayfa | 113 |
| Görsel | 111 MB, depo içinde |
| Bir yazı sayfası | ortalama 9 KB HTML |
| Sitenin kendi JavaScript'i | yok |
| Takip kodu, çerez, reklam | yok |
| Aylık maliyet | 0 TL |

GitHub Pages'in ücretsiz sınırları: depo için 1 GB, aylık 100 GB trafik, saatte 10 derleme. Kişisel bir blog bu sınırların yanından geçmiyor.

## Kime tavsiye ederim

**Ederim:** yazılarını uzun vadede kaybetmek istemeyene, reklam istemeyene, sayfasının hızlı açılmasını isteyene, biraz uğraşmaya razı olana.

**Etmem:** yorumların, üyeliğin, formların, e-ticaretin merkezde olduğu bir siteye. Statik site bunları kutudan vermiyor; her biri ayrı bir çözüm istiyor.

Bir de şu var: WordPress'in yaptığı işi küçümsemeyin. 15 yıl boyunca bir kuruş almadan yazılarımı sakladı ve hiç kaybetmedi. Ayrıldım ama kötü bir yerden ayrılmadım.

---

**Taşıyacaksanız sıra bu:**

1. Yeni siteyi kur ve yayına al.
2. Google Search Console'a ekle, site haritasını (sitemap) ver.
3. İndekslenmesini bekle. Aramada yeni adresler çıkmaya başlasın.
4. **Ondan sonra** eskisini kapat. Silmeden önce "Özel" yazıları ve medya kütüphanesindeki dosyaları indir.

Ben 4'ü 3'ten önce yaptım. Siz yapmayın.
