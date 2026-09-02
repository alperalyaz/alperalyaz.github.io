#!/usr/bin/env python3
"""
Fraunces yazi tipini kucultur.

Neden gerekli: Fraunces'in orijinal dosyasi 4 degisken eksen (opsz, wght,
SOFT, WONK) ve dunyanin butun alfabelerini tasidigi icin 118 KB.
Biz sadece iki ekseni kullaniyoruz ve sadece Turkce + Avrupa harfleri lazim.

Ne yapiyor:
  1. SOFT ve WONK eksenlerini sabitler (WONK=1 -> karakteri veren o)
  2. opsz ve wght serbest kalir (baslik boyutuna gore harf formu degisir)
  3. Kullanilmayan alfabeleri atar

Calistirma:  python3 scripts/fontlari-kirp.py
"""
import subprocess, sys, tempfile, pathlib
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

SRC = pathlib.Path("node_modules/@fontsource-variable/fraunces/files")
OUT = pathlib.Path("src/fonts"); OUT.mkdir(parents=True, exist_ok=True)

# Genis tutuldu ki ileride yazacagin yazilarda bos kare cikmasin.
LATIN = ",".join([
    "U+0020-007E",   # temel latin
    "U+00A0-00FF",   # é ü ö ç ñ ß ° « »
    "U+2000-206F",   # tire, tirnak, uc nokta, ⁂
    "U+2190-2193",   # ← ↑ → ↓
    "U+20A0-20BF",   # ₺ €
    "U+2122",        # ™
])
LATIN_EXT = "U+0100-017F"   # ğ ı ş İ Ğ Ş + diger Avrupa dilleri

PINS = {"SOFT": 0, "WONK": 1}   # WONK=1: Fraunces'in karakterli hali

JOBS = [
    ("fraunces-latin-full-normal.woff2",     "fraunces-latin.woff2",    LATIN),
    ("fraunces-latin-ext-full-normal.woff2", "fraunces-latinext.woff2", LATIN_EXT),
]

before = after = 0
for src_name, out_name, ranges in JOBS:
    src = SRC / src_name
    if not src.exists():
        sys.exit(f"Kaynak bulunamadi: {src}\nOnce: npm install @fontsource-variable/fraunces")
    with tempfile.TemporaryDirectory() as td:
        f = TTFont(src)
        instancer.instantiateVariableFont(f, PINS, inplace=True, updateFontNames=False)
        mid = f"{td}/mid.ttf"; f.save(mid)
        dst = OUT / out_name
        subprocess.run([sys.executable, "-m", "fontTools.subset", mid,
            f"--unicodes={ranges}", "--flavor=woff2",
            "--layout-features=kern,liga,calt,onum,tnum",
            f"--output-file={dst}"], check=True, capture_output=True)
    b, a = src.stat().st_size, dst.stat().st_size
    before += b; after += a
    print(f"  {out_name:<26} {b//1024:>4} KB -> {a//1024:>3} KB")

print(f"\nTOPLAM: {before//1024} KB -> {after//1024} KB  (%{100 - after*100//before} kucuklme)")
print("Kalan eksenler: opsz (9-144), wght (100-900)")
