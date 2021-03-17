import { createRouter, createWebHistory } from 'vue-router'
const Login = () => import('./containers/Login/index.vue')
const Container = () => import('./containers/index.vue')
const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Container }
]
const router = new createRouter({
  history: createWebHistory(),
  routes
})
const authorized = false
router.beforeEach(async (to, from) => {
  console.log(to);
  console.log(from);
  // 路由守卫，拦截权限，登录信息失效跳转登录
/*  if (!authorized) {
    return '/login'
  }*/
  return true

})
export default router
