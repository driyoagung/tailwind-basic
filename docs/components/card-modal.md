---
title: Card, Modal & Drawer
description: Membangun card, modal dialog, dan drawer panel geser samping.
---

# Card, Modal & Drawer

Komponen-komponen ini adalah fondasi hampir semua aplikasi web modern.

---

## 1. Card (Kartu Konten)

### Card Artikel

<Preview :html='`<div class="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow mx-auto">
  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500" alt="Laptop" class="w-full h-48 object-cover">
  <div class="p-6">
    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Teknologi</span>
    <h3 class="mt-3 text-xl font-bold text-gray-900">Memulai Karir Web Developer</h3>
    <p class="mt-2 text-gray-600 text-sm line-clamp-2">Pelajari langkah praktis untuk memulai karir di bidang pengembangan web modern.</p>
    <div class="mt-4 flex items-center justify-between">
      <span class="text-xs text-gray-500">5 menit baca</span>
      <button class="text-blue-600 text-sm font-semibold hover:underline">Baca →</button>
    </div>
  </div>
</div>`' />

### Card Profil / Testimonial

<Preview :html='`<div class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md border max-w-md">
  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="Avatar" class="w-16 h-16 rounded-full object-cover ring-2 ring-blue-500 ring-offset-2">
  <div>
    <h4 class="font-bold text-gray-900">Agung Driyo</h4>
    <p class="text-sm text-gray-500">Senior Web Developer</p>
    <div class="flex gap-1 mt-1"><span class="text-yellow-400">★★★★★</span></div>
  </div>
</div>`' />

---

## 2. Modal (Dialog Pop-up)

Modal adalah kotak dialog yang muncul di atas konten halaman.

> **Catatan:** Membuat modal berfungsi (buka/tutup) membutuhkan JavaScript. Di sini kita hanya membangun tampilannya.

<Preview :html='`<div class="relative bg-black/50 p-8 rounded-xl min-h-[300px] flex items-center justify-center">
  <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-bold text-gray-900">Konfirmasi Hapus</h3>
      <button class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
    </div>
    <p class="text-gray-600 text-sm mb-6">Apakah Anda yakin ingin menghapus data ini?</p>
    <div class="flex justify-end gap-3">
      <button class="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition font-medium">Batal</button>
      <button class="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition font-medium shadow-md">Ya, Hapus</button>
    </div>
  </div>
</div>`' />

---

## 3. Drawer (Panel Geser Samping)

Drawer adalah panel navigasi yang muncul dari sisi kiri/kanan layar (umum pada mobile).

<Preview :html='`<div class="relative bg-black/40 rounded-xl min-h-[300px] flex overflow-hidden">
  <div class="w-64 bg-white shadow-2xl p-6 flex flex-col">
    <div class="flex items-center justify-between mb-8">
      <h3 class="text-lg font-bold text-gray-900">Menu</h3>
      <button class="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
    </div>
    <nav class="flex flex-col gap-1 flex-1">
      <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium">🏠 Dashboard</a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition">👤 Profil</a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition">⚙️ Pengaturan</a>
    </nav>
    <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 text-red-600 transition mt-auto">🚪 Keluar</a>
  </div>
  <div class="flex-1 flex items-center justify-center text-white/50 font-bold text-sm p-4">Konten utama (overlay)</div>
</div>`' />
