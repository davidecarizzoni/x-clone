<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <nuxt-link to="/" class="text-sm text-blue-500">
    {{text}}
  </nuxt-link>
</template>

<style scoped>

</style>
