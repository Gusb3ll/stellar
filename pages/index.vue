<template>
  <div class="h-screen p-6">
    <div class="flex h-full w-full border">
      <div class="m-auto">
        <img src="~/assets/title.png" alt="Gusbell" width="1220" height="360" class="xl:w-186 lg:w-164 md:w-128 w-86 select-none">
      </div>
      <AppLayoutSocialBar />
      <NuxtLink to="/projects">
        <div class="sm:block hidden">
          <div class="absolute top-[48%] -right-8 transform rotate-90">
            <h1 class="text-xl text-white uppercase font-bold tracking-8px">
              Projects
            </h1>
          </div>
        </div>
        <div class="sm:hidden block">
          <div class="absolute bottom-8 inset-x-0">
            <h1 class="text-md text-white text-center uppercase font-bold tracking-4px">
              Projects
            </h1>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
