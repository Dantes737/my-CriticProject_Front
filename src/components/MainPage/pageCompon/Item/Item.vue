<template>
  <div class="container">
    <div class="img" v-if="staticSrc !== null">
        <img @click="goToItem" class="myImg" :src="staticSrc" alt="productIMG"
      />
      <!-- <img class="myImg" :src="staticSrc" alt="productIMG" /> -->
    </div>
    <div class="img" v-else>
      <img class="myImg" :src="myImg" alt="productIMG" />
    </div>

    <div @click="goToItem">
      <router-link to="/item/:item_id"> {{ title }}</router-link>
    </div>
    <div>
      <div class="rate">Рейтинг: {{ rating }}</div>
      /10 <img class="star" src="@/assets/star.png" alt="" />
    </div>
    <div class="btn">
      <button class="button is-dark" @click="addItem">
        {{ buttonDefault }}
      </button>
    </div>
    <div class="btn">
      <button class="button is-dark" @click="editItem">Edit</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Item",

  computed: {
    ...mapGetters("images", ["getImageByTitle"]),
  },

  data() {
    return {
      buttonDefault: "Add",
      staticSrc: null,
    };
  },

  props: {
    title: {
      type: String,
      default: "setTitle",
    },

    rating: {
      type: String,
      default: "-0null0-",
    },

    id: {
      type: String,
    },
    myImg: {
      type: String,
      default: "-0null0-",
    },
  },

  methods: {
    ...mapActions(["addToCart"]),
    ...mapActions(["deleteFromCart"]),

    addItem() {
      if (this.buttonDefault == "Add") {
        this.addToCart(this.id);

        this.buttonDefault = "In list";
      } else {
        this.deleteFromCart(this.id);
        this.buttonDefault = "Add";
      }
    },

    editItem() {
      this.$router.push({
        name: "editor",
        params: { item_id: this.id },
      });
    },

    goToItem() {
      this.$router.push({
        name: "item_p",
        params: { item_id: this.id },
      });
    },
  },
  mounted() {
    const item = this.getImageByTitle(this.title);
    this.staticSrc = item.itemImg;
  },
};
</script>

<style lang="css" scoped>
.img {
  height: 360px;
}
.myImg {
  cursor: pointer;
  border-radius: 5px;
  width: 240px;
}
.btn {
  display: inline;
  margin: 2px;
}
.rate {
  display: inline;
  font-size: 22px;
}
.star {
  width: 18px;
}

.container {
  padding: 20px;
  width: 250px;
}
</style>