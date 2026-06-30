# Overflow & Object Fit

Modul terakhir dari sesi Layout adalah menangani konten (seperti teks panjang atau gambar) yang berukuran lebih besar daripada *container*-nya.

---

## 1. Overflow (`overflow-*`)

Apa yang terjadi jika Anda memiliki kotak berukuran `h-32` (tinggi sekitar 8rem) namun teks di dalamnya sangat panjang? Secara bawaan CSS, teks akan meluber keluar kotak (*overflow*).

Utilitas `overflow` di Tailwind:
- `overflow-visible`: (Default) Konten meluber keluar bebas.
- `overflow-hidden`: Konten yang keluar dari batas kotak akan dipotong (hilang).
- `overflow-scroll`: Selalu menampilkan *scrollbar*, konten bisa digulir.
- `overflow-auto`: (Disarankan) Menampilkan *scrollbar* HANYA jika konten benar-benar meluber.
- Ada juga varian khusus sumbu tertentu: `overflow-x-auto` (horizontal) atau `overflow-y-auto` (vertikal).

```html
<div class="grid grid-cols-2 gap-4 h-48">
  <!-- Hidden -->
  <div class="bg-blue-100 p-4 rounded-lg overflow-hidden border border-blue-300">
    <h3 class="font-bold">Overflow Hidden</h3>
    <p class="mt-2 text-sm">Teks ini sangat panjang. Terus berlanjut ke bawah. Namun karena kita menggunakan overflow-hidden, teks yang berada di luar batas ketinggian (h-48) akan diabaikan dan dipotong secara paksa. Anda tidak akan bisa melihat sisa teksnya.</p>
  </div>

  <!-- Auto -->
  <div class="bg-green-100 p-4 rounded-lg overflow-y-auto border border-green-300">
    <h3 class="font-bold">Overflow Y Auto</h3>
    <p class="mt-2 text-sm">Teks ini juga sangat panjang. Namun karena kita menggunakan overflow-y-auto, elemen ini akan mengaktifkan *scrollbar* vertikal di sisi kanan secara otomatis. Anda bisa men-scroll kotak ini ke bawah untuk membaca sisa dari kalimat panjang ini sampai selesai tanpa merusak elemen lain di luar kotak ini.</p>
  </div>
</div>
```

<div class="preview-box">
<div class="grid grid-cols-2 gap-4 h-48">
  <div class="bg-blue-100 p-4 rounded-lg overflow-hidden border border-blue-300">
    <h3 class="font-bold">Overflow Hidden</h3>
    <p class="mt-2 text-sm">Teks ini sangat panjang. Terus berlanjut ke bawah. Namun karena kita menggunakan overflow-hidden, teks yang berada di luar batas ketinggian (h-48) akan diabaikan dan dipotong secara paksa. Anda tidak akan bisa melihat sisa teksnya.</p>
  </div>
  <div class="bg-green-100 p-4 rounded-lg overflow-y-auto border border-green-300">
    <h3 class="font-bold">Overflow Y Auto</h3>
    <p class="mt-2 text-sm">Teks ini juga sangat panjang. Namun karena kita menggunakan overflow-y-auto, elemen ini akan mengaktifkan scrollbar vertikal di sisi kanan secara otomatis. Anda bisa men-scroll kotak ini ke bawah untuk membaca sisa dari kalimat panjang ini sampai selesai tanpa merusak elemen lain di luar kotak ini.</p>
  </div>
</div>
</div>

---

## 2. Object Fit (`object-*`)

Sangat sering kita mendapati gambar (avatar user, thumbnail artikel) yang ukurannya dipaksa kotak (`w-24 h-24`) namun aspek rasio gambar aslinya adalah persegi panjang. Hasilnya? Gambar akan terlihat "gepeng" atau "penyet".

Solusinya adalah `object-fit`.

- `object-cover`: (Paling sering digunakan) Gambar akan di-zoom dan di-crop secara otomatis agar muat ke dalam kotak tanpa merusak rasio wajah/aspek.
- `object-contain`: Seluruh bagian gambar dipaksa muat, meskipun meninggalkan ruang kosong di atas/bawah.
- `object-fill`: (Default) Memaksa gambar mengisi penuh ruang, menyebabkan distorsi (gepeng).

```html
<div class="grid grid-cols-3 gap-4 text-center text-sm font-bold">
  <div>
    <p class="mb-2">Default (Fill/Gepeng)</p>
    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400" class="w-full h-32 rounded-lg" alt="Orang" />
  </div>
  
  <div>
    <p class="mb-2">Object Cover (Bagus!)</p>
    <!-- Menambahkan class object-cover menyelesaikan masalah rasio aspect -->
    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400" class="w-full h-32 object-cover rounded-lg" alt="Orang" />
  </div>
  
  <div>
    <p class="mb-2">Object Contain</p>
    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400" class="w-full h-32 object-contain bg-gray-200 rounded-lg" alt="Orang" />
  </div>
</div>
```

<div class="preview-box">
<div class="grid grid-cols-3 gap-4 text-center text-sm font-bold">
  <div>
    <p class="mb-2 text-red-500">Default (Gepeng)</p>
    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400" class="w-full h-32 rounded-lg border-2 border-red-500" alt="Orang" />
  </div>
  <div>
    <p class="mb-2 text-green-600">Object Cover</p>
    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400" class="w-full h-32 object-cover rounded-lg border-2 border-green-500" alt="Orang" />
  </div>
  <div>
    <p class="mb-2 text-blue-600">Object Contain</p>
    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400" class="w-full h-32 object-contain bg-gray-200 rounded-lg border-2 border-blue-500" alt="Orang" />
  </div>
</div>
</div>
