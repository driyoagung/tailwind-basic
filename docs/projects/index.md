# Layout Project: Authentication Pages

Halaman autentikasi adalah pintu gerbang pertama yang dilihat pengguna. Desainnya harus bersih, profesional, dan membangun rasa percaya.

---

## 1. Login Page

```html
<div class="min-h-[500px] bg-gray-100 flex items-center justify-center p-6">
  <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
    <!-- Logo -->
    <div class="text-center mb-8">
      <div class="w-12 h-12 bg-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
        <span class="text-white font-bold text-xl">M</span>
      </div>
      <h1 class="text-2xl font-bold text-gray-900">Masuk ke Akun Anda</h1>
      <p class="text-gray-500 text-sm mt-1">Selamat datang kembali!</p>
    </div>

    <!-- Form -->
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" placeholder="nama@email.com" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm">
      </div>
      <div>
        <div class="flex items-center justify-between mb-1">
          <label class="text-sm font-medium text-gray-700">Password</label>
          <a href="#" class="text-xs text-blue-600 hover:underline">Lupa Password?</a>
        </div>
        <input type="password" placeholder="••••••••" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm">
      </div>
      <div class="flex items-center gap-2">
        <input type="checkbox" class="w-4 h-4 accent-blue-600 rounded">
        <label class="text-sm text-gray-600">Ingat saya</label>
      </div>
      <button type="button" class="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition shadow-md">
        Masuk
      </button>
    </form>

    <!-- Divider -->
    <div class="flex items-center my-6">
      <div class="flex-1 h-px bg-gray-200"></div>
      <span class="px-4 text-xs text-gray-400">ATAU</span>
      <div class="flex-1 h-px bg-gray-200"></div>
    </div>

    <!-- Social Login -->
    <button class="w-full border border-gray-300 py-2.5 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2 text-sm">
      <span>🔵</span> Masuk dengan Google
    </button>

    <!-- Footer -->
    <p class="text-center text-sm text-gray-500 mt-6">
      Belum punya akun? <a href="#" class="text-blue-600 font-semibold hover:underline">Daftar Sekarang</a>
    </p>
  </div>
</div>
```

<div class="preview-box">
<div class="min-h-[500px] bg-gray-100 flex items-center justify-center p-6 rounded-xl">
  <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
    <div class="text-center mb-8">
      <div class="w-12 h-12 bg-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center"><span class="text-white font-bold text-xl">M</span></div>
      <h1 class="text-2xl font-bold text-gray-900">Masuk ke Akun Anda</h1>
      <p class="text-gray-500 text-sm mt-1">Selamat datang kembali!</p>
    </div>
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" placeholder="nama@email.com" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm">
      </div>
      <div>
        <div class="flex items-center justify-between mb-1">
          <label class="text-sm font-medium text-gray-700">Password</label>
          <a href="#" class="text-xs text-blue-600 hover:underline">Lupa Password?</a>
        </div>
        <input type="password" placeholder="••••••••" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm">
      </div>
      <div class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4 accent-blue-600 rounded"><label class="text-sm text-gray-600">Ingat saya</label></div>
      <button type="button" class="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition shadow-md">Masuk</button>
    </form>
    <div class="flex items-center my-6"><div class="flex-1 h-px bg-gray-200"></div><span class="px-4 text-xs text-gray-400">ATAU</span><div class="flex-1 h-px bg-gray-200"></div></div>
    <button class="w-full border border-gray-300 py-2.5 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2 text-sm"><span>🔵</span> Masuk dengan Google</button>
    <p class="text-center text-sm text-gray-500 mt-6">Belum punya akun? <a href="#" class="text-blue-600 font-semibold hover:underline">Daftar Sekarang</a></p>
  </div>
</div>
</div>

---

## 2. Register Page

```html
<div class="min-h-[550px] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-6">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-1">Buat Akun Baru</h1>
    <p class="text-gray-500 text-sm mb-6">Gratis! Tidak perlu kartu kredit.</p>
    <form class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nama Depan</label>
          <input type="text" placeholder="Agung" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nama Belakang</label>
          <input type="text" placeholder="Driyo" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition">
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" placeholder="nama@email.com" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input type="password" placeholder="Min. 8 karakter" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition">
      </div>
      <label class="flex items-start gap-2">
        <input type="checkbox" class="w-4 h-4 accent-blue-600 mt-0.5">
        <span class="text-xs text-gray-500">Saya menyetujui <a href="#" class="text-blue-600 underline">Syarat & Ketentuan</a></span>
      </label>
      <button type="button" class="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition shadow-md">Daftar</button>
    </form>
    <p class="text-center text-sm text-gray-500 mt-6">Sudah punya akun? <a href="#" class="text-blue-600 font-semibold hover:underline">Masuk</a></p>
  </div>
</div>
```

<div class="preview-box">
<div class="min-h-[550px] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-6 rounded-xl">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-1">Buat Akun Baru</h1>
    <p class="text-gray-500 text-sm mb-6">Gratis! Tidak perlu kartu kredit.</p>
    <form class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div><label class="block text-sm font-medium text-gray-700 mb-1">Nama Depan</label><input type="text" placeholder="Agung" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"></div>
        <div><label class="block text-sm font-medium text-gray-700 mb-1">Nama Belakang</label><input type="text" placeholder="Driyo" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"></div>
      </div>
      <div><label class="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" placeholder="nama@email.com" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"></div>
      <div><label class="block text-sm font-medium text-gray-700 mb-1">Password</label><input type="password" placeholder="Min. 8 karakter" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"></div>
      <label class="flex items-start gap-2"><input type="checkbox" class="w-4 h-4 accent-blue-600 mt-0.5"><span class="text-xs text-gray-500">Saya menyetujui <a href="#" class="text-blue-600 underline">Syarat & Ketentuan</a></span></label>
      <button type="button" class="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition shadow-md">Daftar</button>
    </form>
    <p class="text-center text-sm text-gray-500 mt-6">Sudah punya akun? <a href="#" class="text-blue-600 font-semibold hover:underline">Masuk</a></p>
  </div>
</div>
</div>
