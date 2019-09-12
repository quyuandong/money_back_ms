import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
//导入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "./http"

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
