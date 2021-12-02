<template>
    <div>
        <v-form ref="form" v-model="is_valid" class="login_form">
            <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Адрес эл. почты"
                    required
            ></v-text-field>

            <v-text-field
                    style="margin-top:10px"
                    v-model="pass"
                    :rules="passRules"
                    label="Пароль"
                    type="password"
                    required
            ></v-text-field>
            <div style="display:inline-block">
                <a class="button" color="#1492e6"  v-on:click="login">Войти</a>
                <v-btn style="margin-left:66px" v-on:click="to_reg">Регистрация</v-btn>
            </div>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            is_valid:false,
            email: "",
            emailRules:[
                v => !!v || '',
                v => /.+@.+\..+/.test(v) || 'Неверный Адрес',
            ],
            pass: "",
            passRules: [
                v => !!v || "",
                v => /.*\d.*/.test(v) || "Пароль должен содержать цифры"
            ],
        }),
        methods: {
            login() {
                if(this.$refs.form.validate()){
                    let email = this.email;
                    let password = this.pass;
                    this.$store.dispatch("loginUser", { email, password })
                    // .then(() => this.$router.push("../auth"))
                    // .catch(err => console.log(err));
                }
            },
            to_reg(){
                this.$emit('reg')
            }
        },
        computed:{

        },
        mounted(){
        }
    };
</script>

<style scoped>
    .button{
        border: 1px solid #292b61;
        margin-right: 5px;
        margin-bottom: 10px;
        display: inline-block;
        justify-content: center;
        background-color: inherit;
        border-right: 1px solid #292b61;
        text-align: center;
        display: inline-block;
        transition: all ease-in-out 0.15s;
        padding: 8px 15px 8px 15px;
        color: #292b61;
        border-radius:5px;
    }
    .button:hover {
         background-color: #292b61;
         color:white
    }
    .login_form{
        border:1px solid #959595;
        width:340px;
        padding: 20px;
        border-radius:30px;
        background-color:#ffffff;
    }
</style>