import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',    
    component: () => import(/* webpackChunkName: "layout" */ '../views/layout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
        meta: {
          title: 'Монитор'
        }
      },
      {
        path: 'about',
        component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
        name: 'About',
        meta: {
          title: 'О программе'
        }
      },
      {
        path: 'new',
        component: () => import(/* webpackChunkName: "New" */ '../views/AddTransact.vue'),
        name: 'New',
        meta: {
          title: 'Новый расход'
        }
      }      
    ],
  }
]

const router = new VueRouter({
  routes
})


router.afterEach(to => {
  Vue.nextTick( () => {
    document.title = to.meta.title ? to.meta.title : 'Куджима';
  });
})

export default router
