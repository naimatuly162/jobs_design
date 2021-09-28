import "bootstrap";
import Vue from "vue";
import App from "./App.vue";
//import  'vue-breakpoints/dist/vue-breakpoints';
 import 'bootstrap/dist/css/bootstrap.css';

import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/scss/font-awesome.scss';

import './sass/app.scss';

import router from "./routes";

Vue.config.productionTip = false;

new Vue({
    router,
  render: (h) => h(App),
}).$mount("#app");
