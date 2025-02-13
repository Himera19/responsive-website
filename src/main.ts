//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { registerPlugins } from '@/plugins'
import { registerCustomDesign } from './components'

const app = createApp(App)

app.use(createPinia())
app.use(router)
registerPlugins(app)
registerCustomDesign(app)

app.mount('#app')
