import { h, onMounted, watch, nextTick } from 'vue'
import Theme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import './fonts/fira_code/fira_code.css'
import './styles/var.css'
import mediumZoom from 'medium-zoom'
import ZoomImg from './components/ZoomImg.vue'

export default {
  ...Theme,
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => initZoom()),
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )
  },
  enhanceApp({ app }) {
    app.component('ZoomImg', ZoomImg)
  },
}
