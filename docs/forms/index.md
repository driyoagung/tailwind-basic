---
title: Styling Forms
description: Styling form input, invalid state, select dropdown, dan checkbox dengan Tailwind CSS.
---

# Styling Forms

Formulir (Forms) seringkali menjadi elemen yang paling menjengkelkan untuk di-styling karena setiap *browser* memiliki gaya bawaan (default) yang berbeda-beda untuk input teks, checkbox, atau select dropdown.

Tailwind memberikan Anda kendali penuh dari nol (*reset*) sehingga form Anda akan terlihat persis sama di Chrome, Safari, maupun Firefox.

---

## 1. Input Teks Dasar

Gaya bawaan input HTML sangat jelek. Anda harus merakit bentuknya dari nol menggunakan class border, padding, dan warna *ring* saat fokus.

Pola standar yang sering digunakan:
`border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500`

<Preview :html='`<form class="flex flex-col gap-4 max-w-sm bg-gray-50 p-6 rounded-lg shadow-sm border mx-auto">
  <h3 class="font-bold text-lg mb-2">Form Pendaftaran</h3>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
    <input type="text" class="w-full border border-gray-300 bg-white rounded-md p-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Masukkan nama">
  </div>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input type="email" class="w-full border border-gray-300 bg-white rounded-md p-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="contoh@email.com">
  </div>
  <button type="button" class="mt-2 w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition">
    Daftar Sekarang
  </button>
</form>`' />

---

## 2. Invalid State (Form Error)

Sangat sering form kita mengalami error (misal: password terlalu pendek). Tailwind dapat menargetkan elemen input yang memiliki atribut HTML `aria-invalid="true"` atau yang sedang dalam pseudo-class `:invalid` dengan cara menambahkan utilitas `invalid:`.

Namun, cara yang paling umum dan terkontrol adalah dengan memberikan *class* merah secara kondisional. Mari kita simulasikan:

<Preview :html='`<div class="max-w-sm p-4 mx-auto">
  <label class="block text-sm font-medium text-red-700 mb-1">Password</label>
  <!-- Perhatikan border-red-500 dan text-red-600 untuk menunjukan pesan Error -->
  <input type="password" class="w-full border-2 border-red-500 text-red-900 rounded-md p-2 outline-none bg-red-50 focus:ring-2 focus:ring-red-200 placeholder-red-300" value="1234">
  <!-- Pesan Error Bawah -->
  <p class="mt-2 text-sm text-red-600 font-medium">
    Password minimal harus 8 karakter.
  </p>
</div>`' />

---

## 3. Styling Select Dropdown & Checkbox

Meskipun elemen kustom seperti toggle/checkbox sudah kita bahas pada modul Interaksi (`peer`), ini adalah contoh penggunaan select bawaan HTML dengan sedikit polesan (custom arrow svg diletakkan di latar belakang).

<Preview :html='`<div class="max-w-sm flex flex-col gap-6 p-4 mx-auto">
  <!-- Select Dropdown Biasa -->
  <div>
    <label class="block text-sm text-gray-700 mb-1">Pilih Kota</label>
    <select class="w-full border border-gray-300 rounded p-2 outline-none focus:border-blue-500 bg-white cursor-pointer">
      <option>Jakarta</option>
      <option>Bandung</option>
      <option>Surabaya</option>
    </select>
  </div>
  <!-- Checkbox Biasa (Aksen warna default biru) -->
  <label class="flex items-center gap-3 cursor-pointer">
    <input type="checkbox" class="w-5 h-5 accent-blue-600 cursor-pointer" checked>
    <span class="text-gray-700">Berlangganan Newsletter</span>
  </label>
</div>`' />

> **Tip Lanjutan:** Untuk mempermudah *styling* Forms, Tailwind dulunya menyarankan penggunaan plugin tambahan `@tailwindcss/forms`. Namun, mulai Tailwind v4, kebanyakan *styling form reset* dasar sudah dimasukkan dan pendekatan utilitas di atas jauh lebih disukai.
