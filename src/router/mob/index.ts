import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes : Array<RouteConfig> = [
  {
    path:'/',
    name:'Home',
    component:()=>import(/* webpackChunkName:"mobVies" */'@/components/mob/TabBar/TabBar.vue'),
    children:[
      {
        path:'/',
        component:()=>import(/* webpackChunkName:"mobVies" */'@/pages/mob/home/home.vue'),
      },{
        path:'/hot/list',
        name:'幕后热点',
        component:()=>import(/* webpackChunkName:"mobVies" */'@/pages/mob/hot/list/list.vue'),
      },{
        path:'/user',
        name:'个人中心',
        component:()=>import(/* webpackChunkName:"mobVies" */'@/pages/mob/user/user/user.vue'),
      }
    ]
  },{
    path:'/hot',
    redirect:'/hot/list',
  },{
    path:'*',
    redirect:'/'
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router;