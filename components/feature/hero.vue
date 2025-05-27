<template>
  <div class="h-screen relative overflow-hidden hero">
    <div class="layer blurry bg-slate-background/95 backdrop-blur-md" />
    <div class="layer hollow move">
      <div
        class="text-white select-none font-mono top-[30%] -translate-y-1/2 font-extrabold text-[20dvh] absolute left-[21dvh] text blur-sm floating-code"
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
      <div>
        <h1
          class="md:w-6/7 md:text-[8dvh] text-[5dvh] flex flex-col font-extrabold mb-4 tracking-[0] md:tracking-wide"
        >
          <span class="text-light-blue/90 text-[4.5dvh] mb-1">Hi, I'm a</span>
          <div
            ref="dynamicTextRef"
            class="text-white leading-tight glow-text"
          />
        </h1>
        <p
          class="text-dim-foreground md:text-xl text-lg mb-6 py-8 w-full md:w-3/4"
        >
          Building fast, scalable apps that solve real problems — designed to
          grow with users and built to perform.
        </p>

        <div
          class="flex flex-wrap justify-center md:justify-start gap-3 mb-6 text-foreground text-sm md:text-base"
        >
          <span
            class="bg-gradient-to-r from-red-600 via-red-700 to-red-800 px-3 py-1 rounded-full shadow-[0_0_4px_rgba(220,38,38,0.7)]"
          >
            Laravel
          </span>
          <span
            class="bg-gradient-to-r from-[#42b883] via-[#34495e] to-[#2c3e50] px-3 py-1 rounded-full shadow-[0_0_4px_rgba(66,184,131,0.7)]"
          >
            Vue.js
          </span>
          <span
            class="bg-gradient-to-r from-[#0a0a0a] via-[#00bcd4] to-[#039be5] px-3 py-1 rounded-full shadow-[0_0_4px_rgba(0,188,212,0.7)]"
          >
            Quasar Framework
          </span>
          <span
            class="bg-gradient-to-r from-[#007acc] via-[#3178c6] to-[#004e8c] px-3 py-1 rounded-full shadow-[0_0_4px_rgba(49,120,198,0.7)]"
          >
            TypeScript
          </span>
          <span
            class="bg-gradient-to-r from-[#38bdf8] via-[#0ea5e9] to-[#0284c7] px-3 py-1 rounded-full shadow-[0_0_6px_rgba(56,189,248,0.7)]"
          >
            Tailwind CSS
          </span>
          <span
            class="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 px-3 py-1 rounded-full shadow-[0_0_4px_rgba(128,0,128,0.7)]"
          >
            REST APIs
          </span>
        </div>

        <a
          href="#projects"
          class="inline-block px-6 py-3 mt-8 text-sm md:text-base text-white font-semibold tracking-wide uppercase rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-cyan-600 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out ring-1 ring-cyan-400/40 hover:ring-cyan-300/60"
        >
          View Projects
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import "~/assets/css/hero.css";

import TypeIt from "typeit";

const dynamicTextRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (!dynamicTextRef.value) return;

  new TypeIt(dynamicTextRef.value, {
    speed: 40,
    startDelay: 1000,
    loop: true,
    breakLines: false,
    lifeLike: true,
  })
    .type("Full Stack Developer", { delay: 2000 })
    .delete("", { delay: 800 })
    .type("Freelancer", { delay: 2000 })
    .delete("", { delay: 800 })
    .type("System Architect", { delay: 2000 })
    .delete("", { delay: 800 })
    .type("Tech Problem Solver", { delay: 2000 })
    .delete("", { delay: 800 })
    .type("Laravel + Vue Specialist", { delay: 2000 })
    .delete("", { delay: 800 })
    .type("Product Builder", { delay: 2000 })
    .go();
});
</script>

<style>
.glow-text {
  text-shadow: 0 0 1.5px rgba(0, 191, 191, 0.3), 0 0 4px rgba(0, 191, 191, 0.2);
}
</style>
