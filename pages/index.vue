<script setup>

const { $anime } = useNuxtApp()

definePageMeta({
  layout: 'default',
})

onMounted(() => {
  $anime({
    targets: '.anim__welcome',
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: 500,
    easing: 'easeOutExpo',
  })
})
</script>

<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <Welcome class="anim__welcome" />
    </div>
  </div>
</template>
