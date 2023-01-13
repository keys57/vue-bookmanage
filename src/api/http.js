import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:8000',
    timeout:5000
})

//请求拦截器
instance.interceptors.request.use(config=>{
    config.headers['testhaeders'] = '123456'
})

//响应拦截器
instance.interceptors.response.use(response=>{
    response.headers['testhaeders'] = '123456'
})
export default instance