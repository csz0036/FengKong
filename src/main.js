import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from '@/store/index';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
//样式初始化
import 'normalize.css/normalize.css';

Vue.config.productionTip = false;

Vue.use(Vuex);
new Vue({
    router,
    store: new Vuex.Store({ ...store }),
    render: h => h(App)
}).$mount('#app');
