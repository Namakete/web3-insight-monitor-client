<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { useLinksStore } from '@/stores/HeaderLinksStore';
import { storeToRefs } from 'pinia';

const linksStore = useLinksStore();

const { links } = storeToRefs(linksStore);
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent :links="links" />
    <div class="flex-grow">
      <slot />
    </div>
    <FooterComponent />
  </div>
</template>
