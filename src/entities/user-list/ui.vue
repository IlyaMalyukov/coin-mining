<script setup lang="ts">
import { PropType } from 'vue';
import type { Users } from './types.ts';

defineProps({
  users: Array as PropType<Users>,
  loading: Boolean,
})
</script>

<template>
  <div class="list">
    <div
      class="user-card"
      v-for="(user, index) in users"
      :key="user.id"
    >
      <span class="user-card__position">
        {{index + 1}}.
      </span>
      <span class="user-card__name">
        {{user.name}}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-gap: 25px;
  width: 50%;
}

.user-card {
  display: flex;
  align-items: center;
  border: 1px solid #1a1a1a;
  border-radius: 10px;
  padding: 5px;
  background: #292c31;
  font-size: 36px;

  &__position {
    padding-right: 10px;
  }
}
</style>
