<template >
    <v-app class="base-layout" >


        <main class="main">
            <div class="wrapper" >
                
                <slot/>
            </div>
        </main>
    </v-app>
</template>

<script>
    export default {
        name: "BaseLayout",
        data: () => ({

        }),
        methods:{
        },
        computed:{
        }
    };
</script>

<style lang="scss">

    .header {
        box-shadow: 0 4px 20px rgba(224, 224, 224, 0.3);
        display: flex;
        justify-content: flex-end;
        padding: 8px 32px;


    }
    .main {
        background: #f7f7f9;
        margin-left: 110px;
        min-height: 100vh;

        .wrapper {
            width: 1250px;
            margin: 0 auto;
            padding: 30px 0;
            min-height: 100vh;
        }
    }
</style>
