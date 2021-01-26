<template>
  <div class="container">
    <div class="img" v-if="staticSrc!==null" ><img class="myImg" :src="staticSrc"  alt="productIMG" /></div>
    <div class="img" v-else><img class="myImg" :src="myImg"  alt="productIMG" /></div>

    <div @click="goToItem"> <router-link  to="/item/:item_id"> {{ title }}</router-link></div>
    <div><div class="rate"> Рейтинг: {{ rating }}</div>/10  <img class="star" src="@/assets/star.png" alt="">
    </div>
    <div class="btn">
      <button class="button is-dark" @click="addItem">Add</button>
</div>
    <div class="btn"><button class="button is-dark" @click="editItem">Edit</button></div>
  </div>
</template>

<script>
import {mapActions,mapGetters } from 'vuex'

export default {
  name: "Item",

computed: {
  ...mapGetters("images",["getImageByTitle"]),
},

data() {
  return {
    staticSrc:null
  }
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
...mapActions(['addToCart']),


addItem(){
     this.addToCart(this.id)

},

editItem(){
   this.$router.push({
      name:'editor',
      params:{item_id:this.id}
    })
},

goToItem() {
    this.$router.push({
      name:'item_p',
      params:{item_id:this.id}
    })
  }
},
mounted () {
    const item=this.getImageByTitle(this.title) 
    this.staticSrc=item.itemImg; 
},

};
</script>

<style lang="css" scoped>
.img{height: 360px;}
.myImg {
  border-radius: 5px;
  width: 240px;
}
.btn{
  display: inline;
  margin: 2px;
}
.rate{
  display: inline;
 font-size: 22px;
}
.star{
  width: 18px;
}

.container {
padding: 20px;
  width: 250px;
}
</style>