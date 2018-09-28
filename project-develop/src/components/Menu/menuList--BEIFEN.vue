<!--菜单列表-->
<template>

    <div class="menu-list">
        <h3 style="margin: 20px; color: #fff">菜单</h3>
        <el-card>
            <el-row>
                <el-col >
                    <el-tree
                        :data="data"
                        :props="defaultProps"
                        accordion
                        @node-click="handleNodeClick">
                    </el-tree>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script>
    //    import ii from '@'
    export default {
        name:'',
        props:[],
        components:{},
        data () {
            return {
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        href:'homePage'

                    },{
                        label: '二级 1-1',
                    },{
                        label: '二级 1-1',
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                    }, {
                        label: '二级 2-2',
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            }
            },
        watch:{},
        created(){},
        mounted(){},
    };

</script>
<style  lang="scss" scoped>
    .menu-list {
        position: fixed;
        top: 0;
        width: 200px;
        height: 100%;
        background: #424f63;
    }
</style>
