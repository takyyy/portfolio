import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Works from '@/components/Works'
import Career from '@/components/Career'
import Contact from '@/components/Contact'

Vue.use(Router)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/career',
      name: 'career',
      component: Career
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
