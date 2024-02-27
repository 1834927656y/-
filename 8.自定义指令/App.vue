<template>
  <div class="App">
    <input type="text" placeholder="自动获得焦点" v-FocalPoint="color1">
    <!-- 使用自定义指令时直接使用v-指令名 -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            color1:'red'
        }
    }
}
</script>

<style>

</style>