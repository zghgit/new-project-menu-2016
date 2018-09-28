
<!--首页 -->
<template>
    <div class="lists2">
        <h1>首页</h1>
        <breadcrumb :breadcrumbList="breadcrumbItems"></breadcrumb>
        <div>
            <grid-layout style="width: 60%"
                :layout="layout"
                :auto-size="false"
                :col-num="20"
                :row-height="20"
                :max-rows="20"
                :is-draggable="true"
                :is-resizable="false"
                :vertical-compact="false"
                :margin="[10, 10]"
                :use-css-transforms="true">
                <grid-item v-for="item in layout" :key="item.i"  style="width: 60%"
                           :x="item.x"
                           :y="item.y"
                           :w="item.w"
                           :h="item.h"
                           :i="item.i"
                           @resize="resizeEvent"
                           @move="moveEvent"
                           @resized="resizedEvent"
                           @moved="movedEvent"
                >
                    <!--{{item.i}}-->
                    <el-table :data="historyCodeTable"
                              border toolip-eddect="dark"
                              style="width: 100%">
                        <template v-for="(item, index) in tablecolumms">
                            <el-table-column :key="item.field"
                                             :prop="item.field"
                                             :lable="item.title">

                            </el-table-column>
                        </template>
                    </el-table>
                </grid-item>
            </grid-layout>
        </div>
    </div>
</template>
<script>
    import breadcrumb from '../../components/breadCrumbs/breadCrumbs_new.vue';   // 面包屑组件
    import Vue from 'vue'
    import VueGridLayout from 'vue-grid-layout'
    Vue.use(VueGridLayout);



    var testLayout = [
        {"x":0,"y":0,"w":1,"h":1,"i":"0"},
//        {"x":0,"y":1,"w":1,"h":1,"i":"1"},
//        {"x":0,"y":2,"w":1,"h":1,"i":"2"},
//        {"x":0,"y":3,"w":1,"h":1,"i":"3"},
//        {"x":1,"y":0,"w":1,"h":1,"i":"4"},
//        {"x":1,"y":1,"w":1,"h":1,"i":"5"},
//        {"x":1,"y":2,"w":1,"h":1,"i":"6"},
//        {"x":1,"y":3,"w":1,"h":1,"i":"7"},
//        {"x":2,"y":0,"w":1,"h":1,"i":"8"},
//        {"x":2,"y":1,"w":1,"h":1,"i":"9"},
//        {"x":2,"y":2,"w":1,"h":1,"i":"10"},
//        {"x":2,"y":3,"w":1,"h":1,"i":"11"},
//        {"x":3,"y":0,"w":1,"h":1,"i":"12"},
//        {"x":3,"y":1,"w":1,"h":1,"i":"13"},
//        {"x":3,"y":2,"w":1,"h":1,"i":"14"},
//        {"x":3,"y":3,"w":1,"h":1,"i":"15"},
//        {"x":4,"y":0,"w":1,"h":1,"i":"16"},
//        {"x":4,"y":1,"w":1,"h":1,"i":"17"},
//        {"x":4,"y":2,"w":1,"h":1,"i":"18"},
//        {"x":4,"y":3,"w":1,"h":1,"i":"19"}
    ];

    var GridLayout = VueGridLayout.GridLayout;
    var GridItem = VueGridLayout.GridItem;



    export default {
        name:'lists2',
        props:[],
        components:{
            breadcrumb,
            GridLayout,
            GridItem,
        },
        data () {
            return {
                // 面包屑
                breadcrumbItems:[
                    {
                        router:'/homePage',
                        label:'首页'
                    },{
                        router:'/alarmMonitor',
                        label:'预警监控'
                    },{
                        router:'/alarmManage',
                        label:'市场运行监测'
                    },{
                        router:'/marketSupervise',
                        label:'分析工具'
                    },
                    {
                        router:'/marketSupervise',
                        label:'监察任务'
                    },{
                        router:'/publicSupervise',
                        label:'业务审计'
                    },{
                        router:'/analysisTool',
                        label:'系统管理'
                    },{
                        router:'/superviseTask',
                        label:'监督知识库'
                    }
                ],

                layout: testLayout,
                newX:0,
                newY:0,
                tablecolumms:[
                    {title:'变更日期', field:'a1' },
                    {title:'变更日期1', field:'a2' },
                    {title:'变更日期2', field:'a3'},
                    {title:'变更日期3', field:'a4' }
                ],
                historyCodeTable:[
                    {"a1":"2018-02-26", "a2":"601313", "a3":"9601360", "a4":"sjfkldmfsnggdfmngdfm,"},
                    {"a1":"2018-02-26", "a2":"601313", "a3":"9601360", "a4":"sjfkldmfsnggdfmngdfm,"},
                    {"a1":"2018-02-26", "a2":"601313", "a3":"9601360", "a4":"sjfkldmfsnggdfmngdfm,"}
                ],
            }

        },
        watch:{

        },
        mounted(){

        },
        methods: {
            moveEvent: function(i, newX, newY,e){
                //console.log(e)
                //console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
            },
            resizeEvent: function(i, newH, newW){
                //console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW);
            },
            movedEvent: function(i, newX, newY,e){
                //console.log(e)
                //console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
            },
            resizedEvent: function(i, newH, newW, newHPx, newWPx){
                //console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
            }



    }

    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .vue-grid-layout {
        position: relative;
        width:800px;
        height:450px;
        /*overflow: hidden;*/
        /*background: url('../../assets/desktop_background.png') no-repeat;*/
    }
    .vue-grid-layout>div {
        position: absolute;
        /*background: indianred;*/
    }
</style>


