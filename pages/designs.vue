<template>
  <div class="h-screen p-6">
    <div class="flex h-full w-full border">
      <div class="m-auto">
        <h1 class="text-3xl text-white" />
      </div>
      <NuxtLink to="/projects">
        <div class="sm:hidden block">
          <div class="absolute top-8 inset-x-0">
            <h1 class="text-md text-white text-center uppercase font-bold tracking-4px">
              Projects
            </h1>
          </div>
        </div>
        <div class="sm:block hidden">
          <div class="absolute top-[47.5%] -left-8 transform -rotate-90">
            <h1 class="text-xl text-white uppercase font-bold tracking-8px">
              Projects
            </h1>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
