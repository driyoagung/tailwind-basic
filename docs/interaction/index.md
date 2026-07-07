---
title: State & Interaction (Basic)
description: Hover, focus, focus-visible, focus-within, active, dan disabled state di Tailwind CSS untuk elemen interaktif.
---

# State & Interaction (Basic)

Website yang hidup bereaksi saat pengguna berinteraksi. Tailwind membuat pengaturan *state* elemen semudah menambahkan awalan (*modifier*): `hover:`, `focus:`, `active:`, `disabled:`.

---

## 1. Hover State (`hover:*`)

Efek saat kursor mouse berada di atas elemen. Paling sering dipakai pada tombol dan tautan.

<Preview :html='`<!-- Arahkan mouse ke tombol di bawah -->
<button class="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold transition hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1">
  Tombol Interaktif
</button>`' />

::: tip Selalu pakai `transition`
Tanpa `transition`, perubahan state terjadi instan (kaku). Tambahkan `transition` (atau `transition-all` / `transition-colors`) agar perubahan halus. Pelajari detail di [Transitions](/effects/).
:::

---

## 2. Focus State (`focus:*`)

Bereaksi saat elemen sedang aktif/difokuskan — mis. saat klik input teks atau navigasi via keyboard (Tab). **Krusial untuk aksesibilitas.**

<Preview :html='`<div class="flex flex-col gap-2 max-w-sm">
  <label class="font-semibold text-gray-700">Nama Lengkap</label>
  <input type="text" placeholder="Ketik sesuatu..." class="border-2 border-gray-300 bg-white rounded p-2 outline-none focus:border-blue-500 focus:bg-blue-50 focus:ring-4 focus:ring-blue-100" />
</div>`' />

---

## 3. `focus-visible` vs `focus`

`focus` bereaksi untuk **semua** jenis fokus (mouse click + keyboard). `focus-visible` hanya bereaksi saat fokus via **keyboard** (Tab) — tidak terlihat saat klik mouse. Ini perilaku yang lebih ideal: ring focus hanya muncul saat user butuh indikator keyboard, tidak mengganggu klik mouse.

<Preview :html='`<div class="flex gap-4 items-center">
  <button class="bg-blue-500 text-white px-4 py-2 rounded focus:ring-4 focus:ring-blue-300">
    focus: (selalu muncul ring)
  </button>
  <button class="bg-blue-500 text-white px-4 py-2 rounded focus-visible:ring-4 focus-visible:ring-blue-300 focus:outline-none">
    focus-visible: (ring hanya saat Tab)
  </button>
</div>`' />

Coba: klik tombol pertama → ring muncul. Klik tombol kedua → tidak ada ring. Lalu navigasikan dengan **Tab** → kedua tombol muncul ring.

::: warning Aksesibilitas keyboard
Selalu beri indikator focus yang terlihat. Jangan `focus:outline-none` tanpa pengganti (ring/border). Pengguna keyboard butuh tahu elemen mana yang sedang aktif.
:::

---

## 4. `focus-within`

`focus-within` bereaksi saat **elemen ini atau anak di dalamnya** sedang difokuskan. Berbeda dari `focus` yang hanya bereaksi saat elemen itu sendiri difokuskan.

<Preview :html='`<div class="border-2 border-gray-200 rounded-lg p-4 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
  <label class="block text-sm text-gray-600 mb-1">Email</label>
  <input type="email" placeholder="anda@email.com" class="w-full border border-gray-300 bg-white rounded p-2 outline-none focus:border-blue-500" />
  <p class="text-xs text-gray-400 mt-2">Border parent berubah saat input di dalamnya difokuskan (focus-within)</p>
</div>`' />

Berguna untuk: form group highlight, search bar dengan ikon, card yang berisi input.

---

## 5. Active State (`active:*`)

Saat tombol **ditekan dan ditahan** (mouse down / touch). Efek visual "ditekan masuk".

<Preview :html='`<button class="bg-green-500 text-white px-6 py-2 rounded-lg font-bold shadow-md transition active:bg-green-700 active:scale-95 active:shadow-inner">
  Klik & Tahan Saya!
</button>`' />

Kombinasi `active:scale-95` + `active:shadow-inner` memberi efek "ditekan" yang realistis.

---

## 6. Disabled State (`disabled:*`)

Bereaksi saat elemen punya atribut HTML `disabled`. Umum untuk tombol yang nonaktif saat form belum lengkap.

<Preview :html='`<div class="flex flex-wrap gap-4">
  <button class="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition">
    Kirim Pesan
  </button>
  <button disabled class="bg-blue-600 text-white px-4 py-2 rounded font-bold disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-75">
    Kirim Pesan (Disabled)
  </button>
</div>`' />

---

## 7. Variants Lainnya

| Modifier | efek saat |
| --- | --- |
| `hover:` | kursor di atas |
| `focus:` | elemen difokuskan |
| `focus-visible:` | difokuskan via keyboard |
| `focus-within:` | elemen atau child difokuskan |
| `active:` | ditekan & ditahan |
| `disabled:` | elemen disabled |
| `visited:` | link sudah dikunjungi |
| `target:` | elemen jadi target anchor URL |
| `required:` | input punya atribut required |
| `placeholder-shown:` | input masih kosong |

---

## Ringkasan Cepat

| Tujuan | Class |
| --- | --- |
| Hover | `hover:*` |
| Focus (semua) | `focus:*` |
| Focus (keyboard only) | `focus-visible:*` |
| Focus di parent saat child fokus | `focus-within:*` |
| Ditekan | `active:*` |
| Disabled | `disabled:*` |

Langkah berikutnya: pelajari [Group & Peer (Advanced Interaction)](/interaction/group-peer).