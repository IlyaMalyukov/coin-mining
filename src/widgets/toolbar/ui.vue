<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { ROUTES } from '@/shared';
import { useCoinsStore } from '@/app/stores/coins';
import boostIcon from '@/assets/icons/boost.svg';
import leaderboardIcon from '@/assets/icons/leaderboard.svg';
import skinsIcon from '@/assets/icons/skins.svg';

const store = useCoinsStore();
const router = useRouter();

const toLeaderboard = () => {};

const toSkins = () => {
  router.push(ROUTES.SKINS_PAGE.PATH)
};

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
    name: 'skins-page',
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
  border: 1px solid #1a1a1a;
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
