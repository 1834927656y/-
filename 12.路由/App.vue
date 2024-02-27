<template>
  <div class="App">
    <div class="hat">
      <router-link to="/home?ParameterName=首页&">首页</router-link>
      <!-- 查询参数传参，与axios网址传递参数原理一致,对应页面中使用$rout.query.参数名获取参数-->
      <router-link to="/friend/zzh">好友</router-link>
      <!-- 动态路由传参
          1：配置动态路由(index中)
          2：配置导航链接（to=‘path/参数值’）
          3：在对应页面使用$route.params.参数名。接收值（Friend）
      -->
    </div>
    <div class="top">
      <router-view></router-view>
      <!-- 配置路由出口,类似于占位 -->
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

a{
  display: inline-block;
  width: 100px;
  height: 100px;
  text-decoration: none;
  color: black;
}
.hat a.active{
    background-color: red;
  }
</style>
<!-- 路由使用步骤 5+2
1：下载 v3.6.5
2：引入
3：安装注册
4：创建路由对象
5：注入到new vue中 -->
