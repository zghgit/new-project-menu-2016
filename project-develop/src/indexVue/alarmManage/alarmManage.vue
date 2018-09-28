<!--预警管理-->
<template>
   <div class="list3">
       <h1>预警管理</h1>
       <breadcrumb :breadcrumbList="breadcrumbItems"></breadcrumb>

       <ul>
           <li id="" v-for="(entity,index) in entities" @click="handleTit(index)">
               <a>{{entity.text}}
                   <b
                   :class="{'checked':allState[index]}"
                   @click.stop="handleTitAll(index)">ss</b>
               </a>
               <ul v-show="entitiesState[index]" @click.stop>
                   <li v-for="(list,listIndex) in entity.child"
                       @click="childHandle(listIndex,index)">
                       <a :class="{'checked':childState[index][listIndex]}"></a>
                       <span>{{list.text}}</span>
                   </li>
               </ul>
           </li>
       </ul>

   </div>
</template>
<style lang="scss" scoped>

</style>
<script>
    import breadcrumb from '../../components/breadCrumbs/breadCrumbs_new.vue';   // 面包屑组件

    export default{
        name: 'menu',
        props:[],
        components:{
            breadcrumb
        },
        data () {
            return {
                // 面包屑
                breadcrumbItems:[
                    {
                        router:'/test1',
                        label:'test1'
                    },{
                        router:'/test2',
                        label:'test2'
                    },{
                        router:'/test3',
                        label:'test3(T)'
                    },{
                        router:'/alarmMonitor',
                        label:'alarmMonitor(T)'
                    }
                ],
                entities: [
                    {text: '人员组成', child: [{text: '擎天柱'}, {text: '大黄蜂'}]},
                    {text: '项目分类', child: [{text: '登月计划'}, {text: '星际穿越'}]},
                    {text: '合作机构', child: [{text: '航空航天局'}, {text: '超物质研究院'}]},
                ],
                entitiesState: [],
                childState: [],
                allState: [],
                listLen: 0
            }
        },
            watch:{

            },
            methods:{
                handleTit(i){//点击父级
                    let state=this.entitiesState;
                    this.$set(state,i,!state[i]);
                    for(let a in this.entitiesState){
                        if(a!=i){
                            this.$set(state,a,false);
                        }
                    }//增加判断，改变同级的展开状态
                },
                childHandle(i,pi){//单选
                    let child=this.childState;
                    if(child[pi][i]) this.allState[pi]=false;
                    this.$set(child[pi],i,!child[pi][i]);
                    if(this.childState[pi][i]) this.checkList(this.childState[pi],pi);
                },
                handleTitAll(pi){//全选
                    let child=this.childState[pi],
                        allState=this.allState;
                    for(let i=0;i<this.listLen;i++){
                        this.$set(child,i,!allState[pi]);
                    }
                    this.$set(allState,pi,!allState[pi]);
                },
                checkList(child,pi){
                    let allState=this.allState,
                        len=this.entities[pi].child.length;
                    for(let i=0;i<len;i++){
                        if(!child[i]) return;
                    }
                    this.$set(allState,pi,true);
                }
            },
            created(){
                let len=this.entities.length;
                this.listLen=len;
                for(let i=0;i<len;i++){
                    this.$set(this.childState,i,[])
                }
            }
        }
</script>