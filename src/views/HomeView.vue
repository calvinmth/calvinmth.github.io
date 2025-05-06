<template>
  <div class="home">
    <h1>Welcome</h1>
    <p>Hi, I'm Calvin. I'm a passionate developer and music producer.</p>
    <p>Feel free to explore my projects and get to know more about me.</p>
    <div class="links">
      <Button label="About Me" class="p-button-outlined" @click="navigateTo('/about')" />
      <!-- <Button label="My Projects" class="p-button-outlined" @click="navigateTo('/projects')" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateTo(path: string) {
  router.push(path);
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.links {
  margin-top: 20px;
}

.btn {
  display: inline-block;
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}
</style>