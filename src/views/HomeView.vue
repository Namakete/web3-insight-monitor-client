<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent
    :links="[
      { name: 'Home', path: '/' },
      { name: 'Home', path: '/' },
      { name: 'Home', path: '/' },
      { name: 'Home', path: '/' }
    ]"
  />

  <main class="mt-4 px-8">
    <div class="mx-auto">
      <input type="text" placeholder="Search..." class="px-4 py-2 border rounded w-full" />
    </div>
  </main>
</template>
