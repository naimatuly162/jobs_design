
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "./components/Main";
import Career from "./components/pages/Career";

Vue.use(VueRouter)

const routes = [
    {
        path: '/', name: 'Main', component: Main
    },
    {
        path: '/career', name: 'Career', component: Career
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router