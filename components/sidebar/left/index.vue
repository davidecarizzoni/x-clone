<script setup lang="ts">
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

  const { defaultTransition } = useTailwind()
</script>

<template>
  <div class="hidden md:block xs:col-span-1 sm:col-span-2 md:col-span-3">
    <div class="sticky top-0">
      <div class="p-2 my-2 rounded-full" :class="[defaultTransition]">
        <NuxtLink to="/">
          <div class="w-8 h-8">
            <Logo />
          </div>
        </NuxtLink>
      </div>
      <div>
        <font-awesome-icon icon="fas fa-home" class="text-white"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
