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
    <div class="flex flex-col gap-8 mt-16">
      <Transition name="fadeFast">
        <div v-if="!loading" class="flex flex-col justify-center items-center gap-8">
          <nuxt-img format="webp" src="/img/pfp.jpg" class="h-48 w-48 rounded-full" />
          <h1 class="md:text-5xl text-3xl text-white text-center tracking-wide select-none">
            <writer text="Hi 👋" preset="nier" appear />
          </h1>
        </div>
      </Transition>
      <Transition name="fade">
        <div v-if="!loading" class="flex flex-col h-full w-full gap-12">
          <div class="flex flex-row h-full w-[90vw] justify-center">
            <p class="px-4 text-white sm:text-2xl text-md leading-10">
              · I am human <br>
              · I love anime <br>
              · I love hackaton <br>
              · I play rhythm game <br>
            </p>
            <p class="px-4 text-white sm:text-2xl text-md leading-10">
              · Software Enginner @ Brikl <br>
              · Studied at KMUTNB <br>
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

