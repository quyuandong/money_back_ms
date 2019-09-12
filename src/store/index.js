import Vue from 'vue'
import Vuex from 'vuex'
// import getters from "./getters"
// import mutations from "./mutations"
// import actions from "./actions"

Vue.use(Vuex);

const types = {
  set_is_aut: "set_is_aut", //是否认证通过
  set_user: "set_user",   //用户信息
};
//得到当前的状态
const getters = {
  isAutnenticated: state =>state.isAutnenticated, //返回当前是否认证通过的信息
  user: state => state.user
};

//修改当前的状态
const mutations = {
  [types.set_is_aut](state,isAutnenticated){
    if(isAutnenticated){
      state.isAutnenticated = isAutnenticated;
    } else {
      state.isAutnenticated = false;
    }
  },
    [types.set_user](state, user) {
        if (user)
            state.user = user;
        else
            state.user = {}
    }
};

//异步修改当前的数据的状态
const actions = {
  setIsAutnenticated:({commit},isAut)=>{
    commit(types.set_is_aut,isAut);
  },
    setUser: ({commit},user)=>{
      commit(types.set_user,user);
    },
    clearCurrentState: ({commit})=>{
      commit(types.set_is_aut,false);
      commit(types.set_user,null);
    }
};


export default new Vuex.Store({
  state: {  //项目中的状态
    isAutnenticated: false, //是否认证
      user: {},   //用于存储用户信息
  },
    getters,
    mutations,
    actions,
});

