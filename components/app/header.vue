<template>
	<header class="fixed top-0 left-0 right-0 z-100">
		<nav class="py-4 container mx-auto relative flex items-center">
			<h1 class="float-left flex justify-end items-center w-2/7">
				<NuxtLink to="/">
					<NuxtImg
						src="/logo.png"
						alt="Almario Miano Logo"
						width="40"
						height="40"
						class="inline-block mr-10"
					/>
				</NuxtLink>
			</h1>

			<div
				class="ml-auto w-5/7 flex justify-end md:justify-start pr-4 items-center text-foreground"
			>
				<!-- Site Name (hidden on small screens) -->
				<div
					class="mr-auto text-white font-bold text-xl tracking-wider hidden md:block"
				>
					almario<span class="text-light-blue">.dev</span>
				</div>

				<!-- Navigation Links (hidden on small screens) -->
				<ul class="hidden md:flex justify-end space-x-6 font-medium">
					<li><a href="#about" class="hover:text-success">About</a></li>
					<li><a href="#services" class="hover:text-success">Services</a></li>
					<li><a href="#projects" class="hover:text-success">Projects</a></li>
					<li><a href="#contact" class="hover:text-success">Contact</a></li>
				</ul>

				<!-- Social Icons -->
				<div class="flex items-center space-x-3 ml-8 leading-0">
					<!-- Hamburger for mobile -->
					<button
						type="button"
						class="md:hidden text-dim-foreground"
						@click="toggleSidebar"
					>
						<Icon name="mdi:menu" size="26" />
					</button>

					<!-- GitHub + LinkedIn always visible -->
					<a
						href="https://github.com/yourusername"
						target="_blank"
						rel="noopener"
						class="text-foreground hover:text-success"
					>
						<Icon name="mdi:github" size="24" />
					</a>
					<a
						href="https://linkedin.com/in/yourusername"
						target="_blank"
						rel="noopener"
						class="text-foreground hover:text-success"
					>
						<Icon name="mdi:linkedin" size="24" />
					</a>
				</div>
			</div>
		</nav>

		<!-- Sidebar for mobile -->
		<Transition name="slide">
			<div
				v-if="isSidebarOpen"
				class="fixed inset-0 z-50 bg-background/80 backdrop-blur-md bg-opacity-90 px-6 py-10 flex flex-col space-y-6 text-foreground font-medium md:hidden"
			>
				<button class="self-end mb-4" @click="toggleSidebar">
					<Icon name="mdi:close" size="28" />
				</button>
				<a href="#about" @click="toggleSidebar">About</a>
				<a href="#services" @click="toggleSidebar">Services</a>
				<a href="#projects" @click="toggleSidebar">Projects</a>
				<a href="#contact" @click="toggleSidebar">Contact</a>
			</div>
		</Transition>
	</header>
</template>

<script setup>
import { ref } from "vue";

const isSidebarOpen = ref(false);
const toggleSidebar = () => {
	isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
	transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
	transform: translateX(-100%);
}
</style>
