
<!--首页 -->
<template>
    <div class="lists2">
        <h1>首页</h1>
        <div id="demo">
            <el-table :data="tableData" style="width: 100%" :cell-class-name="getCellClass">
                <el-table-column prop="date" label="Date" width="180">
                </el-table-column>
                <el-table-column prop="name" label="Name" width="180">
                </el-table-column>
                <el-table-column prop="address" label="Address">
                </el-table-column>
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
                    name: 'Tom111',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-02',
                    name: 'Tom3223',
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
            getCellClass({ row, column, columnIndex }) {
//                if (columnIndex === 0 && row[column.property].indexOf('02') > -1) {
//                    return 'red'
//                } else {
//                    return ''
//                }
                if (row.name === 1 && this.isActive) {
                    return 'red'
                } else {
                    return ''
                }
            },

//           checkImage(row, event, column) {
//                this.src = row.img
//                this.isActive = false
//            },
//            tableRowClassName(row) {
//                if (row.name === 1 && this.isActive) {
//                    return 'first-row'
//                } else {
//                    return ''
//                }
//            }
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


