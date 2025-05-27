import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },
	css: ["~/assets/css/tailwind.css"],

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
});
