import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import axios from "axios"
import http from './api/http'
//导入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//导入element图标
import * as ELIcons from '@element-plus/icons-vue'
 const app = createApp(App)
app.use(ElementPlus)
 //全局默认配置
 // axios.defaults.baseURL = 'http://localhost:8000'
 // axios.defaults.timeout = 5000
//将element-plus引用到app实例中
for (let iconName in ELIcons){
    app.component(iconName, ELIcons[iconName])
}
 //注册
 app.config.globalProperties.$http=http

 app.use(router).mount('#app')