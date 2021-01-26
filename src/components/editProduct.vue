<template>
  <div class="main">
    <div>
      <page-header title="RottenApples" />
    </div>
    <hr />
    <div class="body">
      <div>
        <b-field horizontal label="Title">
          <b-input type="text" v-model="title" required expanded></b-input>
        </b-field>
        <b-field horizontal label="Category">
          <b-input type="text" v-model="category" required expanded></b-input>
        </b-field>
        <b-field horizontal label="Rating">
          <b-input type="text" v-model="rating" required expanded></b-input>
        </b-field>
        <b-field horizontal label="Year">
          <b-input type="number" v-model="year" required expanded></b-input>
        </b-field>
      </div>
      <div class="level">
        <b-button type="is-warning" class="level-left" @click="onCancel"
          >Cancel</b-button
        >
        <b-button type="is-success" class="level-right" @click="onAdd"
          >Add</b-button
        >
      </div>
       <b-button type="is-danger"  @click="deleteItem" expanded>Delete forever !</b-button>
    </div>
  </div>
</template>

<script>
///:disabled="isDataValid===false"
import PageHeader from "./MainPage/pageCompon/Header/header";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "createItem",

  components: {
    PageHeader,
  },

  data() {
    return {
      item_ID: this.$route.params.item_id,
      title: null,
      category: null,
      year: null,
      rating: null
    };
  },

  computed: {
    ...mapGetters("films", ["getItemById"]),
  },

  methods: {
    ...mapActions("films", ["editFilm", "deleteFilm"]),

    onAdd() {
      this.editFilm({
        id: this.item_ID,
        title: this.title,
        category: this.category,
        year: this.year,
        rating: this.rating
      });
      this.$router.push({ path: "/" });
    },
    onCancel() {
      this.$router.push({ path: "/" });
    },
    deleteItem() {
      this.deleteFilm(this.$route.params.item_id);
        this.$router.push({ path: "/" });
    },
  },
  mounted() {
    if (this.item_ID) {
      const item = this.getItemById(this.item_ID);
      this.title = item.title;
      this.category = item.category;
      this.year = item.year;
      this.rating = item.rating;
    }
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
  background-color: lightgreen;
  width: 300px;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
}
.WATCHtitle {
  text-align: center;
  font-size: 25px;
}

.tab {
  border: 4px solid rgb(83, 93, 82);
  border-radius: 5px;
  width: 50%;
}
</style>