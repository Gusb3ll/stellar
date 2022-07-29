<script setup>
import GlitchedWriter from 'vue-glitched-writer'

const writer = GlitchedWriter
const loading = ref(true)

onMounted(() => {
  loading.value = false
})
</script>

<template>
  <div class="flex min-h-screen w-screen justify-center">
    <div class="flex flex-col gap-12 mt-8">
      <Transition name="fadeFast">
        <h1 v-if="!loading" class="md:text-5xl text-3xl text-white text-center tracking-wide uppercase select-none">
          <writer text="Works" preset="nier" appear />
        </h1>
      </Transition>
      <Transition name="fade">
        <div v-show="!loading" class="grid w-screen xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row gap-8 px-8">
          <a class="flex flex-col gap-2 border borer-white border-opacity-50 rounded-xl" href="https://www.omtht.xyz" target="_blank">
            <nuxt-img format="webp" src="/img/works/omth22.webp" class="p-2 rounded-xl" alt="OMTHT - 2022" />
            <h1 class="sm:text-xl text-lg text-white text-center px-4 pb-2">
              osu!mania Thailand Tournament 2022
            </h1>
          </a>
          <a class="flex flex-col gap-2 border borer-white border-opacity-50 rounded-xl" href="https://osu.ppy.sh/community/forums/topics/1293390?n=1" target="_blank">
            <nuxt-img format="webp" src="/img/works/omth21.webp" class="p-2 rounded-xl" alt="OMTHPL - 2021" />
            <h1 class="sm:text-xl text-lg text-white text-center px-4 pb-2">
              osu!mania Thailand Tournament 2021
            </h1>
          </a>
        </div>
      </Transition>
    </div>
  </div>
</template>
