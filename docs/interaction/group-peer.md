# Group & Peer (Advanced Interaction)

Ini adalah fitur interaksi yang membedakan penulisan Tailwind dari *framework* kuno. Kadang, kita ingin **merubah gaya suatu elemen ketika elemen LAIN di-*hover***. 

Contoh: Kita meng-*hover* seluruh area kotak (Card), tapi yang berubah warna adalah Teks di dalamnya.

---

## 1. Group & Group-Hover (`group-hover:*`)

Gunakan class `group` pada elemen induk (*parent*), kemudian gunakan `group-hover:*` pada elemen anak (*child*) yang ingin bereaksi.

```html
<!-- Arahkan mouse ke mana saja di dalam KOTAK PUTIH ini -->
<div class="group bg-white border-2 border-gray-200 p-6 rounded-xl hover:bg-blue-600 hover:border-blue-600 transition cursor-pointer max-w-sm">
  
  <!-- Teks ini akan bereaksi saat pembungkusnya di-hover -->
  <h3 class="text-xl font-bold text-gray-800 group-hover:text-white transition">
    Kartu Interaktif
  </h3>
  
  <!-- Ikon/Elemen lain juga bereaksi -->
  <p class="text-gray-500 mt-2 group-hover:text-blue-100 transition">
    Saat Anda menyentuh area mana pun dari kotak ini, warna font dari teks ini ikut berubah secara otomatis.
  </p>
  
</div>
```

<div class="preview-box">
<div class="group bg-white border-2 border-gray-200 p-6 rounded-xl hover:bg-blue-600 hover:border-blue-600 transition cursor-pointer max-w-sm">
  <h3 class="text-xl font-bold text-gray-800 group-hover:text-white transition">
    Kartu Interaktif
  </h3>
  <p class="text-gray-500 mt-2 group-hover:text-blue-100 transition">
    Saat Anda menyentuh area mana pun dari kotak ini, warna font dari teks ini ikut berubah secara otomatis.
  </p>
</div>
</div>

> **Tip:** Selain `group-hover`, tersedia juga `group-focus` atau `group-active`.

---

## 2. Peer & Peer-Checked (`peer-*`)

Jika `group` bekerja dari *Parent ke Child*, maka `peer` bekerja pada **Elemen yang Bersebelahan** (Sibling). 
Ini adalah "ilmu hitam" CSS modern yang memungkinkan kita membuat fungsionalitas Toggle atau Checkbox *custom* murni dengan CSS tanpa sebaris JavaScript pun!

Gunakan `peer` pada elemen pertama (biasanya `<input>`), lalu gunakan `peer-checked:*`, `peer-hover:*`, atau `peer-focus:*` pada elemen setelahnya.

```html
<label class="flex items-center cursor-pointer max-w-sm p-4 border rounded-lg hover:bg-gray-50">
  
  <!-- 1. Jadikan checkbox sebagai 'peer' -->
  <input type="checkbox" class="peer sr-only" />
  
  <!-- 2. Kotak custom yang bereaksi saat peer di-check -->
  <div class="w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center
              peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-focus:ring-2">
    <!-- Ikon Centang (hanya muncul saat checked) -->
    <svg class="w-4 h-4 text-white hidden peer-checked:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
    </svg>
  </div>
  
  <!-- 3. Teks yang berubah warna saat checkbox aktif -->
  <span class="ml-3 font-medium text-gray-700 peer-checked:text-blue-600 peer-checked:line-through">
    Saya menyetujui syarat & ketentuan
  </span>
  
</label>
```

<div class="preview-box">
<label class="flex items-center cursor-pointer max-w-sm p-4 border rounded-lg hover:bg-gray-50">
  <input type="checkbox" class="peer sr-only" />
  <div class="w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-focus:ring-2">
    <svg class="w-4 h-4 text-white hidden peer-checked:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <span class="ml-3 font-medium text-gray-700 peer-checked:text-blue-600 peer-checked:line-through transition">
    Saya menyetujui syarat & ketentuan
  </span>
</label>
</div>
