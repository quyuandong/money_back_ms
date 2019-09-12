import axios from "axios";
import { Message,Loading} from "element-ui";
import router from "./router";

let loading;    //定义loading变量

//开始加载的时候
function startLoading( ) {
    loading = Loading.service({
        lock: true,
        text: "拼命加载中...",
        background: "rgba(0,0,0,.7)",
    })
}

//加载结束
function endLoading() {
    loading.close();
}

//请求拦截
axios.interceptors.request.use(request=>{
    //加载
    startLoading();
    
    //在请求的时候，如果存在token,则将值保存到请求头里面
    if(localStorage.eleToken){
        request.headers.Authorization = localStorage.eleToken;
    }
    return request;
},error => {
    //错误提醒
    return Promise.reject(error);
});


//响应拦截
axios.interceptors.response.use(response =>{
    endLoading();
    return response;
},error => {
    //错误提醒
    endLoading();
    Message.error(error.response.data);
    
    //响应拦截，401 token过期处理
    const { status } = error.response;
    if(status == 401){
        Message.error("token值无效，请重新登录");
        //清除token
        localStorage.removeItem("eleToken");
        //页面跳转
        router.push("/login");
    }
    return Promise.reject(error)
});

export  default axios;