// /* eslint-disable no-inline-comments */
//
//
// // import Vue from 'vue';
// // import VueRouter from 'vue-router';
// // import HomePage from 'homePage/index'
// // import AlarmMonitor from 'alarmMonitor/index'
// //
// //
// //
// // Vue.use(VueRouter);
// //
// // let IndexChildren = [
// //   HomePage,
// //   AlarmMonitor
// // ]
// //
// //
// // const router = new VueRouter ({
// //   routes: [
// //     {
// //       path:'/index',
// //       name:'Index',
// //       redirect:'/HomePage',
// //       children:IndexChildren
// //     }
// //   ]
// // })
// //
// //
// // export default router;
//
//
//
//
//
//
//
//
//
//
//
//
// import Vue from 'vue';
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
//
// import AlarmMonitorRouter from '../router/alarmMonitor/index'
// import alarmManageRouter from '../router/alarmManage/index'
// import homePage from '../indexVue/homePage/homePage.vue';                         // 1首页
// import alarmMonitor from '../indexVue/alarmMonitor/alarmMonitor.vue';           // 2预警监控
// import earlyWarningList from '../indexVue/alarmMonitor/earlyWarningList.vue';  // 预警列表
// import earlyWarningRadar from '../indexVue/alarmMonitor/earlyWarningRadar.vue'; // 预警雷达(T)
//
// import alarmManage from '../indexVue/alarmManage/alarmManage.vue';              // 3市场运行监测
// import marketSupervise from '../indexVue/marketSupervise/marketSupervise.vue'; // 4分析工具
// import publicSupervise from '../indexVue/publicSupervise/publicSupervise.vue'; // 5监察任务
// import analysisTool from '../indexVue/analysisTool/analysisTool.vue';          // 6分析工具
// import superviseTask from '../indexVue/superviseTask/superviseTask.vue';       // 7业务审计
// import knowledgeBase from '../indexVue/knowledgeBase/knowledgeBase.vue';       // 8系统管理
// import businessAudit from '../indexVue/businessAudit/businessAudit.vue';       // 9监督知识库
// import workStatistics from '../indexVue/workStatistics/workStatistics.vue';    //10
// import systemManage from '../indexVue/systemManage/systemManage.vue';           //11
//
//
// export default new VueRouter({
//   mode: 'hash',
//   routes: [
//     AlarmMonitorRouter,
//     {
//       path: '/',
//       name:'homePage',
//       component: homePage,
//
//     },
//     {
//       path: '/homePage',
//       name:'homePage',
//       component: homePage,
//     },
//     // {
//     //   AlarmMonitorRouter
//     // },
//     {
//       path: '/alarmMonitor',
//       name: 'alarmMonitor',
//       component: alarmMonitor,
//     },
//     {
//       path: '/earlyWarningList',
//       name: 'earlyWarningList',
//       component: earlyWarningList,
//     },
//     {
//       path: '/earlyWarningRadar',
//       name: 'earlyWarningRadar',
//       component: earlyWarningRadar,
//     },
//     {
//       path: '/alarmManage',
//       name: 'alarmManage',
//       component: alarmManage,
//       children:alarmManageRouter
//     },
//     {
//       path: '/marketSupervise',
//       name: 'marketSupervise',
//       component: marketSupervise,
//     },
//     {
//       path: '/publicSupervise',
//       name: 'publicSupervise',
//       component: publicSupervise,
//     },
//     {
//       path: '/analysisTool',
//       name: 'analysisTool',
//       component: analysisTool,
//     },
//     {
//       path: '/superviseTask',
//       name: 'superviseTask',
//       component: superviseTask,
//     },
//     {
//       path: '/knowledgeBase',
//       name: 'knowledgeBase',
//       component: knowledgeBase,
//     },
//     {
//       path: '/businessAudit',
//       name: 'businessAudit',
//       component: businessAudit,
//     },
//     // {
//     //   path: '/workStatistics',
//     //   name: 'workStatistics',
//     //   component: workStatistics,
//     // },
//     // {
//     //   path: '/systemManage',
//     //   name: 'systemManage',
//     //   component: systemManage,
//     // },
//     ]
//
// });
