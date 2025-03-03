import type { App } from 'vue'
import { plugin, formKitConfig } from './formKit'
import Antd from './antDesign'

export function registerPlugins(app: App) {
  // Form Kit Plugin
  app.use(plugin, formKitConfig)
  app.use(Antd)
}
