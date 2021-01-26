export default {
    namespaced: true,

  state: {
    items: [{
      itemTitle: "Матриця",
      itemImg: require("@/assets/posters/matrix.jpg"),
    },
    {
      itemTitle: "Форест Гамп",
      itemImg: require("@/assets/posters/FG.jpg"),
    },
    {
      itemTitle: "Втеча з Шоушенка",
      itemImg: require("@/assets/posters/Escape.jpg"),
    },
    {
      itemTitle: "DOOM Eternal",
      itemImg: require("@/assets/posters/Doom_Eternal.jpg"),
    },

    {
      itemTitle: "Інтерстелар",
      itemImg: require("@/assets/posters/Interstellar.jpg"),
    },
    {
      itemTitle: "Spider-Man: Into the Spider-Verse",
      itemImg: require("@/assets/posters/spider-man-spider-verse.jpg"),
    },
    {
      itemTitle: "Справжній детектив",
      itemImg: require("@/assets/posters/True_Detective.jpg"),
    },
    {
      itemTitle: "Володар перснів: Повернення короля",
      itemImg: require("@/assets/posters/return_of_the_king.jpg"),
    },
    {
      itemTitle: "Готель Гранд-Будапешт",
      itemImg: require("@/assets/posters/hotel.jpg"),
    },
    {
      itemTitle: "Люди в чорному",
      itemImg: require("@/assets/posters/man_in_black.jpg"),
    },

    {
      itemTitle: "WALL-E",
      itemImg: require("@/assets/posters/WALL-E.jpg"),
    },
  
    {
      itemTitle: "Кримінальне Чтиво",
      itemImg: require("@/assets/posters/Palp.jpg"),
    },

    {
      itemTitle: "Бетмен: Темний лицар",
      itemImg: require("@/assets/posters/betmen.jpg"),
    },

    {
      itemTitle: "Начало",
      itemImg: require("@/assets/posters/interception.jpeg"),
    },

    {
      itemTitle: "Scrubs",
      itemImg: require("@/assets/posters/Scrubs.jpg"),
    },

    {
      itemTitle: "Friends",
      itemImg: require("@/assets/posters/Friends.jpg"),
    },

    {
      itemTitle: "Mass Effect 3",
      itemImg: require("@/assets/posters/Mass_Effect_3.jpg"),
    },

    {
      itemTitle: "Deus Ex:Human Revolution",
      itemImg: require("@/assets/posters/deus-ex.jpg"),
    },

    {
      itemTitle: "Edge of Tomorrow",
      itemImg: require("@/assets/posters/tom-cruse.jpg"),
    },

    {
      itemTitle: "Атака титанів",
      itemImg: require("@/assets/posters/Attack.jpg"),
    },

    {
      itemTitle: "The Boys",
      itemImg: require("@/assets/posters/The-Boys.jpg"),
    },

    {
      itemTitle: "Blade Runner",
      itemImg: require("@/assets/posters/bladerunner.jpg"),
    },

    {
      itemTitle: "Zootopia",
      itemImg: require("@/assets/posters/Zootopia.jpg"),
    },
  ] },
  mutations: {
    add_newItem(state, data) {
      state.items.push({
        ...data,
      })
    },

    updateItem(state, productData) {
      const productIndex = state.items.findIndex(
        (item) => item.itemID == productData.itemID
      )
      state.items[productIndex] = productData
    },

  },
  actions: {
    addNewItem({ commit }, item) {
      commit('add_newItem', item)
    },
    updateItem({ commit }, product) {
      commit('updateItem', product)
    },
  },
  getters: {
    getItems: (state) => state.items,
    getImageByTitle: (state) => (title) => {
      return state.items.find((item) => item.itemTitle === title)
    },
  }
}
