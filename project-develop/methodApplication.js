/**
 * Created by Guo Hua on 2018/8/16.
 */
// 使用方法

// *************** 1 echarts 引入使用方法 *********************
/*
 1.安装 npm install echarts --save

 2.引入echarts  index.js
 import echarts from 'echarts';
 Vue.prototype.$echarts = echarts;

 3.开发页面引入
 import echarts from 'echarts';

 3.1.页面入口
 <div id="myEcharts" :style="{width:'100%',height:'450px'}"></div>

 3.2.页面数据处理
 mounted:function () {
 this._fnEcharts();
 },
 methods:{
 _fnEcharts:function () {
 const myEchartsA = echarts.init(document.getElementById('myEcharts')).setOption({
 series: {
 type: 'pie',
 data: [
 {name: 'A', value: 1212},
 {name: 'B', value: 2323},
 {name: 'C', value: 1919}
 ]
 }
 });
 }
 },
 */
// *************** 2 表格拖拽 引入使用方法 *********************
  /*
 1.通过 NPM 安装  npm install vue-grid-layout

 2.插件应用
   数据：var testLayout = [{"x":0,"y":0,"w":2,"h":2,"i":"0"}]

   var GridLayout = VueGridLayout.GridLayout;

   var GridItem = VueGridLayout.GridItem;

   components: {
   GridLayout,
   GridItem,
   },

   data: {
   layout: testLayout,
   },

   <grid-layout
   :layout="layout"
   :col-num="12"
   :row-height="30"
   :is-draggable="true"
   :is-resizable="true"
   :vertical-compact="true"
   :margin="[10, 10]"
   :use-css-transforms="true">

   <grid-item v-for="item in layout"
   :x="item.x"
   :y="item.y"
   :w="item.w"
   :h="item.h"
   :i="item.i">
   {{item.i}}
   </grid-item>
   </grid-layout>

  */