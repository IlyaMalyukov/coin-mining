<script setup lang="ts">
import {ref} from "vue";
import { Balance } from '@/entities';
import { EarnCoin } from '@/features';

const totalBalance = ref<number>(0);

const earnCoins = (coinsAmount: number) => totalBalance.value += coinsAmount;
</script>

<template>
  <div class="page">
    <h1>Coin Mining</h1>
    <balance :balance="totalBalance"/>
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
