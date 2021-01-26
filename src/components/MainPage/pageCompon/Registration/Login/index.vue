<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="submit">
            <div >
                email :
                <input               
                    type="text"
                    v-model="email"
                    name="email"
                    placeholder="Email"
                >
            </div>
            <div class="form-group">
                password : 
                <input               
                    type="password"
                    v-model="password"
                    name="password"
                    placeholder="Password"
                >
            </div>
            <div class="form-group error" v-if="message">{{ message }}</div>
            <div class="form-group">
                <button class="button is-dark">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            message: ""
        };
    },

    methods: {
        ...mapActions('auth',['login', 'logout']),

        async submit() {
            try {
                const user = { email: this.email, password: this.password };
                const result = await this.login(user);
                
                if (result === true) {
                    this.message = "";

                } else {
                    this.message = "Login error!";
                }
            } catch (err) {
                this.message = err.response.data.error;
            }
        }
    },

 
};
</script>
<style >
h1{
  font-size: 20px;

}
</style>


