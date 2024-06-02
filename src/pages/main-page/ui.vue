<script setup lang="ts">
import { useCoinsStore } from '@/app/stores/coins';
import { Balance } from '@/entities';
import { EarnCoin } from '@/features';

const store = useCoinsStore();

const earnCoins = (coinsAmount: number) => {
  store.updateTotalBalance(coinsAmount)
};
</script>

<template>
  <div class="page">
    <h1>Coin Mining</h1>
    <balance :balance="store.totalBalance"/>
    <br>
    <earn-coin @earn="earnCoins" />
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
