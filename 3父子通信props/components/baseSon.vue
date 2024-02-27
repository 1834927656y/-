<template>
    <div class="son">
        {{number}}
        <button @click="submit">点击</button>
    </div>
    
</template>

<script>
export default {
    props:{
        number:{
            type: Number,//数据类型
            // required:false,//是否必填
            // default:'', 默认值
            // Validtor(){}逻辑

        }
    },
    methods:{
         submit(){
            this.$emit('click',this.number+1)//(事件名，传递值)
         }
    }
}
</script>

<style>

</style>