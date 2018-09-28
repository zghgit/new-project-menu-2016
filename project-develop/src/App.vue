<template>
  <div id="app">
      <!--<div>这里是根文件夹</div>-->
      <!--用户角色-->
      <md-nav></md-nav>
      <!--菜单组件-->
      <md-menu></md-menu>
      <!--右边边框-->
      <div class="routerView">
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
export default {
    name:'app',
    data(){
        return{
            //返回数据
        }
    },
    methods: {
        // 方法(业务逻辑)
        hello(){
//            Message('你好！')
        }
    }
}
</script>
<style>
    .routerView{
        float: left;
        width: calc(100% - 240px);
        border: 1px solid #f0eded;
        border-radius: 5px;
        padding: 20px;
    }
</style>
