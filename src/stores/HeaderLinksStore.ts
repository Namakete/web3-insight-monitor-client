// src/stores/useLinksStore.js
import { defineStore } from 'pinia';

export const useLinksStore = defineStore('links', {
  state: () => ({
    links: [{ name: 'TRANSACTIONS', path: '/' }],
  }),
  actions: {
    addLink(link: { name: string; path: string }) {
      this.links.push(link);
    },
  },
});
