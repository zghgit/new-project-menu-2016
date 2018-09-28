<template>
    <!--预警雷达-->
    <div class="monitor1">
        <breadcrumb :breadcrumbList="breadcrumbItems"></breadcrumb>
        <div style="margin: 30px 0">
            <h1>[{{title}}]</h1>
            <p v-if="activeName" id="infoTab" class="redTab"></p>
            <div>
                <el-tabs v-model="activeName" @tab-click="tabClick">
                    <el-tab-pane
                    v-for="active in activeNameListtt"
                    :label="active.label" :key="active.name"
                    :name="active.name">
                        <el-table
                        :data="active.tableDataList"
                        border
                        style="width:100%;">
                            <el-table-column
                                v-for="(item, index) in active.tableColumns"
                                :key="item.field"
                                :prop="item.field"
                                :label="item.title"
                                :align="item.align">
                                <el-table-column
                                v-for="(itemChild, index) in item.children"
                                :key="itemChild.field"
                                :prop="itemChild.field"
                                :label="itemChild.title"
                                :align="itemChild.align"
                                :min-width="itemChild.width">
                                </el-table-column>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>

            </div>
        </div>
    </div>
</template>

<script>
    import breadcrumb from '../../../components/breadCrumbs/breadCrumbs_new.vue';  // 面包屑组件

    import {tableData1, tableData2, tableData3, tableData4} from '../../../server/alarmMonitor/monitor1'
    export default {
        name:'monitor1',
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
                title:'日超链接明细表',
                activeName:'first',

//                初始化表格
                activeNameListtt:[
                    {
                        name:'first',
                        label:'小学',
                        tableColumns:tableData1,
                        tableDataList:[
                            {
                                "t1":"etewr",
                                "t12":"dsljfdj",
                                "t13":"5464",
                                "t14":"5464",
                                "t16":"ffffff",
                                "t17":"hhhhhh",
                            }
                        ]
                    },
                    {
                        name:'second',
                        label:'初中',
                        tableColumns:tableData2,
//                        tableColumns:[],
                        tableDataList:[
                            {
                                "t1":"etewr",
                                "t12":"dsljfdj",
                                "t13":"5464",
                                "t14":"5464",
                                "t16":"ffffff",
                                "t17":"hhhhhh",
                            }
                        ]
                    },
                    {
                        name:'third',
                        label:'高中',
                        tableColumns:tableData3,
//                        tableColumns:[],
                        tableDataList:[
                            {
                                "t1":"etewr",
                                "t12":"dsljfdj",
                                "t13":"5464",
                                "t14":"5464",
                                "t16":"ffffff",
                                "t17":"hhhhhh",
                            }
                        ]
                    },
                    {
                        name:'fourthly',
                        label:'大学',
                        tableColumns:tableData4,
//                        tableColumns:[],
                        tableDataList:[
                            {
                                "t1":"etewr",
                                "t12":"dsljfdj",
                                "t13":"5464",
                                "t14":"5464",
                                "t16":"ffffff",
                                "t17":"hhhhhh",
                            }
                        ]
                    },
                ]
            }
        },
        watch:{},
        mounted:function () {
          let dataObj = JSON.parse(sessionStorage.getItem('data'));
          let ss = JSON.parse(dataObj.data);
            console.log(ss);
        },
        methods:{
            tabClick:function () {

            }
        },


    }
</script>

<style lang="scss" scoped>
    .monitor1{

    }

</style>

