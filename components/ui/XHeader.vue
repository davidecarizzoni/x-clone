<script setup lang="ts">
import Settings from "~/components/ui/Settings.vue";

const tab = useState('tab', () => 'forYou')
const isForYou = computed(() => tab.value === 'forYou')
const isFollowing = computed(() => tab.value === 'following')


</script>

<template>
  <div class="grid grid-cols-12 border-b-[1px] border-gray-100/20">
    <div class="col-span-11">
      <div class="flex flex-row justify-around items-center h-12">
        <div class="relative h-full cursor-pointer" @click.stop="tab = 'forYou'">
          <div class="font-bold pt-2" :class="[isForYou ? 'font-bold' : 'font-semibold text-slate-300/50']">
            For you
          </div>
          <div class="transition-all duration-400	 rounded-sm absolute bottom-0 h-1 bg-blue-500 w-full" v-if="isForYou"/>
        </div>
        <div class="relative h-full cursor-pointer" @click.stop="tab = 'following'">
          <div class="pt-2" :class="[isFollowing ? 'font-bold' : 'font-semibold text-slate-300/50']">
            Following
          </div>
          <div class="transition-all duration-400	rounded-sm absolute bottom-0 h-1 bg-blue-500 w-full" v-if="isFollowing"/>
        </div>
      </div>
    </div>
    <div class="col-span-1 flex items-center cursor-pointer justify-center">
      <Settings />
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
