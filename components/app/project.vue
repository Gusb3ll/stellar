<script setup>
import { Icon } from '@iconify/vue'
defineProps({
  title: String,
  description: String,
  githubEnable: {
    type: Boolean,
    default: false,
  },
  githubUrl: {
    type: String,
    default: '',
  },
  websiteEnable: {
    type: Boolean,
    default: false,
  },
  websiteUrl: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="md:w-104 w-86 h-34 px-6 py-3 bg-white bg-opacity-10 rounded-md border-1 border-gray-500">
    <div class="flex flex-col justify-start items-start gap-1">
      <h1 class="text-2xl text-white font-light line-clamp-1">
        {{ title }}
      </h1>
      <p class="text-gray-300 line-clamp-1">
        {{ description }}
      </p>
    </div>
    <div class="mt-4 flex flex-row justify-end items-center gap-8 text-white">
      <NuxtLink v-show="githubEnable" :to="githubUrl" target="_blank">
        <Icon icon="mdi:github" :style="{ fontSize: '30px' }" />
      </NuxtLink>
      <NuxtLink v-show="websiteEnable" :to="websiteUrl" target="_blank">
        <Icon icon="mdi:globe" :style="{ fontSize: '30px' }" />
      </NuxtLink>
    </div>
  </div>
</template>
