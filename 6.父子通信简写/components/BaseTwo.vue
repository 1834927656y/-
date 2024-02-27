<template>
  <div class="BaseTwo">
    {{visable}}
    <button @click="close">变回去</button>
  </div>
</template>

<script>
export default {
    props:{
        visable:String
    },
    methods:{
        close(){
            this.$emit('update:visable','已经变回去了')
            // 需使用update方法
        }
    }
}
</script>

<style>

</style>