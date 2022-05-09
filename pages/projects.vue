<template>
  <div class="h-screen p-6">
    <div class="flex h-full w-full border">
      <div class="m-auto">
        <h1 class="text-3xl text-white" />
      </div>
      <NuxtLink to="/">
        <div class="sm:block hidden">
          <div class="absolute top-[47.5%] left-2 transform -rotate-90">
            <h1 class="text-xl text-white uppercase font-bold tracking-8px">
              Home
            </h1>
          </div>
        </div>
        <div class="sm:hidden block">
          <div class="absolute top-8 inset-x-0">
            <h1 class="text-md text-white text-center uppercase font-bold tracking-4px">
              Home
            </h1>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/designs">
        <div class="sm:block hidden">
          <div class="absolute top-[48%] -right-6 transform rotate-90">
            <h1 class="text-xl text-white uppercase font-bold tracking-8px">
              Designs
            </h1>
          </div>
        </div>
        <div class="sm:hidden block">
          <div class="absolute bottom-8 inset-x-0">
            <h1 class="text-md text-white text-center uppercase font-bold tracking-4px">
              Designs
            </h1>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
