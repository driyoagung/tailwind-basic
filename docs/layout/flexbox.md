# Flexbox (1-Dimensional Layout)

`flex` adalah utilitas layout yang paling sering digunakan dalam web modern. Flexbox bekerja sangat baik untuk merapikan elemen dalam 1 dimensi (satu baris kolom ATAU satu baris vertikal).

---

## 1. Membuat Container Flex

Cukup tambahkan class `flex`. Secara otomatis, seluruh anak langsung di dalamnya akan berjajar ke samping (sebagai kolom).

```html
<div class="flex gap-4 bg-gray-100 p-4 rounded-lg">
  <div class="bg-blue-500 text-white p-4">Item 1</div>
  <div class="bg-blue-500 text-white p-4">Item 2</div>
  <div class="bg-blue-500 text-white p-4">Item 3</div>
</div>
```

<div class="preview-box">
<div class="flex gap-4 bg-gray-100 p-4 rounded-lg">
  <div class="bg-blue-500 text-white p-4 rounded">Item 1</div>
  <div class="bg-blue-500 text-white p-4 rounded">Item 2</div>
  <div class="bg-blue-500 text-white p-4 rounded">Item 3</div>
</div>
</div>

---

## 2. Mengubah Arah (Flex Direction)

- `flex-row`: (Default) Menyamping kiri ke kanan.
- `flex-col`: Menurun dari atas ke bawah.

```html
<div class="flex flex-col gap-2 bg-gray-100 p-4 rounded-lg">
  <div class="bg-green-500 text-white p-4">Item Atas</div>
  <div class="bg-green-500 text-white p-4">Item Bawah</div>
</div>
```

<div class="preview-box">
<div class="flex flex-col gap-2 bg-gray-100 p-4 rounded-lg">
  <div class="bg-green-500 text-white p-4 rounded">Item Atas</div>
  <div class="bg-green-500 text-white p-4 rounded">Item Bawah</div>
</div>
</div>

---

## 3. Merapikan Elemen (Justify & Align)

Di sinilah letak kekuatan sesungguhnya dari Flexbox.

### Justify Content (Sumbu Utama)
Jika `flex-row`, justify mengatur elemen secara Kiri-Kanan.
- `justify-start` (kiri)
- `justify-center` (tengah)
- `justify-end` (kanan)
- `justify-between` (tersebar, paling kiri dan paling kanan mentok)
- `justify-around`, `justify-evenly`

### Align Items (Sumbu Silang)
Jika `flex-row`, align mengatur elemen secara Atas-Bawah.
- `items-start` (atas)
- `items-center` (tengah vertikal)
- `items-end` (bawah)

### Contoh Navbar Cepat dengan Flex
Kombinasi `justify-between` dan `items-center` sangat sempurna untuk membuat Navbar.

```html
<nav class="flex justify-between items-center bg-gray-800 text-white p-4 rounded-lg">
  <!-- Logo (Kiri) -->
  <div class="text-xl font-bold text-yellow-400">MyLogo</div>
  
  <!-- Menu (Kanan) -->
  <ul class="flex gap-6">
    <li class="hover:text-yellow-400 cursor-pointer">Home</li>
    <li class="hover:text-yellow-400 cursor-pointer">About</li>
    <li class="hover:text-yellow-400 cursor-pointer">Contact</li>
  </ul>
</nav>
```

<div class="preview-box">
<nav class="flex justify-between items-center bg-gray-800 text-white p-4 rounded-lg">
  <div class="text-xl font-bold text-yellow-400">MyLogo</div>
  <ul class="flex gap-6">
    <li class="hover:text-yellow-400 cursor-pointer">Home</li>
    <li class="hover:text-yellow-400 cursor-pointer">About</li>
    <li class="hover:text-yellow-400 cursor-pointer">Contact</li>
  </ul>
</nav>
</div>

---

## 4. Membungkus Elemen (Flex Wrap)

Jika isi dari container flex terlalu banyak melebihi layar, elemen akan menciut paksa (shrink). Tambahkan `flex-wrap` agar elemen mau turun ke baris baru ketika tidak muat.

```html
<!-- Hapus class flex-wrap dan lihat bedanya -->
<div class="flex flex-wrap gap-2">
  <div class="bg-indigo-200 p-4 w-32">Kardus</div>
  <div class="bg-indigo-300 p-4 w-32">Kardus</div>
  <div class="bg-indigo-400 p-4 w-32">Kardus</div>
  <div class="bg-indigo-500 p-4 w-32">Kardus</div>
  <div class="bg-indigo-600 p-4 w-32">Kardus</div>
  <div class="bg-indigo-700 p-4 w-32">Kardus</div>
  <div class="bg-indigo-800 p-4 w-32 text-white">Kardus</div>
</div>
```

<div class="preview-box">
<div class="flex flex-wrap gap-2 text-center text-sm font-bold">
  <div class="bg-indigo-200 p-4 w-32 rounded">Kardus</div>
  <div class="bg-indigo-300 p-4 w-32 rounded">Kardus</div>
  <div class="bg-indigo-400 p-4 w-32 rounded">Kardus</div>
  <div class="bg-indigo-500 p-4 w-32 rounded text-white">Kardus</div>
  <div class="bg-indigo-600 p-4 w-32 rounded text-white">Kardus</div>
  <div class="bg-indigo-700 p-4 w-32 rounded text-white">Kardus</div>
  <div class="bg-indigo-800 p-4 w-32 rounded text-white">Kardus</div>
</div>
</div>
