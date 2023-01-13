import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserPage from "@/views/UserPage.vue"; //导入组件

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/user', //访问路径
    name:'user', //路由名称
    component: UserPage //引用组件
  }
]

//创建路由实例
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
