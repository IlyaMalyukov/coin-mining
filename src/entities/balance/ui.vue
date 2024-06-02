<script setup lang="ts">
defineProps({
  balance: Number,
})
</script>

<template>
  <div class="balance">
    <span class="balance__total">{{balance}}</span>
    <img
      class="balance__icon"
      src="@/assets/icons/bitcoin.svg"
      alt="coin"
    />
  </div>
</template>

<style lang="scss" scoped>
.balance {
  display: flex;

  &__total {
    font-size: 64px;
    padding-right: 10px;
  }

  &__icon {
    width: 50px;
  }
}
</style>
