<template>
    <div class="wrapper">
     <div class="header">Разработка программного решения для онбординга новых IT-специалистов банка</div>
     <div class="command">Наш проект и команда</div>
     <div class="navigate">
  
          </div>
        <div class="text">
       
          </div>
          <div class="table">
          <img :src="require('@/assets/img/table.svg')">
          </div>


    </div>
</template>

<script>
    export default {
        name: "myProject",
        data:()=>({

        }),
        mounted () {
        },
        methods:{
          
        }
    };
</script>

<style scoped>
    .wrapper{
        padding-left:20%;
        padding-top:6%;
        background-color: #EFF0F8;
        padding-left: 4%;
        padding-top: 2%;
        height: 20000px;
    }
    .header{
        position: absolute;
        width: 921px;
        height: 66px;
        left: 799px;
        top: 242px;

        /* Основной H1 */

        font-family: Gilroy;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
        letter-spacing: 0.015em;

        /* Акцент */

        color: #EA5719;

    }
    .text{
        position: absolute;
        width: 980px;
        height: 1570px;
        left: 740px;
        top: 352px;

        /* Второстепенный Н1 */

        font-family: Gilroy;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.015em;

        /* Акцент1 */

        color: #34398E;
    }
    .command{   
        position: absolute;
        width: 314px;
        height: 33px;
        left: 200px;
        top: 242px;

        /* Основной H1 */

        font-family: Gilroy;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
        letter-spacing: 0.015em;

        /* Акцент */

        color: #EA5719;
    }
    .table{
        position: absolute;
        width: 921px;
        height: 3374px;
        left: 749px;
        top: 1963px;
    }
    .navigate{
        position: absolute;
        width: 333px;
        height: 367px;
        left: 200px;
        top: 352px;
    }
</style>