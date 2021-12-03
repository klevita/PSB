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
                    "Отметка о выполнении"
                ],
                isChecked: 0,
                headr: "Подписание трудового договора",
                imgs: [
                    "pen.png",

                ]
            },
            {
                id:2,
                txt: [
                    "Заполняется на портале"
                ],
                isChecked: 0,
                headr: "Увлечения",
                imgs: [
                    "pen.png",
                ]
            },
            {
                id:3,
                txt: [
                    "Ссылка на ресурс",
                    "Отметка новым сотрудникам",
                ],
                isChecked: 0,
                headr: "Изучение процесса работы",
                imgs: [
                    "chain.png",
                ]
            },
            {
                id:4,
                txt: [
                    "Опроc"
                ],
                isChecked: 0,
                headr: "Опрос по изученному материалу",
                imgs: [
                    "note.svg",

                ]
            },
            {
                id:5,
                txt: [
                    "Ссылка на ресурс"
                ],
                isChecked: 0,
                headr: "Возможности, предоставляемые банком",
                imgs: [
                    "chain.png",

                ]
            },
            {
                id:6,
                txt: [
                    "Ссылка на ресурс"
                ],
                isChecked: 0,
                headr: "Эксплуатационная документация",
                imgs: [
                    "chain.png",

                ]
            },
            {
                id:7,
                txt: [
                    "Встреча",
                    "e-mail",

                ],
                isChecked: 0,
                headr: "План на испытательный срок",
                imgs: [
                    "chain.png",
                    "people.png",

                ]
            },
            {
                id:8,
                txt: [
                    "ссылка на ресурс"
                ],
                isChecked: 0,
                headr: "Что требуется от тебя",
                imgs: [
                    "chain.png",

                ]
            },
            {
                id:9,
                txt: [
                    "ссылка на ресурс"
                ],
                isChecked: 0,
                headr: "Правила героев ПСБ",
                imgs: [
                    "chain.png",

                ]
            },
            {
                id:10,
                txt: [
                    "ссылка на ресурс"
                ],
                isChecked: 0,
                headr: "Что тебе доступно в банке",
                imgs: [
                    "chain.png",

                ]
            }
        ],
    },
    mutations:{
        setUser (state,user) {
            state.user=user;
        },
        setC(state){
            state.qCards =[
                {
                    id:1,
                    txt: [
                        "Отметка о выполнении"
                    ],
                    isChecked: 0,
                    headr: "Подписание трудового договора",
                    imgs: [
                        "pen.png",

                    ]
                },
                {
                    id:2,
                    txt: [
                        "Заполняется на портале"
                    ],
                    isChecked: 0,
                    headr: "Увлечения",
                    imgs: [
                        "pen.png",
                    ]
                },
                {
                    id:3,
                    txt: [
                        "Ссылка на ресурс",
                        "Отметка новым сотрудникам",
                    ],
                    isChecked: 0,
                    headr: "Изучение процесса работы",
                    imgs: [
                        "chain.png",
                    ]
                },
                {
                    id:4,
                    txt: [
                        "Опроc"
                    ],
                    isChecked: 0,
                    headr: "Опрос по изученному материалу",
                    imgs: [
                        "note.svg",

                    ]
                },
                {
                    id:5,
                    txt: [
                        "Ссылка на ресурс"
                    ],
                    isChecked: 0,
                    headr: "Возможности, предоставляемые банком",
                    imgs: [
                        "chain.png",

                    ]
                },
                {
                    id:6,
                    txt: [
                        "Ссылка на ресурс"
                    ],
                    isChecked: 0,
                    headr: "Эксплуатационная документация",
                    imgs: [
                        "chain.png",

                    ]
                },
                {
                    id:7,
                    txt: [
                        "Встреча",
                        "e-mail",

                    ],
                    isChecked: 0,
                    headr: "План на испытательный срок",
                    imgs: [
                        "chain.png",
                        "people.png",

                    ]
                },
                {
                    id:8,
                    txt: [
                        "ссылка на ресурс"
                    ],
                    isChecked: 0,
                    headr: "Что требуется от тебя",
                    imgs: [
                        "chain.png",

                    ]
                },
                {
                    id:9,
                    txt: [
                        "ссылка на ресурс"
                    ],
                    isChecked: 0,
                    headr: "Правила героев ПСБ",
                    imgs: [
                        "chain.png",

                    ]
                },
                {
                    id:10,
                    txt: [
                        "ссылка на ресурс"
                    ],
                    isChecked: 0,
                    headr: "Что тебе доступно в банке",
                    imgs: [
                        "chain.png",

                    ]
                }
            ]
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