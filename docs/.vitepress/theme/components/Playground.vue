<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  default: { type: String, default: '' },
  height: { type: String, default: '320px' }
})

const code = ref(props.default)
const debounce = ref(null)

const viewport = ref('full')
const widths = {
  sm: '375px',
  md: '768px',
  lg: '1024px',
  full: '100%'
}

const iframeWidth = computed(() => widths[viewport.value])

const doc = computed(() => `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
<style>html{color-scheme:light}body{margin:0;padding:1rem;font-family:system-ui,sans-serif;background:#fff}</style>
</head>
<body>
${code.value}
</body>
</html>`)

function onInput(e) {
  clearTimeout(debounce.value)
  debounce.value = setTimeout(() => {
    code.value = e.target.value
  }, 400)
}

function reset() {
  code.value = props.default
}

const copied = ref(false)
async function copyCode() {
  try {
    await navigator.clipboard.writeText(code.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 1500)
  } catch {}
}
</script>

<template>
  <div class="playground">
    <div class="pg-toolbar">
      <span class="pg-label">Playground Interaktif</span>
      <div class="pg-actions">
        <button
          v-for="w in ['sm','md','lg','full']"
          :key="w"
          class="pg-vp"
          :class="{ 'pg-vp-active': viewport === w }"
          @click="viewport = w"
          :title="widths[w]"
        >{{ w }}</button>
        <button class="pg-btn" @click="copyCode">{{ copied ? 'Tersalin' : 'Salin Kode' }}</button>
        <button class="pg-btn" @click="reset">Reset</button>
      </div>
    </div>
    <div class="pg-body">
      <textarea
        class="pg-code"
        spellcheck="false"
        :value="code"
        @input="onInput"
      ></textarea>
      <div class="pg-preview-wrap">
        <iframe
          class="pg-preview"
          :style="{ width: iframeWidth, height: height }"
          :srcdoc="doc"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <p class="pg-hint">Tip: ketik class Tailwind apa pun di kotak kiri. Preview butuh internet (Tailwind via CDN). Viewport <strong>{{ viewport }}</strong> = {{ iframeWidth }}.</p>
  </div>
</template>

<style scoped>
.playground {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem 0 1.5rem;
  background: var(--vp-c-bg);
}
.pg-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  flex-wrap: wrap;
}
.pg-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-2);
}
.pg-actions {
  display: flex;
  gap: 0.25rem;
  align-items: center;
  flex-wrap: wrap;
}
.pg-vp, .pg-btn {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: 5px;
  border: 1px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.15s;
}
.pg-vp:hover, .pg-btn:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}
.pg-vp-active {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-default-soft);
}
.pg-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 320px;
}
@media (max-width: 768px) {
  .pg-body {
    grid-template-columns: 1fr;
  }
}
.pg-code {
  width: 100%;
  border: none;
  border-right: 1px solid var(--vp-c-divider);
  padding: 0.75rem 1rem;
  font-family: var(--vp-font-family-mono);
  font-size: 0.82rem;
  line-height: 1.55;
  color: var(--vp-c-text-1);
  background: var(--vp-code-block-bg);
  resize: vertical;
  outline: none;
  min-height: 200px;
}
.pg-preview-wrap {
  background: #f3f4f6;
  display: flex;
  justify-content: center;
  overflow: auto;
  padding: 0.5rem;
}
.pg-preview {
  border: 1px dashed var(--vp-c-divider);
  border-radius: 6px;
  background: white;
  transition: width 0.25s ease;
  max-width: 100%;
}
.pg-hint {
  font-size: 0.72rem;
  color: var(--vp-c-text-2);
  padding: 0.5rem 0.75rem;
  margin: 0;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
</style>
