<script setup lang="ts">
import TextInput from "~/components/ui/TextInput.vue";
import TextInputPassword from "~/components/ui/TextInputPassword.vue";

definePageMeta({
  middleware: 'login'
})

const dark = useState('dark', () => true)
const email = ref(undefined)
const password = ref(undefined)
</script>

<template>
  <div :class="{dark}">
    <div class="min-h-screen bg-white dark:bg-black flex flex-col justify-center p-20">
      <div class="flex flex-row justify-center">
        <div class="flex-none w-2/6 max-w-xl">
          <Logo />
        </div>
        <div class="flex-none w-2/6 max-w-xl">
          <div class="sm:text-4xl md:text-6xl font-extrabold">
            Ciò che c'è di nuovo
          </div>
          <div class="sm:text-2xl mt-12 md:text-4xl font-extrabold">
            Iscriviti adesso.
          </div>
          <div class="flex flex-col justify-center h-full space-y-5">
            <TextInput v-model="email" placeholder="Email"/>
            <TextInputPassword v-model="password" placeholder="Password"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  //grid-column: span 4
}
</style>
