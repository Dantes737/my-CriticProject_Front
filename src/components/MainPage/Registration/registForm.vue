<template>
  <div class="filter">
    <h1 class="title is-4">Registration page</h1>

    <div><sign-up /></div>
    <div><login /></div>
    <hr />
    <div>
      <div v-if="userNick" class="div-block">User: {{ userNick }}</div>
      <div  v-if="isAuthenticated()" class="div-block">Is Authenticated: {{ isAuthenticated() }}</div>
    </div>

    <div v-if="isAuthenticated()">
      <button class="button is-dark" @click="onLogout">LogOut</button>
      <button class="button is-dark" @click="toSite">Go to site</button>
    </div>
  </div>
</template>

<script>
import Login from "./Login/index";
import SignUp from "./Signup/index";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Registr",

  components: {
    SignUp,
    Login,
  },

  data() {
    return {
      dog: 0,
    };
  },

  computed: {
    ...mapGetters("auth", ["userNick", "isAuthenticated"]),
  },

  methods: {
    ...mapActions("auth", ["logout"]),

    onLogout() {
      this.logout();
    },
    toSite() {
      return this.$router.push({ name: "main1" });
    },
  },
};
</script>

<style lang="css" scoped>
.filter {
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  padding: 40px;
  border-radius: 5px;
  height: max-content;
  width: max-content;
  background-color: lightgreen;
}
</style>