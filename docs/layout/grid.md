# Grid (2-Dimensional Layout)

Jika Flexbox adalah tentang merapikan sebaris elemen, **CSS Grid** (`grid`) diciptakan untuk membagi ruangan menjadi matriks dua dimensi (baris dan kolom sekaligus). Sangat sempurna untuk Layout Galeri Foto, Dashboard, maupun struktur kerangka utama halaman web.

---

## 1. Membuat Container Grid

Gunakan class `grid`. Untuk menentukan jumlah kolom, kita gunakan utilitas `grid-cols-*`.

- `grid-cols-2`: Membagi ruangan menjadi 2 kolom sama besar.
- `grid-cols-3`: 3 kolom.
- `grid-cols-4`: 4 kolom.

> Jarak antar kotak juga dikontrol menggunakan `gap-*`.

```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-purple-500 text-white p-4 rounded text-center">1</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">2</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">3</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">4</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">5</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">6</div>
</div>
```

<div class="preview-box">
<div class="grid grid-cols-3 gap-4 font-bold text-xl">
  <div class="bg-purple-500 text-white p-4 rounded text-center">1</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">2</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">3</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">4</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">5</div>
  <div class="bg-purple-500 text-white p-4 rounded text-center">6</div>
</div>
</div>

---

## 2. Span (Merentangkan Kolom atau Baris)

Satu elemen bisa dibuat mengambil lebih dari 1 jatah kolom atau baris menggunakan `col-span-*` atau `row-span-*`. Hal ini menyerupai fitur "Merge Cells" di Excel.

```html
<div class="grid grid-cols-4 gap-4">
  <!-- Elemen ini mengambil jatah 2 kolom -->
  <div class="col-span-2 bg-rose-500 text-white p-4 rounded text-center">Span 2 Kolom</div>
  <div class="bg-rose-400 text-white p-4 rounded text-center">Normal</div>
  <div class="bg-rose-400 text-white p-4 rounded text-center">Normal</div>
  
  <div class="bg-rose-400 text-white p-4 rounded text-center">Normal</div>
  <!-- Elemen ini mengambil jatah 3 kolom (Penuh karena sisa 3) -->
  <div class="col-span-3 bg-rose-600 text-white p-4 rounded text-center">Span 3 Kolom</div>
</div>
```

<div class="preview-box">
<div class="grid grid-cols-4 gap-4 font-bold">
  <div class="col-span-2 bg-rose-500 text-white p-4 rounded text-center shadow">Span 2 Kolom</div>
  <div class="bg-rose-400 text-white p-4 rounded text-center">Normal</div>
  <div class="bg-rose-400 text-white p-4 rounded text-center">Normal</div>
  <div class="bg-rose-400 text-white p-4 rounded text-center">Normal</div>
  <div class="col-span-3 bg-rose-600 text-white p-4 rounded text-center shadow">Span 3 Kolom</div>
</div>
</div>

---

## 3. Contoh Bermanfaat: Layout Dashboard Sederhana

Grid membuat penyusunan layout sidebar dan konten utama menjadi sangat sepele.

```html
<div class="grid grid-cols-5 gap-4 h-64">
  <!-- Sidebar mengambil 1 jatah kolom -->
  <div class="col-span-1 bg-slate-800 text-white p-4 rounded-lg">
    <h3 class="font-bold border-b border-slate-600 pb-2 mb-4">Sidebar</h3>
    <ul class="space-y-2 text-sm text-slate-300">
      <li>Menu 1</li>
      <li>Menu 2</li>
      <li>Menu 3</li>
    </ul>
  </div>
  
  <!-- Konten Utama mengambil sisa 4 jatah kolom -->
  <div class="col-span-4 bg-slate-100 p-6 rounded-lg border border-slate-200">
    <h1 class="text-2xl font-bold mb-2">Konten Utama</h1>
    <p class="text-slate-600">Tidak ada lagi hitung-hitungan float atau presentase lebar. Grid menangani semuanya dengan akurat.</p>
  </div>
</div>
```

<div class="preview-box">
<div class="grid grid-cols-5 gap-4 h-64">
  <div class="col-span-1 bg-slate-800 text-white p-4 rounded-lg">
    <h3 class="font-bold border-b border-slate-600 pb-2 mb-4">Sidebar</h3>
    <ul class="space-y-2 text-sm text-slate-300">
      <li>Menu 1</li>
      <li>Menu 2</li>
      <li>Menu 3</li>
    </ul>
  </div>
  <div class="col-span-4 bg-slate-100 p-6 rounded-lg border border-slate-200">
    <h1 class="text-2xl font-bold mb-2">Konten Utama</h1>
    <p class="text-slate-600">Tidak ada lagi hitung-hitungan float atau presentase lebar. Grid menangani semuanya dengan akurat.</p>
  </div>
</div>
</div>
