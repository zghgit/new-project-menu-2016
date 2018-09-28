<template>
    <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="widget">
            <i class="el-icon-star-on"></i>
            <span>工具</span>
            <i class="el-icon-arrow-down"></i>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {

            };
        },
        methods: {

        },
    }
</script>
<style lang="scss" scoped>
    .breadcrumb {
        margin: 20px 20px 0 20px;
        background-color: #ffffff;
        height: 38px;
        line-height: 38px;
        position: relative;
        .el-breadcrumb {
            line-height: 38px;
            margin-left: 15px;
        }
        .widget {
            width: 107px;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            background-color: #44b6ae;
            font-size: 12px;
            color: #ffffff;
            cursor: pointer;
            span {
                margin-left: 15px;
                margin-right: 5px;
            }
            i {
                margin-left: 10px;
            }
        }
    }
</style>