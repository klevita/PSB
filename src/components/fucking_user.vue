<template>
    <div class="UserF">
        <div style="display: inline-block;float:left;">
            <img :src="require('@/assets/img/user.png')">
        </div>
        <div style="display: inline-block;float:left;margin-top:20px">
            <div style="margin-left:40px">
                <div style="color:#292b61; font-family: gilroy-reguar; font-weight: bold;font-size:28px;margin-bottom:10px">
                    {{ret_user.Name}}
                </div>
                <div style="color:#292b61;font-size:20px; font-family: gilroy-reguar; margin-bottom:10px">
                    {{ret_user.Job}}
                </div>
                <div style="color: #292b61;font-size:16px;font-family: gilroy-reguar; margin-bottom:10px">
                    {{ret_user.Group}}
                </div>
            </div>
        </div>
        <div class="icon-group" style="display: inline-block;float:right; ">
            <div style="margin-top:10px">
                <div class="typcInB" style="margin-right:15px">
                    <img :src="require('@/assets/img/phone.svg')">
                </div>
                <div style="display:inline-block;">
                    {{ret_user.Phone1}}
                </div>
            </div>
            <div style="margin-top:10px">
                <div class="typcInB" style="margin-left: 3px">
                    <img :src="require('@/assets/img/strange_phone.svg')">
                </div>
                <div style="display:inline-block;">
                    {{ret_user.Phone2}}
                </div>
            </div>
            <div style="margin-top:10px">
                <div class="typcInB">
                    <img :src="require('@/assets/img/mail.svg')">
                </div>
                <div style="display:inline-block;">
                    {{ret_user.Email}}
                </div>
            </div>
            <div style="margin-top:10px">
                <div class="typcInB" style="margin-left: 2px;margin-right:20px">
                    <img :src="require('@/assets/img/loop.svg')">
                </div>
                <div style="display:inline-block;">
                    {{ret_user.Adr}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fucking_user",
        props:{
            user:{
                type:Object,
                required:true,
            }
        },
        computed:{
            ret_user(){
                if(!this.user){
                    return {
                        Name:"Туктамышева Лилия Ильинична",
                        Job:"Главный Специалист по работе с клиентами",
                        Group:"Группа внутренних коммункаций и развития корпоративной культуры",
                        Phone1:"+7(925)-085-20-00",
                        Phone2:"+7(495)-00-01",
                        Email:"kklevita92@gmail.com",
                        Adr:"Москва, Бербеневская Набережная, д7",
                    }

                }return this.user;
            }
        }
    }
</script>

<style scoped>
    .UserF {

        padding-top: 14px;
        background-color: #eff0f8;
        height: 200px;
    }
    .typcInB {
        display: inline-block;
        margin-right: 20px;

    }
</style>