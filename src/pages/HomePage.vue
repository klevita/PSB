<template>
    <div class="base">
        
     <div class="header"> 
         <img :src="require('@/assets/img/Header.svg')" style= "width:100%">
    </div>
    <div class="d-flex">
        <div> <img :src="require('@/assets/img/achieve.svg')" style= "width:100px"> </div>
        <div>Мои достижения</div>
        </div>
        <div class="d-flex align-center">
        <img :src="require('@/assets/img/Star1.svg')">
        <div>10</div>
        </div>
    <div class="search">
           <v-text-field
            label="Поиск по базе данных"
            prepend-inner-icon="mdi-magnify"
            filled
            rounded
            color="#EA5616"
            background-color="#EFF0F8"
            dense
          ></v-text-field>
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
   
.base{
   background:#EFF0F8;
   min-height: 100vh;
   position: absolute;

}

.search{
    float: right;
    position: relative;
    top: -148px;
    left: -30px;
    width: 460px;

}

</style>