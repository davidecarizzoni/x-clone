<script setup lang="ts">
defineProps<{
  text: string;
  type: 'primary' | 'white'
}>()

</script>

<template>
  <button class="rounded-full bg-blue-500 px-3 py-2 font-bold" :class="[type]">
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
