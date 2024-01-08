<script setup lang="ts">
const props = defineProps<{
  text: string;
  type: 'primary' | 'white',
  disabled?: boolean,
  btnClass?: string
}>()

</script>

<template>
  <button class="rounded-full bg-blue-500 font-bold" :class="[type, disabled && 'opacity-60']" :disabled="disabled">
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
.primary {
  @apply bg-blue-500 text-white;
}
.white {
  @apply bg-white text-black;
}
</style>
