<template>
  <div class="registr">
         <h1>Sign up</h1>
        <form @submit.prevent="submit">
            <div >
                Nick : 
                <input                 
                    type="text"
                    v-model="nick"
                    name="nick"
                    placeholder="Nick"
                >
            </div>
            <div>
               email :
                <input                    
                    type="text"
                    v-model="email"
                    name="email"
                    placeholder="Email"
                >
            </div>
            <div class="form-group">
                Password : <input                    
                    type="password"
                    v-model="password"
                    name="password"
                    placeholder="Password"
                >
            </div>
            <div  v-if="message">{{ message }}</div>
            <div >
                <!-- <button class="button is-dark">Login</button> -->
                <button type="submit" class="button is-dark">Sign up</button>
            </div>
        </form>
    </div>
    
</template>

<script>
import { mapActions} from "vuex";


export default {
  name: "SignUp",

    data() {
        return {
            nick: "",
            email: "",
            password: "",
            message: ""
        };
    },

 methods: {
        ...mapActions('auth',['signup']),

        async submit() {
            
            try {
                const user = {
                    nick: this.nick,
                    email: this.email,
                    password: this.password
                };
                const result = await this.signup(user);
                if (result === true) {
                    this.message = "";
                    console.log("Exelent !");
                    // this.$router.push({path: "/login"});
                } else {
                    this.message = result; //'SignUp error!';
                }
            } catch (err) {
                this.message = err.message;
            }
        }
    },


};
</script>

<style lang="css">

h1{
  font-size: 20px;
}

</style>