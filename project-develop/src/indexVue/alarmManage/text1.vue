<template>
    <!--预警雷达-->
    <div class="text1">
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
        name:'text1',
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
                let objData = [
                    {"sta":"2014-03-30"},
                    {"sts":"2014-05-30"},

                ];
                this.fnUriData('earlyWarningList',{    // marketSupervise
                    data:JSON.stringify(objData),
                    title:'月超链接明细表'
                });

//                window.open(window.location.origin + '/a/b/c');
//                window.open(window.location.origin ,'toolbar=yes, width=1300, height=900');
//                window.open('#/' + 'marketSupervise');
//                window.open(href, '_blank');
            },
            // 封装open 新窗口，带参跳转页面 url 路径； data 跳转带的参数
            fnUriData:function (url, data) {
                // 如果有数据，JSON 转换跳转
                if(data){
                    sessionStorage.setItem('data', JSON.stringify(data))   //存储数据
                }
//                window.open('#/' + url);  // 打开新的页面
                window.location.href('#/' + url);  // 打开新的页面
            }
        },


    }
</script>

<style lang="scss" scoped>
    .text1{

    }

</style>

