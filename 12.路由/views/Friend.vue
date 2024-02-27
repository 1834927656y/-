<template>
    <div class="Friend">
      好友:
      {{$route.params.words}}
      <button @click="goHome">跳转</button>
    </div>
  </template>
  
  <script>
  export default {
    methods:{
      goHome(){
        this.$router.push({
          name:'首页',
          query:{
            ParameterName:'首页'
          }
          //可以使用query携带参数，以参数名加参数值的格式，查询参数传参
          // path:'/home?ParameterName=首页'
        })
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  <!-- 路由存放位置为views文件夹 -->