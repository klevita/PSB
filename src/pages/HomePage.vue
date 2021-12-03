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
                    <!--<div style="display:inline-block;margin-top:14px;float:left">
                        Мой рейтинг    10
                    </div>
                    <div style="display:inline-block;margin-top:-6px;margin-left:-20px">

                    </div>-->
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
                return this.$store.state.user;
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
    }

    .base {

    }

    .search {
        float: right;
    }

</style>