---
title: "Vanalarda Yazan “DN” Ne Anlama Geliyor?"
date: 2014-11-05
description: "DN, Diameter Nominal'in kısaltmasıdır. Vanalardaki DN ölçüsünün ne anlama geldiği, inç karşılıkları tablosu ve DN ile gerçek çapın neden aynı olmadığı."
cover: "/gorseller/k/vanalarda-yazan-dn-ne-anlama-geliyor.webp"
paylasimKarti: "/gorseller/kart/vanalarda-yazan-dn-ne-anlama-geliyor.png"
tags: ["vana", "DN", "nominal çap", "tesisat"]
categories: ["Articles"]
wpUrl: "https://alperaly.wordpress.com/2014/11/05/vanalarda-yazan-dn-ne-anlama-geliyor/"
---

DN, **Diameter Nominal**'in kısaltılmasıdır. Yani nominal çap. Bu birim vananın geçirgenliğini anlamamızı sağlar.

DN10, DN15, DN20, DN25, DN32, DN40, DN50… gibi bir sıralaması vardır. Bu sıralamanın mantığı şudur:

3/8 BSP paso bağlantılı bir ürünün vana geçirgenliği 3/8 inç ölçüsü ile ilgili olmalıdır. Ancak vana imalatçıları nedeni bilinmeyen bir karar ile bu inç ölçüsü ile olması gereken ilgisini metrik olarak ele almışlardır. Yani 3/8 inç yaklaşık olarak 9,52 mm'ye tekabül ettiği için, 3/8 BSP pasolu bir vananın geçirgenliğine **DN10** demişlerdir.

Bu mantık diğer inç ölçülerinde de aynı şekilde karşılık bulur:

| İnç (BSP) | DN |
|---|---|
| 1/8″ | DN6 |
| 1/4″ | DN8 |
| 3/8″ | DN10 |
| 1/2″ | DN15 |
| 3/4″ | DN20 |
| 1″ | DN25 |
| 1 1/4″ | DN32 |
| 1 1/2″ | DN40 |
| 2″ | DN50 |
| 2 1/2″ | DN65 |
| 3″ | DN80 |
| 4″ | DN100 |
| 5″ | DN125 |
| 6″ | DN150 |

Kısacası DN kısaltması, ürünün paso bağlantı ölçüsü ile ilgili metrik bir birimdir ve ortalama olarak vananın bu paso ile olan ilgisini, dolayısıyla büyüklüğünü anlatır.

## DN, gerçek çap değildir

En sık yapılan hata budur. **DN bir ölçü değil, bir isimdir.** Kumpasla ölçerseniz o rakamı bulamazsınız.

Örneğin DN25 bir boru:

- Dış çapı **33,7 mm**'dir
- İç çapı et kalınlığına göre yaklaşık **27 mm** civarındadır
- Hiçbir yeri 25 mm değildir

<figure class="sema">
<svg viewBox="0 0 486 214" role="img" aria-label="DN25 borunun gerçek ölçüleri: dış çap 33,7 mm, iç çap 27,3 mm; 25 mm diye bir ölçü yok" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="dnCelik" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" stroke-width="2" opacity="0.26"/>
    </pattern>
  </defs>
  <circle cx="108" cy="106" r="84.0" fill="url(#dnCelik)" stroke="currentColor" stroke-width="1.7"/>
  <circle cx="108" cy="106" r="68.0" fill="var(--paper)" stroke="currentColor" stroke-width="1.7"/>
  <circle cx="108" cy="106" r="62.3" fill="none" stroke="var(--accent, #27497e)" stroke-width="1.6" stroke-dasharray="5 4"/>
  <line x1="156.2" y1="37.2" x2="232" y2="34" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <line x1="171.9" y1="82.7" x2="232" y2="74" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <line x1="108.0" y1="168.3" x2="232" y2="150" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <g font-family="ui-monospace, monospace" fill="currentColor">
    <text x="238" y="30" font-size="14">Ø33,7 mm</text>
    <text x="238" y="46" font-size="11.5" opacity="0.65">dış çap</text>
    <text x="238" y="78" font-size="14">Ø27,3 mm</text>
    <text x="238" y="94" font-size="11.5" opacity="0.65">iç çap (et 3,2 mm)</text>
    <text x="238" y="146" font-size="14" fill="var(--accent, #27497e)">Ø25 mm</text>
    <text x="238" y="162" font-size="11.5" opacity="0.65">böyle bir ölçü YOK —</text>
    <text x="238" y="177" font-size="11.5" opacity="0.65">kesik çizgi nerede kalırdı</text>
    <text x="108" y="111" text-anchor="middle" font-size="17" font-weight="600">DN25</text>
  </g>
</svg>
<figcaption>DN25 bir borunun kesiti. Kesik mavi çizgi, "25 mm" olsaydı nerede kalacağını gösteriyor: iç çapın bile içinde. DN bir ölçü değil, o ölçü ailesinin adı.</figcaption>
</figure>

DN sayısı, o ölçü ailesine verilmiş bir etikettir. Sipariş verirken, katalog okurken ve parça eşleştirirken bu etiketi kullanırsınız; ağırlık ya da hacim hesabı yapacaksanız **gerçek ölçülere** bakmanız gerekir. (Ağırlık hesabını [şurada anlatmıştım](/celik-boru-agirlik-hesabi-excel-formul/).)

## Yanındaki PN nedir?

DN'in yanında sık sık **PN** yazar: `DN25 PN16` gibi. PN de **Pressure Nominal**, yani nominal basınçtır ve birimi bardır. PN16, o ürünün 16 bar nominal basınç sınıfında olduğunu söyler.

İkisi birlikte ürünü tanımlar: DN **ne kadar geçirir**, PN **ne kadar dayanır**.

## Dikkat

Özel durumlarda paso bağlantı ölçüsü ile DN karşılığının birbirini tutmadığı görülebilir. Örneğin özel imalat bir vanada 5″ BSP'lik bir pasoya sahip bir vana DN25 nominal çapa sahip olabilir. Bu şu demektir: paso her ne kadar vanadan kat be kat büyük olsa da, bu vana yalnızca DN25'in alabileceği kadar hacimde hizmet verir.

Bu tip bir sistemin özel amaçları olmakla birlikte fazla yaygın olduğu söylenmez. Vanaların çok büyük bir kısmı yukarıdaki tabloda ortaya konan paso ölçüleri ile direkt bir hacim bağlantısına sahiptir.
