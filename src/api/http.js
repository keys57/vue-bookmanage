import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:8000',
    timeout:5000
})

//请求拦截器
instance.interceptors.request.use(config=>{
    // config.headers['testhaeders'] = '123456'
    return config
},error => {
    //处理请求错误
    console.log(error)
    return Promise.reject(error)
})

//响应拦截器
instance.interceptors.response.use(response=>{
    if(response.status !=200){
        alert("数据请求失败")
    }
    console.log(response.status)
    return response
},error => {
    alert('请求服务器端接口错误')
    console.log(error);
    return Promise.reject(error)
})
export default instance