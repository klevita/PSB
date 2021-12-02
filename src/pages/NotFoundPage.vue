<template>
    <div class="base-contain">
        <div class = "images">
            <div class="image_404"></div>
            <div class="image_smile"></div>
        </div>
        <p class="head" v-bind:style="text_style">Страница не найдена</p>
        <p class="information" v-bind:style="text_style">Возможно, вы ввели неправильный адрес, или страница была удалена</p>
        <router-link tag="a" to="/home" class="button">Перейти на главную</router-link>
    </div>
</template>

<script>
    export default {
        name: "NotFoundPage",
        data:()=>({
            text_style:{
                width:'400px',
                height:'100px',
            },
            margin_left:"0px"
        }),
        mounted () {
        },
        methods:{
        }
    };
</script>

<style scoped>
    .base-contain{
        background-color: white;
        width: 1300px;
        margin: 0 auto;
        padding: 30px 0;
        min-height: 95vh;
        position: absolute;
    }
    .head{
        position: absolute;
        left: 223px;
        top: 350px;
        font-weight: 500;
        font-size: 34px;
        color: #1492e6;
    }
    .button{
        border: 1px solid #1492e6;
        margin-right: 5px;
        margin-bottom: 10px;
        display: inline-block;
        justify-content: center;
        background-color: inherit;
        border-right: 1px solid rgb(20, 146, 230);
        position: absolute;
        left: 223px;
        text-align: center;
        display: inline-block;
        transition: all ease-in-out 0.15s;
        padding: 8px 15px 8px 15px;
        color: #1492e6;
    }

    .information{
        position: absolute;
        left: 223px;
        top: 400px;
    }
    .images{
        display: flex;
    }
    .image_smile{
        background-image: url(../assets/img/einstain_smile.png);
        background-color: white;
        width:327px;
        height:318px;
        margin-top: 120px;
        margin-right: auto;
    }
    .image_404{
        background-image: url(../assets/img/404.png);
        width:405px;
        height:218px;
        margin-top: 120px;
        margin-right: 125px;
        margin-left: auto;
    }

    a:hover {
        background-color: #1492e6;;
        color:black
    }

</style>