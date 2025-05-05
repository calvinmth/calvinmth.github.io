<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <p>
      Welcome to my awesome website!
    </p>
    <p>Count: {{ counter.count }}</p>
    <p>Double Count: {{ counter.doubleCount }}</p>
    <button @click="counter.increment()">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useCounterStore } from '../stores/counter'; // Import the store

defineProps<{
  msg: string;
}>();

const counter = useCounterStore(); // Get the store instance
</script>

<style scoped>
h1 {
  font-size: 2.5em;
  color: #42b983; /* Vue Green */
}
p {
  font-size: 1.2em;
}
</style>