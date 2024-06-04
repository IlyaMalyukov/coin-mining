<script setup lang="ts">
import { watch } from 'vue';
import { useCoinsStore } from '@/app/stores/coins';
import boostIcon from '@/assets/icons/boost.svg';
import leaderboardIcon from '@/assets/icons/leaderboard.svg';
import skinsIcon from '@/assets/icons/skins.svg';

const store = useCoinsStore();

const toLeaderboard = () => {};

const toSkins = () => {};

const tools = [
  {
    name: 'boost',
    method: store.boostPower,
    icon: boostIcon,
  },
  {
    name: 'leaderboard',
    method: toLeaderboard,
    icon: leaderboardIcon,
  },
  {
    name: 'skins',
    method: toSkins,
    icon: skinsIcon,
  },
];

const stopBoostPower = () => {
  setTimeout(() => {
    store.stopBoostPower()
  }, 10000)
};

watch(() => store.isBoostPowerActive, () => {
  stopBoostPower()
});
</script>

<template>
  <div class="toolbar">
    <div
      v-for="tool in tools"
      :key="tool.name"
      class="toolbar__button"
      @click="tool.method"
    >
      <img
        class="toolbar__icon"
        :src="tool.icon"
        :alt="tool.name"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  margin-top: auto;
  margin-bottom: 0;
  border-radius: 15px;
  background-color: #292c31;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  padding: 10px;

  &__button {
    cursor: pointer;
    user-select: none;
    width: 50px;
    border-radius: 50%;
    padding: 15px;
    background-color: #0f222d;

    &:active {
      background-color: #172732;
    }
  }

  &__icon {
    width: 80%;
  }
}
</style>
