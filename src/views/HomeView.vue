<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import HeaderComponent from '@/components/HeaderComponent.vue'
import InputComponent from '@/components/InputComponent.vue'

const { t } = useI18n()

const links = [
  { name: 'Home', path: '/' },
  { name: t('title'), path: '/main' },
  { name: 'Home', path: '/' },
  { name: 'Home', path: '/' }
]
</script>

<template>
  <HeaderComponent :links="links" />

  <main class="mt-4 px-8">
    <div class="mx-auto">
      <InputComponent />
    </div>
  </main>
</template>
