<template>
    <div id="index">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name:'index',
        data(){
            return{
                //返回数据
            }
        },
        methods: {
            // 方法(业务逻辑)
            hello(){
//            Message('你好！')
            }
        }
    }
</script>
<style>
    .routerView{
        float: left;
        width: calc(100% - 240px);
        border: 1px solid #f0eded;
        border-radius: 5px;
        padding: 20px;
    }
</style>