<script setup lang="ts">
import {ref} from "vue";
import { Balance } from '@/entities';

const totalBalance = ref<number>(0)
</script>

<template>
  <div class="page">
    <h1>Coin Mining</h1>
    <balance :balance="totalBalance"/>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
