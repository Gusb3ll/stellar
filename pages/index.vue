<script setup>
import { Icon } from '@iconify/vue'
import GlitchedWriter from 'vue-glitched-writer'

const { $anime } = useNuxtApp()
const style = { fontSize: '2em', color: 'white' }

const links = [
  {
    to: 'https://github.com/gusb3ll',
    icon: 'mdi:github',
  },
  {
    to: 'https://www.facebook.com/kitpipat.jaritwong',
    icon: 'mdi:facebook',
  },
  {
    to: 'https://twitter.com/gusb3ll',
    icon: 'mdi:twitter',
  },
  {
    to: 'https://discord.com/users/297306376542224385',
    icon: 'mdi:discord',
  },
  {
    to: 'https://www.linkedin.com/in/kitpipat-jaritwong-3123a221a/',
    icon: 'mdi:linkedin',
  },
]

definePageMeta({
  layout: 'default',
})

onMounted(() => {
  $anime({
    targets: '#index__container',
    scale: [0, 1],
    opacity: [0, 1],
    duration: 1000,
    delay: 500,
    easing: 'easeOutQuint',
  })
  $anime({
    targets: '#social__container',
    opacity: [0, 1],
    translateY: [25, 0],
    duration: 1000,
    delay: 4000,
    easing: 'easeOutQuint',
  })
})
</script>

<template>
  <div id="index__container">
    <div class="flex h-screen">
      <div class="m-auto">
        <div class="flex flex-col gap-8">
          <h1 class="md:text-8xl text-6xl text-white text-center font-normal tracking-wider select-none">
            <glitched-writer text="Gusbell" appear />
          </h1>
          <h1 class="title2 md:text-2xl text-md text-white text-center font-light tracking-wide select-none">
            <glitched-writer text="developer / designer / arcade player / anime enjoyer" appear />
          </h1>
          <div id="social__container" class="flex flex-row justify-center md:gap-16 gap-8">
            <NuxtLink v-for="(i, index) in links" :key="index" target="_blank" :to="i.to">
              <Icon :icon="i.icon" :style="style" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
