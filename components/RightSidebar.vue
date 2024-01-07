<script setup lang="ts">
import SearchBar from "~/components/SearchBar.vue";
import Trends from "~/components/Trends.vue";
</script>

<template>
  <div class="hidden md:block xs:col-span-3 xl:col-span-2">
    <div class="sticky top-0">
      <div class="flex flex-col">
        <SearchBar />
        <WhoToFollow />
        <Trends />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
