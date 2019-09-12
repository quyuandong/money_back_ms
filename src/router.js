import Vue from 'vue'
import Router from 'vue-router'
import Index from "./views/Index"
import Register from "./views/Register"
import NotFind from "./views/404"
import Login from "./views/Login"
import Home from "./views/Home"
import InfoShow from "./views/InfoShow"
import FoundList from "./views/FoundList"

Vue.use(Router);

//基础跳转的路由
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: "/",
          redirect: "/index",
      },
      {
          path: "/index",
          name: "index",
          component: Index,
          children: [
              {path:"",component:Home},
              {path:"/home",name:"home",component:Home},
              {path:"/infoShow",name:"infoShow",component:InfoShow},
              {path:"/foundList",name:"foundList",component:FoundList},
          ]
      },
      {
          path: "/register",
          name: "register",
          component: Register,
      },
      {
          path: "/login",
          name: "login",
          component: Login,
      },
      {
          path: "*",
          component: NotFind,
      }
  ]
});

//添加路由守卫
router.beforeEach((to,from,next)=>{
    const isLogin = !!localStorage.eleToken;
    if(to.path == "/login" || to.path == "/register"){
        next();
    } else {
        isLogin ? next() : next("/login");
    }
    
});
export default router;
