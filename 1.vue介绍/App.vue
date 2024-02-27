<template>
  <div class="app">
    <div class="box" @click="fn">我是结构</div>
    
  </div>
</template>

<style >
  .app{
    width: 400px;
    height: 400px;
    background-color: red;
  }
  .app .box{
    width: 100px;
    height: 100px;
    background-color: yellow;
  }
</style>

<script>
  //导出的是当前组件的配置项
  //可以导出 data(特殊) methods computed watch 生命周期钩子函数
  export default{
    methods: {
      fn(){
        alert('你好')
      }
    },
  }
</script>
