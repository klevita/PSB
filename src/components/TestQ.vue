<template>
    <div style="text-align: center">
        <div class="MidColor3">{{ret_test.q}}</div>
        <div v-for="item in ret_test.a" :key="item">
            <input
                    style="height:20px;width:20px;margin-top:10px"
                    type="radio"
                    :value="item"
                    name="1"
                    class="SmColor"
                    v-model="ans"
            >
            {{item}}
        </div>
        <btn style="margin-top:10px" color="1" v-on:click="handle" text="Продолжить"/>
    </div>
</template>

<script>
    import btn from "../components/uni-button"

    export default {
        components: {
            btn
        },
        name: "TestQ",
        data: () => ({
            ans: -1
        }),
        props: {
            test: {
                type: Object,
                required: false,
                default: null
            },
            ret: {
                type: String
            }
        },
        computed: {
            ret_test() {
                if (this.test) {
                    return this.test
                }
                return {
                    q: "Какой способ вы выберете, чтобы улучшить коммуникацию в  команде?",
                    a: ["Я буду энтузиастом, чтобы вдохновить команду.", "Я буду барть на себя больше ответственности.", "Я буду регулярно шутить."]
                }
            }
        },
        methods: {
            handle() {
                this.$emit("end",this.ans);
                this.ans=-1;
            }
        }
    }
</script>

<style scoped>
    .MidColor3 {
        color: #292b61;
        font-size: 20px;
    }

    .SmColor {
        text-decoration: underline;
        margin-bottom: 6px;
        color: #292b61;
        font-size: 16px
    }
</style>