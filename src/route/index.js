import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        component: () => import('../components/Home.vue')
    },
    {
        path: '/route/:name',
        component: () => import('../components/Route.vue'),
        beforeEnter: (to, from) => {
            console.log('beforeEnter')
          }
    },
    {
        path: '/store',
        component: () => import('../components/Store.vue')
    },
    {
        path: '/ant',
        component: () => import('../components/Ant.vue')
    },
    {
        path: '/axios',
        component: () => import('../components/Axios.vue') 
    },
  ],
})


export default router  