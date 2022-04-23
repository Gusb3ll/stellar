<script setup>
const { $anime } = useNuxtApp()

const navItems = [{ name: 'Home', to: '/' }, { name: 'Projects', to: '/projects' }, { name: 'Designs', to: '/designs' }]

onMounted(() => {
  $anime({
    targets: '#nav__container',
    opacity: [0, 1],
    translateY: [-25, 0],
    duration: 1000,
    delay: 4000,
    easing: 'easeOutExpo',
  })
})
</script>

<template>
  <div id="nav__container" class="z-50 absolute w-screen bottom-0 py-8">
    <div class="m-auto">
      <div class="flex flex-row justify-center items-center gap-8">
        <NuxtLink v-for="(i, index) in navItems" :key="index" :to="i.to">
          <img src="~/assets/circle.svg" class="h-2 hover:scale-200 transition-all transform">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
