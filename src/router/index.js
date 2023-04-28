import Vue from 'vue'
import VueRouter from 'vue-router'
import informations from '../components/informations.vue'
import login from '../components/login.vue'
import profil from '../components/profil.vue'
import guestBook from '../components/guestBook.vue'
import planning from '../components/planning.vue'
import equipes from '../components/equipes.vue'
import joueur from '../components/joueur.vue'
import team from '../components/team.vue'
import accueil from '../components/acceuil.vue'
import map from '../components/map.vue'
import boutique from '../components/boutique.vue'
import boutiqueDetail from '../components/BoutiqueKayn.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/informations',
    name: 'informations',
    components:{ main : informations }
  },
  {
    path: '/login',
    name: 'login',
    components:{ main : login}
  },
  {
    path: '/profil/:id',
    name: 'profil',
    components:{ main : profil},
    props: {
      main: router => { return { userId: router.params.id }}
    },
  },
  {
    path: '/team/:id',
    name: 'team',
    components:{ main : team},
    props: {
      main: router => { return { idteam: router.params.id }}
    },
  },
  {
    path: '/',
    name: 'Acceuil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components:{ main : accueil}
  },
  {
    path: '/guestBook',
    name: 'guestBook',
    components:{ main : guestBook}
  },
  {
    path: '/planning',
    name: 'planning',
    components:{ main : planning}
  },
  {
    path: '/equipe',
    name: 'equipe',
    components:{ main : equipes}
  },
  {
    path: '/joueur',
    name: 'joueur',
    components:{ main : joueur}
  },
  {
    path: '/map',
    name: 'map',
    components:{ main : map}
  },
  {
    path: '/boutique',
    name: 'boutique',
    components:{ main : boutique},
  },
  {
    path: '/items/:id',
      name: 'boutiqueDetail',
      components:{
        main : boutiqueDetail
      },
      props: {
        main: router => { return { idItem: router.params.id }}
      },
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
