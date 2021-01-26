import axios from "axios";

import apiEndpoints from "@/constants/apiEndpoints";

export default {
  namespaced: true,
  state: {
    authData: JSON.parse(localStorage.getItem("authData")) || null,
    expiresAt: localStorage.getItem("expiresAt") || null,
  },
  mutations: {
    setAuthData(state, { authData, expiresAt }) {
      state.authData = { ...authData };
      state.expiresAt =
        expiresAt || state.authData.expires_in * 1000 + new Date().getTime();

      localStorage.setItem("authData", JSON.stringify(state.authData));
      localStorage.setItem("expiresAt", JSON.stringify(state.expiresAt));
    },
    clearAuthData(state) {
      state.authData = null;
      state.expiresAt = null;

      localStorage.removeItem("authData");
      localStorage.removeItem("expiresAt");
    },
  },
  actions: {
    setAuthData({ commit }, { authData, expiresAt }) {
      commit("setAuthData", { authData, expiresAt });
    },

    signup({ commit }, { nick, email, password }) {
      return new Promise((resolve, reject) => {
        axios
          .post(apiEndpoints.user.signup, { nick, email, password })
          .then(function() {
            //   commit('setAuthData', { authData: user.data })
            resolve(true);
          })
          .catch((err) => {
            commit("clearAuthData");
            reject(err);
          });
      });
    },

    login({ commit }, { email, password }) {
      console.log("login");
      return new Promise((resolve, reject) => {
        axios
          .post(apiEndpoints.user.login, { email, password })
          .then((res) => res.data)
          .then((data) => {
            commit("setAuthData", { ...data.user });
            resolve(true);
          })
          .catch((err) => {
            commit("clearAuthData");
            reject(err);
          });
      });
    },

    logout({ commit }) {
      commit("clearAuthData");
    },
  },
  getters: {
    userNick: (state) => (state.authData ? state.authData.nick : null),
    isAuthenticated: (state) => () => {
      return state.authData && new Date().getTime() < state.expiresAt;
    },
    getAccessToken: (state) => () => {
      return state.authData && state.authData.access_token;
    },
    authorized: (state) =>
      state.authData && new Date().getTime() < state.expiresAt,
  },
};
