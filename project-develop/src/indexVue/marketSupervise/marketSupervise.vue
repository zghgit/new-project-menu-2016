
<!--市场运行监测-->
<template>
    <div class="lists1">
        <h1>市场运行监测</h1>
        <router-link :to="{path:'lesson2'}"> home 菜单一</router-link>
        <div id="list1">
            <h1>老师管理:</h1>
        </div>
        <el-table
            :data="this.tableData"
            style="width: 100%">
            <el-table-column
                prop="id"
                label="序号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="state"
                label="状态"
                width="180">
            </el-table-column>
            <el-table-column
                prop="data"
                label="预警日期">
            </el-table-column>
            <el-table-column
                prop="code"
                label="证券代码">
            </el-table-column>
            <el-table-column
                prop="name"
                label="名称">
            </el-table-column>
            <el-table-column
                prop="oper"
                label="操作人">
            </el-table-column>
        </el-table>
        <div class="clear">
            <el-pagination
                class="left"
                background
                layout="prev, pager, next"
                :total="100">
            </el-pagination>
            <div class="right">
                <el-button type="primary" @click="changepie">转换图表</el-button>
                <el-button type="primary" @click="changecolumn">导出表格</el-button>
            </div>
        </div>
        <div id="data_source_con"></div>
    </div>
</template>
<script>
    import echarts from 'echarts';
    export default {
        data () {
            return {
                tableData:[]
            };
        },
        methods:{
            changepie(){
                 this.$nextTick(() => {
                    var dataSourcePie = echarts.init(document.getElementById('data_source_con'));
                    const  option  = {
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }]
                        }
                        // console.log(dataSourcePie.setOption())
                    dataSourcePie.setOption(option);
                    // window.addEventListener('resize', function () {
                    //     dataSourcePie.resize();
                    // });
                 });
            },
            changecolumn(){
               console.log("改变列表");
           },
        },
        mounted: function () {

            for(let i = 0; i<20; i++){
               let list = {
                    id: i+1,
                    state: i%2==0?"可用":"不可用",
                    data: "2018-03-03",
                    code: Math.floor(Math.random()*10000),
                    name: "中國平安",
                    oper: "user1",
                }
                 this.tableData.push(list)
            }
        }
    };
</script>

<style lang="scss" scoped>
.clear{
    clear: both;
}
.right{
    float: right;
    text-align: right;
}
</style>