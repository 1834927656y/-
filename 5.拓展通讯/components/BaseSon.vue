<template>
  <div class="BaseSon">
    2
    {{color}}
    {{userInfo.name}}
    <button @click="clickSend">点击</button>
</div>
  
</template>

<script>
import Bus from '../utils/EventBus'
export default {
    methods:{
        clickSend(){
            Bus.$emit('sendMsg','今天天气晴朗')
        }//传递方（方法与值）
    },
    inject:['color','userInfo'],//子孙类接受方
    created(){
        console.log(this.color,this.userInfo);
    }
}
</script>

<style>

</style>