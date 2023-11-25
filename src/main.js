import 'vue-loading-overlay/dist/css/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
