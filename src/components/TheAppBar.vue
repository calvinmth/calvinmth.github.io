<template>
  <Menubar :model="items" />
</template>

<script setup>
import Menubar from 'primevue/menubar';
import { ref } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();

function goTo(routeName) {
  console.log('hehe');
  
  router.push(routeName)
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
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Components',
        icon: 'pi pi-bolt'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil'
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette'
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette'
          }
        ]
      }
    ]
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope'
  }
]);
</script>
