import { createApp } from 'vue'
import { createPinia } from 'pinia'
import registerGeneralComponents from './plugins/general-components'

import './assets/main.css'
import i18n from '@/i18n/i18n'

import App from './App.vue'
import { router } from './routes'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
registerGeneralComponents(app)

app.mount('#app')
