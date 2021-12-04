<template>
    <div class="wrapper">
        <div class="image_404"></div>
        <div>
            <p class="head">Страница не найдена</p>
            <p class="information">Возможно, вы ввели неправильный адрес, или страница была удалена</p>
            <btn color="3" text = "На главную" link="/home"></btn>
        </div>
        <form>
            <p>Please select your preferred contact method:</p>
            <div>
                <input type="radio" id="contactChoice1"
                       name="contact" value="email">
                <label for="contactChoice1">Email</label>
                <input type="radio" id="contactChoice2"
                       name="contact" value="phone">
                <label for="contactChoice2">Phone</label>
                <input type="radio" id="contactChoice3"
                       name="contact" value="mail">
                <label for="contactChoice3">Mail</label>
            </div>
            <div>
                <button type="submit">Submit</button>
                <btn text="f" />
            </div>
        </form>
    </div>
</template>

<script>
    import btn from "../components/uni-button"
    export default {
        components: { btn},
        name: "NotFoundPage",
        data:()=>({

        }),
        mounted () {
        },
        methods:{
            ch(){
                this.$router.push("/home");
            }
        }
    };
</script>

<style scoped>
    .head{
        font-weight: 500;
        font-size: 34px;
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

</style>