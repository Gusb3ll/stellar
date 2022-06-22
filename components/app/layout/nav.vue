<script setup>
const navItems = [{ name: 'Home', url: '/' }, { name: 'Profile', url: '/profile' }, { name: 'Projects', url: '/projects' }, { name: 'Designs', url: '/designs' }, { name: 'Works', url: '/works' }]
</script>

<template>
  <div class="z-50 relative flex h-22 w-screen justify-center items-center">
    <div class="sm:space-x-8 space-x-4">
      <NuxtLink v-for="({ name, url }, index) in navItems" :key="index" :to="url" class="sm:text-xl text-lg text-white font-light hover:opacity-70 transition-all">
        {{ name }}
      </NuxtLink>
    </div>
  </div>
</template>
