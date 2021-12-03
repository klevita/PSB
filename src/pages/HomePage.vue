<template>
    <div class="base">
        <div class="UserF">
            <div style="display: inline-block;float:left;margin-left:200px">
                <img :src="require('@/assets/img/user.png')">
            </div>
            <div style="display: inline-block;float:left;margin-top:20px">
                <div style="margin-left:40px">
                    <div style="color:orange;font-weight: bold;font-size:28px;margin-bottom:10px">
                        Иванов Иван Иванович
                    </div>
                    <div style="color:orange;font-size:20px;margin-bottom:10px">
                        Главный Специалист по работе с клиентами
                    </div>
                    <div style="color: #292b61;font-size:16px;margin-bottom:10px">
                        Группа внутренних коммункаций и развития корпоративной культуры
                    </div>
                </div>

            </div>

            <div class="icon-group" style="display: inline-block;float:right; " >
                <div style="margin-top:10px">
                    <div class="typcInB" style="margin-right:15px">
                        <img :src="require('@/assets/img/phone.svg')" >
                    </div>
                    <div style="display:inline-block;">
                        77777777
                    </div>
                </div>
                <div style="margin-top:10px" >
                    <div class="typcInB" style="margin-left: 3px">
                        <img :src="require('@/assets/img/strange_phone.svg')" >
                    </div>
                    <div style="display:inline-block;">
                        77777777
                    </div>
                </div>
                <div style="margin-top:10px">
                    <div class="typcInB">
                        <img :src="require('@/assets/img/mail.svg')" >
                    </div>
                    <div style="display:inline-block;">
                        {{user1[0]}}
                    </div>
                </div>
                <div style="margin-top:10px">
                    <div class="typcInB" style="margin-left: 2px;margin-right:20px">
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
    .typcInB{
        display:inline-block;
        margin-right:20px;

    }
    .icon-group{
        font-family: "gilroy-reguar";
        font-size: 20px;
        color: #292b61;
    }

    .UserF {
        padding-right:200px;
        padding-top:14px;
        background-color:#eff0f8;
        height:200px;
    }


</style>