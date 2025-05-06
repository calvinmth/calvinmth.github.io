<template>
  <div class="container">
    <h1>Contact Us</h1>
    <p>If you have any questions, feel free to reach out to us.</p>
    <Card header="Get in Touch" subheader="We'd love to hear from you!">
      <template #content>
        <p>
          Email: {{email}}
        </p>
      </template>
      <template #footer>
        <a :href="`mailto:${email}`">
          <Button label="Send Message" icon="pi pi-envelope" class="p-button-outlined"></Button>
        </a>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
// PrimeVue components
import Button from 'primevue/button';
import Card from 'primevue/card';

const email = 'email@example.com'
</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}
</style>