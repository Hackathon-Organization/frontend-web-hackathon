import { createRouter, createWebHistory } from 'vue-router';
import HeaderComp from '../components/MainComp.vue';
import UsuarioScreen from '../screens/UsuarioScreen.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeaderComp,
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: UsuarioScreen,
    },

  ],
});

export default router;