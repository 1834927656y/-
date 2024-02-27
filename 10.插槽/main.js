//作用：导入App.vue ，基于App.vue创建解构渲染index.html
import Vue from 'vue'
//导入vue核心包
import App from './App.vue'
//导入app.vue根组件
Vue.config.productionTip = true
//提示：当前处于什么环境

new Vue({
  render: h => h(App),
}).$mount('#app')
//vue实例化  提供render方法 → 基于app.vue创建解构渲染index.html
//.$mount('#app')等价于el：'#app'用于指定vue所管理的容器