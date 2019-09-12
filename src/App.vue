<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>


<script>
    import jwt_decode from "jwt-decode";
    export default {
        name: "App",
        //处理刷新时vuex中数据非正常更新问题
        created(){
            if(localStorage.eleToken){
                const decode = jwt_decode(localStorage.eleToken)
                //若正确解析，修改vuex中通过的认证
                this.$store.dispatch("setIsAutnenticated",!this.isEmpty(decode));
                //将返回的个人信息进行保存
                this.$store.dispatch("setUser",decode);
            }
        },
        methods:{
            //判断解析出来的是否为空
            isEmpty(value){
                return(value===undefined || value === null ||
                        (typeof value ==="Object" && Object.keys(value).length ===0) ||
                        (typeof value ==="String" && value.trim().length ===0)
                );
            }
        }
    }
</script>

<style>
    html,body,#app{
        width:100%;
        height: 100%;
    }
</style>