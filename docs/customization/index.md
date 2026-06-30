# Theme Configuration (Kustomisasi)

Tailwind CSS dirancang untuk bisa diubah sesuai kebutuhan desain proyek Anda. Di Tailwind v4, kustomisasi dilakukan langsung melalui file CSS menggunakan **CSS Custom Properties** (variabel CSS) dan direktif `@theme`.

---

## 1. Cara Kerja @theme di Tailwind v4

Di Tailwind v3, kustomisasi dilakukan di file `tailwind.config.js`. Di **v4**, kustomisasi dipindahkan langsung ke file CSS Anda menggunakan blok `@theme`. Ini jauh lebih intuitif karena semua *styling* berada di satu tempat.

```css
/* Contoh penulisan di file CSS utama Anda */
@import "tailwindcss";

@theme {
  /* Menambahkan warna custom bernama 'brand' */
  --color-brand: #6366f1;
  --color-brand-light: #a5b4fc;
  --color-brand-dark: #4338ca;

  /* Menambahkan font custom */
  --font-heading: "Inter", sans-serif;

  /* Menambahkan ukuran spacing custom */
  --spacing-128: 32rem;
}
```

Setelah didefinisikan, Anda bisa menggunakannya seperti class Tailwind biasa:
- `bg-brand` (Background warna `#6366f1`)
- `text-brand-light` (Teks warna `#a5b4fc`)
- `font-heading` (Font Inter)
- `w-128` (Lebar 32rem)

---

## 2. Contoh Kustomisasi Warna Brand

Mari kita simulasikan penggunaan warna *brand* (misal perusahaan/startup Anda memiliki warna utama Indigo):

```html
<!-- Warna 'brand' ini didefinisikan di @theme { --color-brand: #6366f1 } -->
<div class="bg-indigo-600 text-white p-6 rounded-lg max-w-sm">
  <h3 class="text-xl font-bold mb-2">Startup Kita</h3>
  <p class="text-indigo-200 text-sm mb-4">Warna brand dapat dikustomisasi lewat @theme di Tailwind v4.</p>
  <button class="bg-white text-indigo-700 font-bold px-4 py-2 rounded hover:bg-indigo-50 transition">
    Pelajari Lebih
  </button>
</div>
```

<div class="preview-box">
<div class="bg-indigo-600 text-white p-6 rounded-lg max-w-sm">
  <h3 class="text-xl font-bold mb-2">Startup Kita</h3>
  <p class="text-indigo-200 text-sm mb-4">Warna brand dapat dikustomisasi lewat @theme di Tailwind v4.</p>
  <button class="bg-white text-indigo-700 font-bold px-4 py-2 rounded hover:bg-indigo-50 transition">
    Pelajari Lebih
  </button>
</div>
</div>

---

## 3. Kustomisasi Font Family

Secara bawaan Tailwind memberikan `font-sans`, `font-serif`, dan `font-mono`. Anda bisa menambah font kustom (misal dari Google Fonts) menggunakan `@theme`:

```css
@theme {
  --font-display: "Poppins", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

Lalu di HTML Anda cukup tulis `font-display` atau `font-body`:

```html
<div class="font-sans">
  <h1 class="text-3xl font-bold mb-2">Judul dengan Font Default</h1>
  <p class="text-gray-600">Paragraf dengan font standar (Sans-serif bawaan Tailwind).</p>
</div>
```

<div class="preview-box">
<div>
  <h1 class="text-3xl font-bold mb-2">Judul dengan Font Default</h1>
  <p class="text-gray-600">Paragraf dengan font standar (Sans-serif bawaan Tailwind).</p>
</div>
</div>

---

## 4. Kustomisasi Spacing & Border Radius

Anda juga bisa menambahkan skala *Spacing* dan *Border Radius* yang tidak ada di default:

```css
@theme {
  /* Spacing */
  --spacing-18: 4.5rem;   /* 72px */
  --spacing-88: 22rem;    /* 352px */
  --spacing-128: 32rem;   /* 512px */

  /* Border Radius */
  --radius-4xl: 2rem;     /* Sangat melengkung */
}
```

Hasil pemakaian: `p-18`, `w-88`, `rounded-4xl`.

---

## 5. Kustomisasi Shadow

```css
@theme {
  --shadow-brutal: 4px 4px 0px 0px #000;
  --shadow-glow: 0 0 15px rgba(99, 102, 241, 0.5);
}
```

Contoh pemakaian `shadow-brutal` (efek *Brutalism Design*):

```html
<div class="bg-yellow-300 p-6 border-2 border-black shadow-[4px_4px_0px_0px_#000] max-w-xs font-bold text-lg">
  Brutalist Design Card
</div>
```

<div class="preview-box">
<div class="bg-yellow-300 p-6 border-2 border-black shadow-[4px_4px_0px_0px_#000] max-w-xs font-bold text-lg hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] transition-all cursor-pointer">
  Brutalist Design Card
</div>
</div>
