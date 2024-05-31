<script setup lang="ts">
import InputComponent from '@/components/InputComponent.vue';
import NoTransactionsFoundComponent from '@/components/NoTransactionsFoundComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import ServerStatusComponent from '@/components/ServerStatusComponent.vue';
import TransactionTableSkeletonComponent from '@/components/TableSkeletonComponent.vue';
import TransactionTableComponent from '@/components/TransactionTableComponent.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useTransactionStore } from '@/stores/TransactionsStore';
import { storeToRefs } from 'pinia';

const transactionStore = useTransactionStore();
const {
  transactions,
  itemsPerPage,
  currentPage,
  paginatedTransactions,
  loading,
} = storeToRefs(transactionStore);

transactionStore.fetchTransactions();

const updateCurrentPage = (page: number) => {
  transactionStore.updateCurrentPage(page);
};

const updateWallet = async (newWallet: string) => {
  if (newWallet === '0') {
    transactionStore.transactions = [];
  } else {
    await transactionStore.updateWallet(newWallet);
  }
};
</script>

<template>
  <DefaultLayout class="min-h-screen">
    <main class="mt-8 px-8">
      <InputComponent @update:wallet="updateWallet" />

      <div class="flex items-center space-x-3 mt-10">
        <ServerStatusComponent />
        <h1>Live Transactions</h1>
      </div>

      <div v-if="loading">
        <TransactionTableSkeletonComponent />
      </div>

      <div v-else>
        <div v-if="transactions.length">
          <TransactionTableComponent :transactions="paginatedTransactions" />
          <PaginationComponent
            class="flex justify-end mt-6"
            :transactionsLength="transactions.length"
            :itemsPerPage="itemsPerPage"
            :currentPage="currentPage"
            @update:currentPage="updateCurrentPage"
          />
        </div>
        <NoTransactionsFoundComponent v-else />
      </div>
    </main>
  </DefaultLayout>
</template>
