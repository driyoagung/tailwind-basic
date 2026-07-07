---
title: Spacing & Sizing
description: Mengatur padding, margin, gap, space-between, width, height, min/max, inset, dan logical properties di Tailwind CSS.
---

# Spacing & Sizing

Mengatur jarak antar elemen (spacing) dan ukuran elemen (sizing) adalah fondasi pertama *styling* web. Tailwind menyediakan skala yang konsisten — setiap angka dikalikan `0.25rem` (4px default).

| Angka | rem | px |
| --- | --- | --- |
| `1` | 0.25rem | 4px |
| `2` | 0.5rem | 8px |
| `4` | 1rem | 16px |
| `8` | 2rem | 32px |
| `16` | 4rem | 64px |

---

## 1. Padding (`p-*`) & Margin (`m-*`)

- `p-4` = 1rem padding semua sisi.
- `m-2` = 0.5rem margin semua sisi.

Target sisi spesifik dengan suffix arah:

| Suffix | Sisi | Contoh |
| --- | --- | --- |
| `t` | top | `pt-4`, `mt-4` |
| `b` | bottom | `pb-4` |
| `l` | left | `pl-4` |
| `r` | right | `pr-4` |
| `x` | horizontal | `px-4`, `mx-auto` |
| `y` | vertical | `py-4` |

<Preview :html='`<div class="bg-gray-200 p-8">
  <div class="bg-white p-4 mb-4">Kotak 1: p-4 (16px), mb-4 (16px)</div>
  <div class="bg-white px-8 py-2">Kotak 2: px-8 (32px), py-2 (8px)</div>
</div>`' />

---

## 2. Logical Properties (`ps-*` / `pe-*` / `ms-*` / `me-*`)

Tailwind v4 mendukung **logical properties** — padding/margin yang mengikuti arah baca (LTR/RTL). Berguna untuk situs multi-bahasa.

| Class | Setara (LTR) | Arti |
| --- | --- | --- |
| `ps-4` | `padding-left: 1rem` | padding-inline-start |
| `pe-4` | `padding-right: 1rem` | padding-inline-end |
| `ms-4` | `margin-left: 1rem` | margin-inline-start |
| `me-4` | `margin-right: 1rem` | margin-inline-end |
| `ms-auto` | `margin-left: auto` | dorong ke kanan (LTR) |

Jika situs Anda mendukung bahasa Arab/Hebrew (RTL), `ps-*`/`pe-*` otomatis menyesuaikan arah. `pl-*`/`pr-*` tidak.

<Preview :html='`<div class="flex gap-2">
  <div class="bg-blue-500 text-white ps-8 pe-4 py-2 rounded">ps-8 (kiri tebal)</div>
  <div class="bg-blue-300 text-white ps-4 pe-8 py-2 rounded">pe-8 (kanan tebal)</div>
</div>`' />

---

## 3. Space Between (`space-x-*`, `space-y-*`) & Gap

### `space-x-*` / `space-y-*`

Menambah margin ke semua elemen **kecuali pertama**. Berguna untuk list vertikal atau deret non-flex.

<Preview :html='`<ul class="space-y-3 bg-gray-100 p-4 rounded-md">
  <li class="bg-white p-2 border">Item Pertama</li>
  <li class="bg-white p-2 border">Item Kedua (punya jarak di atasnya)</li>
  <li class="bg-white p-2 border">Item Ketiga (punya jarak di atasnya)</li>
</ul>`' />

::: warning `space-*` vs flex/grid
`space-x-*` menambah margin. Jika elemen di dalam flex/grid, `space-*` bisa salah hitung saat wrap. Lebih baik pakai `gap-*` untuk flex/grid.
:::

### `gap-*` (khusus Flexbox/Grid)

`gap` menggunakan properti CSS `gap` — jarak antar item, tidak bergantung margin. Aman saat wrap.

<Preview :html='`<div class="flex gap-4">
  <button class="bg-blue-500 text-white px-4 py-2 rounded">Tombol 1</button>
  <button class="bg-green-500 text-white px-4 py-2 rounded">Tombol 2</button>
</div>`' />

`gap-x-*` dan `gap-y-*` untuk arah berbeda. Responsive: `gap-2 md:gap-6`.

---

## 4. Sizing: Width (`w-*`) & Height (`h-*`)

### Fraksi / Persentase

- `w-1/2` (50%), `w-1/3` (33.33%), `w-2/3` (66.67%)
- `w-1/4` (25%), `w-3/4` (75%)
- `w-full` (100%), `w-screen` (100vw)

### Viewport

- `w-screen` (100vw) — penuh selebar layar
- `h-screen` (100vh) — penuh setinggi layar
- `min-h-screen` — minimal setinggi layar

<Preview :html='`<div class="space-y-2">
  <div class="w-1/4 bg-red-400 p-2 text-white">w-1/4 (25%)</div>
  <div class="w-1/2 bg-green-400 p-2 text-white">w-1/2 (50%)</div>
  <div class="w-3/4 bg-blue-400 p-2 text-white">w-3/4 (75%)</div>
  <div class="w-full bg-purple-400 p-2 text-white">w-full (100%)</div>
</div>`' />

---

## 5. Min/Max Width & Height

Mencegah elemen terlalu lebar atau terlalu kecil.

- **`max-w-*`**: batas atas lebar. `max-w-sm` (384px), `max-w-md` (448px), `max-w-lg` (512px), `max-w-xl` (576px), `max-w-2xl` (672px), `max-w-prose` (65ch — ideal untuk artikel teks).
- **`min-w-*`**: batas bawah lebar.
- **`min-h-*`**: batas bawah tinggi. `min-h-screen` untuk halaman full-height.
- **`max-h-*`**: batas atas tinggi.

<Preview :html='`<div class="max-w-sm bg-yellow-200 p-4 border-2 border-yellow-500 mx-auto text-yellow-900 font-medium text-center">
  max-w-sm: berhenti melebar di 384px, mx-auto menengahkan
</div>`' />

---

## 6. Inset (`top-*`, `right-*`, `bottom-*`, `left-*`)

`inset-*` mengatur posisi elemen yang ber-position `relative`/`absolute`/`fixed`/`sticky`.

- `top-0`, `right-4`, `bottom-2`, `left-1/2`
- `inset-0` (semua sisi = 0)
- `inset-x-0` (kiri+kanan = 0), `inset-y-0` (atas+bawah = 0)

### Logical inset

| Class | Setara (LTR) |
| --- | --- |
| `start-0` | `left: 0` |
| `end-0` | `right: 0` |
| `start-4` | `left: 1rem` |
| `end-4` | `right: 1rem` |

<Preview :html='`<div class="relative bg-gray-100 h-32 rounded-lg overflow-hidden">
  <div class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">top-2 right-2</div>
  <div class="absolute bottom-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-sm">bottom-2 left-2</div>
  <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-green-500 text-white px-2 py-1 rounded text-sm text-center">inset-x-0 (kiri+kanan 0)</div>
</div>`' />

---

## 7. Negative Margin (`-m-*`)

Margin negatif (`-m-2`, `-mt-4`) menarik elemen **keluar** dari posisi normalnya. Berguna untuk:
- Menumpuk elemen (overlap).
- Merapatkan elemen yang punya default margin.

<Preview :html='`<div class="bg-gray-100 p-6 rounded-lg">
  <div class="bg-blue-500 text-white p-4 rounded">Kotak normal</div>
  <div class="bg-red-500 text-white p-4 rounded -mt-4 ml-4">-mt-4 ml-4 (menumpuk ke atas)</div>
</div>`' />

::: tip Negative spacing untuk avatar stack
Pola "avatar bertumpuk" pakai `-ml-3` pada semua avatar kecuali pertama:
:::

<Preview :html='`<div class="flex">
  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=48&h=48&fit=crop" class="w-12 h-12 rounded-full border-2 border-white" alt="A" />
  <img src="https://images.unsplash.com/photo-1599566150163-2916d4fd3168?w=48&h=48&fit=crop" class="w-12 h-12 rounded-full border-2 border-white -ml-3" alt="B" />
  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop" class="w-12 h-12 rounded-full border-2 border-white -ml-3" alt="C" />
  <div class="w-12 h-12 rounded-full bg-gray-200 border-2 border-white -ml-3 flex items-center justify-center text-sm font-bold text-gray-600">+5</div>
</div>`' />

---

## 8. `size-*` (shorthand width + height)

Tailwind v4 menambah `size-*` — set `width` sekaligus `height` sekaligus. `size-16` = `w-16 h-16`.

<Preview :html='`<div class="flex gap-3">
  <div class="size-8 bg-indigo-500 rounded"></div>
  <div class="size-12 bg-indigo-500 rounded"></div>
  <div class="size-16 bg-indigo-500 rounded"></div>
  <div class="size-20 bg-indigo-500 rounded-full"></div>
</div>`' />

---

## Ringkasan Cepat

| Tujuan | Class |
| --- | --- |
| Padding | `p-*`, `pt-*`, `px-*`, `py-*` |
| Margin | `m-*`, `mt-*`, `mx-auto` |
| Logical | `ps-*`, `pe-*`, `ms-*`, `me-*` |
| Space antar | `space-x-*`, `space-y-*`, `gap-*` |
| Lebar/tinggi | `w-*`, `h-*`, `size-*` |
| Fraksi | `w-1/2`, `w-1/3`, `w-full` |
| Viewport | `w-screen`, `h-screen`, `min-h-screen` |
| Min/max | `min-w-*`, `max-w-*`, `min-h-*`, `max-h-*` |
| Posisi | `inset-*`, `top-*`, `right-*`, `start-*`, `end-*` |
| Negatif | `-m-*`, `-mt-*` |

Langkah berikutnya: pelajari [Typography & Colors](/fundamental/typography-colors).