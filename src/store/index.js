import { createStore } from "vuex"
import cartModule from "./modules/cart/index.js"
import loginModule from "./modules/login/index.js"

const store = createStore({
  modules: {
    cart: cartModule,
    login: loginModule
  },
  state() {
    return {}
  }
})
export default store
