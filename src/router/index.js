import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../components/Home.vue")
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("../components/Register.vue")
  },
  {
    path: '/showLists',
    name: 'ShowLists',
    component: () => import("../components/ShowLists.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
