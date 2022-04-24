<script setup>
import { Icon } from '@iconify/vue'
// eslint-disable-next-line import/no-named-as-default
import GlitchedWriter from 'vue-glitched-writer'

const projects = [
  { title: 'Tsuki', desc: 'Manga uncensoring scripts using DeepCreamPy & HentAI', to: 'https://github.com/Gusb3ll/Tsuki', to2: '' },
  { title: 'mempool', desc: 'Blockchain explorer for monitoring memorypool of Bitcoin', to: 'https://github.com/mempool/mempool', to2: 'https://mempool.space/th' },
  { title: 'oturna', desc: 'A tournament manager for rhythm game, osu!', to: 'https://www.github.com/varkaria/oturna', to2: '' },
  { title: 'keqing-stats-prediction', desc: 'Status prediction of a character in Genshin Impact', to: 'https://github.com/Gusb3ll/keqing-stats-prediction/', to2: '' },
  { title: 'Holotranslator', desc: 'Live Japanese speech to text translator using python', to: 'https://github.com/Gusb3ll/Holotranslator', to2: '' },
  { title: 'osu!Tailwind', desc: 'Recreation of osu! website using tailwindcss (Discontinued)', to: 'https://github.com/Gusb3ll/osu-tailwind', to2: 'https://tailwind.gusbell.tech' },
]
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="mx-auto my-16">
      <h1 class="text-3xl text-white font-thin">
        <glitched-writer text="My Projects" appear />
      </h1>
    </div>
    <div class="mx-auto">
      <div class="grid w-full xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row xl:gap-x-8 gap-x-2">
        <div v-for="(i, index) in projects" :key="index" class="max-w-lg mx-2 my-4 py-4 px-8 border border-light-500 rounded-lg">
          <div>
            <h2 class="text-3xl text-gray-100 font-normal line-clamp-1">
              {{ i.title }}
            </h2>
            <p class="mt-2 text-gray-200 font-thin md:line-clamp-2 line-clamp-1">
              {{ i.desc }}
            </p>
          </div>
          <div class="flex justify-end mt-4 space-x-6">
            <a v-if="i.to2" :href="i.to2" target="_blank"><Icon icon="mdi:earth" :style="{ fontSize: '2em', color: 'white' }" /></a>
            <a v-if="i.to" :href="i.to" target="_blank"><Icon icon="mdi:github" :style="{ fontSize: '2em', color: 'white' }" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
