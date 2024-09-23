<script setup lang="ts">
import { useCoinsStore } from '@/app/stores/coins';

const store = useCoinsStore();

const emits = defineEmits(['select-skin'])

const skins = [
  'bitcoin',
  'ethereum',
  'tether',
  'solana',
];
</script>

<template>
  <div class="list">
    <div
      :class="skin === store.activeSkin ? 'skin-card_active skin-card' : 'skin-card'"
      v-for="skin in skins"
      @click="emits('select-skin', skin)"
    >
      <img
        class="skin-card__image"
        :src="`/src/assets/images/${skin}.png`"
        :alt="skin"
      />
      <span class="skin-card__name">{{skin}}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-gap: 25px;
  width: 100%;
}

.skin-card {
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #1a1a1a;
  border-radius: 10px;
  padding: 5px;
  background: #292c31;

  &_active {
    background: #fd8f00;
  }

  &:hover {
    background: #172732;
  }

  &__image {
    width: 50px;
    margin-right: 15px;
  }
}
</style>