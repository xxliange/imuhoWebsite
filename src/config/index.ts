import {isDev} from '@/utils/isDev';

export const apiHost = isDev ? 
    // 开发环境api请求头
    'https://x.muho.tv/api' : 
    // 生产环境api请求头
    'https://www.muho.tv/api';