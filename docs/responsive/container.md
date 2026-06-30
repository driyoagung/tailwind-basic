# Container & Centering Layout

Meskipun website kita responsif, kita tidak ingin teks atau artikel membentang penuh 100% dari ujung kiri ke kanan di layar monitor raksasa (24 inci ke atas) karena akan sangat sulit dibaca.

Di sinilah peran elemen pembungkus (Container) bekerja.

---

## 1. Utilitas `container`

Class `container` di Tailwind secara otomatis mengubah nilai `max-width` menyesuaikan ukuran *breakpoint* yang sedang aktif (`sm`, `md`, `lg`, dsb).
- Di layar kecil, lebarnya 100%.
- Di layar `md`, lebarnya maksimal 768px.
- Di layar `lg`, lebarnya maksimal 1024px.

> **Penting!** Secara bawaan (default), class `container` di Tailwind *tidak berada di tengah*.

---

## 2. Memposisikan Konten Ke Tengah (`mx-auto`)

Untuk membuat wadah (container) berada tepat di tengah-tengah layar, selalu gabungkan class `container` dengan `mx-auto` (margin sumbu-X: otomatis kiri-kanan).

```html
<!-- Buka layar penuh lalu ciutkan pelan-pelan -->
<div class="bg-gray-200 min-h-32 p-4">
  <div class="container mx-auto bg-blue-500 text-white p-4 text-center rounded">
    Saya adalah div dengan "container mx-auto".<br>
    Saya tidak akan membentang penuh di layar besar, melainkan berhenti pada ukuran tertentu dan memposisikan diri di tengah.
  </div>
</div>
```

<div class="preview-box">
<div class="bg-gray-200 min-h-32 p-4">
  <div class="container mx-auto bg-blue-500 text-white p-4 text-center rounded font-medium shadow-lg">
    Saya adalah div dengan "container mx-auto".<br>
    Saya tidak akan membentang penuh di layar besar, melainkan berhenti pada ukuran tertentu dan memposisikan diri di tengah.
  </div>
</div>
</div>

---

## 3. Centering dengan Flexbox (`justify-center items-center`)

Jika Anda ingin menengahkan konten (misalnya form login) tepat di tengah layar baik secara horizontal (kiri-kanan) maupun vertikal (atas-bawah), gabungkan `h-screen` dan utilitas flexbox.

```html
<div class="flex items-center justify-center bg-slate-800 p-8 h-48 rounded-xl shadow-inner">
  <div class="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <input type="text" class="w-full border p-2 mb-4 rounded" placeholder="Username">
    <button class="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700">Masuk</button>
  </div>
</div>
```

<div class="preview-box">
<div class="flex items-center justify-center bg-slate-800 p-8 h-64 rounded-xl shadow-inner">
  <div class="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <input type="text" class="w-full border p-2 mb-4 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Username">
    <button class="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700">Masuk</button>
  </div>
</div>
</div>
