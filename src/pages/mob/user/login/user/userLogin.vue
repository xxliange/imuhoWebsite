<template>
    <div class="m_page_container" style="min-height:0">
        <div class="m_login_container">
            <!-- 标题 -->
            <h1>
                账号登录
            </h1>
            <!-- 表单区域 -->
            <section class="m_login_form">
                <form>
                    <div class="m_login_input">
                        <login-input 
                            :value='user'
                            @change='changeUser'
                            placeholder='我的账号' />
                    </div>
                    <div class="m_login_input">
                        <login-input 
                            placeholder='我的密码' 
                            type='password' 
                            :value='pass'
                            @change='changePass'/>
                    </div>
                </form>
                <div class="m_login_btn">
                    <event-btn 
                        text='登陆'
                    />
                </div>
            </section>
            <!-- 忘记密码和注册按钮 -->
            <section class="m_login_forReg">
                <p>忘记密码</p>
                <p>没有账号?立即注册</p>
            </section>
            <!-- 用户协议以及用户隐私按钮 -->
            <section class="m_login_terms">
                <p>
                    登录注册即代表您同意
                    <router-link to=''>用户协议</router-link> 
                    和
                    <router-link to=''>隐私条例</router-link>
                    
                </p>
            </section>
            <!-- 第三方登陆 -->
            <section class="m_login_three">
                <p class="m_login_threeTitle">第三方登录</p>
                <ul class="m_login_threeMain">
                    <li class="m_login_threeItem">
                        <img src="@/assets/img/user/phone.png" alt="">
                    </li>
                    <li class="m_login_threeItem">
                         <img src="@/assets/img/user/qq.png" alt="">
                    </li>
                    <li class="m_login_threeItem">
                         <img src="@/assets/img/user/weibo.png" alt="">
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
import LoginInput from './../components/LoginInput/LoginInput';
import EventBtn from './../components/EventBtn/EventBtn';
import './../publicStyle.scss';
import './userLogin.scss';
export default {
    data() {
        return {
            user:'',
            pass:''
        }
    },
    components:{
        'login-input':LoginInput,
        'event-btn':EventBtn
    },
    methods: {
        changeUser:function(e){
            this.user = e.target.value;
        },
        changePass:function(e){
            this.pass = e.target.value;
        },
        alertUser:function(){

        }
    },
}
</script>