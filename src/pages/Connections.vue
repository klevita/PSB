<template>
    <div class="Mwrapper">
        <div style="display: inline-block;width:20%;float:left">
            <div style="" class="BigColor">Доступ</div>
            <br><br>
            <div class="SmColor"><a>Jira</a></div>
            <div class="SmColor"><a>Confluence</a></div>
            <div class="SmColor"><a>Github</a></div>
            <div class="SmColor"><a>Gitlab</a></div>
            <div class="SmColor"><a>Trello</a></div>
            <div class="SmColor"><a>Notion</a></div>
            <br>

            <div class="SmColor"><a>Нормативные акты</a></div>
            <div class="SmColor"><a>Документы</a></div>

        </div>
        <div style="display: inline-block;width:80%;">
            <div style="border-bottom:1px solid #292b61">
                <div>
                    <div style="display: inline-block;" class="BigColor2">
                        Jira
                    </div>
                    <div style="display: inline-block;position: relative;top:10px">
                        <img :src="require('@/assets/img/jiar.png')">
                    </div>
                </div>
                <div class="MidColor" style="font-weight: bold">
                    Доступ закрыт
                </div>
                <div class="MidColor">
                    Чтобы получить доступ свяжитесь с сотрудником:
                </div>
                <user v-bind:user="this.usrs[0]" />
            </div>

            <div style="border-bottom:1px solid #292b61">
                <div>
                    <div style="display: inline-block;" class="BigColor2">
                        Confluence
                    </div>
                    <div style="display: inline-block;position: relative;top:10px">
                        <img :src="require('@/assets/img/Conf.png')">
                    </div>
                </div>
                <div class="MidColor" style="font-weight: bold">
                    Доступ закрыт
                </div>
                <div class="MidColor">
                    Чтобы получить доступ свяжитесь с сотрудником:
                </div>
                <user v-bind:user="this.usrs[1]" />
            </div>

            <div style="border-bottom:1px solid #292b61">
                <div>
                    <div style="display: inline-block;" class="BigColor2">
                        Github
                    </div>
                    <div style="display: inline-block;position: relative;top:10px">
                        <img :src="require('@/assets/img/github.png')">
                    </div>
                </div>
                <div class="MidColor2" style="font-weight: bold">
                    Доступ открыт
                </div>
                <div class="MidColor2">
                    Перейдите по ссылке сверху:
                </div>
            </div>

            <div style="border-bottom:1px solid #292b61">
                <div>
                    <div style="display: inline-block;" class="BigColor2">
                        Gitlab
                    </div>
                    <div style="display: inline-block;position: relative;top:10px">
                        <img :src="require('@/assets/img/Gitlab.png')">
                    </div>
                </div>
                <div class="MidColor2" style="font-weight: bold">
                    Доступ закрыт
                </div>
                <div class="MidColor2">
                    Перейдите по ссылке сверху:
                </div>
            </div>

            <div style="border-bottom:1px solid #292b61">
                <div>
                    <div style="display: inline-block;" class="BigColor2">
                        Trello
                    </div>
                    <div style="display: inline-block;position: relative;top:10px">
                        <img :src="require('@/assets/img/Trello.png')">
                    </div>
                </div>
                <div class="MidColor" style="font-weight: bold">
                    Доступ закрыт
                </div>
                <div class="MidColor">
                    Чтобы получить доступ свяжитесь с сотрудником:
                </div>
                <user v-bind:user="this.usrs[2]" />
            </div>
            <div style="border-bottom:1px solid #292b61;margin-bottom:60px;">
                <div>
                    <div style="display: inline-block;" class="BigColor2">
                        Notion
                    </div>
                    <div style="display: inline-block;position: relative;top:10px">
                        <img :src="require('@/assets/img/notion.png')">
                    </div>
                </div>
                <div class="MidColor2" style="font-weight: bold">
                    Доступ открыт
                </div>
                <div class="MidColor2">
                    Перейдите по ссылке сверху:
                </div>
            </div>
            <div>
                <div style="" class="BigColor">Нормативные акты</div>
                <ul ><li class="MidColor3"><a>Система «PSB On-Line». Руководство пользователя</a></li></ul>
            </div>  
        </div>

    </div>
</template>

<script>
    import user from "../components/fucking_user"

    export default {
        components: {
            user
        },
        data:()=>({
            usrs:[
                {
                    Name:"Чернова Эльмира Артемовна",
                    Job:"Руководитель группы разработки (Team Lead)",
                    Group:"",
                    Phone1:"(71) 3729",
                    Phone2:"+(903) 676-8494",
                    Email:"PrimerPrimer@gmail.com",
                    Adr:"Москва, Бербеневская Набережная, д 7",
                },
                {
                    Name:"Кудрявцев Даниил Русланович",
                    Job:"Владелец процессов",
                    Group:"",
                    Phone1:"(71) 3729",
                    Phone2:"+(903) 676-8494",
                    Email:"PrimerPrimer@gmail.com",
                    Adr:"Москва, Бербеневская Набережная, д 7",
                },
                {
                    Name:"Кудрявцев Даниил Русланович",
                    Job:"Владелец процессов",
                    Group:"Группа внутренних коммункаций и развития корпоративной культуры",
                    Phone1:"(71) 3729",
                    Phone2:"+(903) 676-8494",
                    Email:"PrimerPrimer@gmail.com",
                    Adr:"Москва, Бербеневская Набережная, д7",
                },
            ]
        }),
        name: "Connections"
    }
</script>

<style scoped>
    .BigColor {
        color: #EA5616;
        font-weight: bold;

        font-size: 28px
    }

    .BigColor2 {
        color: #292b61;
        font-weight: bold;
        font-size: 28px;
        text-decoration: underline;
        margin-right:10px;
    }

    .MidColor {
        color: red;
        font-size: 20px;
    }

    .MidColor2 {
        color: green;
        font-size: 20px;
    }
    .MidColor3 {
        color: #292b61;
        font-size: 20px;
        text-decoration: underline;
    }
    .SmColor {
        text-decoration: underline;
        margin-bottom: 6px;
        color: #292b61;
        font-size: 16px
    }

    .Mwrapper {
        padding-top: 30px;
        padding-left: 200px;
        padding-right: 200px;
        margin-bottom:200px;
    }
</style>