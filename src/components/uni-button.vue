<template>
    <a class="button"  v-bind:style="btnStyle" v-bind:href="ret_link" v-on:click="emitClick()">{{this.text}}</a>
</template>

<script>
    export default {
        name: "uni-button",
        props: {
            color: {
                type: String,//1 or 2 or 3 default - disabled
                required: false,
            },
            text: {
                type: String,
                required: true,
            },
            link:{
                type: String,
                required: true,
            }

        },
        data: () => ({
            btnStyle: {
                color:null,
                backgroundColor:null,
                border:null
            },
        }),
        created(){
            switch(+this.color){
                case 1:
                    this.btnStyle.color="white";
                    this.btnStyle.border="2px solid #6e7aba";
                    this.btnStyle.backgroundColor="#6e7aba";
                    break;
                case 2:
                    this.btnStyle.color="orange";
                    this.btnStyle.border="2px solid white";
                    this.btnStyle.backgroundColor="white";
                    break;
                case 3:
                    this.btnStyle.color="#6e7aba";
                    this.btnStyle.border="2px solid #6e7aba";
                    this.btnStyle.backgroundColor="transparent";
                    break;
                default:
                    this.btnStyle.backgroundColor="#6e7aba";
            }

        },
        computed:{
            ret_link(){
                return this.link
            }

        },
        methods: {
            emitClick(){
                this.$emit('click')
            },
        }
    }
</script>

<style scoped>
    .button{
        border-radius:50px;
        width:160px;
        display: inline-block;
        text-align: center;
        transition: all ease-in-out 0.15s;
        padding: 6px 2px 6px 2px;
    }
</style>