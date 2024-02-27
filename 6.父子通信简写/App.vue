<template>
    <div class="App">
      <!-- <BaseSon :value="SonId" @input="函数"></BaseSon> -->
      <BaseSon v-model="SonId"></BaseSon>
      <!-- 在父类中可简写为v-model -->
      <BaseTwo :visable.sync="isShow"></BaseTwo>
      <!-- 加上修饰符.sync后可以自定义传递的属性名 -->
      <button @click="isShow='已经改变'">改变</button>
    </div>
</template>

<script>
import BaseSon from './components/BaseSon.vue';
import BaseTwo from './components/BaseTwo.vue';
export default {
    components:{
      BaseSon,
      BaseTwo
    },
    data(){
      return{
        SonId:'321',
        isShow:'修饰符',
      }
    }
}
</script>

<style>

</style>