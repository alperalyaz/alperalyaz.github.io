---
title: "Vanalarda Yazan “DN” Ne Anlama Geliyor?"
date: 2014-11-05
description: "DN, Diameter Nominal'in kısaltmasıdır. Vanalardaki DN ölçüsünün ne anlama geldiği, inç karşılıkları tablosu ve DN ile gerçek çapın neden aynı olmadığı."
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

DN sayısı, o ölçü ailesine verilmiş bir etikettir. Sipariş verirken, katalog okurken ve parça eşleştirirken bu etiketi kullanırsınız; ağırlık ya da hacim hesabı yapacaksanız **gerçek ölçülere** bakmanız gerekir. (Ağırlık hesabını [şurada anlatmıştım](/celik-boru-agirlik-hesabi-excel-formul/).)

## Yanındaki PN nedir?

DN'in yanında sık sık **PN** yazar: `DN25 PN16` gibi. PN de **Pressure Nominal**, yani nominal basınçtır ve birimi bardır. PN16, o ürünün 16 bar nominal basınç sınıfında olduğunu söyler.

İkisi birlikte ürünü tanımlar: DN **ne kadar geçirir**, PN **ne kadar dayanır**.

## Dikkat

Özel durumlarda paso bağlantı ölçüsü ile DN karşılığının birbirini tutmadığı görülebilir. Örneğin özel imalat bir vanada 5″ BSP'lik bir pasoya sahip bir vana DN25 nominal çapa sahip olabilir. Bu şu demektir: paso her ne kadar vanadan kat be kat büyük olsa da, bu vana yalnızca DN25'in alabileceği kadar hacimde hizmet verir.

Bu tip bir sistemin özel amaçları olmakla birlikte fazla yaygın olduğu söylenmez. Vanaların çok büyük bir kısmı yukarıdaki tabloda ortaya konan paso ölçüleri ile direkt bir hacim bağlantısına sahiptir.
