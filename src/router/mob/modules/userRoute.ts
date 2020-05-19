/**
 * 移动端 用户操作列表路由
 */

 import {RouteConfig} from 'vue-router';

 export default function(router:Array<RouteConfig>){
     router.push({
         path:'/user/login',
         name:'userLogin',
         component:()=>import(/* webpackChunkName:"mobVies" */ '@/pages/mob/user/login/user/userLogin.vue')
     })
 }