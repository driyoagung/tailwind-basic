---
title: Dark Mode
description: "Cara menerapkan dark mode dengan awalan dark: di Tailwind CSS v4."
---

# Dark Mode

Penerapan *Dark Mode* di Tailwind sangatlah mudah. Anda hanya perlu menambahkan awalan `dark:` pada class yang ingin diterapkan saat mode gelap aktif.

Contoh: `bg-white text-black dark:bg-black dark:text-white`

## 1. Menentukan Konfigurasi (Tailwind v4)

Di Tailwind CSS v4, Dark Mode diatur otomatis berdasarkan preferensi sistem operasi pengguna (menggunakan `@media (prefers-color-scheme: dark)` secara bawaan). Jika pengguna menggunakan tema gelap di laptop/HP mereka, Tailwind akan otomatis menampilkan class berawalan `dark:`.

> **Catatan:** Anda juga bisa memaksakan tema gelap dengan menambahkan class `dark` secara manual di tag `<html>` atau elemen pembungkus terluar.

---

## 2. Cara Kerja Awalan `dark:`

Gunakan awalan `dark:` untuk membalikkan warna dari *background*, *text*, maupun *border*.

<Preview :html='`<!-- Elemen ini akan putih di mode terang, hitam di mode gelap -->
<div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl max-w-sm mx-auto">
  <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
    Menulis kode dengan Tailwind
  </h3>
  <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    Dukungan Dark Mode adalah salah satu fitur utama. Cukup berikan awalan <code>dark:</code> pada elemen Anda.
  </p>
</div>`' />

---

## 3. Simulasi Tema Gelap (Untuk Kotak Preview Bawah Saja)

Karena mengatur tema gelap seluruh halaman membutuhkan sedikit integrasi JavaScript (atau merubah tema OS Anda), mari kita simulasikan fitur Dark Mode dengan memaksa class `dark` disisipkan ke dalam kotak di bawah ini!

<Preview :html='`<!-- Memaksa class dark di container parent -->
<div class="dark bg-gray-900 p-8 rounded-xl flex justify-center">
  <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl max-w-sm">
    <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
      </svg>
    </span>
    <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Mode Malam Aktif</h3>
    <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
      Karena div terluar dipaksa menggunakan class <b>dark</b>, maka semua class yang berawalan <code>dark:</code> pada elemen anak-anaknya secara otomatis tereksekusi! (Perhatikan background Card menjadi abu-abu gelap).
    </p>
  </div>
</div>`' />
