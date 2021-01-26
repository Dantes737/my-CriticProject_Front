export default {
  films: {
    read: `${process.env.VUE_APP_API_URL}/films/list`,
    add: `${process.env.VUE_APP_API_URL}/films/add`,
    delete: `${process.env.VUE_APP_API_URL}/films/delete`,
    edit: `${process.env.VUE_APP_API_URL}/films/edit`
  },
  user: {
    signup: `${process.env.VUE_APP_API_URL}/users/signup`,
    login: `${process.env.VUE_APP_API_URL}/users/login`,
  },
  cart: {
    read: `${process.env.VUE_APP_API_URL}/carts/list`,
    add: `${process.env.VUE_APP_API_URL}/carts/add`,

  },
};
