---
title: Best Practice
description: Praktik terbaik Tailwind CSS — utility ordering, extract component, @apply, konsistensi spacing/typography, design tokens, accessibility, dan performance.
---

# Best Practice

Setelah menguasai utility Tailwind, saatnya belajar **praktik terbaik** agar kode bersih, konsisten, dan accessible.

---

## 1. Urutan Class (Utility Ordering)

Class yang berantakan menyulitkan maintenance. Adopsi konvensi urutan yang konsisten:

1. **Layout**: `flex`, `grid`, `block`, `hidden`
2. **Positioning**: `relative`, `absolute`, `top-*`, `z-*`
3. **Box model**: `w-*`, `h-*`, `p-*`, `m-*`, `border-*`
4. **Typography**: `text-*`, `font-*`, `leading-*`, `tracking-*`
5. **Colors**: `bg-*`, `text-*`, `border-*`
6. **Effects**: `shadow-*`, `rounded-*`, `opacity-*`
7. **State**: `hover:*`, `focus:*`, `md:*`, `lg:*`

```html
<!-- Contoh urutan konsisten -->
<button class="flex items-center gap-2 relative z-10
               w-auto px-4 py-2
               text-sm font-semibold
               bg-blue-600 text-white
               rounded-lg shadow-md
               hover:bg-blue-700 focus:ring-2 focus:ring-blue-300
               md:text-base transition">
  Klik Saya
</button>
```

::: tip Tooling
Plugin ESLint `eslint-plugin-tailwindcss` atau Prettier plugin `prettier-plugin-tailwindcss` dapat mengurutkan class otomatis.
:::

---

## 2. Ekstrak Komponen

Saat kombinasi class berulang 3+ kali, ekstrak ke komponen — **bukan** ke CSS class.

### Buruk: inline berulang
```html
<button class="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition">A</button>
<button class="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition">B</button>
<button class="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition">C</button>
```

### Baik: komponen (Vue/React/Blade)
```html
<!-- Vue -->
<Button variant="primary">A</Button>
<Button variant="primary">B</Button>
<Button variant="primary">C</Button>
```

```html
<!-- Blade -->
<x-button variant="primary">A</x-button>
<x-button variant="primary">B</x-button>
<x-button variant="primary">C</x-button>
```

---

## 3. Kapan Pakai `@apply`

Tim Tailwind **tidak merekomendasikan** `@apply` berlebihan. Namun ada kasus legitimate:

**Gunakan `@apply` saat:**
- Anda di template engine yang tidak mendukung komponen (mis. raw HTML, PHP murni).
- Class Tailwind sangat panjang dan diulang persis sama 5+ kali.
- Integrasi dengan library pihak ketiga yang butuh class CSS biasa.

**JANGAN gunakan saat:**
- Framework punya sistem komponen (Vue, React, Blade components).
- Cuma "merapikan" — itu tugas komponen, bukan CSS abstraction.

```css
/* Acceptable: reset pihak ketiga */
.third-party-datepicker { @apply !bg-white !border !rounded-lg !p-2; }
```

---

## 4. Konsistensi Spacing & Typography

Pakai **skala spacing Tailwind** secara konsisten — jangan campur pixel manual.

| Token | nilai | Konteks |
| --- | --- | --- |
| `p-2` | 8px | input, button kecil |
| `p-4` | 16px | card, section |
| `p-6` | 24px | modal, panel |
| `p-8` | 32px | section besar |
| `gap-2` | 8px | antar item compact |
| `gap-4` | 16px | antar card |
| `gap-8` | 32px | antar section |

Typography: `text-sm` (14px) untuk body, `text-base` (16px) untuk konten utama, `text-2xl`–`text-4xl` untuk heading.

---

## 5. Design Tokens via `@theme`

Sentralisasi token desain di `@theme` block. Jangan hardcode hex di arbitrary value berulang.

```css
@theme {
  --color-brand: #6366f1;
  --color-brand-light: #a5b4fc;
  --color-brand-dark: #4338ca;
  --font-display: "Poppins", sans-serif;
  --radius-card: 1rem;
}
```

Lalu pakai: `bg-brand`, `text-brand-light`, `font-display`, `rounded-card`. Lihat [Theme Configuration](/customization/).

---

## 6. Accessibility (Aksesibilitas)

### Focus Ring

Selalu beri indikator focus yang terlihat. Jangan `focus:outline-none` tanpa pengganti.

```html
<!-- Baik: ring sebagai pengganti outline -->
<input class="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-2" />

<!-- Buruk: tidak ada indikator focus sama sekali -->
<input class="focus:outline-none rounded p-2" />
```

Gunakan `focus-visible:` agar ring hanya muncul saat navigasi keyboard (tidak mengganggu klik mouse).

### Kontras Warna

Minimum WCAG AA: rasio kontras **4.5:1** untuk teks normal, **3:1** untuk teks besar.

| Kombinasi | Rasio | Status |
| --- | --- | --- |
| `text-gray-900` di `bg-white` | 20.9:1 | AA pass |
| `text-gray-500` di `bg-white` | 4.6:1 | AA pass (borderline) |
| `text-gray-400` di `bg-white` | 2.8:1 | AA fail |
| `text-blue-600` di `bg-blue-50` | 5.2:1 | AA pass |

Cek di [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

### Keyboard Navigation

- Semua elemen interaktif harus reachable via `Tab`.
- `tabindex` untuk custom interactive elements.
- `role` dan `aria-*` untuk komponen custom (accordion, dropdown, modal).

```html
<!-- Accessible toggle button -->
<button role="switch" aria-checked="false" class="...">
  Dark Mode
</button>
```

### `sr-only` untuk Screen Reader

Sembunyikan teks visually tapi tetap readable oleh screen reader:

```html
<button class="bg-red-500 p-2 rounded">
  <svg class="w-5 h-5"><!-- ikon delete --></svg>
  <span class="sr-only">Hapus item</span>
</button>
```

### Reduced Motion

Hormati preferensi `prefers-reduced-motion`:

```html
<div class="animate-spin motion-reduce:animate-none">
  <!-- spinner berhenti bagi yang memilih reduce motion -->
</div>
```

---

## 7. Performance

### Purge CSS (Otomatis di v4)

Tailwind v4 otomatis tree-shaking — hanya class yang dipakai di output CSS. Tidak perlu konfigurasi `content` manual.

::: warning Class dinamis
Tailwind tidak bisa mendeteksi class yang dibangun dinamis di runtime:
`const color = 'bg-' + theme + '-500'` → TIDAK terdeteksi. Gunakan class lengkap: `const classes = { dark: 'bg-gray-900', light: 'bg-white' }`.
:::

### Minifikasi

Production build Tailwind v4 otomatis minifikasi CSS. Pastikan environment `NODE_ENV=production` saat build.

### Tips Performa Tambahan

1. **Animasi `transform` & `opacity` saja** — GPU-accelerated, tidak trigger reflow.
2. **`will-change-*`** — pre-alokasikan GPU layer untuk elemen yang akan berubah.
3. **`content-visibility: auto`** — lazy-render konten di bawah fold (Tailwind: `content-visibility-auto`).
4. **Hindari `transition-all`** — lebih selektif: `transition-colors`, `transition-transform`.

---

## Ringkasan

| Praktik | Ajakan |
| --- | --- |
| Urutan class | Konsisten, tooling bantu |
| Duplikasi | Ekstrak ke komponen, bukan CSS |
| `@apply` | Hanya saat tidak ada sistem komponen |
| Spacing/typography | Pakai skala Tailwind, jangan pixel manual |
| Design tokens | Sentralisasi via `@theme` |
| Accessibility | Focus ring, kontras, ARIA, sr-only, reduced-motion |
| Performance | Purge otomatis, animasi GPU, hindari class dinamis |

Langkah berikutnya: pelajari [Framework Integration](/framework-integration/).