<template>
  <div class="container">
    <h1>About Us</h1>
    <p>Learn more about our project.</p>
    <Card header="About Our Project" subheader="PrimeVue Example">
      <template #content>
        <p>
          This is a dummy about page created using PrimeVue components. PrimeVue is a rich set of UI components for
          Vue.js.
        </p>
      </template>
      <template #footer>
        <Button label="Learn More" icon="pi pi-info-circle" class="p-button-outlined" @click="router.push('/')">
        </Button>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Card from 'primevue/card';
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}
</style>