---
title: Keyframe Animations
description: "Animasi bawaan Tailwind: spin, pulse, ping, dan bounce."
---

# Keyframe Animations

Jika Transition hanya bergerak dari Titik A ke Titik B, **Animation** (Keyframes) bisa mengulang-ulang gerakan tanpa batas (*infinite*) dan melakukan gerakan kompleks.

Tailwind CSS menyediakan 4 animasi *default* yang sangat sering dibutuhkan. Anda cukup memberikan class `animate-*` pada elemen.

---

## 1. Animate Spin (`animate-spin`)

Berputar tanpa batas. Sangat sering digunakan untuk *Loading Spinner* (Ikon Loading).

<Preview :html='`<button class="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">
  <!-- Ikon Loading -->
  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Menyimpan Data...
</button>`' />

---

## 2. Animate Pulse (`animate-pulse`)

Efek redup-terang yang lambat. Standard industri web saat ini untuk membuat "Skeleton Loading" (saat website sedang memuat data dan merender kerangka kotak-kotak abunya).

<Preview :html='`<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full">
  <div class="animate-pulse flex space-x-4">
    <!-- Skeleton Lingkaran -->
    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
    <!-- Skeleton Baris Teks -->
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-200 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>`' />

---

## 3. Animate Ping (`animate-ping`)

Efek menyebar seperti gelombang sonar radar. Sering digunakan pada titik indikator notifikasi (Lonceng pemberitahuan / *Online Status*).

<Preview :html='`<!-- Perhatikan indikator merah kecil di sudut kanan atas amplop -->
<span class="relative inline-block mt-4 ml-4">
  <span class="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
    <!-- Lingkaran efek ping -->
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
    <!-- Lingkaran statis -->
    <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
  </span>
  <span class="bg-gray-200 font-bold rounded-lg p-3 inline-block">📩 Pesan</span>
</span>`' />

---

## 4. Animate Bounce (`animate-bounce`)

Efek melompat naik-turun. Berguna untuk mengarahkan pandangan *user*, misalnya panah menunjuk ke bawah ("Scroll Down") pada landing page.

<Preview :html='`<div class="flex justify-center p-8">
  <svg class="animate-bounce w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
  </svg>
</div>`' />
