---
title: "ÇELİK BORU AĞIRLIK HESABI EXCEL FORMÜL"
date: 2019-05-10
description: "Çelik boru ve dolu milin metre başına ağırlığı nasıl hesaplanır: formülün kendisi, Excel karşılığı, nereden geldiği ve sık kullanılan ölçüler tablosu."
paylasimKarti: "/gorseller/kart/celik-boru-agirlik-hesabi-excel-formul.png"
tags: ["çelik boru", "ağırlık hesabı", "excel", "imalat"]
categories: ["Articles"]
wpUrl: "https://alperaly.wordpress.com/2019/05/10/celik-boru-agirlik-hesabi-excel-formul/"
---

Nedense internette böyle basit bir bilgiyi bile şeffaf haliyle bulmak çok güç. Çoğu sayfa ya hesap makinesi koyup formülü saklıyor ya da bir Excel dosyası indirtip hücreleri kilitliyor.

Bu yazıda formülün kendisi var. Kopyalayın, kullanın.

> Bu yazıyı ilk yazdığımda bir Excel dosyası bağlantısı paylaşmıştım. O bağlantı artık ölü. Tam da bu yüzden formülü doğrudan buraya yazıyorum — link çürür, sayfadaki metin çürümez.

## Boru (içi boş) ağırlığı

<figure class="sema">
<svg viewBox="0 0 430 252" role="img" aria-label="Çelik boru kesiti: dış çap D, et kalınlığı t" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="celik" width="7" height="7" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" stroke-width="2.4" opacity="0.3"/>
    </pattern>
    <marker id="ok" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,1 L10,5 L0,9 z" fill="currentColor"/>
    </marker>
  </defs>

  <g fill="none" stroke="currentColor">
    <circle cx="120" cy="108" r="78" fill="url(#celik)" stroke-width="1.7"/>
    <circle cx="120" cy="108" r="56" fill="var(--paper)" stroke-width="1.7"/>
    <line x1="28" y1="108" x2="212" y2="108" stroke-width="1" stroke-dasharray="5 4" opacity="0.35"/>
    <line x1="120" y1="30" x2="120" y2="186" stroke-width="1.1" marker-start="url(#ok)" marker-end="url(#ok)"/>
    <line x1="176" y1="108" x2="198" y2="108" stroke-width="1.4" marker-start="url(#ok)" marker-end="url(#ok)"/>
    <line x1="187" y1="102" x2="228" y2="60" stroke-width="1" opacity="0.5"/>
  </g>

  <g fill="currentColor" font-family="ui-monospace, monospace">
    <rect x="109" y="97" width="22" height="21" fill="var(--paper)"/>
    <text x="120" y="113" text-anchor="middle" font-size="17">D</text>
    <rect x="179" y="81" width="16" height="19" fill="var(--paper)"/>
    <text x="187" y="96" text-anchor="middle" font-size="15">t</text>
    <g font-size="13">
      <text x="232" y="64" opacity="0.8">et kalınlığı</text>
      <text x="232" y="112">D = dış çap (mm)</text>
      <text x="232" y="132">t = et kalınlığı (mm)</text>
    </g>
    <text x="232" y="166" font-size="12.5" opacity="0.75">taralı halka = çelik</text>
    <text x="14" y="238" font-size="14">kg/m = 0,02466 · t · (D − t)</text>
  </g>
</svg>
<figcaption>Boruda ağırlığı belirleyen şey taralı halkadır: dış daireden iç daire çıkarılınca kalan çelik.</figcaption>
</figure>

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
