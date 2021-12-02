<template>
    <div class="base">
        <img src='../assets/test.png'>
    </div>

</template>

<script>
    import UserApiService from "@/services/UserApiService";

    export default {
        name: 'HelloWorld',

        data: () => ({
            userData: null,
        }),
        async mounted() {
            this.userData = await UserApiService.getById();
        },
    }
</script>
