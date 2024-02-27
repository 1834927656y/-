<template>
    <div class="App">
      <div class="FirstBox" v-show="isShow">
        大标题
        <button @click="clicks">编辑</button>
      </div>
      <div class="SecondBox" v-show="!isShow">
        <input type="text" ref="Chart">
        <!-- 第一步对应标签添加ref属性为其赋名 -->
        <button @click="confirm">确定</button>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    clicks(){
      this.isShow=false
      this.$nextTick(()=>{//在dom渲染完毕后执行其中的函数
        this.$refs.Chart.focus()//第二步在使用时根据定义的name来找到dom
    })
    },
    confirm(){
      this.isShow=true
    }

  }
}
</script>

<style>

</style>