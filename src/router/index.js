import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    // 首页
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/HomePage')
    },

    // 关于青木
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/about/About')
    },
     // 风控案例
     {
        path: '/riskControl',
        name: 'RiskControl',
        component: () => import(/* webpackChunkName: "riskControl" */ '@/views/riskControl/RiskControl')
    },

      // 专项方案
      {
        path: '/scheme',
        name: 'Scheme',
        component: () => import(/* webpackChunkName: "scheme" */ '@/views/scheme/Scheme')
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;