<script setup lang="ts">
import HomeButtonComponent from '@/components/HomeButtonComponent.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<template>
  <DefaultLayout class="min-h-screen flex flex-col">
    <div
      class="flex flex-1 flex-col justify-center items-center text-center px-16"
    >
      <h1 class="text-8xl my-8">404</h1>
      <hr class="border-t border-gray-900 w-full" />
      <p class="text-xs text-gray-800 my-8">
        The page you are looking for does not exist
      </p>
      <HomeButtonComponent />
    </div>
  </DefaultLayout>
</template>
