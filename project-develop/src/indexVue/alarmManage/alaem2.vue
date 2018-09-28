<template>
    <!--预警雷达-->
    <div class="alaem2">
        <breadcrumb :breadcrumbList="breadcrumbItems"></breadcrumb>
        <div style="margin: 30px 0">
            <el-button type="primary"
                       size="small" style="float: left"
                       @click="windowOpen">
                windoOpen打开新页面
            </el-button>
        </div>
    </div>
</template>

<script>
    import breadcrumb from '../../components/breadCrumbs/breadCrumbs_new.vue';  // 面包屑组件
    export default {
        name:'alaem2',
        props:[],
        components:{
            breadcrumb
        },
        data() {
            return {
                // 面包屑
                breadcrumbItems:[
                    {
                        router:'/setList',
                        label:'设置列表(T)'
                    }
                ]
            }
        },
        watch:{},
        mounted:function () {

        },
        methods:{
            windowOpen:function () {
                alert(11)
            }
        },


    }
</script>

<style lang="scss" scoped>
    .alaem2{

    }

</style>

