import axios from 'axios';
import { defineStore } from 'pinia';

export const useTransactionStore = defineStore('transaction', {
  state: () => ({
    transactions: [] as any[],
    wallet: '',
    itemsPerPage: 15,
    currentPage: 1,
    loading: false,
  }),
  getters: {
    paginatedTransactions: (state) => {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;

      return state.transactions.slice(start, end);
    },
  },
  actions: {
    async fetchTransactions() {
      this.loading = true;
      try {
        const apiUrl = import.meta.env.VITE_API_TRANSACTIONS_ADDRESS_ALL;
        const response = await axios.get(`${apiUrl}${this.wallet}`);
        const data = response.data;

        this.transactions = data.flatMap((item: any) => item.transactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        this.loading = false;
      }
    },
    updateCurrentPage(page: number) {
      this.currentPage = page;
    },
    async updateWallet(wallet: string) {
      this.wallet = wallet;
      await this.fetchTransactions();
    },
  },
});
