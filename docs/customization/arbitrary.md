---
title: Arbitrary Values & Custom Utilities
description: Nilai arbitrary, arbitrary variant, custom utility dengan @utility, dan @apply.
---

# Arbitrary Values & Custom Utilities

Terkadang, Anda membutuhkan nilai yang sangat spesifik — misalnya lebar `743px` atau warna HEX dari desain Figma klien — yang tidak ada di *default palette* Tailwind. Di sinilah fitur **Arbitrary Value** sangat berguna.

---

## 1. Arbitrary Value (Nilai Semaunya)

Gunakan tanda kurung siku `[...]` untuk memasukkan nilai CSS apapun langsung ke dalam class Tailwind.

Format: `property-[nilaiCSS]`

Contoh:
- `w-[743px]` → lebar 743px
- `bg-[#1a1a2e]` → background warna hex
- `text-[clamp(1rem,2vw,2rem)]` → ukuran font responsif
- `grid-cols-[200px_1fr_200px]` → kolom grid custom
- `top-[calc(100%-2rem)]` → posisi kalkulasi

<Preview :html='`<div class="flex flex-wrap gap-4 items-end">
  <div class="w-[120px] h-[80px] bg-[#e11d48] rounded-[12px] flex items-center justify-center text-white font-bold text-sm shadow-md">
    120 x 80px
  </div>
  <div class="w-[200px] h-[60px] bg-[#7c3aed] rounded-[50px] flex items-center justify-center text-white font-bold text-sm shadow-md">
    200 x 60px (Pil)
  </div>
  <div class="w-[150px] h-[150px] bg-[linear-gradient(135deg,_#667eea_0%,_#764ba2_100%)] rounded-full flex items-center justify-center text-white font-bold text-sm text-center p-2 shadow-md">
    Gradient Kustom
  </div>
</div>`' />

---

## 2. Arbitrary Variant (Selektor Semaunya)

Selain *value*, Anda juga bisa menulis **selektor CSS arbitrer** menggunakan `[&...]` sebagai *modifier*.

Contoh umum:
- `[&>li]:mb-2` → Setiap `<li>` anak langsung mendapat margin-bottom
- `[&:nth-child(odd)]:bg-gray-100` → Baris ganjil berwarna abu
- `[&_p]:text-sm` → Setiap `<p>` di dalam elemen ini berukuran kecil

<Preview :html='`<ul class="space-y-0 [&>li]:p-3 [&>li]:border-b [&>li:last-child]:border-0 [&>li:nth-child(odd)]:bg-gray-50 [&>li:hover]:bg-blue-50 [&>li]:transition border rounded-lg overflow-hidden cursor-pointer">
  <li>Item Pertama (ganjil → abu)</li>
  <li>Item Kedua (genap → putih)</li>
  <li>Item Ketiga (ganjil → abu)</li>
  <li>Item Keempat (genap → putih)</li>
  <li>Item Kelima (ganjil → abu)</li>
</ul>`' />

---

## 3. Membuat Custom Utility dengan `@utility`

Di Tailwind v4, Anda bisa membuat utilitas *custom* Anda sendiri menggunakan direktif `@utility` di file CSS:

```css
/* Definisikan di file CSS Anda */
@utility text-gradient {
  background: linear-gradient(to right, #6366f1, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@utility scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
```

Setelah didefinisikan, Anda menggunakannya persis seperti class Tailwind lainnya:

```html
<h1 class="text-4xl font-black text-gradient">
  Teks Gradasi Indah
</h1>
```

> **Catatan:** `@utility` di Tailwind v4 menggantikan `@layer utilities` yang digunakan di v3. Utilitas yang didefinisikan dengan `@utility` akan otomatis ikut aturan *tree-shaking* Tailwind (hanya dimasukkan ke output jika benar-benar dipakai).

---

## 4. Custom CSS dan `@apply`

Jika Anda merasa sebuah kombinasi class terlalu sering diulang, Anda bisa mengekstraknya ke dalam class CSS biasa menggunakan `@apply`:

```css
/* Contoh: Membuat class .btn-primary reusable */
.btn-primary {
  @apply bg-blue-600 text-white font-bold py-2 px-6 rounded-lg 
         hover:bg-blue-700 transition shadow-md active:scale-95;
}

.btn-outline {
  @apply border-2 border-blue-600 text-blue-600 font-bold py-2 px-6 rounded-lg 
         hover:bg-blue-600 hover:text-white transition;
}
```

Lalu di HTML cukup tulis satu class:
```html
<button class="btn-primary">Primary</button>
<button class="btn-outline">Outline</button>
```

> **⚠️ Peringatan:** Tim Tailwind sendiri **tidak merekomendasikan** penggunaan `@apply` secara berlebihan karena bertentangan dengan filosofi Utility-First. Gunakan hanya jika Anda benar-benar membutuhkan abstraksi class (misal: di komponen yang di-render oleh *server-side* framework seperti Laravel Blade, di mana Anda tidak menggunakan komponen Vue/React).
