// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@vueuse/nuxt',
      '@nuxt/content',
      '@pinia/nuxt',
    ],
    alias: {
      assets: "/<rootDir>/assets",
    },
    css: ["~/assets/main.scss"],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    ssr: false
})
