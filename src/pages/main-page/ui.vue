<script setup lang="ts">
import { useCoinsStore } from '@/app/stores/coins';
import { Balance } from '@/entities';
import { EarnCoin } from '@/features';
import { Toolbar } from '@/widgets';

const store = useCoinsStore();

const earnCoins = (coinsAmount: number) => {
  store.updateTotalBalance(coinsAmount)
};
</script>

<template>
  <div class="page">
    <h1 class="page__title">COIN MINING</h1>
    <balance :balance="store.totalBalance"/>
    <earn-coin @earn="earnCoins"/>
    <toolbar/>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  margin-bottom: 40px;

  &__title {
    font-size: 10vw;
  }
}
</style>
