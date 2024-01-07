<script setup lang="ts">

import Card from "~/components/ui/Card.vue";
import Trend from "~/components/ui/Trend.vue";
import XLink from "~/components/ui/XLink.vue";
</script>

<template>
  <Card class="mt-4">
    <div class="title">
      Italy trends
    </div>
    <div class="space-y-4 mt-4 mb-2 w-full">
      <Trend :position="1" trend="Gatti" number-of-posts="200" category="Football"/>
      <Trend :position="2" trend="Roma/Atalanta" number-of-posts="20k" category="Football"/>
      <Trend :position="3" trend="LaLuceNellaMasseriea" number-of-posts="" category="Trending"/>
    </div>
    <XLink text="Show more" class="mt-2"/>
  </Card>
</template>

<style scoped>

</style>
