<template>
	<div class="h-screen relative overflow-hidden hero">
		<div class="layer blurry bg-slate-background/95 backdrop-blur-md" />
		<div class="layer hollow move">
			<div
				class="text-white font-mono top-[30%] -translate-y-1/2 font-extrabold text-[20dvh] absolute left-[21dvh] text blur-sm"
			>
				&lt;<span class="text-success">/&gt;</span>
			</div>
		</div>
		<div class="layer image text-white">
			<div class="shadow-lg">
				<NuxtImg src="/images/almario.png" />
			</div>
		</div>

		<div class="layer content flex items-center text-left z-20">
			<div class="contentxx">
				<h1
					class="md:text-[8dvh] text-[6dvh] flex flex-col leading-[125%] font-bold mb-4"
				>
					<span class="text-foreground">I am a</span>
					<span class="text-white">Full Stack Developer </span>
				</h1>
				<p class="text-gray-300 md:text-xl text-lg mb-6 py-8 w-full md:w-3/4">
					Turning ideas into sleek, scalable applications — crafted for
					real-world impact and built to grow with users.
				</p>
				<a
					href="#projects"
					class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
				>
					View My Work
				</a>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import "~/assets/css/hero.css";
</script>
