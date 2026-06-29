# Border & Shadow

Garis tepi (Border) dan bayangan (Shadow) adalah elemen penting untuk memisahkan konten, membuat elemen seperti "kartu" (Card) atau "tombol" tampak menonjol dan lebih interaktif (3D feel).

---

## 1. Border Width & Color

Untuk membuat garis tepi, Anda harus mengombinasikan dua hal:
1. Ketebalan garis (`border`, `border-2`, `border-4`, `border-t-2`)
2. Warna garis (`border-gray-300`, `border-blue-500`)

> **Catatan:** Jika Anda hanya menulis `border`, tebalnya adalah `1px`. Jika tidak diberi warna, secara *default* akan berwarna abu-abu muda (`border-gray-200`).

```html
<div class="grid grid-cols-3 gap-4 text-center">
  <div class="border p-4">Border Default</div>
  <div class="border-2 border-red-500 p-4">Border 2px Merah</div>
  <div class="border-l-4 border-b-4 border-blue-500 p-4">Border Kiri & Bawah</div>
</div>
```

<div class="preview-box">
<div class="grid grid-cols-3 gap-4 text-center font-medium">
  <div class="border p-4">Border Default</div>
  <div class="border-2 border-red-500 p-4">Border 2px Merah</div>
  <div class="border-l-4 border-b-4 border-blue-500 p-4">Border Kiri & Bawah</div>
</div>
</div>

---

## 2. Border Radius (Melengkungkan Sudut)

Membuat sudut melengkung sangat mudah dengan properti `rounded-*`:
- `rounded-sm`, `rounded` (default), `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`
- `rounded-full` (Membulat penuh, berguna untuk foto profil bulat atau tombol "pil")

Anda juga bisa menargetkan sudut tertentu:
- `rounded-t-lg` (Top)
- `rounded-l-full` (Left)
- `rounded-tl-xl` (Top Left)

```html
<div class="flex gap-4">
  <div class="bg-indigo-500 w-16 h-16 rounded-md"></div>
  <div class="bg-indigo-500 w-16 h-16 rounded-2xl"></div>
  <div class="bg-indigo-500 w-16 h-16 rounded-full"></div>
  <!-- Rounded hanya sebagian -->
  <div class="bg-indigo-500 w-24 h-16 rounded-r-full rounded-tl-xl"></div>
</div>
```

<div class="preview-box">
<div class="flex gap-4">
  <div class="bg-indigo-500 w-16 h-16 rounded-md"></div>
  <div class="bg-indigo-500 w-16 h-16 rounded-2xl"></div>
  <div class="bg-indigo-500 w-16 h-16 rounded-full"></div>
  <div class="bg-indigo-500 w-24 h-16 rounded-r-full rounded-tl-xl"></div>
</div>
</div>

---

## 3. Outline & Ring

Selain `border`, Tailwind juga memiliki `outline` dan `ring`. 
- **Outline** biasanya muncul saat Anda melakukan klik/fokus pada Input teks.
- **Ring** (`ring-*`) bekerja menyerupai border, namun diimplementasikan menggunakan Box Shadow sehingga **tidak menambah ukuran lebar/tinggi elemen** (tidak merusak layout).

```html
<div class="flex gap-8 p-4">
  <button class="bg-blue-500 text-white px-4 py-2 rounded ring-4 ring-blue-300">
    Tombol dengan Ring
  </button>

  <input type="text" placeholder="Fokus ke input ini" class="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500" />
</div>
```

<div class="preview-box">
<div class="flex flex-wrap gap-8 p-4">
  <button class="bg-blue-500 text-white px-4 py-2 rounded ring-4 ring-blue-300">
    Tombol dengan Ring
  </button>
  <input type="text" placeholder="Fokus ke input ini" class="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500" />
</div>
</div>

---

## 4. Box Shadow (Bayangan Kotak)

Bayangan memberikan kedalaman (depth) sehingga elemen seolah-olah mengambang di atas halaman. Gunakan class `shadow-*`:
- `shadow-sm` (tipis)
- `shadow` (normal)
- `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`
- `shadow-inner` (bayangan ke dalam)
- `shadow-none` (menghilangkan bayangan)

```html
<div class="grid grid-cols-4 gap-6 bg-gray-50 p-6">
  <div class="bg-white p-4 shadow-sm text-center">Shadow SM</div>
  <div class="bg-white p-4 shadow text-center">Shadow Default</div>
  <div class="bg-white p-4 shadow-lg text-center font-bold">Shadow LG</div>
  <div class="bg-white p-4 shadow-2xl text-center text-blue-600">Shadow 2XL</div>
</div>
```

<div class="preview-box">
<div class="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-50 p-6 rounded-lg">
  <div class="bg-white p-4 shadow-sm text-center">Shadow SM</div>
  <div class="bg-white p-4 shadow text-center">Shadow Default</div>
  <div class="bg-white p-4 shadow-lg text-center font-bold">Shadow LG</div>
  <div class="bg-white p-4 shadow-2xl text-center text-blue-600">Shadow 2XL</div>
</div>
</div>
