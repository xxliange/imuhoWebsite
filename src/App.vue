<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<script>
import './assets/style/base/base.scss';
import './assets/style/base/base.m.scss';
import './assets/style/base/base.p.scss';

export default {
  created:function(){
    if(window.screen.width > 1024){
      document.documentElement.style.background = '#fff'
    }else{
      document.documentElement.style.background = '#000'
    }
  }
}
</script>

<style lang="scss">
#app{
  background: #000;
}
</style>
