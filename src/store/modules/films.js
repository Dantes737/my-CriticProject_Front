import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

export default {
    namespaced: true,
    state: {
        //Список продуктів   ( Читання: Крок 1 - описали дані
        items: [],
        loading: false,
        error: null,
    },
    mutations: {
        setItemList(state, data) {
            state.items = [...data];
        },
        addFilmToList(state, film) {
            state.items.push(film);
          },
        setLoading(state, data) {
            state.loading = data;
        },
        setError(state, data) {
            state.error = data;
        },
    },
    actions: {
        loadData({ commit }) {
            commit("setLoading", true);
            commit("setError", null);
            return new Promise((resolve, reject) => {
                axios
                    .get(apiEndpoints.films.read)
                    .then((res) => res.data)
                    .then((resData) => {
                      console.log('resData');
                      console.log(resData);
                        if (resData.success) {
                            commit("setItemList", resData.films);
                        }
                        resolve(true);
                    })
                    .catch((err) => {
                        console.log(err);
                        commit("setError", err);
                        reject(false);
                    })
                    .finally(() => {
                        commit("setLoading", false);
                    });
            });
        },
        //////---ADD--///////////////
        addFilm({ commit }, film) {
            commit("setLoading", true);
            commit("setError", null);
            axios
              .post(apiEndpoints.films.add, film)
              .then(                     //Якщо добре
                (res) => res.data
              )
              .then((resData) => {
                if (resData.success) commit("addFilmToList", resData.data);
                else throw new Error("Fatch failed!");
              })
              .catch((err) => {          //Якщо погано
                commit("setError", err);
              })
              .finally(                 //Завжди
                () => commit("setLoading", false)
              );
          },
//////////---Edit---/////////////////////
editFilm({ commit,dispatch }, film) {
    commit("setLoading", true);
    commit("setError", null);
    axios
      .post(apiEndpoints.films.edit, film)
      .then(                             //Якщо добре
        res => res.data
      )
      .then((resData) => {
        if(resData.success)  dispatch ('loadData')
        else throw new Error('Fatch failed!')
      })
      .catch((err) => {                  //Якщо погано

        commit("setError", err);
      })
      .finally(                          //Завжди
        () => commit("setLoading", false)
      );
  },
          /////Delete//////////
          deleteFilm({ commit, dispatch }, id) {
            commit("setLoading", true);
            commit("setError", null);
            console.log("id");
            console.log(id);
            // axios.delete(apiEndpoints.films.delete,{params:{id}})    //через params, тоді на сервері берем з req.query.id
            axios.delete(apiEndpoints.films.delete, { data: { id } }) //через data, тоді на сервері берем з req.body.id        
              .then(                             //Якщо добре
                res => res.data
              )
              .then((resData) => {
                if(resData.success)  dispatch ('loadData')
                else throw new Error('Fatch failed!')
              })
              .catch((err) => {                  //Якщо погано
      
                commit("setError", err);
              })
              .finally(                          //Завжди
                () => commit("setLoading", false)
              );
          },

    },

    //Зчитуємо дані зі стора (state)
    getters: {
        getItems: (state) => {
            return state.items
        },
        getItemById: (state) => (id) => {
            return state.items.find((item) => item._id == id)
          },
        isLoading: (state) => state.loading,
        isError: (state) => state.error,
    },
};
