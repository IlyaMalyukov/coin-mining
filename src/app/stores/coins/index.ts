import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCoinsStore = defineStore('coins', () => {
  const totalBalance = ref<number>(0);
  const profitPerTap = ref<number>(1);

  const updateTotalBalance = (coinsAmount: number) => {
    totalBalance.value += coinsAmount;
  }

  return {
    totalBalance,
    profitPerTap,
    updateTotalBalance,
  };
})