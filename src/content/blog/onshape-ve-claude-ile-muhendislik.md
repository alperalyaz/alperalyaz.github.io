---
title: "Mühendislik için artık iki şey yetiyor: Onshape ve Claude"
date: 2026-09-24T12:50
description: "Bir asansör iskeletini tarif ettim, karşıma 88 parçalı model, kesim listesi ve lazere verilebilecek dosya çıktı. Devrim çizimde değil, tasarımın kaynak koduna dönüşmesinde."
tags: ["yazılım", "imalat", "sanayi"]
categories: ["Articles"]
cover: "/gorseller/k/onshape-ve-claude-ile-muhendislik.webp"
paylasimKarti: "/gorseller/kart/onshape-ve-claude-ile-muhendislik.png"
---

İddiam şu: bugün bir şeyi tasarlayıp ürettirmek için iki şey yetiyor. Onshape ve Claude.

Bu cümleyi bir yıl önce kursam abartı olurdu. Şu an abartı değil.

## Nasıl çalışıyor

Eskiden Onshape’i açar, tıklaya tıklaya çizerdim. Saatler sürerdi ve bir ölçü değişince yarısı bozulurdu.

Şimdi anlatıyorum. Karşı taraf parametrik Python kodu yazıyor. Kod çalışınca STEP dosyası çıkıyor. STEP’i Onshape’e sürükleyip bırakıyorum. Model orada duruyor, döndürüp bakıyorum.

Yani Onshape’i artık çizmek için kullanmıyorum. Sadece bakmak, döndürmek ve kontrol etmek için kullanıyorum.

En son bir asansör iskeleti yaptım. 88 parça: dikmeler, kirişler, çaprazlar, kılavuzlar, cıvatalar, kaynak somunları. Tarif ettim, kod yazıldı, STEP çıktı, Onshape’te açtım, karşımda duruyordu.

Yanında da şunlar çıktı: kesim listesi (Excel’in Türkçe ayracıyla, noktalı virgüllü), parça ağırlıkları ve toplam kilo, izometrik önizleme, bir de kodun kendisi.

## Asıl devrim çizim değil

Bu işi duyan çoğu kişi “yapay zeka çiziyor” diye anlıyor. Yanlış anlıyor.

Asıl olan şu: tasarım artık bir kaynak kodu.

Dosyanın en üstünde PARAMETRELER diye bir bölüm var. Kat yüksekliği, profil tipi, dikme aralığı, plaka kalınlığı, hepsi orada, düz sayı olarak duruyor.

Kat yüksekliğini değiştiriyorum, kodu tekrar çalıştırıyorum. Model yeniden çıkıyor, kesim listesi yeniden çıkıyor, ağırlıklar yeniden hesaplanıyor, önizleme yeniden çiziliyor. Hepsi birbiriyle tutarlı.

Elle çizilmiş bir modelde bunun ne demek olduğunu bilen bilir. Bir ölçü değişir, çizimin yarısı bozulur, kesim listesini elle güncellemeyi unutursunuz ve imalata yanlış liste gider. Sonra o liste çelik olarak geri gelir.

Tasarımın kod olması bunu bitiriyor. Değiştirilebilir, geçmişi tutulabilir, aynısı tekrar üretilebilir hale geliyor.

## Bunun işe yaramasının sebebi yapay zeka değil

Buradaki asıl kahraman STEP dosyası.

STEP bir ISO standardı, numarası ISO 10303. Otuz yıldır ortada. Onshape okur, SolidWorks okur, lazercinin makinesi okur, kıvırmacının programı okur, tedarikçi okur.

Yani zincirin çalışma sebebi yeni olan taraf değil, eski olan taraf. Yapay zeka sadece o standardı dolduracak geometriyi üretiyor; zaten döşenmiş bir boru hattına bağlanıyor.

Bunu anlamak önemli. Olan şey “yapay zeka her şeyi çözdü” değil, “yapay zeka nihayet var olan altyapıya bağlanabildi”.

## “Artık sadece hayal et” kısmı doğru değil

Şimdi işin beni rahatsız eden tarafına geleyim, çünkü bunu yazmazsam yazı reklama döner.

Geçen gün ekranda şu soruyla karşılaştım:

> NPU 40’ı DIN 1026 tablosundaki U40 olarak aldım: 40×35 mm, gövde 5, flanş 7, 4,87 kg/m. Piyasada 40×20’lik ince bir versiyonu da var. Senin bulduğun hangisi?

Bu soru bütün meseleyi anlatıyor.

Yanlış cevap verseydim ne olurdu? Model ekranda gayet doğru görünecekti. Kesim listesi çıkacaktı. Ağırlık hesabı çıkacaktı. Hepsi yanlış olacaktı. Ve ben bunu ancak çelik depoya geldiğinde anlayacaktım.

Makine benim hangi profili bulduğumu bilmiyor. Bilemez de. Onu bilen benim.

Bu yüzden akışın içinde zorunlu bir doğrulama adımı var: dış ölçü istenenle uyuşuyor mu, parçalar birbirinin içine giriyor mu (kesişim hacmi sıfır olmalı), profilin kilo/metresi tabloyla tutuyor mu, render mantıklı görünüyor mu.

“Artık sadece hayal et” cümlesi kulağa hoş geliyor ama doğru değil. Doğrusu şu: hayal etme kısmı ucuzladı, doğrulama kısmı hâlâ sende.

Aslında iyi haber bu. Çünkü mühendisliğin değerli kısmı zaten çizim değildi.

## Kimsenin söylemediği iki şey

**Bir.** Onshape’in ücretsiz planında dokümanlarınız herkese açıktır. Gizli değildir. Bir müşteri işini oraya koyarsanız internette duruyor demektir. Üstelik ücretsiz plan ticari kullanıma kapalıdır. Bunu bilmeden iş yapan çok insan var.

**İki.** STEP dosyasını Onshape’e attığınızda açılan “STEP” sekmesi sadece ham dosyadır, model orada değildir. Asıl model alttaki Part Studio sekmesindedir, dosya adıyla ve iskelet küçük resmiyle durur. İlk seferinde insan “boş geldi” sanıp vazgeçiyor.

## Peki bunu neden kimse anlatmıyor

Ben önce meslek sırrı sandım. Adamlar biliyor ve saklıyor diye düşündüm.

Artık öyle düşünmüyorum. Daha sıkıcı bir açıklaması var: konu çok yeni ve çok dağınık. Yapanlar yazmıyor, yapmakla meşguller. Yazanlar da genelde İngilizce yazıyor ve olayı yazılımcı gözünden anlatıyor, imalatçı gözünden değil.

Türkçede, atölyesi olan bir adamın diliyle anlatıldığı bir yer neredeyse yok. Aradım, bulamadım.

Yani sır değil. Sadece ortada yok.

O yüzden bu yazıyı yazdım.
