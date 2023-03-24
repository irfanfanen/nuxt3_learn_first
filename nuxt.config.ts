// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@vueuse/nuxt',
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
})
