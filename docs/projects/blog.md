---
title: "Mini Project: Blog Layout"
description: Layout blog lengkap — artikel dengan prose styling, sidebar, related posts, dan responsive layout.
---

# Mini Project: Blog Layout

Blog layout klasik: artikel utama + sidebar. Responsif: sidebar di bawah saat mobile.

---

## 1. Layout Utama (Article + Sidebar)

Grid 3 kolom: artikel (2) + sidebar (1). Di mobile, semua menumpuk.

<Preview :html='`<div class="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
  <!-- Artikel -->
  <article class="md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=300&fit=crop" class="w-full h-48 object-cover" alt="blog" />
    <div class="p-6">
      <span class="text-xs font-bold text-indigo-600 uppercase tracking-wide">Tutorial</span>
      <h1 class="text-2xl font-bold mt-2 mb-3">Belajar Tailwind CSS dari Nol</h1>
      <div class="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop" class="w-6 h-6 rounded-full" alt="author" />
        <span>Budi Santoso</span>
        <span>•</span>
        <span>8 Jul 2026</span>
      </div>
      <p class="text-gray-700 leading-relaxed text-sm">
        Tailwind CSS adalah framework utility-first yang merevolusi cara kita styling web. Daripada menulis CSS terpisah, Anda merakit UI langsung di HTML dengan class-class kecil yang masing-masing punya satu fungsi.
      </p>
      <p class="text-gray-700 leading-relaxed text-sm mt-3">
        Dengan skala spacing dan warna yang konsisten, desain Anda akan terlihat profesional tanpa perlu mendefinisikan variabel CSS manual.
      </p>
      <a href="#" class="inline-block mt-4 text-indigo-600 font-semibold text-sm hover:text-indigo-700">Baca selengkapnya →</a>
    </div>
  </article>

  <!-- Sidebar -->
  <aside class="space-y-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <h3 class="font-bold text-sm uppercase text-gray-400 tracking-wide mb-3">Tentang Penulis</h3>
      <div class="flex items-center gap-3">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=48&h=48&fit=crop" class="w-12 h-12 rounded-full" alt="author" />
        <div>
          <p class="font-semibold text-sm">Budi Santoso</p>
          <p class="text-xs text-gray-500">Web Developer</p>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <h3 class="font-bold text-sm uppercase text-gray-400 tracking-wide mb-3">Posting Populer</h3>
      <ul class="space-y-3">
        <li class="flex gap-2">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba6174e22?w=40&h=40&fit=crop" class="w-10 h-10 rounded object-cover" alt="post" />
          <div>
            <p class="text-sm font-medium leading-tight">10 Tip Tailwind untuk Pemula</p>
            <p class="text-xs text-gray-400">1k views</p>
          </div>
        </li>
        <li class="flex gap-2">
          <img src="https://images.unsplash.com/photo-1516259883336-e75e69b3e404?w=40&h=40&fit=crop" class="w-10 h-10 rounded object-cover" alt="post" />
          <div>
            <p class="text-sm font-medium leading-tight">Grid vs Flexbox: Kapan Pakai?</p>
            <p class="text-xs text-gray-400">800 views</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 text-white">
      <h3 class="font-bold mb-2">Newsletter</h3>
      <p class="text-sm text-indigo-100 mb-3">Dapatkan tip Tailwind setiap minggu.</p>
      <input type="email" placeholder="email@anda.com" class="w-full rounded px-3 py-2 text-sm text-gray-800 outline-none mb-2" />
      <button class="w-full bg-white text-indigo-600 font-bold py-2 rounded text-sm hover:bg-indigo-50 transition">Subscribe</button>
    </div>
  </aside>
</div>`' />

---

## 2. Related Posts

Grid horizontal di bawah artikel.

<Preview :html='`<div class="max-w-4xl mx-auto px-4 py-8">
  <h2 class="text-xl font-bold mb-6">Baca Juga</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <a href="#" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
      <img src="https://images.unsplash.com/photo-1547658719-da2b4f0f3e82?w=400&h=180&fit=crop" class="w-full h-32 object-cover" alt="post" />
      <div class="p-4">
        <span class="text-xs text-indigo-600 font-bold uppercase">Tips</span>
        <h3 class="font-semibold text-sm mt-1">Optimasi Bundle CSS Tailwind</h3>
        <p class="text-xs text-gray-500 mt-1">5 menit baca</p>
      </div>
    </a>
    <a href="#" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
      <img src="https://images.unsplash.com/photo-1555066931-4365d6dafff3?w=400&h=180&fit=crop" class="w-full h-32 object-cover" alt="post" />
      <div class="p-4">
        <span class="text-xs text-indigo-600 font-bold uppercase">Layout</span>
        <h3 class="font-semibold text-sm mt-1">Membangun Dashboard dengan Grid</h3>
        <p class="text-xs text-gray-500 mt-1">8 menit baca</p>
      </div>
    </a>
    <a href="#" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=180&fit=crop" class="w-full h-32 object-cover" alt="post" />
      <div class="p-4">
        <span class="text-xs text-indigo-600 font-bold uppercase">Analytics</span>
        <h3 class="font-semibold text-sm mt-1">Dark Mode yang Benar</h3>
        <p class="text-xs text-gray-500 mt-1">3 menit baca</p>
      </div>
    </a>
  </div>
</div>`' />

---

## 3. Article Typography

Untuk konten artikel markdown (dari CMS), gunakan `@tailwindcss/typography` plugin + class `prose`:

```html
<article class="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-indigo-600 prose-img:rounded-xl">
  <h1>Judul Artikel</h1>
  <p>Isi artikel dari CMS/Markdown akan otomatis dapat styling cantik...</p>
</article>
```

::: tip `prose` + Tailwind
`prose` memberi styling default paragraf, heading, list, blockquote, code. Override dengan variant: `prose-headings:text-indigo-700`, `prose-p:text-gray-600`.
:::

Kembali ke [Roadmap Lengkap](/spek).