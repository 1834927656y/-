// 路由的封装
import VueRouter from 'vue-router'
// 导入vue-router
import Friend from '@/views/Friend'
import NotFind from '@/views/NotFind'
import Home from '@/views/Home'
//导入组件

import Vue from 'vue'
Vue.use(VueRouter)
//安装注册VueRouter
const router = new VueRouter({
  routes:[
    // {path:路径,component:组件}
    {name:'好友' ,path:'/friend/:words?',component:Friend},
    // 配置动态路由,在其后/:
    //其中?表示正则表达式，表示前面的值需匹配一次或0次
    {name:'首页' ,path:'/home',component:Home},
    //为路由添加命名，可在命名路由跳转时使用
    {path:'/',redirect:'home'},
    // 路由重定向，给网页设置默认打开路径。
    {path:'*',component:NotFind},
    // 配置404路由，其中*表示（任意路径）——当前面不匹配就命中最后这个
    // 404路由需写在路由配置项的最后
  ],
  mode:'history',
  // 将路由配置为无#的模式
  linkActiveClass:'exact-active',
  // 模糊匹配
  linkExactActiveClass:'active',
  // 精确匹配
  // 配置router-link自带的类名
})
// 创建路由对象
//配置路由规则
export default router 
// 导出router以供main.js中调用