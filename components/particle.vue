<script setup>
const loaded = ref(false)
const particlesInit = ref(null)
const particlesLoaded = ref(null)

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 500)
})
</script>

<template>
  <div v-if="loaded">
    <Particles id="tsparticles" :particles-init="particlesInit" :particles-loaded="particlesLoaded" url="/particles.json" />
  </div>
</template>
