import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
