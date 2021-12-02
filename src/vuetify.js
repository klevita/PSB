import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#1492E6"
            }
        }
    },
    lang: {
        current: "ru"
    },
    icons: {
        iconfont: "md"
    }
});
