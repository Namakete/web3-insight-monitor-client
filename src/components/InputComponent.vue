<script setup lang="ts">
import SearchIcon from '@/components/icons/SearchIcon.vue';
import { ref } from 'vue';

const searchText = ref('');

const emits = defineEmits(['update:wallet']);

const handleWalletAddress = (event: Event) => {
  const target = event.target as HTMLInputElement;
  searchText.value = target.value;
};

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    if (!searchText.value) {
      emits('update:wallet', '0');
    } else {
      emits('update:wallet', searchText.value);
    }
    searchText.value = '';
  }
};

const clearSearch = () => {
  if (!searchText.value) {
    emits('update:wallet', '0');
  } else {
    emits('update:wallet', searchText.value);
  }
  searchText.value = '';
};
</script>

<template>
  <div class="relative">
    <input
      v-model="searchText"
      @input="handleWalletAddress"
      @keypress="handleKeyPress"
      type="search"
      :placeholder="$t('search') + '...'"
      class="w-full border-none bg-gray-900 px-4 py-6 focus:outline-none"
    />
    <button
      v-if="searchText"
      @click="clearSearch"
      class="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center bg-white text-gray-800 hover:bg-gray-800 hover:text-gray-900"
    >
      <SearchIcon class="h-4 w-4" />
    </button>
  </div>
</template>
