import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

// Login View
import ParentSignIn from './views/login/ParentSignIn'

// Sign up views
import ParentSignUp from './views/register/ParentSignUp'
import SchoolSignUp from './views/register/SchoolSignUp'

// Dashboard views
import Dashboard from '@/components/Dashboard'
import Child from './views/Child'
import DashboardView from './views/DashboardView'


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
      path: '/login',
      name: 'Login',
      component: ParentSignIn
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
          name: 'dashboard',
          path:'/dashboard',
          component: DashboardView
        },
        {
          name: 'child',
          path: '/child',
          component: Child,
          // redirect: 'view-children'
        },
        // {
        //   name: 'View Children',
        //   path: '/view-children',
        //   component: Dashboard
        // }
      ]
    }
  ]
})
