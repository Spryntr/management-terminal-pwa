import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: ()=> import('../views/login.vue')
  },
  {
    path: '/login/manager',
    name:'Login Manager',
    component: ()=> import('../views/login_manager.vue')
  },
  {
    path: '/login/cashier',
    name:'Login Cashier',
    component: ()=> import('../views/login_cashier.vue')
  },
  {
    path: '/signup/cashier',
    name: 'Signup Cashier',
    component: ()=> import('../views/signup_cashier.vue')
  },
  {
    path:'/inStore',
    name: 'In Store',
    component: ()=>{
      import('../views/inStore.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
