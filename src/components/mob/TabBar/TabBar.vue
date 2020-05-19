<template>
    <div class="container">
        <h-navBar :bool='isTabShow' />
        <div style="padding-top:50px">
            <router-view />
        </div>
        <section v-if='isTabShow'  class="container tabBar_container">
            <router-link exact active-class='active_a' to='/' replace>首页</router-link>
            <router-link active-class='active_a' to='/hot/list' replace>热点</router-link>
            <router-link active-class='active_a' to='/user' replace>个人中心</router-link>
        </section>
    </div>

</template>

<script>
import HNavBar from './../navBar/HNavBar.vue';
import './TabBar.scss';
export default {
    name:'TabBar',
    data:function(){
        return{
            isTabShow:true
        }
    },
    components:{
        'h-navBar':HNavBar
    },
    methods:{
        showTab:function(to){
            const topPage = ['home', 'hot', 'user'];
            const name = to.name;
            let isNeedShow = true;
            for(let i = 0; i<topPage.length;i++){
                if(name === topPage[i]){
                    isNeedShow = true;
                    break;
                }else{
                    isNeedShow = false;
                }
            }
            return isNeedShow;
        }
    },
    watch:{
        $route(to, from){
            const bool = this.showTab(to);
            this.isTabShow = bool;
            console.log(bool);
        }
    },
    beforeRouteEnter(to, from, next){
        next(vm =>{
            const bool = vm.showTab(to);
            vm.isTabShow = bool;
        })
    }

}
</script>