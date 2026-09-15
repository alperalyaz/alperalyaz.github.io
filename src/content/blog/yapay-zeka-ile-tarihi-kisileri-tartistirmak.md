---
title: "Platon ile Sevan Nişanyan'ı aynı masaya oturttum"
date: 2026-09-15
description: "Tarihte bir araya gelmesi imkânsız insanları bir konu üzerinde tartıştıran bir site yaptım: debate.be. Konuğu siz seçiyorsunuz, spiker koltuğunda siz oturuyorsunuz."
tags: ["yazılım", "tarih", "felsefe"]
categories: ["Articles"]
cover: "/gorseller/debate-be-kapak.png"
---

Okurken bende hep şu his oluşuyor: iki insan, iki ayrı yüzyıl, aynı soruya bakıyorlar ve birbirlerinden habersizler. Platon devletin nasıl yönetilmesi gerektiğini yazıyor. 2400 yıl sonra bir sözlükçü aynı soruya bambaşka bir kapıdan giriyor. İkisi aynı masaya otursa ne olurdu?

O masa kurulamaz. Kurulamayan masayı kurmak için bir şey yaptım.

**[debate.be](https://debate.be)**

![debate.be](/gorseller/debate-be-og.png)

## Ne yapıyor

Bir konu yazıyorsunuz. Konuya gerçekten ilgili isimler öneriliyor - beğenmezseniz kendiniz ekliyorsunuz, kim olursa. Sokrates, Marie Curie, Fatih Sultan Mehmet, Nasreddin Hoca, hatta Ötzi. Sonra tartışıyorlar.

Ama işin aslı şu: **siz izleyici değilsiniz, spikersiniz.** Söz veriyorsunuz, "durun" diyorsunuz, konuyu değiştiriyorsunuz, birini ismiyle çağırıp cevap vermeye zorluyorsunuz. Masa sizin yönetiminizde.

## Gerçek bir oturumdan

Konu: *"İyi niyetli bir diktatör mü, kararsız bir demokrasi mi?"* Masada Platon ve Sevan Nişanyan var.

> **Platon:** Doğru karar sayıyla değil, bilgiyle verilir. Bin cahilin el kaldırması, tek bir bilgenin isabetli hükmünden aşağıdır. Halk meclisi kendisine yalan söyleyeni değil, kulağına hoş geleni alkışlar; adalet ise hoş değildir, doğrudur.
>
> **Sevan Nişanyan:** Ben ömrümü kelimelerin soyağacını çıkarmakla geçirmiş bir sözlükçüyüm. O yüzden açık konuşayım: iyi niyetli diktatör diye bir hayvan yoktur. Çünkü iyi niyet dediğin şey tek bir elde biriktiği gün bozulur - tıpkı bir kelimenin tek başına dolaşınca anlamını kaydırması gibi.
>
> **Platon:** "İyi niyetli diktatör diye bir hayvan yoktur" - güzel laf, sözlükçüye yakışır. Ama kelimelerin soyağacını bilmek, adaletin ne olduğunu bilmek değildir. Sen kusurlu demokrasiyi övüyorsun; peki o kusur kimi gömdü? Benim hocam Sokrates'i, o senin "hesap sorulabilen" dediğin meclis, çoğunluk oyuyla zehre yolladı.

Oturumun tamamı burada: **[İyi niyetli bir diktatör mü, kararsız bir demokrasi mi?](https://debate.be/s/6ugj2ensr)**

Nişanyan'ı o masaya çağırmam tesadüf değil; [aforizmalarını buraya da yazmıştım](/sevan-nisanyan-aforizmalari/).

## Bir yapay zekâya "bunları tartıştır" demekten farkı ne?

Dürüst soru, cevabı da somut:

**Sözünü kesiyorlar.** Tansiyon yükselince rakip konuk konuşanın lafını ortasından kesiyor - ses gerçekten yarıda kesiliyor. Kesilen tersliyor, spiker araya giriyor.

**Herkesin kendi sesi var.** Her konuğa cinsiyetine, dönemine ve üslubuna göre ayrı bir ses atanıyor. Spikerin de kendi sesi var.

**Karakterler Vikipedi'den besleniyor.** Her konuğa, hakkındaki gerçek maddeden çıkarılmış ayrı bir kimlik veriliyor. Kendi döneminin diliyle konuşuyor. Bazılarının özel tarifi var: Sokrates asla tez savunmuyor, sadece soru soruyor ve masayı kendi çelişkisinde boğuyor. Ötzi üç kelimelik cümleler kuruyor ve modern hiçbir kavramı anlamıyor.

**Ekranda bir reytingmetre var.** Tartışma tatsızlaşınca dibe vuruyor ve sizi müdahaleye çağırıyor. Yani sıkıcılığın bir bedeli var.

## İki mod

**Siyaset Meydanı** - derin, çekişmeli, felsefî. Reyting çatışmayla yükseliyor.

**Sohbet Meydanı** - gündüz kuşağı magazin tonu. Spiker "canlarım tatlılarım" kıvamında, yıldızlar masada. Reyting kahkahayla yükseliyor. Bu modu şaka olsun diye ekledim, sonra en çok onu açar oldum.

## Çizdiğim sınır

Kutsal figürlere ve Atatürk'e hakaret içeren konular **hiç açılmıyor** - konuk bile çağrılmıyor.

Bunu yapay zekânın insafına bırakmadım. Yapay zekâ moderasyonu sonuçta bir API çağrısıdır; kota dolunca, hata alınca "izin ver"e düşer. En bariz karalama kalıpları bu yüzden doğrudan kodun içinde, anahtarsız ve şaşmaz biçimde duruyor. Meşru tartışmayı engellemek için değil - birini karalamak üzere kurulmuş başlıkları durdurmak için.

## Şunu net söyleyeyim

Masadakiler o insanlar değil. Yapay zekânın canlandırdığı **kurgusal** karakterler. Platon'un ağzından çıkan cümle Platon'un cümlesi değildir; Platon hakkında yazılanlardan üretilmiş bir taklittir.

Bunu küçültmek için söylemiyorum, yanlış anlaşılmasın diye söylüyorum. Amaç tarihî belge üretmek değil; düşündürmek ve tartışmanın kendisini seyrettirmek. Bir fikri anlamanın en hızlı yolu, onu karşısındakiyle boğuşurken görmek.

## Altında ne var

Meraklısına: arayüz React + Vite, sunucu tarafı Vercel'de birkaç serverless fonksiyon. Dil modeli DeepSeek üzerinden gidiyor, sesler Google Cloud TTS. Görünmeyen bir "yönetmen" her turda transkripti okuyup sırayı, rolü ve anlık reytingi tek çağrıda belirliyor. Sıradaki tur, mevcut konuşma çalarken arkada hazırlanıyor - o yüzden sıra gelince bekleme olmuyor.

Anahtarlar sunucuda tutulmuyor; kendi anahtarınızı girerseniz yalnızca tarayıcınızda kalıyor.

## Denemek

[debate.be](https://debate.be). Üyelik yok, kurulum yok. Günlük bir deneme kotası var; dolduğunda kendi yapay zekâ anahtarınızı girip sınırsız devam edebilirsiniz.

Türkçe ve İngilizce çalışıyor. Konuyu hangi dilde yazarsanız masa o dilde tartışıyor.

---

Bu işi neden yaptığımı bir cümlede söyleyeyim: **merak ettim.** Fatih ile Machiavelli aynı masada ne konuşurdu, Nasreddin Hoca bir ekonomi tartışmasına ne derdi, Ötzi devlet kavramını nasıl karşılardı. Cevabı bilmiyordum, öğrenmenin tek yolu masayı kurmaktı.
