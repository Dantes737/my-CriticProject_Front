<template>
  <div class="main">
    <div>
      <page-header title="RottenApples" />
    </div>
    <hr />
    <div class="body">
      <div>
        <h1 class="WATCHtitle">Watchlist</h1>
        <table>
          <tr class="tab" v-for="item in cartItems" :key="item._id">
            <td><img class="img" :src="getImg(item.title)" alt="itemImg" /></td>
            <td>{{ item.title }}</td>
            <td><button @click="deletItem(item._id)">Delete</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "./MainPage/pageCompon/Header/header";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "itemCart",

  components: {
    PageHeader,
  },

  computed: {
    ...mapGetters(["getItemFromCart"]),
    ...mapGetters("films", ["getItems"]),
    ...mapGetters("images", ["getImageByTitle"]),

    cartItems() {
      return this.getItems.filter((item) =>
        this.getItemFromCart.includes(item._id)
      );
    },
  },

  methods: {
    ...mapActions(["deleteFromCart"]),

    getImg(titl) {
      const item = this.getImageByTitle(titl);
      return item.itemImg;
    },

    deletItem(itemID) {
      console.log(itemID);
      this.deleteFromCart(itemID);
    },
  },
};
</script>

<style lang="css" scoped>
.img {
  float: left;
  height: 100px;
  padding: 10px;
}
.body {
  background-color: rgb(180, 180, 180);
}
.WATCHtitle {
  text-align: center;
  font-size: 25px;
}
.back {
  font-size: 13px;
  color: #6ac861;
  display: inline-flex;
  padding: 3px;
  background-color: #000000;
  border-radius: 5px;
  left: 87%;
  top: 63px;
  position: absolute;
}
.tab {
  border: 4px solid #535d52;
  border-radius: 5px;
  width: 50%;
}
</style>