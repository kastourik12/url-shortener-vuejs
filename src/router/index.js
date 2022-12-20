import { createRouter, createWebHashHistory } from 'vue-router'
import {AuthStore} from "@/store";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      authenticated: true
    }
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue'),
    meta: {
      authenticated: false
    }
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue'),
    meta: {
      authenticated: false
    }
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to,from,next) =>{
  const store = AuthStore()
  if('authenticated' in to.meta &&
      to.meta.authenticated &&
      !store.user
  ){
    next('/signIn')
  }else if(
      'authenticated' in to.meta &&
      !to.meta.authenticated &&
      store.user)
    next('/about')
  else next()
})
export default router
