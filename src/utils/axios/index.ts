import server from './request';

type RequestState = {
    /** 请求地址 */
    url:string;
    /** 请求方式 */
    method?:'get'|'post';
    // get请求参数
    params?:object;
    // post请求参数
    data?:object;
    // 请求头
    headers?:object;
}

export default class Request {
    static get(state:RequestState){
        return this.request('get', state);
    };
    static post(state:RequestState){
        return this.request('post', state);
    };
    static request(method:'get'|'post', state:RequestState){
        state['method'] = method;
        return server({
            ...state
        })
    };
}