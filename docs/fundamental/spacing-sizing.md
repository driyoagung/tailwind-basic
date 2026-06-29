# Spacing & Sizing

Mengatur jarak antar elemen (Spacing) dan ukuran elemen (Sizing) adalah hal pertama yang harus Anda kuasai dalam *styling* web. Tailwind menyediakan skala yang sangat logis dan konsisten untuk hal ini.

---

## 1. Padding (`p-*`) & Margin (`m-*`)

Di Tailwind, properti `padding` dan `margin` menggunakan format `p-*` dan `m-*`. Angka yang digunakan (seperti 1, 2, 4, 8) bukanlah dalam *pixel*, melainkan dikalikan `0.25rem` (sekitar 4px pada ukuran default).
- `p-4` = 1rem (16px) padding di semua sisi.
- `m-2` = 0.5rem (8px) margin di semua sisi.

Anda juga bisa menargetkan sisi tertentu:
- `t` (Top) → `pt-4` (Padding Top), `mt-4` (Margin Top)
- `b` (Bottom) → `pb-4` (Padding Bottom)
- `l` (Left) & `r` (Right)
- `x` (Horizontal / Kiri Kanan) → `px-4`, `mx-auto`
- `y` (Vertical / Atas Bawah) → `py-4`

### Contoh Penggunaan

```html
<div class="bg-gray-200 p-8">
  <div class="bg-white p-4 mb-4">Kotak 1: Padding 4 (16px), Margin Bottom 4 (16px)</div>
  <div class="bg-white px-8 py-2">Kotak 2: Padding X 8 (32px), Padding Y 2 (8px)</div>
</div>
```

<div class="preview-box">
<div class="bg-gray-200 p-8">
  <div class="bg-white p-4 mb-4">Kotak 1: Padding 4 (16px), Margin Bottom 4 (16px)</div>
  <div class="bg-white px-8 py-2">Kotak 2: Padding X 8 (32px), Padding Y 2 (8px)</div>
</div>
</div>

---

## 2. Space Between (`space-x-*`, `space-y-*`) & Gap

Seringkali kita ingin memberi jarak yang konsisten **di antara** beberapa elemen anak (seperti daftar menu atau deretan tombol). Alih-alih memberikan margin pada setiap elemen satu per satu, Tailwind memiliki solusi cerdas.

### Menggunakan `space-y-*` (Vertikal)
Menambahkan margin-top ke semua elemen *kecuali* elemen pertama. Sangat berguna untuk list.

```html
<ul class="space-y-3 bg-gray-100 p-4 rounded-md">
  <li class="bg-white p-2">Item Pertama</li>
  <li class="bg-white p-2">Item Kedua (punya jarak di atasnya)</li>
  <li class="bg-white p-2">Item Ketiga (punya jarak di atasnya)</li>
</ul>
```

<div class="preview-box">
<ul class="space-y-3 bg-gray-100 p-4 rounded-md">
  <li class="bg-white p-2 border">Item Pertama</li>
  <li class="bg-white p-2 border">Item Kedua (punya jarak di atasnya)</li>
  <li class="bg-white p-2 border">Item Ketiga (punya jarak di atasnya)</li>
</ul>
</div>

### Menggunakan `gap-*` (Khusus Flexbox/Grid)
Nantinya saat belajar Flexbox/Grid, kita lebih disarankan menggunakan `gap-*` karena lebih bersih dan tidak bermasalah jika elemen turun baris (wrap).

```html
<div class="flex gap-4">
  <button class="bg-blue-500 text-white px-4 py-2 rounded">Tombol 1</button>
  <button class="bg-green-500 text-white px-4 py-2 rounded">Tombol 2</button>
</div>
```

<div class="preview-box">
<div class="flex gap-4">
  <button class="bg-blue-500 text-white px-4 py-2 rounded">Tombol 1</button>
  <button class="bg-green-500 text-white px-4 py-2 rounded">Tombol 2</button>
</div>
</div>

---

## 3. Sizing: Width (`w-*`) & Height (`h-*`)

Tailwind mengatur lebar dan tinggi elemen dengan `w-` dan `h-`.
Selain menggunakan angka absolut seperti `w-16` (4rem/64px), Tailwind juga menyediakan class persentase/pecahan.

### Fraksi / Persentase
- `w-1/2` (50%)
- `w-1/3` (33.33%)
- `w-1/4` (25%)
- `w-full` (100%)

### Viewport (Layar Utama)
- `w-screen` (100vw - Penuh selebar layar)
- `h-screen` (100vh - Penuh setinggi layar)

### Contoh Width

```html
<div class="space-y-2">
  <div class="w-1/4 bg-red-400 p-2 text-white">w-1/4 (25%)</div>
  <div class="w-1/2 bg-green-400 p-2 text-white">w-1/2 (50%)</div>
  <div class="w-3/4 bg-blue-400 p-2 text-white">w-3/4 (75%)</div>
  <div class="w-full bg-purple-400 p-2 text-white">w-full (100%)</div>
</div>
```

<div class="preview-box">
<div class="space-y-2">
  <div class="w-1/4 bg-red-400 p-2 text-white">w-1/4 (25%)</div>
  <div class="w-1/2 bg-green-400 p-2 text-white">w-1/2 (50%)</div>
  <div class="w-3/4 bg-blue-400 p-2 text-white">w-3/4 (75%)</div>
  <div class="w-full bg-purple-400 p-2 text-white">w-full (100%)</div>
</div>
</div>

---

## 4. Min/Max Width & Height

Kadang kita tidak ingin elemen terlalu lebar atau terlalu kecil saat layar dikecilkan/dibesarkan.

- **`max-w-*`**: Mencegah elemen melebihi ukuran tertentu. Sangat berguna untuk membungkus artikel (`max-w-prose`, `max-w-2xl`, `max-w-screen-md`).
- **`min-h-*`**: Mencegah elemen menciut kurang dari ukuran tertentu (contoh `min-h-screen` membuat minimal setinggi layar, kalau isinya banyak dia akan bertambah tinggi).

```html
<!-- Coba ubah lebar browser/layar Anda, kotak ini akan berhenti melebar di ukuran 'sm' (sekitar 384px) -->
<div class="max-w-sm bg-yellow-200 p-4 border-2 border-yellow-500 mx-auto">
  Kotak ini lebarnya 100% sampai mencapai maksimal "sm". Class "mx-auto" membuatnya berada tepat di tengah ketika max-width tercapai.
</div>
```

<div class="preview-box">
<div class="max-w-sm bg-yellow-200 p-4 border-2 border-yellow-500 mx-auto text-yellow-900 font-medium text-center">
  Kotak ini lebarnya 100% sampai mencapai maksimal "sm". Class "mx-auto" membuatnya berada di tengah.
</div>
</div>
