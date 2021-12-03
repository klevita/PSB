<template>
    <div class="base">
        <div class="UserF">
            <div style="display: inline-block;float:left;margin-left:200px">
                <img :src="require('@/assets/img/user.png')">
            </div>
            <div style="display: inline-block;float:left;margin-top:20px">
                <div style="margin-left:40px">
                    <div style="color:#EA5616;font-weight: bold;font-size:28px;margin-bottom:10px">
                        Иванов Иван Иванович
                    </div>
                    <div style="color:#EA5616;font-size:20px;margin-bottom:10px">
                        Главный Специалист по работе с клиентами
                    </div>
                    <div style="color: #292b61;font-size:16px;margin-bottom:10px">
                        Группа внутренних коммункаций и развития корпоративной культуры
                    </div>
                </div>
            </div>
            <div class="icon-group" style="display: inline-block;float:right; ">
                <div style="margin-top:10px">
                    <div class="typcInB" style="margin-right:15px">
                        <img :src="require('@/assets/img/phone.svg')">
                    </div>
                    <div style="display:inline-block;">
                        77777777
                    </div>
                </div>
                <div style="margin-top:10px">
                    <div class="typcInB" style="margin-left: 3px">
                        <img :src="require('@/assets/img/strange_phone.svg')">
                    </div>
                    <div style="display:inline-block;">
                        77777777
                    </div>
                </div>
                <div style="margin-top:10px">
                    <div class="typcInB">
                        <img :src="require('@/assets/img/mail.svg')">
                    </div>
                    <div style="display:inline-block;">
                        {{user1[0]}}
                    </div>
                </div>
                <div style="margin-top:10px">
                    <div class="typcInB" style="margin-left: 2px;margin-right:20px">
                        <img :src="require('@/assets/img/loop.svg')">
                    </div>
                    <div style="display:inline-block;">
                        Мои достижения
                    </div>
                </div>
            </div>
        </div>


        <div class="mainP">
            <div class="VL">
                <div class="mainHead">
                    <div class="BigColor">
                        <div class="typcInB">
                            Курс обучения
                        </div>
                        <div class="typcInB" style="float:right">
                            Рабочие материалы
                        </div>
                    </div>
                    <div class="SmColor">
                        <div class="typcInB">
                            Пройдите обучение, для того, чтобы успешно завершить<br> испытательный период
                        </div>
                        <div class="typcInB" style="float:right">
                            Данные разделы помогут Вам разобраться в работе
                        </div>
                    </div>
                </div>
                <div class="mainBody">
                    <div class="leftMainB">
                        <div class="BigColor"
                             style="text-align: center;background-color: #eff0f8;border-radius:0 0 24px 24px">
                            Блок задач на сегодня
                        </div>
                        <div>
                            <quest-card
                                    v-for="card in qCards"
                                    v-bind:CardData="card"
                                    v-on:click="handlerClick(card)"
                                    v-on:check="handlerCheck(card)"
                                    v-bind:key="card.id"
                                    v-show="!card.isChecked"
                            />
                        </div>
                        <div>
                            <quest-card
                                    style="opacity: 60%"
                                    v-for="card in qCards"
                                    v-bind:CardData="card"
                                    v-on:click="handlerClick(card)"
                                    v-on:check="handlerCheck(card)"
                                    v-bind:key="card.id"
                                    v-show=" card.isChecked"
                            />
                        </div>
                    </div>
                    <div class="rightMainB" style="float:right">

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserApiService from "@/services/UserApiService";
    import questCard from "@/components/questCard";

    export default {
        name: "Home",
        components: {
            questCard
        },
        data: () => ({
            userData: null,
            qCards:[]
        }),
        async mounted() {
            this.userData = await UserApiService.getById();
        },
        created() {
            this.qCards=this.$store.state.qCards
        },
        methods: {
            handlerCheck(v) {
                if(v.isChecked){
                    v.isChecked = false;
                }else{
                    v.isChecked = true;
                }
                this.$store.commit('setCard',v);
                console.log(this.$store.state.qCards)
            },
        },
        computed: {
            user1() {
                if (this.$store.state.user) {
                    return [this.$store.state.user.email, this.$store.state.user.passwrd]
                }
                return ["email", "lol"]
            },
            // isCh() {
            //     return this.qCard.isChecked
            // },
            kst(){
                return this.$store.state.arf
            }
        },
        watch: {
            isCh: function () {
                alert(this.qCard.isChecked)
            }
        }
    }
</script>

<style scoped>
    .BigColor {
        color: #EA5616;
        font-weight: bold;
        font-size: 28px
    }

    .MidColor {
        color: #EA5616;
        font-size: 20px
    }

    .SmColor {
        color: #292b61;
        font-size: 16px
    }

    .mainP {
        padding-top: 30px;
        box-shadow: inset 0 5px 10px #aca5a5;
        background-color: #eff0f8;
        font-family: "gilroy-reguar";
        padding-left: 170px;
        padding-right: 200px;
    }

    .typcInB {
        display: inline-block;
        margin-right: 20px;

    }

    .icon-group {
        font-family: "gilroy-reguar";
        font-size: 20px;
        color: #292b61;
    }

    .VL {
        padding-left: 30px;
        border-left: 2px solid #98a0ce;
    }

    .leftMainB {
        background-color: #dee1f8;
        display: inline-block;
        width: 72%;
    }

    .rightMainB {
        display: inline-block;
        width: 28%;
    }

    .UserF {
        padding-right: 220px;
        padding-top: 14px;
        background-color: #eff0f8;
        height: 200px;
    }


</style>