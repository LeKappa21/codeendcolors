<script setup lang="ts">
import Navbar from './components/navbar.vue';
import HomePage from './components/HomePage.vue';
</script>

<template>
  <Navbar />
  <HomePage />
</template>

<style scoped>
:deep(body), :deep(#app) {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
