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


    <b-field class="file is-primary" :class="{'has-name': !!file}">
        <b-upload v-model="file" class="file-label" @input="loadImage">
            <span class="file-cta">
                <b-icon class="file-icon" icon="upload"></b-icon>
                <span class="file-label">Click to upload</span>
            </span>
            <span class="file-name" v-if="file">
                {{ file.name }}
            </span>
        </b-upload>
    </b-field>
    <div v-if="itemImg">
       <img :src="itemImg" alt="">
    </div>


    </div>
    <div class="level">
      <b-button type="is-danger" class="level-left" @click="onCancel"
        >Cancel</b-button
      >
      <b-button
        type="is-success"
        class="level-right"
        @click="onAdd"
        >Add</b-button
      >
    </div>
    </div>
  </div>
</template>

<script>
///:disabled="isDataValid===false"
import PageHeader from "./MainPage/pageCompon/Header/header";
import { mapActions} from "vuex";

export default {
  name: "createItem",

  components: {
    PageHeader,
  },
 
  data() {
    return {
      title: null,
      category: null,
      year: null,
      rating: null,
      itemImg:null,
      file:null
    };
  },

  methods: {
    ...mapActions("films", ["addFilm"]),


       readFile(file) {
        //  return new Promise((resolve, reject)=> {
        return new Promise((resolve)=> {
            let myReader = new FileReader();
            myReader.onloadend = function () {
                resolve(myReader.result);
            };
            myReader.readAsDataURL(file);
        })
        },
        async loadImage(file){
            this.itemImg= await this.readFile(file)
        },
///////////////////
    onAdd() {      
      this.addFilm({
        title: this.title,
        category: this.category,
        year: this.year,
        rating: this.rating,
        image:this.itemImg
      });
          this.$router.push({ path: "/" });
    },
    onCancel() {
      this.$router.push({ path: "/" });
    }
  }

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