/**
 * 移动端 首页路由配置
 */
import { RouteConfig } from 'vue-router';
export default function(router:Array<RouteConfig>){
    router.push({
        path:'/hot',
        redirect:'/hot/list'
    })
    router.push({
        path:'/',
        name:'home',
        component:()=>import(/* webpackChunkName:"mobVies" */'@/components/mob/TabBar/TabBar.vue')
    });
    router.push({
        path:'/hot/list',
        name:'hot',
        component:()=>import(/* webpackChunkName:"mobVies" */'@/pages/mob/hot/list/list.vue')
    });
    router.push({
        path:'/user',
        name:'user',
        component:()=>import(/* webpackChunkName:"mobVies" */'@/pages/mob/user/user/user.vue')
    });
}