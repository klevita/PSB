<template>
    <div class="head">
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
        <div class= "d-flex">
               <a href="/marks" style="color: #292b61; font-family: gilroy-reguar;">
            <div >
                <div style="display:inline-block;margin-top:14px;float:left; font-family: gilroy-reguar; margin-right:20px">
                  Мои оценки     &nbsp;&nbsp;&nbsp;  10
                </div>
                <div style="display:inline-block;margin-top:-6px;margin-left:-20px">
                    <img :src="require('@/assets/img/star.svg')" style="width:60px;height:60px;">
                </div>
            </div>
            </a> 
             <a href="/achieves" style="color: #292b61; font-family: gilroy-reguar;">
            <div>
                <div style="display:inline-block;margin-top:14px;float:left">
                  Мои достижения
                </div>
                <div style="display:inline-block;margin-top:-6px;margin-left:-20px">
                    <img :src="require('@/assets/img/achieve.svg')" >
                </div>
            </div>
            </a> 
        </div>
        <img v-if="currentRoute != '/home'" type="button" :src="require('@/assets/img/Back.svg')" @click="$router.go(-1)">
    </div>
</template>

<script>
    export default {
        name: "headr",
    mounted(){
    },
    computed: {
        currentRoute(){
          this.$router.currentRoute.path
          return window.location.pathname
        }
    }
}

</script>

<style scoped>
    a {  
        color: #292b61;
        text-decoration: none; 
        } 
    .head {
        color: #292b61;
        padding-top:20px;
        padding-right:20px;
        padding-left:150px;
        background-image: url("../assets/img/Header.svg");
        width: 100%;
        height: 200px;
        margin-bottom:-8px;
    }
    .search {
        float: right;
    }
</style>