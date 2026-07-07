import DefaultTheme from 'vitepress/theme'
import Preview from './components/Preview.vue'
import Playground from './components/Playground.vue'
import BreakpointRuler from './components/BreakpointRuler.vue'
import ColorSwatch from './components/ColorSwatch.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Preview', Preview)
    app.component('Playground', Playground)
    app.component('BreakpointRuler', BreakpointRuler)
    app.component('ColorSwatch', ColorSwatch)
  }
}
