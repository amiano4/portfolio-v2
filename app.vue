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

const description =
  "Building fast, scalable apps that solve real problems — designed to grow with users and built to perform.";

const title = "Portfolio | Almario Miano - Full Stack Developer";

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: "https://static.almario.dev/portfolio-preview.png",
  keywords:
    "Full Stack Developer, Freelancer, Laravel, Vue.js, Quasar, Almario Miano",
  ogUrl: "https://portfolio.almario.dev",
  ogType: "website",
});
</script>
