---
title: "Mini Project: E-Commerce Layout"
description: Layout e-commerce — product card grid, product detail, cart summary, dan checkout form dengan Tailwind CSS.
---

# Mini Project: E-Commerce Layout

Layout e-commerce: grid produk, halaman detail, cart summary, dan checkout.

---

## 1. Product Card Grid

Grid responsif kartu produk dengan harga, rating, tombol add-to-cart.

<Preview :html='`<div class="max-w-4xl mx-auto px-4 py-8">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-2xl font-bold">Produk Terbaru</h2>
    <select class="border border-gray-300 rounded-lg p-2 text-sm outline-none focus:border-indigo-500 cursor-pointer">
      <option>Termurah</option>
      <option>Termahal</option>
      <option>Terpopuler</option>
    </select>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <!-- Card 1 -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group transition hover:shadow-lg">
      <div class="relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop" class="w-full h-40 object-cover group-hover:scale-105 transition duration-300" alt="sepatu" />
        <span class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-20%</span>
      </div>
      <div class="p-3">
        <p class="text-xs text-gray-400 mb-1">Sepatu</p>
        <h3 class="font-semibold text-sm truncate">Sneakers Sport Premium</h3>
        <div class="flex items-center gap-1 mt-1">
          <span class="text-amber-400 text-xs">★★★★★</span>
          <span class="text-xs text-gray-400">(4.9)</span>
        </div>
        <div class="flex items-center justify-between mt-2">
          <div>
            <span class="text-red-500 text-xs line-through">Rp500rb</span>
            <p class="font-bold text-indigo-600">Rp400rb</p>
          </div>
          <button class="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition text-sm">+</button>
        </div>
      </div>
    </div>
    <!-- Card 2-4 (sama pola) -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group transition hover:shadow-lg">
      <div class="relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=200&fit=crop" class="w-full h-40 object-cover group-hover:scale-105 transition duration-300" alt="jam" />
      </div>
      <div class="p-3">
        <p class="text-xs text-gray-400 mb-1">Aksesori</p>
        <h3 class="font-semibold text-sm truncate">Jam Tangan Klasik</h3>
        <div class="flex items-center gap-1 mt-1">
          <span class="text-amber-400 text-xs">★★★★☆</span>
          <span class="text-xs text-gray-400">(4.2)</span>
        </div>
        <div class="flex items-center justify-between mt-2">
          <p class="font-bold text-indigo-600">Rp750rb</p>
          <button class="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition text-sm">+</button>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group transition hover:shadow-lg">
      <div class="relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop" class="w-full h-40 object-cover group-hover:scale-105 transition duration-300" alt="kacamata" />
        <span class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">BARU</span>
      </div>
      <div class="p-3">
        <p class="text-xs text-gray-400 mb-1">Aksesori</p>
        <h3 class="font-semibold text-sm truncate">Kacamata Hitam</h3>
        <div class="flex items-center gap-1 mt-1">
          <span class="text-amber-400 text-xs">★★★★★</span>
          <span class="text-xs text-gray-400">(5.0)</span>
        </div>
        <div class="flex items-center justify-between mt-2">
          <p class="font-bold text-indigo-600">Rp250rb</p>
          <button class="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition text-sm">+</button>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group transition hover:shadow-lg">
      <div class="relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop" class="w-full h-40 object-cover group-hover:scale-105 transition duration-300" alt="tas" />
      </div>
      <div class="p-3">
        <p class="text-xs text-gray-400 mb-1">Tas</p>
        <h3 class="font-semibold text-sm truncate">Tas Ransel Outdoor</h3>
        <div class="flex items-center gap-1 mt-1">
          <span class="text-amber-400 text-xs">★★★★☆</span>
          <span class="text-xs text-gray-400">(4.5)</span>
        </div>
        <div class="flex items-center justify-between mt-2">
          <p class="font-bold text-indigo-600">Rp320rb</p>
          <button class="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition text-sm">+</button>
        </div>
      </div>
    </div>
  </div>
</div>`' />

---

## 2. Product Detail

Layout 2 kolom: gambar besar (kiri) + info & add-to-cart (kanan).

<Preview :html='`<div class="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
  <!-- Gambar -->
  <div>
    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=500&fit=crop" class="w-full rounded-2xl shadow-lg" alt="sepatu" />
    <div class="flex gap-2 mt-3">
      <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop" class="w-16 h-16 rounded-lg border-2 border-indigo-500 cursor-pointer" alt="" />
      <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=100&h=100&fit=crop" class="w-16 h-16 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-indigo-300" alt="" />
      <img src="https://images.unsplash.com/photo-1606107557193-6dd5c0e9a55e?w=100&h=100&fit=crop" class="w-16 h-16 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-indigo-300" alt="" />
    </div>
  </div>
  <!-- Info -->
  <div>
    <p class="text-sm text-indigo-600 font-semibold mb-1">Sepatu Sport</p>
    <h1 class="text-2xl font-bold mb-3">Sneakers Sport Premium</h1>
    <div class="flex items-center gap-2 mb-4">
      <span class="text-amber-400">★★★★★</span>
      <span class="text-sm text-gray-500">(4.9 · 120 ulasan)</span>
    </div>
    <div class="flex items-center gap-3 mb-6">
      <span class="text-3xl font-bold text-indigo-600">Rp400rb</span>
      <span class="text-lg text-gray-400 line-through">Rp500rb</span>
      <span class="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">HEMAT 20%</span>
    </div>
    <p class="text-sm text-gray-600 mb-6">Sepatu sport premium dengan material breathable, sol empuk, dan desain modern. Cocok untuk aktivitas sehari-hari maupun olahraga ringan.</p>
    <!-- Size selector -->
    <div class="mb-4">
      <p class="text-sm font-semibold mb-2">Ukuran</p>
      <div class="flex gap-2">
        <button class="w-10 h-10 border-2 border-indigo-500 bg-indigo-50 text-indigo-600 font-bold rounded text-sm">42</button>
        <button class="w-10 h-10 border-2 border-gray-200 hover:border-indigo-300 rounded text-sm font-semibold">43</button>
        <button class="w-10 h-10 border-2 border-gray-200 hover:border-indigo-300 rounded text-sm font-semibold">44</button>
      </div>
    </div>
    <!-- Quantity + Add to cart -->
    <div class="flex items-center gap-4">
      <div class="flex items-center border-2 border-gray-200 rounded-lg">
        <button class="px-3 py-2 text-lg hover:bg-gray-50">−</button>
        <span class="px-4 font-semibold">1</span>
        <button class="px-3 py-2 text-lg hover:bg-gray-50">+</button>
      </div>
      <button class="flex-1 bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition shadow-md">
        Tambah ke Keranjang
      </button>
    </div>
  </div>
</div>`' />

---

## 3. Cart Summary

Tabel + ringkasan harga + tombol checkout.

<Preview :html='`<div class="max-w-3xl mx-auto px-4 py-8">
  <h2 class="text-2xl font-bold mb-6">Keranjang Belanja</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Items -->
    <div class="md:col-span-2 space-y-3">
      <div class="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80&h=80&fit=crop" class="w-16 h-16 rounded-lg object-cover" alt="sepatu" />
        <div class="flex-1">
          <h3 class="font-semibold text-sm">Sneakers Sport Premium</h3>
          <p class="text-xs text-gray-500">Ukuran 42 · Hitam</p>
          <p class="font-bold text-indigo-600 mt-1">Rp400rb</p>
        </div>
        <div class="flex items-center border border-gray-200 rounded">
          <button class="px-2 py-1 text-sm hover:bg-gray-50">−</button>
          <span class="px-2 text-sm font-semibold">1</span>
          <button class="px-2 py-1 text-sm hover:bg-gray-50">+</button>
        </div>
      </div>
      <div class="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop" class="w-16 h-16 rounded-lg object-cover" alt="kacamata" />
        <div class="flex-1">
          <h3 class="font-semibold text-sm">Kacamata Hitam</h3>
          <p class="text-xs text-gray-500">UV Protection</p>
          <p class="font-bold text-indigo-600 mt-1">Rp250rb</p>
        </div>
        <div class="flex items-center border border-gray-200 rounded">
          <button class="px-2 py-1 text-sm hover:bg-gray-50">−</button>
          <span class="px-2 text-sm font-semibold">2</span>
          <button class="px-2 py-1 text-sm hover:bg-gray-50">+</button>
        </div>
      </div>
    </div>
    <!-- Summary -->
    <div class="bg-white border border-gray-100 rounded-xl p-5 shadow-sm h-fit">
      <h3 class="font-bold mb-4">Ringkasan</h3>
      <div class="space-y-2 text-sm pb-4 border-b border-gray-100">
        <div class="flex justify-between"><span class="text-gray-500">Subtotal (3 item)</span><span class="font-semibold">Rp900rb</span></div>
        <div class="flex justify-between"><span class="text-gray-500">Ongkir</span><span class="font-semibold">Rp20rb</span></div>
      </div>
      <div class="flex justify-between font-bold py-4">
        <span>Total</span><span class="text-indigo-600 text-lg">Rp920rb</span>
      </div>
      <button class="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition shadow-md">
        Checkout
      </button>
    </div>
  </div>
</div>`' />

---

## 4. Checkout Form

Form pengiriman + ringkasan pesanan.

<Preview :html='`<div class="max-w-3xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Form -->
  <form class="md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
    <h2 class="text-xl font-bold mb-4">Detail Pengiriman</h2>
    <div class="grid grid-cols-2 gap-3">
      <input type="text" placeholder="Nama depan" class="border border-gray-300 bg-white rounded-lg p-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
      <input type="text" placeholder="Nama belakang" class="border border-gray-300 bg-white rounded-lg p-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
    </div>
    <input type="email" placeholder="Email" class="w-full border border-gray-300 bg-white rounded-lg p-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
    <input type="tel" placeholder="No. HP" class="w-full border border-gray-300 bg-white rounded-lg p-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
    <textarea placeholder="Alamat lengkap" rows="3" class="w-full border border-gray-300 bg-white rounded-lg p-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"></textarea>
    <div class="grid grid-cols-2 gap-3">
      <select class="border border-gray-300 rounded-lg p-2 outline-none focus:border-indigo-500 cursor-pointer">
        <option>Provinsi</option>
        <option>Jawa Barat</option>
        <option>DKI Jakarta</option>
      </select>
      <input type="text" placeholder="Kode pos" class="border border-gray-300 bg-white rounded-lg p-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
    </div>
  </form>
  <!-- Summary -->
  <div class="bg-white border border-gray-100 rounded-xl p-5 shadow-sm h-fit">
    <h3 class="font-bold mb-4">Ringkasan Pesanan</h3>
    <div class="space-y-2 text-sm pb-4 border-b border-gray-100">
      <div class="flex justify-between"><span class="text-gray-500">3 produk</span><span class="font-semibold">Rp900rb</span></div>
      <div class="flex justify-between"><span class="text-gray-500">Ongkir</span><span class="font-semibold">Rp20rb</span></div>
    </div>
    <div class="flex justify-between font-bold py-4">
      <span>Total</span><span class="text-indigo-600 text-lg">Rp920rb</span>
    </div>
    <button class="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition shadow-md">
      Bayar Sekarang
    </button>
    <p class="text-xs text-gray-400 text-center mt-3">Pembayaran aman & terenkripsi</p>
  </div>
</div>`' />

Kembali ke [Roadmap Lengkap](/spek).