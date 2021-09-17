import Vue from "vue";
import App from "./App.vue";

import 'bootstrap/dist/css/bootstrap.css';

import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/scss/font-awesome.scss';

import '../src/sass/app.scss';


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
