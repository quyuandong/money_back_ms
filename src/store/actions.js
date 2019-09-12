export default {
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
}