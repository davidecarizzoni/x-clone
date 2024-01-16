<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  modelValue: string,
  showClear?: boolean
  placeholder?: string
  type?: string
}>()
const emit = defineEmits(['update:modelValue'])

const data = useVModel(props, 'modelValue', emit)

const clear = () => {
  data.value = ''
}
</script>

<template>
  <div class="text-input flex flex-row items-center relative">
    <div class="prepend left-2 h-full flex-col justify-center items-center" v-if="$slots.prepend">
      <slot name="prepend" />
    </div>
    <input
      v-model="data"
      :placeholder="placeholder"
      :type="type"
      class="bg-transparent h-12 pl-2 w-full focus:outline-0"
    />
    <div class="append absolute flex top-0 right-4 h-full flex-col justify-center items-center">
      <font-awesome-icon
        v-if="!!data && showClear"
        icon="fas fa-times"
        class="cursor-pointer text-white/80"
        @click="clear"
      />
      <slot name="right"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .text-input {
    @apply focus:outline-0;
    @apply pl-4;
    @apply pr-2;
    @apply rounded-full;
    @apply bg-slate-600/30;
    @apply text-white;
  }
</style>
