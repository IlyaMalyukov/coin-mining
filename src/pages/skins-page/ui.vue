<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCoinsStore } from '@/app/stores/coins';
import { Skins } from '@/entities';
import type { Skin } from '@/app/stores/coins/types.ts';


const router = useRouter();
const store = useCoinsStore();

const selectSkin = (skin: Skin) => {
  store.setSkin(skin)
  router.push('/');
};
</script>

<template>
  <div class="page">
    <h1>SKINS</h1>
    <skins @select-skin="selectSkin"/>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  margin-bottom: 40px;
}
</style>
