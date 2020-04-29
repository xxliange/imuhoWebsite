/**
 * axios 请求封装
 */
import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import { apiHost } from '../../config';

export interface RequestResponse {
    data:object;
    message:'SUCCESS' | '查询失败';
    stateCode:200 | 4001 | 4002
}

// 创建axios实例
const server:AxiosInstance = Axios.create({
    baseURL:apiHost,
    timeout:10000
});

server.interceptors.request.use( (config) : AxiosRequestConfig=>{
    config.method === 'post'
     ? config.data = qs.stringify({...config.data}) 
     : config.params = {...config.params};
    config.headers = {
        'user-id':0,
        'token':'web',
        'Content-Type':'application/x-www-form-urlencoded',
        ...config.headers,
    }
    return config;
})

server.interceptors.response.use( (response) : AxiosResponse =>{
    let resData : RequestResponse = response.data;
    const {message, stateCode} = resData;
    if(message === 'SUCCESS' && stateCode === 200){
        return response.data;
    }else if (stateCode === 4001){
        console.log('网络请求错误,请重试!');
    }else if (message === '查询失败'){
        console.log(message);
    }
    return response.data;
}, error=>{
    return Promise.reject(error);
})

export default server;