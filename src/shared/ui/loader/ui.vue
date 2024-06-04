<template>
  <img
    class="icon"
    src="@/assets/icons/spinner.svg"
    alt="loading"
  />
</template>

<style scoped>
.icon {
  width: 50px;
  margin: 30px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg)}
  to { transform: rotate(360deg)}
}
</style>
