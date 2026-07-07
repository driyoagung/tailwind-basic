---
title: Plugins
description: "Plugin resmi Tailwind: typography, forms, aspect ratio, dan line clamp."
---

# Plugins

Tailwind CSS memiliki ekosistem *plugin* resmi yang memperluas kemampuan *framework*. Plugin menambahkan utilitas baru yang tidak ada di *core* Tailwind.

---

## 1. @tailwindcss/typography

Plugin paling populer! Menambahkan class `prose` yang secara otomatis memberikan *styling* cantik pada konten dari **CMS/Markdown** (artikel, blog, dokumentasi).

Tanpa plugin ini, konten yang berasal dari database (misal: artikel WordPress) akan terlihat sangat berantakan karena Tailwind mereset semua gaya bawaan HTML.

**Instalasi:**
```bash
npm install @tailwindcss/typography
```

**Penggunaan di HTML:**
```html
<article class="prose lg:prose-xl max-w-none">
  <h1>Judul Artikel</h1>
  <p>Paragraf pertama dari artikel ini akan mendapatkan styling yang otomatis cantik, termasuk <strong>teks tebal</strong> dan <a href="#">link berwarna</a>.</p>
  <ul>
    <li>Item daftar 1</li>
    <li>Item daftar 2</li>
  </ul>
  <blockquote>Kutipan akan mendapatkan border kiri dan font italic secara otomatis.</blockquote>
</article>
```

> **Catatan Tailwind v4:** Di Tailwind v4, Anda cukup menambahkan `@plugin "@tailwindcss/typography"` di file CSS Anda. Tidak perlu konfigurasi tambahan.

---

## 2. @tailwindcss/forms (Opsional di v4)

Menambahkan gaya dasar (*reset*) pada elemen-elemen form HTML seperti `<input>`, `<select>`, `<textarea>`, dan `<checkbox>`. Tujuannya agar form terlihat konsisten di semua browser dan mudah di-override dengan class Tailwind.

```bash
npm install @tailwindcss/forms
```

```css
/* Di file CSS */
@plugin "@tailwindcss/forms";
```

> **Catatan:** Di Tailwind v4, sebagian besar *reset* form sudah tertanam di *core*. Plugin ini opsional dan berguna hanya jika Anda membutuhkan *baseline styling* yang lebih agresif.

---

## 3. Aspect Ratio (Sudah Built-in di v4)

Di Tailwind v3, kita membutuhkan plugin `@tailwindcss/aspect-ratio` untuk membuat elemen dengan rasio aspek tertentu (misal video 16:9). **Di Tailwind v4, utilitas ini sudah bawaan.**

Cukup gunakan:
- `aspect-video` (16:9)
- `aspect-square` (1:1)
- `aspect-auto` (Otomatis)

<Preview :html='`<div class="grid grid-cols-2 gap-4 max-w-lg">
  <div class="aspect-square bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
    1:1 (Square)
  </div>
  <div class="aspect-video bg-rose-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
    16:9 (Video)
  </div>
</div>`' />

---

## 4. Line Clamp (Sudah Built-in di v4)

Fitur `line-clamp-*` digunakan untuk membatasi teks menjadi beberapa baris saja, kemudian selebihnya ditampilkan sebagai `...` (ellipsis/titik-titik). Sangat berguna untuk deskripsi singkat di *Product Card*.

Di Tailwind v4, ini sudah **built-in** dan tidak perlu plugin:
- `line-clamp-1`, `line-clamp-2`, `line-clamp-3`, ...
- `line-clamp-none` (menghilangkan pembatasan)

<Preview :html='`<div class="max-w-sm bg-white border rounded-lg p-4 shadow-sm">
  <h3 class="font-bold mb-2">Artikel Panjang</h3>
  <!-- Teks dibatasi menjadi 3 baris saja -->
  <p class="text-gray-600 text-sm line-clamp-3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
  </p>
</div>`' />
