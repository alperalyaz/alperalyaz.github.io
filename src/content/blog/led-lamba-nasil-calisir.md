---
title: "Led Lamba Nasıl Çalışır?"
date: 2016-09-20
description: "LED, ışık veren diyot demek. Işığın tam olarak nerede doğduğu, rengi neyin belirlediği, LED'in neden silisyumdan yapılmadığı ve LED'e neden direnç gerektiği — hesabıyla birlikte."
cover: "/gorseller/k/led-lamba-nasil-calisir.webp"
paylasimKarti: "/gorseller/kart/led-lamba-nasil-calisir.png"
tags: ["LED", "diyot", "yarı iletken", "elektronik"]
categories: ["Articles"]
wpUrl: "https://alperaly.wordpress.com/2016/09/20/led-lamba-nasil-calisir/"
---

**LED**, İngilizce *Light Emitting Diode*'un baş harfleridir. Türkçesi: **ışık veren diyot.**

Adı zaten mekanizmayı söylüyor. LED bir ampul değildir; içinden akım geçince ışıyan bir **diyottur**. Ampulde ışık, telin akkor hâline gelene kadar kızmasından çıkar. LED'de ışık ısınmanın sonucu değildir — akımın kendisinden doğar.

> Bu yazının 2016'daki ilk hâlinde ciddi hatalar vardı: "elektronlar fotona dönüşür", "LED'ler silikondandır", "bilim bunu henüz açıklayamıyor" gibi. Hiçbiri doğru değil. Aşağısı düzeltilmiş hâli; o yanlışlar yaygın olduğu için en sonda ayrıca ele aldım.

## Kısa cevap

LED'in içinde aynı kristalin iki farklı biçimde katkılanmış parçası vardır. Bunların birleştiği yüzeye **eklem** (p-n eklemi) denir.

- Bir taraf (**n**) fazladan **elektron** taşır.
- Öteki taraf (**p**) elektron **eksiği** taşır. Bu eksiklere "boşluk" denir.

Doğru yönde gerilim verdiğinde elektronlar bir yandan, boşluklar öbür yandan bu eklem bölgesine akar. Bir elektron boşluğa yerleştiğinde daha düşük bir enerji seviyesine iner ve **aradaki enerji farkı bir foton, yani bir ışık parçacığı olarak dışarı çıkar.**

Hepsi bu. Işık ayrıca eklenmiş bir düzenek değil; akımın doğrudan sonucu.

<figure class="sema">
<svg viewBox="0 0 520 214" role="img" aria-label="LED kesiti: p bölgesindeki boşluklar ile n bölgesindeki elektronlar eklem bölgesinde birleşiyor ve foton çıkıyor" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ledOk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
      <path d="M0,1 L10,5 L0,9 z" fill="currentColor"/>
    </marker>
    <marker id="ledIsik" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M0,1 L10,5 L0,9 z" fill="var(--accent, #27497e)"/>
    </marker>
  </defs>
  <g font-family="ui-monospace, monospace" fill="currentColor">
    <text x="240" y="16" text-anchor="middle" font-size="11.5" fill="var(--accent, #27497e)">foton = ışık</text>
    <g fill="none" stroke="var(--accent, #27497e)" stroke-width="1.7" stroke-linecap="round">
      <g transform="translate(240,60)"><path d="M0,0 q8,-9 0,-18 q-8,-9 0,-18" marker-end="url(#ledIsik)"/></g>
      <g transform="translate(240,60) rotate(-30)"><path d="M0,0 q8,-9 0,-18 q-8,-9 0,-18" marker-end="url(#ledIsik)"/></g>
      <g transform="translate(240,60) rotate(30)"><path d="M0,0 q8,-9 0,-18 q-8,-9 0,-18" marker-end="url(#ledIsik)"/></g>
    </g>
    <text x="165" y="48" text-anchor="middle" font-size="13">p bölgesi</text>
    <text x="165" y="62" text-anchor="middle" font-size="10.5" opacity="0.6">elektron eksiği</text>
    <text x="315" y="48" text-anchor="middle" font-size="13">n bölgesi</text>
    <text x="315" y="62" text-anchor="middle" font-size="10.5" opacity="0.6">elektron fazlası</text>
    <rect x="90" y="70" width="150" height="86" fill="currentColor" opacity="0.05"/>
    <rect x="90" y="70" width="300" height="86" fill="none" stroke="currentColor" stroke-width="1.7"/>
    <line x1="240" y1="70" x2="240" y2="156" stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 3" opacity="0.5"/>
    <line x1="34" y1="113" x2="90" y2="113" stroke="currentColor" stroke-width="1.5" marker-end="url(#ledOk)"/>
    <line x1="390" y1="113" x2="452" y2="113" stroke="currentColor" stroke-width="1.5" marker-end="url(#ledOk)"/>
    <text x="50" y="104" font-size="16">+</text>
    <text x="424" y="104" font-size="16">−</text>
    <text x="62" y="132" text-anchor="middle" font-size="10" opacity="0.55">akım</text>
    <g stroke="currentColor" stroke-width="1.2">
      <circle cx="118" cy="96" r="7.5" fill="var(--paper, #faf8f3)"/>
      <circle cx="150" cy="130" r="7.5" fill="var(--paper, #faf8f3)"/>
      <circle cx="184" cy="96" r="7.5" fill="var(--paper, #faf8f3)"/>
      <circle cx="212" cy="130" r="7.5" fill="var(--paper, #faf8f3)"/>
    </g>
    <g font-size="11" text-anchor="middle">
      <text x="118" y="100">+</text>
      <text x="150" y="134">+</text>
      <text x="184" y="100">+</text>
      <text x="212" y="134">+</text>
    </g>
    <g stroke="none">
      <circle cx="362" cy="130" r="7.5" fill="currentColor"/>
      <circle cx="330" cy="96" r="7.5" fill="currentColor"/>
      <circle cx="296" cy="130" r="7.5" fill="currentColor"/>
      <circle cx="268" cy="96" r="7.5" fill="currentColor"/>
    </g>
    <g font-size="11" text-anchor="middle" fill="var(--paper, #faf8f3)">
      <text x="362" y="134">−</text>
      <text x="330" y="100">−</text>
      <text x="296" y="134">−</text>
      <text x="268" y="100">−</text>
    </g>
    <g stroke="currentColor" stroke-width="1.2" opacity="0.55">
      <line x1="214" y1="113" x2="231" y2="113" marker-end="url(#ledOk)"/>
      <line x1="266" y1="113" x2="249" y2="113" marker-end="url(#ledOk)"/>
    </g>
    <circle cx="240" cy="113" r="11" fill="none" stroke="var(--accent, #27497e)" stroke-width="1.1" opacity="0.35"/>
    <circle cx="240" cy="113" r="4" fill="var(--accent, #27497e)"/>
    <line x1="240" y1="156" x2="240" y2="172" stroke="currentColor" stroke-width="1" opacity="0.45"/>
    <text x="240" y="187" text-anchor="middle" font-size="12.5">eklem (p-n)</text>
    <text x="240" y="202" text-anchor="middle" font-size="10.5" opacity="0.62">ışık tam burada doğar</text>
  </g>
</svg>
<figcaption>Elektronlar sağdan, boşluklar soldan eklem bölgesine akar. Her birleşmede bir elektron alçak bir enerji basamağına iner; kaybettiği enerji foton olarak çıkar.</figcaption>
</figure>

## Diyot nedir?

Diyot **tek yönlü bir valftir.** Bir yönde akımı geçirir, ters yönde geçirmez.

Sık rastlanan bir tarif, diyotu "elektriği yüksek dirençten düşük dirence geçiren eleman" diye anlatır. Öyle bir şey yok:

- Akımı sürükleyen şey direnç farkı değil, **gerilim farkıdır.**
- Akım "en kolay yolu seçmez"; önüne çıkan **bütün** yollara birden dağılır ve her yoldan o yolun direnciyle ters orantılı miktarda geçer.

Diyotun ayırt edici özelliği yön duyarlı olmasıdır. LED'i ters bağlarsan ışık vermez. Küçük gerilimlerde bir zarar da görmez; ama LED'lerin ters yöndeki dayanımı düşüktür (çoğunda 5 V civarı) ve fazlası kalıcı olarak bozar.

## Rengi ne belirler?

Elektronun düştüğü basamağın yüksekliğine **yasak bant aralığı** denir. Rengi doğrudan bu belirler: basamak ne kadar yüksekse foton o kadar enerjilidir, ışık o kadar maviye kayar.

Bağıntı basit:

```
dalga boyu (nm) ≈ 1240 / bant aralığı (eV)
```

Mavi bir LED'in bant aralığı yaklaşık 2,75 eV'tur: 1240 / 2,75 ≈ **450 nm**, yani mavi. Kırmızı için yaklaşık 1,95 eV: 1240 / 1,95 ≈ **635 nm**.

Bant aralığını da **malzemenin kendisi** belirler — hangi elementlerden, hangi oranda yapıldığı:

| Malzeme | Verdiği ışık |
|---|---|
| GaAs (galyum arsenit) | kızılötesi |
| AlGaAs, GaAsP | kırmızı |
| AlGaInP | turuncu, sarı |
| InGaN | yeşil, mavi |
| AlGaN | morötesi |

Dikkat: renk, hazır bir maddeye "boya katmakla" belirlenmiyor. Kristalin **bileşimi** değişiyor, bileşim bant aralığını, bant aralığı da rengi belirliyor.

**Beyaz LED diye bir malzeme yoktur.** Beyaz LED aslında mavi bir LED'dir; üstü sarı ışık veren bir fosfor tabakasıyla kaplanmıştır. Mavi ışığın bir kısmı fosforu uyarır, fosfor sarı yayar, kalan maviyle karışınca göz beyaz görür. "Sıcak beyaz / soğuk beyaz" farkı da bu kaplamanın karışımından gelir.

## LED neden silisyumdan yapılmaz?

Bütün bilgisayar yongaları silisyumdandır, ama LED'ler değildir. Sebebi ilginç:

Silisyum **dolaylı bant aralıklı** bir yarı iletkendir. Elektronun boşluğa düşerken yalnızca enerjiyi değil momentumu da denkleştirmesi gerekir; bu da kristal titreşiminin işe karışmasını şart koşar. Üç şeyin aynı anda denk gelmesi düşük ihtimaldir, dolayısıyla enerji ışık yerine büyük ölçüde **ısı** olarak çıkar.

LED'ler bu yüzden GaAs, GaN gibi **doğrudan bant aralıklı bileşiklerden** yapılır. Orada elektron doğrudan düşer, foton çıkar.

> Küçük bir dil notu: Türkçede "silikon" ile "silisyum" karıştırılıyor. Silikon banyo derzine sıkılan macundur; yongaların yapıldığı element ise silisyumdur.

## Mavi LED neden bu kadar geç geldi?

Kırmızı LED 1962'de çıktı. Sarı ve yeşil 1970'lerde geldi. Mavi ise **1990'ları** buldu.

Sebebi teorik bir bilinmezlik değildi. Mavi için geniş bant aralıklı bir malzeme gerekiyordu ve tek ciddi aday olan galyum nitrürden yeterince kusursuz kristal büyütmek onlarca yıl çözülemedi. Sorun fizik değil, imalattı.

Bu çözülünce **beyaz LED** mümkün oldu — çünkü beyaz, maviden üretiliyor. Akasaki, Amano ve Nakamura bu iş için 2014 Nobel Fizik Ödülü'nü aldı. Evindeki bütün LED aydınlatma o geciken buluşun sonucudur.

## Pratik: LED'e neden direnç gerekir?

"LED nasıl çalışır" arayanların asıl takıldığı yer burasıdır.

LED'in akım–gerilim eğrisi diktir. Belli bir eşiğe kadar neredeyse hiç akım geçirmez; eşiği aştıktan sonra **çok küçük bir gerilim artışı akımı katlar.** Doğrudan pile bağlarsan akımı sınırlayan bir şey kalmaz: LED ısınır, ısındıkça daha çok akım çeker, saniyeler içinde biter.

Bu yüzden LED'e ya seri bir direnç ya da bir akım kaynağı gerekir. Direnç hesabı:

```
R = (Vkaynak − Vled) / I
```

Örnek — 5 V besleme, kırmızı LED (Vled ≈ 2,0 V), hedef akım 20 mA:

```
R = (5 − 2,0) / 0,02 = 150 Ω
```

Direncin üzerinde harcanan güç `(5 − 2,0) × 0,02 = 0,06 W`, yani sıradan bir 1/4 W direnç fazlasıyla yeter.

Yaklaşık ileri gerilimler:

| LED | İleri gerilim (V) |
|---|---|
| Kızılötesi | 1,2 – 1,5 |
| Kırmızı | 1,8 – 2,2 |
| Sarı, turuncu | 2,0 – 2,2 |
| Yeşil (InGaN) | 3,0 – 3,4 |
| Mavi | 3,0 – 3,4 |
| Beyaz | 3,0 – 3,4 |

Yeşilde iki aile var: eski GaP yeşilleri 2,1 V civarında, parlak InGaN yeşilleri 3,2 V civarında çalışır. Emin değilsen veri sayfasına bak.

Ve şu tuzağa dikkat: **3 V'luk bir LED'i 3 V pille dirençsiz sürmek de güvenli değildir.** Taze pilin gerilimi eşiğin üstündedir ve akımı sınırlayan tek şey pilin iç direnci olur.

Son olarak, "LED ısınmaz" doğru değildir. LED ışığı ısıdan üretmez ama harcadığı gücün önemli bir kısmı yine ısıya gider. Ampul gibi cam yüzeyi kızmaz, ısı lehim tarafından çıkar — LED ampullerin dibindeki o kalın alüminyum gövde tam olarak bunun içindir. Isıyı atamayan LED önce sararır, sonra söner.

## Yaygın üç yanlış

**"Elektron fotona dönüşür."** Dönüşmez. Elektron yok olmaz; yüksek bir enerji seviyesinden düşük bir seviyeye iner, o kadar. Dışarı çıkan şey elektronun kendisi değil, **kaybettiği enerjidir.**

**"Boşluk diye bir parçacık var."** Yok. Boşluk, olmayan bir elektronun bıraktığı yerdir. Hesap kolaylığı olsun diye artı yüklü bir parçacıkmış gibi konuşulur, ama ortada yalnızca bir eksiklik vardır.

**"Işığın nereden geldiği tam bilinmiyor, CERN gibi yerlerde araştırılıyor."** Bilinmiyor değil; 1960'lardan beri ders kitabı konusudur. CERN'in işi atom altı parçacıklar ve temel kuvvetlerdir, LED'in ışığıyla ilgisi yoktur. LED, kuantum fiziğinin anlaşılamayan değil, **en iyi anlaşılan** taraflarından biridir.
