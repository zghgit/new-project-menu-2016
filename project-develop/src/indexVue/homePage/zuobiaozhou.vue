
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
                let  labelRight = {
                        normal: {
                            position: 'right'
                        }
                    };
                let  option = {
                    title: {
                        text: '交错正负轴标签',
                            subtext: 'From ExcelHome',
                            sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
                    },
                    tooltip : {
                        trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        top: 80,
                            bottom: 30
                    },
                    xAxis: {
                        type : 'category',
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        splitLine: {show: false},
//                        data : ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
                        data : [223, 3443, 4343, 686, 677, 934, 765, 674, 642, 999]
                    },
                    yAxis: {

                        type : 'value',
                        position: 'top',
                        splitLine: {lineStyle:{type:'dashed'}},




                    },
                    series : [
                        {
                            name:'生活费',
                            type:'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    formatter: '{b}'
                                }
                            },
                            data:[
                                {value: -0.07, label: labelRight},
                                {value: -0.09, label: labelRight},
                                0.2, 0.44,
                                {value: -0.23, label: labelRight},
                                0.08,
                                {value: -0.17, label: labelRight},
                                0.47,
                                {value: -0.36, label: labelRight},
                                0.18
                            ]
                        }
                    ]
                };
                myChars12.setOption(option);

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


<!--<template>-->
    <!--<div class="lists1">-->
        <!--<router-link :to="{path:'lesson2'}"> home 菜单一</router-link>-->
        <!--<div id="list1">-->
            <!--<h1>老师管理:</h1>-->
            <!--<a>{{ author }} </a>-->
            <!--&lt;!&ndash;<md-breadcrumbs></md-breadcrumbs>&ndash;&gt;-->
            <!--&lt;!&ndash;<md-but></md-but>&ndash;&gt;-->
        <!--</div>-->

    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs.vue';   // 面包屑组件引入-->
    <!--import But from '../../components/but/btn.vue';   // 面包屑组件引入-->


    <!--export default {-->
        <!--components:{-->
            <!--breadcrumbs:'BreadCrumbs',-->
        <!--},-->
        <!--data () {-->
            <!--return {-->
                <!--author: '吴老师',-->
                <!--lessonHref: 'lesson2',-->
                <!--components: {-->
                    <!--BreadCrumbs: 'BreadCrumbs',-->
                <!--}-->
            <!--};-->
        <!--}-->
    <!--};-->
<!--</script>-->

<!--<style lang="scss" scoped>-->

<!--</style>-->