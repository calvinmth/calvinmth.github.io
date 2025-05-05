<template>
  <!-- <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </header> -->

  <TheAppBar />

  <router-view />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
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