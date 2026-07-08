<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCopy } from './useCopy'

const props = defineProps({
  html: { type: String, required: true },
  label: { type: String, default: 'Hasil Preview' },
  lang: { type: String, default: 'html' }
})

const { copied, copy } = useCopy()
const showCode = ref(true)
const iframeHeight = ref(320)

const escaped = computed(() => props.html.trim())

const srcdoc = computed(() => `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
<style>html{color-scheme:light}body{margin:0;padding:1.5rem;font-family:system-ui,sans-serif;background:#f3f4f6}#__pvw{min-height:100px}</style>
</head>
<body>
<div id="__pvw">${escaped.value}<\/div>
<script>
(function(){
  function sendH(){var h=document.getElementById('__pvw').scrollHeight;parent.postMessage({type:'preview-resize',height:Math.max(h,80)},'*');}
  sendH();
  new ResizeObserver(sendH).observe(document.getElementById('__pvw'));
})();
<\/script>
</body>
</html>`)

function onMessage(e) {
  if (e.data && e.data.type === 'preview-resize') {
    iframeHeight.value = e.data.height
  }
}

onMounted(() => window.addEventListener('message', onMessage))
onUnmounted(() => window.removeEventListener('message', onMessage))
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
      <iframe
        class="preview-iframe"
        :srcdoc="srcdoc"
        :style="{ height: iframeHeight + 'px' }"
        frameborder="0"
        title="Preview"
      ></iframe>
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
  padding: 0;
  color-scheme: light;
  background-color: #f3f4f6;
  color: #111827;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0 0 8px 8px;
}
.preview-box::before {
  content: none;
}
.preview-iframe {
  width: 100%;
  border: none;
  display: block;
  transition: height 0.15s ease;
}
.preview-wrapper > .preview-code ~ .preview-box {
  border-top: none;
  border-radius: 0;
}
</style>
