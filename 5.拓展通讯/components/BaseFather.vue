<template>
  <div class="BaseFather">
    {{message}}
    <BaseSon></BaseSon>
  </div>
</template>

<script>
import BaseSon from './BaseSon.vue';
import Bus from '../utils/EventBus'
export default {
  data(){
    return{
      message:'',
      color:'red',
      userInfo:{
        name:23,
        age:21
      }

    }
  },
    components:{
        'BaseSon':BaseSon
    },
    created(){
        Bus.$on('sendMsg',(msg)=>{
          console.log(msg);
          this.message=msg
        })
    },//接受方（监听方法，收到值 ）
    provide(){
      return{
        color:this.color,
        userInfo:this.userInfo
      }
    }//父级传递数据
}
</script>

<style>

</style>