import type { App } from 'vue'
import SmallButton from '@/components/custom-design/SmallButton.vue'
export function registerCustomDesign(app: App) {
  app.component('small-button', SmallButton)
}
