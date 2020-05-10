import Vue from 'vue';
import Router from 'vue-router';

import Accueil from './pages/Accueil.vue';
import Connection from './pages/Connection.vue';
import Information from './pages/Information.vue';
import Menu from './pages/Menu.vue';
import Panier from './pages/Panier.vue';
import Creation from './pages/Creation.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', 
      name: 'accueil',
      component: Accueil,
    },
      
    { path: '/Connection', 
      name: 'connection',
      component: Connection,
    },
      
    { path: '/Information', 
      name: 'information',
      component: Information,
    },
      
    { path: '/Menu', 
      name: 'menu',
      component: Menu,
    },
      
      { path: '/Panier', 
      name: 'panier',
      component: Panier,
    },
      
      { path: '/Creation', 
      name: 'creation',
      component: Creation,
    },
         
  ],
});