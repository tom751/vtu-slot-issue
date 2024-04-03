<script setup lang="ts">
import { ref } from 'vue'

const count = ref(1)
</script>

<template>
  <div class="container">
    <p>slot content below</p>
    <slot :count="count"></slot>
  </div>
</template>

<style scoped>
.container {
  padding: 30px;
  border: 1px solid green;
  border-radius: 5px;
}
</style>
