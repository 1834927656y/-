<template>
    <div class="App " v-loading="isloading"> 

    </div>
</template>

<script>

export default {
    data(){
        return{
            isloading:true,
        }
    },
    directives:{
        loading:{
            inserted(el,binding){
                binding.value ? el.classList.add('loading'):el.classList.remove('loading')
            },
            update(el,binding){
                binding.value ? el.classList.add('loading'):el.classList.remove('loading')
            }
        }
    }
}
</script>

<style>
    .loading:before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image:url(../4.小兔鲜/assets/images/clothes1.png);
        background-repeat: no-repeat;
        background-position: center;
    }
</style>