import { createRouter, createWebHistory } from 'vue-router';
import HeaderComp from '../components/HeaderComp.vue';
import UsuarioScreen from '../screens/UsuarioScreen.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/header',
      name: 'header',
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