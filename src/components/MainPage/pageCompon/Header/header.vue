<template>
  <div class="header">
    <div class="title">{{ title }}</div>

    <div class="header-btns">
      <div class="btns">
        <button class="button is-black" @click="goToCreator" v-if="givePagename">
          Add new film
        </button>
      </div>
      <div class="btns">
        <button
          class="button is-black"
          v-if="givePagename == 'list' || givePagename == 'item_p'||givePagename == 'creator'"
        >
          <router-link to="/">Main page</router-link>
        </button>
      </div>
      <div  class="btns">
        <button class="button is-black" v-if="givePagename">
          <router-link to="/items_cart"
            >WatchList </router-link>
          <span style="margin-left: 14px" v-if="getCartLength != 0">  {{ getCartLength }}</span>
        </button>
      </div>
      <div  class="btns" v-if="givePagename == 'main' || givePagename == 'main1'">
       <b-input placeholder="Enter title" v-model="searchText"></b-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PageHeader",

  props: {
    title: {
      type: String,
      default: "setTitle",
    },
  },

  computed: {
    ...mapGetters(["getCartLength"]),

    givePagename() {
      return this.$route.name;
    },
  },
  data() {
    return {
      cartLength: this.getCartLength,
      searchText: null,
    };
  },

methods: {
  goToCreator() {
    this.$router.push({
name:'creator',
params:{item_id:'new'}


    })
  }
},

  watch: {
    searchText(newValue) {
      this.$emit("title-filter", newValue);
    },
  },
};
</script>

<style lang="css" scoped>

.title {
  font-size: 45px;
  color: #6ac861;
  display: inline;
  padding: 8px;
  background-color: #000000;
  border-radius: 5px;
}
.header-btns{
margin-top: 43px;
  display:inline ;
  float:right;
}
.btns {
  display:inline-block;
  padding: 2px;
}

.header {
  width:100%;
  position:static;
  padding: 10px;
  color: rgb(243, 243, 243);
  height: 100px;
  background-color: #6ac861;
  border-radius: 5px;
}
</style>