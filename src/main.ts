import { createApp } from 'vue'
import { createPinia } from 'pinia'
import registerGeneralComponents from './plugins/general-components'

import './assets/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
registerGeneralComponents(app)

app.mount('#app')
