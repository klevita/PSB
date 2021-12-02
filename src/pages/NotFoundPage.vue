<template>
    <div class="wrapper">
        <div class="image_404"></div>
        <div>
            <p class="head">Страница не найдена</p>
            <p class="information">Возможно, вы ввели неправильный адрес, или страница была удалена</p>
            <router-link tag="a" to="/home" class="button">Перейти на главную</router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "NotFoundPage",
        data:()=>({
        }),
        mounted () {
        },
        methods:{
        }
    };
</script>

<style scoped>
    .head{
        font-weight: 500;
        font-size: 34px;
        color: #292b61;
    }
    .button{
        border: 1px solid #292b61;
        margin-right: 5px;
        margin-bottom: 10px;
        display: inline-block;
        justify-content: center;
        background-color: inherit;
        border-right: 1px solid #292b61;
        text-align: center;
        display: inline-block;
        transition: all ease-in-out 0.15s;
        padding: 8px 15px 8px 15px;
        color: #292b61;
    }
    .wrapper{
        padding-left:20%;
        padding-top:6%;
    }
    .image_404{
        background-image: url(../assets/img/404.svg);
        width:805px;
        height:318px;

    }
    a:hover {
        background-color: #292b61;
        color:white
    }

</style>