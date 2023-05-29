import Icon from '@/components/general/Icon.vue'
import type { App } from 'vue'

export default function registerGlobalComponents(app: App) {
  app.component('icon', Icon)
}
