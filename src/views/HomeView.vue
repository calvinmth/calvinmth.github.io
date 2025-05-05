<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <p>This is the home view.</p>
  </div>
  <HelloWorld></HelloWorld>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style>