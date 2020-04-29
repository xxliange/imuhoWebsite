<template>
    <div class="container">
        <h1>mobile home1</h1>
    </div>
</template>

<script>
import Request from '@/utils/axios';
export default {
    name:'Home',
    created:function(){
        this.getData();
    },
    methods:{
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