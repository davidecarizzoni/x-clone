<script setup lang="ts">

import TextInput from "~/components/ui/TextInput.vue";
import {useVModel} from "@vueuse/core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
const props = defineProps<{
  modelValue: string,
  type?: string
  placeholder?: string
}>()
const emit = defineEmits(['update:modelValue'])
const data = useVModel(props, 'modelValue', emit)

const type = ref('password')

const toggle = () => {
  type.value = type.value === 'password' ? 'text' : 'password'
}

</script>

<template>
  <TextInput v-model="data" :type="type" :placeholder="placeholder">
    <template #right>
      <font-awesome-icon
        :icon="type === 'password' ? 'fas fa-eye-slash':  'fas fa-eye'"
        class="cursor-pointer text-white/80"
        @click="toggle"
      />
    </template>
  </TextInput>
</template>

<style scoped>

</style>
