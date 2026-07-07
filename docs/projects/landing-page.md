---
title: "Mini Project: Landing Page"
description: Layout landing page lengkap — hero, features, pricing, FAQ, CTA, dan footer dengan Tailwind CSS.
---

# Mini Project: Landing Page

Landing page adalah halaman pertama yang dilihat user. Struktur umum: Hero → Features → Pricing → FAQ → CTA → Footer. Mari build semuanya dengan Tailwind.

---

## 1. Hero Section

Bagian pertama dilihat — harus ctritaat: value proposition + CTA.

<Preview :html='`<section class="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
  <div class="container mx-auto px-4 py-20 text-center">
    <h1 class="text-4xl md:text-6xl font-black mb-6 tracking-tight">
      Bangun UI Cepat dengan Tailwind
    </h1>
    <p class="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
      Framework CSS utility-first yang membuat styling 10x lebih cepat tanpa meninggalkan HTML.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="bg-white text-indigo-600 font-bold px-8 py-3 rounded-lg hover:bg-indigo-50 transition shadow-lg">
        Mulai Gratis
      </button>
      <button class="border-2 border-white/30 text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition">
        Lihat Demo
      </button>
    </div>
  </div>
</section>`' />

---

## 2. Features Section

Grid 3 kolom dengan ikon + judul + deskripsi.

<Preview :html='`<section class="bg-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Kenapa Tailwind?</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
        <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">⚡</div>
        <h3 class="font-bold text-lg mb-2">Cepat</h3>
        <p class="text-sm text-gray-500">Tanpa context-switching. Semua styling langsung di HTML.</p>
      </div>
      <div class="text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
        <div class="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">📐</div>
        <h3 class="font-bold text-lg mb-2">Konsisten</h3>
        <p class="text-sm text-gray-500">Skala spacing, warna, dan typography yang seragam.</p>
      </div>
      <div class="text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
        <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">🎨</div>
        <h3 class="font-bold text-lg mb-2">Fleksibel</h3>
        <p class="text-sm text-gray-500">Customizable penuh via @theme dan arbitrary values.</p>
      </div>
    </div>
  </div>
</section>`' />

---

## 3. Pricing Section

3 kartu pricing dengan highlight "Popular" di tengah.

<Preview :html='`<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Pilih Paket</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <!-- Free -->
      <div class="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h3 class="font-bold text-lg mb-4">Free</h3>
        <p class="text-4xl font-black mb-6">Rp0<span class="text-sm font-normal text-gray-500">/bln</span></p>
        <ul class="space-y-3 text-sm text-gray-600 mb-8">
          <li class="flex gap-2"><span class="text-green-500">✓</span> 1 project</li>
          <li class="flex gap-2"><span class="text-green-500">✓</span> Community support</li>
        </ul>
        <button class="w-full border-2 border-gray-300 font-bold py-2 rounded-lg hover:bg-gray-50 transition">Pilih</button>
      </div>
      <!-- Pro (Popular) -->
      <div class="bg-white p-8 rounded-2xl border-2 border-indigo-500 shadow-xl relative scale-105">
        <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full">POPULAR</span>
        <h3 class="font-bold text-lg mb-4">Pro</h3>
        <p class="text-4xl font-black mb-6">Rp150rb<span class="text-sm font-normal text-gray-500">/bln</span></p>
        <ul class="space-y-3 text-sm text-gray-600 mb-8">
          <li class="flex gap-2"><span class="text-green-500">✓</span> Unlimited projects</li>
          <li class="flex gap-2"><span class="text-green-500">✓</span> Priority support</li>
          <li class="flex gap-2"><span class="text-green-500">✓</span> Custom themes</li>
        </ul>
        <button class="w-full bg-indigo-600 text-white font-bold py-2 rounded-lg hover:bg-indigo-700 transition">Pilih</button>
      </div>
      <!-- Enterprise -->
      <div class="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h3 class="font-bold text-lg mb-4">Enterprise</h3>
        <p class="text-4xl font-black mb-6">Custom</p>
        <ul class="space-y-3 text-sm text-gray-600 mb-8">
          <li class="flex gap-2"><span class="text-green-500">✓</span> Semua fitur Pro</li>
          <li class="flex gap-2"><span class="text-green-500">✓</span> Dedicated manager</li>
          <li class="flex gap-2"><span class="text-green-500">✓</span> SLA 99.9%</li>
        </ul>
        <button class="w-full border-2 border-gray-300 font-bold py-2 rounded-lg hover:bg-gray-50 transition">Hubungi</button>
      </div>
    </div>
  </div>
</section>`' />

---

## 4. FAQ dengan `<details>`

Accordion murni CSS tanpa JavaScript.

<Preview :html='`<section class="bg-white py-16">
  <div class="container mx-auto px-4 max-w-2xl">
    <h2 class="text-3xl font-bold text-center mb-12">FAQ</h2>
    <div class="space-y-4">
      <details class="group border border-gray-200 rounded-lg p-4">
        <summary class="font-semibold cursor-pointer list-none flex justify-between items-center">
          Apakah Tailwind gratis?
          <span class="text-gray-400 group-open:rotate-180 transition">▼</span>
        </summary>
        <p class="mt-3 text-sm text-gray-600">Ya, Tailwind CSS 100% gratis dan open-source.</p>
      </details>
      <details class="group border border-gray-200 rounded-lg p-4">
        <summary class="font-semibold cursor-pointer list-none flex justify-between items-center">
          Bisakah kustomisasi warna?
          <span class="text-gray-400 group-open:rotate-180 transition">▼</span>
        </summary>
        <p class="mt-3 text-sm text-gray-600">Ya, via @theme block di CSS. Lihat halaman Customization.</p>
      </details>
      <details class="group border border-gray-200 rounded-lg p-4">
        <summary class="font-semibold cursor-pointer list-none flex justify-between items-center">
          Apakah support RTL?
          <span class="text-gray-400 group-open:rotate-180 transition">▼</span>
        </summary>
        <p class="mt-3 text-sm text-gray-600">Ya, gunakan logical properties (ps-*, pe-*, ms-*, me-*).</p>
      </details>
    </div>
  </div>
</section>`' />

---

## 5. CTA + Footer

Call-to-action final + footer dengan kolom navigasi.

<Preview :html='`<section class="bg-indigo-600 text-white py-16">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-4">Siap mulai?</h2>
    <p class="text-indigo-100 mb-8">Buat akun gratis dalam 30 detik.</p>
    <button class="bg-white text-indigo-600 font-bold px-8 py-3 rounded-lg hover:bg-indigo-50 transition shadow-lg">
      Daftar Sekarang
    </button>
  </div>
</section>

<footer class="bg-gray-900 text-gray-400 py-12">
  <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
    <div>
      <h4 class="text-white font-bold mb-4">Produk</h4>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white">Fitur</a></li>
        <li><a href="#" class="hover:text-white">Harga</a></li>
        <li><a href="#" class="hover:text-white">Dokumentasi</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-white font-bold mb-4">Perusahaan</h4>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white">Tentang</a></li>
        <li><a href="#" class="hover:text-white">Blog</a></li>
        <li><a href="#" class="hover:text-white">Karier</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-white font-bold mb-4">Bantuan</h4>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white">Support</a></li>
        <li><a href="#" class="hover:text-white">FAQ</a></li>
        <li><a href="#" class="hover:text-white">Status</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-white font-bold mb-4">Legal</h4>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white">Privacy</a></li>
        <li><a href="#" class="hover:text-white">Terms</a></li>
      </ul>
    </div>
  </div>
</footer>`' />

---

## Komponen Lengkap

Gabungkan semua section di atas secara berurutan untuk landing page lengap. Setiap section pakai `container mx-auto px-4` untuk batas lebar + centering.

Kembali ke [Roadmap Lengkap](/spek).