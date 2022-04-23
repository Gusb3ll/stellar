<script setup>
import { Icon } from '@iconify/vue'
// eslint-disable-next-line import/no-named-as-default
import GlitchedWriter from 'vue-glitched-writer'

const { $anime } = useNuxtApp()

const links = [
  { to: 'https://github.com/gusb3ll', icon: 'github' },
  { to: 'https://www.facebook.com/kitpipat.jaritwong', icon: 'facebook' },
  { to: 'https://twitter.com/gusb3ll', icon: 'twitter' },
  { to: 'https://discord.com/users/297306376542224385', icon: 'discord' },
  { to: 'https://www.linkedin.com/in/kitpipat-jaritwong-3123a221a/', icon: 'linkedin' },
]

onMounted(() => {
  $anime({
    targets: '#index__container',
    scale: [0, 1],
    opacity: [0, 1],
    duration: 1000,
    delay: 500,
    easing: 'easeOutExpo',
  })
  $anime({
    targets: '#social__container',
    opacity: [0, 1],
    translateY: [25, 0],
    duration: 1000,
    delay: 4000,
    easing: 'easeOutExpo',
  })
})
</script>

<template>
  <div>
    <div class="flex h-screen">
      <div id="index__container" class="m-auto">
        <div class="flex flex-col gap-8">
          <h1 class="md:text-8xl text-6xl text-white text-center font-normal tracking-wider select-none">
            <glitched-writer text="Gusbell" appear />
          </h1>
          <h1 class="md:text-2xl text-md text-white text-center font-light tracking-wide select-none">
            <glitched-writer text="developer / designer / arcade player / anime enjoyer" appear />
          </h1>
          <div id="social__container" class="flex flex-row justify-center md:gap-16 gap-8">
            <NuxtLink v-for="(i, index) in links" :key="index" :to="i.to" target="_blank">
              <Icon :icon="`mdi:${i.icon}`" :style="{ fontSize: '2em', color: 'white' }" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
