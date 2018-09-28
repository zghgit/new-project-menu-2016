<template>
    <!--预警雷达-->
    <div class="monitor2">
        <breadcrumb :breadcrumbList="breadcrumbItems"></breadcrumb>

        <h1>{{title}}</h1>
        <p class="redTab"> {{totalCounts}}</p>
        <el-checkbox-group
            v-model="checkboxType"
            @change="typeChange">
            <el-checkbox
                v-for="(eitem, index) in types"
                :label="eitem" :key="index">
                {{eitem}}
            </el-checkbox>
        </el-checkbox-group>
        <el-table
            :data="tableData"
            border
            v-loading="queryLoading"
            element-loding-spinner="el-icon-loading"
            element-loading-text="数据加载中，请耐心等待..."
            element-loading-background="rgba(0,0,0,0.3)"
            style="width:100%">
            <el-table-column
                width="260"
                 prop="arr"
                 label="明细数据超链接"
                 align="center">
                <template scope="scope" >
                    <a v-for="item in list" class="df"
                       @click="aClick(scope.row.f1, item)">{{item}}</a>
                </template>
            </el-table-column>
            <template v-for="(item, index) in MTSL">
                <el-table-column
                    :key="item.field"
                    :prop="item.field"
                    :label="item.title"
                    :align="item.align">
                </el-table-column>
            </template>
        </el-table>

    </div>
</template>

<script>
    import breadcrumb from '../../../components/breadCrumbs/breadCrumbs_new.vue';  // 面包屑组件

    import {tableData1, tableData2, tableData3, tableData4} from '../../../server/alarmMonitor/monitor1'
    import {totalCount, monitorData1, monitorData2} from '../../../server/alarmMonitor/monitorData'
    export default {
        name:'monitor2',
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
                title:'月超链接明细表',
                checkboxType:[],    // 复选框
                flagType:[],
                types:['展现占比指标', '展现环比指标'],
                queryLoading:false,
                tableData:[],
                MTSL:tableData4,  
                totalCounts:'', // 条记录
                list:['日','月','年','个券','会员',]
            }
        },
        watch:{},
        mounted:function () {
            this.MTSL = [tableData4[0], tableData4[1]];
            this.fn_tabaData();

        },
        methods:{

//            复选框
            typeChange:function (val) {
                this.flagType = [];
                if(val.length == 2){
                    this.flagType = ['A', 'B']
                }else {
                    var str = val[0];
                    if(str){
                        var i = this.types.indexOf(str) == 0 ? 'A' : 'B';
                        this.flagType.push(i);
                    }
                };
//                初始化列表
                this.MTSL = [tableData4[0], tableData4[1]];
                this.types.forEach((type, index) =>{
                    val.forEach((t, ind) =>{
                        if(t == type){
                            tableData4.forEach((o, inde) => {
                                if(o.flag == (index+1)){
                                    this.MTSL.push(o)
                                }
                            })
                        }
                    })
                });

                this.MTSL.sort((o1, o2) => {
                    return o1.aIndex < o2.aIndex ? -1 : 1;
                })


            },


//            初始化数据请求借口

            fn_tabaData:function () {
                this.queryLoading = true;
               this.totalCounts = '';
                this.tableData = [];

                if(!this.tableData){
                    this.$alert("查询出错"+'fasle 提示',{
                        confirmButtonText:'确定'
                    });

                }else {
                    this.queryLoading = false;
                    this.totalCounts = "查询结果共" + totalCount + "条记录";
                    this.tableData = monitorData1;

                }
            },


//            明细数据超链接

            aClick:function (row, int) {
                this.fn_link(int)
            },


//            明细数据超链接 --> 封装跳转接口

            fn_link:function (scopes) {
                let objData = [
                    {"startData":"2014-0402"},
                    {"endData":"2018-0402"},
                    {"secType":"2014"},
                ];

                if(scopes === "日"){
                    this.jump2NewPage('monitor1')
                };
                if(scopes === '月'){
                    this.jump2NewPage('monitor3', {
                        data:JSON.stringify(objData),
                        title:'月超链接明细表'
                    });
                };
                if(scopes === "年"){
                    this.jump2NewPage('monitor4')
                };
                if(scopes === "个券"){
                    this.jump2NewPage('monitor5');
                };
                if(scopes === "会员"){
                    this.jump2NewPage('monitor6')
                }
            },


//            function jump2NewPage(url, data, flag) {}


            // 新的跳转页面
            jump2NewPage:function (url, data, flag) {
                let temp = [];
                if(data){
//                    sessionStorage.setItem('data', JSON.stringify(data))
                    sessionStorage.setItem(flag ? url : "data", JSON.stringify(data))
//                    let arr = url.split('');
//
//                    arr.forEach((item, index) =>{
//                        item += Math.floor(Math.random()*10)
//                        temp.push(item)
//                    });
//                    console.log(temp.join(''));
                }
//                window.open('#/commonNextPage' + '?tag=' + temp);
                window.open('#/' + url);  // 打开新的页面
            }
        },


    }
</script>

<style lang="scss" scoped>
    .monitor2{
        .redTab{
            color: red;
            padding: 10px 0;
        }
        .df{
            margin: 0 7px;
        }
    }

</style>

