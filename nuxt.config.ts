// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@lui-ui/lui-nuxt"],
  tailwindcss: {
    configPath: "./tailwind.config",
  },
  vite: {
    optimizeDeps: {
      include: ['@lui-ui/lui-vue'],
    },
  },
});
