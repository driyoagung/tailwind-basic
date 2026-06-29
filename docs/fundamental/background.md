# Background Lanjutan

Kita sudah mempelajari cara menggunakan `bg-color` sebelumnya, namun properti background di CSS jauh lebih kaya daripada sekadar warna solid. Tailwind memiliki utilitas untuk gradasi (gradient), gambar latar (image), dan opacity.

---

## 1. Background Opacity

Kadang kita menginginkan warna background yang tembus pandang atau transparan, namun kita tidak ingin mengubah transparansi teks di dalamnya (jika menggunakan `opacity-*`, semua teks di dalamnya ikut transparan).

Caranya adalah dengan memberikan `/angka` di akhir warna background Anda:
- `bg-blue-500/50` (50% opacity)
- `bg-black/80` (80% opacity)
- `bg-white/10` (Sangat transparan)

> Fitur `/opacity` ini adalah salah satu fitur terbaik Tailwind dan juga berlaku untuk teks (`text-blue-500/80`) serta border (`border-black/20`).

```html
<div class="relative bg-[url('https://images.unsplash.com/photo-1506744626753-14072229246a?w=600')] bg-cover bg-center h-48 rounded-xl p-4 flex items-end">
  <!-- Overlay transparan (black 60%) namun teks tetap solid 100% -->
  <div class="bg-black/60 w-full p-4 rounded-lg backdrop-blur-sm">
    <h3 class="text-white text-xl font-bold">Pemandangan Alam</h3>
    <p class="text-white/80 text-sm">Background gelap dengan teks terang yang tajam.</p>
  </div>
</div>
```

<div class="preview-box">
<div class="relative bg-[url('https://images.unsplash.com/photo-1506744626753-14072229246a?w=600')] bg-cover bg-center h-48 rounded-xl p-4 flex items-end">
  <div class="bg-black/60 w-full p-4 rounded-lg backdrop-blur-sm">
    <h3 class="text-white text-xl font-bold">Pemandangan Alam</h3>
    <p class="text-white/80 text-sm">Background gelap dengan teks terang yang tajam.</p>
  </div>
</div>
</div>

---

## 2. Background Gradient

Gradasi (Gradient) adalah perpaduan dua warna atau lebih. Tailwind membuatnya sangat ringkas dengan mendefinisikan arah gradien (`bg-gradient-to-*`) dan titik warna (`from-*`, `via-*`, `to-*`).

Arah Gradien:
- `bg-gradient-to-t` (ke atas / *top*)
- `bg-gradient-to-r` (ke kanan / *right*)
- `bg-gradient-to-b` (ke bawah / *bottom*)
- `bg-gradient-to-l` (ke kiri / *left*)
- Mendukung diagonal juga: `bg-gradient-to-tr` (top-right), `bg-gradient-to-br`, dll.

Titik Warna:
1. `from-{color}`: Warna awal
2. `via-{color}`: (Opsional) Warna di tengah
3. `to-{color}`: (Opsional) Warna akhir. Jika tidak diisi, otomatis memudar menjadi transparan.

```html
<div class="grid grid-cols-2 gap-4">
  <!-- 2 Warna -->
  <div class="h-24 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-md">
    Cyan ke Blue
  </div>

  <!-- 3 Warna -->
  <div class="h-24 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white font-bold shadow-md">
    Purple - Pink - Orange
  </div>
</div>
```

<div class="preview-box">
<div class="grid grid-cols-2 gap-4">
  <div class="h-24 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-md text-center px-2">
    Cyan ke Blue
  </div>
  <div class="h-24 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white font-bold shadow-md text-center px-2">
    Purple - Pink - Orange
  </div>
</div>
</div>

---

## 3. Background Image & Utilities

Jika Anda menggunakan gambar sebagai background, Anda perlu mengatur properti bawaan CSS untuk memposisikannya.

- `bg-cover`: Memastikan gambar memenuhi ruang secara proporsional.
- `bg-contain`: Memastikan seluruh gambar muat di dalam ruang (bisa ada ruang kosong).
- `bg-center`, `bg-top`, `bg-bottom`: Mengatur posisi fokus gambar.
- `bg-no-repeat`: Mencegah gambar diulang-ulang.

> Anda bisa menggunakan kelas *arbitrary* `bg-[url('...')]` di Tailwind v3 ke atas untuk memasukkan link gambar secara langsung tanpa perlu menulisnya di file `.css`. (Lihat contoh di bagian 1 atas).
