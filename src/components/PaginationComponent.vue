<script setup lang="ts">
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import { computed } from 'vue';

interface PaginationProps {
  transactionsLength: number;
  itemsPerPage: number;
  currentPage: number;
}

const props = defineProps<PaginationProps>();

const emit = defineEmits(['update:currentPage']);

const totalPages = computed(() =>
  Math.ceil(props.transactionsLength / props.itemsPerPage),
);

const nextPage = () => {
  if (props.currentPage < totalPages.value)
    emit('update:currentPage', props.currentPage + 1);
};

const prevPage = () => {
  if (props.currentPage > 1) emit('update:currentPage', props.currentPage - 1);
};

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) emit('update:currentPage', page);
};
</script>

<template>
  <div>
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      class="mx-2 p-1 bg-gray-900 disabled:opacity-50 rotate-180"
    >
      <ArrowIcon />
    </button>
    <span v-for="page in totalPages" :key="page">
      <button
        @click="goToPage(page)"
        :class="[
          'px-2 py-4 text-gray-800',
          { 'text-white': page === currentPage },
        ]"
      >
        {{ page }}
      </button>
    </span>
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="mx-2 p-1 bg-gray-900 disabled:opacity-50"
    >
      <ArrowIcon />
    </button>
  </div>
</template>
