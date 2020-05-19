<!-- 
    移动端个人中心页面 
-->
<template>
    <div class="m_page_container">
        <!-- 顶部用户信息展示部分 -->
        <section class="container">
            <div class="m_user_container">
                <!-- 用户头像 -->
                <div class="m_user_avatar circleImg">
                    <img :src="unlogin" alt="unlogin" width="100%">
                </div>
                <!-- 用户id -->
                <router-link to='/user/login'>
                    <div class="m_user_nickName">
                        <span>登录/注册</span>
                    </div>
                </router-link>

            </div>
        </section>
        <!-- 功能区 -->
        <section class="container">
            <div class="m_user_list">
                <ul class="container">
                    <li v-for="(item, index) in mUserConfig"  :key="item.id" :class="returnStyle(index)" class="m_user_item" >
                        <span>{{item.title}}</span>
                        <i class="iconfont icon-jiantou-you-" />
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import './user.scss';
import unlogin from '@/assets/img/user/userLogin.png';
import {MUserConfig} from '@/config/mUserConfig';
import mUserConfig from '@/config/mUserConfig';

@Component
export default class MUser extends Vue {
    get unlogin() : any {
        return unlogin
    }
    get mUserConfig() : MUserConfig {
        return mUserConfig
    }
    returnStyle(index:number):string{
        if(mUserConfig[index]['isShow']){
            return 'm_user_itemShow';
        }else{
            return 'm_user_itemHidden';
        }
    }
}

</script>