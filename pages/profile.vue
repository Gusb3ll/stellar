<script setup>
import GlitchedWriter from 'vue-glitched-writer'

const writer = GlitchedWriter
const profileActive = ref(false)

onMounted(() => {
  profileActive.value = true
})
</script>

<template>
  <div class="flex min-h-screen w-screen justify-center">
    <div class="flex flex-col gap-8 mt-16">
      <Transition name="fadeFast">
        <div class="flex flex-col justify-center items-center gap-8">
          <img src="~/assets/pfp.jpg" class="h-48 w-48 rounded-full">
          <h1 v-if="profileActive" class="md:text-5xl text-3xl text-white text-center tracking-wide select-none">
            <writer text="Hello 👋" preset="nier" appear />
          </h1>
        </div>
      </Transition>
      <Transition name="fade">
        <div v-show="profileActive" class="flex flex-col h-full w-full gap-8">
          <div class="flex sm:w-[50vw] w-[90vw] justify-center">
            <p class="px-4 text-white text-xl text-center font-light leading-10">
              Hi, I'm gusbell. aka Kitpipat Jaritwong.
              I love to explore new ideas in coding & designing, Right now I'm a student at <a href="https://kmutnb.ac.th">KMUTNB</a>,
              and I'm currently working as opensource fullstack developer. My main interest are minimal/furturistic design, so I'm working
              to improve myself on it.
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

