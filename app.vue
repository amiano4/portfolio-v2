<template>
	<div>
		<FeatureHero />
	</div>
	<NuxtParticles id="tsparticles" url="/particles.conf.json" @load="onLoad" />
</template>

<script setup lang="ts">
import type { Container } from "@tsparticles/engine";

const onLoad = (container: Container) => {
	// Do something with the container
	container.pause();
	setTimeout(() => container.play(), 2000);
};
</script>
