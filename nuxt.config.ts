// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '#layer': path.resolve(__dirname), // Fully resolved path to the layer root
  },
  modules:['@lui-ui/lui-nuxt', '@nuxtjs/tailwindcss'],
  tailwindcss:{
    configPath: './tailwind.config'
  }
})
