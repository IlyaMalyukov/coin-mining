<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getPlayersAgent } from './api.ts';
import { Loader, HeadTitle } from '@/shared';
import type { Users } from '@/entities';
import { UserList } from '@/entities';

const isLoading = ref<boolean>(true);

const agent = getPlayersAgent();

const players = ref<Users | undefined>([]);

onMounted(async () => {
  players.value = await agent.getBestPlayers();
  isLoading.value = false;
});
</script>

<template>
  <div class="page">
    <head-title
      title="TOP 10 PLAYERS"
      is-back-button-visible
    />
    <loader v-if="isLoading"/>
    <user-list v-else :users="players"/>
    <br>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-bottom: 40px;
}
</style>
