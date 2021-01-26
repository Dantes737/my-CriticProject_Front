<template>
  <div class="filter">
    <div>
      <h2 class="title is-4">{{ films }}</h2>
    </div>
    <div>
      <div>
        <input
          class="checkboxes"
          @click="$emit('film-button')"
          type="checkbox"
        />Фільми
      </div>
      <div>
        <input
          class="checkboxes"
          @click="$emit('serial-button')"
          type="checkbox"
        />Серіали
      </div>
      <div>
        <input
          class="checkboxes"
          @click="$emit('game-button')"
          type="checkbox"
        />Відеоігри
      </div>
      <div>
        <input
          class="checkboxes"
          @click="$emit('mult-button')"
          type="checkbox"
        />Анімаційні фільми
      </div>
    </div>
    <div>
      <b-tooltip label="Get random film" position="is-right">
        <img
          class="dice"
          @click="getRandomItem"
          src="@/assets/dice.png"
          alt="dice"
        />
      </b-tooltip>
    </div>
    <div>
      Рік випуску :
      <b-field>
        <b-slider
          v-model="numbers"
          type="is-danger"
          :min="1994"
          :max="2020"
          :step="1"
        >
        </b-slider>
      </b-field>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters} from "vuex";


export default {
  name: "SFilter",

computed: {
...mapGetters("films",["getItems"])
},

  props: {
    films: {
      type: String,
      default: "setTitle",
    },
  },


  data() {
    return {
      numbers: [1994, 2020],
    
    };
  },
watch: {
  numbers(newValue) {
     this.$emit("year-filter", newValue);

  }
},
  methods: {
 ...mapActions(["yearFilter"]),

    getRandomItem() {
      const randNum = Math.floor(1 + Math.random() * 22);
      let itemsArr=this.getItems
      let randItem=itemsArr[randNum]
      let randId=randItem._id
      this.$router.push({
        name: "item_p",
        params: { item_id: randId },
      });
    },
  },
};
</script>

<style lang="css" scoped>
.filter {
  margin-left: 10px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  height: max-content;
  width: 280px;
  background-color: lightgreen;
}
.checkboxes {
  width: 20pt;
  height: 20px;
}
.dice {
  margin: 25%;
  cursor: pointer;
  width: 100px;
}
</style>