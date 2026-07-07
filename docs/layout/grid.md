---
title: Grid Layout
description: Panduan lengkap CSS Grid di Tailwind CSS — grid-cols, col/row-span, line-based placement, grid-flow dense, auto-rows/cols, dan dashboard layout step-by-step.
---

# Grid (2-Dimensional Layout)

Jika Flexbox untuk merapikan sebaris elemen (1 dimensi), **CSS Grid** (`grid`) membagi ruang menjadi matriks **dua dimensi** — baris dan kolom sekaligus. Sangat sempurna untuk galeri foto, dashboard, dan kerangka utama halaman.

> **Grid vs Flexbox**: Grid untuk layout 2-dimensi (konten bisa sekaligus sebaris dan sekolom). Flexbox untuk 1-dimensi (sebaris ATAU sekolom). Banyak layout nyata memadukan keduanya: Grid untuk struktur halaman, Flexbox untuk komponen kecil di dalamnya.

---

## 1. Membuat Container Grid

Class `grid` + `grid-cols-*` menentukan jumlah kolom. Jarak antar sel pakai `gap-*`.

`grid-cols-1` s/d `grid-cols-12`, plus `grid-cols-none` (reset).

<Preview :html='`<div class="grid grid-cols-3 gap-4 font-bold text-xl">
  <div class="bg-purple-500 text-white p-4 rounded text-center">1</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">2</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">3</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">4</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">5</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">6</div>
</div>`' />

---

## 2. Span (Merentangkan Kolom/Baris)

`col-span-*` / `row-span-*` membuat satu sel mengambil lebih dari 1 jatah — mirip "Merge Cells" di Excel.

<Preview :html='`<div class="grid grid-cols-4 gap-4 font-bold">
  <div class="col-span-2 bg-rose-500 text-white p-4 rounded text-center">Span 2 Kolom</div>
  <div class="bg-rose-400 text-white p-4 rounded text-center">Normal</div>
  <div class="bg-rose-400 text-white p-4 rounded text-center">Normal</div>
  <div class="bg-rose-400 text-white p-4 rounded text-center">Normal</div>
  <div class="col-span-3 bg-rose-600 text-white p-4 rounded text-center">Span 3 Kolom</div>
</div>`' />

Contoh `row-span` (memanjang ke bawah):

<Preview :html='`<div class="grid grid-cols-3 gap-4 font-bold">
  <div class="bg-emerald-500 text-white p-4 rounded text-center row-span-2">row-span-2</div>
  <div class="bg-emerald-400 text-white p-4 rounded text-center">A</div>
  <div class="bg-emerald-400 text-white p-4 rounded text-center">B</div>
  <div class="bg-emerald-400 text-white p-4 rounded text-center">C</div>
  <div class="bg-emerald-400 text-white p-4 rounded text-center">D</div>
</div>`' />

---

## 3. Penempatan Berbasis Garis (col-start / col-end)

Setiap grid punya **garis nomor** (1, 2, 3, ...). `col-start-N` + `col-end-N` menempatkan sel mulai dari garis N hingga garis N. Begitu juga `row-start-N` / `row-end-N`.

Ini lebih presisi daripada `col-span` saat membuat layout kompleks.

<Preview :html='`<div class="grid grid-cols-3 gap-4 font-bold">
  <div class="bg-sky-500 text-white p-4 rounded text-center col-start-2 col-end-4">col-start-2 col-end-4</div>
  <div class="bg-sky-300 p-4 rounded text-center">1</div>
  <div class="bg-sky-300 p-4 rounded text-center">2</div>
  <div class="bg-sky-300 p-4 rounded text-center">3</div>
</div>`' />

::: tip Span vs start/end
`col-span-2` = ambil 2 jatah (relatif terhadap posisi). `col-start-1 col-end-3` = dari garis 1 ke garis 3 (absolut). Start/end cocok untuk layout tetap; span cocok untuk alur konten dinamis.
:::

---

## 4. Auto Flow & Dense

Saat sel tidak mengisi penuh, grid otomatis menempatkan sel berikutnya. `grid-flow-row-dense` membuat grid "mengisi lubang" kosong dengan sel yang muat.

- `grid-flow-row` (default) — isi per baris.
- `grid-flow-col` — isi per kolom.
- `grid-flow-dense` / `row-dense` / `col-dense` — algoritma pengisi lubang.

<Preview :html='`<div class="grid grid-cols-3 gap-3 grid-flow-row-dense font-bold">
  <div class="bg-violet-500 text-white p-4 rounded text-center col-span-2">lebar</div>
  <div class="bg-violet-300 p-4 rounded text-center">1</div>
  <div class="bg-violet-300 p-4 rounded text-center col-span-2">lebar</div>
  <div class="bg-violet-300 p-4 rounded text-center">2</div>
  <div class="bg-violet-300 p-4 rounded text-center">3</div>
</div>`' />

Tanpa `dense`, lubang akan dibiarkan kosong. Dengan `dense`, grid mengisi celah dengan item berikutnya yang muat.

---

## 5. Auto-rows & Auto-cols

`auto-rows-*` mengatur tinggi baris implisit (baris yang dibuat otomatis di luar `grid-rows-*`). Berguna untuk gallery dengan tinggi seragam.

- `auto-rows-auto` (default)
- `auto-rows-min`, `auto-rows-max`
- `auto-rows-fr` — baris mengisi fraksi ruang
- `auto-rows-px`, `auto-rows-{skala}` — tinggi tetap

<Preview :html='`<div class="grid grid-cols-3 gap-3 auto-rows-fr h-48 font-bold">
  <div class="bg-fuchsia-500 text-white p-4 rounded text-center">h seragam</div>
  <div class="bg-fuchsia-500 text-white p-4 rounded text-center">auto-rows-fr</div>
  <div class="bg-fuchsia-500 text-white p-4 rounded text-center">mengisi tinggi</div>
</div>`' />

`auto-cols-*` serupa untuk kolom implisit (mis. saat `grid-flow-col`).

---

## 6. Grid-rows (baris eksplisit)

`grid-rows-{1..6}` menetapkan jumlah baris tetap. Dipakai bersama `h-*` agar baris punya tinggi.

<Preview :html='`<div class="grid grid-cols-2 grid-rows-2 gap-3 h-48 font-bold">
  <div class="bg-indigo-500 text-white p-4 rounded text-center">TL</div>
  <div class="bg-indigo-500 text-white p-4 rounded text-center">TR</div>
  <div class="bg-indigo-500 text-white p-4 rounded text-center">BL</div>
  <div class="bg-indigo-500 text-white p-4 rounded text-center">BR</div>
</div>`' />

---

## 7. Membangun Dashboard Step-by-Step

Mari susun layout dashboard klasik: header penuh, sidebar kiri, konten utama, dan footer. Kita bangun bertahap.

### Langkah 1: Kerangka 12 kolom

Pakai `grid-cols-12` agar pembagian fleksibel (sidebar 3, konten 9).

<Preview :html='`<div class="grid grid-cols-12 gap-3 text-center text-white font-bold">
  <div class="col-span-12 bg-slate-700 p-3 rounded">Header (col-span-12)</div>
  <div class="col-span-3 bg-slate-800 p-3 rounded h-24">Sidebar (3)</div>
  <div class="col-span-9 bg-slate-100 text-slate-700 p-3 rounded h-24">Konten (9)</div>
  <div class="col-span-12 bg-slate-600 p-3 rounded">Footer (12)</div>
</div>`' />

### Langkah 2: Sidebar + konten dengan row-span

Alternatif tanpa struktur berurutan: sidebar memanjang penuh dengan `row-span-2`.

<Preview :html='`<div class="grid grid-cols-12 grid-rows-3 gap-3 h-72 text-center text-white font-bold">
  <div class="col-span-12 bg-slate-700 p-3 rounded">Header</div>
  <div class="col-span-3 row-span-2 bg-slate-800 p-3 rounded">Sidebar (row-span-2)</div>
  <div class="col-span-9 bg-slate-100 text-slate-700 p-3 rounded">Konten Atas</div>
  <div class="col-span-9 bg-slate-100 text-slate-700 p-3 rounded">Konten Bawah</div>
</div>`' />

### Langkah 3: Responsif (sidebar jadi atas di mobile)

`col-span-12 md:col-span-3` — sidebar penuh di mobile, menyamping di md+.

<Preview :html='`<div class="grid grid-cols-12 gap-3 h-72 text-center text-white font-bold">
  <div class="col-span-12 bg-slate-700 p-3 rounded">Header</div>
  <div class="col-span-12 md:col-span-3 bg-slate-800 p-3 rounded">Sidebar (penuh di mobile)</div>
  <div class="col-span-12 md:col-span-9 bg-slate-100 text-slate-700 p-3 rounded">Konten</div>
</div>`' />

Kecilkan viewport untuk lihat sidebar pindah ke atas.

---

## 8. Responsive Grid (galeri produk)

Pola paling umum: 1 → 2 → 3 → 4 kolom per breakpoint.

<Preview :html='`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <div class="bg-purple-100 border-2 border-purple-500 p-6 text-center font-bold text-purple-900 rounded-lg shadow">Produk A</div>
  <div class="bg-purple-100 border-2 border-purple-500 p-6 text-center font-bold text-purple-900 rounded-lg shadow">Produk B</div>
  <div class="bg-purple-100 border-2 border-purple-500 p-6 text-center font-bold text-purple-900 rounded-lg shadow">Produk C</div>
  <div class="bg-purple-100 border-2 border-purple-500 p-6 text-center font-bold text-purple-900 rounded-lg shadow">Produk D</div>
</div>`' />

---

## Ringkasan Cepat

| Tujuan | Class |
| --- | --- |
| Container | `grid`, `inline-grid` |
| Kolom | `grid-cols-{1..12}` |
| Baris | `grid-rows-{1..6}` |
| Span | `col-span-*`, `row-span-*` |
| Garis | `col-start-*`, `col-end-*`, `row-start-*`, `row-end-*` |
| Alur | `grid-flow-row`, `grid-flow-col`, `*-dense` |
| Auto | `auto-rows-*`, `auto-cols-*` |
| Jarak | `gap-*`, `gap-x-*`, `gap-y-*` (responsive: `md:gap-*`) |

---

## Eksperimen Sendiri

Ubah `grid-cols-*`, `col-span-*`, atau `row-span-*` di playground ini. Lihat bagaimana grid menata ulang sel-selnya.

<Playground :default='`<div class="grid grid-cols-3 gap-4 p-4 bg-gray-100 rounded-lg">
  <div class="bg-blue-500 text-white p-4 rounded text-center col-span-2">col-span-2</div>
  <div class="bg-blue-500 text-white p-4 rounded text-center">1</div>
  <div class="bg-blue-500 text-white p-4 rounded text-center">2</div>
  <div class="bg-blue-500 text-white p-4 rounded text-center">3</div>
  <div class="bg-blue-500 text-white p-4 rounded text-center">4</div>
</div>`' />

Langkah berikutnya: pelajari [Responsive Design](/responsive/) untuk membuat grid beradaptasi di semua layar.
