<script setup>
import GlitchedWriter from 'vue-glitched-writer'

const writer = GlitchedWriter

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="flex min-h-screen justify-center -mt-16">
    <div class="flex flex-col justify-center items-center gap-8">
      <h1 class="md:text-7xl text-3xl text-white text-center tracking-wide uppercase select-none">
        <writer :text="['Kitpipat Jaritwong', 'Gusbell']" preset="nier" :queue="{ loop: true, interval: 4000 }" appear />
      </h1>
      <AppSocial />
      <a href="https://webring.wonderful.software#gusbell.tech" title="วงแหวนเว็บ">
        <img alt="วงแหวนเว็บ" width="32" height="32" src="https://webring.wonderful.software/webring.white.svg">
      </a>
    </div>
  </div>
</template>
