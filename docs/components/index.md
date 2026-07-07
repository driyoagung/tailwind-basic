---
title: "Reusable Components: Button, Badge & Alert"
description: "Resep komponen siap pakai: button, badge, dan alert."
---

# Reusable Components: Button, Badge & Alert

Di dunia nyata, Anda akan terus-menerus membangun komponen UI yang sama: tombol, *badge*, dan notifikasi *alert*. Berikut adalah resep-resep siap pakai yang bisa langsung Anda copy-paste dan modifikasi di proyek Anda.

---

## 1. Button (Tombol)

Tombol yang profesional harus memiliki: warna solid, efek hover, efek active (tertekan), dan radius sudut yang proporsional. Berikut adalah variasi yang paling umum:

### Variasi Tombol

<Preview :html='`<div class="flex flex-wrap gap-3">
  <!-- Primary -->
  <button class="bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 active:scale-95 transition shadow-md">Primary</button>
  <!-- Secondary -->
  <button class="bg-gray-200 text-gray-800 font-semibold py-2 px-5 rounded-lg hover:bg-gray-300 active:scale-95 transition">Secondary</button>
  <!-- Outline -->
  <button class="border-2 border-blue-600 text-blue-600 font-semibold py-2 px-5 rounded-lg hover:bg-blue-600 hover:text-white active:scale-95 transition">Outline</button>
  <!-- Danger -->
  <button class="bg-red-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-red-700 active:scale-95 transition shadow-md">Danger</button>
  <!-- Ghost -->
  <button class="text-blue-600 font-semibold py-2 px-5 rounded-lg hover:bg-blue-50 active:scale-95 transition">Ghost</button>
  <!-- Disabled -->
  <button disabled class="bg-gray-300 text-gray-500 font-semibold py-2 px-5 rounded-lg cursor-not-allowed opacity-60">Disabled</button>
</div>`' />

### Variasi Ukuran

<Preview :html='`<div class="flex flex-wrap items-center gap-3">
  <button class="bg-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded hover:bg-indigo-700 transition">XS</button>
  <button class="bg-indigo-600 text-white text-sm font-semibold py-1.5 px-4 rounded-md hover:bg-indigo-700 transition">SM</button>
  <button class="bg-indigo-600 text-white text-base font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition">Base</button>
  <button class="bg-indigo-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition">LG</button>
  <button class="bg-indigo-600 text-white text-xl font-semibold py-3.5 px-8 rounded-xl hover:bg-indigo-700 transition">XL</button>
</div>`' />

---

## 2. Badge (Lencana Status)

Badge adalah label kecil yang digunakan untuk menandakan status, kategori, atau jumlah (misal: "Active", "PRO", "3 items").

<Preview :html='`<div class="flex flex-wrap gap-2">
  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Default</span>
  <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Aktif</span>
  <span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Error</span>
  <span class="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Pending</span>
  <span class="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">PRO</span>
  <!-- Badge dengan border -->
  <span class="border border-gray-400 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">Outline</span>
</div>`' />

---

## 3. Alert (Notifikasi Statis)

Alert digunakan untuk memberi notifikasi penting kepada pengguna: Sukses, Peringatan, atau Error. Biasanya dilengkapi ikon di sisi kiri.

<Preview :html='`<div class="flex flex-col gap-4 max-w-lg">
  <!-- Sukses -->
  <div class="flex items-center gap-3 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
    <span class="text-green-600 text-xl">✅</span>
    <div>
      <h4 class="font-bold text-green-800">Berhasil!</h4>
      <p class="text-green-700 text-sm">Data telah tersimpan ke database.</p>
    </div>
  </div>
  <!-- Peringatan -->
  <div class="flex items-center gap-3 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
    <span class="text-yellow-600 text-xl">⚠️</span>
    <div>
      <h4 class="font-bold text-yellow-800">Perhatian!</h4>
      <p class="text-yellow-700 text-sm">Session Anda akan berakhir dalam 5 menit.</p>
    </div>
  </div>
  <!-- Error -->
  <div class="flex items-center gap-3 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
    <span class="text-red-600 text-xl">❌</span>
    <div>
      <h4 class="font-bold text-red-800">Gagal!</h4>
      <p class="text-red-700 text-sm">Terjadi kesalahan saat menghubungi server.</p>
    </div>
  </div>
  <!-- Info -->
  <div class="flex items-center gap-3 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
    <span class="text-blue-600 text-xl">ℹ️</span>
    <div>
      <h4 class="font-bold text-blue-800">Informasi</h4>
      <p class="text-blue-700 text-sm">Versi baru telah tersedia. Silakan perbarui aplikasi Anda.</p>
    </div>
  </div>
</div>`' />
