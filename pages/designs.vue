<script setup>
import GlitchedWriter from 'vue-glitched-writer'

const writer = GlitchedWriter
const designActive = ref(false)

onMounted(() => {
  designActive.value = true
})
</script>

<template>
  <div class="flex min-h-screen w-screen justify-center">
    <div class="flex flex-col gap-12 mt-8">
      <Transition name="fadeFast">
        <h1 v-if="designActive" class="md:text-5xl text-3xl text-white text-center tracking-wide uppercase select-none">
          <writer text="Designs" preset="nier" appear />
        </h1>
      </Transition>
      <Transition name="fade">
        <div v-show="designActive" class="grid h-full w-full xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row place-items-center gap-8">
          <div class="img_container">
            <img src="~/assets/designs/banner1.png" alt="">
          </div>
          <div class="img_container">
            <img src="~/assets/designs/tsuki.png" alt="">
          </div>
          <div class="img_container">
            <img src="~/assets/designs/git1.png" alt="">
          </div>
          <div class="img_container">
            <img src="~/assets/designs/git2.png" alt="">
          </div>
          <div class="img_container">
            <img src="~/assets/designs/stack.png" alt="">
          </div>
          <div class="img_container">
            <img src="~/assets/designs/twit.png" alt="">
          </div>
          <div class="img_container">
            <img src="~/assets/designs/behance.png" alt="">
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.img_container {
  @apply flex sm:max-w-[30vw] max-w-[90vw] h-64 justify-center items-center  border border-white border-opacity-30 rounded-xl
}
</style>
