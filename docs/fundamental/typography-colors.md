---
title: Typography & Colors
description: Tipografi (font-size, weight, align, decoration) dan sistem warna Tailwind CSS dengan palet 50–950.
---

# Typography & Colors

Tampilan teks dan kombinasi warna adalah kunci utama sebuah website terlihat profesional. Tailwind CSS menyediakan sistem tipografi dan *color palette* bawaan yang konsisten.

---

## 1. Font Size (Ukuran Teks)

Tailwind menggabungkan `font-size` dan `line-height` ke dalam satu class — teks selalu proporsional.

| Class | ukuran | line-height |
| --- | --- | --- |
| `text-xs` | 0.75rem (12px) | 1rem |
| `text-sm` | 0.875rem (14px) | 1.25rem |
| `text-base` | 1rem (16px) | 1.5rem |
| `text-lg` | 1.125rem (18px) | 1.75rem |
| `text-xl` | 1.25rem (20px) | 1.75rem |
| `text-2xl` | 1.5rem (24px) | 2rem |
| `text-5xl` | 3rem (48px) | 1 |

<Preview :html='`<div class="space-y-4">
  <p class="text-xs">Teks ekstra kecil (text-xs)</p>
  <p class="text-base">Teks ukuran normal (text-base)</p>
  <p class="text-2xl">Teks judul (text-2xl)</p>
  <p class="text-5xl">Teks sangat besar (text-5xl)</p>
</div>`' />

::: tip Override line-height
`leading-*` mengatur line-height manual: `leading-none` (1), `leading-tight` (1.25), `leading-snug` (1.375), `leading-normal` (1.5 default), `leading-relaxed` (1.625), `leading-loose` (2). Atau angka: `leading-6` (1.5rem).
:::

---

## 2. Font Weight (Ketebalan Teks)

| Class | Weight |
| --- | --- |
| `font-thin` | 100 |
| `font-light` | 300 |
| `font-normal` | 400 (default) |
| `font-medium` | 500 |
| `font-semibold` | 600 |
| `font-bold` | 700 |
| `font-extrabold` | 800 |
| `font-black` | 900 |

<Preview :html='`<div class="space-y-1">
  <p class="font-light">font-light (300)</p>
  <p class="font-normal">font-normal (400)</p>
  <p class="font-semibold">font-semibold (600)</p>
  <p class="font-extrabold">font-extrabold (800)</p>
  <p class="font-black">font-black (900)</p>
</div>`' />

---

## 3. Font Family

Tailwind menyediakan tiga font bawaan: `font-sans`, `font-serif`, `font-mono`. Anda bisa tambah font custom lewat [`@theme`](/customization/).

<Preview :html='`<div class="space-y-2">
  <p class="font-sans text-lg">Font Sans (default — system sans-serif)</p>
  <p class="font-serif text-lg">Font Serif (serif — Georgia/Cambria)</p>
  <p class="font-mono text-lg">Font Mono (monospace — code style)</p>
</div>`' />

---

## 4. Tata Letak Teks & Dekorasi

### Text Align
`text-left`, `text-center`, `text-right`, `text-justify`, `text-start` (logical), `text-end` (logical).

### Text Transform
`uppercase` (KAPITAL), `lowercase` (kecil), `capitalize` (Huruf Awal Besar), `normal-case` (reset).

### Text Decoration
`underline`, `line-through` (dicoret), `no-underline`, `decoration-*` (`decoration-wavy`, `decoration-dotted`, `decoration-2`).

### Letter Spacing
`tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-wider`, `tracking-widest`.

<Preview :html='`<div class="space-y-3">
  <p class="text-center uppercase text-blue-500 font-bold tracking-wide">Judul Di Tengah + Uppercase + Wide</p>
  <p class="text-justify line-through text-gray-500">Teks ini rata kiri-kanan namun dicoret — menandakan data yang tidak valid.</p>
  <p class="underline decoration-wavy decoration-red-500 underline-offset-4">Garis bawah gelombang merah</p>
</div>`' />

---

## 5. Text Overflow & Truncation

Teks panjang bisa meluap. Tailwind punya tiga opsi:

| Class | Efek |
| --- | --- |
| `truncate` | potong dengan `…` (butuh `overflow-hidden` + `text-overflow: ellipsis` + `white-space: nowrap`) |
| `text-ellipsis` | ellipsis tanpa nowrap |
| `text-clip` | potong mentah |
| `line-clamp-*` | potong setelah N baris (1–6) |

<Preview :html='`<div class="space-y-2 max-w-xs">
  <p class="truncate bg-gray-100 p-2 rounded">Teks sangat panjang yang akan dipotong dengan elipsis karena class truncate</p>
  <p class="line-clamp-2 bg-gray-100 p-2 rounded">Teks yang sangat panjang ini akan dipotong setelah dua baris penuh. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>`' />

---

## 6. Sistem Warna Tailwind

Tailwind punya 22 palet warna, masing-masing 11 gradasi dari `50` (terang) hingga `950` (gelap).

**Palet**: `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`.

**Absolut**: `white`, `black`, `transparent`, `current`.

Format: `[properti]-[namaWarna]-[skala]` → `text-blue-500`, `bg-red-200`, `border-gray-300`.

### Palet Lengkap

Lihat seluruh gradasi palet populer:

<ColorSwatch name="slate" />
<ColorSwatch name="blue" />
<ColorSwatch name="indigo" />
<ColorSwatch name="emerald" />
<ColorSwatch name="rose" />

::: tip Eksplorasi palet
Ganti nama palet di ColorSwatch di sumber halaman untuk melihat gradasi warna lain. Coba: `violet`, `amber`, `teal`, `fuchsia`.
:::

### Opacity pada Warna

Suffix `/angka` mengatur opacity tanpa mempengaruhi isi di dalamnya (beda dari `opacity-*` yang membuat seluruh elemen transparan).

- `bg-blue-500/50` → background 50% opacity, teks tetap solid
- `text-red-500/80` → teks 80% opacity
- `border-black/20` → border 20% opacity

<Preview :html='`<div class="flex gap-4 font-medium">
  <div class="bg-blue-500/30 border-2 border-blue-500 p-4 rounded-md">bg-blue-500/30</div>
  <div class="bg-blue-500/60 border-2 border-blue-500 p-4 rounded-md">bg-blue-500/60</div>
  <div class="bg-blue-500 p-4 rounded-md text-white">bg-blue-500 (100%)</div>
</div>`' />

---

## 7. Contoh Kombinasi Warna

Pastikan kontras warna dapat terbaca. Background gelap → teks terang, dan sebaliknya.

<Preview :html='`<div class="flex gap-4 font-medium">
  <div class="bg-red-100 text-red-800 p-4 rounded-md">Error Alert</div>
  <div class="bg-green-600 text-white p-4 rounded-md">Success Button</div>
  <div class="bg-black text-yellow-400 p-4 rounded-md font-bold">VIP Card</div>
</div>`' />

::: warning Aksesibilitas kontras
Skala `100` (background terang) + `800`/`900` (teks gelap) umumnya aman. Hindari `400` + `500` (sama-sama mid-tone). Cek dengan [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
:::

Langkah berikutnya: pelajari [Border & Shadow](/fundamental/border-shadow).