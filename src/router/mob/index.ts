import Vue from 'vue';
import VueRouter, { RouteConfig, Route } from 'vue-router';
import homePageRoute from '@/router/mob/modules/homePage';
import userRoute from './modules/userRoute';

Vue.use(VueRouter);

let routes:Array<RouteConfig> = [];
let rootRouter = {
  path:"/",
  component:()=>import(/* webpackChunkName:"mobVies" */'@/components/mob/TabBar/TabBar.vue'),
  children:[],
}

homePageRoute(rootRouter.children);
userRoute(rootRouter.children);

const router = new VueRouter({
  routes:routes.concat([rootRouter]),
  mode:'history'
})

export default router;