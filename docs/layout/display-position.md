---
title: Display, Position & Z-Index
description: Memahami display, position (relative, absolute, fixed, sticky), dan z-index di Tailwind CSS.
---

# Display, Position & Z-Index

Bagian Layout (tata letak) adalah bagian terpenting dalam membangun struktur website. Kita akan mulai dari properti dasar untuk mengontrol bagaimana sebuah elemen dirender di layar.

---

## 1. Display (`block`, `inline`, `hidden`)

Properti `display` menentukan sifat dasar dari sebuah elemen.

- `block`: Elemen akan mengambil ruang sejajar penuh dari kiri ke kanan (seperti `<div>` atau `<p>`).
- `inline`: Elemen hanya mengambil ruang seukuran teks di dalamnya dan bisa bersebelahan (seperti `<span>` atau `<a>`).
- `inline-block`: Gabungan dari keduanya. Bisa bersebelahan tapi kita bisa mengatur `width` dan `height`-nya.
- `hidden`: Menghilangkan elemen dari layar (sama dengan `display: none`).

<Preview :html='`<div class="space-y-4">
  <div class="block bg-blue-200 p-2">Elemen Block 1</div>
  <div class="block bg-blue-200 p-2">Elemen Block 2 (Pasti turun baris)</div>

  <div class="mt-4">
    <span class="inline bg-green-200 p-2">Elemen Inline 1</span>
    <span class="inline bg-green-200 p-2">Elemen Inline 2 (Bersebelahan)</span>
  </div>
</div>`' />

---

## 2. Position (`relative`, `absolute`, `fixed`, `sticky`)

Positioning memungkinkan Anda "mengeluarkan" elemen dari alur normal dokumen dan meletakkannya di posisi spesifik. Gunakan dengan utilitas arah: `top-*`, `right-*`, `bottom-*`, `left-*`.

- `relative`: Elemen tetap di posisinya, tapi bisa digeser menggunakan top/right/bottom/left relatif dari posisinya asalnya. **Paling sering digunakan sebagai "wadah" untuk elemen absolute.**
- `absolute`: Elemen melayang dan posisinya terikat pada *parent* terdekat yang berstatus `relative`.
- `fixed`: Elemen melayang dan menempel pada layar browser (tidak ikut ter-scroll). Cocok untuk Navbar/Floating Button.
- `sticky`: Elemen bertingkah normal saat di-scroll, namun akan "menempel" jika sudah mencapai batas tertentu (misal: header tabel).

### Contoh Relative & Absolute

<Preview :html='`<!-- Parent harus relative -->
<div class="relative w-full h-32 bg-gray-200 border-2 border-dashed border-gray-400 font-medium text-sm">
  <div class="absolute top-0 left-0 bg-red-500 text-white p-2">Top Left</div>
  <div class="absolute top-0 right-0 bg-green-500 text-white p-2">Top Right</div>
  <!-- Centering Absolute: kombinasi left-1/2, top-1/2, dan -translate (transform) -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded">
    Tengah Sempurna
  </div>
  <div class="absolute bottom-0 right-0 bg-yellow-500 text-black p-2">Bottom Right</div>
</div>`' />

---

## 3. Z-Index (`z-*`)

Ketika ada beberapa elemen yang melayang (`absolute` atau `fixed`), elemen mana yang akan tampil di atas elemen lainnya? `z-index` jawabannya. Semakin besar angkanya, semakin di atas posisinya.

Di Tailwind: `z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, dan `z-auto`.

<Preview :html='`<div class="relative h-32 text-white">
  <div class="absolute top-4 left-4 w-24 h-24 bg-red-400 z-10 flex items-center justify-center font-bold shadow-md rounded">z-10</div>
  <div class="absolute top-8 left-12 w-24 h-24 bg-blue-400 z-30 flex items-center justify-center font-bold shadow-xl rounded">z-30 (Atas)</div>
  <div class="absolute top-12 left-20 w-24 h-24 bg-green-400 z-20 flex items-center justify-center font-bold shadow-md rounded">z-20</div>
</div>`' />
