<template>
    <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
            <el-breadcrumb-item
            v-for="(item, index) in breadcrumbList"
            :to="{path:item.router}"
            :key="index">
                {{item.label}}
            </el-breadcrumb-item>

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
        props:['breadcrumbList'],

        data() {
            return {

            };
        },
        methods: {

        },
    }
</script>
<style lang="scss" scoped>
    .el-breadcrumb__item {
        /deep/ .el-breadcrumb__separator {
            color: #7b8fb9;
        }
    }
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