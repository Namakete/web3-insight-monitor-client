<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import MenuIcon from './icons/MenuIcon.vue'

interface Link {
  name: string
  path: string
}

const { links } = defineProps<{
  links: Link[]
}>()

const [isOpen, toggle] = useToggle(false)

const toggleMenu = () => toggle()
</script>

<template>
  <header class="relative flex justify-between items-center px-8 py-8">
    <div class="flex items-center">
      <h1 class="flex-shrink-0 font-bold">{{ $t('title') }}</h1>
      <hr class="hidden mx-6 h-6 border-l border-gray-300 md:block" />
      <nav class="hidden gap-10 md:flex">
        <router-link
          class="flex items-center gap-3 link-hover"
          v-for="link in links"
          :key="link.name"
          :to="link.path"
        >
          {{ link.name }}
        </router-link>
      </nav>
    </div>
    <nav
      class="absolute w-full top-full left-0 z-10 bg-white md:hidden"
      v-show="isOpen"
    >
      <router-link
        class="flex items-center gap-3 py-4 px-8 border-b last:border-b-0 link-hover"
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        @click="toggleMenu"
      >
        {{ link.name }}
      </router-link>
    </nav>
    <button class="md:hidden" @click="toggleMenu">
      <MenuIcon :isOpen="isOpen" />
    </button>
  </header>
</template>
