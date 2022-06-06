<script setup>
import GlitchedWriter from 'vue-glitched-writer'
import projects from '~/assets/projects.json'

const writer = GlitchedWriter
const projActive = ref(false)

onMounted(() => {
  projActive.value = true
})
</script>

<template>
  <div class="flex h-full w-screen justify-center">
    <div class="flex flex-col gap-12 mt-8">
      <Transition name="fadeFast">
        <h1 v-if="projActive" class="md:text-5xl text-3xl text-white text-center tracking-wide uppercase select-none">
          <writer text="Projects" preset="nier" appear />
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
  </div>
</template>
