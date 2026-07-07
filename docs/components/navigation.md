---
title: "Navigation: Navbar, Sidebar, Dropdown, Breadcrumb & Tabs"
description: "Komponen navigasi: navbar responsif, sidebar, dropdown, breadcrumb, dan tabs."
---

# Navigation: Navbar, Sidebar, Dropdown, Breadcrumb & Tabs

Navigasi yang baik adalah kunci pengalaman pengguna. Berikut adalah komponen navigasi yang paling sering digunakan.

---

## 1. Navbar (Responsive)

<Preview :html='`<nav class="bg-white border-b shadow-sm rounded-lg">
  <div class="container mx-auto flex items-center justify-between px-4 py-3">
    <a href="#" class="text-xl font-bold text-blue-600">MyApp</a>
    <ul class="hidden md:flex items-center gap-6 text-gray-600 font-medium">
      <li><a href="#" class="hover:text-blue-600 transition">Home</a></li>
      <li><a href="#" class="hover:text-blue-600 transition">Products</a></li>
      <li><a href="#" class="hover:text-blue-600 transition">Pricing</a></li>
      <li><a href="#" class="hover:text-blue-600 transition">Contact</a></li>
    </ul>
    <div class="hidden md:flex items-center gap-3">
      <button class="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Login</button>
      <button class="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Sign Up</button>
    </div>
    <button class="md:hidden text-gray-600 text-2xl">☰</button>
  </div>
</nav>`' />

---

## 2. Sidebar

<Preview :html='`<div class="w-64 bg-slate-900 text-white min-h-[400px] rounded-xl p-4 flex flex-col">
  <div class="flex items-center gap-3 px-3 mb-8">
    <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-sm">A</div>
    <span class="font-bold text-lg">Admin Panel</span>
  </div>
  <nav class="flex flex-col gap-1 flex-1">
    <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm">📊 Dashboard</a>
    <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition text-sm">👥 Users</a>
    <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition text-sm">📦 Products</a>
    <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition text-sm">💳 Orders</a>
    <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition text-sm">⚙️ Settings</a>
  </nav>
  <div class="border-t border-slate-700 pt-4 mt-4">
    <div class="flex items-center gap-3 px-3">
      <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">AD</div>
      <div><p class="text-sm font-medium">Admin</p><p class="text-xs text-slate-400">admin@app.com</p></div>
    </div>
  </div>
</div>`' />

---

## 3. Dropdown

<Preview :html='`<div class="relative inline-block">
  <button class="bg-white border px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition flex items-center gap-2">Aksi <span class="text-xs">▼</span></button>
  <div class="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border py-1 z-50">
    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">✏️ Edit</a>
    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">📋 Duplikat</a>
    <hr class="my-1">
    <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">🗑️ Hapus</a>
  </div>
</div>`' />

---

## 4. Breadcrumb

<Preview :html='`<nav class="flex items-center gap-2 text-sm text-gray-500">
  <a href="#" class="hover:text-blue-600 transition">Home</a>
  <span>/</span>
  <a href="#" class="hover:text-blue-600 transition">Products</a>
  <span>/</span>
  <span class="text-gray-900 font-medium">Detail Produk</span>
</nav>`' />

---

## 5. Tabs

<Preview :html='`<div>
  <div class="flex border-b">
    <button class="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">Deskripsi</button>
    <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">Spesifikasi</button>
    <button class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">Review (24)</button>
  </div>
  <div class="p-4 text-sm text-gray-600">
    <p>Ini adalah konten tab "Deskripsi". Konten tab lainnya akan ditampilkan saat tab diklik menggunakan JavaScript.</p>
  </div>
</div>`' />
