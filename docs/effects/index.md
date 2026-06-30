# Transitions

Transisi (Transition) adalah cara paling mudah untuk membuat animasi perubahan *state* (seperti saat tombol di-*hover*). Tanpa transisi, perubahan warna atau bentuk akan terjadi secara tiba-tiba dan terasa kaku.

---

## 1. Menambahkan Transisi (`transition`)

Untuk mengaktifkan animasi transisi pada sebuah elemen, Anda WAJIB menambahkan class `transition`. 

Secara *default*, class ini akan menganimasi perubahan *color*, *background-color*, *border-color*, *opacity*, *box-shadow*, dan *transform*.

```html
<div class="flex gap-4">
  <!-- Kaku (Tanpa transition) -->
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Kaku (Tanpa Transisi)
  </button>

  <!-- Halus (Dengan transition) -->
  <button class="transition bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Halus (Ada Transisi)
  </button>
</div>
```

<div class="preview-box">
<div class="flex flex-wrap gap-4">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Kaku (Tanpa Transisi)
  </button>
  <button class="transition bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Halus (Ada Transisi)
  </button>
</div>
</div>

---

## 2. Durasi Animasi (`duration-*`)

Secara *default*, durasi transisi di Tailwind adalah **150ms** (sangat cepat). Anda bisa mengaturnya agar lebih lambat menggunakan awalan `duration-`:

- `duration-75` (75ms)
- `duration-150` (150ms - default)
- `duration-300` (300ms)
- `duration-500` (Setengah detik)
- `duration-1000` (1 detik penuh)

```html
<div class="flex gap-4">
  <button class="transition duration-150 hover:bg-green-600 bg-green-400 text-white font-bold py-2 px-4 rounded">
    Cepat (150ms)
  </button>

  <button class="transition duration-1000 hover:bg-green-600 bg-green-400 text-white font-bold py-2 px-4 rounded">
    Sangat Lambat (1 Detik)
  </button>
</div>
```

<div class="preview-box">
<div class="flex gap-4">
  <button class="transition duration-150 hover:bg-green-600 bg-green-400 text-white font-bold py-2 px-4 rounded">
    Cepat (150ms)
  </button>
  <button class="transition duration-1000 hover:bg-green-600 bg-green-400 text-white font-bold py-2 px-4 rounded">
    Sangat Lambat (1 Detik)
  </button>
</div>
</div>

---

## 3. Timing Function (`ease-*`)

*Timing Function* menentukan kurva percepatan animasi. Apakah animasi dimulai lambat lalu cepat, atau sebaliknya?

- `ease-linear`: Kecepatan konstan dari awal sampai akhir.
- `ease-in`: Mulai lambat, lalu di akhir cepat.
- `ease-out`: Mulai cepat, lalu mengerem pelan-pelan di akhir.
- `ease-in-out`: (Default Tailwind) Mulai lambat, cepat di tengah, lalu lambat lagi di akhir. Sangat natural.

```html
<!-- Hover area kuning ini untuk melihat perbandingan kurva pergerakan -->
<div class="group bg-yellow-100 p-4 border border-yellow-300 rounded space-y-4 cursor-pointer overflow-hidden">
  <div class="w-16 h-8 bg-blue-500 text-white text-xs flex items-center justify-center rounded 
              transition-transform duration-1000 ease-linear group-hover:translate-x-[200px]">
    Linear
  </div>
  
  <div class="w-16 h-8 bg-purple-500 text-white text-xs flex items-center justify-center rounded 
              transition-transform duration-1000 ease-out group-hover:translate-x-[200px]">
    Ease-Out
  </div>
</div>
```

<div class="preview-box">
<div class="group bg-yellow-100 p-4 border border-yellow-300 rounded space-y-4 cursor-pointer overflow-hidden">
  <div class="w-16 h-8 bg-blue-500 text-white text-xs flex items-center justify-center rounded transition-transform duration-1000 ease-linear group-hover:translate-x-[200px]">Linear</div>
  <div class="w-16 h-8 bg-purple-500 text-white text-xs flex items-center justify-center rounded transition-transform duration-1000 ease-out group-hover:translate-x-[200px]">Ease-Out</div>
</div>
</div>
