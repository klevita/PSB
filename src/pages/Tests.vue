<template>
    <div class="wrap">
        <div class="image" v-show="!checkEnd">
            <div class="main" >
                <TestQ  v-bind:test="tst[numerator]" tst v-bind:ret="rt" v-on:end="handle($event)"/>
            </div>
        </div>
        <div class="image2" v-show="checkEnd">

        </div>

    </div>
</template>

<script>
    import TestQ from "../components/TestQ"
    export default {
        components:{
            TestQ
        },
        name: "Tests",
        data:()=>({
            answers:[],
            rt:0,
            numerator:0,
            checkEnd:false,
            tst:[
                {q:"Какой способ вы выберете, чтобы улучшить коммуникацию в  команде?",a:["Я буду энтузиастом, чтобы вдохновить команду.","Я буду барть на себя больше ответственности.","Я буду регулярно шутить."]},
                {q:"Как бы вы оценили общение в команде?",a:["Очень дружеская атмосфера. Я могу пообщаться с любым человеком.", "В целом, всё хорошо. Я могу почти со всеми свободно пообщаться.", "У нас не принято общаться."]},
                {q:"Довольны ли Вы командой?",a:["Да", "Средне", "Нет"]}
            ]
        }),
        created(){
        },
        methods: {
            handle(v) {
                this.answers.push(v)
                if(v!==-1){
                    this.numerator++;
                    if(this.numerator >= this.tst.length){
                        this.checkEnd=true;
                    }
                }

            }
        }
    }
</script>

<style scoped>
    .image{
        position: absolute;
        width:100%;height:500px;
        background-position: center;
        background-image:url("../assets/img/Test-back.png");
    }
    .image2{
        position: absolute;
        width:100%;height:500px;
        background-position: center;
        background-image:url("../assets/img/stars.png");
    }
    .main{

        padding:20% 0 20% 0;

    }
    .wrap{
        position:relative;
        width:100%;
    }
</style>