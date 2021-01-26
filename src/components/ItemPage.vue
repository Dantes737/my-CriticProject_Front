
<template>
  <div>
    <div v-if="isLoading">-------------LOADING--------------</div>
    <div class="main" v-if="myItem">
      <div>
        <page-header title="RottenApples" />
      </div>
      <hr />
      <div class="body">
        <div class="container">
          <div v-if="imgSrc">
            <img class="myImg" :src="imgSrc" alt="productIMG" />
          </div>

          <div>
            <div class="title">{{ myItem.title }}</div>
            <div class="description">Описання :</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at vestibulum dolor. Vestibulum porttitor ipsum et tempor blandit.
              Pellentesque eu ante sed justo sollicitudin suscipit vitae ut
              lorem. Sed suscipit aliquam fermentum.
            </p>
            <div class="description">Рейтинг:{{ myItem.rating }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "./MainPage/pageCompon/Header/header";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "itemPage",

  components: {
    PageHeader,
  },
  data() {
    return {
      myItem: null,
      imgSrc: null,
    };
  },

  computed: {
    ...mapGetters("films", ["getItems", "isLoading"]),
    ...mapGetters("images", ["getImageByTitle"]),

    item_ID(){ return this.$route.params.item_id}
  },

  methods: {
    ...mapActions("films", ["loadData"]),
  },
  async created() {
    try {
      await this.loadData();

      console.log("---Loading---11");

      this.myItem = this.getItems.find((item) => {
        // console.log(`${item._id}  --- ${this.item_ID} `);
        return item._id == this.item_ID
        });
      const IteM = this.getImageByTitle(this.myItem.title);
      this.imgSrc = IteM.itemImg;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="css" scoped>
.myImg {
  float: left;
  width: 300px;
  padding: 5px;
  margin: 10px;
}

.body {
  background-color: rgb(180, 180, 180);
}
.description {
  font-size: 20px;
}
.title {
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
  left: 89%;
  top: 63px;
  position: absolute;
}
</style>