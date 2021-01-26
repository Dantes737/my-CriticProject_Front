import Vue from "vue";
import Vuex from "vuex";
import films from "./modules/films";
import auth from "./modules/auth";
import images from "./modules/images";



Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: []

  },
  mutations: {
    addProductToCart(state, id) {
      if (state.cart.indexOf(id) === -1) {//щоб не додавались айдішки які вже є
        state.cart.push(id)
      }
    },

    delItemFromCart(state, id) {
      state.cart = state.cart.filter(item => (item !== id))
    },
  },
  actions: {
    addToCart({ commit }, id) {
      commit('addProductToCart', id)
    },
    deleteFromCart({ commit }, id) {
      commit('delItemFromCart', id)
    },
  },
  getters: {
    getItemFromCart: (state) => state.cart,
    getCartLength: (state) => state.cart.length,
  },
  modules: {
    films,
    auth,
    images
  },
});

export default store;
