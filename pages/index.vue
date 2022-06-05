<script setup>
import { useWindowScroll } from '@vueuse/core'
import GlitchedWriter from 'vue-glitched-writer'
import projects from '~/assets/projects.json'

const writer = GlitchedWriter

const { y } = useWindowScroll()

const projActive = ref(false)
const designActive = ref(false)
</script>

<template>
  <main class="flex flex-col h-full overflow-hidden">
    <section id="title" class="flex min-h-screen justify-center">
      <div class="flex flex-col justify-center items-center gap-8">
        <h1 class="md:text-7xl text-4xl text-white text-center tracking-wide uppercase select-none">
          <writer :text="['Gusbell', 'Kitpipat Jaritwong']" preset="nier" :queue="{ loop: true, interval: 5000 }" appear />
        </h1>
        <AppSocial />
      </div>
    </section>
    <section id="projects" class="flex min-h-screen w-screen justify-center">
      <div class="flex flex-col gap-8 mt-8">
        <Transition name="fadeFast">
          <h1 v-if="y > 250 || projActive" class="md:text-5xl text-3xl text-white text-center tracking-wide uppercase select-none">
            <writer text="Projects" preset="nier" appear @start="projActive = !projActive" />
          </h1>
        </Transition>
        <Transition name="fade">
          <div v-show="projActive" class="grid h-full w-full xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row place-items-center gap-8">
            <AppProject
              v-for="({ title, description, githubEnable, websiteEnable, githubUrl, websiteUrl }, index) in projects"
              :key="index"
              :title="title"
              :description="description"
              :github-enable="githubEnable"
              :website-enable="websiteEnable"
              :github-url="githubUrl"
              :website-url="websiteUrl"
            />
          </div>
        </Transition>
      </div>
    </section>
    <section id="designs" class="flex min-h-screen w-screen justify-center">
      <div class="flex flex-col gap-8 mt-8">
        <Transition name="fadeFast">
          <h1 v-if="y > 1150 || designActive" class="md:text-5xl text-3xl text-white text-center tracking-wide uppercase select-none">
            <writer text="Designs" preset="nier" appear @start="designActive = !designActive" />
          </h1>
        </Transition>
        <Transition name="fade">
          <div v-show="designActive" class="grid h-full w-full xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row place-items-center gap-8">
            <div class="img_container">
              <img src="~/assets/designs/banner1.png" alt="">
            </div>
            <div class="img_container">
              <img src="~/assets/designs/behance.png" alt="">
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
          </div>
        </Transition>
      </div>
    </section>
  </main>
</template>

<style scoped>
.img_container {
  @apply flex max-w-[30vw] h-64 justify-center items-center  border border-white border-opacity-30 rounded-xl
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fadeFast-enter-active,
.fadeFast-leave-active {
  transition: opacity 0.5s;
}
.fadeFast-enter-from,
.fadeFast-leave-to {
  opacity: 0;
}
</style>
