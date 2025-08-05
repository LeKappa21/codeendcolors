<script setup lang="ts">
import Navbar from './components/navbar.vue';
import HomePage from './pages/HomePage.vue';
import Footer from './components/footer.vue'
</script>

<template>
  <Navbar />
  <HomePage />
  <Footer />
</template>

<style scoped>
:deep(body), :deep(#app) {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #f5f5f5
}
</style>
