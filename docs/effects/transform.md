---
title: Transform
description: Scale, rotate, translate, skew, 3D transform, perspective, dan transform-gpu di Tailwind CSS.
---

# Transform

Transform mengubah bentuk visual elemen (besar, putar, miring, geser) **tanpa merusak layout** elemen di sekitarnya.

::: tip Tailwind v4
Tidak perlu class `transform` sebelum properti di bawah. Langung tulis `scale-*`, `rotate-*`, dll.
:::

---

## 1. Scale (Memperbesar/Memperkecil)

`scale-*` (100 = 100%/ukuran asli).`scale-110` = membesar 10%, `scale-90` = mengecil 10%.

Varian per sumbu: `scale-x-*`, `scale-y-*`.

<Preview :html='`<div class="flex gap-8 items-center">
  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" class="w-32 rounded-lg transition duration-300 hover:scale-110 shadow-lg cursor-pointer" alt="sepatu" />
  <button class="bg-indigo-500 text-white px-4 py-2 rounded-lg font-bold transition duration-150 hover:scale-95 active:scale-90">
    Hover Me
  </button>
</div>`' />

---

## 2. Rotate (Memutar)

`rotate-*` dalam derajat. `-rotate-*` untuk berlawanan arah jarum jam.

`rotate-0`, `rotate-1`, `rotate-2`, `rotate-3`, `rotate-6`, `rotate-12`, `rotate-45`, `rotate-90`, `rotate-180`.

<Preview :html='`<button class="group bg-blue-100 p-4 rounded-full transition hover:bg-blue-200">
  <svg class="w-8 h-8 text-blue-600 transition duration-500 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
  </svg>
</button>`' />

---

## 3. Translate (Menggeser)

- `translate-x-*` — geser kiri/kanan (+kanan, -kiri)
- `translate-y-*` — geser atas/bawah (+bawah, -atas)

<Preview :html='`<div class="flex gap-4 p-8 pt-12 border rounded-lg bg-gray-50 text-white font-bold text-center">
  <div class="w-24 h-24 bg-rose-400 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-4 flex items-center justify-center p-2 cursor-pointer">
    Geser Ke Atas
  </div>
  <div class="w-24 h-24 bg-cyan-400 rounded-lg shadow-md transition-transform duration-300 hover:translate-x-4 flex items-center justify-center p-2 cursor-pointer">
    Geser Ke Kanan
  </div>
</div>`' />

---

## 4. Skew (Memiringkan)

- `skew-x-*` — miring pada sumbu X
- `skew-y-*` — miring pada sumbu Y
- `-skew-*` untuk arah berlawanan

`skew-0`, `skew-1`, `skew-2`, `skew-3`, `skew-6`, `skew-12`.

<Preview :html='`<div class="flex gap-4">
  <div class="w-24 h-24 bg-amber-400 rounded-lg shadow flex items-center justify-center text-sm font-bold transition-transform duration-300 hover:skew-x-12 cursor-pointer">skew-x-12</div>
  <div class="w-24 h-24 bg-teal-400 rounded-lg shadow flex items-center justify-center text-sm font-bold transition-transform duration-300 hover:-skew-y-6 cursor-pointer">-skew-y-6</div>
</div>`' />

---

## 5. Kombinasi Transform

Anda dapat merangkai beberapa transform — class digabung otomatis oleh Tailwind.

<Preview :html='`<div class="flex gap-6 items-center p-4">
  <div class="w-20 h-20 bg-purple-500 text-white rounded-lg shadow-lg flex items-center justify-center text-xs font-bold transition-transform duration-500 hover:scale-110 hover:rotate-12 hover:-translate-y-2 cursor-pointer">
    Scale + Rotate + Translate
  </div>
  <div class="w-20 h-20 bg-emerald-500 text-white rounded-lg shadow-lg flex items-center justify-center text-xs font-bold transition-transform duration-500 hover:scale-90 hover:-rotate-12 cursor-pointer">
    Shrink + Counter-Rotate
  </div>
</div>`' />

---

## 6. 3D Transform & Perspective

Tailwind v4 mendukung transform 3D: `rotate-x-*`, `rotate-y-*`, `rotate-z-*`, `translate-z-*`. Untuk efek 3D, parent butuh `perspective-*` atau `[perspective:...]`.

<Preview :html='`<div class="[perspective:1000px] flex justify-center p-8">
  <div class="w-32 h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-2xl transition-transform duration-700 hover:rotate-y-180 [transform-style:preserve-3d] flex items-center justify-center text-white font-bold">
    Hover: Flip 3D
  </div>
</div>`' />

::: tip `transform-gpu`
`transform-gpu` menambah `translateZ(0)` untuk memaksa hardware acceleration (GPU layer). Berguna bila animasi shutterish/stutter pada mobile.
:::

---

## 7. `will-change` Hint

`will-change-transform` memberitahu browser elemen akan berubah — browser pre-alokasikan GPU layer. Tambahkan **sebelum animasi terjadi**, bukan saat.

::: warning Jangan berlebihan
`will-change-*` yang terlalu banyak mengonsumsi memori. Letakkan saat interaksi mulai akan terjadi (mis. parent `group` punya `will-change` saat `group-hover`), bukan pada semua elemen.
:::

---

## Ringkasan Cepat

| Tujuan | Class |
| --- | --- |
| Scale | `scale-*`, `scale-x-*`, `scale-y-*` |
| Rotate | `rotate-*`, `-rotate-*` |
| Translate | `translate-x-*`, `translate-y-*` |
| Skew | `skew-x-*`, `skew-y-*` |
| 3D Rotate | `rotate-x-*`, `rotate-y-*` |
| 3D Container | `[perspective:...]`, `[transform-style:preserve-3d]` |
| GPU | `transform-gpu`, `will-change-transform` |

Langkah berikutnya: pelajari [Keyframe Animations](/effects/animation) dan [Dark Mode](/effects/dark-mode).