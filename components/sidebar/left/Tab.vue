<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const { defaultTransition } = useTailwind()
defineProps({
  icon: {
    type: String,
  },
  text: {
    type: String,
  },
})
const active = computed(() => false)
const activeClass = computed(() => active.value ? 'font-semibold':'')
</script>

<template>
  <nuxt-link class="rounded-full flex items-center justify-center p-3 text-white" :class="[defaultTransition, activeClass]">
    <div class="w-6 h-6">
      <font-awesome-icon :icon="icon"/>
    </div>
    <div class="ml-4 text-xl hidden xl:block text-white">
      {{text}}
    </div>
  </nuxt-link>
</template>

<style scoped>

</style>
