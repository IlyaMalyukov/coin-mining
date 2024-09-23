<script setup lang="ts">
import { useCoinsStore } from '@/app/stores/coins';

defineProps({
  balance: Number,
});

const store = useCoinsStore();
</script>

<template>
  <div class="balance">
    <span class="balance__total">{{balance}}</span>
    <img
      class="balance__coin"
      :src="`/src/assets/images/${store.activeSkin}.png`"
      alt="coin"
    />
  </div>
</template>

<style lang="scss" scoped>
.balance {
  display: flex;
  align-items: center;

  &__total {
    font-size: 64px;
    font-weight: bold;
    padding-right: 10px;
    -webkit-text-stroke: 2px #1a1a1a;
  }

  &__coin {
    width: 50px;
    height: 50px;
  }
}
</style>
