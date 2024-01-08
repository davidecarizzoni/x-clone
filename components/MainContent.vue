<script setup lang="ts">

import XHeader from "~/components/ui/XHeader.vue";
import NewPost from "~/components/NewPost.vue";
const tab = useState('tab')
</script>

<template>
  <div class="col-span-11 md:col-span-8 xl:col-span-6 min-h-screen border-x-[1px] border-gray-100/20">
    <XHeader />
    <NewPost />
    {{tab}}
  </div>
</template>

<style scoped>

</style>
