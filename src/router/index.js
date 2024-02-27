import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from "@/views/Layout"
import Detail from "@/views/ArticleDetail"
import Article from "@/views/Article"
import Collect from "@/views/Collect"
import Like from "@/views/Like"
import User from "@/views/User"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path:'/', component:Layout,
    children:[
      {path:'/article',component:Article},
    {path:'/collect',component:Collect},
    {path:'/like',component:Like},
    {path:'/user',component:User},
    ]},
    //使用children来配置二级路由
    {name:'首页',path:'/ariticleDetail',component:Detail},
    
  ]
})

export default router