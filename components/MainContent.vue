<script setup lang="ts">

import XHeader from "~/components/ui/XHeader.vue";
import NewPost from "~/components/NewPost.vue";
import XSpinner from "~/components/ui/XSpinner.vue";
const tab = useState('tab')

const loading = ref(false)

console.debug({tab})

</script>

<template>
  <div class="col-span-11 md:col-span-8 xl:col-span-6 min-h-screen border-x-[1px] border-gray-100/20">
    <XHeader />
    <NewPost />
    <div class="flex items-center justify-center mt-10">
      <XSpinner v-if="loading"/>
    </div>
  </div>
</template>

<style scoped>

</style>
