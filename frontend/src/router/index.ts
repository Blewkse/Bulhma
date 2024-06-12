import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClassementView from '@/views/ClassementView.vue'
import ConnexionView from '@/views/ConnexionView.vue'
import InscriptionView from '@/views/InscriptionView.vue'
import Match from '@/views/MatchView.vue'
import CaracteristiqueView from '@/views/CaracteristiqueView.vue'
import InfoPlayer from '@/views/InfoPlayer.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
      path: '/info',
      name: 'infoPlayeur',
      component: InfoPlayer
    },
    {
      path: '/caracteristique',
      name: 'caracteristique',
      component: CaracteristiqueView
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: InscriptionView
    }
  ]
})

export default router
