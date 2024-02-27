<template>
  <div class="app">
    <HmHeader></HmHeader>  
    <HmMain></HmMain>
    <HmFooter></HmFooter>
  </div>
  
</template>

<script>
import HmFooter from './components/HmFooter.vue';
import HmHeader from './components/HmHeader.vue';//导入组件 名称与地址
import HmMain from './components/HmMain.vue';
export default {
  components:{
    // '组件名'：组件对象
    HmHeader:HmHeader,
    HmFooter:HmFooter,
    HmMain:HmMain,

  }
}
</script>

<style>
  .app{
    width: 600px;
    height: 600px;
    background-color: #87ceeb;
    margin: 0 auto;
    padding: 20px;
  }
</style>