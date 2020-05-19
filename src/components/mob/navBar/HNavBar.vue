<template>
    <!-- 首页内顶部导航栏 -->
    <nav class="container nav_container">
        <div class="nav_logo" v-if="this.bool">
            <img src="@/assets/logo.png" alt="">
        </div>
        <div class="nav_back" v-else>
            <i @click="$router.back(-1)" class="iconfont icon-jiantou-zuo" />
            <router-link to='/'>
                <i class="iconfont icon-dibutubiao-shouye-" />
            </router-link>
            <p class="nav_backLine" />
        </div>
        <div class="nav_title">
            <p>{{$route.name}}</p>
        </div>
        <div class="nav_button">
            <p>下载APP</p>
        </div>
    </nav>
</template>

<script>
import './navBar.scss';
export default {
    name:'HNavBar',
    props:['bool'],
    data:function(){
        return{
            isCanback:false,
        }
    },
    created:function(){
        console.log(this.bool)
    },
    methods: {
        showBack:function(to){
            const topPage = ['home', 'hot', 'user'];
            const name = to.name;
            let isNeedShow = true;
            for(let i = 0; i<topPage.length;i++){
                if(name === topPage[i]){
                    isNeedShow = false;
                    break;
                }else{
                    isNeedShow = true;
                }
            }
            return isNeedShow;
        }
    },
    watch:{
        $route(to, from){
            const bool = this.showBack(to);
            this.isCanback = bool;
        }
    },
    beforeRouteEnter(to, from, next){
        next(vm =>{
            const bool = vm.showTab(to);
            console.log(bool)
            vm.isCanback = bool;
        })
    }
}
</script>