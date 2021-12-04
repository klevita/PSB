<template >
    <v-app class="base-layout" >
        <main class="main">
            <div class="wrapper" >
                <headr v-if="isLoggedIn"></headr>
                <slot/>
            </div>
        </main>

    </v-app>
</template>

<script>
    import headr from "@/components/head"
    export default {
        components:{
            headr
        },
        name: "BaseLayout",
        data: () => ({
            checs:this.is_img,
        }),
        methods:{
        },
        mounted(){

        },
        computed:{
            is_img(){
                return this.$store.state.test
            },
            isLoggedIn(){
                return this.$store.state.user
            }
        }
    };
</script>

<style lang="scss">


</style>
