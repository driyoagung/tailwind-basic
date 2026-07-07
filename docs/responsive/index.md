---
title: Responsive Utilities & Breakpoints
description: Sistem responsive Tailwind CSS — mobile-first, 5 breakpoint, max-variant, container queries, dan strategi responsif modern.
---

# Responsive Utilities & Breakpoints

Fitur yang paling membuat Tailwind CSS dicintai adalah sistem **Responsive Design**-nya yang sangat mudah. Tailwind memakai pendekatan **Mobile First**: gaya standar (tanpa awalan) berlaku mulai layar terkecil, lalu Anda menambah awalan *breakpoint* untuk menimpa gaya pada layar yang lebih besar.

---

## 1. Breakpoints Standar Tailwind

Lima ukuran layar bawaan (semua `min-width`, berarti berlaku ke atas):

| Prefix | Min-width | Analogi perangkat |
| --- | --- | --- |
| (tanpa) | `0px` | Semua perangkat (base) |
| `sm:` | `640px` | HP layar lebar / tablet potret |
| `md:` | `768px` | Tablet landscape |
| `lg:` | `1024px` | Laptop kecil |
| `xl:` | `1280px` | Desktop standar |
| `2xl:` | `1536px` | Layar ekstra besar |

Coba kecilkan/perlebar jendela browser — ruler di bawah menunjukkan breakpoint mana yang sedang aktif:

<BreakpointRuler />

---

## 2. Pendekatan Mobile First

Bikin kotak: di HP merah, di tablet hijau, di laptop biru. Cukup tulis berurutan dari kecil ke besar:

`bg-red-500 md:bg-green-500 lg:bg-blue-500`

- `bg-red-500` → `0px` s/d `767px`
- `md:bg-green-500` → menimpa mulai `768px` s/d `1023px`
- `lg:bg-blue-500` → menimpa mulai `1024px` ke atas

<Preview :html='`<div class="p-6 text-center text-white font-bold text-xl rounded-xl shadow-lg transition-colors duration-500 bg-red-500 md:bg-green-500 lg:bg-blue-500">
  <p class="block md:hidden lg:hidden">Ini Layar Mobile (Kecil)</p>
  <p class="hidden md:block lg:hidden">Ini Layar Tablet (Sedang)</p>
  <p class="hidden md:hidden lg:block">Ini Layar Desktop (Besar)</p>
</div>`' />

::: tip Kenapa Mobile First?
Gaya tanpa prefix = base. Setiap prefix (`sm:`, `md:`, ...) hanya **menambah/menimpa** ke atas. Jadi urutan CSS alami: yang besar selalu menimpa yang kecil. Tidak perlu `@media (max-width)` yang rentan konflik cascade.
:::

---

## 3. Menyembunyikan Elemen (Responsive Hide)

Kombinasi `hidden` + `block`/`flex` untuk tampil/sembunyi per breakpoint. Pola klasik: menu hamburger di mobile, menu teks di desktop.

<Preview :html='`<nav class="flex justify-between items-center bg-gray-800 p-4 text-white rounded">
  <div class="font-bold">Logo</div>
  <ul class="hidden md:flex gap-6">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
  <button class="block md:hidden bg-gray-700 px-3 py-1 rounded">☰ Menu</button>
</nav>`' />

---

## 4. `max-*` Variant (kebalikan Mobile First)

Selain `min-width` (default), Tailwind menyediakan `max-*` untuk `max-width`. Berguna saat Anda pikir dari desktop ke mobile.

| Prefix | Max-width | Berlaku di bawah |
| --- | --- | --- |
| `max-sm:` | `639.98px` | base s/d sm |
| `max-md:` | `767.98px` | s/d md |
| `max-lg:` | `1023.98px` | s/d lg |
| `max-xl:` | `1279.98px` | s/d xl |
| `max-2xl:` | `1535.98px` | s/d 2xl |

<Preview :html='`<div class="bg-teal-500 max-md:bg-rose-500 text-white p-6 rounded-xl text-center font-bold">
  max-md:bg-rose-500 → merah di bawah 768px, teal di atasnya
</div>`' />

::: warning Jangan campur `sm:` dengan `max-sm:` sembarangan
`sm:` = min-width 640, `max-sm:` = max-width 639.98. Keduanya **tidak tumpang tindih** — ada gap kecil di antaranya yang bisa bikin bingung jika dipakai bersamaan pada properti sama. Pilih satu arah (mobile-first `min` ATAU desktop-first `max`) per properti.
:::

---

## 5. Container Queries (`@container`)

Container queries membuat elemen responsif terhadap **lebar parent-nya**, bukan lebar viewport. Ini revolusi untuk komponen yang dipakai di banyak konteks (mis. kartu yang sama di sidebar sempit dan konten lebar).

Langkah: parent diberi `@container`, anak diberi variant `@sm:`, `@md:`, `@lg:` (mirip breakpoint tapi terhadap container).

<Preview :html='`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="@container border border-gray-300 rounded-lg p-4">
    <p class="text-xs text-gray-400 mb-2">Kartu di kolom sempit</p>
    <div class="@sm:bg-blue-500 bg-gray-400 text-white p-3 rounded text-center text-sm">
      @sm:biru (saat container ≥24rem)
    </div>
  </div>
  <div class="@container border border-gray-300 rounded-lg p-4">
    <p class="text-xs text-gray-400 mb-2">Kartu di kolom lebar</p>
    <div class="@sm:bg-blue-500 bg-gray-400 text-white p-3 rounded text-center text-sm">
      @sm:biru (saat container ≥24rem)
    </div>
  </div>
</div>`' />

Kecilkan viewport: saat dua kolom menyatu jadi satu, container masing-masing kartu melebar → `@sm:` terpicu walau viewport kecil. Inilah bedanya dengan `sm:` biasa.

::: tip Kapan pakai container queries?
Saat sebuah komponen (card, widget) harus tampil beda tergantung **tempat ia ditaruh**, bukan ukuran layar. Untuk layout level halaman, breakpoint viewport (`sm:`, `md:`) masih lebih tepat.
:::

---

## 6. Strategi Responsif Praktis

1. **Desain mobile dulu, baru tambah.** Tulis base class untuk HP, lalu tambah `md:`/`lg:` untuk perangkat besar. Lebih sedikit override, lebih sedikit bug.
2. **Satu properti, satu arah.** Jangan `text-sm md:text-lg max-md:text-xs` pada elemen yang sama — pilih mobile-first (`text-sm md:text-lg`) saja.
3. **Grid untuk layout adaptif.** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` lebih bersih daripada flex + width manual.
4. **Hindari fixed width di mobile.** Pakai `w-full`, `max-w-*`, bukan `w-96` yang bisa overflow di HP.
5. **Test di devtools.** Gunakan mode responsive di browser, bukan hanya maximize.
6. **`container mx-auto` untuk batas baca.** Konten teks jangan membentang 100% di monitor 4K — bungkus dengan `container mx-auto` (lihat [Container & Centering](/responsive/container)).

---

## Eksperimen Sendiri

Ubah breakpoint di playground. Ganti `md:` jadi `lg:`, atau coba `max-md:`. Ubah viewport (sm/md/lg/full) untuk lihat perubahan.

<Playground :default='`<div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-100 rounded-lg">
  <div class="bg-indigo-500 text-white p-4 rounded text-center">1</div>
  <div class="bg-indigo-500 text-white p-4 rounded text-center">2</div>
  <div class="bg-indigo-500 text-white p-4 rounded text-center">3</div>
</div>`' />

Langkah berikutnya: pelajari [Container & Centering](/responsive/container) dan [Responsive Layout Lanjutan](/responsive/layout).
