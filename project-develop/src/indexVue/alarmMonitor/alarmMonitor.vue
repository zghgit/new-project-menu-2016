<template>
    <!--预警监控-->
    <div class="lists2">
        <breadcrumb :breadcrumbList="breadcrumbItems"></breadcrumb>
        <div style="margin: 30px 0">

        </div>

    </div>
</template>
<script>
    import breadcrumb from '../../components/breadCrumbs/breadCrumbs_new.vue';   // 面包屑组件

    export default {
        name:'lists2',
        props:[],
        components:{
            breadcrumb
        },
            data () {
            return {
                // 面包屑
                breadcrumbItems:[
                    {
                        router:'/alarmMonitor',
                        label:'预警监控'
                    },
                    {
                        router:'/monitor1',
                        label:'monitor1'
                    },
                    {
                        router:'/monitor2',
                        label:'monitor2'
                    },
                    {
                        router:'/monitor3',
                        label:'monitor3'
                    },
                    {
                        router:'/monitor4',
                        label:'monitor4'
                    },
                    {
                        router:'/monitor5',
                        label:'monitor5'
                    },
                    {
                        router:'/monitor6',
                        label:'monitor6'
                    },
                    {
                        router:'/monitor7',
                        label:'monitor7'
                    },
                    {
                        router:'/monitor8',
                        label:'monitor8'
                    },
                    {
                        router:'/monitor9',
                        label:'monitor9'
                    },
                    {
                        router:'/monitor10',
                        label:'monitor10'
                    },
                ],
            };
        },
        methods: {

        },
        watch:{},
        created(){},
        mounted(){},
    };

</script>
<style  lang="scss" scoped>

</style>