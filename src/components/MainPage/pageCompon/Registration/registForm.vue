<template>
  <div class="filter">
      <h1 class="title is-4">Registration page</h1>

<div v-if="isAuthenticated()">
  <button class="button is-dark" @click="onLogout">LogOut</button>
</div>
      <div><sign-up /></div>
      <div><login /></div>
{{isAuthenticated()}}
    <div>
      <div v-if="userNick" class="div-block">User: {{userNick}}</div>
    </div>
  </div>

</template>

<script>
import Login from "./Login/index";
import SignUp from "./Signup/index";
import { mapActions,mapGetters } from "vuex";

export default {
  name: "Registr",

  components: {
    SignUp,
    Login,
  },

data() {
    return {
        dog:0
    }
},

computed: {
  ...mapGetters('auth',['userNick','isAuthenticated'])
},

  methods: {
    ...mapActions('auth',['logout']),
    onLogout() {
      this.logout()
      this.$router.push({path:'/login'})
    }
  },

};
</script>

<style lang="css" scoped>
.filter {
  margin-left: 10px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  height: max-content;
  width: 280px;
  background-color: lightgreen;
}
</style>