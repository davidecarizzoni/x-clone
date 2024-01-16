<script setup lang="ts">

import TextInput from "~/components/ui/TextInput.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
const search = ref("");
</script>

<template>
  <div>
    <TextInput v-model="search" show-clear placeholder="Search">
      <template #prepend>
        <font-awesome-icon
          icon="fas fa-search"
          class="cursor-pointer text-white/60"
        />
      </template>
    </TextInput>
  </div>
</template>

<style scoped>

</style>
