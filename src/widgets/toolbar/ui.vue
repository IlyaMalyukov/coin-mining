<script setup lang="ts">
import { useCoinsStore } from '@/app/stores/coins';

const store = useCoinsStore();
</script>

<template>
  <div class="toolbar">
    <div
      class="toolbar__button"
      @click="store.boostPower()"
    >
      Boost Power
    </div>
    <div class="toolbar__button">
      Leaderboard
    </div>
    <div class="toolbar__button">
      Skins
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  position: absolute;
  bottom: 0;
  border-radius: 15px;
  background-color: #535bf2;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  padding: 10px;

  &__button {
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    background-color: #213547;
    user-select: none;

    &:active {
      background-color: #172732;
    }
  }
}
</style>
