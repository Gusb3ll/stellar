<script setup>
import { Icon } from '@iconify/vue'

const links = [
  { to: 'https://github.com/gusb3ll', icon: 'github' },
  // { to: 'https://www.facebook.com/kitpipat.jaritwong', icon: 'facebook' },
  { to: 'https://twitter.com/gusb3ll', icon: 'twitter' },
  { to: 'https://discord.com/users/297306376542224385', icon: 'discord' },
  { to: 'https://www.linkedin.com/in/kitpipat-jaritwong-3123a221a/', icon: 'linkedin' },
  { to: 'https://www.behance.net/_gusbell', icon: 'behance' },
]
</script>

<template>
  <div class="flex flex-row md:gap-16 gap-10">
    <NuxtLink v-for="({ to, icon }, index) in links" :key="index" :to="to" :aria-label="icon" target="_blank">
      <Icon :icon="`mdi:${icon}`" class="sm:text-3xl text-2xl text-white hover:opacity-50 duration-500 transition-opacity" />
    </NuxtLink>
  </div>
</template>
