<template>
    <!-- 首页内顶部导航栏 -->
    <nav class="container nav_container">
        <div class="nav_logo">
            <img src="@/assets/logo.png" alt="">
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
    created:function(){
        console.log(this.$route)
        console.log(this.$props)
    }
}
</script>