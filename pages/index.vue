<script setup>
// const { $anime } = useNuxtApp()

onMounted(() => {
})
</script>

<template>
  <div class="h-screen p-6">
    <div class="flex h-full w-full border">
      <div class="m-auto">
        <img src="~/assets/title.png" alt="Gusbell" class="xl:w-186 lg:w-164 md:w-128 w-86 select-none">
      </div>
      <AppLayoutSocialBar />
      <div class="sm:block hidden">
        <div class="absolute top-1/2 -right-30 rotate-90 transform">
          <h1 class="text-xl text-white uppercase font-bold tracking-8px">
            Under Development
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
