import { createPinia } from 'pinia'; // Import Pinia
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router

const app = createApp(App);

app.use(router); // Use the router
app.use(createPinia()); // Use Pinia

app.mount('#app');