import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  css: ["~/assets/css/tailwind.css"],
  ssr: false,

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "nuxt-particles",
    "@nuxt/image",
  ],
  fonts: {
    provider: "google",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "Portfolio | Almario Miano",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "logo.png" }],
    },
  },

  // optimize images
  nitro: {
    prerender: {
      routes: ["/_ipx/s_40x40/logo.png", "/_ipx/_/images/almario.png"],
    },
  },
});
