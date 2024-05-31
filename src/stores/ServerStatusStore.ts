import axios from 'axios';
import { defineStore } from 'pinia';

export const useServerStatusCheckStore = defineStore('serverStatus', {
  state: () => ({
    serverStatus: false,
    error: null,
  }),
  actions: {
    async checkServerStatus() {
      try {
        const apiUrl = 'http://localhost:3000/status';
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          this.serverStatus = true;
        } else {
          this.serverStatus = false;
        }
      } catch (error) {
        this.serverStatus = false;
        console.error('Error checking server status:', error);
      }
    },
  },
});
