<template>
  <div class="h-screen p-6">
    <div class="flex h-full w-full border">
      <div class="m-auto">
        <h1 class="text-3xl text-white font-thin uppercase">
          In progress
        </h1>
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
