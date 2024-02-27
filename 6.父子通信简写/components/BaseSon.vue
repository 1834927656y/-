<template>
  <div class="Son">
    <input type="text" :value="value" @change="handleChange">
    <!-- 属性名必须为value，触发事件必须为input -->
  </div>
</template>

<script>
export default {
    props:{
        value:String 
    },
    methods:{
        handleChange(e){
            this.$emit('input',e.target.value)
        }
    }
}
</script>

<style>

</style>