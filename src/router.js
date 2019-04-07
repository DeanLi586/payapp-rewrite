import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

// Login Views
import ParentSignIn from './views/login/ParentSignIn'
import SchoolSignIn from './views/login/SchoolSignIn'

// Sign up views
import ParentSignUp from './views/register/ParentSignUp'
import SchoolSignUp from './views/register/SchoolSignUp'

// Dashboard views
import Dashboard from '@/components/Dashboard'
import Child from './views/Child'



Vue.use(Router)

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
      path: '/sign-in-parent',
      name: 'Parent Sign In',
      component: ParentSignIn
    },
    {
      path: '/sign-in-school',
      name: 'School Sign In',
      component: SchoolSignIn 
    },
    {
      path: '/sign-up-parent',
      name: 'Parent Sign Up',
      component: ParentSignUp
    },
    {
      path: '/sign-up-school',
      name: 'School Sign Up',
      component: SchoolSignUp
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          name: 'Child',
          path: '/child',
          component: Child
        }
      ]
    }
  ]
})
