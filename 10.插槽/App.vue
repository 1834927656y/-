<template>
    <div class="App">
        <Son :data="list">
            <template #button="obj">
                <button @click="look(obj.row)">查看</button>
            </template>
        </Son>
        <son :data="list">
           
            <!-- 通过template #插槽名=“变量名” 接受数据 -->
            <template #button="obj">
                {{obj}}
                <button @click="del(obj.row.id)">删除</button>
            </template>
           
        </son>
    </div>
</template>

<script>
import Son from './components/Son.vue';
export default {
    components:{
        Son,
    },
    data(){
        return {
            list:[
                {id:1,name:'xiazhang',age:18},
                {id:2,name:'xiaming',age:17},
                {id:3,name:'xiawang',age:16}
            ]
        }
    },
    methods:{
        del(id){
            
            this.list=this.list.filter(item => item.id !== id)
        },
        look(id){
            
            console.log(id);
        }
    }
}
</script>

<style>

</style>