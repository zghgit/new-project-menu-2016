/* eslint-disable no-inline-comments */

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import homePage from '../indexVue/homePage/homePage.vue';                          // 1首页
// ******************
import alarmMonitor from '../indexVue/alarmMonitor/alarmMonitor.vue';             // 预警监控
import monitor1 from '../indexVue/alarmMonitor/monitor/monitor1.vue';             // 预警监控
import monitor2 from '../indexVue/alarmMonitor/monitor/monitor2.vue';             // 预警监控
import monitor3 from '../indexVue/alarmMonitor/monitor/monitor3.vue';             // 预警监控
import monitor4 from '../indexVue/alarmMonitor/monitor/monitor4.vue';             // 预警监控
import monitor5 from '../indexVue/alarmMonitor/monitor/monitor5.vue';             // 预警监控
import monitor6 from '../indexVue/alarmMonitor/monitor/monitor6.vue';             // 预警监控
import monitor7 from '../indexVue/alarmMonitor/monitor/monitor7.vue';             // 预警监控
import monitor8 from '../indexVue/alarmMonitor/monitor/monitor8.vue';             // 预警监控
import monitor9 from '../indexVue/alarmMonitor/monitor/monitor9.vue';             // 预警监控
import monitor10 from '../indexVue/alarmMonitor/monitor/monitor10.vue';             // 预警监控
// ******************

import earlyWarningList from '../indexVue/alarmMonitor/earlyWarningList.vue';    // 预警列表
import earlyWarningRadar from '../indexVue/alarmMonitor/earlyWarningRadar.vue';  // 预警雷达(T)

import alarmManage from '../indexVue/alarmManage/alarmManage.vue';                 // 市场运行监测






import marketSupervise from '../indexVue/marketSupervise/marketSupervise.vue';   // 分析工具
import publicSupervise from '../indexVue/publicSupervise/publicSupervise.vue';   // 监察任务
import analysisTool from '../indexVue/analysisTool/analysisTool.vue';             // 分析工具
import superviseTask from '../indexVue/superviseTask/superviseTask.vue';         // 业务审计
import knowledgeBase from '../indexVue/knowledgeBase/knowledgeBase.vue';         // 系统管理
import businessAudit from '../indexVue/businessAudit/businessAudit.vue';         // 监督知识库
import workStatistics from '../indexVue/workStatistics/workStatistics.vue';      //10
import systemManage from '../indexVue/systemManage/systemManage.vue';            //11


import a1 from '../indexVue/alarmMonitor/earlyWarningList.vue';           // 预警监控
import setList from '../indexVue/alarmMonitor/setList.vue';           // 预警监控



import alaem2 from '../indexVue/alarmManage/alaem2.vue';             // 预警监控
import test1 from '../indexVue/alarmManage/text1.vue';             // 预警监控
import test2 from '../indexVue/alarmManage/text2.vue';             // 预警监控
import test3 from '../indexVue/alarmManage/text3.vue';             // 预警监控
import test4 from '../indexVue/alarmManage/text4.vue';             // 预警监控
import test5 from '../indexVue/alarmManage/text5.vue';             // 预警监控
import test6 from '../indexVue/alarmManage/text6.vue';             // 预警监控




export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name:'homePage',
      component: homePage,
    },
    {
      path: '/homePage',
      name:'homePage',
      component: homePage,
    },
    {
      path: '/alarmMonitor',
      name: 'alarmMonitor',
      component: alarmMonitor,
    },
    // ***************************
    {
      path:'/a1',
      name:'a1',
      // redirect: alarmMonitor,
      component:a1
    },
    {
      path:'/setList',
      name:'setList',
      // redirect: alarmMonitor,
      component:setList
    },{
      path:'/monitor1',
      name:'monitor1',
      // redirect: alarmMonitor,
      component:monitor1
    },{
      path:'/monitor2',
      name:'monitor2',
      // redirect: alarmMonitor,
      component:monitor2
    },{
      path:'/monitor3',
      name:'monitor3',
      // redirect: alarmMonitor,
      component:monitor3
    },{
      path:'/monitor4',
      name:'monitor4',
      // redirect: alarmMonitor,
      component:monitor4
    },{
      path:'/monitor5',
      name:'monitor5',
      // redirect: alarmMonitor,
      component:monitor5
    },{
      path:'/monitor6',
      name:'monitor6',
      // redirect: alarmMonitor,
      component:monitor6
    },{
      path:'/monitor7',
      name:'monitor7',
      // redirect: alarmMonitor,
      component:monitor7
    },{
      path:'/monitor8',
      name:'monitor8',
      // redirect: alarmMonitor,
      component:monitor8
    },{
      path:'/monitor9',
      name:'monitor9',
      // redirect: alarmMonitor,
      component:monitor9
    },{
      path:'/monitor10',
      name:'monitor10',
      // redirect: alarmMonitor,
      component:monitor10
    },
    // ***************************
    {
      path: '/earlyWarningList',
      name: 'earlyWarningList',
      component: earlyWarningList,
    },
    {
      path: '/earlyWarningRadar',
      name: 'earlyWarningRadar',
      component: earlyWarningRadar,
    },
    {
      path: '/alarmManage',
      name: 'alarmManage',
      component: alarmManage,
    },
    // ************************************

    {
      path:'/test1',
      name:'test1',
      // redirect: alarmMonitor,
      component:test1
    },{
      path:'/test2',
      name:'test2',
      // redirect: alarmMonitor,
      component:test2
    },{
      path:'/test3',
      name:'test3',
      // redirect: alarmMonitor,
      component:test3
    },{
      path:'/test4',
      name:'test4',
      // redirect: alarmMonitor,
      component:test4
    },{
      path:'/test5',
      name:'test5',
      // redirect: alarmMonitor,
      component:test5
    },{
      path:'/test6',
      name:'test6',
      // redirect: alarmMonitor,
      component:test6
    },{
      path:'/alaem2',
      name:'alaem2',
      // redirect: alarmMonitor,
      component:alaem2
    },
    // ************************************
    {
      path: '/marketSupervise',
      name: 'marketSupervise',
      component: marketSupervise,
    },
    {
      path: '/publicSupervise',
      name: 'publicSupervise',
      component: publicSupervise,
    },
    {
      path: '/analysisTool',
      name: 'analysisTool',
      component: analysisTool,
    },
    {
      path: '/superviseTask',
      name: 'superviseTask',
      component: superviseTask,
    },
    {
      path: '/knowledgeBase',
      name: 'knowledgeBase',
      component: knowledgeBase,
    },
    {
      path: '/businessAudit',
      name: 'businessAudit',
      component: businessAudit,
    },
    // {
    //   path: '/workStatistics',
    //   name: 'workStatistics',
    //   component: workStatistics,
    // },
    // {
    //   path: '/systemManage',
    //   name: 'systemManage',
    //   component: systemManage,
    // },
    ]

});
