import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path:'/',
        name:'Home',
        component:()=>import(/* webpackChunkName:"pcVies" */'@/pages/pc/home/home.vue')
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router;