<template>
    <div>
        <div class="fontTest">HomePage</div>
        <div class="fontTest2">HomePage</div>
        <div>{{this.user1}}</div>
        <v-btn v-on:click="this.setUser">
            set user
        </v-btn>
        <v-btn v-on:click="this.dropUser">
            drop user
        </v-btn>
        <img :src="require('@/assets/img/LOGO.svg')">
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
    .fontTest {
        font-family: "verdana-regular";

    }

    .fontTest2 {
        font-family: "gilroy-regular";

    }

</style>