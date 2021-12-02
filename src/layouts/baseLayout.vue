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

</style>
