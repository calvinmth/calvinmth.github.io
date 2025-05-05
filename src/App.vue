<template>
  <TheAppBar />
  <router-view />
</template>

<script setup lang="ts">
import TheAppBar from '@/components/TheAppBar.vue'
</script>

<style scoped>
nav {
  padding: 20px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>