# Pengenalan Tailwind CSS

Selamat datang di materi dasar Tailwind CSS! Tailwind adalah sebuah *framework CSS* yang sangat populer karena pendekatannya yang unik: **Utility-First**.

## Apa itu Utility-First?

Jika di CSS tradisional atau framework seperti Bootstrap Anda menulis class bernama `.btn` atau `.card` yang menyimpan puluhan baris aturan CSS, di Tailwind Anda merakit tampilan dengan class-class kecil yang masing-masing hanya memiliki **satu fungsi spesifik** (utility).

Contoh:
- `text-center` (membuat teks di tengah)
- `bg-blue-500` (memberikan background biru)
- `p-4` (memberikan padding 1rem)
- `rounded-xl` (membuat sudut melengkung)

## Kenapa Tailwind CSS?

1. **Tidak Pusing Memikirkan Nama Class**: Anda tidak perlu lagi buang waktu memikirkan nama class seperti `.card-header-title-inner`.
2. **File CSS Tidak Membengkak**: Karena menggunakan class yang sudah ada (reusable), ukuran file CSS Anda akan tetap kecil meskipun website semakin kompleks.
3. **Mendesain Tanpa Meninggalkan HTML**: Anda bisa membuat UI kompleks hanya dengan melihat file HTML/Vue/React Anda, tanpa perlu bolak-balik buka file `.css`.

## Contoh Sederhana

Mari kita lihat perbedaan antara HTML biasa tanpa *styling* dengan HTML yang menggunakan kelas-kelas utilitas Tailwind CSS.

### Kode HTML Biasa Tanpa Tailwind
```html
<div>
  <h2>Selamat Datang!</h2>
  <p>Ini adalah tampilan biasa tanpa styling apapun.</p>
</div>
```

<div class="preview-box">
<div>
  <h2>Selamat Datang!</h2>
  <p>Ini adalah tampilan biasa tanpa styling apapun.</p>
</div>
</div>

### Kode dengan Tailwind CSS
```html
<div class="bg-blue-100 border border-blue-500 p-6 rounded-xl shadow-md text-center max-w-sm mx-auto">
  <h2 class="text-2xl font-bold text-blue-800 mb-2">Selamat Datang!</h2>
  <p class="text-blue-600">Ini adalah tampilan cantik menggunakan utility-first Tailwind CSS.</p>
</div>
```

<div class="preview-box">
<div class="bg-blue-100 border border-blue-500 p-6 rounded-xl shadow-md text-center max-w-sm mx-auto">
  <h2 class="text-2xl font-bold text-blue-800 mb-2">Selamat Datang!</h2>
  <p class="text-blue-600">Ini adalah tampilan cantik menggunakan utility-first Tailwind CSS.</p>
</div>
</div>

> **Tip:** Coba ubah angka pada `bg-blue-100` menjadi `bg-red-100` di lingkungan lokal Anda, dan lihat warnanya berubah seketika! Tailwind menggunakan skala warna dari `50` (paling terang) hingga `950` (paling gelap).

Di halaman selanjutnya, kita akan mulai membedah *utilities* ini satu per satu, dimulai dari yang paling sering digunakan: **Spacing & Sizing**.
