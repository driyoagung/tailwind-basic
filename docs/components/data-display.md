# Data Display: Table, Pagination, Accordion, Skeleton & More

Komponen-komponen ini digunakan untuk menampilkan, mengorganisir, dan memvisualisasikan data secara efektif kepada pengguna.

---

## 1. Table (Tabel Data)

```html
<div class="overflow-x-auto border rounded-lg shadow-sm">
  <table class="w-full text-sm text-left">
    <thead class="bg-gray-50 text-gray-600 uppercase text-xs">
      <tr>
        <th class="px-6 py-3">Nama</th>
        <th class="px-6 py-3">Email</th>
        <th class="px-6 py-3">Status</th>
        <th class="px-6 py-3">Aksi</th>
      </tr>
    </thead>
    <tbody class="divide-y">
      <tr class="hover:bg-gray-50 transition">
        <td class="px-6 py-4 font-medium text-gray-900">Budi Santoso</td>
        <td class="px-6 py-4 text-gray-600">budi@email.com</td>
        <td class="px-6 py-4"><span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Aktif</span></td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:underline text-xs font-medium">Edit</button></td>
      </tr>
      <tr class="hover:bg-gray-50 transition">
        <td class="px-6 py-4 font-medium text-gray-900">Siti Aminah</td>
        <td class="px-6 py-4 text-gray-600">siti@email.com</td>
        <td class="px-6 py-4"><span class="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Pending</span></td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:underline text-xs font-medium">Edit</button></td>
      </tr>
      <tr class="hover:bg-gray-50 transition">
        <td class="px-6 py-4 font-medium text-gray-900">Andi Wijaya</td>
        <td class="px-6 py-4 text-gray-600">andi@email.com</td>
        <td class="px-6 py-4"><span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Nonaktif</span></td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:underline text-xs font-medium">Edit</button></td>
      </tr>
    </tbody>
  </table>
</div>
```

<div class="preview-box">
<div class="overflow-x-auto border rounded-lg shadow-sm">
  <table class="w-full text-sm text-left">
    <thead class="bg-gray-50 text-gray-600 uppercase text-xs">
      <tr>
        <th class="px-6 py-3">Nama</th>
        <th class="px-6 py-3">Email</th>
        <th class="px-6 py-3">Status</th>
        <th class="px-6 py-3">Aksi</th>
      </tr>
    </thead>
    <tbody class="divide-y">
      <tr class="hover:bg-gray-50 transition">
        <td class="px-6 py-4 font-medium text-gray-900">Budi Santoso</td>
        <td class="px-6 py-4 text-gray-600">budi@email.com</td>
        <td class="px-6 py-4"><span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Aktif</span></td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:underline text-xs font-medium">Edit</button></td>
      </tr>
      <tr class="hover:bg-gray-50 transition">
        <td class="px-6 py-4 font-medium text-gray-900">Siti Aminah</td>
        <td class="px-6 py-4 text-gray-600">siti@email.com</td>
        <td class="px-6 py-4"><span class="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Pending</span></td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:underline text-xs font-medium">Edit</button></td>
      </tr>
      <tr class="hover:bg-gray-50 transition">
        <td class="px-6 py-4 font-medium text-gray-900">Andi Wijaya</td>
        <td class="px-6 py-4 text-gray-600">andi@email.com</td>
        <td class="px-6 py-4"><span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Nonaktif</span></td>
        <td class="px-6 py-4"><button class="text-blue-600 hover:underline text-xs font-medium">Edit</button></td>
      </tr>
    </tbody>
  </table>
</div>
</div>

---

## 2. Pagination

```html
<nav class="flex items-center gap-1">
  <button class="px-3 py-1.5 text-sm text-gray-500 bg-white border rounded-lg hover:bg-gray-50 transition">← Prev</button>
  <button class="px-3 py-1.5 text-sm text-white bg-blue-600 border border-blue-600 rounded-lg font-medium">1</button>
  <button class="px-3 py-1.5 text-sm text-gray-700 bg-white border rounded-lg hover:bg-gray-50 transition">2</button>
  <button class="px-3 py-1.5 text-sm text-gray-700 bg-white border rounded-lg hover:bg-gray-50 transition">3</button>
  <span class="px-2 text-gray-400">...</span>
  <button class="px-3 py-1.5 text-sm text-gray-700 bg-white border rounded-lg hover:bg-gray-50 transition">10</button>
  <button class="px-3 py-1.5 text-sm text-gray-500 bg-white border rounded-lg hover:bg-gray-50 transition">Next →</button>
</nav>
```

<div class="preview-box">
<nav class="flex items-center gap-1">
  <button class="px-3 py-1.5 text-sm text-gray-500 bg-white border rounded-lg hover:bg-gray-50 transition">← Prev</button>
  <button class="px-3 py-1.5 text-sm text-white bg-blue-600 border border-blue-600 rounded-lg font-medium">1</button>
  <button class="px-3 py-1.5 text-sm text-gray-700 bg-white border rounded-lg hover:bg-gray-50 transition">2</button>
  <button class="px-3 py-1.5 text-sm text-gray-700 bg-white border rounded-lg hover:bg-gray-50 transition">3</button>
  <span class="px-2 text-gray-400">...</span>
  <button class="px-3 py-1.5 text-sm text-gray-700 bg-white border rounded-lg hover:bg-gray-50 transition">10</button>
  <button class="px-3 py-1.5 text-sm text-gray-500 bg-white border rounded-lg hover:bg-gray-50 transition">Next →</button>
</nav>
</div>

---

## 3. Accordion (Expandable Content)

Accordion menggunakan teknik `<details>` dan `<summary>` HTML5 agar bisa expand/collapse tanpa JavaScript.

```html
<div class="max-w-lg border rounded-lg divide-y">
  <details class="group" open>
    <summary class="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition font-medium text-gray-800">
      Apa itu Tailwind CSS?
      <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
    </summary>
    <div class="px-4 pb-4 text-sm text-gray-600">
      Tailwind CSS adalah framework CSS utility-first yang memungkinkan Anda membangun desain kustom langsung di HTML tanpa menulis CSS tradisional.
    </div>
  </details>
  <details class="group">
    <summary class="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition font-medium text-gray-800">
      Apakah gratis?
      <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
    </summary>
    <div class="px-4 pb-4 text-sm text-gray-600">
      Ya! Tailwind CSS adalah proyek open-source dan sepenuhnya gratis untuk digunakan.
    </div>
  </details>
  <details class="group">
    <summary class="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition font-medium text-gray-800">
      Bagaimana cara instalasinya?
      <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
    </summary>
    <div class="px-4 pb-4 text-sm text-gray-600">
      Anda bisa menginstall melalui npm: <code class="bg-gray-100 px-1 rounded">npm install tailwindcss</code>
    </div>
  </details>
</div>
```

<div class="preview-box">
<div class="max-w-lg border rounded-lg divide-y">
  <details class="group" open>
    <summary class="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition font-medium text-gray-800">Apa itu Tailwind CSS? <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span></summary>
    <div class="px-4 pb-4 text-sm text-gray-600">Tailwind CSS adalah framework CSS utility-first yang memungkinkan Anda membangun desain kustom langsung di HTML.</div>
  </details>
  <details class="group">
    <summary class="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition font-medium text-gray-800">Apakah gratis? <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span></summary>
    <div class="px-4 pb-4 text-sm text-gray-600">Ya! Tailwind CSS adalah proyek open-source dan sepenuhnya gratis.</div>
  </details>
  <details class="group">
    <summary class="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition font-medium text-gray-800">Bagaimana cara instalasinya? <span class="text-gray-400 group-open:rotate-180 transition-transform">▼</span></summary>
    <div class="px-4 pb-4 text-sm text-gray-600">Install via npm: <code class="bg-gray-100 px-1 rounded">npm install tailwindcss</code></div>
  </details>
</div>
</div>

---

## 4. Skeleton Loading

```html
<div class="max-w-sm bg-white border rounded-lg p-4 shadow-sm">
  <div class="animate-pulse">
    <div class="bg-gray-200 h-40 rounded-lg mb-4"></div>
    <div class="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
    <div class="h-3 bg-gray-200 rounded w-full mb-2"></div>
    <div class="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
      <div class="h-3 bg-gray-200 rounded w-24"></div>
    </div>
  </div>
</div>
```

<div class="preview-box">
<div class="max-w-sm bg-white border rounded-lg p-4 shadow-sm">
  <div class="animate-pulse">
    <div class="bg-gray-200 h-40 rounded-lg mb-4"></div>
    <div class="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
    <div class="h-3 bg-gray-200 rounded w-full mb-2"></div>
    <div class="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
      <div class="h-3 bg-gray-200 rounded w-24"></div>
    </div>
  </div>
</div>
</div>

---

## 5. Tooltip (Tanpa JS - CSS Only)

```html
<div class="flex gap-8 p-8">
  <div class="group relative inline-block">
    <button class="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium">Hover Saya</button>
    <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Ini adalah Tooltip!
      <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
    </div>
  </div>
</div>
```

<div class="preview-box">
<div class="flex gap-8 p-8">
  <div class="group relative inline-block">
    <button class="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium">Hover Saya</button>
    <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Ini adalah Tooltip!
      <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
    </div>
  </div>
</div>
</div>
