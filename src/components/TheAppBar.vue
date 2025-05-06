<template>
  <Menubar :model="items">
    <template #start>
      <img src="/src/assets/calvinmth.jpg" alt="Logo" id="logo" @click="goTo('/')" />
    </template>
    <template #end>
      <button @click="toggleTheme" id="theme-toggle">
        {{ isDarkTheme ? '🌙' : '☀️' }}
      </button>
    </template>
  </Menubar>
</template>

<script setup>
import Menubar from 'primevue/menubar';
import { ref } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();

function goTo(routeName) {
  router.push(routeName);
}

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => goTo('/')
  },
  {
    label: 'About',
    icon: 'pi pi-star',
    command: () => goTo('about')
  },
  {
    label: 'Snake Game',
    icon: 'pi pi-th-large',
    command: () => goTo('snake')
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    command: () => goTo('contact')
  }
]);

const isDarkTheme = ref(false);
function toggleTheme() {
  isDarkTheme.value = !isDarkTheme.value;
  localStorage.setItem('isDarkTheme', isDarkTheme)
  // document.body.classList.toggle('dark-theme', isDarkTheme.value);
}
</script>

<style scoped>
#logo {
  height: 40px;
  margin-right: 10px;
  border-radius: 5%;
  cursor: pointer;
}

#theme-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
