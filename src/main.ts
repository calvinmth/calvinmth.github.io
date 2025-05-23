// Vue setup
import { createApp } from 'vue';
import App from './App.vue';

// general imports
import '@/styles/typography.scss';

// Pinia setup
import { createPinia } from 'pinia';

// Router setup
import router from './router'; // Import the router

// PriveVue setup
import Aura from '@primeuix/themes/aura'; // lara, material, nora
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
// import 'primevue/resources/themes/saga-blue/theme.css';
// import 'primevue/resources/primevue.min.css';

// app declaration
const app = createApp(App);

// use plugins
app.use(router);
app.use(createPinia());
app.use(PrimeVue,
  {
    theme: {
      preset: Aura
    }
  }
)

app.mount('#app');