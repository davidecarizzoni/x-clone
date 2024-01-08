<template>
  <div class="">
    <font-awesome-icon icon="fas fa-cog" @click="isOpen = true"/>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-200 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-100 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-slate-400/20" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-200 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                class="text-lg title font-medium leading-6 text-white"
              >
                <div class="flex flex-row justify-between items-center">
                  <div class="flex flex-row items-center">
                    <font-awesome-icon icon="fas fa-times" class="cursor-pointer" @click="closeModal" />
                    <div class="ml-4">
                      Timeline settings
                    </div>
                  </div>
                  <XButton text="Done" type="white" class="px-4 py-[4px] text-sm" @click="closeModal" />
                </div>
              </DialogTitle>
              <div class="mt-6">
                <p class="text-sm text-gray-500 px-8">
                  Try pinning a List or a Community to have easier access to your favorite content.
                </p>
              </div>
              <div class="h-5"/>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import XButton from "~/components/ui/XButton.vue";

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>
