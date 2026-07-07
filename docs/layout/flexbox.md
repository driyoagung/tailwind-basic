---
title: Flexbox
description: Panduan lengkap Flexbox di Tailwind CSS — flex direction, justify, align, grow/shrink/basis, order, gap responsive, pola umum, dan anti-pattern.
---

# Flexbox (1-Dimensional Layout)

`flex` adalah utilitas layout yang paling sering digunakan dalam web modern. Flexbox bekerja sangat baik untuk merapikan elemen dalam **satu dimensi** — entah satu baris horizontal atau satu kolom vertikal.

> **Aturan praktis**: Gunakan Flexbox untuk layout 1-dimensi (navbar, baris tombol, media object, centering). Gunakan Grid untuk layout 2-dimensi (dashboard, gallery). Lihat halaman [Grid Layout](/layout/grid) untuk perbandingannya.

---

## 1. Membuat Container Flex

Cukup tambahkan class `flex`. Secara otomatis, seluruh anak langsung di dalamnya berjajar ke samping. `inline-flex` membuat container hanya selebar konten (seperti `inline-block`).

<Preview :html='`<div class="flex gap-4 bg-gray-100 p-4 rounded-lg">
  <div class="bg-blue-500 text-white p-4 rounded">Item 1</div>
  <div class="bg-blue-500 text-white p-4 rounded">Item 2</div>
  <div class="bg-blue-500 text-white p-4 rounded">Item 3</div>
</div>`' />

::: tip Perbedaan `flex` vs `inline-flex`
`flex` menghasilkan `display: flex` (container memenuhi lebar parent). `inline-flex` menghasilkan `display: inline-flex` (container hanya selebar isi, dan bisa berjejer dengan elemen inline lain).
:::

---

## 2. Mengubah Arah (Flex Direction)

- `flex-row` — (default) kiri ke kanan.
- `flex-row-reverse` — kanan ke kiri.
- `flex-col` — atas ke bawah.
- `flex-col-reverse` — bawah ke atas.

<Preview :html='`<div class="flex flex-col gap-2 bg-gray-100 p-4 rounded-lg">
  <div class="bg-green-500 text-white p-4 rounded">Item Atas</div>
  <div class="bg-green-500 text-white p-4 rounded">Item Bawah</div>
</div>`' />

---

## 3. Merapikan Elemen (Justify & Align)

Di sinilah letak kekuatan sesungguhnya Flexbox. Ada **dua sumbu**:

- **Sumbu utama** (main axis) — diatur via `justify-*`.
- **Sumbu silang** (cross axis) — diatur via `items-*` / `content-*` / `self-*`.

### Justify Content (Sumbu Utama)

Saat `flex-row`, justify mengatur penyebaran horizontal.

| Class | Efek |
| --- | --- |
| `justify-start` | Rapat kiri (default) |
| `justify-center` | Terpusat |
| `justify-end` | Rapat kanan |
| `justify-between` | Regang, ujung-ujung mentok |
| `justify-around` | Reang sama di antara, setengah di ujung |
| `justify-evenly` | Reang seragam termasuk ujung |

<Preview :html='`<div class="space-y-3">
  <div class="flex justify-center gap-2 bg-gray-100 p-2 rounded">
    <div class="bg-indigo-500 text-white p-2 rounded text-sm">center</div>
    <div class="bg-indigo-500 text-white p-2 rounded text-sm">item</div>
  </div>
  <div class="flex justify-end gap-2 bg-gray-100 p-2 rounded">
    <div class="bg-indigo-500 text-white p-2 rounded text-sm">end</div>
    <div class="bg-indigo-500 text-white p-2 rounded text-sm">item</div>
  </div>
  <div class="flex justify-between bg-gray-100 p-2 rounded">
    <div class="bg-indigo-500 text-white p-2 rounded text-sm">between</div>
    <div class="bg-indigo-500 text-white p-2 rounded text-sm">item</div>
  </div>
</div>`' />

### Align Items (Sumbu Silang)

Saat `flex-row`, align mengatur posisi vertikal. Agar terlihat, beri container `items-*` dan tinggi yang berbeda-beda pada item.

- `items-start` (atas)
- `items-center` (tengah vertikal) — paling sering dipakai
- `items-end` (bawah)
- `items-stretch` (regang memenuhi tinggi, default)
- `items-baseline` (sejajar baseline teks)

<Preview :html='`<div class="flex items-center gap-3 bg-gray-100 p-4 rounded-lg h-28">
  <div class="bg-pink-500 text-white p-2 rounded text-sm h-8">kecil</div>
  <div class="bg-pink-500 text-white p-4 rounded">sedang</div>
  <div class="bg-pink-500 text-white p-6 rounded text-lg">besar</div>
</div>`' />

### Pola Cepat: Navbar dengan Flex

Kombinasi `justify-between` + `items-center` adalah resep klasik navbar.

<Preview :html='`<nav class="flex justify-between items-center bg-gray-800 text-white p-4 rounded-lg">
  <div class="text-xl font-bold text-yellow-400">MyLogo</div>
  <ul class="flex gap-6">
    <li class="hover:text-yellow-400 cursor-pointer">Home</li>
    <li class="hover:text-yellow-400 cursor-pointer">About</li>
    <li class="hover:text-yellow-400 cursor-pointer">Contact</li>
  </ul>
</nav>`' />

---

## 4. Membungkus Elemen (Flex Wrap)

Jika isi melebihi lebar container, item akan **menyusut paksa** (shrink). Tambahkan `flex-wrap` agar item turun ke baris baru ketika tidak muat.

- `flex-nowrap` (default) — tidak turun, item menyusut.
- `flex-wrap` — turun ke baris baru.
- `flex-wrap-reverse` — turun, urutan terbalik.

<Preview :html='`<div class="flex flex-wrap gap-2">
  <div class="bg-indigo-200 p-4 w-32 rounded text-center text-sm font-bold">Kardus</div>
  <div class="bg-indigo-300 p-4 w-32 rounded text-center text-sm font-bold">Kardus</div>
  <div class="bg-indigo-400 p-4 w-32 rounded text-center text-sm font-bold text-white">Kardus</div>
  <div class="bg-indigo-500 p-4 w-32 rounded text-center text-sm font-bold text-white">Kardus</div>
  <div class="bg-indigo-600 p-4 w-32 rounded text-center text-sm font-bold text-white">Kardus</div>
  <div class="bg-indigo-700 p-4 w-32 rounded text-center text-sm font-bold text-white">Kardus</div>
  <div class="bg-indigo-800 p-4 w-32 rounded text-center text-sm font-bold text-white">Kardus</div>
</div>`' />

---

## 5. Align Self (Per-item)

`self-*` mengatur alignment **satu item** saja, mengesampingkan `items-*` container. Berguna saat satu item butuh posisi berbeda.

<Preview :html='`<div class="flex items-center gap-3 bg-gray-100 p-4 rounded-lg h-32">
  <div class="bg-purple-500 text-white p-3 rounded">start</div>
  <div class="bg-purple-500 text-white p-3 rounded self-start">self-start</div>
  <div class="bg-purple-500 text-white p-3 rounded self-end">self-end</div>
  <div class="bg-purple-500 text-white p-3 rounded">center</div>
</div>`' />

---

## 6. Flex Grow, Shrink & Basis (Penting!)

Tiga properti ini mengontrol **bagaimana item memenuhi/menyusut ruang kosong**. Ini bagian yang sering bikin bingung, jadi perhatikan baik-baik.

### Flex Grow (`grow-*`)

`grow` membuat item **membesar** mengisi sisa ruang kosong. `grow-0` melarang membesar.

<Preview :html='`<div class="flex gap-2 bg-gray-100 p-4 rounded-lg">
  <div class="bg-teal-500 text-white p-4 rounded grow">grow (ambil sisa)</div>
  <div class="bg-teal-700 text-white p-4 rounded">fixed</div>
</div>`' />

### Flex Shrink (`shrink-*`)

`shrink` (default) mengizinkan item **menyusut** saat ruang sempit. `shrink-0` melarang menyusut — item tetap pada ukuran `basis`-nya walau sempit.

<Preview :html='`<div class="flex gap-2 bg-gray-100 p-4 rounded-lg w-72">
  <div class="bg-rose-500 text-white p-4 rounded w-40 shrink-0">shrink-0 (tetap 40)</div>
  <div class="bg-rose-300 p-4 rounded shrink">menyusut</div>
</div>`' />

### Flex Basis (`basis-*`)

`basis-*` menetapkan **ukuran awal** sebelum sisa ruang dibagi. Menerima skala spacing (`basis-4`, `basis-64`), fraksi (`basis-1/2`, `basis-1/3`), atau `basis-auto` (default = sesuai konten).

<Preview :html='`<div class="flex gap-2 bg-gray-100 p-4 rounded-lg">
  <div class="bg-amber-500 text-white p-4 rounded basis-1/4">basis-1/4</div>
  <div class="bg-amber-500 text-white p-4 rounded basis-1/2">basis-1/2</div>
  <div class="bg-amber-500 text-white p-4 rounded basis-1/4">basis-1/4</div>
</div>`' />

### Shorthand `flex-*` (gabungan grow/shrink/basis)

Tailwind menyediakan shortcut untuk kombinasi umum:

| Class | Setara CSS | Kapan dipakai |
| --- | --- | --- |
| `flex-1` | `flex: 1 1 0%` | Item merata memenuhi ruang (paling sering!) |
| `flex-auto` | `flex: 1 1 auto` | Tumbuh dari ukuran konten |
| `flex-initial` | `flex: 0 1 auto` | Tidak tumbuh, boleh susut |
| `flex-none` | `flex: none` | Ukuran kaku, tidak tumbuh/susut |

<Preview :html='`<div class="flex gap-2 bg-gray-100 p-4 rounded-lg">
  <div class="bg-cyan-600 text-white p-4 rounded flex-1">flex-1</div>
  <div class="bg-cyan-600 text-white p-4 rounded flex-1">flex-1</div>
  <div class="bg-cyan-600 text-white p-4 rounded flex-none">flex-none</div>
</div>`' />

::: warning `flex-1` vs `grow`
`flex-1` = grow + shrink + basis 0 → item **merata** memenuhi ruang. `grow` saja = basis auto → item tumbuh dari ukuran kontennya dulu, lalu sisa dibagi. Untuk layout split seragam, pakai `flex-1`.
:::

---

## 7. Mengatur Urutan (Order)

`order-*` mengubah urutan visual item **tanpa mengubah struktur HTML**. Berguna untuk responsive reordering. Nilai default `order-0`.

- `order-first` / `order-last`
- `order-1` s/d `order-12`
- `order-none` (reset)

<Preview :html='`<div class="flex gap-2 bg-gray-100 p-4 rounded-lg">
  <div class="bg-lime-500 text-white p-4 rounded order-3">A (order-3)</div>
  <div class="bg-lime-500 text-white p-4 rounded order-1">B (order-1)</div>
  <div class="bg-lime-500 text-white p-4 rounded order-2">C (order-2)</div>
</div>`' />

::: tip Aksesibilitas
`order-*` hanya mengubah urutan **visual**. Pembaca layar (screen reader) tetap membaca sesuai urutan DOM/HTML. Jangan andalkan `order` untuk menyusun alur baca yang penting — tetap urutkan HTML-nya secara logis.
:::

---

## 8. Gap & Responsive Gap

`gap-*` mengatur jarak **antara** item flex (lebih bersih daripada `margin` pada tiap item). Menerima skala spacing sama dengan padding: `gap-0` s/d `gap-96`, plus `gap-px`.

<Preview :html='`<div class="flex gap-8 bg-gray-100 p-4 rounded-lg">
  <div class="bg-orange-500 text-white px-4 py-2 rounded">gap-8</div>
  <div class="bg-orange-500 text-white px-4 py-2 rounded">antar item</div>
  <div class="bg-orange-500 text-white px-4 py-2 rounded">seragam</div>
</div>`' />

`gap` bisa berbeda per arah: `gap-x-*` (horizontal) dan `gap-y-*` (vertikal).

### Responsive Gap

Saat layar mengecil, gap besar terlihat berantakan. Pakai prefix breakpoint.

<Preview :html='`<div class="flex flex-wrap gap-2 md:gap-6 bg-gray-100 p-4 rounded-lg">
  <div class="bg-orange-600 text-white px-3 py-2 rounded text-sm">gap-2 di mobile</div>
  <div class="bg-orange-600 text-white px-3 py-2 rounded text-sm">gap-6 di md+</div>
  <div class="bg-orange-600 text-white px-3 py-2 rounded text-sm">item</div>
  <div class="bg-orange-600 text-white px-3 py-2 rounded text-sm">item</div>
</div>`' />

Kecilkan jendela browser (atau buka devtools responsive) untuk melihat gap berubah.

---

## 9. Align Content (Multi-baris)

Saat `flex-wrap` menghasilkan **banyak baris**, `content-*` mengatur penyebaran baris-baris tersebut di sepanjang sumbu silang. Jarang dipakai, tapi berguna untuk container tinggi.

- `content-start`, `content-center`, `content-end`, `content-between`, `content-around`, `content-evenly`

---

## 10. Pola Layout Umum

### Pusat Sempurna (Perfect Centering)

`flex items-center justify-center` — cara paling andal menengahkan konten, lebih baik dari `margin: auto` atau `position: absolute`.

<Preview :html='`<div class="flex items-center justify-center bg-gray-800 rounded-lg h-40">
  <div class="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded">Tengah Sempurna</div>
</div>`' />

### Media Object (gambar + teks)

`flex items-start` + `shrink-0` pada gambar agar tidak menyusut.

<Preview :html='`<div class="flex items-start gap-4 bg-gray-100 p-4 rounded-lg max-w-md">
  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" class="w-16 h-16 rounded-full shrink-0" alt="avatar" />
  <div>
    <h4 class="font-bold text-gray-900">Budi Santoso</h4>
    <p class="text-sm text-gray-600">Ini adalah contoh media object. Gambar di kiri pakai shrink-0 supaya tidak ciut, teks di kanan mengisi sisa.</p>
  </div>
</div>`' />

### Sticky Footer (footer menempel bawah saat konten pendek)

Pola klasik: container `flex flex-col min-h-screen`, konten utama `flex-1`.

<Preview :html='`<div class="flex flex-col bg-gray-100 rounded-lg h-56 w-full overflow-hidden">
  <header class="bg-gray-800 text-white p-3 text-sm">Header</header>
  <main class="flex-1 p-4 text-sm text-gray-700">Konten utama (flex-1). Saat pendek, footer tetap di bawah.</main>
  <footer class="bg-gray-300 p-3 text-sm">Footer</footer>
</div>`' />

### Input + Tombol (append)

<Preview :html='`<div class="flex gap-2 max-w-sm">
  <input type="text" placeholder="cari..." class="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-brand focus:ring-2 focus:ring-brand/30" />
  <button class="bg-brand text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-dark transition">Cari</button>
</div>`' />

---

## 11. Anti-pattern & Jebakan

1. **Jangan campur `flex-col` lalu pakai `justify-between` mengharapkan horizontal** — di `flex-col`, sumbu utama jadi vertikal. Pakai `items-*` untuk horizontal.
2. **`flex-1` pada item tanpa container `flex`** — tidak ada efek. Pastikan parent punya `flex`/`inline-flex`.
3. **Lupa `shrink-0` pada gambar** — gambar di flex container akan ciut aneh. Selalu tambahkan `shrink-0` (atau `flex-none`) pada `<img>`/ikon.
4. **Mengandalkan `order` untuk aksesibilitas** — lihat catatan di section 7.
5. **`min-w-0` untuk teks panjang** — item flex punya `min-width: auto` secara default, sehingga teks panjang (mis. URL) bisa meluas melebihi container. Tambahkan `min-w-0` agar bisa `truncate`.

<Preview :html='`<div class="flex gap-2 bg-gray-100 p-4 rounded-lg max-w-xs">
  <div class="bg-red-500 text-white p-2 rounded text-sm shrink-0">tag</div>
  <div class="bg-gray-700 text-white p-2 rounded text-sm min-w-0 truncate">https://contoh-url-sangat-panjang-yang-harus-dipotong.com/path</div>
</div>`' />

---

## Ringkasan Cepat

| Tujuan | Class |
| --- | --- |
| Container flex | `flex`, `inline-flex` |
| Arah | `flex-row`, `flex-col` |
| Sumbu utama | `justify-{start,center,end,between,around,evenly}` |
| Sumbu silang | `items-{start,center,end,stretch,baseline}` |
| Per-item | `self-{start,center,end}` |
| Bungkus | `flex-wrap`, `flex-nowrap` |
| Tumbuh/susut | `flex-1`, `grow`, `shrink-0`, `basis-1/2` |
| Urutan | `order-{1..12}`, `order-first/last` |
| Jarak | `gap-*`, `gap-x-*`, `gap-y-*` (responsive: `md:gap-*`) |

Langkah berikutnya: pelajari [Grid Layout](/layout/grid) untuk layout 2-dimensi, atau langsung ke [Responsive Design](/responsive/) untuk membuat flexbox beradaptasi di semua ukuran layar.

---

## Eksperimen Sendiri

Coba ubah-ubah class di playground ini. Ganti `justify-*`, `items-*`, tambah `flex-wrap`, atau ubah `gap`. Ubah ukuran viewport (sm/md/lg/full) untuk lihat efek responsif.

<Playground :default='`<div class="flex items-center justify-center gap-4 bg-gray-100 h-48 rounded-lg">
  <div class="bg-blue-500 text-white p-4 rounded">A</div>
  <div class="bg-blue-500 text-white p-4 rounded">B</div>
  <div class="bg-blue-500 text-white p-4 rounded">C</div>
</div>`' />
