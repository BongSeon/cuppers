import Icon from '@/components/general/Icon.vue'
import Btn from '@/components/general/Btn.vue'
import Spinner from '@/components/general/Spinner.vue'
import type { App } from 'vue'

export default function registerGlobalComponents(app: App) {
  app.component('icon', Icon)
  app.component('btn', Btn)
  app.component('spinner', Spinner)
}
