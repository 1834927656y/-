<template>
    <div class="Father">
        
        <baseSon :number="MyNumber" @click="submit"></baseSon>
        <!-- @传递过来的方法=定义的方法 -->

    </div>
</template>

<script>
import baseSon from './baseSon.vue'


export default {
    components:{
        baseSon:baseSon
    },
    data(){
        return{
            MyNumber:1,


        }
    },
    methods:{
        submit(NewNumber){
            this.MyNumber=NewNumber
        }
    }
}
</script>

<style>

</style>