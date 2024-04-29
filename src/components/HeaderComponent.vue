<script setup lang="ts">
import { defineProps } from 'vue'
import { useToggle } from '@vueuse/core'
import MenuIcon from './icons/MenuIcon.vue'

const props = defineProps<{
  links: { name: string; path: string }[]
}>()

const [isOpen, toggle] = useToggle(false)
</script>

<template>
  <header class="relative flex justify-between items-center px-8 py-8">
    <div class="flex items-center">
      <h1 class="flex-shrink-0">Web3 Insight Monitor</h1>
      <div class="hidden md:block border-l border-gray-300 mx-6 h-6"></div>
      <nav class="hidden md:flex gap-10">
        <router-link v-for="link in props.links" :key="link.name" :to="link.path" class="ctm-link">
          {{ link.name }}
        </router-link>
      </nav>
    </div>

    <div v-if="isOpen" class="absolute left-0 w-full bg-white z-10 md:hidden" style="top: 100%">
      <router-link
        v-for="link in props.links"
        :key="link.name"
        :to="link.path"
        class="block py-2 px-4 text-center border-b last:border-b-0 ctm-link"
        @click="() => toggle()"
      >
        {{ link.name }}
      </router-link>
    </div>

    <button @click="() => toggle()" class="md:hidden">
      <MenuIcon :isOpen="isOpen" />
    </button>
  </header>
</template>
