<template>
  <div class="main">
    <div>
      <page-header @title-filter="newItems" title="RottenApples" />
    </div>
    <hr />
    <div class="body">
      <div class="filt">

 <div class="fil2">
        <s-filter
        @year-filter="setYears"
          @film-button="clickFilm"
          @serial-button="clickSerial"
          @game-button="clickGame"
          @mult-button="multClick"
          films="Категорії :"
        />

      </div>
      <div  class="registr">
        <registr/>
      </div>

      </div>
      <div class="products">
        <item-list
          v-if="
            filmChek === 0 &&
            multChek === 0 &&
            gameChek === 0 &&
            serialChek === 0
          "
          :itList="filteredItems"
        />
        <item-list v-if="multChek === 1" :itList="filterMult" />
        <item-list v-if="gameChek === 1" :itList="filterGame" />
        <item-list v-if="filmChek === 1" :itList="filterFilms" />
        <item-list v-if="serialChek === 1" :itList="filterSerial" />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "./pageCompon/Header/header";
import SFilter from "./pageCompon/FilterTab/Filter";
import Registr from "./pageCompon/Registration/registForm";
import ItemList from "./pageCompon/ItemList/itList";
import {mapActions, mapGetters } from "vuex";

export default {
  name: "MainPage",

  components: {
    PageHeader,
    SFilter,
    ItemList,
    Registr
  },

  data() {
    return {
      firstYear:"1994",
        lastYear:"2020",
      inpText: null,

      filmCategory: "film",
      serialCategory: "serial",
      gameCategory: "game",
      multCategory: "mult",

      filmChek: 0,
      serialChek: 0,
      gameChek: 0,
      multChek: 0,
    };
  },

  computed: {
    ...mapGetters("films",["getItems"]),
    filteredItems() {
      if (this.inpText != null) {
    console.log(this.getItems);
        return this.getItems.filter(
          (item) =>
            !this.inpText ||
            item.title.toLowerCase().includes(this.inpText.toLowerCase())
        );
      } else 
      if (  this.firstYear!=1994||
        this.lastYear!=2020) {
        return this.getItems.filter(
          (item) =>
            item.year>=this.firstYear&&item.year<=this.lastYear
        );
      } else return this.getItems;
    },

    filterFilms() {
      if (this.filmChek === 1) {
        return this.getItems.filter(
          (item) => !this.filmCategory || item.category == this.filmCategory
        );
      } else return this.getItems;
    },

    filterMult() {
      if (this.multChek === 1) {
        return this.getItems.filter(
          (item) => !this.multCategory || item.category == this.multCategory
        );
      } else return this.getItems;
    },
    filterGame() {
      if (this.gameChek === 1) {
        return this.getItems.filter(
          (item) => !this.gameCategory || item.category == this.gameCategory
        );
      } else return this.getItems;
    },

        filterSerial() {
      if (this.serialChek === 1) {
        return this.getItems.filter(
          (item) => !this.serialCategory || item.category == this.serialCategory
        );
      } else return this.getItems;
    },
 
    ////////////////////////////////////
  },

  methods: {
   ...mapActions('films',['loadData']),

//////////////////////////////////////////////////////
setYears(arr){
  if (this.firstYear!=arr[0]) {
    this.firstYear=arr[0]
  }
  if (this.lastYear!=arr[1]) {
   this.lastYear=arr[1]
  }
},


    clickFilm() {
      if (this.filmChek === 0) {
        this.filmChek = 1;
      } else this.filmChek = 0;
    },

    clickSerial() {
      if (this.serialChek === 0) {
        this.serialChek = 1;
      } else this.serialChek = 0;
    },
    clickGame() {
      if (this.gameChek === 0) {
        this.gameChek = 1;
      } else this.gameChek = 0;
    },
    multClick() {
      if (this.multChek === 0) {
        this.multChek = 1;
      } else this.multChek = 0;
    },

    newItems(inpVal) {
      if (inpVal=='') {
         this.inpText = null;
      } else {
        this.inpText = inpVal;
      }
    },
  },

  async created () {
    try {
      await
       this.loadData()
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="css" scoped>
.body {
  display: flex;
  background-color: rgb(180, 180, 180);
}
.products{
  display: flex;
}
.filt{
width:auto;
}
</style> 