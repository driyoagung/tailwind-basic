---
title: Group & Peer (Advanced Interaction)
description: Kontrol state berbasis elemen lain — group-hover, peer-checked, peer-focus, aria-variant, data-variant, dan peer chain di Tailwind CSS.
---

# Group & Peer (Advanced Interaction)

Ini fitur yang membedakan Tailwind dari framework kuno. Kadang kita ingin **mengubah gaya elemen A ketika elemen B di-hover/di-check** — tanpa JavaScript.

---

## 1. Group & Group-Hover (`group-hover:*`)

Class `group` pada parent, lalu `group-hover:*` pada child yang ingin bereaksi.

<Preview :html='`<!-- Arahkan mouse ke mana pun di dalam kartu -->
<div class="group bg-white border-2 border-gray-200 p-6 rounded-xl hover:bg-blue-600 hover:border-blue-600 transition cursor-pointer max-w-sm">
  <h3 class="text-xl font-bold text-gray-800 group-hover:text-white transition">
    Kartu Interaktif
  </h3>
  <p class="text-gray-500 mt-2 group-hover:text-blue-100 transition">
    Saat Anda menyentuh area mana pun dari kartu ini, teks di dalamnya ikut berubah warna.
  </p>
</div>`' />

### Varian group lainnya

| Modifier | Bereaksi saat |
| --- | --- |
| `group-hover:*` | parent group di-hover |
| `group-focus:*` | parent group difokuskan |
| `group-active:*` | parent group ditekan |
| `group-disabled:*` | parent group disabled |
| `group-[.is-active]:*` | parent group punya class `is-active` |

---

## 2. Named Groups

Saat ada nested groups, gunakan **named group** untuk kontrol presisi: `group/card` + `group-hover/card:*`.

<Preview :html='`<div class="group/card bg-white border-2 border-gray-200 p-4 rounded-xl max-w-sm">
  <div class="group/img relative overflow-hidden rounded-lg">
    <img src="https://images.unsplash.com/photo-1559423969-ee189cc4a093?w=300&h=180&fit=crop" class="w-full h-32 object-cover transition group-hover/img:scale-105" alt="gambar" />
  </div>
  <h3 class="font-bold mt-3 group-hover/card:text-blue-600 transition">Named Group</h3>
  <p class="text-sm text-gray-500 group-hover/card:text-blue-500 transition">Hover kartu → teks biru, hover gambar → zoom</p>
</div>`' />

---

## 3. Peer & Peer-Checked (`peer-*`)

`peer` bekerja pada **sibling** (elemen bersebelahan). Murni CSS — toggle/checkbox custom tanpa JavaScript.

Aturan: `peer` pada elemen pertama (biasanya `<input>`), `peer-*:` pada elemen **setelahnya**.

<Preview :html='`<label class="flex items-center cursor-pointer max-w-sm p-4 border rounded-lg hover:bg-gray-50">
  <input type="checkbox" class="peer sr-only" />
  <div class="w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-focus:ring-2 transition">
    <svg class="w-4 h-4 text-white hidden peer-checked:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <span class="ml-3 font-medium text-gray-700 peer-checked:text-blue-600 peer-checked:line-through transition">
    Saya menyetujui syarat & ketentuan
  </span>
</label>`' />

### Varian peer lainnya

| Modifier | Bereaksi saat peer |
| --- | --- |
| `peer-checked:*` | di-check |
| `peer-focus:*` | difokuskan |
| `peer-hover:*` | di-hover |
| `peer-invalid:*` | gagal validasi HTML5 |
| `peer-disabled:*` | disabled |
| `peer-placeholder-shown:*` | input masih kosong |
| `peer-[:not(:checked)]:*` | negasi (tidak di-check) |

::: warning Peer hanya ke depan
`peer-*` hanya mengubah elemen **setelah** peer di DOM. Jika Anda butuh mengubah elemen **sebelum** peer, balik urutan dengan flex-row-reverse, atau gunakan `has-*` (lihat bawah).
:::

---

## 4. `has-*` (parent selector)

Tailwind v4 mendukung `has-*` — mengubah parent berdasarkan state child. Kebalikan `group-hover`.

<Preview :html='`<div class="has-[:checked]:bg-blue-50 has-[:checked]:border-blue-500 border-2 border-gray-200 rounded-lg p-4 transition">
  <label class="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" class="w-5 h-5 rounded" />
    <span>Centang ini → parent border berubah</span>
  </label>
</div>`' />

---

## 5. ARIA & Data Variants

Tailwind v4 mendukung selector berbasis atribut ARIA dan `data-*`:

| Modifier | Setara CSS |
| --- | --- |
| `aria-checked:*` | `[aria-checked="true"]` |
| `aria-disabled:*` | `[aria-disabled="true"]` |
| `aria-expanded:*` | `[aria-expanded="true"]` |
| `aria-pressed:*` | `[aria-pressed="true"]` |
| `data-[size=sm]:*` | `[data-size="sm"]` |
| `data-[open]:*` | `[data-open]` |

Berguna saat Anda mengelola state via JavaScript (mis. data atribut dari framework) dan ingin styling tailwind bereaksi.

<Preview :html='`<div class="grid grid-cols-2 gap-3">
  <button class="p-3 rounded-lg border-2 border-gray-300 aria-pressed:border-blue-500 aria-pressed:bg-blue-50 aria-pressed:text-blue-700 transition">
    aria-pressed (toggle, klik lihat efek)
  </button>
  <button data-size="lg" class="p-3 rounded-lg border-2 border-gray-300 data-[size=lg]:border-green-500 data-[size=lg]:text-green-700 transition">
    data-size=lg (hijau otomatis)
  </button>
</div>`' />

---

## 6. Peer Chain (jeda)

Anda bisa merangkai beberapa peer untuk logic kompleks. Contoh: tampilkan pesan error hanya ketika input **invalid AND sudah pernah difokuskan**.

<Preview :html='`<form class="max-w-sm space-y-1">
  <input type="email" placeholder="email@salah" class="peer w-full border-2 border-gray-300 bg-white rounded p-2 outline-none focus:border-blue-500 focus:invalid:border-red-500 focus:invalid:ring-2 focus:invalid:ring-red-100 transition" required />
  <p class="text-sm text-red-600 hidden peer-focus:peer-invalid:block">
    Email tidak valid! Perhatikan format email yang benar.
  </p>
  <p class="text-sm text-green-600 hidden peer-focus:peer-valid:block">
    Email valid! ✓
  </p>
</form>`' />

Ketik email salah → fokus → pesan error muncul. Ketik email benar → pesan sukses.

---

## Ringkasan Cepat

| Tujuan | Pattern |
| --- | --- |
| Parent → Child | `group` + `group-hover:*` |
| Named group | `group/name` + `group-hover/name:*` |
| Sibling → Sibling setelahnya | `peer` + `peer-checked:*` |
| Child → Parent | `has-[:checked]:*` |
| ARIA state | `aria-pressed:*`, `aria-expanded:*` |
| Data atribut | `data-[key=value]:*` |
| Peer chain | `peer-focus:peer-invalid:*` |

Langkah berikutnya: pelajari [Transitions & Effects](/effects/).