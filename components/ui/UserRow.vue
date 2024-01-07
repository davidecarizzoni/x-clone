<script setup lang="ts">
import XButton from "~/components/ui/XButton.vue";

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const src = `https://i.pravatar.cc/400?img=${getRandomNumber(1, 70)}`;
const isFollowing = false;


</script>

<template>
  <div class="flex items-center w-full justify-between space-x-4">
    <div class="flex flex-row items-center justify-start space-x-4">
      <div class="h-11 w-11 bg-white rounded-sm">
        <img :src="src" alt="avatar"/>
      </div>
      <div class="flex flex-col items-baseline">
        <div class="font-bold">
          The Wall Street Journal
        </div>
        <div class="font-normal text-[14px] text-slate-300/50">
          @WSJ
        </div>
      </div>
    </div>
    <XButton v-if="isFollowing" text="Unfollow" type="primary" class="py-1.5 px-4" />
    <XButton v-else text="Follow" type="white" class="py-1.5 px-4" />
  </div>
</template>

<style scoped>

</style>
