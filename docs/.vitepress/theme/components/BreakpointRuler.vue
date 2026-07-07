<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const width = ref(0)
let raf

function update() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    width.value = window.innerWidth
  })
}

onMounted(() => {
  update()
  window.addEventListener('resize', update)
})
onUnmounted(() => window.removeEventListener('resize', update))

const breakpoints = [
  { name: 'base', min: 0, max: 639, px: '0–639' },
  { name: 'sm', min: 640, max: 767, px: '≥640' },
  { name: 'md', min: 768, max: 1023, px: '≥768' },
  { name: 'lg', min: 1024, max: 1279, px: '≥1024' },
  { name: 'xl', min: 1280, max: 1535, px: '≥1280' },
  { name: '2xl', min: 1536, max: 9999, px: '≥1536' }
]

const active = computed(() => {
  const w = width.value
  if (w >= 1536) return '2xl'
  if (w >= 1280) return 'xl'
  if (w >= 1024) return 'lg'
  if (w >= 768) return 'md'
  if (w >= 640) return 'sm'
  return 'base'
})
</script>

<template>
  <div class="br-wrapper">
    <div class="br-bar">
      <div
        v-for="bp in breakpoints"
        :key="bp.name"
        class="br-seg"
        :class="['br-' + bp.name, { 'br-active': active === bp.name }]"
      >
        <span class="br-name">{{ bp.name }}</span>
        <span class="br-px">{{ bp.px }}</span>
      </div>
    </div>
    <div class="br-live">
      <span>Lebar jendela saat ini:</span>
      <strong>{{ width }}px</strong>
      <span class="br-badge">aktif: <code>{{ active }}</code></span>
    </div>
    <p class="br-note">Kecilkan/perlebar jendela browser untuk melihat breakpoint aktif berubah. (Mobile First: gaya tanpa prefix berlaku di <em>base</em>, lalu ditim mulai <code>sm</code>, <code>md</code>, dst.)</p>
  </div>
</template>

<style scoped>
.br-wrapper {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0 1.5rem;
  background: var(--vp-c-bg-soft);
}
.br-bar {
  display: flex;
  gap: 2px;
  border-radius: 6px;
  overflow: hidden;
}
.br-seg {
  flex: 1;
  padding: 0.5rem 0.25rem;
  text-align: center;
  color: white;
  font-size: 0.7rem;
  line-height: 1.3;
  opacity: 0.5;
  transition: all 0.2s;
}
.br-seg .br-name { display: block; font-weight: 700; }
.br-seg .br-px { display: block; font-size: 0.62rem; opacity: 0.9; }
.br-active {
  opacity: 1;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.br-base { background: #94a3b8; }
.br-sm { background: #38bdf8; }
.br-md { background: #818cf8; }
.br-lg { background: #c084fc; }
.br-xl { background: #f472b6; }
.br-2xl { background: #fb7185; }
.br-live {
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  display: flex;
  gap: 0.4rem;
  align-items: center;
  flex-wrap: wrap;
}
.br-live strong {
  color: var(--vp-c-text-1);
  font-variant-numeric: tabular-nums;
}
.br-badge {
  margin-left: auto;
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  background: var(--vp-c-default-soft);
}
.br-badge code {
  font-weight: 700;
  color: var(--vp-c-brand-1);
}
.br-note {
  margin: 0.75rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
.br-note code, .br-note em {
  font-style: normal;
  background: var(--vp-c-default-soft);
  padding: 0.05rem 0.3rem;
  border-radius: 3px;
}
</style>
