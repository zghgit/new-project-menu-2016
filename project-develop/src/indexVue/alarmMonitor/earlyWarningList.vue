<template>
    <!--预警列表-->
    <div class="earlyWarningList">
        <breadcrumb :breadcrumbList="breadcrumbItems"></breadcrumb>
        <div style="margin: 30px 0">
            {{title}} <br />
            1111ewnwbfbsadfbasnmasbdsa
            <b>
                {{datas}}
            </b>
        </div>
    </div>
</template>

<script>
    import breadcrumb from '../../components/breadCrumbs/breadCrumbs_new.vue';  // 面包屑组件
    export default {
        name:'earlyWarningList',
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
                    },{
                        router:'/earlyWarningList',
                        label:'预警列表'
                    },{
                        router:'/earlyWarningRadar',
                        label:'预警雷达(T)'
                    }
                ],
                title:'',
                datas:[],
            }
        },
        watch:{},
        mounted:function () {
//            *****************************
//            sessionStorage.valueOf();//获取全部数据

            //接收跳转过来的参数，对数据处理
            let dataObj = JSON.parse(sessionStorage.getItem('data'));  //获取指定键名数据
            let objData = JSON.parse(dataObj.data);
            this.datas  = objData;  // 数据
            this.title = dataObj.title;// 标题

//            sessionStorage.removeItem(name); //删除指定键名数据
//            sessionStorage.clear();//清空缓存数据：localStorage.clear();
//            *******************************
        },
        methods:{},


    }
</script>

<style lang="scss" scoped>
    .earlyWarningList{

    }

</style>

