import { createRouter, createWebHistory } from 'vue-router'
import HeaderComp from '../components/MainComp.vue'
import UsuarioScreen from '../screens/UsuarioScreen.vue'
import InscricaoScreen from '../screens/InscricaoScreen.vue'
import EquipeScreen from '../screens/EquipeScreen.vue'
import AvaliacaoScreen from '../screens/AvaliacaoScreen.vue'
import RegistroScreen from '../screens/RegistroScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeaderComp
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: UsuarioScreen
    },
    {
      path: '/inscricao',
      name: 'inscricao',
      component: InscricaoScreen
    },
    {
      path: '/equipe',
      name: 'eauipe',
      component: EquipeScreen
    },
    {
        path: '/avaliacao',
        name: 'avaliacao',
        component: AvaliacaoScreen
      },
      {
        path: '/registro',
        name: 'registro',
        component: RegistroScreen
      },
  ]
})

export default router
