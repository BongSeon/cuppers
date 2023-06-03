import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)

console.log(import.meta.env)
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  strict: true,
})
