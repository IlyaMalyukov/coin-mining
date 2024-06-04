import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Skin } from './types.ts';

export const useCoinsStore = defineStore('coins', () => {
  const totalBalance = ref<number>(0);
  const profitPerTap = ref<number>(1);

  const isBoostPowerActive = ref<boolean>(false);

  const activeSkin = ref<Skin>('bitcoin');

  const updateTotalBalance = (coinsAmount: number) => {
    totalBalance.value += coinsAmount;
  }

  const boostPower = () => {
    profitPerTap.value *= 10;
    isBoostPowerActive.value = true;
  }

  const stopBoostPower = () => {
    profitPerTap.value = 1;
    isBoostPowerActive.value = false;
  }

  const setSkin = (skin: Skin) => {
    activeSkin.value = skin;
  };

  return {
    totalBalance,
    updateTotalBalance,
    profitPerTap,
    isBoostPowerActive,
    boostPower,
    stopBoostPower,
    activeSkin,
    setSkin,
  };
})