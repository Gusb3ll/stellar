<script setup>
const navItems = [{ name: 'Home', url: '/' }, { name: 'Profile', url: '/profile' }, { name: 'Projects', url: '/projects' }, { name: 'Designs', url: '/designs' }]
</script>

<template>
  <div class="z-50 relative flex h-16 w-screen justify-center items-center">
    <Transition name="nav">
      <div class="space-x-8">
        <NuxtLink v-for="({ name, url }, index) in navItems" :key="index" :to="url" class="sm:text-xl text-lg text-white font-light hover:opacity-70 transition-all">
          {{ name }}
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.nav-enter-active, .nav-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.nav-enter-from, .nav-leave-to  {
  opacity: 0; transform: translateY(35px);
}
</style>
