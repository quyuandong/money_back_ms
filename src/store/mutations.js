
export default {
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
}