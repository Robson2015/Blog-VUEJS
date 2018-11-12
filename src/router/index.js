import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Home from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]

})
