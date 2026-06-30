# Layout Project: Dashboard Admin

Dashboard Admin adalah layout paling kompleks sekaligus paling sering diminta di dunia profesional. Berikut adalah kerangka lengkapnya.

---

## Struktur Dashboard

Sebuah dashboard umumnya terdiri dari: **Sidebar** (navigasi kiri), **Topbar** (header atas), **Statistic Cards** (kartu ringkasan), dan **Tabel Data**.

```html
<div class="flex h-[600px] bg-gray-100 rounded-xl overflow-hidden border shadow-lg">
  
  <!-- SIDEBAR -->
  <aside class="w-56 bg-slate-900 text-white flex-shrink-0 flex flex-col">
    <div class="p-4 border-b border-slate-700">
      <h2 class="font-bold text-lg flex items-center gap-2">
        <span class="w-7 h-7 bg-blue-500 rounded flex items-center justify-center text-xs font-bold">A</span>
        AdminPanel
      </h2>
    </div>
    <nav class="flex-1 p-3 space-y-1 text-sm">
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 font-medium">📊 Dashboard</a>
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition">👥 Users</a>
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition">📦 Products</a>
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition">💳 Orders</a>
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition">📈 Analytics</a>
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition">⚙️ Settings</a>
    </nav>
    <div class="p-4 border-t border-slate-700">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">AD</div>
        <div><p class="text-sm font-medium">Admin</p><p class="text-xs text-slate-400">admin@app.com</p></div>
      </div>
    </div>
  </aside>

  <!-- MAIN CONTENT -->
  <div class="flex-1 flex flex-col overflow-hidden">
    
    <!-- TOPBAR -->
    <header class="bg-white border-b px-6 py-3 flex items-center justify-between flex-shrink-0">
      <h1 class="text-lg font-bold text-gray-800">Dashboard</h1>
      <div class="flex items-center gap-4">
        <input type="text" placeholder="Cari..." class="border rounded-lg px-3 py-1.5 text-sm w-48 outline-none focus:ring-2 focus:ring-blue-500">
        <span class="relative cursor-pointer">🔔<span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span></span>
      </div>
    </header>

    <!-- CONTENT AREA (scrollable) -->
    <main class="flex-1 overflow-y-auto p-6">
      
      <!-- STAT CARDS -->
      <div class="grid grid-cols-4 gap-4 mb-6">
        <div class="bg-white p-4 rounded-xl border shadow-sm">
          <p class="text-sm text-gray-500">Total Users</p>
          <p class="text-2xl font-bold text-gray-900 mt-1">12,345</p>
          <p class="text-xs text-green-600 mt-1">↑ 12% dari bulan lalu</p>
        </div>
        <div class="bg-white p-4 rounded-xl border shadow-sm">
          <p class="text-sm text-gray-500">Revenue</p>
          <p class="text-2xl font-bold text-gray-900 mt-1">Rp 85jt</p>
          <p class="text-xs text-green-600 mt-1">↑ 8% dari bulan lalu</p>
        </div>
        <div class="bg-white p-4 rounded-xl border shadow-sm">
          <p class="text-sm text-gray-500">Orders</p>
          <p class="text-2xl font-bold text-gray-900 mt-1">1,234</p>
          <p class="text-xs text-red-600 mt-1">↓ 3% dari bulan lalu</p>
        </div>
        <div class="bg-white p-4 rounded-xl border shadow-sm">
          <p class="text-sm text-gray-500">Conversion</p>
          <p class="text-2xl font-bold text-gray-900 mt-1">3.2%</p>
          <p class="text-xs text-green-600 mt-1">↑ 0.5% dari bulan lalu</p>
        </div>
      </div>

      <!-- TABLE -->
      <div class="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div class="px-6 py-4 border-b flex items-center justify-between">
          <h2 class="font-bold text-gray-800">Pesanan Terbaru</h2>
          <button class="text-sm text-blue-600 font-medium hover:underline">Lihat Semua</button>
        </div>
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-gray-500 text-xs uppercase">
            <tr>
              <th class="px-6 py-3 text-left">Order ID</th>
              <th class="px-6 py-3 text-left">Customer</th>
              <th class="px-6 py-3 text-left">Total</th>
              <th class="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-3 font-medium">#ORD-001</td>
              <td class="px-6 py-3">Budi Santoso</td>
              <td class="px-6 py-3">Rp 250.000</td>
              <td class="px-6 py-3"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">Selesai</span></td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-3 font-medium">#ORD-002</td>
              <td class="px-6 py-3">Siti Aminah</td>
              <td class="px-6 py-3">Rp 180.000</td>
              <td class="px-6 py-3"><span class="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs font-semibold">Proses</span></td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-3 font-medium">#ORD-003</td>
              <td class="px-6 py-3">Andi Wijaya</td>
              <td class="px-6 py-3">Rp 320.000</td>
              <td class="px-6 py-3"><span class="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-semibold">Batal</span></td>
            </tr>
          </tbody>
        </table>
      </div>

    </main>
  </div>
</div>
```

<div class="preview-box">
<div class="flex h-[600px] bg-gray-100 rounded-xl overflow-hidden border shadow-lg">
  <aside class="w-56 bg-slate-900 text-white flex-shrink-0 flex flex-col">
    <div class="p-4 border-b border-slate-700"><h2 class="font-bold text-lg flex items-center gap-2"><span class="w-7 h-7 bg-blue-500 rounded flex items-center justify-center text-xs font-bold">A</span>AdminPanel</h2></div>
    <nav class="flex-1 p-3 space-y-1 text-sm">
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 font-medium">📊 Dashboard</a>
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition">👥 Users</a>
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition">📦 Products</a>
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition">💳 Orders</a>
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition">📈 Analytics</a>
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition">⚙️ Settings</a>
    </nav>
    <div class="p-4 border-t border-slate-700"><div class="flex items-center gap-2"><div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">AD</div><div><p class="text-sm font-medium">Admin</p><p class="text-xs text-slate-400">admin@app.com</p></div></div></div>
  </aside>
  <div class="flex-1 flex flex-col overflow-hidden">
    <header class="bg-white border-b px-6 py-3 flex items-center justify-between flex-shrink-0">
      <h1 class="text-lg font-bold text-gray-800">Dashboard</h1>
      <div class="flex items-center gap-4">
        <input type="text" placeholder="Cari..." class="border rounded-lg px-3 py-1.5 text-sm w-48 outline-none focus:ring-2 focus:ring-blue-500">
        <span class="relative cursor-pointer">🔔<span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span></span>
      </div>
    </header>
    <main class="flex-1 overflow-y-auto p-6">
      <div class="grid grid-cols-4 gap-4 mb-6">
        <div class="bg-white p-4 rounded-xl border shadow-sm"><p class="text-sm text-gray-500">Total Users</p><p class="text-2xl font-bold text-gray-900 mt-1">12,345</p><p class="text-xs text-green-600 mt-1">↑ 12%</p></div>
        <div class="bg-white p-4 rounded-xl border shadow-sm"><p class="text-sm text-gray-500">Revenue</p><p class="text-2xl font-bold text-gray-900 mt-1">Rp 85jt</p><p class="text-xs text-green-600 mt-1">↑ 8%</p></div>
        <div class="bg-white p-4 rounded-xl border shadow-sm"><p class="text-sm text-gray-500">Orders</p><p class="text-2xl font-bold text-gray-900 mt-1">1,234</p><p class="text-xs text-red-600 mt-1">↓ 3%</p></div>
        <div class="bg-white p-4 rounded-xl border shadow-sm"><p class="text-sm text-gray-500">Conversion</p><p class="text-2xl font-bold text-gray-900 mt-1">3.2%</p><p class="text-xs text-green-600 mt-1">↑ 0.5%</p></div>
      </div>
      <div class="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div class="px-6 py-4 border-b flex items-center justify-between"><h2 class="font-bold text-gray-800">Pesanan Terbaru</h2><button class="text-sm text-blue-600 font-medium hover:underline">Lihat Semua</button></div>
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-gray-500 text-xs uppercase"><tr><th class="px-6 py-3 text-left">Order ID</th><th class="px-6 py-3 text-left">Customer</th><th class="px-6 py-3 text-left">Total</th><th class="px-6 py-3 text-left">Status</th></tr></thead>
          <tbody class="divide-y">
            <tr class="hover:bg-gray-50"><td class="px-6 py-3 font-medium">#ORD-001</td><td class="px-6 py-3">Budi Santoso</td><td class="px-6 py-3">Rp 250.000</td><td class="px-6 py-3"><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">Selesai</span></td></tr>
            <tr class="hover:bg-gray-50"><td class="px-6 py-3 font-medium">#ORD-002</td><td class="px-6 py-3">Siti Aminah</td><td class="px-6 py-3">Rp 180.000</td><td class="px-6 py-3"><span class="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs font-semibold">Proses</span></td></tr>
            <tr class="hover:bg-gray-50"><td class="px-6 py-3 font-medium">#ORD-003</td><td class="px-6 py-3">Andi Wijaya</td><td class="px-6 py-3">Rp 320.000</td><td class="px-6 py-3"><span class="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-semibold">Batal</span></td></tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>
</div>
