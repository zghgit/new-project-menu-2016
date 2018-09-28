<template>
    <!--预警雷达-->
    <div class="monitor6">
        <breadcrumb :breadcrumbList="breadcrumbItems"></breadcrumb>

    </div>
</template>

<script>
    import breadcrumb from '../../../components/breadCrumbs/breadCrumbs_new.vue';  // 面包屑组件

    import {tableData1, tableData2, tableData3, tableData4} from '../../../server/alarmMonitor/monitor1'
    export default {
        name:'monitor6',
        props:[],
        components:{
            breadcrumb
        },
        data() {
            return {
                // 面包屑
                breadcrumbItems:[
                    {
                        router:'/alarmMonitor',
                        label:'预警监控'
                    },
                    {
                        router:'/monitor1',
                        label:'monitor1'
                    },
                    {
                        router:'/monitor2',
                        label:'monitor2'
                    },
                    {
                        router:'/monitor3',
                        label:'monitor3'
                    },
                    {
                        router:'/monitor4',
                        label:'monitor4'
                    },
                    {
                        router:'/monitor5',
                        label:'monitor5'
                    },
                    {
                        router:'/monitor6',
                        label:'monitor6'
                    },
                    {
                        router:'/monitor7',
                        label:'monitor7'
                    },
                    {
                        router:'/monitor8',
                        label:'monitor8'
                    },
                    {
                        router:'/monitor9',
                        label:'monitor9'
                    },
                    {
                        router:'/monitor10',
                        label:'monitor10'
                    },
                ],

            }
        },
        watch:{},
        mounted:function () {

        },
        methods:{


        },


    }
</script>

<style lang="scss" scoped>
    .monitor6{

    }

</style>

