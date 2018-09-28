
<!--首页 -->
<template>
    <div class="lists2">
        <h1>首页</h1>

        <div class="homAs">
            <div id="myCharts" :style="{width:'100%', height:'350px', border:'1px solid red'}"></div>
        </div>
    </div>
</template>
<script>
    //    import ii from '@'
    import echartsData from 'echarts';
    export default {
        name:'lists2',
        props:[],
        components:{},
        data () {
            return {


            };
        },
        methods: {
            dd(){
                let myChars12 = echartsData.init(document.getElementById('myCharts'));
         let r_ver = /^[\u4e00-\u9fffa-zA-Z0-9_]{1,25}$/;    // 25个字符以内且不包含特殊字符
                

            }

        },
        watch:{},
        created(){},
        mounted(){
            this.dd();
        },
    };

</script>
<style  lang="scss" scoped>

</style>
