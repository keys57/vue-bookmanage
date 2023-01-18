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
  },
  {
    path: '/tag', //访问路径
    name:'tag', //路由名称
    component: () => import('../views/tag.vue') //引用组件
  },
  {
    path: '/button', //访问路径
    name:'button', //路由名称
    component: () => import('../views/button.vue') //引用组件
  },
  {
    path: '/card', //访问路径
    name:'card', //路由名称
    component: () => import('../views/card.vue') //引用组件
  },
  {
    path: '/container', //访问路径
    name:'container', //路由名称
    component: () => import('../views/container.vue') //引用组件
  },
  {
    path: '/menu', //访问路径
    name:'menu', //路由名称
    component: () => import('../views/menu.vue') //引用组件
  },
  {
    path: '/form', //访问路径
    name:'form', //路由名称
    component: () => import('../views/form.vue') //引用组件
  },
  {
    path: '/upload', //访问路径
    name:'upload', //路由名称
    component: () => import('../views/upload.vue') //引用组件
  }
  ,
  {
    path: '/table', //访问路径
    name:'table', //路由名称
    component: () => import('../views/table.vue') //引用组件
  },
  {
    path: '/multi_selection', //访问路径
    name:'multi_selection', //路由名称
    component: () => import('../views/multi_selection.vue') //引用组件
  }

]

//创建路由实例
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//导航守卫
router.beforeEach((to, from,next)=>{
  console.log(to)
  console.log(from)
  if (to.path == '/login'){
    return next();//如果访问登陆页面，正常跳转，因为登陆页面不需要认证
  }
  const token='666' //模拟从本地session获取
  if (token){
    next(); //如果有token,正常跳转访问
  }else {
    return next('/login');
  }
})

export default router
