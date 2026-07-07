---
title: Transitions
description: Transisi CSS di Tailwind — transition property, duration, delay, timing function, dan animasi perubahan state yang halus.
---

# Transitions

Transisi membuat animasi perubahan *state* (hover, focus) menjadi halus, bukan tiba-tiba. Tanpa `transition`, perubahan warna/bentuk terjadi instan dan terasa kaku.

---

## 1. Menambahkan Transisi (`transition`)

Class `transition` menganimasi: `color`, `background-color`, `border-color`, `opacity`, `box-shadow`, `transform`, `fill`, `stroke`.

Varian spesifik:
- `transition-colors` — hanya properti warna
- `transition-opacity` — hanya opacity
- `transition-transform` — hanya transform
- `transition-shadow` — hanya box-shadow
- `transition-all` — semua properti (hati-hati, bisa berat)

<Preview :html='`<div class="flex flex-wrap gap-4">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Kaku (Tanpa Transisi)
  </button>
  <button class="transition bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Halus (Ada Transisi)
  </button>
  <button class="transition-colors bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
    transition-colors
  </button>
</div>`' />

::: tip Pilih varian tepat
`transition-all` menganimasi **semua** properti, termasuk yang tak terduga (width, height). Lebih aman pakai varian spesifik (`transition-colors`, `transition-transform`) untuk performa.
:::

---

## 2. Durasi Animasi (`duration-*`)

Default Tailwind: **150ms**.

- `duration-75`, `duration-100`, `duration-150` (default), `duration-200`, `duration-300`, `duration-500`, `duration-700`, `duration-1000`

<Preview :html='`<div class="flex gap-4">
  <button class="transition duration-150 hover:bg-green-600 bg-green-400 text-white font-bold py-2 px-4 rounded">
    Cepat (150ms)
  </button>
  <button class="transition duration-1000 hover:bg-green-600 bg-green-400 text-white font-bold py-2 px-4 rounded">
    Lambat (1 Detik)
  </button>
</div>`' />

---

## 3. Delay (`delay-*`)

Jeda sebelum transisi dimulai. Default `0ms`.

- `delay-75`, `delay-100`, `delay-150`, `delay-300`, `delay-500`, `delay-1000`

<Preview :html='`<div class="flex gap-3">
  <button class="transition delay-0 duration-500 hover:bg-rose-600 bg-rose-400 text-white font-bold py-2 px-4 rounded">
    delay-0 (langsung)
  </button>
  <button class="transition delay-300 duration-500 hover:bg-rose-600 bg-rose-400 text-white font-bold py-2 px-4 rounded">
    delay-300 (jeda 300ms)
  </button>
</div>`' />

---

## 4. Timing Function (`ease-*`)

Menentukan kurva percepatan animasi.

| Class | Efek |
| --- | --- |
| `ease-linear` | kecepatan konstan |
| `ease-in` | mulai lambat, akhir cepat |
| `ease-out` | mulai cepat, akhir mengerem |
| `ease-in-out` | (default) lambat-cepat-lambat, natural |

<Preview :html='`<div class="group bg-yellow-100 p-4 border border-yellow-300 rounded space-y-3 cursor-pointer overflow-hidden">
  <div class="w-16 h-8 bg-blue-500 text-white text-xs flex items-center justify-center rounded transition-transform duration-1000 ease-linear group-hover:translate-x-[200px]">Linear</div>
  <div class="w-16 h-8 bg-purple-500 text-white text-xs flex items-center justify-center rounded transition-transform duration-1000 ease-out group-hover:translate-x-[200px]">Ease-Out</div>
  <div class="w-16 h-8 bg-rose-500 text-white text-xs flex items-center justify-center rounded transition-transform duration-1000 ease-in group-hover:translate-x-[200px]">Ease-In</div>
</div>`' />

Hover area kuning — kotak bergeser dengan kurva berbeda. `ease-in` mulai lambat lalu melesat; `ease-out` sebaliknya.

::: tip Custom timing function
Pakai arbitrary value: `ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]` untuk efek "bounce" (overshoot). Cek kurva di [easings.net](https://easings.net/).
:::

---

## 5. Performance Best Practice

1. **Animasi `transform` dan `opacity` saja** — keduanya GPU-accelerated, tidak trigger reflow/repaint.
2. **Hindari** menganimasi `width`, `height`, `top`, `left` — ini trigger layout recalculation.
3. **`will-change-transform`** — beri tahu browser elemen akan berubah, optimalkan rendering.
4. **`transform-gpu`** — paksa hardware acceleration.

<Preview :html='`<div class="flex gap-4">
  <div class="w-24 h-24 bg-violet-400 rounded-lg shadow-lg transition-transform duration-300 will-change-transform hover:scale-110 cursor-pointer">
    will-change-transform
  </div>
  <div class="w-24 h-24 bg-pink-400 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer">
    transition-all
  </div>
</div>`' />

---

## Ringkasan Cepat

| Tujuan | Class |
| --- | --- |
| Aktifkan transisi | `transition`, `transition-colors`, `transition-transform` |
| Durasi | `duration-*` (75–1000ms) |
| Jeda | `delay-*` (75–1000ms) |
| Kurva | `ease-linear`, `ease-in`, `ease-out`, `ease-in-out` |
| Custom kurva | `ease-[cubic-bezier(...)]` |
| GPU acceleration | `transform-gpu`, `will-change-transform` |

Langkah berikutnya: pelajari [Transform](/effects/transform), [Animation](/effects/animation), dan [Dark Mode](/effects/dark-mode).