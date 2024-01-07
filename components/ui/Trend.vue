<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  trend: string,
  category: string,
  numberOfPosts: number,
  position: number
}>()

const title = computed(() => {
  return `${props.position} - ${props.category}`
})

</script>

<template>
  <div class="flex flex-row w-full justify-between">
    <div class="flex flex-col items-start">
      <div class="flex flex-row">
        <span class="text-xs text-slate-300/50">
          {{title}}
        </span>
      </div>
      <div class="flex text-sm font-bold flex-row">
        #{{trend}}
      </div>
      <div class="flex flex-row">
        <span class="text-xs text-slate-300/50" v-if="numberOfPosts">
          {{numberOfPosts}} posts
        </span>
      </div>
    </div>
    <div class="text-slate-300/60">
      <font-awesome-icon class="cursor-pointer" icon="fas fa-ellipsis" />
    </div>
  </div>
</template>

<style scoped>

</style>
