<script setup>
import MainContent from "~/components/MainContent.vue";
import RightSidebar from "~/components/RightSidebar.vue";

const dark = ref(true)
</script>

<template>
  <div :class="{dark}">
    <div class="min-h-screen bg-white dark:bg-black">
      <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
        <sidebar-left />
        <main-content />
        <right-sidebar />
      </div>
    </div>
  </div>
</template>
