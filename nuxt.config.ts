// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "./modules/lui-nuxt-test"],
  tailwindcss: {
    configPath: "./tailwind.config",
  },
});
