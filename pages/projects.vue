<script setup>
const projects = [
  {
    title: 'oturne',
    description: 'Tournament mananger for rhythm game osu!',
    githubEnable: false,
    websiteEnable: false,
    githubUrl: '',
    websiteUrl: '',
  },
  {
    title: 'Yuriko (WIP)',
    description: 'Alternative frontend for VNDB website',
    githubEnable: true,
    websiteEnable: true,
    githubUrl: 'https://github.com/gusb3ll/yuriko',
    websiteUrl: 'https://yuriko.gusbell.tech',
  },
  {
    title: 'Tsuki',
    description: 'Manga uncensoring using DeepCreamPy & HentAI',
    githubEnable: true,
    websiteEnable: false,
    githubUrl: 'https://github.com/gusb3ll/tsuki',
    websiteUrl: '',
  },
  {
    title: 'thailand-public-train-data',
    description: 'Dataset for Thailand public train transportation (Bangkok area)',
    githubEnable: true,
    websiteEnable: true,
    githubUrl: 'https://github.com/gusb3ll/thailand-public-train-data',
    websiteUrl: 'https://kaggle.com/datasets/gusbell/thailand-public-train-data-bangkok-area',
  },
  {
    title: 'omise-nuxt3',
    description: 'omise.js integration with nuxt3',
    githubEnable: true,
    websiteEnable: true,
    githubUrl: 'https://github.com/gusb3ll/omise-nuxt3',
    websiteUrl: 'https://omise.gusbell.tech',
  },
  {
    title: 'Holotranslator',
    description: 'Live Japanese speech to English text translator',
    githubEnable: true,
    websiteEnable: false,
    githubUrl: 'https://github.com/gusb3ll/holotranslator',
    websiteUrl: '',
  },
  {
    title: 'osu-tailwind (Discontinued)',
    description: 'Trying to remake osu! website components with tailwindcss',
    githubEnable: true,
    websiteEnable: true,
    githubUrl: 'https://github.com/Gusb3ll/osu-tailwind',
    websiteUrl: 'https://tailwind.gusbell.tech',
  },
  {
    title: 'keqing-stats-prediction',
    description: 'My first ever machine learning project',
    githubEnable: true,
    websiteEnable: false,
    githubUrl: 'https://github.com/Gusb3ll/keqing-stats-prediction',
    websiteUrl: '',
  },
]
</script>

<template>
  <div class="md:h-screen h-full p-6">
    <div class="flex min-h-full min-w-full border">
      <div class="mx-auto">
        <h1 class="my-6 text-3xl text-white text-center font-thin uppercase">
          Projects
        </h1>
        <div class="mt-12 grid w-[80vw] xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row place-items-center gap-y-8">
          <AppProjectCard
            v-for="(i, index) in projects"
            :key="index"
            :title="i.title"
            :description="i.description"
            :github-enable="i.githubEnable"
            :website-enable="i.websiteEnable"
            :github-url="i.githubUrl"
            :website-url="i.websiteUrl"
          />
        </div>
      </div>
      <NuxtLink to="/">
        <div class="sm:block hidden">
          <div class="absolute top-[47.5%] left-2 transform -rotate-90">
            <h1 class="text-xl text-white uppercase font-bold tracking-8px">
              Home
            </h1>
          </div>
        </div>
        <AppLayoutTopNav title="home" />
      </NuxtLink>
      <NuxtLink to="/designs">
        <div class="sm:block hidden">
          <div class="absolute top-[48%] -right-6 transform rotate-90">
            <h1 class="text-xl text-white uppercase font-bold tracking-8px">
              Designs
            </h1>
          </div>
        </div>
        <AppLayoutBottomNav title="designs" />
      </NuxtLink>
    </div>
  </div>
</template>
