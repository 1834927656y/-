<template>
  <div class="App">
    <div class="ContentDisplay">
      <keep-alive :include="['ArticlePage','LayoutPage']">
        <!-- 如需在返回上一页面时保存之前的操作则需使用组件缓存，
          组件缓存还有三个函数，如上述所用include表示需将那些组件缓存 -->
        <router-view> 
          
        </router-view>
      </keep-alive>
    </div>
    <div class="Footer">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .router-link-active{
    background-color: red;
  }
</style>