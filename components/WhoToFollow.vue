<script setup lang="ts">

import Card from "~/components/ui/Card.vue";
import XLink from "~/components/ui/XLink.vue";
import UserRow from "~/components/ui/UserRow.vue";
</script>

<template>
  <Card class="mt-4">
    <div class="title">
      Who to follow
    </div>
    <div class="space-y-4 my-4 w-full">
      <UserRow />
      <UserRow />
      <UserRow />
    </div>
    <XLink text="Show more" class="mt-2"/>
  </Card>
</template>

<style scoped>

</style>
