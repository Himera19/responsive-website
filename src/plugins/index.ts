import type { App } from 'vue'
import { plugin, formKitConfig } from './formKit'

export function registerPlugins(app: App) {
  // Form Kit Plugin
  app.use(plugin, formKitConfig)
}
