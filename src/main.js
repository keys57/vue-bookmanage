 import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import axios from "axios"
import http from './api/http'
 const app = createApp(App)



 //全局默认配置
 // axios.defaults.baseURL = 'http://localhost:8000'
 // axios.defaults.timeout = 5000

 //注册
 app.config.globalProperties.$http=http

 app.use(router).mount('#app')