# Responsive Utilities & Breakpoints

Fitur yang paling membuat Tailwind CSS dicintai oleh jutaan *developer* adalah sistem **Responsive Design**-nya yang sangat mudah digunakan. 

Tailwind menggunakan pendekatan **Mobile First**, yang berarti gaya standar (tanpa awalan apapun) akan diaplikasikan mulai dari layar ponsel pintar terkecil. Kemudian, Anda menambahkan awalan layar (*breakpoint*) untuk menimpa gaya tersebut pada layar yang lebih besar.

---

## 1. Breakpoints Standar Tailwind

Berikut adalah 5 ukuran layar standar (breakpoints) bawaan Tailwind:

- `sm:` (min-width: 640px) - Handphone layar lebar / Tablet potret
- `md:` (min-width: 768px) - Tablet landscape
- `lg:` (min-width: 1024px) - Laptop kecil
- `xl:` (min-width: 1280px) - Desktop standar
- `2xl:` (min-width: 1536px) - Layar ekstra besar (Monitor 4K)

Cara kerjanya: **Kondisi akan berlaku mulai dari ukuran tersebut hingga ke ukuran yang lebih besar (ke atas).**

---

## 2. Pendekatan Mobile First

Mari kita buat sebuah kotak. Pada layar kecil (HP), warnanya merah. Saat dibuka di layar sedang (Tablet), berubah hijau. Di layar besar (Laptop), berubah biru.

Penulisan kodenya:
`bg-red-500 md:bg-green-500 lg:bg-blue-500`

- `bg-red-500` berlaku untuk layar `0px` hingga `767px`.
- `md:bg-green-500` menimpa layar mulai `768px` hingga `1023px`.
- `lg:bg-blue-500` menimpa layar mulai `1024px` hingga seterusnya.

```html
<!-- Silakan ubah ukuran lebar (width) browser Anda untuk melihat perubahan warnanya secara otomatis! -->
<div class="p-6 text-center text-white font-bold text-xl rounded-xl shadow-lg transition-colors duration-500 bg-red-500 md:bg-green-500 lg:bg-blue-500">
  <p class="block md:hidden lg:hidden">Ini Layar Mobile (Kecil)</p>
  <p class="hidden md:block lg:hidden">Ini Layar Tablet (Sedang)</p>
  <p class="hidden md:hidden lg:block">Ini Layar Desktop (Besar)</p>
</div>
```

<div class="preview-box">
<div class="p-6 text-center text-white font-bold text-xl rounded-xl shadow-lg transition-colors duration-500 bg-red-500 md:bg-green-500 lg:bg-blue-500">
  <p class="block md:hidden lg:hidden">Ini Layar Mobile (Kecil)</p>
  <p class="hidden md:block lg:hidden">Ini Layar Tablet (Sedang)</p>
  <p class="hidden md:hidden lg:block">Ini Layar Desktop (Besar)</p>
</div>
</div>

---

## 3. Menyembunyikan Elemen (Responsive Hide)

Salah satu kasus paling sering adalah menyembunyikan "Menu Hamburger" di desktop, dan menyembunyikan "Menu Teks" di mobile.

Anda bisa menggunakan kombinasi utilitas `hidden` dan `block` (atau `flex`).

```html
<nav class="flex justify-between items-center bg-gray-800 p-4 text-white rounded">
  <div class="font-bold">Logo</div>
  
  <!-- Menu Utama: Sembunyi di Mobile, Tampil di Tablet ke atas -->
  <ul class="hidden md:flex gap-6">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
  
  <!-- Tombol Hamburger: Tampil di Mobile, Sembunyi di Tablet ke atas -->
  <button class="block md:hidden bg-gray-700 px-3 py-1 rounded">
    ☰ Menu
  </button>
</nav>
```

<div class="preview-box">
<nav class="flex justify-between items-center bg-gray-800 p-4 text-white rounded">
  <div class="font-bold">Logo</div>
  <ul class="hidden md:flex gap-6">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
  <button class="block md:hidden bg-gray-700 px-3 py-1 rounded">
    ☰ Menu
  </button>
</nav>
</div>
