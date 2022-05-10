<script setup>
defineProps({
  title: String,
})
</script>

<template>
  <div class="sm:hidden block">
    <div class="absolute bottom-8 inset-x-0">
      <h1 class="text-md text-white text-center uppercase font-bold tracking-4px">
        {{ title }}
      </h1>
    </div>
  </div>
</template>
