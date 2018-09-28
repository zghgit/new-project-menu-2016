<!--菜单列表-->
<template>
    <aside class="menu-list">
        <div class="menu-logo">
            <img src="../../images/open.jpg" alt="菜单展开" class="logo-open">
            <img src="../../images/hide.jpg" alt="菜单缩小" class="logo-hide">
        </div>
        <ul>
            <li v-for="(menuObj,index) in demoMenuList">
                <span @click="submenu(menuObj,index)">
                    <router-link
                        :to="menuObj.href"
                        v-bind:class="[menuObj.activeHide, {'active':!menuObj.isShow}]" >
                        <i v-bind:class="menuObj.menuIcon"></i>{{menuObj.content}}
                        <span v-bind:class="[menuObj.menuDown, {'overturn':!menuObj.isShow}]"></span>
                    </router-link>
                </span>
                <ul v-bind:class="{'isHides':menuObj.isShow, 'childFirst':!menuObj.isShow}">
                    <li v-for="(menuSecond, index) in menuObj.submenu" v-if="">
                        <router-link
                            :to="menuSecond.href"
                            v-bind:class="{'active':menuSecond.isShow}">{{menuSecond.content}}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default{
        name: 'menu',
        data () {
            return {
                immediately: '',
                menuList: [
                    {
                        href: 'homePage',
                        menuIcon: 'ivu-icon ivu-icon-person',
                        content: '首页',
                        isShow: true,
                    },
                    {
                        href: '',
                        menuIcon: 'ivu-icon ivu-icon-person',
                        menuDown: 'ivu-icon ivu-icon-chevron-down',
                        activeHide:'aa',
                        content: '预警监控',
                        isShow: true,
                        submenu: [
                            {
                                href: 'alarmMonitor',
                                content: '预警监控',
                                active:'active'
                            },{
                                href: 'earlyWarningList',
                                content: '预警列表',
                                active:'active'
                            }, {
                                href: 'earlyWarningRadar',
                                content: '预警雷达(T)',
                                active:'active'
                            },
                        ]
                    },
                    {
                        href: '',
                        menuIcon: 'ivu-icon ivu-icon-speedometer',
                        menuDown: 'ivu-icon ivu-icon-chevron-down',
                        activeHide:'aa',
                        content: '市场运行监测',
                        isShow: true,
                        submenu: [
                            {
                                href: 'alarmManage',
                                content: '证券市场概览',
                                active:'active'
                            },
                            {
                                href: 'alarmManage',
                                content: '证券运行监测',
                                active:'active'
                            },
                            {
                                href: 'alarmManage',
                                content: '分类投资者监测',
                                active:'active'
                            },
                            {
                                href: 'alarmManage',
                                content: '异常波动监测',
                                active:'active'
                            },
                            {
                                href: 'alarmManage',
                                content: '异常交易统计监测',
                                active:'active'
                            },
                            {
                                href: 'alarmManage',
                                content: '专项监测工作',
                                active:'active'
                            },
                            {
                                href: 'alarmManage',
                                content: '市场维稳监控',
                                active:'active'
                            },
                        ]
                    },
                    {
                        href: '',
                        menuIcon: 'ivu-icon ivu-icon-power',
                        activeHide:'aa',
                        menuDown: 'ivu-icon ivu-icon-chevron-down',
                        content: '分析工具',
                        isShow: true,
                        submenu: [
                            {
                                ss:false,
                                href: 'marketSupervise',
                                content: '常规查询',
                                active:'active'
                            },{
                                ss:false,
                                href: 'marketSupervise',
                                content: '自定义查询',
                                active:'active'
                            },{
                                ss:false,
                                href: 'marketSupervise',
                                content: '特定分析工具',
                                active:'active'
                            },{
                                ss:false,
                                href: 'marketSupervise',
                                content: '综合查询',
                                active:'active'
                            }, {
                                ss: false,
                                href: 'marketSupervise',
                                content: '报告生成工具',
                                active: 'active'
                            }
                        ]
                    },
                    {
                        href: '',
                        menuIcon: 'ivu-icon ivu-icon-power',
                        activeHide:'aa',
                        menuDown: 'ivu-icon ivu-icon-chevron-down',
                        content: '监察任务',
                        isShow: true,
                        submenu: [
                            {
                                ss:false,
                                href: 'marketSupervise',
                                content: '监察任务首页',
                                active:'active'
                            },  {
                                ss:false,
                                href: 'marketSupervise',
                                content: '监察任务',
                                active:'active'
                            }
                        ]
                    },
                    {
                        href: '',
                        menuIcon: 'ivu-icon ivu-icon-power',
                        activeHide:'aa',
                        menuDown: 'ivu-icon ivu-icon-chevron-down',
                        content: '业务审计',
                        isShow: true,
                        submenu: [
                            {
                                ss:false,
                                href: 'publicSupervise',
                                content: '操作日志审计',
                                active:'active'
                            },
                        ]
                    },
                    {
                        href: '',
                        menuIcon: 'ivu-icon ivu-icon-power',
                        activeHide:'aa',
                        menuDown: 'ivu-icon ivu-icon-chevron-down',
                        content: '系统管理',
                        isShow: true,
                        submenu: [
                            {
                                ss:false,
                                href: 'analysisTool',
                                content: '模块管理',
                                active:'active'
                            },
                            {
                                ss:false,
                                href: 'analysisTool',
                                content: '用户管理',
                                active:'active'
                            },{
                                ss:false,
                                href: 'analysisTool',
                                content: '其他管理',
                                active:'active'
                            },
                        ]
                    },
                    {
                        href: '',
                        menuIcon: 'ivu-icon ivu-icon-power',
                        activeHide:'aa',
                        menuDown: 'ivu-icon ivu-icon-chevron-down',
                        content: '监督知识库',
                        isShow: true,
                        submenu: [
                            {
                                ss:false,
                                href: 'superviseTask',
                                content: '异常历史库',
                                active:'active'
                            }, {
                                ss:false,
                                href: 'superviseTask',
                                content: '监控历史库',
                                active:'active'
                            },
                        ]
                    },
//                    {
//                        href: '',
//                        menuIcon: 'ivu-icon ivu-icon-power',
//                        activeHide:'aa',
//                        menuDown: 'ivu-icon ivu-icon-chevron-down',
//                        content: '监管知识库',
//                        isShow: true,
//                        submenu: [
//                            {
//                                ss:false,
//                                href: 'knowledgeBase',
//                                content: '监管知识库',
//                                active:'active'
//                            },
//                        ]
//                    },
//                    {
//                        href: '',
//                        menuIcon: 'ivu-icon ivu-icon-power',
//                        activeHide:'aa',
//                        menuDown: 'ivu-icon ivu-icon-chevron-down',
//                        content: '业务审计',
//                        isShow: true,
//                        submenu: [
//                            {
//                                ss:false,
//                                href: 'businessAudit',
//                                content: '业务审计',
//                                active:'active'
//                            },
//                        ]
//                    },
//                    {
//                        href: '',
//                        menuIcon: 'ivu-icon ivu-icon-power',
//                        activeHide:'aa',
//                        menuDown: 'ivu-icon ivu-icon-chevron-down',
//                        content: '工作统计',
//                        isShow: true,
//                        submenu: [
//                            {
//                                ss:false,
//                                href: 'workStatistics',
//                                content: '工作统计',
//                                active:'active'
//                            },
//                        ]
//                    },
//                    {
//                        href: '',
//                        menuIcon: 'ivu-icon ivu-icon-power',
//                        activeHide:'aa',
//                        menuDown: 'ivu-icon ivu-icon-chevron-down',
//                        content: '系统管理',
//                        isShow: true,
//                        submenu: [
//                            {
//                                ss:false,
//                                href: 'systemManage',
//                                content: '系统管理',
//                                active:'active'
//                            },
//                        ]
//                    },
                ]
            }
        },
        methods: {
            submenu: function (menuObj, index) {

                this.immediately = index;
                if (menuObj.isShow === true) {
                    this.menuList.forEach(function (element) {
                        element.isShow = true;
                    });
                    menuObj.isShow = !menuObj.isShow;  //菜单展开
                }
                else {
                    menuObj.isShow = !menuObj.isShow;   // 菜单合上

                }
            },
            s:function (menuSecond){
                console.log(1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .menu-list{
        position: fixed;
        top: 0;
        width: 200px;
        height: 100%;
        background: #424f63;
        z-index: 1;
        >.menu-logo{
            width: 100%;
            height: 86px;
            text-align: center;
            line-height: 86px;

            >.logo-open{
                transition: all .1s;
                height: 56px;
                padding-top: 20px;
            }
            >.logo-hide{
                display: none;
                margin-left: -6px;
            }
        }
        >ul{
            width: 100%;
            font-size: 14px;
            list-style: none;
            padding: 0;
            overflow-x: hidden;
            li{
                a{
                    padding: 8px 10px;
                    line-height: 18px;
                    color: #fff;
                    display: block;
                    transition: background-color .4s;
                    >i{
                        position: relative;
                        top: 3px;
                        margin-left: 9px;
                        margin-right: 14px;
                        width: 18px;
                        height: 18px;
                        background-size: contain!important;
                        display: inline-block;
                        font-size: 18px;
                    }
                    >span{
                        position: absolute;
                        right: 20px;
                        margin-top: 4px;
                        transition: transform .3s;
                        font-size: 15px;
                        &.overturn{
                            transform: rotate(-180deg);
                        }
                    }
                    &:hover {
                        color: #FFF;
                        background-color: #202c37;
                    }
                    &.active{
                        color: #fff;
                        background-color: #00a9e8;
                    }
                }
                >.isHides{
                    display: none;
                    list-style: none;
                }
                >.childFirst{
                    list-style: none;
                    >li {
                        > a {
                            padding: 10px 0 10px 56px;
                            &.actived {
                                color: #FFF;
                                background:  #202c37;
                            }
                        }
                    }
                }
            }
        }
    }
</style>