<script setup>
import { Icon } from '@iconify/vue'

const links = [
  { to: 'https://github.com/gusb3ll', icon: 'github' },
  { to: 'https://www.facebook.com/kitpipat.jaritwong', icon: 'facebook' },
  { to: 'https://twitter.com/gusb3ll', icon: 'twitter' },
  { to: 'https://discord.com/users/297306376542224385', icon: 'discord' },
  { to: 'https://www.linkedin.com/in/kitpipat-jaritwong-3123a221a/', icon: 'linkedin' },
  { to: 'https://www.behance.net/_gusbell', icon: 'behance' },
]
</script>

<template>
  <div class="sm:block hidden">
    <div class="absolute top-1/2 left-[55px] mt-[-202px]">
      <div class="flex flex-col gap-8">
        <NuxtLink v-for="(i, index) in links" :key="index" :to="i.to" target="_blank" :alt="i.icon">
          <Icon :icon="`mdi:${i.icon}`" class="text-3xl text-white hover:opacity-50 duration-500 transition-opacity" />
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="sm:hidden block">
    <div class="absolute top-[62%] left-[18%]">
      <div class="flex flex-row gap-8">
        <NuxtLink v-for="(i, index) in links" :key="index" :to="i.to" target="_blank">
          <Icon :icon="`mdi:${i.icon}`" class="text-xl text-white hover:opacity-50 duration-500 transition-opacity" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
