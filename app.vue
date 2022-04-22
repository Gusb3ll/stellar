<script setup>
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<template>
  <div v-if="!loading">
    <ClientOnly>
      <NuxtPage />
    </ClientOnly>
  </div>
</template>
