# Transform

Modul `transform` di CSS digunakan untuk mengubah bentuk visual suatu elemen (memperbesar, memutar, memiringkan, memindahkan letaknya) **tanpa merusak susunan tata letak (layout) elemen lain di sekitarnya**.

> **Note:** Di Tailwind CSS v3 ke atas, Anda tidak perlu lagi menambahkan class `transform` sebelum menggunakan properti di bawah ini. Cukup langsung tulis propertinya!

---

## 1. Scale (Memperbesar / Memperkecil)

Gunakan awalan `scale-*` (100 = 100% atau ukuran asli).
- `scale-110`: Membesar 10%
- `scale-90`: Mengecil 10%

Sangat sering digabungkan dengan `hover:`.

```html
<div class="flex gap-4">
  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" 
       class="w-32 rounded-lg transition duration-300 hover:scale-110 shadow-lg">
       
  <button class="bg-indigo-500 text-white px-4 py-2 rounded-lg font-bold transition duration-150 hover:scale-95 active:scale-90">
    Hover Me
  </button>
</div>
```

<div class="preview-box">
<div class="flex gap-8 items-center">
  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" class="w-32 rounded-lg transition duration-300 hover:scale-110 shadow-lg cursor-pointer">
  <button class="bg-indigo-500 text-white px-4 py-2 rounded-lg font-bold transition duration-150 hover:scale-95 active:scale-90">
    Hover Me
  </button>
</div>
</div>

---

## 2. Rotate (Memutar)

Gunakan awalan `rotate-*` (dalam hitungan derajat/deg).
- `rotate-45`: Memutar searah jarum jam 45 derajat.
- `rotate-180`: Memutar terbalik ke bawah.
- Gunakan `-` di depan untuk memutar berlawanan arah jarum jam: `-rotate-90`.

```html
<button class="group bg-blue-100 p-4 rounded-full transition hover:bg-blue-200">
  <!-- Ikon Panah yang berputar saat parent di-hover -->
  <svg class="w-8 h-8 text-blue-600 transition duration-500 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
  </svg>
</button>
```

<div class="preview-box">
<button class="group bg-blue-100 p-4 rounded-full transition hover:bg-blue-200">
  <svg class="w-8 h-8 text-blue-600 transition duration-500 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
  </svg>
</button>
</div>

---

## 3. Translate (Menggeser Posisi)

Translate digunakan untuk menggeser elemen dari posisi aslinya tanpa mengganggu elemen lain.
- `translate-x-*`: Geser kiri/kanan (Contoh: `translate-x-4` geser ke kanan 1rem).
- `translate-y-*`: Geser atas/bawah (Contoh: `-translate-y-2` geser ke atas 0.5rem).

```html
<div class="flex gap-4 p-8 pt-12 border rounded-lg bg-gray-50">
  <!-- Menggeser ke atas saat dihover -->
  <div class="w-24 h-24 bg-rose-400 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-4">
    Geser Ke Atas
  </div>
  
  <!-- Menggeser ke kanan -->
  <div class="w-24 h-24 bg-cyan-400 rounded-lg shadow-md transition-transform duration-300 hover:translate-x-4">
    Geser Ke Kanan
  </div>
</div>
```

<div class="preview-box">
<div class="flex gap-4 p-8 pt-12 border rounded-lg bg-gray-50 text-white font-bold text-center">
  <div class="w-24 h-24 bg-rose-400 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-4 flex items-center justify-center p-2 cursor-pointer">
    Geser Ke Atas
  </div>
  <div class="w-24 h-24 bg-cyan-400 rounded-lg shadow-md transition-transform duration-300 hover:translate-x-4 flex items-center justify-center p-2 cursor-pointer">
    Geser Ke Kanan
  </div>
</div>
</div>
