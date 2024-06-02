<script setup lang="ts">
import { useCoinsStore } from '@/app/stores/coins';

const store = useCoinsStore();

const emits = defineEmits(['earn'])
</script>

<template>
  <img
    class="coin"
    src="@/assets/icons/bitcoin.svg"
    alt="coin"
    @click="emits('earn', store.profitPerTap)"
  />
</template>

<style lang="scss" scoped>
.coin {
  width: 300px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:active {
    transform: rotate(5deg);
  }
}
</style>
