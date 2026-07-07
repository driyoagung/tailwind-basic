<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true }
})

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

const palettes = {
  slate:   ['bg-slate-50','bg-slate-100','bg-slate-200','bg-slate-300','bg-slate-400','bg-slate-500','bg-slate-600','bg-slate-700','bg-slate-800','bg-slate-900','bg-slate-950'],
  gray:    ['bg-gray-50','bg-gray-100','bg-gray-200','bg-gray-300','bg-gray-400','bg-gray-500','bg-gray-600','bg-gray-700','bg-gray-800','bg-gray-900','bg-gray-950'],
  red:     ['bg-red-50','bg-red-100','bg-red-200','bg-red-300','bg-red-400','bg-red-500','bg-red-600','bg-red-700','bg-red-800','bg-red-900','bg-red-950'],
  orange:  ['bg-orange-50','bg-orange-100','bg-orange-200','bg-orange-300','bg-orange-400','bg-orange-500','bg-orange-600','bg-orange-700','bg-orange-800','bg-orange-900','bg-orange-950'],
  amber:   ['bg-amber-50','bg-amber-100','bg-amber-200','bg-amber-300','bg-amber-400','bg-amber-500','bg-amber-600','bg-amber-700','bg-amber-800','bg-amber-900','bg-amber-950'],
  yellow:  ['bg-yellow-50','bg-yellow-100','bg-yellow-200','bg-yellow-300','bg-yellow-400','bg-yellow-500','bg-yellow-600','bg-yellow-700','bg-yellow-800','bg-yellow-900','bg-yellow-950'],
  green:   ['bg-green-50','bg-green-100','bg-green-200','bg-green-300','bg-green-400','bg-green-500','bg-green-600','bg-green-700','bg-green-800','bg-green-900','bg-green-950'],
  emerald: ['bg-emerald-50','bg-emerald-100','bg-emerald-200','bg-emerald-300','bg-emerald-400','bg-emerald-500','bg-emerald-600','bg-emerald-700','bg-emerald-800','bg-emerald-900','bg-emerald-950'],
  teal:    ['bg-teal-50','bg-teal-100','bg-teal-200','bg-teal-300','bg-teal-400','bg-teal-500','bg-teal-600','bg-teal-700','bg-teal-800','bg-teal-900','bg-teal-950'],
  cyan:    ['bg-cyan-50','bg-cyan-100','bg-cyan-200','bg-cyan-300','bg-cyan-400','bg-cyan-500','bg-cyan-600','bg-cyan-700','bg-cyan-800','bg-cyan-900','bg-cyan-950'],
  sky:     ['bg-sky-50','bg-sky-100','bg-sky-200','bg-sky-300','bg-sky-400','bg-sky-500','bg-sky-600','bg-sky-700','bg-sky-800','bg-sky-900','bg-sky-950'],
  blue:    ['bg-blue-50','bg-blue-100','bg-blue-200','bg-blue-300','bg-blue-400','bg-blue-500','bg-blue-600','bg-blue-700','bg-blue-800','bg-blue-900','bg-blue-950'],
  indigo:  ['bg-indigo-50','bg-indigo-100','bg-indigo-200','bg-indigo-300','bg-indigo-400','bg-indigo-500','bg-indigo-600','bg-indigo-700','bg-indigo-800','bg-indigo-900','bg-indigo-950'],
  violet:  ['bg-violet-50','bg-violet-100','bg-violet-200','bg-violet-300','bg-violet-400','bg-violet-500','bg-violet-600','bg-violet-700','bg-violet-800','bg-violet-900','bg-violet-950'],
  purple:  ['bg-purple-50','bg-purple-100','bg-purple-200','bg-purple-300','bg-purple-400','bg-purple-500','bg-purple-600','bg-purple-700','bg-purple-800','bg-purple-900','bg-purple-950'],
  fuchsia: ['bg-fuchsia-50','bg-fuchsia-100','bg-fuchsia-200','bg-fuchsia-300','bg-fuchsia-400','bg-fuchsia-500','bg-fuchsia-600','bg-fuchsia-700','bg-fuchsia-800','bg-fuchsia-900','bg-fuchsia-950'],
  pink:    ['bg-pink-50','bg-pink-100','bg-pink-200','bg-pink-300','bg-pink-400','bg-pink-500','bg-pink-600','bg-pink-700','bg-pink-800','bg-pink-900','bg-pink-950'],
  rose:    ['bg-rose-50','bg-rose-100','bg-rose-200','bg-rose-300','bg-rose-400','bg-rose-500','bg-rose-600','bg-rose-700','bg-rose-800','bg-rose-900','bg-rose-950']
}

const list = computed(() => {
  const arr = palettes[props.name]
  if (!arr) return []
  return arr.map((cls, i) => ({ cls, shade: shades[i] }))
})

const textDark = computed(() => {
  const dark = new Set([50, 100, 200, 300, 400])
  return (shade) => dark.has(shade)
})
</script>

<template>
  <div v-if="list.length" class="cs-grid">
    <div
      v-for="s in list"
      :key="s.shade"
      class="cs-swatch"
      :class="s.cls"
    >
      <span :class="textDark(s.shade) ? 'cs-dark' : 'cs-light'">{{ s.shade }}</span>
    </div>
  </div>
  <p v-else class="cs-empty">Warna "{{ name }}" tidak ada di palet bawaan. Pilih salah satu: slate, gray, red, orange, amber, yellow, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose.</p>
</template>

<style scoped>
.cs-grid {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  gap: 2px;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem 0 1.5rem;
}
@media (max-width: 768px) {
  .cs-grid { grid-template-columns: repeat(6, 1fr); }
}
.cs-swatch {
  height: 56px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 4px;
  font-size: 0.65rem;
  font-weight: 600;
}
.cs-dark { color: #1f2937; }
.cs-light { color: #ffffff; }
.cs-empty {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  padding: 0.75rem;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 6px;
}
</style>
