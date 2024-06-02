<script setup lang="ts">
import { ref } from 'vue/dist/vue';

const emits = defineEmits(['earn'])

const profitPerTap = ref<number>(1)
</script>

<template>
  <img
    class="coin"
    src="@/assets/icons/bitcoin.svg"
    alt="coin"
    @click="emits('earn', profitPerTap)"
  />
</template>
