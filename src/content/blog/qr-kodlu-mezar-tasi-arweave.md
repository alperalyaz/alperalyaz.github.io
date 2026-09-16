---
title: "Mezar taşına QR kod koyduk"
description: "Kayınbabamın mezar taşında bir QR kod var. Zor kısım kodu taşa kazıtmak değildi. Taş kadar uzun yaşayacak bir sistem kurmaktı."
date: 2026-09-16
tags: ["yazılım", "aile", "felsefe"]
categories: ["Articles"]
cover: "/gorseller/qr-kodlu-mezar-tasi.webp"
---

Kayınbabam Mustafa Ertan'ı Ocak 2025'te kaybettik.

Mezar taşını yaptırırken bir şey denedik. Taşın sağ üst köşesine, adın hemen üstüne, bir QR kod kazıttık. Telefonu tutuyorsunuz, bir sayfa açılıyor: hayatı, ailesi, elli küsur fotoğrafı, bir de ziyaretçi defteri.

![Mustafa Ertan'ın mezar taşı. Adın hemen üstünde, sağ köşede kazınmış bir QR kod duruyor.](/gorseller/qr-kodlu-mezar-tasi.webp)

Bu yazı o QR kodla ilgili değil aslında. Kodun arkasındaki soruyla ilgili.

## Mezar taşına otuz kelime sığıyor

Bir mezar taşında ne yazar? Ad, soyad, iki tarih, bir dua. Hepsi bu. Otuz kelimeyi geçmez.

Seksen yıllık bir hayat otuz kelimeye sığmıyor.

Kayınbabam 1945'te Kuşadası'nın Yaylaköy'ünde doğdu. Ailenin en büyük çocuğuydu, beş kardeşi vardı, küçük yaşta çalışmaya başladı. Odunculuk yaptı, yevmiyeye gitti, kiraladığı tarlayı ekti. Eşi ve çocuklarıyla bir ev yaptırdı, yıllar sonra sattı, doğduğu köye geri döndü. 2007'de geçirdiği traktör kazasından sonra işini çocuklarına bıraktı.

Bunların hiçbiri taşa sığmaz. Ama bir sayfaya rahat sığar.

Taşın işi kimliği söylemek. Sayfanın işi hikâyeyi anlatmak. Kod ikisini birbirine bağlıyor. Bana bu bölünme çok mantıklı geldi.

## Aslında bu kadar tuhaf bir fikir değil

İnsanlar tuhaf karşılıyor. Ben de karşılardım. Ama iki şeyi fark edince fikir yerine oturdu.

Birincisi: devlet bunu zaten yapıyor. Elimde kayınbabamın ölüm belgesi var, Sağlık Bakanlığı'nın verdiği resmî belge. Sağ alt köşesinde bir QR kod duruyor, belgenin sahte olmadığını doğrulamak için. Yani bir ölümü kaydeden evrak çoktan makine tarafından okunabilir hale gelmiş. Sadece o evrakın üstündeki taş kalmış geride.

İkincisi: QR kodlu mezar taşı yeni bir icat değil. Arayın, satan bir sürü şirket bulacaksınız. Levha yapıyorlar, taşa yapıştırıyorlar, hazır anı sayfası veriyorlar.

Ama bu şirketlerin hepsinin reklamında aynı cümle geçiyor.

## "Ömür boyu barındırma"

Cümle bu: *ömür boyu barındırma, aidat yok.*

Sorun şu ki oradaki "ömür" kimin ömrü belli değil. Şirketin ömrü. Sizinki değil. Mermerinki hiç değil.

Mermer yüz yıl durur, belki daha fazla. Bir internet şirketinin ömrü ise bunun yanında çok kısa; bugün adını bildiğiniz kaç şirket otuz yıl öncesinden kalmıştır, bir düşünün. Yani standart kurulumda olacak olan şey şu: taş ayakta, kod okunuyor, açılan sayfa 404.

Bu sıradan bir kırık bağlantı değil. Mezar taşının üzerinde bir kırık bağlantı. Yapabileceğiniz en kötü şey bu bence. Hiç kod koymamak, ölü bir kod koymaktan iyidir.

Benim tek şartım buydu: sayfa taştan önce ölmeyecek.

## Arweave

Bu şartı karşılamak için sayfayı normal bir sunucuya değil, [Arweave](https://arweave.org) ağına koyduk.

Mantığı basit. Normal barındırmada her ay para ödersiniz, ödemeyi kestiğiniz gün dosya silinir. Arweave'de bir kere ödersiniz, dosya ağa girer, bir daha kimse ödeme yapmaz.

Peki para bitmeden nasıl yıllarca saklanıyor? Ödediğiniz ücretin büyük kısmı bir fona giriyor, fon yıllara yayılarak veriyi tutan madencilere dağıtılıyor. Hesap, 200 yıllık depolamayı bugünün fiyatından peşin ödeyeceğiniz şekilde kurulmuş.

Fonun ayakta kalması tek bir varsayıma dayanıyor: depolama maliyeti her yıl en az %0,5 ucuzlayacak. Bu varsayım bilerek çok temkinli seçilmiş, çünkü son elli yılda depolamanın gerçek ucuzlama hızı yılda %30'un üzerinde olmuş. Yani sadece %0,5 tutsa bile fon bitmiyor; gerçek oran ne kadar yüksek olursa fon o kadar uzun yaşıyor.

Kayınbabamın sayfası oraya yüklendi. Bir defa ödendi. Kimse aidat ödemiyor, kimsenin kredi kartının süresi dolmuyor, kimse bir gün "artık gerek yok" deyip aboneliği iptal edemiyor.

Bu son cümle benim için en önemlisi. Çünkü unutmak da bir karardır ve ben o kararı kimsenin verememesini istedim.

## Ziyaretçi defteri

Sayfada bir de ziyaretçi defteri var. Mezara giden biri kodu okutup oraya bir şey yazabiliyor.

Bugüne kadar yirmi mesaj yazılmış. İlki Mart ayında gelmiş, sonuncusu iki gün önce.

Buradaki teknik ayrıntı hoşuma gidiyor: her mesaj tek tek, ayrı ayrı, kalıcı olarak ağa yazılıyor. Bir veritabanının içinde oturmuyorlar. Veritabanı sadece hızlı göstermek için var, mesajın kendisi orada durmuyor.

Bunun güzel bir sonucu var. Sistemin yazma tarafı bir gün duracak. Vercel kapanır, bakiye biter, ben ölürüm. O gün geldiğinde yeni mesaj yazılamayacak. Ama yazılmış olan mesajlar yerinde duracak.

Yani sistem bozulduğunda kaybolmuyor, sadece susuyor. Defter kapanıyor ama yanmıyor.

Bir yazılım için isteyebileceğim en iyi ölüm bu.

## Şimdi dürüst kısım

Buraya kadar güzel anlattım. Şimdi zayıf taraflarını da yazayım, yoksa yazının bir kıymeti kalmaz.

Bu bir bahis. Fizik kanunu değil. Üç tane açığı var.

**Birincisi, fon sonuçta bir ekonomik model.** Mermer kimseden para beklemiyor, kimsenin hesabının tutmasına muhtaç değil. Arweave muhtaç. Model temkinli kurulmuş, arkasındaki matematik ikna edici, ama sonuçta bir hesap. Her hesabın yanılma payı vardır.

**İkincisi, koddaki adres.** Kodun içinde iki ayrı şey var: dosyanın kimlik numarası ve o dosyaya ulaştıran bir alan adı. Kimlik numarası kalıcı, ağın kendi içinde geçerli. Alan adı değil; onu bir şirket işletiyor. O şirket kapanırsa veri yerinde durur ama kod bir hiçliğe gider.

Bunun tek tesellisi şu: kimlik numarası, adresin içinde açık açık yazılı. Yani kodu okutup hiçbir yere gidemeyen biri bile o numarayı görüyor. Elinde arayacak bir şey kalıyor. Kalıcı olan adres değil, numara.

**Üçüncüsü, dijital olan aniden ölür.** Taşa kazınmış bir yazı yüz yılda aşınır, ama yarısı okunur, gerisini siz tahmin edersiniz. QR kodda böyle bir nezaket yok. Belli bir hasara kadar kusursuz okunur, o eşiği geçtiği anda hiç okunmaz. Arada bir şey yoktur.

Yazı yavaş ölür. Kod aniden ölür.

Bunu bilerek yaptık. Taşın üstünde hâlâ adı, tarihleri ve duası yazıyor. Kod ek bir katman, yerine geçen bir şey değil. Kod giderse taş kalır.

## Neden yaptım

Buraya kadar teknik konuştum. Asıl söylemek istediğim şey şu.

Teknoloji güzel bir şey ama gündelik hayata kendiliğinden girmiyor. Girmesi için birinin bir alışkanlığı kırması gerekiyor. Çoğu zaman kimse kırmıyor; araç ortada duruyor, herkes faydalı olduğunu söylüyor, kimse eline almıyor.

Ben en uç yerde denemek istedim. İnsanın en eski, en törensel, değişime en kapalı nesnesinde. Mezar taşında.

Karşılığında ne aldım? Şunu: kayınbabamı hiç görmemiş bir torunu, bir gün o taşın önünde durup telefonunu uzatacak ve onun yüzünü görecek. Kaç kardeşi olduğunu, nerede doğduğunu, ömrü boyunca ne iş yaptığını okuyacak. Bugün o çocuğa bunları anlatacak kimse kalmamış olacak. Taş anlatacak.

Bana bu yeter.

On nesil sonra taş hâlâ ayaktaysa, ya da diyelim ki uzaylı bir medeniyet gelip o kareye baktıysa, ne olduğunu çözebilecekler. Abartıyorum tabii. Ama abartının içinde doğru bir şey var: bugün verdiğimiz sıradan bir karar, bizden çok sonra bir yabancıya bir şey anlatacak.

Duyguyla kod aynı yere oturabiliyor mu diye merak ediyordum.

Oturuyormuş.

Ruhuna Fatiha.
