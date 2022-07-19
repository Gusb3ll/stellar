<script setup>
import GlitchedWriter from 'vue-glitched-writer'

const writer = GlitchedWriter

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="flex min-h-screen justify-center -mt-22">
    <Transition name="fadeFast">
      <div v-if="!loading" class="flex flex-col justify-center items-center gap-8">
        <h1 class="md:text-7xl text-3xl text-white text-center tracking-wide uppercase select-none">
          <writer :text="['Gusbell', 'Kitpipat Jaritwong']" preset="nier" :queue="{ loop: true, interval: 4000 }" appear />
        </h1>
        <AppSocial />
        <div class="flex flex-row gap-8">
          <NuxtLink to="https://webring.wonderful.software#gusbell.tech" title="วงแหวนเว็บ" target="_blank">
            <img alt="วงแหวนเว็บ" width="32" height="32" src="https://webring.wonderful.software/webring.white.svg">
          </NuxtLink>
          <NuxtLink to="https://creatorsgarten.org/ring" title="creatorsgarten" target="_blank">
            <img src="~/assets/logo/creator.svg" width="32" height="32" alt="creatorsgarten" class="text-white">
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </div>
</template>
