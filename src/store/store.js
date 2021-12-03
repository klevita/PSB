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
        navigation: { path: '/home' },
        arf:[0,0,0,0,0,0,0,0,0,0,0,0],
        qCards: [
            {
                id:1,
                txt: [
                    "11111",
                    "22222fasf2",
                    "3333333"
                ],
                isChecked: 0,
                headr: "lagsasgsagl",
                imgs: [
                    "note.svg",
                    "chain.png",

                ]
            },
            {
                id:2,
                txt: [
                    "1112ffw11",
                    "222af22fasf2",
                    "3333wfa333"
                ],
                isChecked: 0,
                headr: "lfl",
                imgs: [
                    "pen.png",
                    "people.png",

                ]
            },
            {
                id:3,
                txt: [
                    "1112ffw11",
                    "222af22fasf2",
                    "3333wfa333"
                ],
                isChecked: 0,
                headr: "lfl",
                imgs: [
                    "pen.png",
                    "people.png",

                ]
            },
            {
                id:4,
                txt: [
                    "1112ffw11",
                    "222af22fasf2",
                    "3333wfa333"
                ],
                isChecked: 0,
                headr: "lfl",
                imgs: [
                    "pen.png",
                    "people.png",

                ]
            },
            {
                id:5,
                txt: [
                    "1112ffw11",
                    "222af22fasf2",
                    "3333wfa333"
                ],
                isChecked: 0,
                headr: "lfl",
                imgs: [
                    "pen.png",
                    "people.png",

                ]
            },
            {
                id:6,
                txt: [
                    "11111",
                    "22222fasf2",
                    "3333333"
                ],
                isChecked: 0,
                headr: "lagsasgsagl",
                imgs: [
                    "note.svg",
                    "chain.png",

                ]
            },
            {
                id:7,
                txt: [
                    "11111",
                    "22222fasf2",
                    "3333333"
                ],
                isChecked: 0,
                headr: "lagsasgsagl",
                imgs: [
                    "note.svg",
                    "chain.png",

                ]
            },
            {
                id:8,
                txt: [
                    "1112ffw11",
                    "222af22fasf2",
                    "3333wfa333"
                ],
                isChecked: 0,
                headr: "lfl",
                imgs: [
                    "pen.png",
                    "people.png",

                ]
            },
            {
                id:9,
                txt: [
                    "1112ffw11",
                    "222af22fasf2",
                    "3333wfa333"
                ],
                isChecked: 0,
                headr: "lfl",
                imgs: [
                    "pen.png",
                    "people.png",

                ]
            },
            {
                id:10,
                txt: [
                    "1112ffw11",
                    "222af22fasf2",
                    "3333wfa333"
                ],
                isChecked: 0,
                headr: "lfl",
                imgs: [
                    "pen.png",
                    "people.png",

                ]
            },
            {
                id:11,
                txt: [
                    "1112ffw11",
                    "222af22fasf2",
                    "3333wfa333"
                ],
                isChecked: 0,
                headr: "lfl",
                imgs: [
                    "pen.png",
                    "people.png",

                ]
            },
            {
                id:12,
                txt: [
                    "11111",
                    "22222fasf2",
                    "3333333"
                ],
                isChecked: 0,
                headr: "lagsasgsagl",
                imgs: [
                    "note.svg",
                    "chain.png",

                ]
            }
        ],
    },
    mutations:{
        setUser (state,user) {
            state.user=user;
        },
        setCard (state,card) {
            for(let i=0;i<12;i++){
                if(card.id === state.qCards[i].id){
                    state.qCards[i] = card;
                    break;
                }
            }
        },
        dropUser(state){
            state.user=null;
        }
    },
    plugins: [vuexPersistence.plugin]
})