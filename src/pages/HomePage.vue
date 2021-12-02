<template>
    <div>HomePage</div>
</template>

<script>
    import UserApiService from "@/services/UserApiService";
    export default {
        name: "Home",
        data: () => ({
            userData: null,
        }),
        async mounted() {
            this.userData = await UserApiService.getById();
        },
    }
</script>

<style scoped>

</style>