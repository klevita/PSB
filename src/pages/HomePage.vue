<template>
    <div>
        <div class="fontTest">HomePage</div>
        <div class="fontTest2">HomePage</div>
        <div>HomePage</div>
    </div>
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
    .fontTest {
        font-family: "verdana-regular";

    }
    .fontTest2 {
        font-family: "gilroy-regular";

    }

</style>