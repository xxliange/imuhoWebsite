<template>
    <div>
        <!-- 组件内顶部导航栏 -->
        <nav class="container nav_container">

        </nav>
        <div style="padding-top:50px">
            <router-view />
        </div>
    </div>
</template>

<script>
import './navBar.scss';
export default {
    name:'PNavBar'
}
</script>