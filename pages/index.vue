<script setup>
import GlitchedWriter from 'vue-glitched-writer'

const writer = GlitchedWriter

const text = ['Gusbell', 'Kitpipat Jaritwong']
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<template>
  <div class="flex flex-col h-full">
    <section id="header" class="flex min-h-screen justify-center">
      <Transition name="fade">
        <div v-if="!loading" class="flex flex-col justify-center items-center gap-8">
          <h1 class="md:text-7xl text-4xl text-white tracking-wide uppercase select-none">
            <writer :text="text" preset="nier" :queue="{ loop: true, interval: 5000 }" />
          </h1>
          <AppSocial />
        </div>
      </Transition>
    </section>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
