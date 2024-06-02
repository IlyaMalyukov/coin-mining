import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCoinsStore = defineStore('coins', () => {
  const totalBalance = ref<number>(0);
  const profitPerTap = ref<number>(1);

  const updateTotalBalance = (coinsAmount: number) => {
    totalBalance.value += coinsAmount;
  }

  const boostPower = () => {
    profitPerTap.value *= 10;
    console.log(profitPerTap)
  }

  return {
    totalBalance,
    profitPerTap,
    updateTotalBalance,
    boostPower,
  };
})