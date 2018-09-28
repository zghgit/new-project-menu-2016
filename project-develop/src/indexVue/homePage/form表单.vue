
<!--首页 -->
<template>
    <div class="lists2">
        <h1>首页</h1>
            <el-form ref="formRules" :model="form" :rules="rules" :inline="true">
                <el-form-item prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item prop="age" ref="ageForm">
                    <el-input v-model="form.age"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="validate">验证</el-button>
                    <el-button type="primary" @click="cancelFieldValidate">取消</el-button>
                </el-form-item>
            </el-form>  
    </div>
</template>
<script>
    //    import ii from '@'
//    import echartsData from 'echarts';
    export default {
        name:'lists2',
        props:[],
        components:{},
        data () {
            return {
                formRules: '',
                form: {
                    name: '',
                    age: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入姓名！', trigger: 'blur' }
                    ],
                    age: [
                        { required: true, message: '请输入年龄！', trigger: 'blur' }
                    ]
                }



        };
        },
        methods: {
            validate () {
                this.$refs.formRules.validate(valid => {
                    if (valid) {
                        this.$message.success('(^o^)~ 验证成功！')
                    } else {
                        this.$message.error('-_- 验证失败！')
                    }
                })
            },
            cancelFieldValidate () {
                this.$refs['ageForm'].clearValidate() // 清除年龄的验证
            }
        },
        watch:{},
        created(){},
        mounted(){

        },
    };

</script>
<style  lang="scss" scoped>

</style>


