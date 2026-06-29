# Typography & Colors

Tampilan teks dan kombinasi warna adalah kunci utama sebuah website terlihat estetik dan profesional. Tailwind CSS menyediakan sistem tipografi dan *color palette* bawaan yang luar biasa indah.

---

## 1. Font Size (Ukuran Teks)

Tailwind menggabungkan ukuran font (`font-size`) dan jarak antar baris (`line-height`) ke dalam satu class, sehingga teks selalu proporsional dan enak dibaca.

Gunakan awalan `text-*`:
- `text-xs`, `text-sm`, `text-base` (default), `text-lg`, `text-xl`
- `text-2xl`, `text-3xl`, hingga `text-9xl` untuk judul raksasa.

```html
<div class="space-y-4">
  <p class="text-xs">Teks ekstra kecil (text-xs)</p>
  <p class="text-base">Teks ukuran normal (text-base)</p>
  <p class="text-2xl">Teks judul (text-2xl)</p>
  <p class="text-5xl">Teks sangat besar (text-5xl)</p>
</div>
```

<div class="preview-box">
<div class="space-y-4">
  <p class="text-xs">Teks ekstra kecil (text-xs)</p>
  <p class="text-base">Teks ukuran normal (text-base)</p>
  <p class="text-2xl">Teks judul (text-2xl)</p>
  <p class="text-5xl">Teks sangat besar (text-5xl)</p>
</div>
</div>

---

## 2. Font Weight (Ketebalan Teks)

Mengontrol ketebalan teks menggunakan `font-*`:
- `font-light` (300)
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)
- `font-extrabold` (800)

```html
<p class="font-light">Ini adalah teks tipis (font-light).</p>
<p class="font-normal">Ini adalah teks normal (font-normal).</p>
<p class="font-semibold">Ini adalah teks semi-tebal (font-semibold).</p>
<p class="font-extrabold">Ini adalah teks ekstra tebal (font-extrabold).</p>
```

<div class="preview-box">
<p class="font-light">Ini adalah teks tipis (font-light).</p>
<p class="font-normal">Ini adalah teks normal (font-normal).</p>
<p class="font-semibold">Ini adalah teks semi-tebal (font-semibold).</p>
<p class="font-extrabold">Ini adalah teks ekstra tebal (font-extrabold).</p>
</div>

---

## 3. Tata Letak Teks & Dekorasi

Anda bisa mengatur perataan teks (Text Align), huruf kapital (Transform), dan garis bawah/coret (Decoration) dengan mudah.

- **Align**: `text-left`, `text-center`, `text-right`, `text-justify`
- **Transform**: `uppercase` (KAPITAL), `lowercase` (kecil), `capitalize` (Huruf Awal Besar)
- **Decoration**: `underline` (garis bawah), `line-through` (dicoret), `no-underline`

```html
<p class="text-center uppercase text-blue-500 font-bold">Judul Di Tengah</p>
<p class="text-justify line-through text-gray-500 mt-2">Teks ini rata kiri-kanan namun karena class line-through, teks ini dicoret seluruhnya untuk menandakan data yang tidak valid.</p>
```

<div class="preview-box">
<p class="text-center uppercase text-blue-500 font-bold">Judul Di Tengah</p>
<p class="text-justify line-through text-gray-500 mt-2">Teks ini rata kiri-kanan namun karena class line-through, teks ini dicoret seluruhnya untuk menandakan data yang tidak valid.</p>
</div>

---

## 4. Warna Teks (`text-*`) dan Background (`bg-*`)

Tailwind menyediakan sistem palet warna skala 50 hingga 950.
Warna dasar: `slate`, `gray`, `zinc`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`.
Warna netral/mutlak: `white`, `black`, `transparent`.

Format penulisan warna: `[properti]-[namaWarna]-[skala]`
- Warna Teks: `text-blue-500`, `text-white`, `text-slate-800`
- Warna Background: `bg-red-200`, `bg-black`, `bg-emerald-500`

### Contoh Kombinasi Warna

Pastikan kontras warna dapat terbaca. Background gelap harus diikuti teks terang, dan sebaliknya.

```html
<div class="flex gap-4">
  <div class="bg-red-100 text-red-800 p-4 rounded-md">Error Alert</div>
  <div class="bg-green-600 text-white p-4 rounded-md">Success Button</div>
  <div class="bg-black text-yellow-400 p-4 rounded-md font-bold">VIP Card</div>
</div>
```

<div class="preview-box">
<div class="flex gap-4 font-medium">
  <div class="bg-red-100 text-red-800 p-4 rounded-md">Error Alert</div>
  <div class="bg-green-600 text-white p-4 rounded-md">Success Button</div>
  <div class="bg-black text-yellow-400 p-4 rounded-md font-bold">VIP Card</div>
</div>
</div>
