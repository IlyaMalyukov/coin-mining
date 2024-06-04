<script setup lang="ts">
import { BackButton } from '@/shared';

defineProps({
  title: String,
  isBackButtonVisible: Boolean,
});
</script>

<template>
  <div class="header">
    <back-button class="header__button"/>
    <h1 class="header__title">TOP 10 PLAYERS</h1>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 25px;

  &__title {
    margin: 0 auto;
  }

  &__button {
    justify-self: left;
    margin-right: 25px;
  }
}
</style>
