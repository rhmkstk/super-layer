// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@lui-ui/lui-nuxt', '@nuxtjs/tailwindcss'],
  tailwindcss:{
    configPath: './tailwind.config'
  }
})
