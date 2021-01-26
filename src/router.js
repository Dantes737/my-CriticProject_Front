import Vue from "vue";
import VueRouter from "vue-router";

import MainPage from "./components/MainPage/MainP";
import itemPage from "./components/ItemPage";
import itemCart from "./components/myCart";
import createItem from "./components/addProduct";
import editItem from "./components/editProduct";/////

import store from "./store";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: 'main1', component: MainPage },
  { path: "/items_cart", name: 'list', component: itemCart },
  { path: "/main", name: 'main', component: MainPage },
  { path: "/item/:item_id", name: 'item_p', component: itemPage },
  { path: "/creator/:item_id", name: 'creator', component: createItem },
  { path: "/editor/:item_id", name: 'editor', component: editItem },/////

];

const router = new VueRouter({

  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  let check =
    !store.getters["auth/isAuthenticated"]() &&
    !["/main","/"].includes(to.path);

  if (check) {
    // Недопускаємо до захищених роутів, якщо немає токена
    alert('Зареєструйтесь !');

    next({ path: "/main" });

    return;
  } else {
    next();
  }
});

export default router;