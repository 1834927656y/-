<template>
  <div class="article-page" >
    <div class="top">
        
      <img :src="src" :style="{ width:'100%',height:'150px'  }" >
        
       
    </div>
    <div v-for="index in list" :key="index.id" class="article-item"  @click="goArticleDetail(index)">
      
      <div class="head">
        <img src="http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png" alt="" />
        <div class="con">
          <p class="title">{{index.stem}}</p>
          <p class="other">{{index.creatorName}} | {{index.createdAt}}</p>
        </div>
      </div>
      <div class="body">
        {{ index.content }}
      </div>
      <div class="foot">点赞 {{index.likeCount}} | 浏览 {{index.views}}</div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// 请求地址: https://mock.boxuegu.com/mock/3083/articles
// 请求方式: get
export default {
  name: 'ArticlePage',
  data () {
    return {
      count:0,
      list:[],
      database:[
        require('../assets/阿里云图片2.jpg'),
        require('../assets/阿里云广告.png')
      ],
      src:''
    }
  },
  created(){
    axios({
      url:'https://mock.boxuegu.com/mock/3083/articles',//请求网址
      method:'get',//请求的方法
      }).then((result)=>{
        console.log(result);
        this.list= result.data.result.rows
        console.log(this.list[0])
      })
  },
  methods:{
    goArticleDetail(index){
      console.log(index);
        this.$router.push({
          name:'首页',
          query:{
            list:JSON.stringify(index)
            // 当路由之间传递参数时，如需在页面刷新时，数据不丢失需先将数据转化为字符串
            // 类型，在接收时在将其转化为json类型
          }
          //可以使用query携带参数，以参数名加参数值的格式，查询参数传参
          // path:'/home?ParameterName=首页'
        })
      }
  },
  mounted() {
    this.timer = setInterval(() => {
      if(this.count < this.database.length){
        this.src=this.database[this.count]
        console.log(this.src);
        console.log(this.count);
        this.count++;        
      }
      else{
        this.count=0
      }
      
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }

}
</script>

<style lang="less" scoped>
*{
  scroll-behavior: smooth;
}
.article-page {
  background: #f5f5f5;
}
.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
  a {
      flex: 1;
      text-decoration: none;
      font-size: 14px;
      color: #333;
      -webkit-tap-highlight-color: transparent;
    }
  .top{
    position: relative;
  }
  .jiantoux{
    position: absolute;
    left: 0px;
    width: 10px;
    height: 10px;
  }
  .jiantoud{
    position: relative;
    right: 0px;
    width: 10px;
    height: 10px;
  }
}
</style>