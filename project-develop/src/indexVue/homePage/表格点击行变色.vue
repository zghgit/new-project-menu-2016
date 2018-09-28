
<!--首页 -->
<template>
    <div class="lists2">
        <h1>首页</h1>
        <div id="demo">
            <el-table :data="tableData"
                      :row-class-name="tableRowClassName"
                      :highlight-current-row="true" row-key="getNumber"
                      @row-click="checkImage" style="width: 100%">
                <el-table-column prop="date" label="搜索结果（按准确度排序）" style="width: 50%"></el-table-column>
                <el-table-column prop="name" label="误差值" style="width: 50%"></el-table-column>
                <el-table-column prop="address" label="误差值" style="width: 50%"></el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    //    import ii from '@'
//    import echartsData from 'echarts';
    export default {
        name:'lists2',
        props:[],
        components:{},
        data () {
            return {
                tableData: [{
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }]



        };
        },
        methods: {
           checkImage(row, event, column) {
                this.src = row.img
                this.isActive = false
            },
            tableRowClassName(row) {
                if (row.number === 1 && this.isActive) {
                    return 'first-row'
                } else {
                    return ''
                }
            }
        },
        watch:{},
        created(){},
        mounted(){

        },
    };

</script>
<style>
    .red{
        color: red;
    }
    .qq{
        color: forestgreen;
    }
    .current-row > td {
        background: #218af3 !important;
    }
</style>


