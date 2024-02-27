<template>
  <div class="Home">
    首页<br>
    跳转路由时传递的参数为：{{$route.query.ParameterName}}
    <button @click="goFriend">跳转</button>
  </div>
</template>

<script>
export default {
  name:'Friend',
  created(){
    // 在created中获取路由参数需使用this.$route.query.参数名
  },
  methods:{
    goFriend(){
      this.$router.push({
          name:'好友',
          params:{
            words:'zzh'
          }
        })
      //动态路由传参使用params
      //路由跳转 使用如上使用$router与传值不同
      //第二种方法 this.$routrt.push('/friend')
    },

  }
}
</script>

<style>

</style>