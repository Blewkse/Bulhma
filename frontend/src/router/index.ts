import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClassementView from '@/views/ClassementView.vue'
import ConnexionView from '@/views/Connexion.vue'
import InscriptionView from '@/views/Inscription.vue'
import Match from "@/views/Match.vue";
import Caracteristique from "@/views/Caracteristique.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/classement',
      name: 'classement',
      component: ClassementView
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: ConnexionView
    },
    {
      path: '/match',
      name: 'match',
      component: Match
    },
    {
      path: '/caracteristique',
      name: 'caracteristique',
      component: Caracteristique
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: InscriptionView
    }
  ]
})

export default router
