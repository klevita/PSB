import Vue from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import router from "./router";
import store from './store/store'
import 'es6-promise/auto'

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app');
