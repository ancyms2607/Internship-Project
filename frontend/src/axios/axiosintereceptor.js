import axios from "axios";
import { Promise } from "mongoose";

const axiosInstance=axios.create({
    baseURL:'http://localhost:3001'
})

// Request Interceptor
axiosInstance.interceptors.request.use((config)=>{
const accessToken=sessionStorage.getItem('userToken');
if(accessToken){
    if(config) config.headers.token=accessToken;
}
return config;
},
(error)=>{
    return Promise.reject(error);
})

export default axiosInstance;