<template>
    <div class="Mwrapper">
        <div style="display: inline-block;width:20%">
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
        <div style="display: inline-block;width:80%">

        </div>
    </div>
</template>

<script>

    export default {
        name: "Connections"
    }
</script>

<style scoped>
    .BigColor {
        color: #EA5616;
        font-weight: bold;

        font-size: 28px
    }

    .MidColor {
        color: #EA5616;
        font-size: 20px
    }

    .SmColor {
        text-decoration: underline;
        margin-bottom:6px;
        color: #292b61;
        font-size: 16px
    }
    .Mwrapper{
        padding-top:30px;
        padding-left:200px;
        padding-right:200px;
    }
</style>