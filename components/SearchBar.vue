<script setup lang="ts">

import TextInput from "~/components/ui/TextInput.vue";
const search = ref("");
</script>

<template>
  <div>
    <TextInput v-model="search" />
  </div>
</template>

<style scoped>

</style>
