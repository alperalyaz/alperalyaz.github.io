---
title: "Mutlucell SMS API endpoint ve çalışan XML isteği"
date: 2026-01-26
description: "Mutlucell SMS API'sinin gerçek endpoint adresi, XML istek formatı, başarılı yanıtın nasıl göründüğü ve hata kodlarının karşılıkları."
tags: ["mutlucell", "sms", "api", "entegrasyon"]
categories: ["Articles"]
wpUrl: "https://alperaly.wordpress.com/2026/01/26/mutlucell-endpoint/"
---

Araya araya bir hale geldiğim link bu. Adamlar endpoint demek dışında her türlü bilgiyi vermiş.

```
https://smsgw.mutlucell.com/smsgw-ws/sndblkex
```

İlgililerin bilgisine. Aşağıya da çalışan isteğin tamamını bırakıyorum, çünkü adresi bulmak işin sadece yarısı.

## İstek

| | |
|---|---|
| Metot | `POST` |
| Content-Type | `text/xml; charset=UTF-8` |
| Gövde | XML (aşağıda) |

Form-data değil, JSON değil — **XML.** Bu da aramakla geçen zamanın diğer yarısıydı.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<smspack ka="KULLANICI_ADI" pwd="API_ANAHTARI" aboneid="ABONE_NO" org="BASLIK">
  <mesaj>
    <metin>Mesaj metni buraya</metin>
    <nums>5551234567</nums>
  </mesaj>
</smspack>
```

Alanlar:

- **`ka`** — kullanıcı adınız
- **`pwd`** — panelden aldığınız API anahtarı (hesap şifreniz değil)
- **`aboneid`** — abone numaranız
- **`org`** — originatör, yani SMS'in "kimden" kısmında görünecek ad. En fazla 11 karakter, Türkçe karakter yok. **Tanımlı değilse bu parametreyi hiç göndermeyin** — tanımsız bir originatör göndermek hata döndürür.

Birden fazla kişiye gönderecekseniz `<mesaj>` bloğunu çoğaltırsınız. Her bloğun kendi metni ve numarası olur, yani herkese farklı mesaj gönderebilirsiniz.

Metin ve numaraları XML'e koymadan önce **kaçırmayı (escape) unutmayın.** Mesajın içinde `&` ya da `<` geçerse XML bozulur ve `20` hatası alırsınız.

## Başarılı yanıt

Yanıt XML değil, düz metin gelir ve **`$` işaretiyle başlar:**

```
$34672#13.0
```

- `$` sonrası: gönderim kimliği (rapor sorgulamak için)
- `#` sonrası: kalan kontörünüz

Yani kontrolünüz basit: yanıt `$` ile başlıyorsa gitmiştir.

## Hata kodları

Hata durumunda yanıt yalnızca bir sayıdır. Karşılıkları:

| Kod | Anlamı |
|---|---|
| 20 | Post edilen XML eksik veya hatalı |
| 21 | Kullanılan originatöre sahip değilsiniz (originatör tanımlı değil) |
| 22 | Kontörünüz yetersiz |
| 23 | Kullanıcı adı ya da parolanız hatalı |
| 24 | Şu anda size ait başka bir işlem aktif |
| 25 | SMSC durdurulmuş — 1-2 dakika sonra tekrar deneyin |
| 30 | Hesap aktivasyonu sağlanmamış |
| 34 | Hesabınız API erişimine kapalı |

En sık takılınan ikisi **21** ve **34**. 21 alıyorsanız `org` parametresini kaldırıp deneyin. 34 alıyorsanız kodda değil hesapta sorun var; panelden API erişimini açtırmanız gerekiyor.

## Türkçe karakter meselesi

Mesajda Türkçe karakter geçerse SMS, GSM-7 yerine UCS-2 ile kodlanır ve **tek SMS'e sığan karakter sayısı 160'tan 70'e düşer.** Yani "ş" yüzünden mesajınız iki kontör yakabilir.

Ben bu yüzden metni göndermeden önce ASCII'ye çeviriyorum: `ş→s`, `ı→i`, `ğ→g`, `ç→c`, `ö→o`, `ü→u`. "Sayın" yerine "Sayin" yazmak kabalık değil, kontör tasarrufu.

## Çalışmayan adresler

Aramam sırasında denediğim ve **çalışmayan** adresler:

```
https://www.mutlucell.com.tr/api/send        ✗
https://www.mutlucell.com.tr/api/sms/send    ✗  (404)
https://www.mutlucell.com.tr/api/sms         ✗
https://www.mutlucell.com.tr/api/sms/gonder  ✗
```

Bunları buraya yazıyorum ki aynı yolları bir daha kimse denemesin. Doğru adres yazının en başındaki.
