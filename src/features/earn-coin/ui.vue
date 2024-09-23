<script setup lang="ts">
import { useCoinsStore } from '@/app/stores/coins';

const store = useCoinsStore();

const emits = defineEmits(['earn'])
</script>

<template>
  <div class="wrapper">
    <div
      class="coin-wrapper"
      @click="emits('earn', store.profitPerTap)">
      <img
        class="coin"
        :src="`/src/assets/images/${store.activeSkin}.png`"
        alt="coin"
      />
    </div>
    <img
      :class="store.isBoostPowerActive ? 'lightning lightning_active' : 'lightning'"
      src="/src/assets/images/lightning.png"
      alt="lightning"
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

.coin {
  position: relative;
  z-index: 1;
  width: 60vw;
  max-width: 300px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.coin-wrapper {
  &:active {
    transform: rotate(5deg);
  }
}

.lightning {
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
  z-index: -1;
  top: -50px;
  left: -50px;
  width: 130%;

  &_active {
    opacity: 1;
  }
}

img {
  pointer-events: none;
}
</style>
