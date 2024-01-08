<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import XButton from "~/components/ui/XButton.vue";

const post = ref('')

const onClickImage = () => {}
const onClickPoll = () => {}
const onClickSmile = () => {}
const onClickCalendar = () => {}

</script>

<template>
  <div class="new-post grid gap-4 px-2 border-b-[1px] border-gray-100/20">
    <div class="flex flex-row justify-center mt-3">
      <div class="h-10 w-10 rounded-full bg-white"></div>
    </div>
    <div class="mt-3">
      <input
        class="bg-transparent outline-0 font-medium"
        placeholder="What is happening?!"
        autofocus
        v-model="post"
      />
      <div class="mt-3 font-semibold text-blue-500 pb-2 border-b-[1px] border-gray-100/20">
        <div class="flex-row flex items-center">
          <font-awesome-icon icon="fas fa-globe-europe"/>
          <span class="ml-2">
            Everyone can see
          </span>
        </div>
      </div>
      <div class="flex flex-row items-center py-2 justify-between">
        <div class="flex space-x-5 flex-row items-center text-blue-500">
          <font-awesome-icon icon="fas fa-image" class="cursor-pointer" @click="onClickImage"/>
          <font-awesome-icon icon="fas fa-poll" class="cursor-pointer" @click="onClickPoll"/>
          <font-awesome-icon icon="fas fa-smile" class="cursor-pointer" @click="onClickSmile"/>
          <font-awesome-icon icon="fas fa-calendar" class="cursor-pointer" @click="onClickCalendar"/>
        </div>
        <div class="flex flex-row items-center">
          <XButton text="Post" type="primary" class="px-3 py-1.5" :disabled="!post"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .new-post {
    grid-template-columns: 2fr 15fr;
  }
</style>
