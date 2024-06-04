import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCoinsStore = defineStore('coins', () => {
  const totalBalance = ref<number>(0);
  const profitPerTap = ref<number>(1);

  const isBoostPowerActive = ref<boolean>(false);

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

  return {
    totalBalance,
    profitPerTap,
    isBoostPowerActive,
    updateTotalBalance,
    boostPower,
    stopBoostPower,
  };
})