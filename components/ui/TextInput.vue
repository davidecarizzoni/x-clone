<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits(['update:modelValue'])

const data = useVModel(props, 'modelValue', emit)

const clear = () => {
  data.value = ''
}
</script>

<template>
  <div class="text-input flex flex-row items-center relative">
    <div class="prepend left-2 h-full flex-col justify-center items-center">
      <font-awesome-icon
        icon="fas fa-search"
        class="cursor-pointer text-white/60"
      />
    </div>
    <input
      v-model="data"
      placeholder="Search"
      class="bg-transparent h-12 pl-2 w-full focus:outline-0"
    />
    <div class="append absolute flex top-0 right-4 h-full flex-col justify-center items-center">
      <font-awesome-icon
        v-if="!!data"
        icon="fas fa-times"
        class="cursor-pointer text-white/80"
        @click="clear"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .text-input {
    @apply focus:outline-0;
    @apply pl-4;
    @apply pr-2;
    @apply rounded-full;
    @apply bg-slate-600/60;
    @apply text-white;
  }
  .append {

  }
  .prepend {

  }
</style>
