<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCoinsStore } from '@/app/stores/coins';
import type { Skin } from '@/app/stores/coins/types.ts';
import { Skins } from '@/entities';
import { HeadTitle } from '@/shared';

const router = useRouter();
const store = useCoinsStore();

const selectSkin = (skin: Skin) => {
  store.setSkin(skin)
  router.push('/');
};
</script>

<template>
  <div class="page">
    <head-title
      title="SKINS"
      is-back-button-visible
    />
    <skins @select-skin="selectSkin"/>
  </div>
</template>
