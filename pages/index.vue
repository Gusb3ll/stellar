<script setup>
import GlitchedWriter from 'vue-glitched-writer'

const writer = GlitchedWriter

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="flex h-screen justify-center -mt-22">
    <div class="flex flex-col justify-center items-center gap-8">
      <h1 class="md:text-7xl sm:text-5xl text-3xl text-white text-center tracking-wide uppercase select-none">
        <writer :text="['ガスベル', 'Gusbell', 'Kitpipat Jaritwong']" preset="nier" :queue="{ loop: true, interval: 4000 }" appear />
      </h1>
      <AppSocial />
    </div>
    <div class="absolute bottom-12">
      <div class="flex flex-row gap-8">
        <NuxtLink to="https://webring.wonderful.software#gusbell.tech" title="วงแหวนเว็บ" target="_blank">
          <img src="~/assets/img/logo/webring.svg" width="32" height="32" alt="วงแหวนเว็บ">
        </NuxtLink>
        <NuxtLink to="https://creatorsgarten.org/ring" title="creatorsgarten" target="_blank">
          <img src="~/assets/img/logo/creator.svg" width="32" height="32" alt="creatorsgarten">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
