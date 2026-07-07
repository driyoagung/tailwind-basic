<script setup>
import { ref, computed } from 'vue'
import { useCopy } from './useCopy'

const props = defineProps({
  html: { type: String, required: true },
  label: { type: String, default: 'Hasil Preview' },
  lang: { type: String, default: 'html' }
})

const { copied, copy } = useCopy()
const showCode = ref(true)

const escaped = computed(() => props.html.trim())
</script>

<template>
  <div class="preview-wrapper my-4">
    <div class="preview-toolbar">
      <button
        class="preview-tab"
        :class="{ 'preview-tab-active': showCode }"
        @click="showCode = true"
      >Kode</button>
      <button
        class="preview-tab"
        :class="{ 'preview-tab-active': !showCode }"
        @click="showCode = false"
      >Preview</button>
      <button
        v-if="showCode"
        class="preview-copy"
        @click="copy(escaped)"
      >{{ copied ? 'Tersalin!' : 'Salin' }}</button>
    </div>

    <pre v-if="showCode" class="preview-code"><code>{{ escaped }}</code></pre>

    <div v-show="!showCode" class="preview-box">
      <div v-html="escaped"></div>
    </div>
  </div>
</template>

<style scoped>
.preview-wrapper {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}
.preview-toolbar {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}
.preview-tab {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  color: var(--vp-c-text-2);
  background: transparent;
  cursor: pointer;
  border: none;
  transition: all 0.15s;
}
.preview-tab:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-default-soft);
}
.preview-tab-active {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-default-soft);
}
.preview-copy {
  margin-left: auto;
  font-size: 0.75rem;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  color: var(--vp-c-text-2);
  background: transparent;
  cursor: pointer;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.15s;
}
.preview-copy:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}
.preview-code {
  margin: 0;
  padding: 1rem 1.25rem;
  background-color: var(--vp-code-block-bg);
  overflow-x: auto;
  font-size: 0.85rem;
  line-height: 1.6;
  font-family: var(--vp-font-family-mono);
}
.preview-code code {
  color: var(--vp-c-text-1);
  white-space: pre;
}
.preview-box {
  padding: 1.5rem;
  color-scheme: light;
  background-color: #f3f4f6;
  color: #111827;
  overflow-x: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0 0 8px 8px;
}
.preview-box > :first-child {
  margin-top: 0;
}
.preview-box > :last-child {
  margin-bottom: 0;
}
.preview-wrapper > .preview-code ~ .preview-box {
  border-top: none;
  border-radius: 0;
}
</style>
