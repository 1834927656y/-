<template>
  <div class="Son">
    <div class="hat">
        <slot name="hat" id="item.id" msg="测试参数">默认头部</slot>
        <!-- 当插槽内部没有输入值时会调用默认值输出 -->
    </div>
    <div class="main">
        <slot name="main">默认中段 </slot>
    </div>
    <div class="footer">
        <slot name="footer">默认尾部</slot>
    </div>
    <div class="form">
        <table  >
            <tr v-for="(item,index) in data" :key="item.id">
                <td>{{index-1}}</td>
                <td>{{item.name }}</td>
                <td>{{item.age}}</td>

                <td> <slot name="button" :row="item" msg="测试文本" ></slot></td>
                <!-- 给slot标签以添加属性的方式传值 -->
                <!-- 会将所有的属性添加到一个对象中 -->                      
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
export default {
    props:['data']
}
</script>

<style>
    .hat{
        color: red;
    }
</style>