<template>
  <div class="pList">
          <item
      class="prod"
      v-for="items in itList"
      :key="items._id"
      :title="items.title"
      :rating="items.rating"
      :id="items._id"
      :myImg="items.image"

    />

  </div> 
</template>

<script>
import Item from "../Item/Item.vue";

export default {
  name: "ItemList",
  components: {
    Item,
  },
  props: {
    itList: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="css" scoped>
.pList {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
}

.prod {
  /* border: 2px solid #8f8f8f; */
  width: 250px;
}
</style>