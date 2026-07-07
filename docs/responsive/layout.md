---
title: Responsive Layout Lanjutan
description: Membuat layout responsif dengan grid, flexbox, dan tipografi yang beradaptasi di berbagai ukuran layar.
---

# Responsive Layout Lanjutan

Membuat web responsif berarti setiap aspek dari layout harus beradaptasi dengan baik. Tidak hanya sekadar Grid atau Flexbox, namun spasi, ukuran font, hingga padding juga perlu kita modifikasi di berbagai layar.

---

## 1. Responsive Grid

Kasus paling umum: Galeri produk.
- Layar HP: 1 Kolom.
- Layar Tablet: 2 Kolom.
- Layar Laptop: 3 Kolom.
- Layar Desktop Besar: 4 Kolom.

Sangat mudah menggunakan Tailwind!
`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`

<Preview :html='`<!-- Cobalah ubah ukuran lebar browser Anda -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-purple-100 border-2 border-purple-500 p-6 text-center font-bold text-purple-900 rounded-lg shadow">Produk A</div>
  <div class="bg-purple-100 border-2 border-purple-500 p-6 text-center font-bold text-purple-900 rounded-lg shadow">Produk B</div>
  <div class="bg-purple-100 border-2 border-purple-500 p-6 text-center font-bold text-purple-900 rounded-lg shadow">Produk C</div>
</div>`' />

---

## 2. Responsive Flexbox (Arah Berubah)

Banyak desainer merancang konten seperti "Artikel":
- Di mobile, fotonya di atas, teksnya di bawah (Kolom).
- Di desktop, fotonya di kiri, teksnya di kanan (Baris).

Caranya: `flex-col md:flex-row`.

<Preview :html='`<div class="flex flex-col md:flex-row bg-white border shadow-md rounded-lg overflow-hidden">
  <!-- Foto -->
  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400" alt="Laptop" class="w-full md:w-48 h-48 object-cover">
  <!-- Teks Konten -->
  <div class="p-6">
    <h3 class="font-bold text-xl mb-2 text-gray-800">Menjadi Web Developer</h3>
    <p class="text-gray-600 text-sm">Responsive design tidak lagi sulit dengan Tailwind CSS. Kita cukup memikirkan struktur mobile, lalu menimpanya dengan layout desktop.</p>
  </div>
</div>`' />

---

## 3. Responsive Typography & Spacing

Judul H1 berukuran `text-6xl` mungkin terlihat sangat mewah di layar monitor, tetapi akan terpotong (overflow) dan jelek jika dilihat dari layar HP kecil. Kita perlu membuat teks mengecil di HP.

Begitu juga dengan padding (spasi dalam), ukuran *padding* yang terlalu lebar di HP memakan ruang *content* berharga.

<Preview :html='`<div class="bg-blue-600 text-white rounded-xl text-center p-4 md:p-8 lg:p-16">
  <h1 class="font-black mb-4 text-2xl md:text-4xl lg:text-6xl">
    Teks & Padding Dinamis
  </h1>
  <p class="opacity-80 mx-auto text-sm md:text-base lg:text-xl max-w-xs md:max-w-md lg:max-w-2xl">
    Coba ubah ukuran layar perlahan. Anda akan melihat bahwa ukuran judul, spasi (padding biru luar), serta lebar paragraf maksimal ini beradaptasi untuk setiap resolusi layar secara mandiri.
  </p>
</div>`' />
