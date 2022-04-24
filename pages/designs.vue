<script setup>
// eslint-disable-next-line import/no-named-as-default
import GlitchedWriter from 'vue-glitched-writer'
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="mx-auto my-16">
      <h1 class="text-3xl text-white font-thin">
        <glitched-writer text="My Designs" appear />
      </h1>
    </div>
    <div class="mx-auto w-1/2 mb-24">
      <div class="flex flex-col h-full gap-16">
        <div class="p-8 border-2 border-light-300 rounded-xl">
          <img src="~/assets/designs/git1.png">
        </div>
        <div class="p-8 border-2 border-light-300 rounded-xl">
          <img src="~/assets/designs/git2.png">
        </div>
        <div class="p-8 border-2 border-light-300 rounded-xl">
          <img src="~/assets/designs/banner1.png">
        </div>
        <div class="p-8 border-2 border-light-300 rounded-xl">
          <img src="~/assets/designs/stack.png">
        </div>
        <div class="p-8 border-2 border-light-300 rounded-xl">
          <img src="~/assets/designs/twit.png">
        </div>
        <div class="p-8 border-2 border-light-300 rounded-xl">
          <img src="~/assets/designs/behance.png">
        </div>
      </div>
    </div>
  </div>
</template>
