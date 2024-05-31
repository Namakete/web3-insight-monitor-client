<script setup lang="ts">
interface IconState {
  isStatus: boolean;
}

const props = defineProps<IconState>();
</script>

<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.isStatus"
  >
    <circle cx="12" cy="12" r="6" stroke="green" stroke-width="2" fill="none" />
    <circle class="wave" cx="12" cy="12" r="6" stroke="green" fill="none" />
    <circle class="wave" cx="12" cy="12" r="6" stroke="green" fill="none" />
    <circle class="wave" cx="12" cy="12" r="6" stroke="green" fill="none" />
  </svg>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-else
  >
    <circle cx="12" cy="12" r="6" stroke="red" stroke-width="2" fill="none" />
    <circle class="wave" cx="12" cy="12" r="6" stroke="red" fill="none" />
    <circle class="wave" cx="12" cy="12" r="6" stroke="red" fill="none" />
    <circle class="wave" cx="12" cy="12" r="6" stroke="red" fill="none" />
  </svg>
</template>

<style scoped>
@keyframes wave {
  0% {
    r: 6;
    opacity: 1;
  }
  100% {
    r: 10;
    opacity: 0;
  }
}

.wave {
  animation: wave 1.5s infinite; /* Уменьшенная продолжительность анимации для лучшего эффекта */
}

.wave:nth-child(2) {
  animation-delay: 0.3s;
}

.wave:nth-child(3) {
  animation-delay: 0.6s;
}

.wave:nth-child(4) {
  animation-delay: 0.9s;
}
</style>
