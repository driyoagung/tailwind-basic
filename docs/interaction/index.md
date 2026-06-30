# State & Interaction (Basic)

Website yang hidup adalah website yang bereaksi saat pengguna berinteraksi dengannya. Tailwind membuat pengaturan *state* (kondisi) elemen seperti saat disorot mouse (*Hover*) atau diklik (*Active*) semudah menambahkan awalan (*modifier*).

---

## 1. Hover State (`hover:*`)

Awalan `hover:` digunakan untuk mengubah gaya suatu elemen HANYA pada saat kursor *mouse* berada di atas elemen tersebut.
Umumnya digunakan pada tombol atau tautan (link).

```html
<!-- Arahkan mouse Anda ke tombol di bawah ini -->
<button class="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold transition
               hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1">
  Tombol Interaktif
</button>
```

<div class="preview-box">
<button class="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold transition hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1">
  Tombol Interaktif
</button>
</div>

> **Tip:** Selalu kombinasikan dengan utilitas `transition` agar perubahannya halus dan tidak kaku (akan dibahas lebih detail di modul Animasi).

---

## 2. Focus State (`focus:*`)

Awalan `focus:` bereaksi ketika sebuah elemen sedang aktif/difokuskan oleh pengguna (misalnya saat kita mengklik atau mengetik di dalam kotak input teks).
Ini sangat krusial untuk aksesibilitas (pengguna *keyboard*).

```html
<!-- Klik pada kolom input di bawah ini -->
<div class="flex flex-col gap-2 max-w-sm">
  <label class="font-semibold text-gray-700">Nama Lengkap</label>
  <input type="text" 
         placeholder="Ketik sesuatu..." 
         class="border-2 border-gray-300 rounded p-2 outline-none
                focus:border-blue-500 focus:bg-blue-50 focus:ring-4 focus:ring-blue-100">
</div>
```

<div class="preview-box">
<div class="flex flex-col gap-2 max-w-sm">
  <label class="font-semibold text-gray-700">Nama Lengkap</label>
  <input type="text" placeholder="Ketik sesuatu..." class="border-2 border-gray-300 rounded p-2 outline-none focus:border-blue-500 focus:bg-blue-50 focus:ring-4 focus:ring-blue-100">
</div>
</div>

---

## 3. Active State (`active:*`)

Pernah memperhatikan bahwa saat Anda mengklik (menekan & menahan) tombol di ponsel, tombolnya terlihat seolah-olah ditekan masuk ke dalam layar? Itulah state `active:`.

```html
<!-- Klik dan TAHAN tombol ini -->
<button class="bg-green-500 text-white px-6 py-2 rounded-lg font-bold shadow-md
               active:bg-green-700 active:scale-95 active:shadow-inner">
  Klik & Tahan Saya!
</button>
```

<div class="preview-box">
<button class="bg-green-500 text-white px-6 py-2 rounded-lg font-bold shadow-md active:bg-green-700 active:scale-95 active:shadow-inner">
  Klik & Tahan Saya!
</button>
</div>

---

## 4. Disabled State (`disabled:*`)

Sangat umum dalam pengembangan web untuk mematikan (*disable*) sebuah tombol jika form belum diisi lengkap. Awalan `disabled:` akan mengubah gaya elemen saat elemen HTML tersebut memiliki atribut `disabled`.

```html
<div class="flex gap-4">
  <!-- Tombol Normal -->
  <button class="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700">
    Kirim Pesan
  </button>
  
  <!-- Tombol Disabled -->
  <button disabled 
          class="bg-blue-600 text-white px-4 py-2 rounded font-bold 
                 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-75">
    Kirim Pesan (Disabled)
  </button>
</div>
```

<div class="preview-box">
<div class="flex flex-wrap gap-4">
  <button class="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700">
    Kirim Pesan
  </button>
  <button disabled class="bg-blue-600 text-white px-4 py-2 rounded font-bold disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-75">
    Kirim Pesan (Disabled)
  </button>
</div>
</div>
