<script setup lang="ts">
import { useServerStatusCheckStore } from '@/stores/ServerStatusStore';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted } from 'vue';

import ServerStatusIcon from './icons/ServerStatusIcon.vue';

const serverStatusStore = useServerStatusCheckStore();
const { serverStatus } = storeToRefs(serverStatusStore);

const checkServerInterval = () => {
  serverStatusStore.checkServerStatus();
};

onMounted(() => {
  serverStatusStore.checkServerStatus();
  const interval = setInterval(checkServerInterval, 5000);
  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <div class="mt-4">
    <ServerStatusIcon :isStatus="serverStatus" />
  </div>
</template>
