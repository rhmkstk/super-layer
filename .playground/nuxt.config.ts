export default defineNuxtConfig({
  extends: ['..'],
  modules: ['@nuxt/eslint'],
  compatibilityDate: '2024-11-11',
  tailwindcss:{
    configPath: './tailwind/tailwind.config'
  }
})