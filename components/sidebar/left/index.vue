<script setup lang="ts">
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

  const { defaultTransition } = useTailwind()
</script>

<template>
  <div class="md:block xs:col-span-1 xl:col-span-2">
    <div class="sticky top-0">
      <div class="p-2 my-2 rounded-full" :class="[defaultTransition]">
        <nuxt-link to="/">
          <div class="w-8 h-8">
            <Logo />
          </div>
        </nuxt-link>
      </div>
      <div class="mt-2 space-y-1">
        <sidebar-left-tab icon="fas fa-home" text="Home"/>
        <sidebar-left-tab icon="fas fa-hashtag" text="Esplore"/>
        <sidebar-left-tab icon="fas fa-bell" text="Notifications"/>
        <sidebar-left-tab icon="fas fa-envelope" text="Bookmarks"/>
        <sidebar-left-tab icon="fas fa-user" text="Users"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
