<script setup lang="ts">
defineProps<{
  text: string;
}>()
</script>

<template>
  <button class="rounded-full bg-blue-500 px-3 py-2 font-bold">
    {{ text }}
  </button>
</template>

<style scoped>

</style>
