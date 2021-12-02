import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';
Vue.use(Vuex);
const vuexPersistence = new VuexPersistence({
    storage: window.localStorage,
});
export default new Vuex.Store({
    state: {
        user: null,
        navigation: { path: '/home' }
    },
    mutations:{
        setUser (state,user) {
            state.user=user;
        },
        dropUser(state){
            state.user=null;
        }
    },
    plugins: [vuexPersistence.plugin]
})