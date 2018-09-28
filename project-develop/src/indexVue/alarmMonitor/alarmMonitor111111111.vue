<template>
    <!--预警监控-->
    <div class="lists2">
        <breadcrumb :breadcrumbList="breadcrumbItems"></breadcrumb>
        <div style="margin: 30px 0">

        </div>

    </div>
</template>
<script>
    import breadcrumb from '../../components/breadCrumbs/breadCrumbs_new.vue';   // 面包屑组件

    export default {
        name:'lists2',
        props:[],
        components:{
            breadcrumb
        },
            data () {
            return {
                // 面包屑
                breadcrumbItems:[
                    {
                        router:'/alarmMonitor',
                        label:'预警监控'
                    },
                    {
                        router:'/monitor1',
                        label:'正则校验'
                    },
//                    {
//                        router:'/earlyWarningRadar',
//                        label:'预警雷达(T)'
//                    },
//                    {
//                        router:'/setList',
//                        label:'setList'
//                    },{
//                        router:'/alaem2',
//                        label:'alaem2'
//                    },{
//                        router:'/test1',
//                        label:'test1(T)'
//                    },{
//                        router:'/test2',
//                        label:'test2(T)'
//                    },{
//                        router:'/test3',
//                        label:'test3(T)'
//                    },{
//                        router:'/test4',
//                        label:'test4(T)'
//                    },{
//                        router:'/test5',
//                        label:'test5(T)'
//                    },{
//                        router:'/test6',
//                        label:'test6(T)'
//                    },{
//                        router:'/a1',
//                        label:'a1(T)'
//                    }
                ],
            };
        },
        methods: {

        },
        watch:{},
        created(){},
        mounted(){},
    };

</script>
<style  lang="scss" scoped>

</style>