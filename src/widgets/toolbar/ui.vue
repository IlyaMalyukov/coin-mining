<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { useCoinsStore } from '@/app/stores/coins';
import { ROUTES, toolbarImage } from '@/shared';
import type { Tool } from './types.ts';

const store = useCoinsStore();
const router = useRouter();

const toLeaderboard = () => {
  router.push(ROUTES.LEADERBOARD_PAGE.PATH);
};

const toSkins = () => {
  router.push(ROUTES.SKINS_PAGE.PATH);
};

const boostPower = () => {
  if (store.isBoostPowerActive) {
    return;
  }

  store.boostPower();
};

const tools = [
  {
    name: 'boost',
    method: boostPower,
  },
  {
    name: 'leaderboard',
    method: toLeaderboard,
  },
  {
    name: 'skins',
    method: toSkins,
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
        :src="toolbarImage[<Tool>tool.name]"
        :alt="tool.name"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  border-radius: 15px;
  background-color: #292c31;
  border: 1px solid #1a1a1a;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  padding: 10px;
  width: 80%;
  max-width: 300px;
  margin: auto auto 0;

  &__button {
    cursor: pointer;
    user-select: none;
    border-radius: 50%;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(1);
    }
  }

  &__icon {
    width: 80%;
  }
}
</style>
