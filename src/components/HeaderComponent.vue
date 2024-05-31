<script setup lang="ts">
import { useToggle } from '@vueuse/core';

import MenuIcon from './icons/MenuIcon.vue';

interface Link {
  name: string;
  path: string;
}
const { links } = defineProps<{
  links: Link[];
}>();

const [isOpen, toggle] = useToggle(false);
</script>

<template>
  <header class="relative flex items-center justify-between px-8 py-8">
    <div class="flex items-center">
      <h1 class="flex-shrink-0 font-bold">{{ $t('title') }}</h1>
      <hr class="mx-6 hidden h-4 border-l border-gray-800 md:block" />
      <nav class="hidden gap-10 md:flex">
        <router-link
          class="cursor-pointer text-gray-800 hover:text-white flex items-center gap-3"
          v-for="link in links"
          :key="link.name"
          :to="link.path"
        >
          {{ link.name }}
        </router-link>
      </nav>
    </div>
    <nav
      class="absolute left-0 top-full z-10 w-full bg-background md:hidden"
      v-show="isOpen"
    >
      <router-link
        class="cursor-pointer text-gray-800 hover:text-white flex items-center gap-3 border-b border-gray-900 px-8 py-4 last:border-b-0"
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        @click="toggle()"
      >
        {{ link.name }}
      </router-link>
    </nav>
    <button class="md:hidden" @click="toggle()">
      <MenuIcon :isOpen="isOpen" />
    </button>
  </header>
</template>
