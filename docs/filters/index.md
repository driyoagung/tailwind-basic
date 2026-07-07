---
title: Filters
description: Filter visual blur, grayscale, brightness, drop shadow, dan backdrop blur (glassmorphism).
---

# Filters

CSS modern memiliki kekuatan seperti *software editing* foto (contoh: Photoshop) secara *real-time* langsung di browser. Tailwind menyediakan utilitas untuk memberikan efek **Blur**, **Grayscale**, **Sepia**, hingga **Drop Shadow**.

---

## 1. Filter Visual (Blur, Grayscale, Brightness)

Efek ini umumnya diaplikasikan secara langsung pada gambar atau elemen HTML, dan sangat cantik saat digabungkan dengan `hover:`.

- `blur-*`: Membuat elemen buram (`blur-sm`, `blur-md`, `blur-xl`).
- `grayscale`: Mengubah warna menjadi hitam-putih abu-abu.
- `brightness-*`: Mengatur kecerahan (`brightness-50` berarti 50% lebih gelap, `brightness-150` lebih terang).

<Preview :html='`<!-- Grid Gambar dengan berbagai filter -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div>
    <p class="text-xs mb-1 font-bold text-center">Normal</p>
    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" class="w-full h-32 object-cover rounded-lg shadow-sm">
  </div>
  <div>
    <p class="text-xs mb-1 font-bold text-center">Grayscale</p>
    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" class="w-full h-32 object-cover rounded-lg grayscale shadow-sm">
  </div>
  <div>
    <p class="text-xs mb-1 font-bold text-center">Hover Clear</p>
    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" class="w-full h-32 object-cover rounded-lg blur-sm hover:blur-none transition duration-300 cursor-pointer shadow-sm">
  </div>
  <div>
    <p class="text-xs mb-1 font-bold text-center">Brightness</p>
    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" class="w-full h-32 object-cover rounded-lg brightness-50 hover:brightness-110 transition duration-300 cursor-pointer shadow-sm">
  </div>
</div>`' />

---

## 2. Drop Shadow

*Tunggu, bukankah sebelumnya kita sudah belajar Box Shadow (`shadow-lg`)?*

Ya! Perbedaannya adalah:
- **Box Shadow** (`shadow-md`) selalu membuat bayangan dalam bentuk **KOTAK** mengikuti bingkai (border) elemen HTML-nya.
- **Drop Shadow** (`drop-shadow-md`) akan **mengikuti bentuk asli objek di dalamnya**, termasuk transparansi (PNG) atau *Vector Graphic* (SVG).

<Preview :html='`<div class="flex items-center justify-around bg-white p-8 rounded-xl border">
  <div class="text-center">
    <p class="text-sm font-bold mb-4">Box Shadow (Kotak)</p>
    <!-- Logo panah melengkung (transparan) -->
    <svg class="w-16 h-16 text-blue-500 shadow-xl mx-auto" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
    </svg>
  </div>
  <div class="text-center">
    <p class="text-sm font-bold mb-4">Drop Shadow (Mengikuti Bentuk)</p>
    <!-- Logo panah melengkung dengan Drop Shadow -->
    <svg class="w-16 h-16 text-blue-500 drop-shadow-2xl drop-shadow-blue-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
    </svg>
  </div>
</div>`' />

---

## 3. Backdrop Blur (Glassmorphism)

Efek kaca buram (Glassmorphism) adalah tren desain modern, terutama pada UI iOS dan MacOS.

Bagaimana cara membuat sebuah kotak *transparan* yang **memburamkan elemen apa pun yang ada di BAWAH-nya/DI BELAKANG-nya**?

Gunakan kelas `backdrop-blur-*` dikombinasikan dengan background semi-transparan `bg-white/50` atau semacamnya.

<Preview :html='`<!-- Container Utama (Gambar Pemandangan) -->
<div class="relative bg-[url(https://images.unsplash.com/photo-1506744626753-14072229246a?w=600)] bg-cover bg-center h-64 rounded-xl flex items-center justify-center p-6 shadow-inner">
  <!-- Efek Kaca (Glassmorphism) -->
  <!-- bg-white/30 membuat putih transparan -->
  <!-- backdrop-blur-md memburamkan apa yang ada di baliknya -->
  <div class="bg-white/30 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-8 max-w-sm w-full text-center hover:scale-105 transition-transform duration-500 cursor-pointer">
    <h2 class="text-2xl font-bold text-white mb-2 drop-shadow-md">Efek Kaca Buram</h2>
    <p class="text-white/90 text-sm font-medium">Biasa disebut Glassmorphism. Tampilan yang sangat premium dan elegan.</p>
  </div>
</div>`' />
