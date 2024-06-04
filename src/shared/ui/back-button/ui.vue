<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div
    class="button"
    @click="router.push('/')"
  >
    BACK TO TAP
  </div>
</template>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #1a1a1a;
  padding: 10px;
  background: #fd8f00;

  &:hover {
    background: #ff6a00;
  }

  &:active {
    background: #ff812e;
  }
}
</style>
