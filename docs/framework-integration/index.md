---
title: Framework Integration
description: Integrasi Tailwind CSS dengan Laravel Blade, Vue.js, dan React — dynamic class, conditional class, clsx, dan tailwind-merge.
---

# Framework Integration

Tailwind CSS bekerja dengan framework apa pun. Tantangan utamanya: **mengelola class dinamis** — class yang berubah berdasarkan state/props.

---

## 1. Laravel Blade

### Dynamic Class

```blade
{{-- Class statis --}}
<div class="bg-white p-4 rounded-lg shadow">Konten</div>

{{-- Class dinamis berdasarkan variabel --}}
<div class="p-4 rounded-lg shadow {{ $active ? 'bg-blue-600 text-white' : 'bg-white text-gray-800' }}">
    {{ $label }}
</div>
```

### Conditional Class dengan `@class`

Laravel 9+ punya direktif `@class` yang lebih bersih:

```blade
<button @class([
    'px-4 py-2 rounded-lg font-bold transition',
    'bg-blue-600 text-white hover:bg-blue-700' => $active,
    'bg-gray-200 text-gray-500' => !$active,
])>
    {{ $label }}
</button>
```

### Blade Component

Buat komponen tombol yang reusable: `resources/views/components/button.blade.php`

```blade
@props(['variant' => 'primary', 'size' => 'md'])

@php
$variants = [
    'primary' => 'bg-blue-600 text-white hover:bg-blue-700',
    'secondary' => 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    'danger' => 'bg-red-600 text-white hover:bg-red-700',
];
$sizes = [
    'sm' => 'px-3 py-1.5 text-sm',
    'md' => 'px-4 py-2',
    'lg' => 'px-6 py-3 text-lg',
];
@endphp

<button {{ $attributes->merge([
    'class' => 'font-bold rounded-lg transition ' . $variants[$variant] . ' ' . $sizes[$size]
]) }}>
    {{ $slot }}
</button>
```

Penggunaan:
```blade
<x-button variant="primary" size="lg">Simpan</x-button>
<x-button variant="danger" size="sm">Hapus</x-button>
```

::: tip Class conflict
`$attributes->merge(['class' => '...'])` menggabungkan class dari pemanggil dengan class default. Class dari pemanggil ditambah di akhir.
:::

---

## 2. Vue.js

### `:class` Binding

```vue
<template>
  <button :class="buttonClass" @click="toggle">
    {{ active ? 'Aktif' : 'Nonaktif' }}
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'

const active = ref(false)
const buttonClass = computed(() => [
  'px-4 py-2 rounded-lg font-bold transition',
  active.value
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-gray-200 text-gray-800'
])
</script>
```

### Array Syntax

```vue
<div :class="['p-4 rounded-lg', isActive && 'bg-blue-50', hasError && 'bg-red-50 border-red-300']">
  Konten
</div>
```

### Object Syntax

```vue
<div :class="{
  'p-4 rounded-lg': true,
  'bg-blue-50': isActive,
  'bg-red-50 border-red-300': hasError,
}">
  Konten
</div>
```

### `:style` Binding

Hindari `:style` untuk nilai yang ada di utility Tailwind. Gunakan hanya untuk nilai yang benar-benar dinamis (mis. posisi drag-and-drop):

```vue
<div :style="{ transform: `translate(${x}px, ${y}px)` }" class="absolute cursor-move">
  Drag me
</div>
```

::: tip `:class` vs `:style`
`:class` untuk flip class. `:style` untuk nilai inline yang tidak mungkin di utility (posisi runtime, animasi JS). Jangan `:style="fontWeight: 'bold' "` — pakai `class="font-bold"`.
:::

---

## 3. React

### `className` String

```jsx
function Button({ variant = 'primary', children }) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }
  return (
    <button className={`font-bold rounded-lg transition px-4 py-2 ${variants[variant]}`}>
      {children}
    </button>
  )
}
```

### `clsx` untuk Conditional Class

Library [`clsx`](https://github.com/lukeed/clsx) membuat conditional class bersih:

```bash
npm install clsx
```

```jsx
import clsx from 'clsx'

function Card({ isActive, hasError, children }) {
  return (
    <div className={clsx(
      'p-4 rounded-lg shadow',
      isActive && 'bg-blue-50 border-blue-300',
      hasError && 'bg-red-50 border-red-300',
      !isActive && !hasError && 'bg-white'
    )}>
      {children}
    </div>
  )
}
```

### `tailwind-merge` untuk Class Conflict

Saat class dari pemanggil bisa konflik dengan class default (mis. `p-2` vs `p-6`), gunakan [`tailwind-merge`](https://github.com/dcastil/tailwind-merge):

```bash
npm install tailwind-merge
```

```jsx
import { twMerge } from 'tailwind-merge'

function Button({ className, ...props }) {
  return (
    <button
      className={twMerge(
        'px-4 py-2 font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-700',
        className  // className dari pemanggil MENIMPA default
      )}
      {...props}
    />
  )
}

// Pemanggilan:
<Button className="bg-red-600 hover:bg-red-700 px-8" />
// Hasil: px-8 py-2 font-bold rounded-lg bg-red-600 text-white hover:bg-red-700
// (px-4 ditimpa px-8, bg-blue-600 ditimpa bg-red-600)
```

### Gabungan `clsx` + `tailwind-merge`

```jsx
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Penggunaan
function Card({ active, error, className }) {
  return (
    <div className={cn(
      'p-4 rounded-lg shadow',
      active && 'bg-blue-50',
      error && 'bg-red-50',
      className
    )} />
  )
}
```

---

## 4. Pola Umum: Variant Map

Pola paling reusable di semua framework — **map objek** untuk variant:

```js
const variants = {
  primary:   'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  danger:    'bg-red-600 text-white hover:bg-red-700',
  success:   'bg-green-600 text-white hover:bg-green-700',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
}
```

Akses via `variants[variant]` di Vue/React/Blade. Ini mencegah string concatenation yang rawan typo dan memudahkan penambahan variant baru.

---

## 5. Anti-pattern: Class Dinamis Berbasis String

**JANGAN** bangun class dengan concatenation string — Tailwind tidak dapat mendeteksinya saat purge:

```js
// BURUK: Tailwind tidak bisa purge 'bg-blue-500' yang dibangun dinamis
const color = isActive ? 'blue' : 'gray'
const cls = `bg-${color}-500`

// BAIK: tulis class lengkap
const cls = isActive ? 'bg-blue-500' : 'bg-gray-500'
```

Tailwind memindai file source untuk string class literal. Class yang dibentuk di runtime tidak terdeteksi.

---

## Ringkasan

| Framework | Pattern | Tool |
| --- | --- | --- |
| Laravel Blade | `@class` direktif + Blade Component | built-in |
| Vue.js | `:class` computed, array/object syntax | built-in |
| React | `className` + template literal | `clsx` + `tailwind-merge` |
| Semua | Variant map (objek lookup) | — |

Kembali ke [Roadmap Lengkap](/spek).