import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('../pages/login.vue')
  },
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/dashboard.vue') }, // 可用 dashboard.vue 或空页面占位
      { path: 'users', component: () => import('../pages/users.vue') },
      { path: 'roles', component: () => import('../pages/roles.vue') },
      { path: 'logs', component: () => import('../pages/logs.vue') },
      { path: 'settings', component: () => import('../pages/settings.vue') }
    ],
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 简单权限守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router
