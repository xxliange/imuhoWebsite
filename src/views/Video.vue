<template>
    <div class="container">
        <p>{{ $route.params.id}}</p>
        <router-link to='/video/comp1'>1</router-link> |
        <router-link to='/video/2' replace="">2</router-link> |
        <router-link to='/video/3'>3</router-link>
        <button @click="goRouter">go router</button>
        <div>
            <router-view />
        </div>
    </div>
</template>

<script>
import Request from '@/utils/axios';
export default {
    name:'Video',
    props:['id','query','abc'],
    mounted:function(){
        console.log(this.$props);
        console.log(this.$route.params)
    },
    beforeRouteEnter:function(to, from, next){
        next(vm=>vm.getData())
    },
    watch:{
        '$route'(to, from){
            // console.log(to, from);
        }
    },
    methods:{
        goRouter:function(){
            this.$router.push({path:'/video/2',query:{id:1}})
        },
        async getData(){
            const res = await Request.get({
                url:'/getBanner',
                params:{
                    device_type: 2,
                    business_type: 1
                }
            });
            console.log(res);
        }
    }

}
</script>