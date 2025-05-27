<template>
	<ClientOnly>
		<AppHeader />
		<FeatureHero />
	</ClientOnly>
	<NuxtParticles id="tsparticles" url="/particles.conf.json" @load="onLoad" />
</template>

<script setup lang="ts">
import type { Container } from "@tsparticles/engine";

const onLoad = (container: Container) => {
	container.pause();
	setTimeout(() => container.play(), 2000);
};

useHead({
	meta: [
		{
			name: "description",
			content:
				"Turning ideas into sleek, scalable applications — built to grow with users.",
		},
		{
			name: "keywords",
			content: "Full Stack Developer, Laravel, Vue, Quasar, Almario",
		},
		{ property: "og:title", content: "Portfolio | Almario Miano" },
		{
			property: "og:description",
			content:
				"Turning ideas into sleek, scalable applications — built to grow with users.",
		},
		{ property: "og:image", content: "/images/preview.png" },
	],
});
</script>
