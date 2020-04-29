<template>
    <div class="container">
        <h-navBar />
        <div style="padding-top:50px">
            <router-view />
        </div>
        <section class="container tabBar_container">
            <router-link exact active-class='active_a' to='/' replace>首页</router-link>
            <router-link active-class='active_a' to='/hot/list' replace>热点</router-link>
            <router-link active-class='active_a' to='/user' replace>个人中心</router-link>
        </section>
    </div>

</template>

<script>
import HNavBar from './../navBar/HNavBar';
import './TabBar.scss';
export default {
    name:'TabBar',
    components:{
        'h-navBar':HNavBar
    }

}
</script>