<template>
    <v-app>
        <base-layout>
            <router-view :key="$route.fullPath"/>
        </base-layout>
    </v-app>
</template>

<script>
    import baseLayout from "@/layouts/baseLayout"

    export default {
        name: 'App',

        components: {
            baseLayout
        },

        data: () => ({
            //
        }),
    };
</script>
