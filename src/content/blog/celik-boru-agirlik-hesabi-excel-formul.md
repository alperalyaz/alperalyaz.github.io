---
title: "ÇELİK BORU AĞIRLIK HESABI EXCEL FORMÜL"
date: 2019-05-10
description: "Çelik boru ve dolu milin metre başına ağırlığı nasıl hesaplanır: formülün kendisi, Excel karşılığı, nereden geldiği ve sık kullanılan ölçüler tablosu."
tags: ["çelik boru", "ağırlık hesabı", "excel", "imalat"]
categories: ["Articles"]
wpUrl: "https://alperaly.wordpress.com/2019/05/10/celik-boru-agirlik-hesabi-excel-formul/"
---

Nedense internette böyle basit bir bilgiyi bile şeffaf haliyle bulmak çok güç. Çoğu sayfa ya hesap makinesi koyup formülü saklıyor ya da bir Excel dosyası indirtip hücreleri kilitliyor.

Bu yazıda formülün kendisi var. Kopyalayın, kullanın.

> Bu yazıyı ilk yazdığımda bir Excel dosyası bağlantısı paylaşmıştım. O bağlantı artık ölü. Tam da bu yüzden formülü doğrudan buraya yazıyorum — link çürür, sayfadaki metin çürümez.

## Boru (içi boş) ağırlığı

```
kg/m = 0,02466 × t × (D − t)

D = dış çap (mm)
t = et kalınlığı (mm)
```

**Excel'de:** dış çap `A2` hücresinde, et kalınlığı `B2` hücresinde ise:

```excel
=0,02466*B2*(A2-B2)
```

(Excel'iniz İngilizceyse virgül yerine nokta: `=0.02466*B2*(A2-B2)`)

## Dolu mil (yuvarlak malzeme) ağırlığı

```
kg/m = 0,006165 × D²

D = çap (mm)
```

**Excel'de**, çap `A2` hücresindeyse:

```excel
=0,006165*A2^2
```

## Bu katsayılar nereden geliyor?

Ezberlemeye gerek yok, iki adımdan ibaret.

Borunun kesit alanı, dış daireden iç daireyi çıkarınca kalan halkadır. Sadeleştirilince şu hale gelir:

```
Alan = π × t × (D − t)      [mm²]
```

Bir metre boyunda hacmi bulmak için 1000 mm ile, ağırlığı bulmak için çeliğin yoğunluğu **7,85 g/cm³** ile çarparsınız. Birimleri kilograma çevirdiğinizde π × 0,00785 = **0,02466** katsayısı çıkar.

Dolu milde aynı şey daire alanıyla yapılır: π/4 × 0,00785 = **0,006165**.

**Başka bir malzeme kullanıyorsanız** katsayıyı yoğunlukla ölçekleyin. Örneğin paslanmaz çelik için yoğunluk yaklaşık 7,9–8,0 g/cm³'tür; katsayıyı `7,95 / 7,85 ≈ 1,013` ile çarpmanız yeterli. Alüminyum (2,70) için ise katsayı üçte birinden biraz azdır.

## Sık kullanılan ölçüler

| Boru | Dış çap × Et | kg/m |
|---|---|---|
| DN15 | Ø21,3 × 2,6 | 1,20 |
| DN20 | Ø26,9 × 2,6 | 1,56 |
| DN25 | Ø33,7 × 3,2 | 2,41 |
| DN32 | Ø42,4 × 3,2 | 3,09 |
| DN40 | Ø48,3 × 3,2 | 3,56 |
| DN50 | Ø60,3 × 3,6 | 5,03 |
| DN65 | Ø76,1 × 3,6 | 6,44 |
| DN80 | Ø88,9 × 4,0 | 8,38 |
| DN100 | Ø114,3 × 4,5 | 12,19 |

| Dolu mil | kg/m |
|---|---|
| Ø10 | 0,62 |
| Ø16 | 1,58 |
| Ø20 | 2,47 |
| Ø25 | 3,85 |
| Ø30 | 5,55 |
| Ø40 | 9,86 |
| Ø50 | 15,41 |

## Dikkat edilecek iki şey

**Nominal ölçü ile gerçek ölçü aynı değildir.** Boruyu DN ölçüsüyle sipariş edersiniz ama ağırlığı gerçek dış çap ve et kalınlığından hesaplanır. DN25 boru Ø25 değil, **Ø33,7**'dir. (DN'nin ne olduğunu ayrıca [şurada yazmıştım](/vanalarda-yazan-dn-ne-anlama-geliyor/).)

**Et kalınlığında tolerans vardır.** Standartlar genellikle ±%10 civarı sapmaya izin verir. Formül size teorik ağırlığı verir; kantardaki değer birkaç yüzde şaşabilir. Teklif hazırlarken bu farkı hesaba katın.
