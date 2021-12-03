<template>
    <div class="base">

        <div class="header">
            <v-text-field
                    class="search"
                    label="Поиск по базе данных"
                    prepend-inner-icon="mdi-magnify"
                    filled
                    rounded
                    color="#EA5616"
                    background-color="#EFF0F8"
                    dense
            ></v-text-field>
            <div>
                <div>
                    <div style="display:inline-block;margin-top:14px;float:left;margin-right:20px">
                        Мои оценки     &nbsp;&nbsp;&nbsp;  10
                    </div>
                    <div style="display:inline-block;margin-top:-6px;margin-left:-20px">
                        <img :src="require('@/assets/img/star.svg')" style="width:60px;height:60px;">
                    </div>
                </div>
                <div>
                    <div style="display:inline-block;margin-top:14px;float:left">
                        Мои достижения
                    </div>
                    <div style="display:inline-block;margin-top:-6px;margin-left:-20px">
                        <img :src="require('@/assets/img/achieve.svg')" >
                    </div>
                </div>
            </div>
        </div>
        <div class="UserF">
            <div style="display: inline-block">
                <img :src="require('@/assets/img/user.png')">
            </div>
            <div style="display: inline-block">
                <div style="">
                    <div style="color:orange;font-weight: bold;">
                        Иванов Иван Иванович
                    </div>
                    <div style="color:orange;">
                        Главный Специалист по работе с клиентами
                    </div>
                    <div style="color: #292b61;">
                        Группа внутренних коммункаций и развития корпоративной культуры
                    </div>
                </div>

            </div>

            <div style="display: inline-block;float:right;">
                <div style="margin-top:10px">
                    <div style="display:inline-block;">
                        <img :src="require('@/assets/img/phone.svg')" >
                    </div>
                    <div style="display:inline-block;">
                        77777777
                    </div>
                </div>
                <div style="margin-top:10px">
                    <div style="display:inline-block;">
                        <img :src="require('@/assets/img/strange_phone.svg')" >
                    </div>
                    <div style="display:inline-block;">
                        77777777
                    </div>
                </div>
                <div style="margin-top:10px">
                    <div style="display:inline-block;">
                        <img :src="require('@/assets/img/mail.svg')" >
                    </div>
                    <div style="display:inline-block;">
                        {{user1[0]}}
                    </div>
                </div>
                <div style="margin-top:10px">
                    <div style="display:inline-block;">
                        <img :src="require('@/assets/img/loop.svg')" >
                    </div>
                    <div style="display:inline-block;">
                        Мои достижения
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import UserApiService from "@/services/UserApiService";

    export default {
        name: "Home",
        data: () => ({
            userData: null,
        }),
        async mounted() {
            this.userData = await UserApiService.getById();
        },
        created() {

        },
        methods: {
            dropUser() {
                this.$store.commit('dropUser');
            },
            setUser() {
                this.$store.commit('setUser');
            }
        },
        computed: {
            user1() {
                if(this.$store.state.user){
                    return [this.$store.state.user.email,this.$store.state.user.passwrd]
                }
                return ["email","lol"]
            }
        }
    }
</script>

<style scoped>
    .header {
        color: #292b61;
        padding-top:20px;
        padding-right:20px;
        padding-left:150px;
        background-image: url("../assets/img/Header.svg");
        width: 100%;
        height: 200px;
        margin-bottom:-8px;
    }

    .UserF {
        padding-right:200px;
        padding-top:14px;
        background-color:#eff0f8;
        height:200px;
    }

    .search {
        float: right;
    }

</style>